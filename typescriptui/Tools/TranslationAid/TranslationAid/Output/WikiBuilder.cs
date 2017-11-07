using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Drawing;
using System.Threading.Tasks;
using TranslationAid.Parsing;
using FastColoredTextBoxNS;

namespace TranslationAid.Output
{
    public class WikiBuilder
    {
        bool AssocSrcFilesTitleWritten = false;

        GreyReadOnly greyROS = new GreyReadOnly();
        RedReadOnly redROS = new RedReadOnly();
        TextStyle editable = new TextStyle(System.Drawing.Brushes.Black, System.Drawing.Brushes.White, System.Drawing.FontStyle.Regular);

        string result = "";

        public Dictionary<int, DocBlock> DocBlockPositions = new Dictionary<int, DocBlock>(); 

        public WikiBuilder()
        {
        }

        private void Reset()
        {
            result = "";
            AssocSrcFilesTitleWritten = false;
            DocBlockPositions = new Dictionary<int, DocBlock>();
        }

        public string BuildUIWiki(DocBlock root, FastColoredTextBox tb)
        {
            Reset();
            BuildUIWiki_Int(root, tb, DocBlock.Types.Unknown);
            OutputText("\r\n\r\n----\r\n\r\n", tb, greyROS);
            return result;
        }
        private void BuildUIWiki_Int(DocBlock root, FastColoredTextBox tb, DocBlock.Types parentType)
        {
            switch (root.type)
            {
                case DocBlock.Types.File:
                    if (tb != null)
                    {
                        tb.Clear();
                        tb.ClearStylesBuffer();
                    }
                    break;
                case DocBlock.Types.Anchor:
                    {
                        DocBlockPositions.Add(result.Length, root);

                        string newText = root.text;
                        OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS));
                    }
                    break;
                case DocBlock.Types.PageTitle:
                    {
                        DocBlockPositions.Add(result.Length, root);

                        string newText = root.text;
                        OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS));
                    }
                    break;
                case DocBlock.Types.Module:
                    {
                        DocBlockPositions.Add(result.Length, root);

                        string newText = "*Module:* " + root.text;
                        OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS));
                    }
                    break;
                case DocBlock.Types.Extends:
                    {
                        DocBlockPositions.Add(result.Length, root);

                        string newText = "*Extends:* " + root.text;
                        OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS));
                    }
                    break;
                case DocBlock.Types.Implements:
                    {
                        DocBlockPositions.Add(result.Length, root);

                        string newText = "*Implements:* " + root.text;
                        OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS));
                    }
                    break;
                case DocBlock.Types.Exported:
                    {
                        DocBlockPositions.Add(result.Length, root);

                        string newText = "*Exported:* " + root.text + "\r\n\r\n";
                        OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS));
                    }
                    break;
                case DocBlock.Types.AssociatedSourceFile:
                    {
                        if (!AssocSrcFilesTitleWritten)
                        {
                            string newText = "_Associated source files:_";
                            OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS));

                            AssocSrcFilesTitleWritten = true;
                        }

                        DocBlockPositions.Add(result.Length, root);

                        string newText2 = "* " + root.text;
                        OutputText(newText2, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS));
                    }
                    break;
                case DocBlock.Types.SectionTitle:
                    {
                        DocBlockPositions.Add(result.Length, root);

                        string newText = root.text.Trim();
                        newText = "\r\n\r\n----\r\n\r\n" + newText + "";
                        OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS));
                    }
                    break;
                case DocBlock.Types.Constructor:
                    {
                        DocBlockPositions.Add(result.Length, root);

                        string newText = root.text.Trim();
                        newText = "\r\n" + newText;
                        OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS));
                    }
                    break;
                case DocBlock.Types.Method:
                    {
                        DocBlockPositions.Add(result.Length, root);

                        string newText = root.text.Trim();
                        newText = "\r\n" + newText;
                        OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS));
                    }
                    break;
                case DocBlock.Types.Argument:
                    {
                        DocBlockPositions.Add(result.Length, root);

                        string newText = "* " + root.text;
                        OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS), false);
                    }
                    break;
                case DocBlock.Types.Returns:
                    {
                        DocBlockPositions.Add(result.Length, root);

                        string newText = "* " + root.text;
                        OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS), false);
                    }
                    break;
                case DocBlock.Types.Property:
                    {
                        DocBlockPositions.Add(result.Length, root);

                        string newText = root.text.Trim();
                        newText = "\r\n" + newText;
                        OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS));
                    }
                    break;
                case DocBlock.Types.Description:
                    {
                        DocBlockPositions.Add(result.Length, root);

                        string newText = root.text.Trim();
                        if (parentType == DocBlock.Types.SectionTitle)
                        {
                            newText = "\r\n" + newText;
                        }
                        OutputText(newText, tb, root.Editable ? editable: (root.isNew ? (Style)redROS : (Style)greyROS));
                    }
                    break;
            }

            foreach (DocBlock aChild in root.Children)
            {
                BuildUIWiki_Int(aChild, tb, root.type);
            }
        }
        private void OutputText(string text, FastColoredTextBox tb, Style style, bool endsLine = true)
        {
            if (endsLine)
            {
                if (!text.EndsWith("\n"))
                {
                    if (!text.EndsWith("\r"))
                    {
                        text += "\r";
                    }
                    text += "\n";
                }
            }

            if (tb != null)
            {
                tb.AppendText(text, style);
            }
            result += text;
        }
    }

    public class GreyReadOnly : ReadOnlyStyle
    {
        public Brush ForeBrush { get; set; }
        public Brush BackgroundBrush { get; set; }
        public FontStyle FontStyle { get; set; }
        //public readonly Font Font;
        public StringFormat stringFormat;

        public GreyReadOnly()
            : base()
        {
            this.ForeBrush = System.Drawing.Brushes.DarkGray;
            this.BackgroundBrush = System.Drawing.Brushes.White;
            this.FontStyle = System.Drawing.FontStyle.Regular;
            stringFormat = new StringFormat(StringFormatFlags.MeasureTrailingSpaces);
            IsTextStyle = true;
        }

        public override void Draw(Graphics gr, Point position, Range range)
        {
            //draw background
            if (BackgroundBrush != null)
                gr.FillRectangle(BackgroundBrush, position.X, position.Y, (range.End.iChar - range.Start.iChar) * range.tb.CharWidth, range.tb.CharHeight);
            //draw chars
            Font f = new Font(range.tb.Font, FontStyle);
            //Font fHalfSize = new Font(range.tb.Font.FontFamily, f.SizeInPoints/2, FontStyle);
            Line line = range.tb[range.Start.iLine];
            float dx = range.tb.CharWidth;
            float y = position.Y + range.tb.LineInterval / 2;
            float x = position.X - range.tb.CharWidth / 3;

            if (ForeBrush == null)
                ForeBrush = new SolidBrush(range.tb.ForeColor);

            //IME mode
            if (range.tb.ImeAllowed)
                for (int i = range.Start.iChar; i < range.End.iChar; i++)
                {
                    SizeF size = FastColoredTextBox.GetCharSize(f, line[i].c);

                    var gs = gr.Save();
                    float k = size.Width > range.tb.CharWidth + 1 ? range.tb.CharWidth / size.Width : 1;
                    gr.TranslateTransform(x, y + (1 - k) * range.tb.CharHeight / 2);
                    gr.ScaleTransform(k, (float)Math.Sqrt(k));
                    gr.DrawString(line[i].c.ToString(), f, ForeBrush, 0, 0, stringFormat);
                    gr.Restore(gs);
                    /*
                    if(size.Width>range.tb.CharWidth*1.5f)
                        gr.DrawString(line[i].c.ToString(), fHalfSize, foreBrush, x, y+range.tb.CharHeight/4, stringFormat);
                    else
                        gr.DrawString(line[i].c.ToString(), f, foreBrush, x, y, stringFormat);
                     * */
                    x += dx;
                }
            else
                //classic mode 
                for (int i = range.Start.iChar; i < range.End.iChar; i++)
                {
                    //draw char
                    gr.DrawString(line[i].c.ToString(), f, ForeBrush, x, y, stringFormat);
                    x += dx;
                }
            //
            f.Dispose();
        }

        public override void Dispose()
        {
            base.Dispose();

            if (ForeBrush != null)
                ForeBrush.Dispose();
            if (BackgroundBrush != null)
                BackgroundBrush.Dispose();
        }

        public override string GetCSS()
        {
            string result = "";

            if (BackgroundBrush is SolidBrush)
            {
                var s = ExportToHTML.GetColorAsString((BackgroundBrush as SolidBrush).Color);
                if (s != "")
                    result += "background-color:" + s + ";";
            }
            if (ForeBrush is SolidBrush)
            {
                var s = ExportToHTML.GetColorAsString((ForeBrush as SolidBrush).Color);
                if (s != "")
                    result += "color:" + s + ";";
            }
            if ((FontStyle & FontStyle.Bold) != 0)
                result += "font-weight:bold;";
            if ((FontStyle & FontStyle.Italic) != 0)
                result += "font-style:oblique;";
            if ((FontStyle & FontStyle.Strikeout) != 0)
                result += "text-decoration:line-through;";
            if ((FontStyle & FontStyle.Underline) != 0)
                result += "text-decoration:underline;";

            return result;
        }

        public override RTFStyleDescriptor GetRTF()
        {
            var result = new RTFStyleDescriptor();

            if (BackgroundBrush is SolidBrush)
                result.BackColor = (BackgroundBrush as SolidBrush).Color;

            if (ForeBrush is SolidBrush)
                result.ForeColor = (ForeBrush as SolidBrush).Color;

            if ((FontStyle & FontStyle.Bold) != 0)
                result.AdditionalTags += @"\b";
            if ((FontStyle & FontStyle.Italic) != 0)
                result.AdditionalTags += @"\i";
            if ((FontStyle & FontStyle.Strikeout) != 0)
                result.AdditionalTags += @"\strike";
            if ((FontStyle & FontStyle.Underline) != 0)
                result.AdditionalTags += @"\ul";

            return result;
        }
    }
    public class RedReadOnly : ReadOnlyStyle
    {
        public Brush ForeBrush { get; set; }
        public Brush BackgroundBrush { get; set; }
        public FontStyle FontStyle { get; set; }
        //public readonly Font Font;
        public StringFormat stringFormat;

        public RedReadOnly()
            : base()
        {
            this.ForeBrush = System.Drawing.Brushes.DarkRed;
            this.BackgroundBrush = System.Drawing.Brushes.White;
            this.FontStyle = System.Drawing.FontStyle.Regular;
            stringFormat = new StringFormat(StringFormatFlags.MeasureTrailingSpaces);
            IsTextStyle = true;
        }

        public override void Draw(Graphics gr, Point position, Range range)
        {
            //draw background
            if (BackgroundBrush != null)
                gr.FillRectangle(BackgroundBrush, position.X, position.Y, (range.End.iChar - range.Start.iChar) * range.tb.CharWidth, range.tb.CharHeight);
            //draw chars
            Font f = new Font(range.tb.Font, FontStyle);
            //Font fHalfSize = new Font(range.tb.Font.FontFamily, f.SizeInPoints/2, FontStyle);
            Line line = range.tb[range.Start.iLine];
            float dx = range.tb.CharWidth;
            float y = position.Y + range.tb.LineInterval / 2;
            float x = position.X - range.tb.CharWidth / 3;

            if (ForeBrush == null)
                ForeBrush = new SolidBrush(range.tb.ForeColor);

            //IME mode
            if (range.tb.ImeAllowed)
                for (int i = range.Start.iChar; i < range.End.iChar; i++)
                {
                    SizeF size = FastColoredTextBox.GetCharSize(f, line[i].c);

                    var gs = gr.Save();
                    float k = size.Width > range.tb.CharWidth + 1 ? range.tb.CharWidth / size.Width : 1;
                    gr.TranslateTransform(x, y + (1 - k) * range.tb.CharHeight / 2);
                    gr.ScaleTransform(k, (float)Math.Sqrt(k));
                    gr.DrawString(line[i].c.ToString(), f, ForeBrush, 0, 0, stringFormat);
                    gr.Restore(gs);
                    /*
                    if(size.Width>range.tb.CharWidth*1.5f)
                        gr.DrawString(line[i].c.ToString(), fHalfSize, foreBrush, x, y+range.tb.CharHeight/4, stringFormat);
                    else
                        gr.DrawString(line[i].c.ToString(), f, foreBrush, x, y, stringFormat);
                     * */
                    x += dx;
                }
            else
                //classic mode 
                for (int i = range.Start.iChar; i < range.End.iChar; i++)
                {
                    //draw char
                    gr.DrawString(line[i].c.ToString(), f, ForeBrush, x, y, stringFormat);
                    x += dx;
                }
            //
            f.Dispose();
        }

        public override void Dispose()
        {
            base.Dispose();

            if (ForeBrush != null)
                ForeBrush.Dispose();
            if (BackgroundBrush != null)
                BackgroundBrush.Dispose();
        }

        public override string GetCSS()
        {
            string result = "";

            if (BackgroundBrush is SolidBrush)
            {
                var s = ExportToHTML.GetColorAsString((BackgroundBrush as SolidBrush).Color);
                if (s != "")
                    result += "background-color:" + s + ";";
            }
            if (ForeBrush is SolidBrush)
            {
                var s = ExportToHTML.GetColorAsString((ForeBrush as SolidBrush).Color);
                if (s != "")
                    result += "color:" + s + ";";
            }
            if ((FontStyle & FontStyle.Bold) != 0)
                result += "font-weight:bold;";
            if ((FontStyle & FontStyle.Italic) != 0)
                result += "font-style:oblique;";
            if ((FontStyle & FontStyle.Strikeout) != 0)
                result += "text-decoration:line-through;";
            if ((FontStyle & FontStyle.Underline) != 0)
                result += "text-decoration:underline;";

            return result;
        }

        public override RTFStyleDescriptor GetRTF()
        {
            var result = new RTFStyleDescriptor();

            if (BackgroundBrush is SolidBrush)
                result.BackColor = (BackgroundBrush as SolidBrush).Color;

            if (ForeBrush is SolidBrush)
                result.ForeColor = (ForeBrush as SolidBrush).Color;

            if ((FontStyle & FontStyle.Bold) != 0)
                result.AdditionalTags += @"\b";
            if ((FontStyle & FontStyle.Italic) != 0)
                result.AdditionalTags += @"\i";
            if ((FontStyle & FontStyle.Strikeout) != 0)
                result.AdditionalTags += @"\strike";
            if ((FontStyle & FontStyle.Underline) != 0)
                result.AdditionalTags += @"\ul";

            return result;
        }
    }
}
