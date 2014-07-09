if (function (a, b) {
    function c(a) {
        var b = a.length,
            c = kb.type(a);
        return kb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a) {
        var b = zb[a] = {};
        return kb.each(a.match(mb) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function e(a, c, d, e) {
        if (kb.acceptData(a)) {
            var f, g, h = kb.expando,
                i = a.nodeType,
                j = i ? kb.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || d !== b || "string" != typeof c) return k || (k = i ? a[h] = bb.pop() || kb.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: kb.noop
            }), ("object" == typeof c || "function" == typeof c) && (e ? j[k] = kb.extend(j[k], c) : j[k].data = kb.extend(j[k].data, c)), g = j[k], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[kb.camelCase(c)] = d), "string" == typeof c ? (f = g[c], null == f && (f = g[kb.camelCase(c)])) : f = g, f
        }
    }

    function f(a, b, c) {
        if (kb.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? kb.cache : a,
                i = f ? a[kb.expando] : kb.expando;
            if (g[i]) {
                if (b && (d = c ? g[i] : g[i].data)) {
                    kb.isArray(b) ? b = b.concat(kb.map(b, kb.camelCase)) : b in d ? b = [b] : (b = kb.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !h(d) : !kb.isEmptyObject(d)) return
                }(c || (delete g[i].data, h(g[i]))) && (f ? kb.cleanData([a], !0) : kb.support.deleteExpando || g != g.window ? delete g[i] : g[i] = null)
            }
        }
    }

    function g(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(Bb, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Ab.test(d) ? kb.parseJSON(d) : d
                } catch (f) {}
                kb.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b;
        for (b in a)
            if (("data" !== b || !kb.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function i() {
        return !0
    }

    function j() {
        return !1
    }

    function k() {
        try {
            return Y.activeElement
        } catch (a) {}
    }

    function l(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function m(a, b, c) {
        if (kb.isFunction(b)) return kb.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return kb.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Qb.test(b)) return kb.filter(b, a, c);
            b = kb.filter(b, a)
        }
        return kb.grep(a, function (a) {
            return kb.inArray(a, b) >= 0 !== c
        })
    }

    function n(a) {
        var b = Ub.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function o(a, b) {
        return kb.nodeName(a, "table") && kb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function p(a) {
        return a.type = (null !== kb.find.attr(a, "type")) + "/" + a.type, a
    }

    function q(a) {
        var b = ec.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function r(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) kb._data(c, "globalEval", !b || kb._data(b[d], "globalEval"))
    }

    function s(a, b) {
        if (1 === b.nodeType && kb.hasData(a)) {
            var c, d, e, f = kb._data(a),
                g = kb._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) kb.event.add(b, c, h[c][d])
            }
            g.data && (g.data = kb.extend({}, g.data))
        }
    }

    function t(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !kb.support.noCloneEvent && b[kb.expando]) {
                e = kb._data(b);
                for (d in e.events) kb.removeEvent(b, d, e.handle);
                b.removeAttribute(kb.expando)
            }
            "script" === c && b.text !== a.text ? (p(b).text = a.text, q(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), kb.support.html5Clone && a.innerHTML && !kb.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bc.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    function u(a, c) {
        var d, e, f = 0,
            g = typeof a.getElementsByTagName !== W ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== W ? a.querySelectorAll(c || "*") : b;
        if (!g)
            for (g = [], d = a.childNodes || a; null != (e = d[f]); f++)!c || kb.nodeName(e, c) ? g.push(e) : kb.merge(g, u(e, c));
        return c === b || c && kb.nodeName(a, c) ? kb.merge([a], g) : g
    }

    function v(a) {
        bc.test(a.type) && (a.defaultChecked = a.checked)
    }

    function w(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yc.length; e--;)
            if (b = yc[e] + c, b in a) return b;
        return d
    }

    function x(a, b) {
        return a = b || a, "none" === kb.css(a, "display") || !kb.contains(a.ownerDocument, a)
    }

    function y(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = kb._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && x(d) && (f[g] = kb._data(d, "olddisplay", C(d.nodeName)))) : f[g] || (e = x(d), (c && "none" !== c || !e) && kb._data(d, "olddisplay", e ? c : kb.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function z(a, b, c) {
        var d = rc.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function A(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += kb.css(a, c + xc[f], !0, e)), d ? ("content" === c && (g -= kb.css(a, "padding" + xc[f], !0, e)), "margin" !== c && (g -= kb.css(a, "border" + xc[f] + "Width", !0, e))) : (g += kb.css(a, "padding" + xc[f], !0, e), "padding" !== c && (g += kb.css(a, "border" + xc[f] + "Width", !0, e)));
        return g
    }

    function B(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = kc(a),
            g = kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = lc(a, b, f), (0 > e || null == e) && (e = a.style[b]), sc.test(e)) return e;
            d = g && (kb.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + A(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function C(a) {
        var b = Y,
            c = uc[a];
        return c || (c = D(a, b), "none" !== c && c || (jc = (jc || kb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jc[0].contentWindow || jc[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = D(a, b), jc.detach()), uc[a] = c), c
    }

    function D(a, b) {
        var c = kb(b.createElement(a)).appendTo(b.body),
            d = kb.css(c[0], "display");
        return c.remove(), d
    }

    function E(a, b, c, d) {
        var e;
        if (kb.isArray(b)) kb.each(b, function (b, e) {
            c || Ac.test(a) ? d(a, e) : E(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== kb.type(b)) d(a, b);
        else
            for (e in b) E(a + "[" + e + "]", b[e], c, d)
    }

    function F(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(mb) || [];
            if (kb.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function G(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, kb.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === Rc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function H(a, c) {
        var d, e, f = kb.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
        return d && kb.extend(!0, a, d), a
    }

    function I(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes;
            "*" === j[0];) j.shift(), f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f)
            for (h in i)
                if (i[h] && i[h].test(f)) {
                    j.unshift(h);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break
                }
                e || (e = h)
            }
            g = g || e
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function J(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function K() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function L() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function M() {
        return setTimeout(function () {
            $c = b
        }), $c = kb.now()
    }

    function N(a, b, c) {
        for (var d, e = (ed[b] || []).concat(ed["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function O(a, b, c) {
        var d, e, f = 0,
            g = dd.length,
            h = kb.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = $c || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: kb.extend({}, b),
                opts: kb.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $c || M(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = kb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (P(k, j.opts.specialEasing); g > f; f++)
            if (d = dd[f].call(j, a, k, j.opts)) return d;
        return kb.map(k, N, j), kb.isFunction(j.opts.start) && j.opts.start.call(a, j), kb.fx.timer(kb.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function P(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = kb.camelCase(c), e = b[d], f = a[c], kb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = kb.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function Q(a, b, c) {
        var d, e, f, g, h, i, j = this,
            k = {},
            l = a.style,
            m = a.nodeType && x(a),
            n = kb._data(a, "fxshow");
        c.queue || (h = kb._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, j.always(function () {
            j.always(function () {
                h.unqueued--, kb.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [l.overflow, l.overflowX, l.overflowY], "inline" === kb.css(a, "display") && "none" === kb.css(a, "float") && (kb.support.inlineBlockNeedsLayout && "inline" !== C(a.nodeName) ? l.zoom = 1 : l.display = "inline-block")), c.overflow && (l.overflow = "hidden", kb.support.shrinkWrapBlocks || j.always(function () {
            l.overflow = c.overflow[0], l.overflowX = c.overflow[1], l.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ad.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (m ? "hide" : "show")) continue;
                k[d] = n && n[d] || kb.style(a, d)
            }
        if (!kb.isEmptyObject(k)) {
            n ? "hidden" in n && (m = n.hidden) : n = kb._data(a, "fxshow", {}), f && (n.hidden = !m), m ? kb(a).show() : j.done(function () {
                kb(a).hide()
            }), j.done(function () {
                var b;
                kb._removeData(a, "fxshow");
                for (b in k) kb.style(a, b, k[b])
            });
            for (d in k) g = N(m ? n[d] : 0, d, j), d in n || (n[d] = g.start, m && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function R(a, b, c, d, e) {
        return new R.prototype.init(a, b, c, d, e)
    }

    function S(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xc[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function T(a) {
        return kb.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var U, V, W = typeof b,
        X = a.location,
        Y = a.document,
        Z = Y.documentElement,
        $ = a.jQuery,
        _ = a.$,
        ab = {},
        bb = [],
        cb = "1.10.2",
        db = bb.concat,
        eb = bb.push,
        fb = bb.slice,
        gb = bb.indexOf,
        hb = ab.toString,
        ib = ab.hasOwnProperty,
        jb = cb.trim,
        kb = function (a, b) {
            return new kb.fn.init(a, b, V)
        },
        lb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        mb = /\S+/g,
        nb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ob = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        pb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        qb = /^[\],:{}\s]*$/,
        rb = /(?:^|:|,)(?:\s*\[)+/g,
        sb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        tb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        ub = /^-ms-/,
        vb = /-([\da-z])/gi,
        wb = function (a, b) {
            return b.toUpperCase()
        },
        xb = function (a) {
            (Y.addEventListener || "load" === a.type || "complete" === Y.readyState) && (yb(), kb.ready())
        },
        yb = function () {
            Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", xb, !1), a.removeEventListener("load", xb, !1)) : (Y.detachEvent("onreadystatechange", xb), a.detachEvent("onload", xb))
        };
    kb.fn = kb.prototype = {
            jquery: cb,
            constructor: kb,
            init: function (a, c, d) {
                var e, f;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ob.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                    if (e[1]) {
                        if (c = c instanceof kb ? c[0] : c, kb.merge(this, kb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : Y, !0)), pb.test(e[1]) && kb.isPlainObject(c))
                            for (e in c) kb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                        return this
                    }
                    if (f = Y.getElementById(e[2]), f && f.parentNode) {
                        if (f.id !== e[2]) return d.find(a);
                        this.length = 1, this[0] = f
                    }
                    return this.context = Y, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : kb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), kb.makeArray(a, this))
            },
            selector: "",
            length: 0,
            toArray: function () {
                return fb.call(this)
            },
            get: function (a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function (a) {
                var b = kb.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function (a, b) {
                return kb.each(this, a, b)
            },
            ready: function (a) {
                return kb.ready.promise().done(a), this
            },
            slice: function () {
                return this.pushStack(fb.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            map: function (a) {
                return this.pushStack(kb.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: eb,
            sort: [].sort,
            splice: [].splice
        }, kb.fn.init.prototype = kb.fn, kb.extend = kb.fn.extend = function () {
            var a, c, d, e, f, g, h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || kb.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
                if (null != (f = arguments[i]))
                    for (e in f) a = h[e], d = f[e], h !== d && (k && d && (kb.isPlainObject(d) || (c = kb.isArray(d))) ? (c ? (c = !1, g = a && kb.isArray(a) ? a : []) : g = a && kb.isPlainObject(a) ? a : {}, h[e] = kb.extend(k, g, d)) : d !== b && (h[e] = d));
            return h
        }, kb.extend({
            expando: "jQuery" + (cb + Math.random()).replace(/\D/g, ""),
            noConflict: function (b) {
                return a.$ === kb && (a.$ = _), b && a.jQuery === kb && (a.jQuery = $), kb
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (a) {
                a ? kb.readyWait++ : kb.ready(!0)
            },
            ready: function (a) {
                if (a === !0 ? !--kb.readyWait : !kb.isReady) {
                    if (!Y.body) return setTimeout(kb.ready);
                    kb.isReady = !0, a !== !0 && --kb.readyWait > 0 || (U.resolveWith(Y, [kb]), kb.fn.trigger && kb(Y).trigger("ready").off("ready"))
                }
            },
            isFunction: function (a) {
                return "function" === kb.type(a)
            },
            isArray: Array.isArray || function (a) {
                return "array" === kb.type(a)
            },
            isWindow: function (a) {
                return null != a && a == a.window
            },
            isNumeric: function (a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function (a) {
                return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? ab[hb.call(a)] || "object" : typeof a
            },
            isPlainObject: function (a) {
                var c;
                if (!a || "object" !== kb.type(a) || a.nodeType || kb.isWindow(a)) return !1;
                try {
                    if (a.constructor && !ib.call(a, "constructor") && !ib.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (d) {
                    return !1
                }
                if (kb.support.ownLast)
                    for (c in a) return ib.call(a, c);
                for (c in a);
                return c === b || ib.call(a, c)
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            error: function (a) {
                throw new Error(a)
            },
            parseHTML: function (a, b, c) {
                if (!a || "string" != typeof a) return null;
                "boolean" == typeof b && (c = b, b = !1), b = b || Y;
                var d = pb.exec(a),
                    e = !c && [];
                return d ? [b.createElement(d[1])] : (d = kb.buildFragment([a], b, e), e && kb(e).remove(), kb.merge([], d.childNodes))
            },
            parseJSON: function (b) {
                return a.JSON && a.JSON.parse ? a.JSON.parse(b) : null === b ? b : "string" == typeof b && (b = kb.trim(b), b && qb.test(b.replace(sb, "@").replace(tb, "]").replace(rb, ""))) ? new Function("return " + b)() : void kb.error("Invalid JSON: " + b)
            },
            parseXML: function (c) {
                var d, e;
                if (!c || "string" != typeof c) return null;
                try {
                    a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch (f) {
                    d = b
                }
                return d && d.documentElement && !d.getElementsByTagName("parsererror").length || kb.error("Invalid XML: " + c), d
            },
            noop: function () {},
            globalEval: function (b) {
                b && kb.trim(b) && (a.execScript || function (b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function (a) {
                return a.replace(ub, "ms-").replace(vb, wb)
            },
            nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function (a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break; return a
            },
            trim: jb && !jb.call("﻿ ") ? function (a) {
                return null == a ? "" : jb.call(a)
            } : function (a) {
                return null == a ? "" : (a + "").replace(nb, "")
            },
            makeArray: function (a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? kb.merge(d, "string" == typeof a ? [a] : a) : eb.call(d, a)), d
            },
            inArray: function (a, b, c) {
                var d;
                if (b) {
                    if (gb) return gb.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a) return c
                }
                return -1
            },
            merge: function (a, c) {
                var d = c.length,
                    e = a.length,
                    f = 0;
                if ("number" == typeof d)
                    for (; d > f; f++) a[e++] = c[f];
                else
                    for (; c[f] !== b;) a[e++] = c[f++];
                return a.length = e, a
            },
            grep: function (a, b, c) {
                var d, e = [],
                    f = 0,
                    g = a.length;
                for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
                return e
            },
            map: function (a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
                return db.apply([], i)
            },
            guid: 1,
            proxy: function (a, c) {
                var d, e, f;
                return "string" == typeof c && (f = a[c], c = a, a = f), kb.isFunction(a) ? (d = fb.call(arguments, 2), e = function () {
                    return a.apply(c || this, d.concat(fb.call(arguments)))
                }, e.guid = a.guid = a.guid || kb.guid++, e) : b
            },
            access: function (a, c, d, e, f, g, h) {
                var i = 0,
                    j = a.length,
                    k = null == d;
                if ("object" === kb.type(d)) {
                    f = !0;
                    for (i in d) kb.access(a, c, i, d[i], !0, g, h)
                } else if (e !== b && (f = !0, kb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function (a, b, c) {
                    return k.call(kb(a), c)
                })), c))
                    for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
                return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
            },
            now: function () {
                return (new Date).getTime()
            },
            swap: function (a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            }
        }), kb.ready.promise = function (b) {
            if (!U)
                if (U = kb.Deferred(), "complete" === Y.readyState) setTimeout(kb.ready);
                else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", xb, !1), a.addEventListener("load", xb, !1);
            else {
                Y.attachEvent("onreadystatechange", xb), a.attachEvent("onload", xb);
                var c = !1;
                try {
                    c = null == a.frameElement && Y.documentElement
                } catch (d) {}
                c && c.doScroll && ! function e() {
                    if (!kb.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        yb(), kb.ready()
                    }
                }()
            }
            return U.promise(b)
        }, kb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
            ab["[object " + b + "]"] = b.toLowerCase()
        }), V = kb(Y),
        function (a, b) {
            function c(a, b, c, d) {
                var e, f, g, h, i, j, k, l, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
                if (1 !== (h = b.nodeType) && 9 !== h) return [];
                if (I && !d) {
                    if (e = tb.exec(a))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                        } else {
                            if (e[2]) return ab.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return ab.apply(c, b.getElementsByClassName(g)), c
                        }
                    if (x.qsa && (!J || !J.test(a))) {
                        if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wb, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;) j[i] = l + n(j[i]);
                            o = nb.test(a) && b.parentNode || b, p = j.join(",")
                        }
                        if (p) try {
                            return ab.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {} finally {
                            k || b.removeAttribute("id")
                        }
                    }
                }
                return v(a.replace(jb, "$1"), b, c, d)
            }

            function d() {
                function a(c, d) {
                    return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d
                }
                var b = [];
                return a
            }

            function e(a) {
                return a[N] = !0, a
            }

            function f(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function g(a, b) {
                for (var c = a.split("|"), d = a.length; d--;) z.attrHandle[c[d]] = b
            }

            function h(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function i(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function j(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function k(a) {
                return e(function (b) {
                    return b = +b, e(function (c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function l() {}

            function m(a, b) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k) return b ? 0 : k.slice(0);
                for (h = a, i = [], j = z.preFilter; h;) {
                    (!d || (e = lb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = mb.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(jb, " ")
                    }), h = h.slice(d.length));
                    for (g in z.filter)!(e = rb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return b ? h.length : h ? c.error(a) : S(a, i).slice(0)
            }

            function n(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function o(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first ? function (b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function (b, c, g) {
                    var h, i, j, k = P + " " + f;
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e)
                                if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                                    if ((h = i[1]) === !0 || h === y) return h === !0
                                } else if (i = j[d] = [k], i[1] = a(b, c, g) || y, i[1] === !0) return !0
                }
            }

            function p(a) {
                return a.length > 1 ? function (b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function r(a, b, c, d, f, g) {
                return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function (e, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = e || u(b || "*", h.nodeType ? [h] : h, []),
                        r = !a || !e && b ? p : q(p, m, a, h, i),
                        s = c ? f || (e ? a : o || d) ? [] : g : r;
                    if (c && c(r, s, h, i), d)
                        for (j = q(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                    if (e) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                                f(null, s = [], j, i)
                            }
                            for (k = s.length; k--;)(l = s[k]) && (j = f ? cb.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                        }
                    } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : ab.apply(g, s)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function (a) {
                    return a === b
                }, g, !0), j = o(function (a) {
                    return cb.call(b, a) > -1
                }, g, !0), k = [
                    function (a, c, d) {
                        return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                    }
                ]; e > h; h++)
                    if (c = z.relative[a[h].type]) k = [o(p(k), c)];
                    else {
                        if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !z.relative[a[d].type]; d++);
                            return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(jb, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                        }
                        k.push(c)
                    }
                return p(k)
            }

            function t(a, b) {
                var d = 0,
                    f = b.length > 0,
                    g = a.length > 0,
                    h = function (e, h, i, j, k) {
                        var l, m, n, o = [],
                            p = 0,
                            r = "0",
                            s = e && [],
                            t = null != k,
                            u = D,
                            v = e || g && z.find.TAG("*", k && h.parentNode || h),
                            w = P += null == u ? 1 : Math.random() || .1;
                        for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                            if (g && l) {
                                for (m = 0; n = a[m++];)
                                    if (n(l, h, i)) {
                                        j.push(l);
                                        break
                                    }
                                t && (P = w, y = ++d)
                            }
                            f && ((l = !n && l) && p--, e && s.push(l))
                        }
                        if (p += r, f && r !== p) {
                            for (m = 0; n = b[m++];) n(s, o, h, i);
                            if (e) {
                                if (p > 0)
                                    for (; r--;) s[r] || o[r] || (o[r] = $.call(j));
                                o = q(o)
                            }
                            ab.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                        }
                        return t && (P = w, D = u), s
                    };
                return f ? e(h) : h
            }

            function u(a, b, d) {
                for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
                return d
            }

            function v(a, b, c, d) {
                var e, f, g, h, i, j = m(a);
                if (!d && 1 === j.length) {
                    if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                        if (b = (z.find.ID(g.matches[0].replace(xb, yb), b) || [])[0], !b) return c;
                        a = a.slice(f.shift().value.length)
                    }
                    for (e = rb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]);)
                        if ((i = z.find[h]) && (d = i(g.matches[0].replace(xb, yb), nb.test(f[0].type) && b.parentNode || b))) {
                            if (f.splice(e, 1), a = d.length && n(f), !a) return ab.apply(c, d), c;
                            break
                        }
                }
                return C(a, j)(d, b, !I, c, nb.test(a)), c
            }
            var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = d(),
                S = d(),
                T = d(),
                U = !1,
                V = function (a, b) {
                    return a === b ? (U = !0, 0) : 0
                },
                W = typeof b,
                X = 1 << 31,
                Y = {}.hasOwnProperty,
                Z = [],
                $ = Z.pop,
                _ = Z.push,
                ab = Z.push,
                bb = Z.slice,
                cb = Z.indexOf || function (a) {
                    for (var b = 0, c = this.length; c > b; b++)
                        if (this[b] === a) return b;
                    return -1
                },
                db = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                eb = "[\\x20\\t\\r\\n\\f]",
                fb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                gb = fb.replace("w", "w#"),
                hb = "\\[" + eb + "*(" + fb + ")" + eb + "*(?:([*^$|!~]?=)" + eb + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + gb + ")|)|)" + eb + "*\\]",
                ib = ":(" + fb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + hb.replace(3, 8) + ")*)|.*)\\)|)",
                jb = new RegExp("^" + eb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eb + "+$", "g"),
                lb = new RegExp("^" + eb + "*," + eb + "*"),
                mb = new RegExp("^" + eb + "*([>+~]|" + eb + ")" + eb + "*"),
                nb = new RegExp(eb + "*[+~]"),
                ob = new RegExp("=" + eb + "*([^\\]'\"]*)" + eb + "*\\]", "g"),
                pb = new RegExp(ib),
                qb = new RegExp("^" + gb + "$"),
                rb = {
                    ID: new RegExp("^#(" + fb + ")"),
                    CLASS: new RegExp("^\\.(" + fb + ")"),
                    TAG: new RegExp("^(" + fb.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + hb),
                    PSEUDO: new RegExp("^" + ib),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + eb + "*(even|odd|(([+-]|)(\\d*)n|)" + eb + "*(?:([+-]|)" + eb + "*(\\d+)|))" + eb + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + db + ")$", "i"),
                    needsContext: new RegExp("^" + eb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + eb + "*((?:-\\d)?\\d*)" + eb + "*\\)|)(?=[^-]|$)", "i")
                },
                sb = /^[^{]+\{\s*\[native \w/,
                tb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ub = /^(?:input|select|textarea|button)$/i,
                vb = /^h\d$/i,
                wb = /'|\\/g,
                xb = new RegExp("\\\\([\\da-f]{1,6}" + eb + "?|(" + eb + ")|.)", "ig"),
                yb = function (a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                };
            try {
                ab.apply(Z = bb.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType
            } catch (zb) {
                ab = {
                    apply: Z.length ? function (a, b) {
                        _.apply(a, bb.call(b))
                    } : function (a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            B = c.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, x = c.support = {}, F = c.setDocument = function (a) {
                var b = a ? a.ownerDocument || a : O,
                    c = b.defaultView;
                return b !== G && 9 === b.nodeType && b.documentElement ? (G = b, H = b.documentElement, I = !B(b), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function () {
                    F()
                }), x.attributes = f(function (a) {
                    return a.className = "i", !a.getAttribute("className")
                }), x.getElementsByTagName = f(function (a) {
                    return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length
                }), x.getElementsByClassName = f(function (a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                }), x.getById = f(function (a) {
                    return H.appendChild(a).id = N, !b.getElementsByName || !b.getElementsByName(N).length
                }), x.getById ? (z.find.ID = function (a, b) {
                    if (typeof b.getElementById !== W && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, z.filter.ID = function (a) {
                    var b = a.replace(xb, yb);
                    return function (a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete z.find.ID, z.filter.ID = function (a) {
                    var b = a.replace(xb, yb);
                    return function (a) {
                        var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), z.find.TAG = x.getElementsByTagName ? function (a, b) {
                    return typeof b.getElementsByTagName !== W ? b.getElementsByTagName(a) : void 0
                } : function (a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, z.find.CLASS = x.getElementsByClassName && function (a, b) {
                    return typeof b.getElementsByClassName !== W && I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (x.qsa = sb.test(b.querySelectorAll)) && (f(function (a) {
                    a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + eb + "*(?:value|" + db + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
                }), f(function (a) {
                    var c = b.createElement("input");
                    c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + eb + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (x.matchesSelector = sb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function (a) {
                    x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ib)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), M = sb.test(H.contains) || H.compareDocumentPosition ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function (a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, V = H.compareDocumentPosition ? function (a, c) {
                    if (a === c) return U = !0, 0;
                    var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                    return d ? 1 & d || !x.sortDetached && c.compareDocumentPosition(a) === d ? a === b || M(O, a) ? -1 : c === b || M(O, c) ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                } : function (a, c) {
                    var d, e = 0,
                        f = a.parentNode,
                        g = c.parentNode,
                        i = [a],
                        j = [c];
                    if (a === c) return U = !0, 0;
                    if (!f || !g) return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0;
                    if (f === g) return h(a, c);
                    for (d = a; d = d.parentNode;) i.unshift(d);
                    for (d = c; d = d.parentNode;) j.unshift(d);
                    for (; i[e] === j[e];) e++;
                    return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, b) : G
            }, c.matches = function (a, b) {
                return c(a, null, null, b)
            }, c.matchesSelector = function (a, b) {
                if ((a.ownerDocument || a) !== G && F(a), b = b.replace(ob, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b))) try {
                    var d = L.call(a, b);
                    if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return c(b, G, null, [a]).length > 0
            }, c.contains = function (a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, c.attr = function (a, c) {
                (a.ownerDocument || a) !== G && F(a);
                var d = z.attrHandle[c.toLowerCase()],
                    e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
                return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
            }, c.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, c.uniqueSort = function (a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return a
            }, A = c.getText = function (a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += A(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d]; d++) c += A(b);
                return c
            }, z = c.selectors = {
                cacheLength: 50,
                createPseudo: e,
                match: rb,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(xb, yb), a[3] = (a[4] || a[5] || "").replace(xb, yb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
                    },
                    PSEUDO: function (a) {
                        var c, d = !a[5] && a[2];
                        return rb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pb.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(xb, yb).toLowerCase();
                        return "*" === a ? function () {
                            return !0
                        } : function (a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function (a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + eb + ")" + a + "(" + eb + "|$)")) && R(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (a, b, d) {
                        return function (e) {
                            var f = c.attr(e, a);
                            return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        } : function (b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [P, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function (a, b) {
                        var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                        return f[N] ? f(b) : f.length > 1 ? (d = [a, a, "", b], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function (a, c) {
                            for (var d, e = f(a, b), g = e.length; g--;) d = cb.call(a, e[g]), a[d] = !(c[d] = e[g])
                        }) : function (a) {
                            return f(a, 0, d)
                        }) : f
                    }
                },
                pseudos: {
                    not: e(function (a) {
                        var b = [],
                            c = [],
                            d = C(a.replace(jb, "$1"));
                        return d[N] ? e(function (a, b, c, e) {
                            for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, e, f) {
                            return b[0] = a, d(b, null, f, c), !c.pop()
                        }
                    }),
                    has: e(function (a) {
                        return function (b) {
                            return c(a, b).length > 0
                        }
                    }),
                    contains: e(function (a) {
                        return function (b) {
                            return (b.textContent || b.innerText || A(b)).indexOf(a) > -1
                        }
                    }),
                    lang: e(function (a) {
                        return qb.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xb, yb).toLowerCase(),
                            function (b) {
                                var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function (a) {
                        return a === H
                    },
                    focus: function (a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function (a) {
                        return a.disabled === !1
                    },
                    disabled: function (a) {
                        return a.disabled === !0
                    },
                    checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                        return !0
                    },
                    parent: function (a) {
                        return !z.pseudos.empty(a)
                    },
                    header: function (a) {
                        return vb.test(a.nodeName)
                    },
                    input: function (a) {
                        return ub.test(a.nodeName)
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                    },
                    first: k(function () {
                        return [0]
                    }),
                    last: k(function (a, b) {
                        return [b - 1]
                    }),
                    eq: k(function (a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: k(function (a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: k(function (a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: k(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: k(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, z.pseudos.nth = z.pseudos.eq;
            for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) z.pseudos[w] = i(w);
            for (w in {
                submit: !0,
                reset: !0
            }) z.pseudos[w] = j(w);
            l.prototype = z.filters = z.pseudos, z.setFilters = new l, C = c.compile = function (a, b) {
                var c, d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = m(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d))
                }
                return f
            }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), x.sortDetached = f(function (a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), f(function (a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || g("type|href|height|width", function (a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), x.attributes && f(function (a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || g("value", function (a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), f(function (a) {
                return null == a.getAttribute("disabled")
            }) || g(db, function (a, b, c) {
                var d;
                return c ? void 0 : (d = a.getAttributeNode(b)) && d.specified ? d.value : a[b] === !0 ? b.toLowerCase() : null
            }), kb.find = c, kb.expr = c.selectors, kb.expr[":"] = kb.expr.pseudos, kb.unique = c.uniqueSort, kb.text = c.getText, kb.isXMLDoc = c.isXML, kb.contains = c.contains
        }(a);
    var zb = {};
    kb.Callbacks = function (a) {
        a = "string" == typeof a ? zb[a] || d(a) : kb.extend({}, a);
        var c, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function (b) {
                for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++)
                    if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                        e = !1;
                        break
                    }
                c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable())
            },
            m = {
                add: function () {
                    if (j) {
                        var b = j.length;
                        ! function d(b) {
                            kb.each(b, function (b, c) {
                                var e = kb.type(c);
                                "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                            })
                        }(arguments), c ? g = j.length : e && (i = b, l(e))
                    }
                    return this
                },
                remove: function () {
                    return j && kb.each(arguments, function (a, b) {
                        for (var d;
                            (d = kb.inArray(b, j, d)) > -1;) j.splice(d, 1), c && (g >= d && g--, h >= d && h--)
                    }), this
                },
                has: function (a) {
                    return a ? kb.inArray(a, j) > -1 : !(!j || !j.length)
                },
                empty: function () {
                    return j = [], g = 0, this
                },
                disable: function () {
                    return j = k = e = b, this
                },
                disabled: function () {
                    return !j
                },
                lock: function () {
                    return k = b, e || m.disable(), this
                },
                locked: function () {
                    return !k
                },
                fireWith: function (a, b) {
                    return !j || f && !k || (b = b || [], b = [a, b.slice ? b.slice() : b], c ? k.push(b) : l(b)), this
                },
                fire: function () {
                    return m.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!f
                }
            };
        return m
    }, kb.extend({
        Deferred: function (a) {
            var b = [
                    ["resolve", "done", kb.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", kb.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", kb.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return kb.Deferred(function (c) {
                            kb.each(b, function (b, f) {
                                var g = f[0],
                                    h = kb.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = h && h.apply(this, arguments);
                                    a && kb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? kb.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, kb.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b, c, d, e = 0,
                f = fb.call(arguments),
                g = f.length,
                h = 1 !== g || a && kb.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : kb.Deferred(),
                j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? fb.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && kb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), kb.support = function (b) {
        var c, d, e, f, g, h, i, j, k, l = Y.createElement("div");
        if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*") || [], d = l.getElementsByTagName("a")[0], !d || !d.style || !c.length) return b;
        f = Y.createElement("select"), h = f.appendChild(Y.createElement("option")), e = l.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b.getSetAttribute = "t" !== l.className, b.leadingWhitespace = 3 === l.firstChild.nodeType, b.tbody = !l.getElementsByTagName("tbody").length, b.htmlSerialize = !!l.getElementsByTagName("link").length, b.style = /top/.test(d.getAttribute("style")), b.hrefNormalized = "/a" === d.getAttribute("href"), b.opacity = /^0.5/.test(d.style.opacity), b.cssFloat = !!d.style.cssFloat, b.checkOn = !!e.value, b.optSelected = h.selected, b.enctype = !!Y.createElement("form").enctype, b.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, b.inlineBlockNeedsLayout = !1, b.shrinkWrapBlocks = !1, b.pixelPosition = !1, b.deleteExpando = !0, b.noCloneEvent = !0, b.reliableMarginRight = !0, b.boxSizingReliable = !0, e.checked = !0, b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete l.test
        } catch (m) {
            b.deleteExpando = !1
        }
        e = Y.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = Y.createDocumentFragment(), g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, l.attachEvent && (l.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), l.cloneNode(!0).click());
        for (k in {
            submit: !0,
            change: !0,
            focusin: !0
        }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
        l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip;
        for (k in kb(b)) break;
        return b.ownLast = "0" !== k, kb(function () {
            var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                g = Y.getElementsByTagName("body")[0];
            g && (c = Y.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", kb.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function () {
                b.boxSizing = 4 === l.offsetWidth
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                width: "4px"
            }).width, d = l.appendChild(Y.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== W && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null)
        }), c = f = g = h = d = e = null, b
    }({});
    var Ab = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Bb = /([A-Z])/g;
    kb.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            return a = a.nodeType ? kb.cache[a[kb.expando]] : a[kb.expando], !!a && !h(a)
        },
        data: function (a, b, c) {
            return e(a, b, c)
        },
        removeData: function (a, b) {
            return f(a, b)
        },
        _data: function (a, b, c) {
            return e(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return f(a, b, !0)
        },
        acceptData: function (a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && kb.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), kb.fn.extend({
        data: function (a, c) {
            var d, e, f = null,
                h = 0,
                i = this[0];
            if (a === b) {
                if (this.length && (f = kb.data(i), 1 === i.nodeType && !kb._data(i, "parsedAttrs"))) {
                    for (d = i.attributes; h < d.length; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = kb.camelCase(e.slice(5)), g(i, e, f[e]));
                    kb._data(i, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof a ? this.each(function () {
                kb.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                kb.data(this, a, c)
            }) : i ? g(i, a, kb.data(i, a)) : null
        },
        removeData: function (a) {
            return this.each(function () {
                kb.removeData(this, a)
            })
        }
    }), kb.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = kb._data(a, b), c && (!d || kb.isArray(c) ? d = kb._data(a, b, kb.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = kb.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = kb._queueHooks(a, b),
                g = function () {
                    kb.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return kb._data(a, c) || kb._data(a, c, {
                empty: kb.Callbacks("once memory").add(function () {
                    kb._removeData(a, b + "queue"), kb._removeData(a, c)
                })
            })
        }
    }), kb.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? kb.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = kb.queue(this, a, c);
                kb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && kb.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                kb.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            return a = kb.fx ? kb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            var d, e = 1,
                f = kb.Deferred(),
                g = this,
                h = this.length,
                i = function () {
                    --e || f.resolveWith(g, [g])
                };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = kb._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var Cb, Db, Eb = /[\t\r\n\f]/g,
        Fb = /\r/g,
        Gb = /^(?:input|select|textarea|button|object)$/i,
        Hb = /^(?:a|area)$/i,
        Ib = /^(?:checked|selected)$/i,
        Jb = kb.support.getSetAttribute,
        Kb = kb.support.input;
    kb.fn.extend({
        attr: function (a, b) {
            return kb.access(this, kb.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                kb.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return kb.access(this, kb.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = kb.propFix[a] || a, this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = "string" == typeof a && a;
            if (kb.isFunction(a)) return this.each(function (b) {
                kb(this).addClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(mb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        c.className = kb.trim(d)
                    }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = 0 === arguments.length || "string" == typeof a && a;
            if (kb.isFunction(a)) return this.each(function (b) {
                kb(this).removeClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(mb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        c.className = a ? kb.trim(d) : ""
                    }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(kb.isFunction(a) ? function (c) {
                kb(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c)
                    for (var b, d = 0, e = kb(this), f = a.match(mb) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === W || "boolean" === c) && (this.className && kb._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : kb._data(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Eb, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function (a) {
            var c, d, e, f = this[0]; {
                if (arguments.length) return e = kb.isFunction(a), this.each(function (c) {
                    var f;
                    1 === this.nodeType && (f = e ? a.call(this, c, kb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : kb.isArray(f) && (f = kb.map(f, function (a) {
                        return null == a ? "" : a + ""
                    })), d = kb.valHooks[this.type] || kb.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
                });
                if (f) return d = kb.valHooks[f.type] || kb.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, "string" == typeof c ? c.replace(Fb, "") : null == c ? "" : c)
            }
        }
    }), kb.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = kb.find.attr(a, "value");
                    return null != b ? b : a.text
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (kb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && kb.nodeName(c.parentNode, "optgroup"))) {
                            if (b = kb(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    for (var c, d, e = a.options, f = kb.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = kb.inArray(kb(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        },
        attr: function (a, c, d) {
            var e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return typeof a.getAttribute === W ? kb.prop(a, c, d) : (1 === g && kb.isXMLDoc(a) || (c = c.toLowerCase(), e = kb.attrHooks[c] || (kb.expr.match.bool.test(c) ? Db : Cb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = kb.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : void kb.removeAttr(a, c))
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(mb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = kb.propFix[c] || c, kb.expr.match.bool.test(c) ? Kb && Jb || !Ib.test(c) ? a[d] = !1 : a[kb.camelCase("default-" + c)] = a[d] = !1 : kb.attr(a, c, ""), a.removeAttribute(Jb ? c : d)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!kb.support.radioValue && "radio" === b && kb.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !kb.isXMLDoc(a), g && (c = kb.propFix[c] || c, f = kb.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = kb.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Gb.test(a.nodeName) || Hb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), Db = {
        set: function (a, b, c) {
            return b === !1 ? kb.removeAttr(a, c) : Kb && Jb || !Ib.test(c) ? a.setAttribute(!Jb && kb.propFix[c] || c, c) : a[kb.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, kb.each(kb.expr.match.bool.source.match(/\w+/g), function (a, c) {
        var d = kb.expr.attrHandle[c] || kb.find.attr;
        kb.expr.attrHandle[c] = Kb && Jb || !Ib.test(c) ? function (a, c, e) {
            var f = kb.expr.attrHandle[c],
                g = e ? b : (kb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return kb.expr.attrHandle[c] = f, g
        } : function (a, c, d) {
            return d ? b : a[kb.camelCase("default-" + c)] ? c.toLowerCase() : null
        }
    }), Kb && Jb || (kb.attrHooks.value = {
        set: function (a, b, c) {
            return kb.nodeName(a, "input") ? void(a.defaultValue = b) : Cb && Cb.set(a, b, c)
        }
    }), Jb || (Cb = {
        set: function (a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", "value" === d || c === a.getAttribute(d) ? c : b
        }
    }, kb.expr.attrHandle.id = kb.expr.attrHandle.name = kb.expr.attrHandle.coords = function (a, c, d) {
        var e;
        return d ? b : (e = a.getAttributeNode(c)) && "" !== e.value ? e.value : null
    }, kb.valHooks.button = {
        get: function (a, c) {
            var d = a.getAttributeNode(c);
            return d && d.specified ? d.value : b
        },
        set: Cb.set
    }, kb.attrHooks.contenteditable = {
        set: function (a, b, c) {
            Cb.set(a, "" === b ? !1 : b, c)
        }
    }, kb.each(["width", "height"], function (a, b) {
        kb.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), kb.support.hrefNormalized || kb.each(["href", "src"], function (a, b) {
        kb.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), kb.support.style || (kb.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || b
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    }), kb.support.optSelected || (kb.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), kb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        kb.propFix[this.toLowerCase()] = this
    }), kb.support.enctype || (kb.propFix.enctype = "encoding"), kb.each(["radio", "checkbox"], function () {
        kb.valHooks[this] = {
            set: function (a, b) {
                return kb.isArray(b) ? a.checked = kb.inArray(kb(a).val(), b) >= 0 : void 0
            }
        }, kb.support.checkOn || (kb.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Lb = /^(?:input|select|textarea)$/i,
        Mb = /^key/,
        Nb = /^(?:mouse|contextmenu)|click/,
        Ob = /^(?:focusinfocus|focusoutblur)$/,
        Pb = /^([^.]*)(?:\.(.+)|)$/;
    kb.event = {
        global: {},
        add: function (a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = kb._data(a);
            if (r) {
                for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = kb.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function (a) {
                    return typeof kb === W || a && kb.event.triggered === a.type ? b : kb.event.dispatch.apply(l.elem, arguments)
                }, l.elem = a), c = (c || "").match(mb) || [""], i = c.length; i--;) g = Pb.exec(c[i]) || [], o = q = g[1], p = (g[2] || "").split(".").sort(), o && (k = kb.event.special[o] || {}, o = (f ? k.delegateType : k.bindType) || o, k = kb.event.special[o] || {}, m = kb.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && kb.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), kb.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = kb.hasData(a) && kb._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(mb) || [""], j = b.length; j--;)
                    if (h = Pb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = kb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || kb.removeEvent(a, n, q.handle), delete k[n])
                    } else
                        for (n in k) kb.event.remove(a, n + b[j], c, d, !0);
                kb.isEmptyObject(k) && (delete q.handle, kb._removeData(a, "events"))
            }
        },
        trigger: function (c, d, e, f) {
            var g, h, i, j, k, l, m, n = [e || Y],
                o = ib.call(c, "type") ? c.type : c,
                p = ib.call(c, "namespace") ? c.namespace.split(".") : [];
            if (i = l = e = e || Y, 3 !== e.nodeType && 8 !== e.nodeType && !Ob.test(o + kb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = o.indexOf(":") < 0 && "on" + o, c = c[kb.expando] ? c : new kb.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : kb.makeArray(d, [c]), k = kb.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                if (!f && !k.noBubble && !kb.isWindow(e)) {
                    for (j = k.delegateType || o, Ob.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), l = i;
                    l === (e.ownerDocument || Y) && n.push(l.defaultView || l.parentWindow || a)
                }
                for (m = 0;
                    (i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j : k.bindType || o, g = (kb._data(i, "events") || {})[c.type] && kb._data(i, "handle"), g && g.apply(i, d), g = h && i[h], g && kb.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                if (c.type = o, !f && !c.isDefaultPrevented() && (!k._default || k._default.apply(n.pop(), d) === !1) && kb.acceptData(e) && h && e[o] && !kb.isWindow(e)) {
                    l = e[h], l && (e[h] = null), kb.event.triggered = o;
                    try {
                        e[o]()
                    } catch (q) {}
                    kb.event.triggered = b, l && (e[h] = l)
                }
                return c.result
            }
        },
        dispatch: function (a) {
            a = kb.event.fix(a);
            var c, d, e, f, g, h = [],
                i = fb.call(arguments),
                j = (kb._data(this, "events") || {})[a.type] || [],
                k = kb.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = kb.event.handlers.call(this, a, j), c = 0;
                    (f = h[c++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, g = 0;
                        (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((kb.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, c) {
            var d, e, f, g, h = [],
                i = c.delegateCount,
                j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type))
                for (; j != this; j = j.parentNode || this)
                    if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                        for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? kb(d, this).index(j) >= 0 : kb.find(d, this, null, [j]).length), f[d] && f.push(e);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return i < c.length && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h
        },
        fix: function (a) {
            if (a[kb.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Nb.test(e) ? this.mouseHooks : Mb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new kb.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || Y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var d, e, f, g = c.button,
                    h = c.fromElement;
                return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || Y, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== k() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === k() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return kb.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return kb.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = kb.extend(new kb.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? kb.event.trigger(e, null, b) : kb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, kb.removeEvent = Y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === W && (a[d] = null), a.detachEvent(d, c))
    }, kb.Event = function (a, b) {
        return this instanceof kb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, b && kb.extend(this, b), this.timeStamp = a && a.timeStamp || kb.now(), void(this[kb.expando] = !0)) : new kb.Event(a, b)
    }, kb.Event.prototype = {
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = i, this.stopPropagation()
        }
    }, kb.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        kb.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !kb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), kb.support.submitBubbles || (kb.event.special.submit = {
        setup: function () {
            return kb.nodeName(this, "form") ? !1 : void kb.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target,
                    d = kb.nodeName(c, "input") || kb.nodeName(c, "button") ? c.form : b;
                d && !kb._data(d, "submitBubbles") && (kb.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), kb._data(d, "submitBubbles", !0))
            })
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && kb.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            return kb.nodeName(this, "form") ? !1 : void kb.event.remove(this, "._submit")
        }
    }), kb.support.changeBubbles || (kb.event.special.change = {
        setup: function () {
            return Lb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (kb.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), kb.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), kb.event.simulate("change", this, a, !0)
            })), !1) : void kb.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Lb.test(b.nodeName) && !kb._data(b, "changeBubbles") && (kb.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || kb.event.simulate("change", this.parentNode, a, !0)
                }), kb._data(b, "changeBubbles", !0))
            })
        },
        handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return kb.event.remove(this, "._change"), !Lb.test(this.nodeName)
        }
    }), kb.support.focusinBubbles || kb.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = 0,
            d = function (a) {
                kb.event.simulate(b, a.target, kb.event.fix(a), !0)
            };
        kb.event.special[b] = {
            setup: function () {
                0 === c++ && Y.addEventListener(a, d, !0)
            },
            teardown: function () {
                0 === --c && Y.removeEventListener(a, d, !0)
            }
        }
    }), kb.fn.extend({
        on: function (a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (g in a) this.on(g, c, d, a[g], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
            else if (!e) return this;
            return 1 === f && (h = e, e = function (a) {
                return kb().off(a), h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = kb.guid++)), this.each(function () {
                kb.event.add(this, a, e, d, c)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, kb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), this.each(function () {
                kb.event.remove(this, a, d, c)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                kb.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? kb.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Qb = /^.[^:#\[\.,]*$/,
        Rb = /^(?:parents|prev(?:Until|All))/,
        Sb = kb.expr.match.needsContext,
        Tb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    kb.fn.extend({
        find: function (a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(kb(a).filter(function () {
                for (b = 0; e > b; b++)
                    if (kb.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) kb.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? kb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        has: function (a) {
            var b, c = kb(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)
                    if (kb.contains(this, c[b])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(m(this, a || [], !0))
        },
        filter: function (a) {
            return this.pushStack(m(this, a || [], !1))
        },
        is: function (a) {
            return !!m(this, "string" == typeof a && Sb.test(a) ? kb(a) : a || [], !1).length
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Sb.test(a) || "string" != typeof a ? kb(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && kb.find.matchesSelector(c, a))) {
                        c = f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? kb.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? kb.inArray(this[0], kb(a)) : kb.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            var c = "string" == typeof a ? kb(a, b) : kb.makeArray(a && a.nodeType ? [a] : a),
                d = kb.merge(this.get(), c);
            return this.pushStack(kb.unique(d))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), kb.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return kb.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return kb.dir(a, "parentNode", c)
        },
        next: function (a) {
            return l(a, "nextSibling")
        },
        prev: function (a) {
            return l(a, "previousSibling")
        },
        nextAll: function (a) {
            return kb.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return kb.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return kb.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return kb.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return kb.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return kb.sibling(a.firstChild)
        },
        contents: function (a) {
            return kb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : kb.merge([], a.childNodes)
        }
    }, function (a, b) {
        kb.fn[a] = function (c, d) {
            var e = kb.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = kb.filter(d, e)), this.length > 1 && (Tb[a] || (e = kb.unique(e)), Rb.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    }), kb.extend({
        filter: function (a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? kb.find.matchesSelector(d, a) ? [d] : [] : kb.find.matches(a, kb.grep(b, function (a) {
                return 1 === a.nodeType
            }))
        },
        dir: function (a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !kb(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Ub = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Vb = / jQuery\d+="(?:null|\d+)"/g,
        Wb = new RegExp("<(?:" + Ub + ")[\\s/>]", "i"),
        Xb = /^\s+/,
        Yb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Zb = /<([\w:]+)/,
        $b = /<tbody/i,
        _b = /<|&#?\w+;/,
        ac = /<(?:script|style|link)/i,
        bc = /^(?:checkbox|radio)$/i,
        cc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dc = /^$|\/(?:java|ecma)script/i,
        ec = /^true\/(.*)/,
        fc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        gc = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: kb.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        hc = n(Y),
        ic = hc.appendChild(Y.createElement("div"));
    gc.optgroup = gc.option, gc.tbody = gc.tfoot = gc.colgroup = gc.caption = gc.thead, gc.th = gc.td, kb.fn.extend({
        text: function (a) {
            return kb.access(this, function (a) {
                return a === b ? kb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? kb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || kb.cleanData(u(c)), c.parentNode && (b && kb.contains(c.ownerDocument, c) && r(u(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && kb.cleanData(u(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && kb.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return kb.clone(this, a, b)
            })
        },
        html: function (a) {
            return kb.access(this, function (a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Vb, "") : b;
                if (!("string" != typeof a || ac.test(a) || !kb.support.htmlSerialize && Wb.test(a) || !kb.support.leadingWhitespace && Xb.test(a) || gc[(Zb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Yb, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (kb.cleanData(u(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = kb.map(this, function (a) {
                    return [a.nextSibling, a.parentNode]
                }),
                b = 0;
            return this.domManip(arguments, function (c) {
                var d = a[b++],
                    e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), kb(this).remove(), e.insertBefore(c, d))
            }, !0), b ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, b, c) {
            a = db.apply([], a);
            var d, e, f, g, h, i, j = 0,
                k = this.length,
                l = this,
                m = k - 1,
                n = a[0],
                o = kb.isFunction(n);
            if (o || !(1 >= k || "string" != typeof n || kb.support.checkClone) && cc.test(n)) return this.each(function (d) {
                var e = l.eq(d);
                o && (a[0] = n.call(this, d, e.html())), e.domManip(a, b, c)
            });
            if (k && (i = kb.buildFragment(a, this[0].ownerDocument, !1, !c && this), d = i.firstChild, 1 === i.childNodes.length && (i = d), d)) {
                for (g = kb.map(u(i, "script"), p), f = g.length; k > j; j++) e = i, j !== m && (e = kb.clone(e, !0, !0), f && kb.merge(g, u(e, "script"))), b.call(this[j], e, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, kb.map(g, q), j = 0; f > j; j++) e = g[j], dc.test(e.type || "") && !kb._data(e, "globalEval") && kb.contains(h, e) && (e.src ? kb._evalUrl(e.src) : kb.globalEval((e.text || e.textContent || e.innerHTML || "").replace(fc, "")));
                i = d = null
            }
            return this
        }
    }), kb.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        kb.fn[a] = function (a) {
            for (var c, d = 0, e = [], f = kb(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), kb(f[d])[b](c), eb.apply(e, c.get());
            return this.pushStack(e)
        }
    }), kb.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = kb.contains(a.ownerDocument, a);
            if (kb.support.html5Clone || kb.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ic.innerHTML = a.outerHTML, ic.removeChild(f = ic.firstChild)), !(kb.support.noCloneEvent && kb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || kb.isXMLDoc(a)))
                for (d = u(f), h = u(a), g = 0; null != (e = h[g]); ++g) d[g] && t(e, d[g]);
            if (b)
                if (c)
                    for (h = h || u(a), d = d || u(f), g = 0; null != (e = h[g]); g++) s(e, d[g]);
                else s(a, f);
            return d = u(f, "script"), d.length > 0 && r(d, !i && u(a, "script")), d = h = e = null, f
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = n(b), o = [], p = 0; l > p; p++)
                if (f = a[p], f || 0 === f)
                    if ("object" === kb.type(f)) kb.merge(o, f.nodeType ? [f] : f);
                    else if (_b.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Zb.exec(f) || ["", ""])[1].toLowerCase(), k = gc[i] || gc._default, h.innerHTML = k[1] + f.replace(Yb, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!kb.support.leadingWhitespace && Xb.test(f) && o.push(b.createTextNode(Xb.exec(f)[0])), !kb.support.tbody)
                    for (f = "table" !== i || $b.test(f) ? "<table>" !== k[1] || $b.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) kb.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (kb.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = m.lastChild
            } else o.push(b.createTextNode(f));
            for (h && m.removeChild(h), kb.support.appendChecked || kb.grep(u(o, "input"), v), p = 0; f = o[p++];)
                if ((!d || -1 === kb.inArray(f, d)) && (g = kb.contains(f.ownerDocument, f), h = u(m.appendChild(f), "script"), g && r(h), c))
                    for (e = 0; f = h[e++];) dc.test(f.type || "") && c.push(f);
            return h = null, m
        },
        cleanData: function (a, b) {
            for (var c, d, e, f, g = 0, h = kb.expando, i = kb.cache, j = kb.support.deleteExpando, k = kb.event.special; null != (c = a[g]); g++)
                if ((b || kb.acceptData(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)
                        for (d in f.events) k[d] ? kb.event.remove(c, d) : kb.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== W ? c.removeAttribute(h) : c[h] = null, bb.push(e))
                }
        },
        _evalUrl: function (a) {
            return kb.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), kb.fn.extend({
        wrapAll: function (a) {
            if (kb.isFunction(a)) return this.each(function (b) {
                kb(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = kb(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return this.each(kb.isFunction(a) ? function (b) {
                kb(this).wrapInner(a.call(this, b))
            } : function () {
                var b = kb(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = kb.isFunction(a);
            return this.each(function (c) {
                kb(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                kb.nodeName(this, "body") || kb(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var jc, kc, lc, mc = /alpha\([^)]*\)/i,
        nc = /opacity\s*=\s*([^)]*)/,
        oc = /^(top|right|bottom|left)$/,
        pc = /^(none|table(?!-c[ea]).+)/,
        qc = /^margin/,
        rc = new RegExp("^(" + lb + ")(.*)$", "i"),
        sc = new RegExp("^(" + lb + ")(?!px)[a-z%]+$", "i"),
        tc = new RegExp("^([+-])=(" + lb + ")", "i"),
        uc = {
            BODY: "block"
        },
        vc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        wc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        xc = ["Top", "Right", "Bottom", "Left"],
        yc = ["Webkit", "O", "Moz", "ms"];
    kb.fn.extend({
        css: function (a, c) {
            return kb.access(this, function (a, c, d) {
                var e, f, g = {},
                    h = 0;
                if (kb.isArray(c)) {
                    for (f = kc(a), e = c.length; e > h; h++) g[c[h]] = kb.css(a, c[h], !1, f);
                    return g
                }
                return d !== b ? kb.style(a, c, d) : kb.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function () {
            return y(this, !0)
        },
        hide: function () {
            return y(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                x(this) ? kb(this).show() : kb(this).hide()
            })
        }
    }), kb.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = lc(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": kb.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = kb.camelCase(c),
                    j = a.style;
                if (c = kb.cssProps[i] || (kb.cssProps[i] = w(j, i)), h = kb.cssHooks[c] || kb.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = tc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(kb.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || kb.cssNumber[i] || (d += "px"), kb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d
                } catch (k) {}
            }
        },
        css: function (a, c, d, e) {
            var f, g, h, i = kb.camelCase(c);
            return c = kb.cssProps[i] || (kb.cssProps[i] = w(a.style, i)), h = kb.cssHooks[c] || kb.cssHooks[i], h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lc(a, c, e)), "normal" === g && c in wc && (g = wc[c]), "" === d || d ? (f = parseFloat(g), d === !0 || kb.isNumeric(f) ? f || 0 : g) : g
        }
    }), a.getComputedStyle ? (kc = function (b) {
        return a.getComputedStyle(b, null)
    }, lc = function (a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h.getPropertyValue(c) || h[c] : b,
            j = a.style;
        return h && ("" !== i || kb.contains(a.ownerDocument, a) || (i = kb.style(a, c)), sc.test(i) && qc.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
    }) : Y.documentElement.currentStyle && (kc = function (a) {
        return a.currentStyle
    }, lc = function (a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h[c] : b,
            j = a.style;
        return null == i && j && j[c] && (i = j[c]), sc.test(i) && !oc.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i
    }), kb.each(["height", "width"], function (a, b) {
        kb.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? 0 === a.offsetWidth && pc.test(kb.css(a, "display")) ? kb.swap(a, vc, function () {
                    return B(a, b, d)
                }) : B(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e = d && kc(a);
                return z(a, c, d ? A(a, b, d, kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), kb.support.opacity || (kb.cssHooks.opacity = {
        get: function (a, b) {
            return nc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = kb.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === kb.trim(f.replace(mc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mc.test(f) ? f.replace(mc, e) : f + " " + e)
        }
    }), kb(function () {
        kb.support.reliableMarginRight || (kb.cssHooks.marginRight = {
            get: function (a, b) {
                return b ? kb.swap(a, {
                    display: "inline-block"
                }, lc, [a, "marginRight"]) : void 0
            }
        }), !kb.support.pixelPosition && kb.fn.position && kb.each(["top", "left"], function (a, b) {
            kb.cssHooks[b] = {
                get: function (a, c) {
                    return c ? (c = lc(a, b), sc.test(c) ? kb(a).position()[b] + "px" : c) : void 0
                }
            }
        })
    }), kb.expr && kb.expr.filters && (kb.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !kb.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || kb.css(a, "display"))
    }, kb.expr.filters.visible = function (a) {
        return !kb.expr.filters.hidden(a)
    }), kb.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        kb.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + xc[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, qc.test(a) || (kb.cssHooks[a + b].set = z)
    });
    var zc = /%20/g,
        Ac = /\[\]$/,
        Bc = /\r?\n/g,
        Cc = /^(?:submit|button|image|reset|file)$/i,
        Dc = /^(?:input|select|textarea|keygen)/i;
    kb.fn.extend({
        serialize: function () {
            return kb.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = kb.prop(this, "elements");
                return a ? kb.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !kb(this).is(":disabled") && Dc.test(this.nodeName) && !Cc.test(a) && (this.checked || !bc.test(a))
            }).map(function (a, b) {
                var c = kb(this).val();
                return null == c ? null : kb.isArray(c) ? kb.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Bc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Bc, "\r\n")
                }
            }).get()
        }
    }), kb.param = function (a, c) {
        var d, e = [],
            f = function (a, b) {
                b = kb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (c === b && (c = kb.ajaxSettings && kb.ajaxSettings.traditional), kb.isArray(a) || a.jquery && !kb.isPlainObject(a)) kb.each(a, function () {
            f(this.name, this.value)
        });
        else
            for (d in a) E(d, a[d], c, f);
        return e.join("&").replace(zc, "+")
    }, kb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        kb.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), kb.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Ec, Fc, Gc = kb.now(),
        Hc = /\?/,
        Ic = /#.*$/,
        Jc = /([?&])_=[^&]*/,
        Kc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Lc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mc = /^(?:GET|HEAD)$/,
        Nc = /^\/\//,
        Oc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Pc = kb.fn.load,
        Qc = {},
        Rc = {},
        Sc = "*/".concat("*");
    try {
        Fc = X.href
    } catch (Tc) {
        Fc = Y.createElement("a"), Fc.href = "", Fc = Fc.href
    }
    Ec = Oc.exec(Fc.toLowerCase()) || [], kb.fn.load = function (a, c, d) {
        if ("string" != typeof a && Pc) return Pc.apply(this, arguments);
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), kb.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && kb.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function (a) {
            f = arguments, h.html(e ? kb("<div>").append(kb.parseHTML(a)).find(e) : a)
        }).complete(d && function (a, b) {
            h.each(d, f || [a.responseText, b, a])
        }), this
    }, kb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        kb.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), kb.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fc,
            type: "GET",
            isLocal: Lc.test(Ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": kb.parseJSON,
                "text xml": kb.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? H(H(a, kb.ajaxSettings), b) : H(kb.ajaxSettings, a)
        },
        ajaxPrefilter: F(Qc),
        ajaxTransport: F(Rc),
        ajax: function (a, c) {
            function d(a, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, f = a >= 200 && 300 > a || 304 === a, d && (t = I(m, w, d)), t = J(m, t, w, f), f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (kb.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (kb.etag[g] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --kb.active || kb.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = kb.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? kb(n) : kb.event,
                p = kb.Deferred(),
                q = kb.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === u) {
                            if (!l)
                                for (l = {}; b = Kc.exec(h);) l[b[1].toLowerCase()] = b[2];
                            b = l[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === u ? h : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || v;
                        return k && k.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fc) + "").replace(Ic, "").replace(Nc, Ec[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = kb.trim(m.dataType || "*").toLowerCase().match(mb) || [""], null == m.crossDomain && (e = Oc.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Ec[1] && e[2] === Ec[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (Ec[3] || ("http:" === Ec[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = kb.param(m.data, m.traditional)), G(Qc, m, c, w), 2 === u) return w;
            j = m.global, j && 0 === kb.active++ && kb.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Mc.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hc.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jc.test(g) ? g.replace(Jc, "$1_=" + Gc++) : g + (Hc.test(g) ? "&" : "?") + "_=" + Gc++)), m.ifModified && (kb.lastModified[g] && w.setRequestHeader("If-Modified-Since", kb.lastModified[g]), kb.etag[g] && w.setRequestHeader("If-None-Match", kb.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sc + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) w[f](m[f]);
            if (k = G(Rc, m, c, w)) {
                w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function () {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, k.send(s, d)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function (a, b, c) {
            return kb.get(a, b, c, "json")
        },
        getScript: function (a, c) {
            return kb.get(a, b, c, "script")
        }
    }), kb.each(["get", "post"], function (a, c) {
        kb[c] = function (a, d, e, f) {
            return kb.isFunction(d) && (f = f || e, e = d, d = b), kb.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    }), kb.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return kb.globalEval(a), a
            }
        }
    }), kb.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), kb.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d = Y.head || kb("head")[0] || Y.documentElement;
            return {
                send: function (b, e) {
                    c = Y.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, b) {
                        (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function () {
                    c && c.onload(b, !0)
                }
            }
        }
    });
    var Uc = [],
        Vc = /(=)\?(?=&|$)|\?\?/;
    kb.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Uc.pop() || kb.expando + "_" + Gc++;
            return this[a] = !0, a
        }
    }), kb.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Vc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = kb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vc, "$1" + f) : c.jsonp !== !1 && (c.url += (Hc.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
            return h || kb.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function () {
            h = arguments
        }, e.always(function () {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Uc.push(f)), h && kb.isFunction(g) && g(h[0]), h = g = b
        }), "script") : void 0
    });
    var Wc, Xc, Yc = 0,
        Zc = a.ActiveXObject && function () {
            var a;
            for (a in Wc) Wc[a](b, !0)
        };
    kb.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && K() || L()
    } : K, Xc = kb.ajaxSettings.xhr(), kb.support.cors = !!Xc && "withCredentials" in Xc, Xc = kb.support.ajax = !!Xc, Xc && kb.ajaxTransport(function (c) {
        if (!c.crossDomain || kb.support.cors) {
            var d;
            return {
                send: function (e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                        for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function (a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState))
                                if (d = b, g && (i.onreadystatechange = kb.noop, Zc && delete Wc[g]), e) 4 !== i.readyState && i.abort();
                                else {
                                    l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                    try {
                                        k = i.statusText
                                    } catch (m) {
                                        k = ""
                                    }
                                    h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                }
                        } catch (n) {
                            e || f(-1, n)
                        }
                        l && f(h, k, l, j)
                    }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yc, Zc && (Wc || (Wc = {}, kb(a).unload(Zc)), Wc[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function () {
                    d && d(b, !0)
                }
            }
        }
    });
    var $c, _c, ad = /^(?:toggle|show|hide)$/,
        bd = new RegExp("^(?:([+-])=|)(" + lb + ")([a-z%]*)$", "i"),
        cd = /queueHooks$/,
        dd = [Q],
        ed = {
            "*": [
                function (a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = bd.exec(b),
                        f = e && e[3] || (kb.cssNumber[a] ? "" : "px"),
                        g = (kb.cssNumber[a] || "px" !== f && +d) && bd.exec(kb.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, kb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }
            ]
        };
    kb.Animation = kb.extend(O, {
        tweener: function (a, b) {
            kb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ed[c] = ed[c] || [], ed[c].unshift(b)
        },
        prefilter: function (a, b) {
            b ? dd.unshift(a) : dd.push(a)
        }
    }), kb.Tween = R, R.prototype = {
        constructor: R,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (kb.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = R.propHooks[this.prop];
            return a && a.get ? a.get(this) : R.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = R.propHooks[this.prop];
            return this.pos = b = this.options.duration ? kb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = kb.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                kb.fx.step[a.prop] ? kb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[kb.cssProps[a.prop]] || kb.cssHooks[a.prop]) ? kb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, kb.each(["toggle", "show", "hide"], function (a, b) {
        var c = kb.fn[b];
        kb.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e)
        }
    }), kb.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = kb.isEmptyObject(a),
                f = kb.speed(b, c, d),
                g = function () {
                    var b = O(this, kb.extend({}, a), f);
                    (e || kb._data(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, c, d) {
            var e = function (a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = kb.timers,
                    g = kb._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && cd.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && kb.dequeue(this, a)
            })
        },
        finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = kb._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = kb.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, kb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), kb.each({
        slideDown: S("show"),
        slideUp: S("hide"),
        slideToggle: S("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        kb.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), kb.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? kb.extend({}, a) : {
            complete: c || !c && b || kb.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !kb.isFunction(b) && b
        };
        return d.duration = kb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in kb.fx.speeds ? kb.fx.speeds[d.duration] : kb.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            kb.isFunction(d.old) && d.old.call(this), d.queue && kb.dequeue(this, d.queue)
        }, d
    }, kb.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, kb.timers = [], kb.fx = R.prototype.init, kb.fx.tick = function () {
        var a, c = kb.timers,
            d = 0;
        for ($c = kb.now(); d < c.length; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || kb.fx.stop(), $c = b
    }, kb.fx.timer = function (a) {
        a() && kb.timers.push(a) && kb.fx.start()
    }, kb.fx.interval = 13, kb.fx.start = function () {
        _c || (_c = setInterval(kb.fx.tick, kb.fx.interval))
    }, kb.fx.stop = function () {
        clearInterval(_c), _c = null
    }, kb.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, kb.fx.step = {}, kb.expr && kb.expr.filters && (kb.expr.filters.animated = function (a) {
        return kb.grep(kb.timers, function (b) {
            return a === b.elem
        }).length
    }), kb.fn.offset = function (a) {
        if (arguments.length) return a === b ? this : this.each(function (b) {
            kb.offset.setOffset(this, a, b)
        });
        var c, d, e = {
                top: 0,
                left: 0
            },
            f = this[0],
            g = f && f.ownerDocument;
        if (g) return c = g.documentElement, kb.contains(c, f) ? (typeof f.getBoundingClientRect !== W && (e = f.getBoundingClientRect()), d = T(g), {
            top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : e
    }, kb.offset = {
        setOffset: function (a, b, c) {
            var d = kb.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = kb(a),
                h = g.offset(),
                i = kb.css(a, "top"),
                j = kb.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && kb.inArray("auto", [i, j]) > -1,
                l = {},
                m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), kb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, kb.fn.extend({
        position: function () {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === kb.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), kb.nodeName(a[0], "html") || (c = a.offset()), c.top += kb.css(a[0], "borderTopWidth", !0), c.left += kb.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - kb.css(d, "marginTop", !0),
                    left: b.left - c.left - kb.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || Z; a && !kb.nodeName(a, "html") && "static" === kb.css(a, "position");) a = a.offsetParent;
                return a || Z
            })
        }
    }), kb.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, c) {
        var d = /Y/.test(c);
        kb.fn[a] = function (e) {
            return kb.access(this, function (a, e, f) {
                var g = T(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : void(g ? g.scrollTo(d ? kb(g).scrollLeft() : f, d ? f : kb(g).scrollTop()) : a[e] = f)
            }, a, e, arguments.length, null)
        }
    }), kb.each({
        Height: "height",
        Width: "width"
    }, function (a, c) {
        kb.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function (d, e) {
            kb.fn[e] = function (e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return kb.access(this, function (c, d, e) {
                    var f;
                    return kb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? kb.css(c, d, h) : kb.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), kb.fn.size = function () {
        return this.length
    }, kb.fn.andSelf = kb.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = kb : (a.jQuery = a.$ = kb, "function" == typeof define && define.amd && define("jquery", [], function () {
        return kb
    }))
}(window), function (a, b, c) {
    "use strict";

    function d(a) {
        return function () {
            var b, c, d = arguments[0],
                e = "[" + (a ? a + ":" : "") + d + "] ",
                f = arguments[1],
                g = arguments,
                h = function (a) {
                    return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? JSON.stringify(a) : a
                };
            for (b = e + f.replace(/\{\d+\}/g, function (a) {
                var b, c = +a.slice(1, -1);
                return c + 2 < g.length ? (b = g[c + 2], "function" == typeof b ? b.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof b ? "undefined" : "string" != typeof b ? Q(b) : b) : a
            }), b = b + "\nhttp://errors.angularjs.org/1.2.6/" + (a ? a + "/" : "") + d, c = 2; c < arguments.length; c++) b = b + (2 == c ? "?" : "&") + "p" + (c - 2) + "=" + encodeURIComponent(h(arguments[c]));
            return new Error(b)
        }
    }

    function e(a) {
        if (null == a || A(a)) return !1;
        var b = a.length;
        return 1 === a.nodeType && b ? !0 : u(a) || x(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function f(a, b, c) {
        var d;
        if (a)
            if (y(a))
                for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d);
            else if (a.forEach && a.forEach !== f) a.forEach(b, c);
        else if (e(a))
            for (d = 0; d < a.length; d++) b.call(c, a[d], d);
        else
            for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d);
        return a
    }

    function g(a) {
        var b = [];
        for (var c in a) a.hasOwnProperty(c) && b.push(c);
        return b.sort()
    }

    function h(a, b, c) {
        for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d
    }

    function i(a) {
        return function (b, c) {
            a(c, b)
        }
    }

    function j() {
        for (var a, b = rd.length; b;) {
            if (b--, a = rd[b].charCodeAt(0), 57 == a) return rd[b] = "A", rd.join("");
            if (90 != a) return rd[b] = String.fromCharCode(a + 1), rd.join("");
            rd[b] = "0"
        }
        return rd.unshift("0"), rd.join("")
    }

    function k(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey
    }

    function l(a) {
        var b = a.$$hashKey;
        return f(arguments, function (b) {
            b !== a && f(b, function (b, c) {
                a[c] = b
            })
        }), k(a, b), a
    }

    function m(a) {
        return parseInt(a, 10)
    }

    function n(a, b) {
        return l(new(l(function () {}, {
            prototype: a
        })), b)
    }

    function o() {}

    function p(a) {
        return a
    }

    function q(a) {
        return function () {
            return a
        }
    }

    function r(a) {
        return "undefined" == typeof a
    }

    function s(a) {
        return "undefined" != typeof a
    }

    function t(a) {
        return null != a && "object" == typeof a
    }

    function u(a) {
        return "string" == typeof a
    }

    function v(a) {
        return "number" == typeof a
    }

    function w(a) {
        return "[object Date]" === od.call(a)
    }

    function x(a) {
        return "[object Array]" === od.call(a)
    }

    function y(a) {
        return "function" == typeof a
    }

    function z(a) {
        return "[object RegExp]" === od.call(a)
    }

    function A(a) {
        return a && a.document && a.location && a.alert && a.setInterval
    }

    function B(a) {
        return a && a.$evalAsync && a.$watch
    }

    function C(a) {
        return "[object File]" === od.call(a)
    }

    function D(a) {
        return !(!a || !(a.nodeName || a.on && a.find))
    }

    function E(a, b, c) {
        var d = [];
        return f(a, function (a, e, f) {
            d.push(b.call(c, a, e, f))
        }), d
    }

    function F(a, b) {
        return -1 != G(a, b)
    }

    function G(a, b) {
        if (a.indexOf) return a.indexOf(b);
        for (var c = 0; c < a.length; c++)
            if (b === a[c]) return c;
        return -1
    }

    function H(a, b) {
        var c = G(a, b);
        return c >= 0 && a.splice(c, 1), b
    }

    function I(a, b) {
        if (A(a) || B(a)) throw pd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (b) {
            if (a === b) throw pd("cpi", "Can't copy! Source and destination are identical.");
            if (x(a)) {
                b.length = 0;
                for (var c = 0; c < a.length; c++) b.push(I(a[c]))
            } else {
                var d = b.$$hashKey;
                f(b, function (a, c) {
                    delete b[c]
                });
                for (var e in a) b[e] = I(a[e]);
                k(b, d)
            }
        } else b = a, a && (x(a) ? b = I(a, []) : w(a) ? b = new Date(a.getTime()) : z(a) ? b = new RegExp(a.source) : t(a) && (b = I(a, {})));
        return b
    }

    function J(a, b) {
        b = b || {};
        for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && "$" !== c.charAt(1) && (b[c] = a[c]);
        return b
    }

    function K(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d, e, f, g = typeof a,
            h = typeof b;
        if (g == h && "object" == g) {
            if (!x(a)) {
                if (w(a)) return w(b) && a.getTime() == b.getTime();
                if (z(a) && z(b)) return a.toString() == b.toString();
                if (B(a) || B(b) || A(a) || A(b) || x(b)) return !1;
                f = {};
                for (e in a)
                    if ("$" !== e.charAt(0) && !y(a[e])) {
                        if (!K(a[e], b[e])) return !1;
                        f[e] = !0
                    }
                for (e in b)
                    if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !y(b[e])) return !1;
                return !0
            }
            if (!x(b)) return !1;
            if ((d = a.length) == b.length) {
                for (e = 0; d > e; e++)
                    if (!K(a[e], b[e])) return !1;
                return !0
            }
        }
        return !1
    }

    function L() {
        return b.securityPolicy && b.securityPolicy.isActive || b.querySelector && !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"))
    }

    function M(a, b, c) {
        return a.concat(md.call(b, c))
    }

    function N(a, b) {
        return md.call(a, b || 0)
    }

    function O(a, b) {
        var c = arguments.length > 2 ? N(arguments, 2) : [];
        return !y(b) || b instanceof RegExp ? b : c.length ? function () {
            return arguments.length ? b.apply(a, c.concat(md.call(arguments, 0))) : b.apply(a, c)
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function P(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) ? e = c : A(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : B(d) && (e = "$SCOPE"), e
    }

    function Q(a, b) {
        return "undefined" == typeof a ? c : JSON.stringify(a, P, b ? "  " : null)
    }

    function R(a) {
        return u(a) ? JSON.parse(a) : a
    }

    function S(a) {
        if (a && 0 !== a.length) {
            var b = dd("" + a);
            a = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)
        } else a = !1;
        return a
    }

    function T(a) {
        a = id(a).clone();
        try {
            a.empty()
        } catch (b) {}
        var c = 3,
            d = id("<div>").append(a).html();
        try {
            return a[0].nodeType === c ? dd(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + dd(b)
            })
        } catch (b) {
            return dd(d)
        }
    }

    function U(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {}
    }

    function V(a) {
        var b, c, d = {};
        return f((a || "").split("&"), function (a) {
            if (a && (b = a.split("="), c = U(b[0]), s(c))) {
                var e = s(b[1]) ? U(b[1]) : !0;
                d[c] ? x(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
            }
        }), d
    }

    function W(a) {
        var b = [];
        return f(a, function (a, c) {
            x(a) ? f(a, function (a) {
                b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
            }) : b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
        }), b.length ? b.join("&") : ""
    }

    function X(a) {
        return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Y(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
    }

    function Z(a, c) {
        function d(a) {
            a && h.push(a)
        }
        var e, g, h = [a],
            i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
            j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        f(i, function (c) {
            i[c] = !0, d(b.getElementById(c)), c = c.replace(":", "\\:"), a.querySelectorAll && (f(a.querySelectorAll("." + c), d), f(a.querySelectorAll("." + c + "\\:"), d), f(a.querySelectorAll("[" + c + "]"), d))
        }), f(h, function (a) {
            if (!e) {
                var b = " " + a.className + " ",
                    c = j.exec(b);
                c ? (e = a, g = (c[2] || "").replace(/\s+/g, ",")) : f(a.attributes, function (b) {
                    !e && i[b.name] && (e = a, g = b.value)
                })
            }
        }), e && c(e, g ? [g] : [])
    }

    function $(c, d) {
        var e = function () {
                if (c = id(c), c.injector()) {
                    var a = c[0] === b ? "document" : T(c);
                    throw pd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a)
                }
                d = d || [], d.unshift(["$provide",
                    function (a) {
                        a.value("$rootElement", c)
                    }
                ]), d.unshift("ng");
                var e = Eb(d);
                return e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate",
                    function (a, b, c, d) {
                        a.$apply(function () {
                            b.data("$injector", d), c(b)(a)
                        })
                    }
                ]), e
            },
            g = /^NG_DEFER_BOOTSTRAP!/;
        return a && !g.test(a.name) ? e() : (a.name = a.name.replace(g, ""), void(qd.resumeBootstrap = function (a) {
            f(a, function (a) {
                d.push(a)
            }), e()
        }))
    }

    function _(a, b) {
        return b = b || "_", a.replace(td, function (a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function ab() {
        jd = a.jQuery, jd ? (id = jd, l(jd.fn, {
            scope: Dd.scope,
            isolateScope: Dd.isolateScope,
            controller: Dd.controller,
            injector: Dd.injector,
            inheritedData: Dd.inheritedData
        }), kb("remove", !0, !0, !1), kb("empty", !1, !1, !1), kb("html", !1, !1, !0)) : id = lb, qd.element = id
    }

    function bb(a, b, c) {
        if (!a) throw pd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a
    }

    function cb(a, b, c) {
        return c && x(a) && (a = a[a.length - 1]), bb(y(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function db(a, b) {
        if ("hasOwnProperty" === a) throw pd("badname", "hasOwnProperty is not a valid {0} name", b)
    }

    function eb(a, b, c) {
        if (!b) return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
        return !c && y(a) ? O(f, a) : a
    }

    function fb(a) {
        var b = a[0],
            c = a[a.length - 1];
        if (b === c) return id(b);
        var d = b,
            e = [d];
        do {
            if (d = d.nextSibling, !d) break;
            e.push(d)
        } while (d !== c);
        return id(e)
    }

    function gb(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var c = d("$injector"),
            e = d("ng"),
            f = b(a, "angular", Object);
        return f.$$minErr = f.$$minErr || d, b(f, "module", function () {
            var a = {};
            return function (d, f, g) {
                var h = function (a, b) {
                    if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                };
                return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function () {
                    function a(a, c, d) {
                        return function () {
                            return b[d || "push"]([a, c, arguments]), i
                        }
                    }
                    if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                    var b = [],
                        e = [],
                        h = a("$injector", "invoke"),
                        i = {
                            _invokeQueue: b,
                            _runBlocks: e,
                            requires: f,
                            name: d,
                            provider: a("$provide", "provider"),
                            factory: a("$provide", "factory"),
                            service: a("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            animation: a("$animateProvider", "register"),
                            filter: a("$filterProvider", "register"),
                            controller: a("$controllerProvider", "register"),
                            directive: a("$compileProvider", "directive"),
                            config: h,
                            run: function (a) {
                                return e.push(a), this
                            }
                        };
                    return g && h(g), i
                })
            }
        })
    }

    function hb(b) {
        l(b, {
            bootstrap: $,
            copy: I,
            extend: l,
            equals: K,
            element: id,
            forEach: f,
            injector: Eb,
            noop: o,
            bind: O,
            toJson: Q,
            fromJson: R,
            identity: p,
            isUndefined: r,
            isDefined: s,
            isString: u,
            isFunction: y,
            isObject: t,
            isNumber: v,
            isElement: D,
            isArray: x,
            version: ud,
            isDate: w,
            lowercase: dd,
            uppercase: ed,
            callbacks: {
                counter: 0
            },
            $$minErr: d,
            $$csp: L
        }), kd = gb(a);
        try {
            kd("ngLocale")
        } catch (c) {
            kd("ngLocale", []).provider("$locale", Zb)
        }
        kd("ng", ["ngLocale"], ["$provide",
            function (a) {
                a.provider({
                    $$sanitizeUri: xc
                }), a.provider("$compile", Kb).directive({
                    a: ke,
                    input: ue,
                    textarea: ue,
                    form: oe,
                    script: bf,
                    select: ef,
                    style: gf,
                    option: ff,
                    ngBind: Ge,
                    ngBindHtml: Ie,
                    ngBindTemplate: He,
                    ngClass: Je,
                    ngClassEven: Le,
                    ngClassOdd: Ke,
                    ngCloak: Me,
                    ngController: Ne,
                    ngForm: pe,
                    ngHide: Xe,
                    ngIf: Pe,
                    ngInclude: Qe,
                    ngInit: Se,
                    ngNonBindable: Te,
                    ngPluralize: Ue,
                    ngRepeat: Ve,
                    ngShow: We,
                    ngStyle: Ye,
                    ngSwitch: Ze,
                    ngSwitchWhen: $e,
                    ngSwitchDefault: _e,
                    ngOptions: df,
                    ngTransclude: af,
                    ngModel: Ae,
                    ngList: De,
                    ngChange: Be,
                    required: Ce,
                    ngRequired: Ce,
                    ngValue: Fe
                }).directive({
                    ngInclude: Re
                }).directive(le).directive(Oe), a.provider({
                    $anchorScroll: Fb,
                    $animate: Md,
                    $browser: Hb,
                    $cacheFactory: Ib,
                    $controller: Nb,
                    $document: Ob,
                    $exceptionHandler: Pb,
                    $filter: Ic,
                    $interpolate: Xb,
                    $interval: Yb,
                    $http: Ub,
                    $httpBackend: Vb,
                    $location: kc,
                    $log: lc,
                    $parse: tc,
                    $rootScope: wc,
                    $q: uc,
                    $sce: Cc,
                    $sceDelegate: Bc,
                    $sniffer: Dc,
                    $templateCache: Jb,
                    $timeout: Ec,
                    $window: Hc
                })
            }
        ])
    }

    function ib() {
        return ++xd
    }

    function jb(a) {
        return a.replace(Ad, function (a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(Bd, "Moz$1")
    }

    function kb(a, b, c, d) {
        function e(a) {
            var e, g, h, i, j, k, l, m = c && a ? [this.filter(a)] : [this],
                n = b;
            if (!d || null != a)
                for (; m.length;)
                    for (e = m.shift(), g = 0, h = e.length; h > g; g++)
                        for (i = id(e[g]), n ? i.triggerHandler("$destroy") : n = !n, j = 0, k = (l = i.children()).length; k > j; j++) m.push(jd(l[j]));
            return f.apply(this, arguments)
        }
        var f = jd.fn[a];
        f = f.$original || f, e.$original = f, jd.fn[a] = e
    }

    function lb(a) {
        if (a instanceof lb) return a;
        if (!(this instanceof lb)) {
            if (u(a) && "<" != a.charAt(0)) throw Cd("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new lb(a)
        }
        if (u(a)) {
            var c = b.createElement("div");
            c.innerHTML = "<div>&#160;</div>" + a, c.removeChild(c.firstChild), vb(this, c.childNodes);
            var d = id(b.createDocumentFragment());
            d.append(this)
        } else vb(this, a)
    }

    function mb(a) {
        return a.cloneNode(!0)
    }

    function nb(a) {
        pb(a);
        for (var b = 0, c = a.childNodes || []; b < c.length; b++) nb(c[b])
    }

    function ob(a, b, c, d) {
        if (s(d)) throw Cd("offargs", "jqLite#off() does not support the `selector` argument");
        var e = qb(a, "events"),
            g = qb(a, "handle");
        g && (r(b) ? f(e, function (b, c) {
            zd(a, c, b), delete e[c]
        }) : f(b.split(" "), function (b) {
            r(c) ? (zd(a, b, e[b]), delete e[b]) : H(e[b] || [], c)
        }))
    }

    function pb(a, b) {
        var d = a[wd],
            e = vd[d];
        if (e) {
            if (b) return void delete vd[d].data[b];
            e.handle && (e.events.$destroy && e.handle({}, "$destroy"), ob(a)), delete vd[d], a[wd] = c
        }
    }

    function qb(a, b, c) {
        var d = a[wd],
            e = vd[d || -1];
        return s(c) ? (e || (a[wd] = d = ib(), e = vd[d] = {}), void(e[b] = c)) : e && e[b]
    }

    function rb(a, b, c) {
        var d = qb(a, "data"),
            e = s(c),
            f = !e && s(b),
            g = f && !t(b);
        if (d || g || qb(a, "data", d = {}), e) d[b] = c;
        else {
            if (!f) return d;
            if (g) return d && d[b];
            l(d, b)
        }
    }

    function sb(a, b) {
        return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
    }

    function tb(a, b) {
        b && a.setAttribute && f(b.split(" "), function (b) {
            a.setAttribute("class", sd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + sd(b) + " ", " ")))
        })
    }

    function ub(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function (a) {
                a = sd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            }), a.setAttribute("class", sd(c))
        }
    }

    function vb(a, b) {
        if (b) {
            b = b.nodeName || !s(b.length) || A(b) ? [b] : b;
            for (var c = 0; c < b.length; c++) a.push(b[c])
        }
    }

    function wb(a, b) {
        return xb(a, "$" + (b || "ngController") + "Controller")
    }

    function xb(a, b, d) {
        a = id(a), 9 == a[0].nodeType && (a = a.find("html"));
        for (var e = x(b) ? b : [b]; a.length;) {
            for (var f = 0, g = e.length; g > f; f++)
                if ((d = a.data(e[f])) !== c) return d;
            a = a.parent()
        }
    }

    function yb(a) {
        for (var b = 0, c = a.childNodes; b < c.length; b++) nb(c[b]);
        for (; a.firstChild;) a.removeChild(a.firstChild)
    }

    function zb(a, b) {
        var c = Ed[b.toLowerCase()];
        return c && Fd[a.nodeName] && c
    }

    function Ab(a, c) {
        var d = function (d, e) {
            if (d.preventDefault || (d.preventDefault = function () {
                d.returnValue = !1
            }), d.stopPropagation || (d.stopPropagation = function () {
                d.cancelBubble = !0
            }), d.target || (d.target = d.srcElement || b), r(d.defaultPrevented)) {
                var g = d.preventDefault;
                d.preventDefault = function () {
                    d.defaultPrevented = !0, g.call(d)
                }, d.defaultPrevented = !1
            }
            d.isDefaultPrevented = function () {
                return d.defaultPrevented || d.returnValue === !1
            };
            var h = J(c[e || d.type] || []);
            f(h, function (b) {
                b.call(a, d)
            }), 8 >= hd ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented)
        };
        return d.elem = a, d
    }

    function Bb(a) {
        var b, d = typeof a;
        return "object" == d && null !== a ? "function" == typeof (b = a.$$hashKey) ? b = a.$$hashKey() : b === c && (b = a.$$hashKey = j()) : b = a, d + ":" + b
    }

    function Cb(a) {
        f(a, this.put, this)
    }

    function Db(a) {
        var b, c, d, e;
        return "function" == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(Jd, ""), d = c.match(Gd), f(d[1].split(Hd), function (a) {
            a.replace(Id, function (a, c, d) {
                b.push(d)
            })
        })), a.$inject = b) : x(a) ? (e = a.length - 1, cb(a[e], "fn"), b = a.slice(0, e)) : cb(a, "fn", !0), b
    }

    function Eb(a) {
        function b(a) {
            return function (b, c) {
                return t(b) ? void f(b, i(a)) : a(b, c)
            }
        }

        function c(a, b) {
            if (db(a, "service"), (y(b) || x(b)) && (b = v.instantiate(b)), !b.$get) throw Kd("pget", "Provider '{0}' must define $get factory method.", a);
            return s[a + n] = b
        }

        function d(a, b) {
            return c(a, {
                $get: b
            })
        }

        function e(a, b) {
            return d(a, ["$injector",
                function (a) {
                    return a.instantiate(b)
                }
            ])
        }

        function g(a, b) {
            return d(a, q(b))
        }

        function h(a, b) {
            db(a, "constant"), s[a] = b, w[a] = b
        }

        function j(a, b) {
            var c = v.get(a + n),
                d = c.$get;
            c.$get = function () {
                var a = z.invoke(d, c);
                return z.invoke(b, null, {
                    $delegate: a
                })
            }
        }

        function k(a) {
            var b, c, d, e, g = [];
            return f(a, function (a) {
                if (!r.get(a)) {
                    r.put(a, !0);
                    try {
                        if (u(a))
                            for (b = kd(a), g = g.concat(k(b.requires)).concat(b._runBlocks), c = b._invokeQueue, d = 0, e = c.length; e > d; d++) {
                                var f = c[d],
                                    h = v.get(f[0]);
                                h[f[1]].apply(h, f[2])
                            } else y(a) ? g.push(v.invoke(a)) : x(a) ? g.push(v.invoke(a)) : cb(a, "module")
                    } catch (i) {
                        throw x(a) && (a = a[a.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Kd("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, i.stack || i.message || i)
                    }
                }
            }), g
        }

        function l(a, b) {
            function c(c) {
                if (a.hasOwnProperty(c)) {
                    if (a[c] === m) throw Kd("cdep", "Circular dependency found: {0}", p.join(" <- "));
                    return a[c]
                }
                try {
                    return p.unshift(c), a[c] = m, a[c] = b(c)
                } finally {
                    p.shift()
                }
            }

            function d(a, b, d) {
                var e, f, g, h = [],
                    i = Db(a);
                for (f = 0, e = i.length; e > f; f++) {
                    if (g = i[f], "string" != typeof g) throw Kd("itkn", "Incorrect injection token! Expected service name as string, got {0}", g);
                    h.push(d && d.hasOwnProperty(g) ? d[g] : c(g))
                }
                return a.$inject || (a = a[e]), a.apply(b, h)
            }

            function e(a, b) {
                var c, e, f = function () {};
                return f.prototype = (x(a) ? a[a.length - 1] : a).prototype, c = new f, e = d(a, c, b), t(e) || y(e) ? e : c
            }
            return {
                invoke: d,
                instantiate: e,
                get: c,
                annotate: Db,
                has: function (b) {
                    return s.hasOwnProperty(b + n) || a.hasOwnProperty(b)
                }
            }
        }
        var m = {},
            n = "Provider",
            p = [],
            r = new Cb,
            s = {
                $provide: {
                    provider: b(c),
                    factory: b(d),
                    service: b(e),
                    value: b(g),
                    constant: b(h),
                    decorator: j
                }
            },
            v = s.$injector = l(s, function () {
                throw Kd("unpr", "Unknown provider: {0}", p.join(" <- "))
            }),
            w = {},
            z = w.$injector = l(w, function (a) {
                var b = v.get(a + n);
                return z.invoke(b.$get, b)
            });
        return f(k(a), function (a) {
            z.invoke(a || o)
        }), z
    }

    function Fb() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope",
            function (b, c, d) {
                function e(a) {
                    var b = null;
                    return f(a, function (a) {
                        b || "a" !== dd(a.nodeName) || (b = a)
                    }), b
                }

                function g() {
                    var a, d = c.hash();
                    d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = e(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0)
                }
                var h = b.document;
                return a && d.$watch(function () {
                    return c.hash()
                }, function () {
                    d.$evalAsync(g)
                }), g
            }
        ]
    }

    function Gb(a, b, d, e) {
        function g(a) {
            try {
                a.apply(null, N(arguments, 1))
            } finally {
                if (s--, 0 === s)
                    for (; t.length;) try {
                        t.pop()()
                    } catch (b) {
                        d.error(b)
                    }
            }
        }

        function h(a, b) {
            ! function c() {
                f(w, function (a) {
                    a()
                }), v = b(c, a)
            }()
        }

        function i() {
            z = null, x != j.url() && (x = j.url(), f(A, function (a) {
                a(j.url())
            }))
        }
        var j = this,
            k = b[0],
            l = a.location,
            m = a.history,
            n = a.setTimeout,
            p = a.clearTimeout,
            q = {};
        j.isMock = !1;
        var s = 0,
            t = [];
        j.$$completeOutstandingRequest = g, j.$$incOutstandingRequestCount = function () {
            s++
        }, j.notifyWhenNoOutstandingRequests = function (a) {
            f(w, function (a) {
                a()
            }), 0 === s ? a() : t.push(a)
        };
        var v, w = [];
        j.addPollFn = function (a) {
            return r(v) && h(100, n), w.push(a), a
        };
        var x = l.href,
            y = b.find("base"),
            z = null;
        j.url = function (b, c) {
            if (l !== a.location && (l = a.location), b) {
                if (x == b) return;
                return x = b, e.history ? c ? m.replaceState(null, "", b) : (m.pushState(null, "", b), y.attr("href", y.attr("href"))) : (z = b, c ? l.replace(b) : l.href = b), j
            }
            return z || l.href.replace(/%27/g, "'")
        };
        var A = [],
            B = !1;
        j.onUrlChange = function (b) {
            return B || (e.history && id(a).on("popstate", i), e.hashchange ? id(a).on("hashchange", i) : j.addPollFn(i), B = !0), A.push(b), b
        }, j.baseHref = function () {
            var a = y.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : ""
        };
        var C = {},
            D = "",
            E = j.baseHref();
        j.cookies = function (a, b) {
            var e, f, g, h, i;
            if (!a) {
                if (k.cookie !== D)
                    for (D = k.cookie, f = D.split("; "), C = {}, h = 0; h < f.length; h++) g = f[h], i = g.indexOf("="), i > 0 && (a = unescape(g.substring(0, i)), C[a] === c && (C[a] = unescape(g.substring(i + 1))));
                return C
            }
            b === c ? k.cookie = escape(a) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + E).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
        }, j.defer = function (a, b) {
            var c;
            return s++, c = n(function () {
                delete q[c], g(a)
            }, b || 0), q[c] = !0, c
        }, j.defer.cancel = function (a) {
            return q[a] ? (delete q[a], p(a), g(o), !0) : !1
        }
    }

    function Hb() {
        this.$get = ["$window", "$log", "$sniffer", "$document",
            function (a, b, c, d) {
                return new Gb(a, d, b, c)
            }
        ]
    }

    function Ib() {
        this.$get = function () {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                var g = 0,
                    h = l({}, c, {
                        id: a
                    }),
                    i = {},
                    j = c && c.capacity || Number.MAX_VALUE,
                    k = {},
                    m = null,
                    n = null;
                return b[a] = {
                    put: function (a, b) {
                        var c = k[a] || (k[a] = {
                            key: a
                        });
                        return e(c), r(b) ? void 0 : (a in i || g++, i[a] = b, g > j && this.remove(n.key), b)
                    },
                    get: function (a) {
                        var b = k[a];
                        if (b) return e(b), i[a]
                    },
                    remove: function (a) {
                        var b = k[a];
                        b && (b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a], delete i[a], g--)
                    },
                    removeAll: function () {
                        i = {}, g = 0, k = {}, m = n = null
                    },
                    destroy: function () {
                        i = null, h = null, k = null, delete b[a]
                    },
                    info: function () {
                        return l({}, h, {
                            size: g
                        })
                    }
                }
            }
            var b = {};
            return a.info = function () {
                var a = {};
                return f(b, function (b, c) {
                    a[c] = b.info()
                }), a
            }, a.get = function (a) {
                return b[a]
            }, a
        }
    }

    function Jb() {
        this.$get = ["$cacheFactory",
            function (a) {
                return a("templates")
            }
        ]
    }

    function Kb(a, d) {
        var e = {},
            g = "Directive",
            h = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
            j = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
            k = /^(on[a-z]+|formaction)$/;
        this.directive = function m(b, c) {
            return db(b, "directive"), u(b) ? (bb(c, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + g, ["$injector", "$exceptionHandler",
                function (a, c) {
                    var d = [];
                    return f(e[b], function (e, f) {
                        try {
                            var g = a.invoke(e);
                            y(g) ? g = {
                                compile: q(g)
                            } : !g.compile && g.link && (g.compile = q(g.link)), g.priority = g.priority || 0, g.index = f, g.name = g.name || b, g.require = g.require || g.controller && g.name, g.restrict = g.restrict || "A", d.push(g)
                        } catch (h) {
                            c(h)
                        }
                    }), d
                }
            ])), e[b].push(c)) : f(b, i(m)), this
        }, this.aHrefSanitizationWhitelist = function (a) {
            return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (a) {
            return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri",
            function (a, d, i, m, o, r, s, v, w, z, A, B) {
                function C(a, b, c, d, e) {
                    a instanceof id || (a = id(a)), f(a, function (b, c) {
                        3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = b = id(b).wrap("<span></span>").parent()[0])
                    });
                    var g = E(a, b, a, c, d, e);
                    return D(a, "ng-scope"),
                        function (b, c, d) {
                            bb(b, "scope");
                            var e = c ? Dd.clone.call(a) : a;
                            f(d, function (a, b) {
                                e.data("$" + b + "Controller", a)
                            });
                            for (var h = 0, i = e.length; i > h; h++) {
                                var j = e[h],
                                    k = j.nodeType;
                                (1 === k || 9 === k) && e.eq(h).data("$scope", b)
                            }
                            return c && c(e, b), g && g(b, e, e), e
                        }
                }

                function D(a, b) {
                    try {
                        a.addClass(b)
                    } catch (c) {}
                }

                function E(a, b, d, e, f, g) {
                    function h(a, d, e, f) {
                        var g, h, i, j, k, l, m, n, p, q = d.length,
                            r = new Array(q);
                        for (m = 0; q > m; m++) r[m] = d[m];
                        for (m = 0, p = 0, n = o.length; n > m; p++) i = r[p], g = o[m++], h = o[m++], j = id(i), g ? (g.scope ? (k = a.$new(), j.data("$scope", k)) : k = a, l = g.transclude, l || !f && b ? g(h, k, i, e, F(a, l || b)) : g(h, k, i, e, f)) : h && h(a, i.childNodes, c, f)
                    }
                    for (var i, j, k, l, m, n, o = [], p = 0; p < a.length; p++) i = new $, j = G(a[p], [], i, 0 === p ? e : c, f), k = j.length ? L(j, a[p], i, b, d, null, [], [], g) : null, k && k.scope && D(id(a[p]), "ng-scope"), m = k && k.terminal || !(l = a[p].childNodes) || !l.length ? null : E(l, k ? k.transclude : b), o.push(k, m), n = n || k || m, g = null;
                    return n ? h : null
                }

                function F(a, b) {
                    return function (c, d, e) {
                        var f = !1;
                        c || (c = a.$new(), c.$$transcluded = !0, f = !0);
                        var g = b(c, d, e);
                        return f && g.on("$destroy", O(c, c.$destroy)), g
                    }
                }

                function G(a, b, c, d, e) {
                    var f, g, i = a.nodeType,
                        k = c.$attr;
                    switch (i) {
                    case 1:
                        P(b, Lb(ld(a).toLowerCase()), "E", d, e);
                        for (var l, m, n, o, p, q = a.attributes, r = 0, s = q && q.length; s > r; r++) {
                            var t = !1,
                                v = !1;
                            if (l = q[r], !hd || hd >= 8 || l.specified) {
                                m = l.name, o = Lb(m), eb.test(o) && (m = _(o.substr(6), "-"));
                                var w = o.replace(/(Start|End)$/, "");
                                o === w + "Start" && (t = m, v = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), n = Lb(m.toLowerCase()), k[n] = m, c[n] = p = sd(l.value), zb(a, n) && (c[n] = !0), X(a, b, p, n), P(b, n, "A", d, e, t, v)
                            }
                        }
                        if (g = a.className, u(g) && "" !== g)
                            for (; f = j.exec(g);) n = Lb(f[2]), P(b, n, "C", d, e) && (c[n] = sd(f[3])), g = g.substr(f.index + f[0].length);
                        break;
                    case 3:
                        V(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            f = h.exec(a.nodeValue), f && (n = Lb(f[1]), P(b, n, "M", d, e) && (c[n] = sd(f[2])))
                        } catch (x) {}
                    }
                    return b.sort(S), b
                }

                function H(a, b, c) {
                    var d = [],
                        e = 0;
                    if (b && a.hasAttribute && a.hasAttribute(b)) {
                        do {
                            if (!a) throw Nd("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                            1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                        } while (e > 0)
                    } else d.push(a);
                    return id(d)
                }

                function I(a, b, c) {
                    return function (d, e, f, g, h) {
                        return e = H(e[0], b, c), a(d, e, f, g, h)
                    }
                }

                function L(a, e, g, h, j, k, l, m, n) {
                    function o(a, b, c, d) {
                        a && (c && (a = I(a, c, d)), a.require = w.require, (O === w || w.$$isolateScope) && (a = Z(a, {
                            isolateScope: !0
                        })), l.push(a)), b && (c && (b = I(b, c, d)), b.require = w.require, (O === w || w.$$isolateScope) && (b = Z(b, {
                            isolateScope: !0
                        })), m.push(b))
                    }

                    function p(a, b, c) {
                        var d, e = "data",
                            g = !1;
                        if (u(a)) {
                            for (;
                                "^" == (d = a.charAt(0)) || "?" == d;) a = a.substr(1), "^" == d && (e = "inheritedData"), g = g || "?" == d;
                            if (d = null, c && "data" === e && (d = c[a]), d = d || b[e]("$" + a + "Controller"), !d && !g) throw Nd("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, z);
                            return d
                        }
                        return x(a) && (d = [], f(a, function (a) {
                            d.push(p(a, b, c))
                        })), d
                    }

                    function q(a, b, h, j, k) {
                        function n(a, b) {
                            var d;
                            return arguments.length < 2 && (b = a, a = c), W && (d = z), k(a, b, d)
                        }
                        var o, q, t, u, v, w, x, y, z = {};
                        if (o = e === h ? g : J(g, new $(id(h), g.$attr)), q = o.$$element, O) {
                            var A = /^\s*([@=&])(\??)\s*(\w*)\s*$/,
                                B = id(h);
                            x = b.$new(!0), P && P === O.$$originalDirective ? B.data("$isolateScope", x) : B.data("$isolateScopeNoTemplate", x), D(B, "ng-isolate-scope"), f(O.scope, function (a, c) {
                                var e, f, g, h, i = a.match(A) || [],
                                    j = i[3] || c,
                                    k = "?" == i[2],
                                    l = i[1];
                                switch (x.$$isolateBindings[c] = l + j, l) {
                                case "@":
                                    o.$observe(j, function (a) {
                                        x[c] = a
                                    }), o.$$observers[j].$$scope = b, o[j] && (x[c] = d(o[j])(b));
                                    break;
                                case "=":
                                    if (k && !o[j]) return;
                                    f = r(o[j]), h = f.literal ? K : function (a, b) {
                                        return a === b
                                    }, g = f.assign || function () {
                                        throw e = x[c] = f(b), Nd("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", o[j], O.name)
                                    }, e = x[c] = f(b), x.$watch(function () {
                                        var a = f(b);
                                        return h(a, x[c]) || (h(a, e) ? g(b, a = x[c]) : x[c] = a), e = a
                                    }, null, f.literal);
                                    break;
                                case "&":
                                    f = r(o[j]), x[c] = function (a) {
                                        return f(b, a)
                                    };
                                    break;
                                default:
                                    throw Nd("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", O.name, c, a)
                                }
                            })
                        }
                        for (y = k && n, L && f(L, function (a) {
                            var c, d = {
                                $scope: a === O || a.$$isolateScope ? x : b,
                                $element: q,
                                $attrs: o,
                                $transclude: y
                            };
                            w = a.controller, "@" == w && (w = o[a.name]), c = s(w, d), z[a.name] = c, W || q.data("$" + a.name + "Controller", c), a.controllerAs && (d.$scope[a.controllerAs] = c)
                        }), t = 0, u = l.length; u > t; t++) try {
                            v = l[t], v(v.isolateScope ? x : b, q, o, v.require && p(v.require, q, z), y)
                        } catch (C) {
                            i(C, T(q))
                        }
                        var E = b;
                        for (O && (O.template || null === O.templateUrl) && (E = x), a && a(E, h.childNodes, c, k), t = m.length - 1; t >= 0; t--) try {
                            v = m[t], v(v.isolateScope ? x : b, q, o, v.require && p(v.require, q, z), y)
                        } catch (C) {
                            i(C, T(q))
                        }
                    }
                    n = n || {};
                    for (var v, w, z, A, B, E, F = -Number.MAX_VALUE, L = n.controllerDirectives, O = n.newIsolateScopeDirective, P = n.templateDirective, S = n.nonTlbTranscludeDirective, V = !1, W = !1, X = g.$$element = id(e), _ = k, ab = h, bb = 0, cb = a.length; cb > bb; bb++) {
                        w = a[bb];
                        var eb = w.$$start,
                            fb = w.$$end;
                        if (eb && (X = H(e, eb, fb)), A = c, F > w.priority) break;
                        if ((E = w.scope) && (v = v || w, w.templateUrl || (U("new/isolated scope", O, w, X), t(E) && (O = w))), z = w.name, !w.templateUrl && w.controller && (E = w.controller, L = L || {}, U("'" + z + "' controller", L[z], w, X), L[z] = w), (E = w.transclude) && (V = !0, w.$$tlb || (U("transclusion", S, w, X), S = w), "element" == E ? (W = !0, F = w.priority, A = H(e, eb, fb), X = g.$$element = id(b.createComment(" " + z + ": " + g[z] + " ")), e = X[0], Y(j, id(N(A)), e), ab = C(A, h, F, _ && _.name, {
                            nonTlbTranscludeDirective: S
                        })) : (A = id(mb(e)).contents(), X.empty(), ab = C(A, h))), w.template)
                            if (U("template", P, w, X), P = w, E = y(w.template) ? w.template(X, g) : w.template, E = db(E), w.replace) {
                                if (_ = w, A = id("<div>" + sd(E) + "</div>").contents(), e = A[0], 1 != A.length || 1 !== e.nodeType) throw Nd("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", z, "");
                                Y(j, X, e);
                                var gb = {
                                        $attr: {}
                                    },
                                    hb = G(e, [], gb),
                                    ib = a.splice(bb + 1, a.length - (bb + 1));
                                O && M(hb), a = a.concat(hb).concat(ib), Q(g, gb), cb = a.length
                            } else X.html(E);
                        if (w.templateUrl) U("template", P, w, X), P = w, w.replace && (_ = w), q = R(a.splice(bb, a.length - bb), X, g, j, ab, l, m, {
                            controllerDirectives: L,
                            newIsolateScopeDirective: O,
                            templateDirective: P,
                            nonTlbTranscludeDirective: S
                        }), cb = a.length;
                        else if (w.compile) try {
                            B = w.compile(X, g, ab), y(B) ? o(null, B, eb, fb) : B && o(B.pre, B.post, eb, fb)
                        } catch (jb) {
                            i(jb, T(X))
                        }
                        w.terminal && (q.terminal = !0, F = Math.max(F, w.priority))
                    }
                    return q.scope = v && v.scope === !0, q.transclude = V && ab, q
                }

                function M(a) {
                    for (var b = 0, c = a.length; c > b; b++) a[b] = n(a[b], {
                        $$isolateScope: !0
                    })
                }

                function P(b, d, f, h, j, k, l) {
                    if (d === j) return null;
                    var m = null;
                    if (e.hasOwnProperty(d))
                        for (var o, p = a.get(d + g), q = 0, r = p.length; r > q; q++) try {
                            o = p[q], (h === c || h > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
                                $$start: k,
                                $$end: l
                            })), b.push(o), m = o)
                        } catch (s) {
                            i(s)
                        }
                    return m
                }

                function Q(a, b) {
                    var c = b.$attr,
                        d = a.$attr,
                        e = a.$$element;
                    f(a, function (d, e) {
                        "$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                    }), f(b, function (b, f) {
                        "class" == f ? (D(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                    })
                }

                function R(a, b, c, d, e, g, h, i) {
                    var j, k, n = [],
                        p = b[0],
                        q = a.shift(),
                        r = l({}, q, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: q
                        }),
                        s = y(q.templateUrl) ? q.templateUrl(b, c) : q.templateUrl;
                    return b.empty(), m.get(z.getTrustedResourceUrl(s), {
                            cache: o
                        }).success(function (l) {
                            var m, o, u, v;
                            if (l = db(l), q.replace) {
                                if (u = id("<div>" + sd(l) + "</div>").contents(), m = u[0], 1 != u.length || 1 !== m.nodeType) throw Nd("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", q.name, s);
                                o = {
                                    $attr: {}
                                }, Y(d, b, m);
                                var w = G(m, [], o);
                                t(q.scope) && M(w), a = w.concat(a), Q(c, o)
                            } else m = p, b.html(l);
                            for (a.unshift(r), j = L(a, m, c, e, b, q, g, h, i), f(d, function (a, c) {
                                a == m && (d[c] = b[0])
                            }), k = E(b[0].childNodes, e); n.length;) {
                                var x = n.shift(),
                                    y = n.shift(),
                                    z = n.shift(),
                                    A = n.shift(),
                                    B = b[0];
                                y !== p && (B = mb(m), Y(z, id(y), B)), v = j.transclude ? F(x, j.transclude) : A, j(k, x, B, d, v)
                            }
                            n = null
                        }).error(function (a, b, c, d) {
                            throw Nd("tpload", "Failed to load template: {0}", d.url)
                        }),
                        function (a, b, c, d, e) {
                            n ? (n.push(b), n.push(c), n.push(d), n.push(e)) : j(k, b, c, d, e)
                        }
                }

                function S(a, b) {
                    var c = b.priority - a.priority;
                    return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                }

                function U(a, b, c, d) {
                    if (b) throw Nd("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d))
                }

                function V(a, b) {
                    var c = d(b, !0);
                    c && a.push({
                        priority: 0,
                        compile: q(function (a, b) {
                            var d = b.parent(),
                                e = d.data("$binding") || [];
                            e.push(c), D(d.data("$binding", e), "ng-binding"), a.$watch(c, function (a) {
                                b[0].nodeValue = a
                            })
                        })
                    })
                }

                function W(a, b) {
                    if ("srcdoc" == b) return z.HTML;
                    var c = ld(a);
                    return "xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b) ? z.RESOURCE_URL : void 0
                }

                function X(a, b, c, e) {
                    var f = d(c, !0);
                    if (f) {
                        if ("multiple" === e && "SELECT" === ld(a)) throw Nd("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
                        b.push({
                            priority: 100,
                            compile: function () {
                                return {
                                    pre: function (b, c, g) {
                                        var h = g.$$observers || (g.$$observers = {});
                                        if (k.test(e)) throw Nd("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                        f = d(g[e], !0, W(a, e)), f && (g[e] = f(b), (h[e] || (h[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || b).$watch(f, function (a, b) {
                                            "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function Y(a, c, d) {
                    var e, f, g = c[0],
                        h = c.length,
                        i = g.parentNode;
                    if (a)
                        for (e = 0, f = a.length; f > e; e++)
                            if (a[e] == g) {
                                a[e++] = d;
                                for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                                a.length -= h - 1;
                                break
                            }
                    i && i.replaceChild(d, g);
                    var m = b.createDocumentFragment();
                    m.appendChild(g), d[id.expando] = g[id.expando];
                    for (var n = 1, o = c.length; o > n; n++) {
                        var p = c[n];
                        id(p).remove(), m.appendChild(p), delete c[n]
                    }
                    c[0] = d, c.length = 1
                }

                function Z(a, b) {
                    return l(function () {
                        return a.apply(null, arguments)
                    }, a, b)
                }
                var $ = function (a, b) {
                    this.$$element = a, this.$attr = b || {}
                };
                $.prototype = {
                    $normalize: Lb,
                    $addClass: function (a) {
                        a && a.length > 0 && A.addClass(this.$$element, a)
                    },
                    $removeClass: function (a) {
                        a && a.length > 0 && A.removeClass(this.$$element, a)
                    },
                    $updateClass: function (a, b) {
                        this.$removeClass(Mb(b, a)), this.$addClass(Mb(a, b))
                    },
                    $set: function (a, b, d, e) {
                        var g, h = zb(this.$$element[0], a);
                        h && (this.$$element.prop(a, b), e = h), this[a] = b, e ? this.$attr[a] = e : (e = this.$attr[a], e || (this.$attr[a] = e = _(a, "-"))), g = ld(this.$$element), ("A" === g && "href" === a || "IMG" === g && "src" === a) && (this[a] = b = B(b, "src" === a)), d !== !1 && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                        var j = this.$$observers;
                        j && f(j[a], function (a) {
                            try {
                                a(b)
                            } catch (c) {
                                i(c)
                            }
                        })
                    },
                    $observe: function (a, b) {
                        var c = this,
                            d = c.$$observers || (c.$$observers = {}),
                            e = d[a] || (d[a] = []);
                        return e.push(b), v.$evalAsync(function () {
                            e.$$inter || b(c[a])
                        }), b
                    }
                };
                var ab = d.startSymbol(),
                    cb = d.endSymbol(),
                    db = "{{" == ab || "}}" == cb ? p : function (a) {
                        return a.replace(/\{\{/g, ab).replace(/}}/g, cb)
                    },
                    eb = /^ngAttr[A-Z]/;
                return C
            }
        ]
    }

    function Lb(a) {
        return jb(a.replace(Od, ""))
    }

    function Mb(a, b) {
        var c = "",
            d = a.split(/\s+/),
            e = b.split(/\s+/);
        a: for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)
                if (g == e[h]) continue a;
            c += (c.length > 0 ? " " : "") + g
        }
        return c
    }

    function Nb() {
        var a = {},
            b = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (b, c) {
            db(b, "controller"), t(b) ? l(a, b) : a[b] = c
        }, this.$get = ["$injector", "$window",
            function (c, e) {
                return function (f, g) {
                    var h, i, j, k;
                    if (u(f) && (i = f.match(b), j = i[1], k = i[3], f = a.hasOwnProperty(j) ? a[j] : eb(g.$scope, j, !0) || eb(e, j, !0), cb(f, j, !0)), h = c.instantiate(f, g), k) {
                        if (!g || "object" != typeof g.$scope) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", j || f.name, k);
                        g.$scope[k] = h
                    }
                    return h
                }
            }
        ]
    }

    function Ob() {
        this.$get = ["$window",
            function (a) {
                return id(a.document)
            }
        ]
    }

    function Pb() {
        this.$get = ["$log",
            function (a) {
                return function () {
                    a.error.apply(a, arguments)
                }
            }
        ]
    }

    function Qb(a) {
        var b, c, d, e = {};
        return a ? (f(a.split("\n"), function (a) {
            d = a.indexOf(":"), b = dd(sd(a.substr(0, d))), c = sd(a.substr(d + 1)), b && (e[b] ? e[b] += ", " + c : e[b] = c)
        }), e) : e
    }

    function Rb(a) {
        var b = t(a) ? a : c;
        return function (c) {
            return b || (b = Qb(a)), c ? b[dd(c)] || null : b
        }
    }

    function Sb(a, b, c) {
        return y(c) ? c(a, b) : (f(c, function (c) {
            a = c(a, b)
        }), a)
    }

    function Tb(a) {
        return a >= 200 && 300 > a
    }

    function Ub() {
        var a = /^\s*(\[|\{[^\{])/,
            b = /[\}\]]\s*$/,
            d = /^\)\]\}',?\n/,
            e = {
                "Content-Type": "application/json;charset=utf-8"
            },
            g = this.defaults = {
                transformResponse: [
                    function (c) {
                        return u(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = R(c))), c
                    }
                ],
                transformRequest: [
                    function (a) {
                        return t(a) && !C(a) ? Q(a) : a
                    }
                ],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: e,
                    put: e,
                    patch: e
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            i = this.interceptors = [],
            j = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
            function (a, b, d, e, k, m) {
                function n(a) {
                    function d(a) {
                        var b = l({}, a, {
                            data: Sb(a.data, a.headers, h.transformResponse)
                        });
                        return Tb(a.status) ? b : k.reject(b)
                    }

                    function e(a) {
                        function b(a) {
                            var b;
                            f(a, function (c, d) {
                                y(c) && (b = c(), null != b ? a[d] = b : delete a[d])
                            })
                        }
                        var c, d, e, h = g.headers,
                            i = l({}, a.headers);
                        h = l({}, h.common, h[dd(a.method)]), b(h), b(i);
                        a: for (c in h) {
                            d = dd(c);
                            for (e in i)
                                if (dd(e) === d) continue a;
                            i[c] = h[c]
                        }
                        return i
                    }
                    var h = {
                            transformRequest: g.transformRequest,
                            transformResponse: g.transformResponse
                        },
                        i = e(a);
                    l(h, a), h.headers = i, h.method = ed(h.method);
                    var j = Gc(h.url) ? b.cookies()[h.xsrfCookieName || g.xsrfCookieName] : c;
                    j && (i[h.xsrfHeaderName || g.xsrfHeaderName] = j);
                    var m = function (a) {
                            i = a.headers;
                            var b = Sb(a.data, Rb(i), a.transformRequest);
                            return r(a.data) && f(i, function (a, b) {
                                "content-type" === dd(b) && delete i[b]
                            }), r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials), q(a, b, i).then(d, d)
                        },
                        n = [m, c],
                        o = k.when(h);
                    for (f(z, function (a) {
                        (a.request || a.requestError) && n.unshift(a.request, a.requestError), (a.response || a.responseError) && n.push(a.response, a.responseError)
                    }); n.length;) {
                        var p = n.shift(),
                            s = n.shift();
                        o = o.then(p, s)
                    }
                    return o.success = function (a) {
                        return o.then(function (b) {
                            a(b.data, b.status, b.headers, h)
                        }), o
                    }, o.error = function (a) {
                        return o.then(null, function (b) {
                            a(b.data, b.status, b.headers, h)
                        }), o
                    }, o
                }

                function o() {
                    f(arguments, function (a) {
                        n[a] = function (b, c) {
                            return n(l(c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
                }

                function p() {
                    f(arguments, function (a) {
                        n[a] = function (b, c, d) {
                            return n(l(d || {}, {
                                method: a,
                                url: b,
                                data: c
                            }))
                        }
                    })
                }

                function q(b, c, d) {
                    function f(a, b, c) {
                        j && (Tb(a) ? j.put(p, [a, b, Qb(c)]) : j.remove(p)), h(b, a, c), e.$$phase || e.$apply()
                    }

                    function h(a, c, d) {
                        c = Math.max(c, 0), (Tb(c) ? m.resolve : m.reject)({
                            data: a,
                            status: c,
                            headers: Rb(d),
                            config: b
                        })
                    }

                    function i() {
                        var a = G(n.pendingRequests, b); - 1 !== a && n.pendingRequests.splice(a, 1)
                    }
                    var j, l, m = k.defer(),
                        o = m.promise,
                        p = v(b.url, b.params);
                    if (n.pendingRequests.push(b), o.then(i, i), (b.cache || g.cache) && b.cache !== !1 && "GET" == b.method && (j = t(b.cache) ? b.cache : t(g.cache) ? g.cache : w), j)
                        if (l = j.get(p), s(l)) {
                            if (l.then) return l.then(i, i), l;
                            x(l) ? h(l[1], l[0], I(l[2])) : h(l, 200, {})
                        } else j.put(p, o);
                    return r(l) && a(b.method, p, c, f, d, b.timeout, b.withCredentials, b.responseType), o
                }

                function v(a, b) {
                    if (!b) return a;
                    var c = [];
                    return h(b, function (a, b) {
                        null === a || r(a) || (x(a) || (a = [a]), f(a, function (a) {
                            t(a) && (a = Q(a)), c.push(Y(b) + "=" + Y(a))
                        }))
                    }), a + (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")
                }
                var w = d("$http"),
                    z = [];
                return f(i, function (a) {
                    z.unshift(u(a) ? m.get(a) : m.invoke(a))
                }), f(j, function (a, b) {
                    var c = u(a) ? m.get(a) : m.invoke(a);
                    z.splice(b, 0, {
                        response: function (a) {
                            return c(k.when(a))
                        },
                        responseError: function (a) {
                            return c(k.reject(a))
                        }
                    })
                }), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put"), n.defaults = g, n
            }
        ]
    }

    function Vb() {
        this.$get = ["$browser", "$window", "$document",
            function (a, b, c) {
                return Wb(a, Pd, a.defer, b.angular.callbacks, c[0])
            }
        ]
    }

    function Wb(a, b, c, d, e) {
        function g(a, b) {
            var c = e.createElement("script"),
                d = function () {
                    c.onreadystatechange = c.onload = c.onerror = null, e.body.removeChild(c), b && b()
                };
            return c.type = "text/javascript", c.src = a, hd && 8 >= hd ? c.onreadystatechange = function () {
                /loaded|complete/.test(c.readyState) && d()
            } : c.onload = c.onerror = function () {
                d()
            }, e.body.appendChild(c), d
        }
        var h = -1;
        return function (e, i, j, k, l, m, n, p) {
            function q() {
                t = h, v && v(), w && w.abort()
            }

            function r(b, d, e, f) {
                var g = Fc(i).protocol;
                x && c.cancel(x), v = w = null, d = "file" == g && 0 === d ? e ? 200 : 404 : d, d = 1223 == d ? 204 : d, b(d, e, f), a.$$completeOutstandingRequest(o)
            }
            var t;
            if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == dd(e)) {
                var u = "_" + (d.counter++).toString(36);
                d[u] = function (a) {
                    d[u].data = a
                };
                var v = g(i.replace("JSON_CALLBACK", "angular.callbacks." + u), function () {
                    d[u].data ? r(k, 200, d[u].data) : r(k, t || -2), delete d[u]
                })
            } else {
                var w = new b;
                w.open(e, i, !0), f(l, function (a, b) {
                    s(a) && w.setRequestHeader(b, a)
                }), w.onreadystatechange = function () {
                    if (4 == w.readyState) {
                        var a = null,
                            b = null;
                        t !== h && (a = w.getAllResponseHeaders(), b = w.responseType ? w.response : w.responseText), r(k, t || w.status, b, a)
                    }
                }, n && (w.withCredentials = !0), p && (w.responseType = p), w.send(j || null)
            } if (m > 0) var x = c(q, m);
            else m && m.then && m.then(q)
        }
    }

    function Xb() {
        var a = "{{",
            b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function (a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", "$exceptionHandler", "$sce",
            function (c, d, e) {
                function f(f, i, j) {
                    for (var k, l, m, n, o = 0, p = [], q = f.length, s = !1, t = []; q > o;) - 1 != (k = f.indexOf(a, o)) && -1 != (l = f.indexOf(b, k + g)) ? (o != k && p.push(f.substring(o, k)), p.push(m = c(n = f.substring(k + g, l))), m.exp = n, o = l + h, s = !0) : (o != q && p.push(f.substring(o)), o = q);
                    if ((q = p.length) || (p.push(""), q = 1), j && p.length > 1) throw Qd("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
                    return !i || s ? (t.length = q, m = function (a) {
                        try {
                            for (var b, c = 0, g = q; g > c; c++) "function" == typeof (b = p[c]) && (b = b(a), b = j ? e.getTrusted(j, b) : e.valueOf(b), null === b || r(b) ? b = "" : "string" != typeof b && (b = Q(b))), t[c] = b;
                            return t.join("")
                        } catch (h) {
                            var i = Qd("interr", "Can't interpolate: {0}\n{1}", f, h.toString());
                            d(i)
                        }
                    }, m.exp = f, m.parts = p, m) : void 0
                }
                var g = a.length,
                    h = b.length;
                return f.startSymbol = function () {
                    return a
                }, f.endSymbol = function () {
                    return b
                }, f
            }
        ]
    }

    function Yb() {
        this.$get = ["$rootScope", "$window", "$q",
            function (a, b, c) {
                function d(d, f, g, h) {
                    var i = b.setInterval,
                        j = b.clearInterval,
                        k = c.defer(),
                        l = k.promise,
                        m = 0,
                        n = s(h) && !h;
                    return g = s(g) ? g : 0, l.then(null, null, d), l.$$intervalId = i(function () {
                        k.notify(m++), g > 0 && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]), n || a.$apply()
                    }, f), e[l.$$intervalId] = k, l
                }
                var e = {};
                return d.cancel = function (a) {
                    return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1
                }, d
            }
        ]
    }

    function Zb() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function (a) {
                    return 1 === a ? "one" : "other"
                }
            }
        }
    }

    function $b(a) {
        for (var b = a.split("/"), c = b.length; c--;) b[c] = X(b[c]);
        return b.join("/")
    }

    function _b(a, b, c) {
        var d = Fc(a, c);
        b.$$protocol = d.protocol, b.$$host = d.hostname, b.$$port = m(d.port) || Sd[d.protocol] || null
    }

    function ac(a, b, c) {
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var e = Fc(a, c);
        b.$$path = decodeURIComponent(d && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), b.$$search = V(e.search), b.$$hash = decodeURIComponent(e.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function bc(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
    }

    function cc(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }

    function dc(a) {
        return a.substr(0, cc(a).lastIndexOf("/") + 1)
    }

    function ec(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
    }

    function fc(a, b) {
        this.$$html5 = !0, b = b || "";
        var d = dc(a);
        _b(a, this, a), this.$$parse = function (b) {
            var c = bc(d, b);
            if (!u(c)) throw Td("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', b, d);
            ac(c, this, a), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var a = W(this.$$search),
                b = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = $b(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
        }, this.$$rewrite = function (e) {
            var f, g;
            return (f = bc(a, e)) !== c ? (g = f, (f = bc(b, f)) !== c ? d + (bc("/", f) || f) : a + g) : (f = bc(d, e)) !== c ? d + f : d == e + "/" ? d : void 0
        }
    }

    function gc(a, b) {
        var c = dc(a);
        _b(a, this, a), this.$$parse = function (d) {
            function e(a, b, c) {
                var d, e = /^\/?.*?:(\/.*)/;
                return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
            }
            var f = bc(a, d) || bc(c, d),
                g = "#" == f.charAt(0) ? bc(b, f) : this.$$html5 ? f : "";
            if (!u(g)) throw Td("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', d, b);
            ac(g, this, a), this.$$path = e(this.$$path, g, a), this.$$compose()
        }, this.$$compose = function () {
            var c = W(this.$$search),
                d = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = $b(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
        }, this.$$rewrite = function (b) {
            return cc(a) == cc(b) ? b : void 0
        }
    }

    function hc(a, b) {
        this.$$html5 = !0, gc.apply(this, arguments);
        var c = dc(a);
        this.$$rewrite = function (d) {
            var e;
            return a == cc(d) ? d : (e = bc(c, d)) ? a + b + e : c === d + "/" ? c : void 0
        }
    }

    function ic(a) {
        return function () {
            return this[a]
        }
    }

    function jc(a, b) {
        return function (c) {
            return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }

    function kc() {
        var b = "",
            c = !1;
        this.hashPrefix = function (a) {
            return s(a) ? (b = a, this) : b
        }, this.html5Mode = function (a) {
            return s(a) ? (c = a, this) : c
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement",
            function (d, e, f, g) {
                function h(a) {
                    d.$broadcast("$locationChangeSuccess", i.absUrl(), a)
                }
                var i, j, k, l = e.baseHref(),
                    m = e.url();
                c ? (k = ec(m) + (l || "/"), j = f.history ? fc : hc) : (k = cc(m), j = gc), i = new j(k, "#" + b), i.$$parse(i.$$rewrite(m)), g.on("click", function (b) {
                    if (!b.ctrlKey && !b.metaKey && 2 != b.which) {
                        for (var c = id(b.target);
                            "a" !== dd(c[0].nodeName);)
                            if (c[0] === g[0] || !(c = c.parent())[0]) return;
                        var f = c.prop("href");
                        t(f) && "[object SVGAnimatedString]" === f.toString() && (f = Fc(f.animVal).href);
                        var h = i.$$rewrite(f);
                        f && !c.attr("target") && h && !b.isDefaultPrevented() && (b.preventDefault(), h != e.url() && (i.$$parse(h), d.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                    }
                }), i.absUrl() != m && e.url(i.absUrl(), !0), e.onUrlChange(function (a) {
                    if (i.absUrl() != a) {
                        if (d.$broadcast("$locationChangeStart", a, i.absUrl()).defaultPrevented) return void e.url(i.absUrl());
                        d.$evalAsync(function () {
                            var b = i.absUrl();
                            i.$$parse(a), h(b)
                        }), d.$$phase || d.$digest()
                    }
                });
                var n = 0;
                return d.$watch(function () {
                    var a = e.url(),
                        b = i.$$replace;
                    return n && a == i.absUrl() || (n++, d.$evalAsync(function () {
                        d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), h(a))
                    })), i.$$replace = !1, n
                }), i
            }
        ]
    }

    function lc() {
        var a = !0,
            b = this;
        this.debugEnabled = function (b) {
            return s(b) ? (a = b, this) : a
        }, this.$get = ["$window",
            function (c) {
                function d(a) {
                    return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
                }

                function e(a) {
                    var b = c.console || {},
                        e = b[a] || b.log || o,
                        g = !1;
                    try {
                        g = !!e.apply
                    } catch (h) {}
                    return g ? function () {
                        var a = [];
                        return f(arguments, function (b) {
                            a.push(d(b))
                        }), e.apply(b, a)
                    } : function (a, b) {
                        e(a, null == b ? "" : b)
                    }
                }
                return {
                    log: e("log"),
                    info: e("info"),
                    warn: e("warn"),
                    error: e("error"),
                    debug: function () {
                        var c = e("debug");
                        return function () {
                            a && c.apply(b, arguments)
                        }
                    }()
                }
            }
        ]
    }

    function mc(a, b) {
        if ("constructor" === a) throw Vd("isecfld", 'Referencing "constructor" field in Angular expressions is disallowed! Expression: {0}', b);
        return a
    }

    function nc(a, b) {
        if (a) {
            if (a.constructor === a) throw Vd("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.document && a.location && a.alert && a.setInterval) throw Vd("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.on && a.find)) throw Vd("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b)
        }
        return a
    }

    function oc(a, b, d, e, f) {
        f = f || {};
        for (var g, h = b.split("."), i = 0; h.length > 1; i++) {
            g = mc(h.shift(), e);
            var j = a[g];
            j || (j = {}, a[g] = j), a = j, a.then && f.unwrapPromises && (Ud(e), "$$v" in a || ! function (a) {
                a.then(function (b) {
                    a.$$v = b
                })
            }(a), a.$$v === c && (a.$$v = {}), a = a.$$v)
        }
        return g = mc(h.shift(), e), a[g] = d, d
    }

    function pc(a, b, d, e, f, g, h) {
        return mc(a, g), mc(b, g), mc(d, g), mc(e, g), mc(f, g), h.unwrapPromises ? function (h, i) {
            var j, k = i && i.hasOwnProperty(a) ? i : h;
            return null == k ? k : (k = k[a], k && k.then && (Ud(g), "$$v" in k || (j = k, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), k = k.$$v), null == k ? b ? c : k : (k = k[b], k && k.then && (Ud(g), "$$v" in k || (j = k, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), k = k.$$v), null == k ? d ? c : k : (k = k[d], k && k.then && (Ud(g), "$$v" in k || (j = k, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), k = k.$$v), null == k ? e ? c : k : (k = k[e], k && k.then && (Ud(g), "$$v" in k || (j = k, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), k = k.$$v), null == k ? f ? c : k : (k = k[f], k && k.then && (Ud(g), "$$v" in k || (j = k, j.$$v = c, j.then(function (a) {
                j.$$v = a
            })), k = k.$$v), k)))))
        } : function (g, h) {
            var i = h && h.hasOwnProperty(a) ? h : g;
            return null == i ? i : (i = i[a], null == i ? b ? c : i : (i = i[b], null == i ? d ? c : i : (i = i[d], null == i ? e ? c : i : (i = i[e], null == i ? f ? c : i : i = i[f]))))
        }
    }

    function qc(a, b) {
        return mc(a, b),
            function (b, d) {
                return null == b ? c : (d && d.hasOwnProperty(a) ? d : b)[a]
            }
    }

    function rc(a, b, d) {
        return mc(a, d), mc(b, d),
            function (d, e) {
                return null == d ? c : (d = (e && e.hasOwnProperty(a) ? e : d)[a], null == d ? c : d[b])
            }
    }

    function sc(a, b, d) {
        if (_d.hasOwnProperty(a)) return _d[a];
        var e, g = a.split("."),
            h = g.length;
        if (b.unwrapPromises || 1 !== h)
            if (b.unwrapPromises || 2 !== h)
                if (b.csp) e = 6 > h ? pc(g[0], g[1], g[2], g[3], g[4], d, b) : function (a, e) {
                    var f, i = 0;
                    do f = pc(g[i++], g[i++], g[i++], g[i++], g[i++], d, b)(a, e), e = c, a = f; while (h > i);
                    return f
                };
                else {
                    var i = "var p;\n";
                    f(g, function (a, c) {
                        mc(a, d), i += "if(s == null) return undefined;\ns=" + (c ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n' + (b.unwrapPromises ? 'if (s && s.then) {\n pw("' + d.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
                    }), i += "return s;";
                    var j = new Function("s", "k", "pw", i);
                    j.toString = q(i), e = b.unwrapPromises ? function (a, b) {
                        return j(a, b, Ud)
                    } : j
                } else e = rc(g[0], g[1], d);
        else e = qc(g[0], d);
        return "hasOwnProperty" !== a && (_d[a] = e), e
    }

    function tc() {
        var a = {},
            b = {
                csp: !1,
                unwrapPromises: !1,
                logPromiseWarnings: !0
            };
        this.unwrapPromises = function (a) {
            return s(a) ? (b.unwrapPromises = !!a, this) : b.unwrapPromises
        }, this.logPromiseWarnings = function (a) {
            return s(a) ? (b.logPromiseWarnings = a, this) : b.logPromiseWarnings
        }, this.$get = ["$filter", "$sniffer", "$log",
            function (c, d, e) {
                return b.csp = d.csp, Ud = function (a) {
                        b.logPromiseWarnings && !Wd.hasOwnProperty(a) && (Wd[a] = !0, e.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
                    },
                    function (d) {
                        var e;
                        switch (typeof d) {
                        case "string":
                            if (a.hasOwnProperty(d)) return a[d];
                            var f = new Zd(b),
                                g = new $d(f, c, b);
                            return e = g.parse(d, !1), "hasOwnProperty" !== d && (a[d] = e), e;
                        case "function":
                            return d;
                        default:
                            return o
                        }
                    }
            }
        ]
    }

    function uc() {
        this.$get = ["$rootScope", "$exceptionHandler",
            function (a, b) {
                return vc(function (b) {
                    a.$evalAsync(b)
                }, b)
            }
        ]
    }

    function vc(a, b) {
        function d(a) {
            return a
        }

        function e(a) {
            return j(a)
        }

        function g(a) {
            var b = h(),
                c = 0,
                d = x(a) ? [] : {};
            return f(a, function (a, e) {
                c++, i(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            }), 0 === c && b.resolve(d), b.promise
        }
        var h = function () {
                var f, g, k = [];
                return g = {
                    resolve: function (b) {
                        if (k) {
                            var d = k;
                            k = c, f = i(b), d.length && a(function () {
                                for (var a, b = 0, c = d.length; c > b; b++) a = d[b], f.then(a[0], a[1], a[2])
                            })
                        }
                    },
                    reject: function (a) {
                        g.resolve(j(a))
                    },
                    notify: function (b) {
                        if (k) {
                            var c = k;
                            k.length && a(function () {
                                for (var a, d = 0, e = c.length; e > d; d++) a = c[d], a[2](b)
                            })
                        }
                    },
                    promise: {
                        then: function (a, c, g) {
                            var i = h(),
                                j = function (c) {
                                    try {
                                        i.resolve((y(a) ? a : d)(c))
                                    } catch (e) {
                                        i.reject(e), b(e)
                                    }
                                },
                                l = function (a) {
                                    try {
                                        i.resolve((y(c) ? c : e)(a))
                                    } catch (d) {
                                        i.reject(d), b(d)
                                    }
                                },
                                m = function (a) {
                                    try {
                                        i.notify((y(g) ? g : d)(a))
                                    } catch (c) {
                                        b(c)
                                    }
                                };
                            return k ? k.push([j, l, m]) : f.then(j, l, m), i.promise
                        },
                        "catch": function (a) {
                            return this.then(null, a)
                        },
                        "finally": function (a) {
                            function b(a, b) {
                                var c = h();
                                return b ? c.resolve(a) : c.reject(a), c.promise
                            }

                            function c(c, e) {
                                var f = null;
                                try {
                                    f = (a || d)()
                                } catch (g) {
                                    return b(g, !1)
                                }
                                return f && y(f.then) ? f.then(function () {
                                    return b(c, e)
                                }, function (a) {
                                    return b(a, !1)
                                }) : b(c, e)
                            }
                            return this.then(function (a) {
                                return c(a, !0)
                            }, function (a) {
                                return c(a, !1)
                            })
                        }
                    }
                }
            },
            i = function (b) {
                return b && y(b.then) ? b : {
                    then: function (c) {
                        var d = h();
                        return a(function () {
                            d.resolve(c(b))
                        }), d.promise
                    }
                }
            },
            j = function (c) {
                return {
                    then: function (d, f) {
                        var g = h();
                        return a(function () {
                            try {
                                g.resolve((y(f) ? f : e)(c))
                            } catch (a) {
                                g.reject(a), b(a)
                            }
                        }), g.promise
                    }
                }
            },
            k = function (c, f, g, k) {
                var l, m = h(),
                    n = function (a) {
                        try {
                            return (y(f) ? f : d)(a)
                        } catch (c) {
                            return b(c), j(c)
                        }
                    },
                    o = function (a) {
                        try {
                            return (y(g) ? g : e)(a)
                        } catch (c) {
                            return b(c), j(c)
                        }
                    },
                    p = function (a) {
                        try {
                            return (y(k) ? k : d)(a)
                        } catch (c) {
                            b(c)
                        }
                    };
                return a(function () {
                    i(c).then(function (a) {
                        l || (l = !0, m.resolve(i(a).then(n, o, p)))
                    }, function (a) {
                        l || (l = !0, m.resolve(o(a)))
                    }, function (a) {
                        l || m.notify(p(a))
                    })
                }), m.promise
            };
        return {
            defer: h,
            reject: j,
            when: k,
            all: g
        }
    }

    function wc() {
        var a = 10,
            b = d("$rootScope"),
            c = null;
        this.digestTtl = function (b) {
            return arguments.length && (a = b), a
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser",
            function (d, f, g, h) {
                function i() {
                    this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$isolateBindings = {}
                }

                function k(a) {
                    if (p.$$phase) throw b("inprog", "{0} already in progress", p.$$phase);
                    p.$$phase = a
                }

                function l() {
                    p.$$phase = null
                }

                function m(a, b) {
                    var c = g(a);
                    return cb(c, b), c
                }

                function n() {}
                i.prototype = {
                    constructor: i,
                    $new: function (a) {
                        var b, c;
                        return a ? (c = new i, c.$root = this.$root, c.$$asyncQueue = this.$$asyncQueue, c.$$postDigestQueue = this.$$postDigestQueue) : (b = function () {}, b.prototype = this, c = new b, c.$id = j()), c["this"] = c, c.$$listeners = {}, c.$parent = this, c.$$watchers = c.$$nextSibling = c.$$childHead = c.$$childTail = null, c.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = c, this.$$childTail = c) : this.$$childHead = this.$$childTail = c, c
                    },
                    $watch: function (a, b, d) {
                        var e = this,
                            f = m(a, "watch"),
                            g = e.$$watchers,
                            h = {
                                fn: b,
                                last: n,
                                get: f,
                                exp: a,
                                eq: !!d
                            };
                        if (c = null, !y(b)) {
                            var i = m(b || o, "listener");
                            h.fn = function (a, b, c) {
                                i(c)
                            }
                        }
                        if ("string" == typeof a && f.constant) {
                            var j = h.fn;
                            h.fn = function (a, b, c) {
                                j.call(this, a, b, c), H(g, h)
                            }
                        }
                        return g || (g = e.$$watchers = []), g.unshift(h),
                            function () {
                                H(g, h)
                            }
                    },
                    $watchCollection: function (a, b) {
                        function c() {
                            h = k(i);
                            var a, b;
                            if (t(h))
                                if (e(h)) {
                                    f !== l && (f = l, n = f.length = 0, j++), a = h.length, n !== a && (j++, f.length = n = a);
                                    for (var c = 0; a > c; c++) f[c] !== h[c] && (j++, f[c] = h[c])
                                } else {
                                    f !== m && (f = m = {}, n = 0, j++), a = 0;
                                    for (b in h) h.hasOwnProperty(b) && (a++, f.hasOwnProperty(b) ? f[b] !== h[b] && (j++, f[b] = h[b]) : (n++, f[b] = h[b], j++));
                                    if (n > a) {
                                        j++;
                                        for (b in f) f.hasOwnProperty(b) && !h.hasOwnProperty(b) && (n--, delete f[b])
                                    }
                                } else f !== h && (f = h, j++);
                            return j
                        }

                        function d() {
                            b(h, f, i)
                        }
                        var f, h, i = this,
                            j = 0,
                            k = g(a),
                            l = [],
                            m = {},
                            n = 0;
                        return this.$watch(c, d)
                    },
                    $digest: function () {
                        var d, e, g, h, i, j, m, o, p, q, r, s = this.$$asyncQueue,
                            t = this.$$postDigestQueue,
                            u = a,
                            v = this,
                            w = [];
                        k("$digest"), c = null;
                        do {
                            for (j = !1, o = v; s.length;) {
                                try {
                                    r = s.shift(), r.scope.$eval(r.expression)
                                } catch (x) {
                                    l(), f(x)
                                }
                                c = null
                            }
                            a: do {
                                if (h = o.$$watchers)
                                    for (i = h.length; i--;) try {
                                        if (d = h[i])
                                            if ((e = d.get(o)) === (g = d.last) || (d.eq ? K(e, g) : "number" == typeof e && "number" == typeof g && isNaN(e) && isNaN(g))) {
                                                if (d === c) {
                                                    j = !1;
                                                    break a
                                                }
                                            } else j = !0, c = d, d.last = d.eq ? I(e) : e, d.fn(e, g === n ? e : g, o), 5 > u && (p = 4 - u, w[p] || (w[p] = []), q = y(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, q += "; newVal: " + Q(e) + "; oldVal: " + Q(g), w[p].push(q))
                                    } catch (x) {
                                        l(), f(x)
                                    }
                                if (!(m = o.$$childHead || o !== v && o.$$nextSibling))
                                    for (; o !== v && !(m = o.$$nextSibling);) o = o.$parent
                            } while (o = m);
                            if (j && !u--) throw l(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, Q(w))
                        } while (j || s.length);
                        for (l(); t.length;) try {
                            t.shift()()
                        } catch (x) {
                            f(x)
                        }
                    },
                    $destroy: function () {
                        if (!this.$$destroyed) {
                            var a = this.$parent;
                            this.$broadcast("$destroy"), this.$$destroyed = !0, this !== p && (a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null)
                        }
                    },
                    $eval: function (a, b) {
                        return g(a)(this, b)
                    },
                    $evalAsync: function (a) {
                        p.$$phase || p.$$asyncQueue.length || h.defer(function () {
                            p.$$asyncQueue.length && p.$digest()
                        }), this.$$asyncQueue.push({
                            scope: this,
                            expression: a
                        })
                    },
                    $$postDigest: function (a) {
                        this.$$postDigestQueue.push(a)
                    },
                    $apply: function (a) {
                        try {
                            return k("$apply"), this.$eval(a)
                        } catch (b) {
                            f(b)
                        } finally {
                            l();
                            try {
                                p.$digest()
                            } catch (b) {
                                throw f(b), b
                            }
                        }
                    },
                    $on: function (a, b) {
                        var c = this.$$listeners[a];
                        return c || (this.$$listeners[a] = c = []), c.push(b),
                            function () {
                                c[G(c, b)] = null
                            }
                    },
                    $emit: function (a) {
                        var b, c, d, e = [],
                            g = this,
                            h = !1,
                            i = {
                                name: a,
                                targetScope: g,
                                stopPropagation: function () {
                                    h = !0
                                },
                                preventDefault: function () {
                                    i.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            j = M([i], arguments, 1);
                        do {
                            for (b = g.$$listeners[a] || e, i.currentScope = g, c = 0, d = b.length; d > c; c++)
                                if (b[c]) try {
                                    b[c].apply(null, j)
                                } catch (k) {
                                    f(k)
                                } else b.splice(c, 1), c--, d--;
                            if (h) return i;
                            g = g.$parent
                        } while (g);
                        return i
                    },
                    $broadcast: function (a) {
                        var b, c, d, e = this,
                            g = e,
                            h = e,
                            i = {
                                name: a,
                                targetScope: e,
                                preventDefault: function () {
                                    i.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            j = M([i], arguments, 1);
                        do {
                            for (g = h, i.currentScope = g, b = g.$$listeners[a] || [], c = 0, d = b.length; d > c; c++)
                                if (b[c]) try {
                                    b[c].apply(null, j)
                                } catch (k) {
                                    f(k)
                                } else b.splice(c, 1), c--, d--;
                            if (!(h = g.$$childHead || g !== e && g.$$nextSibling))
                                for (; g !== e && !(h = g.$$nextSibling);) g = g.$parent
                        } while (g = h);
                        return i
                    }
                };
                var p = new i;
                return p
            }
        ]
    }

    function xc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/,
            b = /^\s*(https?|ftp|file):|data:image\//;
        this.aHrefSanitizationWhitelist = function (b) {
            return s(b) ? (a = b, this) : a
        }, this.imgSrcSanitizationWhitelist = function (a) {
            return s(a) ? (b = a, this) : b
        }, this.$get = function () {
            return function (c, d) {
                var e, f = d ? b : a;
                return hd && !(hd >= 8) || (e = Fc(c).href, "" === e || e.match(f)) ? c : "unsafe:" + e
            }
        }
    }

    function yc(a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }

    function zc(a) {
        if ("self" === a) return a;
        if (u(a)) {
            if (a.indexOf("***") > -1) throw ae("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = yc(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
        }
        if (z(a)) return new RegExp("^" + a.source + "$");
        throw ae("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Ac(a) {
        var b = [];
        return s(a) && f(a, function (a) {
            b.push(zc(a))
        }), b
    }

    function Bc() {
        this.SCE_CONTEXTS = be;
        var a = ["self"],
            b = [];
        this.resourceUrlWhitelist = function (b) {
            return arguments.length && (a = Ac(b)), a
        }, this.resourceUrlBlacklist = function (a) {
            return arguments.length && (b = Ac(a)), b
        }, this.$get = ["$injector",
            function (d) {
                function e(a, b) {
                    return "self" === a ? Gc(b) : !!a.exec(b.href)
                }

                function f(c) {
                    var d, f, g = Fc(c.toString()),
                        h = !1;
                    for (d = 0, f = a.length; f > d; d++)
                        if (e(a[d], g)) {
                            h = !0;
                            break
                        }
                    if (h)
                        for (d = 0, f = b.length; f > d; d++)
                            if (e(b[d], g)) {
                                h = !1;
                                break
                            }
                    return h
                }

                function g(a) {
                    var b = function (a) {
                        this.$$unwrapTrustedValue = function () {
                            return a
                        }
                    };
                    return a && (b.prototype = new a), b.prototype.valueOf = function () {
                        return this.$$unwrapTrustedValue()
                    }, b.prototype.toString = function () {
                        return this.$$unwrapTrustedValue().toString()
                    }, b
                }

                function h(a, b) {
                    var d = m.hasOwnProperty(a) ? m[a] : null;
                    if (!d) throw ae("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                    if (null === b || b === c || "" === b) return b;
                    if ("string" != typeof b) throw ae("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                    return new d(b)
                }

                function i(a) {
                    return a instanceof l ? a.$$unwrapTrustedValue() : a
                }

                function j(a, b) {
                    if (null === b || b === c || "" === b) return b;
                    var d = m.hasOwnProperty(a) ? m[a] : null;
                    if (d && b instanceof d) return b.$$unwrapTrustedValue();
                    if (a === be.RESOURCE_URL) {
                        if (f(b)) return b;
                        throw ae("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                    }
                    if (a === be.HTML) return k(b);
                    throw ae("unsafe", "Attempting to use an unsafe value in a safe context.")
                }
                var k = function () {
                    throw ae("unsafe", "Attempting to use an unsafe value in a safe context.")
                };
                d.has("$sanitize") && (k = d.get("$sanitize"));
                var l = g(),
                    m = {};
                return m[be.HTML] = g(l), m[be.CSS] = g(l), m[be.URL] = g(l), m[be.JS] = g(l), m[be.RESOURCE_URL] = g(m[be.URL]), {
                    trustAs: h,
                    getTrusted: j,
                    valueOf: i
                }
            }
        ]
    }

    function Cc() {
        var a = !0;
        this.enabled = function (b) {
            return arguments.length && (a = !!b), a
        }, this.$get = ["$parse", "$sniffer", "$sceDelegate",
            function (b, c, d) {
                if (a && c.msie && c.msieDocumentMode < 8) throw ae("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var e = I(be);
                e.isEnabled = function () {
                    return a
                }, e.trustAs = d.trustAs, e.getTrusted = d.getTrusted, e.valueOf = d.valueOf, a || (e.trustAs = e.getTrusted = function (a, b) {
                    return b
                }, e.valueOf = p), e.parseAs = function (a, c) {
                    var d = b(c);
                    return d.literal && d.constant ? d : function (b, c) {
                        return e.getTrusted(a, d(b, c))
                    }
                };
                var g = e.parseAs,
                    h = e.getTrusted,
                    i = e.trustAs;
                return f(be, function (a, b) {
                    var c = dd(b);
                    e[jb("parse_as_" + c)] = function (b) {
                        return g(a, b)
                    }, e[jb("get_trusted_" + c)] = function (b) {
                        return h(a, b)
                    }, e[jb("trust_as_" + c)] = function (b) {
                        return i(a, b)
                    }
                }), e
            }
        ]
    }

    function Dc() {
        this.$get = ["$window", "$document",
            function (a, b) {
                var c, d, e = {},
                    f = m((/android (\d+)/.exec(dd((a.navigator || {}).userAgent)) || [])[1]),
                    g = /Boxee/i.test((a.navigator || {}).userAgent),
                    h = b[0] || {},
                    i = h.documentMode,
                    j = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                    k = h.body && h.body.style,
                    l = !1,
                    n = !1;
                if (k) {
                    for (var o in k)
                        if (d = j.exec(o)) {
                            c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                            break
                        }
                    c || (c = "WebkitOpacity" in k && "webkit"), l = !!("transition" in k || c + "Transition" in k), n = !!("animation" in k || c + "Animation" in k), !f || l && n || (l = u(h.body.style.webkitTransition), n = u(h.body.style.webkitAnimation))
                }
                return {
                    history: !(!a.history || !a.history.pushState || 4 > f || g),
                    hashchange: "onhashchange" in a && (!i || i > 7),
                    hasEvent: function (a) {
                        if ("input" == a && 9 == hd) return !1;
                        if (r(e[a])) {
                            var b = h.createElement("div");
                            e[a] = "on" + a in b
                        }
                        return e[a]
                    },
                    csp: L(),
                    vendorPrefix: c,
                    transitions: l,
                    animations: n,
                    android: f,
                    msie: hd,
                    msieDocumentMode: i
                }
            }
        ]
    }

    function Ec() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler",
            function (a, b, c, d) {
                function e(e, g, h) {
                    var i, j = c.defer(),
                        k = j.promise,
                        l = s(h) && !h;
                    return i = b.defer(function () {
                        try {
                            j.resolve(e())
                        } catch (b) {
                            j.reject(b), d(b)
                        } finally {
                            delete f[k.$$timeoutId]
                        }
                        l || a.$apply()
                    }, g), k.$$timeoutId = i, f[i] = j, k
                }
                var f = {};
                return e.cancel = function (a) {
                    return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
                }, e
            }
        ]
    }

    function Fc(a) {
        var b = a;
        return hd && (ce.setAttribute("href", b), b = ce.href), ce.setAttribute("href", b), {
            href: ce.href,
            protocol: ce.protocol ? ce.protocol.replace(/:$/, "") : "",
            host: ce.host,
            search: ce.search ? ce.search.replace(/^\?/, "") : "",
            hash: ce.hash ? ce.hash.replace(/^#/, "") : "",
            hostname: ce.hostname,
            port: ce.port,
            pathname: "/" === ce.pathname.charAt(0) ? ce.pathname : "/" + ce.pathname
        }
    }

    function Gc(a) {
        var b = u(a) ? Fc(a) : a;
        return b.protocol === de.protocol && b.host === de.host
    }

    function Hc() {
        this.$get = q(a)
    }

    function Ic(a) {
        function b(d, e) {
            if (t(d)) {
                var g = {};
                return f(d, function (a, c) {
                    g[c] = b(c, a)
                }), g
            }
            return a.factory(d + c, e)
        }
        var c = "Filter";
        this.register = b, this.$get = ["$injector",
            function (a) {
                return function (b) {
                    return a.get(b + c)
                }
            }
        ], b("currency", Kc), b("date", Sc), b("filter", Jc), b("json", Tc), b("limitTo", Uc), b("lowercase", ie), b("number", Lc), b("orderBy", Vc), b("uppercase", je)
    }

    function Jc() {
        return function (a, b, c) {
            if (!x(a)) return a;
            var d = typeof c,
                e = [];
            e.check = function (a) {
                for (var b = 0; b < e.length; b++)
                    if (!e[b](a)) return !1;
                return !0
            }, "function" !== d && (c = "boolean" === d && c ? function (a, b) {
                return qd.equals(a, b)
            } : function (a, b) {
                return b = ("" + b).toLowerCase(), ("" + a).toLowerCase().indexOf(b) > -1
            });
            var f = function (a, b) {
                if ("string" == typeof b && "!" === b.charAt(0)) return !f(a, b.substr(1));
                switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    return c(a, b);
                case "object":
                    switch (typeof b) {
                    case "object":
                        return c(a, b);
                    default:
                        for (var d in a)
                            if ("$" !== d.charAt(0) && f(a[d], b)) return !0
                    }
                    return !1;
                case "array":
                    for (var e = 0; e < a.length; e++)
                        if (f(a[e], b)) return !0;
                    return !1;
                default:
                    return !1
                }
            };
            switch (typeof b) {
            case "boolean":
            case "number":
            case "string":
                b = {
                    $: b
                };
            case "object":
                for (var g in b) "$" == g ? ! function () {
                    if (b[g]) {
                        var a = g;
                        e.push(function (c) {
                            return f(c, b[a])
                        })
                    }
                }() : ! function () {
                    if ("undefined" != typeof b[g]) {
                        var a = g;
                        e.push(function (c) {
                            return f(eb(c, a), b[a])
                        })
                    }
                }();
                break;
            case "function":
                e.push(b);
                break;
            default:
                return a
            }
            for (var h = [], i = 0; i < a.length; i++) {
                var j = a[i];
                e.check(j) && h.push(j)
            }
            return h
        }
    }

    function Kc(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return r(c) && (c = b.CURRENCY_SYM), Mc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c)
        }
    }

    function Lc(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return Mc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function Mc(a, b, c, d, e) {
        if (isNaN(a) || !isFinite(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a + "",
            h = "",
            i = [],
            j = !1;
        if (-1 !== g.indexOf("e")) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && "-" == k[2] && k[3] > e + 1 ? g = "0" : (h = g, j = !0)
        }
        if (j) e > 0 && a > -1 && 1 > a && (h = a.toFixed(e));
        else {
            var l = (g.split(ee)[1] || "").length;
            r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac));
            var m = Math.pow(10, e);
            a = Math.round(a * m) / m;
            var n = ("" + a).split(ee),
                o = n[0];
            n = n[1] || "";
            var p, q = 0,
                s = b.lgSize,
                t = b.gSize;
            if (o.length >= s + t)
                for (q = o.length - s, p = 0; q > p; p++)(q - p) % t === 0 && 0 !== p && (h += c), h += o.charAt(p);
            for (p = q; p < o.length; p++)(o.length - p) % s === 0 && 0 !== p && (h += c), h += o.charAt(p);
            for (; n.length < e;) n += "0";
            e && "0" !== e && (h += d + n.substr(0, e))
        }
        return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), i.join("")
    }

    function Nc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a
    }

    function Oc(a, b, c, d) {
        return c = c || 0,
            function (e) {
                var f = e["get" + a]();
                return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Nc(f, b, d)
            }
    }

    function Pc(a, b) {
        return function (c, d) {
            var e = c["get" + a](),
                f = ed(b ? "SHORT" + a : a);
            return d[f][e]
        }
    }

    function Qc(a) {
        var b = -1 * a.getTimezoneOffset(),
            c = b >= 0 ? "+" : "";
        return c += Nc(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + Nc(Math.abs(b % 60), 2)
    }

    function Rc(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }

    function Sc(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0),
                    e = 0,
                    f = 0,
                    g = b[8] ? d.setUTCFullYear : d.setFullYear,
                    h = b[8] ? d.setUTCHours : d.setHours;
                b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
                var i = m(b[4] || 0) - e,
                    j = m(b[5] || 0) - f,
                    k = m(b[6] || 0),
                    l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                return h.call(d, i, j, k, l), d
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, d) {
            var e, g, h = "",
                i = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = he.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c)) return c;
            for (; d;) g = ge.exec(d), g ? (i = M(i, g, 1), d = i.pop()) : (i.push(d), d = null);
            return f(i, function (b) {
                e = fe[b], h += e ? e(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), h
        }
    }

    function Tc() {
        return function (a) {
            return Q(a, !0)
        }
    }

    function Uc() {
        return function (a, b) {
            if (!x(a) && !u(a)) return a;
            if (b = m(b), u(a)) return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : "";
            var c, d, e = [];
            for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, d = b) : (c = a.length + b, d = a.length); d > c; c++) e.push(a[c]);
            return e
        }
    }

    function Vc(a) {
        return function (b, c, d) {
            function e(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e
                }
                return 0
            }

            function f(a, b) {
                return S(b) ? function (b, c) {
                    return a(c, b)
                } : a
            }

            function g(a, b) {
                var c = typeof a,
                    d = typeof b;
                return c == d ? ("string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
            }
            if (!x(b)) return b;
            if (!c) return b;
            c = x(c) ? c : [c], c = E(c, function (b) {
                var c = !1,
                    d = b || p;
                return u(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), d = a(b)), f(function (a, b) {
                    return g(d(a), d(b))
                }, c)
            });
            for (var h = [], i = 0; i < b.length; i++) h.push(b[i]);
            return h.sort(f(e, d))
        }
    }

    function Wc(a) {
        return y(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", q(a)
    }

    function Xc(a, b) {
        function c(b, c) {
            c = c ? "-" + _(c, "-") : "", a.removeClass((b ? we : ve) + c).addClass((b ? ve : we) + c)
        }
        var d = this,
            e = a.parent().controller("form") || me,
            g = 0,
            h = d.$error = {},
            i = [];
        d.$name = b.name || b.ngForm, d.$dirty = !1, d.$pristine = !0, d.$valid = !0, d.$invalid = !1, e.$addControl(d), a.addClass(xe), c(!0), d.$addControl = function (a) {
            db(a.$name, "input"), i.push(a), a.$name && (d[a.$name] = a)
        }, d.$removeControl = function (a) {
            a.$name && d[a.$name] === a && delete d[a.$name], f(h, function (b, c) {
                d.$setValidity(c, !0, a)
            }), H(i, a)
        }, d.$setValidity = function (a, b, f) {
            var i = h[a];
            if (b) i && (H(i, f), i.length || (g--, g || (c(b), d.$valid = !0, d.$invalid = !1), h[a] = !1, c(!0, a), e.$setValidity(a, !0, d)));
            else {
                if (g || c(b), i) {
                    if (F(i, f)) return
                } else h[a] = i = [], g++, c(!1, a), e.$setValidity(a, !1, d);
                i.push(f), d.$valid = !1, d.$invalid = !0
            }
        }, d.$setDirty = function () {
            a.removeClass(xe).addClass(ye), d.$dirty = !0, d.$pristine = !1, e.$setDirty()
        }, d.$setPristine = function () {
            a.removeClass(ye).addClass(xe), d.$dirty = !1, d.$pristine = !0, f(i, function (a) {
                a.$setPristine()
            })
        }
    }

    function Yc(a, b, e, f, g, h) {
        if (!g.android) {
            var i = !1;
            b.on("compositionstart", function () {
                i = !0
            }), b.on("compositionend", function () {
                i = !1
            })
        }
        var j = function () {
            if (!i) {
                var c = b.val();
                S(e.ngTrim || "T") && (c = sd(c)), f.$viewValue !== c && a.$apply(function () {
                    f.$setViewValue(c)
                })
            }
        };
        if (g.hasEvent("input")) b.on("input", j);
        else {
            var k, l = function () {
                k || (k = h.defer(function () {
                    j(), k = null
                }))
            };
            b.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || l()
            }), g.hasEvent("paste") && b.on("paste cut", l)
        }
        b.on("change", j), f.$render = function () {
            b.val(f.$isEmpty(f.$viewValue) ? "" : f.$viewValue)
        };
        var n, o, p = e.ngPattern,
            q = function (a, b) {
                return f.$isEmpty(b) || a.test(b) ? (f.$setValidity("pattern", !0), b) : (f.$setValidity("pattern", !1), c)
            };
        if (p && (o = p.match(/^\/(.*)\/([gim]*)$/), o ? (p = new RegExp(o[1], o[2]), n = function (a) {
            return q(p, a)
        }) : n = function (c) {
            var e = a.$eval(p);
            if (!e || !e.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", p, e, T(b));
            return q(e, c)
        }, f.$formatters.push(n), f.$parsers.push(n)), e.ngMinlength) {
            var r = m(e.ngMinlength),
                s = function (a) {
                    return !f.$isEmpty(a) && a.length < r ? (f.$setValidity("minlength", !1), c) : (f.$setValidity("minlength", !0), a)
                };
            f.$parsers.push(s), f.$formatters.push(s)
        }
        if (e.ngMaxlength) {
            var t = m(e.ngMaxlength),
                u = function (a) {
                    return !f.$isEmpty(a) && a.length > t ? (f.$setValidity("maxlength", !1), c) : (f.$setValidity("maxlength", !0), a)
                };
            f.$parsers.push(u), f.$formatters.push(u)
        }
    }

    function Zc(a, b, d, e, f, g) {
        if (Yc(a, b, d, e, f, g), e.$parsers.push(function (a) {
            var b = e.$isEmpty(a);
            return b || se.test(a) ? (e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), c)
        }), e.$formatters.push(function (a) {
            return e.$isEmpty(a) ? "" : "" + a
        }), d.min) {
            var h = function (a) {
                var b = parseFloat(d.min);
                return !e.$isEmpty(a) && b > a ? (e.$setValidity("min", !1), c) : (e.$setValidity("min", !0), a)
            };
            e.$parsers.push(h), e.$formatters.push(h)
        }
        if (d.max) {
            var i = function (a) {
                var b = parseFloat(d.max);
                return !e.$isEmpty(a) && a > b ? (e.$setValidity("max", !1), c) : (e.$setValidity("max", !0), a)
            };
            e.$parsers.push(i), e.$formatters.push(i)
        }
        e.$formatters.push(function (a) {
            return e.$isEmpty(a) || v(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), c)
        })
    }

    function $c(a, b, d, e, f, g) {
        Yc(a, b, d, e, f, g);
        var h = function (a) {
            return e.$isEmpty(a) || qe.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), c)
        };
        e.$formatters.push(h), e.$parsers.push(h)
    }

    function _c(a, b, d, e, f, g) {
        Yc(a, b, d, e, f, g);
        var h = function (a) {
            return e.$isEmpty(a) || re.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), c)
        };
        e.$formatters.push(h), e.$parsers.push(h)
    }

    function ad(a, b, c, d) {
        r(c.name) && b.attr("name", j()), b.on("click", function () {
            b[0].checked && a.$apply(function () {
                d.$setViewValue(c.value)
            })
        }), d.$render = function () {
            var a = c.value;
            b[0].checked = a == d.$viewValue
        }, c.$observe("value", d.$render)
    }

    function bd(a, b, c, d) {
        var e = c.ngTrueValue,
            f = c.ngFalseValue;
        u(e) || (e = !0), u(f) || (f = !1), b.on("click", function () {
            a.$apply(function () {
                d.$setViewValue(b[0].checked)
            })
        }), d.$render = function () {
            b[0].checked = d.$viewValue
        }, d.$isEmpty = function (a) {
            return a !== e
        }, d.$formatters.push(function (a) {
            return a === e
        }), d.$parsers.push(function (a) {
            return a ? e : f
        })
    }

    function cd(a, b) {
        return a = "ngClass" + a,
            function () {
                return {
                    restrict: "AC",
                    link: function (c, d, e) {
                        function g(a) {
                            if (b === !0 || c.$index % 2 === b) {
                                var d = h(a || "");
                                i ? K(a, i) || e.$updateClass(d, h(i)) : e.$addClass(d)
                            }
                            i = I(a)
                        }

                        function h(a) {
                            if (x(a)) return a.join(" ");
                            if (t(a)) {
                                var b = [];
                                return f(a, function (a, c) {
                                    a && b.push(c)
                                }), b.join(" ")
                            }
                            return a
                        }
                        var i;
                        c.$watch(e[a], g, !0), e.$observe("class", function () {
                            g(c.$eval(e[a]))
                        }), "ngClass" !== a && c.$watch("$index", function (d, f) {
                            var g = 1 & d;
                            if (g !== f & 1) {
                                var i = h(c.$eval(e[a]));
                                g === b ? e.$addClass(i) : e.$removeClass(i)
                            }
                        })
                    }
                }
            }
    }
    var dd = function (a) {
            return u(a) ? a.toLowerCase() : a
        },
        ed = function (a) {
            return u(a) ? a.toUpperCase() : a
        },
        fd = function (a) {
            return u(a) ? a.replace(/[A-Z]/g, function (a) {
                return String.fromCharCode(32 | a.charCodeAt(0))
            }) : a
        },
        gd = function (a) {
            return u(a) ? a.replace(/[a-z]/g, function (a) {
                return String.fromCharCode(-33 & a.charCodeAt(0))
            }) : a
        };
    "i" !== "I".toLowerCase() && (dd = fd, ed = gd);
    var hd, id, jd, kd, ld, md = [].slice,
        nd = [].push,
        od = Object.prototype.toString,
        pd = d("ng"),
        qd = (a.angular, a.angular || (a.angular = {})),
        rd = ["0", "0", "0"];
    hd = m((/msie (\d+)/.exec(dd(navigator.userAgent)) || [])[1]), isNaN(hd) && (hd = m((/trident\/.*; rv:(\d+)/.exec(dd(navigator.userAgent)) || [])[1])), o.$inject = [], p.$inject = [];
    var sd = function () {
        return String.prototype.trim ? function (a) {
            return u(a) ? a.trim() : a
        } : function (a) {
            return u(a) ? a.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : a
        }
    }();
    ld = 9 > hd ? function (a) {
        return a = a.nodeName ? a : a[0], a.scopeName && "HTML" != a.scopeName ? ed(a.scopeName + ":" + a.nodeName) : a.nodeName
    } : function (a) {
        return a.nodeName ? a.nodeName : a[0].nodeName
    };
    var td = /[A-Z]/g,
        ud = {
            full: "1.2.6",
            major: 1,
            minor: 2,
            dot: 6,
            codeName: "taco-salsafication"
        },
        vd = lb.cache = {},
        wd = lb.expando = "ng-" + (new Date).getTime(),
        xd = 1,
        yd = a.document.addEventListener ? function (a, b, c) {
            a.addEventListener(b, c, !1)
        } : function (a, b, c) {
            a.attachEvent("on" + b, c)
        },
        zd = a.document.removeEventListener ? function (a, b, c) {
            a.removeEventListener(b, c, !1)
        } : function (a, b, c) {
            a.detachEvent("on" + b, c)
        },
        Ad = /([\:\-\_]+(.))/g,
        Bd = /^moz([A-Z])/,
        Cd = d("jqLite"),
        Dd = lb.prototype = {
            ready: function (c) {
                function d() {
                    e || (e = !0, c())
                }
                var e = !1;
                "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), lb(a).on("load", d))
            },
            toString: function () {
                var a = [];
                return f(this, function (b) {
                    a.push("" + b)
                }), "[" + a.join(", ") + "]"
            },
            eq: function (a) {
                return id(a >= 0 ? this[a] : this[this.length + a])
            },
            length: 0,
            push: nd,
            sort: [].sort,
            splice: [].splice
        },
        Ed = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (a) {
        Ed[dd(a)] = a
    });
    var Fd = {};
    f("input,select,option,textarea,button,form,details".split(","), function (a) {
        Fd[ed(a)] = !0
    }), f({
        data: rb,
        inheritedData: xb,
        scope: function (a) {
            return id(a).data("$scope") || xb(a.parentNode || a, ["$isolateScope", "$scope"])
        },
        isolateScope: function (a) {
            return id(a).data("$isolateScope") || id(a).data("$isolateScopeNoTemplate")
        },
        controller: wb,
        injector: function (a) {
            return xb(a, "$injector")
        },
        removeAttr: function (a, b) {
            a.removeAttribute(b)
        },
        hasClass: sb,
        css: function (a, b, d) {
            if (b = jb(b), !s(d)) {
                var e;
                return 8 >= hd && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")), e = e || a.style[b], 8 >= hd && (e = "" === e ? c : e), e
            }
            a.style[b] = d
        },
        attr: function (a, b, d) {
            var e = dd(b);
            if (Ed[e]) {
                if (!s(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
            } else if (s(d)) a.setAttribute(b, d);
            else if (a.getAttribute) {
                var f = a.getAttribute(b, 2);
                return null === f ? c : f
            }
        },
        prop: function (a, b, c) {
            return s(c) ? void(a[b] = c) : a[b]
        },
        text: function () {
            function a(a, c) {
                var d = b[a.nodeType];
                return r(c) ? d ? a[d] : "" : void(a[d] = c)
            }
            var b = [];
            return 9 > hd ? (b[1] = "innerText", b[3] = "nodeValue") : b[1] = b[3] = "textContent", a.$dv = "", a
        }(),
        val: function (a, b) {
            if (r(b)) {
                if ("SELECT" === ld(a) && a.multiple) {
                    var c = [];
                    return f(a.options, function (a) {
                        a.selected && c.push(a.value || a.text)
                    }), 0 === c.length ? null : c
                }
                return a.value
            }
            a.value = b
        },
        html: function (a, b) {
            if (r(b)) return a.innerHTML;
            for (var c = 0, d = a.childNodes; c < d.length; c++) nb(d[c]);
            a.innerHTML = b
        },
        empty: yb
    }, function (a, b) {
        lb.prototype[b] = function (b, d) {
            var e, f;
            if (a !== yb && (2 == a.length && a !== sb && a !== wb ? b : d) === c) {
                if (t(b)) {
                    for (e = 0; e < this.length; e++)
                        if (a === rb) a(this[e], b);
                        else
                            for (f in b) a(this[e], f, b[f]);
                    return this
                }
                for (var g = a.$dv, h = g === c ? Math.min(this.length, 1) : this.length, i = 0; h > i; i++) {
                    var j = a(this[i], b, d);
                    g = g ? g + j : j
                }
                return g
            }
            for (e = 0; e < this.length; e++) a(this[e], b, d);
            return this
        }
    }), f({
        removeData: pb,
        dealoc: nb,
        on: function hf(a, c, d, e) {
            if (s(e)) throw Cd("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            var g = qb(a, "events"),
                h = qb(a, "handle");
            g || qb(a, "events", g = {}), h || qb(a, "handle", h = Ab(a, g)), f(c.split(" "), function (c) {
                var e = g[c];
                if (!e) {
                    if ("mouseenter" == c || "mouseleave" == c) {
                        var f = b.body.contains || b.body.compareDocumentPosition ? function (a, b) {
                            var c = 9 === a.nodeType ? a.documentElement : a,
                                d = b && b.parentNode;
                            return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                        } : function (a, b) {
                            if (b)
                                for (; b = b.parentNode;)
                                    if (b === a) return !0;
                            return !1
                        };
                        g[c] = [];
                        var i = {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        };
                        hf(a, i[c], function (a) {
                            var b = this,
                                d = a.relatedTarget;
                            (!d || d !== b && !f(b, d)) && h(a, c)
                        })
                    } else yd(a, c, h), g[c] = [];
                    e = g[c]
                }
                e.push(d)
            })
        },
        off: ob,
        one: function (a, b, c) {
            a = id(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d)
            }), a.on(b, c)
        },
        replaceWith: function (a, b) {
            var c, d = a.parentNode;
            nb(a), f(new lb(b), function (b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
            })
        },
        children: function (a) {
            var b = [];
            return f(a.childNodes, function (a) {
                1 === a.nodeType && b.push(a)
            }), b
        },
        contents: function (a) {
            return a.childNodes || []
        },
        append: function (a, b) {
            f(new lb(b), function (b) {
                (1 === a.nodeType || 11 === a.nodeType) && a.appendChild(b)
            })
        },
        prepend: function (a, b) {
            if (1 === a.nodeType) {
                var c = a.firstChild;
                f(new lb(b), function (b) {
                    a.insertBefore(b, c)
                })
            }
        },
        wrap: function (a, b) {
            b = id(b)[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a)
        },
        remove: function (a) {
            nb(a);
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        after: function (a, b) {
            var c = a,
                d = a.parentNode;
            f(new lb(b), function (a) {
                d.insertBefore(a, c.nextSibling), c = a
            })
        },
        addClass: ub,
        removeClass: tb,
        toggleClass: function (a, b, c) {
            r(c) && (c = !sb(a, b)), (c ? ub : tb)(a, b)
        },
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        next: function (a) {
            if (a.nextElementSibling) return a.nextElementSibling;
            for (var b = a.nextSibling; null != b && 1 !== b.nodeType;) b = b.nextSibling;
            return b
        },
        find: function (a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        },
        clone: mb,
        triggerHandler: function (a, b, c) {
            var d = (qb(a, "events") || {})[b];
            c = c || [];
            var e = [{
                preventDefault: o,
                stopPropagation: o
            }];
            f(d, function (b) {
                b.apply(a, e.concat(c))
            })
        }
    }, function (a, b) {
        lb.prototype[b] = function (b, c, d) {
            for (var e, f = 0; f < this.length; f++) r(e) ? (e = a(this[f], b, c, d), s(e) && (e = id(e))) : vb(e, a(this[f], b, c, d));
            return s(e) ? e : this
        }, lb.prototype.bind = lb.prototype.on, lb.prototype.unbind = lb.prototype.off
    }), Cb.prototype = {
        put: function (a, b) {
            this[Bb(a)] = b
        },
        get: function (a) {
            return this[Bb(a)]
        },
        remove: function (a) {
            var b = this[a = Bb(a)];
            return delete this[a], b
        }
    };
    var Gd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        Hd = /,/,
        Id = /^\s*(_?)(\S+?)\1\s*$/,
        Jd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Kd = d("$injector"),
        Ld = d("$animate"),
        Md = ["$provide",
            function (a) {
                this.$$selectors = {}, this.register = function (b, c) {
                    var d = b + "-animation";
                    if (b && "." != b.charAt(0)) throw Ld("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
                    this.$$selectors[b.substr(1)] = d, a.factory(d, c)
                }, this.classNameFilter = function (a) {
                    return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter
                }, this.$get = ["$timeout",
                    function (a) {
                        return {
                            enter: function (b, c, d, e) {
                                d ? d.after(b) : (c && c[0] || (c = d.parent()), c.append(b)), e && a(e, 0, !1)
                            },
                            leave: function (b, c) {
                                b.remove(), c && a(c, 0, !1)
                            },
                            move: function (a, b, c, d) {
                                this.enter(a, b, c, d)
                            },
                            addClass: function (b, c, d) {
                                c = u(c) ? c : x(c) ? c.join(" ") : "", f(b, function (a) {
                                    ub(a, c)
                                }), d && a(d, 0, !1)
                            },
                            removeClass: function (b, c, d) {
                                c = u(c) ? c : x(c) ? c.join(" ") : "", f(b, function (a) {
                                    tb(a, c)
                                }), d && a(d, 0, !1)
                            },
                            enabled: o
                        }
                    }
                ]
            }
        ],
        Nd = d("$compile");
    Kb.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Od = /^(x[\:\-_]|data[\:\-_])/i,
        Pd = a.XMLHttpRequest || function () {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (a) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (b) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (c) {}
            throw d("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
        },
        Qd = d("$interpolate"),
        Rd = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        Sd = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Td = d("$location");
    hc.prototype = gc.prototype = fc.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: ic("$$absUrl"),
        url: function (a, b) {
            if (r(a)) return this.$$url;
            var c = Rd.exec(a);
            return c[1] && this.path(decodeURIComponent(c[1])), (c[2] || c[1]) && this.search(c[3] || ""), this.hash(c[5] || "", b), this
        },
        protocol: ic("$$protocol"),
        host: ic("$$host"),
        port: ic("$$port"),
        path: jc("$$path", function (a) {
            return "/" == a.charAt(0) ? a : "/" + a
        }),
        search: function (a, b) {
            switch (arguments.length) {
            case 0:
                return this.$$search;
            case 1:
                if (u(a)) this.$$search = V(a);
                else {
                    if (!t(a)) throw Td("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                    this.$$search = a
                }
                break;
            default:
                r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
            }
            return this.$$compose(), this
        },
        hash: jc("$$hash", p),
        replace: function () {
            return this.$$replace = !0, this
        }
    };
    var Ud, Vd = d("$parse"),
        Wd = {},
        Xd = {
            "null": function () {
                return null
            },
            "true": function () {
                return !0
            },
            "false": function () {
                return !1
            },
            undefined: o,
            "+": function (a, b, d, e) {
                return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c
            },
            "-": function (a, b, c, d) {
                return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0)
            },
            "*": function (a, b, c, d) {
                return c(a, b) * d(a, b)
            },
            "/": function (a, b, c, d) {
                return c(a, b) / d(a, b)
            },
            "%": function (a, b, c, d) {
                return c(a, b) % d(a, b)
            },
            "^": function (a, b, c, d) {
                return c(a, b) ^ d(a, b)
            },
            "=": o,
            "===": function (a, b, c, d) {
                return c(a, b) === d(a, b)
            },
            "!==": function (a, b, c, d) {
                return c(a, b) !== d(a, b)
            },
            "==": function (a, b, c, d) {
                return c(a, b) == d(a, b)
            },
            "!=": function (a, b, c, d) {
                return c(a, b) != d(a, b)
            },
            "<": function (a, b, c, d) {
                return c(a, b) < d(a, b)
            },
            ">": function (a, b, c, d) {
                return c(a, b) > d(a, b)
            },
            "<=": function (a, b, c, d) {
                return c(a, b) <= d(a, b)
            },
            ">=": function (a, b, c, d) {
                return c(a, b) >= d(a, b)
            },
            "&&": function (a, b, c, d) {
                return c(a, b) && d(a, b)
            },
            "||": function (a, b, c, d) {
                return c(a, b) || d(a, b)
            },
            "&": function (a, b, c, d) {
                return c(a, b) & d(a, b)
            },
            "|": function (a, b, c, d) {
                return d(a, b)(a, b, c(a, b))
            },
            "!": function (a, b, c) {
                return !c(a, b)
            }
        },
        Yd = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "",
            "'": "'",
            '"': '"'
        },
        Zd = function (a) {
            this.options = a
        };
    Zd.prototype = {
        constructor: Zd,
        lex: function (a) {
            this.text = a, this.index = 0, this.ch = c, this.lastCh = ":", this.tokens = [];
            for (var b, d = []; this.index < this.text.length;) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(this.ch)) this.readIdent(), this.was("{,") && "{" === d[0] && (b = this.tokens[this.tokens.length - 1]) && (b.json = -1 === b.text.indexOf("."));
                else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch,
                    json: this.was(":[,") && this.is("{[") || this.is("}]:,")
                }), this.is("{[") && d.unshift(this.ch), this.is("}]") && d.shift(), this.index++;
                else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue
                    }
                    var e = this.ch + this.peek(),
                        f = e + this.peek(2),
                        g = Xd[this.ch],
                        h = Xd[e],
                        i = Xd[f];
                    i ? (this.tokens.push({
                        index: this.index,
                        text: f,
                        fn: i
                    }), this.index += 3) : h ? (this.tokens.push({
                        index: this.index,
                        text: e,
                        fn: h
                    }), this.index += 2) : g ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: g,
                        json: this.was("[,:") && this.is("+-")
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
                this.lastCh = this.ch
            }
            return this.tokens
        },
        is: function (a) {
            return -1 !== a.indexOf(this.ch)
        },
        was: function (a) {
            return -1 !== a.indexOf(this.lastCh)
        },
        peek: function (a) {
            var b = a || 1;
            return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
        },
        isNumber: function (a) {
            return a >= "0" && "9" >= a
        },
        isWhitespace: function (a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
        },
        isIdent: function (a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function (a, b, c) {
            c = c || this.index;
            var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
            throw Vd("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
        },
        readNumber: function () {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var c = dd(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c;
                else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c;
                    else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
                    else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            a = 1 * a, this.tokens.push({
                index: b,
                text: a,
                json: !0,
                fn: function () {
                    return a
                }
            })
        },
        readIdent: function () {
            for (var a, b, c, d, e = this, f = "", g = this.index; this.index < this.text.length && (d = this.text.charAt(this.index), "." === d || this.isIdent(d) || this.isNumber(d));) "." === d && (a = this.index), f += d, this.index++;
            if (a)
                for (b = this.index; b < this.text.length;) {
                    if (d = this.text.charAt(b), "(" === d) {
                        c = f.substr(a - g + 1), f = f.substr(0, a - g), this.index = b;
                        break
                    }
                    if (!this.isWhitespace(d)) break;
                    b++
                }
            var h = {
                index: g,
                text: f
            };
            if (Xd.hasOwnProperty(f)) h.fn = Xd[f], h.json = Xd[f];
            else {
                var i = sc(f, this.options, this.text);
                h.fn = l(function (a, b) {
                    return i(a, b)
                }, {
                    assign: function (a, b) {
                        return oc(a, f, b, e.text, e.options)
                    }
                })
            }
            this.tokens.push(h), c && (this.tokens.push({
                index: a,
                text: ".",
                json: !1
            }), this.tokens.push({
                index: a + 1,
                text: c,
                json: !1
            }))
        },
        readString: function (a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index);
                if (d += f, e) {
                    if ("u" === f) {
                        var g = this.text.substring(this.index + 1, this.index + 5);
                        g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
                    } else {
                        var h = Yd[f];
                        c += h ? h : f
                    }
                    e = !1
                } else if ("\\" === f) e = !0;
                else {
                    if (f === a) return this.index++, void this.tokens.push({
                        index: b,
                        text: d,
                        string: c,
                        json: !0,
                        fn: function () {
                            return c
                        }
                    });
                    c += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var $d = function (a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c
    };
    $d.ZERO = function () {
        return 0
    }, $d.prototype = {
        constructor: $d,
        parse: function (a, b) {
            this.text = a, this.json = b, this.tokens = this.lexer.lex(a), b && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function () {
                this.throwError("is not valid json", {
                    text: a,
                    index: 0
                })
            });
            var c = b ? this.primary() : this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), c.literal = !!c.literal, c.constant = !!c.constant, c
        },
        primary: function () {
            var a;
            if (this.expect("(")) a = this.filterChain(), this.consume(")");
            else if (this.expect("[")) a = this.arrayDeclaration();
            else if (this.expect("{")) a = this.object();
            else {
                var b = this.expect();
                a = b.fn, a || this.throwError("not a primary expression", b), b.json && (a.constant = !0, a.literal = !0)
            }
            for (var c, d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        },
        throwError: function (a, b) {
            throw Vd("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        },
        peekToken: function () {
            if (0 === this.tokens.length) throw Vd("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function (a, b, c, d) {
            if (this.tokens.length > 0) {
                var e = this.tokens[0],
                    f = e.text;
                if (f === a || f === b || f === c || f === d || !a && !b && !c && !d) return e
            }
            return !1
        },
        expect: function (a, b, c, d) {
            var e = this.peek(a, b, c, d);
            return e ? (this.json && !e.json && this.throwError("is not valid json", e), this.tokens.shift(), e) : !1
        },
        consume: function (a) {
            this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
        },
        unaryFn: function (a, b) {
            return l(function (c, d) {
                return a(c, d, b)
            }, {
                constant: b.constant
            })
        },
        ternaryFn: function (a, b, c) {
            return l(function (d, e) {
                return a(d, e) ? b(d, e) : c(d, e)
            }, {
                constant: a.constant && b.constant && c.constant
            })
        },
        binaryFn: function (a, b, c) {
            return l(function (d, e) {
                return b(d, e, a, c)
            }, {
                constant: a.constant && c.constant
            })
        },
        statements: function () {
            for (var a = [];;)
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function (b, c) {
                    for (var d, e = 0; e < a.length; e++) {
                        var f = a[e];
                        f && (d = f(b, c))
                    }
                    return d
                }
        },
        filterChain: function () {
            for (var a, b = this.expression();;) {
                if (!(a = this.expect("|"))) return b;
                b = this.binaryFn(b, a.fn, this.filter())
            }
        },
        filter: function () {
            for (var a = this.expect(), b = this.$filter(a.text), c = [];;) {
                if (!(a = this.expect(":"))) {
                    var d = function (a, d, e) {
                        for (var f = [e], g = 0; g < c.length; g++) f.push(c[g](a, d));
                        return b.apply(a, f)
                    };
                    return function () {
                        return d
                    }
                }
                c.push(this.expression())
            }
        },
        expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var a, b, c = this.ternary();
            return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), function (b, d) {
                return c.assign(b, a(b, d), d)
            }) : c
        },
        ternary: function () {
            var a, b, c = this.logicalOR();
            return (b = this.expect("?")) ? (a = this.ternary(), (b = this.expect(":")) ? this.ternaryFn(c, a, this.ternary()) : void this.throwError("expected :", b)) : c
        },
        logicalOR: function () {
            for (var a, b = this.logicalAND();;) {
                if (!(a = this.expect("||"))) return b;
                b = this.binaryFn(b, a.fn, this.logicalAND())
            }
        },
        logicalAND: function () {
            var a, b = this.equality();
            return (a = this.expect("&&")) && (b = this.binaryFn(b, a.fn, this.logicalAND())), b
        },
        equality: function () {
            var a, b = this.relational();
            return (a = this.expect("==", "!=", "===", "!==")) && (b = this.binaryFn(b, a.fn, this.equality())), b
        },
        relational: function () {
            var a, b = this.additive();
            return (a = this.expect("<", ">", "<=", ">=")) && (b = this.binaryFn(b, a.fn, this.relational())), b
        },
        additive: function () {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = this.binaryFn(b, a.fn, this.multiplicative());
            return b
        },
        multiplicative: function () {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = this.binaryFn(b, a.fn, this.unary());
            return b
        },
        unary: function () {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn($d.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
        },
        fieldAccess: function (a) {
            var b = this,
                c = this.expect().text,
                d = sc(c, this.options, this.text);
            return l(function (b, c, e) {
                return d(e || a(b, c), c)
            }, {
                assign: function (d, e, f) {
                    return oc(a(d, f), c, e, b.text, b.options)
                }
            })
        },
        objectIndex: function (a) {
            var b = this,
                d = this.expression();
            return this.consume("]"), l(function (e, f) {
                var g, h, i = a(e, f),
                    j = d(e, f);
                return i ? (g = nc(i[j], b.text), g && g.then && b.options.unwrapPromises && (h = g, "$$v" in g || (h.$$v = c, h.then(function (a) {
                    h.$$v = a
                })), g = g.$$v), g) : c
            }, {
                assign: function (c, e, f) {
                    var g = d(c, f),
                        h = nc(a(c, f), b.text);
                    return h[g] = e
                }
            })
        },
        functionCall: function (a, b) {
            var c = [];
            if (")" !== this.peekToken().text)
                do c.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var d = this;
            return function (e, f) {
                for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++) g.push(c[i](e, f));
                var j = a(e, f, h) || o;
                nc(h, d.text), nc(j, d.text);
                var k = j.apply ? j.apply(h, g) : j(g[0], g[1], g[2], g[3], g[4]);
                return nc(k, d.text)
            }
        },
        arrayDeclaration: function () {
            var a = [],
                b = !0;
            if ("]" !== this.peekToken().text)
                do {
                    var c = this.expression();
                    a.push(c), c.constant || (b = !1)
                } while (this.expect(","));
            return this.consume("]"), l(function (b, c) {
                for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
                return d
            }, {
                literal: !0,
                constant: b
            })
        },
        object: function () {
            var a = [],
                b = !0;
            if ("}" !== this.peekToken().text)
                do {
                    var c = this.expect(),
                        d = c.string || c.text;
                    this.consume(":");
                    var e = this.expression();
                    a.push({
                        key: d,
                        value: e
                    }), e.constant || (b = !1)
                } while (this.expect(","));
            return this.consume("}"), l(function (b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var f = a[e];
                    d[f.key] = f.value(b, c)
                }
                return d
            }, {
                literal: !0,
                constant: b
            })
        }
    };
    var _d = {},
        ae = d("$sce"),
        be = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        ce = b.createElement("a"),
        de = Fc(a.location.href, !0);
    Ic.$inject = ["$provide"], Kc.$inject = ["$locale"], Lc.$inject = ["$locale"];
    var ee = ".",
        fe = {
            yyyy: Oc("FullYear", 4),
            yy: Oc("FullYear", 2, 0, !0),
            y: Oc("FullYear", 1),
            MMMM: Pc("Month"),
            MMM: Pc("Month", !0),
            MM: Oc("Month", 2, 1),
            M: Oc("Month", 1, 1),
            dd: Oc("Date", 2),
            d: Oc("Date", 1),
            HH: Oc("Hours", 2),
            H: Oc("Hours", 1),
            hh: Oc("Hours", 2, -12),
            h: Oc("Hours", 1, -12),
            mm: Oc("Minutes", 2),
            m: Oc("Minutes", 1),
            ss: Oc("Seconds", 2),
            s: Oc("Seconds", 1),
            sss: Oc("Milliseconds", 3),
            EEEE: Pc("Day"),
            EEE: Pc("Day", !0),
            a: Rc,
            Z: Qc
        },
        ge = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
        he = /^\-?\d+$/;
    Sc.$inject = ["$locale"];
    var ie = q(dd),
        je = q(ed);
    Vc.$inject = ["$parse"];
    var ke = q({
            restrict: "E",
            compile: function (a, c) {
                return 8 >= hd && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))), c.href || c.name ? void 0 : function (a, b) {
                    b.on("click", function (a) {
                        b.attr("href") || a.preventDefault()
                    })
                }
            }
        }),
        le = {};
    f(Ed, function (a, b) {
        if ("multiple" != a) {
            var c = Lb("ng-" + b);
            le[c] = function () {
                return {
                    priority: 100,
                    compile: function () {
                        return function (a, d, e) {
                            a.$watch(e[c], function (a) {
                                e.$set(b, !!a)
                            })
                        }
                    }
                }
            }
        }
    }), f(["src", "srcset", "href"], function (a) {
        var b = Lb("ng-" + a);
        le[b] = function () {
            return {
                priority: 99,
                link: function (c, d, e) {
                    e.$observe(b, function (b) {
                        b && (e.$set(a, b), hd && d.prop(a, e[a]))
                    })
                }
            }
        }
    });
    var me = {
        $addControl: o,
        $removeControl: o,
        $setValidity: o,
        $setDirty: o,
        $setPristine: o
    };
    Xc.$inject = ["$element", "$attrs", "$scope"];
    var ne = function (a) {
            return ["$timeout",
                function (b) {
                    var d = {
                        name: "form",
                        restrict: a ? "EAC" : "E",
                        controller: Xc,
                        compile: function () {
                            return {
                                pre: function (a, d, e, f) {
                                    if (!e.action) {
                                        var g = function (a) {
                                            a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                        };
                                        yd(d[0], "submit", g), d.on("$destroy", function () {
                                            b(function () {
                                                zd(d[0], "submit", g)
                                            }, 0, !1)
                                        })
                                    }
                                    var h = d.parent().controller("form"),
                                        i = e.name || e.ngForm;
                                    i && oc(a, i, f, i), h && d.on("$destroy", function () {
                                        h.$removeControl(f), i && oc(a, i, c, i), l(f, me)
                                    })
                                }
                            }
                        }
                    };
                    return d
                }
            ]
        },
        oe = ne(),
        pe = ne(!0),
        qe = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,
        se = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        te = {
            text: Yc,
            number: Zc,
            url: $c,
            email: _c,
            radio: ad,
            checkbox: bd,
            hidden: o,
            button: o,
            submit: o,
            reset: o
        },
        ue = ["$browser", "$sniffer",
            function (a, b) {
                return {
                    restrict: "E",
                    require: "?ngModel",
                    link: function (c, d, e, f) {
                        f && (te[dd(e.type)] || te.text)(c, d, e, f, b, a)
                    }
                }
            }
        ],
        ve = "ng-valid",
        we = "ng-invalid",
        xe = "ng-pristine",
        ye = "ng-dirty",
        ze = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse",
            function (a, b, c, e, g) {
                function h(a, b) {
                    b = b ? "-" + _(b, "-") : "", e.removeClass((a ? we : ve) + b).addClass((a ? ve : we) + b)
                }
                this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = c.name;
                var i = g(c.ngModel),
                    j = i.assign;
                if (!j) throw d("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", c.ngModel, T(e));
                this.$render = o, this.$isEmpty = function (a) {
                    return r(a) || "" === a || null === a || a !== a
                };
                var k = e.inheritedData("$formController") || me,
                    l = 0,
                    m = this.$error = {};
                e.addClass(xe), h(!0), this.$setValidity = function (a, b) {
                    m[a] !== !b && (b ? (m[a] && l--, l || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), this.$invalid = !0, this.$valid = !1, l++), m[a] = !b, h(b, a), k.$setValidity(a, b, this))
                }, this.$setPristine = function () {
                    this.$dirty = !1, this.$pristine = !0, e.removeClass(ye).addClass(xe)
                }, this.$setViewValue = function (c) {
                    this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, e.removeClass(xe).addClass(ye), k.$setDirty()), f(this.$parsers, function (a) {
                        c = a(c)
                    }), this.$modelValue !== c && (this.$modelValue = c, j(a, c), f(this.$viewChangeListeners, function (a) {
                        try {
                            a()
                        } catch (c) {
                            b(c)
                        }
                    }))
                };
                var n = this;
                a.$watch(function () {
                    var b = i(a);
                    if (n.$modelValue !== b) {
                        var c = n.$formatters,
                            d = c.length;
                        for (n.$modelValue = b; d--;) b = c[d](b);
                        n.$viewValue !== b && (n.$viewValue = b, n.$render())
                    }
                    return b
                })
            }
        ],
        Ae = function () {
            return {
                require: ["ngModel", "^?form"],
                controller: ze,
                link: function (a, b, c, d) {
                    var e = d[0],
                        f = d[1] || me;
                    f.$addControl(e), a.$on("$destroy", function () {
                        f.$removeControl(e)
                    })
                }
            }
        },
        Be = q({
            require: "ngModel",
            link: function (a, b, c, d) {
                d.$viewChangeListeners.push(function () {
                    a.$eval(c.ngChange)
                })
            }
        }),
        Ce = function () {
            return {
                require: "?ngModel",
                link: function (a, b, c, d) {
                    if (d) {
                        c.required = !0;
                        var e = function (a) {
                            return c.required && d.$isEmpty(a) ? void d.$setValidity("required", !1) : (d.$setValidity("required", !0), a)
                        };
                        d.$formatters.push(e), d.$parsers.unshift(e), c.$observe("required", function () {
                            e(d.$viewValue)
                        })
                    }
                }
            }
        },
        De = function () {
            return {
                require: "ngModel",
                link: function (a, b, d, e) {
                    var g = /\/(.*)\//.exec(d.ngList),
                        h = g && new RegExp(g[1]) || d.ngList || ",",
                        i = function (a) {
                            if (!r(a)) {
                                var b = [];
                                return a && f(a.split(h), function (a) {
                                    a && b.push(sd(a))
                                }), b
                            }
                        };
                    e.$parsers.push(i), e.$formatters.push(function (a) {
                        return x(a) ? a.join(", ") : c
                    }), e.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        },
        Ee = /^(true|false|\d+)$/,
        Fe = function () {
            return {
                priority: 100,
                compile: function (a, b) {
                    return Ee.test(b.ngValue) ? function (a, b, c) {
                        c.$set("value", a.$eval(c.ngValue))
                    } : function (a, b, c) {
                        a.$watch(c.ngValue, function (a) {
                            c.$set("value", a)
                        })
                    }
                }
            }
        },
        Ge = Wc(function (a, b, d) {
            b.addClass("ng-binding").data("$binding", d.ngBind), a.$watch(d.ngBind, function (a) {
                b.text(a == c ? "" : a)
            })
        }),
        He = ["$interpolate",
            function (a) {
                return function (b, c, d) {
                    var e = a(c.attr(d.$attr.ngBindTemplate));
                    c.addClass("ng-binding").data("$binding", e), d.$observe("ngBindTemplate", function (a) {
                        c.text(a)
                    })
                }
            }
        ],
        Ie = ["$sce", "$parse",
            function (a, b) {
                return function (c, d, e) {
                    function f() {
                        return (g(c) || "").toString()
                    }
                    d.addClass("ng-binding").data("$binding", e.ngBindHtml);
                    var g = b(e.ngBindHtml);
                    c.$watch(f, function () {
                        d.html(a.getTrustedHtml(g(c)) || "")
                    })
                }
            }
        ],
        Je = cd("", !0),
        Ke = cd("Odd", 0),
        Le = cd("Even", 1),
        Me = Wc({
            compile: function (a, b) {
                b.$set("ngCloak", c), a.removeClass("ng-cloak")
            }
        }),
        Ne = [
            function () {
                return {
                    scope: !0,
                    controller: "@",
                    priority: 500
                }
            }
        ],
        Oe = {};
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var b = Lb("ng-" + a);
        Oe[b] = ["$parse",
            function (c) {
                return {
                    compile: function (d, e) {
                        var f = c(e[b]);
                        return function (b, c) {
                            c.on(dd(a), function (a) {
                                b.$apply(function () {
                                    f(b, {
                                        $event: a
                                    })
                                })
                            })
                        }
                    }
                }
            }
        ]
    });
    var Pe = ["$animate",
            function (a) {
                return {
                    transclude: "element",
                    priority: 600,
                    terminal: !0,
                    restrict: "A",
                    $$tlb: !0,
                    link: function (c, d, e, f, g) {
                        var h, i;
                        c.$watch(e.ngIf, function (f) {
                            S(f) ? i || (i = c.$new(), g(i, function (c) {
                                c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                                    clone: c
                                }, a.enter(c, d.parent(), d)
                            })) : (i && (i.$destroy(), i = null), h && (a.leave(fb(h.clone)), h = null))
                        })
                    }
                }
            }
        ],
        Qe = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce",
            function (a, b, c, d, e) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: qd.noop,
                    compile: function (f, g) {
                        var h = g.ngInclude || g.src,
                            i = g.onload || "",
                            j = g.autoscroll;
                        return function (f, g, k, l, m) {
                            var n, o, p = 0,
                                q = function () {
                                    n && (n.$destroy(), n = null), o && (d.leave(o), o = null)
                                };
                            f.$watch(e.parseAsResourceUrl(h), function (e) {
                                var h = function () {
                                        !s(j) || j && !f.$eval(j) || c()
                                    },
                                    k = ++p;
                                e ? (a.get(e, {
                                    cache: b
                                }).success(function (a) {
                                    if (k === p) {
                                        var b = f.$new();
                                        l.template = a;
                                        var c = m(b, function (a) {
                                            q(), d.enter(a, null, g, h)
                                        });
                                        n = b, o = c, n.$emit("$includeContentLoaded"), f.$eval(i)
                                    }
                                }).error(function () {
                                    k === p && q()
                                }), f.$emit("$includeContentRequested")) : (q(), l.template = null)
                            })
                        }
                    }
                }
            }
        ],
        Re = ["$compile",
            function (a) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    require: "ngInclude",
                    link: function (b, c, d, e) {
                        c.html(e.template), a(c.contents())(b)
                    }
                }
            }
        ],
        Se = Wc({
            priority: 450,
            compile: function () {
                return {
                    pre: function (a, b, c) {
                        a.$eval(c.ngInit)
                    }
                }
            }
        }),
        Te = Wc({
            terminal: !0,
            priority: 1e3
        }),
        Ue = ["$locale", "$interpolate",
            function (a, b) {
                var c = /{}/g;
                return {
                    restrict: "EA",
                    link: function (d, e, g) {
                        var h = g.count,
                            i = g.$attr.when && e.attr(g.$attr.when),
                            j = g.offset || 0,
                            k = d.$eval(i) || {},
                            l = {},
                            m = b.startSymbol(),
                            n = b.endSymbol(),
                            o = /^when(Minus)?(.+)$/;
                        f(g, function (a, b) {
                            o.test(b) && (k[dd(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b]))
                        }), f(k, function (a, d) {
                            l[d] = b(a.replace(c, m + h + "-" + j + n))
                        }), d.$watch(function () {
                            var b = parseFloat(d.$eval(h));
                            return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d, e, !0))
                        }, function (a) {
                            e.text(a)
                        })
                    }
                }
            }
        ],
        Ve = ["$parse", "$animate",
            function (a, c) {
                function g(a) {
                    return a.clone[0]
                }

                function h(a) {
                    return a.clone[a.clone.length - 1]
                }
                var i = "$$NG_REMOVED",
                    j = d("ngRepeat");
                return {
                    transclude: "element",
                    priority: 1e3,
                    terminal: !0,
                    $$tlb: !0,
                    link: function (d, k, l, m, n) {
                        var o, p, q, r, s, t, u, v, w, x = l.ngRepeat,
                            y = x.match(/^\s*(.+)\s+in\s+([\r\n\s\S]*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
                            z = {
                                $id: Bb
                            };
                        if (!y) throw j("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", x);
                        if (t = y[1], u = y[2], o = y[4], o ? (p = a(o), q = function (a, b, c) {
                            return w && (z[w] = a), z[v] = b, z.$index = c, p(d, z)
                        }) : (r = function (a, b) {
                            return Bb(b)
                        }, s = function (a) {
                            return a
                        }), y = t.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !y) throw j("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", t);
                        v = y[3] || y[1], w = y[2];
                        var A = {};
                        d.$watchCollection(u, function (a) {
                            var l, m, o, p, t, u, y, z, B, C, D, E, F = k[0],
                                G = {},
                                H = [];
                            if (e(a)) C = a, B = q || r;
                            else {
                                B = q || s, C = [];
                                for (u in a) a.hasOwnProperty(u) && "$" != u.charAt(0) && C.push(u);
                                C.sort()
                            }
                            for (p = C.length, m = H.length = C.length, l = 0; m > l; l++)
                                if (u = a === C ? l : C[l], y = a[u], z = B(u, y, l), db(z, "`track by` id"), A.hasOwnProperty(z)) D = A[z], delete A[z], G[z] = D, H[l] = D;
                                else {
                                    if (G.hasOwnProperty(z)) throw f(H, function (a) {
                                        a && a.scope && (A[a.id] = a)
                                    }), j("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}", x, z);
                                    H[l] = {
                                        id: z
                                    }, G[z] = !1
                                }
                            for (u in A) A.hasOwnProperty(u) && (D = A[u], E = fb(D.clone), c.leave(E), f(E, function (a) {
                                a[i] = !0
                            }), D.scope.$destroy());
                            for (l = 0, m = C.length; m > l; l++) {
                                if (u = a === C ? l : C[l], y = a[u], D = H[l], H[l - 1] && (F = h(H[l - 1])), D.scope) {
                                    t = D.scope, o = F;
                                    do o = o.nextSibling; while (o && o[i]);
                                    g(D) != o && c.move(fb(D.clone), null, id(F)), F = h(D)
                                } else t = d.$new();
                                t[v] = y, w && (t[w] = u), t.$index = l, t.$first = 0 === l, t.$last = l === p - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & l)), D.scope || n(t, function (a) {
                                    a[a.length++] = b.createComment(" end ngRepeat: " + x + " "), c.enter(a, null, id(F)), F = a, D.scope = t, D.clone = a, G[D.id] = D
                                })
                            }
                            A = G
                        })
                    }
                }
            }
        ],
        We = ["$animate",
            function (a) {
                return function (b, c, d) {
                    b.$watch(d.ngShow, function (b) {
                        a[S(b) ? "removeClass" : "addClass"](c, "ng-hide")
                    })
                }
            }
        ],
        Xe = ["$animate",
            function (a) {
                return function (b, c, d) {
                    b.$watch(d.ngHide, function (b) {
                        a[S(b) ? "addClass" : "removeClass"](c, "ng-hide")
                    })
                }
            }
        ],
        Ye = Wc(function (a, b, c) {
            a.$watch(c.ngStyle, function (a, c) {
                c && a !== c && f(c, function (a, c) {
                    b.css(c, "")
                }), a && b.css(a)
            }, !0)
        }),
        Ze = ["$animate",
            function (a) {
                return {
                    restrict: "EA",
                    require: "ngSwitch",
                    controller: ["$scope",
                        function () {
                            this.cases = {}
                        }
                    ],
                    link: function (b, c, d, e) {
                        var g, h, i = d.ngSwitch || d.on,
                            j = [];
                        b.$watch(i, function (c) {
                            for (var i = 0, k = j.length; k > i; i++) j[i].$destroy(), a.leave(h[i]);
                            h = [], j = [], (g = e.cases["!" + c] || e.cases["?"]) && (b.$eval(d.change), f(g, function (c) {
                                var d = b.$new();
                                j.push(d), c.transclude(d, function (b) {
                                    var d = c.element;
                                    h.push(b), a.enter(b, d.parent(), d)
                                })
                            }))
                        })
                    }
                }
            }
        ],
        $e = Wc({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            compile: function (a, b) {
                return function (a, c, d, e, f) {
                    e.cases["!" + b.ngSwitchWhen] = e.cases["!" + b.ngSwitchWhen] || [], e.cases["!" + b.ngSwitchWhen].push({
                        transclude: f,
                        element: c
                    })
                }
            }
        }),
        _e = Wc({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function (a, b, c, d, e) {
                d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        af = Wc({
            controller: ["$element", "$transclude",
                function (a, b) {
                    if (!b) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(a));
                    this.$transclude = b
                }
            ],
            link: function (a, b, c, d) {
                d.$transclude(function (a) {
                    b.empty(), b.append(a)
                })
            }
        }),
        bf = ["$templateCache",
            function (a) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function (b, c) {
                        if ("text/ng-template" == c.type) {
                            var d = c.id,
                                e = b[0].text;
                            a.put(d, e)
                        }
                    }
                }
            }
        ],
        cf = d("ngOptions"),
        df = q({
            terminal: !0
        }),
        ef = ["$compile", "$parse",
            function (a, d) {
                var e = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,
                    h = {
                        $setViewValue: o
                    };
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: ["$element", "$scope", "$attrs",
                        function (a, b, c) {
                            var d, e, f = this,
                                g = {},
                                i = h;
                            f.databound = c.ngModel, f.init = function (a, b, c) {
                                i = a, d = b, e = c
                            }, f.addOption = function (b) {
                                db(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove())
                            }, f.removeOption = function (a) {
                                this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a))
                            }, f.renderUnknownOption = function (b) {
                                var c = "? " + Bb(b) + " ?";
                                e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
                            }, f.hasOption = function (a) {
                                return g.hasOwnProperty(a)
                            }, b.$on("$destroy", function () {
                                f.renderUnknownOption = o
                            })
                        }
                    ],
                    link: function (h, i, j, k) {
                        function l(a, b, c, d) {
                            c.$render = function () {
                                var a = c.$viewValue;
                                d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
                            }, b.on("change", function () {
                                a.$apply(function () {
                                    z.parent() && z.remove(), c.$setViewValue(b.val())
                                })
                            })
                        }

                        function m(a, b, c) {
                            var d;
                            c.$render = function () {
                                var a = new Cb(c.$viewValue);
                                f(b.find("option"), function (b) {
                                    b.selected = s(a.get(b.value))
                                })
                            }, a.$watch(function () {
                                K(d, c.$viewValue) || (d = I(c.$viewValue), c.$render())
                            }), b.on("change", function () {
                                a.$apply(function () {
                                    var a = [];
                                    f(b.find("option"), function (b) {
                                        b.selected && a.push(b.value)
                                    }), c.$setViewValue(a)
                                })
                            })
                        }

                        function n(b, f, h) {
                            function i() {
                                var a, c, d, e, i, j, q, u, A, B, C, D, E, F, G, H = {
                                        "": []
                                    },
                                    I = [""],
                                    J = h.$modelValue,
                                    K = p(b) || [],
                                    L = m ? g(K) : K,
                                    M = {},
                                    N = !1;
                                if (t)
                                    if (r && x(J)) {
                                        N = new Cb([]);
                                        for (var O = 0; O < J.length; O++) M[l] = J[O], N.put(r(b, M), J[O])
                                    } else N = new Cb(J);
                                for (C = 0; A = L.length, A > C; C++) {
                                    if (q = C, m) {
                                        if (q = L[C], "$" === q.charAt(0)) continue;
                                        M[m] = q
                                    }
                                    if (M[l] = K[q], a = n(b, M) || "", (c = H[a]) || (c = H[a] = [], I.push(a)), t) D = s(N.remove(r ? r(b, M) : o(b, M)));
                                    else {
                                        if (r) {
                                            var P = {};
                                            P[l] = J, D = r(b, P) === r(b, M)
                                        } else D = J === o(b, M);
                                        N = N || D
                                    }
                                    G = k(b, M), G = s(G) ? G : "", c.push({
                                        id: r ? r(b, M) : m ? L[C] : C,
                                        label: G,
                                        selected: D
                                    })
                                }
                                for (t || (v || null === J ? H[""].unshift({
                                    id: "",
                                    label: "",
                                    selected: !N
                                }) : N || H[""].unshift({
                                    id: "?",
                                    label: "",
                                    selected: !0
                                })), B = 0, u = I.length; u > B; B++) {
                                    for (a = I[B], c = H[a], z.length <= B ? (e = {
                                        element: y.clone().attr("label", a),
                                        label: c.label
                                    }, i = [e], z.push(i), f.append(e.element)) : (i = z[B], e = i[0], e.label != a && e.element.attr("label", e.label = a)), E = null, C = 0, A = c.length; A > C; C++) d = c[C], (j = i[C + 1]) ? (E = j.element, j.label !== d.label && E.text(j.label = d.label), j.id !== d.id && E.val(j.id = d.id), E[0].selected !== d.selected && E.prop("selected", j.selected = d.selected)) : ("" === d.id && v ? F = v : (F = w.clone()).val(d.id).attr("selected", d.selected).text(d.label), i.push(j = {
                                        element: F,
                                        label: d.label,
                                        id: d.id,
                                        selected: d.selected
                                    }), E ? E.after(F) : e.element.append(F), E = F);
                                    for (C++; i.length > C;) i.pop().element.remove()
                                }
                                for (; z.length > B;) z.pop()[0].element.remove()
                            }
                            var j;
                            if (!(j = u.match(e))) throw cf("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(f));
                            var k = d(j[2] || j[1]),
                                l = j[4] || j[6],
                                m = j[5],
                                n = d(j[3] || ""),
                                o = d(j[2] ? j[1] : l),
                                p = d(j[7]),
                                q = j[8],
                                r = q ? d(j[8]) : null,
                                z = [
                                    [{
                                        element: f,
                                        label: ""
                                    }]
                                ];
                            v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), f.empty(), f.on("change", function () {
                                b.$apply(function () {
                                    var a, d, e, g, i, j, k, n, q, s = p(b) || [],
                                        u = {};
                                    if (t) {
                                        for (e = [], j = 0, n = z.length; n > j; j++)
                                            for (a = z[j], i = 1, k = a.length; k > i; i++)
                                                if ((g = a[i].element)[0].selected) {
                                                    if (d = g.val(), m && (u[m] = d), r)
                                                        for (q = 0; q < s.length && (u[l] = s[q], r(b, u) != d); q++);
                                                    else u[l] = s[d];
                                                    e.push(o(b, u))
                                                }
                                    } else if (d = f.val(), "?" == d) e = c;
                                    else if ("" === d) e = null;
                                    else if (r) {
                                        for (q = 0; q < s.length; q++)
                                            if (u[l] = s[q], r(b, u) == d) {
                                                e = o(b, u);
                                                break
                                            }
                                    } else u[l] = s[d], m && (u[m] = d), e = o(b, u);
                                    h.$setViewValue(e)
                                })
                            }), h.$render = i, b.$watch(i)
                        }
                        if (k[1]) {
                            for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = id(b.createElement("option")), y = id(b.createElement("optgroup")), z = w.clone(), A = 0, B = i.children(), C = B.length; C > A; A++)
                                if ("" === B[A].value) {
                                    o = v = B.eq(A);
                                    break
                                }
                            p.init(q, v, z), t && (q.$isEmpty = function (a) {
                                return !a || 0 === a.length
                            }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
                        }
                    }
                }
            }
        ],
        ff = ["$interpolate",
            function (a) {
                var b = {
                    addOption: o,
                    removeOption: o
                };
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function (c, d) {
                        if (r(d.value)) {
                            var e = a(c.text(), !0);
                            e || d.$set("value", c.text())
                        }
                        return function (a, c, d) {
                            var f = "$selectController",
                                g = c.parent(),
                                h = g.data(f) || g.parent().data(f);
                            h && h.databound ? c.prop("selected", !1) : h = b, e ? a.$watch(e, function (a, b) {
                                d.$set("value", a), a !== b && h.removeOption(b), h.addOption(a)
                            }) : h.addOption(d.value), c.on("$destroy", function () {
                                h.removeOption(d.value)
                            })
                        }
                    }
                }
            }
        ],
        gf = q({
            restrict: "E",
            terminal: !0
        });
    ab(), hb(qd), id(b).ready(function () {
        Z(b, $)
    })
}(window, document), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>'), "undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery"); + function (a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            }
    }
    a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;
        a(this).one(a.support.transition.end, function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b()
    })
}(jQuery), + function (a) {
    "use strict";
    var b = '[data-dismiss="alert"]',
        c = function (c) {
            a(c).on("click", b, this.close)
        };
    c.prototype.close = function (b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }
        var d = a(this),
            e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    };
    var d = a.fn.alert;
    a.fn.alert = function (b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
        })
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function () {
        return a.fn.alert = d, this
    }, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(jQuery), + function (a) {
    "use strict";
    var b = function (c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d)
    };
    b.DEFAULTS = {
        loadingText: "loading..."
    }, b.prototype.setState = function (a) {
        var b = "disabled",
            c = this.$element,
            d = c.is("input") ? "val" : "html",
            e = c.data();
        a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), setTimeout(function () {
            "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
        }, 0)
    }, b.prototype.toggle = function () {
        var a = this.$element.closest('[data-toggle="buttons"]');
        if (a.length) {
            var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
            "radio" === b.prop("type") && a.find(".active").removeClass("active")
        }
        this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function () {
        return a.fn.button = c, this
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
    })
}(jQuery), + function (a) {
    "use strict";
    var b = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, b.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, b.prototype.getActiveIndex = function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, b.prototype.to = function (b) {
        var c = this,
            d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid", function () {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, b.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, b.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, b.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, b.prototype.slide = function (b, c) {
        var d = this.$element.find(".item.active"),
            e = c || d[b](),
            f = this.interval,
            g = "next" == b ? "left" : "right",
            h = "next" == b ? "first" : "last",
            i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        this.sliding = !0, f && this.pause();
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        if (!e.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                var b = a(i.$indicators.children()[i.getActiveIndex()]);
                b && b.addClass("active")
            })), a.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function () {
                    e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
                        i.$element.trigger("slid")
                    }, 0)
                }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return f && this.cycle(), this
        }
    };
    var c = a.fn.carousel;
    a.fn.carousel = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
                g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = c, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (b) {
        var c, d = a(this),
            e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
            f = a.extend({}, e.data(), d.data()),
            g = d.attr("data-slide-to");
        g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
    }), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var b = a(this);
            b.carousel(b.data())
        })
    })
}(jQuery), + function (a) {
    "use strict";
    var b = function (c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {
        toggle: !0
    }, b.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, b.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"), d || c.data("bs.collapse", null)
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function () {
                    this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    }, b.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function () {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, b.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var c = a.fn.collapse;
    a.fn.collapse = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.collapse"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = c, this
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (b) {
        var c, d = a(this),
            e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
            f = a(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : d.data(),
            i = d.attr("data-parent"),
            j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
    })
}(jQuery), + function (a) {
    "use strict";

    function b() {
        a(d).remove(), a(e).each(function (b) {
            var d = c(a(this));
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"))
        })
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    var d = ".dropdown-backdrop",
        e = "[data-toggle=dropdown]",
        f = function (b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    f.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                if ("ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown"), e.focus()
            }
            return !1
        }
    }, f.prototype.keydown = function (b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d),
                    g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
                var h = a("[role=menu] li:not(.divider):visible a", f);
                if (h.length) {
                    var i = h.index(h.filter(":focus"));
                    38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus()
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function (b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("dropdown");
            d || c.data("dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
        })
    }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = g, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown)
}(jQuery), + function (a) {
    "use strict";
    var b = function (b, c) {
        this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
    };
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, b.prototype.toggle = function (a) {
        return this[this.isShown ? "hide" : "show"](a)
    }, b.prototype.show = function (b) {
        var c = this,
            d = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function () {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        }))
    }, b.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, b.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        }, this))
    }, b.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, b.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
        })
    }, b.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, b.prototype.backdrop = function (b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function (a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    };
    var c = a.fn.modal;
    a.fn.modal = function (c, d) {
        return this.each(function () {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
        })
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
        return a.fn.modal = c, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (b) {
        var c = a(this),
            d = c.attr("href"),
            e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
            f = e.data("modal") ? "toggle" : a.extend({
                remote: !/#/.test(d) && d
            }, e.data(), c.data());
        b.preventDefault(), e.modal(f, this).one("hide", function () {
            c.is(":visible") && c.focus()
        })
    }), a(document).on("show.bs.modal", ".modal", function () {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function () {
        a(document.body).removeClass("modal-open")
    })
}(jQuery), + function (a) {
    "use strict";
    var b = function (a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, b.prototype.init = function (b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focus",
                    i = "hover" == g ? "mouseleave" : "blur";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, b.prototype.getDefaults = function () {
        return b.DEFAULTS
    }, b.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, b.prototype.getDelegateOptions = function () {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, b.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    }, b.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, b.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this.tip();
            this.setContent(), this.options.animation && c.addClass("fade");
            var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
                e = /\s?auto?\s?/i,
                f = e.test(d);
            f && (d = d.replace(e, "") || "top"), c.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
            var g = this.getPosition(),
                h = c[0].offsetWidth,
                i = c[0].offsetHeight;
            if (f) {
                var j = this.$element.parent(),
                    k = d,
                    l = document.documentElement.scrollTop || document.body.scrollTop,
                    m = "body" == this.options.container ? window.innerWidth : j.outerWidth(),
                    n = "body" == this.options.container ? window.innerHeight : j.outerHeight(),
                    o = "body" == this.options.container ? 0 : j.offset().left;
                d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, c.removeClass(k).addClass(d)
            }
            var p = this.getCalculatedOffset(d, g, h, i);
            this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type)
        }
    }, b.prototype.applyPlacement = function (a, b) {
        var c, d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
            var k = 0;
            a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, "left")
        } else this.replaceArrow(j - f, j, "top");
        c && d.offset(a)
    }, b.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, b.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, b.prototype.hide = function () {
        function b() {
            "in" != c.hoverState && d.detach()
        }
        var c = this,
            d = this.tip(),
            e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.$element.trigger("hidden.bs." + this.type), this)
    }, b.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, b.prototype.hasContent = function () {
        return this.getTitle()
    }, b.prototype.getPosition = function () {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset())
    }, b.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, b.prototype.getTitle = function () {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, b.prototype.tip = function () {
        return this.$tip = this.$tip || a(this.options.template)
    }, b.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, b.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, b.prototype.enable = function () {
        this.enabled = !0
    }, b.prototype.disable = function () {
        this.enabled = !1
    }, b.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, b.prototype.toggle = function (b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, b.prototype.destroy = function () {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof c && c;
            e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = c, this
    }
}(jQuery), + function (a) {
    "use strict";
    var b = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function () {
        return b.DEFAULTS
    }, b.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, b.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, b.prototype.getContent = function () {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, b.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, b.prototype.tip = function () {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var c = a.fn.popover;
    a.fn.popover = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof c && c;
            e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function () {
        return a.fn.popover = c, this
    }
}(jQuery), + function (a) {
    "use strict";

    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
    }
    b.DEFAULTS = {
        offset: 10
    }, b.prototype.refresh = function () {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]), this.targets = a([]); {
            var c = this;
            this.$body.find(this.selector).map(function () {
                var d = a(this),
                    e = d.data("target") || d.attr("href"),
                    f = /^#\w/.test(e) && a(e);
                return f && f.length && [
                    [f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
                ] || null
            }).sort(function (a, b) {
                return a[0] - b[0]
            }).each(function () {
                c.offsets.push(this[0]), c.targets.push(this[1])
            })
        }
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            d = c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate")
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = c, this
    }, a(window).on("load", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(jQuery), + function (a) {
    "use strict";
    var b = function (b) {
        this.element = a(b)
    };
    b.prototype.show = function () {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
                f = a.Event("show.bs.tab", {
                    relatedTarget: e
                });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function () {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    }, b.prototype.activate = function (b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }
        var f = c.find("> .active"),
            g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var c = a.fn.tab;
    a.fn.tab = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
        })
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () {
        return a.fn.tab = c, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
        b.preventDefault(), a(this).tab("show")
    })
}(jQuery), + function (a) {
    "use strict";
    var b = function (c, d) {
        this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition()
    };
    b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
        offset: 0
    }, b.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, b.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var c = a(document).height(),
                d = this.$window.scrollTop(),
                e = this.$element.offset(),
                f = this.options.offset,
                g = f.top,
                h = f.bottom;
            "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom());
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), "bottom" == i && this.$element.offset({
                top: document.body.offsetHeight - h - this.$element.height()
            }))
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function () {
        return a.fn.affix = c, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var b = a(this),
                c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
        })
    })
}(jQuery),
function (a, b, c) {
    "use strict";

    function d(a) {
        return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
    }

    function e(a, b) {
        if (!d(b)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
        for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
            var i = e[f];
            a = null !== a ? a[i] : c
        }
        return a
    }

    function f(a, c) {
        c = c || {}, b.forEach(c, function (a, b) {
            delete c[b]
        });
        for (var d in a) a.hasOwnProperty(d) && "$" !== d.charAt(0) && "$" !== d.charAt(1) && (c[d] = a[d]);
        return c
    }
    var g = b.$$minErr("$resource"),
        h = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    b.module("ngResource", ["ng"]).factory("$resource", ["$http", "$q",
        function (a, d) {
            function h(a) {
                return i(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
            }

            function i(a, b) {
                return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
            }

            function j(a, b) {
                this.template = a, this.defaults = b || {}, this.urlParams = {}
            }

            function k(h, i, r) {
                function s(a, b) {
                    var c = {};
                    return b = o({}, i, b), n(b, function (b, d) {
                        q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
                    }), c
                }

                function t(a) {
                    return a.resource
                }

                function u(a) {
                    f(a || {}, this)
                }
                var v = new j(h);
                return r = o({}, l, r), n(r, function (e, h) {
                    var i = /^(POST|PUT|PATCH)$/i.test(e.method);
                    u[h] = function (h, j, k, l) {
                        var r, w, x, y = {};
                        switch (arguments.length) {
                        case 4:
                            x = l, w = k;
                        case 3:
                        case 2:
                            if (!q(j)) {
                                y = h, r = j, w = k;
                                break
                            }
                            if (q(h)) {
                                w = h, x = j;
                                break
                            }
                            w = j, x = k;
                        case 1:
                            q(h) ? w = h : i ? r = h : y = h;
                            break;
                        case 0:
                            break;
                        default:
                            throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                        }
                        var z = this instanceof u,
                            A = z ? r : e.isArray ? [] : new u(r),
                            B = {},
                            C = e.interceptor && e.interceptor.response || t,
                            D = e.interceptor && e.interceptor.responseError || c;
                        n(e, function (a, b) {
                            "params" != b && "isArray" != b && "interceptor" != b && (B[b] = p(a))
                        }), i && (B.data = r), v.setUrlParams(B, o({}, s(r, e.params || {}), y), e.url);
                        var E = a(B).then(function (a) {
                            var c = a.data,
                                d = A.$promise;
                            if (c) {
                                if (b.isArray(c) !== !!e.isArray) throw g("badcfg", "Error in resource configuration. Expected response to contain an {0} but got an {1}", e.isArray ? "array" : "object", b.isArray(c) ? "array" : "object");
                                e.isArray ? (A.length = 0, n(c, function (a) {
                                    A.push(new u(a))
                                })) : (f(c, A), A.$promise = d)
                            }
                            return A.$resolved = !0, a.resource = A, a
                        }, function (a) {
                            return A.$resolved = !0, (x || m)(a), d.reject(a)
                        });
                        return E = E.then(function (a) {
                            var b = C(a);
                            return (w || m)(b, a.headers), b
                        }, D), z ? E : (A.$promise = E, A.$resolved = !1, A)
                    }, u.prototype["$" + h] = function (a, b, c) {
                        q(a) && (c = b, b = a, a = {});
                        var d = u[h].call(this, a, this, b, c);
                        return d.$promise || d
                    }
                }), u.bind = function (a) {
                    return k(h, o({}, i, a), r)
                }, u
            }
            var l = {
                    get: {
                        method: "GET"
                    },
                    save: {
                        method: "POST"
                    },
                    query: {
                        method: "GET",
                        isArray: !0
                    },
                    remove: {
                        method: "DELETE"
                    },
                    "delete": {
                        method: "DELETE"
                    }
                },
                m = b.noop,
                n = b.forEach,
                o = b.extend,
                p = b.copy,
                q = b.isFunction;
            return j.prototype = {
                setUrlParams: function (a, c, d) {
                    var e, f, i = this,
                        j = d || i.template,
                        k = i.urlParams = {};
                    n(j.split(/\W/), function (a) {
                        if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");
                        !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0)
                    }), j = j.replace(/\\:/g, ":"), c = c || {}, n(i.urlParams, function (a, d) {
                        e = c.hasOwnProperty(d) ? c[d] : i.defaults[d], b.isDefined(e) && null !== e ? (f = h(e), j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), f + "$1")) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function (a, b, c) {
                            return "/" == c.charAt(0) ? c : b + c
                        })
                    }), j = j.replace(/\/+$/, ""), j = j.replace(/\/\.(?=\w+($|\?))/, "."), a.url = j.replace(/\/\\\./, "/."), n(c, function (b, c) {
                        i.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
                    })
                }
            }, k
        }
    ])
}(window, window.angular),
function (a, b, c) {
    "use strict";
    b.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser",
        function (a, d) {
            function e() {
                var a, e, f, i;
                for (a in h) k(g[a]) && d.cookies(a, c);
                for (a in g) e = g[a], b.isString(e) ? e !== h[a] && (d.cookies(a, e), i = !0) : b.isDefined(h[a]) ? g[a] = h[a] : delete g[a];
                if (i) {
                    i = !1, f = d.cookies();
                    for (a in g) g[a] !== f[a] && (k(f[a]) ? delete g[a] : g[a] = f[a], i = !0)
                }
            }
            var f, g = {},
                h = {},
                i = !1,
                j = b.copy,
                k = b.isUndefined;
            return d.addPollFn(function () {
                var b = d.cookies();
                f != b && (f = b, j(b, h), j(b, g), i && a.$apply())
            })(), i = !0, a.$watch(e), g
        }
    ]).factory("$cookieStore", ["$cookies",
        function (a) {
            return {
                get: function (c) {
                    var d = a[c];
                    return d ? b.fromJson(d) : d
                },
                put: function (c, d) {
                    a[c] = b.toJson(d)
                },
                remove: function (b) {
                    delete a[b]
                }
            }
        }
    ])
}(window, window.angular),
function (a, b) {
    "use strict";

    function c() {
        this.$get = ["$$sanitizeUri",
            function (a) {
                return function (b) {
                    var c = [];
                    return f(b, i(c, function (b, c) {
                        return !/^unsafe/.test(a(b, c))
                    })), c.join("")
                }
            }
        ]
    }

    function d(a) {
        var c = [],
            d = i(c, b.noop);
        return d.chars(a), c.join("")
    }

    function e(a) {
        var b, c = {},
            d = a.split(",");
        for (b = 0; b < d.length; b++) c[d[b]] = !0;
        return c
    }

    function f(a, c) {
        function d(a, d, f, h) {
            if (d = b.lowercase(d), x[d])
                for (; s.last() && y[s.last()];) e("", s.last());
            w[d] && s.last() == d && e("", d), h = t[d] || !!h, h || s.push(d);
            var i = {};
            f.replace(m, function (a, b, c, d, e) {
                var f = c || d || e || "";
                i[b] = g(f)
            }), c.start && c.start(d, i, h)
        }

        function e(a, d) {
            var e, f = 0;
            if (d = b.lowercase(d))
                for (f = s.length - 1; f >= 0 && s[f] != d; f--);
            if (f >= 0) {
                for (e = s.length - 1; e >= f; e--) c.end && c.end(s[e]);
                s.length = f
            }
        }
        var f, h, i, s = [],
            u = a;
        for (s.last = function () {
            return s[s.length - 1]
        }; a;) {
            if (h = !0, s.last() && z[s.last()]) a = a.replace(new RegExp("(.*)<\\s*\\/\\s*" + s.last() + "[^>]*>", "i"), function (a, b) {
                return b = b.replace(p, "$1").replace(r, "$1"), c.chars && c.chars(g(b)), ""
            }), e("", s.last());
            else if (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), h = !1)) : q.test(a) ? (i = a.match(q), i && (a = a.replace(i[0], ""), h = !1)) : o.test(a) ? (i = a.match(l), i && (a = a.substring(i[0].length), i[0].replace(l, e), h = !1)) : n.test(a) && (i = a.match(k), i && (a = a.substring(i[0].length), i[0].replace(k, d), h = !1)), h) {
                f = a.indexOf("<");
                var v = 0 > f ? a : a.substring(0, f);
                a = 0 > f ? "" : a.substring(f), c.chars && c.chars(g(v))
            }
            if (a == u) throw j("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
            u = a
        }
        e()
    }

    function g(a) {
        if (!a) return "";
        var b = E.exec(a),
            c = b[1],
            d = b[3],
            e = b[2];
        return e && (D.innerHTML = e.replace(/</g, "&lt;"), e = "textContent" in D ? D.textContent : D.innerText), c + e + d
    }

    function h(a) {
        return a.replace(/&/g, "&amp;").replace(s, function (a) {
            return "&#" + a.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function i(a, c) {
        var d = !1,
            e = b.bind(a, a.push);
        return {
            start: function (a, f, g) {
                a = b.lowercase(a), !d && z[a] && (d = a), d || A[a] !== !0 || (e("<"), e(a), b.forEach(f, function (d, f) {
                    var g = b.lowercase(f),
                        i = "img" === a && "src" === g || "background" === g;
                    C[g] !== !0 || B[g] === !0 && !c(d, i) || (e(" "), e(f), e('="'), e(h(d)), e('"'))
                }), e(g ? "/>" : ">"))
            },
            end: function (a) {
                a = b.lowercase(a), d || A[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1)
            },
            chars: function (a) {
                d || e(h(a))
            }
        }
    }
    var j = b.$$minErr("$sanitize"),
        k = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,
        l = /^<\s*\/\s*([\w:-]+)[^>]*>/,
        m = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
        n = /^</,
        o = /^<\s*\//,
        p = /<!--(.*?)-->/g,
        q = /<!DOCTYPE([^>]*?)>/i,
        r = /<!\[CDATA\[(.*?)]]>/g,
        s = /([^\#-~| |!])/g,
        t = e("area,br,col,hr,img,wbr"),
        u = e("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        v = e("rp,rt"),
        w = b.extend({}, v, u),
        x = b.extend({}, u, e("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
        y = b.extend({}, v, e("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
        z = e("script,style"),
        A = b.extend({}, t, x, y, w),
        B = e("background,cite,href,longdesc,src,usemap"),
        C = b.extend({}, B, e("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),
        D = document.createElement("pre"),
        E = /^(\s*)([\s\S]*?)(\s*)$/;
    b.module("ngSanitize", []).provider("$sanitize", c), b.module("ngSanitize").filter("linky", ["$sanitize",
        function (a) {
            var c = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,
                e = /^mailto:/;
            return function (f, g) {
                function h(a) {
                    a && n.push(d(a))
                }

                function i(a, c) {
                    n.push("<a "), b.isDefined(g) && (n.push('target="'), n.push(g), n.push('" ')), n.push('href="'), n.push(a), n.push('">'), h(c), n.push("</a>")
                }
                if (!f) return f;
                for (var j, k, l, m = f, n = []; j = m.match(c);) k = j[0], j[2] == j[3] && (k = "mailto:" + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(e, "")), m = m.substring(l + j[0].length);
                return h(m), a(n.join(""))
            }
        }
    ])
}(window, window.angular),
function (a, b) {
    "use strict";

    function c() {
        function a(a, c) {
            return b.extend(new(b.extend(function () {}, {
                prototype: a
            })), c)
        }

        function c(a, b) {
            var c = b.caseInsensitiveMatch,
                d = {
                    originalPath: a,
                    regexp: a
                },
                e = d.keys = [];
            return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g, function (a, b, c, d) {
                var f = "?" === d ? d : null,
                    g = "*" === d ? d : null;
                return e.push({
                    name: c,
                    optional: !!f
                }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "")
            }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
        }
        var d = {};
        this.when = function (a, e) {
            if (d[a] = b.extend({
                reloadOnSearch: !0
            }, e, a && c(a, e)), a) {
                var f = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                d[f] = b.extend({
                    redirectTo: a
                }, c(f, e))
            }
            return this
        }, this.otherwise = function (a) {
            return this.when(null, a), this
        }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce",
            function (c, e, f, g, h, i, j, k) {
                function l(a, b) {
                    var c = b.keys,
                        d = {};
                    if (!b.regexp) return null;
                    var e = b.regexp.exec(a);
                    if (!e) return null;
                    for (var f = 1, g = e.length; g > f; ++f) {
                        var h = c[f - 1],
                            i = "string" == typeof e[f] ? decodeURIComponent(e[f]) : e[f];
                        h && i && (d[h.name] = i)
                    }
                    return d
                }

                function m() {
                    var a = n(),
                        d = q.current;
                    a && d && a.$$route === d.$$route && b.equals(a.pathParams, d.pathParams) && !a.reloadOnSearch && !p ? (d.params = a.params, b.copy(d.params, f), c.$broadcast("$routeUpdate", d)) : (a || d) && (p = !1, c.$broadcast("$routeChangeStart", a, d), q.current = a, a && a.redirectTo && (b.isString(a.redirectTo) ? e.path(o(a.redirectTo, a.params)).search(a.params).replace() : e.url(a.redirectTo(a.pathParams, e.path(), e.search())).replace()), g.when(a).then(function () {
                        if (a) {
                            var c, d, e = b.extend({}, a.resolve);
                            return b.forEach(e, function (a, c) {
                                e[c] = b.isString(a) ? h.get(a) : h.invoke(a)
                            }), b.isDefined(c = a.template) ? b.isFunction(c) && (c = c(a.params)) : b.isDefined(d = a.templateUrl) && (b.isFunction(d) && (d = d(a.params)), d = k.getTrustedResourceUrl(d), b.isDefined(d) && (a.loadedTemplateUrl = d, c = i.get(d, {
                                cache: j
                            }).then(function (a) {
                                return a.data
                            }))), b.isDefined(c) && (e.$template = c), g.all(e)
                        }
                    }).then(function (e) {
                        a == q.current && (a && (a.locals = e, b.copy(a.params, f)), c.$broadcast("$routeChangeSuccess", a, d))
                    }, function (b) {
                        a == q.current && c.$broadcast("$routeChangeError", a, d, b)
                    }))
                }

                function n() {
                    var c, f;
                    return b.forEach(d, function (d) {
                        !f && (c = l(e.path(), d)) && (f = a(d, {
                            params: b.extend({}, e.search(), c),
                            pathParams: c
                        }), f.$$route = d)
                    }), f || d[null] && a(d[null], {
                        params: {},
                        pathParams: {}
                    })
                }

                function o(a, c) {
                    var d = [];
                    return b.forEach((a || "").split(":"), function (a, b) {
                        if (0 === b) d.push(a);
                        else {
                            var e = a.match(/(\w+)(.*)/),
                                f = e[1];
                            d.push(c[f]), d.push(e[2] || ""), delete c[f]
                        }
                    }), d.join("")
                }
                var p = !1,
                    q = {
                        routes: d,
                        reload: function () {
                            p = !0, c.$evalAsync(m)
                        }
                    };
                return c.$on("$locationChangeSuccess", m), q
            }
        ]
    }

    function d() {
        this.$get = function () {
            return {}
        }
    }

    function e(a, c, d) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function (e, f, g, h, i) {
                function j() {
                    l && (l.$destroy(), l = null), m && (d.leave(m), m = null)
                }

                function k() {
                    var g = a.current && a.current.locals,
                        h = g && g.$template;
                    if (h) {
                        var k = e.$new(),
                            p = a.current,
                            q = i(k, function (a) {
                                d.enter(a, null, m || f, function () {
                                    !b.isDefined(n) || n && !e.$eval(n) || c()
                                }), j()
                            });
                        m = q, l = p.scope = k, l.$emit("$viewContentLoaded"), l.$eval(o)
                    } else j()
                }
                var l, m, n = g.autoscroll,
                    o = g.onload || "";
                e.$on("$routeChangeSuccess", k), k()
            }
        }
    }

    function f(a, b, c) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function (d, e) {
                var f = c.current,
                    g = f.locals;
                e.html(g.$template);
                var h = a(e.contents());
                if (f.controller) {
                    g.$scope = d;
                    var i = b(f.controller, g);
                    f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), e.children().data("$ngControllerController", i)
                }
                h(d)
            }
        }
    }
    var g = b.module("ngRoute", ["ng"]).provider("$route", c);
    g.provider("$routeParams", d), g.directive("ngView", e), g.directive("ngView", f), e.$inject = ["$route", "$anchorScroll", "$animate"], f.$inject = ["$compile", "$controller", "$route"]
}(window, window.angular),
function () {
    function n(a) {
        return void 0 !== a
    }

    function ba() {}

    function ca(a) {
        a.rb = function () {
            return a.ld ? a.ld : a.ld = new a
        }
    }

    function da(a) {
        var b = typeof a;
        if ("object" == b) {
            if (!a) return "null";
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function ea(a) {
        var b = da(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function q(a) {
        return "string" == typeof a
    }

    function fa(a) {
        return "number" == typeof a
    }

    function ga(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ha(a) {
        return a.call.apply(a.bind, arguments)
    }

    function ia(a, b) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 2);
            return function () {
                var d = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(d, c), a.apply(b, d)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function r() {
        return r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia, r.apply(null, arguments)
    }

    function ja(a, b) {
        function c() {}
        c.prototype = b.prototype, a.ke = b.prototype, a.prototype = new c, a.ie = function (a, c) {
            return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
        }
    }

    function ka(a) {
        if (a = String(a), /^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a)
    }

    function la() {
        this.mc = void 0
    }

    function ma(a, b, c) {
        switch (typeof b) {
        case "string":
            na(b, c);
            break;
        case "number":
            c.push(isFinite(b) && !isNaN(b) ? b : "null");
            break;
        case "boolean":
            c.push(b);
            break;
        case "undefined":
            c.push("null");
            break;
        case "object":
            if (null == b) {
                c.push("null");
                break
            }
            if ("array" == da(b)) {
                var d = b.length;
                c.push("[");
                for (var e = "", f = 0; d > f; f++) c.push(e), e = b[f], ma(a, a.mc ? a.mc.call(b, String(f), e) : e, c), e = ",";
                c.push("]");
                break
            }
            c.push("{"), d = "";
            for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), na(f, c), c.push(":"), ma(a, a.mc ? a.mc.call(b, f, e) : e, c), d = ","));
            c.push("}");
            break;
        case "function":
            break;
        default:
            throw Error("Unknown type: " + typeof b)
        }
    }

    function na(a, b) {
        b.push('"', a.replace(pa, function (a) {
            if (a in oa) return oa[a];
            var b = a.charCodeAt(0),
                c = "\\u";
            return 16 > b ? c += "000" : 256 > b ? c += "00" : 4096 > b && (c += "0"), oa[a] = c + b.toString(16)
        }), '"')
    }

    function qa(a) {
        return "undefined" != typeof JSON && n(JSON.parse) ? JSON.parse(a) : ka(a)
    }

    function u(a) {
        if ("undefined" != typeof JSON && n(JSON.stringify)) a = JSON.stringify(a);
        else {
            var b = [];
            ma(new la, a, b), a = b.join("")
        }
        return a
    }

    function ra(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e >= 55296 && 56319 >= e && (e -= 55296, d++, v(d < a.length, "Surrogate pair missing trail surrogate."), e = 65536 + (e << 10) + (a.charCodeAt(d) - 56320)), 128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (65536 > e ? b[c++] = e >> 12 | 224 : (b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128), b[c++] = e >> 6 & 63 | 128), b[c++] = 63 & e | 128)
        }
        return b
    }

    function x(a, b, c, d) {
        var e;
        if (b > d ? e = "at least " + b : d > c && (e = 0 === c ? "none" : "no more than " + c), e) throw Error(a + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + e + ".")
    }

    function y(a, b, c) {
        var d = "";
        switch (b) {
        case 1:
            d = c ? "first" : "First";
            break;
        case 2:
            d = c ? "second" : "Second";
            break;
        case 3:
            d = c ? "third" : "Third";
            break;
        case 4:
            d = c ? "fourth" : "Fourth";
            break;
        default:
            ta.assert(!1, "errorPrefix_ called with argumentNumber > 4.  Need to update it?")
        }
        return a = a + " failed: " + (d + " argument ")
    }

    function z(a, b, c, d) {
        if ((!d || n(c)) && "function" != da(c)) throw Error(y(a, b, d) + "must be a valid function.")
    }

    function ua(a, b, c) {
        if (n(c) && (!ga(c) || null === c)) throw Error(y(a, b, !0) + "must be a valid context object.")
    }

    function A(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function va(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : void 0
    }

    function ya(a) {
        return q(a) && 0 !== a.length && !wa.test(a)
    }

    function za(a, b, c) {
        c && !n(b) || Aa(y(a, 1, c), b)
    }

    function Aa(a, b, c, d) {
        if (c || (c = 0), d = d || [], !n(b)) throw Error(a + "contains undefined" + Ba(d));
        if ("function" == da(b)) throw Error(a + "contains a function" + Ba(d) + " with contents: " + b.toString());
        if (Ca(b)) throw Error(a + "contains " + b.toString() + Ba(d));
        if (c > 1e3) throw new TypeError(a + "contains a cyclic object value (" + d.slice(0, 100).join(".") + "...)");
        if (q(b) && b.length > 10485760 / 3 && 10485760 < ra(b).length) throw Error(a + "contains a string greater than 10485760 utf8 bytes" + Ba(d) + " ('" + b.substring(0, 50) + "...')");
        if (ga(b))
            for (var e in b)
                if (A(b, e)) {
                    var f = b[e];
                    if (".priority" !== e && ".value" !== e && ".sv" !== e && !ya(e)) throw Error(a + " contains an invalid key (" + e + ")" + Ba(d) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                    d.push(e), Aa(a, f, c + 1, d), d.pop()
                }
    }

    function Ba(a) {
        return 0 == a.length ? "" : " in property '" + a.join(".") + "'"
    }

    function Da(a, b) {
        if (!ga(b)) throw Error(y(a, 1, !1) + " must be an object containing the children to replace.");
        za(a, b, !1)
    }

    function Ea(a, b, c, d) {
        if (!(d && !n(c) || null === c || fa(c) || q(c) || ga(c) && A(c, ".sv"))) throw Error(y(a, b, d) + "must be a valid firebase priority (a string, number, or null).")
    }

    function Fa(a, b, c) {
        if (!c || n(b)) switch (b) {
        case "value":
        case "child_added":
        case "child_removed":
        case "child_changed":
        case "child_moved":
            break;
        default:
            throw Error(y(a, 1, c) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".')
        }
    }

    function Ga(a, b) {
        if (n(b) && !ya(b)) throw Error(y(a, 2, !0) + 'was an invalid key: "' + b + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')
    }

    function Ha(a, b) {
        if (!q(b) || 0 === b.length || xa.test(b)) throw Error(y(a, 1, !1) + 'was an invalid path: "' + b + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
    }

    function B(a, b) {
        if (".info" === C(b)) throw Error(a + " failed: Can't modify data under /.info/")
    }

    function D(a, b, c, d, e, f, g) {
        if (this.m = a, this.path = b, this.Ea = c, this.fa = d, this.ya = e, this.Ca = f, this.Wa = g, n(this.fa) && n(this.Ca) && n(this.Ea)) throw "Query: Can't combine startAt(), endAt(), and limit()."
    }

    function Ja(a) {
        var b = {};
        return n(a.fa) && (b.sp = a.fa), n(a.ya) && (b.sn = a.ya), n(a.Ca) && (b.ep = a.Ca), n(a.Wa) && (b.en = a.Wa), n(a.Ea) && (b.l = a.Ea), n(a.fa) && n(a.ya) && null === a.fa && null === a.ya && (b.vf = "l"), b
    }

    function Ia(a, b, c) {
        var d = {};
        if (b && c) d.cancel = b, z(a, 3, d.cancel, !0), d.Y = c, ua(a, 4, d.Y);
        else if (b)
            if ("object" == typeof b && null !== b) d.Y = b;
            else {
                if ("function" != typeof b) throw Error(sa.je(a, 3, !0) + "must either be a cancel callback or a context object.");
                d.cancel = b
            }
        return d
    }

    function F(a, b) {
        if (1 == arguments.length) {
            this.n = a.split("/");
            for (var c = 0, d = 0; d < this.n.length; d++) 0 < this.n[d].length && (this.n[c] = this.n[d], c++);
            this.n.length = c, this.da = 0
        } else this.n = a, this.da = b
    }

    function C(a) {
        return a.da >= a.n.length ? null : a.n[a.da]
    }

    function La(a) {
        var b = a.da;
        return b < a.n.length && b++, new F(a.n, b)
    }

    function Ma(a) {
        return a.da < a.n.length ? a.n[a.n.length - 1] : null
    }

    function Na(a, b) {
        var c = C(a);
        if (null === c) return b;
        if (c === C(b)) return Na(La(a), La(b));
        throw "INTERNAL ERROR: innerPath (" + b + ") is not within outerPath (" + a + ")"
    }

    function Oa() {
        this.children = {}, this.yc = 0, this.value = null
    }

    function Pa(a, b, c) {
        this.Fa = a ? a : "", this.Eb = b ? b : null, this.B = c ? c : new Oa
    }

    function I(a, b) {
        for (var c, d = b instanceof F ? b : new F(b), e = a; null !== (c = C(d));) e = new Pa(c, e, va(e.B.children, c) || new Oa), d = La(d);
        return e
    }

    function J(a, b) {
        v("undefined" != typeof b, "Cannot set value to undefined"), a.B.value = b, Qa(a)
    }

    function Ra(a, b, c, d) {
        c && !d && b(a), a.A(function (a) {
            Ra(a, b, !0, d)
        }), c && d && b(a)
    }

    function Sa(a, b, c) {
        for (a = c ? a : a.parent(); null !== a;) {
            if (b(a)) return !0;
            a = a.parent()
        }
        return !1
    }

    function Qa(a) {
        if (null !== a.Eb) {
            var b = a.Eb,
                c = a.Fa,
                d = a.f(),
                e = A(b.B.children, c);
            d && e ? (delete b.B.children[c], b.B.yc--, Qa(b)) : d || e || (b.B.children[c] = a.B, b.B.yc++, Qa(b))
        }
    }

    function Ta(a, b) {
        this.Ta = a ? a : Ua, this.ea = b ? b : Va
    }

    function Ua(a, b) {
        return b > a ? -1 : a > b ? 1 : 0
    }

    function Wa(a, b) {
        for (var c, d = a.ea, e = null; !d.f();) {
            if (c = a.Ta(b, d.key), 0 === c) {
                if (d.left.f()) return e ? e.key : null;
                for (d = d.left; !d.right.f();) d = d.right;
                return d.key
            }
            0 > c ? d = d.left : c > 0 && (e = d, d = d.right)
        }
        throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
    }

    function Xa(a, b) {
        for (this.ud = b, this.Zb = []; !a.f();) this.Zb.push(a), a = a.left
    }

    function Ya(a) {
        if (0 === a.Zb.length) return null;
        var b, c = a.Zb.pop();
        for (b = a.ud ? a.ud(c.key, c.value) : {
            key: c.key,
            value: c.value
        }, c = c.right; !c.f();) a.Zb.push(c), c = c.left;
        return b
    }

    function Za(a, b, c, d, e) {
        this.key = a, this.value = b, this.color = null != c ? c : !0, this.left = null != d ? d : Va, this.right = null != e ? e : Va
    }

    function bb(a) {
        return a.left.f() ? a : bb(a.left)
    }

    function db(a) {
        return a.left.f() ? Va : (a.left.Q() || a.left.left.Q() || (a = eb(a)), a = a.J(null, null, null, db(a.left), null), cb(a))
    }

    function cb(a) {
        return a.right.Q() && !a.left.Q() && (a = hb(a)), a.left.Q() && a.left.left.Q() && (a = fb(a)), a.left.Q() && a.right.Q() && (a = gb(a)), a
    }

    function eb(a) {
        return a = gb(a), a.right.left.Q() && (a = a.J(null, null, null, null, fb(a.right)), a = hb(a), a = gb(a)), a
    }

    function hb(a) {
        return a.right.J(null, null, a.color, a.J(null, null, !0, null, a.right.left), null)
    }

    function fb(a) {
        return a.left.J(null, null, a.color, null, a.J(null, null, !0, a.left.right, null))
    }

    function gb(a) {
        return a.J(null, null, !a.color, a.left.J(null, null, !a.left.color, null, null), a.right.J(null, null, !a.right.color, null, null))
    }

    function ib() {}

    function jb(a) {
        this.Ub = a, this.hc = "firebase:"
    }

    function kb() {
        this.nb = {}
    }

    function lb(a) {
        try {
            if ("undefined" != typeof window && "undefined" != typeof window[a]) {
                var b = window[a];
                return b.setItem("firebase:sentinel", "cache"), b.removeItem("firebase:sentinel"), new jb(b)
            }
        } catch (c) {}
        return new kb
    }

    function ob(a, b, c, d) {
        this.host = a.toLowerCase(), this.domain = this.host.substr(this.host.indexOf(".") + 1), this.nc = b, this.Yb = c, this.ge = d, this.ha = mb.get("host:" + a) || this.host
    }

    function pb(a, b) {
        b !== a.ha && (a.ha = b, "s-" === a.ha.substr(0, 2) && mb.set("host:" + a.host, a.ha))
    }

    function qb() {
        this.qa = -1
    }

    function rb() {
        this.qa = -1, this.qa = 64, this.C = [], this.xc = [], this.Ed = [], this.ec = [], this.ec[0] = 128;
        for (var a = 1; a < this.qa; ++a) this.ec[a] = 0;
        this.rc = this.$a = 0, this.reset()
    }

    function sb(a, b, c) {
        c || (c = 0);
        var d = a.Ed;
        if (q(b))
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = 4294967295 & (f << 1 | f >>> 31)
        }
        b = a.C[0], c = a.C[1];
        for (var g, h = a.C[2], i = a.C[3], j = a.C[4], e = 0; 80 > e; e++) 40 > e ? 20 > e ? (f = i ^ c & (h ^ i), g = 1518500249) : (f = c ^ h ^ i, g = 1859775393) : 60 > e ? (f = c & h | i & (c | h), g = 2400959708) : (f = c ^ h ^ i, g = 3395469782), f = (b << 5 | b >>> 27) + f + j + g + d[e] & 4294967295, j = i, i = h, h = 4294967295 & (c << 30 | c >>> 2), c = b, b = f;
        a.C[0] = a.C[0] + b & 4294967295, a.C[1] = a.C[1] + c & 4294967295, a.C[2] = a.C[2] + h & 4294967295, a.C[3] = a.C[3] + i & 4294967295, a.C[4] = a.C[4] + j & 4294967295
    }

    function yb(a, b) {
        var c;
        a: {
            c = a.length;
            for (var d = q(a) ? a.split("") : a, e = 0; c > e; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    c = e;
                    break a
                }
            c = -1
        }
        return 0 > c ? null : q(a) ? a.charAt(c) : a[c]
    }

    function Cb(a) {
        return -1 != zb.indexOf(a)
    }

    function Jb(a, b) {
        if (!ea(a)) throw Error("encodeByteArray takes an array as a parameter");
        if (!Hb) {
            Hb = {}, Ib = {};
            for (var c = 0; 65 > c; c++) Hb[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), Ib[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
        }
        for (var c = b ? Ib : Hb, d = [], e = 0; e < a.length; e += 3) {
            var f = a[e],
                g = e + 1 < a.length,
                h = g ? a[e + 1] : 0,
                i = e + 2 < a.length,
                j = i ? a[e + 2] : 0,
                k = f >> 2,
                f = (3 & f) << 4 | h >> 4,
                h = (15 & h) << 2 | j >> 6,
                j = 63 & j;
            i || (j = 64, g || (h = 64)), d.push(c[k], c[f], c[h], c[j])
        }
        return d.join("")
    }

    function v(a, b) {
        if (!a) throw Error("Firebase INTERNAL ASSERT FAILED:" + b)
    }

    function Lb(a) {
        var b = ra(a);
        a = new rb, a.update(b);
        var b = [],
            c = 8 * a.rc;
        56 > a.$a ? a.update(a.ec, 56 - a.$a) : a.update(a.ec, a.qa - (a.$a - 56));
        for (var d = a.qa - 1; d >= 56; d--) a.xc[d] = 255 & c, c /= 256;
        for (sb(a, a.xc), d = c = 0; 5 > d; d++)
            for (var e = 24; e >= 0; e -= 8) b[c] = a.C[d] >> e & 255, ++c;
        return Jb(b)
    }

    function Mb() {
        for (var a = "", b = 0; b < arguments.length; b++) a = ea(arguments[b]) ? a + Mb.apply(null, arguments[b]) : "object" == typeof arguments[b] ? a + u(arguments[b]) : a + arguments[b], a += " ";
        return a
    }

    function K() {
        if (!0 === Ob && (Ob = !1, null === Nb && !0 === nb.get("logging_enabled") && Pb(!0)), Nb) {
            var a = Mb.apply(null, arguments);
            Nb(a)
        }
    }

    function Qb(a) {
        return function () {
            K(a, arguments)
        }
    }

    function Rb() {
        if ("undefined" != typeof console) {
            var a = "FIREBASE INTERNAL ERROR: " + Mb.apply(null, arguments);
            "undefined" != typeof console.error ? console.error(a) : console.log(a)
        }
    }

    function Sb() {
        var a = Mb.apply(null, arguments);
        throw Error("FIREBASE FATAL ERROR: " + a)
    }

    function L() {
        if ("undefined" != typeof console) {
            var a = "FIREBASE WARNING: " + Mb.apply(null, arguments);
            "undefined" != typeof console.warn ? console.warn(a) : console.log(a)
        }
    }

    function Ca(a) {
        return fa(a) && (a != a || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY)
    }

    function Tb(a) {
        if ("complete" === document.readyState) a();
        else {
            var b = !1,
                c = function () {
                    document.body ? b || (b = !0, a()) : setTimeout(c, 10)
                };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", c, !1), window.addEventListener("load", c, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
                "complete" === document.readyState && c()
            }), window.attachEvent("onload", c))
        }
    }

    function Ub(a, b) {
        return a !== b ? null === a ? -1 : null === b ? 1 : typeof a != typeof b ? "number" == typeof a ? -1 : 1 : a > b ? 1 : -1 : 0
    }

    function Vb(a, b) {
        if (a === b) return 0;
        var c = Wb(a),
            d = Wb(b);
        return null !== c ? null !== d ? 0 == c - d ? a.length - b.length : c - d : -1 : null !== d ? 1 : b > a ? -1 : 1
    }

    function Xb(a, b) {
        if (b && a in b) return b[a];
        throw Error("Missing required key (" + a + ") in object: " + u(b))
    }

    function Ka(a) {
        if ("object" != typeof a || null === a) return u(a);
        var b, c = [];
        for (b in a) c.push(b);
        c.sort(), b = "{";
        for (var d = 0; d < c.length; d++) 0 !== d && (b += ","), b += u(c[d]), b += ":", b += Ka(a[c[d]]);
        return b + "}"
    }

    function Yb(a, b) {
        if (a.length <= b) return [a];
        for (var c = [], d = 0; d < a.length; d += b) c.push(d + b > a ? a.substring(d, a.length) : a.substring(d, d + b));
        return c
    }

    function Zb(a, b) {
        if ("array" == da(a))
            for (var c = 0; c < a.length; ++c) b(c, a[c]);
        else $b(a, b)
    }

    function ac(a, b) {
        return b ? r(a, b) : a
    }

    function bc(a) {
        v(!Ca(a), "Invalid JSON number");
        var b, c, d, e;
        for (0 === a ? (d = c = 0, b = -1 / 0 === 1 / a ? 1 : 0) : (b = 0 > a, a = Math.abs(a), a >= Math.pow(2, -1022) ? (d = Math.min(Math.floor(Math.log(a) / Math.LN2), 1023), c = d + 1023, d = Math.round(a * Math.pow(2, 52 - d) - Math.pow(2, 52))) : (c = 0, d = Math.round(a / Math.pow(2, -1074)))), e = [], a = 52; a; a -= 1) e.push(d % 2 ? 1 : 0), d = Math.floor(d / 2);
        for (a = 11; a; a -= 1) e.push(c % 2 ? 1 : 0), c = Math.floor(c / 2);
        for (e.push(b ? 1 : 0), e.reverse(), b = e.join(""), c = "", a = 0; 64 > a; a += 8) d = parseInt(b.substr(a, 8), 2).toString(16), 1 === d.length && (d = "0" + d), c += d;
        return c.toLowerCase()
    }

    function cc(a) {
        var b = "Unknown Error";
        return "too_big" === a ? b = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == a ? b = "Client doesn't have permission to access the desired data." : "unavailable" == a && (b = "The service is unavailable"), b = Error(a + ": " + b), b.code = a.toUpperCase(), b
    }

    function Wb(a) {
        return dc.test(a) && (a = Number(a), a >= -2147483648 && 2147483647 >= a) ? a : null
    }

    function ec(a) {
        try {
            a()
        } catch (b) {
            setTimeout(function () {
                throw b
            }, 0)
        }
    }

    function fc(a, b) {
        this.F = a, v(null !== this.F, "LeafNode shouldn't be created with null value."), this.gb = "undefined" != typeof b ? b : null
    }

    function ic(a, b) {
        return Ub(a.ka, b.ka) || Vb(a.name, b.name)
    }

    function jc(a, b) {
        return Vb(a.name, b.name)
    }

    function kc(a, b) {
        return Vb(a, b)
    }

    function N(a, b) {
        this.o = a || new Ta(kc), this.gb = "undefined" != typeof b ? b : null
    }

    function lc(a, b, c) {
        N.call(this, a, c), null === b && (b = new Ta(ic), a.Da(function (a, c) {
            b = b.sa({
                name: a,
                ka: c.k()
            }, c)
        })), this.xa = b
    }

    function O(a, b) {
        if (null === a) return M;
        var c = null;
        if ("object" == typeof a && ".priority" in a ? c = a[".priority"] : "undefined" != typeof b && (c = b), v(null === c || "string" == typeof c || "number" == typeof c || "object" == typeof c && ".sv" in c, "Invalid priority type found: " + typeof c), "object" == typeof a && ".value" in a && null !== a[".value"] && (a = a[".value"]), "object" != typeof a || ".sv" in a) return new fc(a, c);
        if (a instanceof Array) {
            var d = M,
                e = a;
            return $b(e, function (a, b) {
                if (A(e, b) && "." !== b.substring(0, 1)) {
                    var c = O(a);
                    (c.P() || !c.f()) && (d = d.H(b, c))
                }
            }), d.Ia(c)
        }
        var f = [],
            g = {},
            h = !1,
            i = a;
        Zb(i, function (a, b) {
            if ("string" != typeof b || "." !== b.substring(0, 1)) {
                var c = O(i[b]);
                c.f() || (h = h || null !== c.k(), f.push({
                    name: b,
                    ka: c.k()
                }), g[b] = c)
            }
        });
        var j = nc(f, g, !1);
        if (h) {
            var k = nc(f, g, !0);
            return new lc(j, k, c)
        }
        return new N(j, c)
    }

    function pc(a) {
        this.count = parseInt(Math.log(a + 1) / oc, 10), this.ed = this.count - 1, this.Gd = a + 1 & parseInt(Array(this.count + 1).join("1"), 2)
    }

    function qc(a) {
        var b = !(a.Gd & 1 << a.ed);
        return a.ed--, b
    }

    function nc(a, b, c) {
        function d(e, f) {
            var g = f - e;
            if (0 == g) return null;
            if (1 == g) {
                var g = a[e].name,
                    h = c ? a[e] : g;
                return new Za(h, b[g], !1, null, null)
            }
            var h = parseInt(g / 2, 10) + e,
                i = d(e, h),
                j = d(h + 1, f),
                g = a[h].name,
                h = c ? a[h] : g;
            return new Za(h, b[g], !1, i, j)
        }
        var e = c ? ic : jc;
        a.sort(e);
        var f = function (e) {
                function f(e, f) {
                    var j = i - e,
                        k = i;
                    i -= e;
                    var l = a[j].name,
                        j = new Za(c ? a[j] : l, b[l], f, null, d(j + 1, k));
                    g ? g.left = j : h = j, g = j
                }
                for (var g = null, h = null, i = a.length, j = 0; j < e.count; ++j) {
                    var k = qc(e),
                        l = Math.pow(2, e.count - (j + 1));
                    k ? f(l, !1) : (f(l, !1), f(l, !0))
                }
                return h
            }(new pc(a.length)),
            e = c ? ic : kc;
        return null !== f ? new Ta(e, f) : new Ta(e)
    }

    function gc(a) {
        return "number" == typeof a ? "number:" + bc(a) : "string:" + a
    }

    function P(a, b) {
        this.B = a, this.kc = b
    }

    function rc(a) {
        v("array" == da(a) && 0 < a.length, "Requires a non-empty array"), this.Fd = a, this.wb = {}
    }

    function sc(a, b) {
        v(yb(a.Fd, function (a) {
            return a === b
        }), "Unknown event: " + b)
    }

    function tc() {
        rc.call(this, ["visible"]);
        var a, b;
        if ("undefined" != typeof document && "undefined" != typeof document.addEventListener && ("undefined" != typeof document.hidden ? (b = "visibilitychange", a = "hidden") : "undefined" != typeof document.mozHidden ? (b = "mozvisibilitychange", a = "mozHidden") : "undefined" != typeof document.msHidden ? (b = "msvisibilitychange", a = "msHidden") : "undefined" != typeof document.webkitHidden && (b = "webkitvisibilitychange", a = "webkitHidden")), this.lb = !0, b) {
            var c = this;
            document.addEventListener(b, function () {
                var b = !document[a];
                b !== c.lb && (c.lb = b, c.bd("visible", b))
            }, !1)
        }
    }

    function uc() {
        if (rc.call(this, ["online"]), this.Cb = !0, "undefined" != typeof window && "undefined" != typeof window.addEventListener) {
            var a = this;
            window.addEventListener("online", function () {
                a.Cb || a.bd("online", !0), a.Cb = !0
            }, !1), window.addEventListener("offline", function () {
                a.Cb && a.bd("online", !1), a.Cb = !1
            }, !1)
        }
    }

    function $b(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function vc(a) {
        var b, c = [],
            d = 0;
        for (b in a) c[d++] = b;
        return c
    }

    function wc(a) {
        var b, c = {};
        for (b in a) c[b] = a[b];
        return c
    }

    function xc() {
        this.ob = {}
    }

    function yc(a, b, c) {
        n(c) || (c = 1), A(a.ob, b) || (a.ob[b] = 0), a.ob[b] += c
    }

    function zc(a) {
        this.Hd = a, this.Wb = null
    }

    function Ac(a, b) {
        this.Zc = {}, this.qc = new zc(a), this.u = b, setTimeout(r(this.sd, this), 10 + 6e4 * Math.random())
    }

    function Dc(a) {
        return a = a.toString(), Bc[a] || (Bc[a] = new xc), Bc[a]
    }

    function Ec(a, b) {
        var c = a.toString();
        return Cc[c] || (Cc[c] = b()), Cc[c]
    }

    function Q(a, b, c) {
        this.Ac = a, this.e = Qb(this.Ac), this.frames = this.ub = null, this.ad = 0, this.aa = Dc(b), this.Ua = (b.nc ? "wss://" : "ws://") + b.ha + "/.ws?v=5", b.host !== b.ha && (this.Ua = this.Ua + "&ns=" + b.Yb), c && (this.Ua = this.Ua + "&s=" + c)
    }

    function Ic(a, b) {
        if (a.frames.push(b), a.frames.length == a.ad) {
            var c = a.frames.join("");
            a.frames = null, c = qa(c), a.Td(c)
        }
    }

    function Hc(a) {
        clearInterval(a.ub), a.ub = setInterval(function () {
            a.W && a.W.send("0"), Hc(a)
        }, 45e3)
    }

    function Jc(a) {
        this.Pc = a, this.gc = [], this.Va = 0, this.zc = -1, this.Na = null
    }

    function Kc(a, b, c) {
        a.zc = b, a.Na = c, a.zc < a.Va && (a.Na(), a.Na = null)
    }

    function Lc(a, b, c) {
        for (a.gc[b] = c; a.gc[a.Va];) {
            var d = a.gc[a.Va];
            delete a.gc[a.Va];
            for (var e = 0; e < d.length; ++e)
                if (d[e]) {
                    var f = a;
                    ec(function () {
                        f.Pc(d[e])
                    })
                }
            if (a.Va === a.zc) {
                a.Na && (clearTimeout(a.Na), a.Na(), a.Na = null);
                break
            }
            a.Va++
        }
    }

    function Mc() {
        this.set = {}
    }

    function R(a, b) {
        $b(a.set, function (a, c) {
            b(c, a)
        })
    }

    function Nc(a, b, c) {
        this.Ac = a, this.e = Qb(a), this.aa = Dc(b), this.pc = c, this.pb = !1, this.Qb = function (a) {
            b.host !== b.ha && (a.ns = b.Yb);
            var c, d = [];
            for (c in a) a.hasOwnProperty(c) && d.push(c + "=" + a[c]);
            return (b.nc ? "https://" : "http://") + b.ha + "/.lp?" + d.join("&")
        }
    }

    function Qc(a, b, c, d) {
        if (this.Qb = d, this.ja = c, this.Rc = new Mc, this.Gb = [], this.Bc = Math.floor(1e8 * Math.random()), this.oc = !0, this.sc = Kb(), window["pLPCommand" + this.sc] = a, window["pRTLPCB" + this.sc] = b, a = document.createElement("iframe"), a.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
        document.body.appendChild(a);
        try {
            a.contentWindow.document || K("No IE domain setting required")
        } catch (e) {
            a.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close();})())"
        }
        a.contentDocument ? a.Ba = a.contentDocument : a.contentWindow ? a.Ba = a.contentWindow.document : a.document && (a.Ba = a.document), this.Z = a, a = "", this.Z.src && "javascript:" === this.Z.src.substr(0, 11) && (a = '<script>document.domain="' + document.domain + '";</script>'), a = "<html><body>" + a + "</body></html>";
        try {
            this.Z.Ba.open(), this.Z.Ba.write(a), this.Z.Ba.close()
        } catch (f) {
            K("frame writing exception"), f.stack && K(f.stack), K(f)
        }
    }

    function Sc(a) {
        if (a.vc && a.oc && a.Rc.count() < (0 < a.Gb.length ? 2 : 1)) {
            a.Bc++;
            var b = {};
            b.id = a.Rd, b.pw = a.Sd, b.ser = a.Bc;
            for (var b = a.Qb(b), c = "", d = 0; 0 < a.Gb.length && 1870 >= a.Gb[0].fd.length + 30 + c.length;) {
                var e = a.Gb.shift(),
                    c = c + "&seg" + d + "=" + e.ae + "&ts" + d + "=" + e.fe + "&d" + d + "=" + e.fd;
                d++
            }
            return Vc(a, b + c, a.Bc), !0
        }
        return !1
    }

    function Vc(a, b, c) {
        function d() {
            a.Rc.remove(c), Sc(a)
        }
        a.Rc.add(c);
        var e = setTimeout(d, 25e3);
        Rc(a, b, function () {
            clearTimeout(e), d()
        })
    }

    function Rc(a, b, c) {
        setTimeout(function () {
            try {
                if (a.oc) {
                    var d = a.Z.Ba.createElement("script");
                    d.type = "text/javascript", d.async = !0, d.src = b, d.onload = d.onreadystatechange = function () {
                        var a = d.readyState;
                        a && "loaded" !== a && "complete" !== a || (d.onload = d.onreadystatechange = null, d.parentNode && d.parentNode.removeChild(d), c())
                    }, d.onerror = function () {
                        K("Long-poll script failed to load: " + b), a.oc = !1, a.close()
                    }, a.Z.Ba.body.appendChild(d)
                }
            } catch (e) {}
        }, 1)
    }

    function Wc(a) {
        Xc(this, a)
    }

    function Xc(a, b) {
        var c = Q && Q.isAvailable(),
            d = c && !(mb.nd || !0 === mb.get("previous_websocket_failure"));
        if (b.ge && (c || L("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), d = !0), d) a.Nb = [Q];
        else {
            var e = a.Nb = [];
            Zb(Yc, function (a, b) {
                b && b.isAvailable() && e.push(b)
            })
        }
    }

    function Zc(a) {
        if (0 < a.Nb.length) return a.Nb[0];
        throw Error("No transports available")
    }

    function $c(a, b, c, d, e, f) {
        this.id = a, this.e = Qb("c:" + this.id + ":"), this.Pc = c, this.Bb = d, this.T = e, this.Oc = f, this.N = b, this.fc = [], this.cd = 0, this.Ad = new Wc(b), this.na = 0, this.e("Connection created"), ad(this)
    }

    function ad(a) {
        var b = Zc(a.Ad);
        a.K = new b("c:" + a.id + ":" + a.cd++, a.N), a.Tc = b.responsesRequiredToBeHealthy || 0;
        var c = bd(a, a.K),
            d = cd(a, a.K);
        a.Ob = a.K, a.Lb = a.K, a.w = null, a.ab = !1, setTimeout(function () {
            a.K && a.K.open(c, d)
        }, 0), b = b.healthyTimeout || 0, b > 0 && (a.Vb = setTimeout(function () {
            a.Vb = null, a.ab || (a.e("Closing unhealthy connection after timeout."), a.close())
        }, b))
    }

    function cd(a, b) {
        return function (c) {
            b === a.K ? (a.K = null, c || 0 !== a.na ? 1 === a.na && a.e("Realtime connection lost.") : (a.e("Realtime connection failed."), "s-" === a.N.ha.substr(0, 2) && (mb.remove("host:" + a.N.host), a.N.ha = a.N.host)), a.close()) : b === a.w ? (a.e("Secondary connection lost."), c = a.w, a.w = null, a.Ob !== c && a.Lb !== c || a.close()) : a.e("closing an old connection")
        }
    }

    function bd(a, b) {
        return function (c) {
            if (2 != a.na)
                if (b === a.Lb) {
                    var d = Xb("t", c);
                    if (c = Xb("d", c), "c" == d) {
                        if (d = Xb("t", c), "d" in c)
                            if (c = c.d, "h" === d) {
                                var d = c.ts,
                                    e = c.v,
                                    f = c.h;
                                a.pc = c.s, pb(a.N, f), 0 == a.na && (a.K.start(), dd(a, a.K, d), "5" !== e && L("Protocol version mismatch detected"), c = a.Ad, (c = 1 < c.Nb.length ? c.Nb[1] : null) && ed(a, c))
                            } else if ("n" === d) {
                            for (a.e("recvd end transmission on primary"), a.Lb = a.w, c = 0; c < a.fc.length; ++c) a.cc(a.fc[c]);
                            a.fc = [], fd(a)
                        } else "s" === d ? (a.e("Connection shutdown command received. Shutting down..."), a.Oc && (a.Oc(c), a.Oc = null), a.T = null, a.close()) : "r" === d ? (a.e("Reset packet received.  New host: " + c), pb(a.N, c), 1 === a.na ? a.close() : (gd(a), ad(a))) : "e" === d ? Rb("Server Error: " + c) : "o" === d ? (a.e("got pong on primary."), hd(a), id(a)) : Rb("Unknown control packet command: " + d)
                    } else "d" == d && a.cc(c)
                } else if (b === a.w)
                if (d = Xb("t", c), c = Xb("d", c), "c" == d) "t" in c && (c = c.t, "a" === c ? jd(a) : "r" === c ? (a.e("Got a reset on secondary, closing it"), a.w.close(), a.Ob !== a.w && a.Lb !== a.w || a.close()) : "o" === c && (a.e("got pong on secondary."), a.wd--, jd(a)));
                else {
                    if ("d" != d) throw Error("Unknown protocol layer: " + d);
                    a.fc.push(c)
                } else a.e("message on old connection")
        }
    }

    function fd(a) {
        a.Ob === a.w && a.Lb === a.w && (a.e("cleaning up and promoting a connection: " + a.w.Ac), a.K = a.w, a.w = null)
    }

    function jd(a) {
        0 >= a.wd ? (a.e("Secondary connection is healthy."), a.ab = !0, a.w.Lc(), a.w.start(), a.e("sending client ack on secondary"), a.w.send({
            t: "c",
            d: {
                t: "a",
                d: {}
            }
        }), a.e("Ending transmission on primary"), a.K.send({
            t: "c",
            d: {
                t: "n",
                d: {}
            }
        }), a.Ob = a.w, fd(a)) : (a.e("sending ping on secondary."), a.w.send({
            t: "c",
            d: {
                t: "p",
                d: {}
            }
        }))
    }

    function hd(a) {
        a.ab || (a.Tc--, 0 >= a.Tc && (a.e("Primary connection is healthy."), a.ab = !0, a.K.Lc()))
    }

    function ed(a, b) {
        a.w = new b("c:" + a.id + ":" + a.cd++, a.N, a.pc), a.wd = b.responsesRequiredToBeHealthy || 0, a.w.open(bd(a, a.w), cd(a, a.w)), setTimeout(function () {
            a.w && (a.e("Timed out trying to upgrade."), a.w.close())
        }, 6e4)
    }

    function dd(a, b, c) {
        a.e("Realtime connection established."), a.K = b, a.na = 1, a.Bb && (a.Bb(c), a.Bb = null), 0 === a.Tc ? (a.e("Primary connection is healthy."), a.ab = !0) : setTimeout(function () {
            id(a)
        }, 5e3)
    }

    function id(a) {
        a.ab || 1 !== a.na || (a.e("sending ping on primary."), kd(a, {
            t: "c",
            d: {
                t: "p",
                d: {}
            }
        }))
    }

    function kd(a, b) {
        if (1 !== a.na) throw "Connection is not connected";
        a.Ob.send(b)
    }

    function gd(a) {
        a.e("Shutting down all connections"), a.K && (a.K.close(), a.K = null), a.w && (a.w.close(), a.w = null), a.Vb && (clearTimeout(a.Vb), a.Vb = null)
    }

    function ld(a, b, c, d, e, f) {
        this.id = md++, this.e = Qb("p:" + this.id + ":"), this.Ra = !0, this.ia = {}, this.U = [], this.Db = 0, this.Ab = [], this.S = !1, this.ua = 1e3, this.Xb = 3e5, this.dc = b || ba, this.bc = c || ba, this.zb = d || ba, this.Qc = e || ba, this.Gc = f || ba, this.N = a, this.Vc = null, this.Kb = {}, this.$d = 0, this.vb = this.Kc = null, nd(this, 0), tc.rb().fb("visible", this.Vd, this), -1 === a.host.indexOf("fblocal") && uc.rb().fb("online", this.Ud, this)
    }

    function pd(a, b, c) {
        var d = b.toString(),
            e = b.path().toString();
        a.ia[e] = a.ia[e] || {}, v(!a.ia[e][d], "listen() called twice for same path/queryId."), a.ia[e][d] = {
            hb: b.hb(),
            D: c
        }, a.S && qd(a, e, d, b.hb(), c)
    }

    function qd(a, b, c, d, e) {
        a.e("Listen on " + b + " for " + c);
        var f = {
            p: b
        };
        d = vb(d, function (a) {
            return Ja(a)
        }), "{}" !== c && (f.q = d), f.h = a.Gc(b), a.Ga("l", f, function (d) {
            a.e("listen response", d), d = d.s, "ok" !== d && rd(a, b, c), e && e(d)
        })
    }

    function sd(a) {
        var b = a.Ka;
        a.S && b && a.Ga("auth", {
            cred: b.Id
        }, function (c) {
            var d = c.s;
            c = c.d || "error", "ok" !== d && a.Ka === b && delete a.Ka, a.zb("ok" === d), b.gd ? "ok" !== d && b.Sb && b.Sb(d, c) : (b.gd = !0, b.ba && b.ba(d, c))
        })
    }

    function td(a, b, c, d) {
        b = b.toString(), rd(a, b, c) && a.S && ud(a, b, c, d)
    }

    function ud(a, b, c, d) {
        a.e("Unlisten on " + b + " for " + c), b = {
            p: b
        }, d = vb(d, function (a) {
            return Ja(a)
        }), "{}" !== c && (b.q = d), a.Ga("u", b)
    }

    function vd(a, b, c, d) {
        a.S ? wd(a, "o", b, c, d) : a.Ab.push({
            Sc: b,
            action: "o",
            data: c,
            D: d
        })
    }

    function xd(a, b, c, d) {
        a.S ? wd(a, "om", b, c, d) : a.Ab.push({
            Sc: b,
            action: "om",
            data: c,
            D: d
        })
    }

    function wd(a, b, c, d, e) {
        c = {
            p: c,
            d: d
        }, a.e("onDisconnect " + b, c), a.Ga(b, c, function (a) {
            e && setTimeout(function () {
                e(a.s, a.d)
            }, 0)
        })
    }

    function zd(a, b, c, d) {
        yd(a, "m", b, c, d, void 0)
    }

    function yd(a, b, c, d, e, f) {
        c = {
            p: c,
            d: d
        }, n(f) && (c.h = f), a.U.push({
            action: b,
            td: c,
            D: e
        }), a.Db++, b = a.U.length - 1, a.S && Ad(a, b)
    }

    function Ad(a, b) {
        var c = a.U[b].action,
            d = a.U[b].td,
            e = a.U[b].D;
        a.U[b].Xd = a.S, a.Ga(c, d, function (d) {
            a.e(c + " response", d), delete a.U[b], a.Db--, 0 === a.Db && (a.U = []), e && e(d.s, d.d)
        })
    }

    function nd(a, b) {
        v(!a.la, "Scheduling a connect when we're already connected/ing?"), a.Xa && clearTimeout(a.Xa), a.Xa = setTimeout(function () {
            a.Xa = null, Cd(a)
        }, b)
    }

    function Cd(a) {
        if (a.Ra) {
            a.e("Making a connection attempt"), a.Kc = (new Date).getTime(), a.vb = null;
            var b = r(a.cc, a),
                c = r(a.Bb, a),
                d = r(a.pd, a),
                e = a.id + ":" + od++;
            a.la = new $c(e, a.N, b, c, d, function (b) {
                L(b + " (" + a.N.toString() + ")"), a.Ra = !1
            })
        }
    }

    function Bd(a, b, c) {
        c = c ? vb(c, function (a) {
            return Ka(a)
        }).join("$") : "{}", (a = rd(a, b, c)) && a.D && a.D("permission_denied")
    }

    function rd(a, b, c) {
        b = new F(b).toString(), c || (c = "{}");
        var d = a.ia[b][c];
        return delete a.ia[b][c], d
    }

    function Dd() {
        this.o = this.F = null
    }

    function Ed(a, b, c) {
        if (b.f()) a.F = c, a.o = null;
        else if (null !== a.F) a.F = a.F.Aa(b, c);
        else {
            null == a.o && (a.o = new Mc);
            var d = C(b);
            a.o.contains(d) || a.o.add(d, new Dd), a = a.o.get(d), b = La(b), Ed(a, b, c)
        }
    }

    function Fd(a, b) {
        if (b.f()) return a.F = null, a.o = null, !0;
        if (null !== a.F) {
            if (a.F.P()) return !1;
            var c = a.F;
            return a.F = null, c.A(function (b, c) {
                Ed(a, new F(b), c)
            }), Fd(a, b)
        }
        return null !== a.o ? (c = C(b), b = La(b), a.o.contains(c) && Fd(a.o.get(c), b) && a.o.remove(c), a.o.f() ? (a.o = null, !0) : !1) : !0
    }

    function Gd(a, b, c) {
        null !== a.F ? c(b, a.F) : a.A(function (a, d) {
            var e = new F(b.toString() + "/" + a);
            Gd(d, e, c)
        })
    }

    function Hd() {
        this.$ = M
    }

    function S(a, b) {
        return a.$.L(b)
    }

    function T(a, b, c) {
        a.$ = a.$.Aa(b, c)
    }

    function Id() {
        this.va = new Hd, this.M = new Hd, this.pa = new Hd, this.Fb = new Pa
    }

    function Jd(a, b, c) {
        return T(a.va, b, c), Kd(a, b)
    }

    function Kd(a, b) {
        for (var c = S(a.va, b), d = S(a.M, b), e = I(a.Fb, b), f = !1, g = e; null !== g;) {
            if (null !== g.j()) {
                f = !0;
                break
            }
            g = g.parent()
        }
        return f ? !1 : (c = Ld(c, d, e), c !== d ? (T(a.M, b, c), !0) : !1)
    }

    function Ld(a, b, c) {
        return c.f() ? a : null !== c.j() ? b : (a = a || M, c.A(function (d) {
            d = d.name();
            var e = a.O(d),
                f = b.O(d),
                g = I(c, d),
                e = Ld(e, f, g);
            a = a.H(d, e)
        }), a)
    }

    function Md(a, b) {
        ub(b, function (b) {
            var c = b.be;
            b = I(a.Fb, b.path);
            var d = b.j();
            v(null !== d, "pendingPut should not be null."), d === c && J(b, null)
        })
    }

    function Nd(a, b) {
        return a && "object" == typeof a ? (v(".sv" in a, "Unexpected leaf node or priority contents"), b[a[".sv"]]) : a
    }

    function Od(a, b) {
        var c = new Dd;
        return Gd(a, new F(""), function (a, d) {
            Ed(c, a, Pd(d, b))
        }), c
    }

    function Pd(a, b) {
        var c, d = Nd(a.k(), b);
        if (a.P()) {
            var e = Nd(a.j(), b);
            return e !== a.j() || d !== a.k() ? new fc(e, d) : a
        }
        return c = a, d !== a.k() && (c = c.Ia(d)), a.A(function (a, d) {
            var e = Pd(d, b);
            e !== d && (c = c.H(a, e))
        }), c
    }

    function Qd() {
        this.Ya = []
    }

    function Rd(a, b) {
        if (0 !== b.length)
            for (var c = 0; c < b.length; c++) a.Ya.push(b[c])
    }

    function Sd(a) {
        var b = a.ba,
            c = a.yd,
            d = a.Hb;
        ec(function () {
            b(c, d)
        })
    }

    function U(a, b, c, d) {
        this.type = a, this.wa = b, this.ca = c, this.Hb = d
    }

    function Td(a) {
        this.R = a, this.ra = [], this.Dc = new Qd
    }

    function Ud(a, b, c, d, e) {
        a.ra.push({
            type: b,
            ba: c,
            cancel: d,
            Y: e
        }), d = [];
        var f = Vd(a.i);
        a.tb && f.push(new U("value", a.i));
        for (var g = 0; g < f.length; g++)
            if (f[g].type === b) {
                var h = new E(a.R.m, a.R.path);
                f[g].ca && (h = h.G(f[g].ca)), d.push({
                    ba: ac(c, e),
                    yd: new P(f[g].wa, h),
                    Hb: f[g].Hb
                })
            }
        Rd(a.Dc, d)
    }

    function Wd(a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b[d],
                f = e.type,
                g = new E(a.R.m, a.R.path);
            for (b[d].ca && (g = g.G(b[d].ca)), g = new P(b[d].wa, g), "value" !== e.type || g.sb() ? "value" !== e.type && (f += " " + g.name()) : f += "(" + g.V() + ")", K(a.R.m.u.id + ": event:" + a.R.path + ":" + a.R.Pa() + ":" + f), f = 0; f < a.ra.length; f++) {
                var h = a.ra[f];
                b[d].type === h.type && c.push({
                    ba: ac(h.ba, h.Y),
                    yd: g,
                    Hb: e.Hb
                })
            }
        }
        Rd(a.Dc, c)
    }

    function Vd(a) {
        var b = [];
        if (!a.P()) {
            var c = null;
            a.A(function (a, d) {
                b.push(new U("child_added", d, a, c)), c = a
            })
        }
        return b
    }

    function Xd(a) {
        a.tb || (a.tb = !0, Wd(a, [new U("value", a.i)]))
    }

    function Yd(a, b) {
        Td.call(this, a), this.i = b
    }

    function Zd(a, b) {
        this.Tb = a, this.Mc = b
    }

    function $d(a, b, c, d, e) {
        var f = a.L(c),
            g = b.L(c);
        if (d = new Zd(d, e), e = ae(d, c, f, g), g = !f.f() && !g.f() && f.k() !== g.k(), e || g)
            for (f = c, c = e; null !== f.parent();) {
                var h = a.L(f);
                e = b.L(f);
                var i = f.parent();
                if (!d.Tb || I(d.Tb, i).j()) {
                    var j = b.L(i),
                        k = [],
                        f = Ma(f);
                    h.f() ? (h = j.ga(f, e), k.push(new U("child_added", e, f, h))) : e.f() ? k.push(new U("child_removed", h, f)) : (h = j.ga(f, e), g && k.push(new U("child_moved", e, f, h)), c && k.push(new U("child_changed", e, f, h))), d.Mc(i, j, k)
                }
                g && (g = !1, c = !0), f = i
            }
    }

    function ae(a, b, c, d) {
        var e, f = [];
        return c === d ? e = !1 : c.P() && d.P() ? e = c.j() !== d.j() : c.P() ? (be(a, b, M, d, f), e = !0) : d.P() ? (be(a, b, c, M, f), e = !0) : e = be(a, b, c, d, f), e ? a.Mc(b, d, f) : c.k() !== d.k() && a.Mc(b, d, null), e
    }

    function be(a, b, c, d, e) {
        var f, g, h, i, j = !1,
            k = !a.Tb || !I(a.Tb, b).f(),
            l = [],
            m = [],
            o = [],
            p = [],
            q = {},
            r = {};
        for (f = c.Za(), h = Ya(f), g = d.Za(), i = Ya(g); null !== h || null !== i;)
            if (c = i, c = null === h ? 1 : null === c ? -1 : h.key === c.key ? 0 : ic({
                name: h.key,
                ka: h.value.k()
            }, {
                name: c.key,
                ka: c.value.k()
            }), 0 > c ? (j = va(q, h.key), n(j) ? (o.push({
                Fc: h,
                $c: l[j]
            }), l[j] = null) : (r[h.key] = m.length, m.push(h)), j = !0, h = Ya(f)) : (c > 0 ? (j = va(r, i.key), n(j) ? (o.push({
                Fc: m[j],
                $c: i
            }), m[j] = null) : (q[i.key] = l.length, l.push(i)), j = !0) : (c = b.G(i.key), (c = ae(a, c, h.value, i.value)) && (p.push(i), j = !0), h.value.k() !== i.value.k() && (o.push({
                Fc: h,
                $c: i
            }), j = !0), h = Ya(f)), i = Ya(g)), !k && j) return !0;
        for (k = 0; k < m.length; k++)(q = m[k]) && (c = b.G(q.key), ae(a, c, q.value, M), e.push(new U("child_removed", q.value, q.key)));
        for (k = 0; k < l.length; k++)(q = l[k]) && (c = b.G(q.key), m = d.ga(q.key, q.value), ae(a, c, M, q.value), e.push(new U("child_added", q.value, q.key, m)));
        for (k = 0; k < o.length; k++) q = o[k].Fc, l = o[k].$c, c = b.G(l.key), m = d.ga(l.key, l.value), e.push(new U("child_moved", l.value, l.key, m)), (c = ae(a, c, q.value, l.value)) && p.push(l);
        for (k = 0; k < p.length; k++) a = p[k], m = d.ga(a.key, a.value), e.push(new U("child_changed", a.value, a.key, m));
        return j
    }

    function ce() {
        this.X = this.za = null, this.set = {}
    }

    function de(a, b, c) {
        a.add(b, c), a.X || (a.X = c.R.path)
    }

    function ee(a) {
        var b = a.za;
        return a.za = null, b
    }

    function fe(a) {
        return a.contains("default")
    }

    function ge(a) {
        return null != a.za && fe(a)
    }

    function he(a, b) {
        Td.call(this, a), this.i = M, this.jc(b, Vd(b))
    }

    function ie(a, b, c, d) {
        if (a.P()) return null;
        var e = null;
        return (d ? a.Ec : a.A).call(a, function (a, d) {
            return je(b, a, d) && (e = a, c--, 0 === c) ? !0 : void 0
        }), e
    }

    function je(a, b, c) {
        for (var d = 0; d < a.length; d++)
            if (!a[d](b, c.k())) return !1;
        return !0
    }

    function ke(a, b) {
        this.u = a, this.g = b, this.ac = b.$, this.oa = new Pa
    }

    function ne(a, b, c, d, e) {
        var f, g = a.get(b);
        if (f = g) {
            f = !1;
            for (var h = g.ra.length - 1; h >= 0; h--) {
                var i = g.ra[h];
                if (!(c && i.type !== c || d && i.ba !== d || e && i.Y !== e) && (g.ra.splice(h, 1), f = !0, c && d)) break
            }
        }
        return (c = f && !(0 < g.ra.length)) && a.remove(b), c
    }

    function oe(a, b, c, d, e) {
        b = b ? b.Pa() : null;
        var f = [];
        return b && "default" !== b ? ne(a, b, c, d, e) && f.push(b) : ub(a.keys(), function (b) {
            ne(a, b, c, d, e) && f.push(b)
        }), f
    }

    function pe(a, b, c, d, e, f) {
        var g = b.path(),
            g = I(a.oa, g);
        if (c = oe(b, c, d, e, f), b.f() && J(g, null), d = qe(g), 0 < c.length && !d) {
            for (d = g, e = g.parent(), c = !1; !c && e;) {
                if (f = e.j()) {
                    v(!ge(f));
                    var h = d.name(),
                        i = !1;
                    R(f, function (a, b) {
                        i = b.Hc(h) || i
                    }), i && (c = !0)
                }
                d = e, e = e.parent()
            }
            return d = null, ge(b) || (b = ee(b), d = re(a, g), b && b()), c ? null : d
        }
        return null
    }

    function se(a, b, c) {
        Ra(I(a.oa, b), function (a) {
            (a = a.j()) && R(a, function (a, b) {
                Xd(b)
            })
        }, c, !0)
    }

    function W(a, b, c) {
        function d(a) {
            do {
                if (g[a.toString()]) return !0;
                a = a.parent()
            } while (null !== a);
            return !1
        }
        var e = a.ac,
            f = a.g.$;
        a.ac = f;
        for (var g = {}, h = 0; h < c.length; h++) g[c[h].toString()] = !0;
        $d(e, f, b, a.oa, function (c, e, f) {
            if (b.contains(c)) {
                var g = d(c);
                g && se(a, c, !1), a.ic(c, e, f), g && se(a, c, !0)
            } else a.ic(c, e, f)
        }), d(b) && se(a, b, !0), te(a, b)
    }

    function te(a, b) {
        var c = I(a.oa, b);
        Ra(c, function (a) {
            (a = a.j()) && R(a, function (a, b) {
                b.Ib()
            })
        }, !0, !0), Sa(c, function (a) {
            (a = a.j()) && R(a, function (a, b) {
                b.Ib()
            })
        }, !1)
    }

    function qe(a) {
        return Sa(a, function (a) {
            return a.j() && ge(a.j())
        })
    }

    function me(a, b, c, d, e) {
        if (ge(c) || qe(b)) de(c, d, e);
        else {
            var f, g;
            c.f() || (f = c.toString(), g = c.hb()), de(c, d, e), c.setActive(ue(a, c)), f && g && td(a.u, c.path(), f, g)
        }
        ge(c) && Ra(b, function (a) {
            (a = a.j()) && (a.za && a.za(), a.za = null)
        })
    }

    function re(a, b) {
        function c(b) {
            var e = b.j();
            if (e && fe(e)) d.push(e.path()), null == e.za && e.setActive(ue(a, e));
            else {
                if (e) {
                    null != e.za || e.setActive(ue(a, e));
                    var f = {};
                    R(e, function (a, b) {
                        b.i.A(function (a) {
                            A(f, a) || (f[a] = !0, a = e.path().G(a), d.push(a))
                        })
                    })
                }
                b.A(c)
            }
        }
        var d = [];
        return c(b), d
    }

    function ue(a, b) {
        if (a.u) {
            var c, d = a.u,
                e = b.path(),
                f = b.toString(),
                g = b.hb(),
                h = b.keys(),
                i = fe(b);
            return pd(a.u, b, function (d) {
                    "ok" !== d ? (d = cc(d), L("on() or once() for " + b.path().toString() + " failed: " + d.toString()), ve(a, b, d)) : c || (i ? se(a, b.path(), !0) : ub(h, function (a) {
                        (a = b.get(a)) && Xd(a)
                    }), te(a, b.path()))
                }),
                function () {
                    c = !0, td(d, e, f, g)
                }
        }
        return ba
    }

    function ve(a, b, c) {
        b && (R(b, function (a, b) {
            for (var d = 0; d < b.ra.length; d++) {
                var e = b.ra[d];
                e.cancel && ac(e.cancel, e.Y)(c)
            }
        }), pe(a, b))
    }

    function le(a, b) {
        return "default" === a.Pa() ? new Yd(a, b) : new he(a, b)
    }

    function we(a, b, c, d, e) {
        var f = b.path();
        b = a.qb(f, b, d, e);
        var g = M,
            h = [];
        return $b(b, function (b, i) {
            var j = new F(i);
            3 === b || 1 === b ? g = g.H(i, d.L(j)) : (2 === b && h.push({
                path: f.G(i),
                ta: M
            }), h = h.concat(xe(a, d.L(j), I(c, j), e)))
        }), [{
            path: f,
            ta: g
        }].concat(h)
    }

    function ye(a, b, c, d) {
        var e;
        a: {
            var f = I(a.oa, b);
            e = f.parent();
            for (var g = []; null !== e;) {
                var h = e.j();
                if (null !== h) {
                    if (fe(h)) {
                        e = [{
                            path: b,
                            ta: c
                        }];
                        break a
                    }
                    if (h = a.qb(b, h, c, d), f = va(h, f.name()), 3 === f || 1 === f) {
                        e = [{
                            path: b,
                            ta: c
                        }];
                        break a
                    }
                    2 === f && g.push({
                        path: b,
                        ta: M
                    })
                }
                f = e, e = e.parent()
            }
            e = g
        }
        return 1 != e.length || e[0].ta.f() && !c.f() ? (g = I(a.oa, b), f = g.j(), null !== f ? fe(f) ? e.push({
            path: b,
            ta: c
        }) : e = e.concat(we(a, f, g, c, d)) : e = e.concat(xe(a, c, g, d)), e) : e
    }

    function xe(a, b, c, d) {
        var e = c.j();
        if (null !== e) return fe(e) ? [{
            path: c.path(),
            ta: b
        }] : we(a, e, c, b, d);
        var f = [];
        return c.A(function (c) {
            var e = b.P() ? M : b.O(c.name());
            c = xe(a, e, c, d), f = f.concat(c)
        }), f
    }

    function ze(a) {
        this.N = a, this.aa = Dc(a), this.u = new ld(this.N, r(this.dc, this), r(this.bc, this), r(this.zb, this), r(this.Qc, this), r(this.Gc, this)), this.zd = Ec(a, r(function () {
            return new Ac(this.aa, this.u)
        }, this)), this.Sa = new Pa, this.Ha = new Hd, this.g = new Id, this.I = new ke(this.u, this.g.pa), this.Ic = new Hd, this.Jc = new ke(null, this.Ic), Ae(this, "connected", !1), Ae(this, "authenticated", !1), this.T = new Dd, this.Cc = 0
    }

    function Be(a) {
        return a = S(a.Ic, new F(".info/serverTimeOffset")).V() || 0, (new Date).getTime() + a
    }

    function Ce(a) {
        return a = a = {
            timestamp: Be(a)
        }, a.timestamp = a.timestamp || (new Date).getTime(), a
    }

    function Ae(a, b, c) {
        b = new F("/.info/" + b), T(a.Ic, b, O(c)), W(a.Jc, b, [b])
    }

    function Ee(a) {
        a.e("onDisconnectEvents");
        var b = [],
            c = Ce(a);
        Gd(Od(a.T, c), new F(""), function (c, d) {
            var e = ye(a.I, c, d, a.g.M);
            b.push.apply(b, a.g.set(c, e)), e = Fe(a, c), De(a, e), W(a.I, e, [c])
        }), Md(a.g, b), a.T = new Dd
    }

    function Ge(a, b, c, d) {
        var e = O(c);
        vd(a.u, b.toString(), e.V(!0), function (c, f) {
            "ok" === c && Ed(a.T, b, e), X(d, c, f)
        })
    }

    function He(a, b, c, d, e) {
        var f = O(c, d);
        vd(a.u, b.toString(), f.V(!0), function (c, d) {
            "ok" === c && Ed(a.T, b, f), X(e, c, d)
        })
    }

    function Ie(a, b, c, d) {
        var e, f = !0;
        for (e in c) f = !1;
        f ? (K("onDisconnect().update() called with empty data.  Don't do anything."), X(d, "ok")) : xd(a.u, b.toString(), c, function (e, f) {
            if ("ok" === e)
                for (var g in c) {
                    var h = O(c[g]);
                    Ed(a.T, b.G(g), h)
                }
            X(d, e, f)
        })
    }

    function Je(a) {
        yc(a.aa, "deprecated_on_disconnect"), a.zd.Zc.deprecated_on_disconnect = !0
    }

    function X(a, b, c) {
        a && ec(function () {
            if ("ok" == b) a(null, c);
            else {
                var d = (b || "error").toUpperCase(),
                    e = d;
                c && (e += ": " + c), e = Error(e), e.code = d, a(e)
            }
        })
    }

    function Ke(a, b, c, d, e) {
        function f() {}
        a.e("transaction on " + b);
        var g = new E(a, b);
        if (g.fb("value", f), c = {
            path: b,
            update: c,
            D: d,
            status: null,
            qd: Kb(),
            wc: e,
            vd: 0,
            tc: function () {
                g.yb("value", f)
            },
            uc: null
        }, a.Ha.$ = Le(a, a.Ha.$, a.g.M.$, a.Sa), d = c.update(S(a.Ha, b).V()), n(d)) {
            Aa("transaction failed: Data returned ", d), c.status = 1, e = I(a.Sa, b);
            var h = e.j() || [];
            h.push(c), J(e, h), h = "object" == typeof d && null !== d && A(d, ".priority") ? d[".priority"] : S(a.g.M, b).k(), e = Ce(a), d = O(d, h), d = Pd(d, e), T(a.Ha, b, d), c.wc && (T(a.g.pa, b, d), W(a.I, b, [b])), Me(a)
        } else c.tc(), c.D && (a = Ne(a, b), c.D(null, !1, a))
    }

    function Me(a, b) {
        var c = b || a.Sa;
        if (b || Oe(a, c), null !== c.j()) {
            var d = Pe(a, c);
            v(0 < d.length), xb(d, function (a) {
                return 1 === a.status
            }) && Qe(a, c.path(), d)
        } else c.sb() && c.A(function (b) {
            Me(a, b)
        })
    }

    function Qe(a, b, c) {
        for (var d = 0; d < c.length; d++) v(1 === c[d].status, "tryToSendTransactionQueue_: items in queue should all be run."), c[d].status = 2, c[d].vd++;
        var e = S(a.g.M, b).hash();
        T(a.g.M, b, S(a.g.pa, b));
        for (var f = S(a.Ha, b).V(!0), g = Kb(), h = Re(c), d = 0; d < h.length; d++) J(I(a.g.Fb, h[d]), g);
        a.u.put(b.toString(), f, function (e) {
            for (a.e("transaction put response", {
                path: b.toString(),
                status: e
            }), d = 0; d < h.length; d++) {
                var f = I(a.g.Fb, h[d]),
                    i = f.j();
                v(null !== i, "sendTransactionQueue_: pendingPut should not be null."), i === g && (J(f, null), T(a.g.M, h[d], S(a.g.va, h[d])))
            }
            if ("ok" === e) {
                for (e = [], d = 0; d < c.length; d++) c[d].status = 3, c[d].D && (f = Ne(a, c[d].path), e.push(r(c[d].D, null, null, !0, f))), c[d].tc();
                for (Oe(a, I(a.Sa, b)), Me(a), d = 0; d < e.length; d++) ec(e[d])
            } else {
                if ("datastale" === e)
                    for (d = 0; d < c.length; d++) c[d].status = 4 === c[d].status ? 5 : 1;
                else
                    for (L("transaction at " + b + " failed: " + e), d = 0; d < c.length; d++) c[d].status = 5, c[d].uc = e;
                e = De(a, b), W(a.I, e, [b])
            }
        }, e)
    }

    function Re(a) {
        for (var b = {}, c = 0; c < a.length; c++) a[c].wc && (b[a[c].path.toString()] = a[c].path);
        a = [];
        for (var d in b) a.push(b[d]);
        return a
    }

    function De(a, b) {
        var c = Se(a, b),
            d = c.path(),
            c = Pe(a, c);
        if (T(a.g.pa, d, S(a.g.M, d)), T(a.Ha, d, S(a.g.M, d)), 0 !== c.length) {
            for (var e = S(a.g.pa, d), f = e, g = [], h = 0; h < c.length; h++) {
                var i, j = Na(d, c[h].path),
                    k = !1;
                if (v(null !== j, "rerunTransactionsUnderNode_: relativePath should not be null."), 5 === c[h].status) k = !0, i = c[h].uc;
                else if (1 === c[h].status)
                    if (25 <= c[h].vd) k = !0, i = "maxretry";
                    else {
                        var l = e.L(j),
                            m = c[h].update(l.V());
                        if (n(m)) {
                            Aa("transaction failed: Data returned ", m);
                            var o = O(m);
                            "object" == typeof m && null != m && A(m, ".priority") || (o = o.Ia(l.k())), e = e.Aa(j, o), c[h].wc && (f = f.Aa(j, o))
                        } else k = !0, i = "nodata"
                    }
                k && (c[h].status = 3, setTimeout(c[h].tc, 0), c[h].D && (k = new E(a, c[h].path), j = new P(e.L(j), k), g.push("nodata" === i ? r(c[h].D, null, null, !1, j) : r(c[h].D, null, Error(i), !1, j))))
            }
            for (T(a.Ha, d, e), T(a.g.pa, d, f), Oe(a, a.Sa), h = 0; h < g.length; h++) ec(g[h]);
            Me(a)
        }
        return d
    }

    function Se(a, b) {
        for (var c, d = a.Sa; null !== (c = C(b)) && null === d.j();) d = I(d, c), b = La(b);
        return d
    }

    function Pe(a, b) {
        var c = [];
        return Te(a, b, c), c.sort(function (a, b) {
            return a.qd - b.qd
        }), c
    }

    function Te(a, b, c) {
        var d = b.j();
        if (null !== d)
            for (var e = 0; e < d.length; e++) c.push(d[e]);
        b.A(function (b) {
            Te(a, b, c)
        })
    }

    function Oe(a, b) {
        var c = b.j();
        if (c) {
            for (var d = 0, e = 0; e < c.length; e++) 3 !== c[e].status && (c[d] = c[e], d++);
            c.length = d, J(b, 0 < c.length ? c : null)
        }
        b.A(function (b) {
            Oe(a, b)
        })
    }

    function Fe(a, b) {
        var c = Se(a, b).path(),
            d = I(a.Sa, b);
        return Sa(d, function (a) {
            Ue(a)
        }), Ue(d), Ra(d, function (a) {
            Ue(a)
        }), c
    }

    function Ue(a) {
        var b = a.j();
        if (null !== b) {
            for (var c = [], d = -1, e = 0; e < b.length; e++) 4 !== b[e].status && (2 === b[e].status ? (v(d === e - 1, "All SENT items should be at beginning of queue."), d = e, b[e].status = 4, b[e].uc = "set") : (v(1 === b[e].status), b[e].tc(), b[e].D && c.push(r(b[e].D, null, Error("set"), !1, null))));
            for (-1 === d ? J(a, null) : b.length = d + 1, e = 0; e < c.length; e++) ec(c[e])
        }
    }

    function Ne(a, b) {
        var c = new E(a, b);
        return new P(S(a.Ha, b), c)
    }

    function Le(a, b, c, d) {
        if (d.f()) return c;
        if (null != d.j()) return b;
        var e = c;
        return d.A(function (d) {
            var f = d.name(),
                g = new F(f);
            d = Le(a, b.L(g), c.L(g), d), e = e.H(f, d)
        }), e
    }

    function Y() {
        this.ib = {}
    }

    function $(a, b, c) {
        this.Jb = a, this.X = b, this.Fa = c
    }

    function E(a, b) {
        var c, d;
        if (a instanceof ze) c = a, d = b;
        else {
            x("new Firebase", 1, 2, arguments.length);
            var e = arguments[0];
            d = c = "";
            var f = !0,
                g = "";
            if (q(e)) {
                var h = e.indexOf("//");
                if (h >= 0) var i = e.substring(0, h - 1),
                    e = e.substring(h + 2);
                h = e.indexOf("/"), -1 === h && (h = e.length), c = e.substring(0, h);
                var e = e.substring(h + 1),
                    j = c.split(".");
                if (3 == j.length) {
                    if (h = j[2].indexOf(":"), f = h >= 0 ? "https" === i || "wss" === i : !0, "firebase" === j[1]) Sb(c + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
                    else
                        for (d = j[0], g = "", e = ("/" + e).split("/"), h = 0; h < e.length; h++)
                            if (0 < e[h].length) {
                                j = e[h];
                                try {
                                    j = decodeURIComponent(j.replace(/\+/g, " "))
                                } catch (k) {}
                                g += "/" + j
                            }
                    d = d.toLowerCase()
                } else Sb("Cannot parse Firebase url. Please use https:<YOUR FIREBASE>.firebaseio.com")
            }
            if (f || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && L("Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."), c = new ob(c, f, d, "ws" === i || "wss" === i), d = new F(g), f = d.toString(), !(i = !q(c.host) || 0 === c.host.length || !ya(c.Yb)) && (i = 0 !== f.length) && (f && (f = f.replace(/^\/*\.info(\/|$)/, "/")), i = !(q(f) && 0 !== f.length && !xa.test(f))), i) throw Error(y("new Firebase", 1, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
            if (b) {
                if (!(b instanceof Y)) throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
                f = b
            } else f = Y.rb();
            i = c.toString(), e = va(f.ib, i), e || (e = new ze(c), f.ib[i] = e), c = e
        }
        D.call(this, c, d)
    }

    function Pb(a, b) {
        v(!b || !0 === a || !1 === a, "Can't turn on custom loggers persistently."), !0 === a ? ("undefined" != typeof console && ("function" == typeof console.log ? Nb = r(console.log, console) : "object" == typeof console.log && (Nb = function (a) {
            console.log(a)
        })), b && nb.set("logging_enabled", !0)) : a ? Nb = a : (Nb = null, nb.remove("logging_enabled"))
    }
    var h, aa = this,
        oa = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "	": "\\t",
            "": "\\u000b"
        },
        pa = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        sa = {},
        ta = {},
        wa = /[\[\].#$\/]/,
        xa = /[\[\].#$]/;
    D.prototype.Uc = function () {
        return x("Query.ref", 0, 0, arguments.length), new E(this.m, this.path)
    }, D.prototype.ref = D.prototype.Uc, D.prototype.fb = function (a, b) {
        x("Query.on", 2, 4, arguments.length), Fa("Query.on", a, !1), z("Query.on", 2, b, !1);
        var c = Ia("Query.on", arguments[2], arguments[3]);
        return this.m.Rb(this, a, b, c.cancel, c.Y), b
    }, D.prototype.on = D.prototype.fb, D.prototype.yb = function (a, b, c) {
        x("Query.off", 0, 3, arguments.length), Fa("Query.off", a, !0), z("Query.off", 2, b, !0), ua("Query.off", 3, c), this.m.lc(this, a, b, c)
    }, D.prototype.off = D.prototype.yb, D.prototype.Wd = function (a, b) {
        function c(g) {
            f && (f = !1, e.yb(a, c), b.call(d.Y, g))
        }
        x("Query.once", 2, 4, arguments.length), Fa("Query.once", a, !1), z("Query.once", 2, b, !1);
        var d = Ia("Query.once", arguments[2], arguments[3]),
            e = this,
            f = !0;
        this.fb(a, c, function (b) {
            e.yb(a, c), d.cancel && d.cancel.call(d.Y, b)
        })
    }, D.prototype.once = D.prototype.Wd, D.prototype.Pd = function (a) {
        if (x("Query.limit", 1, 1, arguments.length), !fa(a) || Math.floor(a) !== a || 0 >= a) throw "Query.limit: First argument must be a positive integer.";
        return new D(this.m, this.path, a, this.fa, this.ya, this.Ca, this.Wa)
    }, D.prototype.limit = D.prototype.Pd, D.prototype.ee = function (a, b) {
        return x("Query.startAt", 0, 2, arguments.length), Ea("Query.startAt", 1, a, !0), Ga("Query.startAt", b), n(a) || (b = a = null), new D(this.m, this.path, this.Ea, a, b, this.Ca, this.Wa)
    }, D.prototype.startAt = D.prototype.ee, D.prototype.Jd = function (a, b) {
        return x("Query.endAt", 0, 2, arguments.length), Ea("Query.endAt", 1, a, !0), Ga("Query.endAt", b), new D(this.m, this.path, this.Ea, this.fa, this.ya, a, b)
    }, D.prototype.endAt = D.prototype.Jd, D.prototype.Pa = function () {
        var a = Ka(Ja(this));
        return "{}" === a ? "default" : a
    }, h = F.prototype, h.toString = function () {
        for (var a = "", b = this.da; b < this.n.length; b++) "" !== this.n[b] && (a += "/" + this.n[b]);
        return a || "/"
    }, h.parent = function () {
        if (this.da >= this.n.length) return null;
        for (var a = [], b = this.da; b < this.n.length - 1; b++) a.push(this.n[b]);
        return new F(a, 0)
    }, h.G = function (a) {
        for (var b = [], c = this.da; c < this.n.length; c++) b.push(this.n[c]);
        if (a instanceof F)
            for (c = a.da; c < a.n.length; c++) b.push(a.n[c]);
        else
            for (a = a.split("/"), c = 0; c < a.length; c++) 0 < a[c].length && b.push(a[c]);
        return new F(b, 0)
    }, h.f = function () {
        return this.da >= this.n.length
    }, h.contains = function (a) {
        var b = 0;
        if (this.n.length > a.n.length) return !1;
        for (; b < this.n.length;) {
            if (this.n[b] !== a.n[b]) return !1;
            ++b
        }
        return !0
    }, h = Pa.prototype, h.j = function () {
        return this.B.value
    }, h.sb = function () {
        return 0 < this.B.yc
    }, h.f = function () {
        return null === this.j() && !this.sb()
    }, h.A = function (a) {
        for (var b in this.B.children) a(new Pa(b, this, this.B.children[b]))
    }, h.path = function () {
        return new F(null === this.Eb ? this.Fa : this.Eb.path() + "/" + this.Fa)
    }, h.name = function () {
        return this.Fa
    }, h.parent = function () {
        return this.Eb
    }, h = Ta.prototype, h.sa = function (a, b) {
        return new Ta(this.Ta, this.ea.sa(a, b, this.Ta).J(null, null, !1, null, null))
    }, h.remove = function (a) {
        return new Ta(this.Ta, this.ea.remove(a, this.Ta).J(null, null, !1, null, null))
    }, h.get = function (a) {
        for (var b, c = this.ea; !c.f();) {
            if (b = this.Ta(a, c.key), 0 === b) return c.value;
            0 > b ? c = c.left : b > 0 && (c = c.right)
        }
        return null
    }, h.f = function () {
        return this.ea.f()
    }, h.count = function () {
        return this.ea.count()
    }, h.xb = function () {
        return this.ea.xb()
    }, h.bb = function () {
        return this.ea.bb()
    }, h.Da = function (a) {
        return this.ea.Da(a)
    }, h.Qa = function (a) {
        return this.ea.Qa(a)
    }, h.Za = function (a) {
        return new Xa(this.ea, a)
    }, h = Za.prototype, h.J = function (a, b, c, d, e) {
        return new Za(null != a ? a : this.key, null != b ? b : this.value, null != c ? c : this.color, null != d ? d : this.left, null != e ? e : this.right)
    }, h.count = function () {
        return this.left.count() + 1 + this.right.count()
    }, h.f = function () {
        return !1
    }, h.Da = function (a) {
        return this.left.Da(a) || a(this.key, this.value) || this.right.Da(a)
    }, h.Qa = function (a) {
        return this.right.Qa(a) || a(this.key, this.value) || this.left.Qa(a)
    }, h.xb = function () {
        return bb(this).key
    }, h.bb = function () {
        return this.right.f() ? this.key : this.right.bb()
    }, h.sa = function (a, b, c) {
        var d, e;
        return e = this, d = c(a, e.key), e = 0 > d ? e.J(null, null, null, e.left.sa(a, b, c), null) : 0 === d ? e.J(null, b, null, null, null) : e.J(null, null, null, null, e.right.sa(a, b, c)), cb(e)
    }, h.remove = function (a, b) {
        var c, d;
        if (c = this, 0 > b(a, c.key)) c.left.f() || c.left.Q() || c.left.left.Q() || (c = eb(c)), c = c.J(null, null, null, c.left.remove(a, b), null);
        else {
            if (c.left.Q() && (c = fb(c)), c.right.f() || c.right.Q() || c.right.left.Q() || (c = gb(c), c.left.left.Q() && (c = fb(c), c = gb(c))), 0 === b(a, c.key)) {
                if (c.right.f()) return Va;
                d = bb(c.right), c = c.J(d.key, d.value, null, null, db(c.right))
            }
            c = c.J(null, null, null, null, c.right.remove(a, b))
        }
        return cb(c)
    }, h.Q = function () {
        return this.color
    }, h = ib.prototype, h.J = function () {
        return this
    }, h.sa = function (a, b) {
        return new Za(a, b, null)
    }, h.remove = function () {
        return this
    }, h.count = function () {
        return 0
    }, h.f = function () {
        return !0
    }, h.Da = function () {
        return !1
    }, h.Qa = function () {
        return !1
    }, h.xb = function () {
        return null
    }, h.bb = function () {
        return null
    }, h.Q = function () {
        return !1
    };
    var Va = new ib;
    jb.prototype.set = function (a, b) {
        null == b ? this.Ub.removeItem(this.hc + a) : this.Ub.setItem(this.hc + a, u(b))
    }, jb.prototype.get = function (a) {
        return a = this.Ub.getItem(this.hc + a), null == a ? null : qa(a)
    }, jb.prototype.remove = function (a) {
        this.Ub.removeItem(this.hc + a)
    }, jb.prototype.nd = !1, kb.prototype.set = function (a, b) {
        null == b ? delete this.nb[a] : this.nb[a] = b
    }, kb.prototype.get = function (a) {
        return A(this.nb, a) ? this.nb[a] : null
    }, kb.prototype.remove = function (a) {
        delete this.nb[a]
    }, kb.prototype.nd = !0;
    var mb = lb("localStorage"),
        nb = lb("sessionStorage");
    ob.prototype.toString = function () {
        return (this.nc ? "https://" : "http://") + this.host
    }, ja(rb, qb), rb.prototype.reset = function () {
        this.C[0] = 1732584193, this.C[1] = 4023233417, this.C[2] = 2562383102, this.C[3] = 271733878, this.C[4] = 3285377520, this.rc = this.$a = 0
    }, rb.prototype.update = function (a, b) {
        n(b) || (b = a.length);
        for (var c = b - this.qa, d = 0, e = this.xc, f = this.$a; b > d;) {
            if (0 == f)
                for (; c >= d;) sb(this, a, d), d += this.qa;
            if (q(a)) {
                for (; b > d;)
                    if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.qa) {
                        sb(this, e), f = 0;
                        break
                    }
            } else
                for (; b > d;)
                    if (e[f] = a[d], ++f, ++d, f == this.qa) {
                        sb(this, e), f = 0;
                        break
                    }
        }
        this.$a = f, this.rc += b
    };
    var tb = Array.prototype,
        ub = tb.forEach ? function (a, b, c) {
            tb.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; d > f; f++) f in e && b.call(c, e[f], f, a)
        },
        vb = tb.map ? function (a, b, c) {
            return tb.map.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = Array(d), f = q(a) ? a.split("") : a, g = 0; d > g; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        wb = tb.reduce ? function (a, b, c, d) {
            return d && (b = r(b, d)), tb.reduce.call(a, b, c)
        } : function (a, b, c, d) {
            var e = c;
            return ub(a, function (c, f) {
                e = b.call(d, e, c, f, a)
            }), e
        },
        xb = tb.every ? function (a, b, c) {
            return tb.every.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; d > f; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        },
        zb;
    a: {
        var Ab = aa.navigator;
        if (Ab) {
            var Bb = Ab.userAgent;
            if (Bb) {
                zb = Bb;
                break a
            }
        }
        zb = ""
    }
    var Db = Cb("Opera") || Cb("OPR"),
        Eb = Cb("Trident") || Cb("MSIE"),
        Fb = Cb("Gecko") && -1 == zb.toLowerCase().indexOf("webkit") && !(Cb("Trident") || Cb("MSIE")),
        Gb = -1 != zb.toLowerCase().indexOf("webkit");
    ! function () {
        var a, b = "";
        return Db && aa.opera ? (b = aa.opera.version, "function" == da(b) ? b() : b) : (Fb ? a = /rv\:([^\);]+)(\)|;)/ : Eb ? a = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Gb && (a = /WebKit\/(\S+)/), a && (b = (b = a.exec(zb)) ? b[1] : ""), Eb && (a = (a = aa.document) ? a.documentMode : void 0, a > parseFloat(b)) ? String(a) : b)
    }();
    var Hb = null,
        Ib = null,
        Kb = function () {
            var a = 1;
            return function () {
                return a++
            }
        }(),
        Nb = null,
        Ob = !0,
        dc = /^-?\d{1,10}$/;
    h = fc.prototype, h.P = function () {
        return !0
    }, h.k = function () {
        return this.gb
    }, h.Ia = function (a) {
        return new fc(this.F, a)
    }, h.O = function () {
        return M
    }, h.L = function (a) {
        return null === C(a) ? this : M
    }, h.ga = function () {
        return null
    }, h.H = function (a, b) {
        return (new N).H(a, b).Ia(this.gb)
    }, h.Aa = function (a, b) {
        var c = C(a);
        return null === c ? b : this.H(c, M.Aa(La(a), b))
    }, h.f = function () {
        return !1
    }, h.$b = function () {
        return 0
    }, h.V = function (a) {
        return a && null !== this.k() ? {
            ".value": this.j(),
            ".priority": this.k()
        } : this.j()
    }, h.hash = function () {
        var a = "";
        null !== this.k() && (a += "priority:" + gc(this.k()) + ":");
        var b = typeof this.F,
            a = a + (b + ":"),
            a = "number" === b ? a + bc(this.F) : a + this.F;
        return Lb(a)
    }, h.j = function () {
        return this.F
    }, h.toString = function () {
        return "string" == typeof this.F ? this.F : '"' + this.F + '"'
    }, h = N.prototype, h.P = function () {
        return !1
    }, h.k = function () {
        return this.gb
    }, h.Ia = function (a) {
        return new N(this.o, a)
    }, h.H = function (a, b) {
        var c = this.o.remove(a);
        return b && b.f() && (b = null), null !== b && (c = c.sa(a, b)), b && null !== b.k() ? new lc(c, null, this.gb) : new N(c, this.gb)
    }, h.Aa = function (a, b) {
        var c = C(a);
        if (null === c) return b;
        var d = this.O(c).Aa(La(a), b);
        return this.H(c, d)
    }, h.f = function () {
        return this.o.f()
    }, h.$b = function () {
        return this.o.count()
    };
    var mc = /^\d+$/;
    h = N.prototype, h.V = function (a) {
        if (this.f()) return null;
        var b = {},
            c = 0,
            d = 0,
            e = !0;
        if (this.A(function (f, g) {
            b[f] = g.V(a), c++, e && mc.test(f) ? d = Math.max(d, Number(f)) : e = !1
        }), !a && e && 2 * c > d) {
            var f, g = [];
            for (f in b) g[f] = b[f];
            return g
        }
        return a && null !== this.k() && (b[".priority"] = this.k()), b
    }, h.hash = function () {
        var a = "";
        return null !== this.k() && (a += "priority:" + gc(this.k()) + ":"), this.A(function (b, c) {
            var d = c.hash();
            "" !== d && (a += ":" + b + ":" + d)
        }), "" === a ? "" : Lb(a)
    }, h.O = function (a) {
        return a = this.o.get(a), null === a ? M : a
    }, h.L = function (a) {
        var b = C(a);
        return null === b ? this : this.O(b).L(La(a))
    }, h.ga = function (a) {
        return Wa(this.o, a)
    }, h.hd = function () {
        return this.o.xb()
    }, h.kd = function () {
        return this.o.bb()
    }, h.A = function (a) {
        return this.o.Da(a)
    }, h.Ec = function (a) {
        return this.o.Qa(a)
    }, h.Za = function () {
        return this.o.Za()
    }, h.toString = function () {
        var a = "{",
            b = !0;
        return this.A(function (c, d) {
            b ? b = !1 : a += ", ", a += '"' + c + '" : ' + d.toString()
        }), a += "}"
    };
    var M = new N;
    ja(lc, N), h = lc.prototype, h.H = function (a, b) {
        var c = this.O(a),
            d = this.o,
            e = this.xa;
        return null !== c && (d = d.remove(a), e = e.remove({
            name: a,
            ka: c.k()
        })), b && b.f() && (b = null), null !== b && (d = d.sa(a, b), e = e.sa({
            name: a,
            ka: b.k()
        }, b)), new lc(d, e, this.k())
    }, h.ga = function (a, b) {
        var c = Wa(this.xa, {
            name: a,
            ka: b.k()
        });
        return c ? c.name : null
    }, h.A = function (a) {
        return this.xa.Da(function (b, c) {
            return a(b.name, c)
        })
    }, h.Ec = function (a) {
        return this.xa.Qa(function (b, c) {
            return a(b.name, c)
        })
    }, h.Za = function () {
        return this.xa.Za(function (a, b) {
            return {
                key: a.name,
                value: b
            }
        })
    }, h.hd = function () {
        return this.xa.f() ? null : this.xa.xb().name
    }, h.kd = function () {
        return this.xa.f() ? null : this.xa.bb().name
    };
    var oc = Math.log(2);
    P.prototype.V = function () {
        return x("Firebase.DataSnapshot.val", 0, 0, arguments.length), this.B.V()
    }, P.prototype.val = P.prototype.V, P.prototype.Kd = function () {
        return x("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length), this.B.V(!0)
    }, P.prototype.exportVal = P.prototype.Kd, P.prototype.G = function (a) {
        x("Firebase.DataSnapshot.child", 0, 1, arguments.length), fa(a) && (a = String(a)), Ha("Firebase.DataSnapshot.child", a);
        var b = new F(a),
            c = this.kc.G(b);
        return new P(this.B.L(b), c)
    }, P.prototype.child = P.prototype.G, P.prototype.Hc = function (a) {
        x("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length), Ha("Firebase.DataSnapshot.hasChild", a);
        var b = new F(a);
        return !this.B.L(b).f()
    }, P.prototype.hasChild = P.prototype.Hc, P.prototype.k = function () {
        return x("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length), this.B.k()
    }, P.prototype.getPriority = P.prototype.k, P.prototype.forEach = function (a) {
        if (x("Firebase.DataSnapshot.forEach", 1, 1, arguments.length), z("Firebase.DataSnapshot.forEach", 1, a, !1), this.B.P()) return !1;
        var b = this;
        return this.B.A(function (c, d) {
            return a(new P(d, b.kc.G(c)))
        })
    }, P.prototype.forEach = P.prototype.forEach, P.prototype.sb = function () {
        return x("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length), this.B.P() ? !1 : !this.B.f()
    }, P.prototype.hasChildren = P.prototype.sb, P.prototype.name = function () {
        return x("Firebase.DataSnapshot.name", 0, 0, arguments.length), this.kc.name()
    }, P.prototype.name = P.prototype.name, P.prototype.$b = function () {
        return x("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length), this.B.$b()
    }, P.prototype.numChildren = P.prototype.$b, P.prototype.Uc = function () {
        return x("Firebase.DataSnapshot.ref", 0, 0, arguments.length), this.kc
    }, P.prototype.ref = P.prototype.Uc, rc.prototype.bd = function (a) {
        for (var b = this.wb[a] || [], c = 0; c < b.length; c++) b[c].ba.apply(b[c].Y, Array.prototype.slice.call(arguments, 1))
    }, rc.prototype.fb = function (a, b, c) {
        sc(this, a), this.wb[a] = this.wb[a] || [], this.wb[a].push({
            ba: b,
            Y: c
        }), (a = this.jd(a)) && b.apply(c, a)
    }, rc.prototype.yb = function (a, b, c) {
        sc(this, a), a = this.wb[a] || [];
        for (var d = 0; d < a.length; d++)
            if (a[d].ba === b && (!c || c === a[d].Y)) {
                a.splice(d, 1);
                break
            }
    }, ja(tc, rc), ca(tc), tc.prototype.jd = function (a) {
        return v("visible" === a, "Unknown event type: " + a), [this.lb]
    }, ja(uc, rc), ca(uc), uc.prototype.jd = function (a) {
        return v("online" === a, "Unknown event type: " + a), [this.Cb]
    }, xc.prototype.get = function () {
        return wc(this.ob)
    }, zc.prototype.get = function () {
        var a = this.Hd.get(),
            b = wc(a);
        if (this.Wb)
            for (var c in this.Wb) b[c] -= this.Wb[c];
        return this.Wb = a, b
    }, Ac.prototype.sd = function () {
        var a, b = this.qc.get(),
            c = {},
            d = !1;
        for (a in b) 0 < b[a] && A(this.Zc, a) && (c[a] = b[a], d = !0);
        d && (b = this.u, b.S && (c = {
            c: c
        }, b.e("reportStats", c), b.Ga("s", c))), setTimeout(r(this.sd, this), 6e5 * Math.random())
    };
    var Bc = {},
        Cc = {},
        Fc = null;
    "undefined" != typeof MozWebSocket ? Fc = MozWebSocket : "undefined" != typeof WebSocket && (Fc = WebSocket);
    var Gc;
    Q.prototype.open = function (a, b) {
        this.ja = b, this.Td = a, this.e("Websocket connecting to " + this.Ua), this.W = new Fc(this.Ua), this.pb = !1, mb.set("previous_websocket_failure", !0);
        var c = this;
        this.W.onopen = function () {
            c.e("Websocket connected."), c.pb = !0
        }, this.W.onclose = function () {
            c.e("Websocket connection was disconnected."), c.W = null, c.Oa()
        }, this.W.onmessage = function (a) {
            if (null !== c.W)
                if (a = a.data, yc(c.aa, "bytes_received", a.length), Hc(c), null !== c.frames) Ic(c, a);
                else {
                    a: {
                        if (v(null === c.frames, "We already have a frame buffer"), 6 >= a.length) {
                            var b = Number(a);
                            if (!isNaN(b)) {
                                c.ad = b, c.frames = [], a = null;
                                break a
                            }
                        }
                        c.ad = 1, c.frames = []
                    }
                    null !== a && Ic(c, a)
                }
        }, this.W.onerror = function (a) {
            c.e("WebSocket error.  Closing connection."), (a = a.message || a.data) && c.e(a), c.Oa()
        }
    }, Q.prototype.start = function () {}, Q.isAvailable = function () {
        var a = !1;
        if ("undefined" != typeof navigator && navigator.userAgent) {
            var b = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
            b && 1 < b.length && 4.4 > parseFloat(b[1]) && (a = !0)
        }
        return !a && null !== Fc && !Gc
    }, Q.responsesRequiredToBeHealthy = 2, Q.healthyTimeout = 3e4, h = Q.prototype, h.Lc = function () {
        mb.remove("previous_websocket_failure")
    }, h.send = function (a) {
        Hc(this), a = u(a), yc(this.aa, "bytes_sent", a.length), a = Yb(a, 16384), 1 < a.length && this.W.send(String(a.length));
        for (var b = 0; b < a.length; b++) this.W.send(a[b])
    }, h.Mb = function () {
        this.Ma = !0, this.ub && (clearInterval(this.ub), this.ub = null), this.W && (this.W.close(), this.W = null)
    }, h.Oa = function () {
        this.Ma || (this.e("WebSocket is closing itself"), this.Mb(), this.ja && (this.ja(this.pb), this.ja = null))
    }, h.close = function () {
        this.Ma || (this.e("WebSocket is being closed"), this.Mb())
    }, h = Mc.prototype, h.add = function (a, b) {
        this.set[a] = null !== b ? b : !0
    }, h.contains = function (a) {
        return A(this.set, a)
    }, h.get = function (a) {
        return this.contains(a) ? this.set[a] : void 0
    }, h.remove = function (a) {
        delete this.set[a]
    }, h.f = function () {
        var a;
        a: {
            a = this.set;
            for (var b in a) {
                a = !1;
                break a
            }
            a = !0
        }
        return a
    }, h.count = function () {
        var a, b = this.set,
            c = 0;
        for (a in b) c++;
        return c
    }, h.keys = function () {
        var a = [];
        return $b(this.set, function (b, c) {
            a.push(c)
        }), a
    };
    var Oc, Pc;
    Nc.prototype.open = function (a, b) {
        this.dd = 0, this.T = b, this.od = new Jc(a), this.Ma = !1;
        var c = this;
        this.Ja = setTimeout(function () {
            c.e("Timed out trying to connect."), c.Oa(), c.Ja = null
        }, 3e4), Tb(function () {
            if (!c.Ma) {
                c.ma = new Qc(function (a, b, d) {
                    if (yc(c.aa, "bytes_received", u(arguments).length), c.ma)
                        if (c.Ja && (clearTimeout(c.Ja), c.Ja = null), c.pb = !0, "start" == a) c.id = b, c.rd = d;
                        else {
                            if ("close" !== a) throw Error("Unrecognized command received: " + a);
                            b ? (c.ma.oc = !1, Kc(c.od, b, function () {
                                c.Oa()
                            })) : c.Oa()
                        }
                }, function (a, b) {
                    yc(c.aa, "bytes_received", u(arguments).length), Lc(c.od, a, b)
                }, function () {
                    c.Oa()
                }, c.Qb);
                var a = {
                    start: "t"
                };
                a.ser = Math.floor(1e8 * Math.random()), c.ma.sc && (a.cb = c.ma.sc), a.v = "5", c.pc && (a.s = c.pc), a = c.Qb(a), c.e("Connecting via long-poll to " + a), Rc(c.ma, a, function () {})
            }
        })
    }, Nc.prototype.start = function () {
        var a = this.ma,
            b = this.rd;
        for (a.Rd = this.id, a.Sd = b, a.vc = !0; Sc(a););
        a = this.id, b = this.rd, this.eb = document.createElement("iframe");
        var c = {
            dframe: "t"
        };
        c.id = a, c.pw = b, this.eb.src = this.Qb(c), this.eb.style.display = "none", document.body.appendChild(this.eb)
    }, Nc.isAvailable = function () {
        return !(Pc || "object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href) || "object" == typeof Windows && "object" == typeof Windows.he)
    }, h = Nc.prototype, h.Lc = function () {}, h.Mb = function () {
        this.Ma = !0, this.ma && (this.ma.close(), this.ma = null), this.eb && (document.body.removeChild(this.eb), this.eb = null), this.Ja && (clearTimeout(this.Ja), this.Ja = null)
    }, h.Oa = function () {
        this.Ma || (this.e("Longpoll is closing itself"), this.Mb(), this.T && (this.T(this.pb), this.T = null))
    }, h.close = function () {
        this.Ma || (this.e("Longpoll is being closed."), this.Mb())
    }, h.send = function (a) {
        a = u(a), yc(this.aa, "bytes_sent", a.length), a = ra(a), a = Jb(a, !0), a = Yb(a, 1840);
        for (var b = 0; b < a.length; b++) {
            var c = this.ma;
            c.Gb.push({
                ae: this.dd,
                fe: a.length,
                fd: a[b]
            }), c.vc && Sc(c), this.dd++
        }
    }, Qc.prototype.close = function () {
        if (this.vc = !1, this.Z) {
            this.Z.Ba.body.innerHTML = "";
            var a = this;
            setTimeout(function () {
                null !== a.Z && (document.body.removeChild(a.Z), a.Z = null)
            }, 0)
        }
        var b = this.ja;
        b && (this.ja = null, b())
    };
    var Yc = [Nc, Q];
    $c.prototype.xd = function (a) {
        kd(this, {
            t: "d",
            d: a
        })
    }, $c.prototype.cc = function (a) {
        hd(this), this.Pc(a)
    }, $c.prototype.close = function () {
        2 !== this.na && (this.e("Closing realtime connection."), this.na = 2, gd(this), this.T && (this.T(), this.T = null))
    };
    var md = 0,
        od = 0;
    h = ld.prototype, h.Ga = function (a, b, c) {
        var d = ++this.$d;
        a = {
            r: d,
            a: a,
            b: b
        }, this.e(u(a)), v(this.S, "sendRequest_ call when we're not connected not allowed."), this.la.xd(a), c && (this.Kb[d] = c)
    }, h.mb = function (a, b, c) {
        if (this.Ka = {
            Id: a,
            gd: !1,
            ba: b,
            Sb: c
        }, this.e("Authenticating using credential: " + this.Ka), sd(this), !(b = 40 == a.length)) a: {
            var d;
            try {
                var e = a.split(".");
                if (3 !== e.length) {
                    b = !1;
                    break a
                }
                var f;
                b: {
                    try {
                        if ("undefined" != typeof atob) {
                            f = atob(e[1]);
                            break b
                        }
                    } catch (g) {
                        K("base64DecodeIfNativeSupport failed: ", g)
                    }
                    f = null
                }
                null !== f && (d = qa(f))
            } catch (h) {
                K("isAdminAuthToken_ failed", h)
            }
            b = "object" == typeof d && !0 === va(d, "admin")
        }
        b && (this.e("Admin auth credential detected.  Reducing max reconnect time."), this.Xb = 3e4)
    }, h.Pb = function (a) {
        delete this.Ka, this.zb(!1), this.S && this.Ga("unauth", {}, function (b) {
            a(b.s, b.d)
        })
    }, h.Nc = function (a, b) {
        this.S ? wd(this, "oc", a, null, b) : this.Ab.push({
            Sc: a,
            action: "oc",
            data: null,
            D: b
        })
    }, h.put = function (a, b, c, d) {
        yd(this, "p", a, b, c, d)
    }, h.cc = function (a) {
        if ("r" in a) {
            this.e("from server: " + u(a));
            var b = a.r,
                c = this.Kb[b];
            c && (delete this.Kb[b], c(a.b))
        } else {
            if ("error" in a) throw "A server-side error has occurred: " + a.error;
            "a" in a && (b = a.a, c = a.b, this.e("handleServerMessage", b, c), "d" === b ? this.dc(c.p, c.d, !1) : "m" === b ? this.dc(c.p, c.d, !0) : "c" === b ? Bd(this, c.p, c.q) : "ac" === b ? (a = c.s, b = c.d, c = this.Ka, delete this.Ka, c && c.Sb && c.Sb(a, b), this.zb(!1)) : "sd" === b ? this.Vc ? this.Vc(c) : "msg" in c && "undefined" != typeof console && console.log("FIREBASE: " + c.msg.replace("\n", "\nFIREBASE: ")) : Rb("Unrecognized action received from server: " + u(b) + "\nAre you using the latest client?"))
        }
    }, h.Bb = function (a) {
        this.e("connection ready"), this.S = !0, this.vb = (new Date).getTime(), this.Qc({
            serverTimeOffset: a - (new Date).getTime()
        }), sd(this);
        for (var b in this.ia)
            for (var c in this.ia[b]) a = this.ia[b][c], qd(this, b, c, a.hb, a.D);
        for (b = 0; b < this.U.length; b++) this.U[b] && Ad(this, b);
        for (; this.Ab.length;) b = this.Ab.shift(), wd(this, b.action, b.Sc, b.data, b.D);
        this.bc(!0)
    }, h.Vd = function (a) {
        a && !this.lb && this.ua === this.Xb && (this.e("Window became visible.  Reducing delay."), this.ua = 1e3, this.la || nd(this, 0)), this.lb = a
    }, h.Ud = function (a) {
        a ? (this.e("Browser went online.  Reconnecting."), this.ua = 1e3, this.Ra = !0, this.la || nd(this, 0)) : (this.e("Browser went offline.  Killing connection; don't reconnect."), this.Ra = !1, this.la && this.la.close())
    }, h.pd = function () {
        this.e("data client disconnected"), this.S = !1, this.la = null;
        for (var a = 0; a < this.U.length; a++) {
            var b = this.U[a];
            b && "h" in b.td && b.Xd && (b.D && b.D("disconnect"), delete this.U[a], this.Db--)
        }
        if (0 === this.Db && (this.U = []), this.Ra) this.lb ? this.vb && (3e4 < (new Date).getTime() - this.vb && (this.ua = 1e3), this.vb = null) : (this.e("Window isn't visible.  Delaying reconnect."), this.ua = this.Xb, this.Kc = (new Date).getTime()), a = Math.max(0, this.ua - ((new Date).getTime() - this.Kc)), a *= Math.random(), this.e("Trying to reconnect in " + a + "ms"), nd(this, a), this.ua = Math.min(this.Xb, 1.3 * this.ua);
        else
            for (var c in this.Kb) delete this.Kb[c];
        this.bc(!1)
    }, h.La = function () {
        this.Ra = !1, this.la ? this.la.close() : (this.Xa && (clearTimeout(this.Xa), this.Xa = null), this.S && this.pd())
    }, h.jb = function () {
        this.Ra = !0, this.ua = 1e3, this.S || nd(this, 0)
    }, Dd.prototype.A = function (a) {
        null !== this.o && R(this.o, function (b, c) {
            a(b, c)
        })
    }, Hd.prototype.toString = function () {
        return this.$.toString()
    }, Id.prototype.set = function (a, b) {
        var c = this,
            d = [];
        return ub(b, function (a) {
            var b = a.path;
            a = a.ta;
            var e = Kb();
            J(I(c.Fb, b), e), T(c.M, b, a), d.push({
                path: b,
                be: e
            })
        }), d
    }, Qd.prototype.Ib = function () {
        for (var a = 0; a < this.Ya.length; a++)
            if (this.Ya[a]) {
                var b = this.Ya[a];
                this.Ya[a] = null, Sd(b)
            }
        this.Ya = []
    }, Td.prototype.ic = function (a, b) {
        b = this.jc(a, b), null != b && Wd(this, b)
    }, Td.prototype.Ib = function () {
        this.Dc.Ib()
    }, ja(Yd, Td), Yd.prototype.jc = function (a, b) {
        return this.i = a, this.tb && null != b && b.push(new U("value", this.i)), b
    }, Yd.prototype.qb = function () {
        return {}
    }, ja(ce, Mc), h = ce.prototype, h.setActive = function (a) {
        this.za = a
    }, h.defaultView = function () {
        return fe(this) ? this.get("default") : null
    }, h.path = function () {
        return this.X
    }, h.toString = function () {
        return vb(this.keys(), function (a) {
            return "default" === a ? "{}" : a
        }).join("$")
    }, h.hb = function () {
        var a = [];
        return R(this, function (b, c) {
            a.push(c.R)
        }), a
    }, ja(he, Td), he.prototype.jc = function (a, b) {
        if (null === b) return b;
        var c = [],
            d = this.R;
        n(d.fa) && c.push(n(d.ya) && null != d.ya ? function (a, b) {
            var c = Ub(b, d.fa);
            return c > 0 || 0 === c && 0 <= Vb(a, d.ya)
        } : function (a, b) {
            return 0 <= Ub(b, d.fa)
        }), n(d.Ca) && c.push(n(d.Wa) ? function (a, b) {
            var c = Ub(b, d.Ca);
            return 0 > c || 0 === c && 0 >= Vb(a, d.Wa)
        } : function (a, b) {
            return 0 >= Ub(b, d.Ca)
        });
        var e = null,
            f = null;
        if (n(this.R.Ea))
            if (n(this.R.fa)) {
                if (e = ie(a, c, this.R.Ea, !1)) {
                    var g = a.O(e).k();
                    c.push(function (a, b) {
                        var c = Ub(b, g);
                        return 0 > c || 0 === c && 0 >= Vb(a, e)
                    })
                }
            } else if (f = ie(a, c, this.R.Ea, !0)) {
            var h = a.O(f).k();
            c.push(function (a, b) {
                var c = Ub(b, h);
                return c > 0 || 0 === c && 0 <= Vb(a, f)
            })
        }
        for (var i = [], j = [], k = [], l = [], m = 0; m < b.length; m++) {
            var o = b[m].ca,
                p = b[m].wa;
            switch (b[m].type) {
            case "child_added":
                je(c, o, p) && (this.i = this.i.H(o, p), j.push(b[m]));
                break;
            case "child_removed":
                this.i.O(o).f() || (this.i = this.i.H(o, null), i.push(b[m]));
                break;
            case "child_changed":
                !this.i.O(o).f() && je(c, o, p) && (this.i = this.i.H(o, p), l.push(b[m]));
                break;
            case "child_moved":
                var q = !this.i.O(o).f(),
                    r = je(c, o, p);
                q ? r ? (this.i = this.i.H(o, p), k.push(b[m])) : (i.push(new U("child_removed", this.i.O(o), o)), this.i = this.i.H(o, null)) : r && (this.i = this.i.H(o, p), j.push(b[m]))
            }
        }
        var s = e || f;
        if (s) {
            var t = (m = null !== f) ? this.i.hd() : this.i.kd(),
                u = !1,
                v = !1,
                w = this;
            (m ? a.Ec : a.A).call(a, function (a, b) {
                return v || null !== t || (v = !0), v && u ? !0 : (u ? (i.push(new U("child_removed", w.i.O(a), a)), w.i = w.i.H(a, null)) : v && (j.push(new U("child_added", b, a)), w.i = w.i.H(a, b)), t === a && (v = !0), void(a === s && (u = !0)))
            })
        }
        for (m = 0; m < j.length; m++) c = j[m], o = this.i.ga(c.ca, c.wa), i.push(new U("child_added", c.wa, c.ca, o));
        for (m = 0; m < k.length; m++) c = k[m], o = this.i.ga(c.ca, c.wa), i.push(new U("child_moved", c.wa, c.ca, o));
        for (m = 0; m < l.length; m++) c = l[m], o = this.i.ga(c.ca, c.wa), i.push(new U("child_changed", c.wa, c.ca, o));
        return this.tb && 0 < i.length && i.push(new U("value", this.i)), i
    }, he.prototype.Hc = function (a) {
        return this.i.O(a) !== M
    }, he.prototype.qb = function (a, b, c) {
        var d = {};
        this.i.P() || this.i.A(function (a) {
            d[a] = 3
        });
        var e = this.i;
        c = S(c, new F(""));
        var f = new Pa;
        J(I(f, this.R.path), !0), b = M.Aa(a, b);
        var g = this;
        return $d(c, b, a, f, function (a, b, c) {
            null !== c && a.toString() === g.R.path.toString() && g.jc(b, c)
        }), this.i.P() ? $b(d, function (a, b) {
            d[b] = 2
        }) : (this.i.A(function (a) {
            A(d, a) || (d[a] = 1)
        }), $b(d, function (a, b) {
            g.i.O(b).f() && (d[b] = 2)
        })), this.i = e, d
    }, ke.prototype.Rb = function (a, b, c, d, e) {
        var f = a.path,
            g = I(this.oa, f),
            h = g.j();
        null === h ? (h = new ce, J(g, h)) : v(!h.f(), "We shouldn't be storing empty QueryMaps");
        var i = a.Pa();
        if (h.contains(i)) a = h.get(i), Ud(a, b, c, d, e);
        else {
            var j = this.g.$.L(f);
            a = le(a, j), me(this, g, h, i, a), Ud(a, b, c, d, e), (b = (b = Sa(I(this.oa, f), function (a) {
                var b;
                return (b = a.j() && a.j().defaultView()) && (b = a.j().defaultView().tb), b ? !0 : void 0
            }, !0)) || null === this.u && !S(this.g, f).f()) && Xd(a)
        }
        a.Ib()
    }, ke.prototype.lc = function (a, b, c, d) {
        var e = I(this.oa, a.path).j();
        return null === e ? null : pe(this, e, a, b, c, d)
    }, ke.prototype.ic = function (a, b, c) {
        a = I(this.oa, a).j(), null !== a && R(a, function (a, d) {
            d.ic(b, c)
        })
    }, ke.prototype.qb = function (a, b, c, d) {
        function e(a) {
            $b(a, function (a, b) {
                f[b] = 3 === a ? 3 : (va(f, b) || a) === a ? a : 3
            })
        }
        var f = {};
        return R(b, function (b, f) {
            e(f.qb(a, c, d))
        }), c.P() || c.A(function (a) {
            A(f, a) || (f[a] = 4)
        }), f
    }, h = ze.prototype, h.toString = function () {
        return (this.N.nc ? "https://" : "http://") + this.N.host
    }, h.name = function () {
        return this.N.Yb
    }, h.dc = function (a, b, c) {
        this.Cc++, this.md && (b = this.md(a, b));
        var d, e, f = [];
        for (9 <= a.length && a.lastIndexOf(".priority") === a.length - 9 ? (d = new F(a.substring(0, a.length - 9)), e = S(this.g.va, d).Ia(b), f.push(d)) : c ? (d = new F(a), e = S(this.g.va, d), $b(b, function (a, b) {
            var c = new F(b);
            ".priority" === b ? e = e.Ia(a) : (e = e.Aa(c, O(a)), f.push(d.G(b)))
        })) : (d = new F(a), e = O(b), f.push(d)), a = ye(this.I, d, e, this.g.M), b = !1, c = 0; c < a.length; ++c) {
            var g = a[c];
            b = Jd(this.g, g.path, g.ta) || b
        }
        b && (d = De(this, d)), W(this.I, d, f)
    }, h.bc = function (a) {
        Ae(this, "connected", a), !1 === a && Ee(this)
    }, h.Qc = function (a) {
        var b = this;
        Zb(a, function (a, c) {
            Ae(b, c, a)
        })
    }, h.Gc = function (a) {
        return a = new F(a), S(this.g.va, a).hash()
    }, h.zb = function (a) {
        Ae(this, "authenticated", a)
    }, h.mb = function (a, b, c) {
        "firebaseio-demo.com" === this.N.domain && L("FirebaseRef.auth() not supported on demo (*.firebaseio-demo.com) Firebases. Please use on production (*.firebaseio.com) Firebases only."), this.u.mb(a, function (a, c) {
            X(b, a, c)
        }, function (a, b) {
            if (L("auth() was canceled: " + b), c) {
                var d = Error(b);
                d.code = a.toUpperCase(), c(d)
            }
        })
    }, h.Pb = function (a) {
        this.u.Pb(function (b, c) {
            X(a, b, c)
        })
    }, h.kb = function (a, b, c, d) {
        this.e("set", {
            path: a.toString(),
            value: b,
            ka: c
        });
        var e = Ce(this);
        b = O(b, c);
        var e = Pd(b, e),
            e = ye(this.I, a, e, this.g.M),
            f = this.g.set(a, e),
            g = this;
        this.u.put(a.toString(), b.V(!0), function (b, c) {
            "ok" !== b && L("set at " + a + " failed: " + b), Md(g.g, f), Kd(g.g, a);
            var e = De(g, a);
            W(g.I, e, []), X(d, b, c)
        }), e = Fe(this, a), De(this, e), W(this.I, e, [a])
    }, h.update = function (a, b, c) {
        this.e("update", {
            path: a.toString(),
            value: b
        });
        var d, e = S(this.g.pa, a),
            f = !0,
            g = [],
            h = Ce(this),
            i = [];
        for (d in b) {
            var f = !1,
                j = O(b[d]),
                j = Pd(j, h),
                e = e.H(d, j),
                k = a.G(d);
            g.push(k), j = ye(this.I, k, j, this.g.M), i = i.concat(this.g.set(a, j))
        }
        if (f) K("update() called with empty data.  Don't do anything."), X(c, "ok");
        else {
            var l = this;
            zd(this.u, a.toString(), b, function (b, d) {
                v("ok" === b || "permission_denied" === b, "merge at " + a + " failed."), "ok" !== b && L("update at " + a + " failed: " + b), Md(l.g, i), Kd(l.g, a);
                var e = De(l, a);
                W(l.I, e, []), X(c, b, d)
            }), b = Fe(this, a), De(this, b), W(l.I, b, g)
        }
    }, h.Wc = function (a, b, c) {
        this.e("setPriority", {
            path: a.toString(),
            ka: b
        });
        var d = Ce(this),
            d = Nd(b, d),
            d = S(this.g.M, a).Ia(d),
            d = ye(this.I, a, d, this.g.M),
            e = this.g.set(a, d),
            f = this;
        this.u.put(a.toString() + "/.priority", b, function (b, d) {
            "permission_denied" === b && L("setPriority at " + a + " failed: " + b), Md(f.g, e), Kd(f.g, a);
            var g = De(f, a);
            W(f.I, g, []), X(c, b, d)
        }), b = De(this, a), W(f.I, b, [])
    }, h.Nc = function (a, b) {
        var c = this;
        this.u.Nc(a.toString(), function (d, e) {
            "ok" === d && Fd(c.T, a), X(b, d, e)
        })
    }, h.Rb = function (a, b, c, d, e) {
        ".info" === C(a.path) ? this.Jc.Rb(a, b, c, d, e) : this.I.Rb(a, b, c, d, e)
    }, h.lc = function (a, b, c, d) {
        if (".info" === C(a.path)) this.Jc.lc(a, b, c, d);
        else {
            if (b = this.I.lc(a, b, c, d), c = null !== b) {
                c = this.g, d = a.path;
                for (var e = [], f = 0; f < b.length; ++f) e[f] = S(c.va, b[f]);
                for (T(c.va, d, M), f = 0; f < b.length; ++f) T(c.va, b[f], e[f]);
                c = Kd(c, d)
            }
            c && (v(this.g.pa.$ === this.I.ac, "We should have raised any outstanding events by now.  Else, we'll blow them away."), T(this.g.pa, a.path, S(this.g.M, a.path)), this.I.ac = this.g.pa.$)
        }
    }, h.La = function () {
        this.u.La()
    }, h.jb = function () {
        this.u.jb()
    }, h.Xc = function (a) {
        if ("undefined" != typeof console) {
            a ? (this.qc || (this.qc = new zc(this.aa)), a = this.qc.get()) : a = this.aa.get();
            var b, c = wb(vc(a), function (a, b) {
                return Math.max(b.length, a)
            }, 0);
            for (b in a) {
                for (var d = a[b], e = b.length; c + 2 > e; e++) b += " ";
                console.log(b + d)
            }
        }
    }, h.Yc = function (a) {
        yc(this.aa, a), this.zd.Zc[a] = !0
    }, h.e = function () {
        K("r:" + this.u.id + ":", arguments)
    }, ca(Y), Y.prototype.La = function () {
        for (var a in this.ib) this.ib[a].La()
    }, Y.prototype.interrupt = Y.prototype.La, Y.prototype.jb = function () {
        for (var a in this.ib) this.ib[a].jb()
    }, Y.prototype.resume = Y.prototype.jb;
    var Z = {
        Nd: function (a) {
            var b = N.prototype.hash;
            N.prototype.hash = a;
            var c = fc.prototype.hash;
            return fc.prototype.hash = a,
                function () {
                    N.prototype.hash = b, fc.prototype.hash = c
                }
        }
    };
    Z.hijackHash = Z.Nd, Z.Pa = function (a) {
        return a.Pa()
    }, Z.queryIdentifier = Z.Pa, Z.Qd = function (a) {
        return a.m.u.ia
    }, Z.listens = Z.Qd, Z.Yd = function (a) {
        return a.m.u.la
    }, Z.refConnection = Z.Yd, Z.Cd = ld, Z.DataConnection = Z.Cd, ld.prototype.sendRequest = ld.prototype.Ga, ld.prototype.interrupt = ld.prototype.La, Z.Dd = $c, Z.RealTimeConnection = Z.Dd, $c.prototype.sendRequest = $c.prototype.xd, $c.prototype.close = $c.prototype.close, Z.Bd = ob, Z.ConnectionTarget = Z.Bd, Z.Ld = function () {
        Oc = Gc = !0
    }, Z.forceLongPolling = Z.Ld, Z.Md = function () {
        Pc = !0
    }, Z.forceWebSockets = Z.Md, Z.de = function (a, b) {
        a.m.u.Vc = b
    }, Z.setSecurityDebugCallback = Z.de, Z.Xc = function (a, b) {
        a.m.Xc(b)
    }, Z.stats = Z.Xc, Z.Yc = function (a, b) {
        a.m.Yc(b)
    }, Z.statsIncrementCounter = Z.Yc, Z.Cc = function (a) {
        return a.m.Cc
    }, Z.Od = function (a, b) {
        a.m.md = b
    }, Z.interceptServerData = Z.Od, $.prototype.cancel = function (a) {
        x("Firebase.onDisconnect().cancel", 0, 1, arguments.length), z("Firebase.onDisconnect().cancel", 1, a, !0), this.Jb.Nc(this.X, a)
    }, $.prototype.cancel = $.prototype.cancel, $.prototype.remove = function (a) {
        x("Firebase.onDisconnect().remove", 0, 1, arguments.length), B("Firebase.onDisconnect().remove", this.X), z("Firebase.onDisconnect().remove", 1, a, !0), Ge(this.Jb, this.X, null, a)
    }, $.prototype.remove = $.prototype.remove, $.prototype.set = function (a, b) {
        x("Firebase.onDisconnect().set", 1, 2, arguments.length), B("Firebase.onDisconnect().set", this.X), za("Firebase.onDisconnect().set", a, !1), z("Firebase.onDisconnect().set", 2, b, !0), Ge(this.Jb, this.X, a, b)
    }, $.prototype.set = $.prototype.set, $.prototype.kb = function (a, b, c) {
        if (x("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length), B("Firebase.onDisconnect().setWithPriority", this.X), za("Firebase.onDisconnect().setWithPriority", a, !1), Ea("Firebase.onDisconnect().setWithPriority", 2, b, !1), z("Firebase.onDisconnect().setWithPriority", 3, c, !0), ".length" === this.Fa || ".keys" === this.Fa) throw "Firebase.onDisconnect().setWithPriority failed: " + this.Fa + " is a read-only object.";
        He(this.Jb, this.X, a, b, c)
    }, $.prototype.setWithPriority = $.prototype.kb, $.prototype.update = function (a, b) {
        x("Firebase.onDisconnect().update", 1, 2, arguments.length), B("Firebase.onDisconnect().update", this.X), Da("Firebase.onDisconnect().update", a), z("Firebase.onDisconnect().update", 2, b, !0), Ie(this.Jb, this.X, a, b)
    }, $.prototype.update = $.prototype.update;
    var Ve = function () {
        var a = 0,
            b = [];
        return function (c) {
            var d = c === a;
            a = c;
            for (var e = Array(8), f = 7; f >= 0; f--) e[f] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c % 64), c = Math.floor(c / 64);
            if (v(0 === c, "Cannot push at time == 0"), c = e.join(""), d) {
                for (f = 11; f >= 0 && 63 === b[f]; f--) b[f] = 0;
                b[f]++
            } else
                for (f = 0; 12 > f; f++) b[f] = Math.floor(64 * Math.random());
            for (f = 0; 12 > f; f++) c += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);
            return v(20 === c.length, "NextPushId: Length should be 20."), c
        }
    }();
    ja(E, D);
    var We = E,
        Xe = ["Firebase"],
        Ye = aa;
    Xe[0] in Ye || !Ye.execScript || Ye.execScript("var " + Xe[0]);
    for (var Ze; Xe.length && (Ze = Xe.shift());)!Xe.length && n(We) ? Ye[Ze] = We : Ye = Ye[Ze] ? Ye[Ze] : Ye[Ze] = {};
    E.prototype.name = function () {
        return x("Firebase.name", 0, 0, arguments.length), this.path.f() ? null : Ma(this.path)
    }, E.prototype.name = E.prototype.name, E.prototype.G = function (a) {
        if (x("Firebase.child", 1, 1, arguments.length), fa(a)) a = String(a);
        else if (!(a instanceof F))
            if (null === C(this.path)) {
                var b = a;
                b && (b = b.replace(/^\/*\.info(\/|$)/, "/")), Ha("Firebase.child", b)
            } else Ha("Firebase.child", a);
        return new E(this.m, this.path.G(a))
    }, E.prototype.child = E.prototype.G, E.prototype.parent = function () {
        x("Firebase.parent", 0, 0, arguments.length);
        var a = this.path.parent();
        return null === a ? null : new E(this.m, a)
    }, E.prototype.parent = E.prototype.parent, E.prototype.root = function () {
        x("Firebase.ref", 0, 0, arguments.length);
        for (var a = this; null !== a.parent();) a = a.parent();
        return a
    }, E.prototype.root = E.prototype.root, E.prototype.toString = function () {
        x("Firebase.toString", 0, 0, arguments.length);
        var a;
        if (null === this.parent()) a = this.m.toString();
        else {
            a = this.parent().toString() + "/";
            var b = this.name();
            a += encodeURIComponent(String(b))
        }
        return a
    }, E.prototype.toString = E.prototype.toString, E.prototype.set = function (a, b) {
        x("Firebase.set", 1, 2, arguments.length), B("Firebase.set", this.path), za("Firebase.set", a, !1), z("Firebase.set", 2, b, !0), this.m.kb(this.path, a, null, b)
    }, E.prototype.set = E.prototype.set, E.prototype.update = function (a, b) {
        if (x("Firebase.update", 1, 2, arguments.length), B("Firebase.update", this.path), Da("Firebase.update", a), z("Firebase.update", 2, b, !0), A(a, ".priority")) throw Error("update() does not currently support updating .priority.");
        this.m.update(this.path, a, b)
    }, E.prototype.update = E.prototype.update, E.prototype.kb = function (a, b, c) {
        if (x("Firebase.setWithPriority", 2, 3, arguments.length), B("Firebase.setWithPriority", this.path), za("Firebase.setWithPriority", a, !1), Ea("Firebase.setWithPriority", 2, b, !1), z("Firebase.setWithPriority", 3, c, !0), ".length" === this.name() || ".keys" === this.name()) throw "Firebase.setWithPriority failed: " + this.name() + " is a read-only object.";
        this.m.kb(this.path, a, b, c)
    }, E.prototype.setWithPriority = E.prototype.kb, E.prototype.remove = function (a) {
        x("Firebase.remove", 0, 1, arguments.length), B("Firebase.remove", this.path), z("Firebase.remove", 1, a, !0), this.set(null, a)
    }, E.prototype.remove = E.prototype.remove, E.prototype.transaction = function (a, b, c) {
        if (x("Firebase.transaction", 1, 3, arguments.length), B("Firebase.transaction", this.path), z("Firebase.transaction", 1, a, !1), z("Firebase.transaction", 2, b, !0), n(c) && "boolean" != typeof c) throw Error(y("Firebase.transaction", 3, !0) + "must be a boolean.");
        if (".length" === this.name() || ".keys" === this.name()) throw "Firebase.transaction failed: " + this.name() + " is a read-only object.";
        "undefined" == typeof c && (c = !0), Ke(this.m, this.path, a, b, c)
    }, E.prototype.transaction = E.prototype.transaction, E.prototype.Wc = function (a, b) {
        x("Firebase.setPriority", 1, 2, arguments.length), B("Firebase.setPriority", this.path), Ea("Firebase.setPriority", 1, a, !1), z("Firebase.setPriority", 2, b, !0), this.m.Wc(this.path, a, b)
    }, E.prototype.setPriority = E.prototype.Wc, E.prototype.push = function (a, b) {
        x("Firebase.push", 0, 2, arguments.length), B("Firebase.push", this.path), za("Firebase.push", a, !0), z("Firebase.push", 2, b, !0);
        var c = Be(this.m),
            c = Ve(c),
            c = this.G(c);
        return "undefined" != typeof a && null !== a && c.set(a, b), c
    }, E.prototype.push = E.prototype.push, E.prototype.ja = function () {
        return new $(this.m, this.path, this.name())
    }, E.prototype.onDisconnect = E.prototype.ja, E.prototype.Zd = function () {
        L("FirebaseRef.removeOnDisconnect() being deprecated. Please use FirebaseRef.onDisconnect().remove() instead."), this.ja().remove(), Je(this.m)
    }, E.prototype.removeOnDisconnect = E.prototype.Zd, E.prototype.ce = function (a) {
        L("FirebaseRef.setOnDisconnect(value) being deprecated. Please use FirebaseRef.onDisconnect().set(value) instead."), this.ja().set(a), Je(this.m)
    }, E.prototype.setOnDisconnect = E.prototype.ce, E.prototype.mb = function (a, b, c) {
        if (x("Firebase.auth", 1, 3, arguments.length), !q(a)) throw Error(y("Firebase.auth", 1, !1) + "must be a valid credential (a string).");
        z("Firebase.auth", 2, b, !0), z("Firebase.auth", 3, b, !0), this.m.mb(a, b, c)
    }, E.prototype.auth = E.prototype.mb, E.prototype.Pb = function (a) {
        x("Firebase.unauth", 0, 1, arguments.length), z("Firebase.unauth", 1, a, !0), this.m.Pb(a)
    }, E.prototype.unauth = E.prototype.Pb, E.goOffline = function () {
        x("Firebase.goOffline", 0, 0, arguments.length), Y.rb().La()
    }, E.goOnline = function () {
        x("Firebase.goOnline", 0, 0, arguments.length), Y.rb().jb()
    }, E.enableLogging = Pb, E.ServerValue = {
        TIMESTAMP: {
            ".sv": "timestamp"
        }
    }, E.INTERNAL = Z, E.Context = Y
}(),
function (a, b, c) {
    "use strict";

    function d(a) {
        var b;
        if (b = a.match(j)) {
            var c = new Date(0),
                d = 0,
                f = 0;
            return b[9] && (d = e(b[9] + b[10]), f = e(b[9] + b[11])), c.setUTCFullYear(e(b[1]), e(b[2]) - 1, e(b[3])), c.setUTCHours(e(b[4] || 0) - d, e(b[5] || 0) - f, e(b[6] || 0), e(b[7] || 0)), c
        }
        return a
    }

    function e(a) {
        return parseInt(a, 10)
    }

    function f(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a
    }

    function g(a, d, e) {
        function f(a, c, d) {
            return b.isFunction(a) ? a : function () {
                return b.isNumber(a) ? [a, c, d] : [200, a, c]
            }
        }

        function g(a, f, g, h, j, p, q) {
            function r(a) {
                return b.isString(a) || b.isFunction(a) || a instanceof RegExp ? a : b.toJson(a)
            }

            function s(b) {
                function d() {
                    var c = b.response(a, f, g, j);
                    t.$$respHeaders = c[2], h(o(c[0]), o(c[1]), t.getAllResponseHeaders())
                }

                function i() {
                    for (var a = 0, b = m.length; b > a; a++)
                        if (m[a] === d) {
                            m.splice(a, 1), h(-1, c, "");
                            break
                        }
                }
                return !e && p && p.then && p.then(i), d
            }
            var t = new i,
                u = l[0],
                v = !1;
            if (u && u.match(a, f)) {
                if (!u.matchData(g)) throw new Error("Expected " + u + " with different data\nEXPECTED: " + r(u.data) + "\nGOT:      " + g);
                if (!u.matchHeaders(j)) throw new Error("Expected " + u + " with different headers\nEXPECTED: " + r(u.headers) + "\nGOT:      " + r(j));
                if (l.shift(), u.response) return void m.push(s(u));
                v = !0
            }
            for (var w, x = -1; w = k[++x];)
                if (w.match(a, f, g, j || {})) {
                    if (w.response)(e ? e.defer : n)(s(w));
                    else {
                        if (!w.passThrough) throw new Error("No response defined !");
                        d(a, f, g, h, j, p, q)
                    }
                    return
                }
            throw new Error(v ? "No response defined !" : "Unexpected request: " + a + " " + f + "\n" + (u ? "Expected " + u : "No more request expected"))
        }

        function j(a) {
            b.forEach(["GET", "DELETE", "JSONP"], function (b) {
                g[a + b] = function (d, e) {
                    return g[a](b, d, c, e)
                }
            }), b.forEach(["PUT", "POST", "PATCH"], function (b) {
                g[a + b] = function (c, d, e) {
                    return g[a](b, c, d, e)
                }
            })
        }
        var k = [],
            l = [],
            m = [],
            n = b.bind(m, m.push),
            o = b.copy;
        return g.when = function (a, b, c, d) {
            var g = new h(a, b, c, d),
                i = {
                    respond: function (a, b, c) {
                        g.response = f(a, b, c)
                    }
                };
            return e && (i.passThrough = function () {
                g.passThrough = !0
            }), k.push(g), i
        }, j("when"), g.expect = function (a, b, c, d) {
            var e = new h(a, b, c, d);
            return l.push(e), {
                respond: function (a, b, c) {
                    e.response = f(a, b, c)
                }
            }
        }, j("expect"), g.flush = function (c) {
            if (a.$digest(), !m.length) throw new Error("No pending request to flush !");
            if (b.isDefined(c))
                for (; c--;) {
                    if (!m.length) throw new Error("No more pending request to flush !");
                    m.shift()()
                } else
                    for (; m.length;) m.shift()();
            g.verifyNoOutstandingExpectation()
        }, g.verifyNoOutstandingExpectation = function () {
            if (a.$digest(), l.length) throw new Error("Unsatisfied requests: " + l.join(", "))
        }, g.verifyNoOutstandingRequest = function () {
            if (m.length) throw new Error("Unflushed requests: " + m.length)
        }, g.resetExpectations = function () {
            l.length = 0, m.length = 0
        }, g
    }

    function h(a, c, d, e) {
        this.data = d, this.headers = e, this.match = function (c, d, e, f) {
            return a != c ? !1 : this.matchUrl(d) ? b.isDefined(e) && !this.matchData(e) ? !1 : b.isDefined(f) && !this.matchHeaders(f) ? !1 : !0 : !1
        }, this.matchUrl = function (a) {
            return c ? b.isFunction(c.test) ? c.test(a) : c == a : !0
        }, this.matchHeaders = function (a) {
            return b.isUndefined(e) ? !0 : b.isFunction(e) ? e(a) : b.equals(e, a)
        }, this.matchData = function (a) {
            return b.isUndefined(d) ? !0 : d && b.isFunction(d.test) ? d.test(a) : d && b.isFunction(d) ? d(a) : d && !b.isString(d) ? b.equals(d, b.fromJson(a)) : d == a
        }, this.toString = function () {
            return a + " " + c
        }
    }

    function i() {
        i.$$lastInstance = this, this.open = function (a, b, c) {
            this.$$method = a, this.$$url = b, this.$$async = c, this.$$reqHeaders = {}, this.$$respHeaders = {}
        }, this.send = function (a) {
            this.$$data = a
        }, this.setRequestHeader = function (a, b) {
            this.$$reqHeaders[a] = b
        }, this.getResponseHeader = function (a) {
            var d = this.$$respHeaders[a];
            return d ? d : (a = b.lowercase(a), (d = this.$$respHeaders[a]) ? d : (d = c, b.forEach(this.$$respHeaders, function (c, e) {
                d || b.lowercase(e) != a || (d = c)
            }), d))
        }, this.getAllResponseHeaders = function () {
            var a = [];
            return b.forEach(this.$$respHeaders, function (b, c) {
                a.push(c + ": " + b)
            }), a.join("\n")
        }, this.abort = b.noop
    }
    b.mock = {}, b.mock.$BrowserProvider = function () {
        this.$get = function () {
            return new b.mock.$Browser
        }
    }, b.mock.$Browser = function () {
        var a = this;
        this.isMock = !0, a.$$url = "http://server/", a.$$lastUrl = a.$$url, a.pollFns = [], a.$$completeOutstandingRequest = b.noop, a.$$incOutstandingRequestCount = b.noop, a.onUrlChange = function (b) {
            return a.pollFns.push(function () {
                a.$$lastUrl != a.$$url && (a.$$lastUrl = a.$$url, b(a.$$url))
            }), b
        }, a.cookieHash = {}, a.lastCookieHash = {}, a.deferredFns = [], a.deferredNextId = 0, a.defer = function (b, c) {
            return c = c || 0, a.deferredFns.push({
                time: a.defer.now + c,
                fn: b,
                id: a.deferredNextId
            }), a.deferredFns.sort(function (a, b) {
                return a.time - b.time
            }), a.deferredNextId++
        }, a.defer.now = 0, a.defer.cancel = function (d) {
            var e;
            return b.forEach(a.deferredFns, function (a, b) {
                a.id === d && (e = b)
            }), e !== c ? (a.deferredFns.splice(e, 1), !0) : !1
        }, a.defer.flush = function (c) {
            if (b.isDefined(c)) a.defer.now += c;
            else {
                if (!a.deferredFns.length) throw new Error("No deferred tasks to be flushed");
                a.defer.now = a.deferredFns[a.deferredFns.length - 1].time
            }
            for (; a.deferredFns.length && a.deferredFns[0].time <= a.defer.now;) a.deferredFns.shift().fn()
        }, a.$$baseHref = "", a.baseHref = function () {
            return this.$$baseHref
        }
    }, b.mock.$Browser.prototype = {
        poll: function () {
            b.forEach(this.pollFns, function (a) {
                a()
            })
        },
        addPollFn: function (a) {
            return this.pollFns.push(a), a
        },
        url: function (a) {
            return a ? (this.$$url = a, this) : this.$$url
        },
        cookies: function (a, c) {
            return a ? void(b.isUndefined(c) ? delete this.cookieHash[a] : b.isString(c) && c.length <= 4096 && (this.cookieHash[a] = c)) : (b.equals(this.cookieHash, this.lastCookieHash) || (this.lastCookieHash = b.copy(this.cookieHash), this.cookieHash = b.copy(this.cookieHash)), this.cookieHash)
        },
        notifyWhenNoOutstandingRequests: function (a) {
            a()
        }
    }, b.mock.$ExceptionHandlerProvider = function () {
        var a;
        this.mode = function (b) {
            switch (b) {
            case "rethrow":
                a = function (a) {
                    throw a
                };
                break;
            case "log":
                var c = [];
                a = function (a) {
                    c.push(1 == arguments.length ? a : [].slice.call(arguments, 0))
                }, a.errors = c;
                break;
            default:
                throw new Error("Unknown mode '" + b + "', only 'log'/'rethrow' modes are allowed!")
            }
        }, this.$get = function () {
            return a
        }, this.mode("rethrow")
    }, b.mock.$LogProvider = function () {
        function a(a, b, c) {
            return a.concat(Array.prototype.slice.call(b, c))
        }
        var c = !0;
        this.debugEnabled = function (a) {
            return b.isDefined(a) ? (c = a, this) : c
        }, this.$get = function () {
            var d = {
                log: function () {
                    d.log.logs.push(a([], arguments, 0))
                },
                warn: function () {
                    d.warn.logs.push(a([], arguments, 0))
                },
                info: function () {
                    d.info.logs.push(a([], arguments, 0))
                },
                error: function () {
                    d.error.logs.push(a([], arguments, 0))
                },
                debug: function () {
                    c && d.debug.logs.push(a([], arguments, 0))
                }
            };
            return d.reset = function () {
                d.log.logs = [], d.info.logs = [], d.warn.logs = [], d.error.logs = [], d.debug.logs = []
            }, d.assertEmpty = function () {
                var a = [];
                if (b.forEach(["error", "warn", "info", "log", "debug"], function (c) {
                    b.forEach(d[c].logs, function (d) {
                        b.forEach(d, function (b) {
                            a.push("MOCK $log (" + c + "): " + String(b) + "\n" + (b.stack || ""))
                        })
                    })
                }), a.length) throw a.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or an expected log message was not checked and removed:"), a.push(""), new Error(a.join("\n---------\n"))
            }, d.reset(), d
        }
    }, b.mock.$IntervalProvider = function () {
        this.$get = ["$rootScope", "$q",
            function (a, d) {
                var e = [],
                    f = 0,
                    g = 0,
                    h = function (h, i, j, k) {
                        function l() {
                            if (m.notify(o++), j > 0 && o >= j) {
                                var d;
                                m.resolve(o), b.forEach(e, function (a, b) {
                                    a.id === n.$$intervalId && (d = b)
                                }), d !== c && e.splice(d, 1)
                            }
                            p || a.$apply()
                        }
                        var m = d.defer(),
                            n = m.promise,
                            o = 0,
                            p = b.isDefined(k) && !k;
                        return j = b.isDefined(j) ? j : 0, n.then(null, null, h), n.$$intervalId = f, e.push({
                            nextTime: g + i,
                            delay: i,
                            fn: l,
                            id: f,
                            deferred: m
                        }), e.sort(function (a, b) {
                            return a.nextTime - b.nextTime
                        }), f++, n
                    };
                return h.cancel = function (a) {
                    var d;
                    return b.forEach(e, function (b, c) {
                        b.id === a.$$intervalId && (d = c)
                    }), d !== c ? (e[d].deferred.reject("canceled"), e.splice(d, 1), !0) : !1
                }, h.flush = function (a) {
                    for (g += a; e.length && e[0].nextTime <= g;) {
                        var b = e[0];
                        b.fn(), b.nextTime += b.delay, e.sort(function (a, b) {
                            return a.nextTime - b.nextTime
                        })
                    }
                    return a
                }, h
            }
        ]
    };
    var j = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;
    if (b.mock.TzDate = function (a, c) {
        var e = new Date(0);
        if (b.isString(c)) {
            var g = c;
            if (e.origDate = d(c), c = e.origDate.getTime(), isNaN(c)) throw {
                name: "Illegal Argument",
                message: "Arg '" + g + "' passed into TzDate constructor is not a valid date string"
            }
        } else e.origDate = new Date(c);
        var h = new Date(c).getTimezoneOffset();
        e.offsetDiff = 60 * h * 1e3 - 1e3 * a * 60 * 60, e.date = new Date(c + e.offsetDiff), e.getTime = function () {
            return e.date.getTime() - e.offsetDiff
        }, e.toLocaleDateString = function () {
            return e.date.toLocaleDateString()
        }, e.getFullYear = function () {
            return e.date.getFullYear()
        }, e.getMonth = function () {
            return e.date.getMonth()
        }, e.getDate = function () {
            return e.date.getDate()
        }, e.getHours = function () {
            return e.date.getHours()
        }, e.getMinutes = function () {
            return e.date.getMinutes()
        }, e.getSeconds = function () {
            return e.date.getSeconds()
        }, e.getMilliseconds = function () {
            return e.date.getMilliseconds()
        }, e.getTimezoneOffset = function () {
            return 60 * a
        }, e.getUTCFullYear = function () {
            return e.origDate.getUTCFullYear()
        }, e.getUTCMonth = function () {
            return e.origDate.getUTCMonth()
        }, e.getUTCDate = function () {
            return e.origDate.getUTCDate()
        }, e.getUTCHours = function () {
            return e.origDate.getUTCHours()
        }, e.getUTCMinutes = function () {
            return e.origDate.getUTCMinutes()
        }, e.getUTCSeconds = function () {
            return e.origDate.getUTCSeconds()
        }, e.getUTCMilliseconds = function () {
            return e.origDate.getUTCMilliseconds()
        }, e.getDay = function () {
            return e.date.getDay()
        }, e.toISOString && (e.toISOString = function () {
            return f(e.origDate.getUTCFullYear(), 4) + "-" + f(e.origDate.getUTCMonth() + 1, 2) + "-" + f(e.origDate.getUTCDate(), 2) + "T" + f(e.origDate.getUTCHours(), 2) + ":" + f(e.origDate.getUTCMinutes(), 2) + ":" + f(e.origDate.getUTCSeconds(), 2) + "." + f(e.origDate.getUTCMilliseconds(), 3) + "Z"
        });
        var i = ["getUTCDay", "getYear", "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds", "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear", "toDateString", "toGMTString", "toJSON", "toLocaleFormat", "toLocaleString", "toLocaleTimeString", "toSource", "toString", "toTimeString", "toUTCString", "valueOf"];
        return b.forEach(i, function (a) {
            e[a] = function () {
                throw new Error("Method '" + a + "' is not implemented in the TzDate mock")
            }
        }), e
    }, b.mock.TzDate.prototype = Date.prototype, b.mock.animate = b.module("mock.animate", ["ng"]).config(["$provide",
        function (a) {
            a.decorator("$animate", function (a) {
                var c = {
                    queue: [],
                    enabled: a.enabled,
                    flushNext: function (a) {
                        var b = c.queue.shift();
                        if (!b) throw new Error("No animation to be flushed");
                        if (b.method !== a) throw new Error('The next animation is not "' + a + '", but is "' + b.method + '"');
                        return b.fn(), b
                    }
                };
                return b.forEach(["enter", "leave", "move", "addClass", "removeClass"], function (d) {
                    c[d] = function () {
                        var e = arguments;
                        c.queue.push({
                            method: d,
                            params: e,
                            element: b.isElement(e[0]) && e[0],
                            parent: b.isElement(e[1]) && e[1],
                            after: b.isElement(e[2]) && e[2],
                            fn: function () {
                                a[d].apply(a, e)
                            }
                        })
                    }
                }), c
            })
        }
    ]), b.mock.dump = function (a) {
        function c(a) {
            var e;
            return b.isElement(a) ? (a = b.element(a), e = b.element("<div></div>"), b.forEach(a, function (a) {
                e.append(b.element(a).clone())
            }), e = e.html()) : b.isArray(a) ? (e = [], b.forEach(a, function (a) {
                e.push(c(a))
            }), e = "[ " + e.join(", ") + " ]") : e = b.isObject(a) ? b.isFunction(a.$eval) && b.isFunction(a.$apply) ? d(a) : a instanceof Error ? a.stack || "" + a.name + ": " + a.message : b.toJson(a, !0) : String(a), e
        }

        function d(a, c) {
            c = c || "  ";
            var e = [c + "Scope(" + a.$id + "): {"];
            for (var f in a) Object.prototype.hasOwnProperty.call(a, f) && !f.match(/^(\$|this)/) && e.push("  " + f + ": " + b.toJson(a[f]));
            for (var g = a.$$childHead; g;) e.push(d(g, c + "  ")), g = g.$$nextSibling;
            return e.push("}"), e.join("\n" + c)
        }
        return c(a)
    }, b.mock.$HttpBackendProvider = function () {
        this.$get = ["$rootScope", g]
    }, b.mock.$TimeoutDecorator = function (a, c) {
        function d(a) {
            var c = [];
            return b.forEach(a, function (a) {
                c.push("{id: " + a.id + ", time: " + a.time + "}")
            }), c.join(", ")
        }
        return a.flush = function (a) {
            c.defer.flush(a)
        }, a.verifyNoPendingTasks = function () {
            if (c.deferredFns.length) throw new Error("Deferred tasks to flush (" + c.deferredFns.length + "): " + d(c.deferredFns))
        }, a
    }, b.mock.$RootElementProvider = function () {
        this.$get = function () {
            return b.element("<div ng-app></div>")
        }
    }, b.module("ngMock", ["ng"]).provider({
        $browser: b.mock.$BrowserProvider,
        $exceptionHandler: b.mock.$ExceptionHandlerProvider,
        $log: b.mock.$LogProvider,
        $interval: b.mock.$IntervalProvider,
        $httpBackend: b.mock.$HttpBackendProvider,
        $rootElement: b.mock.$RootElementProvider
    }).config(["$provide",
        function (a) {
            a.decorator("$timeout", b.mock.$TimeoutDecorator)
        }
    ]), b.module("ngMockE2E", ["ng"]).config(["$provide",
        function (a) {
            a.decorator("$httpBackend", b.mock.e2e.$httpBackendDecorator)
        }
    ]), b.mock.e2e = {}, b.mock.e2e.$httpBackendDecorator = ["$rootScope", "$delegate", "$browser", g], b.mock.clearDataCache = function () {
        var a, c = b.element.cache;
        for (a in c)
            if (Object.prototype.hasOwnProperty.call(c, a)) {
                var d = c[a].handle;
                d && b.element(d.elem).off(), delete c[a]
            }
    }, a.jasmine || a.mocha) {
        var k = null,
            l = function () {
                return k && (a.mocha || k.queue.running)
            };
        beforeEach(function () {
            k = this
        }), afterEach(function () {
            var a = k.$injector;
            k.$injector = null, k.$modules = null, k = null, a && (a.get("$rootElement").off(), a.get("$browser").pollFns.length = 0), b.mock.clearDataCache(), b.forEach(b.element.fragments, function (a, c) {
                delete b.element.fragments[c]
            }), i.$$lastInstance = null, b.forEach(b.callbacks, function (a, c) {
                delete b.callbacks[c]
            }), b.callbacks.counter = 0
        }), a.module = b.mock.module = function () {
            function a() {
                if (k.$injector) throw new Error("Injector already created, can not register a module!");
                var a = k.$modules || (k.$modules = []);
                b.forEach(c, function (c) {
                    a.push(b.isObject(c) && !b.isArray(c) ? function (a) {
                        b.forEach(c, function (b, c) {
                            a.value(c, b)
                        })
                    } : c)
                })
            }
            var c = Array.prototype.slice.call(arguments, 0);
            return l() ? a() : a
        }, a.inject = b.mock.inject = function () {
            function a() {
                var a = k.$modules || [];
                a.unshift("ngMock"), a.unshift("ng");
                var e = k.$injector;
                e || (e = k.$injector = b.injector(a));
                for (var f = 0, g = c.length; g > f; f++) try {
                    e.invoke(c[f] || b.noop, this)
                } catch (h) {
                    throw h.stack && d && (h.stack += "\n" + d.stack), h
                } finally {
                    d = null
                }
            }
            var c = Array.prototype.slice.call(arguments, 0),
                d = new Error("Declaration Location");
            return l() ? a() : a
        }
    }
}(window, window.angular),
function () {
    var COMPILED = !0,
        goog = goog || {};
    goog.global = this, goog.DEBUG = !0, goog.LOCALE = "en", goog.provide = function (a) {
        if (!COMPILED) {
            if (goog.isProvided_(a)) throw Error('Namespace "' + a + '" already declared.');
            delete goog.implicitNamespaces_[a];
            for (var b = a;
                (b = b.substring(0, b.lastIndexOf("."))) && !goog.getObjectByName(b);) goog.implicitNamespaces_[b] = !0
        }
        goog.exportPath_(a)
    }, goog.setTestOnly = function (a) {
        if (COMPILED && !goog.DEBUG) throw a = a || "", Error(": " + a)
    }, COMPILED || (goog.isProvided_ = function (a) {
        return !goog.implicitNamespaces_[a] && !!goog.getObjectByName(a)
    }, goog.implicitNamespaces_ = {}), goog.exportPath_ = function (a, b, c) {
        a = a.split("."), c = c || goog.global, !(a[0] in c) && c.execScript && c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)!a.length && goog.isDef(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
    }, goog.getObjectByName = function (a, b) {
        for (var c, d = a.split("."), e = b || goog.global; c = d.shift();) {
            if (!goog.isDefAndNotNull(e[c])) return null;
            e = e[c]
        }
        return e
    }, goog.globalize = function (a, b) {
        var c, d = b || goog.global;
        for (c in a) d[c] = a[c]
    }, goog.addDependency = function (a, b, c) {
        if (!COMPILED) {
            for (var d, a = a.replace(/\\/g, "/"), e = goog.dependencies_, f = 0; d = b[f]; f++) e.nameToPath[d] = a, a in e.pathToNames || (e.pathToNames[a] = {}), e.pathToNames[a][d] = !0;
            for (d = 0; b = c[d]; d++) a in e.requires || (e.requires[a] = {}), e.requires[a][b] = !0
        }
    }, goog.ENABLE_DEBUG_LOADER = !0, goog.require = function (a) {
        if (!COMPILED && !goog.isProvided_(a)) {
            if (goog.ENABLE_DEBUG_LOADER) {
                var b = goog.getPathFromDeps_(a);
                if (b) return goog.included_[b] = !0, void goog.writeScripts_()
            }
            throw a = "goog.require could not find: " + a, goog.global.console && goog.global.console.error(a), Error(a)
        }
    }, goog.basePath = "", goog.nullFunction = function () {}, goog.identityFunction = function (a) {
        return a
    }, goog.abstractMethod = function () {
        throw Error("unimplemented abstract method")
    }, goog.addSingletonGetter = function (a) {
        a.getInstance = function () {
            return a.instance_ ? a.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a), a.instance_ = new a)
        }
    }, goog.instantiatedSingletons_ = [], !COMPILED && goog.ENABLE_DEBUG_LOADER && (goog.included_ = {}, goog.dependencies_ = {
        pathToNames: {},
        nameToPath: {},
        requires: {},
        visited: {},
        written: {}
    }, goog.inHtmlDocument_ = function () {
        var a = goog.global.document;
        return "undefined" != typeof a && "write" in a
    }, goog.findBasePath_ = function () {
        if (goog.global.CLOSURE_BASE_PATH) goog.basePath = goog.global.CLOSURE_BASE_PATH;
        else if (goog.inHtmlDocument_())
            for (var a = goog.global.document.getElementsByTagName("script"), b = a.length - 1; b >= 0; --b) {
                var c = a[b].src,
                    d = c.lastIndexOf("?"),
                    d = -1 == d ? c.length : d;
                if ("base.js" == c.substr(d - 7, 7)) {
                    goog.basePath = c.substr(0, d - 7);
                    break
                }
            }
    }, goog.importScript_ = function (a) {
        var b = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
        !goog.dependencies_.written[a] && b(a) && (goog.dependencies_.written[a] = !0)
    }, goog.writeScriptTag_ = function (a) {
        return goog.inHtmlDocument_() ? (goog.global.document.write('<script type="text/javascript" src="' + a + '"></script>'), !0) : !1
    }, goog.writeScripts_ = function () {
        function a(b) {
            if (!(b in e.written)) {
                if (!(b in e.visited) && (e.visited[b] = !0, b in e.requires))
                    for (var f in e.requires[b])
                        if (!goog.isProvided_(f)) {
                            if (!(f in e.nameToPath)) throw Error("Undefined nameToPath for " + f);
                            a(e.nameToPath[f])
                        }
                b in d || (d[b] = !0, c.push(b))
            }
        }
        var b, c = [],
            d = {},
            e = goog.dependencies_;
        for (b in goog.included_) e.written[b] || a(b);
        for (b = 0; b < c.length; b++) {
            if (!c[b]) throw Error("Undefined script input");
            goog.importScript_(goog.basePath + c[b])
        }
    }, goog.getPathFromDeps_ = function (a) {
        return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null
    }, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js")), goog.typeOf = function (a) {
        var b = typeof a;
        if ("object" == b) {
            if (!a) return "null";
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }, goog.isDef = function (a) {
        return void 0 !== a
    }, goog.isNull = function (a) {
        return null === a
    }, goog.isDefAndNotNull = function (a) {
        return null != a
    }, goog.isArray = function (a) {
        return "array" == goog.typeOf(a)
    }, goog.isArrayLike = function (a) {
        var b = goog.typeOf(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }, goog.isDateLike = function (a) {
        return goog.isObject(a) && "function" == typeof a.getFullYear
    }, goog.isString = function (a) {
        return "string" == typeof a
    }, goog.isBoolean = function (a) {
        return "boolean" == typeof a
    }, goog.isNumber = function (a) {
        return "number" == typeof a
    }, goog.isFunction = function (a) {
        return "function" == goog.typeOf(a)
    }, goog.isObject = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }, goog.getUid = function (a) {
        return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_)
    }, goog.removeUid = function (a) {
        "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
        try {
            delete a[goog.UID_PROPERTY_]
        } catch (b) {}
    }, goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), goog.uidCounter_ = 0, goog.getHashCode = goog.getUid, goog.removeHashCode = goog.removeUid, goog.cloneObject = function (a) {
        var b = goog.typeOf(a);
        if ("object" == b || "array" == b) {
            if (a.clone) return a.clone();
            var c, b = "array" == b ? [] : {};
            for (c in a) b[c] = goog.cloneObject(a[c]);
            return b
        }
        return a
    }, goog.bindNative_ = function (a) {
        return a.call.apply(a.bind, arguments)
    }, goog.bindJs_ = function (a, b) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var c = Array.prototype.slice.call(arguments, 2);
            return function () {
                var d = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(d, c), a.apply(b, d)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }, goog.bind = function () {
        return goog.bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bindNative_ : goog.bindJs_, goog.bind.apply(null, arguments)
    }, goog.partial = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return function () {
            var c = Array.prototype.slice.call(arguments);
            return c.unshift.apply(c, b), a.apply(this, c)
        }
    }, goog.mixin = function (a, b) {
        for (var c in b) a[c] = b[c]
    }, goog.now = Date.now || function () {
        return +new Date
    }, goog.globalEval = function (a) {
        if (goog.global.execScript) goog.global.execScript(a, "JavaScript");
        else {
            if (!goog.global.eval) throw Error("goog.globalEval not available");
            if (null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1), goog.evalWorksForGlobals_) goog.global.eval(a);
            else {
                var b = goog.global.document,
                    c = b.createElement("script");
                c.type = "text/javascript", c.defer = !1, c.appendChild(b.createTextNode(a)), b.body.appendChild(c), b.body.removeChild(c)
            }
        }
    }, goog.evalWorksForGlobals_ = null, goog.getCssName = function (a, b) {
        var c = function (a) {
                return goog.cssNameMapping_[a] || a
            },
            d = function (a) {
                for (var a = a.split("-"), b = [], d = 0; d < a.length; d++) b.push(c(a[d]));
                return b.join("-")
            },
            d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function (a) {
                return a
            };
        return b ? a + "-" + d(b) : d(a)
    }, goog.setCssNameMapping = function (a, b) {
        goog.cssNameMapping_ = a, goog.cssNameMappingStyle_ = b
    }, !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING), goog.getMsg = function (a, b) {
        var c, d = b || {};
        for (c in d) var e = ("" + d[c]).replace(/\$/g, "$$$$"),
            a = a.replace(RegExp("\\{\\$" + c + "\\}", "gi"), e);
        return a
    }, goog.exportSymbol = function (a, b, c) {
        goog.exportPath_(a, b, c)
    }, goog.exportProperty = function (a, b, c) {
        a[b] = c
    }, goog.inherits = function (a, b) {
        function c() {}
        c.prototype = b.prototype, a.superClass_ = b.prototype, a.prototype = new c, a.prototype.constructor = a
    }, goog.base = function (a, b) {
        var c = arguments.callee.caller;
        if (c.superClass_) return c.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
        for (var d = Array.prototype.slice.call(arguments, 2), e = !1, f = a.constructor; f; f = f.superClass_ && f.superClass_.constructor)
            if (f.prototype[b] === c) e = !0;
            else if (e) return f.prototype[b].apply(a, d);
        if (a[b] === c) return a.constructor.prototype[b].apply(a, d);
        throw Error("goog.base called from a method of one name to a method of a different name")
    }, goog.scope = function (a) {
        a.call(goog.global)
    };
    var fb = {
        util: {}
    };
    fb.util.validation = {}, fb.util.validation.validateArgCount = function (a, b, c, d) {
        var e;
        if (b > d ? e = "at least " + b : d > c && (e = 0 === c ? "none" : "no more than " + c), e) throw Error(a + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + e + ".")
    }, fb.util.validation.errorPrefix_ = function (a, b, c) {
        var d = "";
        switch (b) {
        case 1:
            d = c ? "first" : "First";
            break;
        case 2:
            d = c ? "second" : "Second";
            break;
        case 3:
            d = c ? "third" : "Third";
            break;
        case 4:
            d = c ? "fourth" : "Fourth";
            break;
        default:
            fb.core.util.validation.assert(!1, "errorPrefix_ called with argumentNumber > 4.  Need to update it?")
        }
        return a + " failed: " + (d + " argument ")
    }, fb.util.validation.validateNamespace = function (a, b, c, d) {
        if ((!d || goog.isDef(c)) && !goog.isString(c)) throw Error(fb.util.validation.errorPrefix_(a, b, d) + "must be a valid firebase namespace.")
    }, fb.util.validation.validateCallback = function (a, b, c, d) {
        if ((!d || goog.isDef(c)) && !goog.isFunction(c)) throw Error(fb.util.validation.errorPrefix_(a, b, d) + "must be a valid function.")
    }, fb.util.validation.validateString = function (a, b, c, d) {
        if ((!d || goog.isDef(c)) && !goog.isString(c)) throw Error(fb.util.validation.errorPrefix_(a, b, d) + "must be a valid string.")
    }, fb.util.validation.validateContextObject = function (a, b, c, d) {
        if (!(d && !goog.isDef(c) || goog.isObject(c) && null !== c)) throw Error(fb.util.validation.errorPrefix_(a, b, d) + "must be a valid context object.")
    }, fb.simplelogin = {}, fb.simplelogin.persona = {}, fb.simplelogin.persona.login = function (a) {
        navigator.id.watch({
            onlogin: function (b) {
                a(b)
            },
            onlogout: function () {}
        }), navigator.id.request({
            oncancel: function () {
                a(null)
            }
        })
    }, fb.constants = {};
    var NODE_CLIENT = !1;
    goog.json = {}, goog.json.isValid_ = function (a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    }, goog.json.parse = function (a) {
        if (a = String(a), goog.json.isValid_(a)) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a)
    }, goog.json.unsafeParse = function (a) {
        return eval("(" + a + ")")
    }, goog.json.serialize = function (a, b) {
        return new goog.json.Serializer(b).serialize(a)
    }, goog.json.Serializer = function (a) {
        this.replacer_ = a
    }, goog.json.Serializer.prototype.serialize = function (a) {
        var b = [];
        return this.serialize_(a, b), b.join("")
    }, goog.json.Serializer.prototype.serialize_ = function (a, b) {
        switch (typeof a) {
        case "string":
            this.serializeString_(a, b);
            break;
        case "number":
            this.serializeNumber_(a, b);
            break;
        case "boolean":
            b.push(a);
            break;
        case "undefined":
            b.push("null");
            break;
        case "object":
            if (null == a) {
                b.push("null");
                break
            }
            if (goog.isArray(a)) {
                this.serializeArray(a, b);
                break
            }
            this.serializeObject_(a, b);
            break;
        case "function":
            break;
        default:
            throw Error("Unknown type: " + typeof a)
        }
    }, goog.json.Serializer.charToJsonCharCache_ = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "	": "\\t",
        "": "\\u000b"
    }, goog.json.Serializer.charsToReplace_ = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g, goog.json.Serializer.prototype.serializeString_ = function (a, b) {
        b.push('"', a.replace(goog.json.Serializer.charsToReplace_, function (a) {
            if (a in goog.json.Serializer.charToJsonCharCache_) return goog.json.Serializer.charToJsonCharCache_[a];
            var b = a.charCodeAt(0),
                c = "\\u";
            return 16 > b ? c += "000" : 256 > b ? c += "00" : 4096 > b && (c += "0"), goog.json.Serializer.charToJsonCharCache_[a] = c + b.toString(16)
        }), '"')
    }, goog.json.Serializer.prototype.serializeNumber_ = function (a, b) {
        b.push(isFinite(a) && !isNaN(a) ? a : "null")
    }, goog.json.Serializer.prototype.serializeArray = function (a, b) {
        var c = a.length;
        b.push("[");
        for (var d = "", e = 0; c > e; e++) b.push(d), d = a[e], this.serialize_(this.replacer_ ? this.replacer_.call(a, String(e), d) : d, b), d = ",";
        b.push("]")
    }, goog.json.Serializer.prototype.serializeObject_ = function (a, b) {
        b.push("{");
        var c, d = "";
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var e = a[c];
                "function" != typeof e && (b.push(d), this.serializeString_(c, b), b.push(":"), this.serialize_(this.replacer_ ? this.replacer_.call(a, c, e) : e, b), d = ",")
            }
        b.push("}")
    }, fb.util.json = {}, fb.util.json.eval = function (a) {
        return "undefined" != typeof JSON && goog.isDef(JSON.parse) ? JSON.parse(a) : goog.json.parse(a)
    }, fb.util.json.stringify = function (a) {
        return "undefined" != typeof JSON && goog.isDef(JSON.stringify) ? JSON.stringify(a) : goog.json.serialize(a)
    }, fb.simplelogin.validation = {};
    var VALID_EMAIL_REGEX_ = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    fb.simplelogin.validation.isValidEmail = function (a) {
        return goog.isString(a) && VALID_EMAIL_REGEX_.test(a)
    }, fb.simplelogin.validation.isValidPassword = function (a) {
        return goog.isString(a)
    }, fb.simplelogin.validation.validateUser = function (a, b, c, d) {
        if ((!d || goog.isDef(c)) && !fb.simplelogin.validation.isValidEmail(c)) throw Error(fb.util.validation.errorPrefix_(a, b, d) + "must be a valid email address.")
    }, fb.simplelogin.validation.validatePassword = function (a, b, c, d) {
        if ((!d || goog.isDef(c)) && !fb.simplelogin.validation.isValidPassword(c)) throw Error(fb.util.validation.errorPrefix_(a, b, d) + "must be a valid password.")
    }, fb.simplelogin.winchan = function () {
        function a(a, b, c) {
            a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener && a.addEventListener(b, c, !1)
        }

        function b(a, b, c) {
            a.detachEvent ? a.detachEvent("on" + b, c) : a.removeEventListener && a.removeEventListener(b, c, !1)
        }

        function c(a) {
            /^https?:\/\//.test(a) || (a = window.location.href);
            var b = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);
            return b ? b[1] : a
        }
        var d, e = "die",
            f = -1,
            g = navigator.userAgent;
        if ("Microsoft Internet Explorer" === navigator.appName) {
            var h = /MSIE ([0-9]{1,}[\.0-9]{0,})/;
            (g = g.match(h)) && 1 < g.length && (f = parseFloat(g[1]))
        } else -1 < g.indexOf("Trident") && (h = /rv:([0-9]{2,2}[\.0-9]{0,})/, (g = g.match(h)) && 1 < g.length && (f = parseFloat(g[1])));
        return d = f >= 8, fb.util.json && fb.util.json.eval && fb.util.json.stringify && window.postMessage ? {
            open: function (f, g) {
                function h() {
                    if (n && document.body.removeChild(n), n = void 0, r && (r = clearInterval(r)), b(window, "message", i), b(window, "unload", h), q) try {
                        q.close()
                    } catch (a) {
                        p.postMessage(e, o)
                    }
                    q = p = void 0
                }

                function i(a) {
                    if (a.origin === o) try {
                        var b = fb.util.json.eval(a.data);
                        "ready" === b.a ? p.postMessage(s, o) : "error" === b.a ? (h(), g && (g(b.d), g = null)) : "response" === b.a && (h(), g && (g(null, b.d), g = null))
                    } catch (c) {}
                }
                if (!g) throw "missing required callback argument";
                var j;
                f.url || (j = "missing required 'url' parameter"), f.relay_url || (j = "missing required 'relay_url' parameter"), j && setTimeout(function () {
                    g(j)
                }, 0), f.window_name || (f.window_name = null);
                var k;
                if (!(k = !f.window_features)) a: {
                    try {
                        var l = navigator.userAgent;
                        k = -1 != l.indexOf("Fennec/") || -1 != l.indexOf("Firefox/") && -1 != l.indexOf("Android");
                        break a
                    } catch (m) {}
                    k = !1
                }
                k && (f.window_features = void 0);
                var n, o = c(f.url);
                if (o !== c(f.relay_url)) return setTimeout(function () {
                    g("invalid arguments: origin of url and relay_url must match")
                }, 0);
                var p;
                d && (n = document.createElement("iframe"), n.setAttribute("src", f.relay_url), n.style.display = "none", n.setAttribute("name", "__winchan_relay_frame"), document.body.appendChild(n), p = n.contentWindow);
                var q = window.open(f.url, f.window_name, f.window_features);
                p || (p = q);
                var r = setInterval(function () {
                        q && q.closed && (h(), g && (g("unknown closed window"), g = null))
                    }, 500),
                    s = fb.util.json.stringify({
                        a: "request",
                        d: f.params
                    });
                return a(window, "unload", h), a(window, "message", i), {
                    close: h,
                    focus: function () {
                        if (q) try {
                            q.focus()
                        } catch (a) {}
                    }
                }
            },
            onOpen: function (c) {
                function f(a) {
                    a = fb.util.json.stringify(a), d ? o.doPost(a, j) : o.postMessage(a, j)
                }

                function g(a) {
                    var d;
                    try {
                        d = fb.util.json.eval(a.data)
                    } catch (e) {}
                    d && "request" === d.a && (b(window, "message", g), j = a.origin, c && setTimeout(function () {
                        c(j, d.d, function (a) {
                            c = void 0, f({
                                a: "response",
                                d: a
                            })
                        })
                    }, 0))
                }

                function h(a) {
                    if (a.data === e) try {
                        window.close()
                    } catch (b) {}
                }
                var i, j = "*";
                if (d) a: {
                    for (var k = window.location, l = window.opener.frames, k = k.protocol + "//" + k.host, m = l.length - 1; m >= 0; m--) try {
                        if (0 === l[m].location.href.indexOf(k) && "__winchan_relay_frame" === l[m].name) {
                            i = l[m];
                            break a
                        }
                    } catch (n) {}
                    i = void 0
                } else i = window.opener;
                var o = i;
                if (!o) throw "can't find relay frame";
                a(d ? o : window, "message", g), a(d ? o : window, "message", h);
                try {
                    f({
                        a: "ready"
                    })
                } catch (p) {
                    a(o, "load", function () {
                        f({
                            a: "ready"
                        })
                    })
                }
                var q = function () {
                    try {
                        b(d ? o : window, "message", h)
                    } catch (a) {}
                    c && f({
                        a: "error",
                        d: "client closed window"
                    }), c = void 0;
                    try {
                        window.close()
                    } catch (e) {}
                };
                return a(window, "unload", q), {
                    detach: function () {
                        b(window, "unload", q)
                    }
                }
            }
        } : {
            open: function (a, b, c, d) {
                setTimeout(function () {
                    d("unsupported browser")
                }, 0)
            },
            onOpen: function (a) {
                setTimeout(function () {
                    a("unsupported browser")
                }, 0)
            }
        }
    }(), fb.util.sjcl = {};
    var sjcl = {
        cipher: {},
        hash: {},
        keyexchange: {},
        mode: {},
        misc: {},
        codec: {},
        exception: {
            corrupt: function (a) {
                this.toString = function () {
                    return "CORRUPT: " + this.message
                }, this.message = a
            },
            invalid: function (a) {
                this.toString = function () {
                    return "INVALID: " + this.message
                }, this.message = a
            },
            bug: function (a) {
                this.toString = function () {
                    return "BUG: " + this.message
                }, this.message = a
            },
            notReady: function (a) {
                this.toString = function () {
                    return "NOT READY: " + this.message
                }, this.message = a
            }
        }
    };
    "undefined" != typeof module && module.exports && (module.exports = sjcl), sjcl.cipher.aes = function (a) {
        this.h[0][0][0] || this.w();
        var b, c, d, e, f = this.h[0][4],
            g = this.h[1];
        b = a.length;
        var h = 1;
        if (4 !== b && 6 !== b && 8 !== b) throw new sjcl.exception.invalid("invalid aes key size");
        for (this.a = [d = a.slice(0), e = []], a = b; 4 * b + 28 > a; a++) c = d[a - 1], (a % b === 0 || 8 === b && a % b === 4) && (c = f[c >>> 24] << 24 ^ f[c >> 16 & 255] << 16 ^ f[c >> 8 & 255] << 8 ^ f[255 & c], a % b === 0 && (c = c << 8 ^ c >>> 24 ^ h << 24, h = h << 1 ^ 283 * (h >> 7))), d[a] = d[a - b] ^ c;
        for (b = 0; a; b++, a--) c = d[3 & b ? a : a - 4], e[b] = 4 >= a || 4 > b ? c : g[0][f[c >>> 24]] ^ g[1][f[c >> 16 & 255]] ^ g[2][f[c >> 8 & 255]] ^ g[3][f[255 & c]]
    }, sjcl.cipher.aes.prototype = {
        encrypt: function (a) {
            return this.G(a, 0)
        },
        decrypt: function (a) {
            return this.G(a, 1)
        },
        h: [
            [
                [],
                [],
                [],
                [],
                []
            ],
            [
                [],
                [],
                [],
                [],
                []
            ]
        ],
        w: function () {
            var a, b, c, d, e, f, g, h = this.h[0],
                i = this.h[1],
                j = h[4],
                k = i[4],
                l = [],
                m = [];
            for (a = 0; 256 > a; a++) m[(l[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
            for (b = c = 0; !j[b]; b ^= d || 1, c = m[c] || 1)
                for (f = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4, f = f >> 8 ^ 255 & f ^ 99, j[b] = f, k[f] = b, e = l[a = l[d = l[b]]], g = 16843009 * e ^ 65537 * a ^ 257 * d ^ 16843008 * b, e = 257 * l[f] ^ 16843008 * f, a = 0; 4 > a; a++) h[a][b] = e = e << 24 ^ e >>> 8, i[a][f] = g = g << 24 ^ g >>> 8;
            for (a = 0; 5 > a; a++) h[a] = h[a].slice(0), i[a] = i[a].slice(0)
        },
        G: function (a, b) {
            if (4 !== a.length) throw new sjcl.exception.invalid("invalid aes block size");
            var c, d, e, f, g = this.a[b],
                h = a[0] ^ g[0],
                i = a[b ? 3 : 1] ^ g[1],
                j = a[2] ^ g[2],
                a = a[b ? 1 : 3] ^ g[3],
                k = g.length / 4 - 2,
                l = 4,
                m = [0, 0, 0, 0];
            c = this.h[b];
            var n = c[0],
                o = c[1],
                p = c[2],
                q = c[3],
                r = c[4];
            for (f = 0; k > f; f++) c = n[h >>> 24] ^ o[i >> 16 & 255] ^ p[j >> 8 & 255] ^ q[255 & a] ^ g[l], d = n[i >>> 24] ^ o[j >> 16 & 255] ^ p[a >> 8 & 255] ^ q[255 & h] ^ g[l + 1], e = n[j >>> 24] ^ o[a >> 16 & 255] ^ p[h >> 8 & 255] ^ q[255 & i] ^ g[l + 2], a = n[a >>> 24] ^ o[h >> 16 & 255] ^ p[i >> 8 & 255] ^ q[255 & j] ^ g[l + 3], l += 4, h = c, i = d, j = e;
            for (f = 0; 4 > f; f++) m[b ? 3 & -f : f] = r[h >>> 24] << 24 ^ r[i >> 16 & 255] << 16 ^ r[j >> 8 & 255] << 8 ^ r[255 & a] ^ g[l++], c = h, h = i, i = j, j = a, a = c;
            return m
        }
    }, sjcl.bitArray = {
        bitSlice: function (a, b, c) {
            return a = sjcl.bitArray.N(a.slice(b / 32), 32 - (31 & b)).slice(1), void 0 === c ? a : sjcl.bitArray.clamp(a, c - b)
        },
        extract: function (a, b, c) {
            var d = Math.floor(-b - c & 31);
            return (-32 & (b + c - 1 ^ b) ? a[b / 32 | 0] << 32 - d ^ a[b / 32 + 1 | 0] >>> d : a[b / 32 | 0] >>> d) & (1 << c) - 1
        },
        concat: function (a, b) {
            if (0 === a.length || 0 === b.length) return a.concat(b);
            var c = a[a.length - 1],
                d = sjcl.bitArray.getPartial(c);
            return 32 === d ? a.concat(b) : sjcl.bitArray.N(b, d, 0 | c, a.slice(0, a.length - 1))
        },
        bitLength: function (a) {
            var b = a.length;
            return 0 === b ? 0 : 32 * (b - 1) + sjcl.bitArray.getPartial(a[b - 1])
        },
        clamp: function (a, b) {
            if (32 * a.length < b) return a;
            var a = a.slice(0, Math.ceil(b / 32)),
                c = a.length,
                b = 31 & b;
            return c > 0 && b && (a[c - 1] = sjcl.bitArray.partial(b, a[c - 1] & 2147483648 >> b - 1, 1)), a
        },
        partial: function (a, b, c) {
            return 32 === a ? b : (c ? 0 | b : b << 32 - a) + 1099511627776 * a
        },
        getPartial: function (a) {
            return Math.round(a / 1099511627776) || 32
        },
        equal: function (a, b) {
            if (sjcl.bitArray.bitLength(a) !== sjcl.bitArray.bitLength(b)) return !1;
            var c, d = 0;
            for (c = 0; c < a.length; c++) d |= a[c] ^ b[c];
            return 0 === d
        },
        N: function (a, b, c, d) {
            var e;
            for (void 0 === d && (d = []); b >= 32; b -= 32) d.push(c), c = 0;
            if (0 === b) return d.concat(a);
            for (e = 0; e < a.length; e++) d.push(c | a[e] >>> b), c = a[e] << 32 - b;
            return e = a.length ? a[a.length - 1] : 0, a = sjcl.bitArray.getPartial(e), d.push(sjcl.bitArray.partial(b + a & 31, b + a > 32 ? c : d.pop(), 1)), d
        },
        O: function (a, b) {
            return [a[0] ^ b[0], a[1] ^ b[1], a[2] ^ b[2], a[3] ^ b[3]]
        }
    }, sjcl.codec.utf8String = {
        fromBits: function (a) {
            var b, c, d = "",
                e = sjcl.bitArray.bitLength(a);
            for (b = 0; e / 8 > b; b++) 0 === (3 & b) && (c = a[b / 4]), d += String.fromCharCode(c >>> 24), c <<= 8;
            return decodeURIComponent(escape(d))
        },
        toBits: function (a) {
            var b, a = unescape(encodeURIComponent(a)),
                c = [],
                d = 0;
            for (b = 0; b < a.length; b++) d = d << 8 | a.charCodeAt(b), 3 === (3 & b) && (c.push(d), d = 0);
            return 3 & b && c.push(sjcl.bitArray.partial(8 * (3 & b), d)), c
        }
    }, sjcl.codec.base64 = {
        C: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        fromBits: function (a, b, c) {
            var d = "",
                e = 0,
                f = sjcl.codec.base64.C,
                g = 0,
                h = sjcl.bitArray.bitLength(a);
            for (c && (f = f.substr(0, 62) + "-_"), c = 0; 6 * d.length < h;) d += f.charAt((g ^ a[c] >>> e) >>> 26), 6 > e ? (g = a[c] << 6 - e, e += 26, c++) : (g <<= 6, e -= 6);
            for (; 3 & d.length && !b;) d += "=";
            return d
        },
        toBits: function (a, b) {
            var c, a = a.replace(/\s|=/g, ""),
                d = [],
                e = 0,
                f = sjcl.codec.base64.C,
                g = 0;
            for (b && (f = f.substr(0, 62) + "-_"), b = 0; b < a.length; b++) {
                if (c = f.indexOf(a.charAt(b)), 0 > c) throw new sjcl.exception.invalid("this isn't base64!");
                e > 26 ? (e -= 26, d.push(g ^ c >>> e), g = c << 32 - e) : (e += 6, g ^= c << 32 - e)
            }
            return 56 & e && d.push(sjcl.bitArray.partial(56 & e, g, 1)), d
        }
    }, sjcl.codec.base64url = {
        fromBits: function (a) {
            return sjcl.codec.base64.fromBits(a, 1, 1)
        },
        toBits: function (a) {
            return sjcl.codec.base64.toBits(a, 1)
        }
    }, sjcl.hash.sha256 = function (a) {
        this.a[0] || this.w(), a ? (this.m = a.m.slice(0), this.i = a.i.slice(0), this.e = a.e) : this.reset()
    }, sjcl.hash.sha256.hash = function (a) {
        return (new sjcl.hash.sha256).update(a).finalize()
    }, sjcl.hash.sha256.prototype = {
        blockSize: 512,
        reset: function () {
            return this.m = this.L.slice(0), this.i = [], this.e = 0, this
        },
        update: function (a) {
            "string" == typeof a && (a = sjcl.codec.utf8String.toBits(a));
            var b, c = this.i = sjcl.bitArray.concat(this.i, a);
            for (b = this.e, a = this.e = b + sjcl.bitArray.bitLength(a), b = 512 + b & -512; a >= b; b += 512) this.B(c.splice(0, 16));
            return this
        },
        finalize: function () {
            var a, b = this.i,
                c = this.m,
                b = sjcl.bitArray.concat(b, [sjcl.bitArray.partial(1, 1)]);
            for (a = b.length + 2; 15 & a; a++) b.push(0);
            for (b.push(Math.floor(this.e / 4294967296)), b.push(0 | this.e); b.length;) this.B(b.splice(0, 16));
            return this.reset(), c
        },
        L: [],
        a: [],
        w: function () {
            function a(a) {
                return 4294967296 * (a - Math.floor(a)) | 0
            }
            var b, c = 0,
                d = 2;
            a: for (; 64 > c; d++) {
                for (b = 2; d >= b * b; b++)
                    if (d % b === 0) continue a;
                8 > c && (this.L[c] = a(Math.pow(d, .5))), this.a[c] = a(Math.pow(d, 1 / 3)), c++
            }
        },
        B: function (a) {
            for (var b, c, d = a.slice(0), e = this.m, f = this.a, g = e[0], h = e[1], i = e[2], j = e[3], k = e[4], l = e[5], m = e[6], n = e[7], a = 0; 64 > a; a++) 16 > a ? b = d[a] : (b = d[a + 1 & 15], c = d[a + 14 & 15], b = d[15 & a] = (b >>> 7 ^ b >>> 18 ^ b >>> 3 ^ b << 25 ^ b << 14) + (c >>> 17 ^ c >>> 19 ^ c >>> 10 ^ c << 15 ^ c << 13) + d[15 & a] + d[a + 9 & 15] | 0), b = b + n + (k >>> 6 ^ k >>> 11 ^ k >>> 25 ^ k << 26 ^ k << 21 ^ k << 7) + (m ^ k & (l ^ m)) + f[a], n = m, m = l, l = k, k = j + b | 0, j = i, i = h, h = g, g = b + (h & i ^ j & (h ^ i)) + (h >>> 2 ^ h >>> 13 ^ h >>> 22 ^ h << 30 ^ h << 19 ^ h << 10) | 0;
            e[0] = e[0] + g | 0, e[1] = e[1] + h | 0, e[2] = e[2] + i | 0, e[3] = e[3] + j | 0, e[4] = e[4] + k | 0, e[5] = e[5] + l | 0, e[6] = e[6] + m | 0, e[7] = e[7] + n | 0
        }
    }, sjcl.mode.ccm = {
        name: "ccm",
        encrypt: function (a, b, c, d, e) {
            var f, g = b.slice(0),
                h = sjcl.bitArray,
                i = h.bitLength(c) / 8,
                j = h.bitLength(g) / 8,
                e = e || 64,
                d = d || [];
            if (7 > i) throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");
            for (f = 2; 4 > f && j >>> 8 * f; f++);
            return 15 - i > f && (f = 15 - i), c = h.clamp(c, 8 * (15 - f)), b = sjcl.mode.ccm.F(a, b, c, d, e, f), g = sjcl.mode.ccm.H(a, g, c, b, e, f), h.concat(g.data, g.tag)
        },
        decrypt: function (a, b, c, d, e) {
            var e = e || 64,
                d = d || [],
                f = sjcl.bitArray,
                g = f.bitLength(c) / 8,
                h = f.bitLength(b),
                i = f.clamp(b, h - e),
                j = f.bitSlice(b, h - e),
                h = (h - e) / 8;
            if (7 > g) throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");
            for (b = 2; 4 > b && h >>> 8 * b; b++);
            if (15 - g > b && (b = 15 - g), c = f.clamp(c, 8 * (15 - b)), i = sjcl.mode.ccm.H(a, i, c, j, e, b), a = sjcl.mode.ccm.F(a, i.data, c, d, e, b), !f.equal(i.tag, a)) throw new sjcl.exception.corrupt("ccm: tag doesn't match");
            return i.data
        },
        F: function (a, b, c, d, e, f) {
            var g = [],
                h = sjcl.bitArray,
                i = h.O,
                e = e / 8;
            if (e % 2 || 4 > e || e > 16) throw new sjcl.exception.invalid("ccm: invalid tag length");
            if (d.length > 4294967295 || b.length > 4294967295) throw new sjcl.exception.bug("ccm: can't deal with 4GiB or more data");
            if (f = [h.partial(8, (d.length ? 64 : 0) | e - 2 << 2 | f - 1)], f = h.concat(f, c), f[3] = f[3] | h.bitLength(b) / 8, f = a.encrypt(f), d.length)
                for (c = h.bitLength(d) / 8, 65279 >= c ? g = [h.partial(16, c)] : 4294967295 >= c && (g = h.concat([h.partial(16, 65534)], [c])), g = h.concat(g, d), d = 0; d < g.length; d += 4) f = a.encrypt(i(f, g.slice(d, d + 4).concat([0, 0, 0])));
            for (d = 0; d < b.length; d += 4) f = a.encrypt(i(f, b.slice(d, d + 4).concat([0, 0, 0])));
            return h.clamp(f, 8 * e)
        },
        H: function (a, b, c, d, e, f) {
            var g, h = sjcl.bitArray;
            g = h.O;
            var i = b.length,
                j = h.bitLength(b),
                c = h.concat([h.partial(8, f - 1)], c).concat([0, 0, 0]).slice(0, 4),
                d = h.bitSlice(g(d, a.encrypt(c)), 0, e);
            if (!i) return {
                tag: d,
                data: []
            };
            for (g = 0; i > g; g += 4) c[3]++, e = a.encrypt(c), b[g] = b[g] ^ e[0], b[g + 1] = b[g + 1] ^ e[1], b[g + 2] = b[g + 2] ^ e[2], b[g + 3] = b[g + 3] ^ e[3];
            return {
                tag: d,
                data: h.clamp(b, j)
            }
        }
    }, sjcl.misc.hmac = function (a, b) {
        this.K = b = b || sjcl.hash.sha256;
        var c = [
                [],
                []
            ],
            d = b.prototype.blockSize / 32;
        for (this.k = [new b, new b], a.length > d && (a = b.hash(a)), b = 0; d > b; b++) c[0][b] = 909522486 ^ a[b], c[1][b] = 1549556828 ^ a[b];
        this.k[0].update(c[0]), this.k[1].update(c[1])
    }, sjcl.misc.hmac.prototype.encrypt = sjcl.misc.hmac.prototype.mac = function (a) {
        return a = new this.K(this.k[0]).update(a).finalize(), new this.K(this.k[1]).update(a).finalize()
    }, sjcl.misc.pbkdf2 = function (a, b, c, d, e) {
        if (c = c || 1e3, 0 > d || 0 > c) throw sjcl.exception.invalid("invalid params to pbkdf2");
        "string" == typeof a && (a = sjcl.codec.utf8String.toBits(a));
        var f, g, h, i, e = e || sjcl.misc.hmac,
            a = new e(a),
            j = [],
            k = sjcl.bitArray;
        for (i = 1; 32 * j.length < (d || 1); i++) {
            for (e = f = a.encrypt(k.concat(b, [i])), g = 1; c > g; g++)
                for (f = a.encrypt(f), h = 0; h < f.length; h++) e[h] = e[h] ^ f[h];
            j = j.concat(e)
        }
        return d && (j = k.clamp(j, d)), j
    }, sjcl.random = {
        randomWords: function (a, b) {
            var c, d = [],
                b = this.isReady(b);
            if (0 === b) throw new sjcl.exception.notReady("generator isn't seeded");
            for (2 & b && this.T(!(1 & b)), b = 0; a > b; b += 4)(b + 1) % 65536 === 0 && this.J(), c = this.u(), d.push(c[0], c[1], c[2], c[3]);
            return this.J(), d.slice(0, a)
        },
        setDefaultParanoia: function (a) {
            this.s = a
        },
        addEntropy: function (a, b, c) {
            var d, e, c = c || "user",
                f = (new Date).valueOf(),
                g = this.p[c],
                h = this.isReady(),
                i = 0;
            switch (d = this.D[c], void 0 === d && (d = this.D[c] = this.Q++), void 0 === g && (g = this.p[c] = 0), this.p[c] = (this.p[c] + 1) % this.b.length, typeof a) {
            case "number":
                void 0 === b && (b = 1), this.b[g].update([d, this.t++, 1, b, f, 1, 0 | a]);
                break;
            case "object":
                if (c = Object.prototype.toString.call(a), "[object Uint32Array]" === c) {
                    for (e = [], c = 0; c < a.length; c++) e.push(a[c]);
                    a = e
                } else
                    for ("[object Array]" !== c && (i = 1), c = 0; c < a.length && !i; c++) "number" != typeof a[c] && (i = 1); if (!i) {
                    if (void 0 === b)
                        for (c = b = 0; c < a.length; c++)
                            for (e = a[c]; e > 0;) b++, e >>>= 1;
                    this.b[g].update([d, this.t++, 2, b, f, a.length].concat(a))
                }
                break;
            case "string":
                void 0 === b && (b = a.length), this.b[g].update([d, this.t++, 3, b, f, a.length]), this.b[g].update(a);
                break;
            default:
                i = 1
            }
            if (i) throw new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string");
            this.j[g] = this.j[g] + b, this.f = this.f + b, 0 === h && (0 !== this.isReady() && this.I("seeded", Math.max(this.g, this.f)), this.I("progress", this.getProgress()))
        },
        isReady: function (a) {
            return a = this.A[void 0 !== a ? a : this.s], this.g && this.g >= a ? this.j[0] > 80 && (new Date).valueOf() > this.M ? 3 : 1 : this.f >= a ? 2 : 0
        },
        getProgress: function (a) {
            return a = this.A[a ? a : this.s], this.g >= a ? 1 : this.f > a ? 1 : this.f / a
        },
        startCollectors: function () {
            if (!this.l) {
                if (window.addEventListener) window.addEventListener("load", this.n, !1), window.addEventListener("mousemove", this.o, !1);
                else {
                    if (!document.attachEvent) throw new sjcl.exception.bug("can't attach event");
                    document.attachEvent("onload", this.n), document.attachEvent("onmousemove", this.o)
                }
                this.l = !0
            }
        },
        stopCollectors: function () {
            this.l && (window.removeEventListener ? (window.removeEventListener("load", this.n, !1), window.removeEventListener("mousemove", this.o, !1)) : window.detachEvent && (window.detachEvent("onload", this.n), window.detachEvent("onmousemove", this.o)), this.l = !1)
        },
        addEventListener: function (a, b) {
            this.q[a][this.P++] = b
        },
        removeEventListener: function (a, b) {
            var c, a = this.q[a],
                d = [];
            for (c in a) a.hasOwnProperty(c) && a[c] === b && d.push(c);
            for (b = 0; b < d.length; b++) c = d[b], delete a[c]
        },
        b: [new sjcl.hash.sha256],
        j: [0],
        z: 0,
        p: {},
        t: 0,
        D: {},
        Q: 0,
        g: 0,
        f: 0,
        M: 0,
        a: [0, 0, 0, 0, 0, 0, 0, 0],
        d: [0, 0, 0, 0],
        r: void 0,
        s: 6,
        l: !1,
        q: {
            progress: {},
            seeded: {}
        },
        P: 0,
        A: [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024],
        u: function () {
            for (var a = 0; 4 > a && (this.d[a] = this.d[a] + 1 | 0, !this.d[a]); a++);
            return this.r.encrypt(this.d)
        },
        J: function () {
            this.a = this.u().concat(this.u()), this.r = new sjcl.cipher.aes(this.a)
        },
        S: function (a) {
            for (this.a = sjcl.hash.sha256.hash(this.a.concat(a)), this.r = new sjcl.cipher.aes(this.a), a = 0; 4 > a && (this.d[a] = this.d[a] + 1 | 0, !this.d[a]); a++);
        },
        T: function (a) {
            var b, c = [],
                d = 0;
            for (this.M = c[0] = (new Date).valueOf() + 3e4, b = 0; 16 > b; b++) c.push(4294967296 * Math.random() | 0);
            for (b = 0; b < this.b.length && (c = c.concat(this.b[b].finalize()), d += this.j[b], this.j[b] = 0, a || !(this.z & 1 << b)); b++);
            this.z >= 1 << this.b.length && (this.b.push(new sjcl.hash.sha256), this.j.push(0)), this.f = this.f - d, d > this.g && (this.g = d), this.z++, this.S(c)
        },
        o: function (a) {
            sjcl.random.addEntropy([a.x || a.clientX || a.offsetX || 0, a.y || a.clientY || a.offsetY || 0], 2, "mouse")
        },
        n: function () {
            sjcl.random.addEntropy((new Date).valueOf(), 2, "loadtime")
        },
        I: function (a, b) {
            var c, a = sjcl.random.q[a],
                d = [];
            for (c in a) a.hasOwnProperty(c) && d.push(a[c]);
            for (c = 0; c < d.length; c++) d[c](b)
        }
    };
    try {
        var s = new Uint32Array(32);
        crypto.getRandomValues(s), sjcl.random.addEntropy(s, 1024, "crypto['getRandomValues']")
    } catch (t) {}
    sjcl.json = {
        defaults: {
            v: 1,
            iter: 1e3,
            ks: 128,
            ts: 64,
            mode: "ccm",
            adata: "",
            cipher: "aes"
        },
        encrypt: function (a, b, c, d) {
            var e, c = c || {},
                d = d || {},
                f = sjcl.json,
                g = f.c({
                    iv: sjcl.random.randomWords(4, 0)
                }, f.defaults);
            if (f.c(g, c), c = g.adata, "string" == typeof g.salt && (g.salt = sjcl.codec.base64.toBits(g.salt)), "string" == typeof g.iv && (g.iv = sjcl.codec.base64.toBits(g.iv)), !sjcl.mode[g.mode] || !sjcl.cipher[g.cipher] || "string" == typeof a && g.iter <= 100 || 64 !== g.ts && 96 !== g.ts && 128 !== g.ts || 128 !== g.ks && 192 !== g.ks && 256 !== g.ks || g.iv.length < 2 || g.iv.length > 4) throw new sjcl.exception.invalid("json encrypt: invalid parameters");
            return "string" == typeof a && (e = sjcl.misc.cachedPbkdf2(a, g), a = e.key.slice(0, g.ks / 32), g.salt = e.salt), "string" == typeof b && (b = sjcl.codec.utf8String.toBits(b)), "string" == typeof c && (c = sjcl.codec.utf8String.toBits(c)), e = new sjcl.cipher[g.cipher](a), f.c(d, g), d.key = a, g.ct = sjcl.mode[g.mode].encrypt(e, b, g.iv, c, g.ts), f.encode(g)
        },
        decrypt: function (a, b, c, d) {
            var e, c = c || {},
                d = d || {},
                f = sjcl.json,
                b = f.c(f.c(f.c({}, f.defaults), f.decode(b)), c, !0),
                c = b.adata;
            if ("string" == typeof b.salt && (b.salt = sjcl.codec.base64.toBits(b.salt)), "string" == typeof b.iv && (b.iv = sjcl.codec.base64.toBits(b.iv)), !sjcl.mode[b.mode] || !sjcl.cipher[b.cipher] || "string" == typeof a && b.iter <= 100 || 64 !== b.ts && 96 !== b.ts && 128 !== b.ts || 128 !== b.ks && 192 !== b.ks && 256 !== b.ks || !b.iv || b.iv.length < 2 || b.iv.length > 4) throw new sjcl.exception.invalid("json decrypt: invalid parameters");
            return "string" == typeof a && (e = sjcl.misc.cachedPbkdf2(a, b), a = e.key.slice(0, b.ks / 32), b.salt = e.salt), "string" == typeof c && (c = sjcl.codec.utf8String.toBits(c)), e = new sjcl.cipher[b.cipher](a), c = sjcl.mode[b.mode].decrypt(e, b.ct, b.iv, c, b.ts), f.c(d, b), d.key = a, sjcl.codec.utf8String.fromBits(c)
        },
        encode: function (a) {
            var b, c = "{",
                d = "";
            for (b in a)
                if (a.hasOwnProperty(b)) {
                    if (!b.match(/^[a-z0-9]+$/i)) throw new sjcl.exception.invalid("json encode: invalid property name");
                    switch (c += d + '"' + b + '":', d = ",", typeof a[b]) {
                    case "number":
                    case "boolean":
                        c += a[b];
                        break;
                    case "string":
                        c += '"' + escape(a[b]) + '"';
                        break;
                    case "object":
                        c += '"' + sjcl.codec.base64.fromBits(a[b], 0) + '"';
                        break;
                    default:
                        throw new sjcl.exception.bug("json encode: unsupported type")
                    }
                }
            return c + "}"
        },
        decode: function (a) {
            if (a = a.replace(/\s/g, ""), !a.match(/^\{.*\}$/)) throw new sjcl.exception.invalid("json decode: this isn't json!");
            var b, c, a = a.replace(/^\{|\}$/g, "").split(/,/),
                d = {};
            for (b = 0; b < a.length; b++) {
                if (!(c = a[b].match(/^(?:(["']?)([a-z][a-z0-9]*)\1):(?:(\d+)|"([a-z0-9+\/%*_.@=\-]*)")$/i))) throw new sjcl.exception.invalid("json decode: this isn't json!");
                d[c[2]] = c[3] ? parseInt(c[3], 10) : c[2].match(/^(ct|salt|iv)$/) ? sjcl.codec.base64.toBits(c[4]) : unescape(c[4])
            }
            return d
        },
        c: function (a, b, c) {
            if (void 0 === a && (a = {}), void 0 === b) return a;
            for (var d in b)
                if (b.hasOwnProperty(d)) {
                    if (c && void 0 !== a[d] && a[d] !== b[d]) throw new sjcl.exception.invalid("required parameter overridden");
                    a[d] = b[d]
                }
            return a
        },
        V: function (a, b) {
            var c, d = {};
            for (c in a) a.hasOwnProperty(c) && a[c] !== b[c] && (d[c] = a[c]);
            return d
        },
        U: function (a, b) {
            var c, d = {};
            for (c = 0; c < b.length; c++) void 0 !== a[b[c]] && (d[b[c]] = a[b[c]]);
            return d
        }
    }, sjcl.encrypt = sjcl.json.encrypt, sjcl.decrypt = sjcl.json.decrypt, sjcl.misc.R = {}, sjcl.misc.cachedPbkdf2 = function (a, b) {
        var c, d = sjcl.misc.R,
            b = b || {};
        return c = b.iter || 1e3, d = d[a] = d[a] || {}, c = d[c] = d[c] || {
            firstSalt: b.salt && b.salt.length ? b.salt.slice(0) : sjcl.random.randomWords(2, 0)
        }, d = void 0 === b.salt ? c.firstSalt : b.salt, c[d] = c[d] || sjcl.misc.pbkdf2(a, d, b.iter), {
            key: c[d].slice(0),
            salt: d.slice(0)
        }
    };
    var FirebaseSimpleLogin = function (a, b, c) {
        var d = a.toString(),
            e = null;
        if (fb.util.validation.validateArgCount("new FirebaseSimpleLogin", 1, 3, arguments.length), fb.util.validation.validateCallback("new FirebaseSimpleLogin", 2, b, !1), "string" == typeof a) throw Error("new FirebaseSimpleLogin(): Oops, it looks like you passed a string instead of a Firebase reference (i.e. new Firebase(<firebaseURL>)).");
        if (goog.isString(d)) {
            var f = d.indexOf("//");
            f >= 0 && (d = d.substring(f + 2)), f = d.indexOf("."), f >= 0 && (e = d.substring(0, f))
        }
        if (!goog.isString(e)) throw Error("new FirebaseSimpleLogin(): First argument must be a valid Firebase reference (i.e. new Firebase(<firebaseURL>)).");
        "file:" === window.location.protocol && !this.isMobilePhoneGap() && !this.isMobileTriggerIo() && console && console.log && console.log("FirebaseSimpleLogin(): Due to browser security restrictions, loading applications via `file://*` URLs will prevent popup-based authentication providers from working properly. When testing locally, you'll need to run a barebones webserver on your machine rather than loading your test files via `file://*`. The easiest way to run a barebones server on your local machine is to `cd` to the root directory of your code and run `python -m SimpleHTTPServer`, which will allow you to access your content via `http://127.0.0.1:8000/*`."), this.mRef = a, this.mNamespace = e, this.mApiHost = "https://auth.firebase.com", this.sessionLengthDays = null, this.mLoginStateChange = function () {
            var d = Array.prototype.slice.apply(arguments),
                e = {
                    anonymous: ["uid", "firebaseAuthToken", "id", "provider"],
                    password: "uid email firebaseAuthToken id md5_hash provider".split(" "),
                    facebook: "uid accessToken displayName firebaseAuthToken id provider".split(" "),
                    github: "uid accessToken displayName firebaseAuthToken id provider username".split(" "),
                    persona: "uid email firebaseAuthToken id md5_hash provider".split(" "),
                    twitter: "uid accessToken accessTokenSecret displayName firebaseAuthToken id provider username".split(" ")
                };
            if ("function" == typeof window.Proxy && 2 === window.Proxy.length && d[1] && d[1].provider) {
                var f = d[1].provider;
                Firebase && Firebase.INTERNAL && Firebase.INTERNAL.statsIncrementCounter && (d[1] = new Proxy(d[1], {
                    get: function (b, c) {
                        return 0 > e[f].indexOf(c) && Firebase.INTERNAL.statsIncrementCounter(a, "simple_login_undocumented_attribute_use." + c), b[c]
                    }
                }))
            }
            setTimeout(function () {
                b.apply(c, d)
            }, 0)
        }, this.resumeSession()
    };
    goog.exportSymbol("FirebaseSimpleLogin", FirebaseSimpleLogin), FirebaseSimpleLogin.onOpen = function (a) {
        fb.simplelogin.winchan.onOpen(a)
    }, goog.exportProperty(FirebaseSimpleLogin, "onOpen", FirebaseSimpleLogin.onOpen), FirebaseSimpleLogin.prototype.hasLocalStorage = function () {
        try {
            localStorage.setItem("firebase-sentinel", "test");
            var a = localStorage.getItem("firebase-sentinel");
            return localStorage.removeItem("firebase-sentinel"), "test" === a
        } catch (b) {}
        return !1
    }, FirebaseSimpleLogin.prototype.resumeSession = function () {
        var a = {};
        if (this.hasLocalStorage()) {
            var b = this.readCookie("firebaseSessionKey"),
                c = localStorage.getItem("firebaseSession");
            if (b && c) try {
                a = fb.util.json.eval(sjcl.decrypt(b, fb.util.json.eval(c)))
            } catch (d) {}
        }
        a && a.token && a.user ? this.attemptAuth(a.token, a.user, !1) : this.mLoginStateChange(null, null)
    }, FirebaseSimpleLogin.prototype.saveSession = function (a, b) {
        if (this.hasLocalStorage()) {
            var c = b.sessionKey,
                d = sjcl.encrypt(c, fb.util.json.stringify({
                    token: a,
                    user: b
                }));
            this.writeCookie("firebaseSessionKey", c, this.sessionLengthDays), localStorage.setItem("firebaseSession", fb.util.json.stringify(d))
        }
    }, FirebaseSimpleLogin.prototype.clearSession = function () {
        this.hasLocalStorage() && (this.writeCookie("firebaseSessionKey", "", -1), localStorage.removeItem("firebaseSession"))
    }, FirebaseSimpleLogin.prototype.writeCookie = function (a, b, c) {
        var d = "";
        c && (d = new Date, d.setTime(d.getTime() + 864e5 * c), d = "; expires=" + d.toGMTString()), document.cookie = a + "=" + b + d + "; path=/"
    }, FirebaseSimpleLogin.prototype.readCookie = function (a) {
        for (var a = a + "=", b = document.cookie.split(";"), c = 0; c < b.length; c++) {
            for (var d = b[c];
                " " == d.charAt(0);) d = d.substring(1, d.length);
            if (0 == d.indexOf(a)) return d.substring(a.length, d.length)
        }
        return null
    }, FirebaseSimpleLogin.prototype.attemptAuth = function (a, b, c) {
        var d = this;
        this.mRef.auth(a, function (e, f) {
            e ? (d.clearSession(), d.mLoginStateChange(null, null)) : (c && d.saveSession(a, b), "function" == typeof f && f(), delete b.sessionKey, b.firebaseAuthToken = a, d.mLoginStateChange(null, b))
        }, function () {
            d.clearSession(), d.mLoginStateChange(null, null)
        })
    }, FirebaseSimpleLogin.prototype.login = function (a) {
        fb.util.validation.validateString(d, 1, a, !1);
        var b = this,
            c = {},
            a = a.toLowerCase(),
            d = "FirebaseSimpleLogin.login(" + a + ")";
        if ("password" === a) {
            if (c = arguments[1] || {}, !fb.simplelogin.validation.isValidEmail(c.email)) return this.mLoginStateChange(this.formatError({
                code: "INVALID_EMAIL",
                message: "Invalid email specified."
            }));
            if (!fb.simplelogin.validation.isValidPassword(c.password)) return this.mLoginStateChange(this.formatError({
                code: "INVALID_PASSWORD",
                message: "Invalid password specified."
            }))
        } else("facebook" === a || "github" === a || "persona" === a || "twitter" === a || "anonymous" === a) && (fb.util.validation.validateArgCount(d, 1, 2, arguments.length), c = arguments[1] || {});
        var e = this.mLoginStateChange;
        switch (this.sessionLengthDays = c.rememberMe ? 30 : null, a) {
        case "password":
            this.jsonp("/auth/firebase", {
                email: c.email,
                password: c.password
            }, function (a, c) {
                a || !c.token ? e(b.formatError(a)) : b.attemptAuth(c.token, c.user, !0)
            });
            break;
        case "github":
            c.height = 850, c.width = 950;
        case "facebook":
        case "twitter":
            d = "twitter" === a && c.user_id && c.oauth_token && c.oauth_token_secret, "facebook" === a && c.access_token || d ? this.jsonp("/auth/" + a + "/token", c, function (a, c) {
                a || !c.token ? e(b.formatError(a)) : b.attemptAuth(c.token, c.user, !0)
            }) : this.launchAuthWindow(a, c, function (a, c, d) {
                a ? b.mLoginStateChange(b.formatError(a), null) : b.attemptAuth(c, d, !0)
            });
            break;
        case "persona":
            if (!navigator.id) throw Error(d + ": Unable to find Persona include.js");
            fb.simplelogin.persona.login(function (a) {
                null === a ? e(b.formatError({
                    code: "UNKNOWN_ERROR",
                    message: "User denied authentication request or an error occurred."
                })) : b.jsonp("/auth/persona/token", {
                    assertion: a
                }, function (a, c) {
                    a || !c.token ? e(b.formatError(a), null) : b.attemptAuth(c.token, c.user, !0)
                })
            });
            break;
        case "anonymous":
            b.jsonp("/auth/anonymous", {}, function (a, c) {
                a || !c.token ? e(b.formatError(a), null) : b.attemptAuth(c.token, c.user, !0)
            });
            break;
        default:
            throw Error("FirebaseSimpleLogin.login() failed: unrecognized authentication provider")
        }
    }, goog.exportProperty(FirebaseSimpleLogin.prototype, "login", FirebaseSimpleLogin.prototype.login), FirebaseSimpleLogin.prototype.logout = function () {
        fb.util.validation.validateArgCount("FirebaseSimpleLogin.logout", 0, 0, arguments.length), this.clearSession(), this.mRef.unauth(), this.mLoginStateChange(null, null)
    }, goog.exportProperty(FirebaseSimpleLogin.prototype, "logout", FirebaseSimpleLogin.prototype.logout), FirebaseSimpleLogin.prototype.parseURL = function (a) {
        var b = document.createElement("a");
        b.href = a;
        for (var c, a = b.protocol.replace(":", ""), d = b.hostname, e = b.port, f = b.search, g = {}, h = b.search.replace(/^\?/, "").split("&"), i = h.length, j = 0; i > j; j++) h[j] && (c = h[j].split("="), g[c[0]] = c[1]);
        return {
            protocol: a,
            host: d,
            port: e,
            query: f,
            params: g,
            hash: b.hash.replace("#", ""),
            path: b.pathname.replace(/^([^\/])/, "/$1")
        }
    }, FirebaseSimpleLogin.prototype.isMobilePhoneGap = function () {
        return (window.cordova || window.PhoneGap || window.phonegap) && /^file:\/{3}[^\/]/i.test(window.location.href) && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent)
    }, FirebaseSimpleLogin.prototype.isMobileTriggerIo = function () {
        return window.forge && /^file:\/{3}[^\/]/i.test(window.location.href) && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent)
    }, FirebaseSimpleLogin.prototype.launchAuthWindow = function (a, b, c) {
        var d = this,
            a = this.mApiHost + "/auth/" + a + "?firebase=" + this.mNamespace;
        b.scope && (a += "&scope=" + b.scope), b.debug && (a += "&debug=" + b.debug);
        var e = {
            menubar: 0,
            location: 0,
            resizable: 0,
            scrollbars: 1,
            status: 0,
            dialog: 1,
            width: 700,
            height: 375
        };
        if (b.height && (e.height = b.height, delete b.height), b.width && (e.width = b.width, delete b.width), this.isMobilePhoneGap()) {
            var f = window.open(a + "&internalRedirect=true&transport=internalRedirect", "blank", "location=no"),
                g = !1;
            f.addEventListener("loadstop", function (a) {
                try {
                    var b = d.parseURL(a.url);
                    if ("/auth/_blank" === b.path) {
                        f.close();
                        var e, h = b.params,
                            a = {};
                        for (e in h) try {
                            a[e] = fb.util.json.eval(decodeURIComponent(h[e]))
                        } catch (i) {}
                        if (!g) return g = !0, a && a.error ? c(a.error) : a && a.token && a.user ? c(null, a.token, a.user) : c({
                            code: "UNKNOWN_ERROR",
                            message: "An unknown error occurred."
                        })
                    }
                } catch (j) {
                    if (f.close(), !g) return g = !0, c({
                        code: "UNKNOWN_ERROR",
                        message: "An unknown error occurred."
                    })
                }
            }), f.addEventListener("exit", function () {
                return g ? void 0 : (g = !0, c({
                    code: "UNKNOWN_ERROR",
                    message: "An unknown error occurred."
                }))
            }), setTimeout(function () {
                f && f.close && f.close()
            }, 4e4)
        } else if (this.isMobileTriggerIo()) {
            if (!window.forge || !window.forge.tabs) return c({
                code: "TRIGGER_IO_ERROR",
                message: '"forge.tabs" module required when using Firebase Simple Login and Trigger.io'
            });
            forge.tabs.openWithOptions({
                url: a + "&internalRedirect=true&transport=internalRedirect",
                pattern: this.mApiHost + "/auth/_blank*"
            }, function (a) {
                var b = null;
                if (a && a.url) try {
                    var e, f = d.parseURL(a.url).params,
                        b = {};
                    for (e in f) b[e] = fb.util.json.eval(decodeURIComponent(f[e]))
                } catch (g) {} else if (a && a.userCancelled) return c({
                    code: "USER_DENIED",
                    message: "User cancelled the authentication request."
                });
                return b && b.token && b.user ? c(null, b.token, b.user) : c(b && b.error ? b.error : {
                    code: "UNKNOWN_ERROR",
                    message: "An unknown error occurred."
                })
            }, function () {
                c({
                    code: "UNKNOWN_ERROR",
                    message: "An unknown error occurred."
                })
            })
        } else {
            var h, b = [];
            for (h in e) b.push(h + "=" + e[h]);
            fb.simplelogin.winchan.open({
                url: a + "&transport=winchan",
                relay_url: this.mApiHost + "/auth/channel",
                window_features: b.join(",")
            }, function (a, b) {
                b && b.token && b.user ? c(null, b.token, b.user) : c("unknown closed window" === a ? {
                    code: "USER_DENIED",
                    message: "User cancelled the authentication request."
                } : b.error ? b.error : {
                    code: "UNKNOWN_ERROR",
                    message: "An unknown error occurred."
                })
            })
        }
    }, FirebaseSimpleLogin.prototype.createUser = function (a, b, c) {
        var d = this;
        return fb.util.validation.validateArgCount("FirebaseSimpleLogin.createUser", 3, 3, arguments.length), fb.util.validation.validateCallback("FirebaseSimpleLogin.createUser", 3, c, !1), fb.simplelogin.validation.isValidEmail(a) ? fb.simplelogin.validation.isValidPassword(b) ? void this.jsonp("/auth/firebase/create", {
            email: a,
            password: b
        }, function (a, b) {
            a ? c(d.formatError(a), null) : c(null, b)
        }) : c(this.formatError({
            code: "INVALID_PASSWORD",
            message: "Invalid password specified. "
        })) : c(this.formatError({
            code: "INVALID_EMAIL",
            message: "Invalid email specified."
        }))
    }, goog.exportProperty(FirebaseSimpleLogin.prototype, "createUser", FirebaseSimpleLogin.prototype.createUser), FirebaseSimpleLogin.prototype.changePassword = function (a, b, c, d) {
        var e = this;
        return fb.util.validation.validateArgCount("FirebaseSimpleLogin.changePassword", 4, 4, arguments.length), fb.util.validation.validateCallback("FirebaseSimpleLogin.changePassword", 4, d, !1), fb.simplelogin.validation.isValidEmail(a) ? fb.simplelogin.validation.isValidPassword(b) && fb.simplelogin.validation.isValidPassword(c) ? void this.jsonp("/auth/firebase/update", {
            email: a,
            oldPassword: b,
            newPassword: c
        }, function (a) {
            a ? d(e.formatError(a), !1) : d(null, !0)
        }) : d(this.formatError({
            code: "INVALID_PASSWORD",
            message: "Invalid password specified. "
        })) : d(this.formatError({
            code: "INVALID_EMAIL",
            message: "Invalid email specified."
        }))
    }, goog.exportProperty(FirebaseSimpleLogin.prototype, "changePassword", FirebaseSimpleLogin.prototype.changePassword), FirebaseSimpleLogin.prototype.removeUser = function (a, b, c) {
        var d = this;
        return fb.util.validation.validateArgCount("FirebaseSimpleLogin.removeUser", 3, 3, arguments.length), fb.util.validation.validateCallback("FirebaseSimpleLogin.removeUser", 3, c, !1), fb.simplelogin.validation.isValidEmail(a) ? fb.simplelogin.validation.isValidPassword(b) ? void this.jsonp("/auth/firebase/remove", {
            email: a,
            password: b
        }, function (a) {
            a ? c(d.formatError(a), !1) : c(null, !0)
        }) : c(this.formatError({
            code: "INVALID_PASSWORD",
            message: "Invalid password specified. "
        })) : c(this.formatError({
            code: "INVALID_EMAIL",
            message: "Invalid email specified."
        }))
    }, goog.exportProperty(FirebaseSimpleLogin.prototype, "removeUser", FirebaseSimpleLogin.prototype.removeUser), FirebaseSimpleLogin._callbacks = {}, FirebaseSimpleLogin.prototype.jsonp = function (a, b, c) {
        var d, e = this,
            f = this.mApiHost + a,
            f = f + (/\?/.test(f) ? "" : "?"),
            f = f + ("&firebase=" + this.mNamespace),
            f = f + "&transport=jsonp";
        for (d in b) f += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(b[d]);
        var g = "_firebaseXDR" + (new Date).getTime().toString() + Math.floor(100 * Math.random()),
            f = f + ("&callback=" + encodeURIComponent("FirebaseSimpleLogin._callbacks." + g));
        FirebaseSimpleLogin._callbacks[g] = function (a) {
            var b = a.error || null;
            delete a.error, c(b, a), setTimeout(function () {
                delete FirebaseSimpleLogin._callbacks[g];
                var a = document.getElementById(g);
                null !== a && a.parentNode.removeChild(a)
            })
        }, setTimeout(function () {
            try {
                var a = document.createElement("script");
                a.type = "text/javascript", a.id = g, a.async = !0, a.src = f, a.onerror = function () {
                    var a = document.getElementById(g);
                    null !== a && a.parentNode.removeChild(a), c(e.formatError({
                        code: "SERVER_ERROR",
                        message: "An unknown server error occurred."
                    }))
                };
                var b = document.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            } catch (d) {
                c(e.formatError({
                    code: "SERVER_ERROR",
                    message: "An unknown server error occurred."
                }))
            }
        }, 1)
    }, FirebaseSimpleLogin.prototype.formatError = function (a) {
        var b = Error(a.message || "");
        return b.code = a.code || "UNKNOWN_ERROR", b
    };
    var FirebaseAuthClient = function (a, b, c) {
        return Firebase && Firebase.INTERNAL && Firebase.INTERNAL.statsIncrementCounter && Firebase.INTERNAL.statsIncrementCounter(a, "simple_login_deprecated_constructor"), "undefined" != typeof console && ("undefined" != typeof console.warn ? console.warn("FirebaseAuthClient class being deprecated. Please use https://cdn.firebase.com/v0/firebase-simple-login.js and reference FirebaseSimpleLogin instead.") : console.log("FirebaseAuthClient class being deprecated. Please use https://cdn.firebase.com/v0/firebase-simple-login.js and reference FirebaseSimpleLogin instead.")), new FirebaseSimpleLogin(a, b, c)
    };
    goog.exportSymbol("FirebaseAuthClient", FirebaseAuthClient), FirebaseAuthClient.onOpen = FirebaseSimpleLogin.onOpen, goog.exportProperty(FirebaseAuthClient, "onOpen", FirebaseAuthClient.onOpen)
}(),
function () {
    var a, b;
    angular.module("firebase", []).value("Firebase", Firebase), angular.module("firebase").factory("$firebase", ["$q", "$parse", "$timeout",
        function (b, c, d) {
            return function (e) {
                var f = new a(b, c, d, e);
                return f.construct()
            }
        }
    ]), angular.module("firebase").filter("orderByPriority", function () {
        return function (a) {
            if (!a) return [];
            if (!a.$getIndex || "function" != typeof a.$getIndex) {
                var b = Object.prototype.toString.call(a);
                if ("object" == typeof a && "[object Object]" == b) {
                    var c = [];
                    for (var d in a) a.hasOwnProperty(d) && c.push(a[d]);
                    return c
                }
                return a
            }
            var e = [],
                f = a.$getIndex();
            if (f.length <= 0) return a;
            for (var g = 0; g < f.length; g++) {
                var h = a[f[g]];
                h && (h.$id = f[g], e.push(h))
            }
            return e
        }
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
        if (void 0 === this || null === this) throw new TypeError("'this' is null or not defined");
        var c = this.length >>> 0;
        for (b = +b || 0, 1 / 0 === Math.abs(b) && (b = 0), 0 > b && (b += c, 0 > b && (b = 0)); c > b; b++)
            if (this[b] === a) return b;
        return -1
    }), a = function (a, b, c, d) {
        if (this._q = a, this._bound = !1, this._loaded = !1, this._parse = b, this._timeout = c, this._index = [], this._on = {
            change: [],
            loaded: [],
            child_added: [],
            child_moved: [],
            child_changed: [],
            child_removed: []
        }, "string" == typeof d) throw new Error("Please provide a Firebase reference instead of a URL, eg: new Firebase(url)");
        this._fRef = d
    }, a.prototype = {
        construct: function () {
            var b = this,
                c = {};
            return c.$bind = function (a, c) {
                return b._bind(a, c)
            }, c.$add = function (a) {
                function c(a) {
                    a ? e.reject(a) : e.resolve(d)
                }
                var d, e = b._q.defer();
                return d = "object" == typeof a ? b._fRef.ref().push(b._parseObject(a), c) : b._fRef.ref().push(a, c), e.promise
            }, c.$save = function (a) {
                function c(a) {
                    a ? d.reject(a) : d.resolve()
                }
                var d = b._q.defer();
                if (a) {
                    var e = b._parseObject(b._object[a]);
                    b._fRef.ref().child(a).set(e, c)
                } else b._fRef.ref().set(b._parseObject(b._object), c);
                return d.promise
            }, c.$set = function (a) {
                var c = b._q.defer();
                return b._fRef.ref().set(a, function (a) {
                    a ? c.reject(a) : c.resolve()
                }), c.promise
            }, c.$transaction = function (a, c) {
                var d = b._q.defer();
                b._fRef.ref().transaction(a, function (a, b, c) {
                    a ? d.reject(a) : d.resolve(b ? c : null)
                }, c)
            }, c.$remove = function (a) {
                function c(a) {
                    a ? d.reject(a) : d.resolve()
                }
                var d = b._q.defer();
                return a ? b._fRef.ref().child(a).remove(c) : b._fRef.ref().remove(c), d.promise
            }, c.$child = function (c) {
                var d = new a(b._q, b._parse, b._timeout, b._fRef.ref().child(c));
                return d.construct()
            }, c.$on = function (a, c) {
                if ("loaded" == a && b._loaded) return void b._timeout(function () {
                    c()
                });
                if (!b._on.hasOwnProperty(a)) throw new Error("Invalid event type " + a + " specified");
                b._on[a].push(c)
            }, c.$off = function (a, c) {
                if (b._on.hasOwnProperty(a))
                    if (c) {
                        var d = b._on[a].indexOf(c); - 1 !== d && b._on[a].splice(d, 1)
                    } else b._on[a] = [];
                else b._fRef.off()
            }, c.$auth = function (a) {
                var c = b._q.defer();
                return b._fRef.auth(a, function (a, b) {
                    null !== a ? c.reject(a) : c.resolve(b)
                }, function (a) {
                    c.reject(a)
                }), c.promise
            }, c.$getIndex = function () {
                return angular.copy(b._index)
            }, b._object = c, b._getInitialValue(), b._object
        },
        _getInitialValue: function () {
            var a = this,
                b = function (c) {
                    var d = c.val();
                    if (null === d && a._bound) {
                        var e = a._parseObject(a._parse(a._name)(a._scope));
                        switch (typeof e) {
                        case "string":
                        case "undefined":
                            d = "";
                            break;
                        case "number":
                            d = 0;
                            break;
                        case "boolean":
                            d = !1
                        }
                    }
                    switch (typeof d) {
                    case "string":
                    case "number":
                    case "boolean":
                        a._updatePrimitive(d);
                        break;
                    case "object":
                        a._getChildValues(), a._fRef.off("value", b);
                        break;
                    default:
                        throw new Error("Unexpected type from remote data " + typeof d)
                    }
                    a._loaded = !0, a._broadcastEvent("loaded", d)
                };
            a._fRef.on("value", b)
        },
        _getChildValues: function () {
            function a(a, b) {
                var c = a.name(),
                    e = a.val(),
                    f = d._index.indexOf(c);
                if (-1 !== f && d._index.splice(f, 1), b) {
                    var g = d._index.indexOf(b);
                    d._index.splice(g + 1, 0, c)
                } else d._index.unshift(c);
                null !== a.getPriority() && (e.$priority = a.getPriority()), d._updateModel(c, e)
            }

            function b(a, b) {
                return function (c, e) {
                    b(c, e), d._broadcastEvent(a, {
                        snapshot: {
                            name: c.name(),
                            value: c.val()
                        },
                        prevChild: e
                    })
                }
            }

            function c(a, c) {
                d._fRef.on(a, b(a, c))
            }
            var d = this;
            c("child_added", a), c("child_moved", a), c("child_changed", a), c("child_removed", function (a) {
                var b = a.name(),
                    c = d._index.indexOf(b);
                d._index.splice(c, 1), d._updateModel(b, null)
            })
        },
        _updateModel: function (a, b) {
            var c = this;
            c._timeout(function () {
                if (null == b ? delete c._object[a] : c._object[a] = b, c._broadcastEvent("change", a), c._bound) {
                    var d = c._object,
                        e = c._parse(c._name)(c._scope);
                    angular.equals(d, e) || c._parse(c._name).assign(c._scope, angular.copy(d))
                }
            })
        },
        _updatePrimitive: function (a) {
            var b = this;
            b._timeout(function () {
                if (b._object.$value && angular.equals(b._object.$value, a) || (b._object.$value = a), b._broadcastEvent("change"), b._bound) {
                    var c = b._parseObject(b._parse(b._name)(b._scope));
                    angular.equals(c, a) || b._parse(b._name).assign(b._scope, a)
                }
            })
        },
        _broadcastEvent: function (a, b) {
            function c(a, b) {
                e._timeout(function () {
                    a(b)
                })
            }
            var d = this._on[a] || [],
                e = this;
            if (d.length > 0)
                for (var f = 0; f < d.length; f++) "function" == typeof d[f] && c(d[f], b)
        },
        _bind: function (a, b) {
            var c = this,
                d = c._q.defer();
            c._name = b, c._bound = !0, c._scope = a;
            var e = c._parse(b)(a);
            void 0 !== e && "object" == typeof e && c._fRef.update(c._parseObject(e));
            var f = a.$watch(b, function () {
                var d = c._parseObject(c._parse(b)(a));
                c._object.$value && angular.equals(d, c._object.$value) || angular.equals(d, c._object) || void 0 !== d && c._loaded && (c._fRef.set ? c._fRef.set(d) : c._fRef.ref().update(d))
            }, !0);
            return a.$on("$destroy", function () {
                f()
            }), c._fRef.once("value", function (a) {
                c._timeout(function () {
                    "object" != typeof a.val() ? d.resolve(f) : c._timeout(function () {
                        d.resolve(f)
                    })
                })
            }), d.promise
        },
        _parseObject: function (a) {
            function b(a) {
                for (var c in a) a.hasOwnProperty(c) && ("$priority" == c ? (a[".priority"] = a.$priority, delete a.$priority) : "object" == typeof a[c] && b(a[c]));
                return a
            }
            var c = b(angular.copy(a));
            return angular.fromJson(angular.toJson(c))
        }
    }, angular.module("firebase").factory("$firebaseSimpleLogin", ["$q", "$timeout", "$rootScope",
        function (a, c, d) {
            return function (e) {
                var f = new b(a, c, d, e);
                return f.construct()
            }
        }
    ]), b = function (a, b, c, d) {
        if (this._q = a, this._timeout = b, this._rootScope = c, this._loginDeferred = null, this._getCurrentUserDeferred = [], this._currentUserData = void 0, "string" == typeof d) throw new Error("Please provide a Firebase reference instead of a URL, eg: new Firebase(url)");
        this._fRef = d
    }, b.prototype = {
        construct: function () {
            var a = {
                user: null,
                $login: this.login.bind(this),
                $logout: this.logout.bind(this),
                $createUser: this.createUser.bind(this),
                $changePassword: this.changePassword.bind(this),
                $removeUser: this.removeUser.bind(this),
                $getCurrentUser: this.getCurrentUser.bind(this)
            };
            if (this._object = a, !window.FirebaseSimpleLogin) {
                var b = new Error("FirebaseSimpleLogin is undefined. Did you forget to include firebase-simple-login.js?");
                throw this._rootScope.$broadcast("$firebaseSimpleLogin:error", b), b
            }
            var c = new FirebaseSimpleLogin(this._fRef, this._onLoginEvent.bind(this));
            return this._authClient = c, this._object
        },
        login: function (a, b) {
            var c = this._q.defer(),
                d = this;
            return this.getCurrentUser().then(function () {
                d._loginDeferred = c, d._authClient.login(a, b)
            }), c.promise
        },
        logout: function () {
            this._authClient.logout(), delete this._currentUserData
        },
        createUser: function (a, b, c) {
            var d = this,
                e = this._q.defer();
            return d._authClient.createUser(a, b, function (f, g) {
                f ? (d._rootScope.$broadcast("$firebaseSimpleLogin:error", f), e.reject(f)) : e.resolve(c ? g : d.login("password", {
                    email: a,
                    password: b
                }))
            }), e.promise
        },
        changePassword: function (a, b, c) {
            var d = this,
                e = this._q.defer();
            return d._authClient.changePassword(a, b, c, function (a) {
                a ? (d._rootScope.$broadcast("$firebaseSimpleLogin:error", a), e.reject(a)) : e.resolve()
            }), e.promise
        },
        getCurrentUser: function () {
            var a = this,
                b = this._q.defer();
            return void 0 !== a._currentUserData ? b.resolve(a._currentUserData) : a._getCurrentUserDeferred.push(b), b.promise
        },
        removeUser: function (a, b) {
            var c = this,
                d = this._q.defer();
            return c._authClient.removeUser(a, b, function (a) {
                a ? (c._rootScope.$broadcast("$firebaseSimpleLogin:error", a), d.reject(a)) : d.resolve()
            }), d.promise
        },
        _onLoginEvent: function (a, b) {
            if (this._currentUserData !== b || null !== a) {
                var c = this;
                a ? (c._loginDeferred && (c._loginDeferred.reject(a), c._loginDeferred = null), c._rootScope.$broadcast("$firebaseSimpleLogin:error", a)) : (this._currentUserData = b, c._timeout(function () {
                    for (c._object.user = b, b ? c._rootScope.$broadcast("$firebaseSimpleLogin:login", b) : c._rootScope.$broadcast("$firebaseSimpleLogin:logout"), c._loginDeferred && (c._loginDeferred.resolve(b), c._loginDeferred = null); c._getCurrentUserDeferred.length > 0;) {
                        var a = c._getCurrentUserDeferred.pop();
                        a.resolve(b)
                    }
                }))
            }
        }
    }
}(),
function () {
    var a = angular.module("angularFileUpload", []);
    a.service("$upload", ["$http", "$timeout",
        function (a, b) {
            function c(c) {
                c.method = c.method || "POST", c.headers = c.headers || {}, c.transformRequest = c.transformRequest || function (b, c) {
                    return window.ArrayBuffer && b instanceof window.ArrayBuffer ? b : a.defaults.transformRequest[0](b, c)
                }, window.XMLHttpRequest.__isShim && (c.headers.__setXHR_ = function () {
                    return function (a) {
                        a && (c.__XHR = a, c.xhrFn && c.xhrFn(a), a.upload.addEventListener("progress", function (a) {
                            c.progress && b(function () {
                                c.progress && c.progress(a)
                            })
                        }, !1), a.upload.addEventListener("load", function (a) {
                            a.lengthComputable && c.progress && c.progress(a)
                        }, !1))
                    }
                });
                var d = a(c);
                return d.progress = function (a) {
                    return c.progress = a, d
                }, d.abort = function () {
                    return c.__XHR && b(function () {
                        c.__XHR.abort()
                    }), d
                }, d.xhr = function (a) {
                    return c.xhrFn = a, d
                }, d.then = function (a, b) {
                    return function (d, e, f) {
                        c.progress = f || c.progress;
                        var g = b.apply(a, [d, e, f]);
                        return g.abort = a.abort, g.progress = a.progress, g.xhr = a.xhr, g.then = a.then, g
                    }
                }(d, d.then), d
            }
            this.upload = function (b) {
                b.headers = b.headers || {}, b.headers["Content-Type"] = void 0, b.transformRequest = b.transformRequest || a.defaults.transformRequest;
                var d = new FormData,
                    e = b.transformRequest,
                    f = b.data;
                return b.transformRequest = function (a, c) {
                    if (f)
                        if (b.formDataAppender)
                            for (var d in f) {
                                var g = f[d];
                                b.formDataAppender(a, d, g)
                            } else
                                for (var d in f) {
                                    var g = f[d];
                                    if ("function" == typeof e) g = e(g, c);
                                    else
                                        for (var h = 0; h < e.length; h++) {
                                            var i = e[h];
                                            "function" == typeof i && (g = i(g, c))
                                        }
                                    a.append(d, g)
                                }
                        if (null != b.file) {
                            var j = b.fileFormDataName || "file";
                            if ("[object Array]" === Object.prototype.toString.call(b.file))
                                for (var k = "[object String]" === Object.prototype.toString.call(j), h = 0; h < b.file.length; h++) a.append(k ? j + h : j[h], b.file[h], b.file[h].name);
                            else a.append(j, b.file, b.file.name)
                        }
                    return a
                }, b.data = d, c(b)
            }, this.http = function (a) {
                return c(a)
            }
        }
    ]), a.directive("ngFileSelect", ["$parse", "$timeout",
        function (a, b) {
            return function (c, d, e) {
                var f = a(e.ngFileSelect);
                d.bind("change", function (a) {
                    var d, e, g = [];
                    if (d = a.target.files, null != d)
                        for (e = 0; e < d.length; e++) g.push(d.item(e));
                    b(function () {
                        f(c, {
                            $files: g,
                            $event: a
                        })
                    })
                }), ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && d.bind("touchend", function (a) {
                    a.preventDefault(), a.target.click()
                })
            }
        }
    ]), a.directive("ngFileDropAvailable", ["$parse", "$timeout",
        function (a, b) {
            return function (c, d, e) {
                if ("draggable" in document.createElement("span")) {
                    var f = a(e.ngFileDropAvailable);
                    b(function () {
                        f(c)
                    })
                }
            }
        }
    ]), a.directive("ngFileDrop", ["$parse", "$timeout",
        function (a, b) {
            return function (c, d, e) {
                function f(a, b) {
                    if (b.isDirectory) {
                        var c = b.createReader();
                        i++, c.readEntries(function (b) {
                            for (var c = 0; c < b.length; c++) f(a, b[c]);
                            i--
                        })
                    } else i++, b.file(function (b) {
                        i--, a.push(b)
                    })
                }
                if ("draggable" in document.createElement("span")) {
                    var g = null,
                        h = a(e.ngFileDrop);
                    d[0].addEventListener("dragover", function (a) {
                        b.cancel(g), a.stopPropagation(), a.preventDefault(), d.addClass(e.ngFileDragOverClass || "dragover")
                    }, !1), d[0].addEventListener("dragleave", function () {
                        g = b(function () {
                            d.removeClass(e.ngFileDragOverClass || "dragover")
                        })
                    }, !1);
                    var i = 0;
                    d[0].addEventListener("drop", function (a) {
                        a.stopPropagation(), a.preventDefault(), d.removeClass(e.ngFileDragOverClass || "dragover");
                        var g = [],
                            j = a.dataTransfer.items;
                        if (j && j.length > 0 && j[0].webkitGetAsEntry)
                            for (var k = 0; k < j.length; k++) f(g, j[k].webkitGetAsEntry());
                        else {
                            var l = a.dataTransfer.files;
                            if (null != l)
                                for (var k = 0; k < l.length; k++) g.push(l.item(k))
                        }! function m(d) {
                            b(function () {
                                i ? m(10) : h(c, {
                                    $files: g,
                                    $event: a
                                })
                            }, d || 0)
                        }()
                    }, !1)
                }
            }
        }
    ])
}(),
function () {
    function a(a) {
        if (!a.__listeners) {
            a.upload || (a.upload = {}), a.__listeners = [];
            var b = a.upload.addEventListener;
            a.upload.addEventListener = function (c, d) {
                a.__listeners[c] = d, b && b.apply(this, arguments)
            }
        }
    }
    var b = function () {
            try {
                var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (a) return !0
            } catch (b) {
                if (void 0 != navigator.mimeTypes["application/x-shockwave-flash"]) return !0
            }
            return !1
        },
        c = function (a, b) {
            window.XMLHttpRequest.prototype[a] = b(window.XMLHttpRequest.prototype[a])
        };
    if (window.XMLHttpRequest && (window.FormData ? c("setRequestHeader", function (a) {
        return function (b, c) {
            if ("__setXHR_" === b) {
                var d = c(this);
                d instanceof Function && d(this)
            } else a.apply(this, arguments)
        }
    }) : (c("open", function (b) {
        return function (c, d, e) {
            a(this), this.__url = d, b.apply(this, [c, d, e])
        }
    }), c("getResponseHeader", function (a) {
        return function (b) {
            return this.__fileApiXHR ? this.__fileApiXHR.getResponseHeader(b) : a.apply(this, [b])
        }
    }), c("getAllResponseHeaders", function (a) {
        return function () {
            return this.__fileApiXHR ? this.__fileApiXHR.abort() : null == a ? null : a.apply(this)
        }
    }), c("abort", function (a) {
        return function () {
            return this.__fileApiXHR ? this.__fileApiXHR.abort() : null == a ? null : a.apply(this)
        }
    }), c("setRequestHeader", function (b) {
        return function (c, d) {
            if ("__setXHR_" === c) {
                a(this);
                var e = d(this);
                e instanceof Function && e(this)
            } else this.__requestHeaders = this.__requestHeaders || {}, this.__requestHeaders[c] = d, b.apply(this, arguments)
        }
    }), c("send", function (a) {
        return function () {
            var c = this;
            if (arguments[0] && arguments[0].__isShim) {
                var d = arguments[0],
                    e = {
                        url: c.__url,
                        complete: function (a, b) {
                            !a && c.__listeners.load && c.__listeners.load({
                                type: "load",
                                loaded: c.__loaded,
                                total: c.__total,
                                target: c,
                                lengthComputable: !0
                            }), !a && c.__listeners.loadend && c.__listeners.loadend({
                                type: "loadend",
                                loaded: c.__loaded,
                                total: c.__total,
                                target: c,
                                lengthComputable: !0
                            }), "abort" === a && c.__listeners.abort && c.__listeners.abort({
                                type: "abort",
                                loaded: c.__loaded,
                                total: c.__total,
                                target: c,
                                lengthComputable: !0
                            }), void 0 !== b.status && Object.defineProperty(c, "status", {
                                get: function () {
                                    return b.status
                                }
                            }), void 0 !== b.statusText && Object.defineProperty(c, "statusText", {
                                get: function () {
                                    return b.statusText
                                }
                            }), Object.defineProperty(c, "readyState", {
                                get: function () {
                                    return 4
                                }
                            }), void 0 !== b.response && Object.defineProperty(c, "response", {
                                get: function () {
                                    return b.response
                                }
                            }), Object.defineProperty(c, "responseText", {
                                get: function () {
                                    return b.responseText
                                }
                            }), c.__fileApiXHR = b, c.onreadystatechange()
                        },
                        fileprogress: function (a) {
                            a.target = c, c.__listeners.progress && c.__listeners.progress(a), c.__total = a.total, c.__loaded = a.loaded
                        },
                        headers: c.__requestHeaders
                    };
                e.data = {}, e.files = {};
                for (var f = 0; f < d.data.length; f++) {
                    var g = d.data[f];
                    null != g.val && null != g.val.name && null != g.val.size && null != g.val.type ? e.files[g.key] = g.val : e.data[g.key] = g.val
                }
                setTimeout(function () {
                    if (!b()) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
                    c.__fileApiXHR = FileAPI.upload(e)
                }, 1)
            } else a.apply(c, arguments)
        }
    })), window.XMLHttpRequest.__isShim = !0), !window.FormData) {
        var d = function (a) {
                if (!b()) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
                if (!a.__isWrapped && (null != a.getAttribute("ng-file-select") || null != a.getAttribute("data-ng-file-select"))) {
                    var c = document.createElement("div");
                    c.innerHTML = '<div class="js-fileapi-wrapper" style="position:relative; overflow:hidden"></div>', c = c.firstChild;
                    var d = a.parentNode;
                    d.insertBefore(c, a), d.removeChild(a), c.appendChild(a), a.__isWrapped = !0
                }
            },
            e = function (a) {
                return function (b) {
                    var c = FileAPI.getFiles(b);
                    b.target || (b.target = {}), b.target.files = c, b.target.files.item = function (a) {
                        return b.target.files[a] || null
                    }, a(b)
                }
            },
            f = function (a, b) {
                return ("change" === b.toLowerCase() || "onchange" === b.toLowerCase()) && "file" == a.getAttribute("type")
            };
        HTMLInputElement.prototype.addEventListener && (HTMLInputElement.prototype.addEventListener = function (a) {
                return function (b, c, g, h) {
                    f(this, b) ? (d(this), a.apply(this, [b, e(c), g, h])) : a.apply(this, [b, c, g, h])
                }
            }(HTMLInputElement.prototype.addEventListener)), HTMLInputElement.prototype.attachEvent && (HTMLInputElement.prototype.attachEvent = function (a) {
                return function (b, c) {
                    f(this, b) ? (d(this), a.apply(this, [b, e(c)])) : a.apply(this, [b, c])
                }
            }(HTMLInputElement.prototype.attachEvent)), window.FormData = FormData = function () {
                return {
                    append: function (a, b, c) {
                        this.data.push({
                            key: a,
                            val: b,
                            name: c
                        })
                    },
                    data: [],
                    __isShim: !0
                }
            },
            function () {
                if (window.FileAPI || (window.FileAPI = {}), !FileAPI.upload) {
                    var a, c, d, e, f, g = document.createElement("script"),
                        h = document.getElementsByTagName("script");
                    if (window.FileAPI.jsUrl) a = window.FileAPI.jsUrl;
                    else if (window.FileAPI.jsPath) c = window.FileAPI.jsPath;
                    else
                        for (d = 0; d < h.length; d++)
                            if (f = h[d].src, e = f.indexOf("angular-file-upload-shim.js"), -1 == e && (e = f.indexOf("angular-file-upload-shim.min.js")), e > -1) {
                                c = f.substring(0, e);
                                break
                            }
                    null == FileAPI.staticPath && (FileAPI.staticPath = c), g.setAttribute("src", a || c + "FileAPI.min.js"), document.getElementsByTagName("head")[0].appendChild(g), FileAPI.hasFlash = b()
                }
            }()
    }
    window.FileReader || (window.FileReader = function () {
        function a(a, c) {
            var d = {
                type: a,
                target: b,
                loaded: c.loaded,
                total: c.total,
                error: c.error
            };
            return null != c.result && (d.target.result = c.result), d
        }
        var b = this,
            c = !1;
        this.listeners = {}, this.addEventListener = function (a, c) {
            b.listeners[a] = b.listeners[a] || [], b.listeners[a].push(c)
        }, this.removeEventListener = function (a, c) {
            b.listeners[a] && b.listeners[a].splice(b.listeners[a].indexOf(c), 1)
        }, this.dispatchEvent = function (a) {
            var c = b.listeners[a.type];
            if (c)
                for (var d = 0; d < c.length; d++) c[d].call(b, a)
        }, this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;
        var d = function (d) {
            if (c || (c = !0, b.onloadstart && this.onloadstart(a("loadstart", d))), "load" === d.type) {
                b.onloadend && b.onloadend(a("loadend", d));
                var e = a("load", d);
                b.onload && b.onload(e), b.dispatchEvent(e)
            } else if ("progress" === d.type) {
                var e = a("progress", d);
                b.onprogress && b.onprogress(e), b.dispatchEvent(e)
            } else {
                var e = a("error", d);
                b.onerror && b.onerror(e), b.dispatchEvent(e)
            }
        };
        this.readAsArrayBuffer = function (a) {
            FileAPI.readAsBinaryString(a, d)
        }, this.readAsBinaryString = function (a) {
            FileAPI.readAsBinaryString(a, d)
        }, this.readAsDataURL = function (a) {
            FileAPI.readAsDataURL(a, d)
        }, this.readAsText = function (a) {
            FileAPI.readAsText(a, d)
        }
    })
}(), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope",
    function (a, b, c) {
        function d(a) {
            for (var b in a)
                if (void 0 !== f.style[b]) return a[b]
        }
        var e = function (d, f, g) {
                g = g || {};
                var h = a.defer(),
                    i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"],
                    j = function () {
                        c.$apply(function () {
                            d.unbind(i, j), h.resolve(d)
                        })
                    };
                return i && d.bind(i, j), b(function () {
                    angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
                }), h.promise.cancel = function () {
                    i && d.unbind(i, j), h.reject("Transition cancelled")
                }, h.promise
            },
            f = document.createElement("trans"),
            g = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            },
            h = {
                WebkitTransition: "webkitAnimationEnd",
                MozTransition: "animationend",
                OTransition: "oAnimationEnd",
                transition: "animationend"
            };
        return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
    }
]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition",
    function (a) {
        return {
            link: function (b, c, d) {
                function e(b) {
                    function d() {
                        j === e && (j = void 0)
                    }
                    var e = a(c, b);
                    return j && j.cancel(), j = e, e.then(d, d), e
                }

                function f() {
                    k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({
                        height: c[0].scrollHeight + "px"
                    }).then(g))
                }

                function g() {
                    c.removeClass("collapsing"), c.addClass("collapse in"), c.css({
                        height: "auto"
                    })
                }

                function h() {
                    if (k) k = !1, i(), c.css({
                        height: 0
                    });
                    else {
                        c.css({
                            height: c[0].scrollHeight + "px"
                        }); {
                            c[0].offsetWidth
                        }
                        c.removeClass("collapse in").addClass("collapsing"), e({
                            height: 0
                        }).then(i)
                    }
                }

                function i() {
                    c.removeClass("collapsing"), c.addClass("collapse")
                }
                var j, k = !0;
                b.$watch(d.collapse, function (a) {
                    a ? h() : f()
                })
            }
        }
    }
]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
    closeOthers: !0
}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig",
    function (a, b, c) {
        this.groups = [], this.closeOthers = function (d) {
            var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
            e && angular.forEach(this.groups, function (a) {
                a !== d && (a.isOpen = !1)
            })
        }, this.addGroup = function (a) {
            var b = this;
            this.groups.push(a), a.$on("$destroy", function () {
                b.removeGroup(a)
            })
        }, this.removeGroup = function (a) {
            var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(b, 1)
        }
    }
]).directive("accordion", function () {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    }
}).directive("accordionGroup", function () {
    return {
        require: "^accordion",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/accordion/accordion-group.html",
        scope: {
            heading: "@",
            isOpen: "=?",
            isDisabled: "=?"
        },
        controller: function () {
            this.setHeading = function (a) {
                this.heading = a
            }
        },
        link: function (a, b, c, d) {
            d.addGroup(a), a.$watch("isOpen", function (b) {
                b && d.closeOthers(a)
            }), a.toggleOpen = function () {
                a.isDisabled || (a.isOpen = !a.isOpen)
            }
        }
    }
}).directive("accordionHeading", function () {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        link: function (a, b, c, d, e) {
            d.setHeading(e(a, function () {}))
        }
    }
}).directive("accordionTransclude", function () {
    return {
        require: "^accordionGroup",
        link: function (a, b, c, d) {
            a.$watch(function () {
                return d[c.accordionTransclude]
            }, function (a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs",
    function (a, b) {
        a.closeable = "close" in b
    }
]).directive("alert", function () {
    return {
        restrict: "EA",
        controller: "AlertController",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@",
            close: "&"
        }
    }
}), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function () {
    return function (a, b, c) {
        b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function (a) {
            b.html(a || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("ButtonsController", ["buttonConfig",
    function (a) {
        this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
    }
]).directive("btnRadio", function () {
    return {
        require: ["btnRadio", "ngModel"],
        controller: "ButtonsController",
        link: function (a, b, c, d) {
            var e = d[0],
                f = d[1];
            f.$render = function () {
                b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
            }, b.bind(e.toggleEvent, function () {
                var d = b.hasClass(e.activeClass);
                (!d || angular.isDefined(c.uncheckable)) && a.$apply(function () {
                    f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
                })
            })
        }
    }
}).directive("btnCheckbox", function () {
    return {
        require: ["btnCheckbox", "ngModel"],
        controller: "ButtonsController",
        link: function (a, b, c, d) {
            function e() {
                return g(c.btnCheckboxTrue, !0)
            }

            function f() {
                return g(c.btnCheckboxFalse, !1)
            }

            function g(b, c) {
                var d = a.$eval(b);
                return angular.isDefined(d) ? d : c
            }
            var h = d[0],
                i = d[1];
            i.$render = function () {
                b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
            }, b.bind(h.toggleEvent, function () {
                a.$apply(function () {
                    i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
                })
            })
        }
    }
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$transition",
    function (a, b, c) {
        function d() {
            e();
            var c = +a.interval;
            !isNaN(c) && c >= 0 && (g = b(f, c))
        }

        function e() {
            g && (b.cancel(g), g = null)
        }

        function f() {
            h ? (a.next(), d()) : a.pause()
        }
        var g, h, i = this,
            j = i.slides = a.slides = [],
            k = -1;
        i.currentSlide = null;
        var l = !1;
        i.select = a.select = function (e, f) {
            function g() {
                if (!l) {
                    if (i.currentSlide && angular.isString(f) && !a.noTransition && e.$element) {
                        e.$element.addClass(f); {
                            e.$element[0].offsetWidth
                        }
                        angular.forEach(j, function (a) {
                                angular.extend(a, {
                                    direction: "",
                                    entering: !1,
                                    leaving: !1,
                                    active: !1
                                })
                            }), angular.extend(e, {
                                direction: f,
                                active: !0,
                                entering: !0
                            }), angular.extend(i.currentSlide || {}, {
                                direction: f,
                                leaving: !0
                            }), a.$currentTransition = c(e.$element, {}),
                            function (b, c) {
                                a.$currentTransition.then(function () {
                                    h(b, c)
                                }, function () {
                                    h(b, c)
                                })
                            }(e, i.currentSlide)
                    } else h(e, i.currentSlide);
                    i.currentSlide = e, k = m, d()
                }
            }

            function h(b, c) {
                angular.extend(b, {
                    direction: "",
                    active: !0,
                    leaving: !1,
                    entering: !1
                }), angular.extend(c || {}, {
                    direction: "",
                    active: !1,
                    leaving: !1,
                    entering: !1
                }), a.$currentTransition = null
            }
            var m = j.indexOf(e);
            void 0 === f && (f = m > k ? "next" : "prev"), e && e !== i.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
        }, a.$on("$destroy", function () {
            l = !0
        }), i.indexOfSlide = function (a) {
            return j.indexOf(a)
        }, a.next = function () {
            var b = (k + 1) % j.length;
            return a.$currentTransition ? void 0 : i.select(j[b], "next")
        }, a.prev = function () {
            var b = 0 > k - 1 ? j.length - 1 : k - 1;
            return a.$currentTransition ? void 0 : i.select(j[b], "prev")
        }, a.isActive = function (a) {
            return i.currentSlide === a
        }, a.$watch("interval", d), a.$on("$destroy", e), a.play = function () {
            h || (h = !0, d())
        }, a.pause = function () {
            a.noPause || (h = !1, e())
        }, i.addSlide = function (b, c) {
            b.$element = c, j.push(b), 1 === j.length || b.active ? (i.select(j[j.length - 1]), 1 == j.length && a.play()) : b.active = !1
        }, i.removeSlide = function (a) {
            var b = j.indexOf(a);
            j.splice(b, 1), j.length > 0 && a.active ? i.select(b >= j.length ? j[b - 1] : j[b]) : k > b && k--
        }
    }
]).directive("carousel", [
    function () {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            controller: "CarouselController",
            require: "carousel",
            templateUrl: "template/carousel/carousel.html",
            scope: {
                interval: "=",
                noTransition: "=",
                noPause: "="
            }
        }
    }
]).directive("slide", function () {
    return {
        require: "^carousel",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/carousel/slide.html",
        scope: {
            active: "=?"
        },
        link: function (a, b, c, d) {
            d.addSlide(a, b), a.$on("$destroy", function () {
                d.removeSlide(a)
            }), a.$watch("active", function (b) {
                b && d.select(a)
            })
        }
    }
}), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter",
    function (a, b) {
        function c(a, b, c) {
            return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
        }
        this.parsers = {};
        var d = {
            yyyy: {
                regex: "\\d{4}",
                apply: function (a) {
                    this.year = +a
                }
            },
            yy: {
                regex: "\\d{2}",
                apply: function (a) {
                    this.year = +a + 2e3
                }
            },
            y: {
                regex: "\\d{1,4}",
                apply: function (a) {
                    this.year = +a
                }
            },
            MMMM: {
                regex: a.DATETIME_FORMATS.MONTH.join("|"),
                apply: function (b) {
                    this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
                }
            },
            MMM: {
                regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"),
                apply: function (b) {
                    this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
                }
            },
            MM: {
                regex: "0[1-9]|1[0-2]",
                apply: function (a) {
                    this.month = a - 1
                }
            },
            M: {
                regex: "[1-9]|1[0-2]",
                apply: function (a) {
                    this.month = a - 1
                }
            },
            dd: {
                regex: "[0-2][0-9]{1}|3[0-1]{1}",
                apply: function (a) {
                    this.date = +a
                }
            },
            d: {
                regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
                apply: function (a) {
                    this.date = +a
                }
            },
            EEEE: {
                regex: a.DATETIME_FORMATS.DAY.join("|")
            },
            EEE: {
                regex: a.DATETIME_FORMATS.SHORTDAY.join("|")
            }
        };
        this.createParser = function (a) {
            var c = [],
                e = a.split("");
            return angular.forEach(d, function (b, d) {
                var f = a.indexOf(d);
                if (f > -1) {
                    a = a.split(""), e[f] = "(" + b.regex + ")", a[f] = "$";
                    for (var g = f + 1, h = f + d.length; h > g; g++) e[g] = "", a[g] = "$";
                    a = a.join(""), c.push({
                        index: f,
                        apply: b.apply
                    })
                }
            }), {
                regex: new RegExp("^" + e.join("") + "$"),
                map: b(c, "index")
            }
        }, this.parse = function (b, d) {
            if (!angular.isString(b)) return b;
            d = a.DATETIME_FORMATS[d] || d, this.parsers[d] || (this.parsers[d] = this.createParser(d));
            var e = this.parsers[d],
                f = e.regex,
                g = e.map,
                h = b.match(f);
            if (h && h.length) {
                for (var i, j = {
                    year: 1900,
                    month: 0,
                    date: 1,
                    hours: 0
                }, k = 1, l = h.length; l > k; k++) {
                    var m = g[k - 1];
                    m.apply && m.apply.call(j, h[k])
                }
                return c(j.year, j.month, j.date) && (i = new Date(j.year, j.month, j.date, j.hours)), i
            }
        }
    }
]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window",
    function (a, b) {
        function c(a, c) {
            return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
        }

        function d(a) {
            return "static" === (c(a, "position") || "static")
        }
        var e = function (b) {
            for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
            return e || c
        };
        return {
            position: function (b) {
                var c = this.offset(b),
                    d = {
                        top: 0,
                        left: 0
                    },
                    f = e(b[0]);
                f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
                var g = b[0].getBoundingClientRect();
                return {
                    width: g.width || b.prop("offsetWidth"),
                    height: g.height || b.prop("offsetHeight"),
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offset: function (c) {
                var d = c[0].getBoundingClientRect();
                return {
                    width: d.width || c.prop("offsetWidth"),
                    height: d.height || c.prop("offsetHeight"),
                    top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
                    left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
                }
            },
            positionElements: function (a, b, c, d) {
                var e, f, g, h, i = c.split("-"),
                    j = i[0],
                    k = i[1] || "center";
                e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
                var l = {
                        center: function () {
                            return e.left + e.width / 2 - f / 2
                        },
                        left: function () {
                            return e.left
                        },
                        right: function () {
                            return e.left + e.width
                        }
                    },
                    m = {
                        center: function () {
                            return e.top + e.height / 2 - g / 2
                        },
                        top: function () {
                            return e.top
                        },
                        bottom: function () {
                            return e.top + e.height
                        }
                    };
                switch (j) {
                case "right":
                    h = {
                        top: m[k](),
                        left: l[j]()
                    };
                    break;
                case "left":
                    h = {
                        top: m[k](),
                        left: e.left - f
                    };
                    break;
                case "bottom":
                    h = {
                        top: m[j](),
                        left: l[k]()
                    };
                    break;
                default:
                    h = {
                        top: e.top - g,
                        left: l[k]()
                    }
                }
                return h
            }
        }
    }
]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null
}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig",
    function (a, b, c, d, e, f, g, h) {
        var i = this,
            j = {
                $setViewValue: angular.noop
            };
        this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function (c, e) {
            i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
        }), angular.forEach(["minDate", "maxDate"], function (d) {
            b[d] ? a.$parent.$watch(c(b[d]), function (a) {
                i[d] = a ? new Date(a) : null, i.refreshView()
            }) : i[d] = h[d] ? new Date(h[d]) : null
        }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date, a.isActive = function (b) {
            return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
        }, this.init = function (a) {
            j = a, j.$render = function () {
                i.render()
            }
        }, this.render = function () {
            if (j.$modelValue) {
                var a = new Date(j.$modelValue),
                    b = !isNaN(a);
                b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
            }
            this.refreshView()
        }, this.refreshView = function () {
            if (this.element) {
                this._refreshView();
                var a = j.$modelValue ? new Date(j.$modelValue) : null;
                j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
            }
        }, this.createDateObject = function (a, b) {
            var c = j.$modelValue ? new Date(j.$modelValue) : null;
            return {
                date: a,
                label: g(a, b),
                selected: c && 0 === this.compare(a, c),
                disabled: this.isDisabled(a),
                current: 0 === this.compare(a, new Date)
            }
        }, this.isDisabled = function (c) {
            return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
                date: c,
                mode: a.datepickerMode
            })
        }, this.split = function (a, b) {
            for (var c = []; a.length > 0;) c.push(a.splice(0, b));
            return c
        }, a.select = function (b) {
            if (a.datepickerMode === i.minMode) {
                var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
                c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
            } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
        }, a.move = function (a) {
            var b = i.activeDate.getFullYear() + a * (i.step.years || 0),
                c = i.activeDate.getMonth() + a * (i.step.months || 0);
            i.activeDate.setFullYear(b, c, 1), i.refreshView()
        }, a.toggleMode = function (b) {
            b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
        }, a.keys = {
            13: "enter",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        var k = function () {
            e(function () {
                i.element[0].focus()
            }, 0, !1)
        };
        a.$on("datepicker.focus", k), a.keydown = function (b) {
            var c = a.keys[b.which];
            if (c && !b.shiftKey && !b.altKey)
                if (b.preventDefault(), b.stopPropagation(), "enter" === c || "space" === c) {
                    if (i.isDisabled(i.activeDate)) return;
                    a.select(i.activeDate), k()
                } else !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
        }
    }
]).directive("datepicker", function () {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/datepicker.html",
        scope: {
            datepickerMode: "=?",
            dateDisabled: "&"
        },
        require: ["datepicker", "?^ngModel"],
        controller: "DatepickerController",
        link: function (a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f)
        }
    }
}).directive("daypicker", ["dateFilter",
    function (a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/day.html",
            require: "^datepicker",
            link: function (b, c, d, e) {
                function f(a, b) {
                    return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
                }

                function g(a, b) {
                    var c = new Array(b),
                        d = new Date(a),
                        e = 0;
                    for (d.setHours(12); b > e;) c[e++] = new Date(d), d.setDate(d.getDate() + 1);
                    return c
                }

                function h(a) {
                    var b = new Date(a);
                    b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                    var c = b.getTime();
                    return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
                }
                b.showWeeks = e.showWeeks, e.step = {
                    months: 1
                }, e.element = c;
                var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                e._refreshView = function () {
                    var c = e.activeDate.getFullYear(),
                        d = e.activeDate.getMonth(),
                        f = new Date(c, d, 1),
                        i = e.startingDay - f.getDay(),
                        j = i > 0 ? 7 - i : -i,
                        k = new Date(f);
                    j > 0 && k.setDate(-j + 1);
                    for (var l = g(k, 42), m = 0; 42 > m; m++) l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
                        secondary: l[m].getMonth() !== d,
                        uid: b.uniqueId + "-" + m
                    });
                    b.labels = new Array(7);
                    for (var n = 0; 7 > n; n++) b.labels[n] = {
                        abbr: a(l[n].date, e.formatDayHeader),
                        full: a(l[n].date, "EEEE")
                    };
                    if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
                        b.weekNumbers = [];
                        for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p;);
                    }
                }, e.compare = function (a, b) {
                    return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
                }, e.handleKeyDown = function (a) {
                    var b = e.activeDate.getDate();
                    if ("left" === a) b -= 1;
                    else if ("up" === a) b -= 7;
                    else if ("right" === a) b += 1;
                    else if ("down" === a) b += 7;
                    else if ("pageup" === a || "pagedown" === a) {
                        var c = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setMonth(c, 1), b = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), b)
                    } else "home" === a ? b = 1 : "end" === a && (b = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
                    e.activeDate.setDate(b)
                }, e.refreshView()
            }
        }
    }
]).directive("monthpicker", ["dateFilter",
    function (a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/month.html",
            require: "^datepicker",
            link: function (b, c, d, e) {
                e.step = {
                    years: 1
                }, e.element = c, e._refreshView = function () {
                    for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++) c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {
                        uid: b.uniqueId + "-" + f
                    });
                    b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
                }, e.compare = function (a, b) {
                    return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
                }, e.handleKeyDown = function (a) {
                    var b = e.activeDate.getMonth();
                    if ("left" === a) b -= 1;
                    else if ("up" === a) b -= 3;
                    else if ("right" === a) b += 1;
                    else if ("down" === a) b += 3;
                    else if ("pageup" === a || "pagedown" === a) {
                        var c = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setFullYear(c)
                    } else "home" === a ? b = 0 : "end" === a && (b = 11);
                    e.activeDate.setMonth(b)
                }, e.refreshView()
            }
        }
    }
]).directive("yearpicker", ["dateFilter",
    function () {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/year.html",
            require: "^datepicker",
            link: function (a, b, c, d) {
                function e(a) {
                    return parseInt((a - 1) / f, 10) * f + 1
                }
                var f = d.yearRange;
                d.step = {
                    years: f
                }, d.element = b, d._refreshView = function () {
                    for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++) b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {
                        uid: a.uniqueId + "-" + c
                    });
                    a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
                }, d.compare = function (a, b) {
                    return a.getFullYear() - b.getFullYear()
                }, d.handleKeyDown = function (a) {
                    var b = d.activeDate.getFullYear();
                    "left" === a ? b -= 1 : "up" === a ? b -= 5 : "right" === a ? b += 1 : "down" === a ? b += 5 : "pageup" === a || "pagedown" === a ? b += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? b = e(d.activeDate.getFullYear()) : "end" === a && (b = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(b)
                }, d.refreshView()
            }
        }
    }
]).constant("datepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0
}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig",
    function (a, b, c, d, e, f, g) {
        return {
            restrict: "EA",
            require: "ngModel",
            scope: {
                isOpen: "=?",
                currentText: "@",
                clearText: "@",
                closeText: "@",
                dateDisabled: "&"
            },
            link: function (h, i, j, k) {
                function l(a) {
                    return a.replace(/([A-Z])/g, function (a) {
                        return "-" + a.toLowerCase()
                    })
                }

                function m(a) {
                    if (a) {
                        if (angular.isDate(a) && !isNaN(a)) return k.$setValidity("date", !0), a;
                        if (angular.isString(a)) {
                            var b = f.parse(a, n) || new Date(a);
                            return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
                        }
                        return void k.$setValidity("date", !1)
                    }
                    return k.$setValidity("date", !0), null
                }
                var n, o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection,
                    p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
                h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function (a) {
                    return h[a + "Text"] || g[a + "Text"]
                }, j.$observe("datepickerPopup", function (a) {
                    n = a || g.datepickerPopup, k.$render()
                });
                var q = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
                q.attr({
                    "ng-model": "date",
                    "ng-change": "dateSelection()"
                });
                var r = angular.element(q.children()[0]);
                j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function (a, b) {
                    r.attr(l(b), a)
                }), angular.forEach(["minDate", "maxDate"], function (a) {
                    j[a] && (h.$parent.$watch(b(j[a]), function (b) {
                        h[a] = b
                    }), r.attr(l(a), a))
                }), j.dateDisabled && r.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), k.$parsers.unshift(m), h.dateSelection = function (a) {
                    angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus())
                }, i.bind("input change keyup", function () {
                    h.$apply(function () {
                        h.date = k.$modelValue
                    })
                }), k.$render = function () {
                    var a = k.$viewValue ? e(k.$viewValue, n) : "";
                    i.val(a), h.date = m(k.$modelValue)
                };
                var s = function (a) {
                        h.isOpen && a.target !== i[0] && h.$apply(function () {
                            h.isOpen = !1
                        })
                    },
                    t = function (a) {
                        h.keydown(a)
                    };
                i.bind("keydown", t), h.keydown = function (a) {
                    27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
                }, h.$watch("isOpen", function (a) {
                    a ? (h.$broadcast("datepicker.focus"), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", s)) : c.unbind("click", s)
                }), h.select = function (a) {
                    if ("today" === a) {
                        var b = new Date;
                        angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
                    }
                    h.dateSelection(a)
                }, h.close = function () {
                    h.isOpen = !1, i[0].focus()
                };
                var u = a(q)(h);
                p ? c.find("body").append(u) : i.after(u), h.$on("$destroy", function () {
                    u.remove(), i.unbind("keydown", t), c.unbind("click", s)
                })
            }
        }
    }
]).directive("datepickerPopupWrap", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        templateUrl: "template/datepicker/popup.html",
        link: function (a, b) {
            b.bind("click", function (a) {
                a.preventDefault(), a.stopPropagation()
            })
        }
    }
}), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {
    openClass: "open"
}).service("dropdownService", ["$document",
    function (a) {
        var b = null;
        this.open = function (e) {
            b || (a.bind("click", c), a.bind("keydown", d)), b && b !== e && (b.isOpen = !1), b = e
        }, this.close = function (e) {
            b === e && (b = null, a.unbind("click", c), a.unbind("keydown", d))
        };
        var c = function (a) {
                a && a.isDefaultPrevented() || b.$apply(function () {
                    b.isOpen = !1
                })
            },
            d = function (a) {
                27 === a.which && (b.focusToggleElement(), c())
            }
    }
]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate",
    function (a, b, c, d, e, f) {
        var g, h = this,
            i = a.$new(),
            j = d.openClass,
            k = angular.noop,
            l = b.onToggle ? c(b.onToggle) : angular.noop;
        this.init = function (d) {
            h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function (a) {
                i.isOpen = !!a
            }))
        }, this.toggle = function (a) {
            return i.isOpen = arguments.length ? !!a : !i.isOpen
        }, this.isOpen = function () {
            return i.isOpen
        }, i.focusToggleElement = function () {
            h.toggleElement && h.toggleElement[0].focus()
        }, i.$watch("isOpen", function (b, c) {
            f[b ? "addClass" : "removeClass"](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, {
                open: !!b
            })
        }), a.$on("$locationChangeSuccess", function () {
            i.isOpen = !1
        }), a.$on("$destroy", function () {
            i.$destroy()
        })
    }
]).directive("dropdown", function () {
    return {
        restrict: "CA",
        controller: "DropdownController",
        link: function (a, b, c, d) {
            d.init(b)
        }
    }
}).directive("dropdownToggle", function () {
    return {
        restrict: "CA",
        require: "?^dropdown",
        link: function (a, b, c, d) {
            if (d) {
                d.toggleElement = b;
                var e = function (e) {
                    e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function () {
                        d.toggle()
                    })
                };
                b.bind("click", e), b.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), a.$watch(d.isOpen, function (a) {
                    b.attr("aria-expanded", !!a)
                }), a.$on("$destroy", function () {
                    b.unbind("click", e)
                })
            }
        }
    }
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function () {
    return {
        createNew: function () {
            var a = [];
            return {
                add: function (b, c) {
                    a.push({
                        key: b,
                        value: c
                    })
                },
                get: function (b) {
                    for (var c = 0; c < a.length; c++)
                        if (b == a[c].key) return a[c]
                },
                keys: function () {
                    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                    return b
                },
                top: function () {
                    return a[a.length - 1]
                },
                remove: function (b) {
                    for (var c = -1, d = 0; d < a.length; d++)
                        if (b == a[d].key) {
                            c = d;
                            break
                        }
                    return a.splice(c, 1)[0]
                },
                removeTop: function () {
                    return a.splice(a.length - 1, 1)[0]
                },
                length: function () {
                    return a.length
                }
            }
        }
    }
}).directive("modalBackdrop", ["$timeout",
    function (a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/modal/backdrop.html",
            link: function (b) {
                b.animate = !1, a(function () {
                    b.animate = !0
                })
            }
        }
    }
]).directive("modalWindow", ["$modalStack", "$timeout",
    function (a, b) {
        return {
            restrict: "EA",
            scope: {
                index: "@",
                animate: "="
            },
            replace: !0,
            transclude: !0,
            templateUrl: function (a, b) {
                return b.templateUrl || "template/modal/window.html"
            },
            link: function (c, d, e) {
                d.addClass(e.windowClass || ""), c.size = e.size, b(function () {
                    c.animate = !0, d[0].focus()
                }), c.close = function (b) {
                    var c = a.getTop();
                    c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
                }
            }
        }
    }
]).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap",
    function (a, b, c, d, e, f) {
        function g() {
            for (var a = -1, b = n.keys(), c = 0; c < b.length; c++) n.get(b[c]).value.backdrop && (a = c);
            return a
        }

        function h(a) {
            var b = c.find("body").eq(0),
                d = n.get(a).value;
            n.remove(a), j(d.modalDomEl, d.modalScope, 300, function () {
                d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i()
            })
        }

        function i() {
            if (k && -1 == g()) {
                var a = l;
                j(k, l, 150, function () {
                    a.$destroy(), a = null
                }), k = void 0, l = void 0
            }
        }

        function j(c, d, e, f) {
            function g() {
                g.done || (g.done = !0, c.remove(), f && f())
            }
            d.animate = !1;
            var h = a.transitionEndEventName;
            if (h) {
                var i = b(g, e);
                c.bind(h, function () {
                    b.cancel(i), g(), d.$apply()
                })
            } else b(g, 0)
        }
        var k, l, m = "modal-open",
            n = f.createNew(),
            o = {};
        return e.$watch(g, function (a) {
            l && (l.index = a)
        }), c.bind("keydown", function (a) {
            var b;
            27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function () {
                o.dismiss(b.key, "escape key press")
            })))
        }), o.open = function (a, b) {
            n.add(a, {
                deferred: b.deferred,
                modalScope: b.scope,
                backdrop: b.backdrop,
                keyboard: b.keyboard
            });
            var f = c.find("body").eq(0),
                h = g();
            h >= 0 && !k && (l = e.$new(!0), l.index = h, k = d("<div modal-backdrop></div>")(l), f.append(k));
            var i = angular.element("<div modal-window></div>");
            i.attr({
                "template-url": b.windowTemplateUrl,
                "window-class": b.windowClass,
                size: b.size,
                index: n.length() - 1,
                animate: "animate"
            }).html(b.content);
            var j = d(i)(b.scope);
            n.top().value.modalDomEl = j, f.append(j), f.addClass(m)
        }, o.close = function (a, b) {
            var c = n.get(a).value;
            c && (c.deferred.resolve(b), h(a))
        }, o.dismiss = function (a, b) {
            var c = n.get(a).value;
            c && (c.deferred.reject(b), h(a))
        }, o.dismissAll = function (a) {
            for (var b = this.getTop(); b;) this.dismiss(b.key, a), b = this.getTop()
        }, o.getTop = function () {
            return n.top()
        }, o
    }
]).provider("$modal", function () {
    var a = {
        options: {
            backdrop: !0,
            keyboard: !0
        },
        $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack",
            function (b, c, d, e, f, g, h) {
                function i(a) {
                    return a.template ? d.when(a.template) : e.get(a.templateUrl, {
                        cache: f
                    }).then(function (a) {
                        return a.data
                    })
                }

                function j(a) {
                    var c = [];
                    return angular.forEach(a, function (a) {
                        (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
                    }), c
                }
                var k = {};
                return k.open = function (b) {
                    var e = d.defer(),
                        f = d.defer(),
                        k = {
                            result: e.promise,
                            opened: f.promise,
                            close: function (a) {
                                h.close(k, a)
                            },
                            dismiss: function (a) {
                                h.dismiss(k, a)
                            }
                        };
                    if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                    var l = d.all([i(b)].concat(j(b.resolve)));
                    return l.then(function (a) {
                        var d = (b.scope || c).$new();
                        d.$close = k.close, d.$dismiss = k.dismiss;
                        var f, i = {},
                            j = 1;
                        b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function (b, c) {
                            i[c] = a[j++]
                        }), f = g(b.controller, i)), h.open(k, {
                            scope: d,
                            deferred: e,
                            content: a[0],
                            backdrop: b.backdrop,
                            keyboard: b.keyboard,
                            windowClass: b.windowClass,
                            windowTemplateUrl: b.windowTemplateUrl,
                            size: b.size
                        })
                    }, function (a) {
                        e.reject(a)
                    }), l.then(function () {
                        f.resolve(!0)
                    }, function () {
                        f.reject(!1)
                    }), k
                }, k
            }
        ]
    };
    return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse",
    function (a, b, c) {
        var d = this,
            e = {
                $setViewValue: angular.noop
            },
            f = b.numPages ? c(b.numPages).assign : angular.noop;
        this.init = function (f, g) {
            e = f, this.config = g, e.$render = function () {
                d.render()
            }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function (b) {
                d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
            }) : this.itemsPerPage = g.itemsPerPage
        }, this.calculateTotalPages = function () {
            var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
            return Math.max(b || 0, 1)
        }, this.render = function () {
            a.page = parseInt(e.$viewValue, 10) || 1
        }, a.selectPage = function (b) {
            a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render())
        }, a.getText = function (b) {
            return a[b + "Text"] || d.config[b + "Text"]
        }, a.noPrevious = function () {
            return 1 === a.page
        }, a.noNext = function () {
            return a.page === a.totalPages
        }, a.$watch("totalItems", function () {
            a.totalPages = d.calculateTotalPages()
        }), a.$watch("totalPages", function (b) {
            f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
        })
    }
]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", ["$parse", "paginationConfig",
    function (a, b) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                firstText: "@",
                previousText: "@",
                nextText: "@",
                lastText: "@"
            },
            require: ["pagination", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pagination.html",
            replace: !0,
            link: function (c, d, e, f) {
                function g(a, b, c) {
                    return {
                        number: a,
                        text: b,
                        active: c
                    }
                }

                function h(a, b) {
                    var c = [],
                        d = 1,
                        e = b,
                        f = angular.isDefined(k) && b > k;
                    f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
                    for (var h = d; e >= h; h++) {
                        var i = g(h, h, h === a);
                        c.push(i)
                    }
                    if (f && !l) {
                        if (d > 1) {
                            var j = g(d - 1, "...", !1);
                            c.unshift(j)
                        }
                        if (b > e) {
                            var m = g(e + 1, "...", !1);
                            c.push(m)
                        }
                    }
                    return c
                }
                var i = f[0],
                    j = f[1];
                if (j) {
                    var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize,
                        l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
                    c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function (a) {
                        k = parseInt(a, 10), i.render()
                    });
                    var m = i.render;
                    i.render = function () {
                        m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
                    }
                }
            }
        }
    }
]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("pager", ["pagerConfig",
    function (a) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                previousText: "@",
                nextText: "@"
            },
            require: ["pager", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pager.html",
            replace: !0,
            link: function (b, c, d, e) {
                var f = e[0],
                    g = e[1];
                g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
            }
        }
    }
]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function () {
    function a(a) {
        var b = /[A-Z]/g,
            c = "-";
        return a.replace(b, function (a, b) {
            return (b ? c : "") + a.toLowerCase()
        })
    }
    var b = {
            placement: "top",
            animation: !0,
            popupDelay: 0
        },
        c = {
            mouseenter: "mouseleave",
            click: "click",
            focus: "blur"
        },
        d = {};
    this.options = function (a) {
        angular.extend(d, a)
    }, this.setTriggers = function (a) {
        angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate",
        function (e, f, g, h, i, j, k) {
            return function (e, l, m) {
                function n(a) {
                    var b = a || o.trigger || m,
                        d = c[b] || b;
                    return {
                        show: b,
                        hide: d
                    }
                }
                var o = angular.extend({}, b, d),
                    p = a(e),
                    q = k.startSymbol(),
                    r = k.endSymbol(),
                    s = "<div " + p + '-popup title="' + q + "tt_title" + r + '" content="' + q + "tt_content" + r + '" placement="' + q + "tt_placement" + r + '" animation="tt_animation" is-open="tt_isOpen"></div>';
                return {
                    restrict: "EA",
                    scope: !0,
                    compile: function () {
                        var a = f(s);
                        return function (b, c, d) {
                            function f() {
                                b.tt_isOpen ? m() : k()
                            }

                            function k() {
                                (!y || b.$eval(d[l + "Enable"])) && (b.tt_popupDelay ? v || (v = g(p, b.tt_popupDelay, !1), v.then(function (a) {
                                    a()
                                })) : p()())
                            }

                            function m() {
                                b.$apply(function () {
                                    q()
                                })
                            }

                            function p() {
                                return v = null, u && (g.cancel(u), u = null), b.tt_content ? (r(), t.css({
                                    top: 0,
                                    left: 0,
                                    display: "block"
                                }), w ? i.find("body").append(t) : c.after(t), z(), b.tt_isOpen = !0, b.$digest(), z) : angular.noop
                            }

                            function q() {
                                b.tt_isOpen = !1, g.cancel(v), v = null, b.tt_animation ? u || (u = g(s, 500)) : s()
                            }

                            function r() {
                                t && s(), t = a(b, function () {}), b.$digest()
                            }

                            function s() {
                                u = null, t && (t.remove(), t = null)
                            }
                            var t, u, v, w = angular.isDefined(o.appendToBody) ? o.appendToBody : !1,
                                x = n(void 0),
                                y = angular.isDefined(d[l + "Enable"]),
                                z = function () {
                                    var a = j.positionElements(c, t, b.tt_placement, w);
                                    a.top += "px", a.left += "px", t.css(a)
                                };
                            b.tt_isOpen = !1, d.$observe(e, function (a) {
                                b.tt_content = a, !a && b.tt_isOpen && q()
                            }), d.$observe(l + "Title", function (a) {
                                b.tt_title = a
                            }), d.$observe(l + "Placement", function (a) {
                                b.tt_placement = angular.isDefined(a) ? a : o.placement
                            }), d.$observe(l + "PopupDelay", function (a) {
                                var c = parseInt(a, 10);
                                b.tt_popupDelay = isNaN(c) ? o.popupDelay : c
                            });
                            var A = function () {
                                c.unbind(x.show, k), c.unbind(x.hide, m)
                            };
                            d.$observe(l + "Trigger", function (a) {
                                A(), x = n(a), x.show === x.hide ? c.bind(x.show, f) : (c.bind(x.show, k), c.bind(x.hide, m))
                            });
                            var B = b.$eval(d[l + "Animation"]);
                            b.tt_animation = angular.isDefined(B) ? !!B : o.animation, d.$observe(l + "AppendToBody", function (a) {
                                w = angular.isDefined(a) ? h(a)(b) : w
                            }), w && b.$on("$locationChangeSuccess", function () {
                                b.tt_isOpen && q()
                            }), b.$on("$destroy", function () {
                                g.cancel(u), g.cancel(v), A(), s()
                            })
                        }
                    }
                }
            }
        }
    ]
}).directive("tooltipPopup", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html"
    }
}).directive("tooltip", ["$tooltip",
    function (a) {
        return a("tooltip", "tooltip", "mouseenter")
    }
]).directive("tooltipHtmlUnsafePopup", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    }
}).directive("tooltipHtmlUnsafe", ["$tooltip",
    function (a) {
        return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
    }
]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html"
    }
}).directive("popover", ["$tooltip",
    function (a) {
        return a("popover", "popover", "click")
    }
]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
    animate: !0,
    max: 100
}).controller("ProgressController", ["$scope", "$attrs", "progressConfig",
    function (a, b, c) {
        var d = this,
            e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
        this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function (b, c) {
            e || c.css({
                transition: "none"
            }), this.bars.push(b), b.$watch("value", function (c) {
                b.percent = +(100 * c / a.max).toFixed(2)
            }), b.$on("$destroy", function () {
                c = null, d.removeBar(b)
            })
        }, this.removeBar = function (a) {
            this.bars.splice(this.bars.indexOf(a), 1)
        }
    }
]).directive("progress", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {},
        templateUrl: "template/progressbar/progress.html"
    }
}).directive("bar", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/bar.html",
        link: function (a, b, c, d) {
            d.addBar(a, b)
        }
    }
}).directive("progressbar", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/progressbar.html",
        link: function (a, b, c, d) {
            d.addBar(a, angular.element(b.children()[0]))
        }
    }
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
}).controller("RatingController", ["$scope", "$attrs", "ratingConfig",
    function (a, b, c) {
        var d = {
            $setViewValue: angular.noop
        };
        this.init = function (e) {
            d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
            var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
            a.range = this.buildTemplateObjects(f)
        }, this.buildTemplateObjects = function (a) {
            for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({
                index: b
            }, {
                stateOn: this.stateOn,
                stateOff: this.stateOff
            }, a[b]);
            return a
        }, a.rate = function (b) {
            !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
        }, a.enter = function (b) {
            a.readonly || (a.value = b), a.onHover({
                value: b
            })
        }, a.reset = function () {
            a.value = d.$viewValue, a.onLeave()
        }, a.onKeydown = function (b) {
            /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
        }, this.render = function () {
            a.value = d.$viewValue
        }
    }
]).directive("rating", function () {
    return {
        restrict: "EA",
        require: ["rating", "ngModel"],
        scope: {
            readonly: "=?",
            onHover: "&",
            onLeave: "&"
        },
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0,
        link: function (a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f)
        }
    }
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope",
    function (a) {
        var b = this,
            c = b.tabs = a.tabs = [];
        b.select = function (a) {
            angular.forEach(c, function (b) {
                b.active && b !== a && (b.active = !1, b.onDeselect())
            }), a.active = !0, a.onSelect()
        }, b.addTab = function (a) {
            c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a)
        }, b.removeTab = function (a) {
            var d = c.indexOf(a);
            if (a.active && c.length > 1) {
                var e = d == c.length - 1 ? d - 1 : d + 1;
                b.select(c[e])
            }
            c.splice(d, 1)
        }
    }
]).directive("tabset", function () {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@"
        },
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function (a, b, c) {
            a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
        }
    }
}).directive("tab", ["$parse",
    function (a) {
        return {
            require: "^tabset",
            restrict: "EA",
            replace: !0,
            templateUrl: "template/tabs/tab.html",
            transclude: !0,
            scope: {
                active: "=?",
                heading: "@",
                onSelect: "&select",
                onDeselect: "&deselect"
            },
            controller: function () {},
            compile: function (b, c, d) {
                return function (b, c, e, f) {
                    b.$watch("active", function (a) {
                        a && f.select(b)
                    }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function (a) {
                        b.disabled = !!a
                    }), b.select = function () {
                        b.disabled || (b.active = !0)
                    }, f.addTab(b), b.$on("$destroy", function () {
                        f.removeTab(b)
                    }), b.$transcludeFn = d
                }
            }
        }
    }
]).directive("tabHeadingTransclude", [
    function () {
        return {
            restrict: "A",
            require: "^tab",
            link: function (a, b) {
                a.$watch("headingElement", function (a) {
                    a && (b.html(""), b.append(a))
                })
            }
        }
    }
]).directive("tabContentTransclude", function () {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
    }
    return {
        restrict: "A",
        require: "^tabset",
        link: function (b, c, d) {
            var e = b.$eval(d.tabContentTransclude);
            e.$transcludeFn(e.$parent, function (b) {
                angular.forEach(b, function (b) {
                    a(b) ? e.headingElement = b : c.append(b)
                })
            })
        }
    }
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0
}).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig",
    function (a, b, c, d, e, f) {
        function g() {
            var b = parseInt(a.hours, 10),
                c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
            return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
        }

        function h() {
            var b = parseInt(a.minutes, 10);
            return b >= 0 && 60 > b ? b : void 0
        }

        function i(a) {
            return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
        }

        function j(a) {
            k(), o.$setViewValue(new Date(n)), l(a)
        }

        function k() {
            o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
        }

        function l(b) {
            var c = n.getHours(),
                d = n.getMinutes();
            a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), a.minutes = "m" === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1]
        }

        function m(a) {
            var b = new Date(n.getTime() + 6e4 * a);
            n.setHours(b.getHours(), b.getMinutes()), j()
        }
        var n = new Date,
            o = {
                $setViewValue: angular.noop
            },
            p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
        this.init = function (c, d) {
            o = c, o.$render = this.render;
            var e = d.eq(0),
                g = d.eq(1),
                h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
            h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
        };
        var q = f.hourStep;
        b.hourStep && a.$parent.$watch(c(b.hourStep), function (a) {
            q = parseInt(a, 10)
        });
        var r = f.minuteStep;
        b.minuteStep && a.$parent.$watch(c(b.minuteStep), function (a) {
            r = parseInt(a, 10)
        }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function (b) {
            if (a.showMeridian = !!b, o.$error.time) {
                var c = g(),
                    d = h();
                angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
            } else l()
        }), this.setupMousewheelEvents = function (b, c) {
            var d = function (a) {
                a.originalEvent && (a = a.originalEvent);
                var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
                return a.detail || b > 0
            };
            b.bind("mousewheel wheel", function (b) {
                a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
            }), c.bind("mousewheel wheel", function (b) {
                a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
            })
        }, this.setupInputEvents = function (b, c) {
            if (a.readonlyInput) return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
            var d = function (b, c) {
                o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
            };
            a.updateHours = function () {
                var a = g();
                angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
            }, b.bind("blur", function () {
                !a.invalidHours && a.hours < 10 && a.$apply(function () {
                    a.hours = i(a.hours)
                })
            }), a.updateMinutes = function () {
                var a = h();
                angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
            }, c.bind("blur", function () {
                !a.invalidMinutes && a.minutes < 10 && a.$apply(function () {
                    a.minutes = i(a.minutes)
                })
            })
        }, this.render = function () {
            var a = o.$modelValue ? new Date(o.$modelValue) : null;
            isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
        }, a.incrementHours = function () {
            m(60 * q)
        }, a.decrementHours = function () {
            m(60 * -q)
        }, a.incrementMinutes = function () {
            m(r)
        }, a.decrementMinutes = function () {
            m(-r)
        }, a.toggleMeridian = function () {
            m(720 * (n.getHours() < 12 ? 1 : -1))
        }
    }
]).directive("timepicker", function () {
    return {
        restrict: "EA",
        require: ["timepicker", "?^ngModel"],
        controller: "TimepickerController",
        replace: !0,
        scope: {},
        templateUrl: "template/timepicker/timepicker.html",
        link: function (a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f, b.find("input"))
        }
    }
}), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse",
    function (a) {
        var b = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
        return {
            parse: function (c) {
                var d = c.match(b);
                if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
                return {
                    itemName: d[3],
                    source: a(d[4]),
                    viewMapper: a(d[2] || d[1]),
                    modelMapper: a(d[1])
                }
            }
        }
    }
]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser",
    function (a, b, c, d, e, f, g) {
        var h = [9, 13, 27, 38, 40];
        return {
            require: "ngModel",
            link: function (i, j, k, l) {
                var m, n = i.$eval(k.typeaheadMinLength) || 1,
                    o = i.$eval(k.typeaheadWaitMs) || 0,
                    p = i.$eval(k.typeaheadEditable) !== !1,
                    q = b(k.typeaheadLoading).assign || angular.noop,
                    r = b(k.typeaheadOnSelect),
                    s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0,
                    t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1,
                    u = b(k.ngModel).assign,
                    v = g.parse(k.typeahead),
                    w = i.$new();
                i.$on("$destroy", function () {
                    w.$destroy()
                });
                var x = "typeahead-" + w.$id + "-" + Math.floor(1e4 * Math.random());
                j.attr({
                    "aria-autocomplete": "list",
                    "aria-expanded": !1,
                    "aria-owns": x
                });
                var y = angular.element("<div typeahead-popup></div>");
                y.attr({
                    id: x,
                    matches: "matches",
                    active: "activeIdx",
                    select: "select(activeIdx)",
                    query: "query",
                    position: "position"
                }), angular.isDefined(k.typeaheadTemplateUrl) && y.attr("template-url", k.typeaheadTemplateUrl);
                var z = function () {
                        w.matches = [], w.activeIdx = -1, j.attr("aria-expanded", !1)
                    },
                    A = function (a) {
                        return x + "-option-" + a
                    };
                w.$watch("activeIdx", function (a) {
                    0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", A(a))
                });
                var B = function (a) {
                    var b = {
                        $viewValue: a
                    };
                    q(i, !0), c.when(v.source(i, b)).then(function (c) {
                        var d = a === l.$viewValue;
                        if (d && m)
                            if (c.length > 0) {
                                w.activeIdx = 0, w.matches.length = 0;
                                for (var e = 0; e < c.length; e++) b[v.itemName] = c[e], w.matches.push({
                                    id: A(e),
                                    label: v.viewMapper(w, b),
                                    model: c[e]
                                });
                                w.query = a, w.position = t ? f.offset(j) : f.position(j), w.position.top = w.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
                            } else z();
                        d && q(i, !1)
                    }, function () {
                        z(), q(i, !1)
                    })
                };
                z(), w.query = void 0;
                var C;
                l.$parsers.unshift(function (a) {
                    return m = !0, a && a.length >= n ? o > 0 ? (C && d.cancel(C), C = d(function () {
                        B(a)
                    }, o)) : B(a) : (q(i, !1), z()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
                }), l.$formatters.push(function (a) {
                    var b, c, d = {};
                    return s ? (d.$model = a, s(i, d)) : (d[v.itemName] = a, b = v.viewMapper(i, d), d[v.itemName] = void 0, c = v.viewMapper(i, d), b !== c ? b : a)
                }), w.select = function (a) {
                    var b, c, e = {};
                    e[v.itemName] = c = w.matches[a].model, b = v.modelMapper(i, e), u(i, b), l.$setValidity("editable", !0), r(i, {
                        $item: c,
                        $model: b,
                        $label: v.viewMapper(i, e)
                    }), z(), d(function () {
                        j[0].focus()
                    }, 0, !1)
                }, j.bind("keydown", function (a) {
                    0 !== w.matches.length && -1 !== h.indexOf(a.which) && (a.preventDefault(), 40 === a.which ? (w.activeIdx = (w.activeIdx + 1) % w.matches.length, w.$digest()) : 38 === a.which ? (w.activeIdx = (w.activeIdx ? w.activeIdx : w.matches.length) - 1, w.$digest()) : 13 === a.which || 9 === a.which ? w.$apply(function () {
                        w.select(w.activeIdx)
                    }) : 27 === a.which && (a.stopPropagation(), z(), w.$digest()))
                }), j.bind("blur", function () {
                    m = !1
                });
                var D = function (a) {
                    j[0] !== a.target && (z(), w.$digest())
                };
                e.bind("click", D), i.$on("$destroy", function () {
                    e.unbind("click", D)
                });
                var E = a(y)(w);
                t ? e.find("body").append(E) : j.after(E)
            }
        }
    }
]).directive("typeaheadPopup", function () {
    return {
        restrict: "EA",
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: "template/typeahead/typeahead-popup.html",
        link: function (a, b, c) {
            a.templateUrl = c.templateUrl, a.isOpen = function () {
                return a.matches.length > 0
            }, a.isActive = function (b) {
                return a.active == b
            }, a.selectActive = function (b) {
                a.active = b
            }, a.selectMatch = function (b) {
                a.select({
                    activeIdx: b
                })
            }
        }
    }
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse",
    function (a, b, c, d) {
        return {
            restrict: "EA",
            scope: {
                index: "=",
                match: "=",
                query: "="
            },
            link: function (e, f, g) {
                var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
                a.get(h, {
                    cache: b
                }).success(function (a) {
                    f.replaceWith(c(a.trim())(e))
                })
            }
        }
    }
]).filter("typeaheadHighlight", function () {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    return function (b, c) {
        return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache",
    function (a) {
        a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')
    }
]), angular.module("template/accordion/accordion.html", []).run(["$templateCache",
    function (a) {
        a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
    }
]), angular.module("template/alert/alert.html", []).run(["$templateCache",
    function (a) {
        a.put("template/alert/alert.html", '<div class="alert" ng-class="{\'alert-{{type || \'warning\'}}\': true, \'alert-dismissable\': closeable}" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
    }
]), angular.module("template/carousel/carousel.html", []).run(["$templateCache",
    function (a) {
        a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
    }
]), angular.module("template/carousel/slide.html", []).run(["$templateCache",
    function (a) {
        a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
    }
]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache",
    function (a) {
        a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
    }
]), angular.module("template/datepicker/day.html", []).run(["$templateCache",
    function (a) {
        a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }
]), angular.module("template/datepicker/month.html", []).run(["$templateCache",
    function (a) {
        a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }
]), angular.module("template/datepicker/popup.html", []).run(["$templateCache",
    function (a) {
        a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
    }
]), angular.module("template/datepicker/year.html", []).run(["$templateCache",
    function (a) {
        a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }
]), angular.module("template/modal/backdrop.html", []).run(["$templateCache",
    function (a) {
        a.put("template/modal/backdrop.html", '<div class="modal-backdrop fade"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
    }
]), angular.module("template/modal/window.html", []).run(["$templateCache",
    function (a) {
        a.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" ng-transclude></div></div>\n</div>')
    }
]), angular.module("template/pagination/pager.html", []).run(["$templateCache",
    function (a) {
        a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')
    }
]), angular.module("template/pagination/pagination.html", []).run(["$templateCache",
    function (a) {
        a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')
    }
]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache",
    function (a) {
        a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
    }
]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache",
    function (a) {
        a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
    }
]), angular.module("template/popover/popover.html", []).run(["$templateCache",
    function (a) {
        a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
    }
]), angular.module("template/progressbar/bar.html", []).run(["$templateCache",
    function (a) {
        a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')
    }
]), angular.module("template/progressbar/progress.html", []).run(["$templateCache",
    function (a) {
        a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
    }
]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache",
    function (a) {
        a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')
    }
]), angular.module("template/rating/rating.html", []).run(["$templateCache",
    function (a) {
        a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
    }
]), angular.module("template/tabs/tab.html", []).run(["$templateCache",
    function (a) {
        a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
    }
]), angular.module("template/tabs/tabset-titles.html", []).run(["$templateCache",
    function (a) {
        a.put("template/tabs/tabset-titles.html", "<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n</ul>\n")
    }
]), angular.module("template/tabs/tabset.html", []).run(["$templateCache",
    function (a) {
        a.put("template/tabs/tabset.html", '\n<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
    }
]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache",
    function (a) {
        a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
    }
]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache",
    function (a) {
        a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
    }
]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache",
    function (a) {
        a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-if="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>')
    }
]);
