﻿/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    export interface IListItem<T>
    {
        OnTextChange: Events.ListItem_TextChangeEvent<T>;

        Value(value?: T): T;
        Text(value?: string): string;
        Index: number;
    }
}