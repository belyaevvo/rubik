module Rubik.DataHub {
    export enum MemberSelectionEnum {
        Self = 1,
        Children = 2,
        SelfChildren = 3,
        Descendants = 4,
        SelfDescendants = 5,
        ExcludeSelf = 241,
        ExcludeChildren = 242,
        ExcludeSelfChildren = 243,
        ExcludeDescendants = 244,
        ExcludeSelfDescendants = 245,
    }
}