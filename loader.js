"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var pp=Math.imul;var pq=Math.fround;function myMath(){this.i0=0;;this.d=[this];if (arguments.length===1&&arguments[0]===undefined){return;}o8(this);}myMath.prototype.f=function (a1){return o7(this,a1);};myMath.prototype.filt=function (a1){return o4(this,a1);};myMath.prototype.load=function (a1){return o6(this,a1);};myMath.prototype.clear=function (){return o2(this);};myMath.prototype.filtStr=function (a1){return o5(this,a1);};myMath.prototype.loadJSON=function (a1){return o3(this,a1);};myMath.prototype.clearJSON=function (){return o1(this);};var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function fetchBuffer(p) {var bytes = null;if (typeof window === 'undefined' && typeof self === 'undefined' && typeof require === 'undefined') {bytes = new Promise( (resolve, reject) => {resolve(read(p,'binary'));});} else if (typeof window === 'undefined' && typeof self === 'undefined') {var fs = require('fs');var path = require('path');p = path.join(__dirname, p);bytes = new Promise( (resolve, reject) => {fs.readFile(p, function(error, data) {if(error) reject(error);else resolve(data);});});} else {bytes = fetch(p).then(response => response.arrayBuffer());}return bytes;}function o8(f){}function o7(m,k){var h=0,f=0,g=0,i=0;if((k|0)<1){return 0|0;}if((k|0)<3){return 1|0;}else{g=1;f=1;h=3;}while(1){f=g+f|0;if((h|0)<(k|0)){i=f;f=g;g=i;h=h+1|0;continue;}break;}return f|0;}function o4(p,n){var f=0,h=0,g=null,k=null,m=null,i=0;g=bx();k=-16+g|0;aS(k);f=n.length;if((f|0)>0){h=0;f=0;while(1){m=n[0+f|0];br(k|0,m);i=ht(k|0)|0;h=(((i|0)!==-1?1:0)?1:0)+h|0;by(k|0);i=n.length;f=f+1|0;if((f|0)<(i|0)){continue;}break;}aS(g);return h|0;}aS(g);return 0|0;}function br(h,g){var f=0,k=null,l=0,i=0;dT(h|0);f=g.length;hC(h|0,f);l=c[8+h>>2];k=a;f=g.length;if((f|0)>0){f=0;while(1){i=g.charCodeAt(f);k[l+f|0]=i;i=g.length;f=f+1|0;if((f|0)<(i|0)){continue;}break;}}}function o6(n,m){var f=0,i=null,h=null,k=null,g=0;i=bx();h=-16+i|0;aS(h);if(((c[268677]|0)|0)==(0|0)){f=__asm.o0(12)|0;jZ(f);c[268677]=f;f=m.length;if((f|0)>0){f=0;while(1){k=m[0+f|0];g=c[268677]|0;br(h|0,k);j4(g,h|0);by(h|0);g=m.length;f=f+1|0;if((f|0)<(g|0)){continue;}break;}}}aS(i);}function o2(g){var f=0;mr(c[268677]|0);f=c[268677]|0;if((f|0)!=(0|0)){mq(f);__asm.C(f|0);}c[268677]=0;}function o5(k,i){var g=null,f=null,h=0;g=bx();f=-16+g|0;aS(f);br(f|0,i);h=mo(f|0)|0;by(f|0);aS(g);return h|0;}function o3(p,n){var f=0,m=null,h=null,g=null,k=null,i=0;m=bx();h=-32+m|0;aS(h);if(((c[268150]|0)|0)==(0|0)){f=__asm.o0(12)|0;j0(f);c[268150]=f;f=n.length;if((f|0)>0){f=0;while(1){g=n[0+f|0];k=cX();g=g[k];br(16+h|0,g);j1(16+h|0);gG();by(16+h|0);i=c[268150]|0;c[h>>2]=0;g=n[0+f|0];k=cX();g=g[k];br(4+h|0,g);j5(i,h|0);j2(h|0);i=n.length;f=f+1|0;if((f|0)<(i|0)){continue;}break;}}}aS(m);}function o1(g){var f=0;jY(c[268150]|0);f=c[268150]|0;if((f|0)!=(0|0)){jX(f);__asm.C(f|0);}c[268150]=0;}function cX(){var f=null,g=null;f=String();g=String.fromCharCode(98);f=f.concat(g);f=String(f);return f;}function hM(){throw new Error("Abort called");}function jS(i,j,h){var f=null,g=0;f=jM(i,j,h);g=h-1|0;if((i[j+g|0]&255)===10){f=f.substr(0,g);f=String(f);console.log(f);return;}f=String(f);console.log(f);}function jM(q,r,p){var f=0,h=null,g=0,n=null,o=0,k=0,m=0,i=null;h=String();o=r;n=q;g=p;L1:while(1){while(1){if((g|0)!==0){k=n[o]|0;if((k&255)!==0){m=k&255;if(k<<24>-16777216){f=m;}else{if((k&255)<192){f=m&63|f<<6;}else{if((k&255)<224){f=m&31;}else{if((k&255)<240){f=m&15;}else{f=m&7;}}}}g=g-1|0;if((g|0)===0){g=0;}else{if((n[o+1|0]&192)===128){o=o+1|0;n=n;continue;}}if(f>>>0<65536){i=String.fromCharCode(f);i=String(i);h=h.concat(i);o=o+1|0;n=n;continue L1;}f=f-65536|0;i=String.fromCharCode((f>>>10)+55296|0);i=String(i);h=h.concat(i);i=String.fromCharCode((f&1023)+56320|0);i=String(i);h=h.concat(i);o=o+1|0;n=n;continue L1;}}break;}break;}return h;}function pL(bytes){var pages=(bytes+65535)>>16;try{__asm.pN.grow(pages);a=new Uint8Array(__asm.pN.buffer);b=new Uint16Array(__asm.pN.buffer);c=new Int32Array(__asm.pN.buffer);d=new Float32Array(__asm.pN.buffer);e=new Float64Array(__asm.pN.buffer);return pages<<16;}catch(e){return -1;}}var a=null;var b=null;var c=null;var d=null;var e=null;var __asm=null;var __heap=null;function _asm_jS(i,h){jS(a,i,h);}function j4(h,g){__asm.j4(h,g);}function jZ(f){__asm.jZ(f);}function mq(f){__asm.mq(f);}function ht(h){return __asm.ht(h);}function bx(){return __asm.bx();}function o0(g){oSlot=__asm.o0(g);return a;}function j1(f){__asm.j1(f);}function aS(f){__asm.aS(f);}function j2(f){__asm.j2(f);}function dT(f){__asm.dT(f);}function hC(h,g){__asm.hC(h,g);}function jY(h){__asm.jY(h);}function C(f){__asm.C(f);}function gG(){__asm.gG();}function jX(f){__asm.jX(f);}function j0(f){__asm.j0(f);}function by(f){__asm.by(f);}function j5(h,g){__asm.j5(h,g);}function mo(q){return __asm.mo(q);}function mr(h){__asm.mr(h);}function pM(){throw new Error('this should be unreachable');};myMath.promise=fetchBuffer('yayyy.wasm').then(r=>WebAssembly.instantiate(r,{i:{jS:_asm_jS,hM:hM,pL:pL,}}),console.log).then(r=>{var i=r.instance;a=new Uint8Array(i.exports.pN.buffer);b=new Uint16Array(i.exports.pN.buffer);c=new Int32Array(i.exports.pN.buffer);d=new Float32Array(i.exports.pN.buffer);e=new Float64Array(i.exports.pN.buffer);__asm=i.exports;__heap=i.exports.pN.buffer;i.exports.hU();},console.log,console.log);