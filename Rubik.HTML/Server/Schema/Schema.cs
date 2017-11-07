using System;
using System.Web;
using System.ComponentModel;
using System.Collections.Generic;

namespace Rubik.Server.Schema
{
    public class Schema
    {
        public Axis Columns
        {
            get; set;
        }

        public Axis Rows
        {
            get; set;
        }

        public Axis Filters
        {
            get; set;
        }

        public List<MeasureInfo> Data
        {
            get; set;
        }

        public List<CalculatedMember> CalculatedMembers
        {
            get; set;
        }

        public List<CalculatedSet> CalculatedSets
        {
            get; set;
        }

        public String CubeName
        {
            get; set;
        }
    }
}