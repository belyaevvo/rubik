///#source 1 1 /Scripts/JS/detectmobilebrowser.js
(function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))window.location=b})(navigator.userAgent||navigator.vendor||window.opera,'#mobile');
///#source 1 1 /Scripts/JS/modernizr.CSS3.min.js
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
///#source 1 1 /Scripts/JS/html2canvas.js
/*
  html2canvas 0.4.0 <http://html2canvas.hertzen.com>
  Copyright (c) 2013 Niklas von Hertzen (@niklasvh)

  Released under MIT License
*/
(function(window, document, undefined){

"use strict";

var _html2canvas = {},
previousElement,
computedCSS,
html2canvas;

function h2clog(a) {
  if (_html2canvas.logging && window.console && window.console.log) {
    window.console.log(a);
  }
}

_html2canvas.Util = {};

_html2canvas.Util.trimText = (function(isNative){
  return function(input){
    if(isNative) { return isNative.apply( input ); }
    else { return ((input || '') + '').replace( /^\s+|\s+$/g , '' ); }
  };
})( String.prototype.trim );

_html2canvas.Util.parseBackgroundImage = function (value) {
    var whitespace = ' \r\n\t',
        method, definition, prefix, prefix_i, block, results = [],
        c, mode = 0, numParen = 0, quote, args;

    var appendResult = function(){
        if(method) {
            if(definition.substr( 0, 1 ) === '"') {
                definition = definition.substr( 1, definition.length - 2 );
            }
            if(definition) {
                args.push(definition);
            }
            if(method.substr( 0, 1 ) === '-' &&
                    (prefix_i = method.indexOf( '-', 1 ) + 1) > 0) {
                prefix = method.substr( 0, prefix_i);
                method = method.substr( prefix_i );
            }
            results.push({
                prefix: prefix,
                method: method.toLowerCase(),
                value: block,
                args: args
            });
        }
        args = []; //for some odd reason, setting .length = 0 didn't work in safari
        method =
            prefix =
            definition =
            block = '';
    };

    appendResult();
    for(var i = 0, ii = value.length; i<ii; i++) {
        c = value[i];
        if(mode === 0 && whitespace.indexOf( c ) > -1){
            continue;
        }
        switch(c) {
            case '"':
                if(!quote) {
                    quote = c;
                }
                else if(quote === c) {
                    quote = null;
                }
                break;

            case '(':
                if(quote) { break; }
                else if(mode === 0) {
                    mode = 1;
                    block += c;
                    continue;
                } else {
                    numParen++;
                }
                break;

            case ')':
                if(quote) { break; }
                else if(mode === 1) {
                    if(numParen === 0) {
                        mode = 0;
                        block += c;
                        appendResult();
                        continue;
                    } else {
                        numParen--;
                    }
                }
                break;

            case ',':
                if(quote) { break; }
                else if(mode === 0) {
                    appendResult();
                    continue;
                }
                else if (mode === 1) {
                    if(numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition);
                        definition = '';
                        block += c;
                        continue;
                    }
                }
                break;
        }

        block += c;
        if(mode === 0) { method += c; }
        else { definition += c; }
    }
    appendResult();

    return results;
};

_html2canvas.Util.Bounds = function getBounds (el) {
  var clientRect,
  bounds = {};

  if (el.getBoundingClientRect){
    clientRect = el.getBoundingClientRect();


    // TODO add scroll position to bounds, so no scrolling of window necessary
    bounds.top = clientRect.top;
    bounds.bottom = clientRect.bottom || (clientRect.top + clientRect.height);
    bounds.left = clientRect.left;

    // older IE doesn't have width/height, but top/bottom instead
    bounds.width = clientRect.width || (clientRect.right - clientRect.left);
    bounds.height = clientRect.height || (clientRect.bottom - clientRect.top);

    return bounds;

  }
};

_html2canvas.Util.getCSS = function (el, attribute, index) {
  // return $(el).css(attribute);

    var val,
    isBackgroundSizePosition = attribute.match( /^background(Size|Position)$/ );

  function toPX( attribute, val ) {
    var rsLeft = el.runtimeStyle && el.runtimeStyle[ attribute ],
    left,
    style = el.style;

    // Check if we are not dealing with pixels, (Opera has issues with this)
    // Ported from jQuery css.js
    // From the awesome hack by Dean Edwards
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

    // If we're not dealing with a regular pixel number
    // but a number that has a weird ending, we need to convert it to pixels

    if ( !/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test( val ) && /^-?\d/.test( val ) ) {

      // Remember the original values
      left = style.left;

      // Put in the new values to get a computed value out
      if ( rsLeft ) {
        el.runtimeStyle.left = el.currentStyle.left;
      }
      style.left = attribute === "fontSize" ? "1em" : (val || 0);
      val = style.pixelLeft + "px";

      // Revert the changed values
      style.left = left;
      if ( rsLeft ) {
        el.runtimeStyle.left = rsLeft;
      }

    }

    if (!/^(thin|medium|thick)$/i.test( val )) {
      return Math.round(parseFloat( val )) + "px";
    }

    return val;
  }

    if (previousElement !== el) {
      computedCSS = document.defaultView.getComputedStyle(el, null);
    }
    val = computedCSS[attribute];

    if (isBackgroundSizePosition) {
      val = (val || '').split( ',' );
      val = val[index || 0] || val[0] || 'auto';
      val = _html2canvas.Util.trimText(val).split(' ');

      if(attribute === 'backgroundSize' && (!val[ 0 ] || val[ 0 ].match( /cover|contain|auto/ ))) {
        //these values will be handled in the parent function

      } else {
        val[ 0 ] = ( val[ 0 ].indexOf( "%" ) === -1 ) ? toPX(  attribute + "X", val[ 0 ] ) : val[ 0 ];
        if(val[ 1 ] === undefined) {
          if(attribute === 'backgroundSize') {
            val[ 1 ] = 'auto';
            return val;
          }
          else {
            // IE 9 doesn't return double digit always
            val[ 1 ] = val[ 0 ];
          }
        }
        val[ 1 ] = ( val[ 1 ].indexOf( "%" ) === -1 ) ? toPX(  attribute + "Y", val[ 1 ] ) : val[ 1 ];
      }
    } else if ( /border(Top|Bottom)(Left|Right)Radius/.test( attribute) ) {
      var arr = val.split(" ");
      if ( arr.length <= 1 ) {
              arr[ 1 ] = arr[ 0 ];
      }
      arr[ 0 ] = parseInt( arr[ 0 ], 10 );
      arr[ 1 ] = parseInt( arr[ 1 ], 10 );
      val = arr;
    }

  return val;
};

_html2canvas.Util.resizeBounds = function( current_width, current_height, target_width, target_height, stretch_mode ){
  var target_ratio = target_width / target_height,
    current_ratio = current_width / current_height,
    output_width, output_height;

  if(!stretch_mode || stretch_mode === 'auto') {
    output_width = target_width;
    output_height = target_height;

  } else {
    if(target_ratio < current_ratio ^ stretch_mode === 'contain') {
      output_height = target_height;
      output_width = target_height * current_ratio;
    } else {
      output_width = target_width;
      output_height = target_width / current_ratio;
    }
  }

  return { width: output_width, height: output_height };
};

function backgroundBoundsFactory( prop, el, bounds, image, imageIndex, backgroundSize ) {
    var bgposition =  _html2canvas.Util.getCSS( el, prop, imageIndex ) ,
    topPos,
    left,
    percentage,
    val;

    if (bgposition.length === 1){
      val = bgposition[0];

      bgposition = [];

      bgposition[0] = val;
      bgposition[1] = val;
    }

    if (bgposition[0].toString().indexOf("%") !== -1){
      percentage = (parseFloat(bgposition[0])/100);
      left = bounds.width * percentage;
      if(prop !== 'backgroundSize') {
        left -= (backgroundSize || image).width*percentage;
      }

    } else {
      if(prop === 'backgroundSize') {
        if(bgposition[0] === 'auto') {
          left = image.width;

        } else {
          if(bgposition[0].match(/contain|cover/)) {
            var resized = _html2canvas.Util.resizeBounds( image.width, image.height, bounds.width, bounds.height, bgposition[0] );
            left = resized.width;
            topPos = resized.height;
          } else {
            left = parseInt (bgposition[0], 10 );
          }
        }

      } else {
        left = parseInt( bgposition[0], 10 );
      }
    }


    if(bgposition[1] === 'auto') {
      topPos = left / image.width * image.height;
    } else if (bgposition[1].toString().indexOf("%") !== -1){
      percentage = (parseFloat(bgposition[1])/100);
      topPos =  bounds.height * percentage;
      if(prop !== 'backgroundSize') {
        topPos -= (backgroundSize || image).height * percentage;
      }

    } else {
      topPos = parseInt(bgposition[1],10);
    }

    return [left, topPos];
}

_html2canvas.Util.BackgroundPosition = function( el, bounds, image, imageIndex, backgroundSize ) {
    var result = backgroundBoundsFactory( 'backgroundPosition', el, bounds, image, imageIndex, backgroundSize );
    return { left: result[0], top: result[1] };
};
_html2canvas.Util.BackgroundSize = function( el, bounds, image, imageIndex ) {
    var result = backgroundBoundsFactory( 'backgroundSize', el, bounds, image, imageIndex );
    return { width: result[0], height: result[1] };
};

_html2canvas.Util.Extend = function (options, defaults) {
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      defaults[key] = options[key];
    }
  }
  return defaults;
};


/*
 * Derived from jQuery.contents()
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
_html2canvas.Util.Children = function( elem ) {


  var children;
  try {

    children = (elem.nodeName && elem.nodeName.toUpperCase() === "IFRAME") ?
    elem.contentDocument || elem.contentWindow.document : (function( array ){
      var ret = [];

      if ( array !== null ) {

        (function( first, second ) {
          var i = first.length,
          j = 0;

          if ( typeof second.length === "number" ) {
            for ( var l = second.length; j < l; j++ ) {
              first[ i++ ] = second[ j ];
            }

          } else {
            while ( second[j] !== undefined ) {
              first[ i++ ] = second[ j++ ];
            }
          }

          first.length = i;

          return first;
        })( ret, array );

      }

      return ret;
    })( elem.childNodes );

  } catch (ex) {
    h2clog("html2canvas.Util.Children failed with exception: " + ex.message);
    children = [];
  }
  return children;
};

_html2canvas.Util.Font = (function () {

  var fontData = {};

  return function(font, fontSize, doc) {
    if (fontData[font + "-" + fontSize] !== undefined) {
      return fontData[font + "-" + fontSize];
    }

    var container = doc.createElement('div'),
    img = doc.createElement('img'),
    span = doc.createElement('span'),
    sampleText = 'Hidden Text',
    baseline,
    middle,
    metricsObj;

    container.style.visibility = "hidden";
    container.style.fontFamily = font;
    container.style.fontSize = fontSize;
    container.style.margin = 0;
    container.style.padding = 0;

    doc.body.appendChild(container);

    // http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever (handtinywhite.gif)
    img.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
    img.width = 1;
    img.height = 1;

    img.style.margin = 0;
    img.style.padding = 0;
    img.style.verticalAlign = "baseline";

    span.style.fontFamily = font;
    span.style.fontSize = fontSize;
    span.style.margin = 0;
    span.style.padding = 0;

    span.appendChild(doc.createTextNode(sampleText));
    container.appendChild(span);
    container.appendChild(img);
    baseline = (img.offsetTop - span.offsetTop) + 1;

    container.removeChild(span);
    container.appendChild(doc.createTextNode(sampleText));

    container.style.lineHeight = "normal";
    img.style.verticalAlign = "super";

    middle = (img.offsetTop-container.offsetTop) + 1;
    metricsObj = {
      baseline: baseline,
      lineWidth: 1,
      middle: middle
    };

    fontData[font + "-" + fontSize] = metricsObj;

    doc.body.removeChild(container);

    return metricsObj;
  };
})();

(function(){

  _html2canvas.Generate = {};

  var reGradients = [
  /^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/,
  /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,
  /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/
  ];

  /*
 * TODO: Add IE10 vendor prefix (-ms) support
 * TODO: Add W3C gradient (linear-gradient) support
 * TODO: Add old Webkit -webkit-gradient(radial, ...) support
 * TODO: Maybe some RegExp optimizations are possible ;o)
 */
  _html2canvas.Generate.parseGradient = function(css, bounds) {
    var gradient, i, len = reGradients.length, m1, stop, m2, m2Len, step, m3, tl,tr,br,bl;

    for(i = 0; i < len; i+=1){
      m1 = css.match(reGradients[i]);
      if(m1) {
        break;
      }
    }

    if(m1) {
      switch(m1[1]) {
        case '-webkit-linear-gradient':
        case '-o-linear-gradient':

          gradient = {
            type: 'linear',
            x0: null,
            y0: null,
            x1: null,
            y1: null,
            colorStops: []
          };

          // get coordinates
          m2 = m1[2].match(/\w+/g);
          if(m2){
            m2Len = m2.length;
            for(i = 0; i < m2Len; i+=1){
              switch(m2[i]) {
                case 'top':
                  gradient.y0 = 0;
                  gradient.y1 = bounds.height;
                  break;

                case 'right':
                  gradient.x0 = bounds.width;
                  gradient.x1 = 0;
                  break;

                case 'bottom':
                  gradient.y0 = bounds.height;
                  gradient.y1 = 0;
                  break;

                case 'left':
                  gradient.x0 = 0;
                  gradient.x1 = bounds.width;
                  break;
              }
            }
          }
          if(gradient.x0 === null && gradient.x1 === null){ // center
            gradient.x0 = gradient.x1 = bounds.width / 2;
          }
          if(gradient.y0 === null && gradient.y1 === null){ // center
            gradient.y0 = gradient.y1 = bounds.height / 2;
          }

          // get colors and stops
          m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3] === '%'){
                  stop /= 100;
                } else { // px - stupid opera
                  stop /= bounds.width;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;

        case '-webkit-gradient':

          gradient = {
            type: m1[2] === 'radial' ? 'circle' : m1[2], // TODO: Add radial gradient support for older mozilla definitions
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            colorStops: []
          };

          // get coordinates
          m2 = m1[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/);
          if(m2){
            gradient.x0 = (m2[1] * bounds.width) / 100;
            gradient.y0 = (m2[2] * bounds.height) / 100;
            gradient.x1 = (m2[3] * bounds.width) / 100;
            gradient.y1 = (m2[4] * bounds.height) / 100;
          }

          // get colors and stops
          m2 = m1[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g);
          if(m2){
            m2Len = m2.length;
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/);
              stop = parseFloat(m3[2]);
              if(m3[1] === 'from') {
                stop = 0.0;
              }
              if(m3[1] === 'to') {
                stop = 1.0;
              }
              gradient.colorStops.push({
                color: m3[3],
                stop: stop
              });
            }
          }
          break;

        case '-moz-linear-gradient':

          gradient = {
            type: 'linear',
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            colorStops: []
          };

          // get coordinates
          m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);

          // m2[1] == 0%   -> left
          // m2[1] == 50%  -> center
          // m2[1] == 100% -> right

          // m2[2] == 0%   -> top
          // m2[2] == 50%  -> center
          // m2[2] == 100% -> bottom

          if(m2){
            gradient.x0 = (m2[1] * bounds.width) / 100;
            gradient.y0 = (m2[2] * bounds.height) / 100;
            gradient.x1 = bounds.width - gradient.x0;
            gradient.y1 = bounds.height - gradient.y0;
          }

          // get colors and stops
          m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3]){ // percentage
                  stop /= 100;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;

        case '-webkit-radial-gradient':
        case '-moz-radial-gradient':
        case '-o-radial-gradient':

          gradient = {
            type: 'circle',
            x0: 0,
            y0: 0,
            x1: bounds.width,
            y1: bounds.height,
            cx: 0,
            cy: 0,
            rx: 0,
            ry: 0,
            colorStops: []
          };

          // center
          m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
          if(m2){
            gradient.cx = (m2[1] * bounds.width) / 100;
            gradient.cy = (m2[2] * bounds.height) / 100;
          }

          // size
          m2 = m1[3].match(/\w+/);
          m3 = m1[4].match(/[a-z\-]*/);
          if(m2 && m3){
            switch(m3[0]){
              case 'farthest-corner':
              case 'cover': // is equivalent to farthest-corner
              case '': // mozilla removes "cover" from definition :(
                tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                gradient.rx = gradient.ry = Math.max(tl, tr, br, bl);
                break;
              case 'closest-corner':
                tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                gradient.rx = gradient.ry = Math.min(tl, tr, br, bl);
                break;
              case 'farthest-side':
                if(m2[0] === 'circle'){
                  gradient.rx = gradient.ry = Math.max(
                    gradient.cx,
                    gradient.cy,
                    gradient.x1 - gradient.cx,
                    gradient.y1 - gradient.cy
                    );
                } else { // ellipse

                  gradient.type = m2[0];

                  gradient.rx = Math.max(
                    gradient.cx,
                    gradient.x1 - gradient.cx
                    );
                  gradient.ry = Math.max(
                    gradient.cy,
                    gradient.y1 - gradient.cy
                    );
                }
                break;
              case 'closest-side':
              case 'contain': // is equivalent to closest-side
                if(m2[0] === 'circle'){
                  gradient.rx = gradient.ry = Math.min(
                    gradient.cx,
                    gradient.cy,
                    gradient.x1 - gradient.cx,
                    gradient.y1 - gradient.cy
                    );
                } else { // ellipse

                  gradient.type = m2[0];

                  gradient.rx = Math.min(
                    gradient.cx,
                    gradient.x1 - gradient.cx
                    );
                  gradient.ry = Math.min(
                    gradient.cy,
                    gradient.y1 - gradient.cy
                    );
                }
                break;

            // TODO: add support for "30px 40px" sizes (webkit only)
            }
          }

          // color stops
          m2 = m1[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3] === '%'){
                  stop /= 100;
                } else { // px - stupid opera
                  stop /= bounds.width;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;
      }
    }

    return gradient;
  };

  _html2canvas.Generate.Gradient = function(src, bounds) {
    if(bounds.width === 0 || bounds.height === 0) {
      return;
    }

    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    gradient, grad, i, len;

    canvas.width = bounds.width;
    canvas.height = bounds.height;

    // TODO: add support for multi defined background gradients
    gradient = _html2canvas.Generate.parseGradient(src, bounds);

    if(gradient) {
      if(gradient.type === 'linear') {
        grad = ctx.createLinearGradient(gradient.x0, gradient.y0, gradient.x1, gradient.y1);

        for (i = 0, len = gradient.colorStops.length; i < len; i+=1) {
          try {
            grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
          }
          catch(e) {
            h2clog(['failed to add color stop: ', e, '; tried to add: ', gradient.colorStops[i], '; stop: ', i, '; in: ', src]);
          }
        }

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, bounds.width, bounds.height);

      } else if(gradient.type === 'circle') {

        grad = ctx.createRadialGradient(gradient.cx, gradient.cy, 0, gradient.cx, gradient.cy, gradient.rx);

        for (i = 0, len = gradient.colorStops.length; i < len; i+=1) {
          try {
            grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
          }
          catch(e) {
            h2clog(['failed to add color stop: ', e, '; tried to add: ', gradient.colorStops[i], '; stop: ', i, '; in: ', src]);
          }
        }

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, bounds.width, bounds.height);

      } else if(gradient.type === 'ellipse') {

        // draw circle
        var canvasRadial = document.createElement('canvas'),
        ctxRadial = canvasRadial.getContext('2d'),
        ri = Math.max(gradient.rx, gradient.ry),
        di = ri * 2, imgRadial;

        canvasRadial.width = canvasRadial.height = di;

        grad = ctxRadial.createRadialGradient(gradient.rx, gradient.ry, 0, gradient.rx, gradient.ry, ri);

        for (i = 0, len = gradient.colorStops.length; i < len; i+=1) {
          try {
            grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
          }
          catch(e) {
            h2clog(['failed to add color stop: ', e, '; tried to add: ', gradient.colorStops[i], '; stop: ', i, '; in: ', src]);
          }
        }

        ctxRadial.fillStyle = grad;
        ctxRadial.fillRect(0, 0, di, di);

        ctx.fillStyle = gradient.colorStops[i - 1].color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(canvasRadial, gradient.cx - gradient.rx, gradient.cy - gradient.ry, 2 * gradient.rx, 2 * gradient.ry);

      }
    }

    return canvas;
  };

  _html2canvas.Generate.ListAlpha = function(number) {
    var tmp = "",
    modulus;

    do {
      modulus = number % 26;
      tmp = String.fromCharCode((modulus) + 64) + tmp;
      number = number / 26;
    }while((number*26) > 26);

    return tmp;
  };

  _html2canvas.Generate.ListRoman = function(number) {
    var romanArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
    decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman = "",
    v,
    len = romanArray.length;

    if (number <= 0 || number >= 4000) {
      return number;
    }

    for (v=0; v < len; v+=1) {
      while (number >= decimal[v]) {
        number -= decimal[v];
        roman += romanArray[v];
      }
    }

    return roman;

  };

})();
function h2cRenderContext(width, height) {
  var storage = [];
  return {
    storage: storage,
    width: width,
    height: height,
    clip: function() {
      storage.push({
        type: "function",
        name: "clip",
        'arguments': arguments
      });
    },
    translate: function() {
      storage.push({
        type: "function",
        name: "translate",
        'arguments': arguments
      });
    },
    fill: function() {
      storage.push({
        type: "function",
        name: "fill",
        'arguments': arguments
      });
    },
    save: function() {
      storage.push({
        type: "function",
        name: "save",
        'arguments': arguments
      });
    },
    restore: function() {
      storage.push({
        type: "function",
        name: "restore",
        'arguments': arguments
      });
    },
    fillRect: function () {
      storage.push({
        type: "function",
        name: "fillRect",
        'arguments': arguments
      });
    },
    createPattern: function() {
      storage.push({
        type: "function",
        name: "createPattern",
        'arguments': arguments
      });
    },
    drawShape: function() {

      var shape = [];

      storage.push({
        type: "function",
        name: "drawShape",
        'arguments': shape
      });

      return {
        moveTo: function() {
          shape.push({
            name: "moveTo",
            'arguments': arguments
          });
        },
        lineTo: function() {
          shape.push({
            name: "lineTo",
            'arguments': arguments
          });
        },
        arcTo: function() {
          shape.push({
            name: "arcTo",
            'arguments': arguments
          });
        },
        bezierCurveTo: function() {
          shape.push({
            name: "bezierCurveTo",
            'arguments': arguments
          });
        },
        quadraticCurveTo: function() {
          shape.push({
            name: "quadraticCurveTo",
            'arguments': arguments
          });
        }
      };

    },
    drawImage: function () {
      storage.push({
        type: "function",
        name: "drawImage",
        'arguments': arguments
      });
    },
    fillText: function () {
      storage.push({
        type: "function",
        name: "fillText",
        'arguments': arguments
      });
    },
    setVariable: function (variable, value) {
      storage.push({
        type: "variable",
        name: variable,
        'arguments': value
      });
    }
  };
}
_html2canvas.Parse = function (images, options) {
  window.scroll(0,0);

  var element = (( options.elements === undefined ) ? document.body : options.elements[0]), // select body by default
  numDraws = 0,
  doc = element.ownerDocument,
  support = _html2canvas.Util.Support(options, doc),
  ignoreElementsRegExp = new RegExp("(" + options.ignoreElements + ")"),
  body = doc.body,
  getCSS = _html2canvas.Util.getCSS,
  pseudoHide = "___html2canvas___pseudoelement",
  hidePseudoElements = doc.createElement('style');

  hidePseudoElements.innerHTML = '.' + pseudoHide + '-before:before { content: "" !important; display: none !important; }' +
  '.' + pseudoHide + '-after:after { content: "" !important; display: none !important; }';

  body.appendChild(hidePseudoElements);

  images = images || {};

  function documentWidth () {
    return Math.max(
      Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
      Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
      Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
      );
  }

  function documentHeight () {
    return Math.max(
      Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
      Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
      Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
      );
  }

  function getCSSInt(element, attribute) {
    var val = parseInt(getCSS(element, attribute), 10);
    return (isNaN(val)) ? 0 : val; // borders in old IE are throwing 'medium' for demo.html
  }

  function renderRect (ctx, x, y, w, h, bgcolor) {
    if (bgcolor !== "transparent"){
      ctx.setVariable("fillStyle", bgcolor);
      ctx.fillRect(x, y, w, h);
      numDraws+=1;
    }
  }

  function textTransform (text, transform) {
    switch(transform){
      case "lowercase":
        return text.toLowerCase();
      case "capitalize":
        return text.replace( /(^|\s|:|-|\(|\))([a-z])/g , function (m, p1, p2) {
          if (m.length > 0) {
            return p1 + p2.toUpperCase();
          }
        } );
      case "uppercase":
        return text.toUpperCase();
      default:
        return text;
    }
  }

  function noLetterSpacing(letter_spacing) {
    return (/^(normal|none|0px)$/.test(letter_spacing));
  }

  function drawText(currentText, x, y, ctx){
    if (currentText !== null && _html2canvas.Util.trimText(currentText).length > 0) {
      ctx.fillText(currentText, x, y);
      numDraws+=1;
    }
  }

  function setTextVariables(ctx, el, text_decoration, color) {
    var align = false,
    bold = getCSS(el, "fontWeight"),
    family = getCSS(el, "fontFamily"),
    size = getCSS(el, "fontSize");

    switch(parseInt(bold, 10)){
      case 401:
        bold = "bold";
        break;
      case 400:
        bold = "normal";
        break;
    }

    ctx.setVariable("fillStyle", color);
    ctx.setVariable("font", [getCSS(el, "fontStyle"), getCSS(el, "fontVariant"), bold, size, family].join(" "));
    ctx.setVariable("textAlign", (align) ? "right" : "left");

    if (text_decoration !== "none"){
      return _html2canvas.Util.Font(family, size, doc);
    }
  }

  function renderTextDecoration(ctx, text_decoration, bounds, metrics, color) {
    switch(text_decoration) {
      case "underline":
        // Draws a line at the baseline of the font
        // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
        renderRect(ctx, bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, color);
        break;
      case "overline":
        renderRect(ctx, bounds.left, Math.round(bounds.top), bounds.width, 1, color);
        break;
      case "line-through":
        // TODO try and find exact position for line-through
        renderRect(ctx, bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, color);
        break;
    }
  }

  function getTextBounds(state, text, textDecoration, isLast) {
    var bounds;
    if (support.rangeBounds) {
      if (textDecoration !== "none" || _html2canvas.Util.trimText(text).length !== 0) {
        bounds = textRangeBounds(text, state.node, state.textOffset);
      }
      state.textOffset += text.length;
    } else if (state.node && typeof state.node.nodeValue === "string" ){
      var newTextNode = (isLast) ? state.node.splitText(text.length) : null;
      bounds = textWrapperBounds(state.node);
      state.node = newTextNode;
    }
    return bounds;
  }

  function textRangeBounds(text, textNode, textOffset) {
    var range = doc.createRange();
    range.setStart(textNode, textOffset);
    range.setEnd(textNode, textOffset + text.length);
    return range.getBoundingClientRect();
  }

  function textWrapperBounds(oldTextNode) {
    var parent = oldTextNode.parentNode,
    wrapElement = doc.createElement('wrapper'),
    backupText = oldTextNode.cloneNode(true);

    wrapElement.appendChild(oldTextNode.cloneNode(true));
    parent.replaceChild(wrapElement, oldTextNode);

    var bounds = _html2canvas.Util.Bounds(wrapElement);
    parent.replaceChild(backupText, wrapElement);
    return bounds;
  }

  function renderText(el, textNode, stack) {
    var ctx = stack.ctx,
    color = getCSS(el, "color"),
    textDecoration = getCSS(el, "textDecoration"),
    textAlign = getCSS(el, "textAlign"),
    metrics,
    textList,
    state = {
      node: textNode,
      textOffset: 0
    };

    if (_html2canvas.Util.trimText(textNode.nodeValue).length > 0) {
      textNode.nodeValue = textTransform(textNode.nodeValue, getCSS(el, "textTransform"));
      textAlign = textAlign.replace(["-webkit-auto"],["auto"]);

      textList = (!options.letterRendering && /^(left|right|justify|auto)$/.test(textAlign) && noLetterSpacing(getCSS(el, "letterSpacing"))) ?
      textNode.nodeValue.split(/(\b| )/)
      : textNode.nodeValue.split("");

      metrics = setTextVariables(ctx, el, textDecoration, color);

      if (options.chinese) {
        textList.forEach(function(word, index) {
          if (/.*[\u4E00-\u9FA5].*$/.test(word)) {
            word = word.split("");
            word.unshift(index, 1);
            textList.splice.apply(textList, word);
          }
        });
      }

      textList.forEach(function(text, index) {
        var bounds = getTextBounds(state, text, textDecoration, (index < textList.length - 1));
        if (bounds) {
          drawText(text, bounds.left, bounds.bottom, ctx);
          renderTextDecoration(ctx, textDecoration, bounds, metrics, color);
        }
      });
    }
  }

  function listPosition (element, val) {
    var boundElement = doc.createElement( "boundelement" ),
    originalType,
    bounds;

    boundElement.style.display = "inline";

    originalType = element.style.listStyleType;
    element.style.listStyleType = "none";

    boundElement.appendChild(doc.createTextNode(val));

    element.insertBefore(boundElement, element.firstChild);

    bounds = _html2canvas.Util.Bounds(boundElement);
    element.removeChild(boundElement);
    element.style.listStyleType = originalType;
    return bounds;
  }

  function elementIndex( el ) {
    var i = -1,
    count = 1,
    childs = el.parentNode.childNodes;

    if (el.parentNode) {
      while( childs[ ++i ] !== el ) {
        if ( childs[ i ].nodeType === 1 ) {
          count++;
        }
      }
      return count;
    } else {
      return -1;
    }
  }

  function listItemText(element, type) {
    var currentIndex = elementIndex(element),
    text;
    switch(type){
      case "decimal":
        text = currentIndex;
        break;
      case "decimal-leading-zero":
        text = (currentIndex.toString().length === 1) ? currentIndex = "0" + currentIndex.toString() : currentIndex.toString();
        break;
      case "upper-roman":
        text = _html2canvas.Generate.ListRoman( currentIndex );
        break;
      case "lower-roman":
        text = _html2canvas.Generate.ListRoman( currentIndex ).toLowerCase();
        break;
      case "lower-alpha":
        text = _html2canvas.Generate.ListAlpha( currentIndex ).toLowerCase();
        break;
      case "upper-alpha":
        text = _html2canvas.Generate.ListAlpha( currentIndex );
        break;
    }

    text += ". ";
    return text;
  }

  function renderListItem(element, stack, elBounds) {
    var x,
    text,
    ctx = stack.ctx,
    type = getCSS(element, "listStyleType"),
    listBounds;

    if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(type)) {
      text = listItemText(element, type);
      listBounds = listPosition(element, text);
      setTextVariables(ctx, element, "none", getCSS(element, "color"));

      if (getCSS(element, "listStylePosition") === "inside") {
        ctx.setVariable("textAlign", "left");
        x = elBounds.left;
      } else {
        return;
      }

      drawText(text, x, listBounds.bottom, ctx);
    }
  }

  function loadImage (src){
    var img = images[src];
    if (img && img.succeeded === true) {
      return img.img;
    } else {
      return false;
    }
  }

  function clipBounds(src, dst){
    var x = Math.max(src.left, dst.left),
    y = Math.max(src.top, dst.top),
    x2 = Math.min((src.left + src.width), (dst.left + dst.width)),
    y2 = Math.min((src.top + src.height), (dst.top + dst.height));

    return {
      left:x,
      top:y,
      width:x2-x,
      height:y2-y
    };
  }

  function setZ(zIndex, parentZ){
    // TODO fix static elements overlapping relative/absolute elements under same stack, if they are defined after them
    var newContext;
    if (!parentZ){
      newContext = h2czContext(0);
      return newContext;
    }

    if (zIndex !== "auto"){
      newContext = h2czContext(zIndex);
      parentZ.children.push(newContext);
      return newContext;

    }

    return parentZ;
  }

  function renderImage(ctx, element, image, bounds, borders) {

    var paddingLeft = getCSSInt(element, 'paddingLeft'),
    paddingTop = getCSSInt(element, 'paddingTop'),
    paddingRight = getCSSInt(element, 'paddingRight'),
    paddingBottom = getCSSInt(element, 'paddingBottom');

    drawImage(
      ctx,
      image,
      0, //sx
      0, //sy
      image.width, //sw
      image.height, //sh
      bounds.left + paddingLeft + borders[3].width, //dx
      bounds.top + paddingTop + borders[0].width, // dy
      bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
      bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh
      );
  }

  function getBorderData(element) {
    return ["Top", "Right", "Bottom", "Left"].map(function(side) {
      return {
        width: getCSSInt(element, 'border' + side + 'Width'),
        color: getCSS(element, 'border' + side + 'Color')
      };
    });
  }

  function getBorderRadiusData(element) {
    return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(side) {
      return getCSS(element, 'border' + side + 'Radius');
    });
  }

  var getCurvePoints = (function(kappa) {

    return function(x, y, r1, r2) {
      var ox = (r1) * kappa, // control point offset horizontal
      oy = (r2) * kappa, // control point offset vertical
      xm = x + r1, // x-middle
      ym = y + r2; // y-middle
      return {
        topLeft: bezierCurve({
          x:x,
          y:ym
        }, {
          x:x,
          y:ym - oy
        }, {
          x:xm - ox,
          y:y
        }, {
          x:xm,
          y:y
        }),
        topRight: bezierCurve({
          x:x,
          y:y
        }, {
          x:x + ox,
          y:y
        }, {
          x:xm,
          y:ym - oy
        }, {
          x:xm,
          y:ym
        }),
        bottomRight: bezierCurve({
          x:xm,
          y:y
        }, {
          x:xm,
          y:y + oy
        }, {
          x:x + ox,
          y:ym
        }, {
          x:x,
          y:ym
        }),
        bottomLeft: bezierCurve({
          x:xm,
          y:ym
        }, {
          x:xm - ox,
          y:ym
        }, {
          x:x,
          y:y + oy
        }, {
          x:x,
          y:y
        })
      };
    };
  })(4 * ((Math.sqrt(2) - 1) / 3));

  function bezierCurve(start, startControl, endControl, end) {

    var lerp = function (a, b, t) {
      return {
        x:a.x + (b.x - a.x) * t,
        y:a.y + (b.y - a.y) * t
      };
    };

    return {
      start: start,
      startControl: startControl,
      endControl: endControl,
      end: end,
      subdivide: function(t) {
        var ab = lerp(start, startControl, t),
        bc = lerp(startControl, endControl, t),
        cd = lerp(endControl, end, t),
        abbc = lerp(ab, bc, t),
        bccd = lerp(bc, cd, t),
        dest = lerp(abbc, bccd, t);
        return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
      },
      curveTo: function(borderArgs) {
        borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
      },
      curveToReversed: function(borderArgs) {
        borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
      }
    };
  }

  function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
      corner1[0].curveTo(borderArgs);
      corner1[1].curveTo(borderArgs);
    } else {
      borderArgs.push(["line", x, y]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
      borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
    }
  }

  function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
    var borderArgs = [];

    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
      outer1[1].curveTo(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c1[0], borderData.c1[1]]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
      borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
      outer2[0].curveTo(borderArgs);
      borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
      inner2[0].curveToReversed(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c2[0], borderData.c2[1]]);
      borderArgs.push([ "line", borderData.c3[0], borderData.c3[1]]);
    }

    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
      inner1[1].curveToReversed(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c4[0], borderData.c4[1]]);
    }

    return borderArgs;
  }

  function calculateCurvePoints(bounds, borderRadius, borders) {

    var x = bounds.left,
    y = bounds.top,
    width = bounds.width,
    height = bounds.height,

    tlh = borderRadius[0][0],
    tlv = borderRadius[0][1],
    trh = borderRadius[1][0],
    trv = borderRadius[1][1],
    brv = borderRadius[2][0],
    brh = borderRadius[2][1],
    blh = borderRadius[3][0],
    blv = borderRadius[3][1],

    topWidth = width - trh,
    rightHeight = height - brv,
    bottomWidth = width - brh,
    leftHeight = height - blv;

    return {
      topLeftOuter: getCurvePoints(
        x,
        y,
        tlh,
        tlv
        ).topLeft.subdivide(0.5),

      topLeftInner: getCurvePoints(
        x + borders[3].width,
        y + borders[0].width,
        Math.max(0, tlh - borders[3].width),
        Math.max(0, tlv - borders[0].width)
        ).topLeft.subdivide(0.5),

      topRightOuter: getCurvePoints(
        x + topWidth,
        y,
        trh,
        trv
        ).topRight.subdivide(0.5),

      topRightInner: getCurvePoints(
        x + Math.min(topWidth, width + borders[3].width),
        y + borders[0].width,
        (topWidth > width + borders[3].width) ? 0 :trh - borders[3].width,
        trv - borders[0].width
        ).topRight.subdivide(0.5),

      bottomRightOuter: getCurvePoints(
        x + bottomWidth,
        y + rightHeight,
        brh,
        brv
        ).bottomRight.subdivide(0.5),

      bottomRightInner: getCurvePoints(
        x + Math.min(bottomWidth, width + borders[3].width),
        y + Math.min(rightHeight, height + borders[0].width),
        Math.max(0, brh - borders[1].width),
        Math.max(0, brv - borders[2].width)
        ).bottomRight.subdivide(0.5),

      bottomLeftOuter: getCurvePoints(
        x,
        y + leftHeight,
        blh,
        blv
        ).bottomLeft.subdivide(0.5),

      bottomLeftInner: getCurvePoints(
        x + borders[3].width,
        y + leftHeight,
        Math.max(0, blh - borders[3].width),
        Math.max(0, blv - borders[2].width)
        ).bottomLeft.subdivide(0.5)
    };
  }

  function getBorderClip(element, borderPoints, borders, radius, bounds) {
    var backgroundClip = getCSS(element, 'backgroundClip'),
    borderArgs = [];

    switch(backgroundClip) {
      case "content-box":
      case "padding-box":
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
        break;

      default:
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
        break;
    }

    return borderArgs;
  }

  function parseBorders(element, bounds, borders){
    var x = bounds.left,
    y = bounds.top,
    width = bounds.width,
    height = bounds.height,
    borderSide,
    bx,
    by,
    bw,
    bh,
    borderArgs,
    // http://www.w3.org/TR/css3-background/#the-border-radius
    borderRadius = getBorderRadiusData(element),
    borderPoints = calculateCurvePoints(bounds, borderRadius, borders),
    borderData = {
      clip: getBorderClip(element, borderPoints, borders, borderRadius, bounds),
      borders: []
    };

    for (borderSide = 0; borderSide < 4; borderSide++) {

      if (borders[borderSide].width > 0) {
        bx = x;
        by = y;
        bw = width;
        bh = height - (borders[2].width);

        switch(borderSide) {
          case 0:
            // top border
            bh = borders[0].width;

            borderArgs = drawSide({
              c1: [bx, by],
              c2: [bx + bw, by],
              c3: [bx + bw - borders[1].width, by + bh],
              c4: [bx + borders[3].width, by + bh]
            }, borderRadius[0], borderRadius[1],
            borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
            break;
          case 1:
            // right border
            bx = x + width - (borders[1].width);
            bw = borders[1].width;

            borderArgs = drawSide({
              c1: [bx + bw, by],
              c2: [bx + bw, by + bh + borders[2].width],
              c3: [bx, by + bh],
              c4: [bx, by + borders[0].width]
            }, borderRadius[1], borderRadius[2],
            borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
            break;
          case 2:
            // bottom border
            by = (by + height) - (borders[2].width);
            bh = borders[2].width;

            borderArgs = drawSide({
              c1: [bx + bw, by + bh],
              c2: [bx, by + bh],
              c3: [bx + borders[3].width, by],
              c4: [bx + bw - borders[2].width, by]
            }, borderRadius[2], borderRadius[3],
            borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
            break;
          case 3:
            // left border
            bw = borders[3].width;

            borderArgs = drawSide({
              c1: [bx, by + bh + borders[2].width],
              c2: [bx, by],
              c3: [bx + bw, by + borders[0].width],
              c4: [bx + bw, by + bh]
            }, borderRadius[3], borderRadius[0],
            borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
            break;
        }

        borderData.borders.push({
          args: borderArgs,
          color: borders[borderSide].color
        });

      }
    }

    return borderData;
  }

  function createShape(ctx, args) {
    var shape = ctx.drawShape();
    args.forEach(function(border, index) {
      shape[(index === 0) ? "moveTo" : border[0] + "To" ].apply(null, border.slice(1));
    });
    return shape;
  }

  function renderBorders(ctx, borderArgs, color) {
    if (color !== "transparent") {
      ctx.setVariable( "fillStyle", color);
      createShape(ctx, borderArgs);
      ctx.fill();
      numDraws+=1;
    }
  }

  function renderFormValue (el, bounds, stack){

    var valueWrap = doc.createElement('valuewrap'),
    cssPropertyArray = ['lineHeight','textAlign','fontFamily','color','fontSize','paddingLeft','paddingTop','width','height','border','borderLeftWidth','borderTopWidth'],
    textValue,
    textNode;

    cssPropertyArray.forEach(function(property) {
      try {
        valueWrap.style[property] = getCSS(el, property);
      } catch(e) {
        // Older IE has issues with "border"
        h2clog("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
      }
    });

    valueWrap.style.borderColor = "black";
    valueWrap.style.borderStyle = "solid";
    valueWrap.style.display = "block";
    valueWrap.style.position = "absolute";

    if (/^(submit|reset|button|text|password)$/.test(el.type) || el.nodeName === "SELECT"){
      valueWrap.style.lineHeight = getCSS(el, "height");
    }

    valueWrap.style.top = bounds.top + "px";
    valueWrap.style.left = bounds.left + "px";

    textValue = (el.nodeName === "SELECT") ? (el.options[el.selectedIndex] || 0).text : el.value;
    if(!textValue) {
      textValue = el.placeholder;
    }

    textNode = doc.createTextNode(textValue);

    valueWrap.appendChild(textNode);
    body.appendChild(valueWrap);

    renderText(el, textNode, stack);
    body.removeChild(valueWrap);
  }

  function drawImage (ctx) {
    ctx.drawImage.apply(ctx, Array.prototype.slice.call(arguments, 1));
    numDraws+=1;
  }

  function getPseudoElement(el, which) {
    var elStyle = window.getComputedStyle(el, which);
    if(!elStyle || !elStyle.content || elStyle.content === "none" || elStyle.content === "-moz-alt-content") {
      return;
    }
    var content = elStyle.content + '',
    first = content.substr( 0, 1 );
    //strips quotes
    if(first === content.substr( content.length - 1 ) && first.match(/'|"/)) {
      content = content.substr( 1, content.length - 2 );
    }

    var isImage = content.substr( 0, 3 ) === 'url',
    elps = document.createElement( isImage ? 'img' : 'span' );

    elps.className = pseudoHide + "-before " + pseudoHide + "-after";

    Object.keys(elStyle).filter(indexedProperty).forEach(function(prop) {
      // Prevent assigning of read only CSS Rules, ex. length, parentRule
      try {
        elps.style[prop] = elStyle[prop];
      } catch (e) {
        h2clog(['Tried to assign readonly property ', prop, 'Error:', e]);
      }
    });

    if(isImage) {
      elps.src = _html2canvas.Util.parseBackgroundImage(content)[0].args[0];
    } else {
      elps.innerHTML = content;
    }
    return elps;
  }

  function indexedProperty(property) {
    return (isNaN(window.parseInt(property, 10)));
  }

  function injectPseudoElements(el, stack) {
    var before = getPseudoElement(el, ':before'),
    after = getPseudoElement(el, ':after');
    if(!before && !after) {
      return;
    }

    if(before) {
      el.className += " " + pseudoHide + "-before";
      el.parentNode.insertBefore(before, el);
      parseElement(before, stack, true);
      el.parentNode.removeChild(before);
      el.className = el.className.replace(pseudoHide + "-before", "").trim();
    }

    if (after) {
      el.className += " " + pseudoHide + "-after";
      el.appendChild(after);
      parseElement(after, stack, true);
      el.removeChild(after);
      el.className = el.className.replace(pseudoHide + "-after", "").trim();
    }

  }

  function renderBackgroundRepeat(ctx, image, backgroundPosition, bounds) {
    var offsetX = Math.round(bounds.left + backgroundPosition.left),
    offsetY = Math.round(bounds.top + backgroundPosition.top);

    ctx.createPattern(image);
    ctx.translate(offsetX, offsetY);
    ctx.fill();
    ctx.translate(-offsetX, -offsetY);
  }

  function backgroundRepeatShape(ctx, image, backgroundPosition, bounds, left, top, width, height) {
    var args = [];
    args.push(["line", Math.round(left), Math.round(top)]);
    args.push(["line", Math.round(left + width), Math.round(top)]);
    args.push(["line", Math.round(left + width), Math.round(height + top)]);
    args.push(["line", Math.round(left), Math.round(height + top)]);
    createShape(ctx, args);
    ctx.save();
    ctx.clip();
    renderBackgroundRepeat(ctx, image, backgroundPosition, bounds);
    ctx.restore();
  }

  function renderBackgroundColor(ctx, backgroundBounds, bgcolor) {
    renderRect(
      ctx,
      backgroundBounds.left,
      backgroundBounds.top,
      backgroundBounds.width,
      backgroundBounds.height,
      bgcolor
      );
  }

  function renderBackgroundRepeating(el, bounds, ctx, image, imageIndex) {
    var backgroundSize = _html2canvas.Util.BackgroundSize(el, bounds, image, imageIndex),
    backgroundPosition = _html2canvas.Util.BackgroundPosition(el, bounds, image, imageIndex, backgroundSize),
    backgroundRepeat = getCSS(el, "backgroundRepeat").split(",").map(function(value) {
      return value.trim();
    });

    image = resizeImage(image, backgroundSize);

    backgroundRepeat = backgroundRepeat[imageIndex] || backgroundRepeat[0];

    switch (backgroundRepeat) {
      case "repeat-x":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left, bounds.top + backgroundPosition.top, 99999, image.height);
        break;

      case "repeat-y":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left + backgroundPosition.left, bounds.top, image.width, 99999);
        break;

      case "no-repeat":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left + backgroundPosition.left, bounds.top + backgroundPosition.top, image.width, image.height);
        break;

      default:
        renderBackgroundRepeat(ctx, image, backgroundPosition, {
          top: bounds.top,
          left: bounds.left,
          width: image.width,
          height: image.height
        });
        break;
    }
  }

  function renderBackgroundImage(element, bounds, ctx) {
    var backgroundImage = getCSS(element, "backgroundImage"),
    backgroundImages = _html2canvas.Util.parseBackgroundImage(backgroundImage),
    image,
    imageIndex = backgroundImages.length;

    while(imageIndex--) {
      backgroundImage = backgroundImages[imageIndex];

      if (!backgroundImage.args || backgroundImage.args.length === 0) {
        continue;
      }

      var key = backgroundImage.method === 'url' ?
      backgroundImage.args[0] :
      backgroundImage.value;

      image = loadImage(key);

      // TODO add support for background-origin
      if (image) {
        renderBackgroundRepeating(element, bounds, ctx, image, imageIndex);
      } else {
        h2clog("html2canvas: Error loading background:", backgroundImage);
      }
    }
  }

  function resizeImage(image, bounds) {
    if(image.width === bounds.width && image.height === bounds.height) {
      return image;
    }

    var ctx, canvas = doc.createElement('canvas');
    canvas.width = bounds.width;
    canvas.height = bounds.height;
    ctx = canvas.getContext("2d");
    drawImage(ctx, image, 0, 0, image.width, image.height, 0, 0, bounds.width, bounds.height );
    return canvas;
  }

  function setOpacity(ctx, element, parentStack) {
    var opacity = getCSS(element, "opacity") * ((parentStack) ? parentStack.opacity : 1);
    ctx.setVariable("globalAlpha", opacity);
    return opacity;
  }

  function createStack(element, parentStack, bounds) {

    var ctx = h2cRenderContext((!parentStack) ? documentWidth() : bounds.width , (!parentStack) ? documentHeight() : bounds.height),
    stack = {
      ctx: ctx,
      zIndex: setZ(getCSS(element, "zIndex"), (parentStack) ? parentStack.zIndex : null),
      opacity: setOpacity(ctx, element, parentStack),
      cssPosition: getCSS(element, "position"),
      borders: getBorderData(element),
      clip: (parentStack && parentStack.clip) ? _html2canvas.Util.Extend( {}, parentStack.clip ) : null
    };

    // TODO correct overflow for absolute content residing under a static position
    if (options.useOverflow === true && /(hidden|scroll|auto)/.test(getCSS(element, "overflow")) === true && /(BODY)/i.test(element.nodeName) === false){
      stack.clip = (stack.clip) ? clipBounds(stack.clip, bounds) : bounds;
    }

    stack.zIndex.children.push(stack);

    return stack;
  }

  function getBackgroundBounds(borders, bounds, clip) {
    var backgroundBounds = {
      left: bounds.left + borders[3].width,
      top: bounds.top + borders[0].width,
      width: bounds.width - (borders[1].width + borders[3].width),
      height: bounds.height - (borders[0].width + borders[2].width)
    };

    if (clip) {
      backgroundBounds = clipBounds(backgroundBounds, clip);
    }

    return backgroundBounds;
  }

  function renderElement(element, parentStack, pseudoElement){
    var bounds = _html2canvas.Util.Bounds(element),
    image,
    bgcolor = (ignoreElementsRegExp.test(element.nodeName)) ? "#efefef" : getCSS(element, "backgroundColor"),
    stack = createStack(element, parentStack, bounds),
    borders = stack.borders,
    ctx = stack.ctx,
    backgroundBounds = getBackgroundBounds(borders, bounds, stack.clip),
    borderData = parseBorders(element, bounds, borders);

    createShape(ctx, borderData.clip);

    ctx.save();
    ctx.clip();

    if (backgroundBounds.height > 0 && backgroundBounds.width > 0){
      renderBackgroundColor(ctx, bounds, bgcolor);
      renderBackgroundImage(element, backgroundBounds, ctx);
    }

    ctx.restore();

    borderData.borders.forEach(function(border) {
      renderBorders(ctx, border.args, border.color);
    });

    if (!pseudoElement) {
      injectPseudoElements(element, stack);
    }

    switch(element.nodeName){
      case "IMG":
        if ((image = loadImage(element.getAttribute('src')))) {
          renderImage(ctx, element, image, bounds, borders);
        } else {
          h2clog("html2canvas: Error loading <img>:" + element.getAttribute('src'));
        }
        break;
      case "INPUT":
        // TODO add all relevant type's, i.e. HTML5 new stuff
        // todo add support for placeholder attribute for browsers which support it
        if (/^(text|url|email|submit|button|reset)$/.test(element.type) && (element.value || element.placeholder || []).length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "TEXTAREA":
        if ((element.value || element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "SELECT":
        if ((element.options||element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "LI":
        renderListItem(element, stack, backgroundBounds);
        break;
      case "CANVAS":
        renderImage(ctx, element, element, bounds, borders);
        break;
    }

    return stack;
  }

  function isElementVisible(element) {
      return getCSS(element, 'display') !== "none" && ((getCSS(element, 'visibility') !== "hidden" && !element.hasAttribute("data-html2canvas-ignore")) || element.hasAttribute("data-html2canvas-visible"));
  }

  function parseElement (el, stack, pseudoElement) {

    if (isElementVisible(el)) {
      stack = renderElement(el, stack, pseudoElement) || stack;
      if (!ignoreElementsRegExp.test(el.nodeName)) {
        _html2canvas.Util.Children(el).forEach(function(node) {
          if (node.nodeType === 1) {
            parseElement(node, stack, pseudoElement);
          } else if (node.nodeType === 3) {
            renderText(el, node, stack);
          }
        });
      }
    }
  }

  function svgDOMRender(body, stack) {
    var img = new Image(),
    docWidth = documentWidth(),
    docHeight = documentHeight(),
    html = "";

    function parseDOM(el) {
      var children = _html2canvas.Util.Children( el ),
      len = children.length,
      attr,
      a,
      alen,
      elm,
      i;
      for ( i = 0; i < len; i+=1 ) {
        elm = children[ i ];
        if ( elm.nodeType === 3 ) {
          // Text node
          html += elm.nodeValue.replace(/</g,"&lt;").replace(/>/g,"&gt;");
        } else if ( elm.nodeType === 1 ) {
          // Element
          if ( !/^(script|meta|title)$/.test(elm.nodeName.toLowerCase()) ) {

            html += "<" + elm.nodeName.toLowerCase();

            // add attributes
            if ( elm.hasAttributes() ) {
              attr = elm.attributes;
              alen = attr.length;
              for ( a = 0; a < alen; a+=1 ) {
                html += " " + attr[ a ].name + '="' + attr[ a ].value + '"';
              }
            }


            html += '>';

            parseDOM( elm );


            html += "</" + elm.nodeName.toLowerCase() + ">";
          }
        }

      }

    }

    parseDOM(body);
    img.src = [
    "data:image/svg+xml,",
    "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='" + docWidth + "' height='" + docHeight + "'>",
    "<foreignObject width='" + docWidth + "' height='" + docHeight + "'>",
    "<html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;'>",
    html.replace(/\#/g,"%23"),
    "</html>",
    "</foreignObject>",
    "</svg>"
    ].join("");

    img.onload = function() {
      stack.svgRender = img;
    };

  }

  function init() {
    var stack = renderElement(element, null);

    if (support.svgRendering) {
      svgDOMRender(document.documentElement, stack);
    }

    Array.prototype.slice.call(element.children, 0).forEach(function(childElement) {
      parseElement(childElement, stack);
    });

    stack.backgroundColor = getCSS(document.documentElement, "backgroundColor");
    body.removeChild(hidePseudoElements);
    return stack;
  }

  return init();
};

function h2czContext(zindex) {
  return {
    zindex: zindex,
    children: []
  };
}
_html2canvas.Preload = function( options ) {

  var images = {
    numLoaded: 0,   // also failed are counted here
    numFailed: 0,
    numTotal: 0,
    cleanupDone: false
  },
  pageOrigin,
  methods,
  i,
  count = 0,
  element = options.elements[0] || document.body,
  doc = element.ownerDocument,
  domImages = doc.images, // TODO probably should limit it to images present in the element only
  imgLen = domImages.length,
  link = doc.createElement("a"),
  supportCORS = (function( img ){
    return (img.crossOrigin !== undefined);
  })(new Image()),
  timeoutTimer;

  link.href = window.location.href;
  pageOrigin  = link.protocol + link.host;

  function isSameOrigin(url){
    link.href = url;
    link.href = link.href; // YES, BELIEVE IT OR NOT, that is required for IE9 - http://jsfiddle.net/niklasvh/2e48b/
    var origin = link.protocol + link.host;
    return (origin === pageOrigin);
  }

  function start(){
    h2clog("html2canvas: start: images: " + images.numLoaded + " / " + images.numTotal + " (failed: " + images.numFailed + ")");
    if (!images.firstRun && images.numLoaded >= images.numTotal){
      h2clog("Finished loading images: # " + images.numTotal + " (failed: " + images.numFailed + ")");

      if (typeof options.complete === "function"){
        options.complete(images);
      }

    }
  }

  // TODO modify proxy to serve images with CORS enabled, where available
  function proxyGetImage(url, img, imageObj){
    var callback_name,
    scriptUrl = options.proxy,
    script;

    link.href = url;
    url = link.href; // work around for pages with base href="" set - WARNING: this may change the url

    callback_name = 'html2canvas_' + (count++);
    imageObj.callbackname = callback_name;

    if (scriptUrl.indexOf("?") > -1) {
      scriptUrl += "&";
    } else {
      scriptUrl += "?";
    }
    scriptUrl += 'url=' + encodeURIComponent(url) + '&callback=' + callback_name;
    script = doc.createElement("script");

    window[callback_name] = function(a){
      if (a.substring(0,6) === "error:"){
        imageObj.succeeded = false;
        images.numLoaded++;
        images.numFailed++;
        start();
      } else {
        setImageLoadHandlers(img, imageObj);
        img.src = a;
      }
      window[callback_name] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
      try {
        delete window[callback_name];  // for all browser that support this
      } catch(ex) {}
      script.parentNode.removeChild(script);
      script = null;
      delete imageObj.script;
      delete imageObj.callbackname;
    };

    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptUrl);
    imageObj.script = script;
    window.document.body.appendChild(script);

  }

  function loadPseudoElement(element, type) {
    var style = window.getComputedStyle(element, type),
    content = style.content;
    if (content.substr(0, 3) === 'url') {
      methods.loadImage(_html2canvas.Util.parseBackgroundImage(content)[0].args[0]);
    }
    loadBackgroundImages(style.backgroundImage, element);
  }

  function loadPseudoElementImages(element) {
    loadPseudoElement(element, ":before");
    loadPseudoElement(element, ":after");
  }

  function loadGradientImage(backgroundImage, bounds) {
    var img = _html2canvas.Generate.Gradient(backgroundImage, bounds);

    if (img !== undefined){
      images[backgroundImage] = {
        img: img,
        succeeded: true
      };
      images.numTotal++;
      images.numLoaded++;
      start();
    }
  }

  function invalidBackgrounds(background_image) {
    return (background_image && background_image.method && background_image.args && background_image.args.length > 0 );
  }

  function loadBackgroundImages(background_image, el) {
    var bounds;

    _html2canvas.Util.parseBackgroundImage(background_image).filter(invalidBackgrounds).forEach(function(background_image) {
      if (background_image.method === 'url') {
        methods.loadImage(background_image.args[0]);
      } else if(background_image.method.match(/\-?gradient$/)) {
        if(bounds === undefined) {
          bounds = _html2canvas.Util.Bounds(el);
        }
        loadGradientImage(background_image.value, bounds);
      }
    });
  }

  function getImages (el) {
    var elNodeType = false;

    // Firefox fails with permission denied on pages with iframes
    try {
      _html2canvas.Util.Children(el).forEach(function(img) {
        getImages(img);
      });
    }
    catch( e ) {}

    try {
      elNodeType = el.nodeType;
    } catch (ex) {
      elNodeType = false;
      h2clog("html2canvas: failed to access some element's nodeType - Exception: " + ex.message);
    }

    if (elNodeType === 1 || elNodeType === undefined) {
      loadPseudoElementImages(el);
      try {
        loadBackgroundImages(_html2canvas.Util.getCSS(el, 'backgroundImage'), el);
      } catch(e) {
        h2clog("html2canvas: failed to get background-image - Exception: " + e.message);
      }
      loadBackgroundImages(el);
    }
  }

  function setImageLoadHandlers(img, imageObj) {
    img.onload = function() {
      if ( imageObj.timer !== undefined ) {
        // CORS succeeded
        window.clearTimeout( imageObj.timer );
      }

      images.numLoaded++;
      imageObj.succeeded = true;
      img.onerror = img.onload = null;
      start();
    };
    img.onerror = function() {
      if (img.crossOrigin === "anonymous") {
        // CORS failed
        window.clearTimeout( imageObj.timer );

        // let's try with proxy instead
        if ( options.proxy ) {
          var src = img.src;
          img = new Image();
          imageObj.img = img;
          img.src = src;

          proxyGetImage( img.src, img, imageObj );
          return;
        }
      }

      images.numLoaded++;
      images.numFailed++;
      imageObj.succeeded = false;
      img.onerror = img.onload = null;
      start();
    };
  }

  methods = {
    loadImage: function( src ) {
      var img, imageObj;
      if ( src && images[src] === undefined ) {
        img = new Image();
        if ( src.match(/data:image\/.*;base64,/i) ) {
          img.src = src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, '');
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
        } else if ( isSameOrigin( src ) || options.allowTaint ===  true ) {
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
          img.src = src;
        } else if ( supportCORS && !options.allowTaint && options.useCORS ) {
          // attempt to load with CORS

          img.crossOrigin = "anonymous";
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
          img.src = src;

          // work around for https://bugs.webkit.org/show_bug.cgi?id=80028
          img.customComplete = function () {
            if (!this.img.complete) {
              this.timer = window.setTimeout(this.img.customComplete, 100);
            } else {
              this.img.onerror();
            }
          }.bind(imageObj);
          img.customComplete();

        } else if ( options.proxy ) {
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          proxyGetImage( src, img, imageObj );
        }
      }

    },
    cleanupDOM: function(cause) {
      var img, src;
      if (!images.cleanupDone) {
        if (cause && typeof cause === "string") {
          h2clog("html2canvas: Cleanup because: " + cause);
        } else {
          h2clog("html2canvas: Cleanup after timeout: " + options.timeout + " ms.");
        }

        for (src in images) {
          if (images.hasOwnProperty(src)) {
            img = images[src];
            if (typeof img === "object" && img.callbackname && img.succeeded === undefined) {
              // cancel proxy image request
              window[img.callbackname] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
              try {
                delete window[img.callbackname];  // for all browser that support this
              } catch(ex) {}
              if (img.script && img.script.parentNode) {
                img.script.setAttribute("src", "about:blank");  // try to cancel running request
                img.script.parentNode.removeChild(img.script);
              }
              images.numLoaded++;
              images.numFailed++;
              h2clog("html2canvas: Cleaned up failed img: '" + src + "' Steps: " + images.numLoaded + " / " + images.numTotal);
            }
          }
        }

        // cancel any pending requests
        if(window.stop !== undefined) {
          window.stop();
        } else if(document.execCommand !== undefined) {
          document.execCommand("Stop", false);
        }
        if (document.close !== undefined) {
          document.close();
        }
        images.cleanupDone = true;
        if (!(cause && typeof cause === "string")) {
          start();
        }
      }
    },

    renderingDone: function() {
      if (timeoutTimer) {
        window.clearTimeout(timeoutTimer);
      }
    }
  };

  if (options.timeout > 0) {
    timeoutTimer = window.setTimeout(methods.cleanupDOM, options.timeout);
  }

  h2clog('html2canvas: Preload starts: finding background-images');
  images.firstRun = true;

  getImages(element);

  h2clog('html2canvas: Preload: Finding images');
  // load <img> images
  for (i = 0; i < imgLen; i+=1){
    methods.loadImage( domImages[i].getAttribute( "src" ) );
  }

  images.firstRun = false;
  h2clog('html2canvas: Preload: Done.');
  if ( images.numTotal === images.numLoaded ) {
    start();
  }

  return methods;

};
_html2canvas.Renderer = function(parseQueue, options){

  function createRenderQueue(parseQueue) {
    var queue = [];

    var sortZ = function(zStack){
      var subStacks = [],
      stackValues = [];

      zStack.children.forEach(function(stackChild) {
        if (stackChild.children && stackChild.children.length > 0){
          subStacks.push(stackChild);
          stackValues.push(stackChild.zindex);
        } else {
          queue.push(stackChild);
        }
      });

      stackValues.sort(function(a, b) {
        return a - b;
      });

      stackValues.forEach(function(zValue) {
        var index;

        subStacks.some(function(stack, i){
          index = i;
          return (stack.zindex === zValue);
        });
        sortZ(subStacks.splice(index, 1)[0]);

      });
    };

    sortZ(parseQueue.zIndex);

    return queue;
  }

  function getRenderer(rendererName) {
    var renderer;

    if (typeof options.renderer === "string" && _html2canvas.Renderer[rendererName] !== undefined) {
      renderer = _html2canvas.Renderer[rendererName](options);
    } else if (typeof rendererName === "function") {
      renderer = rendererName(options);
    } else {
      throw new Error("Unknown renderer");
    }

    if ( typeof renderer !== "function" ) {
      throw new Error("Invalid renderer defined");
    }
    return renderer;
  }

  return getRenderer(options.renderer)(parseQueue, options, document, createRenderQueue(parseQueue), _html2canvas);
};

_html2canvas.Util.Support = function (options, doc) {

  function supportSVGRendering() {
    var img = new Image(),
    canvas = doc.createElement("canvas"),
    ctx = (canvas.getContext === undefined) ? false : canvas.getContext("2d");
    if (ctx === false) {
      return false;
    }
    canvas.width = canvas.height = 10;
    img.src = [
    "data:image/svg+xml,",
    "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>",
    "<foreignObject width='10' height='10'>",
    "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>",
    "sup",
    "</div>",
    "</foreignObject>",
    "</svg>"
    ].join("");
    try {
      ctx.drawImage(img, 0, 0);
      canvas.toDataURL();
    } catch(e) {
      return false;
    }
    h2clog('html2canvas: Parse: SVG powered rendering available');
    return true;
  }

  // Test whether we can use ranges to measure bounding boxes
  // Opera doesn't provide valid bounds.height/bottom even though it supports the method.

  function supportRangeBounds() {
    var r, testElement, rangeBounds, rangeHeight, support = false;

    if (doc.createRange) {
      r = doc.createRange();
      if (r.getBoundingClientRect) {
        testElement = doc.createElement('boundtest');
        testElement.style.height = "123px";
        testElement.style.display = "block";
        doc.body.appendChild(testElement);

        r.selectNode(testElement);
        rangeBounds = r.getBoundingClientRect();
        rangeHeight = rangeBounds.height;

        if (rangeHeight === 123) {
          support = true;
        }
        doc.body.removeChild(testElement);
      }
    }

    return support;
  }

  return {
    rangeBounds: supportRangeBounds(),
    svgRendering: options.svgRendering && supportSVGRendering()
  };
};
window.html2canvas = function(elements, opts) {
  elements = (elements.length) ? elements : [elements];
  var queue,
  canvas,
  options = {
    // general
    logging: false,
    elements: elements,
    background: "#fff",

    // preload options
    proxy: null,
    timeout: 0,    // no timeout
    useCORS: false, // try to load images as CORS (where available), before falling back to proxy
    allowTaint: false, // whether to allow images to taint the canvas, won't need proxy if set to true

    // parse options
    svgRendering: false, // use svg powered rendering where available (FF11+)
    ignoreElements: "IFRAME|PARAM",
    useOverflow: true,
    letterRendering: false,
    chinese: false,

    // render options

    width: null,
    height: null,
    taintTest: true, // do a taint test with all images before applying to canvas
    renderer: "Canvas"
  };

  options = _html2canvas.Util.Extend(opts, options);

  _html2canvas.logging = options.logging;
  options.complete = function( images ) {

    if (typeof options.onpreloaded === "function") {
      if ( options.onpreloaded( images ) === false ) {
        return;
      }
    }
    queue = _html2canvas.Parse( images, options );

    if (typeof options.onparsed === "function") {
      if ( options.onparsed( queue ) === false ) {
        return;
      }
    }

    canvas = _html2canvas.Renderer( queue, options );

    if (typeof options.onrendered === "function") {
      options.onrendered( canvas );
    }


  };

  // for pages without images, we still want this to be async, i.e. return methods before executing
  window.setTimeout( function(){
    _html2canvas.Preload( options );
  }, 0 );

  return {
    render: function( queue, opts ) {
      return _html2canvas.Renderer( queue, _html2canvas.Util.Extend(opts, options) );
    },
    parse: function( images, opts ) {
      return _html2canvas.Parse( images, _html2canvas.Util.Extend(opts, options) );
    },
    preload: function( opts ) {
      return _html2canvas.Preload( _html2canvas.Util.Extend(opts, options) );
    },
    log: h2clog
  };
};

window.html2canvas.log = h2clog; // for renderers
window.html2canvas.Renderer = {
  Canvas: undefined // We are assuming this will be used
};
_html2canvas.Renderer.Canvas = function(options) {

  options = options || {};

  var doc = document,
  safeImages = [],
  testCanvas = document.createElement("canvas"),
  testctx = testCanvas.getContext("2d"),
  canvas = options.canvas || doc.createElement('canvas');


  function createShape(ctx, args) {
    ctx.beginPath();
    args.forEach(function(arg) {
      ctx[arg.name].apply(ctx, arg['arguments']);
    });
    ctx.closePath();
  }

  function safeImage(item) {
    if (safeImages.indexOf(item['arguments'][0].src ) === -1) {
      testctx.drawImage(item['arguments'][0], 0, 0);
      try {
        testctx.getImageData(0, 0, 1, 1);
      } catch(e) {
        testCanvas = doc.createElement("canvas");
        testctx = testCanvas.getContext("2d");
        return false;
      }
      safeImages.push(item['arguments'][0].src);
    }
    return true;
  }

  function isTransparent(backgroundColor) {
    return (backgroundColor === "transparent" || backgroundColor === "rgba(0, 0, 0, 0)");
  }

  function renderItem(ctx, item) {
    switch(item.type){
      case "variable":
        ctx[item.name] = item['arguments'];
        break;
      case "function":
        if (item.name === "createPattern") {
          if (item['arguments'][0].width > 0 && item['arguments'][0].height > 0) {
            try {
              ctx.fillStyle = ctx.createPattern(item['arguments'][0], "repeat");
            }
            catch(e) {
              h2clog("html2canvas: Renderer: Error creating pattern", e.message);
            }
          }
        } else if (item.name === "drawShape") {
          createShape(ctx, item['arguments']);
        } else if (item.name === "drawImage") {
          if (item['arguments'][8] > 0 && item['arguments'][7] > 0) {
            if (!options.taintTest || (options.taintTest && safeImage(item))) {
              ctx.drawImage.apply( ctx, item['arguments'] );
            }
          }
        } else {
          ctx[item.name].apply(ctx, item['arguments']);
        }
        break;
    }
  }

  return function(zStack, options, doc, queue, _html2canvas) {

    var ctx = canvas.getContext("2d"),
    storageContext,
    i,
    queueLen,
    newCanvas,
    bounds,
    fstyle;

    canvas.width = canvas.style.width =  options.width || zStack.ctx.width;
    canvas.height = canvas.style.height = options.height || zStack.ctx.height;

    fstyle = ctx.fillStyle;
    ctx.fillStyle = (isTransparent(zStack.backgroundColor) && options.background !== undefined) ? options.background : zStack.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = fstyle;


    if ( options.svgRendering && zStack.svgRender !== undefined ) {
      // TODO: enable async rendering to support this
      ctx.drawImage( zStack.svgRender, 0, 0 );
    } else {
      for ( i = 0, queueLen = queue.length; i < queueLen; i+=1 ) {
        storageContext = queue.splice(0, 1)[0];
        storageContext.canvasPosition = storageContext.canvasPosition || {};

        // set common settings for canvas
        ctx.textBaseline = "bottom";

        if (storageContext.clip){
          ctx.save();
          ctx.beginPath();
          // console.log(storageContext);
          ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
          ctx.clip();
        }

        if (storageContext.ctx.storage) {
          storageContext.ctx.storage.forEach(renderItem.bind(null, ctx));
        }

        if (storageContext.clip){
          ctx.restore();
        }
      }
    }

    h2clog("html2canvas: Renderer: Canvas renderer done - returning canvas obj");

    queueLen = options.elements.length;

    if (queueLen === 1) {
      if (typeof options.elements[0] === "object" && options.elements[0].nodeName !== "BODY") {
        // crop image to the bounds of selected (single) element
        bounds = _html2canvas.Util.Bounds(options.elements[0]);
        newCanvas = doc.createElement('canvas');
        newCanvas.width = bounds.width;
        newCanvas.height = bounds.height;
        ctx = newCanvas.getContext("2d");

        ctx.drawImage(canvas, bounds.left, bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height);
        canvas = null;
        return newCanvas;
      }
    }

    return canvas;
  };
};
})(window,document);
///#source 1 1 /Scripts/JS/jQuery/jquery.numeric.js
/*
This is a siginificantly modified version of the original by Edward Nutting (typescriptui.codeplex.com or edwardnutting.wordpress.com).
*/

/*
 *
 * Copyright (c) 2006-2011 Sam Collett (http://www.texotela.co.uk)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Version 1.3
 * Demo: http://www.texotela.co.uk/code/jquery/numeric/
 *
 */
(function($) {
/*
 * Allows only valid characters to be entered into input boxes.
 * Note: fixes value when pasting via Ctrl+V, but not when using the mouse to paste
  *      side-effect: Ctrl+A does not work, though you can still use the mouse to select (or double-click to select all)
 *
 * @name     numeric
 * @param    config      { decimal : "." , negative : true }
 * @param    callback     A function that runs if the number is not valid (fires onblur)
 * @author   Sam Collett (http://www.texotela.co.uk)
 * @example  $(".numeric").numeric();
 * @example  $(".numeric").numeric(","); // use , as separater
 * @example  $(".numeric").numeric({ decimal : "," }); // use , as separator
 * @example  $(".numeric").numeric({ negative : false }); // do not allow negative values
 * @example  $(".numeric").numeric(null, callback); // use default values, pass on the 'callback' function
 *
 */
$.fn.numeric = function(config, callback)
{
	if(typeof config === 'boolean')
	{
		config = { decimal: config };
	}
	config = config || {};
	// if config.negative undefined, set to true (default is to allow negative numbers)
	if (typeof config.negative == "undefined") config.negative = true;
    // if config.decimalPlaces undefined, set to -1 (default is to allow any number of decimal places)
	if (typeof config.decimalPlaces == "undefined") config.decimalPlaces = -1;
    // if config.min undefined, set to null (default is to allow any range)
	if (typeof config.min == "undefined") config.min = null;
    // if config.max undefined, set to null (default is to allow any range)
	if (typeof config.max == "undefined") config.max = null;

	// set decimal point
	var decimal = (config.decimal === false) ? "" : config.decimal || ".";
	// allow negatives
	var negative = (config.negative === true) ? true : false;
    // number of decimal places
	var decimalPlaces = (typeof config.decimalPlaces === "number") ? config.decimalPlaces : 2;
    // minimum value
	var min = (typeof config.min === "number") ? config.min : null;
    // maximum value
	var max = (typeof config.max === "number") ? config.max : null;
    // callback function
	var callback = typeof callback == "function" ? callback : function(){};
	// set data and methods
	return this.data("numeric.decimal", decimal)
               .data("numeric.negative", negative)
               .data("numeric.callback", callback)
               .data("numeric.decimalPlaces", decimalPlaces)
               .data("numeric.min", min)
               .data("numeric.max", max)
               .keypress($.fn.numeric.keypress)
               .keyup($.fn.numeric.keyup)
               .blur($.fn.numeric.blur);
}
$.fn.numeric_DecimalSeparator = function(o)
{
    if (o !== undefined) {
        if (typeof o === "boolean") {
            this.data("numeric.decimal", o === false ? "" : ".");
        }
        else if (typeof o === "string") {
            this.data("numeric.decimal", o.length > 0 ? o[0] : "");
        }
    }
    return this.data("numeric.decimal");
}
$.fn.numeric_AllowNegatives = function (o) {
    if (typeof o === 'boolean')
        this.data("numeric.negative", o);

    return this.data("numeric.negative");
}
$.fn.numeric_DecimalPlaces = function (o) {
    if (typeof o === 'number')
        this.data("numeric.decimalPlaces", o);

    return this.data("numeric.decimalPlaces");
}
$.fn.numeric_Min = function (o) {
    if (typeof o === 'number')
        this.data("numeric.min", o);

    return this.data("numeric.min");
}
$.fn.numeric_Max = function (o) {
    if (typeof o === 'number')
        this.data("numeric.max", o);

    return this.data("numeric.max");
}
$.fn.numeric_Callback = function (o) {
    if (typeof o === 'function')
        this.data("numeric.callback", o);

    return this.data("numeric.callback");
}
$.fn.numeric.keypress = function(e)
{
	// get decimal character and determine if negatives are allowed
	var decimal = $.data(this, "numeric.decimal");
	var negative = $.data(this, "numeric.negative");
	// get the key that was pressed
	var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
	// allow enter/return key (only when in an input box)
	if(key == 13 && this.nodeName.toLowerCase() == "input")
	{
		return true;
	}
	else if(key == 13)
	{
		return false;
	}
	var allow = false;
	// allow Ctrl+A
	if((e.ctrlKey && key == 97 /* firefox */) || (e.ctrlKey && key == 65) /* opera */) return true;
	// allow Ctrl+X (cut)
	if((e.ctrlKey && key == 120 /* firefox */) || (e.ctrlKey && key == 88) /* opera */) return true;
	// allow Ctrl+C (copy)
	if((e.ctrlKey && key == 99 /* firefox */) || (e.ctrlKey && key == 67) /* opera */) return true;
	// allow Ctrl+Z (undo)
	if((e.ctrlKey && key == 122 /* firefox */) || (e.ctrlKey && key == 90) /* opera */) return true;
	// allow or deny Ctrl+V (paste), Shift+Ins
	if((e.ctrlKey && key == 118 /* firefox */) || (e.ctrlKey && key == 86) /* opera */
	|| (e.shiftKey && key == 45)) return true;
	// if a number was not pressed
	if(key < 48 || key > 57)
	{
		/* '-' only allowed at start and if negative numbers allowed */
		if(this.value.indexOf("-") != 0 && negative && key == 45 && (this.value.length == 0 || ($.fn.getSelectionStart(this)) == 0)) return true;
		/* only one decimal separator allowed */
		if(decimal && key == decimal.charCodeAt(0) && this.value.indexOf(decimal) != -1)
		{
			allow = false;
		}
		// check for other keys that have special purposes
		if(
			key != 8 /* backspace */ &&
			key != 9 /* tab */ &&
			key != 13 /* enter */ &&
			key != 35 /* end */ &&
			key != 36 /* home */ &&
			key != 37 /* left */ &&
			key != 38 /* up */ &&
			key != 39 /* right */ &&
			key != 40 /* down */ &&
			key != 46 /* del */
		)
		{
			allow = false;
		}
		else
		{
			// for detecting special keys (listed above)
			// IE does not support 'charCode' and ignores them in keypress anyway
			if(typeof e.charCode != "undefined")
			{
				// special keys have 'keyCode' and 'which' the same (e.g. backspace)
				if(e.keyCode == e.which && e.which != 0)
				{
					allow = true;
					// . and delete share the same code, don't allow . (will be set to true later if it is the decimal point)
					if(e.which == 46) allow = false;
				}
				// or keyCode != 0 and 'charCode'/'which' = 0
				else if(e.keyCode != 0 && e.charCode == 0 && e.which == 0)
				{
					allow = true;
				}
			}
		}
		// if key pressed is the decimal and it is not already in the field
		if(decimal && key == decimal.charCodeAt(0))
		{
			if(this.value.indexOf(decimal) == -1)
			{
				allow = true;
			}
			else
			{
				allow = false;
			}
		}
	}
	else
	{
		allow = true;
	}
	return allow;
}

$.fn.numeric.keyup = function(e)
{
	var val = this.value;
	if(val.length > 0)
	{
		// get carat (cursor) position
		var carat = $.fn.getSelectionStart(this);
		// get decimal character and determine if negatives are allowed
		var decimal = $.data(this, "numeric.decimal");
		var negative = $.data(this, "numeric.negative");
		var decimalPlaces = $.data(this, "numeric.decimalPlaces");
		var min = $.data(this, "numeric.min");
		var max = $.data(this, "numeric.max");

		// prepend a 0 if necessary
		if(decimal != "")
		{
			// find decimal point
			var dot = val.indexOf(decimal);
			// if dot at start, add 0 before
			if(dot == 0)
			{
				this.value = "0" + val;
			}
			// if dot at position 1, check if there is a - symbol before it
			if(dot == 1 && val.charAt(0) == "-")
			{
				this.value = "-0" + val.substring(1);
			}
			val = this.value;
		}
		
		// if pasted in, only allow the following characters
		var validChars = [0,1,2,3,4,5,6,7,8,9,'-',decimal];
		// get length of the value (to loop through)
		var length = val.length;
		// loop backwards (to prevent going out of bounds)
		for(var i = length - 1; i >= 0; i--)
		{
			var ch = val.charAt(i);
			// remove '-' if it is in the wrong place
			if(i != 0 && ch == "-")
			{
				val = val.substring(0, i) + val.substring(i + 1);
			}
			// remove character if it is at the start, a '-' and negatives aren't allowed
			else if(i == 0 && !negative && ch == "-")
			{
				val = val.substring(1);
			}
			var validChar = false;
			// loop through validChars
			for(var j = 0; j < validChars.length; j++)
			{
				// if it is valid, break out the loop
				if(ch == validChars[j])
				{
					validChar = true;
					break;
				}
			}
			// if not a valid character, or a space, remove
			if(!validChar || ch == " ")
			{
				val = val.substring(0, i) + val.substring(i + 1);
			}
		}
		// remove extra decimal characters
		var firstDecimal = val.indexOf(decimal);
		if(firstDecimal > 0)
		{
		    if (decimalPlaces === 0)
		        firstDecimal -= 1;

			for(var i = length - 1; i > firstDecimal; i--)
			{
				var ch = val.charAt(i);
				// remove decimal character
				if(ch == decimal)
				{
					val = val.substring(0, i) + val.substring(i + 1);
				}
			}

            if(decimalPlaces === 0)
			    firstDecimal = -1;
		}

		var parsedVal = parseFloat(val);
		if (!isNaN(parsedVal)) {
		    if (min !== null && parsedVal < min) {
		        parsedVal = min;
		    }
		    else if (max !== null && parsedVal > max) {
		        parsedVal = max;
		    }
		    if (decimalPlaces === -1) {
		        var hasDot = val.indexOf(decimal) !== -1;
		        var existingDP = firstDecimal === -1 ? 0 : val.length - firstDecimal - 1;
		        val = parsedVal.toFixed(existingDP);
		        if (hasDot && val.indexOf(decimal) === -1) {
		            val += decimal;
		        }
		    }
		    else {
		        val = parsedVal.toFixed(decimalPlaces);
		    }
		}
        
		// set the value and prevent the cursor moving to the end
		this.value = val;
		$.fn.setSelection(this, carat);
	}
}

$.fn.numeric.blur = function()
{
	var decimal = $.data(this, "numeric.decimal");
	var callback = $.data(this, "numeric.callback");
	var val = this.value;
	if(val != "")
	{
		var re = new RegExp("^\\d+$|\\d*" + decimal + "\\d+");
		if(!re.exec(val))
		{
			callback.apply(this);
		}
	}
}

$.fn.removeNumeric = function()
{
	return this.data("numeric.decimal", null).data("numeric.negative", null).data("numeric.callback", null).unbind("keypress", $.fn.numeric.keypress).unbind("blur", $.fn.numeric.blur);
}

// Based on code from http://javascript.nwbox.com/cursor_position/ (Diego Perini <dperini@nwbox.com>)
$.fn.getSelectionStart = function(o)
{
	if (o.createTextRange)
	{
		var r = document.selection.createRange().duplicate();
		r.moveEnd('character', o.value.length);
		if (r.text == '') return o.value.length;
		return o.value.lastIndexOf(r.text);
	} else return o.selectionStart;
}

// set the selection, o is the object (input), p is the position ([start, end] or just start)
$.fn.setSelection = function(o, p)
{
	// if p is number, start and end are the same
	if(typeof p == "number") p = [p, p];
	// only set if p is an array of length 2
	if(p && p.constructor == Array && p.length == 2)
	{
		if (o.createTextRange)
		{
			var r = o.createTextRange();
			r.collapse(true);
			r.moveStart('character', p[0]);
			r.moveEnd('character', p[1]);
			r.select();
		}
		else if(o.setSelectionRange)
		{
			o.focus();
			o.setSelectionRange(p[0], p[1]);
		}
	}
}

})(jQuery);
///#source 1 1 /Scripts/TS/Lib/Build/Utils.js
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
- 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../Definitions/jquery_all.d.ts" />
var TSUI;
(function (TSUI) {
    /** @returns the string name of the type of the object (using Object.prototype.toString.call approach) */
    TSUI.getType = function (x) {
        return Object.prototype.toString.call(x);
    };

    /** @returns true if the object is a number */
    TSUI.isNumber = function (x) {
        return TSUI.getType(x) === "[object Number]";
    };

    /** @returns true if the object is a string */
    TSUI.isString = function (x) {
        return TSUI.getType(x) === "[object String]";
    };

    /** @returns true if the object is a date */
    TSUI.isDate = function (x) {
        return TSUI.getType(x) === "[object Date]";
    };

    /** @returns true if the object is a function */
    TSUI.isFunction = function (x) {
        return TSUI.getType(x) === "[object Function]";
    };

    /** @returns true if the object is an array */
    TSUI.isArray = function (x) {
        return TSUI.getType(x) === "[object Array]";
    };

    /** Stops a jQuery event from bubbling and prevents default browser behaviour.
    Ignores certain events based on keyboard conditions to ensure F5 and other such buttons still work.
    */
    TSUI.StopEvent = function (jqEvent) {
        if (!jqEvent.keyCode || jqEvent.keyCode === 13 || jqEvent.keyCode === 8 || (jqEvent.keyCode >= 17 && jqEvent.keyCode <= 90) || (jqEvent.keyCode >= 96 && jqEvent.keyCode <= 111) || (jqEvent.keyCode >= 186 && jqEvent.keyCode <= 222)) {
            jqEvent.stopPropagation();
            jqEvent.stopImmediatePropagation();
            jqEvent.preventDefault();
        }
    };

    /** Determines the abosolute px position of a control's animation element relative to its parent.
    @param control The UI.Control to determine the position of.
    @returns an object with top and left px position.
    */
    TSUI.GetPosition = function (control) {
        var element = control.AnimationElement();

        var startPosObj = {
            top: control.Top(),
            left: control.Left()
        };
        var startPos = {
            top: 0,
            left: 0
        };
        if (startPosObj.left.Units === "%") {
            var parentWidth = element.parent().width();
            var leftPerc = startPosObj.left.Value;
            startPos.left = (leftPerc / 100) * parentWidth;
        } else {
            startPos.left = startPosObj.left.Value;
        }
        if (startPosObj.top.Units === "%") {
            var parentHeight = element.parent().height();
            var topPerc = startPosObj.top.Value;
            startPos.top = (topPerc / 100) * parentHeight;
        } else {
            startPos.top = startPosObj.top.Value;
        }

        return startPos;
    };

    /** Determines the abosolute px size of a control's animation element.
    @param control The UI.Control to determine the size of.
    @returns an object with width and height px size.
    */
    TSUI.GetSize = function (control) {
        var element = control.AnimationElement();

        var startPosObj = {
            width: control.Width(),
            height: control.Height()
        };
        var startPos = {
            width: 0,
            height: 0
        };
        if (startPosObj.width.Units === "%") {
            var parentWidth = element.parent().width();
            var leftPerc = startPosObj.width.Value;
            startPos.width = (leftPerc / 100) * parentWidth;
        } else {
            startPos.width = startPosObj.width.Value;
        }
        if (startPosObj.height.Units === "%") {
            var parentHeight = element.parent().height();
            var topPerc = startPosObj.height.Value;
            startPos.height = (topPerc / 100) * parentHeight;
        } else {
            startPos.height = startPosObj.height.Value;
        }

        return startPos;
    };

    /** Opens the specified URL in a new window.
    @param url The URL to open.
    */
    TSUI.OpenInNewWindow = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };

    /** Rounds a number to the nearest multiple of another.
    @param x The number to be rounded.
    @param multiple The base number (x is rounded to nearest multiple of this)
    */
    TSUI.roundTo = function (x, multiple) {
        var neg = x < 0 ? -1 : 1;
        x = Math.abs(x);
        var resto = x % multiple;
        if (resto <= (multiple / 2)) {
            return (x - resto) * neg;
        } else {
            return (x + multiple - resto) * neg;
        }
    };

    /** Standardises a jQuery [touch/mouse] event.
    Uses only the first touch as the mouse position.
    @param jqEvent The event to standardise
    @returns the standardised event.
    */
    TSUI.standardiseEvent = function (jqEvent) {
        if (jqEvent) {
            if (jqEvent.originalEvent) {
                if (jqEvent.originalEvent.touches) {
                    if (jqEvent.originalEvent.touches.length > 0) {
                        jqEvent.pageX = jqEvent.originalEvent.touches[0].pageX;
                        jqEvent.pageY = jqEvent.originalEvent.touches[0].pageY;
                    }
                }
            }
        }
        return jqEvent;
    };

    /** Converts an enum flags value into a semi-colon delimited string representation. */
    TSUI.getFlagsString = function (enumType, status) {
        var statuses = "";
        if (status == 0) {
            statuses = enumType[status];
        } else {
            for (var i = 1; ; i *= 2) {
                if (!enumType[i]) {
                    break;
                } else {
                    if ((status & i) > 0) {
                        statuses += enumType[i] + "; ";
                    }
                }
            }
        }

        return statuses;
    };

    /** Pads a string with the field string.
    @param str The string to pad.
    @param field The string to pad with (i.e. the default field value)
    @returns The padded string.
    */
    TSUI.pad = function (str, field) {
        var n = '' + str;
        var w = n.length;
        var l = field.length;
        var pad = w < l ? l - w : 0;
        return n + field.substr(0, pad);
    };

    Function.prototype.trace = function () {
        var trace = [];
        var current = this;
        while (current) {
            trace.push(current.signature());
            current = current.caller;
        }
        return trace;
    };
    Function.prototype.signature = function () {
        var signature = {
            name: this.getName(),
            params: [],
            toString: function () {
                var params = this.params.length > 0 ? "'" + this.params.join("', '") + "'" : "";
                return this.name + "(" + params + ")";
            }
        };
        if (this.arguments) {
            for (var x = 0; x < this.arguments.length; x++)
                signature.params.push(this.arguments[x]);
        }
        return signature;
    };
    Function.prototype.getName = function () {
        if (this.name)
            return this.name;
        var definition = this.toString().split("\n")[0];
        var exp = /^function ([^\s(]+).+/;
        if (exp.test(definition))
            return definition.split("\n")[0].replace(exp, "$1") || "anonymous";
        return "anonymous";
    };
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Exceptions/Classes/Exception.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IException.d.ts" />
    (function (Exceptions) {
        /** A generic exception implementation. All exception implementations should derive from this. */
        var Exception = (function () {
            /** Creates a new Exception instance with specified information.
            @param Message The message to describe the exception.
            @param Trace The origin of the exception
            @param InnerException The inner exception which lead to this exception, if any.
            Note: Also automatically logs the exception in the browser log.
            */
            function Exception(Message, Trace, InnerException) {
                if (typeof Message === "undefined") { Message = ""; }
                if (typeof Trace === "undefined") { Trace = ""; }
                if (typeof InnerException === "undefined") { InnerException = null; }
                this.Message = Message;
                this.Trace = Trace;
                this.InnerException = InnerException;
                console.log(this.toString());
            }
            /** Converts the exception to a human-readable string representation. */
            Exception.prototype.toString = function () {
                return typeof (this) + ": " + this.Message + "\n" + this.Trace + (this.InnerException === null ? "" : "\nInner exception:\n" + this.InnerException.toString());
            };
            return Exception;
        })();
        Exceptions.Exception = Exception;
    })(TSUI.Exceptions || (TSUI.Exceptions = {}));
    var Exceptions = TSUI.Exceptions;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Exceptions/Classes/ArgumentException.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="Exception.ts" />
    (function (Exceptions) {
        /** An argument exception. Automatically adds descriptive information in the constructor. */
        var ArgumentException = (function (_super) {
            __extends(ArgumentException, _super);
            /** Creates a new ArgumentException instance with specified information. Automatically adds descriptive information about this particular
            type of exception.
            @param ArgumentName The name of the invalid argument.
            @param Trace The origin of the exception
            @param InnerException The inner exception which lead to this exception, if any.
            Note: Also automatically logs the exception in the browser log.
            */
            function ArgumentException(ArgumentName, Trace, InnerException) {
                if (typeof ArgumentName === "undefined") { ArgumentName = ""; }
                if (typeof Trace === "undefined") { Trace = ""; }
                if (typeof InnerException === "undefined") { InnerException = null; }
                _super.call(this, "Invalid argument! Name: " + ArgumentName, Trace, InnerException);
                this.ArgumentName = ArgumentName;
                this.Trace = Trace;
                this.InnerException = InnerException;
            }
            return ArgumentException;
        })(Exceptions.Exception);
        Exceptions.ArgumentException = ArgumentException;
    })(TSUI.Exceptions || (TSUI.Exceptions = {}));
    var Exceptions = TSUI.Exceptions;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Exceptions/Classes/IncorrectTypeException.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="Exception.ts" />
    (function (Exceptions) {
        /** An incorrect type exception. Automatically adds descriptive information in the constructor. */
        var IncorrectTypeException = (function (_super) {
            __extends(IncorrectTypeException, _super);
            /** Creates a new ArgumentException instance with specified information. Automatically adds descriptive information about this particular
            type of exception.
            @param GivenType The name of the type which was given.
            @param ExpectedType The name of the type which was expected.
            @param Trace The origin of the exception
            @param InnerException The inner exception which lead to this exception, if any.
            Note: Also automatically logs the exception in the browser log.
            */
            function IncorrectTypeException(GivenType, ExpectedType, Trace, InnerException) {
                if (typeof GivenType === "undefined") { GivenType = ""; }
                if (typeof ExpectedType === "undefined") { ExpectedType = ""; }
                if (typeof Trace === "undefined") { Trace = ""; }
                if (typeof InnerException === "undefined") { InnerException = null; }
                _super.call(this, "Incorrect type! Expected type " + ExpectedType + " got " + GivenType, Trace, InnerException);
                this.GivenType = GivenType;
                this.ExpectedType = ExpectedType;
                this.Trace = Trace;
                this.InnerException = InnerException;
            }
            return IncorrectTypeException;
        })(Exceptions.Exception);
        Exceptions.IncorrectTypeException = IncorrectTypeException;
    })(TSUI.Exceptions || (TSUI.Exceptions = {}));
    var Exceptions = TSUI.Exceptions;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Collections/Classes/ToStringComparer.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IComparer.d.ts" />
    (function (Collections) {
        /** A comparer which compares the results of calling ToString on the specified objects.*/
        var ToStringComparer = (function () {
            function ToStringComparer() {
            }
            /** Compares two objects by comparing the result of calling ToString on them.
            @param x The first object to be compared
            @param y The second object to be compared
            @returns the result of the comparison. -1 if x < y; 0 if x === y; 1 if x > y;
            */
            ToStringComparer.prototype.Compare = function (x, y) {
                return x.toString().localCompare(y.toString());
            };
            return ToStringComparer;
        })();
        Collections.ToStringComparer = ToStringComparer;
    })(TSUI.Collections || (TSUI.Collections = {}));
    var Collections = TSUI.Collections;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Collections/Classes/List.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="ToStringComparer.ts" />
    /// <reference path="../../Exceptions/Exceptions_BuildRefs.d.ts" />
    /// <reference path="../../Utils.ts" />
    /// <reference path="../Interfaces/IList.d.ts" />
    (function (Collections) {
        /** A generic IList implementation. */
        var List = (function () {
            /** Creates a new list.
            @param obj OPTIONAL Either: null; a number indicating size of the array to create or an existing array to clone and use as the basis for the new list.
            */
            function List(obj) {
                if (typeof obj === "undefined") { obj = null; }
                /** The underlying array of items. */
                this.items = [];
                /** Fired when the collection is modified i.e. added to, removed from or re-ordered*/
                this.OnModified = new TSUI.Events.CollectionModifiedEvent();
                if (obj !== null) {
                    if (TSUI.isNumber(obj)) {
                        this.items = new Array(obj);
                    } else if (TSUI.isArray(obj)) {
                        this.items = obj.slice(0);
                    } else {
                        throw new TSUI.Exceptions.ArgumentException("obj", "TSUI.Components.List:constructor", new TSUI.Exceptions.IncorrectTypeException(typeof (obj), "number or array", "TSUI.Components.List:constructor"));
                    }
                } else {
                    this.items = [];
                }
            }
            /** Adds the specified object to the end of the list.
            @param object The object to be added to the list.
            */
            List.prototype.Add = function (object) {
                this.items.push(object);
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Add, new List([object])));
            };

            /** Adds the specified list of objects to the end of the list.
            @param objects The list of objects to be added.
            */
            List.prototype.AddRange = function (objects) {
                this.items.push(objects.ToArray());
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Add, objects));
            };

            /** Clears the list of all objects. */
            List.prototype.Clear = function () {
                var _thisClone = this.Clone();
                this.items = [];
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Remove, _thisClone));
            };

            /** Creates a shallow clone of the list. Note: Reference-type objects are not deep cloned.
            @returns the new (clone) list.
            */
            List.prototype.Clone = function () {
                return new List(this.items.slice(0));
            };

            /** Concatenates two lists. Does not modify either original list.
            @param other The list to be concatenated with.
            @returns a list containing this list followed by the other list.
            */
            List.prototype.Concat = function (other) {
                var NewList = new List(this.Count() + other.Count());
                NewList.AddRange(this);
                NewList.AddRange(other);
                return NewList;
            };

            /** Determins whether the object is contained within the list.
            @param object The object to be searched for.
            @returns true if the object is contained within the list, otherwise false.
            */
            List.prototype.Contains = function (object) {
                return this.IndexOf(object) > -1;
            };

            /** Copies the specified number of items into another list, starting at the specified index.
            @param dest The list to be copied into.
            @param offset OPTIONAL The index at which to start copying. If unspecified, starts from index 0.
            @param count OPTIONAL The number of items to be copied. If unspecified, uses full length of list.
            */
            List.prototype.CopyTo = function (dest, offset, count) {
                if (typeof offset === "undefined") { offset = 0; }
                if (typeof count === "undefined") { count = this.Count(); }
                dest.AddRange(this.Range(offset, count));
            };

            /** @returns the number of items in the list (the length) */
            List.prototype.Count = function () {
                return this.items.length;
            };

            /** @returns the element at the specified index or null if out of range.
            @param index The index of the element to get.
            */
            List.prototype.ElementAt = function (index) {
                if (index > -1 && index < this.Count()) {
                    return this.items[index];
                }
                return null;
            };

            /** @returns whether this list is equal to the specified object.
            @param object The object to test for equality.
            */
            List.prototype.Equals = function (object) {
                return this === object;
            };

            /** @returns the index of the specified object or -1 if not found.
            @param object The object to be searched for.
            */
            List.prototype.IndexOf = function (object) {
                return this.items.indexOf(object);
            };

            /** Inserts the specified object into the list at the specified index.
            @param object The object to be inserted.
            @param index The index at which to insert the object.
            */
            List.prototype.Insert = function (object, index) {
                this.items.splice(index, 0, object);
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Add, new List([object])));
            };

            /** Inserts a list of objects at the specified index - expands the list at that index. Does not overwrite existing items.
            @param objects The list of objects to be inserted.
            @param index The index at which to start inserting.
            */
            List.prototype.InsertRange = function (objects, index) {
                this.items.splice(index, 0, []);
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Add, new List(objects)));
            };

            /** @returns a list containing the specified range of objects from the list.
            @param index The index to start the range.
            @param count OPTIONAL The number of items to take. If unspecified, takes from index to the end of the list.
            */
            List.prototype.Range = function (index, count) {
                if (typeof count === "undefined") { count = this.Count() - index; }
                var max = Math.min(index + count, this.Count());
                return new List(this.items.slice(index, max));
            };

            /** Removes the specified object from the list.
            @param object The object to be removed.
            @param event Specifies whether to fire the OnModified event or not. Default: true.
            */
            List.prototype.Remove = function (object, event) {
                if (typeof event === "undefined") { event = true; }
                var index = this.IndexOf(object);
                if (index > -1) {
                    this.items.splice(index, 1);
                    if (event) {
                        this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Remove, new List([object])));
                    }
                }
            };

            /** Removes the specified list of objects from the list. Only fires one modified event.
            @param objects The list of objects to be removed.
            */
            List.prototype.RemoveAll = function (objects) {
                for (var i = 0; i < objects.Count(); i++) {
                    this.Remove(objects.ElementAt(i), false);
                }
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Remove, objects));
            };

            /** Removes the element at the specified index.
            @param index The index of the object to be removed.
            @returns the object which has been removed.
            */
            List.prototype.RemoveAt = function (index) {
                var x = this.items.splice(index, 1)[0];
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Remove, new List([x])));
                return x;
            };

            /** Removes the specified range of objects from the list.
            @param index The index at which to start removing.
            @param count The number of objects to remove.
            @returns a list containing the removed objects.
            */
            List.prototype.RemoveRange = function (index, count) {
                count = Math.min(count, this.Count());
                var ReturnList = new List(this.items.splice(index, count));
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Remove, ReturnList));
                return ReturnList;
            };

            /** Reverses the list of objects. */
            List.prototype.Reverse = function () {
                this.items = this.items.reverse();
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Reorder, this));
            };

            /** Sorts the list of objects using a ToStringComparer or the specified comparer.
            @param comparer OPTIONAL The comparer to use while sorting.
            */
            List.prototype.Sort = function (comparer) {
                if (typeof comparer === "undefined") { comparer = new Collections.ToStringComparer(); }
                this.items = this.items.sort(comparer.Compare);
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Reorder, this));
            };

            /** Converts the list to a basic array.
            @returns a clone of the underlying array.
            */
            List.prototype.ToArray = function () {
                return this.items.slice(0);
            };
            return List;
        })();
        Collections.List = List;
    })(TSUI.Collections || (TSUI.Collections = {}));
    var Collections = TSUI.Collections;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Events/Classes/Event.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        /** Fundamental implementation of an Event. All Events should inherit from this class.
        Note: See ClickEvent for sample derived class.
        Note: See List for sample usage.
        */
        var Event = (function () {
            function Event() {
                /** Private property - do not use externally. Should be overridden in derived classes simply to set the correct EventHandler type. */
                this.Handlers = [];
                /** Called when a new event handler is attached - can only be set to one method - if overriding, ensure full implementation as seen in this class. */
                this.OnHandlerAttached = null;
                /** The context object to use when calling OnHandlerAttached (sets the value of "this" in the called function). */
                this.OnHandlerAttachedContext = null;
                /** Called when a new event handler is attached - can only be set to one method - if overriding, ensure full implementation as seen in this class. */
                this.OnHandlerDettached = null;
                /** The context object to use when calling OnHandlerDettached (sets the value of "this" in the called function). */
                this.OnHandlerDettachedContext = null;
            }
            /** Attaches a an event handler to this event to be called when the event is fired.
            @param handler The event handler to attach.
            Note: An event handler can be attached to more than one event.
            Note: Should be overridden in derived classes to more specifically type handler argument.
            */
            Event.prototype.Attach = function (handler) {
                if (!this.IsAttached(handler)) {
                    this.Handlers.push(handler);
                    if (this.OnHandlerAttached !== null) {
                        this.OnHandlerAttached.call(this.OnHandlerAttachedContext);
                    }
                }
            };

            /** Detaches a an event handler from this event. Does nothing if the event handler has not already been attached.
            @param handler The event handler to detach.
            Note: Should be overridden in derived classes to more specifically type handler argument.
            */
            Event.prototype.Detach = function (handler) {
                if (this.IsAttached(handler)) {
                    this.Handlers.splice(this.Handlers.indexOf(handler), 1);
                    if (this.OnHandlerDettached !== null) {
                        this.OnHandlerDettached.call(this.OnHandlerDettachedContext);
                    }
                }
            };

            /** @returns whether the specified event handler is attached to this event or not.
            @param handler The event handler to check.
            Note: Should be overridden in derived classes to more specifically type handler argument.
            */
            Event.prototype.IsAttached = function (handler) {
                return this.Handlers.indexOf(handler) > -1;
            };

            /** Invokes (fires) this event with the given event args. Synchronously calls Invoke on each EventHandler in order of attachment, first-to-last.
            Note: Should be overridden in derived classes to more specifically type args argument.
            */
            Event.prototype.Invoke = function (args) {
                for (var i = 0; i < this.Handlers.length; i++) {
                    this.Handlers[i].Invoke(args);
                }
            };
            return Event;
        })();
        Events.Event = Event;

        /** Fundamental implementation of an EventHandler. All EventHandlers should inherit from this class.
        Note: An event handler can be attached to multiple events (provided it is unaffected by being attached to that event e.g. not destroyed after one event fires).
        Note: See ClickEventHandler for sample derived class.
        */
        var EventHandler = (function () {
            /** Creates a new EventHandler.
            @param Callback The function to call when the event handler is invoked.
            @param Context The context to use when calling the Callback function (sets the value of "this" in the callback function).
            Note: Should be overridden in derived classes to more specifically type 'args' argument of Callback.
            */
            function EventHandler(Callback, Context) {
                this.Callback = Callback;
                this.Context = Context;
            }
            /** Invokes the event handler's callback with correct context and passes in the arguments.
            Note: Should be overridden in derived classes to more specifically type eventArgs argument.
            */
            EventHandler.prototype.Invoke = function (args) {
                this.Callback.call(this.Context, args);
            };
            return EventHandler;
        })();
        Events.EventHandler = EventHandler;

        /** Fundamental implementation of an EventArgs. All EventArgs should inherit from this class.
        Note: See ClickEventArgs for sample derived class.
        Note: See List for sample usage.
        */
        var EventArgs = (function () {
            /** Creates new EventArgs.
            @param Sender The object which caused this event (or which is passing on an underlying event).
            Note: Should be overridden in derived classes to add extra properties to the event and more specifically type Sender property.
            */
            function EventArgs(Sender) {
                this.Sender = Sender;
            }
            return EventArgs;
        })();
        Events.EventArgs = EventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Events/Classes/Events.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /// <reference path="../../Data/Interfaces/IDataAccessResult.d.ts" />
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Data/Enums/DataAccessStatuses.ts" />
    /// <reference path="../../Data/Interfaces/IDataAccessor.d.ts" />
    /// <reference path="../../../Definitions/jquery_all.d.ts" />
    /// <reference path="../../UI/Interfaces/IListItem.d.ts" />
    /// <reference path="../../UI/Interfaces/IControl.d.ts" />
    /// <reference path="Event.ts" />
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        /* This file contains all event classes (including Events, Event Handlers and Event Args
        except for those which must be put into separate files to prevent reference loops
        (see CollectionModifiedEventArgs.d.ts). See Event interface more info on how events
        are programmed.
        */
        //#region Click Event
        /** See Event for more details. */
        var ClickEvent = (function (_super) {
            __extends(ClickEvent, _super);
            function ClickEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            ClickEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            ClickEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            ClickEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            ClickEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ClickEvent;
        })(Events.Event);
        Events.ClickEvent = ClickEvent;

        /** See EventHandler for more details. */
        var ClickEventHandler = (function (_super) {
            __extends(ClickEventHandler, _super);
            function ClickEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            ClickEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ClickEventHandler;
        })(Events.EventHandler);
        Events.ClickEventHandler = ClickEventHandler;

        /** See EventArgs for more details. */
        var ClickEventArgs = (function (_super) {
            __extends(ClickEventArgs, _super);
            function ClickEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return ClickEventArgs;
        })(Events.EventArgs);
        Events.ClickEventArgs = ClickEventArgs;

        //#endregion
        //#region Mouse Down Event
        /** See Event for more details. */
        var MouseDownEvent = (function (_super) {
            __extends(MouseDownEvent, _super);
            function MouseDownEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            MouseDownEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            MouseDownEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            MouseDownEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            MouseDownEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MouseDownEvent;
        })(Events.Event);
        Events.MouseDownEvent = MouseDownEvent;

        /** See EventHandler for more details. */
        var MouseDownEventHandler = (function (_super) {
            __extends(MouseDownEventHandler, _super);
            function MouseDownEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            MouseDownEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MouseDownEventHandler;
        })(Events.EventHandler);
        Events.MouseDownEventHandler = MouseDownEventHandler;

        /** See EventArgs for more details. */
        var MouseDownEventArgs = (function (_super) {
            __extends(MouseDownEventArgs, _super);
            function MouseDownEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return MouseDownEventArgs;
        })(Events.EventArgs);
        Events.MouseDownEventArgs = MouseDownEventArgs;

        //#endregion
        //#region Mouse Up Event
        /** See Event for more details. */
        var MouseUpEvent = (function (_super) {
            __extends(MouseUpEvent, _super);
            function MouseUpEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            MouseUpEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            MouseUpEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            MouseUpEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            MouseUpEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MouseUpEvent;
        })(Events.Event);
        Events.MouseUpEvent = MouseUpEvent;

        /** See EventHandler for more details. */
        var MouseUpEventHandler = (function (_super) {
            __extends(MouseUpEventHandler, _super);
            function MouseUpEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            MouseUpEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MouseUpEventHandler;
        })(Events.EventHandler);
        Events.MouseUpEventHandler = MouseUpEventHandler;

        /** See EventArgs for more details. */
        var MouseUpEventArgs = (function (_super) {
            __extends(MouseUpEventArgs, _super);
            function MouseUpEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return MouseUpEventArgs;
        })(Events.EventArgs);
        Events.MouseUpEventArgs = MouseUpEventArgs;

        //#endregion
        //#region Mouse Move Event
        /** See Event for more details. */
        var MouseMoveEvent = (function (_super) {
            __extends(MouseMoveEvent, _super);
            function MouseMoveEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            MouseMoveEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            MouseMoveEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            MouseMoveEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            MouseMoveEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MouseMoveEvent;
        })(Events.Event);
        Events.MouseMoveEvent = MouseMoveEvent;

        /** See EventHandler for more details. */
        var MouseMoveEventHandler = (function (_super) {
            __extends(MouseMoveEventHandler, _super);
            function MouseMoveEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            MouseMoveEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MouseMoveEventHandler;
        })(Events.EventHandler);
        Events.MouseMoveEventHandler = MouseMoveEventHandler;

        /** See EventArgs for more details. */
        var MouseMoveEventArgs = (function (_super) {
            __extends(MouseMoveEventArgs, _super);
            function MouseMoveEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return MouseMoveEventArgs;
        })(Events.EventArgs);
        Events.MouseMoveEventArgs = MouseMoveEventArgs;

        //#endregion
        //#region Splitter Move Event
        /** See Event for more details. */
        var SplitterMoveEvent = (function (_super) {
            __extends(SplitterMoveEvent, _super);
            function SplitterMoveEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            SplitterMoveEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            SplitterMoveEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            SplitterMoveEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            SplitterMoveEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return SplitterMoveEvent;
        })(Events.Event);
        Events.SplitterMoveEvent = SplitterMoveEvent;

        /** See EventHandler for more details. */
        var SplitterMoveEventHandler = (function (_super) {
            __extends(SplitterMoveEventHandler, _super);
            function SplitterMoveEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            SplitterMoveEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return SplitterMoveEventHandler;
        })(Events.EventHandler);
        Events.SplitterMoveEventHandler = SplitterMoveEventHandler;

        /** See EventArgs for more details. */
        var SplitterMoveEventArgs = (function (_super) {
            __extends(SplitterMoveEventArgs, _super);
            function SplitterMoveEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return SplitterMoveEventArgs;
        })(Events.EventArgs);
        Events.SplitterMoveEventArgs = SplitterMoveEventArgs;

        //#endregion
        //#region Splitter Orientation Changed Event
        /** See Event for more details. */
        var OrientationChangedEvent = (function (_super) {
            __extends(OrientationChangedEvent, _super);
            function OrientationChangedEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            OrientationChangedEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            OrientationChangedEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            OrientationChangedEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            OrientationChangedEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return OrientationChangedEvent;
        })(Events.Event);
        Events.OrientationChangedEvent = OrientationChangedEvent;

        /** See EventHandler for more details. */
        var OrientationChangedEventHandler = (function (_super) {
            __extends(OrientationChangedEventHandler, _super);
            function OrientationChangedEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            OrientationChangedEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return OrientationChangedEventHandler;
        })(Events.EventHandler);
        Events.OrientationChangedEventHandler = OrientationChangedEventHandler;

        /** See EventArgs for more details. */
        var OrientationChangedEventArgs = (function (_super) {
            __extends(OrientationChangedEventArgs, _super);
            function OrientationChangedEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return OrientationChangedEventArgs;
        })(Events.EventArgs);
        Events.OrientationChangedEventArgs = OrientationChangedEventArgs;

        //#endregion
        //#region Resize Event
        /** See Event for more details. */
        var ResizeEvent = (function (_super) {
            __extends(ResizeEvent, _super);
            function ResizeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            ResizeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            ResizeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            ResizeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            ResizeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ResizeEvent;
        })(Events.Event);
        Events.ResizeEvent = ResizeEvent;

        /** See EventHandler for more details. */
        var ResizeEventHandler = (function (_super) {
            __extends(ResizeEventHandler, _super);
            function ResizeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            ResizeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ResizeEventHandler;
        })(Events.EventHandler);
        Events.ResizeEventHandler = ResizeEventHandler;

        /** See EventArgs for more details. */
        var ResizeEventArgs = (function (_super) {
            __extends(ResizeEventArgs, _super);
            function ResizeEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return ResizeEventArgs;
        })(Events.EventArgs);
        Events.ResizeEventArgs = ResizeEventArgs;

        //#endregion
        //#region Move Event
        /** See Event for more details. */
        var MoveEvent = (function (_super) {
            __extends(MoveEvent, _super);
            function MoveEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            MoveEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            MoveEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            MoveEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            MoveEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MoveEvent;
        })(Events.Event);
        Events.MoveEvent = MoveEvent;

        /** See EventHandler for more details. */
        var MoveEventHandler = (function (_super) {
            __extends(MoveEventHandler, _super);
            function MoveEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            MoveEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MoveEventHandler;
        })(Events.EventHandler);
        Events.MoveEventHandler = MoveEventHandler;

        /** See EventArgs for more details. */
        var MoveEventArgs = (function (_super) {
            __extends(MoveEventArgs, _super);
            function MoveEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return MoveEventArgs;
        })(Events.EventArgs);
        Events.MoveEventArgs = MoveEventArgs;

        //#endregion
        //#region Checked Change Event
        /** See Event for more details. */
        var CheckedChangeEvent = (function (_super) {
            __extends(CheckedChangeEvent, _super);
            function CheckedChangeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            CheckedChangeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            CheckedChangeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            CheckedChangeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            CheckedChangeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return CheckedChangeEvent;
        })(Events.Event);
        Events.CheckedChangeEvent = CheckedChangeEvent;

        /** See EventHandler for more details. */
        var CheckedChangeEventHandler = (function (_super) {
            __extends(CheckedChangeEventHandler, _super);
            function CheckedChangeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            CheckedChangeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return CheckedChangeEventHandler;
        })(Events.EventHandler);
        Events.CheckedChangeEventHandler = CheckedChangeEventHandler;

        /** See EventArgs for more details. */
        var CheckedChangeEventArgs = (function (_super) {
            __extends(CheckedChangeEventArgs, _super);
            function CheckedChangeEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return CheckedChangeEventArgs;
        })(Events.EventArgs);
        Events.CheckedChangeEventArgs = CheckedChangeEventArgs;

        //#endregion
        //#region Text Change Event
        /** See Event for more details. */
        var TextChangeEvent = (function (_super) {
            __extends(TextChangeEvent, _super);
            function TextChangeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            TextChangeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            TextChangeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            TextChangeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            TextChangeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return TextChangeEvent;
        })(Events.Event);
        Events.TextChangeEvent = TextChangeEvent;

        /** See EventHandler for more details. */
        var TextChangeEventHandler = (function (_super) {
            __extends(TextChangeEventHandler, _super);
            function TextChangeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            TextChangeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return TextChangeEventHandler;
        })(Events.EventHandler);
        Events.TextChangeEventHandler = TextChangeEventHandler;

        /** See EventArgs for more details. */
        var TextChangeEventArgs = (function (_super) {
            __extends(TextChangeEventArgs, _super);
            function TextChangeEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return TextChangeEventArgs;
        })(Events.EventArgs);
        Events.TextChangeEventArgs = TextChangeEventArgs;

        //#endregion
        //#region Close Event
        /** See Event for more details. */
        var CloseEvent = (function (_super) {
            __extends(CloseEvent, _super);
            function CloseEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            CloseEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            CloseEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            CloseEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            CloseEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return CloseEvent;
        })(Events.Event);
        Events.CloseEvent = CloseEvent;

        /** See EventHandler for more details. */
        var CloseEventHandler = (function (_super) {
            __extends(CloseEventHandler, _super);
            function CloseEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            CloseEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return CloseEventHandler;
        })(Events.EventHandler);
        Events.CloseEventHandler = CloseEventHandler;

        /** See EventArgs for more details. */
        var CloseEventArgs = (function (_super) {
            __extends(CloseEventArgs, _super);
            function CloseEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return CloseEventArgs;
        })(Events.EventArgs);
        Events.CloseEventArgs = CloseEventArgs;

        //#endregion
        //#region Show Event
        /** See Event for more details. */
        var ShowEvent = (function (_super) {
            __extends(ShowEvent, _super);
            function ShowEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            ShowEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            ShowEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            ShowEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            ShowEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ShowEvent;
        })(Events.Event);
        Events.ShowEvent = ShowEvent;

        /** See EventHandler for more details. */
        var ShowEventHandler = (function (_super) {
            __extends(ShowEventHandler, _super);
            function ShowEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            ShowEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ShowEventHandler;
        })(Events.EventHandler);
        Events.ShowEventHandler = ShowEventHandler;

        /** See EventArgs for more details. */
        var ShowEventArgs = (function (_super) {
            __extends(ShowEventArgs, _super);
            function ShowEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return ShowEventArgs;
        })(Events.EventArgs);
        Events.ShowEventArgs = ShowEventArgs;

        //#endregion
        //#region Hide Event
        /** See Event for more details. */
        var HideEvent = (function (_super) {
            __extends(HideEvent, _super);
            function HideEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            HideEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            HideEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            HideEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            HideEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return HideEvent;
        })(Events.Event);
        Events.HideEvent = HideEvent;

        /** See EventHandler for more details. */
        var HideEventHandler = (function (_super) {
            __extends(HideEventHandler, _super);
            function HideEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            HideEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return HideEventHandler;
        })(Events.EventHandler);
        Events.HideEventHandler = HideEventHandler;

        /** See EventArgs for more details. */
        var HideEventArgs = (function (_super) {
            __extends(HideEventArgs, _super);
            function HideEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return HideEventArgs;
        })(Events.EventArgs);
        Events.HideEventArgs = HideEventArgs;

        //#endregion
        //#region Focus Event
        /** See Event for more details. */
        var FocusEvent = (function (_super) {
            __extends(FocusEvent, _super);
            function FocusEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            FocusEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            FocusEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            FocusEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            FocusEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return FocusEvent;
        })(Events.Event);
        Events.FocusEvent = FocusEvent;

        /** See EventHandler for more details. */
        var FocusEventHandler = (function (_super) {
            __extends(FocusEventHandler, _super);
            function FocusEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            FocusEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return FocusEventHandler;
        })(Events.EventHandler);
        Events.FocusEventHandler = FocusEventHandler;

        /** See EventArgs for more details.
        Note: jqEvent is optional property. Default value: null.
        */
        var FocusEventArgs = (function (_super) {
            __extends(FocusEventArgs, _super);
            function FocusEventArgs(Sender, jqEvent) {
                if (typeof jqEvent === "undefined") { jqEvent = null; }
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return FocusEventArgs;
        })(Events.EventArgs);
        Events.FocusEventArgs = FocusEventArgs;

        //#endregion
        //#region Blur Event
        /** See Event for more details. */
        var BlurEvent = (function (_super) {
            __extends(BlurEvent, _super);
            function BlurEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            BlurEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            BlurEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            BlurEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            BlurEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return BlurEvent;
        })(Events.Event);
        Events.BlurEvent = BlurEvent;

        /** See EventHandler for more details. */
        var BlurEventHandler = (function (_super) {
            __extends(BlurEventHandler, _super);
            function BlurEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            BlurEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return BlurEventHandler;
        })(Events.EventHandler);
        Events.BlurEventHandler = BlurEventHandler;

        /** See EventArgs for more details.
        Note: jqEvent is optional property. Default value: null.
        */
        var BlurEventArgs = (function (_super) {
            __extends(BlurEventArgs, _super);
            function BlurEventArgs(Sender, jqEvent) {
                if (typeof jqEvent === "undefined") { jqEvent = null; }
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return BlurEventArgs;
        })(Events.EventArgs);
        Events.BlurEventArgs = BlurEventArgs;

        //#endregion
        //#region Key Down Event
        /** See Event for more details. */
        var KeyDownEvent = (function (_super) {
            __extends(KeyDownEvent, _super);
            function KeyDownEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            KeyDownEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            KeyDownEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            KeyDownEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            KeyDownEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return KeyDownEvent;
        })(Events.Event);
        Events.KeyDownEvent = KeyDownEvent;

        /** See EventHandler for more details. */
        var KeyDownEventHandler = (function (_super) {
            __extends(KeyDownEventHandler, _super);
            function KeyDownEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            KeyDownEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return KeyDownEventHandler;
        })(Events.EventHandler);
        Events.KeyDownEventHandler = KeyDownEventHandler;

        /** See EventArgs for more details.
        Note: jqEvent is optional property. Default value: null.
        */
        var KeyDownEventArgs = (function (_super) {
            __extends(KeyDownEventArgs, _super);
            function KeyDownEventArgs(Sender, jqEvent) {
                if (typeof jqEvent === "undefined") { jqEvent = null; }
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return KeyDownEventArgs;
        })(Events.EventArgs);
        Events.KeyDownEventArgs = KeyDownEventArgs;

        //#endregion
        //#region Key Press Event
        /** See Event for more details. */
        var KeyPressEvent = (function (_super) {
            __extends(KeyPressEvent, _super);
            function KeyPressEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            KeyPressEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            KeyPressEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            KeyPressEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            KeyPressEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return KeyPressEvent;
        })(Events.Event);
        Events.KeyPressEvent = KeyPressEvent;

        /** See EventHandler for more details. */
        var KeyPressEventHandler = (function (_super) {
            __extends(KeyPressEventHandler, _super);
            function KeyPressEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            KeyPressEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return KeyPressEventHandler;
        })(Events.EventHandler);
        Events.KeyPressEventHandler = KeyPressEventHandler;

        /** See EventArgs for more details.
        Note: jqEvent is optional property. Default value: null.
        */
        var KeyPressEventArgs = (function (_super) {
            __extends(KeyPressEventArgs, _super);
            function KeyPressEventArgs(Sender, jqEvent) {
                if (typeof jqEvent === "undefined") { jqEvent = null; }
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return KeyPressEventArgs;
        })(Events.EventArgs);
        Events.KeyPressEventArgs = KeyPressEventArgs;

        //#endregion
        //#region Key Up Event
        /** See Event for more details. */
        var KeyUpEvent = (function (_super) {
            __extends(KeyUpEvent, _super);
            function KeyUpEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            KeyUpEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            KeyUpEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            KeyUpEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            KeyUpEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return KeyUpEvent;
        })(Events.Event);
        Events.KeyUpEvent = KeyUpEvent;

        /** See EventHandler for more details. */
        var KeyUpEventHandler = (function (_super) {
            __extends(KeyUpEventHandler, _super);
            function KeyUpEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            KeyUpEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return KeyUpEventHandler;
        })(Events.EventHandler);
        Events.KeyUpEventHandler = KeyUpEventHandler;

        /** See EventArgs for more details.
        Note: jqEvent is optional property. Default value: null.
        */
        var KeyUpEventArgs = (function (_super) {
            __extends(KeyUpEventArgs, _super);
            function KeyUpEventArgs(Sender, jqEvent) {
                if (typeof jqEvent === "undefined") { jqEvent = null; }
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return KeyUpEventArgs;
        })(Events.EventArgs);
        Events.KeyUpEventArgs = KeyUpEventArgs;

        //#endregion
        //#region ListItem Text Change Event
        /** See Event for more details. */
        var ListItem_TextChangeEvent = (function (_super) {
            __extends(ListItem_TextChangeEvent, _super);
            function ListItem_TextChangeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            ListItem_TextChangeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            ListItem_TextChangeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            ListItem_TextChangeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            ListItem_TextChangeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ListItem_TextChangeEvent;
        })(Events.Event);
        Events.ListItem_TextChangeEvent = ListItem_TextChangeEvent;

        /** See EventHandler for more details. */
        var ListItem_TextChangeEventHandler = (function (_super) {
            __extends(ListItem_TextChangeEventHandler, _super);
            function ListItem_TextChangeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            ListItem_TextChangeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ListItem_TextChangeEventHandler;
        })(Events.EventHandler);
        Events.ListItem_TextChangeEventHandler = ListItem_TextChangeEventHandler;

        /** See EventArgs for more details. */
        var ListItem_TextChangeEventArgs = (function (_super) {
            __extends(ListItem_TextChangeEventArgs, _super);
            function ListItem_TextChangeEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return ListItem_TextChangeEventArgs;
        })(Events.EventArgs);
        Events.ListItem_TextChangeEventArgs = ListItem_TextChangeEventArgs;

        //#endregion
        //#region Selected Index Change Event
        /** See Event for more details. */
        var SelectedIndexChangeEvent = (function (_super) {
            __extends(SelectedIndexChangeEvent, _super);
            function SelectedIndexChangeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            SelectedIndexChangeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            SelectedIndexChangeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            SelectedIndexChangeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            SelectedIndexChangeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return SelectedIndexChangeEvent;
        })(Events.Event);
        Events.SelectedIndexChangeEvent = SelectedIndexChangeEvent;

        /** See EventHandler for more details. */
        var SelectedIndexChangeEventHandler = (function (_super) {
            __extends(SelectedIndexChangeEventHandler, _super);
            function SelectedIndexChangeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            SelectedIndexChangeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return SelectedIndexChangeEventHandler;
        })(Events.EventHandler);
        Events.SelectedIndexChangeEventHandler = SelectedIndexChangeEventHandler;

        /** See EventArgs for more details. */
        var SelectedIndexChangeEventArgs = (function (_super) {
            __extends(SelectedIndexChangeEventArgs, _super);
            function SelectedIndexChangeEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return SelectedIndexChangeEventArgs;
        })(Events.EventArgs);
        Events.SelectedIndexChangeEventArgs = SelectedIndexChangeEventArgs;

        //#endregion
        //#region Value Change Event
        /** See Event for more details. */
        var ValueChangeEvent = (function (_super) {
            __extends(ValueChangeEvent, _super);
            function ValueChangeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            ValueChangeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            ValueChangeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            ValueChangeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            ValueChangeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ValueChangeEvent;
        })(Events.Event);
        Events.ValueChangeEvent = ValueChangeEvent;

        /** See EventHandler for more details. */
        var ValueChangeEventHandler = (function (_super) {
            __extends(ValueChangeEventHandler, _super);
            function ValueChangeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            ValueChangeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ValueChangeEventHandler;
        })(Events.EventHandler);
        Events.ValueChangeEventHandler = ValueChangeEventHandler;

        /** See EventArgs for more details. */
        var ValueChangeEventArgs = (function (_super) {
            __extends(ValueChangeEventArgs, _super);
            function ValueChangeEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return ValueChangeEventArgs;
        })(Events.EventArgs);
        Events.ValueChangeEventArgs = ValueChangeEventArgs;

        //#endregion
        //#region Name Change Event
        /** See Event for more details. */
        var NameChangeEvent = (function (_super) {
            __extends(NameChangeEvent, _super);
            function NameChangeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            NameChangeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            NameChangeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            NameChangeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            NameChangeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return NameChangeEvent;
        })(Events.Event);
        Events.NameChangeEvent = NameChangeEvent;

        /** See EventHandler for more details. */
        var NameChangeEventHandler = (function (_super) {
            __extends(NameChangeEventHandler, _super);
            function NameChangeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            NameChangeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return NameChangeEventHandler;
        })(Events.EventHandler);
        Events.NameChangeEventHandler = NameChangeEventHandler;

        /** See EventArgs for more details. */
        var NameChangeEventArgs = (function (_super) {
            __extends(NameChangeEventArgs, _super);
            function NameChangeEventArgs(Sender, oldName) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.oldName = oldName;
            }
            return NameChangeEventArgs;
        })(Events.EventArgs);
        Events.NameChangeEventArgs = NameChangeEventArgs;

        //#endregion
        //#region Selection Made Event
        /** See Event for more details. */
        var SelectionMadeEvent = (function (_super) {
            __extends(SelectionMadeEvent, _super);
            function SelectionMadeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            SelectionMadeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            SelectionMadeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            SelectionMadeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            SelectionMadeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return SelectionMadeEvent;
        })(Events.Event);
        Events.SelectionMadeEvent = SelectionMadeEvent;

        /** See EventHandler for more details. */
        var SelectionMadeEventHandler = (function (_super) {
            __extends(SelectionMadeEventHandler, _super);
            function SelectionMadeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            SelectionMadeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return SelectionMadeEventHandler;
        })(Events.EventHandler);
        Events.SelectionMadeEventHandler = SelectionMadeEventHandler;

        /** See EventArgs for more details.
        Note: jqEvent is optional property. Default value: null.
        */
        var SelectionMadeEventArgs = (function (_super) {
            __extends(SelectionMadeEventArgs, _super);
            function SelectionMadeEventArgs(Sender, jqEvent) {
                if (typeof jqEvent === "undefined") { jqEvent = null; }
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return SelectionMadeEventArgs;
        })(Events.EventArgs);
        Events.SelectionMadeEventArgs = SelectionMadeEventArgs;

        //#endregion
        //#region Data Pushed Event
        /** See Event for more details. */
        var DataPushedEvent = (function (_super) {
            __extends(DataPushedEvent, _super);
            function DataPushedEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            DataPushedEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            DataPushedEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            DataPushedEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            DataPushedEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return DataPushedEvent;
        })(Events.Event);
        Events.DataPushedEvent = DataPushedEvent;

        /** See EventHandler for more details. */
        var DataPushedEventHandler = (function (_super) {
            __extends(DataPushedEventHandler, _super);
            function DataPushedEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            DataPushedEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return DataPushedEventHandler;
        })(Events.EventHandler);
        Events.DataPushedEventHandler = DataPushedEventHandler;

        /** See EventArgs for more details.
        Note: Success paramter indicates whether the push was successful.
        */
        var DataPushedEventArgs = (function (_super) {
            __extends(DataPushedEventArgs, _super);
            function DataPushedEventArgs(Sender, Result) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.Result = Result;
            }
            return DataPushedEventArgs;
        })(Events.EventArgs);
        Events.DataPushedEventArgs = DataPushedEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Events/Enums/CollectionModifications.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (Events) {
        /** The list of different modifications (changes) which can be made to a list which will cause the Modified event to fire. */
        (function (CollectionModifications) {
            /** Indicates that no change has been made. */
            CollectionModifications[CollectionModifications["None"] = 0] = "None";

            /** Indicates that one or more items have been added to the collection. */
            CollectionModifications[CollectionModifications["Add"] = 1] = "Add";

            /** Indicates that one or more items have been removed from the collection. */
            CollectionModifications[CollectionModifications["Remove"] = 2] = "Remove";

            /** Indicates that two or more items have been re-ordered within the collection. */
            CollectionModifications[CollectionModifications["Reorder"] = 3] = "Reorder";
        })(Events.CollectionModifications || (Events.CollectionModifications = {}));
        var CollectionModifications = Events.CollectionModifications;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Events/Classes/CollectionModifiedEvent.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Enums/CollectionModifications.ts" />
    /// <reference path="../../Collections/Collections_BuildRefs.d.ts" />
    /// <reference path="Event.ts" />
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        /** Event to be fired when a collection (e.g. IList) is modified e.g. added to, removed from, re-ordered.
        Note: This event has been put into a separate class ro prevent reference loops with Collections namespace that result in compiler failures/errors.
        */
        var CollectionModifiedEvent = (function (_super) {
            __extends(CollectionModifiedEvent, _super);
            function CollectionModifiedEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            CollectionModifiedEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            CollectionModifiedEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            CollectionModifiedEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            CollectionModifiedEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return CollectionModifiedEvent;
        })(Events.Event);
        Events.CollectionModifiedEvent = CollectionModifiedEvent;
        var CollectionModifiedEventHandler = (function (_super) {
            __extends(CollectionModifiedEventHandler, _super);
            function CollectionModifiedEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            CollectionModifiedEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return CollectionModifiedEventHandler;
        })(Events.EventHandler);
        Events.CollectionModifiedEventHandler = CollectionModifiedEventHandler;

        var CollectionModifiedEventArgs = (function (_super) {
            __extends(CollectionModifiedEventArgs, _super);
            function CollectionModifiedEventArgs(Sender, Modification, ModifiedElements) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.Modification = Modification;
                this.ModifiedElements = ModifiedElements;
            }
            return CollectionModifiedEventArgs;
        })(Events.EventArgs);
        Events.CollectionModifiedEventArgs = CollectionModifiedEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Events/Classes/DataPulledEvent.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /// <reference path="../../Data/Interfaces/IDataAccessResult.d.ts" />
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Data/Enums/DataAccessStatuses.ts" />
    /// <reference path="../../Data/Interfaces/IDataAccessor.d.ts" />
    /// <reference path="Event.ts" />
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        //#region Data Pulled Event
        /** See Event for more details. */
        var DataPulledEvent = (function (_super) {
            __extends(DataPulledEvent, _super);
            function DataPulledEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            DataPulledEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            DataPulledEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            DataPulledEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            DataPulledEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return DataPulledEvent;
        })(Events.Event);
        Events.DataPulledEvent = DataPulledEvent;

        /** See EventHandler for more details. */
        var DataPulledEventHandler = (function (_super) {
            __extends(DataPulledEventHandler, _super);
            function DataPulledEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            DataPulledEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return DataPulledEventHandler;
        })(Events.EventHandler);
        Events.DataPulledEventHandler = DataPulledEventHandler;

        /** See EventArgs for more details.*/
        var DataPulledEventArgs = (function (_super) {
            __extends(DataPulledEventArgs, _super);
            function DataPulledEventArgs(Sender, Result) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.Result = Result;
            }
            return DataPulledEventArgs;
        })(Events.EventArgs);
        Events.DataPulledEventArgs = DataPulledEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Events/Classes/UpdateBeginEvent.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Data/Interfaces/IDataUpdater.d.ts" />
    /// <reference path="Event.ts" />
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        //#region Update Invoked Event
        /** See Event for more details. */
        var UpdateBeginEvent = (function (_super) {
            __extends(UpdateBeginEvent, _super);
            function UpdateBeginEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            UpdateBeginEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            UpdateBeginEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            UpdateBeginEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            UpdateBeginEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateBeginEvent;
        })(Events.Event);
        Events.UpdateBeginEvent = UpdateBeginEvent;

        /** See EventHandler for more details. */
        var UpdateBeginEventHandler = (function (_super) {
            __extends(UpdateBeginEventHandler, _super);
            function UpdateBeginEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            UpdateBeginEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateBeginEventHandler;
        })(Events.EventHandler);
        Events.UpdateBeginEventHandler = UpdateBeginEventHandler;

        /** See EventArgs for more details.*/
        var UpdateBeginEventArgs = (function (_super) {
            __extends(UpdateBeginEventArgs, _super);
            function UpdateBeginEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return UpdateBeginEventArgs;
        })(Events.EventArgs);
        Events.UpdateBeginEventArgs = UpdateBeginEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Events/Classes/UpdateEndEvent.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Data/Interfaces/IDataUpdater.d.ts" />
    /// <reference path="Event.ts" />
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        //#region Update Invoked Event
        /** See Event for more details. */
        var UpdateEndEvent = (function (_super) {
            __extends(UpdateEndEvent, _super);
            function UpdateEndEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            UpdateEndEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            UpdateEndEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            UpdateEndEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            UpdateEndEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateEndEvent;
        })(Events.Event);
        Events.UpdateEndEvent = UpdateEndEvent;

        /** See EventHandler for more details. */
        var UpdateEndEventHandler = (function (_super) {
            __extends(UpdateEndEventHandler, _super);
            function UpdateEndEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            UpdateEndEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateEndEventHandler;
        })(Events.EventHandler);
        Events.UpdateEndEventHandler = UpdateEndEventHandler;

        /** See EventArgs for more details.*/
        var UpdateEndEventArgs = (function (_super) {
            __extends(UpdateEndEventArgs, _super);
            function UpdateEndEventArgs(Sender, failures) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.failures = failures;
            }
            return UpdateEndEventArgs;
        })(Events.EventArgs);
        Events.UpdateEndEventArgs = UpdateEndEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Events/Classes/UpdateInvokedEvent.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Data/Interfaces/IDataUpdater.d.ts" />
    /// <reference path="Event.ts" />
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        //#region Update Invoked Event
        /** See Event for more details. */
        var UpdateInvokedEvent = (function (_super) {
            __extends(UpdateInvokedEvent, _super);
            function UpdateInvokedEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            UpdateInvokedEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            UpdateInvokedEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            UpdateInvokedEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            UpdateInvokedEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateInvokedEvent;
        })(Events.Event);
        Events.UpdateInvokedEvent = UpdateInvokedEvent;

        /** See EventHandler for more details. */
        var UpdateInvokedEventHandler = (function (_super) {
            __extends(UpdateInvokedEventHandler, _super);
            function UpdateInvokedEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            UpdateInvokedEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateInvokedEventHandler;
        })(Events.EventHandler);
        Events.UpdateInvokedEventHandler = UpdateInvokedEventHandler;

        /** See EventArgs for more details.*/
        var UpdateInvokedEventArgs = (function (_super) {
            __extends(UpdateInvokedEventArgs, _super);
            function UpdateInvokedEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return UpdateInvokedEventArgs;
        })(Events.EventArgs);
        Events.UpdateInvokedEventArgs = UpdateInvokedEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Events/Classes/UpdateFromSourceEvent.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /// <reference path="../../Data/Enums/DataAccessStatuses.ts" />
    /// <reference path="../../Data/Interfaces/IDataAccessResult.d.ts" />
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13  : Initial version.
    - 28/Aug/13 : Corrected IDataBindng.d.ts to IDataBinding.d.ts (in the reference)
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Data/Enums/DataAccessStatuses.ts" />
    /// <reference path="../../Data/Interfaces/IDataBinding.d.ts" />
    /// <reference path="Event.ts" />
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        //#region Update From Source Event
        /** See Event for more details. */
        var UpdateFromSourceEvent = (function (_super) {
            __extends(UpdateFromSourceEvent, _super);
            function UpdateFromSourceEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            UpdateFromSourceEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            UpdateFromSourceEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            UpdateFromSourceEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            UpdateFromSourceEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateFromSourceEvent;
        })(Events.Event);
        Events.UpdateFromSourceEvent = UpdateFromSourceEvent;

        /** See EventHandler for more details. */
        var UpdateFromSourceEventHandler = (function (_super) {
            __extends(UpdateFromSourceEventHandler, _super);
            function UpdateFromSourceEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            UpdateFromSourceEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateFromSourceEventHandler;
        })(Events.EventHandler);
        Events.UpdateFromSourceEventHandler = UpdateFromSourceEventHandler;

        /** See EventArgs for more details.*/
        var UpdateFromSourceEventArgs = (function (_super) {
            __extends(UpdateFromSourceEventArgs, _super);
            function UpdateFromSourceEventArgs(Sender, Status) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.Status = Status;
            }
            return UpdateFromSourceEventArgs;
        })(Events.EventArgs);
        Events.UpdateFromSourceEventArgs = UpdateFromSourceEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Events/Classes/UpdateFromUserEvent.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    - 28/Aug/13 : Corrected IDataBindng.d.ts to IDataBinding.d.ts (in the reference)
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Data/Enums/DataAccessStatuses.ts" />
    /// <reference path="../../Data/Interfaces/IDataBinding.d.ts" />
    /// <reference path="Event.ts" />
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        //#region Update From User Event
        /** See Event for more details. */
        var UpdateFromUserEvent = (function (_super) {
            __extends(UpdateFromUserEvent, _super);
            function UpdateFromUserEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            UpdateFromUserEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            UpdateFromUserEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            UpdateFromUserEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            UpdateFromUserEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateFromUserEvent;
        })(Events.Event);
        Events.UpdateFromUserEvent = UpdateFromUserEvent;

        /** See EventHandler for more details. */
        var UpdateFromUserEventHandler = (function (_super) {
            __extends(UpdateFromUserEventHandler, _super);
            function UpdateFromUserEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            UpdateFromUserEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateFromUserEventHandler;
        })(Events.EventHandler);
        Events.UpdateFromUserEventHandler = UpdateFromUserEventHandler;

        /** See EventArgs for more details.*/
        var UpdateFromUserEventArgs = (function (_super) {
            __extends(UpdateFromUserEventArgs, _super);
            function UpdateFromUserEventArgs(Sender, Status) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.Status = Status;
            }
            return UpdateFromUserEventArgs;
        })(Events.EventArgs);
        Events.UpdateFromUserEventArgs = UpdateFromUserEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Enums/BindingDirections.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 24 22:15 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 24/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (Data) {
        /** The directions of data flow that control the data binding. */
        (function (BindingDirections) {
            /** Indicates the data flow is from source to user. */
            BindingDirections[BindingDirections["S2U"] = 0] = "S2U";

            /** Indicates the data flow is from user to source. */
            BindingDirections[BindingDirections["U2S"] = 1] = "U2S";

            /** Indicates the data flow is in both directions with default direction as source to user. */
            BindingDirections[BindingDirections["BOTH_S2UDefault"] = 2] = "BOTH_S2UDefault";

            /** Indicates the data flow is in both directions with default direction as user to source. */
            BindingDirections[BindingDirections["BOTH_U2SDefault"] = 3] = "BOTH_U2SDefault";
        })(Data.BindingDirections || (Data.BindingDirections = {}));
        var BindingDirections = Data.BindingDirections;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Enums/DataAccessStatuses.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 3 12:15 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 3/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (Data) {
        /** FLAGS: The statuses that a data push or data pull request can have. */
        (function (DataAccessStatuses) {
            /** Indicates the status of the request is not known. */
            DataAccessStatuses[DataAccessStatuses["Unkown"] = 0] = "Unkown";

            /** Indicates that the request is pending completion. */
            DataAccessStatuses[DataAccessStatuses["Pending"] = 1] = "Pending";

            /** Indicates that the request has completed succesffuly. */
            DataAccessStatuses[DataAccessStatuses["Complete"] = 2] = "Complete";

            /** Indicates that the request has completed but failed. */
            DataAccessStatuses[DataAccessStatuses["Failed"] = 4] = "Failed";

            /** Indicates that an error occurred other than request failure. */
            DataAccessStatuses[DataAccessStatuses["Error"] = 8] = "Error";
        })(Data.DataAccessStatuses || (Data.DataAccessStatuses = {}));
        var DataAccessStatuses = Data.DataAccessStatuses;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Enums/UpdateTriggers.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 27 22:00 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 27/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (Data) {
        /** FLAGS: The statuses that a data push or data pull request can have. */
        (function (UpdateTriggers) {
            /** Indicates the trigger of the update request is unknown. */
            UpdateTriggers[UpdateTriggers["Unkown"] = 0] = "Unkown";

            /** Indicates the trigger of the update request is the source. */
            UpdateTriggers[UpdateTriggers["Source"] = 1] = "Source";

            /** Indicates the trigger of the update request is the user. */
            UpdateTriggers[UpdateTriggers["User"] = 2] = "User";

            /** Indicates the trigger of the update request is the data binding. */
            UpdateTriggers[UpdateTriggers["Binding"] = 4] = "Binding";
        })(Data.UpdateTriggers || (Data.UpdateTriggers = {}));
        var UpdateTriggers = Data.UpdateTriggers;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Enums/DelayModes.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 24 22:15 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 24/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (Data) {
        /** The delay modes a data binding can use. */
        (function (DelayModes) {
            /** Indicates the data binding should delay the first call to update and ignore subsequent calls until the update has completed (or failed). */
            DelayModes[DelayModes["First"] = 0] = "First";

            /** Indicates the data binding should cancel previous calls to update and delay the latest call. */
            DelayModes[DelayModes["Last"] = 1] = "Last";
        })(Data.DelayModes || (Data.DelayModes = {}));
        var DelayModes = Data.DelayModes;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/DataAccessResult.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 3 12:35 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 25/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Enums/DataAccessStatuses.ts" />
    /// <reference path="../Interfaces/IDataAccessResult.d.ts" />
    (function (Data) {
        /** Defines the structure for the result of a data access request. Contains the Status of the request and any data returned.
        T: The type of data (the type of the Result property)
        */
        var DataAccessResult = (function () {
            /** Creates a new instance of DataAccessResult
            @param status The most recent status of the request.
            @param result The result data of the request.
            @returns A new DataAccessResult instance.
            */
            function DataAccessResult(status, result) {
                this.Status = status;
                this.Result = result;
            }
            return DataAccessResult;
        })();
        Data.DataAccessResult = DataAccessResult;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/DataAccessor.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: 25 Aug 19:32 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 25/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Events/Classes/DataPulledEvent.ts" />
    /// <reference path="../Interfaces/IDataAccessResult.d.ts" />
    /// <reference path="../Enums/DataAccessStatuses.ts" />
    /// <reference path="../../Events/Classes/Events.ts" />
    /// <reference path="../Interfaces/IAccessInfo.d.ts" />
    /// <reference path="../Interfaces/IDataAccessor.d.ts" />
    /// <reference path="DataAccessResult.ts" />
    (function (Data) {
        /** Defines the structure for data accessors. Data accessors push or pull data to/from a data source such as a page on a web server.
        T: Specifies the type of the data which will be sent to/from the server.
        */
        var DataAccessor = (function () {
            function DataAccessor(baseAccessInfo) {
                if (typeof baseAccessInfo === "undefined") { baseAccessInfo = null; }
                /** The normal access info to use in PushData and PullData when no alternative info is supplied. Use this to set up a data accessor for repeated access to the same data source. */
                this.BaseAccessInfo = null;
                /** Fired when data is pushed to the server (or when the data push request fails).
                Check the Status property of the event.
                */
                this.OnDataPushed = new TSUI.Events.DataPushedEvent();
                /** Fired when data is pulled from the server (or when the data pull request fails).
                Check the Status property of the event.
                */
                this.OnDataPulled = new TSUI.Events.DataPulledEvent();
                this.BaseAccessInfo = baseAccessInfo;
            }
            /** Empty implementation of PushData. Always returns an error result.
            @param data The data to push to the server.
            @param accessInfo The AccessInfo to use for the data source.
            @returns The result of the request. Implementations of this which are asynchronous should return an empty result with status Pending.
            */
            DataAccessor.prototype.PushData = function (data, accessInfo) {
                return new Data.DataAccessResult(Data.DataAccessStatuses.Error, null);
            };

            /** Empty implementation of PullData. Always returns an error result.
            @param accessInfo The AccessInfo to use for the data source.
            @returns The status of the request. Implementations of this which are asynchronous should return empty result with status Pending.
            */
            DataAccessor.prototype.PullData = function (accessInfo) {
                return new Data.DataAccessResult(Data.DataAccessStatuses.Error, null);
            };
            return DataAccessor;
        })();
        Data.DataAccessor = DataAccessor;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/Data Accessors/HTTPDataAccessor.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: 25 Aug 19:32 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 25/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../DataAccessor.ts" />
    /// <reference path="../../../../Definitions/jquery.d.ts" />
    (function (Data) {
        /** A basic data accessor which can send HTTP GET/POST requests for pul/push. Data accessors push or pull data to/from a data source such as a page on a web server. */
        var HTTPDataAccessor = (function (_super) {
            __extends(HTTPDataAccessor, _super);
            function HTTPDataAccessor(baseAccessInfo) {
                if (typeof baseAccessInfo === "undefined") { baseAccessInfo = null; }
                _super.call(this, baseAccessInfo);
            }
            /** HTTP request implementation of PushData.
            @param data The data to push to the server.
            @param accessInfo The AccessInfo to use for the data source.
            @returns The result of the request. Will return an initially empty result with status Pending.
            */
            HTTPDataAccessor.prototype.PushData = function (data, accessInfo) {
                var _this = this;
                var result = new Data.DataAccessResult(Data.DataAccessStatuses.Pending, null);

                if (accessInfo === undefined) {
                    accessInfo = this.BaseAccessInfo;
                }

                var url = this.BuildFullURL(accessInfo);

                var request = $.post(url, data, function (resultData, status, xhr) {
                    //Success
                    result.Status = Data.DataAccessStatuses.Complete;
                    result.Result = resultData;

                    _this.OnDataPushed.Invoke(new TSUI.Events.DataPushedEventArgs(_this, result));
                }, "text");

                request.fail(function (xhr, status, error) {
                    //Fail
                    result.Status = Data.DataAccessStatuses.Error | Data.DataAccessStatuses.Failed;
                    result.Result = error;

                    _this.OnDataPushed.Invoke(new TSUI.Events.DataPushedEventArgs(_this, result));
                });

                return result;
            };

            /** HTTP request implementation of PullData.
            @param accessInfo The AccessInfo to use for the data source.
            @returns The status of the request. Will return an initially empty result with status Pending.
            */
            HTTPDataAccessor.prototype.PullData = function (accessInfo) {
                var _this = this;
                var result = new Data.DataAccessResult(Data.DataAccessStatuses.Pending, null);

                if (accessInfo === undefined) {
                    accessInfo = this.BaseAccessInfo;
                }

                var url = this.BuildFullURL(accessInfo);

                var request = $.get(url, "", function (resultData, status, xhr) {
                    //Success
                    result.Status = Data.DataAccessStatuses.Complete;
                    result.Result = resultData;

                    _this.OnDataPulled.Invoke(new TSUI.Events.DataPushedEventArgs(_this, result));
                }, "text");

                request.fail(function (xhr, status, error) {
                    //Fail
                    result.Status = Data.DataAccessStatuses.Error | Data.DataAccessStatuses.Failed;
                    result.Result = error;

                    _this.OnDataPulled.Invoke(new TSUI.Events.DataPushedEventArgs(_this, result));
                });

                return result;
            };

            /** Builds the full HTTP requestable URL from the access info.
            @param accessInfo The access info to build the URL for.
            @returns The URL
            */
            HTTPDataAccessor.prototype.BuildFullURL = function (accessInfo) {
                var result = "";

                result = accessInfo.URL;
                result += "?";
                var count = accessInfo.Params.Count();
                for (var i = 0; i < count; i++) {
                    result += accessInfo.Params.ElementAt(i);
                    if (i < count - 1) {
                        result += "&";
                    }
                }

                return result;
            };
            return HTTPDataAccessor;
        })(Data.DataAccessor);
        Data.HTTPDataAccessor = HTTPDataAccessor;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/Data Accessors/JSDataAccessor.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: 1 Sep 23:16 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 1/Sep/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../DataAccessor.ts" />
    /// <reference path="../../../../Definitions/jquery.d.ts" />
    (function (Data) {
        /** A basic data accessor which can use a JS global variable as its source for pull/push. Can also use a property method e.g. function(value: Val_Type): Val_Type
        Data accessors push or pull data to/from a data source such as a page on a web server. */
        var JSDataAccessor = (function (_super) {
            __extends(JSDataAccessor, _super);
            function JSDataAccessor(aContext, baseAccessInfo) {
                if (typeof baseAccessInfo === "undefined") { baseAccessInfo = null; }
                _super.call(this, baseAccessInfo);
                /** The context object to use when accessing the object. */
                this.Context = window;

                this.Context = aContext;
            }
            /** HTTP request implementation of PushData.
            @param data The data to push to the source variable.
            @param accessInfo The AccessInfo to use for the data source. See constructor for more info on how to set this.
            @returns Will return an initially empty result with status Error and no data or Complete and the data.
            */
            JSDataAccessor.prototype.PushData = function (data, accessInfo) {
                var result = new Data.DataAccessResult(Data.DataAccessStatuses.Pending, null);

                if (accessInfo === undefined) {
                    accessInfo = this.BaseAccessInfo;
                }

                var resData = this.setVal(accessInfo, data);
                if (resData !== null) {
                    result.Status = Data.DataAccessStatuses.Complete;
                } else {
                    result.Status = Data.DataAccessStatuses.Error;
                }
                result.Result = resData;

                this.OnDataPushed.Invoke(new TSUI.Events.DataPushedEventArgs(this, result));

                return result;
            };

            /** HTTP request implementation of PullData.
            @param accessInfo The AccessInfo to use for the data source.
            @returns Will return an initially empty result with status Error and no data or Complete and the data.
            */
            JSDataAccessor.prototype.PullData = function (accessInfo) {
                var result = new Data.DataAccessResult(Data.DataAccessStatuses.Error, null);

                if (accessInfo === undefined) {
                    accessInfo = this.BaseAccessInfo;
                }

                var resData = this.getVal(accessInfo);
                if (resData !== null) {
                    result.Status = Data.DataAccessStatuses.Complete;
                } else {
                    result.Status = Data.DataAccessStatuses.Error;
                }
                result.Result = resData;

                this.OnDataPulled.Invoke(new TSUI.Events.DataPulledEventArgs(this, result));

                return result;
            };

            JSDataAccessor.prototype.getVal = function (accessInfo) {
                var result = null;

                if (this.Context[accessInfo.URL] !== undefined) {
                    var obj = this.Context[accessInfo.URL];

                    var len = accessInfo.Params.Count();
                    for (var i = 0; i < len; i++) {
                        obj = obj[accessInfo.Params.ElementAt(i)];
                    }

                    if (TSUI.isFunction(obj)) {
                        result = obj.call(this.Context);
                    } else {
                        result = obj;
                    }
                }

                return result;
            };
            JSDataAccessor.prototype.setVal = function (accessInfo, data) {
                var result = null;

                if (this.Context[accessInfo.URL] !== undefined) {
                    var obj = this.Context[accessInfo.URL];
                    var lastParent = null;

                    var len = accessInfo.Params.Count();
                    for (var i = 0; i < len; i++) {
                        lastParent = obj;
                        obj = obj[accessInfo.Params.ElementAt(i)];
                    }

                    if (TSUI.isFunction(obj)) {
                        result = obj.call(this.Context, data);
                    } else {
                        if (accessInfo.Params.Count() === 0) {
                            result = this.Context[accessInfo.URL] = obj = data;
                        } else {
                            lastParent[accessInfo.Params.Count() - 1] = data;
                            result = obj = data;
                        }
                    }
                }

                return result;
            };
            return JSDataAccessor;
        })(Data.DataAccessor);
        Data.JSDataAccessor = JSDataAccessor;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/DataAdapter.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 3 12:51 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 3/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IDataAdapter.d.ts" />
    (function (Data) {
        /** Defines the structure for data adapters. Data adapters convert raw input data to JavaScript objects or vice-versa.
        I: Specifies the type of the input data.
        O: Specifies the type of the output data.
        */
        var DataAdapter = (function () {
            function DataAdapter() {
            }
            /** Converts raw data to JavaScript object data.
            Note: This implementation always returns null.
            @param input The raw data.
            @returns The JavaScript object data.
            */
            DataAdapter.prototype.I2O = function (input) {
                return null;
            };

            /** Converts JavaScript object data to raw data.
            Note: This implementation always returns null.
            @param input The JavaScript object data.
            @returns The raw data.
            */
            DataAdapter.prototype.O2I = function (output) {
                return null;
            };
            return DataAdapter;
        })();
        Data.DataAdapter = DataAdapter;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/Data Adapters/ArrayDataAdapter.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 3 12:51 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 3/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../DataAdapter.ts" />
    (function (Data) {
        /** Array Data Adapter converts a raw input string to an array or vice-versa. Use JSONDataAdapter to handle JSON-formatted arrays/objects.
        O: The type of the items in the output array
        */
        var ArrayDataAdapter = (function (_super) {
            __extends(ArrayDataAdapter, _super);
            /** Creates a new ArrayDataAdapter<O>
            @param ItemAdapter The data adapter to use for converting array item strings into actual item objects.
            @param Delimiter The delimiter to use for splitting the input string into seperate items. Default: ","
            */
            function ArrayDataAdapter(ItemAdapter, Delimiter) {
                if (typeof Delimiter === "undefined") { Delimiter = ","; }
                _super.call(this);
                this.ItemAdapter = ItemAdapter;
                this.Delimiter = Delimiter;
            }
            /** Converts raw data to JavaScript object data.
            Note: This implementation does not check for a valid array with the exception that it does handle null and undefined.
            Note: This implementation splits by the specified delimiter then uses the item adapter to convert each item individually.
            @param input The raw string data.
            @returns The array data or null or undefined.
            */
            ArrayDataAdapter.prototype.I2O = function (input) {
                if (input === "null" || input === null) {
                    return null;
                } else if (input === "undefined" || input === undefined) {
                    return undefined;
                }

                var items = input.split(this.Delimiter);
                var result = new Array(items.length);
                for (var i = 0; i < items.length; i++) {
                    result[i] = this.ItemAdapter.I2O(items[i]);
                }

                return result;
            };

            /** Converts JavaScript object data to raw data.
            Note: This implementation does handle null and undefined.
            @param input The array data.
            @returns The raw string.
            */
            ArrayDataAdapter.prototype.O2I = function (output) {
                if (output === null) {
                    return "null";
                } else if (output === undefined) {
                    return "undefined";
                }

                var result = "";
                for (var i = 0; i < output.length; i++) {
                    result += this.ItemAdapter.O2I(output[i]);
                    if (i < output.length - 1) {
                        result += this.Delimiter;
                    }
                }

                return result;
            };
            return ArrayDataAdapter;
        })(Data.DataAdapter);
        Data.ArrayDataAdapter = ArrayDataAdapter;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/Data Adapters/BooleanDataAdapter.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 3 12:51 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 3/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../DataAdapter.ts" />
    (function (Data) {
        /** Boolean Data Adapter converts a raw input string to a boolean or vice-versa.*/
        var BooleanDataAdapter = (function (_super) {
            __extends(BooleanDataAdapter, _super);
            function BooleanDataAdapter() {
                _super.apply(this, arguments);
            }
            /** Converts raw data to JavaScript object data.
            Note: This implementation does not check for a valid boolean with the exception that it does handle null and undefined.
            Note: This implementation tests for equality with "true", "1", "yes", "on" (case-insensitive).
            @param input The raw string data.
            @returns The boolean data or null or undefined.
            */
            BooleanDataAdapter.prototype.I2O = function (input) {
                if (input === "null" || input === null) {
                    return null;
                } else if (input === "undefined" || input === undefined) {
                    return undefined;
                }

                var testInput = input.toLowerCase();
                return testInput === "true" || testInput === "1" || testInput === "yes" || testInput === "on";
            };

            /** Converts JavaScript object data to raw data.
            Note: This implementation does handle null and undefined.
            @param input The boolean data.
            @returns The raw string data.
            */
            BooleanDataAdapter.prototype.O2I = function (output) {
                if (output === null) {
                    return "null";
                } else if (output === undefined) {
                    return "undefined";
                }

                return output ? "true" : "false";
            };
            return BooleanDataAdapter;
        })(Data.DataAdapter);
        Data.BooleanDataAdapter = BooleanDataAdapter;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/Data Adapters/JSONDataAdapter.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 3 12:51 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 3/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../DataAdapter.ts" />
    (function (Data) {
        /** JSON Data Adapter converts a raw input string to a JavaScript object or vice-versa. Use JSONDataAdapter to handle JSON-formatted arrays/objects.
        O: The output type of the adapter.
        */
        var JSONDataAdapter = (function (_super) {
            __extends(JSONDataAdapter, _super);
            function JSONDataAdapter() {
                _super.apply(this, arguments);
            }
            /** Converts raw data to JavaScript object data.
            Note: This implementation does handle null and undefined.
            Note: This implementation uses JSON.parse()
            @param input The raw JSON string.
            @returns The object data or null or undefined.
            */
            JSONDataAdapter.prototype.I2O = function (input) {
                if (input === "null" || input === null) {
                    return null;
                } else if (input === "undefined" || input === undefined) {
                    return undefined;
                }

                return JSON.parse(input);
            };

            /** Converts JavaScript object data to raw data.
            Note: This implementation does handle null and undefined.
            Note: This implementation uses JSON.stringify()
            @param input The object data.
            @returns The raw JSON string.
            */
            JSONDataAdapter.prototype.O2I = function (output) {
                if (output === null) {
                    return "null";
                } else if (output === undefined) {
                    return "undefined";
                }

                return JSON.stringify(output);
            };
            return JSONDataAdapter;
        })(Data.DataAdapter);
        Data.JSONDataAdapter = JSONDataAdapter;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/Data Adapters/NumberDataAdapter.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 3 12:51 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 3/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../DataAdapter.ts" />
    (function (Data) {
        /** Number Data Adapter converts a raw input string to a number or vice-versa.*/
        var NumberDataAdapter = (function (_super) {
            __extends(NumberDataAdapter, _super);
            function NumberDataAdapter() {
                _super.apply(this, arguments);
            }
            /** Converts raw data to JavaScript object data.
            Note: This implementation does not check for a valid number with the exception that it does handle NaN, null and undefined.
            Note: This implementation uses parseFloat.
            @param input The raw string data.
            @returns The (float) number data or null or undefined or NaN.
            */
            NumberDataAdapter.prototype.I2O = function (input) {
                if (input === "null" || input === null) {
                    return null;
                } else if (input === "undefined" || input === undefined) {
                    return undefined;
                } else if (input === "NaN") {
                    return NaN;
                }

                return parseFloat(input);
            };

            /** Converts JavaScript object data to raw data.
            Note: This implementation does handle NaN, null and undefined.
            Note: This implementation uses .toString() with radix: 10
            @param input The number data.
            @returns The raw string data.
            */
            NumberDataAdapter.prototype.O2I = function (output) {
                if (output === null) {
                    return "null";
                } else if (output === undefined) {
                    return "undefined";
                } else if (isNaN(output)) {
                    return "NaN";
                }

                return output.toString(10);
            };
            return NumberDataAdapter;
        })(Data.DataAdapter);
        Data.NumberDataAdapter = NumberDataAdapter;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/Data Adapters/StringDataAdapter.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 3 12:51 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 3/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../DataAdapter.ts" />
    (function (Data) {
        /** String Data Adapter is a string pass-through adapter - it doesn't actually do anything. Use this as a fill-in adapter.*/
        var StringDataAdapter = (function (_super) {
            __extends(StringDataAdapter, _super);
            function StringDataAdapter() {
                _super.apply(this, arguments);
            }
            /** Converts raw data to JavaScript object data.
            Note: This implementation always returns the input unless the input is "undefined" or "null" in which case it returns undefined or null respectively.
            @param input The raw string data.
            @returns The processed string data or undefined or null.
            */
            StringDataAdapter.prototype.I2O = function (input) {
                return input;
            };

            /** Converts JavaScript object data to raw data.
            Note: This implementation always returns the output unless the output is undefined or null in which case it returns "undefined" or "null" respectively.
            @param input The processed string data.
            @returns The raw string data.
            */
            StringDataAdapter.prototype.O2I = function (output) {
                return output;
            };
            return StringDataAdapter;
        })(Data.DataAdapter);
        Data.StringDataAdapter = StringDataAdapter;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/DataBinding.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 27 9:00 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 27/Aug/13 : Initial version.
    - 29/Aug/13 : - Added DelayModes reference
    - Added DelayModes related Update code
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Enums/BindingDirections.ts" />
    /// <reference path="../Interfaces/IDataAdapter.d.ts" />
    /// <reference path="../Interfaces/IDataAccessor.d.ts" />
    /// <reference path="../../Events/Classes/UpdateFromUserEvent.ts" />
    /// <reference path="../../Events/Classes/UpdateFromSourceEvent.ts" />
    /// <reference path="../../Events/Classes/DataPulledEvent.ts" />
    /// <reference path="../../Events/Classes/Events.ts" />
    /// <reference path="../../Collections/Classes/List.ts" />
    /// <reference path="../Interfaces/IDataBinding.d.ts" />
    /// <reference path="Data Accessors/HTTPDataAccessor.ts" />
    /// <reference path="../Enums/UpdateTriggers.ts" />
    /// <reference path="../Enums/DelayModes.ts" />
    (function (Data) {
        /** Defines the structure for a data binding. Data bindings bind a particular Control's property to a data source and handle pull / pushing data to/from that source.
        I: Specifies the type of data sent/received to/from the server.
        O: Specifies the type of data out of the data adapter.
        */
        var DataBinding = (function () {
            function DataBinding(control, propertyName, dataProperty, accessor, bindingDirection, adapter) {
                if (typeof bindingDirection === "undefined") { bindingDirection = Data.BindingDirections.BOTH_S2UDefault; }
                if (typeof adapter === "undefined") { adapter = DataBinding.DefaultJSONAdapter; }
                /** The underlying control. */
                this._Control = null;
                /** The underlying property name. */
                this._PropertyName = null;
                /** The underlying accessor. */
                this._Accessor = null;
                /** The Update Delay Mode to use for this binding. */
                this.DelayMode = Data.DelayModes.First;
                /** Time to delay between sending access requests to the server to reduce network usage and JS overload. Useful for data bindings such as those bound to text boxes. */
                this.UpdateDelayTime = 0;
                /** The old value of the property this binding is for. */
                this.oldValue = null;
                /** The update timeout reference number. */
                this.updateTimeout = null;
                /** Fired when the binding updates from the source. */
                this.OnUpdateFromSource = new TSUI.Events.UpdateFromSourceEvent();
                /** Fired when the binding updates from the user. */
                this.OnUpdateFromUser = new TSUI.Events.UpdateFromUserEvent();
                this._Control = control;
                this._PropertyName = propertyName;
                this.DataProperty = dataProperty;
                this._Accessor = accessor;
                this.Adapter = adapter;
                this.BindingDirection = bindingDirection;

                if (!this.Bind()) {
                    throw "Property is already bound or is not a function!";
                }
            }
            /** The control to bind. */
            DataBinding.prototype.Control = function (value) {
                if (value !== undefined) {
                    this.Unbind();
                    this._Control = value;
                    this.Bind();
                }
                return this._Control;
            };

            /** The name of the method to call to set the control property. */
            DataBinding.prototype.PropertyName = function (value) {
                if (value !== undefined) {
                    this.Unbind();
                    this._PropertyName = value;
                    this.Bind();
                }
                return this._PropertyName;
            };

            /** The data accessor to use for this binding. */
            DataBinding.prototype.Accessor = function (value) {
                if (value !== undefined) {
                    this.Unbind();
                    this._Accessor = value;
                    this.Bind();
                }
                return this._Accessor;
            };

            /** Wraps the property (method) in a special controlled method, maintaining a copy of the original. */
            DataBinding.prototype.Bind = function () {
                var result = false;

                //Bind accessor events (first checking that it hasn't already been bound)
                var bindPull = false;
                if (!this.Accessor_OnDataPulledHandler) {
                    bindPull = true;
                    this.Accessor_OnDataPulledHandler = new TSUI.Events.DataPulledEventHandler(this.Accessor_OnDataPulled, this);
                }
                var bindPush = false;
                if (!this.Accessor_OnDataPushedHandler) {
                    bindPush = true;
                    this.Accessor_OnDataPushedHandler = new TSUI.Events.DataPushedEventHandler(this.Accessor_OnDataPushed, this);
                }
                if (bindPull || !this._Accessor.OnDataPulled.IsAttached(this.Accessor_OnDataPulledHandler)) {
                    this._Accessor.OnDataPulled.Attach(this.Accessor_OnDataPulledHandler);
                }
                if (bindPush || !this._Accessor.OnDataPushed.IsAttached(this.Accessor_OnDataPushedHandler)) {
                    this._Accessor.OnDataPushed.Attach(this.Accessor_OnDataPushedHandler);
                }

                if (!this._Control[this._PropertyName + "_databinding_orig"]) {
                    if (TSUI.isFunction(this._Control[this._PropertyName])) {
                        var propFunc = this._Control[this._PropertyName];
                        var _this = this;
                        var newPropFunc = function (value, trigger) {
                            if (typeof trigger === "undefined") { trigger = Data.UpdateTriggers.User; }
                            var newValue = _this._Control[_this._PropertyName + "_databinding_orig"].call(this, value);
                            if ((!!value && value !== newValue) || (newValue !== _this.oldValue)) {
                                _this.oldValue = newValue;
                                if (_this.Update(trigger)) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }

                            return true;
                        };
                        this._Control[this._PropertyName] = newPropFunc;
                        this._Control[this._PropertyName + "_databinding_orig"] = propFunc;
                        result = true;
                    }
                }

                return result;
            };

            /** Unwraps the property (method). */
            DataBinding.prototype.Unbind = function () {
                var result = false;

                //Unbind accessor events
                this._Accessor.OnDataPulled.Detach(this.Accessor_OnDataPulledHandler);
                this._Accessor.OnDataPushed.Detach(this.Accessor_OnDataPushedHandler);

                if (this._Control[this._PropertyName + "_databinding_orig"]) {
                    this._Control[this._PropertyName] = this._Control[this._PropertyName + "_databinding_orig"];
                }
                result = true;

                return result;
            };

            /** Causes the data binding to update using the direction specified in BindingDirection.
            @param trigger The trigger that caused the update request. Leave this parameter at default if calling programatically.
            @returns A boolean indicating whether the update was successful or not.
            */
            DataBinding.prototype.Update = function (trigger) {
                if (typeof trigger === "undefined") { trigger = Data.UpdateTriggers.Unkown; }
                var _this = this;
                var executeUpdate = true;

                switch (this.DelayMode) {
                    case Data.DelayModes.First:
                        executeUpdate = (this.updateTimeout === null);
                        break;
                    case Data.DelayModes.Last:
                        if (this.updateTimeout !== null) {
                            clearTimeout(this.updateTimeout);
                            this.updateTimeout = null;
                        }
                        break;
                }

                if (executeUpdate) {
                    var updateFunc = function () {
                        _this.updateTimeout = null;

                        var result = false;

                        if (trigger === Data.UpdateTriggers.Binding) {
                            return true;
                        }

                        switch (_this.BindingDirection) {
                            case Data.BindingDirections.S2U:
                                //Direction is forced
                                //So ignore the trigger
                                //Update data from server since user (local) data may have incorrectly changed
                                result = _this.UpdateFromSource();
                                break;
                            case Data.BindingDirections.U2S:
                                //Direction is forced
                                //So ignore the trigger
                                //Update data from user since server (remote) data may have incorrectly changed
                                result = _this.UpdateFromUser();
                                break;
                            case Data.BindingDirections.BOTH_S2UDefault:
                                switch (trigger) {
                                    case Data.UpdateTriggers.Source:
                                    case Data.UpdateTriggers.Unkown:
                                        result = _this.UpdateFromSource();
                                        break;
                                    case Data.UpdateTriggers.User:
                                        result = _this.UpdateFromUser();
                                        break;
                                }
                                break;
                            case Data.BindingDirections.BOTH_U2SDefault:
                                switch (trigger) {
                                    case Data.UpdateTriggers.User:
                                    case Data.UpdateTriggers.Unkown:
                                        result = _this.UpdateFromUser();
                                        break;
                                    case Data.UpdateTriggers.Source:
                                        result = _this.UpdateFromSource();
                                        break;
                                }
                                break;
                        }

                        return result;
                    };
                    if (this.UpdateDelayTime !== null && this.UpdateDelayTime > 0) {
                        this.updateTimeout = setTimeout(updateFunc, this.UpdateDelayTime);
                    } else {
                        return updateFunc();
                    }
                }

                return true;
            };

            /** Causes the data binding to update from the source.
            @returns A boolean indicating whether the update has successfully started or not.
            */
            DataBinding.prototype.UpdateFromSource = function () {
                //Pull data
                var result = false;

                if (this.BindingDirection != Data.BindingDirections.U2S) {
                    var requestStatus = this._Accessor.PullData();

                    if (requestStatus.Status === Data.DataAccessStatuses.Pending || requestStatus.Status === Data.DataAccessStatuses.Complete) {
                        //Successful data pull request (either started or complete)
                        result = true;
                    }
                }

                return result;
            };

            /** Called when the accessor receives data from the source after a pull request (i.e. when data is pulled from the source)
            @param args The event args for the event call.
            @returns Void.
            */
            DataBinding.prototype.Accessor_OnDataPulled = function (args) {
                var result = false;
                if (args.Result.Status === Data.DataAccessStatuses.Complete) {
                    var procData = this.Adapter.I2O(args.Result.Result);
                    result = this.UpdateUsingData(procData);
                }

                //Fire OnUpdateFromSource
                this.OnUpdateFromSource.Invoke(new TSUI.Events.UpdateFromSourceEventArgs(this, (result ? Data.DataAccessStatuses.Complete : Data.DataAccessStatuses.Failed)));
            };

            /** Causes the data binding to update from the user.
            @returns A boolean indicating whether the update has successfully started or not.
            */
            DataBinding.prototype.UpdateFromUser = function () {
                //Push data
                var result = false;

                if (this.BindingDirection != Data.BindingDirections.S2U) {
                    //Write PushData code
                    var propVal = this._Control[this._PropertyName](undefined, Data.UpdateTriggers.Binding);
                    var outputData = {};
                    var len = this.DataProperty.Count();
                    if (len > 0) {
                        var value = outputData;
                        for (var i = 0; i < len - 1; i++) {
                            value[this.DataProperty.ElementAt(i)] = {};
                            value = value[this.DataProperty.ElementAt(i)];
                        }
                        value[this.DataProperty.ElementAt(len - 1)] = propVal;
                    } else {
                        outputData = propVal;
                    }
                    var inputData = this.Adapter.O2I(outputData);
                    var requestStatus = this._Accessor.PushData(inputData);

                    if (requestStatus.Status === Data.DataAccessStatuses.Pending || requestStatus.Status === Data.DataAccessStatuses.Complete) {
                        //Successful data push request (either started or complete)
                        result = true;
                    }
                }

                return result;
            };

            /** Called when the accessor receives data from the source after a push request (i.e. when data is pushed to the source)
            @param args The event args for the event call.
            @returns Void.
            */
            DataBinding.prototype.Accessor_OnDataPushed = function (args) {
                var result = false;
                if (args.Result.Status === Data.DataAccessStatuses.Complete) {
                    var procData = this.Adapter.I2O(args.Result.Result);
                    result = this.UpdateUsingData(procData);
                }

                //Fire OnUpdateFromUser
                this.OnUpdateFromUser.Invoke(new TSUI.Events.UpdateFromUserEventArgs(this, (result ? Data.DataAccessStatuses.Complete : Data.DataAccessStatuses.Failed)));
            };

            /** Updates the control from the supplied data.
            @param data The data to update from.
            @returns A boolean indicating whether the update was successful or not.
            */
            DataBinding.prototype.UpdateUsingData = function (data) {
                var result = false;

                if (data === null || data === undefined) {
                    this._Control[this._PropertyName](null, Data.UpdateTriggers.Binding);
                    result = false;
                } else {
                    var len = this.DataProperty.Count();
                    var value = data;
                    for (var i = 0; i < len; i++) {
                        value = value[this.DataProperty.ElementAt(i)];
                    }

                    //Set the value in the control
                    result = this._Control[this._PropertyName](value, Data.UpdateTriggers.Binding);
                }

                return result;
            };
            DataBinding.DefaultJSONAdapter = new Data.JSONDataAdapter();
            return DataBinding;
        })();
        Data.DataBinding = DataBinding;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/DataUpdater.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 28 21:05 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 28/Aug/13  : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Events/Classes/UpdateInvokedEvent.ts" />
    /// <reference path="../../Events/Classes/UpdateEndEvent.ts" />
    /// <reference path="../../Events/Classes/UpdateBeginEvent.ts" />
    /// <reference path="../../Collections/Classes/List.ts" />
    /// <reference path="../Interfaces/IDataBinding.d.ts" />
    /// <reference path="../Interfaces/IDataUpdater.d.ts" />
    (function (Data) {
        /** Defines the structure for a data updater. Data updaters can be used to call updates on all the bindings in a binding group either manually or at a regular interval. */
        var DataUpdater = (function () {
            /** Creates a new DataUpdater.
            @param getBindings A function which returns the list of data bindings to update. Default: null meaning automatic updates will not work.
            @param interval The interval with which to update the bindings. Default: -1 indicating no automatic udpates.
            @returns A new data updater.
            */
            function DataUpdater(getBindings, interval) {
                if (typeof getBindings === "undefined") { getBindings = null; }
                if (typeof interval === "undefined") { interval = -1; }
                /** Set this delegate to a method which returns the data bindings to be updated when UpdateBindings is called (must be set for updaters which user intervals). */
                this.GetBindings = null;
                /** The underlying interval value. */
                this._interval = -1;
                /** The setInterval reference number. */
                this.intervalRef = null;
                /** Fired when an update is invoked (either from timer or externally using UpdateBindings). This occurs before OnUpdateBegin. Some invokes may be ignored and in those cases OnUpdateBegin/OnUpdateEnd will not be fired. */
                this.OnUpdateInvoked = new TSUI.Events.UpdateInvokedEvent();
                /** Fired when update of a data bindings begins. This should be attached to for detecting when an update actually begins. */
                this.OnUpdateBegin = new TSUI.Events.UpdateBeginEvent();
                /** Fired when update of a data bindings ends. This should be attached to for detecting when an update ends and the status on that update. */
                this.OnUpdateEnd = new TSUI.Events.UpdateEndEvent();
                this.GetBindings = getBindings;
                this.Interval(interval);
            }
            /** Updates all the bindings in the specified collection. May abort updating any remaining bindings if a binding fails to update.
            @param bindings The collection of bindings to update.
            @param abortOnFailure Whether to abort updating bindings if a binding fails to update.
            @returns The number of bindings which failed to update (or start to update if accessors are asynchronous).
            */
            DataUpdater.prototype.UpdateBindings = function (abortOnFailure, bindings) {
                if (typeof abortOnFailure === "undefined") { abortOnFailure = false; }
                if (typeof bindings === "undefined") { bindings = null; }
                this.OnUpdateInvoked.Invoke(new TSUI.Events.UpdateInvokedEventArgs(this));

                if (bindings === null) {
                    if (this.GetBindings !== null) {
                        bindings = this.GetBindings();
                    } else {
                        throw "No bindings to update! bindings = null.";
                    }
                }

                var numFailed = 0;

                if (bindings !== null && bindings.Count() > 0) {
                    this.OnUpdateBegin.Invoke(new TSUI.Events.UpdateBeginEventArgs(this));

                    var len = bindings.Count();
                    for (var i = 0; i < len; i++) {
                        var aBinding = bindings.ElementAt(i);
                        if (!aBinding.Update()) {
                            if (abortOnFailure) {
                                numFailed = len - i;
                                break;
                            } else {
                                numFailed++;
                            }
                        }
                    }

                    this.OnUpdateEnd.Invoke(new TSUI.Events.UpdateEndEventArgs(this, numFailed));
                }

                return numFailed;
            };

            /** Gets or sets the interval with which to update the bindings. Set to -1 to disable periodic updating.
            @param value The interval (time in seconds) to wait between updates.
            @returns The interval time (in seconds) or -1 (indicates no interval)
            */
            DataUpdater.prototype.Interval = function (value) {
                var _this = this;
                if (value !== undefined) {
                    this._interval = value;
                    if (this.intervalRef !== null) {
                        clearInterval(this.intervalRef);
                        this.intervalRef = null;
                    }
                    if (this._interval > -1) {
                        setInterval(function () {
                            _this.UpdateBindings();
                        }, this._interval);
                    }
                }
                return this._interval;
            };
            return DataUpdater;
        })();
        Data.DataUpdater = DataUpdater;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/BindingGroup.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 28 22:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 28/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Collections/Interfaces/IList.d.ts" />
    /// <reference path="../Interfaces/IDataBinding.d.ts" />
    /// <reference path="../Interfaces/IDataUpdater.d.ts" />
    /// <reference path="../Interfaces/IBindingGroup.d.ts" />
    (function (Data) {
        /** Defines the structure for a binding group. A binding group is a collection of data bindings (one or more) and an associated updater. It provides an easy way to block update data bindings. */
        var BindingGroup = (function () {
            /** Creates a new BindingGroup.
            @param updater The data updater to use for the group.
            @param bindings An existing array of data bindings to include in the group.
            @returns A new BindingGroup.
            */
            function BindingGroup(updater, bindings) {
                if (typeof updater === "undefined") { updater = null; }
                if (typeof bindings === "undefined") { bindings = []; }
                var _this = this;
                if (updater !== null) {
                    this.Updater = updater;
                } else {
                    this.Updater = new Data.DataUpdater(null, -1);
                }

                this.Updater.GetBindings = function () {
                    return _this.DataBindings;
                };

                this.DataBindings = new TSUI.Collections.List(bindings);
            }
            /** Forces the data updater to update all the bindings in the group.
            @param abortOnFailure Whether to abort updating bindings if a binding fails to update.
            @returns Whether the update completed successfully (all bindings must complete successfuly for this to be true.)
            */
            BindingGroup.prototype.UpdateAllBindings = function (abortOnFailure) {
                if (typeof abortOnFailure === "undefined") { abortOnFailure = false; }
                return this.Updater.UpdateBindings(abortOnFailure) === 0;
            };
            return BindingGroup;
        })();
        Data.BindingGroup = BindingGroup;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Data/Classes/BindingCollection.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 28 22:56 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 28/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Collections/Interfaces/IList.d.ts" />
    /// <reference path="../Interfaces/IBindingGroup.d.ts" />
    /// <reference path="../Interfaces/IBindingCollection.d.ts" />
    (function (Data) {
        /** Defines the structure for a binding collection. A binding collection contains a list of the binding groups for a control. */
        var BindingCollection = (function () {
            function BindingCollection() {
                /** The list of binding groups in the collection. */
                this.BindingGroups = new TSUI.Collections.List();
            }
            /** Updates all the binding groups in the collection.
            @returns Whether all the bindings updated successfully.
            */
            BindingCollection.prototype.UpdateAllBindings = function () {
                var OK = true;

                var len = this.BindingGroups.Count();
                for (var i = 0; i < len; i++) {
                    OK = this.BindingGroups.ElementAt(i).UpdateAllBindings() && OK;
                }

                return OK;
            };
            return BindingCollection;
        })();
        Data.BindingCollection = BindingCollection;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Animation/Animation.js
/*
Copyright © Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
- 8/Jul/13 : Initial version.
- 5/Sep/13 : Bug fix: requestAnimationFrame was defined in Android browser when cancelAnimationFrame wasn't causing fatal error.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../Collections/Collections_BuildRefs.d.ts" />
/// <reference path="../../Definitions/jquery.d.ts" />
/// <reference path="../../Definitions/html2canvas.d.ts" />
/* Standardises requestAnimationFrame and cancelAnimationFrame */
(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;

    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;

    if (!window.requestAnimationFrame || !window.cancelAnimationFrame) {
        window.requestAnimationFrame = undefined;
        window.cancelAnimationFrame = undefined;
    }
})();

var TSUI;
(function (TSUI) {
    (function (Animation) {
        /** A callback for animation rendering when requestAnimationFrame is answered. */
        var AnimationCallback = (function () {
            /** Creates a new Animation Callback.
            @param callback The function to call when requestAnimationFrame is answered.
            @param context The context to use when calling callback (sets the value of "this" in callback).
            @param single Indicates whether the callback should occur once or should repeat.
            */
            function AnimationCallback(callback, context, single) {
                if (typeof single === "undefined") { single = false; }
                this.callback = callback;
                this.context = context;
                this.single = single;
                /** The time at which animation began i.e. the time at which the first invoke of the callback occurred. */
                this.AnimationStartTime = -1;
            }
            return AnimationCallback;
        })();
        Animation.AnimationCallback = AnimationCallback;

        /** The interval reference used when simulating request animation frame. */
        var AnimationIntervalRef = -1;

        /** The list of animation callbacks to invoke when requestAnimationFrame is answered. */
        var AnimationCallbacks = new TSUI.Collections.List();

        /** Adds an animation callback to the list of animation callbacks. */
        Animation.RegisterAnimationCallback = function (obj) {
            AnimationCallbacks.Add(obj);
            return obj;
        };

        /** Adds an animation callback to the list of animation callbacks to be invoked only once. */
        Animation.RegisterAnimationForSingleCallback = function (obj) {
            obj.single = true;
            AnimationCallbacks.Add(obj);
            return obj;
        };

        /** Removes an animation callback to the list of animation callbacks. */
        Animation.UnregisterAnimationCallback = function (obj) {
            AnimationCallbacks.Remove(obj);
            return obj;
        };

        /** Called when the list of animation callbacks is modified. */
        var AnimationCallbacks_Modified = function (eventArgs) {
            if (AnimationCallbacks.Count() === 0) {
                if (AnimationIntervalRef !== -1) {
                    if (window.requestAnimationFrame && window.cancelAnimationFrame) {
                        window.cancelAnimationFrame(AnimationIntervalRef);
                        AnimationIntervalRef = -1;
                    } else {
                        clearInterval(AnimationIntervalRef);
                        AnimationIntervalRef = -1;
                    }
                }
            } else {
                if (AnimationIntervalRef === -1) {
                    if (window.requestAnimationFrame && window.cancelAnimationFrame) {
                        AnimationIntervalRef = window.requestAnimationFrame(AnimationIntervaFunc);
                    } else {
                        AnimationIntervalRef = setInterval(AnimationIntervaFunc, 150);
                    }
                }
            }
        };

        /** Called when requestAnimationFrame (or its simulation) is answered. */
        var AnimationIntervaFunc = function () {
            var elems = AnimationCallbacks.ToArray();
            var elapsedTime = -1;
            var removeElems = new TSUI.Collections.List();
            var doRemove = false;
            for (var i = 0; i < elems.length; i++) {
                var callback = elems[i];
                if (callback.AnimationStartTime === -1) {
                    callback.AnimationStartTime = Date.now();
                }
                elapsedTime = Date.now() - callback.AnimationStartTime;
                callback.callback.call(elems[i].context, elapsedTime);
                if (callback.single) {
                    removeElems.Add(elems[i]);
                    doRemove = true;
                }
            }
            if (doRemove) {
                AnimationCallbacks.RemoveAll(removeElems);
            }

            if (window.requestAnimationFrame) {
                AnimationIntervalRef = window.requestAnimationFrame(AnimationIntervaFunc);
            } else {
                $("body").css({ zIndex: $("body").css("z-index") === "1" ? 0 : 1 });
            }
        };
        AnimationCallbacks.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(AnimationCallbacks_Modified, AnimationCallbacks));

        /** Provides functions for animation including preparing and destroying canvases for HTML2Canvas animation. */
        var AnimationHelper = (function () {
            function AnimationHelper() {
            }
            /** Takes an jQuery element (must be contained within the actual page DOM) and prepares it for HTML2Cnavas animation.
            It does not overlay the canvas on top of the original element but does attempt to position it so it can be faded in.
            Calls the callback once the canvas has been generated.
            @param elem The element to generate an image of.
            @param callback The callback to invoke once the canvas has been generated. Context is not retained.
            */
            AnimationHelper.PrepareHTML2CanvasForAnimation = function (elem, callback) {
                var elems = elem.find("*").not(".Hidden");
                elem.attr("data-html2canvas-visible", "");
                elems.attr("data-html2canvas-visible", "");

                html2canvas([elem[0]], {
                    onrendered: function (canvas) {
                        var newCanvas = $(canvas);

                        newCanvas.css({
                            position: "absolute",
                            top: elem.offset().top,
                            left: elem.offset().left,
                            zIndex: elem.css("z-index"),
                            display: "none"
                        });

                        $("body").append(newCanvas);
                        elem.removeAttr("data-html2canvas-visible");
                        elems.removeAttr("data-html2canvas-visible");

                        callback(newCanvas);
                    }
                });
            };

            /** Restores the original element after HTML2Canvas is no longer required.
            Fades in the element over the top of the canvas then quickly fades out the canvas from underneath.
            Canvas is then destroyed.
            @param elem The element (JQuery reference) to restore.
            @param canvas The canvas (JQuery reference) that is an image of the element. Must already be positioned on top of the element.
            */
            AnimationHelper.RestoreAfterAnimationHTML2Canvas = function (elem, canvas) {
                var zIndex = parseInt(canvas.css("z-index"), 10);
                canvas.css({ opacity: 1, zIndex: zIndex });
                elem.css({
                    display: "",
                    opacity: 0,
                    visibility: "visible",
                    zIndex: zIndex + 2
                }).animate({
                    opacity: 1
                }, 500, "swing", function () {
                    elem.css({
                        opacity: 1
                    });
                    canvas.animate({
                        opacity: 0
                    }, 500, "swing", function () {
                        canvas.css("display", "none");
                        canvas.remove();
                        elem.css({
                            zIndex: zIndex
                        });
                    });
                });
            };
            return AnimationHelper;
        })();
        Animation.AnimationHelper = AnimationHelper;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Animation/Animator.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="IAnimator.d.ts" />
    (function (Animation) {
        /** Basic implementation of an IAnimator. */
        var Animator = (function () {
            function Animator() {
            }
            /** Clears the values of 'visibility' and 'display' - does not force them to 'visible'.
            This implementation restores the control to its stylesheet state of visibility.
            @param control The control to show.
            @param callback The function to call when showing is complete.
            */
            Animator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                control.AnimationElement().css({
                    visibility: "",
                    display: ""
                });
                if (callback !== null) {
                    callback();
                }
            };

            /** Sets the value of 'visibility' to 'hidden' and clears the value of 'display' - does not set 'display:none'.
            This implementation does a basic hide of a control.
            @param control The control to hide.
            @param callback The function to call when hiding is complete.
            */
            Animator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                control.AnimationElement().css({
                    visibility: "hidden",
                    display: ""
                });
                if (callback !== null) {
                    callback();
                }
            };
            return Animator;
        })();
        Animation.Animator = Animator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Animation/AppWindowAnimator.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="Animation.ts" />
    /// <reference path="IAnimator.d.ts" />
    (function (Animation) {
        /** Animator for an AppWindow
        Note: Makes use if HTML2Canvas animation if specified.
        */
        var AppWindowAnimator = (function () {
            function AppWindowAnimator() {
                /** Private: The HTML2Canvas canvas element (as jQuery reference) to be animated. */
                this._CanvasElem = null;
            }
            /** Shows the control and invokes the callback (context not restored) after the animation is completed.
            Window is shrunk before being shown, then flown on from the right, delay then expanded and finally callback called.
            If HTML2Canvas is to be used and canvas has not been prepared, it is prepared in this call. Otherwise, jQuery animation is used. If HTML2Canvas is used, RestoreAfterAnimationHTML2Canvas is called.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            AppWindowAnimator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var useCanvasRender = this._EvaluateUseCanvasRender(control);
                var OK = false;
                if (useCanvasRender) {
                    OK = true;
                    try  {
                        var element = control.AnimationElement();
                        if (this._CanvasElem === null) {
                            var _this = this;
                            Animation.AnimationHelper.PrepareHTML2CanvasForAnimation(element, function (canvas) {
                                _this.DoHTML2CanvasShow(element, canvas, callback);
                            });
                        } else {
                            this.DoHTML2CanvasShow(element, this._CanvasElem, callback);
                        }
                    } catch (ex) {
                        OK = false;
                        AppWindowAnimator.UseCanvasRenderIfSensible = false;
                    }
                }
                if (!OK) {
                    var element = control.AnimationElement();
                    var startSize = TSUI.GetSize(control);
                    var startWidth = startSize.width;
                    var startHeight = startSize.height;
                    var startPos = TSUI.GetPosition(control);
                    var origCSSTop = ((startPos.top / element.parent().height()) * 100).toString() + "%";
                    var origCSSLeft = ((startPos.left / element.parent().width()) * 100).toString() + "%";

                    element.css({
                        width: startWidth - (startWidth * AppWindowAnimator.ShrinkAmount * 2),
                        height: startHeight - (startHeight * AppWindowAnimator.ShrinkAmount * 2),
                        left: element.parent().width() + 50,
                        visibility: "",
                        display: ""
                    });

                    element.css({
                        top: startPos.top + (startHeight * AppWindowAnimator.ShrinkAmount)
                    }).animate({
                        left: startPos.left + (startWidth * AppWindowAnimator.ShrinkAmount),
                        opacity: 1
                    }, AppWindowAnimator.FlyTime, AppWindowAnimator.AnimationEasing).delay(AppWindowAnimator.DelayTime).animate({
                        width: startWidth,
                        height: startHeight,
                        top: origCSSTop,
                        left: origCSSLeft,
                        visibility: "",
                        display: ""
                    }, AppWindowAnimator.ResizeTime, callback);
                }
            };

            /** Hides the control and invokes the callback (context not restored) after the animation is completed.
            Window is shrunk, delay, then flown off to the right, hidden properly, restored to original position & size and finally callback called.
            If HTML2Canvas is to be used and canvas has not been prepared, it is prepared in this call. Otherwise, jQuery animation is used.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            AppWindowAnimator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var useCanvasRender = this._EvaluateUseCanvasRender(control);
                var OK = false;
                if (useCanvasRender) {
                    OK = true;
                    try  {
                        var element = control.AnimationElement();
                        if (this._CanvasElem === null) {
                            var _this = this;
                            Animation.AnimationHelper.PrepareHTML2CanvasForAnimation(element, function (canvas) {
                                _this.DoHTML2CanvasHide(element, canvas, callback);
                            });
                        } else {
                            this.DoHTML2CanvasHide(element, this._CanvasElem, callback);
                        }
                    } catch (ex) {
                        OK = false;
                        AppWindowAnimator.UseCanvasRenderIfSensible = false;
                    }
                }
                if (!OK) {
                    var element = control.AnimationElement();
                    var startSize = TSUI.GetSize(control);
                    var startWidth = startSize.width;
                    var startHeight = startSize.height;
                    var startPos = TSUI.GetPosition(control);

                    element.animate({
                        width: startWidth - (startWidth * AppWindowAnimator.ShrinkAmount * 2),
                        height: startHeight - (startHeight * AppWindowAnimator.ShrinkAmount * 2),
                        top: startPos.top + (startHeight * AppWindowAnimator.ShrinkAmount),
                        left: startPos.left + (startWidth * AppWindowAnimator.ShrinkAmount)
                    }, AppWindowAnimator.ResizeTime).delay(AppWindowAnimator.DelayTime).animate({
                        left: element.parent().width() + 50,
                        opacity: 0
                    }, AppWindowAnimator.FlyTime, AppWindowAnimator.AnimationEasing, function () {
                        element.css({
                            width: startWidth,
                            height: startHeight,
                            top: startPos.top,
                            left: startPos.left,
                            display: "",
                            visibility: "hidden"
                        });

                        if (callback) {
                            callback();
                        }
                    });
                }
            };

            /** Animates the passed canvas and handles switching between the canvas and the element. For more details see Show.
            @param element The element to "animate" - should already prepared using HTML2Canvas.
            @param canvas The prepared HTML2Canvas canvas element to be animated.
            @param callback The callback to invoke after animation has completed.
            */
            AppWindowAnimator.prototype.DoHTML2CanvasShow = function (element, canvas, callback) {
                var startWidth = parseInt(canvas.css("width"), 10);
                var startHeight = parseInt(canvas.css("height"), 10);
                var startPos = {
                    top: parseInt(canvas.css("top"), 10),
                    left: parseInt(canvas.css("left"), 10)
                };
                var _this = this;

                canvas.css({
                    width: startWidth - (startWidth * AppWindowAnimator.ShrinkAmount * 2),
                    height: startHeight - (startHeight * AppWindowAnimator.ShrinkAmount * 2),
                    left: element.parent().width() + 50,
                    top: startPos.top + (startHeight * AppWindowAnimator.ShrinkAmount),
                    opacity: 0,
                    visibility: "",
                    display: ""
                }).animate({
                    left: startPos.left + (startWidth * AppWindowAnimator.ShrinkAmount),
                    opacity: 1
                }, AppWindowAnimator.FlyTime, AppWindowAnimator.AnimationEasing).delay(AppWindowAnimator.DelayTime).animate({
                    width: startWidth,
                    height: startHeight,
                    top: startPos.top,
                    left: startPos.left,
                    visibility: "",
                    display: ""
                }, AppWindowAnimator.ResizeTime, function () {
                    Animation.AnimationHelper.RestoreAfterAnimationHTML2Canvas(element, canvas);

                    _this._CanvasElem = null;

                    if (callback !== null) {
                        callback();
                    }
                });
            };

            /** Animates the passed canvas and handles switching between the canvas and the element. For more details see Show.
            @param element The element to "animate" - should already prepared using HTML2Canvas.
            @param canvas The prepared HTML2Canvas canvas element to be animated.
            @param callback The callback to invoke after animation has completed.
            */
            AppWindowAnimator.prototype.DoHTML2CanvasHide = function (element, canvas, callback) {
                var startWidth = parseInt(canvas.css("width"), 10);
                var startHeight = parseInt(canvas.css("height"), 10);
                var startPos = {
                    top: parseInt(canvas.css("top"), 10),
                    left: parseInt(canvas.css("left"), 10)
                };
                canvas.css("display", "block");
                element.css("display", "none");

                canvas.animate({
                    width: startWidth - (startWidth * AppWindowAnimator.ShrinkAmount * 2),
                    height: startHeight - (startHeight * AppWindowAnimator.ShrinkAmount * 2),
                    top: startPos.top + (startHeight * AppWindowAnimator.ShrinkAmount),
                    left: startPos.left + (startWidth * AppWindowAnimator.ShrinkAmount)
                }, AppWindowAnimator.ResizeTime).delay(AppWindowAnimator.DelayTime).animate({
                    left: element.parent().width() + 50,
                    opacity: 0
                }, AppWindowAnimator.FlyTime, AppWindowAnimator.AnimationEasing, function () {
                    canvas.remove();
                    element.css({
                        width: startWidth,
                        height: startHeight,
                        top: startPos.top,
                        left: startPos.left,
                        display: "",
                        visibility: "hidden"
                    });

                    if (callback) {
                        callback();
                    }
                });
            };

            /** Determines whether HTML2Canvas should be used to animate specified control (i.e. window) - takes into account UseCanvasRenderIfSensible.
            @param control The control (i.e. window) to determine whether to animate using HTML2Canvas.
            */
            AppWindowAnimator.prototype._EvaluateUseCanvasRender = function (control) {
                var use = AppWindowAnimator.UseCanvasRenderIfSensible;

                if (use) {
                    var elem = control.AnimationElement();
                    use = elem.width() * elem.height() > 240000;
                    var children = elem.find("*");
                    if (use) {
                        use = children.length > 15;
                    } else {
                        use = children.length > 50;
                    }
                }

                return use;
            };

            /** Prepares a window with HTML2Canvas for animation without actually showing the canvas. Allows window to be prepared for animation then switched smoothly with another window. Preparation can take up to 30 seconds in older/slower browsers or on slow hardware. Use callback to wait for preparation to complete.
            @param control The control (i.e. window) to prepare
            @param callback The callback to invoke after preparation has completed.
            */
            AppWindowAnimator.prototype.PrepareHTML2CanvasForAnimation = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                if (this._EvaluateUseCanvasRender(control)) {
                    try  {
                        var _this = this;
                        _this._CanvasElem = null;
                        var elem = control.AnimationElement();
                        Animation.AnimationHelper.PrepareHTML2CanvasForAnimation(elem, function (canvas) {
                            _this._CanvasElem = canvas;

                            if (callback) {
                                callback();
                            }
                        });
                    } catch (ex) {
                        AppWindowAnimator.UseCanvasRenderIfSensible = false;
                        _this._CanvasElem = null;

                        if (callback) {
                            callback();
                        }
                    }
                } else {
                    if (callback) {
                        callback();
                    }
                }
            };
            AppWindowAnimator.FlyTime = 500;

            AppWindowAnimator.ResizeTime = 100;

            AppWindowAnimator.DelayTime = 50;

            AppWindowAnimator.ShrinkAmount = 0.01;

            AppWindowAnimator.AnimationEasing = "easeOutCubic";

            AppWindowAnimator.UseCanvasRenderIfSensible = false;
            return AppWindowAnimator;
        })();
        Animation.AppWindowAnimator = AppWindowAnimator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Animation/ExpandableAnimator.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../UI/Interfaces/IExpandable.d.ts" />
    /// <reference path="IAnimator.d.ts" />
    (function (Animation) {
        /** Animator for an Expandable. */
        var ExpandableAnimator = (function () {
            function ExpandableAnimator() {
            }
            /** Expands the main body of the expandable to the correct (calculated) height.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            ExpandableAnimator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var height = control.ContentPanel.Top().Value + control.ContentPanel.Height().Value + 20;

                control.AnimationElement().stop(true, false);
                control.AnimationElement().animate({
                    height: height
                }, ExpandableAnimator.AnimationTime, ExpandableAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };

            /** Collapses the main body of the expandable to the correct (calculated) height i.e. just the title bar showing.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            ExpandableAnimator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                control.AnimationElement().animate({
                    height: control.MainTitleBar.ActualHeight()
                }, ExpandableAnimator.AnimationTime, ExpandableAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            ExpandableAnimator.AnimationTime = 450;

            ExpandableAnimator.AnimationEasing = "easeOutQuad";
            return ExpandableAnimator;
        })();
        Animation.ExpandableAnimator = ExpandableAnimator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Animation/FadeAnimator.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="IAnimator.d.ts" />
    (function (Animation) {
        /** Generic fade animator for any control.
        Note: Not guaranteed to work in all situations. Does not force visibility if style sheet specifies hidden.
        */
        var FadeAnimator = (function () {
            function FadeAnimator() {
            }
            /** Fades the control in. Clears CSS 'display' and 'visibility' (does not force show).
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            FadeAnimator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                control.AnimationElement().stop(true, true).css({
                    display: "",
                    visibility: "",
                    opacity: 0
                });
                control.AnimationElement().animate({
                    opacity: 1
                }, FadeAnimator.AnimationTime, FadeAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };

            /** Fades the control out. Sets CSS 'visibility:hidden' and 'opacity:1' after animation is complete (does not force set 'display:none').
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            FadeAnimator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                control.AnimationElement().stop(true, true);
                control.AnimationElement().animate({
                    opacity: 0
                }, FadeAnimator.AnimationTime, FadeAnimator.AnimationEasing, function () {
                    $(this).css({
                        visibility: "hidden",
                        opacity: 1
                    });

                    if (callback !== null) {
                        callback();
                    }
                });
            };
            FadeAnimator.AnimationTime = 300;

            FadeAnimator.AnimationEasing = "swing";
            return FadeAnimator;
        })();
        Animation.FadeAnimator = FadeAnimator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Animation/NotificationAnimator.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="IAnimator.d.ts" />
    (function (Animation) {
        /** Animator for a Notification. */
        var NotificationAnimator = (function () {
            function NotificationAnimator() {
            }
            /** Slides the notification in from the right - does not set "top". Clears CSS 'visibility' and 'display' values.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            NotificationAnimator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var element = control.AnimationElement();
                element.stop(true, true);
                var startRight = element.css("right");
                element.css({
                    right: -element.outerWidth(),
                    visibility: "",
                    display: ""
                }).animate({
                    right: startRight
                }, NotificationAnimator.AnimationTime, NotificationAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };

            /** Slides the notification off to the right - does not set "top". Sets CSS 'visibility:hidden' and 'display:none'; Restores CSS 'right'.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            NotificationAnimator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var element = control.AnimationElement();
                element.stop(true, true);
                var startRight = element.css("right");
                element.animate({
                    right: -element.outerWidth()
                }, NotificationAnimator.AnimationTime, NotificationAnimator.AnimationEasing, function () {
                    element.css({
                        visibility: "hidden",
                        display: "none",
                        right: startRight
                    });

                    if (callback !== null) {
                        callback();
                    }
                });
            };
            NotificationAnimator.AnimationTime = 1000;

            NotificationAnimator.AnimationEasing = "linear";
            return NotificationAnimator;
        })();
        Animation.NotificationAnimator = NotificationAnimator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Animation/NotificationRestackAnimator.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="IAnimator.d.ts" />
    (function (Animation) {
        /** Animator for animating restack of notifications.
        Note: Show/Hide are empty methods.
        */
        var NotificationRestackAnimator = (function () {
            function NotificationRestackAnimator() {
            }
            /** This method is empty. */
            NotificationRestackAnimator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
            };

            /** This method is empty. */
            NotificationRestackAnimator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
            };

            /** Animates the control to slide it up/down to new bottom (i.e. animates restack).
            @param control The control to animate.
            @param newBottom The new CSS 'bottom' value.
            @param callback The callback to invoke after animation has completed.
            */
            NotificationRestackAnimator.prototype.AnimateRestack = function (control, newBottom, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var element = control.AnimationElement();
                element.animate({
                    bottom: newBottom
                }, NotificationRestackAnimator.AnimationTime, NotificationRestackAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            NotificationRestackAnimator.AnimationTime = 1000;

            NotificationRestackAnimator.AnimationEasing = "easeInCubic";
            return NotificationRestackAnimator;
        })();
        Animation.NotificationRestackAnimator = NotificationRestackAnimator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Animation/PageWindowAnimator.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../UI/UI Static.ts" />
    /// <reference path="IAnimator.d.ts" />
    (function (Animation) {
        /** Animator for a StaticPageWindow. */
        var PageWindowAnimator = (function () {
            function PageWindowAnimator() {
            }
            /** Fades in the page window and the PageWindow_DisableOverlay. Clears CSS 'display' and 'visibility'
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            PageWindowAnimator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                $(".PageWindow_DisableOverlay").css({
                    display: "block",
                    opacity: 0,
                    zIndex: (TSUI.UI.OpenWindows * 10) - 1
                }).animate({
                    opacity: 0.6
                }, 200, "swing", function () {
                });

                var oldOpacity = control.GetStyle("opacity");
                control.AnimationElement().stop(true, true);
                control.AnimationElement().css({
                    opacity: 0,
                    visibility: "",
                    display: ""
                }).animate({
                    opacity: oldOpacity
                }, PageWindowAnimator.AnimationTime, PageWindowAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };

            /** Fades out the page window and the PageWindow_DisableOverlay. Sets CSS 'display:none' and 'visibility:hidden'
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            PageWindowAnimator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                $(".PageWindow_DisableOverlay").animate({
                    opacity: 0
                }, 200, "swing", function () {
                    $(this).css({
                        display: ""
                    });
                });

                control.AnimationElement().stop(true, true);
                control.AnimationElement().animate({
                    opacity: 0
                }, PageWindowAnimator.AnimationTime, PageWindowAnimator.AnimationEasing, function () {
                    control.AnimationElement().css({
                        visibility: "hidden",
                        opacity: 1,
                        display: "none"
                    });
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            PageWindowAnimator.AnimationTime = 250;

            PageWindowAnimator.AnimationEasing = "easeOutQuad";
            return PageWindowAnimator;
        })();
        Animation.PageWindowAnimator = PageWindowAnimator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Animation/SelectionWindowAnimator.js
var TSUI;
(function (TSUI) {
    /*
    Copyright © Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../UI/UI Static.ts" />
    /// <reference path="IAnimator.d.ts" />
    (function (Animation) {
        /** Animator for a SelectionWindow. */
        var SelectionWindowAnimator = (function () {
            function SelectionWindowAnimator() {
            }
            /** Fades in the selection window and the SelectionWindow_DisableOverlay. Clears CSS 'display' and 'visibility'
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            SelectionWindowAnimator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                $(".SelectionWindow_DisableOverlay").css({
                    display: "block",
                    opacity: 0,
                    zIndex: (TSUI.UI.OpenWindows * 10) - 1
                }).animate({
                    opacity: 0.6
                }, 200, "swing", function () {
                });

                var oldOpacity = control.GetStyle("opacity");
                control.AnimationElement().stop(true, true);
                control.AnimationElement().css({
                    opacity: 0,
                    visibility: "",
                    display: ""
                }).animate({
                    opacity: oldOpacity
                }, SelectionWindowAnimator.AnimationTime, SelectionWindowAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };

            /** Fades out the selection window and the SelectionWindow_DisableOverlay. Sets CSS 'display:none' and 'visibility:hidden'
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            SelectionWindowAnimator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                $(".SelectionWindow_DisableOverlay").animate({
                    opacity: 0
                }, 200, "swing", function () {
                    $(this).css({
                        display: ""
                    });
                });

                control.AnimationElement().stop(true, true);
                control.AnimationElement().animate({
                    opacity: 0
                }, SelectionWindowAnimator.AnimationTime, SelectionWindowAnimator.AnimationEasing, function () {
                    control.AnimationElement().css({
                        visibility: "hidden",
                        opacity: 1,
                        display: "none"
                    });
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            SelectionWindowAnimator.AnimationTime = 250;

            SelectionWindowAnimator.AnimationEasing = "easeOutQuad";
            return SelectionWindowAnimator;
        })();
        Animation.SelectionWindowAnimator = SelectionWindowAnimator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Logging/Enums/RecoveryModes.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Sep 5 13:47 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 5/Sep/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (Logging) {
        /** The list of modes used when recovering from an error. */
        (function (RecoveryModes) {
            RecoveryModes[RecoveryModes["Abort"] = 0] = "Abort";
            RecoveryModes[RecoveryModes["Retry"] = 1] = "Retry";
            RecoveryModes[RecoveryModes["Continue"] = 2] = "Continue";
            RecoveryModes[RecoveryModes["Continue_SkipSection"] = 3] = "Continue_SkipSection";
        })(Logging.RecoveryModes || (Logging.RecoveryModes = {}));
        var RecoveryModes = Logging.RecoveryModes;
    })(TSUI.Logging || (TSUI.Logging = {}));
    var Logging = TSUI.Logging;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Logging/Enums/TraceTypes.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Sep 5 13:47 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 5/Sep/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (Logging) {
        /** The internal list of trace types for logs. */
        (function (TraceTypes) {
            TraceTypes[TraceTypes["LOG"] = 0] = "LOG";
            TraceTypes[TraceTypes["COMMON"] = 1] = "COMMON";

            TraceTypes[TraceTypes["LOGIC_TRACE"] = 2] = "LOGIC_TRACE";
            TraceTypes[TraceTypes["DATA_TRACE"] = 3] = "DATA_TRACE";
            TraceTypes[TraceTypes["ERROR_TRACE"] = 4] = "ERROR_TRACE";
        })(Logging.TraceTypes || (Logging.TraceTypes = {}));
        var TraceTypes = Logging.TraceTypes;
    })(TSUI.Logging || (TSUI.Logging = {}));
    var Logging = TSUI.Logging;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/Logging/Classes/Logger.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Sep 5 13:47 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 5/Sep/13 : Initial version.
    - 6/Sep/13 : Added documentation and global logger.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/ILogger.d.ts" />
    /// <reference path="../../Events/Classes/Events.ts" />
    (function (Logging) {
        /** Main implementation of an ILogger for TypeScript UI. Outputs logs to the browser's console. */
        var Logger = (function () {
            function Logger() {
                /** Whether the logger is enabled or not. */
                this.Enabled = true;
                /** The array of logs for this logger. */
                this.Logs = [];
                /** The types of log to actually output to the console. Turn these on/off to filter logs. */
                this.TraceTypesToShow = [
                    Logging.TraceTypes[Logging.TraceTypes.LOG],
                    Logging.TraceTypes[Logging.TraceTypes.COMMON],
                    Logging.TraceTypes[Logging.TraceTypes.DATA_TRACE],
                    Logging.TraceTypes[Logging.TraceTypes.ERROR_TRACE],
                    Logging.TraceTypes[Logging.TraceTypes.LOGIC_TRACE]
                ];
                /** Text changed event for when a log is added. Sender object is the added log (not a control). */
                this.OnLog = new TSUI.Events.TextChangeEvent();
            }
            /** Add the specified log to this logger and outputs it to the console. */
            Logger.prototype.Log = function (log) {
                if (this.Enabled) {
                    this.Logs.push(log);

                    if (this.TraceTypesToShow.indexOf(log.TraceType) > -1) {
                        var text = this._buildLog(log);
                        if (log.ErrorTrace) {
                            console.error(text);
                        } else if (log.DataTrace) {
                            console.debug(text);
                        } else {
                            console.log(text);
                        }
                    }

                    this.OnLog.Invoke(new TSUI.Events.TextChangeEventArgs(log, null));
                }
            };

            /** Gets the text for all the logs in the logger. */
            Logger.prototype.GetFullLog = function () {
                var result = "";

                for (var i = this.Logs.length - 1; i > -1; i--) {
                    var log = this.Logs[i];
                    if (this.TraceTypesToShow.indexOf(log.TraceType) > -1) {
                        result += this._buildLog(log);
                    }
                }

                return result;
            };

            /** Builds the text for the specified log. */
            Logger.prototype._buildLog = function (log) {
                //Log format:
                /*
                TRACE_TYPE      : MESSAGE_LINE_1
                MESSAGE_LINE_2
                
                ERROR_TYPE      : MESSAGE_LINE_1
                MESSAGE_LINE_2
                
                RECOVERY_MODE   : INFO_LINE_1
                INFO_LINE_2
                
                DATA_TYPE       : DATA_VALUE
                STACK TRACE     :
                ... ... ... ... ... ...
                ... ... ... ... ... ...
                ... ... ... ... ... ...
                
                --------------------------------------------
                */
                var tracePad = "                ";

                var logText = "\n";

                logText += TSUI.pad(log.TraceType, tracePad) + " : ";
                var lines = log.Message.split('\n');
                logText += lines[0] + "\n";
                for (var lineNum = 1; lineNum < lines.length; lineNum++) {
                    logText += tracePad + "   " + lines[lineNum].trim() + "\n";
                }

                if (log.ErrorTrace) {
                    logText += "\n";

                    logText += TSUI.pad(log.ErrorTrace.Type, tracePad) + " : ";
                    var lines = log.ErrorTrace.Message.split('\n');
                    logText += lines[0] + "\n";
                    for (var lineNum = 1; lineNum < lines.length; lineNum++) {
                        logText += tracePad + "   " + lines[lineNum] + "\n";
                    }

                    if (log.ErrorTrace.RecoveryInfo) {
                        logText += "\n";

                        logText += TSUI.pad(Logging.RecoveryModes[log.ErrorTrace.RecoveryInfo.Mode], tracePad) + " : ";
                        var lines = log.ErrorTrace.RecoveryInfo.Info.split('\n');
                        logText += lines[0] + "\n";
                        for (var lineNum = 1; lineNum < lines.length; lineNum++) {
                            logText += tracePad + "   " + lines[lineNum] + "\n";
                        }
                    }
                }

                if (log.DataTrace) {
                    logText += "\n";

                    logText += TSUI.pad(log.DataTrace.Type, tracePad) + " : ";
                    var lines = (log.DataTrace.Value + '').split('\n');
                    logText += lines[0] + "\n";
                    for (var lineNum = 1; lineNum < lines.length; lineNum++) {
                        logText += tracePad + "   " + lines[lineNum] + "\n";
                    }
                }

                if (log.StackTrace) {
                    logText += "\n";
                    logText += TSUI.pad("STACK TRACE", tracePad) + " : \n";
                    logText += log.StackTrace.trim();
                    logText += "\n";
                }

                logText += "\n";
                logText += "-------------------------------------------\n";

                return logText;
            };

            /** Writes a line to the console and adds a text-only log. */
            Logger.prototype.WriteLine = function (text) {
                console.log(text);
                this.Log({
                    Message: text,
                    TraceType: Logging.TraceTypes[Logging.TraceTypes.LOG]
                });
            };
            return Logger;
        })();
        Logging.Logger = Logger;

        /** The global logger for TypeScript UI. */
        var tsui_logger = new TSUI.Logging.Logger();
    })(TSUI.Logging || (TSUI.Logging = {}));
    var Logging = TSUI.Logging;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/CSSNumber.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (UI) {
        /** Represents a CSS number value e.g. 10px, 10% or 'auto'.
        Also provides static methods for converting from CSS string to CSSNumber.
        */
        var CSSNumber = (function () {
            /** Creates a new CSSNumber with specified value and units.
            @param Value The value of the number (irrelevant if auto is set - see auto param)
            @param Units OPTIONAL The units of the CSS number - px, % or em. Default: px. (Irrelevant if auto is set - see auto param)
            @param Auto OPTIONAL Whether the number has value of "auto"  - other parameters are ignored if set. Default: false
            */
            function CSSNumber(Value, Units, Auto) {
                if (typeof Units === "undefined") { Units = "px"; }
                if (typeof Auto === "undefined") { Auto = false; }
                this.Value = Value;
                this.Units = Units;
                this.Auto = Auto;
            }
            /** Converts a CSS string representation of a CSS Number to a CSS Number.
            @param value The CSS string representation of the number.
            @returns the new CSS Number.
            */
            CSSNumber.FromString = function (value) {
                if (value === "auto") {
                    return new CSSNumber(0, "", true);
                } else if (value === null || value.trim() === "") {
                    return new CSSNumber(0, "", true);
                } else {
                    var Value = parseInt(value, 10);
                    var Units = value.indexOf("%") > -1 ? "%" : (value.indexOf("em") > -1 ? "em" : "px");
                    return new CSSNumber(Value, Units);
                }
            };

            /** Returns value to ToString method. */
            CSSNumber.prototype.toString = function () {
                return this.ToString();
            };

            /** Returns the CSS string representation of the CSS number e.g. 10px, 10% or auto*/
            CSSNumber.prototype.ToString = function () {
                return this.Auto ? "auto" : this.Value.toString() + this.Units;
            };
            return CSSNumber;
        })();
        UI.CSSNumber = CSSNumber;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Enums/ProgressBarTypes.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (UI) {
        /** The types of progress bars.
        Note: To reverse direction, see IProgressBar.Reverse
        */
        (function (ProgressBarTypes) {
            /** A circular, clockwise progress bar */
            ProgressBarTypes[ProgressBarTypes["Circular"] = 0] = "Circular";

            /** A horizontal, left-to-right progress bar */
            ProgressBarTypes[ProgressBarTypes["Horizontal"] = 1] = "Horizontal";

            /** A vertical, top-to-bottom progress bar */
            ProgressBarTypes[ProgressBarTypes["Vertical"] = 2] = "Vertical";
        })(UI.ProgressBarTypes || (UI.ProgressBarTypes = {}));
        var ProgressBarTypes = UI.ProgressBarTypes;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Enums/ProgressSpinnerTypes.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (UI) {
        /** The types of progress spinners.
        Note: To reverse direction, see IProgressSpinner.Reverse
        */
        (function (ProgressSpinnerTypes) {
            /** A circular, clockwise progress spinner */
            ProgressSpinnerTypes[ProgressSpinnerTypes["Circular"] = 0] = "Circular";

            /** A horizontal, left-to-right progress spinner */
            ProgressSpinnerTypes[ProgressSpinnerTypes["Horizontal"] = 1] = "Horizontal";

            /** A vertical, top-to-bottom progress spinner */
            ProgressSpinnerTypes[ProgressSpinnerTypes["Vertical"] = 2] = "Vertical";
        })(UI.ProgressSpinnerTypes || (UI.ProgressSpinnerTypes = {}));
        var ProgressSpinnerTypes = UI.ProgressSpinnerTypes;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Enums/SplitterGrip_Orientations.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (UI) {
        /** The orientations of a splitter grip. */
        (function (SplitterGrip_Orientations) {
            /** Horizontal splitter grip */
            SplitterGrip_Orientations[SplitterGrip_Orientations["Horizontal"] = 0] = "Horizontal";

            /** Vertical splitter grip */
            SplitterGrip_Orientations[SplitterGrip_Orientations["Vertical"] = 1] = "Vertical";
        })(UI.SplitterGrip_Orientations || (UI.SplitterGrip_Orientations = {}));
        var SplitterGrip_Orientations = UI.SplitterGrip_Orientations;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Enums/StackPanelOrientations.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (UI) {
        /** The orientations of stacking in a stack panel. */
        (function (StackPanelOrientations) {
            /** Horizontally stack items i.e. in stack in columns */
            StackPanelOrientations[StackPanelOrientations["Horizontal"] = 0] = "Horizontal";

            /** Vertically stack items i.e. in stack in rows */
            StackPanelOrientations[StackPanelOrientations["Vertical"] = 1] = "Vertical";
        })(UI.StackPanelOrientations || (UI.StackPanelOrientations = {}));
        var StackPanelOrientations = UI.StackPanelOrientations;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Enums/TextAlignments.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (UI) {
        /** Text alignments */
        (function (TextAlignments) {
            /** Align text to the left. */
            TextAlignments[TextAlignments["Left"] = 0] = "Left";

            /** Align text to the right. */
            TextAlignments[TextAlignments["Right"] = 1] = "Right";
        })(UI.TextAlignments || (UI.TextAlignments = {}));
        var TextAlignments = UI.TextAlignments;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Enums/TileBackgroundPositions.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (UI) {
        /** The positions for a Tile Background. (Used in animation) */
        (function (TileBackgroundPositions) {
            /** Position the background off the tile to the top i.e. CSS top:-100%, left:0% */
            TileBackgroundPositions[TileBackgroundPositions["OffTop"] = 0] = "OffTop";

            /** Position the background inside the tile to the top-left i.e. CSS top:0%, left:0% */
            TileBackgroundPositions[TileBackgroundPositions["In"] = 1] = "In";

            /** Position the background off the tile to the bottom i.e. CSS top:100%, left:0% */
            TileBackgroundPositions[TileBackgroundPositions["OffBottom"] = 2] = "OffBottom";
        })(UI.TileBackgroundPositions || (UI.TileBackgroundPositions = {}));
        var TileBackgroundPositions = UI.TileBackgroundPositions;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Enums/TileSizes.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (UI) {
        /** The sizes of tiles (as specified by Microsoft) */
        (function (TileSizes) {
            TileSizes[TileSizes["Small"] = 0] = "Small";
            TileSizes[TileSizes["Medium"] = 1] = "Medium";
            TileSizes[TileSizes["Large"] = 2] = "Large";
            TileSizes[TileSizes["LargeSquare"] = 3] = "LargeSquare";
        })(UI.TileSizes || (UI.TileSizes = {}));
        var TileSizes = UI.TileSizes;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Enums/TileTypes.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (UI) {
        /** The types of tile (as specified by Microsoft) */
        (function (TileTypes) {
            TileTypes[TileTypes["Flip"] = 0] = "Flip";
            TileTypes[TileTypes["Iconic"] = 1] = "Iconic";
            TileTypes[TileTypes["Cycle"] = 2] = "Cycle";
        })(UI.TileTypes || (UI.TileTypes = {}));
        var TileTypes = UI.TileTypes;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Enums/TrackBarModes.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (UI) {
        /** The different modes of track bars. */
        (function (TrackBarModes) {
            /** Discrete mode i.e. snap the handle to discrete values (see ITrackBar.Min, ITrackBar.Max, ITrackBar.Divisions) */
            TrackBarModes[TrackBarModes["Discrete"] = 0] = "Discrete";

            /** Continuous mode i.e. allow the handle to be dragged to any value (inc. decimals) between min and max values.*/
            TrackBarModes[TrackBarModes["Continuous"] = 1] = "Continuous";
        })(UI.TrackBarModes || (UI.TrackBarModes = {}));
        var TrackBarModes = UI.TrackBarModes;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Control.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Events/Classes/Events.ts" />
    /// <reference path="../../Collections/Collections_BuildRefs.d.ts" />
    /// <reference path="../CSSNumber.ts" />
    /// <reference path="../Interfaces/IControl.d.ts" />
    /// <reference path="../../Animation/FadeAnimator.ts" />
    /// <reference path="../UI Static.ts" />
    /// <reference path="../../Animation/Animation.ts" />
    /// <reference path="../../Animation/IAnimator.d.ts" />
    /// <reference path="../../../Definitions/jquery.d.ts" />
    (function (UI) {
        var __UIDGenerator = 0;
        var Control = (function () {
            function Control() {
                this.__UID = __UIDGenerator++;
                this._rootElement = null;
                this.OnClick = new TSUI.Events.ClickEvent();
                this.OnMouseDown = new TSUI.Events.MouseDownEvent();
                this.OnMouseUp = new TSUI.Events.MouseUpEvent();
                this.OnMouseMove = new TSUI.Events.MouseMoveEvent();
                this.OnResize = new TSUI.Events.ResizeEvent();
                this.OnMove = new TSUI.Events.MoveEvent();
                this.OnShow = new TSUI.Events.ShowEvent();
                this.OnHide = new TSUI.Events.HideEvent();
                this.OnFocus = new TSUI.Events.FocusEvent();
                this.OnBlur = new TSUI.Events.BlurEvent();
                this.OnKeyDown = new TSUI.Events.KeyDownEvent();
                this.OnKeyPress = new TSUI.Events.KeyPressEvent();
                this.OnKeyUp = new TSUI.Events.KeyUpEvent();
                this.TargetDocumentFor_MouseUp = true;
                this.TargetDocumentFor_MouseMove = true;
                this.Children = new TSUI.Collections.List();
                this._Enabled = true;
                this.OptimiseConstructForGraphics = false;
                this._OnClickAttached = false;
                this._OnMouseDownAttached = false;
                this._OnMouseUpAttached = false;
                this._OnMouseUp_GlobalHandler = null;
                this._OnMouseMoveAttached = false;
                this._OnMouseMove_GlobalHandler = null;
                this._OnResizeAttached = false;
                this._OnMoveAttached = false;
                this._OnKeyPressAttached = false;
                this._OnKeyUpAttached = false;
                this._This_Resized_ChainHandler_Timeout = -1;
                this._This_Moved_ChainHandler_Timeout = -1;
                this.DOMConstructed = false;
                this._parentVisible = true;
                this._WasSelectionEnabled = false;
                this._Focusable = false;
                this._SelectionEnabled = false;
                this._TabIndex = 0;
                /** The collection containing all the binding groups (and thus bindings) for this control. */
                this.Bindings = new TSUI.Data.BindingCollection();
                this.OnClick.OnHandlerAttachedContext = this.OnClick.OnHandlerDettachedContext = this;
                this.OnClick.OnHandlerAttached = this.OnClick.OnHandlerDettached = this._OnOnClickChanged;
                this.OnMouseDown.OnHandlerAttachedContext = this.OnMouseDown.OnHandlerDettachedContext = this;
                this.OnMouseDown.OnHandlerAttached = this.OnMouseDown.OnHandlerDettached = this._OnOnMouseDownChanged;
                this.OnMouseUp.OnHandlerAttachedContext = this.OnMouseUp.OnHandlerDettachedContext = this;
                this.OnMouseUp.OnHandlerAttached = this.OnMouseUp.OnHandlerDettached = this._OnOnMouseUpChanged;
                this.OnMouseMove.OnHandlerAttachedContext = this.OnMouseMove.OnHandlerDettachedContext = this;
                this.OnMouseMove.OnHandlerAttached = this.OnMouseMove.OnHandlerDettached = this._OnOnMouseMoveChanged;
                this.OnResize.OnHandlerAttachedContext = this.OnResize.OnHandlerDettachedContext = this;
                this.OnResize.OnHandlerAttached = this.OnResize.OnHandlerDettached = this._OnOnResizeChanged;
                this.OnMove.OnHandlerAttachedContext = this.OnMove.OnHandlerDettachedContext = this;
                this.OnMove.OnHandlerAttached = this.OnMove.OnHandlerDettached = this._OnOnMoveChanged;
                this.OnKeyPress.OnHandlerAttachedContext = this.OnKeyPress.OnHandlerDettachedContext = this;
                this.OnKeyPress.OnHandlerAttached = this.OnKeyPress.OnHandlerDettached = this._OnOnKeyPressChanged;
                this.OnKeyUp.OnHandlerAttachedContext = this.OnKeyUp.OnHandlerDettachedContext = this;
                this.OnKeyUp.OnHandlerAttached = this.OnKeyUp.OnHandlerDettached = this._OnOnKeyUpChanged;

                this.OnResize.Attach(new TSUI.Events.ResizeEventHandler(this._This_Resized_ChainHandler, this));
                this.OnMove.Attach(new TSUI.Events.MoveEventHandler(this._This_Moved_ChainHandler, this));

                this._rootElement = $("<div class=\"Control\">");
                this.DisableSelection();

                this.Children.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._OnChildren_Modified, this));

                this.DefaultGroup = new TSUI.Data.BindingGroup();
                this.Bindings.BindingGroups.Add(this.DefaultGroup);
            }
            Control.prototype.AnimationElement = function () {
                return this._rootElement;
            };

            Control.prototype._RestoreThis = function (jqEvent) {
                return jqEvent.data._callback.call(jqEvent.data._this, jqEvent);
            };

            Control.prototype._OnOnClickChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnClick.Handlers.length > 0 && !this._OnClickAttached) {
                        this._OnClickAttached = true;
                        this._rootElement.on(Control.OnClickEventName, { _this: this, _callback: this._OnClick }, this._RestoreThis);
                    } else if (this._OnClickAttached) {
                        this._OnClickAttached = false;
                        this._rootElement.off(Control.OnClickEventName, this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnClick = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnClick.Invoke(new TSUI.Events.ClickEventArgs(this, jqEvent));
                }
            };

            Control.prototype._OnOnMouseDownChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnMouseDown.Handlers.length > 0 && !this._OnMouseDownAttached) {
                        this._OnMouseDownAttached = true;
                        this._rootElement.on(Control.OnMouseDownEventName, { _this: this, _callback: this._OnMouseDown }, this._RestoreThis);
                    } else if (this._OnMouseDownAttached) {
                        this._OnMouseDownAttached = false;
                        this._rootElement.off(Control.OnMouseDownEventName, this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnMouseDown = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    jqEvent = TSUI.standardiseEvent(jqEvent);
                    this.OnMouseDown.Invoke(new TSUI.Events.MouseDownEventArgs(this, jqEvent));
                }
            };

            Control.prototype._OnOnMouseUpChanged = function () {
                if (this.DOMConstructed) {
                    if (this.TargetDocumentFor_MouseUp) {
                        if (this.OnMouseUp.Handlers.length > 0 && !this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = true;
                            this._OnMouseUp_GlobalHandler = new TSUI.Events.MouseUpEventHandler(function (args) {
                                this.OnMouseUp.Invoke(new TSUI.Events.MouseUpEventArgs(this, args.jqEvent));
                            }, this);
                            UI.Global_MouseUpEvent.Attach(this._OnMouseUp_GlobalHandler);
                        } else if (this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = false;
                            UI.Global_MouseUpEvent.Detach(this._OnMouseUp_GlobalHandler);
                        }
                    } else {
                        if (this.OnMouseUp.Handlers.length > 0 && !this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = true;
                            this._rootElement.on(Control.OnMouseUpEventName, { _this: this, _callback: this._OnMouseUp }, this._RestoreThis);
                        } else if (this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = false;
                            this._rootElement.off(Control.OnMouseUpEventName, this._RestoreThis);
                        }
                    }
                }
            };
            Control.prototype._OnMouseUp = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnMouseUp.Invoke(new TSUI.Events.MouseUpEventArgs(this, jqEvent));
                }
            };

            Control.prototype._OnOnMouseMoveChanged = function () {
                if (this.DOMConstructed) {
                    if (this.TargetDocumentFor_MouseMove) {
                        if (this.OnMouseMove.Handlers.length > 0 && !this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = true;
                            this._OnMouseMove_GlobalHandler = new TSUI.Events.MouseMoveEventHandler(function (args) {
                                this.OnMouseMove.Invoke(new TSUI.Events.MouseMoveEventArgs(this, args.jqEvent));
                            }, this);
                            UI.Global_MouseMoveEvent.Attach(this._OnMouseMove_GlobalHandler);
                        } else if (this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = false;
                            UI.Global_MouseMoveEvent.Detach(this._OnMouseMove_GlobalHandler);
                        }
                    } else {
                        if (this.OnMouseMove.Handlers.length > 0 && !this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = true;
                            this._rootElement.on(Control.OnMouseMoveEventName, { _this: this, _callback: this._OnMouseMove }, this._RestoreThis);
                        } else if (this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = false;
                            this._rootElement.off(Control.OnMouseMoveEventName, this._RestoreThis);
                        }
                    }
                }
            };
            Control.prototype._OnMouseMove = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnMouseMove.Invoke(new TSUI.Events.MouseMoveEventArgs(this, jqEvent));
                }
            };

            Control.prototype._OnOnResizeChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnResize.Handlers.length > 0 && !this._OnResizeAttached) {
                        this._OnResizeAttached = true;
                        $(window).on("resize", { _this: this, _callback: this._OnResize }, this._RestoreThis);
                    } else if (this._OnResizeAttached) {
                        this._OnResizeAttached = false;
                        $(window).off("resize", this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnResize = function (jqEvent) {
                this.OnResize.Invoke(new TSUI.Events.ResizeEventArgs(this, jqEvent));
            };

            Control.prototype._OnOnMoveChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnMove.Handlers.length > 0 && !this._OnMoveAttached) {
                        this._OnMoveAttached = true;
                        $(window).on("resize", { _this: this, _callback: this._OnMove }, this._RestoreThis);
                    } else if (this._OnMoveAttached) {
                        this._OnMoveAttached = false;
                        $(window).off("resize", this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnMove = function (jqEvent) {
                this.OnMove.Invoke(new TSUI.Events.MoveEventArgs(this, jqEvent));
            };

            Control.prototype._OnOnKeyPressChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnKeyPress.Handlers.length > 0 && !this._OnKeyPressAttached) {
                        this._OnKeyPressAttached = true;
                        this._rootElement.on("keypress", { _this: this, _callback: this._OnKeyPress }, this._RestoreThis);
                    } else if (this._OnKeyPressAttached) {
                        this._OnKeyPressAttached = false;
                        this._rootElement.off("keypress", this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnKeyPress = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnKeyPress.Invoke(new TSUI.Events.KeyPressEventArgs(this, jqEvent));
                }
            };

            Control.prototype._OnOnKeyUpChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnKeyUp.Handlers.length > 0 && !this._OnKeyUpAttached) {
                        this._OnKeyUpAttached = true;
                        this._rootElement.on("keyup", { _this: this, _callback: this._OnKeyUp }, this._RestoreThis);
                    } else if (this._OnKeyUpAttached) {
                        this._OnKeyUpAttached = false;
                        this._rootElement.off("keyup", this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnKeyUp = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnKeyUp.Invoke(new TSUI.Events.KeyUpEventArgs(this, jqEvent));
                }
            };

            Control.prototype._OnFocus = function (jqEvent) {
                if (!this.ActuallyEnabled() || !this.ActuallyVisible()) {
                    TSUI.StopEvent(jqEvent);
                    this.Blur();
                } else if (!this.Focusable()) {
                    this.Blur();
                } else {
                    UI.CurrentFocusedControl = this;
                    this.AddClass("Focused");
                    if (UI.JustUsedTabKeyTime + 50 > Date.now()) {
                        this.AddClass("TabFocused");
                    }
                    this.OnFocus.Invoke(new TSUI.Events.FocusEventArgs(this, jqEvent));
                }
            };
            Control.prototype._OnBlur = function (jqEvent) {
                if (UI.CurrentFocusedControl == this) {
                    UI.CurrentFocusedControl = null;
                }
                this.RemoveClass("Focused");
                this.RemoveClass("TabFocused");
                this.OnBlur.Invoke(new TSUI.Events.BlurEventArgs(this, jqEvent));
            };
            Control.prototype._OnKeyDown = function (jqEvent) {
                if (jqEvent.keyCode === 13) {
                    TSUI.StopEvent(jqEvent);
                    this.InvokeDefaultAction();
                } else {
                    UI.OnKeyDown_Global_First(jqEvent);
                    this.OnKeyDown.Invoke(new TSUI.Events.KeyDownEventArgs(this, jqEvent));
                    return UI.OnKeyDown_Global_Last(jqEvent);
                }
            };

            Control.prototype._OnChildren_Modified = function (eventArgs) {
                if (this.DOMConstructed) {
                    switch (eventArgs.Modification) {
                        case TSUI.Events.CollectionModifications.Add:
                            for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                                eventArgs.ModifiedElements.ElementAt(i).ConstructDOM(this._rootElement);
                            }
                            break;
                        case TSUI.Events.CollectionModifications.Remove:
                            for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                                eventArgs.ModifiedElements.ElementAt(i).DestroyDOM();
                            }
                            break;
                        case TSUI.Events.CollectionModifications.Reorder:
                            for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                                var cObj = eventArgs.ModifiedElements.ElementAt(i);
                                cObj.DestroyDOM();
                                cObj.ConstructDOM(this._rootElement);
                            }
                            break;
                    }
                }
            };

            Control.prototype._This_Resized_ChainHandler = function (eventArgs) {
                if (this._This_Resized_ChainHandler_Timeout === -1) {
                    var _this = this;
                    this._This_Resized_ChainHandler_Timeout = setTimeout(function () {
                        for (var i = 0; i < _this.Children.Count(); i++) {
                            _this.Children.ElementAt(i).OnResize.Invoke(eventArgs);
                        }
                        _this._This_Resized_ChainHandler_Timeout = -1;
                    }, 100);
                }
            };

            Control.prototype._This_Moved_ChainHandler = function (eventArgs) {
                if (this._This_Moved_ChainHandler_Timeout === -1) {
                    var _this = this;
                    this._This_Moved_ChainHandler_Timeout = setTimeout(function () {
                        for (var i = 0; i < _this.Children.Count(); i++) {
                            _this.Children.ElementAt(i).OnMove.Invoke(eventArgs);
                        }
                        _this._This_Moved_ChainHandler_Timeout = -1;
                    }, 100);
                }
            };

            Control.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                if (!this.DOMConstructed) {
                    parent.append(this._rootElement);
                    this.DOMConstructed = true;

                    this._OnOnClickChanged();
                    this._OnOnKeyPressChanged();
                    this._OnOnKeyUpChanged();
                    this._OnOnMouseDownChanged();
                    this._OnOnMouseMoveChanged();
                    this._OnOnMouseUpChanged();
                    this._OnOnResizeChanged();

                    this._rootElement.on("focus", { _this: this, _callback: this._OnFocus }, this._RestoreThis);
                    this._rootElement.on("blur", { _this: this, _callback: this._OnBlur }, this._RestoreThis);
                    this._rootElement.on("keydown", { _this: this, _callback: this._OnKeyDown }, this._RestoreThis);
                }

                if (!this.OptimiseConstructForGraphics) {
                    for (var i = 0; i < this.Children.Count(); i++) {
                        var child = this.Children.ElementAt(i);
                        child.ConstructDOM(this._rootElement);
                    }
                    if (onComplete) {
                        onComplete();
                    }
                } else if (this.Children.Count() > 0) {
                    var i = 0;
                    var _this = this;
                    var func = function () {
                        var child = _this.Children.ElementAt(i);
                        if (!!child) {
                            child.OptimiseConstructForGraphics = true;
                            child.ConstructDOM(_this._rootElement, function () {
                                i++;
                                if (i < _this.Children.Count()) {
                                    setTimeout(func, Control.OptimiseConstructForGraphics_DelayTime);
                                } else if (onComplete) {
                                    onComplete();
                                }
                            });
                        } else {
                            i++;
                            if (i < _this.Children.Count()) {
                                setTimeout(func, Control.OptimiseConstructForGraphics_DelayTime);
                            } else if (onComplete) {
                                onComplete();
                            }
                        }
                    };
                    func();
                } else if (onComplete) {
                    onComplete();
                }
            };
            Control.prototype.DestroyDOM = function () {
                if (this.DOMConstructed) {
                    this._rootElement.remove();
                    this._rootElement.off();
                    this._OnClickAttached = false;
                    this._OnMouseDownAttached = false;
                    this._OnMouseUpAttached = false;
                    this._OnMouseMoveAttached = false;
                    this._OnResizeAttached = false;
                    this._OnKeyPressAttached = false;
                    this._OnKeyUpAttached = false;
                    this.DOMConstructed = false;
                }

                for (var i = 0; i < this.Children.Count(); i++) {
                    this.Children.ElementAt(i).DestroyDOM();
                }
            };

            Control.prototype.ID = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._rootElement.attr("id", value);
                }
                return this._rootElement.attr("id");
            };

            Control.prototype.GetStyle = function (name) {
                return this._rootElement.css(name);
            };
            Control.prototype.ApplyStyle = function (name, value) {
                this._rootElement.css(name, value);
            };
            Control.prototype.ApplyStyles = function (cssProps) {
                this._rootElement.css(cssProps);
            };
            Control.prototype.AddClass = function (name) {
                if (!this.HasClass(name)) {
                    this._rootElement.addClass(name);
                }
            };
            Control.prototype.RemoveClass = function (name) {
                this._rootElement.removeClass(name);
            };
            Control.prototype.HasClass = function (name) {
                return this._rootElement.hasClass(name);
            };

            Control.prototype.BackColor = function (color) {
                if (typeof color === "undefined") { color = null; }
                if (color !== null) {
                    this._rootElement.css("background-color", color);
                }
                return this._rootElement.css("background-color");
            };
            Control.prototype.ForeColor = function (color) {
                if (color !== null) {
                    this._rootElement.css("color", color);
                }
                return this._rootElement.css("color");
            };

            Control.prototype.CSSNumberStyle = function (style, value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._rootElement.css(style, value.ToString());
                }
                return UI.CSSNumber.FromString(this._rootElement.css(style));
            };

            Control.prototype.Width = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = this.CSSNumberStyle("width", value);
                if (value !== null) {
                    this.OnResize.Invoke(new TSUI.Events.ResizeEventArgs(this, null));
                }
                return result;
            };
            Control.prototype.Height = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = this.CSSNumberStyle("height", value);
                if (value !== null) {
                    this.OnResize.Invoke(new TSUI.Events.ResizeEventArgs(this, null));
                }
                return result;
            };

            Control.prototype.ActualWidth = function () {
                return this._rootElement.outerWidth();
            };
            Control.prototype.ActualHeight = function () {
                return this._rootElement.outerHeight();
            };

            Control.prototype.Top = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = this.CSSNumberStyle("top", value);
                this.OnMove.Invoke(new TSUI.Events.MoveEventArgs(this, null));
                return result;
            };
            Control.prototype.Bottom = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.CSSNumberStyle("bottom", value);
            };
            Control.prototype.Left = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = this.CSSNumberStyle("left", value);
                this.OnMove.Invoke(new TSUI.Events.MoveEventArgs(this, null));
                return result;
            };
            Control.prototype.Right = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.CSSNumberStyle("right", value);
            };

            Control.prototype.PageTop = function () {
                return this._rootElement.offset().top;
            };
            Control.prototype.PageLeft = function () {
                return this._rootElement.offset().left;
            };
            Control.prototype.PageBottom = function () {
                return this._rootElement.offset().top + this.ActualHeight();
            };
            Control.prototype.PageRight = function () {
                return this._rootElement.offset().left + this.ActualWidth();
            };

            Control.prototype.MinWidth = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.CSSNumberStyle("min-width", value);
            };
            Control.prototype.MinHeight = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.CSSNumberStyle("min-height", value);
            };
            Control.prototype.MaxWidth = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.CSSNumberStyle("max-width", value);
            };
            Control.prototype.MaxHeight = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.CSSNumberStyle("max-height", value);
            };

            Control.prototype.SetParentVisible = function (value) {
                this._parentVisible = value;

                var len = this.Children.Count();
                for (var i = 0; i < len; i++) {
                    this.Children.ElementAt(i).SetParentVisible(value);
                }
            };
            Control.prototype.ActuallyVisible = function () {
                return this._parentVisible && this.Visible();
            };
            Control.prototype.Visible = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._rootElement.css({
                        visibility: value ? "" : "hidden",
                        display: ""
                    });

                    var len = this.Children.Count();
                    for (var i = 0; i < len; i++) {
                        this.Children.ElementAt(i).SetParentVisible(value);
                    }
                }
                return this._rootElement.css("visibility") !== "hidden" && this._rootElement.css("display") !== "none";
            };
            Control.prototype.EnableByParent = function () {
                this._HandleEnableSet(this._Enabled);
                if (this._Enabled) {
                    for (var i = 0; i < this.Children.Count(); i++) {
                        this.Children.ElementAt(i).EnableByParent();
                    }
                }
            };
            Control.prototype.DisableByParent = function () {
                this._HandleEnableSet(false);
                for (var i = 0; i < this.Children.Count(); i++) {
                    this.Children.ElementAt(i).DisableByParent();
                }
            };

            Control.prototype.Enabled = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Enabled = value;

                    for (var i = 0; i < this.Children.Count(); i++) {
                        var elem = this.Children.ElementAt(i);
                        if (this._Enabled) {
                            elem.EnableByParent();
                        } else {
                            elem.DisableByParent();
                        }
                    }

                    this._HandleEnableSet(this._Enabled);
                }
                return this._Enabled;
            };
            Control.prototype.ActuallyEnabled = function () {
                return !this.HasClass("Disabled");
            };
            Control.prototype._HandleEnableSet = function (enabled) {
                if (enabled) {
                    this._rootElement.removeClass("Disabled");
                    if (this._WasSelectionEnabled) {
                        this.EnableSelection();
                    }
                } else {
                    this._rootElement.addClass("Disabled");
                    this._WasSelectionEnabled = this._SelectionEnabled;
                    this.DisableSelection();
                }

                this._HandleFocusableSet(this.Focusable());
            };
            Control.prototype._HandleFocusableSet = function (focusable) {
                if (focusable && !this.HasClass("Disabled")) {
                    this._rootElement.attr("tabindex", this._TabIndex.toString());

                    if (this._rootElement.is(":focus") && !this.HasClass("Focused")) {
                        this.Focus();
                    }
                } else {
                    this._rootElement.removeAttr("tabindex");
                }

                if (!this._Focusable && this._rootElement.is(":focus")) {
                    this.Blur();
                }
            };

            Control.prototype.Focusable = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Focusable = value;
                    if (this._TabIndex === 0) {
                        this._TabIndex = ++UI._currTabIndex;
                    }

                    this._HandleFocusableSet(value);
                }
                return this._Focusable;
            };
            Control.prototype.Show = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.FadeAnimator(); }
                if (!this.Visible()) {
                    this.Enabled(false);
                    var _this = this;
                    animator.Show(this, function () {
                        _this.Enabled(true);
                        _this.Visible(true);
                        _this.OnShow.Invoke(new TSUI.Events.ShowEventArgs(_this));
                        if (callback !== null)
                            callback();
                    });
                } else if (callback !== null) {
                    callback();
                }
            };
            Control.prototype.Hide = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.FadeAnimator(); }
                if (this.Visible()) {
                    this.Enabled(false);
                    var _this = this;
                    setTimeout(function () {
                        animator.Hide(_this, function () {
                            _this.Enabled(true);
                            _this.Visible(false);
                            _this.OnHide.Invoke(new TSUI.Events.HideEventArgs(_this));
                            if (callback !== null)
                                callback();
                        });
                    }, 200);
                } else if (callback !== null) {
                    callback();
                }
            };

            Control.prototype.EnableSelection = function () {
                this._rootElement.enableSelection();
                this._SelectionEnabled = true;
            };
            Control.prototype.DisableSelection = function () {
                this._rootElement.disableSelection();
                this._SelectionEnabled = false;
            };

            Control.prototype.Focus = function () {
                this._rootElement.focus();
            };
            Control.prototype.Blur = function () {
                this._rootElement.blur();
            };

            Control.prototype.InvokeDefaultAction = function () {
            };

            Control.prototype.IsRelativeLayout = function () {
                return this._rootElement.hasClass("RelativeLayout");
            };
            Control.prototype.RelativeLayoutOn = function () {
                this.AddClass("RelativeLayout");
            };
            Control.prototype.RelativeLayoutOff = function () {
                this.RemoveClass("RelativeLayout");
            };

            Control.prototype.TabIndex = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TabIndex = value;
                    if (value === -2) {
                        this._rootElement.removeAttr("tabindex");
                    } else {
                        this._rootElement.attr("tabindex", value.toString());
                    }
                }
                var retVal = parseInt(this._rootElement.attr("tabindex"), 10);
                if (isNaN(retVal)) {
                    retVal = -2;
                }
                return retVal;
            };

            /** Returns the default binding group for the control. */
            Control.prototype.GetDefaultBindingGroup = function () {
                return this.DefaultGroup;
            };

            /** Adds a new binding group to Bindings.
            @returns The new binding group.
            */
            Control.prototype.AddBindingGroup = function (updater) {
                var newGroup = new TSUI.Data.BindingGroup(updater);
                this.Bindings.BindingGroups.Add(newGroup);
                return newGroup;
            };

            /** Removes a binding group from Bindings and calls unbind on all the bindings in the group.
            @param group The group to remove.
            @returns The binding group that was removed.
            */
            Control.prototype.RemoveBindingGroup = function (group) {
                var len = group.DataBindings.Count();
                for (var i = 0; i < len; i++) {
                    this._removeBinding(group, group.DataBindings.ElementAt(i));
                }
                this.Bindings.BindingGroups.Remove(group);

                return group;
            };

            /** Adds a new data binding to the specified group for this control.
            @param property The control property to bind to.
            @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
            @param accessor The data accessor to use for the new binding.
            @param group The binding group to add the new binding to.
            @param bindingDirection The binding direction to use for the new binding.
            @param adapter The data adapter to use for the new binding.
            @returns The new data binding.
            */
            Control.prototype.AddBinding = function (propertyName, dataProperty, accessor, group, bindingDirection, adapter) {
                if (typeof group === "undefined") { group = this.DefaultGroup; }
                if (!this[propertyName]) {
                    throw "Property name does exist on this control!";
                }
                if (!TSUI.isFunction(this[propertyName])) {
                    throw "Property name does not refer to a function!";
                }

                var newBinding = new TSUI.Data.DataBinding(this, propertyName, dataProperty, accessor, bindingDirection, adapter);

                group.DataBindings.Add(newBinding);

                return newBinding;
            };

            /** Removes a data binding from all binding groups in the binding collection.
            @param binding The binding to remove.
            @returns Void
            */
            Control.prototype.RemoveBinding = function (binding) {
                var groupsLen = this.Bindings.BindingGroups.Count();
                for (var groupNum = 0; groupNum < groupsLen; groupNum++) {
                    var group = this.Bindings.BindingGroups.ElementAt(groupNum);
                    this._removeBinding(group, binding);
                }
            };

            /** Internal method which handles removing a binding on the control from the specified group.
            @param group The group to remove the binding from.
            @param binding The binding to remove.
            @returns Void
            */
            Control.prototype._removeBinding = function (group, binding) {
                binding.Unbind();
                group.DataBindings.Remove(binding);
            };
            Control.OnClickEventName = "click";
            Control.OnMouseDownEventName = "mousedown touchstart";
            Control.OnMouseUpEventName = "mouseup touchend";
            Control.OnMouseMoveEventName = "mousemove touchmove";

            Control.OptimiseConstructForGraphics_DelayTime = 30;
            return Control;
        })();
        UI.Control = Control;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Panel.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IPanel.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var Panel = (function (_super) {
            __extends(Panel, _super);
            function Panel() {
                _super.call(this);

                this._rootElement.addClass("Panel");
            }
            return Panel;
        })(UI.Control);
        UI.Panel = Panel;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Label.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/ILabel.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var Label = (function (_super) {
            __extends(Label, _super);
            function Label(text) {
                if (typeof text === "undefined") { text = null; }
                _super.call(this);
                this._Focusable_AddedByLink = false;

                this._rootElement.addClass("Label");

                this.Text(text || " ");

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_Clicked, this));
            }
            Label.prototype._This_Clicked = function (eventArgs) {
                if (this.Focusable()) {
                    this.Focus();
                }
            };

            Label.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    value = value.replace("\n", "<br />");
                    this._rootElement.html(value);
                }
                return this._rootElement.text();
            };
            Label.prototype.HTML = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._rootElement.html(value);
                }
                return this._rootElement.html();
            };

            Label.prototype.Link = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (value === "") {
                        //Removes any inner <a> tags
                        this.Text(this.Text());

                        if (this._Focusable && this._Focusable_AddedByLink) {
                            this.Focusable(false);
                        }
                    } else {
                        var text = this.Text();
                        var newHTML = "<a href=\"" + value + "\" target=\"_blank\">" + text + "</a>";
                        this.HTML(newHTML);

                        if (!this._Focusable) {
                            this.Focusable(true);
                            this._Focusable_AddedByLink = true;
                        }
                    }
                }
                var elem = this._rootElement.find("a");
                var retVal = null;
                if (elem.length > 0) {
                    retVal = elem.first().attr("href");
                }
                return retVal;
            };

            Label.prototype.Focusable = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = _super.prototype.Focusable.call(this, value);
                if (value !== null) {
                    this._Focusable_AddedByLink = false;
                }
                return result;
            };

            Label.prototype.InvokeDefaultAction = function () {
                var link = this.Link();
                if (link !== null) {
                    TSUI.OpenInNewWindow(link);
                } else {
                    this._rootElement.click();
                }
            };
            return Label;
        })(UI.Control);
        UI.Label = Label;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Button.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IButton.d.ts" />
    /// <reference path="Label.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        /** A basic button control implementation. */
        var Button = (function (_super) {
            __extends(Button, _super);
            /** Creates a new Button control. */
            function Button() {
                _super.call(this);

                this._rootElement.addClass("Button");

                this.TextLabel = new UI.Label();
                this.Children.Add(this.TextLabel);

                this.Focusable(true);
            }
            /** Gets or sets the button text.
            @param value (Optional) The value to set the text to.
            @returns the value of the button's text.
            */
            Button.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.TextLabel.Text(value);
            };

            /** Invokes the button's click event. */
            Button.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };
            return Button;
        })(UI.Control);
        UI.Button = Button;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/TextBox.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/ITextBox.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var TextBox = (function (_super) {
            __extends(TextBox, _super);
            function TextBox() {
                _super.call(this);
                this._PrevSeenValue = "";
                this._TabIndex = 0;

                this._rootElement.addClass("TextBox");

                this.OnTextChange = new TSUI.Events.TextChangeEvent();

                this._TextInput = $("<input type=\"text\" tabindex=\"" + this._TabIndex.toString() + "\"/>");

                this.Focusable(true);

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_OnClick_FocusBugFix, this));
            }
            TextBox.prototype.TextInput = function () {
                return this._TextInput;
            };

            //Layout bug fix : Can't focus input elemnts when they are inside absolute elements.
            //Noticed using: FireFox and Opera
            //Example of issue: Focus not given on mouse click
            TextBox.prototype._This_OnClick_FocusBugFix = function (eventArgs) {
                if (this.ActuallyEnabled() && !this._TextInput.is(":focus")) {
                    this._TextInput.focus();
                }
            };

            TextBox.prototype._HandleFocusableSet = function (focusable) {
                this._rootElement.removeAttr("tabindex");

                if (focusable && !this.HasClass("Disabled")) {
                    this._TextInput.attr("tabindex", this._TabIndex.toString());

                    if (this._TextInput.is(":focus") && !this.HasClass("Focused")) {
                        this.Focus();
                    }
                } else {
                    this._TextInput.removeAttr("tabindex");
                }

                if (!this._Focusable && this._TextInput.is(":focus")) {
                    this.Blur();
                }
            };

            TextBox.prototype._TextInput_OnFocus = function (event) {
                if (this.ActuallyEnabled()) {
                    this._OnFocus(event);
                } else {
                    this._TextInput.blur();
                }
            };
            TextBox.prototype._TextInput_OnBlur = function (event) {
                TSUI.StopEvent(event);
                this._OnBlur(event);
            };
            TextBox.prototype._TextInput_OnChange = function (event) {
                if (this.ActuallyEnabled()) {
                    if (this._PrevSeenValue !== this.Text()) {
                        this._PrevSeenValue = this.Text();
                        this.OnTextChange.Invoke(new TSUI.Events.TextChangeEventArgs(this, event));
                    }
                } else if (event.keyCode !== 9 && event.keyCode !== 116) {
                    TSUI.StopEvent(event);
                }
            };

            TextBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.append(_this._TextInput);

                    _this._TextInput.on("focus", function (event) {
                        _this._TextInput_OnFocus(event);
                    });
                    _this._TextInput.on("blur", function (event) {
                        _this._TextInput_OnBlur(event);
                    });
                    _this._TextInput.on("change, keyup", function (event) {
                        _this._TextInput_OnChange(event);
                    });

                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            TextBox.prototype.DestroyDOM = function () {
                this._TextInput.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            TextBox.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TextInput.val(value);

                    if (this._PrevSeenValue !== value) {
                        this._PrevSeenValue = value;
                        this.OnTextChange.Invoke(new TSUI.Events.TextChangeEventArgs(this, null));
                    }
                }
                return this._TextInput.val();
            };
            TextBox.prototype.Masked = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TextInput.attr("type", value ? "password" : "text");
                }
                return this._TextInput.attr("type") === "password";
            };

            TextBox.prototype.MaxLength = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TextInput.attr("maxlength", value.toString());
                }
                var retVal = parseInt(this._TextInput.attr("maxlength"), 10);
                if (isNaN(retVal)) {
                    retVal = -1;
                }
                return retVal;
            };

            TextBox.prototype.Enabled = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (!value && this.HasClass("Focused")) {
                        this.RemoveClass("Focused");
                        this._TextInput.blur();
                    } else if (this._TextInput.is(":focus") && !this.HasClass("Focused")) {
                        this.AddClass("Focused");
                    }
                }
                return _super.prototype.Enabled.call(this, value);
            };

            TextBox.prototype.Focus = function () {
                this._TextInput.focus();
            };
            TextBox.prototype.Blur = function () {
                this._TextInput.blur();
            };

            TextBox.prototype.TabIndex = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TabIndex = value;
                    if (value === -2) {
                        this._TextInput.removeAttr("tabindex");
                    } else {
                        this._TextInput.attr("tabindex", value.toString());
                    }
                }
                var retVal = parseInt(this._TextInput.attr("tabindex"), 10);
                if (isNaN(retVal)) {
                    retVal = -2;
                }
                return retVal;
            };
            return TextBox;
        })(UI.Control);
        UI.TextBox = TextBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/MultilineTextBox.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IMultilineTextBox.d.ts" />
    /// <reference path="TextBox.ts" />
    (function (UI) {
        var MultilineTextBox = (function (_super) {
            __extends(MultilineTextBox, _super);
            function MultilineTextBox() {
                _super.call(this);
                this._PrevSeenValue = null;
                this._TabIndex = 0;

                this._rootElement.addClass("TextBox Multiline");

                this.OnTextChange = new TSUI.Events.TextChangeEvent();

                this._TextInput = $("<textarea tabindex=\"" + this._TabIndex.toString() + "\"/>");

                this.Focusable(true);

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_OnClick_FocusBugFix, this));
            }
            MultilineTextBox.prototype.TextInput = function () {
                return this._TextInput;
            };

            //Layout bug fix : Can't focus input elemnts when they are inside absolute elements.
            //Noticed using: FireFox and Opera
            //Example of issue: Focus not given on mouse click
            MultilineTextBox.prototype._This_OnClick_FocusBugFix = function (eventArgs) {
                if (this.ActuallyEnabled() && !this._TextInput.is(":focus")) {
                    this._TextInput.focus();
                }
            };

            MultilineTextBox.prototype._HandleFocusableSet = function (focusable) {
                this._rootElement.removeAttr("tabindex");

                if (focusable && !this.HasClass("Disabled")) {
                    this._TextInput.attr("tabindex", this._TabIndex.toString());

                    if (this._TextInput.is(":focus") && !this.HasClass("Focused")) {
                        this.Focus();
                    }
                } else {
                    this._TextInput.removeAttr("tabindex");
                }

                if (!this._Focusable && this._TextInput.is(":focus")) {
                    this.Blur();
                }
            };

            MultilineTextBox.prototype._TextInput_OnFocus = function (event) {
                if (this.ActuallyEnabled()) {
                    this._OnFocus(event);
                } else {
                    this._TextInput.blur();
                }
            };
            MultilineTextBox.prototype._TextInput_OnBlur = function (event) {
                TSUI.StopEvent(event);
                this._OnBlur(event);
            };
            MultilineTextBox.prototype._TextInput_OnChange = function (event) {
                if (this.ActuallyEnabled()) {
                    if (this._PrevSeenValue !== this.Text()) {
                        this._PrevSeenValue = this.Text();
                        this.OnTextChange.Invoke(new TSUI.Events.TextChangeEventArgs(this, event));
                    }
                } else if (event.keyCode !== 9 && event.keyCode !== 116) {
                    TSUI.StopEvent(event);
                }
            };

            MultilineTextBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.append(_this._TextInput);

                    var __this = _this;
                    _this._TextInput.on("focus", function (event) {
                        __this._TextInput_OnFocus(event);
                    });
                    _this._TextInput.on("blur", function (event) {
                        __this._TextInput_OnBlur(event);
                    });
                    _this._TextInput.on("change, keyup", function (event) {
                        __this._TextInput_OnChange(event);
                    });

                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            MultilineTextBox.prototype.DestroyDOM = function () {
                this._TextInput.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            MultilineTextBox.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TextInput.val(value);

                    if (this._PrevSeenValue !== value) {
                        this._PrevSeenValue = value;
                        this.OnTextChange.Invoke(new TSUI.Events.TextChangeEventArgs(this, null));
                    }
                }
                return this._TextInput.val();
            };
            MultilineTextBox.prototype.Masked = function (value) {
                if (typeof value === "undefined") { value = false; }
                return false;
            };

            MultilineTextBox.prototype.MaxLength = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TextInput.attr("maxlength", value.toString());
                }
                var retVal = parseInt(this._TextInput.attr("maxlength"), 10);
                if (isNaN(retVal)) {
                    retVal = -1;
                }
                return retVal;
            };

            MultilineTextBox.prototype.Enabled = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (!value && this.HasClass("Focused")) {
                        this.RemoveClass("Focused");
                        this._TextInput.blur();
                    } else if (this._TextInput.is(":focus") && !this.HasClass("Focused")) {
                        this.AddClass("Focused");
                    }
                }
                return _super.prototype.Enabled.call(this, value);
            };

            MultilineTextBox.prototype.Focus = function () {
                this._TextInput.focus();
            };
            MultilineTextBox.prototype.Blur = function () {
                this._TextInput.blur();
            };

            MultilineTextBox.prototype.TabIndex = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TabIndex = value;
                    if (value === -2) {
                        this._TextInput.removeAttr("tabindex");
                    } else {
                        this._TextInput.attr("tabindex", value.toString());
                    }
                }
                var retVal = parseInt(this._TextInput.attr("tabindex"), 10);
                if (isNaN(retVal)) {
                    retVal = -2;
                }
                return retVal;
            };
            return MultilineTextBox;
        })(UI.Control);
        UI.MultilineTextBox = MultilineTextBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/NumericTextBox.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="TextBox.ts" />
    /// <reference path="../Interfaces/INumericTextBox.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var NumericTextBox = (function (_super) {
            __extends(NumericTextBox, _super);
            function NumericTextBox() {
                _super.call(this);
                this._NumericPrevSeenValue = null;

                this._rootElement.addClass("Numeric");

                this.OnValueChange = new TSUI.Events.ValueChangeEvent();

                this._TextInput.attr("type", "numeric");
                this._TextInput.numeric({
                    decimal: ".",
                    negative: true,
                    decimalPlaces: 2
                });

                this.OnTextChange.Attach(new TSUI.Events.TextChangeEventHandler(this._This_OnTextChange_ValueChange, this));
            }
            NumericTextBox.prototype._This_OnTextChange_ValueChange = function (eventArgs) {
                var value = this.Value();
                if (this._NumericPrevSeenValue !== value) {
                    this._NumericPrevSeenValue = value;
                    this.OnValueChange.Invoke(new TSUI.Events.ValueChangeEventArgs(this));
                }
            };

            NumericTextBox.prototype.AllowNegatives = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextInput.numeric_AllowNegatives(value);
            };
            NumericTextBox.prototype.AllowDecimals = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextInput.numeric_DecimalSeparator(value) !== "";
            };

            NumericTextBox.prototype.DecimalPlaces = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextInput.numeric_DecimalPlaces(value);
            };
            NumericTextBox.prototype.DecimalSeparator = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextInput.numeric_DecimalSeparator(value);
            };

            NumericTextBox.prototype.Min = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextInput.numeric_Min(value);
            };
            NumericTextBox.prototype.Max = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextInput.numeric_Max(value);
            };

            NumericTextBox.prototype.Value = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var dp = this.DecimalPlaces();
                    if (dp > -1) {
                        value = parseFloat(value.toFixed(dp));
                    }
                    var min = this.Min();
                    if (min !== null) {
                        value = Math.max(value, min);
                    }
                    var max = this.Max();
                    if (max !== null) {
                        value = Math.min(value, max);
                    }
                    this._TextInput.val(dp > -1 ? value.toFixed(dp) : value.toString());

                    if (this._NumericPrevSeenValue !== value) {
                        this._NumericPrevSeenValue = value;
                        this.OnValueChange.Invoke(new TSUI.Events.ValueChangeEventArgs(this));
                    }
                }
                var result = parseFloat(this._TextInput.val());
                if (isNaN(result)) {
                    result = 0;
                }
                return result;
            };
            return NumericTextBox;
        })(UI.TextBox);
        UI.NumericTextBox = NumericTextBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/NumericUpDown.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="NumericTextBox.ts" />
    /// <reference path="Button.ts" />
    /// <reference path="../Interfaces/INumericUpDown.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var NumericUpDown = (function (_super) {
            __extends(NumericUpDown, _super);
            function NumericUpDown() {
                _super.call(this);
                this._PrevSeenValue = null;
                this._Increment = 1;

                this._rootElement.addClass("NumericUpDown");

                this._UnderlyingTextBox = new UI.NumericTextBox();
                this._UnderlyingTextBox.OnFocus.Attach(new TSUI.Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
                this._UnderlyingTextBox.OnBlur.Attach(new TSUI.Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
                this.Children.Add(this._UnderlyingTextBox);

                this._UpButton = new UI.Button();
                this._UpButton.AddClass("Up");
                this._UpButton.Text("^");
                this._UpButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._UpButton_OnClick, this));
                this._UpButton.OnFocus.Attach(new TSUI.Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
                this._UpButton.OnBlur.Attach(new TSUI.Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
                this.Children.Add(this._UpButton);

                this._DownButton = new UI.Button();
                this._DownButton.AddClass("Down");
                this._DownButton.Text("^");
                this._DownButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._DownButton_OnClick, this));
                this._DownButton.OnFocus.Attach(new TSUI.Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
                this._DownButton.OnBlur.Attach(new TSUI.Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
                this.Children.Add(this._DownButton);

                this.OnKeyDown.Attach(new TSUI.Events.KeyDownEventHandler(this._This_OnKeyDown_IncrementHandler, this));
                this.OnKeyUp.Attach(new TSUI.Events.KeyUpEventHandler(this._This_OnKeyUp_IncrementHandler, this));

                this.OnValueChange = new TSUI.Events.ValueChangeEvent();

                this.Focusable(true);
            }
            NumericUpDown.prototype._UnderlyingControl_OnFocus = function (eventArgs) {
                this._OnFocus(eventArgs.jqEvent);
            };
            NumericUpDown.prototype._UnderlyingControl_OnBlur = function (eventArgs) {
                this._OnBlur(eventArgs.jqEvent);
            };

            NumericUpDown.prototype._This_OnKeyDown_IncrementHandler = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    if (eventArgs.jqEvent.keyCode === 38) {
                        this.Value(this.Value() + this._Increment);
                        TSUI.StopEvent(eventArgs.jqEvent);
                    } else if (eventArgs.jqEvent.keyCode === 40) {
                        this.Value(this.Value() - this._Increment);
                        TSUI.StopEvent(eventArgs.jqEvent);
                    }
                }
            };
            NumericUpDown.prototype._This_OnKeyUp_IncrementHandler = function (eventArgs) {
                var result = this.Value();
                if (this._PrevSeenValue !== result) {
                    this._PrevSeenValue = result;
                    this.OnValueChange.Invoke(new TSUI.Events.ValueChangeEventArgs(this));
                }
            };

            NumericUpDown.prototype._UpButton_OnClick = function (eventArgs) {
                this.Value(this.Value() + this._Increment);
            };
            NumericUpDown.prototype._DownButton_OnClick = function (eventArgs) {
                this.Value(this.Value() - this._Increment);
            };

            NumericUpDown.prototype.AllowNegatives = function (value) {
                return this._UnderlyingTextBox.AllowNegatives(value);
            };
            NumericUpDown.prototype.AllowDecimals = function (value) {
                return this._UnderlyingTextBox.AllowDecimals(value);
            };

            NumericUpDown.prototype.DecimalPlaces = function (value) {
                return this._UnderlyingTextBox.DecimalPlaces(value);
            };
            NumericUpDown.prototype.DecimalSeparator = function (value) {
                return this._UnderlyingTextBox.DecimalSeparator(value);
            };

            NumericUpDown.prototype.Min = function (value) {
                return this._UnderlyingTextBox.Min(value);
            };
            NumericUpDown.prototype.Max = function (value) {
                return this._UnderlyingTextBox.Max(value);
            };

            NumericUpDown.prototype.Increment = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Increment = value;
                }
                return this._Increment;
            };

            NumericUpDown.prototype.Value = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = this._UnderlyingTextBox.Value(value);
                if (value !== null) {
                    if (this._PrevSeenValue !== result) {
                        this._PrevSeenValue = result;
                        this.OnValueChange.Invoke(new TSUI.Events.ValueChangeEventArgs(this));
                    }
                }
                return result;
            };

            NumericUpDown.prototype._HandleFocusableSet = function (focusable) {
                this._rootElement.removeAttr("tabindex");
            };

            NumericUpDown.prototype.Focus = function () {
                this._UnderlyingTextBox.Focus();
            };
            NumericUpDown.prototype.Blur = function () {
                this._UnderlyingTextBox.Blur();
                this._UpButton.Blur();
                this._DownButton.Blur();
            };
            return NumericUpDown;
        })(UI.Control);
        UI.NumericUpDown = NumericUpDown;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/ImageBox.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IImageBox.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var ImageBox = (function (_super) {
            __extends(ImageBox, _super);
            function ImageBox(src, alt) {
                if (typeof src === "undefined") { src = ""; }
                if (typeof alt === "undefined") { alt = ""; }
                _super.call(this);
                this._NavigateToOnClick = "";
                this._Focusable_AddedByLink = false;

                this._rootElement.addClass("ImageBox");

                this._ImageElement = $("<img>");

                this.Source(src);
                if (alt !== "") {
                    this.AlternateText(alt);
                }

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_OnClick_NavigateHandler, this));
            }
            ImageBox.prototype._This_OnClick_NavigateHandler = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    if (this._NavigateToOnClick !== "") {
                        TSUI.OpenInNewWindow(this._NavigateToOnClick);
                    }
                }
            };

            ImageBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.append(_this._ImageElement);
                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            ImageBox.prototype.DestroyDOM = function () {
                this._ImageElement.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            ImageBox.prototype.AlternateText = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._ImageElement.attr("alt", value);
                }
                return this._ImageElement.attr("alt");
            };
            ImageBox.prototype.Source = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._ImageElement.attr("src", value);
                    if (value === "") {
                        this._rootElement.addClass("NoSource");
                    } else {
                        this._rootElement.removeClass("NoSource");
                    }
                }
                return this._ImageElement.attr("src");
            };

            ImageBox.prototype.NavigateToOnClick = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._NavigateToOnClick = value;
                    if (value !== "") {
                        this.AddClass("Clickable");
                        if (!this._Focusable_AddedByLink) {
                            this.Focusable(true);
                            this._Focusable_AddedByLink = true;
                        }
                    } else {
                        this.RemoveClass("Clickable");
                        if (this._Focusable_AddedByLink) {
                            this.Focusable(false);
                        }
                    }
                }
                return this._NavigateToOnClick;
            };

            ImageBox.prototype.Focusable = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = _super.prototype.Focusable.call(this, value);
                if (value !== null) {
                    this._Focusable_AddedByLink = false;
                }
                return result;
            };

            ImageBox.prototype.InvokeDefaultAction = function () {
                this._ImageElement.click();
            };
            return ImageBox;
        })(UI.Control);
        UI.ImageBox = ImageBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/CanvasBox.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/ICanvasBox.d.ts" />
    /// <reference path="ImageBox.ts" />
    (function (UI) {
        var CanvasBox = (function (_super) {
            __extends(CanvasBox, _super);
            function CanvasBox() {
                _super.call(this);
                this._RenderImageOnLoaded = false;

                this._rootElement.addClass("CanvasBox");
                this._CanvasElement = $("<canvas width=\"100%\" height=\"100%\">");
            }
            CanvasBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._ImageElement.remove();
                    _this._rootElement.append(_this._CanvasElement);
                    _this._CanvasElement.append(_this._ImageElement);

                    _this._ImageElement.on("load", function () {
                        _this._OnImageElementLoaded();
                    });

                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            CanvasBox.prototype.DestroyDOM = function () {
                this._CanvasElement.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            CanvasBox.prototype.Context = function () {
                this._RenderImageOnLoaded = false;
                return this._CanvasElement[0].getContext("2d");
            };

            CanvasBox.prototype.Source = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._RenderImageOnLoaded = true;
                }
                return _super.prototype.Source.call(this, value);
            };

            CanvasBox.prototype._OnImageElementLoaded = function () {
                if (this._RenderImageOnLoaded) {
                    this._RenderImageOnLoaded = false;
                    var context = this.Context();
                    var pos = this._ImageElement.position();
                    context.drawImage(this._ImageElement[0], pos.left, pos.top, 100, 100);
                }
            };
            return CanvasBox;
        })(UI.ImageBox);
        UI.CanvasBox = CanvasBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/SVGBox.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/ISVGBox.d.ts" />
    /// <reference path="ImageBox.ts" />
    (function (UI) {
        var SVGBox = (function (_super) {
            __extends(SVGBox, _super);
            function SVGBox(source) {
                _super.call(this);

                this._rootElement.addClass("SVGBox");
                this._ImageElement = $("<object type=\"image/svg+xml\">");

                this._OverlayElement = $("<div class=\"Overlay\">");

                this.Source(source);
            }
            SVGBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.append(_this._OverlayElement);

                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            SVGBox.prototype.DestroyDOM = function () {
                this._OverlayElement.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            SVGBox.prototype.Source = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._ImageElement.attr("data", value);
                }
                return this._ImageElement.attr("data");
            };
            return SVGBox;
        })(UI.ImageBox);
        UI.SVGBox = SVGBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/TileBackground.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/ITileBackground.d.ts" />
    /// <reference path="ImageBox.ts" />
    (function (UI) {
        var TileBackground = (function (_super) {
            __extends(TileBackground, _super);
            function TileBackground(source) {
                _super.call(this, source);

                this._rootElement.addClass("Background");
            }
            TileBackground.prototype.SetPosition = function (value) {
                switch (value) {
                    case UI.TileBackgroundPositions.OffTop:
                        this._rootElement.addClass("OffTop");
                        this._rootElement.removeClass("In");
                        this._rootElement.removeClass("OffBottom");
                        break;
                    case UI.TileBackgroundPositions.In:
                        this._rootElement.addClass("In");
                        this._rootElement.removeClass("OffTop");
                        this._rootElement.removeClass("OffBottom");
                        break;
                    case UI.TileBackgroundPositions.OffBottom:
                        this._rootElement.addClass("OffBottom");
                        this._rootElement.removeClass("In");
                        this._rootElement.removeClass("OffTop");
                        break;
                }
            };
            return TileBackground;
        })(UI.ImageBox);
        UI.TileBackground = TileBackground;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/ToggleIndicator.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IToggleIndicator.d.ts" />
    /// <reference path="Label.ts" />
    (function (UI) {
        var ToggleIndicatorLabel = (function (_super) {
            __extends(ToggleIndicatorLabel, _super);
            function ToggleIndicatorLabel(_OffVal, _OnVal) {
                if (typeof _OffVal === "undefined") { _OffVal = "<"; }
                if (typeof _OnVal === "undefined") { _OnVal = "<"; }
                _super.call(this);
                this._OffVal = _OffVal;
                this._OnVal = _OnVal;

                this._rootElement.addClass("ToggleIndicatorLabel");

                this.Focusable(true);
            }
            ToggleIndicatorLabel.prototype.SetIndicatorToOn = function () {
                this.RemoveClass("Off");
                this.AddClass("On");
                this.Text(this._OnVal);
            };
            ToggleIndicatorLabel.prototype.SetIndicatorToOff = function () {
                this.RemoveClass("On");
                this.AddClass("Off");
                this.Text(this._OffVal);
            };
            ToggleIndicatorLabel.prototype.IsOn = function () {
                return this.HasClass("On");
            };
            ToggleIndicatorLabel.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };
            return ToggleIndicatorLabel;
        })(UI.Label);
        UI.ToggleIndicatorLabel = ToggleIndicatorLabel;
        var ToggleIndicatorBox = (function (_super) {
            __extends(ToggleIndicatorBox, _super);
            function ToggleIndicatorBox() {
                _super.call(this);

                this._rootElement.addClass("ToggleIndicatorBox");

                this._InnerDivElement = $("<div>");

                this.Focusable(true);
            }
            ToggleIndicatorBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.append(_this._InnerDivElement);

                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            ToggleIndicatorBox.prototype.DestroyDOM = function () {
                this._InnerDivElement.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            ToggleIndicatorBox.prototype.SetIndicatorToOn = function () {
                this.RemoveClass("Off");
                this.AddClass("On");
            };
            ToggleIndicatorBox.prototype.SetIndicatorToOff = function () {
                this.RemoveClass("On");
                this.AddClass("Off");
            };
            ToggleIndicatorBox.prototype.IsOn = function () {
                return this.HasClass("On");
            };

            ToggleIndicatorBox.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };
            return ToggleIndicatorBox;
        })(UI.Control);
        UI.ToggleIndicatorBox = ToggleIndicatorBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/CheckBox.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="Label.ts" />
    /// <reference path="ToggleIndicator.ts" />
    /// <reference path="../Interfaces/ICheckBox.d.ts" />
    /// <reference path="../Enums/TextAlignments.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var CheckBox = (function (_super) {
            __extends(CheckBox, _super);
            function CheckBox(checked) {
                if (typeof checked === "undefined") { checked = false; }
                _super.call(this);

                this._rootElement.addClass("CheckBox");

                this.OnCheckedChange = new TSUI.Events.CheckedChangeEvent();

                this.Focusable(true);

                this.MainIndicator = new UI.ToggleIndicatorBox();
                this.MainIndicator.RelativeLayoutOn();
                this.MainIndicator.Focusable(false);
                this.Children.Add(this.MainIndicator);

                this.TextLabel = new UI.Label();
                this.TextLabel.RelativeLayoutOn();
                this.Children.Add(this.TextLabel);

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_OnClick, this));

                this.Checked(checked);
            }
            CheckBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this.TextAlign(_this.TextAlign());
                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            CheckBox.prototype._This_OnClick = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    this.Checked(!this.Checked());
                }
            };

            CheckBox.prototype.TextAlign = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var oldVal = this._TextAlign;
                    this._TextAlign = value;
                    if (this.DOMConstructed) {
                        this.MainIndicator.DestroyDOM();
                        this.TextLabel.DestroyDOM();

                        if (this._TextAlign === UI.TextAlignments.Left) {
                            this.TextLabel.ConstructDOM(this._rootElement);
                            this.MainIndicator.ConstructDOM(this._rootElement);
                            this.AddClass("LeftAlign");
                        } else if (this._TextAlign === UI.TextAlignments.Right) {
                            this.MainIndicator.ConstructDOM(this._rootElement);
                            this.TextLabel.ConstructDOM(this._rootElement);
                            this.AddClass("RightAlign");
                        }
                    }
                }
                return this._TextAlign;
            };

            CheckBox.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.TextLabel.Text(value);
            };
            CheckBox.prototype.Checked = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (value) {
                        this.MainIndicator.SetIndicatorToOn();
                    } else {
                        this.MainIndicator.SetIndicatorToOff();
                    }
                    this.OnCheckedChange.Invoke(new TSUI.Events.CheckedChangeEventArgs(this));
                }
                return this.MainIndicator.IsOn();
            };

            CheckBox.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };
            return CheckBox;
        })(UI.Control);
        UI.CheckBox = CheckBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/RadioButton.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="Label.ts" />
    /// <reference path="ToggleIndicator.ts" />
    /// <reference path="../Interfaces/IRadioButton.d.ts" />
    /// <reference path="../Enums/TextAlignments.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        UI.RadioButtonGroups = [];

        var RadioButton = (function (_super) {
            __extends(RadioButton, _super);
            function RadioButton(checked) {
                if (typeof checked === "undefined") { checked = false; }
                _super.call(this);
                this._Group = "";

                this._rootElement.addClass("RadioButton");

                this.OnCheckedChange = new TSUI.Events.CheckedChangeEvent();

                this.Focusable(true);

                this.MainIndicator = new UI.ToggleIndicatorBox();
                this.MainIndicator.RelativeLayoutOn();
                this.MainIndicator.Focusable(false);
                this.Children.Add(this.MainIndicator);

                this.TextLabel = new UI.Label();
                this.TextLabel.RelativeLayoutOn();
                this.Children.Add(this.TextLabel);

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_OnClick, this));

                this.Checked(checked);
            }
            RadioButton.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this.TextAlign(_this.TextAlign());

                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            RadioButton.prototype._This_OnClick = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    if (!this.Group()) {
                        this.Checked(!this.Checked());
                    } else {
                        this.Checked(true);
                    }
                }
            };

            RadioButton.prototype.TextAlign = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var oldVal = this._TextAlign;
                    this._TextAlign = value;
                    if (this.DOMConstructed) {
                        this.MainIndicator.DestroyDOM();
                        this.TextLabel.DestroyDOM();

                        if (this._TextAlign === UI.TextAlignments.Left) {
                            this.TextLabel.ConstructDOM(this._rootElement);
                            this.MainIndicator.ConstructDOM(this._rootElement);
                            this.AddClass("LeftAlign");
                        } else if (this._TextAlign === UI.TextAlignments.Right) {
                            this.MainIndicator.ConstructDOM(this._rootElement);
                            this.TextLabel.ConstructDOM(this._rootElement);
                            this.AddClass("RightAlign");
                        }
                    }
                }
                return this._TextAlign;
            };

            RadioButton.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.TextLabel.Text(value);
            };
            RadioButton.prototype.Checked = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var oldVal = this.Checked();

                    if (value) {
                        this.MainIndicator.SetIndicatorToOn();

                        if (this._Group !== "") {
                            for (var i = 0; i < UI.RadioButtonGroups[this._Group].length; i++) {
                                var el = UI.RadioButtonGroups[this._Group][i];
                                if (el != this) {
                                    el.Checked(false);
                                }
                            }
                        }
                    } else {
                        this.MainIndicator.SetIndicatorToOff();
                    }
                    if (value !== oldVal) {
                        this.OnCheckedChange.Invoke(new TSUI.Events.CheckedChangeEventArgs(this));
                    }
                }
                return this.MainIndicator.IsOn();
            };

            RadioButton.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };

            RadioButton.prototype.Group = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (this._Group !== "") {
                        UI.RadioButtonGroups[this._Group].splice(UI.RadioButtonGroups[this._Group].indexOf(this), 1);
                    }
                    this._Group = value;

                    if (this._Group !== "") {
                        if (UI.RadioButtonGroups[this._Group] === undefined) {
                            UI.RadioButtonGroups[this._Group] = [];
                        }
                        UI.RadioButtonGroups[this._Group].push(this);

                        this.Checked(this.Checked());
                    }
                }
                return this._Group;
            };
            return RadioButton;
        })(UI.Control);
        UI.RadioButton = RadioButton;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/ToggleButton.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="Label.ts" />
    /// <reference path="Panel.ts" />
    /// <reference path="../Interfaces/IToggleButton.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var ToggleButton = (function (_super) {
            __extends(ToggleButton, _super);
            function ToggleButton(checked) {
                if (typeof checked === "undefined") { checked = false; }
                _super.call(this);

                this._rootElement.addClass("ToggleButton");

                this.OnCheckedChange = new TSUI.Events.CheckedChangeEvent();

                this.Focusable(true);

                this.TogglePanel = new UI.Panel();
                this.TogglePanel.AddClass("TogglePanel");
                this.Children.Add(this.TogglePanel);
                this.TogglePanelInner = new UI.Panel();
                this.TogglePanelInner.AddClass("TogglePanelInner");
                this.TogglePanel.Children.Add(this.TogglePanelInner);

                this.WhitePanel = new UI.Panel();
                this.WhitePanel.AddClass("White");
                this.TogglePanelInner.Children.Add(this.WhitePanel);
                this.BluePanel = new UI.Panel();
                this.BluePanel.AddClass("Blue");
                this.TogglePanelInner.Children.Add(this.BluePanel);
                this.GripBox = new UI.Panel();
                this.GripBox.AddClass("Grip");
                this.Children.Add(this.GripBox);

                this.TextLabel = new UI.Label("Off");
                this.Children.Add(this.TextLabel);

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_OnClick, this));

                this.Checked(checked);
            }
            ToggleButton.prototype._This_OnClick = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    this.Checked(!this.Checked());
                }
            };

            ToggleButton.prototype.Checked = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var oldVal = this.Checked();

                    if (value) {
                        this._rootElement.addClass("On");
                        this.Text("On");
                    } else {
                        this._rootElement.removeClass("On");
                        this.Text("Off");
                    }
                    if (value !== oldVal) {
                        this.OnCheckedChange.Invoke(new TSUI.Events.CheckedChangeEventArgs(this));
                    }
                }
                return this._rootElement.hasClass("On");
            };

            ToggleButton.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.TextLabel.Text(value);
            };

            ToggleButton.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };
            return ToggleButton;
        })(UI.Control);
        UI.ToggleButton = ToggleButton;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/StackPanel.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IStackPanel.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var StackPanel = (function (_super) {
            __extends(StackPanel, _super);
            function StackPanel() {
                _super.call(this);
                this.Rows = new TSUI.Collections.List();

                this._rootElement.addClass("StackPanel");

                this.Rows.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._OnRows_Modified, this));

                this.Orientation(UI.StackPanelOrientations.Vertical);
            }
            StackPanel.prototype._OnRows_Modified = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            this.Children.Add(eventArgs.ModifiedElements.ElementAt(i));
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            this.Children.Remove(eventArgs.ModifiedElements.ElementAt(i));
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        this.Children.Clear();
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            this.Children.Add(eventArgs.ModifiedElements.ElementAt(i));
                        }
                        break;
                }
            };

            StackPanel.prototype.Orientation = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (value === UI.StackPanelOrientations.Horizontal) {
                        this.RemoveClass("Vertical");
                        this.AddClass("Horizontal");
                    } else {
                        this.RemoveClass("Horizontal");
                        this.AddClass("Vertical");
                    }
                }
                return this.HasClass("Horizontal") ? UI.StackPanelOrientations.Horizontal : UI.StackPanelOrientations.Vertical;
            };
            return StackPanel;
        })(UI.Control);
        UI.StackPanel = StackPanel;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/StackPanelRow.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IStackPanelRow.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var StackPanelRow = (function (_super) {
            __extends(StackPanelRow, _super);
            function StackPanelRow() {
                _super.call(this);

                this._rootElement.addClass("Row");
            }
            return StackPanelRow;
        })(UI.Control);
        UI.StackPanelRow = StackPanelRow;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/ListItem.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IListItem.d.ts" />
    (function (UI) {
        var ListItem = (function () {
            function ListItem(text, value) {
                this.OnTextChange = new TSUI.Events.ListItem_TextChangeEvent();
                this.Index = -1;
                this._Value = null;
                this._Text = "";
                this._Value = value;
                this._Text = text;
            }
            ListItem.prototype.Value = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Value = value;
                }
                return this._Value;
            };

            ListItem.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Text = value;
                    this.OnTextChange.Invoke(new TSUI.Events.ListItem_TextChangeEventArgs(this));
                }
                return this._Text;
            };
            return ListItem;
        })();
        UI.ListItem = ListItem;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/ListBox.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="StackPanelRow.ts" />
    /// <reference path="Label.ts" />
    /// <reference path="../Interfaces/IListBox.d.ts" />
    /// <reference path="StackPanel.ts" />
    (function (UI) {
        var ListBox = (function (_super) {
            __extends(ListBox, _super);
            function ListBox() {
                _super.call(this);
                this.OnSelectionMade = new TSUI.Events.SelectionMadeEvent();
                this.OnSelectedIndexChange = new TSUI.Events.SelectedIndexChangeEvent();
                this.Items = new TSUI.Collections.List();
                this._FocusIndex = -1;
                this._GetElementWithHighestSequentialTabIndex_Cache = null;
                this._SelectedIndex = -1;
                this._SelectedRow = null;

                this._rootElement.addClass("ListBox");

                this.Items.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._Items_OnModified, this));

                this.Focusable(true);
            }
            ListBox.prototype._Items_OnModified = function (eventArgs) {
                this._GetElementWithHighestSequentialTabIndex_Cache = null;

                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._AddRowForItem(elem);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            var index = elem.Index;
                            this.Rows.RemoveAt(index);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        this.Rows.Clear();
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._AddRowForItem(elem);
                        }
                        break;
                }
            };
            ListBox.prototype._AddRowForItem = function (elem) {
                var newRow = this._CreateRow(elem);
                elem.Index = this.Rows.Count();
                this.Rows.Add(newRow);
            };
            ListBox.prototype._CreateRow = function (elem) {
                var newRow = new UI.StackPanelRow();
                var newLabel = new UI.Label(elem.Text());
                newLabel.RelativeLayoutOn();
                newRow.Children.Add(newLabel);
                newRow.Focusable(true);
                newRow.OnFocus.Attach(new TSUI.Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
                newRow.OnBlur.Attach(new TSUI.Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
                newRow.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._StackPanelRow_Clicked, this));
                newRow.OnKeyDown.Attach(new TSUI.Events.KeyDownEventHandler(this._UnderlyingControl_KeyDown, this));
                newRow.InvokeDefaultAction = function () {
                    this._rootElement.click();
                };
                return newRow;
            };

            ListBox.prototype._HandleFocusableSet = function (focusable) {
                this._rootElement.removeAttr("tabindex");
            };

            ListBox.prototype._OnFocus = function (event) {
                _super.prototype._OnFocus.call(this, event);
                UI.preventTabKey = true;
                if (this.ActuallyEnabled()) {
                    this.AddClass("Focused");
                    if (UI.JustUsedTabKeyTime + 50 > Date.now()) {
                        this.AddClass("TabFocused");
                    }
                }
            };
            ListBox.prototype._OnBlur = function (event) {
                _super.prototype._OnBlur.call(this, event);
                UI.preventTabKey = false;
                this.RemoveClass("Focused");
                this.RemoveClass("TabFocused");
            };

            ListBox.prototype._UnderlyingControl_KeyDown = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    if (eventArgs.jqEvent.keyCode === 38) {
                        if (this._FocusIndex > 0) {
                            if (this._FocusIndex > -1) {
                                this.Rows.ElementAt(this._FocusIndex).Blur();
                            }
                            this._FocusIndex--;
                            this.Rows.ElementAt(this._FocusIndex).Focus();
                        }
                        TSUI.StopEvent(eventArgs.jqEvent);
                    } else if (eventArgs.jqEvent.keyCode === 40) {
                        if (this._FocusIndex < this.Items.Count() - 1) {
                            if (this._FocusIndex > -1) {
                                this.Rows.ElementAt(this._FocusIndex).Blur();
                            }
                            this._FocusIndex++;
                            this.Rows.ElementAt(this._FocusIndex).Focus();
                        }
                        TSUI.StopEvent(eventArgs.jqEvent);
                    } else if (eventArgs.jqEvent.keyCode === 9) {
                        if (eventArgs.jqEvent.shiftKey) {
                            if (this._FocusIndex > 0) {
                                UI.preventTabKey = true;
                                this.Rows.ElementAt(this._FocusIndex).Blur();
                                this._FocusIndex--;
                                this.Rows.ElementAt(this._FocusIndex).Focus();
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else if (this._FocusIndex === -1) {
                                this._FocusIndex = this.Rows.Count() - 1;
                                this.Rows.ElementAt(this._FocusIndex).Blur();
                                UI.preventTabKey = true;
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else {
                                this._FocusIndex = -1;
                                UI.preventTabKey = false;
                            }
                        } else {
                            if (this._FocusIndex === -1 && this.Items.Count() > 0) {
                                UI.preventTabKey = true;
                                this._FocusIndex++;
                                this.Rows.ElementAt(this._FocusIndex).Focus();
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else if (this._FocusIndex < this.Items.Count() - 1) {
                                UI.preventTabKey = true;
                                this.Rows.ElementAt(this._FocusIndex).Blur();
                                this._FocusIndex++;
                                this.Rows.ElementAt(this._FocusIndex).Focus();
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else {
                                if (this._FocusIndex !== -1) {
                                    this.Rows.ElementAt(this._FocusIndex).Blur();
                                }
                                this._GetElementWithHighestSequentialTabIndex().Focus();
                                UI.preventTabKey = false;
                                this._FocusIndex = -1;
                            }
                        }
                    }
                } else {
                    TSUI.StopEvent(eventArgs.jqEvent);
                }
            };

            ListBox.prototype._GetElementWithHighestSequentialTabIndex = function () {
                if (this._GetElementWithHighestSequentialTabIndex_Cache === null) {
                    var result = this.Rows.ElementAt(0).TabIndex();
                    var resultElem = this.Rows.ElementAt(0);
                    var highest = 0;
                    var excludeTBs = [];
                    var elems = [];
                    for (var i = 0; i < this.Rows.Count(); i++) {
                        var elem = this.Rows.ElementAt(i);
                        var tb = elem.TabIndex();
                        excludeTBs.push(tb);
                        if (tb > highest) {
                            highest = tb;
                            elems[tb] = elem;
                        }
                    }
                    for (var i = result + 1; i <= highest; i++) {
                        if (excludeTBs.indexOf(i) === -1) {
                            var el = $("*[tabindex=\"" + i.toString(10) + "\"]");
                            if (el.length > 0) {
                                break;
                            }
                        } else {
                            result = i;
                            resultElem = elems[i];
                        }
                    }

                    this._GetElementWithHighestSequentialTabIndex_Cache = resultElem;
                }

                return this._GetElementWithHighestSequentialTabIndex_Cache;
            };

            ListBox.prototype._UnderlyingControl_OnFocus = function (eventArgs) {
                if (eventArgs.Sender instanceof UI.StackPanelRow) {
                    var oldIndex = this._FocusIndex;
                    this._FocusIndex = this.Rows.IndexOf(eventArgs.Sender);
                    if (this._FocusIndex !== 0 && oldIndex === -1 && UI.JustUsedTabKeyTime + 50 > Date.now()) {
                        this._FocusIndex = this.Rows.Count() - 1;
                        this.Rows.ElementAt(this._FocusIndex).Focus();
                    }
                } else {
                    this._FocusIndex = -1;
                }
                this._OnFocus(eventArgs.jqEvent);
            };
            ListBox.prototype._UnderlyingControl_OnBlur = function (eventArgs) {
                this._OnBlur(eventArgs.jqEvent);
            };

            ListBox.prototype._StackPanelRow_Clicked = function (eventArgs) {
                TSUI.StopEvent(eventArgs.jqEvent);
                var itemNum = this.Rows.IndexOf(eventArgs.Sender);
                eventArgs.Sender.Focus();
                this.SelectedIndex(itemNum);
            };

            ListBox.prototype.SelectedIndex = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (value < -1 || value > this.Items.Count()) {
                        throw new TSUI.Exceptions.ArgumentException("SelectedIndex");
                    }

                    var oldIndex = this._SelectedIndex;
                    this._SelectedIndex = value;

                    if (value === -1) {
                        if (this._SelectedRow !== null) {
                            this._SelectedRow.RemoveClass("Selected");
                        }
                    } else {
                        if (this._SelectedRow !== null) {
                            this._SelectedRow.RemoveClass("Selected");
                        }

                        this._SelectedRow = this.Rows.ElementAt(value);
                        this._SelectedRow.AddClass("Selected");
                    }

                    this.OnSelectionMade.Invoke(new TSUI.Events.SelectionMadeEventArgs(this));
                    if (oldIndex !== this._SelectedIndex) {
                        this.OnSelectedIndexChange.Invoke(new TSUI.Events.SelectedIndexChangeEventArgs(this));
                    }
                }
                return this._SelectedIndex;
            };

            ListBox.prototype.Focus = function () {
                this.Rows.ElementAt(0).Focus();
                this._FocusIndex = 0;
            };
            ListBox.prototype.Blur = function () {
                if (this._FocusIndex > -1) {
                    this.Rows.ElementAt(this._FocusIndex).Blur();
                    this._FocusIndex = -1;
                }
            };
            return ListBox;
        })(UI.StackPanel);
        UI.ListBox = ListBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/DropDownBox.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="Windows/SelectionWindow.ts" />
    /// <reference path="ToggleIndicator.ts" />
    /// <reference path="Label.ts" />
    /// <reference path="Panel.ts" />
    /// <reference path="../Interfaces/IDropDownBox.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var DropDownBox = (function (_super) {
            __extends(DropDownBox, _super);
            //_SelectionWindow: ISelectionWindow<T>;
            function DropDownBox() {
                _super.call(this);
                this.OnSelectedIndexChange = new TSUI.Events.SelectedIndexChangeEvent();
                this.Items = new TSUI.Collections.List();

                this._rootElement.addClass("DropDownBox");

                //this._InputContentPanel = new Panel();
                //this.Children.Add(this._InputContentPanel);
                this._UnderlyingSelectBox = $("<select>");

                //this._UnderlyingTextBox = new Label();
                //this._UnderlyingTextBox.Focusable(true);
                //this._UnderlyingTextBox.OnFocus.Attach(new Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
                //this._UnderlyingTextBox.OnBlur.Attach(new Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
                //this._InputContentPanel.Children.Add(this._UnderlyingTextBox);
                //this._DropDownToggle = new ToggleIndicatorLabel();
                //this._DropDownToggle.SetIndicatorToOff();
                //this._DropDownToggle.Focusable(false);
                //this._DropDownToggle.OnClick.Attach(new Events.ClickEventHandler(this._DropDownToggle_OnClick, this));
                //this._InputContentPanel.Children.Add(this._DropDownToggle);
                this.Focusable(true);

                //this._SelectionWindow = new SelectionWindow();
                //this._SelectionWindow.ContentPanel.OnSelectionMade.Attach(new Events.SelectionMadeEventHandler(this.SelectionWindow_OnSelectionMade, this));
                //this._SelectionWindow.ContentPanel.OnSelectedIndexChange.Attach(new Events.SelectedIndexChangeEventHandler(this.SelectionWindow_OnSelectedIndexChanged, this));
                //this._SelectionWindow.OnClose.Attach(new Events.CloseEventHandler(this.SelectionWindow_Close, this));
                //this.Items = this._SelectionWindow.ContentPanel.Items;
                //this._SelectionWindow.ConstructDOM($("body"));
                this.Items.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._Items_OnModified, this));
            }
            DropDownBox.prototype._Items_OnModified = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._AddRowForItem(elem);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            var index = elem.Index;
                            $(this._UnderlyingSelectBox.children()[index]).remove();
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        this._ClearRows();
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._AddRowForItem(elem);
                        }
                        break;
                }
            };
            DropDownBox.prototype._ClearRows = function () {
                this._UnderlyingSelectBox.html("");
            };
            DropDownBox.prototype._AddRowForItem = function (elem) {
                var newRow = this._CreateRow(elem);
                elem.Index = this._UnderlyingSelectBox.children().length;
                this._UnderlyingSelectBox.append(newRow);
            };
            DropDownBox.prototype._CreateRow = function (elem) {
                var newRow = $("<option>");
                newRow.text(elem.Text());
                newRow.attr("value", elem.Value());
                return newRow;
            };

            DropDownBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.append(_this._UnderlyingSelectBox);

                    _this._UnderlyingSelectBox.on("focus", function (event) {
                        _this._UnderlyingControl_OnFocus(new TSUI.Events.FocusEventArgs(_this, event));
                    });
                    _this._UnderlyingSelectBox.on("blur", function (event) {
                        _this._UnderlyingControl_OnBlur(new TSUI.Events.BlurEventArgs(_this, event));
                    });

                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            DropDownBox.prototype.DestroyDOM = function () {
                this._UnderlyingSelectBox.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            DropDownBox.prototype._HandleFocusableSet = function (focusable) {
                if (focusable && !this.HasClass("Disabled")) {
                    this._UnderlyingSelectBox.attr("tabindex", this._TabIndex.toString());

                    if (this._UnderlyingSelectBox.is(":focus") && !this.HasClass("Focused")) {
                        this.Focus();
                    }
                } else {
                    this._UnderlyingSelectBox.removeAttr("tabindex");
                }

                if (!this._Focusable && this._UnderlyingSelectBox.is(":focus")) {
                    this.Blur();
                }
            };

            DropDownBox.prototype.SelectedIndex = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._UnderlyingSelectBox[0].selectedIndex;
            };

            DropDownBox.prototype._OnFocus = function (event) {
                _super.prototype._OnFocus.call(this, event);
                if (this.ActuallyEnabled()) {
                    this.AddClass("Focused");
                    if (UI.JustUsedTabKeyTime + 50 > Date.now()) {
                        this.AddClass("TabFocused");
                    }
                }
            };
            DropDownBox.prototype._OnBlur = function (event) {
                _super.prototype._OnBlur.call(this, event);
                this.RemoveClass("Focused");
                this.RemoveClass("TabFocused");
            };

            DropDownBox.prototype._UnderlyingControl_OnFocus = function (eventArgs) {
                this._OnFocus(eventArgs.jqEvent);
            };
            DropDownBox.prototype._UnderlyingControl_OnBlur = function (eventArgs) {
                this._OnBlur(eventArgs.jqEvent);
            };

            DropDownBox.prototype.Focus = function () {
                this._UnderlyingSelectBox.focus();
            };
            DropDownBox.prototype.Blur = function () {
                this._UnderlyingSelectBox.blur();
            };

            DropDownBox.prototype.Enabled = function (value) {
                var result = _super.prototype.Enabled.call(this, value);
                if (result) {
                    this._UnderlyingSelectBox.removeAttr("disabled");
                } else {
                    this._UnderlyingSelectBox.attr("disabled", "disabled");
                }
                return result;
            };
            return DropDownBox;
        })(UI.Control);
        UI.DropDownBox = DropDownBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/ProgressBar.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="CanvasBox.ts" />
    /// <reference path="../Interfaces/IProgressBar.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var ProgressBar = (function (_super) {
            __extends(ProgressBar, _super);
            function ProgressBar(type) {
                if (typeof type === "undefined") { type = UI.ProgressBarTypes.Horizontal; }
                _super.call(this);
                this._Type = UI.ProgressBarTypes.Horizontal;
                this._Reverse = false;
                this._Progress = 0;
                this._ShowText = true;

                this._rootElement.addClass("ProgressBar");

                this._UnderlyingCanvas = new UI.CanvasBox();
                this.Children.Add(this._UnderlyingCanvas);

                this._BarColourElem = $("<span class=\"Bar\">");

                this.Type(type);
            }
            ProgressBar.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.append(_this._BarColourElem);

                    _this._Render();

                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            ProgressBar.prototype.DestroyDOM = function () {
                this._BarColourElem.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            ProgressBar.prototype.Type = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this.RemoveClass("Circular");
                    this.RemoveClass("Horizontal");
                    this.RemoveClass("Vertical");
                    switch (value) {
                        case UI.ProgressBarTypes.Circular:
                            this.AddClass("Circular");
                            break;
                        case UI.ProgressBarTypes.Horizontal:
                            this.AddClass("Horizontal");
                            break;
                        case UI.ProgressBarTypes.Vertical:
                            this.AddClass("Vertical");
                            break;
                    }
                    this._Type = value;
                    this._Render();
                }
                return this._Type;
            };

            ProgressBar.prototype.Reverse = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Reverse = value;
                    this._Render();
                }
                return this._Reverse;
            };

            ProgressBar.prototype.Progress = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    value = Math.max(0, Math.min(100, value));
                    this._Progress = value;
                    this._Render();
                }
                return this._Progress;
            };

            ProgressBar.prototype.ShowText = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._ShowText = value;
                    this._Render();
                }
                return this._ShowText;
            };

            ProgressBar.prototype._Render = function () {
                if (this.DOMConstructed) {
                    TSUI.Animation.RegisterAnimationForSingleCallback(new TSUI.Animation.AnimationCallback(function (TotalElapsedTime) {
                        var val = this.Progress();
                        val /= 100;

                        var context = this._UnderlyingCanvas.Context();

                        var width = context.canvas.width = this.ActualWidth();
                        var height = context.canvas.height = this.ActualHeight();

                        var reverse = this.Reverse();

                        context.fillStyle = this._BarColourElem.css("background-color");
                        context.strokeStyle = this._BarColourElem.css("background-color");
                        context.lineWidth = 5;

                        context.clearRect(0, 0, width, height);
                        context.textAlign = "center";
                        context.textBaseline = "middle";

                        var text = this.Progress().toFixed(0) + "%";
                        var showText = this.ShowText();

                        switch (this.Type()) {
                            case UI.ProgressBarTypes.Circular:
                                var Theta = (2 * Math.PI * val);
                                var radius = (width - context.lineWidth - 2) / 2;

                                context.font = (radius * 0.65).toString() + "px Arial";

                                if (val === 1) {
                                    Theta = (2 * Math.PI) - 0.01;
                                }

                                if (reverse) {
                                    Theta = (2 * Math.PI) - Theta;
                                }

                                Theta -= (Math.PI / 2);

                                if (val > 0.01) {
                                    context.beginPath();
                                    context.moveTo(width / 2, context.lineWidth + 1);
                                    context.arc(width / 2, height / 2, radius, -Math.PI / 2, Theta, reverse);
                                    context.stroke();
                                }

                                if (showText) {
                                    context.fillStyle = this._rootElement.css("color");
                                    context.fillText(text, (width / 2), (height / 2), (radius * 2) - 10);
                                }
                                break;
                            case UI.ProgressBarTypes.Horizontal:
                                var size = val * width;
                                var x = reverse ? width - size : 0;
                                var y = 0;
                                var renderWidth = size;
                                var renderHeight = height;
                                context.font = "16px Arial";
                                context.fillRect(x, y, renderWidth, renderHeight);

                                if (showText) {
                                    context.fillStyle = this._rootElement.css("color");
                                    context.fillText(text, (width / 2), (height / 2), width);
                                }
                                break;
                            case UI.ProgressBarTypes.Vertical:
                                var size = val * height;
                                var x = 0;
                                var y = reverse ? height - size : 0;
                                var renderWidth = width;
                                var renderHeight = size;
                                context.font = "16px Arial";
                                context.fillRect(x, y, renderWidth, renderHeight);

                                if (showText) {
                                    context.fillStyle = this._rootElement.css("color");
                                    context.fillText(text, (width / 2), (height / 2), width);
                                }
                                break;
                        }
                    }, this, true));
                }
            };
            return ProgressBar;
        })(UI.Control);
        UI.ProgressBar = ProgressBar;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/ProgressSpinner.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="CanvasBox.ts" />
    /// <reference path="../Interfaces/IProgressSpinner.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var ProgressSpinner = (function (_super) {
            __extends(ProgressSpinner, _super);
            function ProgressSpinner(type) {
                if (typeof type === "undefined") { type = UI.ProgressSpinnerTypes.Horizontal; }
                _super.call(this);
                this._Type = UI.ProgressSpinnerTypes.Horizontal;
                this._AnimationDuration = 2000;
                this._ReverseAnimation = false;
                this._AnimationCallbackObj = null;

                this._rootElement.addClass("ProgressSpinner");

                this._UnderlyingCanvas = new UI.CanvasBox();
                this.Children.Add(this._UnderlyingCanvas);

                this.Type(type);
            }
            ProgressSpinner.prototype.Type = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this.RemoveClass("Circular");
                    this.RemoveClass("Horizontal");
                    this.RemoveClass("Vertical");
                    switch (value) {
                        case UI.ProgressSpinnerTypes.Circular:
                            this.AddClass("Circular");
                            break;
                        case UI.ProgressSpinnerTypes.Horizontal:
                            this.AddClass("Horizontal");
                            break;
                        case UI.ProgressSpinnerTypes.Vertical:
                            this.AddClass("Vertical");
                            break;
                    }
                    this._Type = value;
                    this._Animate();
                }
                return this._Type;
            };

            ProgressSpinner.prototype.AnimationDuration = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._AnimationDuration = value;
                }
                return this._AnimationDuration;
            };
            ProgressSpinner.prototype.Reverse = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._ReverseAnimation = value;
                }
                return this._ReverseAnimation;
            };

            ProgressSpinner.prototype._Animate = function () {
                this._RetestVisiblity();
            };

            ProgressSpinner.prototype.SetParentVisible = function (value) {
                _super.prototype.SetParentVisible.call(this, value);
                this._RetestVisiblity();
            };
            ProgressSpinner.prototype.Visible = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var vis = _super.prototype.Visible.call(this, value);
                    this._RetestVisiblity();
                    return vis;
                }
                return _super.prototype.Visible.call(this);
            };

            ProgressSpinner.prototype._RetestVisiblity = function () {
                if (this._AnimationCallbackObj !== null) {
                    TSUI.Animation.UnregisterAnimationCallback(this._AnimationCallbackObj);
                    this._AnimationCallbackObj = null;
                }

                if (this.ActuallyVisible()) {
                    var context = this._UnderlyingCanvas.Context();
                    var width = context.canvas.width = this.ActualWidth();
                    var height = context.canvas.height = this.ActualHeight();
                    var _cacheWidth = width;
                    var _cacheHeight = height;
                    var _cacheColor = this._rootElement.css("color");

                    var _cacheCallsSinceRefresh = 0;

                    this._AnimationCallbackObj = TSUI.Animation.RegisterAnimationCallback(new TSUI.Animation.AnimationCallback(function (TotalElapsedTime) {
                        _cacheCallsSinceRefresh++;
                        if (_cacheCallsSinceRefresh > 25) {
                            //Refresh cache about once a second
                            _cacheWidth = this.ActualWidth();
                            _cacheHeight = this.ActualHeight();
                            _cacheColor = this._rootElement.css("color");

                            context.canvas.width = _cacheWidth;
                            context.canvas.height = _cacheHeight;

                            _cacheCallsSinceRefresh = 0;
                        }

                        var width = _cacheWidth;
                        var height = _cacheHeight;
                        var percThrough = (TotalElapsedTime / this._AnimationDuration) % 2;

                        var type = this.Type();

                        var radius = 0;

                        context.clearRect(0, 0, width, height);

                        radius = 3;
                        var radiusPerc = 0.2;
                        var pow = 3;
                        var offsetDistMult = 3;
                        var timeOffsetDist = 0.2;

                        var AnimCircleRadius = (width - (radius * 2) - 2) / 2;
                        var circOffsetDistMult = ((radius * 3) / AnimCircleRadius);
                        var circTimeOffsetDist = 0.2;

                        context.shadowBlur = 0;

                        context.fillStyle = context.strokeStyle = _cacheColor;

                        context.beginPath();

                        if (type === UI.ProgressSpinnerTypes.Vertical) {
                            var temp = height;
                            height = width;
                            width = temp;
                        }

                        var reverse = this._ReverseAnimation;

                        var circle1Y = radius + 1;
                        var circle1X = 0;

                        var Theta = 0;
                        var pc = 0;

                        for (var circleNum = -2; circleNum < 3; circleNum++) {
                            if (reverse) {
                                circle1X = width - circle1X;
                            }

                            if (type == 0) {
                                pc = (2 + (percThrough + (circTimeOffsetDist * circleNum))) + 0.5;
                                pc %= 2;
                                circle1X = Math.PI * (Math.pow(pc - 1, 3) + 1);

                                Theta = reverse ? (2 * Math.PI) - circle1X : circle1X;
                                circle1X = AnimCircleRadius * Math.sin(Theta);
                                circle1Y = AnimCircleRadius * Math.cos(Theta);

                                circle1X += width / 2;
                                circle1Y += height / 2;

                                context.moveTo(circle1X + 0.5, circle1Y + 0.5);
                                context.arc(circle1X + 0.5, circle1Y + 0.5, radius, 0, 2 * Math.PI);
                            } else if (type === UI.ProgressSpinnerTypes.Horizontal) {
                                circle1X = (((width / 2) - (radius * offsetDistMult * circleNum)) * (Math.pow((2 * percThrough) - (2 + (timeOffsetDist * circleNum)), pow) + 1));
                                context.moveTo(circle1X + 0.5, circle1Y + 0.5);
                                context.arc(circle1X + 0.5, circle1Y + 0.5, radius, 0, 2 * Math.PI);
                            } else if (type === UI.ProgressSpinnerTypes.Vertical) {
                                circle1X = (((width / 2) - (radius * offsetDistMult * circleNum)) * (Math.pow((2 * percThrough) - (2 + (timeOffsetDist * circleNum)), pow) + 1));
                                context.moveTo(circle1Y + 0.5, circle1X + 0.5);
                                context.arc(circle1Y + 0.5, circle1X + 0.5, radius, 0, 2 * Math.PI);
                            }
                        }

                        context.fill();
                    }, this));
                }
            };
            return ProgressSpinner;
        })(UI.Control);
        UI.ProgressSpinner = ProgressSpinner;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/SplitContainer.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/ISplitContainer.d.ts" />
    /// <reference path="SplitterGrip.ts" />
    /// <reference path="Panel.ts" />
    (function (UI) {
        var SplitContainer = (function (_super) {
            __extends(SplitContainer, _super);
            function SplitContainer() {
                _super.call(this);
                this.boolean = false;

                this._rootElement.addClass("SplitContainer");

                this.Panel1 = new UI.Panel();
                this.Panel2 = new UI.Panel();

                this.Panel1.AddClass("Panel1");
                this.Panel2.AddClass("Panel2");

                this.Children.Add(this.Panel1);
                this.Children.Add(this.Panel2);

                this.MainSplitterGrip = new UI.SplitterGrip();
                this.Children.Add(this.MainSplitterGrip);

                this.MainSplitterGrip.OnMouseDown.Attach(new TSUI.Events.MouseDownEventHandler(this.MainSplitterGrip_OnMouseDown, this));
                this._MainSplitterGrip_MouseUpHandler = new TSUI.Events.MouseUpEventHandler(this.MainSplitterGrip_OnMouseUp, this);
                this._MainSplitterGrip_MouseMoveHandler = new TSUI.Events.MouseMoveEventHandler(this.MainSplitterGrip_OnMouseMove, this);

                this.MainSplitterGrip.OnSplitterMove.Attach(new TSUI.Events.SplitterMoveEventHandler(this.MainSplitterGrip_OnSplitterMove, this));
                this.MainSplitterGrip.OnOrientationChanged.Attach(new TSUI.Events.OrientationChangedEventHandler(this.MainSplitterGrip_OnOrientationChanged, this));

                this.OnResize.Attach(new TSUI.Events.ResizeEventHandler(this._This_Resized, this));

                this.Width(new UI.CSSNumber(100, "%"));
                this.Height(new UI.CSSNumber(100, "%"));
            }
            SplitContainer.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this.MainSplitterGrip.Orientation(_this.MainSplitterGrip.Orientation());
                    _this.MainSplitterGrip.SplitterDistance(_this.MainSplitterGrip.SplitterDistance());
                    _this.MainSplitterGrip.SplitterWidth(_this.MainSplitterGrip.SplitterWidth());

                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            SplitContainer.prototype.Orientation = function (value) {
                return this.MainSplitterGrip.Orientation(value);
            };

            SplitContainer.prototype.MainSplitterGrip_OnMouseDown = function (eventArgs) {
                this._MainSplitterGrip_Dragging = true;
                TSUI.StopEvent(eventArgs.jqEvent);

                this.MainSplitterGrip.OnMouseUp.Attach(this._MainSplitterGrip_MouseUpHandler);
                this.MainSplitterGrip.OnMouseMove.Attach(this._MainSplitterGrip_MouseMoveHandler);
            };
            SplitContainer.prototype.MainSplitterGrip_OnMouseUp = function (eventArgs) {
                if (this._MainSplitterGrip_Dragging) {
                    this._MainSplitterGrip_Dragging = false;
                    TSUI.StopEvent(eventArgs.jqEvent);

                    this.MainSplitterGrip.OnMouseUp.Detach(this._MainSplitterGrip_MouseUpHandler);
                    this.MainSplitterGrip.OnMouseMove.Detach(this._MainSplitterGrip_MouseMoveHandler);
                }
            };
            SplitContainer.prototype.MainSplitterGrip_OnMouseMove = function (eventArgs) {
                if (this._MainSplitterGrip_Dragging) {
                    if (!this.MainSplitterGrip.ActuallyEnabled()) {
                        this._MainSplitterGrip_Dragging = false;
                    } else {
                        var width = this.ActualWidth();
                        var height = this.ActualHeight();
                        var xPerc = ((eventArgs.jqEvent.pageX - this.PageLeft()) / width) * 100;
                        var yPerc = ((eventArgs.jqEvent.pageY - this.PageTop()) / height) * 100;

                        if (this.MainSplitterGrip.Orientation() === UI.SplitterGrip_Orientations.Horizontal) {
                            this.MainSplitterGrip.SplitterDistance(yPerc);
                        } else {
                            this.MainSplitterGrip.SplitterDistance(xPerc);
                        }
                    }
                    TSUI.StopEvent(eventArgs.jqEvent);
                }
            };
            SplitContainer.prototype.MainSplitterGrip_OnSplitterMove = function (eventArgs) {
                var perc = this.MainSplitterGrip.SplitterDistance();
                var OK = true;
                if (this.MainSplitterGrip.Orientation() === UI.SplitterGrip_Orientations.Horizontal) {
                    var minHeight = this.Panel1.MinHeight();
                    var minHeightVal = minHeight.Units === "px" ? (minHeight.Value / this.ActualHeight()) * 100 : minHeight.Value;
                    if (!minHeight.Auto && perc < minHeightVal) {
                        perc = minHeightVal;
                        this.MainSplitterGrip.Top(new UI.CSSNumber(perc, "%"));
                        OK = false;
                    }

                    if (OK) {
                        minHeight = this.Panel2.MinHeight();
                        minHeightVal = minHeight.Units === "px" ? (minHeight.Value / this.ActualHeight()) * 100 : minHeight.Value;
                        minHeightVal = 100 - minHeightVal;
                        if (!minHeight.Auto && perc > minHeightVal) {
                            perc = minHeightVal;
                            this.MainSplitterGrip.Top(new UI.CSSNumber(perc, "%"));
                            OK = false;
                        }
                    }
                } else {
                    var minWidth = this.Panel1.MinWidth();
                    var minWidthVal = minWidth.Units === "px" ? (minWidth.Value / this.ActualWidth()) * 100 : minWidth.Value;
                    if (!minWidth.Auto && perc < minWidthVal) {
                        perc = minWidthVal;
                        this.MainSplitterGrip.Left(new UI.CSSNumber(perc, "%"));
                        OK = false;
                    }

                    if (OK) {
                        minWidth = this.Panel2.MinWidth();
                        minWidthVal = minWidth.Units === "px" ? (minWidth.Value / this.ActualWidth()) * 100 : minWidth.Value;
                        minWidthVal = 100 - minWidthVal;
                        if (!minWidth.Auto && perc > minWidthVal) {
                            perc = minWidthVal;
                            this.MainSplitterGrip.Left(new UI.CSSNumber(perc, "%"));
                            OK = false;
                        }
                    }
                }

                if (this.MainSplitterGrip.Orientation() === UI.SplitterGrip_Orientations.Horizontal) {
                    this.Panel1.Height(new UI.CSSNumber(perc, "%"));
                    this.Panel2.Height(new UI.CSSNumber(100 - perc, "%"));
                    this.Panel2.Top(new UI.CSSNumber(perc, "%"));
                } else {
                    this.Panel1.Width(new UI.CSSNumber(perc, "%"));
                    this.Panel2.Width(new UI.CSSNumber(100 - perc, "%"));
                    this.Panel2.Left(new UI.CSSNumber(perc, "%"));
                }
            };
            SplitContainer.prototype.MainSplitterGrip_OnOrientationChanged = function (eventArgs) {
                if (this.MainSplitterGrip.Orientation() === UI.SplitterGrip_Orientations.Horizontal) {
                    this.Panel1.Width(new UI.CSSNumber(100, "%"));
                    this.Panel2.Width(new UI.CSSNumber(100, "%"));
                    this.Panel1.Left(new UI.CSSNumber(0));
                    this.Panel2.Left(new UI.CSSNumber(0));
                } else {
                    this.Panel1.Height(new UI.CSSNumber(100, "%"));
                    this.Panel2.Height(new UI.CSSNumber(100, "%"));
                    this.Panel1.Top(new UI.CSSNumber(0));
                    this.Panel2.Top(new UI.CSSNumber(0));
                }
                this.MainSplitterGrip.SplitterDistance(this.MainSplitterGrip.SplitterDistance());
            };

            SplitContainer.prototype._This_Resized = function (eventArgs) {
                this.MainSplitterGrip.SplitterDistance(this.MainSplitterGrip.SplitterDistance());
            };
            return SplitContainer;
        })(UI.Control);
        UI.SplitContainer = SplitContainer;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/SplitterGrip.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/ISplitterGrip.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var SplitterGrip = (function (_super) {
            __extends(SplitterGrip, _super);
            function SplitterGrip() {
                _super.call(this);
                this._Orientation = UI.SplitterGrip_Orientations.Vertical;
                this._SplitterDistance = 50;
                this._SplitterWidth = 15;

                this._rootElement.addClass("SplitterGrip");

                this.OnSplitterMove = new TSUI.Events.SplitterMoveEvent();
                this.OnOrientationChanged = new TSUI.Events.OrientationChangedEvent();
            }
            SplitterGrip.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.text("&nbsp;");

                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            SplitterGrip.prototype.MaxDistance = function () {
                return 99.5;
            };

            SplitterGrip.prototype.Orientation = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Orientation = value;

                    var orientation = this.Orientation();
                    this._rootElement.css({
                        height: (orientation === UI.SplitterGrip_Orientations.Horizontal) ? value.toString() + "%" : "100%",
                        width: (orientation === UI.SplitterGrip_Orientations.Vertical) ? value.toString() + "%" : "100%",
                        top: (orientation === UI.SplitterGrip_Orientations.Horizontal) ? value.toString() + "%" : "0px",
                        left: (orientation === UI.SplitterGrip_Orientations.Vertical) ? value.toString() + "%" : "0px"
                    });

                    if (orientation === UI.SplitterGrip_Orientations.Horizontal) {
                        this._rootElement.removeClass("Vertical");
                        this._rootElement.addClass("Horizontal");
                    } else {
                        this._rootElement.removeClass("Horizontal");
                        this._rootElement.addClass("Vertical");
                    }
                    this.OnOrientationChanged.Invoke(new TSUI.Events.OrientationChangedEventArgs(this));
                }
                return this._Orientation;
            };

            SplitterGrip.prototype.SplitterDistance = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var max = this.MaxDistance();
                    value = value < 0 ? 0 : (value > max ? max : value);
                    this._SplitterDistance = value;

                    var orientation = this.Orientation();
                    this._rootElement.css({
                        top: (orientation === UI.SplitterGrip_Orientations.Horizontal) ? value.toString() + "%" : "0px",
                        left: (orientation === UI.SplitterGrip_Orientations.Vertical) ? value.toString() + "%" : "0px"
                    });

                    this.OnSplitterMove.Invoke(new TSUI.Events.SplitterMoveEventArgs(this));
                }
                return this._SplitterDistance;
            };

            SplitterGrip.prototype.SplitterWidth = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._SplitterWidth = value;

                    var orientation = this.Orientation();
                    this._rootElement.css({
                        height: (orientation === UI.SplitterGrip_Orientations.Horizontal) ? value.toString() + "px" : "100%",
                        width: (orientation === UI.SplitterGrip_Orientations.Vertical) ? value.toString() + "px" : "100%"
                    });
                }
                return this._SplitterWidth;
            };
            return SplitterGrip;
        })(UI.Control);
        UI.SplitterGrip = SplitterGrip;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Tab.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Animation/IAnimator.d.ts" />
    /// <reference path="../../Animation/FadeAnimator.ts" />
    /// <reference path="../Interfaces/ITab.d.ts" />
    /// <reference path="Panel.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var Tab = (function (_super) {
            __extends(Tab, _super);
            function Tab() {
                _super.call(this);
                this.OnNameChange = new TSUI.Events.NameChangeEvent();
                this._Name = "A Tab";

                this._rootElement.addClass("Tab");

                this.ApplyStyle("display", "none");
            }
            Tab.prototype.Name = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var oldVal = this._Name;
                    this._Name = value;
                    if (oldVal !== value) {
                        this.OnNameChange.Invoke(new TSUI.Events.NameChangeEventArgs(this, oldVal));
                    }
                }
                return this._Name;
            };

            Tab.prototype.Hide = function (callback, animator) {
                if (typeof animator === "undefined") { animator = new TSUI.Animation.FadeAnimator(); }
                var _this = this;
                _super.prototype.Hide.call(this, function () {
                    _this.AnimationElement().css({
                        display: "none"
                    });
                    if (callback) {
                        callback();
                    }
                }, animator);
            };
            return Tab;
        })(UI.Panel);
        UI.Tab = Tab;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/TabControl.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/ITab.d.ts" />
    /// <reference path="Button.ts" />
    /// <reference path="Panel.ts" />
    /// <reference path="../Interfaces/ITabControl.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var TabControl = (function (_super) {
            __extends(TabControl, _super);
            function TabControl() {
                _super.call(this);
                this.OnSelectedIndexChange = new TSUI.Events.SelectedIndexChangeEvent();
                this.Tabs = new TSUI.Collections.List();
                this._TabButtons = [];
                this._FocusIndex = -1;
                this._GetElementWithHighestSequentialTabIndex_Cache = null;
                this._SelectedIndex = -1;

                this._rootElement.addClass("TabControl");

                this._TabButtonsPanel = new UI.Panel();
                this._TabButtonsPanel.AddClass("TabButtons");
                this.Children.Add(this._TabButtonsPanel);

                this._TabButtonsInnerPanel = new UI.Panel();
                this._TabButtonsInnerPanel.RelativeLayoutOn();
                this._TabButtonsPanel.Children.Add(this._TabButtonsInnerPanel);

                this._TabsContainer = new UI.Panel();
                this._TabsContainer.AddClass("TabsContainer");
                this.Children.Add(this._TabsContainer);

                this._SelectedTabBar = new UI.Panel();
                this._SelectedTabBar.AddClass("SelectedTabBar");
                this._TabButtonsInnerPanel.Children.Add(this._SelectedTabBar);

                this.Tabs.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._Tabs_OnModified, this));
            }
            TabControl.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    if (_this.Tabs.Count() > 0) {
                        var tab = _this.Tabs.ElementAt(0);
                        var tabButton = _this._TabButtons[tab.Name()];

                        tabButton.AddClass("Selected");
                        tab.Visible(true);
                        _this._SelectedIndex = 0;

                        var tabButtonLeft = tabButton.AnimationElement().position().left;
                        var tabButtonWidth = tabButton.ActualWidth();
                        _this._SelectedTabBar.AnimationElement().css({
                            left: tabButtonLeft,
                            width: tabButtonWidth
                        });

                        var totalButtonWidth = 0;
                        for (var i = 0; i < _this.Tabs.Count(); i++) {
                            var tab = _this.Tabs.ElementAt(i);
                            var tabButton = _this._TabButtons[tab.Name()];
                            totalButtonWidth += tabButton.ActualWidth();
                        }
                        _this._TabButtonsInnerPanel.Width(new UI.CSSNumber(totalButtonWidth + 10));
                    }

                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            TabControl.prototype._UnderlyingControl_KeyDown = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    if (eventArgs.jqEvent.keyCode === 38) {
                        if (this._FocusIndex > 0) {
                            if (this._FocusIndex > -1) {
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                            }
                            this._FocusIndex--;
                            this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                        }
                        TSUI.StopEvent(eventArgs.jqEvent);
                    } else if (eventArgs.jqEvent.keyCode === 40) {
                        if (this._FocusIndex < this.Tabs.Count() - 1) {
                            if (this._FocusIndex > -1) {
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                            }
                            this._FocusIndex++;
                            this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                        }
                        TSUI.StopEvent(eventArgs.jqEvent);
                    } else if (eventArgs.jqEvent.keyCode === 9) {
                        if (eventArgs.jqEvent.shiftKey) {
                            if (this._FocusIndex > 0) {
                                UI.preventTabKey = true;
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                                this._FocusIndex--;
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else if (this._FocusIndex === -1) {
                                this._FocusIndex = this.Tabs.Count() - 1;
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                                UI.preventTabKey = true;
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else {
                                this._FocusIndex = -1;
                                UI.preventTabKey = false;
                            }
                        } else {
                            if (this._FocusIndex === -1 && this.Tabs.Count() > 0) {
                                UI.preventTabKey = true;
                                this._FocusIndex++;
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else if (this._FocusIndex < this.Tabs.Count() - 1) {
                                UI.preventTabKey = true;
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                                this._FocusIndex++;
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else {
                                if (this._FocusIndex !== -1) {
                                    this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                                }
                                this._GetElementWithHighestSequentialTabIndex().Focus();
                                UI.preventTabKey = false;
                                this._FocusIndex = -1;
                            }
                        }
                    }
                } else {
                    TSUI.StopEvent(eventArgs.jqEvent);
                }
            };

            TabControl.prototype._GetElementWithHighestSequentialTabIndex = function () {
                if (this._GetElementWithHighestSequentialTabIndex_Cache === null) {
                    var result = this._TabButtons[this.Tabs.ElementAt(0).Name()].TabIndex();
                    var resultElem = this._TabButtons[this.Tabs.ElementAt(0).Name()];
                    var highest = 0;
                    var excludeTBs = [];
                    var elems = [];
                    for (var i = 0; i < this.Tabs.Count(); i++) {
                        var elem = this._TabButtons[this.Tabs.ElementAt(i).Name()];
                        var tb = elem.TabIndex();
                        excludeTBs.push(tb);
                        if (tb > highest) {
                            highest = tb;
                            elems[tb] = elem;
                        }
                    }
                    for (var i = result + 1; i <= highest; i++) {
                        if (excludeTBs.indexOf(i) === -1) {
                            var el = $("*[tabindex=\"" + i.toString(10) + "\"]");
                            if (el.length > 0) {
                                break;
                            }
                        } else {
                            result = i;
                            resultElem = elems[i];
                        }
                    }

                    this._GetElementWithHighestSequentialTabIndex_Cache = resultElem;
                }

                return this._GetElementWithHighestSequentialTabIndex_Cache;
            };

            TabControl.prototype._Tabs_OnModified = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._ConstructTab(elem);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._DestroyTab(elem);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        this._TabButtonsInnerPanel.Children.Clear();
                        this._TabsContainer.Children.Clear();
                        this._TabButtons = [];
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._ConstructTab(elem);
                        }
                        break;
                }
            };
            TabControl.prototype._ConstructTab = function (tab) {
                this._TabsContainer.Children.Add(tab);

                var newTabButton = new UI.Button();
                newTabButton.AddClass("TabButton");
                newTabButton.Text(tab.Name());
                newTabButton.RelativeLayoutOn();
                newTabButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._TabButton_Clicked, this));
                newTabButton.OnKeyDown.Attach(new TSUI.Events.KeyDownEventHandler(this._UnderlyingControl_KeyDown, this));
                this._TabButtonsInnerPanel.Children.Add(newTabButton);

                this._TabButtons[tab.Name()] = newTabButton;

                if (this.DOMConstructed) {
                    var totalButtonWidth = 0;
                    for (var i = 0; i < this.Tabs.Count(); i++) {
                        var tab = this.Tabs.ElementAt(i);
                        var tabButton = this._TabButtons[tab.Name()];
                        totalButtonWidth += tabButton.ActualWidth();
                    }
                    this._TabButtonsInnerPanel.Width(new UI.CSSNumber(totalButtonWidth + 10));
                }
            };
            TabControl.prototype._DestroyTab = function (tab) {
                this._TabsContainer.Children.Remove(tab);

                var name = tab.Name();
                var tabButton = this._TabButtons[name];
                this._TabButtonsInnerPanel.Children.Remove(tabButton);
                this._TabButtons[name] = undefined;
            };

            TabControl.prototype._Tab_NameChanged = function (eventArgs) {
                var tabButton = this._TabButtons[eventArgs.oldName];
                var newName = eventArgs.Sender.Name();
                tabButton.Text(newName);
                this._TabButtons[eventArgs.oldName] = undefined;
                this._TabButtons[newName] = tabButton;
            };
            TabControl.prototype._TabButton_Clicked = function (eventArgs) {
                var index = this._TabButtonsInnerPanel.Children.IndexOf(eventArgs.Sender) - 1;
                this.SelectedIndex(index);
            };

            TabControl.prototype.SelectedIndex = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (value > -1 && value < this.Tabs.Count()) {
                        var oldVal = this._SelectedIndex;
                        this._SelectedIndex = value;

                        if (oldVal !== value) {
                            this.OnSelectedIndexChange.Invoke(new TSUI.Events.SelectedIndexChangeEventArgs(this));

                            var _this = this;
                            var wasEnabled = this.Enabled();
                            _this.Enabled(false);
                            if (oldVal !== -1) {
                                this._HideTab(oldVal);
                            }
                            this._ShowTab(value, function () {
                                _this.Enabled(wasEnabled);
                            });
                        }
                    }
                }
                return this._SelectedIndex;
            };

            TabControl.prototype._ShowTab = function (index, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var tab = this.Tabs.ElementAt(index);
                var tabButton = this._TabButtons[tab.Name()];

                var tabButtonLeft = tabButton.AnimationElement().position().left;
                var tabButtonWidth = tabButton.ActualWidth();
                this._SelectedTabBar.AnimationElement().animate({
                    left: tabButtonLeft,
                    width: tabButtonWidth
                }, 350, "swing");

                tabButton.AddClass("Selected");
                tab.ApplyStyle("z-index", "2");
                tab.Show(callback);
            };
            TabControl.prototype._HideTab = function (index, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var tab = this.Tabs.ElementAt(index);
                var tabButton = this._TabButtons[tab.Name()];

                tabButton.RemoveClass("Selected");
                tab.ApplyStyle("z-index", "1");
                tab.Hide(callback);
            };
            return TabControl;
        })(UI.Control);
        UI.TabControl = TabControl;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Tile.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Animation/Animation_BuildRefs.d.ts" />
    /// <reference path="../../../Definitions/modernizr.d.ts" />
    /// <reference path="TileBackground.ts" />
    /// <reference path="../Interfaces/ITile.d.ts" />
    /// <reference path="Label.ts" />
    /// <reference path="TileIcon.ts" />
    /// <reference path="TileCounter.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var Tile = (function (_super) {
            __extends(Tile, _super);
            function Tile(size, type) {
                if (typeof size === "undefined") { size = UI.TileSizes.Large; }
                if (typeof type === "undefined") { type = UI.TileTypes.Flip; }
                _super.call(this);
                this.Backgrounds = new TSUI.Collections.List();
                this._Size = null;
                this._Type = null;
                this.MaxTime = 12000;
                this.MinTime = 6000;
                this.ShouldCycle = true;
                this._CycleCallback = null;
                this._CycleRef = -1;
                this._CycleTime = -1;
                this.doCycle = true;
                this._CurrBgIndex = -1;
                this._ShowingBg = false;
                this._HidingBg = false;

                this._rootElement.addClass("Tile");

                this.Focusable(true);

                this.NameLabel = new UI.Label();
                this.NameLabel.AddClass("Name");
                this.Children.Add(this.NameLabel);

                this.TextLabel = new UI.Label();
                this.TextLabel.AddClass("Text");
                this.Children.Add(this.TextLabel);

                this.IconBox = new UI.TileIcon();
                this.Children.Add(this.IconBox);

                this.Counter = new UI.TileCounter();
                this.Children.Add(this.Counter);

                this.Size(size);
                this.Type(type);

                this.Backgrounds.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._Backgrounds_Modified, this));
            }
            Tile.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                _super.prototype.ConstructDOM.call(this, parent, onComplete);

                this.StartCycle();
            };

            Tile.prototype._Backgrounds_Modified = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._ConstructBackground(elem);
                        }
                        if (this._CurrBgIndex === -1) {
                            this.ShowBackground(0);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            elem.DestroyDOM();
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        break;
                }
            };
            Tile.prototype._ConstructBackground = function (bg) {
                bg.SetPosition(UI.TileBackgroundPositions.OffTop);
                this.Children.Add(bg);
            };

            Tile.prototype.Size = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Size = value;

                    this.RemoveClass("LargeSquare");
                    this.RemoveClass("Large");
                    this.RemoveClass("Medium");
                    this.RemoveClass("Small");
                    switch (value) {
                        case UI.TileSizes.Small:
                            this.AddClass("Small");
                            break;
                        case UI.TileSizes.Medium:
                            this.AddClass("Medium");
                            break;
                        case UI.TileSizes.Large:
                            this.AddClass("Large");
                            break;
                        case UI.TileSizes.LargeSquare:
                            this.AddClass("LargeSquare");
                            break;
                    }
                }
                return this._Size;
            };

            Tile.prototype.Type = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Type = value;

                    this.RemoveClass("Flip");
                    this.RemoveClass("Iconic");
                    this.RemoveClass("Cycle");
                    switch (value) {
                        case UI.TileTypes.Flip:
                            this.AddClass("Flip");
                            this.StartCycle();
                            break;
                        case UI.TileTypes.Iconic:
                            this.AddClass("Iconic");
                            this.StopCycle();
                            this.HideBackground();
                            break;
                        case UI.TileTypes.Cycle:
                            this.AddClass("Cycle");
                            this.StartCycle();
                            break;
                    }
                }
                return this._Type;
            };

            Tile.prototype.ShowCounter = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (value && !this.ShowCounter()) {
                        this.RemoveClass("NoCounter");
                    } else if (!value && this.ShowCounter()) {
                        this.AddClass("NoCounter");
                    }
                }
                return !this.HasClass("NoCounter");
            };

            Tile.prototype.StartCycle = function () {
                if (this._CycleCallback === null && this.ShouldCycle && this.DOMConstructed) {
                    var _this = this;
                    this._CycleTime = (Math.random() * (_this.MaxTime - _this.MinTime)) + _this.MinTime;
                    this._CycleCallback = new TSUI.Animation.AnimationCallback(this._OnCycle, this);
                    this._SetupCycleTimeout();
                }
            };
            Tile.prototype.StopCycle = function () {
                if (this._CycleCallback !== null) {
                    TSUI.Animation.UnregisterAnimationCallback(this._CycleCallback);
                    this._CycleCallback = null;
                }
                if (this._CycleRef !== -1) {
                    clearTimeout(this._CycleRef);
                    this._CycleRef = -1;
                }
            };

            Tile.prototype._SetupCycleTimeout = function () {
                if (this._CycleCallback !== null) {
                    var _this = this;
                    this._CycleRef = setTimeout(function () {
                        TSUI.Animation.RegisterAnimationForSingleCallback(_this._CycleCallback);
                    }, this._CycleTime);
                }
            };

            Tile.prototype._OnCycle = function (TotalElapsedTime) {
                if (this.ActuallyEnabled()) {
                    if (this.Type() === UI.TileTypes.Flip) {
                        this.Flip();
                    } else if (this.Type() === UI.TileTypes.Cycle) {
                        this.CycleBackground();
                    }
                }
                this._SetupCycleTimeout();
            };

            Tile.prototype.Flip = function () {
                this.Flipped(!this.Flipped());
            };
            Tile.prototype.Flipped = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null && this.ActuallyVisible() && this.ActuallyEnabled()) {
                    if (value && !this.Flipped()) {
                        if (Modernizr.csstransitions || this.Size() === UI.TileSizes.Small) {
                            this.AddClass("Flipped");
                        } else {
                            var _this = this;
                            _this.TextLabel.ApplyStyles({
                                display: "inline-block",
                                visiblity: "visible",
                                opacity: 0
                            });
                            _this.Counter.ApplyStyles({
                                opacity: 1
                            });
                            _this.Counter.AnimationElement().animate({
                                opacity: 0
                            }, 500, "linear", function () {
                                _this.TextLabel.AnimationElement().animate({
                                    opacity: 1
                                }, 500, "linear", function () {
                                    _this.AddClass("Flipped");
                                    _this.TextLabel.ApplyStyles({
                                        display: "",
                                        visiblity: "",
                                        opacity: 1
                                    });
                                    _this.Counter.ApplyStyles({
                                        opacity: 0
                                    });
                                });
                            });
                            if (_this._CurrBgIndex !== -1) {
                                _this.Backgrounds.ElementAt(_this._CurrBgIndex).AnimationElement().animate({
                                    opacity: 0
                                }, 500, "linear");
                            }
                            _this.IconBox.AnimationElement().animate({
                                opacity: 0
                            }, 500, "linear");
                        }
                    } else if (!value && this.Flipped()) {
                        if (Modernizr.csstransitions || this.Size() === UI.TileSizes.Small) {
                            this.RemoveClass("Flipped");
                        } else {
                            var _this = this;
                            _this.TextLabel.ApplyStyles({
                                display: "",
                                visiblity: "",
                                opacity: 1
                            });
                            _this.Counter.ApplyStyles({
                                opacity: 0
                            });
                            _this.TextLabel.AnimationElement().animate({
                                opacity: 0
                            }, 500, "linear", function () {
                                _this.Counter.AnimationElement().animate({
                                    opacity: 1
                                }, 500, "linear", function () {
                                    _this.RemoveClass("Flipped");
                                    _this.TextLabel.ApplyStyles({
                                        display: "",
                                        visiblity: "",
                                        opacity: 0
                                    });
                                    _this.Counter.ApplyStyles({
                                        opacity: 1
                                    });
                                });

                                if (_this._CurrBgIndex !== -1) {
                                    _this.Backgrounds.ElementAt(_this._CurrBgIndex).AnimationElement().animate({
                                        opacity: 1
                                    }, 500, "linear");
                                }
                                _this.IconBox.AnimationElement().animate({
                                    opacity: 1
                                }, 500, "linear");
                            });
                        }
                    }
                }
                return this.HasClass("Flipped");
            };

            Tile.prototype.CycleBackground = function () {
                if (this.Backgrounds.Count() > 0 && this.ActuallyVisible() && this.ActuallyEnabled()) {
                    this.ShowBackground(this._CurrBgIndex + 1 == this.Backgrounds.Count() ? 0 : this._CurrBgIndex + 1);
                }
            };

            Tile.prototype.ShowBackground = function (index) {
                if (!this._ShowingBg && index !== this._CurrBgIndex && index > -1 && index < this.Backgrounds.Count()) {
                    this._ShowingBg = true;

                    var bg = this.Backgrounds.ElementAt(index);
                    bg.SetPosition(UI.TileBackgroundPositions.OffTop);

                    var _this = this;

                    if (Modernizr.csstransitions) {
                        setTimeout(function () {
                            bg.SetPosition(UI.TileBackgroundPositions.In);
                            _this.HideBackground(function () {
                                _this._CurrBgIndex = index;
                                _this._ShowingBg = false;
                            });
                        }, 2000);
                    } else {
                        var animElem = bg.AnimationElement();

                        this.HideBackground(function () {
                            _this._CurrBgIndex = index;
                        });

                        animElem.animate({
                            top: 0
                        }, 1000, "linear", function () {
                            bg.ApplyStyle("top", "");
                            bg.SetPosition(UI.TileBackgroundPositions.In);

                            _this._CurrBgIndex = index;
                            _this._ShowingBg = false;
                        });
                    }
                }
            };

            Tile.prototype.HideBackground = function (callback) {
                if (!this._HidingBg && this._CurrBgIndex != -1 && this._CurrBgIndex < this.Backgrounds.Count()) {
                    this._HidingBg = true;
                    var bg = this.Backgrounds.ElementAt(this._CurrBgIndex);
                    var _this = this;

                    if (Modernizr.csstransitions) {
                        bg.SetPosition(UI.TileBackgroundPositions.OffBottom);

                        setTimeout(function () {
                            _this._HidingBg = false;

                            _this._CurrBgIndex = -1;
                            if (callback) {
                                callback();
                            }
                        }, 2000);
                    } else {
                        var animElem = bg.AnimationElement();

                        animElem.animate({
                            top: "100%"
                        }, 1000, "linear", function () {
                            bg.ApplyStyle("top", "");
                            bg.SetPosition(UI.TileBackgroundPositions.OffBottom);

                            _this._CurrBgIndex = -1;
                            _this._HidingBg = false;

                            if (callback) {
                                callback();
                            }
                        });
                    }
                } else if (callback) {
                    callback();
                }
            };

            Tile.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };
            return Tile;
        })(UI.Control);
        UI.Tile = Tile;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/TileCounter.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/ITileCounter.d.ts" />
    /// <reference path="Label.ts" />
    (function (UI) {
        var TileCounter = (function (_super) {
            __extends(TileCounter, _super);
            function TileCounter() {
                _super.call(this);

                this._rootElement.addClass("Counter");
            }
            return TileCounter;
        })(UI.Label);
        UI.TileCounter = TileCounter;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/TileIcon.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
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
    (function (UI) {
        UI.IconsDirectory = "Images/";
        UI.TileIcons = {
            About: "InfoIcon.png",
            Download: "DownloadIcon.png",
            Secure: "SecureIcon.png"
        };

        var TileIcon = (function (_super) {
            __extends(TileIcon, _super);
            function TileIcon() {
                _super.call(this);

                this._rootElement.addClass("Icon");
            }
            TileIcon.prototype.Source = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value === UI.TileIcons.About || value === UI.TileIcons.Download || value === UI.TileIcons.Secure) {
                    value = UI.IconsDirectory + value;
                }

                var result = _super.prototype.Source.call(this, value);
                if (value.indexOf(UI.IconsDirectory) === 0) {
                    value = value.substring(UI.IconsDirectory.length, value.length);
                }
                return result;
            };
            return TileIcon;
        })(UI.ImageBox);
        UI.TileIcon = TileIcon;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/TrackBar.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="Panel.ts" />
    /// <reference path="../Interfaces/ITrackBar.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var TrackBar = (function (_super) {
            __extends(TrackBar, _super);
            function TrackBar() {
                _super.call(this);
                this._Grip_Dragging = false;
                this._Mode = UI.TrackBarModes.Discrete;
                this._Max = 100;
                this._Min = 0;
                this._Divisions = 10;
                this._Value = 0;

                this._rootElement.addClass("TrackBar");

                this._BarElement = new UI.Panel();
                this._BarElement.AddClass("Bar");
                this.Children.Add(this._BarElement);

                this._GripElement = new UI.Panel();
                this._GripElement.AddClass("Grip");
                this.Children.Add(this._GripElement);

                this.OnValueChange = new TSUI.Events.ValueChangeEvent();

                this._GripElement.OnMouseDown.Attach(new TSUI.Events.MouseDownEventHandler(this._Grip_OnMouseDown, this));

                this._MouseUpHandler = new TSUI.Events.MouseUpEventHandler(this._Grip_OnMouseUp, this);
                this._MouseMoveHandler = new TSUI.Events.MouseMoveEventHandler(this._Grip_OnMouseMove, this);

                this.OnKeyDown.Attach(new TSUI.Events.KeyDownEventHandler(this._This_OnKeyDown, this));

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_OnClick, this));

                this.Focusable(true);
            }
            TrackBar.prototype.Mode = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Mode = value;
                }
                return this._Mode;
            };

            TrackBar.prototype.Max = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Max = value;

                    this.Value(this.Value());
                }
                return this._Max;
            };

            TrackBar.prototype.Min = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Min = value;

                    this.Value(this.Value());
                }
                return this._Min;
            };

            TrackBar.prototype.Divisions = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Divisions = value;
                }
                return this._Divisions;
            };

            TrackBar.prototype.Value = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    value = Math.max(this._Min, Math.min(this._Max, value));

                    var oldVal = this._Value;
                    this._Value = value;

                    var width = this.ActualWidth();
                    var range = this._Max - this._Min;
                    var gripDistPerc = (value - this._Min) / range;
                    var gripX = gripDistPerc * width;
                    var gripWidth = this._GripElement.ActualWidth();
                    gripX -= (gripWidth / 2);
                    gripX = Math.max(0, Math.min(width - gripWidth, gripX));
                    this._GripElement.Left(new UI.CSSNumber(gripX));

                    if (oldVal !== value) {
                        this.OnValueChange.Invoke(new TSUI.Events.ValueChangeEventArgs(this));
                    }
                }
                return this._Value;
            };

            TrackBar.prototype._Grip_OnMouseDown = function (eventArgs) {
                this._Grip_Dragging = true;
                TSUI.StopEvent(eventArgs.jqEvent);
                this._GripElement.OnMouseUp.Attach(this._MouseUpHandler);
                this._GripElement.OnMouseMove.Attach(this._MouseMoveHandler);
                this.Focus();
            };
            TrackBar.prototype._Grip_OnMouseUp = function (eventArgs) {
                if (this._Grip_Dragging) {
                    this._Grip_Dragging = false;
                    TSUI.StopEvent(eventArgs.jqEvent);
                    this._GripElement.OnMouseUp.Detach(this._MouseUpHandler);
                    this._GripElement.OnMouseMove.Detach(this._MouseMoveHandler);
                }
            };
            TrackBar.prototype._Grip_OnMouseMove = function (eventArgs) {
                if (this._Grip_Dragging) {
                    var barLeft = this._rootElement.offset().left;
                    var dist = eventArgs.jqEvent.pageX - barLeft;
                    var width = this.ActualWidth();
                    var range = this._Max - this._Min;
                    var distPerc = dist / width;
                    var val = this._Min + (range * distPerc);
                    switch (this._Mode) {
                        case UI.TrackBarModes.Continuous:
                            break;
                        case UI.TrackBarModes.Discrete:
                            var divionVals = range / this._Divisions;
                            val = TSUI.roundTo(val, divionVals);
                            break;
                    }

                    this.Value(val);
                    TSUI.StopEvent(eventArgs.jqEvent);
                }
            };

            TrackBar.prototype._This_OnClick = function (eventArgs) {
                var dist = eventArgs.jqEvent.pageX - this._rootElement.offset().left;
                var width = this.ActualWidth();
                var range = this._Max - this._Min;
                var distPerc = dist / width;
                var val = this._Value;
                var mouseVal = this._Min + (range * distPerc);
                switch (this._Mode) {
                    case UI.TrackBarModes.Continuous:
                        val = mouseVal;
                        break;
                    case UI.TrackBarModes.Discrete:
                        var divisionVals = range / this._Divisions;
                        if (mouseVal > val) {
                            val += divisionVals;
                        } else {
                            val -= divisionVals;
                        }
                        break;
                }
                this.Value(val);
                TSUI.StopEvent(eventArgs.jqEvent);
            };

            TrackBar.prototype._This_OnKeyDown = function (eventArgs) {
                if (eventArgs.jqEvent.keyCode === 37) {
                    var width = this.ActualWidth();
                    var range = this._Max - this._Min;
                    var val = this._Value;
                    switch (this._Mode) {
                        case UI.TrackBarModes.Continuous:
                            val -= range / 100;
                            break;
                        case UI.TrackBarModes.Discrete:
                            var divisionVals = range / this._Divisions;
                            val -= divisionVals;
                            break;
                    }
                    this.Value(val);
                    TSUI.StopEvent(eventArgs.jqEvent);
                } else if (eventArgs.jqEvent.keyCode === 39) {
                    var width = this.ActualWidth();
                    var range = this._Max - this._Min;
                    var val = this._Value;
                    switch (this._Mode) {
                        case UI.TrackBarModes.Continuous:
                            val += range / 100;
                            break;
                        case UI.TrackBarModes.Discrete:
                            var divisionVals = range / this._Divisions;
                            val += divisionVals;
                            break;
                    }
                    this.Value(val);
                    TSUI.StopEvent(eventArgs.jqEvent);
                }
            };

            TrackBar.prototype.InvokeDefaultAction = function () {
            };
            return TrackBar;
        })(UI.Control);
        UI.TrackBar = TrackBar;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/TitleBar.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="Label.ts" />
    /// <reference path="../Interfaces/ITitleBar.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var TitleBar = (function (_super) {
            __extends(TitleBar, _super);
            function TitleBar() {
                _super.call(this);

                this._rootElement.addClass("TitleBar");

                this._TitleLabel = new UI.Label();
                this._TitleLabel.AddClass("Title");
                this.Children.Add(this._TitleLabel);
            }
            TitleBar.prototype.WindowMinSuitableWidth = function () {
                //+50 for close button
                return this._TitleLabel.ActualWidth() + 50;
            };

            TitleBar.prototype.Title = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TitleLabel.Text(value);
                }
                return this._TitleLabel.Text();
            };

            TitleBar.prototype.Draggable = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Draggable = value;

                    if (this._Draggable) {
                        this._rootElement.removeClass("Undraggable");
                    } else {
                        this._rootElement.addClass("Undraggable");
                    }
                }
                return this._Draggable;
            };
            return TitleBar;
        })(UI.Control);
        UI.TitleBar = TitleBar;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/ResizeGrip.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="CanvasBox.ts" />
    /// <reference path="../Interfaces/IResizeGrip.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var ResizeGrip = (function (_super) {
            __extends(ResizeGrip, _super);
            function ResizeGrip() {
                _super.call(this);
                this.GripColor = "#969696";

                this._rootElement.addClass("ResizeGrip");

                this._GripCanvas = new UI.CanvasBox();
                this.Children.Add(this._GripCanvas);
            }
            ResizeGrip.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this.Render();

                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            ResizeGrip.prototype.Enabled = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = _super.prototype.Enabled.call(this, value);
                if (value !== null) {
                    this.Render();
                }
                return result;
            };

            ResizeGrip.prototype.Render = function () {
                var width = 100;
                var height = 100;

                var renderColor = this.GripColor;

                if (!this._Enabled) {
                    renderColor = "#FAFAFA";
                }

                var context = this._GripCanvas.Context();
                context.lineWidth = 8;
                context.strokeStyle = renderColor;
                context.beginPath();

                context.moveTo(0 * (width / 6), height);
                context.lineTo(width, 0);

                context.moveTo(2.75 * (width / 6), height);
                context.lineTo(width, 2.75 * (height / 6));

                context.moveTo(5 * (width / 6), height);
                context.lineTo(width, 5 * (height / 6));

                context.stroke();
            };
            return ResizeGrip;
        })(UI.Control);
        UI.ResizeGrip = ResizeGrip;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Expandable.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Animation/ExpandableAnimator.ts" />
    /// <reference path="ToggleIndicator.ts" />
    /// <reference path="../Interfaces/IExpandable.d.ts" />
    /// <reference path="TitleBar.ts" />
    /// <reference path="Panel.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var Expandable = (function (_super) {
            __extends(Expandable, _super);
            function Expandable(expanded) {
                if (typeof expanded === "undefined") { expanded = false; }
                _super.call(this);
                this._Expanded = false;

                this._rootElement.addClass("Expandable");

                this.MainTitleBar = new UI.TitleBar();
                this.Children.Add(this.MainTitleBar);

                this.MainTitleBar.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._MainTitleBar_Clicked, this));

                this.MainToggleIndiciator = new UI.ToggleIndicatorLabel();
                this.MainToggleIndiciator.AddClass("ToggleIndicator");
                this.Children.Add(this.MainToggleIndiciator);
                if (!expanded) {
                    this.MainToggleIndiciator.SetIndicatorToOff();
                    this._rootElement.addClass("Collapsed");
                } else {
                    this.MainToggleIndiciator.SetIndicatorToOn();
                }
                this._Expanded = expanded;

                this.MainToggleIndiciator.Focusable(true);
                this.MainToggleIndiciator.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._MainTitleBar_Clicked, this));

                this.ContentPanel = new UI.Panel();
                this.Children.Add(this.ContentPanel);

                this.Height(new UI.CSSNumber(30));
            }
            Expandable.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    if (_this._Expanded) {
                        _this.Height(new UI.CSSNumber(_this.ContentPanel.Top().Value + _this.ContentPanel.Height().Value + 15));
                        _this.ContentPanel.Enabled(true);
                    } else {
                        _this.Height(new UI.CSSNumber(_this.MainTitleBar.ActualHeight()));
                        _this.ContentPanel.Enabled(false);
                    }
                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            Expandable.prototype._MainTitleBar_Clicked = function (eventArgs) {
                this.Toggle();
            };

            Expandable.prototype.Title = function (value) {
                return this.MainTitleBar.Title(value);
            };

            Expandable.prototype.Expanded = function () {
                return this._Expanded;
            };

            Expandable.prototype.Toggle = function () {
                if (this._Expanded) {
                    this.Collapse();
                } else {
                    this.Expand();
                }
            };
            Expandable.prototype.Expand = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.ExpandableAnimator(); }
                if (!this.Expanded()) {
                    var _this = this;
                    this.MainToggleIndiciator.SetIndicatorToOn();
                    this._rootElement.removeClass("Collapsed");
                    animator.Show(this, function () {
                        if (_this.ContentPanel.HasClass("RelativeLayout")) {
                            _this.ContentPanel.Height(new UI.CSSNumber(_this.Height().Value - 60));
                        }

                        _this.ContentPanel.Enabled(true);

                        _this._Expanded = true;
                        if (callback !== null)
                            callback();
                    });
                }
            };
            Expandable.prototype.Collapse = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.ExpandableAnimator(); }
                if (this.Expanded()) {
                    var _this = this;
                    this.MainToggleIndiciator.SetIndicatorToOff();
                    this._rootElement.addClass("Collapsed");
                    this.ContentPanel.Enabled(false);
                    animator.Hide(this, function () {
                        if (_this.ContentPanel.HasClass("RelativeLayout")) {
                            _this.ContentPanel.Height(new UI.CSSNumber(0, "", true));
                        }

                        _this._Expanded = false;
                        if (callback !== null)
                            callback();
                    });
                }
            };

            Expandable.prototype.EnableByParent = function () {
                _super.prototype.EnableByParent.call(this);
                if (!this._Expanded) {
                    this.ContentPanel.Enabled(false);
                }
            };
            return Expandable;
        })(UI.Control);
        UI.Expandable = Expandable;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Windows/Window.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../../Animation/AppWindowAnimator.ts" />
    /// <reference path="../../Interfaces/Windows/IWindow.d.ts" />
    /// <reference path="../ResizeGrip.ts" />
    /// <reference path="../TitleBar.ts" />
    /// <reference path="../Button.ts" />
    /// <reference path="../Panel.ts" />
    /// <reference path="../Control.ts" />
    (function (UI) {
        var Window = (function (_super) {
            __extends(Window, _super);
            function Window() {
                _super.call(this);
                this._DraggingEnabled = true;
                this._DraggingWindow = false;
                this._DraggingOffset = null;
                this._ResizingEnabled = true;
                this._ResizingWindow = false;
                this._ResizingOffset = null;
                this.DestroyDOMOnClose = true;

                //this.OptimiseConstructForGraphics = true;
                this.EnableSelection();

                this._rootElement.addClass("Window");
                this.ApplyStyle("visibility", "hidden");

                this.OnClose = new TSUI.Events.CloseEvent();

                this.MainTitleBar = new UI.TitleBar();
                this.Children.Add(this.MainTitleBar);

                this._MainTitleBar_MouseUpHandler = new TSUI.Events.MouseUpEventHandler(this._MainTitleBar_OnMouseUp, this);
                this._MainTitleBar_MouseMoveHandler = new TSUI.Events.MouseMoveEventHandler(this._MainTitleBar_OnMouseMove, this);
                this.MainTitleBar.OnMouseDown.Attach(new TSUI.Events.MouseDownEventHandler(this._MainTitleBar_OnMouseDown, this));
                this.MainTitleBar.OnMouseUp.Attach(this._MainTitleBar_MouseUpHandler);
                this.MainTitleBar.OnMouseMove.Attach(this._MainTitleBar_MouseMoveHandler);

                this.CloseButton = new UI.Button();
                this.CloseButton.AddClass("WindowCloseButton");
                this.CloseButton.Text("X");
                this.Children.Add(this.CloseButton);

                this.ContentPanel = new UI.Panel();
                this.Children.Add(this.ContentPanel);

                this.MainResizeGrip = new UI.ResizeGrip();
                this.Children.Add(this.MainResizeGrip);

                this._MainResizeGrip_MouseUpHandler = new TSUI.Events.MouseUpEventHandler(this._MainResizeGrip_OnMouseUp, this);
                this._MainResizeGrip_MouseMoveHandler = new TSUI.Events.MouseMoveEventHandler(this._MainResizeGrip_OnMouseMove, this);
                this.MainResizeGrip.OnMouseDown.Attach(new TSUI.Events.MouseDownEventHandler(this._MainResizeGrip_OnMouseDown, this));

                this.CloseButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._CloseButton_Click, this));
            }
            Window.prototype._MainTitleBar_OnMouseDown = function (eventArgs) {
                if (this._DraggingEnabled) {
                    this._DraggingWindow = true;
                    this.Enabled(false);

                    if (UI.CurrentFocusedControl !== null) {
                        UI.CurrentFocusedControl.Blur();
                    }

                    $("*").css({
                        cursor: "pointer"
                    });

                    var parentPos = this._rootElement.parent().position();
                    var xOffsetBit = eventArgs.jqEvent.pageX - this.PageLeft();
                    var yOffsetBit = eventArgs.jqEvent.pageY - this.PageTop();
                    this._DraggingOffset = {
                        x: (xOffsetBit + parentPos.left),
                        y: (yOffsetBit + parentPos.top)
                    };

                    TSUI.StopEvent(eventArgs.jqEvent);

                    this.MainTitleBar.OnMouseUp.Attach(this._MainTitleBar_MouseUpHandler);
                    this.MainTitleBar.OnMouseMove.Attach(this._MainTitleBar_MouseMoveHandler);
                }
            };
            Window.prototype._MainTitleBar_OnMouseUp = function (eventArgs) {
                if (this._DraggingWindow) {
                    this._DraggingWindow = false;
                    this.Enabled(true);

                    $("*").css({
                        cursor: ""
                    });

                    TSUI.StopEvent(eventArgs.jqEvent);

                    this.MainTitleBar.OnMouseUp.Detach(this._MainTitleBar_MouseUpHandler);
                    this.MainTitleBar.OnMouseMove.Detach(this._MainTitleBar_MouseMoveHandler);
                }
            };
            Window.prototype._MainTitleBar_OnMouseMove = function (eventArgs) {
                if (this._DraggingWindow) {
                    if (!this._DraggingEnabled) {
                        this._DraggingWindow = false;
                    } else {
                        var y = eventArgs.jqEvent.pageY - this._DraggingOffset.y;
                        var x = eventArgs.jqEvent.pageX - this._DraggingOffset.x;

                        var parentWidth = this._rootElement.parent().width();
                        var parentHeight = this._rootElement.parent().height();

                        y = Math.min(Math.max(y, 0), parentHeight - this.ActualHeight());
                        x = Math.min(Math.max(x, 0), parentWidth - this.ActualWidth());

                        this.Top(new UI.CSSNumber((y / parentHeight) * 100, "%"));
                        this.Left(new UI.CSSNumber((x / parentWidth) * 100, "%"));
                    }

                    TSUI.StopEvent(eventArgs.jqEvent);
                }
            };

            Window.prototype._MainResizeGrip_OnMouseDown = function (eventArgs) {
                if (this._ResizingEnabled) {
                    this._ResizingWindow = true;
                    this.Enabled(false);

                    if (UI.CurrentFocusedControl !== null) {
                        UI.CurrentFocusedControl.Blur();
                    }

                    $("*").css({
                        cursor: "pointer"
                    });

                    TSUI.StopEvent(eventArgs.jqEvent);

                    this.MainResizeGrip.OnMouseUp.Attach(this._MainResizeGrip_MouseUpHandler);
                    this.MainResizeGrip.OnMouseMove.Attach(this._MainResizeGrip_MouseMoveHandler);
                }
            };
            Window.prototype._MainResizeGrip_OnMouseUp = function (eventArgs) {
                if (this._ResizingWindow) {
                    this._ResizingWindow = false;
                    this.Enabled(true);

                    $("*").css({
                        cursor: ""
                    });

                    TSUI.StopEvent(eventArgs.jqEvent);

                    this.MainResizeGrip.OnMouseUp.Detach(this._MainResizeGrip_MouseUpHandler);
                    this.MainResizeGrip.OnMouseMove.Detach(this._MainResizeGrip_MouseMoveHandler);
                }
            };
            Window.prototype._MainResizeGrip_OnMouseMove = function (eventArgs) {
                if (this._ResizingWindow) {
                    if (!this._ResizingEnabled) {
                        this._ResizingWindow = false;
                    } else {
                        var height = eventArgs.jqEvent.pageY - this.PageTop() + 5;
                        var width = eventArgs.jqEvent.pageX - this.PageLeft() + 5;

                        height = (height / this._rootElement.parent().height()) * 100;
                        width = (width / this._rootElement.parent().width()) * 100;

                        this.Height(new UI.CSSNumber(height, "%"));
                        this.Width(new UI.CSSNumber(width, "%"));
                    }

                    TSUI.StopEvent(eventArgs.jqEvent);
                }
            };

            Window.prototype._CloseButton_Click = function (eventArgs) {
                var _this = this;
                this.Hide(function () {
                    if (_this.DestroyDOMOnClose) {
                        _this.DestroyDOM();
                    }
                });
            };

            Window.prototype.DragEnabled = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._DraggingEnabled = value;

                    this.MainTitleBar.Draggable(this._DraggingEnabled);
                }
                return this._DraggingEnabled;
            };
            Window.prototype.ResizeEnabled = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._ResizingEnabled = value;

                    this.MainResizeGrip.Visible(this._ResizingEnabled);
                }
                return this._ResizingEnabled;
            };

            Window.prototype.Title = function (value) {
                if (typeof value === "undefined") { value = null; }
                this.MainTitleBar.Title(value);
                return this.MainTitleBar.Title();
            };

            Window.prototype.Show = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.AppWindowAnimator(); }
                UI.OpenWindows++;
                this.ApplyStyle("z-index", (UI.OpenWindows * 10).toString());
                _super.prototype.Show.call(this, callback, animator);
            };
            Window.prototype.Hide = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.AppWindowAnimator(); }
                UI.OpenWindows--;
                var _this = this;
                _super.prototype.Hide.call(this, function () {
                    _this.ApplyStyle("z-index", "");

                    _this.OnClose.Invoke(new TSUI.Events.CloseEventArgs(this));

                    if (callback !== null)
                        callback();
                }, animator);
            };
            return Window;
        })(UI.Control);
        UI.Window = Window;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Windows/MessageBox.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Interfaces/Windows/IMessageBox.d.ts" />
    /// <reference path="../Label.ts" />
    /// <reference path="Window.ts" />
    (function (UI) {
        var MessageBox = (function (_super) {
            __extends(MessageBox, _super);
            function MessageBox(title, text) {
                _super.call(this);

                this._rootElement.addClass("MessageBox");

                this.ContentPanel.ApplyStyles({
                    padding: "15px"
                });

                this.TextLabel = new UI.Label();
                this.TextLabel.ApplyStyles({
                    position: "relative"
                });
                this.ContentPanel.Children.Add(this.TextLabel);

                this.EnableSelection();
                this.ContentPanel.EnableSelection();
                this.TextLabel.EnableSelection();

                this.Title(title);
                this.Text(text);
            }
            MessageBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this.Width(new UI.CSSNumber($(window).width()));
                    _this.Height(new UI.CSSNumber($(window).height()));

                    _this.ContentPanel.Width(new UI.CSSNumber(0, "", true));
                    _this.ContentPanel.Height(new UI.CSSNumber(0, "", true));
                    _this.ContentPanel.Right(new UI.CSSNumber(0, "", true));
                    _this.ContentPanel.Bottom(new UI.CSSNumber(0, "", true));

                    _this.Width(new UI.CSSNumber(Math.max(_this.ContentPanel.ActualWidth() + 10, _this.MainTitleBar.WindowMinSuitableWidth() + 10)));
                    _this.Height(new UI.CSSNumber(_this.TextLabel.ActualHeight() + _this.MainTitleBar.ActualHeight() + 35));

                    _this.ContentPanel.MaxWidth(new UI.CSSNumber(100, "%"));
                    _this.TextLabel.Width(new UI.CSSNumber(100, "%"));
                    _this.TextLabel.Height(new UI.CSSNumber(0, "", true));

                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            MessageBox.prototype.PositionCenterParent = function (parent) {
                this.Top(new UI.CSSNumber((((parent.ActualHeight() - this.ActualHeight()) / 2) / parent.ActualHeight()) * 100, "%"));
                this.Left(new UI.CSSNumber((((parent.ActualWidth() - this.ActualWidth()) / 2) / parent.ActualWidth()) * 100, "%"));
            };

            MessageBox.prototype.Text = function (value) {
                return this.TextLabel.Text(value);
            };

            MessageBox.prototype.Width = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = _super.prototype.Width.call(this, value);
                if (value !== null) {
                    //Margin around the text
                    this.ContentPanel.Width(new UI.CSSNumber(this.ActualWidth() - 30));
                }
                return result;
            };
            return MessageBox;
        })(UI.Window);
        UI.MessageBox = MessageBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Windows/PageWindow.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../../Animation/AppWindowAnimator.ts" />
    /// <reference path="../../../Animation/PageWindowAnimator.ts" />
    /// <reference path="../../Interfaces/Windows/IPageWindow.d.ts" />
    /// <reference path="Window.ts" />
    (function (UI) {
        var PageWindow = (function (_super) {
            __extends(PageWindow, _super);
            function PageWindow() {
                _super.call(this);

                this.DestroyDOMOnClose = false;

                this._rootElement.addClass("PageWindow");

                this.MainTitleBar.Visible(false);
                this.MainResizeGrip.Visible(false);
                this.DragEnabled(false);
                this.ResizeEnabled(false);

                this.ContentPanel.Top(new UI.CSSNumber(24));
                this.ContentPanel.Bottom(new UI.CSSNumber(0));
                this.ContentPanel.Left(new UI.CSSNumber(0));
                this.ContentPanel.Width(new UI.CSSNumber(100, "%"));
                this.ContentPanel.Height(new UI.CSSNumber(100, "%", true));

                var bodyElem = $("body");
                if (bodyElem.find(".PageWindow_DisableOverlay").length === 0) {
                    bodyElem.append($("<div class=\"PageWindow_DisableOverlay\">"));
                }

                this.Visible(false);
            }
            PageWindow.prototype.PositionCenterWindow = function () {
                var height = $(window).height();
                var width = $(window).width();

                var visiblity = this.GetStyle("visibility");
                var display = this.GetStyle("display");
                var zIndex = this.GetStyle("z-index");

                this.ApplyStyle("z-index", "-1");
                this.ApplyStyle("visibility", "hidden");
                this.ApplyStyle("display", "block");

                this.Width(new UI.CSSNumber((Math.max(width / 2, Math.min(400, width - 50)) / width) * 100, "%"));
                this.Height(new UI.CSSNumber(Math.max(height / 2, Math.min(500, height - 50)) + 29));

                this.Top(new UI.CSSNumber((((height - this.ActualHeight()) / 2) / height) * 100, "%"));
                this.Left(new UI.CSSNumber((((width - this.ActualWidth()) / 2) / width) * 100, "%"));

                this.ApplyStyle("z-index", zIndex);
                this.ApplyStyle("visibility", visiblity);
                this.ApplyStyle("display", display);
            };

            PageWindow.prototype.Show = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.PageWindowAnimator(); }
                if (this.ContentPanel.Children.Count() > 0) {
                    _super.prototype.Show.call(this, callback, animator);
                } else {
                    if (callback) {
                        callback();
                    }
                }
            };
            PageWindow.prototype.Hide = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.PageWindowAnimator(); }
                _super.prototype.Hide.call(this, callback, animator);
            };

            PageWindow.prototype.Height = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = _super.prototype.Height.call(this, value);
                if (value !== null) {
                    this.ContentPanel.Height(new UI.CSSNumber(100, "%", true));
                }
                return result;
            };
            return PageWindow;
        })(UI.Window);
        UI.PageWindow = PageWindow;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Windows/SelectionWindow.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../../Animation/SelectionWindowAnimator.ts" />
    /// <reference path="../../Interfaces/Windows/ISelectionWindow.d.ts" />
    /// <reference path="../ListBox.ts" />
    /// <reference path="Window.ts" />
    (function (UI) {
        var SelectionWindow = (function (_super) {
            __extends(SelectionWindow, _super);
            function SelectionWindow() {
                _super.call(this);

                this.DestroyDOMOnClose = false;

                this._rootElement.addClass("SelectionWindow");

                this.MainTitleBar.Visible(false);
                this.MainResizeGrip.Visible(false);
                this.DragEnabled(false);
                this.ResizeEnabled(false);

                this.Children.Remove(this.ContentPanel);
                this.ContentPanel = new UI.ListBox();
                this.ContentPanel.Top(new UI.CSSNumber(24));
                this.ContentPanel.Bottom(new UI.CSSNumber(0));
                this.ContentPanel.Left(new UI.CSSNumber(0));
                this.ContentPanel.Width(new UI.CSSNumber(100, "%"));
                this.ContentPanel.Height(new UI.CSSNumber(100, "%", true));
                this.Children.Add(this.ContentPanel);

                var bodyElem = $("body");
                if (bodyElem.find(".SelectionWindow_DisableOverlay").length === 0) {
                    bodyElem.append($("<div class=\"SelectionWindow_DisableOverlay\">"));
                }

                this.Visible(false);
            }
            SelectionWindow.prototype.PositionCenterWindow = function () {
                var height = $(window).height();
                var width = $(window).width();

                var visiblity = this.GetStyle("visibility");
                var display = this.GetStyle("display");
                var zIndex = this.GetStyle("z-index");

                this.ApplyStyle("z-index", "-1");
                this.ApplyStyle("visibility", "hidden");
                this.ApplyStyle("display", "block");

                var itemsHeight = this.ContentPanel.Items.Count() > 0 ? this.ContentPanel.Items.Count() * this.ContentPanel.Children.ElementAt(0).ActualHeight() : 0;

                this.Width(new UI.CSSNumber((Math.max(Math.min(width / 2, 300), 200) / width) * 100, "%"));
                this.Height(new UI.CSSNumber(Math.max(Math.min(itemsHeight, 300), 100) + 29));

                this.Top(new UI.CSSNumber((((height - this.ActualHeight()) / 2) / height) * 100, "%"));
                this.Left(new UI.CSSNumber((((width - this.ActualWidth()) / 2) / width) * 100, "%"));

                this.ApplyStyle("z-index", zIndex);
                this.ApplyStyle("visibility", visiblity);
                this.ApplyStyle("display", display);
            };

            SelectionWindow.prototype.Show = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.SelectionWindowAnimator(); }
                if (this.ContentPanel.Children.Count() > 0) {
                    var _this = this;
                    _super.prototype.Show.call(this, function () {
                        _this.ContentPanel.Children.ElementAt(_this.ContentPanel.SelectedIndex() > -1 ? _this.ContentPanel.SelectedIndex() : 0).Focus();

                        if (callback) {
                            callback();
                        }
                    }, animator);
                } else {
                    if (callback) {
                        callback();
                    }
                }
            };
            SelectionWindow.prototype.Hide = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.SelectionWindowAnimator(); }
                _super.prototype.Hide.call(this, callback, animator);
            };

            SelectionWindow.prototype.Height = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = _super.prototype.Height.call(this, value);
                if (value !== null) {
                    this.ContentPanel.Height(new UI.CSSNumber(100, "%", true));
                }
                return result;
            };
            return SelectionWindow;
        })(UI.Window);
        UI.SelectionWindow = SelectionWindow;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Windows/StaticPageWindow.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Label.ts" />
    /// <reference path="../../Interfaces/Windows/IStaticPageWindow.d.ts" />
    /// <reference path="PageWindow.ts" />
    (function (UI) {
        var StaticPageWindow = (function (_super) {
            __extends(StaticPageWindow, _super);
            function StaticPageWindow(url) {
                _super.call(this);

                this._rootElement.addClass("StaticPageWindow");

                this.ContentLabel = new UI.Label();
                this.ContentLabel.AddClass("ContentLabel");
                this.ContentPanel.Children.Add(this.ContentLabel);

                this.LoadContent(url);
            }
            StaticPageWindow.prototype.LoadContent = function (url, data) {
                var _this = this;
                $.get(url, data, function (data) {
                    _this.ContentLabel.HTML(data);
                }).fail(function () {
                    _this.ContentLabel.HTML("<i>Failed to load content.</i>");
                });
            };
            return StaticPageWindow;
        })(UI.PageWindow);
        UI.StaticPageWindow = StaticPageWindow;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Windows/SplashScreen.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 10 00:13 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 10/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../ProgressSpinner.ts" />
    /// <reference path="../../Interfaces/Windows/ISplashScreen.d.ts" />
    /// <reference path="Window.ts" />
    (function (UI) {
        var DesktopSplashScreen = (function (_super) {
            __extends(DesktopSplashScreen, _super);
            function DesktopSplashScreen(title) {
                if (typeof title === "undefined") { title = ""; }
                _super.call(this);

                this.OptimiseConstructForGraphics = false;

                this.AddClass("SplashScreen");

                this.MainTitleBar.Visible(false);
                this.CloseButton.Visible(false);
                this.ResizeEnabled(false);
                this.DragEnabled(false);

                this.Width(new UI.CSSNumber(500));
                this.Height(new UI.CSSNumber(250));

                this.NameLabel = new UI.Label();
                this.NameLabel.AddClass("NameLabel");
                this.Children.Add(this.NameLabel);

                var TheProgressSpinner = new UI.ProgressSpinner();
                TheProgressSpinner.AnimationDuration(2000);
                this.Children.Add(TheProgressSpinner);

                this.Title(title);
            }
            DesktopSplashScreen.prototype.ConstructDOM = function (parent) {
                _super.prototype.ConstructDOM.call(this, parent);

                var topPx = ($(window).height() - this.Height().Value) / 2;
                this.Top(new TSUI.UI.CSSNumber((topPx / $(window).height()) * 100, "%"));
                var leftPx = ($(window).width() - this.Width().Value) / 2;
                this.Left(new TSUI.UI.CSSNumber((leftPx / $(window).width()) * 100, "%"));
            };

            DesktopSplashScreen.prototype.Title = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.NameLabel.Text(value);
            };
            return DesktopSplashScreen;
        })(UI.Window);
        UI.DesktopSplashScreen = DesktopSplashScreen;
        var MobileSplashScreen = (function (_super) {
            __extends(MobileSplashScreen, _super);
            function MobileSplashScreen(title) {
                _super.call(this, title);

                this.AddClass("Mobile");

                this.Top(new TSUI.UI.CSSNumber(0));
                this.Left(new TSUI.UI.CSSNumber(0));
            }
            MobileSplashScreen.prototype.ConstructDOM = function (parent) {
                _super.prototype.ConstructDOM.call(this, parent);

                var width = Math.min($(window).width(), 280);
                this.Width(new TSUI.UI.CSSNumber(width));
                this.Left(new TSUI.UI.CSSNumber(($(window).width() - width) / 2));
                this.Height(new TSUI.UI.CSSNumber($(window).height()));
                this.Top(new TSUI.UI.CSSNumber(0));
            };
            return MobileSplashScreen;
        })(DesktopSplashScreen);
        UI.MobileSplashScreen = MobileSplashScreen;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Windows/LoginWindow.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Interfaces/Windows/ILoginWindow.d.ts" />
    /// <reference path="Window.ts" />
    /// <reference path="../TextBox.ts" />
    /// <reference path="../StackPanel.ts" />
    /// <reference path="../StackPanelRow.ts" />
    (function (UI) {
        var DesktopLoginWindow = (function (_super) {
            __extends(DesktopLoginWindow, _super);
            function DesktopLoginWindow() {
                _super.call(this);

                this.AddClass("LoginWindow");

                this.Title("Login");

                this.ResizeEnabled(false);

                this.CentralisingPanel = new TSUI.UI.Panel();
                this.CentralisingPanel.AddClass("Centralise");
                this.CentralisingPanel.RelativeLayoutOn();
                this.ContentPanel.Children.Add(this.CentralisingPanel);

                this.ControlsStackPanel = new TSUI.UI.StackPanel();
                this.ControlsStackPanel.RelativeLayoutOn();
                this.CentralisingPanel.Children.Add(this.ControlsStackPanel);

                this.UsernameRow = new TSUI.UI.StackPanelRow();
                this.ControlsStackPanel.Rows.Add(this.UsernameRow);
                this.PasswordRow = new TSUI.UI.StackPanelRow();
                this.ControlsStackPanel.Rows.Add(this.PasswordRow);
                this.LoginRow = new TSUI.UI.StackPanelRow();
                this.ControlsStackPanel.Rows.Add(this.LoginRow);

                this.UsernameLabel = new TSUI.UI.Label("Username : ");
                this.UsernameLabel.RelativeLayoutOn();
                this.UsernameRow.Children.Add(this.UsernameLabel);

                this.UsernameBox = new TSUI.UI.TextBox();
                this.UsernameBox.RelativeLayoutOn();
                this.UsernameRow.Children.Add(this.UsernameBox);

                this.PasswordLabel = new TSUI.UI.Label("Password : ");
                this.PasswordLabel.RelativeLayoutOn();
                this.PasswordRow.Children.Add(this.PasswordLabel);

                this.PasswordBox = new TSUI.UI.TextBox();
                this.PasswordBox.Masked(true);
                this.PasswordBox.RelativeLayoutOn();
                this.PasswordRow.Children.Add(this.PasswordBox);

                this.LoginButton = new TSUI.UI.Button();
                this.LoginButton.Text("Login");
                this.LoginButton.Width(new TSUI.UI.CSSNumber(197));
                this.LoginButton.RelativeLayoutOn();
                this.LoginRow.Children.Add(this.LoginButton);
            }
            return DesktopLoginWindow;
        })(TSUI.UI.Window);
        UI.DesktopLoginWindow = DesktopLoginWindow;
        var MobileLoginWindow = (function (_super) {
            __extends(MobileLoginWindow, _super);
            function MobileLoginWindow() {
                _super.call(this);

                this.AddClass("Mobile");

                this.Title("Mobile Login");
            }
            return MobileLoginWindow;
        })(DesktopLoginWindow);
        UI.MobileLoginWindow = MobileLoginWindow;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Windows/StartupWindow.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 11 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 11/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Interfaces/Windows/IStartupWindow.d.ts" />
    /// <reference path="Window.ts" />
    /// <reference path="../TextBox.ts" />
    /// <reference path="../StackPanel.ts" />
    /// <reference path="../StackPanelRow.ts" />
    /// <reference path="../Tile.ts" />
    (function (UI) {
        var StartupWindow = (function (_super) {
            __extends(StartupWindow, _super);
            function StartupWindow(title) {
                _super.call(this);
                this.Rows = new TSUI.Collections.List();

                this.AddClass("StartupWindow");

                this.Title(title);

                this.CloseButton.Visible(false);
                this.ResizeEnabled(false);
                this.DragEnabled(false);

                this.Rows.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._This_OnRowsChanged, this));

                this._InnerStackPanel = new TSUI.UI.StackPanel();
                this.ContentPanel.Children.Add(this._InnerStackPanel);
            }
            StartupWindow.prototype._This_OnRowsChanged = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var ARow = eventArgs.ModifiedElements.ElementAt(i);
                            ARow.RelativeLayoutOn();
                            this._InnerStackPanel.Rows.Add(ARow);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var ARow = eventArgs.ModifiedElements.ElementAt(i);
                            this._InnerStackPanel.Rows.Remove(ARow);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var ARow = eventArgs.ModifiedElements.ElementAt(i);
                            this._InnerStackPanel.Rows.Remove(ARow);
                            this._InnerStackPanel.Rows.Add(ARow);
                        }
                        break;
                }
            };
            return StartupWindow;
        })(TSUI.UI.Window);
        UI.StartupWindow = StartupWindow;
        var DesktopStartupWindow = (function (_super) {
            __extends(DesktopStartupWindow, _super);
            function DesktopStartupWindow(title) {
                _super.call(this, title);
            }
            return DesktopStartupWindow;
        })(StartupWindow);
        UI.DesktopStartupWindow = DesktopStartupWindow;
        var MobileStartupWindow = (function (_super) {
            __extends(MobileStartupWindow, _super);
            function MobileStartupWindow(title) {
                _super.call(this, title);

                this.OptimiseConstructForGraphics = true;

                this.AddClass("Mobile");
            }
            MobileStartupWindow.prototype.Show = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.Animator(); }
                _super.prototype.Show.call(this, callback, animator);
            };
            MobileStartupWindow.prototype.Hide = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.Animator(); }
                _super.prototype.Hide.call(this, callback, animator);
            };
            return MobileStartupWindow;
        })(DesktopStartupWindow);
        UI.MobileStartupWindow = MobileStartupWindow;

        var StartupWindow_Row = (function (_super) {
            __extends(StartupWindow_Row, _super);
            function StartupWindow_Row(MobileMode) {
                if (typeof MobileMode === "undefined") { MobileMode = false; }
                _super.call(this);
                this.MobileMode = MobileMode;
                this.Groups = new TSUI.Collections.List();

                this.RelativeLayoutOn();

                this._InnerStackPanel = new TSUI.UI.StackPanel();
                this._InnerStackPanel.Orientation(UI.StackPanelOrientations.Horizontal);
                this._InnerStackPanel.RelativeLayoutOn();
                this.Children.Add(this._InnerStackPanel);

                this.Groups.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._This_OnGroupsChanged, this));
            }
            StartupWindow_Row.prototype._This_OnGroupsChanged = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var AGroup = eventArgs.ModifiedElements.ElementAt(i);
                            AGroup.RelativeLayoutOn();
                            this._InnerStackPanel.Rows.Add(AGroup);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var AGroup = eventArgs.ModifiedElements.ElementAt(i);
                            this._InnerStackPanel.Rows.Remove(AGroup);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var AGroup = eventArgs.ModifiedElements.ElementAt(i);
                            this._InnerStackPanel.Rows.Remove(AGroup);
                            this._InnerStackPanel.Rows.Add(AGroup);
                        }
                        break;
                }
            };
            return StartupWindow_Row;
        })(UI.StackPanelRow);
        UI.StartupWindow_Row = StartupWindow_Row;
        var StartupWindow_Group = (function (_super) {
            __extends(StartupWindow_Group, _super);
            function StartupWindow_Group(MobileMode) {
                if (typeof MobileMode === "undefined") { MobileMode = false; }
                _super.call(this);
                this.MobileMode = MobileMode;
                this.Tiles = new TSUI.Collections.List();

                this.Tiles.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._This_OnTilesChanged, this));
            }
            StartupWindow_Group.prototype._This_OnTilesChanged = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var ATile = eventArgs.ModifiedElements.ElementAt(i);
                            if (this.MobileMode) {
                                switch (ATile.Size()) {
                                    case UI.TileSizes.LargeSquare:
                                        ATile.Size(UI.TileSizes.Medium);
                                        break;
                                    case UI.TileSizes.Large:
                                        ATile.Size(UI.TileSizes.Medium);
                                        break;
                                    case UI.TileSizes.Medium:
                                        ATile.Size(UI.TileSizes.Small);
                                        break;
                                    case UI.TileSizes.Small:
                                        break;
                                }
                            }
                            ATile.RelativeLayoutOn();
                            this.Children.Add(ATile);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var ATile = eventArgs.ModifiedElements.ElementAt(i);
                            this.Children.Remove(ATile);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var ATile = eventArgs.ModifiedElements.ElementAt(i);
                            this.Children.Remove(ATile);
                            this.Children.Add(ATile);
                        }
                        break;
                }
            };
            return StartupWindow_Group;
        })(UI.StackPanelRow);
        UI.StartupWindow_Group = StartupWindow_Group;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Notification.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Animation/NotificationAnimator.ts" />
    /// <reference path="../../Animation/NotificationRestackAnimator.ts" />
    /// <reference path="../Interfaces/INotification.d.ts" />
    /// <reference path="Control.ts" />
    /// <reference path="Button.ts" />
    (function (UI) {
        var NotificationBottomOffsets = [];
        UI.AllVisibleNotifications = [];

        var Notification = (function (_super) {
            __extends(Notification, _super);
            function Notification(stackReference, text) {
                _super.call(this);
                this.stackReference = stackReference;
                this._HideTimeoutRef = -1;
                this._OffsetAdded = 0;
                this._Showing = false;

                if (!NotificationBottomOffsets[stackReference]) {
                    NotificationBottomOffsets[stackReference] = 0;
                    UI.AllVisibleNotifications[stackReference] = [];
                }

                this._rootElement.addClass("Notification");
                this._rootElement.css("visibility", "hidden");

                this.OnClose = new TSUI.Events.CloseEvent();

                this.CloseButton = new UI.Button();
                this.CloseButton.AddClass("NotificationCloseButton");
                this.CloseButton.Text("X");
                this.Children.Add(this.CloseButton);

                this._TextLabel = new UI.Label();
                this._TextLabel.RelativeLayoutOn();
                this.Children.Add(this._TextLabel);

                this.Text(text);

                this.CloseButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._CloseButton_Click, this));
            }
            Notification.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextLabel.Text(value);
            };

            Notification.prototype._CloseButton_Click = function (eventArgs) {
                var _this = this;
                this.Hide();
            };

            Notification.prototype.Show = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.NotificationAnimator(); }
                if (this._HideTimeoutRef !== -1) {
                    clearTimeout(this._HideTimeoutRef);
                    this._HideTimeoutRef = -1;
                }

                if (!this.Visible() && !this._Showing) {
                    this._Showing = true;
                    var _this = this;
                    this.Bottom(new UI.CSSNumber(NotificationBottomOffsets[this.stackReference]));
                    UI.AllVisibleNotifications[this.stackReference].push(this);
                    _super.prototype.Show.call(this, function () {
                        _this._Showing = false;
                        if (callback !== null)
                            callback();
                    }, animator);
                    NotificationBottomOffsets[this.stackReference] += (this._OffsetAdded = this.AnimationElement().outerHeight());
                } else if (callback !== null) {
                    callback();
                }
            };
            Notification.prototype.ShowFor = function (seconds, callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                var _this = this;
                this.Show(function () {
                    if (this._HideTimeoutRef !== -1) {
                        clearTimeout(this._HideTimeoutRef);
                        this._HideTimeoutRef = -1;
                    }

                    _this._HideTimeoutRef = setTimeout(function () {
                        _this.Hide(null, animator);
                    }, seconds * 1000);

                    if (callback !== null) {
                        callback();
                    }
                }, animator);
            };
            Notification.prototype.Hide = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.NotificationAnimator(); }
                var _this = this;
                NotificationBottomOffsets[this.stackReference] -= this._OffsetAdded;
                UI.AllVisibleNotifications[this.stackReference].splice(UI.AllVisibleNotifications[this.stackReference].indexOf(this), 1);
                this.RestackAll();
                this._OffsetAdded = 0;
                _super.prototype.Hide.call(this, function () {
                    _this.OnClose.Invoke(new TSUI.Events.CloseEventArgs(_this));
                    if (callback !== null) {
                        callback();
                    }
                }, animator);
            };

            Notification.prototype._Restack = function () {
                new TSUI.Animation.NotificationRestackAnimator().AnimateRestack(this, NotificationBottomOffsets[this.stackReference]);
                NotificationBottomOffsets[this.stackReference] += (this._OffsetAdded = this.AnimationElement().outerHeight());
            };

            Notification.prototype.RestackAll = function () {
                NotificationBottomOffsets[this.stackReference] = 0;
                for (var i = 0; i < UI.AllVisibleNotifications[this.stackReference].length; i++) {
                    UI.AllVisibleNotifications[this.stackReference][i]._Restack();
                }
            };
            return Notification;
        })(UI.Control);
        UI.Notification = Notification;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/Classes/Static Description/WindowDescription.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Sep 4 14:59 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 9/Sep/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Interfaces/IControl.d.ts" />
    (function (UI) {
        var ControlDescriptionLoader = (function () {
            function ControlDescriptionLoader() {
            }
            /** Loads the specified description.
            @param descrip The control description to load.
            @param eventHanldersObj The object which has all the event handler methods on it (including methods for all child controls).
            @param parent The parent control to add the created control to.
            @param control The existing control to use as the root control of the description.
            @returns True if the description is completely, successfully loaded.
            */
            ControlDescriptionLoader.LoadDescription = function (descrip, eventHandlersObj, parent, control) {
                var loaded = true;

                try  {
                    if (!control) {
                        //Create root control
                        control = new descrip.Type();
                    }
                    if (parent) {
                        //Add control to parent
                        parent[descrip.Name] = control;
                        if (parent.ContentPanel) {
                            //Special case where parent is a window
                            parent.ContentPanel.Children.Add(control);
                        } else {
                            parent.Children.Add(control);
                        }
                    }

                    if (descrip.Properties) {
                        for (var i = 0; i < descrip.Properties.length; i++) {
                            var prop = descrip.Properties[i];
                            control[prop.Name].apply(control, prop.Values);
                        }
                    }

                    if (descrip.Events) {
                        for (var i = 0; i < descrip.Events.length; i++) {
                            var event = descrip.Events[i];
                            control[event.Name].Attach(new event.HandlerType(eventHandlersObj[event.HandlerName], eventHandlersObj));
                        }
                    }

                    if (descrip.Children) {
                        for (var i = 0; i < descrip.Children.length; i++) {
                            try  {
                                var childDescrip = descrip.Children[i];
                                loaded = ControlDescriptionLoader.LoadDescription(childDescrip, eventHandlersObj, control) && loaded;
                            } catch (e) {
                                console.error("Error loading child[" + i + "]! Message: " + e, e, descrip.Children[i]);
                            }
                        }
                    }
                } catch (e) {
                    loaded = false;
                    console.error(e);
                }

                return loaded;
            };
            return ControlDescriptionLoader;
        })();
        UI.ControlDescriptionLoader = ControlDescriptionLoader;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

///#source 1 1 /Scripts/TS/Lib/Build/UI/UI Static.js
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13     : Initial version.
    - 27/Jul/13    : Added inline documentation.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="Classes/Control.ts" />
    (function (UI) {
        /** This is used to keep global track of the number of open windows so that new
        windows can have z-index set so they are on top. */
        UI.OpenWindows = 0;

        /** The time when the tab key was last pressed. Used in tab key overriding. */
        UI.JustUsedTabKeyTime = 0;

        /** Keeps global track of which control currently has focus. Used in global keyboard
        events to invoke them on the correct control. */
        UI.CurrentFocusedControl = null;

        /** The current max allocated tabindex so new controls can have new tab index
        assigned. */
        UI._currTabIndex = 0;

        /** This event is attached the the global document mouse up event.
        This event handles tab key management and then passes the event off to the
        currently focused control.
        */
        UI.Global_MouseUpEvent = new TSUI.Events.MouseUpEvent();

        /** This event is attached the the global document mouse move event.
        This event reduces the number of mouse move events that are attached to improve
        performance by reducing the load on the DOM. */
        UI.Global_MouseMoveEvent = new TSUI.Events.MouseMoveEvent();

        /** Whether to prevent the tab key event. This used primarily by List controls
        which use out of order tab indexing so override tab key functionality. */
        UI.preventTabKey = false;

        /** Each control attaches its own key down event. This method is called by the key
        down handling control immediately before the control handles the event. The return
        value is currently irrelevant. */
        UI.OnKeyDown_Global_First = function (jqEvent) {
            if (jqEvent.keyCode === 9) {
                UI.JustUsedTabKeyTime = Date.now();
            }
            return true;
        };

        /** Each control attaches its own key down event. This method is called by the key
        down handling control immediately after the control handles the event. The return
        value is returned by the handler. */
        UI.OnKeyDown_Global_Last = function (jqEvent) {
            if (jqEvent.keyCode === 9) {
                if (UI.preventTabKey) {
                    UI.preventTabKey = false;
                    TSUI.StopEvent(jqEvent);
                    return false;
                }
            }

            return !jqEvent.isDefaultPrevented();
        };

        //var _tapStartTime: number = Number.MAX_VALUE - 1000;
        //var _tapTarget: JQuery = null;
        //if (document.documentElement.hasOwnProperty('ontouchstart'))
        //{
        //    $(document).on("touchstart", function (event: JQueryEventObject)
        //    {
        //        _tapStartTime = Date.now();
        //        _tapTarget = $(event.target);
        //    });
        //}
        /** Adds and handles the document mouse up event.
        Standardises the event then invokes Global_MouseUpEvent.
        After invoking the event it defocuses the current control. */
        $(document).on(UI.Control.OnMouseUpEventName, function (event) {
            //if (false && _tapStartTime + 10 < Date.now())
            //{
            //   // _tapTarget.click();
            //    _tapTarget = null;
            //    _tapStartTime = -1;
            //}
            //else
            //{
            event = TSUI.standardiseEvent(event);

            UI.Global_MouseUpEvent.Invoke(new TSUI.Events.MouseUpEventArgs(null, event));

            if (!event.isPropagationStopped() && UI.CurrentFocusedControl !== null && !$(event.target).is("input") && !$(event.target).is("select")) {
                UI.CurrentFocusedControl.Blur();
            }
            //}
        });

        /** Adds and handles the document mouse move event.
        Standardises the event then invokes Global_MouseMoveEvent. */
        $(document).on(UI.Control.OnMouseMoveEventName, function (event) {
             {
                event = TSUI.standardiseEvent(event);
                UI.Global_MouseMoveEvent.Invoke(new TSUI.Events.MouseMoveEventArgs(null, event));
            }
        });

        /** Adds and handles the document key up event.
        If the tab key is pressed it defocuses the currently focused control. */
        $(document).on("keyup", function (event) {
            if (!event.isPropagationStopped() && UI.CurrentFocusedControl !== null && event.keyCode === 27) {
                UI.CurrentFocusedControl.Blur();
            }
        });
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

/** Adds the global background which hides the "Sorry this don't work" message and
standardises the page background color across browsers. */
$(function () {
    $("body").append("<div class=\"Bg\">");
});