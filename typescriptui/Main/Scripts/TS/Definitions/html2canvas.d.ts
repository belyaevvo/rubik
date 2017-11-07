/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

declare var html2canvas: (elements: HTMLElement[], opts: {
    onpreloaded?: (images: any[]) => boolean;
    onparsed?: (queue: any[]) => boolean;
    onrendered?: (canvas: HTMLCanvasElement) => void;
})=>void;