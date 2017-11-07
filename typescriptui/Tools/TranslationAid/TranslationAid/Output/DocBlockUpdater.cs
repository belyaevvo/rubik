using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TranslationAid.Parsing;
using FastColoredTextBoxNS;

namespace TranslationAid.Output
{
    public class DocBlockUpdater
    {
        //Only update read-only blocks
        public static List<DocBlock> UpdateBlocks(DocBlock oldRoot, DocBlock newRoot)
        {
            List<DocBlock> removedChildren = new List<DocBlock>();

            switch (newRoot.type)
            {
                case DocBlock.Types.Unknown: break;
                case DocBlock.Types.File:
                    _updateBlocks(oldRoot, newRoot, removedChildren);
                    break;
                case DocBlock.Types.PageTitle: /*No need to do anything*/ break;
                case DocBlock.Types.Module: /*No need to do anything*/ break;
                case DocBlock.Types.Extends: /*No need to do anything*/ break;
                case DocBlock.Types.Implements: /*No need to do anything*/ break;
                case DocBlock.Types.Exported: /*No need to do anything*/ break;
                case DocBlock.Types.AssociatedSourceFile: /*No need to do anything*/ break;
                case DocBlock.Types.SectionTitle: 
                    _updateBlocks(oldRoot, newRoot, removedChildren);
                    break;
                case DocBlock.Types.Constructor: /*Fallthrough*/
                case DocBlock.Types.Method: 
                    _updateBlocks(oldRoot, newRoot, removedChildren);
                    break;
                case DocBlock.Types.Property: /*No need to do anything*/ break;
                case DocBlock.Types.Description: /*Definitely don't anything*/ break;
                case DocBlock.Types.Argument: /*No need to do anything*/ break;
                case DocBlock.Types.Returns: /*No need to do anything*/ break;
                case DocBlock.Types.Anchor: /*No need to do anything*/ break;
            }

            return removedChildren;
        }

        private static void _updateBlocks(DocBlock oldRoot, DocBlock newRoot, List<DocBlock> removedChildren)
        {
            List<int> oldFound = new List<int>();
            List<int> newFound = new List<int>();
            Dictionary<DocBlock, int> FoundAt = new Dictionary<DocBlock, int>();
            for (int i = 0; i < newRoot.Children.Count; i++)
            {
                DocBlock newChild = newRoot.Children[i];
                if (!newChild.Editable)
                {
                    for (int j = 0; j < oldRoot.Children.Count; j++)
                    {
                        if (!oldFound.Contains(j))
                        {
                            DocBlock oldChild = oldRoot.Children[j];
                            if (!oldChild.Editable)
                            {
                                if (oldChild.text == newChild.text)
                                {
                                    newFound.Add(i);
                                    oldFound.Add(j);
                                    FoundAt.Add(newChild, j);
                                    removedChildren.AddRange(UpdateBlocks(oldChild, newChild));
                                    break;
                                }
                            }
                            else
                            {
                                oldFound.Add(j);
                            }
                        }
                    }
                }
                else
                {
                    newFound.Add(i);
                }
            }

            List<DocBlock> ChildrenToRemove = new List<DocBlock>();
            for (int i = 0; i < oldRoot.Children.Count; i++)
            {
                DocBlock oldChild = oldRoot.Children[i];
                if (!oldFound.Contains(i) && !oldChild.Editable)
                {
                    ChildrenToRemove.Add(oldChild);
                }
            }

            for (int i = 0; i < newRoot.Children.Count; i++)
            {
                if (!newFound.Contains(i))
                {
                    int insertAt = 0;
                    for (int j = i; j > 0; j--)
                    {
                        if (FoundAt.ContainsKey(newRoot.Children[j]))
                        {
                            insertAt = FoundAt[newRoot.Children[j]];
                            break;
                        }
                    }

                    DocBlock newBlock = newRoot.Children[i].Clone();
                    newBlock.isNew = true;
                    oldRoot.Children.Insert(insertAt + 1, newBlock);
                }
            }

            for (int i = 0; i < ChildrenToRemove.Count; i++)
            {
                removedChildren.Add(ChildrenToRemove[i]);
                oldRoot.Children.Remove(ChildrenToRemove[i]);
            }
        }
    }
}
