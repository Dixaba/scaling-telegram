"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var oS = Math.imul;
var oT = Math.fround;
function myMath() {
    this.i0 = 0;
    this.d = [this];
    if (arguments.length === 1 && arguments[0] === undefined) {
        return;
    }
    oz(this);
}
myMath.prototype.f = function (a0) {
    return oy(this, a0);
};
myMath.prototype.filt = function (a0) {
    return ox(this, a0);
};
myMath.prototype.load = function (a0) {
    return ow(this, a0);
};
myMath.prototype.clear = function () {
    return ov(this);
};
myMath.prototype.filtStr = function (a0) {
    return ou(this, a0);
};
myMath.prototype.loadJSON = function (a0) {
    return ot(this, a0);
};
myMath.prototype.getJSON = function (a0) {
    return os(this, a0);
};
myMath.prototype.clearJSON = function () {
    return or(this);
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
function oz(f) {
}
function oy(m, k) {
    var h = 0, g = 0, f = 0, i = 0;
    if ((k | 0) < 1) return 0 | 0;
    if ((k | 0) < 3) return 1 | 0;
    g = 1;
    f = 1;
    h = 3;
    while (1) {
        f = g + f | 0;
        if ((h | 0) < (k | 0)) {
            i = f;
            f = g;
            g = i;
            h = h + 1 | 0;
            continue;
        }
        break;
    }
    return f | 0;
}
function ox(o, m) {
    var h = null, i = null, k = null, f = 0, g = 0;
    h = bR();
    i = -16 + h | 0;
    aS(i);
    if ((m.length | 0) <= 0) {
        aS(h);
        return 0 | 0;
    }
    g = 0;
    f = 0;
    while (1) {
        k = m[0 + f | 0];
        bx(i | 0, k);
        g = (((dT(i | 0) | 0 | 0) !== -1 ? 1 : 0) ? 1 : 0) + g | 0;
        bo(i | 0);
        f = f + 1 | 0;
        if ((f | 0) < (m.length | 0)) continue;
        break;
    }
    aS(h);
    return g | 0;
}
function bx(g, f) {
    var k = null, l = 0, i = 0, h = 0;
    dW(g | 0);
    dU(g | 0, f.length);
    l = c[8 + g >> 2];
    k = a;
    if ((f.length | 0) > 0) {
        h = 0;
        while (1) {
            i = f.charCodeAt(h);
            k[l + h | 0] = i;
            h = h + 1 | 0;
            if ((h | 0) < (f.length | 0)) continue;
            break;
        }
    }
}
function ow(o, m) {
    var h = null, g = null, k = null, i = 0, f = 0;
    h = bR();
    g = -16 + h | 0;
    aS(g);
    if (((c[268773] | 0) | 0) == (0 | 0)) {
        f = __asm.op(12) | 0;
        hi(f);
        c[268773] = f;
        if ((m.length | 0) > 0) {
            f = 0;
            while (1) {
                k = m[0 + f | 0];
                i = c[268773] | 0;
                bx(g | 0, k);
                hh(i, g | 0);
                bo(g | 0);
                f = f + 1 | 0;
                if ((f | 0) < (m.length | 0)) continue;
                break;
            }
        }
    }
    aS(h);
}
function ov(g) {
    var f = 0;
    hm(c[268773] | 0);
    f = c[268773] | 0;
    if ((f | 0) != (0 | 0)) {
        hl(f);
        __asm.cO(f | 0);
    }
    c[268773] = 0;
}
function ou(k, i) {
    var g = null, f = null, h = 0;
    g = bR();
    f = -16 + g | 0;
    aS(f);
    bx(f | 0, i);
    h = hj(f | 0) | 0;
    bo(f | 0);
    aS(g);
    return h | 0;
}
function ot(p, o) {
    var i = null, g = null, m = null, k = 0, f = 0, h = null;
    i = bR();
    g = -48 + i | 0;
    aS(g);
    if (((c[268247] | 0) | 0) == (0 | 0)) {
        f = __asm.op(12) | 0;
        hf(f);
        c[268247] = f;
        if ((o.length | 0) > 0) {
            f = 0;
            while (1) {
                h = o[0 + f | 0];
                m = h[dh()];
                bx(32 + g | 0, m);
                k = c[268247] | 0;
                c[16 + g >> 2] = 0;
                bC(20 + g | 0, 32 + g | 0);
                he(k, 16 + g | 0);
                hd(16 + g | 0);
                h = h[dh()];
                bx(g | 0, h);
                hc(g | 0);
                fW();
                bo(g | 0);
                bo(32 + g | 0);
                f = f + 1 | 0;
                if ((f | 0) < (o.length | 0)) continue;
                break;
            }
        }
    }
    aS(i);
}
function os(g, f) {
    return null;
}
function or(g) {
    var f = 0;
    hb(c[268247] | 0);
    f = c[268247] | 0;
    if ((f | 0) != (0 | 0)) {
        ha(f);
        __asm.cO(f | 0);
    }
    c[268247] = 0;
}
function dh() {
    var f = null;
    f = String();
    return String(f.concat(String.fromCharCode(98)));
}
function df() {
    throw new Error("Abort called");
}
function i8(i, j, h) {
    var g = 0, f = null;
    f = i7(i, j, h);
    g = h - 1 | 0;
    if ((i[j + g | 0] & 255) === 10) {
        f = f.substr(0, g);
        console.log(String(f));
        return;
    }
    console.log(String(f));
}
function i7(p, q, o) {
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
function pc(bytes) {
    var pages = (bytes + 65535) >> 16;
    try {
        __asm.pe.grow(pages);
        a = new Uint8Array(__asm.pe.buffer);
        b = new Uint16Array(__asm.pe.buffer);
        c = new Int32Array(__asm.pe.buffer);
        d = new Float32Array(__asm.pe.buffer);
        e = new Float64Array(__asm.pe.buffer);
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
function _asm_i8(i, h) {
    i8(a, i, h);
}
function hh(h, g) {
    __asm.hh(h, g);
}
function hi(f) {
    __asm.hi(f);
}
function hl(f) {
    __asm.hl(f);
}
function dW(f) {
    __asm.dW(f);
}
function dT(h) {
    return __asm.dT(h);
}
function hj(r) {
    return __asm.hj(r);
}
function bR() {
    return __asm.bR();
}
function hf(f) {
    __asm.hf(f);
}
function fW() {
    __asm.fW();
}
function aS(f) {
    __asm.aS(f);
}
function bo(f) {
    __asm.bo(f);
}
function hc(f) {
    __asm.hc(f);
}
function cO(f) {
    __asm.cO(f);
}
function hm(h) {
    __asm.hm(h);
}
function hd(f) {
    __asm.hd(f);
}
function dU(g, f) {
    __asm.dU(g, f);
}
function hb(h) {
    __asm.hb(h);
}
function ha(f) {
    __asm.ha(f);
}
function op(f) {
    oSlot = __asm.op(f);
    return a;
}
function he(h, g) {
    __asm.he(h, g);
}
function bC(h, g) {
    __asm.bC(h, g);
}
function pd() {
    throw new Error('this should be unreachable');
}
myMath.promise = fetchBuffer('yayyy.wasm').then(r => WebAssembly.instantiate(r, {
    i: {
        i8: _asm_i8,
        df: df,
        pc: pc,
    }
}), console.log).then(r => {
    var i = r.instance;
    a = new Uint8Array(i.exports.pe.buffer);
    b = new Uint16Array(i.exports.pe.buffer);
    c = new Int32Array(i.exports.pe.buffer);
    d = new Float32Array(i.exports.pe.buffer);
    e = new Float64Array(i.exports.pe.buffer);
    __asm = i.exports;
    __heap = i.exports.pe.buffer;
    i.exports.g_();
}, console.log, console.log);