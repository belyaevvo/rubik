using System;
using System.Web;
using System.ComponentModel;
using System.Collections.Generic;

namespace Rubik.Server.Schema
{
    public class CubeInfo : InfoObject
    {
        public List<DimensionInfo> Dimensions
        {
            get; set;
        }

        public List<MeasureInfo> Measures
        {
            get; set;
        }
    }
}