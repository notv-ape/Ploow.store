(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var q, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        ha = {},
        ia = {};

    function ka(a, b) {
        var c = ia[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function la(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in ha ? f = ha : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? aa(ha, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    la("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    var ma = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        na;
    if (fa && "function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = {
                    a: !0
                },
                qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a
            } catch (a) {}
            oa = !1
        }
        na = oa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ra = na;

    function sa(a, b) {
        a.prototype = ma(b.prototype);
        a.prototype.constructor = a;
        if (ra) ra(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Ef = b.prototype
    }
    la("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        sa(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    la("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ha.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    var u = this || self;

    function ta(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function ua(a) {
        var b = ta(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function va(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function wa(a) {
        return Object.prototype.hasOwnProperty.call(a, xa) && a[xa] || (a[xa] = ++ya)
    }
    var xa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ya = 0;

    function za(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Aa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ba(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ba = za : Ba = Aa;
        return Ba.apply(null, arguments)
    }

    function Ca(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Da() {
        return Date.now()
    }

    function Ea(a, b) {
        a = a.split(".");
        var c = u;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Fa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ef = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.wj = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Ga(a) {
        return a
    };
    var Ha = {
        Di: 0,
        Ci: 1,
        Bi: 2
    };
    var Ia = {};

    function Ja(a) {
        if (a !== Ia) throw Error("requires a valid immutable API token");
    };

    function La(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, La);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Fa(La, Error);
    La.prototype.name = "CustomError";
    var Ma;

    function Na(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        La.call(this, c + a[d])
    }
    Fa(Na, La);
    Na.prototype.name = "AssertionError";

    function Oa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Pa(a) {
        if (!Qa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ra, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Sa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ta, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ua, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Va, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Wa, "&#0;"));
        return a
    }
    var Ra = /&/g,
        Sa = /</g,
        Ta = />/g,
        Ua = /"/g,
        Va = /'/g,
        Wa = /\x00/g,
        Qa = /[\x00&<>"']/;

    function Xa(a, b) {
        return -1 != a.indexOf(b)
    }

    function Ya(a, b) {
        let c = 0;
        a = Oa(String(a)).split(".");
        b = Oa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = Za(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || Za(0 == e[2].length, 0 == f[2].length) || Za(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function Za(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function $a() {
        var a = u.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function y(a) {
        return Xa($a(), a)
    };

    function ab() {
        return y("Opera")
    }

    function bb() {
        return y("Trident") || y("MSIE")
    }

    function cb() {
        return y("Firefox") || y("FxiOS")
    }

    function db() {
        return y("Safari") && !(eb() || y("Coast") || ab() || y("Edge") || y("Edg/") || y("OPR") || cb() || y("Silk") || y("Android"))
    }

    function eb() {
        return (y("Chrome") || y("CriOS")) && !y("Edge") || y("Silk")
    }

    function fb() {
        return y("Android") && !(eb() || cb() || ab() || y("Silk"))
    }

    function gb(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function hb() {
        var a = $a();
        if (bb()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = gb(b);
        return ab() ? a(["Version", "Opera"]) :
            y("Edge") ? a(["Edge"]) : y("Edg/") ? a(["Edg"]) : y("Silk") ? a(["Silk"]) : eb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function ib(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function jb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function kb(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function lb(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function mb(a, b, c) {
        let d = c;
        jb(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function nb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function ob(a, b) {
        return 0 <= ib(a, b)
    }

    function pb(a, b) {
        b = ib(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function qb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function rb(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function sb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function tb(a, b) {
        if (!ua(a) || !ua(b) || a.length != b.length) return !1;
        const c = a.length,
            d = ub;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function ub(a, b) {
        return a === b
    }

    function vb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = vb.apply(null, sb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function wb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function xb(a) {
        xb[" "](a);
        return a
    }
    xb[" "] = function() {};

    function yb(a, b) {
        try {
            return xb(a[b]), !0
        } catch (c) {}
        return !1
    }

    function zb(a, b, c, d) {
        d = d ? d(b) : b;
        return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    };
    var Ab = ab(),
        Bb = bb(),
        Cb = y("Edge"),
        Db = Cb || Bb,
        Eb = y("Gecko") && !(Xa($a().toLowerCase(), "webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
        Fb = Xa($a().toLowerCase(), "webkit") && !y("Edge");

    function Gb() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var Hb;
    a: {
        var Ib = "",
            Jb = function() {
                var a = $a();
                if (Eb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Cb) return /Edge\/([\d\.]+)/.exec(a);
                if (Bb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Fb) return /WebKit\/(\S+)/.exec(a);
                if (Ab) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Jb && (Ib = Jb ? Jb[1] : "");
        if (Bb) {
            var Kb = Gb();
            if (null != Kb && Kb > parseFloat(Ib)) {
                Hb = String(Kb);
                break a
            }
        }
        Hb = Ib
    }
    var Lb = Hb,
        Nb = {};

    function Ob(a) {
        return zb(Nb, a, function() {
            return 0 <= Ya(Lb, a)
        })
    }
    var Pb;
    if (u.document && Bb) {
        var Qb = Gb();
        Pb = Qb ? Qb : parseInt(Lb, 10) || void 0
    } else Pb = void 0;
    var Rb = Pb;
    fb();
    eb();
    db();
    var Sb = {},
        Tb = null;

    function Ub(a, b) {
        void 0 === b && (b = 0);
        Vb();
        b = Sb[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                l = a[e + 2],
                k = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | l >> 6];
            l = b[l & 63];
            c[f++] = k + g + h + l
        }
        k = 0;
        l = d;
        switch (a.length - e) {
            case 2:
                k = a[e + 1], l = b[(k & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | k >> 4] + l + d
        }
        return c.join("")
    }

    function Wb(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return Ub(b, 3)
    }

    function Xb(a) {
        var b = [];
        Yb(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Zb(a) {
        var b = a.length,
            c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : Xa("=.", a[b - 1]) && (c = Xa("=.", a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c),
            e = 0;
        Yb(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }

    function Yb(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var k = a.charAt(d++),
                    m = Tb[k];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(k)) throw Error("Unknown base64 encoding at char: " + k);
            }
            return l
        }
        Vb();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function Vb() {
        if (!Tb) {
            Tb = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Sb[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Tb[f] && (Tb[f] = e)
                }
            }
        }
    };
    var $b = "undefined" !== typeof Uint8Array;

    function ac(a) {
        return $b && null != a && a instanceof Uint8Array
    }
    let bc;
    var cc = {};
    let dc;

    function ec(a) {
        if (a !== cc) throw Error("illegal external caller");
    }

    function fc() {
        return dc || (dc = new gc(null, cc))
    }
    var gc = class {
        constructor(a, b) {
            ec(b);
            this.P = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.P
        }
    };
    const hc = Symbol(void 0);

    function ic(a, b) {
        Object.isFrozen(a) || (hc ? a[hc] |= b : void 0 !== a.Ha ? a.Ha |= b : Object.defineProperties(a, {
            Ha: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function jc(a) {
        let b;
        hc ? b = a[hc] : b = a.Ha;
        return null == b ? 0 : b
    }

    function kc(a) {
        ic(a, 1);
        return a
    }

    function lc(a) {
        return Array.isArray(a) ? !!(jc(a) & 2) : !1
    }

    function mc(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        ic(a, 2)
    }

    function nc(a, b) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as mutable");
        b ? ic(a, 8) : Object.isFrozen(a) || (hc ? a[hc] &= -9 : void 0 !== a.Ha && (a.Ha &= -9))
    };

    function oc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let pc;
    var qc = Object.freeze(kc([]));

    function rc(a) {
        if (lc(a.N)) throw Error("Cannot mutate an immutable Message");
    }

    function sc(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function tc(a, b, c = !1) {
        if (Array.isArray(a)) return new b(a);
        if (c) return new b
    };

    function uc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (ac(a)) return Ub(a);
                    if (a instanceof gc) {
                        var b = a.P;
                        b = null == b || "string" === typeof b ? b : $b && b instanceof Uint8Array ? Ub(b) : null;
                        return null == b ? "" : a.P = b
                    }
                }
        }
        return a
    };

    function vc(a, b = wc) {
        return xc(a, b)
    }

    function yc(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = xc(a, b);
            else if (oc(a)) {
                const c = {};
                for (let d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = yc(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    }

    function xc(a, b) {
        const c = a.slice();
        for (let d = 0; d < c.length; d++) c[d] = yc(c[d], b);
        Array.isArray(a) && jc(a) & 1 && kc(c);
        return c
    }

    function zc(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = uc(a);
        return Array.isArray(a) ? vc(a, zc) : a
    }

    function wc(a) {
        return ac(a) ? new Uint8Array(a) : a
    };

    function Ac(a) {
        return a.A || (a.A = a.N[a.B + a.Ea] = {})
    }

    function z(a, b, c = !1) {
        return -1 === b ? null : b >= a.B ? a.A ? a.A[b] : void 0 : c && a.A && (c = a.A[b], null != c) ? c : a.N[b + a.Ea]
    }

    function A(a, b, c, d = !1, e = !1) {
        e || rc(a);
        b < a.B && !d ? a.N[b + a.Ea] = c : Ac(a)[b] = c;
        return a
    }

    function Bc(a, b) {
        return null != z(a, b)
    }

    function Cc(a, b) {
        return Array.isArray(z(a, b))
    }

    function Dc(a) {
        return Array.isArray(z(a, 13 === Ec(a, Fc) ? 13 : -1))
    }

    function Gc(a, b, c = !0, d) {
        let e = z(a, b, d);
        Array.isArray(e) || (e = qc);
        if (lc(a.N)) c && (mc(e), Object.freeze(e));
        else if (e === qc || lc(e)) e = kc(e.slice()), A(a, b, e, d);
        return e
    }

    function Hc(a, b) {
        a = z(a, b);
        return null == a ? a : +a
    }

    function B(a, b) {
        a = z(a, b);
        return null == a ? a : !!a
    }

    function C(a, b, c) {
        a = z(a, b);
        return null == a ? c : a
    }

    function Ic(a, b, c = !1) {
        a = B(a, b);
        return null == a ? c : a
    }

    function Jc(a, b, c) {
        null == c ? c = qc : kc(c);
        return A(a, b, c)
    }

    function Kc(a, b, c, d) {
        rc(a);
        c !== d ? A(a, b, c) : A(a, b, void 0, !1);
        return a
    }

    function Lc(a, b, c, d) {
        rc(a);
        (c = Ec(a, c)) && c !== b && null != d && (a.j && c in a.j && (a.j[c] = void 0), A(a, c));
        return A(a, b, d)
    }

    function Ec(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != z(a, e) && (0 !== c && A(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function D(a, b, c, d, e = !1) {
        if (-1 === c) d = null;
        else {
            a.j || (a.j = {});
            var f = a.j[c];
            if (f) d = f;
            else {
                var g = z(a, c, e);
                b = tc(g, b, d);
                void 0 == b ? d = f : (d && b.N !== g && A(a, c, b.N, e, !0), a.j[c] = b, lc(a.N) && mc(b.N), d = b)
            }
        }
        if (null == d) return d;
        lc(d.N) && !lc(a.N) && (d = d.Tc(Ia), A(a, c, d.N, e), a.j[c] = d);
        return d
    }

    function Mc(a, b, c, d, e = !0) {
        a.j || (a.j = {});
        var f = lc(a.N);
        let g = a.j[c];
        d = Gc(a, c, !0, d);
        const h = f || lc(d);
        if (!g) {
            g = [];
            f = f || h;
            for (let k = 0; k < d.length; k++) {
                var l = d[k];
                f = f || lc(l);
                l = tc(l, b);
                void 0 !== l && (g.push(l), h && mc(l.N))
            }
            a.j[c] = g;
            nc(d, !f)
        }
        b = h || e;
        e = lc(g);
        b && !e && (Object.isFrozen(g) && (a.j[c] = g = g.slice()), mc(g), Object.freeze(g));
        !b && e && (a.j[c] = g = g.slice());
        return g
    }

    function F(a, b, c, d = !1) {
        const e = lc(a.N);
        b = Mc(a, b, c, d, e);
        a = Gc(a, c, d);
        if (!(c = e) && (c = a)) {
            if (!Array.isArray(a)) throw Error("cannot check mutability state of non-array");
            c = !(jc(a) & 8)
        }
        if (c) {
            for (c = 0; c < b.length; c++)(d = b[c]) && lc(d.N) && !e && (b[c] = b[c].Tc(Ia), a[c] = b[c].N);
            nc(a, !0)
        }
        return b
    }

    function Nc(a, b, c) {
        rc(a);
        a.j || (a.j = {});
        const d = null != c ? c.N : c;
        a.j[b] = c;
        return A(a, b, d)
    }

    function Oc(a, b, c, d) {
        rc(a);
        a.j || (a.j = {});
        const e = null != d ? d.N : d;
        a.j[b] = d;
        return Lc(a, b, c, e)
    }

    function Pc(a, b, c) {
        rc(a);
        let d;
        if (null != c) {
            d = kc([]);
            let e = !1;
            for (let f = 0; f < c.length; f++) d[f] = c[f].N, e = e || lc(d[f]);
            a.j || (a.j = {});
            a.j[b] = c;
            nc(d, !e)
        } else a.j && (a.j[b] = void 0), d = qc;
        return A(a, b, d)
    }

    function J(a, b) {
        return C(a, b, "")
    }

    function Qc(a, b, c, d) {
        c = Ec(a, d) === c ? c : -1;
        return D(a, b, c)
    }

    function Rc(a, b, c) {
        return Kc(a, b, c, !1)
    }

    function Sc(a, b) {
        return Kc(a, b, 1, 0)
    };

    function Tc(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error("Expected to deserialize an Array but got " + ta(b) + ": " + b);
        Uc = b;
        a = new a(b);
        Uc = null;
        return a
    }

    function Vc(a) {
        pc = !0;
        try {
            return JSON.stringify(a.toJSON(), Wc)
        } finally {
            pc = !1
        }
    }
    var Xc = class {
        constructor(a, b, c) {
            a || (a = Uc);
            Uc = null;
            var d = this.constructor.messageId;
            a || (a = d ? [d] : []);
            this.Ea = (d ? 0 : -1) - (this.constructor.j || 0);
            this.j = void 0;
            this.N = a;
            a: {
                d = this.N.length;a = d - 1;
                if (d && (d = this.N[a], oc(d))) {
                    this.B = a - this.Ea;
                    this.A = d;
                    break a
                }
                void 0 !== b && -1 < b ? (this.B = Math.max(b, a + 1 - this.Ea), this.A = void 0) : this.B = Number.MAX_VALUE
            }
            if (c)
                for (b = 0; b < c.length; b++)
                    if (a = c[b], a < this.B) a += this.Ea, (d = this.N[a]) ? Array.isArray(d) && kc(d) : this.N[a] = qc;
                    else {
                        d = Ac(this);
                        let e = d[a];
                        e ? Array.isArray(e) && kc(e) : d[a] =
                            qc
                    }
        }
        toJSON() {
            const a = this.N;
            return pc ? a : vc(a, zc)
        }
    };

    function Wc(a, b) {
        return uc(b)
    }

    function Yc(a, b) {
        b.tb && (a.tb = b.tb.slice());
        const c = b.j;
        if (c) {
            b = b.A;
            for (let f in c) {
                if (!Object.prototype.hasOwnProperty.call(c, f)) continue;
                const g = c[f];
                if (g) {
                    var d = !(!b || !b[f]),
                        e = +f;
                    if (Array.isArray(g)) {
                        if (g.length)
                            for (d = F(a, g[0].constructor, e, d), e = 0; e < Math.min(d.length, g.length); e++) Yc(d[e], g[e])
                    } else(d = D(a, g.constructor, e, void 0, d)) && Yc(d, g)
                }
            }
        }
    }
    let Uc;
    var Zc = class extends Xc {
        Tc() {
            return this
        }
    };
    Object.defineProperties(Zc, {
        [Symbol.hasInstance]: sc(() => {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        })
    });

    function $c(a, b, c, d, e, f) {
        (a = a.j && a.j[c]) ? Array.isArray(a) ? (e = f.jb ? kc(a.slice()) : a, Pc(b, c, e)) : Nc(b, c, a): ($b && d instanceof Uint8Array ? e = d.length ? new gc(new Uint8Array(d), cc) : fc() : (Array.isArray(d) && (e ? mc(d) : Array.isArray(d) && jc(d) & 1 && f.jb && (d = d.slice())), e = d), A(b, c, e))
    };
    class K extends Zc {
        Tc(a) {
            Ja(a);
            if (lc(this.N)) {
                ({
                    jb: a
                } = {
                    jb: !0
                });
                a = {
                    jb: a
                };
                const c = lc(this.N);
                if (c && !a.jb) throw Error("copyRepeatedFields must be true for frozen messages");
                const d = new this.constructor;
                this.tb && (d.tb = this.tb.slice());
                const e = this.N;
                for (let f = 0; f < e.length; f++) {
                    const g = e[f];
                    if (f === e.length - 1 && oc(g))
                        for (b in g) {
                            if (!Object.prototype.hasOwnProperty.call(g, b)) continue;
                            const h = +b;
                            Number.isNaN(h) ? Ac(d)[b] = g[b] : $c(this, d, h, g[b], c, a)
                        } else $c(this, d, f - this.Ea, g, c, a)
                }
                var b = d
            } else b = this;
            return b
        }
    }
    Object.defineProperties(K, {
        [Symbol.hasInstance]: sc(Object[Symbol.hasInstance])
    });

    function ad(a, b) {
        this.j = a === bd && b || "";
        this.l = cd
    }
    ad.prototype.qa = !0;
    ad.prototype.ea = function() {
        return this.j
    };

    function dd(a) {
        return a instanceof ad && a.constructor === ad && a.l === cd ? a.j : "type_error:Const"
    }

    function ed(a) {
        return new ad(bd, a)
    }
    var cd = {},
        bd = {};
    var fd = ed("https://tpc.googlesyndication.com/sodar/%{basename}.js");

    function gd(a, b) {
        for (const c in a) b.call(void 0, a[c], c, a)
    }

    function hd(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function id(a) {
        var b = jd;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function kd(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function ld(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const md = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function nd(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < md.length; f++) c = md[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var od = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var pd;

    function qd() {
        if (void 0 === pd) {
            var a = null,
                b = u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ga,
                        createScript: Ga,
                        createScriptURL: Ga
                    })
                } catch (c) {
                    u.console && u.console.error(c.message)
                }
                pd = a
            } else pd = a
        }
        return pd
    };
    const rd = {};

    function sd(a) {
        return a instanceof td && a.constructor === td ? a.j : "type_error:SafeScript"
    }
    class td {
        constructor(a, b) {
            this.j = b === rd ? a : "";
            this.qa = !0
        }
        toString() {
            return this.j.toString()
        }
        ea() {
            return this.j.toString()
        }
    };
    var vd = class {
        constructor(a, b) {
            this.j = b === ud ? a : ""
        }
        toString() {
            return this.j + ""
        }
    };
    vd.prototype.qa = !0;
    vd.prototype.ea = function() {
        return this.j.toString()
    };

    function wd(a, b) {
        a = xd.exec(yd(a).toString());
        var c = a[3] || "";
        return zd(a[1] + Ad("?", a[2] || "", b) + Ad("#", c))
    }

    function yd(a) {
        return a instanceof vd && a.constructor === vd ? a.j : "type_error:TrustedResourceUrl"
    }

    function Bd(a, b) {
        var c = dd(a);
        if (!Cd.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Dd, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof ad ? dd(d) : encodeURIComponent(String(d))
        });
        return zd(a)
    }
    var Dd = /%{(\w+)}/g,
        Cd = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        xd = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        ud = {};

    function zd(a) {
        const b = qd();
        a = b ? b.createScriptURL(a) : a;
        return new vd(a, ud)
    }

    function Ad(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var Fd = class {
        constructor(a, b) {
            this.j = b === Ed ? a : ""
        }
        toString() {
            return this.j.toString()
        }
    };
    Fd.prototype.qa = !0;
    Fd.prototype.ea = function() {
        return this.j.toString()
    };

    function Gd(a) {
        return a instanceof Fd && a.constructor === Fd ? a.j : "type_error:SafeUrl"
    }
    var Hd = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;

    function Id(a) {
        a = String(a);
        a = a.replace(/(%0A|%0D)/g, "");
        return a.match(Hd) ? new Fd(a, Ed) : null
    }
    var Jd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Kd(a) {
        if (a instanceof Fd) return a;
        a = "object" == typeof a && a.qa ? a.ea() : String(a);
        return Jd.test(a) ? new Fd(a, Ed) : Id(a)
    }

    function Ld(a, b) {
        if (a instanceof Fd) return a;
        a = "object" == typeof a && a.qa ? a.ea() : String(a);
        if (b && /^data:/i.test(a) && (b = Id(a) || Md, b.ea() == a)) return b;
        Jd.test(a) || (a = "about:invalid#zClosurez");
        return new Fd(a, Ed)
    }
    var Ed = {},
        Md = new Fd("about:invalid#zClosurez", Ed);
    const Nd = {};

    function Od(a) {
        return a instanceof Pd && a.constructor === Pd ? a.j : "type_error:SafeStyle"
    }

    function Qd(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(Rd).join(" ") : Rd(d), b += `${c}:${d};`)
            }
        return b ? new Pd(b, Nd) : Sd
    }
    class Pd {
        constructor(a, b) {
            this.j = b === Nd ? a : "";
            this.qa = !0
        }
        ea() {
            return this.j
        }
        toString() {
            return this.j.toString()
        }
    }
    var Sd = new Pd("", Nd);

    function Rd(a) {
        if (a instanceof Fd) return 'url("' + Gd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof ad) a = dd(a);
        else {
            a = String(a);
            var b = a.replace(Td, "$1").replace(Td, "$1").replace(Ud, "url");
            if (Vd.test(b)) {
                if (b = !Wd.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Xd(a)
                }
                a = b ? Yd(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Na("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Xd(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const Vd = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Ud = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Td = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Wd = /\/\*/;

    function Yd(a) {
        return a.replace(Ud, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, l) => {
                f = h;
                return l
            });
            b = (Kd(d) || Md).ea();
            return c + f + b + f + e
        })
    };
    const Zd = {};

    function $d(a) {
        return a instanceof ae && a.constructor === ae ? a.j : "type_error:SafeStyleSheet"
    }
    class ae {
        constructor(a, b) {
            this.j = b === Zd ? a : "";
            this.qa = !0
        }
        toString() {
            return this.j.toString()
        }
        ea() {
            return this.j
        }
    };
    const be = {};

    function ce(a) {
        return a instanceof de && a.constructor === de ? a.j : "type_error:SafeHtml"
    }

    function ee(a) {
        return a instanceof de ? a : fe(Pa("object" == typeof a && a.qa ? a.ea() : String(a)))
    }

    function fe(a) {
        const b = qd();
        a = b ? b.createHTML(a) : a;
        return new de(a, be)
    }

    function ge(a, b, c) {
        var d = String(a);
        if (!he.test(d)) throw Error("");
        if (d.toUpperCase() in ie) throw Error("");
        return je(String(a), b, c)
    }

    function je(a, b, c) {
        var d = "";
        if (b)
            for (let g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!he.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof ad) e = dd(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!va(e)) throw Error("");
                            e instanceof Pd || (e = Qd(e));
                            e = Od(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in ke)
                                if (e instanceof vd) e = yd(e).toString();
                                else if (e instanceof Fd) e = Gd(e);
                            else if ("string" === typeof e) e = (Kd(e) || Md).ea();
                            else throw Error("");
                        }
                        e.qa && (e = e.ea());
                        f = `${f}="` +
                            Pa(String(e)) + '"';
                        d += " " + f
                    }
                }
        b = `<${a}` + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === od[a.toLowerCase()] ? b += ">" : (c = le(c), b += ">" + ce(c).toString() + "</" + a + ">");
        return fe(b)
    }

    function me(a) {
        const b = ee(ne),
            c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = ee(e), c.push(ce(e).toString()))
            };
        a.forEach(d);
        return fe(c.join(ce(b).toString()))
    }

    function le(a) {
        return me(Array.prototype.slice.call(arguments))
    }
    class de {
        constructor(a, b) {
            this.j = b === be ? a : "";
            this.qa = !0
        }
        ea() {
            return this.j.toString()
        }
        toString() {
            return this.j.toString()
        }
    }
    const he = /^[a-zA-Z0-9-]+$/,
        ke = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        ie = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var oe = fe("<!DOCTYPE html>"),
        ne = new de(u.trustedTypes && u.trustedTypes.emptyHTML || "", be),
        pe = fe("<br>");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function qe(a) {
        var b = re(se) || Md;
        a.href = Gd(b)
    };

    function te(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const ue = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function ve(a, b, c) {
        if (b instanceof vd) a.href = yd(b).toString();
        else {
            if (-1 === ue.indexOf(c)) throw Error(`TrustedResourceUrl href attribute required with rel="${c}"`);
            a.href = Gd(b)
        }
        a.rel = c
    };

    function we(a) {
        var b;
        let c;
        const d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function xe(a, b) {
        a.src = yd(b);
        we(a)
    };

    function ye() {
        return !1
    }

    function ze() {
        return !0
    }

    function Ae(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function Be(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ce(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function De(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Fe(a, b) {
        let c = 0;
        return function(d) {
            u.clearTimeout(c);
            const e = arguments;
            c = u.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Ge(a, b) {
        function c() {
            e = u.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var He = {
            passive: !0
        },
        Ie = Ce(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                u.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Je(a) {
        return a ? a.passive && Ie() ? a : a.capture || !1 : !1
    }

    function L(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Je(d)), !0) : !1
    }

    function Ke(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Je(d)), !0) : !1
    };

    function Le(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                let g;
                null == (g = f.parentElement) || g.removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            xe(f, a);
            "complete" !== b.document.readyState ? L(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function Me(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.cb}`;
        let c = void 0;
        try {
            c = await Ne(b)
        } catch (g) {}
        if (c) {
            b = a.ub || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.A ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.B,
                xe: c.bg_hash_basename,
                we: c.bg_binary,
                Ze: a.j + "_" + a.l,
                ub: b,
                cb: a.cb,
                Zb: d,
                mc: e,
                Xb: f
            }
        }
    }
    let Ne = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Oe(a) {
        var b = await Me(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.xe,
                _bgp_: b.we,
                _li_: b.Ze,
                _jk_: b.ub,
                _st_: b.cb,
                _rc_: b.Zb,
                _dl_: b.mc,
                _g2_: b.Xb
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Bd(fd, {
                basename: "sodar2"
            });
            Le(a)
        }
    };

    function Pe(a, b) {
        return Nc(a, 5, b)
    }

    function Qe(a, b) {
        return Kc(a, 3, b, "")
    }
    var Re = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function Se(a, b) {
        return Kc(a, 1, b, "")
    }
    var Te = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function Ue(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var Ve = class {
            constructor(a) {
                this.j = a.l;
                this.l = a.A;
                this.B = a.B;
                this.ub = a.ub;
                this.win = a.T();
                this.cb = a.cb;
                this.Zb = a.Zb;
                this.mc = a.mc;
                this.Xb = a.Xb;
                this.A = a.j
            }
        },
        We = class {
            constructor(a, b, c) {
                this.l = a;
                this.A = b;
                this.B = c;
                this.win = window;
                this.cb = "env";
                this.Zb = "n";
                this.mc = "0";
                this.Xb = "1";
                this.j = !0
            }
            T() {
                return this.win
            }
            build() {
                return new Ve(this)
            }
        };
    var Ye = class extends K {
            constructor(a) {
                super(a, -1, Xe)
            }
        },
        Xe = [2, 3];

    function Ze(a, b) {
        return A(a, 1, b)
    }

    function $e(a, b) {
        return A(a, 2, b)
    }

    function af(a, b) {
        return A(a, 3, b)
    }

    function bf(a, b) {
        return A(a, 4, b)
    }
    var cf = class extends K {
        constructor() {
            super(void 0)
        }
        getVersion() {
            return z(this, 5)
        }
    };
    var df = window;
    var ef = {
        Of: "google_adtest",
        Sf: "google_ad_client",
        Tf: "google_ad_format",
        Vf: "google_ad_height",
        ig: "google_ad_width",
        Zf: "google_ad_layout",
        ag: "google_ad_layout_key",
        bg: "google_ad_output",
        cg: "google_ad_region",
        fg: "google_ad_slot",
        gg: "google_ad_type",
        hg: "google_ad_url",
        jg: "google_allow_expandable_ads",
        yg: "google_analytics_domain_name",
        zg: "google_analytics_uacct",
        Ng: "google_container_id",
        Xg: "google_gl",
        wh: "google_enable_ose",
        Gh: "google_full_width_responsive",
        Gi: "google_rl_filtering",
        Fi: "google_rl_mode",
        Hi: "google_rt",
        Ei: "google_rl_dest_url",
        ki: "google_max_radlink_len",
        ri: "google_num_radlinks",
        si: "google_num_radlinks_per_unit",
        Rf: "google_ad_channel",
        ji: "google_max_num_ads",
        li: "google_max_responsive_height",
        Ig: "google_color_border",
        uh: "google_enable_content_recommendations",
        Ug: "google_content_recommendation_ui_type",
        Tg: "google_source_type",
        Sg: "google_content_recommendation_rows_num",
        Rg: "google_content_recommendation_columns_num",
        Qg: "google_content_recommendation_ad_positions",
        Vg: "google_content_recommendation_use_square_imgs",
        Kg: "google_color_link",
        Jg: "google_color_line",
        Mg: "google_color_url",
        Pf: "google_ad_block",
        eg: "google_ad_section",
        Qf: "google_ad_callback",
        Fg: "google_captcha_token",
        Lg: "google_color_text",
        vg: "google_alternate_ad_url",
        Yf: "google_ad_host_tier_id",
        Gg: "google_city",
        Wf: "google_ad_host",
        Xf: "google_ad_host_channel",
        wg: "google_alternate_color",
        Hg: "google_color_bg",
        xh: "google_encoding",
        Eh: "google_font_face",
        ah: "google_cust_ch",
        fh: "google_cust_job",
        eh: "google_cust_interests",
        bh: "google_cust_id",
        gh: "google_cust_u_url",
        Ih: "google_hints",
        Xh: "google_image_size",
        mi: "google_mtl",
        hj: "google_cpm",
        Pg: "google_contents",
        oi: "google_native_settings_key",
        Wg: "google_country",
        Zi: "google_targeting",
        Fh: "google_font_size",
        jh: "google_disable_video_autoplay",
        uj: "google_video_product_type",
        tj: "google_video_doc_id",
        sj: "google_cust_gender",
        Vi: "google_cust_lh",
        Ui: "google_cust_l",
        gj: "google_tfs",
        ni: "google_native_ad_template",
        ci: "google_kw",
        Wi: "google_tag_for_child_directed_treatment",
        Xi: "google_tag_for_under_age_of_consent",
        Ji: "google_region",
        Zg: "google_cust_criteria",
        dg: "google_safe",
        Yg: "google_ctr_threshold",
        Ki: "google_resizing_allowed",
        Mi: "google_resizing_width",
        Li: "google_resizing_height",
        rj: "google_cust_age",
        LANGUAGE: "google_language",
        di: "google_kw_type",
        xi: "google_pucrd",
        wi: "google_page_url",
        Yi: "google_tag_partner",
        Qi: "google_restrict_data_processing",
        Lf: "google_adbreak_test",
        Uf: "google_ad_frequency_hint",
        Mf: "google_admob_interstitial_slot",
        Nf: "google_admob_rewarded_slot",
        ii: "google_max_ad_content_rating",
        Ai: "google_ad_public_floor",
        yi: "google_ad_private_floor",
        qj: "google_traffic_source"
    };
    var ff = Ce(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = ce(ne);
        return !b.parentElement
    });

    function gf(a, b) {
        if (ff())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = ce(b)
    }

    function hf(a, b) {
        b = b instanceof Fd ? b : Ld(b, /^data:image\//i.test(b));
        a.src = Gd(b)
    }
    var jf = /^[\w+/_-]+[=]{0,2}$/;

    function kf(a, b) {
        b = (b || u).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && jf.test(a) ? a : "" : ""
    };

    function lf(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function mf(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function nf(a) {
        return mf.apply(null, arguments) / arguments.length
    };

    function of (a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    } of .prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }; of .prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }; of .prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function pf(a, b) {
        this.width = a;
        this.height = b
    }

    function qf(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    q = pf.prototype;
    q.aspectRatio = function() {
        return this.width / this.height
    };
    q.isEmpty = function() {
        return !(this.width * this.height)
    };
    q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function rf(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : u.document.createElement("div");
        return a.replace(sf, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = fe(e + " "), gf(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var sf = /&([^;\s<&]+);?/g;

    function tf(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function uf(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function vf(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function wf(a) {
        return a ? new xf(yf(a)) : Ma || (Ma = new xf)
    }

    function zf(a, b) {
        gd(b, function(c, d) {
            c && "object" == typeof c && c.qa && (c = c.ea());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Af.hasOwnProperty(d) ? a.setAttribute(Af[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var Af = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Bf(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new pf(a.clientWidth, a.clientHeight)
    }

    function Cf(a) {
        var b = a.scrollingElement ? a.scrollingElement : Fb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Bb && Ob("10") && a.pageYOffset != b.scrollTop ? new of (b.scrollLeft, b.scrollTop) : new of (a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Df(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Ef(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!ua(f) || va(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (va(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                jb(g ? rb(f) : f, e)
            }
        }
    }

    function Ff(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Gf(a, b) {
        var c = Ff(a, "DIV");
        Bb ? (b = le(pe, b), gf(c, b), c.removeChild(c.firstChild)) : gf(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function Hf(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function yf(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var If = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Jf = {
            IMG: " ",
            BR: "\n"
        };

    function Kf(a) {
        var b = [];
        Lf(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Lf(a, b, c) {
        if (!(a.nodeName in If))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Jf) b.push(Jf[a.nodeName]);
        else
            for (a = a.firstChild; a;) Lf(a, b, c), a = a.nextSibling
    }

    function Mf(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return Nf(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && ob(e.className.split(/\s+/), c))
        })
    }

    function Nf(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function xf(a) {
        this.j = a || u.document || document
    }
    q = xf.prototype;
    q.Pe = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    q.Kf = xf.prototype.Pe;
    q.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    q.ha = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = e[1],
            g = Ff(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : zf(g, f));
        2 < e.length && Ef(d, g, e, 2);
        return g
    };
    q.createElement = function(a) {
        return Ff(this.j, a)
    };
    q.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };

    function Of(a, b) {
        return Gf(a.j, b)
    }
    q.T = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    q.appendChild = function(a, b) {
        a.appendChild(b)
    };
    q.append = function(a, b) {
        Ef(yf(a), a, arguments, 1)
    };
    q.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    q.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    q.Me = Hf;

    function Pf() {
        return !Qf() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"))
    }

    function Qf() {
        return y("iPad") || y("Android") && !y("Mobile") || y("Silk")
    };
    var Rf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Sf(a) {
        try {
            return !!a && null != a.location.href && yb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function Tf(a, b = !1, c = !1, d = u) {
        c = c ? Uf(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !Sf(c) || !a(c));) c = Uf(c)
    }

    function Uf(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch (b) {}
        return null
    }

    function Vf(a) {
        return Sf(a.top) ? a.top : null
    }

    function Wf(a, b) {
        const c = Xf("SCRIPT", a);
        xe(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Yf(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Zf() {
        if (!ha.globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            ha.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (a) {
            return Math.random()
        }
    }

    function $f(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function ag(a) {
        const b = [];
        $f(a, function(c) {
            b.push(c)
        });
        return b
    }

    function bg(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var dg = Ce(() => nb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], cg) || 1E-4 > Math.random());
    const cg = a => Xa($a(), a);
    var eg = /^([0-9.]+)px$/,
        fg = /^(-?[0-9.]{1,30})$/;

    function gg(a) {
        if (!fg.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function hg(a) {
        return /^true$/.test(a)
    }

    function ig(a) {
        return (a = eg.exec(a)) ? +a[1] : null
    }

    function jg() {
        var a = u.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (c) {}
        return ""
    }
    var kg = {
        kg: "allow-forms",
        lg: "allow-modals",
        mg: "allow-orientation-lock",
        ng: "allow-pointer-lock",
        og: "allow-popups",
        pg: "allow-popups-to-escape-sandbox",
        qg: "allow-presentation",
        rg: "allow-same-origin",
        sg: "allow-scripts",
        tg: "allow-top-navigation",
        ug: "allow-top-navigation-by-user-activation"
    };
    const lg = Ce(() => ag(kg));

    function mg() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = lg();
        return a.length ? kb(b, c => !ob(a, c)) : b
    }

    function ng() {
        const a = Xf("IFRAME"),
            b = {};
        jb(lg(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var og = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        pg = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (og(a, b)) return a;
                if (!(a = Uf(a))) break
            }
            return null
        },
        qg = Ce(() => Pf() ? 2 : Qf() ? 1 : 0),
        M = (a, b) => {
            $f(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    const rg = {
        ["http://googleads.g.doubleclick.net"]: !0,
        ["http://pagead2.googlesyndication.com"]: !0,
        ["https://googleads.g.doubleclick.net"]: !0,
        ["https://pagead2.googlesyndication.com"]: !0
    };
    var sg = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/;
    const tg = /.*domain\.test$/,
        ug = /\.prod\.google\.com(:\d+)?$/;
    var vg = a => rg[a] || sg.test(a) || tg.test(a) || ug.test(a);
    let wg = [];
    const xg = () => {
        const a = wg;
        wg = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var yg = (a, b) => {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * 2 ** 52),
                configurable: !1
            })
        } catch (c) {
            b && b.ka(784, c)
        }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.ka(784, Error(`Invalid correlator, ${a}`));
        return a || -1
    };

    function zg(a, b, c, d = []) {
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || Hf(h, b))) {
                        for (const l of d) l.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Tf(f => {
            if (!f.parent || !Sf(f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let k = 0; k < g.length; k++) try {
                a: {
                    var h = g[k];
                    try {
                        var l = h.contentWindow || (h.contentDocument ? Df(h.contentDocument) : null);
                        break a
                    } catch (m) {}
                    l =
                    null
                }
                if (l == f) {
                    zg(f.parent, g[k], c, d);
                    break
                }
            }
            catch (m) {}
            return !1
        }, !1, !1, a)
    }
    var Ag = (a, b) => {
            zg(Df(yf(a)), a, b)
        },
        Cg = (a, b) => {
            "complete" === a.document.readyState ? (wg.push(b), 1 == wg.length && (window.Promise ? Promise.resolve().then(xg) : window.setImmediate ? setImmediate(xg) : setTimeout(xg, 0))) : a.addEventListener("load", b)
        },
        Dg = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function Xf(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var Eg = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, Sf(a) && (b = a);
        return b
    };

    function Fg(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    q = Fg.prototype;
    q.getWidth = function() {
        return this.right - this.left
    };
    q.getHeight = function() {
        return this.bottom - this.top
    };

    function Gg(a) {
        return new Fg(a.top, a.right, a.bottom, a.left)
    }
    q.contains = function(a) {
        return this && a ? a instanceof Fg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Hg(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    q.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    q.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    q.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Ig(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Jg(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Ig(c, e, d - c, a - e)
        }
        return null
    }

    function Kg(a, b) {
        var c = Jg(a, b);
        if (!c || !c.height || !c.width) return [new Ig(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            l = b.top + b.height;
        b.top > a.top && (c.push(new Ig(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        l < g && (c.push(new Ig(a.left, l, a.width, g - l)), e = l - d);
        b.left > a.left && c.push(new Ig(a.left, d, b.left - a.left, e));
        h < f && c.push(new Ig(h, d, f - h, e));
        return c
    }
    Ig.prototype.contains = function(a) {
        return a instanceof of ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Ig.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Ig.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Ig.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const Lg = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Mg(a = u) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Ng() {
        const a = Mg();
        return a && a.initialIntersection
    }

    function Og() {
        const a = Ng();
        return a && va(a.rootBounds) ? new pf(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Pg(a) {
        return (a = a || Mg()) ? Sf(a.master) ? a.master : null : null
    }

    function Qg(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            pb(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, l = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !l && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Wf(a.document, g ? Bd(ed("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : zd(dd(ed("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, L(a, "message", f), d = () => {
            Ke(a, "message", f)
        });
        return e
    };
    class Rg {
        constructor(a) {
            this.Ye = a
        }
    }

    function Sg(a) {
        return new Rg(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const se = [Sg("data"), Sg("http"), Sg("https"), Sg("mailto"), Sg("ftp"), new Rg(a => /^[^:]*([/?#]|$)/.test(a))];

    function re(a = se) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof Rg && c.Ye("#")) return new Fd("#", Ed)
        }
    };

    function N(a, ...b) {
        if (0 === b.length) return zd(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return zd(c.join(""))
    }

    function Tg(a, b) {
        let c = yd(a).toString();
        if (/#/.test(c)) throw Error("");
        let d = /\?/.test(c) ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return zd(c)
    };

    function Ug(a) {
        a = a[0];
        const b = qd();
        a = b ? b.createScript(a) : a;
        return new td(a, rd)
    };

    function Vg(a) {
        return new ae(a[0], Zd)
    };

    function Wg(a) {
        return zd(yd(a).toString())
    };

    function Xg(a, b, c) {
        if ("string" === typeof b)(b = Yg(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Yg(c, d);
                f && (c.style[f] = e)
            }
    }
    var Zg = {};

    function Yg(a, b) {
        var c = Zg[b];
        if (!c) {
            var d = uf(b);
            c = d;
            void 0 === a.style[d] && (d = (Fb ? "Webkit" : Eb ? "Moz" : Bb ? "ms" : null) + vf(d), void 0 !== a.style[d] && (c = d));
            Zg[b] = c
        }
        return c
    }

    function $g(a, b) {
        var c = yf(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function ah(a, b) {
        return $g(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function bh(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function ch(a) {
        var b = yf(a),
            c = new of (0, 0);
        var d = b ? yf(b) : document;
        d = !Bb || 9 <= Number(Rb) || "CSS1Compat" == wf(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = bh(a);
        b = Cf(wf(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function dh(a) {
        var b = eh;
        if ("none" != ah(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function eh(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Fb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = bh(a), new pf(a.right - a.left, a.bottom - a.top)) : new pf(b, c)
    }

    function fh(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function gh(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? fh(a, b) : 0
    }
    var hh = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function ih(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in hh ? hh[b] : fh(a, b)
    };
    var jh = a => "number" === typeof a && 0 < a,
        lh = (a, b) => {
            a = kh(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        kh = a => Object.entries(mh(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        mh = a => {
            const b = {};
            $f(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        nh = () => {
            try {
                return df.history.length
            } catch (a) {
                return 0
            }
        },
        oh = a => {
            a = Pg(Mg(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        ph = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        qh = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = nh();
            let b;
            a.u_h = null == (b = df.screen) ? void 0 : b.height;
            let c;
            a.u_w = null == (c = df.screen) ? void 0 : c.width;
            let d;
            a.u_ah = null == (d = df.screen) ? void 0 : d.availHeight;
            let e;
            a.u_aw = null == (e = df.screen) ? void 0 : e.availWidth;
            let f;
            a.u_cd = null == (f = df.screen) ? void 0 : f.colorDepth
        },
        rh = a => {
            let b;
            b = (b = 9 !== a.nodeType && a.id) ? "/" + b : "";
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f <
                        d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + b + c
        },
        sh = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        th = () => {
            if (!df) return !1;
            try {
                return !(!df.navigator.standalone && !df.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        uh = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        vh = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e =
                            String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        },
        wh = a => a == a.top;
    class xh {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const yh = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var zh = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        Ah = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.wd = !!c;
                this.depth = null
            }
        };

    function Bh(a, b, c = null, d = !1) {
        Ch(a, b, c, d)
    }

    function Ch(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Xf("IMG", a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                d && pb(a.google_image_requests, e);
                Ke(e, "load", f);
                Ke(e, "error", f)
            };
            L(e, "load", f);
            L(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Eh = a => {
            let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=dtt_err";
            $f(a, (c, d) => {
                c && (b += `&${d}=${encodeURIComponent(c)}`)
            });
            Dh(b)
        },
        Dh = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Bh(b, a, void 0, !1)
        };

    function Fh(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Gh(a, b, c, d, e) {
        const f = [];
        $f(a, function(g, h) {
            (g = Hh(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Hh(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Hh(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Gh(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Ih(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.A.length - 1
    }

    function Jh(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Ih(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = Gh(h[l], a.A, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.A;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class Kh {
        constructor() {
            this.A = "&";
            this.l = {};
            this.B = 0;
            this.j = []
        }
    };

    function Lh() {
        var a = Mh,
            b = u.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    }

    function Nh(a, b, c, d, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Kh ? f = c : (f = new Kh, $f(c, (h, l) => {
                var k = f;
                const m = k.B++;
                h = Fh(l, h);
                k.j.push(m);
                k.l[m] = h
            }));
            const g = Jh(f, "/pagead/gen_204?id=" + b + "&");
            g && Bh(u, g)
        } catch (f) {}
    }
    class Oh {
        constructor() {
            this.j = Math.random()
        }
    };
    let Ph = null;

    function Qh() {
        if (null === Ph) {
            Ph = "";
            try {
                let a = "";
                try {
                    a = u.top.location.hash
                } catch (b) {
                    a = u.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Ph = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Ph
    };
    var Rh = () => {
            const a = u.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Da()
        },
        Sh = () => {
            const a = u.performance;
            return a && a.now ? a.now() : null
        };
    class Th {
        constructor(a, b) {
            var c = Sh() || Rh();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const Uh = u.performance,
        Vh = !!(Uh && Uh.mark && Uh.measure && Uh.clearMarks),
        Wh = Ce(() => {
            var a;
            if (a = Vh) a = Qh(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Xh(a) {
        a && Uh && Wh() && (Uh.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Uh.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Yh() {
        var a = Zh;
        a.l = !1;
        a.j != a.A.google_js_reporting_queue && (Wh() && jb(a.j, Xh), a.j.length = 0)
    }

    function $h(a, b) {
        if (!a.l) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw Xh(c), e;
        }
        a.end(c);
        return d
    }
    class ai {
        constructor(a) {
            this.j = [];
            this.A = a || u;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.j = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.l = Wh() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.l) return null;
            a = new Th(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Uh && Wh() && Uh.mark(b);
            return a
        }
        end(a) {
            if (this.l && "number" === typeof a.value) {
                a.duration = (Sh() || Rh()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Uh && Wh() && Uh.mark(b);
                !this.l || 2048 < this.j.length ||
                    this.j.push(a)
            }
        }
    };

    function bi(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = ci(a.stack, b));
        return b
    }

    function ci(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    class di {
        constructor(a = null) {
            this.B = Mh;
            this.l = null;
            this.D = this.ka;
            this.j = a;
            this.A = !1
        }
        xa() {
            return this.B
        }
        Od(a) {
            this.l = a
        }
        C(a) {
            this.A = a
        }
        zb(a, b, c) {
            let d, e;
            try {
                this.j && this.j.l ? (e = this.j.start(a.toString(), 3), d = b(), this.j.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    Xh(e), b = this.D(a, new xh(f, {
                        message: bi(f)
                    }), void 0, c)
                } catch (g) {
                    this.ka(217, g)
                }
                if (b) {
                    let g, h;
                    null == (g = window.console) || null == (h = g.error) || h.call(g, f)
                } else throw f;
            }
            return d
        }
        na(a, b) {
            return (...c) => this.zb(a, () => b.apply(void 0, c))
        }
        ka(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const I = new Kh;
                var g = I;
                g.j.push(1);
                g.l[1] = Fh("context", a);
                b.error && b.meta && b.id || (b = new xh(b, {
                    message: bi(b)
                }));
                if (b.msg) {
                    g = I;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = Fh("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.l) try {
                    this.l(b)
                } catch (T) {}
                if (d) try {
                    d(b)
                } catch (T) {}
                d = I;
                l = [l];
                d.j.push(3);
                d.l[3] = l;
                d = u;
                l = [];
                b = null;
                do {
                    var k = d;
                    if (Sf(k)) {
                        var m = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else m = b, b = null;
                    l.push(new Ah(m || "", k));
                    try {
                        d = k.parent
                    } catch (T) {
                        d = null
                    }
                } while (d && k != d);
                for (let T =
                        0, Mb = l.length - 1; T <= Mb; ++T) l[T].depth = Mb - T;
                k = u;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var n = l[m];
                        n.url || (n.url = k.location.ancestorOrigins[m - 1] || "", n.wd = !0)
                    }
                var p = l;
                let ja = new Ah(u.location.href, u, !1);
                k = null;
                const Ka = p.length - 1;
                for (n = Ka; 0 <= n; --n) {
                    var r = p[n];
                    !k && yh.test(r.url) && (k = r);
                    if (r.url && !r.wd) {
                        ja = r;
                        break
                    }
                }
                r = null;
                const ca = p.length && p[Ka].url;
                0 != ja.depth && ca && (r = p[Ka]);
                f = new zh(ja, r);
                if (f.l) {
                    p = I;
                    var v = f.l.url || "";
                    p.j.push(4);
                    p.l[4] = Fh("top", v)
                }
                var t = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var x = f.j.url.match(Rf),
                        w = x[1],
                        G = x[3],
                        E = x[4];
                    v = "";
                    w && (v += w + ":");
                    G && (v += "//", v += G, E && (v += ":" + E));
                    var H = v
                } else H = "";
                w = I;
                t = [t, {
                    url: H
                }];
                w.j.push(5);
                w.l[5] = t;
                Nh(this.B, e, I, this.A, c)
            } catch (I) {
                try {
                    Nh(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: bi(I),
                        url: f && f.j.url
                    }, this.A, c)
                } catch (ja) {}
            }
            return !0
        }
        Za(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.ka(a, c instanceof Error ? c : Error(c))
            })
        }
    };
    const ei = a => null !== a && void 0 !== a;
    let fi = void 0;

    function gi(a, b) {
        const c = fi;
        fi = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };
    var hi = a => "string" === typeof a,
        ii = a => void 0 === a;

    function ji() {
        var a = ki;
        return b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    var li;
    li = {
        zi: 0,
        Wd: 3,
        Xd: 4,
        Zd: 5
    };
    var mi = li.Wd,
        ni = li.Xd,
        oi = li.Zd;

    function pi(a, ...b) {
        qi(a, ...b.map(c => ({
            Gf: 7,
            message: c
        })))
    };

    function ri(a) {
        return function(...b) {
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    }
    var si = ri(a => {
        const b = [];
        for (const c of a) ri(() => {
            b.push([{
                [c.Gf]: c.message.toJSON()
            }])
        })();
        return JSON.stringify([b])
    });
    var ti = (a, b) => {
        ha.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function qi(a, ...b) {
        ri(() => {
            a.l.push(...b);
            const c = ri(() => {
                const d = si(a.l);
                a.A("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                a.l = [];
                a.j = null
            });
            100 <= a.l.length ? (null !== a.j && clearTimeout(a.j), a.j = setTimeout(c, 0)) : null === a.j && (a.j = setTimeout(c, 100))
        })()
    }
    var ui = class {
        constructor() {
            this.A = ti;
            this.l = [];
            this.j = null
        }
    };
    var O = a => {
        var b = "Ec";
        if (a.Ec && a.hasOwnProperty(b)) return a.Ec;
        b = new a;
        return a.Ec = b
    };
    class vi {
        constructor(a) {
            this.methodName = a
        }
    }
    var wi = new vi(15),
        xi = new vi(2),
        yi = new vi(3),
        zi = new vi(5),
        Ai = new vi(6),
        Bi = new vi(7),
        Ci = new vi(8),
        Di = new vi(14),
        Ei = (a, b, c) => b[a.methodName] || c || (() => {});

    function Fi(a, b) {
        a.j = c => {
            Ei(xi, b, () => [])(c, 1)
        };
        a.l = () => Ei(yi, b, () => [])(1)
    }
    class Gi {
        constructor() {
            this.j = () => {};
            this.l = () => []
        }
    };
    let Mh, Hi;
    const Zh = new ai(u);
    (a => {
        Mh = a || new Oh;
        "number" !== typeof u.google_srt && (u.google_srt = Math.random());
        Lh();
        Hi = new di(Zh);
        Hi.C(!0);
        "complete" == u.document.readyState ? u.google_measure_js_timing || Yh() : Zh.l && L(u, "load", () => {
            u.google_measure_js_timing || Yh()
        })
    })();
    var Ii = (a, b, c) => Hi.zb(a, b, c),
        Ji = (a, b) => Hi.na(a, b),
        P = (a, b, c) => {
            const d = O(Gi).l();
            !b.eid && d.length && (b.eid = d.toString());
            Nh(Mh, a, b, !0, c)
        },
        Ki = (a, b) => Hi.ka(a, b, void 0, void 0);
    var Li = (a, b) => {
        const c = jg();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(u.document.location.protocol), "//", encodeURIComponent(u.document.location.host)].join("")
    };
    zd(dd(ed("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Mi = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (l) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            L(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = Ke(a, "message", e));
                return g
            }
        },
        Ni = (a, b, c, d = null) => {
            const e = Mi(a, b, Ae(c, () => e()), d);
            return e
        },
        Oi = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && Oi(a[f], b, c, d, --e)
        };

    function Pi(a, b, c, d) {
        vg(d.origin) && "expandable-xpc-ready" == c.notify && Qi(a, b)
    }

    function Qi(a, b) {
        var c = a.Dc;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Pa,
            f: a.qf,
            g: a.me,
            h: a.Xe,
            i: void 0
        });
        u.setTimeout(Ji(220, sh(() => {
            Wf(c.document, Wg(b))
        })), 0)
    };
    var Si = class extends K {
            constructor() {
                super(void 0, -1, Ri)
            }
        },
        Ri = [15];
    var Ti = class extends K {
        constructor() {
            super(void 0)
        }
        getCorrelator() {
            return C(this, 1, 0)
        }
        setCorrelator(a) {
            return Kc(this, 1, a, 0)
        }
    };
    var Ui = class extends K {
        constructor() {
            super(void 0)
        }
    };
    let Vi = null,
        Wi = null;
    var Xi = () => {
            if (null != Vi) return Vi;
            Vi = !1;
            try {
                const a = Vf(u);
                a && -1 !== a.location.hash.indexOf("google_logging") && (Vi = !0);
                u.localStorage.getItem("google_logging") && (Vi = !0)
            } catch (a) {}
            return Vi
        },
        Yi = () => {
            if (null != Wi) return Wi;
            Wi = !1;
            try {
                const a = Vf(u);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || u.localStorage.getItem("auto_ads_logging")) Wi = !0
            } catch (a) {}
            return Wi
        },
        Zi = (a, b = []) => {
            let c = !1;
            u.google_logging_queue || (c = !0, u.google_logging_queue = []);
            u.google_logging_queue.push([a, b]);
            c && Xi() && Wf(u.document,
                zd(dd(ed("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    let $i = (new Date).getTime();
    var aj = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var bj = {
        Th: 0,
        Sh: 1,
        Ph: 2,
        Kh: 3,
        Qh: 4,
        Lh: 5,
        Rh: 6,
        Nh: 7,
        Oh: 8,
        Jh: 9,
        Mh: 10
    };
    var cj = {
        Vh: 0,
        Wh: 1,
        Uh: 2
    };

    function dj(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function ej(a) {
        a = lb(a, b => new Fg(b.top, b.right, b.bottom, b.left));
        a = fj(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function fj(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return mb(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Gg(a[0]))
    };
    var jd = {
        Ii: 0,
        yh: 1,
        Bh: 2,
        zh: 3,
        Ah: 4,
        Hh: 8,
        Ti: 9,
        gi: 10,
        hi: 11,
        Pi: 16,
        ih: 17,
        hh: 24,
        ei: 25,
        Bg: 26,
        Ag: 27,
        Yd: 30,
        Zh: 32,
        bi: 40
    };
    var gj = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5
        },
        hj = {
            [1]: 1,
            [2]: 1,
            [3]: 1,
            [4]: 1,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function ij(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new jj;
        return a.google_reactive_ads_global_state
    }
    class jj {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new kj;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var kj = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var lj = 728 * 1.38,
        mj = (a, b = 420) => (a = Q(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        nj = a => {
            var b = Q(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        pj = a => Math.max(0, oj(a, !0) - Q(a).clientHeight),
        Q = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        oj = (a, b) => {
            const c = Q(a);
            return b ? c.scrollHeight == Q(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        rj = (a, b) => qj(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        sj = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        tj = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        uj = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        vj = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        wj = (a, b, c, d, e) => {
            Nh(c, b, {
                c: e.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        qj = a => 26 === a || 27 === a || 40 === a;

    function xj(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }
    var Aj = class {
        constructor() {
            this.l = new yj(this);
            this.j = 0
        }
        resolve(a) {
            xj(this);
            this.j = 1;
            this.B = a;
            zj(this.l)
        }
    };

    function zj(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.B);
                break;
            case 2:
                a.A && a.A(a.j.A);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var yj = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l) throw Error("Then functions already set.");
            this.l = a;
            this.A = b;
            zj(this)
        }
    };

    function Bj(a, b) {
        Cj(a).forEach(b, void 0)
    }

    function Cj(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Dj(a, b) {
        return void 0 !== a.j[Ej(b)]
    }

    function Fj(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function Gj(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const Hj = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = Ej(a);
            this.j[c] = b;
            this.l[c] = a
        }
        remove(a) {
            a = Ej(a);
            this.j[a] = void 0;
            this.l[a] = void 0
        }
        get(a, b) {
            a = Ej(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        qb() {
            return Fj(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function Ej(a) {
        return a instanceof Object ? String(wa(a)) : a + ""
    };
    const Ij = class {
        constructor(a) {
            this.j = new Hj;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        remove(a) {
            this.j.remove(a)
        }
        contains(a) {
            return Dj(this.j, a)
        }
    };
    const Jj = new Ij("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function Kj(a) {
        a && "function" == typeof a.va && a.va()
    };

    function Lj() {
        this.G = this.G;
        this.I = this.I
    }
    Lj.prototype.G = !1;
    Lj.prototype.va = function() {
        this.G || (this.G = !0, this.l())
    };

    function Mj(a, b) {
        a.G ? b() : (a.I || (a.I = []), a.I.push(b))
    }
    Lj.prototype.l = function() {
        if (this.I)
            for (; this.I.length;) this.I.shift()()
    };

    function Nj(a) {
        a.j.forEach((b, c) => {
            var d = a.element;
            b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
        })
    }

    function Oj(a, b, c) {
        if (!a.j.has(b)) {
            var d = a.j,
                e = d.set;
            var f = a.element;
            const g = f.style.getPropertyValue(b);
            f = g ? {
                value: g,
                priority: f.style.getPropertyPriority(b)
            } : null;
            e.call(d, b, f)
        }
        a.element.style.setProperty(b, c, "important")
    }
    var Pj = class extends Lj {
        constructor(a) {
            super();
            this.element = a;
            this.j = new Map
        }
        l() {
            Nj(this);
            super.l()
        }
    };

    function Qj(a, b) {
        const c = new Rj({
            first: a.P,
            second: b.P
        });
        a.ba(() => R(c, {
            first: a.P,
            second: b.P
        }));
        b.ba(() => R(c, {
            first: a.P,
            second: b.P
        }));
        return c
    }

    function Sj(...a) {
        const b = [...a],
            c = () => b.every(f => f.P),
            d = new Rj(c()),
            e = () => {
                R(d, c())
            };
        b.forEach(f => f.ba(e));
        return Tj(d)
    }

    function Uj(...a) {
        const b = [...a],
            c = () => -1 !== b.findIndex(f => f.P),
            d = new Rj(c()),
            e = () => {
                R(d, c())
            };
        b.forEach(f => f.ba(e));
        return Tj(d)
    }

    function R(a, b) {
        a.P = b;
        a.j.forEach(c => {
            c(a.P)
        })
    }

    function Tj(a, b = Vj) {
        var c = a.P;
        const d = new Rj(a.P);
        a.ba(e => {
            b(e, c) || (c = e, R(d, e))
        });
        return d
    }

    function Wj(a, b) {
        a.ba(b, !0)
    }

    function Xj(a, b, c) {
        Wj(a, d => {
            d === b && c()
        })
    }

    function Yj(a, b, c) {
        Tj(a).ba(d => {
            d === b && c()
        })
    }

    function Zj(a, b) {
        a.l && a.l();
        a.l = b.ba(c => R(a, c), !0)
    }
    class Rj {
        constructor(a) {
            this.P = a;
            this.j = new Map;
            this.A = 1;
            this.l = null
        }
        ba(a, b = !1) {
            const c = this.A++;
            this.j.set(c, a);
            b && a(this.P);
            return () => {
                this.j.delete(c)
            }
        }
        map(a) {
            const b = new Rj(a(this.P));
            this.ba(c => R(b, a(c)));
            return b
        }
    }

    function Vj(a, b) {
        return a == b
    };

    function ak(a, b) {
        jb(a.j, c => {
            c(b)
        })
    }
    var bk = class {
        constructor() {
            this.j = []
        }
    };
    class ck {
        constructor(a) {
            this.j = a
        }
        ba(a) {
            this.j.j.push(a)
        }
        map(a) {
            const b = new bk;
            this.ba(c => ak(b, a(c)));
            return new ck(b)
        }
    }

    function dk(...a) {
        const b = new bk;
        a.forEach(c => {
            c.ba(d => {
                ak(b, d)
            })
        });
        return new ck(b)
    };

    function ek(a) {
        return Tj(Qj(a.j, a.A).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : fk(c, b)
        }))
    }
    var hk = class {
        constructor(a) {
            this.l = a;
            this.j = new Rj(null);
            this.A = new Rj(null);
            this.B = new bk;
            this.G = b => {
                null == this.j.P && 1 == b.touches.length && R(this.j, b.touches[0])
            };
            this.C = b => {
                const c = this.j.P;
                null != c && (b = gk(c, b.changedTouches), null != b && (R(this.j, null), R(this.A, null), ak(this.B, fk(c, b))))
            };
            this.D = b => {
                var c = this.j.P;
                null != c && (c = gk(c, b.changedTouches), null != c && (R(this.A, c), b.preventDefault()))
            }
        }
    };

    function fk(a, b) {
        return {
            Ud: b.pageX - a.pageX,
            Vd: b.pageY - a.pageY
        }
    }

    function gk(a, b) {
        if (null == b) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function ik(a) {
        return Tj(Qj(a.j, a.l).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : jk(c, b)
        }))
    }
    var kk = class {
        constructor(a, b) {
            this.B = a;
            this.C = b;
            this.j = new Rj(null);
            this.l = new Rj(null);
            this.A = new bk;
            this.F = c => {
                R(this.j, c)
            };
            this.D = c => {
                const d = this.j.P;
                null != d && (R(this.j, null), R(this.l, null), ak(this.A, jk(d, c)))
            };
            this.G = c => {
                null != this.j.P && (R(this.l, c), c.preventDefault())
            }
        }
    };

    function jk(a, b) {
        return {
            Ud: b.screenX - a.screenX,
            Vd: b.screenY - a.screenY
        }
    };
    var nk = (a, b) => {
        const c = new lk(a, b);
        return () => mk(c)
    };

    function mk(a) {
        if (a.j) return !1;
        if (null == a.l) return ok(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return ok(a), !0;
        pk(a, b);
        return !0
    }

    function ok(a) {
        a.l = (new Date).getTime();
        a.B()
    }

    function pk(a, b) {
        a.j = !0;
        a.A.setTimeout(() => {
            a.j = !1;
            ok(a)
        }, b)
    }
    class lk {
        constructor(a, b) {
            this.A = a;
            this.B = b;
            this.l = null;
            this.j = !1
        }
    };

    function qk(a) {
        return rk(ik(a.j), ek(a.l))
    }

    function sk(a) {
        return dk(new ck(a.j.A), new ck(a.l.B))
    }
    var tk = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function rk(a, b) {
        return Qj(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };

    function uk(a, b) {
        return new vk(a, b)
    }

    function wk(a) {
        a.win.requestAnimationFrame(() => {
            a.G || R(a.A, new pf(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function xk(a) {
        a.j || (a.j = !0, a.B.observe(a.element));
        return Tj(a.A, qf)
    }
    var vk = class extends Lj {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.j = !1;
            this.A = new Rj(new pf(this.element.offsetWidth, this.element.offsetHeight));
            this.B = new ResizeObserver(() => {
                wk(this)
            })
        }
        l() {
            this.B.disconnect();
            super.l()
        }
    };

    function yk(a, b) {
        return {
            top: a.j - b,
            right: a.A + a.l,
            bottom: a.j + b,
            left: a.A
        }
    }
    class zk {
        constructor(a, b, c) {
            this.A = a;
            this.j = b;
            this.l = c
        }
    };

    function Ak(a, b) {
        a = a.getBoundingClientRect();
        return new Bk(a.top + tj(b), a.bottom - a.top)
    }

    function Ck(a) {
        return new Bk(Math.round(a.j), Math.round(a.l))
    }
    class Bk {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getHeight() {
            return this.l
        }
    };

    function Dk(a, b) {
        a.D = !0;
        a.A = b;
        a.l.forEach(c => {
            c(a.A)
        });
        a.l = []
    }
    class Ek {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.D = !1;
            this.C = this.A = null;
            this.G = nk(a, () => {
                if (null != this.C) {
                    var b = oj(this.j, !0) - this.C;
                    1E3 < b && Dk(this, b)
                }
            });
            this.B = null
        }
        init(a, b) {
            null == a ? (this.C = a = oj(this.j, !0), this.j.addEventListener("scroll", this.G), null != b && b(a)) : this.B = this.j.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        va() {
            null != this.B && this.j.clearTimeout(this.B);
            this.j.removeEventListener("scroll", this.G);
            this.l = [];
            this.A = null
        }
        addListener(a) {
            this.D ? a(this.A) : this.l.push(a)
        }
    };

    function Fk(a) {
        return new Gk(a, new Pj(a.document.body), new Pj(a.document.documentElement))
    }

    function Hk(a) {
        null === a.l && (a.l = a.B.pageYOffset, Oj(a.j, "position", "fixed"), Oj(a.j, "top", `${-a.l}px`), Oj(a.j, "width", "100%"));
        Oj(a.j, "overflow-x", "hidden");
        Oj(a.j, "overflow-y", "hidden");
        Oj(a.A, "overflow-x", "hidden");
        Oj(a.A, "overflow-y", "hidden")
    }

    function Ik(a) {
        null !== a.l && (a.B.scrollTo(0, a.l), a.l = null)
    }
    var Gk = class {
        constructor(a, b, c) {
            this.B = a;
            this.j = b;
            this.A = c;
            this.l = null
        }
    };
    var Jk = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Kk {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function Lk(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new Mk(d)
    }

    function Nk(a, b = 1) {
        a = a.j.slice(0);
        const c = new Kk(b);
        wb(a, () => c.next());
        return new Mk(a)
    }
    const Mk = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Mk(kb(this.j, a))
        }
        apply(a) {
            return new Mk(a(this.j.slice(0)))
        }
        sort(a) {
            return new Mk(this.j.slice(0).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new Mk(b)
        }
    };
    class Ok {
        constructor(a) {
            this.j = new Ij(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function Pk(a) {
        return new Qk({
            value: a
        }, null)
    }

    function Rk(a) {
        return new Qk(null, Error(a))
    }

    function Sk(a) {
        try {
            return Pk(a())
        } catch (b) {
            return new Qk(null, b)
        }
    }

    function Tk(a) {
        return null != a.j ? a.j.value : null
    }

    function Uk(a, b) {
        null != a.j && b(a.j.value)
    }

    function Vk(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class Qk {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof Qk ? a : Pk(a)) : this
        }
    };
    class Wk {
        constructor() {
            this.j = new Hj
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new Ij, this.j.set(a, c));
            c.add(b)
        }
    };

    function Xk(a) {
        return !a
    }

    function Yk(a) {
        const b = {
            Ac: a
        };
        return () => {
            if (b.Ac) {
                const c = b.Ac;
                delete b.Ac;
                c()
            }
        }
    };
    var $k = class extends K {
            constructor(a) {
                super(a, -1, Zk)
            }
            getId() {
                return z(this, 3)
            }
        },
        Zk = [4];
    class al {
        constructor(a, {
            bd: b,
            ee: c,
            Ve: d,
            Jd: e
        }) {
            this.C = a;
            this.A = c;
            this.B = new Mk(b || []);
            this.l = e;
            this.j = d
        }
    };
    var bl = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new Hj;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        dl = a => {
            var b = cl(a);
            a = [];
            for (let c of b) b = String(c.hb), a.push(c.La + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const cl = a => {
            const b = [],
                c = a.B;
            c && c.j.length && b.push({
                La: "a",
                hb: el(c)
            });
            null != a.A && b.push({
                La: "as",
                hb: a.A
            });
            null != a.j && b.push({
                La: "i",
                hb: String(a.j)
            });
            null != a.l && b.push({
                La: "rp",
                hb: String(a.l)
            });
            b.sort(function(d, e) {
                return d.La.localeCompare(e.La)
            });
            b.unshift({
                La: "t",
                hb: fl(a.C)
            });
            return b
        },
        fl = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        el = a => {
            a = a.j.slice(0).map(gl);
            a = JSON.stringify(a);
            return bg(a)
        },
        gl = a => {
            const b = {};
            Bc(a, 7) && (b.q = z(a, 7));
            Bc(a, 2) &&
                (b.o = z(a, 2));
            Bc(a, 5) && (b.p = z(a, 5));
            return b
        };

    function hl() {
        var a = new il;
        return A(a, 2, 1)
    }
    var il = class extends K {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return A(this, 1, a)
        }
    };

    function jl(a) {
        const b = [].slice.call(arguments).filter(Be(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.ed || []);
            d = Object.assign(d, e.rb())
        });
        return new kl(c, d)
    }

    function ll(a) {
        switch (a) {
            case 1:
                return new kl(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new kl(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new kl(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new kl(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function ml(a) {
        return null == a ? null : new kl(null, {
            google_ml_rank: a
        })
    }

    function nl(a) {
        return null == a ? null : new kl(null, {
            google_placement_id: dl(a)
        })
    }
    class kl {
        constructor(a, b) {
            this.ed = a;
            this.j = b
        }
        rb() {
            return this.j
        }
    };
    var ol = class extends K {
            constructor(a) {
                super(a)
            }
        },
        pl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        rl = class extends K {
            constructor(a) {
                super(a, -1, ql)
            }
        },
        sl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        tl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        ql = [1];
    var ul = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var vl = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var wl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        xl = class extends K {
            constructor(a) {
                super(a)
            }
        };
    var yl = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Al = class extends K {
            constructor(a) {
                super(a, -1, zl)
            }
        },
        Bl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Cl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        zl = [3];
    var El = class extends K {
            constructor(a) {
                super(a, -1, Dl)
            }
        },
        Dl = [2];
    var Fl = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Hl = class extends K {
            constructor(a) {
                super(a, -1, Gl)
            }
        },
        Gl = [1];
    var Il = class extends K {
        constructor(a) {
            super(a)
        }
        aa() {
            return D(this, $k, 1)
        }
        l() {
            return z(this, 2)
        }
    };
    var Jl = class extends K {
            constructor(a) {
                super(a)
            }
            getName() {
                return z(this, 4)
            }
        },
        Kl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Ll = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Ml = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Nl = [1, 2, 3];
    var Pl = class extends K {
            constructor(a) {
                super(a, -1, Ol)
            }
        },
        Ql = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Ol = [1];
    var Rl = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Tl = class extends K {
            constructor(a) {
                super(a, -1, Sl)
            }
        },
        Sl = [3, 4];
    var Ul = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Wl = class extends K {
            constructor(a) {
                super(a, -1, Vl)
            }
            aa() {
                return D(this, $k, 1)
            }
            l() {
                return z(this, 2)
            }
        },
        Vl = [6, 7, 9, 10, 11];
    var Yl = class extends K {
            constructor(a) {
                super(a, -1, Xl)
            }
        },
        Xl = [4];
    var $l = class extends K {
            constructor(a) {
                super(a, -1, Zl)
            }
        },
        am = class extends K {
            constructor() {
                super(void 0)
            }
        },
        Zl = [6];
    var cm = class extends K {
            constructor(a) {
                super(a, -1, bm)
            }
        },
        em = class extends K {
            constructor(a) {
                super(a, -1, dm)
            }
        },
        fm = class extends K {
            constructor(a) {
                super(a)
            }
            Rb() {
                return J(this, 1)
            }
            Cc() {
                return C(this, 2, 0)
            }
        },
        gm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        hm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        im = class extends K {
            constructor(a) {
                super(a)
            }
        },
        bm = [1],
        dm = [1],
        jm = [1, 2];

    function km(a) {
        return D(a, lm, 13)
    }

    function mm(a) {
        return D(a, nm, 15)
    }
    var pm = class extends K {
            constructor(a) {
                super(a, -1, om)
            }
        },
        qm = class extends K {
            constructor() {
                super(void 0)
            }
        },
        rm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        tm = class extends K {
            constructor(a) {
                super(a, -1, sm)
            }
        },
        um = class extends K {
            constructor(a) {
                super(a)
            }
        },
        vm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        lm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        wm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        nm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        xm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        ym = class extends K {
            constructor(a) {
                super(a)
            }
        },
        om = [1, 2, 5, 7],
        sm = [2, 5, 6, 11];
    var zm = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function Am(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? Tc(zm, b) : null
        } catch (b) {
            return null
        }
    }

    function Bm(a, b) {
        if (void 0 !== a.yc) {
            let c = Am(b);
            c || (c = new zm);
            void 0 !== a.yc && A(c, 2, a.yc);
            A(c, 1, Da() + 864E5);
            a = Vc(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = Am(b)) && z(a, 1) < Da()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };
    var Cm = {
            Ba: "ama_success",
            ta: .1,
            wa: !0
        },
        Dm = {
            Ba: "ama_failure",
            ta: .1,
            wa: !0
        },
        Em = {
            Ba: "ama_inf_scr",
            ta: .1,
            wa: !0
        },
        Fm = {
            Ba: "ama_inf_scr",
            ta: .1,
            wa: !0
        },
        Gm = {
            Ba: "ama_coverage",
            ta: .1,
            wa: !0
        },
        Hm = {
            Ba: "ama_inf_scr",
            ta: 1,
            wa: !0
        },
        Im = {
            Ba: "ama_opt",
            ta: .1,
            wa: !0
        },
        Jm = {
            Ba: "ama_aud_sen",
            ta: 1,
            wa: !0
        };

    function Km(a, b) {
        for (var c = 0; c < b.length; c++) a.ua(b[c]);
        return a
    }

    function Lm(a, b) {
        a.A = a.A ? a.A : b;
        return a
    }
    class Mm {
        constructor(a) {
            this.G = {};
            this.G.c = a;
            this.C = [];
            this.A = null;
            this.D = [];
            this.F = 0
        }
        bb(a) {
            this.G.wpc = a;
            return this
        }
        ua(a) {
            for (var b = 0; b < this.C.length; b++)
                if (this.C[b] == a) return this;
            this.C.push(a);
            return this
        }
        B(a) {
            var b = ld(this.G);
            0 < this.F && (b.t = this.F);
            b.err = this.C.join();
            b.warn = this.D.join();
            this.A && (b.excp_n = this.A.name, b.excp_m = this.A.message && this.A.message.substring(0, 512), b.excp_s = this.A.stack && ci(this.A.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function Nm(a, b, c) {
        !b.wa || "pvc" in c || (c.pvc = yg(a.j));
        P(b.Ba, c, b.ta)
    }

    function Om(a, b, c) {
        c = c.B(a.j);
        b.wa && (c.pvc = yg(a.j));
        0 < b.ta && (c.r = b.ta, Nm(a, b, c))
    }
    var Pm = class {
        constructor(a) {
            this.j = a
        }
    };

    function Qm(a, b, c) {
        let d;
        Nm(a.l, Jm, Object.assign({}, c, {
            evt: b,
            vh: Q(a.A).clientHeight,
            eid: null == (d = D(a.j, tl, 4)) ? void 0 : J(d, 2)
        }))
    }
    var Rm = class {
        constructor(a, b, c) {
            this.A = a;
            this.l = b;
            this.j = c
        }
    };

    function Sm(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Tm(a) {
        return Cj(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function Um(a, b) {
        a = (new xf(a)).createElement("DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Vm(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Sm(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Wm(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Sm(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var S = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        Xm = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        Ym = class {
            constructor(a) {
                this.j = a;
                this.defaultValue = ""
            }
        };
    var Zm = new S(1084),
        $m = new S(1082, !0),
        an = new S(236),
        bn = new S(1154),
        cn = new S(383, !0),
        dn = new Xm(1130, 100),
        en = new S(1150),
        fn = new Xm(1126, 5E3),
        gn = new Xm(1032, 200),
        hn = new Ym(14),
        jn = new S(1131, !0),
        kn = new Xm(1142, 8),
        ln = new Xm(1165, 1E3),
        mn = new Xm(1158),
        nn = new Xm(1157),
        on = new S(1191),
        pn = new Xm(1103),
        qn = new S(1192),
        rn = new S(1182),
        sn = new S(1176),
        tn = new S(1189),
        un = new Xm(1116, 300),
        vn = new Xm(1117, 100),
        wn = new S(1121),
        xn = new S(1186),
        yn = new S(1188),
        zn = new S(1187),
        An = new Xm(1159, 500),
        Bn = new Xm(1119),
        Cn = new S(1122, !0),
        Dn = new S(1170),
        En = new S(1160),
        Fn = new S(316),
        Gn = new S(334),
        Hn = new Xm(54),
        In = new S(313),
        Jn = new Xm(66, -1),
        Kn = new Xm(65, -1),
        Ln = new S(369),
        Mn = new S(368),
        Nn = new Xm(1169, 15E3),
        On = new S(1162),
        Pn = new S(1175),
        Qn = new S(1120),
        Rn = new S(1171),
        Sn = new S(1151),
        Tn = new S(1164),
        Un = new S(1161, !0),
        Vn = new S(1179),
        Wn = new Xm(1072, .75),
        Xn = new Xm(1168, 15E3),
        Yn = new S(290),
        Zn = new S(190),
        $n = new S(154),
        ao = new Ym(1166),
        bo = new S(1147),
        co = new S(1190),
        eo = new S(380254521),
        fo = new S(381914117, !0),
        go = new S(447540098),
        ho = new S(447540095),
        io = new S(447540097),
        jo = new S(447540099),
        ko = new S(447540096),
        lo = new S(83),
        mo = new S(439828594),
        no = new S(77),
        oo = new S(78),
        po = new S(309),
        qo = new S(80),
        ro = new S(76),
        so = new S(1957),
        to = new S(380025941),
        uo = new S(84),
        vo = new S(188),
        wo = new S(1971),
        xo = new S(1928),
        yo = new S(1941),
        zo = new S(370946349),
        Ao = new S(392736476),
        Bo = new Xm(406149835),
        Co = new S(432946749),
        Do = new S(432938498),
        Eo = new Xm(1935);
    var Fo = class {
            constructor() {
                const a = {};
                this.A = (b, c) => null != a[b] ? a[b] : c;
                this.B = (b, c) => null != a[b] ? a[b] : c;
                this.j = (b, c) => null != a[b] ? a[b] : c;
                this.C = (b, c) => null != a[b] ? a[b] : c;
                this.l = () => {}
            }
        },
        U = a => O(Fo).A(a.j, a.defaultValue),
        V = a => O(Fo).B(a.j, a.defaultValue);
    var Ho = (a, b, c, d = 0) => {
            var e = Go(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.Qb(c);) b = c;
                e = {
                    anchor: b,
                    position: e.hc
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Vm(a, e.anchor, e.position)
        },
        Io = (a, b, c, d = 0) => {
            U(In) ? Ho(a, b, c, d) : Vm(a, b, c)
        };

    function Go(a, b, c) {
        const d = f => {
                f = Jo(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = Jo(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: Ko(a.previousSibling, d),
                    Qb: f => Ko(f.previousSibling, d),
                    hc: 0
                };
            case 2:
                return {
                    init: Ko(a.lastChild, d),
                    Qb: f => Ko(f.previousSibling, d),
                    hc: 0
                };
            case 3:
                return {
                    init: Ko(a.nextSibling, e),
                    Qb: f => Ko(f.nextSibling, e),
                    hc: 3
                };
            case 1:
                return {
                    init: Ko(a.firstChild, e),
                    Qb: f => Ko(f.nextSibling, e),
                    hc: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Jo(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Ko(a, b) {
        return a && b(a) ? a : null
    };
    var Lo = (a, b = !1) => {
        try {
            return b ? (new pf(a.innerWidth, a.innerHeight)).round() : Bf(a || window).round()
        } catch (c) {
            return new pf(-12245933, -12245933)
        }
    };

    function Mo(a = u) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function No(a, b = u) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new of (b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function Oo(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function Po(a) {
        -1 === a.l && (a.l = mb(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class Qo {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && Number.isInteger(a) && this.j[a] !== b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };
    N `https://www.googletagservices.com/console/host/host.js`;
    N `https://www.googletagservices.com/console/panel/index.html`;
    N `https://www.googletagservices.com/console/overlay/index.html`;
    var Ro = (a, b, c) => {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (a && a.top == a) return !1;
        const d = a.document,
            e = d.documentElement;
        if (b && c) {
            let f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    };

    function So(a, b) {
        $f(a, (c, d) => {
            b[d] = c
        })
    }
    var To = a => {
        let b = a.location.href;
        if (a == a.top) return {
            url: b,
            Gc: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            Gc: c
        }
    };

    function Uo(a) {
        if (a == a.top) return 0;
        for (; a && a != a.top && Sf(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var Vo = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        Wo = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        Xo = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const Yo = (a, b, c) => {
        a = Vo(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var Zo = (a, b) => {
            b = b.parentElement;
            return b ? (a = Yf(b, a)) ? a.direction : "" : ""
        },
        $o = (a, b, c) => {
            if (0 === Yo(a, b, c)) return !1;
            Xo(b, c, "0px");
            const d = Yo(a, b, c);
            Xo(b, c, -1 * d + "px");
            a = Yo(a, b, c);
            0 !== a && a !== d && Xo(b, c, d / (a - d) * d + "px");
            return !0
        };
    const ap = RegExp("(^| )adsbygoogle($| )");

    function bp(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            const e = uf(d.Mc);
            a[e] = d.value
        }
    }

    function cp(a, b, c, d, e, f) {
        a = dp(a, e);
        a.ra.setAttribute("data-ad-format", d ? d : "auto");
        ep(a, b, c, f);
        return a
    }

    function fp(a, b, c = null) {
        a = dp(a, {});
        ep(a, b, null, c);
        return a
    }

    function ep(a, b, c, d) {
        var e = [];
        if (d = d && d.ed) a.Ra.className = d.join(" ");
        a = a.ra;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function dp(a, b) {
        var c = Um(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.ec && bp(d, b.ec);
        a = (new xf(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Uc && (d.marginTop = b.Uc);
        b.tc && (d.marginBottom = b.tc);
        b.eb && bp(d, b.eb);
        c.appendChild(a);
        return {
            Ra: c,
            ra: a
        }
    }

    function gp(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.rb();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function hp(a) {
        const b = Tm(a.document);
        jb(b, function(c) {
            const d = ip(a, c);
            var e;
            if (e = d) e = Vo(c, a), e = !((e ? e.y : 0) < Q(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), gp(a, c))
        })
    }

    function ip(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in ef) a[ef[c]] && (b[ef[c]] = a[ef[c]]);
        return b
    };

    function jp(a) {
        var b = [];
        Bj(a.getElementsByTagName("p"), function(c) {
            100 <= kp(c) && b.push(c)
        });
        return b
    }

    function kp(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Bj(a.childNodes, function(c) {
            b += kp(c)
        });
        return b
    }

    function lp(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function mp(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }
    const np = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.l = b;
            this.A = c;
            this.j = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.B)
            } catch (f) {}
            if (!b.length) return [];
            a = rb(b);
            a = mp(this, a);
            "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.A) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = jp(a[c]),
                        e = this.A;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.B,
                occurrenceIndex: this.l,
                paragraphIndex: this.A,
                ignoreMode: this.j
            })
        }
    };
    class op {
        constructor() {
            var a = N `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.j = null;
            this.l = !1;
            this.B = Math.random();
            this.A = this.ka;
            this.D = a
        }
        Od(a) {
            this.j = a
        }
        C(a) {
            this.l = a
        }
        ka(a, b, c = .01, d, e = "jserror") {
            if ((this.l ? this.B : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new xh(b, {
                context: a,
                id: e
            }));
            if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
            u.google_js_errors = u.google_js_errors || [];
            u.google_js_errors.push(b);
            u.error_rep_loaded || (Wf(u.document, Wg(this.D)), u.error_rep_loaded = !0);
            return !1
        }
        zb(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.A(a, d, .01, c, "jserror")) throw d;
            }
        }
        na(a, b) {
            return (...c) => this.zb(a, () => b.apply(void 0, c))
        }
        Za(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.ka(a, c instanceof Error ? c : Error(c))
            })
        }
    };
    const pp = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var qp = (a, b, c, d) => {
            const e = d || window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                f && queueMicrotask(() => {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                const g = Sh();
                let h, l = 3;
                try {
                    h = b.apply(this, arguments)
                } catch (k) {
                    l = 13;
                    if (!c) throw k;
                    c(a, k)
                } finally {
                    e.google_measure_js_timing && g && pp(Object.assign({}, {
                        label: a.toString(),
                        value: g,
                        duration: (Sh() || 0) - g,
                        type: l
                    }, f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return h
            }
        },
        rp = (a, b) => qp(754, a, (c, d) => {
            (new op).ka(c, d)
        }, b);

    function sp(a, b, c) {
        return qp(a, b, void 0, c).apply()
    }

    function tp(a, b) {
        return rp(a, b).apply()
    }

    function up(a) {
        if (!a) return null;
        var b = z(a, 7);
        if (z(a, 1) || a.getId() || 0 < Gc(a, 4).length) {
            var c = a.getId();
            b = Gc(a, 4);
            var d = z(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + lp(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + lp(b[c]);
            a = (b = e) ? new np(b, z(a, 2), z(a, 5), vp(z(a, 6))) : null
        } else a = b ? new np(b, z(a, 2), z(a, 5), vp(z(a, 6))) : null;
        return a
    }
    var wp = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function vp(a) {
        return null == a ? a : wp[a]
    }

    function xp(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = z(a[c], 1),
                e = z(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.Mc = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function yp(a, b) {
        var c = {};
        a && (c.Uc = z(a, 1), c.tc = z(a, 2), c.clearBoth = !!B(a, 3));
        b && (c.ec = xp(F(b, Rl, 3)), c.eb = xp(F(b, Rl, 4)));
        return c
    }
    var zp = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Ap = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const Bp = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return cp(d.document, a, null, null, this.j, b)
        }
        A() {
            return null
        }
    };
    const Cp = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < F(this.j, Tl, 9).length ? F(this.j, Tl, 9)[0] : null,
                f = yp(D(this.j, Ul, 3), e);
            if (!e) return null;
            if (e = z(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new xf(d)).createElement(g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.ec && bp(c.style, f.ec);
                d = (new xf(d)).createElement("INS");
                f.eb && bp(d.style, f.eb);
                c.appendChild(d);
                f = {
                    Ra: c,
                    ra: d
                };
                f.ra.setAttribute("data-ad-type", "text");
                f.ra.setAttribute("data-native-settings-key",
                    e);
                ep(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        A() {
            var a = 0 < F(this.j, Tl, 9).length ? F(this.j, Tl, 9)[0] : null;
            if (!a) return null;
            a = F(a, Rl, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == z(c, 1) && 0 < parseInt(z(c, 2), 10)) return parseInt(z(c, 2), 10)
            }
            return null
        }
    };
    const Dp = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const l = c.item(h);
                    "width" !== l && "height" !== l && g.push({
                        Mc: l,
                        value: c.getPropertyValue(l)
                    })
                }
                c = {
                    eb: g
                }
            } else c = {};
            a = cp(d.document, a, f, e, c, b);
            a.ra.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        A() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        rb() {
            return this.j
        }
    };
    class Ep {
        constructor(a) {
            this.l = a
        }
        j() {
            return new kl([], {
                google_ad_type: this.l,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const Fp = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        l() {
            return this.A
        }
        j(a) {
            a = this.B.query(a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function Gp(a, b, c) {
        const d = [];
        for (let r = 0; r < a.length; r++) {
            var e = a[r];
            var f = r,
                g = b,
                h = c,
                l = e.aa();
            if (l) {
                var k = up(l);
                if (k) {
                    var m = zp[e.l()],
                        n = void 0 === m ? null : m;
                    if (null === n) e = null;
                    else {
                        m = (m = D(e, Ul, 3)) ? B(m, 3) : null;
                        k = new Fp(k, n);
                        n = Gc(e, 10).slice(0);
                        Bc(l, 5) && n.push(1);
                        var p = h ? h : {};
                        h = z(e, 12);
                        l = Cc(e, 4) ? D(e, il, 4) : null;
                        1 == z(e, 8) || 2 == z(e, 8) && U(Dn) ? (p = p.ve || null, e = new Hp(k, new Bp(yp(D(e, Ul, 3), null)), p, m, 0, n, l, g, f, h, e)) : e = 2 == z(e, 8) ? new Hp(k, new Cp(e), p.We || new Ep("text"), m, 1, n, l, g, f, h, e) : null
                    }
                } else e = null
            } else e =
                null;
            null !== e && d.push(e)
        }
        return d
    }

    function Ip(a) {
        return a.B
    }

    function Jp(a) {
        return a.Z
    }

    function Kp(a) {
        return a.D instanceof Dp ? a.D.rb() : null
    }

    function Lp(a, b, c) {
        Dj(a.L, b) || a.L.set(b, []);
        a.L.get(b).push(c)
    }

    function Mp(a) {
        return Um(a.j.document, a.I || !1)
    }

    function Np(a) {
        return a.D.A(a.j)
    }

    function Op(a, b = null, c = null) {
        return new Hp(a.F, b || a.D, c || a.M, a.I, a.Ta, a.Hc, a.lc, a.j, a.W, a.G, a.A, a.C, a.O)
    }
    class Hp {
        constructor(a, b, c, d, e, f, g, h, l, k = null, m = null, n = null, p = null) {
            this.F = a;
            this.D = b;
            this.M = c;
            this.I = d;
            this.Ta = e;
            this.Hc = f;
            this.lc = g ? g : new il;
            this.j = h;
            this.W = l;
            this.G = k;
            this.A = m;
            (a = !m) || (a = !(m.aa() && null != z(m.aa(), 5)));
            this.Z = !a;
            this.C = n;
            this.O = p;
            this.J = [];
            this.B = !1;
            this.L = new Hj
        }
        T() {
            return this.j
        }
        l() {
            return this.F.l()
        }
    };
    var Pp = a => (null == a ? 0 : a.google_ad_slot) ? Pk(new al(1, {
            ee: a.google_ad_slot
        })) : Rk("Missing dimension when creating placement id"),
        Rp = a => {
            switch (a.Ta) {
                case 0:
                case 1:
                    var b = a.A;
                    null == b ? a = null : (a = b.aa(), null == a ? a = null : (b = b.l(), a = null == b ? null : new al(0, {
                        bd: [a],
                        Jd: b
                    })));
                    return null != a ? Pk(a) : Rk("Missing dimension when creating placement id");
                case 2:
                    return a = Qp(a), null != a ? Pk(a) : Rk("Missing dimension when creating placement id");
                default:
                    return Rk("Invalid type: " + a.Ta)
            }
        };
    const Qp = a => {
        if (null == a || null == a.C) return null;
        const b = D(a.C, $k, 1),
            c = D(a.C, $k, 2);
        if (null == b || null == c) return null;
        const d = a.O;
        if (null == d) return null;
        a = a.l();
        return null == a ? null : new al(0, {
            bd: [b, c],
            Ve: d,
            Jd: Ap[a]
        })
    };

    function Sp(a) {
        const b = Kp(a.V);
        return (b ? Pp(b) : Rp(a.V)).map(c => dl(c))
    }

    function Tp(a) {
        a.j = a.j || Sp(a);
        return a.j
    }

    function Up(a, b) {
        if (a.V.B) throw Error("AMA:AP:AP");
        Io(b, a.aa(), a.V.l());
        a = a.V;
        a.B = !0;
        null != b && a.J.push(b)
    }
    const Vp = class {
        constructor(a, b, c) {
            this.V = a;
            this.l = b;
            this.X = c;
            this.j = null
        }
        aa() {
            return this.l
        }
        fill(a, b) {
            var c = this.V;
            (a = c.D.l(a, b, this.l, c.j)) && Up(this, a.Ra);
            return a
        }
    };
    const Wp = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = Xa(b, "&") ? rf(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && Jj.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Wp(a, b[c])) return !0
        }
        return !1
    };
    var Xp = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const Yp = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return cp(d.document, a, null, null, this.j, b)
        }
        A(a) {
            return Xp(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };
    class Zp {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = Xp(a);
            return new kl(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.l,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const $p = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        j() {
            return this.B
        }
        l() {
            return this.A
        }
    };
    const aq = {
        TABLE: {
            kb: new Ok([1, 2])
        },
        THEAD: {
            kb: new Ok([0, 3, 1, 2])
        },
        TBODY: {
            kb: new Ok([0, 3, 1, 2])
        },
        TR: {
            kb: new Ok([0, 3, 1, 2])
        },
        TD: {
            kb: new Ok([0, 3])
        }
    };

    function bq(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = ib(e, f), 0 > c || b.push(new cq(a, [f], c, f, 3, Kf(f).trim(), d));
        return b
    }

    function dq(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            l = "";
        for (let n = 0; n < g; n++) {
            var k = f[n];
            if (1 == k.nodeType || 3 == k.nodeType) {
                a: {
                    var m = k;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const p = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == p || "inline-block" == p ? null : m
                }
                m ? (d.length && l && e.push(new cq(a, d, n - 1, m, 0, l, c)), d = [], h = n + 1, l = "") : (d.push(k), k = Kf(k).trim(), l += k && l ? " " + k : k)
            }
        }
        d.length && l && e.push(new cq(a, d, h, b, 2, l, c));
        return e
    }

    function eq(a, b) {
        return a.j - b.j
    }

    function fq(a) {
        const b = hl();
        return new Hp(new $p(a.oc, a.pc), new Bp({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.A, a.j)
    }
    class cq {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.ib = b.slice(0);
            this.j = c;
            this.oc = d;
            this.pc = e;
            this.B = f;
            this.l = g
        }
        T() {
            return this.l
        }
    };

    function gq(a) {
        return qb(a.B ? dq(a.j, a.Aa, a.l) : [], a.A ? bq(a.j, a.A, a.Aa, a.l) : []).filter(b => {
            var c = b.oc.tagName;
            c ? (c = aq[c.toUpperCase()], b = null != c && c.kb.contains(b.pc)) : b = !1;
            return !b
        })
    }
    class hq {
        constructor(a, b, c) {
            this.Aa = a;
            this.A = b.Lb;
            this.B = b.nd;
            this.j = b.articleStructure;
            this.l = c
        }
    };

    function iq(a, b) {
        return tp(() => {
            const c = [],
                d = [];
            try {
                var e = [];
                for (var f = 0; f < a.length; f++) {
                    var g = a[f],
                        h = g.F.j(g.j);
                    h && e.push({
                        Gd: g,
                        anchorElement: h
                    })
                }
                for (g = 0; g < e.length; g++) {
                    f = d;
                    var l = f.push; {
                        var k = e[g];
                        const x = k.anchorElement,
                            w = k.Gd;
                        var m = w.I,
                            n = w.j.document.createElement("div");
                        n.className = "google-auto-placed";
                        var p = n.style;
                        p.textAlign = "center";
                        p.width = "100%";
                        p.height = "0px";
                        p.clear = m ? "both" : "none";
                        h = n;
                        try {
                            Io(h, x, w.l());
                            var r = h
                        } catch (G) {
                            throw Wm(h), G;
                        }
                    }
                    l.call(f, r)
                }
                const v = tj(b),
                    t = uj(b);
                for (k = 0; k < d.length; k++) {
                    l =
                        t;
                    r = v;
                    const x = d[k].getBoundingClientRect(),
                        w = e[k];
                    c.push(new Vp(w.Gd, w.anchorElement, new zk(x.left + l, x.top + r, x.right - x.left)))
                }
            } finally {
                for (e = 0; e < d.length; e++) Wm(d[e])
            }
            return c
        }, b)
    };

    function jq(a, b) {
        const c = gq(b);
        c.sort(eq);
        return new kq(a, b, c)
    }

    function lq(a, b, c) {
        return new Hp(new $p(b, c), new Bp({}), null, !0, 2, [], null, a.j, null, null, null, a.C.j, null)
    }
    var kq = class {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.B = c;
            this.l = !1;
            this.A = 0
        }
        next() {
            if (!this.l) {
                if (this.A >= this.B.length) var a = null;
                else {
                    {
                        const b = this.B[this.A++].ib[0];
                        va(b) && 1 == b.nodeType ? a = lq(this, b, 0) : (a = this.j.document.createElement("div"), M(a, {
                            display: "none"
                        }), b.parentNode.insertBefore(a, b), a = lq(this, a, 3))
                    }
                    a = iq([a], this.j)[0] || null
                }
                if (a) return a;
                this.l = !0
            }
            return null
        }
    };
    var mq = class {
        constructor(a) {
            this.l = a
        }
        j() {
            return this.l.next()
        }
    };
    const nq = {
            1: "0.5vp",
            2: "300px"
        },
        oq = {
            1: 700,
            2: 1200
        },
        pq = {
            [1]: {
                Rd: "3vp",
                Rc: "1vp",
                Qd: "0.3vp"
            },
            [2]: {
                Rd: "900px",
                Rc: "300px",
                Qd: "90px"
            }
        };

    function qq(a, b, c) {
        var d = rq(a),
            e = Q(a).clientHeight || oq[d],
            f = void 0;
        c && (f = (c = (c = sq(F(c, Al, 2), d)) ? D(c, Cl, 7) : void 0) ? tq(c, e) : void 0);
        c = f;
        f = rq(a);
        a = Q(a).clientHeight || oq[f];
        const g = uq(pq[f].Rc, a);
        a = null === g ? vq(f, a) : new wq(g, g, xq(g, g, 8), 8, .3, c);
        c = uq(pq[d].Rd, e);
        f = uq(pq[d].Rc, e);
        e = uq(pq[d].Qd, e);
        d = a.A;
        c && e && f && void 0 !== b && (d = .5 >= b ? f + (1 - 2 * b) * (c - f) : e + (2 - 2 * b) * (f - e));
        b = d;
        return new wq(d, b, xq(d, b, a.l), a.l, a.B, a.j)
    }

    function yq(a, b) {
        const c = rq(a);
        a = Q(a).clientHeight || oq[c];
        if (b = sq(F(b, Al, 2), c))
            if (b = zq(b, a)) return b;
        return vq(c, a)
    }

    function Aq(a) {
        const b = rq(a);
        return vq(b, Q(a).clientHeight || oq[b])
    }

    function Bq(a, b) {
        let c = {
            cc: a.A,
            Xa: a.C
        };
        for (let d of a.D) d.adCount <= b && (c = d.Qc);
        return c
    }

    function Cq(a, b, c) {
        var d = B(b, 2);
        b = D(b, Al, 1);
        const e = Q(c).clientHeight || oq[rq(c)];
        var f;
        c = null != (f = uq(null == b ? void 0 : z(b, 2), e)) ? f : a.A;
        let g;
        f = null != (g = uq(null == b ? void 0 : z(b, 5), e)) ? g : a.C;
        var h;
        d = d ? [] : null != (h = Dq(null == b ? void 0 : F(b, Bl, 3), e)) ? h : a.D;
        var l;
        h = null != (l = null == b ? void 0 : z(b, 4)) ? l : a.l;
        var k;
        l = null != (k = null == b ? void 0 : Hc(b, 6)) ? k : a.B;
        let m;
        k = null != (m = (null == b ? 0 : Cc(b, 7)) ? tq(D(b, Cl, 7), e) : null) ? m : a.j;
        return new wq(c, f, d, h, l, k)
    }
    class wq {
        constructor(a, b, c, d, e, f) {
            this.A = a;
            this.C = b;
            this.D = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.B = e;
            this.j = f
        }
    }

    function sq(a, b) {
        for (let c of a)
            if (z(c, 1) == b) return c;
        return null
    }

    function Dq(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = z(d, 1);
            const e = uq(z(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                Qc: {
                    cc: e,
                    Xa: uq(z(d, 3), b)
                }
            })
        }
        return c
    }

    function zq(a, b) {
        const c = uq(z(a, 2), b),
            d = uq(z(a, 5), b);
        if (null === c) return null;
        const e = z(a, 4);
        if (null == e) return null;
        var f = F(a, Bl, 3);
        f = Dq(f, b);
        if (null === f) return null;
        const g = D(a, Cl, 7);
        return new wq(c, d, f, e, Hc(a, 6), g ? tq(g, b) : void 0)
    }

    function vq(a, b) {
        a = uq(nq[a], b);
        return new wq(null === a ? Infinity : a, null, [], 3, null)
    }

    function uq(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function rq(a) {
        a = 900 <= Q(a).clientWidth;
        return Pf() && !a ? 1 : 2
    }

    function xq(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            Qc: {
                cc: 2 * a,
                Xa: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            Qc: {
                cc: 3 * a,
                Xa: 3 * b
            }
        }]
    }

    function tq(a, b) {
        return {
            Ad: uq(z(a, 2), b) || 0,
            yd: z(a, 3) || 1,
            gb: uq(z(a, 1), b) || 0
        }
    };

    function Eq(a, b, c) {
        return dj({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function Fq(a) {
        if (!a.length) return null;
        const b = ej(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new Gq(b, a)
    }
    class Gq {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function Hq(a = window) {
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };
    var Nq = (a, b) => {
        const c = rb(b.document.querySelectorAll(".google-auto-placed")),
            d = Iq(b),
            e = Jq(b),
            f = Kq(b),
            g = Lq(b),
            h = rb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = rb(b.document.querySelectorAll("div.googlepublisherpluginad")),
            k = rb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(rb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), rb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, p] of [
                [a.Sb, c],
                [a.Sa, d],
                [a.Te, e],
                [a.Tb, f],
                [a.Ub, g],
                [a.Re, h],
                [a.Se, l],
                [a.Ue, k]
            ]) a = p, !1 === n ? b = b.concat(a) : m = m.concat(a);
        a = Mq(m);
        b = Mq(b);
        a = a.slice(0);
        for (const n of b)
            for (b = 0; b < a.length; b++)(n.contains(a[b]) || a[b].contains(n)) && a.splice(b, 1);
        return a
    };
    const Oq = a => {
            const b = Hq(a);
            return b ? kb(lb(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        Iq = a => rb(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
        Jq = a => rb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        Kq = a => (Oq(a) || rb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(rb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        Lq = a => rb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var Mq = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var Pq = Hi.na(453, Nq),
        Qq;
    Qq = Hi.na(454, (a, b) => {
        const c = rb(b.document.querySelectorAll(".google-auto-placed")),
            d = Iq(b),
            e = Jq(b),
            f = Kq(b),
            g = Lq(b),
            h = rb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = rb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = rb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return Mq([].concat(!0 === a.Sb ? c : [], !0 === a.Sa ? d : [], !0 === a.Te ? e : [], !0 === a.Tb ? f : [], !0 === a.Ub ? g : [], !0 === a.Re ? h : [], !0 === a.Se ? l : [], !0 === a.Ue ? b : []))
    });

    function Rq(a, b, c) {
        const d = Sq(a);
        b = Tq(d, b, c);
        return new Uq(a, d, b)
    }

    function Vq(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function Wq(a) {
        return a.j.map(b => b.box)
    }

    function Xq(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class Uq {
        constructor(a, b, c) {
            this.A = a;
            this.j = b.slice(0);
            this.B = c.slice(0);
            this.l = null
        }
    }

    function Sq(a) {
        const b = Pq({
                Sa: !1
            }, a),
            c = uj(a),
            d = tj(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && Xa(e.className, "google-auto-placed")) || Vq(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                vj: e ? 1 : 0
            } : null
        }).filter(Be(e => null === e))
    }

    function Tq(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? Yq(a, b) : lb(a, d => new Gq(d.box, 1))
    }

    function Yq(a, b) {
        a = lb(a, d => new Gq(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (Eq(d, a[f], b)) {
                        d = Fq([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function Zq(a, b, c) {
        const d = yk(c, b);
        return !nb(a, e => dj(e, d))
    }

    function $q(a, b, c, d, e) {
        e = e.X;
        const f = yk(e, b),
            g = yk(e, c),
            h = yk(e, d);
        return !nb(a, l => dj(l, g) || dj(l, f) && !dj(l, h))
    }

    function ar(a, b, c, d) {
        const e = Wq(a);
        if (Zq(e, b, d.X)) return !0;
        if (!$q(e, b, c.Ad, c.gb, d)) return !1;
        const f = new Gq(yk(d.X, 0), 1);
        a = kb(a.B, g => Eq(g, f, c.gb));
        b = mb(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.yd ? !1 : !0
    };
    var br = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function cr(a, b) {
        const c = new Wk,
            d = new Ij;
        b.forEach(e => {
            if (Qc(e, Kl, 1, Nl)) {
                e = Qc(e, Kl, 1, Nl);
                if (D(e, Il, 1) && D(e, Il, 1).aa() && D(e, Il, 2) && D(e, Il, 2).aa()) {
                    const g = dr(a, D(e, Il, 1).aa()),
                        h = dr(a, D(e, Il, 2).aa());
                    if (g && h)
                        for (var f of br({
                                anchor: g,
                                position: D(e, Il, 1).l()
                            }, {
                                anchor: h,
                                position: D(e, Il, 2).l()
                            })) c.set(wa(f.anchor), f.position)
                }
                D(e, Il, 3) && D(e, Il, 3).aa() && (f = dr(a, D(e, Il, 3).aa())) && c.set(wa(f), D(e, Il, 3).l())
            } else Qc(e, Ll, 2, Nl) ? er(a, Qc(e, Ll, 2, Nl), c) : Qc(e, Ml, 3, Nl) && fr(a, Qc(e, Ml, 3, Nl), d)
        });
        return new gr(c, d)
    }
    class gr {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const er = (a, b, c) => {
            D(b, $k, 1) && (a = hr(a, D(b, $k, 1))) && a.forEach(d => {
                d = wa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        fr = (a, b, c) => {
            D(b, $k, 1) && (a = hr(a, D(b, $k, 1))) && a.forEach(d => {
                c.add(wa(d))
            })
        },
        dr = (a, b) => (a = hr(a, b)) && 0 < a.length ? a[0] : null,
        hr = (a, b) => (b = up(b)) ? b.query(a) : null;

    function ir(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (jr(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.j.add(d));
        return !1
    }

    function kr(a) {
        a = lr(a);
        return a.has("all") || a.has("after")
    }

    function mr(a) {
        a = lr(a);
        return a.has("all") || a.has("before")
    }

    function lr(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function jr(a) {
        const b = lr(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var nr = class {
        constructor() {
            this.j = new Set
        }
    };

    function or(a) {
        return function(b) {
            return iq(b, a)
        }
    }

    function pr(a) {
        const b = Q(a).clientHeight;
        return b ? Ca(qr, b + tj(a)) : ye
    }

    function rr(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return ye;
        const d = Wq(c || Rq(b));
        return e => Zq(d, a, e.X)
    }

    function sr(a, b, c, d) {
        if (0 > a || 0 > b.Ad || 0 > b.yd || 0 > b.gb) throw Error("ama::ead:nd");
        return Infinity === a ? ye : e => ar(d || Rq(c, b.gb), a, b, e)
    }

    function tr(a) {
        if (!a.length) return ye;
        const b = new Ok(a);
        return c => b.contains(c.Ta)
    }

    function ur(a) {
        return function(b) {
            for (let c of b.Hc)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function vr(a) {
        return a.length ? function(b) {
            const c = b.Hc;
            return a.some(d => -1 < c.indexOf(d))
        } : ze
    }

    function wr(a, b) {
        if (0 >= a) return ze;
        const c = Q(b).scrollHeight - a;
        return function(d) {
            return d.X.j <= c
        }
    }

    function xr(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[z(c.lc, 2) || 0]
        }
    }

    function yr(a) {
        return a.length ? b => a.includes(z(b.lc, 1) || 0) : ze
    }

    function zr(a, b) {
        const c = cr(a, b);
        return function(d) {
            var e = d.aa();
            d = Ap[d.V.l()];
            var f = wa(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(wa(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(wa(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Ar() {
        const a = new nr;
        return function(b) {
            var c = b.aa();
            b = Ap[b.V.l()];
            a: switch (b) {
                case 1:
                    var d = kr(c.previousElementSibling) || mr(c);
                    break a;
                case 4:
                    d = kr(c) || mr(c.nextElementSibling);
                    break a;
                case 2:
                    d = mr(c.firstElementChild);
                    break a;
                case 3:
                    d = kr(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + b);
            }
            return !(d || ir(a, c, b))
        }
    }
    const qr = (a, b) => b.X.j >= a,
        Br = (a, b, c) => {
            c = c.X.l;
            return a <= c && c <= b
        };
    var Cr = class {
        constructor(a, b) {
            this.A = a;
            this.l = b
        }
        j() {
            const a = pr(this.A);
            let b = this.l.next();
            for (; b;) {
                if (a(b)) return b;
                b = this.l.next()
            }
            return null
        }
    };
    var Dr = class {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = new Wl;
            var b = D(this.A.j, $k, 1);
            a = Nc(a, 1, b);
            a = A(a, 2, 2);
            a = A(a, 8, 1);
            a = Gp([a], this.l);
            return iq(a, this.l)[0] || null
        }
    };

    function Er(a, b) {
        if (!b) return !1;
        const c = wa(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = Er(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function Fr(a, b) {
        return nb(b.ib, c => Er(a, c))
    }
    class Gr {
        constructor(a) {
            this.j = new Hj;
            this.l = a
        }
    };
    class Hr {
        constructor(a, b) {
            this.B = a;
            this.j = [];
            this.l = [];
            this.A = b
        }
    };
    var Jr = (a, {
            yj: b = !1,
            zj: c = 3,
            Cf: d = null
        } = {}) => {
            a = gq(a);
            return Ir(a, b, c, d)
        },
        Ir = (a, b = !1, c = 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(eq);
            a = [];
            b = new Hr(b, d);
            for (const k of e) {
                d = b;
                e = {
                    ic: k,
                    Vb: 51 > k.B.length ? !1 : null != d.A ? !Fr(d.A, k) : !0
                };
                if (d.B || e.Vb) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].ic;
                        b: {
                            var g = f.T();
                            var h = f.ib[f.ib.length - 1];f = e.ic.ib[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var l = h.parentElement;
                            const m = f.parentElement;
                            if (l && m && l == m) {
                                l = 0;
                                for (h = h.nextSibling; 10 >
                                    l && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (Wp(g, h)) break;
                                    h = h.nextSibling;
                                    l++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.Vb && d.l.push(e.ic)) : (d.j = [e], d.l = e.Vb ? [e.ic] : [])
                }
                if (b.l.length >= c) {
                    if (1 >= b.l.length) d = null;
                    else {
                        e = b.l[1];
                        for (d = b; d.j.length && !d.j[0].Vb;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var Lr = (a, b) => {
            a = Kr(a, b);
            const c = new Gr(b);
            return Jk(a, d => Jr(d, {
                Cf: c
            }))
        },
        Kr = (a, b) => {
            const c = new Hj;
            a.forEach(d => {
                var e = up(D(d, $k, 1));
                if (e) {
                    const f = e.toString();
                    Dj(c, f) || c.set(f, {
                        articleStructure: d,
                        le: e,
                        Lb: null,
                        nd: !1
                    });
                    e = c.get(f);
                    (d = (d = D(d, $k, 2)) ? z(d, 7) : null) ? e.Lb = e.Lb ? e.Lb + "," + d : d: e.nd = !0
                }
            });
            return Gj(c).map(d => {
                const e = d.le.query(b.document);
                return e.length ? new hq(e[0], d, b) : null
            }).filter(d => null != d)
        };
    const Mr = a => {
            a = a.Aa.getBoundingClientRect();
            return 0 < a.width && 0 < a.height
        },
        Nr = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.Aa.getBoundingClientRect().width));
            return c => c.Aa.getBoundingClientRect().width > .5 * b
        },
        Or = a => {
            const b = Q(a).clientHeight || 0;
            return c => c.Aa.getBoundingClientRect().height >= .75 * b
        },
        Pr = (a, b) => a.Aa.getBoundingClientRect().top - b.Aa.getBoundingClientRect().top;
    const Qr = (a, b, c) => {
            a = a.createElement("script");
            xe(a, zd(dd(c)));
            a.setAttribute("async", "true");
            b.appendChild(a)
        },
        Rr = {
            [1]: "out-of-view"
        };
    class Sr {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.j = b
            })
        }
    };

    function Tr() {
        const {
            promise: a,
            resolve: b
        } = new Sr;
        return {
            promise: a,
            resolve: b
        }
    };

    function Ur(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = Tr();
        b[a] = d;
        c();
        return d
    }

    function Wr(a, b, c) {
        return Ur(a, b, () => {
            Wf(b.document, c)
        }).promise
    };

    function Xr(a, b, c) {
        a = Wr(7, a, c).then(d => {
            d.init(b);
            d.handleAdConfig({
                preloadAdBreaks: "on",
                sound: "on"
            });
            return d
        });
        Hi.Za(915, a);
        return new Yr(a)
    }

    function Zr(a, b) {
        if (!a.j) {
            var c = a.l.then(d => {
                d.handleAdBreak({
                    type: "preroll",
                    name: "audiosense-preroll",
                    adBreakDone: b
                })
            });
            Hi.Za(956, c);
            a.j = !0
        }
    }
    var Yr = class {
        constructor(a) {
            this.l = a;
            this.j = !1
        }
    };

    function $r(a, b, c, d, e) {
        let f;
        const g = null == (f = D(c, Pl, 6)) ? void 0 : F(f, Ql, 1);
        return g && 0 != g.length ? (c = D(c, ol, 27)) ? D(c, pl, 2) ? Pk(new as(a, b, g, c, d, e)) : Rk("No AudioSenseConfig.PlacementConfig found") : Rk("No AudioSenseConfig found") : Rk("No ArticleStructure found")
    }

    function bs(a) {
        a.l.addEventListener("playing", () => {
            a.D.j || (a.l.pause(), Zr(a.D, () => a.l.play()), Qm(a.j, "play", {}))
        })
    }

    function cs(a) {
        return (a = D(a.A, rl, 3)) ? F(a, sl, 1).some(b => 1 === C(b, 1, 0)) : !1
    }
    var as = class {
        constructor(a, b, c, d, e, f) {
            this.B = a;
            this.j = new Rm(a, b, d);
            this.F = c;
            this.A = d;
            this.C = e;
            this.G = f;
            this.l = this.D = null
        }
    };
    const ds = ["-webkit-text-fill-color"];

    function es(a) {
        if (Db) {
            {
                const c = Yf(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = fs(a)
                } else a = gs()
            }
        } else a = gs();
        return a
    }
    var gs = () => {
        const a = {
            all: "initial"
        };
        jb(ds, b => {
            a[b] = "unset"
        });
        return a
    };

    function fs(a) {
        jb(ds, b => {
            delete a[b]
        });
        return a
    };
    class hs {
        constructor(a) {
            this.j = a
        }
        sa(a) {
            const b = a.document.createElement("div");
            M(b, es(a));
            M(b, {
                width: "100%",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            M(c, es(a));
            c.className = "auto-prose-searchbox-wrapper";
            c.appendChild(b);
            return c
        }
    };
    var is = {},
        js = {},
        ks = {},
        ls = {},
        ms = {};

    function ns() {
        throw Error("Do not instantiate directly");
    }
    ns.prototype.gd = null;
    ns.prototype.sa = function() {
        return this.content
    };
    ns.prototype.toString = function() {
        return this.content
    };

    function os(a) {
        if (a.hd !== is) throw Error("Sanitized content was not of kind HTML.");
        return fe(a.toString())
    }

    function ps() {
        ns.call(this)
    }
    Fa(ps, ns);
    ps.prototype.hd = is;

    function qs(a, b) {
        return null != a && a.hd === b
    };

    function rs(a) {
        if (null != a) switch (a.gd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function ss(a) {
        return qs(a, is) ? a : a instanceof de ? ts(ce(a).toString()) : a instanceof de ? ts(ce(a).toString()) : ts(String(String(a)).replace(us, vs), rs(a))
    }
    var ts = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.gd = d);
            return c
        }
    }(ps);

    function ws(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function xs(a) {
        return qs(a, is) ? String(String(a.sa()).replace(ys, "").replace(zs, "&lt;")).replace(As, vs) : String(a).replace(us, vs)
    }

    function Bs(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let l = 0; l < g; l++) {
                var h = e[f + l];
                if (d[l] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function Cs(a) {
        if (null == a) return " null ";
        if (qs(a, js)) return a.sa();
        if (a instanceof td || a instanceof td) return sd(a).toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Ds, Es) + "'"
        }
    }

    function W(a) {
        qs(a, ms) ? a = ws(a.sa()) : null == a ? a = "" : a instanceof Pd ? a = ws(Od(a)) : a instanceof Pd ? a = ws(Od(a)) : a instanceof ae ? a = ws($d(a)) : a instanceof ae ? a = ws($d(a)) : (a = String(a), a = Fs.test(a) ? a : "zSoyz");
        return a
    }
    const Gs = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function vs(a) {
        return Gs[a]
    }
    const Hs = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function Es(a) {
        return Hs[a]
    }
    const Is = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Js(a) {
        return Is[a]
    }
    const us = /[\x00\x22\x26\x27\x3c\x3e]/g,
        As = /[\x00\x22\x27\x3c\x3e]/g,
        Ds = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        Ks = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Fs = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Ls =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function Ms(a) {
        return String(a).replace(Ks, Js)
    }
    const ys = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        zs = /</g;
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var Ns = class {
        constructor(a) {
            this.j = a
        }
        init() {
            var a = ts('<style>.autoprose-input {width: 100%; padding: 0; border: none; margin: 0; height: auto; outline: none;}.autoprose-input-td {background: #fff; border-color: #bdc1c6; border-width: 1px 0 1px 1px; border-style: solid; border-radius: 24px 0 0 24px; -moz-border-radius: 24px 0 0 24px; -webkit-border-radius: 24px 0 0 24px; padding-left: 24px; width: 100%;}.autoprose-searchbox {width: 100%; padding: 0; border: none; margin: 0; height: auto; background: rgb(255, 255, 255); outline: none;}.autoprose-searchbox-clear-button {padding-right: 5px; visibility: hidden;}.autoprose-searchbox-clear-td {background: #fff; border-color: #bdc1c6; border-width: 1px 0 1px 0; border-style: solid;}.autoprose-search-button {border-color: #bdc1c6; background-color: #fff; background-image: none; font-size: 0; padding: 6px 27px; width: auto; vertical-align: middle; border: 1px solid #bdc1c6; border-radius: 0 24px 24px 0; -moz-border-radius: 0 24px 24px 0; -webkit-border-radius: 0 24px 24px 0; height: 100%;}.autoprose-searchbox-div {padding: 5px;}.autoprose-searchbox-table {height: 38px; margin-left: auto; margin-right: auto;}</style><div class="autoprose-searchbox-div"><table class="autoprose-searchbox-table" cellspacing="0" cellpadding="0"><tr><td class="autoprose-input-td"><input autocomplete="off" class="autoprose-input" dir="ltr" name="search" placeholder="Search" size="40" spellcheck="false" title="search" type="text"></td><td class="autoprose-searchbox-clear-td"><div class="autoprose-searchbox-clear-button" title="clear results"><svg width="14" height="14" viewBox="0 0 14 14" fill="none visibility: hidden;" mlns="http://www.w3.org/2000/svg" stlye="float: right;"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#80868b"/></svg></div></td><td><button class="autoprose-search-button"><svg width="13" height="13" viewBox="0 0 13 13"><title>search</title><path d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z" fill="#1a73e8"></path></svg></button></td></tr></table></div>');
            a = os(a);
            this.j.appendChild(Gf(document, a))
        }
    };

    function Os(a) {
        const b = Mp(a.A.V),
            c = a.C.sa(a.D, () => a.remove());
        b.appendChild(c);
        a.B && (b.className = a.B);
        return {
            Ie: b,
            De: c
        }
    }
    class Ps {
        constructor(a, b, c, d) {
            this.D = a;
            this.A = b;
            this.C = c;
            this.B = d || null;
            this.j = null;
            this.l = new Rj(null)
        }
        init() {
            const a = Os(this);
            this.j = a.Ie;
            Up(this.A, this.j);
            R(this.l, a.De)
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            R(this.l, null)
        }
        G() {
            return this.l
        }
    };

    function Qs(a) {
        var b;
        let c;
        const d = Rs(a.l, F(a.j, Wl, 1), null == (b = D(a.j, wl, 31)) ? void 0 : null == (c = D(b, xl, 2)) ? void 0 : C(c, 1, 0));
        if (d) {
            var e;
            null == (e = D(a.j, wl, 31)) || D(e, ul, 5);
            b = a.l.document.createElement("div");
            (new Ps(a.l, d, new hs(b))).init();
            var f;
            (new Ns(b, null == (f = D(a.j, wl, 31)) ? void 0 : D(f, vl, 4))).init()
        }
    }
    var Ss = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };

    function Rs(a, b, c) {
        b = b.filter(d => {
            a: {
                var e = z(D(d, il, 4), 1);
                switch (c) {
                    case 1:
                        e = 4 === e || 2 === e;
                        break a;
                    case 2:
                        e = 5 === e || 3 === e;
                        break a;
                    default:
                        e = !1
                }
            }
            d = 1 === z(d, 8);
            return e && d
        });
        b = Gp(b, a);
        a = iq(b, a);
        a.sort(Ts);
        b = [1, 3].includes(c) ? 0 : a.length - 1;
        return a[b] || null
    }

    function Ts(a, b) {
        return a.X.j - b.X.j
    };
    var Us = class {
        constructor(a) {
            this.j = a
        }
        sa(a) {
            const b = a.document.createElement("div");
            M(b, es(a));
            M(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            M(c, es(a));
            M(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var Vs = (a, b) => (b = D(b, Pl, 6)) ? Lr(F(b, Ql, 1), a).map(c => fq(c)) : [];

    function Ws(a, b, c) {
        a.Ca.contentWindow.google.search.cse.element.getElement("auto-rs-prose").execute(b, void 0, {
            rsToken: c,
            afsExperimentId: a.A
        })
    }
    var Xs = class {
        constructor(a, b, c, d, e, f) {
            this.Ca = a;
            this.l = "9d449ff4a772956c6";
            this.j = b;
            this.host = c;
            this.language = d;
            this.B = e;
            this.A = f
        }
        init() {
            this.Ca.setAttribute("id", "prose-iframe");
            this.Ca.setAttribute("width", "100%");
            this.Ca.setAttribute("height", "100%");
            var a = this.Ca,
                b = Qd({
                    "box-sizing": "border-box",
                    border: "unset"
                });
            a.style.cssText = Od(b);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var c = Kd(a) || Md;
            a = this.j;
            b = this.host;
            var d = this.language,
                e = this.B.replace("${website}",
                    this.host.startsWith("www.") ? this.host.slice(4) : this.host),
                f = ts;
            qs(c, ks) || qs(c, ls) ? c = Ms(c) : c instanceof Fd ? c = Ms(Gd(c)) : c instanceof Fd ? c = Ms(Gd(c)) : c instanceof vd ? c = Ms(yd(c).toString()) : c instanceof vd ? c = Ms(yd(c).toString()) : (c = String(c), c = Ls.test(c) ? c.replace(Ks, Js) : "about:invalid#zSoyz");
            a = f('<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; height: 16px; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}</style><img class="cse-favicon" src="' +
                xs(c) + '" alt="' + xs(b) + ' icon"><p class="cse-header"><strong>' + ss(e) + '</strong></p><div class="gcse-search" data-gname="' + xs("auto-rs-prose") + '" data-adclient="' + xs(a) + '" data-adchannel="AutoRsVariant" data-as_sitesearch="' + xs(b) + '" data-gl="' + xs(d) + '" data-personalizedAds="false"></div>');
            a = os(a);
            b = {
                style: Qd({
                    margin: 0
                })
            };
            d = {
                src: Bd(ed("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                    cxId: this.l,
                    lang: this.language
                })
            };
            e = {};
            f = {};
            for (g in d) Object.prototype.hasOwnProperty.call(d, g) && (f[g] =
                d[g]);
            for (const h in e) Object.prototype.hasOwnProperty.call(e, h) && (f[h] = e[h]);
            var g = je("script", f);
            g = ge("body", b, [a, g]);
            this.Ca.srcdoc = ce(g)
        }
    };

    function Ys(a, b) {
        return new Zs(a, b)
    }

    function $s(a) {
        const b = at(a);
        jb(a.j.maxZIndexListeners, c => c(b))
    }

    function at(a) {
        a = ag(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class bt {
        constructor(a) {
            this.j = ij(a).floatingAdsStacking
        }
        addListener(a) {
            this.j.maxZIndexListeners.push(a);
            a(at(this))
        }
    }

    function ct(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.A;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            $s(b);
            a.j = d
        }
    }

    function dt(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            $s(b);
            a.j = null
        }
    }
    class Zs {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.j = null
        }
    };

    function et(a) {
        L(a.l, "click", () => ft(a));
        L(a.F, "click", () => void ft(a));
        const b = a.width / a.win.innerWidth;
        L(a.win, "resize", () => {
            a.width = Math.floor(b * a.win.innerWidth);
            a.j.style.width = `${a.width}px`;
            a.j.style.height = `${a.win.innerHeight}px`;
            a.l.style.width = `${a.win.innerWidth}px`;
            a.l.style.height = `${a.win.innerHeight}px`;
            a.C && (a.B.style.transform = `translateX(${a.width}px)`)
        })
    }

    function ft(a) {
        a.C = !0;
        a.j.scrollTop = 0;
        a.B.style.transitionDuration = ".5s";
        a.B.style.transform = `translateX(${a.width}px)`;
        a.l.style.opacity = "0";
        a.A.style.transitionDelay = ".5s";
        xb(a.A.offsetWidth);
        a.A.style.visibility = "hidden";
        setTimeout(() => {
            a.win.document.documentElement.style.overflow = ""
        }, 500);
        for (const b of a.G) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }
    var gt = class {
        constructor(a, b) {
            this.win = a;
            this.width = b;
            this.G = [];
            this.C = !0;
            b = new xf(a.document);
            this.l = b.ha("DIV", {
                "class": "adpub-drawer-modal-background"
            });
            var c = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
            c.setAttribute("viewBox", "0 0 24 24");
            var d = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
            d.setAttribute("fill", "#5f6368");
            d.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z");
            c.appendChild(d);
            this.F = b.ha("DIV", {
                "class": "adpub-drawer-close-button"
            }, c);
            this.j = b.ha("DIV", {
                "class": "adpub-drawer-contents"
            });
            this.B = b.ha("DIV", {
                "class": "adpub-drawer"
            }, this.F, this.j);
            this.A = b.ha("DIV", {
                "class": "adpub-drawer-container"
            }, this.l, this.B);
            this.D = b.ha("DIV", {
                "class": "adpub-drawer-root"
            });
            c = this.D.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.win.innerHeight - 5;
            var f = this.width,
                g = a.innerWidth;
            e = ts("<style>.adpub-drawer-container {height: 100%; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " +
                W(100002) + ";}.adpub-drawer-modal-background {background-color: black; height: " + W(e + 5) + "px; opacity: 0; position: absolute; transition: opacity .5s ease-in-out; width: " + W(g) + "px;}.adpub-drawer {position: absolute; transform: translateX(" + W(f) + "px); transition: transform .5s ease-in-out; height: 100%; overflow: auto; right: 0; border-radius: 20px 0 0 20px;}.adpub-drawer-close-button {color: #5f6368; height: 24px; width: 24px; top: 20px; right: 20px; position: fixed; cursor: pointer;}.adpub-drawer-contents {background: white; height: " +
                W(e) + "px; overflow-y: auto; padding-top: " + W(5) + "px; width: " + W(f) + "px;}</style>");
            d.call(c, Of(b, os(e)));
            c.appendChild(this.A);
            M(this.D, es(a))
        }
        init() {
            this.win.document.body.appendChild(this.D);
            et(this)
        }
        Z(a) {
            for (; this.j.firstChild;) this.j.removeChild(this.j.firstChild);
            this.j.appendChild(a)
        }
        show() {
            this.C = !1;
            this.win.document.documentElement.style.overflow = "hidden";
            this.A.style.transitionDelay = "0s";
            this.A.style.visibility = "visible";
            this.l.style.opacity = ".5";
            this.B.style.transform = "translateX(0)"
        }
        pa(a) {
            this.G.push(a)
        }
    };

    function ht(a) {
        L(a.J, "click", () => it(a));
        L(a.B, "mousedown", () => {
            const d = f => {
                    jt(a, f.movementY)
                },
                e = () => {
                    kt(a);
                    Ke(a.B, "mousemove", d);
                    Ke(a.B, "mouseup", e);
                    Ke(a.B, "mouseleave", e)
                };
            L(a.B, "mousemove", d);
            L(a.B, "mouseup", e);
            L(a.B, "mouseleave", e)
        });
        L(a.j, "touchstart", d => {
            let e = d.touches[0];
            const f = h => {
                    const l = h.touches[0];
                    0 === lt(a) ? a.l.classList.add("scrollable") : a.l.classList.remove("scrollable");
                    if (e) {
                        var k = 0 === lt(a) && a.l.scrollTop;
                        const m = l.target === a.B || l.target.parentElement === a.B;
                        if (!k || m) k = l.screenY - e.screenY,
                            jt(a, k), k = 0 < k && 0 === a.l.scrollTop, k = a.I && !k, h.cancelable && !k && h.preventDefault()
                    }
                    e = l
                },
                g = () => {
                    kt(a);
                    Ke(a.j, "touchmove", f);
                    Ke(a.j, "touchend", g);
                    Ke(a.j, "touchcancel", g)
                };
            L(a.j, "touchmove", f, {
                passive: !1
            });
            L(a.j, "touchend", g);
            L(a.j, "touchcancel", g)
        });
        L(a.C, "touchstart", () => {});
        const b = a.A / a.win.innerHeight,
            c = a.G / a.A;
        L(a.win, "resize", () => {
            a.A = Math.floor(b * a.win.innerHeight);
            a.G = Math.floor(c * a.A);
            a.D = a.win.innerHeight - (a.A + 30 - 20);
            const d = a.I ? 0 : a.A - a.G;
            a.l.style.height = `${a.A}px`;
            a.j.style.transform = a.L ? `translateY(${a.A+ 
a.D}px)` : `translateY(${d+a.D}px)`
        })
    }

    function mt(a, b) {
        var c = ["https://cse.google.com"];
        const d = ["touchstart", "touchmove", "touchend", "touchcancel"],
            e = (k, m, n) => {
                try {
                    const p = n.map(r => new Touch(r));
                    k.dispatchEvent(new TouchEvent(m, {
                        bubbles: !0,
                        cancelable: !0,
                        touches: p
                    }))
                } catch (p) {
                    m = new UIEvent(m, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: 1,
                        view: a.win
                    });
                    for (const r of n) k.dispatchEvent(Object.assign(m, {
                        touches: [r]
                    }))
                }
            },
            f = k => {
                k = k.contentDocument;
                for (const m of d) L(k, m, n => {
                    n = [...n.touches].map(p => ({
                        clientX: p.clientX,
                        clientY: p.clientY,
                        force: p.force,
                        identifier: p.identifier,
                        pageX: p.pageX,
                        pageY: p.pageY,
                        radiusX: p.radiusX,
                        radiusY: p.radiusY,
                        rotationAngle: p.rotationAngle,
                        screenX: p.screenX,
                        screenY: p.screenY,
                        target: a.l
                    }));
                    e(a.j, m, n)
                })
            },
            g = k => {
                if (void 0 === c || c.includes(k.origin)) {
                    var m;
                    if (d.includes(null == (m = k.data) ? void 0 : m.type)) {
                        var n;
                        Array.isArray(null == (n = k.data) ? void 0 : n.touches) && (m = k.data.type, k = k.data.touches.map(p => Object.assign({}, p, {
                            target: a.l
                        })), e(a.j, m, k))
                    }
                }
            },
            h = k => {
                k.contentWindow ? L(k.contentWindow, "message", g) : console.error("Loaded iframe missing content window.")
            };
        let l;
        "complete" === (null == (l = b.contentDocument) ? void 0 : l.readyState) && (h(b), f(b));
        L(b, "load", () => {
            h(b);
            f(b)
        })
    }

    function nt(a, b, c) {
        let d;
        a.W.set(b, null != (d = a.win.document.documentElement.style.getPropertyValue(b)) ? d : "");
        a.win.document.documentElement.style.setProperty(b, c)
    }

    function ot(a, b) {
        let c;
        const d = null != (c = a.W.get(b)) ? c : "";
        a.win.document.documentElement.style.setProperty(b, d)
    }

    function it(a) {
        a.L = !0;
        a.I = !1;
        ot(a, "position");
        ot(a, "width");
        ot(a, "transform");
        ot(a, "overflow");
        ot(a, "touch-action");
        null != a.F && (a.win.document.documentElement.scrollTop = a.F, a.win.document.body.scrollTop = a.F);
        ot(a, "scroll-behavior");
        a.C.style.transform = "";
        a.l.scrollTop = 0;
        a.l.classList.remove("scrollable");
        a.j.style.transitionDuration = ".5s";
        a.j.style.transform = `translateY(${a.A+a.D}px)`;
        a.J.style.opacity = "0";
        a.C.style.transitionDelay = ".5s";
        xb(a.C.offsetHeight);
        a.C.style.visibility = "hidden";
        for (const b of a.O) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }

    function jt(a, b) {
        a.j.style.transitionDuration = "0s";
        b = Math.max(lt(a) + b, 0) + a.D;
        a.j.style.transform = `translateY(${b}px)`;
        xb(a.j.offsetHeight);
        a.j.style.transitionDuration = ".5s"
    }

    function kt(a) {
        const b = lt(a);
        if (a.I) 50 < b ? it(a) : 0 !== b && pt(a, 0);
        else {
            const c = a.A - a.G;
            b < c - 50 ? pt(a, 0) : b > c + 50 ? it(a) : b !== c && pt(a, a.A - a.G)
        }
    }

    function lt(a) {
        let b;
        const c = null != (b = a.j.style.transform) ? b : null;
        return Number(((new DOMMatrix(c)).f - a.D).toFixed(1))
    }

    function pt(a, b) {
        a.L = !1;
        0 === b && (a.I = !0, a.l.classList.add("scrollable"));
        a.C.style.transitionDelay = "0s";
        a.C.style.visibility = "visible";
        a.J.style.opacity = ".5";
        a.j.style.transform = `translateY(${b+a.D}px)`
    }
    var qt = class {
        constructor(a, b, c) {
            this.win = a;
            this.G = b;
            this.A = c;
            this.O = [];
            this.W = new Map;
            this.I = !1;
            this.L = !0;
            this.F = null;
            b = new xf(a.document);
            this.J = b.ha("DIV", {
                "class": "cse-modal-background",
                tabindex: 1
            });
            var d = b.ha("DIV", {
                "class": "cse-drawer-handle-icon"
            });
            this.B = b.ha("DIV", {
                "class": "cse-drawer-handle"
            }, d);
            this.l = b.ha("DIV", {
                "class": "cse-drawer-contents"
            });
            this.j = b.ha("DIV", {
                "class": "cse-drawer"
            }, this.B, this.l);
            this.C = b.ha("DIV", {
                "class": "cse-drawer-container"
            }, this.J, this.j);
            this.M = b.ha("DIV", {
                "class": "adpub-drawer-root"
            });
            this.D = a.innerHeight - (c + 30 - 20);
            c = this.M.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.A;
            var f = this.D;
            e = ts("<style>.cse-drawer-container {height: 100%; left: 0; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " + W(100002) + ";}.cse-modal-background {background-color: black; height: 100vh; opacity: 0; overflow: hidden; position: absolute; transition: opacity .5s ease-in-out; width: 100%;}.cse-drawer {background: white; position: absolute; transform: translateY(" +
                W(e + f) + "px); transition: transform .5s ease-in-out; width: 100%;}.cse-drawer-handle {align-items: flex-end; border-radius: " + W(20) + "px " + W(20) + "px 0 0; background: white; display: flex; height: " + W(30) + "px; justify-content: center; margin-top: " + W(-20) + "px;}.cse-drawer-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.cse-drawer-contents {background: white; height: " + W(e) + "px; scrollbar-width: none; overflow: hidden;}.cse-drawer-scroller::-webkit-scrollbar {display: none;}.scrollable {overflow: auto;}</style>");
            d.call(c, Of(b, os(e)));
            c.appendChild(this.C);
            M(this.M, es(a))
        }
        init() {
            this.win.document.body.appendChild(this.M);
            ht(this)
        }
        Z(a) {
            for (; this.l.firstChild;) this.l.removeChild(this.l.firstChild);
            this.l.appendChild(a)
        }
        show() {
            this.F = this.win.document.documentElement.scrollTop + this.win.document.body.scrollTop;
            nt(this, "transform", `translateY(${-this.F}px)`);
            nt(this, "position", "fixed");
            nt(this, "width", "100%");
            nt(this, "overflow", "hidden");
            nt(this, "touch-action", "none");
            nt(this, "scroll-behavior", "auto");
            this.C.style.transform =
                `translateY(${this.F}px)`;
            pt(this, this.A - this.G)
        }
        pa(a) {
            this.O.push(a)
        }
    };

    function rt(a) {
        a.B.init();
        a.B.Z(a.D);
        a.B instanceof qt && mt(a.B, a.D);
        a.B.pa(() => void dt(a.J));
        a.F.init()
    }

    function st(a) {
        let b;
        a.l.id = "cse-overlay-div";
        M(a.l, {
            "background-color": "white",
            border: "none",
            "border-radius": "16px 16px 16px 16px",
            "box-shadow": "0 3px 10px rgb(34 25 25 / 40%)",
            display: "none",
            "flex-direction": "column",
            height: "90%",
            left: "2.5%",
            margin: "auto",
            overflow: "auto",
            position: "fixed",
            padding: "1%",
            top: "5%",
            transition: "all 0.25s linear",
            width: "95%",
            "z-index": 100002
        });
        b = a.A.createElement("DIV");
        b.id = "cse-overlay-close-button";
        M(b, {
            "background-image": "url(//www.google.com/images/nav_logo114.png)",
            "background-position": "-140px -230px",
            "background-repeat": "no-repeat",
            cursor: "pointer",
            display: "block",
            "float": "right",
            height: "12px",
            opacity: 1,
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "12px"
        });
        a.C.classList.add("gsc-modal-background-image");
        a.C.setAttribute("tabindex", 0);
        a.j.document.body.appendChild(a.l);
        a.j.document.body.appendChild(a.C);
        const c = () => {
            "flex" === a.l.style.display && (a.l.style.display = "none");
            a.C.classList.remove("gsc-modal-background-image-visible");
            dt(a.J)
        };
        b.onclick = c;
        a.C.onclick =
            c;
        a.l.appendChild(b);
        a.l.appendChild(a.D);
        a.F.init()
    }

    function tt(a) {
        (function(c, d) {
            c[d] = c[d] || function() {
                (c[d].q = c[d].q || []).push(arguments)
            };
            c[d].t = 1 * new Date
        })(a.j, "_googCsa");
        const b = a.O.map(c => ({
            container: c,
            relatedSearches: 5
        }));
        a.j._googCsa("relatedsearch", {
            pubId: a.M,
            styleId: "5134551505",
            hl: a.I,
            fexp: a.L,
            channel: "AutoRsVariant",
            resultsPageBaseUrl: "http://google.com",
            resultsPageQueryParam: "q",
            relatedSearchTargeting: "content",
            relatedSearchResultClickedCallback: a.Z.bind(a),
            relatedSearchUseResultCallback: !0
        }, b)
    }
    var ut = class {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.O = b;
            this.I = (null == d ? void 0 : J(d, 1)) || "en";
            this.W = (null == d ? void 0 : J(d, 2)) || "Search results from ${website}";
            this.G = e;
            this.L = f;
            this.M = c.replace("ca", "partner");
            this.J = Ys(new bt(a), 1E5);
            this.A = new xf(a.document);
            this.G ? 2 === qg() ? (b = Math.round(.95 * this.j.innerHeight) - 30, b = new qt(this.j, b, b)) : b = new gt(this.j, Math.round(.8 * this.j.innerWidth)) : b = null;
            this.B = b;
            this.l = this.A.createElement("DIV");
            this.C = this.A.createElement("DIV");
            this.D = this.A.createElement("IFRAME");
            this.F = new Xs(this.D, this.M, a.location.host, this.I, this.W, this.L)
        }
        init() {
            if (0 !== this.O.length && (this.G || !this.j.document.querySelector('script[src*="cse.google.com/cse"]'))) {
                if (this.G) rt(this);
                else {
                    st(this);
                    var a = this.A.createElement("SCRIPT"),
                        b = N `https://cse.google.com/cse.js?cx=9d449ff4a772956c6`;
                    b = Tg(b, new Map([
                        ["language", this.I]
                    ]));
                    xe(a, b);
                    this.j.document.head.appendChild(a)
                }
                a = this.A.createElement("SCRIPT");
                xe(a, N `https://www.google.com/adsense/search/async-ads.js`);
                this.j.document.head.appendChild(a);
                tt(this)
            }
        }
        Z(a, b) {
            ct(this.J);
            if (this.G) {
                Ws(this.F, a, b);
                const c = new ResizeObserver(e => {
                        this.D.height = e[0].target.scrollHeight
                    }),
                    d = () => {
                        let e;
                        const f = null == (e = this.D.contentDocument) ? void 0 : e.documentElement;
                        f ? c.observe(f) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                    };
                d();
                this.B.show()
            } else this.C.classList.add("gsc-modal-background-image-visible"), this.l.style.display = "flex", Ws(this.F, a, b)
        }
    };

    function vt(a) {
        var b = Vs(a.l, a.j);
        b = iq(b, a.l).sort(wt);
        var c = 0 == b.length ? [] : [b[Math.floor(b.length / 2)]];
        var d = a.l;
        b = [];
        for (let k = 0; k < c.length; k++) {
            const m = c[k],
                n = "autors-container-" + k,
                p = d.document.createElement("div");
            p.setAttribute("id", n);
            (new Ps(d, m, new Us(p))).init();
            b.push(n)
        }
        var e;
        let f, g;
        c = (null == (e = D(a.j, yl, 28)) ? void 0 : null == (f = D(e, ul, 6)) ? void 0 : C(f, 1, 0)) || (null == (g = D(a.j, yl, 28)) ? void 0 : C(g, 3, 0)) || 0;
        let h;
        e = (null == (h = D(a.j, yl, 28)) ? void 0 : Ic(h, 4)) || !1;
        let l;
        (new ut(a.l, b, a.A, null == (l = D(a.j,
            yl, 28)) ? void 0 : D(l, vl, 5), e, c)).init()
    }
    var xt = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.A = c
        }
    };

    function wt(a, b) {
        return a.X.j - b.X.j
    };
    var yt = (a, b) => {
        const c = [];
        D(a, Yl, 18) && c.push(2);
        b.ca && c.push(0);
        D(a, yl, 28) && 1 == C(D(a, yl, 28), 1, 0) && c.push(1);
        D(a, wl, 31) && 1 == C(D(a, wl, 31), 1, 0) && c.push(5);
        D(a, ol, 27) && 1 == C(D(a, ol, 27), 1, 0) && c.push(3);
        D(a, $l, 29) && c.push(4);
        return c
    };

    function zt(a, b) {
        const c = a.document.createElement("img");
        At(a, c);
        hf(c, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg");
        M(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function Bt(a, b) {
        const c = b.document.createElement("button");
        At(b, c);
        M(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.A();
            d.stopPropagation()
        });
        return c
    }

    function Ct(a, b, c) {
        const d = b.document.createElement("img");
        hf(d, "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg");
        d.setAttribute("aria-label", a.B);
        At(b, d);
        M(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function Dt(a) {
        const b = a.document.createElement("ins");
        At(a, b);
        M(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class Et {
        constructor(a, b, c) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = new Rj(!1)
        }
        sa(a, b, c, d) {
            const e = zt(a, d),
                f = zt(a),
                g = Bt(this, a),
                h = Ct(this, a, c);
            a = Dt(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.j.ba(l => {
                M(e, {
                    display: l ? "none" : "inline"
                });
                M(f, {
                    display: l ? "inline" : "none"
                });
                l ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        rd() {
            return 40
        }
        Cd() {
            R(this.j, !1);
            return 0
        }
        Dd() {
            R(this.j, !0)
        }
    }

    function At(a, b) {
        M(b, es(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function Ft(a, b) {
        const c = b.document.createElement("button");
        Gt(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        M(c, b);
        c.addEventListener("click", d => {
            a.D();
            d.stopPropagation()
        });
        return c
    }

    function Ht(a, b, c, d) {
        const e = b.document.createElement("div");
        M(e, es(b));
        M(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        M(f, es(b));
        M(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (M(e, {
                    "flex-direction": "row"
                }), a.j && M(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), M(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                M(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (M(e, {
                border: "0",
                "flex-direction": "column"
            }), M(f, {
                "margin-left": "0",
                "text-align": "center"
            }), M(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && M(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function Gt(a, b, c) {
        M(c, es(b));
        M(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.G,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.F,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class It {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.C = a;
            this.D = b;
            this.F = c;
            this.l = d;
            this.G = e;
            this.B = f;
            this.j = g;
            this.A = h
        }
        sa(a) {
            const b = a.document.createElement("div");
            Gt(this, a, b);
            M(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.B) {
                var c = a.document.createElement("img");
                hf(c, this.B);
                Gt(this, a, c);
                M(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            Gt(this, a, c);
            M(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.C));
            b.appendChild(c);
            c = Ft(this, a);
            c.appendChild(b);
            return this.A ? Ht(this, a, c, this.A) : c
        }
    };
    var Jt = (a, b) => {
        b = b.filter(c => 5 == z(D(c, il, 4), 1) && 1 == z(c, 8));
        b = Gp(b, a);
        a = iq(b, a);
        a.sort((c, d) => d.X.j - c.X.j);
        return a[0] || null
    };
    var Ot = a => {
            let b = 0;
            try {
                var c = a.K;
                b |= c != c.top ? 512 : 0;
                var d = a.K;
                var e = Math.min(d.screen.width || 0, d.screen.height || 0);
                b |= e ? 320 > e ? 8192 : 0 : 2048;
                var f = a.K;
                b |= f.navigator && Kt(f.navigator.userAgent) ? 1048576 : 0;
                if (a.Ic) var g = b | (a.K.innerHeight >= a.Ic ? 0 : 1024);
                else {
                    var h = a.K;
                    g = b | (h.innerHeight >= h.innerWidth ? 0 : 8)
                }
                b = g;
                b |= mj(a.K, a.zd);
                b |= nj(a.K)
            } catch (l) {
                b |= 32
            }
            switch (a.ye) {
                case 2:
                    Lt(a.K, a.xa) && (b |= 16777216);
                    break;
                case 1:
                    Mt(a.K, a.xa) && (b |= 16777216)
            }
            a.ze && Nt(a.K, a.xa) && (b |= 16777216);
            return b
        },
        Kt = a => /Android 2/.test(a) ||
        /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a),
        Lt = (a, b = null) => {
            const c = Pt(a.innerWidth, 3, 0, Math.min(Math.round(a.innerWidth / 320 * 50), Qt) + 15, 3);
            return Rt(a, c, b)
        },
        Mt = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), Qt) + 15,
                f = Pt(c, 3, d - e, d, 3);
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return Rt(a, f, b)
        },
        Nt = (a, b = null) => null != St(a, b),
        St = (a, b = null) => {
            var c = a.innerWidth;
            const d = a.innerHeight,
                e = V(mn);
            c =
                Pt(c, 10, d - e, d, 10);
            return Tt(a, c, b)
        },
        Ut = (a, b) => {
            const c = a.innerWidth,
                d = a.innerHeight;
            let e = d;
            for (; e > b;) {
                var f = Pt(c, 3, e - b, e, 3);
                f = Tt(a, f);
                if (!f) return d - e;
                e = f.getBoundingClientRect().top - 1
            }
            return null
        },
        Rt = (a, b, c = null) => null != Tt(a, b, c);

    function Tt(a, b, c = null) {
        for (const d of b)
            if (b = Vt(a, d, c)) return b;
        return null
    }

    function Vt(a, b, c = null) {
        const d = Wt(a.document, b.x, b.y);
        return d ? Xt(d, a, b, c) || Yt(d, a, b, c) || null : null
    }
    var Wt = (a, b, c) => {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    };

    function Yt(a, b, c, d = null) {
        const e = b.document;
        for (a = a.offsetParent; a && a != e.body; a = a.offsetParent) {
            const f = Xt(a, b, c, d);
            if (f) return f
        }
        return null
    }
    var Pt = (a, b, c, d, e) => {
        const f = [];
        for (let k = 0; k < e; k++)
            for (let m = 0; m < b; m++) {
                var g = f,
                    h = b - 1,
                    l = e - 1;
                g.push.call(g, {
                    x: (0 == h ? 0 : m / h) * a,
                    y: c + (0 == l ? 0 : k / l) * (d - c)
                })
            }
        return f
    };

    function Xt(a, b, c, d = null) {
        if ("fixed" !== ah(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= dh(a).width && 1 >= dh(a).height ? !0 : !1;
        d && Nh(d, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: e,
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    const Qt = 90 * 1.38;

    function Zt(a) {
        if (a.F) {
            const b = tj(a.j);
            if (b > a.l + 100 || b < a.l - 100) $t(a), a.l = pj(a.j)
        }
        a.I && a.j.clearTimeout(a.I);
        a.I = a.j.setTimeout(() => au(a), 200)
    }

    function au(a) {
        var b = pj(a.j);
        a.l && a.l > b && (a.l = b);
        b = tj(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), bu(a))
    }

    function cu(a) {
        a.j.removeEventListener("scroll", a.L)
    }

    function $t(a) {
        a.F = !1;
        const b = a.C.Cd();
        switch (b) {
            case 0:
                R(a.B, a.D);
                break;
            case 1:
                a.A && (M(a.A, {
                    display: "none"
                }), R(a.B, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function bu(a) {
        a.A || (a.A = du(a));
        M(a.A, {
            display: "block"
        });
        a.F = !0;
        a.C.Dd();
        R(a.B, a.D)
    }

    function du(a) {
        var b = Ut(a.j, a.C.rd() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        M(c, es(a.j));
        M(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.D = a.C.sa(a.j, () => a.remove(), () => {
            cu(a);
            $t(a)
        }, () => {
            cu(a);
            bu(a)
        });
        c.appendChild(a.D);
        a.J && (c.className = a.J);
        a.j.document.body.appendChild(c);
        return c
    }
    class eu {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.D = null;
            this.B = new Rj(null);
            this.J = c || null;
            this.A = null;
            this.F = !1;
            this.l = 0;
            this.I = null;
            this.L = () => Zt(this)
        }
        init() {
            this.j.addEventListener("scroll", this.L);
            this.l = pj(this.j);
            au(this)
        }
        remove() {
            this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
            this.A = null;
            cu(this);
            R(this.B, null)
        }
        G() {
            return this.B
        }
    };

    function fu(a) {
        R(a.D, 0);
        null != a.A && (a.A.remove(), a.A = null);
        null != a.l && (a.l.remove(), a.l = null)
    }

    function gu(a) {
        a.l = new eu(a.C, a.J, a.F);
        a.l.init();
        Zj(a.B, a.l.G());
        R(a.D, 2)
    }
    class hu {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.I = b;
            this.L = c;
            this.J = d;
            this.F = e;
            this.D = new Rj(0);
            this.B = new Rj(null);
            this.l = this.A = this.j = null
        }
        init() {
            this.I ? (this.A = new Ps(this.C, this.I, this.L, this.F), this.A.init(), Zj(this.B, this.A.G()), R(this.D, 1), null == this.j && (this.j = new Ek(this.C), this.j.init(2E3)), this.j.addListener(() => {
                fu(this);
                gu(this)
            })) : gu(this)
        }
        remove() {
            fu(this);
            this.j && (this.j.va(), this.j = null)
        }
        G() {
            return this.B
        }
    };
    var iu = (a, b, c, d, e) => {
        a = new hu(a, Jt(a, e), new It(b, d, "#FFF", "#4A4A4A", "normal"), new Et(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };
    var ju = a => a.googlefc = a.googlefc || {},
        ku = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function lu(a) {
        var b = ku(a.j);
        if (mu(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = iu(a.j, c, b, () => nu(a), a.B))
        }
    }

    function ou(a) {
        const b = ju(a.j);
        ku(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => lu(a)
        })
    }

    function nu(a) {
        ct(a.A);
        ku(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.remove(), a.l = null);
            dt(a.A)
        })
    }
    class pu {
        constructor(a, b, c) {
            this.j = a;
            this.A = Ys(b, 2147483643);
            this.B = c;
            this.l = null
        }
    }

    function mu(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function qu(a) {
        const b = a.document.createElement("ins");
        ru(a, b);
        M(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function su(a, b, c, d) {
        const e = a.document.createElement("img");
        hf(e, b);
        d && e.setAttribute("aria-label", d);
        ru(a, e);
        M(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function tu(a, b) {
        const c = b.document.createElement("span");
        ru(b, c);
        M(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.B));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function uu(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.A));
        M(c, es(b));
        M(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function vu(a) {
        const b = a.document.createElement("div");
        M(b, es(a));
        M(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class wu {
        constructor(a, b, c, d) {
            this.B = a;
            this.C = b;
            this.A = c;
            this.l = d;
            this.j = new Rj(!1)
        }
        sa(a, b, c, d) {
            c = qu(a);
            const e = su(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = su(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = tu(this, a),
                h = su(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.C);
            M(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const l = uu(this, a);
            a = vu(a);
            a.appendChild(c);
            a.appendChild(l);
            this.j.ba(k => {
                M(e, {
                    display: k ? "none" : "inline"
                });
                M(f, {
                    display: k ? "inline" : "none"
                });
                k ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), M(l, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), M(l, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        rd() {
            return 71
        }
        Cd() {
            R(this.j, !1);
            return 0
        }
        Dd() {
            R(this.j, !0)
        }
    }

    function ru(a, b) {
        M(b, es(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function xu(a) {
        yu(a.l, b => {
            var c = a.B,
                d = b.zf,
                e = b.Be,
                f = b.ne;
            b = b.showRevocationMessage;
            (new hu(c, Jt(c, a.A), new It(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new wu(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, () => {
            dt(a.j)
        })
    }
    class zu {
        constructor(a, b, c, d) {
            this.B = a;
            this.j = Ys(b, 2147483643);
            this.A = c;
            this.l = d
        }
    };
    var Au = a => {
        if (!a || !Bc(a, 1)) return !1;
        a = z(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function Bu(a) {
        if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            Au(a.j) && (b = new zu(a.l, a.C, a.B || F(a.j, Wl, 4), a.A), ct(b.j), xu(b), b = !0);
            var c;
            a: if ((c = a.j) && Bc(c, 3)) switch (c = z(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (ou(new pu(a.l, a.C, a.B || F(a.j, Wl, 4))), b = !0);
            if (c = (c = a.j) ? !0 === B(c, 5) : !1) c = ((c = a.j) ? !0 === B(c, 6) : !1) || U(Sn);
            c && (b = !0);
            b && (a.A.start(), a.l.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class Cu {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.A = b;
            this.j = c;
            this.C = d;
            this.B = e || null
        }
    };
    var Du = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = Xf("SCRIPT", g);
                h.async = !0;
                xe(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? Du(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        Eu = (a, b, c = () => {}, d = () => {}) => {
            Du(wf(a), b, 0, !1, c, d)
        };
    var Fu = (a = null) => {
        a = a || u;
        return a.googlefc || (a.googlefc = {})
    };
    kd(bj).map(a => Number(a));
    kd(cj).map(a => Number(a));
    var Gu = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Xf("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    const Hu = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function Iu(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Hu(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function Ju(a) {
        return Iu(a) ? !1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length ? Ku(a, "1") : !0 : !1
    }

    function Ku(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (void 0 !== c) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (0 === c) return !1;a.purpose && a.vendor ? (c = a.vendor.consents, (c = !(!c || !c["755"])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function Lu(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(c => Ku(a, c))
    }

    function Mu(a) {
        if (a.B) return a.B;
        a.B = pg(a.j, "__tcfapiLocator");
        return a.B
    }

    function Nu(a) {
        return "function" === typeof a.j.__tcfapi || null != Mu(a)
    }

    function Ou(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (Mu(a)) {
            Pu(a);
            const e = ++a.J;
            a.F[e] = c;
            a.B && a.B.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function Qu(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = De(() => b(c));
        let e = 0; - 1 !== a.D && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.D));
        Ou(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = Hu(c), c.internalBlockOnErrors = a.A, Iu(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), Ou(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }

    function Ru(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = De(() => b(c));
        let e = 0; - 1 !== a.D && (e = setTimeout(() => {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.D));
        Ou(a, "addEventListener", (f, g) => {
            var h = e;
            h && clearTimeout(h);
            g && (c = f);
            c.internalErrorState = Hu(c);
            c.internalBlockOnErrors = a.A;
            0 != c.internalErrorState && (c.tcString = "tcunavailable");
            if (a.A) Iu(c) && (Ou(a, "removeEventListener", null, c.listenerId), d());
            else if (0 != c.internalErrorState || Iu(c)) Ou(a, "removeEventListener", null,
                c.listenerId), d()
        })
    }

    function Su(a) {
        return new Promise(b => {
            Ru(a, b)
        })
    }

    function Pu(a) {
        a.C || (a.C = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.F[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, L(a.j, "message", a.C))
    }
    class Tu extends Lj {
        constructor(a, b = 500, c = !1) {
            super();
            this.j = a;
            this.B = null;
            this.F = {};
            this.J = 0;
            this.D = b;
            this.A = c;
            this.C = null
        }
        l() {
            this.F = {};
            this.C && (Ke(this.j, "message", this.C), delete this.C);
            delete this.F;
            delete this.j;
            delete this.B;
            super.l()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = De(() => a(b));
            let d = 0; - 1 !== this.D && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.D));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Hu(b), b.internalBlockOnErrors =
                    this.A, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Ou(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Ou(this, "removeEventListener", null, a.listenerId)
        }
    };

    function yu(a, b, c) {
        const d = Fu(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = Fu(a.j),
                    f = new Tu(a.j);
                Nu(f) && Qu(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        zf: e.getDefaultConsentRevocationText(),
                        Be: e.getDefaultConsentRevocationCloseText(),
                        ne: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function Uu(a) {
        const b = Bd(ed("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        Eu(a.j, b, () => {}, () => {})
    }
    class Vu {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start() {
            if (this.j === this.j.top) try {
                Gu(this.j, "googlefcPresent"), Uu(this)
            } catch (a) {}
        }
    };
    var Wu = (a, b, c) => {
        const d = D(a, Pl, 6);
        if (!d) return [];
        c = Lr(F(d, Ql, 1), c);
        return (a = mm(a)) && B(a, 11) ? c.map(e => fq(e)) : c.map(e => {
            const f = hl();
            return new Hp(new $p(e.oc, e.pc), new Yp, new Zp(b), !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        })
    };
    var Yu = class extends K {
        constructor() {
            super(void 0, -1, Xu)
        }
    };

    function Zu(a, b) {
        return A(a, 1, b)
    }

    function $u(a, b) {
        return Pc(a, 2, b)
    }
    var bv = class extends K {
            constructor(a) {
                super(a, -1, av)
            }
        },
        cv = class extends K {
            constructor(a) {
                super(a)
            }
            getHeight() {
                return C(this, 2, 0)
            }
        },
        Xu = [5],
        av = [2];
    var dv = class extends K {
            constructor() {
                super(void 0)
            }
        },
        ev = [1, 2];
    var fv = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function gv(a) {
        return new kl(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class hv {
        j(a) {
            return gv(Math.floor(a.l))
        }
    };
    var iv = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        Si: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function jv(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."],
            c;
        a = null == (c = ij(a)) ? void 0 : c.tagSpecificState[1];
        if (null == a) c = null;
        else {
            var d;
            c = 4 === (null == (d = a.debugCard) ? void 0 : d.getAdType()) ? a.debugCard : null
        }(d = c) && d.displayAdLoadedContent(b)
    };
    var kv = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function lv(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.qc = c;
                a.A = !!b.adTest;
                c = b.pubVars;
                va(c) && (a.H = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.D = {};
                    for (d of b.fillMessage) a.D[d.key] = d.value
                }
                a.B = b.adWidth;
                a.l = b.adHeight;
                jh(a.B) && jh(a.l) || P("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.F(b)
    }
    class mv {
        constructor() {
            this.D = this.H = this.A = this.qc = null;
            this.l = this.B = 0
        }
        F() {
            return !0
        }
    };

    function nv(a, b = []) {
        const c = Date.now();
        return kb(b, d => c - d < 1E3 * a)
    }

    function ov(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || nb(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = nv(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function pv(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const e = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        return c ? null : ov(a, b)
    };
    var qv = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= nj(a);
            d |= mj(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = pv(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            U(to) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    class rv extends mv {
        constructor() {
            super();
            this.C = !1;
            this.j = null;
            this.G = !1
        }
        F(a) {
            this.C = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = Tc(pm, b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.G = !0);
            return !0
        }
    };
    const sv = {};

    function tv(a, b, c) {
        let d = uv(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.D.l;
        for (; d.yb && d.yb.length;) {
            const h = d.yb.shift();
            var g = Np(h.V);
            const l = h.X.j,
                k = !!c.A.Pc || !!c.A.Vc || c.Ia() || !!c.A.jd || l > e;
            g = !g || g <= d.Ib;
            if (k && g && vv(c, h, {
                    ac: d.Ib
                })) {
                e = l;
                if (d.Gb.j.length + 1 >= f) return !0;
                d = uv(a, c, b);
                if (!d) return !0
            }
        }
        return c.B
    }
    const uv = (a, b, c) => {
        var d = b.D.l,
            e = b.D.B,
            f = b.D;
        f = Rq(b.T(), f.j ? f.j.gb : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = Q(f.A).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - Xq(f)) : e = void 0;
        a = null == e || 50 <= e ? wv(b, f, {
            types: a
        }, c) : null;
        return {
            Gb: f,
            Ib: e,
            yb: a
        }
    };
    sv[2] = Ca(function(a, b) {
        a = wv(b, Rq(b.T()), {
            types: a,
            Na: Aq(b.T())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (vv(b, a[c])) return !0;
        return b.B ? (b.C.push(11), !0) : !1
    }, [0]);
    sv[5] = Ca(tv, [0], 5);
    sv[10] = Ca(function(a, b) {
        a = [];
        const c = b.Z;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !U(En) && a.push(1);
        return tv(a, 10, b)
    }, 10);
    sv[3] = function(a) {
        if (!a.B) return !1;
        var b = wv(a, Rq(a.T()), {
            types: [0],
            Na: Aq(a.T())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (vv(a, b[c])) return !0;
        a.C.push(11);
        return !0
    };
    const xv = a => {
            var b;
            a.A.Td ? b = new wq(0, null, [], 3, null) : b = Aq(a.T());
            return {
                types: [0],
                Na: b
            }
        },
        zv = a => {
            const b = a.T().document.body.getBoundingClientRect().width;
            yv(a, gv(b))
        },
        Bv = (a, b) => {
            var c = xv(a);
            c.yf = [5];
            c = wv(a, Rq(a.T()), c, 8);
            Av(a, c.reverse(), b)
        },
        Av = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.X), vv(a, d, {
                        rc: b
                    })) return !0;
            return !1
        };
    sv[8] = function(a) {
        var b = a.T().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => sv[8](a), {
            once: !0
        }), !0;
        if (!a.B) return !1;
        if (!a.Yb()) return !0;
        b = xv(a);
        b.Nc = [2, 4, 5];
        b = wv(a, Rq(a.T()), b, 8);
        const c = new hv;
        if (Av(a, b, c)) return !0;
        if (a.A.md) switch (a.A.Fd || 0) {
            case 1:
                Bv(a, c);
                break;
            default:
                zv(a)
        }
        return !0
    };
    sv[6] = Ca(tv, [2], 6);
    sv[7] = Ca(tv, [1], 7);
    sv[9] = function(a) {
        const b = uv([0, 2], a, 9);
        if (!b || !b.yb) return a.C.push(17), jv(a.T()), a.B;
        for (var c of b.yb) {
            var d = c;
            var e = a.A.zc || null;
            null == e ? d = null : (e = Op(d.V, new Cv, new Dv(e, a.T())), d = new Vp(e, d.aa(), d.X));
            if (d && !(Np(d.V) > b.Ib) && vv(a, d, {
                    ac: b.Ib,
                    uc: !0
                })) return a = d.V.J, c = c.V, a = 0 < a.length ? a[0] : null, c.B = !0, null != a && c.J.push(a), !0
        }
        a.C.push(17);
        jv(a.T());
        return a.B
    };
    class Cv {
        l(a, b, c, d) {
            return fp(d.document, a, b)
        }
        A(a) {
            return Q(a).clientHeight || 0
        }
    };
    var Ev = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.Gb = c
        }
        ia(a) {
            return this.j ? sr(this.l, this.j, a, this.Gb) : rr(this.l, a, this.Gb)
        }
        ja() {
            return this.j ? 16 : 9
        }
    };
    var Fv = class {
        constructor(a) {
            this.sc = a
        }
        ia(a) {
            return zr(a.document, this.sc)
        }
        ja() {
            return 11
        }
    };
    var Gv = class {
        constructor(a) {
            this.Xa = a
        }
        ia(a) {
            return wr(this.Xa, a)
        }
        ja() {
            return 13
        }
    };
    var Hv = class {
        ia(a) {
            return pr(a)
        }
        ja() {
            return 12
        }
    };
    var Iv = class {
        constructor(a) {
            this.nb = a
        }
        ia() {
            return ur(this.nb)
        }
        ja() {
            return 2
        }
    };
    var Jv = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return xr(this.j)
        }
        ja() {
            return 3
        }
    };
    var Kv = class {
        ia() {
            return Ar()
        }
        ja() {
            return 17
        }
    };
    var Lv = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return tr(this.j)
        }
        ja() {
            return 1
        }
    };
    var Mv = class {
        ia() {
            return Be(Ip)
        }
        ja() {
            return 7
        }
    };
    var Nv = class {
        constructor(a) {
            this.Nc = a
        }
        ia() {
            return vr(this.Nc)
        }
        ja() {
            return 6
        }
    };
    var Ov = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return yr(this.j)
        }
        ja() {
            return 5
        }
    };
    var Pv = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        ia() {
            return Ca(Br, this.minWidth, this.maxWidth)
        }
        ja() {
            return 10
        }
    };
    var Qv = class {
        constructor(a) {
            this.B = a.l.slice(0);
            this.l = a.j.slice(0);
            this.A = a.A;
            this.C = a.B;
            this.j = a.C
        }
    };

    function Rv(a) {
        var b = new Sv;
        b.C = a;
        b.l.push(new Lv(a));
        return b
    }

    function Tv(a, b) {
        a.l.push(new Nv(b));
        return a
    }

    function Uv(a, b) {
        a.l.push(new Iv(b));
        return a
    }

    function Vv(a, b) {
        a.l.push(new Ov(b));
        return a
    }

    function Wv(a, b) {
        a.l.push(new Jv(b));
        return a
    }

    function Xv(a) {
        a.l.push(new Mv);
        return a
    }

    function Yv(a) {
        a.j.push(new Hv);
        return a
    }

    function Zv(a, b = 0, c, d) {
        a.j.push(new Ev(b, c, d));
        return a
    }

    function $v(a, b = 0, c = Infinity) {
        a.j.push(new Pv(b, c));
        return a
    }

    function aw(a) {
        a.j.push(new Kv);
        return a
    }

    function bw(a, b = 0) {
        a.j.push(new Gv(b));
        return a
    }

    function cw(a, b) {
        a.A = b;
        return a
    }
    var Sv = class {
        constructor() {
            this.A = 0;
            this.B = !1;
            this.l = [].slice(0);
            this.j = [].slice(0)
        }
        build() {
            return new Qv(this)
        }
    };
    class Dv {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = this.l,
                b = this.A;
            const c = a.H || {};
            c.google_ad_client = a.qc;
            c.google_ad_height = Q(b).clientHeight || 0;
            c.google_ad_width = Q(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new kv;
            A(b, 1, a.C);
            a.j && Nc(b, 2, a.j);
            a.G && A(b, 3, !0);
            c.google_rasc = Vc(b);
            a.A && (c.google_adtest = "on");
            return new kl(["fsi_container"], c)
        }
    };
    var dw = dl(new al(0, {})),
        ew = dl(new al(1, {})),
        fw = a => a === dw || a === ew;

    function gw(a, b, c) {
        Dj(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class hw {
        constructor() {
            this.j = new Hj
        }
    };

    function iw(a, b) {
        b && (a.j.apv = z(b, 4), Cc(b, 23) && (a.j.sat = "" + z(D(b, rm, 23), 1)));
        return a
    }

    function jw(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    class kw extends Mm {
        constructor(a) {
            super(a);
            this.j = {}
        }
        I(a) {
            null != a && (this.j.allp = a);
            return this
        }
        B(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.B(a);
            nd(a, this.j);
            return a
        }
    }

    function lw(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function mw(a, b) {
        a.l.op = nw(b)
    }

    function ow(a, b, c) {
        30 >= c.length ? a.l[b] = pw(c) : (a.l[b] = pw(c.slice(0, 30)), a.l[b + "_c"] = c.length.toString())
    }

    function qw(a, b, c) {
        ow(a, "fap", b);
        a.l.fad = nw(c)
    }

    function rw(a, b, c) {
        ow(a, "fmp", b);
        a.l.fmd = nw(c)
    }

    function sw(a, b, c) {
        ow(a, "vap", b);
        a.l.vad = nw(c)
    }

    function tw(a, b, c) {
        ow(a, "vmp", b);
        a.l.vmd = nw(c)
    }

    function uw(a, b, c) {
        ow(a, "pap", b);
        a.l.pad = nw(c)
    }

    function vw(a, b, c) {
        ow(a, "pmp", b);
        a.l.pmd = nw(c)
    }

    function ww(a, b) {
        ow(a, "psq", b)
    }
    var xw = class extends kw {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.l = {}
        }
        B(a) {
            a = super.B(a);
            Object.assign(a, this.l);
            return a
        }
    };

    function pw(a) {
        return a.map(b => {
            let c;
            return null != (c = null == b ? void 0 : b.toString()) ? c : "null"
        }).join("~")
    }

    function nw(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };
    var yw = class extends K {
        constructor() {
            super(void 0)
        }
        Rb() {
            return J(this, 1)
        }
        Cc() {
            return C(this, 2, 0)
        }
    };

    function zw(a, b) {
        return Jc(a, 1, b)
    }

    function Aw() {
        var a = new Bw;
        rc(a);
        Gc(a, 2).push("irr");
        return a
    }

    function Cw(a, b) {
        return A(a, 3, b)
    }

    function Dw(a, b) {
        return A(a, 4, b)
    }

    function Ew(a, b) {
        return A(a, 5, b)
    }

    function Fw(a, b) {
        return A(a, 7, b)
    }

    function Gw(a, b) {
        return A(a, 8, b)
    }

    function Hw(a, b) {
        return A(a, 9, b)
    }

    function Iw(a, b) {
        return Pc(a, 10, b)
    }

    function Jw(a, b) {
        return Jc(a, 11, b)
    }
    var Bw = class extends K {
            constructor() {
                super(void 0, -1, Kw)
            }
        },
        Kw = [1, 2, 10, 11];

    function Lw(a, b, c) {
        const d = b.V;
        if (!Dj(a.j, d)) {
            let e;
            a.j.set(d, new Mw(null != (e = Tk(Tp(b))) ? e : ""))
        }
        c(a.j.get(d))
    }

    function Nw(a, b) {
        Lw(a, b, c => {
            c.j = !0
        })
    }

    function Ow(a, b) {
        Lw(a, b, c => {
            c.l = !0
        })
    }

    function Pw(a, b) {
        Lw(a, b, c => {
            c.A = !0
        });
        a.I.push(b.V)
    }

    function Qw(a, b, c) {
        Lw(a, b, d => {
            d.Va = c
        })
    }

    function Rw(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) {
            let g;
            if (fw(null != (g = f.Va) ? g : "")) ++e;
            else {
                let h;
                b = a.l.get(null != (h = f.Va) ? h : "", null);
                d.push(b)
            }
        }
        return {
            list: d.sort((f, g) => (null != f ? f : -1) - (null != g ? g : -1)),
            Wa: e
        }
    }

    function Sw(a, b) {
        mw(b, a.l.qb());
        var c = Gj(a.j).filter(f => 0 === (f.Ka.startsWith(dw) ? 0 : 1)),
            d = Gj(a.j).filter(f => 1 === (f.Ka.startsWith(dw) ? 0 : 1)),
            e = Rw(a, f => f.j, c);
        qw(b, e.list, e.Wa);
        e = Rw(a, f => f.j, d);
        rw(b, e.list, e.Wa);
        e = Rw(a, f => f.l, c);
        sw(b, e.list, e.Wa);
        e = Rw(a, f => f.l, d);
        tw(b, e.list, e.Wa);
        c = Rw(a, f => f.A, c);
        uw(b, c.list, c.Wa);
        d = Rw(a, f => f.A, d);
        vw(b, d.list, d.Wa);
        ww(b, a.I.map(f => {
            let g;
            return null == (g = a.j.get(f)) ? void 0 : g.Va
        }).map(f => {
            let g;
            return null != (g = a.l.get(f)) ? g : null
        }))
    }

    function Tw() {
        var a = O(Uw);
        if (!a.B) return Aw();
        let b, c;
        const d = Jw(Iw(Hw(Gw(Fw(Ew(Dw(Cw(zw(new Bw, null != (b = a.B) ? b : []), a.C), a.G), a.F), a.J), a.L), null != (c = a.D) ? c : 0), Gj(a.j).map(e => {
            var f;
            var g = new yw;
            g = A(g, 1, e.Ka);
            var h = a.l.get(null != (f = e.Va) ? f : "", -1);
            f = A(g, 2, h);
            f = A(f, 3, e.j);
            return A(f, 4, e.l)
        })), a.I.map(e => {
            let f;
            return null == (f = a.j.get(e)) ? void 0 : f.Va
        }).map(e => {
            let f;
            return null != (f = a.l.get(e)) ? f : null
        }));
        null != a.A && A(d, 6, a.A);
        return d
    }
    var Uw = class {
        constructor() {
            this.B = null;
            this.F = this.G = !1;
            this.A = null;
            this.L = this.C = this.J = !1;
            this.D = null;
            this.l = new Hj;
            this.j = new Hj;
            this.I = []
        }
    };
    class Mw {
        constructor(a) {
            this.A = this.l = this.j = !1;
            this.Va = null;
            this.Ka = a
        }
    };
    class Vw {
        constructor(a = 0) {
            this.j = a
        }
    };
    class Ww {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function Xw(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function Yw(a, b) {
        const c = a.B.filter(d => Fj(d.Ob).every(e => d.Ob.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.Ob.qb() > e.Ob.qb() ? d : e, c[0])
    }

    function Zw(a, b) {
        b = Tp(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (Dj(a.A, b)) return a.A.get(b);
        var c = bl(b);
        c = Yw(a, c);
        a.A.set(b, c);
        return c
    }

    function $w(a, b) {
        let c;
        return (null == (c = Zw(a, b)) ? void 0 : c.rf) || Number.MAX_VALUE
    }

    function ax(a, b) {
        const c = V(Wn) || 0;
        if (0 == b.length || 0 == c) return !0;
        const d = (new Mk(b)).filter(e => {
            let f;
            e = (null == (f = Zw(a, e)) ? void 0 : f.Ka) || "";
            return "" != e && !(e === dw || e === ew)
        });
        return c <= d.j.length / b.length
    }
    var bx = class {
        constructor(a) {
            this.j = a;
            this.A = new Hj;
            let b;
            this.B = ((null == (b = D(a, em, 2)) ? void 0 : F(b, fm, 1)) || []).map(c => ({
                Ob: bl(c.Rb()),
                rf: c.Cc(),
                Ka: c.Rb()
            }));
            this.l = []
        }
    };

    function cx(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => $w(a.j, c) - $w(a.j, d))
    }

    function dx(a, b) {
        var c = b.X.j,
            d = Math,
            e = d.min;
        const f = b.aa(),
            g = b.V.l();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? Xw(f.parentElement) : Xw(f));
        d = a.A;
        0 > d.j && (d.j = Q(d.l).scrollHeight || 0);
        d = d.j - b.X.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.aa();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function ex(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => dx(a, c) - dx(a, d))
    }

    function fx(a, b) {
        return b.sort((c, d) => {
            const e = c.V.G,
                f = d.V.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? dx(a, c) - dx(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class gx {
        constructor(a, b = 0, c = null) {
            this.A = new Ww(a);
            this.l = new Vw(b);
            this.j = c && new bx(c)
        }
    };

    function hx(a, b, c = 0) {
        var d = a.l;
        for (var e of b.B) d = Lk(d, e.ia(a.A), ix(e.ja(), c));
        e = d = d.apply(or(a.A));
        for (const g of b.l) e = Lk(e, g.ia(a.A), jx(g.ja(), c));
        switch (b.A) {
            case 1:
                e = ex(a.j, e);
                break;
            case 2:
                e = fx(a.j, e);
                break;
            case 3:
                const g = O(Uw);
                e = cx(a.j, e);
                d.forEach(h => {
                    Nw(g, h);
                    var l;
                    null != (l = a.j.j) && (l = Zw(l, h), null != (null == l ? void 0 : l.Ka) && Qw(O(Uw), h, l.Ka))
                });
                e.forEach(h => Ow(g, h))
        }
        b.C && (e = Nk(e, tf(a.A.location.href + a.A.localStorage.google_experiment_mod)));
        let f;
        1 === (null == (f = b.j) ? void 0 : f.length) && gw(a.B, b.j[0], {
            qe: d.j.length,
            Hf: e.j.length
        });
        return e.j.slice(0)
    }
    class kx {
        constructor(a, b, c = 0, d = null) {
            this.l = new Mk(a);
            this.j = new gx(b, c, d);
            this.A = b;
            this.B = new hw
        }
    }
    const ix = (a, b) => c => Lp(c, b, a),
        jx = (a, b) => c => Lp(c.V, b, a);

    function lx(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = mx(nx(c), a);
                    break a;
                case 3:
                    a = mx(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = mx(e ? 1 == e.nodeType ? e : nx(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !ox(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !Sm(b) && 0 >= b.offsetWidth);
        return d
    }

    function mx(a, b) {
        if (!a) return !1;
        a = Yf(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function nx(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function ox(a) {
        return !!a.nextSibling || !!a.parentNode && ox(a.parentNode)
    };
    var px = !Bb && !db();

    function qx(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (px && a.dataset) {
            if (fb() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var rx = (a, b, c) => {
            if (!b) return null;
            const d = Ff(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = Q(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var l = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = l - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        sx = a => {
            const b = a.document.body;
            var c = rx(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; 0 < d.length;) {
                    const h = d.pop(),
                        l = h.element;
                    var g = h.height;
                    0 < h.depth && g > e && (e = g, f = l);
                    if (5 > h.depth)
                        for (let k = 0; k < l.children.length; k++) {
                            const m = l.children[k];
                            g = c;
                            const n = m.getBoundingClientRect().width;
                            (null == n || null == g ? 0 : n >= .9 * g && n <= 1.01 * g) && d.push({
                                element: m,
                                depth: h.depth + 1,
                                height: m.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? rx(a, c.parentNode || b, c) : null
        },
        ux = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, Pf() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) ||
                    (b |= 32768), tx(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        tx = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == qx(a[b])) return !0;
            return !1
        };

    function vx(a) {
        const b = oj(a, !0),
            c = Q(a).scrollWidth,
            d = Q(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = tj(a);
        const g = [];
        var h = [];
        const l = [],
            k = [];
        var m = [],
            n = [],
            p = [];
        let r = 0,
            v = 0,
            t = Infinity,
            x = Infinity,
            w = null;
        var G = Nq({
            Sa: !1
        }, a);
        for (var E of G) {
            G = E.getBoundingClientRect();
            const ja = b - (G.bottom + f);
            var H = void 0,
                I = void 0;
            if (E.className && Xa(E.className, "adsbygoogle-ablated-ad-slot")) {
                H = E.getAttribute("google_element_uid");
                I = a.google_sv_map;
                if (!H || !I || !I[H]) continue;
                H = (I = vh(I[H])) ? I.height : 0;
                I = I ? I.width : 0
            } else if (H = G.bottom - G.top, I = G.right - G.left, 1 >= H || 1 >= I) continue;
            g.push(H);
            l.push(I);
            k.push(H * I);
            E.className && Xa(E.className, "google-auto-placed") ? (v += 1, E.className && Xa(E.className, "pedestal_container") && (w = H)) : (t = Math.min(t, ja), n.push(G), r += 1, h.push(H), m.push(H * I));
            x = Math.min(x, ja);
            p.push(G)
        }
        t = Infinity === t ? null : t;
        x = Infinity === x ? null : x;
        f = wx(n);
        p = wx(p);
        h = xx(b, h);
        n = xx(b, g);
        m = xx(b * c, m);
        E = xx(b * c, k);
        return new yx(a, {
            He: e,
            Lc: b,
            lf: c,
            kf: d,
            bf: r,
            pe: v,
            se: zx(g),
            te: zx(l),
            re: zx(k),
            gf: f,
            ff: p,
            ef: t,
            df: x,
            xc: h,
            wc: n,
            ke: m,
            je: E,
            mf: w
        })
    }

    function Ax(a, b, c, d) {
        const e = Pf() && !(900 <= Q(a.l).clientWidth);
        d = kb(d, f => ob(a.A, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.He,
            pg_h: Bx(a.j.Lc),
            pg_w: Bx(a.j.lf),
            pg_hs: Bx(a.j.kf),
            c: Bx(a.j.bf),
            aa_c: Bx(a.j.pe),
            av_h: Bx(a.j.se),
            av_w: Bx(a.j.te),
            av_a: Bx(a.j.re),
            s: Bx(a.j.gf),
            all_s: Bx(a.j.ff),
            b: Bx(a.j.ef),
            all_b: Bx(a.j.df),
            d: Bx(a.j.xc),
            all_d: Bx(a.j.wc),
            ard: Bx(a.j.ke),
            all_ard: Bx(a.j.je),
            pd_h: Bx(a.j.mf),
            dt: e ? "m" : "d"
        }
    }
    class yx {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.A = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function zx(a) {
        return nf.apply(null, kb(a, b => 0 < b)) || null
    }

    function xx(a, b) {
        return 0 >= a ? null : mf.apply(null, b) / a
    }

    function wx(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function Bx(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function Cx(a, b) {
        b = (Q(b).clientHeight || 0) - tj(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            Vq(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function Dx(a) {
        const b = {};
        var c = Pq({
            Sa: !1,
            Sb: !1,
            Tb: !1,
            Ub: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Vq);
        b.fe = c.length;
        c = Qq({
            Tb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Vq);
        b.Je = c.length;
        c = Qq({
            Ub: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Vq);
        b.hf = c.length;
        c = Qq({
            Sb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Vq);
        b.ie = c.length;
        c = (Q(a).clientHeight || 0) - tj(a);
        c = Pq({
            Sa: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Vq).filter(Ba(Ex, null, c));
        b.ge = c.length;
        a = vx(a);
        c = null != a.j.xc ? a.j.xc :
            null;
        null != c && (b.cf = c);
        a = null != a.j.wc ? a.j.wc : null;
        null != a && (b.he = a);
        return b
    }

    function vv(a, b, {
        ac: c,
        rc: d,
        uc: e
    } = {}) {
        return sp(997, () => Fx(a, b, {
            ac: c,
            rc: d,
            uc: e
        }), a.j)
    }

    function wv(a, b, c, d) {
        var e = c.Na ? c.Na : a.D;
        const f = Bq(e, b.j.length);
        e = a.A.Xc ? e.j : void 0;
        const g = aw(bw(Yv($v(Zv(Xv(Vv(Wv(Tv(Uv(Rv(c.types), a.W), c.Nc || []), a.O), c.yf || [])), f.cc || void 0, e, b), c.minWidth, c.maxWidth)), f.Xa || void 0));
        a.M && g.j.push(new Fv(a.M));
        b = 1;
        a.A.Vc ? b = 2 : a.Ia() && (b = 3);
        cw(g, b);
        a.A.Pc && (g.B = !0);
        return sp(995, () => hx(a.l, g.build(), d), a.j)
    }

    function yv(a, b) {
        const c = sx(a.j);
        if (c) {
            const d = jl(a.J, b),
                e = cp(a.j.document, a.G, null, null, {}, d);
            e && (Io(e.Ra, c, 2, 256), sp(996, () => Gx(a, e, d), a.j))
        }
    }

    function Hx(a) {
        return a.F ? a.F : a.F = a.j.google_ama_state
    }

    function Fx(a, b, {
        ac: c,
        rc: d,
        uc: e
    } = {}) {
        const f = b.V;
        if (f.B) return !1;
        var g = b.aa();
        if (!lx(a.j, f.l(), g, a.B)) return !1;
        c = null == c ? null : new kl(null, {
            google_max_responsive_height: c
        });
        g = ll(z(f.lc, 2) || 0);
        const h = ml(f.G),
            l = Ix(a, f),
            k = jl(a.J, f.M ? f.M.j(b.X) : null, c, d || null, g, h, l),
            m = b.fill(a.G, k);
        if (e && !Jx(a, m, k) || !sp(996, () => Gx(a, m, k), a.j)) return !1;
        Zi(9, [f.G, f.Ta]);
        a.Ia() && Pw(O(Uw), b);
        return !0
    }

    function Ix(a, b) {
        return Tk(Vk(Rp(b).map(nl), () => {
            a.C.push(18)
        }))
    }

    function Jx(a, b, c) {
        if (!b) return !1;
        var d = b.ra,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.j;
        e = b.ra;
        c = c && c.rb() || {};
        if (d !== d.top) var g = Vf(d) ? 3 : 16;
        else if (488 > Q(d).clientWidth)
            if (d.innerHeight >= d.innerWidth)
                if (g = Q(d).clientWidth, !g || .3 < (g - f) / g) g = 6;
                else {
                    if (g = "true" != c.google_full_width_responsive) b: {
                        var h = e.parentElement;
                        for (g = Q(d).clientWidth; h; h = h.parentElement) {
                            const l = Yf(h, d);
                            if (!l) continue;
                            const k = ig(l.width);
                            if (k && !(k >= g) && "visible" != l.overflow) {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
        else g = 5;
        else g = 4;
        if (!0 !== g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = Yf(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = Q(d).clientWidth, f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.j;
            b = b.ra;
            if (f = Zo(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", Xo(b, f, "0px"), b.style.width = Q(a).clientWidth + "px", $o(a, b, f), b.style.zIndex = 30;
            return !0
        }
        Wm(b.Ra);
        return !1
    }

    function Gx(a, b, c) {
        if (!b) return !1;
        try {
            gp(a.j, b.ra, c)
        } catch (d) {
            return Wm(b.Ra), a.C.push(6), !1
        }
        return !0
    }
    class Kx {
        constructor(a, b, c, d, e = {}, f = []) {
            this.l = a;
            this.G = b;
            this.j = c;
            this.D = d.Na;
            this.W = d.nb || [];
            this.J = d.Ke || null;
            this.O = d.Ge || [];
            this.M = d.sc || [];
            this.A = e;
            this.B = !1;
            this.L = [];
            this.C = [];
            this.I = this.F = void 0;
            this.Z = f
        }
        T() {
            return this.j
        }
        ua(a) {
            this.L.push(a)
        }
        Ia() {
            var a;
            let b;
            if (0 == (null != (b = null == (a = this.l.j.j) ? void 0 : [...Gc(a.j, 1)].length) ? b : 0)) return !1;
            if (0 == (V(Wn) || 0)) return !0;
            if (void 0 === this.I) {
                const c = cw(Yv(Xv(Rv([0, 1, 2]))), 1).build();
                a = sp(995, () => hx(this.l, c), this.j);
                let d;
                this.I = (null == (d = this.l.j.j) ?
                    void 0 : ax(d, a)) || !1
            }
            return this.I
        }
        Fc() {
            return !!this.A.Ld
        }
        Yb() {
            return !tx(this.j)
        }
    }
    const Ex = (a, b) => b.top <= a;

    function Lx(a, b, c, d, e, f = 0, g = 0) {
        this.Da = a;
        this.kc = f;
        this.jc = g;
        this.errors = b;
        this.Ma = c;
        this.j = d;
        this.l = e
    };
    var Mx = (a, {
        Yb: b = !1,
        Fc: c = !1,
        Af: d = !1,
        Ia: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e && U(Un)) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !U(En);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !U(En) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function Nx(a, b, c) {
        a = Mx(a, {
            Yb: b.Yb(),
            Fc: b.Fc(),
            Af: !!b.A.zc,
            Ia: b.Ia()
        });
        return new Ox(a, b, c)
    }

    function Px(a, b) {
        const c = sv[b];
        return c ? sp(998, () => c(a.j), a.C) : (a.j.ua(12), !0)
    }
    class Ox {
        constructor(a, b, c) {
            this.B = a.slice(0);
            this.l = a.slice(0);
            this.A = pb(this.l, 1);
            this.j = b;
            this.C = c
        }
    };
    const Qx = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };
    class Rx {
        j() {
            return new kl([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class Sx {
        j() {
            return new kl(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function Tx(a) {
        return Tm(a.j.document).map(b => {
            const c = new $p(b, 3);
            b = new Dp(ip(a.j, b));
            return new Hp(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class Ux {
        constructor(a) {
            var b = new Sx;
            this.j = a;
            this.l = b || null
        }
    };
    const Vx = {
        Uc: "10px",
        tc: "10px"
    };

    function Wx(a) {
        return Cj(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new Hp(new $p(b, 1), new Bp(Vx), a.l, !1, 0, [], null, a.j, null))
    }
    class Xx {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function Yx(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function Zx(a, b, c) {
        const d = Yx(c.Pb, "gapsMeasurementWindow") || Yx(c.pb, "gapsPerMeasurementWindow") || Yx(c.vb, "maxGapsToReport");
        return null != d ? Rk(d) : c.Zc || -1 != c.pb || -1 != c.vb ? Pk(new $x(a, b, c)) : Rk("ShouldHaveLimits")
    }

    function ay(a) {
        return Hx(a.A) && Hx(a.A).placed || []
    }

    function by(a) {
        return ay(a).map(b => Ck(Ak(b.element, a.j)))
    }

    function cy(a) {
        return ay(a).map(b => b.index)
    }

    function dy(a, b) {
        const c = b.V;
        return !a.D && c.A && Bc(c.A, 8) && 1 == z(c.A, 8) ? [] : c.B ? (c.J || []).map(d => Ck(Ak(d, a.j))) : [Ck(new Bk(b.X.j, 0))]
    }

    function ey(a) {
        a.sort((e, f) => e.j - f.j);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.j;
            d = d.j + d.l;
            f <= c ? c = Math.max(c, d) : (b.push(new Bk(c, f - c)), c = d)
        }
        return b
    }

    function fy(a, b) {
        b = b.map(c => {
            var d = new cv;
            d = A(d, 1, c.j);
            c = c.getHeight();
            return A(d, 2, c)
        });
        return $u(Zu(new bv, a), b)
    }

    function gy(a) {
        const b = F(a, cv, 2).map(c => `G${C(c,1,0)}~${c.getHeight()}`);
        return `W${C(a,1,0)}${b.join("")}`
    }

    function hy(a, b) {
        const c = [];
        let d = 0;
        for (const e of Fj(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.I || f.splice(a.C, f.length);
            !a.G && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(fy(e, f));
            d += f.length;
            if (!a.G && d >= a.l) break
        }
        return c
    }

    function iy(a) {
        const b = F(a, bv, 5).map(c => gy(c));
        return `M${C(a,1,0)}H${C(a,2,0)}C${C(a,3,0)}B${Number(!!Ic(a,4))}${b.join("")}`
    }

    function jy(a) {
        var b = iq(a.A.l.l.j.slice(0), a.j),
            c = by(a),
            d = new Ij(cy(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = dy(a, b[e]);
                c.push(...f)
            }
        c.push(new Bk(0, 0));
        c.push(Ck(new Bk(Q(a.j).scrollHeight, 0)));
        b = ey(c);
        c = new Hj;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.F ? 0 : Math.floor(e.j / a.B), Dj(c, f) || c.set(f, []), c.get(f).push(e);
        b = hy(a, c);
        c = new Yu;
        c = A(c, 1, a.l);
        c = A(c, 2, a.B);
        c = A(c, 3, a.C);
        a = A(c, 4, a.D);
        return Pc(a, 5, b)
    }

    function ky(a) {
        a = jy(a);
        return iy(a)
    }
    var $x = class {
        constructor(a, b, c) {
            this.F = -1 == c.Pb;
            this.B = c.Pb;
            this.I = -1 == c.pb;
            this.C = c.pb;
            this.G = -1 == c.vb;
            this.l = c.vb;
            this.D = c.vd;
            this.A = b;
            this.j = a
        }
    };

    function ly(a) {
        var b = new my;
        return A(b, 1, a)
    }
    var my = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var ny = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function oy(a) {
        var b = Tw();
        Nc(a, 1, b)
    }

    function py(a, b) {
        return Pc(a, 3, b)
    }

    function qy(a, b) {
        Pc(a, 4, b)
    }

    function ry(a, b) {
        var c = my;
        rc(a);
        const d = Mc(a, c, 4, void 0, !1);
        b = null != b ? b : new c;
        c = Gc(a, 4);
        d.push(b);
        c.push(b.N);
        Ja(Ia);
        lc(b.N) && nc(c, !1);
        return a
    }

    function sy(a, b) {
        return Pc(a, 5, b)
    }
    var uy = class extends K {
            constructor() {
                super(void 0, -1, ty)
            }
            I(a) {
                return A(this, 8, a)
            }
        },
        ty = [3, 4, 5, 6];
    const vy = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        wy = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var xy = (a, b) => {
        a = Gc(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const zy = (a, b) => {
            a = wy(vy(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = bg(a),
                d = yy(a);
            return b.find(e => {
                const f = Cc(e, 7) ? z(D(e, um, 7), 1) : z(e, 1);
                e = Cc(e, 7) ? z(D(e, um, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        yy = a => {
            const b = {};
            for (;;) {
                b[bg(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    const Ay = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var By = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            P("ama", b, .01)
        },
        Cy = a => {
            const b = {};
            $f(Ay, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var Dy = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                By(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            By(a, {
                lserr: 1
            })
        }
    };

    function Ey(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function Fy(a, b) {
        a = Ey(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };
    var Gy = class extends K {
            constructor() {
                super(void 0)
            }
            bb(a) {
                return A(this, 2, a)
            }
        },
        Hy = [4, 5];

    function Iy() {
        if (Jy) return Jy;
        const a = Pg() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Jy = b : a.google_persistent_state_async = Jy = new Ky
    }

    function X(a, b, c) {
        b = Ly[b] || "google_ps_" + b;
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function My(a, b, c) {
        return a.S[Ly[b] || "google_ps_" + b] = c
    }

    function Ny(a, b) {
        return My(a, b, X(a, b, 0) + 1)
    }

    function Oy() {
        var a = Iy();
        return X(a, 20, {})
    }

    function Py() {
        var a = Iy();
        const b = X(a, 31, !1);
        b || My(a, 31, !0);
        return !b
    }

    function Qy() {
        var a = Iy();
        return X(a, 26)
    }

    function Ry() {
        var a = Iy();
        return X(a, 28, [])
    }
    class Ky {
        constructor() {
            this.S = {}
        }
    }
    var Jy = null;
    const Ly = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    var Sy = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl",
            easpf: "easpf",
            easpi: "easpi"
        },
        Ty = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        Uy = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g,
                        ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        Vy = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };
    const Wy = new WeakMap;

    function Xy() {
        var a = Yy,
            b = Zy;
        const c = wa(a),
            d = ([, ...f]) => b(c, f),
            e = ([f, ...g]) => a.apply(f, g);
        return function(...f) {
            const g = this || u;
            let h = Wy.get(g);
            h || (h = {}, Wy.set(g, h));
            return zb(h, [this, ...f], e, d)
        }
    }

    function Zy(a, b) {
        a = [a];
        for (let c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\v")
    };

    function Yy(a) {
        if (a.google_ad_client) return String(a.google_ad_client);
        var b, c, d;
        let e, f;
        if (null != (e = null != (d = null == (b = Ey(a).head_tag_slot_vars) ? void 0 : b.google_ad_client) ? d : null == (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : c.getAttribute("data-ad-client"))) b = e;
        else {
            b: {
                b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                    "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !th() ? Ty : Uy;
                for (c = b.length - 1; 0 <= c; c--)
                    if (d = b[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                        b = d;
                        break b
                    }
                b = null
            }
            if (b) {
                a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                for (c = {}; d = a.exec(b);) c[d[1]] = Vy(d[2]);
                b = c;
                b = b.google_ad_client ? b.google_ad_client : ""
            } else b = ""
        }
        return null != (f = b) ? f : ""
    };

    function $y(a, b) {
        var c = new Gy;
        c = A(c, 1, a.B).bb(a.webPropertyCode);
        c = A(c, 3, a.l);
        b = Oc(c, 5, Hy, b);
        a.j && !a.A.has(2) && (a.A.add(2), pi(a.xa, b))
    }
    var az = class {
        constructor(a) {
            this.A = new Set;
            this.win = Pg() || window;
            this.l = V(dn);
            var b = 0 < this.l && Zf() < 1 / this.l;
            this.B = (this.j = !!X(Iy(), 30, b)) ? yg(this.win) : 0;
            this.j ? (b = this.win, b = U(Vn) ? Xy()(b) : Yy(b)) : b = "";
            this.webPropertyCode = b;
            this.xa = null != a ? a : new ui
        }
    };
    var cz = (a, b, c, d, e, f = null, g = null, h) => {
            bz(a, new Pm(a), b, c, d, e, f, new Ek(a), g, h)
        },
        bz = (a, b, c, d, e, f, g = null, h = null, l = null, k) => {
            if (c)
                if (d) {
                    var m = yt(d, e);
                    try {
                        const n = new dz(a, b, c, d, e, m, f, g, h, l, k);
                        sp(990, () => ez(n), a)
                    } catch (n) {
                        Yi() && Zi(15, [n]), Om(b, Dm, Lm(jw(iw((new kw(0)).bb(c), d), m).ua(1), n)), $y(O(az), ry(new uy, ly(1)))
                    }
                } else Om(b, Dm, (new kw(0)).bb(c).ua(8)), $y(O(az), ry(new uy, ly(8)));
            else Om(b, Dm, (new kw(0)).ua(9)), $y(O(az), ry(new uy, ly(9)))
        };

    function ez(a) {
        a.I.forEach(b => {
            switch (b) {
                case 0:
                    sp(991, () => fz(a), a.l);
                    break;
                case 1:
                    vt(new xt(a.l, a.j, a.C));
                    break;
                case 5:
                    Qs(new Ss(a.l, a.j));
                    break;
                case 2:
                    gz(a);
                    break;
                case 3:
                    hz(a);
                    break;
                case 4:
                    iz(a)
            }
        })
    }

    function fz(a) {
        jz(a);
        if (km(a.j) && 1 === z(km(a.j), 1)) {
            var b = D(km(a.j), wm, 6);
            b && 2 === z(b, 1) && (hp(a.l), a.G = "b")
        }
        var c = a.B.pf;
        b = yq(a.l, c);
        if (a.B.ca && Cc(a.B.ca, 10)) {
            var d = Hc(D(a.B.ca, vm, 10), 1);
            null !== d && void 0 !== d && (b = qq(a.l, d, c))
        }
        Cc(a.j, 26) && (b = Cq(b, D(a.j, ym, 26), a.l));
        c = a.B.ca ? Gc(a.B.ca, 6) : [];
        d = a.B.ca ? F(a.B.ca, Jl, 5) : [];
        const e = a.B.ca ? Gc(a.B.ca, 2) : [],
            f = sp(993, () => {
                var l = a.j,
                    k = F(l, Wl, 1);
                const m = a.B.ca && xy(a.B.ca, 1) ? "text_image" : "text";
                var n = new Rx;
                let p = Gp(k, a.l, {
                    ve: n,
                    We: new Ep(m)
                });
                k.length != p.length && a.J.push(13);
                p = p.concat(Wx(new Xx(a.l, n)));
                k = 0;
                n = U(Ln);
                let r = !1;
                if (km(l) && 1 === z(km(l), 1)) {
                    var v = D(km(l), wm, 6);
                    v && (k = z(v, 2) || 0, 1 === z(v, 1) && (r = !0))
                }
                var t, x;
                let w;
                v = (null == (t = D(l, cm, 24)) ? void 0 : null == (x = D(t, gm, 3)) ? void 0 : null == (w = D(x, hm, 3)) ? void 0 : Qc(w, im, 2, jm)) || !1;
                if (n || r || v)
                    if (t = Tx(new Ux(a.l)), x = O(Uw), p = p.concat(t), x.J = !0, x.D = t.length, "n" === a.G) {
                        let G, E;
                        a.G = (null == (G = D(l, cm, 24)) ? 0 : null == (E = Gc(G, 1)) ? 0 : E.length) ? "o" : "p"
                    }
                p = p.concat(Wu(l, m, a.l));
                l = D(l, cm, 24);
                return new kx(p, a.l, k, l)
            }, a.l);
        a.A = new Kx(f, a.C, a.l, {
            Na: b,
            Ke: a.Z,
            nb: a.B.nb,
            Ge: c,
            sc: d
        }, kz(a), e);
        let g, h;
        (null == (g = Hx(a.A)) ? 0 : null == (h = g.optimization) ? 0 : h.ablatingThisPageview) && !a.A.Ia() && (hp(a.l), O(Uw).C = !0, a.G = "f");
        a.F = Nx(e, a.A, a.l);
        sp(992, () => {
            var l = a.F;
            const k = new Aj;
            for (l.j.B = !0; 0 < l.l.length;) Px(l, l.l[0]) || l.j.ua(5), l.l.shift();
            try {
                var m = k.resolve,
                    n = l.j.l.l.filter(Ip).j.length,
                    p = l.j.L.slice(0),
                    r = l.j;
                let x;
                var v = [...r.C, ...((null == (x = r.l.j.j) ? void 0 : [...x.l]) || [])];
                var t = new Lx(n, p, v, l.j.l.l.j.length, l.j.l.B.j, l.j.l.l.filter(Ip).filter(Jp).j.length, l.j.l.l.filter(Jp).j.length);
                m.call(k, new Qx(t))
            } catch (x) {
                l = x, xj(k), k.j = 2, k.A = l, zj(k.l)
            }
            return k.l
        }, a.l).then(sp(994, () => a.za.bind(a), a.l), a.W.bind(a))
    }

    function gz(a) {
        const b = D(a.j, Yl, 18);
        b && Bu(new Cu(a.l, new Vu(a.l, a.C), b, new bt(a.l), F(a.j, Wl, 1)))
    }

    function hz(a) {
        Uk($r(a.l, a.D, a.j, a.pa, {
            google_ad_client: a.C
        }), b => {
            var c = b.B;
            var d = D(b.A, pl, 2);
            var e = Kr(b.F, c);
            e = e.filter(Mr).filter(Nr(e)).filter(Or(c));
            e.sort(Pr);
            if (e = e[0] || null) {
                a: switch (C(d, 1, 0)) {
                    case 1:
                        d = 1;
                        break a;
                    case 2:
                        d = 2;
                        break a;
                    case 3:
                        d = 3;
                        break a;
                    default:
                        throw Error(`Unknown player position: ${C(d,1,0)}`);
                }
                a: switch (d) {
                    case 1:
                        c = new Dr(c, e);
                        break a;
                    case 2:
                        c = new mq(jq(c, e));
                        break a;
                    case 3:
                        c = new Cr(c, jq(c, e));
                        break a;
                    default:
                        throw Error(`Unknown position: ${d}`);
                }
                c = c.j()
            }
            else c = null;
            if (c) {
                if (e = !!b.C.Bb && cs(b)) b.D = Xr(b.B, b.G, b.C.Bb);
                d = b.B;
                var f = D(b.A, tl, 4) || void 0;
                if (0 < d.document.getElementsByTagName("google-read-aloud-player").length) d = Rk("Player already created");
                else {
                    var g = b.C;
                    const l = d.document,
                        k = l.createElement("div");
                    k.id = "google-auto-placed-read-aloud-player";
                    M(k, {
                        margin: "5px"
                    });
                    const m = l.createElement("script");
                    var h = Ug `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`;
                    m.textContent = sd(h);
                    we(m);
                    k.appendChild(m);
                    Qr(l, k, ed("https://www.google-analytics.com/analytics.js"));
                    Qr(l, k, ed("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
                    h = l.createElement("google-read-aloud-player");
                    h.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
                    h.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
                    h.setAttribute("data-url", g.url);
                    h.setAttribute("data-voice", "en-us-m-6");
                    f && (Bc(f, 1) && 0 != C(f, 1, 0) && h.setAttribute("data-docking-begin-trigger", Rr[C(f, 1, 0)]), Bc(f, 2) && h.setAttribute("data-experiment", J(f, 2)));
                    k.appendChild(h);
                    Up(c,
                        k);
                    d = Pk(d.document.getElementsByTagName("google-read-aloud-player")[0])
                }
                null != d.j ? (b.l = d.j.value, e && bs(b), Qm(b.j, "place", {
                    sts: "ok",
                    pp: c.X.j
                })) : Qm(b.j, "place", {
                    sts: "wf"
                })
            } else Qm(b.j, "place", {
                sts: "pf"
            })
        })
    }

    function iz(a) {
        const b = D(a.j, $l, 29);
        if (b) {
            var c, d;
            lz(a.ya, {
                win: a.l,
                webPropertyCode: a.C,
                pd: b,
                cd: null != (d = null == (c = D(a.j, Pl, 6)) ? void 0 : F(c, Ql, 1)) ? d : []
            })
        }
    }

    function jz(a) {
        mz(a) && nz(a, "p", oz(a))
    }

    function kz(a) {
        const b = U(Mn);
        if (!mm(a.j)) return {
            Pc: b,
            Vc: !1,
            jd: !1,
            Td: !1,
            md: !1,
            Ld: !1,
            nf: 0,
            Fd: 0,
            Xc: pz(a),
            zc: a.O
        };
        const c = mm(a.j);
        let d = Hc(c, 8);
        return {
            Pc: b || Ic(c, 14, !1),
            Vc: Ic(c, 2, !1),
            jd: Ic(c, 3, !1),
            Td: Ic(c, 4, !1),
            md: Ic(c, 5, !1),
            Ld: Ic(c, 6, !1),
            nf: null == d ? 0 : d,
            Fd: z(c, 10),
            Xc: pz(a),
            zc: a.O
        }
    }

    function pz(a) {
        return a.B.ca && Cc(a.B.ca, 10) ? .5 <= (Hc(D(a.B.ca, vm, 10), 1) || 0) : !0
    }

    function qz(a, b) {
        for (var c = Km(Km(new kw(b.Da), b.errors), a.J), d = b.Ma, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.D.length; g++)
                if (c.D[g] == f) break a;c.D.push(f)
        }
        c.j.pp = b.jc;
        c.j.ppp = b.kc;
        c.j.ppos = b.placementPositionDiffs;
        c.j.eatf = b.Mb;
        c.j.eatfAbg = b.Nb;
        c.j.reatf = b.sb;
        c.j.a = a.F.B.slice(0).join(",");
        c = jw(iw(c, a.j), a.I).bb(a.C);
        if (d = b.Hb) c.j.as_count = d.fe, c.j.d_count = d.Je, c.j.ng_count = d.hf, c.j.am_count = d.ie, c.j.atf_count = d.ge, c.j.mdns = lw(d.cf), c.j.alldns = lw(d.he);
        c = c.I(b.xb);
        if (d = b.Le) {
            e = [];
            for (var h of Fj(d)) 0 <
                d.get(h).length && (f = d.get(h)[0], e.push("(" + [h, f.qe, f.Hf].join() + ")"));
            c.j.fd = e.join(",")
        }
        h = b.Lc;
        null != h && (c.j.pgh = h);
        c.j.abl = b.sd;
        c.j.rr = a.G;
        void 0 !== b.exception && Lm(c, b.exception).ua(1);
        return c
    }

    function rz(a, b) {
        var c = qz(a, b);
        Om(a.D, 0 < b.errors.length || 0 < a.J.length || void 0 !== b.exception ? 0 < a.M ? Fm : Dm : 0 < a.M ? Em : Cm, c);
        if (D(a.j, cm, 24)) {
            if (null != (b = a.A.l.j.j)) {
                const p = O(Uw);
                var d = [...Gc(b.j, 1)];
                p.B = d;
                var e;
                let r;
                d = !!(null == (e = D(b.j, gm, 3)) ? 0 : null == (r = D(e, hm, 3)) ? 0 : Qc(r, im, 2, jm));
                p.F = d;
                e = new Hj;
                var f, g;
                for (var h of null != (g = null == (f = D(b.j, em, 2)) ? void 0 : F(f, fm, 1)) ? g : []) e.set(h.Rb(), h.Cc());
                p.l = e
            }
            h = Hx(a.A);
            f = O(Uw);
            var l;
            g = !!(null == h ? 0 : null == (l = h.optimization) ? 0 : l.ablationFromStorage);
            f.A = g;
            let n;
            if (null ==
                h ? 0 : null == (n = h.optimization) ? 0 : n.ablatingThisPageview) f.G = !0;
            var k;
            l = !!(null == h ? 0 : null == (k = h.optimization) ? 0 : k.availableAbg);
            f.L = l;
            var m;
            k = O(Uw);
            c = new xw(c);
            k.B ? (l = null != (m = k.B) ? m : [], c.l.sl = l.join("~"), c.l.ab = nw(k.G), c.l.rr = nw(k.J), c.l.oab = nw(k.F), null != k.A && (c.l.sab = nw(k.A)), k.C && (c.l.fb = nw(k.C)), c.l.ls = nw(k.L), mw(c, k.l.qb()), null != k.D && (c.l.rp = nw(k.D)), Sw(k, c)) : (m = c, k = "irr".replace(RegExp("~", "g"), ""), m.l.e = m.l.e ? m.l.e + ("~" + k) : k);
            m = c;
            Om(a.D, Im, m)
        }
    }

    function sz(a, b) {
        const c = O(az);
        if (c.j) {
            var d = new uy,
                e = b.Ma.filter(f => null !== f);
            b = a.J.concat(b.errors, b.exception ? [1] : []).filter(f => null !== f);
            qy(sy(py(d, a.F.B.slice(0).map(f => {
                var g = new fv;
                return A(g, 1, f)
            })), e.map(f => {
                var g = new ny;
                return A(g, 1, f)
            })), b.map(f => ly(f)));
            D(a.j, cm, 24) && oy(d);
            $y(c, d)
        }
    }

    function tz(a) {
        return km(a.j) && 1 === z(km(a.j), 1) ? !(D(km(a.j), wm, 6) && 1 <= (z(D(km(a.j), wm, 6), 3) || 0)) : !1
    }

    function uz(a) {
        if (tz(a)) {
            a = a.A;
            var b = Qq({
                Tb: !0,
                Ub: !0
            }, a.j);
            a = 0 < Cx(b, a.j)
        } else a = a.A.j, b = Pq({
            Sa: !1,
            Sb: !1
        }, a), a = 0 < Cx(b, a);
        return a
    }

    function vz(a) {
        if (mz(a)) {
            var b = oz(a);
            a.L.init(null == b ? void 0 : b, () => {
                nz(a, "s", b)
            });
            a.L.addListener(c => {
                nz(a, "d", oz(a), c);
                a.L.va();
                let d, e;
                if (null == (d = a.j) ? 0 : null == (e = mm(d)) ? 0 : Ic(e, 21, !1)) {
                    let f, g;
                    null != (f = a.j) && null != (g = mm(f)) && A(g, 18, !1);
                    try {
                        let h;
                        if (null == (h = a.I) ? 0 : h.includes(0)) a.M++, fz(a), nz(a, "r", oz(a), c)
                    } catch (h) {
                        nz(a, "f", oz(a), c), Om(a.D, Fm, Lm(jw(iw((new kw(0)).bb(a.C), a.j), a.I).ua(1), h))
                    }
                }
            })
        }
    }

    function wz(a, b, c) {
        {
            var d = Hx(a.A);
            const f = b.j,
                g = f.j,
                h = f.jc;
            let l = f.Da,
                k = f.kc,
                m = f.errors.slice(),
                n = f.Ma.slice(),
                p = b.exception;
            let r;
            var e = null != (r = Ey(a.l).had_ads_ablation) ? r : !1;
            d ? (d.numAutoAdsPlaced ? l += d.numAutoAdsPlaced : a.F.A && n.push(13), void 0 !== d.exception && (p = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                Da: l,
                jc: h,
                kc: k,
                xb: g,
                errors: f.errors.slice(),
                Ma: n,
                exception: p,
                sb: c,
                Mb: !!d.eatf,
                Nb: !!d.eatfAbg,
                sd: e
            }) : (n.push(12), a.F.A && n.push(13), c = {
                Da: l,
                jc: h,
                kc: k,
                xb: g,
                errors: m,
                Ma: n,
                exception: p,
                sb: c,
                Mb: !1,
                Nb: !1,
                sd: e
            })
        }
        c.Hb = Dx(a.A.j);
        if (b = b.j.l) c.Le = b;
        c.Lc = Q(a.l).scrollHeight;
        if (Yi()) {
            d = a.A.l.l.j.slice(0);
            b = [];
            for (const f of d) {
                d = {};
                e = f.L;
                for (const g of Fj(e)) d[g] = e.get(g);
                d = {
                    anchorElement: f.F.j(f.j),
                    position: f.l(),
                    clearBoth: f.I,
                    locationType: f.Ta,
                    placed: f.B,
                    placementProto: f.A ? f.A.toJSON() : null,
                    articleStructure: f.C ? f.C.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            Zi(14, [{
                placementIdentifiers: b
            }, a.A.G, c.Hb])
        }
        return c
    }

    function xz(a, b) {
        var c = a.A.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.xb;
        c.numAutoAdsPlaced = b.Da;
        c.hasAtfAd = b.sb;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.A && (a = Zx(a.l, a.A, {
            Pb: -1,
            pb: -1,
            vb: -1,
            vd: !0,
            Zc: !0
        }), null != a.j ? (c.placementPositionDiffs = ky(a.j.value), b = jy(a.j.value), a = new dv, a = Oc(a, 2, ev, b), c.placementPositionDiffsReport = Vc(a)) : (b = a.l.message, c.placementPositionDiffs = "E" + b, a = new dv, a = Lc(a, 1, ev, b), c.placementPositionDiffsReport = Vc(a)))
    }

    function nz(a, b, c, d) {
        b = {
            r: b,
            pg_h: Q(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (b.pg_hd = d);
        Nm(a.D, Hm, b)
    }

    function mz(a) {
        let b, c, d;
        return null != (d = null == (b = a.j) ? void 0 : null == (c = mm(b)) ? void 0 : Ic(c, 18, !1)) ? d : !1
    }

    function oz(a) {
        let b = null;
        mm(a.j) && Bc(mm(a.j), 19) && (b = z(mm(a.j), 19));
        return b
    }
    class dz {
        constructor(a, b, c, d, e, f, g, h, l, k, m) {
            this.l = a;
            this.D = b;
            this.C = c;
            this.j = d;
            this.B = e;
            this.I = f;
            this.Z = h || null;
            this.J = [];
            this.L = l;
            this.O = k;
            this.ya = g;
            this.M = 0;
            this.pa = m ? m : {
                url: a.location.href,
                Bb: void 0
            };
            this.G = "n"
        }
        za(a) {
            try {
                const b = uz(this) || tz(this) ? uz(this) : void 0;
                Bm({
                    yc: b
                }, this.l);
                vz(this);
                const c = wz(this, a, uz(this));
                Cc(this.j, 25) && B(D(this.j, xm, 25), 1) && xz(this, c);
                rz(this, c);
                sz(this, c);
                Ji(753, () => {
                    if (U(Gn) && null != this.A) {
                        var d = Zx(this.l, this.A, {
                                Pb: V(Kn),
                                pb: V(Jn),
                                vb: V(Hn),
                                vd: !0,
                                Zc: !1
                            }),
                            e = ld(c);
                        null != d.j ? (d = ky(d.j.value), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.l.message;
                        e = qz(this, e);
                        Om(this.D, Gm, e)
                    }
                })()
            } catch (b) {
                this.W(b)
            }
        }
        W(a) {
            rz(this, {
                Da: 0,
                xb: void 0,
                errors: [],
                Ma: [],
                exception: a,
                sb: void 0,
                Mb: void 0,
                Nb: void 0,
                Hb: void 0
            });
            sz(this, {
                Da: 0,
                xb: void 0,
                errors: [],
                Ma: [],
                exception: a,
                sb: void 0,
                Mb: void 0,
                Nb: void 0,
                Hb: void 0
            })
        }
    };
    var yz = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function zz(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Sk(() => Tc(yz, c)) : Pk(null)
    };

    function Az(a) {
        this.j = a || {
            cookie: ""
        }
    }
    q = Az.prototype;
    q.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Bj, g = c.Bf || !1, f = c.domain || void 0, e = c.path || void 0, d = c.xd);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    q.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Oa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    q.remove = function(a, b, c) {
        const d = void 0 !== this.get(a);
        this.set(a, "", {
            xd: 0,
            path: b,
            domain: c
        });
        return d
    };
    q.isEmpty = function() {
        return !this.j.cookie
    };
    q.qb = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    q.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Oa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function Bz(a, b = window) {
        if (B(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    }

    function Cz(a) {
        return "null" !== a.origin
    }

    function Dz(a, b, c) {
        b = B(b, 5) && Cz(c) ? c.document.cookie : null;
        return null === b ? null : (new Az({
            cookie: b
        })).get(a) || ""
    };

    function Ez(a, b) {
        return A(a, 5, b)
    }
    var Fz = class extends K {
        constructor() {
            super(void 0)
        }
    };
    var Iz = ({
        win: a,
        Wb: b,
        td: c = !1,
        ud: d = !1
    }) => {
        if (!Gz({
                win: a,
                Wb: b,
                td: c,
                ud: d
            })) return Hz(a, Ez(new Fz, !0));
        (b = X(Iy(), 24)) ? (b = Ez(new Fz, Ju(b)), a = Hz(a, b)) : a = new Qk(null, Error("tcunav"));
        return a
    };

    function Gz({
        win: a,
        Wb: b,
        td: c,
        ud: d
    }) {
        if (!(d = !d && Nu(new Tu(a)))) {
            if (c = !c) {
                if (b) {
                    a = zz(a);
                    if (null != a.j)
                        if ((a = a.j.value) && Bc(a, 1)) b: switch (a = z(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else Ki(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function Hz(a, b) {
        return (a = Bz(b, a)) ? Pk(a) : new Qk(null, Error("unav"))
    };
    var Jz = class extends K {
        constructor(a) {
            super(a)
        }
    };
    class Kz {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.C = c;
            this.l = !1;
            this.B = d
        }
    };

    function lz(a, {
        win: b,
        webPropertyCode: c,
        pd: d,
        cd: e
    }) {
        a = Wr(8, b, a.j).then(f => f.runGallerify({
            win: b,
            webPropertyCode: c,
            serializedGallerifyConfig: Vc(d),
            serializedArticleStructures: e.map(g => Vc(g))
        }));
        Hi.Za(927, a)
    }
    var Lz = class {
        constructor(a) {
            this.j = a
        }
    };
    var Mz = {
            Cg: "google_ads_preview",
            kh: "google_mc_lab",
            Dh: "google_anchor_debug",
            Ch: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            Yh: "google_scr_debug",
            ai: "google_ia_debug_allow_onclick",
            vi: "googleads",
            Yd: "google_pedestal_debug",
            Oi: "google_responsive_slot_preview",
            Ni: "google_responsive_dummy_ad",
            xg: "google_auto_gallery"
        },
        Nz = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };

    function Oz(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Pz(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Pz(a) {
        let b = "";
        $f(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function Qz() {
        var a = u.location;
        let b = !1;
        $f(Mz, c => {
            Oz(a, c) && (b = !0)
        });
        return b
    }

    function Rz(a, b) {
        switch (a) {
            case 1:
                return Oz(b, "google_ia_debug");
            case 2:
                return Oz(b, "google_bottom_anchor_debug");
            case 3:
                return Oz(b, "google_anchor_debug") || Oz(b, "googleads");
            case 4:
                return Oz(b, "google_scr_debug")
        }
    };

    function Sz({
        win: a,
        webPropertyCode: b,
        ob: c
    }) {
        if (Oz(a.location, "google_auto_gallery")) {
            var d = new $l;
            var e = new am;
            e = A(e, 1, !0);
            d = Nc(d, 3, e);
            lz(new Lz(c), {
                win: a,
                webPropertyCode: b,
                pd: d,
                cd: []
            })
        }
    };
    var Tz = "a".charCodeAt(),
        Uz = kd(bj),
        Vz = kd(cj);

    function Wz(a, b) {
        if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.l.substring(a.j, a.j + b);
        a.j += b;
        return parseInt(c, 2)
    }

    function Xz(a) {
        return String.fromCharCode(Tz + Wz(a, 6)) + String.fromCharCode(Tz + Wz(a, 6))
    }

    function Yz(a) {
        let b = Wz(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!Wz(a, 1),
                e = Wz(a, 16);
            if (d)
                for (d = Wz(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function Zz(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (Wz(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function $z(a) {
        const b = Wz(a, 16);
        return !0 === !!Wz(a, 1) ? (a = Yz(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : Zz(a, b)
    }
    class aA {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.l = a;
            this.j = 0
        }
    };
    var cA = (a, b) => {
        try {
            var c = Xb(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new aA(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.j += 78;
            c.cmpId = Wz(d, 12);
            c.cmpVersion = Wz(d, 12);
            d.j += 30;
            c.tcfPolicyVersion = Wz(d, 6);
            c.isServiceSpecific = !!Wz(d, 1);
            c.useNonStandardStacks = !!Wz(d, 1);
            c.specialFeatureOptins = bA(Zz(d, 12, Vz), Vz);
            c.purpose = {
                consents: bA(Zz(d, 24, Uz), Uz),
                legitimateInterests: bA(Zz(d, 24, Uz), Uz)
            };
            c.purposeOneTreatment = !!Wz(d, 1);
            c.publisherCC = Xz(d);
            c.vendor = {
                consents: bA($z(d), b),
                legitimateInterests: bA($z(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const bA = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };

    function dA() {
        var a = eA;
        fA || (fA = new gA);
        const b = fA.j[a.key];
        if ("proto" === a.valueType) {
            try {
                const c = JSON.parse(b);
                if (Array.isArray(c)) return c
            } catch (c) {}
            return a.defaultValue
        }
        return typeof b === typeof a.defaultValue ? b : a.defaultValue
    }
    var hA = class {
        constructor() {
            this.j = {}
        }
    };
    var iA = class extends K {
            constructor() {
                super(void 0)
            }
        },
        jA = class extends K {
            constructor() {
                super(void 0)
            }
        };
    var kA = class extends K {
            constructor() {
                super(void 0)
            }
        },
        lA = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25];
    var mA = class {};
    var oA = class extends K {
            constructor(a) {
                super(a, -1, nA)
            }
        },
        pA = class extends K {
            constructor(a) {
                super(a)
            }
        },
        qA = class extends K {
            constructor(a) {
                super(a)
            }
        },
        nA = [7];
    var eA = new class {
        constructor() {
            this.key = "45368529";
            this.defaultValue = !1;
            this.valueType = "boolean"
        }
    };
    var gA = class extends hA {
            constructor() {
                super();
                var a = u.__fcexpdef || "";
                try {
                    const b = JSON.parse(a)[0];
                    a = "";
                    for (let c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                    this.j = JSON.parse(a)
                } catch (b) {}
            }
        },
        fA;

    function rA(a) {
        return (a = sA(a)) ? D(a, pA, 4) : null
    }

    function sA(a) {
        if (a = (new Az(a)).get("FCCDCF", ""))
            if (dA())
                if (a.startsWith("%")) try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    tA(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            return b ? Tc(oA, b) : null
        } catch (c) {
            return tA(2), null
        }
    }

    function tA(a) {
        new mA;
        var b = new jA;
        a = A(b, 7, a);
        b = new iA;
        a = Nc(b, 1, a);
        b = new kA;
        Oc(b, 22, lA, a)
    };

    function uA(a) {
        a.__tcfapiPostMessageReady || vA(new wA(a))
    }

    function vA(a) {
        a.l = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.j.addEventListener("message", a.l);
        a.j.__tcfapiPostMessageReady = !0
    }
    var wA = class {
        constructor(a) {
            this.j = a;
            this.l = null
        }
    };

    function xA(a) {
        var b = U(Rn);
        a.__uspapi || a.frames.__uspapiLocator || (a = new yA(a), zA(a), b && AA(a))
    }

    function zA(a) {
        !a.C || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", Gu(a.j, "__uspapiLocator"), Ea("__uspapi", (...b) => BA(a, ...b)))
    }

    function AA(a) {
        !a.A || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = "fc", Gu(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = a.j.__tcfapiEventListeners || [], Ea("__tcfapi", (...b) => CA(a, ...b)), uA(a.j))
    }

    function BA(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.C
        }, !0)
    }

    function CA(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && 2 !== c) d(null, !1);
            else switch (c = a.j.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(DA(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(DA(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function DA(a, b, c) {
        if (!a.A) return null;
        b = cA(a.A, b);
        b.addtlConsent = null != a.B ? a.B : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class yA {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.C = (a = (a = sA(this.l)) ? D(a, qA, 5) || null : null) ? z(a, 2) : null;
            this.A = (a = rA(this.l)) && Bc(a, 1) ? z(a, 1) : null;
            this.B = (a = rA(this.l)) && Bc(a, 2) ? z(a, 2) : null
        }
    };

    function EA(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    }

    function FA(a, b) {
        a = EA(a);
        b = EA(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var GA = Promise;
    class HA {
        constructor(a) {
            this.A = a
        }
        l(a, b, c) {
            this.A.then(d => {
                d.l(a, b, c)
            })
        }
        j(a, b) {
            return this.A.then(c => c.j(a, b))
        }
    };
    class IA {
        constructor(a) {
            this.data = a
        }
    };

    function JA(a, b) {
        KA(a, b);
        return new LA(a)
    }
    class LA {
        constructor(a) {
            this.A = a
        }
        l(a, b, c = []) {
            const d = new MessageChannel;
            KA(d.port1, b);
            this.A.postMessage(a, [d.port2].concat(c))
        }
        j(a, b) {
            return new GA(c => {
                this.l(a, c, b)
            })
        }
    }

    function KA(a, b) {
        b && (a.onmessage = c => {
            b(new IA(c.data, JA(c.ports[0])))
        })
    };
    var OA = ({
        destination: a,
        Ca: b,
        origin: c,
        Pa: d = "ZNWN1d",
        onMessage: e,
        Bd: f
    }) => MA({
        destination: a,
        Qe: () => b.contentWindow,
        jf: NA(c),
        Pa: d,
        onMessage: e,
        Bd: f
    });
    const MA = ({
            destination: a,
            Qe: b,
            jf: c,
            Ej: d,
            Pa: e,
            onMessage: f,
            Bd: g
        }) => {
            const h = Object.create(null);
            c.forEach(l => {
                h[l] = !0
            });
            return new HA(new GA((l, k) => {
                const m = n => {
                    if (n.source && n.source === b())
                        if (!0 !== h[n.origin]) {
                            a.removeEventListener("message", m, !1);
                            const p = c.join(", ");
                            k(Error(`Origin mismatch while establishing channel "${e}". Expected ${1===c.length?p:`one of [${p}]`}, but received ${n.origin}.`))
                        } else(n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? k(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) :
                            (l(JA(n.ports[0], f)), g && g(n)))
                };
                a.addEventListener("message", m, !1)
            }))
        },
        NA = a => {
            a = "string" === typeof a ? [a] : a;
            const b = Object.create(null);
            a.forEach(c => {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var PA = (a, b, c, d, e, f, g = null, h) => {
        try {
            var l = a.localStorage
        } catch (r) {
            l = null
        }
        if (l) {
            if (U(Fn)) var k = null;
            else try {
                k = l.getItem("google_ama_config")
            } catch (r) {
                k = null
            }
            try {
                var m = k ? Tc(pm, k) : null
            } catch (r) {
                m = null
            }
            k = m
        } else k = null;
        a: {
            if (d) try {
                var n = Tc(pm, d);
                break a
            } catch (r) {
                By(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            n = null
        }
        if (d = n) {
            if (e) {
                n = new qm;
                Nc(d, 3, n);
                k = mm(d) && z(mm(d), 13) ? z(mm(d), 13) : 1;
                A(n, 1, Date.now() + 864E5 * k);
                Uc = n = vc(d.N);
                n = new d.constructor(n);
                Uc = null;
                Yc(n, d);
                mm(d) && (k = new nm, m = B(mm(d), 23), k = A(k, 23, m), m = Ic(mm(d), 12, !1), k = A(k, 12,
                    m), m = Ic(mm(d), 15, !1), k = A(k, 15, m), Nc(n, 15, k));
                k = F(n, Wl, 1);
                for (m = 0; m < k.length; m++) A(k[m], 11, qc);
                Nc(n, 22);
                if (U(Fn)) Dy(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", Vc(n))
                } catch (r) {
                    By(a, {
                        lserr: 1
                    })
                }
            }
            e = zy(a, F(d, tm, 7));
            a: {
                if (e && (n = z(e, 3), k = D(d, Hl, 9), n && k)) {
                    b: {
                        k = F(k, Fl, 1);
                        for (p of k)
                            if (z(p, 1) == n) {
                                var p = D(p, El, 2) || null;
                                break b
                            }
                        p = null
                    }
                    if (p) break a
                }
                p = D(d, El, 8) || new El
            }
            p = {
                pf: p
            };
            e && (p.ca = e);
            e && xy(e, 3) && (p.nb = [1]);
            if (7 == c.google_pgb_reactive && (e = p.ca, !e || !B(e, 8))) return !1;
            Fy(a, 2) && (Zi(5, [d.toJSON()]),
                e = Cy(c), f = new Lz(f), c = p.ca, e.google_package = c && z(c, 4) || "", cz(a, b, d, p, f, new kl(["google-auto-placed"], e), g, {
                    url: a.location.href,
                    Bb: h
                }));
            return !0
        }
        k && (By(a, {
            cfg: 1,
            cl: 1
        }), Dy(a));
        return !1
    };
    const QA = [255, 255, 255];

    function RA(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function SA(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = RA(b.backgroundColor);
        var c = TA(b);
        if (c) return c;
        a = (a = a.parentElement) ? SA(a) : QA;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function TA(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };

    function UA(a) {
        return 2 === C(a.B, 12, 0)
    }
    var WA = class {
        constructor(a, b, c, d, e, f, g = !1) {
            this.C = a;
            this.l = b;
            this.B = c;
            this.F = d;
            this.D = e;
            this.j = f;
            this.G = g;
            this.A = ob(VA, J(c, 7)) ? 1 : 0
        }
    };
    const VA = ["ja", "zh_CN", "zh_TW"];

    function XA(a) {
        M(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function YA(a, b, c, d, e) {
        a = {
            wp: e.C,
            c: e.F,
            e: V(pn),
            m: a,
            q: b,
            v: Math.round(c - d)
        };
        P("adfil-clk", a, 1)
    };
    const ZA = [{
        nc: "5984482117",
        dc: 480,
        Oa: 220
    }, {
        nc: "1530485620",
        dc: 400,
        Oa: 180
    }, {
        nc: "4440010542",
        dc: 360,
        Oa: 160
    }, {
        nc: "1138882718",
        dc: -Infinity,
        Oa: 150
    }];

    function $A(a) {
        return ZA.find(b => b.dc <= a)
    };

    function aB(a) {
        const b = a.document.createElement("div");
        M(b, es(a));
        a.document.body.appendChild(b);
        a = b.attachShadow({
            mode: "open"
        });
        b.classList.add("adpub-drawer-root");
        return {
            Pd: b,
            shadowRoot: a
        }
    }

    function bB(a, b) {
        b = b.getElementById(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    }

    function cB(a, b) {
        const c = new Rj(b.P);
        Yj(b, !0, () => void R(c, !0));
        Yj(b, !1, () => {
            a.setTimeout(() => {
                b.P || R(c, !1)
            }, 700)
        });
        return Tj(c)
    };
    var dB = void 0;

    function eB() {
        void 0 === dB && (dB = 20);
        return dB
    };

    function fB(a) {
        if (a.G) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function gB(a) {
        const {
            Jc: b,
            Ae: c
        } = fB(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }
    var hB = class extends Lj {
        constructor(a, b, c, d) {
            super();
            this.B = b;
            this.j = new Rj(!1);
            this.A = cB(a, this.j);
            Yj(this.A, !0, () => {
                Hk(c);
                ct(d)
            });
            Yj(this.A, !1, () => {
                Nj(c.j);
                Nj(c.A);
                Ik(c);
                dt(d)
            })
        }
        show({
            kd: a = !1
        } = {}) {
            fB(this).lb.classList.add("hd-revealed");
            R(this.j, !0);
            a && Yj(this.A, !1, () => {
                this.va()
            })
        }
        collapse() {
            fB(this).lb.classList.remove("hd-revealed");
            R(this.j, !1)
        }
        init() {
            gB(this)
        }
        l() {
            const a = this.B.Oc.Pd,
                b = a.parentNode;
            b && b.removeChild(a);
            super.l()
        }
    };
    var iB = void 0;

    function jB() {
        void 0 === iB && (iB = 20);
        return iB
    }
    var kB = void 0;

    function lB() {
        void 0 === kB && (kB = 30);
        return kB
    }

    function mB(a) {
        return ts('<div class="ved-handle" id="' + xs(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function nB(a) {
        return qk(a.j).map(b => b ? oB(a, b) : 0)
    }

    function oB(a, b) {
        switch (a.direction) {
            case 0:
                return pB(-b.Vd);
            case 1:
                return pB(-b.Ud);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function qB(a) {
        return sk(a.j).map(b => oB(a, b))
    }
    var rB = class {
        constructor(a) {
            this.j = a;
            this.direction = 0
        }
    };

    function pB(a) {
        return 0 === a ? 0 : a
    };

    function Y(a) {
        if (a.G) throw Error("Accessing domItems after disposal");
        return a.D
    }

    function sB(a) {
        Y(a).lb.classList.add("ved-revealed");
        R(a.j, !0)
    }

    function tB(a) {
        return cB(a.win, a.j)
    }

    function uB(a, b) {
        const c = new Rj(b());
        (new ck(a.B)).ba(() => void R(c, b()));
        return Tj(c)
    }

    function vB(a) {
        const {
            la: b,
            Kc: c
        } = Y(a);
        return uB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function wB(a) {
        const {
            la: b,
            Kc: c
        } = Y(a);
        return uB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function xB(a) {
        const {
            la: b
        } = Y(a);
        return uB(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function yB(a) {
        return Uj(vB(a), xB(a))
    }

    function zB(a) {
        const {
            la: b,
            wb: c
        } = Y(a);
        return uB(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function AB(a) {
        Xj(vB(a), !0, () => {
            const {
                od: b,
                Ab: c
            } = Y(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        Xj(vB(a), !1, () => {
            const {
                od: b,
                Ab: c
            } = Y(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function BB(a) {
        const b = uk(a.win, Y(a).vc);
        Wj(xk(b), () => void CB(a));
        Mj(a, Ca(Kj, b))
    }

    function DB(a) {
        Xj(EB(a), !0, () => {
            Y(a).Ed.classList.remove("ved-hidden")
        });
        Xj(EB(a), !1, () => {
            Y(a).Ed.classList.add("ved-hidden")
        })
    }

    function FB(a) {
        const b = () => void ak(a.F),
            {
                Jc: c,
                wb: d,
                Oe: e
            } = Y(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        Yj(GB(a), !0, b)
    }

    function CB(a) {
        if (!a.A) {
            var {
                Ee: b,
                vc: c
            } = Y(a), d = c.getBoundingClientRect().height, e = b.getBoundingClientRect().height;
            d < e || (a.A = !0, e = HB(a), b.style.setProperty("height", `${d}px`), e(), a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.A = !1
                })
            }))
        }
    }

    function EB(a) {
        const {
            la: b,
            wb: c
        } = Y(a);
        return uB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function GB(a) {
        return Sj(a.C.map(Xk), IB(a))
    }

    function IB(a) {
        return uB(a, () => 0 === Y(a).la.scrollTop)
    }

    function JB(a, b) {
        Y(a).la.scrollTop = b;
        ak(a.B)
    }

    function KB(a, b) {
        ({
            Ab: a
        } = Y(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function LB(a, b) {
        R(a.C, !0);
        const {
            Ab: c,
            la: d
        } = Y(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void MB(a, b)
    }

    function MB(a, b) {
        const {
            Ab: c,
            la: d
        } = Y(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        JB(a, b);
        R(a.C, !1)
    }

    function HB(a) {
        const b = Y(a).la.scrollTop;
        LB(a, b);
        return () => void MB(a, b)
    }
    var NB = class extends Lj {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.D = b;
            this.J = c;
            this.F = new bk;
            this.B = new bk;
            this.j = new Rj(!1);
            this.C = new Rj(!1);
            this.A = !1
        }
        init() {
            JB(this, KB(this, Y(this).wb));
            AB(this);
            BB(this);
            DB(this);
            FB(this);
            Y(this).la.addEventListener("scroll", () => void ak(this.B))
        }
        l() {
            const a = this.D.Oc.Pd,
                b = a.parentNode;
            b && b.removeChild(a);
            super.l()
        }
    };

    function OB(a) {
        Xj(Sj(yB(a.j), zB(a.j)), !0, Yk(() => {
            Y(a.j).wb.classList.remove("ved-snap-point-top")
        }));
        Xj(wB(a.j), !0, () => {
            Y(a.j).la.classList.add("ved-no-snap")
        });
        Xj(wB(a.j), !1, () => {
            Y(a.j).la.classList.remove("ved-no-snap")
        });
        Yj(wB(a.j), !1, () => {
            var b = a.j;
            var c = Y(b).Kc;
            c = LB(b, KB(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function PB(a) {
        const b = a.j.J;
        nB(b).ba(c => {
            c = -c;
            if (0 < c) {
                const {
                    Sd: d
                } = Y(a.j);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                Sd: c
            } = Y(a.j)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        qB(b).ba(c => {
            30 < -c && a.collapse()
        })
    }
    var QB = class extends Lj {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.j = b;
            Yj(tB(b), !0, () => {
                Hk(c);
                ct(d)
            });
            Yj(tB(b), !1, () => {
                Nj(c.j);
                Nj(c.A);
                Ik(c);
                dt(d)
            })
        }
        show({
            kd: a = !1
        } = {}) {
            sB(this.j);
            a && Yj(tB(this.j), !1, () => {
                this.va()
            })
        }
        collapse() {
            var a = this.j;
            Y(a).lb.classList.remove("ved-revealed");
            R(a.j, !1)
        }
        init() {
            (new ck(this.j.F)).ba(() => {
                this.collapse()
            });
            OB(this);
            PB(this);
            xb(this.win.document.body.offsetHeight)
        }
    };

    function RB(a, b, c) {
        const d = $A(a.document.body.clientWidth),
            e = b.l ? SB(a, b, c, d) : TB(a, b, c, d);
        e.show({
            kd: !0
        });
        UB.push(() => {
            e.va()
        })
    }

    function SB(a, b, c, d) {
        c = VB(a, b, c, d, a.innerWidth, "100%", "15px", "13px", "center");
        b = Ys(new bt(a), 1E5);
        d = aB(a);
        var e = d.shadowRoot,
            f = e.appendChild,
            g = new xf(a.document);
        var h = ts("<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + W(100001) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " + W(95) +
            "%; transition: transform " + W(.5) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + W(jB()) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            W(75 / 95 * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + W(20 / 95 * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            W(75 / 95 * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + W(75 / 95 * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + W(lB() + 50) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            W(jB()) + "px " + W(jB()) + "px 0 0; background: white; display: flex; height: " + W(lB()) + 'px; justify-content: center; cursor: grab;}.ved-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            mB("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + mB("ved-fixed-handle") + "</div></div></div>");
        f.call(e, Of(g, os(h)));
        f = bB("ved-content-container", e);
        f.appendChild(c);
        xb(a.document.body.offsetHeight);
        c = {
            lb: bB("ved-drawer-container", e),
            Jc: bB("ved-modal-background", e),
            Sd: bB("ved-ui-revealer", e),
            la: bB("ved-scroller",
                e),
            Ab: bB("ved-scrolled-stack", e),
            Oe: bB("ved-fully-closed-anchor", e),
            wb: bB("ved-partially-extended-anchor", e),
            Ee: bB("ved-content-sizer", e),
            vc: f,
            Aj: bB("ved-moving-handle", e),
            Kc: bB("ved-moving-handle-holder", e),
            Ne: bB("ved-fixed-handle", e),
            od: bB("ved-fixed-handle-holder", e),
            Ed: bB("ved-over-scroll-block", e),
            Oc: d
        };
        d = c.Ne;
        d = new tk(new kk(a, d), new hk(d));
        e = d.j;
        e.C.addEventListener("mousedown", e.F);
        e.B.addEventListener("mouseup", e.D);
        e.B.addEventListener("mousemove", e.G, {
            passive: !1
        });
        e = d.l;
        e.l.addEventListener("touchstart",
            e.G);
        e.l.addEventListener("touchend", e.C);
        e.l.addEventListener("touchmove", e.D, {
            passive: !1
        });
        c = new NB(a, c, new rB(d));
        c.init();
        a = new QB(a, c, Fk(a), b);
        Mj(a, Ca(Kj, c));
        a.init();
        return a
    }

    function TB(a, b, c, d) {
        a: {
            var e = a.document.body.clientWidth;
            var f = .9 * e;
            for (e = 768 >= e ? 3 : 4; 1 <= e; e--) {
                var g = d.Oa * e + 42;
                if (g <= f) {
                    f = g;
                    break a
                }
            }
        }
        c = VB(a, b, c, d, f, "600px", "24px", "24px", "start");e = `${f}px`;
        var h = UA(b),
            l = J(b.B, 14);b = Ys(new bt(a), 1E5);d = aB(a);f = d.shadowRoot;g = f.appendChild;
        var k = new xf(a.document);h = h || !1;e = ts("<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + W(100001) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            W(e) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: " + W(eB()) + "px; transition: transform " + W(.5) + "s ease-in-out;" + (h ? "left: 0; border-top-right-radius: " + W(eB()) + "px; border-bottom-right-radius: " + W(eB()) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + W(eB()) + "px; border-bottom-left-radius: " + W(eB()) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (h ?
                "text-align: left;" : "text-align: right;") + 'height: 24px;}#hd-close-button {border: none; background: none; cursor: pointer;}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}</style><div id="hd-drawer-container"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-close-button" aria-label="' + xs(l) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>');
        g.call(f, Of(k, os(e)));e = bB("hd-content-container", f);e.appendChild(c);xb(a.document.body.offsetHeight);c = {
            lb: bB("hd-drawer-container", f),
            Jc: bB("hd-modal-background", f),
            vc: e,
            Ae: bB("hd-close-button", f),
            Oc: d
        };a = new hB(a, c, Fk(a), b);a.init();
        return a
    }

    function VB(a, b, c, d, e, f, g, h, l) {
        var k = b.B,
            m = !!b.j,
            n = J(k, 10),
            p = n.indexOf("TERM");
        var r = U(qn) ? "adfiliates-rockskipper" : m ? "vert-pla-adfiliates-e4-srp" : "vert-pla-adfiliates-srp";
        var v = V(kn);
        e = Math.max(Math.floor((e - Math.floor(e / d.Oa) * d.Oa) / 2), 5);
        var t = b.G ? "on" : "",
            x = J(k, 3),
            w = `${V(pn)}`,
            G = J(k, 7),
            E = J(k, 6),
            H = b.C,
            I = n.substring(0, p);
        n = n.substring(p + 4);
        d = d.nc;
        m = !m;
        p = !!Ic(k, 13);
        c = ts('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' +
            xs(W(g)) + " " + xs(W(h)) + "; text-align: " + xs(W(l)) + ';">' + (m ? '<div style="max-width: ' + xs(W(f)) + '">' + ss(x) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + ss(E) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + xs(W(g)) + "; text-align: " + xs(W(l)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">shoppingmode</span><span style="color:#80868b"> ' +
            ss(I) + "</span>" + ss(c) + '<span style="color:#80868b">' + ss(n) + '</span></div></div><div id="adfil-csa" style="margin:5px ' + xs(W(e)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');const pageOptions = {'pubId': " + Bs(Cs(r)) + ", 'styleId': " + Bs(Cs(d)) + ", 'disableCarousel': true, 'query': " + Bs(Cs(c)) + ", 'hl': " + Bs(Cs(G)) + ", 'personalizedAds': 'false', 'fexp': " + Bs(Cs(w)) + ", 'adfiliateWp': " + Bs(Cs(H)) + ", 'adtest': " +
            Bs(Cs(t)) + "}; const adBlock = {'container': 'adfil-csa', 'linkTarget': '_blank', 'number': " + Bs(Cs(v)) + ", 'width': document.body.offsetWidth - 30}; _googCsa('plas', pageOptions, adBlock);\x3c/script>" + (p ? "<script>const el = document.getElementById('adfil-csa'); el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" : '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') +
            "</div>");
        b = ge("body", {
            dir: UA(b) ? "rtl" : "ltr",
            lang: J(k, 7),
            style: Qd({
                margin: "0",
                height: "100%",
                "padding-top": "0px",
                overflow: U(tn) ? null : "hidden"
            })
        }, os(c));
        k = a.document.createElement("IFRAME");
        M(k, {
            border: "0",
            width: "100%"
        });
        WB(a, k);
        k.srcdoc = ce(b);
        return k
    }

    function WB(a, b) {
        const c = a.requestAnimationFrame;
        b.onload = () => {
            const d = b.contentDocument.body,
                e = new ResizeObserver(() => {
                    c(() => {
                        b.height = `${d.parentElement.offsetHeight}px`
                    })
                });
            e.observe(d);
            UB.push(() => {
                e.disconnect()
            })
        }
    }
    const UB = [];
    var XB = class {
        constructor(a, b, c, d, e, f) {
            this.L = a;
            this.M = b;
            this.A = c;
            this.F = d;
            this.I = e;
            this.C = f
        }
        get j() {
            return this.L
        }
        get G() {
            return this.M
        }
        get B() {
            return this.A
        }
        get D() {
            return this.F
        }
        get J() {
            return this.I
        }
        get l() {
            return this.C
        }
    };

    function YB(a, b) {
        const c = a.document.createElement("SPAN");
        c.appendChild(a.document.createTextNode("shoppingmode"));
        XA(c);
        M(c, b);
        c.className = "google-material-icons";
        return c
    };

    function ZB(a) {
        return a.performance.now()
    };
    var $B = (a, b) => Ot({
        K: a,
        zd: 3E3,
        Ic: a.innerWidth > lj ? 650 : 0,
        xa: Mh,
        ye: b
    });
    class aC {
        constructor(a, b) {
            this.A = a;
            this.j = !1;
            this.B = b;
            this.l = this.B.na(264, c => {
                this.j && (bC || (c = Date.now()), this.A(c), bC ? cC.call(u, this.l) : u.setTimeout(this.l, 17))
            })
        }
        start() {
            this.j || (this.j = !0, bC ? cC.call(u, this.l) : this.l(0))
        }
    }
    var cC = u.requestAnimationFrame || u.webkitRequestAnimationFrame,
        bC = !!cC && !/'iPhone'/.test(u.navigator.userAgent);

    function dC(a) {
        return a * a * a
    }

    function eC(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    class fC {
        constructor(a, b) {
            var c = Hi;
            this.l = a;
            this.G = b;
            this.L = 100;
            this.progress = 0;
            this.j = null;
            this.J = !1;
            this.A = [];
            this.B = null;
            this.C = new aC(Ba(this.M, this), c)
        }
        M(a) {
            if (this.J) this.C.j = !1;
            else {
                null === this.j && (this.j = a);
                this.progress = (a - this.j) / this.L;
                1 <= this.progress && (this.progress = 1);
                a = this.B ? this.B(this.progress) : this.progress;
                this.A = [];
                for (let b = 0; b < this.l.length; b++) this.A.push((this.G[b] - this.l[b]) * a + this.l[b]);
                this.D();
                1 == this.progress && (this.C.j = !1, this.F())
            }
        }
        F() {}
        D() {}
        play() {
            this.J = !1;
            this.C.start()
        }
        reset(a,
            b, c) {
            this.j = null;
            this.l = a;
            this.G = b;
            this.L = c;
            this.progress = 0
        }
    };
    class gC extends fC {
        constructor(a, b, c, d, e) {
            super([b], [c]);
            this.O = a;
            this.I = d ? d : null;
            this.B = e || null
        }
        D() {
            const a = {};
            a.left = this.A[0] + "px";
            Xg(this.O, a)
        }
        F() {
            this.I && this.I()
        }
    };
    let hC = "",
        iC = "";

    function jC(a) {
        return a.document.getElementById("google-adfil-sa")
    }

    function kC(a, b) {
        const c = document.createElement("SPAN");
        XA(c);
        M(c, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: "60px",
            right: "60px",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center",
            color: "#1967D2",
            cursor: "pointer"
        });
        var d = UA(b);
        b.l || M(c, {
            "justify-content": ""
        });
        c.appendChild(YB(a, {
            "font-family": '"Google Material Icons"',
            "font-size": "18px",
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none",
            width: "15px",
            height: "15px",
            "margin-left": d ? "8px" : "",
            "margin-right": d ?
                "" : "8px",
            "margin-top": "11px",
            "line-height": "normal"
        }));
        d = document.createElement("SPAN");
        d.id = "google-adfil-sa-qtx";
        d.appendChild(a.document.createTextNode(J(b.B, 11).replace("TERM", hC)));
        M(d, {
            height: "40px",
            "align-items": "center",
            "line-height": "40px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        const e = ZB(a);
        c.addEventListener("click", f => {
            YA(iC, hC,
                ZB(a), e, b);
            RB(a, b, hC);
            f.preventDefault();
            return !1
        });
        c.appendChild(d);
        return c
    }

    function lC(a, b) {
        const c = document.createElement("SPAN");
        c.id = "gda";
        const d = mC(a, b);
        c.appendChild(d);
        c.addEventListener("click", e => {
            const f = UA(b),
                g = (b.l ? f : !f) ? a.innerWidth : -a.innerWidth;
            (new gC(jC(a), 0, g, () => {}, dC)).play();
            const h = nC(b);
            h.appendChild(YB(a, {
                "font-family": '"Google Material Icons"',
                "font-size": "18px",
                "font-style": "normal",
                "font-weight": "normal",
                "text-decoration": "none",
                "margin-right": "8px",
                "margin-top": "10px",
                left: "13px",
                top: "14px",
                margin: "0",
                position: "absolute",
                "line-height": "normal"
            }));
            h.addEventListener("click", l => {
                const k = (b.l ? f : !f) ? a.innerWidth : -a.innerWidth;
                (new gC(jC(a), k, 0, () => {}, eC)).play();
                a.document.body.removeChild(h);
                l.preventDefault();
                return !1
            });
            a.document.body.appendChild(h);
            e.preventDefault();
            return !1
        });
        return c
    }

    function mC(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = UA(b);
        b = b.l ? d : !d;
        M(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            left: b ? "" : "0",
            right: b ? "0" : "",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        b = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(b);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-linecap",
            "square");
        c.setAttribute("stroke-width", "2px");
        b = c.ownerDocument;
        d = b.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", "6");
        d.setAttribute("y1", "14");
        d.setAttribute("x2", "14");
        d.setAttribute("y2", "6");
        c.appendChild(d);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "6");
        b.setAttribute("y1", "6");
        b.setAttribute("x2", "14");
        b.setAttribute("y2", "14");
        c.appendChild(b);
        a.appendChild(c);
        return a
    }

    function oC(a, b) {
        const c = document.createElement("DIV");
        c.id = "google-adfil-ea";
        b.l || M(c, {
            width: "60px",
            height: "45px",
            cursor: "pointer"
        });
        const d = pC(a, b);
        c.appendChild(d);
        const e = ZB(a);
        c.addEventListener("click", f => {
            YA(iC, hC, ZB(a), e, b);
            RB(a, b, hC);
            f.preventDefault();
            return !1
        });
        return c
    }

    function pC(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = UA(b);
        d = b.l ? d : !d;
        M(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            left: d ? "0" : "",
            right: d ? "" : "0",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        d = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(d);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-width",
            "2px");
        c.setAttribute("stroke-linecap", "square");
        b.l ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "6"), d.setAttribute("y1", "12"), d.setAttribute("x2", "10"), d.setAttribute("y2", "8"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "8"), b.setAttribute("x2", "14"), b.setAttribute("y2", "12"), c.appendChild(b)) : UA(b) ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"),
            d.setAttribute("x1", "6"), d.setAttribute("y1", "6"), d.setAttribute("x2", "10"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "10"), b.setAttribute("x2", "6"), b.setAttribute("y2", "14"), c.appendChild(b)) : (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "10"), d.setAttribute("y1", "6"), d.setAttribute("x2", "6"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg",
            "line"), b.setAttribute("x1", "6"), b.setAttribute("y1", "10"), b.setAttribute("x2", "10"), b.setAttribute("y2", "14"), c.appendChild(b));
        a.appendChild(c);
        return a
    }

    function nC(a) {
        const b = document.createElement("div");
        b.id = "gca";
        const c = UA(a);
        a = a.l ? c : !c;
        M(b, {
            position: "fixed",
            bottom: "0%",
            left: a ? "" : "0%",
            right: a ? "0%" : "",
            width: "45px",
            height: "45px",
            background: "white",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            color: "#1967D2",
            "z-index": V(ln).toString()
        });
        return b
    }

    function qC(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && M(a.document.body, {
                    "padding-bottom": "45px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function rC(a) {
        try {
            let b, c;
            return null !== (null == (b = a.location) ? void 0 : null == (c = b.href) ? void 0 : c.match(/goog_fsa=1/))
        } catch (b) {
            return !1
        }
    };
    var vC = class {
        constructor(a) {
            this.l = a;
            this.j = new sC;
            for (var b of this.l) {
                var c = J(b, 1);
                for (var d of F(b, tC, 2)) {
                    a = this.j;
                    var e = J(d, 1),
                        f = c,
                        g = a.l.has(f) ? a.l.get(f) : a.C++;
                    a.l.set(f, g);
                    a.B.set(g, f);
                    f = 0;
                    for (let h = 0; h < e.length; h++) {
                        const l = e.charCodeAt(h);
                        a.j[f].contains(l) || (a.j.push(new uC), a.j[a.size].C = f, a.j[a.size].G = l, a.j[f].A.set(l, a.size), a.size++);
                        f = a.j[f].A.get(l)
                    }
                    a.j[f].B = !0;
                    a.j[f].D = g;
                    a.j[f].F = a.A.length;
                    a.A.push(e.length)
                }
            }
            b = this.j;
            d = [];
            for (d.push(0); 0 < d.length;) {
                c = d.shift();
                a = b;
                e = c;
                g = a.j[e];
                if (0 === e) g.j = 0, g.l = 0;
                else if (0 === g.C) g.j = 0, g.l = g.B ? e : a.j[a.j[e].j].l;
                else {
                    g = a.j[a.j[e].C].j;
                    for (f = a.j[e].G;;) {
                        if (a.j[g].contains(f)) {
                            a.j[e].j = a.j[g].A.get(f);
                            break
                        }
                        if (0 === g) {
                            a.j[e].j = 0;
                            break
                        }
                        g = a.j[g].j
                    }
                    a.j[e].l = a.j[e].B ? e : a.j[a.j[e].j].l
                }
                for (const h of b.j[c].childNodes) d.push(h)
            }
        }
        match(a) {
            return this.j.match(a)
        }
    };
    class sC {
        constructor() {
            this.size = 1;
            this.j = [new uC];
            this.A = [];
            this.l = new Map;
            this.B = new Map;
            this.C = 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let f = 0; f < a.length; f++) {
                for (;;) {
                    var d = a.charCodeAt(f);
                    const g = this.j[b];
                    var e = String.fromCharCode(d);
                    e = e.toLowerCase() === e ? e.toUpperCase().charCodeAt(0) : e.toLowerCase().charCodeAt(0);
                    if (g.contains(d)) {
                        b = g.A.get(d);
                        break
                    }
                    if (U(on) && g.contains(e)) {
                        b = g.A.get(e);
                        break
                    }
                    if (0 === b) break;
                    b = g.j
                }
                for (d = b;;) {
                    d = this.j[d].l;
                    if (0 === d) break;
                    c.push(new wC(f + 1 - this.A[this.j[d].F], f, this.B.get(this.j[d].D)));
                    d = this.j[d].j
                }
            }
            return c
        }
    }
    class uC {
        constructor() {
            this.A = new Map;
            this.L = !1;
            this.Z = this.J = this.I = this.W = this.M = this.O = -1
        }
        contains(a) {
            return this.A.has(a)
        }
        set C(a) {
            this.O = a
        }
        get C() {
            return this.O
        }
        set G(a) {
            this.M = a
        }
        get G() {
            return this.M
        }
        set B(a) {
            this.L = a
        }
        get B() {
            return this.L
        }
        set D(a) {
            this.J = a
        }
        get D() {
            return this.J
        }
        set j(a) {
            this.W = a
        }
        get j() {
            return this.W
        }
        set l(a) {
            this.I = a
        }
        get l() {
            return this.I
        }
        set F(a) {
            this.Z = a
        }
        get F() {
            return this.Z
        }
        get childNodes() {
            return this.A.values()
        }
    }
    var wC = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.D = c
        }
        get B() {
            return this.l
        }
        get C() {
            return this.j
        }
        get A() {
            return this.D
        }
        get length() {
            return this.j - this.l
        }
    };
    const xC = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function yC(a, b) {
        switch (b) {
            case 1:
                b = 0;
                for (let c = a.length - 1; 0 <= c; c--) xC.test(a[c]) || b++;
                return b;
            default:
                return a = a.trim(), "" === a ? 0 : a.split(/\s+/).length
        }
    }

    function zC(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || xC.test(a)
        }
    };
    const AC = ["block", "inline", "inline-block", "list-item", "table-cell"];
    class BC {
        constructor() {
            this.j = Infinity
        }
    }

    function CC(a, b, c, d, e, f) {
        if (ZB(a) >= c.D) return !1;
        for (let Ka = 0; Ka < b.childNodes.length; Ka++) {
            const ca = b.childNodes[Ka];
            if (ca.nodeType === Node.TEXT_NODE && "" !== ca.textContent) {
                var g = b,
                    h = void 0;
                if (f) a: {
                    h = a;
                    var l = c,
                        k = ca.textContent,
                        m = d,
                        n = e,
                        p = f,
                        r = [];b: {
                        var v = k;
                        switch (l.A) {
                            case 1:
                                var t = Array(v.length),
                                    x = 0;
                                for (var w = 0; w < v.length; w++) xC.test(v[w]) || x++, t[w] = x;
                                v = t;
                                break b;
                            default:
                                t = Array(v.length);
                                for (w = x = 0; w < v.length;) {
                                    for (;
                                        /\s/.test(v[w]);) t[w] = x, w++;
                                    for (var G = !1; w < v.length && !/\s/.test(v[w]);) G = !0, t[w] = x, w++;
                                    G && (x++, t[w - 1] = x)
                                }
                                v = t
                        }
                    }
                    if (k.includes("\u00bb")) p = [];
                    else {
                        t = p.match(k);
                        p = new Map;
                        for (const T of t) t = T.B, p.has(t) ? (x = p.get(t), T.length > x.length && p.set(t, T)) : p.set(t, T);
                        p = Array.from(p.values())
                    }
                    x = -1;
                    for (const T of p)
                        if (t = T.B, p = T.C, w = -1 === x ? m.j + v[t] : v[t] - v[x], zC(k.charAt(t - 1), l.A) && zC(k.charAt(p + 1), l.A) && !(w < V(vn))) {
                            if (!l.j && !DC(h, g)) {
                                m.j += v[k.length - 1];
                                h = [];
                                break a
                            }
                            x += 1;
                            x < t && r.push(h.document.createTextNode(k.substring(x, t)));
                            x = r;
                            w = x.push;
                            G = h;
                            var E = l,
                                H = T.A;
                            t = k.substring(t, p + 1);
                            t = E.j ? EC(G, E, H, t) : FC(G,
                                E, H, t);
                            w.call(x, t);
                            t = n;
                            x = T.A;
                            t.j++;
                            t.l.add(x);
                            m.j = 0;
                            x = p
                        }
                    x++;
                    if (x < k.length) {
                        m.j += v[k.length - 1] - v[x];
                        if (!x) {
                            h = null;
                            break a
                        }
                        r.push(h.document.createTextNode(k.substring(x)))
                    }
                    h = r
                }
                else a: if (h = a, l = c, m = g, n = ca.textContent, g = d, r = e, n.includes("\u00bb")) h = null;
                    else
                        for (v = l.B, k = [], w = 0;;) {
                            t = n.length;
                            x = null;
                            p = "";
                            b: for (const T of F(v, GC, 2))
                                for (const Mb of F(T, tC, 2))
                                    for (G = J(Mb, 1), E = w; E < n.length;) {
                                        E = n.indexOf(G, E);
                                        if (-1 === E) break;
                                        if (E > t || E === t && null !== x && G.length < x.length) break;
                                        if (!zC(n.charAt(E - 1), l.A) || !zC(n.charAt(E +
                                                G.length), l.A)) break;
                                        H = yC(n.substring(w, E), l.A);
                                        if (g.j + H >= V(vn)) {
                                            if (!l.j && !DC(h, m)) break b;
                                            t = E;
                                            x = G;
                                            p = J(T, 1);
                                            break
                                        }
                                        E += 1
                                    }
                            if (null === x) {
                                if (0 === w) {
                                    g.j += yC(n, l.A);
                                    h = null;
                                    break a
                                }
                                w < n.length && (m = n.substring(w), k.push(h.document.createTextNode(m)), g.j += yC(m, l.A));
                                h = k;
                                break a
                            }
                            t > w && k.push(h.document.createTextNode(n.substring(w, t)));
                            w = k;
                            G = w.push;
                            E = h;
                            H = l;
                            var I = p,
                                ja = x;
                            E = H.j ? EC(E, H, I, ja) : FC(E, H, I, ja);
                            G.call(w, E);
                            g.j = 0;
                            w = t + x.length;
                            t = r;
                            t.j++;
                            t.l.add(p)
                        }
                if (h && !U(wn)) {
                    for (const T of h) b.insertBefore(T, ca), HC(T);
                    b.removeChild(ca);
                    Ka += h.length - 1
                }
            } else if (IC(ca, c) && !CC(a, ca, c, d, e, f)) return !1
        }
        return !0
    }

    function HC(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = TA(RA(getComputedStyle(a.parentElement).color)),
                    c = TA(RA(getComputedStyle(a).color));
                var d = SA(a);
                if (d = b && c && d ? FA(c, d) < Math.min(FA(b, d), 4.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    M(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) HC(a.children[b])
        }
    }

    function IC(a, b) {
        if (a.nodeType !== Node.ELEMENT_NODE) return !1;
        let c;
        if (null == (c = a.classList) ? 0 : c.contains("google-adfil-skip")) return !1;
        let d, e;
        switch (null == (d = a.tagName) ? void 0 : null == (e = d.toUpperCase) ? void 0 : e.call(d)) {
            case "IFRAME":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1;
            case "A":
                return !!b.j;
            default:
                if (!(b = !!b.j)) {
                    let f, g, h, l, k, m;
                    b = !((null == (g = (f = a.className).toUpperCase) ? 0 : null == (h = g.call(f)) ? 0 : h.includes("CRUMB")) || (null == (k = (l = a.id).toUpperCase) ? 0 : null == (m = k.call(l)) ? 0 : m.includes("CRUMB")))
                }
                return b
        }
    }

    function DC(a, b) {
        a = a.getComputedStyle(b);
        b = a.fontSize.match(/\d+/);
        return !!b && 12 <= Number(b[0]) && 22 >= Number(b[0]) && ob(AC, a.display)
    }

    function EC(a, b, c, d) {
        const e = a.document.createElement("SPAN");
        e.appendChild(a.document.createTextNode(d));
        (new IntersectionObserver(f => {
            f.forEach(g => {
                g.isIntersecting && g.target.textContent && (hC = c, iC = d, jC(a) ? a.document.getElementById("google-adfil-sa-qtx").innerText = J(b.B, 11).replace("TERM", hC) : Nt(a) || (g = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/), M(a.document.body, {
                        "padding-bottom": (g && g.length ? Number(g[0]) + 45 : 45) + "px"
                    }), qC(a), g = document.createElement("div"), g.id = "google-adfil-sa",
                    g.dir = UA(b) ? "rtl" : "ltr", M(g, {
                        background: "white",
                        "border-style": "solid",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        bottom: "0",
                        height: "45px",
                        position: "fixed",
                        "text-align": "center",
                        width: "100%",
                        border: "0px",
                        left: "0px",
                        "box-shadow": "0px 0px 10px 0px #00000026",
                        "z-index": V(ln).toString()
                    }), g.appendChild(lC(a, b)), g.appendChild(kC(a, b)), g.appendChild(oC(a, b)), a.document.getElementsByTagName("body")[0].appendChild(g)))
            })
        }, {
            threshold: .98
        })).observe(e);
        return e
    }

    function FC(a, b, c, d) {
        const e = a.document.createElement("SPAN");
        JC(e);
        e.appendChild(a.document.createTextNode(d));
        const f = a.document.createElement("A");
        XA(f);
        M(f, {
            "text-decoration": "none"
        });
        qe(f);
        f.className = "google-adfil";
        f.appendChild(YB(a, {
            bottom: "-1px",
            "font-family": '"Google Material Icons", "goog-matfb"',
            "font-size": "90%",
            "font-style": "normal",
            "font-weight": "normal",
            position: "relative",
            "text-decoration": "none"
        }));
        f.appendChild(a.document.createTextNode("\u00a0"));
        f.appendChild(e);
        const g = ZB(a);
        f.addEventListener("click", h => {
            Ii(999, () => {
                YA(d, c, ZB(a), g, b);
                RB(a, b, c)
            }, l => {
                l.e = `${V(pn)}`
            });
            h.preventDefault();
            h.stopImmediatePropagation();
            return !1
        });
        return f
    }

    function JC(a) {
        XA(a);
        M(a, {
            "text-decoration": "underline"
        });
        M(a, {
            "text-decoration-style": "dotted"
        });
        M(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        })
    };
    var KC = class {
        constructor() {
            this.j = 0;
            this.l = new Set;
            this.A = 0;
            this.B = this.C = null
        }
        sendGen204(a, b, c, d, e, f, g) {
            var h, l = V(pn),
                k = Array.from(null != (h = this.B) ? h : []).sort().join(",");
            h = this.C || "";
            let m = 0;
            for (const n of F(c, GC, 2)) m += F(n, tC, 2).length;
            a = {
                wp: a,
                c: b,
                e: l,
                ld: k,
                lx: h,
                m,
                n: this.j,
                o: e,
                p: F(c, GC, 2).length,
                t: this.l.size,
                w: this.A,
                x: Math.round(d)
            };
            P("adfil-imp", Object.assign({}, a, f ? {
                sap: Number(f.j),
                tap: Number(f.G),
                bap: Number(f.B),
                nsr: f.J,
                im: Number(f.l),
                mo: Number(f.D),
                ae: Number(g.l),
                fs: Number(g.j)
            } : {}), 1)
        }
    };
    var LC = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.vars = b;
            this.l = c;
            this.A = d
        }
        get window() {
            return this.win
        }
        get B() {
            return this.vars
        }
        get j() {
            return this.l
        }
        get C() {
            return this.A
        }
    };
    var MC = class {
        constructor(a) {
            this.l = a
        }
        get j() {
            return this.l
        }
    };

    function NC(a) {
        return a ? (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "" : ""
    }

    function OC(a) {
        return new Set(a.map(NC).filter(b => b.length))
    };
    var PC = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.D = b;
            this.G = c;
            this.C = d
        }
        get l() {
            return this.B
        }
        get A() {
            return this.D
        }
        get F() {
            return this.G
        }
        get j() {
            return this.C
        }
    };

    function QC(a, b, c, d, e) {
        const f = RC(c);
        if (f) {
            var g = 488 > Q(a).clientWidth,
                h = SC(a, g, c),
                l = new LC(a, b, c, d);
            Zi(17, [d, f, g, h]);
            Ii(898, () => {
                a: {
                    try {
                        var k = a.document
                    } catch (ja) {
                        break a
                    }
                    if (a.performance) {
                        var m = ZB(a),
                            n = V(Bn),
                            p = n ? m + n : Infinity;
                        !U(wn) && !U(sn) && 0 < F(f, GC, 2).length && TC(a.document);
                        b.hasOwnProperty("adfcb") || (b.adfcb = dg() ? null : Math.floor(20 * Zf()));
                        n = b.adfcb;
                        if (null != n) {
                            if (U(On) || rC(a))
                                if (rC(a)) var r = new XB(!0, !1, !1, e.j, 0, g);
                                else {
                                    r = Ot({
                                        K: a,
                                        zd: 3E3,
                                        Ic: V(nn),
                                        xa: Mh,
                                        ze: !0
                                    });
                                    var v = $B(a, 2),
                                        t = $B(a, 1);
                                    var x = 0 < r ||
                                        !h.l || U(Tn) && !h.j || 0 === h.F ? !1 : !h.A || 0 < t || g && 0 === v ? !0 : !1;
                                    r = new XB(x, 0 === v, 0 === t, e.j, r, g)
                                }
                            else r = null;
                            UC(a, r, l);
                            v = new KC;
                            p = new WA(d, g, f, n, p, r, "on" === b.google_adtest);
                            if (k = k.body)
                                if (VC(k)) {
                                    k = k.textContent || "";
                                    t = yC(k, p.A);
                                    v.A = t;
                                    x = NC(J(p.B, 7));
                                    var w = a.document.documentElement;
                                    w = NC(w.lang) || NC(w.getAttribute("xml:lang"));
                                    if ("" !== w) var G = new Set([w]);
                                    else {
                                        w = a.location;
                                        var E = w.host.match(/^[a-z]{2}\./i);
                                        E = E ? [E[0]] : [];
                                        for (H of w.pathname.split("/")) 2 === H.length && E.push(H);
                                        var H = OC(E);
                                        H.size || (w = a.navigator,
                                            H = OC((null == (G = w.languages) ? 0 : G.length) ? w.languages : [w.language]));
                                        G = H
                                    }
                                    v.C = x;
                                    v.B = new Set(G);
                                    if (t < V(un)) var I = "sw";
                                    else if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) I = "si";
                                    else if (G.has(x))
                                        if (ZB(a) >= p.D) I = "l";
                                        else {
                                            c: if (t = p.B, G = new BC, 0 === F(t, GC, 2).length || p.j && !p.j.j) I = !0;
                                                else {
                                                    p.j || (H = a.document, x = H.createElement("style"), x.textContent = $d(Vg `@font-face{font-family:"goog-matfb";size-adjust:17.16%;src:local("Times New Roman");}`), H.head.appendChild(x));
                                                    if (U(rn)) {
                                                        I =
                                                            new vC(F(t, GC, 2));
                                                        d: {
                                                            H = I.j;t = 0;
                                                            for (x = 0; x < k.length; x++) {
                                                                for (;;) {
                                                                    w = k.charCodeAt(x);
                                                                    if (H.j[t].contains(w)) {
                                                                        t = H.j[t].A.get(w);
                                                                        break
                                                                    }
                                                                    if (0 === t) break;
                                                                    t = H.j[t].j
                                                                }
                                                                for (w = t;;) {
                                                                    w = H.j[w].l;
                                                                    if (0 === w) break;
                                                                    k = !0;
                                                                    break d
                                                                }
                                                            }
                                                            k = !1
                                                        }
                                                        if (!k) {
                                                            I = !0;
                                                            break c
                                                        }
                                                    }
                                                    I = CC(a, a.document.body, p, G, v, I)
                                                }I = I ? "a" : "p"
                                        }
                                    else I = "sl"
                                } else I = "se";
                            else I = "sb";
                            m = ZB(a) - m;
                            !U(wn) && 0 < v.j && (Ic(f, 13) && (p = a.document, k = p.createElement("LINK"), ve(k, N `https://www.google.com/adsense/search/ads.js`, "prefetch"), k.as = "script", p.head.appendChild(k)), U(sn) && TC(a.document));
                            v.sendGen204(d, n, f, m, I, r, h);
                            Zi(18, [n, m, I, v])
                        }
                    }
                }
            }, k => {
                k.e = `${V(pn)}`
            })
        }
    }

    function UC(a, b, c) {
        U(On) && b && !b.j && (a = St(a)) && Ag(a, () => {
            QC(c.window, c.B, c.j, c.C, new MC(!0))
        })
    }

    function SC(a, b, c) {
        if (!U(On) && !rC(a)) return null;
        a = !!c.U && Dc(c.U) && Ic(WC(c), 5);
        b = !!c.U && Dc(c.U) && Ic(WC(c), 6) && (b || !Ic(WC(c), 7));
        const d = F(RC(c), GC, 2).length;
        c = !!c.U && Dc(c.U) && Ic(WC(c), 8);
        return new PC(a, b, d, c)
    }

    function VC(a) {
        try {
            xb(new ResizeObserver(() => {}))
        } catch (b) {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    }

    function TC(a) {
        const b = a.createElement("LINK"),
            c = U(Pn) ? N `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700&text=shoppingmode` : N `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
        ve(b, c, "stylesheet");
        a.head.appendChild(b)
    };
    var YC = class extends K {
            constructor(a) {
                super(a, -1, XC)
            }
        },
        tC = class extends K {
            constructor(a) {
                super(a)
            }
        },
        GC = class extends K {
            constructor(a) {
                super(a, -1, ZC)
            }
        },
        XC = [2],
        ZC = [2];

    function RC(a) {
        try {
            const f = a.l.match(/\bgoog_cpmi=([^&]*)/);
            if (f) {
                var b = decodeURIComponent(f[1]);
                var c = new YC(JSON.parse(b))
            } else c = null
        } catch (f) {
            c = null
        }
        c || (c = U(Qn) ? a.j : null);
        if (!c)
            if (U(Qn)) {
                var d, e;
                c = null != (e = null == (d = a.U) ? void 0 : D(d, YC, 11)) ? e : null
            } else c = null;
        return c
    }

    function WC(a) {
        let b, c;
        return null != (c = null == (b = a.U) ? void 0 : Qc(b, $C, 13, Fc)) ? c : null
    }
    var aD = class {
        constructor(a, b = null, c = null) {
            this.l = a;
            this.U = b;
            this.j = c
        }
    };
    var cD = a => {
        const b = a.H;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!df.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = bD(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = bD(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = bD(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = bD(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = bD(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = bD(a, b.google_color_line, c))
    };

    function bD(a, b, c) {
        a.j |= 2;
        return b[c % b.length]
    };

    function dD(a, b) {
        var c = Hi,
            d;
        var e;
        d = (e = (e = Mg()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new Ig(d.left, d.top, d.width, d.height) : null) ? new of (e.left, e.top) : (d = Ng()) && va(d.rootBounds) ? new of (d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new of (0, 0),
                g = Df(yf(b));
            if (yb(g, "parent")) {
                do {
                    if (g == a) var h = ch(b);
                    else {
                        var l = bh(b);
                        h = new of (l.left, l.top)
                    }
                    d =
                        h;
                    f.x += d.x;
                    f.y += d.y
                } while (g && g != a && g != g.parent && (b = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (k) {
            return c.ka(888, k), new of (-12245933, -12245933)
        }
    };
    var $C = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var fD = class extends K {
            constructor(a) {
                super(a, -1, eD)
            }
        },
        eD = [1];
    var hD = class extends K {
            constructor(a) {
                super(a, -1, gD)
            }
        },
        gD = [19],
        Fc = [13, 14];

    function iD(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var jD = class {
            constructor() {
                this.j = null;
                this.l = {
                    [mi]: {},
                    [ni]: {},
                    [oi]: {}
                };
                const a = b => this.j ? bg(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[ni] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        kD;
    let lD = void 0;

    function mD() {
        gi(lD, ei);
        return lD
    };

    function nD(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : hd(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function oD(a) {
        U(Zm) && P("abg_adsensesettings_lserr", {
            s: a,
            g: U($m),
            c: mD(),
            r: .01
        }, .01)
    };
    var pD = (a = u) => a.ggeac || (a.ggeac = {});
    class qD {
        constructor() {
            this.j = () => {}
        }
    };
    var sD = (a = pD()) => {
            Fi(O(Gi), a);
            rD(a);
            O(qD).j = Ei(Di, a);
            O(Fo).l()
        },
        rD = a => {
            const b = O(Fo);
            b.A = (c, d) => Ei(zi, a, () => !1)(c, d, 1);
            b.B = (c, d) => Ei(Ai, a, () => 0)(c, d, 1);
            b.j = (c, d) => Ei(Bi, a, () => "")(c, d, 1);
            b.C = (c, d) => Ei(Ci, a, () => [])(c, d, 1);
            b.l = () => {
                Ei(wi, a)(1)
            }
        };
    var tD = a => {
        const b = O(Gi).l();
        a = Ey(a);
        a.eids || (a.eids = []);
        return b.concat(a.eids).join(",")
    };

    function uD(a, b, c) {
        return c ? Dz(b, c, a.j) : null
    }

    function vD(a, b, c, d) {
        if (d) {
            var e = {
                xd: z(c, 2) - Date.now() / 1E3,
                path: z(c, 3),
                domain: z(c, 4),
                Bf: !1
            };
            a = a.j;
            B(d, 5) && Cz(a) && (new Az(a.document)).set(b, z(c, 1), e)
        }
    }

    function wD(a, b, c) {
        if (c && Dz(b, c, a.j))
            for (const e of xD(a.j.location.hostname)) {
                var d = a.j;
                B(c, 5) && Cz(d) && (new Az(d.document)).remove(b, "/", e)
            }
    }
    var yD = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function xD(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function zD(a, b, c) {
        return Ji(629, d => {
            delete a._gfp_s_;
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    l = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof l || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = bf(af($e(Ze(new cf, g), h), l), e);
                switch (d) {
                    case 1:
                        vD(c, "__gads",
                            e, b);
                        break;
                    case 2:
                        U(eo) && vD(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function AD(a, b, c) {
        let d = void 0;
        if (0 === a.l) {
            if (uD(a, "__gads", b)) var e = !0;
            else if (e = a.j, B(b, 5) && Cz(e) && (new Az(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === Dz("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                B(b, 5) && Cz(f) && (new Az(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = zD(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function BD(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = uD(b, "__gads", a);
        e && (d.cookie = e);
        U(eo) && ((e = uD(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e), d.gpid_exp = "1");
        const f = wd(zd(dd(ed("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = AD(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = l => {
                g(l).then(h)
            };
            Wf(c.document, f)
        }) : Promise.resolve()
    }
    var CD = (a, b, c) => {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        const d = new yD(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
            e ? Promise.resolve() : BD(a, d, b, c)
        } else Promise.resolve();
        a = uD(d, "__gads", a) || "";
        kD || (kD = new jD);
        b = kD;
        iD(b, a);
        a = b.l;
        O(qD).j(a);
        O(Gi).j(20);
        O(Gi).j(17)
    };
    var ki = {
        pj: 0,
        lj: 1,
        jj: 2,
        kj: 3,
        nj: 5,
        oj: 6,
        mj: 7
    };
    var DD = class {
        constructor(a) {
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.H = a.H;
            this.U = a.U;
            this.da = a.da;
            this.Ua = a.Ua;
            this.ga = a.ga;
            this.ma = a.ma;
            this.B = -1;
            this.j = 0;
            this.l = this.J = null;
            this.I = this.G = 0;
            this.A = [];
            this.mb = this.D = "";
            this.C = this.F = null
        }
    };
    var ED = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= mj(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var FD = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= mj(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var GD = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        HD = (a, b, c) => {
            let d = 0;
            try {
                d |= mj(a, 2500);
                if (U(po)) {
                    const g = Q(a).clientHeight;
                    d |= g ? 320 > g ? 2097152 : 0 : 1073741824
                }
                d |= nj(a);
                var e;
                if (e = 0 < b) {
                    var f = pv(c, b);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };

    function ID(a, b = null) {
        if (!U(so)) return 32;
        let c = a != a.top ? 512 : 0;
        var d;
        Kt(null == (d = a.navigator) ? void 0 : d.userAgent) && (c |= 1048576);
        d = a.innerWidth;
        1200 > d && (c |= 65536);
        const e = a.innerHeight;
        650 > e && (c |= 2097152);
        b && 0 === c && (JD({
            K: a,
            Nd: 1,
            position: 3 === b ? "left" : "right",
            R: d,
            Y: e,
            Ga: new Set,
            minWidth: 120,
            minHeight: 500
        }) || (c |= 16));
        return c
    }

    function KD(a) {
        if (0 !== ID(a)) return "";
        const b = [],
            c = a.innerWidth,
            d = a.innerHeight;
        for (const e of ["left", "right"]) {
            const f = JD({
                K: a,
                Nd: 1,
                position: e,
                R: c,
                Y: d,
                Ga: new Set,
                minWidth: 120,
                minHeight: 500
            });
            f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`)
        }
        return b.join("|")
    }

    function LD(a, b) {
        return null !== Nf(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function MD(a, b) {
        return Nf(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function ND(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function OD(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function PD(a) {
        return `${a.position}-${OD(a.R)}x${OD(a.Y)}-${OD(a.scrollY+a.Ya)}Y`
    }

    function QD(a) {
        return `f-${PD({position:a.position,Ya:a.Ya,scrollY:0,R:a.R,Y:a.Y})}`
    }

    function RD(a, b) {
        a = Math.min(null != a ? a : Infinity, null != b ? b : Infinity);
        return Infinity !== a ? a : 0
    }

    function SD(a, b, c) {
        const d = ij(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.Y),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.R);
                for (var l = .3 * c.R; f <= g; f += 10) {
                    if (0 < e && h < l) {
                        var k = QD({
                            position: "left",
                            Ya: f,
                            R: c.R,
                            Y: c.Y
                        });
                        b.set(k, RD(b.get(k), h))
                    }
                    if (h < c.R && e > c.R - l) {
                        k = QD({
                            position: "right",
                            Ya: f,
                            R: c.R,
                            Y: c.Y
                        });
                        const m = c.R - e;
                        b.set(k, RD(b.get(k), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function JD(a) {
        var b = ij(a.K).sideRailAvailableSpace,
            c = {
                K: a.K,
                R: a.R,
                Y: a.Y,
                Ga: a.Ga
            },
            d = `f-${OD(c.R)}x${OD(c.Y)}`;
        if (!b.has(d)) {
            b.set(d, 0);
            ij(c.K).sideRailProcessedFixedElements.clear();
            d = new Set([...Array.from(c.K.document.querySelectorAll("[data-anchor-status]")), ...c.Ga]);
            for (var e of ND(c.K)) LD(e, d) || SD(e, b, c)
        }
        c = [];
        d = .9 * a.Y;
        var f = tj(a.K),
            g = e = (a.Y - d) / 2,
            h = d / 11;
        for (var l = 0; 12 > l; l++) {
            var k = c,
                m = k.push;
            a: {
                var n = g;
                var p = a.position,
                    r = b,
                    v = {
                        K: a.K,
                        R: a.R,
                        Y: a.Y,
                        Ga: a.Ga
                    };
                const x = QD({
                        position: p,
                        Ya: n,
                        R: v.R,
                        Y: v.Y
                    }),
                    w = PD({
                        position: p,
                        Ya: n,
                        scrollY: f,
                        R: v.R,
                        Y: v.Y
                    });
                if (r.has(w)) {
                    n = RD(r.get(x), r.get(w));
                    break a
                }
                const G = "left" === p ? 20 : v.R - 20;
                let E = G;p = .3 * v.R / 7 * ("left" === p ? 1 : -1);
                for (let H = 0; 8 > H; H++) {
                    const I = Wt(v.K.document, Math.round(E), Math.round(n));
                    var t = LD(I, v.Ga);
                    const ja = MD(I, v.K);
                    if (!t && null !== ja) {
                        SD(ja, r, v);
                        r.delete(w);
                        break
                    }
                    t || (t = I.offsetHeight >= .25 * v.Y, t = I.offsetWidth >= .9 * v.R && t);
                    if (t) r.set(w, Math.round(Math.abs(E - G) + 20));
                    else if (E !== G) E -= p, p /= 2;
                    else {
                        r.set(w, 0);
                        break
                    }
                    E += p
                }
                n = RD(r.get(x), r.get(w))
            }
            m.call(k, n);
            g += h
        }
        b = a.Nd;
        f = a.position;
        d = Math.round(d / 12);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (k = 0; k < c.length; k++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[k];) m.pop();
            h[k] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(k)
        }
        m = [];
        l = c.length - 1;
        k = Array(c.length).fill(0);
        for (n = l; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
            k[n] = 0 === m.length ? l : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (l = 0; l < c.length; l++)
            if (n = {
                    position: f,
                    width: Math.round(c[l]),
                    height: Math.round((k[l] - h[l] + 1) * d),
                    Dj: e + h[l] * d
                }, r = n.width >= g && n.height >= a, 0 === b && r) {
                m = n;
                break
            } else 1 === b && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    };
    const TD = {
        [27]: 512,
        [26]: 128
    };
    var UD = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === $B(a, c);
                case 3:
                case 4:
                    return 0 === ID(a, c);
                case 8:
                    return b = "on" === b.google_adtest || Oz(a.location, "google_ia_debug") ? -1 : 3600, 0 == (GD(a) | HD(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || Oz(a.location, "google_scr_debug")), !qv(a, b, d);
                case 30:
                    return 0 == ux(a);
                case 26:
                    return 0 == FD(a);
                case 27:
                    return 0 === ED(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        VD = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return $B(a, c);
                case 3:
                case 4:
                    return ID(a,
                        c);
                case 8:
                    return b = "on" === b.google_adtest || Oz(a.location, "google_ia_debug") ? -1 : 3600, GD(a) | HD(a, b, d);
                case 9:
                    return qv(a, !("on" === b.google_adtest || Oz(a.location, "google_scr_debug")), d);
                case 16:
                    return Wo(b, a) ? 0 : 8388608;
                case 30:
                    return ux(a);
                case 26:
                    return FD(a);
                case 27:
                    return ED(a);
                default:
                    return 32
            }
        },
        WD = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!id(d)) return !1;
            a = Vf(a);
            if (!a || !UD(a, b, d, c)) return !1;
            b = ij(a);
            if (rj(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        YD = a => {
            const b =
                a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && XD(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b
        },
        ZD = a => {
            if (!a.hash) return null;
            let b = null;
            $f(Mz, c => {
                !b && Oz(a, c) && (b = Nz[c])
            });
            return b
        },
        aE = (a, b) => {
            const c = ij(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && $f(iv, d => {
                !c.debugCardRequested && "number" === typeof d && Rz(d, a.location) && (c.debugCardRequested = !0, $D(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        cE = (a, b, c) => {
            if (!b) return null;
            const d = ij(b);
            let e = 0;
            $f(jd, f => {
                const g = TD[f];
                g && 0 ===
                    bE(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        dE = (a, b, c) => {
            const d = [];
            $f(jd, e => {
                if (U(so) || 3 !== e && 4 !== e) {
                    var f = bE(b, a, e, c);
                    0 !== f && d.push(e + ":" + f)
                }
            });
            return d.join(",") || null
        },
        eE = a => {
            const b = [],
                c = {};
            $f(a, (d, e) => {
                if ((e = gj[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        fE = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        bE = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = ij(b),
                g = rj(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            $f(f.reactiveTypeDisabledByPublisher, (l, k) => {
                String(c) === String(k) && (h = !0)
            });
            h && ZD(b.location) !== c && (e |= 128);
            return e | VD(b, a, c, d)
        },
        gE = (a, b) => {
            if (a) {
                var c = ij(a),
                    d = {};
                $f(b, (e, f) => {
                    (f = gj[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                $f(jd, e => {
                    d[hj[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        hE = (a, b, c) => {
            b = Hi.na(b, c);
            return Wr(1, window, wd(Wg(a), O(Fo).j(hn.j, hn.defaultValue) ? {
                bust: O(Fo).j(hn.j, hn.defaultValue)
            } : {})).then(b)
        },
        $D = (a, b, c) => {
            c = Hi.na(212, c);
            Wr(3, a, Wg(b)).then(c)
        };
    const iE = a => {
        a.adsbygoogle || (a.adsbygoogle = [], Wf(a.document, Wg(N `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)))
    };
    var jE = (a, b) => {
            L(a, "load", () => {
                iE(a);
                a.adsbygoogle.push(b)
            })
        },
        kE = a => {
            a = a.google_reactive_ad_format;
            return id(a) ? "" + a : null
        },
        XD = a => !!kE(a) || null != a.google_pgb_reactive,
        lE = a => {
            a = kE(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a
        };
    var mE = a => "number" === typeof a.google_reactive_sra_index,
        rE = (a, b, c) => {
            const d = b.K || b.pubWin,
                e = b.H;
            e.google_reactive_plat = dE(d, e, c);
            var f = eE(a);
            f && (e.google_reactive_plaf = f);
            (f = fE(a)) && (e.google_reactive_fba = f);
            (f = KD(d)) && (e.google_plas = f);
            nE(a, e);
            f = ZD(b.pubWin.location);
            oE(a, f, e);
            f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
            U(xn) && (e.easpf = !0, e.easpi = U(Qn));
            U(bo) && (e.fsapi = !0);
            Og() || Lo(b.pubWin.top);
            f = Ni(b.pubWin, "rsrai", Ji(429, (g, h) => pE(b, d, e.google_ad_client, a, g, h, c)), Hi.na(430, Ca(wj,
                b.pubWin, 431, Mh)));
            b.A.push(f);
            ij(d).wasReactiveTagRequestSent = !0;
            qE(b, a, c)
        };
    const qE = (a, b, c) => {
        const d = a.H,
            e = va(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = Ni(a.pubWin, "apcnf", Ji(353, (f, g) => {
            var h = a.pubWin,
                l = d.google_ad_client,
                k = Wg(a.da.ob),
                m = Wg(a.da.Bb);
            return vg(g.origin) ? PA(h, l, e, f.config, c, k, null, m) : !1
        }), Hi.na(353, Ca(wj, a.pubWin, 353, Mh)));
        a.A.push(b)
    };
    var pE = (a, b, c, d, e, f, g) => {
            if (!vg(f.origin)) return !1;
            f = e.data;
            if (!Array.isArray(f)) return !1;
            if (!Fy(b, 1)) return !0;
            f && Zi(6, [f]);
            e = e.amaConfig;
            const h = [],
                l = [],
                k = ij(b);
            let m = null;
            for (let n = 0; n < f.length; n++) {
                if (!f[n]) continue;
                const p = f[n],
                    r = p.adFormat;
                k && p.enabledInAsfe && (k.reactiveTypeEnabledInAsfe[r] = !0);
                if (!p.noCreative) {
                    p.google_reactive_sra_index = n;
                    if (9 === r && e) {
                        p.pubVars = Object.assign(p.pubVars || {}, sE(d, p));
                        const v = new rv;
                        if (lv(v, p)) {
                            m = v;
                            continue
                        }
                    }
                    h.push(p);
                    l.push(r)
                }
            }
            h.length && (P("rasra::pm", {
                rt: l.join(","),
                c
            }, .1), hE(a.da.Hd, 522, n => {
                tE(h, b, c, n, d, g)
            }));
            e && PA(b, c, d, e, g, Wg(a.da.ob), m);
            return !0
        },
        sE = (a, b) => {
            const c = b.adFormat,
                d = b.adKey;
            delete b.adKey;
            const e = {};
            a = a.page_level_pubvars;
            va(a) && Object.assign(e, a);
            e.google_ad_unit_key = d;
            e.google_reactive_sra_index = b.google_reactive_sra_index;
            30 === c && (e.google_reactive_ad_format = 30);
            e.google_pgb_reactive = e.google_pgb_reactive || 5;
            return b.pubVars = e
        },
        tE = (a, b, c, d, e, f) => {
            const g = [];
            for (let h = 0; h < a.length; h++) {
                const l = a[h],
                    k = l.adFormat,
                    m = l.adKey,
                    n = d.configProcessorForAdFormat(k);
                k && n && m ? (l.pubVars = sE(e, l), delete l.google_reactive_sra_index, g.push(k), Ii(466, () => n.verifyAndProcessConfig(b, l, f))) : P("rasra::ivc", {
                    af: k,
                    ak: m,
                    c
                }, .1)
            }
            P("rasra::pr", {
                rt: g.join(","),
                c
            }, .1)
        },
        nE = (a, b) => {
            const c = [];
            let d = !1;
            $f(gj, (e, f) => {
                let g;
                if (a.hasOwnProperty(f)) {
                    const h = a[f];
                    va(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
                }
                f = gj[f] - 1;
                c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
            });
            d && (b.google_reactive_sra_channels = c.join(","))
        },
        oE = (a, b, c) => {
            const d = a.page_level_pubvars;
            !c.google_adtest &&
                ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
        };
    xb("script");
    var uE = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function vE(a, b) {
        if (!Wo(b, a)) return () => {};
        a = wE(b, a);
        if (!a) return () => {};
        const c = Ry();
        b = ld(b);
        const d = {
            Ja: a,
            H: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => pb(c, d)
    }

    function wE(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !ap.test(a.className);) a = a.parentElement;
        return a
    }

    function xE(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                l = a.childNodes[g];
            var c = l.style,
                d = h,
                e = ["width", "height"];
            for (let k = 0; k < e.length; k++) {
                const m = "google_ad_" + e[k];
                if (!d.hasOwnProperty(m)) {
                    var f = ig(c[e[k]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return l
        }
        return null
    }

    function yE(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function zE(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.j != c) {
            a.j = c;
            a = Ry();
            for (const d of a)
                if (d.Ja.offsetWidth != d.offsetWidth || d.H.google_full_width_responsive_allowed) d.offsetWidth = d.Ja.offsetWidth, Ii(467, () => {
                    var e = d.Ja,
                        f = d.H;
                    const g = xE(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = xE(e, f);
                    !h && g && 1 == e.childNodes.length ? (yE(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", iE(b), b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g ? h !=
                        g && (yE(g, !1), yE(h, !0)) : P("auto_size_refresh", {
                            context: "showOrHideElm",
                            url: b.location.href,
                            nodes: e.childNodes.length
                        })
                })
        }
    }
    var AE = class extends Lj {
        constructor() {
            super(...arguments);
            this.j = null
        }
        init(a) {
            const b = Iy();
            if (!X(b, 27, !1)) {
                My(b, 27, !0);
                this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => zE(this, a);
                L(a, "resize", c);
                Mj(this, () => {
                    Ke(a, "resize", c)
                })
            }
        }
    };
    var BE = class {
        constructor(a, b, c) {
            this.K = a;
            this.Ja = b;
            this.H = c;
            this.j = null;
            this.l = this.A = 0
        }
        B() {
            10 <= ++this.A && u.clearInterval(this.j);
            var a = Zo(this.K, this.Ja);
            a = $o(this.K, this.Ja, a);
            const b = Vo(this.Ja, this.K);
            null != b && 0 === b.x || u.clearInterval(this.j);
            a && (this.l++, P("rspv:al", {
                aligns: this.l,
                attempt: this.A,
                client: this.H.google_ad_client,
                eoffs: String(null != b ? b.x : null),
                eids: tD(this.H),
                slot: this.H.google_ad_slot,
                url: this.H.google_page_url
            }, .01))
        }
    };

    function CE(a, b) {
        var c = Ez(a, Ju(b));
        c = A(c, 2, b.tcString);
        c = A(c, 4, b.addtlConsent || "");
        A(c, 7, b.internalErrorState);
        c = !Lu(b);
        A(a, 9, c);
        null != b.gdprApplies && A(a, 3, b.gdprApplies)
    }

    function DE(a) {
        const b = new Tu(a.pubWin, -1, U(wo));
        if (!Nu(b)) return Promise.resolve(null);
        if (!U(bn)) return Su(b);
        const c = Iy(),
            d = X(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = X(c, 25, []);
            g.push(f);
            My(c, 25, g)
        });
        d || null === d || (My(c, 24, null), b.addEventListener(f => {
            if (Iu(f)) {
                My(c, 24, f);
                CE(a.l, f);
                for (const g of X(c, 25, [])) g.resolve(f);
                My(c, 25, [])
            } else My(c, 24, null)
        }));
        return e
    };

    function EE(a) {
        const b = {};
        b.dtd = FE((new Date).getTime(), $i);
        return lh(b, a)
    }

    function FE(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    };
    var HE = (a, b, c) => {
        let d;
        const e = (null == (d = b.parentElement) ? 0 : d.classList.contains("adsbygoogle")) ? b.parentElement : b;
        c.addEventListener("load", () => GE(e));
        return Ni(a, "adpnt", (f, g) => {
            var h;
            if (sj(g, c.contentWindow)) {
                f = vj(f).qid;
                try {
                    c.setAttribute("data-google-query-id", f);
                    null != a.googletag || (a.googletag = {
                        cmd: []
                    });
                    const l = null != (h = a.googletag.queryIds) ? h : [];
                    l.push(f);
                    500 < l.length && l.shift();
                    a.googletag.queryIds = l
                } catch (l) {}
                e.dataset.adStatus && P("adsense_late_fill", {
                    status: e.dataset.adStatus
                });
                e.dataset.adStatus =
                    "filled";
                h = !0
            } else h = !1;
            return h
        })
    };

    function GE(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function IE(a, b, c) {
        try {
            if (!vg(c.origin) || a.j && !sj(c, a.j.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Cb[d]) && a.Z.zb(168, () => {
            e.call(a, b, c)
        })
    }
    class JE extends Lj {
        constructor(a, b) {
            var c = Hi,
                d = Mh;
            super();
            this.A = a;
            this.j = b;
            this.Z = c;
            this.xa = d;
            this.Cb = {};
            this.ce = this.Z.na(168, (e, f) => void IE(this, e, f));
            this.ue = this.Z.na(169, (e, f) => wj(this.A, "ras::xsf", this.xa, e, f));
            this.pa = [];
            this.ya(this.Cb);
            this.pa.push(Mi(this.A, "sth", this.ce, this.ue))
        }
        l() {
            for (const a of this.pa) a();
            this.pa.length = 0;
            super.l()
        }
    };
    class KE extends JE {
        constructor(a, b = null) {
            super(a, b);
            this.A = a
        }
    };
    var LE = class extends KE {
        constructor(a, b) {
            super(a, U(zn) ? b : null);
            this.B = b;
            this.C = () => {};
            L(this.B, "load", this.C)
        }
        l() {
            this.B && Ke(this.B, "load", this.C);
            super.l();
            this.B = null
        }
        ya(a) {
            a["adsense-labs"] = b => {
                if (b = vj(b).settings) try {
                    var c = new Ye(JSON.parse(b));
                    if (Bc(c, 1)) {
                        var d = this.A,
                            e = z(c, 1) || "";
                        if (U($m) ? null != Iz({
                                win: d,
                                Wb: mD()
                            }).j : 1) {
                            if (U($m)) {
                                var f = Iz({
                                    win: d,
                                    Wb: mD()
                                });
                                if (null != f.j) {
                                    oD("ok");
                                    var g = nD(f.j.value)
                                } else oD(f.l.message), g = {}
                            } else g = nD(d.localStorage);
                            null !== c && (g[e] = c.toJSON());
                            try {
                                d.localStorage.setItem("google_adsense_settings",
                                    JSON.stringify(g))
                            } catch (h) {}
                        }
                    }
                } catch (h) {}
            }
        }
    };

    function ME(a) {
        a.B = a.D;
        a.J.style.transition = "height 500ms";
        a.C.style.transition = "height 500ms";
        a.F.style.transition = "height 500ms";
        a.j.style.transition = "height 500ms";
        NE(a)
    }

    function OE(a, b) {
        (a.j.contentWindow || a.j.contentWindow).postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function NE(a) {
        const b = `rect(0px, ${a.j.width}px, ${a.B}px, 0px)`;
        a.j.style.clip = b;
        a.F.style.clip = b;
        a.j.setAttribute("height", a.B);
        a.j.style.height = a.B + "px";
        a.F.setAttribute("height", a.B);
        a.F.style.height = a.B + "px";
        a.C.style.height = a.B + "px";
        a.J.style.height = a.B + "px"
    }

    function PE(a, b) {
        b = gg(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "1";
        a.M = ch(a.J).y;
        a.L = tj(a.A);
        if (a.M + a.B < a.L) return "2";
        if (a.M > oj(a.A) - a.A.innerHeight) return "3";
        b = a.L;
        a.j.setAttribute("height", a.D);
        a.j.style.height = a.D + "px";
        a.F.style.overflow = "hidden";
        a.J.style.position = "relative";
        a.J.style.transition = "height 100ms";
        a.C.style.transition = "height 100ms";
        a.F.style.transition = "height 100ms";
        a.j.style.transition = "height 100ms";
        b = Math.min(b + a.A.innerHeight - a.M, a.B);
        Xg(a.C, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.j.width}px, ${b}px, 0px)`;
        Xg(a.j, {
            clip: b
        });
        Xg(a.F, {
            clip: b
        });
        return "0"
    }

    function QE(a, b = {}) {
        a.W && (b.eid = a.W);
        b.qid = a.Db;
        P("eoscrl", b, aj(String(a.Eb)))
    }
    class RE extends KE {
        constructor(a, b) {
            super(a.K, b);
            this.F = a.ma.firstElementChild;
            this.C = a.ma;
            this.J = this.C.parentElement && this.C.parentElement.classList.contains("adsbygoogle") ? this.C.parentElement : this.C;
            this.B = parseInt(this.C.style.height, 10);
            this.W = null;
            this.Fb = this.Wc = !1;
            this.Db = "";
            this.za = this.L = this.D = 0;
            this.de = this.B / 5;
            this.M = ch(this.J).y;
            this.Eb = null;
            this.be = Ge(Ji(651, () => {
                this.M = ch(this.J).y;
                var c = this.L;
                this.L = tj(this.A);
                this.B < this.D ? (c = this.L - c, 0 < c && (this.za += c, this.za >= this.de ? (ME(this),
                    OE(this, this.D)) : (this.B = Math.min(this.D, this.B + c), OE(this, c), NE(this)))) : Ke(this.A, "scroll", this.O)
            }), this);
            this.O = () => {
                var c = this.be;
                df.requestAnimationFrame ? df.requestAnimationFrame(c) : c()
            }
        }
        ya(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = vj(b);
                this.W = b.i_expid;
                this.Db = b.qid;
                this.Eb = b.gen204_fraction;
                this.Wc || (this.Wc = !0, b = PE(this, b), "0" === b && L(this.A, "scroll", this.O, He), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: "0" === b,
                    googMsgType: "sth"
                }), "*"), QE(this, {
                    err: b
                }))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Fb || (this.Fb = !0, ME(this), Ke(this.A, "scroll", this.O))
            }
        }
        l() {
            this.O && Ke(this.A, "scroll", this.O, He);
            super.l()
        }
    };

    function SE(a) {
        const b = a.L.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.A.innerHeight) && !c
    }
    class TE extends Lj {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.C = b;
            this.L = c;
            this.D = 0;
            this.B = SE(this);
            this.J = Fe(this.F, this);
            this.j = Ji(433, () => {
                var d = this.J;
                df.requestAnimationFrame ? df.requestAnimationFrame(d) : d()
            });
            L(this.A, "scroll", this.j, He)
        }
        F() {
            const a = SE(this);
            if (a && !this.B) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.C.contentWindow;
                c && (Oi(c, "ig", b, "*", 2), 10 <= ++this.D && this.j && Ke(this.A, "scroll", this.j, He))
            }
            this.B = a
        }
    };

    function UE(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Bf(a.j.T() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = VE(a, b, c, a.j.j.elementsFromPoint(lf(c.left + c.width / 2, c.left, c.right - 1), lf(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = VE(a, b, c, a.j.j.elementsFromPoint(lf(c.left + c.width / 2, c.left, c.right - 1), lf(c.top + 2, c.top, c.bottom - 1)), 2, e.Fa),
            g = VE(a, b, c, a.j.j.elementsFromPoint(lf(c.left + 2, c.left, c.right - 1), lf(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.Fa, ...f.Fa]);
        const h = VE(a, b, c, a.j.j.elementsFromPoint(lf(c.right - 1 - 2, c.left, c.right - 1), lf(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.Fa, ...f.Fa, ...g.Fa]);
        var l = WE(a, b, c),
            k = n => ob(a.A, n.overlapType) && ob(a.B, n.overlapDepth) && ob(a.l, n.overlapDetectionPoint);
        e = kb([...e.entries, ...f.entries, ...g.entries, ...h.entries], k);
        k = kb(l, k);
        l = [...e, ...k];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < l.length || f;
        g = Cf(a.j.j);
        const m = new Ig(c.left, c.top, c.width, c.height);
        e = [...lb(e, n => new Ig(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...vb(lb(k, n => Kg(m, n.elementRect))), ...kb(Kg(m, new Ig(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: l,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? XE(m, e) : YE(c, e)
        }
    }

    function ZE(a, b) {
        const c = a.j.T(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(l => {
                                    const k = new ai,
                                        m = $h(k, () => UE(a, l));
                                    m && (k.j.length && (m.executionTime = Math.round(Number(k.j[0].duration))), h.disconnect(), e(m))
                                }, $E);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function VE(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            Fa: []
        };
        const g = [],
            h = [];
        for (let n = 0; n < d.length; n++) {
            const p = d[n];
            if (p === b) continue;
            if (ob(f, p)) continue;
            h.push(p);
            const r = p.getBoundingClientRect();
            if (a.j.contains(p, b)) {
                g.push(aF(a, c, p, r, 1, e));
                continue
            }
            if (a.j.contains(b, p)) {
                g.push(aF(a, c, p, r, 2, e));
                continue
            }
            a: {
                var l = a;
                var k = b,
                    m = p;
                const x = l.j.Me(k, m);
                if (!x) {
                    l = null;
                    break a
                }
                const {
                    suspectAncestor: w,
                    Qa: G
                } = bF(l, k, x, m) || {},
                {
                    suspectAncestor: E,
                    Qa: H
                } = bF(l, m, x, k) || {};l = w && G && E && H ? G <= H ? {
                    suspectAncestor: w,
                    overlapType: cF[G]
                } : {
                    suspectAncestor: E,
                    overlapType: dF[H]
                } : w && G ? {
                    suspectAncestor: w,
                    overlapType: cF[G]
                } : E && H ? {
                    suspectAncestor: E,
                    overlapType: dF[H]
                } : null
            }
            const {
                suspectAncestor: v,
                overlapType: t
            } = l || {};
            v && t ? g.push(aF(a, c, p, r, t, e, v)) : g.push(aF(a, c, p, r, 9, e))
        }
        return {
            entries: g,
            Fa: h
        }
    }

    function WE(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Yf(b, a.j.T());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(aF(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(aF(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(aF(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function XE(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Jg(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function YE(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function aF(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (ob(a.A, e) && ob(a.l, f)) {
            b = new Fg(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = eF(a, c)) && Hg(b, a)) c = 4;
            else {
                a = fF(c, d);
                if (Bb) {
                    e = gh(c, "paddingLeft");
                    f = gh(c, "paddingRight");
                    var l = gh(c, "paddingTop"),
                        k = gh(c, "paddingBottom");
                    e = new Fg(l, f, k, e)
                } else e = $g(c, "paddingLeft"), f = $g(c, "paddingRight"), l = $g(c, "paddingTop"), k = $g(c, "paddingBottom"), e = new Fg(parseFloat(l), parseFloat(f), parseFloat(k), parseFloat(e));
                Hg(b, new Fg(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = fF(c, d), c = Hg(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function bF(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.T();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Yf(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    Qa: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    Qa: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    Qa: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const l = gF(a, e.slice(0, f), h);
                    if (g || l) return {
                        suspectAncestor: h,
                        Qa: 4
                    }
                }
            }
        }
        return (a = gF(a, e, b)) ? {
                suspectAncestor: a,
                Qa: 5
            } :
            null
    }

    function gF(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = Yf(f, a.j.T());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function eF(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new Fg(a.top, a.right, a.bottom, a.left)
    }

    function fF(a, b) {
        if (!Bb || 9 <= Number(Rb)) {
            var c = $g(a, "borderLeftWidth");
            d = $g(a, "borderRightWidth");
            e = $g(a, "borderTopWidth");
            a = $g(a, "borderBottomWidth");
            c = new Fg(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = ih(a, "borderLeft");
            var d = ih(a, "borderRight"),
                e = ih(a, "borderTop");
            a = ih(a, "borderBottom");
            c = new Fg(e, d, a, c)
        }
        return new Fg(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class hF {
        constructor(a) {
            var b = iF;
            this.j = wf(a);
            this.A = [5, 8, 9];
            this.B = [3, 4];
            this.l = b
        }
    }
    const cF = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        dF = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    kb(ag({
        sh: 1,
        th: 2,
        bj: 3,
        cj: 4,
        ej: 5,
        mh: 6,
        oh: 7,
        rh: 8,
        ti: 9,
        dj: 10,
        qh: 11,
        aj: 12,
        lh: 13
    }), a => !ob([1, 2], a));
    ag({
        Dg: 1,
        ui: 2,
        Og: 3,
        fj: 4
    });
    const iF = ag({
            Eg: 1,
            ij: 2,
            fi: 3,
            Ri: 4
        }),
        $E = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function jF(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function kF(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function lF(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function mF(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.Mc + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Xg(a, "transition", b.join(","))
    }
    var nF = Ce(function() {
        if (Bb) return Ob("10.0");
        var a = Ff(document, "DIV"),
            b = Fb ? "-webkit" : Eb ? "-moz" : Bb ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = ge("div", {
            style: c
        });
        gf(a, b);
        a = a.firstChild;
        b = a.style[uf("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Yg(a, "transition")] || "")
    });

    function oF(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function pF(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function qF(a, b) {
        0 > a.A.indexOf(b) && (a.A = b + a.A)
    }

    function rF(a, b, c, d) {
        return "" != a.A || b ? null : "" == a.j.replace(sF, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function tF(a) {
        var b = rF(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var uF = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.A = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.A].join("|")
        }
    };

    function vF(a) {
        let b = a.Z;
        a.J = function() {};
        wF(a, a.F, b);
        let c = a.F.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Yf(c, b)
            } catch (g) {
                qF(a.j, "c")
            }
            const f = xF(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.W = !0);
            if (d && !f && yF(e)) {
                pF(a.j, "l");
                a.L = c;
                break
            }
            d = d && f;
            if (e && zF(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.Eb) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Sf(b)) {
                        pF(a.j, "c");
                        break
                    }
                } catch (g) {
                    pF(a.j,
                        "c");
                    break
                }
            }
        }
        a.I && a.B && AF(a);
        return a.j
    }

    function BF(a) {
        function b() {
            CF(c, f, g);
            if (h && !l && !g) {
                const k = function(m) {
                    for (let n = 0; n < m.length; n++) Xg(h, m[n], "0px")
                };
                k(DF);
                k(EF)
            }
        }
        const c = a.F;
        c.style.overflow = a.Db ? "visible" : "hidden";
        a.I && (a.L ? (mF(c, FF), mF(a.L, FF)) : mF(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.O && (c.style.opacity = a.O);
        const d = null != a.G && null != a.A && (a.ya || a.A > a.G) ? a.A : null,
            e = null != a.D && null != a.l && (a.ya || a.l > a.D) ? a.l : null;
        if (a.M) {
            const k = a.M.length;
            for (let m = 0; m < k; m++) CF(a.M[m], d, e)
        }
        const f = a.A,
            g = a.l,
            h = a.L,
            l = a.W;
        a.I ? u.setTimeout(b, 1E3) : b()
    }

    function GF(a) {
        if (a.B && !a.Cb || null == a.A && null == a.l && null == a.O && a.B) return a.j;
        var b = a.B;
        a.B = !1;
        vF(a);
        a.B = b;
        if (!b || null != a.pa && !rF(a.j, a.pa, a.A, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.G = null, a.D = null);
        if (null == a.G && null !== a.A || null == a.D && null !== a.l) a.I = !1;
        (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.A = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.A = "";
        BF(a);
        return vF(a)
    }

    function zF(a, b) {
        let c = !1;
        "none" == b.display && (pF(a.j, "n"), a.B && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || pF(a.j, "v");
        "hidden" == b.overflow && pF(a.j, "o");
        "absolute" == b.position ? (pF(a.j, "a"), c = !0) : "fixed" == b.position && (pF(a.j, "f"), c = !0);
        return c
    }

    function wF(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let l = 0; l < g.length; l++) {
            var h = g[l];
            h == b ? e = !0 : (h = HF(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && oF(a.j, 0, "o"), d & 4 && oF(a.j, 1, "o"));
        return !(d & 1)
    }

    function xF(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (t) {
            qF(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = gg(f),
            h = c.getAttribute("height"),
            l = gg(h),
            k = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = wF(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var p = e && e.width,
            r = e && e.height,
            v = ig(m) == a.G && ig(n) == a.D;
        m = v ? m : p;
        r = v ? n : r;
        p = ig(m);
        v = ig(r);
        g = null !== a.G && (null !== p && a.G >= p || null !== g && a.G >= g);
        v = null !== a.D && (null !== v && a.D >= v || null !== l && a.D >= l);
        l = !b && yF(d);
        v = b || v || l || !(f || m || d && (!IF(String(d.minWidth)) || !JF(String(d.maxWidth))));
        k = b || g || l || k || !(h || r || d && (!IF(String(d.minHeight)) || !JF(String(d.maxHeight))));
        KF(a, 0, v, c, "width", f, a.G, a.A);
        LF(a, 0, "d", v, e, d, "width", m, a.G, a.A);
        LF(a, 0, "m", v, e, d, "minWidth", e && e.minWidth, a.G, a.A);
        LF(a, 0, "M", v, e, d, "maxWidth", e && e.maxWidth, a.G, a.A);
        a.Fb ? (c = /^html|body$/i.test(c.nodeName), f = ig(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, a.B && !c && h && (e.setProperty("height", "auto", "important"), d && !IF(String(d.minHeight)) && e.setProperty("min-height",
            "0px", "important"), d && !JF(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (KF(a, 1, k, c, "height", h, a.D, a.l), LF(a, 1, "d", k, e, d, "height", r, a.D, a.l), LF(a, 1, "m", k, e, d, "minHeight", e && e.minHeight, a.D, a.l), LF(a, 1, "M", k, e, d, "maxHeight", e && e.maxHeight, a.D, a.l));
        return b
    }

    function AF(a) {
        function b() {
            if (0 < c) {
                var k = Yf(e, d) || {};
                const m = ig(k.width);
                k = ig(k.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== k && null !== g && h && h(1, g - k);
                --c
            } else u.clearInterval(l), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.Z,
            e = a.F,
            f = a.A,
            g = a.l,
            h = a.J;
        let l;
        u.setTimeout(function() {
            l = u.setInterval(b, 16)
        }, 990)
    }

    function HF(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Yf(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.C.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.C.boundingClientRect.left ? 2 : 0) | (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function KF(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = gg(f);
                null == f && (qF(a.j, "n"), oF(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.B)
                        if (a.I) {
                            const l = Math.max(f + h - (g || 0), 0),
                                k = a.J;
                            a.J = function(m, n) {
                                m == b && d.setAttribute(e, l - n);
                                k && k(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else oF(a.j, b, "d")
        }
    }

    function LF(a, b, c, d, e, f, g, h, l, k) {
        if (null != k) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? IF(f) : JF(f)) || (f = ig(f), null == f ? pF(a.j, "p") : null != l && pF(a.j, f == l ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? IF(h) : JF(h)) return;
                h = ig(h);
                null == h && (qF(a.j, "p"), oF(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.B)
                        if (a.I) {
                            const m = Math.max(h + k - (l || 0), 0),
                                n = a.J;
                            a.J = function(p, r) {
                                p == b && (e[g] = m - r + "px");
                                n && n(p, r)
                            }
                        } else e[g] = k + "px"
                } else oF(a.j, b, c)
        }
    }
    var QF = class {
        constructor(a, b, c, d, e, f, g) {
            this.Eb = a;
            this.M = c;
            this.F = b;
            this.Z = (a = this.F.ownerDocument) && (a.defaultView || a.parentWindow);
            this.C = new MF(this.F);
            this.B = g;
            this.Cb = NF(this.C, d.Sc, d.height, d.Md);
            this.G = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.right - this.C.boundingClientRect.left : null : e;
            this.D = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top : null : f;
            this.A = OF(d.width);
            this.l = OF(d.height);
            this.O = this.B ? OF(d.opacity) : null;
            this.pa =
                d.check;
            this.I = "animate" == d.Sc && !PF(this.C, this.l, this.za) && nF();
            this.Db = !!d.Yc;
            this.j = new uF;
            PF(this.C, this.l, this.za) && pF(this.j, "r");
            e = this.C;
            e.j && e.l >= e.A && pF(this.j, "b");
            this.L = this.J = null;
            this.W = !1;
            this.ya = !!d.xf;
            this.Fb = !!d.Kd;
            this.za = !!d.Md
        }
    };

    function PF(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.B) && (c ? (b = a.l + Math.min(b, OF(a.getHeight())), a = a.j && b >= a.A) : a = a.j && a.l >= a.A, d = a);
        return d
    }
    var MF = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && Vf(c);
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || u;
            this.A = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && jF(b);
            this.B = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.B
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function NF(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return PF(a, c, d)
        }
    }

    function yF(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function RF(a, b, c, d) {
        return GF(new QF(a, b, d, c, null, null, !0))
    }
    var SF = new uF("s", ""),
        sF = RegExp("[lonvafrbpEe]", "g");

    function JF(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function IF(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function CF(a, b, c) {
        null !== b && null !== gg(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== gg(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var DF = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        EF = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let TF = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        UF = DF;
    for (let a = 0; a < UF.length; a++) TF += ", " + UF[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    UF = EF;
    for (let a = 0; a < UF.length; a++) TF += ", " + UF[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var FF = TF;

    function OF(a) {
        return "string" === typeof a ? gg(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function VF(a, b, c, d, e, f, g, h, l, k) {
        const m = window;
        if (!a.j || !m) return k.err = "2", WF(a, k, null), !1;
        if ("no_rsz" === f) return k.err = "7", WF(a, k, null), !0;
        const n = new MF(a.j);
        if (!n.j) return k.err = "3", WF(a, k, null), !1;
        var p = n.getWidth();
        null != p && (k.w = p);
        p = n.getHeight();
        null != p && (k.h = p);
        if (NF(n, f, d, l)) {
            var r = a.j.ownerDocument.getElementById(a.j.id + (U(co) ? "_host" : "_anchor"));
            p = r ? [a.j] : null;
            r = r || a.j;
            const v = U($n);
            b = RF(m, r, {
                width: c,
                height: d,
                opacity: e,
                check: b,
                Sc: f,
                Yc: g,
                xf: h,
                Kd: v,
                Md: l
            }, p);
            k.r_cui && hg(k.r_cui.toString()) &&
                M(r, {
                    height: (null === d ? 0 : d - 48) + "px",
                    top: "24px"
                });
            null != c && (k.nw = c);
            null != d && (k.nh = d);
            k.rsz = b.toString();
            k.abl = tF(b);
            k.frsz = ("force" === f).toString();
            k.err = "0";
            WF(a, k, n);
            nb(O(Gi).l(), t => ob([248427477, 248427478], t)) && a.A === m && ZE(new hF(a.A), r).then(t => {
                Zi(8, [t]);
                return t
            }).then(t => {
                P("resize-ovlp", {
                    adf: a.B,
                    eid: a.F,
                    io: Number(t.isOverlappingOrOutsideViewport),
                    oa: t.overlappedArea.toFixed(2),
                    qid: k.qid || "",
                    slot: a.J,
                    url: a.L,
                    vp: t.viewportSize.width + "x" + t.viewportSize.height
                }, 1)
            }).catch(t => {
                P("resize-ovlp-err", {
                    err: t.message
                }, 1)
            });
            return !0
        }
        k.err = "1";
        WF(a, k, n);
        return !1
    }

    function XF(a, b, c) {
        const d = {
            scrl: tj(a.A || window),
            adk: a.D,
            adf: a.B,
            fmt: a.C
        };
        b && (d.str = PF(b, gg(c.r_nh), hg(c.r_cab)), d.ad_y = b.l, d.vph = b.A);
        $f(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function WF(a, b, c) {
        const d = aj(String(b.gen204_fraction));
        b = XF(a, c, b);
        b.url = a.A.document.URL;
        P("resize", b, d)
    }
    class YF extends KE {
        constructor(a, b, c) {
            super(a, b);
            this.D = String(c.google_ad_unit_key || "");
            this.B = String(c.google_ad_dom_fingerprint || "");
            this.C = String(c.google_ad_format || "");
            this.F = tD(c);
            this.J = String(c.google_ad_slot || "");
            this.L = String(c.google_page_url || "")
        }
        ya(a) {
            a["resize-me"] = (b, c) => {
                b = vj(b);
                var d = b.r_chk;
                if (null == d || "" === d) {
                    var e = gg(b.r_nw),
                        f = gg(b.r_nh),
                        g = gg(b.r_no);
                    null != g || 0 !== e && 0 !== f || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null;
                    e = VF(this, d, e, f, g, h, hg(b.r_ao), hg(b.r_ifr), hg(b.r_cab), b);
                    d = {
                        msg_type: "resize-result"
                    };
                    d.r_str = h;
                    d.r_status = e;
                    c = c.source;
                    d.googMsgType = "sth";
                    c.postMessage(JSON.stringify(d), "*");
                    this.j.dataset.googleQueryId || this.j.setAttribute("data-google-query-id", b.qid)
                }
            }
        }
        l() {
            super.l();
            this.j = null
        }
    };
    const ZF = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const $F = /^blogger$/,
        aG = /^wordpress(.|\s|$)/i,
        bG = /^joomla!/i,
        cG = /^drupal/i,
        dG = /\/wp-content\//,
        eG = /\/wp-content\/plugins\/advanced-ads/,
        fG = /\/wp-content\/themes\/genesis/,
        gG = /\/wp-content\/plugins\/genesis/;

    function hG(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (eG.test(e)) return 5;
                if (gG.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", fG.test(e) || gG.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if ($F.test(f)) return 1;
                if (aG.test(f)) return 2;
                if (bG.test(f)) return 3;
                if (cG.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", dG.test(d))) return 2;
        return 0
    };
    let iG = navigator;
    var jG = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        kG = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return jG(a.toLowerCase())
        };
    const lG = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        mG = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        nG = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var oG = () => {
        const a = new Qo;
        u.SVGElement && u.document.createElementNS && a.set(0);
        const b = ng();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        u.crypto && u.crypto.subtle && a.set(3);
        u.TextDecoder && u.TextEncoder && a.set(4);
        return Po(a)
    };
    var pG = new Map([
        [".google.com", a => N `https://adservice.google.com/adsid/integrator.${a}`],
        [".google.ad", a => N `https://adservice.google.ad/adsid/integrator.${a}`],
        [".google.ae", a => N `https://adservice.google.ae/adsid/integrator.${a}`],
        [".google.com.af", a => N `https://adservice.google.com.af/adsid/integrator.${a}`],
        [".google.com.ag", a => N `https://adservice.google.com.ag/adsid/integrator.${a}`],
        [".google.com.ai", a => N `https://adservice.google.com.ai/adsid/integrator.${a}`],
        [".google.al", a => N `https://adservice.google.al/adsid/integrator.${a}`],
        [".google.co.ao", a => N `https://adservice.google.co.ao/adsid/integrator.${a}`],
        [".google.com.ar", a => N `https://adservice.google.com.ar/adsid/integrator.${a}`],
        [".google.as", a => N `https://adservice.google.as/adsid/integrator.${a}`],
        [".google.at", a => N `https://adservice.google.at/adsid/integrator.${a}`],
        [".google.com.au", a => N `https://adservice.google.com.au/adsid/integrator.${a}`],
        [".google.az", a => N `https://adservice.google.az/adsid/integrator.${a}`],
        [".google.com.bd", a => N `https://adservice.google.com.bd/adsid/integrator.${a}`],
        [".google.be", a => N `https://adservice.google.be/adsid/integrator.${a}`],
        [".google.bf", a => N `https://adservice.google.bf/adsid/integrator.${a}`],
        [".google.bg", a => N `https://adservice.google.bg/adsid/integrator.${a}`],
        [".google.com.bh", a => N `https://adservice.google.com.bh/adsid/integrator.${a}`],
        [".google.bi", a => N `https://adservice.google.bi/adsid/integrator.${a}`],
        [".google.bj", a => N `https://adservice.google.bj/adsid/integrator.${a}`],
        [".google.com.bn", a => N `https://adservice.google.com.bn/adsid/integrator.${a}`],
        [".google.com.bo", a => N `https://adservice.google.com.bo/adsid/integrator.${a}`],
        [".google.com.br", a => N `https://adservice.google.com.br/adsid/integrator.${a}`],
        [".google.bs", a => N `https://adservice.google.bs/adsid/integrator.${a}`],
        [".google.bt", a => N `https://adservice.google.bt/adsid/integrator.${a}`],
        [".google.co.bw", a => N `https://adservice.google.co.bw/adsid/integrator.${a}`],
        [".google.com.bz", a => N `https://adservice.google.com.bz/adsid/integrator.${a}`],
        [".google.ca", a => N `https://adservice.google.ca/adsid/integrator.${a}`],
        [".google.cd", a => N `https://adservice.google.cd/adsid/integrator.${a}`],
        [".google.cf", a => N `https://adservice.google.cf/adsid/integrator.${a}`],
        [".google.cg", a => N `https://adservice.google.cg/adsid/integrator.${a}`],
        [".google.ch", a => N `https://adservice.google.ch/adsid/integrator.${a}`],
        [".google.ci", a => N `https://adservice.google.ci/adsid/integrator.${a}`],
        [".google.co.ck", a => N `https://adservice.google.co.ck/adsid/integrator.${a}`],
        [".google.cl", a => N `https://adservice.google.cl/adsid/integrator.${a}`],
        [".google.cm", a => N `https://adservice.google.cm/adsid/integrator.${a}`],
        [".google.com.co", a => N `https://adservice.google.com.co/adsid/integrator.${a}`],
        [".google.co.cr", a => N `https://adservice.google.co.cr/adsid/integrator.${a}`],
        [".google.com.cu", a => N `https://adservice.google.com.cu/adsid/integrator.${a}`],
        [".google.cv", a => N `https://adservice.google.cv/adsid/integrator.${a}`],
        [".google.com.cy", a => N `https://adservice.google.com.cy/adsid/integrator.${a}`],
        [".google.cz", a => N `https://adservice.google.cz/adsid/integrator.${a}`],
        [".google.de", a => N `https://adservice.google.de/adsid/integrator.${a}`],
        [".google.dj", a => N `https://adservice.google.dj/adsid/integrator.${a}`],
        [".google.dk", a => N `https://adservice.google.dk/adsid/integrator.${a}`],
        [".google.dm", a => N `https://adservice.google.dm/adsid/integrator.${a}`],
        [".google.dz", a => N `https://adservice.google.dz/adsid/integrator.${a}`],
        [".google.com.ec", a => N `https://adservice.google.com.ec/adsid/integrator.${a}`],
        [".google.ee", a => N `https://adservice.google.ee/adsid/integrator.${a}`],
        [".google.com.eg", a => N `https://adservice.google.com.eg/adsid/integrator.${a}`],
        [".google.es", a => N `https://adservice.google.es/adsid/integrator.${a}`],
        [".google.com.et", a => N `https://adservice.google.com.et/adsid/integrator.${a}`],
        [".google.fi", a => N `https://adservice.google.fi/adsid/integrator.${a}`],
        [".google.com.fj", a => N `https://adservice.google.com.fj/adsid/integrator.${a}`],
        [".google.fm", a => N `https://adservice.google.fm/adsid/integrator.${a}`],
        [".google.fr", a => N `https://adservice.google.fr/adsid/integrator.${a}`],
        [".google.ga", a => N `https://adservice.google.ga/adsid/integrator.${a}`],
        [".google.ge", a => N `https://adservice.google.ge/adsid/integrator.${a}`],
        [".google.gg", a => N `https://adservice.google.gg/adsid/integrator.${a}`],
        [".google.com.gh", a => N `https://adservice.google.com.gh/adsid/integrator.${a}`],
        [".google.com.gi", a => N `https://adservice.google.com.gi/adsid/integrator.${a}`],
        [".google.gl", a => N `https://adservice.google.gl/adsid/integrator.${a}`],
        [".google.gm", a => N `https://adservice.google.gm/adsid/integrator.${a}`],
        [".google.gr", a => N `https://adservice.google.gr/adsid/integrator.${a}`],
        [".google.com.gt", a => N `https://adservice.google.com.gt/adsid/integrator.${a}`],
        [".google.gy", a => N `https://adservice.google.gy/adsid/integrator.${a}`],
        [".google.com.hk", a => N `https://adservice.google.com.hk/adsid/integrator.${a}`],
        [".google.hn", a => N `https://adservice.google.hn/adsid/integrator.${a}`],
        [".google.hr", a => N `https://adservice.google.hr/adsid/integrator.${a}`],
        [".google.ht", a => N `https://adservice.google.ht/adsid/integrator.${a}`],
        [".google.hu", a => N `https://adservice.google.hu/adsid/integrator.${a}`],
        [".google.co.id", a => N `https://adservice.google.co.id/adsid/integrator.${a}`],
        [".google.ie", a => N `https://adservice.google.ie/adsid/integrator.${a}`],
        [".google.co.il", a => N `https://adservice.google.co.il/adsid/integrator.${a}`],
        [".google.im", a => N `https://adservice.google.im/adsid/integrator.${a}`],
        [".google.co.in", a => N `https://adservice.google.co.in/adsid/integrator.${a}`],
        [".google.iq", a => N `https://adservice.google.iq/adsid/integrator.${a}`],
        [".google.is", a => N `https://adservice.google.is/adsid/integrator.${a}`],
        [".google.it", a => N `https://adservice.google.it/adsid/integrator.${a}`],
        [".google.je", a => N `https://adservice.google.je/adsid/integrator.${a}`],
        [".google.com.jm", a => N `https://adservice.google.com.jm/adsid/integrator.${a}`],
        [".google.jo", a => N `https://adservice.google.jo/adsid/integrator.${a}`],
        [".google.co.jp", a => N `https://adservice.google.co.jp/adsid/integrator.${a}`],
        [".google.co.ke", a => N `https://adservice.google.co.ke/adsid/integrator.${a}`],
        [".google.com.kh", a => N `https://adservice.google.com.kh/adsid/integrator.${a}`],
        [".google.ki", a => N `https://adservice.google.ki/adsid/integrator.${a}`],
        [".google.kg", a => N `https://adservice.google.kg/adsid/integrator.${a}`],
        [".google.co.kr", a => N `https://adservice.google.co.kr/adsid/integrator.${a}`],
        [".google.com.kw", a => N `https://adservice.google.com.kw/adsid/integrator.${a}`],
        [".google.kz", a => N `https://adservice.google.kz/adsid/integrator.${a}`],
        [".google.la", a => N `https://adservice.google.la/adsid/integrator.${a}`],
        [".google.com.lb", a => N `https://adservice.google.com.lb/adsid/integrator.${a}`],
        [".google.li", a => N `https://adservice.google.li/adsid/integrator.${a}`],
        [".google.lk", a => N `https://adservice.google.lk/adsid/integrator.${a}`],
        [".google.co.ls", a => N `https://adservice.google.co.ls/adsid/integrator.${a}`],
        [".google.lt", a => N `https://adservice.google.lt/adsid/integrator.${a}`],
        [".google.lu", a => N `https://adservice.google.lu/adsid/integrator.${a}`],
        [".google.lv", a => N `https://adservice.google.lv/adsid/integrator.${a}`],
        [".google.com.ly", a => N `https://adservice.google.com.ly/adsid/integrator.${a}`],
        [".google.md", a => N `https://adservice.google.md/adsid/integrator.${a}`],
        [".google.me", a => N `https://adservice.google.me/adsid/integrator.${a}`],
        [".google.mg", a => N `https://adservice.google.mg/adsid/integrator.${a}`],
        [".google.mk", a => N `https://adservice.google.mk/adsid/integrator.${a}`],
        [".google.ml", a => N `https://adservice.google.ml/adsid/integrator.${a}`],
        [".google.com.mm", a => N `https://adservice.google.com.mm/adsid/integrator.${a}`],
        [".google.mn", a => N `https://adservice.google.mn/adsid/integrator.${a}`],
        [".google.ms", a => N `https://adservice.google.ms/adsid/integrator.${a}`],
        [".google.com.mt", a => N `https://adservice.google.com.mt/adsid/integrator.${a}`],
        [".google.mu", a => N `https://adservice.google.mu/adsid/integrator.${a}`],
        [".google.mv", a => N `https://adservice.google.mv/adsid/integrator.${a}`],
        [".google.mw", a => N `https://adservice.google.mw/adsid/integrator.${a}`],
        [".google.com.mx", a => N `https://adservice.google.com.mx/adsid/integrator.${a}`],
        [".google.com.my", a => N `https://adservice.google.com.my/adsid/integrator.${a}`],
        [".google.co.mz", a => N `https://adservice.google.co.mz/adsid/integrator.${a}`],
        [".google.com.na", a => N `https://adservice.google.com.na/adsid/integrator.${a}`],
        [".google.com.ng", a => N `https://adservice.google.com.ng/adsid/integrator.${a}`],
        [".google.com.ni", a => N `https://adservice.google.com.ni/adsid/integrator.${a}`],
        [".google.ne", a => N `https://adservice.google.ne/adsid/integrator.${a}`],
        [".google.nl", a => N `https://adservice.google.nl/adsid/integrator.${a}`],
        [".google.no", a => N `https://adservice.google.no/adsid/integrator.${a}`],
        [".google.com.np", a => N `https://adservice.google.com.np/adsid/integrator.${a}`],
        [".google.nr", a => N `https://adservice.google.nr/adsid/integrator.${a}`],
        [".google.nu", a => N `https://adservice.google.nu/adsid/integrator.${a}`],
        [".google.co.nz", a => N `https://adservice.google.co.nz/adsid/integrator.${a}`],
        [".google.com.om", a => N `https://adservice.google.com.om/adsid/integrator.${a}`],
        [".google.com.pa", a => N `https://adservice.google.com.pa/adsid/integrator.${a}`],
        [".google.com.pe", a => N `https://adservice.google.com.pe/adsid/integrator.${a}`],
        [".google.com.pg", a => N `https://adservice.google.com.pg/adsid/integrator.${a}`],
        [".google.com.ph", a => N `https://adservice.google.com.ph/adsid/integrator.${a}`],
        [".google.com.pk", a => N `https://adservice.google.com.pk/adsid/integrator.${a}`],
        [".google.pl", a => N `https://adservice.google.pl/adsid/integrator.${a}`],
        [".google.pn", a => N `https://adservice.google.pn/adsid/integrator.${a}`],
        [".google.com.pr", a => N `https://adservice.google.com.pr/adsid/integrator.${a}`],
        [".google.ps", a => N `https://adservice.google.ps/adsid/integrator.${a}`],
        [".google.pt", a => N `https://adservice.google.pt/adsid/integrator.${a}`],
        [".google.com.py", a => N `https://adservice.google.com.py/adsid/integrator.${a}`],
        [".google.com.qa", a => N `https://adservice.google.com.qa/adsid/integrator.${a}`],
        [".google.ro", a => N `https://adservice.google.ro/adsid/integrator.${a}`],
        [".google.ru", a => N `https://adservice.google.ru/adsid/integrator.${a}`],
        [".google.rw", a => N `https://adservice.google.rw/adsid/integrator.${a}`],
        [".google.com.sa", a => N `https://adservice.google.com.sa/adsid/integrator.${a}`],
        [".google.com.sb", a => N `https://adservice.google.com.sb/adsid/integrator.${a}`],
        [".google.sc", a => N `https://adservice.google.sc/adsid/integrator.${a}`],
        [".google.se", a => N `https://adservice.google.se/adsid/integrator.${a}`],
        [".google.com.sg", a => N `https://adservice.google.com.sg/adsid/integrator.${a}`],
        [".google.sh", a => N `https://adservice.google.sh/adsid/integrator.${a}`],
        [".google.si", a => N `https://adservice.google.si/adsid/integrator.${a}`],
        [".google.sk", a => N `https://adservice.google.sk/adsid/integrator.${a}`],
        [".google.sn", a => N `https://adservice.google.sn/adsid/integrator.${a}`],
        [".google.so", a => N `https://adservice.google.so/adsid/integrator.${a}`],
        [".google.sm", a => N `https://adservice.google.sm/adsid/integrator.${a}`],
        [".google.sr", a => N `https://adservice.google.sr/adsid/integrator.${a}`],
        [".google.st", a => N `https://adservice.google.st/adsid/integrator.${a}`],
        [".google.com.sv", a => N `https://adservice.google.com.sv/adsid/integrator.${a}`],
        [".google.td", a => N `https://adservice.google.td/adsid/integrator.${a}`],
        [".google.tg", a => N `https://adservice.google.tg/adsid/integrator.${a}`],
        [".google.co.th", a => N `https://adservice.google.co.th/adsid/integrator.${a}`],
        [".google.com.tj", a => N `https://adservice.google.com.tj/adsid/integrator.${a}`],
        [".google.tl", a => N `https://adservice.google.tl/adsid/integrator.${a}`],
        [".google.tm", a => N `https://adservice.google.tm/adsid/integrator.${a}`],
        [".google.tn", a => N `https://adservice.google.tn/adsid/integrator.${a}`],
        [".google.to", a => N `https://adservice.google.to/adsid/integrator.${a}`],
        [".google.com.tr", a => N `https://adservice.google.com.tr/adsid/integrator.${a}`],
        [".google.tt", a => N `https://adservice.google.tt/adsid/integrator.${a}`],
        [".google.com.tw", a => N `https://adservice.google.com.tw/adsid/integrator.${a}`],
        [".google.co.tz", a => N `https://adservice.google.co.tz/adsid/integrator.${a}`],
        [".google.com.ua", a => N `https://adservice.google.com.ua/adsid/integrator.${a}`],
        [".google.co.ug", a => N `https://adservice.google.co.ug/adsid/integrator.${a}`],
        [".google.co.uk", a => N `https://adservice.google.co.uk/adsid/integrator.${a}`],
        [".google.com.uy", a => N `https://adservice.google.com.uy/adsid/integrator.${a}`],
        [".google.co.uz", a => N `https://adservice.google.co.uz/adsid/integrator.${a}`],
        [".google.com.vc", a => N `https://adservice.google.com.vc/adsid/integrator.${a}`],
        [".google.co.ve", a => N `https://adservice.google.co.ve/adsid/integrator.${a}`],
        [".google.vg", a => N `https://adservice.google.vg/adsid/integrator.${a}`],
        [".google.co.vi", a => N `https://adservice.google.co.vi/adsid/integrator.${a}`],
        [".google.com.vn", a => N `https://adservice.google.com.vn/adsid/integrator.${a}`],
        [".google.vu", a => N `https://adservice.google.vu/adsid/integrator.${a}`],
        [".google.ws", a => N `https://adservice.google.ws/adsid/integrator.${a}`],
        [".google.rs", a => N `https://adservice.google.rs/adsid/integrator.${a}`],
        [".google.co.za", a => N `https://adservice.google.co.za/adsid/integrator.${a}`],
        [".google.co.zm", a => N `https://adservice.google.co.zm/adsid/integrator.${a}`],
        [".google.co.zw", a => N `https://adservice.google.co.zw/adsid/integrator.${a}`],
        [".google.cat", a => N `https://adservice.google.cat/adsid/integrator.${a}`]
    ].map(([a, b]) => [a, {
        json: b("json"),
        js: b("js"),
        ["sync.js"]: b("sync.js")
    }]));

    function qG(a, b, c) {
        const d = Xf("LINK", a);
        try {
            if (d.rel = "preload", Xa("preload", "stylesheet")) {
                d.href = yd(b).toString();
                const e = kf('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                e && d.setAttribute("nonce", e)
            } else d.href = b instanceof vd ? yd(b).toString() : b instanceof Fd ? Gd(b) : Gd(Ld(b))
        } catch (e) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (e) {}
    };
    let rG = u;
    const tG = a => {
        const b = new Map([
            ["domain", u.location.hostname]
        ]);
        sG[3] >= Da() && b.set("adsid", sG[1]);
        return Tg(pG.get(a).js, b)
    };
    let sG, uG;
    const vG = () => {
        rG = u;
        sG = rG.googleToken = rG.googleToken || {};
        const a = Da();
        sG[1] && sG[3] > a && 0 < sG[2] || (sG[1] = "", sG[2] = -1, sG[3] = -1, sG[4] = "", sG[6] = "");
        uG = rG.googleIMState = rG.googleIMState || {};
        pG.has(uG[1]) || (uG[1] = ".google.com");
        Array.isArray(uG[5]) || (uG[5] = []);
        "boolean" !== typeof uG[6] && (uG[6] = !1);
        Array.isArray(uG[7]) || (uG[7] = []);
        "number" !== typeof uG[8] && (uG[8] = 0)
    };
    var wG = a => {
        vG();
        pG.has(a) && (uG[1] = a)
    };
    const xG = {
        Bc: () => 0 < uG[8],
        uf: () => {
            uG[8]++
        },
        vf: () => {
            0 < uG[8] && uG[8]--
        },
        wf: () => {
            uG[8] = 0
        },
        Cj: () => !1,
        qd: () => uG[5],
        dd: a => {
            try {
                a()
            } catch (b) {
                u.setTimeout(() => {
                    throw b;
                }, 0)
            }
        },
        Id: () => {
            if (!xG.Bc()) {
                var a = u.document,
                    b = e => {
                        e = tG(e);
                        a: {
                            try {
                                var f = kf("script[nonce]");
                                break a
                            } catch (g) {}
                            f = void 0
                        }
                        qG(a, e.toString(), f);
                        f = Xf("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = () => u.processGoogleToken({}, 2);
                        xe(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), xG.uf()
                        } catch (g) {}
                    },
                    c = uG[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    newToken: "FBT"
                };
                u.setTimeout(() => u.processGoogleToken(d, 1), 1E3)
            }
        }
    };

    function yG(a) {
        vG();
        const b = rG.googleToken[5] || 0;
        a && (0 != b || sG[3] >= Da() ? xG.dd(a) : (xG.qd().push(a), xG.Id()));
        sG[3] >= Da() && sG[2] >= Da() || xG.Id()
    }
    var AG = a => {
        u.processGoogleToken = u.processGoogleToken || ((b, c) => zG(b, c));
        yG(a)
    };
    const zG = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        vG();
        1 == b ? xG.wf() : xG.vf();
        var h = rG.googleToken = rG.googleToken || {},
            l = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !xG.Bc() && (!(sG[3] >= Da()) || "NT" == sG[1]);
        var k = !(sG[3] >= Da()) && 0 != b;
        if (l || d || k) d = Da(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && Bh(u, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, vG();
        if (l || !xG.Bc()) {
            b = xG.qd();
            for (c = 0; c < b.length; c++) xG.dd(b[c]);
            b.length = 0
        }
    };
    const BG = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        CG = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function DG(a) {
        try {
            let e, f;
            const g = null == (e = a.performance) ? void 0 : null == (f = e.getEntriesByType("navigation")) ? void 0 : f[0];
            if (null == g ? 0 : g.type) {
                let h;
                return null != (h = BG.get(g.type)) ? h : null
            }
        } catch (e) {}
        let b, c, d;
        return null != (d = CG.get(null == (b = a.performance) ? void 0 : null == (c = b.navigation) ? void 0 : c.type)) ? d : null
    };
    var EG = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Z = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function FG() {
        const a = window.navigator.userAgent,
            b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function GG(a = window) {
        return !a.PeriodicSyncManager
    }

    function HG(a, b, c) {
        a = a.goog_tt_state_map;
        let d, e = [];
        b && (d = null == a ? void 0 : a.get(EG.issuerOrigin)) && e.push(d);
        c && (d = null == a ? void 0 : a.get(Z.issuerOrigin)) && e.push(d);
        return e
    }

    function IG(a) {
        return U(Co) ? !0 : a.some(b => b.hasRedemptionRecord)
    }

    function JG(a, b, c) {
        return b || ".google.ch" === c || "function" === typeof a.__tcfapi
    }

    function KG(a, b) {
        a = U(Co) ? a.filter(c => 12 !== c.state).map(c => c.issuerOrigin) : a.filter(c => c.hasRedemptionRecord).map(c => c.issuerOrigin);
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: U(Co) ? "omit" : "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        !U(Co) && b && 0 < Object.keys(b).length && (a.additionalSigningData = Wb(JSON.stringify(b)));
        return a
    }

    function LG(a, b, c) {
        let d;
        const e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function MG() {
        const a = `${EG.issuerOrigin}${EG.redemptionPath}`,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: EG.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        LG(EG.issuerOrigin, 2);
        return window.fetch(a, b).then(c => {
            if (!c.ok) throw Error(`${c.status}: Network response was not ok!`);
            LG(EG.issuerOrigin, 6, !0)
        }).catch(c => {
            c && "NoModificationAllowedError" === c.name ? LG(EG.issuerOrigin, 6, !0) : LG(EG.issuerOrigin, 5)
        })
    }

    function NG() {
        const a = `${EG.issuerOrigin}${EG.issuancePath}`;
        LG(EG.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(b => {
            if (!b.ok) throw Error(`${b.status}: Network response was not ok!`);
            LG(EG.issuerOrigin, 10);
            return MG()
        }).catch(b => {
            if (b && "NoModificationAllowedError" === b.name) return LG(EG.issuerOrigin, 10), MG();
            LG(EG.issuerOrigin, 9)
        })
    }

    function OG() {
        LG(EG.issuerOrigin, 13);
        return document.hasTrustToken(EG.issuerOrigin).then(a => a ? MG() : NG())
    }

    function PG() {
        LG(Z.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(Z.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }));
            const b = `${Z.issuerOrigin}${Z.redemptionPath}`,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            LG(Z.issuerOrigin, 16);
            a = a.then(e => window.fetch(b, c).then(f => {
                if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                LG(Z.issuerOrigin, 18, !0)
            }).catch(f => {
                if (f && "NoModificationAllowedError" === f.name) LG(Z.issuerOrigin,
                    18, !0);
                else {
                    if (e) return window.Promise.reject({
                        state: 17,
                        error: f
                    });
                    LG(Z.issuerOrigin, 17)
                }
            })).then(() => document.hasTrustToken(Z.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }))).then(e => {
                const f = `${Z.issuerOrigin}${Z.getStatePath}`;
                LG(Z.issuerOrigin, 20);
                return window.fetch(`${f}?ht=${e}`, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Z.issuerOrigin]
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    LG(Z.issuerOrigin, 22);
                    return g.text().then(h =>
                        JSON.parse(h))
                }).catch(g => window.Promise.reject({
                    state: 21,
                    error: g
                }))
            });
            const d = yg(window);
            return a.then(e => {
                const f = `${Z.issuerOrigin}${Z.issuancePath}`;
                return e && e.srqt && e.cs ? (LG(Z.issuerOrigin, 23), window.fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    LG(Z.issuerOrigin, 25);
                    return e
                }).catch(g => window.Promise.reject({
                    state: 24,
                    error: g
                }))) : e
            }).then(e => {
                if (e && e.srdt && e.cs) return LG(Z.issuerOrigin,
                    26), window.fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(f => {
                    if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                    LG(Z.issuerOrigin, 28, !0)
                }).catch(f => window.Promise.reject({
                    state: 27,
                    error: f
                }))
            }).then(() => {
                LG(Z.issuerOrigin, 29)
            }).catch(e => {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        LG(Z.issuerOrigin, e.state);
                        const f = V(Bo);
                        Math.random() <= f && Eh({
                            state: e.state,
                            err: e.error.toString()
                        })
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function QG(a) {
        if (document.hasTrustToken && !U(zo) && a.A) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof Map) {
                var c = [];
                if (a.j.some(d => d.issuerOrigin === EG.issuerOrigin)) {
                    let d = b.get(EG.issuerOrigin);
                    d || (d = OG(), b.set(EG.issuerOrigin, d));
                    c.push(d)
                }
                a.j.some(d => d.issuerOrigin === Z.issuerOrigin) && (a = b.get(Z.issuerOrigin), a || (a = PG(), b.set(Z.issuerOrigin, a)), c.push(a));
                if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
            }
        }
    }
    var RG = class extends Lj {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.j = [];
            b && FG() && this.j.push(EG);
            c && this.j.push(Z);
            if (document.hasTrustToken && !U(zo)) {
                const d = new Map;
                this.j.forEach(e => {
                    d.set(e.issuerOrigin, {
                        issuerOrigin: e.issuerOrigin,
                        state: this.A ? 1 : 12,
                        hasRedemptionRecord: !1
                    })
                });
                window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof Map ? new Map([...d, ...window.goog_tt_state_map]) : d;
                window.goog_tt_promise_map && window.goog_tt_promise_map instanceof Map || (window.goog_tt_promise_map =
                    new Map)
            }
        }
    };

    function SG(a) {
        var b;
        if (a = null == (b = a.navigator) ? void 0 : b.userActivation) {
            b = 0;
            if (null == a ? 0 : a.hasBeenActive) b |= 1;
            if (null == a ? 0 : a.isActive) b |= 2;
            return b
        }
    };
    const TG = /[+, ]/;

    function UG(a, b) {
        const c = a.H;
        var d = a.pubWin,
            e = {},
            f = d.document;
        var g = Eg(d);
        var h = Ro(d, c.google_ad_width, c.google_ad_height);
        var l = To(g).Gc;
        var k = d.top == d ? 0 : Sf(d.top) ? 1 : 2;
        var m = 4;
        h || 1 != k ? h || 2 != k ? h && 1 == k ? m = 7 : h && 2 == k && (m = 8) : m = 6 : m = 5;
        l && (m |= 16);
        l = "" + m;
        k = Uo(d);
        m = !!c.google_page_url;
        e.google_iframing = l;
        0 != k && (e.google_iframing_environment = k);
        if (!m && "ad.yieldmanager.com" == f.domain) {
            for (l = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < l.indexOf("%");) try {
                l = decodeURIComponent(l)
            } catch (p) {
                break
            }
            c.google_page_url = l;
            m = !!l
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && Sf(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch (p) {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        d = g == g.top ? g.document.referrer : (d = Mg()) && d.referrer || "";
        e.google_referrer_url = d;
        So(e, c);
        e =
            c.google_page_location || c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in ZF), 2 <= e.length && (d = d || e[e.length - 2] in ZF), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = VG(a, b);
        d = a.H;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" ===
        d.google_ad_client && WG.test(f) && (g = "/pagead/lopri?");
        a = lh(b, `https://${e}${g}` + (Ic(a.U, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function XG(a) {
        return encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + kh({
            adk: a.google_ad_unit_key,
            client: a.google_ad_client,
            fa: a.google_reactive_ad_format
        })
    }

    function YG(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch (c) {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                const c = Df(a);
                if (c) {
                    const d = c.frameElement;
                    if (d && Sf(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch (c) {}
            b = null
        }
        else b = null;
        return b
    }

    function ZG(a, b) {
        b.eid = tD(a.pubWin);
        const c = a.H.google_loeid;
        "string" === typeof c && (a.j |= 4096, b.loeid = c)
    }

    function $G(a, b) {
        a = (a = Vf(a.pubWin)) && a.document ? No(a.document, a) : new of (-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function aH(a) {
        try {
            const b = u.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch (b) {}
        return ""
    }

    function bH(a) {
        const b = Qh();
        b && (a.debug_experiment_id = b);
        a.creatives = aH(/\b(?:creatives)=([\d,]+)/);
        a.adgroups = aH(/\b(?:adgroups)=([\d,]+)/);
        a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
    }

    function cH(a, b, c) {
        const d = a.H;
        var e = a.pubWin,
            f = a.K,
            g = Eg(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = Mg(e)) && va(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = To(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Gc || (b.usrc = 1));
        h = d.google_trust_token_additional_signing_data || {};
        h.url = b.url;
        d.google_trust_token_additional_signing_data = h;
        g.url != (b.loc || b.url) && (b.top =
            g.url);
        a.mb && (b.etu = a.mb);
        0 <= a.B && (b.eae = a.B);
        (c = cE(d, f, f ? Bz(c, f) : null)) && (b.fc = c);
        if (!uh(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode && (h = (new xf(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const ba = h.contentWindow.document;
                    ba.open();
                    ba.write(ce(oe));
                    ba.close();
                    g += ba.documentMode
                } catch (ba) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let l, k, m, n, p, r, v, t, x;
        try {
            var w = e.screenX;
            l = e.screenY
        } catch (ba) {}
        try {
            k = e.outerWidth,
                m = e.outerHeight
        } catch (ba) {}
        try {
            n = e.innerWidth, p = e.innerHeight
        } catch (ba) {}
        try {
            r = e.screenLeft, v = e.screenTop
        } catch (ba) {}
        try {
            n = e.innerWidth, p = e.innerHeight
        } catch (ba) {}
        try {
            t = e.screen.availWidth, x = e.screen.availTop
        } catch (ba) {}
        b.brdim = [r, v, w, l, t, x, k, m, n, p].join();
        w = 0;
        void 0 === u.postMessage && (w |= 1);
        0 < w && (b.osd = w);
        b.vis = jF(e.document);
        w = a.ga;
        e = XD(d) ? SF : GF(new QF(e, w, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = tF(e);
        if (!XD(d) && (e = vh(d), null != e)) {
            w = 0;
            a: {
                try {
                    {
                        var G =
                            d.google_async_iframe_id;
                        const ba = window.document;
                        if (G) var E = ba.getElementById(G);
                        else {
                            var H = ba.getElementsByTagName("script"),
                                I = H[H.length - 1];
                            E = I && I.parentNode || null
                        }
                    }
                    if (G = E) {
                        E = [];
                        H = 0;
                        for (var ja = Date.now(); 100 >= ++H && 50 > Date.now() - ja && (G = YG(G));) 1 === G.nodeType && E.push(G);
                        var Ka = E;
                        b: {
                            for (ja = 0; ja < Ka.length; ja++) {
                                c: {
                                    var ca = Ka[ja];
                                    try {
                                        if (ca.parentNode && 0 < ca.offsetWidth && 0 < ca.offsetHeight && ca.style && "none" !== ca.style.display && "hidden" !== ca.style.visibility && (!ca.style.opacity || 0 !== Number(ca.style.opacity))) {
                                            const ba =
                                                ca.getBoundingClientRect();
                                            var T = 0 < ba.right && 0 < ba.bottom;
                                            break c
                                        }
                                    } catch (ba) {}
                                    T = !1
                                }
                                if (!T) {
                                    var Mb = !1;
                                    break b
                                }
                            }
                            Mb = !0
                        }
                        if (Mb) {
                            b: {
                                const ba = Date.now();Mb = /^html|body$/i;T = /^fixed/i;
                                for (ca = 0; ca < Ka.length && 50 > Date.now() - ba; ca++) {
                                    const Bg = Ka[ca];
                                    if (!Mb.test(Bg.tagName) && T.test(Bg.style.position || ah(Bg, "position"))) {
                                        var Ee = Bg;
                                        break b
                                    }
                                }
                                Ee = null
                            }
                            break a
                        }
                    }
                } catch (ba) {}
                Ee = null
            }
            Ee && Ee.offsetWidth * Ee.offsetHeight <= 4 * e.width * e.height && (w = 1);
            b.pfx = w
        }
        a: {
            if (.05 > Math.random() && f) try {
                const ba = f.document.getElementsByTagName("head")[0];
                var Vr = ba ? hG(ba) : 0;
                break a
            } catch (ba) {}
            Vr = 0
        }
        f = Vr;
        0 !== f && (b.cms = f);
        d.google_lrv !== J(a.U, 2) && (b.alvm = d.google_lrv || "none")
    }

    function dH(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : Tf(() => {
            c++;
            return !1
        }, !0, !0, a);
        c && (b.nhd = c)
    }

    function eH(a, b) {
        const c = X(b, 8, {});
        b = X(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function fH(a, b, c) {
        const d = a.H;
        var e = a.H;
        b.dt = $i;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = u.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (I) {}
            g = null
        }(e = (e = g) ? FE(e, u.Date.now() - $i, 1E6) : null) && (b.bdt = e);
        b.idt = FE(a.I, $i);
        e = a.H;
        b.shv = J(a.U, 2);
        a.Ua && (b.mjsv = a.Ua);
        "sa" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = Mg(a.pubWin)) {
            b.is_amp = 1;
            g = e || Mg();
            b.amp_v = g && g.mode ? +g.mode.version || null : null;
            if ((e = e || Mg()) && e.container) {
                e = e.container.split(",");
                g = [];
                for (f = 0; f < e.length; f++) g.push(Lg[e[f]] || "x");
                e = g.join()
            } else e = null;
            e && (b.act = e)
        }
        wh(a.pubWin) && (b.abxe = 1);
        if ("_gfp_a_" in a.pubWin) {
            e = a.pubWin._gfp_a_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
            e && (e = new yD(a.pubWin), (g = uD(e, "__gads", c)) && (b.cookie = g), U(eo) && (g = uD(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g), U(fo) && "1" === uD(e,
                "__gpi_opt_out", c) && (b.gpico = "1", b.pdopt = "1"))
        }
        e = Iy();
        f = X(e, 8, {});
        g = d.google_ad_section;
        f[g] && (b.prev_fmts = f[g]);
        f = X(e, 9, {});
        f[g] && (b.prev_slotnames = f[g].toLowerCase());
        eH(d, e);
        g = X(e, 15, 0);
        0 < g && (b.nras = String(g));
        (f = Mg(window)) ? (f ? (g = f.pageViewId, f = f.clientId, "string" === typeof f && (g += f.replace(/\D/g, "").substr(0, 6))) : g = null, g = +g) : (g = Eg(window), (f = g.google_global_correlator) || (g.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), g = f);
        b.correlator = X(e, 7, g);
        U(lo) && (b.rume = 1);
        if (d.google_ad_channel) {
            g =
                X(e, 10, {});
            f = "";
            var h = d.google_ad_channel.split(TG);
            for (var l = 0; l < h.length; l++) {
                var k = h[l];
                g[k] ? f += k + "+" : g[k] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            f = X(e, 11, []);
            h = d.google_ad_host_channel.split("|");
            e = -1;
            g = [];
            for (l = 0; l < h.length; l++) {
                k = h[l].split(TG);
                f[l] || (f[l] = {});
                var m = "";
                for (var n = 0; n < k.length; n++) {
                    var p = k[n];
                    "" !== p && (f[l][p] ? m += "+" + p : f[l][p] = !0)
                }
                m = m.slice(1);
                g[l] = m;
                "" !== m && (e = l)
            }
            f = "";
            if (-1 < e) {
                for (h = 0; h < e; h++) f += g[h] + "|";
                f += g[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        e = d.google_ad_client;
        try {
            var r = Eg(window),
                v = r.google_prev_clients;
            v || (v = r.google_prev_clients = {});
            if (e in v) var t = 1;
            else v[e] = !0, t = 2
        } catch (I) {
            t = 0
        }
        b.pv = t;
        v = a.pubWin.document;
        t = a.H;
        e = a.pubWin;
        r = v.domain;
        e = (B(c, 5) && Cz(e) ? e.document.cookie : null) || "";
        h = a.pubWin.screen;
        l = v.referrer;
        m = nh();
        if (Mg()) var x = window.gaGlobal || {};
        else {
            g = Math.round((new Date).getTime() / 1E3);
            f = t.google_analytics_domain_name;
            c = "undefined" == typeof f ? kG("auto", r) : kG(f, r);
            n = -1 < e.indexOf("__utma=" + c + ".");
            k = -1 < e.indexOf("__utmb=" + c);
            (r =
                (Pg() || window).gaGlobal) || (r = {}, (Pg() || window).gaGlobal = r);
            v = !1;
            if (n) {
                var w = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                k ? r.sid = w[3] : r.sid || (r.sid = g + "");
                r.vid = w[0] + "." + w[1];
                r.from_cookie = !0
            } else {
                r.sid || (r.sid = g + "");
                if (!r.vid) {
                    v = !0;
                    k = Math.round(2147483647 * Math.random());
                    n = iG.appName;
                    p = iG.version;
                    var G = iG.language ? iG.language : iG.browserLanguage,
                        E = iG.platform,
                        H = iG.userAgent;
                    try {
                        w = iG.javaEnabled()
                    } catch (I) {
                        w = !1
                    }
                    w = [n, p, G, E, H, w ? 1 : 0].join("");
                    h ? w += h.width + "x" + h.height + h.colorDepth : u.java && u.java.awt &&
                        (h = u.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), w += h.screen.width + "x" + h.screen.height);
                    w = w + e + (l || "");
                    for (h = w.length; 0 < m;) w += m-- ^ h++;
                    r.vid = (k ^ jG(w) & 2147483647) + "." + g
                }
                r.from_cookie || (r.from_cookie = !1)
            }
            if (!r.cid) {
                b: for (g = f, w = 999, g && (g = 0 == g.indexOf(".") ? g.substr(1) : g, w = g.split(".").length), g = 999, e = e.split(";"), f = 0; f < e.length; f++)
                    if (h = lG.exec(e[f]) || mG.exec(e[f]) || nG.exec(e[f])) {
                        l = h[1] || 0;
                        if (l == w) {
                            x = h[2];
                            break b
                        }
                        l < g && (g = l, x = h[2])
                    }v && x && -1 != x.search(/^\d+\.\d+$/) ? (r.vid = x, r.from_cookie = !0) : x !=
                    r.vid && (r.cid = x)
            }
            r.dh = c;
            r.hid || (r.hid = Math.round(2147483647 * Math.random()));
            x = r
        }
        b.ga_vid = x.vid;
        b.ga_sid = x.sid;
        b.ga_hid = x.hid;
        b.ga_fc = x.from_cookie;
        b.ga_cid = x.cid;
        b.ga_wpids = t.google_analytics_uacct;
        dH(a.pubWin, b);
        (a = d.google_ad_layout) && 0 <= uE[a] && (b.rplot = uE[a])
    }

    function gH(a, b) {
        a = a.l;
        if ((null == a ? 0 : B(a, 6)) || Qy()) b.npa = 1;
        if (a) {
            Bc(a, 3) && (b.gdpr = B(a, 3) ? "1" : "0");
            var c = z(a, 1);
            c && (b.us_privacy = c);
            (c = z(a, 2)) && (b.gdpr_consent = c);
            (c = z(a, 4)) && (b.addtl_consent = c);
            (a = z(a, 7)) && (b.tcfe = a)
        }
    }

    function hH(a, b) {
        const c = a.H;
        gH(a, b);
        $f(Sy, (d, e) => {
            b[d] = c[e]
        });
        XD(c) && (a = kE(c), b.fa = a);
        b.pi || null == c.google_ad_slot || (a = Pp(c), null != a.j && (a = dl(a.j.value), b.pi = a))
    }

    function iH(a, b) {
        var c = Og() || Lo(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = Lo(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function jH(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = Lo(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = bg(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function kH(a, b) {
        (a = Oy()[a.H.google_ad_client]) && (b.psts = a.join())
    }

    function lH(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function mH(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = Wb(a))
    }

    function nH(a, b) {
        const c = U(GG(window) ? yo : xo),
            d = U(Ao);
        (a = HG(a.pubWin, c, d)) && 0 < a.length && (b.tt_state = Wb(JSON.stringify(a)))
    }

    function oH(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                0 <= d && (b.wsm = d + 1)
            }
        } catch (e) {}
    }

    function pH(a, b) {
        0 <= a.H.google_ad_public_floor && (b.pubf = a.H.google_ad_public_floor);
        0 <= a.H.google_ad_private_floor && (b.pvtf = a.H.google_ad_private_floor)
    }

    function qH(a, b) {
        const c = Number(a.H.google_traffic_source);
        c && Object.values(Ha).includes(c) && (b.trt = a.H.google_traffic_source)
    }

    function VG(a, b) {
        const c = {};
        hH(a, c);
        vG();
        c.adsid = sG[1];
        vG();
        c.pucrd = sG[6];
        mH(a, c);
        nH(a, c);
        fH(a, c, b);
        qh(c);
        c.u_sd = Mo(a.pubWin);
        var d;
        c.dmc = null == (d = a.pubWin.navigator) ? void 0 : d.deviceMemory;
        Ii(889, () => {
            if (null == a.K) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = dD(a.K, a.ga);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                Oo(a.ga) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        iH(a, c);
        jH(a, c);
        $G(a, c);
        ZG(a, c);
        a.G && (c.oid = a.G);
        kH(a, c);
        c.pvsid = yg(a.pubWin,
            Hi);
        lH(a, c);
        oH(a, c);
        U(jn) && (c.uas = SG(a.pubWin));
        (d = DG(a.pubWin)) && (c.nvt = d);
        a.D && (c.scar = a.D);
        a.C && (c.topics = a.C instanceof Uint8Array ? Ub(a.C, 3) : a.C);
        cH(a, c, b);
        c.fu = a.j;
        c.bc = oG();
        vG();
        c.jar = sG[4];
        Ic(a.U, 9) && bH(c);
        Xi() && (c.atl = !0);
        pH(a, c);
        qH(a, c);
        null == O(Fo).j(ao.j, ao.defaultValue) || !1 !== a.H.google_video_play_muted || 10 !== a.H.google_reactive_ad_format && 11 !== a.H.google_reactive_ad_format || (c.sdkv = O(Fo).j(ao.j, ao.defaultValue));
        return c
    }
    const WG = /YtLoPri/;

    function rH(a) {
        Hi.Od(b => {
            b.shv = String(a);
            b.mjsv = "m202206300101";
            b.eid = tD(u)
        })
    }

    function sH(a) {
        rH(J(a, 2));
        a = Ic(a, 6);
        gi(lD, ii);
        lD = a
    };

    function tH({
        Ce: a,
        Df: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };
    var uH = "undefined" === typeof sttc ? void 0 : sttc;

    function vH(a) {
        var b = Hi;
        try {
            return gi(a, hi), new hD(JSON.parse(a))
        } catch (c) {
            b.ka(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new hD
    };

    function wH(a, b, c, d) {
        const e = new Sr;
        let f = "";
        const g = v => {
            try {
                const t = "object" === typeof v.data ? v.data : JSON.parse(v.data);
                f === t.paw_id && (Ke(a, "message", g), t.error ? e.j(Error(t.error)) : e.resolve(d(t)))
            } catch (t) {}
        };
        let h;
        if ("function" === typeof(null == (h = a.gmaSdk) ? void 0 : h.getQueryInfo)) return L(a, "message", g), f = c(a.gmaSdk), e.promise;
        let l, k, m, n, p, r;
        return "function" === typeof(null == (l = a.webkit) ? void 0 : null == (k = l.messageHandlers) ? void 0 : null == (m = k.getGmaQueryInfo) ? void 0 : m.postMessage) || "function" === typeof(null ==
            (n = a.webkit) ? void 0 : null == (p = n.messageHandlers) ? void 0 : null == (r = p.getGmaSig) ? void 0 : r.postMessage) ? (f = String(Math.floor(2147483647 * Zf())), L(a, "message", g), b(a.webkit.messageHandlers, f), e.promise) : null
    }

    function xH(a) {
        return wH(a, (b, c) => {
            let d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, b => b.getQueryInfo(), b => b.signal)
    };

    function yH(a) {
        if (a.j) return a.j;
        a.j = pg(a.A, "__uspapiLocator");
        return a.j
    }

    function zH(a) {
        let b;
        return "function" === typeof(null == (b = a.A) ? void 0 : b.__uspapi) || null != yH(a)
    }

    function AH(a, b) {
        var c;
        "function" === typeof(null == (c = a.A) ? void 0 : c.__uspapi) ? (a = a.A.__uspapi, a("getUSPData", 1, b)) : yH(a) && (BH(a), c = ++a.D, a.C[c] = b, a.j && a.j.postMessage({
            __uspapiCall: {
                command: "getUSPData",
                version: 1,
                callId: c
            }
        }, "*"))
    }

    function CH(a, b) {
        let c = {};
        if (zH(a)) {
            var d = De(() => b(c));
            AH(a, (e, f) => {
                f && (c = e);
                d()
            });
            setTimeout(d, 500)
        } else b(c)
    }

    function BH(a) {
        a.B || (a.B = b => {
            try {
                let d = {};
                "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                var c = d.__uspapiReturn;
                let e;
                null == (e = a.C) || e[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, L(a.A, "message", a.B))
    }
    var DH = class extends Lj {
        constructor(a) {
            super();
            this.A = a;
            this.j = null;
            this.C = {};
            this.D = 0;
            this.B = null
        }
        l() {
            this.C = {};
            this.B && (Ke(this.A, "message", this.B), delete this.B);
            delete this.C;
            delete this.A;
            delete this.j;
            super.l()
        }
    };
    var EH = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function FH(a) {
        a.D || (a.j || (a.j = pg(a.B, "googlefcPresent")), a.D = !0);
        return !!a.j
    }

    function GH(a) {
        a.A || (a.A = b => {
            try {
                const c = Tc(EH, b.data.__fciReturn);
                (0, a.C[z(c, 1)])(c)
            } catch (c) {}
        }, L(a.B, "message", a.A))
    }

    function HH(a) {
        return new Promise(b => {
            if (FH(a))
                if (a.j === a.B) {
                    var c = a.j.googlefc || (a.j.googlefc = {});
                    c.__fci = c.__fci || [];
                    c.__fci.push("loaded", d => {
                        b(Tc(EH, d))
                    })
                } else GH(a), c = a.F++, a.C[c] = b, a.j.postMessage({
                    __fciCall: {
                        command: "loaded",
                        callId: c
                    }
                }, "*")
        })
    }
    var IH = class extends Lj {
        constructor(a) {
            super();
            this.B = a;
            this.A = this.j = null;
            this.C = {};
            this.F = 0;
            this.D = !1
        }
    };
    const JH = (a, b) => {
        try {
            const g = void 0 === Ic(b, 6) ? !0 : Ic(b, 6);
            let h, l;
            a: switch (C(b, 4, 0)) {
                case 1:
                    var c = "pt";
                    break a;
                case 2:
                    c = "cr";
                    break a;
                default:
                    c = ""
            }
            var d = new We(Ue(C(b, 2, 0)), J(b, 3), c),
                e = null != (l = null == (h = D(b, Te, 5)) ? void 0 : J(h, 1)) ? l : "";
            d.ub = e;
            d.j = g;
            d.win = a;
            var f = d.build();
            Oe(f)
        } catch (g) {}
    };

    function KH(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? JH(a, b) : L(a, "load", () => void JH(a, b)))
    };

    function LH(a) {
        try {
            let b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (b) {}
        return null
    }

    function MH(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function NH(a) {
        if (a === a.top || Sf(a.top)) return Promise.resolve({
            status: 4
        });
        const b = LH(a);
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && MH(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new Sr;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                mb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var OH = class extends K {
            constructor(a) {
                super(a)
            }
        },
        PH = [1, 3];
    const QH = N `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function RH(a) {
        const b = SH(a);
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.j(h).then(({
                    data: l
                }) => l)
            }
            const e = Xf("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = yd(QH).toString();
            const f = (new URL(QH.toString())).origin,
                g = OA({
                    destination: a,
                    Ca: e,
                    origin: f,
                    Pa: "goog:gRpYw:doubleclick"
                });
            g.j("goog:topics:frame:handshake:ack").then(h => {
                "goog:topics:frame:handshake:ack" === h.data && c(d)
            });
            b.messageChannelSendRequestFn =
                d;
            a.document.documentElement.appendChild(e)
        })
    }

    function TH(a, b, c, d, e) {
        var f = Hi;
        const {
            Kb: g,
            Jb: h
        } = UH(e);
        b = SH(b);
        b.getTopicsPromise || (c = {
                message: "goog:topics:frame:get:topics",
                callApi: c,
                sendGen204: d
            }, d && (c.pvsid = yg(window)), a = a(c).then(l => {
                let k = h;
                if (l instanceof Uint8Array) k || (k = !(g instanceof Uint8Array && tb(l, g)));
                else if (ji()(l)) k || (k = l !== g);
                else return f.ka(989, Error(JSON.stringify(l))), 7;
                if (k && e) try {
                    var m = new OH;
                    var n = A(m, 2, Rh());
                    l instanceof Uint8Array ? Lc(n, 1, PH, l) : Lc(n, 3, PH, l);
                    e.setItem("goog:cached:topics", Vc(n))
                } catch (p) {}
                return l
            }), b.getTopicsPromise =
            a);
        return g && !h ? Promise.resolve(g) : b.getTopicsPromise
    }

    function UH(a) {
        if (!a) return {
            Kb: null,
            Jb: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                Kb: null,
                Jb: !0
            };
            const l = Tc(OH, b);
            let k;
            const m = Ec(l, PH);
            switch (m) {
                case 0:
                    k = null;
                    break;
                case 1:
                    var c;
                    a = l;
                    var d = 1 === Ec(l, PH) ? 1 : -1; {
                        let n = z(a, d);
                        if (null == n) var e = null;
                        else n instanceof gc || (b = n, n = null == b ? fc() : b.constructor === gc ? b : "string" === typeof b ? b ? new gc(b, cc) : fc() : ac(b) ? b.length ? new gc(new Uint8Array(b), cc) : fc() : fc(), A(a, d, n, void 0, !0)), e = n
                    }
                    d = e;
                    var f = null == d ? fc() : d;
                    ec(cc);
                    var g = f.P;
                    var h = null == g || ac(g) ?
                        g : "string" === typeof g ? Zb(g) : null;
                    k = (c = null == h ? h : f.P = h) ? new Uint8Array(c) : bc || (bc = new Uint8Array(0));
                    break;
                case 3:
                    k = C(l, 3 === Ec(l, PH) ? 3 : -1, 0);
                    break;
                default:
                    te(m, void 0)
            }
            return {
                Kb: k,
                Jb: C(l, 2, 0) + 6048E5 < Rh()
            }
        } catch (l) {
            return {
                Kb: null,
                Jb: !0
            }
        }
    }

    function SH(a) {
        let b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };

    function VH(a, b) {
        const c = a.document.getElementById(String(b.google_async_iframe_id) + (U(co) ? "_host" : "_anchor"));
        a = a.document.getElementById(String(b.google_async_iframe_id) + (U(co) ? "_host" : "_expand"));
        if (null == c || null == a) throw Error("no_ins");
        return {
            ga: c,
            ma: a
        }
    }
    async function WH({
        U: a,
        da: b,
        Ua: c,
        slot: d
    }) {
        const e = d.vars,
            {
                ga: f,
                ma: g
            } = VH(d.pubWin, d.vars),
            h = Vf(d.pubWin),
            l = new DD({
                K: h,
                pubWin: d.pubWin,
                H: e,
                U: a,
                da: b,
                Ua: c,
                ga: f,
                ma: g
            });
        l.I = Date.now();
        Zi(1, [l.H]);
        try {
            await XH(l)
        } catch (k) {
            if (!Ki(159, k)) throw k;
        }
        Ii(639, () => {
            {
                var k = l.H;
                const n = l.K;
                if (n && 1 === k.google_responsive_auto_format && !0 === k.google_full_width_responsive_allowed) {
                    var m;
                    (m = (m = n.document.getElementById(k.google_async_iframe_id)) ? Mf(m, "INS", "adsbygoogle") : null) ? (k = new BE(n, m, k), k.j = u.setInterval(Ba(k.B,
                        k), 500), k.B(), k = !0) : k = !1
                } else k = !1
            }
            return k
        });
        Ii(914, () => {
            if (h && !bb() && !U(xn)) {
                var k, m = d.vars;
                var n = (null == (k = h.location) ? void 0 : k.hash) || "";
                n = new aD(n, a);
                k = d.vars.google_ad_client;
                X(Iy(), 29, !1) || (My(Iy(), 29, !0), QC(h, m, n, k, new MC(!1)))
            }
        });
        U(xn) && U(yn) && d.vars.google_ad_client && h && !bb() && (b = Bz(l.l)) && (b = b.getItem("google_affa_config")) && YH(h, e, b);
        Mi(l.pubWin, "affa", k => {
            Ii(1008, () => {
                if (U(xn) && d.vars.google_ad_client && h && !bb()) {
                    var m = k.config;
                    if (U(yn)) {
                        var n = Bz(l.l);
                        n && n.setItem("google_affa_config",
                            m)
                    }
                    YH(h, e, k.config)
                }
            })
        });
        return l
    }

    function YH(a, b, c) {
        c = new YC(JSON.parse(c));
        var d, e = (null == (d = a.location) ? void 0 : d.hash) || "";
        d = new aD(e, void 0, c);
        c = b.google_ad_client;
        X(Iy(), 29, !1) || (My(Iy(), 29, !0), QC(a, b, d, c, new MC(!1)))
    }

    function XH(a) {
        if (/_sdo/.test(a.H.google_ad_format)) return Promise.resolve();
        O(Gi).j(13);
        O(Gi).j(11);
        var b = Iy(),
            c = X(b, 23, !1);
        c || My(b, 23, !0);
        if (!c) {
            c = a.H.google_ad_client;
            var d = a.U;
            if (Dc(d)) b = D(Qc(d, $C, 13, Fc), Jz, 2);
            else {
                var e, f;
                b = tb(null != (f = null == (e = Qc(d, fD, 14, Fc)) ? void 0 : Gc(e, 1)) ? f : [], [c]) ? D(D(Qc(d, fD, 14, Fc), $C, 2), Jz, 2) : new Jz
            }
            e = new Kz(a.pubWin, a.H.google_ad_client, b, Ic(a.U, 6));
            e.l = !0;
            b = D(e.C, Yl, 1);
            if (e.l && (f = e.j, e.B && !Au(b) ? (c = new yz, c = A(c, 1, 1)) : c = null, c)) {
                c = Vc(c);
                try {
                    f.localStorage.setItem("google_auto_fc_cmp_setting",
                        c)
                } catch (g) {}
            }
            b && Bu(new Cu(e.j, new Vu(e.j, e.A), b, new bt(e.j)))
        }
        e = !Mg() && !ab();
        return !e || e && !ZH(a) ? $H(a) : Promise.resolve()
    }

    function aI(a, b, c = !1) {
        b = dD(a.K, b);
        const d = Og() || Lo(a.pubWin.top);
        if (!b || -12245933 == b.y || -12245933 == d.width || -12245933 == d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = No(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function ZH(a) {
        return bI(a) || cI(a)
    }

    function bI(a) {
        const b = a.H;
        if (!b.google_pause_ad_requests) return !1;
        const c = u.setTimeout(() => {
                P("abg:cmppar", {
                    client: a.H.google_ad_client,
                    url: a.H.google_page_url
                })
            }, 1E4),
            d = Ji(450, () => {
                b.google_pause_ad_requests = !1;
                u.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                ZH(a) || $H(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function cI(a) {
        const b = a.pubWin.document,
            c = dI();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.ga,
            e = kF(b);
        if (!e) return !1;
        if (!lF(b)) return eI(a, c.visible, d);
        const f = 3 === jF(b);
        if (aI(a, d) <= c.hidden && !f) return !1;
        let g = Ji(332, () => {
            !lF(b) && g && (Ke(b, e, g), eI(a, c.visible, d) || $H(a), g = null)
        });
        return L(b, e, g)
    }

    function dI() {
        const a = {
            hidden: 0,
            visible: 3
        };
        u.IntersectionObserver || (a.visible = -1);
        Pf() && (a.visible *= 2);
        return a
    }

    function eI(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.H;
        if (!qj(d.google_reactive_ad_format) && (XD(d) || d.google_reactive_ads_config) || !Oo(c) || aI(a, c) <= b) return !1;
        var e = Iy(),
            f = X(e, 8, {});
        e = X(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const l = new u.IntersectionObserver((k, m) => {
                jb(k, n => {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${100*b}%`
            });
            a.J = l;
            l.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        ka(Promise, "any").call(Promise, [f, e]).then(() => {
            Ii(294, () => {
                $H(a)
            })
        });
        return !0
    }
    async function $H(a) {
        Ii(326, () => {
            if (1 === ph(a.H)) {
                var c = U(vo),
                    d = c || U(uo),
                    e = a.pubWin;
                if (d && e === a.K) {
                    var f = new Ti;
                    d = new Ui;
                    f.setCorrelator(yg(a.pubWin));
                    var g = tD(a.pubWin);
                    Kc(f, 5, g, "");
                    Sc(f, 2);
                    g = Nc(d, 1, f);
                    f = new Si;
                    f = Rc(f, 10, !0);
                    var h = U(no);
                    f = Rc(f, 8, h);
                    h = U(oo);
                    f = Rc(f, 12, h);
                    h = U(ro);
                    f = Rc(f, 7, h);
                    h = U(qo);
                    f = Rc(f, 13, h);
                    Nc(g, 2, f);
                    e.google_rum_config = d.toJSON();
                    Wf(e.document, Wg(Ic(a.U, 9) && c ? a.da.sf : a.da.tf))
                } else Yh()
            }
        });
        a.H.google_ad_channel = fI(a, a.H.google_ad_channel);
        a.H.google_tag_partner = gI(a, a.H.google_tag_partner);
        hI(a);
        const b = a.H.google_start_time;
        "number" === typeof b && ($i = b, a.H.google_start_time = null);
        cD(a);
        iI(a);
        Py() && Sz({
            win: a.pubWin,
            webPropertyCode: a.H.google_ad_client,
            ob: Wg(a.da.ob)
        });
        XD(a.H) && (Qz() && (a.H.google_adtest = a.H.google_adtest || "on"), a.H.google_pgb_reactive = a.H.google_pgb_reactive || 3);
        jI(a.K);
        if (U(ho) && "function" === typeof a.pubWin.document.browsingTopics) try {
            a.F = await RH(a.K)
        } catch (c) {
            Ki(984, c)
        }
        return kI(a)
    }

    function iI(a) {
        a.K && (aE(a.K, a.da.Fe), ZD(a.K.location) && jE(a.K, {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.H.google_ad_client
        }))
    }

    function fI(a, b) {
        return (b ? [b] : []).concat(Ey(a.H).ad_channels || []).join("+")
    }

    function gI(a, b) {
        return (b ? [b] : []).concat(Ey(a.H).tag_partners || []).join("+")
    }

    function lI(a, b, c, d) {
        c.src = EE(a);
        const e = d.pubWin.document;
        a = wh(d.pubWin);
        c = mI(c);
        a && d.A.push(Qg(d.pubWin, c));
        nI(d.ga, c);
        U(an) && u.setTimeout(Ji(644, () => {
            const f = e.getElementById(b);
            Ag(f, () => {
                u.setTimeout(() => {
                    for (const g of d.A) g();
                    d.A.length = 0
                }, 200)
            })
        }), 0);
        return Promise.resolve(c)
    }

    function mI(a) {
        const b = Xf("IFRAME");
        $f(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function oI(a, b, c) {
        return 9 == a.H.google_reactive_ad_format && Mf(a.ma, null, "fsi_container") ? (a.ga.appendChild(b), Promise.resolve(b)) : hE(a.da.Hd, 525, d => {
            a.ga.appendChild(b);
            d.createAdSlot(a.K, a.H, b, a.ma.parentElement, Bz(c, a.pubWin));
            return b
        })
    }

    function pI(a, b, c) {
        KH(a.pubWin, Rc(Qe(Sc(Sc(Pe(new Re, Se(new Te, String(yg(a.pubWin)))), 4), 2), J(a.U, 2)), 6, !0));
        const d = a.K;
        a.H.google_acr && a.H.google_acr(b);
        L(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = d ? Ey(d).enable_overlap_observer || !1 : !1;
            (a.H.ovlp || U(Zn) || f) && d && d === a.pubWin && qI(d, a, a.ma, b)
        });
        var e = f => {
            f && a.A.push(() => {
                f.va()
            })
        };
        rI(a, b);
        U(fo) && sI(a, b);
        !d || XD(a.H) && !lE(a.H) || (e(new YF(d, b, a.H)), e(new RE(a, b)), e(d.IntersectionObserver ? null : new TE(d, b, a.ga)));
        d && (e(new LE(d, b)),
            a.A.push(vE(d, a.H)), O(AE).init(d), a.A.push(HE(d, a.ma, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.H.iaaso;
        if (null != c) {
            e = a.ma;
            const f = e.parentElement;
            (f && ap.test(f.className) ? f : e).setAttribute("data-auto-ad-size", c)
        }
        c = a.ma;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        tI(a)
    }

    function rI(a, b) {
        const c = a.pubWin,
            d = a.H.google_ad_client,
            e = Oy();
        let f = null;
        const g = Mi(c, "pvt", (h, l) => {
            "string" === typeof h.token && l.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        });
        a.A.push(g)
    }

    function uI(a, b) {
        var c = uD(a, "__gpi_opt_out", b.l);
        c && (c = bf(af($e(Ze(new cf, c), 2147483647), "/"), b.pubWin.location.hostname), vD(a, "__gpi_opt_out", c, b.l))
    }

    function sI(a, b) {
        const c = Mi(a.pubWin, "gpi-uoo", (d, e) => {
            if (e.source === b.contentWindow) {
                e = bf(af($e(Ze(new cf, d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new yD(a.pubWin);
                vD(f, "__gpi_opt_out", e, a.l);
                if (d.userOptOut || d.clearAdsData) wD(f, "__gads", a.l), wD(f, "__gpi", a.l)
            }
        });
        a.A.push(c)
    }

    function tI(a) {
        const b = Mg(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d => {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                L(a.pubWin, "message", Hi.na(616, c));
                a.A.push(() => {
                    Ke(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function qI(a, b, c, d) {
        ZE(new hF(a), c).then(e => {
            Zi(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && ap.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(e => {
            const f = b.H.armr || "",
                g = e.executionTime || "",
                h = null == b.H.iaaso ? "" : Number(b.H.iaaso),
                l = Number(e.isOverlappingOrOutsideViewport),
                k = lb(e.entries, x => `${x.overlapType}:${x.overlapDepth}:${x.overlapDetectionPoint}`),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                p =
                m * e.targetRect.width * e.targetRect.height,
                r = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                v = rh(e.target),
                t = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = e.viewportSize.width + "x" + e.viewportSize.height;
            P("ovlp", {
                adf: b.H.google_ad_dom_fingerprint,
                armr: f,
                client: b.H.google_ad_client,
                eid: tD(b.H),
                et: g,
                fwrattr: b.H.google_full_width_responsive,
                iaaso: h,
                io: l,
                saldr: b.H.google_loader_used,
                oa: m,
                oe: k.join(","),
                qid: n,
                rafmt: b.H.google_responsive_auto_format,
                roa: p,
                slot: b.H.google_ad_slot,
                sp: r,
                tgt: v,
                tr: t,
                url: b.H.google_page_url,
                vp: e,
                pvc: yg(a)
            }, 1)
        }).catch(e => {
            Zi(8, ["Error:", e.message, c]);
            P("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function vI(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function wI(a, b, c, d) {
        var e = a.H;
        const f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height;
        var l = mE(e);
        const k = {
            id: f,
            name: f
        };
        k.style = l ? [`width:${g}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`;
        var m = ng();
        if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
            m = b;
            if (b = "fsb=" + encodeURIComponent("1")) {
                var n = m.indexOf("#");
                0 > n && (n = m.length);
                var p = m.indexOf("?");
                if (0 > p || p > n) {
                    p =
                        n;
                    var r = ""
                } else r = m.substring(p + 1, n);
                m = [m.slice(0, p), r, m.slice(n)];
                n = m[1];
                m[1] = b ? n ? n + "&" + b : b : n;
                b = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else b = m;
            k.sandbox = mg().join(" ")
        }
        U(Cn) && !1 === e.google_video_play_muted && vI("autoplay", k);
        n = b;
        b = xI(b);
        p = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" : b;
        null != g && (k.width = String(g));
        null != h && (k.height = String(h));
        k.frameborder = "0";
        k.marginwidth = "0";
        k.marginheight = "0";
        k.vspace = "0";
        k.hspace = "0";
        k.allowtransparency = "true";
        k.scrolling = "no";
        m = "";
        if (c) {
            m = 10;
            for (p = ""; 0 < m--;) p += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 *
                Math.random()));
            m = p;
            b = Li(b, m);
            Li(n, m)
        } else b = p;
        e.dash && (k.srcdoc = e.dash);
        n = U(GG(window) ? yo : xo);
        p = U(Ao);
        n = HG(a.pubWin, n, p);
        p = e.google_trust_token_additional_signing_data;
        n && IG(n) && (n = KG(n, p)) && (k.trustToken = JSON.stringify(n));
        var v;
        (null == (v = a.pubWin.document.featurePolicy) ? 0 : v.features().includes("attribution-reporting")) && vI("attribution-reporting", k);
        U(mo) && (v = a.pubWin, void 0 !== v.isAnonymouslyFramed && v.crossOriginIsolated && (k.anonymous = "true"));
        l ? (k.src = b, l = mI(k), d = oI(a, l, d)) : d = lI(b, f, k, a);
        c && (c =
            a.da.If, e = {
                id: f,
                url: b,
                width: g,
                height: h,
                Pa: m,
                qf: a.pubWin,
                me: f,
                xj: "google_expandable_ad_slot" + ph(e),
                Xe: c.toString(),
                Dc: a.pubWin
            }, e = !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.Pa || !e.Dc ? void 0 : Mi(e.Dc, "ct", Ca(Pi, e, c)), e && a.A.push(e));
        return d
    }

    function xI(a) {
        var b = V(y("Edge") ? Nn : Xn);
        var c = a;
        c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        if (c !== a) {
            b -= 8;
            let d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
            P("trn", {
                ol: a.length,
                tr: -1 === d ? "" : a.substring(d + 1),
                url: a
            }, .01)
        }
        return c
    }
    async function yI(a) {
        var b = a.H,
            c = a.pubWin,
            d = a.l;
        U(eo) && B(d, 5) && uI(new yD(a.pubWin), a);
        var e = Bz(d, a.pubWin);
        if (!B(d, 5) && U(cn)) return Promise.resolve();
        B(d, 5) && CD(d, a.pubWin, a.H.google_ad_client);
        var f = a.H.google_reactive_ads_config;
        f && (gE(a.K, f), rE(f, a, Bz(d)), f = f.page_level_pubvars, va(f) && nd(a.H, f));
        B(d, 5) && await zI();
        if (!JG(a.pubWin, mD(), J(a.U, 8))) {
            const g = V(Eo);
            f = c.google_trust_token_operation_promise;
            0 < g && f && await Promise.race([f, new Promise(h => void setTimeout(() => {
                h(void 0)
            }, g))])
        }
        f = "";
        mE(b) ? (f =
            a.da.Jf.toString() + "#" + XG(b), eH(b, Iy()), AI(b)) : (5 == b.google_pgb_reactive && b.google_reactive_ads_config || !YD(b) || WD(c, b, e)) && AI(b) && (f = UG(a, d));
        Zi(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || oh(c);
        e = ph(b);
        b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Da()).toString(36)}`;
        c = 0 < aI(a, a.ga, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = Iy(), e.btvi = X(c, 21, 1), Ny(c, 21));
        f = lh(e, f);
        d = wI(a, f, 0 === a.B, d);
        f = xI(f);
        a.H.rpe && RF(a.pubWin, a.ga, {
            height: a.H.google_ad_height,
            Sc: "force",
            Yc: !0,
            Kd: !0,
            qc: a.H.google_ad_client
        });
        d = await d;
        try {
            pI(a, d, b)
        } catch (g) {
            Ki(223, g)
        }
    }

    function zI() {
        return (db() ? 0 <= Ya(hb(), 11) : cb() && 0 <= Ya(hb(), 65)) ? new Promise(a => {
            AG(a.bind(null, !0))
        }) : (AG(null), Promise.resolve(!1))
    }

    function BI(a) {
        const b = new DH(a);
        return new Promise(c => {
            CH(b, d => {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function CI(a) {
        var b = og(u.top, "googlefcPresent");
        u.googlefc && !b && P("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function DI(a) {
        return FH(a) ? HH(a) : Promise.resolve(null)
    }

    function EI(a, b) {
        const c = b.Ff;
        b = b.uspString;
        U(bn) || (a.l = new Fz);
        a = a.l;
        c ? CE(a, c) : Ez(a, !0);
        b && A(a, 1, b)
    }

    function FI(a) {
        const b = V(gn),
            c = U(en);
        if (0 >= b && !c) return null;
        const d = Rh(),
            e = xH(a.pubWin);
        if (!e) return null;
        a.D = "0";
        return (c ? e : Promise.race([e, Dg(b, "0")])).then(f => {
            P("adsense_paw", {
                time: Rh() - d
            });
            (null == f ? void 0 : f.length) > V(fn) ? Ki(809, Error(`ML:${f.length}`)) : a.D = f
        }).catch(f => {
            Ki(809, f)
        })
    }

    function GI(a) {
        const b = Rh();
        return Promise.race([Ii(832, () => NH(a)), Dg(200)]).then(c => {
            let d;
            const e = null != (d = null == c ? void 0 : c.status) ? d : 100;
            P("afc_etu", {
                etus: e,
                sig: Rh() - b,
                tms: 200
            });
            return null == c ? void 0 : c.mb
        })
    }

    function HI(a) {
        var b = V(An);
        return Promise.race([Ji(779, () => {
            const c = U(GG(window) ? yo : xo),
                d = U(Ao);
            return QG(new RG(a, c, d))
        })(), Dg(b)])
    }
    async function II(a) {
        const b = FI(a),
            c = Ii(868, () => GI(a.pubWin));
        wG(J(a.U, 8));
        xA(a.pubWin);
        CI(a.H.google_ad_client);
        var d = new IH(a.pubWin);
        await DI(d);
        U(bn) && (a.l = new Fz);
        d = [DE(a), BI(a.pubWin)];
        d = await Promise.all(d);
        EI(a, {
            Ff: d[0],
            uspString: d[1]
        });
        JG(a.pubWin, mD(), J(a.U, 8)) && (d = HI(!!B(a.l, 5)), U(Do) ? Hi.Za(962, d) : await d);
        U(ko) && a.F && JI(a) && (d = Bz(a.l, a.pubWin), d = TH(a.F, a.pubWin, U(go), U(jo), d).then(e => {
            a.C = e
        }), U(io) ? Hi.Za(985, d) : await d);
        U(en) || await b;
        a.mb = await c || "";
        await yI(a)
    }

    function JI(a) {
        const b = a.l;
        a = a.H;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!B(b, 5) && !B(b, 6) && !Qy() && !B(b, 9)
    }

    function kI(a) {
        var b = a.pubWin.document,
            c = a.H;
        const d = c.google_ad_width,
            e = c.google_ad_height;
        let f = 0;
        try {
            !1 === c.google_allow_expandable_ads && (f |= 1);
            if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2; {
                c = navigator;
                const m = c.userAgent,
                    n = c.platform,
                    p = c.product;
                if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(n) && /^Opera/.test(m)) var g = !1;
                else if (/Win/.test(n) && /Trident/.test(m) && 11 <= b.documentMode) g = !0;
                else {
                    var h = (/WebKit\/(\d+)/.exec(m) || [0, 0])[1],
                        l = (/rv:(\d+\.\d+)/.exec(m) || [0, 0])[1];
                    g = !h && "Gecko" === p && 27 <= l && !/ rv: 1\.8([^.] |\.0) /.test(m) || 536 <= h ? !0 : !1
                }
            }
            g || (f |= 4);
            Ro(a.pubWin, d, e) && (f |= 2)
        } catch (m) {
            f |= 8
        }
        a.B = f;
        0 === a.B || (a.H.google_allow_expandable_ads = !1);
        Eg(a.pubWin) != a.pubWin && (a.j |= 4);
        3 === jF(a.pubWin.document) && (a.j |= 32);
        if (b = a.K) b = a.K, b = !(Q(b).scrollWidth <= Q(b).clientWidth);
        b && (a.j |= 1024);
        let k;
        if (null == (k = a.pubWin.Prototype) ? 0 : k.Version) a.j |= 16384;
        a.H.google_loader_features_used && (a.j |= a.H.google_loader_features_used);
        a.G = 2;
        return II(a)
    }

    function nI(a, b) {
        a.style.visibility = "visible";
        for (var c; c = a.firstChild;) a.removeChild(c);
        a.appendChild(b)
    }

    function AI(a) {
        const b = Iy(),
            c = a.google_ad_section;
        XD(a) && Ny(b, 15);
        if (uh(a)) {
            if (100 < Ny(b, 5)) return !1
        } else if (100 < Ny(b, 6) - X(b, 15, 0) && "" == c) return !1;
        return !0
    }

    function hI(a) {
        const b = a.K;
        if (b && !Ey(b).ads_density_stats_processed && !Mg(b) && (Ey(b).ads_density_stats_processed = !0, U(Yn) || .01 > Zf())) {
            const c = () => {
                if (b) {
                    var d = Ax(vx(b), a.H.google_ad_client, b.location.hostname, tD(a.H).split(","));
                    P("ama_stats", d, 1)
                }
            };
            Cg(b, () => {
                u.setTimeout(c, 1E3)
            })
        }
    }

    function jI(a) {
        a && !Ey(a).host_pinged_back && (Ey(a).host_pinged_back = !0, P("abg_host", {
            host: a.location.host
        }, .01))
    };
    (function(a, b, c) {
        Ii(843, () => {
            if (!u.google_sa_impl) {
                var d = vH(a);
                sH(d);
                Zi(16, [3, d.toJSON()]);
                var e = tH({
                        Ce: b,
                        Df: J(d, 2)
                    }),
                    f = c(e, d);
                u.google_sa_impl = async h => WH({
                    U: d,
                    da: f,
                    Ua: e,
                    slot: h
                });
                sD(pD(u));
                var g;
                null == (g = u.google_process_slots) || g.call(u);
                g = (u.Prototype || {}).Version;
                null != g && P("prtpjs", {
                    version: g
                })
            }
        })
    })(uH, "m202206300101", function(a, b) {
        const c = 2012 < C(b, 1, 0) ? `_fy${C(b,1,0)}` : "",
            d = J(b, 3);
        b = J(b, 2);
        return {
            tf: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            sf: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Hd: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            Fe: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            If: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
            Jf: N `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
            Bb: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            ob: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`
        }
    });
}).call(this, "[2019,\"r20220630\",\"r20110914\",null,null,null,null,null,null,null,null,null,[null,[]],null,null,null,null,-1,[44759876,44759927,44759842]]");