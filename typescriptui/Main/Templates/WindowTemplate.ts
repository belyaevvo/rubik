/// <reference path="../Scripts/TS/Lib/IApp.d.ts" />
/// <reference path="../Scripts/TS/Lib/Animation/AnimationRefs.d.ts" />
/// <reference path="../Scripts/TS/Lib/UI/UIRefs.d.ts" />
/// <reference path="../Scripts/TS/Definitions/jquery.d.ts" />

import UI = module(TSUI.UI);

module $namespace$
{
    export interface I$classname$ extends UI.IWindow
    {
    }
    export class $classname$ implements I$classname$ extends UI.Window
    {
        constructor()
        {
            super();

            this.ID("$classname$");
            this.Title("$classname$");
        }
    }
}