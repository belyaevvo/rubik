export = sax;
export as namespace sax;

declare class sax {
    parser(strict: boolean, options?: object): sax.SAXParser;
}

declare namespace sax {
    class SAXParser {
        constructor(strict: boolean, options?: object);
        end(): SAXParser;
        write(chunk: any): SAXParser;
        resume(): SAXParser;
        close(): SAXParser;
        flush(): void;
        tag: any;
        tags: any[];
        onready: () => void;
        onend: () => void;
        onerror: (err: any) => void;
        onopentag: (tag: any) => void;
        onclosetag: (tag: any) => void;
        oncdata: (cdata: any) => void;
        onclosecdata: () => void;
        onscript: (script: any) => void;
        ontext: (text: any) => void;
        onopentagstart: (tag: any) => void;
        onattribute: (att: any) => void;
        onopennamespace: (ns: any) => void;
        onclosenamespace: (ns: any) => void;
        onsgmldeclaration: (sgml: any) => void;
        ondoctype: (doctype: any) => void;
        oncomment: (comment: any) => void;        
        onprocessinginstruction: (proc: any) => void;
    }
}