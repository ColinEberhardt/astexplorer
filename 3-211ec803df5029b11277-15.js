webpackJsonp([3,5,40,49,51],{

/***/ "+2+s":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__("ko72"),$at=__webpack_require__("3N3B")(!0);$export($export.P,"String",{at:function(t){return $at(this,t)}});

/***/ }),

/***/ "+39r":
/***/ (function(module, exports, __webpack_require__) {

var IObject=__webpack_require__("82hN"),defined=__webpack_require__("Furo");module.exports=function(e){return IObject(defined(e))};

/***/ }),

/***/ "+BjN":
/***/ (function(module, exports, __webpack_require__) {

function isPlainObject(t){var e;if(!isObjectLike(t)||objToString.call(t)!=objectTag||isArguments(t)||!hasOwnProperty.call(t,"constructor")&&"function"==typeof(e=t.constructor)&&!(e instanceof e))return!1;var r;return baseForIn(t,function(t,e){r=e}),void 0===r||hasOwnProperty.call(t,r)}var baseForIn=__webpack_require__("cB7g"),isArguments=__webpack_require__("t+hi"),isObjectLike=__webpack_require__("er7D"),objectTag="[object Object]",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,objToString=objectProto.toString;module.exports=isPlainObject;

/***/ }),

/***/ "+HRN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function copyBuffer(t,e,h){t.copy(e,h)}var Buffer=__webpack_require__("X3l8").Buffer;module.exports=function(){function t(){_classCallCheck(this,t),this.head=null,this.tail=null,this.length=0}return t.prototype.push=function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length},t.prototype.unshift=function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length},t.prototype.shift=function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}},t.prototype.clear=function(){this.head=this.tail=null,this.length=0},t.prototype.join=function(t){if(0===this.length)return"";for(var e=this.head,h=""+e.data;e=e.next;)h+=t+e.data;return h},t.prototype.concat=function(t){if(0===this.length)return Buffer.alloc(0);if(1===this.length)return this.head.data;for(var e=Buffer.allocUnsafe(t>>>0),h=this.head,n=0;h;)copyBuffer(h.data,e,n),n+=h.data.length,h=h.next;return e},t}();

/***/ }),

/***/ "+Ht9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_detectIndent=__webpack_require__("TXHX"),_detectIndent2=_interopRequireDefault(_detectIndent),_whitespace=__webpack_require__("GGW+"),_whitespace2=_interopRequireDefault(_whitespace),_nodePrinter=__webpack_require__("51bj"),_nodePrinter2=_interopRequireDefault(_nodePrinter),_repeating=__webpack_require__("gyPO"),_repeating2=_interopRequireDefault(_repeating),_sourceMap=__webpack_require__("wrW7"),_sourceMap2=_interopRequireDefault(_sourceMap),_position=__webpack_require__("ll6X"),_position2=_interopRequireDefault(_position),_messages=__webpack_require__("WkZC"),messages=_interopRequireWildcard(_messages),_buffer=__webpack_require__("Cki+"),_buffer2=_interopRequireDefault(_buffer),_lodashObjectExtend=__webpack_require__("z0yW"),_lodashObjectExtend2=_interopRequireDefault(_lodashObjectExtend),_lodashCollectionEach=__webpack_require__("uxXC"),_lodashCollectionEach2=_interopRequireDefault(_lodashCollectionEach),_node2=__webpack_require__("bIzB"),_node3=_interopRequireDefault(_node2),_types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types),CodeGenerator=function(){function e(t,n,r){_classCallCheck(this,e),n=n||{},this.comments=t.comments||[],this.tokens=t.tokens||[],this.format=e.normalizeOptions(r,n,this.tokens),this.opts=n,this.ast=t,this.whitespace=new _whitespace2.default(this.tokens),this.position=new _position2.default,this.map=new _sourceMap2.default(this.position,n,r),this.buffer=new _buffer2.default(this.position,this.format)}return e.normalizeOptions=function(t,n,r){var i="  ";if(t){var o=_detectIndent2.default(t).indent;o&&" "!==o&&(i=o)}var s={shouldPrintComment:n.shouldPrintComment,retainLines:n.retainLines,comments:null==n.comments||n.comments,compact:n.compact,quotes:e.findCommonStringDelimiter(t,r),indent:{adjustMultilineComment:!0,style:i,base:0}};return"auto"===s.compact&&(s.compact=t.length>1e5,s.compact&&console.error("[BABEL] "+messages.get("codeGeneratorDeopt",n.filename,"100KB"))),s.compact&&(s.indent.adjustMultilineComment=!1),s},e.findCommonStringDelimiter=function(e,t){for(var n={single:0,double:0},r=0,i=0;i<t.length;i++){var o=t[i];if("string"===o.type.label){if("'"===e.slice(o.start,o.end)[0]?n.single++:n.double++,++r>=3)break}}return n.single>n.double?"single":"double"},e.prototype.generate=function(){var e=this.ast;if(this.print(e),e.comments){for(var t=[],n=e.comments,r=0;r<n.length;r++){var i=n[r];i._displayed||t.push(i)}this._printComments(t)}return{map:this.map.get(),code:this.buffer.get()}},e.prototype.buildPrint=function(e){return new _nodePrinter2.default(this,e)},e.prototype.catchUp=function(e){if(e.loc&&this.format.retainLines&&this.buffer.buf)for(;this.position.line<e.loc.start.line;)this._push("\n")},e.prototype._printNewline=function(e,t,n,r){if(r.statement||_node3.default.isUserWhitespacable(t,n)){var i=0;if(null==t.start||t._ignoreUserWhitespace){e||i++,r.addNewlines&&(i+=r.addNewlines(e,t)||0);var o=_node3.default.needsWhitespaceAfter;e&&(o=_node3.default.needsWhitespaceBefore),o(t,n)&&i++,this.buffer.buf||(i=0)}else i=e?this.whitespace.getNewlinesBefore(t):this.whitespace.getNewlinesAfter(t);this.newline(i)}},e.prototype.print=function(e,t){var n=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];if(e){t&&t._compact&&(e._compact=!0);var r=this.format.concise;if(e._compact&&(this.format.concise=!0),!this[e.type])throw new ReferenceError("unknown node of type "+JSON.stringify(e.type)+" with constructor "+JSON.stringify(e&&e.constructor.name));var i=_node3.default.needsParens(e,t);i&&this.push("("),this.printLeadingComments(e,t),this.catchUp(e),this._printNewline(!0,e,t,n),n.before&&n.before(),this.map.mark(e,"start"),this[e.type](e,this.buildPrint(e),t),i&&this.push(")"),this.map.mark(e,"end"),n.after&&n.after(),this.format.concise=r,this._printNewline(!1,e,t,n),this.printTrailingComments(e,t)}},e.prototype.printJoin=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];if(t&&t.length){var i=t.length;r.indent&&this.indent();for(var o={statement:r.statement,addNewlines:r.addNewlines,after:function(){r.iterator&&r.iterator(a,s),r.separator&&s<i-1&&n.push(r.separator)}},s=0;s<t.length;s++){var a=t[s];e.plain(a,o)}r.indent&&this.dedent()}},e.prototype.printAndIndentOnComments=function(e,t){var n=!!t.leadingComments;n&&this.indent(),e.plain(t),n&&this.dedent()},e.prototype.printBlock=function(e,n){t.isEmptyStatement(n)?this.semicolon():(this.push(" "),e.plain(n))},e.prototype.generateComment=function(e){var t=e.value;return t="CommentLine"===e.type?"//"+t:"/*"+t+"*/"},e.prototype.printTrailingComments=function(e,t){this._printComments(this.getComments("trailingComments",e,t))},e.prototype.printLeadingComments=function(e,t){this._printComments(this.getComments("leadingComments",e,t))},e.prototype.getComments=function(e,n,r){if(t.isExpressionStatement(r))return[];var i=[],o=[n];t.isExpressionStatement(n)&&o.push(n.argument);for(var s=o,a=0;a<s.length;a++){var l=s[a];i=i.concat(this._getComments(e,l))}return i},e.prototype._getComments=function(e,t){return t&&t[e]||[]},e.prototype.shouldPrintComment=function(e){return this.format.shouldPrintComment?this.format.shouldPrintComment(e.value):e.value.indexOf("@license")>=0||e.value.indexOf("@preserve")>=0||this.format.comments},e.prototype._printComments=function(e){if(e&&e.length)for(var t=e,n=0;n<t.length;n++){var r=t[n];if(this.shouldPrintComment(r)&&!r._displayed){r._displayed=!0,this.catchUp(r),this.newline(this.whitespace.getNewlinesBefore(r));var i=this.position.column,o=this.generateComment(r);if(i&&!this.isLast(["\n"," ","[","{"])&&(this._push(" "),i++),"CommentBlock"===r.type&&this.format.indent.adjustMultilineComment){var s=r.loc&&r.loc.start.column;if(s){var a=new RegExp("\\n\\s{1,"+s+"}","g");o=o.replace(a,"\n")}var l=Math.max(this.indentSize(),i);o=o.replace(/\n/g,"\n"+_repeating2.default(" ",l))}0===i&&(o=this.getIndent()+o),(this.format.compact||this.format.retainLines)&&"CommentLine"===r.type&&(o+="\n"),this._push(o),this.newline(this.whitespace.getNewlinesAfter(r))}}},_createClass(e,null,[{key:"generators",value:{templateLiterals:__webpack_require__("5M8x"),comprehensions:__webpack_require__("at0G"),expressions:__webpack_require__("I7cf"),statements:__webpack_require__("hYiX"),classes:__webpack_require__("h2Y/"),methods:__webpack_require__("V6P0"),modules:__webpack_require__("WkNG"),types:__webpack_require__("K5z/"),flow:__webpack_require__("3P70"),base:__webpack_require__("vQgq"),jsx:__webpack_require__("3PoF")},enumerable:!0}]),e}();_lodashCollectionEach2.default(_buffer2.default.prototype,function(e,t){CodeGenerator.prototype[t]=function(){return e.apply(this.buffer,arguments)}}),_lodashCollectionEach2.default(CodeGenerator.generators,function(e){_lodashObjectExtend2.default(CodeGenerator.prototype,e)}),module.exports=function(e,t,n){return new CodeGenerator(e,t,n).generate()},module.exports.CodeGenerator=CodeGenerator;

/***/ }),

/***/ "+JRV":
/***/ (function(module, exports, __webpack_require__) {

function flatten(e,t,a){var l=e?e.length:0;return a&&isIterateeCall(e,t,a)&&(t=!1),l?baseFlatten(e,t):[]}var baseFlatten=__webpack_require__("IkNy"),isIterateeCall=__webpack_require__("yv0r");module.exports=flatten;

/***/ }),

/***/ "+L9k":
/***/ (function(module, exports, __webpack_require__) {

var $=__webpack_require__("xpUr"),anObject=__webpack_require__("VWi1"),Reflect=__webpack_require__("R/OE").Reflect;module.exports=Reflect&&Reflect.ownKeys||function(e){var t=$.getNames(anObject(e)),r=$.getSymbols;return r?t.concat(r(e)):t};

/***/ }),

/***/ "+MO/":
/***/ (function(module, exports, __webpack_require__) {

function charSet(t){return t.split("").reduce(function(t,e){return t[e]=!0,t},{})}function filter(t,e){return e=e||{},function(i,n,r){return minimatch(i,t,e)}}function ext(t,e){t=t||{},e=e||{};var i={};return Object.keys(e).forEach(function(t){i[t]=e[t]}),Object.keys(t).forEach(function(e){i[e]=t[e]}),i}function minimatch(t,e,i){if("string"!=typeof e)throw new TypeError("glob pattern string required");return i||(i={}),!(!i.nocomment&&"#"===e.charAt(0))&&(""===e.trim()?""===t:new Minimatch(e,i).match(t))}function Minimatch(t,e){if(!(this instanceof Minimatch))return new Minimatch(t,e);if("string"!=typeof t)throw new TypeError("glob pattern string required");e||(e={}),t=t.trim(),"/"!==path.sep&&(t=t.split(path.sep).join("/")),this.options=e,this.set=[],this.pattern=t,this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,this.make()}function make(){if(!this._made){var t=this.pattern,e=this.options;if(!e.nocomment&&"#"===t.charAt(0))return void(this.comment=!0);if(!t)return void(this.empty=!0);this.parseNegate();var i=this.globSet=this.braceExpand();e.debug&&(this.debug=console.error),this.debug(this.pattern,i),i=this.globParts=i.map(function(t){return t.split(slashSplit)}),this.debug(this.pattern,i),i=i.map(function(t,e,i){return t.map(this.parse,this)},this),this.debug(this.pattern,i),i=i.filter(function(t){return-1===t.indexOf(!1)}),this.debug(this.pattern,i),this.set=i}}function parseNegate(){var t=this.pattern,e=!1,i=this.options,n=0;if(!i.nonegate){for(var r=0,a=t.length;r<a&&"!"===t.charAt(r);r++)e=!e,n++;n&&(this.pattern=t.substr(n)),this.negate=e}}function braceExpand(t,e){if(e||(e=this instanceof Minimatch?this.options:{}),void 0===(t=void 0===t?this.pattern:t))throw new Error("undefined pattern");return e.nobrace||!t.match(/\{.*\}/)?[t]:expand(t)}function parse(t,e){function i(){if(a){switch(a){case"*":h+=star,c=!0;break;case"?":h+=qmark,c=!0;break;default:h+="\\"+a}d.debug("clearStateChar %j %j",a,h),a=!1}}var n=this.options;if(!n.noglobstar&&"**"===t)return GLOBSTAR;if(""===t)return"";for(var r,a,s,h="",c=!!n.nocase,o=!1,u=[],p=[],f=!1,m=-1,g=-1,l="."===t.charAt(0)?"":n.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",d=this,b=0,v=t.length;b<v&&(s=t.charAt(b));b++)if(this.debug("%s\t%s %s %j",t,b,h,s),o&&reSpecials[s])h+="\\"+s,o=!1;else switch(s){case"/":return!1;case"\\":i(),o=!0;continue;case"?":case"*":case"+":case"@":case"!":if(this.debug("%s\t%s %s %j <-- stateChar",t,b,h,s),f){this.debug("  in class"),"!"===s&&b===g+1&&(s="^"),h+=s;continue}d.debug("call clearStateChar %j",a),i(),a=s,n.noext&&i();continue;case"(":if(f){h+="(";continue}if(!a){h+="\\(";continue}r=a,u.push({type:r,start:b-1,reStart:h.length}),h+="!"===a?"(?:(?!(?:":"(?:",this.debug("plType %j %j",a,h),a=!1;continue;case")":if(f||!u.length){h+="\\)";continue}i(),c=!0,h+=")";var S=u.pop();switch(r=S.type){case"!":p.push(S),h+=")[^/]*?)",S.reEnd=h.length;break;case"?":case"+":case"*":h+=r}continue;case"|":if(f||!u.length||o){h+="\\|",o=!1;continue}i(),h+="|";continue;case"[":if(i(),f){h+="\\"+s;continue}f=!0,g=b,m=h.length,h+=s;continue;case"]":if(b===g+1||!f){h+="\\"+s,o=!1;continue}if(f){var y=t.substring(g+1,b);try{RegExp("["+y+"]")}catch(t){var w=this.parse(y,SUBPARSE);h=h.substr(0,m)+"\\["+w[0]+"\\]",c=c||w[1],f=!1;continue}}c=!0,f=!1,h+=s;continue;default:i(),o?o=!1:!reSpecials[s]||"^"===s&&f||(h+="\\"),h+=s}for(f&&(y=t.substr(g+1),w=this.parse(y,SUBPARSE),h=h.substr(0,m)+"\\["+w[0],c=c||w[1]),S=u.pop();S;S=u.pop()){var x=h.slice(S.reStart+3);x=x.replace(/((?:\\{2})*)(\\?)\|/g,function(t,e,i){return i||(i="\\"),e+e+i+"|"}),this.debug("tail=%j\n   %s",x,x);var E="*"===S.type?star:"?"===S.type?qmark:"\\"+S.type;c=!0,h=h.slice(0,S.reStart)+E+"\\("+x}i(),o&&(h+="\\\\");var M=!1;switch(h.charAt(0)){case".":case"[":case"(":M=!0}for(var k=p.length-1;k>-1;k--){var A=p[k],R=h.slice(0,A.reStart),O=h.slice(A.reStart,A.reEnd-8),j=h.slice(A.reEnd-8,A.reEnd),B=h.slice(A.reEnd);j+=B;var T=R.split("(").length-1,$=B;for(b=0;b<T;b++)$=$.replace(/\)[+*?]?/,"");B=$;var L="";""===B&&e!==SUBPARSE&&(L="$");h=R+O+B+L+j}if(""!==h&&c&&(h="(?=.)"+h),M&&(h=l+h),e===SUBPARSE)return[h,c];if(!c)return globUnescape(t);var q=n.nocase?"i":"",N=new RegExp("^"+h+"$",q);return N._glob=t,N._src=h,N}function makeRe(){if(this.regexp||!1===this.regexp)return this.regexp;var t=this.set;if(!t.length)return this.regexp=!1,this.regexp;var e=this.options,i=e.noglobstar?star:e.dot?twoStarDot:twoStarNoDot,n=e.nocase?"i":"",r=t.map(function(t){return t.map(function(t){return t===GLOBSTAR?i:"string"==typeof t?regExpEscape(t):t._src}).join("\\/")}).join("|");r="^(?:"+r+")$",this.negate&&(r="^(?!"+r+").*$");try{this.regexp=new RegExp(r,n)}catch(t){this.regexp=!1}return this.regexp}function match(t,e){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return""===t;if("/"===t&&e)return!0;var i=this.options;"/"!==path.sep&&(t=t.split(path.sep).join("/")),t=t.split(slashSplit),this.debug(this.pattern,"split",t);var n=this.set;this.debug(this.pattern,"set",n);var r,a;for(a=t.length-1;a>=0&&!(r=t[a]);a--);for(a=0;a<n.length;a++){var s=n[a],h=t;i.matchBase&&1===s.length&&(h=[r]);if(this.matchOne(h,s,e))return!!i.flipNegate||!this.negate}return!i.flipNegate&&this.negate}function globUnescape(t){return t.replace(/\\(.)/g,"$1")}function regExpEscape(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}module.exports=minimatch,minimatch.Minimatch=Minimatch;var path={sep:"/"};try{path=__webpack_require__("o/zv")}catch(t){}var GLOBSTAR=minimatch.GLOBSTAR=Minimatch.GLOBSTAR={},expand=__webpack_require__("CFZA"),qmark="[^/]",star=qmark+"*?",twoStarDot="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",twoStarNoDot="(?:(?!(?:\\/|^)\\.).)*?",reSpecials=charSet("().*{}+?[]^$\\!"),slashSplit=/\/+/;minimatch.filter=filter,minimatch.defaults=function(t){if(!t||!Object.keys(t).length)return minimatch;var e=minimatch,i=function(i,n,r){return e.minimatch(i,n,ext(t,r))};return i.Minimatch=function(i,n){return new e.Minimatch(i,ext(t,n))},i},Minimatch.defaults=function(t){return t&&Object.keys(t).length?minimatch.defaults(t).Minimatch:Minimatch},Minimatch.prototype.debug=function(){},Minimatch.prototype.make=make,Minimatch.prototype.parseNegate=parseNegate,minimatch.braceExpand=function(t,e){return braceExpand(t,e)},Minimatch.prototype.braceExpand=braceExpand,Minimatch.prototype.parse=parse;var SUBPARSE={};minimatch.makeRe=function(t,e){return new Minimatch(t,e||{}).makeRe()},Minimatch.prototype.makeRe=makeRe,minimatch.match=function(t,e,i){i=i||{};var n=new Minimatch(e,i);return t=t.filter(function(t){return n.match(t)}),n.options.nonull&&!t.length&&t.push(e),t},Minimatch.prototype.match=match,Minimatch.prototype.matchOne=function(t,e,i){var n=this.options;this.debug("matchOne",{this:this,file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var r=0,a=0,s=t.length,h=e.length;r<s&&a<h;r++,a++){this.debug("matchOne loop");var c=e[a],o=t[r];if(this.debug(e,c,o),!1===c)return!1;if(c===GLOBSTAR){this.debug("GLOBSTAR",[e,c,o]);var u=r,p=a+1;if(p===h){for(this.debug("** at the end");r<s;r++)if("."===t[r]||".."===t[r]||!n.dot&&"."===t[r].charAt(0))return!1;return!0}for(;u<s;){var f=t[u];if(this.debug("\nglobstar while",t,u,e,p,f),this.matchOne(t.slice(u),e.slice(p),i))return this.debug("globstar found match!",u,s,f),!0;if("."===f||".."===f||!n.dot&&"."===f.charAt(0)){this.debug("dot detected!",t,u,e,p);break}this.debug("globstar swallow a segment, and continue"),u++}return!(!i||(this.debug("\n>>> no match, partial?",t,u,e,p),u!==s))}var m;if("string"==typeof c?(m=n.nocase?o.toLowerCase()===c.toLowerCase():o===c,this.debug("string match",c,o,m)):(m=o.match(c),this.debug("pattern match",c,o,m)),!m)return!1}if(r===s&&a===h)return!0;if(r===s)return i;if(a===h){return r===s-1&&""===t[r]}throw new Error("wtf?")};

/***/ }),

/***/ "+SzJ":
/***/ (function(module, exports, __webpack_require__) {

function baseCallback(e,t,r){var a=typeof e;return"function"==a?void 0===t?e:bindCallback(e,t,r):null==e?identity:"object"==a?baseMatches(e):void 0===t?property(e):baseMatchesProperty(e,t)}var baseMatches=__webpack_require__("ufT0"),baseMatchesProperty=__webpack_require__("/MWh"),bindCallback=__webpack_require__("929/"),identity=__webpack_require__("H3Ks"),property=__webpack_require__("Sv99");module.exports=baseCallback;

/***/ }),

/***/ "+XBD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=!0;var metadata={group:"builtin-pre"};exports.metadata=metadata;var visitor={Literal:function(t){"number"==typeof t.value&&/^0[ob]/i.test(t.raw)&&(t.raw=void 0),"string"==typeof t.value&&/\\[u]/gi.test(t.raw)&&(t.raw=void 0)}};exports.visitor=visitor;

/***/ }),

/***/ "+c+G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function manipulateOptions(e){e.blacklist.push("react")}exports.__esModule=!0,exports.manipulateOptions=manipulateOptions;var _helpersReact=__webpack_require__("fOWY"),react=_interopRequireWildcard(_helpersReact),_types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types),metadata={optional:!0,group:"builtin-advanced"};exports.metadata=metadata;var visitor=__webpack_require__("gvY8")({pre:function(e){e.callee=e.tagExpr},post:function(e){react.isCompatTag(e.tagName)&&(e.call=t.callExpression(t.memberExpression(t.memberExpression(t.identifier("React"),t.identifier("DOM")),e.tagExpr,t.isLiteral(e.tagExpr)),e.args))}});exports.visitor=visitor;

/***/ }),

/***/ "+fP0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0;var _libMetadata=__webpack_require__("L2Bz"),metadataVisitor=_interopRequireWildcard(_libMetadata),_messages=__webpack_require__("WkZC"),messages=_interopRequireWildcard(_messages),_libRemaps=__webpack_require__("whbC"),_libRemaps2=_interopRequireDefault(_libRemaps),_helpersObject=__webpack_require__("VmBk"),_helpersObject2=_interopRequireDefault(_helpersObject),_util=__webpack_require__("Dahv"),util=_interopRequireWildcard(_util),_types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types),DefaultFormatter=function(){function e(t){_classCallCheck(this,e),this.sourceScopes=_helpersObject2.default(),this.defaultIds=_helpersObject2.default(),this.ids=_helpersObject2.default(),this.remaps=new _libRemaps2.default(t,this),this.scope=t.scope,this.file=t,this.hasNonDefaultExports=!1,this.hasLocalExports=!1,this.hasLocalImports=!1,this.localExports=_helpersObject2.default(),this.localImports=_helpersObject2.default(),this.metadata=t.metadata.modules,this.getMetadata()}return e.prototype.addScope=function(e){var t=e.node.source&&e.node.source.value;if(t){var i=this.sourceScopes[t];if(i&&i!==e.scope)throw e.errorWithNode(messages.get("modulesDuplicateDeclarations"));this.sourceScopes[t]=e.scope}},e.prototype.isModuleType=function(e,t){var i=this.file.dynamicImportTypes[t];return i&&i.indexOf(e)>=0},e.prototype.transform=function(){this.remapAssignments()},e.prototype.doDefaultExportInterop=function(e){return(t.isExportDefaultDeclaration(e)||t.isSpecifierDefault(e))&&!this.noInteropRequireExport&&!this.hasNonDefaultExports},e.prototype.getMetadata=function(){for(var e=!1,i=this.file.ast.program.body,r=0;r<i.length;r++){var o=i[r];if(t.isModuleDeclaration(o)){e=!0;break}}(e||this.isLoose())&&this.file.path.traverse(metadataVisitor,this)},e.prototype.remapAssignments=function(){(this.hasLocalExports||this.hasLocalImports)&&this.remaps.run()},e.prototype.remapExportAssignment=function(e,i){for(var r=e,o=0;o<i.length;o++)r=t.assignmentExpression("=",t.memberExpression(t.identifier("exports"),i[o]),r);return r},e.prototype._addExport=function(e,t){(this.localExports[e]=this.localExports[e]||{binding:this.scope.getBindingIdentifier(e),exported:[]}).exported.push(t)},e.prototype.getExport=function(e,i){if(t.isIdentifier(e)){var r=this.localExports[e.name];return r&&r.binding===i.getBindingIdentifier(e.name)?r.exported:void 0}},e.prototype.getModuleName=function(){var e=this.file.opts;if(null!=e.moduleId&&!e.getModuleId)return e.moduleId;var t=e.filenameRelative,i="";if(null!=e.moduleRoot&&(i=e.moduleRoot+"/"),!e.filenameRelative)return i+e.filename.replace(/^\//,"");if(null!=e.sourceRoot){var r=new RegExp("^"+e.sourceRoot+"/?");t=t.replace(r,"")}return e.keepModuleIdExtensions||(t=t.replace(/\.(\w*?)$/,"")),i+=t,i=i.replace(/\\/g,"/"),e.getModuleId?e.getModuleId(i)||i:i},e.prototype._pushStatement=function(e,i){return(t.isClass(e)||t.isFunction(e))&&e.id&&(i.push(t.toStatement(e)),e=e.id),e},e.prototype._hoistExport=function(e,i,r){return t.isFunctionDeclaration(e)&&(i._blockHoist=r||2),i},e.prototype.getExternalReference=function(e,t){var i=this.ids,r=e.source.value;return i[r]?i[r]:this.ids[r]=this._getExternalReference(e,t)},e.prototype.checkExportIdentifier=function(e){if(t.isIdentifier(e,{name:"__esModule"}))throw this.file.errorWithNode(e,messages.get("modulesIllegalExportName",e.name))},e.prototype.exportAllDeclaration=function(e,t){var i=this.getExternalReference(e,t);t.push(this.buildExportsWildcard(i,e))},e.prototype.isLoose=function(){return this.file.isLoose("es6.modules")},e.prototype.exportSpecifier=function(e,i,r){if(i.source){var o=this.getExternalReference(i,r);if("default"!==e.local.name||this.noInteropRequireExport){if(o=t.memberExpression(o,e.local),!this.isLoose())return void r.push(this.buildExportsFromAssignment(e.exported,o,i))}else o=t.callExpression(this.file.addHelper("interop-require"),[o]);r.push(this.buildExportsAssignment(e.exported,o,i))}else r.push(this.buildExportsAssignment(e.exported,e.local,i))},e.prototype.buildExportsWildcard=function(e){return t.expressionStatement(t.callExpression(this.file.addHelper("defaults"),[t.identifier("exports"),t.callExpression(this.file.addHelper("interop-export-wildcard"),[e,this.file.addHelper("defaults")])]))},e.prototype.buildExportsFromAssignment=function(e,i){return this.checkExportIdentifier(e),util.template("exports-from-assign",{INIT:i,ID:t.literal(e.name)},!0)},e.prototype.buildExportsAssignment=function(e,t){return this.checkExportIdentifier(e),util.template("exports-assign",{VALUE:t,KEY:e},!0)},e.prototype.exportDeclaration=function(e,i){var r=e.declaration,o=r.id;t.isExportDefaultDeclaration(e)&&(o=t.identifier("default"));var s;if(t.isVariableDeclaration(r))for(var a=0;a<r.declarations.length;a++){var n=r.declarations[a];n.init=this.buildExportsAssignment(n.id,n.init,e).expression;var l=t.variableDeclaration(r.kind,[n]);0===a&&t.inherits(l,r),i.push(l)}else{var p=r;(t.isFunctionDeclaration(r)||t.isClassDeclaration(r))&&(p=r.id,i.push(r)),s=this.buildExportsAssignment(o,p,e),i.push(s),this._hoistExport(r,s)}},e}();exports.default=DefaultFormatter,module.exports=exports.default;

/***/ }),

/***/ "+mOw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=function(e){e.use(__webpack_require__("rVxO")),e.use(__webpack_require__("ca8L"))};

/***/ }),

/***/ "+r0j":
/***/ (function(module, exports, __webpack_require__) {

exports.SourceMapGenerator=__webpack_require__("O8K4").SourceMapGenerator,exports.SourceMapConsumer=__webpack_require__("G4xT").SourceMapConsumer,exports.SourceNode=__webpack_require__("E+dE").SourceNode;

/***/ }),

/***/ "+yjc":
/***/ (function(module, exports, __webpack_require__) {

var isObject=__webpack_require__("unZK");__webpack_require__("eB8i")("isSealed",function(e){return function(r){return!isObject(r)||!!e&&e(r)}});

/***/ }),

/***/ "/FgT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function hasRefOrSpread(e){for(var r=0;r<e.length;r++){var i=e[r];if(t.isJSXSpreadAttribute(i))return!0;if(isJSXAttributeOfName(i,"ref"))return!0}return!1}function isJSXAttributeOfName(e,r){return t.isJSXAttribute(e)&&t.isJSXIdentifier(e.name,{name:r})}exports.__esModule=!0;var _helpersReact=__webpack_require__("fOWY"),react=_interopRequireWildcard(_helpersReact),_types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types),metadata={optional:!0};exports.metadata=metadata;var visitor={JSXElement:function(e,r,i,a){function n(e,r){l(u.properties,t.identifier(e),r)}function l(e,r,i){e.push(t.property("init",r,i))}var s=e.openingElement;if(!hasRefOrSpread(s.attributes)){var p=!0,o=t.objectExpression([]),u=t.objectExpression([]),f=t.literal(null),d=s.name;if(t.isJSXIdentifier(d)&&react.isCompatTag(d.name)&&(d=t.literal(d.name),p=!1),e.children.length){var c=react.buildChildren(e);c=1===c.length?c[0]:t.arrayExpression(c),l(o.properties,t.identifier("children"),c)}for(var m=0;m<s.attributes.length;m++){var v=s.attributes[m];isJSXAttributeOfName(v,"key")?f=v.value:l(o.properties,v.name,v.value||t.identifier("true"))}return p&&(o=t.callExpression(a.addHelper("default-props"),[t.memberExpression(d,t.identifier("defaultProps")),o])),n("$$typeof",a.addHelper("typeof-react-element")),n("type",d),n("key",f),n("ref",t.literal(null)),n("props",o),n("_owner",t.literal(null)),u}}};exports.visitor=visitor;

/***/ }),

/***/ "/MLu":
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__("cSWu").PassThrough;

/***/ }),

/***/ "/MWh":
/***/ (function(module, exports, __webpack_require__) {

function baseMatchesProperty(e,r){var t=isArray(e),a=isKey(e)&&isStrictComparable(r),i=e+"";return e=toPath(e),function(s){if(null==s)return!1;var u=i;if(s=toObject(s),(t||!a)&&!(u in s)){if(null==(s=1==e.length?s:baseGet(s,baseSlice(e,0,-1))))return!1;u=last(e),s=toObject(s)}return s[u]===r?void 0!==r||u in s:baseIsEqual(r,s[u],void 0,!0)}}var baseGet=__webpack_require__("KtDW"),baseIsEqual=__webpack_require__("h++T"),baseSlice=__webpack_require__("erq/"),isArray=__webpack_require__("GoOW"),isKey=__webpack_require__("MAcJ"),isStrictComparable=__webpack_require__("uzs1"),last=__webpack_require__("AuQy"),toObject=__webpack_require__("1eAM"),toPath=__webpack_require__("yo/E");module.exports=baseMatchesProperty;

/***/ }),

/***/ "/OP5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getSecret(e){return e[secretKey]}function Lines(e,t){assert.ok(this instanceof Lines),assert.ok(e.length>0),t?isString.assert(t):t=null,setSymbolOrKey(this,secretKey,{infos:e,mappings:[],name:t,cachedSourceMap:null}),this.length=e.length,this.name=t,t&&getSecret(this).mappings.push(new Mapping(this,{start:this.firstPos(),end:this.lastPos()}))}function setSymbolOrKey(e,t,n){return useSymbol?e[t]=n:(Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!1,configurable:!0}),n)}function copyLineInfo(e){return{line:e.line,indent:e.indent,locked:e.locked,sliceStart:e.sliceStart,sliceEnd:e.sliceEnd}}function countSpaces(e,t){for(var n=0,i=e.length,s=0;s<i;++s)switch(e.charCodeAt(s)){case 9:assert.strictEqual(void 0===t?"undefined":(0,_typeof3.default)(t),"number"),assert.ok(t>0);var r=Math.ceil(n/t)*t;r===n?n+=t:n=r;break;case 11:case 12:case 13:case 65279:break;case 32:default:n+=1}return n}function fromString(e,t){if(e instanceof Lines)return e;e+="";var n=t&&t.tabWidth,i=e.indexOf("\t")<0,s=!(!t||!t.locked),r=!t&&i&&e.length<=maxCacheKeyLen;if(assert.ok(n||i,"No tab width specified but encountered tabs in string\n"+e),r&&hasOwn.call(fromStringCache,e))return fromStringCache[e];var a=new Lines(e.split(lineTerminatorSeqExp).map(function(e){var t=leadingSpaceExp.exec(e)[0];return{line:e,indent:countSpaces(t,n),locked:s,sliceStart:t.length,sliceEnd:e.length}}),normalizeOptions(t).sourceFileName);return r&&(fromStringCache[e]=a),a}function isOnlyWhitespace(e){return!/\S/.test(e)}function sliceInfo(e,t,n){var i=e.sliceStart,s=e.sliceEnd,r=Math.max(e.indent,0),a=r+s-i;return void 0===n&&(n=a),t=Math.max(t,0),n=Math.min(n,a),n=Math.max(n,t),n<r?(r=n,s=i):s-=a-n,a=n,a-=t,t<r?r-=t:(t-=r,r=0,i+=t),assert.ok(r>=0),assert.ok(i<=s),assert.strictEqual(a,r+s-i),e.indent===r&&e.sliceStart===i&&e.sliceEnd===s?e:{line:e.line,indent:r,locked:!1,sliceStart:i,sliceEnd:s}}var _typeof2=__webpack_require__("pFYg"),_typeof3=_interopRequireDefault(_typeof2),assert=__webpack_require__("N+Om"),sourceMap=__webpack_require__("+r0j"),normalizeOptions=__webpack_require__("wLGZ").normalize,secretKey=__webpack_require__("PWVg").makeUniqueKey(),types=__webpack_require__("zQC4"),isString=types.builtInTypes.string,comparePos=__webpack_require__("pdfV").comparePos,Mapping=__webpack_require__("Wnqv"),useSymbol="function"==typeof Symbol,secretKey="recastLinesSecret";useSymbol&&(secretKey=Symbol.for(secretKey)),exports.Lines=Lines;var Lp=Lines.prototype,fromStringCache={},hasOwn=fromStringCache.hasOwnProperty,maxCacheKeyLen=10;exports.countSpaces=countSpaces;var leadingSpaceExp=/^\s*/,lineTerminatorSeqExp=/\u000D\u000A|\u000D(?!\u000A)|\u000A|\u2028|\u2029/;exports.fromString=fromString,Lp.toString=function(e){return this.sliceString(this.firstPos(),this.lastPos(),e)},Lp.getSourceMap=function(e,t){function n(n){return n=n||{},isString.assert(e),n.file=e,t&&(isString.assert(t),n.sourceRoot=t),n}if(!e)return null;var i=this,s=getSecret(i);if(s.cachedSourceMap)return n(s.cachedSourceMap.toJSON());var r=new sourceMap.SourceMapGenerator(n()),a={};return s.mappings.forEach(function(e){for(var t=e.sourceLines.skipSpaces(e.sourceLoc.start)||e.sourceLines.lastPos(),n=i.skipSpaces(e.targetLoc.start)||i.lastPos();comparePos(t,e.sourceLoc.end)<0&&comparePos(n,e.targetLoc.end)<0;){var s=e.sourceLines.charAt(t),c=i.charAt(n);assert.strictEqual(s,c);var o=e.sourceLines.name;if(r.addMapping({source:o,original:{line:t.line,column:t.column},generated:{line:n.line,column:n.column}}),!hasOwn.call(a,o)){var l=e.sourceLines.toString();r.setSourceContent(o,l),a[o]=l}i.nextPos(n,!0),e.sourceLines.nextPos(t,!0)}}),s.cachedSourceMap=r,r.toJSON()},Lp.bootstrapCharAt=function(e){assert.strictEqual(void 0===e?"undefined":(0,_typeof3.default)(e),"object"),assert.strictEqual((0,_typeof3.default)(e.line),"number"),assert.strictEqual((0,_typeof3.default)(e.column),"number");var t=e.line,n=e.column,i=this.toString().split(lineTerminatorSeqExp),s=i[t-1];return void 0===s?"":n===s.length&&t<i.length?"\n":n>=s.length?"":s.charAt(n)},Lp.charAt=function(e){assert.strictEqual(void 0===e?"undefined":(0,_typeof3.default)(e),"object"),assert.strictEqual((0,_typeof3.default)(e.line),"number"),assert.strictEqual((0,_typeof3.default)(e.column),"number");var t=e.line,n=e.column,i=getSecret(this),s=i.infos,r=s[t-1],a=n;if(void 0===r||a<0)return"";var c=this.getIndentAt(t);return a<c?" ":(a+=r.sliceStart-c,a===r.sliceEnd&&t<this.length?"\n":a>=r.sliceEnd?"":r.line.charAt(a))},Lp.stripMargin=function(e,t){if(0===e)return this;if(assert.ok(e>0,"negative margin: "+e),t&&1===this.length)return this;var n=getSecret(this),i=new Lines(n.infos.map(function(n,i){return n.line&&(i>0||!t)&&(n=copyLineInfo(n),n.indent=Math.max(0,n.indent-e)),n}));if(n.mappings.length>0){var s=getSecret(i).mappings;assert.strictEqual(s.length,0),n.mappings.forEach(function(n){s.push(n.indent(e,t,!0))})}return i},Lp.indent=function(e){if(0===e)return this;var t=getSecret(this),n=new Lines(t.infos.map(function(t){return t.line&&!t.locked&&(t=copyLineInfo(t),t.indent+=e),t}));if(t.mappings.length>0){var i=getSecret(n).mappings;assert.strictEqual(i.length,0),t.mappings.forEach(function(t){i.push(t.indent(e))})}return n},Lp.indentTail=function(e){if(0===e)return this;if(this.length<2)return this;var t=getSecret(this),n=new Lines(t.infos.map(function(t,n){return n>0&&t.line&&!t.locked&&(t=copyLineInfo(t),t.indent+=e),t}));if(t.mappings.length>0){var i=getSecret(n).mappings;assert.strictEqual(i.length,0),t.mappings.forEach(function(t){i.push(t.indent(e,!0))})}return n},Lp.lockIndentTail=function(){return this.length<2?this:new Lines(getSecret(this).infos.map(function(e,t){return e=copyLineInfo(e),e.locked=t>0,e}))},Lp.getIndentAt=function(e){assert.ok(e>=1,"no line "+e+" (line numbers start from 1)");var t=getSecret(this),n=t.infos[e-1];return Math.max(n.indent,0)},Lp.guessTabWidth=function(){var e=getSecret(this);if(hasOwn.call(e,"cachedTabWidth"))return e.cachedTabWidth;for(var t=[],n=0,i=1,s=this.length;i<=s;++i){var r=e.infos[i-1];if(!isOnlyWhitespace(r.line.slice(r.sliceStart,r.sliceEnd))){var a=Math.abs(r.indent-n);t[a]=1+~~t[a],n=r.indent}}for(var c=-1,o=2,l=1;l<t.length;l+=1)hasOwn.call(t,l)&&t[l]>c&&(c=t[l],o=l);return e.cachedTabWidth=o},Lp.startsWithComment=function(){var e=getSecret(this);if(0===e.infos.length)return!1;var t=e.infos[0],n=t.sliceStart,i=t.sliceEnd,s=t.line.slice(n,i).trim();return 0===s.length||"//"===s.slice(0,2)||"/*"===s.slice(0,2)},Lp.isOnlyWhitespace=function(){return isOnlyWhitespace(this.toString())},Lp.isPrecededOnlyByWhitespace=function(e){var t=getSecret(this),n=t.infos[e.line-1],i=Math.max(n.indent,0),s=e.column-i;if(s<=0)return!0;var r=n.sliceStart,a=Math.min(r+s,n.sliceEnd);return isOnlyWhitespace(n.line.slice(r,a))},Lp.getLineLength=function(e){var t=getSecret(this),n=t.infos[e-1];return this.getIndentAt(e)+n.sliceEnd-n.sliceStart},Lp.nextPos=function(e,t){var n=Math.max(e.line,0);return Math.max(e.column,0)<this.getLineLength(n)?(e.column+=1,!t||!!this.skipSpaces(e,!1,!0)):n<this.length&&(e.line+=1,e.column=0,!t||!!this.skipSpaces(e,!1,!0))},Lp.prevPos=function(e,t){var n=e.line,i=e.column;if(i<1){if((n-=1)<1)return!1;i=this.getLineLength(n)}else i=Math.min(i-1,this.getLineLength(n));return e.line=n,e.column=i,!t||!!this.skipSpaces(e,!0,!0)},Lp.firstPos=function(){return{line:1,column:0}},Lp.lastPos=function(){return{line:this.length,column:this.getLineLength(this.length)}},Lp.skipSpaces=function(e,t,n){if(e=e?n?e:{line:e.line,column:e.column}:t?this.lastPos():this.firstPos(),t){for(;this.prevPos(e);)if(!isOnlyWhitespace(this.charAt(e))&&this.nextPos(e))return e;return null}for(;isOnlyWhitespace(this.charAt(e));)if(!this.nextPos(e))return null;return e},Lp.trimLeft=function(){var e=this.skipSpaces(this.firstPos(),!1,!0);return e?this.slice(e):emptyLines},Lp.trimRight=function(){var e=this.skipSpaces(this.lastPos(),!0,!0);return e?this.slice(this.firstPos(),e):emptyLines},Lp.trim=function(){var e=this.skipSpaces(this.firstPos(),!1,!0);if(null===e)return emptyLines;var t=this.skipSpaces(this.lastPos(),!0,!0);return assert.notStrictEqual(t,null),this.slice(e,t)},Lp.eachPos=function(e,t,n){var i=this.firstPos();if(t&&(i.line=t.line,i.column=t.column),!n||this.skipSpaces(i,!1,!0))do{e.call(this,i)}while(this.nextPos(i,n))},Lp.bootstrapSlice=function(e,t){var n=this.toString().split(lineTerminatorSeqExp).slice(e.line-1,t.line);return n.push(n.pop().slice(0,t.column)),n[0]=n[0].slice(e.column),fromString(n.join("\n"))},Lp.slice=function(e,t){if(!t){if(!e)return this;t=this.lastPos()}var n=getSecret(this),i=n.infos.slice(e.line-1,t.line);e.line===t.line?i[0]=sliceInfo(i[0],e.column,t.column):(assert.ok(e.line<t.line),i[0]=sliceInfo(i[0],e.column),i.push(sliceInfo(i.pop(),0,t.column)));var s=new Lines(i);if(n.mappings.length>0){var r=getSecret(s).mappings;assert.strictEqual(r.length,0),n.mappings.forEach(function(n){var i=n.slice(this,e,t);i&&r.push(i)},this)}return s},Lp.bootstrapSliceString=function(e,t,n){return this.slice(e,t).toString(n)},Lp.sliceString=function(e,t,n){if(!t){if(!e)return this;t=this.lastPos()}n=normalizeOptions(n);for(var i=getSecret(this).infos,s=[],r=n.tabWidth,a=e.line;a<=t.line;++a){var c=i[a-1];a===e.line?c=a===t.line?sliceInfo(c,e.column,t.column):sliceInfo(c,e.column):a===t.line&&(c=sliceInfo(c,0,t.column));var o=Math.max(c.indent,0),l=c.line.slice(0,c.sliceStart);if(n.reuseWhitespace&&isOnlyWhitespace(l)&&countSpaces(l,n.tabWidth)===o)s.push(c.line.slice(0,c.sliceEnd));else{var u=0,p=o;n.useTabs&&(u=Math.floor(o/r),p-=u*r);var h="";u>0&&(h+=new Array(u+1).join("\t")),p>0&&(h+=new Array(p+1).join(" ")),h+=c.line.slice(c.sliceStart,c.sliceEnd),s.push(h)}}return s.join(n.lineTerminator)},Lp.isEmpty=function(){return this.length<2&&this.getLineLength(1)<1},Lp.join=function(e){function t(e){if(null!==e){if(i){var t=e.infos[0],n=new Array(t.indent+1).join(" "),s=a.length,r=Math.max(i.indent,0)+i.sliceEnd-i.sliceStart;i.line=i.line.slice(0,i.sliceEnd)+n+t.line.slice(t.sliceStart,t.sliceEnd),i.locked=i.locked||t.locked,i.sliceEnd=i.line.length,e.mappings.length>0&&e.mappings.forEach(function(e){c.push(e.add(s,r))})}else e.mappings.length>0&&c.push.apply(c,e.mappings);e.infos.forEach(function(e,t){(!i||t>0)&&(i=copyLineInfo(e),a.push(i))})}}function n(e,n){n>0&&t(r),t(e)}var i,s=this,r=getSecret(s),a=[],c=[];if(e.map(function(e){var t=fromString(e);return t.isEmpty()?null:getSecret(t)}).forEach(s.isEmpty()?t:n),a.length<1)return emptyLines;var o=new Lines(a);return getSecret(o).mappings=c,o},exports.concat=function(e){return emptyLines.join(e)},Lp.concat=function(e){var t=arguments,n=[this];return n.push.apply(n,t),assert.strictEqual(n.length,t.length+1),emptyLines.join(n)};var emptyLines=fromString("");

/***/ }),

/***/ "/VRN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function toComputedKey(){var e,r=this.node;if(this.isMemberExpression())e=r.property;else{if(!this.isProperty())throw new ReferenceError("todo");e=r.key}return r.computed||t.isIdentifier(e)&&(e=t.literal(e.name)),e}function ensureBlock(){return t.ensureBlock(this.node)}exports.__esModule=!0,exports.toComputedKey=toComputedKey,exports.ensureBlock=ensureBlock;var _types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types);

/***/ }),

/***/ "/xxB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _index=__webpack_require__("qBJr"),_index2=_interopRequireDefault(_index);_index2.default("ArrayExpression",{visitor:["elements"],aliases:["Expression"]}),_index2.default("AssignmentExpression",{builder:["operator","left","right"],visitor:["left","right"],aliases:["Expression"]}),_index2.default("BinaryExpression",{builder:["operator","left","right"],visitor:["left","right"],aliases:["Binary","Expression"]}),_index2.default("BlockStatement",{visitor:["body"],aliases:["Scopable","BlockParent","Block","Statement"]}),_index2.default("BreakStatement",{visitor:["label"],aliases:["Statement","Terminatorless","CompletionStatement"]}),_index2.default("CallExpression",{visitor:["callee","arguments"],aliases:["Expression"]}),_index2.default("CatchClause",{visitor:["param","body"],aliases:["Scopable"]}),_index2.default("ConditionalExpression",{visitor:["test","consequent","alternate"],aliases:["Expression"]}),_index2.default("ContinueStatement",{visitor:["label"],aliases:["Statement","Terminatorless","CompletionStatement"]}),_index2.default("DebuggerStatement",{aliases:["Statement"]}),_index2.default("DoWhileStatement",{visitor:["body","test"],aliases:["Statement","BlockParent","Loop","While","Scopable"]}),_index2.default("EmptyStatement",{aliases:["Statement"]}),_index2.default("ExpressionStatement",{visitor:["expression"],aliases:["Statement"]}),_index2.default("File",{builder:["program","comments","tokens"],visitor:["program"]}),_index2.default("ForInStatement",{visitor:["left","right","body"],aliases:["Scopable","Statement","For","BlockParent","Loop","ForXStatement"]}),_index2.default("ForStatement",{visitor:["init","test","update","body"],aliases:["Scopable","Statement","For","BlockParent","Loop"]}),_index2.default("FunctionDeclaration",{builder:{id:null,params:null,body:null,generator:!1,async:!1},visitor:["id","params","body","returnType","typeParameters"],aliases:["Scopable","Function","Func","BlockParent","FunctionParent","Statement","Pure","Declaration"]}),_index2.default("FunctionExpression",{builder:{id:null,params:null,body:null,generator:!1,async:!1},visitor:["id","params","body","returnType","typeParameters"],aliases:["Scopable","Function","Func","BlockParent","FunctionParent","Expression","Pure"]}),_index2.default("Identifier",{builder:["name"],visitor:["typeAnnotation"],aliases:["Expression"]}),_index2.default("IfStatement",{visitor:["test","consequent","alternate"],aliases:["Statement"]}),_index2.default("LabeledStatement",{visitor:["label","body"],aliases:["Statement"]}),_index2.default("Literal",{builder:["value"],aliases:["Expression","Pure"]}),_index2.default("LogicalExpression",{builder:["operator","left","right"],visitor:["left","right"],aliases:["Binary","Expression"]}),_index2.default("MemberExpression",{builder:{object:null,property:null,computed:!1},visitor:["object","property"],aliases:["Expression"]}),_index2.default("NewExpression",{visitor:["callee","arguments"],aliases:["Expression"]}),_index2.default("ObjectExpression",{visitor:["properties"],aliases:["Expression"]}),_index2.default("Program",{visitor:["body"],aliases:["Scopable","BlockParent","Block","FunctionParent"]}),_index2.default("Property",{builder:{kind:"init",key:null,value:null,computed:!1},visitor:["key","value","decorators"],aliases:["UserWhitespacable"]}),_index2.default("RestElement",{visitor:["argument","typeAnnotation"]}),_index2.default("ReturnStatement",{visitor:["argument"],aliases:["Statement","Terminatorless","CompletionStatement"]}),_index2.default("SequenceExpression",{visitor:["expressions"],aliases:["Expression"]}),_index2.default("SwitchCase",{visitor:["test","consequent"]}),_index2.default("SwitchStatement",{visitor:["discriminant","cases"],aliases:["Statement","BlockParent","Scopable"]}),_index2.default("ThisExpression",{aliases:["Expression"]}),_index2.default("ThrowStatement",{visitor:["argument"],aliases:["Statement","Terminatorless","CompletionStatement"]}),_index2.default("TryStatement",{builder:["block","handler","finalizer"],visitor:["block","handlers","handler","guardedHandlers","finalizer"],aliases:["Statement"]}),_index2.default("UnaryExpression",{builder:{operator:null,argument:null,prefix:!1},visitor:["argument"],aliases:["UnaryLike","Expression"]}),_index2.default("UpdateExpression",{builder:{operator:null,argument:null,prefix:!1},visitor:["argument"],aliases:["Expression"]}),_index2.default("VariableDeclaration",{builder:["kind","declarations"],visitor:["declarations"],aliases:["Statement","Declaration"]}),_index2.default("VariableDeclarator",{visitor:["id","init"]}),_index2.default("WhileStatement",{visitor:["test","body"],aliases:["Statement","BlockParent","Loop","While","Scopable"]}),_index2.default("WithStatement",{visitor:["object","body"],aliases:["Statement"]});

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "05yX":
/***/ (function(module, exports) {

module.exports=function(r,t){for(var a=[],o=0;o<r.length;o++){var e=t(r[o],o);isArray(e)?a.push.apply(a,e):a.push(e)}return a};var isArray=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)};

/***/ }),

/***/ "0BP7":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("qJ9O");var types=__webpack_require__("wrJw"),defaults=__webpack_require__("rHGw").defaults,def=types.Type.def,or=types.Type.or;def("Noop").bases("Node").build(),def("DoExpression").bases("Expression").build("body").field("body",[def("Statement")]),def("Super").bases("Expression").build(),def("BindExpression").bases("Expression").build("object","callee").field("object",or(def("Expression"),null)).field("callee",def("Expression")),def("Decorator").bases("Node").build("expression").field("expression",def("Expression")),def("Property").field("decorators",or([def("Decorator")],null),defaults.null),def("MethodDefinition").field("decorators",or([def("Decorator")],null),defaults.null),def("MetaProperty").bases("Expression").build("meta","property").field("meta",def("Identifier")).field("property",def("Identifier")),def("ParenthesizedExpression").bases("Expression").build("expression").field("expression",def("Expression")),def("ImportSpecifier").bases("ModuleSpecifier").build("imported","local").field("imported",def("Identifier")),def("ImportDefaultSpecifier").bases("ModuleSpecifier").build("local"),def("ImportNamespaceSpecifier").bases("ModuleSpecifier").build("local"),def("ExportDefaultDeclaration").bases("Declaration").build("declaration").field("declaration",or(def("Declaration"),def("Expression"))),def("ExportNamedDeclaration").bases("Declaration").build("declaration","specifiers","source").field("declaration",or(def("Declaration"),null)).field("specifiers",[def("ExportSpecifier")],defaults.emptyArray).field("source",or(def("Literal"),null),defaults.null),def("ExportSpecifier").bases("ModuleSpecifier").build("local","exported").field("exported",def("Identifier")),def("ExportNamespaceSpecifier").bases("Specifier").build("exported").field("exported",def("Identifier")),def("ExportDefaultSpecifier").bases("Specifier").build("exported").field("exported",def("Identifier")),def("ExportAllDeclaration").bases("Declaration").build("exported","source").field("exported",or(def("Identifier"),null)).field("source",def("Literal")),def("CommentBlock").bases("Comment").build("value","leading","trailing"),def("CommentLine").bases("Comment").build("value","leading","trailing");

/***/ }),

/***/ "0HBY":
/***/ (function(module, exports) {

module.exports = {"useStrict":"strict","es5.runtime":"runtime","es6.runtime":"runtime","minification.inlineExpressions":"minification.constantFolding"}

/***/ }),

/***/ "0ToR":
/***/ (function(module, exports, __webpack_require__) {

function SourceMapGenerator(e){e||(e={}),this._file=util.getArg(e,"file",null),this._sourceRoot=util.getArg(e,"sourceRoot",null),this._skipValidation=util.getArg(e,"skipValidation",!1),this._sources=new ArraySet,this._names=new ArraySet,this._mappings=new MappingList,this._sourcesContents=null}var base64VLQ=__webpack_require__("AEpD"),util=__webpack_require__("e4vS"),ArraySet=__webpack_require__("3zVA").ArraySet,MappingList=__webpack_require__("4SBx").MappingList;SourceMapGenerator.prototype._version=3,SourceMapGenerator.fromSourceMap=function(e){var n=e.sourceRoot,t=new SourceMapGenerator({file:e.file,sourceRoot:n});return e.eachMapping(function(e){var o={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(o.source=e.source,null!=n&&(o.source=util.relative(n,o.source)),o.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(o.name=e.name)),t.addMapping(o)}),e.sources.forEach(function(n){var o=e.sourceContentFor(n);null!=o&&t.setSourceContent(n,o)}),t},SourceMapGenerator.prototype.addMapping=function(e){var n=util.getArg(e,"generated"),t=util.getArg(e,"original",null),o=util.getArg(e,"source",null),r=util.getArg(e,"name",null);this._skipValidation||this._validateMapping(n,t,o,r),null!=o&&(o=String(o),this._sources.has(o)||this._sources.add(o)),null!=r&&(r=String(r),this._names.has(r)||this._names.add(r)),this._mappings.add({generatedLine:n.line,generatedColumn:n.column,originalLine:null!=t&&t.line,originalColumn:null!=t&&t.column,source:o,name:r})},SourceMapGenerator.prototype.setSourceContent=function(e,n){var t=e;null!=this._sourceRoot&&(t=util.relative(this._sourceRoot,t)),null!=n?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[util.toSetString(t)]=n):this._sourcesContents&&(delete this._sourcesContents[util.toSetString(t)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},SourceMapGenerator.prototype.applySourceMap=function(e,n,t){var o=n;if(null==n){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');o=e.file}var r=this._sourceRoot;null!=r&&(o=util.relative(r,o));var i=new ArraySet,s=new ArraySet;this._mappings.unsortedForEach(function(n){if(n.source===o&&null!=n.originalLine){var l=e.originalPositionFor({line:n.originalLine,column:n.originalColumn});null!=l.source&&(n.source=l.source,null!=t&&(n.source=util.join(t,n.source)),null!=r&&(n.source=util.relative(r,n.source)),n.originalLine=l.line,n.originalColumn=l.column,null!=l.name&&(n.name=l.name))}var u=n.source;null==u||i.has(u)||i.add(u);var a=n.name;null==a||s.has(a)||s.add(a)},this),this._sources=i,this._names=s,e.sources.forEach(function(n){var o=e.sourceContentFor(n);null!=o&&(null!=t&&(n=util.join(t,n)),null!=r&&(n=util.relative(r,n)),this.setSourceContent(n,o))},this)},SourceMapGenerator.prototype._validateMapping=function(e,n,t,o){if(n&&"number"!=typeof n.line&&"number"!=typeof n.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||n||t||o)&&!(e&&"line"in e&&"column"in e&&n&&"line"in n&&"column"in n&&e.line>0&&e.column>=0&&n.line>0&&n.column>=0&&t))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:t,original:n,name:o}))},SourceMapGenerator.prototype._serializeMappings=function(){for(var e,n,t,o,r=0,i=1,s=0,l=0,u=0,a=0,c="",p=this._mappings.toArray(),g=0,h=p.length;g<h;g++){if(n=p[g],e="",n.generatedLine!==i)for(r=0;n.generatedLine!==i;)e+=";",i++;else if(g>0){if(!util.compareByGeneratedPositionsInflated(n,p[g-1]))continue;e+=","}e+=base64VLQ.encode(n.generatedColumn-r),r=n.generatedColumn,null!=n.source&&(o=this._sources.indexOf(n.source),e+=base64VLQ.encode(o-a),a=o,e+=base64VLQ.encode(n.originalLine-1-l),l=n.originalLine-1,e+=base64VLQ.encode(n.originalColumn-s),s=n.originalColumn,null!=n.name&&(t=this._names.indexOf(n.name),e+=base64VLQ.encode(t-u),u=t)),c+=e}return c},SourceMapGenerator.prototype._generateSourcesContent=function(e,n){return e.map(function(e){if(!this._sourcesContents)return null;null!=n&&(e=util.relative(n,e));var t=util.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,t)?this._sourcesContents[t]:null},this)},SourceMapGenerator.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},SourceMapGenerator.prototype.toString=function(){return JSON.stringify(this.toJSON())},exports.SourceMapGenerator=SourceMapGenerator;

/***/ }),

/***/ "0UaC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}exports.__esModule=!0;var _transformationHelpersReact=__webpack_require__("fOWY"),react=_interopRequireWildcard(_transformationHelpersReact),_types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types),ReferencedIdentifier={types:["Identifier","JSXIdentifier"],checkPath:function(e,r){var n=e.node,i=e.parent;if(!t.isIdentifier(n,r)){if(!t.isJSXIdentifier(n,r))return!1;if(react.isCompatTag(n.name))return!1}return t.isReferenced(n,i)}};exports.ReferencedIdentifier=ReferencedIdentifier;var BindingIdentifier={types:["Identifier"],checkPath:function(e){var r=e.node,n=e.parent;return t.isBinding(r,n)}};exports.BindingIdentifier=BindingIdentifier;var Statement={types:["Statement"],checkPath:function(e){var r=e.node,n=e.parent;if(t.isStatement(r)){if(t.isVariableDeclaration(r)){if(t.isForXStatement(n,{left:r}))return!1;if(t.isForStatement(n,{init:r}))return!1}return!0}return!1}};exports.Statement=Statement;var Expression={types:["Expression"],checkPath:function(e){return e.isIdentifier()?e.isReferencedIdentifier():t.isExpression(e.node)}};exports.Expression=Expression;var Scope={types:["Scopable"],checkPath:function(e){return t.isScope(e.node,e.parent)}};exports.Scope=Scope;var Referenced={checkPath:function(e){return t.isReferenced(e.node,e.parent)}};exports.Referenced=Referenced;var BlockScoped={checkPath:function(e){return t.isBlockScoped(e.node)}};exports.BlockScoped=BlockScoped;var Var={types:["VariableDeclaration"],checkPath:function(e){return t.isVar(e.node)}};exports.Var=Var;var DirectiveLiteral={types:["Literal"],checkPath:function(e){return e.isLiteral()&&e.parentPath.isExpressionStatement()}};exports.DirectiveLiteral=DirectiveLiteral;var Directive={types:["ExpressionStatement"],checkPath:function(e){return e.get("expression").isLiteral()}};exports.Directive=Directive;var User={checkPath:function(e){return e.node&&!!e.node.loc}};exports.User=User;var Generated={checkPath:function(e){return!e.isUser()}};exports.Generated=Generated;var Flow={types:["Flow","ImportDeclaration","ExportDeclaration"],checkPath:function(e){var r=e.node;return!!t.isFlow(r)||(t.isImportDeclaration(r)?"type"===r.importKind||"typeof"===r.importKind:!!t.isExportDeclaration(r)&&"type"===r.exportKind)}};exports.Flow=Flow;

/***/ }),

/***/ "0XeU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=function(e){e.use(__webpack_require__("89wL"));var i=e.use(__webpack_require__("QGbD")),s=i.Type.def,d=i.Type.or,r=e.use(__webpack_require__("CY2h")),a=r.geq,t=r.defaults;s("Function").field("body",d(s("BlockStatement"),s("Expression"))),s("ForInStatement").build("left","right","body","each").field("each",Boolean,t.false),s("LetStatement").bases("Statement").build("head","body").field("head",[s("VariableDeclarator")]).field("body",s("Statement")),s("LetExpression").bases("Expression").build("head","body").field("head",[s("VariableDeclarator")]).field("body",s("Expression")),s("GraphExpression").bases("Expression").build("index","expression").field("index",a(0)).field("expression",s("Literal")),s("GraphIndexExpression").bases("Expression").build("index").field("index",a(0))};

/***/ }),

/***/ "0e1j":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "0e1j";

/***/ }),

/***/ "0g7s":
/***/ (function(module, exports, __webpack_require__) {

var MATCH=__webpack_require__("F4kk")("match");module.exports=function(r){var t=/./;try{"/./"[r](t)}catch(c){try{return t[MATCH]=!1,!"/./"[r](t)}catch(r){}}return!0};

/***/ }),

/***/ "0rV+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _classCallCheck(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0;var Hub=function s(e){_classCallCheck(this,s),this.file=e};exports.default=Hub,module.exports=exports.default;

/***/ }),

/***/ "0x3h":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _utilLocation=__webpack_require__("aiEx"),_index=__webpack_require__("6ue+"),_index2=_interopRequireDefault(_index),pp=_index2.default.prototype;pp.raise=function(e,i){var t=_utilLocation.getLineInfo(this.input,e);i+=" ("+t.line+":"+t.column+")";var n=new SyntaxError(i);throw n.pos=e,n.loc=t,n};

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1A13":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $at=__webpack_require__("3N3B")(!0);__webpack_require__("S4Y3")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,i=this._t,e=this._i;return e>=i.length?{value:void 0,done:!0}:(t=$at(i,e),this._i+=t.length,{value:t,done:!1})});

/***/ }),

/***/ "1OjA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(r[l]=e[l]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function is(e,r){return t.isLiteral(e)&&e.regex&&e.regex.flags.indexOf(r)>=0}function pullFlag(e,r){var l=e.regex.flags.split("");e.regex.flags.indexOf(r)<0||(_lodashArrayPull2.default(l,r),e.regex.flags=l.join(""))}exports.__esModule=!0,exports.is=is,exports.pullFlag=pullFlag;var _lodashArrayPull=__webpack_require__("yAu7"),_lodashArrayPull2=_interopRequireDefault(_lodashArrayPull),_types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types);

/***/ }),

/***/ "1Ycv":
/***/ (function(module, exports, __webpack_require__) {

function isArrayLike(e){return null!=e&&isLength(getLength(e))}var getLength=__webpack_require__("nson"),isLength=__webpack_require__("H7na");module.exports=isArrayLike;

/***/ }),

/***/ "1b6t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r.default=e,r}function validateOption(e,r,i){var t=_config2.default[e],n=t&&parsers[t.type];return n&&n.validate?n.validate(e,r,i):r}function normaliseOptions(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];for(var r in e){var i=e[r];if(null!=i){var t=_config2.default[r];if(t){var n=parsers[t.type];n&&(i=n(i)),e[r]=i}}}return e}exports.__esModule=!0,exports.validateOption=validateOption,exports.normaliseOptions=normaliseOptions;var _parsers=__webpack_require__("A3vv"),parsers=_interopRequireWildcard(_parsers),_config=__webpack_require__("4NQN"),_config2=_interopRequireDefault(_config);exports.config=_config2.default;

/***/ }),

/***/ "1eAM":
/***/ (function(module, exports, __webpack_require__) {

function toObject(e){return isObject(e)?e:Object(e)}var isObject=__webpack_require__("5NhA");module.exports=toObject;

/***/ }),

/***/ "1ip3":
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__("ko72");$export($export.S,"Math",{log10:function(r){return Math.log(r)/Math.LN10}});

/***/ }),

/***/ "1rXP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var getOption=__webpack_require__("pdfV").getOption;exports.parse=function(t,e){var r=[],o=__webpack_require__("FpGq").parse(t,{loc:!0,locations:!0,comment:!0,onComment:r,tolerant:getOption(e,"tolerant",!0),tokens:getOption(e,"tokens",!0)});return Array.isArray(o.comments)||(o.comments=r),o};

/***/ }),

/***/ "1rh7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0;var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),_lodashCollectionIncludes=__webpack_require__("Prqb"),_lodashCollectionIncludes2=_interopRequireDefault(_lodashCollectionIncludes),_repeating=__webpack_require__("gyPO"),_repeating2=_interopRequireDefault(_repeating),_index=__webpack_require__("8JlZ"),_index2=_interopRequireDefault(_index),_lodashObjectDefaults=__webpack_require__("lGHS"),_lodashObjectDefaults2=_interopRequireDefault(_lodashObjectDefaults),_messages=__webpack_require__("WkZC"),messages=_interopRequireWildcard(_messages),_binding=__webpack_require__("aPnB"),_binding2=_interopRequireDefault(_binding),_globals=__webpack_require__("oNLq"),_globals2=_interopRequireDefault(_globals),_lodashArrayFlatten=__webpack_require__("+JRV"),_lodashArrayFlatten2=_interopRequireDefault(_lodashArrayFlatten),_lodashObjectExtend=__webpack_require__("z0yW"),_lodashObjectExtend2=_interopRequireDefault(_lodashObjectExtend),_helpersObject=__webpack_require__("VmBk"),_helpersObject2=_interopRequireDefault(_helpersObject),_types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types),collectorVisitor={For:function(){for(var e=t.FOR_INIT_KEYS,i=0;i<e.length;i++){var n=e[i],r=this.get(n);r.isVar()&&this.scope.getFunctionParent().registerBinding("var",r)}},Declaration:function(){this.isBlockScoped()||this.isExportDeclaration()&&this.get("declaration").isDeclaration()||this.scope.getFunctionParent().registerDeclaration(this)},ReferencedIdentifier:function(e,t,i,n){n.references.push(this)},ForXStatement:function(e,t,i,n){var r=this.get("left");(r.isPattern()||r.isIdentifier())&&n.constantViolations.push(r)},ExportDeclaration:{exit:function(e,i,n){var r=e.declaration;if(t.isClassDeclaration(r)||t.isFunctionDeclaration(r)){var a=n.getBinding(r.id.name);a&&a.reference()}else if(t.isVariableDeclaration(r))for(var o=r.declarations,s=0;s<o.length;s++){var l=o[s],d=t.getBindingIdentifiers(l);for(var c in d){var a=n.getBinding(c);a&&a.reference()}}}},LabeledStatement:function(){this.scope.getProgramParent().addGlobal(this.node),this.scope.getBlockParent().registerDeclaration(this)},AssignmentExpression:function(e,t,i,n){n.assignments.push(this)},UpdateExpression:function(e,t,i,n){n.constantViolations.push(this.get("argument"))},UnaryExpression:function(e,t,i,n){"delete"===this.node.operator&&n.constantViolations.push(this.get("argument"))},BlockScoped:function(){var e=this.scope;e.path===this&&(e=e.parent),e.getBlockParent().registerDeclaration(this)},ClassDeclaration:function(){var e=this.node.id.name;this.scope.bindings[e]=this.scope.getBinding(e)},Block:function(){for(var e=this.get("body"),t=e,i=0;i<t.length;i++){var n=t[i];n.isFunctionDeclaration()&&this.scope.getBlockParent().registerDeclaration(n)}}},renameVisitor={ReferencedIdentifier:function(e,t,i,n){e.name===n.oldName&&(e.name=n.newName)},Scope:function(e,t,i,n){i.bindingIdentifierEquals(n.oldName,n.binding)||this.skip()},"AssignmentExpression|Declaration":function(e,t,i,n){var r=this.getBindingIdentifiers();for(var a in r)a===n.oldName&&(r[a].name=n.newName)}},Scope=function(){function e(t,i){if(_classCallCheck(this,e),i&&i.block===t.node)return i;var n=t.getData("scope");if(n&&n.parent===i&&n.block===t.node)return n;t.setData("scope",this),this.parent=i,this.hub=t.hub,this.parentBlock=t.parent,this.block=t.node,this.path=t}return e.prototype.traverse=function(e,t,i){_index2.default(e,t,this,i,this.path)},e.prototype.generateDeclaredUidIdentifier=function(){var e=arguments.length<=0||void 0===arguments[0]?"temp":arguments[0],t=this.generateUidIdentifier(e);return this.push({id:t}),t},e.prototype.generateUidIdentifier=function(e){return t.identifier(this.generateUid(e))},e.prototype.generateUid=function(e){e=t.toIdentifier(e).replace(/^_+/,"");var i,n=0;do{i=this._generateUid(e,n),n++}while(this.hasBinding(i)||this.hasGlobal(i)||this.hasReference(i));var r=this.getProgramParent();return r.references[i]=!0,r.uids[i]=!0,i},e.prototype._generateUid=function(e,t){var i=e;return t>1&&(i+=t),"_"+i},e.prototype.generateUidIdentifierBasedOnNode=function(e,i){var n=e;t.isAssignmentExpression(e)?n=e.left:t.isVariableDeclarator(e)?n=e.id:t.isProperty(n)&&(n=n.key);var r=[];!function e(i){if(t.isModuleDeclaration(i))if(i.source)e(i.source);else if(i.specifiers&&i.specifiers.length)for(var n=i.specifiers,a=0;a<n.length;a++){var o=n[a];e(o)}else i.declaration&&e(i.declaration);else if(t.isModuleSpecifier(i))e(i.local);else if(t.isMemberExpression(i))e(i.object),e(i.property);else if(t.isIdentifier(i))r.push(i.name);else if(t.isLiteral(i))r.push(i.value);else if(t.isCallExpression(i))e(i.callee);else if(t.isObjectExpression(i)||t.isObjectPattern(i))for(var s=i.properties,l=0;l<s.length;l++){var d=s[l];e(d.key||d.argument)}}(n);var a=r.join("$");return a=a.replace(/^_/,"")||i||"ref",this.generateUidIdentifier(a)},e.prototype.isStatic=function(e){if(t.isThisExpression(e)||t.isSuper(e))return!0;if(t.isIdentifier(e)){var i=this.getBinding(e.name);return i?i.constant:this.hasBinding(e.name)}return!1},e.prototype.maybeGenerateMemoised=function(e,t){if(this.isStatic(e))return null;var i=this.generateUidIdentifierBasedOnNode(e);return t||this.push({id:i}),i},e.prototype.checkBlockScopedCollisions=function(e,t,i,n){if("param"!==t&&("hoisted"!==t||"let"!==e.kind)){var r=!1;if(r||(r="let"===t||"let"===e.kind||"const"===e.kind||"module"===e.kind),r||(r="param"===e.kind&&("let"===t||"const"===t)),r)throw this.hub.file.errorWithNode(n,messages.get("scopeDuplicateDeclaration",i),TypeError)}},e.prototype.rename=function(e,t,i){t=t||this.generateUidIdentifier(e).name;var n=this.getBinding(e);if(n){var r={newName:t,oldName:e,binding:n.identifier,info:n},a=n.scope;a.traverse(i||a.block,renameVisitor,r),i||(a.removeOwnBinding(e),a.bindings[t]=n,r.binding.name=t);var o=this.hub.file;o&&this._renameFromMap(o.moduleFormatter.localImports,e,t,r.binding)}},e.prototype._renameFromMap=function(e,t,i,n){e[t]&&(e[i]=n,e[t]=null)},e.prototype.dump=function(){var e=_repeating2.default("-",60);console.log(e);var t=this;do{console.log("#",t.block.type);for(var i in t.bindings){var n=t.bindings[i];console.log(" -",i,{constant:n.constant,references:n.references,kind:n.kind})}}while(t=t.parent);console.log(e)},e.prototype.toArray=function(e,i){var n=this.hub.file;if(t.isIdentifier(e)){var r=this.getBinding(e.name);if(r&&r.constant&&r.path.isGenericType("Array"))return e}if(t.isArrayExpression(e))return e;if(t.isIdentifier(e,{name:"arguments"}))return t.callExpression(t.memberExpression(n.addHelper("slice"),t.identifier("call")),[e]);var a="to-array",o=[e];return!0===i?a="to-consumable-array":i&&(o.push(t.literal(i)),a="sliced-to-array",this.hub.file.isLoose("es6.forOf")&&(a+="-loose")),t.callExpression(n.addHelper(a),o)},e.prototype.registerDeclaration=function(e){if(e.isLabeledStatement())this.registerBinding("label",e);else if(e.isFunctionDeclaration())this.registerBinding("hoisted",e.get("id"),e);else if(e.isVariableDeclaration())for(var t=e.get("declarations"),i=t,n=0;n<i.length;n++){var r=i[n];this.registerBinding(e.node.kind,r)}else if(e.isClassDeclaration())this.registerBinding("let",e);else if(e.isImportDeclaration())for(var a=e.get("specifiers"),o=a,s=0;s<o.length;s++){var l=o[s];this.registerBinding("module",l)}else if(e.isExportDeclaration()){var r=e.get("declaration");(r.isClassDeclaration()||r.isFunctionDeclaration()||r.isVariableDeclaration())&&this.registerDeclaration(r)}else this.registerBinding("unknown",e)},e.prototype.registerConstantViolation=function(e){var t=e.getBindingIdentifiers();for(var i in t){var n=this.getBinding(i);n&&n.reassign(e)}},e.prototype.registerBinding=function(e,t){var i=arguments.length<=2||void 0===arguments[2]?t:arguments[2];return function(){if(!e)throw new ReferenceError("no `kind`");if(t.isVariableDeclaration())for(var n=t.get("declarations"),r=n,a=0;a<r.length;a++){var o=r[a];this.registerBinding(e,o)}else{var s=this.getProgramParent(),l=t.getBindingIdentifiers(!0);for(var d in l)for(var c=l[d],u=0;u<c.length;u++){var f=c[u],p=this.getOwnBinding(d);if(p){if(p.identifier===f)continue;this.checkBlockScopedCollisions(p,e,d,f)}s.references[d]=!0,this.bindings[d]=new _binding2.default({identifier:f,existing:p,scope:this,path:i,kind:e})}}}.apply(this,arguments)},e.prototype.addGlobal=function(e){this.globals[e.name]=e},e.prototype.hasUid=function(e){var t=this;do{if(t.uids[e])return!0}while(t=t.parent);return!1},e.prototype.hasGlobal=function(e){var t=this;do{if(t.globals[e])return!0}while(t=t.parent);return!1},e.prototype.hasReference=function(e){var t=this;do{if(t.references[e])return!0}while(t=t.parent);return!1},e.prototype.isPure=function(e,i){if(t.isIdentifier(e)){var n=this.getBinding(e.name);return!!n&&(!i||n.constant)}if(t.isClass(e))return!e.superClass||this.isPure(e.superClass,i);if(t.isBinary(e))return this.isPure(e.left,i)&&this.isPure(e.right,i);if(t.isArrayExpression(e)){for(var r=e.elements,a=0;a<r.length;a++){var o=r[a];if(!this.isPure(o,i))return!1}return!0}if(t.isObjectExpression(e)){for(var s=e.properties,l=0;l<s.length;l++){var d=s[l];if(!this.isPure(d,i))return!1}return!0}return t.isProperty(e)?!(e.computed&&!this.isPure(e.key,i))&&this.isPure(e.value,i):t.isPure(e)},e.prototype.setData=function(e,t){return this.data[e]=t},e.prototype.getData=function(e){var t=this;do{var i=t.data[e];if(null!=i)return i}while(t=t.parent)},e.prototype.removeData=function(e){var t=this;do{null!=t.data[e]&&(t.data[e]=null)}while(t=t.parent)},e.prototype.init=function(){this.references||this.crawl()},e.prototype.crawl=function(){var e=this.path,i=this.block._scopeInfo;if(i)return _lodashObjectExtend2.default(this,i);if(i=this.block._scopeInfo={references:_helpersObject2.default(),bindings:_helpersObject2.default(),globals:_helpersObject2.default(),uids:_helpersObject2.default(),data:_helpersObject2.default()},_lodashObjectExtend2.default(this,i),e.isLoop())for(var n=t.FOR_INIT_KEYS,r=0;r<n.length;r++){var a=n[r],o=e.get(a);o.isBlockScoped()&&this.registerBinding(o.node.kind,o)}if(e.isFunctionExpression()&&e.has("id")&&this.registerBinding("local",e.get("id"),e),e.isClassExpression()&&e.has("id")&&this.registerBinding("local",e),e.isFunction())for(var s=e.get("params"),l=s,d=0;d<l.length;d++){var c=l[d];this.registerBinding("param",c)}if(e.isCatchClause()&&this.registerBinding("let",e),e.isComprehensionExpression()&&this.registerBinding("let",e),!this.getProgramParent().crawling){var u={references:[],constantViolations:[],assignments:[]};this.crawling=!0,e.traverse(collectorVisitor,u),this.crawling=!1;for(var f=u.assignments,p=Array.isArray(f),h=0,f=p?f:f[Symbol.iterator]();;){var g;if(p){if(h>=f.length)break;g=f[h++]}else{if(h=f.next(),h.done)break;g=h.value}var v=g,b=v.getBindingIdentifiers(),m=void 0;for(var y in b)v.scope.getBinding(y)||(m=m||v.scope.getProgramParent(),m.addGlobal(b[y]));v.scope.registerConstantViolation(v)}for(var _=u.references,B=Array.isArray(_),k=0,_=B?_:_[Symbol.iterator]();;){var D;if(B){if(k>=_.length)break;D=_[k++]}else{if(k=_.next(),k.done)break;D=k.value}var w=D,P=w.scope.getBinding(w.node.name);P?P.reference(w):w.scope.getProgramParent().addGlobal(w.node)}for(var x=u.constantViolations,O=Array.isArray(x),I=0,x=O?x:x[Symbol.iterator]();;){var E;if(O){if(I>=x.length)break;E=x[I++]}else{if(I=x.next(),I.done)break;E=I.value}var C=E;C.scope.registerConstantViolation(C)}}},e.prototype.push=function(e){var i=this.path;i.isSwitchStatement()&&(i=this.getFunctionParent().path),(i.isLoop()||i.isCatchClause()||i.isFunction())&&(t.ensureBlock(i.node),i=i.get("body")),i.isBlockStatement()||i.isProgram()||(i=this.getBlockParent().path);var n=e.unique,r=e.kind||"var",a=null==e._blockHoist?2:e._blockHoist,o="declaration:"+r+":"+a,s=!n&&i.getData(o);if(!s){var l=t.variableDeclaration(r,[]);l._generated=!0,l._blockHoist=a,this.hub.file.attachAuxiliaryComment(l);s=i.unshiftContainer("body",[l])[0],n||i.setData(o,s)}var d=t.variableDeclarator(e.id,e.init);s.node.declarations.push(d),this.registerBinding(r,s.get("declarations").pop())},e.prototype.getProgramParent=function(){var e=this;do{if(e.path.isProgram())return e}while(e=e.parent);throw new Error("We couldn't find a Function or Program...")},e.prototype.getFunctionParent=function(){var e=this;do{if(e.path.isFunctionParent())return e}while(e=e.parent);throw new Error("We couldn't find a Function or Program...")},e.prototype.getBlockParent=function(){var e=this;do{if(e.path.isBlockParent())return e}while(e=e.parent);throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...")},e.prototype.getAllBindings=function(){var e=_helpersObject2.default(),t=this;do{_lodashObjectDefaults2.default(e,t.bindings),t=t.parent}while(t);return e},e.prototype.getAllBindingsOfKind=function(){for(var e=_helpersObject2.default(),t=arguments,i=0;i<t.length;i++){var n=t[i],r=this;do{for(var a in r.bindings){var o=r.bindings[a];o.kind===n&&(e[a]=o)}r=r.parent}while(r)}return e},e.prototype.bindingIdentifierEquals=function(e,t){return this.getBindingIdentifier(e)===t},e.prototype.getBinding=function(e){var t=this;do{var i=t.getOwnBinding(e);if(i)return i}while(t=t.parent)},e.prototype.getOwnBinding=function(e){return this.bindings[e]},e.prototype.getBindingIdentifier=function(e){var t=this.getBinding(e);return t&&t.identifier},e.prototype.getOwnBindingIdentifier=function(e){var t=this.bindings[e];return t&&t.identifier},e.prototype.hasOwnBinding=function(e){return!!this.getOwnBinding(e)},e.prototype.hasBinding=function(t,i){return!!t&&(!!this.hasOwnBinding(t)||(!!this.parentHasBinding(t,i)||(!!this.hasUid(t)||(!(i||!_lodashCollectionIncludes2.default(e.globals,t))||!(i||!_lodashCollectionIncludes2.default(e.contextVariables,t))))))},e.prototype.parentHasBinding=function(e,t){return this.parent&&this.parent.hasBinding(e,t)},e.prototype.moveBindingTo=function(e,t){var i=this.getBinding(e);i&&(i.scope.removeOwnBinding(e),i.scope=t,t.bindings[e]=i)},e.prototype.removeOwnBinding=function(e){delete this.bindings[e]},e.prototype.removeBinding=function(e){var t=this.getBinding(e);t&&t.scope.removeOwnBinding(e);var i=this;do{i.uids[e]&&(i.uids[e]=!1)}while(i=i.parent)},_createClass(e,null,[{key:"globals",value:_lodashArrayFlatten2.default([_globals2.default.builtin,_globals2.default.browser,_globals2.default.node].map(Object.keys)),enumerable:!0},{key:"contextVariables",value:["arguments","undefined","Infinity","NaN"],enumerable:!0}]),e}();exports.default=Scope,module.exports=exports.default;

/***/ }),

/***/ "2/6I":
/***/ (function(module, exports, __webpack_require__) {

function TreeCopier(e){assert.ok(this instanceof TreeCopier),this.lines=e,this.indent=0}var assert=__webpack_require__("N+Om"),types=__webpack_require__("kCnG"),n=types.namedTypes,b=types.builders,isObject=types.builtInTypes.object,isArray=types.builtInTypes.array,isFunction=types.builtInTypes.function,Patcher=__webpack_require__("SFfJ").Patcher,normalizeOptions=__webpack_require__("Kk08").normalize,fromString=__webpack_require__("z8Jy").fromString,attachComments=__webpack_require__("gSKp").attach,util=__webpack_require__("AdsI");exports.parse=function(e,t){t=normalizeOptions(t);var r=fromString(e,t),i=r.toString({tabWidth:t.tabWidth,reuseWhitespace:!1,useTabs:!1}),n=[],s=t.esprima.parse(i,{loc:!0,locations:!0,range:t.range,comment:!0,onComment:n,tolerant:t.tolerant,ecmaVersion:6,sourceType:"module"});s.loc=s.loc||{start:r.firstPos(),end:r.lastPos()},s.loc.lines=r,s.loc.indent=0;var o=util.getTrueLoc(s,r);s.loc.start=o.start,s.loc.end=o.end,s.comments&&(n=s.comments,delete s.comments);var a=b.file(s);return a.loc={lines:r,indent:0,start:r.firstPos(),end:r.lastPos()},attachComments(n,s.body.length?a.program:a,r),new TreeCopier(r).copy(a)};var TCp=TreeCopier.prototype;TCp.copy=function(e){if(isArray.check(e))return e.map(this.copy,this);if(!isObject.check(e))return e;util.fixFaultyLocations(e);var t=Object.create(Object.getPrototypeOf(e),{original:{value:e,configurable:!1,enumerable:!1,writable:!0}}),r=e.loc,i=this.indent,n=i;r&&(("Block"===e.type||"Line"===e.type||this.lines.isPrecededOnlyByWhitespace(r.start))&&(n=this.indent=r.start.column),r.lines=this.lines,r.indent=n);for(var s=Object.keys(e),o=s.length,a=0;a<o;++a){var c=s[a];t[c]="loc"===c?e[c]:this.copy(e[c])}return this.indent=i,t};

/***/ }),

/***/ "21W0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function isUseStrict(e){return!!t.isLiteral(e)&&(e.raw&&e.rawValue===e.value?"use strict"===e.rawValue:"use strict"===e.value)}exports.__esModule=!0;var _types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types),metadata={group:"builtin-pre"};exports.metadata=metadata;var THIS_BREAK_KEYS=["FunctionExpression","FunctionDeclaration","ClassProperty"],visitor={Program:{enter:function(e){var i,r=e.body[0];t.isExpressionStatement(r)&&isUseStrict(r.expression)?i=r:(i=t.expressionStatement(t.literal("use strict")),this.unshiftContainer("body",i),r&&(i.leadingComments=r.leadingComments,r.leadingComments=[])),i._blockHoist=1/0}},ThisExpression:function(){if(!this.findParent(function(t){return!t.is("shadow")&&THIS_BREAK_KEYS.indexOf(t.type)>=0}))return t.identifier("undefined")}};exports.visitor=visitor;

/***/ }),

/***/ "2AVg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function makePredicate(t){return t=t.split(" "),function(e){return t.indexOf(e)>=0}}function isInAstralSet(t,e){for(var s=65536,i=0;i<e.length;i+=2){if((s+=e[i])>t)return!1;if((s+=e[i+1])>=t)return!0}}function isIdentifierStart(t){return t<65?36===t:t<91||(t<97?95===t:t<123||(t<=65535?t>=170&&nonASCIIidentifierStart.test(String.fromCharCode(t)):isInAstralSet(t,astralIdentifierStartCodes)))}function isIdentifierChar(t){return t<48?36===t:t<58||!(t<65)&&(t<91||(t<97?95===t:t<123||(t<=65535?t>=170&&nonASCIIidentifier.test(String.fromCharCode(t)):isInAstralSet(t,astralIdentifierStartCodes)||isInAstralSet(t,astralIdentifierCodes))))}function getOptions(t){var e={};for(var s in defaultOptions)e[s]=t&&s in t?t[s]:defaultOptions[s];return e}function isNewLine(t){return 10===t||13===t||8232===t||8233===t}function getLineInfo(t,e){for(var s=1,i=0;;){lineBreakG.lastIndex=i;var r=lineBreakG.exec(t);if(!(r&&r.index<e))return new Position(s,e-i);++s,i=r.index+r[0].length}}function codePointToString(t){return t<=65535?String.fromCharCode(t):String.fromCharCode(55296+(t-65536>>10),56320+(t-65536&1023))}function finishNodeAt(t,e,s,i){return t.type=e,t.end=s,t.loc.end=i,this.processComment(t),t}function last(t){return t[t.length-1]}function isSimpleProperty(t){return t&&"Property"===t.type&&"init"===t.kind&&!1===t.method}function getQualifiedJSXName(t){return"JSXIdentifier"===t.type?t.name:"JSXNamespacedName"===t.type?t.namespace.name+":"+t.name.name:"JSXMemberExpression"===t.type?getQualifiedJSXName(t.object)+"."+getQualifiedJSXName(t.property):void 0}function parse(t,e){return new Parser(e,t).parse()}function parseExpression(t,e){var s=new Parser(e,t);return s.options.strictMode&&(s.state.strict=!0),s.getExpression()}Object.defineProperty(exports,"__esModule",{value:!0});var reservedWords={6:makePredicate("enum await"),strict:makePredicate("implements interface let package private protected public static yield"),strictBind:makePredicate("eval arguments")},isKeyword=makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this let const class extends export import yield super"),nonASCIIidentifierStartChars="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",nonASCIIidentifierChars="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣔ-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఃా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱꤀-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",nonASCIIidentifierStart=new RegExp("["+nonASCIIidentifierStartChars+"]"),nonASCIIidentifier=new RegExp("["+nonASCIIidentifierStartChars+nonASCIIidentifierChars+"]");nonASCIIidentifierStartChars=nonASCIIidentifierChars=null;var astralIdentifierStartCodes=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,17,26,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,785,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,25,391,63,32,0,449,56,264,8,2,36,18,0,50,29,881,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,65,0,32,6124,20,754,9486,1,3071,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,10591,541],astralIdentifierCodes=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,10,2,4,9,83,11,7,0,161,11,6,9,7,3,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,87,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,423,9,838,7,2,7,17,9,57,21,2,13,19882,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239],defaultOptions={sourceType:"script",sourceFilename:void 0,startLine:1,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowSuperOutsideMethod:!1,plugins:[],strictMode:null},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},possibleConstructorReturn=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},beforeExpr=!0,startsExpr=!0,isLoop=!0,isAssign=!0,prefix=!0,postfix=!0,TokenType=function t(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};classCallCheck(this,t),this.label=e,this.keyword=s.keyword,this.beforeExpr=!!s.beforeExpr,this.startsExpr=!!s.startsExpr,this.rightAssociative=!!s.rightAssociative,this.isLoop=!!s.isLoop,this.isAssign=!!s.isAssign,this.prefix=!!s.prefix,this.postfix=!!s.postfix,this.binop=s.binop||null,this.updateContext=null},KeywordTokenType=function(t){function e(s){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return classCallCheck(this,e),i.keyword=s,possibleConstructorReturn(this,t.call(this,s,i))}return inherits(e,t),e}(TokenType),BinopTokenType=function(t){function e(s,i){return classCallCheck(this,e),possibleConstructorReturn(this,t.call(this,s,{beforeExpr:beforeExpr,binop:i}))}return inherits(e,t),e}(TokenType),types={num:new TokenType("num",{startsExpr:startsExpr}),regexp:new TokenType("regexp",{startsExpr:startsExpr}),string:new TokenType("string",{startsExpr:startsExpr}),name:new TokenType("name",{startsExpr:startsExpr}),eof:new TokenType("eof"),bracketL:new TokenType("[",{beforeExpr:beforeExpr,startsExpr:startsExpr}),bracketR:new TokenType("]"),braceL:new TokenType("{",{beforeExpr:beforeExpr,startsExpr:startsExpr}),braceBarL:new TokenType("{|",{beforeExpr:beforeExpr,startsExpr:startsExpr}),braceR:new TokenType("}"),braceBarR:new TokenType("|}"),parenL:new TokenType("(",{beforeExpr:beforeExpr,startsExpr:startsExpr}),parenR:new TokenType(")"),comma:new TokenType(",",{beforeExpr:beforeExpr}),semi:new TokenType(";",{beforeExpr:beforeExpr}),colon:new TokenType(":",{beforeExpr:beforeExpr}),doubleColon:new TokenType("::",{beforeExpr:beforeExpr}),dot:new TokenType("."),question:new TokenType("?",{beforeExpr:beforeExpr}),arrow:new TokenType("=>",{beforeExpr:beforeExpr}),template:new TokenType("template"),ellipsis:new TokenType("...",{beforeExpr:beforeExpr}),backQuote:new TokenType("`",{startsExpr:startsExpr}),dollarBraceL:new TokenType("${",{beforeExpr:beforeExpr,startsExpr:startsExpr}),at:new TokenType("@"),eq:new TokenType("=",{beforeExpr:beforeExpr,isAssign:isAssign}),assign:new TokenType("_=",{beforeExpr:beforeExpr,isAssign:isAssign}),incDec:new TokenType("++/--",{prefix:prefix,postfix:postfix,startsExpr:startsExpr}),prefix:new TokenType("prefix",{beforeExpr:beforeExpr,prefix:prefix,startsExpr:startsExpr}),logicalOR:new BinopTokenType("||",1),logicalAND:new BinopTokenType("&&",2),bitwiseOR:new BinopTokenType("|",3),bitwiseXOR:new BinopTokenType("^",4),bitwiseAND:new BinopTokenType("&",5),equality:new BinopTokenType("==/!=",6),relational:new BinopTokenType("</>",7),bitShift:new BinopTokenType("<</>>",8),plusMin:new TokenType("+/-",{beforeExpr:beforeExpr,binop:9,prefix:prefix,startsExpr:startsExpr}),modulo:new BinopTokenType("%",10),star:new BinopTokenType("*",10),slash:new BinopTokenType("/",10),exponent:new TokenType("**",{beforeExpr:beforeExpr,binop:11,rightAssociative:!0})},keywords={break:new KeywordTokenType("break"),case:new KeywordTokenType("case",{beforeExpr:beforeExpr}),catch:new KeywordTokenType("catch"),continue:new KeywordTokenType("continue"),debugger:new KeywordTokenType("debugger"),default:new KeywordTokenType("default",{beforeExpr:beforeExpr}),do:new KeywordTokenType("do",{isLoop:isLoop,beforeExpr:beforeExpr}),else:new KeywordTokenType("else",{beforeExpr:beforeExpr}),finally:new KeywordTokenType("finally"),for:new KeywordTokenType("for",{isLoop:isLoop}),function:new KeywordTokenType("function",{startsExpr:startsExpr}),if:new KeywordTokenType("if"),return:new KeywordTokenType("return",{beforeExpr:beforeExpr}),switch:new KeywordTokenType("switch"),throw:new KeywordTokenType("throw",{beforeExpr:beforeExpr}),try:new KeywordTokenType("try"),var:new KeywordTokenType("var"),let:new KeywordTokenType("let"),const:new KeywordTokenType("const"),while:new KeywordTokenType("while",{isLoop:isLoop}),with:new KeywordTokenType("with"),new:new KeywordTokenType("new",{beforeExpr:beforeExpr,startsExpr:startsExpr}),this:new KeywordTokenType("this",{startsExpr:startsExpr}),super:new KeywordTokenType("super",{startsExpr:startsExpr}),class:new KeywordTokenType("class"),extends:new KeywordTokenType("extends",{beforeExpr:beforeExpr}),export:new KeywordTokenType("export"),import:new KeywordTokenType("import",{startsExpr:startsExpr}),yield:new KeywordTokenType("yield",{beforeExpr:beforeExpr,startsExpr:startsExpr}),null:new KeywordTokenType("null",{startsExpr:startsExpr}),true:new KeywordTokenType("true",{startsExpr:startsExpr}),false:new KeywordTokenType("false",{startsExpr:startsExpr}),in:new KeywordTokenType("in",{beforeExpr:beforeExpr,binop:7}),instanceof:new KeywordTokenType("instanceof",{beforeExpr:beforeExpr,binop:7}),typeof:new KeywordTokenType("typeof",{beforeExpr:beforeExpr,prefix:prefix,startsExpr:startsExpr}),void:new KeywordTokenType("void",{beforeExpr:beforeExpr,prefix:prefix,startsExpr:startsExpr}),delete:new KeywordTokenType("delete",{beforeExpr:beforeExpr,prefix:prefix,startsExpr:startsExpr})};Object.keys(keywords).forEach(function(t){types["_"+t]=keywords[t]});var lineBreak=/\r\n?|\n|\u2028|\u2029/,lineBreakG=new RegExp(lineBreak.source,"g"),nonASCIIwhitespace=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,TokContext=function t(e,s,i,r){classCallCheck(this,t),this.token=e,this.isExpr=!!s,this.preserveSpace=!!i,this.override=r},types$1={braceStatement:new TokContext("{",!1),braceExpression:new TokContext("{",!0),templateQuasi:new TokContext("${",!0),parenStatement:new TokContext("(",!1),parenExpression:new TokContext("(",!0),template:new TokContext("`",!0,!0,function(t){return t.readTmplToken()}),functionExpression:new TokContext("function",!0)};types.parenR.updateContext=types.braceR.updateContext=function(){if(1===this.state.context.length)return void(this.state.exprAllowed=!0);var t=this.state.context.pop();t===types$1.braceStatement&&this.curContext()===types$1.functionExpression?(this.state.context.pop(),this.state.exprAllowed=!1):t===types$1.templateQuasi?this.state.exprAllowed=!0:this.state.exprAllowed=!t.isExpr},types.name.updateContext=function(t){this.state.exprAllowed=!1,t!==types._let&&t!==types._const&&t!==types._var||lineBreak.test(this.input.slice(this.state.end))&&(this.state.exprAllowed=!0)},types.braceL.updateContext=function(t){this.state.context.push(this.braceIsBlock(t)?types$1.braceStatement:types$1.braceExpression),this.state.exprAllowed=!0},types.dollarBraceL.updateContext=function(){this.state.context.push(types$1.templateQuasi),this.state.exprAllowed=!0},types.parenL.updateContext=function(t){var e=t===types._if||t===types._for||t===types._with||t===types._while;this.state.context.push(e?types$1.parenStatement:types$1.parenExpression),this.state.exprAllowed=!0},types.incDec.updateContext=function(){},types._function.updateContext=function(){this.curContext()!==types$1.braceStatement&&this.state.context.push(types$1.functionExpression),this.state.exprAllowed=!1},types.backQuote.updateContext=function(){this.curContext()===types$1.template?this.state.context.pop():this.state.context.push(types$1.template),this.state.exprAllowed=!1};var Position=function t(e,s){classCallCheck(this,t),this.line=e,this.column=s},SourceLocation=function t(e,s){classCallCheck(this,t),this.start=e,this.end=s},State=function(){function t(){classCallCheck(this,t)}return t.prototype.init=function(t,e){return this.strict=!1!==t.strictMode&&"module"===t.sourceType,this.input=e,this.potentialArrowAt=-1,this.inMethod=this.inFunction=this.inGenerator=this.inAsync=this.inPropertyName=this.inType=this.inClassProperty=this.noAnonFunctionType=!1,this.labels=[],this.decorators=[],this.tokens=[],this.comments=[],this.trailingComments=[],this.leadingComments=[],this.commentStack=[],this.pos=this.lineStart=0,this.curLine=t.startLine,this.type=types.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=[types$1.braceStatement],this.exprAllowed=!0,this.containsEsc=this.containsOctal=!1,this.octalPosition=null,this.invalidTemplateEscapePosition=null,this.exportedIdentifiers=[],this},t.prototype.curPosition=function(){return new Position(this.curLine,this.pos-this.lineStart)},t.prototype.clone=function(e){var s=new t;for(var i in this){var r=this[i];e&&"context"!==i||!Array.isArray(r)||(r=r.slice()),s[i]=r}return s},t}(),Token=function t(e){classCallCheck(this,t),this.type=e.type,this.value=e.value,this.start=e.start,this.end=e.end,this.loc=new SourceLocation(e.startLoc,e.endLoc)},Tokenizer=function(){function t(e,s){classCallCheck(this,t),this.state=new State,this.state.init(e,s)}return t.prototype.next=function(){this.isLookahead||this.state.tokens.push(new Token(this.state)),this.state.lastTokEnd=this.state.end,this.state.lastTokStart=this.state.start,this.state.lastTokEndLoc=this.state.endLoc,this.state.lastTokStartLoc=this.state.startLoc,this.nextToken()},t.prototype.eat=function(t){return!!this.match(t)&&(this.next(),!0)},t.prototype.match=function(t){return this.state.type===t},t.prototype.isKeyword=function(t){return isKeyword(t)},t.prototype.lookahead=function(){var t=this.state;this.state=t.clone(!0),this.isLookahead=!0,this.next(),this.isLookahead=!1;var e=this.state.clone(!0);return this.state=t,e},t.prototype.setStrict=function(t){if(this.state.strict=t,this.match(types.num)||this.match(types.string)){for(this.state.pos=this.state.start;this.state.pos<this.state.lineStart;)this.state.lineStart=this.input.lastIndexOf("\n",this.state.lineStart-2)+1,--this.state.curLine;this.nextToken()}},t.prototype.curContext=function(){return this.state.context[this.state.context.length-1]},t.prototype.nextToken=function(){var t=this.curContext();return t&&t.preserveSpace||this.skipSpace(),this.state.containsOctal=!1,this.state.octalPosition=null,this.state.start=this.state.pos,this.state.startLoc=this.state.curPosition(),this.state.pos>=this.input.length?this.finishToken(types.eof):t.override?t.override(this):this.readToken(this.fullCharCodeAtPos())},t.prototype.readToken=function(t){return isIdentifierStart(t)||92===t?this.readWord():this.getTokenFromCode(t)},t.prototype.fullCharCodeAtPos=function(){var t=this.input.charCodeAt(this.state.pos);return t<=55295||t>=57344?t:(t<<10)+this.input.charCodeAt(this.state.pos+1)-56613888},t.prototype.pushComment=function(t,e,s,i,r,a){var n={type:t?"CommentBlock":"CommentLine",value:e,start:s,end:i,loc:new SourceLocation(r,a)};this.isLookahead||(this.state.tokens.push(n),this.state.comments.push(n),this.addComment(n))},t.prototype.skipBlockComment=function(){var t=this.state.curPosition(),e=this.state.pos,s=this.input.indexOf("*/",this.state.pos+=2);-1===s&&this.raise(this.state.pos-2,"Unterminated comment"),this.state.pos=s+2,lineBreakG.lastIndex=e;for(var i=void 0;(i=lineBreakG.exec(this.input))&&i.index<this.state.pos;)++this.state.curLine,this.state.lineStart=i.index+i[0].length;this.pushComment(!0,this.input.slice(e+2,s),e,this.state.pos,t,this.state.curPosition())},t.prototype.skipLineComment=function(t){for(var e=this.state.pos,s=this.state.curPosition(),i=this.input.charCodeAt(this.state.pos+=t);this.state.pos<this.input.length&&10!==i&&13!==i&&8232!==i&&8233!==i;)++this.state.pos,i=this.input.charCodeAt(this.state.pos);this.pushComment(!1,this.input.slice(e+t,this.state.pos),e,this.state.pos,s,this.state.curPosition())},t.prototype.skipSpace=function(){t:for(;this.state.pos<this.input.length;){var t=this.input.charCodeAt(this.state.pos);switch(t){case 32:case 160:++this.state.pos;break;case 13:10===this.input.charCodeAt(this.state.pos+1)&&++this.state.pos;case 10:case 8232:case 8233:++this.state.pos,++this.state.curLine,this.state.lineStart=this.state.pos;break;case 47:switch(this.input.charCodeAt(this.state.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break t}break;default:if(!(t>8&&t<14||t>=5760&&nonASCIIwhitespace.test(String.fromCharCode(t))))break t;++this.state.pos}}},t.prototype.finishToken=function(t,e){this.state.end=this.state.pos,this.state.endLoc=this.state.curPosition();var s=this.state.type;this.state.type=t,this.state.value=e,this.updateContext(s)},t.prototype.readToken_dot=function(){var t=this.input.charCodeAt(this.state.pos+1);if(t>=48&&t<=57)return this.readNumber(!0);var e=this.input.charCodeAt(this.state.pos+2);return 46===t&&46===e?(this.state.pos+=3,this.finishToken(types.ellipsis)):(++this.state.pos,this.finishToken(types.dot))},t.prototype.readToken_slash=function(){return this.state.exprAllowed?(++this.state.pos,this.readRegexp()):61===this.input.charCodeAt(this.state.pos+1)?this.finishOp(types.assign,2):this.finishOp(types.slash,1)},t.prototype.readToken_mult_modulo=function(t){var e=42===t?types.star:types.modulo,s=1,i=this.input.charCodeAt(this.state.pos+1);return 42===i&&(s++,i=this.input.charCodeAt(this.state.pos+2),e=types.exponent),61===i&&(s++,e=types.assign),this.finishOp(e,s)},t.prototype.readToken_pipe_amp=function(t){var e=this.input.charCodeAt(this.state.pos+1);return e===t?this.finishOp(124===t?types.logicalOR:types.logicalAND,2):61===e?this.finishOp(types.assign,2):124===t&&125===e&&this.hasPlugin("flow")?this.finishOp(types.braceBarR,2):this.finishOp(124===t?types.bitwiseOR:types.bitwiseAND,1)},t.prototype.readToken_caret=function(){return 61===this.input.charCodeAt(this.state.pos+1)?this.finishOp(types.assign,2):this.finishOp(types.bitwiseXOR,1)},t.prototype.readToken_plus_min=function(t){var e=this.input.charCodeAt(this.state.pos+1);return e===t?45===e&&62===this.input.charCodeAt(this.state.pos+2)&&lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.pos))?(this.skipLineComment(3),this.skipSpace(),this.nextToken()):this.finishOp(types.incDec,2):61===e?this.finishOp(types.assign,2):this.finishOp(types.plusMin,1)},t.prototype.readToken_lt_gt=function(t){var e=this.input.charCodeAt(this.state.pos+1),s=1;return e===t?(s=62===t&&62===this.input.charCodeAt(this.state.pos+2)?3:2,61===this.input.charCodeAt(this.state.pos+s)?this.finishOp(types.assign,s+1):this.finishOp(types.bitShift,s)):33===e&&60===t&&45===this.input.charCodeAt(this.state.pos+2)&&45===this.input.charCodeAt(this.state.pos+3)?(this.inModule&&this.unexpected(),this.skipLineComment(4),this.skipSpace(),this.nextToken()):(61===e&&(s=2),this.finishOp(types.relational,s))},t.prototype.readToken_eq_excl=function(t){var e=this.input.charCodeAt(this.state.pos+1);return 61===e?this.finishOp(types.equality,61===this.input.charCodeAt(this.state.pos+2)?3:2):61===t&&62===e?(this.state.pos+=2,this.finishToken(types.arrow)):this.finishOp(61===t?types.eq:types.prefix,1)},t.prototype.getTokenFromCode=function(t){switch(t){case 46:return this.readToken_dot();case 40:return++this.state.pos,this.finishToken(types.parenL);case 41:return++this.state.pos,this.finishToken(types.parenR);case 59:return++this.state.pos,this.finishToken(types.semi);case 44:return++this.state.pos,this.finishToken(types.comma);case 91:return++this.state.pos,this.finishToken(types.bracketL);case 93:return++this.state.pos,this.finishToken(types.bracketR);case 123:return this.hasPlugin("flow")&&124===this.input.charCodeAt(this.state.pos+1)?this.finishOp(types.braceBarL,2):(++this.state.pos,this.finishToken(types.braceL));case 125:return++this.state.pos,this.finishToken(types.braceR);case 58:return this.hasPlugin("functionBind")&&58===this.input.charCodeAt(this.state.pos+1)?this.finishOp(types.doubleColon,2):(++this.state.pos,this.finishToken(types.colon));case 63:return++this.state.pos,this.finishToken(types.question);case 64:return++this.state.pos,this.finishToken(types.at);case 96:return++this.state.pos,this.finishToken(types.backQuote);case 48:var e=this.input.charCodeAt(this.state.pos+1);if(120===e||88===e)return this.readRadixNumber(16);if(111===e||79===e)return this.readRadixNumber(8);if(98===e||66===e)return this.readRadixNumber(2);case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(t);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo(t);case 124:case 38:return this.readToken_pipe_amp(t);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(t);case 60:case 62:return this.readToken_lt_gt(t);case 61:case 33:return this.readToken_eq_excl(t);case 126:return this.finishOp(types.prefix,1)}this.raise(this.state.pos,"Unexpected character '"+codePointToString(t)+"'")},t.prototype.finishOp=function(t,e){var s=this.input.slice(this.state.pos,this.state.pos+e);return this.state.pos+=e,this.finishToken(t,s)},t.prototype.readRegexp=function(){for(var t=this.state.pos,e=void 0,s=void 0;;){this.state.pos>=this.input.length&&this.raise(t,"Unterminated regular expression");var i=this.input.charAt(this.state.pos);if(lineBreak.test(i)&&this.raise(t,"Unterminated regular expression"),e)e=!1;else{if("["===i)s=!0;else if("]"===i&&s)s=!1;else if("/"===i&&!s)break;e="\\"===i}++this.state.pos}var r=this.input.slice(t,this.state.pos);++this.state.pos;var a=this.readWord1();if(a){/^[gmsiyu]*$/.test(a)||this.raise(t,"Invalid regular expression flag")}return this.finishToken(types.regexp,{pattern:r,flags:a})},t.prototype.readInt=function(t,e){for(var s=this.state.pos,i=0,r=0,a=null==e?1/0:e;r<a;++r){var n=this.input.charCodeAt(this.state.pos),o=void 0;if((o=n>=97?n-97+10:n>=65?n-65+10:n>=48&&n<=57?n-48:1/0)>=t)break;++this.state.pos,i=i*t+o}return this.state.pos===s||null!=e&&this.state.pos-s!==e?null:i},t.prototype.readRadixNumber=function(t){this.state.pos+=2;var e=this.readInt(t);return null==e&&this.raise(this.state.start+2,"Expected number in radix "+t),isIdentifierStart(this.fullCharCodeAtPos())&&this.raise(this.state.pos,"Identifier directly after number"),this.finishToken(types.num,e)},t.prototype.readNumber=function(t){var e=this.state.pos,s=48===this.input.charCodeAt(e),i=!1;t||null!==this.readInt(10)||this.raise(e,"Invalid number"),s&&this.state.pos==e+1&&(s=!1);var r=this.input.charCodeAt(this.state.pos);46!==r||s||(++this.state.pos,this.readInt(10),i=!0,r=this.input.charCodeAt(this.state.pos)),69!==r&&101!==r||s||(r=this.input.charCodeAt(++this.state.pos),43!==r&&45!==r||++this.state.pos,null===this.readInt(10)&&this.raise(e,"Invalid number"),i=!0),isIdentifierStart(this.fullCharCodeAtPos())&&this.raise(this.state.pos,"Identifier directly after number");var a=this.input.slice(e,this.state.pos),n=void 0;return i?n=parseFloat(a):s&&1!==a.length?this.state.strict?this.raise(e,"Invalid number"):n=/[89]/.test(a)?parseInt(a,10):parseInt(a,8):n=parseInt(a,10),this.finishToken(types.num,n)},t.prototype.readCodePoint=function(t){var e=this.input.charCodeAt(this.state.pos),s=void 0;if(123===e){var i=++this.state.pos;if(s=this.readHexChar(this.input.indexOf("}",this.state.pos)-this.state.pos,t),++this.state.pos,null===s)--this.state.invalidTemplateEscapePosition;else if(s>1114111){if(!t)return this.state.invalidTemplateEscapePosition=i-2,null;this.raise(i,"Code point out of bounds")}}else s=this.readHexChar(4,t);return s},t.prototype.readString=function(t){for(var e="",s=++this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated string constant");var i=this.input.charCodeAt(this.state.pos);if(i===t)break;92===i?(e+=this.input.slice(s,this.state.pos),e+=this.readEscapedChar(!1),s=this.state.pos):(isNewLine(i)&&this.raise(this.state.start,"Unterminated string constant"),++this.state.pos)}return e+=this.input.slice(s,this.state.pos++),this.finishToken(types.string,e)},t.prototype.readTmplToken=function(){for(var t="",e=this.state.pos,s=!1;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated template");var i=this.input.charCodeAt(this.state.pos);if(96===i||36===i&&123===this.input.charCodeAt(this.state.pos+1))return this.state.pos===this.state.start&&this.match(types.template)?36===i?(this.state.pos+=2,this.finishToken(types.dollarBraceL)):(++this.state.pos,this.finishToken(types.backQuote)):(t+=this.input.slice(e,this.state.pos),this.finishToken(types.template,s?null:t));if(92===i){t+=this.input.slice(e,this.state.pos);var r=this.readEscapedChar(!0);null===r?s=!0:t+=r,e=this.state.pos}else if(isNewLine(i)){switch(t+=this.input.slice(e,this.state.pos),++this.state.pos,i){case 13:10===this.input.charCodeAt(this.state.pos)&&++this.state.pos;case 10:t+="\n";break;default:t+=String.fromCharCode(i)}++this.state.curLine,this.state.lineStart=this.state.pos,e=this.state.pos}else++this.state.pos}},t.prototype.readEscapedChar=function(t){var e=!t,s=this.input.charCodeAt(++this.state.pos);switch(++this.state.pos,s){case 110:return"\n";case 114:return"\r";case 120:var i=this.readHexChar(2,e);return null===i?null:String.fromCharCode(i);case 117:var r=this.readCodePoint(e);return null===r?null:codePointToString(r);case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:10===this.input.charCodeAt(this.state.pos)&&++this.state.pos;case 10:return this.state.lineStart=this.state.pos,++this.state.curLine,"";default:if(s>=48&&s<=55){var a=this.state.pos-1,n=this.input.substr(this.state.pos-1,3).match(/^[0-7]+/)[0],o=parseInt(n,8);if(o>255&&(n=n.slice(0,-1),o=parseInt(n,8)),o>0){if(t)return this.state.invalidTemplateEscapePosition=a,null;this.state.strict?this.raise(a,"Octal literal in strict mode"):this.state.containsOctal||(this.state.containsOctal=!0,this.state.octalPosition=a)}return this.state.pos+=n.length-1,String.fromCharCode(o)}return String.fromCharCode(s)}},t.prototype.readHexChar=function(t,e){var s=this.state.pos,i=this.readInt(16,t);return null===i&&(e?this.raise(s,"Bad character escape sequence"):(this.state.pos=s-1,this.state.invalidTemplateEscapePosition=s-1)),i},t.prototype.readWord1=function(){this.state.containsEsc=!1;for(var t="",e=!0,s=this.state.pos;this.state.pos<this.input.length;){var i=this.fullCharCodeAtPos();if(isIdentifierChar(i))this.state.pos+=i<=65535?1:2;else{if(92!==i)break;this.state.containsEsc=!0,t+=this.input.slice(s,this.state.pos);var r=this.state.pos;117!==this.input.charCodeAt(++this.state.pos)&&this.raise(this.state.pos,"Expecting Unicode escape sequence \\uXXXX"),++this.state.pos;var a=this.readCodePoint(!0);(e?isIdentifierStart:isIdentifierChar)(a,!0)||this.raise(r,"Invalid Unicode escape"),t+=codePointToString(a),s=this.state.pos}e=!1}return t+this.input.slice(s,this.state.pos)},t.prototype.readWord=function(){var t=this.readWord1(),e=types.name;return!this.state.containsEsc&&this.isKeyword(t)&&(e=keywords[t]),this.finishToken(e,t)},t.prototype.braceIsBlock=function(t){if(t===types.colon){var e=this.curContext();if(e===types$1.braceStatement||e===types$1.braceExpression)return!e.isExpr}return t===types._return?lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start)):t===types._else||t===types.semi||t===types.eof||t===types.parenR||(t===types.braceL?this.curContext()===types$1.braceStatement:!this.state.exprAllowed)},t.prototype.updateContext=function(t){var e=this.state.type,s=void 0;e.keyword&&t===types.dot?this.state.exprAllowed=!1:(s=e.updateContext)?s.call(this,t):this.state.exprAllowed=e.beforeExpr},t}(),plugins={},frozenDeprecatedWildcardPluginList=["jsx","doExpressions","objectRestSpread","decorators","classProperties","exportExtensions","asyncGenerators","functionBind","functionSent","dynamicImport","flow"],Parser=function(t){function e(s,i){classCallCheck(this,e),s=getOptions(s);var r=possibleConstructorReturn(this,t.call(this,s,i));return r.options=s,r.inModule="module"===r.options.sourceType,r.input=i,r.plugins=r.loadPlugins(r.options.plugins),r.filename=s.sourceFilename,0===r.state.pos&&"#"===r.input[0]&&"!"===r.input[1]&&r.skipLineComment(2),r}return inherits(e,t),e.prototype.isReservedWord=function(t){return"await"===t?this.inModule:reservedWords[6](t)},e.prototype.hasPlugin=function(t){return!!(this.plugins["*"]&&frozenDeprecatedWildcardPluginList.indexOf(t)>-1)||!!this.plugins[t]},e.prototype.extend=function(t,e){this[t]=e(this[t])},e.prototype.loadAllPlugins=function(){var t=this,e=Object.keys(plugins).filter(function(t){return"flow"!==t&&"estree"!==t});e.push("flow"),e.forEach(function(e){var s=plugins[e];s&&s(t)})},e.prototype.loadPlugins=function(t){if(t.indexOf("*")>=0)return this.loadAllPlugins(),{"*":!0};var e={};t.indexOf("flow")>=0&&(t=t.filter(function(t){return"flow"!==t}),t.push("flow")),t.indexOf("estree")>=0&&(t=t.filter(function(t){return"estree"!==t}),t.unshift("estree"));for(var s=t,i=Array.isArray(s),r=0,s=i?s:s[Symbol.iterator]();;){var a;if(i){if(r>=s.length)break;a=s[r++]}else{if(r=s.next(),r.done)break;a=r.value}var n=a;if(!e[n]){e[n]=!0;var o=plugins[n];o&&o(this)}}return e},e.prototype.parse=function(){var t=this.startNode(),e=this.startNode();return this.nextToken(),this.parseTopLevel(t,e)},e}(Tokenizer),pp=Parser.prototype;pp.addExtra=function(t,e,s){if(t){(t.extra=t.extra||{})[e]=s}},pp.isRelational=function(t){return this.match(types.relational)&&this.state.value===t},pp.expectRelational=function(t){this.isRelational(t)?this.next():this.unexpected(null,types.relational)},pp.isContextual=function(t){return this.match(types.name)&&this.state.value===t},pp.eatContextual=function(t){return this.state.value===t&&this.eat(types.name)},pp.expectContextual=function(t,e){this.eatContextual(t)||this.unexpected(null,e)},
pp.canInsertSemicolon=function(){return this.match(types.eof)||this.match(types.braceR)||lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start))},pp.isLineTerminator=function(){return this.eat(types.semi)||this.canInsertSemicolon()},pp.semicolon=function(){this.isLineTerminator()||this.unexpected(null,types.semi)},pp.expect=function(t,e){return this.eat(t)||this.unexpected(e,t)},pp.unexpected=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unexpected token";e&&"object"===(void 0===e?"undefined":_typeof(e))&&e.label&&(e="Unexpected token, expected "+e.label),this.raise(null!=t?t:this.state.start,e)};var pp$1=Parser.prototype;pp$1.parseTopLevel=function(t,e){return e.sourceType=this.options.sourceType,this.parseBlockBody(e,!0,!0,types.eof),t.program=this.finishNode(e,"Program"),t.comments=this.state.comments,t.tokens=this.state.tokens,this.finishNode(t,"File")};var loopLabel={kind:"loop"},switchLabel={kind:"switch"};pp$1.stmtToDirective=function(t){var e=t.expression,s=this.startNodeAt(e.start,e.loc.start),i=this.startNodeAt(t.start,t.loc.start),r=this.input.slice(e.start,e.end),a=s.value=r.slice(1,-1);return this.addExtra(s,"raw",r),this.addExtra(s,"rawValue",a),i.value=this.finishNodeAt(s,"DirectiveLiteral",e.end,e.loc.end),this.finishNodeAt(i,"Directive",t.end,t.loc.end)},pp$1.parseStatement=function(t,e){this.match(types.at)&&this.parseDecorators(!0);var s=this.state.type,i=this.startNode();switch(s){case types._break:case types._continue:return this.parseBreakContinueStatement(i,s.keyword);case types._debugger:return this.parseDebuggerStatement(i);case types._do:return this.parseDoStatement(i);case types._for:return this.parseForStatement(i);case types._function:return t||this.unexpected(),this.parseFunctionStatement(i);case types._class:return t||this.unexpected(),this.parseClass(i,!0);case types._if:return this.parseIfStatement(i);case types._return:return this.parseReturnStatement(i);case types._switch:return this.parseSwitchStatement(i);case types._throw:return this.parseThrowStatement(i);case types._try:return this.parseTryStatement(i);case types._let:case types._const:t||this.unexpected();case types._var:return this.parseVarStatement(i,s);case types._while:return this.parseWhileStatement(i);case types._with:return this.parseWithStatement(i);case types.braceL:return this.parseBlock();case types.semi:return this.parseEmptyStatement(i);case types._export:case types._import:if(this.hasPlugin("dynamicImport")&&this.lookahead().type===types.parenL)break;return this.options.allowImportExportEverywhere||(e||this.raise(this.state.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.state.start,"'import' and 'export' may appear only with 'sourceType: \"module\"'")),s===types._import?this.parseImport(i):this.parseExport(i);case types.name:if("async"===this.state.value){var r=this.state.clone();if(this.next(),this.match(types._function)&&!this.canInsertSemicolon())return this.expect(types._function),this.parseFunction(i,!0,!1,!0);this.state=r}}var a=this.state.value,n=this.parseExpression();return s===types.name&&"Identifier"===n.type&&this.eat(types.colon)?this.parseLabeledStatement(i,a,n):this.parseExpressionStatement(i,n)},pp$1.takeDecorators=function(t){this.state.decorators.length&&(t.decorators=this.state.decorators,this.state.decorators=[])},pp$1.parseDecorators=function(t){for(;this.match(types.at);){var e=this.parseDecorator();this.state.decorators.push(e)}t&&this.match(types._export)||this.match(types._class)||this.raise(this.state.start,"Leading decorators must be attached to a class declaration")},pp$1.parseDecorator=function(){this.hasPlugin("decorators")||this.unexpected();var t=this.startNode();return this.next(),t.expression=this.parseMaybeAssign(),this.finishNode(t,"Decorator")},pp$1.parseBreakContinueStatement=function(t,e){var s="break"===e;this.next(),this.isLineTerminator()?t.label=null:this.match(types.name)?(t.label=this.parseIdentifier(),this.semicolon()):this.unexpected();var i=void 0;for(i=0;i<this.state.labels.length;++i){var r=this.state.labels[i];if(null==t.label||r.name===t.label.name){if(null!=r.kind&&(s||"loop"===r.kind))break;if(t.label&&s)break}}return i===this.state.labels.length&&this.raise(t.start,"Unsyntactic "+e),this.finishNode(t,s?"BreakStatement":"ContinueStatement")},pp$1.parseDebuggerStatement=function(t){return this.next(),this.semicolon(),this.finishNode(t,"DebuggerStatement")},pp$1.parseDoStatement=function(t){return this.next(),this.state.labels.push(loopLabel),t.body=this.parseStatement(!1),this.state.labels.pop(),this.expect(types._while),t.test=this.parseParenExpression(),this.eat(types.semi),this.finishNode(t,"DoWhileStatement")},pp$1.parseForStatement=function(t){this.next(),this.state.labels.push(loopLabel);var e=!1;if(this.hasPlugin("asyncGenerators")&&this.state.inAsync&&this.isContextual("await")&&(e=!0,this.next()),this.expect(types.parenL),this.match(types.semi))return e&&this.unexpected(),this.parseFor(t,null);if(this.match(types._var)||this.match(types._let)||this.match(types._const)){var s=this.startNode(),i=this.state.type;return this.next(),(this.parseVar(s,!0,i),this.finishNode(s,"VariableDeclaration"),!this.match(types._in)&&!this.isContextual("of")||1!==s.declarations.length||s.declarations[0].init)?(e&&this.unexpected(),this.parseFor(t,s)):this.parseForIn(t,s,e)}var r={start:0},a=this.parseExpression(!0,r);if(this.match(types._in)||this.isContextual("of")){var n=this.isContextual("of")?"for-of statement":"for-in statement";return this.toAssignable(a,void 0,n),this.checkLVal(a,void 0,void 0,n),this.parseForIn(t,a,e)}return r.start&&this.unexpected(r.start),e&&this.unexpected(),this.parseFor(t,a)},pp$1.parseFunctionStatement=function(t){return this.next(),this.parseFunction(t,!0)},pp$1.parseIfStatement=function(t){return this.next(),t.test=this.parseParenExpression(),t.consequent=this.parseStatement(!1),t.alternate=this.eat(types._else)?this.parseStatement(!1):null,this.finishNode(t,"IfStatement")},pp$1.parseReturnStatement=function(t){return this.state.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.state.start,"'return' outside of function"),this.next(),this.isLineTerminator()?t.argument=null:(t.argument=this.parseExpression(),this.semicolon()),this.finishNode(t,"ReturnStatement")},pp$1.parseSwitchStatement=function(t){this.next(),t.discriminant=this.parseParenExpression(),t.cases=[],this.expect(types.braceL),this.state.labels.push(switchLabel);for(var e,s=void 0;!this.match(types.braceR);)if(this.match(types._case)||this.match(types._default)){var i=this.match(types._case);s&&this.finishNode(s,"SwitchCase"),t.cases.push(s=this.startNode()),s.consequent=[],this.next(),i?s.test=this.parseExpression():(e&&this.raise(this.state.lastTokStart,"Multiple default clauses"),e=!0,s.test=null),this.expect(types.colon)}else s?s.consequent.push(this.parseStatement(!0)):this.unexpected();return s&&this.finishNode(s,"SwitchCase"),this.next(),this.state.labels.pop(),this.finishNode(t,"SwitchStatement")},pp$1.parseThrowStatement=function(t){return this.next(),lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start))&&this.raise(this.state.lastTokEnd,"Illegal newline after throw"),t.argument=this.parseExpression(),this.semicolon(),this.finishNode(t,"ThrowStatement")};var empty=[];pp$1.parseTryStatement=function(t){if(this.next(),t.block=this.parseBlock(),t.handler=null,this.match(types._catch)){var e=this.startNode();this.next(),this.expect(types.parenL),e.param=this.parseBindingAtom(),this.checkLVal(e.param,!0,Object.create(null),"catch clause"),this.expect(types.parenR),e.body=this.parseBlock(),t.handler=this.finishNode(e,"CatchClause")}return t.guardedHandlers=empty,t.finalizer=this.eat(types._finally)?this.parseBlock():null,t.handler||t.finalizer||this.raise(t.start,"Missing catch or finally clause"),this.finishNode(t,"TryStatement")},pp$1.parseVarStatement=function(t,e){return this.next(),this.parseVar(t,!1,e),this.semicolon(),this.finishNode(t,"VariableDeclaration")},pp$1.parseWhileStatement=function(t){return this.next(),t.test=this.parseParenExpression(),this.state.labels.push(loopLabel),t.body=this.parseStatement(!1),this.state.labels.pop(),this.finishNode(t,"WhileStatement")},pp$1.parseWithStatement=function(t){return this.state.strict&&this.raise(this.state.start,"'with' in strict mode"),this.next(),t.object=this.parseParenExpression(),t.body=this.parseStatement(!1),this.finishNode(t,"WithStatement")},pp$1.parseEmptyStatement=function(t){return this.next(),this.finishNode(t,"EmptyStatement")},pp$1.parseLabeledStatement=function(t,e,s){for(var i=this.state.labels,r=Array.isArray(i),a=0,i=r?i:i[Symbol.iterator]();;){var n;if(r){if(a>=i.length)break;n=i[a++]}else{if(a=i.next(),a.done)break;n=a.value}n.name===e&&this.raise(s.start,"Label '"+e+"' is already declared")}for(var o=this.state.type.isLoop?"loop":this.match(types._switch)?"switch":null,p=this.state.labels.length-1;p>=0;p--){var h=this.state.labels[p];if(h.statementStart!==t.start)break;h.statementStart=this.state.start,h.kind=o}return this.state.labels.push({name:e,kind:o,statementStart:this.state.start}),t.body=this.parseStatement(!0),this.state.labels.pop(),t.label=s,this.finishNode(t,"LabeledStatement")},pp$1.parseExpressionStatement=function(t,e){return t.expression=e,this.semicolon(),this.finishNode(t,"ExpressionStatement")},pp$1.parseBlock=function(t){var e=this.startNode();return this.expect(types.braceL),this.parseBlockBody(e,t,!1,types.braceR),this.finishNode(e,"BlockStatement")},pp$1.isValidDirective=function(t){return"ExpressionStatement"===t.type&&"StringLiteral"===t.expression.type&&!t.expression.extra.parenthesized},pp$1.parseBlockBody=function(t,e,s,i){t.body=[],t.directives=[];for(var r=!1,a=void 0,n=void 0;!this.eat(i);){r||!this.state.containsOctal||n||(n=this.state.octalPosition);var o=this.parseStatement(!0,s);if(e&&!r&&this.isValidDirective(o)){var p=this.stmtToDirective(o);t.directives.push(p),void 0===a&&"use strict"===p.value.value&&(a=this.state.strict,this.setStrict(!0),n&&this.raise(n,"Octal literal in strict mode"))}else r=!0,t.body.push(o)}!1===a&&this.setStrict(!1)},pp$1.parseFor=function(t,e){return t.init=e,this.expect(types.semi),t.test=this.match(types.semi)?null:this.parseExpression(),this.expect(types.semi),t.update=this.match(types.parenR)?null:this.parseExpression(),this.expect(types.parenR),t.body=this.parseStatement(!1),this.state.labels.pop(),this.finishNode(t,"ForStatement")},pp$1.parseForIn=function(t,e,s){var i=void 0;return s?(this.eatContextual("of"),i="ForAwaitStatement"):(i=this.match(types._in)?"ForInStatement":"ForOfStatement",this.next()),t.left=e,t.right=this.parseExpression(),this.expect(types.parenR),t.body=this.parseStatement(!1),this.state.labels.pop(),this.finishNode(t,i)},pp$1.parseVar=function(t,e,s){for(t.declarations=[],t.kind=s.keyword;;){var i=this.startNode();if(this.parseVarHead(i),this.eat(types.eq)?i.init=this.parseMaybeAssign(e):s!==types._const||this.match(types._in)||this.isContextual("of")?"Identifier"===i.id.type||e&&(this.match(types._in)||this.isContextual("of"))?i.init=null:this.raise(this.state.lastTokEnd,"Complex binding patterns require an initialization value"):this.unexpected(),t.declarations.push(this.finishNode(i,"VariableDeclarator")),!this.eat(types.comma))break}return t},pp$1.parseVarHead=function(t){t.id=this.parseBindingAtom(),this.checkLVal(t.id,!0,void 0,"variable declaration")},pp$1.parseFunction=function(t,e,s,i,r){var a=this.state.inMethod;return this.state.inMethod=!1,this.initFunction(t,i),this.match(types.star)&&(t.async&&!this.hasPlugin("asyncGenerators")?this.unexpected():(t.generator=!0,this.next())),!e||r||this.match(types.name)||this.match(types._yield)||this.unexpected(),(this.match(types.name)||this.match(types._yield))&&(t.id=this.parseBindingIdentifier()),this.parseFunctionParams(t),this.parseFunctionBody(t,s),this.state.inMethod=a,this.finishNode(t,e?"FunctionDeclaration":"FunctionExpression")},pp$1.parseFunctionParams=function(t){this.expect(types.parenL),t.params=this.parseBindingList(types.parenR)},pp$1.parseClass=function(t,e,s){return this.next(),this.takeDecorators(t),this.parseClassId(t,e,s),this.parseClassSuper(t),this.parseClassBody(t),this.finishNode(t,e?"ClassDeclaration":"ClassExpression")},pp$1.isClassProperty=function(){return this.match(types.eq)||this.match(types.semi)||this.match(types.braceR)},pp$1.isClassMethod=function(){return this.match(types.parenL)},pp$1.isNonstaticConstructor=function(t){return!(t.computed||t.static||"constructor"!==t.key.name&&"constructor"!==t.key.value)},pp$1.parseClassBody=function(t){var e=this.state.strict;this.state.strict=!0;var s=!1,i=!1,r=[],a=this.startNode();for(a.body=[],this.expect(types.braceL);!this.eat(types.braceR);)if(this.eat(types.semi))r.length>0&&this.raise(this.state.lastTokEnd,"Decorators must not be followed by a semicolon");else if(this.match(types.at))r.push(this.parseDecorator());else{var n=this.startNode();if(r.length&&(n.decorators=r,r=[]),n.static=!1,this.match(types.name)&&"static"===this.state.value){var o=this.parseIdentifier(!0);if(this.isClassMethod()){n.kind="method",n.computed=!1,n.key=o,this.parseClassMethod(a,n,!1,!1);continue}if(this.isClassProperty()){n.computed=!1,n.key=o,a.body.push(this.parseClassProperty(n));continue}n.static=!0}if(this.eat(types.star))n.kind="method",this.parsePropertyName(n),this.isNonstaticConstructor(n)&&this.raise(n.key.start,"Constructor can't be a generator"),n.computed||!n.static||"prototype"!==n.key.name&&"prototype"!==n.key.value||this.raise(n.key.start,"Classes may not have static property named prototype"),this.parseClassMethod(a,n,!0,!1);else{var p=this.match(types.name),h=this.parsePropertyName(n);if(n.computed||!n.static||"prototype"!==n.key.name&&"prototype"!==n.key.value||this.raise(n.key.start,"Classes may not have static property named prototype"),this.isClassMethod())this.isNonstaticConstructor(n)?(i?this.raise(h.start,"Duplicate constructor in the same class"):n.decorators&&this.raise(n.start,"You can't attach decorators to a class constructor"),i=!0,n.kind="constructor"):n.kind="method",this.parseClassMethod(a,n,!1,!1);else if(this.isClassProperty())this.isNonstaticConstructor(n)&&this.raise(n.key.start,"Classes may not have a non-static field named 'constructor'"),a.body.push(this.parseClassProperty(n));else if(p&&"async"===h.name&&!this.isLineTerminator()){var c=this.hasPlugin("asyncGenerators")&&this.eat(types.star);n.kind="method",this.parsePropertyName(n),this.isNonstaticConstructor(n)&&this.raise(n.key.start,"Constructor can't be an async function"),this.parseClassMethod(a,n,c,!0)}else!p||"get"!==h.name&&"set"!==h.name||this.isLineTerminator()&&this.match(types.star)?this.hasPlugin("classConstructorCall")&&p&&"call"===h.name&&this.match(types.name)&&"constructor"===this.state.value?(s?this.raise(n.start,"Duplicate constructor call in the same class"):n.decorators&&this.raise(n.start,"You can't attach decorators to a class constructor"),s=!0,n.kind="constructorCall",this.parsePropertyName(n),this.parseClassMethod(a,n,!1,!1)):this.isLineTerminator()?(this.isNonstaticConstructor(n)&&this.raise(n.key.start,"Classes may not have a non-static field named 'constructor'"),a.body.push(this.parseClassProperty(n))):this.unexpected():(n.kind=h.name,this.parsePropertyName(n),this.isNonstaticConstructor(n)&&this.raise(n.key.start,"Constructor can't have get/set modifier"),this.parseClassMethod(a,n,!1,!1),this.checkGetterSetterParamCount(n))}}r.length&&this.raise(this.state.start,"You have trailing decorators with no method"),t.body=this.finishNode(a,"ClassBody"),this.state.strict=e},pp$1.parseClassProperty=function(t){return this.state.inClassProperty=!0,this.match(types.eq)?(this.hasPlugin("classProperties")||this.unexpected(),this.next(),t.value=this.parseMaybeAssign()):t.value=null,this.semicolon(),this.state.inClassProperty=!1,this.finishNode(t,"ClassProperty")},pp$1.parseClassMethod=function(t,e,s,i){this.parseMethod(e,s,i),t.body.push(this.finishNode(e,"ClassMethod"))},pp$1.parseClassId=function(t,e,s){this.match(types.name)?t.id=this.parseIdentifier():s||!e?t.id=null:this.unexpected()},pp$1.parseClassSuper=function(t){t.superClass=this.eat(types._extends)?this.parseExprSubscripts():null},pp$1.parseExport=function(t){if(this.next(),this.match(types.star)){var e=this.startNode();if(this.next(),!this.hasPlugin("exportExtensions")||!this.eatContextual("as"))return this.parseExportFrom(t,!0),this.finishNode(t,"ExportAllDeclaration");e.exported=this.parseIdentifier(),t.specifiers=[this.finishNode(e,"ExportNamespaceSpecifier")],this.parseExportSpecifiersMaybe(t),this.parseExportFrom(t,!0)}else if(this.hasPlugin("exportExtensions")&&this.isExportDefaultSpecifier()){var s=this.startNode();if(s.exported=this.parseIdentifier(!0),t.specifiers=[this.finishNode(s,"ExportDefaultSpecifier")],this.match(types.comma)&&this.lookahead().type===types.star){this.expect(types.comma);var i=this.startNode();this.expect(types.star),this.expectContextual("as"),i.exported=this.parseIdentifier(),t.specifiers.push(this.finishNode(i,"ExportNamespaceSpecifier"))}else this.parseExportSpecifiersMaybe(t);this.parseExportFrom(t,!0)}else{if(this.eat(types._default)){var r=this.startNode(),a=!1;return this.eat(types._function)?r=this.parseFunction(r,!0,!1,!1,!0):this.match(types._class)?r=this.parseClass(r,!0,!0):(a=!0,r=this.parseMaybeAssign()),t.declaration=r,a&&this.semicolon(),this.checkExport(t,!0,!0),this.finishNode(t,"ExportDefaultDeclaration")}this.shouldParseExportDeclaration()?(t.specifiers=[],t.source=null,t.declaration=this.parseExportDeclaration(t)):(t.declaration=null,t.specifiers=this.parseExportSpecifiers(),this.parseExportFrom(t))}return this.checkExport(t,!0),this.finishNode(t,"ExportNamedDeclaration")},pp$1.parseExportDeclaration=function(){return this.parseStatement(!0)},pp$1.isExportDefaultSpecifier=function(){if(this.match(types.name))return"async"!==this.state.value;if(!this.match(types._default))return!1;var t=this.lookahead();return t.type===types.comma||t.type===types.name&&"from"===t.value},pp$1.parseExportSpecifiersMaybe=function(t){this.eat(types.comma)&&(t.specifiers=t.specifiers.concat(this.parseExportSpecifiers()))},pp$1.parseExportFrom=function(t,e){this.eatContextual("from")?(t.source=this.match(types.string)?this.parseExprAtom():this.unexpected(),this.checkExport(t)):e?this.unexpected():t.source=null,this.semicolon()},pp$1.shouldParseExportDeclaration=function(){return"var"===this.state.type.keyword||"const"===this.state.type.keyword||"let"===this.state.type.keyword||"function"===this.state.type.keyword||"class"===this.state.type.keyword||this.isContextual("async")},pp$1.checkExport=function(t,e,s){if(e)if(s)this.checkDuplicateExports(t,"default");else if(t.specifiers&&t.specifiers.length)for(var i=t.specifiers,r=Array.isArray(i),a=0,i=r?i:i[Symbol.iterator]();;){var n;if(r){if(a>=i.length)break;n=i[a++]}else{if(a=i.next(),a.done)break;n=a.value}var o=n;this.checkDuplicateExports(o,o.exported.name)}else if(t.declaration)if("FunctionDeclaration"===t.declaration.type||"ClassDeclaration"===t.declaration.type)this.checkDuplicateExports(t,t.declaration.id.name);else if("VariableDeclaration"===t.declaration.type)for(var p=t.declaration.declarations,h=Array.isArray(p),c=0,p=h?p:p[Symbol.iterator]();;){var l;if(h){if(c>=p.length)break;l=p[c++]}else{if(c=p.next(),c.done)break;l=c.value}var u=l;this.checkDeclaration(u.id)}if(this.state.decorators.length){var d=t.declaration&&("ClassDeclaration"===t.declaration.type||"ClassExpression"===t.declaration.type);t.declaration&&d||this.raise(t.start,"You can only use decorators on an export when exporting a class"),this.takeDecorators(t.declaration)}},pp$1.checkDeclaration=function(t){if("ObjectPattern"===t.type)for(var e=t.properties,s=Array.isArray(e),i=0,e=s?e:e[Symbol.iterator]();;){var r;if(s){if(i>=e.length)break;r=e[i++]}else{if(i=e.next(),i.done)break;r=i.value}var a=r;this.checkDeclaration(a)}else if("ArrayPattern"===t.type)for(var n=t.elements,o=Array.isArray(n),p=0,n=o?n:n[Symbol.iterator]();;){var h;if(o){if(p>=n.length)break;h=n[p++]}else{if(p=n.next(),p.done)break;h=p.value}var c=h;c&&this.checkDeclaration(c)}else"ObjectProperty"===t.type?this.checkDeclaration(t.value):"RestElement"===t.type||"RestProperty"===t.type?this.checkDeclaration(t.argument):"Identifier"===t.type&&this.checkDuplicateExports(t,t.name)},pp$1.checkDuplicateExports=function(t,e){this.state.exportedIdentifiers.indexOf(e)>-1&&this.raiseDuplicateExportError(t,e),this.state.exportedIdentifiers.push(e)},pp$1.raiseDuplicateExportError=function(t,e){this.raise(t.start,"default"===e?"Only one default export allowed per module.":"`"+e+"` has already been exported. Exported identifiers must be unique.")},pp$1.parseExportSpecifiers=function(){var t=[],e=!0,s=void 0;for(this.expect(types.braceL);!this.eat(types.braceR);){if(e)e=!1;else if(this.expect(types.comma),this.eat(types.braceR))break;var i=this.match(types._default);i&&!s&&(s=!0);var r=this.startNode();r.local=this.parseIdentifier(i),r.exported=this.eatContextual("as")?this.parseIdentifier(!0):r.local.__clone(),t.push(this.finishNode(r,"ExportSpecifier"))}return s&&!this.isContextual("from")&&this.unexpected(),t},pp$1.parseImport=function(t){return this.eat(types._import),this.match(types.string)?(t.specifiers=[],t.source=this.parseExprAtom()):(t.specifiers=[],this.parseImportSpecifiers(t),this.expectContextual("from"),t.source=this.match(types.string)?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(t,"ImportDeclaration")},pp$1.parseImportSpecifiers=function(t){var e=!0;if(this.match(types.name)){var s=this.state.start,i=this.state.startLoc;if(t.specifiers.push(this.parseImportSpecifierDefault(this.parseIdentifier(),s,i)),!this.eat(types.comma))return}if(this.match(types.star)){var r=this.startNode();return this.next(),this.expectContextual("as"),r.local=this.parseIdentifier(),this.checkLVal(r.local,!0,void 0,"import namespace specifier"),void t.specifiers.push(this.finishNode(r,"ImportNamespaceSpecifier"))}for(this.expect(types.braceL);!this.eat(types.braceR);){if(e)e=!1;else if(this.eat(types.colon)&&this.unexpected(null,"ES2015 named imports do not destructure. Use another statement for destructuring after the import."),this.expect(types.comma),this.eat(types.braceR))break;this.parseImportSpecifier(t)}},pp$1.parseImportSpecifier=function(t){var e=this.startNode();e.imported=this.parseIdentifier(!0),this.eatContextual("as")?e.local=this.parseIdentifier():(this.checkReservedWord(e.imported.name,e.start,!0,!0),e.local=e.imported.__clone()),this.checkLVal(e.local,!0,void 0,"import specifier"),t.specifiers.push(this.finishNode(e,"ImportSpecifier"))},pp$1.parseImportSpecifierDefault=function(t,e,s){var i=this.startNodeAt(e,s);return i.local=t,this.checkLVal(i.local,!0,void 0,"default import specifier"),this.finishNode(i,"ImportDefaultSpecifier")};var pp$2=Parser.prototype;pp$2.toAssignable=function(t,e,s){if(t)switch(t.type){case"Identifier":case"ObjectPattern":case"ArrayPattern":case"AssignmentPattern":break;case"ObjectExpression":t.type="ObjectPattern";for(var i=t.properties,r=Array.isArray(i),a=0,i=r?i:i[Symbol.iterator]();;){var n;if(r){if(a>=i.length)break;n=i[a++]}else{if(a=i.next(),a.done)break;n=a.value}var o=n;"ObjectMethod"===o.type?"get"===o.kind||"set"===o.kind?this.raise(o.key.start,"Object pattern can't contain getter or setter"):this.raise(o.key.start,"Object pattern can't contain methods"):this.toAssignable(o,e,"object destructuring pattern")}break;case"ObjectProperty":this.toAssignable(t.value,e,s);break;case"SpreadProperty":t.type="RestProperty";var p=t.argument;this.toAssignable(p,e,s);break;case"ArrayExpression":t.type="ArrayPattern",this.toAssignableList(t.elements,e,s);break;case"AssignmentExpression":"="===t.operator?(t.type="AssignmentPattern",delete t.operator):this.raise(t.left.end,"Only '=' operator can be used for specifying default value.");break;case"MemberExpression":if(!e)break;default:var h="Invalid left-hand side"+(s?" in "+s:"expression");this.raise(t.start,h)}return t},pp$2.toAssignableList=function(t,e,s){var i=t.length;if(i){var r=t[i-1];if(r&&"RestElement"===r.type)--i;else if(r&&"SpreadElement"===r.type){r.type="RestElement";var a=r.argument;this.toAssignable(a,e,s),"Identifier"!==a.type&&"MemberExpression"!==a.type&&"ArrayPattern"!==a.type&&this.unexpected(a.start),--i}}for(var n=0;n<i;n++){var o=t[n];o&&this.toAssignable(o,e,s)}return t},pp$2.toReferencedList=function(t){return t},pp$2.parseSpread=function(t){var e=this.startNode();return this.next(),e.argument=this.parseMaybeAssign(!1,t),this.finishNode(e,"SpreadElement")},pp$2.parseRest=function(){var t=this.startNode();return this.next(),t.argument=this.parseBindingIdentifier(),this.finishNode(t,"RestElement")},pp$2.shouldAllowYieldIdentifier=function(){return this.match(types._yield)&&!this.state.strict&&!this.state.inGenerator},pp$2.parseBindingIdentifier=function(){return this.parseIdentifier(this.shouldAllowYieldIdentifier())},pp$2.parseBindingAtom=function(){switch(this.state.type){case types._yield:(this.state.strict||this.state.inGenerator)&&this.unexpected();case types.name:return this.parseIdentifier(!0);case types.bracketL:var t=this.startNode();return this.next(),t.elements=this.parseBindingList(types.bracketR,!0),this.finishNode(t,"ArrayPattern");case types.braceL:return this.parseObj(!0);default:this.unexpected()}},pp$2.parseBindingList=function(t,e){for(var s=[],i=!0;!this.eat(t);)if(i?i=!1:this.expect(types.comma),e&&this.match(types.comma))s.push(null);else{if(this.eat(t))break;if(this.match(types.ellipsis)){s.push(this.parseAssignableListItemTypes(this.parseRest())),this.expect(t);break}for(var r=[];this.match(types.at);)r.push(this.parseDecorator());var a=this.parseMaybeDefault();r.length&&(a.decorators=r),this.parseAssignableListItemTypes(a),s.push(this.parseMaybeDefault(a.start,a.loc.start,a))}return s},pp$2.parseAssignableListItemTypes=function(t){return t},pp$2.parseMaybeDefault=function(t,e,s){if(e=e||this.state.startLoc,t=t||this.state.start,s=s||this.parseBindingAtom(),!this.eat(types.eq))return s;var i=this.startNodeAt(t,e);return i.left=s,i.right=this.parseMaybeAssign(),this.finishNode(i,"AssignmentPattern")},pp$2.checkLVal=function(t,e,s,i){switch(t.type){case"Identifier":if(this.checkReservedWord(t.name,t.start,!1,!0),s){var r="_"+t.name;s[r]?this.raise(t.start,"Argument name clash in strict mode"):s[r]=!0}break;case"MemberExpression":e&&this.raise(t.start,(e?"Binding":"Assigning to")+" member expression");break;case"ObjectPattern":for(var a=t.properties,n=Array.isArray(a),o=0,a=n?a:a[Symbol.iterator]();;){var p;if(n){if(o>=a.length)break;p=a[o++]}else{if(o=a.next(),o.done)break;p=o.value}var h=p;"ObjectProperty"===h.type&&(h=h.value),this.checkLVal(h,e,s,"object destructuring pattern")}break;case"ArrayPattern":for(var c=t.elements,l=Array.isArray(c),u=0,c=l?c:c[Symbol.iterator]();;){var d;if(l){if(u>=c.length)break;d=c[u++]}else{if(u=c.next(),u.done)break;d=u.value}var f=d;f&&this.checkLVal(f,e,s,"array destructuring pattern")}break;case"AssignmentPattern":this.checkLVal(t.left,e,s,"assignment pattern");break;case"RestProperty":this.checkLVal(t.argument,e,s,"rest property");break;case"RestElement":this.checkLVal(t.argument,e,s,"rest element");break;default:var y=(e?"Binding invalid":"Invalid")+" left-hand side"+(i?" in "+i:"expression");this.raise(t.start,y)}};var pp$3=Parser.prototype;pp$3.checkPropClash=function(t,e){if(!t.computed&&!t.kind){var s=t.key;"__proto__"===("Identifier"===s.type?s.name:String(s.value))&&(e.proto&&this.raise(s.start,"Redefinition of __proto__ property"),e.proto=!0)}},pp$3.getExpression=function(){this.nextToken();var t=this.parseExpression();return this.match(types.eof)||this.unexpected(),t},pp$3.parseExpression=function(t,e){var s=this.state.start,i=this.state.startLoc,r=this.parseMaybeAssign(t,e);if(this.match(types.comma)){var a=this.startNodeAt(s,i);for(a.expressions=[r];this.eat(types.comma);)a.expressions.push(this.parseMaybeAssign(t,e));return this.toReferencedList(a.expressions),this.finishNode(a,"SequenceExpression")}return r},pp$3.parseMaybeAssign=function(t,e,s,i){var r=this.state.start,a=this.state.startLoc;if(this.match(types._yield)&&this.state.inGenerator){var n=this.parseYield();return s&&(n=s.call(this,n,r,a)),n}var o=void 0;e?o=!1:(e={start:0},o=!0),(this.match(types.parenL)||this.match(types.name))&&(this.state.potentialArrowAt=this.state.start);var p=this.parseMaybeConditional(t,e,i);if(s&&(p=s.call(this,p,r,a)),this.state.type.isAssign){var h=this.startNodeAt(r,a);if(h.operator=this.state.value,h.left=this.match(types.eq)?this.toAssignable(p,void 0,"assignment expression"):p,e.start=0,this.checkLVal(p,void 0,void 0,"assignment expression"),p.extra&&p.extra.parenthesized){var c=void 0;"ObjectPattern"===p.type?c="`({a}) = 0` use `({a} = 0)`":"ArrayPattern"===p.type&&(c="`([a]) = 0` use `([a] = 0)`"),c&&this.raise(p.start,"You're trying to assign to a parenthesized expression, eg. instead of "+c)}return this.next(),h.right=this.parseMaybeAssign(t),this.finishNode(h,"AssignmentExpression")}return o&&e.start&&this.unexpected(e.start),p},pp$3.parseMaybeConditional=function(t,e,s){var i=this.state.start,r=this.state.startLoc,a=this.parseExprOps(t,e);return e&&e.start?a:this.parseConditional(a,t,i,r,s)},pp$3.parseConditional=function(t,e,s,i){if(this.eat(types.question)){var r=this.startNodeAt(s,i);return r.test=t,r.consequent=this.parseMaybeAssign(),this.expect(types.colon),r.alternate=this.parseMaybeAssign(e),this.finishNode(r,"ConditionalExpression")}return t},pp$3.parseExprOps=function(t,e){var s=this.state.start,i=this.state.startLoc,r=this.parseMaybeUnary(e);return e&&e.start?r:this.parseExprOp(r,s,i,-1,t)},pp$3.parseExprOp=function(t,e,s,i,r){var a=this.state.type.binop;if(!(null==a||r&&this.match(types._in))&&a>i){var n=this.startNodeAt(e,s);n.left=t,n.operator=this.state.value,"**"!==n.operator||"UnaryExpression"!==t.type||!t.extra||t.extra.parenthesizedArgument||t.extra.parenthesized||this.raise(t.argument.start,"Illegal expression. Wrap left hand side or entire exponentiation in parentheses.");var o=this.state.type;this.next();var p=this.state.start,h=this.state.startLoc;return n.right=this.parseExprOp(this.parseMaybeUnary(),p,h,o.rightAssociative?a-1:a,r),this.finishNode(n,o===types.logicalOR||o===types.logicalAND?"LogicalExpression":"BinaryExpression"),this.parseExprOp(n,e,s,i,r)}return t},pp$3.parseMaybeUnary=function(t){if(this.state.type.prefix){var e=this.startNode(),s=this.match(types.incDec);e.operator=this.state.value,e.prefix=!0,this.next();var i=this.state.type;return e.argument=this.parseMaybeUnary(),this.addExtra(e,"parenthesizedArgument",!(i!==types.parenL||e.argument.extra&&e.argument.extra.parenthesized)),t&&t.start&&this.unexpected(t.start),s?this.checkLVal(e.argument,void 0,void 0,"prefix operation"):this.state.strict&&"delete"===e.operator&&"Identifier"===e.argument.type&&this.raise(e.start,"Deleting local variable in strict mode"),this.finishNode(e,s?"UpdateExpression":"UnaryExpression")}var r=this.state.start,a=this.state.startLoc,n=this.parseExprSubscripts(t);if(t&&t.start)return n;for(;this.state.type.postfix&&!this.canInsertSemicolon();){var o=this.startNodeAt(r,a);o.operator=this.state.value,o.prefix=!1,o.argument=n,this.checkLVal(n,void 0,void 0,"postfix operation"),this.next(),n=this.finishNode(o,"UpdateExpression")}return n},pp$3.parseExprSubscripts=function(t){var e=this.state.start,s=this.state.startLoc,i=this.state.potentialArrowAt,r=this.parseExprAtom(t);return"ArrowFunctionExpression"===r.type&&r.start===i?r:t&&t.start?r:this.parseSubscripts(r,e,s)},pp$3.parseSubscripts=function(t,e,s,i){for(;;){if(!i&&this.eat(types.doubleColon)){var r=this.startNodeAt(e,s);return r.object=t,r.callee=this.parseNoCallExpr(),
this.parseSubscripts(this.finishNode(r,"BindExpression"),e,s,i)}if(this.eat(types.dot)){var a=this.startNodeAt(e,s);a.object=t,a.property=this.parseIdentifier(!0),a.computed=!1,t=this.finishNode(a,"MemberExpression")}else if(this.eat(types.bracketL)){var n=this.startNodeAt(e,s);n.object=t,n.property=this.parseExpression(),n.computed=!0,this.expect(types.bracketR),t=this.finishNode(n,"MemberExpression")}else if(!i&&this.match(types.parenL)){var o=this.state.potentialArrowAt===t.start&&"Identifier"===t.type&&"async"===t.name&&!this.canInsertSemicolon();this.next();var p=this.startNodeAt(e,s);if(p.callee=t,p.arguments=this.parseCallExpressionArguments(types.parenR,o),"Import"===p.callee.type&&1!==p.arguments.length&&this.raise(p.start,"import() requires exactly one argument"),t=this.finishNode(p,"CallExpression"),o&&this.shouldParseAsyncArrow())return this.parseAsyncArrowFromCallExpression(this.startNodeAt(e,s),p);this.toReferencedList(p.arguments)}else{if(!this.match(types.backQuote))return t;var h=this.startNodeAt(e,s);h.tag=t,h.quasi=this.parseTemplate(!0),t=this.finishNode(h,"TaggedTemplateExpression")}}},pp$3.parseCallExpressionArguments=function(t,e){for(var s=[],i=void 0,r=!0;!this.eat(t);){if(r)r=!1;else if(this.expect(types.comma),this.eat(t))break;this.match(types.parenL)&&!i&&(i=this.state.start),s.push(this.parseExprListItem(!1,e?{start:0}:void 0,e?{start:0}:void 0))}return e&&i&&this.shouldParseAsyncArrow()&&this.unexpected(),s},pp$3.shouldParseAsyncArrow=function(){return this.match(types.arrow)},pp$3.parseAsyncArrowFromCallExpression=function(t,e){return this.expect(types.arrow),this.parseArrowExpression(t,e.arguments,!0)},pp$3.parseNoCallExpr=function(){var t=this.state.start,e=this.state.startLoc;return this.parseSubscripts(this.parseExprAtom(),t,e,!0)},pp$3.parseExprAtom=function(t){var e=this.state.potentialArrowAt===this.state.start,s=void 0;switch(this.state.type){case types._super:return this.state.inMethod||this.state.inClassProperty||this.options.allowSuperOutsideMethod||this.raise(this.state.start,"'super' outside of function or class"),s=this.startNode(),this.next(),this.match(types.parenL)||this.match(types.bracketL)||this.match(types.dot)||this.unexpected(),this.match(types.parenL)&&"constructor"!==this.state.inMethod&&!this.options.allowSuperOutsideMethod&&this.raise(s.start,"super() outside of class constructor"),this.finishNode(s,"Super");case types._import:return this.hasPlugin("dynamicImport")||this.unexpected(),s=this.startNode(),this.next(),this.match(types.parenL)||this.unexpected(null,types.parenL),this.finishNode(s,"Import");case types._this:return s=this.startNode(),this.next(),this.finishNode(s,"ThisExpression");case types._yield:this.state.inGenerator&&this.unexpected();case types.name:s=this.startNode();var i="await"===this.state.value&&this.state.inAsync,r=this.shouldAllowYieldIdentifier(),a=this.parseIdentifier(i||r);if("await"===a.name){if(this.state.inAsync||this.inModule)return this.parseAwait(s)}else{if("async"===a.name&&this.match(types._function)&&!this.canInsertSemicolon())return this.next(),this.parseFunction(s,!1,!1,!0);if(e&&"async"===a.name&&this.match(types.name)){var n=[this.parseIdentifier()];return this.expect(types.arrow),this.parseArrowExpression(s,n,!0)}}return e&&!this.canInsertSemicolon()&&this.eat(types.arrow)?this.parseArrowExpression(s,[a]):a;case types._do:if(this.hasPlugin("doExpressions")){var o=this.startNode();this.next();var p=this.state.inFunction,h=this.state.labels;return this.state.labels=[],this.state.inFunction=!1,o.body=this.parseBlock(!1,!0),this.state.inFunction=p,this.state.labels=h,this.finishNode(o,"DoExpression")}case types.regexp:var c=this.state.value;return s=this.parseLiteral(c.value,"RegExpLiteral"),s.pattern=c.pattern,s.flags=c.flags,s;case types.num:return this.parseLiteral(this.state.value,"NumericLiteral");case types.string:return this.parseLiteral(this.state.value,"StringLiteral");case types._null:return s=this.startNode(),this.next(),this.finishNode(s,"NullLiteral");case types._true:case types._false:return s=this.startNode(),s.value=this.match(types._true),this.next(),this.finishNode(s,"BooleanLiteral");case types.parenL:return this.parseParenAndDistinguishExpression(null,null,e);case types.bracketL:return s=this.startNode(),this.next(),s.elements=this.parseExprList(types.bracketR,!0,t),this.toReferencedList(s.elements),this.finishNode(s,"ArrayExpression");case types.braceL:return this.parseObj(!1,t);case types._function:return this.parseFunctionExpression();case types.at:this.parseDecorators();case types._class:return s=this.startNode(),this.takeDecorators(s),this.parseClass(s,!1);case types._new:return this.parseNew();case types.backQuote:return this.parseTemplate(!1);case types.doubleColon:s=this.startNode(),this.next(),s.object=null;var l=s.callee=this.parseNoCallExpr();if("MemberExpression"===l.type)return this.finishNode(s,"BindExpression");this.raise(l.start,"Binding should be performed on object property.");default:this.unexpected()}},pp$3.parseFunctionExpression=function(){var t=this.startNode(),e=this.parseIdentifier(!0);return this.state.inGenerator&&this.eat(types.dot)&&this.hasPlugin("functionSent")?this.parseMetaProperty(t,e,"sent"):this.parseFunction(t,!1)},pp$3.parseMetaProperty=function(t,e,s){return t.meta=e,t.property=this.parseIdentifier(!0),t.property.name!==s&&this.raise(t.property.start,"The only valid meta property for new is "+e.name+"."+s),this.finishNode(t,"MetaProperty")},pp$3.parseLiteral=function(t,e,s,i){s=s||this.state.start,i=i||this.state.startLoc;var r=this.startNodeAt(s,i);return this.addExtra(r,"rawValue",t),this.addExtra(r,"raw",this.input.slice(s,this.state.end)),r.value=t,this.next(),this.finishNode(r,e)},pp$3.parseParenExpression=function(){this.expect(types.parenL);var t=this.parseExpression();return this.expect(types.parenR),t},pp$3.parseParenAndDistinguishExpression=function(t,e,s){t=t||this.state.start,e=e||this.state.startLoc;var i=void 0;this.expect(types.parenL);for(var r=this.state.start,a=this.state.startLoc,n=[],o={start:0},p={start:0},h=!0,c=void 0,l=void 0;!this.match(types.parenR);){if(h)h=!1;else if(this.expect(types.comma,p.start||null),this.match(types.parenR)){l=this.state.start;break}if(this.match(types.ellipsis)){var u=this.state.start,d=this.state.startLoc;c=this.state.start,n.push(this.parseParenItem(this.parseRest(),u,d));break}n.push(this.parseMaybeAssign(!1,o,this.parseParenItem,p))}var f=this.state.start,y=this.state.startLoc;this.expect(types.parenR);var m=this.startNodeAt(t,e);if(s&&this.shouldParseArrow()&&(m=this.parseArrow(m))){for(var x=n,v=Array.isArray(x),b=0,x=v?x:x[Symbol.iterator]();;){var T;if(v){if(b>=x.length)break;T=x[b++]}else{if(b=x.next(),b.done)break;T=b.value}var g=T;g.extra&&g.extra.parenthesized&&this.unexpected(g.extra.parenStart)}return this.parseArrowExpression(m,n)}return n.length||this.unexpected(this.state.lastTokStart),l&&this.unexpected(l),c&&this.unexpected(c),o.start&&this.unexpected(o.start),p.start&&this.unexpected(p.start),n.length>1?(i=this.startNodeAt(r,a),i.expressions=n,this.toReferencedList(i.expressions),this.finishNodeAt(i,"SequenceExpression",f,y)):i=n[0],this.addExtra(i,"parenthesized",!0),this.addExtra(i,"parenStart",t),i},pp$3.shouldParseArrow=function(){return!this.canInsertSemicolon()},pp$3.parseArrow=function(t){if(this.eat(types.arrow))return t},pp$3.parseParenItem=function(t){return t},pp$3.parseNew=function(){var t=this.startNode(),e=this.parseIdentifier(!0);if(this.eat(types.dot)){var s=this.parseMetaProperty(t,e,"target");return this.state.inFunction||this.raise(s.property.start,"new.target can only be used in functions"),s}return t.callee=this.parseNoCallExpr(),this.eat(types.parenL)?(t.arguments=this.parseExprList(types.parenR),this.toReferencedList(t.arguments)):t.arguments=[],this.finishNode(t,"NewExpression")},pp$3.parseTemplateElement=function(t){var e=this.startNode();return null===this.state.value&&(t&&this.hasPlugin("templateInvalidEscapes")?this.state.invalidTemplateEscapePosition=null:this.raise(this.state.invalidTemplateEscapePosition,"Invalid escape sequence in template")),e.value={raw:this.input.slice(this.state.start,this.state.end).replace(/\r\n?/g,"\n"),cooked:this.state.value},this.next(),e.tail=this.match(types.backQuote),this.finishNode(e,"TemplateElement")},pp$3.parseTemplate=function(t){var e=this.startNode();this.next(),e.expressions=[];var s=this.parseTemplateElement(t);for(e.quasis=[s];!s.tail;)this.expect(types.dollarBraceL),e.expressions.push(this.parseExpression()),this.expect(types.braceR),e.quasis.push(s=this.parseTemplateElement(t));return this.next(),this.finishNode(e,"TemplateLiteral")},pp$3.parseObj=function(t,e){var s=[],i=Object.create(null),r=!0,a=this.startNode();a.properties=[],this.next();for(var n=null;!this.eat(types.braceR);){if(r)r=!1;else if(this.expect(types.comma),this.eat(types.braceR))break;for(;this.match(types.at);)s.push(this.parseDecorator());var o=this.startNode(),p=!1,h=!1,c=void 0,l=void 0;if(s.length&&(o.decorators=s,s=[]),this.hasPlugin("objectRestSpread")&&this.match(types.ellipsis)){if(o=this.parseSpread(t?{start:0}:void 0),o.type=t?"RestProperty":"SpreadProperty",t&&this.toAssignable(o.argument,!0,"object pattern"),a.properties.push(o),!t)continue;var u=this.state.start;if(null===n){if(this.eat(types.braceR))break;if(this.match(types.comma)&&this.lookahead().type===types.braceR)continue;n=u;continue}this.unexpected(n,"Cannot have multiple rest elements when destructuring")}if(o.method=!1,o.shorthand=!1,(t||e)&&(c=this.state.start,l=this.state.startLoc),t||(p=this.eat(types.star)),!t&&this.isContextual("async")){p&&this.unexpected();var d=this.parseIdentifier();this.match(types.colon)||this.match(types.parenL)||this.match(types.braceR)||this.match(types.eq)||this.match(types.comma)?(o.key=d,o.computed=!1):(h=!0,this.hasPlugin("asyncGenerators")&&(p=this.eat(types.star)),this.parsePropertyName(o))}else this.parsePropertyName(o);this.parseObjPropValue(o,c,l,p,h,t,e),this.checkPropClash(o,i),o.shorthand&&this.addExtra(o,"shorthand",!0),a.properties.push(o)}return null!==n&&this.unexpected(n,"The rest element has to be the last element when destructuring"),s.length&&this.raise(this.state.start,"You have trailing decorators with no property"),this.finishNode(a,t?"ObjectPattern":"ObjectExpression")},pp$3.isGetterOrSetterMethod=function(t,e){return!e&&!t.computed&&"Identifier"===t.key.type&&("get"===t.key.name||"set"===t.key.name)&&(this.match(types.string)||this.match(types.num)||this.match(types.bracketL)||this.match(types.name)||this.state.type.keyword)},pp$3.checkGetterSetterParamCount=function(t){var e="get"===t.kind?0:1;if(t.params.length!==e){var s=t.start;"get"===t.kind?this.raise(s,"getter should have no params"):this.raise(s,"setter should have exactly one param")}},pp$3.parseObjectMethod=function(t,e,s,i){return s||e||this.match(types.parenL)?(i&&this.unexpected(),t.kind="method",t.method=!0,this.parseMethod(t,e,s),this.finishNode(t,"ObjectMethod")):this.isGetterOrSetterMethod(t,i)?((e||s)&&this.unexpected(),t.kind=t.key.name,this.parsePropertyName(t),this.parseMethod(t),this.checkGetterSetterParamCount(t),this.finishNode(t,"ObjectMethod")):void 0},pp$3.parseObjectProperty=function(t,e,s,i,r){return this.eat(types.colon)?(t.value=i?this.parseMaybeDefault(this.state.start,this.state.startLoc):this.parseMaybeAssign(!1,r),this.finishNode(t,"ObjectProperty")):t.computed||"Identifier"!==t.key.type?void 0:(this.checkReservedWord(t.key.name,t.key.start,!0,!0),i?t.value=this.parseMaybeDefault(e,s,t.key.__clone()):this.match(types.eq)&&r?(r.start||(r.start=this.state.start),t.value=this.parseMaybeDefault(e,s,t.key.__clone())):t.value=t.key.__clone(),t.shorthand=!0,this.finishNode(t,"ObjectProperty"))},pp$3.parseObjPropValue=function(t,e,s,i,r,a,n){var o=this.parseObjectMethod(t,i,r,a)||this.parseObjectProperty(t,e,s,a,n);return o||this.unexpected(),o},pp$3.parsePropertyName=function(t){if(this.eat(types.bracketL))t.computed=!0,t.key=this.parseMaybeAssign(),this.expect(types.bracketR);else{t.computed=!1;var e=this.state.inPropertyName;this.state.inPropertyName=!0,t.key=this.match(types.num)||this.match(types.string)?this.parseExprAtom():this.parseIdentifier(!0),this.state.inPropertyName=e}return t.key},pp$3.initFunction=function(t,e){t.id=null,t.generator=!1,t.expression=!1,t.async=!!e},pp$3.parseMethod=function(t,e,s){var i=this.state.inMethod;return this.state.inMethod=t.kind||!0,this.initFunction(t,s),this.expect(types.parenL),t.params=this.parseBindingList(types.parenR),t.generator=!!e,this.parseFunctionBody(t),this.state.inMethod=i,t},pp$3.parseArrowExpression=function(t,e,s){return this.initFunction(t,s),t.params=this.toAssignableList(e,!0,"arrow function parameters"),this.parseFunctionBody(t,!0),this.finishNode(t,"ArrowFunctionExpression")},pp$3.isStrictBody=function(t,e){if(!e&&t.body.directives.length)for(var s=t.body.directives,i=Array.isArray(s),r=0,s=i?s:s[Symbol.iterator]();;){var a;if(i){if(r>=s.length)break;a=s[r++]}else{if(r=s.next(),r.done)break;a=r.value}var n=a;if("use strict"===n.value.value)return!0}return!1},pp$3.parseFunctionBody=function(t,e){var s=e&&!this.match(types.braceL),i=this.state.inAsync;if(this.state.inAsync=t.async,s)t.body=this.parseMaybeAssign(),t.expression=!0;else{var r=this.state.inFunction,a=this.state.inGenerator,n=this.state.labels;this.state.inFunction=!0,this.state.inGenerator=t.generator,this.state.labels=[],t.body=this.parseBlock(!0),t.expression=!1,this.state.inFunction=r,this.state.inGenerator=a,this.state.labels=n}this.state.inAsync=i;var o=this.isStrictBody(t,s),p=this.state.strict||e||o;if(o&&t.id&&"Identifier"===t.id.type&&"yield"===t.id.name&&this.raise(t.id.start,"Binding yield in strict mode"),p){var h=Object.create(null),c=this.state.strict;o&&(this.state.strict=!0),t.id&&this.checkLVal(t.id,!0,void 0,"function name");for(var l=t.params,u=Array.isArray(l),d=0,l=u?l:l[Symbol.iterator]();;){var f;if(u){if(d>=l.length)break;f=l[d++]}else{if(d=l.next(),d.done)break;f=d.value}var y=f;o&&"Identifier"!==y.type&&this.raise(y.start,"Non-simple parameter in strict mode"),this.checkLVal(y,!0,h,"function parameter list")}this.state.strict=c}},pp$3.parseExprList=function(t,e,s){for(var i=[],r=!0;!this.eat(t);){if(r)r=!1;else if(this.expect(types.comma),this.eat(t))break;i.push(this.parseExprListItem(e,s))}return i},pp$3.parseExprListItem=function(t,e,s){return t&&this.match(types.comma)?null:this.match(types.ellipsis)?this.parseSpread(e):this.parseMaybeAssign(!1,e,this.parseParenItem,s)},pp$3.parseIdentifier=function(t){var e=this.startNode();return t||this.checkReservedWord(this.state.value,this.state.start,!!this.state.type.keyword,!1),this.match(types.name)?e.name=this.state.value:this.state.type.keyword?e.name=this.state.type.keyword:this.unexpected(),!t&&"await"===e.name&&this.state.inAsync&&this.raise(e.start,"invalid use of await inside of an async function"),e.loc.identifierName=e.name,this.next(),this.finishNode(e,"Identifier")},pp$3.checkReservedWord=function(t,e,s,i){(this.isReservedWord(t)||s&&this.isKeyword(t))&&this.raise(e,t+" is a reserved word"),this.state.strict&&(reservedWords.strict(t)||i&&reservedWords.strictBind(t))&&this.raise(e,t+" is a reserved word in strict mode")},pp$3.parseAwait=function(t){return this.state.inAsync||this.unexpected(),this.match(types.star)&&this.raise(t.start,"await* has been removed from the async functions proposal. Use Promise.all() instead."),t.argument=this.parseMaybeUnary(),this.finishNode(t,"AwaitExpression")},pp$3.parseYield=function(){var t=this.startNode();return this.next(),this.match(types.semi)||this.canInsertSemicolon()||!this.match(types.star)&&!this.state.type.startsExpr?(t.delegate=!1,t.argument=null):(t.delegate=this.eat(types.star),t.argument=this.parseMaybeAssign()),this.finishNode(t,"YieldExpression")};var pp$4=Parser.prototype,commentKeys=["leadingComments","trailingComments","innerComments"],Node=function(){function t(e,s,i){classCallCheck(this,t),this.type="",this.start=e,this.end=0,this.loc=new SourceLocation(s),i&&(this.loc.filename=i)}return t.prototype.__clone=function(){var e=new t;for(var s in this)commentKeys.indexOf(s)<0&&(e[s]=this[s]);return e},t}();pp$4.startNode=function(){return new Node(this.state.start,this.state.startLoc,this.filename)},pp$4.startNodeAt=function(t,e){return new Node(t,e,this.filename)},pp$4.finishNode=function(t,e){return finishNodeAt.call(this,t,e,this.state.lastTokEnd,this.state.lastTokEndLoc)},pp$4.finishNodeAt=function(t,e,s,i){return finishNodeAt.call(this,t,e,s,i)};var pp$5=Parser.prototype;pp$5.raise=function(t,e){var s=getLineInfo(this.input,t);e+=" ("+s.line+":"+s.column+")";var i=new SyntaxError(e);throw i.pos=t,i.loc=s,i};var pp$6=Parser.prototype;pp$6.addComment=function(t){this.filename&&(t.loc.filename=this.filename),this.state.trailingComments.push(t),this.state.leadingComments.push(t)},pp$6.processComment=function(t){if(!("Program"===t.type&&t.body.length>0)){var e=this.state.commentStack,s=void 0,i=void 0,r=void 0,a=void 0,n=void 0;if(this.state.trailingComments.length>0)this.state.trailingComments[0].start>=t.end?(r=this.state.trailingComments,this.state.trailingComments=[]):this.state.trailingComments.length=0;else{var o=last(e);e.length>0&&o.trailingComments&&o.trailingComments[0].start>=t.end&&(r=o.trailingComments,o.trailingComments=null)}for(e.length>0&&last(e).start>=t.start&&(s=e.pop());e.length>0&&last(e).start>=t.start;)i=e.pop();if(!i&&s&&(i=s),s&&this.state.leadingComments.length>0){var p=last(this.state.leadingComments);if("ObjectProperty"===s.type){if(p.start>=t.start&&this.state.commentPreviousNode){for(n=0;n<this.state.leadingComments.length;n++)this.state.leadingComments[n].end<this.state.commentPreviousNode.end&&(this.state.leadingComments.splice(n,1),n--);this.state.leadingComments.length>0&&(s.trailingComments=this.state.leadingComments,this.state.leadingComments=[])}}else if("CallExpression"===t.type&&t.arguments&&t.arguments.length){var h=last(t.arguments);h&&p.start>=h.start&&p.end<=t.end&&this.state.commentPreviousNode&&this.state.leadingComments.length>0&&(h.trailingComments=this.state.leadingComments,this.state.leadingComments=[])}}if(i){if(i.leadingComments)if(i!==t&&last(i.leadingComments).end<=t.start)t.leadingComments=i.leadingComments,i.leadingComments=null;else for(a=i.leadingComments.length-2;a>=0;--a)if(i.leadingComments[a].end<=t.start){t.leadingComments=i.leadingComments.splice(0,a+1);break}}else if(this.state.leadingComments.length>0)if(last(this.state.leadingComments).end<=t.start){if(this.state.commentPreviousNode)for(n=0;n<this.state.leadingComments.length;n++)this.state.leadingComments[n].end<this.state.commentPreviousNode.end&&(this.state.leadingComments.splice(n,1),n--);this.state.leadingComments.length>0&&(t.leadingComments=this.state.leadingComments,this.state.leadingComments=[])}else{for(a=0;a<this.state.leadingComments.length&&!(this.state.leadingComments[a].end>t.start);a++);t.leadingComments=this.state.leadingComments.slice(0,a),0===t.leadingComments.length&&(t.leadingComments=null),r=this.state.leadingComments.slice(a),0===r.length&&(r=null)}this.state.commentPreviousNode=t,r&&(r.length&&r[0].start>=t.start&&last(r).end<=t.end?t.innerComments=r:t.trailingComments=r),e.push(t)}};var pp$7=Parser.prototype;pp$7.estreeParseRegExpLiteral=function(t){var e=t.pattern,s=t.flags,i=null;try{i=new RegExp(e,s)}catch(t){}var r=this.estreeParseLiteral(i);return r.regex={pattern:e,flags:s},r},pp$7.estreeParseLiteral=function(t){return this.parseLiteral(t,"Literal")},pp$7.directiveToStmt=function(t){var e=t.value,s=this.startNodeAt(t.start,t.loc.start),i=this.startNodeAt(e.start,e.loc.start);return i.value=e.value,i.raw=e.extra.raw,s.expression=this.finishNodeAt(i,"Literal",e.end,e.loc.end),s.directive=e.extra.raw.slice(1,-1),this.finishNodeAt(s,"ExpressionStatement",t.end,t.loc.end)};var estreePlugin=function(t){t.extend("checkDeclaration",function(t){return function(e){isSimpleProperty(e)?this.checkDeclaration(e.value):t.call(this,e)}}),t.extend("checkGetterSetterParamCount",function(){return function(t){var e="get"===t.kind?0:1;if(t.value.params.length!==e){var s=t.start;"get"===t.kind?this.raise(s,"getter should have no params"):this.raise(s,"setter should have exactly one param")}}}),t.extend("checkLVal",function(t){return function(e,s,i){var r=this;switch(e.type){case"ObjectPattern":e.properties.forEach(function(t){r.checkLVal("Property"===t.type?t.value:t,s,i,"object destructuring pattern")});break;default:for(var a=arguments.length,n=Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];t.call.apply(t,[this,e,s,i].concat(n))}}}),t.extend("checkPropClash",function(){return function(t,e){if(!t.computed&&isSimpleProperty(t)){var s=t.key;"__proto__"===("Identifier"===s.type?s.name:String(s.value))&&(e.proto&&this.raise(s.start,"Redefinition of __proto__ property"),e.proto=!0)}}}),t.extend("isStrictBody",function(){return function(t,e){if(!e&&t.body.body.length>0)for(var s=t.body.body,i=Array.isArray(s),r=0,s=i?s:s[Symbol.iterator]();;){var a;if(i){if(r>=s.length)break;a=s[r++]}else{if(r=s.next(),r.done)break;a=r.value}var n=a;if("ExpressionStatement"!==n.type||"Literal"!==n.expression.type)break;if("use strict"===n.expression.value)return!0}return!1}}),t.extend("isValidDirective",function(){return function(t){return!("ExpressionStatement"!==t.type||"Literal"!==t.expression.type||"string"!=typeof t.expression.value||t.expression.extra&&t.expression.extra.parenthesized)}}),t.extend("stmtToDirective",function(t){return function(e){var s=t.call(this,e),i=e.expression.value;return s.value.value=i,s}}),t.extend("parseBlockBody",function(t){return function(e){for(var s=this,i=arguments.length,r=Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];t.call.apply(t,[this,e].concat(r)),e.directives.reverse().forEach(function(t){e.body.unshift(s.directiveToStmt(t))}),delete e.directives}}),t.extend("parseClassMethod",function(){return function(t,e,s,i){this.parseMethod(e,s,i),e.typeParameters&&(e.value.typeParameters=e.typeParameters,delete e.typeParameters),t.body.push(this.finishNode(e,"MethodDefinition"))}}),t.extend("parseExprAtom",function(t){return function(){switch(this.state.type){case types.regexp:return this.estreeParseRegExpLiteral(this.state.value);case types.num:case types.string:return this.estreeParseLiteral(this.state.value);case types._null:return this.estreeParseLiteral(null);case types._true:return this.estreeParseLiteral(!0);case types._false:return this.estreeParseLiteral(!1);default:for(var e=arguments.length,s=Array(e),i=0;i<e;i++)s[i]=arguments[i];return t.call.apply(t,[this].concat(s))}}}),t.extend("parseLiteral",function(t){return function(){for(var e=arguments.length,s=Array(e),i=0;i<e;i++)s[i]=arguments[i];var r=t.call.apply(t,[this].concat(s));return r.raw=r.extra.raw,delete r.extra,r}}),t.extend("parseMethod",function(t){return function(e){var s=this.startNode();s.kind=e.kind;for(var i=arguments.length,r=Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];return s=t.call.apply(t,[this,s].concat(r)),delete s.kind,e.value=this.finishNode(s,"FunctionExpression"),e}}),t.extend("parseObjectMethod",function(t){return function(){for(var e=arguments.length,s=Array(e),i=0;i<e;i++)s[i]=arguments[i];var r=t.call.apply(t,[this].concat(s));return r&&("method"===r.kind&&(r.kind="init"),r.type="Property"),r}}),t.extend("parseObjectProperty",function(t){return function(){for(var e=arguments.length,s=Array(e),i=0;i<e;i++)s[i]=arguments[i];var r=t.call.apply(t,[this].concat(s));return r&&(r.kind="init",r.type="Property"),r}}),t.extend("toAssignable",function(t){return function(e,s){for(var i=arguments.length,r=Array(i>2?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];if(isSimpleProperty(e))return this.toAssignable.apply(this,[e.value,s].concat(r)),e;if("ObjectExpression"===e.type){e.type="ObjectPattern";for(var n=e.properties,o=Array.isArray(n),p=0,n=o?n:n[Symbol.iterator]();;){var h;if(o){if(p>=n.length)break;h=n[p++]}else{if(p=n.next(),p.done)break;h=p.value}var c=h;"get"===c.kind||"set"===c.kind?this.raise(c.key.start,"Object pattern can't contain getter or setter"):c.method?this.raise(c.key.start,"Object pattern can't contain methods"):this.toAssignable(c,s,"object destructuring pattern")}return e}return t.call.apply(t,[this,e,s].concat(r))}})},primitiveTypes=["any","mixed","empty","bool","boolean","number","string","void","null"],pp$8=Parser.prototype;pp$8.flowParseTypeInitialiser=function(t){var e=this.state.inType;this.state.inType=!0,this.expect(t||types.colon);var s=this.flowParseType();return this.state.inType=e,s},pp$8.flowParsePredicate=function(){var t=this.startNode(),e=this.state.startLoc,s=this.state.start;this.expect(types.modulo);var i=this.state.startLoc;return this.expectContextual("checks"),e.line===i.line&&e.column===i.column-1||this.raise(s,"Spaces between ´%´ and ´checks´ are not allowed here."),this.eat(types.parenL)?(t.expression=this.parseExpression(),this.expect(types.parenR),this.finishNode(t,"DeclaredPredicate")):this.finishNode(t,"InferredPredicate")},pp$8.flowParseTypeAndPredicateInitialiser=function(){var t=this.state.inType;this.state.inType=!0,this.expect(types.colon);var e=null,s=null;return this.match(types.modulo)?(this.state.inType=t,s=this.flowParsePredicate()):(e=this.flowParseType(),this.state.inType=t,this.match(types.modulo)&&(s=this.flowParsePredicate())),[e,s]},pp$8.flowParseDeclareClass=function(t){return this.next(),this.flowParseInterfaceish(t,!0),this.finishNode(t,"DeclareClass")},pp$8.flowParseDeclareFunction=function(t){this.next();var e=t.id=this.parseIdentifier(),s=this.startNode(),i=this.startNode();this.isRelational("<")?s.typeParameters=this.flowParseTypeParameterDeclaration():s.typeParameters=null,this.expect(types.parenL);var r=this.flowParseFunctionTypeParams();s.params=r.params,s.rest=r.rest,this.expect(types.parenR);var a=null,n=this.flowParseTypeAndPredicateInitialiser();return s.returnType=n[0],a=n[1],i.typeAnnotation=this.finishNode(s,"FunctionTypeAnnotation"),i.predicate=a,e.typeAnnotation=this.finishNode(i,"TypeAnnotation"),this.finishNode(e,e.type),this.semicolon(),this.finishNode(t,"DeclareFunction")},pp$8.flowParseDeclare=function(t){return this.match(types._class)?this.flowParseDeclareClass(t):this.match(types._function)?this.flowParseDeclareFunction(t):this.match(types._var)?this.flowParseDeclareVariable(t):this.isContextual("module")?this.lookahead().type===types.dot?this.flowParseDeclareModuleExports(t):this.flowParseDeclareModule(t):this.isContextual("type")?this.flowParseDeclareTypeAlias(t):this.isContextual("opaque")?this.flowParseDeclareOpaqueType(t):this.isContextual("interface")?this.flowParseDeclareInterface(t):this.match(types._export)?this.flowParseDeclareExportDeclaration(t):void this.unexpected()},pp$8.flowParseDeclareExportDeclaration=function(t){if(this.expect(types._export),this.isContextual("opaque"))return t.declaration=this.flowParseDeclare(this.startNode()),t.default=!1,this.finishNode(t,"DeclareExportDeclaration");throw this.unexpected()},pp$8.flowParseDeclareVariable=function(t){return this.next(),t.id=this.flowParseTypeAnnotatableIdentifier(),this.semicolon(),this.finishNode(t,"DeclareVariable")},pp$8.flowParseDeclareModule=function(t){this.next(),this.match(types.string)?t.id=this.parseExprAtom():t.id=this.parseIdentifier();var e=t.body=this.startNode(),s=e.body=[];for(this.expect(types.braceL);!this.match(types.braceR);){var i=this.startNode();if(this.match(types._import)){var r=this.lookahead();"type"!==r.value&&"typeof"!==r.value&&this.unexpected(null,"Imports within a `declare module` body must always be `import type` or `import typeof`"),this.parseImport(i)}else this.expectContextual("declare","Only declares and type imports are allowed inside declare module"),i=this.flowParseDeclare(i,!0);s.push(i)}return this.expect(types.braceR),this.finishNode(e,"BlockStatement"),this.finishNode(t,"DeclareModule")},pp$8.flowParseDeclareModuleExports=function(t){return this.expectContextual("module"),this.expect(types.dot),this.expectContextual("exports"),t.typeAnnotation=this.flowParseTypeAnnotation(),this.semicolon(),this.finishNode(t,"DeclareModuleExports")},pp$8.flowParseDeclareTypeAlias=function(t){return this.next(),this.flowParseTypeAlias(t),this.finishNode(t,"DeclareTypeAlias")},pp$8.flowParseDeclareOpaqueType=function(t){return this.next(),this.flowParseOpaqueType(t,!0),this.finishNode(t,"DeclareOpaqueType")},pp$8.flowParseDeclareInterface=function(t){return this.next(),this.flowParseInterfaceish(t),this.finishNode(t,"DeclareInterface")},pp$8.flowParseInterfaceish=function(t){if(t.id=this.parseIdentifier(),this.isRelational("<")?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.extends=[],t.mixins=[],this.eat(types._extends))do{t.extends.push(this.flowParseInterfaceExtends())}while(this.eat(types.comma));if(this.isContextual("mixins")){this.next();do{t.mixins.push(this.flowParseInterfaceExtends())}while(this.eat(types.comma))}t.body=this.flowParseObjectType(!0,!1,!1)},pp$8.flowParseInterfaceExtends=function(){var t=this.startNode();return t.id=this.flowParseQualifiedTypeIdentifier(),this.isRelational("<")?t.typeParameters=this.flowParseTypeParameterInstantiation():t.typeParameters=null,this.finishNode(t,"InterfaceExtends")},pp$8.flowParseInterface=function(t){return this.flowParseInterfaceish(t,!1),this.finishNode(t,"InterfaceDeclaration")},pp$8.flowParseRestrictedIdentifier=function(t){return primitiveTypes.indexOf(this.state.value)>-1&&this.raise(this.state.start,"Cannot overwrite primitive type "+this.state.value),this.parseIdentifier(t)},pp$8.flowParseTypeAlias=function(t){return t.id=this.flowParseRestrictedIdentifier(),this.isRelational("<")?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.right=this.flowParseTypeInitialiser(types.eq),this.semicolon(),this.finishNode(t,"TypeAlias")},pp$8.flowParseOpaqueType=function(t,e){return this.expectContextual("type"),t.id=this.flowParseRestrictedIdentifier(),this.isRelational("<")?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.supertype=null,this.match(types.colon)&&(t.supertype=this.flowParseTypeInitialiser(types.colon)),t.impltype=null,e||(t.impltype=this.flowParseTypeInitialiser(types.eq)),this.semicolon(),this.finishNode(t,"OpaqueType")},pp$8.flowParseTypeParameter=function(){var t=this.startNode(),e=this.flowParseVariance(),s=this.flowParseTypeAnnotatableIdentifier();return t.name=s.name,t.variance=e,t.bound=s.typeAnnotation,this.match(types.eq)&&(this.eat(types.eq),t.default=this.flowParseType()),this.finishNode(t,"TypeParameter")},pp$8.flowParseTypeParameterDeclaration=function(){var t=this.state.inType,e=this.startNode();e.params=[],this.state.inType=!0,this.isRelational("<")||this.match(types.jsxTagStart)?this.next():this.unexpected();do{e.params.push(this.flowParseTypeParameter()),this.isRelational(">")||this.expect(types.comma)}while(!this.isRelational(">"));return this.expectRelational(">"),this.state.inType=t,this.finishNode(e,"TypeParameterDeclaration")},pp$8.flowParseTypeParameterInstantiation=function(){var t=this.startNode(),e=this.state.inType;for(t.params=[],this.state.inType=!0,this.expectRelational("<");!this.isRelational(">");)t.params.push(this.flowParseType()),this.isRelational(">")||this.expect(types.comma);return this.expectRelational(">"),this.state.inType=e,this.finishNode(t,"TypeParameterInstantiation")},pp$8.flowParseObjectPropertyKey=function(){return this.match(types.num)||this.match(types.string)?this.parseExprAtom():this.parseIdentifier(!0)},pp$8.flowParseObjectTypeIndexer=function(t,e,s){return t.static=e,this.expect(types.bracketL),this.lookahead().type===types.colon?(t.id=this.flowParseObjectPropertyKey(),t.key=this.flowParseTypeInitialiser()):(t.id=null,t.key=this.flowParseType()),this.expect(types.bracketR),t.value=this.flowParseTypeInitialiser(),
t.variance=s,this.flowObjectTypeSemicolon(),this.finishNode(t,"ObjectTypeIndexer")},pp$8.flowParseObjectTypeMethodish=function(t){for(t.params=[],t.rest=null,t.typeParameters=null,this.isRelational("<")&&(t.typeParameters=this.flowParseTypeParameterDeclaration()),this.expect(types.parenL);!this.match(types.parenR)&&!this.match(types.ellipsis);)t.params.push(this.flowParseFunctionTypeParam()),this.match(types.parenR)||this.expect(types.comma);return this.eat(types.ellipsis)&&(t.rest=this.flowParseFunctionTypeParam()),this.expect(types.parenR),t.returnType=this.flowParseTypeInitialiser(),this.finishNode(t,"FunctionTypeAnnotation")},pp$8.flowParseObjectTypeMethod=function(t,e,s,i){var r=this.startNodeAt(t,e);return r.value=this.flowParseObjectTypeMethodish(this.startNodeAt(t,e)),r.static=s,r.key=i,r.optional=!1,this.flowObjectTypeSemicolon(),this.finishNode(r,"ObjectTypeProperty")},pp$8.flowParseObjectTypeCallProperty=function(t,e){var s=this.startNode();return t.static=e,t.value=this.flowParseObjectTypeMethodish(s),this.flowObjectTypeSemicolon(),this.finishNode(t,"ObjectTypeCallProperty")},pp$8.flowParseObjectType=function(t,e,s){var i=this.state.inType;this.state.inType=!0;var r=this.startNode(),a=void 0,n=void 0,o=!1;r.callProperties=[],r.properties=[],r.indexers=[];var p=void 0,h=void 0;for(e&&this.match(types.braceBarL)?(this.expect(types.braceBarL),p=types.braceBarR,h=!0):(this.expect(types.braceL),p=types.braceR,h=!1),r.exact=h;!this.match(p);){var c=!1,l=this.state.start,u=this.state.startLoc;a=this.startNode(),t&&this.isContextual("static")&&this.lookahead().type!==types.colon&&(this.next(),o=!0);var d=this.state.start,f=this.flowParseVariance();this.match(types.bracketL)?r.indexers.push(this.flowParseObjectTypeIndexer(a,o,f)):this.match(types.parenL)||this.isRelational("<")?(f&&this.unexpected(d),r.callProperties.push(this.flowParseObjectTypeCallProperty(a,o))):this.match(types.ellipsis)?(s||this.unexpected(null,"Spread operator cannot appear in class or interface definitions"),f&&this.unexpected(f.start,"Spread properties cannot have variance"),this.expect(types.ellipsis),a.argument=this.flowParseType(),this.flowObjectTypeSemicolon(),r.properties.push(this.finishNode(a,"ObjectTypeSpreadProperty"))):(n=this.flowParseObjectPropertyKey(),this.isRelational("<")||this.match(types.parenL)?(f&&this.unexpected(f.start),r.properties.push(this.flowParseObjectTypeMethod(l,u,o,n))):(this.eat(types.question)&&(c=!0),a.key=n,a.value=this.flowParseTypeInitialiser(),a.optional=c,a.static=o,a.variance=f,this.flowObjectTypeSemicolon(),r.properties.push(this.finishNode(a,"ObjectTypeProperty")))),o=!1}this.expect(p);var y=this.finishNode(r,"ObjectTypeAnnotation");return this.state.inType=i,y},pp$8.flowObjectTypeSemicolon=function(){this.eat(types.semi)||this.eat(types.comma)||this.match(types.braceR)||this.match(types.braceBarR)||this.unexpected()},pp$8.flowParseQualifiedTypeIdentifier=function(t,e,s){t=t||this.state.start,e=e||this.state.startLoc;for(var i=s||this.parseIdentifier();this.eat(types.dot);){var r=this.startNodeAt(t,e);r.qualification=i,r.id=this.parseIdentifier(),i=this.finishNode(r,"QualifiedTypeIdentifier")}return i},pp$8.flowParseGenericType=function(t,e,s){var i=this.startNodeAt(t,e);return i.typeParameters=null,i.id=this.flowParseQualifiedTypeIdentifier(t,e,s),this.isRelational("<")&&(i.typeParameters=this.flowParseTypeParameterInstantiation()),this.finishNode(i,"GenericTypeAnnotation")},pp$8.flowParseTypeofType=function(){var t=this.startNode();return this.expect(types._typeof),t.argument=this.flowParsePrimaryType(),this.finishNode(t,"TypeofTypeAnnotation")},pp$8.flowParseTupleType=function(){var t=this.startNode();for(t.types=[],this.expect(types.bracketL);this.state.pos<this.input.length&&!this.match(types.bracketR)&&(t.types.push(this.flowParseType()),!this.match(types.bracketR));)this.expect(types.comma);return this.expect(types.bracketR),this.finishNode(t,"TupleTypeAnnotation")},pp$8.flowParseFunctionTypeParam=function(){var t=null,e=!1,s=null,i=this.startNode(),r=this.lookahead();return r.type===types.colon||r.type===types.question?(t=this.parseIdentifier(),this.eat(types.question)&&(e=!0),s=this.flowParseTypeInitialiser()):s=this.flowParseType(),i.name=t,i.optional=e,i.typeAnnotation=s,this.finishNode(i,"FunctionTypeParam")},pp$8.reinterpretTypeAsFunctionTypeParam=function(t){var e=this.startNodeAt(t.start,t.loc.start);return e.name=null,e.optional=!1,e.typeAnnotation=t,this.finishNode(e,"FunctionTypeParam")},pp$8.flowParseFunctionTypeParams=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={params:t,rest:null};!this.match(types.parenR)&&!this.match(types.ellipsis);)e.params.push(this.flowParseFunctionTypeParam()),this.match(types.parenR)||this.expect(types.comma);return this.eat(types.ellipsis)&&(e.rest=this.flowParseFunctionTypeParam()),e},pp$8.flowIdentToTypeAnnotation=function(t,e,s,i){switch(i.name){case"any":return this.finishNode(s,"AnyTypeAnnotation");case"void":return this.finishNode(s,"VoidTypeAnnotation");case"bool":case"boolean":return this.finishNode(s,"BooleanTypeAnnotation");case"mixed":return this.finishNode(s,"MixedTypeAnnotation");case"empty":return this.finishNode(s,"EmptyTypeAnnotation");case"number":return this.finishNode(s,"NumberTypeAnnotation");case"string":return this.finishNode(s,"StringTypeAnnotation");default:return this.flowParseGenericType(t,e,i)}},pp$8.flowParsePrimaryType=function(){var t=this.state.start,e=this.state.startLoc,s=this.startNode(),i=void 0,r=void 0,a=!1,n=this.state.noAnonFunctionType;switch(this.state.type){case types.name:return this.flowIdentToTypeAnnotation(t,e,s,this.parseIdentifier());case types.braceL:return this.flowParseObjectType(!1,!1,!0);case types.braceBarL:return this.flowParseObjectType(!1,!0,!0);case types.bracketL:return this.flowParseTupleType();case types.relational:if("<"===this.state.value)return s.typeParameters=this.flowParseTypeParameterDeclaration(),this.expect(types.parenL),i=this.flowParseFunctionTypeParams(),s.params=i.params,s.rest=i.rest,this.expect(types.parenR),this.expect(types.arrow),s.returnType=this.flowParseType(),this.finishNode(s,"FunctionTypeAnnotation");break;case types.parenL:if(this.next(),!this.match(types.parenR)&&!this.match(types.ellipsis))if(this.match(types.name)){var o=this.lookahead().type;a=o!==types.question&&o!==types.colon}else a=!0;if(a){if(this.state.noAnonFunctionType=!1,r=this.flowParseType(),this.state.noAnonFunctionType=n,this.state.noAnonFunctionType||!(this.match(types.comma)||this.match(types.parenR)&&this.lookahead().type===types.arrow))return this.expect(types.parenR),r;this.eat(types.comma)}return i=r?this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(r)]):this.flowParseFunctionTypeParams(),s.params=i.params,s.rest=i.rest,this.expect(types.parenR),this.expect(types.arrow),s.returnType=this.flowParseType(),s.typeParameters=null,this.finishNode(s,"FunctionTypeAnnotation");case types.string:return this.parseLiteral(this.state.value,"StringLiteralTypeAnnotation");case types._true:case types._false:return s.value=this.match(types._true),this.next(),this.finishNode(s,"BooleanLiteralTypeAnnotation");case types.plusMin:if("-"===this.state.value)return this.next(),this.match(types.num)||this.unexpected(null,"Unexpected token, expected number"),this.parseLiteral(-this.state.value,"NumericLiteralTypeAnnotation",s.start,s.loc.start);this.unexpected();case types.num:return this.parseLiteral(this.state.value,"NumericLiteralTypeAnnotation");case types._null:return s.value=this.match(types._null),this.next(),this.finishNode(s,"NullLiteralTypeAnnotation");case types._this:return s.value=this.match(types._this),this.next(),this.finishNode(s,"ThisTypeAnnotation");case types.star:return this.next(),this.finishNode(s,"ExistentialTypeParam");default:if("typeof"===this.state.type.keyword)return this.flowParseTypeofType()}this.unexpected()},pp$8.flowParsePostfixType=function(){for(var t=this.state.start,e=this.state.startLoc,s=this.flowParsePrimaryType();!this.canInsertSemicolon()&&this.match(types.bracketL);){var i=this.startNodeAt(t,e);i.elementType=s,this.expect(types.bracketL),this.expect(types.bracketR),s=this.finishNode(i,"ArrayTypeAnnotation")}return s},pp$8.flowParsePrefixType=function(){var t=this.startNode();return this.eat(types.question)?(t.typeAnnotation=this.flowParsePrefixType(),this.finishNode(t,"NullableTypeAnnotation")):this.flowParsePostfixType()},pp$8.flowParseAnonFunctionWithoutParens=function(){var t=this.flowParsePrefixType();if(!this.state.noAnonFunctionType&&this.eat(types.arrow)){var e=this.startNodeAt(t.start,t.loc.start);return e.params=[this.reinterpretTypeAsFunctionTypeParam(t)],e.rest=null,e.returnType=this.flowParseType(),e.typeParameters=null,this.finishNode(e,"FunctionTypeAnnotation")}return t},pp$8.flowParseIntersectionType=function(){var t=this.startNode();this.eat(types.bitwiseAND);var e=this.flowParseAnonFunctionWithoutParens();for(t.types=[e];this.eat(types.bitwiseAND);)t.types.push(this.flowParseAnonFunctionWithoutParens());return 1===t.types.length?e:this.finishNode(t,"IntersectionTypeAnnotation")},pp$8.flowParseUnionType=function(){var t=this.startNode();this.eat(types.bitwiseOR);var e=this.flowParseIntersectionType();for(t.types=[e];this.eat(types.bitwiseOR);)t.types.push(this.flowParseIntersectionType());return 1===t.types.length?e:this.finishNode(t,"UnionTypeAnnotation")},pp$8.flowParseType=function(){var t=this.state.inType;this.state.inType=!0;var e=this.flowParseUnionType();return this.state.inType=t,e},pp$8.flowParseTypeAnnotation=function(){var t=this.startNode();return t.typeAnnotation=this.flowParseTypeInitialiser(),this.finishNode(t,"TypeAnnotation")},pp$8.flowParseTypeAndPredicateAnnotation=function(){var t=this.startNode(),e=this.flowParseTypeAndPredicateInitialiser();return t.typeAnnotation=e[0],t.predicate=e[1],this.finishNode(t,"TypeAnnotation")},pp$8.flowParseTypeAnnotatableIdentifier=function(){var t=this.flowParseRestrictedIdentifier();return this.match(types.colon)&&(t.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(t,t.type)),t},pp$8.typeCastToParameter=function(t){return t.expression.typeAnnotation=t.typeAnnotation,this.finishNodeAt(t.expression,t.expression.type,t.typeAnnotation.end,t.typeAnnotation.loc.end)},pp$8.flowParseVariance=function(){var t=null;return this.match(types.plusMin)&&("+"===this.state.value?t="plus":"-"===this.state.value&&(t="minus"),this.next()),t};var flowPlugin=function(t){t.extend("parseFunctionBody",function(t){return function(e,s){return this.match(types.colon)&&!s&&(e.returnType=this.flowParseTypeAndPredicateAnnotation()),t.call(this,e,s)}}),t.extend("parseStatement",function(t){return function(e,s){if(this.state.strict&&this.match(types.name)&&"interface"===this.state.value){var i=this.startNode();return this.next(),this.flowParseInterface(i)}return t.call(this,e,s)}}),t.extend("parseExpressionStatement",function(t){return function(e,s){if("Identifier"===s.type)if("declare"===s.name){if(this.match(types._class)||this.match(types.name)||this.match(types._function)||this.match(types._var)||this.match(types._export))return this.flowParseDeclare(e)}else if(this.match(types.name)){if("interface"===s.name)return this.flowParseInterface(e);if("type"===s.name)return this.flowParseTypeAlias(e);if("opaque"===s.name)return this.flowParseOpaqueType(e,!1)}return t.call(this,e,s)}}),t.extend("shouldParseExportDeclaration",function(t){return function(){return this.isContextual("type")||this.isContextual("interface")||this.isContextual("opaque")||t.call(this)}}),t.extend("isExportDefaultSpecifier",function(t){return function(){return(!this.match(types.name)||"type"!==this.state.value&&"interface"!==this.state.value&&"opaque"!==this.state.value)&&t.call(this)}}),t.extend("parseConditional",function(t){return function(e,s,i,r,a){if(a&&this.match(types.question)){var n=this.state.clone();try{return t.call(this,e,s,i,r)}catch(t){if(t instanceof SyntaxError)return this.state=n,a.start=t.pos||this.state.start,e;throw t}}return t.call(this,e,s,i,r)}}),t.extend("parseParenItem",function(t){return function(e,s,i){if(e=t.call(this,e,s,i),this.eat(types.question)&&(e.optional=!0),this.match(types.colon)){var r=this.startNodeAt(s,i);return r.expression=e,r.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(r,"TypeCastExpression")}return e}}),t.extend("parseExport",function(t){return function(e){return e=t.call(this,e),"ExportNamedDeclaration"===e.type&&(e.exportKind=e.exportKind||"value"),e}}),t.extend("parseExportDeclaration",function(t){return function(e){if(this.isContextual("type")){e.exportKind="type";var s=this.startNode();return this.next(),this.match(types.braceL)?(e.specifiers=this.parseExportSpecifiers(),this.parseExportFrom(e),null):this.flowParseTypeAlias(s)}if(this.isContextual("opaque")){e.exportKind="type";var i=this.startNode();return this.next(),this.flowParseOpaqueType(i,!1)}if(this.isContextual("interface")){e.exportKind="type";var r=this.startNode();return this.next(),this.flowParseInterface(r)}return t.call(this,e)}}),t.extend("parseClassId",function(t){return function(e){t.apply(this,arguments),this.isRelational("<")&&(e.typeParameters=this.flowParseTypeParameterDeclaration())}}),t.extend("isKeyword",function(t){return function(e){return(!this.state.inType||"void"!==e)&&t.call(this,e)}}),t.extend("readToken",function(t){return function(e){return!this.state.inType||62!==e&&60!==e?t.call(this,e):this.finishOp(types.relational,1)}}),t.extend("jsx_readToken",function(t){return function(){if(!this.state.inType)return t.call(this)}}),t.extend("toAssignable",function(t){return function(e,s,i){return"TypeCastExpression"===e.type?t.call(this,this.typeCastToParameter(e),s,i):t.call(this,e,s,i)}}),t.extend("toAssignableList",function(t){return function(e,s,i){for(var r=0;r<e.length;r++){var a=e[r];a&&"TypeCastExpression"===a.type&&(e[r]=this.typeCastToParameter(a))}return t.call(this,e,s,i)}}),t.extend("toReferencedList",function(){return function(t){for(var e=0;e<t.length;e++){var s=t[e];s&&s._exprListItem&&"TypeCastExpression"===s.type&&this.raise(s.start,"Unexpected type cast")}return t}}),t.extend("parseExprListItem",function(t){return function(){for(var e=this.startNode(),s=arguments.length,i=Array(s),r=0;r<s;r++)i[r]=arguments[r];var a=t.call.apply(t,[this].concat(i));return this.match(types.colon)?(e._exprListItem=!0,e.expression=a,e.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(e,"TypeCastExpression")):a}}),t.extend("checkLVal",function(t){return function(e){if("TypeCastExpression"!==e.type)return t.apply(this,arguments)}}),t.extend("parseClassProperty",function(t){return function(e){return delete e.variancePos,this.match(types.colon)&&(e.typeAnnotation=this.flowParseTypeAnnotation()),t.call(this,e)}}),t.extend("isClassMethod",function(t){return function(){return this.isRelational("<")||t.call(this)}}),t.extend("isClassProperty",function(t){return function(){return this.match(types.colon)||t.call(this)}}),t.extend("isNonstaticConstructor",function(t){return function(e){return!this.match(types.colon)&&t.call(this,e)}}),t.extend("parseClassMethod",function(t){return function(e,s){s.variance&&this.unexpected(s.variancePos),delete s.variance,delete s.variancePos,this.isRelational("<")&&(s.typeParameters=this.flowParseTypeParameterDeclaration());for(var i=arguments.length,r=Array(i>2?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];t.call.apply(t,[this,e,s].concat(r))}}),t.extend("parseClassSuper",function(t){return function(e,s){if(t.call(this,e,s),e.superClass&&this.isRelational("<")&&(e.superTypeParameters=this.flowParseTypeParameterInstantiation()),this.isContextual("implements")){this.next();var i=e.implements=[];do{var r=this.startNode();r.id=this.parseIdentifier(),this.isRelational("<")?r.typeParameters=this.flowParseTypeParameterInstantiation():r.typeParameters=null,i.push(this.finishNode(r,"ClassImplements"))}while(this.eat(types.comma))}}}),t.extend("parsePropertyName",function(t){return function(e){var s=this.state.start,i=this.flowParseVariance(),r=t.call(this,e);return e.variance=i,e.variancePos=s,r}}),t.extend("parseObjPropValue",function(t){return function(e){e.variance&&this.unexpected(e.variancePos),delete e.variance,delete e.variancePos;var s=void 0;this.isRelational("<")&&(s=this.flowParseTypeParameterDeclaration(),this.match(types.parenL)||this.unexpected()),t.apply(this,arguments),s&&((e.value||e).typeParameters=s)}}),t.extend("parseAssignableListItemTypes",function(){return function(t){return this.eat(types.question)&&(t.optional=!0),this.match(types.colon)&&(t.typeAnnotation=this.flowParseTypeAnnotation()),this.finishNode(t,t.type),t}}),t.extend("parseMaybeDefault",function(t){return function(){for(var e=arguments.length,s=Array(e),i=0;i<e;i++)s[i]=arguments[i];var r=t.apply(this,s);return"AssignmentPattern"===r.type&&r.typeAnnotation&&r.right.start<r.typeAnnotation.start&&this.raise(r.typeAnnotation.start,"Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`"),r}}),t.extend("parseImportSpecifiers",function(t){return function(e){e.importKind="value";var s=null;if(this.match(types._typeof)?s="typeof":this.isContextual("type")&&(s="type"),s){var i=this.lookahead();(i.type===types.name&&"from"!==i.value||i.type===types.braceL||i.type===types.star)&&(this.next(),e.importKind=s)}t.call(this,e)}}),t.extend("parseImportSpecifier",function(){return function(t){var e=this.startNode(),s=this.state.start,i=this.parseIdentifier(!0),r=null;"type"===i.name?r="type":"typeof"===i.name&&(r="typeof");var a=!1;if(this.isContextual("as")){var n=this.parseIdentifier(!0);null===r||this.match(types.name)||this.state.type.keyword?(e.imported=i,e.importKind=null,e.local=this.parseIdentifier()):(e.imported=n,e.importKind=r,e.local=n.__clone())}else null!==r&&(this.match(types.name)||this.state.type.keyword)?(e.imported=this.parseIdentifier(!0),e.importKind=r,this.eatContextual("as")?e.local=this.parseIdentifier():(a=!0,e.local=e.imported.__clone())):(a=!0,e.imported=i,e.importKind=null,e.local=e.imported.__clone());"type"!==t.importKind&&"typeof"!==t.importKind||"type"!==e.importKind&&"typeof"!==e.importKind||this.raise(s,"`The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements`"),a&&this.checkReservedWord(e.local.name,e.start,!0,!0),this.checkLVal(e.local,!0,void 0,"import specifier"),t.specifiers.push(this.finishNode(e,"ImportSpecifier"))}}),t.extend("parseFunctionParams",function(t){return function(e){this.isRelational("<")&&(e.typeParameters=this.flowParseTypeParameterDeclaration()),t.call(this,e)}}),t.extend("parseVarHead",function(t){return function(e){t.call(this,e),this.match(types.colon)&&(e.id.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(e.id,e.id.type))}}),t.extend("parseAsyncArrowFromCallExpression",function(t){return function(e,s){if(this.match(types.colon)){var i=this.state.noAnonFunctionType;this.state.noAnonFunctionType=!0,e.returnType=this.flowParseTypeAnnotation(),this.state.noAnonFunctionType=i}return t.call(this,e,s)}}),t.extend("shouldParseAsyncArrow",function(t){return function(){return this.match(types.colon)||t.call(this)}}),t.extend("parseMaybeAssign",function(t){return function(){for(var e=null,s=arguments.length,i=Array(s),r=0;r<s;r++)i[r]=arguments[r];if(types.jsxTagStart&&this.match(types.jsxTagStart)){var a=this.state.clone();try{return t.apply(this,i)}catch(t){if(!(t instanceof SyntaxError))throw t;this.state=a,this.state.context.length-=2,e=t}}if(null!=e||this.isRelational("<")){var n=void 0,o=void 0;try{o=this.flowParseTypeParameterDeclaration(),n=t.apply(this,i),n.typeParameters=o,n.start=o.start,n.loc.start=o.loc.start}catch(t){throw e||t}if("ArrowFunctionExpression"===n.type)return n;if(null!=e)throw e;this.raise(o.start,"Expected an arrow function after this type parameter declaration")}return t.apply(this,i)}}),t.extend("parseArrow",function(t){return function(e){if(this.match(types.colon)){var s=this.state.clone();try{var i=this.state.noAnonFunctionType;this.state.noAnonFunctionType=!0;var r=this.flowParseTypeAndPredicateAnnotation();this.state.noAnonFunctionType=i,this.canInsertSemicolon()&&this.unexpected(),this.match(types.arrow)||this.unexpected(),e.returnType=r}catch(t){if(!(t instanceof SyntaxError))throw t;this.state=s}}return t.call(this,e)}}),t.extend("shouldParseArrow",function(t){return function(){return this.match(types.colon)||t.call(this)}})},fromCodePoint=String.fromCodePoint;if(!fromCodePoint){var stringFromCharCode=String.fromCharCode,floor=Math.floor;fromCodePoint=function(){var t=[],e=void 0,s=void 0,i=-1,r=arguments.length;if(!r)return"";for(var a="";++i<r;){var n=Number(arguments[i]);if(!isFinite(n)||n<0||n>1114111||floor(n)!=n)throw RangeError("Invalid code point: "+n);n<=65535?t.push(n):(n-=65536,e=55296+(n>>10),s=n%1024+56320,t.push(e,s)),(i+1==r||t.length>16384)&&(a+=stringFromCharCode.apply(null,t),t.length=0)}return a}}var fromCodePoint$1=fromCodePoint,XHTMLEntities={quot:'"',amp:"&",apos:"'",lt:"<",gt:">",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"},HEX_NUMBER=/^[\da-fA-F]+$/,DECIMAL_NUMBER=/^\d+$/;types$1.j_oTag=new TokContext("<tag",!1),types$1.j_cTag=new TokContext("</tag",!1),types$1.j_expr=new TokContext("<tag>...</tag>",!0,!0),types.jsxName=new TokenType("jsxName"),types.jsxText=new TokenType("jsxText",{beforeExpr:!0}),types.jsxTagStart=new TokenType("jsxTagStart",{startsExpr:!0}),types.jsxTagEnd=new TokenType("jsxTagEnd"),types.jsxTagStart.updateContext=function(){this.state.context.push(types$1.j_expr),this.state.context.push(types$1.j_oTag),this.state.exprAllowed=!1},types.jsxTagEnd.updateContext=function(t){var e=this.state.context.pop();e===types$1.j_oTag&&t===types.slash||e===types$1.j_cTag?(this.state.context.pop(),this.state.exprAllowed=this.curContext()===types$1.j_expr):this.state.exprAllowed=!0};var pp$9=Parser.prototype;pp$9.jsxReadToken=function(){for(var t="",e=this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated JSX contents");var s=this.input.charCodeAt(this.state.pos);switch(s){case 60:case 123:return this.state.pos===this.state.start?60===s&&this.state.exprAllowed?(++this.state.pos,this.finishToken(types.jsxTagStart)):this.getTokenFromCode(s):(t+=this.input.slice(e,this.state.pos),this.finishToken(types.jsxText,t));case 38:t+=this.input.slice(e,this.state.pos),t+=this.jsxReadEntity(),e=this.state.pos;break;default:isNewLine(s)?(t+=this.input.slice(e,this.state.pos),t+=this.jsxReadNewLine(!0),e=this.state.pos):++this.state.pos}}},pp$9.jsxReadNewLine=function(t){var e=this.input.charCodeAt(this.state.pos),s=void 0;return++this.state.pos,13===e&&10===this.input.charCodeAt(this.state.pos)?(++this.state.pos,s=t?"\n":"\r\n"):s=String.fromCharCode(e),++this.state.curLine,this.state.lineStart=this.state.pos,s},pp$9.jsxReadString=function(t){for(var e="",s=++this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated string constant");var i=this.input.charCodeAt(this.state.pos);if(i===t)break;38===i?(e+=this.input.slice(s,this.state.pos),e+=this.jsxReadEntity(),s=this.state.pos):isNewLine(i)?(e+=this.input.slice(s,this.state.pos),e+=this.jsxReadNewLine(!1),s=this.state.pos):++this.state.pos}return e+=this.input.slice(s,this.state.pos++),this.finishToken(types.string,e)},pp$9.jsxReadEntity=function(){for(var t="",e=0,s=void 0,i=this.input[this.state.pos],r=++this.state.pos;this.state.pos<this.input.length&&e++<10;){if(";"===(i=this.input[this.state.pos++])){"#"===t[0]?"x"===t[1]?(t=t.substr(2),HEX_NUMBER.test(t)&&(s=fromCodePoint$1(parseInt(t,16)))):(t=t.substr(1),DECIMAL_NUMBER.test(t)&&(s=fromCodePoint$1(parseInt(t,10)))):s=XHTMLEntities[t];break}t+=i}return s||(this.state.pos=r,"&")},pp$9.jsxReadWord=function(){var t=void 0,e=this.state.pos;do{t=this.input.charCodeAt(++this.state.pos)}while(isIdentifierChar(t)||45===t);return this.finishToken(types.jsxName,this.input.slice(e,this.state.pos))},pp$9.jsxParseIdentifier=function(){var t=this.startNode();return this.match(types.jsxName)?t.name=this.state.value:this.state.type.keyword?t.name=this.state.type.keyword:this.unexpected(),this.next(),this.finishNode(t,"JSXIdentifier")},pp$9.jsxParseNamespacedName=function(){var t=this.state.start,e=this.state.startLoc,s=this.jsxParseIdentifier();if(!this.eat(types.colon))return s;var i=this.startNodeAt(t,e);return i.namespace=s,i.name=this.jsxParseIdentifier(),this.finishNode(i,"JSXNamespacedName")},pp$9.jsxParseElementName=function(){for(var t=this.state.start,e=this.state.startLoc,s=this.jsxParseNamespacedName();this.eat(types.dot);){var i=this.startNodeAt(t,e);i.object=s,i.property=this.jsxParseIdentifier(),s=this.finishNode(i,"JSXMemberExpression")}return s},pp$9.jsxParseAttributeValue=function(){var t=void 0;switch(this.state.type){case types.braceL:if(t=this.jsxParseExpressionContainer(),"JSXEmptyExpression"!==t.expression.type)return t;this.raise(t.start,"JSX attributes must only be assigned a non-empty expression");case types.jsxTagStart:case types.string:return t=this.parseExprAtom(),t.extra=null,t;default:this.raise(this.state.start,"JSX value should be either an expression or a quoted JSX text")}},pp$9.jsxParseEmptyExpression=function(){var t=this.startNodeAt(this.state.lastTokEnd,this.state.lastTokEndLoc);return this.finishNodeAt(t,"JSXEmptyExpression",this.state.start,this.state.startLoc)},pp$9.jsxParseSpreadChild=function(){var t=this.startNode();return this.expect(types.braceL),this.expect(types.ellipsis),t.expression=this.parseExpression(),this.expect(types.braceR),this.finishNode(t,"JSXSpreadChild")},pp$9.jsxParseExpressionContainer=function(){var t=this.startNode();return this.next(),this.match(types.braceR)?t.expression=this.jsxParseEmptyExpression():t.expression=this.parseExpression(),this.expect(types.braceR),this.finishNode(t,"JSXExpressionContainer")},pp$9.jsxParseAttribute=function(){var t=this.startNode();return this.eat(types.braceL)?(this.expect(types.ellipsis),t.argument=this.parseMaybeAssign(),this.expect(types.braceR),this.finishNode(t,"JSXSpreadAttribute")):(t.name=this.jsxParseNamespacedName(),t.value=this.eat(types.eq)?this.jsxParseAttributeValue():null,this.finishNode(t,"JSXAttribute"))},pp$9.jsxParseOpeningElementAt=function(t,e){var s=this.startNodeAt(t,e);for(s.attributes=[],s.name=this.jsxParseElementName();!this.match(types.slash)&&!this.match(types.jsxTagEnd);)s.attributes.push(this.jsxParseAttribute());return s.selfClosing=this.eat(types.slash),this.expect(types.jsxTagEnd),this.finishNode(s,"JSXOpeningElement")},pp$9.jsxParseClosingElementAt=function(t,e){var s=this.startNodeAt(t,e);return s.name=this.jsxParseElementName(),this.expect(types.jsxTagEnd),this.finishNode(s,"JSXClosingElement")},pp$9.jsxParseElementAt=function(t,e){var s=this.startNodeAt(t,e),i=[],r=this.jsxParseOpeningElementAt(t,e),a=null;if(!r.selfClosing){t:for(;;)switch(this.state.type){case types.jsxTagStart:if(t=this.state.start,e=this.state.startLoc,this.next(),this.eat(types.slash)){a=this.jsxParseClosingElementAt(t,e);break t}i.push(this.jsxParseElementAt(t,e));break;case types.jsxText:i.push(this.parseExprAtom());break;case types.braceL:this.lookahead().type===types.ellipsis?i.push(this.jsxParseSpreadChild()):i.push(this.jsxParseExpressionContainer());break;default:this.unexpected()}getQualifiedJSXName(a.name)!==getQualifiedJSXName(r.name)&&this.raise(a.start,"Expected corresponding JSX closing tag for <"+getQualifiedJSXName(r.name)+">")}return s.openingElement=r,s.closingElement=a,s.children=i,this.match(types.relational)&&"<"===this.state.value&&this.raise(this.state.start,"Adjacent JSX elements must be wrapped in an enclosing tag"),this.finishNode(s,"JSXElement")},pp$9.jsxParseElement=function(){var t=this.state.start,e=this.state.startLoc;return this.next(),this.jsxParseElementAt(t,e)};var jsxPlugin=function(t){t.extend("parseExprAtom",function(t){return function(e){if(this.match(types.jsxText)){var s=this.parseLiteral(this.state.value,"JSXText");return s.extra=null,s}return this.match(types.jsxTagStart)?this.jsxParseElement():t.call(this,e)}}),t.extend("readToken",function(t){return function(e){if(this.state.inPropertyName)return t.call(this,e);var s=this.curContext();if(s===types$1.j_expr)return this.jsxReadToken();if(s===types$1.j_oTag||s===types$1.j_cTag){if(isIdentifierStart(e))return this.jsxReadWord();if(62===e)return++this.state.pos,this.finishToken(types.jsxTagEnd);if((34===e||39===e)&&s===types$1.j_oTag)return this.jsxReadString(e)}return 60===e&&this.state.exprAllowed?(++this.state.pos,this.finishToken(types.jsxTagStart)):t.call(this,e)}}),t.extend("updateContext",function(t){return function(e){if(this.match(types.braceL)){var s=this.curContext();s===types$1.j_oTag?this.state.context.push(types$1.braceExpression):s===types$1.j_expr?this.state.context.push(types$1.templateQuasi):t.call(this,e),this.state.exprAllowed=!0}else{if(!this.match(types.slash)||e!==types.jsxTagStart)return t.call(this,e);this.state.context.length-=2,this.state.context.push(types$1.j_cTag),this.state.exprAllowed=!1}}})};plugins.estree=estreePlugin,plugins.flow=flowPlugin,plugins.jsx=jsxPlugin,exports.parse=parse,exports.parseExpression=parseExpression,exports.tokTypes=types;

/***/ }),

/***/ "2Acd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.__esModule=!0;var _helpersMemoiseDecorators=__webpack_require__("EsqK"),_helpersMemoiseDecorators2=_interopRequireDefault(_helpersMemoiseDecorators),_helpersDefineMap=__webpack_require__("83KT"),defineMap=_interopRequireWildcard(_helpersDefineMap),_types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types),metadata={dependencies:["es6.classes"],optional:!0,stage:1};exports.metadata=metadata;var visitor={ObjectExpression:function(e,r,o,i){for(var a=!1,s=0;s<e.properties.length;s++){var p=e.properties[s];if(p.decorators){a=!0;break}}if(a){for(var n={},s=0;s<e.properties.length;s++){var p=e.properties[s];p.decorators&&_helpersMemoiseDecorators2.default(p.decorators,o),"init"!==p.kind||p.method||(p.kind="",p.value=t.functionExpression(null,[],t.blockStatement([t.returnStatement(p.value)]))),defineMap.push(n,p,"initializer",i)}var l=defineMap.toClassObject(n);return l=defineMap.toComputedObjectFromClass(l),t.callExpression(i.addHelper("create-decorated-object"),[l])}}};exports.visitor=visitor;

/***/ }),

/***/ "2GMR":
/***/ (function(module, exports) {

function baseCopy(e,o,r){r||(r={});for(var a=-1,n=o.length;++a<n;){var t=o[a];r[t]=e[t]}return r}module.exports=baseCopy;

/***/ }),

/***/ "2ROs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=!0;var _helpersNameMethod=__webpack_require__("8c8S"),metadata={group:"builtin-basic"};exports.metadata=metadata;var visitor={"ArrowFunctionExpression|FunctionExpression":{exit:function(){if(!this.parentPath.isProperty())return _helpersNameMethod.bare.apply(this,arguments)}},ObjectExpression:function(){for(var e=this.get("properties"),t=e,r=0;r<t.length;r++){var i=t[r],o=i.get("value");if(o.isFunction()){var s=_helpersNameMethod.bare(o.node,i.node,o.scope);s&&o.replaceWith(s)}}}};exports.visitor=visitor;

/***/ }),

/***/ "2Xj+":
/***/ (function(module, exports) {

function initCloneObject(n){var t=n.constructor;return"function"==typeof t&&t instanceof t||(t=Object),new t}module.exports=initCloneObject;

/***/ }),

/***/ "2blZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequire(r){return r&&r.__esModule?r.default:r}function _interopRequireWildcard(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e.default=r,e}function _interopRequireDefault(r){return r&&r.__esModule?r:{default:r}}function register(r){var e=__webpack_require__("Gy5V");return null!=r&&e(r),e}function polyfill(){__webpack_require__("rtSv")}function transformFile(r,e,n){_lodashLangIsFunction2.default(e)&&(n=e,e={}),e.filename=r,_fs2.default.readFile(r,function(r,t){if(r)return n(r);var o;try{o=_transformation2.default(t,e)}catch(r){return n(r)}n(null,o)})}function transformFileSync(r){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return e.filename=r,_transformation2.default(_fs2.default.readFileSync(r,"utf8"),e)}function parse(r){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];e.allowHashBang=!0,e.sourceType="module",e.ecmaVersion=1/0,e.plugins={jsx:!0,flow:!0},e.features={};for(var n in _transformation2.default.pipeline.transformers)e.features[n]=!0;var t=babylon.parse(r,e);if(e.onToken){var o;(o=e.onToken).push.apply(o,t.tokens)}if(e.onComment){var i;(i=e.onComment).push.apply(i,t.comments)}return t.program}exports.__esModule=!0,exports.register=register,exports.polyfill=polyfill,exports.transformFile=transformFile,exports.transformFileSync=transformFileSync,exports.parse=parse;var _lodashLangIsFunction=__webpack_require__("IsuQ"),_lodashLangIsFunction2=_interopRequireDefault(_lodashLangIsFunction),_transformation=__webpack_require__("jcWS"),_transformation2=_interopRequireDefault(_transformation),_babylon=__webpack_require__("FQ77"),babylon=_interopRequireWildcard(_babylon),_util=__webpack_require__("Dahv"),util=_interopRequireWildcard(_util),_fs=__webpack_require__("HLvy"),_fs2=_interopRequireDefault(_fs),_types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types);exports.util=util,exports.acorn=babylon,exports.transform=_transformation2.default,exports.pipeline=_transformation.pipeline,exports.canCompile=_util.canCompile;var _transformationFile=__webpack_require__("lakw");exports.File=_interopRequire(_transformationFile);var _transformationFileOptionsConfig=__webpack_require__("4NQN");exports.options=_interopRequire(_transformationFileOptionsConfig);var _transformationPlugin=__webpack_require__("dMdn");exports.Plugin=_interopRequire(_transformationPlugin);var _transformationTransformer=__webpack_require__("Qmlq");exports.Transformer=_interopRequire(_transformationTransformer);var _transformationPipeline=__webpack_require__("By2g");exports.Pipeline=_interopRequire(_transformationPipeline);var _traversal=__webpack_require__("8JlZ");exports.traverse=_interopRequire(_traversal);var _toolsBuildExternalHelpers=__webpack_require__("kwoC");exports.buildExternalHelpers=_interopRequire(_toolsBuildExternalHelpers);var _package=__webpack_require__("KxVw");exports.version=_package.version,exports.types=t;

/***/ }),

/***/ "2rz+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var _typeof2=__webpack_require__("pFYg"),_typeof3=_interopRequireDefault(_typeof2),hasOwn=Object.prototype.hasOwnProperty;module.exports=function(t){function e(){if(!(this instanceof e))throw new Error("PathVisitor constructor cannot be invoked without 'new'");this._reusableContextStack=[],this._methodNameTable=r(this),this._shouldVisitComments=hasOwn.call(this._methodNameTable,"Block")||hasOwn.call(this._methodNameTable,"Line"),this.Context=o(this),this._visiting=!1,this._changeReported=!1}function r(t){var e=Object.create(null);for(var r in t)/^visit[A-Z]/.test(r)&&(e[r.slice("visit".length)]=!0);for(var i=s.computeSupertypeLookupTable(e),n=Object.create(null),e=Object.keys(i),o=e.length,a=0;a<o;++a){var h=e[a];r="visit"+i[h],u.check(t[r])&&(n[h]=r)}return n}function i(t,e){for(var r in e)hasOwn.call(e,r)&&(t[r]=e[r]);return t}function n(t,r){if(!(t instanceof a))throw new Error("");if(!(r instanceof e))throw new Error("");var i=t.value;if(h.check(i))t.each(r.visitWithoutReset,r);else if(c.check(i)){var n=s.getFieldNames(i);r._shouldVisitComments&&i.comments&&n.indexOf("comments")<0&&n.push("comments");for(var o=n.length,u=[],f=0;f<o;++f){var l=n[f];hasOwn.call(i,l)||(i[l]=s.getFieldValue(i,l)),u.push(t.get(l))}for(var f=0;f<o;++f)r.visitWithoutReset(u[f])}else;return t.value}function o(t){function r(i){if(!(this instanceof r))throw new Error("");if(!(this instanceof e))throw new Error("");if(!(i instanceof a))throw new Error("");Object.defineProperty(this,"visitor",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.currentPath=i,this.needToCallTraverse=!0,Object.seal(this)}if(!(t instanceof e))throw new Error("");var n=r.prototype=Object.create(t);return n.constructor=r,i(n,l),r}var s=t.use(__webpack_require__("QGbD")),a=t.use(__webpack_require__("ITOu")),h=(s.namedTypes.Printable,s.builtInTypes.array),c=s.builtInTypes.object,u=s.builtInTypes.function;e.fromMethodsObject=function(t){function r(){if(!(this instanceof r))throw new Error("Visitor constructor cannot be invoked without 'new'");e.call(this)}if(t instanceof e)return t;if(!c.check(t))return new e;var n=r.prototype=Object.create(f);return n.constructor=r,i(n,t),i(r,e),u.assert(r.fromMethodsObject),u.assert(r.visit),new r},e.visit=function(t,r){return e.fromMethodsObject(r).visit(t)};var f=e.prototype;f.visit=function(){if(this._visiting)throw new Error("Recursively calling visitor.visit(path) resets visitor state. Try this.visit(path) or this.traverse(path) instead.");this._visiting=!0,this._changeReported=!1,this._abortRequested=!1;for(var t=arguments.length,e=new Array(t),r=0;r<t;++r)e[r]=arguments[r];e[0]instanceof a||(e[0]=new a({root:e[0]}).get("root")),this.reset.apply(this,e);try{var i=this.visitWithoutReset(e[0]),n=!0}finally{if(this._visiting=!1,!n&&this._abortRequested)return e[0].value}return i},f.AbortRequest=function(){},f.abort=function(){var t=this;t._abortRequested=!0;var e=new t.AbortRequest;throw e.cancel=function(){t._abortRequested=!1},e},f.reset=function(t){},f.visitWithoutReset=function(t){if(this instanceof this.Context)return this.visitor.visitWithoutReset(t);if(!(t instanceof a))throw new Error("");var e=t.value,r=e&&"object"===(void 0===e?"undefined":(0,_typeof3.default)(e))&&"string"==typeof e.type&&this._methodNameTable[e.type];if(!r)return n(t,this);var i=this.acquireContext(t);try{return i.invokeVisitorMethod(r)}finally{this.releaseContext(i)}},f.acquireContext=function(t){return 0===this._reusableContextStack.length?new this.Context(t):this._reusableContextStack.pop().reset(t)},f.releaseContext=function(t){if(!(t instanceof this.Context))throw new Error("");this._reusableContextStack.push(t),t.currentPath=null},f.reportChanged=function(){this._changeReported=!0},f.wasChangeReported=function(){return this._changeReported};var l=Object.create(null);return l.reset=function(t){if(!(this instanceof this.Context))throw new Error("");if(!(t instanceof a))throw new Error("");return this.currentPath=t,this.needToCallTraverse=!0,this},l.invokeVisitorMethod=function(t){if(!(this instanceof this.Context))throw new Error("");if(!(this.currentPath instanceof a))throw new Error("");var e=this.visitor[t].call(this,this.currentPath);if(!1===e?this.needToCallTraverse=!1:void 0!==e&&(this.currentPath=this.currentPath.replace(e)[0],this.needToCallTraverse&&this.traverse(this.currentPath)),!1!==this.needToCallTraverse)throw new Error("Must either call this.traverse or return false in "+t);var r=this.currentPath;return r&&r.value},l.traverse=function(t,r){if(!(this instanceof this.Context))throw new Error("");if(!(t instanceof a))throw new Error("");if(!(this.currentPath instanceof a))throw new Error("");return this.needToCallTraverse=!1,n(t,e.fromMethodsObject(r||this.visitor))},l.visit=function(t,r){if(!(this instanceof this.Context))throw new Error("");if(!(t instanceof a))throw new Error("");if(!(this.currentPath instanceof a))throw new Error("");return this.needToCallTraverse=!1,e.fromMethodsObject(r||this.visitor).visitWithoutReset(t)},l.reportChanged=function(){this.visitor.reportChanged()},l.abort=function(){this.needToCallTraverse=!1,this.visitor.abort()},e};

/***/ }),

/***/ "2uTn":
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__("Prqb");

/***/ }),

/***/ "3GA5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function PrintResult(e,t){assert.ok(this instanceof PrintResult),isString.assert(e),this.code=e,t&&(isObject.assert(t),this.map=t)}function Printer(e){function t(e){return assert.ok(e instanceof FastPath),printComments(e,a)}function a(e,a){if(a)return t(e);if(assert.ok(e instanceof FastPath),!s){var r=o.tabWidth,c=e.getNode().loc;if(c&&c.lines&&c.lines.guessTabWidth){o.tabWidth=c.lines.guessTabWidth();var i=n(e);return o.tabWidth=r,i}}return n(e)}function n(e){var t=getReprinter(e);return t?maybeAddParens(e,t(a)):r(e)}function r(e,a){return a?printComments(e,r):genericPrint(e,o,t)}function c(e){return genericPrint(e,o,c)}assert.ok(this instanceof Printer);var s=e&&e.tabWidth,o=normalizeOptions(e);assert.notStrictEqual(o,e),o.sourceFileName=null,this.print=function(e){if(!e)return emptyPrintResult;var t=a(FastPath.from(e),!0);return new PrintResult(t.toString(o),util.composeSourceMaps(o.inputSourceMap,t.getSourceMap(o.sourceMapName,o.sourceRoot)))},this.printGenerically=function(e){if(!e)return emptyPrintResult;var t=FastPath.from(e),a=o.reuseWhitespace;o.reuseWhitespace=!1;var n=new PrintResult(c(t).toString(o));return o.reuseWhitespace=a,n}}function maybeAddParens(e,t){return e.needsParens()?concat(["(",t,")"]):t}function genericPrint(e,t,a){assert.ok(e instanceof FastPath);var n=e.getValue(),r=[],c=!1,s=genericPrintNoParens(e,t,a);return!n||s.isEmpty()?s:(n.decorators&&n.decorators.length>0&&!util.getParentExportDeclaration(e)?e.each(function(e){r.push(a(e),"\n")},"decorators"):util.isExportDeclaration(n)&&n.declaration&&n.declaration.decorators?e.each(function(e){r.push(a(e),"\n")},"declaration","decorators"):c=e.needsParens(),c&&r.unshift("("),r.push(s),c&&r.push(")"),concat(r))}function genericPrintNoParens(e,t,a){var n=e.getValue();if(!n)return fromString("");if("string"==typeof n)return fromString(n,t);namedTypes.Printable.assert(n);var r=[];switch(n.type){case"File":return e.call(a,"program");case"Program":return n.directives&&e.each(function(e){r.push(a(e),";\n")},"directives"),r.push(e.call(function(e){return printStatementSequence(e,t,a)},"body")),concat(r);case"Noop":case"EmptyStatement":return fromString("");case"ExpressionStatement":return concat([e.call(a,"expression"),";"]);case"ParenthesizedExpression":return concat(["(",e.call(a,"expression"),")"]);case"BinaryExpression":case"LogicalExpression":case"AssignmentExpression":return fromString(" ").join([e.call(a,"left"),n.operator,e.call(a,"right")]);case"AssignmentPattern":return concat([e.call(a,"left")," = ",e.call(a,"right")]);case"MemberExpression":r.push(e.call(a,"object"));var c=e.call(a,"property");return n.computed?r.push("[",c,"]"):r.push(".",c),concat(r);case"MetaProperty":return concat([e.call(a,"meta"),".",e.call(a,"property")]);case"BindExpression":return n.object&&r.push(e.call(a,"object")),r.push("::",e.call(a,"callee")),concat(r);case"Path":return fromString(".").join(n.body);case"Identifier":return concat([fromString(n.name,t),n.optional?"?":"",e.call(a,"typeAnnotation")]);case"SpreadElement":case"SpreadElementPattern":case"RestProperty":case"SpreadProperty":case"SpreadPropertyPattern":case"ObjectTypeSpreadProperty":case"RestElement":return concat(["...",e.call(a,"argument"),e.call(a,"typeAnnotation")]);case"FunctionDeclaration":case"FunctionExpression":case"TSDeclareFunction":return n.declare&&r.push("declare "),n.async&&r.push("async "),r.push("function"),n.generator&&r.push("*"),n.id&&r.push(" ",e.call(a,"id"),e.call(a,"typeParameters")),r.push("(",printFunctionParams(e,t,a),")",e.call(a,"returnType")),n.body&&r.push(" ",e.call(a,"body")),concat(r);case"ArrowFunctionExpression":return n.async&&r.push("async "),n.typeParameters&&r.push(e.call(a,"typeParameters")),t.arrowParensAlways||1!==n.params.length||n.rest||"Identifier"!==n.params[0].type||n.params[0].typeAnnotation||n.returnType?r.push("(",printFunctionParams(e,t,a),")",e.call(a,"returnType")):r.push(e.call(a,"params",0)),r.push(" => ",e.call(a,"body")),concat(r);case"MethodDefinition":return printMethod(e,t,a);case"YieldExpression":return r.push("yield"),n.delegate&&r.push("*"),n.argument&&r.push(" ",e.call(a,"argument")),concat(r);case"AwaitExpression":return r.push("await"),n.all&&r.push("*"),n.argument&&r.push(" ",e.call(a,"argument")),concat(r);case"ModuleDeclaration":return r.push("module",e.call(a,"id")),n.source?(assert.ok(!n.body),r.push("from",e.call(a,"source"))):r.push(e.call(a,"body")),fromString(" ").join(r);case"ImportSpecifier":return n.importKind&&"value"!==n.importKind&&r.push(n.importKind+" "),n.imported?(r.push(e.call(a,"imported")),n.local&&n.local.name!==n.imported.name&&r.push(" as ",e.call(a,"local"))):n.id&&(r.push(e.call(a,"id")),n.name&&r.push(" as ",e.call(a,"name"))),concat(r);case"ExportSpecifier":return n.local?(r.push(e.call(a,"local")),n.exported&&n.exported.name!==n.local.name&&r.push(" as ",e.call(a,"exported"))):n.id&&(r.push(e.call(a,"id")),n.name&&r.push(" as ",e.call(a,"name"))),concat(r);case"ExportBatchSpecifier":return fromString("*");case"ImportNamespaceSpecifier":return r.push("* as "),n.local?r.push(e.call(a,"local")):n.id&&r.push(e.call(a,"id")),concat(r);case"ImportDefaultSpecifier":return n.local?e.call(a,"local"):e.call(a,"id");case"TSExportAssignment":return concat(["export = ",e.call(a,"expression")]);case"ExportDeclaration":case"ExportDefaultDeclaration":case"ExportNamedDeclaration":return printExportDeclaration(e,t,a);case"ExportAllDeclaration":return r.push("export *"),n.exported&&r.push(" as ",e.call(a,"exported")),r.push(" from ",e.call(a,"source")),concat(r);case"TSNamespaceExportDeclaration":return r.push("export as namespace ",e.call(a,"id")),maybeAddSemicolon(concat(r));case"ExportNamespaceSpecifier":return concat(["* as ",e.call(a,"exported")]);case"ExportDefaultSpecifier":return e.call(a,"exported");case"Import":return fromString("import",t);case"ImportDeclaration":if(r.push("import "),n.importKind&&"value"!==n.importKind&&r.push(n.importKind+" "),n.specifiers&&n.specifiers.length>0){var s=[],o=[];if(e.each(function(e){var t=e.getValue();"ImportSpecifier"===t.type?o.push(a(e)):"ImportDefaultSpecifier"!==t.type&&"ImportNamespaceSpecifier"!==t.type||s.push(a(e))},"specifiers"),s.forEach(function(e,t){t>0&&r.push(", "),r.push(e)}),o.length>0){var i=fromString(", ").join(o);i.getLineLength(1)>t.wrapColumn&&(i=concat([fromString(",\n").join(o).indent(t.tabWidth),","])),s.length>0&&r.push(", "),i.length>1?r.push("{\n",i,"\n}"):t.objectCurlySpacing?r.push("{ ",i," }"):r.push("{",i,"}")}r.push(" from ")}return r.push(e.call(a,"source"),";"),concat(r);case"BlockStatement":var l=e.call(function(e){return printStatementSequence(e,t,a)},"body");return!l.isEmpty()||n.directives&&0!==n.directives.length?(r.push("{\n"),n.directives&&e.each(function(e){r.push(a(e).indent(t.tabWidth),";",n.directives.length>1||!l.isEmpty()?"\n":"")},"directives"),r.push(l.indent(t.tabWidth)),r.push("\n}"),concat(r)):fromString("{}");case"ReturnStatement":if(r.push("return"),n.argument){var u=e.call(a,"argument");u.startsWithComment()||u.length>1&&namedTypes.JSXElement&&namedTypes.JSXElement.check(n.argument)?r.push(" (\n",u.indent(t.tabWidth),"\n)"):r.push(" ",u)}return r.push(";"),concat(r);case"CallExpression":return concat([e.call(a,"callee"),printArgumentsList(e,t,a)]);case"ObjectExpression":case"ObjectPattern":case"ObjectTypeAnnotation":var m=!1,h="ObjectTypeAnnotation"===n.type,d=t.flowObjectCommas?",":h?";":",",y=[];h&&y.push("indexers","callProperties"),y.push("properties");var f=0;y.forEach(function(e){f+=n[e].length});var S=h&&1===f||0===f,g=n.exact?"{|":"{",T=n.exact?"|}":"}";r.push(S?g:g+"\n");var b=r.length-1,v=0;return y.forEach(function(n){e.each(function(e){var n=a(e);S||(n=n.indent(t.tabWidth));var c=!h&&n.length>1;c&&m&&r.push("\n"),r.push(n),v<f-1?(r.push(d+(c?"\n\n":"\n")),m=!c):1!==f&&h?r.push(d):!S&&util.isTrailingCommaEnabled(t,"objects")&&r.push(d),v++},n)}),r.push(S?T:"\n"+T),0!==v&&S&&t.objectCurlySpacing&&(r[b]=g+" ",r[r.length-1]=" "+T),concat(r);case"PropertyPattern":return concat([e.call(a,"key"),": ",e.call(a,"pattern")]);case"ObjectProperty":case"Property":if(n.method||"get"===n.kind||"set"===n.kind)return printMethod(e,t,a);var x=e.call(a,"key");return n.computed?r.push("[",x,"]"):r.push(x),n.shorthand||r.push(": ",e.call(a,"value")),concat(r);case"ClassMethod":case"ObjectMethod":case"TSDeclareMethod":return printMethod(e,t,a);case"Decorator":return concat(["@",e.call(a,"expression")]);case"ArrayExpression":case"ArrayPattern":var P=n.elements,f=P.length,E=e.map(a,"elements"),A=fromString(", ").join(E),S=A.getLineLength(1)<=t.wrapColumn;return S?t.arrayBracketSpacing?r.push("[ "):r.push("["):r.push("[\n"),e.each(function(e){var a=e.getName();if(e.getValue()){var n=E[a];S?a>0&&r.push(" "):n=n.indent(t.tabWidth),r.push(n),(a<f-1||!S&&util.isTrailingCommaEnabled(t,"arrays"))&&r.push(","),S||r.push("\n")}else r.push(",")},"elements"),S&&t.arrayBracketSpacing?r.push(" ]"):r.push("]"),concat(r);case"SequenceExpression":return fromString(", ").join(e.map(a,"expressions"));case"ThisExpression":return fromString("this");case"Super":return fromString("super");case"NullLiteral":return fromString("null");case"RegExpLiteral":return fromString(n.extra.raw);case"BigIntLiteral":return fromString(n.value+"n");case"NumericLiteral":return n.extra&&"string"==typeof n.extra.raw&&Number(n.extra.raw)===n.value?fromString(n.extra.raw,t):fromString(n.value,t);case"BooleanLiteral":case"StringLiteral":case"Literal":return"number"==typeof n.value&&"string"==typeof n.raw&&Number(n.raw)===n.value?fromString(n.raw,t):"string"!=typeof n.value?fromString(n.value,t):fromString(nodeStr(n.value,t),t);case"Directive":return e.call(a,"value");case"DirectiveLiteral":return fromString(nodeStr(n.value,t));case"ModuleSpecifier":if(n.local)throw new Error("The ESTree ModuleSpecifier type should be abstract");return fromString(nodeStr(n.value,t),t);case"UnaryExpression":return r.push(n.operator),/[a-z]$/.test(n.operator)&&r.push(" "),r.push(e.call(a,"argument")),concat(r);case"UpdateExpression":return r.push(e.call(a,"argument"),n.operator),n.prefix&&r.reverse(),concat(r);case"ConditionalExpression":return concat(["(",e.call(a,"test")," ? ",e.call(a,"consequent")," : ",e.call(a,"alternate"),")"]);case"NewExpression":r.push("new ",e.call(a,"callee"));return n.arguments&&r.push(printArgumentsList(e,t,a)),concat(r);case"VariableDeclaration":n.declare&&r.push("declare "),r.push(n.kind," ");var w=0,E=e.map(function(e){var t=a(e);return w=Math.max(t.length,w),t},"declarations");1===w?r.push(fromString(", ").join(E)):E.length>1?r.push(fromString(",\n").join(E).indentTail(n.kind.length+1)):r.push(E[0]);var D=e.getParentNode();return namedTypes.ForStatement.check(D)||namedTypes.ForInStatement.check(D)||namedTypes.ForOfStatement&&namedTypes.ForOfStatement.check(D)||namedTypes.ForAwaitStatement&&namedTypes.ForAwaitStatement.check(D)||r.push(";"),concat(r);case"VariableDeclarator":return n.init?fromString(" = ").join([e.call(a,"id"),e.call(a,"init")]):e.call(a,"id");case"WithStatement":return concat(["with (",e.call(a,"object"),") ",e.call(a,"body")]);case"IfStatement":var C=adjustClause(e.call(a,"consequent"),t),r=["if (",e.call(a,"test"),")",C];return n.alternate&&r.push(endsWithBrace(C)?" else":"\nelse",adjustClause(e.call(a,"alternate"),t)),concat(r);case"ForStatement":var j=e.call(a,"init"),L=j.length>1?";\n":"; ",N=fromString(L).join([j,e.call(a,"test"),e.call(a,"update")]).indentTail("for (".length),k=concat(["for (",N,")"]),M=adjustClause(e.call(a,"body"),t),r=[k];return k.length>1&&(r.push("\n"),M=M.trimLeft()),r.push(M),concat(r);case"WhileStatement":return concat(["while (",e.call(a,"test"),")",adjustClause(e.call(a,"body"),t)]);case"ForInStatement":return concat([n.each?"for each (":"for (",e.call(a,"left")," in ",e.call(a,"right"),")",adjustClause(e.call(a,"body"),t)]);case"ForOfStatement":case"ForAwaitStatement":return r.push("for "),(n.await||"ForAwaitStatement"===n.type)&&r.push("await "),r.push("(",e.call(a,"left")," of ",e.call(a,"right"),")",adjustClause(e.call(a,"body"),t)),concat(r);case"DoWhileStatement":var F=concat(["do",adjustClause(e.call(a,"body"),t)]),r=[F];return endsWithBrace(F)?r.push(" while"):r.push("\nwhile"),r.push(" (",e.call(a,"test"),");"),concat(r);case"DoExpression":var I=e.call(function(e){return printStatementSequence(e,t,a)},"body");return concat(["do {\n",I.indent(t.tabWidth),"\n}"]);case"BreakStatement":return r.push("break"),n.label&&r.push(" ",e.call(a,"label")),r.push(";"),concat(r);case"ContinueStatement":return r.push("continue"),n.label&&r.push(" ",e.call(a,"label")),r.push(";"),concat(r);case"LabeledStatement":return concat([e.call(a,"label"),":\n",e.call(a,"body")]);case"TryStatement":return r.push("try ",e.call(a,"block")),n.handler?r.push(" ",e.call(a,"handler")):n.handlers&&e.each(function(e){r.push(" ",a(e))},"handlers"),n.finalizer&&r.push(" finally ",e.call(a,"finalizer")),concat(r);case"CatchClause":return r.push("catch "),n.param&&r.push("(",e.call(a,"param")),n.guard&&r.push(" if ",e.call(a,"guard")),n.param&&r.push(") "),r.push(e.call(a,"body")),concat(r);case"ThrowStatement":return concat(["throw ",e.call(a,"argument"),";"]);case"SwitchStatement":return concat(["switch (",e.call(a,"discriminant"),") {\n",fromString("\n").join(e.map(a,"cases")),"\n}"]);case"SwitchCase":return n.test?r.push("case ",e.call(a,"test"),":"):r.push("default:"),n.consequent.length>0&&r.push("\n",e.call(function(e){return printStatementSequence(e,t,a)},"consequent").indent(t.tabWidth)),concat(r);case"DebuggerStatement":return fromString("debugger;");case"JSXAttribute":return r.push(e.call(a,"name")),n.value&&r.push("=",e.call(a,"value")),concat(r);case"JSXIdentifier":return fromString(n.name,t);case"JSXNamespacedName":return fromString(":").join([e.call(a,"namespace"),e.call(a,"name")]);case"JSXMemberExpression":return fromString(".").join([e.call(a,"object"),e.call(a,"property")]);case"JSXSpreadAttribute":return concat(["{...",e.call(a,"argument"),"}"]);case"JSXSpreadChild":return concat(["{...",e.call(a,"expression"),"}"]);case"JSXExpressionContainer":return concat(["{",e.call(a,"expression"),"}"]);case"JSXElement":case"JSXFragment":var q="opening"+("JSXElement"===n.type?"Element":"Fragment"),X="closing"+("JSXElement"===n.type?"Element":"Fragment"),O=e.call(a,q);if(n[q].selfClosing)return assert.ok(!n[X],"unexpected "+X+" element in self-closing "+n.type),O;var W=concat(e.map(function(e){var t=e.getValue();if(namedTypes.Literal.check(t)&&"string"==typeof t.value){if(/\S/.test(t.value))return t.value.replace(/^\s+|\s+$/g,"");if(/\n/.test(t.value))return"\n"}return a(e)},"children")).indentTail(t.tabWidth),J=e.call(a,X);return concat([O,W,J]);case"JSXOpeningElement":r.push("<",e.call(a,"name"));var R=[];e.each(function(e){R.push(" ",a(e))},"attributes");var B=concat(R);return(B.length>1||B.getLineLength(1)>t.wrapColumn)&&(R.forEach(function(e,t){" "===e&&(assert.strictEqual(t%2,0),R[t]="\n")}),B=concat(R).indentTail(t.tabWidth)),r.push(B,n.selfClosing?" />":">"),concat(r);case"JSXClosingElement":return concat(["</",e.call(a,"name"),">"]);case"JSXOpeningFragment":return fromString("<>");case"JSXClosingFragment":return fromString("</>");case"JSXText":return fromString(n.value,t);case"JSXEmptyExpression":return fromString("");case"TypeAnnotatedIdentifier":return concat([e.call(a,"annotation")," ",e.call(a,"identifier")]);case"ClassBody":return 0===n.body.length?fromString("{}"):concat(["{\n",e.call(function(e){return printStatementSequence(e,t,a)},"body").indent(t.tabWidth),"\n}"]);case"ClassPropertyDefinition":return r.push("static ",e.call(a,"definition")),namedTypes.MethodDefinition.check(n.definition)||r.push(";"),concat(r);case"ClassProperty":"string"==typeof n.accessibility&&r.push(n.accessibility," "),n.static&&r.push("static "),n.abstract&&r.push("abstract "),n.readonly&&r.push("readonly ");var x=e.call(a,"key");return n.computed&&(x=concat(["[",x,"]"])),n.variance&&(x=concat([printVariance(e,a),x])),r.push(x),n.optional&&r.push("?"),n.typeAnnotation&&r.push(e.call(a,"typeAnnotation")),n.value&&r.push(" = ",e.call(a,"value")),r.push(";"),concat(r);case"ClassDeclaration":case"ClassExpression":return n.declare&&r.push("declare "),n.abstract&&r.push("abstract "),r.push("class"),n.id&&r.push(" ",e.call(a,"id")),n.typeParameters&&r.push(e.call(a,"typeParameters")),n.superClass&&r.push(" extends ",e.call(a,"superClass"),e.call(a,"superTypeParameters")),n.implements&&n.implements.length>0&&r.push(" implements ",fromString(", ").join(e.map(a,"implements"))),r.push(" ",e.call(a,"body")),concat(r);case"TemplateElement":return fromString(n.value.raw,t).lockIndentTail();case"TemplateLiteral":var V=e.map(a,"expressions");return r.push("`"),e.each(function(e){var t=e.getName();r.push(a(e)),t<V.length&&r.push("${",V[t],"}")},"quasis"),r.push("`"),concat(r).lockIndentTail();case"TaggedTemplateExpression":return concat([e.call(a,"tag"),e.call(a,"quasi")]);case"Node":case"Printable":case"SourceLocation":case"Position":case"Statement":case"Function":case"Pattern":case"Expression":case"Declaration":case"Specifier":case"NamedSpecifier":case"Comment":case"MemberTypeAnnotation":case"TupleTypeAnnotation":case"Type":case"TSHasOptionalTypeParameters":case"TSHasOptionalTypeAnnotation":throw new Error("unprintable type: "+JSON.stringify(n.type));case"CommentBlock":case"Block":return concat(["/*",fromString(n.value,t),"*/"]);case"CommentLine":case"Line":return concat(["//",fromString(n.value,t)]);case"TypeAnnotation":return n.typeAnnotation?("FunctionTypeAnnotation"!==n.typeAnnotation.type&&r.push(": "),r.push(e.call(a,"typeAnnotation")),concat(r)):fromString("");case"ExistentialTypeParam":case"ExistsTypeAnnotation":return fromString("*",t);case"EmptyTypeAnnotation":return fromString("empty",t);case"AnyTypeAnnotation":return fromString("any",t);case"MixedTypeAnnotation":return fromString("mixed",t);case"ArrayTypeAnnotation":return concat([e.call(a,"elementType"),"[]"]);case"BooleanTypeAnnotation":return fromString("boolean",t);case"BooleanLiteralTypeAnnotation":return assert.strictEqual((0,_typeof3.default)(n.value),"boolean"),fromString(""+n.value,t);case"DeclareClass":return printFlowDeclaration(e,["class ",e.call(a,"id")," ",e.call(a,"body")]);case"DeclareFunction":return printFlowDeclaration(e,["function ",e.call(a,"id"),";"]);case"DeclareModule":return printFlowDeclaration(e,["module ",e.call(a,"id")," ",e.call(a,"body")]);case"DeclareModuleExports":return printFlowDeclaration(e,["module.exports",e.call(a,"typeAnnotation")]);case"DeclareVariable":return printFlowDeclaration(e,["var ",e.call(a,"id"),";"]);case"DeclareExportDeclaration":case"DeclareExportAllDeclaration":return concat(["declare ",printExportDeclaration(e,t,a)]);case"FunctionTypeAnnotation":var K=e.getParentNode(0),z=!(namedTypes.ObjectTypeCallProperty.check(K)||namedTypes.DeclareFunction.check(e.getParentNode(2)));return z&&!namedTypes.FunctionTypeParam.check(K)&&r.push(": "),r.push("(",fromString(", ").join(e.map(a,"params")),")"),n.returnType&&r.push(z?" => ":": ",e.call(a,"returnType")),concat(r);case"FunctionTypeParam":return concat([e.call(a,"name"),n.optional?"?":"",": ",e.call(a,"typeAnnotation")]);case"GenericTypeAnnotation":return concat([e.call(a,"id"),e.call(a,"typeParameters")]);case"DeclareInterface":r.push("declare ");case"InterfaceDeclaration":case"TSInterfaceDeclaration":return n.declare&&r.push("declare "),r.push("interface ",e.call(a,"id"),e.call(a,"typeParameters")," "),n.extends&&n.extends.length>0&&r.push("extends ",fromString(", ").join(e.map(a,"extends"))," "),n.body&&r.push(e.call(a,"body")),concat(r);case"ClassImplements":case"InterfaceExtends":return concat([e.call(a,"id"),e.call(a,"typeParameters")]);case"IntersectionTypeAnnotation":return fromString(" & ").join(e.map(a,"types"));case"NullableTypeAnnotation":return concat(["?",e.call(a,"typeAnnotation")]);case"NullLiteralTypeAnnotation":return fromString("null",t);case"ThisTypeAnnotation":return fromString("this",t);case"NumberTypeAnnotation":return fromString("number",t);case"ObjectTypeCallProperty":return e.call(a,"value");case"ObjectTypeIndexer":return concat([printVariance(e,a),"[",e.call(a,"id"),": ",e.call(a,"key"),"]: ",e.call(a,"value")]);case"ObjectTypeProperty":return concat([printVariance(e,a),e.call(a,"key"),n.optional?"?":"",": ",e.call(a,"value")]);case"QualifiedTypeIdentifier":return concat([e.call(a,"qualification"),".",e.call(a,"id")]);case"StringLiteralTypeAnnotation":return fromString(nodeStr(n.value,t),t);case"NumberLiteralTypeAnnotation":case"NumericLiteralTypeAnnotation":return assert.strictEqual((0,_typeof3.default)(n.value),"number"),fromString(JSON.stringify(n.value),t);case"StringTypeAnnotation":return fromString("string",t);case"DeclareTypeAlias":r.push("declare ");case"TypeAlias":return concat(["type ",e.call(a,"id"),e.call(a,"typeParameters")," = ",e.call(a,"right"),";"]);case"DeclareOpaqueType":r.push("declare ");case"OpaqueType":return r.push("opaque type ",e.call(a,"id"),e.call(a,"typeParameters")),n.supertype&&r.push(": ",e.call(a,"supertype")),n.impltype&&r.push(" = ",e.call(a,"impltype")),r.push(";"),concat(r);case"TypeCastExpression":return concat(["(",e.call(a,"expression"),e.call(a,"typeAnnotation"),")"]);case"TypeParameterDeclaration":case"TypeParameterInstantiation":return concat(["<",fromString(", ").join(e.map(a,"params")),">"]);case"Variance":return fromString("plus"===n.kind?"+":"minus"===n.kind?"-":"");case"TypeParameter":return n.variance&&r.push(printVariance(e,a)),r.push(e.call(a,"name")),n.bound&&r.push(e.call(a,"bound")),n.default&&r.push("=",e.call(a,"default")),concat(r);case"TypeofTypeAnnotation":return concat([fromString("typeof ",t),e.call(a,"argument")]);case"UnionTypeAnnotation":return fromString(" | ").join(e.map(a,"types"));case"VoidTypeAnnotation":return fromString("void",t);case"NullTypeAnnotation":return fromString("null",t);case"TSType":throw new Error("unprintable type: "+JSON.stringify(n.type));case"TSNumberKeyword":return fromString("number",t);case"TSObjectKeyword":return fromString("object",t);case"TSBooleanKeyword":return fromString("boolean",t);case"TSStringKeyword":return fromString("string",t);case"TSSymbolKeyword":return fromString("symbol",t);case"TSAnyKeyword":return fromString("any",t);case"TSVoidKeyword":return fromString("void",t);case"TSThisType":return fromString("this",t);case"TSNullKeyword":return fromString("null",t);case"TSUndefinedKeyword":return fromString("undefined",t);case"TSNeverKeyword":return fromString("never",t);case"TSArrayType":return concat([e.call(a,"elementType"),"[]"]);case"TSLiteralType":return e.call(a,"literal");case"TSUnionType":return fromString(" | ").join(e.map(a,"types"));case"TSIntersectionType":return fromString(" & ").join(e.map(a,"types"));case"TSConditionalType":return r.push(e.call(a,"checkType")," extends ",e.call(a,"extendsType")," ? ",e.call(a,"trueType")," : ",e.call(a,"falseType")),concat(r);case"TSInferType":return r.push("infer ",e.call(a,"typeParameter")),concat(r);case"TSParenthesizedType":return concat(["(",e.call(a,"typeAnnotation"),")"]);case"TSFunctionType":case"TSConstructorType":return concat([e.call(a,"typeParameters"),"(",printFunctionParams(e,t,a),")",e.call(a,"typeAnnotation")]);case"TSMappedType":return r.push(n.readonly?"readonly ":"","[",e.call(a,"typeParameter"),"]",n.optional?"?":""),n.typeAnnotation&&r.push(": ",e.call(a,"typeAnnotation"),";"),concat(["{\n",concat(r).indent(t.tabWidth),"\n}"]);case"TSTupleType":return concat(["[",fromString(", ").join(e.map(a,"elementTypes")),"]"]);case"TSIndexedAccessType":return concat([e.call(a,"objectType"),"[",e.call(a,"indexType"),"]"]);case"TSTypeOperator":return concat([e.call(a,"operator")," ",e.call(a,"typeAnnotation")]);case"TSTypeLiteral":var Q=fromString(",\n").join(e.map(a,"members"));return Q.isEmpty()?fromString("{}",t):(r.push("{\n",Q.indent(t.tabWidth),"\n}"),concat(r));case"TSEnumMember":return r.push(e.call(a,"id")),n.initializer&&r.push(" = ",e.call(a,"initializer")),concat(r);case"TSTypeQuery":return concat(["typeof ",e.call(a,"exprName")]);case"TSParameterProperty":return n.accessibility&&r.push(n.accessibility," "),n.export&&r.push("export "),n.static&&r.push("static "),n.readonly&&r.push("readonly "),r.push(e.call(a,"parameter")),concat(r);case"TSTypeReference":return concat([e.call(a,"typeName"),e.call(a,"typeParameters")]);case"TSQualifiedName":return concat([e.call(a,"left"),".",e.call(a,"right")]);case"TSAsExpression":var _=n.extra&&!0===n.extra.parenthesized;return r=[],_&&r.push("("),r.push(e.call(a,"expression"),fromString(" as "),e.call(a,"typeAnnotation")),_&&r.push(")"),concat(r);case"TSNonNullExpression":return concat([e.call(a,"expression"),"!"]);case"TSTypeAnnotation":var K=e.getParentNode(0),G=": ";namedTypes.TSFunctionType.check(K);return namedTypes.TSFunctionType.check(K)&&(G=" => "),namedTypes.TSTypePredicate.check(K)&&(G=" is "),concat([G,e.call(a,"typeAnnotation")]);case"TSIndexSignature":return concat([n.readonly?"readonly ":"","[",e.map(a,"parameters"),"]",e.call(a,"typeAnnotation")]);case"TSPropertySignature":return r.push(printVariance(e,a),n.readonly?"readonly ":""),n.computed?r.push("[",e.call(a,"key"),"]"):r.push(e.call(a,"key")),r.push(n.optional?"?":"",e.call(a,"typeAnnotation")),concat(r);case"TSMethodSignature":return n.computed?r.push("[",e.call(a,"key"),"]"):r.push(e.call(a,"key")),n.optional&&r.push("?"),r.push(e.call(a,"typeParameters"),"(",printFunctionParams(e,t,a),")",e.call(a,"typeAnnotation")),concat(r);case"TSTypePredicate":return concat([e.call(a,"parameterName"),e.call(a,"typeAnnotation")]);case"TSCallSignatureDeclaration":return concat([e.call(a,"typeParameters"),"(",printFunctionParams(e,t,a),")",e.call(a,"typeAnnotation")]);case"TSConstructSignatureDeclaration":return n.typeParameters?r.push("new",e.call(a,"typeParameters")):r.push("new "),r.push("(",printFunctionParams(e,t,a),")",e.call(a,"typeAnnotation")),concat(r);case"TSTypeAliasDeclaration":return concat(["type ",e.call(a,"id"),e.call(a,"typeParameters")," = ",e.call(a,"typeAnnotation"),";"]);case"TSTypeParameter":r.push(e.call(a,"name"));var K=e.getParentNode(0),U=namedTypes.TSMappedType.check(K);return n.constraint&&r.push(U?" in ":" extends ",e.call(a,"constraint")),n.default&&r.push(" = ",e.call(a,"default")),concat(r);case"TSTypeAssertion":var _=n.extra&&!0===n.extra.parenthesized;return _&&r.push("("),r.push("<",e.call(a,"typeAnnotation"),"> ",e.call(a,"expression")),_&&r.push(")"),concat(r);case"TSTypeParameterDeclaration":case"TSTypeParameterInstantiation":return concat(["<",fromString(", ").join(e.map(a,"params")),">"]);case"TSEnumDeclaration":r.push(n.declare?"declare ":"",n.const?"const ":"","enum ",e.call(a,"id"));var H=fromString(",\n").join(e.map(a,"members"));return H.isEmpty()?r.push(" {}"):r.push(" {\n",H.indent(t.tabWidth),"\n}"),concat(r);case"TSExpressionWithTypeArguments":return concat([e.call(a,"expression"),e.call(a,"typeParameters")]);case"TSInterfaceBody":var $=fromString(";\n").join(e.map(a,"body"));return $.isEmpty()?fromString("{}",t):concat(["{\n",$.indent(t.tabWidth),";","\n}"]);case"TSImportEqualsDeclaration":return n.isExport&&r.push("export "),r.push("import ",e.call(a,"id")," = ",e.call(a,"moduleReference")),maybeAddSemicolon(concat(r));case"TSExternalModuleReference":return concat(["require(",e.call(a,"expression"),")"]);case"TSModuleDeclaration":if("TSModuleDeclaration"===e.getParentNode().type)r.push(".");else if(n.declare&&r.push("declare "),!n.global){var Y="StringLiteral"===n.id.type||"Literal"===n.id.type&&"string"==typeof n.id.value;if(Y)r.push("module ");else if(n.loc&&n.loc.lines&&n.id.loc){var Z=n.loc.lines.sliceString(n.loc.start,n.id.loc.start);Z.indexOf("module")>=0?r.push("module "):r.push("namespace ")}else r.push("namespace ")}if(r.push(e.call(a,"id")),n.body&&"TSModuleDeclaration"===n.body.type)r.push(e.call(a,"body"));else if(n.body){var ee=e.call(a,"body");ee.isEmpty()?r.push(" {}"):r.push(" {\n",ee.indent(t.tabWidth),"\n}")}return concat(r);case"TSModuleBlock":return e.call(function(e){return printStatementSequence(e,t,a)},"body");case"ClassHeritage":case"ComprehensionBlock":case"ComprehensionExpression":case"Glob":case"GeneratorExpression":case"LetStatement":case"LetExpression":case"GraphExpression":case"GraphIndexExpression":case"XMLDefaultDeclaration":case"XMLAnyName":case"XMLQualifiedIdentifier":case"XMLFunctionQualifiedIdentifier":case"XMLAttributeSelector":case"XMLFilterExpression":case"XML":case"XMLElement":case"XMLList":case"XMLEscape":case"XMLText":case"XMLStartTag":case"XMLEndTag":case"XMLPointTag":case"XMLName":case"XMLAttribute":case"XMLCdata":case"XMLComment":case"XMLProcessingInstruction":default:throw new Error("unknown type: "+JSON.stringify(n.type))}return p}function printStatementSequence(e,t,a){var n=(namedTypes.ClassBody&&namedTypes.ClassBody.check(e.getParentNode()),[]),r=!1,c=!1;e.each(function(e){var t=(e.getName(),e.getValue());t&&"EmptyStatement"!==t.type&&(namedTypes.Comment.check(t)?r=!0:namedTypes.Statement.check(t)?c=!0:isString.assert(t),n.push({node:t,printed:a(e)}))}),r&&assert.strictEqual(c,!1,"Comments may appear as statements in otherwise empty statement lists, but may not coexist with non-Comment nodes.");var s=null,o=n.length,i=[];return n.forEach(function(e,a){var n,r,c=e.printed,l=e.node,p=c.length>1,u=a>0,m=a<o-1,h=l&&l.loc&&l.loc.lines,d=h&&t.reuseWhitespace&&util.getTrueLoc(l,h);if(u)if(d){var y=h.skipSpaces(d.start,!0),f=y?y.line:1,S=d.start.line-f;n=Array(S+1).join("\n")}else n=p?"\n\n":"\n";else n="";if(m)if(d){var g=h.skipSpaces(d.end),T=g?g.line:h.length,b=T-d.end.line;r=Array(b+1).join("\n")}else r=p?"\n\n":"\n";else r="";i.push(maxSpace(s,n),c),m?s=r:r&&i.push(r)}),concat(i)}function maxSpace(e,t){if(!e&&!t)return fromString("");if(!e)return fromString(t);if(!t)return fromString(e);var a=fromString(e),n=fromString(t);return n.length>a.length?n:a}function printMethod(e,t,a){var n=e.getNode(),r=n.kind,c=[],s=n.value;namedTypes.FunctionExpression.check(s)||(s=n);var o=n.accessibility||n.access;"string"==typeof o&&c.push(o," "),n.static&&c.push("static "),n.abstract&&c.push("abstract "),n.readonly&&c.push("readonly "),s.async&&c.push("async "),s.generator&&c.push("*"),"get"!==r&&"set"!==r||c.push(r," ");var i=e.call(a,"key");return n.computed&&(i=concat(["[",i,"]"])),c.push(i),n.optional&&c.push("?"),n===s?(c.push(e.call(a,"typeParameters"),"(",printFunctionParams(e,t,a),")",e.call(a,"returnType")),n.body?c.push(" ",e.call(a,"body")):c.push(";")):(c.push(e.call(a,"value","typeParameters"),"(",e.call(function(e){return printFunctionParams(e,t,a)},"value"),")",e.call(a,"value","returnType")),s.body?c.push(" ",e.call(a,"value","body")):c.push(";")),concat(c)}function printArgumentsList(e,t,a){var n=e.map(a,"arguments"),r=util.isTrailingCommaEnabled(t,"parameters"),c=fromString(", ").join(n);return c.getLineLength(1)>t.wrapColumn?(c=fromString(",\n").join(n),concat(["(\n",c.indent(t.tabWidth),r?",\n)":"\n)"])):concat(["(",c,")"])}function printFunctionParams(e,t,a){var n=e.getValue();if(n.params)var r=n.params,c=e.map(a,"params");else n.parameters&&(r=n.parameters,c=e.map(a,"parameters"));n.defaults&&e.each(function(e){var t=e.getName(),n=c[t];n&&e.getValue()&&(c[t]=concat([n," = ",a(e)]))},"defaults"),n.rest&&c.push(concat(["...",e.call(a,"rest")]));var s=fromString(", ").join(c);return s.length>1||s.getLineLength(1)>t.wrapColumn?(s=fromString(",\n").join(c),s=concat(util.isTrailingCommaEnabled(t,"parameters")&&!n.rest&&"RestElement"!==r[r.length-1].type?[s,",\n"]:[s,"\n"]),concat(["\n",s.indent(t.tabWidth)])):s}function printExportDeclaration(e,t,a){var n=e.getValue(),r=["export "];n.exportKind&&"value"!==n.exportKind&&r.push(n.exportKind+" ");var c=t.objectCurlySpacing;namedTypes.Declaration.assert(n),(n.default||"ExportDefaultDeclaration"===n.type)&&r.push("default "),
n.declaration?r.push(e.call(a,"declaration")):n.specifiers&&n.specifiers.length>0&&(1===n.specifiers.length&&"ExportBatchSpecifier"===n.specifiers[0].type?r.push("*"):r.push(c?"{ ":"{",fromString(", ").join(e.map(a,"specifiers")),c?" }":"}"),n.source&&r.push(" from ",e.call(a,"source")));var s=concat(r);return";"===lastNonSpaceCharacter(s)||n.declaration&&("FunctionDeclaration"===n.declaration.type||"ClassDeclaration"===n.declaration.type||"TSModuleDeclaration"===n.declaration.type||"TSInterfaceDeclaration"===n.declaration.type||"TSEnumDeclaration"===n.declaration.type)||(s=concat([s,";"])),s}function printFlowDeclaration(e,t){var a=util.getParentExportDeclaration(e);return a?assert.strictEqual(a.type,"DeclareExportDeclaration"):t.unshift("declare "),concat(t)}function printVariance(e,t){return e.call(function(e){var a=e.getValue();return a?"plus"===a?fromString("+"):"minus"===a?fromString("-"):t(e):fromString("")},"variance")}function adjustClause(e,t){return concat(e.length>1?[" ",e]:["\n",maybeAddSemicolon(e).indent(t.tabWidth)])}function lastNonSpaceCharacter(e){var t=e.lastPos();do{var a=e.charAt(t);if(/\S/.test(a))return a}while(e.prevPos(t))}function endsWithBrace(e){return"}"===lastNonSpaceCharacter(e)}function swapQuotes(e){return e.replace(/['"]/g,function(e){return'"'===e?"'":'"'})}function nodeStr(e,t){switch(isString.assert(e),t.quote){case"auto":var a=JSON.stringify(e),n=swapQuotes(JSON.stringify(swapQuotes(e)));return a.length>n.length?n:a;case"single":return swapQuotes(JSON.stringify(swapQuotes(e)));case"double":default:return JSON.stringify(e)}}function maybeAddSemicolon(e){var t=lastNonSpaceCharacter(e);return!t||"\n};".indexOf(t)<0?concat([e,";"]):e}var _typeof2=__webpack_require__("pFYg"),_typeof3=_interopRequireDefault(_typeof2),assert=__webpack_require__("N+Om"),sourceMap=__webpack_require__("+r0j"),printComments=__webpack_require__("EVqu").printComments,linesModule=__webpack_require__("/OP5"),fromString=linesModule.fromString,concat=linesModule.concat,normalizeOptions=__webpack_require__("wLGZ").normalize,getReprinter=__webpack_require__("TiUx").getReprinter,types=__webpack_require__("zQC4"),namedTypes=types.namedTypes,isString=types.builtInTypes.string,isObject=types.builtInTypes.object,FastPath=__webpack_require__("xpNx"),util=__webpack_require__("pdfV"),PRp=PrintResult.prototype,warnedAboutToString=!1;PRp.toString=function(){return warnedAboutToString||(console.warn("Deprecation warning: recast.print now returns an object with a .code property. You appear to be treating the object as a string, which might still work but is strongly discouraged."),warnedAboutToString=!0),this.code};var emptyPrintResult=new PrintResult("");exports.Printer=Printer;

/***/ }),

/***/ "3N3B":
/***/ (function(module, exports, __webpack_require__) {

var toInteger=__webpack_require__("JBlU"),defined=__webpack_require__("Furo");module.exports=function(e){return function(r,t){var n,i,d=String(defined(r)),o=toInteger(t),u=d.length;return o<0||o>=u?e?"":void 0:(n=d.charCodeAt(o),n<55296||n>56319||o+1===u||(i=d.charCodeAt(o+1))<56320||i>57343?e?d.charAt(o):n:e?d.slice(o,o+2):i-56320+(n-55296<<10)+65536)}};

/***/ }),

/***/ "3P70":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n}function AnyTypeAnnotation(){this.push("any")}function ArrayTypeAnnotation(t,n){n.plain(t.elementType),this.push("["),this.push("]")}function BooleanTypeAnnotation(){this.push("bool")}function BooleanLiteralTypeAnnotation(t){this.push(t.value?"true":"false")}function DeclareClass(t,n){this.push("declare class "),this._interfaceish(t,n)}function DeclareFunction(t,n){this.push("declare function "),n.plain(t.id),n.plain(t.id.typeAnnotation.typeAnnotation),this.semicolon()}function DeclareInterface(t,n){this.push("declare "),this.InterfaceDeclaration(t,n)}function DeclareModule(t,n){this.push("declare module "),n.plain(t.id),this.space(),n.plain(t.body)}function DeclareTypeAlias(t,n){this.push("declare "),this.TypeAlias(t,n)}function DeclareVariable(t,n){this.push("declare var "),n.plain(t.id),n.plain(t.id.typeAnnotation),this.semicolon()}function FunctionTypeAnnotation(t,n,e){n.plain(t.typeParameters),this.push("("),n.list(t.params),t.rest&&(t.params.length&&(this.push(","),this.space()),this.push("..."),n.plain(t.rest)),this.push(")"),"ObjectTypeProperty"===e.type||"ObjectTypeCallProperty"===e.type||"DeclareFunction"===e.type?this.push(":"):(this.space(),this.push("=>")),this.space(),n.plain(t.returnType)}function FunctionTypeParam(t,n){n.plain(t.name),t.optional&&this.push("?"),this.push(":"),this.space(),n.plain(t.typeAnnotation)}function InterfaceExtends(t,n){n.plain(t.id),n.plain(t.typeParameters)}function _interfaceish(t,n){n.plain(t.id),n.plain(t.typeParameters),t.extends.length&&(this.push(" extends "),n.join(t.extends,{separator:", "})),t.mixins&&t.mixins.length&&(this.push(" mixins "),n.join(t.mixins,{separator:", "})),this.space(),n.plain(t.body)}function InterfaceDeclaration(t,n){this.push("interface "),this._interfaceish(t,n)}function IntersectionTypeAnnotation(t,n){n.join(t.types,{separator:" & "})}function MixedTypeAnnotation(){this.push("mixed")}function NullableTypeAnnotation(t,n){this.push("?"),n.plain(t.typeAnnotation)}function NullLiteralTypeAnnotation(){this.push("null")}function NumberTypeAnnotation(){this.push("number")}function StringLiteralTypeAnnotation(t){this.push(this._stringLiteral(t.value))}function StringTypeAnnotation(){this.push("string")}function ThisTypeAnnotation(){this.push("this")}function TupleTypeAnnotation(t,n){this.push("["),n.join(t.types,{separator:", "}),this.push("]")}function TypeofTypeAnnotation(t,n){this.push("typeof "),n.plain(t.argument)}function TypeAlias(t,n){this.push("type "),n.plain(t.id),n.plain(t.typeParameters),this.space(),this.push("="),this.space(),n.plain(t.right),this.semicolon()}function TypeAnnotation(t,n){this.push(":"),this.space(),t.optional&&this.push("?"),n.plain(t.typeAnnotation)}function TypeParameterInstantiation(t,n){this.push("<"),n.join(t.params,{separator:", ",iterator:function(t){n.plain(t.typeAnnotation)}}),this.push(">")}function ObjectTypeAnnotation(t,n){var e=this;this.push("{");var i=t.properties.concat(t.callProperties,t.indexers);i.length&&(this.space(),n.list(i,{separator:!1,indent:!0,iterator:function(){1!==i.length&&(e.semicolon(),e.space())}}),this.space()),this.push("}")}function ObjectTypeCallProperty(t,n){t.static&&this.push("static "),n.plain(t.value)}function ObjectTypeIndexer(t,n){t.static&&this.push("static "),this.push("["),n.plain(t.id),this.push(":"),this.space(),n.plain(t.key),this.push("]"),this.push(":"),this.space(),n.plain(t.value)}function ObjectTypeProperty(n,e){n.static&&this.push("static "),e.plain(n.key),n.optional&&this.push("?"),t.isFunctionTypeAnnotation(n.value)||(this.push(":"),this.space()),e.plain(n.value)}function QualifiedTypeIdentifier(t,n){n.plain(t.qualification),this.push("."),n.plain(t.id)}function UnionTypeAnnotation(t,n){n.join(t.types,{separator:" | "})}function TypeCastExpression(t,n){this.push("("),n.plain(t.expression),n.plain(t.typeAnnotation),this.push(")")}function VoidTypeAnnotation(){this.push("void")}exports.__esModule=!0,exports.AnyTypeAnnotation=AnyTypeAnnotation,exports.ArrayTypeAnnotation=ArrayTypeAnnotation,exports.BooleanTypeAnnotation=BooleanTypeAnnotation,exports.BooleanLiteralTypeAnnotation=BooleanLiteralTypeAnnotation,exports.DeclareClass=DeclareClass,exports.DeclareFunction=DeclareFunction,exports.DeclareInterface=DeclareInterface,exports.DeclareModule=DeclareModule,exports.DeclareTypeAlias=DeclareTypeAlias,exports.DeclareVariable=DeclareVariable,exports.FunctionTypeAnnotation=FunctionTypeAnnotation,exports.FunctionTypeParam=FunctionTypeParam,exports.InterfaceExtends=InterfaceExtends,exports._interfaceish=_interfaceish,exports.InterfaceDeclaration=InterfaceDeclaration,exports.IntersectionTypeAnnotation=IntersectionTypeAnnotation,exports.MixedTypeAnnotation=MixedTypeAnnotation,exports.NullableTypeAnnotation=NullableTypeAnnotation,exports.NullLiteralTypeAnnotation=NullLiteralTypeAnnotation,exports.NumberTypeAnnotation=NumberTypeAnnotation,exports.StringLiteralTypeAnnotation=StringLiteralTypeAnnotation,exports.StringTypeAnnotation=StringTypeAnnotation,exports.ThisTypeAnnotation=ThisTypeAnnotation,exports.TupleTypeAnnotation=TupleTypeAnnotation,exports.TypeofTypeAnnotation=TypeofTypeAnnotation,exports.TypeAlias=TypeAlias,exports.TypeAnnotation=TypeAnnotation,exports.TypeParameterInstantiation=TypeParameterInstantiation,exports.ObjectTypeAnnotation=ObjectTypeAnnotation,exports.ObjectTypeCallProperty=ObjectTypeCallProperty,exports.ObjectTypeIndexer=ObjectTypeIndexer,exports.ObjectTypeProperty=ObjectTypeProperty,exports.QualifiedTypeIdentifier=QualifiedTypeIdentifier,exports.UnionTypeAnnotation=UnionTypeAnnotation,exports.TypeCastExpression=TypeCastExpression,exports.VoidTypeAnnotation=VoidTypeAnnotation;var _types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types);exports.ClassImplements=InterfaceExtends,exports.GenericTypeAnnotation=InterfaceExtends;var _types2=__webpack_require__("K5z/");exports.NumberLiteralTypeAnnotation=_types2.Literal,exports.TypeParameterDeclaration=TypeParameterInstantiation;

/***/ }),

/***/ "3PoF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function JSXAttribute(e,t){t.plain(e.name),e.value&&(this.push("="),t.plain(e.value))}function JSXIdentifier(e){this.push(e.name)}function JSXNamespacedName(e,t){t.plain(e.namespace),this.push(":"),t.plain(e.name)}function JSXMemberExpression(e,t){t.plain(e.object),this.push("."),t.plain(e.property)}function JSXSpreadAttribute(e,t){this.push("{..."),t.plain(e.argument),this.push("}")}function JSXExpressionContainer(e,t){this.push("{"),t.plain(e.expression),this.push("}")}function JSXElement(e,n){var i=e.openingElement;if(n.plain(i),!i.selfClosing){this.indent();for(var s=e.children,p=0;p<s.length;p++){var r=s[p];t.isLiteral(r)?this.push(r.value,!0):n.plain(r)}this.dedent(),n.plain(e.closingElement)}}function JSXOpeningElement(e,t){this.push("<"),t.plain(e.name),e.attributes.length>0&&(this.push(" "),t.join(e.attributes,{separator:" "})),this.push(e.selfClosing?" />":">")}function JSXClosingElement(e,t){this.push("</"),t.plain(e.name),this.push(">")}function JSXEmptyExpression(){}exports.__esModule=!0,exports.JSXAttribute=JSXAttribute,exports.JSXIdentifier=JSXIdentifier,exports.JSXNamespacedName=JSXNamespacedName,exports.JSXMemberExpression=JSXMemberExpression,exports.JSXSpreadAttribute=JSXSpreadAttribute,exports.JSXExpressionContainer=JSXExpressionContainer,exports.JSXElement=JSXElement,exports.JSXOpeningElement=JSXOpeningElement,exports.JSXClosingElement=JSXClosingElement,exports.JSXEmptyExpression=JSXEmptyExpression;var _types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types);

/***/ }),

/***/ "3ZNL":
/***/ (function(module, exports) {

exports.endianness=function(){return"LE"},exports.hostname=function(){return"undefined"!=typeof location?location.hostname:""},exports.loadavg=function(){return[]},exports.uptime=function(){return 0},exports.freemem=function(){return Number.MAX_VALUE},exports.totalmem=function(){return Number.MAX_VALUE},exports.cpus=function(){return[]},exports.type=function(){return"Browser"},exports.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},exports.networkInterfaces=exports.getNetworkInterfaces=function(){return{}},exports.arch=function(){return"javascript"},exports.platform=function(){return"browser"},exports.tmpdir=exports.tmpDir=function(){return"/tmp"},exports.EOL="\n",exports.homedir=function(){return"/"};

/***/ }),

/***/ "3ejP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function crawl(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.isMemberExpression(e)?(crawl(e.object,r),e.computed&&crawl(e.property,r)):t.isBinary(e)||t.isAssignmentExpression(e)?(crawl(e.left,r),crawl(e.right,r)):t.isCallExpression(e)?(r.hasCall=!0,crawl(e.callee,r)):t.isFunction(e)?r.hasFunction=!0:t.isIdentifier(e)&&(r.hasHelper=r.hasHelper||isHelper(e.callee)),r}function isHelper(e){return t.isMemberExpression(e)?isHelper(e.object)||isHelper(e.property):t.isIdentifier(e)?"require"===e.name||"_"===e.name[0]:t.isCallExpression(e)?isHelper(e.callee):!(!t.isBinary(e)&&!t.isAssignmentExpression(e))&&(t.isIdentifier(e.left)&&isHelper(e.left)||isHelper(e.right))}function isType(e){return t.isLiteral(e)||t.isObjectExpression(e)||t.isArrayExpression(e)||t.isIdentifier(e)||t.isMemberExpression(e)}var _lodashLangIsBoolean=__webpack_require__("guqu"),_lodashLangIsBoolean2=_interopRequireDefault(_lodashLangIsBoolean),_lodashCollectionEach=__webpack_require__("uxXC"),_lodashCollectionEach2=_interopRequireDefault(_lodashCollectionEach),_lodashCollectionMap=__webpack_require__("L3zd"),_lodashCollectionMap2=_interopRequireDefault(_lodashCollectionMap),_types=__webpack_require__("sw5G"),t=_interopRequireWildcard(_types);exports.nodes={AssignmentExpression:function(e){var t=crawl(e.right);if(t.hasCall&&t.hasHelper||t.hasFunction)return{before:t.hasFunction,after:!0}},SwitchCase:function(e,t){return{before:e.consequent.length||t.cases[0]===e}},LogicalExpression:function(e){if(t.isFunction(e.left)||t.isFunction(e.right))return{after:!0}},Literal:function(e){if("use strict"===e.value)return{after:!0}},CallExpression:function(e){if(t.isFunction(e.callee)||isHelper(e))return{before:!0,after:!0}},VariableDeclaration:function(e){for(var t=0;t<e.declarations.length;t++){var r=e.declarations[t],i=isHelper(r.id)&&!isType(r.init);if(!i){var n=crawl(r.init);i=isHelper(r.init)&&n.hasCall||n.hasFunction}if(i)return{before:!0,after:!0}}},IfStatement:function(e){if(t.isBlockStatement(e.consequent))return{before:!0,after:!0}}},exports.nodes.Property=exports.nodes.SpreadProperty=function(e,t){if(t.properties[0]===e)return{before:!0}},exports.list={VariableDeclaration:function(e){return _lodashCollectionMap2.default(e.declarations,"init")},ArrayExpression:function(e){return e.elements},ObjectExpression:function(e){return e.properties}},_lodashCollectionEach2.default({Function:!0,Class:!0,Loop:!0,LabeledStatement:!0,SwitchStatement:!0,TryStatement:!0},function(e,r){_lodashLangIsBoolean2.default(e)&&(e={after:e,before:e}),_lodashCollectionEach2.default([r].concat(t.FLIPPED_ALIAS_KEYS[r]||[]),function(t){exports.nodes[t]=function(){return e}})});

/***/ }),

/***/ "3qf1":
/***/ (function(module, exports, __webpack_require__) {

function toPlainObject(e){return baseCopy(e,keysIn(e))}var baseCopy=__webpack_require__("2GMR"),keysIn=__webpack_require__("8c5g");module.exports=toPlainObject;

/***/ }),

/***/ "3zVA":
/***/ (function(module, exports, __webpack_require__) {

function ArraySet(){this._array=[],this._set=hasNativeMap?new Map:Object.create(null)}var util=__webpack_require__("e4vS"),has=Object.prototype.hasOwnProperty,hasNativeMap="undefined"!=typeof Map;ArraySet.fromArray=function(t,r){for(var e=new ArraySet,a=0,i=t.length;a<i;a++)e.add(t[a],r);return e},ArraySet.prototype.size=function(){return hasNativeMap?this._set.size:Object.getOwnPropertyNames(this._set).length},ArraySet.prototype.add=function(t,r){var e=hasNativeMap?t:util.toSetString(t),a=hasNativeMap?this.has(t):has.call(this._set,e),i=this._array.length;a&&!r||this._array.push(t),a||(hasNativeMap?this._set.set(t,i):this._set[e]=i)},ArraySet.prototype.has=function(t){if(hasNativeMap)return this._set.has(t);var r=util.toSetString(t);return has.call(this._set,r)},ArraySet.prototype.indexOf=function(t){if(hasNativeMap){var r=this._set.get(t);if(r>=0)return r}else{var e=util.toSetString(t);if(has.call(this._set,e))return this._set[e]}throw new Error('"'+t+'" is not in the set.')},ArraySet.prototype.at=function(t){if(t>=0&&t<this._array.length)return this._array[t];throw new Error("No element indexed by "+t)},ArraySet.prototype.toArray=function(){return this._array.slice()},exports.ArraySet=ArraySet;

/***/ }),

/***/ "4/4u":
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__("cSWu").Transform;

/***/ }),

/***/ "4Ltv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=!0;var _es6ForOf=__webpack_require__("fu34"),metadata={optional:!0};exports.metadata=metadata;var visitor={ForOfStatement:function(t,r,e,a){if(this.get("right").isGenericType("Array"))return _es6ForOf._ForOfStatementArray.call(this,t,e,a)}};exports.visitor=visitor;

/***/ }),

/***/ "4M2W":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("4fA7"),__webpack_require__("A0n/"),__webpack_require__("n12u"),__webpack_require__("nRs1"),__webpack_require__("jrHM"),__webpack_require__("gYYG"),__webpack_require__("VTn2"),__webpack_require__("W/IU"),__webpack_require__("Y5ex"),__webpack_require__("WpPb"),__webpack_require__("+yjc"),__webpack_require__("gPva"),__webpack_require__("C+4B"),__webpack_require__("W4Z6"),__webpack_require__("tJwI"),__webpack_require__("eC2H"),__webpack_require__("EuXz"),__webpack_require__("PbPd"),__webpack_require__("QBuC"),__webpack_require__("Stuz"),__webpack_require__("yuXV"),__webpack_require__("XtiL"),__webpack_require__("LG56"),__webpack_require__("A1ng"),__webpack_require__("WiIn"),__webpack_require__("aJ2J"),__webpack_require__("altv"),__webpack_require__("dULJ"),__webpack_require__("v2lb"),__webpack_require__("7Jvp"),__webpack_require__("lyhN"),__webpack_require__("kBOG"),__webpack_require__("xONB"),__webpack_require__("LlNE"),__webpack_require__("9xIj"),__webpack_require__("m6Yj"),__webpack_require__("wrs0"),__webpack_require__("Lqg1"),__webpack_require__("1ip3"),__webpack_require__("pWGb"),__webpack_require__("N4KQ"),__webpack_require__("Hl+4"),__webpack_require__("MjHD"),__webpack_require__("SRCy"),__webpack_require__("H0mh"),__webpack_require__("bqOW"),__webpack_require__("F3sI"),__webpack_require__("mhn7"),__webpack_require__("1A13"),__webpack_require__("Racj"),__webpack_require__("Y1S0"),__webpack_require__("Gh7F"),__webpack_require__("tqSY"),__webpack_require__("CvWX"),__webpack_require__("beEN"),__webpack_require__("xMpm"),__webpack_require__("WgSQ"),__webpack_require__("Q/CP"),__webpack_require__("9vc3"),__webpack_require__("No4x"),__webpack_require__("WpTh"),__webpack_require__("U6qc"),__webpack_require__("lnZN"),__webpack_require__("pd+2"),__webpack_require__("MfeA"),__webpack_require__("VjuZ"),__webpack_require__("qwQ3"),__webpack_require__("mJx5"),__webpack_require__("y9m4"),__webpack_require__("MsuQ"),__webpack_require__("dSUw"),__webpack_require__("ZDXm"),__webpack_require__("V/H1"),__webpack_require__("CVR+"),__webpack_require__("vmSu"),__webpack_require__("4ZU1"),__webpack_require__("yx1U"),__webpack_require__("X7aK"),__webpack_require__("SPtU"),__webpack_require__("A52B"),__webpack_require__("PuTd"),__webpack_require__("dm+7"),__webpack_require__("JG34"),__webpack_require__("Rw4K"),__webpack_require__("9mGU"),__webpack_require__("bUY0"),__webpack_require__("mTp7"),__webpack_require__("gbyG"),__webpack_require__("+2+s"),__webpack_require__("iLIb"),__webpack_require__("7CYS"),__webpack_require__("xn9I"),__webpack_require__("LRL/"),__webpack_require__("eeW9"),__webpack_require__("zmx7"),__webpack_require__("YVn/"),__webpack_require__("FKfb"),__webpack_require__("h7Xi"),__webpack_require__("arGp"),__webpack_require__("V1og"),__webpack_require__("v8VU"),__webpack_require__("dich"),__webpack_require__("fx22"),module.exports=__webpack_require__("D38z");

/***/ }),

/***/ "4NQN":
/***/ (function(module, exports) {

module.exports = {"filename":{"type":"filename","description":"filename to use when reading from stdin - this will be used in source-maps, errors etc","default":"unknown","shorthand":"f"},"filenameRelative":{"hidden":true,"type":"string"},"inputSourceMap":{"hidden":true},"extra":{"hidden":true,"default":{}},"env":{"hidden":true,"default":{}},"moduleId":{"description":"specify a custom name for module ids","type":"string"},"getModuleId":{"hidden":true},"retainLines":{"type":"boolean","default":false,"description":"retain line numbers - will result in really ugly code"},"nonStandard":{"type":"boolean","default":true,"description":"enable/disable support for JSX and Flow (on by default)"},"experimental":{"type":"boolean","description":"allow use of experimental transformers","default":false},"highlightCode":{"description":"enable/disable ANSI syntax highlighting of code frames (on by default)","type":"boolean","default":true},"suppressDeprecationMessages":{"type":"boolean","default":false,"hidden":true},"resolveModuleSource":{"hidden":true},"stage":{"description":"ECMAScript proposal stage version to allow [0-4]","shorthand":"e","type":"number","default":2},"blacklist":{"type":"transformerList","description":"blacklist of transformers to NOT use","shorthand":"b","default":[]},"whitelist":{"type":"transformerList","optional":true,"description":"whitelist of transformers to ONLY use","shorthand":"l"},"optional":{"type":"transformerList","description":"list of optional transformers to enable","default":[]},"modules":{"type":"string","description":"module formatter type to use [common]","default":"common","shorthand":"m"},"moduleIds":{"type":"boolean","default":false,"shorthand":"M","description":"insert an explicit id for modules"},"loose":{"type":"transformerList","description":"list of transformers to enable loose mode ON","shorthand":"L"},"jsxPragma":{"type":"string","description":"custom pragma to use with JSX (same functionality as @jsx comments)","default":"React.createElement","shorthand":"P"},"plugins":{"type":"list","description":"","default":[]},"ignore":{"type":"list","description":"list of glob paths to **not** compile","default":[]},"only":{"type":"list","description":"list of glob paths to **only** compile"},"code":{"hidden":true,"default":true,"type":"boolean"},"metadata":{"hidden":true,"default":true,"type":"boolean"},"ast":{"hidden":true,"default":true,"type":"boolean"},"comments":{"type":"boolean","default":true,"description":"strip/output comments in generated output (on by default)"},"shouldPrintComment":{"hidden":true,"description":"optional callback to control whether a comment should be inserted, when this is used the comments option is ignored"},"compact":{"type":"booleanString","default":"auto","description":"do not include superfluous whitespace characters and line terminators [true|false|auto]"},"keepModuleIdExtensions":{"type":"boolean","description":"keep extensions when generating module ids","default":false,"shorthand":"k"},"auxiliaryComment":{"deprecated":"renamed to auxiliaryCommentBefore","shorthand":"a","alias":"auxiliaryCommentBefore"},"auxiliaryCommentBefore":{"type":"string","default":"","description":"attach a comment before all helper declarations and auxiliary code"},"auxiliaryCommentAfter":{"type":"string","default":"","description":"attach a comment after all helper declarations and auxiliary code"},"externalHelpers":{"type":"boolean","default":false,"shorthand":"r","description":"uses a reference to `babelHelpers` instead of placing helpers at the top of your code."},"metadataUsedHelpers":{"deprecated":"Not required anymore as this is enabled by default","type":"boolean","default":false,"hidden":true},"sourceMap":{"alias":"sourceMaps","hidden":true},"sourceMaps":{"type":"booleanString","description":"[true|false|inline]","default":false,"shorthand":"s"},"sourceMapName":{"alias":"sourceMapTarget","description":"DEPRECATED - Please use sourceMapTarget"},"sourceMapTarget":{"type":"string","description":"set `file` on returned source map"},"sourceFileName":{"type":"string","description":"set `sources[0]` on returned source map"},"sourceRoot":{"type":"filename","description":"the root from which all sources are relative"},"moduleRoot":{"type":"filename","description":"optional prefix for the AMD module formatter that will be prepend to the filename on module definitions"},"breakConfig":{"type":"boolean","default":false,"hidden":true,"description":"stop trying to load .babelrc files"},"babelrc":{"description":"Specify a custom list of babelrc files to use","type":"list"},"sourceType":{"description":"","default":"module"}}

/***/ }),

/***/ "4Qof":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var path=__webpack_require__("Xhon"),invoke=__webpack_require__("cPg2"),aFunction=__webpack_require__("R2W1");module.exports=function(){for(var r=aFunction(this),e=arguments.length,n=Array(e),i=0,t=path._,o=!1;e>i;)(n[i]=arguments[i++])===t&&(o=!0);return function(){var i,u=this,a=arguments,f=a.length,h=0,c=0;if(!o&&!f)return invoke(r,n,u);if(i=n.slice(),o)for(;e>h;h++)i[h]===t&&(i[h]=a[c++]);for(;f>c;)i.push(a[c++]);return invoke(r,i,u)}};

/***/ }),

/***/ "4S4o":
/***/ (function(module, exports) {

module.exports = {"selfContained":"runtime","unicode-regex":"regex.unicode","spec.typeofSymbol":"es6.spec.symbols","es6.symbols":"es6.spec.symbols","es6.blockScopingTDZ":"es6.spec.blockScoping","utility.inlineExpressions":"minification.constantFolding","utility.deadCodeElimination":"minification.deadCodeElimination","utility.removeConsoleCalls":"minification.removeConsole","utility.removeDebugger":"minification.removeDebugger","es6.parameters.rest":"es6.parameters","es6.parameters.default":"es6.parameters"}

/***/ }),

/***/ "4SBx":
/***/ (function(module, exports, __webpack_require__) {

function generatedPositionAfter(t,e){var r=t.generatedLine,i=e.generatedLine,a=t.generatedColumn,n=e.generatedColumn;return i>r||i==r&&n>=a||util.compareByGeneratedPositionsInflated(t,e)<=0}function MappingList(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}var util=__webpack_require__("e4vS");MappingList.prototype.unsortedForEach=function(t,e){this._array.forEach(t,e)},MappingList.prototype.add=function(t){generatedPositionAfter(this._last,t)?(this._last=t,this._array.push(t)):(this._sorted=!1,this._array.push(t))},MappingList.prototype.toArray=function(){return this._sorted||(this._array.sort(util.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},exports.MappingList=MappingList;

/***/ }),

/***/ "4ZU1":
/***/ (function(module, exports, __webpack_require__) {

var $=__webpack_require__("xpUr"),$export=__webpack_require__("ko72"),anObject=__webpack_require__("VWi1");$export($export.S+$export.F*__webpack_require__("SqeA")(function(){Reflect.defineProperty($.setDesc({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(e,r,t){anObject(e);try{return $.setDesc(e,r,t),!0}catch(e){return!1}}});

/***/ }),

/***/ "4fA7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $=__webpack_require__("xpUr"),$export=__webpack_require__("ko72"),DESCRIPTORS=__webpack_require__("5Gbv"),createDesc=__webpack_require__("wJ4Y"),html=__webpack_require__("8bsp"),cel=__webpack_require__("bmtn"),has=__webpack_require__("hQZF"),cof=__webpack_require__("dM/v"),invoke=__webpack_require__("cPg2"),fails=__webpack_require__("SqeA"),anObject=__webpack_require__("VWi1"),aFunction=__webpack_require__("R2W1"),isObject=__webpack_require__("unZK"),toObject=__webpack_require__("uri9"),toIObject=__webpack_require__("+39r"),toInteger=__webpack_require__("JBlU"),toIndex=__webpack_require__("IE1A"),toLength=__webpack_require__("Pow0"),IObject=__webpack_require__("82hN"),IE_PROTO=__webpack_require__("EY5J")("__proto__"),createArrayMethod=__webpack_require__("ni+F"),arrayIndexOf=__webpack_require__("b9v1")(!1),ObjectProto=Object.prototype,ArrayProto=Array.prototype,arraySlice=ArrayProto.slice,arrayJoin=ArrayProto.join,defineProperty=$.setDesc,getOwnDescriptor=$.getDesc,defineProperties=$.setDescs,factories={},IE8_DOM_DEFINE;DESCRIPTORS||(IE8_DOM_DEFINE=!fails(function(){return 7!=defineProperty(cel("div"),"a",{get:function(){return 7}}).a}),$.setDesc=function(e,t,r){if(IE8_DOM_DEFINE)try{return defineProperty(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(anObject(e)[t]=r.value),e},$.getDesc=function(e,t){if(IE8_DOM_DEFINE)try{return getOwnDescriptor(e,t)}catch(e){}if(has(e,t))return createDesc(!ObjectProto.propertyIsEnumerable.call(e,t),e[t])},$.setDescs=defineProperties=function(e,t){anObject(e);for(var r,o=$.getKeys(t),n=o.length,i=0;n>i;)$.setDesc(e,r=o[i++],t[r]);return e}),$export($export.S+$export.F*!DESCRIPTORS,"Object",{getOwnPropertyDescriptor:$.getDesc,defineProperty:$.setDesc,defineProperties:defineProperties});var keys1="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),keys2=keys1.concat("length","prototype"),keysLen1=keys1.length,createDict=function(){var e,t=cel("iframe"),r=keysLen1;for(t.style.display="none",html.appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),createDict=e.F;r--;)delete createDict.prototype[keys1[r]];return createDict()},createGetKeys=function(e,t){return function(r){var o,n=toIObject(r),i=0,c=[];for(o in n)o!=IE_PROTO&&has(n,o)&&c.push(o);for(;t>i;)has(n,o=e[i++])&&(~arrayIndexOf(c,o)||c.push(o));return c}},Empty=function(){};$export($export.S,"Object",{getPrototypeOf:$.getProto=$.getProto||function(e){return e=toObject(e),has(e,IE_PROTO)?e[IE_PROTO]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?ObjectProto:null},getOwnPropertyNames:$.getNames=$.getNames||createGetKeys(keys2,keys2.length,!0),create:$.create=$.create||function(e,t){var r;return null!==e?(Empty.prototype=anObject(e),r=new Empty,Empty.prototype=null,r[IE_PROTO]=e):r=createDict(),void 0===t?r:defineProperties(r,t)},keys:$.getKeys=$.getKeys||createGetKeys(keys1,keysLen1,!1)});var construct=function(e,t,r){if(!(t in factories)){for(var o=[],n=0;n<t;n++)o[n]="a["+n+"]";factories[t]=Function("F,a","return new F("+o.join(",")+")")}return factories[t](e,r)};$export($export.P,"Function",{bind:function(e){var t=aFunction(this),r=arraySlice.call(arguments,1),o=function(){var n=r.concat(arraySlice.call(arguments));return this instanceof o?construct(t,n.length,n):invoke(t,n,e)};return isObject(t.prototype)&&(o.prototype=t.prototype),o}}),$export($export.P+$export.F*fails(function(){html&&arraySlice.call(html)}),"Array",{slice:function(e,t){var r=toLength(this.length),o=cof(this);if(t=void 0===t?r:t,"Array"==o)return arraySlice.call(this,e,t);for(var n=toIndex(e,r),i=toIndex(t,r),c=toLength(i-n),a=Array(c),s=0;s<c;s++)a[s]="String"==o?this.charAt(n+s):this[n+s];return a}}),$export($export.P+$export.F*(IObject!=Object),"Array",{join:function(e){return arrayJoin.call(IObject(this),void 0===e?",":e)}}),$export($export.S,"Array",{isArray:__webpack_require__("sC/k")});var createArrayReduce=function(e){return function(t,r){aFunction(t);var o=IObject(this),n=toLength(o.length),i=e?n-1:0,c=e?-1:1;if(arguments.length<2)for(;;){if(i in o){r=o[i],i+=c;break}if(i+=c,e?i<0:n<=i)throw TypeError("Reduce of empty array with no initial value")}for(;e?i>=0:n>i;i+=c)i in o&&(r=t(r,o[i],i,this));return r}},methodize=function(e){return function(t){return e(this,t,arguments[1])}};$export($export.P,"Array",{forEach:$.each=$.each||methodize(createArrayMethod(0)),map:methodize(createArrayMethod(1)),filter:methodize(createArrayMethod(2)),some:methodize(createArrayMethod(3)),every:methodize(createArrayMethod(4)),reduce:createArrayReduce(!1),reduceRight:createArrayReduce(!0),indexOf:methodize(arrayIndexOf),lastIndexOf:function(e,t){var r=toIObject(this),o=toLength(r.length),n=o-1;for(arguments.length>1&&(n=Math.min(n,toInteger(t))),n<0&&(n=toLength(o+n));n>=0;n--)if(n in r&&r[n]===e)return n;return-1}}),$export($export.S,"Date",{now:function(){return+new Date}});var lz=function(e){return e>9?e:"0"+e};$export($export.P+$export.F*(fails(function(){return"0385-07-25T07:06:39.999Z"!=new Date(-5e13-1).toISOString()})||!fails(function(){new Date(NaN).toISOString()})),"Date",{toISOString:function(){if(!isFinite(this))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),r=e.getUTCMilliseconds(),o=t<0?"-":t>9999?"+":"";return o+("00000"+Math.abs(t)).slice(o?-6:-4)+"-"+lz(e.getUTCMonth()+1)+"-"+lz(e.getUTCDate())+"T"+lz(e.getUTCHours())+":"+lz(e.getUTCMinutes())+":"+lz(e.getUTCSeconds())+"."+(r>99?r:"0"+lz(r))+"Z"}});

/***/ }),

/***/ "51bj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0;var NodePrinter=function(){function t(n,e){_classCallCheck(this,t),this.generator=n,this.parent=e}return t.prototype.printInnerComments=function(){if(this.parent.innerComments){var t=this.generator;t.indent(),t._printComments(this.parent.innerComments),t.dedent()}},t.prototype.plain=function(t,n){return this.generator.print(t,this.parent,n)},t.prototype.sequence=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.statement=!0,this.generator.printJoin(this,t,n)},t.prototype.join=function(t,n){return this.generator.printJoin(this,t,n)},t.prototype.list=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return null==n.separator&&(n.separator=",",this.generator.format.compact||(n.separator+=" ")),this.join(t,n)},t.prototype.block=function(t){return this.generator.printBlock(this,t)},t.prototype.indentOnComments=function(t){return this.generator.printAndIndentOnComments(this,t)},t}();exports.default=NodePrinter,module.exports=exports.default;

/***/ }),

/***/ "54Ls":
/***/ (function(module, exports) {

function traverse(r,e){"use strict";function o(r,e,s,n){if(r&&"string"==typeof r.type){var a=void 0;if(t&&(a=t(r,e,s,n)),!1!==a)for(var s in r)if(f?!f(s,r):"$"!==s[0]){var p=r[s];if(Array.isArray(p))for(var v=0;v<p.length;v++)o(p[v],r,s,v);else o(p,r,s)}i&&i(r,e,s,n)}}e=e||{};var t=e.pre,i=e.post,f=e.skipProperty;o(r,null)}"undefined"!=typeof module&&void 0!==module.exports&&(module.exports=traverse);

/***/ }),

/***/ "54XE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=function t(o){function n(){}function e(){return typeof r.foo}n.prototype=o;var r=new n;return e(),e(),o};

/***/ }),

/***/ "59HM":
/***/ (function(module, exports) {

// Generated by js_of_ocaml 3.1.0
(function(iG){"use strict";var
pA=254,nu=43595,gB=42237,bI=43123,uf="children",tc="Identifier",i1=16777215,ih=43347,gA=126467,jW=12287,mc="variance",hT=12335,bH=65370,sI=">>>",jY=8202,eQ=65007,bF=119969,bG=43071,n6=115,ue="!",pi="consequent",kO=512,df=64279,de=8485,dd=66204,eP=120539,dc=64297,lp="params",ip=128,db=8488,hS=68102,bE=42999,m_=-43,da=12589,nL="constructor",bD=126503,kt="yield",nt=68096,sG=-53,sH="fd ",c$=120744,eO=126560,ph="target",eN=177972,hR=44015,m9="var",c_=65855,gz=43776,l5="0o",hn=43215,c9=12592,ns=">",gy=12336,c8=42124,bC=120512,pz="decorators",gx=8489,eM=66334,bB=68115,eL=64324,gw=67592,bA=126529,bz=43784,c6=119807,c7=8304,gv=120137,nq=69807,nr="method",m8=69926,p9="throw",by=65595,gs=126578,gt=64322,gu=11735,sF="of",sE=">>",eK=178205,eJ=8487,ty="Popping lex mode from empty stack",n5=43249,gr=120771,gq=67589,pR=-80,c5=119972,ud="<<=",p8="e",sD="%=",sC="([^/]*)",tx=247,pQ="src/parser/statement_parser.ml",jQ=8239,iq=109,c4=65598,nK=69687,eI=94031,go=67669,gp=43583,eH=8348,uc="Invalid binary/octal ",m7=43019,bx=42239,tw="Out_of_memory",gn=78894,bw=11687,py="do",eG=43798,jh=101,bv=40959,eE=42922,eF=8454,tv="index out of bounds",p7="package",gm=126589,bu=12438,n4=12442,pg="this",tu="}",eD=120654,hQ=119361,gl=67637,hP=69743,tt="@",lv="type",c3=11679,eC=119892,bt=42894,c2=11311,eB=126521,md=1024,br=119993,bs=11710,bq=8543,ts=231,gk=8484,ub="module",hO=43135,p6="try",bp=126634,m6=43334,hN=43263,c1=67593,pP=113,ua="infinity",bo=120144,pf="switch",px="private",hM=70105,ig=119364,gj=11359,gi=8516,gD=8254,bn=11559,eA=126551,hL=68151,tb="Property",gh=42888,p5=55296,l_="implements",bm=43255,hm=8399,pw="src/parser/type_parser.ml",n3=103,kr="raw",kX=-744106340,gg=8468,bl=65470,sB="alternate",gf=11686,nI=43712,nJ=43009,ez=43470,pe="export",ta=223,ka=".",tr="===",L=65535,ey=8469,kW="kind",c0=8521,hK=69631,ge=120085,g0=11743,ex=126559,ew=120655,n2=69890,t$="declare",hJ=65023,bk=66256,cZ=65479,tq=210,bj=42622,bi=11310,cY=11711,ev=8305,eu=119967,hI=68159,t_="expected *",p4="boolean",et=64433,t9=256,cX=42774,tp=118,es=11564,bh=68437,gd=67871,cV=126496,cW=120145,kM="expression",gZ=66045,iz="value",s$=191,er=12348,sA=56320,to="%.12g",bg=119964,eq=126554,hH=119140,bf=43792,cU=68405,gc=126557,t8="Assert_failure",gY=119162,be=67861,l4=114,ep=43807,bd=19967,sz="&&",cT=65663,cS=65574,s_="opaque",lm="null",bc=64111,cR=66378,ll=123,s9="filter",t7=239,sy="expressions",cQ=11703,kL="get",n1=69762,nH="<",s8="exported",ga=68447,gb=11630,t6=">=",cP=11519,bb=44031,cO=69839,pv="return",jV=8286,f$=64310,f_=120084,a$=120126,ba=8335,cN=126519,t4="src/parser/expression_parser.ml",t5="(global)",m5=11502,hl=69941,cM=42511,ie=44025,a_=126534,kq=120,nG=94032,f9=126555,a8=67646,a9=65629,hG=65076,tn=">>=",f8=126535,hk=69881,nF="empty",t3=117,a6=120134,a7=12343,eo=70084,f7=69864,cL=12703,gX=68107,a3=126520,a4=126468,a5=43519,hj=65342,cK=43615,hi=120831,hF=42654,en=42899,a2=43359,sw=232,sx="Division_by_zero",cJ=119981,em=43738,f6=65140,a1=67638,pu=112,el=68351,cI=68119,pO="if",pN="immediately within another function.",f5=43388,cH=126538,id=70015,a0=8449,f4=120779,aZ=12686,f3=126504,p3="%d",f2=68191,n0=70018,sv=57343,ek=67591,m4="'",cG=55291,ej=11727,ei=11557,cF=119980,nE=43014,ib=8188,ic=43599,aY=67967,aX=8319,mb="from",f1=42785,p2=789,gW=11775,f0=126502,t2="-=",jU=65279,kV=-48,lo="set",fZ=63743,pt=2048,nZ=64286,kf="right",aV=120093,aW=8486,iE="body",aU=43743,fY=12799,t1=227,cE=119965,s7="Invalid number ",eh=126563,fX=64296,gV=43766,hh=8275,t0="Lookahead.peek failed",su="*=",tm=" : flags Open_text and Open_binary are not compatible",tZ="*",st=2147483647,eg=11670,ef=43815,p1="else",ss=65536,ps="properties",sr="\\\\",aT=120004,jP=8238,ia=8417,cD=126591,np="arguments",ee=11719,fW=66517,aS=126500,cC=126571,s6=246,ec=65497,ed=120571,jq="static",p0="declaration",cB=12730,fV=120597,eb=64262,hE=8420,fU=77823,lk="init",h$=66044,cA=74751,cz=195101,ea=66207,iL=122,d$=126602,h_=69818,hg=8276,s5="Stack_overflow",d_=11742,fT=126539,h9=8432,cy=120132,cx=120687,fS=64311,m3=43713,gU=119148,fR=126564,cw=120745,tX="+=",tY="Not_found",cv=126590,gT=44010,aR=131071,l9=-46,fQ=8467,gS=43759,s4="CallExpression",d9=126583,fP=74850,hf=43047,d6=126530,d7=40908,d8=12543,hD=69951,m2=42655,aQ=65489,aO=66503,aP=11695,fO=13311,l8=106,s3="superClass",tl="f",aM=64321,aN=11567,d5=43638,no="const",i0="typeParameters",nD="delete",nY=124,aL=65615,sq="blocks",kK="false",fN=11718,fM=126556,aK=11623,lj="test",d4=64847,pM="string",h8=43456,aJ=110593,cu=12538,fL=8507,li=":",M=-36,aI=55238,ct=12292,ls=192,fJ=120487,fK=64967,aH=173782,he=65074,fI=43741,aG=120074,tk="minus",aF=12548,sp=245,jO=8191,h7=71359,hd=43643,nC=42537,l7="computed",fG=126579,h6=43391,fH=11558,aE=126523,so="<<",d3=64217,iA="id",kN="as",kI="true",cs=65381,fF=194559,kH=104,kG=108,d2=119996,fE=66559,s2="Invalid_argument",fC=64913,fD=12448,cr=126552,pL="any",nB=70066,d1=55242,h5=120781,aD=12352,aC=12295,cq=43714,s1="%ni",pK="import",tW="prototype",lr=-45,nn=-81,tV=-42,fB=65908,s0=119,pY="debugger",tU="Internal Error: Found private field in object props",pZ="&",m1=43560,aB=120485,fA=65575,tT="++",pX="label",co=65495,cp=64466,gR=43204,nm=64285,fz=67644,sn="shorthand",aA=68147,cn=67897,az=8526,cm=12539,ja="0",dZ=120712,d0=43641,ay=126522,iw=248,ax=8450,aw=119974,hC=119170,tj="Sys_blocked_io",fy=67643,sY=121,sZ="superTypeParameters",nX=43187,h4=12440,av=8471,cl=65473,fx=68095,m0=43013,au=126553,pJ="catch",kU=107,gQ=65305,nl=43754,dY=110591,fw=67640,ck=64284,at=64317,pd="protected",dX=126515,pc=1114111,ti=-97,nk=43018,dW=11631,nA=44002,sm="%u",nj=105,pW="object",pr="break",l3=110,cj=66499,dV=65312,cg=126633,ch=120003,ci=65786,hc=66719,cf=8511,jp=8233,tS=57344,ce=11492,dU=65487,hA=119145,hB=71351,sl=" : flags Open_rdonly and Open_wronly are not compatible",fv=11726,tR=253,mZ="returnType",as=126540,sX=-24,jT="-",kT="await",gC=8205,lh="async",fu=126543,ar=126550,sk=" : file already exists",kS="left",aq=120596,jo=8231,hb=11646,tQ="/=",tP="|=",cd=64325,pI="case",dT=66511,ft=120121,ni=43137,sW="Invalid legacy octal ",jS=12288,kR="typeof",mY=43697,ap=66175,dS=126628,kQ=224,pb="public",ha=69702,g$=94078,pq="enum",cc=42895,nW="in",g_=8416,hz=917999,fs=42911,pV=250,cb=120770,l6="super",kd=127343600,ca=126463,h3=43309,ao=42559,gP=119179,pH="interface",fr=66512,an=126588,fq=68415,iv=102,nz=43010,gO=69871,b_=55203,b$=11507,dR=55215,am=120629,h2=44013,sV=870530776,pG="bool",lg="default",dQ=119976,tO="{",o="",pa="exportKind",nh="instanceof",ma="^",mX=43586,jN=100,i_="argument",b8=126566,b9=126558,fp=119995,tN=-17,i$="src/parser/ast.ml",hy=68100,fo=126537,sj="Match_failure",dP=43790,ng=68111,dO=8505,b7=120686,ks="+",mW=42735,ak=120127,al=65613,hx=65100,gN=69759,h1=43609,si="!=",dN=65500,th="%li",mV=42527,dM=65548,nf=71338,g9=42611,dL=120713,sU="^=",ik=127,mU=111,aj=11694,h0=69940,fn=64318,kJ="void",dK=8584,ne="let",fm=120538,b6=120070,pp="nan",fl=126601,hZ=43597,sh="\r\n",b5=68220,g8=8412,dJ=42191,fk=94020,dI=177983,ai=126547,b4=11565,sg="%",iZ="/",dG=126619,dH=65019,hw=42621,b3=120092,pF="property",sf="#",b2=67839,fi=120122,fj=42890,b1=43761,hv=8256,se="Literal",po="number",hu=43231,ht=44011,fh=11498,sd=";",gM=65103,g7=65039,fg=64274,sT=927,ny=11647,nV=43273,gL=70095,o$="=",pn="function",dF=43258,ah=126562,sc="!==",l$=6158,pE="jsError",ag=71295,b0=65344,mT=43642,nd=42606,dD=126544,dE=64109,E="unreachable",dC=64829,tM="|",sS="End_of_file",bZ=11702,dB=73727,af=68466,ln="new",sR="Failure",nc=43764,nU="local",pm="with",dA=12783,tg=962,dz=11358,sQ="789",ff=65141,sb="~",bY=65481,gK=68154,bX=12341,jX=65278,fe=19893,gJ=119172,dy=68031,hs=43574,bW=43259,pD="while",iD="camlinternalFormat.ml",sP="elements",nT=43711,sa=-34,tK="each",tL="Sys_error",mS=43301,nb=43442,g6=68158,dx=126584,fd=126570,hY=65295,mR=12329,bV=11263,kc="int_of_string",tf="Unix",tJ=132,nS=43702,nR=43704,ae=43822,l2="operator",kb="name",dw=119970,dv=65547,fc=126514,fb=65276,ad=126498,pl="callee",du=120076,mQ=43395,dt=119893,hX=917759,fa=66431,tI="*-/",mP=43709,nP=94098,e$=126546,nQ="predicate",ac=64911,o_="types",nx=11505,hr=43481,hW=119154,kP=240,gI=8203,hq=42737,e_=126624,ab=8525,kF="0x",ds=68116,lu="optional",g5=69887,bU=68029,mO=70080,o9="\n",bT=126499,dr=92728,pk="finally",e9=43311,tH="&=",pC=125,te=219,tG="%Li",jG=255,sO="loc",e8=120069,aa=126627,dq=8457,g4=68099,e7=119994,$=93951,na=69634,dp=64319,lq="source",gH=65055,g3=65062,e6=65135,tF="||",_=66303,e5=12447,e4=126536,gG=119209,o8="generator",o7="for",bS=120133,td="--",jR=8287,e1=74606,e2=67583,e3=66351,Z=66717,pj="mixed",e0=64255,Y=8477,sN=-79,hp=119213,eZ=8318,nw=43587,bR=65597,bQ=68023,dn=68680,tE="**",X=65594,eY=43814,mN=43042,eX=120628,nO=43696,eW=12320,tD="<=",W=66463,sM="static/",V=42783,nv=43700,hV=43225,dm=42508,U=64316,sL="prefix",eV=43967,bP=120570,ho=66729,eU=42539,r$="Internal Error: Found object private prop",dl=8483,eS=126548,hU=69733,eT=8455,pU="class",bO=68607,pT="continue",gF=65343,pS=252,bN=126495,kE="key",ke=" ",nN=43695,tB="RestElement",tC="Undefined_recursive_module",mM=43471,eR=11734,T=68120,bM=43647,g2=94094,m$=116,r_="==",bL=92159,g1=42607,jF="typeAnnotation",S=66461,bK=173823,dk=42647,bJ=120513,pB="specifiers",nM="Set.bal",tA="**=",sK="%i",dj=126651,r9=-61,gE=71369,sJ=">>>=",dh=94111,di=43782,lt="extends",tz="importKind",dg=65338;function
uv(b,a){throw[0,b,a]}var
is=[0];function
abt(b,c){function
f(a){uv(is.Undefined_recursive_module,b)}function
e(b,c,a){if(typeof
b==="number")switch(b){case
0:c[a]={fun:f};break;case
1:c[a]=[s6,f];break;default:c[a]=[]}else
switch(b[0]){case
0:c[a]=[0];for(var
d=1;d<b[1].length;d++)e(b[1][d],c[a],d);break;default:c[a]=b[1]}}var
a=[];e(c,a,0);return a[0]}function
h(c,a){if(typeof
a==="function"){c.fun=a;return 0}if(a.fun){c.fun=a.fun;return 0}var
b=a.length;while(b--)c[b]=a[b];return 0}function
uh(b,c,d){if(typeof
b==="number")switch(b){case
0:c.fun=d;break;case
1:default:h(c,d)}else
switch(b[0]){case
0:for(var
a=1;a<b[1].length;a++)uh(b[1][a],c[a],d[a]);break}return 0}function
abu(d,b,e,c,f){if(c<=b)for(var
a=1;a<=f;a++)e[c+a]=d[b+a];else
for(var
a=f;a>=1;a--)e[c+a]=d[b+a];return 0}function
abw(e,f,d){var
a=new
Array(d+1);a[0]=0;for(var
b=1,c=f+1;b<=d;b++,c++)a[b]=e[c];return a}function
of(d,e,c){var
b=new
Array(c);for(var
a=0;a<c;a++)b[a]=d[e+a];return b}function
qf(b,c,a){var
d=String.fromCharCode;if(c==0&&a<=4096&&a==b.length)return d.apply(null,b);var
e=o;for(;0<a;c+=md,a-=md)e+=d.apply(null,of(b,c,Math.min(a,md)));return e}function
n8(b){if(iG.Uint8Array)var
c=new(iG.Uint8Array)(b.l);else
var
c=new
Array(b.l);var
e=b.c,d=e.length,a=0;for(;a<d;a++)c[a]=e.charCodeAt(a);for(d=b.l;a<d;a++)c[a]=0;b.c=c;b.t=4;return c}function
iS(d,e,b,f,c){if(c==0)return 0;if(f==0&&(c>=b.l||b.t==2&&c>=b.c.length)){b.c=d.t==4?qf(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else
if(b.t==2&&f==b.c.length){b.c+=d.t==4?qf(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else{if(b.t!=4)n8(b);var
g=d.c,h=b.c;if(d.t==4)if(f<=e)for(var
a=0;a<c;a++)h[f+a]=g[e+a];else
for(var
a=c-1;a>=0;a--)h[f+a]=g[e+a];else{var
i=Math.min(c,g.length-e);for(var
a=0;a<i;a++)h[f+a]=g.charCodeAt(e+a);for(;a<c;a++)h[f+a]=0}}return 0}function
ab$(c,e){var
d=c.length,b=new
Array(d+1),a=0;for(;a<d;a++)b[a]=c[a];b[a]=e;return b}function
ku(b,a){if(b.fun)return ku(b.fun,a);var
c=b.length,d=a.length,e=c-d;if(e==0)return b.apply(null,a);else
if(e<0)return ku(b.apply(null,of(a,0,c)),of(a,c,d-c));else
return function(c){return ku(b,ab$(a,c))}}function
lB(b,a){if(a.repeat)return a.repeat(b);var
c=o,d=0;if(b==0)return c;for(;;){if(b&1)c+=a;b>>=1;if(b==0)return c;a+=a;d++;if(d==9)a.slice(0,1)}}function
lx(a){if(a.t==2)a.c+=lB(a.l-a.c.length,"\0");else
a.c=qf(a.c,0,a.c.length);a.t=0}function
up(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>ik)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
ab7(e){for(var
j=o,c=o,g,f,h,a,b=0,i=e.length;b<i;b++){f=e.charCodeAt(b);if(f<ip){for(var
d=b+1;d<i&&(f=e.charCodeAt(d))<ip;d++);if(d-b>kO){c.substr(0,1);j+=c;c=o;j+=e.slice(b,d)}else
c+=e.slice(b,d);if(d==i)break;b=d}a=1;if(++b<i&&((h=e.charCodeAt(b))&-64)==ip){g=h+(f<<6);if(f<kQ){a=g-12416;if(a<ip)a=1}else{a=2;if(++b<i&&((h=e.charCodeAt(b))&-64)==ip){g=h+(g<<6);if(f<kP){a=g-925824;if(a<pt||a>=55295&&a<tS)a=2}else{a=3;if(++b<i&&((h=e.charCodeAt(b))&-64)==ip&&f<sp){a=h-63447168+(g<<6);if(a<ss||a>pc)a=3}}}}}if(a<4){b-=a;c+="\ufffd"}else
if(a>L)c+=String.fromCharCode(55232+(a>>10),sA+(a&1023));else
c+=String.fromCharCode(a);if(c.length>md){c.substr(0,1);j+=c;c=o}}return j+c}function
ab6(a){switch(a.t){case
9:return a.c;default:lx(a);case
0:if(up(a.c)){a.t=9;return a.c}a.t=8;case
8:return ab7(a.c)}}function
js(c,a,b){this.t=c;this.c=a;this.l=b}js.prototype.toString=function(){return ab6(this)};function
a(a){return new
js(0,a,a.length)}function
qe(c,b){uv(c,a(b))}function
ly(a){qe(is.Invalid_argument,a)}function
abv(){ly(tv)}function
iP(a,b){if(b>>>0>=a.length-1)abv();return a}function
abx(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
abD(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
abL(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
v(a,b){a.t&6&&lx(a);b.t&6&&lx(b);return a.c<b.c?-1:a.c>b.c?1:0}function
lw(a,b,h){var
d=[];for(;;){if(!(h&&a===b))if(a
instanceof
js)if(b
instanceof
js){if(a!==b){var
c=v(a,b);if(c!=0)return c}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
e=a[0];if(e===pA)e=0;if(e===pV){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
f=b[0];if(f===pA)f=0;if(f===pV){b=b[1];continue}else
if(e!=f)return e<f?-1:1;else
switch(e){case
248:var
c=abL(a[2],b[2]);if(c!=0)return c;break;case
251:ly("equal: abstract value");case
255:var
c=abD(a,b);if(c!=0)return c;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)d.push(a,b,1)}}else
return 1}else
if(b
instanceof
js||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!="number"&&a&&a.compare)return a.compare(b,h);else
if(typeof
a=="function")ly("compare: functional value");else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!h)return NaN;if(a==a)return 1;if(b==b)return-1}}if(d.length==0)return 0;var
g=d.pop();b=d.pop();a=d.pop();if(g+1<a.length)d.push(a,b,g+1);a=a[g];b=b[g]}}function
aby(a,b){return lw(a,b,true)}function
iF(a){if(a<0)ly("String.create");return new
js(a?2:9,o,a)}function
n9(a,b){return+(lw(a,b,false)==0)}function
abz(a,c,b,d){if(b>0)if(c==0&&(b>=a.l||a.t==2&&b>=a.c.length))if(d==0){a.c=o;a.t=2}else{a.c=lB(b,String.fromCharCode(d));a.t=b==a.l?0:2}else{if(a.t!=4)n8(a);for(b+=c;c<b;c++)a.c[c]=d}return 0}function
j1(a){qe(is.Failure,a)}function
n7(a){if((a.t&6)!=0)lx(a);return a.c}function
abA(a){var
b;a=n7(a);b=+a;if(a.length>0&&b===b)return b;a=a.replace(/_/g,o);b=+a;if(a.length>0&&b===b||/^[+-]?nan$/i.test(a))return b;var
c=/^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(a);if(c){var
d=c[3].replace(/0+$/,o),f=parseInt(c[1]+c[2]+d,16),e=(c[4]|0)-4*d.length;b=f*Math.pow(2,e);return b}if(/^\+?inf(inity)?$/i.test(a))return Infinity;if(/^-inf(inity)?$/i.test(a))return-Infinity;j1("float_of_string")}function
qd(d){d=n7(d);var
e=d.length;if(e>31)ly("format_int: format too long");var
a={justify:ks,signstyle:jT,filler:ke,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:tl};for(var
c=0;c<e;c++){var
b=d.charAt(c);switch(b){case"-":a.justify=jT;break;case"+":case" ":a.signstyle=b;break;case"0":a.filler=ja;break;case"#":a.alternate=true;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":a.width=0;while(b=d.charCodeAt(c)-48,b>=0&&b<=9){a.width=a.width*10+b;c++}c--;break;case".":a.prec=0;c++;while(b=d.charCodeAt(c)-48,b>=0&&b<=9){a.prec=a.prec*10+b;c++}c--;case"d":case"i":a.signedconv=true;case"u":a.base=10;break;case"x":a.base=16;break;case"X":a.base=16;a.uppercase=true;break;case"o":a.base=8;break;case"e":case"f":case"g":a.signedconv=true;a.conv=b;break;case"E":case"F":case"G":a.signedconv=true;a.uppercase=true;a.conv=b.toLowerCase();break}}return a}function
p$(b,f){if(b.uppercase)f=f.toUpperCase();var
e=f.length;if(b.signedconv&&(b.sign<0||b.signstyle!=jT))e++;if(b.alternate){if(b.base==8)e+=1;if(b.base==16)e+=2}var
c=o;if(b.justify==ks&&b.filler==ke)for(var
d=e;d<b.width;d++)c+=ke;if(b.signedconv)if(b.sign<0)c+=jT;else
if(b.signstyle!=jT)c+=b.signstyle;if(b.alternate&&b.base==8)c+=ja;if(b.alternate&&b.base==16)c+=kF;if(b.justify==ks&&b.filler==ja)for(var
d=e;d<b.width;d++)c+=ja;c+=f;if(b.justify==jT)for(var
d=e;d<b.width;d++)c+=ke;return a(c)}function
uj(i,c){var
a,e=qd(i),d=e.prec<0?6:e.prec;if(c<0||c==0&&1/c==-Infinity){e.sign=-1;c=-c}if(isNaN(c)){a=pp;e.filler=ke}else
if(!isFinite(c)){a="inf";e.filler=ke}else
switch(e.conv){case"e":var
a=c.toExponential(d),b=a.length;if(a.charAt(b-3)==p8)a=a.slice(0,b-1)+ja+a.slice(b-1);break;case"f":a=c.toFixed(d);break;case"g":d=d?d:1;a=c.toExponential(d-1);var
h=a.indexOf(p8),g=+a.slice(h+1);if(g<-4||c>=1e+21||c.toFixed(0).length>d){var
b=h-1;while(a.charAt(b)==ja)b--;if(a.charAt(b)==ka)b--;a=a.slice(0,b+1)+a.slice(h);b=a.length;if(a.charAt(b-3)==p8)a=a.slice(0,b-1)+ja+a.slice(b-1);break}else{var
f=d;if(g<0){f-=g+1;a=c.toFixed(f)}else
while(a=c.toFixed(f),a.length>d+1)f--;if(f){var
b=a.length-1;while(a.charAt(b)==ja)b--;if(a.charAt(b)==ka)b--;a=a.slice(0,b+1)}}break}return p$(e,a)}function
n_(e,c){if(n7(e)==p3)return a(o+c);var
b=qd(e);if(c<0)if(b.signedconv){b.sign=-1;c=-c}else
c>>>=0;var
d=c.toString(b.base);if(b.prec>=0){b.filler=ke;var
f=b.prec-d.length;if(f>0)d=lB(f,ja)+d}return p$(b,d)}var
abX=0;function
i2(){return abX++}function
uk(a,b){return+(lw(a,b,false)>=0)}function
ab8(e){for(var
f=o,b=f,a,h,c=0,g=e.length;c<g;c++){a=e.charCodeAt(c);if(a<ip){for(var
d=c+1;d<g&&(a=e.charCodeAt(d))<ip;d++);if(d-c>kO){b.substr(0,1);f+=b;b=o;f+=e.slice(c,d)}else
b+=e.slice(c,d);if(d==g)break;c=d}if(a<pt){b+=String.fromCharCode(ls|a>>6);b+=String.fromCharCode(ip|a&63)}else
if(a<p5||a>=sv)b+=String.fromCharCode(kQ|a>>12,ip|a>>6&63,ip|a&63);else
if(a>=56319||c+1==g||(h=e.charCodeAt(c+1))<sA||h>sv)b+="\xef\xbf\xbd";else{c++;a=(a<<10)+h-56613888;b+=String.fromCharCode(kP|a>>18,ip|a>>12&63,ip|a>>6&63,ip|a&63)}if(b.length>md){b.substr(0,1);f+=b;b=o}}return f+b}function
kv(a){var
b=9;if(!up(a))b=8,a=ab8(a);return new
js(b,a,a.length)}function
abB(a,c,k){if(!isFinite(a)){if(isNaN(a))return kv(pp);return kv(a>0?ua:"-infinity")}var
i=a==0&&1/a==-Infinity?1:a>=0?0:1;if(i)a=-a;var
d=0;if(a==0);else
if(a<1)while(a<1&&d>-1022){a*=2;d--}else
while(a>=2){a/=2;d++}var
j=d<0?o:ks,e=o;if(i)e=jT;else
switch(k){case
43:e=ks;break;case
32:e=ke;break;default:break}if(c>=0&&c<13){var
g=Math.pow(2,c*4);a=Math.round(a*g)/g}var
b=a.toString(16);if(c>=0){var
h=b.indexOf(ka);if(h<0)b+=ka+lB(c,ja);else{var
f=h+1+c;if(b.length<f)b+=lB(f-b.length,ja);else
b=b.substr(0,f)}}return kv(e+kF+b+"p"+j+d.toString(10))}function
abG(a){return(a[3]|a[2]|a[1])==0}function
n$(a){return[jG,a&i1,a>>24&i1,a>>31&L]}function
ut(d){var
c=d.length,b=new
Array(c);for(var
a=0;a<c;a++)b[a]=d[a];return b}function
abJ(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[jG,c&i1,d&i1,e&L]}function
qa(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
ul(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&i1;a[1]=a[1]<<1&i1}function
abH(a){a[1]=(a[1]>>>1|a[2]<<23)&i1;a[2]=(a[2]>>>1|a[3]<<23)&i1;a[3]=a[3]>>>1}function
uo(e,f){var
c=0,b=ut(e),a=ut(f),d=[jG,0,0,0];while(qa(b,a)>0){c++;ul(a)}while(c>=0){c--;ul(d);if(qa(b,a)>=0){d[1]++;b=abJ(b,a)}abH(a)}return[0,d,b]}function
abK(a){return a[1]|a[2]<<24}function
abF(a){return a[3]<<16<0}function
um(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[jG,b&i1,c&i1,d&L]}function
abE(g,c){var
a=qd(g);if(a.signedconv&&abF(c)){a.sign=-1;c=um(c)}var
b=o,h=n$(a.base),f="0123456789abcdef";do{var
e=uo(c,h);c=e[1];b=f.charAt(abK(e[2]))+b}while(!abG(c));if(a.prec>=0){a.filler=ke;var
d=a.prec-b.length;if(d>0)b=lB(d,ja)+b}return p$(a,b)}function
P(a){return a.l}function
ji(a,b){switch(a.t&6){default:if(b>=a.c.length)return 0;case
0:return a.c.charCodeAt(b);case
4:return a.c[b]}}function
abC(a,b){var
c=a[1]+b[1],d=a[2]+b[2]+(c>>24),e=a[3]+b[3]+(d>>24);return[jG,c&i1,d&i1,e&L]}var
un=Math.pow(2,-24);function
abI(a,b){var
c=a[1]*b[1],d=(c*un|0)+a[2]*b[1]+a[1]*b[2],e=(d*un|0)+a[3]*b[1]+a[2]*b[2]+a[1]*b[3];return[jG,c&i1,d&i1,e&L]}function
qb(a,b){return qa(a,b)<0}function
uu(c){var
a=0,d=P(c),b=10,e=d>0&&ji(c,0)==45?(a++,-1):1;if(a+1<d&&ji(c,a)==48)switch(ji(c,a+1)){case
120:case
88:b=16;a+=2;break;case
111:case
79:b=8;a+=2;break;case
98:case
66:b=2;a+=2;break}return[a,e,b]}function
od(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=iL)return a-87;return-1}function
oa(f){var
e=uu(f),d=e[0],i=e[1],g=e[2],h=n$(g),j=uo([jG,i1,268435455,L],h)[1],c=ji(f,d),a=od(c);if(a<0||a>=g)j1(kc);var
b=n$(a);for(;;){d++;c=ji(f,d);if(c==95)continue;a=od(c);if(a<0||a>=g)break;if(qb(j,b))j1(kc);a=n$(a);b=abC(abI(h,b),a);if(qb(b,a))j1(kc)}if(d!=P(f))j1(kc);if(e[2]==10&&qb([jG,0,0,32768],b))j1(kc);if(i<0)b=um(b);return b}function
ob(a){return(a[3]<<16)*Math.pow(2,32)+a[2]*Math.pow(2,24)+a[1]}function
jH(f){var
h=uu(f),c=h[0],i=h[1],d=h[2],g=P(f),j=-1>>>0,e=c<g?ji(f,c):0,b=od(e);if(b<0||b>=d)j1(kc);var
a=b;for(c++;c<g;c++){e=ji(f,c);if(e==95)continue;b=od(e);if(b<0||b>=d)break;a=d*a+b;if(a>j)j1(kc)}if(c!=g)j1(kc);a=i*a;if(d==10&&(a|0)!=a)j1(kc);return a|0}function
abM(a){return of(a,1,a.length-1)}function
abN(a){return a.toString()}function
abO(b){var
c={};for(var
a=1;a<b.length;a++){var
d=b[a];c[d[1].toString()]=d[2]}return c}function
abP(a,b){return+(lw(a,b,false)<=0)}function
abQ(a,b){return+(lw(a,b,false)<0)}function
mf(a,d){var
a=a+1|0,b=new
Array(a);b[0]=0;for(var
c=1;c<a;c++)b[c]=d;return b}function
jt(a){qe(is.Sys_error,a)}var
j2=new
Array();function
qc(c){var
a=j2[c];if(!a.opened)jt("Cannot flush a closed channel");if(!a.buffer||a.buffer==o)return 0;if(a.fd&&is.fds[a.fd]&&is.fds[a.fd].output){var
b=is.fds[a.fd].output;switch(b.length){case
2:b(c,a.buffer);break;default:b(a.buffer)}}a.buffer=o;return 0}if(iG.process&&iG.process.cwd)var
me=iG.process.cwd().replace(/\\/g,iZ);else
var
me="/static";if(me.slice(-1)!==iZ)me+=iZ;function
abR(a){a=a
instanceof
js?a.toString():a;if(a.charCodeAt(0)!=47)a=me+a;var
d=a.split(iZ),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(o);break;default:b.push(d[c]);break}b.orig=a;return b}function
abZ(a){a=a
instanceof
js?a.toString():a;jt(a+": No such file or directory")}function
ab2(a){return new
js(4,a,a.length)}function
uy(){ly(tv)}function
G(b,a){if(a>>>0>=b.l)uy();return ji(b,a)}function
ug(){}function
iO(a){this.data=a}iO.prototype=new
ug();iO.prototype.truncate=function(a){var
b=this.data;this.data=iF(a|0);iS(b,0,this.data,0,a)};iO.prototype.length=function(){return P(this.data)};iO.prototype.write=function(b,d,g,a){var
c=this.length();if(b+a>=c){var
e=iF(b+a),f=this.data;this.data=e;iS(f,0,this.data,0,c)}iS(d,g,this.data,b,a);return 0};iO.prototype.read=function(c,a,d,b){var
e=this.length();iS(this.data,c,a,d,b);return 0};iO.prototype.read_one=function(a){return G(this.data,a)};iO.prototype.close=function(){};iO.prototype.constructor=iO;function
jr(b,a){this.content={};this.root=b;this.lookupFun=a}jr.prototype.nm=function(a){return this.root+a};jr.prototype.lookup=function(b){if(!this.content[b]&&this.lookupFun){var
c=this.lookupFun(a(this.root),a(b));if(c!=0)this.content[b]=new
iO(c[1])}};jr.prototype.exists=function(a){if(a==o)return 1;var
c=a+iZ,d=new
RegExp(ma+c);for(var
b
in
this.content)if(b.match(d))return 1;this.lookup(a);return this.content[a]?1:0};jr.prototype.readdir=function(c){var
f=c==o?o:c+iZ,g=new
RegExp(ma+f+sC),d={},b=[];for(var
e
in
this.content){var
a=e.match(g);if(a&&!d[a[1]]){d[a[1]]=true;b.push(a[1])}}return b};jr.prototype.is_dir=function(a){var
d=a==o?o:a+iZ,e=new
RegExp(ma+d+sC),f=[];for(var
c
in
this.content){var
b=c.match(e);if(b)return 1}return 0};jr.prototype.unlink=function(a){var
b=this.content[a]?true:false;delete
this.content[a];return b};jr.prototype.open=function(a,b){if(b.rdonly&&b.wronly)jt(this.nm(a)+sl);if(b.text&&b.binary)jt(this.nm(a)+tm);this.lookup(a);if(this.content[a]){if(this.is_dir(a))jt(this.nm(a)+" : is a directory");if(b.create&&b.excl)jt(this.nm(a)+sk);var
c=this.content[a];if(b.truncate)c.truncate();return c}else
if(b.create){this.content[a]=new
iO(iF(0));return this.content[a]}else
abZ(this.nm(a))};jr.prototype.register=function(c,b){if(this.content[c])jt(this.nm(c)+sk);if(b
instanceof
js)this.content[c]=new
iO(b);else
if(b
instanceof
Array)this.content[c]=new
iO(ab2(b));else
if(b.toString){var
d=a(b.toString());this.content[c]=new
iO(d)}};jr.prototype.constructor=jr;function
ui(a){if(a.t!=4)n8(a);return a.c}function
it(a,c,b){b&=jG;if(a.t!=4){if(c==a.c.length){a.c+=String.fromCharCode(b);if(c+1==a.l)a.t=0;return 0}n8(a)}a.c[c]=b;return 0}function
lC(b,a,c){if(a>>>0>=b.l)uy();return it(b,a,c)}var
p_=iG.Buffer;function
j0(a){this.fs=require("fs");this.fd=a}j0.prototype=new
ug();j0.prototype.truncate=function(a){this.fs.ftruncateSync(this.fd,a|0)};j0.prototype.length=function(){return this.fs.fstatSync(this.fd).size};j0.prototype.write=function(f,b,c,e){var
a=ui(b);if(!(a
instanceof
iG.Uint8Array))a=new(iG.Uint8Array)(a);var
d=new
p_(a);this.fs.writeSync(this.fd,d,c,e,f);return 0};j0.prototype.read=function(g,d,c,f){var
a=ui(d);if(!(a
instanceof
iG.Uint8Array))a=new(iG.Uint8Array)(a);var
e=new
p_(a);this.fs.readSync(this.fd,e,c,f,g);for(var
b=0;b<f;b++)lC(d,c+b,e[c+b]);return 0};j0.prototype.read_one=function(c){var
b=new(iG.Uint8Array)(1),a=new
p_(b);this.fs.readSync(this.fd,a,0,1,c);return a[0]};j0.prototype.close=function(){this.fs.closeSync(this.fd)};j0.prototype.constructor=j0;function
jZ(a){this.fs=require("fs");this.root=a}jZ.prototype.nm=function(a){return this.root+a};jZ.prototype.exists=function(a){return this.fs.existsSync(this.nm(a))?1:0};jZ.prototype.readdir=function(a){return this.fs.readdirSync(this.nm(a))};jZ.prototype.is_dir=function(a){return this.fs.statSync(this.nm(a)).isDirectory()?1:0};jZ.prototype.unlink=function(a){var
b=this.fs.existsSync(this.nm(a))?1:0;this.fs.unlinkSync(this.nm(a));return b};jZ.prototype.open=function(f,c){var
a=require("constants"),b=0;for(var
e
in
c)switch(e){case"rdonly":b|=a.O_RDONLY;break;case"wronly":b|=a.O_WRONLY;break;case"append":b|=a.O_WRONLY|a.O_APPEND;break;case"create":b|=a.O_CREAT;break;case"truncate":b|=a.O_TRUNC;break;case"excl":b|=a.O_EXCL;break;case"binary":b|=a.O_BINARY;break;case"text":b|=a.O_TEXT;break;case"nonblock":b|=a.O_NONBLOCK;break}var
d=this.fs.openSync(this.nm(f),b);return new
j0(d)};jZ.prototype.rename=function(b,a){this.fs.renameSync(this.nm(b),this.nm(a))};jZ.prototype.constructor=jZ;var
lA=me.match(/[^\/]*\//)[0],mg=[];if(typeof
module!=="undefined"&&module.exports&&typeof
require!=="undefined")mg.push({path:lA,device:new
jZ(lA)});else
mg.push({path:lA,device:new
jr(lA)});mg.push({path:lA+sM,device:new
jr(lA+sM)});function
aca(b){var
f=abR(b),b=f.join(iZ),e=b+iZ,c;for(var
d=0;d<mg.length;d++){var
a=mg[d];if(e.search(a.path)==0&&(!c||c.path.length<a.path.length))c={path:a.path,device:a.device,rest:b.substring(a.path.length,b.length)}}return c}function
ux(e,f){var
b=j2[e],d=a(f),c=P(d);b.file.write(b.offset,d,0,c);b.offset+=c;return 0}function
ab9(a){var
b=iG;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stderr.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.error&&c.error(a)}}function
ab_(a){var
b=iG;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stdout.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.log&&c.log(a)}}function
oe(c,e,d,a){if(is.fds===undefined)is.fds=new
Array();a=a?a:{};var
b={};b.file=d;b.offset=a.append?d.length():0;b.flags=a;b.output=e;is.fds[c]=b;if(!is.fd_last_idx||c>is.fd_last_idx)is.fd_last_idx=c;return c}function
acb(c,b,g){var
a={};while(b){switch(b[1]){case
0:a.rdonly=1;break;case
1:a.wronly=1;break;case
2:a.append=1;break;case
3:a.create=1;break;case
4:a.truncate=1;break;case
5:a.excl=1;break;case
6:a.binary=1;break;case
7:a.text=1;break;case
8:a.nonblock=1;break}b=b[2]}if(a.rdonly&&a.wronly)jt(c.toString()+sl);if(a.text&&a.binary)jt(c.toString()+tm);var
d=aca(c),e=d.device.open(d.rest,a),f=is.fd_last_idx?is.fd_last_idx:0;return oe(f+1,ux,e,a)}oe(0,ux,new
iO(iF(0)));oe(1,ab_,new
iO(iF(0)));oe(2,ab9,new
iO(iF(0)));function
abS(c){var
b=is.fds[c];if(b.flags.wronly)jt(sH+c+" is writeonly");var
a={file:b.file,offset:b.offset,fd:c,opened:true,out:false,refill:null};j2[a.fd]=a;return a.fd}function
uq(c){var
b=is.fds[c];if(b.flags.rdonly)jt(sH+c+" is readonly");var
a={file:b.file,offset:b.offset,fd:c,opened:true,out:true,buffer:o};j2[a.fd]=a;return a.fd}function
abT(){var
b=0;for(var
a=0;a<j2.length;a++)if(j2[a]&&j2[a].opened&&j2[a].out)b=[0,j2[a].fd,b];return b}function
abU(g,d,h,f){var
a=j2[g];if(!a.opened)jt("Cannot output to a closed channel");var
c;if(h==0&&P(d)==f)c=d;else{c=iF(f);iS(d,h,c,0,f)}var
b=c.toString(),e=b.lastIndexOf("\n");if(e<0)a.buffer+=b;else{a.buffer+=b.substr(0,e+1);qc(g);a.buffer+=b.substr(e+1)}return 0}if(!Math.imul)Math.imul=function(b,a){a|=0;return((b>>16)*a<<16)+(b&L)*a|0};var
abV=Math.imul;function
lz(a,b){return+(lw(a,b,false)!=0)}function
abW(a){return+(a
instanceof
Array)}function
oc(a){return a
instanceof
Array?a[0]:a
instanceof
js?pS:1e3}function
ju(c,b,a){is[c+1]=b;if(a)is[a]=b}var
us={};function
ab1(a,b){us[n7(a)]=b;return 0}function
i3(a,b){if(a===b)return 1;a.t&6&&lx(a);b.t&6&&lx(b);return a.c==b.c?1:0}function
C(a,b){return 1-i3(a,b)}function
ab3(){return st/4|0}function
ab4(){return 0}function
ab5(){return[0,a(tf),32,0]}function
abY(a){throw a}function
ab0(){abY(is.Not_found)}function
uz(c){var
a=iG,b=c.toString();if(a.process&&a.process.env&&a.process.env[b]!=undefined)return kv(a.process.env[b]);ab0()}function
kg(a){var
b=1;while(a&&a.joo_tramp){a=a.joo_tramp.apply(null,a.joo_args);b++}return a}function
ir(b,a){return{joo_tramp:b,joo_args:a}}function
uw(a){return a}function
ur(a){return us[a]}function
iM(a){if(a
instanceof
Array)return a;if(iG.RangeError&&a
instanceof
iG.RangeError&&a.message&&a.message.match(/maximum call stack/i))return uw(is.Stack_overflow);if(iG.InternalError&&a
instanceof
iG.InternalError&&a.message&&a.message.match(/too much recursion/i))return uw(is.Stack_overflow);if(a
instanceof
iG.Error&&ur(pE))return[0,ur(pE),a];return[0,is.Failure,kv(String(a))]}function
b(a,b){return a.length==1?a(b):ku(a,[b])}function
g(a,b,c){return a.length==2?a(b,c):ku(a,[b,c])}function
p(a,b,c,d){return a.length==3?a(b,c,d):ku(a,[b,c,d])}function
j$(a,b,c,d,e){return a.length==4?a(b,c,d,e):ku(a,[b,c,d,e])}function
iH(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):ku(a,[b,c,d,e,f])}var
qy=[iw,a(tw),-1],j3=[iw,a(sR),-3],qg=[iw,a(s2),-4],kh=[iw,a(tY),-7],qz=[iw,a(sj),-8],qx=[iw,a(s5),-9],w=[iw,a(t8),-11],qw=[iw,a(tC),-12],op=[0,[11,a('File "'),[2,0,[11,a('", line '),[4,0,0,0,[11,a(", characters "),[4,0,0,0,[12,45,[4,0,0,0,[11,a(": "),[2,0,0]]]]]]]]]],a('File "%s", line %d, characters %d-%d: %s')],q9=[0,0,[0,0,0,0],[0,0,0,0]],oz=[0,0,0],oB=a("\x01\x02"),oC=a("\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01"),oO=[0,0,0,0,0,0,1,0],rW=[0,0,0],r6=[0,0];ju(11,qw,tC);ju(10,w,t8);ju(9,[iw,a(tj),-10],tj);ju(8,qx,s5);ju(7,qz,sj);ju(6,kh,tY);ju(5,[iw,a(sx),-6],sx);ju(4,[iw,a(sS),-5],sS);ju(3,qg,s2);ju(2,j3,sR);ju(1,[iw,a(tL),-2],tL);ju(0,qy,tw);var
R(a){if(typeof
a==="number")return 0;else
switch(a[0]){case
0:return[0,R(a[1])];case
1:return[1,R(a[1])];case
2:return[2,R(a[1])];case
3:return[3,R(a[1])];case
4:return[4,R(a[1])];case
5:return[5,R(a[1])];case
6:return[6,R(a[1])];case
7:return[7,R(a[1])];case
8:var
c=a[1];return[8,c,R(a[2])];case
9:var
b=a[1];return[9,b,b,R(a[3])];case
10:return[10,R(a[1])];case
11:return[11,R(a[1])];case
12:return[12,R(a[1])];case
13:return[13,R(a[1])];default:return[14,R(a[1])]}}function
iQ(a,b){if(typeof
a==="number")return b;else
switch(a[0]){case
0:return[0,iQ(a[1],b)];case
1:return[1,iQ(a[1],b)];case
2:return[2,iQ(a[1],b)];case
3:return[3,iQ(a[1],b)];case
4:return[4,iQ(a[1],b)];case
5:return[5,iQ(a[1],b)];case
6:return[6,iQ(a[1],b)];case
7:return[7,iQ(a[1],b)];case
8:var
c=a[1];return[8,c,iQ(a[2],b)];case
9:var
d=a[2],e=a[1];return[9,e,d,iQ(a[3],b)];case
10:return[10,iQ(a[1],b)];case
11:return[11,iQ(a[1],b)];case
12:return[12,iQ(a[1],b)];case
13:return[13,iQ(a[1],b)];default:return[14,iQ(a[1],b)]}}function
F(a,b){if(typeof
a==="number")return b;else
switch(a[0]){case
0:return[0,F(a[1],b)];case
1:return[1,F(a[1],b)];case
2:var
c=a[1];return[2,c,F(a[2],b)];case
3:var
d=a[1];return[3,d,F(a[2],b)];case
4:var
e=a[3],f=a[2],g=a[1];return[4,g,f,e,F(a[4],b)];case
5:var
h=a[3],i=a[2],j=a[1];return[5,j,i,h,F(a[4],b)];case
6:var
k=a[3],l=a[2],m=a[1];return[6,m,l,k,F(a[4],b)];case
7:var
n=a[3],o=a[2],p=a[1];return[7,p,o,n,F(a[4],b)];case
8:var
q=a[3],r=a[2],s=a[1];return[8,s,r,q,F(a[4],b)];case
9:return[9,F(a[1],b)];case
10:return[10,F(a[1],b)];case
11:var
t=a[1];return[11,t,F(a[2],b)];case
12:var
u=a[1];return[12,u,F(a[2],b)];case
13:var
v=a[2],w=a[1];return[13,w,v,F(a[3],b)];case
14:var
x=a[2],y=a[1];return[14,y,x,F(a[3],b)];case
15:return[15,F(a[1],b)];case
16:return[16,F(a[1],b)];case
17:var
z=a[1];return[17,z,F(a[2],b)];case
18:var
A=a[1];return[18,A,F(a[2],b)];case
19:return[19,F(a[1],b)];case
20:var
B=a[2],C=a[1];return[20,C,B,F(a[3],b)];case
21:var
D=a[1];return[21,D,F(a[2],b)];case
22:return[22,F(a[1],b)];case
23:var
E=a[1];return[23,E,F(a[2],b)];default:var
G=a[2],H=a[1];return[24,H,G,F(a[3],b)]}}function
N(a){throw[0,j3,a]}function
iT(a){throw[0,qg,a]}i2(0);function
og(a){return 0<=a?a:-a|0}var
uA=st;function
m(d,c){var
a=P(d),e=P(c),b=iF(a+e|0);iS(d,0,b,0,a);iS(c,0,b,a,e);return b}function
lD(a,b){if(a){var
c=a[1];return[0,c,lD(a[2],b)]}return b}abS(0);var
uF=uq(1),uG=uq(2),oh=[0,function(b){function
a(b){var
a=b;for(;;){if(a){var
c=a[2],d=a[1];try{qc(d)}catch(a){}var
a=c;continue}return 0}}return a(abT(0))}];function
uI(a){var
c=oh[1];oh[1]=function(d){b(a,0);return b(c,0)};return 0}function
uJ(a){return b(oh[1],0)}function
qh(c){var
b=0,a=c;for(;;){if(a){var
b=b+1|0,a=a[2];continue}return b}}function
kY(a){return a?a[1]:N(uK)}function
ki(d,c){var
a=d,b=c;for(;;){if(a){var
e=[0,a[1],b],a=a[2],b=e;continue}return b}}function
n(a){return ki(a,0)}function
lE(c,a){if(a){var
d=a[2],e=b(c,a[1]);return[0,e,lE(c,d)]}return 0}function
i4(d,c){var
a=c;for(;;){if(a){var
e=a[2];b(d,a[1]);var
a=e;continue}return 0}}function
jj(e,d,c){var
b=d,a=c;for(;;){if(a){var
f=a[2],b=g(e,b,a[1]),a=f;continue}return b}}function
qi(d,c){var
b=d,a=c;for(;;){if(0===b)return a;if(a){var
b=b-1|0,a=a[2];continue}throw[0,w,uM]}}function
jI(a){if(0<=a)if(!(jG<a))return a;return iT(uN)}function
qj(a){if(40<=a){if(92===a)return uO;var
c=ik<=a?0:1}else
if(32<=a){if(39<=a)return uP;var
c=1}else
if(14<=a)var
c=0;else
switch(a){case
8:return uQ;case
9:return uR;case
10:return uS;case
13:return uT;default:var
c=0}if(c){var
d=iF(1);it(d,0,a);return d}var
b=iF(4);it(b,0,92);it(b,1,48+(a/jN|0)|0);it(b,2,48+((a/10|0)%10|0)|0);it(b,3,48+(a%10|0)|0);return b}function
kw(a,c){var
b=iF(a);abz(b,0,a,c);return b}function
qk(c,b,a){if(0<=b)if(0<=a)if(!((P(c)-a|0)<b)){var
d=iF(a);iS(c,b,d,0,a);return d}return iT(uU)}function
ql(c,b,a){return qk(c,b,a)}function
qm(e,c,d,b,a){if(0<=a)if(0<=c)if(!((P(e)-a|0)<c))if(0<=b)if(!((P(d)-a|0)<b))return iS(e,c,d,b,a);return iT(uV)}function
jv(e,c,d,b,a){if(0<=a)if(0<=c)if(!((P(e)-a|0)<c))if(0<=b)if(!((P(d)-a|0)<b))return iS(e,c,d,b,a);return iT(uW)}function
qn(b,a){return kw(b,a)}function
jw(c,b,a){return qk(c,b,a)}function
uX(c,b){if(b){var
e=b[1],g=[0,0],f=[0,0],h=b[2];i4(function(a){g[1]++;f[1]=f[1]+P(a)|0;return 0},b);var
d=iF(f[1]+abV(P(c),g[1]-1|0)|0);iS(e,0,d,0,P(e));var
a=[0,P(e)];i4(function(b){iS(c,0,d,a[1],P(c));a[1]=a[1]+P(c)|0;iS(b,0,d,a[1],P(b));a[1]=a[1]+P(b)|0;return 0},h);return d}return uY}function
qo(g,d){var
c=P(d)-1|0,e=0;if(!(c<0)){var
a=e;for(;;){b(g,ji(d,a));var
f=a+1|0;if(c!==a){var
a=f;continue}break}}return 0}var
mh=v,oi=ab5(0)[1],mi=ab4(0),lF=(4*ab3(0)|0)-1|0;i2(0);function
qp(c,d){if(0===c)return[0];if(0<=c){var
e=mf(c,b(d,0)),f=c-1|0,g=1;if(!(f<1)){var
a=g;for(;;){e[a+1]=b(d,a);var
h=a+1|0;if(f!==a){var
a=h;continue}break}}return e}return iT(uZ)}function
oj(e,c,d,b,a){if(0<=a)if(0<=c)if(!((e.length-1-a|0)<c))if(0<=b)if(!((d.length-1-a|0)<b))return abu(e,c,d,b,a);return iT(u1)}function
qq(e,c){var
d=c.length-1-1|0,f=0;if(!(d<0)){var
a=f;for(;;){b(e,c[a+1]);var
g=a+1|0;if(d!==a){var
a=g;continue}break}}return 0}function
qr(a){if(a){var
d=0,c=a,g=a[2],h=a[1];for(;;){if(c){var
d=d+1|0,c=c[2];continue}var
f=mf(d,h),e=1,b=g;for(;;){if(b){var
i=b[2];f[e+1]=b[1];var
e=e+1|0,b=i;continue}return f}}}return[0]}i2(0);function
lG(h){function
n(a){return a?a[4]:0}function
c(b,e,a){var
c=b?b[4]:0,d=a?a[4]:0,f=d<=c?c+1|0:d+1|0;return[0,b,e,a,f]}function
e(b,f,a){var
g=b?b[4]:0,h=a?a[4]:0;if((h+2|0)<g){if(b){var
d=b[3],k=b[2],i=b[1],m=n(d);if(m<=n(i))return c(i,k,c(d,f,a));if(d){var
o=d[2],p=d[1],q=c(d[3],f,a);return c(c(i,k,p),o,q)}return iT(u2)}return iT(u3)}if((g+2|0)<h){if(a){var
j=a[3],l=a[2],e=a[1],r=n(e);if(r<=n(j))return c(c(b,f,e),l,j);if(e){var
s=e[2],t=e[1],u=c(e[3],l,j);return c(c(b,f,t),s,u)}return iT(u4)}return iT(u5)}var
v=h<=g?g+1|0:h+1|0;return[0,b,f,a,v]}function
a(c,b){if(b){var
d=b[3],f=b[2],i=b[1],j=g(h[1],c,f);if(0===j)return b;if(0<=j){var
k=a(c,d);return d===k?b:e(i,f,k)}var
l=a(c,i);return i===l?b:e(l,f,d)}return[0,0,c,0,1]}function
f(a){return[0,0,a,0,1]}function
x(b,a){if(a){var
c=a[3],d=a[2];return e(x(b,a[1]),d,c)}return f(b)}function
y(b,a){if(a){var
c=a[2],d=a[1];return e(d,c,y(b,a[3]))}return f(b)}function
d(b,f,a){if(b){if(a){var
g=a[4],h=b[4],i=a[3],j=a[2],k=a[1],l=b[3],m=b[2],n=b[1];return(g+2|0)<h?e(n,m,d(l,f,a)):(h+2|0)<g?e(d(b,f,k),j,i):c(b,f,a)}return y(f,b)}return x(f,a)}function
o(c){var
a=c;for(;;){if(a){var
b=a[1];if(b){var
a=b;continue}return a[2]}throw kh}}function
G(c){var
a=c;for(;;){if(a){var
b=a[3],d=a[2];if(b){var
a=b;continue}return d}throw kh}}function
r(a){if(a){var
b=a[1];if(b){var
c=a[3],d=a[2];return e(r(b),d,c)}return a[3]}return iT(u6)}function
j(b,a){if(b){if(a){var
c=r(a);return d(b,o(a),c)}return b}return a}function
i(b,a){if(a){var
c=a[3],e=a[2],f=a[1],l=g(h[1],b,e);if(0===l)return[0,f,1,c];if(0<=l){var
j=i(b,c),m=j[3],n=j[2];return[0,d(f,e,j[1]),n,m]}var
k=i(b,f),o=k[2],p=k[1];return[0,p,o,d(k[3],e,c)]}return u7}var
z=0;function
H(a){return a?0:1}function
I(e,d){var
a=d;for(;;){if(a){var
f=a[3],i=a[1],b=g(h[1],e,a[2]),c=0===b?1:0;if(c)return c;var
j=0<=b?f:i,a=j;continue}return 0}}function
s(d,b){if(b){var
a=b[3],f=b[2],c=b[1],i=g(h[1],d,f);if(0===i){if(c){if(a){var
l=r(a);return e(c,o(a),l)}return c}return a}if(0<=i){var
j=s(d,a);return a===j?b:e(c,f,j)}var
k=s(d,c);return c===k?b:e(k,f,a)}return 0}function
k(c,b){if(c){if(b){var
g=b[4],e=b[2],h=c[4],f=c[2],m=b[3],n=b[1],o=c[3],p=c[1];if(g<=h){if(1===g)return a(e,c);var
j=i(f,b),q=j[1],r=k(o,j[3]);return d(k(p,q),f,r)}if(1===h)return a(f,b);var
l=i(e,c),s=l[1],t=k(l[3],m);return d(k(s,n),e,t)}return c}return b}function
l(a,c){if(a){if(c){var
e=a[3],f=a[2],g=a[1],b=i(f,c),h=b[1];if(0===b[2]){var
k=l(e,b[3]);return j(l(g,h),k)}var
m=l(e,b[3]);return d(l(g,h),f,m)}return 0}return 0}function
m(a,c){if(a){if(c){var
e=a[3],f=a[2],g=a[1],b=i(f,c),h=b[1];if(0===b[2]){var
k=m(e,b[3]);return d(m(g,h),f,k)}var
l=m(e,b[3]);return j(m(g,h),l)}return a}return 0}function
p(d,c){var
a=d,b=c;for(;;){if(a){var
e=[0,a[2],a[3],b],a=a[1],b=e;continue}return b}}function
A(l,k){var
m=p(k,0),b=p(l,0),a=m;for(;;){if(b){if(a){var
d=a[3],e=a[2],f=b[3],i=b[2],c=g(h[1],b[1],a[1]);if(0===c){var
j=p(e,d),b=p(i,f),a=j;continue}return c}return 1}return a?-1:0}}function
J(b,a){return 0===A(b,a)?1:0}function
q(o,n){var
a=o,b=n;for(;;){if(a){if(b){var
f=b[3],i=b[1],c=a[3],d=a[2],e=a[1],j=g(h[1],d,b[2]);if(0===j){var
k=q(e,i);if(k){var
a=c,b=f;continue}return k}if(0<=j){var
l=q([0,0,d,c,0],f);if(l){var
a=e;continue}return l}var
m=q([0,e,d,0,0],i);if(m){var
a=c;continue}return m}return 0}return 1}}function
B(c,d){var
a=d;for(;;){if(a){var
e=a[3],f=a[2];B(c,a[1]);b(c,f);var
a=e;continue}return 0}}function
C(c,e,d){var
a=e,b=d;for(;;){if(a){var
f=a[3],h=a[2],i=g(c,h,C(c,a[1],b)),a=f,b=i;continue}return b}}function
D(c,g){var
a=g;for(;;){if(a){var
h=a[3],i=a[1],d=b(c,a[2]);if(d){var
e=D(c,i);if(e){var
a=h;continue}var
f=e}else
var
f=d;return f}return 1}}function
E(c,g){var
a=g;for(;;){if(a){var
h=a[3],i=a[1],d=b(c,a[2]);if(d)var
e=d;else{var
f=E(c,i);if(!f){var
a=h;continue}var
e=f}return e}return 0}}function
t(c,a){if(a){var
g=a[3],h=a[2],i=a[1],e=t(c,i),k=b(c,h),f=t(c,g);if(k){if(i===e)if(g===f)return a;return d(e,h,f)}return j(e,f)}return 0}function
u(c,a){if(a){var
e=a[2],m=a[3],f=u(c,a[1]),g=f[2],h=f[1],n=b(c,e),i=u(c,m),k=i[2],l=i[1];if(n){var
o=j(g,k);return[0,d(h,e,l),o]}var
p=d(g,e,k);return[0,j(h,l),p]}return u8}function
v(a){if(a){var
b=a[1],c=v(a[3]);return(v(b)+1|0)+c|0}return 0}function
F(d,c){var
b=d,a=c;for(;;){if(a){var
e=a[2],f=a[1],b=[0,e,F(b,a[3])],a=f;continue}return b}}function
K(a){return F(0,a)}function
L(e,d){var
a=d;for(;;){if(a){var
b=a[2],f=a[3],i=a[1],c=g(h[1],e,b);if(0===c)return b;var
j=0<=c?f:i,a=j;continue}throw kh}}return[0,z,H,I,a,f,s,k,l,m,A,J,q,B,C,D,E,t,u,v,K,o,G,o,i,L,function(d){if(d){var
k=d[2],e=d[1];if(k){var
l=k[2],i=k[1];if(l){var
n=l[2],o=l[1];if(n){var
p=n[2],r=n[1];if(p){if(p[2]){var
b=h[1],m=function(j,f){if(2===j){if(f){var
u=f[2];if(u){var
m=u[1],k=f[1],v=g(b,k,m);return 0===v?[0,k,0]:0<=v?[0,m,[0,k,0]]:[0,k,[0,m,0]]}}}else
if(3===j)if(f){var
o=f[2];if(o){var
w=o[2];if(w){var
c=w[1],a=o[1],d=f[1],x=g(b,d,a);if(0===x){var
y=g(b,a,c);return 0===y?[0,a,0]:0<=y?[0,c,[0,a,0]]:[0,a,[0,c,0]]}if(0<=x){var
z=g(b,d,c);if(0===z)return[0,a,[0,d,0]];if(0<=z){var
A=g(b,a,c);return 0===A?[0,a,[0,d,0]]:0<=A?[0,c,[0,a,[0,d,0]]]:[0,a,[0,c,[0,d,0]]]}return[0,a,[0,d,[0,c,0]]]}var
B=g(b,a,c);if(0===B)return[0,d,[0,a,0]];if(0<=B){var
C=g(b,d,c);return 0===C?[0,d,[0,a,0]]:0<=C?[0,c,[0,d,[0,a,0]]]:[0,d,[0,c,[0,a,0]]]}return[0,d,[0,a,[0,c,0]]]}}}var
n=j>>1,D=qi(n,f),E=t(n,f),i=E,h=t(j-n|0,D),e=0;for(;;){if(i){if(h){var
p=h[2],q=h[1],r=i[2],l=i[1],s=g(b,l,q);if(0===s){var
i=r,h=p,e=[0,l,e];continue}if(0<s){var
i=r,e=[0,l,e];continue}var
h=p,e=[0,q,e];continue}return ki(i,e)}return ki(h,e)}},t=function(j,f){if(2===j){if(f){var
u=f[2];if(u){var
n=u[1],k=f[1],v=g(b,k,n);return 0===v?[0,k,0]:0<v?[0,k,[0,n,0]]:[0,n,[0,k,0]]}}}else
if(3===j)if(f){var
p=f[2];if(p){var
w=p[2];if(w){var
c=w[1],a=p[1],d=f[1],x=g(b,d,a);if(0===x){var
y=g(b,a,c);return 0===y?[0,a,0]:0<y?[0,a,[0,c,0]]:[0,c,[0,a,0]]}if(0<x){var
z=g(b,a,c);if(0===z)return[0,d,[0,a,0]];if(0<z)return[0,d,[0,a,[0,c,0]]];var
A=g(b,d,c);return 0===A?[0,d,[0,a,0]]:0<A?[0,d,[0,c,[0,a,0]]]:[0,c,[0,d,[0,a,0]]]}var
B=g(b,d,c);if(0===B)return[0,a,[0,d,0]];if(0<B)return[0,a,[0,d,[0,c,0]]];var
C=g(b,a,c);return 0===C?[0,a,[0,d,0]]:0<C?[0,a,[0,c,[0,d,0]]]:[0,c,[0,a,[0,d,0]]]}}}var
o=j>>1,D=qi(o,f),E=m(o,f),i=E,h=m(j-o|0,D),e=0;for(;;){if(i){if(h){var
q=h[2],r=h[1],s=i[2],l=i[1],t=g(b,l,r);if(0===t){var
i=s,h=q,e=[0,l,e];continue}if(0<=t){var
h=q,e=[0,r,e];continue}var
i=s,e=[0,l,e];continue}return ki(i,e)}return ki(h,e)}},q=qh(d),s=2<=q?m(q,d):d,j=function(b,a){if(!(3<b>>>0))switch(b){case
0:return[0,0,a];case
1:if(a)return[0,[0,0,a[1],0,1],a[2]];break;case
2:if(a){var
e=a[2];if(e)return[0,[0,[0,0,a[1],0,1],e[1],0,2],e[2]]}break;default:if(a){var
f=a[2];if(f){var
g=f[2];if(g)return[0,[0,[0,0,a[1],0,1],f[1],[0,0,g[1],0,1],2],g[2]]}}}var
h=b/2|0,i=j(h,a),d=i[2],l=i[1];if(d){var
m=d[1],k=j((b-h|0)-1|0,d[2]),n=k[2];return[0,c(l,m,k[1]),n]}throw[0,w,u9]};return j(qh(s),s)[1]}var
u=p[1];return a(u,a(r,a(o,a(i,f(e)))))}return a(r,a(o,a(i,f(e))))}return a(o,a(i,f(e)))}return a(i,f(e))}return f(e)}return z}]}i2(0);i2(0);i2(0);i2(0);function
il(a){var
b=1<=a?a:1,c=lF<b?lF:b,d=iF(c);return[0,d,0,c,d]}function
iu(a){return ql(a[1],0,a[2])}function
ok(a,c){var
b=[0,a[3]];for(;;){if(b[1]<(a[2]+c|0)){b[1]=2*b[1]|0;continue}if(lF<b[1])if((a[2]+c|0)<=lF)b[1]=lF;else
N(u_);var
d=iF(b[1]);qm(a[1],0,d,0,a[2]);a[1]=d;a[3]=b[1];return 0}}function
ix(a,c){var
b=a[2];if(a[3]<=b)ok(a,1);it(a[1],b,c);a[2]=b+1|0;return 0}function
Q(a,c){var
b=P(c),d=a[2]+b|0;if(a[3]<d)ok(a,b);jv(c,0,a[1],a[2],b);a[2]=d;return 0}var
ol=-6;function
qs(a){return[0,0,iF(a)]}function
qt(a,h){var
b=P(a[2]),c=a[1]+h|0,d=b<c?1:0;if(d){var
e=b*2|0,i=uk(e,c)?e:c,f=iF(i);qm(a[2],0,f,0,b);a[2]=f;var
g=0}else
var
g=d;return g}function
lH(a,b){qt(a,1);lC(a[2],a[1],b);a[1]=a[1]+1|0;return 0}function
iI(a,c){var
b=P(c);qt(a,b);jv(c,0,a[2],a[1],b);a[1]=a[1]+b|0;return 0}function
qu(a){return ql(a[2],0,a[1])}function
om(b,c){var
a=c;for(;;)if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
d=a[1];iI(b,vi);var
a=d;continue;case
1:var
e=a[1];iI(b,vj);var
a=e;continue;case
2:var
f=a[1];iI(b,vk);var
a=f;continue;case
3:var
g=a[1];iI(b,vl);var
a=g;continue;case
4:var
h=a[1];iI(b,vm);var
a=h;continue;case
5:var
i=a[1];iI(b,vn);var
a=i;continue;case
6:var
j=a[1];iI(b,vo);var
a=j;continue;case
7:var
k=a[1];iI(b,vp);var
a=k;continue;case
8:var
l=a[2],m=a[1];iI(b,vq);om(b,m);iI(b,vr);var
a=l;continue;case
9:var
n=a[3],o=a[1];iI(b,vs);om(b,o);iI(b,vt);var
a=n;continue;case
10:var
p=a[1];iI(b,vu);var
a=p;continue;case
11:var
q=a[1];iI(b,vv);var
a=q;continue;case
12:var
r=a[1];iI(b,vw);var
a=r;continue;case
13:var
s=a[1];iI(b,vx);var
a=s;continue;default:var
t=a[1];iI(b,vy);var
a=t;continue}}function
iy(a){if(typeof
a==="number")return 0;else
switch(a[0]){case
0:return[0,iy(a[1])];case
1:return[1,iy(a[1])];case
2:return[2,iy(a[1])];case
3:return[3,iy(a[1])];case
4:return[4,iy(a[1])];case
5:return[5,iy(a[1])];case
6:return[6,iy(a[1])];case
7:return[7,iy(a[1])];case
8:var
b=a[1];return[8,b,iy(a[2])];case
9:var
c=a[2],d=a[1];return[9,c,d,iy(a[3])];case
10:return[10,iy(a[1])];case
11:return[11,iy(a[1])];case
12:return[12,iy(a[1])];case
13:return[13,iy(a[1])];default:return[14,iy(a[1])]}}function
iJ(a){if(typeof
a==="number"){var
s=function(a){return 0},t=function(a){return 0},u=function(a){return 0};return[0,function(a){return 0},u,t,s]}else
switch(a[0]){case
0:var
c=iJ(a[1]),v=c[4],w=c[3],x=c[2],y=c[1],z=function(a){b(x,0);return 0};return[0,function(a){b(y,0);return 0},z,w,v];case
1:var
d=iJ(a[1]),A=d[4],B=d[3],C=d[2],D=d[1],E=function(a){b(C,0);return 0};return[0,function(a){b(D,0);return 0},E,B,A];case
2:var
e=iJ(a[1]),F=e[4],G=e[3],H=e[2],I=e[1],J=function(a){b(H,0);return 0};return[0,function(a){b(I,0);return 0},J,G,F];case
3:var
f=iJ(a[1]),K=f[4],L=f[3],M=f[2],N=f[1],O=function(a){b(M,0);return 0};return[0,function(a){b(N,0);return 0},O,L,K];case
4:var
g=iJ(a[1]),P=g[4],Q=g[3],R=g[2],S=g[1],T=function(a){b(R,0);return 0};return[0,function(a){b(S,0);return 0},T,Q,P];case
5:var
h=iJ(a[1]),U=h[4],V=h[3],W=h[2],X=h[1],Y=function(a){b(W,0);return 0};return[0,function(a){b(X,0);return 0},Y,V,U];case
6:var
i=iJ(a[1]),Z=i[4],_=i[3],$=i[2],aa=i[1],ab=function(a){b($,0);return 0};return[0,function(a){b(aa,0);return 0},ab,_,Z];case
7:var
j=iJ(a[1]),ac=j[4],ad=j[3],ae=j[2],af=j[1],ag=function(a){b(ae,0);return 0};return[0,function(a){b(af,0);return 0},ag,ad,ac];case
8:var
k=iJ(a[2]),ah=k[4],ai=k[3],aj=k[2],ak=k[1],al=function(a){b(aj,0);return 0};return[0,function(a){b(ak,0);return 0},al,ai,ah];case
9:var
am=a[2],an=a[1],l=iJ(a[3]),ao=l[4],ap=l[3],aq=l[2],ar=l[1],m=iJ(iB(iy(an),am)),as=m[4],at=m[3],au=m[2],av=m[1],aw=function(a){b(as,0);b(ao,0);return 0},ax=function(a){b(ap,0);b(at,0);return 0},ay=function(a){b(au,0);b(aq,0);return 0};return[0,function(a){b(ar,0);b(av,0);return 0},ay,ax,aw];case
10:var
n=iJ(a[1]),az=n[4],aA=n[3],aB=n[2],aC=n[1],aD=function(a){b(aB,0);return 0};return[0,function(a){b(aC,0);return 0},aD,aA,az];case
11:var
o=iJ(a[1]),aE=o[4],aF=o[3],aG=o[2],aH=o[1],aI=function(a){b(aG,0);return 0};return[0,function(a){b(aH,0);return 0},aI,aF,aE];case
12:var
p=iJ(a[1]),aJ=p[4],aK=p[3],aL=p[2],aM=p[1],aN=function(a){b(aL,0);return 0};return[0,function(a){b(aM,0);return 0},aN,aK,aJ];case
13:var
q=iJ(a[1]),aO=q[4],aP=q[3],aQ=q[2],aR=q[1],aS=function(a){b(aO,0);return 0},aT=function(a){b(aP,0);return 0},aU=function(a){b(aQ,0);return 0};return[0,function(a){b(aR,0);return 0},aU,aT,aS];default:var
r=iJ(a[1]),aV=r[4],aW=r[3],aX=r[2],aY=r[1],aZ=function(a){b(aV,0);return 0},a0=function(a){b(aW,0);return 0},a1=function(a){b(aX,0);return 0};return[0,function(a){b(aY,0);return 0},a1,a0,aZ]}}function
iB(d,c){if(typeof
d==="number")if(typeof
c==="number")return 0;else
switch(c[0]){case
10:var
a=0;break;case
11:var
a=1;break;case
12:var
a=2;break;case
13:var
a=3;break;case
14:var
a=4;break;case
8:var
a=5;break;case
9:var
a=6;break;default:throw[0,w,vz]}else
switch(d[0]){case
0:var
t=d[1];if(typeof
c==="number")var
e=1;else
switch(c[0]){case
0:return[0,iB(t,c[1])];case
8:var
a=5,e=0;break;case
9:var
a=6,e=0;break;case
10:var
a=0,e=0;break;case
11:var
a=1,e=0;break;case
12:var
a=2,e=0;break;case
13:var
a=3,e=0;break;case
14:var
a=4,e=0;break;default:var
e=1}if(e)var
a=7;break;case
1:var
u=d[1];if(typeof
c==="number")var
f=1;else
switch(c[0]){case
1:return[1,iB(u,c[1])];case
8:var
a=5,f=0;break;case
9:var
a=6,f=0;break;case
10:var
a=0,f=0;break;case
11:var
a=1,f=0;break;case
12:var
a=2,f=0;break;case
13:var
a=3,f=0;break;case
14:var
a=4,f=0;break;default:var
f=1}if(f)var
a=7;break;case
2:var
v=d[1];if(typeof
c==="number")var
g=1;else
switch(c[0]){case
2:return[2,iB(v,c[1])];case
8:var
a=5,g=0;break;case
9:var
a=6,g=0;break;case
10:var
a=0,g=0;break;case
11:var
a=1,g=0;break;case
12:var
a=2,g=0;break;case
13:var
a=3,g=0;break;case
14:var
a=4,g=0;break;default:var
g=1}if(g)var
a=7;break;case
3:var
x=d[1];if(typeof
c==="number")var
h=1;else
switch(c[0]){case
3:return[3,iB(x,c[1])];case
8:var
a=5,h=0;break;case
9:var
a=6,h=0;break;case
10:var
a=0,h=0;break;case
11:var
a=1,h=0;break;case
12:var
a=2,h=0;break;case
13:var
a=3,h=0;break;case
14:var
a=4,h=0;break;default:var
h=1}if(h)var
a=7;break;case
4:var
y=d[1];if(typeof
c==="number")var
i=1;else
switch(c[0]){case
4:return[4,iB(y,c[1])];case
8:var
a=5,i=0;break;case
9:var
a=6,i=0;break;case
10:var
a=0,i=0;break;case
11:var
a=1,i=0;break;case
12:var
a=2,i=0;break;case
13:var
a=3,i=0;break;case
14:var
a=4,i=0;break;default:var
i=1}if(i)var
a=7;break;case
5:var
z=d[1];if(typeof
c==="number")var
j=1;else
switch(c[0]){case
5:return[5,iB(z,c[1])];case
8:var
a=5,j=0;break;case
9:var
a=6,j=0;break;case
10:var
a=0,j=0;break;case
11:var
a=1,j=0;break;case
12:var
a=2,j=0;break;case
13:var
a=3,j=0;break;case
14:var
a=4,j=0;break;default:var
j=1}if(j)var
a=7;break;case
6:var
A=d[1];if(typeof
c==="number")var
k=1;else
switch(c[0]){case
6:return[6,iB(A,c[1])];case
8:var
a=5,k=0;break;case
9:var
a=6,k=0;break;case
10:var
a=0,k=0;break;case
11:var
a=1,k=0;break;case
12:var
a=2,k=0;break;case
13:var
a=3,k=0;break;case
14:var
a=4,k=0;break;default:var
k=1}if(k)var
a=7;break;case
7:var
B=d[1];if(typeof
c==="number")var
l=1;else
switch(c[0]){case
7:return[7,iB(B,c[1])];case
8:var
a=5,l=0;break;case
9:var
a=6,l=0;break;case
10:var
a=0,l=0;break;case
11:var
a=1,l=0;break;case
12:var
a=2,l=0;break;case
13:var
a=3,l=0;break;case
14:var
a=4,l=0;break;default:var
l=1}if(l)var
a=7;break;case
8:var
C=d[2],D=d[1];if(typeof
c==="number")var
n=1;else
switch(c[0]){case
8:var
E=c[1],F=iB(C,c[2]);return[8,iB(D,E),F];case
10:var
a=0,n=0;break;case
11:var
a=1,n=0;break;case
12:var
a=2,n=0;break;case
13:var
a=3,n=0;break;case
14:var
a=4,n=0;break;default:var
n=1}if(n)throw[0,w,vI];break;case
9:var
G=d[3],H=d[2],I=d[1];if(typeof
c==="number")var
m=1;else
switch(c[0]){case
8:var
a=5,m=0;break;case
9:var
J=c[3],K=c[2],L=c[1],s=iJ(iB(iy(H),L)),M=s[4];b(s[2],0);b(M,0);return[9,I,K,iB(G,J)];case
10:var
a=0,m=0;break;case
11:var
a=1,m=0;break;case
12:var
a=2,m=0;break;case
13:var
a=3,m=0;break;case
14:var
a=4,m=0;break;default:var
m=1}if(m)throw[0,w,vJ];break;case
10:var
N=d[1];if(typeof
c!=="number"&&10===c[0])return[10,iB(N,c[1])];throw[0,w,vK];case
11:var
O=d[1];if(typeof
c==="number")var
r=1;else
switch(c[0]){case
10:var
a=0,r=0;break;case
11:return[11,iB(O,c[1])];default:var
r=1}if(r)throw[0,w,vL];break;case
12:var
P=d[1];if(typeof
c==="number")var
q=1;else
switch(c[0]){case
10:var
a=0,q=0;break;case
11:var
a=1,q=0;break;case
12:return[12,iB(P,c[1])];default:var
q=1}if(q)throw[0,w,vM];break;case
13:var
Q=d[1];if(typeof
c==="number")var
p=1;else
switch(c[0]){case
10:var
a=0,p=0;break;case
11:var
a=1,p=0;break;case
12:var
a=2,p=0;break;case
13:return[13,iB(Q,c[1])];default:var
p=1}if(p)throw[0,w,vN];break;default:var
R=d[1];if(typeof
c==="number")var
o=1;else
switch(c[0]){case
10:var
a=0,o=0;break;case
11:var
a=1,o=0;break;case
12:var
a=2,o=0;break;case
13:var
a=3,o=0;break;case
14:return[14,iB(R,c[1])];default:var
o=1}if(o)throw[0,w,vO]}switch(a){case
0:throw[0,w,vC];case
1:throw[0,w,vD];case
2:throw[0,w,vE];case
3:throw[0,w,vF];case
4:throw[0,w,vG];case
5:throw[0,w,vA];case
6:throw[0,w,vB];default:throw[0,w,vH]}}var
iK=[iw,vP,i2(0)];function
on(b,a){if(typeof
b==="number")return[0,0,a];else{if(0===b[0])return[0,[0,b[1],b[2]],a];if(typeof
a!=="number"&&2===a[0])return[0,[1,b[1]],a[1]];throw iK}}function
lI(e,b,d){var
a=on(e,d);if(typeof
b==="number"){if(0===b)return[0,a[1],0,a[2]];var
c=a[2];if(typeof
c!=="number"&&2===c[0])return[0,a[1],1,c[1]];throw iK}return[0,a[1],[0,b[1]],a[2]]}function
i5(d,c,b){var
a=z(c,b);return[0,[23,d,a[1]],a[2]]}function
z(b,a){if(typeof
b==="number")return[0,0,a];else
switch(b[0]){case
0:if(typeof
a!=="number"&&0===a[0]){var
r=z(b[1],a[1]);return[0,[0,r[1]],r[2]]}break;case
1:if(typeof
a!=="number"&&0===a[0]){var
s=z(b[1],a[1]);return[0,[1,s[1]],s[2]]}break;case
2:var
aa=b[2],t=on(b[1],a),e=t[2],ab=t[1];if(typeof
e!=="number"&&1===e[0]){var
u=z(aa,e[1]);return[0,[2,ab,u[1]],u[2]]}throw iK;case
3:var
ac=b[2],v=on(b[1],a),f=v[2],ad=v[1];if(typeof
f!=="number"&&1===f[0]){var
w=z(ac,f[1]);return[0,[3,ad,w[1]],w[2]]}throw iK;case
4:var
ae=b[4],af=b[1],g=lI(b[2],b[3],a),h=g[3],ag=g[2],ah=g[1];if(typeof
h!=="number"&&2===h[0]){var
x=z(ae,h[1]);return[0,[4,af,ah,ag,x[1]],x[2]]}throw iK;case
5:var
ai=b[4],aj=b[1],i=lI(b[2],b[3],a),j=i[3],ak=i[2],al=i[1];if(typeof
j!=="number"&&3===j[0]){var
y=z(ai,j[1]);return[0,[5,aj,al,ak,y[1]],y[2]]}throw iK;case
6:var
am=b[4],an=b[1],k=lI(b[2],b[3],a),l=k[3],ao=k[2],ap=k[1];if(typeof
l!=="number"&&4===l[0]){var
A=z(am,l[1]);return[0,[6,an,ap,ao,A[1]],A[2]]}throw iK;case
7:var
aq=b[4],ar=b[1],m=lI(b[2],b[3],a),n=m[3],as=m[2],at=m[1];if(typeof
n!=="number"&&5===n[0]){var
B=z(aq,n[1]);return[0,[7,ar,at,as,B[1]],B[2]]}throw iK;case
8:var
au=b[4],av=b[1],o=lI(b[2],b[3],a),p=o[3],aw=o[2],ax=o[1];if(typeof
p!=="number"&&6===p[0]){var
C=z(au,p[1]);return[0,[8,av,ax,aw,C[1]],C[2]]}throw iK;case
9:if(typeof
a!=="number"&&7===a[0]){var
D=z(b[1],a[1]);return[0,[9,D[1]],D[2]]}break;case
10:var
E=z(b[1],a);return[0,[10,E[1]],E[2]];case
11:var
ay=b[1],F=z(b[2],a);return[0,[11,ay,F[1]],F[2]];case
12:var
az=b[1],G=z(b[2],a);return[0,[12,az,G[1]],G[2]];case
13:if(typeof
a!=="number"&&8===a[0]){var
H=a[1],aA=a[2],aB=b[3],aC=b[1];if(lz([0,b[2]],[0,H]))throw iK;var
I=z(aB,aA);return[0,[13,aC,H,I[1]],I[2]]}break;case
14:if(typeof
a!=="number"&&9===a[0]){var
J=a[1],aD=a[3],aE=b[3],aF=b[2],aG=b[1],aH=[0,R(J)];if(lz([0,R(aF)],aH))throw iK;var
K=z(aE,R(aD));return[0,[14,aG,J,K[1]],K[2]]}break;case
15:if(typeof
a!=="number"&&10===a[0]){var
L=z(b[1],a[1]);return[0,[15,L[1]],L[2]]}break;case
16:if(typeof
a!=="number"&&11===a[0]){var
M=z(b[1],a[1]);return[0,[16,M[1]],M[2]]}break;case
17:var
aI=b[1],N=z(b[2],a);return[0,[17,aI,N[1]],N[2]];case
18:var
O=b[2],q=b[1];if(0===q[0]){var
T=q[1],aM=T[2],U=z(T[1],a),aN=U[1],V=z(O,U[2]);return[0,[18,[0,[0,aN,aM]],V[1]],V[2]]}var
W=q[1],aO=W[2],X=z(W[1],a),aP=X[1],Y=z(O,X[2]);return[0,[18,[1,[0,aP,aO]],Y[1]],Y[2]];case
19:if(typeof
a!=="number"&&13===a[0]){var
P=z(b[1],a[1]);return[0,[19,P[1]],P[2]]}break;case
20:if(typeof
a!=="number"&&1===a[0]){var
aJ=b[2],aK=b[1],Q=z(b[3],a[1]);return[0,[20,aK,aJ,Q[1]],Q[2]]}break;case
21:if(typeof
a!=="number"&&2===a[0]){var
aL=b[1],S=z(b[2],a[1]);return[0,[21,aL,S[1]],S[2]]}break;case
23:var
d=b[2],c=b[1];if(typeof
c==="number")switch(c){case
0:return i5(c,d,a);case
1:return i5(c,d,a);case
2:return i5(c,d,a);case
3:if(typeof
a!=="number"&&14===a[0]){var
Z=z(d,a[1]);return[0,[23,3,Z[1]],Z[2]]}throw iK;default:return i5(c,d,a)}else
switch(c[0]){case
0:return i5(c,d,a);case
1:return i5(c,d,a);case
2:return i5(c,d,a);case
3:return i5(c,d,a);case
4:return i5(c,d,a);case
5:return i5(c,d,a);case
6:return i5(c,d,a);case
7:return i5([7,c[1],c[2]],d,a);case
8:var
aQ=c[1],_=iU(c[2],d,a),$=_[2];return[0,[23,[8,aQ,_[1]],$[1]],$[2]];case
9:return i5(c,d,a);default:return i5(c,d,a)}}throw iK}function
iU(c,d,a){if(typeof
c==="number")return[0,0,z(d,a)];else
switch(c[0]){case
0:if(typeof
a!=="number"&&0===a[0]){var
g=iU(c[1],d,a[1]);return[0,[0,g[1]],g[2]]}break;case
1:if(typeof
a!=="number"&&1===a[0]){var
h=iU(c[1],d,a[1]);return[0,[1,h[1]],h[2]]}break;case
2:if(typeof
a!=="number"&&2===a[0]){var
i=iU(c[1],d,a[1]);return[0,[2,i[1]],i[2]]}break;case
3:if(typeof
a!=="number"&&3===a[0]){var
j=iU(c[1],d,a[1]);return[0,[3,j[1]],j[2]]}break;case
4:if(typeof
a!=="number"&&4===a[0]){var
k=iU(c[1],d,a[1]);return[0,[4,k[1]],k[2]]}break;case
5:if(typeof
a!=="number"&&5===a[0]){var
l=iU(c[1],d,a[1]);return[0,[5,l[1]],l[2]]}break;case
6:if(typeof
a!=="number"&&6===a[0]){var
m=iU(c[1],d,a[1]);return[0,[6,m[1]],m[2]]}break;case
7:if(typeof
a!=="number"&&7===a[0]){var
n=iU(c[1],d,a[1]);return[0,[7,n[1]],n[2]]}break;case
8:if(typeof
a!=="number"&&8===a[0]){var
o=a[1],w=a[2],x=c[2];if(lz([0,c[1]],[0,o]))throw iK;var
p=iU(x,d,w);return[0,[8,o,p[1]],p[2]]}break;case
9:if(typeof
a!=="number"&&9===a[0]){var
e=a[2],f=a[1],y=a[3],A=c[3],B=c[2],C=c[1],D=[0,R(f)];if(lz([0,R(C)],D))throw iK;var
E=[0,R(e)];if(lz([0,R(B)],E))throw iK;var
q=iJ(iB(iy(f),e)),F=q[4];b(q[2],0);b(F,0);var
r=iU(R(A),d,y),G=r[2];return[0,[9,f,e,iy(r[1])],G]}break;case
10:if(typeof
a!=="number"&&10===a[0]){var
s=iU(c[1],d,a[1]);return[0,[10,s[1]],s[2]]}break;case
11:if(typeof
a!=="number"&&11===a[0]){var
t=iU(c[1],d,a[1]);return[0,[11,t[1]],t[2]]}break;case
13:if(typeof
a!=="number"&&13===a[0]){var
u=iU(c[1],d,a[1]);return[0,[13,u[1]],u[2]]}break;case
14:if(typeof
a!=="number"&&14===a[0]){var
v=iU(c[1],d,a[1]);return[0,[14,v[1]],v[2]]}break}throw iK}function
i6(k,i,a){var
b=P(a),j=0<=i?k:0,d=og(i);if(d<=b)return a;var
l=2===j?48:32,c=kw(d,l);switch(j){case
0:jv(a,0,c,0,b);break;case
1:jv(a,0,c,d-b|0,b);break;default:if(0<b){if(43===G(a,0))var
e=1;else
if(45===G(a,0))var
e=1;else
if(32===G(a,0))var
e=1;else
var
g=0,e=0;if(e){lC(c,0,G(a,0));jv(a,1,c,(d-b|0)+1|0,b-1|0);var
g=1}}else
var
g=0;if(!g){if(1<b)if(48===G(a,0)){if(kq===G(a,1))var
h=1;else
if(88===G(a,1))var
h=1;else
var
f=0,h=0;if(h){lC(c,1,G(a,1));jv(a,2,c,(d-b|0)+2|0,b-2|0);var
f=1}}else
var
f=0;else
var
f=0;if(!f)jv(a,0,c,d-b|0,b)}}return c}function
kZ(j,b){var
c=og(j),a=P(b),d=G(b,0);if(58<=d)var
e=71<=d?5<(d+ti|0)>>>0?1:0:65<=d?0:1;else{if(32===d)var
f=1;else
if(43<=d)switch(d+m_|0){case
5:if(a<(c+2|0))if(1<a){var
k=kq===G(b,1)?0:88===G(b,1)?0:1;if(!k){var
h=kw(c+2|0,48);lC(h,1,G(b,1));jv(b,2,h,(c-a|0)+4|0,a-2|0);return h}}var
e=0,f=0;break;case
0:case
2:var
f=1;break;case
1:case
3:case
4:var
e=1,f=0;break;default:var
e=0,f=0}else
var
e=1,f=0;if(f){if(a<(c+1|0)){var
g=kw(c+1|0,48);lC(g,0,d);jv(b,1,g,(c-a|0)+2|0,a-1|0);return g}var
e=1}}if(!e)if(a<c){var
i=kw(c,48);jv(b,0,i,c-a|0,a);return i}return b}function
vQ(d){var
j=0;for(;;){if(P(d)<=j)var
w=0;else{var
g=ji(d,j);if(32<=g){var
q=g+sa|0;if(58<q>>>0)if(93<=q)var
r=0,l=0;else
var
l=1;else
if(56<(q-1|0)>>>0)var
r=1,l=0;else
var
l=1;if(l){var
j=j+1|0;continue}}else
var
r=11<=g?13===g?1:0:8<=g?1:0;var
w=r?1:1}if(w){var
a=[0,0],u=P(d)-1|0,z=0;if(!(u<0)){var
i=z;for(;;){var
f=ji(d,i);if(32<=f){var
o=f+sa|0;if(58<o>>>0)if(93<=o)var
m=0,n=0;else
var
n=1;else
if(56<(o-1|0)>>>0)var
m=1,n=0;else
var
n=1;if(n)var
p=1,m=2}else
var
m=11<=f?13===f?1:0:8<=f?1:0;switch(m){case
0:var
p=4;break;case
1:var
p=2;break}a[1]=a[1]+p|0;var
C=i+1|0;if(u!==i){var
i=C;continue}break}}if(a[1]===P(d)){var
s=P(d),t=iF(s);iS(d,0,t,0,s);var
k=t}else{var
b=iF(a[1]);a[1]=0;var
v=P(d)-1|0,A=0;if(!(v<0)){var
h=A;for(;;){var
c=ji(d,h);if(35<=c)var
e=92===c?1:ik<=c?0:2;else
if(32<=c)var
e=34<=c?1:2;else
if(14<=c)var
e=0;else
switch(c){case
8:it(b,a[1],92);a[1]++;it(b,a[1],98);var
e=3;break;case
9:it(b,a[1],92);a[1]++;it(b,a[1],m$);var
e=3;break;case
10:it(b,a[1],92);a[1]++;it(b,a[1],l3);var
e=3;break;case
13:it(b,a[1],92);a[1]++;it(b,a[1],l4);var
e=3;break;default:var
e=0}switch(e){case
0:it(b,a[1],92);a[1]++;it(b,a[1],48+(c/jN|0)|0);a[1]++;it(b,a[1],48+((c/10|0)%10|0)|0);a[1]++;it(b,a[1],48+(c%10|0)|0);break;case
1:it(b,a[1],92);a[1]++;it(b,a[1],c);break;case
2:it(b,a[1],c);break}a[1]++;var
B=h+1|0;if(v!==h){var
h=B;continue}break}}var
k=b}}else
var
k=d;var
x=P(k),y=kw(x+2|0,34);iS(k,0,y,1,x);return y}}function
wG(c,b){switch(c){case
0:var
a=vR;break;case
1:var
a=vS;break;case
2:var
a=vT;break;case
3:var
a=vU;break;case
4:var
a=vV;break;case
5:var
a=vW;break;case
6:var
a=vX;break;case
7:var
a=vY;break;case
8:var
a=vZ;break;case
9:var
a=v0;break;case
10:var
a=v1;break;case
11:var
a=v2;break;default:var
a=v3}return n_(a,b)}function
wH(c,b){switch(c){case
0:var
a=wf;break;case
1:var
a=wg;break;case
2:var
a=wh;break;case
3:var
a=wi;break;case
4:var
a=wj;break;case
5:var
a=wk;break;case
6:var
a=wl;break;case
7:var
a=wm;break;case
8:var
a=wn;break;case
9:var
a=wo;break;case
10:var
a=wp;break;case
11:var
a=wq;break;default:var
a=wr}return n_(a,b)}function
wI(c,b){switch(c){case
0:var
a=ws;break;case
1:var
a=wt;break;case
2:var
a=wu;break;case
3:var
a=wv;break;case
4:var
a=ww;break;case
5:var
a=wx;break;case
6:var
a=wy;break;case
7:var
a=wz;break;case
8:var
a=wA;break;case
9:var
a=wB;break;case
10:var
a=wC;break;case
11:var
a=wD;break;default:var
a=wE}return n_(a,b)}function
wJ(c,b){switch(c){case
0:var
a=v4;break;case
1:var
a=v5;break;case
2:var
a=v6;break;case
3:var
a=v7;break;case
4:var
a=v8;break;case
5:var
a=v9;break;case
6:var
a=v_;break;case
7:var
a=v$;break;case
8:var
a=wa;break;case
9:var
a=wb;break;case
10:var
a=wc;break;case
11:var
a=wd;break;default:var
a=we}return abE(a,b)}function
j4(c,u,h){if(16<=c){if(17<=c)switch(c+tN|0){case
2:var
k=0;break;case
0:case
3:var
n=43,k=1;break;default:var
n=32,k=1}else
var
k=0;if(!k)var
n=45;var
i=abB(h,u,n);if(19<=c){var
l=P(i);if(0===l)return i;var
r=iF(l),s=l-1|0,y=0;if(!(s<0)){var
e=y;for(;;){var
g=ji(i,e);if(97<=g)if(iL<g)var
q=0;else
var
t=g-32|0,q=1;else
var
q=0;if(!q)var
t=g;it(r,e,t);var
z=e+1|0;if(s!==e){var
e=z;continue}break}}return r}return i}if(15===c)var
v=wF;else{var
A=og(u);switch(c){case
15:var
b=70;break;case
0:case
1:case
2:var
b=iv;break;case
3:case
4:case
5:var
b=jh;break;case
6:case
7:case
8:var
b=69;break;case
9:case
10:case
11:var
b=n3;break;case
12:case
13:case
14:var
b=71;break;case
16:case
17:case
18:var
b=kH;break;default:var
b=72}var
d=qs(16);lH(d,37);switch(c){case
1:case
4:case
7:case
10:case
13:case
17:case
20:lH(d,43);break;case
2:case
5:case
8:case
11:case
14:case
18:case
21:lH(d,32);break}lH(d,46);iI(d,a(o+A));lH(d,b);var
v=qu(d)}var
f=uj(v,h);if(15===c){var
w=abx(h),B=P(f);if(3===w)return h<0?wK:wL;if(4<=w)return wM;var
j=0;for(;;){if(j===B)var
x=0;else{var
p=G(f,j)+l9|0,C=23<p>>>0?55===p?1:0:21<(p-1|0)>>>0?1:0;if(!C){var
j=j+1|0;continue}var
x=1}return x?f:m(f,wN)}}return f}function
mj(h,f,e,d,i,c,b,a){if(typeof
i==="number"){if(typeof
c==="number")return 0===c?function(c){return x(h,f,[4,e,g(b,a,c)],d)}:function(i,c){return x(h,f,[4,e,kZ(i,g(b,a,c))],d)};var
m=c[1];return function(c){return x(h,f,[4,e,kZ(m,g(b,a,c))],d)}}else{if(0===i[0]){var
j=i[2],k=i[1];if(typeof
c==="number")return 0===c?function(c){return x(h,f,[4,e,i6(k,j,g(b,a,c))],d)}:function(i,c){return x(h,f,[4,e,i6(k,j,kZ(i,g(b,a,c)))],d)};var
n=c[1];return function(c){return x(h,f,[4,e,i6(k,j,kZ(n,g(b,a,c)))],d)}}var
l=i[1];if(typeof
c==="number")return 0===c?function(i,c){return x(h,f,[4,e,i6(l,i,g(b,a,c))],d)}:function(j,i,c){return x(h,f,[4,e,i6(l,j,kZ(i,g(b,a,c)))],d)};var
o=c[1];return function(i,c){return x(h,f,[4,e,i6(l,i,kZ(o,g(b,a,c)))],d)}}}function
qv(g,f,e,d,a,c){if(typeof
a==="number")return function(a){return x(g,f,[4,e,b(c,a)],d)};else{if(0===a[0]){var
h=a[2],i=a[1];return function(a){return x(g,f,[4,e,i6(i,h,b(c,a))],d)}}var
j=a[1];return function(h,a){return x(g,f,[4,e,i6(j,h,b(c,a))],d)}}}function
l1(f,D,e,C,B){var
c=D,a=C,d=B;for(;;)if(typeof
d==="number")return g(c,e,a);else
switch(d[0]){case
0:var
E=d[1];return function(b){return x(c,e,[5,a,b],E)};case
1:var
G=d[1];return function(g){var
b=qj(g),d=P(b),f=kw(d+2|0,39);iS(b,0,f,1,d);return x(c,e,[4,a,f],G)};case
2:var
H=d[2],I=d[1];return qv(c,e,a,H,I,function(a){return a});case
3:return qv(c,e,a,d[2],d[1],vQ);case
4:return mj(c,e,a,d[4],d[2],d[3],wG,d[1]);case
5:return mj(c,e,a,d[4],d[2],d[3],wH,d[1]);case
6:return mj(c,e,a,d[4],d[2],d[3],wI,d[1]);case
7:return mj(c,e,a,d[4],d[2],d[3],wJ,d[1]);case
8:var
i=d[4],j=d[3],l=d[2],k=d[1];if(typeof
l==="number"){if(typeof
j==="number")return 0===j?function(b){return x(c,e,[4,a,j4(k,ol,b)],i)}:function(d,b){return x(c,e,[4,a,j4(k,d,b)],i)};var
aa=j[1];return function(b){return x(c,e,[4,a,j4(k,aa,b)],i)}}else{if(0===l[0]){var
o=l[2],p=l[1];if(typeof
j==="number")return 0===j?function(b){return x(c,e,[4,a,i6(p,o,j4(k,ol,b))],i)}:function(d,b){return x(c,e,[4,a,i6(p,o,j4(k,d,b))],i)};var
ab=j[1];return function(b){return x(c,e,[4,a,i6(p,o,j4(k,ab,b))],i)}}var
q=l[1];if(typeof
j==="number")return 0===j?function(d,b){return x(c,e,[4,a,i6(q,d,j4(k,ol,b))],i)}:function(f,d,b){return x(c,e,[4,a,i6(q,f,j4(k,d,b))],i)};var
ac=j[1];return function(d,b){return x(c,e,[4,a,i6(q,d,j4(k,ac,b))],i)}}case
9:var
J=d[1];return function(b){var
d=b?uB:uC;return x(c,e,[4,a,d],J)};case
10:var
a=[7,a],d=d[1];continue;case
11:var
a=[2,a,d[1]],d=d[2];continue;case
12:var
a=[3,a,d[1]],d=d[2];continue;case
13:var
K=d[3],L=d[2],r=qs(16);om(r,L);var
A=qu(r);return function(b){return x(c,e,[4,a,A],K)};case
14:var
M=d[3],N=d[2];return function(d){var
f=d[1],b=z(f,R(iy(N)));if(typeof
b[2]==="number")return x(c,e,a,F(b[1],M));throw iK};case
15:var
O=d[1];return function(d,b){return x(c,e,[6,a,function(a){return g(d,a,b)}],O)};case
16:var
Q=d[1];return function(b){return x(c,e,[6,a,b],Q)};case
17:var
a=[0,a,d[1]],d=d[2];continue;case
18:var
n=d[1];if(0===n[0]){var
S=d[2],T=n[1][1],U=0,c=function(c,d,e){return function(b,a){return x(d,b,[1,c,[0,a]],e)}}(a,c,S),a=U,d=T;continue}var
V=d[2],W=n[1][1],X=0,c=function(c,d,e){return function(b,a){return x(d,b,[1,c,[1,a]],e)}}(a,c,V),a=X,d=W;continue;case
19:throw[0,w,wP];case
20:var
Y=d[3],Z=[8,a,wQ];return function(a){return x(c,e,Z,Y)};case
21:var
_=d[2];return function(b){return x(c,e,[4,a,n_(wR,b)],_)};case
22:var
$=d[1];return function(b){return x(c,e,[5,a,b],$)};case
23:var
h=d[2],m=d[1];if(typeof
m==="number")switch(m){case
0:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
1:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
2:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
3:throw[0,w,wS];default:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h])}else
switch(m[0]){case
0:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
1:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
2:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
3:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
4:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
5:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
6:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
7:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
8:var
v=m[2];return f<50?o6(f+1|0,c,e,a,v,h):ir(o6,[0,c,e,a,v,h]);case
9:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);default:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h])}default:var
s=d[3],t=d[1],u=b(d[2],0);return f<50?o5(f+1|0,c,e,a,s,t,u):ir(o5,[0,c,e,a,s,t,u])}}function
o6(f,e,d,c,a,b){if(typeof
a==="number")return f<50?y(f+1|0,e,d,c,b):ir(y,[0,e,d,c,b]);else
switch(a[0]){case
0:var
g=a[1];return function(a){return jb(e,d,c,g,b)};case
1:var
h=a[1];return function(a){return jb(e,d,c,h,b)};case
2:var
i=a[1];return function(a){return jb(e,d,c,i,b)};case
3:var
j=a[1];return function(a){return jb(e,d,c,j,b)};case
4:var
k=a[1];return function(a){return jb(e,d,c,k,b)};case
5:var
l=a[1];return function(a){return jb(e,d,c,l,b)};case
6:var
m=a[1];return function(a){return jb(e,d,c,m,b)};case
7:var
n=a[1];return function(a){return jb(e,d,c,n,b)};case
8:var
o=a[2];return function(a){return jb(e,d,c,o,b)};case
9:var
p=a[3],q=a[2],r=iB(iy(a[1]),q);return function(a){return jb(e,d,c,iQ(r,p),b)};case
10:var
s=a[1];return function(f,a){return jb(e,d,c,s,b)};case
11:var
t=a[1];return function(a){return jb(e,d,c,t,b)};case
12:var
u=a[1];return function(a){return jb(e,d,c,u,b)};case
13:throw[0,w,wT];default:throw[0,w,wU]}}function
y(e,c,b,f,a){var
d=[8,f,wV];return e<50?l1(e+1|0,c,b,d,a):ir(l1,[0,c,b,d,a])}function
o5(i,d,c,g,a,f,e){if(f){var
j=f[1];return function(f){return wO(d,c,g,a,j,b(e,f))}}var
h=[4,g,e];return i<50?l1(i+1|0,d,c,h,a):ir(l1,[0,d,c,h,a])}function
x(a,b,c,d){return kg(l1(0,a,b,c,d))}function
jb(a,b,c,d,e){return kg(o6(0,a,b,c,d,e))}function
wO(a,b,c,d,e,f){return kg(o5(0,a,b,c,d,e,f))}function
kj(c,h){var
a=h;for(;;)if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
e=a[2],i=a[1];if(typeof
e==="number")switch(e){case
0:var
d=va;break;case
1:var
d=vb;break;case
2:var
d=vc;break;case
3:var
d=vd;break;case
4:var
d=ve;break;case
5:var
d=vf;break;default:var
d=vg}else
switch(e[0]){case
0:var
d=e[1];break;case
1:var
d=e[1];break;default:var
d=m(vh,qn(1,e[1]))}kj(c,i);return Q(c,d);case
1:var
f=a[2],g=a[1];if(0===f[0]){var
j=f[1];kj(c,g);Q(c,wW);var
a=j;continue}var
k=f[1];kj(c,g);Q(c,wX);var
a=k;continue;case
6:var
o=a[2];kj(c,a[1]);return Q(c,b(o,0));case
7:var
a=a[1];continue;case
8:var
p=a[2];kj(c,a[1]);return iT(p);case
2:case
4:var
l=a[2];kj(c,a[1]);return Q(c,l);default:var
n=a[2];kj(c,a[1]);return ix(c,n)}}function
jJ(b){var
a=b[1];return x(function(c,b){var
a=il(64);kj(a,b);return iu(a)},0,0,a)}var
oo=[0,0];function
oq(h,g){var
a=h[g+1];if(abW(a)){if(oc(a)===pS)return b(jJ(wY),a);if(oc(a)===tR){var
d=uj(uE,a),c=0,f=P(d);for(;;){if(f<=c)return m(d,uD);var
e=G(d,c),i=48<=e?58<=e?0:1:45===e?1:0;if(i){var
c=c+1|0;continue}return d}}return wZ}return b(jJ(w0),a)}function
qA(b,a){if(b.length-1<=a)return w1;var
c=qA(b,a+1|0),d=oq(b,a);return g(jJ(w2),d,c)}function
w3(a){var
c=a.length-1;if(2<c>>>0){var
d=qA(a,2),e=oq(a,1);return g(jJ(w4),e,d)}switch(c){case
0:return w5;case
1:return w6;default:var
f=oq(a,1);return b(jJ(w7),f)}}function
qB(a){oo[1]=[0,a,oo[1]];return 0}function
qC(d,a){var
b=[0,[0,d,0]],c=a[1];if(c){var
e=c[1];a[1]=b;e[2]=b;return 0}a[1]=b;a[2]=b;return 0}var
or=[iw,xb,i2(0)];function
qD(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1];a[2]=d;if(0===d)a[1]=0;return e}throw or}function
os(a,b){a[13]=a[13]+b[3]|0;return qC(b,a[27])}var
qE=1000000010;function
ot(b,a){return p(b[17],a,0,P(a))}function
ou(a){return b(a[19],0)}function
qF(c,a){return b(c[20],a)}function
kx(a,e,d){ou(a);a[11]=1;var
b=(a[6]-d|0)+e|0,c=a[8],f=abP(c,b)?c:b;a[10]=f;a[9]=a[6]-a[10]|0;return qF(a,a[10])}function
qG(b,a){return kx(b,0,a)}function
k0(a,b){a[9]=a[9]-b|0;return qF(a,b)}function
xc(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1],f=a[9]<d?1:0;if(f){if(0!==e)return 5<=e?0:qG(a,d);var
g=0}else
var
g=f;return g}return ou(a)}function
xd(a){var
b=qD(a[27]),c=b[1];a[12]=a[12]-b[3]|0;a[9]=a[9]+c|0;return 0}function
xe(a,g,c){if(typeof
c==="number")switch(c){case
0:var
k=a[3];if(k){var
l=k[1][1],m=function(b,a){if(a){var
c=a[1],d=a[2];return abQ(b,c)?[0,b,a]:[0,c,m(b,d)]}return[0,b,0]};l[1]=m(a[6]-a[9]|0,l[1]);return 0}return 0;case
1:var
n=a[2];return n?(a[2]=n[2],0):0;case
2:var
o=a[3];return o?(a[3]=o[2],0):0;case
3:var
p=a[2];return p?qG(a,p[1][2]):ou(a);case
4:var
q=a[10]!==(a[6]-a[9]|0)?1:0;return q?xd(a):q;default:var
h=a[5];if(h){var
A=h[2];ot(a,b(a[24],h[1]));a[5]=A;return 0}return 0}else
switch(c[0]){case
0:var
B=c[1];a[9]=a[9]-g|0;ot(a,B);a[11]=0;return 0;case
1:var
d=c[2],f=c[1],r=a[2];if(r){var
s=r[1],e=s[2];switch(s[1]){case
0:return k0(a,f);case
1:return kx(a,d,e);case
2:return kx(a,d,e);case
3:return a[9]<g?kx(a,d,e):k0(a,f);case
4:return a[11]?k0(a,f):a[9]<g?kx(a,d,e):((a[6]-e|0)+d|0)<a[10]?kx(a,d,e):k0(a,f);default:return k0(a,f)}}return 0;case
2:var
i=a[6]-a[9]|0,t=a[3],C=c[2],D=c[1];if(t){var
u=t[1][1],E=function(d,c){var
a=c;for(;;){if(a){var
b=a[1],e=a[2];if(uk(b,d))return b;var
a=e;continue}throw kh}},v=u[1];if(v){var
F=v[1];try{var
G=E(i,u[1]),w=G}catch(a){a=iM(a);if(a!==kh)throw a;var
w=F}var
j=w}else
var
j=i;var
x=j-i|0;return 0<=x?k0(a,x+D|0):kx(a,j+C|0,a[6])}return 0;case
3:var
y=c[2],H=c[1];if(a[8]<(a[6]-a[9]|0))xc(a);var
I=a[9]-H|0,J=1===y?1:a[9]<g?y:5;a[2]=[0,[0,J,I],a[2]];return 0;case
4:a[3]=[0,c[1],a[3]];return 0;default:var
z=c[1];ot(a,b(a[23],z));a[5]=[0,z,a[5]];return 0}}function
xf(a){for(;;){var
d=a[27][2];if(d){var
b=d[1][1],c=b[1],e=c<0?1:0,g=b[3],h=b[2],i=e?(a[13]-a[12]|0)<a[9]?1:0:e,f=1-i;if(f){qD(a[27]);var
j=0<=c?c:qE;xe(a,j,h);a[12]=g+a[12]|0;continue}return f}throw or}}function
qH(a){try{var
b=xf(a);return b}catch(a){a=iM(a);if(a===or)return 0;throw a}}var
qI=[0,[0,-1,[0,-1,xg,0]],0];function
qJ(a){a[1]=qI;return 0}function
qK(a,c){var
d=a[1];if(d){var
e=d[1],b=e[2],f=b[1],g=d[2],h=b[2];if(e[1]<a[12])return qJ(a);if(typeof
h!=="number")switch(h[0]){case
3:var
i=1-c,k=i?(b[1]=a[13]+f|0,a[1]=g,0):i;return k;case
1:case
2:var
j=c?(b[1]=a[13]+f|0,a[1]=g,0):c;return j}return 0}return 0}var
qL=qn(80,32);function
xi(a){return m(xk,m(a,xj))}function
xl(a){return m(xn,m(a,xm))}function
xo(a){return 0}function
xp(a){return 0}function
qM(e,d){function
f(a){return 0}var
b=[0,0,0],c=[0,-1,xq,0];function
g(a){return 0}qC(c,b);var
a=[0,[0,[0,1,c],qI],0,0,0,0,78,10,68,78,0,1,1,1,1,uA,xr,e,d,g,f,0,0,xi,xl,xo,xp,b];a[19]=function(b){return p(a[17],xh,0,1)};a[20]=function(d){var
b=d;for(;;){var
c=0<b?1:0;if(c){if(80<b){p(a[17],qL,0,80);var
b=b+pR|0;continue}return p(a[17],qL,0,b)}return c}};return a}function
qN(c){function
a(a){return qc(c)}return qM(function(d,a,b){if(0<=a)if(0<=b)if(!((P(d)-b|0)<a))return abU(c,d,a,b);return iT(uH)},a)}function
xs(a){function
b(a){return 0}return qM(function(g,c,b){var
d=c<0?1:0;if(d)var
e=d;else
var
h=b<0?1:0,e=h||(P(g)<(c+b|0)?1:0);if(e)iT(u$);var
f=a[2]+b|0;if(a[3]<f)ok(a,b);jv(g,c,a[1],a[2],b);a[2]=f;return 0},b)}var
xt=kO,xu=function(a){return il(xt)}(0),u=qN(uF);qN(uG);xs(xu);uI(function(h){for(;;){if(1<u[14]){if(1<u[14]){if(u[14]<u[15]){os(u,[0,0,1,0]);qK(u,1);qK(u,0)}u[14]=u[14]-1|0}continue}u[13]=qE;qH(u);u[12]=1;u[13]=1;var
a=u[27];a[1]=0;a[2]=0;qJ(u);u[2]=0;u[3]=0;u[4]=0;u[5]=0;u[10]=0;u[14]=0;u[9]=u[6];u[14]=u[14]+1|0;var
f=3,g=0;if(u[14]<u[15]){var
d=[0,-u[13]|0,[3,g,f],0];os(u,d);u[1]=[0,[0,u[13],d],u[1]]}else
if(u[14]===u[15]){var
e=u[16],c=P(e);os(u,[0,c,[0,e],c]);qH(u)}return b(u[18],0)}});var
iW=uh,iV=abt;function
xv(b,a){var
c=oc(a)===iw?a:a[1];return ab1(b,c)}try{uz(abs)}catch(a){a=iM(a);if(a!==kh)throw a}try{uz(abr)}catch(a){a=iM(a);if(a!==kh)throw a}if(C(oi,xw))if(C(oi,xx))if(C(oi,xy))throw[0,w,xz];i2(0);var
jK=[iw,xA,i2(0)],qO=-1,xB=kO,xC=0,xD=0,xE=0,xF=0,xG=0;function
xH(c,b,a){throw[0,w,xI]}function
qP(a){var
b=a.length-1,c=1;return[0,xH,qp(b,function(b){return iP(a,b)[b+1]}),b,xG,xF,xE,xD,xC,c]}function
c(a){if(a[5]===a[3])if(a[9])var
d=qO;else{if(a[2].length-1<(a[3]+kO|0)){var
b=a[6],c=a[3]-b|0;if((c+kO|0)<=a[2].length-1)oj(a[2],b,a[2],0,c);else{var
g=mf((a[2].length-1+kO|0)*2|0,0);oj(a[2],b,g,0,c);a[2]=g}a[3]=c;a[4]=a[4]+b|0;a[5]=a[5]-b|0;a[7]=a[7]-b|0;a[6]=0}var
e=p(a[1],a[2],a[5],xB);if(0===e){var
f=a[3];iP(a[2],f)[f+1]=qO;a[3]=a[3]+1|0}else
a[3]=a[3]+e|0;var
h=a[5],d=iP(a[2],h)[h+1]}else
var
i=a[5],d=iP(a[2],i)[i+1];if(d===-1)a[9]=1;else
a[5]=a[5]+1|0;return d}function
io(a){a[6]=a[5];a[7]=a[5];a[8]=-1;return 0}function
B(a,b){a[7]=a[5];a[8]=b;return 0}function
d(a){a[5]=a[7];return a[8]}function
lJ(a){a[5]=a[6];return 0}function
mk(a){return a[6]+a[4]|0}function
ml(a){return a[5]+a[4]|0}function
ov(a){return a[5]-a[6]|0}function
qQ(a){var
b=a[5]-a[6]|0,c=a[6],d=a[2];if(0<=c)if(0<=b)if(!((d.length-1-b|0)<c))return abw(d,c,b);return iT(u0)}var
k1=mf(t9,-1),l0=0;for(;;){iP(k1,l0)[l0+1]=1;var
abq=l0+1|0;if(ik!==l0){var
l0=abq;continue}var
lZ=ls;for(;;){iP(k1,lZ)[lZ+1]=2;var
abp=lZ+1|0;if(ta!==lZ){var
lZ=abp;continue}var
lY=kQ;for(;;){iP(k1,lY)[lY+1]=3;var
abo=lY+1|0;if(t7!==lY){var
lY=abo;continue}var
lX=kP;for(;;){iP(k1,lX)[lX+1]=4;var
abn=lX+1|0;if(tx!==lX){var
lX=abn;continue}var
ow=function(b){var
x=P(b),f=0,e=0,C=0;for(;;){if((x|0)<=e){if(e===(x|0)){var
w=mf(f,0),a=C,g=0,j=f;for(;;){if(0<j){var
c=G(b,a);if(ls<=c)if(kP<=c)if(iw<=c)var
d=0;else{var
k=G(b,a+1|0),l=G(b,a+2|0),m=G(b,a+3|0),n=2!==(k>>>6|0)?1:0;if(n)var
o=n;else
var
y=2!==(l>>>6|0)?1:0,o=y||(2!==(m>>>6|0)?1:0);if(o)throw jK;var
h=(c&7)<<18|(k&63)<<12|(l&63)<<6|m&63,d=1}else
if(kQ<=c){var
p=G(b,a+1|0),q=G(b,a+2|0),z=2!==(p>>>6|0)?1:0,A=z||(2!==(q>>>6|0)?1:0);if(A)throw jK;var
i=(c&15)<<12|(p&63)<<6|q&63,r=p5<=i?1:0,B=r?i<=57088?1:0:r;if(B)throw jK;var
h=i,d=1}else{var
s=G(b,a+1|0);if(2!==(s>>>6|0))throw jK;var
h=(c&31)<<6|s&63,d=1}else
if(ip<=c)var
d=0;else
var
h=c,d=1;if(d){iP(w,g)[g+1]=h;var
v=G(b,a),a=a+iP(k1,v)[v+1]|0,g=g+1|0,j=j-1|0;continue}throw jK}return qP(w)}}throw jK}var
t=G(b,e),u=iP(k1,t)[t+1];if(0<u){var
f=f+1|0,e=e+u|0;continue}throw jK}},lK=function(g,i,f){var
j=g[6]+i|0,k=g[2],b=il(f*4|0),c=j,d=f;for(;;){if(0<d){var
a=iP(k,c)[c+1];if(ik<a)if(2047<a)if(L<a){if(pc<a)throw jK;ix(b,jI(kP|a>>>18|0));ix(b,jI(ip|(a>>>12|0)&63));ix(b,jI(ip|(a>>>6|0)&63));ix(b,jI(ip|a&63))}else{var
e=p5<=a?1:0,h=e?a<tS?1:0:e;if(h)throw jK;ix(b,jI(kQ|a>>>12|0));ix(b,jI(ip|(a>>>6|0)&63));ix(b,jI(ip|a&63))}else{ix(b,jI(ls|a>>>6|0));ix(b,jI(ip|a&63))}else
ix(b,jI(a));var
c=c+1|0,d=d-1|0;continue}return iu(b)}},J=function(a){return lK(a,0,a[5]-a[6]|0)},ky=function(c,a){function
b(a){return ix(c,a)}return ss<=a?(b(kP|a>>>18|0),b(ip|(a>>>12|0)&63),b(ip|(a>>>6|0)&63),b(ip|a&63)):pt<=a?(b(kQ|a>>>12|0),b(ip|(a>>>6|0)&63),b(ip|a&63)):ip<=a?(b(ls|a>>>6|0),b(ip|a&63)):b(a)},ox=iG,k2=null,qR=undefined,k3=function(a){return a!==qR?1:0},xJ=ox.Array,oy=[iw,xK,i2(0)],xL=ox.Error;xv(xM,[0,oy,{}]);var
qS=function(a){throw a};qB(function(a){return a[1]===oy?[0,kv(a[2].toString())]:0});qB(function(a){return a
instanceof
xJ?0:[0,kv(a.toString())]});var
qT=g(iV,xO,xN),qU=g(iV,xQ,xP),qV=g(iV,xS,xR),qW=g(iV,xU,xT),qX=g(iV,xW,xV),qY=g(iV,xY,xX),qZ=g(iV,x0,xZ),q0=g(iV,x2,x1),q1=g(iV,x4,x3),q2=g(iV,x6,x5),q3=g(iV,x8,x7),q4=g(iV,x_,x9),q5=g(iV,ya,x$),q6=g(iV,yc,yb);p(iW,yd,qT,qT);p(iW,ye,qU,qU);p(iW,yf,qV,qV);p(iW,yg,qW,qW);p(iW,yh,qX,qX);p(iW,yi,qY,qY);p(iW,yj,qZ,qZ);p(iW,yk,q0,q0);p(iW,yl,q1,q1);p(iW,ym,q2,q2);p(iW,yn,q3,q3);p(iW,yo,q4,q4);p(iW,yp,q5,q5);p(iW,yq,q6,q6);var
q7=function(a){return typeof
a==="number"?yr:a[1]},q8=function(a){if(typeof
a==="number")return 1;else
switch(a[0]){case
0:return 2;case
3:return 4;default:return 3}},I=function(a,b){return[0,a[1],a[2],b[3]]},q_=function(b,a){var
c=b[1]-a[1]|0;return 0===c?b[2]-a[2]|0:c},yt=[iw,ys,i2(0)],I$=function(c,b,a){return[0,c,b,Ja,0,a,oz]},q$=function(c,b){var
a=b.slice();a[2]=c;return a},oA=function(a){return a[3][1]},ra=function(a){return a[3][2]},mm=function(b,a){if(b!==a[4]){var
d=b-ra(a)|0,e=[0,oA(a),d,b],f=c-ra(a)|0,g=[0,oA(a),f,c];return[0,a[1],g,e]},O=function(b,a){var
c=mk(a);return oL(b,c,ml(a))},k8=function(g){var
b=g[2],d=g[1],c=d[6];if(c!==oz){var
f=d.slice();f[6]=oz;var
a=f}else
var
a=d;if(typeof
b==="number")var
e=0;else
switch(b[0]){case
1:case
2:case
4:case
7:var
h=b[1][1],e=1;break;default:var
e=0}if(!e)var
h=O(a,a[2]);var
i=n(c[2]);return[0,a,[0,b,h,n(c[1]),i]]},jA=function(a,d,c){var
b=a.slice();b[6]=[0,[0,[0,d,c],a[6][1]],a[6][2]];return b},ry=function(c,b,a){return jA(c,b,[1,a])},jB=function(b,a){return jA(b,a,OJ)},jk=function(a,c){var
d=ml(c),e=[0,oA(a)+1|0,d],b=a.slice();b[3]=e;return b},k9=[iw,OK,i2(0)],ko=function(a){var
b=a[5];if(b)return[0,a[1],a[2],a[3],a[4],b[2]];throw k9},OL=function(b){var
a=[0,0];qo(function(b){a[1]=[0,b,a[1]];return 0},b);return[0,0,0,0,0,n(a[1])]},OM=function(a){var
c=a[5];if(c){var
d=c[1]+m_|0;if(!(2<d>>>0))switch(d){case
0:return ko(a);case
1:break;default:var
b=ko(a);return[0,1,b[2],b[3],b[4],b[5]]}}return a},ON=function(b){var
a=b[5];if(a)if(48===a[1]){var
c=a[2];if(c){var
d=c[1],e=88===d?0:kq===d?0:1;if(!e)return ko(ko(b))}}throw k9},OO=function(a){var
b=uX(OP,lE(qj,a[5]));try{var
c=jH(b)}catch(a){a=iM(a);if(a[1]===j3)throw k9;throw a}return[0,a[1],a[2],c,a[4],0]},OQ=function(l){var
a=l;for(;;){var
j=a[5];if(j){var
b=j[1];if(81<=b){if(95===b){var
a=ko(a);continue}var
k=pu===b?1:0}else{if(46===b){if(0===a[4]){var
c=ko(a),a=[0,c[1],c[2],c[3],OR,c[5]];continue}throw k9}var
k=80<=b?1:0}if(k)return OO(ko(a));if(48<=b)if(57<b)var
g=0;else
var
d=48,g=1;else
var
g=0;if(!g){if(65<=b)if(70<b)var
h=0;else
var
d=55,h=1;else
var
h=0;if(!h){if(97<=b)if(iv<b)var
i=0;else
var
d=87,i=1;else
var
i=0;if(!i)throw k9}}var
e=a[4],m=b-d|0,n=e?[0,e[1]-4|0]:e,o=(a[2]<<4)+m|0,f=ko(a),a=[0,f[1],o,f[3],n,f[5]];continue}return a}},OS=function(a){if(0===a[5]){var
b=a[2],c=a[4],d=c?a[3]+c[1]|0:a[3],e=0===d?b:Math.pow(b,d);return a[1]?-e:e}throw[0,w,OT]},rz=function(b){try{var
a=abA(b);return a}catch(a){a=iM(a);if(mi)try{var
c=OS(OQ(ON(OM(OL(b)))));return c}catch(b){b=iM(b);if(b===k9)throw a;throw b}throw a}},jl=function(a,g,f,e,d){var
h=I(g,f),b=iu(e),i=d?[0,b]:[1,b],c=a.slice();c[6]=[0,a[6][1],[0,[0,h,i],a[6][2]]];return c},jC=function(e,d){if(45===G(d,0))var
f=1,a=jw(d,1,P(d)-1|0);else
var
f=0,a=d;if(0===e)var
c=0;else
switch(e-1|0){case
0:try{var
k=ob(oa(m(OW,a))),g=1}catch(d){d=iM(d);if(d[1]!==j3)throw d;var
b=N(m(OV,a)),c=1,g=0}if(g)var
b=k,c=1;break;case
2:try{var
l=rz(a),h=1}catch(d){d=iM(d);if(d[1]!==j3)throw d;var
b=N(m(OX,a)),c=1,h=0}if(h)var
b=l,c=1;break;default:var
c=0}if(!c)try{var
j=ob(oa(a)),b=j}catch(c){c=iM(c);if(c[1]!==j3)throw c;var
b=N(m(OU,a))}var
i=f?-b:b;return[9,e,i,d]},rA=function(f,k,j){var
b=qP([0,j]);io(b);var
e=d(b);else
switch(g){case
0:var
e=2;break;case
1:var
e=0;break;case
2:var
e=1;break;default:B(b,2);if(0===jM(c(b))){var
h=j6(c(b));if(0===h)var
e=0===ij(c(b))?0===ij(c(b))?0===ij(c(b))?0:d(b):d(b):d(b);else
if(1===h)if(0===ij(c(b)))for(;;){var
i=j5(c(b));if(0===i)continue;var
e=1===i?0:d(b);break}else
var
e=d(b);else
var
e=d(b)}else
var
e=d(b)}if(2<=e){if(!(3<=e))return jA(f,k,30)}else
if(0<=e)return f;return N(OY)},rB=function(c,b,a){var
d=b+mk(a)|0,e=oL(c,d,b+ml(a)|0);return[0,e,J(a)]},rC=function(s,r){var
t=mk(s[2]),a=ow(r),f=il(P(r)),e=s;for(;;){io(a);var
g=c(a),h=92<g?1:G(NC,g+1|0)-1|0;if(2<h>>>0)var
b=d(a);else
switch(h){case
0:var
b=2;break;case
1:var
b=3;break;default:B(a,3);if(0===jM(c(a))){var
i=j6(c(a));if(0===i)var
b=0===ij(c(a))?0===ij(c(a))?0===ij(c(a))?0:d(a):d(a):d(a);else
if(1===i)if(0===ij(c(a)))for(;;){var
j=j5(c(a));if(0===j)continue;var
b=1===j?1:d(a);break}else
var
b=d(a);else
var
b=d(a)}else
var
b=d(a)}if(3<b>>>0)return N(OZ);switch(b){case
0:var
k=rB(e,t,a),l=k[2],n=jH(m(O0,jw(l,2,P(l)-2|0))),u=rA(e,k[1],n);ky(f,n);var
e=u;continue;case
1:var
o=rB(e,t,a),p=o[2],q=jH(m(O1,jw(p,3,P(p)-4|0))),v=rA(e,o[1],q);ky(f,q);var
e=v;continue;case
2:return[0,e,iu(f)];default:Q(f,J(a));continue}}},jm=function(b,a,c){var
d=jB(b,O(b,a));lJ(a);return g(c,d,a)},kz=function(m,g,a){var
b=m;for(;;){io(a);var
f=c(a),i=-1<f?42<f?jp<f?0:jo<f?1:0:G(M3,f)-1|0:-1;if(3<i>>>0)var
e=d(a);else
switch(i){case
0:var
e=3;break;case
1:var
e=0;break;case
2:B(a,0);var
e=0===je(c(a))?0:d(a);break;default:B(a,3);var
h=c(a),j=44<h?47<h?-1:G(Ox,h+lr|0)-1|0:-1,e=0===j?0===rw(c(a))?2:d(a):1===j?1:d(a)}if(3<e>>>0){var
k=jB(b,O(b,a));return[0,k,O(k,a)]}switch(e){case
0:var
n=jk(b,a);Q(g,J(a));var
b=n;continue;case
1:var
l=O(b,a),o=b[4]?jA(b,l,[2,O3,O2]):b;return[0,o,l];case
2:if(b[4])return[0,b,O(b,a)];Q(g,O4);continue;default:Q(g,J(a));continue}}},k_=function(e,k,a){for(;;){io(a);var
f=c(a),i=13<f?jp<f?1:jo<f?2:1:G(Ns,f+1|0)-1|0;if(3<i>>>0)var
b=d(a);else
switch(i){case
0:var
b=0;break;case
1:var
b=2;break;case
2:var
b=1;break;default:B(a,1);var
b=0===je(c(a))?1:d(a)}if(2<b>>>0)return N(O5);switch(b){case
0:return[0,e,O(e,a)];case
1:var
g=O(e,a),h=g[3],l=jk(e,a),j=ov(a);return[0,l,[0,g[1],g[2],[0,h[1],h[2]-j|0,h[3]-j|0]]];default:Q(k,J(a));continue}}},rD=function(b,a){function
k(a){B(a,3);return 0===jy(c(a))?2:d(a)}io(a);var
f=c(a),l=kq<f?jp<f?1:jo<f?2:1:G(M9,f+1|0)-1|0;if(14<l>>>0)var
e=d(a);else
switch(l){case
1:var
e=16;break;case
2:var
e=15;break;case
3:B(a,15);var
e=0===je(c(a))?15:d(a);break;case
4:B(a,4);var
e=0===jy(c(a))?k(a):d(a);break;case
5:B(a,11);var
e=0===jy(c(a))?k(a):d(a);break;case
7:var
e=5;break;case
8:var
e=6;break;case
9:var
e=7;break;case
10:var
e=8;break;case
11:var
e=9;break;case
12:B(a,14);var
n=j6(c(a));if(0===n)var
if(1===n)if(0===ij(c(a)))for(;;){var
var
var
