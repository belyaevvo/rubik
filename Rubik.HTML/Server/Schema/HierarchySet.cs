using System;
using System.Web;
using System.ComponentModel;
using System.Collections.Generic;

namespace Rubik.Server.Schema
{
    public class HierarchySet
    {
        public string HierarchyName
        {
            get; set;
        }

        public string LevelName
        {
            get; set;
        }

        public List<SelectedMember> SelectedMembers
        {
            get; set;
        }

        public List<string> Properties
        {
            get; set;
        }
    }
}