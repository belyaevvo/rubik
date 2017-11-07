using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using TranslationAid.Parsing;
using TranslationAid.Output;

namespace TranslationAid.UI
{
    public partial class MainForm : Form
    {
        OpenFileDialog OpenFileDlg = new OpenFileDialog()
        {
            AddExtension = false,
            CheckFileExists= true,
            CheckPathExists = true,
            DefaultExt = ".ts.wiki",
            Filter = "TS Wiki|*.ts.wiki|All files|*.*",
            RestoreDirectory = false,
            SupportMultiDottedExtensions = true,
            Title = "Open Wiki Documentation",
            ValidateNames = true
        };
        SaveFileDialog SaveFileDlg = new SaveFileDialog()
        {
            AddExtension = true,
            CheckFileExists = false,
            CheckPathExists = true,
            DefaultExt = ".ts.wiki",
            Filter = "TS Wiki|*.ts.wiki|All files|*.*",
            RestoreDirectory = false,
            SupportMultiDottedExtensions = true,
            Title = "Save Wiki Documentation",
            ValidateNames = true
        };
        
        DocBlock enRoot;
        DocBlock geRoot;

        Dictionary<int, DocBlock> EnDocBlockPositions;
        Dictionary<int, DocBlock> GeDocBlockPositions;

        bool loading = false;
        bool buildingText = false;

        public MainForm()
        {
            InitializeComponent();
        }

        private void EngOpenButton_Click(object sender, EventArgs e)
        {
            if (OpenFileDlg.ShowDialog(this) == System.Windows.Forms.DialogResult.OK)
            {
                EngFileNameBox.Text = OpenFileDlg.FileName;
            }
        }
        private void GeOpenButton_Click(object sender, EventArgs e)
        {
            if (OpenFileDlg.ShowDialog(this) == System.Windows.Forms.DialogResult.OK)
            {
                GeFileNameBox.Text = OpenFileDlg.FileName;
            }
        }

        private void EngFileNameBox_TextChanged(object sender, EventArgs e)
        {
            enRoot = LoadFile(EngFileNameBox.Text, true);
            bool cont = VerifySameWiki();
            if (!cont)
            {
                cont = ShowConfirmMessage("The selected Wiki files don't appear to be the same. Are you sure you wish to continue?", "Continue?");
            }
            if (cont)
            {
                if (enRoot != null && geRoot != null && ShowConfirmMessage("Do you want to update the German Wiki from the English Wiki? This will not replace any existing german translation.", "Update Ge?"))
                {
                    UpdateGeFromEn();
                }
                EnDocBlockPositions = ReconstructWikiForUI(enRoot, EngWikiBox);
                this.Show();
                this.Focus();
                this.BringToFront();
            }
        }
        private bool SuppressGeFileNameBoxTextChanged = false;
        private void GeFileNameBox_TextChanged(object sender, EventArgs e)
        {
            if (!SuppressGeFileNameBoxTextChanged)
            {
                geRoot = LoadFile(GeFileNameBox.Text, true);
                bool cont = VerifySameWiki();
                if (!cont)
                {
                    cont = ShowConfirmMessage("The selected Wiki files don't appear to be the same. Are you sure you wish to continue?", "Continue?");
                }
                if (cont)
                {
                    if (enRoot != null && geRoot != null && ShowConfirmMessage("Do you want to update the German Wiki from the English Wiki? This will not replace any existing german translation.", "Update Ge?"))
                    {
                        UpdateGeFromEn();
                    }
                    GeDocBlockPositions = ReconstructWikiForUI(geRoot, GeWikiBox);
                    this.Show();
                    this.Focus();
                    this.BringToFront();
                }
            }
            SuppressGeFileNameBoxTextChanged = false;
        }

        private void GenerateNewGeButton_Click(object sender, EventArgs e)
        {
            geRoot = enRoot.Clone();
            GeDocBlockPositions = ReconstructWikiForUI(geRoot, GeWikiBox);
        }

        //Use dictionary of RangeStartIndex -> DocBlock
        private void EngWikiBox_TextChanged(object sender, FastColoredTextBoxNS.TextChangedEventArgs e)
        {
            if (EnDocBlockPositions != null && !loading && !buildingText)
            {
                int offset = GetOffset(EngWikiBox.Text, e.ChangedRange.Start.iLine, e.ChangedRange.Start.iChar);
                DocBlock theBlock = GetDocBlockForPosition(offset, EnDocBlockPositions);
                if (theBlock == null)
                {
                    ShowErrorMessage("Unfound documentation block! Cannot modify the text for that area.", "Text not found!");
                }
                else
                {
                    string oldText = theBlock.text;
                    string newText = e.ChangedRange.Text + "\r\n";

                    theBlock.text = newText;

                    EnDocBlockPositions = UpdateKeys(oldText, newText, theBlock, EnDocBlockPositions);
                }
            }
        }
        private void GeWikiBox_TextChanged(object sender, FastColoredTextBoxNS.TextChangedEventArgs e)
        {
            if (GeDocBlockPositions != null && !loading && !buildingText)
            {
                int offset = GetOffset(GeWikiBox.Text, e.ChangedRange.Start.iLine, e.ChangedRange.Start.iChar);
                DocBlock theBlock = GetDocBlockForPosition(offset, GeDocBlockPositions);
                if (theBlock == null)
                {
                    ShowErrorMessage("Unfound documentation block! Cannot modify the text for that area.", "Text not found!");
                }
                else
                {
                    string oldText = theBlock.text;
                    string newText = e.ChangedRange.Text + "\r\n";

                    theBlock.text = newText;

                    GeDocBlockPositions = UpdateKeys(oldText, newText, theBlock, GeDocBlockPositions);
                }
            }
        }
        private int GetOffset(string WikiText, int iLine, int iChar)
        {
            int result = iChar;

            string[] lines = WikiText.Split('\n');
            for (int i = 0; i < lines.Length && i < iLine; i++)
            {
                result += lines[i].Length + 1;
            }

            return result;
        }
        private DocBlock GetDocBlockForPosition(int pos, Dictionary<int, DocBlock> blocks)
        {
            for (; pos > -1; pos--)
            {
                if (blocks.ContainsKey(pos))
                {
                    return blocks[pos];
                }
            }
            return null;
        }
        private Dictionary<int, DocBlock> UpdateKeys(string oldText, string newText, DocBlock ChangedBlock, Dictionary<int, DocBlock> blocks)
        {
            int shift = newText.Length - oldText.Length;
            Dictionary<int, DocBlock> newBlocks = new Dictionary<int, DocBlock>();
            bool foundBlock = false;
            foreach (int aKey in blocks.Keys)
            {
                int newKey = aKey;
                if (foundBlock)
                {
                    newKey += shift;
                }
                newBlocks.Add(newKey, blocks[aKey]);

                if (blocks[aKey] == ChangedBlock)
                {
                    foundBlock = true;
                }
            }

            return newBlocks;
        }

        private void SaveEnButton_Click(object sender, EventArgs e)
        {
            SaveEn(EngFileNameBox.Text);
        }
        private void SaveButton_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(GeFileNameBox.Text))
            {
                SaveGeAs();
            }
            else
            {
                SaveGe(GeFileNameBox.Text);
            }
        }
        private void SaveAsButton_Click(object sender, EventArgs e)
        {
            SaveGeAs();
        }

        private void SaveGeAs()
        {
            if (SaveFileDlg.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                SuppressGeFileNameBoxTextChanged = true;
                GeFileNameBox.Text = SaveFileDlg.FileName;
                SaveGe(GeFileNameBox.Text);
            }
        }
        private void SaveEn(string FileName)
        {
            SaveWiki(FileName, enRoot);
        }
        private void SaveGe(string FileName)
        {
            SaveWiki(FileName, geRoot);
        }
        private void SaveWiki(string FileName, DocBlock Root)
        {
            File.WriteAllText(FileName, ReconstructWiki(Root));
        }

        private bool CheckFileExists(string FileName)
        {
            return File.Exists(FileName);
        }
        private DocBlock LoadFile(string FileName, bool SuppressIOErrors = false)
        {
            DocBlock Result = null;

            loading = true;

            if (CheckFileExists(FileName))
            {
                string FileText  = File.ReadAllText(FileName);
                Result = ParseText(FileText);   
            }
            else if(!SuppressIOErrors)
            {
                ShowErrorMessage("The file specified does not exist!", "File not found!");
            }

            loading = false;

            return Result;
        }
        private DocBlock ParseText(string FileText)
        {
            DocBlock result = null;

            Parser ps = new Parser();
            try
            {
                ps.Parse(FileText, ref result);
            }
            catch (Exception ex)
            {
                ShowErrorMessage("Parser error occured! Error message: " + ex.Message, "Invalid wiki text!");
            }

            return result;
        }
        private bool VerifySameWiki()
        {
            bool result = false;

            if (enRoot == null)
            {
                return true;
            }
            if (geRoot == null)
            {
                return true;
            }

            try
            {
                DocBlock enPageTitle = enRoot.Children.Where(x => x.type == DocBlock.Types.PageTitle).First();
                DocBlock gePageTitle = geRoot.Children.Where(x => x.type == DocBlock.Types.PageTitle).First();

                if (enPageTitle.text == gePageTitle.text)
                {
                    result = true;
                }
                else if (enPageTitle.text.Contains(gePageTitle.text))
                {
                    result = true;
                }
                else if (gePageTitle.text.Contains(enPageTitle.text))
                {
                    result = true;
                }
                else
                {
                    //Test en match level 

                    string en = enPageTitle.text;
                    string ge = enPageTitle.text;
                    int enI = 0;
                    int geI = 0;
                    int matchedLetters = 0;
                    for (; enI < en.Length; enI++)
                    {
                        char findLetter = en[enI];
                        for (; geI < ge.Length; geI++)
                        {
                            if (ge[geI] == findLetter)
                            {
                                matchedLetters++;
                                break;
                            }
                        }
                    }

                    if (matchedLetters >= en.Length / 2)
                    {
                        //Greater than 50% match? Probably the same Wiki...
                        result = true;
                    }

                    //test ge match in a similar way
                    enI = 0;
                    geI = 0;
                    matchedLetters = 0;
                    for (; geI < ge.Length; geI++)
                    {
                        char findLetter = ge[geI];
                        for (; enI < en.Length; enI++)
                        {
                            if (en[enI] == findLetter)
                            {
                                matchedLetters++;
                                break;
                            }
                        }
                    }

                    if (matchedLetters >= ge.Length / 2)
                    {
                        //Greater than 50% match? Probably the same Wiki...
                        result = true;
                    }
                }
            }
            catch
            {
            }

            return result;
        }
        private string ReconstructWiki(DocBlock root)
        {
            WikiBuilder builder = new WikiBuilder();
            return builder.BuildUIWiki(root, null);
        }
        private Dictionary<int, DocBlock> ReconstructWikiForUI(DocBlock root, FastColoredTextBoxNS.FastColoredTextBox tb)
        {
            WikiBuilder builder = null;

            try
            {
                buildingText = true;

                builder = new WikiBuilder();
                builder.BuildUIWiki(root, tb);
            }
            finally
            {
                buildingText = false;
            }

            return builder.DocBlockPositions;
        }
        private void UpdateGeFromEn()
        {
            List<DocBlock> geRemovedBlocks = DocBlockUpdater.UpdateBlocks(geRoot, enRoot);
            WikiForm theForm = new WikiForm();
            foreach (DocBlock aChild in geRemovedBlocks)
            {
                ReconstructWikiForUI(aChild, theForm.TheWikiBox);
            }
            theForm.Text = "Removed German Wiki";
            theForm.Show();
        }

        private bool ShowConfirmMessage(string message, string caption)
        {
            return MessageBox.Show(message, "Confirm choice - " + caption, MessageBoxButtons.YesNo, MessageBoxIcon.Question, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly, false) == System.Windows.Forms.DialogResult.Yes;
        }
        private void ShowErrorMessage(string message, string caption)
        {
            MessageBox.Show(message, "Error - " + caption, MessageBoxButtons.OK, MessageBoxIcon.Error, MessageBoxDefaultButton.Button1, MessageBoxOptions.DefaultDesktopOnly, false); 
        }
    }
}
