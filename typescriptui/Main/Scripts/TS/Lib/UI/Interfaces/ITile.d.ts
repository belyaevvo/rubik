/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.
 - 6/Sep/13 : Added inline documentation.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="ITileBackground.d.ts" />
/// <reference path="../Enums/TileSizes.ts" />
/// <reference path="../Enums/TileTypes.ts" />
/// <reference path="ILabel.d.ts" />
/// <reference path="ITileIcon.d.ts" />
/// <reference path="ITileCounter.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines a Tile control. */
    export interface ITile extends IControl
    {
        /** The counter control for the tile. */
        Counter: ITileCounter;
        /** The name label for the tile. */
        NameLabel: ILabel;
        /** The text label for the tile. */
        TextLabel: ILabel;
        /** The icon for the tile. */
        IconBox: ITileIcon;

        /** The list of backgrounds for the tile. */
        Backgrounds: Collections.IList<ITileBackground>;
        
        /** Whether the backgrounds should cycle or not. */
        ShouldCycle: boolean;

        /** The maximum length of tile (in ms) to show a background for. */
        MaxTime: number;
        /** The minimum length of time (in ms) to show a background for. */
        MinTime: number;
        
        /** Gets or sets the tile size. 
            @param value The value to set the size to.
            @returns The actual tile size.
        */
        Size(value?: TileSizes): TileSizes;
        /** Gets or sets the tile type. 
            @param value The value to set the type to.
            @returns The actual tile type.
        */
        Type(value?: TileTypes): TileTypes;

        /** Gets or sets whether to show the tile counter.
            @param value Whether to show the counter or not.
            @returns Whether the counter is shown or not.
        */
        ShowCounter(value?: boolean): boolean;
    }
}