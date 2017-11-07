/// <reference path="../../Animation/AnimationRefs.d.ts" />
/// <reference path="../../../../Definitions/modernizr.d.ts" />
/// <reference path="TileBackground.d.ts" />
/// <reference path="../../UI/Interfaces/ITile.d.ts" />
/// <reference path="Label.d.ts" />
/// <reference path="TileIcon.d.ts" />
/// <reference path="TileCounter.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class Tile extends UI.Control implements UI.ITile {
        public Counter: UI.ITileCounter;
        public NameLabel: UI.ILabel;
        public TextLabel: UI.ILabel;
        public IconBox: UI.ITileIcon;
        public Backgrounds: TSUI.Collections.IList<UI.ITileBackground>;
        constructor(size?: UI.TileSizes, type?: UI.TileTypes);
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public _Backgrounds_Modified(eventArgs: TSUI.Events.CollectionModifiedEventArgs<UI.ITileBackground>): void;
        public _ConstructBackground(bg: UI.ITileBackground): void;
        public _Size: UI.TileSizes;
        public Size(value?: UI.TileSizes): UI.TileSizes;
        public _Type: UI.TileTypes;
        public Type(value?: UI.TileTypes): UI.TileTypes;
        public ShowCounter(value?: boolean): boolean;
        public MaxTime: number;
        public MinTime: number;
        public ShouldCycle: boolean;
        public _CycleCallback: TSUI.Animation.AnimationCallback;
        public _CycleRef: number;
        public _CycleTime: number;
        public StartCycle(): void;
        public StopCycle(): void;
        public _SetupCycleTimeout(): void;
        public doCycle: boolean;
        public _OnCycle(TotalElapsedTime: number): void;
        public Flip(): void;
        public Flipped(value?: boolean): boolean;
        public CycleBackground(): void;
        public _CurrBgIndex: number;
        public _ShowingBg: boolean;
        public ShowBackground(index: number): void;
        public _HidingBg: boolean;
        public HideBackground(callback?: () => void): void;
        public InvokeDefaultAction(): void;
    }
}
