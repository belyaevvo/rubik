using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace VSTemplates
{
    public partial class WindowTemplateForm : Form
    {
        public WindowTemplateForm()
        {
            InitializeComponent();
        }

        string _namespace = "";
        string _classname = "";

        public string get_Namespace()
        {
            return _namespace;
        }
        public string get_ClassName()
        {
            return _classname;
        }

        private void OKButton_Click(object sender, EventArgs e)
        {
            _namespace = NamespaceBox.Text;
            _classname = ClassNameBox.Text;
        }
    }
}
