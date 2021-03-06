﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.AnalysisServices.AdomdClient;
using Newtonsoft.Json;
using System.IO;
using System.Text;
using System.Data;
using Rubik.Server.Json;

namespace Rubik.HTML
{


    public class MDXController : ApiController
    {

        static Dictionary<string, AdomdCommand> runningCommands = new Dictionary<string, AdomdCommand>();

        public class SessionParameters
        {
            public string sessionId { get; set; }
            public string database { get; set; }            
        }

        public class ExecuteParameters
        {
            public string sessionId { get; set; }
            public string database { get; set; }
            public string command { get; set; }            
        }

        public class MetaDataParameters
        {
            public string sessionId { get; set; }
            public string database { get; set; }
            public string schema { get; set; }
            public Dictionary<string, string> restrictions { get; set; }
        }
        

       

        // GET api/<controller>/5
        //[AcceptVerbs("GET","POST")]    
        //[ActionName("execute")]    
        //[HttpGet]
        [HttpPost]
        public HttpResponseMessage BeginSession([FromBody] SessionParameters args)
        {
            AdomdConnection con = AcquireConnection(args.database);
            var response = Request.CreateResponse(HttpStatusCode.OK);            
            var json = JsonConvert.SerializeObject(new { SessionId = con.SessionID }, Formatting.Indented);
            con.Close(false);
            response.Content = new StringContent(json, Encoding.UTF8, "application/json");
            return response;
        }

        // GET api/<controller>/5
        //[AcceptVerbs("GET","POST")]    
        //[ActionName("execute")]    
        //[HttpGet]
        [HttpPost]
        public HttpResponseMessage EndSession([FromBody] SessionParameters args)
        {
            AdomdConnection con = AcquireConnection(args.database, args.sessionId);
            var response = Request.CreateResponse(HttpStatusCode.OK);            
            con.Close();
            response.Content = new StringContent("{}", Encoding.UTF8, "application/json");

            return response;
        }


        // GET api/<controller>/5
        //[AcceptVerbs("GET","POST")]    
        //[ActionName("execute")]    
        //[HttpGet]
        [HttpPost]
        public HttpResponseMessage Cancel([FromBody] SessionParameters args)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);            
            if (args.sessionId != null)
            {
                if (runningCommands.ContainsKey(args.sessionId))
                {
                    var cmd = runningCommands[args.sessionId];
                    if (cmd != null)
                    {
                        cmd.Cancel();                        
                    }
                }
                response = Request.CreateResponse(HttpStatusCode.OK);
            }
            else
            {
                response = Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            response.Content = new StringContent("{}", Encoding.UTF8, "application/json");

            return response;
        }

        // GET api/<controller>/5
        //[AcceptVerbs("GET","POST")]    
        //[ActionName("execute")]    
        //[HttpGet]
        [HttpPost]
        public HttpResponseMessage Execute([FromBody] ExecuteParameters args)
        {
            AdomdConnection con = AcquireConnection(args.database, args.sessionId);            
            AdomdCommand cmd = con.CreateCommand();
            RegisterCommand(args.sessionId,cmd);      
            cmd.CommandText = args.command;
            var rdr = cmd.ExecuteReader();
            DataTable dt = new DataTable();
            if (rdr != null)
            {                
                var metadata_table = rdr.GetSchemaTable();
                if (metadata_table != null)
                {
                    foreach (DataRow row in metadata_table.Rows)
                    {
                        dt.Columns.Add(new DataColumn(row[0].ToString()));
                    }
                }

                if (dt.Columns.Count >= rdr.FieldCount)
                {
                    while (rdr.Read())
                    {
                        var values = new object[rdr.FieldCount];
                        for (int i = 0; i < rdr.FieldCount; i++)
                        {
                            values[i] = rdr[i];
                        }
                        dt.Rows.Add(values);
                    }
                }
                rdr.Close();
            }
            UnRegisterCommand(args.sessionId);
            con.Close(args.sessionId == null ? true : false);
            DataSet ds = new DataSet();
            ds.Tables.Add(dt);            
            string json = CreateJsonDataSet(ds);
            var response = Request.CreateResponse(HttpStatusCode.OK);            
            response.Content = new StringContent(json, Encoding.UTF8, "application/json");
            return response;            
        }

        


        // GET api/<controller>/5
        //[AcceptVerbs("GET","POST")]    
        //[ActionName("execute")]    
        //[HttpGet]
        [HttpPost]
        public HttpResponseMessage ExecuteNonQuery([FromBody] ExecuteParameters args)
        {
            AdomdConnection con = AcquireConnection(args.database, args.sessionId);
            AdomdCommand cmd = con.CreateCommand();
            RegisterCommand(args.sessionId, cmd);
            cmd.CommandText = args.command;
            cmd.ExecuteNonQuery();
            UnRegisterCommand(args.sessionId);
            con.Close(args.sessionId == null ? true : false);
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent("{}", Encoding.UTF8, "application/json");
            return response;
        }


        // GET api/<controller>/5
        //[AcceptVerbs("GET","POST")]    
        //[ActionName("execute")]    
        //[HttpGet]
        [HttpPost]
        public HttpResponseMessage ExecuteCellSet([FromBody] ExecuteParameters args)
        {
            try
            {
                AdomdConnection con = AcquireConnection(args.database, args.sessionId);
                AdomdCommand cmd = con.CreateCommand();
                RegisterCommand(args.sessionId, cmd);
                //cmd.CommandText = args!=null && !string.IsNullOrEmpty(args.query) ? args.query : "SELECT NON EMPTY { [Measures].[Internet Sales Amount] } ON 0, HIERARCHIZE ( [Geography].[City].AllMembers ) ON 1 FROM [Adventure Works]";
                cmd.CommandText = args.command;
                CellSet cst = cmd.ExecuteCellSet();
                string json = CreateJsonCellSet(cst);
                //string json2 = CreateJsonCellSet2(cst);
                UnRegisterCommand(args.sessionId);
                con.Close(args.sessionId == null ? true : false);
                var response = Request.CreateResponse(HttpStatusCode.OK);
                response.Content = new StringContent(json, Encoding.UTF8, "application/json");
                return response;
            }
            catch (Exception ex) {
                var response = Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);                
                return response;
            }
        }


        [HttpPost]
        public HttpResponseMessage GetMetaData([FromBody] MetaDataParameters args)
        {
            AdomdConnection con = AcquireConnection(args.database, args.sessionId);
            var restrictions = new AdomdRestrictionCollection();
            foreach (var restriction in args.restrictions.Select(s => new AdomdRestriction(s.Key, s.Value)))
            {
                restrictions.Add(restriction);
            }
            DataSet ds = con.GetSchemaDataSet(args.schema,restrictions);
            string json = CreateJsonDataSet(ds);
            con.Close(args.sessionId == null ? true : false);
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(json, Encoding.UTF8, "application/json");
            return response;
        }

       

        private AdomdConnection AcquireConnection(string database, string sessionId = null)
        {
            //AdomdConnection con = new AdomdConnection("Provider=MSOLAP; Data Source=https://bi.galaktika-soft.com/olap/2012/msmdpump.dll; Initial Catalog=AdventureWorksDW2012 MD-EE;");            
            //AdomdConnection con = new AdomdConnection("Provider=MSOLAP; Data Source=https://ptrbi.lukoil.com/msolap/; Initial Catalog=Сбыт;");
            //AdomdConnection con = new AdomdConnection("Provider=MSOLAP; Data Source=https://ptrolapapp2.srv.lukoil.com/msolap/; Initial Catalog=Сбыт;");
            AdomdConnection con = new AdomdConnection("Provider=MSOLAP; Data Source=https://ptrolapapp.srv.lukoil.com/msolap/; Initial Catalog=" + database + ";");
            con.SessionID = sessionId;
            //AdomdConnection con = new AdomdConnection("Provider=MSOLAP; Data Source=hyperion\\sql2005; Catalog=Adventure Works DW;");            
            con.Open();
            return con;
        }

        private void RegisterCommand(string sessionId, AdomdCommand cmd)
        {
            if (sessionId != null)
            {
                runningCommands[sessionId] = cmd;
            }
        }

        private void UnRegisterCommand(string sessionId)
        {
            if (sessionId != null)
            {
                runningCommands.Remove(sessionId);
            }
        }

        private string CreateJsonDataSet(DataSet ds)
        {
            return JsonConvert.SerializeObject(ds, Formatting.Indented);
        }

        private string CreateJsonCellSet(CellSet cst)
        {
            try
            {
                StringBuilder sb = new StringBuilder();
                StringWriter sw = new StringWriter(sb);
                string columnName = string.Empty;
                string fieldVal = string.Empty;
                //check if any axes were returned else throw error.
                                
                

                using (JsonWriter myJson = new JsonTextWriter(sw))
                {
                    myJson.WriteStartObject();

                    myJson.WritePropertyName("columns");
                    if (cst.Axes.Count > 0)
                    {                        
                        WriteAxis(myJson, cst.Axes[0], cst.OlapInfo.AxesInfo.Axes[0]);
                    }
                    
                    myJson.WritePropertyName("rows");
                    if (cst.Axes.Count > 1)
                    {                     
                        WriteAxis(myJson, cst.Axes[1], cst.OlapInfo.AxesInfo.Axes[1]);
                    }

                    myJson.WritePropertyName("filters");
                    WriteAxis(myJson, cst.FilterAxis, cst.OlapInfo.AxesInfo.FilterAxis);

                    myJson.WritePropertyName("cells");
                    myJson.WriteStartObject();
                    for (int i = 0; i < cst.Axes[0].Positions.Count * cst.Axes[1].Positions.Count; i++)
                    {
                        if (cst[i].Value != null)
                        {
                            myJson.WritePropertyName(i.ToString());
                            myJson.WriteStartObject();
                            myJson.WritePropertyName("value");
                            myJson.WriteValue(cst[i].Value);
                            myJson.WritePropertyName("fmtValue");
                            myJson.WriteValue(cst[i].FormattedValue);
                            myJson.WriteEndObject();
                        }
                    }
                    myJson.WriteEndObject();
                    myJson.WriteEndObject();

                }
                cst = null;
                return sw.ToString();
            }
            catch (Exception ex)
            {
                cst = null;
                throw;
            }
        }

        private string CreateJsonCellSet2(CellSet cst) {
            var contractResolver = new CellSetContractResolver();

            contractResolver.AddInclude("CellSet", new List<string>() {
                    "Axes",
                    "Cells"
                });
            contractResolver.AddInclude("Cell", new List<string>() {
                    "Value",
                    "FormattedValue"
                });
            contractResolver.AddInclude("Axis", new List<string>() {
                    "Set",
                    "Name"
                });
            contractResolver.AddInclude("Set", new List<string>() {
                    //"Hierarchies",
                    "Tuples"
                });
            contractResolver.AddInclude("Hierarchy", new List<string>() {
                    "Caption",
                    "DefaultMember",
                    "UniqueName"
                });
            contractResolver.AddInclude("Tuple", new List<string>() {
                    "Members",
                    "TupleOrdinal"
                });
            contractResolver.AddInclude("Member", new List<string>() {                    
                    "Caption",
                    "UniqueName",
                    "ChildCount",
                    "LevelDepth",
                    "DrilledDown",
                    "LevelName",
                    "ParentSameAsPrevious",
                    "MemberProperties"
                });
            contractResolver.AddInclude("MemberProperty", new List<string>() {
                    "Name",
                    "UniqueName",
                    "Value"
                });

            var settings = new JsonSerializerSettings()
            {
                ContractResolver = contractResolver,
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };
            //settings.Converters.Add(new CellSetJsonConverter(cst.Axes[0].Set.Tuples.Count, cs.Axes[1].Set.Tuples.Count));
            var json= JsonConvert.SerializeObject(cst, Formatting.Indented, settings);
            return json;
            
        }

        private void WriteAxis(JsonWriter myJson, Axis axis, OlapInfoAxis axisInfo)
        {            
            myJson.WriteStartObject();
            //myJson.WritePropertyName("name");
            //myJson.WriteValue(axis.Name);       
            myJson.WritePropertyName("hierarchies");
            myJson.WriteStartArray();
            foreach (var hier in axisInfo.Hierarchies) {
                myJson.WriteStartObject();
                //myJson.WritePropertyName("caption");
                //myJson.WriteValue(hier.Caption);
                myJson.WritePropertyName("uniqueName");
                myJson.WriteValue(hier.Name);
                myJson.WritePropertyName("properties");
                myJson.WriteStartArray();
                foreach (var prop in hier.HierarchyProperties)
                {
                    if (!IsIntrinsic(prop.Name))
                    {
                        myJson.WriteStartObject();
                        myJson.WritePropertyName("uniqueName");
                        myJson.WriteValue(hier.Name + ".[" + prop.Name + "]");
                        myJson.WriteEndObject();
                    }
                }
                myJson.WriteEndArray();
                //myJson.WritePropertyName("defaultMember");
                //myJson.WriteValue(hier.DefaultMember);
                //myJson.WritePropertyName("name");
                //myJson.WriteValue(hier.Name);
                //myJson.WritePropertyName("hierarchyOrigin");
                //myJson.WriteValue(hier.HierarchyOrigin);                
                myJson.WriteEndObject();
            }
            myJson.WriteEndArray();
            myJson.WritePropertyName("positions");
            myJson.WriteStartArray();
            foreach (var pos in axis.Positions)
            {
                myJson.WriteStartObject();
                myJson.WritePropertyName("members");
                myJson.WriteStartArray();
                foreach (var mbr in pos.Members)
                {
                    myJson.WriteStartObject();
                    myJson.WritePropertyName("caption");
                    myJson.WriteValue(mbr.Caption);
                    myJson.WritePropertyName("uniqueName");
                    myJson.WriteValue(mbr.UniqueName);
                    myJson.WritePropertyName("childCount");
                    myJson.WriteValue(mbr.ChildCount);
                    myJson.WritePropertyName("levelDepth");
                    myJson.WriteValue(mbr.LevelDepth);
                    myJson.WritePropertyName("drilledDown");
                    myJson.WriteValue(mbr.DrilledDown);
                    myJson.WritePropertyName("parentSameAsPrevious");
                    myJson.WriteValue(mbr.ParentSameAsPrevious);
                    myJson.WritePropertyName("properties");
                    myJson.WriteStartArray();
                    foreach (var prop in mbr.MemberProperties) {
                        myJson.WriteStartObject();
                        myJson.WritePropertyName("name");
                        myJson.WriteValue(prop.Name);
                        myJson.WritePropertyName("uniqueName");
                        myJson.WriteValue(prop.UniqueName);
                        myJson.WritePropertyName("value");
                        myJson.WriteValue(prop.Value);                        
                        myJson.WriteEndObject();
                    }
                    myJson.WriteEndArray();
                    myJson.WriteEndObject();                    
                }
                myJson.WriteEndArray();
                myJson.WriteEndObject();                
            }
            myJson.WriteEndArray();
            myJson.WriteEndObject();
        }

        private bool IsIntrinsic(string name)
        {
            var intrinsic = new string[] {
                "PARENT_UNIQUE_NAME",
                "MEMBER_UNIQUE_NAME",
                "MEMBER_CAPTION",
                "LEVEL_UNIQUE_NAME",
                "LEVEL_NUMBER",
                "DISPLAY_INFO"
            };
            return intrinsic.Contains(name);
        }
    }
}