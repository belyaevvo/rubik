using System;
using System.Web;
using System.ComponentModel;
using System.Collections.Generic;

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

        public List<MemberInfo> Members
        {
            get; set;
        }
    }
}