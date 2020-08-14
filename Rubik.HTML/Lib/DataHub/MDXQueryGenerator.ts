module Rubik.DataHub {

    export class MDXQueryGenerator implements IQueryGenerator{
        public static _with: string = " with ";
        public static _member: string = " member ";
        public static _as: string = " as ";
        public static _select: string = " select ";
        public static _nonEmpty: string = " non empty ";
        public static _dimProperties: string = " dimension properties ";
        public static _intrinsicDimProperties: string = "[MEMBER_CAPTION]";
        public static _onColumns: string = " on columns ";
        public static _onRows: string = " on rows ";
        public static _from: string = " from ";
        public static _where: string = " where ";
        public static _members: string = ".members";
        public static _measureSeparator: string = " , ";
        public static _dimensionSeparator: string = " * ";
        public static _filedNameSeparator: string = ".";
        public static _parametersSeparator: string = ", ";
        public static _propertiesSeparator: string = ", ";
        public static _setSeparator: string = ", ";
        public static _tupleSeparator: string = ", ";
        public static _rowseparator: string = "\r\n";
        public static _generate: string = "generate";
        public static _curentMember: string = ".currentmember";
        public static _descendants: string = "descendants";
        public static _children: string = ".children";
        public static _drilldownlevel: string = "drilldownlevel";

        private static curlyBrackets(str: string): string {
            return "{" + str + "}";
        }
        private static squareBrackets(str: string): string {
            return "[" + str + "]";
        }
        private static roundBrackets(str: string): string {
            return "(" + str + ")";
        }

        private static except(set: string, eset: string): string {
            return "EXCEPT(" + set + "," + eset + ")";
        }
        private static union(set1: string, set2: string): string {
            return "UNION(" + set1 + "," + set2 + ")";
        }
        private static allMembers(hierarchy: string): string {
            return hierarchy + ".ALLMEMBERS";
        }

        private static children(member: string): string {
            return member + this._children;
        }

        private static descandants(member: string, level?: string | number, flag?: string): string {
            return this._descendants + this.roundBrackets([member, level, flag]
                .filter((val) => { return val; })
                .map((val) => { return val.toString(); })
                .join(MDXQueryGenerator._parametersSeparator));            
        }

        private static drilldownlevel(member: string): string {
            return this._drilldownlevel + this.roundBrackets(member);
        }
        
        private static join(separator: string, str: string[]): string {
            return str.join(separator);
        }


        public GetQueryString(schema: Schema): string {            
            return this.GetWithString(schema) + MDXQueryGenerator._select + this.GetSelectString(schema) + MDXQueryGenerator._from + this.GetFromString(schema);
        }

        private GetWithString(schema: Schema): string {
            var withString: string = '';
            if (schema.CustomMembers.Count() > 0) {
                withString = schema.CustomMembers.ToArray()
                    .map((value, index, arr) => { return this.GetCustomMemberString(value); })
                    .filter((value) => { return value; })
                    .join(MDXQueryGenerator._rowseparator);                
            }
            return withString;
        }

        private GetCustomMemberString(mbr: CustomMember): string {
            return MDXQueryGenerator._member + mbr.UniqueName + MDXQueryGenerator._as + mbr.Expression;
        }

        private GetWhereString(schema: Schema): string {
            var whereString: string = "";
            var filterAxis = schema.Filters;
            whereString = filterAxis.Sets.ToArray()
                .map((value, index, arr) => { return value.HierarchyName; })
                .filter((value) => { return value; })
                .join(MDXQueryGenerator._tupleSeparator);            
            if (whereString != '') {
                whereString = MDXQueryGenerator._where + MDXQueryGenerator.roundBrackets(whereString);
            }
            return whereString;
        }

        private GetFromString(schema: Schema): string {
            var fromString: string = "";
            var cubeName: string = schema.CubeName;
            fromString = MDXQueryGenerator.squareBrackets(cubeName);
            var filterAxis = schema.Filters;
            for (var hier of filterAxis.Sets.ToArray()) {
                if (hier.SelectedMembers.Count() > 0) {
                    fromString = MDXQueryGenerator.roundBrackets(MDXQueryGenerator._select + this.GetHierarchySet(hier) + MDXQueryGenerator._onColumns + MDXQueryGenerator._from + fromString);
                }
            }           
            return fromString;
        }

        private GetSelectString(schema: Schema): string {
            var selectString: string = "";            
            selectString += this.GetAxisSet(schema.Columns) + MDXQueryGenerator._onColumns + MDXQueryGenerator._parametersSeparator + this.GetAxisSet(schema.Rows) + MDXQueryGenerator._onRows;            
            return selectString;
        }

        private GetAxisSet(axis: HierarchyAxis): string {
            var axisString: string = '{}';
            if (axis.Sets.Count() > 0) {
                axisString = MDXQueryGenerator.GetNonEmptyString(axis.NonEmpty);
                axisString += axis.Sets.ToArray().map((value, index, arr) => { return this.GetHierarchySet(value) }).join(MDXQueryGenerator._dimensionSeparator);
                var dimProperties: string = axis.Sets.ToArray()
                    .map((value, index, arr) => { return this.GetHierarchyPropertyString(value); })
                    .filter((value) => { return value; })
                    .join(MDXQueryGenerator._propertiesSeparator);
                axisString += MDXQueryGenerator._dimProperties + MDXQueryGenerator._intrinsicDimProperties + dimProperties;
            }
            return axisString;
        }

        private static GetNonEmptyString(nonEmptyBehavior: boolean): string {
            if (nonEmptyBehavior)
                return MDXQueryGenerator._nonEmpty;
            return '';
        }

        private GetHierarchySet(hier: HierarchySet): string {
            var hierarachyString: string = '';
            var selectSet: string[] = [];
            var exceptSet: string[] = [];
            if (hier.SelectedMembers.Count() > 0) {
                for (var mbr of hier.SelectedMembers.ToArray()) {
                    switch (mbr.SelectionType) {
                        case MemberSelectionEnum.Children:
                            selectSet.push(MDXQueryGenerator.children(mbr.UniqueName));
                            break;
                        case MemberSelectionEnum.Self:
                            selectSet.push(mbr.UniqueName);
                            break;
                        case MemberSelectionEnum.Descendants:
                            selectSet.push(MDXQueryGenerator.descandants(mbr.UniqueName));
                            break;
                        case MemberSelectionEnum.Exclude:
                            exceptSet.push(mbr.UniqueName);
                            break;
                    }
                }
                if (exceptSet.length > 0) {
                    hierarachyString = MDXQueryGenerator.except(MDXQueryGenerator.curlyBrackets(MDXQueryGenerator.join(MDXQueryGenerator._setSeparator, selectSet)),
                        MDXQueryGenerator.curlyBrackets(MDXQueryGenerator.join(MDXQueryGenerator._setSeparator, exceptSet)));
                }
                else {
                    hierarachyString = MDXQueryGenerator.curlyBrackets(MDXQueryGenerator.join(MDXQueryGenerator._setSeparator, selectSet));
                }
            }
            else {
                if (hier.Info.AllMember == hier.Info.DefaultMember) {
                    hierarachyString = MDXQueryGenerator.descandants(hier.HierarchyName,"1");
                }
                else {
                    hierarachyString = MDXQueryGenerator.curlyBrackets(hier.HierarchyName);
                }
            }
            
            //hierarachyString = hier.SelectedMembers;
            return hierarachyString;
        }

        private GetHierarchyPropertyString(hier: HierarchySet): string {
            var hierarchyPropertyString: string = '';
            hierarchyPropertyString = hier.Properties.ToArray()
                .map((value, index, arr) => { return value; })
                .filter((value) => { return value; })
                .join(MDXQueryGenerator._propertiesSeparator);            
            return hierarchyPropertyString;
        }                
    }
}