using System;
using System.Web;
using System.ComponentModel;

namespace Rubik.Server.Schema
{
    public class SelectedMember : SchemaObject
    {
        public MemberSelectionEnum SelectionType
        {
            get; set;
        }
    }
}