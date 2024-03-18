import { reactive as zr, ref as re, computed as je, onUnmounted as Vr } from "vue";
var U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function W(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yr = Array.isArray, m = Yr, Wr = typeof U == "object" && U && U.Object === Object && U, yr = Wr, Xr = yr, Jr = typeof self == "object" && self && self.Object === Object && self, Zr = Xr || Jr || Function("return this")(), T = Zr, Qr = T, kr = Qr.Symbol, F = kr, Ie = F, pr = Object.prototype, et = pr.hasOwnProperty, rt = pr.toString, D = Ie ? Ie.toStringTag : void 0;
function tt(e) {
  var r = et.call(e, D), t = e[D];
  try {
    e[D] = void 0;
    var a = !0;
  } catch {
  }
  var i = rt.call(e);
  return a && (r ? e[D] = t : delete e[D]), i;
}
var at = tt, nt = Object.prototype, it = nt.toString;
function st(e) {
  return it.call(e);
}
var ot = st, Pe = F, ct = at, ut = ot, ft = "[object Null]", lt = "[object Undefined]", Ee = Pe ? Pe.toStringTag : void 0;
function vt(e) {
  return e == null ? e === void 0 ? lt : ft : Ee && Ee in Object(e) ? ct(e) : ut(e);
}
var B = vt;
function gt(e) {
  return e != null && typeof e == "object";
}
var w = gt, $t = B, yt = w, pt = "[object Symbol]";
function _t(e) {
  return typeof e == "symbol" || yt(e) && $t(e) == pt;
}
var le = _t, bt = m, dt = le, ht = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Tt = /^\w*$/;
function At(e, r) {
  if (bt(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || dt(e) ? !0 : Tt.test(e) || !ht.test(e) || r != null && e in Object(r);
}
var St = At;
function Ot(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var j = Ot, mt = B, wt = j, Ct = "[object AsyncFunction]", jt = "[object Function]", It = "[object GeneratorFunction]", Pt = "[object Proxy]";
function Et(e) {
  if (!wt(e))
    return !1;
  var r = mt(e);
  return r == jt || r == It || r == Ct || r == Pt;
}
var _r = Et, xt = T, Mt = xt["__core-js_shared__"], Lt = Mt, te = Lt, xe = function() {
  var e = /[^.]+$/.exec(te && te.keys && te.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Dt(e) {
  return !!xe && xe in e;
}
var Gt = Dt, Ft = Function.prototype, Bt = Ft.toString;
function Nt(e) {
  if (e != null) {
    try {
      return Bt.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var br = Nt, Ut = _r, Rt = Gt, Kt = j, Ht = br, qt = /[\\^$.*+?()[\]{}|]/g, zt = /^\[object .+?Constructor\]$/, Vt = Function.prototype, Yt = Object.prototype, Wt = Vt.toString, Xt = Yt.hasOwnProperty, Jt = RegExp(
  "^" + Wt.call(Xt).replace(qt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Zt(e) {
  if (!Kt(e) || Rt(e))
    return !1;
  var r = Ut(e) ? Jt : zt;
  return r.test(Ht(e));
}
var Qt = Zt;
function kt(e, r) {
  return e == null ? void 0 : e[r];
}
var ea = kt, ra = Qt, ta = ea;
function aa(e, r) {
  var t = ta(e, r);
  return ra(t) ? t : void 0;
}
var C = aa, na = C, ia = na(Object, "create"), X = ia, Me = X;
function sa() {
  this.__data__ = Me ? Me(null) : {}, this.size = 0;
}
var oa = sa;
function ca(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var ua = ca, fa = X, la = "__lodash_hash_undefined__", va = Object.prototype, ga = va.hasOwnProperty;
function $a(e) {
  var r = this.__data__;
  if (fa) {
    var t = r[e];
    return t === la ? void 0 : t;
  }
  return ga.call(r, e) ? r[e] : void 0;
}
var ya = $a, pa = X, _a = Object.prototype, ba = _a.hasOwnProperty;
function da(e) {
  var r = this.__data__;
  return pa ? r[e] !== void 0 : ba.call(r, e);
}
var ha = da, Ta = X, Aa = "__lodash_hash_undefined__";
function Sa(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ta && r === void 0 ? Aa : r, this;
}
var Oa = Sa, ma = oa, wa = ua, Ca = ya, ja = ha, Ia = Oa;
function I(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
I.prototype.clear = ma;
I.prototype.delete = wa;
I.prototype.get = Ca;
I.prototype.has = ja;
I.prototype.set = Ia;
var Pa = I;
function Ea() {
  this.__data__ = [], this.size = 0;
}
var xa = Ea;
function Ma(e, r) {
  return e === r || e !== e && r !== r;
}
var ve = Ma, La = ve;
function Da(e, r) {
  for (var t = e.length; t--; )
    if (La(e[t][0], r))
      return t;
  return -1;
}
var J = Da, Ga = J, Fa = Array.prototype, Ba = Fa.splice;
function Na(e) {
  var r = this.__data__, t = Ga(r, e);
  if (t < 0)
    return !1;
  var a = r.length - 1;
  return t == a ? r.pop() : Ba.call(r, t, 1), --this.size, !0;
}
var Ua = Na, Ra = J;
function Ka(e) {
  var r = this.__data__, t = Ra(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var Ha = Ka, qa = J;
function za(e) {
  return qa(this.__data__, e) > -1;
}
var Va = za, Ya = J;
function Wa(e, r) {
  var t = this.__data__, a = Ya(t, e);
  return a < 0 ? (++this.size, t.push([e, r])) : t[a][1] = r, this;
}
var Xa = Wa, Ja = xa, Za = Ua, Qa = Ha, ka = Va, en = Xa;
function P(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
P.prototype.clear = Ja;
P.prototype.delete = Za;
P.prototype.get = Qa;
P.prototype.has = ka;
P.prototype.set = en;
var Z = P, rn = C, tn = T, an = rn(tn, "Map"), ge = an, Le = Pa, nn = Z, sn = ge;
function on() {
  this.size = 0, this.__data__ = {
    hash: new Le(),
    map: new (sn || nn)(),
    string: new Le()
  };
}
var cn = on;
function un(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var fn = un, ln = fn;
function vn(e, r) {
  var t = e.__data__;
  return ln(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var Q = vn, gn = Q;
function $n(e) {
  var r = gn(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var yn = $n, pn = Q;
function _n(e) {
  return pn(this, e).get(e);
}
var bn = _n, dn = Q;
function hn(e) {
  return dn(this, e).has(e);
}
var Tn = hn, An = Q;
function Sn(e, r) {
  var t = An(this, e), a = t.size;
  return t.set(e, r), this.size += t.size == a ? 0 : 1, this;
}
var On = Sn, mn = cn, wn = yn, Cn = bn, jn = Tn, In = On;
function E(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
E.prototype.clear = mn;
E.prototype.delete = wn;
E.prototype.get = Cn;
E.prototype.has = jn;
E.prototype.set = In;
var $e = E, dr = $e, Pn = "Expected a function";
function ye(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Pn);
  var t = function() {
    var a = arguments, i = r ? r.apply(this, a) : a[0], n = t.cache;
    if (n.has(i))
      return n.get(i);
    var s = e.apply(this, a);
    return t.cache = n.set(i, s) || n, s;
  };
  return t.cache = new (ye.Cache || dr)(), t;
}
ye.Cache = dr;
var En = ye, xn = En, Mn = 500;
function Ln(e) {
  var r = xn(e, function(a) {
    return t.size === Mn && t.clear(), a;
  }), t = r.cache;
  return r;
}
var Dn = Ln, Gn = Dn, Fn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bn = /\\(\\)?/g, Nn = Gn(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Fn, function(t, a, i, n) {
    r.push(i ? n.replace(Bn, "$1") : a || t);
  }), r;
}), Un = Nn;
function Rn(e, r) {
  for (var t = -1, a = e == null ? 0 : e.length, i = Array(a); ++t < a; )
    i[t] = r(e[t], t, e);
  return i;
}
var Kn = Rn, De = F, Hn = Kn, qn = m, zn = le, Vn = 1 / 0, Ge = De ? De.prototype : void 0, Fe = Ge ? Ge.toString : void 0;
function hr(e) {
  if (typeof e == "string")
    return e;
  if (qn(e))
    return Hn(e, hr) + "";
  if (zn(e))
    return Fe ? Fe.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -Vn ? "-0" : r;
}
var Yn = hr, Wn = Yn;
function Xn(e) {
  return e == null ? "" : Wn(e);
}
var Jn = Xn, Zn = m, Qn = St, kn = Un, ei = Jn;
function ri(e, r) {
  return Zn(e) ? e : Qn(e, r) ? [e] : kn(ei(e));
}
var Tr = ri, ti = le, ai = 1 / 0;
function ni(e) {
  if (typeof e == "string" || ti(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -ai ? "-0" : r;
}
var Ar = ni, ii = Tr, si = Ar;
function oi(e, r) {
  r = ii(r, e);
  for (var t = 0, a = r.length; e != null && t < a; )
    e = e[si(r[t++])];
  return t && t == a ? e : void 0;
}
var ci = oi, ui = ci;
function fi(e, r, t) {
  var a = e == null ? void 0 : ui(e, r);
  return a === void 0 ? t : a;
}
var li = fi;
const R = /* @__PURE__ */ W(li);
var vi = C, gi = function() {
  try {
    var e = vi(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), $i = gi, Be = $i;
function yi(e, r, t) {
  r == "__proto__" && Be ? Be(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var Sr = yi, pi = Sr, _i = ve, bi = Object.prototype, di = bi.hasOwnProperty;
function hi(e, r, t) {
  var a = e[r];
  (!(di.call(e, r) && _i(a, t)) || t === void 0 && !(r in e)) && pi(e, r, t);
}
var pe = hi, Ti = 9007199254740991, Ai = /^(?:0|[1-9]\d*)$/;
function Si(e, r) {
  var t = typeof e;
  return r = r ?? Ti, !!r && (t == "number" || t != "symbol" && Ai.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var Or = Si, Oi = pe, mi = Tr, wi = Or, Ne = j, Ci = Ar;
function ji(e, r, t, a) {
  if (!Ne(e))
    return e;
  r = mi(r, e);
  for (var i = -1, n = r.length, s = n - 1, o = e; o != null && ++i < n; ) {
    var c = Ci(r[i]), f = t;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (i != s) {
      var p = o[c];
      f = a ? a(p, c, o) : void 0, f === void 0 && (f = Ne(p) ? p : wi(r[i + 1]) ? [] : {});
    }
    Oi(o, c, f), o = o[c];
  }
  return e;
}
var Ii = ji, Pi = Ii;
function Ei(e, r, t) {
  return e == null ? e : Pi(e, r, t);
}
var xi = Ei;
const G = /* @__PURE__ */ W(xi);
var Mi = Z;
function Li() {
  this.__data__ = new Mi(), this.size = 0;
}
var Di = Li;
function Gi(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var Fi = Gi;
function Bi(e) {
  return this.__data__.get(e);
}
var Ni = Bi;
function Ui(e) {
  return this.__data__.has(e);
}
var Ri = Ui, Ki = Z, Hi = ge, qi = $e, zi = 200;
function Vi(e, r) {
  var t = this.__data__;
  if (t instanceof Ki) {
    var a = t.__data__;
    if (!Hi || a.length < zi - 1)
      return a.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new qi(a);
  }
  return t.set(e, r), this.size = t.size, this;
}
var Yi = Vi, Wi = Z, Xi = Di, Ji = Fi, Zi = Ni, Qi = Ri, ki = Yi;
function x(e) {
  var r = this.__data__ = new Wi(e);
  this.size = r.size;
}
x.prototype.clear = Xi;
x.prototype.delete = Ji;
x.prototype.get = Zi;
x.prototype.has = Qi;
x.prototype.set = ki;
var mr = x, es = "__lodash_hash_undefined__";
function rs(e) {
  return this.__data__.set(e, es), this;
}
var ts = rs;
function as(e) {
  return this.__data__.has(e);
}
var ns = as, is = $e, ss = ts, os = ns;
function q(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new is(); ++r < t; )
    this.add(e[r]);
}
q.prototype.add = q.prototype.push = ss;
q.prototype.has = os;
var cs = q;
function us(e, r) {
  for (var t = -1, a = e == null ? 0 : e.length; ++t < a; )
    if (r(e[t], t, e))
      return !0;
  return !1;
}
var fs = us;
function ls(e, r) {
  return e.has(r);
}
var vs = ls, gs = cs, $s = fs, ys = vs, ps = 1, _s = 2;
function bs(e, r, t, a, i, n) {
  var s = t & ps, o = e.length, c = r.length;
  if (o != c && !(s && c > o))
    return !1;
  var f = n.get(e), p = n.get(r);
  if (f && p)
    return f == r && p == e;
  var y = -1, g = !0, h = t & _s ? new gs() : void 0;
  for (n.set(e, r), n.set(r, e); ++y < o; ) {
    var _ = e[y], b = r[y];
    if (a)
      var u = s ? a(b, _, y, r, e, n) : a(_, b, y, e, r, n);
    if (u !== void 0) {
      if (u)
        continue;
      g = !1;
      break;
    }
    if (h) {
      if (!$s(r, function(l, d) {
        if (!ys(h, d) && (_ === l || i(_, l, t, a, n)))
          return h.push(d);
      })) {
        g = !1;
        break;
      }
    } else if (!(_ === b || i(_, b, t, a, n))) {
      g = !1;
      break;
    }
  }
  return n.delete(e), n.delete(r), g;
}
var wr = bs, ds = T, hs = ds.Uint8Array, Cr = hs;
function Ts(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(a, i) {
    t[++r] = [i, a];
  }), t;
}
var As = Ts;
function Ss(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(a) {
    t[++r] = a;
  }), t;
}
var Os = Ss, Ue = F, Re = Cr, ms = ve, ws = wr, Cs = As, js = Os, Is = 1, Ps = 2, Es = "[object Boolean]", xs = "[object Date]", Ms = "[object Error]", Ls = "[object Map]", Ds = "[object Number]", Gs = "[object RegExp]", Fs = "[object Set]", Bs = "[object String]", Ns = "[object Symbol]", Us = "[object ArrayBuffer]", Rs = "[object DataView]", Ke = Ue ? Ue.prototype : void 0, ae = Ke ? Ke.valueOf : void 0;
function Ks(e, r, t, a, i, n, s) {
  switch (t) {
    case Rs:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case Us:
      return !(e.byteLength != r.byteLength || !n(new Re(e), new Re(r)));
    case Es:
    case xs:
    case Ds:
      return ms(+e, +r);
    case Ms:
      return e.name == r.name && e.message == r.message;
    case Gs:
    case Bs:
      return e == r + "";
    case Ls:
      var o = Cs;
    case Fs:
      var c = a & Is;
      if (o || (o = js), e.size != r.size && !c)
        return !1;
      var f = s.get(e);
      if (f)
        return f == r;
      a |= Ps, s.set(e, r);
      var p = ws(o(e), o(r), a, i, n, s);
      return s.delete(e), p;
    case Ns:
      if (ae)
        return ae.call(e) == ae.call(r);
  }
  return !1;
}
var Hs = Ks;
function qs(e, r) {
  for (var t = -1, a = r.length, i = e.length; ++t < a; )
    e[i + t] = r[t];
  return e;
}
var jr = qs, zs = jr, Vs = m;
function Ys(e, r, t) {
  var a = r(e);
  return Vs(e) ? a : zs(a, t(e));
}
var Ir = Ys;
function Ws(e, r) {
  for (var t = -1, a = e == null ? 0 : e.length, i = 0, n = []; ++t < a; ) {
    var s = e[t];
    r(s, t, e) && (n[i++] = s);
  }
  return n;
}
var Xs = Ws;
function Js() {
  return [];
}
var Pr = Js, Zs = Xs, Qs = Pr, ks = Object.prototype, eo = ks.propertyIsEnumerable, He = Object.getOwnPropertySymbols, ro = He ? function(e) {
  return e == null ? [] : (e = Object(e), Zs(He(e), function(r) {
    return eo.call(e, r);
  }));
} : Qs, _e = ro;
function to(e, r) {
  for (var t = -1, a = Array(e); ++t < e; )
    a[t] = r(t);
  return a;
}
var ao = to, no = B, io = w, so = "[object Arguments]";
function oo(e) {
  return io(e) && no(e) == so;
}
var co = oo, qe = co, uo = w, Er = Object.prototype, fo = Er.hasOwnProperty, lo = Er.propertyIsEnumerable, vo = qe(/* @__PURE__ */ function() {
  return arguments;
}()) ? qe : function(e) {
  return uo(e) && fo.call(e, "callee") && !lo.call(e, "callee");
}, go = vo, z = { exports: {} };
function $o() {
  return !1;
}
var yo = $o;
z.exports;
(function(e, r) {
  var t = T, a = yo, i = r && !r.nodeType && r, n = i && !0 && e && !e.nodeType && e, s = n && n.exports === i, o = s ? t.Buffer : void 0, c = o ? o.isBuffer : void 0, f = c || a;
  e.exports = f;
})(z, z.exports);
var be = z.exports, po = 9007199254740991;
function _o(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= po;
}
var xr = _o, bo = B, ho = xr, To = w, Ao = "[object Arguments]", So = "[object Array]", Oo = "[object Boolean]", mo = "[object Date]", wo = "[object Error]", Co = "[object Function]", jo = "[object Map]", Io = "[object Number]", Po = "[object Object]", Eo = "[object RegExp]", xo = "[object Set]", Mo = "[object String]", Lo = "[object WeakMap]", Do = "[object ArrayBuffer]", Go = "[object DataView]", Fo = "[object Float32Array]", Bo = "[object Float64Array]", No = "[object Int8Array]", Uo = "[object Int16Array]", Ro = "[object Int32Array]", Ko = "[object Uint8Array]", Ho = "[object Uint8ClampedArray]", qo = "[object Uint16Array]", zo = "[object Uint32Array]", $ = {};
$[Fo] = $[Bo] = $[No] = $[Uo] = $[Ro] = $[Ko] = $[Ho] = $[qo] = $[zo] = !0;
$[Ao] = $[So] = $[Do] = $[Oo] = $[Go] = $[mo] = $[wo] = $[Co] = $[jo] = $[Io] = $[Po] = $[Eo] = $[xo] = $[Mo] = $[Lo] = !1;
function Vo(e) {
  return To(e) && ho(e.length) && !!$[bo(e)];
}
var Yo = Vo;
function Wo(e) {
  return function(r) {
    return e(r);
  };
}
var de = Wo, V = { exports: {} };
V.exports;
(function(e, r) {
  var t = yr, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, n = i && i.exports === a, s = n && t.process, o = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(V, V.exports);
var he = V.exports, Xo = Yo, Jo = de, ze = he, Ve = ze && ze.isTypedArray, Zo = Ve ? Jo(Ve) : Xo, Mr = Zo, Qo = ao, ko = go, ec = m, rc = be, tc = Or, ac = Mr, nc = Object.prototype, ic = nc.hasOwnProperty;
function sc(e, r) {
  var t = ec(e), a = !t && ko(e), i = !t && !a && rc(e), n = !t && !a && !i && ac(e), s = t || a || i || n, o = s ? Qo(e.length, String) : [], c = o.length;
  for (var f in e)
    (r || ic.call(e, f)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    tc(f, c))) && o.push(f);
  return o;
}
var Lr = sc, oc = Object.prototype;
function cc(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || oc;
  return e === t;
}
var Te = cc;
function uc(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var Dr = uc, fc = Dr, lc = fc(Object.keys, Object), vc = lc, gc = Te, $c = vc, yc = Object.prototype, pc = yc.hasOwnProperty;
function _c(e) {
  if (!gc(e))
    return $c(e);
  var r = [];
  for (var t in Object(e))
    pc.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var bc = _c, dc = _r, hc = xr;
function Tc(e) {
  return e != null && hc(e.length) && !dc(e);
}
var Gr = Tc, Ac = Lr, Sc = bc, Oc = Gr;
function mc(e) {
  return Oc(e) ? Ac(e) : Sc(e);
}
var Ae = mc, wc = Ir, Cc = _e, jc = Ae;
function Ic(e) {
  return wc(e, jc, Cc);
}
var Fr = Ic, Ye = Fr, Pc = 1, Ec = Object.prototype, xc = Ec.hasOwnProperty;
function Mc(e, r, t, a, i, n) {
  var s = t & Pc, o = Ye(e), c = o.length, f = Ye(r), p = f.length;
  if (c != p && !s)
    return !1;
  for (var y = c; y--; ) {
    var g = o[y];
    if (!(s ? g in r : xc.call(r, g)))
      return !1;
  }
  var h = n.get(e), _ = n.get(r);
  if (h && _)
    return h == r && _ == e;
  var b = !0;
  n.set(e, r), n.set(r, e);
  for (var u = s; ++y < c; ) {
    g = o[y];
    var l = e[g], d = r[g];
    if (a)
      var L = s ? a(d, l, g, r, e, n) : a(l, d, g, e, r, n);
    if (!(L === void 0 ? l === d || i(l, d, t, a, n) : L)) {
      b = !1;
      break;
    }
    u || (u = g == "constructor");
  }
  if (b && !u) {
    var A = e.constructor, S = r.constructor;
    A != S && "constructor" in e && "constructor" in r && !(typeof A == "function" && A instanceof A && typeof S == "function" && S instanceof S) && (b = !1);
  }
  return n.delete(e), n.delete(r), b;
}
var Lc = Mc, Dc = C, Gc = T, Fc = Dc(Gc, "DataView"), Bc = Fc, Nc = C, Uc = T, Rc = Nc(Uc, "Promise"), Kc = Rc, Hc = C, qc = T, zc = Hc(qc, "Set"), Vc = zc, Yc = C, Wc = T, Xc = Yc(Wc, "WeakMap"), Jc = Xc, se = Bc, oe = ge, ce = Kc, ue = Vc, fe = Jc, Br = B, M = br, We = "[object Map]", Zc = "[object Object]", Xe = "[object Promise]", Je = "[object Set]", Ze = "[object WeakMap]", Qe = "[object DataView]", Qc = M(se), kc = M(oe), eu = M(ce), ru = M(ue), tu = M(fe), O = Br;
(se && O(new se(new ArrayBuffer(1))) != Qe || oe && O(new oe()) != We || ce && O(ce.resolve()) != Xe || ue && O(new ue()) != Je || fe && O(new fe()) != Ze) && (O = function(e) {
  var r = Br(e), t = r == Zc ? e.constructor : void 0, a = t ? M(t) : "";
  if (a)
    switch (a) {
      case Qc:
        return Qe;
      case kc:
        return We;
      case eu:
        return Xe;
      case ru:
        return Je;
      case tu:
        return Ze;
    }
  return r;
});
var k = O, ne = mr, au = wr, nu = Hs, iu = Lc, ke = k, er = m, rr = be, su = Mr, ou = 1, tr = "[object Arguments]", ar = "[object Array]", K = "[object Object]", cu = Object.prototype, nr = cu.hasOwnProperty;
function uu(e, r, t, a, i, n) {
  var s = er(e), o = er(r), c = s ? ar : ke(e), f = o ? ar : ke(r);
  c = c == tr ? K : c, f = f == tr ? K : f;
  var p = c == K, y = f == K, g = c == f;
  if (g && rr(e)) {
    if (!rr(r))
      return !1;
    s = !0, p = !1;
  }
  if (g && !p)
    return n || (n = new ne()), s || su(e) ? au(e, r, t, a, i, n) : nu(e, r, c, t, a, i, n);
  if (!(t & ou)) {
    var h = p && nr.call(e, "__wrapped__"), _ = y && nr.call(r, "__wrapped__");
    if (h || _) {
      var b = h ? e.value() : e, u = _ ? r.value() : r;
      return n || (n = new ne()), i(b, u, t, a, n);
    }
  }
  return g ? (n || (n = new ne()), iu(e, r, t, a, i, n)) : !1;
}
var fu = uu, lu = fu, ir = w;
function Nr(e, r, t, a, i) {
  return e === r ? !0 : e == null || r == null || !ir(e) && !ir(r) ? e !== e && r !== r : lu(e, r, t, a, Nr, i);
}
var vu = Nr, gu = vu;
function $u(e, r) {
  return gu(e, r);
}
var yu = $u;
const pu = /* @__PURE__ */ W(yu);
function _u(e, r) {
  for (var t = -1, a = e == null ? 0 : e.length; ++t < a && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var bu = _u, du = pe, hu = Sr;
function Tu(e, r, t, a) {
  var i = !t;
  t || (t = {});
  for (var n = -1, s = r.length; ++n < s; ) {
    var o = r[n], c = a ? a(t[o], e[o], o, t, e) : void 0;
    c === void 0 && (c = e[o]), i ? hu(t, o, c) : du(t, o, c);
  }
  return t;
}
var ee = Tu, Au = ee, Su = Ae;
function Ou(e, r) {
  return e && Au(r, Su(r), e);
}
var mu = Ou;
function wu(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var Cu = wu, ju = j, Iu = Te, Pu = Cu, Eu = Object.prototype, xu = Eu.hasOwnProperty;
function Mu(e) {
  if (!ju(e))
    return Pu(e);
  var r = Iu(e), t = [];
  for (var a in e)
    a == "constructor" && (r || !xu.call(e, a)) || t.push(a);
  return t;
}
var Lu = Mu, Du = Lr, Gu = Lu, Fu = Gr;
function Bu(e) {
  return Fu(e) ? Du(e, !0) : Gu(e);
}
var Se = Bu, Nu = ee, Uu = Se;
function Ru(e, r) {
  return e && Nu(r, Uu(r), e);
}
var Ku = Ru, Y = { exports: {} };
Y.exports;
(function(e, r) {
  var t = T, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, n = i && i.exports === a, s = n ? t.Buffer : void 0, o = s ? s.allocUnsafe : void 0;
  function c(f, p) {
    if (p)
      return f.slice();
    var y = f.length, g = o ? o(y) : new f.constructor(y);
    return f.copy(g), g;
  }
  e.exports = c;
})(Y, Y.exports);
var Hu = Y.exports;
function qu(e, r) {
  var t = -1, a = e.length;
  for (r || (r = Array(a)); ++t < a; )
    r[t] = e[t];
  return r;
}
var zu = qu, Vu = ee, Yu = _e;
function Wu(e, r) {
  return Vu(e, Yu(e), r);
}
var Xu = Wu, Ju = Dr, Zu = Ju(Object.getPrototypeOf, Object), Ur = Zu, Qu = jr, ku = Ur, ef = _e, rf = Pr, tf = Object.getOwnPropertySymbols, af = tf ? function(e) {
  for (var r = []; e; )
    Qu(r, ef(e)), e = ku(e);
  return r;
} : rf, Rr = af, nf = ee, sf = Rr;
function of(e, r) {
  return nf(e, sf(e), r);
}
var cf = of, uf = Ir, ff = Rr, lf = Se;
function vf(e) {
  return uf(e, lf, ff);
}
var gf = vf, $f = Object.prototype, yf = $f.hasOwnProperty;
function pf(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && yf.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var _f = pf, sr = Cr;
function bf(e) {
  var r = new e.constructor(e.byteLength);
  return new sr(r).set(new sr(e)), r;
}
var Oe = bf, df = Oe;
function hf(e, r) {
  var t = r ? df(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Tf = hf, Af = /\w*$/;
function Sf(e) {
  var r = new e.constructor(e.source, Af.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var Of = Sf, or = F, cr = or ? or.prototype : void 0, ur = cr ? cr.valueOf : void 0;
function mf(e) {
  return ur ? Object(ur.call(e)) : {};
}
var wf = mf, Cf = Oe;
function jf(e, r) {
  var t = r ? Cf(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var If = jf, Pf = Oe, Ef = Tf, xf = Of, Mf = wf, Lf = If, Df = "[object Boolean]", Gf = "[object Date]", Ff = "[object Map]", Bf = "[object Number]", Nf = "[object RegExp]", Uf = "[object Set]", Rf = "[object String]", Kf = "[object Symbol]", Hf = "[object ArrayBuffer]", qf = "[object DataView]", zf = "[object Float32Array]", Vf = "[object Float64Array]", Yf = "[object Int8Array]", Wf = "[object Int16Array]", Xf = "[object Int32Array]", Jf = "[object Uint8Array]", Zf = "[object Uint8ClampedArray]", Qf = "[object Uint16Array]", kf = "[object Uint32Array]";
function el(e, r, t) {
  var a = e.constructor;
  switch (r) {
    case Hf:
      return Pf(e);
    case Df:
    case Gf:
      return new a(+e);
    case qf:
      return Ef(e, t);
    case zf:
    case Vf:
    case Yf:
    case Wf:
    case Xf:
    case Jf:
    case Zf:
    case Qf:
    case kf:
      return Lf(e, t);
    case Ff:
      return new a();
    case Bf:
    case Rf:
      return new a(e);
    case Nf:
      return xf(e);
    case Uf:
      return new a();
    case Kf:
      return Mf(e);
  }
}
var rl = el, tl = j, fr = Object.create, al = /* @__PURE__ */ function() {
  function e() {
  }
  return function(r) {
    if (!tl(r))
      return {};
    if (fr)
      return fr(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), nl = al, il = nl, sl = Ur, ol = Te;
function cl(e) {
  return typeof e.constructor == "function" && !ol(e) ? il(sl(e)) : {};
}
var ul = cl, fl = k, ll = w, vl = "[object Map]";
function gl(e) {
  return ll(e) && fl(e) == vl;
}
var $l = gl, yl = $l, pl = de, lr = he, vr = lr && lr.isMap, _l = vr ? pl(vr) : yl, bl = _l, dl = k, hl = w, Tl = "[object Set]";
function Al(e) {
  return hl(e) && dl(e) == Tl;
}
var Sl = Al, Ol = Sl, ml = de, gr = he, $r = gr && gr.isSet, wl = $r ? ml($r) : Ol, Cl = wl, jl = mr, Il = bu, Pl = pe, El = mu, xl = Ku, Ml = Hu, Ll = zu, Dl = Xu, Gl = cf, Fl = Fr, Bl = gf, Nl = k, Ul = _f, Rl = rl, Kl = ul, Hl = m, ql = be, zl = bl, Vl = j, Yl = Cl, Wl = Ae, Xl = Se, Jl = 1, Zl = 2, Ql = 4, Kr = "[object Arguments]", kl = "[object Array]", ev = "[object Boolean]", rv = "[object Date]", tv = "[object Error]", Hr = "[object Function]", av = "[object GeneratorFunction]", nv = "[object Map]", iv = "[object Number]", qr = "[object Object]", sv = "[object RegExp]", ov = "[object Set]", cv = "[object String]", uv = "[object Symbol]", fv = "[object WeakMap]", lv = "[object ArrayBuffer]", vv = "[object DataView]", gv = "[object Float32Array]", $v = "[object Float64Array]", yv = "[object Int8Array]", pv = "[object Int16Array]", _v = "[object Int32Array]", bv = "[object Uint8Array]", dv = "[object Uint8ClampedArray]", hv = "[object Uint16Array]", Tv = "[object Uint32Array]", v = {};
v[Kr] = v[kl] = v[lv] = v[vv] = v[ev] = v[rv] = v[gv] = v[$v] = v[yv] = v[pv] = v[_v] = v[nv] = v[iv] = v[qr] = v[sv] = v[ov] = v[cv] = v[uv] = v[bv] = v[dv] = v[hv] = v[Tv] = !0;
v[tv] = v[Hr] = v[fv] = !1;
function H(e, r, t, a, i, n) {
  var s, o = r & Jl, c = r & Zl, f = r & Ql;
  if (t && (s = i ? t(e, a, i, n) : t(e)), s !== void 0)
    return s;
  if (!Vl(e))
    return e;
  var p = Hl(e);
  if (p) {
    if (s = Ul(e), !o)
      return Ll(e, s);
  } else {
    var y = Nl(e), g = y == Hr || y == av;
    if (ql(e))
      return Ml(e, o);
    if (y == qr || y == Kr || g && !i) {
      if (s = c || g ? {} : Kl(e), !o)
        return c ? Gl(e, xl(s, e)) : Dl(e, El(s, e));
    } else {
      if (!v[y])
        return i ? e : {};
      s = Rl(e, y, o);
    }
  }
  n || (n = new jl());
  var h = n.get(e);
  if (h)
    return h;
  n.set(e, s), Yl(e) ? e.forEach(function(u) {
    s.add(H(u, r, t, u, e, n));
  }) : zl(e) && e.forEach(function(u, l) {
    s.set(l, H(u, r, t, l, e, n));
  });
  var _ = f ? c ? Bl : Fl : c ? Xl : Wl, b = p ? void 0 : _(e);
  return Il(b || e, function(u, l) {
    b && (l = u, u = e[l]), Pl(s, l, H(u, r, t, l, e, n));
  }), s;
}
var Av = H, Sv = Av, Ov = 1, mv = 4;
function wv(e) {
  return Sv(e, Ov | mv);
}
var Cv = wv;
const ie = /* @__PURE__ */ W(Cv);
function jv(e) {
  window.scrollTo({
    top: e - 200 + window.scrollY,
    behavior: "smooth"
  });
}
function Pv(e) {
  const r = {}, t = zr({ value: ie(e.initialValues), update: (/* @__PURE__ */ new Date()).getTime() }), a = re(!1), i = re({}), n = je(() => {
    var u;
    return Object.keys(i.value).length ? i.value : (u = e.validate) == null ? void 0 : u.call(e, t.value);
  }), s = je(() => !Object.keys(n.value).length), o = (u) => {
    pu(e.initialValues, t.value) || (u.returnValue = e.detectChangesMsg);
  };
  e.detectChangesMsg && (window.addEventListener("beforeunload", o), Vr(() => {
    window.removeEventListener("beforeunload", o);
  }));
  const c = () => {
    var A;
    if (!e.scrollToFirstError)
      return;
    let u = 0, l = "";
    (e.errorsResolver ? e.errorsResolver(n.value) : Object.keys(n.value)).forEach((S) => {
      var Ce;
      const N = R(r, S);
      if (!N)
        return;
      const me = (Ce = N == null ? void 0 : N.value) == null ? void 0 : Ce.value;
      if (!me)
        return;
      const we = me.getBoundingClientRect().top;
      (we < u || !u) && (u = we, l = S);
    }), (((A = e.beforeScroll) == null ? void 0 : A.call(e, l)) || !0) && u && jv(u);
  }, f = (u) => {
    const l = {};
    for (const [d, L] of Object.entries(u))
      G(l, d, L);
    i.value = l, c();
  }, p = () => {
    a.value = !0, i.value = {}, t.update = (/* @__PURE__ */ new Date()).getTime(), s.value && (e.onSubmit(t.value), window.removeEventListener("beforeunload", o));
  };
  function y(u) {
    const l = re(null);
    return G(r, u, l), {
      ref: (d) => {
        l.value = d;
      },
      name: u,
      modelValue: R(t, `value.${u}`),
      error: a.value ? R(n.value, u) : null
    };
  }
  const g = (u) => R(n.value, u), h = async (u, l) => {
    var d;
    G(t, `value.${l}`, u), G(i.value, l, void 0), (d = e.onUpdate) == null || d.call(e, l, u), e.submitOnChange && p();
  }, _ = () => {
    G(t, "value", ie(e.initialValues)), i.value = {}, e.submitOnChange && p();
  }, b = (u) => {
    t.value = ie(u);
  };
  return {
    value: t,
    submit: p,
    input: y,
    error: g,
    setResponseErrors: f,
    inputChangeHandler: h,
    isValid: s.value,
    reset: _,
    setValues: b,
    errors: n
  };
}
export {
  Pv as default
};
