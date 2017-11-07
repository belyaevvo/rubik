using System;
using System.Web;
using System.ComponentModel;
using System.Collections.Generic;

namespace Rubik.Server.Schema
{
    public class CellSet
    {
        public List<Cell> Cells
        {
            get; set;
        }

        public ResultAxis Columns
        {
            get; set;
        }

        public ResultAxis Rows
        {
            get; set;
        }

        public ResultAxis Filters
        {
            get; set;
        }
    }
}