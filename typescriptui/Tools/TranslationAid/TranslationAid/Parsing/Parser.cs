using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TranslationAid.Parsing
{
    class Parser
    {
        public Parser()
        {
        }

        public void Parse(string input, ref DocBlock root)
        {
            if (root == null)
            {
                root = new DocBlock(DocBlock.Types.File);
            }

            int i = 0;
            while(i < input.Length)
            {
                int iStart = i;

                string WhiteSpaceSkipped;
                int numExcMarks = GetNumOfSymbol(input, '!', ref i, out WhiteSpaceSkipped);
                switch (numExcMarks)
                {
                    case 0:
                        string CurrLine = null;
                        i += GetLine(input, out CurrLine, i);

                        if (!string.IsNullOrEmpty(CurrLine))
                        {
                            //Test for anchor
                            if (CurrLine.StartsWith("{anchor:"))
                            {
                                root.Children.Add(new DocBlock(DocBlock.Types.Anchor, CurrLine));
                            }
                            //Test for module
                            else if (CurrLine.StartsWith("*Module:*"))
                            {
                                CurrLine = CurrLine.Substring(10);
                                root.Children.Add(new DocBlock(DocBlock.Types.Module, CurrLine));
                            }
                            //Test for Extends
                            else if (CurrLine.StartsWith("*Extends:*"))
                            {
                                CurrLine = CurrLine.Substring(11);
                                root.Children.Add(new DocBlock(DocBlock.Types.Extends, CurrLine));
                            }
                            //Test for Implements
                            else if (CurrLine.StartsWith("*Implements:*"))
                            {
                                CurrLine = CurrLine.Substring(14);
                                root.Children.Add(new DocBlock(DocBlock.Types.Implements, CurrLine));
                            }
                            //Test for Exported
                            else if (CurrLine.StartsWith("*Exported:*"))
                            {
                                CurrLine = CurrLine.Substring(12);
                                root.Children.Add(new DocBlock(DocBlock.Types.Exported, CurrLine));
                            }
                            //Test for _Associated...._
                            else if (CurrLine.StartsWith("_Associated source files:_"))
                            {
                                //Ignore
                            }
                            //Test for Associated Source File
                            else if (CurrLine.StartsWith("* [url:"))
                            {
                                CurrLine = CurrLine.Substring(2);
                                root.Children.Add(new DocBlock(DocBlock.Types.AssociatedSourceFile, CurrLine));
                            }
                            //Test for Divider
                            else if (CurrLine.StartsWith("----"))
                            {
                                //Ignore
                            }
                            else
                            {
                                throw new Exception("Unrecognised line!!");
                            }
                        }
                        else
                        {
                            //Ignore
                        }
                        break;
                    case 2:
                        //Page Title
                        string PageTitle = null;
                        i += GetLine(input, out PageTitle, i);
                        root.Children.Add(new DocBlock(DocBlock.Types.PageTitle, PageTitle));
                        break;
                    case 4:
                        //Section Title
                        string SectionTitle = null;
                        i += GetLine(input, out SectionTitle, i);
                        DocBlock newSectionBlock = new DocBlock(DocBlock.Types.SectionTitle, SectionTitle);
                        root.Children.Add(newSectionBlock);
                        i += ParseAtSectionLevel(input.Substring(i), ref newSectionBlock);
                        break;
                    case 6: 
                        //Constructor/Method/Property
                        //Shouldn't ever get this far! This should be handled by a section
                        throw new Exception("Out of place L6 heading!");
                    default:
                        //Documentation standard does not use odd numbered or greater depth titles
                        throw new Exception("Invalid heading level!");
                }

                if (iStart == i)
                {
                    break;
                }
                else
                {
                    input = input.Substring(i);
                    i = 0;
                }
            }

            //switch (root.type)
            //{
            //    case DocBlock.Types.Module: break;
            //    case DocBlock.Types.Extends: break;
            //    case DocBlock.Types.Implements: break;
            //    case DocBlock.Types.Exported: break;
            //    case DocBlock.Types.AssociatedSourceFile: break;
            //}
        }

        private int SkipWhiteSpace(string input, int offset, out string WhiteSpaceSkipped)
        {
            WhiteSpaceSkipped = "";

            int num = 0;
            for (int i = offset; i < input.Length; i++)
            {
                char CurrChar = input[i];
                if (CurrChar != ' ' && CurrChar != '\t'
                    && CurrChar != '\r' && CurrChar != '\n')
                {
                    break;
                }
                else
                {
                    WhiteSpaceSkipped += CurrChar;
                    num++;
                }
            }
            return num;
        }
        private int GetNumOfSymbol(string input, char symbol, ref int offset, out string WhiteSpaceSkipped)
        {
            offset += SkipWhiteSpace(input, offset, out WhiteSpaceSkipped);

            int num = 0;
            for (int i = offset; i < input.Length; i++)
            {
                char sym = input[i];
                if (sym == symbol)
                {
                    num++;
                }
                else
                {
                    break;
                }
            }
            return num;
        }
        private int GetLine(string input, out string line, int offset)
        {
            line = "";

            int increase = 0;
            for (int i = offset; i < input.Length; i++, increase++)
            {
                char CurrChar = input[i];
                bool newLine = false;
                if (CurrChar == '\r')
                {
                    if (input[i + 1] == '\n')
                    {
                        continue;
                    }
                    else
                    {
                        newLine = true;
                    }
                }
                else if (CurrChar == '\n')
                {
                    if (input[i + 1] == '\r')
                    {
                        continue;
                    }
                    else
                    {
                        newLine = true;
                    }
                }

                if (newLine)
                {
                    break;
                }
                else
                {
                    line += CurrChar;
                }
            }
            return increase;
        }
        private void GetTillDivider(string input, out string text, ref int i)
        {
            text = "";

            while(i < input.Length)
            {
                char CurrChar = input[i];
                string WhiteSpaceSkipped;
                bool divider = GetNumOfSymbol(input, '-', ref i, out WhiteSpaceSkipped) >= 4;
                
                if (divider)
                {
                    break;
                }
                else
                {
                    string line;
                    int x = GetLine(input, out line, i);
                    i += x;
                    text += line + "\r\n";
                }
            }

            i += 4;
        }

        public int ParseAtSectionLevel(string input, ref DocBlock root)
        {
            int increase = 0;
            if (root.text.Contains("Description"))
            {
                string text;
                GetTillDivider(input, out text, ref increase);
                root.Children.Add(new DocBlock(DocBlock.Types.Description, text));
            }
            else if (root.text.Contains("Constructors"))
            {
                string ConstructorsText;
                GetTillDivider(input, out ConstructorsText, ref increase);

                string currBlockText = "";
                DocBlock currConstructorBlock = null;
                for (int i = 0; i < ConstructorsText.Length; )
                {
                    string WhiteSpaceSkipped;
                    int numExcMarks = GetNumOfSymbol(ConstructorsText, '!', ref i, out WhiteSpaceSkipped);
                    if (i < ConstructorsText.Length)
                    {
                        switch (numExcMarks)
                        {
                            case 6:
                                if (currConstructorBlock != null)
                                {
                                    ParseAtConstructorLevel(currBlockText, ref currConstructorBlock);
                                    currBlockText = "";
                                }

                                //Constructor                            
                                string ConstructorDecl = null;
                                i += GetLine(ConstructorsText, out ConstructorDecl, i);
                                currConstructorBlock = new DocBlock(DocBlock.Types.Constructor, ConstructorDecl);
                                root.Children.Add(currConstructorBlock);
                                break;
                            case 0:
                                currBlockText += WhiteSpaceSkipped;
                                currBlockText += ConstructorsText[i];
                                i++;
                                break;
                            default:
                                throw new Exception("Constructor section: Invalid header level!");
                        }
                    }
                }

                if (currConstructorBlock != null)
                {
                    ParseAtConstructorLevel(currBlockText, ref currConstructorBlock);
                }
            }
            else if (root.text.Contains("Methods"))
            {
                string MethodsText;
                GetTillDivider(input, out MethodsText, ref increase);

                string currBlockText = "";
                DocBlock currMethodBlock = null;
                for (int i = 0; i < MethodsText.Length; )
                {
                    string WhiteSpaceSkipped;
                    int numExcMarks = GetNumOfSymbol(MethodsText, '!', ref i, out WhiteSpaceSkipped);
                    if (i < MethodsText.Length)
                    {
                        switch (numExcMarks)
                        {
                            case 6:
                                if (currMethodBlock != null)
                                {
                                    ParseAtMethodLevel(currBlockText, ref currMethodBlock);
                                    currBlockText = "";
                                }

                                //Method                            
                                string MethodDecl = null;
                                i += GetLine(MethodsText, out MethodDecl, i);
                                currMethodBlock = new DocBlock(DocBlock.Types.Method, MethodDecl);
                                root.Children.Add(currMethodBlock);
                                break;
                            case 0:
                                currBlockText += WhiteSpaceSkipped;
                                currBlockText += MethodsText[i];
                                i++;
                                break;
                            default:
                                throw new Exception("Method section: Invalid header level!");
                        }
                    }
                }

                if (currMethodBlock != null)
                {
                    ParseAtMethodLevel(currBlockText, ref currMethodBlock);
                }
            }
            else if (root.text.Contains("Properties"))
            {
                string PropertysText;
                GetTillDivider(input, out PropertysText, ref increase);

                string currBlockText = "";
                DocBlock currPropertyBlock = null;
                for (int i = 0; i < PropertysText.Length; )
                {
                    string WhiteSpaceSkipped;
                    int numExcMarks = GetNumOfSymbol(PropertysText, '!', ref i, out WhiteSpaceSkipped);
                    if (i < PropertysText.Length)
                    {
                        switch (numExcMarks)
                        {
                            case 6:
                                if (currPropertyBlock != null)
                                {
                                    ParseAtPropertyLevel(currBlockText, ref currPropertyBlock);
                                    currBlockText = "";
                                }

                                //Property                            
                                string PropertyDecl = null;
                                i += GetLine(PropertysText, out PropertyDecl, i);
                                currPropertyBlock = new DocBlock(DocBlock.Types.Property, PropertyDecl);
                                root.Children.Add(currPropertyBlock);
                                break;
                            case 0:
                                currBlockText += WhiteSpaceSkipped;
                                currBlockText += PropertysText[i];
                                i++;
                                break;
                            default:
                                throw new Exception("Property section: Invalid header level!");
                        }
                    }
                }

                if (currPropertyBlock != null)
                {
                    ParseAtPropertyLevel(currBlockText, ref currPropertyBlock);
                }
            }
            else
            {
                //Unknown section type!
                throw new Exception("Unknown section type!");
            }

            return increase;
        }
        public void ParseAtConstructorLevel(string input, ref DocBlock root)
        {
            ParseAtMethodLevel(input, ref root);
        }
        public void ParseAtMethodLevel(string input, ref DocBlock root)
        {
            DocBlock DescripBlock = new DocBlock(DocBlock.Types.Description, "");
            root.Children.Add(DescripBlock);

            int i = 0;
            while(i < input.Length)
            {
                string WhiteSpaceSkipped;
                int NumStars = GetNumOfSymbol(input, '*', ref i, out WhiteSpaceSkipped);
                if (NumStars == 1)
                {
                    i += 2; //For the "* "
                    
                    //Argument or Returns
                    string ArgLine = null;
                    i += GetLine(input, out ArgLine, i);
                    if (ArgLine.StartsWith("*Returns:*"))
                    {
                        //Returns
                        ParseAtReturnsLevel(ArgLine, ref root);
                    }
                    else
                    {
                        //Argument
                        ParseAtArgumentLevel(ArgLine, ref root);
                    }
                }
                else
                {
                    //Description

                    string DescripLine = null;
                    i += GetLine(input, out DescripLine, i);
                    DescripBlock.text += WhiteSpaceSkipped + DescripLine;
                }
            }
        }
        public void ParseAtPropertyLevel(string input, ref DocBlock root)
        {
            DocBlock DescripBlock = new DocBlock(DocBlock.Types.Description, input);
            root.Children.Add(DescripBlock);
        }
        public void ParseAtArgumentLevel(string input, ref DocBlock root, DocBlock.Types rootBlockType = DocBlock.Types.Argument)
        {
            DocBlock ArgBlock = new DocBlock(rootBlockType);
            root.Children.Add(ArgBlock);

            DocBlock DescipBlock = new DocBlock(DocBlock.Types.Description);
            ArgBlock.Children.Add(DescipBlock);

            int index = input.IndexOf('-') + 1;
            ArgBlock.text = input.Substring(0, index + 1);
            DescipBlock.text = input.Substring(index).Trim();
        }
        public void ParseAtReturnsLevel(string input, ref DocBlock root)
        {
            ParseAtArgumentLevel(input, ref root, DocBlock.Types.Returns);
        }
    }
}
