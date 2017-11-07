/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Interfaces/ITileIcon.d.ts" />
/// <reference path="ImageBox.ts" />

module TSUI.UI
{ 
    export var IconsDirectory = "Images/";
    export var TileIcons = {
        About: "InfoIcon.png",
        Download: "DownloadIcon.png",
        Secure: "SecureIcon.png"
    };

    export class TileIcon extends ImageBox implements ITileIcon
    {
        constructor()
        {
            super();

            this._rootElement.addClass("Icon");
        }

        Source(value: string = null): string
        {
            if (value === TileIcons.About ||
                value === TileIcons.Download ||
                value === TileIcons.Secure)
            {
                value = IconsDirectory + value;
            }

            var result = super.Source(value);
            if (value.indexOf(IconsDirectory) === 0)
            {
                value = value.substring(IconsDirectory.length, value.length);
            }
            return result;
        }
    }
}