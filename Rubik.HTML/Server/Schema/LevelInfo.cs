using System;
using System.Web;
using System.ComponentModel;

namespace Rubik.Server.Schema
{
    public class LevelInfo : InfoObject
    {
        public HierarchyInfo Hierarchy
        {
            get; set;
        }

        public DimensionInfo Dimension
        {
            get; set;
        }

        public CubeInfo Cube
        {
            get; set;
        }
    }
}