using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.AnalysisServices.AdomdClient;
using Newtonsoft.Json;
using System.IO;
using System.Text;

namespace Rubik.HTML
{
    public class MDXController : ApiController
    {

        // GET api/<controller>/5
        [AcceptVerbs("GET","POST")]
        [HttpGet]                
        public HttpResponseMessage Execute(string mdx)
        {
            AdomdConnection con = new AdomdConnection("Provider=MSOLAP; Data Source=https://bi.galaktikasoft.com/olap/2012/msmdpump.dll; Catalog=AdventureWorksDW2012 MD-EE;");
            con.Open();
            AdomdCommand cmd = con.CreateCommand();
            cmd.CommandText = "SELECT NON EMPTY { [Measures].[Internet Sales Amount] } ON 0, HIERARCHIZE ( [Geography].[City].AllMembers ) ON 1 FROM [Adventure Works]";
            CellSet cst= cmd.ExecuteCellSet();
            string json=BuildBubbleMap(cst);            
            con.Close();
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(json, Encoding.UTF8, "application/json");
            return response;            
        }

        private string BuildBubbleMap(CellSet cst)
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
                    myJson.WritePropertyName("axes");
                    myJson.WriteStartArray();
                    foreach(var axis in cst.Axes)
                    {
                        WriteAxis(myJson, axis);                                                
                    }
                    myJson.WriteEndArray();
                    myJson.WritePropertyName("filterAxis");
                    WriteAxis(myJson, cst.FilterAxis);

                    myJson.WritePropertyName("cells");
                    myJson.WriteStartArray();
                    for (int i = 0; i < cst.Axes[0].Positions.Count * cst.Axes[1].Positions.Count; i++)
                    {
                        myJson.WriteStartObject();
                        myJson.WritePropertyName("value");
                        myJson.WriteValue(cst[i].Value);                        
                        myJson.WritePropertyName("formattedValue");
                        myJson.WriteValue(cst[i].FormattedValue);
                        myJson.WriteEndObject();
                    }
                    myJson.WriteEndArray();
                    
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

        private void WriteAxis(JsonWriter myJson, Axis axis)
        {
            myJson.WriteStartObject();
            myJson.WritePropertyName("name");
            myJson.WriteValue(axis.Name);            
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
                    myJson.WriteEndObject();
                }
                myJson.WriteEndArray();
                myJson.WriteEndObject();                
            }
            myJson.WriteEndArray();
            myJson.WriteEndObject();
        }
    }
}