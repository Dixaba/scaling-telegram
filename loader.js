"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var b4=Math.imul;var b5=Math.fround;function myMath(){this.i0=0;;this.d=[this];if (arguments.length===1&&arguments[0]===undefined){return;}bZ(this);}myMath.prototype.f=function (a0){return bY(this,a0);};myMath.prototype.filt=function (a0){return bX(this,a0);};myMath.prototype.load=function (a0){return bW(this,a0);};myMath.prototype.clear=function (){return bV(this);};myMath.prototype.filtStr=function (a0){return bU(this,a0);};myMath.prototype.loadJSON=function (a0){return bT(this,a0);};myMath.prototype.getJSON=function (a0){return bS(this,a0);};myMath.prototype.clearJSON=function (){return bR(this);};var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function fetchBuffer(p) {var bytes = null;if (typeof window === 'undefined' && typeof self === 'undefined' && typeof require === 'undefined') {bytes = new Promise( (resolve, reject) => {resolve(read(p,'binary'));});} else if (typeof window === 'undefined' && typeof self === 'undefined') {var fs = require('fs');var path = require('path');p = path.join(__dirname, p);bytes = new Promise( (resolve, reject) => {fs.readFile(p, function(error, data) {if(error) reject(error);else resolve(data);});});} else {bytes = fetch(p).then(response => response.arrayBuffer());}return bytes;}function bZ(f){}function bY(n,k){var h=0,g=0,f=0,i=0;if((k|0)<1)return 0|0;if((k|0)<3)return 1|0;g=1;f=1;h=3;while(1){f=g+f|0;if((h|0)<(k|0)){i=f;f=g;g=i;h=h+1|0;continue;}break;}return f|0;}function bX(p,n){var h=null,i=null,k=null,f=0,g=0;h=T();i=-16+h|0;B(i);if((n.length|0)<=0){B(h);return 0|0;}g=0;f=0;while(1){k=n[0+f|0];ah(i|0,k);g=(((aV(i|0)|0|0)!==-1?1:0)?1:0)+g|0;Y(i|0);f=f+1|0;if((f|0)<(n.length|0))continue;break;}B(h);return g|0;}function ah(h,g){var k=null,l=0,i=0,f=0;aZ(h|0);aW(h|0,g.length);l=c[8+h>>2];k=a;if((g.length|0)>0){f=0;while(1){i=g.charCodeAt(f);k[l+f|0]=i;f=f+1|0;if((f|0)<(g.length|0))continue;break;}}}function bW(p,n){var h=null,g=null,k=null,i=0,f=0;h=T();g=-16+h|0;B(g);if(((c[262673]|0)|0)==(0|0)){f=__asm.bP(12)|0;bi(f);c[262673]=f;if((n.length|0)>0){f=0;while(1){k=n[0+f|0];i=c[262673]|0;ah(g|0,k);bh(i,g|0);Y(g|0);f=f+1|0;if((f|0)<(n.length|0))continue;break;}}}B(h);}function bV(g){var f=0;bg(c[262673]|0);f=c[262673]|0;if((f|0)!=(0|0)){bf(f);__asm.bO(f|0);}c[262673]=0;}function bU(k,i){var g=null,f=null,h=0;g=T();f=-16+g|0;B(f);ah(f|0,i);h=bG(f|0)|0;Y(f|0);B(g);return h|0;}function bT(q,p){var h=null,g=null,n=null,k=0,i=0,f=0;h=T();g=-8+h|0;B(g);if(((c[262569]|0)|0)==(0|0)){f=__asm.bP(12)|0;a_(f);c[262569]=f;if((p.length|0)>0){f=0;while(1){n=p[0+f|0];k=n[aP()].valueOf();i=c[262569]|0;c[g>>2]=k;c[4+g>>2]=0;a7(i,g|0);f=f+1|0;if((f|0)<(p.length|0))continue;break;}}}B(h);}function bS(n,k){var i=0,g=0,h=0,f=0;g=c[262569]|0;if((g|0)==(0|0))return 0|0;i=c[g>>2]|0;g=c[4+g>>2]|0;if((i|0)==(g|0))return 0|0;f=0;h=0;while(1){h=(((c[(f<<3)+i>>2]|0)>(k|0)?1:0)?1:0)+h|0;f=f+1|0;if(((f<<3)+i|0)!=(g|0))continue;break;}return h|0;}function bR(i){var h=null,g=null,f=0;h=T();g=-16+h|0;B(g);bp(8+g|0,c[262569]|0);at(g|0,c[262569]|0);f=c[8+g>>2]|0;if((f|0)!=((c[g>>2]|0)|0))while(1){f=c[4+f>>2]|0;if((f|0)!=(0|0)){Y(f);__asm.bO(f|0);}bk(8+g|0);at(g|0,c[262569]|0);f=c[8+g>>2]|0;if((f|0)!=((c[g>>2]|0)|0))continue;break;}a5(c[262569]|0);f=c[262569]|0;if((f|0)!=(0|0)){a4(f);__asm.bO(f|0);}c[262569]=0;B(h);}function bn(){var f=null;f=String();f=f.concat(String.fromCharCode(118));f=f.concat(String.fromCharCode(97));f=f.concat(String.fromCharCode(108));f=f.concat(String.fromCharCode(117));return f.concat(String.fromCharCode(101));}function aP(){return String(bn());}function aq(){throw new Error("Abort called");}function aJ(i,j,h){var g=0,f=null;f=aI(i,j,h);g=h-1|0;if((i[j+g|0]&255)===10){f=f.substr(0,g);console.log(String(f));return;}console.log(String(f));}function aI(q,r,p){var i=0,k=0,h=null,f=0,g=0,n=null,o=0;h=String();o=r;n=q;g=p;while(1){if((g|0)!==0){i=n[o]|0;if((i&255)!==0){k=i&255;if(i<<24>-16777216){f=k;}else if((i&255)<192){f=k&63|f<<6;}else if((i&255)<224){f=k&31;}else if((i&255)<240){f=k&15;}else{f=k&7;}g=g-1|0;if((g|0)===0){g=0;}else if((n[o+1|0]&192)===128){o=o+1|0;n=n;continue;}if(f>>>0<65536){h=h.concat(String(String.fromCharCode(f)));o=o+1|0;n=n;continue;}f=f-65536|0;h=h.concat(String(String.fromCharCode((f>>>10)+55296|0)));h=h.concat(String(String.fromCharCode((f&1023)+56320|0)));o=o+1|0;n=n;continue;}}break;}return h;}function co(bytes){var pages=(bytes+65535)>>16;try{__asm.cq.grow(pages);a=new Uint8Array(__asm.cq.buffer);b=new Uint16Array(__asm.cq.buffer);c=new Int32Array(__asm.cq.buffer);d=new Float32Array(__asm.cq.buffer);e=new Float64Array(__asm.cq.buffer);return pages<<16;}catch(e){return -1;}}var a=null;var b=null;var c=null;var d=null;var e=null;var __asm=null;var __heap=null;function _asm_aJ(i,h){aJ(a,i,h);}function bh(h,g){__asm.bh(h,g);}function bi(f){__asm.bi(f);}function bf(f){__asm.bf(f);}function bg(h){__asm.bg(h);}function aZ(f){__asm.aZ(f);}function bG(s){return __asm.bG(s);}function a7(h,g){__asm.a7(h,g);}function at(g,f){__asm.at(g,f);}function B(f){__asm.B(f);}function a4(f){__asm.a4(f);}function a_(f){__asm.a_(f);}function Y(f){__asm.Y(f);}function aW(g,f){__asm.aW(g,f);}function bp(g,f){__asm.bp(g,f);}function bO(f){__asm.bO(f);}function aV(h){return __asm.aV(h);}function bk(f){__asm.bk(f);}function T(){return __asm.T();}function a5(h){__asm.a5(h);}function bP(f){oSlot=__asm.bP(f);return a;}function cp(){throw new Error('this should be unreachable');};myMath.promise=fetchBuffer('yayyy.wasm').then(r=>WebAssembly.instantiate(r,{i:{aJ:_asm_aJ,aq:aq,co:co,}}),console.log).then(r=>{var i=r.instance;a=new Uint8Array(i.exports.cq.buffer);b=new Uint16Array(i.exports.cq.buffer);c=new Int32Array(i.exports.cq.buffer);d=new Float32Array(i.exports.cq.buffer);e=new Float64Array(i.exports.cq.buffer);__asm=i.exports;__heap=i.exports.cq.buffer;i.exports.a2();},console.log,console.log);