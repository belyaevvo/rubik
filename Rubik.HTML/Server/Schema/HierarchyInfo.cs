using System;
using System.Web;
using System.ComponentModel;
using System.Collections.Generic;

namespace Rubik.Server.Schema
{
    public class HierarchyInfo : InfoObject
    {
        public DimensionInfo Dimension
        {
            get; set;
        }

        public List<LevelInfo> Levels
        {
            get; set;
        }

        public CubeInfo Cube
        {
            get; set;
        }
    }
}