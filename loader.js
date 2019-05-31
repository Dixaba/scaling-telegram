"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var oH = Math.imul;
var oI = Math.fround;
function myMath() {
    this.i0 = 0;
    this.d = [this];
    if (arguments.length === 1 && arguments[0] === undefined) {
        return;
    }
    on(this);
}
myMath.prototype.f = function (a0) {
    return om(this, a0);
};
myMath.prototype.filt = function (a0) {
    return ol(this, a0);
};
myMath.prototype.load = function (a0) {
    return ok(this, a0);
};
myMath.prototype.clear = function () {
    return oj(this);
};
myMath.prototype.filtStr = function (a0) {
    return oi(this, a0);
};
myMath.prototype.loadJSON = function (a0) {
    return oh(this, a0);
};
myMath.prototype.getJSON = function (a0) {
    return og(this, a0);
};
myMath.prototype.clearJSON = function () {
    return of(this);
};
var oSlot = 0;
var nullArray = [null];
var nullObj = {d: nullArray, o: 0};
function fetchBuffer(p) {
    var bytes = null;
    if (typeof window === 'undefined' && typeof self === 'undefined' && typeof require === 'undefined') {
        bytes = new Promise((resolve, reject) => {
            resolve(read(p, 'binary'));
        });
    } else if (typeof window === 'undefined' && typeof self === 'undefined') {
        var fs = require('fs');
        var path = require('path');
        p = path.join(__dirname, p);
        bytes = new Promise((resolve, reject) => {
            fs.readFile(p, function (error, data) {
                if (error) reject(error); else resolve(data);
            });
        });
    } else {
        bytes = fetch(p).then(response => response.arrayBuffer());
    }
    return bytes;
}
function on(f) {
}
function om(i, h) {
    var g = 0, f = 0;
    if ((h | 0) < 1) return 1 | 0;
    f = 1;
    g = 1;
    while (1) {
        f = oH(f, g) | 0;
        if ((g | 0) < (h | 0)) {
            g = g + 1 | 0;
            continue;
        }
        break;
    }
    return f | 0;
}
function ol(o, m) {
    var h = null, i = null, k = null, f = 0, g = 0;
    h = bx();
    i = -16 + h | 0;
    aY(i);
    if ((m.length | 0) <= 0) {
        aY(h);
        return 0 | 0;
    }
    g = 0;
    f = 0;
    while (1) {
        k = m[0 + f | 0];
        bH(i | 0, k);
        g = (((dT(i | 0) | 0 | 0) !== -1 ? 1 : 0) ? 1 : 0) + g | 0;
        bN(i | 0);
        f = f + 1 | 0;
        if ((f | 0) < (m.length | 0)) continue;
        break;
    }
    aY(h);
    return g | 0;
}
function bH(h, g) {
    var k = null, l = 0, i = 0, f = 0;
    dW(h | 0);
    dU(h | 0, g.length);
    l = c[8 + h >> 2];
    k = a;
    if ((g.length | 0) > 0) {
        f = 0;
        while (1) {
            i = g.charCodeAt(f);
            k[l + f | 0] = i;
            f = f + 1 | 0;
            if ((f | 0) < (g.length | 0)) continue;
            break;
        }
    }
}
function ok(o, m) {
    var h = null, g = null, k = null, i = 0, f = 0;
    h = bx();
    g = -16 + h | 0;
    aY(g);
    if (((c[268773] | 0) | 0) == (0 | 0)) {
        f = __asm.oo(12) | 0;
        hc(f);
        c[268773] = f;
        if ((m.length | 0) > 0) {
            f = 0;
            while (1) {
                k = m[0 + f | 0];
                i = c[268773] | 0;
                bH(g | 0, k);
                hb(i, g | 0);
                bN(g | 0);
                f = f + 1 | 0;
                if ((f | 0) < (m.length | 0)) continue;
                break;
            }
        }
    }
    aY(h);
}
function oj(g) {
    var f = 0;
    ha(c[268773] | 0);
    f = c[268773] | 0;
    if ((f | 0) != (0 | 0)) {
        g$(f);
        __asm.c7(f | 0);
    }
    c[268773] = 0;
}
function oi(k, i) {
    var g = null, f = null, h = 0;
    g = bx();
    f = -16 + g | 0;
    aY(f);
    bH(f | 0, i);
    h = hf(f | 0) | 0;
    bN(f | 0);
    aY(g);
    return h | 0;
}
function oh(i, h) {
    var g = null, f = 0;
    g = JSON.stringify(h);
    console.log(g);
    f = __asm.oo(12) | 0;
    bH(f, g);
    g7(f);
    f0();
}
function og(g, f) {
    return 0 | 0;
}
function of(h) {
    var g = null, f = null;
    g = bx();
    f = -8 + g | 0;
    aY(f);
    he(f | 0);
    aY(g);
}
function cO() {
    throw new Error("Abort called");
}
function i2(i, j, h) {
    var g = 0, f = null;
    f = i1(i, j, h);
    g = h - 1 | 0;
    if ((i[j + g | 0] & 255) === 10) {
        f = f.substr(0, g);
        console.log(String(f));
        return;
    }
    console.log(String(f));
}
function i1(p, q, o) {
    var i = 0, k = 0, h = null, f = 0, g = 0, m = null, n = 0;
    h = String();
    n = q;
    m = p;
    g = o;
    while (1) {
        if ((g | 0) !== 0) {
            i = m[n] | 0;
            if ((i & 255) !== 0) {
                k = i & 255;
                if (i << 24 > -16777216) {
                    f = k;
                } else if ((i & 255) < 192) {
                    f = k & 63 | f << 6;
                } else if ((i & 255) < 224) {
                    f = k & 31;
                } else if ((i & 255) < 240) {
                    f = k & 15;
                } else {
                    f = k & 7;
                }
                g = g - 1 | 0;
                if ((g | 0) === 0) {
                    g = 0;
                } else if ((m[n + 1 | 0] & 192) === 128) {
                    n = n + 1 | 0;
                    m = m;
                    continue;
                }
                if (f >>> 0 < 65536) {
                    h = h.concat(String(String.fromCharCode(f)));
                    n = n + 1 | 0;
                    m = m;
                    continue;
                }
                f = f - 65536 | 0;
                h = h.concat(String(String.fromCharCode((f >>> 10) + 55296 | 0)));
                h = h.concat(String(String.fromCharCode((f & 1023) + 56320 | 0)));
                n = n + 1 | 0;
                m = m;
                continue;
            }
        }
        break;
    }
    return h;
}
function o3(bytes) {
    var pages = (bytes + 65535) >> 16;
    try {
        __asm.o5.grow(pages);
        a = new Uint8Array(__asm.o5.buffer);
        b = new Uint16Array(__asm.o5.buffer);
        c = new Int32Array(__asm.o5.buffer);
        d = new Float32Array(__asm.o5.buffer);
        e = new Float64Array(__asm.o5.buffer);
        return pages << 16;
    } catch (e) {
        return -1;
    }
}
var a = null;
var b = null;
var c = null;
var d = null;
var e = null;
var __asm = null;
var __heap = null;
function _asm_i2(i, h) {
    i2(a, i, h);
}
function c7(f) {
    __asm.c7(f);
}
function hc(f) {
    __asm.hc(f);
}
function g$(f) {
    __asm.g$(f);
}
function g7(f) {
    __asm.g7(f);
}
function aY(f) {
    __asm.aY(f);
}
function dT(h) {
    return __asm.dT(h);
}
function oo(f) {
    oSlot = __asm.oo(f);
    return a;
}
function bx() {
    return __asm.bx();
}
function hb(h, g) {
    __asm.hb(h, g);
}
function dU(g, f) {
    __asm.dU(g, f);
}
function dW(f) {
    __asm.dW(f);
}
function f0() {
    __asm.f0();
}
function hf(r) {
    return __asm.hf(r);
}
function ha(h) {
    __asm.ha(h);
}
function he(f) {
    __asm.he(f);
}
function bN(f) {
    __asm.bN(f);
}
function o4() {
    throw new Error('this should be unreachable');
}
myMath.promise = fetchBuffer('yayyy.wasm').then(r => WebAssembly.instantiate(r, {
    i: {
        i2: _asm_i2,
        cO: cO,
        o3: o3,
    }
}), console.log).then(r => {
    var i = r.instance;
    a = new Uint8Array(i.exports.o5.buffer);
    b = new Uint16Array(i.exports.o5.buffer);
    c = new Int32Array(i.exports.o5.buffer);
    d = new Float32Array(i.exports.o5.buffer);
    e = new Float64Array(i.exports.o5.buffer);
    __asm = i.exports;
    __heap = i.exports.o5.buffer;
    i.exports.g6();
}, console.log, console.log);