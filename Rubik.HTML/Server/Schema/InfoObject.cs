using System;
using System.Web;
using System.ComponentModel;

namespace Rubik
{
    public class InfoObject : Server.Schema.SchemaObject
    {
        public string Name
        {
            get; set;
        }
    }
}