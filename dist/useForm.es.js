import { reactive as wt, ref as ee, computed as Oe, onUnmounted as mt } from "vue";
import { scrollTo as St } from "./scrollTo.es.js";
var S = Array.isArray, Qe = typeof global == "object" && global && global.Object === Object && global, jt = typeof self == "object" && self && self.Object === Object && self, A = Qe || jt || Function("return this")(), $ = A.Symbol, Ve = Object.prototype, Pt = Ve.hasOwnProperty, Et = Ve.toString, N = $ ? $.toStringTag : void 0;
function xt(e) {
  var t = Pt.call(e, N), r = e[N];
  try {
    e[N] = void 0;
    var n = !0;
  } catch {
  }
  var o = Et.call(e);
  return n && (t ? e[N] = r : delete e[N]), o;
}
var It = Object.prototype, Ct = It.toString;
function Lt(e) {
  return Ct.call(e);
}
var Mt = "[object Null]", Ft = "[object Undefined]", we = $ ? $.toStringTag : void 0;
function R(e) {
  return e == null ? e === void 0 ? Ft : Mt : we && we in Object(e) ? xt(e) : Lt(e);
}
function j(e) {
  return e != null && typeof e == "object";
}
var Rt = "[object Symbol]";
function ce(e) {
  return typeof e == "symbol" || j(e) && R(e) == Rt;
}
var Dt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Nt = /^\w*$/;
function Ut(e, t) {
  if (S(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || ce(e) ? !0 : Nt.test(e) || !Dt.test(e) || t != null && e in Object(t);
}
function I(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Bt = "[object AsyncFunction]", Gt = "[object Function]", Ht = "[object GeneratorFunction]", zt = "[object Proxy]";
function ke(e) {
  if (!I(e))
    return !1;
  var t = R(e);
  return t == Gt || t == Ht || t == Bt || t == zt;
}
var te = A["__core-js_shared__"], me = function() {
  var e = /[^.]+$/.exec(te && te.keys && te.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Kt(e) {
  return !!me && me in e;
}
var Yt = Function.prototype, qt = Yt.toString;
function L(e) {
  if (e != null) {
    try {
      return qt.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xt = /[\\^$.*+?()[\]{}|]/g, Wt = /^\[object .+?Constructor\]$/, Zt = Function.prototype, Jt = Object.prototype, Qt = Zt.toString, Vt = Jt.hasOwnProperty, kt = RegExp(
  "^" + Qt.call(Vt).replace(Xt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function er(e) {
  if (!I(e) || Kt(e))
    return !1;
  var t = ke(e) ? kt : Wt;
  return t.test(L(e));
}
function tr(e, t) {
  return e == null ? void 0 : e[t];
}
function M(e, t) {
  var r = tr(e, t);
  return er(r) ? r : void 0;
}
var G = M(Object, "create");
function rr() {
  this.__data__ = G ? G(null) : {}, this.size = 0;
}
function nr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ar = "__lodash_hash_undefined__", or = Object.prototype, ir = or.hasOwnProperty;
function sr(e) {
  var t = this.__data__;
  if (G) {
    var r = t[e];
    return r === ar ? void 0 : r;
  }
  return ir.call(t, e) ? t[e] : void 0;
}
var ur = Object.prototype, fr = ur.hasOwnProperty;
function cr(e) {
  var t = this.__data__;
  return G ? t[e] !== void 0 : fr.call(t, e);
}
var lr = "__lodash_hash_undefined__";
function gr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = G && t === void 0 ? lr : t, this;
}
function C(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
C.prototype.clear = rr;
C.prototype.delete = nr;
C.prototype.get = sr;
C.prototype.has = cr;
C.prototype.set = gr;
function dr() {
  this.__data__ = [], this.size = 0;
}
function le(e, t) {
  return e === t || e !== e && t !== t;
}
function Q(e, t) {
  for (var r = e.length; r--; )
    if (le(e[r][0], t))
      return r;
  return -1;
}
var pr = Array.prototype, yr = pr.splice;
function hr(e) {
  var t = this.__data__, r = Q(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : yr.call(t, r, 1), --this.size, !0;
}
function br(e) {
  var t = this.__data__, r = Q(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function vr(e) {
  return Q(this.__data__, e) > -1;
}
function _r(e, t) {
  var r = this.__data__, n = Q(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function w(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
w.prototype.clear = dr;
w.prototype.delete = hr;
w.prototype.get = br;
w.prototype.has = vr;
w.prototype.set = _r;
var H = M(A, "Map");
function Tr() {
  this.size = 0, this.__data__ = {
    hash: new C(),
    map: new (H || w)(),
    string: new C()
  };
}
function $r(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function V(e, t) {
  var r = e.__data__;
  return $r(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Ar(e) {
  var t = V(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Or(e) {
  return V(this, e).get(e);
}
function wr(e) {
  return V(this, e).has(e);
}
function mr(e, t) {
  var r = V(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function m(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
m.prototype.clear = Tr;
m.prototype.delete = Ar;
m.prototype.get = Or;
m.prototype.has = wr;
m.prototype.set = mr;
var Sr = "Expected a function";
function ge(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Sr);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, n);
    return r.cache = a.set(o, i) || a, i;
  };
  return r.cache = new (ge.Cache || m)(), r;
}
ge.Cache = m;
var jr = 500;
function Pr(e) {
  var t = ge(e, function(n) {
    return r.size === jr && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Er = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xr = /\\(\\)?/g, Ir = Pr(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Er, function(r, n, o, a) {
    t.push(o ? a.replace(xr, "$1") : n || r);
  }), t;
});
function Cr(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var Lr = 1 / 0, Se = $ ? $.prototype : void 0, je = Se ? Se.toString : void 0;
function et(e) {
  if (typeof e == "string")
    return e;
  if (S(e))
    return Cr(e, et) + "";
  if (ce(e))
    return je ? je.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Lr ? "-0" : t;
}
function Mr(e) {
  return e == null ? "" : et(e);
}
function tt(e, t) {
  return S(e) ? e : Ut(e, t) ? [e] : Ir(Mr(e));
}
var Fr = 1 / 0;
function rt(e) {
  if (typeof e == "string" || ce(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Fr ? "-0" : t;
}
function Rr(e, t) {
  t = tt(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[rt(t[r++])];
  return r && r == n ? e : void 0;
}
function Y(e, t, r) {
  var n = e == null ? void 0 : Rr(e, t);
  return n === void 0 ? r : n;
}
var Pe = function() {
  try {
    var e = M(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function nt(e, t, r) {
  t == "__proto__" && Pe ? Pe(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Dr = Object.prototype, Nr = Dr.hasOwnProperty;
function de(e, t, r) {
  var n = e[t];
  (!(Nr.call(e, t) && le(n, r)) || r === void 0 && !(t in e)) && nt(e, t, r);
}
var Ur = 9007199254740991, Br = /^(?:0|[1-9]\d*)$/;
function at(e, t) {
  var r = typeof e;
  return t = t ?? Ur, !!t && (r == "number" || r != "symbol" && Br.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Gr(e, t, r, n) {
  if (!I(e))
    return e;
  t = tt(t, e);
  for (var o = -1, a = t.length, i = a - 1, u = e; u != null && ++o < a; ) {
    var f = rt(t[o]), c = r;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (o != i) {
      var y = u[f];
      c = n ? n(y, f, u) : void 0, c === void 0 && (c = I(y) ? y : at(t[o + 1]) ? [] : {});
    }
    de(u, f, c), u = u[f];
  }
  return e;
}
function U(e, t, r) {
  return e == null ? e : Gr(e, t, r);
}
function Hr() {
  this.__data__ = new w(), this.size = 0;
}
function zr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Kr(e) {
  return this.__data__.get(e);
}
function Yr(e) {
  return this.__data__.has(e);
}
var qr = 200;
function Xr(e, t) {
  var r = this.__data__;
  if (r instanceof w) {
    var n = r.__data__;
    if (!H || n.length < qr - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new m(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function O(e) {
  var t = this.__data__ = new w(e);
  this.size = t.size;
}
O.prototype.clear = Hr;
O.prototype.delete = zr;
O.prototype.get = Kr;
O.prototype.has = Yr;
O.prototype.set = Xr;
var Wr = "__lodash_hash_undefined__";
function Zr(e) {
  return this.__data__.set(e, Wr), this;
}
function Jr(e) {
  return this.__data__.has(e);
}
function W(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new m(); ++t < r; )
    this.add(e[t]);
}
W.prototype.add = W.prototype.push = Zr;
W.prototype.has = Jr;
function Qr(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Vr(e, t) {
  return e.has(t);
}
var kr = 1, en = 2;
function ot(e, t, r, n, o, a) {
  var i = r & kr, u = e.length, f = t.length;
  if (u != f && !(i && f > u))
    return !1;
  var c = a.get(e), y = a.get(t);
  if (c && y)
    return c == t && y == e;
  var h = -1, p = !0, T = r & en ? new W() : void 0;
  for (a.set(e, t), a.set(t, e); ++h < u; ) {
    var b = e[h], v = t[h];
    if (n)
      var s = i ? n(v, b, h, t, e, a) : n(b, v, h, e, t, a);
    if (s !== void 0) {
      if (s)
        continue;
      p = !1;
      break;
    }
    if (T) {
      if (!Qr(t, function(l, _) {
        if (!Vr(T, _) && (b === l || o(b, l, r, n, a)))
          return T.push(_);
      })) {
        p = !1;
        break;
      }
    } else if (!(b === v || o(b, v, r, n, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
var Z = A.Uint8Array;
function tn(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, o) {
    r[++t] = [o, n];
  }), r;
}
function rn(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var nn = 1, an = 2, on = "[object Boolean]", sn = "[object Date]", un = "[object Error]", fn = "[object Map]", cn = "[object Number]", ln = "[object RegExp]", gn = "[object Set]", dn = "[object String]", pn = "[object Symbol]", yn = "[object ArrayBuffer]", hn = "[object DataView]", Ee = $ ? $.prototype : void 0, re = Ee ? Ee.valueOf : void 0;
function bn(e, t, r, n, o, a, i) {
  switch (r) {
    case hn:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case yn:
      return !(e.byteLength != t.byteLength || !a(new Z(e), new Z(t)));
    case on:
    case sn:
    case cn:
      return le(+e, +t);
    case un:
      return e.name == t.name && e.message == t.message;
    case ln:
    case dn:
      return e == t + "";
    case fn:
      var u = tn;
    case gn:
      var f = n & nn;
      if (u || (u = rn), e.size != t.size && !f)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      n |= an, i.set(e, t);
      var y = ot(u(e), u(t), n, o, a, i);
      return i.delete(e), y;
    case pn:
      if (re)
        return re.call(e) == re.call(t);
  }
  return !1;
}
function it(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
function st(e, t, r) {
  var n = t(e);
  return S(e) ? n : it(n, r(e));
}
function vn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (a[o++] = i);
  }
  return a;
}
function ut() {
  return [];
}
var _n = Object.prototype, Tn = _n.propertyIsEnumerable, xe = Object.getOwnPropertySymbols, pe = xe ? function(e) {
  return e == null ? [] : (e = Object(e), vn(xe(e), function(t) {
    return Tn.call(e, t);
  }));
} : ut;
function $n(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var An = "[object Arguments]";
function Ie(e) {
  return j(e) && R(e) == An;
}
var ft = Object.prototype, On = ft.hasOwnProperty, wn = ft.propertyIsEnumerable, mn = Ie(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ie : function(e) {
  return j(e) && On.call(e, "callee") && !wn.call(e, "callee");
};
function Sn() {
  return !1;
}
var ct = typeof exports == "object" && exports && !exports.nodeType && exports, Ce = ct && typeof module == "object" && module && !module.nodeType && module, jn = Ce && Ce.exports === ct, Le = jn ? A.Buffer : void 0, Pn = Le ? Le.isBuffer : void 0, J = Pn || Sn, En = 9007199254740991;
function lt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= En;
}
var xn = "[object Arguments]", In = "[object Array]", Cn = "[object Boolean]", Ln = "[object Date]", Mn = "[object Error]", Fn = "[object Function]", Rn = "[object Map]", Dn = "[object Number]", Nn = "[object Object]", Un = "[object RegExp]", Bn = "[object Set]", Gn = "[object String]", Hn = "[object WeakMap]", zn = "[object ArrayBuffer]", Kn = "[object DataView]", Yn = "[object Float32Array]", qn = "[object Float64Array]", Xn = "[object Int8Array]", Wn = "[object Int16Array]", Zn = "[object Int32Array]", Jn = "[object Uint8Array]", Qn = "[object Uint8ClampedArray]", Vn = "[object Uint16Array]", kn = "[object Uint32Array]", d = {};
d[Yn] = d[qn] = d[Xn] = d[Wn] = d[Zn] = d[Jn] = d[Qn] = d[Vn] = d[kn] = !0;
d[xn] = d[In] = d[zn] = d[Cn] = d[Kn] = d[Ln] = d[Mn] = d[Fn] = d[Rn] = d[Dn] = d[Nn] = d[Un] = d[Bn] = d[Gn] = d[Hn] = !1;
function ea(e) {
  return j(e) && lt(e.length) && !!d[R(e)];
}
function ye(e) {
  return function(t) {
    return e(t);
  };
}
var gt = typeof exports == "object" && exports && !exports.nodeType && exports, B = gt && typeof module == "object" && module && !module.nodeType && module, ta = B && B.exports === gt, ne = ta && Qe.process, F = function() {
  try {
    var e = B && B.require && B.require("util").types;
    return e || ne && ne.binding && ne.binding("util");
  } catch {
  }
}(), Me = F && F.isTypedArray, dt = Me ? ye(Me) : ea, ra = Object.prototype, na = ra.hasOwnProperty;
function pt(e, t) {
  var r = S(e), n = !r && mn(e), o = !r && !n && J(e), a = !r && !n && !o && dt(e), i = r || n || o || a, u = i ? $n(e.length, String) : [], f = u.length;
  for (var c in e)
    (t || na.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    at(c, f))) && u.push(c);
  return u;
}
var aa = Object.prototype;
function he(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || aa;
  return e === r;
}
function yt(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var oa = yt(Object.keys, Object), ia = Object.prototype, sa = ia.hasOwnProperty;
function ua(e) {
  if (!he(e))
    return oa(e);
  var t = [];
  for (var r in Object(e))
    sa.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ht(e) {
  return e != null && lt(e.length) && !ke(e);
}
function be(e) {
  return ht(e) ? pt(e) : ua(e);
}
function oe(e) {
  return st(e, be, pe);
}
var fa = 1, ca = Object.prototype, la = ca.hasOwnProperty;
function ga(e, t, r, n, o, a) {
  var i = r & fa, u = oe(e), f = u.length, c = oe(t), y = c.length;
  if (f != y && !i)
    return !1;
  for (var h = f; h--; ) {
    var p = u[h];
    if (!(i ? p in t : la.call(t, p)))
      return !1;
  }
  var T = a.get(e), b = a.get(t);
  if (T && b)
    return T == t && b == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var s = i; ++h < f; ) {
    p = u[h];
    var l = e[p], _ = t[p];
    if (n)
      var D = i ? n(_, l, p, t, e, a) : n(l, _, p, e, t, a);
    if (!(D === void 0 ? l === _ || o(l, _, r, n, a) : D)) {
      v = !1;
      break;
    }
    s || (s = p == "constructor");
  }
  if (v && !s) {
    var P = e.constructor, E = t.constructor;
    P != E && "constructor" in e && "constructor" in t && !(typeof P == "function" && P instanceof P && typeof E == "function" && E instanceof E) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var ie = M(A, "DataView"), se = M(A, "Promise"), ue = M(A, "Set"), fe = M(A, "WeakMap"), Fe = "[object Map]", da = "[object Object]", Re = "[object Promise]", De = "[object Set]", Ne = "[object WeakMap]", Ue = "[object DataView]", pa = L(ie), ya = L(H), ha = L(se), ba = L(ue), va = L(fe), x = R;
(ie && x(new ie(new ArrayBuffer(1))) != Ue || H && x(new H()) != Fe || se && x(se.resolve()) != Re || ue && x(new ue()) != De || fe && x(new fe()) != Ne) && (x = function(e) {
  var t = R(e), r = t == da ? e.constructor : void 0, n = r ? L(r) : "";
  if (n)
    switch (n) {
      case pa:
        return Ue;
      case ya:
        return Fe;
      case ha:
        return Re;
      case ba:
        return De;
      case va:
        return Ne;
    }
  return t;
});
const z = x;
var _a = 1, Be = "[object Arguments]", Ge = "[object Array]", q = "[object Object]", Ta = Object.prototype, He = Ta.hasOwnProperty;
function $a(e, t, r, n, o, a) {
  var i = S(e), u = S(t), f = i ? Ge : z(e), c = u ? Ge : z(t);
  f = f == Be ? q : f, c = c == Be ? q : c;
  var y = f == q, h = c == q, p = f == c;
  if (p && J(e)) {
    if (!J(t))
      return !1;
    i = !0, y = !1;
  }
  if (p && !y)
    return a || (a = new O()), i || dt(e) ? ot(e, t, r, n, o, a) : bn(e, t, f, r, n, o, a);
  if (!(r & _a)) {
    var T = y && He.call(e, "__wrapped__"), b = h && He.call(t, "__wrapped__");
    if (T || b) {
      var v = T ? e.value() : e, s = b ? t.value() : t;
      return a || (a = new O()), o(v, s, r, n, a);
    }
  }
  return p ? (a || (a = new O()), ga(e, t, r, n, o, a)) : !1;
}
function bt(e, t, r, n, o) {
  return e === t ? !0 : e == null || t == null || !j(e) && !j(t) ? e !== e && t !== t : $a(e, t, r, n, bt, o);
}
function Aa(e, t) {
  return bt(e, t);
}
function Oa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function k(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var u = t[a], f = n ? n(r[u], e[u], u, r, e) : void 0;
    f === void 0 && (f = e[u]), o ? nt(r, u, f) : de(r, u, f);
  }
  return r;
}
function wa(e, t) {
  return e && k(t, be(t), e);
}
function ma(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Sa = Object.prototype, ja = Sa.hasOwnProperty;
function Pa(e) {
  if (!I(e))
    return ma(e);
  var t = he(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !ja.call(e, n)) || r.push(n);
  return r;
}
function ve(e) {
  return ht(e) ? pt(e, !0) : Pa(e);
}
function Ea(e, t) {
  return e && k(t, ve(t), e);
}
var vt = typeof exports == "object" && exports && !exports.nodeType && exports, ze = vt && typeof module == "object" && module && !module.nodeType && module, xa = ze && ze.exports === vt, Ke = xa ? A.Buffer : void 0, Ye = Ke ? Ke.allocUnsafe : void 0;
function Ia(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Ye ? Ye(r) : new e.constructor(r);
  return e.copy(n), n;
}
function Ca(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
function La(e, t) {
  return k(e, pe(e), t);
}
var Ma = yt(Object.getPrototypeOf, Object);
const _t = Ma;
var Fa = Object.getOwnPropertySymbols, Tt = Fa ? function(e) {
  for (var t = []; e; )
    it(t, pe(e)), e = _t(e);
  return t;
} : ut;
function Ra(e, t) {
  return k(e, Tt(e), t);
}
function Da(e) {
  return st(e, ve, Tt);
}
var Na = Object.prototype, Ua = Na.hasOwnProperty;
function Ba(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Ua.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
function _e(e) {
  var t = new e.constructor(e.byteLength);
  return new Z(t).set(new Z(e)), t;
}
function Ga(e, t) {
  var r = t ? _e(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Ha = /\w*$/;
function za(e) {
  var t = new e.constructor(e.source, Ha.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var qe = $ ? $.prototype : void 0, Xe = qe ? qe.valueOf : void 0;
function Ka(e) {
  return Xe ? Object(Xe.call(e)) : {};
}
function Ya(e, t) {
  var r = t ? _e(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var qa = "[object Boolean]", Xa = "[object Date]", Wa = "[object Map]", Za = "[object Number]", Ja = "[object RegExp]", Qa = "[object Set]", Va = "[object String]", ka = "[object Symbol]", eo = "[object ArrayBuffer]", to = "[object DataView]", ro = "[object Float32Array]", no = "[object Float64Array]", ao = "[object Int8Array]", oo = "[object Int16Array]", io = "[object Int32Array]", so = "[object Uint8Array]", uo = "[object Uint8ClampedArray]", fo = "[object Uint16Array]", co = "[object Uint32Array]";
function lo(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case eo:
      return _e(e);
    case qa:
    case Xa:
      return new n(+e);
    case to:
      return Ga(e, r);
    case ro:
    case no:
    case ao:
    case oo:
    case io:
    case so:
    case uo:
    case fo:
    case co:
      return Ya(e, r);
    case Wa:
      return new n();
    case Za:
    case Va:
      return new n(e);
    case Ja:
      return za(e);
    case Qa:
      return new n();
    case ka:
      return Ka(e);
  }
}
var We = Object.create, go = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!I(t))
      return {};
    if (We)
      return We(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function po(e) {
  return typeof e.constructor == "function" && !he(e) ? go(_t(e)) : {};
}
var yo = "[object Map]";
function ho(e) {
  return j(e) && z(e) == yo;
}
var Ze = F && F.isMap, bo = Ze ? ye(Ze) : ho, vo = "[object Set]";
function _o(e) {
  return j(e) && z(e) == vo;
}
var Je = F && F.isSet, To = Je ? ye(Je) : _o, $o = 1, Ao = 2, Oo = 4, $t = "[object Arguments]", wo = "[object Array]", mo = "[object Boolean]", So = "[object Date]", jo = "[object Error]", At = "[object Function]", Po = "[object GeneratorFunction]", Eo = "[object Map]", xo = "[object Number]", Ot = "[object Object]", Io = "[object RegExp]", Co = "[object Set]", Lo = "[object String]", Mo = "[object Symbol]", Fo = "[object WeakMap]", Ro = "[object ArrayBuffer]", Do = "[object DataView]", No = "[object Float32Array]", Uo = "[object Float64Array]", Bo = "[object Int8Array]", Go = "[object Int16Array]", Ho = "[object Int32Array]", zo = "[object Uint8Array]", Ko = "[object Uint8ClampedArray]", Yo = "[object Uint16Array]", qo = "[object Uint32Array]", g = {};
g[$t] = g[wo] = g[Ro] = g[Do] = g[mo] = g[So] = g[No] = g[Uo] = g[Bo] = g[Go] = g[Ho] = g[Eo] = g[xo] = g[Ot] = g[Io] = g[Co] = g[Lo] = g[Mo] = g[zo] = g[Ko] = g[Yo] = g[qo] = !0;
g[jo] = g[At] = g[Fo] = !1;
function X(e, t, r, n, o, a) {
  var i, u = t & $o, f = t & Ao, c = t & Oo;
  if (r && (i = o ? r(e, n, o, a) : r(e)), i !== void 0)
    return i;
  if (!I(e))
    return e;
  var y = S(e);
  if (y) {
    if (i = Ba(e), !u)
      return Ca(e, i);
  } else {
    var h = z(e), p = h == At || h == Po;
    if (J(e))
      return Ia(e, u);
    if (h == Ot || h == $t || p && !o) {
      if (i = f || p ? {} : po(e), !u)
        return f ? Ra(e, Ea(i, e)) : La(e, wa(i, e));
    } else {
      if (!g[h])
        return o ? e : {};
      i = lo(e, h, u);
    }
  }
  a || (a = new O());
  var T = a.get(e);
  if (T)
    return T;
  a.set(e, i), To(e) ? e.forEach(function(s) {
    i.add(X(s, t, r, s, e, a));
  }) : bo(e) && e.forEach(function(s, l) {
    i.set(l, X(s, t, r, l, e, a));
  });
  var b = c ? f ? Da : oe : f ? ve : be, v = y ? void 0 : b(e);
  return Oa(v || e, function(s, l) {
    v && (l = s, s = e[l]), de(i, l, X(s, t, r, l, e, a));
  }), i;
}
var Xo = 1, Wo = 4;
function ae(e) {
  return X(e, Xo | Wo);
}
function Qo(e) {
  const t = {}, r = wt({ value: ae(e.initialValues), update: (/* @__PURE__ */ new Date()).getTime() }), n = ee(!1), o = ee({}), a = Oe(() => {
    var s;
    return Object.keys(o.value).length ? o.value : (s = e.validate) == null ? void 0 : s.call(e, r.value);
  }), i = Oe(() => !Object.keys(a.value).length), u = (s) => {
    Aa(e.initialValues, r.value) || (s.returnValue = e.detectChangesMsg);
  };
  e.detectChangesMsg && (window.addEventListener("beforeunload", u), mt(() => {
    window.removeEventListener("beforeunload", u);
  }));
  const f = () => {
    var P;
    if (!e.scrollToFirstError)
      return;
    let s = 0, l = "";
    (e.errorsResolver ? e.errorsResolver(a.value) : Object.keys(a.value)).forEach((E) => {
      var Ae;
      const K = Y(t, E);
      if (!K)
        return;
      const Te = (Ae = K == null ? void 0 : K.value) == null ? void 0 : Ae.value;
      if (!Te)
        return;
      const $e = Te.getBoundingClientRect().top;
      ($e < s || !s) && (s = $e, l = E);
    }), (((P = e.beforeScroll) == null ? void 0 : P.call(e, l)) || !0) && s && St(s);
  }, c = (s) => {
    const l = {};
    for (const [_, D] of Object.entries(s))
      U(l, _, D);
    o.value = l, f();
  }, y = () => {
    n.value = !0, o.value = {}, r.update = (/* @__PURE__ */ new Date()).getTime(), i.value && (e.onSubmit(r.value), window.removeEventListener("beforeunload", u));
  };
  function h(s) {
    const l = ee(null);
    return U(t, s, l), {
      ref: (_) => {
        l.value = _;
      },
      name: s,
      modelValue: Y(r, `value.${s}`),
      error: n.value ? Y(a.value, s) : null
    };
  }
  const p = (s) => Y(a.value, s), T = async (s, l) => {
    var _;
    U(r, `value.${l}`, s), U(o.value, l, void 0), (_ = e.onUpdate) == null || _.call(e, l, s), e.submitOnChange && y();
  }, b = () => {
    U(r, "value", ae(e.initialValues)), o.value = {}, e.submitOnChange && y();
  }, v = (s) => {
    r.value = ae(s);
  };
  return {
    value: r,
    submit: y,
    input: h,
    error: p,
    setResponseErrors: c,
    inputChangeHandler: T,
    isValid: i.value,
    reset: b,
    setValues: v,
    errors: a
  };
}
export {
  Qo as default
};
