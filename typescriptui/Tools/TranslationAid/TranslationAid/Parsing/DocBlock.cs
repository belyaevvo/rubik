using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TranslationAid.Parsing
{
    public class DocBlock
    {
        public enum Types
        {
            Unknown = 0,
            File,
            PageTitle,
            Module,
            Extends,
            Implements,
            Exported,
            AssociatedSourceFile,
            SectionTitle,
            Constructor,
            Method,
            Property,
            Description,
            Argument,
            Returns,
            Anchor
        }

        public Types type = Types.Unknown;
        public string text = "";

        public bool isNew = false;

        public List<DocBlock> Children = new List<DocBlock>();

        public bool Editable
        {
            get
            {
                return type == Types.Description;
            }
        }

        public DocBlock(Types aType)
        {
            type = aType;
        }
        public DocBlock(Types aType, string someText)
        {
            type = aType;
            text = someText;
        }

        public DocBlock Clone()
        {
            DocBlock newBlock = new DocBlock(type, text);
            foreach (DocBlock aChild in Children)
            {
                newBlock.Children.Add(aChild.Clone());
            }
            return newBlock;
        }
    }
}
