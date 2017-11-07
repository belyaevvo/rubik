using System;
using System.Web;
using System.ComponentModel;
using System.Collections.Generic;

namespace Rubik.Server.Schema
{
    public class DimensionInfo : InfoObject
    {
        public List<HierarchyInfo> Hierarchies
        {
            get; set;
        }

        public CubeInfo Cube
        {
            get; set;
        }
    }
}