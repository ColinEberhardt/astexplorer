webpackJsonp([22,49],{

/***/ "+mOw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=function(e){e.use(__webpack_require__("rVxO")),e.use(__webpack_require__("ca8L"))};

/***/ }),

/***/ "+r0j":
/***/ (function(module, exports, __webpack_require__) {

exports.SourceMapGenerator=__webpack_require__("O8K4").SourceMapGenerator,exports.SourceMapConsumer=__webpack_require__("G4xT").SourceMapConsumer,exports.SourceNode=__webpack_require__("E+dE").SourceNode;

/***/ }),

/***/ "/OP5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getSecret(e){return e[secretKey]}function Lines(e,t){assert.ok(this instanceof Lines),assert.ok(e.length>0),t?isString.assert(t):t=null,setSymbolOrKey(this,secretKey,{infos:e,mappings:[],name:t,cachedSourceMap:null}),this.length=e.length,this.name=t,t&&getSecret(this).mappings.push(new Mapping(this,{start:this.firstPos(),end:this.lastPos()}))}function setSymbolOrKey(e,t,n){return useSymbol?e[t]=n:(Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!1,configurable:!0}),n)}function copyLineInfo(e){return{line:e.line,indent:e.indent,locked:e.locked,sliceStart:e.sliceStart,sliceEnd:e.sliceEnd}}function countSpaces(e,t){for(var n=0,i=e.length,s=0;s<i;++s)switch(e.charCodeAt(s)){case 9:assert.strictEqual(void 0===t?"undefined":(0,_typeof3.default)(t),"number"),assert.ok(t>0);var r=Math.ceil(n/t)*t;r===n?n+=t:n=r;break;case 11:case 12:case 13:case 65279:break;case 32:default:n+=1}return n}function fromString(e,t){if(e instanceof Lines)return e;e+="";var n=t&&t.tabWidth,i=e.indexOf("\t")<0,s=!(!t||!t.locked),r=!t&&i&&e.length<=maxCacheKeyLen;if(assert.ok(n||i,"No tab width specified but encountered tabs in string\n"+e),r&&hasOwn.call(fromStringCache,e))return fromStringCache[e];var a=new Lines(e.split(lineTerminatorSeqExp).map(function(e){var t=leadingSpaceExp.exec(e)[0];return{line:e,indent:countSpaces(t,n),locked:s,sliceStart:t.length,sliceEnd:e.length}}),normalizeOptions(t).sourceFileName);return r&&(fromStringCache[e]=a),a}function isOnlyWhitespace(e){return!/\S/.test(e)}function sliceInfo(e,t,n){var i=e.sliceStart,s=e.sliceEnd,r=Math.max(e.indent,0),a=r+s-i;return void 0===n&&(n=a),t=Math.max(t,0),n=Math.min(n,a),n=Math.max(n,t),n<r?(r=n,s=i):s-=a-n,a=n,a-=t,t<r?r-=t:(t-=r,r=0,i+=t),assert.ok(r>=0),assert.ok(i<=s),assert.strictEqual(a,r+s-i),e.indent===r&&e.sliceStart===i&&e.sliceEnd===s?e:{line:e.line,indent:r,locked:!1,sliceStart:i,sliceEnd:s}}var _typeof2=__webpack_require__("pFYg"),_typeof3=_interopRequireDefault(_typeof2),assert=__webpack_require__("N+Om"),sourceMap=__webpack_require__("+r0j"),normalizeOptions=__webpack_require__("wLGZ").normalize,secretKey=__webpack_require__("PWVg").makeUniqueKey(),types=__webpack_require__("zQC4"),isString=types.builtInTypes.string,comparePos=__webpack_require__("pdfV").comparePos,Mapping=__webpack_require__("Wnqv"),useSymbol="function"==typeof Symbol,secretKey="recastLinesSecret";useSymbol&&(secretKey=Symbol.for(secretKey)),exports.Lines=Lines;var Lp=Lines.prototype,fromStringCache={},hasOwn=fromStringCache.hasOwnProperty,maxCacheKeyLen=10;exports.countSpaces=countSpaces;var leadingSpaceExp=/^\s*/,lineTerminatorSeqExp=/\u000D\u000A|\u000D(?!\u000A)|\u000A|\u2028|\u2029/;exports.fromString=fromString,Lp.toString=function(e){return this.sliceString(this.firstPos(),this.lastPos(),e)},Lp.getSourceMap=function(e,t){function n(n){return n=n||{},isString.assert(e),n.file=e,t&&(isString.assert(t),n.sourceRoot=t),n}if(!e)return null;var i=this,s=getSecret(i);if(s.cachedSourceMap)return n(s.cachedSourceMap.toJSON());var r=new sourceMap.SourceMapGenerator(n()),a={};return s.mappings.forEach(function(e){for(var t=e.sourceLines.skipSpaces(e.sourceLoc.start)||e.sourceLines.lastPos(),n=i.skipSpaces(e.targetLoc.start)||i.lastPos();comparePos(t,e.sourceLoc.end)<0&&comparePos(n,e.targetLoc.end)<0;){var s=e.sourceLines.charAt(t),c=i.charAt(n);assert.strictEqual(s,c);var o=e.sourceLines.name;if(r.addMapping({source:o,original:{line:t.line,column:t.column},generated:{line:n.line,column:n.column}}),!hasOwn.call(a,o)){var l=e.sourceLines.toString();r.setSourceContent(o,l),a[o]=l}i.nextPos(n,!0),e.sourceLines.nextPos(t,!0)}}),s.cachedSourceMap=r,r.toJSON()},Lp.bootstrapCharAt=function(e){assert.strictEqual(void 0===e?"undefined":(0,_typeof3.default)(e),"object"),assert.strictEqual((0,_typeof3.default)(e.line),"number"),assert.strictEqual((0,_typeof3.default)(e.column),"number");var t=e.line,n=e.column,i=this.toString().split(lineTerminatorSeqExp),s=i[t-1];return void 0===s?"":n===s.length&&t<i.length?"\n":n>=s.length?"":s.charAt(n)},Lp.charAt=function(e){assert.strictEqual(void 0===e?"undefined":(0,_typeof3.default)(e),"object"),assert.strictEqual((0,_typeof3.default)(e.line),"number"),assert.strictEqual((0,_typeof3.default)(e.column),"number");var t=e.line,n=e.column,i=getSecret(this),s=i.infos,r=s[t-1],a=n;if(void 0===r||a<0)return"";var c=this.getIndentAt(t);return a<c?" ":(a+=r.sliceStart-c,a===r.sliceEnd&&t<this.length?"\n":a>=r.sliceEnd?"":r.line.charAt(a))},Lp.stripMargin=function(e,t){if(0===e)return this;if(assert.ok(e>0,"negative margin: "+e),t&&1===this.length)return this;var n=getSecret(this),i=new Lines(n.infos.map(function(n,i){return n.line&&(i>0||!t)&&(n=copyLineInfo(n),n.indent=Math.max(0,n.indent-e)),n}));if(n.mappings.length>0){var s=getSecret(i).mappings;assert.strictEqual(s.length,0),n.mappings.forEach(function(n){s.push(n.indent(e,t,!0))})}return i},Lp.indent=function(e){if(0===e)return this;var t=getSecret(this),n=new Lines(t.infos.map(function(t){return t.line&&!t.locked&&(t=copyLineInfo(t),t.indent+=e),t}));if(t.mappings.length>0){var i=getSecret(n).mappings;assert.strictEqual(i.length,0),t.mappings.forEach(function(t){i.push(t.indent(e))})}return n},Lp.indentTail=function(e){if(0===e)return this;if(this.length<2)return this;var t=getSecret(this),n=new Lines(t.infos.map(function(t,n){return n>0&&t.line&&!t.locked&&(t=copyLineInfo(t),t.indent+=e),t}));if(t.mappings.length>0){var i=getSecret(n).mappings;assert.strictEqual(i.length,0),t.mappings.forEach(function(t){i.push(t.indent(e,!0))})}return n},Lp.lockIndentTail=function(){return this.length<2?this:new Lines(getSecret(this).infos.map(function(e,t){return e=copyLineInfo(e),e.locked=t>0,e}))},Lp.getIndentAt=function(e){assert.ok(e>=1,"no line "+e+" (line numbers start from 1)");var t=getSecret(this),n=t.infos[e-1];return Math.max(n.indent,0)},Lp.guessTabWidth=function(){var e=getSecret(this);if(hasOwn.call(e,"cachedTabWidth"))return e.cachedTabWidth;for(var t=[],n=0,i=1,s=this.length;i<=s;++i){var r=e.infos[i-1];if(!isOnlyWhitespace(r.line.slice(r.sliceStart,r.sliceEnd))){var a=Math.abs(r.indent-n);t[a]=1+~~t[a],n=r.indent}}for(var c=-1,o=2,l=1;l<t.length;l+=1)hasOwn.call(t,l)&&t[l]>c&&(c=t[l],o=l);return e.cachedTabWidth=o},Lp.startsWithComment=function(){var e=getSecret(this);if(0===e.infos.length)return!1;var t=e.infos[0],n=t.sliceStart,i=t.sliceEnd,s=t.line.slice(n,i).trim();return 0===s.length||"//"===s.slice(0,2)||"/*"===s.slice(0,2)},Lp.isOnlyWhitespace=function(){return isOnlyWhitespace(this.toString())},Lp.isPrecededOnlyByWhitespace=function(e){var t=getSecret(this),n=t.infos[e.line-1],i=Math.max(n.indent,0),s=e.column-i;if(s<=0)return!0;var r=n.sliceStart,a=Math.min(r+s,n.sliceEnd);return isOnlyWhitespace(n.line.slice(r,a))},Lp.getLineLength=function(e){var t=getSecret(this),n=t.infos[e-1];return this.getIndentAt(e)+n.sliceEnd-n.sliceStart},Lp.nextPos=function(e,t){var n=Math.max(e.line,0);return Math.max(e.column,0)<this.getLineLength(n)?(e.column+=1,!t||!!this.skipSpaces(e,!1,!0)):n<this.length&&(e.line+=1,e.column=0,!t||!!this.skipSpaces(e,!1,!0))},Lp.prevPos=function(e,t){var n=e.line,i=e.column;if(i<1){if((n-=1)<1)return!1;i=this.getLineLength(n)}else i=Math.min(i-1,this.getLineLength(n));return e.line=n,e.column=i,!t||!!this.skipSpaces(e,!0,!0)},Lp.firstPos=function(){return{line:1,column:0}},Lp.lastPos=function(){return{line:this.length,column:this.getLineLength(this.length)}},Lp.skipSpaces=function(e,t,n){if(e=e?n?e:{line:e.line,column:e.column}:t?this.lastPos():this.firstPos(),t){for(;this.prevPos(e);)if(!isOnlyWhitespace(this.charAt(e))&&this.nextPos(e))return e;return null}for(;isOnlyWhitespace(this.charAt(e));)if(!this.nextPos(e))return null;return e},Lp.trimLeft=function(){var e=this.skipSpaces(this.firstPos(),!1,!0);return e?this.slice(e):emptyLines},Lp.trimRight=function(){var e=this.skipSpaces(this.lastPos(),!0,!0);return e?this.slice(this.firstPos(),e):emptyLines},Lp.trim=function(){var e=this.skipSpaces(this.firstPos(),!1,!0);if(null===e)return emptyLines;var t=this.skipSpaces(this.lastPos(),!0,!0);return assert.notStrictEqual(t,null),this.slice(e,t)},Lp.eachPos=function(e,t,n){var i=this.firstPos();if(t&&(i.line=t.line,i.column=t.column),!n||this.skipSpaces(i,!1,!0))do{e.call(this,i)}while(this.nextPos(i,n))},Lp.bootstrapSlice=function(e,t){var n=this.toString().split(lineTerminatorSeqExp).slice(e.line-1,t.line);return n.push(n.pop().slice(0,t.column)),n[0]=n[0].slice(e.column),fromString(n.join("\n"))},Lp.slice=function(e,t){if(!t){if(!e)return this;t=this.lastPos()}var n=getSecret(this),i=n.infos.slice(e.line-1,t.line);e.line===t.line?i[0]=sliceInfo(i[0],e.column,t.column):(assert.ok(e.line<t.line),i[0]=sliceInfo(i[0],e.column),i.push(sliceInfo(i.pop(),0,t.column)));var s=new Lines(i);if(n.mappings.length>0){var r=getSecret(s).mappings;assert.strictEqual(r.length,0),n.mappings.forEach(function(n){var i=n.slice(this,e,t);i&&r.push(i)},this)}return s},Lp.bootstrapSliceString=function(e,t,n){return this.slice(e,t).toString(n)},Lp.sliceString=function(e,t,n){if(!t){if(!e)return this;t=this.lastPos()}n=normalizeOptions(n);for(var i=getSecret(this).infos,s=[],r=n.tabWidth,a=e.line;a<=t.line;++a){var c=i[a-1];a===e.line?c=a===t.line?sliceInfo(c,e.column,t.column):sliceInfo(c,e.column):a===t.line&&(c=sliceInfo(c,0,t.column));var o=Math.max(c.indent,0),l=c.line.slice(0,c.sliceStart);if(n.reuseWhitespace&&isOnlyWhitespace(l)&&countSpaces(l,n.tabWidth)===o)s.push(c.line.slice(0,c.sliceEnd));else{var u=0,p=o;n.useTabs&&(u=Math.floor(o/r),p-=u*r);var h="";u>0&&(h+=new Array(u+1).join("\t")),p>0&&(h+=new Array(p+1).join(" ")),h+=c.line.slice(c.sliceStart,c.sliceEnd),s.push(h)}}return s.join(n.lineTerminator)},Lp.isEmpty=function(){return this.length<2&&this.getLineLength(1)<1},Lp.join=function(e){function t(e){if(null!==e){if(i){var t=e.infos[0],n=new Array(t.indent+1).join(" "),s=a.length,r=Math.max(i.indent,0)+i.sliceEnd-i.sliceStart;i.line=i.line.slice(0,i.sliceEnd)+n+t.line.slice(t.sliceStart,t.sliceEnd),i.locked=i.locked||t.locked,i.sliceEnd=i.line.length,e.mappings.length>0&&e.mappings.forEach(function(e){c.push(e.add(s,r))})}else e.mappings.length>0&&c.push.apply(c,e.mappings);e.infos.forEach(function(e,t){(!i||t>0)&&(i=copyLineInfo(e),a.push(i))})}}function n(e,n){n>0&&t(r),t(e)}var i,s=this,r=getSecret(s),a=[],c=[];if(e.map(function(e){var t=fromString(e);return t.isEmpty()?null:getSecret(t)}).forEach(s.isEmpty()?t:n),a.length<1)return emptyLines;var o=new Lines(a);return getSecret(o).mappings=c,o},exports.concat=function(e){return emptyLines.join(e)},Lp.concat=function(e){var t=arguments,n=[this];return n.push.apply(n,t),assert.strictEqual(n.length,t.length+1),emptyLines.join(n)};var emptyLines=fromString("");

/***/ }),

/***/ "05W5":
/***/ (function(module, exports) {

// Generated by js_of_ocaml 3.0
(function(iF){"use strict";var
pv=254,np=43595,gB=42237,bI=43123,t9="children",s5="Identifier",iY=16777215,ih=43347,gA=126467,jT=12287,ma="variance",hT=12335,bH=65370,sB=">>>",jV=8202,eQ=65007,bF=119969,bG=43071,p4=115,t8="!",pe="consequent",kI=512,df=64279,de=8485,dd=66204,eP=120539,dc=64297,lm="params",ip=128,db=8488,hS=68102,bE=42999,m8=-43,da=12589,nI="constructor",bD=126503,kp="yield",no=68096,sz=-53,sA="fd ",c$=120744,eO=126560,pd="target",eN=177972,hR=44015,m7="var",c_=65855,gz=43776,l3="0o",hn=43215,c9=12592,nn=">",gy=12336,c8=42124,bC=120512,pu="decorators",gx=8489,eM=66334,bB=68115,eL=64324,gw=67592,bA=126529,bz=43784,c6=119807,c7=8304,gv=120137,nm=69807,pt="method",m6=69926,p3="throw",by=65595,gs=126578,gt=64322,gu=11735,sy="of",sx=">>",eK=178205,eJ=8487,tp="Popping lex mode from empty stack",n2=43249,gr=120771,gq=67589,nH=-80,c5=119972,t7="<<=",p2="e",sw="%=",sv="([^/]*)",to=247,pL="src/parser/statement_parser.ml",jN=8239,pc=109,c4=65598,nG=69687,eI=94031,go=67669,gp=43583,eH=8348,t6="Invalid binary/octal ",m5=43019,bx=42239,tn="Out_of_memory",gn=78894,bw=11687,ps="do",eG=43798,it=101,bv=40959,eE=42922,eF=8454,tm="index out of bounds",p1="package",gm=126589,bu=12438,n1=12442,pb="this",tl="}",eD=120654,hQ=119361,gl=67637,hP=69743,tk="@",ls="type",c3=11679,eC=119892,bt=42894,c2=11311,eB=126521,mb=1024,br=119993,bs=11710,bq=8543,tj=231,gk=8484,t5="module",hO=43135,p0="try",bp=126634,m4=43334,hN=43263,c1=67593,pK=113,t4="infinity",bo=120144,pa="switch",pr="private",hM=70105,ig=119364,gj=11359,gi=8516,gD=8254,bn=11559,eA=126551,hL=68151,s4="Property",gh=42888,pZ=55296,l8="implements",bm=43255,hm=8399,ll="src/parser/type_parser.ml",lr=103,lk="raw",kP=-744106340,gg=8468,bl=65470,su="alternate",gf=11686,nE=43712,nF=43009,ez=43470,o$="export",pq=223,j9=".",ti="===",L=65535,ey=8469,lq="kind",c0=8521,hK=69631,ge=120085,g0=11743,ex=126559,ew=120655,n0=69890,t3="declare",hJ=65023,bk=66256,cZ=65479,th=210,bj=42622,bi=11310,cY=11711,ev=8305,eu=119967,hI=68159,t2="expected *",pY="boolean",et=64433,t1=256,cX=42774,tg=118,es=11564,bh=68437,gd=67871,cV=126496,cW=120145,lj="expression",gZ=66045,iB="value",s3=191,er=12348,st=56320,tf="%.12g",bg=119964,eq=126554,hH=119140,bf=43792,cU=68405,gc=126557,t0="Assert_failure",gY=119162,be=67861,l2=114,ep=43807,bd=19967,ss="&&",cT=65663,cS=65574,s2="opaque",lf="null",bc=64111,cR=66378,le=123,s1="filter",tZ=239,sr="expressions",cQ=11703,kG="get",nZ=69762,nD="<",s0="exported",ga=68447,gb=11630,tY=">=",cP=11519,bb=44031,cO=69839,pp="return",jS=8286,f$=64310,f_=120084,a$=120126,ba=8335,cN=126519,tW="src/parser/expression_parser.ml",tX="(global)",m3=11502,hl=69941,cM=42511,ie=44025,a_=126534,kn=120,nC=94032,f9=126555,a8=67646,a9=65629,hG=65076,te=">>=",f8=126535,hk=69881,nB="empty",tV=117,tU=915,a6=120134,a7=12343,eo=70084,f7=69864,cL=12703,gX=68107,a3=126520,a4=126468,a5=43519,hj=65342,cK=43615,hi=120831,hF=42654,en=42899,a2=43359,sp=232,sq="Division_by_zero",cJ=119981,em=43738,f6=65140,a1=67638,po=112,el=68351,cI=68119,pJ="if",pI="immediately within another function.",f5=43388,cH=126538,id=70015,a0=8449,f4=120779,aZ=12686,f3=126504,pX="%d",f2=68191,nY=70018,so=57343,ek=67591,m2="'",cG=55291,ej=11727,ei=11557,cF=119980,nA=43014,ib=8188,ic=43599,aY=67967,aX=8319,l$="from",f1=42785,pW=789,gW=11775,f0=126502,tT="-=",jR=65279,kO=-48,li="set",fZ=63743,pn=2048,nX=64286,kc="right",aV=120093,aW=8486,iD="body",aU=43743,fY=12799,tS=227,cE=119965,sZ="Invalid number ",eh=126563,fX=64296,gV=43766,hh=8275,tR="Lookahead.peek failed",sn="*=",td=" : flags Open_text and Open_binary are not compatible",tQ="*",sm=2147483647,eg=11670,ef=43815,pV="else",sl=65536,pm="properties",sk="\\\\",aT=120004,jM=8238,ia=8417,cD=126591,nl="arguments",ee=11719,fW=66517,aS=126500,cC=126571,sY=246,ec=65497,ed=120571,jD="static",pU="declaration",cB=12730,fV=120597,eb=64262,hE=8420,fU=77823,l1="init",h$=66044,cA=74751,cz=195101,ea=66207,iJ=122,d$=126602,h_=69818,hg=8276,sX="Stack_overflow",d_=11742,fT=126539,h9=8432,cy=120132,cx=120687,fS=64311,m1=43713,gU=119148,sW="/static/",fR=126564,cw=120745,tO="+=",tP="Not_found",cv=126590,gT=44010,aR=131071,l7=-46,fQ=8467,gS=43759,sV="CallExpression",d9=126583,fP=74850,hf=43047,d6=126530,d7=40908,d8=12543,hD=69951,m0=42655,aQ=65489,aO=66503,aP=11695,fO=13311,lh=106,sU="superClass",tc="f",aM=64321,aN=11567,d5=43638,nk="const",iX="typeParameters",nz="delete",nW=124,aL=65615,sj="blocks",kF="false",si=130,fN=11718,fM=126556,aK=11623,ld="test",d4=64847,pH="string",h8=43456,aJ=110593,cu=12538,fL=8507,lc=":",M=-36,aI=55238,ct=12292,lo=192,fJ=120487,fK=64967,aH=173782,he=65074,fI=43741,aG=120074,tb="minus",aF=12548,sh=245,jL=8191,h7=71359,hd=43643,ny=42537,l6="computed",fG=126579,h6=43391,fH=11558,aE=126523,sg="<<",d3=64217,iy="id",kH="as",kC="true",cs=65381,fF=194559,l0=104,iq=108,d2=119996,fE=66559,sT="Invalid_argument",fC=64913,fD=12448,cr=126552,pG="any",nx=70066,d1=55242,h5=120781,aD=12352,aC=12295,cq=43714,sS="%ni",pF="import",tN="prototype",ln=-45,tM=-42,fB=65908,sR=119,pS="debugger",tL="Internal Error: Found private field in object props",pT="&",mZ=43560,aB=120485,fA=65575,tK="++",pR="label",co=65495,cp=64466,gR=43204,nj=64285,fz=67644,sf="shorthand",aA=68147,cn=67897,az=8526,cm=12539,i7="0",dZ=120712,d0=43641,ay=126522,is=248,ax=8450,aw=119974,hC=119170,ta="Sys_blocked_io",fy=67643,sP=121,sQ="superTypeParameters",nV=43187,h4=12440,av=8471,cl=65473,fx=68095,mY=43013,au=126553,pE="catch",kq=107,gQ=65305,ni=43754,dY=110591,fw=67640,ck=64284,at=64317,o_="protected",dX=126515,o9=1114111,s$=-97,nh=43018,dW=11631,nw=44002,se="%u",kE=105,pQ="object",pl="break",lZ=110,cj=66499,dV=65312,cg=126633,ch=120003,ci=65786,hc=66719,cf=8511,jm=8233,tJ=57344,ce=11492,dU=65487,hA=119145,hB=71351,sd=" : flags Open_rdonly and Open_wronly are not compatible",fv=11726,tI=253,mX="returnType",as=126540,sO=-24,jQ="-",kN="await",gC=8205,lb="async",fu=126543,ar=126550,sc=" : file already exists",kM="left",aq=120596,jj=8231,hb=11646,tH="/=",tG="|=",cd=64325,pD="case",dT=66511,ft=120121,ng=43137,sN="Invalid legacy octal ",jP=12288,kL="typeof",mW=43697,ap=66175,dS=126628,kK=224,o8="public",ha=69702,g$=94078,pk="enum",cc=42895,nU="in",g_=8416,hz=917999,fs=42911,pP=250,cb=120770,l5="super",ka=127343600,ca=126463,h3=43309,ao=42559,gP=119179,pC="interface",fr=66512,an=126588,fq=68415,la=102,nv=43010,gO=69871,b_=55203,b$=11507,dR=55215,am=120629,h2=44013,sM=870530776,pB="bool",k$="default",dQ=119976,tF="{",o="",o7="exportKind",nf="instanceof",nu="^",mV=43586,jl=100,i6="argument",b8=126566,b9=126558,s_="undefined",fp=119995,tE=-17,jk="src/parser/ast.ml",hy=68100,fo=126537,sb="Match_failure",dP=43790,ne=68111,dO=8505,b7=120686,ko="+",mU=42735,ak=120127,al=65613,tD=-67,hx=65100,gN=69759,h1=43609,sa="!=",dN=65500,s9="%li",mT=42527,dM=65548,nd=71338,g9=42611,dL=120713,sL="^=",ik=127,mS=111,aj=11694,h0=69940,fn=64318,kD="void",dK=8584,nc="let",fm=120538,b6=120070,pj="nan",fl=126601,hZ=43597,r$="\r\n",b5=68220,g8=8412,dJ=42191,fk=94020,dI=177983,ai=126547,b4=11565,r_="%",iL="/",dG=126619,dH=65019,hw=42621,b3=120092,pA="property",r9="#",b2=67839,fi=120122,fj=42890,b1=43761,hv=8256,hu=43231,ht=44011,fh=11498,r8=";",gM=65103,g7=65039,fg=64274,nt=11647,nT=43273,gL=70095,o6="=",l4="function",dF=43258,ah=126562,r7="!==",l_=6158,s8="fs",pz="jsError",ag=71295,b0=65344,mR=43642,nb=42606,dD=126544,dE=64109,D="unreachable",dC=64829,tC="|",sK="End_of_file",bZ=11702,dB=73727,af=68466,lg="new",sJ="Failure",na=43764,nS="local",pi="with",dA=12783,dz=11358,sI="789",ff=65141,r6="~",bY=65481,gK=68154,bX=12341,jU=65278,fe=19893,gJ=119172,dy=68031,hs=43574,bW=43259,py="while",iC="camlinternalFormat.ml",sH="elements",nR=43711,r5=-34,tA="each",tB="Sys_error",mQ=43301,m$=43442,g6=68158,dx=126584,fd=126570,hY=65295,mP=12329,bV=11263,j$="int_of_string",s7="Unix",nQ=43702,nP=43704,ae=43822,lY="operator",j_="name",dw=119970,dv=65547,fc=126514,fb=65276,ad=126498,ph="callee",du=120076,mO=43395,dt=119893,hX=917759,fa=66431,tz="*-/",mN=43709,nN=94098,e$=126546,nO="predicate",ac=64911,o5="types",ns=11505,hr=43481,hW=119154,kJ=240,gI=8203,hq=42737,e_=126624,ab=8525,kB="0x",ds=68116,nM="optional",g5=69887,bU=68029,mM=70080,o4="\n",bT=126499,dr=92728,pg="finally",e9=43311,ty="&=",px=125,tx="%Li",jC=255,e8=120069,aa=126627,dq=8457,g4=68099,e7=119994,$=93951,m_=69634,dp=64319,l9="source",gH=65055,g3=65062,e6=65135,tw="||",_=66303,e5=12447,e4=126536,gG=119209,o3="generator",o2="for",bS=120133,s6="--",jO=8287,e1=74606,e2=67583,e3=66351,Z=66717,pf="mixed",e0=64255,Y=8477,sG=-79,hp=119213,eZ=8318,nr=43587,bR=65597,bQ=68023,dn=68680,tv="**",X=65594,eY=43814,mL=43042,eX=120628,nL=43696,eW=12320,tu="<=",W=66463,V=42783,nq=43700,hV=43225,dm=42508,U=64316,sF="prefix",eV=43967,bP=120570,ho=66729,eU=42539,r4="Internal Error: Found object private prop",dl=8483,eS=126548,hU=69733,eT=8455,pO="class",bO=68607,pN="continue",gF=65343,pM=252,bN=126495,kA="key",sE=916,kb=" ",nK=43695,ts="RestElement",tt="Undefined_recursive_module",mK=43471,eR=11734,T=68120,bM=43647,g2=94094,m9=116,r3="==",bL=92159,g1=42607,jB="typeAnnotation",S=66461,bK=173823,dk=42647,bJ=120513,pw="specifiers",nJ="Set.bal",tr="**=",sD="%i",dj=126651,r2=-61,gE=71369,sC=">>>=",dh=94111,di=43782,lp="extends",tq="importKind",dg=65338;function
un(b,a){throw[0,b,a]}var
R=[0];function
aa6(b,c){function
f(a){un(R.Undefined_recursive_module,b)}function
e(b,c,a){if(typeof
b==="number")switch(b){case
0:c[a]={fun:f};break;case
1:c[a]=[sY,f];break;default:c[a]=[]}else
switch(b[0]){case
0:c[a]=[0];for(var
d=1;d<b[1].length;d++)e(b[1][d],c[a],d);break;default:c[a]=b[1]}}var
a=[];e(c,a,0);return a[0]}function
h(c,a){if(typeof
a===l4){c.fun=a;return 0}if(a.fun){c.fun=a.fun;return 0}var
b=a.length;while(b--)c[b]=a[b];return 0}function
t$(b,c,d){if(typeof
b==="number")switch(b){case
0:c.fun=d;break;case
1:default:h(c,d)}else
switch(b[0]){case
0:for(var
a=1;a<b[1].length;a++)t$(b[1][a],c[a],d[a]);break}return 0}function
aa7(c,d){var
g=c.length,h=d.length,f=g+h-1,b=new
Array(f);b[0]=0;var
a=1,e=1;for(;a<g;a++)b[a]=c[a];for(;a<f;a++,e++)b[a]=d[e];return b}function
aa8(d,b,e,c,f){if(c<=b)for(var
a=1;a<=f;a++)e[c+a]=d[b+a];else
for(var
a=f;a>=1;a--)e[c+a]=d[b+a];return 0}function
p6(e,f,d){var
a=new
Array(d+1);a[0]=0;for(var
b=1,c=f+1;b<=d;b++,c++)a[b]=e[c];return a}function
ob(d,e,c){var
b=new
Array(c);for(var
a=0;a<c;a++)b[a]=d[e+a];return b}function
qc(b,c,a){var
d=String.fromCharCode;if(c==0&&a<=4096&&a==b.length)return d.apply(null,b);var
e=o;for(;0<a;c+=mb,a-=mb)e+=d.apply(null,ob(b,c,Math.min(a,mb)));return e}function
n4(b){if(iF.Uint8Array)var
c=new(iF.Uint8Array)(b.l);else
var
c=new
Array(b.l);var
e=b.c,d=e.length,a=0;for(;a<d;a++)c[a]=e.charCodeAt(a);for(d=b.l;a<d;a++)c[a]=0;b.c=c;b.t=4;return c}function
iQ(d,e,b,f,c){if(c==0)return 0;if(f==0&&(c>=b.l||b.t==2&&c>=b.c.length)){b.c=d.t==4?qc(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else
if(b.t==2&&f==b.c.length){b.c+=d.t==4?qc(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else{if(b.t!=4)n4(b);var
g=d.c,h=b.c;if(d.t==4)if(f<=e)for(var
a=0;a<c;a++)h[f+a]=g[e+a];else
for(var
a=c-1;a>=0;a--)h[f+a]=g[e+a];else{var
i=Math.min(c,g.length-e);for(var
a=0;a<i;a++)h[f+a]=g.charCodeAt(e+a);for(;a<c;a++)h[f+a]=0}}return 0}function
abL(c,e){var
d=c.length,b=new
Array(d+1),a=0;for(;a<d;a++)b[a]=c[a];b[a]=e;return b}function
kr(b,a){if(b.fun)return kr(b.fun,a);var
c=b.length,d=a.length,e=c-d;if(e==0)return b.apply(null,a);else
if(e<0)return kr(b.apply(null,ob(a,0,c)),ob(a,c,d-c));else
return function(c){return kr(b,abL(a,c))}}function
lx(b,a){if(a.repeat)return a.repeat(b);var
c=o,d=0;if(b==0)return c;for(;;){if(b&1)c+=a;b>>=1;if(b==0)return c;a+=a;d++;if(d==9)a.slice(0,1)}}function
lu(a){if(a.t==2)a.c+=lx(a.l-a.c.length,"\0");else
a.c=qc(a.c,0,a.c.length);a.t=0}function
uh(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>ik)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
abH(e){for(var
j=o,c=o,g,f,h,a,b=0,i=e.length;b<i;b++){f=e.charCodeAt(b);if(f<ip){for(var
d=b+1;d<i&&(f=e.charCodeAt(d))<ip;d++);if(d-b>kI){c.substr(0,1);j+=c;c=o;j+=e.slice(b,d)}else
c+=e.slice(b,d);if(d==i)break;b=d}a=1;if(++b<i&&((h=e.charCodeAt(b))&-64)==ip){g=h+(f<<6);if(f<kK){a=g-12416;if(a<ip)a=1}else{a=2;if(++b<i&&((h=e.charCodeAt(b))&-64)==ip){g=h+(g<<6);if(f<kJ){a=g-925824;if(a<pn||a>=55295&&a<tJ)a=2}else{a=3;if(++b<i&&((h=e.charCodeAt(b))&-64)==ip&&f<sh){a=h-63447168+(g<<6);if(a<sl||a>o9)a=3}}}}}if(a<4){b-=a;c+="\ufffd"}else
if(a>L)c+=String.fromCharCode(55232+(a>>10),st+(a&1023));else
c+=String.fromCharCode(a);if(c.length>mb){c.substr(0,1);j+=c;c=o}}return j+c}function
abG(a){switch(a.t){case
9:return a.c;default:lu(a);case
0:if(uh(a.c)){a.t=9;return a.c}a.t=8;case
8:return abH(a.c)}}function
jo(c,a,b){this.t=c;this.c=a;this.l=b}jo.prototype.toString=function(){return abG(this)};function
a(a){return new
jo(0,a,a.length)}function
qb(c,b){un(c,a(b))}function
lv(a){qb(R.Invalid_argument,a)}function
aa9(){lv(tm)}function
iN(a,b){if(b>>>0>=a.length-1)aa9();return a}function
aa_(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
abe(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
abm(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
w(a,b){a.t&6&&lu(a);b.t&6&&lu(b);return a.c<b.c?-1:a.c>b.c?1:0}function
lt(a,b,h){var
d=[];for(;;){if(!(h&&a===b))if(a
instanceof
jo)if(b
instanceof
jo){if(a!==b){var
c=w(a,b);if(c!=0)return c}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
e=a[0];if(e===pv)e=0;if(e===pP){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
f=b[0];if(f===pv)f=0;if(f===pP){b=b[1];continue}else
if(e!=f)return e<f?-1:1;else
switch(e){case
248:var
c=abm(a[2],b[2]);if(c!=0)return c;break;case
251:lv("equal: abstract value");case
255:var
c=abe(a,b);if(c!=0)return c;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)d.push(a,b,1)}}else
return 1}else
if(b
instanceof
jo||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!="number"&&a&&a.compare)return a.compare(b,h);else
if(typeof
a==l4)lv("compare: functional value");else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!h)return NaN;if(a==a)return 1;if(b==b)return-1}}if(d.length==0)return 0;var
g=d.pop();b=d.pop();a=d.pop();if(g+1<a.length)d.push(a,b,g+1);a=a[g];b=b[g]}}function
aa$(a,b){return lt(a,b,true)}function
iE(a){if(a<0)lv("String.create");return new
jo(a?2:9,o,a)}function
p7(a,b){return+(lt(a,b,false)==0)}function
aba(a,c,b,d){if(b>0)if(c==0&&(b>=a.l||a.t==2&&b>=a.c.length))if(d==0){a.c=o;a.t=2}else{a.c=lx(b,String.fromCharCode(d));a.t=b==a.l?0:2}else{if(a.t!=4)n4(a);for(b+=c;c<b;c++)a.c[c]=d}return 0}function
jY(a){qb(R.Failure,a)}function
n3(a){if((a.t&6)!=0)lu(a);return a.c}function
abb(a){var
b;a=n3(a);b=+a;if(a.length>0&&b===b)return b;a=a.replace(/_/g,o);b=+a;if(a.length>0&&b===b||/^[+-]?nan$/i.test(a))return b;var
c=/^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(a);if(c){var
d=c[3].replace(/0+$/,o),f=parseInt(c[1]+c[2]+d,16),e=(c[4]|0)-4*d.length;b=f*Math.pow(2,e);return b}if(/^\+?inf(inity)?$/i.test(a))return Infinity;if(/^-inf(inity)?$/i.test(a))return-Infinity;jY("float_of_string")}function
qa(d){d=n3(d);var
e=d.length;if(e>31)lv("format_int: format too long");var
a={justify:ko,signstyle:jQ,filler:kb,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:tc};for(var
c=0;c<e;c++){var
b=d.charAt(c);switch(b){case"-":a.justify=jQ;break;case"+":case" ":a.signstyle=b;break;case"0":a.filler=i7;break;case"#":a.alternate=true;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":a.width=0;while(b=d.charCodeAt(c)-48,b>=0&&b<=9){a.width=a.width*10+b;c++}c--;break;case".":a.prec=0;c++;while(b=d.charCodeAt(c)-48,b>=0&&b<=9){a.prec=a.prec*10+b;c++}c--;case"d":case"i":a.signedconv=true;case"u":a.base=10;break;case"x":a.base=16;break;case"X":a.base=16;a.uppercase=true;break;case"o":a.base=8;break;case"e":case"f":case"g":a.signedconv=true;a.conv=b;break;case"E":case"F":case"G":a.signedconv=true;a.uppercase=true;a.conv=b.toLowerCase();break}}return a}function
p8(b,f){if(b.uppercase)f=f.toUpperCase();var
e=f.length;if(b.signedconv&&(b.sign<0||b.signstyle!=jQ))e++;if(b.alternate){if(b.base==8)e+=1;if(b.base==16)e+=2}var
c=o;if(b.justify==ko&&b.filler==kb)for(var
d=e;d<b.width;d++)c+=kb;if(b.signedconv)if(b.sign<0)c+=jQ;else
if(b.signstyle!=jQ)c+=b.signstyle;if(b.alternate&&b.base==8)c+=i7;if(b.alternate&&b.base==16)c+=kB;if(b.justify==ko&&b.filler==i7)for(var
d=e;d<b.width;d++)c+=i7;c+=f;if(b.justify==jQ)for(var
d=e;d<b.width;d++)c+=kb;return a(c)}function
ub(i,c){var
a,e=qa(i),d=e.prec<0?6:e.prec;if(c<0||c==0&&1/c==-Infinity){e.sign=-1;c=-c}if(isNaN(c)){a=pj;e.filler=kb}else
if(!isFinite(c)){a="inf";e.filler=kb}else
switch(e.conv){case"e":var
a=c.toExponential(d),b=a.length;if(a.charAt(b-3)==p2)a=a.slice(0,b-1)+i7+a.slice(b-1);break;case"f":a=c.toFixed(d);break;case"g":d=d?d:1;a=c.toExponential(d-1);var
h=a.indexOf(p2),g=+a.slice(h+1);if(g<-4||c>=1e+21||c.toFixed(0).length>d){var
b=h-1;while(a.charAt(b)==i7)b--;if(a.charAt(b)==j9)b--;a=a.slice(0,b+1)+a.slice(h);b=a.length;if(a.charAt(b-3)==p2)a=a.slice(0,b-1)+i7+a.slice(b-1);break}else{var
f=d;if(g<0){f-=g+1;a=c.toFixed(f)}else
while(a=c.toFixed(f),a.length>d+1)f--;if(f){var
b=a.length-1;while(a.charAt(b)==i7)b--;if(a.charAt(b)==j9)b--;a=a.slice(0,b+1)}}break}return p8(e,a)}function
n6(e,c){if(n3(e)==pX)return a(o+c);var
b=qa(e);if(c<0)if(b.signedconv){b.sign=-1;c=-c}else
c>>>=0;var
d=c.toString(b.base);if(b.prec>=0){b.filler=kb;var
f=b.prec-d.length;if(f>0)d=lx(f,i7)+d}return p8(b,d)}var
abx=0;function
iZ(){return abx++}function
uc(a,b){return+(lt(a,b,false)>=0)}function
abI(e){for(var
f=o,b=f,a,h,c=0,g=e.length;c<g;c++){a=e.charCodeAt(c);if(a<ip){for(var
d=c+1;d<g&&(a=e.charCodeAt(d))<ip;d++);if(d-c>kI){b.substr(0,1);f+=b;b=o;f+=e.slice(c,d)}else
b+=e.slice(c,d);if(d==g)break;c=d}if(a<pn){b+=String.fromCharCode(lo|a>>6);b+=String.fromCharCode(ip|a&63)}else
if(a<pZ||a>=so)b+=String.fromCharCode(kK|a>>12,ip|a>>6&63,ip|a&63);else
if(a>=56319||c+1==g||(h=e.charCodeAt(c+1))<st||h>so)b+="\xef\xbf\xbd";else{c++;a=(a<<10)+h-56613888;b+=String.fromCharCode(kJ|a>>18,ip|a>>12&63,ip|a>>6&63,ip|a&63)}if(b.length>mb){b.substr(0,1);f+=b;b=o}}return f+b}function
ks(a){var
b=9;if(!uh(a))b=8,a=abI(a);return new
jo(b,a,a.length)}function
abc(a,c,k){if(!isFinite(a)){if(isNaN(a))return ks(pj);return ks(a>0?t4:"-infinity")}var
i=a==0&&1/a==-Infinity?1:a>=0?0:1;if(i)a=-a;var
d=0;if(a==0);else
if(a<1)while(a<1&&d>-1022){a*=2;d--}else
while(a>=2){a/=2;d++}var
j=d<0?o:ko,e=o;if(i)e=jQ;else
switch(k){case
43:e=ko;break;case
32:e=kb;break;default:break}if(c>=0&&c<13){var
g=Math.pow(2,c*4);a=Math.round(a*g)/g}var
b=a.toString(16);if(c>=0){var
h=b.indexOf(j9);if(h<0)b+=j9+lx(c,i7);else{var
f=h+1+c;if(b.length<f)b+=lx(f-b.length,i7);else
b=b.substr(0,f)}}return ks(e+kB+b+"p"+j+d.toString(10))}function
abh(a){return(a[3]|a[2]|a[1])==0}function
n7(a){return[jC,a&iY,a>>24&iY,a>>31&L]}function
ul(d){var
c=d.length,b=new
Array(c);for(var
a=0;a<c;a++)b[a]=d[a];return b}function
abk(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[jC,c&iY,d&iY,e&L]}function
p9(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
ud(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&iY;a[1]=a[1]<<1&iY}function
abi(a){a[1]=(a[1]>>>1|a[2]<<23)&iY;a[2]=(a[2]>>>1|a[3]<<23)&iY;a[3]=a[3]>>>1}function
ug(e,f){var
c=0,b=ul(e),a=ul(f),d=[jC,0,0,0];while(p9(b,a)>0){c++;ud(a)}while(c>=0){c--;ud(d);if(p9(b,a)>=0){d[1]++;b=abk(b,a)}abi(a)}return[0,d,b]}function
abl(a){return a[1]|a[2]<<24}function
abg(a){return a[3]<<16<0}function
ue(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[jC,b&iY,c&iY,d&L]}function
abf(g,c){var
a=qa(g);if(a.signedconv&&abg(c)){a.sign=-1;c=ue(c)}var
b=o,h=n7(a.base),f="0123456789abcdef";do{var
e=ug(c,h);c=e[1];b=f.charAt(abl(e[2]))+b}while(!abh(c));if(a.prec>=0){a.filler=kb;var
d=a.prec-b.length;if(d>0)b=lx(d,i7)+b}return p8(a,b)}function
P(a){return a.l}function
jd(a,b){switch(a.t&6){default:if(b>=a.c.length)return 0;case
0:return a.c.charCodeAt(b);case
4:return a.c[b]}}function
abd(a,b){var
c=a[1]+b[1],d=a[2]+b[2]+(c>>24),e=a[3]+b[3]+(d>>24);return[jC,c&iY,d&iY,e&L]}var
uf=Math.pow(2,-24);function
abj(a,b){var
c=a[1]*b[1],d=(c*uf|0)+a[2]*b[1]+a[1]*b[2],e=(d*uf|0)+a[3]*b[1]+a[2]*b[2]+a[1]*b[3];return[jC,c&iY,d&iY,e&L]}function
p_(a,b){return p9(a,b)<0}function
um(c){var
a=0,d=P(c),b=10,e=d>0&&jd(c,0)==45?(a++,-1):1;if(a+1<d&&jd(c,a)==48)switch(jd(c,a+1)){case
120:case
88:b=16;a+=2;break;case
111:case
79:b=8;a+=2;break;case
98:case
66:b=2;a+=2;break}return[a,e,b]}function
n$(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=iJ)return a-87;return-1}function
n8(f){var
e=um(f),d=e[0],i=e[1],g=e[2],h=n7(g),j=ug([jC,iY,268435455,L],h)[1],c=jd(f,d),a=n$(c);if(a<0||a>=g)jY(j$);var
b=n7(a);for(;;){d++;c=jd(f,d);if(c==95)continue;a=n$(c);if(a<0||a>=g)break;if(p_(j,b))jY(j$);a=n7(a);b=abd(abj(h,b),a);if(p_(b,a))jY(j$)}if(d!=P(f))jY(j$);if(e[2]==10&&p_([jC,0,0,32768],b))jY(j$);if(i<0)b=ue(b);return b}function
n9(a){return(a[3]<<16)*Math.pow(2,32)+a[2]*Math.pow(2,24)+a[1]}function
jE(f){var
h=um(f),c=h[0],i=h[1],d=h[2],g=P(f),j=-1>>>0,e=c<g?jd(f,c):0,b=n$(e);if(b<0||b>=d)jY(j$);var
a=b;for(c++;c<g;c++){e=jd(f,c);if(e==95)continue;b=n$(e);if(b<0||b>=d)break;a=d*a+b;if(a>j)jY(j$)}if(c!=g)jY(j$);a=i*a;if(d==10&&(a|0)!=a)jY(j$);return a|0}function
jZ(a){return ob(a,1,a.length-1)}function
abn(a){return a.toString()}function
abo(b){var
c={};for(var
a=1;a<b.length;a++){var
d=b[a];c[d[1].toString()]=d[2]}return c}function
abp(a,b){return+(lt(a,b,false)<=0)}function
abq(a,b){return+(lt(a,b,false)<0)}function
mc(a,d){var
a=a+1|0,b=new
Array(a);b[0]=0;for(var
c=1;c<a;c++)b[c]=d;return b}function
jp(a){qb(R.Sys_error,a)}var
j0=new
Array();function
p$(c){var
a=j0[c];if(!a.opened)jp("Cannot flush a closed channel");if(!a.buffer||a.buffer==o)return 0;if(a.fd&&R.fds[a.fd]&&R.fds[a.fd].output){var
b=R.fds[a.fd].output;switch(b.length){case
2:b(c,a.buffer);break;default:b(a.buffer)}}a.buffer=o;return 0}if(iF.process&&iF.process.cwd)var
n5=iF.process.cwd();else
var
n5="/static";if(n5.slice(-1)!==iL)n5+=iL;function
abr(a){a=a
instanceof
jo?a.toString():a;if(a.charCodeAt(0)!=47)a=n5+a;var
d=a.split(iL),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(o);break;default:b.push(d[c]);break}b.orig=a;return b}function
abz(a){a=a
instanceof
jo?a.toString():a;jp(a+": No such file or directory")}function
abC(a){return new
jo(4,a,a.length)}function
uq(){lv(tm)}function
G(b,a){if(a>>>0>=b.l)uq();return jd(b,a)}function
t_(){}function
iM(a){this.data=a}iM.prototype=new
t_();iM.prototype.truncate=function(a){var
b=this.data;this.data=iE(a|0);iQ(b,0,this.data,0,a)};iM.prototype.length=function(){return P(this.data)};iM.prototype.write=function(b,d,g,a){var
c=this.length();if(b+a>=c){var
e=iE(b+a),f=this.data;this.data=e;iQ(f,0,this.data,0,c)}iQ(d,g,this.data,b,a);return 0};iM.prototype.read=function(c,a,d,b){var
e=this.length();iQ(this.data,c,a,d,b);return 0};iM.prototype.read_one=function(a){return G(this.data,a)};iM.prototype.close=function(){};iM.prototype.constructor=iM;function
jn(b,a){this.content={};this.root=b;this.lookupFun=a}jn.prototype.nm=function(a){return this.root+a};jn.prototype.lookup=function(b){if(!this.content[b]&&this.lookupFun){var
c=this.lookupFun(a(this.root),a(b));if(c!=0)this.content[b]=new
iM(c[1])}};jn.prototype.exists=function(a){this.lookup(a);return this.content[a]?1:0};jn.prototype.readdir=function(c){var
f=c==o?o:c+iL,g=new
RegExp(nu+f+sv),d={},b=[];for(var
e
in
this.content){var
a=e.match(g);if(a&&!d[a[1]]){d[a[1]]=true;b.push(a[1])}}return b};jn.prototype.is_dir=function(a){var
d=a==o?o:a+iL,e=new
RegExp(nu+d+sv),f=[];for(var
c
in
this.content){var
b=c.match(e);if(b)return 1}return 0};jn.prototype.unlink=function(a){var
b=this.content[a]?true:false;delete
this.content[a];return b};jn.prototype.open=function(a,b){if(b.rdonly&&b.wronly)jp(this.nm(a)+sd);if(b.text&&b.binary)jp(this.nm(a)+td);this.lookup(a);if(this.content[a]){if(this.is_dir(a))jp(this.nm(a)+" : is a directory");if(b.create&&b.excl)jp(this.nm(a)+sc);var
c=this.content[a];if(b.truncate)c.truncate();return c}else
if(b.create){this.content[a]=new
iM(iE(0));return this.content[a]}else
abz(this.nm(a))};jn.prototype.register=function(c,b){if(this.content[c])jp(this.nm(c)+sc);if(b
instanceof
jo)this.content[c]=new
iM(b);else
if(b
instanceof
Array)this.content[c]=new
iM(abC(b));else
if(b.toString){var
d=a(b.toString());this.content[c]=new
iM(d)}};jn.prototype.constructor=jn;function
ua(a){if(a.t!=4)n4(a);return a.c}function
ii(a,c,b){b&=jC;if(a.t!=4){if(c==a.c.length){a.c+=String.fromCharCode(b);if(c+1==a.l)a.t=0;return 0}n4(a)}a.c[c]=b;return 0}function
ly(b,a,c){if(a>>>0>=b.l)uq();return ii(b,a,c)}var
p5=iF.Buffer;function
jX(a){this.fs=require(s8);this.fd=a}jX.prototype=new
t_();jX.prototype.truncate=function(a){this.fs.ftruncateSync(this.fd,a|0)};jX.prototype.length=function(){return this.fs.fstatSync(this.fd).size};jX.prototype.write=function(f,b,c,e){var
a=ua(b);if(!a
instanceof
iF.Uint8Array)a=new(iF.Uint8Array)(a);var
d=new
p5(a);this.fs.writeSync(this.fd,d,c,e,f);return 0};jX.prototype.read=function(g,d,c,f){var
a=ua(d);if(!(a
instanceof
iF.Uint8Array))a=new(iF.Uint8Array)(a);var
e=new
p5(a);this.fs.readSync(this.fd,e,c,f,g);for(var
b=0;b<f;b++)ly(d,c+b,e[c+b]);return 0};jX.prototype.read_one=function(c){var
b=new(iF.Uint8Array)(1),a=new
p5(b);this.fs.readSync(this.fd,a,0,1,c);return a[0]};jX.prototype.close=function(){this.fs.closeSync(this.fd)};jX.prototype.constructor=jX;function
jW(a){this.fs=require(s8);this.root=a}jW.prototype.nm=function(a){return this.root+a};jW.prototype.exists=function(a){return this.fs.existsSync(this.nm(a))?1:0};jW.prototype.readdir=function(a){return this.fs.readdirSync(this.nm(a))};jW.prototype.is_dir=function(a){return this.fs.statSync(this.nm(a)).isDirectory()?1:0};jW.prototype.unlink=function(a){var
b=this.fs.existsSync(this.nm(a))?1:0;this.fs.unlinkSync(this.nm(a));return b};jW.prototype.open=function(f,c){var
a=require("constants"),b=0;for(var
e
in
c)switch(e){case"rdonly":b|=a.O_RDONLY;break;case"wronly":b|=a.O_WRONLY;break;case"append":b|=a.O_WRONLY|a.O_APPEND;break;case"create":b|=a.O_CREAT;break;case"truncate":b|=a.O_TRUNC;break;case"excl":b|=a.O_EXCL;break;case"binary":b|=a.O_BINARY;break;case"text":b|=a.O_TEXT;break;case"nonblock":b|=a.O_NONBLOCK;break}var
d=this.fs.openSync(this.nm(f),b);return new
jX(d)};jW.prototype.rename=function(b,a){this.fs.renameSync(this.nm(b),this.nm(a))};jW.prototype.constructor=jW;var
md=[];if(typeof
require==s_)md.push({path:iL,device:new
jn(iL)});else
md.push({path:iL,device:new
jW(iL)});md.push({path:sW,device:new
jn(sW)});function
abM(b){var
f=abr(b),b=f.join(iL),e=b+iL,c;for(var
d=0;d<md.length;d++){var
a=md[d];if(e.search(a.path)==0&&(!c||c.path.length<a.path.length))c={path:a.path,device:a.device,rest:b.substring(a.path.length,b.length)}}return c}function
up(e,f){var
b=j0[e],d=a(f),c=P(d);b.file.write(b.offset,d,0,c);b.offset+=c;return 0}function
abJ(a){var
b=iF;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stderr.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.error&&c.error(a)}}function
abK(a){var
b=iF;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stdout.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.log&&c.log(a)}}function
oa(c,e,d,a){if(R.fds===undefined)R.fds=new
Array();a=a?a:{};var
b={};b.file=d;b.offset=a.append?d.length():0;b.flags=a;b.output=e;R.fds[c]=b;if(!R.fd_last_idx||c>R.fd_last_idx)R.fd_last_idx=c;return c}function
abN(c,b,g){var
a={};while(b){switch(b[1]){case
0:a.rdonly=1;break;case
1:a.wronly=1;break;case
2:a.append=1;break;case
3:a.create=1;break;case
4:a.truncate=1;break;case
5:a.excl=1;break;case
6:a.binary=1;break;case
7:a.text=1;break;case
8:a.nonblock=1;break}b=b[2]}if(a.rdonly&&a.wronly)jp(c.toString()+sd);if(a.text&&a.binary)jp(c.toString()+td);var
d=abM(c),e=d.device.open(d.rest,a),f=R.fd_last_idx?R.fd_last_idx:0;return oa(f+1,up,e,a)}oa(0,up,new
iM(iE(0)));oa(1,abK,new
iM(iE(0)));oa(2,abJ,new
iM(iE(0)));function
abs(c){var
b=R.fds[c];if(b.flags.wronly)jp(sA+c+" is writeonly");var
a={file:b.file,offset:b.offset,fd:c,opened:true,out:false,refill:null};j0[a.fd]=a;return a.fd}function
ui(c){var
b=R.fds[c];if(b.flags.rdonly)jp(sA+c+" is readonly");var
a={file:b.file,offset:b.offset,fd:c,opened:true,out:true,buffer:o};j0[a.fd]=a;return a.fd}function
abt(){var
b=0;for(var
a=0;a<j0.length;a++)if(j0[a]&&j0[a].opened&&j0[a].out)b=[0,j0[a],b];return b}function
abu(g,d,h,f){var
a=j0[g];if(!a.opened)jp("Cannot output to a closed channel");var
c;if(h==0&&P(d)==f)c=d;else{c=iE(f);iQ(d,h,c,0,f)}var
b=c.toString(),e=b.lastIndexOf("\n");if(e<0)a.buffer+=b;else{a.buffer+=b.substr(0,e+1);p$(g);a.buffer+=b.substr(e+1)}return 0}if(!Math.imul)Math.imul=function(b,a){a|=0;return((b>>16)*a<<16)+(b&L)*a|0};var
abv=Math.imul;function
lw(a,b){return+(lt(a,b,false)!=0)}function
abw(a){return+(a
instanceof
Array)}function
n_(a){return a
instanceof
Array?a[0]:a
instanceof
jo?pM:1e3}function
jq(c,b,a){R[c+1]=b;if(a)R[a]=b}var
uk={};function
abB(a,b){uk[n3(a)]=b;return 0}function
i0(a,b){if(a===b)return 1;a.t&6&&lu(a);b.t&6&&lu(b);return a.c==b.c?1:0}function
C(a,b){return 1-i0(a,b)}function
abD(){return sm/4|0}function
abE(){return 0}function
abF(){return[0,a(s7),32,0]}function
aby(a){throw a}function
abA(){aby(R.Not_found)}function
ur(c){var
a=iF,b=c.toString();if(a.process&&a.process.env&&a.process.env[b]!=undefined)return ks(a.process.env[b]);abA()}function
kd(a){var
b=1;while(a&&a.joo_tramp){a=a.joo_tramp.apply(null,a.joo_args);b++}return a}function
ir(b,a){return{joo_tramp:b,joo_args:a}}function
uo(a){return a}function
uj(a){return uk[a]}function
iK(a){if(a
instanceof
Array)return a;if(iF.RangeError&&a
instanceof
iF.RangeError&&a.message&&a.message.match(/maximum call stack/i))return uo(R.Stack_overflow);if(iF.InternalError&&a
instanceof
iF.InternalError&&a.message&&a.message.match(/too much recursion/i))return uo(R.Stack_overflow);if(a
instanceof
iF.Error&&uj(pz))return[0,uj(pz),a];return[0,R.Failure,ks(String(a))]}function
b(a,b){return a.length==1?a(b):kr(a,[b])}function
g(a,b,c){return a.length==2?a(b,c):kr(a,[b,c])}function
p(a,b,c,d){return a.length==3?a(b,c,d):kr(a,[b,c,d])}function
k_(a,b,c,d,e){return a.length==4?a(b,c,d,e):kr(a,[b,c,d,e])}function
jA(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):kr(a,[b,c,d,e,f])}var
qu=[is,a(tn),-1],j1=[is,a(sJ),-3],qd=[is,a(sT),-4],ke=[is,a(tP),-7],qv=[is,a(sb),-8],qt=[is,a(sX),-9],s=[is,a(t0),-11],qs=[is,a(tt),-12],ol=[0,[11,a('File "'),[2,0,[11,a('", line '),[4,0,0,0,[11,a(", characters "),[4,0,0,0,[12,45,[4,0,0,0,[11,a(": "),[2,0,0]]]]]]]]]],a('File "%s", line %d, characters %d-%d: %s')],q3=[0,0,[0,0,0,0],[0,0,0,0]],ov=[0,0,0],ox=a("\x01\x02"),oy=a("\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01"),oJ=[0,0,0,0,0,1,0],rO=[0,0,0],rP=[0,1],rZ=[0,0];jq(11,qs,tt);jq(10,s,t0);jq(9,[is,a(ta),-10],ta);jq(8,qt,sX);jq(7,qv,sb);jq(6,ke,tP);jq(5,[is,a(sq),-6],sq);jq(4,[is,a(sK),-5],sK);jq(3,qd,sT);jq(2,j1,sJ);jq(1,[is,a(tB),-2],tB);jq(0,qu,tn);var
H(a){if(typeof
a==="number")return 0;else
switch(a[0]){case
0:return[0,H(a[1])];case
1:return[1,H(a[1])];case
2:return[2,H(a[1])];case
3:return[3,H(a[1])];case
4:return[4,H(a[1])];case
5:return[5,H(a[1])];case
6:return[6,H(a[1])];case
7:return[7,H(a[1])];case
8:var
c=a[1];return[8,c,H(a[2])];case
9:var
b=a[1];return[9,b,b,H(a[3])];case
10:return[10,H(a[1])];case
11:return[11,H(a[1])];case
12:return[12,H(a[1])];case
13:return[13,H(a[1])];default:return[14,H(a[1])]}}function
iO(a,b){if(typeof
a==="number")return b;else
switch(a[0]){case
0:return[0,iO(a[1],b)];case
1:return[1,iO(a[1],b)];case
2:return[2,iO(a[1],b)];case
3:return[3,iO(a[1],b)];case
4:return[4,iO(a[1],b)];case
5:return[5,iO(a[1],b)];case
6:return[6,iO(a[1],b)];case
7:return[7,iO(a[1],b)];case
8:var
c=a[1];return[8,c,iO(a[2],b)];case
9:var
d=a[2],e=a[1];return[9,e,d,iO(a[3],b)];case
10:return[10,iO(a[1],b)];case
11:return[11,iO(a[1],b)];case
12:return[12,iO(a[1],b)];case
13:return[13,iO(a[1],b)];default:return[14,iO(a[1],b)]}}function
E(a,b){if(typeof
a==="number")return b;else
switch(a[0]){case
0:return[0,E(a[1],b)];case
1:return[1,E(a[1],b)];case
2:var
c=a[1];return[2,c,E(a[2],b)];case
3:var
d=a[1];return[3,d,E(a[2],b)];case
4:var
e=a[3],f=a[2],g=a[1];return[4,g,f,e,E(a[4],b)];case
5:var
h=a[3],i=a[2],j=a[1];return[5,j,i,h,E(a[4],b)];case
6:var
k=a[3],l=a[2],m=a[1];return[6,m,l,k,E(a[4],b)];case
7:var
n=a[3],o=a[2],p=a[1];return[7,p,o,n,E(a[4],b)];case
8:var
q=a[3],r=a[2],s=a[1];return[8,s,r,q,E(a[4],b)];case
9:return[9,E(a[1],b)];case
10:return[10,E(a[1],b)];case
11:var
t=a[1];return[11,t,E(a[2],b)];case
12:var
u=a[1];return[12,u,E(a[2],b)];case
13:var
v=a[2],w=a[1];return[13,w,v,E(a[3],b)];case
14:var
x=a[2],y=a[1];return[14,y,x,E(a[3],b)];case
15:return[15,E(a[1],b)];case
16:return[16,E(a[1],b)];case
17:var
z=a[1];return[17,z,E(a[2],b)];case
18:var
A=a[1];return[18,A,E(a[2],b)];case
19:return[19,E(a[1],b)];case
20:var
B=a[2],C=a[1];return[20,C,B,E(a[3],b)];case
21:var
D=a[1];return[21,D,E(a[2],b)];case
22:return[22,E(a[1],b)];case
23:var
F=a[1];return[23,F,E(a[2],b)];default:var
G=a[2],H=a[1];return[24,H,G,E(a[3],b)]}}function
O(a){throw[0,j1,a]}function
iR(a){throw[0,qd,a]}iZ(0);function
oc(a){return 0<=a?a:-a|0}var
us=sm;function
m(d,c){var
a=P(d),e=P(c),b=iE(a+e|0);iQ(d,0,b,0,a);iQ(c,0,b,a,e);return b}function
lz(a,b){if(a){var
c=a[1];return[0,c,lz(a[2],b)]}return b}abs(0);var
ux=ui(1),uy=ui(2),od=[0,function(b){function
a(b){var
a=b;for(;;){if(a){var
c=a[2],d=a[1];try{p$(d)}catch(a){}var
a=c;continue}return 0}}return a(abt(0))}];function
uA(a){var
c=od[1];od[1]=function(d){b(a,0);return b(c,0)};return 0}function
uB(a){return b(od[1],0)}function
qe(c){var
b=0,a=c;for(;;){if(a){var
b=b+1|0,a=a[2];continue}return b}}function
kQ(a){return a?a[1]:O(uC)}function
kt(d,c){var
a=d,b=c;for(;;){if(a){var
e=[0,a[1],b],a=a[2],b=e;continue}return b}}function
n(a){return kt(a,0)}function
lA(c,a){if(a){var
d=a[2],e=b(c,a[1]);return[0,e,lA(c,d)]}return 0}function
i1(d,c){var
a=c;for(;;){if(a){var
e=a[2];b(d,a[1]);var
a=e;continue}return 0}}function
je(e,d,c){var
b=d,a=c;for(;;){if(a){var
f=a[2],b=g(e,b,a[1]),a=f;continue}return b}}function
qf(d,c){var
b=d,a=c;for(;;){if(0===b)return a;if(a){var
b=b-1|0,a=a[2];continue}throw[0,s,uE]}}function
jF(a){if(0<=a)if(!(jC<a))return a;return iR(uF)}function
qg(a){if(40<=a){if(92===a)return uG;var
c=ik<=a?0:1}else
if(32<=a){if(39<=a)return uH;var
c=1}else
if(14<=a)var
c=0;else
switch(a){case
8:return uI;case
9:return uJ;case
10:return uK;case
13:return uL;default:var
c=0}if(c){var
d=iE(1);ii(d,0,a);return d}var
b=iE(4);ii(b,0,92);ii(b,1,48+(a/jl|0)|0);ii(b,2,48+((a/10|0)%10|0)|0);ii(b,3,48+(a%10|0)|0);return b}function
ku(a,c){var
b=iE(a);aba(b,0,a,c);return b}function
qh(c,b,a){if(0<=b)if(0<=a)if(!((P(c)-a|0)<b)){var
d=iE(a);iQ(c,b,d,0,a);return d}return iR(uM)}function
qi(c,b,a){return qh(c,b,a)}function
qj(e,c,d,b,a){if(0<=a)if(0<=c)if(!((P(e)-a|0)<c))if(0<=b)if(!((P(d)-a|0)<b))return iQ(e,c,d,b,a);return iR(uN)}function
jr(e,c,d,b,a){if(0<=a)if(0<=c)if(!((P(e)-a|0)<c))if(0<=b)if(!((P(d)-a|0)<b))return iQ(e,c,d,b,a);return iR(uO)}function
qk(b,a){return ku(b,a)}function
js(c,b,a){return qh(c,b,a)}function
uP(c,b){if(b){var
e=b[1],g=[0,0],f=[0,0],h=b[2];i1(function(a){g[1]++;f[1]=f[1]+P(a)|0;return 0},b);var
d=iE(f[1]+abv(P(c),g[1]-1|0)|0);iQ(e,0,d,0,P(e));var
a=[0,P(e)];i1(function(b){iQ(c,0,d,a[1],P(c));a[1]=a[1]+P(c)|0;iQ(b,0,d,a[1],P(b));a[1]=a[1]+P(b)|0;return 0},h);return d}return uQ}function
ql(g,d){var
c=P(d)-1|0,e=0;if(!(c<0)){var
a=e;for(;;){b(g,jd(d,a));var
f=a+1|0;if(c!==a){var
a=f;continue}break}}return 0}var
me=w,oe=abF(0)[1],mf=abE(0),lB=(4*abD(0)|0)-1|0;iZ(0);function
qm(c,d){if(0===c)return[0];if(0<=c){var
e=mc(c,b(d,0)),f=c-1|0,g=1;if(!(f<1)){var
a=g;for(;;){e[a+1]=b(d,a);var
h=a+1|0;if(f!==a){var
a=h;continue}break}}return e}return iR(uR)}function
of(e,c,d,b,a){if(0<=a)if(0<=c)if(!((e.length-1-a|0)<c))if(0<=b)if(!((d.length-1-a|0)<b))return aa8(e,c,d,b,a);return iR(uT)}function
qn(e,c){var
d=c.length-1-1|0,f=0;if(!(d<0)){var
a=f;for(;;){b(e,c[a+1]);var
g=a+1|0;if(d!==a){var
a=g;continue}break}}return 0}function
kR(a){if(a){var
d=0,c=a,g=a[2],h=a[1];for(;;){if(c){var
d=d+1|0,c=c[2];continue}var
f=mc(d,h),e=1,b=g;for(;;){if(b){var
i=b[2];f[e+1]=b[1];var
e=e+1|0,b=i;continue}return f}}}return[0]}iZ(0);function
lC(h){function
n(a){return a?a[4]:0}function
c(b,e,a){var
c=b?b[4]:0,d=a?a[4]:0,f=d<=c?c+1|0:d+1|0;return[0,b,e,a,f]}function
e(b,f,a){var
g=b?b[4]:0,h=a?a[4]:0;if((h+2|0)<g){if(b){var
d=b[3],k=b[2],i=b[1],m=n(d);if(m<=n(i))return c(i,k,c(d,f,a));if(d){var
o=d[2],p=d[1],q=c(d[3],f,a);return c(c(i,k,p),o,q)}return iR(uU)}return iR(uV)}if((g+2|0)<h){if(a){var
j=a[3],l=a[2],e=a[1],r=n(e);if(r<=n(j))return c(c(b,f,e),l,j);if(e){var
s=e[2],t=e[1],u=c(e[3],l,j);return c(c(b,f,t),s,u)}return iR(uW)}return iR(uX)}var
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
a=b;continue}return a[2]}throw ke}}function
G(c){var
a=c;for(;;){if(a){var
b=a[3],d=a[2];if(b){var
a=b;continue}return d}throw ke}}function
r(a){if(a){var
b=a[1];if(b){var
c=a[3],d=a[2];return e(r(b),d,c)}return a[3]}return iR(uY)}function
j(b,a){if(b){if(a){var
c=r(a);return d(b,o(a),c)}return b}return a}function
i(b,a){if(a){var
c=a[3],e=a[2],f=a[1],l=g(h[1],b,e);if(0===l)return[0,f,1,c];if(0<=l){var
j=i(b,c),m=j[3],n=j[2];return[0,d(f,e,j[1]),n,m]}var
k=i(b,f),o=k[2],p=k[1];return[0,p,o,d(k[3],e,c)]}return uZ}var
z=0;function
H(a){return a?0:1}function
I(e,d){var
a=d;for(;;){if(a){var
f=a[3],i=a[1],b=g(h[1],e,a[2]),c=0===b?1:0;if(c)return c;var
j=0<=b?f:i,a=j;continue}return 0}}function
t(d,b){if(b){var
a=b[3],f=b[2],c=b[1],i=g(h[1],d,f);if(0===i){if(c){if(a){var
l=r(a);return e(c,o(a),l)}return c}return a}if(0<=i){var
j=t(d,a);return a===j?b:e(c,f,j)}var
k=t(d,c);return c===k?b:e(k,f,a)}return 0}function
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
u(c,a){if(a){var
g=a[3],h=a[2],i=a[1],e=u(c,i),k=b(c,h),f=u(c,g);if(k){if(i===e)if(g===f)return a;return d(e,h,f)}return j(e,f)}return 0}function
v(c,a){if(a){var
e=a[2],m=a[3],f=v(c,a[1]),g=f[2],h=f[1],n=b(c,e),i=v(c,m),k=i[2],l=i[1];if(n){var
o=j(g,k);return[0,d(h,e,l),o]}var
p=d(g,e,k);return[0,j(h,l),p]}return u0}function
w(a){if(a){var
b=a[1],c=w(a[3]);return(w(b)+1|0)+c|0}return 0}function
F(d,c){var
b=d,a=c;for(;;){if(a){var
e=a[2],f=a[1],b=[0,e,F(b,a[3])],a=f;continue}return b}}function
K(a){return F(0,a)}function
L(e,d){var
a=d;for(;;){if(a){var
b=a[2],f=a[3],i=a[1],c=g(h[1],e,b);if(0===c)return b;var
j=0<=c?f:i,a=j;continue}throw ke}}return[0,z,H,I,a,f,t,k,l,m,A,J,q,B,C,D,E,u,v,w,K,o,G,o,i,L,function(d){if(d){var
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
n=j>>1,D=qf(n,f),E=t(n,f),i=E,h=t(j-n|0,D),e=0;for(;;){if(i){if(h){var
p=h[2],q=h[1],r=i[2],l=i[1],s=g(b,l,q);if(0===s){var
i=r,h=p,e=[0,l,e];continue}if(0<s){var
i=r,e=[0,l,e];continue}var
h=p,e=[0,q,e];continue}return kt(i,e)}return kt(h,e)}},t=function(j,f){if(2===j){if(f){var
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
o=j>>1,D=qf(o,f),E=m(o,f),i=E,h=m(j-o|0,D),e=0;for(;;){if(i){if(h){var
q=h[2],r=h[1],s=i[2],l=i[1],t=g(b,l,r);if(0===t){var
i=s,h=q,e=[0,l,e];continue}if(0<=t){var
h=q,e=[0,r,e];continue}var
i=s,e=[0,l,e];continue}return kt(i,e)}return kt(h,e)}},q=qe(d),u=2<=q?m(q,d):d,j=function(b,a){if(!(3<b>>>0))switch(b){case
0:return[0,0,a];case
1:if(a)return[0,[0,0,a[1],0,1],a[2]];break;case
2:if(a){var
e=a[2];if(e)return[0,[0,[0,0,a[1],0,1],e[1],0,2],e[2]]}break;default:if(a){var
f=a[2];if(f){var
g=f[2];if(g)return[0,[0,[0,0,a[1],0,1],f[1],[0,0,g[1],0,1],2],g[2]]}}}var
h=b/2|0,i=j(h,a),d=i[2],l=i[1];if(d){var
m=d[1],k=j((b-h|0)-1|0,d[2]),n=k[2];return[0,c(l,m,k[1]),n]}throw[0,s,u1]};return j(qe(u),u)[1]}var
v=p[1];return a(v,a(r,a(o,a(i,f(e)))))}return a(r,a(o,a(i,f(e))))}return a(o,a(i,f(e)))}return a(i,f(e))}return f(e)}return z}]}iZ(0);iZ(0);iZ(0);iZ(0);function
il(a){var
b=1<=a?a:1,c=lB<b?lB:b,d=iE(c);return[0,d,0,c,d]}function
iu(a){return qi(a[1],0,a[2])}function
og(a,c){var
b=[0,a[3]];for(;;){if(b[1]<(a[2]+c|0)){b[1]=2*b[1]|0;continue}if(lB<b[1])if((a[2]+c|0)<=lB)b[1]=lB;else
O(u2);var
d=iE(b[1]);qj(a[1],0,d,0,a[2]);a[1]=d;a[3]=b[1];return 0}}function
iw(a,c){var
b=a[2];if(a[3]<=b)og(a,1);ii(a[1],b,c);a[2]=b+1|0;return 0}function
Q(a,c){var
b=P(c),d=a[2]+b|0;if(a[3]<d)og(a,b);jr(c,0,a[1],a[2],b);a[2]=d;return 0}var
oh=-6;function
qo(a){return[0,0,iE(a)]}function
qp(a,h){var
b=P(a[2]),c=a[1]+h|0,d=b<c?1:0;if(d){var
e=b*2|0,i=uc(e,c)?e:c,f=iE(i);qj(a[2],0,f,0,b);a[2]=f;var
g=0}else
var
g=d;return g}function
lD(a,b){qp(a,1);ly(a[2],a[1],b);a[1]=a[1]+1|0;return 0}function
iG(a,c){var
b=P(c);qp(a,b);jr(c,0,a[2],a[1],b);a[1]=a[1]+b|0;return 0}function
qq(a){return qi(a[2],0,a[1])}function
oi(b,c){var
a=c;for(;;)if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
d=a[1];iG(b,va);var
a=d;continue;case
1:var
e=a[1];iG(b,vb);var
a=e;continue;case
2:var
f=a[1];iG(b,vc);var
a=f;continue;case
3:var
g=a[1];iG(b,vd);var
a=g;continue;case
4:var
h=a[1];iG(b,ve);var
a=h;continue;case
5:var
i=a[1];iG(b,vf);var
a=i;continue;case
6:var
j=a[1];iG(b,vg);var
a=j;continue;case
7:var
k=a[1];iG(b,vh);var
a=k;continue;case
8:var
l=a[2],m=a[1];iG(b,vi);oi(b,m);iG(b,vj);var
a=l;continue;case
9:var
n=a[3],o=a[1];iG(b,vk);oi(b,o);iG(b,vl);var
a=n;continue;case
10:var
p=a[1];iG(b,vm);var
a=p;continue;case
11:var
q=a[1];iG(b,vn);var
a=q;continue;case
12:var
r=a[1];iG(b,vo);var
a=r;continue;case
13:var
s=a[1];iG(b,vp);var
a=s;continue;default:var
t=a[1];iG(b,vq);var
a=t;continue}}function
iv(a){if(typeof
a==="number")return 0;else
switch(a[0]){case
0:return[0,iv(a[1])];case
1:return[1,iv(a[1])];case
2:return[2,iv(a[1])];case
3:return[3,iv(a[1])];case
4:return[4,iv(a[1])];case
5:return[5,iv(a[1])];case
6:return[6,iv(a[1])];case
7:return[7,iv(a[1])];case
8:var
b=a[1];return[8,b,iv(a[2])];case
9:var
c=a[2],d=a[1];return[9,c,d,iv(a[3])];case
10:return[10,iv(a[1])];case
11:return[11,iv(a[1])];case
12:return[12,iv(a[1])];case
13:return[13,iv(a[1])];default:return[14,iv(a[1])]}}function
iH(a){if(typeof
a==="number"){var
s=function(a){return 0},t=function(a){return 0},u=function(a){return 0};return[0,function(a){return 0},u,t,s]}else
switch(a[0]){case
0:var
c=iH(a[1]),v=c[4],w=c[3],x=c[2],y=c[1],z=function(a){b(x,0);return 0};return[0,function(a){b(y,0);return 0},z,w,v];case
1:var
d=iH(a[1]),A=d[4],B=d[3],C=d[2],D=d[1],E=function(a){b(C,0);return 0};return[0,function(a){b(D,0);return 0},E,B,A];case
2:var
e=iH(a[1]),F=e[4],G=e[3],H=e[2],I=e[1],J=function(a){b(H,0);return 0};return[0,function(a){b(I,0);return 0},J,G,F];case
3:var
f=iH(a[1]),K=f[4],L=f[3],M=f[2],N=f[1],O=function(a){b(M,0);return 0};return[0,function(a){b(N,0);return 0},O,L,K];case
4:var
g=iH(a[1]),P=g[4],Q=g[3],R=g[2],S=g[1],T=function(a){b(R,0);return 0};return[0,function(a){b(S,0);return 0},T,Q,P];case
5:var
h=iH(a[1]),U=h[4],V=h[3],W=h[2],X=h[1],Y=function(a){b(W,0);return 0};return[0,function(a){b(X,0);return 0},Y,V,U];case
6:var
i=iH(a[1]),Z=i[4],_=i[3],$=i[2],aa=i[1],ab=function(a){b($,0);return 0};return[0,function(a){b(aa,0);return 0},ab,_,Z];case
7:var
j=iH(a[1]),ac=j[4],ad=j[3],ae=j[2],af=j[1],ag=function(a){b(ae,0);return 0};return[0,function(a){b(af,0);return 0},ag,ad,ac];case
8:var
k=iH(a[2]),ah=k[4],ai=k[3],aj=k[2],ak=k[1],al=function(a){b(aj,0);return 0};return[0,function(a){b(ak,0);return 0},al,ai,ah];case
9:var
am=a[2],an=a[1],l=iH(a[3]),ao=l[4],ap=l[3],aq=l[2],ar=l[1],m=iH(iz(iv(an),am)),as=m[4],at=m[3],au=m[2],av=m[1],aw=function(a){b(as,0);b(ao,0);return 0},ax=function(a){b(ap,0);b(at,0);return 0},ay=function(a){b(au,0);b(aq,0);return 0};return[0,function(a){b(ar,0);b(av,0);return 0},ay,ax,aw];case
10:var
n=iH(a[1]),az=n[4],aA=n[3],aB=n[2],aC=n[1],aD=function(a){b(aB,0);return 0};return[0,function(a){b(aC,0);return 0},aD,aA,az];case
11:var
o=iH(a[1]),aE=o[4],aF=o[3],aG=o[2],aH=o[1],aI=function(a){b(aG,0);return 0};return[0,function(a){b(aH,0);return 0},aI,aF,aE];case
12:var
p=iH(a[1]),aJ=p[4],aK=p[3],aL=p[2],aM=p[1],aN=function(a){b(aL,0);return 0};return[0,function(a){b(aM,0);return 0},aN,aK,aJ];case
13:var
q=iH(a[1]),aO=q[4],aP=q[3],aQ=q[2],aR=q[1],aS=function(a){b(aO,0);return 0},aT=function(a){b(aP,0);return 0},aU=function(a){b(aQ,0);return 0};return[0,function(a){b(aR,0);return 0},aU,aT,aS];default:var
r=iH(a[1]),aV=r[4],aW=r[3],aX=r[2],aY=r[1],aZ=function(a){b(aV,0);return 0},a0=function(a){b(aW,0);return 0},a1=function(a){b(aX,0);return 0};return[0,function(a){b(aY,0);return 0},a1,a0,aZ]}}function
iz(d,c){if(typeof
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
a=6;break;default:throw[0,s,vr]}else
switch(d[0]){case
0:var
u=d[1];if(typeof
c==="number")var
e=1;else
switch(c[0]){case
0:return[0,iz(u,c[1])];case
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
v=d[1];if(typeof
c==="number")var
f=1;else
switch(c[0]){case
1:return[1,iz(v,c[1])];case
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
w=d[1];if(typeof
c==="number")var
g=1;else
switch(c[0]){case
2:return[2,iz(w,c[1])];case
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
3:return[3,iz(x,c[1])];case
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
4:return[4,iz(y,c[1])];case
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
5:return[5,iz(z,c[1])];case
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
6:return[6,iz(A,c[1])];case
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
7:return[7,iz(B,c[1])];case
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
E=c[1],F=iz(C,c[2]);return[8,iz(D,E),F];case
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
n=1}if(n)throw[0,s,vA];break;case
9:var
G=d[3],H=d[2],I=d[1];if(typeof
c==="number")var
m=1;else
switch(c[0]){case
8:var
a=5,m=0;break;case
9:var
J=c[3],K=c[2],L=c[1],t=iH(iz(iv(H),L)),M=t[4];b(t[2],0);b(M,0);return[9,I,K,iz(G,J)];case
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
m=1}if(m)throw[0,s,vB];break;case
10:var
N=d[1];if(typeof
c!=="number"&&10===c[0])return[10,iz(N,c[1])];throw[0,s,vC];case
11:var
O=d[1];if(typeof
c==="number")var
r=1;else
switch(c[0]){case
10:var
a=0,r=0;break;case
11:return[11,iz(O,c[1])];default:var
r=1}if(r)throw[0,s,vD];break;case
12:var
P=d[1];if(typeof
c==="number")var
q=1;else
switch(c[0]){case
10:var
a=0,q=0;break;case
11:var
a=1,q=0;break;case
12:return[12,iz(P,c[1])];default:var
q=1}if(q)throw[0,s,vE];break;case
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
13:return[13,iz(Q,c[1])];default:var
p=1}if(p)throw[0,s,vF];break;default:var
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
14:return[14,iz(R,c[1])];default:var
o=1}if(o)throw[0,s,vG]}switch(a){case
0:throw[0,s,vu];case
1:throw[0,s,vv];case
2:throw[0,s,vw];case
3:throw[0,s,vx];case
4:throw[0,s,vy];case
5:throw[0,s,vs];case
6:throw[0,s,vt];default:throw[0,s,vz]}}var
iI=[is,vH,iZ(0)];function
oj(b,a){if(typeof
b==="number")return[0,0,a];else{if(0===b[0])return[0,[0,b[1],b[2]],a];if(typeof
a!=="number"&&2===a[0])return[0,[1,b[1]],a[1]];throw iI}}function
lE(e,b,d){var
a=oj(e,d);if(typeof
b==="number"){if(0===b)return[0,a[1],0,a[2]];var
c=a[2];if(typeof
c!=="number"&&2===c[0])return[0,a[1],1,c[1]];throw iI}return[0,a[1],[0,b[1]],a[2]]}function
i2(d,c,b){var
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
aa=b[2],t=oj(b[1],a),e=t[2],ab=t[1];if(typeof
e!=="number"&&1===e[0]){var
u=z(aa,e[1]);return[0,[2,ab,u[1]],u[2]]}throw iI;case
3:var
ac=b[2],v=oj(b[1],a),f=v[2],ad=v[1];if(typeof
f!=="number"&&1===f[0]){var
w=z(ac,f[1]);return[0,[3,ad,w[1]],w[2]]}throw iI;case
4:var
ae=b[4],af=b[1],g=lE(b[2],b[3],a),h=g[3],ag=g[2],ah=g[1];if(typeof
h!=="number"&&2===h[0]){var
x=z(ae,h[1]);return[0,[4,af,ah,ag,x[1]],x[2]]}throw iI;case
5:var
ai=b[4],aj=b[1],i=lE(b[2],b[3],a),j=i[3],ak=i[2],al=i[1];if(typeof
j!=="number"&&3===j[0]){var
y=z(ai,j[1]);return[0,[5,aj,al,ak,y[1]],y[2]]}throw iI;case
6:var
am=b[4],an=b[1],k=lE(b[2],b[3],a),l=k[3],ao=k[2],ap=k[1];if(typeof
l!=="number"&&4===l[0]){var
A=z(am,l[1]);return[0,[6,an,ap,ao,A[1]],A[2]]}throw iI;case
7:var
aq=b[4],ar=b[1],m=lE(b[2],b[3],a),n=m[3],as=m[2],at=m[1];if(typeof
n!=="number"&&5===n[0]){var
B=z(aq,n[1]);return[0,[7,ar,at,as,B[1]],B[2]]}throw iI;case
8:var
au=b[4],av=b[1],o=lE(b[2],b[3],a),p=o[3],aw=o[2],ax=o[1];if(typeof
p!=="number"&&6===p[0]){var
C=z(au,p[1]);return[0,[8,av,ax,aw,C[1]],C[2]]}throw iI;case
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
I=a[1],aA=a[2],aB=b[3],aC=b[1];if(lw([0,b[2]],[0,I]))throw iI;var
J=z(aB,aA);return[0,[13,aC,I,J[1]],J[2]]}break;case
14:if(typeof
a!=="number"&&9===a[0]){var
K=a[1],aD=a[3],aE=b[3],aF=b[2],aG=b[1],aH=[0,H(K)];if(lw([0,H(aF)],aH))throw iI;var
L=z(aE,H(aD));return[0,[14,aG,K,L[1]],L[2]]}break;case
15:if(typeof
a!=="number"&&10===a[0]){var
M=z(b[1],a[1]);return[0,[15,M[1]],M[2]]}break;case
16:if(typeof
a!=="number"&&11===a[0]){var
N=z(b[1],a[1]);return[0,[16,N[1]],N[2]]}break;case
17:var
aI=b[1],O=z(b[2],a);return[0,[17,aI,O[1]],O[2]];case
18:var
P=b[2],q=b[1];if(0===q[0]){var
T=q[1],aM=T[2],U=z(T[1],a),aN=U[1],V=z(P,U[2]);return[0,[18,[0,[0,aN,aM]],V[1]],V[2]]}var
W=q[1],aO=W[2],X=z(W[1],a),aP=X[1],Y=z(P,X[2]);return[0,[18,[1,[0,aP,aO]],Y[1]],Y[2]];case
19:if(typeof
a!=="number"&&13===a[0]){var
Q=z(b[1],a[1]);return[0,[19,Q[1]],Q[2]]}break;case
20:if(typeof
a!=="number"&&1===a[0]){var
aJ=b[2],aK=b[1],R=z(b[3],a[1]);return[0,[20,aK,aJ,R[1]],R[2]]}break;case
21:if(typeof
a!=="number"&&2===a[0]){var
aL=b[1],S=z(b[2],a[1]);return[0,[21,aL,S[1]],S[2]]}break;case
23:var
d=b[2],c=b[1];if(typeof
c==="number")switch(c){case
0:return i2(c,d,a);case
1:return i2(c,d,a);case
2:return i2(c,d,a);case
3:if(typeof
a!=="number"&&14===a[0]){var
Z=z(d,a[1]);return[0,[23,3,Z[1]],Z[2]]}throw iI;default:return i2(c,d,a)}else
switch(c[0]){case
0:return i2(c,d,a);case
1:return i2(c,d,a);case
2:return i2(c,d,a);case
3:return i2(c,d,a);case
4:return i2(c,d,a);case
5:return i2(c,d,a);case
6:return i2(c,d,a);case
7:return i2([7,c[1],c[2]],d,a);case
8:var
aQ=c[1],_=iS(c[2],d,a),$=_[2];return[0,[23,[8,aQ,_[1]],$[1]],$[2]];case
9:return i2(c,d,a);default:return i2(c,d,a)}}throw iI}function
iS(c,d,a){if(typeof
c==="number")return[0,0,z(d,a)];else
switch(c[0]){case
0:if(typeof
a!=="number"&&0===a[0]){var
g=iS(c[1],d,a[1]);return[0,[0,g[1]],g[2]]}break;case
1:if(typeof
a!=="number"&&1===a[0]){var
h=iS(c[1],d,a[1]);return[0,[1,h[1]],h[2]]}break;case
2:if(typeof
a!=="number"&&2===a[0]){var
i=iS(c[1],d,a[1]);return[0,[2,i[1]],i[2]]}break;case
3:if(typeof
a!=="number"&&3===a[0]){var
j=iS(c[1],d,a[1]);return[0,[3,j[1]],j[2]]}break;case
4:if(typeof
a!=="number"&&4===a[0]){var
k=iS(c[1],d,a[1]);return[0,[4,k[1]],k[2]]}break;case
5:if(typeof
a!=="number"&&5===a[0]){var
l=iS(c[1],d,a[1]);return[0,[5,l[1]],l[2]]}break;case
6:if(typeof
a!=="number"&&6===a[0]){var
m=iS(c[1],d,a[1]);return[0,[6,m[1]],m[2]]}break;case
7:if(typeof
a!=="number"&&7===a[0]){var
n=iS(c[1],d,a[1]);return[0,[7,n[1]],n[2]]}break;case
8:if(typeof
a!=="number"&&8===a[0]){var
o=a[1],w=a[2],x=c[2];if(lw([0,c[1]],[0,o]))throw iI;var
p=iS(x,d,w);return[0,[8,o,p[1]],p[2]]}break;case
9:if(typeof
a!=="number"&&9===a[0]){var
e=a[2],f=a[1],y=a[3],A=c[3],B=c[2],C=c[1],D=[0,H(f)];if(lw([0,H(C)],D))throw iI;var
E=[0,H(e)];if(lw([0,H(B)],E))throw iI;var
q=iH(iz(iv(f),e)),F=q[4];b(q[2],0);b(F,0);var
r=iS(H(A),d,y),G=r[2];return[0,[9,f,e,iv(r[1])],G]}break;case
10:if(typeof
a!=="number"&&10===a[0]){var
s=iS(c[1],d,a[1]);return[0,[10,s[1]],s[2]]}break;case
11:if(typeof
a!=="number"&&11===a[0]){var
t=iS(c[1],d,a[1]);return[0,[11,t[1]],t[2]]}break;case
13:if(typeof
a!=="number"&&13===a[0]){var
u=iS(c[1],d,a[1]);return[0,[13,u[1]],u[2]]}break;case
14:if(typeof
a!=="number"&&14===a[0]){var
v=iS(c[1],d,a[1]);return[0,[14,v[1]],v[2]]}break}throw iI}function
i3(k,i,a){var
b=P(a),j=0<=i?k:0,d=oc(i);if(d<=b)return a;var
l=2===j?48:32,c=ku(d,l);switch(j){case
0:jr(a,0,c,0,b);break;case
1:jr(a,0,c,d-b|0,b);break;default:if(0<b){if(43===G(a,0))var
e=1;else
if(45===G(a,0))var
e=1;else
if(32===G(a,0))var
e=1;else
var
g=0,e=0;if(e){ly(c,0,G(a,0));jr(a,1,c,(d-b|0)+1|0,b-1|0);var
g=1}}else
var
g=0;if(!g){if(1<b)if(48===G(a,0)){if(kn===G(a,1))var
h=1;else
if(88===G(a,1))var
h=1;else
var
f=0,h=0;if(h){ly(c,1,G(a,1));jr(a,2,c,(d-b|0)+2|0,b-2|0);var
f=1}}else
var
f=0;else
var
f=0;if(!f)jr(a,0,c,d-b|0,b)}}return c}function
kS(j,b){var
c=oc(j),a=P(b),d=G(b,0);if(58<=d)var
e=71<=d?5<(d+s$|0)>>>0?1:0:65<=d?0:1;else{if(32===d)var
f=1;else
if(43<=d)switch(d+m8|0){case
5:if(a<(c+2|0))if(1<a){var
k=kn===G(b,1)?0:88===G(b,1)?0:1;if(!k){var
h=ku(c+2|0,48);ly(h,1,G(b,1));jr(b,2,h,(c-a|0)+4|0,a-2|0);return h}}var
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
g=ku(c+1|0,48);ly(g,0,d);jr(b,1,g,(c-a|0)+2|0,a-1|0);return g}var
e=1}}if(!e)if(a<c){var
i=ku(c,48);jr(b,0,i,c-a|0,a);return i}return b}function
vI(d){var
j=0;for(;;){if(P(d)<=j)var
w=0;else{var
g=jd(d,j);if(32<=g){var
q=g+r5|0;if(58<q>>>0)if(93<=q)var
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
f=jd(d,i);if(32<=f){var
o=f+r5|0;if(58<o>>>0)if(93<=o)var
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
s=P(d),t=iE(s);iQ(d,0,t,0,s);var
k=t}else{var
b=iE(a[1]);a[1]=0;var
v=P(d)-1|0,A=0;if(!(v<0)){var
h=A;for(;;){var
c=jd(d,h);if(35<=c)var
e=92===c?1:ik<=c?0:2;else
if(32<=c)var
e=34<=c?1:2;else
if(14<=c)var
e=0;else
switch(c){case
8:ii(b,a[1],92);a[1]++;ii(b,a[1],98);var
e=3;break;case
9:ii(b,a[1],92);a[1]++;ii(b,a[1],m9);var
e=3;break;case
10:ii(b,a[1],92);a[1]++;ii(b,a[1],lZ);var
e=3;break;case
13:ii(b,a[1],92);a[1]++;ii(b,a[1],l2);var
e=3;break;default:var
e=0}switch(e){case
0:ii(b,a[1],92);a[1]++;ii(b,a[1],48+(c/jl|0)|0);a[1]++;ii(b,a[1],48+((c/10|0)%10|0)|0);a[1]++;ii(b,a[1],48+(c%10|0)|0);break;case
1:ii(b,a[1],92);a[1]++;ii(b,a[1],c);break;case
2:ii(b,a[1],c);break}a[1]++;var
B=h+1|0;if(v!==h){var
h=B;continue}break}}var
k=b}}else
var
k=d;var
x=P(k),y=ku(x+2|0,34);iQ(k,0,y,1,x);return y}}function
wy(c,b){switch(c){case
0:var
a=vJ;break;case
1:var
a=vK;break;case
2:var
a=vL;break;case
3:var
a=vM;break;case
4:var
a=vN;break;case
5:var
a=vO;break;case
6:var
a=vP;break;case
7:var
a=vQ;break;case
8:var
a=vR;break;case
9:var
a=vS;break;case
10:var
a=vT;break;case
11:var
a=vU;break;default:var
a=vV}return n6(a,b)}function
wz(c,b){switch(c){case
0:var
a=v9;break;case
1:var
a=v_;break;case
2:var
a=v$;break;case
3:var
a=wa;break;case
4:var
a=wb;break;case
5:var
a=wc;break;case
6:var
a=wd;break;case
7:var
a=we;break;case
8:var
a=wf;break;case
9:var
a=wg;break;case
10:var
a=wh;break;case
11:var
a=wi;break;default:var
a=wj}return n6(a,b)}function
wA(c,b){switch(c){case
0:var
a=wk;break;case
1:var
a=wl;break;case
2:var
a=wm;break;case
3:var
a=wn;break;case
4:var
a=wo;break;case
5:var
a=wp;break;case
6:var
a=wq;break;case
7:var
a=wr;break;case
8:var
a=ws;break;case
9:var
a=wt;break;case
10:var
a=wu;break;case
11:var
a=wv;break;default:var
a=ww}return n6(a,b)}function
wB(c,b){switch(c){case
0:var
a=vW;break;case
1:var
a=vX;break;case
2:var
a=vY;break;case
3:var
a=vZ;break;case
4:var
a=v0;break;case
5:var
a=v1;break;case
6:var
a=v2;break;case
7:var
a=v3;break;case
8:var
a=v4;break;case
9:var
a=v5;break;case
10:var
a=v6;break;case
11:var
a=v7;break;default:var
a=v8}return abf(a,b)}function
j2(c,u,h){if(16<=c){if(17<=c)switch(c+tE|0){case
2:var
k=0;break;case
0:case
3:var
n=43,k=1;break;default:var
n=32,k=1}else
var
k=0;if(!k)var
n=45;var
i=abc(h,u,n);if(19<=c){var
l=P(i);if(0===l)return i;var
r=iE(l),s=l-1|0,y=0;if(!(s<0)){var
e=y;for(;;){var
g=jd(i,e);if(97<=g)if(iJ<g)var
q=0;else
var
t=g-32|0,q=1;else
var
q=0;if(!q)var
t=g;ii(r,e,t);var
z=e+1|0;if(s!==e){var
e=z;continue}break}}return r}return i}if(15===c)var
v=wx;else{var
A=oc(u);switch(c){case
15:var
b=70;break;case
0:case
1:case
2:var
b=la;break;case
3:case
4:case
5:var
b=it;break;case
6:case
7:case
8:var
b=69;break;case
9:case
10:case
11:var
b=lr;break;case
12:case
13:case
14:var
b=71;break;case
16:case
17:case
18:var
b=l0;break;default:var
b=72}var
d=qo(16);lD(d,37);switch(c){case
1:case
4:case
7:case
10:case
13:case
17:case
20:lD(d,43);break;case
2:case
5:case
8:case
11:case
14:case
18:case
21:lD(d,32);break}lD(d,46);iG(d,a(o+A));lD(d,b);var
v=qq(d)}var
f=ub(v,h);if(15===c){var
w=aa_(h),B=P(f);if(3===w)return h<0?wC:wD;if(4<=w)return wE;var
j=0;for(;;){if(j===B)var
x=0;else{var
p=G(f,j)+l7|0,C=23<p>>>0?55===p?1:0:21<(p-1|0)>>>0?1:0;if(!C){var
j=j+1|0;continue}var
x=1}return x?f:m(f,wF)}}return f}function
mg(h,f,e,d,i,c,b,a){if(typeof
i==="number"){if(typeof
c==="number")return 0===c?function(c){return x(h,f,[4,e,g(b,a,c)],d)}:function(i,c){return x(h,f,[4,e,kS(i,g(b,a,c))],d)};var
m=c[1];return function(c){return x(h,f,[4,e,kS(m,g(b,a,c))],d)}}else{if(0===i[0]){var
j=i[2],k=i[1];if(typeof
c==="number")return 0===c?function(c){return x(h,f,[4,e,i3(k,j,g(b,a,c))],d)}:function(i,c){return x(h,f,[4,e,i3(k,j,kS(i,g(b,a,c)))],d)};var
n=c[1];return function(c){return x(h,f,[4,e,i3(k,j,kS(n,g(b,a,c)))],d)}}var
l=i[1];if(typeof
c==="number")return 0===c?function(i,c){return x(h,f,[4,e,i3(l,i,g(b,a,c))],d)}:function(j,i,c){return x(h,f,[4,e,i3(l,j,kS(i,g(b,a,c)))],d)};var
o=c[1];return function(i,c){return x(h,f,[4,e,i3(l,i,kS(o,g(b,a,c)))],d)}}}function
qr(g,f,e,d,a,c){if(typeof
a==="number")return function(a){return x(g,f,[4,e,b(c,a)],d)};else{if(0===a[0]){var
h=a[2],i=a[1];return function(a){return x(g,f,[4,e,i3(i,h,b(c,a))],d)}}var
j=a[1];return function(h,a){return x(g,f,[4,e,i3(j,h,b(c,a))],d)}}}function
lX(f,D,e,C,B){var
c=D,a=C,d=B;for(;;)if(typeof
d==="number")return g(c,e,a);else
switch(d[0]){case
0:var
F=d[1];return function(b){return x(c,e,[5,a,b],F)};case
1:var
G=d[1];return function(g){var
b=qg(g),d=P(b),f=ku(d+2|0,39);iQ(b,0,f,1,d);return x(c,e,[4,a,f],G)};case
2:var
I=d[2],J=d[1];return qr(c,e,a,I,J,function(a){return a});case
3:return qr(c,e,a,d[2],d[1],vI);case
4:return mg(c,e,a,d[4],d[2],d[3],wy,d[1]);case
5:return mg(c,e,a,d[4],d[2],d[3],wz,d[1]);case
6:return mg(c,e,a,d[4],d[2],d[3],wA,d[1]);case
7:return mg(c,e,a,d[4],d[2],d[3],wB,d[1]);case
8:var
i=d[4],j=d[3],l=d[2],k=d[1];if(typeof
l==="number"){if(typeof
j==="number")return 0===j?function(b){return x(c,e,[4,a,j2(k,oh,b)],i)}:function(d,b){return x(c,e,[4,a,j2(k,d,b)],i)};var
aa=j[1];return function(b){return x(c,e,[4,a,j2(k,aa,b)],i)}}else{if(0===l[0]){var
o=l[2],p=l[1];if(typeof
j==="number")return 0===j?function(b){return x(c,e,[4,a,i3(p,o,j2(k,oh,b))],i)}:function(d,b){return x(c,e,[4,a,i3(p,o,j2(k,d,b))],i)};var
ab=j[1];return function(b){return x(c,e,[4,a,i3(p,o,j2(k,ab,b))],i)}}var
q=l[1];if(typeof
j==="number")return 0===j?function(d,b){return x(c,e,[4,a,i3(q,d,j2(k,oh,b))],i)}:function(f,d,b){return x(c,e,[4,a,i3(q,f,j2(k,d,b))],i)};var
ac=j[1];return function(d,b){return x(c,e,[4,a,i3(q,d,j2(k,ac,b))],i)}}case
9:var
K=d[1];return function(b){var
d=b?ut:uu;return x(c,e,[4,a,d],K)};case
10:var
a=[7,a],d=d[1];continue;case
11:var
a=[2,a,d[1]],d=d[2];continue;case
12:var
a=[3,a,d[1]],d=d[2];continue;case
13:var
L=d[3],M=d[2],r=qo(16);oi(r,M);var
A=qq(r);return function(b){return x(c,e,[4,a,A],L)};case
14:var
N=d[3],O=d[2];return function(d){var
f=d[1],b=z(f,H(iv(O)));if(typeof
b[2]==="number")return x(c,e,a,E(b[1],N));throw iI};case
15:var
Q=d[1];return function(d,b){return x(c,e,[6,a,function(a){return g(d,a,b)}],Q)};case
16:var
R=d[1];return function(b){return x(c,e,[6,a,b],R)};case
17:var
a=[0,a,d[1]],d=d[2];continue;case
18:var
n=d[1];if(0===n[0]){var
S=d[2],T=n[1][1],U=0,c=function(c,d,e){return function(b,a){return x(d,b,[1,c,[0,a]],e)}}(a,c,S),a=U,d=T;continue}var
V=d[2],W=n[1][1],X=0,c=function(c,d,e){return function(b,a){return x(d,b,[1,c,[1,a]],e)}}(a,c,V),a=X,d=W;continue;case
19:throw[0,s,wH];case
20:var
Y=d[3],Z=[8,a,wI];return function(a){return x(c,e,Z,Y)};case
21:var
_=d[2];return function(b){return x(c,e,[4,a,n6(wJ,b)],_)};case
22:var
$=d[1];return function(b){return x(c,e,[5,a,b],$)};case
23:var
h=d[2],m=d[1];if(typeof
m==="number")switch(m){case
0:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
1:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
2:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);case
3:throw[0,s,wK];default:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h])}else
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
w=m[2];return f<50?o1(f+1|0,c,e,a,w,h):ir(o1,[0,c,e,a,w,h]);case
9:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h]);default:return f<50?y(f+1|0,c,e,a,h):ir(y,[0,c,e,a,h])}default:var
t=d[3],u=d[1],v=b(d[2],0);return f<50?o0(f+1|0,c,e,a,t,u,v):ir(o0,[0,c,e,a,t,u,v])}}function
o1(f,e,d,c,a,b){if(typeof
a==="number")return f<50?y(f+1|0,e,d,c,b):ir(y,[0,e,d,c,b]);else
switch(a[0]){case
0:var
g=a[1];return function(a){return i8(e,d,c,g,b)};case
1:var
h=a[1];return function(a){return i8(e,d,c,h,b)};case
2:var
i=a[1];return function(a){return i8(e,d,c,i,b)};case
3:var
j=a[1];return function(a){return i8(e,d,c,j,b)};case
4:var
k=a[1];return function(a){return i8(e,d,c,k,b)};case
5:var
l=a[1];return function(a){return i8(e,d,c,l,b)};case
6:var
m=a[1];return function(a){return i8(e,d,c,m,b)};case
7:var
n=a[1];return function(a){return i8(e,d,c,n,b)};case
8:var
o=a[2];return function(a){return i8(e,d,c,o,b)};case
9:var
p=a[3],q=a[2],r=iz(iv(a[1]),q);return function(a){return i8(e,d,c,iO(r,p),b)};case
10:var
t=a[1];return function(f,a){return i8(e,d,c,t,b)};case
11:var
u=a[1];return function(a){return i8(e,d,c,u,b)};case
12:var
v=a[1];return function(a){return i8(e,d,c,v,b)};case
13:throw[0,s,wL];default:throw[0,s,wM]}}function
y(e,c,b,f,a){var
d=[8,f,wN];return e<50?lX(e+1|0,c,b,d,a):ir(lX,[0,c,b,d,a])}function
o0(i,d,c,g,a,f,e){if(f){var
j=f[1];return function(f){return wG(d,c,g,a,j,b(e,f))}}var
h=[4,g,e];return i<50?lX(i+1|0,d,c,h,a):ir(lX,[0,d,c,h,a])}function
x(a,b,c,d){return kd(lX(0,a,b,c,d))}function
i8(a,b,c,d,e){return kd(o1(0,a,b,c,d,e))}function
wG(a,b,c,d,e,f){return kd(o0(0,a,b,c,d,e,f))}function
kf(c,h){var
a=h;for(;;)if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
e=a[2],i=a[1];if(typeof
e==="number")switch(e){case
0:var
d=u4;break;case
1:var
d=u5;break;case
2:var
d=u6;break;case
3:var
d=u7;break;case
4:var
d=u8;break;case
5:var
d=u9;break;default:var
d=u_}else
switch(e[0]){case
0:var
d=e[1];break;case
1:var
d=e[1];break;default:var
d=m(u$,qk(1,e[1]))}kf(c,i);return Q(c,d);case
1:var
f=a[2],g=a[1];if(0===f[0]){var
j=f[1];kf(c,g);Q(c,wO);var
a=j;continue}var
k=f[1];kf(c,g);Q(c,wP);var
a=k;continue;case
6:var
o=a[2];kf(c,a[1]);return Q(c,b(o,0));case
7:var
a=a[1];continue;case
8:var
p=a[2];kf(c,a[1]);return iR(p);case
2:case
4:var
l=a[2];kf(c,a[1]);return Q(c,l);default:var
n=a[2];kf(c,a[1]);return iw(c,n)}}function
jG(b){var
a=b[1];return x(function(c,b){var
a=il(64);kf(a,b);return iu(a)},0,0,a)}var
ok=[0,0];function
om(h,g){var
a=h[g+1];if(abw(a)){if(n_(a)===pM)return b(jG(wQ),a);if(n_(a)===tI){var
d=ub(uw,a),c=0,f=P(d);for(;;){if(f<=c)return m(d,uv);var
e=G(d,c),i=48<=e?58<=e?0:1:45===e?1:0;if(i){var
c=c+1|0;continue}return d}}return wR}return b(jG(wS),a)}function
qw(b,a){if(b.length-1<=a)return wT;var
c=qw(b,a+1|0),d=om(b,a);return g(jG(wU),d,c)}function
wV(a){var
c=a.length-1;if(2<c>>>0){var
d=qw(a,2),e=om(a,1);return g(jG(wW),e,d)}switch(c){case
0:return wX;case
1:return wY;default:var
f=om(a,1);return b(jG(wZ),f)}}function
qx(a){ok[1]=[0,a,ok[1]];return 0}function
qy(d,a){var
b=[0,[0,d,0]],c=a[1];if(c){var
e=c[1];a[1]=b;e[2]=b;return 0}a[1]=b;a[2]=b;return 0}var
on=[is,w5,iZ(0)];function
qz(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1];a[2]=d;if(0===d)a[1]=0;return e}throw on}function
oo(a,b){a[13]=a[13]+b[3]|0;return qy(b,a[27])}var
qA=1000000010;function
op(b,a){return p(b[17],a,0,P(a))}function
oq(a){return b(a[19],0)}function
qB(c,a){return b(c[20],a)}function
kv(a,e,d){oq(a);a[11]=1;var
b=(a[6]-d|0)+e|0,c=a[8],f=abp(c,b)?c:b;a[10]=f;a[9]=a[6]-a[10]|0;return qB(a,a[10])}function
qC(b,a){return kv(b,0,a)}function
kT(a,b){a[9]=a[9]-b|0;return qB(a,b)}function
w6(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1],f=a[9]<d?1:0;if(f){if(0!==e)return 5<=e?0:qC(a,d);var
g=0}else
var
g=f;return g}return oq(a)}function
w7(a){var
b=qz(a[27]),c=b[1];a[12]=a[12]-b[3]|0;a[9]=a[9]+c|0;return 0}function
w8(a,g,c){if(typeof
c==="number")switch(c){case
0:var
k=a[3];if(k){var
l=k[1][1],m=function(b,a){if(a){var
c=a[1],d=a[2];return abq(b,c)?[0,b,a]:[0,c,m(b,d)]}return[0,b,0]};l[1]=m(a[6]-a[9]|0,l[1]);return 0}return 0;case
1:var
n=a[2];return n?(a[2]=n[2],0):0;case
2:var
o=a[3];return o?(a[3]=o[2],0):0;case
3:var
p=a[2];return p?qC(a,p[1][2]):oq(a);case
4:var
q=a[10]!==(a[6]-a[9]|0)?1:0;return q?w7(a):q;default:var
h=a[5];if(h){var
A=h[2];op(a,b(a[24],h[1]));a[5]=A;return 0}return 0}else
switch(c[0]){case
0:var
B=c[1];a[9]=a[9]-g|0;op(a,B);a[11]=0;return 0;case
1:var
d=c[2],f=c[1],r=a[2];if(r){var
s=r[1],e=s[2];switch(s[1]){case
0:return kT(a,f);case
1:return kv(a,d,e);case
2:return kv(a,d,e);case
3:return a[9]<g?kv(a,d,e):kT(a,f);case
4:return a[11]?kT(a,f):a[9]<g?kv(a,d,e):((a[6]-e|0)+d|0)<a[10]?kv(a,d,e):kT(a,f);default:return kT(a,f)}}return 0;case
2:var
i=a[6]-a[9]|0,t=a[3],C=c[2],D=c[1];if(t){var
u=t[1][1],E=function(d,c){var
a=c;for(;;){if(a){var
b=a[1],e=a[2];if(uc(b,d))return b;var
a=e;continue}throw ke}},v=u[1];if(v){var
F=v[1];try{var
G=E(i,u[1]),w=G}catch(a){a=iK(a);if(a!==ke)throw a;var
w=F}var
j=w}else
var
j=i;var
x=j-i|0;return 0<=x?kT(a,x+D|0):kv(a,j+C|0,a[6])}return 0;case
3:var
y=c[2],H=c[1];if(a[8]<(a[6]-a[9]|0))w6(a);var
I=a[9]-H|0,J=1===y?1:a[9]<g?y:5;a[2]=[0,[0,J,I],a[2]];return 0;case
4:a[3]=[0,c[1],a[3]];return 0;default:var
z=c[1];op(a,b(a[23],z));a[5]=[0,z,a[5]];return 0}}function
w9(a){for(;;){var
d=a[27][2];if(d){var
b=d[1][1],c=b[1],e=c<0?1:0,g=b[3],h=b[2],i=e?(a[13]-a[12]|0)<a[9]?1:0:e,f=1-i;if(f){qz(a[27]);var
j=0<=c?c:qA;w8(a,j,h);a[12]=g+a[12]|0;continue}return f}throw on}}function
qD(a){try{var
b=w9(a);return b}catch(a){a=iK(a);if(a===on)return 0;throw a}}var
qE=[0,[0,-1,[0,-1,w_,0]],0];function
qF(a){a[1]=qE;return 0}function
qG(a,c){var
d=a[1];if(d){var
e=d[1],b=e[2],f=b[1],g=d[2],h=b[2];if(e[1]<a[12])return qF(a);if(typeof
h!=="number")switch(h[0]){case
3:var
i=1-c,k=i?(b[1]=a[13]+f|0,a[1]=g,0):i;return k;case
1:case
2:var
j=c?(b[1]=a[13]+f|0,a[1]=g,0):c;return j}return 0}return 0}var
qH=qk(80,32);function
xa(a){return m(xc,m(a,xb))}function
xd(a){return m(xf,m(a,xe))}function
xg(a){return 0}function
xh(a){return 0}function
qI(e,d){function
f(a){return 0}var
b=[0,0,0],c=[0,-1,xi,0];function
g(a){return 0}qy(c,b);var
a=[0,[0,[0,1,c],qE],0,0,0,0,78,10,68,78,0,1,1,1,1,us,xj,e,d,g,f,0,0,xa,xd,xg,xh,b];a[19]=function(b){return p(a[17],w$,0,1)};a[20]=function(d){var
b=d;for(;;){var
c=0<b?1:0;if(c){if(80<b){p(a[17],qH,0,80);var
b=b+nH|0;continue}return p(a[17],qH,0,b)}return c}};return a}function
qJ(c){function
a(a){return p$(c)}return qI(function(d,a,b){if(0<=a)if(0<=b)if(!((P(d)-b|0)<a))return abu(c,d,a,b);return iR(uz)},a)}function
xk(a){function
b(a){return 0}return qI(function(g,c,b){var
d=c<0?1:0;if(d)var
e=d;else
var
h=b<0?1:0,e=h||(P(g)<(c+b|0)?1:0);if(e)iR(u3);var
f=a[2]+b|0;if(a[3]<f)og(a,b);jr(g,c,a[1],a[2],b);a[2]=f;return 0},b)}var
xl=kI,xm=function(a){return il(xl)}(0),u=qJ(ux);qJ(uy);xk(xm);uA(function(h){for(;;){if(1<u[14]){if(1<u[14]){if(u[14]<u[15]){oo(u,[0,0,1,0]);qG(u,1);qG(u,0)}u[14]=u[14]-1|0}continue}u[13]=qA;qD(u);u[12]=1;u[13]=1;var
a=u[27];a[1]=0;a[2]=0;qF(u);u[2]=0;u[3]=0;u[4]=0;u[5]=0;u[10]=0;u[14]=0;u[9]=u[6];u[14]=u[14]+1|0;var
f=3,g=0;if(u[14]<u[15]){var
d=[0,-u[13]|0,[3,g,f],0];oo(u,d);u[1]=[0,[0,u[13],d],u[1]]}else
if(u[14]===u[15]){var
e=u[16],c=P(e);oo(u,[0,c,[0,e],c]);qD(u)}return b(u[18],0)}});var
i_=t$,i9=aa6;function
xn(b,a){var
c=n_(a)===is?a:a[1];return abB(b,c)}try{ur(aa5)}catch(a){a=iK(a);if(a!==ke)throw a}try{ur(aa4)}catch(a){a=iK(a);if(a!==ke)throw a}if(C(oe,xo))if(C(oe,xp))if(C(oe,xq))throw[0,s,xr];iZ(0);var
jH=[is,xs,iZ(0)],qK=-1,xt=kI,xu=0,xv=0,xw=0,xx=0,xy=0;function
xz(c,b,a){throw[0,s,xA]}function
qL(a){var
b=a.length-1,c=1;return[0,xz,qm(b,function(b){return iN(a,b)[b+1]}),b,xy,xx,xw,xv,xu,c]}function
c(a){if(a[5]===a[3])if(a[9])var
d=qK;else{if(a[2].length-1<(a[3]+kI|0)){var
b=a[6],c=a[3]-b|0;if((c+kI|0)<=a[2].length-1)of(a[2],b,a[2],0,c);else{var
g=mc((a[2].length-1+kI|0)*2|0,0);of(a[2],b,g,0,c);a[2]=g}a[3]=c;a[4]=a[4]+b|0;a[5]=a[5]-b|0;a[7]=a[7]-b|0;a[6]=0}var
e=p(a[1],a[2],a[5],xt);if(0===e){var
f=a[3];iN(a[2],f)[f+1]=qK;a[3]=a[3]+1|0}else
a[3]=a[3]+e|0;var
h=a[5],d=iN(a[2],h)[h+1]}else
var
i=a[5],d=iN(a[2],i)[i+1];if(d===-1)a[9]=1;else
a[5]=a[5]+1|0;return d}function
io(a){a[6]=a[5];a[7]=a[5];a[8]=-1;return 0}function
B(a,b){a[7]=a[5];a[8]=b;return 0}function
d(a){a[5]=a[7];return a[8]}function
mh(a){a[5]=a[6];return 0}function
mi(a){return a[6]+a[4]|0}function
mj(a){return a[5]+a[4]|0}function
or(a){return a[5]-a[6]|0}function
qM(a){var
b=a[5]-a[6]|0,c=a[6],d=a[2];if(0<=c)if(0<=b)if(!((d.length-1-b|0)<c))return p6(d,c,b);return iR(uS)}var
kU=mc(t1,-1),lW=0;for(;;){iN(kU,lW)[lW+1]=1;var
aa3=lW+1|0;if(ik!==lW){var
lW=aa3;continue}var
lV=lo;for(;;){iN(kU,lV)[lV+1]=2;var
aa2=lV+1|0;if(pq!==lV){var
lV=aa2;continue}var
lU=kK;for(;;){iN(kU,lU)[lU+1]=3;var
aa1=lU+1|0;if(tZ!==lU){var
lU=aa1;continue}var
lT=kJ;for(;;){iN(kU,lT)[lT+1]=4;var
aa0=lT+1|0;if(to!==lT){var
lT=aa0;continue}var
os=function(b){var
x=P(b),f=0,e=0,C=0;for(;;){if((x|0)<=e){if(e===(x|0)){var
w=mc(f,0),a=C,g=0,j=f;for(;;){if(0<j){var
c=G(b,a);if(lo<=c)if(kJ<=c)if(is<=c)var
d=0;else{var
k=G(b,a+1|0),l=G(b,a+2|0),m=G(b,a+3|0),n=2!==(k>>>6|0)?1:0;if(n)var
o=n;else
var
y=2!==(l>>>6|0)?1:0,o=y||(2!==(m>>>6|0)?1:0);if(o)throw jH;var
h=(c&7)<<18|(k&63)<<12|(l&63)<<6|m&63,d=1}else
if(kK<=c){var
p=G(b,a+1|0),q=G(b,a+2|0),z=2!==(p>>>6|0)?1:0,A=z||(2!==(q>>>6|0)?1:0);if(A)throw jH;var
i=(c&15)<<12|(p&63)<<6|q&63,r=pZ<=i?1:0,B=r?i<=57088?1:0:r;if(B)throw jH;var
h=i,d=1}else{var
s=G(b,a+1|0);if(2!==(s>>>6|0))throw jH;var
h=(c&31)<<6|s&63,d=1}else
if(ip<=c)var
d=0;else
var
h=c,d=1;if(d){iN(w,g)[g+1]=h;var
v=G(b,a),a=a+iN(kU,v)[v+1]|0,g=g+1|0,j=j-1|0;continue}throw jH}return qL(w)}}throw jH}var
t=G(b,e),u=iN(kU,t)[t+1];if(0<u){var
f=f+1|0,e=e+u|0;continue}throw jH}},lF=function(g,i,f){var
j=g[6]+i|0,k=g[2],b=il(f*4|0),c=j,d=f;for(;;){if(0<d){var
a=iN(k,c)[c+1];if(ik<a)if(2047<a)if(L<a){if(o9<a)throw jH;iw(b,jF(kJ|a>>>18|0));iw(b,jF(ip|(a>>>12|0)&63));iw(b,jF(ip|(a>>>6|0)&63));iw(b,jF(ip|a&63))}else{var
e=pZ<=a?1:0,h=e?a<tJ?1:0:e;if(h)throw jH;iw(b,jF(kK|a>>>12|0));iw(b,jF(ip|(a>>>6|0)&63));iw(b,jF(ip|a&63))}else{iw(b,jF(lo|a>>>6|0));iw(b,jF(ip|a&63))}else
iw(b,jF(a));var
c=c+1|0,d=d-1|0;continue}return iu(b)}},J=function(a){return lF(a,0,a[5]-a[6]|0)},ot=iF,kV=null,qN=undefined,lG=function(a){return a!==qN?1:0},xB=ot.Array,ou=[is,xC,iZ(0)],xD=ot.Error;xn(xE,[0,ou,{}]);var
qO=function(a){throw a};qx(function(a){return a[1]===ou?[0,ks(a[2].toString())]:0});qx(function(a){return a
instanceof
xB?0:[0,ks(a.toString())]});var
qP=g(i9,xG,xF),qQ=g(i9,xI,xH),qR=g(i9,xK,xJ),qS=g(i9,xM,xL),qT=g(i9,xO,xN),qU=g(i9,xQ,xP),qV=g(i9,xS,xR),qW=g(i9,xU,xT),qX=g(i9,xW,xV),qY=g(i9,xY,xX),qZ=g(i9,x0,xZ),q0=g(i9,x2,x1);p(i_,x3,qP,qP);p(i_,x4,qQ,qQ);p(i_,x5,qR,qR);p(i_,x6,qS,qS);p(i_,x7,qT,qT);p(i_,x8,qU,qU);p(i_,x9,qV,qV);p(i_,x_,qW,qW);p(i_,x$,qX,qX);p(i_,ya,qY,qY);p(i_,yb,qZ,qZ);p(i_,yc,q0,q0);var
q1=function(a){return typeof
a==="number"?yd:a[1]},q2=function(a){if(typeof
a==="number")return 1;else
switch(a[0]){case
0:return 2;case
3:return 4;default:return 3}},I=function(a,b){return[0,a[1],a[2],b[3]]},q4=function(b,a){var
c=b[1]-a[1]|0;return 0===c?b[2]-a[2]|0:c},yf=[is,ye,iZ(0)],Iv=function(c,b,a){return[0,c,b,Iw,0,a,ov]},q5=function(c,b){var
a=b.slice();a[2]=c;return a},ow=function(a){return a[3][1]},q6=function(a){return a[3][2]},mk=function(b,a){if(b!==a[4]){var
c=a.slice();c[4]=b;return c}return a},kw=function(c,a){function
b(a){return iw(c,a)}return sl<=a?(b(kJ|a>>>18|0),b(ip|(a>>>12|0)&63),b(ip|(a>>>6|0)&63),b(ip|a&63)):pn<=a?(b(kK|a>>>12|0),b(ip|(a>>>6|0)&63),b(ip|a&63)):ip<=a?(b(lo|a>>>6|0),b(ip|a&63)):b(a)},kg=function(a){return 35<a?iJ<a?-1:G(Mw,a+M|0)-1|0:-1},kW=function(a){return 35<a?iJ<a?-1:G(Mx,a+M|0)-1|0:-1},q7=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Nb,a+M|0)-1|0:-1},q8=function(a){return 45<a?46<a?-1:0:-1},kh=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Nd,a+M|0)-1|0:-1},jI=function(a){return 8<a?l_<a?jL<a?jR<a?-1:jP<a?jU<a?0:-1:jN<a?jS<a?jO<a?jT<a?0:-1:0:-1:jV<a?jM<a?0:-1:0:-1:G(MQ,a-9|0)-1|0:-1},im=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Ne,a+M|0)-1|0:-1},iT=function(a){return 47<a?57<a?-1:0:-1},q9=function(a){return 42<a?57<a?-1:G(MI,a+m8|0)-1|0:-1},kX=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Ni,a+M|0)-1|0:-1},ij=function(a){return 47<a?la<a?-1:G(M5,a+kO|0)-1|0:-1},ml=function(a){return 35<a?iJ<a?-1:G(My,a+M|0)-1|0:-1},mm=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Nk,a+M|0)-1|0:-1},q_=function(a){return 87<a?kn<a?-1:G(oy,a-88|0)-1|0:-1},lH=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Nl,a+M|0)-1|0:-1},K=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Nm,a+M|0)-1|0:-1},j3=function(a){return 47<a?px<a?-1:G(MY,a+kO|0)-1|0:-1},mn=function(a){return 8<a?l_<a?jL<a?jR<a?-1:jP<a?jU<a?0:-1:jN<a?jS<a?jO<a?jT<a?0:-1:0:-1:jV<a?jM<a?0:-1:0:-1:G(MR,a-9|0)-1|0:-1},q$=function(a){return 45<a?it<a?-1:G(Mp,a+l7|0)-1|0:-1},iU=function(a){return 35<a?iJ<a?-1:G(Mz,a+M|0)-1|0:-1},ra=function(a){return 35<a?iJ<a?-1:G(MA,a+M|0)-1|0:-1},oz=function(a){return 35<a?iJ<a?-1:G(MB,a+M|0)-1|0:-1},mo=function(a){return 8<a?l_<a?jL<a?jR<a?-1:jP<a?jU<a?0:-1:jN<a?jS<a?jO<a?jT<a?0:-1:0:-1:jV<a?jM<a?0:-1:0:-1:G(MS,a-9|0)-1|0:-1},i$=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Ns,a+M|0)-1|0:-1},mp=function(a){return 47<a?49<a?-1:0:-1},rb=function(a){return l2<a?p4<a?-1:0:-1},ki=function(a){return 60<a?61<a?-1:0:-1},i4=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Nt,a+M|0)-1|0:-1},oA=function(a){return 60<a?62<a?-1:G(ox,a+r2|0)-1|0:-1},jt=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Nu,a+M|0)-1|0:-1},rc=function(a){return 65<a?98<a?-1:G(oy,a-66|0)-1|0:-1},mq=function(a){return p4<a?m9<a?-1:0:-1},rd=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(NY,a+M|0)-1|0:-1},ju=function(a){return 47<a?55<a?-1:0:-1},oB=function(a){return pc<a?lZ<a?-1:0:-1},mr=function(a){return lZ<a?mS<a?-1:0:-1},lI=function(a){return 98<a?99<a?-1:0:-1},ms=function(a){return 47<a?48<a?-1:0:-1},oC=function(a){return 8<a?l_<a?jL<a?jR<a?-1:jP<a?jU<a?0:-1:jN<a?jS<a?jO<a?jT<a?0:-1:0:-1:jV<a?jM<a?0:-1:0:-1:G(MT,a-9|0)-1|0:-1},mt=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Nv,a+M|0)-1|0:-1},re=function(a){return 45<a?it<a?-1:G(Mn,a+l7|0)-1|0:-1},ja=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Nw,a+M|0)-1|0:-1},rf=function(a){return 78<a?mS<a?-1:G(oy,a+sG|0)-1|0:-1},rg=function(a){return 41<a?42<a?-1:0:-1},rh=function(a){return 35<a?iJ<a?-1:G(M9,a+M|0)-1|0:-1},kY=function(a){return 35<a?iJ<a?-1:G(MC,a+M|0)-1|0:-1},mu=function(a){return 35<a?iJ<a?-1:G(MD,a+M|0)-1|0:-1},mv=function(a){return 35<a?iJ<a?-1:G(ME,a+M|0)-1|0:-1},mw=function(a){return 47<a?it<a?-1:G(M0,a+kO|0)-1|0:-1},ri=function(a){return 41<a?61<a?-1:G(M3,a+tM|0)-1|0:-1},mx=function(a){return 44<a?48<a?-1:G(MP,a+ln|0)-1|0:-1},rj=function(a){return 44<a?45<a?-1:0:-1},rk=function(a){return l0<a?kE<a?-1:0:-1},my=function(a){return kq<a?iq<a?-1:0:-1},rl=function(a){return 99<a?jl<a?-1:0:-1},jv=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Nx,a+M|0)-1|0:-1},mz=function(a){return pK<a?l2<a?-1:0:-1},kZ=function(a){return 45<a?57<a?-1:G(M8,a+l7|0)-1|0:-1},j4=function(a){return 47<a?le<a?-1:G(NZ,a+kO|0)-1|0:-1},jb=function(a){return 9<a?10<a?-1:0:-1},rm=function(a){return 96<a?97<a?-1:0:-1},oD=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(NA,a+M|0)-1|0:-1},iA=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(NB,a+M|0)-1|0:-1},rn=function(a){return 35<a?iJ<a?-1:G(MF,a+M|0)-1|0:-1},ro=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(NG,a+M|0)-1|0:-1},oE=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(NH,a+M|0)-1|0:-1},lJ=function(a){return jl<a?it<a?-1:0:-1},mA=function(a){return 41<a?47<a?-1:G(MN,a+tM|0)-1|0:-1},rp=function(a){return tg<a?sR<a?-1:0:-1},mB=function(a){return 35<a?iJ<a?-1:G(MG,a+M|0)-1|0:-1},kj=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(NM,a+M|0)-1|0:-1},mC=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(NN,a+M|0)-1|0:-1},j5=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(NP,a+M|0)-1|0:-1},jc=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(NS,a+M|0)-1|0:-1},mD=function(a){return 35<a?iJ<a?-1:G(MH,a+M|0)-1|0:-1},oF=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(NV,a+M|0)-1|0:-1},jJ=function(a){return m9<a?tV<a?-1:0:-1},rq=function(a){return 35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(NW,a+M|0)-1|0:-1},rr=function(a){return 46<a?47<a?-1:0:-1},rs=function(a){return 57<a?58<a?-1:0:-1},oG=function(a,c,b){var
d=b-q6(a)|0,e=[0,ow(a),d,b],f=c-q6(a)|0,g=[0,ow(a),f,c];return[0,a[1],g,e]},N=function(b,a){var
c=mi(a);return oG(b,c,mj(a))},k0=function(g){var
b=g[2],d=g[1],c=d[6];if(c!==ov){var
f=d.slice();f[6]=ov;var
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
h=N(a,a[2]);var
i=n(c[2]);return[0,a,[0,b,h,n(c[1]),i]]},jw=function(a,d,c){var
b=a.slice();b[6]=[0,[0,[0,d,c],a[6][1]],a[6][2]];return b},rt=function(c,b,a){return jw(c,b,[1,a])},jx=function(b,a){return jw(b,a,N3)},jf=function(a,c){var
d=mj(c),e=[0,ow(a)+1|0,d],b=a.slice();b[3]=e;return b},k1=[is,N4,iZ(0)],kk=function(a){var
b=a[5];if(b)return[0,a[1],a[2],a[3],a[4],b[2]];throw k1},N5=function(b){var
a=[0,0];ql(function(b){a[1]=[0,b,a[1]];return 0},b);return[0,0,0,0,0,n(a[1])]},N6=function(a){var
c=a[5];if(c){var
d=c[1]+m8|0;if(!(2<d>>>0))switch(d){case
0:return kk(a);case
1:break;default:var
b=kk(a);return[0,1,b[2],b[3],b[4],b[5]]}}return a},N7=function(b){var
a=b[5];if(a)if(48===a[1]){var
c=a[2];if(c){var
d=c[1],e=88===d?0:kn===d?0:1;if(!e)return kk(kk(b))}}throw k1},N8=function(a){var
b=uP(N9,lA(qg,a[5]));try{var
c=jE(b)}catch(a){a=iK(a);if(a[1]===j1)throw k1;throw a}return[0,a[1],a[2],c,a[4],0]},N_=function(l){var
a=l;for(;;){var
j=a[5];if(j){var
b=j[1];if(81<=b){if(95===b){var
a=kk(a);continue}var
k=po===b?1:0}else{if(46===b){if(0===a[4]){var
c=kk(a),a=[0,c[1],c[2],c[3],N$,c[5]];continue}throw k1}var
k=80<=b?1:0}if(k)return N8(kk(a));if(48<=b)if(57<b)var
g=0;else
var
d=48,g=1;else
var
g=0;if(!g){if(65<=b)if(70<b)var
h=0;else
var
d=55,h=1;else
var
h=0;if(!h){if(97<=b)if(la<b)var
i=0;else
var
d=87,i=1;else
var
i=0;if(!i)throw k1}}var
e=a[4],m=b-d|0,n=e?[0,e[1]-4|0]:e,o=(a[2]<<4)+m|0,f=kk(a),a=[0,f[1],o,f[3],n,f[5]];continue}return a}},Oa=function(a){if(0===a[5]){var
b=a[2],c=a[4],d=c?a[3]+c[1]|0:a[3],e=0===d?b:Math.pow(b,d);return a[1]?-e:e}throw[0,s,Ob]},ru=function(b){try{var
a=abb(b);return a}catch(a){a=iK(a);if(mf)try{var
c=Oa(N_(N7(N6(N5(b)))));return c}catch(b){b=iK(b);if(b===k1)throw a;throw b}throw a}},jg=function(a,g,f,e,d){var
h=I(g,f),b=iu(e),i=d?[0,b]:[1,b],c=a.slice();c[6]=[0,a[6][1],[0,[0,h,i],a[6][2]]];return c},jy=function(e,d){if(45===G(d,0))var
f=1,a=js(d,1,P(d)-1|0);else
var
f=0,a=d;if(0===e)var
c=0;else
switch(e-1|0){case
0:var
g=1;try{var
k=n9(n8(m(Oe,a)))}catch(d){g=0;d=iK(d);if(d[1]!==j1)throw d;var
b=O(m(Od,a)),c=1}if(g)var
b=k,c=1;break;case
2:var
h=1;try{var
l=ru(a)}catch(d){h=0;d=iK(d);if(d[1]!==j1)throw d;var
b=O(m(Of,a)),c=1}if(h)var
b=l,c=1;break;default:var
c=0}if(!c)try{var
j=n9(n8(a)),b=j}catch(c){c=iK(c);if(c[1]!==j1)throw c;var
b=O(m(Oc,a))}var
i=f?-b:b;return[9,e,i,d]},rv=function(f,k,j){var
b=qL([0,j]);io(b);var
a=c(b),g=ib<a?hi<a?cg<a?eK<a?hz<a?0:cz<a?hX<a?2:0:fF<a?1:0:aH<a?eN<a?dI<a?1:0:bK<a?1:0:dj<a?aR<a?1:0:bp<a?1:0:eS<a?fd<a?cv<a?dG<a?aa<a?dS<a?1:0:e_<a?1:0:fl<a?d$<a?1:0:cD<a?1:0:d9<a?an<a?gm<a?1:0:dx<a?1:0:gs<a?fG<a?1:0:cC<a?1:0:gc<a?ah<a?fR<a?b8<a?1:0:eh<a?1:0:ex<a?eO<a?1:0:b9<a?1:0:au<a?f9<a?fM<a?1:0:eq<a?1:0:eA<a?cr<a?1:0:ar<a?1:0:eB<a?fo<a?fu<a?e$<a?ai<a?1:0:dD<a?1:0:fT<a?as<a?1:0:cH<a?1:0:d6<a?f8<a?e4<a?1:0:a_<a?1:0:aE<a?bA<a?1:0:ay<a?1:0:aS<a?fc<a?cN<a?a3<a?1:0:dX<a?1:0:bD<a?f3<a?1:0:f0<a?1:0:bN<a?ad<a?bT<a?1:0:cV<a?1:0:gA<a?a4<a?1:0:ca<a?1:0:f$<a?bh<a?hp<a?a$<a?aq<a?dZ<a?cb<a?f4<a?h5<a?2:0:gr<a?1:0:c$<a?cw<a?1:0:dL<a?1:0:eD<a?b7<a?cx<a?1:0:ew<a?1:0:eX<a?am<a?1:0:fV<a?1:0:aB<a?fm<a?bP<a?ed<a?1:0:eP<a?1:0:bC<a?bJ<a?1:0:fJ<a?1:0:a6<a?bo<a?cW<a?1:0:gv<a?1:0:cy<a?bS<a?1:0:ak<a?1:0:br<a?aG<a?b3<a?ft<a?fi<a?1:0:aV<a?1:0:f_<a?ge<a?1:0:du<a?1:0:ch<a?e8<a?b6<a?1:0:aT<a?1:0:fp<a?d2<a?1:0:e7<a?1:0:eu<a?aw<a?cF<a?cJ<a?1:0:dQ<a?1:0:dw<a?c5<a?1:0:bF<a?1:0:eC<a?bg<a?cE<a?1:0:dt<a?1:0:ig<a?c6<a?1:0:hQ<a?2:0:ag<a?nC<a?hA<a?hC<a?gP<a?gG<a?2:0:gJ<a?2:0:hW<a?gY<a?2:0:gU<a?2:0:dh<a?aJ<a?hH<a?2:0:dY<a?1:0:g2<a?nN<a?1:2:g$<a?0:2:fP<a?dr<a?fk<a?eI<a?1:0:$<a?1:0:gn<a?bL<a?1:0:fU<a?1:0:gE<a?e1<a?cA<a?1:0:dB<a?1:0:hB<a?h7<a?2:0:nd<a?2:1:f7<a?hD<a?mM<a?gL<a?hM<a?0:2:eo<a?0:1:nY<a?nx<a?2:1:id<a?2:0:n0<a?h0<a?hl<a?2:0:m6<a?2:1:hk<a?g5<a?2:0:gO<a?2:0:ha<a?nZ<a?h_<a?cO<a?1:0:nm<a?2:1:hP<a?gN<a?2:0:hU<a?2:0:dn<a?m_<a?nG<a?2:1:hK<a?2:0:af<a?bO<a?1:0:ga<a?1:0:fB<a?fz<a?gX<a?gK<a?b5<a?cU<a?fq<a?1:0:el<a?1:0:hI<a?f2<a?1:0:g6<a?2:0:cI<a?aA<a?hL<a?2:0:T<a?1:0:bB<a?ds<a?1:0:ne<a?1:2:bQ<a?no<a?hy<a?hS<a?0:2:g4<a?0:2:dy<a?fx<a?1:0:bU<a?1:0:be<a?cn<a?aY<a?1:0:gd<a?1:0:go<a?b2<a?1:0:a8<a?1:0:dT<a?gq<a?gl<a?fw<a?fy<a?1:0:a1<a?1:0:gw<a?c1<a?1:0:ek<a?1:0:Z<a?ho<a?e2<a?1:0:hc<a?2:0:fW<a?fE<a?1:0:fr<a?1:0:eM<a?S<a?cj<a?aO<a?1:0:W<a?1:0:cR<a?fa<a?1:0:e3<a?1:0:dd<a?bk<a?_<a?1:0:ea<a?1:0:gZ<a?ap<a?1:0:h$<a?2:0:gQ<a?dN<a?bR<a?a9<a?ci<a?c_<a?1:0:cT<a?1:0:al<a?aL<a?1:0:c4<a?1:0:cS<a?X<a?by<a?1:0:fA<a?1:0:dv<a?dM<a?1:0:L<a?1:0:bl<a?dU<a?co<a?ec<a?1:0:aQ<a?1:0:cZ<a?bY<a?1:0:cl<a?1:0:gF<a?bH<a?cs<a?1:0:b0<a?1:0:dg<a?hj<a?2:0:dV<a?1:0:fK<a?hG<a?f6<a?fb<a?hY<a?2:0:ff<a?1:0:gM<a?e6<a?1:0:hx<a?2:0:g7<a?g3<a?he<a?2:0:gH<a?2:0:dH<a?hJ<a?2:0:eQ<a?1:0:eL<a?dC<a?ac<a?fC<a?1:0:d4<a?1:0:et<a?cp<a?1:0:cd<a?1:0:fn<a?aM<a?gt<a?1:0:dp<a?1:0:U<a?at<a?1:0:fS<a?1:0:g1<a?hZ<a?bf<a?aI<a?eb<a?nj<a?fX<a?dc<a?1:0:nX<a?1:2:df<a?ck<a?1:0:fg<a?1:0:dE<a?d3<a?e0<a?1:0:bc<a?1:0:cG<a?fZ<a?1:0:d1<a?1:0:gT<a?ie<a?b_<a?dR<a?1:0:bb<a?1:0:h2<a?hR<a?2:0:ht<a?2:0:ef<a?eV<a?nw<a?2:1:ae<a?0:1:ep<a?eY<a?0:1:eG<a?0:1:nR<a?gS<a?gz<a?bz<a?dP<a?0:1:di<a?0:1:na<a?gV<a?0:2:b1<a?1:0:em<a?aU<a?ni<a?2:1:fI<a?0:1:m1<a?cq<a?0:1:nE<a?2:1:bM<a?nq<a?nP<a?mN<a?2:1:nQ<a?2:1:nL<a?mW<a?2:1:nK<a?2:1:d5<a?mR<a?hd<a?0:2:d0<a?1:0:h1<a?cK<a?1:0:ic<a?2:0:nV<a?a2<a?hr<a?gp<a?nr<a?np<a?2:1:mV<a?2:1:mZ<a?hs<a?0:2:a5<a?1:0:m$<a?ez<a?mK<a?2:1:h8<a?0:2:h6<a?mO<a?1:2:f5<a?0:1:bW<a?h3<a?m4<a?ih<a?0:2:e9<a?1:0:nT<a?mQ<a?2:1:hN<a?2:0:hu<a?bm<a?dF<a?1:0:n2<a?1:2:hn<a?hV<a?0:2:gR<a?0:2:en<a?nh<a?bG<a?hO<a?ng<a?1:2:bI<a?0:1:mL<a?hf<a?0:2:m5<a?1:2:nF<a?mY<a?nA<a?1:2:nv<a?1:2:eE<a?bE<a?1:0:fs<a?1:0:hq<a?gh<a?bt<a?cc<a?1:0:fj<a?1:0:V<a?f1<a?1:0:cX<a?1:0:dk<a?m0<a?mU<a?2:1:hF<a?2:0:hw<a?bj<a?1:0:g9<a?2:0:dW<a?bu<a?fO<a?bx<a?ny<a?ao<a?nb<a?2:1:eU<a?0:1:cM<a?mT<a?2:1:dm<a?0:1:bv<a?dJ<a?gB<a?0:1:c8<a?0:1:bd<a?d7<a?0:1:fe<a?0:1:aF<a?cL<a?dA<a?fY<a?0:1:cB<a?0:1:c9<a?aZ<a?0:1:da<a?0:1:fD<a?cm<a?d8<a?0:1:cu<a?0:1:n1<a?e5<a?0:1:h4<a?2:0:ej<a?eW<a?bX<a?er<a?aD<a?1:0:a7<a?1:0:hT<a?gy<a?1:0:mP<a?2:1:g0<a?ct<a?aC<a?0:1:gW<a?0:2:gu<a?d_<a?0:1:eR<a?0:1:aP<a?cY<a?ee<a?fv<a?0:1:fN<a?0:1:cQ<a?bs<a?0:1:bZ<a?0:1:c3<a?bw<a?aj<a?0:1:gf<a?0:1:nt<a?eg<a?0:1:hb<a?2:0:aW<a?dz<a?ei<a?b4<a?aK<a?gb<a?1:0:aN<a?1:0:bn<a?es<a?1:0:fH<a?1:0:m3<a?b$<a?cP<a?1:0:ns<a?1:2:ce<a?fh<a?1:0:gj<a?1:0:c0<a?dK<a?bi<a?c2<a?1:0:bV<a?1:0:az<a?bq<a?1:0:ab<a?1:0:dO<a?cf<a?gi<a?1:0:fL<a?1:0:db<a?gx<a?1:0:eJ<a?1:0:ia<a?fQ<a?Y<a?gk<a?de<a?1:0:dl<a?1:0:ey<a?av<a?1:0:gg<a?1:0:ax<a?eT<a?dq<a?1:0:eF<a?1:0:h9<a?a0<a?1:0:hE<a?2:0:ev<a?eH<a?g8<a?g_<a?2:0:hm<a?2:0:aX<a?ba<a?1:0:eZ<a?1:0:hv<a?hg<a?c7<a?1:0:hh<a?2:0:gC<a?gD<a?2:0:gI<a?2:0:G(Mo,a+1|0)-1|0;if(3<g>>>0)var
e=d(b);else
switch(g){case
0:var
e=2;break;case
1:var
e=0;break;case
2:var
e=1;break;default:B(b,2);if(0===jJ(c(b))){var
h=j4(c(b));if(0===h)var
e=0===ij(c(b))?0===ij(c(b))?0===ij(c(b))?0:d(b):d(b):d(b);else
if(1===h)if(0===ij(c(b)))for(;;){var
i=j3(c(b));if(0===i)continue;var
e=1===i?0:d(b);break}else
var
e=d(b);else
var
e=d(b)}else
var
e=d(b)}if(2<=e){if(!(3<=e))return jw(f,k,29)}else
if(0<=e)return f;return O(Og)},rw=function(c,b,a){var
d=b+mi(a)|0,e=oG(c,d,b+mj(a)|0);return[0,e,J(a)]},rx=function(s,r){var
t=mi(s[2]),a=os(r),f=il(P(r)),e=s;for(;;){io(a);var
g=c(a),h=92<g?1:G(MW,g+1|0)-1|0;if(2<h>>>0)var
b=d(a);else
switch(h){case
0:var
b=2;break;case
1:var
b=3;break;default:B(a,3);if(0===jJ(c(a))){var
i=j4(c(a));if(0===i)var
b=0===ij(c(a))?0===ij(c(a))?0===ij(c(a))?0:d(a):d(a):d(a);else
if(1===i)if(0===ij(c(a)))for(;;){var
j=j3(c(a));if(0===j)continue;var
b=1===j?1:d(a);break}else
var
b=d(a);else
var
b=d(a)}else
var
b=d(a)}if(3<b>>>0)return O(Oh);switch(b){case
0:var
k=rw(e,t,a),l=k[2],n=jE(m(Oi,js(l,2,P(l)-2|0))),u=rv(e,k[1],n);kw(f,n);var
e=u;continue;case
1:var
o=rw(e,t,a),p=o[2],q=jE(m(Oj,js(p,3,P(p)-4|0))),v=rv(e,o[1],q);kw(f,q);var
e=v;continue;case
2:return[0,e,iu(f)];default:Q(f,J(a));continue}}},jh=function(b,a,c){var
d=jx(b,N(b,a));mh(a);return g(c,d,a)},kx=function(m,g,a){var
b=m;for(;;){io(a);var
f=c(a),i=-1<f?42<f?jm<f?0:jj<f?1:0:G(Ml,f)-1|0:-1;if(3<i>>>0)var
e=d(a);else
switch(i){case
0:var
e=3;break;case
1:var
e=0;break;case
2:B(a,0);var
e=0===jb(c(a))?0:d(a);break;default:B(a,3);var
h=c(a),j=44<h?47<h?-1:G(NR,h+ln|0)-1|0:-1,e=0===j?0===rr(c(a))?2:d(a):1===j?1:d(a)}if(3<e>>>0){var
k=jx(b,N(b,a));return[0,k,N(k,a)]}switch(e){case
0:var
n=jf(b,a);Q(g,J(a));var
b=n;continue;case
1:var
l=N(b,a),o=b[4]?jw(b,l,[2,Ol,Ok]):b;return[0,o,l];case
2:if(b[4])return[0,b,N(b,a)];Q(g,Om);continue;default:Q(g,J(a));continue}}},k2=function(e,k,a){for(;;){io(a);var
f=c(a),i=13<f?jm<f?1:jj<f?2:1:G(MM,f+1|0)-1|0;if(3<i>>>0)var
b=d(a);else
switch(i){case
0:var
b=0;break;case
1:var
b=2;break;case
2:var
b=1;break;default:B(a,1);var
b=0===jb(c(a))?1:d(a)}if(2<b>>>0)return O(On);switch(b){case
0:return[0,e,N(e,a)];case
1:var
g=N(e,a),h=g[3],l=jf(e,a),j=or(a);return[0,l,[0,g[1],g[2],[0,h[1],h[2]-j|0,h[3]-j|0]]];default:Q(k,J(a));continue}}},ry=function(b,a){function
k(a){B(a,3);return 0===ju(c(a))?2:d(a)}io(a);var
f=c(a),l=kn<f?jm<f?1:jj<f?2:1:G(Mr,f+1|0)-1|0;if(14<l>>>0)var
e=d(a);else
switch(l){case
1:var
e=16;break;case
2:var
e=15;break;case
3:B(a,15);var
e=0===jb(c(a))?15:d(a);break;case
4:B(a,4);var
e=0===ju(c(a))?k(a):d(a);break;case
5:B(a,11);var
e=0===ju(c(a))?k(a):d(a);break;case
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
n=j4(c(a));if(0===n)var
e=0===ij(c(a))?0===ij(c(a))?0===ij(c(a))?12:d(a):d(a):d(a);else
if(1===n)if(0===ij(c(a)))for(;;){var
o=j3(c(a));if(0===o)continue;var
e=1===o?13:d(a);break}else
var
e=d(a);else
var
e=d(a);break;case
13:var
e=10;break;case
14:B(a,14);var
e=0===ij(c(a))?0===ij(c(a))?1:d(a):d(a);break;default:var
e=0}if(16<e>>>0)return O(Oo);switch(e){case
1:var
p=J(a);return[0,b,p,[0,jE(m(Op,p))],0];case
2:var
h=J(a),g=jE(m(Oq,h));return t1<=g?[0,b,h,[0,g>>>3|0,48+(g&7)|0],1]:[0,b,h,[0,g],1];case
3:var
q=J(a);return[0,b,q,[0,jE(m(Or,q))],1];case
4:return[0,b,Os,[0,0],0];case
5:return[0,b,Ot,[0,8],0];case
6:return[0,b,Ou,[0,12],0];case
7:return[0,b,Ov,[0,10],0];case
8:return[0,b,Ow,[0,13],0];case
9:return[0,b,Ox,[0,9],0];case
10:return[0,b,Oy,[0,11],0];case
11:var
r=J(a);return[0,b,r,[0,jE(m(Oz,r))],1];case
12:var
i=J(a);return[0,b,i,[0,jE(m(OA,js(i,1,P(i)-1|0)))],0];case
13:var
j=J(a),s=jE(m(OB,js(j,2,P(j)-3|0))),u=o9<s?jx(b,N(b,a)):b;return[0,u,j,[0,s],0];case
14:var
v=J(a),w=qM(a);return[0,jx(b,N(b,a)),v,w,0];case
15:var
x=J(a);return[0,jf(b,a),x,[0],0];default:var
t=J(a);return[0,b,t,qM(a),0]}},rz=function(r,q,g,f,p,a){var
b=r,h=p;for(;;){io(a);var
k=c(a),l=92<k?1:G(MV,k+1|0)-1|0;if(4<l>>>0)var
e=d(a);else
switch(l){case
1:var
e=3;break;case
3:var
e=0;break;case
4:var
e=1;break;default:var
e=2}if(3<e>>>0)return O(OC);switch(e){case
0:var
j=J(a);Q(f,j);if(i0(q,j))return[0,b,N(b,a),h];Q(g,j);continue;case
1:Q(f,OD);var
i=ry(b,a),s=i[4],t=s||h;Q(f,i[2]);var
u=i[3];qn(function(a){return kw(g,a)},u);var
b=i[1],h=t;continue;case
2:var
m=J(a);Q(f,m);var
n=jx(b,N(b,a));Q(g,m);return[0,n,N(n,a),h];default:var
o=J(a);Q(f,o);Q(g,o);continue}}},rA=function(r,i,h,g,f,a){var
b=r;for(;;){io(a);var
l=c(a),m=96<l?1:G(M2,l+1|0)-1|0;if(6<m>>>0)var
e=d(a);else
switch(m){case
0:var
e=0;break;case
1:var
e=6;break;case
2:var
e=5;break;case
3:B(a,5);var
e=0===jb(c(a))?4:d(a);break;case
4:B(a,6);var
n=c(a),s=iJ<n?le<n?-1:0:-1,e=0===s?2:d(a);break;case
5:var
e=3;break;default:var
e=1}if(6<e>>>0)return O(OE);switch(e){case
0:var
o=jx(b,N(b,a));return[0,o,I(i,N(o,a)),1];case
1:iw(f,96);return[0,b,I(i,N(b,a)),1];case
2:Q(f,OF);return[0,b,I(i,N(b,a)),0];case
3:iw(g,92);iw(f,92);var
j=ry(b,a),p=j[2];Q(g,p);Q(f,p);var
t=j[3];qn(function(a){return kw(h,a)},t);var
b=j[1];continue;case
4:Q(g,OG);Q(f,OH);Q(h,OI);var
b=jf(b,a);continue;case
5:var
q=J(a);Q(g,q);Q(f,q);iw(h,10);var
b=jf(b,a);continue;default:var
k=J(a);Q(g,k);Q(f,k);Q(h,k);continue}}},oH=function(bv,bu,ab,ak,b){var
aa=bv;for(;;){io(b);var
am=c(b),aL=le<am?jm<am?1:jj<am?2:1:G(M$,am+1|0)-1|0;if(5<aL>>>0)var
f=d(b);else
switch(aL){case
0:var
f=1;break;case
1:var
f=6;break;case
2:var
f=2;break;case
3:B(b,2);var
f=0===jb(c(b))?2:d(b);break;case
4:var
f=0;break;default:B(b,6);var
an=c(b),aM=34<an?iJ<an?-1:G(M4,an-35|0)-1|0:-1;if(0===aM){var
ao=c(b),aN=47<ao?kn<ao?-1:G(M_,ao+kO|0)-1|0:-1;if(0===aN)for(;;){var
ap=c(b),aO=47<ap?59<ap?-1:G(Mt,ap+kO|0)-1|0:-1;if(0===aO)continue;var
f=1===aO?4:d(b);break}else
if(1===aN)if(0===ij(c(b)))for(;;){var
aq=c(b),aP=47<aq?la<aq?-1:G(M7,aq+kO|0)-1|0:-1;if(0===aP)continue;var
f=1===aP?3:d(b);break}else
var
f=d(b);else
var
f=d(b)}else
if(1===aM)if(0===iU(c(b))){var
aQ=kW(c(b));if(0===aQ){var
aR=kW(c(b));if(0===aR){var
aS=kW(c(b));if(0===aS){var
aT=kW(c(b));if(0===aT){var
aU=kW(c(b));if(0===aU){var
aV=kW(c(b));if(0===aV)var
aW=c(b),bw=58<aW?59<aW?-1:0:-1,f=0===bw?5:d(b);else
var
f=1===aV?5:d(b)}else
var
f=1===aU?5:d(b)}else
var
f=1===aT?5:d(b)}else
var
f=1===aS?5:d(b)}else
var
f=1===aR?5:d(b)}else
var
f=1===aQ?5:d(b)}else
var
f=d(b);else
var
f=d(b)}if(6<f>>>0)return O(O2);switch(f){case
0:var
al=J(b);switch(bu){case
0:var
aJ=C(al,O3)?0:1;break;case
1:var
aJ=C(al,O4)?0:1;break;default:if(C(al,O5))if(C(al,O6))var
aJ=0,aK=0;else
var
aK=1;else
var
aK=1;if(aK){mh(b);return[0,aa,N(aa,b)]}}if(aJ)return[0,aa,N(aa,b)];Q(ak,al);Q(ab,al);continue;case
1:var
aX=jx(aa,N(aa,b));return[0,aX,N(aX,b)];case
2:var
aY=J(b);Q(ak,aY);Q(ab,aY);var
aa=jf(aa,b);continue;case
3:var
ar=J(b),bx=js(ar,3,P(ar)-4|0);Q(ak,ar);kw(ab,jE(m(O7,bx)));continue;case
4:var
as=J(b),by=js(as,2,P(as)-3|0);Q(ak,as);kw(ab,jE(by));continue;case
5:var
at=J(b),a=js(at,1,P(at)-2|0);Q(ak,at);var
aZ=w(a,O8);if(0<=aZ)if(0<aZ){var
a0=w(a,O9);if(0<=a0)if(0<a0){var
a1=w(a,O_);if(0<=a1)if(0<a1){var
a2=w(a,O$);if(0<=a2)if(0<a2){var
a3=w(a,Pa);if(0<=a3)if(0<a3)if(C(a,Pb))if(C(a,Pc))if(C(a,Pd))if(C(a,Pe))if(C(a,Pf))if(C(a,Pg))var
e=1,g=0,Y=0,ac=0,y=0;else
var
W=Pj,y=1;else
var
W=Pk,y=1;else
var
W=Pl,y=1;else
var
W=Pm,y=1;else
var
W=Pn,y=1;else
var
W=Po,y=1;else
var
W=Pp,y=1;else
if(C(a,Pq))if(C(a,Pr))if(C(a,Ps))if(C(a,Pt))if(C(a,Pu))if(C(a,Pv))if(C(a,Pw))var
e=1,g=0,Y=0,ac=0,y=0;else
var
W=Px,y=1;else
var
W=Py,y=1;else
var
W=Pz,y=1;else
var
W=PA,y=1;else
var
W=PB,y=1;else
var
W=PC,y=1;else
var
W=PD,y=1;if(y)var
au=W,ac=1}else
var
au=PE,ac=1;else{var
a5=w(a,PF);if(0<=a5)if(0<a5)if(C(a,PG))if(C(a,PH))if(C(a,PI))if(C(a,PJ))if(C(a,PK))if(C(a,PL))if(C(a,PM))var
e=1,g=0,Y=0,ac=0,i=0;else
var
A=PN,i=1;else
var
A=PO,i=1;else
var
A=PP,i=1;else
var
A=PQ,i=1;else
var
A=PR,i=1;else
var
A=PS,i=1;else
var
A=PT,i=1;else
var
A=PU,i=1;else
if(C(a,PV))if(C(a,PW))if(C(a,PX))if(C(a,PY))if(C(a,PZ))if(C(a,P0))if(C(a,P1))var
e=1,g=0,Y=0,ac=0,i=0;else
var
A=P2,i=1;else
var
A=P3,i=1;else
var
A=P4,i=1;else
var
A=P5,i=1;else
var
A=P6,i=1;else
var
A=P7,i=1;else
var
A=P8,i=1;if(i)var
au=A,ac=1}if(ac)var
av=au,Y=1}else
var
av=P9,Y=1;else{var
a6=w(a,P_);if(0<=a6)if(0<a6){var
a7=w(a,P$);if(0<=a7)if(0<a7)if(C(a,Qa))if(C(a,Qb))if(C(a,Qc))if(C(a,Qd))if(C(a,Qe))if(C(a,Qf))if(C(a,Qg))var
e=1,g=0,Y=0,ad=0,j=0;else
var
D=Qh,j=1;else
var
D=Qi,j=1;else
var
D=Qj,j=1;else
var
D=Qk,j=1;else
var
D=Ql,j=1;else
var
D=Qm,j=1;else
var
D=Qn,j=1;else
var
D=Qo,j=1;else
if(C(a,Qp))if(C(a,Qq))if(C(a,Qr))if(C(a,Qs))if(C(a,Qt))if(C(a,Qu))if(C(a,Qv))var
e=1,g=0,Y=0,ad=0,j=0;else
var
D=Qw,j=1;else
var
D=Qx,j=1;else
var
D=Qy,j=1;else
var
D=Qz,j=1;else
var
D=QA,j=1;else
var
D=QB,j=1;else
var
D=QC,j=1;if(j)var
ay=D,ad=1}else
var
ay=QD,ad=1;else{var
a8=w(a,QE);if(0<=a8)if(0<a8)if(C(a,QF))if(C(a,QG))if(C(a,QH))if(C(a,QI))if(C(a,QJ))if(C(a,QK))if(C(a,QL))var
e=1,g=0,Y=0,ad=0,k=0;else
var
E=QM,k=1;else
var
E=QN,k=1;else
var
E=QO,k=1;else
var
E=QP,k=1;else
var
E=QQ,k=1;else
var
E=QR,k=1;else
var
E=QS,k=1;else
var
E=QT,k=1;else
if(C(a,QU))if(C(a,QV))if(C(a,QW))if(C(a,QX))if(C(a,QY))if(C(a,QZ))if(C(a,Q0))var
e=1,g=0,Y=0,ad=0,k=0;else
var
E=Q1,k=1;else
var
E=Q2,k=1;else
var
E=Q3,k=1;else
var
E=Q4,k=1;else
var
E=Q5,k=1;else
var
E=Q6,k=1;else
var
E=Q7,k=1;if(k)var
ay=E,ad=1}if(ad)var
av=ay,Y=1}if(Y)var
aw=av,g=1}else
var
aw=Q8,g=1;else{var
a9=w(a,Q9);if(0<=a9)if(0<a9){var
a_=w(a,Q_);if(0<=a_)if(0<a_){var
a$=w(a,Q$);if(0<=a$)if(0<a$)if(C(a,Ra))if(C(a,Rb))if(C(a,Rc))if(C(a,Rd))if(C(a,Re))if(C(a,Rf))if(C(a,Rg))var
e=1,g=0,Z=0,ae=0,l=0;else
var
F=Rh,l=1;else
var
F=Ri,l=1;else
var
F=Rj,l=1;else
var
F=Rk,l=1;else
var
F=Rl,l=1;else
var
F=Rm,l=1;else
var
F=Rn,l=1;else
var
F=Ro,l=1;else
if(C(a,Rp))if(C(a,Rq))if(C(a,Rr))if(C(a,Rs))if(C(a,Rt))if(C(a,Ru))if(C(a,Rv))var
e=1,g=0,Z=0,ae=0,l=0;else
var
F=Rw,l=1;else
var
F=Rx,l=1;else
var
F=Ry,l=1;else
var
F=Rz,l=1;else
var
F=RA,l=1;else
var
F=RB,l=1;else
var
F=RC,l=1;if(l)var
az=F,ae=1}else
var
az=RD,ae=1;else{var
ba=w(a,RE);if(0<=ba)if(0<ba)if(C(a,RF))if(C(a,RG))if(C(a,RH))if(C(a,RI))if(C(a,RJ))if(C(a,RK))if(C(a,RL))var
e=1,g=0,Z=0,ae=0,n=0;else
var
H=RM,n=1;else
var
H=RN,n=1;else
var
H=RO,n=1;else
var
H=RP,n=1;else
var
H=RQ,n=1;else
var
H=RR,n=1;else
var
H=RS,n=1;else
var
H=RT,n=1;else
if(C(a,RU))if(C(a,RV))if(C(a,RW))if(C(a,RX))if(C(a,RY))if(C(a,RZ))if(C(a,R0))var
e=1,g=0,Z=0,ae=0,n=0;else
var
H=R1,n=1;else
var
H=R2,n=1;else
var
H=R3,n=1;else
var
H=R4,n=1;else
var
H=R5,n=1;else
var
H=R6,n=1;else
var
H=R7,n=1;if(n)var
az=H,ae=1}if(ae)var
aA=az,Z=1}else
var
aA=R8,Z=1;else{var
bb=w(a,R9);if(0<=bb)if(0<bb){var
bc=w(a,R_);if(0<=bc)if(0<bc)if(C(a,R$))if(C(a,Sa))if(C(a,Sb))if(C(a,Sc))if(C(a,Sd))if(C(a,Se))if(C(a,Sf))var
e=1,g=0,Z=0,af=0,o=0;else
var
I=Sg,o=1;else
var
I=Sh,o=1;else
var
I=Si,o=1;else
var
I=Sj,o=1;else
var
I=Sk,o=1;else
var
I=Sl,o=1;else
var
I=Sm,o=1;else
var
I=Sn,o=1;else
if(C(a,So))if(C(a,Sp))if(C(a,Sq))if(C(a,Sr))if(C(a,Ss))if(C(a,St))if(C(a,Su))var
e=1,g=0,Z=0,af=0,o=0;else
var
I=Sv,o=1;else
var
I=Sw,o=1;else
var
I=Sx,o=1;else
var
I=Sy,o=1;else
var
I=Sz,o=1;else
var
I=SA,o=1;else
var
I=SB,o=1;if(o)var
aB=I,af=1}else
var
aB=SC,af=1;else{var
bd=w(a,SD);if(0<=bd)if(0<bd)if(C(a,SE))if(C(a,SF))if(C(a,SG))if(C(a,SH))if(C(a,SI))if(C(a,SJ))if(C(a,SK))var
e=1,g=0,Z=0,af=0,p=0;else
var
K=SL,p=1;else
var
K=SM,p=1;else
var
K=SN,p=1;else
var
K=SO,p=1;else
var
K=SP,p=1;else
var
K=SQ,p=1;else
var
K=SR,p=1;else
var
K=SS,p=1;else
if(C(a,ST))if(C(a,SU))if(C(a,SV))if(C(a,SW))if(C(a,SX))if(C(a,SY))if(C(a,SZ))var
e=1,g=0,Z=0,af=0,p=0;else
var
K=S0,p=1;else
var
K=S1,p=1;else
var
K=S2,p=1;else
var
K=S3,p=1;else
var
K=S4,p=1;else
var
K=S5,p=1;else
var
K=S6,p=1;if(p)var
aB=K,af=1}if(af)var
aA=aB,Z=1}if(Z)var
aw=aA,g=1}if(g)var
ax=aw,e=0}else
var
ax=S7,e=0;else{var
be=w(a,S8);if(0<=be)if(0<be){var
bf=w(a,S9);if(0<=bf)if(0<bf){var
bg=w(a,S_);if(0<=bg)if(0<bg){var
bh=w(a,S$);if(0<=bh)if(0<bh)if(C(a,Ta))if(C(a,Tb))if(C(a,Tc))if(C(a,Td))if(C(a,Te))if(C(a,Tf))var
e=1,h=0,_=0,ag=0,z=0;else
var
X=Tg,z=1;else
var
X=Th,z=1;else
var
X=Ti,z=1;else
var
X=Tj,z=1;else
var
X=Tk,z=1;else
var
X=Tl,z=1;else
var
X=Tm,z=1;else
if(C(a,Tn))if(C(a,To))if(C(a,Tp))if(C(a,Tq))if(C(a,Tr))if(C(a,Ts))if(C(a,Tt))var
e=1,h=0,_=0,ag=0,z=0;else
var
X=Tu,z=1;else
var
X=Tv,z=1;else
var
X=Tw,z=1;else
var
X=Tx,z=1;else
var
X=Ty,z=1;else
var
X=Tz,z=1;else
var
X=TA,z=1;if(z)var
aC=X,ag=1}else
var
aC=TB,ag=1;else{var
bi=w(a,TC);if(0<=bi)if(0<bi)if(C(a,TD))if(C(a,TE))if(C(a,TF))if(C(a,TG))if(C(a,TH))if(C(a,TI))if(C(a,TJ))var
e=1,h=0,_=0,ag=0,q=0;else
var
L=TK,q=1;else
var
L=TL,q=1;else
var
L=TM,q=1;else
var
L=TN,q=1;else
var
L=TO,q=1;else
var
L=TP,q=1;else
var
L=TQ,q=1;else
var
L=TR,q=1;else
if(C(a,TS))if(C(a,TT))if(C(a,TU))if(C(a,TV))if(C(a,TW))if(C(a,TX))if(C(a,TY))var
e=1,h=0,_=0,ag=0,q=0;else
var
L=TZ,q=1;else
var
L=T0,q=1;else
var
L=T1,q=1;else
var
L=T2,q=1;else
var
L=T3,q=1;else
var
L=T4,q=1;else
var
L=T5,q=1;if(q)var
aC=L,ag=1}if(ag)var
aD=aC,_=1}else
var
aD=T6,_=1;else{var
bj=w(a,T7);if(0<=bj)if(0<bj){var
bk=w(a,T8);if(0<=bk)if(0<bk)if(C(a,T9))if(C(a,T_))if(C(a,T$))if(C(a,Ua))if(C(a,Ub))if(C(a,Uc))if(C(a,Ud))var
e=1,h=0,_=0,ah=0,r=0;else
var
M=Ue,r=1;else
var
M=Uf,r=1;else
var
M=Ug,r=1;else
var
M=Uh,r=1;else
var
M=Ui,r=1;else
var
M=Uj,r=1;else
var
M=Uk,r=1;else
var
M=Ul,r=1;else
if(C(a,Um))if(C(a,Un))if(C(a,Uo))if(C(a,Up))if(C(a,Uq))if(C(a,Ur))if(C(a,Us))var
e=1,h=0,_=0,ah=0,r=0;else
var
M=Ut,r=1;else
var
M=Uu,r=1;else
var
M=Uv,r=1;else
var
M=Uw,r=1;else
var
M=Ux,r=1;else
var
M=Uy,r=1;else
var
M=Uz,r=1;if(r)var
aF=M,ah=1}else
var
aF=UA,ah=1;else{var
bl=w(a,UB);if(0<=bl)if(0<bl)if(C(a,UC))if(C(a,UD))if(C(a,UE))if(C(a,UF))if(C(a,UG))if(C(a,UH))if(C(a,UI))var
e=1,h=0,_=0,ah=0,s=0;else
var
R=UJ,s=1;else
var
R=UK,s=1;else
var
R=UL,s=1;else
var
R=UM,s=1;else
var
R=UN,s=1;else
var
R=UO,s=1;else
var
R=UP,s=1;else
var
R=UQ,s=1;else
if(C(a,UR))if(C(a,US))if(C(a,UT))if(C(a,UU))if(C(a,UV))if(C(a,UW))if(C(a,UX))var
e=1,h=0,_=0,ah=0,s=0;else
var
R=UY,s=1;else
var
R=UZ,s=1;else
var
R=U0,s=1;else
var
R=U1,s=1;else
var
R=U2,s=1;else
var
R=U3,s=1;else
var
R=U4,s=1;if(s)var
aF=R,ah=1}if(ah)var
aD=aF,_=1}if(_)var
aE=aD,h=1}else
var
aE=U5,h=1;else{var
bm=w(a,U6);if(0<=bm)if(0<bm){var
bn=w(a,U7);if(0<=bn)if(0<bn){var
bo=w(a,U8);if(0<=bo)if(0<bo)if(C(a,U9))if(C(a,U_))if(C(a,U$))if(C(a,Va))if(C(a,Vb))if(C(a,Vc))if(C(a,Vd))var
e=1,h=0,$=0,ai=0,t=0;else
var
S=Ve,t=1;else
var
S=Vf,t=1;else
var
S=Vg,t=1;else
var
S=Vh,t=1;else
var
S=Vi,t=1;else
var
S=Vj,t=1;else
var
S=Vk,t=1;else
var
S=Vl,t=1;else
if(C(a,Vm))if(C(a,Vn))if(C(a,Vo))if(C(a,Vp))if(C(a,Vq))if(C(a,Vr))if(C(a,Vs))var
e=1,h=0,$=0,ai=0,t=0;else
var
S=Vt,t=1;else
var
S=Vu,t=1;else
var
S=Vv,t=1;else
var
S=Vw,t=1;else
var
S=Vx,t=1;else
var
S=Vy,t=1;else
var
S=Vz,t=1;if(t)var
aG=S,ai=1}else
var
aG=VA,ai=1;else{var
bp=w(a,VB);if(0<=bp)if(0<bp)if(C(a,VC))if(C(a,VD))if(C(a,VE))if(C(a,VF))if(C(a,VG))if(C(a,VH))if(C(a,VI))var
e=1,h=0,$=0,ai=0,u=0;else
var
T=VJ,u=1;else
var
T=VK,u=1;else
var
T=VL,u=1;else
var
T=VM,u=1;else
var
T=VN,u=1;else
var
T=VO,u=1;else
var
T=VP,u=1;else
var
T=VQ,u=1;else
if(C(a,VR))if(C(a,VS))if(C(a,VT))if(C(a,VU))if(C(a,VV))if(C(a,VW))if(C(a,VX))var
e=1,h=0,$=0,ai=0,u=0;else
var
T=VY,u=1;else
var
T=VZ,u=1;else
var
T=V0,u=1;else
var
T=V1,u=1;else
var
T=V2,u=1;else
var
T=V3,u=1;else
var
T=V4,u=1;if(u)var
aG=T,ai=1}if(ai)var
aH=aG,$=1}else
var
aH=V5,$=1;else{var
bq=w(a,V6);if(0<=bq)if(0<bq){var
br=w(a,V7);if(0<=br)if(0<br)if(C(a,V8))if(C(a,V9))if(C(a,V_))if(C(a,V$))if(C(a,Wa))if(C(a,Wb))if(C(a,Wc))var
e=1,h=0,$=0,aj=0,v=0;else
var
U=Wd,v=1;else
var
U=We,v=1;else
var
U=Wf,v=1;else
var
U=Wg,v=1;else
var
U=Wh,v=1;else
var
U=Wi,v=1;else
var
U=Wj,v=1;else
var
U=Wk,v=1;else
if(C(a,Wl))if(C(a,Wm))if(C(a,Wn))if(C(a,Wo))if(C(a,Wp))if(C(a,Wq))if(C(a,Wr))var
e=1,h=0,$=0,aj=0,v=0;else
var
U=Ws,v=1;else
var
U=Wt,v=1;else
var
U=Wu,v=1;else
var
U=Wv,v=1;else
var
U=Ww,v=1;else
var
U=Wx,v=1;else
var
U=Wy,v=1;if(v)var
aI=U,aj=1}else
var
aI=Wz,aj=1;else{var
bs=w(a,WA);if(0<=bs)if(0<bs)if(C(a,WB))if(C(a,WC))if(C(a,WD))if(C(a,WE))if(C(a,WF))if(C(a,WG))if(C(a,WH))var
e=1,h=0,$=0,aj=0,x=0;else
var
V=WI,x=1;else
var
V=WJ,x=1;else
var
V=WK,x=1;else
var
V=WL,x=1;else
var
V=WM,x=1;else
var
V=WN,x=1;else
var
V=WO,x=1;else
var
V=WP,x=1;else
if(C(a,WQ))if(C(a,WR))if(C(a,WS))if(C(a,WT))if(C(a,WU))if(C(a,WV))if(C(a,WW))var
e=1,h=0,$=0,aj=0,x=0;else
var
V=WX,x=1;else
var
V=WY,x=1;else
var
V=WZ,x=1;else
var
V=W0,x=1;else
var
V=W1,x=1;else
var
V=W2,x=1;else
var
V=W3,x=1;if(x)var
aI=V,aj=1}if(aj)var
aH=aI,$=1}if($)var
aE=aH,h=1}if(h)var
ax=aE,e=0}var
a4=e?0:ax;if(a4)kw(ab,a4[1]);else
Q(ab,m(Pi,m(a,Ph)));continue;default:var
bt=J(b);Q(ak,bt);Q(ab,bt);continue}}},W_=function(a,b){function
D(a){return 0===my(c(a))?0===mr(c(a))?0===rp(c(a))?0===rj(c(a))?0===rk(c(a))?0===oB(c(a))?0===lI(c(a))?0===my(c(a))?0===jJ(c(a))?0===rl(c(a))?0===lJ(c(a))?3:d(a):d(a):d(a):d(a):d(a):d(a):d(a):d(a):d(a):d(a):d(a)}function
A(a){B(a,3);return 0===rs(c(a))?3:d(a)}function
k(a){for(;;){B(a,17);if(0===iU(c(a)))continue;return d(a)}}function
l(a){B(a,17);var
b=rh(c(a));if(2<b>>>0)return d(a);switch(b){case
0:return k(a);case
1:if(0===iT(c(a)))for(;;){B(a,16);var
e=kg(c(a));if(0===e)for(;;){B(a,15);if(0===iU(c(a)))continue;return d(a)}if(1===e)continue;return d(a)}return d(a);default:for(;;){B(a,16);var
f=kg(c(a));if(0===f)for(;;){B(a,15);if(0===iU(c(a)))continue;return d(a)}if(1===f)continue;return d(a)}}}function
m(a){B(a,18);var
b=kY(c(a));if(2<b>>>0)return d(a);switch(b){case
0:return k(a);case
1:for(;;){B(a,18);var
e=kY(c(a));if(2<e>>>0)return d(a);switch(e){case
0:return k(a);case
1:continue;default:return l(a)}}default:return l(a)}}function
n(a){for(;;){B(a,18);var
b=mv(c(a));if(3<b>>>0)return d(a);switch(b){case
0:return k(a);case
1:return m(a);case
2:continue;default:return l(a)}}}function
z(a){B(a,17);var
b=ml(c(a));if(0===b)return k(a);if(1===b)for(;;){B(a,14);var
e=ml(c(a));if(0===e)for(;;){B(a,13);if(0===iU(c(a)))continue;return d(a)}if(1===e)continue;return d(a)}return d(a)}function
y(a){B(a,17);var
b=mu(c(a));if(0===b)return k(a);if(1===b)for(;;){B(a,10);var
e=mu(c(a));if(0===e)for(;;){B(a,9);if(0===iU(c(a)))continue;return d(a)}if(1===e)continue;return d(a)}return d(a)}function
x(a){B(a,17);var
b=mD(c(a));if(0===b)return k(a);if(1===b)for(;;){B(a,8);var
e=mD(c(a));if(0===e)for(;;){B(a,7);if(0===iU(c(a)))continue;return d(a)}if(1===e)continue;return d(a)}return d(a)}function
f(a){B(a,18);var
b=kg(c(a));if(0===b)return k(a);if(1===b)for(;;){B(a,18);var
e=kg(c(a));if(0===e)return k(a);if(1===e)continue;return d(a)}return d(a)}function
w(a){for(;;){B(a,18);var
b=mB(c(a));if(2<b>>>0)return d(a);switch(b){case
0:return k(a);case
1:return f(a);default:continue}}}function
v(a){for(;;){B(a,11);if(0===iU(c(a)))continue;return d(a)}}function
u(a){for(;;){B(a,12);var
b=rn(c(a));if(3<b>>>0)return d(a);switch(b){case
0:return v(a);case
1:return f(a);case
2:continue;default:for(;;){B(a,11);var
e=mB(c(a));if(2<e>>>0)return d(a);switch(e){case
0:return v(a);case
1:return f(a);default:continue}}}}}function
t(a){B(a,18);var
b=oz(c(a));if(7<b>>>0)return d(a);switch(b){case
0:return k(a);case
1:return m(a);case
2:return u(a);case
3:return w(a);case
4:return x(a);case
5:return l(a);case
6:return y(a);default:return z(a)}}function
s(a){for(;;){B(a,18);var
b=kY(c(a));if(2<b>>>0)return d(a);switch(b){case
0:return k(a);case
1:continue;default:return l(a)}}}function
r(a){return 0===iT(c(a))?s(a):d(a)}function
e(e,a){for(;;){B(a,32);var
b=K(c(a));if(0===b)continue;return 1===b?e<50?p(e+1|0,a):ir(p,[0,a]):d(a)}}function
p(b,a){if(0===jJ(c(a))){var
f=j4(c(a));if(0===f)return 0===ij(c(a))?0===ij(c(a))?0===ij(c(a))?b<50?e(b+1|0,a):ir(e,[0,a]):d(a):d(a):d(a);if(1===f){if(0===ij(c(a)))for(;;){var
g=j3(c(a));if(0===g)continue;return 1===g?b<50?e(b+1|0,a):ir(e,[0,a]):d(a)}return d(a)}return d(a)}return d(a)}function
i(a){return kd(e(0,a))}function
j(a){return kd(p(0,a))}function
iB(h){var
g=c(h),o=jL<g?ec<g?ge<g?dD<g?e_<g?bK<g?fF<g?cz<g?1:6:dI<g?eK<g?1:6:eN<g?1:6:bp<g?aR<g?aH<g?1:6:dj<g?1:6:dS<g?cg<g?1:6:aa<g?1:6:eh<g?dx<g?cD<g?d$<g?dG<g?1:6:fl<g?1:6:gm<g?cv<g?1:6:an<g?1:6:cC<g?fG<g?d9<g?1:6:gs<g?1:6:b8<g?fd<g?1:6:fR<g?1:6:eq<g?b9<g?eO<g?ah<g?1:6:ex<g?1:6:fM<g?gc<g?1:6:f9<g?1:6:ar<g?cr<g?au<g?1:6:eA<g?1:6:ai<g?eS<g?1:6:e$<g?1:6:cw<g?dX<g?a_<g?cH<g?as<g?fu<g?1:6:fT<g?1:6:e4<g?fo<g?1:6:f8<g?1:6:ay<g?bA<g?d6<g?1:6:aE<g?1:6:a3<g?eB<g?1:6:cN<g?1:6:cV<g?f0<g?f3<g?fc<g?1:6:bD<g?1:6:bT<g?aS<g?1:6:ad<g?1:6:ca<g?a4<g?bN<g?1:6:gA<g?1:6:gr<g?f4<g?1:6:cb<g?1:6:bJ<g?am<g?cx<g?dL<g?c$<g?1:6:dZ<g?1:6:ew<g?b7<g?1:6:eD<g?1:6:ed<g?fV<g?eX<g?1:6:aq<g?1:6:eP<g?bP<g?1:6:fm<g?1:6:bS<g?cW<g?fJ<g?bC<g?1:6:aB<g?1:6:gv<g?bo<g?1:6:a6<g?1:6:fi<g?ak<g?cy<g?1:6:a$<g?1:6:aV<g?ft<g?1:6:b3<g?1:6:f2<g?$<g?c5<g?d2<g?b6<g?du<g?f_<g?1:6:aG<g?1:6:aT<g?e8<g?1:6:ch<g?1:6:cJ<g?e7<g?fp<g?1:6:br<g?1:6:dQ<g?cF<g?1:6:aw<g?1:6:c6<g?cE<g?bF<g?dw<g?1:6:eu<g?1:6:dt<g?bg<g?1:6:eC<g?1:6:nN<g?dY<g?aJ<g?1:6:dh<g?1:6:eI<g?nC<g?1:6:fk<g?1:6:n0<g?dB<g?fU<g?bL<g?dr<g?1:6:gn<g?1:6:cA<g?fP<g?1:6:e1<g?1:6:mM<g?ag<g?nd<g?1:6:eo<g?1:6:nY<g?nx<g?1:6:m6<g?1:6:bO<g?nZ<g?cO<g?f7<g?1:6:nm<g?1:6:m_<g?nG<g?1:6:dn<g?1:6:fq<g?ga<g?af<g?1:6:bh<g?1:6:el<g?cU<g?1:6:b5<g?1:6:fr<g?b2<g?fx<g?ds<g?T<g?aA<g?1:6:cI<g?1:6:ne<g?bB<g?1:6:no<g?1:6:aY<g?bU<g?dy<g?1:6:bQ<g?1:6:gd<g?cn<g?1:6:be<g?1:6:c1<g?fy<g?a8<g?go<g?1:6:fz<g?1:6:a1<g?fw<g?1:6:gl<g?1:6:e2<g?ek<g?gw<g?1:6:gq<g?1:6:fE<g?Z<g?1:6:fW<g?1:6:c_<g?e3<g?W<g?aO<g?dT<g?1:6:cj<g?1:6:fa<g?S<g?1:6:cR<g?1:6:ea<g?_<g?eM<g?1:6:bk<g?1:6:ap<g?dd<g?1:6:fB<g?1:6:by<g?aL<g?cT<g?ci<g?1:6:a9<g?1:6:c4<g?al<g?1:6:bR<g?1:6:dM<g?fA<g?X<g?1:6:cS<g?1:6:L<g?dv<g?1:6:dN<g?1:6:fj<g?bf<g?dp<g?ff<g?cs<g?bY<g?aQ<g?co<g?1:6:dU<g?1:6:cl<g?cZ<g?1:6:bl<g?1:6:dV<g?b0<g?bH<g?1:6:dg<g?1:6:jU<g?jR<g?1:2:fb<g?1:6:d4<g?eQ<g?e6<g?f6<g?1:6:dH<g?1:6:fC<g?fK<g?1:6:ac<g?1:6:cd<g?cp<g?dC<g?1:6:et<g?1:6:gt<g?eL<g?1:6:aM<g?1:6:bc<g?nX<g?fS<g?at<g?fn<g?1:6:U<g?1:6:dc<g?f$<g?1:6:fX<g?1:6:fg<g?ck<g?nj<g?1:6:df<g?1:6:e0<g?eb<g?1:6:d3<g?1:6:bb<g?d1<g?fZ<g?dE<g?1:6:cG<g?1:6:dR<g?aI<g?1:6:b_<g?1:6:ef<g?eV<g?nw<g?1:6:ae<g?1:6:ep<g?eY<g?1:6:eG<g?1:6:a5<g?nP<g?aU<g?gz<g?bz<g?dP<g?1:6:di<g?1:6:b1<g?na<g?1:6:ni<g?1:6:m1<g?em<g?fI<g?1:6:cq<g?1:6:nR<g?nE<g?1:6:mN<g?1:6:d0<g?nL<g?nq<g?nQ<g?1:6:mW<g?1:6:bM<g?nK<g?1:6:mR<g?1:6:nr<g?cK<g?d5<g?1:6:np<g?1:6:gp<g?mV<g?1:6:mZ<g?1:6:ng<g?e9<g?mO<g?ez<g?mK<g?1:6:m$<g?1:6:a2<g?f5<g?1:6:m4<g?1:6:dF<g?nT<g?mQ<g?1:6:bW<g?1:6:n2<g?bm<g?1:6:nV<g?1:6:nv<g?m5<g?bG<g?bI<g?1:6:mL<g?1:6:nA<g?nh<g?1:6:mY<g?1:6:fs<g?bE<g?nF<g?1:6:eE<g?1:6:cc<g?en<g?1:6:bt<g?1:6:bw<g?aF<g?bx<g?bj<g?cX<g?f1<g?gh<g?1:6:V<g?1:6:m0<g?mU<g?1:6:dk<g?1:6:ny<g?ao<g?nb<g?1:6:eU<g?1:6:cM<g?mT<g?1:6:dm<g?1:6:fO<g?bv<g?dJ<g?gB<g?1:6:c8<g?1:6:bd<g?d7<g?1:6:fe<g?1:6:cL<g?dA<g?fY<g?1:6:cB<g?1:6:c9<g?aZ<g?1:6:da<g?1:6:ct<g?aD<g?fD<g?cm<g?d8<g?1:6:cu<g?1:6:n1<g?e5<g?1:6:bu<g?1:6:gy<g?a7<g?er<g?1:6:bX<g?1:6:eW<g?mP<g?1:6:aC<g?1:6:ee<g?gu<g?jT<g?jP<g?1:2:d_<g?1:6:ej<g?eR<g?1:6:fv<g?1:6:cQ<g?cY<g?fN<g?1:6:bs<g?1:6:aP<g?bZ<g?1:6:aj<g?1:6:fL<g?ns<g?aN<g?nt<g?c3<g?gf<g?1:6:eg<g?1:6:gb<g?dW<g?1:6:aK<g?1:6:fH<g?es<g?b4<g?1:6:bn<g?1:6:cP<g?ei<g?1:6:b$<g?1:6:bV<g?gj<g?fh<g?m3<g?1:6:ce<g?1:6:c2<g?dz<g?1:6:bi<g?1:6:ab<g?bq<g?dK<g?1:6:az<g?1:6:gi<g?c0<g?1:6:cf<g?1:6:eF<g?dl<g?eJ<g?gx<g?dO<g?1:6:db<g?1:6:de<g?aW<g?1:6:gk<g?1:6:gg<g?av<g?Y<g?1:6:ey<g?1:6:dq<g?fQ<g?1:6:eT<g?1:6:c7<g?ba<g?a0<g?ax<g?1:6:eH<g?1:6:eZ<g?aX<g?1:6:ev<g?1:6:jM<g?jS<g?jO<g?1:2:jN<g?1:2:jj<g?jm<g?1:3:jV<g?1:2:G(MK,g+1|0)-1|0;if(39<o>>>0)return d(h);switch(o){case
0:return 63;case
1:return 64;case
2:B(h,1);if(0===jI(c(h)))for(;;){B(h,1);if(0===jI(c(h)))continue;return d(h)}return d(h);case
3:return 0;case
4:B(h,0);return 0===jb(c(h))?0:d(h);case
5:return 6;case
6:B(h,32);var
p=K(c(h));return 0===p?i(h):1===p?j(h):d(h);case
7:B(h,64);if(0===lI(c(h))){var
q=c(h),jn=lr<q?l0<q?-1:0:-1;if(0===jn){if(0===lJ(c(h))){if(0===lI(c(h))){var
v=c(h),jo=lh<v?kq<v?-1:0:-1;return 0===jo?0===rb(c(h))?33:d(h):d(h)}return d(h)}return d(h)}return d(h)}return d(h);case
8:return 57;case
9:return 40;case
10:return 41;case
11:B(h,54);return 0===rr(c(h))?4:d(h);case
12:return 61;case
13:return 45;case
14:B(h,62);var
C=oC(c(h));if(3<C>>>0)return d(h);switch(C){case
0:for(;;){var
E=oC(c(h));if(3<E>>>0)return d(h);switch(E){case
0:continue;case
1:return r(h);case
2:return t(h);default:return n(h)}}case
1:return r(h);case
2:return t(h);default:return n(h)}case
15:B(h,43);var
F=kZ(c(h));return 0===F?0===q8(c(h))?42:d(h):1===F?s(h):d(h);case
16:B(h,64);var
H=mA(c(h));if(0===H){B(h,2);var
I=mo(c(h));if(2<I>>>0)return d(h);switch(I){case
0:for(;;){var
J=mo(c(h));if(2<J>>>0)return d(h);switch(J){case
0:continue;case
1:return A(h);default:return D(h)}}case
1:return A(h);default:return D(h)}}return 1===H?5:d(h);case
17:B(h,18);var
N=oz(c(h));if(7<N>>>0)return d(h);switch(N){case
0:return k(h);case
1:return m(h);case
2:return u(h);case
3:return w(h);case
4:return x(h);case
5:return l(h);case
6:return y(h);default:return z(h)}case
18:B(h,18);var
O=mv(c(h));if(3<O>>>0)return d(h);switch(O){case
0:return k(h);case
1:return m(h);case
2:return n(h);default:return l(h)}case
19:return 46;case
20:return 44;case
21:return 50;case
22:B(h,52);var
P=c(h),jp=61<P?62<P?-1:0:-1;return 0===jp?59:d(h);case
23:return 51;case
24:return 47;case
25:return 34;case
26:B(h,64);if(0===jJ(c(h))){var
Q=j4(c(h));if(0===Q)return 0===ij(c(h))?0===ij(c(h))?0===ij(c(h))?i(h):d(h):d(h):d(h);if(1===Q){if(0===ij(c(h)))for(;;){var
R=j3(c(h));if(0===R)continue;return 1===R?i(h):d(h)}return d(h)}return d(h)}return d(h);case
27:return 35;case
28:B(h,32);var
ii=i$(c(h));if(2<ii>>>0)return d(h);switch(ii){case
0:return i(h);case
1:return j(h);default:B(h,32);var
ik=mt(c(h));if(2<ik>>>0)return d(h);switch(ik){case
0:return i(h);case
1:return j(h);default:B(h,19);var
il=K(c(h));return 0===il?i(h):1===il?j(h):d(h)}}case
29:B(h,32);var
io=j5(c(h));if(2<io>>>0)return d(h);switch(io){case
0:return i(h);case
1:return j(h);default:B(h,32);var
ip=j5(c(h));if(2<ip>>>0)return d(h);switch(ip){case
0:return i(h);case
1:return j(h);default:B(h,32);var
iq=ja(c(h));if(2<iq>>>0)return d(h);switch(iq){case
0:return i(h);case
1:return j(h);default:B(h,20);var
ir=im(c(h));if(2<ir>>>0)return d(h);switch(ir){case
0:return i(h);case
1:return j(h);default:B(h,32);var
is=i4(c(h));if(2<is>>>0)return d(h);switch(is){case
0:return i(h);case
1:return j(h);default:B(h,32);var
it=i$(c(h));if(2<it>>>0)return d(h);switch(it){case
0:return i(h);case
1:return j(h);default:B(h,21);var
iu=K(c(h));return 0===iu?i(h):1===iu?j(h):d(h)}}}}}}case
30:B(h,32);var
iv=oD(c(h));if(2<iv>>>0)return d(h);switch(iv){case
0:return i(h);case
1:return j(h);default:B(h,32);var
iw=lH(c(h));if(2<iw>>>0)return d(h);switch(iw){case
0:return i(h);case
1:return j(h);default:B(h,32);var
ix=iA(c(h));if(2<ix>>>0)return d(h);switch(ix){case
0:return i(h);case
1:return j(h);default:B(h,32);var
iy=mt(c(h));if(2<iy>>>0)return d(h);switch(iy){case
0:return i(h);case
1:return j(h);default:B(h,22);var
iz=K(c(h));return 0===iz?i(h):1===iz?j(h):d(h)}}}}case
31:B(h,32);var
iB=i4(c(h));if(2<iB>>>0)return d(h);switch(iB){case
0:return i(h);case
1:return j(h);default:B(h,32);var
iC=ja(c(h));if(2<iC>>>0)return d(h);switch(iC){case
0:return i(h);case
1:return j(h);default:B(h,32);var
iD=kj(c(h));if(2<iD>>>0)return d(h);switch(iD){case
0:return i(h);case
1:return j(h);default:B(h,32);var
iE=im(c(h));if(2<iE>>>0)return d(h);switch(iE){case
0:return i(h);case
1:return j(h);default:B(h,23);var
iF=K(c(h));return 0===iF?i(h):1===iF?j(h):d(h)}}}}case
32:B(h,32);var
iG=jc(c(h));if(2<iG>>>0)return d(h);switch(iG){case
0:return i(h);case
1:return j(h);default:B(h,32);var
a=c(h),iH=35<a?ib<a?gI<a?hz<a?-1:dG<a?e_<a?aH<a?bK<a?eK<a?fF<a?cz<a?hX<a?0:-1:0:-1:eN<a?dI<a?0:-1:0:-1:cg<a?bp<a?dj<a?aR<a?0:-1:0:-1:aa<a?dS<a?0:-1:0:-1:co<a?ec<a?hC<a?gJ<a?cb<a?gr<a?fu<a?dD<a?ah<a?eh<a?d9<a?dx<a?cv<a?cD<a?fl<a?d$<a?0:-1:0:-1:an<a?gm<a?0:-1:0:-1:fd<a?cC<a?gs<a?fG<a?0:-1:0:-1:fR<a?b8<a?0:-1:0:-1:au<a?eq<a?gc<a?b9<a?ex<a?eO<a?0:-1:0:-1:f9<a?fM<a?0:-1:0:-1:eS<a?ar<a?eA<a?cr<a?0:-1:0:-1:e$<a?ai<a?0:-1:0:-1:fc<a?dX<a?d6<a?a_<a?fo<a?cH<a?fT<a?as<a?0:-1:0:-1:f8<a?e4<a?0:-1:0:-1:eB<a?ay<a?aE<a?bA<a?0:-1:0:-1:cN<a?a3<a?0:-1:0:-1:bN<a?cV<a?aS<a?f0<a?bD<a?f3<a?0:-1:0:-1:ad<a?bT<a?0:-1:0:-1:hi<a?ca<a?gA<a?a4<a?0:-1:0:-1:f4<a?h5<a?0:-1:0:-1:b3<a?aV<a?fm<a?eP<a?eD<a?ew<a?dZ<a?dL<a?c$<a?cw<a?0:-1:0:-1:b7<a?cx<a?0:-1:0:-1:aq<a?fV<a?eX<a?am<a?0:-1:0:-1:bP<a?ed<a?0:-1:0:-1:a6<a?gv<a?aB<a?fJ<a?bC<a?bJ<a?0:-1:0:-1:bo<a?cW<a?0:-1:0:-1:a$<a?ak<a?cy<a?bS<a?0:-1:0:-1:ft<a?fi<a?0:-1:0:-1:aw<a?dQ<a?ch<a?aT<a?aG<a?du<a?f_<a?ge<a?0:-1:0:-1:e8<a?b6<a?0:-1:0:-1:br<a?e7<a?fp<a?d2<a?0:-1:0:-1:cF<a?cJ<a?0:-1:0:-1:eC<a?dt<a?eu<a?bF<a?dw<a?c5<a?0:-1:0:-1:bg<a?cE<a?0:-1:0:-1:hp<a?hQ<a?ig<a?c6<a?0:-1:0:-1:gP<a?gG<a?0:-1:0:-1:hS<a?gX<a?h0<a?hl<a?gn<a?bL<a?dh<a?dY<a?hA<a?gU<a?hW<a?gY<a?0:-1:0:-1:aJ<a?hH<a?0:-1:0:-1:fk<a?eI<a?g$<a?g2<a?0:-1:0:-1:dr<a?$<a?0:-1:0:-1:hB<a?h7<a?e1<a?cA<a?fP<a?fU<a?0:-1:0:-1:gE<a?dB<a?0:-1:0:-1:eo<a?gL<a?hM<a?ag<a?0:-1:0:-1:hD<a?id<a?0:-1:0:-1:bh<a?ga<a?hP<a?gN<a?f7<a?gO<a?hk<a?g5<a?0:-1:0:-1:h_<a?cO<a?0:-1:0:-1:dn<a?hK<a?ha<a?hU<a?0:-1:0:-1:af<a?bO<a?0:-1:0:-1:gK<a?g6<a?b5<a?el<a?cU<a?fq<a?0:-1:0:-1:hI<a?f2<a?0:-1:0:-1:cI<a?T<a?aA<a?hL<a?0:-1:0:-1:bB<a?ds<a?0:-1:0:-1:cj<a?aO<a?fw<a?fy<a?cn<a?aY<a?dy<a?fx<a?g4<a?hy<a?0:-1:0:-1:bQ<a?bU<a?0:-1:0:-1:go<a?b2<a?be<a?gd<a?0:-1:0:-1:fz<a?a8<a?0:-1:0:-1:ho<a?e2<a?gw<a?c1<a?gl<a?a1<a?0:-1:0:-1:gq<a?ek<a?0:-1:0:-1:fW<a?fE<a?Z<a?hc<a?0:-1:0:-1:dT<a?fr<a?0:-1:0:-1:ci<a?c_<a?bk<a?_<a?cR<a?fa<a?S<a?W<a?0:-1:0:-1:eM<a?e3<a?0:-1:0:-1:gZ<a?ap<a?dd<a?ea<a?0:-1:0:-1:fB<a?h$<a?0:-1:0:-1:X<a?by<a?al<a?aL<a?a9<a?cT<a?0:-1:0:-1:bR<a?c4<a?0:-1:0:-1:dv<a?dM<a?cS<a?fA<a?0:-1:0:-1:dN<a?L<a?0:-1:0:-1:V<a?f1<a?ie<a?bb<a?ac<a?fC<a?fb<a?hY<a?bH<a?cs<a?cZ<a?bY<a?dU<a?aQ<a?0:-1:0:-1:bl<a?cl<a?0:-1:0:-1:dg<a?hj<a?gF<a?b0<a?0:-1:0:-1:gQ<a?dV<a?0:-1:0:-1:g3<a?he<a?gM<a?e6<a?f6<a?ff<a?0:-1:0:-1:hG<a?hx<a?0:-1:0:-1:dH<a?hJ<a?g7<a?gH<a?0:-1:0:-1:fK<a?eQ<a?0:-1:0:-1:fX<a?dc<a?aM<a?gt<a?et<a?cp<a?dC<a?d4<a?0:-1:0:-1:eL<a?cd<a?0:-1:0:-1:U<a?at<a?fn<a?dp<a?0:-1:0:-1:f$<a?fS<a?0:-1:0:-1:dE<a?bc<a?eb<a?fg<a?df<a?ck<a?0:-1:0:-1:d3<a?e0<a?0:-1:0:-1:aI<a?d1<a?cG<a?fZ<a?0:-1:0:-1:b_<a?dR<a?0:-1:0:-1:hs<a?gp<a?gV<a?gz<a?eY<a?ef<a?gT<a?ht<a?h2<a?hR<a?0:-1:0:-1:ae<a?eV<a?0:-1:0:-1:dP<a?bf<a?eG<a?ep<a?0:-1:0:-1:di<a?bz<a?0:-1:0:-1:hd<a?bM<a?fI<a?aU<a?gS<a?b1<a?0:-1:0:-1:cq<a?em<a?0:-1:0:-1:h1<a?cK<a?d5<a?d0<a?0:-1:0:-1:hZ<a?ic<a?0:-1:0:-1:hV<a?hu<a?ih<a?a2<a?h8<a?ez<a?hr<a?a5<a?0:-1:0:-1:f5<a?h6<a?0:-1:0:-1:bW<a?hN<a?h3<a?e9<a?0:-1:0:-1:bm<a?dF<a?0:-1:0:-1:eE<a?bE<a?bI<a?hO<a?gR<a?hn<a?0:-1:0:-1:hf<a?bG<a?0:-1:0:-1:bt<a?cc<a?en<a?fs<a?0:-1:0:-1:gh<a?fj<a?0:-1:0:-1:eg<a?c3<a?cu<a?cm<a?c8<a?dJ<a?g1<a?g9<a?dk<a?hF<a?hq<a?cX<a?0:-1:0:-1:hw<a?bj<a?0:-1:0:-1:dm<a?cM<a?eU<a?ao<a?0:-1:0:-1:gB<a?bx<a?0:-1:0:-1:cB<a?dA<a?fe<a?bd<a?d7<a?bv<a?0:-1:0:-1:fY<a?fO<a?0:-1:0:-1:da<a?c9<a?aZ<a?cL<a?0:-1:0:-1:d8<a?aF<a?0:-1:0:-1:d_<a?g0<a?bX<a?a7<a?bu<a?h4<a?e5<a?fD<a?0:-1:0:-1:er<a?aD<a?0:-1:0:-1:aC<a?eW<a?hT<a?gy<a?0:-1:0:-1:gW<a?ct<a?0:-1:0:-1:bs<a?cY<a?fv<a?ej<a?eR<a?gu<a?0:-1:0:-1:fN<a?ee<a?0:-1:0:-1:aj<a?aP<a?bZ<a?cQ<a?0:-1:0:-1:gf<a?bw<a?0:-1:0:-1:aW<a?eJ<a?dz<a?gj<a?bn<a?es<a?aK<a?gb<a?dW<a?hb<a?0:-1:0:-1:b4<a?aN<a?0:-1:0:-1:b$<a?cP<a?ei<a?fH<a?0:-1:0:-1:ce<a?fh<a?0:-1:0:-1:c0<a?ab<a?dK<a?bV<a?bi<a?c2<a?0:-1:0:-1:az<a?bq<a?0:-1:0:-1:dO<a?fL<a?cf<a?gi<a?0:-1:0:-1:db<a?gx<a?0:-1:0:-1:ia<a?hE<a?fQ<a?gg<a?Y<a?dl<a?gk<a?de<a?0:-1:0:-1:ey<a?av<a?0:-1:0:-1:ax<a?eF<a?eT<a?dq<a?0:-1:0:-1:h9<a?a0<a?0:-1:0:-1:ev<a?eZ<a?eH<a?hm<a?g8<a?g_<a?0:-1:0:-1:aX<a?ba<a?0:-1:0:-1:hv<a?hh<a?hg<a?c7<a?0:-1:0:-1:gC<a?gD<a?0:-1:0:-1:G(Nn,a+M|0)-1|0:-1;if(2<iH>>>0)return d(h);switch(iH){case
0:return i(h);case
1:return j(h);default:B(h,32);var
iI=im(c(h));if(2<iI>>>0)return d(h);switch(iI){case
0:return i(h);case
1:return j(h);default:B(h,32);var
iJ=kX(c(h));if(2<iJ>>>0)return d(h);switch(iJ){case
0:return i(h);case
1:return j(h);default:B(h,24);var
iK=K(c(h));return 0===iK?i(h):1===iK?j(h):d(h)}}}}case
33:B(h,32);var
iL=kh(c(h));if(2<iL>>>0)return d(h);switch(iL){case
0:return i(h);case
1:return j(h);default:B(h,32);var
b=c(h),iM=35<b?ib<b?gI<b?hz<b?-1:dG<b?e_<b?aH<b?bK<b?eK<b?fF<b?cz<b?hX<b?0:-1:0:-1:eN<b?dI<b?0:-1:0:-1:cg<b?bp<b?dj<b?aR<b?0:-1:0:-1:aa<b?dS<b?0:-1:0:-1:co<b?ec<b?hC<b?gJ<b?cb<b?gr<b?fu<b?dD<b?ah<b?eh<b?d9<b?dx<b?cv<b?cD<b?fl<b?d$<b?0:-1:0:-1:an<b?gm<b?0:-1:0:-1:fd<b?cC<b?gs<b?fG<b?0:-1:0:-1:fR<b?b8<b?0:-1:0:-1:au<b?eq<b?gc<b?b9<b?ex<b?eO<b?0:-1:0:-1:f9<b?fM<b?0:-1:0:-1:eS<b?ar<b?eA<b?cr<b?0:-1:0:-1:e$<b?ai<b?0:-1:0:-1:fc<b?dX<b?d6<b?a_<b?fo<b?cH<b?fT<b?as<b?0:-1:0:-1:f8<b?e4<b?0:-1:0:-1:eB<b?ay<b?aE<b?bA<b?0:-1:0:-1:cN<b?a3<b?0:-1:0:-1:bN<b?cV<b?aS<b?f0<b?bD<b?f3<b?0:-1:0:-1:ad<b?bT<b?0:-1:0:-1:hi<b?ca<b?gA<b?a4<b?0:-1:0:-1:f4<b?h5<b?0:-1:0:-1:b3<b?aV<b?fm<b?eP<b?eD<b?ew<b?dZ<b?dL<b?c$<b?cw<b?0:-1:0:-1:b7<b?cx<b?0:-1:0:-1:aq<b?fV<b?eX<b?am<b?0:-1:0:-1:bP<b?ed<b?0:-1:0:-1:a6<b?gv<b?aB<b?fJ<b?bC<b?bJ<b?0:-1:0:-1:bo<b?cW<b?0:-1:0:-1:a$<b?ak<b?cy<b?bS<b?0:-1:0:-1:ft<b?fi<b?0:-1:0:-1:aw<b?dQ<b?ch<b?aT<b?aG<b?du<b?f_<b?ge<b?0:-1:0:-1:e8<b?b6<b?0:-1:0:-1:br<b?e7<b?fp<b?d2<b?0:-1:0:-1:cF<b?cJ<b?0:-1:0:-1:eC<b?dt<b?eu<b?bF<b?dw<b?c5<b?0:-1:0:-1:bg<b?cE<b?0:-1:0:-1:hp<b?hQ<b?ig<b?c6<b?0:-1:0:-1:gP<b?gG<b?0:-1:0:-1:hS<b?gX<b?h0<b?hl<b?gn<b?bL<b?dh<b?dY<b?hA<b?gU<b?hW<b?gY<b?0:-1:0:-1:aJ<b?hH<b?0:-1:0:-1:fk<b?eI<b?g$<b?g2<b?0:-1:0:-1:dr<b?$<b?0:-1:0:-1:hB<b?h7<b?e1<b?cA<b?fP<b?fU<b?0:-1:0:-1:gE<b?dB<b?0:-1:0:-1:eo<b?gL<b?hM<b?ag<b?0:-1:0:-1:hD<b?id<b?0:-1:0:-1:bh<b?ga<b?hP<b?gN<b?f7<b?gO<b?hk<b?g5<b?0:-1:0:-1:h_<b?cO<b?0:-1:0:-1:dn<b?hK<b?ha<b?hU<b?0:-1:0:-1:af<b?bO<b?0:-1:0:-1:gK<b?g6<b?b5<b?el<b?cU<b?fq<b?0:-1:0:-1:hI<b?f2<b?0:-1:0:-1:cI<b?T<b?aA<b?hL<b?0:-1:0:-1:bB<b?ds<b?0:-1:0:-1:cj<b?aO<b?fw<b?fy<b?cn<b?aY<b?dy<b?fx<b?g4<b?hy<b?0:-1:0:-1:bQ<b?bU<b?0:-1:0:-1:go<b?b2<b?be<b?gd<b?0:-1:0:-1:fz<b?a8<b?0:-1:0:-1:ho<b?e2<b?gw<b?c1<b?gl<b?a1<b?0:-1:0:-1:gq<b?ek<b?0:-1:0:-1:fW<b?fE<b?Z<b?hc<b?0:-1:0:-1:dT<b?fr<b?0:-1:0:-1:ci<b?c_<b?bk<b?_<b?cR<b?fa<b?S<b?W<b?0:-1:0:-1:eM<b?e3<b?0:-1:0:-1:gZ<b?ap<b?dd<b?ea<b?0:-1:0:-1:fB<b?h$<b?0:-1:0:-1:X<b?by<b?al<b?aL<b?a9<b?cT<b?0:-1:0:-1:bR<b?c4<b?0:-1:0:-1:dv<b?dM<b?cS<b?fA<b?0:-1:0:-1:dN<b?L<b?0:-1:0:-1:V<b?f1<b?ie<b?bb<b?ac<b?fC<b?fb<b?hY<b?bH<b?cs<b?cZ<b?bY<b?dU<b?aQ<b?0:-1:0:-1:bl<b?cl<b?0:-1:0:-1:dg<b?hj<b?gF<b?b0<b?0:-1:0:-1:gQ<b?dV<b?0:-1:0:-1:g3<b?he<b?gM<b?e6<b?f6<b?ff<b?0:-1:0:-1:hG<b?hx<b?0:-1:0:-1:dH<b?hJ<b?g7<b?gH<b?0:-1:0:-1:fK<b?eQ<b?0:-1:0:-1:fX<b?dc<b?aM<b?gt<b?et<b?cp<b?dC<b?d4<b?0:-1:0:-1:eL<b?cd<b?0:-1:0:-1:U<b?at<b?fn<b?dp<b?0:-1:0:-1:f$<b?fS<b?0:-1:0:-1:dE<b?bc<b?eb<b?fg<b?df<b?ck<b?0:-1:0:-1:d3<b?e0<b?0:-1:0:-1:aI<b?d1<b?cG<b?fZ<b?0:-1:0:-1:b_<b?dR<b?0:-1:0:-1:hs<b?gp<b?gV<b?gz<b?eY<b?ef<b?gT<b?ht<b?h2<b?hR<b?0:-1:0:-1:ae<b?eV<b?0:-1:0:-1:dP<b?bf<b?eG<b?ep<b?0:-1:0:-1:di<b?bz<b?0:-1:0:-1:hd<b?bM<b?fI<b?aU<b?gS<b?b1<b?0:-1:0:-1:cq<b?em<b?0:-1:0:-1:h1<b?cK<b?d5<b?d0<b?0:-1:0:-1:hZ<b?ic<b?0:-1:0:-1:hV<b?hu<b?ih<b?a2<b?h8<b?ez<b?hr<b?a5<b?0:-1:0:-1:f5<b?h6<b?0:-1:0:-1:bW<b?hN<b?h3<b?e9<b?0:-1:0:-1:bm<b?dF<b?0:-1:0:-1:eE<b?bE<b?bI<b?hO<b?gR<b?hn<b?0:-1:0:-1:hf<b?bG<b?0:-1:0:-1:bt<b?cc<b?en<b?fs<b?0:-1:0:-1:gh<b?fj<b?0:-1:0:-1:eg<b?c3<b?cu<b?cm<b?c8<b?dJ<b?g1<b?g9<b?dk<b?hF<b?hq<b?cX<b?0:-1:0:-1:hw<b?bj<b?0:-1:0:-1:dm<b?cM<b?eU<b?ao<b?0:-1:0:-1:gB<b?bx<b?0:-1:0:-1:cB<b?dA<b?fe<b?bd<b?d7<b?bv<b?0:-1:0:-1:fY<b?fO<b?0:-1:0:-1:da<b?c9<b?aZ<b?cL<b?0:-1:0:-1:d8<b?aF<b?0:-1:0:-1:d_<b?g0<b?bX<b?a7<b?bu<b?h4<b?e5<b?fD<b?0:-1:0:-1:er<b?aD<b?0:-1:0:-1:aC<b?eW<b?hT<b?gy<b?0:-1:0:-1:gW<b?ct<b?0:-1:0:-1:bs<b?cY<b?fv<b?ej<b?eR<b?gu<b?0:-1:0:-1:fN<b?ee<b?0:-1:0:-1:aj<b?aP<b?bZ<b?cQ<b?0:-1:0:-1:gf<b?bw<b?0:-1:0:-1:aW<b?eJ<b?dz<b?gj<b?bn<b?es<b?aK<b?gb<b?dW<b?hb<b?0:-1:0:-1:b4<b?aN<b?0:-1:0:-1:b$<b?cP<b?ei<b?fH<b?0:-1:0:-1:ce<b?fh<b?0:-1:0:-1:c0<b?ab<b?dK<b?bV<b?bi<b?c2<b?0:-1:0:-1:az<b?bq<b?0:-1:0:-1:dO<b?fL<b?cf<b?gi<b?0:-1:0:-1:db<b?gx<b?0:-1:0:-1:ia<b?hE<b?fQ<b?gg<b?Y<b?dl<b?gk<b?de<b?0:-1:0:-1:ey<b?av<b?0:-1:0:-1:ax<b?eF<b?eT<b?dq<b?0:-1:0:-1:h9<b?a0<b?0:-1:0:-1:ev<b?eZ<b?eH<b?hm<b?g8<b?g_<b?0:-1:0:-1:aX<b?ba<b?0:-1:0:-1:hv<b?hh<b?hg<b?c7<b?0:-1:0:-1:gC<b?gD<b?0:-1:0:-1:G(NL,b+M|0)-1|0:-1;if(3<iM>>>0)return d(h);switch(iM){case
0:return i(h);case
1:return j(h);case
2:B(h,32);var
iN=ja(c(h));if(2<iN>>>0)return d(h);switch(iN){case
0:return i(h);case
1:return j(h);default:B(h,25);var
iO=K(c(h));return 0===iO?i(h):1===iO?j(h):d(h)}default:B(h,32);var
iP=ro(c(h));if(2<iP>>>0)return d(h);switch(iP){case
0:return i(h);case
1:return j(h);default:B(h,32);var
iQ=im(c(h));if(2<iQ>>>0)return d(h);switch(iQ){case
0:return i(h);case
1:return j(h);default:B(h,32);var
iR=jt(c(h));if(2<iR>>>0)return d(h);switch(iR){case
0:return i(h);case
1:return j(h);default:B(h,26);var
iS=K(c(h));return 0===iS?i(h):1===iS?j(h):d(h)}}}}}case
34:B(h,32);var
iT=iA(c(h));if(2<iT>>>0)return d(h);switch(iT){case
0:return i(h);case
1:return j(h);default:B(h,32);var
e=c(h),iU=35<e?ib<e?gI<e?hz<e?-1:dG<e?e_<e?aH<e?bK<e?eK<e?fF<e?cz<e?hX<e?0:-1:0:-1:eN<e?dI<e?0:-1:0:-1:cg<e?bp<e?dj<e?aR<e?0:-1:0:-1:aa<e?dS<e?0:-1:0:-1:co<e?ec<e?hC<e?gJ<e?cb<e?gr<e?fu<e?dD<e?ah<e?eh<e?d9<e?dx<e?cv<e?cD<e?fl<e?d$<e?0:-1:0:-1:an<e?gm<e?0:-1:0:-1:fd<e?cC<e?gs<e?fG<e?0:-1:0:-1:fR<e?b8<e?0:-1:0:-1:au<e?eq<e?gc<e?b9<e?ex<e?eO<e?0:-1:0:-1:f9<e?fM<e?0:-1:0:-1:eS<e?ar<e?eA<e?cr<e?0:-1:0:-1:e$<e?ai<e?0:-1:0:-1:fc<e?dX<e?d6<e?a_<e?fo<e?cH<e?fT<e?as<e?0:-1:0:-1:f8<e?e4<e?0:-1:0:-1:eB<e?ay<e?aE<e?bA<e?0:-1:0:-1:cN<e?a3<e?0:-1:0:-1:bN<e?cV<e?aS<e?f0<e?bD<e?f3<e?0:-1:0:-1:ad<e?bT<e?0:-1:0:-1:hi<e?ca<e?gA<e?a4<e?0:-1:0:-1:f4<e?h5<e?0:-1:0:-1:b3<e?aV<e?fm<e?eP<e?eD<e?ew<e?dZ<e?dL<e?c$<e?cw<e?0:-1:0:-1:b7<e?cx<e?0:-1:0:-1:aq<e?fV<e?eX<e?am<e?0:-1:0:-1:bP<e?ed<e?0:-1:0:-1:a6<e?gv<e?aB<e?fJ<e?bC<e?bJ<e?0:-1:0:-1:bo<e?cW<e?0:-1:0:-1:a$<e?ak<e?cy<e?bS<e?0:-1:0:-1:ft<e?fi<e?0:-1:0:-1:aw<e?dQ<e?ch<e?aT<e?aG<e?du<e?f_<e?ge<e?0:-1:0:-1:e8<e?b6<e?0:-1:0:-1:br<e?e7<e?fp<e?d2<e?0:-1:0:-1:cF<e?cJ<e?0:-1:0:-1:eC<e?dt<e?eu<e?bF<e?dw<e?c5<e?0:-1:0:-1:bg<e?cE<e?0:-1:0:-1:hp<e?hQ<e?ig<e?c6<e?0:-1:0:-1:gP<e?gG<e?0:-1:0:-1:hS<e?gX<e?h0<e?hl<e?gn<e?bL<e?dh<e?dY<e?hA<e?gU<e?hW<e?gY<e?0:-1:0:-1:aJ<e?hH<e?0:-1:0:-1:fk<e?eI<e?g$<e?g2<e?0:-1:0:-1:dr<e?$<e?0:-1:0:-1:hB<e?h7<e?e1<e?cA<e?fP<e?fU<e?0:-1:0:-1:gE<e?dB<e?0:-1:0:-1:eo<e?gL<e?hM<e?ag<e?0:-1:0:-1:hD<e?id<e?0:-1:0:-1:bh<e?ga<e?hP<e?gN<e?f7<e?gO<e?hk<e?g5<e?0:-1:0:-1:h_<e?cO<e?0:-1:0:-1:dn<e?hK<e?ha<e?hU<e?0:-1:0:-1:af<e?bO<e?0:-1:0:-1:gK<e?g6<e?b5<e?el<e?cU<e?fq<e?0:-1:0:-1:hI<e?f2<e?0:-1:0:-1:cI<e?T<e?aA<e?hL<e?0:-1:0:-1:bB<e?ds<e?0:-1:0:-1:cj<e?aO<e?fw<e?fy<e?cn<e?aY<e?dy<e?fx<e?g4<e?hy<e?0:-1:0:-1:bQ<e?bU<e?0:-1:0:-1:go<e?b2<e?be<e?gd<e?0:-1:0:-1:fz<e?a8<e?0:-1:0:-1:ho<e?e2<e?gw<e?c1<e?gl<e?a1<e?0:-1:0:-1:gq<e?ek<e?0:-1:0:-1:fW<e?fE<e?Z<e?hc<e?0:-1:0:-1:dT<e?fr<e?0:-1:0:-1:ci<e?c_<e?bk<e?_<e?cR<e?fa<e?S<e?W<e?0:-1:0:-1:eM<e?e3<e?0:-1:0:-1:gZ<e?ap<e?dd<e?ea<e?0:-1:0:-1:fB<e?h$<e?0:-1:0:-1:X<e?by<e?al<e?aL<e?a9<e?cT<e?0:-1:0:-1:bR<e?c4<e?0:-1:0:-1:dv<e?dM<e?cS<e?fA<e?0:-1:0:-1:dN<e?L<e?0:-1:0:-1:V<e?f1<e?ie<e?bb<e?ac<e?fC<e?fb<e?hY<e?bH<e?cs<e?cZ<e?bY<e?dU<e?aQ<e?0:-1:0:-1:bl<e?cl<e?0:-1:0:-1:dg<e?hj<e?gF<e?b0<e?0:-1:0:-1:gQ<e?dV<e?0:-1:0:-1:g3<e?he<e?gM<e?e6<e?f6<e?ff<e?0:-1:0:-1:hG<e?hx<e?0:-1:0:-1:dH<e?hJ<e?g7<e?gH<e?0:-1:0:-1:fK<e?eQ<e?0:-1:0:-1:fX<e?dc<e?aM<e?gt<e?et<e?cp<e?dC<e?d4<e?0:-1:0:-1:eL<e?cd<e?0:-1:0:-1:U<e?at<e?fn<e?dp<e?0:-1:0:-1:f$<e?fS<e?0:-1:0:-1:dE<e?bc<e?eb<e?fg<e?df<e?ck<e?0:-1:0:-1:d3<e?e0<e?0:-1:0:-1:aI<e?d1<e?cG<e?fZ<e?0:-1:0:-1:b_<e?dR<e?0:-1:0:-1:hs<e?gp<e?gV<e?gz<e?eY<e?ef<e?gT<e?ht<e?h2<e?hR<e?0:-1:0:-1:ae<e?eV<e?0:-1:0:-1:dP<e?bf<e?eG<e?ep<e?0:-1:0:-1:di<e?bz<e?0:-1:0:-1:hd<e?bM<e?fI<e?aU<e?gS<e?b1<e?0:-1:0:-1:cq<e?em<e?0:-1:0:-1:h1<e?cK<e?d5<e?d0<e?0:-1:0:-1:hZ<e?ic<e?0:-1:0:-1:hV<e?hu<e?ih<e?a2<e?h8<e?ez<e?hr<e?a5<e?0:-1:0:-1:f5<e?h6<e?0:-1:0:-1:bW<e?hN<e?h3<e?e9<e?0:-1:0:-1:bm<e?dF<e?0:-1:0:-1:eE<e?bE<e?bI<e?hO<e?gR<e?hn<e?0:-1:0:-1:hf<e?bG<e?0:-1:0:-1:bt<e?cc<e?en<e?fs<e?0:-1:0:-1:gh<e?fj<e?0:-1:0:-1:eg<e?c3<e?cu<e?cm<e?c8<e?dJ<e?g1<e?g9<e?dk<e?hF<e?hq<e?cX<e?0:-1:0:-1:hw<e?bj<e?0:-1:0:-1:dm<e?cM<e?eU<e?ao<e?0:-1:0:-1:gB<e?bx<e?0:-1:0:-1:cB<e?dA<e?fe<e?bd<e?d7<e?bv<e?0:-1:0:-1:fY<e?fO<e?0:-1:0:-1:da<e?c9<e?aZ<e?cL<e?0:-1:0:-1:d8<e?aF<e?0:-1:0:-1:d_<e?g0<e?bX<e?a7<e?bu<e?h4<e?e5<e?fD<e?0:-1:0:-1:er<e?aD<e?0:-1:0:-1:aC<e?eW<e?hT<e?gy<e?0:-1:0:-1:gW<e?ct<e?0:-1:0:-1:bs<e?cY<e?fv<e?ej<e?eR<e?gu<e?0:-1:0:-1:fN<e?ee<e?0:-1:0:-1:aj<e?aP<e?bZ<e?cQ<e?0:-1:0:-1:gf<e?bw<e?0:-1:0:-1:aW<e?eJ<e?dz<e?gj<e?bn<e?es<e?aK<e?gb<e?dW<e?hb<e?0:-1:0:-1:b4<e?aN<e?0:-1:0:-1:b$<e?cP<e?ei<e?fH<e?0:-1:0:-1:ce<e?fh<e?0:-1:0:-1:c0<e?ab<e?dK<e?bV<e?bi<e?c2<e?0:-1:0:-1:az<e?bq<e?0:-1:0:-1:dO<e?fL<e?cf<e?gi<e?0:-1:0:-1:db<e?gx<e?0:-1:0:-1:ia<e?hE<e?fQ<e?gg<e?Y<e?dl<e?gk<e?de<e?0:-1:0:-1:ey<e?av<e?0:-1:0:-1:ax<e?eF<e?eT<e?dq<e?0:-1:0:-1:h9<e?a0<e?0:-1:0:-1:ev<e?eZ<e?eH<e?hm<e?g8<e?g_<e?0:-1:0:-1:aX<e?ba<e?0:-1:0:-1:hv<e?hh<e?hg<e?c7<e?0:-1:0:-1:gC<e?gD<e?0:-1:0:-1:G(Np,e+M|0)-1|0:-1;if(3<iU>>>0)return d(h);switch(iU){case
0:return i(h);case
1:return j(h);case
2:B(h,32);var
iV=iA(c(h));if(2<iV>>>0)return d(h);switch(iV){case
0:return i(h);case
1:return j(h);default:B(h,32);var
iW=jc(c(h));if(2<iW>>>0)return d(h);switch(iW){case
0:return i(h);case
1:return j(h);default:B(h,32);var
iX=jv(c(h));if(2<iX>>>0)return d(h);switch(iX){case
0:return i(h);case
1:return j(h);default:B(h,27);var
iY=K(c(h));return 0===iY?i(h):1===iY?j(h):d(h)}}}default:B(h,32);var
iZ=jc(c(h));if(2<iZ>>>0)return d(h);switch(iZ){case
0:return i(h);case
1:return j(h);default:B(h,32);var
i0=i$(c(h));if(2<i0>>>0)return d(h);switch(i0){case
0:return i(h);case
1:return j(h);default:B(h,32);var
i1=mm(c(h));if(2<i1>>>0)return d(h);switch(i1){case
0:return i(h);case
1:return j(h);default:B(h,28);var
i2=K(c(h));return 0===i2?i(h):1===i2?j(h):d(h)}}}}}case
35:B(h,32);var
f=c(h),i3=35<f?ib<f?gI<f?hz<f?-1:dG<f?e_<f?aH<f?bK<f?eK<f?fF<f?cz<f?hX<f?0:-1:0:-1:eN<f?dI<f?0:-1:0:-1:cg<f?bp<f?dj<f?aR<f?0:-1:0:-1:aa<f?dS<f?0:-1:0:-1:co<f?ec<f?hC<f?gJ<f?cb<f?gr<f?fu<f?dD<f?ah<f?eh<f?d9<f?dx<f?cv<f?cD<f?fl<f?d$<f?0:-1:0:-1:an<f?gm<f?0:-1:0:-1:fd<f?cC<f?gs<f?fG<f?0:-1:0:-1:fR<f?b8<f?0:-1:0:-1:au<f?eq<f?gc<f?b9<f?ex<f?eO<f?0:-1:0:-1:f9<f?fM<f?0:-1:0:-1:eS<f?ar<f?eA<f?cr<f?0:-1:0:-1:e$<f?ai<f?0:-1:0:-1:fc<f?dX<f?d6<f?a_<f?fo<f?cH<f?fT<f?as<f?0:-1:0:-1:f8<f?e4<f?0:-1:0:-1:eB<f?ay<f?aE<f?bA<f?0:-1:0:-1:cN<f?a3<f?0:-1:0:-1:bN<f?cV<f?aS<f?f0<f?bD<f?f3<f?0:-1:0:-1:ad<f?bT<f?0:-1:0:-1:hi<f?ca<f?gA<f?a4<f?0:-1:0:-1:f4<f?h5<f?0:-1:0:-1:b3<f?aV<f?fm<f?eP<f?eD<f?ew<f?dZ<f?dL<f?c$<f?cw<f?0:-1:0:-1:b7<f?cx<f?0:-1:0:-1:aq<f?fV<f?eX<f?am<f?0:-1:0:-1:bP<f?ed<f?0:-1:0:-1:a6<f?gv<f?aB<f?fJ<f?bC<f?bJ<f?0:-1:0:-1:bo<f?cW<f?0:-1:0:-1:a$<f?ak<f?cy<f?bS<f?0:-1:0:-1:ft<f?fi<f?0:-1:0:-1:aw<f?dQ<f?ch<f?aT<f?aG<f?du<f?f_<f?ge<f?0:-1:0:-1:e8<f?b6<f?0:-1:0:-1:br<f?e7<f?fp<f?d2<f?0:-1:0:-1:cF<f?cJ<f?0:-1:0:-1:eC<f?dt<f?eu<f?bF<f?dw<f?c5<f?0:-1:0:-1:bg<f?cE<f?0:-1:0:-1:hp<f?hQ<f?ig<f?c6<f?0:-1:0:-1:gP<f?gG<f?0:-1:0:-1:hS<f?gX<f?h0<f?hl<f?gn<f?bL<f?dh<f?dY<f?hA<f?gU<f?hW<f?gY<f?0:-1:0:-1:aJ<f?hH<f?0:-1:0:-1:fk<f?eI<f?g$<f?g2<f?0:-1:0:-1:dr<f?$<f?0:-1:0:-1:hB<f?h7<f?e1<f?cA<f?fP<f?fU<f?0:-1:0:-1:gE<f?dB<f?0:-1:0:-1:eo<f?gL<f?hM<f?ag<f?0:-1:0:-1:hD<f?id<f?0:-1:0:-1:bh<f?ga<f?hP<f?gN<f?f7<f?gO<f?hk<f?g5<f?0:-1:0:-1:h_<f?cO<f?0:-1:0:-1:dn<f?hK<f?ha<f?hU<f?0:-1:0:-1:af<f?bO<f?0:-1:0:-1:gK<f?g6<f?b5<f?el<f?cU<f?fq<f?0:-1:0:-1:hI<f?f2<f?0:-1:0:-1:cI<f?T<f?aA<f?hL<f?0:-1:0:-1:bB<f?ds<f?0:-1:0:-1:cj<f?aO<f?fw<f?fy<f?cn<f?aY<f?dy<f?fx<f?g4<f?hy<f?0:-1:0:-1:bQ<f?bU<f?0:-1:0:-1:go<f?b2<f?be<f?gd<f?0:-1:0:-1:fz<f?a8<f?0:-1:0:-1:ho<f?e2<f?gw<f?c1<f?gl<f?a1<f?0:-1:0:-1:gq<f?ek<f?0:-1:0:-1:fW<f?fE<f?Z<f?hc<f?0:-1:0:-1:dT<f?fr<f?0:-1:0:-1:ci<f?c_<f?bk<f?_<f?cR<f?fa<f?S<f?W<f?0:-1:0:-1:eM<f?e3<f?0:-1:0:-1:gZ<f?ap<f?dd<f?ea<f?0:-1:0:-1:fB<f?h$<f?0:-1:0:-1:X<f?by<f?al<f?aL<f?a9<f?cT<f?0:-1:0:-1:bR<f?c4<f?0:-1:0:-1:dv<f?dM<f?cS<f?fA<f?0:-1:0:-1:dN<f?L<f?0:-1:0:-1:V<f?f1<f?ie<f?bb<f?ac<f?fC<f?fb<f?hY<f?bH<f?cs<f?cZ<f?bY<f?dU<f?aQ<f?0:-1:0:-1:bl<f?cl<f?0:-1:0:-1:dg<f?hj<f?gF<f?b0<f?0:-1:0:-1:gQ<f?dV<f?0:-1:0:-1:g3<f?he<f?gM<f?e6<f?f6<f?ff<f?0:-1:0:-1:hG<f?hx<f?0:-1:0:-1:dH<f?hJ<f?g7<f?gH<f?0:-1:0:-1:fK<f?eQ<f?0:-1:0:-1:fX<f?dc<f?aM<f?gt<f?et<f?cp<f?dC<f?d4<f?0:-1:0:-1:eL<f?cd<f?0:-1:0:-1:U<f?at<f?fn<f?dp<f?0:-1:0:-1:f$<f?fS<f?0:-1:0:-1:dE<f?bc<f?eb<f?fg<f?df<f?ck<f?0:-1:0:-1:d3<f?e0<f?0:-1:0:-1:aI<f?d1<f?cG<f?fZ<f?0:-1:0:-1:b_<f?dR<f?0:-1:0:-1:hs<f?gp<f?gV<f?gz<f?eY<f?ef<f?gT<f?ht<f?h2<f?hR<f?0:-1:0:-1:ae<f?eV<f?0:-1:0:-1:dP<f?bf<f?eG<f?ep<f?0:-1:0:-1:di<f?bz<f?0:-1:0:-1:hd<f?bM<f?fI<f?aU<f?gS<f?b1<f?0:-1:0:-1:cq<f?em<f?0:-1:0:-1:h1<f?cK<f?d5<f?d0<f?0:-1:0:-1:hZ<f?ic<f?0:-1:0:-1:hV<f?hu<f?ih<f?a2<f?h8<f?ez<f?hr<f?a5<f?0:-1:0:-1:f5<f?h6<f?0:-1:0:-1:bW<f?hN<f?h3<f?e9<f?0:-1:0:-1:bm<f?dF<f?0:-1:0:-1:eE<f?bE<f?bI<f?hO<f?gR<f?hn<f?0:-1:0:-1:hf<f?bG<f?0:-1:0:-1:bt<f?cc<f?en<f?fs<f?0:-1:0:-1:gh<f?fj<f?0:-1:0:-1:eg<f?c3<f?cu<f?cm<f?c8<f?dJ<f?g1<f?g9<f?dk<f?hF<f?hq<f?cX<f?0:-1:0:-1:hw<f?bj<f?0:-1:0:-1:dm<f?cM<f?eU<f?ao<f?0:-1:0:-1:gB<f?bx<f?0:-1:0:-1:cB<f?dA<f?fe<f?bd<f?d7<f?bv<f?0:-1:0:-1:fY<f?fO<f?0:-1:0:-1:da<f?c9<f?aZ<f?cL<f?0:-1:0:-1:d8<f?aF<f?0:-1:0:-1:d_<f?g0<f?bX<f?a7<f?bu<f?h4<f?e5<f?fD<f?0:-1:0:-1:er<f?aD<f?0:-1:0:-1:aC<f?eW<f?hT<f?gy<f?0:-1:0:-1:gW<f?ct<f?0:-1:0:-1:bs<f?cY<f?fv<f?ej<f?eR<f?gu<f?0:-1:0:-1:fN<f?ee<f?0:-1:0:-1:aj<f?aP<f?bZ<f?cQ<f?0:-1:0:-1:gf<f?bw<f?0:-1:0:-1:aW<f?eJ<f?dz<f?gj<f?bn<f?es<f?aK<f?gb<f?dW<f?hb<f?0:-1:0:-1:b4<f?aN<f?0:-1:0:-1:b$<f?cP<f?ei<f?fH<f?0:-1:0:-1:ce<f?fh<f?0:-1:0:-1:c0<f?ab<f?dK<f?bV<f?bi<f?c2<f?0:-1:0:-1:az<f?bq<f?0:-1:0:-1:dO<f?fL<f?cf<f?gi<f?0:-1:0:-1:db<f?gx<f?0:-1:0:-1:ia<f?hE<f?fQ<f?gg<f?Y<f?dl<f?gk<f?de<f?0:-1:0:-1:ey<f?av<f?0:-1:0:-1:ax<f?eF<f?eT<f?dq<f?0:-1:0:-1:h9<f?a0<f?0:-1:0:-1:ev<f?eZ<f?eH<f?hm<f?g8<f?g_<f?0:-1:0:-1:aX<f?ba<f?0:-1:0:-1:hv<f?hh<f?hg<f?c7<f?0:-1:0:-1:gC<f?gD<f?0:-1:0:-1:G(NX,f+M|0)-1|0:-1;if(3<i3>>>0)return d(h);switch(i3){case
0:return i(h);case
1:return j(h);case
2:B(h,32);var
i5=kh(c(h));if(2<i5>>>0)return d(h);switch(i5){case
0:return i(h);case
1:return j(h);default:B(h,32);var
i6=im(c(h));if(2<i6>>>0)return d(h);switch(i6){case
0:return i(h);case
1:return j(h);default:B(h,29);var
i7=K(c(h));return 0===i7?i(h):1===i7?j(h):d(h)}}default:B(h,32);var
i8=lH(c(h));if(2<i8>>>0)return d(h);switch(i8){case
0:return i(h);case
1:return j(h);default:B(h,32);var
i9=im(c(h));if(2<i9>>>0)return d(h);switch(i9){case
0:return i(h);case
1:return j(h);default:B(h,32);var
i_=j5(c(h));if(2<i_>>>0)return d(h);switch(i_){case
0:return i(h);case
1:return j(h);default:B(h,32);var
jd=mC(c(h));if(2<jd>>>0)return d(h);switch(jd){case
0:return i(h);case
1:return j(h);default:B(h,30);var
je=K(c(h));return 0===je?i(h):1===je?j(h):d(h)}}}}}case
36:B(h,32);var
jf=j5(c(h));if(2<jf>>>0)return d(h);switch(jf){case
0:return i(h);case
1:return j(h);default:B(h,32);var
jg=jc(c(h));if(2<jg>>>0)return d(h);switch(jg){case
0:return i(h);case
1:return j(h);default:B(h,32);var
jh=kX(c(h));if(2<jh>>>0)return d(h);switch(jh){case
0:return i(h);case
1:return j(h);default:B(h,31);var
ji=K(c(h));return 0===ji?i(h):1===ji?j(h):d(h)}}}case
37:B(h,36);var
jk=c(h),jq=le<jk?nW<jk?-1:0:-1;return 0===jq?38:d(h);case
38:B(h,56);var
jl=c(h),jr=nW<jl?px<jl?-1:0:-1;return 0===jr?39:d(h);default:return 37}}io(b);var
E=iB(b);if(64<E>>>0)return O(W$);var
q=E;if(33<=q)switch(q){case
33:return[0,a,66];case
36:return[0,a,0];case
37:return[0,a,1];case
38:return[0,a,2];case
39:return[0,a,3];case
40:return[0,a,4];case
41:return[0,a,5];case
42:return[0,a,12];case
43:return[0,a,10];case
44:return[0,a,8];case
45:return[0,a,9];case
50:return[0,a,93];case
51:return[0,a,94];case
54:return[0,a,it];case
56:return[0,a,84];case
57:return[0,a,86];case
59:return[0,a,11];case
61:return[0,a,98];case
62:return[0,a,99];case
63:var
iQ=a[4]?jw(a,N(a,b),7):a;return[0,iQ,iq];case
64:return[0,a,[5,J(b)]];case
58:break;case
34:case
48:return[0,a,6];case
35:case
49:return[0,a,7];case
46:case
55:return[0,a,81];case
47:case
53:return[0,a,80];default:return[0,a,79]}else
switch(q){case
0:return[1,jf(a,b)];case
1:return[1,a];case
2:var
iC=N(a,b),F=il(ik),H=kx(a,F,b);return[1,jg(H[1],iC,H[2],F,1)];case
3:var
P=J(b);if(a[5]){var
iD=a[4]?rt(a,N(a,b),P):a,R=mk(1,iD),ii=or(b);if(i0(lF(b,ii-1|0,1),Xa))if(C(lF(b,ii-2|0,1),Xb))return[0,R,81];return[1,R]}var
iE=N(a,b),g=il(ik);Q(g,P);var
ip=kx(a,g,b);return[1,jg(ip[1],iE,ip[2],g,1)];case
4:if(a[4])return[1,mk(0,a)];mh(b);var
iF=function(a){return 0===rg(c(a))?0:d(a)};io(b);return 0===iF(b)?[0,a,it]:O(Xc);case
5:var
iG=N(a,b),is=il(ik),iv=k2(a,is,b);return[1,jg(iv[1],iG,iv[2],is,0)];case
6:var
iw=J(b),iH=N(a,b),ix=il(ik),h=il(ik);Q(h,iw);var
o=rz(a,iw,ix,h,0,b),iI=I(iH,o[2]),iJ=o[3],iL=iu(h),iM=[1,[0,iI,iu(ix),iL,iJ]];return[0,o[1],iM];case
7:return jh(a,b,function(h,a){function
b(a){if(0===rc(c(a))){if(0===mp(c(a)))for(;;){B(a,0);if(0===mp(c(a)))continue;return d(a)}return d(a)}return d(a)}io(a);var
e=mx(c(a));if(0===e)for(;;){var
f=mn(c(a));if(0===f)continue;var
g=1===f?b(a):d(a);break}else
var
g=1===e?b(a):d(a);return 0===g?[0,h,jy(0,J(a))]:O(Xd)});case
8:return[0,a,jy(0,J(b))];case
9:return jh(a,b,function(h,a){function
b(a){if(0===rf(c(a))){if(0===ju(c(a)))for(;;){B(a,0);if(0===ju(c(a)))continue;return d(a)}return d(a)}return d(a)}io(a);var
e=mx(c(a));if(0===e)for(;;){var
f=mn(c(a));if(0===f)continue;var
g=1===f?b(a):d(a);break}else
var
g=1===e?b(a):d(a);return 0===g?[0,h,jy(2,J(a))]:O(Xe)});case
10:return[0,a,jy(2,J(b))];case
11:return jh(a,b,function(h,a){function
b(a){if(0===ju(c(a)))for(;;){B(a,0);if(0===ju(c(a)))continue;return d(a)}return d(a)}io(a);var
e=mx(c(a));if(0===e)for(;;){var
f=mn(c(a));if(0===f)continue;var
g=1===f?b(a):d(a);break}else
var
g=1===e?b(a):d(a);return 0===g?[0,h,jy(1,J(a))]:O(Xf)});case
12:return[0,a,jy(1,J(b))];case
13:return jh(a,b,function(b,a){function
e(a){if(0===q_(c(a))){if(0===ij(c(a)))for(;;){B(a,0);if(0===ij(c(a)))continue;return d(a)}return d(a)}return d(a)}function
f(a){var
b=mx(c(a));if(0===b)for(;;){var
f=mn(c(a));if(0===f)continue;return 1===f?e(a):d(a)}return 1===b?e(a):d(a)}io(a);if(0===f(a)){var
g=J(a);try{var
h=[0,b,jy(3,g)];return h}catch(c){c=iK(c);if(mf)return[0,jw(b,N(b,a),66),Xg];throw c}}return O(Xh)});case
14:var
iN=J(b);try{var
iO=[0,a,jy(3,iN)];return iO}catch(c){c=iK(c);if(mf)return[0,jw(a,N(a,b),66),Xi];throw c}case
15:return jh(a,b,function(n,a){function
h(a){for(;;){B(a,0);if(0===iT(c(a)))continue;return d(a)}}function
e(a){var
b=q9(c(a));return 0===b?0===iT(c(a))?h(a):d(a):1===b?h(a):d(a)}function
g(a){if(0===iT(c(a)))for(;;){var
b=mw(c(a));if(0===b)continue;return 1===b?e(a):d(a)}return d(a)}function
j(a){for(;;){var
b=mw(c(a));if(0===b)continue;return 1===b?e(a):d(a)}}function
i(a){var
b=q$(c(a));return 0===b?j(a):1===b?e(a):d(a)}function
k(a){for(;;){var
b=re(c(a));if(2<b>>>0)return d(a);switch(b){case
0:return j(a);case
1:continue;default:return e(a)}}}io(a);var
f=c(a),l=44<f?57<f?-1:G(Mm,f+ln|0)-1|0:-1;if(3<l>>>0)var
b=d(a);else
switch(l){case
0:for(;;){var
m=oC(c(a));if(3<m>>>0)var
b=d(a);else
switch(m){case
0:continue;case
1:var
b=g(a);break;case
2:var
b=i(a);break;default:var
b=k(a)}break}break;case
1:var
b=g(a);break;case
2:var
b=i(a);break;default:var
b=k(a)}return 0===b?[0,n,jy(3,J(a))]:O(Xj)});case
17:return jh(a,b,function(l,a){function
g(a){for(;;){B(a,0);if(0===iT(c(a)))continue;return d(a)}}io(a);var
f=c(a),h=44<f?57<f?-1:G(MZ,f+ln|0)-1|0:-1;if(2<h>>>0)var
e=d(a);else
switch(h){case
0:for(;;){var
b=c(a),i=8<b?l_<b?jL<b?jR<b?-1:jP<b?jU<b?0:-1:jN<b?jS<b?jO<b?jT<b?0:-1:0:-1:jV<b?jM<b?0:-1:0:-1:G(MU,b-9|0)-1|0:-1;if(0===i)continue;if(1===i)for(;;){B(a,0);var
j=kZ(c(a));if(0===j)var
e=0;else{if(1===j)continue;var
e=d(a)}break}else
var
e=d(a);break}break;case
1:var
e=0===iT(c(a))?g(a):d(a);break;default:for(;;){B(a,0);var
k=kZ(c(a));if(0===k){B(a,0);var
e=0===iT(c(a))?g(a):d(a)}else{if(1===k)continue;var
e=d(a)}break}}return 0===e?[0,l,jy(3,J(a))]:O(Xk)});case
19:return[0,a,pc];case
20:return[0,a,Xl];case
21:return[0,a,Xm];case
22:return[0,a,mS];case
23:return[0,a,30];case
24:return[0,a,lZ];case
25:return[0,a,29];case
26:return[0,a,po];case
27:return[0,a,42];case
28:return[0,a,pK];case
29:return[0,a,31];case
31:return[0,a,l2];case
32:var
iP=N(a,b),iy=J(b),iz=rx(a,iy);return[0,iz[1],[3,iP,iz[2],iy]];case
30:break;default:return[0,a,jy(3,J(b))]}return[0,a,46]},j6=lC([0,me]),lK=function(a,b){return[0,[0],0,b,q5(a[2].slice(),a)]},oI=function(iG,qY){var
qZ=qY+1|0;if(iG[1].length-1<qZ){var
i_=1;for(;;){if(!(qZ<=i_)){var
i_=i_*2|0;continue}iG[1]=qm(i_,function(a){var
b=a<iG[1].length-1?1:0,c=b?iN(iG[1],a)[a+1]:b;return c});break}}for(;;){if(iG[2]<=qY){var
iz=iG[4];switch(iG[3]){case
0:var
F=iz;for(;;){var
a=F[2],i3=function(e,a){for(;;){B(a,73);var
b=K(c(a));if(0===b)continue;return 1===b?e<50?jZ(e+1|0,a):ir(jZ,[0,a]):d(a)}},jZ=function(b,a){if(0===jJ(c(a))){var
e=j4(c(a));if(0===e)return 0===ij(c(a))?0===ij(c(a))?0===ij(c(a))?b<50?i3(b+1|0,a):ir(i3,[0,a]):d(a):d(a):d(a);if(1===e){if(0===ij(c(a)))for(;;){var
f=j3(c(a));if(0===f)continue;return 1===f?b<50?i3(b+1|0,a):ir(i3,[0,a]):d(a)}return d(a)}return d(a)}return d(a)},D=function(a){return kd(i3(0,a))},E=function(a){return kd(jZ(0,a))},iH=function(a){for(;;){B(a,20);if(0===iU(c(a)))continue;return d(a)}},iZ=function(g){return function(a){B(a,20);var
b=rh(c(a));if(2<b>>>0)return d(a);switch(b){case
0:return g(a);case
1:if(0===iT(c(a)))for(;;){B(a,19);var
e=kg(c(a));if(0===e)for(;;){B(a,18);if(0===iU(c(a)))continue;return d(a)}if(1===e)continue;return d(a)}return d(a);default:for(;;){B(a,19);var
f=kg(c(a));if(0===f)for(;;){B(a,18);if(0===iU(c(a)))continue;return d(a)}if(1===f)continue;return d(a)}}}}(iH),j6=function(a){B(a,4);return 0===rs(c(a))?4:d(a)},j7=function(a){return 0===my(c(a))?0===mr(c(a))?0===rp(c(a))?0===rj(c(a))?0===rk(c(a))?0===oB(c(a))?0===lI(c(a))?0===my(c(a))?0===jJ(c(a))?0===rl(c(a))?0===lJ(c(a))?4:d(a):d(a):d(a):d(a):d(a):d(a):d(a):d(a):d(a):d(a):d(a)},jd=function(f,g){return function(a){B(a,21);var
b=kY(c(a));if(2<b>>>0)return d(a);switch(b){case
0:return f(a);case
1:for(;;){B(a,21);var
e=kY(c(a));if(2<e>>>0)return d(a);switch(e){case
0:return f(a);case
1:continue;default:return g(a)}}default:return g(a)}}}(iH,iZ),j8=function(a){for(;;){B(a,14);if(0===iU(c(a)))continue;return d(a)}},je=function(f){return function(a){B(a,21);var
b=kg(c(a));if(0===b)return f(a);if(1===b)for(;;){B(a,21);var
e=kg(c(a));if(0===e)return f(a);if(1===e)continue;return d(a)}return d(a)}}(iH);io(a);var
z=c(a),j9=jL<z?ec<z?ge<z?dD<z?e_<z?bK<z?fF<z?cz<z?1:8:dI<z?eK<z?1:8:eN<z?1:8:bp<z?aR<z?aH<z?1:8:dj<z?1:8:dS<z?cg<z?1:8:aa<z?1:8:eh<z?dx<z?cD<z?d$<z?dG<z?1:8:fl<z?1:8:gm<z?cv<z?1:8:an<z?1:8:cC<z?fG<z?d9<z?1:8:gs<z?1:8:b8<z?fd<z?1:8:fR<z?1:8:eq<z?b9<z?eO<z?ah<z?1:8:ex<z?1:8:fM<z?gc<z?1:8:f9<z?1:8:ar<z?cr<z?au<z?1:8:eA<z?1:8:ai<z?eS<z?1:8:e$<z?1:8:cw<z?dX<z?a_<z?cH<z?as<z?fu<z?1:8:fT<z?1:8:e4<z?fo<z?1:8:f8<z?1:8:ay<z?bA<z?d6<z?1:8:aE<z?1:8:a3<z?eB<z?1:8:cN<z?1:8:cV<z?f0<z?f3<z?fc<z?1:8:bD<z?1:8:bT<z?aS<z?1:8:ad<z?1:8:ca<z?a4<z?bN<z?1:8:gA<z?1:8:gr<z?f4<z?1:8:cb<z?1:8:bJ<z?am<z?cx<z?dL<z?c$<z?1:8:dZ<z?1:8:ew<z?b7<z?1:8:eD<z?1:8:ed<z?fV<z?eX<z?1:8:aq<z?1:8:eP<z?bP<z?1:8:fm<z?1:8:bS<z?cW<z?fJ<z?bC<z?1:8:aB<z?1:8:gv<z?bo<z?1:8:a6<z?1:8:fi<z?ak<z?cy<z?1:8:a$<z?1:8:aV<z?ft<z?1:8:b3<z?1:8:f2<z?$<z?c5<z?d2<z?b6<z?du<z?f_<z?1:8:aG<z?1:8:aT<z?e8<z?1:8:ch<z?1:8:cJ<z?e7<z?fp<z?1:8:br<z?1:8:dQ<z?cF<z?1:8:aw<z?1:8:c6<z?cE<z?bF<z?dw<z?1:8:eu<z?1:8:dt<z?bg<z?1:8:eC<z?1:8:nN<z?dY<z?aJ<z?1:8:dh<z?1:8:eI<z?nC<z?1:8:fk<z?1:8:n0<z?dB<z?fU<z?bL<z?dr<z?1:8:gn<z?1:8:cA<z?fP<z?1:8:e1<z?1:8:mM<z?ag<z?nd<z?1:8:eo<z?1:8:nY<z?nx<z?1:8:m6<z?1:8:bO<z?nZ<z?cO<z?f7<z?1:8:nm<z?1:8:m_<z?nG<z?1:8:dn<z?1:8:fq<z?ga<z?af<z?1:8:bh<z?1:8:el<z?cU<z?1:8:b5<z?1:8:fr<z?b2<z?fx<z?ds<z?T<z?aA<z?1:8:cI<z?1:8:ne<z?bB<z?1:8:no<z?1:8:aY<z?bU<z?dy<z?1:8:bQ<z?1:8:gd<z?cn<z?1:8:be<z?1:8:c1<z?fy<z?a8<z?go<z?1:8:fz<z?1:8:a1<z?fw<z?1:8:gl<z?1:8:e2<z?ek<z?gw<z?1:8:gq<z?1:8:fE<z?Z<z?1:8:fW<z?1:8:c_<z?e3<z?W<z?aO<z?dT<z?1:8:cj<z?1:8:fa<z?S<z?1:8:cR<z?1:8:ea<z?_<z?eM<z?1:8:bk<z?1:8:ap<z?dd<z?1:8:fB<z?1:8:by<z?aL<z?cT<z?ci<z?1:8:a9<z?1:8:c4<z?al<z?1:8:bR<z?1:8:dM<z?fA<z?X<z?1:8:cS<z?1:8:L<z?dv<z?1:8:dN<z?1:8:fj<z?bf<z?dp<z?ff<z?cs<z?bY<z?aQ<z?co<z?1:8:dU<z?1:8:cl<z?cZ<z?1:8:bl<z?1:8:dV<z?b0<z?bH<z?1:8:dg<z?1:8:jU<z?jR<z?1:2:fb<z?1:8:d4<z?eQ<z?e6<z?f6<z?1:8:dH<z?1:8:fC<z?fK<z?1:8:ac<z?1:8:cd<z?cp<z?dC<z?1:8:et<z?1:8:gt<z?eL<z?1:8:aM<z?1:8:bc<z?nX<z?fS<z?at<z?fn<z?1:8:U<z?1:8:dc<z?f$<z?1:8:fX<z?1:8:fg<z?ck<z?nj<z?1:8:df<z?1:8:e0<z?eb<z?1:8:d3<z?1:8:bb<z?d1<z?fZ<z?dE<z?1:8:cG<z?1:8:dR<z?aI<z?1:8:b_<z?1:8:ef<z?eV<z?nw<z?1:8:ae<z?1:8:ep<z?eY<z?1:8:eG<z?1:8:a5<z?nP<z?aU<z?gz<z?bz<z?dP<z?1:8:di<z?1:8:b1<z?na<z?1:8:ni<z?1:8:m1<z?em<z?fI<z?1:8:cq<z?1:8:nR<z?nE<z?1:8:mN<z?1:8:d0<z?nL<z?nq<z?nQ<z?1:8:mW<z?1:8:bM<z?nK<z?1:8:mR<z?1:8:nr<z?cK<z?d5<z?1:8:np<z?1:8:gp<z?mV<z?1:8:mZ<z?1:8:ng<z?e9<z?mO<z?ez<z?mK<z?1:8:m$<z?1:8:a2<z?f5<z?1:8:m4<z?1:8:dF<z?nT<z?mQ<z?1:8:bW<z?1:8:n2<z?bm<z?1:8:nV<z?1:8:nv<z?m5<z?bG<z?bI<z?1:8:mL<z?1:8:nA<z?nh<z?1:8:mY<z?1:8:fs<z?bE<z?nF<z?1:8:eE<z?1:8:cc<z?en<z?1:8:bt<z?1:8:bw<z?aF<z?bx<z?bj<z?cX<z?f1<z?gh<z?1:8:V<z?1:8:m0<z?mU<z?1:8:dk<z?1:8:ny<z?ao<z?nb<z?1:8:eU<z?1:8:cM<z?mT<z?1:8:dm<z?1:8:fO<z?bv<z?dJ<z?gB<z?1:8:c8<z?1:8:bd<z?d7<z?1:8:fe<z?1:8:cL<z?dA<z?fY<z?1:8:cB<z?1:8:c9<z?aZ<z?1:8:da<z?1:8:ct<z?aD<z?fD<z?cm<z?d8<z?1:8:cu<z?1:8:n1<z?e5<z?1:8:bu<z?1:8:gy<z?a7<z?er<z?1:8:bX<z?1:8:eW<z?mP<z?1:8:aC<z?1:8:ee<z?gu<z?jT<z?jP<z?1:2:d_<z?1:8:ej<z?eR<z?1:8:fv<z?1:8:cQ<z?cY<z?fN<z?1:8:bs<z?1:8:aP<z?bZ<z?1:8:aj<z?1:8:fL<z?ns<z?aN<z?nt<z?c3<z?gf<z?1:8:eg<z?1:8:gb<z?dW<z?1:8:aK<z?1:8:fH<z?es<z?b4<z?1:8:bn<z?1:8:cP<z?ei<z?1:8:b$<z?1:8:bV<z?gj<z?fh<z?m3<z?1:8:ce<z?1:8:c2<z?dz<z?1:8:bi<z?1:8:ab<z?bq<z?dK<z?1:8:az<z?1:8:gi<z?c0<z?1:8:cf<z?1:8:eF<z?dl<z?eJ<z?gx<z?dO<z?1:8:db<z?1:8:de<z?aW<z?1:8:gk<z?1:8:gg<z?av<z?Y<z?1:8:ey<z?1:8:dq<z?fQ<z?1:8:eT<z?1:8:c7<z?ba<z?a0<z?ax<z?1:8:eH<z?1:8:eZ<z?aX<z?1:8:ev<z?1:8:jM<z?jS<z?jO<z?1:2:jN<z?1:2:jj<z?jm<z?1:3:jV<z?1:2:G(MJ,z+1|0)-1|0;if(53<j9>>>0)var
b=d(a);else
switch(j9){case
0:var
b=129;break;case
1:var
b=si;break;case
2:B(a,2);if(0===jI(c(a)))for(;;){B(a,2);if(0===jI(c(a)))continue;var
b=d(a);break}else
var
b=d(a);break;case
3:var
b=0;break;case
4:B(a,0);var
b=0===jb(c(a))?0:d(a);break;case
5:B(a,sP);var
b=0===ki(c(a))?(B(a,94),0===ki(c(a))?90:d(a)):d(a);break;case
6:var
b=8;break;case
7:B(a,ip);var
j_=c(a),q0=32<j_?33<j_?-1:0:-1,b=0===q0?7:d(a);break;case
8:B(a,73);var
j$=K(c(a)),b=0===j$?D(a):1===j$?E(a):d(a);break;case
9:B(a,tV);var
b=0===ki(c(a))?kq:d(a);break;case
10:B(a,sR);var
ji=c(a),ka=37<ji?61<ji?-1:G(N0,ji-38|0)-1|0:-1,b=0===ka?87:1===ka?iq:d(a);break;case
11:var
b=77;break;case
12:var
b=78;break;case
13:B(a,p4);var
kb=ri(c(a));if(2<kb>>>0)var
b=d(a);else
switch(kb){case
0:B(a,m9);var
b=0===ki(c(a))?lh:d(a);break;case
1:var
b=5;break;default:var
b=kE}break;case
14:B(a,pK);var
jk=c(a),kc=42<jk?61<jk?-1:G(N1,jk+m8|0)-1|0:-1,b=0===kc?95:1===kc?lr:d(a);break;case
15:var
b=84;break;case
16:B(a,l2);var
jn=c(a),ke=44<jn?61<jn?-1:G(Mq,jn+ln|0)-1|0:-1,b=0===ke?96:1===ke?l0:d(a);break;case
17:B(a,82);var
kf=kZ(c(a));if(0===kf)var
b=0===q8(c(a))?81:d(a);else
if(1===kf)for(;;){B(a,21);var
kk=kY(c(a));if(2<kk>>>0)var
b=d(a);else
switch(kk){case
0:var
b=iH(a);break;case
1:continue;default:var
b=iZ(a)}break}else
var
b=d(a);break;case
18:B(a,126);var
kl=ri(c(a));if(2<kl>>>0)var
b=d(a);else
switch(kl){case
0:B(a,3);var
km=mo(c(a));if(2<km>>>0)var
b=d(a);else
switch(km){case
0:for(;;){var
ko=mo(c(a));if(2<ko>>>0)var
b=d(a);else
switch(ko){case
0:continue;case
1:var
b=j6(a);break;default:var
b=j7(a)}break}break;case
1:var
b=j6(a);break;default:var
b=j7(a)}break;case
1:var
b=6;break;default:var
b=px}break;case
19:B(a,21);var
kp=oz(c(a));if(7<kp>>>0)var
b=d(a);else
switch(kp){case
0:var
b=iH(a);break;case
1:var
b=jd(a);break;case
2:for(;;){B(a,15);var
kr=rn(c(a));if(3<kr>>>0)var
b=d(a);else
switch(kr){case
0:var
b=j8(a);break;case
1:var
b=je(a);break;case
2:continue;default:for(;;){B(a,14);var
ks=mB(c(a));if(2<ks>>>0)var
b=d(a);else
switch(ks){case
0:var
b=j8(a);break;case
1:var
b=je(a);break;default:continue}break}}break}break;case
3:for(;;){B(a,21);var
kt=mB(c(a));if(2<kt>>>0)var
b=d(a);else
switch(kt){case
0:var
b=iH(a);break;case
1:var
b=je(a);break;default:continue}break}break;case
4:B(a,20);var
ku=mD(c(a));if(0===ku)var
b=iH(a);else
if(1===ku)for(;;){B(a,11);var
kv=mD(c(a));if(0===kv)for(;;){B(a,10);if(0===iU(c(a)))continue;var
b=d(a);break}else{if(1===kv)continue;var
b=d(a)}break}else
var
b=d(a);break;case
5:var
b=iZ(a);break;case
6:B(a,20);var
kw=mu(c(a));if(0===kw)var
b=iH(a);else
if(1===kw)for(;;){B(a,13);var
ky=mu(c(a));if(0===ky)for(;;){B(a,12);if(0===iU(c(a)))continue;var
b=d(a);break}else{if(1===ky)continue;var
b=d(a)}break}else
var
b=d(a);break;default:B(a,20);var
kz=ml(c(a));if(0===kz)var
b=iH(a);else
if(1===kz)for(;;){B(a,17);var
kA=ml(c(a));if(0===kA)for(;;){B(a,16);if(0===iU(c(a)))continue;var
b=d(a);break}else{if(1===kA)continue;var
b=d(a)}break}else
var
b=d(a)}break;case
20:B(a,21);var
kB=mv(c(a));if(3<kB>>>0)var
b=d(a);else
switch(kB){case
0:var
b=iH(a);break;case
1:var
b=jd(a);break;case
2:for(;;){B(a,21);var
kC=mv(c(a));if(3<kC>>>0)var
b=d(a);else
switch(kC){case
0:var
b=iH(a);break;case
1:var
b=jd(a);break;case
2:continue;default:var
b=iZ(a)}break}break;default:var
b=iZ(a)}break;case
21:var
b=85;break;case
22:var
b=83;break;case
23:B(a,mS);var
jo=c(a),kD=59<jo?61<jo?-1:G(ox,jo-60|0)-1|0:-1,b=0===kD?(B(a,98),0===ki(c(a))?97:d(a)):1===kD?91:d(a);break;case
24:B(a,le);var
kF=oA(c(a)),b=0===kF?(B(a,93),0===ki(c(a))?89:d(a)):1===kF?nW:d(a);break;case
25:B(a,po);var
kG=oA(c(a));if(0===kG)var
b=92;else
if(1===kG){B(a,la);var
kH=oA(c(a)),b=0===kH?99:1===kH?(B(a,it),0===ki(c(a))?jl:d(a)):d(a)}else
var
b=d(a);break;case
26:var
b=86;break;case
27:B(a,ik);var
kI=c(a),q1=63<kI?64<kI?-1:0:-1;if(0===q1){var
jp=c(a),kJ=96<jp?kE<jp?-1:G(M1,jp+s$|0)-1|0:-1;if(0===kJ)if(0===rb(c(a))){var
kK=c(a),q2=kn<kK?sP<kK?-1:0:-1;if(0===q2)if(0===oB(c(a)))if(0===lI(c(a)))var
kL=c(a),q3=72<kL?73<kL?-1:0:-1,b=0===q3?0===mq(c(a))?0===lJ(c(a))?0===mz(c(a))?0===rm(c(a))?0===mq(c(a))?0===mr(c(a))?0===mz(c(a))?74:d(a):d(a):d(a):d(a):d(a):d(a):d(a):d(a);else
var
b=d(a);else
var
b=d(a);else
var
b=d(a)}else
var
b=d(a);else
var
b=1===kJ?0===mq(c(a))?0===lJ(c(a))?0===mz(c(a))?0===rm(c(a))?0===mq(c(a))?0===mr(c(a))?0===mz(c(a))?74:d(a):d(a):d(a):d(a):d(a):d(a):d(a):d(a)}else
var
b=d(a);break;case
28:var
b=79;break;case
29:B(a,1);if(0===jJ(c(a))){var
kM=j4(c(a));if(0===kM)var
b=0===ij(c(a))?0===ij(c(a))?0===ij(c(a))?D(a):d(a):d(a):d(a);else
if(1===kM)if(0===ij(c(a)))for(;;){var
kN=j3(c(a));if(0===kN)continue;var
b=1===kN?D(a):d(a);break}else
var
b=d(a);else
var
b=d(a)}else
var
b=d(a);break;case
30:var
b=80;break;case
31:B(a,kn);var
b=0===ki(c(a))?lZ:d(a);break;case
32:var
b=9;break;case
33:B(a,73);var
e=c(a),kO=35<e?ib<e?gI<e?hz<e?-1:dG<e?e_<e?aH<e?bK<e?eK<e?fF<e?cz<e?hX<e?0:-1:0:-1:eN<e?dI<e?0:-1:0:-1:cg<e?bp<e?dj<e?aR<e?0:-1:0:-1:aa<e?dS<e?0:-1:0:-1:co<e?ec<e?hC<e?gJ<e?cb<e?gr<e?fu<e?dD<e?ah<e?eh<e?d9<e?dx<e?cv<e?cD<e?fl<e?d$<e?0:-1:0:-1:an<e?gm<e?0:-1:0:-1:fd<e?cC<e?gs<e?fG<e?0:-1:0:-1:fR<e?b8<e?0:-1:0:-1:au<e?eq<e?gc<e?b9<e?ex<e?eO<e?0:-1:0:-1:f9<e?fM<e?0:-1:0:-1:eS<e?ar<e?eA<e?cr<e?0:-1:0:-1:e$<e?ai<e?0:-1:0:-1:fc<e?dX<e?d6<e?a_<e?fo<e?cH<e?fT<e?as<e?0:-1:0:-1:f8<e?e4<e?0:-1:0:-1:eB<e?ay<e?aE<e?bA<e?0:-1:0:-1:cN<e?a3<e?0:-1:0:-1:bN<e?cV<e?aS<e?f0<e?bD<e?f3<e?0:-1:0:-1:ad<e?bT<e?0:-1:0:-1:hi<e?ca<e?gA<e?a4<e?0:-1:0:-1:f4<e?h5<e?0:-1:0:-1:b3<e?aV<e?fm<e?eP<e?eD<e?ew<e?dZ<e?dL<e?c$<e?cw<e?0:-1:0:-1:b7<e?cx<e?0:-1:0:-1:aq<e?fV<e?eX<e?am<e?0:-1:0:-1:bP<e?ed<e?0:-1:0:-1:a6<e?gv<e?aB<e?fJ<e?bC<e?bJ<e?0:-1:0:-1:bo<e?cW<e?0:-1:0:-1:a$<e?ak<e?cy<e?bS<e?0:-1:0:-1:ft<e?fi<e?0:-1:0:-1:aw<e?dQ<e?ch<e?aT<e?aG<e?du<e?f_<e?ge<e?0:-1:0:-1:e8<e?b6<e?0:-1:0:-1:br<e?e7<e?fp<e?d2<e?0:-1:0:-1:cF<e?cJ<e?0:-1:0:-1:eC<e?dt<e?eu<e?bF<e?dw<e?c5<e?0:-1:0:-1:bg<e?cE<e?0:-1:0:-1:hp<e?hQ<e?ig<e?c6<e?0:-1:0:-1:gP<e?gG<e?0:-1:0:-1:hS<e?gX<e?h0<e?hl<e?gn<e?bL<e?dh<e?dY<e?hA<e?gU<e?hW<e?gY<e?0:-1:0:-1:aJ<e?hH<e?0:-1:0:-1:fk<e?eI<e?g$<e?g2<e?0:-1:0:-1:dr<e?$<e?0:-1:0:-1:hB<e?h7<e?e1<e?cA<e?fP<e?fU<e?0:-1:0:-1:gE<e?dB<e?0:-1:0:-1:eo<e?gL<e?hM<e?ag<e?0:-1:0:-1:hD<e?id<e?0:-1:0:-1:bh<e?ga<e?hP<e?gN<e?f7<e?gO<e?hk<e?g5<e?0:-1:0:-1:h_<e?cO<e?0:-1:0:-1:dn<e?hK<e?ha<e?hU<e?0:-1:0:-1:af<e?bO<e?0:-1:0:-1:gK<e?g6<e?b5<e?el<e?cU<e?fq<e?0:-1:0:-1:hI<e?f2<e?0:-1:0:-1:cI<e?T<e?aA<e?hL<e?0:-1:0:-1:bB<e?ds<e?0:-1:0:-1:cj<e?aO<e?fw<e?fy<e?cn<e?aY<e?dy<e?fx<e?g4<e?hy<e?0:-1:0:-1:bQ<e?bU<e?0:-1:0:-1:go<e?b2<e?be<e?gd<e?0:-1:0:-1:fz<e?a8<e?0:-1:0:-1:ho<e?e2<e?gw<e?c1<e?gl<e?a1<e?0:-1:0:-1:gq<e?ek<e?0:-1:0:-1:fW<e?fE<e?Z<e?hc<e?0:-1:0:-1:dT<e?fr<e?0:-1:0:-1:ci<e?c_<e?bk<e?_<e?cR<e?fa<e?S<e?W<e?0:-1:0:-1:eM<e?e3<e?0:-1:0:-1:gZ<e?ap<e?dd<e?ea<e?0:-1:0:-1:fB<e?h$<e?0:-1:0:-1:X<e?by<e?al<e?aL<e?a9<e?cT<e?0:-1:0:-1:bR<e?c4<e?0:-1:0:-1:dv<e?dM<e?cS<e?fA<e?0:-1:0:-1:dN<e?L<e?0:-1:0:-1:V<e?f1<e?ie<e?bb<e?ac<e?fC<e?fb<e?hY<e?bH<e?cs<e?cZ<e?bY<e?dU<e?aQ<e?0:-1:0:-1:bl<e?cl<e?0:-1:0:-1:dg<e?hj<e?gF<e?b0<e?0:-1:0:-1:gQ<e?dV<e?0:-1:0:-1:g3<e?he<e?gM<e?e6<e?f6<e?ff<e?0:-1:0:-1:hG<e?hx<e?0:-1:0:-1:dH<e?hJ<e?g7<e?gH<e?0:-1:0:-1:fK<e?eQ<e?0:-1:0:-1:fX<e?dc<e?aM<e?gt<e?et<e?cp<e?dC<e?d4<e?0:-1:0:-1:eL<e?cd<e?0:-1:0:-1:U<e?at<e?fn<e?dp<e?0:-1:0:-1:f$<e?fS<e?0:-1:0:-1:dE<e?bc<e?eb<e?fg<e?df<e?ck<e?0:-1:0:-1:d3<e?e0<e?0:-1:0:-1:aI<e?d1<e?cG<e?fZ<e?0:-1:0:-1:b_<e?dR<e?0:-1:0:-1:hs<e?gp<e?gV<e?gz<e?eY<e?ef<e?gT<e?ht<e?h2<e?hR<e?0:-1:0:-1:ae<e?eV<e?0:-1:0:-1:dP<e?bf<e?eG<e?ep<e?0:-1:0:-1:di<e?bz<e?0:-1:0:-1:hd<e?bM<e?fI<e?aU<e?gS<e?b1<e?0:-1:0:-1:cq<e?em<e?0:-1:0:-1:h1<e?cK<e?d5<e?d0<e?0:-1:0:-1:hZ<e?ic<e?0:-1:0:-1:hV<e?hu<e?ih<e?a2<e?h8<e?ez<e?hr<e?a5<e?0:-1:0:-1:f5<e?h6<e?0:-1:0:-1:bW<e?hN<e?h3<e?e9<e?0:-1:0:-1:bm<e?dF<e?0:-1:0:-1:eE<e?bE<e?bI<e?hO<e?gR<e?hn<e?0:-1:0:-1:hf<e?bG<e?0:-1:0:-1:bt<e?cc<e?en<e?fs<e?0:-1:0:-1:gh<e?fj<e?0:-1:0:-1:eg<e?c3<e?cu<e?cm<e?c8<e?dJ<e?g1<e?g9<e?dk<e?hF<e?hq<e?cX<e?0:-1:0:-1:hw<e?bj<e?0:-1:0:-1:dm<e?cM<e?eU<e?ao<e?0:-1:0:-1:gB<e?bx<e?0:-1:0:-1:cB<e?dA<e?fe<e?bd<e?d7<e?bv<e?0:-1:0:-1:fY<e?fO<e?0:-1:0:-1:da<e?c9<e?aZ<e?cL<e?0:-1:0:-1:d8<e?aF<e?0:-1:0:-1:d_<e?g0<e?bX<e?a7<e?bu<e?h4<e?e5<e?fD<e?0:-1:0:-1:er<e?aD<e?0:-1:0:-1:aC<e?eW<e?hT<e?gy<e?0:-1:0:-1:gW<e?ct<e?0:-1:0:-1:bs<e?cY<e?fv<e?ej<e?eR<e?gu<e?0:-1:0:-1:fN<e?ee<e?0:-1:0:-1:aj<e?aP<e?bZ<e?cQ<e?0:-1:0:-1:gf<e?bw<e?0:-1:0:-1:aW<e?eJ<e?dz<e?gj<e?bn<e?es<e?aK<e?gb<e?dW<e?hb<e?0:-1:0:-1:b4<e?aN<e?0:-1:0:-1:b$<e?cP<e?ei<e?fH<e?0:-1:0:-1:ce<e?fh<e?0:-1:0:-1:c0<e?ab<e?dK<e?bV<e?bi<e?c2<e?0:-1:0:-1:az<e?bq<e?0:-1:0:-1:dO<e?fL<e?cf<e?gi<e?0:-1:0:-1:db<e?gx<e?0:-1:0:-1:ia<e?hE<e?fQ<e?gg<e?Y<e?dl<e?gk<e?de<e?0:-1:0:-1:ey<e?av<e?0:-1:0:-1:ax<e?eF<e?eT<e?dq<e?0:-1:0:-1:h9<e?a0<e?0:-1:0:-1:ev<e?eZ<e?eH<e?hm<e?g8<e?g_<e?0:-1:0:-1:aX<e?ba<e?0:-1:0:-1:hv<e?hh<e?hg<e?c7<e?0:-1:0:-1:gC<e?gD<e?0:-1:0:-1:G(Nc,e+M|0)-1|0:-1;if(3<kO>>>0)var
b=d(a);else
switch(kO){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
kP=mt(c(a));if(2<kP>>>0)var
b=d(a);else
switch(kP){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
kQ=i$(c(a));if(2<kQ>>>0)var
b=d(a);else
switch(kQ){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
kR=jv(c(a));if(2<kR>>>0)var
b=d(a);else
switch(kR){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,22);var
kS=K(c(a)),b=0===kS?D(a):1===kS?E(a):d(a)}}}break;default:B(a,73);var
kT=i4(c(a));if(2<kT>>>0)var
b=d(a);else
switch(kT){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
kU=jc(c(a));if(2<kU>>>0)var
b=d(a);else
switch(kU){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
kV=iA(c(a));if(2<kV>>>0)var
b=d(a);else
switch(kV){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,23);var
kW=K(c(a)),b=0===kW?D(a):1===kW?E(a):d(a)}}}}break;case
34:B(a,73);var
k1=jt(c(a));if(2<k1>>>0)var
b=d(a);else
switch(k1){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
k3=im(c(a));if(2<k3>>>0)var
b=d(a);else
switch(k3){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
k4=i4(c(a));if(2<k4>>>0)var
b=d(a);else
switch(k4){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
k5=q7(c(a));if(2<k5>>>0)var
b=d(a);else
switch(k5){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,24);var
k6=K(c(a)),b=0===k6?D(a):1===k6?E(a):d(a)}}}}break;case
35:B(a,73);var
f=c(a),k7=35<f?ib<f?gI<f?hz<f?-1:dG<f?e_<f?aH<f?bK<f?eK<f?fF<f?cz<f?hX<f?0:-1:0:-1:eN<f?dI<f?0:-1:0:-1:cg<f?bp<f?dj<f?aR<f?0:-1:0:-1:aa<f?dS<f?0:-1:0:-1:co<f?ec<f?hC<f?gJ<f?cb<f?gr<f?fu<f?dD<f?ah<f?eh<f?d9<f?dx<f?cv<f?cD<f?fl<f?d$<f?0:-1:0:-1:an<f?gm<f?0:-1:0:-1:fd<f?cC<f?gs<f?fG<f?0:-1:0:-1:fR<f?b8<f?0:-1:0:-1:au<f?eq<f?gc<f?b9<f?ex<f?eO<f?0:-1:0:-1:f9<f?fM<f?0:-1:0:-1:eS<f?ar<f?eA<f?cr<f?0:-1:0:-1:e$<f?ai<f?0:-1:0:-1:fc<f?dX<f?d6<f?a_<f?fo<f?cH<f?fT<f?as<f?0:-1:0:-1:f8<f?e4<f?0:-1:0:-1:eB<f?ay<f?aE<f?bA<f?0:-1:0:-1:cN<f?a3<f?0:-1:0:-1:bN<f?cV<f?aS<f?f0<f?bD<f?f3<f?0:-1:0:-1:ad<f?bT<f?0:-1:0:-1:hi<f?ca<f?gA<f?a4<f?0:-1:0:-1:f4<f?h5<f?0:-1:0:-1:b3<f?aV<f?fm<f?eP<f?eD<f?ew<f?dZ<f?dL<f?c$<f?cw<f?0:-1:0:-1:b7<f?cx<f?0:-1:0:-1:aq<f?fV<f?eX<f?am<f?0:-1:0:-1:bP<f?ed<f?0:-1:0:-1:a6<f?gv<f?aB<f?fJ<f?bC<f?bJ<f?0:-1:0:-1:bo<f?cW<f?0:-1:0:-1:a$<f?ak<f?cy<f?bS<f?0:-1:0:-1:ft<f?fi<f?0:-1:0:-1:aw<f?dQ<f?ch<f?aT<f?aG<f?du<f?f_<f?ge<f?0:-1:0:-1:e8<f?b6<f?0:-1:0:-1:br<f?e7<f?fp<f?d2<f?0:-1:0:-1:cF<f?cJ<f?0:-1:0:-1:eC<f?dt<f?eu<f?bF<f?dw<f?c5<f?0:-1:0:-1:bg<f?cE<f?0:-1:0:-1:hp<f?hQ<f?ig<f?c6<f?0:-1:0:-1:gP<f?gG<f?0:-1:0:-1:hS<f?gX<f?h0<f?hl<f?gn<f?bL<f?dh<f?dY<f?hA<f?gU<f?hW<f?gY<f?0:-1:0:-1:aJ<f?hH<f?0:-1:0:-1:fk<f?eI<f?g$<f?g2<f?0:-1:0:-1:dr<f?$<f?0:-1:0:-1:hB<f?h7<f?e1<f?cA<f?fP<f?fU<f?0:-1:0:-1:gE<f?dB<f?0:-1:0:-1:eo<f?gL<f?hM<f?ag<f?0:-1:0:-1:hD<f?id<f?0:-1:0:-1:bh<f?ga<f?hP<f?gN<f?f7<f?gO<f?hk<f?g5<f?0:-1:0:-1:h_<f?cO<f?0:-1:0:-1:dn<f?hK<f?ha<f?hU<f?0:-1:0:-1:af<f?bO<f?0:-1:0:-1:gK<f?g6<f?b5<f?el<f?cU<f?fq<f?0:-1:0:-1:hI<f?f2<f?0:-1:0:-1:cI<f?T<f?aA<f?hL<f?0:-1:0:-1:bB<f?ds<f?0:-1:0:-1:cj<f?aO<f?fw<f?fy<f?cn<f?aY<f?dy<f?fx<f?g4<f?hy<f?0:-1:0:-1:bQ<f?bU<f?0:-1:0:-1:go<f?b2<f?be<f?gd<f?0:-1:0:-1:fz<f?a8<f?0:-1:0:-1:ho<f?e2<f?gw<f?c1<f?gl<f?a1<f?0:-1:0:-1:gq<f?ek<f?0:-1:0:-1:fW<f?fE<f?Z<f?hc<f?0:-1:0:-1:dT<f?fr<f?0:-1:0:-1:ci<f?c_<f?bk<f?_<f?cR<f?fa<f?S<f?W<f?0:-1:0:-1:eM<f?e3<f?0:-1:0:-1:gZ<f?ap<f?dd<f?ea<f?0:-1:0:-1:fB<f?h$<f?0:-1:0:-1:X<f?by<f?al<f?aL<f?a9<f?cT<f?0:-1:0:-1:bR<f?c4<f?0:-1:0:-1:dv<f?dM<f?cS<f?fA<f?0:-1:0:-1:dN<f?L<f?0:-1:0:-1:V<f?f1<f?ie<f?bb<f?ac<f?fC<f?fb<f?hY<f?bH<f?cs<f?cZ<f?bY<f?dU<f?aQ<f?0:-1:0:-1:bl<f?cl<f?0:-1:0:-1:dg<f?hj<f?gF<f?b0<f?0:-1:0:-1:gQ<f?dV<f?0:-1:0:-1:g3<f?he<f?gM<f?e6<f?f6<f?ff<f?0:-1:0:-1:hG<f?hx<f?0:-1:0:-1:dH<f?hJ<f?g7<f?gH<f?0:-1:0:-1:fK<f?eQ<f?0:-1:0:-1:fX<f?dc<f?aM<f?gt<f?et<f?cp<f?dC<f?d4<f?0:-1:0:-1:eL<f?cd<f?0:-1:0:-1:U<f?at<f?fn<f?dp<f?0:-1:0:-1:f$<f?fS<f?0:-1:0:-1:dE<f?bc<f?eb<f?fg<f?df<f?ck<f?0:-1:0:-1:d3<f?e0<f?0:-1:0:-1:aI<f?d1<f?cG<f?fZ<f?0:-1:0:-1:b_<f?dR<f?0:-1:0:-1:hs<f?gp<f?gV<f?gz<f?eY<f?ef<f?gT<f?ht<f?h2<f?hR<f?0:-1:0:-1:ae<f?eV<f?0:-1:0:-1:dP<f?bf<f?eG<f?ep<f?0:-1:0:-1:di<f?bz<f?0:-1:0:-1:hd<f?bM<f?fI<f?aU<f?gS<f?b1<f?0:-1:0:-1:cq<f?em<f?0:-1:0:-1:h1<f?cK<f?d5<f?d0<f?0:-1:0:-1:hZ<f?ic<f?0:-1:0:-1:hV<f?hu<f?ih<f?a2<f?h8<f?ez<f?hr<f?a5<f?0:-1:0:-1:f5<f?h6<f?0:-1:0:-1:bW<f?hN<f?h3<f?e9<f?0:-1:0:-1:bm<f?dF<f?0:-1:0:-1:eE<f?bE<f?bI<f?hO<f?gR<f?hn<f?0:-1:0:-1:hf<f?bG<f?0:-1:0:-1:bt<f?cc<f?en<f?fs<f?0:-1:0:-1:gh<f?fj<f?0:-1:0:-1:eg<f?c3<f?cu<f?cm<f?c8<f?dJ<f?g1<f?g9<f?dk<f?hF<f?hq<f?cX<f?0:-1:0:-1:hw<f?bj<f?0:-1:0:-1:dm<f?cM<f?eU<f?ao<f?0:-1:0:-1:gB<f?bx<f?0:-1:0:-1:cB<f?dA<f?fe<f?bd<f?d7<f?bv<f?0:-1:0:-1:fY<f?fO<f?0:-1:0:-1:da<f?c9<f?aZ<f?cL<f?0:-1:0:-1:d8<f?aF<f?0:-1:0:-1:d_<f?g0<f?bX<f?a7<f?bu<f?h4<f?e5<f?fD<f?0:-1:0:-1:er<f?aD<f?0:-1:0:-1:aC<f?eW<f?hT<f?gy<f?0:-1:0:-1:gW<f?ct<f?0:-1:0:-1:bs<f?cY<f?fv<f?ej<f?eR<f?gu<f?0:-1:0:-1:fN<f?ee<f?0:-1:0:-1:aj<f?aP<f?bZ<f?cQ<f?0:-1:0:-1:gf<f?bw<f?0:-1:0:-1:aW<f?eJ<f?dz<f?gj<f?bn<f?es<f?aK<f?gb<f?dW<f?hb<f?0:-1:0:-1:b4<f?aN<f?0:-1:0:-1:b$<f?cP<f?ei<f?fH<f?0:-1:0:-1:ce<f?fh<f?0:-1:0:-1:c0<f?ab<f?dK<f?bV<f?bi<f?c2<f?0:-1:0:-1:az<f?bq<f?0:-1:0:-1:dO<f?fL<f?cf<f?gi<f?0:-1:0:-1:db<f?gx<f?0:-1:0:-1:ia<f?hE<f?fQ<f?gg<f?Y<f?dl<f?gk<f?de<f?0:-1:0:-1:ey<f?av<f?0:-1:0:-1:ax<f?eF<f?eT<f?dq<f?0:-1:0:-1:h9<f?a0<f?0:-1:0:-1:ev<f?eZ<f?eH<f?hm<f?g8<f?g_<f?0:-1:0:-1:aX<f?ba<f?0:-1:0:-1:hv<f?hh<f?hg<f?c7<f?0:-1:0:-1:gC<f?gD<f?0:-1:0:-1:G(NO,f+M|0)-1|0:-1;if(4<k7>>>0)var
b=d(a);else
switch(k7){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
k8=oE(c(a));if(3<k8>>>0)var
b=d(a);else
switch(k8){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
k9=im(c(a));if(2<k9>>>0)var
b=d(a);else
switch(k9){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,25);var
k_=K(c(a)),b=0===k_?D(a):1===k_?E(a):d(a)}break;default:B(a,73);var
k$=jv(c(a));if(2<k$>>>0)var
b=d(a);else
switch(k$){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lb=oF(c(a));if(2<lb>>>0)var
b=d(a);else
switch(lb){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,26);var
lc=K(c(a)),b=0===lc?D(a):1===lc?E(a):d(a)}}}break;case
3:B(a,73);var
ld=i4(c(a));if(2<ld>>>0)var
b=d(a);else
switch(ld){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lf=kj(c(a));if(2<lf>>>0)var
b=d(a);else
switch(lf){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lg=kj(c(a));if(2<lg>>>0)var
b=d(a);else
switch(lg){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,27);var
li=K(c(a)),b=0===li?D(a):1===li?E(a):d(a)}}}break;default:B(a,73);var
lj=i$(c(a));if(2<lj>>>0)var
b=d(a);else
switch(lj){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lk=oE(c(a));if(3<lk>>>0)var
b=d(a);else
switch(lk){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
ll=iA(c(a));if(2<ll>>>0)var
b=d(a);else
switch(ll){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,28);var
lm=K(c(a)),b=0===lm?D(a):1===lm?E(a):d(a)}break;default:B(a,73);var
lo=jc(c(a));if(2<lo>>>0)var
b=d(a);else
switch(lo){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lp=i$(c(a));if(2<lp>>>0)var
b=d(a);else
switch(lp){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lq=kh(c(a));if(2<lq>>>0)var
b=d(a);else
switch(lq){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
ls=im(c(a));if(2<ls>>>0)var
b=d(a);else
switch(ls){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,29);var
lt=K(c(a)),b=0===lt?D(a):1===lt?E(a):d(a)}}}}}}}break;case
36:B(a,73);var
g=c(a),lu=35<g?ib<g?gI<g?hz<g?-1:dG<g?e_<g?aH<g?bK<g?eK<g?fF<g?cz<g?hX<g?0:-1:0:-1:eN<g?dI<g?0:-1:0:-1:cg<g?bp<g?dj<g?aR<g?0:-1:0:-1:aa<g?dS<g?0:-1:0:-1:co<g?ec<g?hC<g?gJ<g?cb<g?gr<g?fu<g?dD<g?ah<g?eh<g?d9<g?dx<g?cv<g?cD<g?fl<g?d$<g?0:-1:0:-1:an<g?gm<g?0:-1:0:-1:fd<g?cC<g?gs<g?fG<g?0:-1:0:-1:fR<g?b8<g?0:-1:0:-1:au<g?eq<g?gc<g?b9<g?ex<g?eO<g?0:-1:0:-1:f9<g?fM<g?0:-1:0:-1:eS<g?ar<g?eA<g?cr<g?0:-1:0:-1:e$<g?ai<g?0:-1:0:-1:fc<g?dX<g?d6<g?a_<g?fo<g?cH<g?fT<g?as<g?0:-1:0:-1:f8<g?e4<g?0:-1:0:-1:eB<g?ay<g?aE<g?bA<g?0:-1:0:-1:cN<g?a3<g?0:-1:0:-1:bN<g?cV<g?aS<g?f0<g?bD<g?f3<g?0:-1:0:-1:ad<g?bT<g?0:-1:0:-1:hi<g?ca<g?gA<g?a4<g?0:-1:0:-1:f4<g?h5<g?0:-1:0:-1:b3<g?aV<g?fm<g?eP<g?eD<g?ew<g?dZ<g?dL<g?c$<g?cw<g?0:-1:0:-1:b7<g?cx<g?0:-1:0:-1:aq<g?fV<g?eX<g?am<g?0:-1:0:-1:bP<g?ed<g?0:-1:0:-1:a6<g?gv<g?aB<g?fJ<g?bC<g?bJ<g?0:-1:0:-1:bo<g?cW<g?0:-1:0:-1:a$<g?ak<g?cy<g?bS<g?0:-1:0:-1:ft<g?fi<g?0:-1:0:-1:aw<g?dQ<g?ch<g?aT<g?aG<g?du<g?f_<g?ge<g?0:-1:0:-1:e8<g?b6<g?0:-1:0:-1:br<g?e7<g?fp<g?d2<g?0:-1:0:-1:cF<g?cJ<g?0:-1:0:-1:eC<g?dt<g?eu<g?bF<g?dw<g?c5<g?0:-1:0:-1:bg<g?cE<g?0:-1:0:-1:hp<g?hQ<g?ig<g?c6<g?0:-1:0:-1:gP<g?gG<g?0:-1:0:-1:hS<g?gX<g?h0<g?hl<g?gn<g?bL<g?dh<g?dY<g?hA<g?gU<g?hW<g?gY<g?0:-1:0:-1:aJ<g?hH<g?0:-1:0:-1:fk<g?eI<g?g$<g?g2<g?0:-1:0:-1:dr<g?$<g?0:-1:0:-1:hB<g?h7<g?e1<g?cA<g?fP<g?fU<g?0:-1:0:-1:gE<g?dB<g?0:-1:0:-1:eo<g?gL<g?hM<g?ag<g?0:-1:0:-1:hD<g?id<g?0:-1:0:-1:bh<g?ga<g?hP<g?gN<g?f7<g?gO<g?hk<g?g5<g?0:-1:0:-1:h_<g?cO<g?0:-1:0:-1:dn<g?hK<g?ha<g?hU<g?0:-1:0:-1:af<g?bO<g?0:-1:0:-1:gK<g?g6<g?b5<g?el<g?cU<g?fq<g?0:-1:0:-1:hI<g?f2<g?0:-1:0:-1:cI<g?T<g?aA<g?hL<g?0:-1:0:-1:bB<g?ds<g?0:-1:0:-1:cj<g?aO<g?fw<g?fy<g?cn<g?aY<g?dy<g?fx<g?g4<g?hy<g?0:-1:0:-1:bQ<g?bU<g?0:-1:0:-1:go<g?b2<g?be<g?gd<g?0:-1:0:-1:fz<g?a8<g?0:-1:0:-1:ho<g?e2<g?gw<g?c1<g?gl<g?a1<g?0:-1:0:-1:gq<g?ek<g?0:-1:0:-1:fW<g?fE<g?Z<g?hc<g?0:-1:0:-1:dT<g?fr<g?0:-1:0:-1:ci<g?c_<g?bk<g?_<g?cR<g?fa<g?S<g?W<g?0:-1:0:-1:eM<g?e3<g?0:-1:0:-1:gZ<g?ap<g?dd<g?ea<g?0:-1:0:-1:fB<g?h$<g?0:-1:0:-1:X<g?by<g?al<g?aL<g?a9<g?cT<g?0:-1:0:-1:bR<g?c4<g?0:-1:0:-1:dv<g?dM<g?cS<g?fA<g?0:-1:0:-1:dN<g?L<g?0:-1:0:-1:V<g?f1<g?ie<g?bb<g?ac<g?fC<g?fb<g?hY<g?bH<g?cs<g?cZ<g?bY<g?dU<g?aQ<g?0:-1:0:-1:bl<g?cl<g?0:-1:0:-1:dg<g?hj<g?gF<g?b0<g?0:-1:0:-1:gQ<g?dV<g?0:-1:0:-1:g3<g?he<g?gM<g?e6<g?f6<g?ff<g?0:-1:0:-1:hG<g?hx<g?0:-1:0:-1:dH<g?hJ<g?g7<g?gH<g?0:-1:0:-1:fK<g?eQ<g?0:-1:0:-1:fX<g?dc<g?aM<g?gt<g?et<g?cp<g?dC<g?d4<g?0:-1:0:-1:eL<g?cd<g?0:-1:0:-1:U<g?at<g?fn<g?dp<g?0:-1:0:-1:f$<g?fS<g?0:-1:0:-1:dE<g?bc<g?eb<g?fg<g?df<g?ck<g?0:-1:0:-1:d3<g?e0<g?0:-1:0:-1:aI<g?d1<g?cG<g?fZ<g?0:-1:0:-1:b_<g?dR<g?0:-1:0:-1:hs<g?gp<g?gV<g?gz<g?eY<g?ef<g?gT<g?ht<g?h2<g?hR<g?0:-1:0:-1:ae<g?eV<g?0:-1:0:-1:dP<g?bf<g?eG<g?ep<g?0:-1:0:-1:di<g?bz<g?0:-1:0:-1:hd<g?bM<g?fI<g?aU<g?gS<g?b1<g?0:-1:0:-1:cq<g?em<g?0:-1:0:-1:h1<g?cK<g?d5<g?d0<g?0:-1:0:-1:hZ<g?ic<g?0:-1:0:-1:hV<g?hu<g?ih<g?a2<g?h8<g?ez<g?hr<g?a5<g?0:-1:0:-1:f5<g?h6<g?0:-1:0:-1:bW<g?hN<g?h3<g?e9<g?0:-1:0:-1:bm<g?dF<g?0:-1:0:-1:eE<g?bE<g?bI<g?hO<g?gR<g?hn<g?0:-1:0:-1:hf<g?bG<g?0:-1:0:-1:bt<g?cc<g?en<g?fs<g?0:-1:0:-1:gh<g?fj<g?0:-1:0:-1:eg<g?c3<g?cu<g?cm<g?c8<g?dJ<g?g1<g?g9<g?dk<g?hF<g?hq<g?cX<g?0:-1:0:-1:hw<g?bj<g?0:-1:0:-1:dm<g?cM<g?eU<g?ao<g?0:-1:0:-1:gB<g?bx<g?0:-1:0:-1:cB<g?dA<g?fe<g?bd<g?d7<g?bv<g?0:-1:0:-1:fY<g?fO<g?0:-1:0:-1:da<g?c9<g?aZ<g?cL<g?0:-1:0:-1:d8<g?aF<g?0:-1:0:-1:d_<g?g0<g?bX<g?a7<g?bu<g?h4<g?e5<g?fD<g?0:-1:0:-1:er<g?aD<g?0:-1:0:-1:aC<g?eW<g?hT<g?gy<g?0:-1:0:-1:gW<g?ct<g?0:-1:0:-1:bs<g?cY<g?fv<g?ej<g?eR<g?gu<g?0:-1:0:-1:fN<g?ee<g?0:-1:0:-1:aj<g?aP<g?bZ<g?cQ<g?0:-1:0:-1:gf<g?bw<g?0:-1:0:-1:aW<g?eJ<g?dz<g?gj<g?bn<g?es<g?aK<g?gb<g?dW<g?hb<g?0:-1:0:-1:b4<g?aN<g?0:-1:0:-1:b$<g?cP<g?ei<g?fH<g?0:-1:0:-1:ce<g?fh<g?0:-1:0:-1:c0<g?ab<g?dK<g?bV<g?bi<g?c2<g?0:-1:0:-1:az<g?bq<g?0:-1:0:-1:dO<g?fL<g?cf<g?gi<g?0:-1:0:-1:db<g?gx<g?0:-1:0:-1:ia<g?hE<g?fQ<g?gg<g?Y<g?dl<g?gk<g?de<g?0:-1:0:-1:ey<g?av<g?0:-1:0:-1:ax<g?eF<g?eT<g?dq<g?0:-1:0:-1:h9<g?a0<g?0:-1:0:-1:ev<g?eZ<g?eH<g?hm<g?g8<g?g_<g?0:-1:0:-1:aX<g?ba<g?0:-1:0:-1:hv<g?hh<g?hg<g?c7<g?0:-1:0:-1:gC<g?gD<g?0:-1:0:-1:G(NJ,g+M|0)-1|0:-1;if(3<lu>>>0)var
b=d(a);else
switch(lu){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
h=c(a),lv=35<h?ib<h?gI<h?hz<h?-1:dG<h?e_<h?aH<h?bK<h?eK<h?fF<h?cz<h?hX<h?0:-1:0:-1:eN<h?dI<h?0:-1:0:-1:cg<h?bp<h?dj<h?aR<h?0:-1:0:-1:aa<h?dS<h?0:-1:0:-1:co<h?ec<h?hC<h?gJ<h?cb<h?gr<h?fu<h?dD<h?ah<h?eh<h?d9<h?dx<h?cv<h?cD<h?fl<h?d$<h?0:-1:0:-1:an<h?gm<h?0:-1:0:-1:fd<h?cC<h?gs<h?fG<h?0:-1:0:-1:fR<h?b8<h?0:-1:0:-1:au<h?eq<h?gc<h?b9<h?ex<h?eO<h?0:-1:0:-1:f9<h?fM<h?0:-1:0:-1:eS<h?ar<h?eA<h?cr<h?0:-1:0:-1:e$<h?ai<h?0:-1:0:-1:fc<h?dX<h?d6<h?a_<h?fo<h?cH<h?fT<h?as<h?0:-1:0:-1:f8<h?e4<h?0:-1:0:-1:eB<h?ay<h?aE<h?bA<h?0:-1:0:-1:cN<h?a3<h?0:-1:0:-1:bN<h?cV<h?aS<h?f0<h?bD<h?f3<h?0:-1:0:-1:ad<h?bT<h?0:-1:0:-1:hi<h?ca<h?gA<h?a4<h?0:-1:0:-1:f4<h?h5<h?0:-1:0:-1:b3<h?aV<h?fm<h?eP<h?eD<h?ew<h?dZ<h?dL<h?c$<h?cw<h?0:-1:0:-1:b7<h?cx<h?0:-1:0:-1:aq<h?fV<h?eX<h?am<h?0:-1:0:-1:bP<h?ed<h?0:-1:0:-1:a6<h?gv<h?aB<h?fJ<h?bC<h?bJ<h?0:-1:0:-1:bo<h?cW<h?0:-1:0:-1:a$<h?ak<h?cy<h?bS<h?0:-1:0:-1:ft<h?fi<h?0:-1:0:-1:aw<h?dQ<h?ch<h?aT<h?aG<h?du<h?f_<h?ge<h?0:-1:0:-1:e8<h?b6<h?0:-1:0:-1:br<h?e7<h?fp<h?d2<h?0:-1:0:-1:cF<h?cJ<h?0:-1:0:-1:eC<h?dt<h?eu<h?bF<h?dw<h?c5<h?0:-1:0:-1:bg<h?cE<h?0:-1:0:-1:hp<h?hQ<h?ig<h?c6<h?0:-1:0:-1:gP<h?gG<h?0:-1:0:-1:hS<h?gX<h?h0<h?hl<h?gn<h?bL<h?dh<h?dY<h?hA<h?gU<h?hW<h?gY<h?0:-1:0:-1:aJ<h?hH<h?0:-1:0:-1:fk<h?eI<h?g$<h?g2<h?0:-1:0:-1:dr<h?$<h?0:-1:0:-1:hB<h?h7<h?e1<h?cA<h?fP<h?fU<h?0:-1:0:-1:gE<h?dB<h?0:-1:0:-1:eo<h?gL<h?hM<h?ag<h?0:-1:0:-1:hD<h?id<h?0:-1:0:-1:bh<h?ga<h?hP<h?gN<h?f7<h?gO<h?hk<h?g5<h?0:-1:0:-1:h_<h?cO<h?0:-1:0:-1:dn<h?hK<h?ha<h?hU<h?0:-1:0:-1:af<h?bO<h?0:-1:0:-1:gK<h?g6<h?b5<h?el<h?cU<h?fq<h?0:-1:0:-1:hI<h?f2<h?0:-1:0:-1:cI<h?T<h?aA<h?hL<h?0:-1:0:-1:bB<h?ds<h?0:-1:0:-1:cj<h?aO<h?fw<h?fy<h?cn<h?aY<h?dy<h?fx<h?g4<h?hy<h?0:-1:0:-1:bQ<h?bU<h?0:-1:0:-1:go<h?b2<h?be<h?gd<h?0:-1:0:-1:fz<h?a8<h?0:-1:0:-1:ho<h?e2<h?gw<h?c1<h?gl<h?a1<h?0:-1:0:-1:gq<h?ek<h?0:-1:0:-1:fW<h?fE<h?Z<h?hc<h?0:-1:0:-1:dT<h?fr<h?0:-1:0:-1:ci<h?c_<h?bk<h?_<h?cR<h?fa<h?S<h?W<h?0:-1:0:-1:eM<h?e3<h?0:-1:0:-1:gZ<h?ap<h?dd<h?ea<h?0:-1:0:-1:fB<h?h$<h?0:-1:0:-1:X<h?by<h?al<h?aL<h?a9<h?cT<h?0:-1:0:-1:bR<h?c4<h?0:-1:0:-1:dv<h?dM<h?cS<h?fA<h?0:-1:0:-1:dN<h?L<h?0:-1:0:-1:V<h?f1<h?ie<h?bb<h?ac<h?fC<h?fb<h?hY<h?bH<h?cs<h?cZ<h?bY<h?dU<h?aQ<h?0:-1:0:-1:bl<h?cl<h?0:-1:0:-1:dg<h?hj<h?gF<h?b0<h?0:-1:0:-1:gQ<h?dV<h?0:-1:0:-1:g3<h?he<h?gM<h?e6<h?f6<h?ff<h?0:-1:0:-1:hG<h?hx<h?0:-1:0:-1:dH<h?hJ<h?g7<h?gH<h?0:-1:0:-1:fK<h?eQ<h?0:-1:0:-1:fX<h?dc<h?aM<h?gt<h?et<h?cp<h?dC<h?d4<h?0:-1:0:-1:eL<h?cd<h?0:-1:0:-1:U<h?at<h?fn<h?dp<h?0:-1:0:-1:f$<h?fS<h?0:-1:0:-1:dE<h?bc<h?eb<h?fg<h?df<h?ck<h?0:-1:0:-1:d3<h?e0<h?0:-1:0:-1:aI<h?d1<h?cG<h?fZ<h?0:-1:0:-1:b_<h?dR<h?0:-1:0:-1:hs<h?gp<h?gV<h?gz<h?eY<h?ef<h?gT<h?ht<h?h2<h?hR<h?0:-1:0:-1:ae<h?eV<h?0:-1:0:-1:dP<h?bf<h?eG<h?ep<h?0:-1:0:-1:di<h?bz<h?0:-1:0:-1:hd<h?bM<h?fI<h?aU<h?gS<h?b1<h?0:-1:0:-1:cq<h?em<h?0:-1:0:-1:h1<h?cK<h?d5<h?d0<h?0:-1:0:-1:hZ<h?ic<h?0:-1:0:-1:hV<h?hu<h?ih<h?a2<h?h8<h?ez<h?hr<h?a5<h?0:-1:0:-1:f5<h?h6<h?0:-1:0:-1:bW<h?hN<h?h3<h?e9<h?0:-1:0:-1:bm<h?dF<h?0:-1:0:-1:eE<h?bE<h?bI<h?hO<h?gR<h?hn<h?0:-1:0:-1:hf<h?bG<h?0:-1:0:-1:bt<h?cc<h?en<h?fs<h?0:-1:0:-1:gh<h?fj<h?0:-1:0:-1:eg<h?c3<h?cu<h?cm<h?c8<h?dJ<h?g1<h?g9<h?dk<h?hF<h?hq<h?cX<h?0:-1:0:-1:hw<h?bj<h?0:-1:0:-1:dm<h?cM<h?eU<h?ao<h?0:-1:0:-1:gB<h?bx<h?0:-1:0:-1:cB<h?dA<h?fe<h?bd<h?d7<h?bv<h?0:-1:0:-1:fY<h?fO<h?0:-1:0:-1:da<h?c9<h?aZ<h?cL<h?0:-1:0:-1:d8<h?aF<h?0:-1:0:-1:d_<h?g0<h?bX<h?a7<h?bu<h?h4<h?e5<h?fD<h?0:-1:0:-1:er<h?aD<h?0:-1:0:-1:aC<h?eW<h?hT<h?gy<h?0:-1:0:-1:gW<h?ct<h?0:-1:0:-1:bs<h?cY<h?fv<h?ej<h?eR<h?gu<h?0:-1:0:-1:fN<h?ee<h?0:-1:0:-1:aj<h?aP<h?bZ<h?cQ<h?0:-1:0:-1:gf<h?bw<h?0:-1:0:-1:aW<h?eJ<h?dz<h?gj<h?bn<h?es<h?aK<h?gb<h?dW<h?hb<h?0:-1:0:-1:b4<h?aN<h?0:-1:0:-1:b$<h?cP<h?ei<h?fH<h?0:-1:0:-1:ce<h?fh<h?0:-1:0:-1:c0<h?ab<h?dK<h?bV<h?bi<h?c2<h?0:-1:0:-1:az<h?bq<h?0:-1:0:-1:dO<h?fL<h?cf<h?gi<h?0:-1:0:-1:db<h?gx<h?0:-1:0:-1:ia<h?hE<h?fQ<h?gg<h?Y<h?dl<h?gk<h?de<h?0:-1:0:-1:ey<h?av<h?0:-1:0:-1:ax<h?eF<h?eT<h?dq<h?0:-1:0:-1:h9<h?a0<h?0:-1:0:-1:ev<h?eZ<h?eH<h?hm<h?g8<h?g_<h?0:-1:0:-1:aX<h?ba<h?0:-1:0:-1:hv<h?hh<h?hg<h?c7<h?0:-1:0:-1:gC<h?gD<h?0:-1:0:-1:G(ND,h+M|0)-1|0:-1;if(5<lv>>>0)var
b=d(a);else
switch(lv){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
lw=kh(c(a));if(2<lw>>>0)var
b=d(a);else
switch(lw){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lx=mm(c(a));if(2<lx>>>0)var
b=d(a);else
switch(lx){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
ly=mm(c(a));if(2<ly>>>0)var
b=d(a);else
switch(ly){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lz=im(c(a));if(2<lz>>>0)var
b=d(a);else
switch(lz){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lA=jt(c(a));if(2<lA>>>0)var
b=d(a);else
switch(lA){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,30);var
lB=K(c(a)),b=0===lB?D(a):1===lB?E(a):d(a)}}}}}break;case
3:B(a,73);var
lC=ja(c(a));if(2<lC>>>0)var
b=d(a);else
switch(lC){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lD=i4(c(a));if(2<lD>>>0)var
b=d(a);else
switch(lD){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lE=jt(c(a));if(2<lE>>>0)var
b=d(a);else
switch(lE){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lG=im(c(a));if(2<lG>>>0)var
b=d(a);else
switch(lG){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,31);var
lK=K(c(a)),b=0===lK?D(a):1===lK?E(a):d(a)}}}}break;case
4:B(a,73);var
lL=i4(c(a));if(2<lL>>>0)var
b=d(a);else
switch(lL){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lM=kh(c(a));if(2<lM>>>0)var
b=d(a);else
switch(lM){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lN=ja(c(a));if(2<lN>>>0)var
b=d(a);else
switch(lN){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lO=iA(c(a));if(2<lO>>>0)var
b=d(a);else
switch(lO){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,32);var
lP=K(c(a)),b=0===lP?D(a):1===lP?E(a):d(a)}}}}break;default:B(a,73);var
lQ=im(c(a));if(2<lQ>>>0)var
b=d(a);else
switch(lQ){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lR=iA(c(a));if(2<lR>>>0)var
b=d(a);else
switch(lR){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lS=im(c(a));if(2<lS>>>0)var
b=d(a);else
switch(lS){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,33);var
lT=K(c(a)),b=0===lT?D(a):1===lT?E(a):d(a)}}}}break;default:B(a,34);var
lU=K(c(a)),b=0===lU?D(a):1===lU?E(a):d(a)}break;case
37:B(a,73);var
i=c(a),lV=35<i?ib<i?gI<i?hz<i?-1:dG<i?e_<i?aH<i?bK<i?eK<i?fF<i?cz<i?hX<i?0:-1:0:-1:eN<i?dI<i?0:-1:0:-1:cg<i?bp<i?dj<i?aR<i?0:-1:0:-1:aa<i?dS<i?0:-1:0:-1:co<i?ec<i?hC<i?gJ<i?cb<i?gr<i?fu<i?dD<i?ah<i?eh<i?d9<i?dx<i?cv<i?cD<i?fl<i?d$<i?0:-1:0:-1:an<i?gm<i?0:-1:0:-1:fd<i?cC<i?gs<i?fG<i?0:-1:0:-1:fR<i?b8<i?0:-1:0:-1:au<i?eq<i?gc<i?b9<i?ex<i?eO<i?0:-1:0:-1:f9<i?fM<i?0:-1:0:-1:eS<i?ar<i?eA<i?cr<i?0:-1:0:-1:e$<i?ai<i?0:-1:0:-1:fc<i?dX<i?d6<i?a_<i?fo<i?cH<i?fT<i?as<i?0:-1:0:-1:f8<i?e4<i?0:-1:0:-1:eB<i?ay<i?aE<i?bA<i?0:-1:0:-1:cN<i?a3<i?0:-1:0:-1:bN<i?cV<i?aS<i?f0<i?bD<i?f3<i?0:-1:0:-1:ad<i?bT<i?0:-1:0:-1:hi<i?ca<i?gA<i?a4<i?0:-1:0:-1:f4<i?h5<i?0:-1:0:-1:b3<i?aV<i?fm<i?eP<i?eD<i?ew<i?dZ<i?dL<i?c$<i?cw<i?0:-1:0:-1:b7<i?cx<i?0:-1:0:-1:aq<i?fV<i?eX<i?am<i?0:-1:0:-1:bP<i?ed<i?0:-1:0:-1:a6<i?gv<i?aB<i?fJ<i?bC<i?bJ<i?0:-1:0:-1:bo<i?cW<i?0:-1:0:-1:a$<i?ak<i?cy<i?bS<i?0:-1:0:-1:ft<i?fi<i?0:-1:0:-1:aw<i?dQ<i?ch<i?aT<i?aG<i?du<i?f_<i?ge<i?0:-1:0:-1:e8<i?b6<i?0:-1:0:-1:br<i?e7<i?fp<i?d2<i?0:-1:0:-1:cF<i?cJ<i?0:-1:0:-1:eC<i?dt<i?eu<i?bF<i?dw<i?c5<i?0:-1:0:-1:bg<i?cE<i?0:-1:0:-1:hp<i?hQ<i?ig<i?c6<i?0:-1:0:-1:gP<i?gG<i?0:-1:0:-1:hS<i?gX<i?h0<i?hl<i?gn<i?bL<i?dh<i?dY<i?hA<i?gU<i?hW<i?gY<i?0:-1:0:-1:aJ<i?hH<i?0:-1:0:-1:fk<i?eI<i?g$<i?g2<i?0:-1:0:-1:dr<i?$<i?0:-1:0:-1:hB<i?h7<i?e1<i?cA<i?fP<i?fU<i?0:-1:0:-1:gE<i?dB<i?0:-1:0:-1:eo<i?gL<i?hM<i?ag<i?0:-1:0:-1:hD<i?id<i?0:-1:0:-1:bh<i?ga<i?hP<i?gN<i?f7<i?gO<i?hk<i?g5<i?0:-1:0:-1:h_<i?cO<i?0:-1:0:-1:dn<i?hK<i?ha<i?hU<i?0:-1:0:-1:af<i?bO<i?0:-1:0:-1:gK<i?g6<i?b5<i?el<i?cU<i?fq<i?0:-1:0:-1:hI<i?f2<i?0:-1:0:-1:cI<i?T<i?aA<i?hL<i?0:-1:0:-1:bB<i?ds<i?0:-1:0:-1:cj<i?aO<i?fw<i?fy<i?cn<i?aY<i?dy<i?fx<i?g4<i?hy<i?0:-1:0:-1:bQ<i?bU<i?0:-1:0:-1:go<i?b2<i?be<i?gd<i?0:-1:0:-1:fz<i?a8<i?0:-1:0:-1:ho<i?e2<i?gw<i?c1<i?gl<i?a1<i?0:-1:0:-1:gq<i?ek<i?0:-1:0:-1:fW<i?fE<i?Z<i?hc<i?0:-1:0:-1:dT<i?fr<i?0:-1:0:-1:ci<i?c_<i?bk<i?_<i?cR<i?fa<i?S<i?W<i?0:-1:0:-1:eM<i?e3<i?0:-1:0:-1:gZ<i?ap<i?dd<i?ea<i?0:-1:0:-1:fB<i?h$<i?0:-1:0:-1:X<i?by<i?al<i?aL<i?a9<i?cT<i?0:-1:0:-1:bR<i?c4<i?0:-1:0:-1:dv<i?dM<i?cS<i?fA<i?0:-1:0:-1:dN<i?L<i?0:-1:0:-1:V<i?f1<i?ie<i?bb<i?ac<i?fC<i?fb<i?hY<i?bH<i?cs<i?cZ<i?bY<i?dU<i?aQ<i?0:-1:0:-1:bl<i?cl<i?0:-1:0:-1:dg<i?hj<i?gF<i?b0<i?0:-1:0:-1:gQ<i?dV<i?0:-1:0:-1:g3<i?he<i?gM<i?e6<i?f6<i?ff<i?0:-1:0:-1:hG<i?hx<i?0:-1:0:-1:dH<i?hJ<i?g7<i?gH<i?0:-1:0:-1:fK<i?eQ<i?0:-1:0:-1:fX<i?dc<i?aM<i?gt<i?et<i?cp<i?dC<i?d4<i?0:-1:0:-1:eL<i?cd<i?0:-1:0:-1:U<i?at<i?fn<i?dp<i?0:-1:0:-1:f$<i?fS<i?0:-1:0:-1:dE<i?bc<i?eb<i?fg<i?df<i?ck<i?0:-1:0:-1:d3<i?e0<i?0:-1:0:-1:aI<i?d1<i?cG<i?fZ<i?0:-1:0:-1:b_<i?dR<i?0:-1:0:-1:hs<i?gp<i?gV<i?gz<i?eY<i?ef<i?gT<i?ht<i?h2<i?hR<i?0:-1:0:-1:ae<i?eV<i?0:-1:0:-1:dP<i?bf<i?eG<i?ep<i?0:-1:0:-1:di<i?bz<i?0:-1:0:-1:hd<i?bM<i?fI<i?aU<i?gS<i?b1<i?0:-1:0:-1:cq<i?em<i?0:-1:0:-1:h1<i?cK<i?d5<i?d0<i?0:-1:0:-1:hZ<i?ic<i?0:-1:0:-1:hV<i?hu<i?ih<i?a2<i?h8<i?ez<i?hr<i?a5<i?0:-1:0:-1:f5<i?h6<i?0:-1:0:-1:bW<i?hN<i?h3<i?e9<i?0:-1:0:-1:bm<i?dF<i?0:-1:0:-1:eE<i?bE<i?bI<i?hO<i?gR<i?hn<i?0:-1:0:-1:hf<i?bG<i?0:-1:0:-1:bt<i?cc<i?en<i?fs<i?0:-1:0:-1:gh<i?fj<i?0:-1:0:-1:eg<i?c3<i?cu<i?cm<i?c8<i?dJ<i?g1<i?g9<i?dk<i?hF<i?hq<i?cX<i?0:-1:0:-1:hw<i?bj<i?0:-1:0:-1:dm<i?cM<i?eU<i?ao<i?0:-1:0:-1:gB<i?bx<i?0:-1:0:-1:cB<i?dA<i?fe<i?bd<i?d7<i?bv<i?0:-1:0:-1:fY<i?fO<i?0:-1:0:-1:da<i?c9<i?aZ<i?cL<i?0:-1:0:-1:d8<i?aF<i?0:-1:0:-1:d_<i?g0<i?bX<i?a7<i?bu<i?h4<i?e5<i?fD<i?0:-1:0:-1:er<i?aD<i?0:-1:0:-1:aC<i?eW<i?hT<i?gy<i?0:-1:0:-1:gW<i?ct<i?0:-1:0:-1:bs<i?cY<i?fv<i?ej<i?eR<i?gu<i?0:-1:0:-1:fN<i?ee<i?0:-1:0:-1:aj<i?aP<i?bZ<i?cQ<i?0:-1:0:-1:gf<i?bw<i?0:-1:0:-1:aW<i?eJ<i?dz<i?gj<i?bn<i?es<i?aK<i?gb<i?dW<i?hb<i?0:-1:0:-1:b4<i?aN<i?0:-1:0:-1:b$<i?cP<i?ei<i?fH<i?0:-1:0:-1:ce<i?fh<i?0:-1:0:-1:c0<i?ab<i?dK<i?bV<i?bi<i?c2<i?0:-1:0:-1:az<i?bq<i?0:-1:0:-1:dO<i?fL<i?cf<i?gi<i?0:-1:0:-1:db<i?gx<i?0:-1:0:-1:ia<i?hE<i?fQ<i?gg<i?Y<i?dl<i?gk<i?de<i?0:-1:0:-1:ey<i?av<i?0:-1:0:-1:ax<i?eF<i?eT<i?dq<i?0:-1:0:-1:h9<i?a0<i?0:-1:0:-1:ev<i?eZ<i?eH<i?hm<i?g8<i?g_<i?0:-1:0:-1:aX<i?ba<i?0:-1:0:-1:hv<i?hh<i?hg<i?c7<i?0:-1:0:-1:gC<i?gD<i?0:-1:0:-1:G(NU,i+M|0)-1|0:-1;if(4<lV>>>0)var
b=d(a);else
switch(lV){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
lW=kj(c(a));if(2<lW>>>0)var
b=d(a);else
switch(lW){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
lX=im(c(a));if(2<lX>>>0)var
b=d(a);else
switch(lX){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,35);var
lY=K(c(a)),b=0===lY?D(a):1===lY?E(a):d(a)}}break;case
3:B(a,73);var
l1=kh(c(a));if(2<l1>>>0)var
b=d(a);else
switch(l1){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
l3=oD(c(a));if(2<l3>>>0)var
b=d(a);else
switch(l3){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,36);var
l4=K(c(a)),b=0===l4?D(a):1===l4?E(a):d(a)}}break;default:B(a,73);var
j=c(a),l5=35<j?ib<j?gI<j?hz<j?-1:dG<j?e_<j?aH<j?bK<j?eK<j?fF<j?cz<j?hX<j?0:-1:0:-1:eN<j?dI<j?0:-1:0:-1:cg<j?bp<j?dj<j?aR<j?0:-1:0:-1:aa<j?dS<j?0:-1:0:-1:co<j?ec<j?hC<j?gJ<j?cb<j?gr<j?fu<j?dD<j?ah<j?eh<j?d9<j?dx<j?cv<j?cD<j?fl<j?d$<j?0:-1:0:-1:an<j?gm<j?0:-1:0:-1:fd<j?cC<j?gs<j?fG<j?0:-1:0:-1:fR<j?b8<j?0:-1:0:-1:au<j?eq<j?gc<j?b9<j?ex<j?eO<j?0:-1:0:-1:f9<j?fM<j?0:-1:0:-1:eS<j?ar<j?eA<j?cr<j?0:-1:0:-1:e$<j?ai<j?0:-1:0:-1:fc<j?dX<j?d6<j?a_<j?fo<j?cH<j?fT<j?as<j?0:-1:0:-1:f8<j?e4<j?0:-1:0:-1:eB<j?ay<j?aE<j?bA<j?0:-1:0:-1:cN<j?a3<j?0:-1:0:-1:bN<j?cV<j?aS<j?f0<j?bD<j?f3<j?0:-1:0:-1:ad<j?bT<j?0:-1:0:-1:hi<j?ca<j?gA<j?a4<j?0:-1:0:-1:f4<j?h5<j?0:-1:0:-1:b3<j?aV<j?fm<j?eP<j?eD<j?ew<j?dZ<j?dL<j?c$<j?cw<j?0:-1:0:-1:b7<j?cx<j?0:-1:0:-1:aq<j?fV<j?eX<j?am<j?0:-1:0:-1:bP<j?ed<j?0:-1:0:-1:a6<j?gv<j?aB<j?fJ<j?bC<j?bJ<j?0:-1:0:-1:bo<j?cW<j?0:-1:0:-1:a$<j?ak<j?cy<j?bS<j?0:-1:0:-1:ft<j?fi<j?0:-1:0:-1:aw<j?dQ<j?ch<j?aT<j?aG<j?du<j?f_<j?ge<j?0:-1:0:-1:e8<j?b6<j?0:-1:0:-1:br<j?e7<j?fp<j?d2<j?0:-1:0:-1:cF<j?cJ<j?0:-1:0:-1:eC<j?dt<j?eu<j?bF<j?dw<j?c5<j?0:-1:0:-1:bg<j?cE<j?0:-1:0:-1:hp<j?hQ<j?ig<j?c6<j?0:-1:0:-1:gP<j?gG<j?0:-1:0:-1:hS<j?gX<j?h0<j?hl<j?gn<j?bL<j?dh<j?dY<j?hA<j?gU<j?hW<j?gY<j?0:-1:0:-1:aJ<j?hH<j?0:-1:0:-1:fk<j?eI<j?g$<j?g2<j?0:-1:0:-1:dr<j?$<j?0:-1:0:-1:hB<j?h7<j?e1<j?cA<j?fP<j?fU<j?0:-1:0:-1:gE<j?dB<j?0:-1:0:-1:eo<j?gL<j?hM<j?ag<j?0:-1:0:-1:hD<j?id<j?0:-1:0:-1:bh<j?ga<j?hP<j?gN<j?f7<j?gO<j?hk<j?g5<j?0:-1:0:-1:h_<j?cO<j?0:-1:0:-1:dn<j?hK<j?ha<j?hU<j?0:-1:0:-1:af<j?bO<j?0:-1:0:-1:gK<j?g6<j?b5<j?el<j?cU<j?fq<j?0:-1:0:-1:hI<j?f2<j?0:-1:0:-1:cI<j?T<j?aA<j?hL<j?0:-1:0:-1:bB<j?ds<j?0:-1:0:-1:cj<j?aO<j?fw<j?fy<j?cn<j?aY<j?dy<j?fx<j?g4<j?hy<j?0:-1:0:-1:bQ<j?bU<j?0:-1:0:-1:go<j?b2<j?be<j?gd<j?0:-1:0:-1:fz<j?a8<j?0:-1:0:-1:ho<j?e2<j?gw<j?c1<j?gl<j?a1<j?0:-1:0:-1:gq<j?ek<j?0:-1:0:-1:fW<j?fE<j?Z<j?hc<j?0:-1:0:-1:dT<j?fr<j?0:-1:0:-1:ci<j?c_<j?bk<j?_<j?cR<j?fa<j?S<j?W<j?0:-1:0:-1:eM<j?e3<j?0:-1:0:-1:gZ<j?ap<j?dd<j?ea<j?0:-1:0:-1:fB<j?h$<j?0:-1:0:-1:X<j?by<j?al<j?aL<j?a9<j?cT<j?0:-1:0:-1:bR<j?c4<j?0:-1:0:-1:dv<j?dM<j?cS<j?fA<j?0:-1:0:-1:dN<j?L<j?0:-1:0:-1:V<j?f1<j?ie<j?bb<j?ac<j?fC<j?fb<j?hY<j?bH<j?cs<j?cZ<j?bY<j?dU<j?aQ<j?0:-1:0:-1:bl<j?cl<j?0:-1:0:-1:dg<j?hj<j?gF<j?b0<j?0:-1:0:-1:gQ<j?dV<j?0:-1:0:-1:g3<j?he<j?gM<j?e6<j?f6<j?ff<j?0:-1:0:-1:hG<j?hx<j?0:-1:0:-1:dH<j?hJ<j?g7<j?gH<j?0:-1:0:-1:fK<j?eQ<j?0:-1:0:-1:fX<j?dc<j?aM<j?gt<j?et<j?cp<j?dC<j?d4<j?0:-1:0:-1:eL<j?cd<j?0:-1:0:-1:U<j?at<j?fn<j?dp<j?0:-1:0:-1:f$<j?fS<j?0:-1:0:-1:dE<j?bc<j?eb<j?fg<j?df<j?ck<j?0:-1:0:-1:d3<j?e0<j?0:-1:0:-1:aI<j?d1<j?cG<j?fZ<j?0:-1:0:-1:b_<j?dR<j?0:-1:0:-1:hs<j?gp<j?gV<j?gz<j?eY<j?ef<j?gT<j?ht<j?h2<j?hR<j?0:-1:0:-1:ae<j?eV<j?0:-1:0:-1:dP<j?bf<j?eG<j?ep<j?0:-1:0:-1:di<j?bz<j?0:-1:0:-1:hd<j?bM<j?fI<j?aU<j?gS<j?b1<j?0:-1:0:-1:cq<j?em<j?0:-1:0:-1:h1<j?cK<j?d5<j?d0<j?0:-1:0:-1:hZ<j?ic<j?0:-1:0:-1:hV<j?hu<j?ih<j?a2<j?h8<j?ez<j?hr<j?a5<j?0:-1:0:-1:f5<j?h6<j?0:-1:0:-1:bW<j?hN<j?h3<j?e9<j?0:-1:0:-1:bm<j?dF<j?0:-1:0:-1:eE<j?bE<j?bI<j?hO<j?gR<j?hn<j?0:-1:0:-1:hf<j?bG<j?0:-1:0:-1:bt<j?cc<j?en<j?fs<j?0:-1:0:-1:gh<j?fj<j?0:-1:0:-1:eg<j?c3<j?cu<j?cm<j?c8<j?dJ<j?g1<j?g9<j?dk<j?hF<j?hq<j?cX<j?0:-1:0:-1:hw<j?bj<j?0:-1:0:-1:dm<j?cM<j?eU<j?ao<j?0:-1:0:-1:gB<j?bx<j?0:-1:0:-1:cB<j?dA<j?fe<j?bd<j?d7<j?bv<j?0:-1:0:-1:fY<j?fO<j?0:-1:0:-1:da<j?c9<j?aZ<j?cL<j?0:-1:0:-1:d8<j?aF<j?0:-1:0:-1:d_<j?g0<j?bX<j?a7<j?bu<j?h4<j?e5<j?fD<j?0:-1:0:-1:er<j?aD<j?0:-1:0:-1:aC<j?eW<j?hT<j?gy<j?0:-1:0:-1:gW<j?ct<j?0:-1:0:-1:bs<j?cY<j?fv<j?ej<j?eR<j?gu<j?0:-1:0:-1:fN<j?ee<j?0:-1:0:-1:aj<j?aP<j?bZ<j?cQ<j?0:-1:0:-1:gf<j?bw<j?0:-1:0:-1:aW<j?eJ<j?dz<j?gj<j?bn<j?es<j?aK<j?gb<j?dW<j?hb<j?0:-1:0:-1:b4<j?aN<j?0:-1:0:-1:b$<j?cP<j?ei<j?fH<j?0:-1:0:-1:ce<j?fh<j?0:-1:0:-1:c0<j?ab<j?dK<j?bV<j?bi<j?c2<j?0:-1:0:-1:az<j?bq<j?0:-1:0:-1:dO<j?fL<j?cf<j?gi<j?0:-1:0:-1:db<j?gx<j?0:-1:0:-1:ia<j?hE<j?fQ<j?gg<j?Y<j?dl<j?gk<j?de<j?0:-1:0:-1:ey<j?av<j?0:-1:0:-1:ax<j?eF<j?eT<j?dq<j?0:-1:0:-1:h9<j?a0<j?0:-1:0:-1:ev<j?eZ<j?eH<j?hm<j?g8<j?g_<j?0:-1:0:-1:aX<j?ba<j?0:-1:0:-1:hv<j?hh<j?hg<j?c7<j?0:-1:0:-1:gC<j?gD<j?0:-1:0:-1:G(NI,j+M|0)-1|0:-1;if(3<l5>>>0)var
b=d(a);else
switch(l5){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
l6=j5(c(a));if(2<l6>>>0)var
b=d(a);else
switch(l6){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
l8=jt(c(a));if(2<l8>>>0)var
b=d(a);else
switch(l8){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
l9=iA(c(a));if(2<l9>>>0)var
b=d(a);else
switch(l9){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,37);var
l_=K(c(a)),b=0===l_?D(a):1===l_?E(a):d(a)}}}break;default:B(a,73);var
l$=im(c(a));if(2<l$>>>0)var
b=d(a);else
switch(l$){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
ma=i$(c(a));if(2<ma>>>0)var
b=d(a);else
switch(ma){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
mb=kX(c(a));if(2<mb>>>0)var
b=d(a);else
switch(mb){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
mc=kj(c(a));if(2<mc>>>0)var
b=d(a);else
switch(mc){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,38);var
md=K(c(a)),b=0===md?D(a):1===md?E(a):d(a)}}}}}}break;case
38:B(a,73);var
k=c(a),me=35<k?ib<k?gI<k?hz<k?-1:dG<k?e_<k?aH<k?bK<k?eK<k?fF<k?cz<k?hX<k?0:-1:0:-1:eN<k?dI<k?0:-1:0:-1:cg<k?bp<k?dj<k?aR<k?0:-1:0:-1:aa<k?dS<k?0:-1:0:-1:co<k?ec<k?hC<k?gJ<k?cb<k?gr<k?fu<k?dD<k?ah<k?eh<k?d9<k?dx<k?cv<k?cD<k?fl<k?d$<k?0:-1:0:-1:an<k?gm<k?0:-1:0:-1:fd<k?cC<k?gs<k?fG<k?0:-1:0:-1:fR<k?b8<k?0:-1:0:-1:au<k?eq<k?gc<k?b9<k?ex<k?eO<k?0:-1:0:-1:f9<k?fM<k?0:-1:0:-1:eS<k?ar<k?eA<k?cr<k?0:-1:0:-1:e$<k?ai<k?0:-1:0:-1:fc<k?dX<k?d6<k?a_<k?fo<k?cH<k?fT<k?as<k?0:-1:0:-1:f8<k?e4<k?0:-1:0:-1:eB<k?ay<k?aE<k?bA<k?0:-1:0:-1:cN<k?a3<k?0:-1:0:-1:bN<k?cV<k?aS<k?f0<k?bD<k?f3<k?0:-1:0:-1:ad<k?bT<k?0:-1:0:-1:hi<k?ca<k?gA<k?a4<k?0:-1:0:-1:f4<k?h5<k?0:-1:0:-1:b3<k?aV<k?fm<k?eP<k?eD<k?ew<k?dZ<k?dL<k?c$<k?cw<k?0:-1:0:-1:b7<k?cx<k?0:-1:0:-1:aq<k?fV<k?eX<k?am<k?0:-1:0:-1:bP<k?ed<k?0:-1:0:-1:a6<k?gv<k?aB<k?fJ<k?bC<k?bJ<k?0:-1:0:-1:bo<k?cW<k?0:-1:0:-1:a$<k?ak<k?cy<k?bS<k?0:-1:0:-1:ft<k?fi<k?0:-1:0:-1:aw<k?dQ<k?ch<k?aT<k?aG<k?du<k?f_<k?ge<k?0:-1:0:-1:e8<k?b6<k?0:-1:0:-1:br<k?e7<k?fp<k?d2<k?0:-1:0:-1:cF<k?cJ<k?0:-1:0:-1:eC<k?dt<k?eu<k?bF<k?dw<k?c5<k?0:-1:0:-1:bg<k?cE<k?0:-1:0:-1:hp<k?hQ<k?ig<k?c6<k?0:-1:0:-1:gP<k?gG<k?0:-1:0:-1:hS<k?gX<k?h0<k?hl<k?gn<k?bL<k?dh<k?dY<k?hA<k?gU<k?hW<k?gY<k?0:-1:0:-1:aJ<k?hH<k?0:-1:0:-1:fk<k?eI<k?g$<k?g2<k?0:-1:0:-1:dr<k?$<k?0:-1:0:-1:hB<k?h7<k?e1<k?cA<k?fP<k?fU<k?0:-1:0:-1:gE<k?dB<k?0:-1:0:-1:eo<k?gL<k?hM<k?ag<k?0:-1:0:-1:hD<k?id<k?0:-1:0:-1:bh<k?ga<k?hP<k?gN<k?f7<k?gO<k?hk<k?g5<k?0:-1:0:-1:h_<k?cO<k?0:-1:0:-1:dn<k?hK<k?ha<k?hU<k?0:-1:0:-1:af<k?bO<k?0:-1:0:-1:gK<k?g6<k?b5<k?el<k?cU<k?fq<k?0:-1:0:-1:hI<k?f2<k?0:-1:0:-1:cI<k?T<k?aA<k?hL<k?0:-1:0:-1:bB<k?ds<k?0:-1:0:-1:cj<k?aO<k?fw<k?fy<k?cn<k?aY<k?dy<k?fx<k?g4<k?hy<k?0:-1:0:-1:bQ<k?bU<k?0:-1:0:-1:go<k?b2<k?be<k?gd<k?0:-1:0:-1:fz<k?a8<k?0:-1:0:-1:ho<k?e2<k?gw<k?c1<k?gl<k?a1<k?0:-1:0:-1:gq<k?ek<k?0:-1:0:-1:fW<k?fE<k?Z<k?hc<k?0:-1:0:-1:dT<k?fr<k?0:-1:0:-1:ci<k?c_<k?bk<k?_<k?cR<k?fa<k?S<k?W<k?0:-1:0:-1:eM<k?e3<k?0:-1:0:-1:gZ<k?ap<k?dd<k?ea<k?0:-1:0:-1:fB<k?h$<k?0:-1:0:-1:X<k?by<k?al<k?aL<k?a9<k?cT<k?0:-1:0:-1:bR<k?c4<k?0:-1:0:-1:dv<k?dM<k?cS<k?fA<k?0:-1:0:-1:dN<k?L<k?0:-1:0:-1:V<k?f1<k?ie<k?bb<k?ac<k?fC<k?fb<k?hY<k?bH<k?cs<k?cZ<k?bY<k?dU<k?aQ<k?0:-1:0:-1:bl<k?cl<k?0:-1:0:-1:dg<k?hj<k?gF<k?b0<k?0:-1:0:-1:gQ<k?dV<k?0:-1:0:-1:g3<k?he<k?gM<k?e6<k?f6<k?ff<k?0:-1:0:-1:hG<k?hx<k?0:-1:0:-1:dH<k?hJ<k?g7<k?gH<k?0:-1:0:-1:fK<k?eQ<k?0:-1:0:-1:fX<k?dc<k?aM<k?gt<k?et<k?cp<k?dC<k?d4<k?0:-1:0:-1:eL<k?cd<k?0:-1:0:-1:U<k?at<k?fn<k?dp<k?0:-1:0:-1:f$<k?fS<k?0:-1:0:-1:dE<k?bc<k?eb<k?fg<k?df<k?ck<k?0:-1:0:-1:d3<k?e0<k?0:-1:0:-1:aI<k?d1<k?cG<k?fZ<k?0:-1:0:-1:b_<k?dR<k?0:-1:0:-1:hs<k?gp<k?gV<k?gz<k?eY<k?ef<k?gT<k?ht<k?h2<k?hR<k?0:-1:0:-1:ae<k?eV<k?0:-1:0:-1:dP<k?bf<k?eG<k?ep<k?0:-1:0:-1:di<k?bz<k?0:-1:0:-1:hd<k?bM<k?fI<k?aU<k?gS<k?b1<k?0:-1:0:-1:cq<k?em<k?0:-1:0:-1:h1<k?cK<k?d5<k?d0<k?0:-1:0:-1:hZ<k?ic<k?0:-1:0:-1:hV<k?hu<k?ih<k?a2<k?h8<k?ez<k?hr<k?a5<k?0:-1:0:-1:f5<k?h6<k?0:-1:0:-1:bW<k?hN<k?h3<k?e9<k?0:-1:0:-1:bm<k?dF<k?0:-1:0:-1:eE<k?bE<k?bI<k?hO<k?gR<k?hn<k?0:-1:0:-1:hf<k?bG<k?0:-1:0:-1:bt<k?cc<k?en<k?fs<k?0:-1:0:-1:gh<k?fj<k?0:-1:0:-1:eg<k?c3<k?cu<k?cm<k?c8<k?dJ<k?g1<k?g9<k?dk<k?hF<k?hq<k?cX<k?0:-1:0:-1:hw<k?bj<k?0:-1:0:-1:dm<k?cM<k?eU<k?ao<k?0:-1:0:-1:gB<k?bx<k?0:-1:0:-1:cB<k?dA<k?fe<k?bd<k?d7<k?bv<k?0:-1:0:-1:fY<k?fO<k?0:-1:0:-1:da<k?c9<k?aZ<k?cL<k?0:-1:0:-1:d8<k?aF<k?0:-1:0:-1:d_<k?g0<k?bX<k?a7<k?bu<k?h4<k?e5<k?fD<k?0:-1:0:-1:er<k?aD<k?0:-1:0:-1:aC<k?eW<k?hT<k?gy<k?0:-1:0:-1:gW<k?ct<k?0:-1:0:-1:bs<k?cY<k?fv<k?ej<k?eR<k?gu<k?0:-1:0:-1:fN<k?ee<k?0:-1:0:-1:aj<k?aP<k?bZ<k?cQ<k?0:-1:0:-1:gf<k?bw<k?0:-1:0:-1:aW<k?eJ<k?dz<k?gj<k?bn<k?es<k?aK<k?gb<k?dW<k?hb<k?0:-1:0:-1:b4<k?aN<k?0:-1:0:-1:b$<k?cP<k?ei<k?fH<k?0:-1:0:-1:ce<k?fh<k?0:-1:0:-1:c0<k?ab<k?dK<k?bV<k?bi<k?c2<k?0:-1:0:-1:az<k?bq<k?0:-1:0:-1:dO<k?fL<k?cf<k?gi<k?0:-1:0:-1:db<k?gx<k?0:-1:0:-1:ia<k?hE<k?fQ<k?gg<k?Y<k?dl<k?gk<k?de<k?0:-1:0:-1:ey<k?av<k?0:-1:0:-1:ax<k?eF<k?eT<k?dq<k?0:-1:0:-1:h9<k?a0<k?0:-1:0:-1:ev<k?eZ<k?eH<k?hm<k?g8<k?g_<k?0:-1:0:-1:aX<k?ba<k?0:-1:0:-1:hv<k?hh<k?hg<k?c7<k?0:-1:0:-1:gC<k?gD<k?0:-1:0:-1:G(Nz,k+M|0)-1|0:-1;if(5<me>>>0)var
b=d(a);else
switch(me){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
mf=ja(c(a));if(2<mf>>>0)var
b=d(a);else
switch(mf){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
mg=kj(c(a));if(2<mg>>>0)var
b=d(a);else
switch(mg){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
mn=im(c(a));if(2<mn>>>0)var
b=d(a);else
switch(mn){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,39);var
mx=K(c(a)),b=0===mx?D(a):1===mx?E(a):d(a)}}}break;case
3:B(a,73);var
mE=i$(c(a));if(2<mE>>>0)var
b=d(a);else
switch(mE){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
mF=i4(c(a));if(2<mF>>>0)var
b=d(a);else
switch(mF){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
mG=ja(c(a));if(2<mG>>>0)var
b=d(a);else
switch(mG){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
mH=ja(c(a));if(2<mH>>>0)var
b=d(a);else
switch(mH){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
mI=mt(c(a));if(2<mI>>>0)var
b=d(a);else
switch(mI){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,40);var
mJ=K(c(a)),b=0===mJ?D(a):1===mJ?E(a):d(a)}}}}}break;case
4:B(a,73);var
mX=jt(c(a));if(2<mX>>>0)var
b=d(a);else
switch(mX){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,41);var
m2=K(c(a)),b=0===m2?D(a):1===m2?E(a):d(a)}break;default:B(a,73);var
m7=i$(c(a));if(2<m7>>>0)var
b=d(a);else
switch(m7){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
nc=jv(c(a));if(2<nc>>>0)var
b=d(a);else
switch(nc){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
nf=iA(c(a));if(2<nf>>>0)var
b=d(a);else
switch(nf){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
nk=jc(c(a));if(2<nk>>>0)var
b=d(a);else
switch(nk){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
nl=j5(c(a));if(2<nl>>>0)var
b=d(a);else
switch(nl){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
nn=i$(c(a));if(2<nn>>>0)var
b=d(a);else
switch(nn){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,42);var
nu=K(c(a)),b=0===nu?D(a):1===nu?E(a):d(a)}}}}}}}break;case
39:B(a,73);var
l=c(a),nz=35<l?ib<l?gI<l?hz<l?-1:dG<l?e_<l?aH<l?bK<l?eK<l?fF<l?cz<l?hX<l?0:-1:0:-1:eN<l?dI<l?0:-1:0:-1:cg<l?bp<l?dj<l?aR<l?0:-1:0:-1:aa<l?dS<l?0:-1:0:-1:co<l?ec<l?hC<l?gJ<l?cb<l?gr<l?fu<l?dD<l?ah<l?eh<l?d9<l?dx<l?cv<l?cD<l?fl<l?d$<l?0:-1:0:-1:an<l?gm<l?0:-1:0:-1:fd<l?cC<l?gs<l?fG<l?0:-1:0:-1:fR<l?b8<l?0:-1:0:-1:au<l?eq<l?gc<l?b9<l?ex<l?eO<l?0:-1:0:-1:f9<l?fM<l?0:-1:0:-1:eS<l?ar<l?eA<l?cr<l?0:-1:0:-1:e$<l?ai<l?0:-1:0:-1:fc<l?dX<l?d6<l?a_<l?fo<l?cH<l?fT<l?as<l?0:-1:0:-1:f8<l?e4<l?0:-1:0:-1:eB<l?ay<l?aE<l?bA<l?0:-1:0:-1:cN<l?a3<l?0:-1:0:-1:bN<l?cV<l?aS<l?f0<l?bD<l?f3<l?0:-1:0:-1:ad<l?bT<l?0:-1:0:-1:hi<l?ca<l?gA<l?a4<l?0:-1:0:-1:f4<l?h5<l?0:-1:0:-1:b3<l?aV<l?fm<l?eP<l?eD<l?ew<l?dZ<l?dL<l?c$<l?cw<l?0:-1:0:-1:b7<l?cx<l?0:-1:0:-1:aq<l?fV<l?eX<l?am<l?0:-1:0:-1:bP<l?ed<l?0:-1:0:-1:a6<l?gv<l?aB<l?fJ<l?bC<l?bJ<l?0:-1:0:-1:bo<l?cW<l?0:-1:0:-1:a$<l?ak<l?cy<l?bS<l?0:-1:0:-1:ft<l?fi<l?0:-1:0:-1:aw<l?dQ<l?ch<l?aT<l?aG<l?du<l?f_<l?ge<l?0:-1:0:-1:e8<l?b6<l?0:-1:0:-1:br<l?e7<l?fp<l?d2<l?0:-1:0:-1:cF<l?cJ<l?0:-1:0:-1:eC<l?dt<l?eu<l?bF<l?dw<l?c5<l?0:-1:0:-1:bg<l?cE<l?0:-1:0:-1:hp<l?hQ<l?ig<l?c6<l?0:-1:0:-1:gP<l?gG<l?0:-1:0:-1:hS<l?gX<l?h0<l?hl<l?gn<l?bL<l?dh<l?dY<l?hA<l?gU<l?hW<l?gY<l?0:-1:0:-1:aJ<l?hH<l?0:-1:0:-1:fk<l?eI<l?g$<l?g2<l?0:-1:0:-1:dr<l?$<l?0:-1:0:-1:hB<l?h7<l?e1<l?cA<l?fP<l?fU<l?0:-1:0:-1:gE<l?dB<l?0:-1:0:-1:eo<l?gL<l?hM<l?ag<l?0:-1:0:-1:hD<l?id<l?0:-1:0:-1:bh<l?ga<l?hP<l?gN<l?f7<l?gO<l?hk<l?g5<l?0:-1:0:-1:h_<l?cO<l?0:-1:0:-1:dn<l?hK<l?ha<l?hU<l?0:-1:0:-1:af<l?bO<l?0:-1:0:-1:gK<l?g6<l?b5<l?el<l?cU<l?fq<l?0:-1:0:-1:hI<l?f2<l?0:-1:0:-1:cI<l?T<l?aA<l?hL<l?0:-1:0:-1:bB<l?ds<l?0:-1:0:-1:cj<l?aO<l?fw<l?fy<l?cn<l?aY<l?dy<l?fx<l?g4<l?hy<l?0:-1:0:-1:bQ<l?bU<l?0:-1:0:-1:go<l?b2<l?be<l?gd<l?0:-1:0:-1:fz<l?a8<l?0:-1:0:-1:ho<l?e2<l?gw<l?c1<l?gl<l?a1<l?0:-1:0:-1:gq<l?ek<l?0:-1:0:-1:fW<l?fE<l?Z<l?hc<l?0:-1:0:-1:dT<l?fr<l?0:-1:0:-1:ci<l?c_<l?bk<l?_<l?cR<l?fa<l?S<l?W<l?0:-1:0:-1:eM<l?e3<l?0:-1:0:-1:gZ<l?ap<l?dd<l?ea<l?0:-1:0:-1:fB<l?h$<l?0:-1:0:-1:X<l?by<l?al<l?aL<l?a9<l?cT<l?0:-1:0:-1:bR<l?c4<l?0:-1:0:-1:dv<l?dM<l?cS<l?fA<l?0:-1:0:-1:dN<l?L<l?0:-1:0:-1:V<l?f1<l?ie<l?bb<l?ac<l?fC<l?fb<l?hY<l?bH<l?cs<l?cZ<l?bY<l?dU<l?aQ<l?0:-1:0:-1:bl<l?cl<l?0:-1:0:-1:dg<l?hj<l?gF<l?b0<l?0:-1:0:-1:gQ<l?dV<l?0:-1:0:-1:g3<l?he<l?gM<l?e6<l?f6<l?ff<l?0:-1:0:-1:hG<l?hx<l?0:-1:0:-1:dH<l?hJ<l?g7<l?gH<l?0:-1:0:-1:fK<l?eQ<l?0:-1:0:-1:fX<l?dc<l?aM<l?gt<l?et<l?cp<l?dC<l?d4<l?0:-1:0:-1:eL<l?cd<l?0:-1:0:-1:U<l?at<l?fn<l?dp<l?0:-1:0:-1:f$<l?fS<l?0:-1:0:-1:dE<l?bc<l?eb<l?fg<l?df<l?ck<l?0:-1:0:-1:d3<l?e0<l?0:-1:0:-1:aI<l?d1<l?cG<l?fZ<l?0:-1:0:-1:b_<l?dR<l?0:-1:0:-1:hs<l?gp<l?gV<l?gz<l?eY<l?ef<l?gT<l?ht<l?h2<l?hR<l?0:-1:0:-1:ae<l?eV<l?0:-1:0:-1:dP<l?bf<l?eG<l?ep<l?0:-1:0:-1:di<l?bz<l?0:-1:0:-1:hd<l?bM<l?fI<l?aU<l?gS<l?b1<l?0:-1:0:-1:cq<l?em<l?0:-1:0:-1:h1<l?cK<l?d5<l?d0<l?0:-1:0:-1:hZ<l?ic<l?0:-1:0:-1:hV<l?hu<l?ih<l?a2<l?h8<l?ez<l?hr<l?a5<l?0:-1:0:-1:f5<l?h6<l?0:-1:0:-1:bW<l?hN<l?h3<l?e9<l?0:-1:0:-1:bm<l?dF<l?0:-1:0:-1:eE<l?bE<l?bI<l?hO<l?gR<l?hn<l?0:-1:0:-1:hf<l?bG<l?0:-1:0:-1:bt<l?cc<l?en<l?fs<l?0:-1:0:-1:gh<l?fj<l?0:-1:0:-1:eg<l?c3<l?cu<l?cm<l?c8<l?dJ<l?g1<l?g9<l?dk<l?hF<l?hq<l?cX<l?0:-1:0:-1:hw<l?bj<l?0:-1:0:-1:dm<l?cM<l?eU<l?ao<l?0:-1:0:-1:gB<l?bx<l?0:-1:0:-1:cB<l?dA<l?fe<l?bd<l?d7<l?bv<l?0:-1:0:-1:fY<l?fO<l?0:-1:0:-1:da<l?c9<l?aZ<l?cL<l?0:-1:0:-1:d8<l?aF<l?0:-1:0:-1:d_<l?g0<l?bX<l?a7<l?bu<l?h4<l?e5<l?fD<l?0:-1:0:-1:er<l?aD<l?0:-1:0:-1:aC<l?eW<l?hT<l?gy<l?0:-1:0:-1:gW<l?ct<l?0:-1:0:-1:bs<l?cY<l?fv<l?ej<l?eR<l?gu<l?0:-1:0:-1:fN<l?ee<l?0:-1:0:-1:aj<l?aP<l?bZ<l?cQ<l?0:-1:0:-1:gf<l?bw<l?0:-1:0:-1:aW<l?eJ<l?dz<l?gj<l?bn<l?es<l?aK<l?gb<l?dW<l?hb<l?0:-1:0:-1:b4<l?aN<l?0:-1:0:-1:b$<l?cP<l?ei<l?fH<l?0:-1:0:-1:ce<l?fh<l?0:-1:0:-1:c0<l?ab<l?dK<l?bV<l?bi<l?c2<l?0:-1:0:-1:az<l?bq<l?0:-1:0:-1:dO<l?fL<l?cf<l?gi<l?0:-1:0:-1:db<l?gx<l?0:-1:0:-1:ia<l?hE<l?fQ<l?gg<l?Y<l?dl<l?gk<l?de<l?0:-1:0:-1:ey<l?av<l?0:-1:0:-1:ax<l?eF<l?eT<l?dq<l?0:-1:0:-1:h9<l?a0<l?0:-1:0:-1:ev<l?eZ<l?eH<l?hm<l?g8<l?g_<l?0:-1:0:-1:aX<l?ba<l?0:-1:0:-1:hv<l?hh<l?hg<l?c7<l?0:-1:0:-1:gC<l?gD<l?0:-1:0:-1:G(Ny,l+M|0)-1|0:-1;if(4<nz>>>0)var
b=d(a);else
switch(nz){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,43);var
nB=K(c(a)),b=0===nB?D(a):1===nB?E(a):d(a);break;case
3:B(a,73);var
nD=lH(c(a));if(2<nD>>>0)var
b=d(a);else
switch(nD){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
m=c(a),nH=35<m?ib<m?gI<m?hz<m?-1:dG<m?e_<m?aH<m?bK<m?eK<m?fF<m?cz<m?hX<m?0:-1:0:-1:eN<m?dI<m?0:-1:0:-1:cg<m?bp<m?dj<m?aR<m?0:-1:0:-1:aa<m?dS<m?0:-1:0:-1:co<m?ec<m?hC<m?gJ<m?cb<m?gr<m?fu<m?dD<m?ah<m?eh<m?d9<m?dx<m?cv<m?cD<m?fl<m?d$<m?0:-1:0:-1:an<m?gm<m?0:-1:0:-1:fd<m?cC<m?gs<m?fG<m?0:-1:0:-1:fR<m?b8<m?0:-1:0:-1:au<m?eq<m?gc<m?b9<m?ex<m?eO<m?0:-1:0:-1:f9<m?fM<m?0:-1:0:-1:eS<m?ar<m?eA<m?cr<m?0:-1:0:-1:e$<m?ai<m?0:-1:0:-1:fc<m?dX<m?d6<m?a_<m?fo<m?cH<m?fT<m?as<m?0:-1:0:-1:f8<m?e4<m?0:-1:0:-1:eB<m?ay<m?aE<m?bA<m?0:-1:0:-1:cN<m?a3<m?0:-1:0:-1:bN<m?cV<m?aS<m?f0<m?bD<m?f3<m?0:-1:0:-1:ad<m?bT<m?0:-1:0:-1:hi<m?ca<m?gA<m?a4<m?0:-1:0:-1:f4<m?h5<m?0:-1:0:-1:b3<m?aV<m?fm<m?eP<m?eD<m?ew<m?dZ<m?dL<m?c$<m?cw<m?0:-1:0:-1:b7<m?cx<m?0:-1:0:-1:aq<m?fV<m?eX<m?am<m?0:-1:0:-1:bP<m?ed<m?0:-1:0:-1:a6<m?gv<m?aB<m?fJ<m?bC<m?bJ<m?0:-1:0:-1:bo<m?cW<m?0:-1:0:-1:a$<m?ak<m?cy<m?bS<m?0:-1:0:-1:ft<m?fi<m?0:-1:0:-1:aw<m?dQ<m?ch<m?aT<m?aG<m?du<m?f_<m?ge<m?0:-1:0:-1:e8<m?b6<m?0:-1:0:-1:br<m?e7<m?fp<m?d2<m?0:-1:0:-1:cF<m?cJ<m?0:-1:0:-1:eC<m?dt<m?eu<m?bF<m?dw<m?c5<m?0:-1:0:-1:bg<m?cE<m?0:-1:0:-1:hp<m?hQ<m?ig<m?c6<m?0:-1:0:-1:gP<m?gG<m?0:-1:0:-1:hS<m?gX<m?h0<m?hl<m?gn<m?bL<m?dh<m?dY<m?hA<m?gU<m?hW<m?gY<m?0:-1:0:-1:aJ<m?hH<m?0:-1:0:-1:fk<m?eI<m?g$<m?g2<m?0:-1:0:-1:dr<m?$<m?0:-1:0:-1:hB<m?h7<m?e1<m?cA<m?fP<m?fU<m?0:-1:0:-1:gE<m?dB<m?0:-1:0:-1:eo<m?gL<m?hM<m?ag<m?0:-1:0:-1:hD<m?id<m?0:-1:0:-1:bh<m?ga<m?hP<m?gN<m?f7<m?gO<m?hk<m?g5<m?0:-1:0:-1:h_<m?cO<m?0:-1:0:-1:dn<m?hK<m?ha<m?hU<m?0:-1:0:-1:af<m?bO<m?0:-1:0:-1:gK<m?g6<m?b5<m?el<m?cU<m?fq<m?0:-1:0:-1:hI<m?f2<m?0:-1:0:-1:cI<m?T<m?aA<m?hL<m?0:-1:0:-1:bB<m?ds<m?0:-1:0:-1:cj<m?aO<m?fw<m?fy<m?cn<m?aY<m?dy<m?fx<m?g4<m?hy<m?0:-1:0:-1:bQ<m?bU<m?0:-1:0:-1:go<m?b2<m?be<m?gd<m?0:-1:0:-1:fz<m?a8<m?0:-1:0:-1:ho<m?e2<m?gw<m?c1<m?gl<m?a1<m?0:-1:0:-1:gq<m?ek<m?0:-1:0:-1:fW<m?fE<m?Z<m?hc<m?0:-1:0:-1:dT<m?fr<m?0:-1:0:-1:ci<m?c_<m?bk<m?_<m?cR<m?fa<m?S<m?W<m?0:-1:0:-1:eM<m?e3<m?0:-1:0:-1:gZ<m?ap<m?dd<m?ea<m?0:-1:0:-1:fB<m?h$<m?0:-1:0:-1:X<m?by<m?al<m?aL<m?a9<m?cT<m?0:-1:0:-1:bR<m?c4<m?0:-1:0:-1:dv<m?dM<m?cS<m?fA<m?0:-1:0:-1:dN<m?L<m?0:-1:0:-1:V<m?f1<m?ie<m?bb<m?ac<m?fC<m?fb<m?hY<m?bH<m?cs<m?cZ<m?bY<m?dU<m?aQ<m?0:-1:0:-1:bl<m?cl<m?0:-1:0:-1:dg<m?hj<m?gF<m?b0<m?0:-1:0:-1:gQ<m?dV<m?0:-1:0:-1:g3<m?he<m?gM<m?e6<m?f6<m?ff<m?0:-1:0:-1:hG<m?hx<m?0:-1:0:-1:dH<m?hJ<m?g7<m?gH<m?0:-1:0:-1:fK<m?eQ<m?0:-1:0:-1:fX<m?dc<m?aM<m?gt<m?et<m?cp<m?dC<m?d4<m?0:-1:0:-1:eL<m?cd<m?0:-1:0:-1:U<m?at<m?fn<m?dp<m?0:-1:0:-1:f$<m?fS<m?0:-1:0:-1:dE<m?bc<m?eb<m?fg<m?df<m?ck<m?0:-1:0:-1:d3<m?e0<m?0:-1:0:-1:aI<m?d1<m?cG<m?fZ<m?0:-1:0:-1:b_<m?dR<m?0:-1:0:-1:hs<m?gp<m?gV<m?gz<m?eY<m?ef<m?gT<m?ht<m?h2<m?hR<m?0:-1:0:-1:ae<m?eV<m?0:-1:0:-1:dP<m?bf<m?eG<m?ep<m?0:-1:0:-1:di<m?bz<m?0:-1:0:-1:hd<m?bM<m?fI<m?aU<m?gS<m?b1<m?0:-1:0:-1:cq<m?em<m?0:-1:0:-1:h1<m?cK<m?d5<m?d0<m?0:-1:0:-1:hZ<m?ic<m?0:-1:0:-1:hV<m?hu<m?ih<m?a2<m?h8<m?ez<m?hr<m?a5<m?0:-1:0:-1:f5<m?h6<m?0:-1:0:-1:bW<m?hN<m?h3<m?e9<m?0:-1:0:-1:bm<m?dF<m?0:-1:0:-1:eE<m?bE<m?bI<m?hO<m?gR<m?hn<m?0:-1:0:-1:hf<m?bG<m?0:-1:0:-1:bt<m?cc<m?en<m?fs<m?0:-1:0:-1:gh<m?fj<m?0:-1:0:-1:eg<m?c3<m?cu<m?cm<m?c8<m?dJ<m?g1<m?g9<m?dk<m?hF<m?hq<m?cX<m?0:-1:0:-1:hw<m?bj<m?0:-1:0:-1:dm<m?cM<m?eU<m?ao<m?0:-1:0:-1:gB<m?bx<m?0:-1:0:-1:cB<m?dA<m?fe<m?bd<m?d7<m?bv<m?0:-1:0:-1:fY<m?fO<m?0:-1:0:-1:da<m?c9<m?aZ<m?cL<m?0:-1:0:-1:d8<m?aF<m?0:-1:0:-1:d_<m?g0<m?bX<m?a7<m?bu<m?h4<m?e5<m?fD<m?0:-1:0:-1:er<m?aD<m?0:-1:0:-1:aC<m?eW<m?hT<m?gy<m?0:-1:0:-1:gW<m?ct<m?0:-1:0:-1:bs<m?cY<m?fv<m?ej<m?eR<m?gu<m?0:-1:0:-1:fN<m?ee<m?0:-1:0:-1:aj<m?aP<m?bZ<m?cQ<m?0:-1:0:-1:gf<m?bw<m?0:-1:0:-1:aW<m?eJ<m?dz<m?gj<m?bn<m?es<m?aK<m?gb<m?dW<m?hb<m?0:-1:0:-1:b4<m?aN<m?0:-1:0:-1:b$<m?cP<m?ei<m?fH<m?0:-1:0:-1:ce<m?fh<m?0:-1:0:-1:c0<m?ab<m?dK<m?bV<m?bi<m?c2<m?0:-1:0:-1:az<m?bq<m?0:-1:0:-1:dO<m?fL<m?cf<m?gi<m?0:-1:0:-1:db<m?gx<m?0:-1:0:-1:ia<m?hE<m?fQ<m?gg<m?Y<m?dl<m?gk<m?de<m?0:-1:0:-1:ey<m?av<m?0:-1:0:-1:ax<m?eF<m?eT<m?dq<m?0:-1:0:-1:h9<m?a0<m?0:-1:0:-1:ev<m?eZ<m?eH<m?hm<m?g8<m?g_<m?0:-1:0:-1:aX<m?ba<m?0:-1:0:-1:hv<m?hh<m?hg<m?c7<m?0:-1:0:-1:gC<m?gD<m?0:-1:0:-1:G(Nj,m+M|0)-1|0:-1;if(3<nH>>>0)var
b=d(a);else
switch(nH){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
nI=im(c(a));if(2<nI>>>0)var
b=d(a);else
switch(nI){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
nJ=oD(c(a));if(2<nJ>>>0)var
b=d(a);else
switch(nJ){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
nM=im(c(a));if(2<nM>>>0)var
b=d(a);else
switch(nM){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
nO=i$(c(a));if(2<nO>>>0)var
b=d(a);else
switch(nO){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
nS=iA(c(a));if(2<nS>>>0)var
b=d(a);else
switch(nS){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
nU=kj(c(a));if(2<nU>>>0)var
b=d(a);else
switch(nU){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,44);var
n3=K(c(a)),b=0===n3?D(a):1===n3?E(a):d(a)}}}}}}break;default:B(a,73);var
n4=jt(c(a));if(2<n4>>>0)var
b=d(a);else
switch(n4){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
n5=iA(c(a));if(2<n5>>>0)var
b=d(a);else
switch(n5){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,45);var
n6=K(c(a)),b=0===n6?D(a):1===n6?E(a):d(a)}}}}break;default:B(a,46);var
n7=oE(c(a));if(3<n7>>>0)var
b=d(a);else
switch(n7){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
n8=iA(c(a));if(2<n8>>>0)var
b=d(a);else
switch(n8){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
n9=i4(c(a));if(2<n9>>>0)var
b=d(a);else
switch(n9){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
n_=i$(c(a));if(2<n_>>>0)var
b=d(a);else
switch(n_){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
n$=jv(c(a));if(2<n$>>>0)var
b=d(a);else
switch(n$){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oa=im(c(a));if(2<oa>>>0)var
b=d(a);else
switch(oa){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
ob=j5(c(a));if(2<ob>>>0)var
b=d(a);else
switch(ob){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oc=mC(c(a));if(2<oc>>>0)var
b=d(a);else
switch(oc){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,47);var
od=K(c(a)),b=0===od?D(a):1===od?E(a):d(a)}}}}}}}break;default:B(a,73);var
oe=im(c(a));if(2<oe>>>0)var
b=d(a);else
switch(oe){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
of=jt(c(a));if(2<of>>>0)var
b=d(a);else
switch(of){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
og=mC(c(a));if(2<og>>>0)var
b=d(a);else
switch(og){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oh=i4(c(a));if(2<oh>>>0)var
b=d(a);else
switch(oh){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oi=jv(c(a));if(2<oi>>>0)var
b=d(a);else
switch(oi){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oj=im(c(a));if(2<oj>>>0)var
b=d(a);else
switch(oj){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,48);var
ok=K(c(a)),b=0===ok?D(a):1===ok?E(a):d(a)}}}}}}}}break;case
40:B(a,73);var
ol=im(c(a));if(2<ol>>>0)var
b=d(a);else
switch(ol){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
om=iA(c(a));if(2<om>>>0)var
b=d(a);else
switch(om){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,49);var
on=K(c(a)),b=0===on?D(a):1===on?E(a):d(a)}}break;case
41:B(a,73);var
n=c(a),oo=35<n?ib<n?gI<n?hz<n?-1:dG<n?e_<n?aH<n?bK<n?eK<n?fF<n?cz<n?hX<n?0:-1:0:-1:eN<n?dI<n?0:-1:0:-1:cg<n?bp<n?dj<n?aR<n?0:-1:0:-1:aa<n?dS<n?0:-1:0:-1:co<n?ec<n?hC<n?gJ<n?cb<n?gr<n?fu<n?dD<n?ah<n?eh<n?d9<n?dx<n?cv<n?cD<n?fl<n?d$<n?0:-1:0:-1:an<n?gm<n?0:-1:0:-1:fd<n?cC<n?gs<n?fG<n?0:-1:0:-1:fR<n?b8<n?0:-1:0:-1:au<n?eq<n?gc<n?b9<n?ex<n?eO<n?0:-1:0:-1:f9<n?fM<n?0:-1:0:-1:eS<n?ar<n?eA<n?cr<n?0:-1:0:-1:e$<n?ai<n?0:-1:0:-1:fc<n?dX<n?d6<n?a_<n?fo<n?cH<n?fT<n?as<n?0:-1:0:-1:f8<n?e4<n?0:-1:0:-1:eB<n?ay<n?aE<n?bA<n?0:-1:0:-1:cN<n?a3<n?0:-1:0:-1:bN<n?cV<n?aS<n?f0<n?bD<n?f3<n?0:-1:0:-1:ad<n?bT<n?0:-1:0:-1:hi<n?ca<n?gA<n?a4<n?0:-1:0:-1:f4<n?h5<n?0:-1:0:-1:b3<n?aV<n?fm<n?eP<n?eD<n?ew<n?dZ<n?dL<n?c$<n?cw<n?0:-1:0:-1:b7<n?cx<n?0:-1:0:-1:aq<n?fV<n?eX<n?am<n?0:-1:0:-1:bP<n?ed<n?0:-1:0:-1:a6<n?gv<n?aB<n?fJ<n?bC<n?bJ<n?0:-1:0:-1:bo<n?cW<n?0:-1:0:-1:a$<n?ak<n?cy<n?bS<n?0:-1:0:-1:ft<n?fi<n?0:-1:0:-1:aw<n?dQ<n?ch<n?aT<n?aG<n?du<n?f_<n?ge<n?0:-1:0:-1:e8<n?b6<n?0:-1:0:-1:br<n?e7<n?fp<n?d2<n?0:-1:0:-1:cF<n?cJ<n?0:-1:0:-1:eC<n?dt<n?eu<n?bF<n?dw<n?c5<n?0:-1:0:-1:bg<n?cE<n?0:-1:0:-1:hp<n?hQ<n?ig<n?c6<n?0:-1:0:-1:gP<n?gG<n?0:-1:0:-1:hS<n?gX<n?h0<n?hl<n?gn<n?bL<n?dh<n?dY<n?hA<n?gU<n?hW<n?gY<n?0:-1:0:-1:aJ<n?hH<n?0:-1:0:-1:fk<n?eI<n?g$<n?g2<n?0:-1:0:-1:dr<n?$<n?0:-1:0:-1:hB<n?h7<n?e1<n?cA<n?fP<n?fU<n?0:-1:0:-1:gE<n?dB<n?0:-1:0:-1:eo<n?gL<n?hM<n?ag<n?0:-1:0:-1:hD<n?id<n?0:-1:0:-1:bh<n?ga<n?hP<n?gN<n?f7<n?gO<n?hk<n?g5<n?0:-1:0:-1:h_<n?cO<n?0:-1:0:-1:dn<n?hK<n?ha<n?hU<n?0:-1:0:-1:af<n?bO<n?0:-1:0:-1:gK<n?g6<n?b5<n?el<n?cU<n?fq<n?0:-1:0:-1:hI<n?f2<n?0:-1:0:-1:cI<n?T<n?aA<n?hL<n?0:-1:0:-1:bB<n?ds<n?0:-1:0:-1:cj<n?aO<n?fw<n?fy<n?cn<n?aY<n?dy<n?fx<n?g4<n?hy<n?0:-1:0:-1:bQ<n?bU<n?0:-1:0:-1:go<n?b2<n?be<n?gd<n?0:-1:0:-1:fz<n?a8<n?0:-1:0:-1:ho<n?e2<n?gw<n?c1<n?gl<n?a1<n?0:-1:0:-1:gq<n?ek<n?0:-1:0:-1:fW<n?fE<n?Z<n?hc<n?0:-1:0:-1:dT<n?fr<n?0:-1:0:-1:ci<n?c_<n?bk<n?_<n?cR<n?fa<n?S<n?W<n?0:-1:0:-1:eM<n?e3<n?0:-1:0:-1:gZ<n?ap<n?dd<n?ea<n?0:-1:0:-1:fB<n?h$<n?0:-1:0:-1:X<n?by<n?al<n?aL<n?a9<n?cT<n?0:-1:0:-1:bR<n?c4<n?0:-1:0:-1:dv<n?dM<n?cS<n?fA<n?0:-1:0:-1:dN<n?L<n?0:-1:0:-1:V<n?f1<n?ie<n?bb<n?ac<n?fC<n?fb<n?hY<n?bH<n?cs<n?cZ<n?bY<n?dU<n?aQ<n?0:-1:0:-1:bl<n?cl<n?0:-1:0:-1:dg<n?hj<n?gF<n?b0<n?0:-1:0:-1:gQ<n?dV<n?0:-1:0:-1:g3<n?he<n?gM<n?e6<n?f6<n?ff<n?0:-1:0:-1:hG<n?hx<n?0:-1:0:-1:dH<n?hJ<n?g7<n?gH<n?0:-1:0:-1:fK<n?eQ<n?0:-1:0:-1:fX<n?dc<n?aM<n?gt<n?et<n?cp<n?dC<n?d4<n?0:-1:0:-1:eL<n?cd<n?0:-1:0:-1:U<n?at<n?fn<n?dp<n?0:-1:0:-1:f$<n?fS<n?0:-1:0:-1:dE<n?bc<n?eb<n?fg<n?df<n?ck<n?0:-1:0:-1:d3<n?e0<n?0:-1:0:-1:aI<n?d1<n?cG<n?fZ<n?0:-1:0:-1:b_<n?dR<n?0:-1:0:-1:hs<n?gp<n?gV<n?gz<n?eY<n?ef<n?gT<n?ht<n?h2<n?hR<n?0:-1:0:-1:ae<n?eV<n?0:-1:0:-1:dP<n?bf<n?eG<n?ep<n?0:-1:0:-1:di<n?bz<n?0:-1:0:-1:hd<n?bM<n?fI<n?aU<n?gS<n?b1<n?0:-1:0:-1:cq<n?em<n?0:-1:0:-1:h1<n?cK<n?d5<n?d0<n?0:-1:0:-1:hZ<n?ic<n?0:-1:0:-1:hV<n?hu<n?ih<n?a2<n?h8<n?ez<n?hr<n?a5<n?0:-1:0:-1:f5<n?h6<n?0:-1:0:-1:bW<n?hN<n?h3<n?e9<n?0:-1:0:-1:bm<n?dF<n?0:-1:0:-1:eE<n?bE<n?bI<n?hO<n?gR<n?hn<n?0:-1:0:-1:hf<n?bG<n?0:-1:0:-1:bt<n?cc<n?en<n?fs<n?0:-1:0:-1:gh<n?fj<n?0:-1:0:-1:eg<n?c3<n?cu<n?cm<n?c8<n?dJ<n?g1<n?g9<n?dk<n?hF<n?hq<n?cX<n?0:-1:0:-1:hw<n?bj<n?0:-1:0:-1:dm<n?cM<n?eU<n?ao<n?0:-1:0:-1:gB<n?bx<n?0:-1:0:-1:cB<n?dA<n?fe<n?bd<n?d7<n?bv<n?0:-1:0:-1:fY<n?fO<n?0:-1:0:-1:da<n?c9<n?aZ<n?cL<n?0:-1:0:-1:d8<n?aF<n?0:-1:0:-1:d_<n?g0<n?bX<n?a7<n?bu<n?h4<n?e5<n?fD<n?0:-1:0:-1:er<n?aD<n?0:-1:0:-1:aC<n?eW<n?hT<n?gy<n?0:-1:0:-1:gW<n?ct<n?0:-1:0:-1:bs<n?cY<n?fv<n?ej<n?eR<n?gu<n?0:-1:0:-1:fN<n?ee<n?0:-1:0:-1:aj<n?aP<n?bZ<n?cQ<n?0:-1:0:-1:gf<n?bw<n?0:-1:0:-1:aW<n?eJ<n?dz<n?gj<n?bn<n?es<n?aK<n?gb<n?dW<n?hb<n?0:-1:0:-1:b4<n?aN<n?0:-1:0:-1:b$<n?cP<n?ei<n?fH<n?0:-1:0:-1:ce<n?fh<n?0:-1:0:-1:c0<n?ab<n?dK<n?bV<n?bi<n?c2<n?0:-1:0:-1:az<n?bq<n?0:-1:0:-1:dO<n?fL<n?cf<n?gi<n?0:-1:0:-1:db<n?gx<n?0:-1:0:-1:ia<n?hE<n?fQ<n?gg<n?Y<n?dl<n?gk<n?de<n?0:-1:0:-1:ey<n?av<n?0:-1:0:-1:ax<n?eF<n?eT<n?dq<n?0:-1:0:-1:h9<n?a0<n?0:-1:0:-1:ev<n?eZ<n?eH<n?hm<n?g8<n?g_<n?0:-1:0:-1:aX<n?ba<n?0:-1:0:-1:hv<n?hh<n?hg<n?c7<n?0:-1:0:-1:gC<n?gD<n?0:-1:0:-1:G(NC,n+M|0)-1|0:-1;if(3<oo>>>0)var
b=d(a);else
switch(oo){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
op=rq(c(a));if(2<op>>>0)var
b=d(a);else
switch(op){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,50);var
oq=K(c(a)),b=0===oq?D(a):1===oq?E(a):d(a)}break;default:B(a,73);var
os=ja(c(a));if(2<os>>>0)var
b=d(a);else
switch(os){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
ot=ja(c(a));if(2<ot>>>0)var
b=d(a);else
switch(ot){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,51);var
ou=K(c(a)),b=0===ou?D(a):1===ou?E(a):d(a)}}}break;case
42:B(a,73);var
o=c(a),ov=35<o?ib<o?gI<o?hz<o?-1:dG<o?e_<o?aH<o?bK<o?eK<o?fF<o?cz<o?hX<o?0:-1:0:-1:eN<o?dI<o?0:-1:0:-1:cg<o?bp<o?dj<o?aR<o?0:-1:0:-1:aa<o?dS<o?0:-1:0:-1:co<o?ec<o?hC<o?gJ<o?cb<o?gr<o?fu<o?dD<o?ah<o?eh<o?d9<o?dx<o?cv<o?cD<o?fl<o?d$<o?0:-1:0:-1:an<o?gm<o?0:-1:0:-1:fd<o?cC<o?gs<o?fG<o?0:-1:0:-1:fR<o?b8<o?0:-1:0:-1:au<o?eq<o?gc<o?b9<o?ex<o?eO<o?0:-1:0:-1:f9<o?fM<o?0:-1:0:-1:eS<o?ar<o?eA<o?cr<o?0:-1:0:-1:e$<o?ai<o?0:-1:0:-1:fc<o?dX<o?d6<o?a_<o?fo<o?cH<o?fT<o?as<o?0:-1:0:-1:f8<o?e4<o?0:-1:0:-1:eB<o?ay<o?aE<o?bA<o?0:-1:0:-1:cN<o?a3<o?0:-1:0:-1:bN<o?cV<o?aS<o?f0<o?bD<o?f3<o?0:-1:0:-1:ad<o?bT<o?0:-1:0:-1:hi<o?ca<o?gA<o?a4<o?0:-1:0:-1:f4<o?h5<o?0:-1:0:-1:b3<o?aV<o?fm<o?eP<o?eD<o?ew<o?dZ<o?dL<o?c$<o?cw<o?0:-1:0:-1:b7<o?cx<o?0:-1:0:-1:aq<o?fV<o?eX<o?am<o?0:-1:0:-1:bP<o?ed<o?0:-1:0:-1:a6<o?gv<o?aB<o?fJ<o?bC<o?bJ<o?0:-1:0:-1:bo<o?cW<o?0:-1:0:-1:a$<o?ak<o?cy<o?bS<o?0:-1:0:-1:ft<o?fi<o?0:-1:0:-1:aw<o?dQ<o?ch<o?aT<o?aG<o?du<o?f_<o?ge<o?0:-1:0:-1:e8<o?b6<o?0:-1:0:-1:br<o?e7<o?fp<o?d2<o?0:-1:0:-1:cF<o?cJ<o?0:-1:0:-1:eC<o?dt<o?eu<o?bF<o?dw<o?c5<o?0:-1:0:-1:bg<o?cE<o?0:-1:0:-1:hp<o?hQ<o?ig<o?c6<o?0:-1:0:-1:gP<o?gG<o?0:-1:0:-1:hS<o?gX<o?h0<o?hl<o?gn<o?bL<o?dh<o?dY<o?hA<o?gU<o?hW<o?gY<o?0:-1:0:-1:aJ<o?hH<o?0:-1:0:-1:fk<o?eI<o?g$<o?g2<o?0:-1:0:-1:dr<o?$<o?0:-1:0:-1:hB<o?h7<o?e1<o?cA<o?fP<o?fU<o?0:-1:0:-1:gE<o?dB<o?0:-1:0:-1:eo<o?gL<o?hM<o?ag<o?0:-1:0:-1:hD<o?id<o?0:-1:0:-1:bh<o?ga<o?hP<o?gN<o?f7<o?gO<o?hk<o?g5<o?0:-1:0:-1:h_<o?cO<o?0:-1:0:-1:dn<o?hK<o?ha<o?hU<o?0:-1:0:-1:af<o?bO<o?0:-1:0:-1:gK<o?g6<o?b5<o?el<o?cU<o?fq<o?0:-1:0:-1:hI<o?f2<o?0:-1:0:-1:cI<o?T<o?aA<o?hL<o?0:-1:0:-1:bB<o?ds<o?0:-1:0:-1:cj<o?aO<o?fw<o?fy<o?cn<o?aY<o?dy<o?fx<o?g4<o?hy<o?0:-1:0:-1:bQ<o?bU<o?0:-1:0:-1:go<o?b2<o?be<o?gd<o?0:-1:0:-1:fz<o?a8<o?0:-1:0:-1:ho<o?e2<o?gw<o?c1<o?gl<o?a1<o?0:-1:0:-1:gq<o?ek<o?0:-1:0:-1:fW<o?fE<o?Z<o?hc<o?0:-1:0:-1:dT<o?fr<o?0:-1:0:-1:ci<o?c_<o?bk<o?_<o?cR<o?fa<o?S<o?W<o?0:-1:0:-1:eM<o?e3<o?0:-1:0:-1:gZ<o?ap<o?dd<o?ea<o?0:-1:0:-1:fB<o?h$<o?0:-1:0:-1:X<o?by<o?al<o?aL<o?a9<o?cT<o?0:-1:0:-1:bR<o?c4<o?0:-1:0:-1:dv<o?dM<o?cS<o?fA<o?0:-1:0:-1:dN<o?L<o?0:-1:0:-1:V<o?f1<o?ie<o?bb<o?ac<o?fC<o?fb<o?hY<o?bH<o?cs<o?cZ<o?bY<o?dU<o?aQ<o?0:-1:0:-1:bl<o?cl<o?0:-1:0:-1:dg<o?hj<o?gF<o?b0<o?0:-1:0:-1:gQ<o?dV<o?0:-1:0:-1:g3<o?he<o?gM<o?e6<o?f6<o?ff<o?0:-1:0:-1:hG<o?hx<o?0:-1:0:-1:dH<o?hJ<o?g7<o?gH<o?0:-1:0:-1:fK<o?eQ<o?0:-1:0:-1:fX<o?dc<o?aM<o?gt<o?et<o?cp<o?dC<o?d4<o?0:-1:0:-1:eL<o?cd<o?0:-1:0:-1:U<o?at<o?fn<o?dp<o?0:-1:0:-1:f$<o?fS<o?0:-1:0:-1:dE<o?bc<o?eb<o?fg<o?df<o?ck<o?0:-1:0:-1:d3<o?e0<o?0:-1:0:-1:aI<o?d1<o?cG<o?fZ<o?0:-1:0:-1:b_<o?dR<o?0:-1:0:-1:hs<o?gp<o?gV<o?gz<o?eY<o?ef<o?gT<o?ht<o?h2<o?hR<o?0:-1:0:-1:ae<o?eV<o?0:-1:0:-1:dP<o?bf<o?eG<o?ep<o?0:-1:0:-1:di<o?bz<o?0:-1:0:-1:hd<o?bM<o?fI<o?aU<o?gS<o?b1<o?0:-1:0:-1:cq<o?em<o?0:-1:0:-1:h1<o?cK<o?d5<o?d0<o?0:-1:0:-1:hZ<o?ic<o?0:-1:0:-1:hV<o?hu<o?ih<o?a2<o?h8<o?ez<o?hr<o?a5<o?0:-1:0:-1:f5<o?h6<o?0:-1:0:-1:bW<o?hN<o?h3<o?e9<o?0:-1:0:-1:bm<o?dF<o?0:-1:0:-1:eE<o?bE<o?bI<o?hO<o?gR<o?hn<o?0:-1:0:-1:hf<o?bG<o?0:-1:0:-1:bt<o?cc<o?en<o?fs<o?0:-1:0:-1:gh<o?fj<o?0:-1:0:-1:eg<o?c3<o?cu<o?cm<o?c8<o?dJ<o?g1<o?g9<o?dk<o?hF<o?hq<o?cX<o?0:-1:0:-1:hw<o?bj<o?0:-1:0:-1:dm<o?cM<o?eU<o?ao<o?0:-1:0:-1:gB<o?bx<o?0:-1:0:-1:cB<o?dA<o?fe<o?bd<o?d7<o?bv<o?0:-1:0:-1:fY<o?fO<o?0:-1:0:-1:da<o?c9<o?aZ<o?cL<o?0:-1:0:-1:d8<o?aF<o?0:-1:0:-1:d_<o?g0<o?bX<o?a7<o?bu<o?h4<o?e5<o?fD<o?0:-1:0:-1:er<o?aD<o?0:-1:0:-1:aC<o?eW<o?hT<o?gy<o?0:-1:0:-1:gW<o?ct<o?0:-1:0:-1:bs<o?cY<o?fv<o?ej<o?eR<o?gu<o?0:-1:0:-1:fN<o?ee<o?0:-1:0:-1:aj<o?aP<o?bZ<o?cQ<o?0:-1:0:-1:gf<o?bw<o?0:-1:0:-1:aW<o?eJ<o?dz<o?gj<o?bn<o?es<o?aK<o?gb<o?dW<o?hb<o?0:-1:0:-1:b4<o?aN<o?0:-1:0:-1:b$<o?cP<o?ei<o?fH<o?0:-1:0:-1:ce<o?fh<o?0:-1:0:-1:c0<o?ab<o?dK<o?bV<o?bi<o?c2<o?0:-1:0:-1:az<o?bq<o?0:-1:0:-1:dO<o?fL<o?cf<o?gi<o?0:-1:0:-1:db<o?gx<o?0:-1:0:-1:ia<o?hE<o?fQ<o?gg<o?Y<o?dl<o?gk<o?de<o?0:-1:0:-1:ey<o?av<o?0:-1:0:-1:ax<o?eF<o?eT<o?dq<o?0:-1:0:-1:h9<o?a0<o?0:-1:0:-1:ev<o?eZ<o?eH<o?hm<o?g8<o?g_<o?0:-1:0:-1:aX<o?ba<o?0:-1:0:-1:hv<o?hh<o?hg<o?c7<o?0:-1:0:-1:gC<o?gD<o?0:-1:0:-1:G(NF,o+M|0)-1|0:-1;if(3<ov>>>0)var
b=d(a);else
switch(ov){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,52);var
ow=K(c(a)),b=0===ow?D(a):1===ow?E(a):d(a);break;default:B(a,73);var
oy=i4(c(a));if(2<oy>>>0)var
b=d(a);else
switch(oy){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
p=c(a),oC=35<p?ib<p?gI<p?hz<p?-1:dG<p?e_<p?aH<p?bK<p?eK<p?fF<p?cz<p?hX<p?0:-1:0:-1:eN<p?dI<p?0:-1:0:-1:cg<p?bp<p?dj<p?aR<p?0:-1:0:-1:aa<p?dS<p?0:-1:0:-1:co<p?ec<p?hC<p?gJ<p?cb<p?gr<p?fu<p?dD<p?ah<p?eh<p?d9<p?dx<p?cv<p?cD<p?fl<p?d$<p?0:-1:0:-1:an<p?gm<p?0:-1:0:-1:fd<p?cC<p?gs<p?fG<p?0:-1:0:-1:fR<p?b8<p?0:-1:0:-1:au<p?eq<p?gc<p?b9<p?ex<p?eO<p?0:-1:0:-1:f9<p?fM<p?0:-1:0:-1:eS<p?ar<p?eA<p?cr<p?0:-1:0:-1:e$<p?ai<p?0:-1:0:-1:fc<p?dX<p?d6<p?a_<p?fo<p?cH<p?fT<p?as<p?0:-1:0:-1:f8<p?e4<p?0:-1:0:-1:eB<p?ay<p?aE<p?bA<p?0:-1:0:-1:cN<p?a3<p?0:-1:0:-1:bN<p?cV<p?aS<p?f0<p?bD<p?f3<p?0:-1:0:-1:ad<p?bT<p?0:-1:0:-1:hi<p?ca<p?gA<p?a4<p?0:-1:0:-1:f4<p?h5<p?0:-1:0:-1:b3<p?aV<p?fm<p?eP<p?eD<p?ew<p?dZ<p?dL<p?c$<p?cw<p?0:-1:0:-1:b7<p?cx<p?0:-1:0:-1:aq<p?fV<p?eX<p?am<p?0:-1:0:-1:bP<p?ed<p?0:-1:0:-1:a6<p?gv<p?aB<p?fJ<p?bC<p?bJ<p?0:-1:0:-1:bo<p?cW<p?0:-1:0:-1:a$<p?ak<p?cy<p?bS<p?0:-1:0:-1:ft<p?fi<p?0:-1:0:-1:aw<p?dQ<p?ch<p?aT<p?aG<p?du<p?f_<p?ge<p?0:-1:0:-1:e8<p?b6<p?0:-1:0:-1:br<p?e7<p?fp<p?d2<p?0:-1:0:-1:cF<p?cJ<p?0:-1:0:-1:eC<p?dt<p?eu<p?bF<p?dw<p?c5<p?0:-1:0:-1:bg<p?cE<p?0:-1:0:-1:hp<p?hQ<p?ig<p?c6<p?0:-1:0:-1:gP<p?gG<p?0:-1:0:-1:hS<p?gX<p?h0<p?hl<p?gn<p?bL<p?dh<p?dY<p?hA<p?gU<p?hW<p?gY<p?0:-1:0:-1:aJ<p?hH<p?0:-1:0:-1:fk<p?eI<p?g$<p?g2<p?0:-1:0:-1:dr<p?$<p?0:-1:0:-1:hB<p?h7<p?e1<p?cA<p?fP<p?fU<p?0:-1:0:-1:gE<p?dB<p?0:-1:0:-1:eo<p?gL<p?hM<p?ag<p?0:-1:0:-1:hD<p?id<p?0:-1:0:-1:bh<p?ga<p?hP<p?gN<p?f7<p?gO<p?hk<p?g5<p?0:-1:0:-1:h_<p?cO<p?0:-1:0:-1:dn<p?hK<p?ha<p?hU<p?0:-1:0:-1:af<p?bO<p?0:-1:0:-1:gK<p?g6<p?b5<p?el<p?cU<p?fq<p?0:-1:0:-1:hI<p?f2<p?0:-1:0:-1:cI<p?T<p?aA<p?hL<p?0:-1:0:-1:bB<p?ds<p?0:-1:0:-1:cj<p?aO<p?fw<p?fy<p?cn<p?aY<p?dy<p?fx<p?g4<p?hy<p?0:-1:0:-1:bQ<p?bU<p?0:-1:0:-1:go<p?b2<p?be<p?gd<p?0:-1:0:-1:fz<p?a8<p?0:-1:0:-1:ho<p?e2<p?gw<p?c1<p?gl<p?a1<p?0:-1:0:-1:gq<p?ek<p?0:-1:0:-1:fW<p?fE<p?Z<p?hc<p?0:-1:0:-1:dT<p?fr<p?0:-1:0:-1:ci<p?c_<p?bk<p?_<p?cR<p?fa<p?S<p?W<p?0:-1:0:-1:eM<p?e3<p?0:-1:0:-1:gZ<p?ap<p?dd<p?ea<p?0:-1:0:-1:fB<p?h$<p?0:-1:0:-1:X<p?by<p?al<p?aL<p?a9<p?cT<p?0:-1:0:-1:bR<p?c4<p?0:-1:0:-1:dv<p?dM<p?cS<p?fA<p?0:-1:0:-1:dN<p?L<p?0:-1:0:-1:V<p?f1<p?ie<p?bb<p?ac<p?fC<p?fb<p?hY<p?bH<p?cs<p?cZ<p?bY<p?dU<p?aQ<p?0:-1:0:-1:bl<p?cl<p?0:-1:0:-1:dg<p?hj<p?gF<p?b0<p?0:-1:0:-1:gQ<p?dV<p?0:-1:0:-1:g3<p?he<p?gM<p?e6<p?f6<p?ff<p?0:-1:0:-1:hG<p?hx<p?0:-1:0:-1:dH<p?hJ<p?g7<p?gH<p?0:-1:0:-1:fK<p?eQ<p?0:-1:0:-1:fX<p?dc<p?aM<p?gt<p?et<p?cp<p?dC<p?d4<p?0:-1:0:-1:eL<p?cd<p?0:-1:0:-1:U<p?at<p?fn<p?dp<p?0:-1:0:-1:f$<p?fS<p?0:-1:0:-1:dE<p?bc<p?eb<p?fg<p?df<p?ck<p?0:-1:0:-1:d3<p?e0<p?0:-1:0:-1:aI<p?d1<p?cG<p?fZ<p?0:-1:0:-1:b_<p?dR<p?0:-1:0:-1:hs<p?gp<p?gV<p?gz<p?eY<p?ef<p?gT<p?ht<p?h2<p?hR<p?0:-1:0:-1:ae<p?eV<p?0:-1:0:-1:dP<p?bf<p?eG<p?ep<p?0:-1:0:-1:di<p?bz<p?0:-1:0:-1:hd<p?bM<p?fI<p?aU<p?gS<p?b1<p?0:-1:0:-1:cq<p?em<p?0:-1:0:-1:h1<p?cK<p?d5<p?d0<p?0:-1:0:-1:hZ<p?ic<p?0:-1:0:-1:hV<p?hu<p?ih<p?a2<p?h8<p?ez<p?hr<p?a5<p?0:-1:0:-1:f5<p?h6<p?0:-1:0:-1:bW<p?hN<p?h3<p?e9<p?0:-1:0:-1:bm<p?dF<p?0:-1:0:-1:eE<p?bE<p?bI<p?hO<p?gR<p?hn<p?0:-1:0:-1:hf<p?bG<p?0:-1:0:-1:bt<p?cc<p?en<p?fs<p?0:-1:0:-1:gh<p?fj<p?0:-1:0:-1:eg<p?c3<p?cu<p?cm<p?c8<p?dJ<p?g1<p?g9<p?dk<p?hF<p?hq<p?cX<p?0:-1:0:-1:hw<p?bj<p?0:-1:0:-1:dm<p?cM<p?eU<p?ao<p?0:-1:0:-1:gB<p?bx<p?0:-1:0:-1:cB<p?dA<p?fe<p?bd<p?d7<p?bv<p?0:-1:0:-1:fY<p?fO<p?0:-1:0:-1:da<p?c9<p?aZ<p?cL<p?0:-1:0:-1:d8<p?aF<p?0:-1:0:-1:d_<p?g0<p?bX<p?a7<p?bu<p?h4<p?e5<p?fD<p?0:-1:0:-1:er<p?aD<p?0:-1:0:-1:aC<p?eW<p?hT<p?gy<p?0:-1:0:-1:gW<p?ct<p?0:-1:0:-1:bs<p?cY<p?fv<p?ej<p?eR<p?gu<p?0:-1:0:-1:fN<p?ee<p?0:-1:0:-1:aj<p?aP<p?bZ<p?cQ<p?0:-1:0:-1:gf<p?bw<p?0:-1:0:-1:aW<p?eJ<p?dz<p?gj<p?bn<p?es<p?aK<p?gb<p?dW<p?hb<p?0:-1:0:-1:b4<p?aN<p?0:-1:0:-1:b$<p?cP<p?ei<p?fH<p?0:-1:0:-1:ce<p?fh<p?0:-1:0:-1:c0<p?ab<p?dK<p?bV<p?bi<p?c2<p?0:-1:0:-1:az<p?bq<p?0:-1:0:-1:dO<p?fL<p?cf<p?gi<p?0:-1:0:-1:db<p?gx<p?0:-1:0:-1:ia<p?hE<p?fQ<p?gg<p?Y<p?dl<p?gk<p?de<p?0:-1:0:-1:ey<p?av<p?0:-1:0:-1:ax<p?eF<p?eT<p?dq<p?0:-1:0:-1:h9<p?a0<p?0:-1:0:-1:ev<p?eZ<p?eH<p?hm<p?g8<p?g_<p?0:-1:0:-1:aX<p?ba<p?0:-1:0:-1:hv<p?hh<p?hg<p?c7<p?0:-1:0:-1:gC<p?gD<p?0:-1:0:-1:G(Nh,p+M|0)-1|0:-1;if(2<oC>>>0)var
b=d(a);else
switch(oC){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oI=kh(c(a));if(2<oI>>>0)var
b=d(a);else
switch(oI){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oJ=im(c(a));if(2<oJ>>>0)var
b=d(a);else
switch(oJ){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,53);var
oK=K(c(a)),b=0===oK?D(a):1===oK?E(a):d(a)}}}}}break;case
43:B(a,73);var
q=c(a),oL=35<q?ib<q?gI<q?hz<q?-1:dG<q?e_<q?aH<q?bK<q?eK<q?fF<q?cz<q?hX<q?0:-1:0:-1:eN<q?dI<q?0:-1:0:-1:cg<q?bp<q?dj<q?aR<q?0:-1:0:-1:aa<q?dS<q?0:-1:0:-1:co<q?ec<q?hC<q?gJ<q?cb<q?gr<q?fu<q?dD<q?ah<q?eh<q?d9<q?dx<q?cv<q?cD<q?fl<q?d$<q?0:-1:0:-1:an<q?gm<q?0:-1:0:-1:fd<q?cC<q?gs<q?fG<q?0:-1:0:-1:fR<q?b8<q?0:-1:0:-1:au<q?eq<q?gc<q?b9<q?ex<q?eO<q?0:-1:0:-1:f9<q?fM<q?0:-1:0:-1:eS<q?ar<q?eA<q?cr<q?0:-1:0:-1:e$<q?ai<q?0:-1:0:-1:fc<q?dX<q?d6<q?a_<q?fo<q?cH<q?fT<q?as<q?0:-1:0:-1:f8<q?e4<q?0:-1:0:-1:eB<q?ay<q?aE<q?bA<q?0:-1:0:-1:cN<q?a3<q?0:-1:0:-1:bN<q?cV<q?aS<q?f0<q?bD<q?f3<q?0:-1:0:-1:ad<q?bT<q?0:-1:0:-1:hi<q?ca<q?gA<q?a4<q?0:-1:0:-1:f4<q?h5<q?0:-1:0:-1:b3<q?aV<q?fm<q?eP<q?eD<q?ew<q?dZ<q?dL<q?c$<q?cw<q?0:-1:0:-1:b7<q?cx<q?0:-1:0:-1:aq<q?fV<q?eX<q?am<q?0:-1:0:-1:bP<q?ed<q?0:-1:0:-1:a6<q?gv<q?aB<q?fJ<q?bC<q?bJ<q?0:-1:0:-1:bo<q?cW<q?0:-1:0:-1:a$<q?ak<q?cy<q?bS<q?0:-1:0:-1:ft<q?fi<q?0:-1:0:-1:aw<q?dQ<q?ch<q?aT<q?aG<q?du<q?f_<q?ge<q?0:-1:0:-1:e8<q?b6<q?0:-1:0:-1:br<q?e7<q?fp<q?d2<q?0:-1:0:-1:cF<q?cJ<q?0:-1:0:-1:eC<q?dt<q?eu<q?bF<q?dw<q?c5<q?0:-1:0:-1:bg<q?cE<q?0:-1:0:-1:hp<q?hQ<q?ig<q?c6<q?0:-1:0:-1:gP<q?gG<q?0:-1:0:-1:hS<q?gX<q?h0<q?hl<q?gn<q?bL<q?dh<q?dY<q?hA<q?gU<q?hW<q?gY<q?0:-1:0:-1:aJ<q?hH<q?0:-1:0:-1:fk<q?eI<q?g$<q?g2<q?0:-1:0:-1:dr<q?$<q?0:-1:0:-1:hB<q?h7<q?e1<q?cA<q?fP<q?fU<q?0:-1:0:-1:gE<q?dB<q?0:-1:0:-1:eo<q?gL<q?hM<q?ag<q?0:-1:0:-1:hD<q?id<q?0:-1:0:-1:bh<q?ga<q?hP<q?gN<q?f7<q?gO<q?hk<q?g5<q?0:-1:0:-1:h_<q?cO<q?0:-1:0:-1:dn<q?hK<q?ha<q?hU<q?0:-1:0:-1:af<q?bO<q?0:-1:0:-1:gK<q?g6<q?b5<q?el<q?cU<q?fq<q?0:-1:0:-1:hI<q?f2<q?0:-1:0:-1:cI<q?T<q?aA<q?hL<q?0:-1:0:-1:bB<q?ds<q?0:-1:0:-1:cj<q?aO<q?fw<q?fy<q?cn<q?aY<q?dy<q?fx<q?g4<q?hy<q?0:-1:0:-1:bQ<q?bU<q?0:-1:0:-1:go<q?b2<q?be<q?gd<q?0:-1:0:-1:fz<q?a8<q?0:-1:0:-1:ho<q?e2<q?gw<q?c1<q?gl<q?a1<q?0:-1:0:-1:gq<q?ek<q?0:-1:0:-1:fW<q?fE<q?Z<q?hc<q?0:-1:0:-1:dT<q?fr<q?0:-1:0:-1:ci<q?c_<q?bk<q?_<q?cR<q?fa<q?S<q?W<q?0:-1:0:-1:eM<q?e3<q?0:-1:0:-1:gZ<q?ap<q?dd<q?ea<q?0:-1:0:-1:fB<q?h$<q?0:-1:0:-1:X<q?by<q?al<q?aL<q?a9<q?cT<q?0:-1:0:-1:bR<q?c4<q?0:-1:0:-1:dv<q?dM<q?cS<q?fA<q?0:-1:0:-1:dN<q?L<q?0:-1:0:-1:V<q?f1<q?ie<q?bb<q?ac<q?fC<q?fb<q?hY<q?bH<q?cs<q?cZ<q?bY<q?dU<q?aQ<q?0:-1:0:-1:bl<q?cl<q?0:-1:0:-1:dg<q?hj<q?gF<q?b0<q?0:-1:0:-1:gQ<q?dV<q?0:-1:0:-1:g3<q?he<q?gM<q?e6<q?f6<q?ff<q?0:-1:0:-1:hG<q?hx<q?0:-1:0:-1:dH<q?hJ<q?g7<q?gH<q?0:-1:0:-1:fK<q?eQ<q?0:-1:0:-1:fX<q?dc<q?aM<q?gt<q?et<q?cp<q?dC<q?d4<q?0:-1:0:-1:eL<q?cd<q?0:-1:0:-1:U<q?at<q?fn<q?dp<q?0:-1:0:-1:f$<q?fS<q?0:-1:0:-1:dE<q?bc<q?eb<q?fg<q?df<q?ck<q?0:-1:0:-1:d3<q?e0<q?0:-1:0:-1:aI<q?d1<q?cG<q?fZ<q?0:-1:0:-1:b_<q?dR<q?0:-1:0:-1:hs<q?gp<q?gV<q?gz<q?eY<q?ef<q?gT<q?ht<q?h2<q?hR<q?0:-1:0:-1:ae<q?eV<q?0:-1:0:-1:dP<q?bf<q?eG<q?ep<q?0:-1:0:-1:di<q?bz<q?0:-1:0:-1:hd<q?bM<q?fI<q?aU<q?gS<q?b1<q?0:-1:0:-1:cq<q?em<q?0:-1:0:-1:h1<q?cK<q?d5<q?d0<q?0:-1:0:-1:hZ<q?ic<q?0:-1:0:-1:hV<q?hu<q?ih<q?a2<q?h8<q?ez<q?hr<q?a5<q?0:-1:0:-1:f5<q?h6<q?0:-1:0:-1:bW<q?hN<q?h3<q?e9<q?0:-1:0:-1:bm<q?dF<q?0:-1:0:-1:eE<q?bE<q?bI<q?hO<q?gR<q?hn<q?0:-1:0:-1:hf<q?bG<q?0:-1:0:-1:bt<q?cc<q?en<q?fs<q?0:-1:0:-1:gh<q?fj<q?0:-1:0:-1:eg<q?c3<q?cu<q?cm<q?c8<q?dJ<q?g1<q?g9<q?dk<q?hF<q?hq<q?cX<q?0:-1:0:-1:hw<q?bj<q?0:-1:0:-1:dm<q?cM<q?eU<q?ao<q?0:-1:0:-1:gB<q?bx<q?0:-1:0:-1:cB<q?dA<q?fe<q?bd<q?d7<q?bv<q?0:-1:0:-1:fY<q?fO<q?0:-1:0:-1:da<q?c9<q?aZ<q?cL<q?0:-1:0:-1:d8<q?aF<q?0:-1:0:-1:d_<q?g0<q?bX<q?a7<q?bu<q?h4<q?e5<q?fD<q?0:-1:0:-1:er<q?aD<q?0:-1:0:-1:aC<q?eW<q?hT<q?gy<q?0:-1:0:-1:gW<q?ct<q?0:-1:0:-1:bs<q?cY<q?fv<q?ej<q?eR<q?gu<q?0:-1:0:-1:fN<q?ee<q?0:-1:0:-1:aj<q?aP<q?bZ<q?cQ<q?0:-1:0:-1:gf<q?bw<q?0:-1:0:-1:aW<q?eJ<q?dz<q?gj<q?bn<q?es<q?aK<q?gb<q?dW<q?hb<q?0:-1:0:-1:b4<q?aN<q?0:-1:0:-1:b$<q?cP<q?ei<q?fH<q?0:-1:0:-1:ce<q?fh<q?0:-1:0:-1:c0<q?ab<q?dK<q?bV<q?bi<q?c2<q?0:-1:0:-1:az<q?bq<q?0:-1:0:-1:dO<q?fL<q?cf<q?gi<q?0:-1:0:-1:db<q?gx<q?0:-1:0:-1:ia<q?hE<q?fQ<q?gg<q?Y<q?dl<q?gk<q?de<q?0:-1:0:-1:ey<q?av<q?0:-1:0:-1:ax<q?eF<q?eT<q?dq<q?0:-1:0:-1:h9<q?a0<q?0:-1:0:-1:ev<q?eZ<q?eH<q?hm<q?g8<q?g_<q?0:-1:0:-1:aX<q?ba<q?0:-1:0:-1:hv<q?hh<q?hg<q?c7<q?0:-1:0:-1:gC<q?gD<q?0:-1:0:-1:G(NQ,q+M|0)-1|0:-1;if(4<oL>>>0)var
b=d(a);else
switch(oL){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
oM=jv(c(a));if(2<oM>>>0)var
b=d(a);else
switch(oM){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oN=q7(c(a));if(2<oN>>>0)var
b=d(a);else
switch(oN){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oO=i4(c(a));if(2<oO>>>0)var
b=d(a);else
switch(oO){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oP=mm(c(a));if(2<oP>>>0)var
b=d(a);else
switch(oP){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oQ=im(c(a));if(2<oQ>>>0)var
b=d(a);else
switch(oQ){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,54);var
oR=K(c(a)),b=0===oR?D(a):1===oR?E(a):d(a)}}}}}break;case
3:B(a,73);var
r=c(a),oS=35<r?ib<r?gI<r?hz<r?-1:dG<r?e_<r?aH<r?bK<r?eK<r?fF<r?cz<r?hX<r?0:-1:0:-1:eN<r?dI<r?0:-1:0:-1:cg<r?bp<r?dj<r?aR<r?0:-1:0:-1:aa<r?dS<r?0:-1:0:-1:co<r?ec<r?hC<r?gJ<r?cb<r?gr<r?fu<r?dD<r?ah<r?eh<r?d9<r?dx<r?cv<r?cD<r?fl<r?d$<r?0:-1:0:-1:an<r?gm<r?0:-1:0:-1:fd<r?cC<r?gs<r?fG<r?0:-1:0:-1:fR<r?b8<r?0:-1:0:-1:au<r?eq<r?gc<r?b9<r?ex<r?eO<r?0:-1:0:-1:f9<r?fM<r?0:-1:0:-1:eS<r?ar<r?eA<r?cr<r?0:-1:0:-1:e$<r?ai<r?0:-1:0:-1:fc<r?dX<r?d6<r?a_<r?fo<r?cH<r?fT<r?as<r?0:-1:0:-1:f8<r?e4<r?0:-1:0:-1:eB<r?ay<r?aE<r?bA<r?0:-1:0:-1:cN<r?a3<r?0:-1:0:-1:bN<r?cV<r?aS<r?f0<r?bD<r?f3<r?0:-1:0:-1:ad<r?bT<r?0:-1:0:-1:hi<r?ca<r?gA<r?a4<r?0:-1:0:-1:f4<r?h5<r?0:-1:0:-1:b3<r?aV<r?fm<r?eP<r?eD<r?ew<r?dZ<r?dL<r?c$<r?cw<r?0:-1:0:-1:b7<r?cx<r?0:-1:0:-1:aq<r?fV<r?eX<r?am<r?0:-1:0:-1:bP<r?ed<r?0:-1:0:-1:a6<r?gv<r?aB<r?fJ<r?bC<r?bJ<r?0:-1:0:-1:bo<r?cW<r?0:-1:0:-1:a$<r?ak<r?cy<r?bS<r?0:-1:0:-1:ft<r?fi<r?0:-1:0:-1:aw<r?dQ<r?ch<r?aT<r?aG<r?du<r?f_<r?ge<r?0:-1:0:-1:e8<r?b6<r?0:-1:0:-1:br<r?e7<r?fp<r?d2<r?0:-1:0:-1:cF<r?cJ<r?0:-1:0:-1:eC<r?dt<r?eu<r?bF<r?dw<r?c5<r?0:-1:0:-1:bg<r?cE<r?0:-1:0:-1:hp<r?hQ<r?ig<r?c6<r?0:-1:0:-1:gP<r?gG<r?0:-1:0:-1:hS<r?gX<r?h0<r?hl<r?gn<r?bL<r?dh<r?dY<r?hA<r?gU<r?hW<r?gY<r?0:-1:0:-1:aJ<r?hH<r?0:-1:0:-1:fk<r?eI<r?g$<r?g2<r?0:-1:0:-1:dr<r?$<r?0:-1:0:-1:hB<r?h7<r?e1<r?cA<r?fP<r?fU<r?0:-1:0:-1:gE<r?dB<r?0:-1:0:-1:eo<r?gL<r?hM<r?ag<r?0:-1:0:-1:hD<r?id<r?0:-1:0:-1:bh<r?ga<r?hP<r?gN<r?f7<r?gO<r?hk<r?g5<r?0:-1:0:-1:h_<r?cO<r?0:-1:0:-1:dn<r?hK<r?ha<r?hU<r?0:-1:0:-1:af<r?bO<r?0:-1:0:-1:gK<r?g6<r?b5<r?el<r?cU<r?fq<r?0:-1:0:-1:hI<r?f2<r?0:-1:0:-1:cI<r?T<r?aA<r?hL<r?0:-1:0:-1:bB<r?ds<r?0:-1:0:-1:cj<r?aO<r?fw<r?fy<r?cn<r?aY<r?dy<r?fx<r?g4<r?hy<r?0:-1:0:-1:bQ<r?bU<r?0:-1:0:-1:go<r?b2<r?be<r?gd<r?0:-1:0:-1:fz<r?a8<r?0:-1:0:-1:ho<r?e2<r?gw<r?c1<r?gl<r?a1<r?0:-1:0:-1:gq<r?ek<r?0:-1:0:-1:fW<r?fE<r?Z<r?hc<r?0:-1:0:-1:dT<r?fr<r?0:-1:0:-1:ci<r?c_<r?bk<r?_<r?cR<r?fa<r?S<r?W<r?0:-1:0:-1:eM<r?e3<r?0:-1:0:-1:gZ<r?ap<r?dd<r?ea<r?0:-1:0:-1:fB<r?h$<r?0:-1:0:-1:X<r?by<r?al<r?aL<r?a9<r?cT<r?0:-1:0:-1:bR<r?c4<r?0:-1:0:-1:dv<r?dM<r?cS<r?fA<r?0:-1:0:-1:dN<r?L<r?0:-1:0:-1:V<r?f1<r?ie<r?bb<r?ac<r?fC<r?fb<r?hY<r?bH<r?cs<r?cZ<r?bY<r?dU<r?aQ<r?0:-1:0:-1:bl<r?cl<r?0:-1:0:-1:dg<r?hj<r?gF<r?b0<r?0:-1:0:-1:gQ<r?dV<r?0:-1:0:-1:g3<r?he<r?gM<r?e6<r?f6<r?ff<r?0:-1:0:-1:hG<r?hx<r?0:-1:0:-1:dH<r?hJ<r?g7<r?gH<r?0:-1:0:-1:fK<r?eQ<r?0:-1:0:-1:fX<r?dc<r?aM<r?gt<r?et<r?cp<r?dC<r?d4<r?0:-1:0:-1:eL<r?cd<r?0:-1:0:-1:U<r?at<r?fn<r?dp<r?0:-1:0:-1:f$<r?fS<r?0:-1:0:-1:dE<r?bc<r?eb<r?fg<r?df<r?ck<r?0:-1:0:-1:d3<r?e0<r?0:-1:0:-1:aI<r?d1<r?cG<r?fZ<r?0:-1:0:-1:b_<r?dR<r?0:-1:0:-1:hs<r?gp<r?gV<r?gz<r?eY<r?ef<r?gT<r?ht<r?h2<r?hR<r?0:-1:0:-1:ae<r?eV<r?0:-1:0:-1:dP<r?bf<r?eG<r?ep<r?0:-1:0:-1:di<r?bz<r?0:-1:0:-1:hd<r?bM<r?fI<r?aU<r?gS<r?b1<r?0:-1:0:-1:cq<r?em<r?0:-1:0:-1:h1<r?cK<r?d5<r?d0<r?0:-1:0:-1:hZ<r?ic<r?0:-1:0:-1:hV<r?hu<r?ih<r?a2<r?h8<r?ez<r?hr<r?a5<r?0:-1:0:-1:f5<r?h6<r?0:-1:0:-1:bW<r?hN<r?h3<r?e9<r?0:-1:0:-1:bm<r?dF<r?0:-1:0:-1:eE<r?bE<r?bI<r?hO<r?gR<r?hn<r?0:-1:0:-1:hf<r?bG<r?0:-1:0:-1:bt<r?cc<r?en<r?fs<r?0:-1:0:-1:gh<r?fj<r?0:-1:0:-1:eg<r?c3<r?cu<r?cm<r?c8<r?dJ<r?g1<r?g9<r?dk<r?hF<r?hq<r?cX<r?0:-1:0:-1:hw<r?bj<r?0:-1:0:-1:dm<r?cM<r?eU<r?ao<r?0:-1:0:-1:gB<r?bx<r?0:-1:0:-1:cB<r?dA<r?fe<r?bd<r?d7<r?bv<r?0:-1:0:-1:fY<r?fO<r?0:-1:0:-1:da<r?c9<r?aZ<r?cL<r?0:-1:0:-1:d8<r?aF<r?0:-1:0:-1:d_<r?g0<r?bX<r?a7<r?bu<r?h4<r?e5<r?fD<r?0:-1:0:-1:er<r?aD<r?0:-1:0:-1:aC<r?eW<r?hT<r?gy<r?0:-1:0:-1:gW<r?ct<r?0:-1:0:-1:bs<r?cY<r?fv<r?ej<r?eR<r?gu<r?0:-1:0:-1:fN<r?ee<r?0:-1:0:-1:aj<r?aP<r?bZ<r?cQ<r?0:-1:0:-1:gf<r?bw<r?0:-1:0:-1:aW<r?eJ<r?dz<r?gj<r?bn<r?es<r?aK<r?gb<r?dW<r?hb<r?0:-1:0:-1:b4<r?aN<r?0:-1:0:-1:b$<r?cP<r?ei<r?fH<r?0:-1:0:-1:ce<r?fh<r?0:-1:0:-1:c0<r?ab<r?dK<r?bV<r?bi<r?c2<r?0:-1:0:-1:az<r?bq<r?0:-1:0:-1:dO<r?fL<r?cf<r?gi<r?0:-1:0:-1:db<r?gx<r?0:-1:0:-1:ia<r?hE<r?fQ<r?gg<r?Y<r?dl<r?gk<r?de<r?0:-1:0:-1:ey<r?av<r?0:-1:0:-1:ax<r?eF<r?eT<r?dq<r?0:-1:0:-1:h9<r?a0<r?0:-1:0:-1:ev<r?eZ<r?eH<r?hm<r?g8<r?g_<r?0:-1:0:-1:aX<r?ba<r?0:-1:0:-1:hv<r?hh<r?hg<r?c7<r?0:-1:0:-1:gC<r?gD<r?0:-1:0:-1:G(NT,r+M|0)-1|0:-1;if(3<oS>>>0)var
b=d(a);else
switch(oS){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
s=c(a),oT=35<s?ib<s?gI<s?hz<s?-1:dG<s?e_<s?aH<s?bK<s?eK<s?fF<s?cz<s?hX<s?0:-1:0:-1:eN<s?dI<s?0:-1:0:-1:cg<s?bp<s?dj<s?aR<s?0:-1:0:-1:aa<s?dS<s?0:-1:0:-1:co<s?ec<s?hC<s?gJ<s?cb<s?gr<s?fu<s?dD<s?ah<s?eh<s?d9<s?dx<s?cv<s?cD<s?fl<s?d$<s?0:-1:0:-1:an<s?gm<s?0:-1:0:-1:fd<s?cC<s?gs<s?fG<s?0:-1:0:-1:fR<s?b8<s?0:-1:0:-1:au<s?eq<s?gc<s?b9<s?ex<s?eO<s?0:-1:0:-1:f9<s?fM<s?0:-1:0:-1:eS<s?ar<s?eA<s?cr<s?0:-1:0:-1:e$<s?ai<s?0:-1:0:-1:fc<s?dX<s?d6<s?a_<s?fo<s?cH<s?fT<s?as<s?0:-1:0:-1:f8<s?e4<s?0:-1:0:-1:eB<s?ay<s?aE<s?bA<s?0:-1:0:-1:cN<s?a3<s?0:-1:0:-1:bN<s?cV<s?aS<s?f0<s?bD<s?f3<s?0:-1:0:-1:ad<s?bT<s?0:-1:0:-1:hi<s?ca<s?gA<s?a4<s?0:-1:0:-1:f4<s?h5<s?0:-1:0:-1:b3<s?aV<s?fm<s?eP<s?eD<s?ew<s?dZ<s?dL<s?c$<s?cw<s?0:-1:0:-1:b7<s?cx<s?0:-1:0:-1:aq<s?fV<s?eX<s?am<s?0:-1:0:-1:bP<s?ed<s?0:-1:0:-1:a6<s?gv<s?aB<s?fJ<s?bC<s?bJ<s?0:-1:0:-1:bo<s?cW<s?0:-1:0:-1:a$<s?ak<s?cy<s?bS<s?0:-1:0:-1:ft<s?fi<s?0:-1:0:-1:aw<s?dQ<s?ch<s?aT<s?aG<s?du<s?f_<s?ge<s?0:-1:0:-1:e8<s?b6<s?0:-1:0:-1:br<s?e7<s?fp<s?d2<s?0:-1:0:-1:cF<s?cJ<s?0:-1:0:-1:eC<s?dt<s?eu<s?bF<s?dw<s?c5<s?0:-1:0:-1:bg<s?cE<s?0:-1:0:-1:hp<s?hQ<s?ig<s?c6<s?0:-1:0:-1:gP<s?gG<s?0:-1:0:-1:hS<s?gX<s?h0<s?hl<s?gn<s?bL<s?dh<s?dY<s?hA<s?gU<s?hW<s?gY<s?0:-1:0:-1:aJ<s?hH<s?0:-1:0:-1:fk<s?eI<s?g$<s?g2<s?0:-1:0:-1:dr<s?$<s?0:-1:0:-1:hB<s?h7<s?e1<s?cA<s?fP<s?fU<s?0:-1:0:-1:gE<s?dB<s?0:-1:0:-1:eo<s?gL<s?hM<s?ag<s?0:-1:0:-1:hD<s?id<s?0:-1:0:-1:bh<s?ga<s?hP<s?gN<s?f7<s?gO<s?hk<s?g5<s?0:-1:0:-1:h_<s?cO<s?0:-1:0:-1:dn<s?hK<s?ha<s?hU<s?0:-1:0:-1:af<s?bO<s?0:-1:0:-1:gK<s?g6<s?b5<s?el<s?cU<s?fq<s?0:-1:0:-1:hI<s?f2<s?0:-1:0:-1:cI<s?T<s?aA<s?hL<s?0:-1:0:-1:bB<s?ds<s?0:-1:0:-1:cj<s?aO<s?fw<s?fy<s?cn<s?aY<s?dy<s?fx<s?g4<s?hy<s?0:-1:0:-1:bQ<s?bU<s?0:-1:0:-1:go<s?b2<s?be<s?gd<s?0:-1:0:-1:fz<s?a8<s?0:-1:0:-1:ho<s?e2<s?gw<s?c1<s?gl<s?a1<s?0:-1:0:-1:gq<s?ek<s?0:-1:0:-1:fW<s?fE<s?Z<s?hc<s?0:-1:0:-1:dT<s?fr<s?0:-1:0:-1:ci<s?c_<s?bk<s?_<s?cR<s?fa<s?S<s?W<s?0:-1:0:-1:eM<s?e3<s?0:-1:0:-1:gZ<s?ap<s?dd<s?ea<s?0:-1:0:-1:fB<s?h$<s?0:-1:0:-1:X<s?by<s?al<s?aL<s?a9<s?cT<s?0:-1:0:-1:bR<s?c4<s?0:-1:0:-1:dv<s?dM<s?cS<s?fA<s?0:-1:0:-1:dN<s?L<s?0:-1:0:-1:V<s?f1<s?ie<s?bb<s?ac<s?fC<s?fb<s?hY<s?bH<s?cs<s?cZ<s?bY<s?dU<s?aQ<s?0:-1:0:-1:bl<s?cl<s?0:-1:0:-1:dg<s?hj<s?gF<s?b0<s?0:-1:0:-1:gQ<s?dV<s?0:-1:0:-1:g3<s?he<s?gM<s?e6<s?f6<s?ff<s?0:-1:0:-1:hG<s?hx<s?0:-1:0:-1:dH<s?hJ<s?g7<s?gH<s?0:-1:0:-1:fK<s?eQ<s?0:-1:0:-1:fX<s?dc<s?aM<s?gt<s?et<s?cp<s?dC<s?d4<s?0:-1:0:-1:eL<s?cd<s?0:-1:0:-1:U<s?at<s?fn<s?dp<s?0:-1:0:-1:f$<s?fS<s?0:-1:0:-1:dE<s?bc<s?eb<s?fg<s?df<s?ck<s?0:-1:0:-1:d3<s?e0<s?0:-1:0:-1:aI<s?d1<s?cG<s?fZ<s?0:-1:0:-1:b_<s?dR<s?0:-1:0:-1:hs<s?gp<s?gV<s?gz<s?eY<s?ef<s?gT<s?ht<s?h2<s?hR<s?0:-1:0:-1:ae<s?eV<s?0:-1:0:-1:dP<s?bf<s?eG<s?ep<s?0:-1:0:-1:di<s?bz<s?0:-1:0:-1:hd<s?bM<s?fI<s?aU<s?gS<s?b1<s?0:-1:0:-1:cq<s?em<s?0:-1:0:-1:h1<s?cK<s?d5<s?d0<s?0:-1:0:-1:hZ<s?ic<s?0:-1:0:-1:hV<s?hu<s?ih<s?a2<s?h8<s?ez<s?hr<s?a5<s?0:-1:0:-1:f5<s?h6<s?0:-1:0:-1:bW<s?hN<s?h3<s?e9<s?0:-1:0:-1:bm<s?dF<s?0:-1:0:-1:eE<s?bE<s?bI<s?hO<s?gR<s?hn<s?0:-1:0:-1:hf<s?bG<s?0:-1:0:-1:bt<s?cc<s?en<s?fs<s?0:-1:0:-1:gh<s?fj<s?0:-1:0:-1:eg<s?c3<s?cu<s?cm<s?c8<s?dJ<s?g1<s?g9<s?dk<s?hF<s?hq<s?cX<s?0:-1:0:-1:hw<s?bj<s?0:-1:0:-1:dm<s?cM<s?eU<s?ao<s?0:-1:0:-1:gB<s?bx<s?0:-1:0:-1:cB<s?dA<s?fe<s?bd<s?d7<s?bv<s?0:-1:0:-1:fY<s?fO<s?0:-1:0:-1:da<s?c9<s?aZ<s?cL<s?0:-1:0:-1:d8<s?aF<s?0:-1:0:-1:d_<s?g0<s?bX<s?a7<s?bu<s?h4<s?e5<s?fD<s?0:-1:0:-1:er<s?aD<s?0:-1:0:-1:aC<s?eW<s?hT<s?gy<s?0:-1:0:-1:gW<s?ct<s?0:-1:0:-1:bs<s?cY<s?fv<s?ej<s?eR<s?gu<s?0:-1:0:-1:fN<s?ee<s?0:-1:0:-1:aj<s?aP<s?bZ<s?cQ<s?0:-1:0:-1:gf<s?bw<s?0:-1:0:-1:aW<s?eJ<s?dz<s?gj<s?bn<s?es<s?aK<s?gb<s?dW<s?hb<s?0:-1:0:-1:b4<s?aN<s?0:-1:0:-1:b$<s?cP<s?ei<s?fH<s?0:-1:0:-1:ce<s?fh<s?0:-1:0:-1:c0<s?ab<s?dK<s?bV<s?bi<s?c2<s?0:-1:0:-1:az<s?bq<s?0:-1:0:-1:dO<s?fL<s?cf<s?gi<s?0:-1:0:-1:db<s?gx<s?0:-1:0:-1:ia<s?hE<s?fQ<s?gg<s?Y<s?dl<s?gk<s?de<s?0:-1:0:-1:ey<s?av<s?0:-1:0:-1:ax<s?eF<s?eT<s?dq<s?0:-1:0:-1:h9<s?a0<s?0:-1:0:-1:ev<s?eZ<s?eH<s?hm<s?g8<s?g_<s?0:-1:0:-1:aX<s?ba<s?0:-1:0:-1:hv<s?hh<s?hg<s?c7<s?0:-1:0:-1:gC<s?gD<s?0:-1:0:-1:G(NK,s+M|0)-1|0:-1;if(2<oT>>>0)var
b=d(a);else
switch(oT){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oU=i4(c(a));if(2<oU>>>0)var
b=d(a);else
switch(oU){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oV=iA(c(a));if(2<oV>>>0)var
b=d(a);else
switch(oV){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oW=im(c(a));if(2<oW>>>0)var
b=d(a);else
switch(oW){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,55);var
oX=K(c(a)),b=0===oX?D(a):1===oX?E(a):d(a)}}}}break;default:B(a,73);var
oY=iA(c(a));if(2<oY>>>0)var
b=d(a);else
switch(oY){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
oZ=im(c(a));if(2<oZ>>>0)var
b=d(a);else
switch(oZ){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
o0=jv(c(a));if(2<o0>>>0)var
b=d(a);else
switch(o0){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
o1=iA(c(a));if(2<o1>>>0)var
b=d(a);else
switch(o1){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
o2=im(c(a));if(2<o2>>>0)var
b=d(a);else
switch(o2){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
o3=kX(c(a));if(2<o3>>>0)var
b=d(a);else
switch(o3){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,56);var
o4=K(c(a)),b=0===o4?D(a):1===o4?E(a):d(a)}}}}}}}break;default:B(a,73);var
o5=ro(c(a));if(2<o5>>>0)var
b=d(a);else
switch(o5){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
o6=ja(c(a));if(2<o6>>>0)var
b=d(a);else
switch(o6){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
o7=jc(c(a));if(2<o7>>>0)var
b=d(a);else
switch(o7){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
o8=jv(c(a));if(2<o8>>>0)var
b=d(a);else
switch(o8){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,57);var
o9=K(c(a)),b=0===o9?D(a):1===o9?E(a):d(a)}}}}}break;case
44:B(a,73);var
o_=im(c(a));if(2<o_>>>0)var
b=d(a);else
switch(o_){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
o$=iA(c(a));if(2<o$>>>0)var
b=d(a);else
switch(o$){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pa=kh(c(a));if(2<pa>>>0)var
b=d(a);else
switch(pa){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pb=jt(c(a));if(2<pb>>>0)var
b=d(a);else
switch(pb){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pd=i$(c(a));if(2<pd>>>0)var
b=d(a);else
switch(pd){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,58);var
pe=K(c(a)),b=0===pe?D(a):1===pe?E(a):d(a)}}}}}break;case
45:B(a,73);var
t=c(a),pf=35<t?ib<t?gI<t?hz<t?-1:dG<t?e_<t?aH<t?bK<t?eK<t?fF<t?cz<t?hX<t?0:-1:0:-1:eN<t?dI<t?0:-1:0:-1:cg<t?bp<t?dj<t?aR<t?0:-1:0:-1:aa<t?dS<t?0:-1:0:-1:co<t?ec<t?hC<t?gJ<t?cb<t?gr<t?fu<t?dD<t?ah<t?eh<t?d9<t?dx<t?cv<t?cD<t?fl<t?d$<t?0:-1:0:-1:an<t?gm<t?0:-1:0:-1:fd<t?cC<t?gs<t?fG<t?0:-1:0:-1:fR<t?b8<t?0:-1:0:-1:au<t?eq<t?gc<t?b9<t?ex<t?eO<t?0:-1:0:-1:f9<t?fM<t?0:-1:0:-1:eS<t?ar<t?eA<t?cr<t?0:-1:0:-1:e$<t?ai<t?0:-1:0:-1:fc<t?dX<t?d6<t?a_<t?fo<t?cH<t?fT<t?as<t?0:-1:0:-1:f8<t?e4<t?0:-1:0:-1:eB<t?ay<t?aE<t?bA<t?0:-1:0:-1:cN<t?a3<t?0:-1:0:-1:bN<t?cV<t?aS<t?f0<t?bD<t?f3<t?0:-1:0:-1:ad<t?bT<t?0:-1:0:-1:hi<t?ca<t?gA<t?a4<t?0:-1:0:-1:f4<t?h5<t?0:-1:0:-1:b3<t?aV<t?fm<t?eP<t?eD<t?ew<t?dZ<t?dL<t?c$<t?cw<t?0:-1:0:-1:b7<t?cx<t?0:-1:0:-1:aq<t?fV<t?eX<t?am<t?0:-1:0:-1:bP<t?ed<t?0:-1:0:-1:a6<t?gv<t?aB<t?fJ<t?bC<t?bJ<t?0:-1:0:-1:bo<t?cW<t?0:-1:0:-1:a$<t?ak<t?cy<t?bS<t?0:-1:0:-1:ft<t?fi<t?0:-1:0:-1:aw<t?dQ<t?ch<t?aT<t?aG<t?du<t?f_<t?ge<t?0:-1:0:-1:e8<t?b6<t?0:-1:0:-1:br<t?e7<t?fp<t?d2<t?0:-1:0:-1:cF<t?cJ<t?0:-1:0:-1:eC<t?dt<t?eu<t?bF<t?dw<t?c5<t?0:-1:0:-1:bg<t?cE<t?0:-1:0:-1:hp<t?hQ<t?ig<t?c6<t?0:-1:0:-1:gP<t?gG<t?0:-1:0:-1:hS<t?gX<t?h0<t?hl<t?gn<t?bL<t?dh<t?dY<t?hA<t?gU<t?hW<t?gY<t?0:-1:0:-1:aJ<t?hH<t?0:-1:0:-1:fk<t?eI<t?g$<t?g2<t?0:-1:0:-1:dr<t?$<t?0:-1:0:-1:hB<t?h7<t?e1<t?cA<t?fP<t?fU<t?0:-1:0:-1:gE<t?dB<t?0:-1:0:-1:eo<t?gL<t?hM<t?ag<t?0:-1:0:-1:hD<t?id<t?0:-1:0:-1:bh<t?ga<t?hP<t?gN<t?f7<t?gO<t?hk<t?g5<t?0:-1:0:-1:h_<t?cO<t?0:-1:0:-1:dn<t?hK<t?ha<t?hU<t?0:-1:0:-1:af<t?bO<t?0:-1:0:-1:gK<t?g6<t?b5<t?el<t?cU<t?fq<t?0:-1:0:-1:hI<t?f2<t?0:-1:0:-1:cI<t?T<t?aA<t?hL<t?0:-1:0:-1:bB<t?ds<t?0:-1:0:-1:cj<t?aO<t?fw<t?fy<t?cn<t?aY<t?dy<t?fx<t?g4<t?hy<t?0:-1:0:-1:bQ<t?bU<t?0:-1:0:-1:go<t?b2<t?be<t?gd<t?0:-1:0:-1:fz<t?a8<t?0:-1:0:-1:ho<t?e2<t?gw<t?c1<t?gl<t?a1<t?0:-1:0:-1:gq<t?ek<t?0:-1:0:-1:fW<t?fE<t?Z<t?hc<t?0:-1:0:-1:dT<t?fr<t?0:-1:0:-1:ci<t?c_<t?bk<t?_<t?cR<t?fa<t?S<t?W<t?0:-1:0:-1:eM<t?e3<t?0:-1:0:-1:gZ<t?ap<t?dd<t?ea<t?0:-1:0:-1:fB<t?h$<t?0:-1:0:-1:X<t?by<t?al<t?aL<t?a9<t?cT<t?0:-1:0:-1:bR<t?c4<t?0:-1:0:-1:dv<t?dM<t?cS<t?fA<t?0:-1:0:-1:dN<t?L<t?0:-1:0:-1:V<t?f1<t?ie<t?bb<t?ac<t?fC<t?fb<t?hY<t?bH<t?cs<t?cZ<t?bY<t?dU<t?aQ<t?0:-1:0:-1:bl<t?cl<t?0:-1:0:-1:dg<t?hj<t?gF<t?b0<t?0:-1:0:-1:gQ<t?dV<t?0:-1:0:-1:g3<t?he<t?gM<t?e6<t?f6<t?ff<t?0:-1:0:-1:hG<t?hx<t?0:-1:0:-1:dH<t?hJ<t?g7<t?gH<t?0:-1:0:-1:fK<t?eQ<t?0:-1:0:-1:fX<t?dc<t?aM<t?gt<t?et<t?cp<t?dC<t?d4<t?0:-1:0:-1:eL<t?cd<t?0:-1:0:-1:U<t?at<t?fn<t?dp<t?0:-1:0:-1:f$<t?fS<t?0:-1:0:-1:dE<t?bc<t?eb<t?fg<t?df<t?ck<t?0:-1:0:-1:d3<t?e0<t?0:-1:0:-1:aI<t?d1<t?cG<t?fZ<t?0:-1:0:-1:b_<t?dR<t?0:-1:0:-1:hs<t?gp<t?gV<t?gz<t?eY<t?ef<t?gT<t?ht<t?h2<t?hR<t?0:-1:0:-1:ae<t?eV<t?0:-1:0:-1:dP<t?bf<t?eG<t?ep<t?0:-1:0:-1:di<t?bz<t?0:-1:0:-1:hd<t?bM<t?fI<t?aU<t?gS<t?b1<t?0:-1:0:-1:cq<t?em<t?0:-1:0:-1:h1<t?cK<t?d5<t?d0<t?0:-1:0:-1:hZ<t?ic<t?0:-1:0:-1:hV<t?hu<t?ih<t?a2<t?h8<t?ez<t?hr<t?a5<t?0:-1:0:-1:f5<t?h6<t?0:-1:0:-1:bW<t?hN<t?h3<t?e9<t?0:-1:0:-1:bm<t?dF<t?0:-1:0:-1:eE<t?bE<t?bI<t?hO<t?gR<t?hn<t?0:-1:0:-1:hf<t?bG<t?0:-1:0:-1:bt<t?cc<t?en<t?fs<t?0:-1:0:-1:gh<t?fj<t?0:-1:0:-1:eg<t?c3<t?cu<t?cm<t?c8<t?dJ<t?g1<t?g9<t?dk<t?hF<t?hq<t?cX<t?0:-1:0:-1:hw<t?bj<t?0:-1:0:-1:dm<t?cM<t?eU<t?ao<t?0:-1:0:-1:gB<t?bx<t?0:-1:0:-1:cB<t?dA<t?fe<t?bd<t?d7<t?bv<t?0:-1:0:-1:fY<t?fO<t?0:-1:0:-1:da<t?c9<t?aZ<t?cL<t?0:-1:0:-1:d8<t?aF<t?0:-1:0:-1:d_<t?g0<t?bX<t?a7<t?bu<t?h4<t?e5<t?fD<t?0:-1:0:-1:er<t?aD<t?0:-1:0:-1:aC<t?eW<t?hT<t?gy<t?0:-1:0:-1:gW<t?ct<t?0:-1:0:-1:bs<t?cY<t?fv<t?ej<t?eR<t?gu<t?0:-1:0:-1:fN<t?ee<t?0:-1:0:-1:aj<t?aP<t?bZ<t?cQ<t?0:-1:0:-1:gf<t?bw<t?0:-1:0:-1:aW<t?eJ<t?dz<t?gj<t?bn<t?es<t?aK<t?gb<t?dW<t?hb<t?0:-1:0:-1:b4<t?aN<t?0:-1:0:-1:b$<t?cP<t?ei<t?fH<t?0:-1:0:-1:ce<t?fh<t?0:-1:0:-1:c0<t?ab<t?dK<t?bV<t?bi<t?c2<t?0:-1:0:-1:az<t?bq<t?0:-1:0:-1:dO<t?fL<t?cf<t?gi<t?0:-1:0:-1:db<t?gx<t?0:-1:0:-1:ia<t?hE<t?fQ<t?gg<t?Y<t?dl<t?gk<t?de<t?0:-1:0:-1:ey<t?av<t?0:-1:0:-1:ax<t?eF<t?eT<t?dq<t?0:-1:0:-1:h9<t?a0<t?0:-1:0:-1:ev<t?eZ<t?eH<t?hm<t?g8<t?g_<t?0:-1:0:-1:aX<t?ba<t?0:-1:0:-1:hv<t?hh<t?hg<t?c7<t?0:-1:0:-1:gC<t?gD<t?0:-1:0:-1:G(Nr,t+M|0)-1|0:-1;if(4<pf>>>0)var
b=d(a);else
switch(pf){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
pg=i4(c(a));if(2<pg>>>0)var
b=d(a);else
switch(pg){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
ph=iA(c(a));if(2<ph>>>0)var
b=d(a);else
switch(ph){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pi=jc(c(a));if(2<pi>>>0)var
b=d(a);else
switch(pi){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pj=jv(c(a));if(2<pj>>>0)var
b=d(a);else
switch(pj){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,59);var
pk=K(c(a)),b=0===pk?D(a):1===pk?E(a):d(a)}}}}break;case
3:B(a,73);var
pl=lH(c(a));if(2<pl>>>0)var
b=d(a);else
switch(pl){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pm=im(c(a));if(2<pm>>>0)var
b=d(a);else
switch(pm){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pn=jt(c(a));if(2<pn>>>0)var
b=d(a);else
switch(pn){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,60);var
pp=K(c(a)),b=0===pp?D(a):1===pp?E(a):d(a)}}}break;default:B(a,73);var
pq=jc(c(a));if(2<pq>>>0)var
b=d(a);else
switch(pq){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pr=iA(c(a));if(2<pr>>>0)var
b=d(a);else
switch(pr){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
ps=jv(c(a));if(2<ps>>>0)var
b=d(a);else
switch(ps){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pt=oF(c(a));if(2<pt>>>0)var
b=d(a);else
switch(pt){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,61);var
pu=K(c(a)),b=0===pu?D(a):1===pu?E(a):d(a)}}}}}break;case
46:B(a,73);var
u=c(a),pv=35<u?ib<u?gI<u?hz<u?-1:dG<u?e_<u?aH<u?bK<u?eK<u?fF<u?cz<u?hX<u?0:-1:0:-1:eN<u?dI<u?0:-1:0:-1:cg<u?bp<u?dj<u?aR<u?0:-1:0:-1:aa<u?dS<u?0:-1:0:-1:co<u?ec<u?hC<u?gJ<u?cb<u?gr<u?fu<u?dD<u?ah<u?eh<u?d9<u?dx<u?cv<u?cD<u?fl<u?d$<u?0:-1:0:-1:an<u?gm<u?0:-1:0:-1:fd<u?cC<u?gs<u?fG<u?0:-1:0:-1:fR<u?b8<u?0:-1:0:-1:au<u?eq<u?gc<u?b9<u?ex<u?eO<u?0:-1:0:-1:f9<u?fM<u?0:-1:0:-1:eS<u?ar<u?eA<u?cr<u?0:-1:0:-1:e$<u?ai<u?0:-1:0:-1:fc<u?dX<u?d6<u?a_<u?fo<u?cH<u?fT<u?as<u?0:-1:0:-1:f8<u?e4<u?0:-1:0:-1:eB<u?ay<u?aE<u?bA<u?0:-1:0:-1:cN<u?a3<u?0:-1:0:-1:bN<u?cV<u?aS<u?f0<u?bD<u?f3<u?0:-1:0:-1:ad<u?bT<u?0:-1:0:-1:hi<u?ca<u?gA<u?a4<u?0:-1:0:-1:f4<u?h5<u?0:-1:0:-1:b3<u?aV<u?fm<u?eP<u?eD<u?ew<u?dZ<u?dL<u?c$<u?cw<u?0:-1:0:-1:b7<u?cx<u?0:-1:0:-1:aq<u?fV<u?eX<u?am<u?0:-1:0:-1:bP<u?ed<u?0:-1:0:-1:a6<u?gv<u?aB<u?fJ<u?bC<u?bJ<u?0:-1:0:-1:bo<u?cW<u?0:-1:0:-1:a$<u?ak<u?cy<u?bS<u?0:-1:0:-1:ft<u?fi<u?0:-1:0:-1:aw<u?dQ<u?ch<u?aT<u?aG<u?du<u?f_<u?ge<u?0:-1:0:-1:e8<u?b6<u?0:-1:0:-1:br<u?e7<u?fp<u?d2<u?0:-1:0:-1:cF<u?cJ<u?0:-1:0:-1:eC<u?dt<u?eu<u?bF<u?dw<u?c5<u?0:-1:0:-1:bg<u?cE<u?0:-1:0:-1:hp<u?hQ<u?ig<u?c6<u?0:-1:0:-1:gP<u?gG<u?0:-1:0:-1:hS<u?gX<u?h0<u?hl<u?gn<u?bL<u?dh<u?dY<u?hA<u?gU<u?hW<u?gY<u?0:-1:0:-1:aJ<u?hH<u?0:-1:0:-1:fk<u?eI<u?g$<u?g2<u?0:-1:0:-1:dr<u?$<u?0:-1:0:-1:hB<u?h7<u?e1<u?cA<u?fP<u?fU<u?0:-1:0:-1:gE<u?dB<u?0:-1:0:-1:eo<u?gL<u?hM<u?ag<u?0:-1:0:-1:hD<u?id<u?0:-1:0:-1:bh<u?ga<u?hP<u?gN<u?f7<u?gO<u?hk<u?g5<u?0:-1:0:-1:h_<u?cO<u?0:-1:0:-1:dn<u?hK<u?ha<u?hU<u?0:-1:0:-1:af<u?bO<u?0:-1:0:-1:gK<u?g6<u?b5<u?el<u?cU<u?fq<u?0:-1:0:-1:hI<u?f2<u?0:-1:0:-1:cI<u?T<u?aA<u?hL<u?0:-1:0:-1:bB<u?ds<u?0:-1:0:-1:cj<u?aO<u?fw<u?fy<u?cn<u?aY<u?dy<u?fx<u?g4<u?hy<u?0:-1:0:-1:bQ<u?bU<u?0:-1:0:-1:go<u?b2<u?be<u?gd<u?0:-1:0:-1:fz<u?a8<u?0:-1:0:-1:ho<u?e2<u?gw<u?c1<u?gl<u?a1<u?0:-1:0:-1:gq<u?ek<u?0:-1:0:-1:fW<u?fE<u?Z<u?hc<u?0:-1:0:-1:dT<u?fr<u?0:-1:0:-1:ci<u?c_<u?bk<u?_<u?cR<u?fa<u?S<u?W<u?0:-1:0:-1:eM<u?e3<u?0:-1:0:-1:gZ<u?ap<u?dd<u?ea<u?0:-1:0:-1:fB<u?h$<u?0:-1:0:-1:X<u?by<u?al<u?aL<u?a9<u?cT<u?0:-1:0:-1:bR<u?c4<u?0:-1:0:-1:dv<u?dM<u?cS<u?fA<u?0:-1:0:-1:dN<u?L<u?0:-1:0:-1:V<u?f1<u?ie<u?bb<u?ac<u?fC<u?fb<u?hY<u?bH<u?cs<u?cZ<u?bY<u?dU<u?aQ<u?0:-1:0:-1:bl<u?cl<u?0:-1:0:-1:dg<u?hj<u?gF<u?b0<u?0:-1:0:-1:gQ<u?dV<u?0:-1:0:-1:g3<u?he<u?gM<u?e6<u?f6<u?ff<u?0:-1:0:-1:hG<u?hx<u?0:-1:0:-1:dH<u?hJ<u?g7<u?gH<u?0:-1:0:-1:fK<u?eQ<u?0:-1:0:-1:fX<u?dc<u?aM<u?gt<u?et<u?cp<u?dC<u?d4<u?0:-1:0:-1:eL<u?cd<u?0:-1:0:-1:U<u?at<u?fn<u?dp<u?0:-1:0:-1:f$<u?fS<u?0:-1:0:-1:dE<u?bc<u?eb<u?fg<u?df<u?ck<u?0:-1:0:-1:d3<u?e0<u?0:-1:0:-1:aI<u?d1<u?cG<u?fZ<u?0:-1:0:-1:b_<u?dR<u?0:-1:0:-1:hs<u?gp<u?gV<u?gz<u?eY<u?ef<u?gT<u?ht<u?h2<u?hR<u?0:-1:0:-1:ae<u?eV<u?0:-1:0:-1:dP<u?bf<u?eG<u?ep<u?0:-1:0:-1:di<u?bz<u?0:-1:0:-1:hd<u?bM<u?fI<u?aU<u?gS<u?b1<u?0:-1:0:-1:cq<u?em<u?0:-1:0:-1:h1<u?cK<u?d5<u?d0<u?0:-1:0:-1:hZ<u?ic<u?0:-1:0:-1:hV<u?hu<u?ih<u?a2<u?h8<u?ez<u?hr<u?a5<u?0:-1:0:-1:f5<u?h6<u?0:-1:0:-1:bW<u?hN<u?h3<u?e9<u?0:-1:0:-1:bm<u?dF<u?0:-1:0:-1:eE<u?bE<u?bI<u?hO<u?gR<u?hn<u?0:-1:0:-1:hf<u?bG<u?0:-1:0:-1:bt<u?cc<u?en<u?fs<u?0:-1:0:-1:gh<u?fj<u?0:-1:0:-1:eg<u?c3<u?cu<u?cm<u?c8<u?dJ<u?g1<u?g9<u?dk<u?hF<u?hq<u?cX<u?0:-1:0:-1:hw<u?bj<u?0:-1:0:-1:dm<u?cM<u?eU<u?ao<u?0:-1:0:-1:gB<u?bx<u?0:-1:0:-1:cB<u?dA<u?fe<u?bd<u?d7<u?bv<u?0:-1:0:-1:fY<u?fO<u?0:-1:0:-1:da<u?c9<u?aZ<u?cL<u?0:-1:0:-1:d8<u?aF<u?0:-1:0:-1:d_<u?g0<u?bX<u?a7<u?bu<u?h4<u?e5<u?fD<u?0:-1:0:-1:er<u?aD<u?0:-1:0:-1:aC<u?eW<u?hT<u?gy<u?0:-1:0:-1:gW<u?ct<u?0:-1:0:-1:bs<u?cY<u?fv<u?ej<u?eR<u?gu<u?0:-1:0:-1:fN<u?ee<u?0:-1:0:-1:aj<u?aP<u?bZ<u?cQ<u?0:-1:0:-1:gf<u?bw<u?0:-1:0:-1:aW<u?eJ<u?dz<u?gj<u?bn<u?es<u?aK<u?gb<u?dW<u?hb<u?0:-1:0:-1:b4<u?aN<u?0:-1:0:-1:b$<u?cP<u?ei<u?fH<u?0:-1:0:-1:ce<u?fh<u?0:-1:0:-1:c0<u?ab<u?dK<u?bV<u?bi<u?c2<u?0:-1:0:-1:az<u?bq<u?0:-1:0:-1:dO<u?fL<u?cf<u?gi<u?0:-1:0:-1:db<u?gx<u?0:-1:0:-1:ia<u?hE<u?fQ<u?gg<u?Y<u?dl<u?gk<u?de<u?0:-1:0:-1:ey<u?av<u?0:-1:0:-1:ax<u?eF<u?eT<u?dq<u?0:-1:0:-1:h9<u?a0<u?0:-1:0:-1:ev<u?eZ<u?eH<u?hm<u?g8<u?g_<u?0:-1:0:-1:aX<u?ba<u?0:-1:0:-1:hv<u?hh<u?hg<u?c7<u?0:-1:0:-1:gC<u?gD<u?0:-1:0:-1:G(Nq,u+M|0)-1|0:-1;if(4<pv>>>0)var
b=d(a);else
switch(pv){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
v=c(a),pw=35<v?ib<v?gI<v?hz<v?-1:dG<v?e_<v?aH<v?bK<v?eK<v?fF<v?cz<v?hX<v?0:-1:0:-1:eN<v?dI<v?0:-1:0:-1:cg<v?bp<v?dj<v?aR<v?0:-1:0:-1:aa<v?dS<v?0:-1:0:-1:co<v?ec<v?hC<v?gJ<v?cb<v?gr<v?fu<v?dD<v?ah<v?eh<v?d9<v?dx<v?cv<v?cD<v?fl<v?d$<v?0:-1:0:-1:an<v?gm<v?0:-1:0:-1:fd<v?cC<v?gs<v?fG<v?0:-1:0:-1:fR<v?b8<v?0:-1:0:-1:au<v?eq<v?gc<v?b9<v?ex<v?eO<v?0:-1:0:-1:f9<v?fM<v?0:-1:0:-1:eS<v?ar<v?eA<v?cr<v?0:-1:0:-1:e$<v?ai<v?0:-1:0:-1:fc<v?dX<v?d6<v?a_<v?fo<v?cH<v?fT<v?as<v?0:-1:0:-1:f8<v?e4<v?0:-1:0:-1:eB<v?ay<v?aE<v?bA<v?0:-1:0:-1:cN<v?a3<v?0:-1:0:-1:bN<v?cV<v?aS<v?f0<v?bD<v?f3<v?0:-1:0:-1:ad<v?bT<v?0:-1:0:-1:hi<v?ca<v?gA<v?a4<v?0:-1:0:-1:f4<v?h5<v?0:-1:0:-1:b3<v?aV<v?fm<v?eP<v?eD<v?ew<v?dZ<v?dL<v?c$<v?cw<v?0:-1:0:-1:b7<v?cx<v?0:-1:0:-1:aq<v?fV<v?eX<v?am<v?0:-1:0:-1:bP<v?ed<v?0:-1:0:-1:a6<v?gv<v?aB<v?fJ<v?bC<v?bJ<v?0:-1:0:-1:bo<v?cW<v?0:-1:0:-1:a$<v?ak<v?cy<v?bS<v?0:-1:0:-1:ft<v?fi<v?0:-1:0:-1:aw<v?dQ<v?ch<v?aT<v?aG<v?du<v?f_<v?ge<v?0:-1:0:-1:e8<v?b6<v?0:-1:0:-1:br<v?e7<v?fp<v?d2<v?0:-1:0:-1:cF<v?cJ<v?0:-1:0:-1:eC<v?dt<v?eu<v?bF<v?dw<v?c5<v?0:-1:0:-1:bg<v?cE<v?0:-1:0:-1:hp<v?hQ<v?ig<v?c6<v?0:-1:0:-1:gP<v?gG<v?0:-1:0:-1:hS<v?gX<v?h0<v?hl<v?gn<v?bL<v?dh<v?dY<v?hA<v?gU<v?hW<v?gY<v?0:-1:0:-1:aJ<v?hH<v?0:-1:0:-1:fk<v?eI<v?g$<v?g2<v?0:-1:0:-1:dr<v?$<v?0:-1:0:-1:hB<v?h7<v?e1<v?cA<v?fP<v?fU<v?0:-1:0:-1:gE<v?dB<v?0:-1:0:-1:eo<v?gL<v?hM<v?ag<v?0:-1:0:-1:hD<v?id<v?0:-1:0:-1:bh<v?ga<v?hP<v?gN<v?f7<v?gO<v?hk<v?g5<v?0:-1:0:-1:h_<v?cO<v?0:-1:0:-1:dn<v?hK<v?ha<v?hU<v?0:-1:0:-1:af<v?bO<v?0:-1:0:-1:gK<v?g6<v?b5<v?el<v?cU<v?fq<v?0:-1:0:-1:hI<v?f2<v?0:-1:0:-1:cI<v?T<v?aA<v?hL<v?0:-1:0:-1:bB<v?ds<v?0:-1:0:-1:cj<v?aO<v?fw<v?fy<v?cn<v?aY<v?dy<v?fx<v?g4<v?hy<v?0:-1:0:-1:bQ<v?bU<v?0:-1:0:-1:go<v?b2<v?be<v?gd<v?0:-1:0:-1:fz<v?a8<v?0:-1:0:-1:ho<v?e2<v?gw<v?c1<v?gl<v?a1<v?0:-1:0:-1:gq<v?ek<v?0:-1:0:-1:fW<v?fE<v?Z<v?hc<v?0:-1:0:-1:dT<v?fr<v?0:-1:0:-1:ci<v?c_<v?bk<v?_<v?cR<v?fa<v?S<v?W<v?0:-1:0:-1:eM<v?e3<v?0:-1:0:-1:gZ<v?ap<v?dd<v?ea<v?0:-1:0:-1:fB<v?h$<v?0:-1:0:-1:X<v?by<v?al<v?aL<v?a9<v?cT<v?0:-1:0:-1:bR<v?c4<v?0:-1:0:-1:dv<v?dM<v?cS<v?fA<v?0:-1:0:-1:dN<v?L<v?0:-1:0:-1:V<v?f1<v?ie<v?bb<v?ac<v?fC<v?fb<v?hY<v?bH<v?cs<v?cZ<v?bY<v?dU<v?aQ<v?0:-1:0:-1:bl<v?cl<v?0:-1:0:-1:dg<v?hj<v?gF<v?b0<v?0:-1:0:-1:gQ<v?dV<v?0:-1:0:-1:g3<v?he<v?gM<v?e6<v?f6<v?ff<v?0:-1:0:-1:hG<v?hx<v?0:-1:0:-1:dH<v?hJ<v?g7<v?gH<v?0:-1:0:-1:fK<v?eQ<v?0:-1:0:-1:fX<v?dc<v?aM<v?gt<v?et<v?cp<v?dC<v?d4<v?0:-1:0:-1:eL<v?cd<v?0:-1:0:-1:U<v?at<v?fn<v?dp<v?0:-1:0:-1:f$<v?fS<v?0:-1:0:-1:dE<v?bc<v?eb<v?fg<v?df<v?ck<v?0:-1:0:-1:d3<v?e0<v?0:-1:0:-1:aI<v?d1<v?cG<v?fZ<v?0:-1:0:-1:b_<v?dR<v?0:-1:0:-1:hs<v?gp<v?gV<v?gz<v?eY<v?ef<v?gT<v?ht<v?h2<v?hR<v?0:-1:0:-1:ae<v?eV<v?0:-1:0:-1:dP<v?bf<v?eG<v?ep<v?0:-1:0:-1:di<v?bz<v?0:-1:0:-1:hd<v?bM<v?fI<v?aU<v?gS<v?b1<v?0:-1:0:-1:cq<v?em<v?0:-1:0:-1:h1<v?cK<v?d5<v?d0<v?0:-1:0:-1:hZ<v?ic<v?0:-1:0:-1:hV<v?hu<v?ih<v?a2<v?h8<v?ez<v?hr<v?a5<v?0:-1:0:-1:f5<v?h6<v?0:-1:0:-1:bW<v?hN<v?h3<v?e9<v?0:-1:0:-1:bm<v?dF<v?0:-1:0:-1:eE<v?bE<v?bI<v?hO<v?gR<v?hn<v?0:-1:0:-1:hf<v?bG<v?0:-1:0:-1:bt<v?cc<v?en<v?fs<v?0:-1:0:-1:gh<v?fj<v?0:-1:0:-1:eg<v?c3<v?cu<v?cm<v?c8<v?dJ<v?g1<v?g9<v?dk<v?hF<v?hq<v?cX<v?0:-1:0:-1:hw<v?bj<v?0:-1:0:-1:dm<v?cM<v?eU<v?ao<v?0:-1:0:-1:gB<v?bx<v?0:-1:0:-1:cB<v?dA<v?fe<v?bd<v?d7<v?bv<v?0:-1:0:-1:fY<v?fO<v?0:-1:0:-1:da<v?c9<v?aZ<v?cL<v?0:-1:0:-1:d8<v?aF<v?0:-1:0:-1:d_<v?g0<v?bX<v?a7<v?bu<v?h4<v?e5<v?fD<v?0:-1:0:-1:er<v?aD<v?0:-1:0:-1:aC<v?eW<v?hT<v?gy<v?0:-1:0:-1:gW<v?ct<v?0:-1:0:-1:bs<v?cY<v?fv<v?ej<v?eR<v?gu<v?0:-1:0:-1:fN<v?ee<v?0:-1:0:-1:aj<v?aP<v?bZ<v?cQ<v?0:-1:0:-1:gf<v?bw<v?0:-1:0:-1:aW<v?eJ<v?dz<v?gj<v?bn<v?es<v?aK<v?gb<v?dW<v?hb<v?0:-1:0:-1:b4<v?aN<v?0:-1:0:-1:b$<v?cP<v?ei<v?fH<v?0:-1:0:-1:ce<v?fh<v?0:-1:0:-1:c0<v?ab<v?dK<v?bV<v?bi<v?c2<v?0:-1:0:-1:az<v?bq<v?0:-1:0:-1:dO<v?fL<v?cf<v?gi<v?0:-1:0:-1:db<v?gx<v?0:-1:0:-1:ia<v?hE<v?fQ<v?gg<v?Y<v?dl<v?gk<v?de<v?0:-1:0:-1:ey<v?av<v?0:-1:0:-1:ax<v?eF<v?eT<v?dq<v?0:-1:0:-1:h9<v?a0<v?0:-1:0:-1:ev<v?eZ<v?eH<v?hm<v?g8<v?g_<v?0:-1:0:-1:aX<v?ba<v?0:-1:0:-1:hv<v?hh<v?hg<v?c7<v?0:-1:0:-1:gC<v?gD<v?0:-1:0:-1:G(No,v+M|0)-1|0:-1;if(3<pw>>>0)var
b=d(a);else
switch(pw){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
py=kj(c(a));if(2<py>>>0)var
b=d(a);else
switch(py){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,62);var
pz=K(c(a)),b=0===pz?D(a):1===pz?E(a):d(a)}break;default:B(a,73);var
pA=j5(c(a));if(2<pA>>>0)var
b=d(a);else
switch(pA){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pB=rq(c(a));if(2<pB>>>0)var
b=d(a);else
switch(pB){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,63);var
pC=K(c(a)),b=0===pC?D(a):1===pC?E(a):d(a)}}}break;case
3:B(a,73);var
w=c(a),pD=35<w?ib<w?gI<w?hz<w?-1:dG<w?e_<w?aH<w?bK<w?eK<w?fF<w?cz<w?hX<w?0:-1:0:-1:eN<w?dI<w?0:-1:0:-1:cg<w?bp<w?dj<w?aR<w?0:-1:0:-1:aa<w?dS<w?0:-1:0:-1:co<w?ec<w?hC<w?gJ<w?cb<w?gr<w?fu<w?dD<w?ah<w?eh<w?d9<w?dx<w?cv<w?cD<w?fl<w?d$<w?0:-1:0:-1:an<w?gm<w?0:-1:0:-1:fd<w?cC<w?gs<w?fG<w?0:-1:0:-1:fR<w?b8<w?0:-1:0:-1:au<w?eq<w?gc<w?b9<w?ex<w?eO<w?0:-1:0:-1:f9<w?fM<w?0:-1:0:-1:eS<w?ar<w?eA<w?cr<w?0:-1:0:-1:e$<w?ai<w?0:-1:0:-1:fc<w?dX<w?d6<w?a_<w?fo<w?cH<w?fT<w?as<w?0:-1:0:-1:f8<w?e4<w?0:-1:0:-1:eB<w?ay<w?aE<w?bA<w?0:-1:0:-1:cN<w?a3<w?0:-1:0:-1:bN<w?cV<w?aS<w?f0<w?bD<w?f3<w?0:-1:0:-1:ad<w?bT<w?0:-1:0:-1:hi<w?ca<w?gA<w?a4<w?0:-1:0:-1:f4<w?h5<w?0:-1:0:-1:b3<w?aV<w?fm<w?eP<w?eD<w?ew<w?dZ<w?dL<w?c$<w?cw<w?0:-1:0:-1:b7<w?cx<w?0:-1:0:-1:aq<w?fV<w?eX<w?am<w?0:-1:0:-1:bP<w?ed<w?0:-1:0:-1:a6<w?gv<w?aB<w?fJ<w?bC<w?bJ<w?0:-1:0:-1:bo<w?cW<w?0:-1:0:-1:a$<w?ak<w?cy<w?bS<w?0:-1:0:-1:ft<w?fi<w?0:-1:0:-1:aw<w?dQ<w?ch<w?aT<w?aG<w?du<w?f_<w?ge<w?0:-1:0:-1:e8<w?b6<w?0:-1:0:-1:br<w?e7<w?fp<w?d2<w?0:-1:0:-1:cF<w?cJ<w?0:-1:0:-1:eC<w?dt<w?eu<w?bF<w?dw<w?c5<w?0:-1:0:-1:bg<w?cE<w?0:-1:0:-1:hp<w?hQ<w?ig<w?c6<w?0:-1:0:-1:gP<w?gG<w?0:-1:0:-1:hS<w?gX<w?h0<w?hl<w?gn<w?bL<w?dh<w?dY<w?hA<w?gU<w?hW<w?gY<w?0:-1:0:-1:aJ<w?hH<w?0:-1:0:-1:fk<w?eI<w?g$<w?g2<w?0:-1:0:-1:dr<w?$<w?0:-1:0:-1:hB<w?h7<w?e1<w?cA<w?fP<w?fU<w?0:-1:0:-1:gE<w?dB<w?0:-1:0:-1:eo<w?gL<w?hM<w?ag<w?0:-1:0:-1:hD<w?id<w?0:-1:0:-1:bh<w?ga<w?hP<w?gN<w?f7<w?gO<w?hk<w?g5<w?0:-1:0:-1:h_<w?cO<w?0:-1:0:-1:dn<w?hK<w?ha<w?hU<w?0:-1:0:-1:af<w?bO<w?0:-1:0:-1:gK<w?g6<w?b5<w?el<w?cU<w?fq<w?0:-1:0:-1:hI<w?f2<w?0:-1:0:-1:cI<w?T<w?aA<w?hL<w?0:-1:0:-1:bB<w?ds<w?0:-1:0:-1:cj<w?aO<w?fw<w?fy<w?cn<w?aY<w?dy<w?fx<w?g4<w?hy<w?0:-1:0:-1:bQ<w?bU<w?0:-1:0:-1:go<w?b2<w?be<w?gd<w?0:-1:0:-1:fz<w?a8<w?0:-1:0:-1:ho<w?e2<w?gw<w?c1<w?gl<w?a1<w?0:-1:0:-1:gq<w?ek<w?0:-1:0:-1:fW<w?fE<w?Z<w?hc<w?0:-1:0:-1:dT<w?fr<w?0:-1:0:-1:ci<w?c_<w?bk<w?_<w?cR<w?fa<w?S<w?W<w?0:-1:0:-1:eM<w?e3<w?0:-1:0:-1:gZ<w?ap<w?dd<w?ea<w?0:-1:0:-1:fB<w?h$<w?0:-1:0:-1:X<w?by<w?al<w?aL<w?a9<w?cT<w?0:-1:0:-1:bR<w?c4<w?0:-1:0:-1:dv<w?dM<w?cS<w?fA<w?0:-1:0:-1:dN<w?L<w?0:-1:0:-1:V<w?f1<w?ie<w?bb<w?ac<w?fC<w?fb<w?hY<w?bH<w?cs<w?cZ<w?bY<w?dU<w?aQ<w?0:-1:0:-1:bl<w?cl<w?0:-1:0:-1:dg<w?hj<w?gF<w?b0<w?0:-1:0:-1:gQ<w?dV<w?0:-1:0:-1:g3<w?he<w?gM<w?e6<w?f6<w?ff<w?0:-1:0:-1:hG<w?hx<w?0:-1:0:-1:dH<w?hJ<w?g7<w?gH<w?0:-1:0:-1:fK<w?eQ<w?0:-1:0:-1:fX<w?dc<w?aM<w?gt<w?et<w?cp<w?dC<w?d4<w?0:-1:0:-1:eL<w?cd<w?0:-1:0:-1:U<w?at<w?fn<w?dp<w?0:-1:0:-1:f$<w?fS<w?0:-1:0:-1:dE<w?bc<w?eb<w?fg<w?df<w?ck<w?0:-1:0:-1:d3<w?e0<w?0:-1:0:-1:aI<w?d1<w?cG<w?fZ<w?0:-1:0:-1:b_<w?dR<w?0:-1:0:-1:hs<w?gp<w?gV<w?gz<w?eY<w?ef<w?gT<w?ht<w?h2<w?hR<w?0:-1:0:-1:ae<w?eV<w?0:-1:0:-1:dP<w?bf<w?eG<w?ep<w?0:-1:0:-1:di<w?bz<w?0:-1:0:-1:hd<w?bM<w?fI<w?aU<w?gS<w?b1<w?0:-1:0:-1:cq<w?em<w?0:-1:0:-1:h1<w?cK<w?d5<w?d0<w?0:-1:0:-1:hZ<w?ic<w?0:-1:0:-1:hV<w?hu<w?ih<w?a2<w?h8<w?ez<w?hr<w?a5<w?0:-1:0:-1:f5<w?h6<w?0:-1:0:-1:bW<w?hN<w?h3<w?e9<w?0:-1:0:-1:bm<w?dF<w?0:-1:0:-1:eE<w?bE<w?bI<w?hO<w?gR<w?hn<w?0:-1:0:-1:hf<w?bG<w?0:-1:0:-1:bt<w?cc<w?en<w?fs<w?0:-1:0:-1:gh<w?fj<w?0:-1:0:-1:eg<w?c3<w?cu<w?cm<w?c8<w?dJ<w?g1<w?g9<w?dk<w?hF<w?hq<w?cX<w?0:-1:0:-1:hw<w?bj<w?0:-1:0:-1:dm<w?cM<w?eU<w?ao<w?0:-1:0:-1:gB<w?bx<w?0:-1:0:-1:cB<w?dA<w?fe<w?bd<w?d7<w?bv<w?0:-1:0:-1:fY<w?fO<w?0:-1:0:-1:da<w?c9<w?aZ<w?cL<w?0:-1:0:-1:d8<w?aF<w?0:-1:0:-1:d_<w?g0<w?bX<w?a7<w?bu<w?h4<w?e5<w?fD<w?0:-1:0:-1:er<w?aD<w?0:-1:0:-1:aC<w?eW<w?hT<w?gy<w?0:-1:0:-1:gW<w?ct<w?0:-1:0:-1:bs<w?cY<w?fv<w?ej<w?eR<w?gu<w?0:-1:0:-1:fN<w?ee<w?0:-1:0:-1:aj<w?aP<w?bZ<w?cQ<w?0:-1:0:-1:gf<w?bw<w?0:-1:0:-1:aW<w?eJ<w?dz<w?gj<w?bn<w?es<w?aK<w?gb<w?dW<w?hb<w?0:-1:0:-1:b4<w?aN<w?0:-1:0:-1:b$<w?cP<w?ei<w?fH<w?0:-1:0:-1:ce<w?fh<w?0:-1:0:-1:c0<w?ab<w?dK<w?bV<w?bi<w?c2<w?0:-1:0:-1:az<w?bq<w?0:-1:0:-1:dO<w?fL<w?cf<w?gi<w?0:-1:0:-1:db<w?gx<w?0:-1:0:-1:ia<w?hE<w?fQ<w?gg<w?Y<w?dl<w?gk<w?de<w?0:-1:0:-1:ey<w?av<w?0:-1:0:-1:ax<w?eF<w?eT<w?dq<w?0:-1:0:-1:h9<w?a0<w?0:-1:0:-1:ev<w?eZ<w?eH<w?hm<w?g8<w?g_<w?0:-1:0:-1:aX<w?ba<w?0:-1:0:-1:hv<w?hh<w?hg<w?c7<w?0:-1:0:-1:gC<w?gD<w?0:-1:0:-1:G(Ng,w+M|0)-1|0:-1;if(3<pD>>>0)var
b=d(a);else
switch(pD){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
pE=im(c(a));if(2<pE>>>0)var
b=d(a);else
switch(pE){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,64);var
pF=K(c(a)),b=0===pF?D(a):1===pF?E(a):d(a)}break;default:B(a,65);var
pG=K(c(a)),b=0===pG?D(a):1===pG?E(a):d(a)}break;default:B(a,73);var
pH=lH(c(a));if(2<pH>>>0)var
b=d(a);else
switch(pH){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pI=im(c(a));if(2<pI>>>0)var
b=d(a);else
switch(pI){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,66);var
pJ=j5(c(a));if(2<pJ>>>0)var
b=d(a);else
switch(pJ){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pL=mC(c(a));if(2<pL>>>0)var
b=d(a);else
switch(pL){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,67);var
pM=K(c(a)),b=0===pM?D(a):1===pM?E(a):d(a)}}}}}break;case
47:B(a,73);var
x=c(a),pN=35<x?ib<x?gI<x?hz<x?-1:dG<x?e_<x?aH<x?bK<x?eK<x?fF<x?cz<x?hX<x?0:-1:0:-1:eN<x?dI<x?0:-1:0:-1:cg<x?bp<x?dj<x?aR<x?0:-1:0:-1:aa<x?dS<x?0:-1:0:-1:co<x?ec<x?hC<x?gJ<x?cb<x?gr<x?fu<x?dD<x?ah<x?eh<x?d9<x?dx<x?cv<x?cD<x?fl<x?d$<x?0:-1:0:-1:an<x?gm<x?0:-1:0:-1:fd<x?cC<x?gs<x?fG<x?0:-1:0:-1:fR<x?b8<x?0:-1:0:-1:au<x?eq<x?gc<x?b9<x?ex<x?eO<x?0:-1:0:-1:f9<x?fM<x?0:-1:0:-1:eS<x?ar<x?eA<x?cr<x?0:-1:0:-1:e$<x?ai<x?0:-1:0:-1:fc<x?dX<x?d6<x?a_<x?fo<x?cH<x?fT<x?as<x?0:-1:0:-1:f8<x?e4<x?0:-1:0:-1:eB<x?ay<x?aE<x?bA<x?0:-1:0:-1:cN<x?a3<x?0:-1:0:-1:bN<x?cV<x?aS<x?f0<x?bD<x?f3<x?0:-1:0:-1:ad<x?bT<x?0:-1:0:-1:hi<x?ca<x?gA<x?a4<x?0:-1:0:-1:f4<x?h5<x?0:-1:0:-1:b3<x?aV<x?fm<x?eP<x?eD<x?ew<x?dZ<x?dL<x?c$<x?cw<x?0:-1:0:-1:b7<x?cx<x?0:-1:0:-1:aq<x?fV<x?eX<x?am<x?0:-1:0:-1:bP<x?ed<x?0:-1:0:-1:a6<x?gv<x?aB<x?fJ<x?bC<x?bJ<x?0:-1:0:-1:bo<x?cW<x?0:-1:0:-1:a$<x?ak<x?cy<x?bS<x?0:-1:0:-1:ft<x?fi<x?0:-1:0:-1:aw<x?dQ<x?ch<x?aT<x?aG<x?du<x?f_<x?ge<x?0:-1:0:-1:e8<x?b6<x?0:-1:0:-1:br<x?e7<x?fp<x?d2<x?0:-1:0:-1:cF<x?cJ<x?0:-1:0:-1:eC<x?dt<x?eu<x?bF<x?dw<x?c5<x?0:-1:0:-1:bg<x?cE<x?0:-1:0:-1:hp<x?hQ<x?ig<x?c6<x?0:-1:0:-1:gP<x?gG<x?0:-1:0:-1:hS<x?gX<x?h0<x?hl<x?gn<x?bL<x?dh<x?dY<x?hA<x?gU<x?hW<x?gY<x?0:-1:0:-1:aJ<x?hH<x?0:-1:0:-1:fk<x?eI<x?g$<x?g2<x?0:-1:0:-1:dr<x?$<x?0:-1:0:-1:hB<x?h7<x?e1<x?cA<x?fP<x?fU<x?0:-1:0:-1:gE<x?dB<x?0:-1:0:-1:eo<x?gL<x?hM<x?ag<x?0:-1:0:-1:hD<x?id<x?0:-1:0:-1:bh<x?ga<x?hP<x?gN<x?f7<x?gO<x?hk<x?g5<x?0:-1:0:-1:h_<x?cO<x?0:-1:0:-1:dn<x?hK<x?ha<x?hU<x?0:-1:0:-1:af<x?bO<x?0:-1:0:-1:gK<x?g6<x?b5<x?el<x?cU<x?fq<x?0:-1:0:-1:hI<x?f2<x?0:-1:0:-1:cI<x?T<x?aA<x?hL<x?0:-1:0:-1:bB<x?ds<x?0:-1:0:-1:cj<x?aO<x?fw<x?fy<x?cn<x?aY<x?dy<x?fx<x?g4<x?hy<x?0:-1:0:-1:bQ<x?bU<x?0:-1:0:-1:go<x?b2<x?be<x?gd<x?0:-1:0:-1:fz<x?a8<x?0:-1:0:-1:ho<x?e2<x?gw<x?c1<x?gl<x?a1<x?0:-1:0:-1:gq<x?ek<x?0:-1:0:-1:fW<x?fE<x?Z<x?hc<x?0:-1:0:-1:dT<x?fr<x?0:-1:0:-1:ci<x?c_<x?bk<x?_<x?cR<x?fa<x?S<x?W<x?0:-1:0:-1:eM<x?e3<x?0:-1:0:-1:gZ<x?ap<x?dd<x?ea<x?0:-1:0:-1:fB<x?h$<x?0:-1:0:-1:X<x?by<x?al<x?aL<x?a9<x?cT<x?0:-1:0:-1:bR<x?c4<x?0:-1:0:-1:dv<x?dM<x?cS<x?fA<x?0:-1:0:-1:dN<x?L<x?0:-1:0:-1:V<x?f1<x?ie<x?bb<x?ac<x?fC<x?fb<x?hY<x?bH<x?cs<x?cZ<x?bY<x?dU<x?aQ<x?0:-1:0:-1:bl<x?cl<x?0:-1:0:-1:dg<x?hj<x?gF<x?b0<x?0:-1:0:-1:gQ<x?dV<x?0:-1:0:-1:g3<x?he<x?gM<x?e6<x?f6<x?ff<x?0:-1:0:-1:hG<x?hx<x?0:-1:0:-1:dH<x?hJ<x?g7<x?gH<x?0:-1:0:-1:fK<x?eQ<x?0:-1:0:-1:fX<x?dc<x?aM<x?gt<x?et<x?cp<x?dC<x?d4<x?0:-1:0:-1:eL<x?cd<x?0:-1:0:-1:U<x?at<x?fn<x?dp<x?0:-1:0:-1:f$<x?fS<x?0:-1:0:-1:dE<x?bc<x?eb<x?fg<x?df<x?ck<x?0:-1:0:-1:d3<x?e0<x?0:-1:0:-1:aI<x?d1<x?cG<x?fZ<x?0:-1:0:-1:b_<x?dR<x?0:-1:0:-1:hs<x?gp<x?gV<x?gz<x?eY<x?ef<x?gT<x?ht<x?h2<x?hR<x?0:-1:0:-1:ae<x?eV<x?0:-1:0:-1:dP<x?bf<x?eG<x?ep<x?0:-1:0:-1:di<x?bz<x?0:-1:0:-1:hd<x?bM<x?fI<x?aU<x?gS<x?b1<x?0:-1:0:-1:cq<x?em<x?0:-1:0:-1:h1<x?cK<x?d5<x?d0<x?0:-1:0:-1:hZ<x?ic<x?0:-1:0:-1:hV<x?hu<x?ih<x?a2<x?h8<x?ez<x?hr<x?a5<x?0:-1:0:-1:f5<x?h6<x?0:-1:0:-1:bW<x?hN<x?h3<x?e9<x?0:-1:0:-1:bm<x?dF<x?0:-1:0:-1:eE<x?bE<x?bI<x?hO<x?gR<x?hn<x?0:-1:0:-1:hf<x?bG<x?0:-1:0:-1:bt<x?cc<x?en<x?fs<x?0:-1:0:-1:gh<x?fj<x?0:-1:0:-1:eg<x?c3<x?cu<x?cm<x?c8<x?dJ<x?g1<x?g9<x?dk<x?hF<x?hq<x?cX<x?0:-1:0:-1:hw<x?bj<x?0:-1:0:-1:dm<x?cM<x?eU<x?ao<x?0:-1:0:-1:gB<x?bx<x?0:-1:0:-1:cB<x?dA<x?fe<x?bd<x?d7<x?bv<x?0:-1:0:-1:fY<x?fO<x?0:-1:0:-1:da<x?c9<x?aZ<x?cL<x?0:-1:0:-1:d8<x?aF<x?0:-1:0:-1:d_<x?g0<x?bX<x?a7<x?bu<x?h4<x?e5<x?fD<x?0:-1:0:-1:er<x?aD<x?0:-1:0:-1:aC<x?eW<x?hT<x?gy<x?0:-1:0:-1:gW<x?ct<x?0:-1:0:-1:bs<x?cY<x?fv<x?ej<x?eR<x?gu<x?0:-1:0:-1:fN<x?ee<x?0:-1:0:-1:aj<x?aP<x?bZ<x?cQ<x?0:-1:0:-1:gf<x?bw<x?0:-1:0:-1:aW<x?eJ<x?dz<x?gj<x?bn<x?es<x?aK<x?gb<x?dW<x?hb<x?0:-1:0:-1:b4<x?aN<x?0:-1:0:-1:b$<x?cP<x?ei<x?fH<x?0:-1:0:-1:ce<x?fh<x?0:-1:0:-1:c0<x?ab<x?dK<x?bV<x?bi<x?c2<x?0:-1:0:-1:az<x?bq<x?0:-1:0:-1:dO<x?fL<x?cf<x?gi<x?0:-1:0:-1:db<x?gx<x?0:-1:0:-1:ia<x?hE<x?fQ<x?gg<x?Y<x?dl<x?gk<x?de<x?0:-1:0:-1:ey<x?av<x?0:-1:0:-1:ax<x?eF<x?eT<x?dq<x?0:-1:0:-1:h9<x?a0<x?0:-1:0:-1:ev<x?eZ<x?eH<x?hm<x?g8<x?g_<x?0:-1:0:-1:aX<x?ba<x?0:-1:0:-1:hv<x?hh<x?hg<x?c7<x?0:-1:0:-1:gC<x?gD<x?0:-1:0:-1:G(Nf,x+M|0)-1|0:-1;if(3<pN>>>0)var
b=d(a);else
switch(pN){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
pO=jt(c(a));if(2<pO>>>0)var
b=d(a);else
switch(pO){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,68);var
pP=K(c(a)),b=0===pP?D(a):1===pP?E(a):d(a)}break;default:B(a,73);var
pQ=jc(c(a));if(2<pQ>>>0)var
b=d(a);else
switch(pQ){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pR=kX(c(a));if(2<pR>>>0)var
b=d(a);else
switch(pR){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,69);var
pS=K(c(a)),b=0===pS?D(a):1===pS?E(a):d(a)}}}break;case
48:B(a,73);var
y=c(a),pT=35<y?ib<y?gI<y?hz<y?-1:dG<y?e_<y?aH<y?bK<y?eK<y?fF<y?cz<y?hX<y?0:-1:0:-1:eN<y?dI<y?0:-1:0:-1:cg<y?bp<y?dj<y?aR<y?0:-1:0:-1:aa<y?dS<y?0:-1:0:-1:co<y?ec<y?hC<y?gJ<y?cb<y?gr<y?fu<y?dD<y?ah<y?eh<y?d9<y?dx<y?cv<y?cD<y?fl<y?d$<y?0:-1:0:-1:an<y?gm<y?0:-1:0:-1:fd<y?cC<y?gs<y?fG<y?0:-1:0:-1:fR<y?b8<y?0:-1:0:-1:au<y?eq<y?gc<y?b9<y?ex<y?eO<y?0:-1:0:-1:f9<y?fM<y?0:-1:0:-1:eS<y?ar<y?eA<y?cr<y?0:-1:0:-1:e$<y?ai<y?0:-1:0:-1:fc<y?dX<y?d6<y?a_<y?fo<y?cH<y?fT<y?as<y?0:-1:0:-1:f8<y?e4<y?0:-1:0:-1:eB<y?ay<y?aE<y?bA<y?0:-1:0:-1:cN<y?a3<y?0:-1:0:-1:bN<y?cV<y?aS<y?f0<y?bD<y?f3<y?0:-1:0:-1:ad<y?bT<y?0:-1:0:-1:hi<y?ca<y?gA<y?a4<y?0:-1:0:-1:f4<y?h5<y?0:-1:0:-1:b3<y?aV<y?fm<y?eP<y?eD<y?ew<y?dZ<y?dL<y?c$<y?cw<y?0:-1:0:-1:b7<y?cx<y?0:-1:0:-1:aq<y?fV<y?eX<y?am<y?0:-1:0:-1:bP<y?ed<y?0:-1:0:-1:a6<y?gv<y?aB<y?fJ<y?bC<y?bJ<y?0:-1:0:-1:bo<y?cW<y?0:-1:0:-1:a$<y?ak<y?cy<y?bS<y?0:-1:0:-1:ft<y?fi<y?0:-1:0:-1:aw<y?dQ<y?ch<y?aT<y?aG<y?du<y?f_<y?ge<y?0:-1:0:-1:e8<y?b6<y?0:-1:0:-1:br<y?e7<y?fp<y?d2<y?0:-1:0:-1:cF<y?cJ<y?0:-1:0:-1:eC<y?dt<y?eu<y?bF<y?dw<y?c5<y?0:-1:0:-1:bg<y?cE<y?0:-1:0:-1:hp<y?hQ<y?ig<y?c6<y?0:-1:0:-1:gP<y?gG<y?0:-1:0:-1:hS<y?gX<y?h0<y?hl<y?gn<y?bL<y?dh<y?dY<y?hA<y?gU<y?hW<y?gY<y?0:-1:0:-1:aJ<y?hH<y?0:-1:0:-1:fk<y?eI<y?g$<y?g2<y?0:-1:0:-1:dr<y?$<y?0:-1:0:-1:hB<y?h7<y?e1<y?cA<y?fP<y?fU<y?0:-1:0:-1:gE<y?dB<y?0:-1:0:-1:eo<y?gL<y?hM<y?ag<y?0:-1:0:-1:hD<y?id<y?0:-1:0:-1:bh<y?ga<y?hP<y?gN<y?f7<y?gO<y?hk<y?g5<y?0:-1:0:-1:h_<y?cO<y?0:-1:0:-1:dn<y?hK<y?ha<y?hU<y?0:-1:0:-1:af<y?bO<y?0:-1:0:-1:gK<y?g6<y?b5<y?el<y?cU<y?fq<y?0:-1:0:-1:hI<y?f2<y?0:-1:0:-1:cI<y?T<y?aA<y?hL<y?0:-1:0:-1:bB<y?ds<y?0:-1:0:-1:cj<y?aO<y?fw<y?fy<y?cn<y?aY<y?dy<y?fx<y?g4<y?hy<y?0:-1:0:-1:bQ<y?bU<y?0:-1:0:-1:go<y?b2<y?be<y?gd<y?0:-1:0:-1:fz<y?a8<y?0:-1:0:-1:ho<y?e2<y?gw<y?c1<y?gl<y?a1<y?0:-1:0:-1:gq<y?ek<y?0:-1:0:-1:fW<y?fE<y?Z<y?hc<y?0:-1:0:-1:dT<y?fr<y?0:-1:0:-1:ci<y?c_<y?bk<y?_<y?cR<y?fa<y?S<y?W<y?0:-1:0:-1:eM<y?e3<y?0:-1:0:-1:gZ<y?ap<y?dd<y?ea<y?0:-1:0:-1:fB<y?h$<y?0:-1:0:-1:X<y?by<y?al<y?aL<y?a9<y?cT<y?0:-1:0:-1:bR<y?c4<y?0:-1:0:-1:dv<y?dM<y?cS<y?fA<y?0:-1:0:-1:dN<y?L<y?0:-1:0:-1:V<y?f1<y?ie<y?bb<y?ac<y?fC<y?fb<y?hY<y?bH<y?cs<y?cZ<y?bY<y?dU<y?aQ<y?0:-1:0:-1:bl<y?cl<y?0:-1:0:-1:dg<y?hj<y?gF<y?b0<y?0:-1:0:-1:gQ<y?dV<y?0:-1:0:-1:g3<y?he<y?gM<y?e6<y?f6<y?ff<y?0:-1:0:-1:hG<y?hx<y?0:-1:0:-1:dH<y?hJ<y?g7<y?gH<y?0:-1:0:-1:fK<y?eQ<y?0:-1:0:-1:fX<y?dc<y?aM<y?gt<y?et<y?cp<y?dC<y?d4<y?0:-1:0:-1:eL<y?cd<y?0:-1:0:-1:U<y?at<y?fn<y?dp<y?0:-1:0:-1:f$<y?fS<y?0:-1:0:-1:dE<y?bc<y?eb<y?fg<y?df<y?ck<y?0:-1:0:-1:d3<y?e0<y?0:-1:0:-1:aI<y?d1<y?cG<y?fZ<y?0:-1:0:-1:b_<y?dR<y?0:-1:0:-1:hs<y?gp<y?gV<y?gz<y?eY<y?ef<y?gT<y?ht<y?h2<y?hR<y?0:-1:0:-1:ae<y?eV<y?0:-1:0:-1:dP<y?bf<y?eG<y?ep<y?0:-1:0:-1:di<y?bz<y?0:-1:0:-1:hd<y?bM<y?fI<y?aU<y?gS<y?b1<y?0:-1:0:-1:cq<y?em<y?0:-1:0:-1:h1<y?cK<y?d5<y?d0<y?0:-1:0:-1:hZ<y?ic<y?0:-1:0:-1:hV<y?hu<y?ih<y?a2<y?h8<y?ez<y?hr<y?a5<y?0:-1:0:-1:f5<y?h6<y?0:-1:0:-1:bW<y?hN<y?h3<y?e9<y?0:-1:0:-1:bm<y?dF<y?0:-1:0:-1:eE<y?bE<y?bI<y?hO<y?gR<y?hn<y?0:-1:0:-1:hf<y?bG<y?0:-1:0:-1:bt<y?cc<y?en<y?fs<y?0:-1:0:-1:gh<y?fj<y?0:-1:0:-1:eg<y?c3<y?cu<y?cm<y?c8<y?dJ<y?g1<y?g9<y?dk<y?hF<y?hq<y?cX<y?0:-1:0:-1:hw<y?bj<y?0:-1:0:-1:dm<y?cM<y?eU<y?ao<y?0:-1:0:-1:gB<y?bx<y?0:-1:0:-1:cB<y?dA<y?fe<y?bd<y?d7<y?bv<y?0:-1:0:-1:fY<y?fO<y?0:-1:0:-1:da<y?c9<y?aZ<y?cL<y?0:-1:0:-1:d8<y?aF<y?0:-1:0:-1:d_<y?g0<y?bX<y?a7<y?bu<y?h4<y?e5<y?fD<y?0:-1:0:-1:er<y?aD<y?0:-1:0:-1:aC<y?eW<y?hT<y?gy<y?0:-1:0:-1:gW<y?ct<y?0:-1:0:-1:bs<y?cY<y?fv<y?ej<y?eR<y?gu<y?0:-1:0:-1:fN<y?ee<y?0:-1:0:-1:aj<y?aP<y?bZ<y?cQ<y?0:-1:0:-1:gf<y?bw<y?0:-1:0:-1:aW<y?eJ<y?dz<y?gj<y?bn<y?es<y?aK<y?gb<y?dW<y?hb<y?0:-1:0:-1:b4<y?aN<y?0:-1:0:-1:b$<y?cP<y?ei<y?fH<y?0:-1:0:-1:ce<y?fh<y?0:-1:0:-1:c0<y?ab<y?dK<y?bV<y?bi<y?c2<y?0:-1:0:-1:az<y?bq<y?0:-1:0:-1:dO<y?fL<y?cf<y?gi<y?0:-1:0:-1:db<y?gx<y?0:-1:0:-1:ia<y?hE<y?fQ<y?gg<y?Y<y?dl<y?gk<y?de<y?0:-1:0:-1:ey<y?av<y?0:-1:0:-1:ax<y?eF<y?eT<y?dq<y?0:-1:0:-1:h9<y?a0<y?0:-1:0:-1:ev<y?eZ<y?eH<y?hm<y?g8<y?g_<y?0:-1:0:-1:aX<y?ba<y?0:-1:0:-1:hv<y?hh<y?hg<y?c7<y?0:-1:0:-1:gC<y?gD<y?0:-1:0:-1:G(NE,y+M|0)-1|0:-1;if(3<pT>>>0)var
b=d(a);else
switch(pT){case
0:var
b=D(a);break;case
1:var
b=E(a);break;case
2:B(a,73);var
pU=jc(c(a));if(2<pU>>>0)var
b=d(a);else
switch(pU){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pV=ja(c(a));if(2<pV>>>0)var
b=d(a);else
switch(pV){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pW=im(c(a));if(2<pW>>>0)var
b=d(a);else
switch(pW){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,70);var
pX=K(c(a)),b=0===pX?D(a):1===pX?E(a):d(a)}}}break;default:B(a,73);var
pY=iA(c(a));if(2<pY>>>0)var
b=d(a);else
switch(pY){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
pZ=oF(c(a));if(2<pZ>>>0)var
b=d(a);else
switch(pZ){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,71);var
p0=K(c(a)),b=0===p0?D(a):1===p0?E(a):d(a)}}}break;case
49:B(a,73);var
p1=jc(c(a));if(2<p1>>>0)var
b=d(a);else
switch(p1){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
p2=im(c(a));if(2<p2>>>0)var
b=d(a);else
switch(p2){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
p3=ja(c(a));if(2<p3>>>0)var
b=d(a);else
switch(p3){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,73);var
p5=kX(c(a));if(2<p5>>>0)var
b=d(a);else
switch(p5){case
0:var
b=D(a);break;case
1:var
b=E(a);break;default:B(a,72);var
p6=K(c(a)),b=0===p6?D(a):1===p6?E(a):d(a)}}}}break;case
50:var
b=75;break;case
51:B(a,tg);var
jq=c(a),p7=60<jq?nW<jq?-1:G(N2,jq+r2|0)-1|0:-1,b=0===p7?pc:1===p7?88:d(a);break;case
52:var
b=76;break;default:var
b=iJ}if(si<b>>>0)var
H=O(OJ);else{var
iV=b;if(66<=iV)if(99<=iV)switch(iV){case
99:var
H=[0,F,68];break;case
100:var
H=[0,F,67];break;case
101:var
H=[0,F,97];break;case
102:var
H=[0,F,96];break;case
103:var
H=[0,F,78];break;case
104:var
H=[0,F,77];break;case
105:var
H=[0,F,75];break;case
106:var
H=[0,F,76];break;case
107:var
H=[0,F,73];break;case
108:var
H=[0,F,72];break;case
109:var
H=[0,F,71];break;case
110:var
H=[0,F,70];break;case
111:var
H=[0,F,93];break;case
112:var
H=[0,F,94];break;case
113:var
H=[0,F,98];break;case
114:var
H=[0,F,99];break;case
115:var
H=[0,F,it];break;case
116:var
H=[0,F,la];break;case
117:var
H=[0,F,lr];break;case
118:var
H=[0,F,84];break;case
119:var
H=[0,F,86];break;case
120:var
H=[0,F,85];break;case
121:var
H=[0,F,l0];break;case
122:var
H=[0,F,kE];break;case
123:var
H=[0,F,79];break;case
124:var
H=[0,F,11];break;case
125:var
H=[0,F,74];break;case
126:var
H=[0,F,jl];break;case
127:var
H=[0,F,13];break;case
128:var
H=[0,F,14];break;case
129:var
rK=F[4]?jw(F,N(F,a),7):F,H=[0,rK,iq];break;default:var
rL=jx(F,N(F,a)),H=[0,rL,[5,J(a)]]}else
switch(iV){case
66:var
H=[0,F,61];break;case
67:var
H=[0,F,46];break;case
68:var
H=[0,F,24];break;case
69:var
H=[0,F,47];break;case
70:var
H=[0,F,25];break;case
71:var
H=[0,F,26];break;case
72:var
H=[0,F,58];break;case
73:var
rI=N(F,a),qh=J(a),qi=rx(F,qh),H=[0,qi[1],[3,rI,qi[2],qh]];break;case
74:var
rJ=N(F,a),qj=J(a),H=[0,F,[3,rJ,qj,qj]];break;case
75:var
H=[0,F,0];break;case
76:var
H=[0,F,1];break;case
77:var
H=[0,F,4];break;case
78:var
H=[0,F,5];break;case
79:var
H=[0,F,6];break;case
80:var
H=[0,F,7];break;case
81:var
H=[0,F,12];break;case
82:var
H=[0,F,10];break;case
83:var
H=[0,F,8];break;case
84:var
H=[0,F,9];break;case
85:var
H=[0,F,81];break;case
86:var
H=[0,F,80];break;case
87:var
H=[0,F,83];break;case
88:var
H=[0,F,82];break;case
89:var
H=[0,F,89];break;case
90:var
H=[0,F,90];break;case
91:var
H=[0,F,91];break;case
92:var
H=[0,F,92];break;case
93:var
H=[0,F,87];break;case
94:var
H=[0,F,88];break;case
95:var
H=[0,F,lh];break;case
96:var
H=[0,F,kq];break;case
97:var
