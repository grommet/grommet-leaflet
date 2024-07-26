import { jsxs as Bn, jsx as gt } from "react/jsx-runtime";
import Et, { useRef as se, useEffect as Bt, createContext as Da, useContext as ce, forwardRef as fe, useImperativeHandle as An, useState as Zn, useMemo as ja } from "react";
import si, { ThemeContext as Dt, css as yo } from "styled-components";
import { Box as ve, Text as Fa, Button as mn } from "grommet";
import { createPortal as Na } from "react-dom";
import kn from "react-dom/server";
var bo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wo(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Cn = { exports: {} }, zi = { exports: {} }, _t = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function Ua() {
  if (qr) return _t;
  qr = 1;
  var i = typeof Symbol == "function" && Symbol.for, s = i ? Symbol.for("react.element") : 60103, r = i ? Symbol.for("react.portal") : 60106, a = i ? Symbol.for("react.fragment") : 60107, u = i ? Symbol.for("react.strict_mode") : 60108, o = i ? Symbol.for("react.profiler") : 60114, h = i ? Symbol.for("react.provider") : 60109, c = i ? Symbol.for("react.context") : 60110, f = i ? Symbol.for("react.async_mode") : 60111, _ = i ? Symbol.for("react.concurrent_mode") : 60111, v = i ? Symbol.for("react.forward_ref") : 60112, p = i ? Symbol.for("react.suspense") : 60113, y = i ? Symbol.for("react.suspense_list") : 60120, b = i ? Symbol.for("react.memo") : 60115, k = i ? Symbol.for("react.lazy") : 60116, S = i ? Symbol.for("react.block") : 60121, B = i ? Symbol.for("react.fundamental") : 60117, A = i ? Symbol.for("react.responder") : 60118, w = i ? Symbol.for("react.scope") : 60119;
  function T(z) {
    if (typeof z == "object" && z !== null) {
      var Z = z.$$typeof;
      switch (Z) {
        case s:
          switch (z = z.type, z) {
            case f:
            case _:
            case a:
            case o:
            case u:
            case p:
              return z;
            default:
              switch (z = z && z.$$typeof, z) {
                case c:
                case v:
                case k:
                case b:
                case h:
                  return z;
                default:
                  return Z;
              }
          }
        case r:
          return Z;
      }
    }
  }
  function C(z) {
    return T(z) === _;
  }
  return _t.AsyncMode = f, _t.ConcurrentMode = _, _t.ContextConsumer = c, _t.ContextProvider = h, _t.Element = s, _t.ForwardRef = v, _t.Fragment = a, _t.Lazy = k, _t.Memo = b, _t.Portal = r, _t.Profiler = o, _t.StrictMode = u, _t.Suspense = p, _t.isAsyncMode = function(z) {
    return C(z) || T(z) === f;
  }, _t.isConcurrentMode = C, _t.isContextConsumer = function(z) {
    return T(z) === c;
  }, _t.isContextProvider = function(z) {
    return T(z) === h;
  }, _t.isElement = function(z) {
    return typeof z == "object" && z !== null && z.$$typeof === s;
  }, _t.isForwardRef = function(z) {
    return T(z) === v;
  }, _t.isFragment = function(z) {
    return T(z) === a;
  }, _t.isLazy = function(z) {
    return T(z) === k;
  }, _t.isMemo = function(z) {
    return T(z) === b;
  }, _t.isPortal = function(z) {
    return T(z) === r;
  }, _t.isProfiler = function(z) {
    return T(z) === o;
  }, _t.isStrictMode = function(z) {
    return T(z) === u;
  }, _t.isSuspense = function(z) {
    return T(z) === p;
  }, _t.isValidElementType = function(z) {
    return typeof z == "string" || typeof z == "function" || z === a || z === _ || z === o || z === u || z === p || z === y || typeof z == "object" && z !== null && (z.$$typeof === k || z.$$typeof === b || z.$$typeof === h || z.$$typeof === c || z.$$typeof === v || z.$$typeof === B || z.$$typeof === A || z.$$typeof === w || z.$$typeof === S);
  }, _t.typeOf = T, _t;
}
var mt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function Va() {
  return Xr || (Xr = 1, process.env.NODE_ENV !== "production" && function() {
    var i = typeof Symbol == "function" && Symbol.for, s = i ? Symbol.for("react.element") : 60103, r = i ? Symbol.for("react.portal") : 60106, a = i ? Symbol.for("react.fragment") : 60107, u = i ? Symbol.for("react.strict_mode") : 60108, o = i ? Symbol.for("react.profiler") : 60114, h = i ? Symbol.for("react.provider") : 60109, c = i ? Symbol.for("react.context") : 60110, f = i ? Symbol.for("react.async_mode") : 60111, _ = i ? Symbol.for("react.concurrent_mode") : 60111, v = i ? Symbol.for("react.forward_ref") : 60112, p = i ? Symbol.for("react.suspense") : 60113, y = i ? Symbol.for("react.suspense_list") : 60120, b = i ? Symbol.for("react.memo") : 60115, k = i ? Symbol.for("react.lazy") : 60116, S = i ? Symbol.for("react.block") : 60121, B = i ? Symbol.for("react.fundamental") : 60117, A = i ? Symbol.for("react.responder") : 60118, w = i ? Symbol.for("react.scope") : 60119;
    function T(H) {
      return typeof H == "string" || typeof H == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      H === a || H === _ || H === o || H === u || H === p || H === y || typeof H == "object" && H !== null && (H.$$typeof === k || H.$$typeof === b || H.$$typeof === h || H.$$typeof === c || H.$$typeof === v || H.$$typeof === B || H.$$typeof === A || H.$$typeof === w || H.$$typeof === S);
    }
    function C(H) {
      if (typeof H == "object" && H !== null) {
        var Ot = H.$$typeof;
        switch (Ot) {
          case s:
            var be = H.type;
            switch (be) {
              case f:
              case _:
              case a:
              case o:
              case u:
              case p:
                return be;
              default:
                var De = be && be.$$typeof;
                switch (De) {
                  case c:
                  case v:
                  case k:
                  case b:
                  case h:
                    return De;
                  default:
                    return Ot;
                }
            }
          case r:
            return Ot;
        }
      }
    }
    var z = f, Z = _, R = c, N = h, $ = s, it = v, J = a, rt = k, ot = b, g = r, P = o, M = u, W = p, D = !1;
    function Q(H) {
      return D || (D = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(H) || C(H) === f;
    }
    function E(H) {
      return C(H) === _;
    }
    function F(H) {
      return C(H) === c;
    }
    function U(H) {
      return C(H) === h;
    }
    function X(H) {
      return typeof H == "object" && H !== null && H.$$typeof === s;
    }
    function G(H) {
      return C(H) === v;
    }
    function q(H) {
      return C(H) === a;
    }
    function V(H) {
      return C(H) === k;
    }
    function tt(H) {
      return C(H) === b;
    }
    function nt(H) {
      return C(H) === r;
    }
    function ct(H) {
      return C(H) === o;
    }
    function ht(H) {
      return C(H) === u;
    }
    function Tt(H) {
      return C(H) === p;
    }
    mt.AsyncMode = z, mt.ConcurrentMode = Z, mt.ContextConsumer = R, mt.ContextProvider = N, mt.Element = $, mt.ForwardRef = it, mt.Fragment = J, mt.Lazy = rt, mt.Memo = ot, mt.Portal = g, mt.Profiler = P, mt.StrictMode = M, mt.Suspense = W, mt.isAsyncMode = Q, mt.isConcurrentMode = E, mt.isContextConsumer = F, mt.isContextProvider = U, mt.isElement = X, mt.isForwardRef = G, mt.isFragment = q, mt.isLazy = V, mt.isMemo = tt, mt.isPortal = nt, mt.isProfiler = ct, mt.isStrictMode = ht, mt.isSuspense = Tt, mt.isValidElementType = T, mt.typeOf = C;
  }()), mt;
}
var $r;
function xo() {
  return $r || ($r = 1, process.env.NODE_ENV === "production" ? zi.exports = Ua() : zi.exports = Va()), zi.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pn, Kr;
function Ha() {
  if (Kr) return pn;
  Kr = 1;
  var i = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function a(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var h = {}, c = 0; c < 10; c++)
        h["_" + String.fromCharCode(c)] = c;
      var f = Object.getOwnPropertyNames(h).map(function(v) {
        return h[v];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var _ = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        _[v] = v;
      }), Object.keys(Object.assign({}, _)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pn = u() ? Object.assign : function(o, h) {
    for (var c, f = a(o), _, v = 1; v < arguments.length; v++) {
      c = Object(arguments[v]);
      for (var p in c)
        s.call(c, p) && (f[p] = c[p]);
      if (i) {
        _ = i(c);
        for (var y = 0; y < _.length; y++)
          r.call(c, _[y]) && (f[_[y]] = c[_[y]]);
      }
    }
    return f;
  }, pn;
}
var gn, Jr;
function Rn() {
  if (Jr) return gn;
  Jr = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return gn = i, gn;
}
var vn, Qr;
function Lo() {
  return Qr || (Qr = 1, vn = Function.call.bind(Object.prototype.hasOwnProperty)), vn;
}
var yn, to;
function Wa() {
  if (to) return yn;
  to = 1;
  var i = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = Rn(), r = {}, a = Lo();
    i = function(o) {
      var h = "Warning: " + o;
      typeof console < "u" && console.error(h);
      try {
        throw new Error(h);
      } catch {
      }
    };
  }
  function u(o, h, c, f, _) {
    if (process.env.NODE_ENV !== "production") {
      for (var v in o)
        if (a(o, v)) {
          var p;
          try {
            if (typeof o[v] != "function") {
              var y = Error(
                (f || "React class") + ": " + c + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            p = o[v](h, v, f, c, null, s);
          } catch (k) {
            p = k;
          }
          if (p && !(p instanceof Error) && i(
            (f || "React class") + ": type specification of " + c + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var b = _ ? _() : "";
            i(
              "Failed " + c + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return u.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, yn = u, yn;
}
var bn, eo;
function Ya() {
  if (eo) return bn;
  eo = 1;
  var i = xo(), s = Ha(), r = Rn(), a = Lo(), u = Wa(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(c) {
    var f = "Warning: " + c;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function h() {
    return null;
  }
  return bn = function(c, f) {
    var _ = typeof Symbol == "function" && Symbol.iterator, v = "@@iterator";
    function p(E) {
      var F = E && (_ && E[_] || E[v]);
      if (typeof F == "function")
        return F;
    }
    var y = "<<anonymous>>", b = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: w(),
      arrayOf: T,
      element: C(),
      elementType: z(),
      instanceOf: Z,
      node: it(),
      objectOf: N,
      oneOf: R,
      oneOfType: $,
      shape: rt,
      exact: ot
    };
    function k(E, F) {
      return E === F ? E !== 0 || 1 / E === 1 / F : E !== E && F !== F;
    }
    function S(E, F) {
      this.message = E, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    S.prototype = Error.prototype;
    function B(E) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, U = 0;
      function X(q, V, tt, nt, ct, ht, Tt) {
        if (nt = nt || y, ht = ht || tt, Tt !== r) {
          if (f) {
            var H = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw H.name = "Invariant Violation", H;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ot = nt + ":" + tt;
            !F[Ot] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + ht + "` prop on `" + nt + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[Ot] = !0, U++);
          }
        }
        return V[tt] == null ? q ? V[tt] === null ? new S("The " + ct + " `" + ht + "` is marked as required " + ("in `" + nt + "`, but its value is `null`.")) : new S("The " + ct + " `" + ht + "` is marked as required in " + ("`" + nt + "`, but its value is `undefined`.")) : null : E(V, tt, nt, ct, ht);
      }
      var G = X.bind(null, !1);
      return G.isRequired = X.bind(null, !0), G;
    }
    function A(E) {
      function F(U, X, G, q, V, tt) {
        var nt = U[X], ct = M(nt);
        if (ct !== E) {
          var ht = W(nt);
          return new S(
            "Invalid " + q + " `" + V + "` of type " + ("`" + ht + "` supplied to `" + G + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return B(F);
    }
    function w() {
      return B(h);
    }
    function T(E) {
      function F(U, X, G, q, V) {
        if (typeof E != "function")
          return new S("Property `" + V + "` of component `" + G + "` has invalid PropType notation inside arrayOf.");
        var tt = U[X];
        if (!Array.isArray(tt)) {
          var nt = M(tt);
          return new S("Invalid " + q + " `" + V + "` of type " + ("`" + nt + "` supplied to `" + G + "`, expected an array."));
        }
        for (var ct = 0; ct < tt.length; ct++) {
          var ht = E(tt, ct, G, q, V + "[" + ct + "]", r);
          if (ht instanceof Error)
            return ht;
        }
        return null;
      }
      return B(F);
    }
    function C() {
      function E(F, U, X, G, q) {
        var V = F[U];
        if (!c(V)) {
          var tt = M(V);
          return new S("Invalid " + G + " `" + q + "` of type " + ("`" + tt + "` supplied to `" + X + "`, expected a single ReactElement."));
        }
        return null;
      }
      return B(E);
    }
    function z() {
      function E(F, U, X, G, q) {
        var V = F[U];
        if (!i.isValidElementType(V)) {
          var tt = M(V);
          return new S("Invalid " + G + " `" + q + "` of type " + ("`" + tt + "` supplied to `" + X + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return B(E);
    }
    function Z(E) {
      function F(U, X, G, q, V) {
        if (!(U[X] instanceof E)) {
          var tt = E.name || y, nt = Q(U[X]);
          return new S("Invalid " + q + " `" + V + "` of type " + ("`" + nt + "` supplied to `" + G + "`, expected ") + ("instance of `" + tt + "`."));
        }
        return null;
      }
      return B(F);
    }
    function R(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), h;
      function F(U, X, G, q, V) {
        for (var tt = U[X], nt = 0; nt < E.length; nt++)
          if (k(tt, E[nt]))
            return null;
        var ct = JSON.stringify(E, function(Tt, H) {
          var Ot = W(H);
          return Ot === "symbol" ? String(H) : H;
        });
        return new S("Invalid " + q + " `" + V + "` of value `" + String(tt) + "` " + ("supplied to `" + G + "`, expected one of " + ct + "."));
      }
      return B(F);
    }
    function N(E) {
      function F(U, X, G, q, V) {
        if (typeof E != "function")
          return new S("Property `" + V + "` of component `" + G + "` has invalid PropType notation inside objectOf.");
        var tt = U[X], nt = M(tt);
        if (nt !== "object")
          return new S("Invalid " + q + " `" + V + "` of type " + ("`" + nt + "` supplied to `" + G + "`, expected an object."));
        for (var ct in tt)
          if (a(tt, ct)) {
            var ht = E(tt, ct, G, q, V + "." + ct, r);
            if (ht instanceof Error)
              return ht;
          }
        return null;
      }
      return B(F);
    }
    function $(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), h;
      for (var F = 0; F < E.length; F++) {
        var U = E[F];
        if (typeof U != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + D(U) + " at index " + F + "."
          ), h;
      }
      function X(G, q, V, tt, nt) {
        for (var ct = [], ht = 0; ht < E.length; ht++) {
          var Tt = E[ht], H = Tt(G, q, V, tt, nt, r);
          if (H == null)
            return null;
          H.data && a(H.data, "expectedType") && ct.push(H.data.expectedType);
        }
        var Ot = ct.length > 0 ? ", expected one of type [" + ct.join(", ") + "]" : "";
        return new S("Invalid " + tt + " `" + nt + "` supplied to " + ("`" + V + "`" + Ot + "."));
      }
      return B(X);
    }
    function it() {
      function E(F, U, X, G, q) {
        return g(F[U]) ? null : new S("Invalid " + G + " `" + q + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return B(E);
    }
    function J(E, F, U, X, G) {
      return new S(
        (E || "React class") + ": " + F + " type `" + U + "." + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + G + "`."
      );
    }
    function rt(E) {
      function F(U, X, G, q, V) {
        var tt = U[X], nt = M(tt);
        if (nt !== "object")
          return new S("Invalid " + q + " `" + V + "` of type `" + nt + "` " + ("supplied to `" + G + "`, expected `object`."));
        for (var ct in E) {
          var ht = E[ct];
          if (typeof ht != "function")
            return J(G, q, V, ct, W(ht));
          var Tt = ht(tt, ct, G, q, V + "." + ct, r);
          if (Tt)
            return Tt;
        }
        return null;
      }
      return B(F);
    }
    function ot(E) {
      function F(U, X, G, q, V) {
        var tt = U[X], nt = M(tt);
        if (nt !== "object")
          return new S("Invalid " + q + " `" + V + "` of type `" + nt + "` " + ("supplied to `" + G + "`, expected `object`."));
        var ct = s({}, U[X], E);
        for (var ht in ct) {
          var Tt = E[ht];
          if (a(E, ht) && typeof Tt != "function")
            return J(G, q, V, ht, W(Tt));
          if (!Tt)
            return new S(
              "Invalid " + q + " `" + V + "` key `" + ht + "` supplied to `" + G + "`.\nBad object: " + JSON.stringify(U[X], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var H = Tt(tt, ht, G, q, V + "." + ht, r);
          if (H)
            return H;
        }
        return null;
      }
      return B(F);
    }
    function g(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(g);
          if (E === null || c(E))
            return !0;
          var F = p(E);
          if (F) {
            var U = F.call(E), X;
            if (F !== E.entries) {
              for (; !(X = U.next()).done; )
                if (!g(X.value))
                  return !1;
            } else
              for (; !(X = U.next()).done; ) {
                var G = X.value;
                if (G && !g(G[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function P(E, F) {
      return E === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function M(E) {
      var F = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : P(F, E) ? "symbol" : F;
    }
    function W(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var F = M(E);
      if (F === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function D(E) {
      var F = W(E);
      switch (F) {
        case "array":
        case "object":
          return "an " + F;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + F;
        default:
          return F;
      }
    }
    function Q(E) {
      return !E.constructor || !E.constructor.name ? y : E.constructor.name;
    }
    return b.checkPropTypes = u, b.resetWarningCache = u.resetWarningCache, b.PropTypes = b, b;
  }, bn;
}
var wn, io;
function Ga() {
  if (io) return wn;
  io = 1;
  var i = Rn();
  function s() {
  }
  function r() {
  }
  return r.resetWarningCache = s, wn = function() {
    function a(h, c, f, _, v, p) {
      if (p !== i) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    a.isRequired = a;
    function u() {
      return a;
    }
    var o = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: u,
      element: a,
      elementType: a,
      instanceOf: u,
      node: a,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: r,
      resetWarningCache: s
    };
    return o.PropTypes = o, o;
  }, wn;
}
if (process.env.NODE_ENV !== "production") {
  var qa = xo(), Xa = !0;
  Cn.exports = Ya()(qa.isElement, Xa);
} else
  Cn.exports = Ga()();
var $a = Cn.exports;
const pt = /* @__PURE__ */ wo($a), no = (i) => i && typeof i == "object" && !Array.isArray(i), ri = (i, ...s) => {
  if (!s.length)
    return i;
  const r = { ...i };
  return s.forEach((a) => {
    no(a) && Object.keys(a).forEach((u) => {
      no(a[u]) ? r[u] ? r[u] = ri(r[u], a[u]) : r[u] = { ...a[u] } : r[u] = a[u];
    });
  }), r;
}, Po = (i) => {
  let s = {};
  return i.forEach((r) => {
    s = ri(s, r);
  }), s;
}, Ka = si(ve)`
  // translate to re-align with leaflet div
  transform: translateX(-35%);
  &:hover {
    transform: translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`, Ja = si(Fa)`
  // multiplier of font-size, for tighter alignment
  line-height: 1rem;
`, To = ({ cluster: i, kind: s = "default", size: r = "medium", ...a }) => {
  var _, v, p, y, b, k, S, B, A, w, T, C, z;
  const u = Et.useContext(Dt), o = Po([
    (p = (v = (_ = u == null ? void 0 : u.map) == null ? void 0 : _.cluster) == null ? void 0 : v.size) == null ? void 0 : p.medium,
    (k = (b = (y = u == null ? void 0 : u.map) == null ? void 0 : y.cluster) == null ? void 0 : b.size) == null ? void 0 : k[r],
    (B = (S = u == null ? void 0 : u.map) == null ? void 0 : S.cluster) == null ? void 0 : B.default,
    (w = (A = u == null ? void 0 : u.map) == null ? void 0 : A.cluster) == null ? void 0 : w[s]
  ]), h = i.getChildCount(), c = (z = (C = (T = u == null ? void 0 : u.map) == null ? void 0 : T.cluster) == null ? void 0 : C[s]) == null ? void 0 : z.icon, f = h;
  return /* @__PURE__ */ Bn(Ka, { ...o == null ? void 0 : o.container, ...a, children: [
    c,
    /* @__PURE__ */ gt(Ja, { ...o == null ? void 0 : o.label, children: f })
  ] });
};
To.propTypes = {
  cluster: pt.object,
  kind: pt.string,
  size: pt.string
};
function ko(i, s) {
  const r = se(s);
  Bt(function() {
    s !== r.current && i.attributionControl != null && (r.current != null && i.attributionControl.removeAttribution(r.current), s != null && i.attributionControl.addAttribution(s)), r.current = s;
  }, [i, s]);
}
const Qa = 1, Co = /* @__PURE__ */ Da(null), Mo = Co.Provider;
function ai() {
  const i = ce(Co);
  if (i == null)
    throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return i;
}
function So(i) {
  function s(r, a) {
    const {
      instance: u,
      context: o
    } = i(r).current;
    return An(a, () => u), r.children == null ? null : /* @__PURE__ */ Et.createElement(Mo, {
      value: o
    }, r.children);
  }
  return /* @__PURE__ */ fe(s);
}
function tl(i) {
  function s(r, a) {
    const [u, o] = Zn(!1), {
      instance: h
    } = i(r, o).current;
    An(a, () => h), Bt(function() {
      u && h.update();
    }, [h, u, r.children]);
    const c = h._contentNode;
    return c ? /* @__PURE__ */ Na(r.children, c) : null;
  }
  return /* @__PURE__ */ fe(s);
}
function zo(i) {
  function s(r, a) {
    const {
      instance: u
    } = i(r).current;
    return An(a, () => u), null;
  }
  return /* @__PURE__ */ fe(s);
}
function el(i) {
  return function(r) {
    const a = ai(), u = i(r, a), {
      instance: o
    } = u.current, h = se(r.position), {
      position: c
    } = r;
    return Bt(function() {
      return o.addTo(a.map), function() {
        o.remove();
      };
    }, [a.map, o]), Bt(function() {
      c != null && c !== h.current && (o.setPosition(c), h.current = c);
    }, [o, c]), u;
  };
}
function Dn(i, s) {
  const r = se();
  Bt(function() {
    return s != null && i.instance.on(s), r.current = s, function() {
      r.current != null && i.instance.off(r.current), r.current = null;
    };
  }, [i, s]);
}
function Ai(i, s) {
  const r = i.pane ?? s.pane;
  return r ? {
    ...i,
    pane: r
  } : i;
}
function il(i, s) {
  return function(a, u) {
    const o = ai(), h = i(Ai(a, o), o);
    return ko(o.map, a.attribution), Dn(h.current, a.eventHandlers), s(h.current, o, a, u), h;
  };
}
var Mn = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(i, s) {
  (function(r, a) {
    a(s);
  })(bo, function(r) {
    var a = "1.9.4";
    function u(t) {
      var e, n, l, d;
      for (n = 1, l = arguments.length; n < l; n++) {
        d = arguments[n];
        for (e in d)
          t[e] = d[e];
      }
      return t;
    }
    var o = Object.create || /* @__PURE__ */ function() {
      function t() {
      }
      return function(e) {
        return t.prototype = e, new t();
      };
    }();
    function h(t, e) {
      var n = Array.prototype.slice;
      if (t.bind)
        return t.bind.apply(t, n.call(arguments, 1));
      var l = n.call(arguments, 2);
      return function() {
        return t.apply(e, l.length ? l.concat(n.call(arguments)) : arguments);
      };
    }
    var c = 0;
    function f(t) {
      return "_leaflet_id" in t || (t._leaflet_id = ++c), t._leaflet_id;
    }
    function _(t, e, n) {
      var l, d, m, x;
      return x = function() {
        l = !1, d && (m.apply(n, d), d = !1);
      }, m = function() {
        l ? d = arguments : (t.apply(n, arguments), setTimeout(x, e), l = !0);
      }, m;
    }
    function v(t, e, n) {
      var l = e[1], d = e[0], m = l - d;
      return t === l && n ? t : ((t - d) % m + m) % m + d;
    }
    function p() {
      return !1;
    }
    function y(t, e) {
      if (e === !1)
        return t;
      var n = Math.pow(10, e === void 0 ? 6 : e);
      return Math.round(t * n) / n;
    }
    function b(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }
    function k(t) {
      return b(t).split(/\s+/);
    }
    function S(t, e) {
      Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? o(t.options) : {});
      for (var n in e)
        t.options[n] = e[n];
      return t.options;
    }
    function B(t, e, n) {
      var l = [];
      for (var d in t)
        l.push(encodeURIComponent(n ? d.toUpperCase() : d) + "=" + encodeURIComponent(t[d]));
      return (!e || e.indexOf("?") === -1 ? "?" : "&") + l.join("&");
    }
    var A = /\{ *([\w_ -]+) *\}/g;
    function w(t, e) {
      return t.replace(A, function(n, l) {
        var d = e[l];
        if (d === void 0)
          throw new Error("No value provided for variable " + n);
        return typeof d == "function" && (d = d(e)), d;
      });
    }
    var T = Array.isArray || function(t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    };
    function C(t, e) {
      for (var n = 0; n < t.length; n++)
        if (t[n] === e)
          return n;
      return -1;
    }
    var z = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function Z(t) {
      return window["webkit" + t] || window["moz" + t] || window["ms" + t];
    }
    var R = 0;
    function N(t) {
      var e = +/* @__PURE__ */ new Date(), n = Math.max(0, 16 - (e - R));
      return R = e + n, window.setTimeout(t, n);
    }
    var $ = window.requestAnimationFrame || Z("RequestAnimationFrame") || N, it = window.cancelAnimationFrame || Z("CancelAnimationFrame") || Z("CancelRequestAnimationFrame") || function(t) {
      window.clearTimeout(t);
    };
    function J(t, e, n) {
      if (n && $ === N)
        t.call(e);
      else
        return $.call(window, h(t, e));
    }
    function rt(t) {
      t && it.call(window, t);
    }
    var ot = {
      __proto__: null,
      extend: u,
      create: o,
      bind: h,
      get lastId() {
        return c;
      },
      stamp: f,
      throttle: _,
      wrapNum: v,
      falseFn: p,
      formatNum: y,
      trim: b,
      splitWords: k,
      setOptions: S,
      getParamString: B,
      template: w,
      isArray: T,
      indexOf: C,
      emptyImageUrl: z,
      requestFn: $,
      cancelFn: it,
      requestAnimFrame: J,
      cancelAnimFrame: rt
    };
    function g() {
    }
    g.extend = function(t) {
      var e = function() {
        S(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, n = e.__super__ = this.prototype, l = o(n);
      l.constructor = e, e.prototype = l;
      for (var d in this)
        Object.prototype.hasOwnProperty.call(this, d) && d !== "prototype" && d !== "__super__" && (e[d] = this[d]);
      return t.statics && u(e, t.statics), t.includes && (P(t.includes), u.apply(null, [l].concat(t.includes))), u(l, t), delete l.statics, delete l.includes, l.options && (l.options = n.options ? o(n.options) : {}, u(l.options, t.options)), l._initHooks = [], l.callInitHooks = function() {
        if (!this._initHooksCalled) {
          n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var m = 0, x = l._initHooks.length; m < x; m++)
            l._initHooks[m].call(this);
        }
      }, e;
    }, g.include = function(t) {
      var e = this.prototype.options;
      return u(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
    }, g.mergeOptions = function(t) {
      return u(this.prototype.options, t), this;
    }, g.addInitHook = function(t) {
      var e = Array.prototype.slice.call(arguments, 1), n = typeof t == "function" ? t : function() {
        this[t].apply(this, e);
      };
      return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(n), this;
    };
    function P(t) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        t = T(t) ? t : [t];
        for (var e = 0; e < t.length; e++)
          t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }
    var M = {
      /* @method on(type: String, fn: Function, context?: Object): this
       * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
       *
       * @alternative
       * @method on(eventMap: Object): this
       * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
       */
      on: function(t, e, n) {
        if (typeof t == "object")
          for (var l in t)
            this._on(l, t[l], e);
        else {
          t = k(t);
          for (var d = 0, m = t.length; d < m; d++)
            this._on(t[d], e, n);
        }
        return this;
      },
      /* @method off(type: String, fn?: Function, context?: Object): this
       * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
       *
       * @alternative
       * @method off(eventMap: Object): this
       * Removes a set of type/listener pairs.
       *
       * @alternative
       * @method off: this
       * Removes all listeners to all events on the object. This includes implicitly attached events.
       */
      off: function(t, e, n) {
        if (!arguments.length)
          delete this._events;
        else if (typeof t == "object")
          for (var l in t)
            this._off(l, t[l], e);
        else {
          t = k(t);
          for (var d = arguments.length === 1, m = 0, x = t.length; m < x; m++)
            d ? this._off(t[m]) : this._off(t[m], e, n);
        }
        return this;
      },
      // attach listener (without syntactic sugar now)
      _on: function(t, e, n, l) {
        if (typeof e != "function") {
          console.warn("wrong listener type: " + typeof e);
          return;
        }
        if (this._listens(t, e, n) === !1) {
          n === this && (n = void 0);
          var d = { fn: e, ctx: n };
          l && (d.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(d);
        }
      },
      _off: function(t, e, n) {
        var l, d, m;
        if (this._events && (l = this._events[t], !!l)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (d = 0, m = l.length; d < m; d++)
                l[d].fn = p;
            delete this._events[t];
            return;
          }
          if (typeof e != "function") {
            console.warn("wrong listener type: " + typeof e);
            return;
          }
          var x = this._listens(t, e, n);
          if (x !== !1) {
            var O = l[x];
            this._firingCount && (O.fn = p, this._events[t] = l = l.slice()), l.splice(x, 1);
          }
        }
      },
      // @method fire(type: String, data?: Object, propagate?: Boolean): this
      // Fires an event of the specified type. You can optionally provide a data
      // object — the first argument of the listener function will contain its
      // properties. The event can optionally be propagated to event parents.
      fire: function(t, e, n) {
        if (!this.listens(t, n))
          return this;
        var l = u({}, e, {
          type: t,
          target: this,
          sourceTarget: e && e.sourceTarget || this
        });
        if (this._events) {
          var d = this._events[t];
          if (d) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var m = 0, x = d.length; m < x; m++) {
              var O = d[m], I = O.fn;
              O.once && this.off(t, I, O.ctx), I.call(O.ctx || this, l);
            }
            this._firingCount--;
          }
        }
        return n && this._propagateEvent(l), this;
      },
      // @method listens(type: String, propagate?: Boolean): Boolean
      // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
      // Returns `true` if a particular event type has any listeners attached to it.
      // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
      listens: function(t, e, n, l) {
        typeof t != "string" && console.warn('"string" type argument expected');
        var d = e;
        typeof e != "function" && (l = !!e, d = void 0, n = void 0);
        var m = this._events && this._events[t];
        if (m && m.length && this._listens(t, d, n) !== !1)
          return !0;
        if (l) {
          for (var x in this._eventParents)
            if (this._eventParents[x].listens(t, e, n, l))
              return !0;
        }
        return !1;
      },
      // returns the index (number) or false
      _listens: function(t, e, n) {
        if (!this._events)
          return !1;
        var l = this._events[t] || [];
        if (!e)
          return !!l.length;
        n === this && (n = void 0);
        for (var d = 0, m = l.length; d < m; d++)
          if (l[d].fn === e && l[d].ctx === n)
            return d;
        return !1;
      },
      // @method once(…): this
      // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
      once: function(t, e, n) {
        if (typeof t == "object")
          for (var l in t)
            this._on(l, t[l], e, !0);
        else {
          t = k(t);
          for (var d = 0, m = t.length; d < m; d++)
            this._on(t[d], e, n, !0);
        }
        return this;
      },
      // @method addEventParent(obj: Evented): this
      // Adds an event parent - an `Evented` that will receive propagated events
      addEventParent: function(t) {
        return this._eventParents = this._eventParents || {}, this._eventParents[f(t)] = t, this;
      },
      // @method removeEventParent(obj: Evented): this
      // Removes an event parent, so it will stop receiving propagated events
      removeEventParent: function(t) {
        return this._eventParents && delete this._eventParents[f(t)], this;
      },
      _propagateEvent: function(t) {
        for (var e in this._eventParents)
          this._eventParents[e].fire(t.type, u({
            layer: t.target,
            propagatedFrom: t.target
          }, t), !0);
      }
    };
    M.addEventListener = M.on, M.removeEventListener = M.clearAllEventListeners = M.off, M.addOneTimeEventListener = M.once, M.fireEvent = M.fire, M.hasEventListeners = M.listens;
    var W = g.extend(M);
    function D(t, e, n) {
      this.x = n ? Math.round(t) : t, this.y = n ? Math.round(e) : e;
    }
    var Q = Math.trunc || function(t) {
      return t > 0 ? Math.floor(t) : Math.ceil(t);
    };
    D.prototype = {
      // @method clone(): Point
      // Returns a copy of the current point.
      clone: function() {
        return new D(this.x, this.y);
      },
      // @method add(otherPoint: Point): Point
      // Returns the result of addition of the current and the given points.
      add: function(t) {
        return this.clone()._add(E(t));
      },
      _add: function(t) {
        return this.x += t.x, this.y += t.y, this;
      },
      // @method subtract(otherPoint: Point): Point
      // Returns the result of subtraction of the given point from the current.
      subtract: function(t) {
        return this.clone()._subtract(E(t));
      },
      _subtract: function(t) {
        return this.x -= t.x, this.y -= t.y, this;
      },
      // @method divideBy(num: Number): Point
      // Returns the result of division of the current point by the given number.
      divideBy: function(t) {
        return this.clone()._divideBy(t);
      },
      _divideBy: function(t) {
        return this.x /= t, this.y /= t, this;
      },
      // @method multiplyBy(num: Number): Point
      // Returns the result of multiplication of the current point by the given number.
      multiplyBy: function(t) {
        return this.clone()._multiplyBy(t);
      },
      _multiplyBy: function(t) {
        return this.x *= t, this.y *= t, this;
      },
      // @method scaleBy(scale: Point): Point
      // Multiply each coordinate of the current point by each coordinate of
      // `scale`. In linear algebra terms, multiply the point by the
      // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
      // defined by `scale`.
      scaleBy: function(t) {
        return new D(this.x * t.x, this.y * t.y);
      },
      // @method unscaleBy(scale: Point): Point
      // Inverse of `scaleBy`. Divide each coordinate of the current point by
      // each coordinate of `scale`.
      unscaleBy: function(t) {
        return new D(this.x / t.x, this.y / t.y);
      },
      // @method round(): Point
      // Returns a copy of the current point with rounded coordinates.
      round: function() {
        return this.clone()._round();
      },
      _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      },
      // @method floor(): Point
      // Returns a copy of the current point with floored coordinates (rounded down).
      floor: function() {
        return this.clone()._floor();
      },
      _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      },
      // @method ceil(): Point
      // Returns a copy of the current point with ceiled coordinates (rounded up).
      ceil: function() {
        return this.clone()._ceil();
      },
      _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      },
      // @method trunc(): Point
      // Returns a copy of the current point with truncated coordinates (rounded towards zero).
      trunc: function() {
        return this.clone()._trunc();
      },
      _trunc: function() {
        return this.x = Q(this.x), this.y = Q(this.y), this;
      },
      // @method distanceTo(otherPoint: Point): Number
      // Returns the cartesian distance between the current and the given points.
      distanceTo: function(t) {
        t = E(t);
        var e = t.x - this.x, n = t.y - this.y;
        return Math.sqrt(e * e + n * n);
      },
      // @method equals(otherPoint: Point): Boolean
      // Returns `true` if the given point has the same coordinates.
      equals: function(t) {
        return t = E(t), t.x === this.x && t.y === this.y;
      },
      // @method contains(otherPoint: Point): Boolean
      // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
      contains: function(t) {
        return t = E(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      },
      // @method toString(): String
      // Returns a string representation of the point for debugging purposes.
      toString: function() {
        return "Point(" + y(this.x) + ", " + y(this.y) + ")";
      }
    };
    function E(t, e, n) {
      return t instanceof D ? t : T(t) ? new D(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new D(t.x, t.y) : new D(t, e, n);
    }
    function F(t, e) {
      if (t)
        for (var n = e ? [t, e] : t, l = 0, d = n.length; l < d; l++)
          this.extend(n[l]);
    }
    F.prototype = {
      // @method extend(point: Point): this
      // Extends the bounds to contain the given point.
      // @alternative
      // @method extend(otherBounds: Bounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e, n;
        if (!t)
          return this;
        if (t instanceof D || typeof t[0] == "number" || "x" in t)
          e = n = E(t);
        else if (t = U(t), e = t.min, n = t.max, !e || !n)
          return this;
        return !this.min && !this.max ? (this.min = e.clone(), this.max = n.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(n.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(n.y, this.max.y)), this;
      },
      // @method getCenter(round?: Boolean): Point
      // Returns the center point of the bounds.
      getCenter: function(t) {
        return E(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      // @method getBottomLeft(): Point
      // Returns the bottom-left point of the bounds.
      getBottomLeft: function() {
        return E(this.min.x, this.max.y);
      },
      // @method getTopRight(): Point
      // Returns the top-right point of the bounds.
      getTopRight: function() {
        return E(this.max.x, this.min.y);
      },
      // @method getTopLeft(): Point
      // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
      getTopLeft: function() {
        return this.min;
      },
      // @method getBottomRight(): Point
      // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
      getBottomRight: function() {
        return this.max;
      },
      // @method getSize(): Point
      // Returns the size of the given bounds
      getSize: function() {
        return this.max.subtract(this.min);
      },
      // @method contains(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains(point: Point): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        var e, n;
        return typeof t[0] == "number" || t instanceof D ? t = E(t) : t = U(t), t instanceof F ? (e = t.min, n = t.max) : e = n = t, e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y;
      },
      // @method intersects(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds
      // intersect if they have at least one point in common.
      intersects: function(t) {
        t = U(t);
        var e = this.min, n = this.max, l = t.min, d = t.max, m = d.x >= e.x && l.x <= n.x, x = d.y >= e.y && l.y <= n.y;
        return m && x;
      },
      // @method overlaps(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds
      // overlap if their intersection is an area.
      overlaps: function(t) {
        t = U(t);
        var e = this.min, n = this.max, l = t.min, d = t.max, m = d.x > e.x && l.x < n.x, x = d.y > e.y && l.y < n.y;
        return m && x;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this.min && this.max);
      },
      // @method pad(bufferRatio: Number): Bounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this.min, n = this.max, l = Math.abs(e.x - n.x) * t, d = Math.abs(e.y - n.y) * t;
        return U(
          E(e.x - l, e.y - d),
          E(n.x + l, n.y + d)
        );
      },
      // @method equals(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle is equivalent to the given bounds.
      equals: function(t) {
        return t ? (t = U(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
      }
    };
    function U(t, e) {
      return !t || t instanceof F ? t : new F(t, e);
    }
    function X(t, e) {
      if (t)
        for (var n = e ? [t, e] : t, l = 0, d = n.length; l < d; l++)
          this.extend(n[l]);
    }
    X.prototype = {
      // @method extend(latlng: LatLng): this
      // Extend the bounds to contain the given point
      // @alternative
      // @method extend(otherBounds: LatLngBounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e = this._southWest, n = this._northEast, l, d;
        if (t instanceof q)
          l = t, d = t;
        else if (t instanceof X) {
          if (l = t._southWest, d = t._northEast, !l || !d)
            return this;
        } else
          return t ? this.extend(V(t) || G(t)) : this;
        return !e && !n ? (this._southWest = new q(l.lat, l.lng), this._northEast = new q(d.lat, d.lng)) : (e.lat = Math.min(l.lat, e.lat), e.lng = Math.min(l.lng, e.lng), n.lat = Math.max(d.lat, n.lat), n.lng = Math.max(d.lng, n.lng)), this;
      },
      // @method pad(bufferRatio: Number): LatLngBounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this._southWest, n = this._northEast, l = Math.abs(e.lat - n.lat) * t, d = Math.abs(e.lng - n.lng) * t;
        return new X(
          new q(e.lat - l, e.lng - d),
          new q(n.lat + l, n.lng + d)
        );
      },
      // @method getCenter(): LatLng
      // Returns the center point of the bounds.
      getCenter: function() {
        return new q(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      // @method getSouthWest(): LatLng
      // Returns the south-west point of the bounds.
      getSouthWest: function() {
        return this._southWest;
      },
      // @method getNorthEast(): LatLng
      // Returns the north-east point of the bounds.
      getNorthEast: function() {
        return this._northEast;
      },
      // @method getNorthWest(): LatLng
      // Returns the north-west point of the bounds.
      getNorthWest: function() {
        return new q(this.getNorth(), this.getWest());
      },
      // @method getSouthEast(): LatLng
      // Returns the south-east point of the bounds.
      getSouthEast: function() {
        return new q(this.getSouth(), this.getEast());
      },
      // @method getWest(): Number
      // Returns the west longitude of the bounds
      getWest: function() {
        return this._southWest.lng;
      },
      // @method getSouth(): Number
      // Returns the south latitude of the bounds
      getSouth: function() {
        return this._southWest.lat;
      },
      // @method getEast(): Number
      // Returns the east longitude of the bounds
      getEast: function() {
        return this._northEast.lng;
      },
      // @method getNorth(): Number
      // Returns the north latitude of the bounds
      getNorth: function() {
        return this._northEast.lat;
      },
      // @method contains(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains (latlng: LatLng): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        typeof t[0] == "number" || t instanceof q || "lat" in t ? t = V(t) : t = G(t);
        var e = this._southWest, n = this._northEast, l, d;
        return t instanceof X ? (l = t.getSouthWest(), d = t.getNorthEast()) : l = d = t, l.lat >= e.lat && d.lat <= n.lat && l.lng >= e.lng && d.lng <= n.lng;
      },
      // @method intersects(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
      intersects: function(t) {
        t = G(t);
        var e = this._southWest, n = this._northEast, l = t.getSouthWest(), d = t.getNorthEast(), m = d.lat >= e.lat && l.lat <= n.lat, x = d.lng >= e.lng && l.lng <= n.lng;
        return m && x;
      },
      // @method overlaps(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
      overlaps: function(t) {
        t = G(t);
        var e = this._southWest, n = this._northEast, l = t.getSouthWest(), d = t.getNorthEast(), m = d.lat > e.lat && l.lat < n.lat, x = d.lng > e.lng && l.lng < n.lng;
        return m && x;
      },
      // @method toBBoxString(): String
      // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
      // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        return t ? (t = G(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function G(t, e) {
      return t instanceof X ? t : new X(t, e);
    }
    function q(t, e, n) {
      if (isNaN(t) || isNaN(e))
        throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
      this.lat = +t, this.lng = +e, n !== void 0 && (this.alt = +n);
    }
    q.prototype = {
      // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
      // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        if (!t)
          return !1;
        t = V(t);
        var n = Math.max(
          Math.abs(this.lat - t.lat),
          Math.abs(this.lng - t.lng)
        );
        return n <= (e === void 0 ? 1e-9 : e);
      },
      // @method toString(): String
      // Returns a string representation of the point (for debugging purposes).
      toString: function(t) {
        return "LatLng(" + y(this.lat, t) + ", " + y(this.lng, t) + ")";
      },
      // @method distanceTo(otherLatLng: LatLng): Number
      // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
      distanceTo: function(t) {
        return nt.distance(this, V(t));
      },
      // @method wrap(): LatLng
      // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
      wrap: function() {
        return nt.wrapLatLng(this);
      },
      // @method toBounds(sizeInMeters: Number): LatLngBounds
      // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
      toBounds: function(t) {
        var e = 180 * t / 40075017, n = e / Math.cos(Math.PI / 180 * this.lat);
        return G(
          [this.lat - e, this.lng - n],
          [this.lat + e, this.lng + n]
        );
      },
      clone: function() {
        return new q(this.lat, this.lng, this.alt);
      }
    };
    function V(t, e, n) {
      return t instanceof q ? t : T(t) && typeof t[0] != "object" ? t.length === 3 ? new q(t[0], t[1], t[2]) : t.length === 2 ? new q(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new q(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new q(t, e, n);
    }
    var tt = {
      // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
      // Projects geographical coordinates into pixel coordinates for a given zoom.
      latLngToPoint: function(t, e) {
        var n = this.projection.project(t), l = this.scale(e);
        return this.transformation._transform(n, l);
      },
      // @method pointToLatLng(point: Point, zoom: Number): LatLng
      // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
      // zoom into geographical coordinates.
      pointToLatLng: function(t, e) {
        var n = this.scale(e), l = this.transformation.untransform(t, n);
        return this.projection.unproject(l);
      },
      // @method project(latlng: LatLng): Point
      // Projects geographical coordinates into coordinates in units accepted for
      // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
      project: function(t) {
        return this.projection.project(t);
      },
      // @method unproject(point: Point): LatLng
      // Given a projected coordinate returns the corresponding LatLng.
      // The inverse of `project`.
      unproject: function(t) {
        return this.projection.unproject(t);
      },
      // @method scale(zoom: Number): Number
      // Returns the scale used when transforming projected coordinates into
      // pixel coordinates for a particular zoom. For example, it returns
      // `256 * 2^zoom` for Mercator-based CRS.
      scale: function(t) {
        return 256 * Math.pow(2, t);
      },
      // @method zoom(scale: Number): Number
      // Inverse of `scale()`, returns the zoom level corresponding to a scale
      // factor of `scale`.
      zoom: function(t) {
        return Math.log(t / 256) / Math.LN2;
      },
      // @method getProjectedBounds(zoom: Number): Bounds
      // Returns the projection's bounds scaled and transformed for the provided `zoom`.
      getProjectedBounds: function(t) {
        if (this.infinite)
          return null;
        var e = this.projection.bounds, n = this.scale(t), l = this.transformation.transform(e.min, n), d = this.transformation.transform(e.max, n);
        return new F(l, d);
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates.
      // @property code: String
      // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
      //
      // @property wrapLng: Number[]
      // An array of two numbers defining whether the longitude (horizontal) coordinate
      // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
      // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
      //
      // @property wrapLat: Number[]
      // Like `wrapLng`, but for the latitude (vertical) axis.
      // wrapLng: [min, max],
      // wrapLat: [min, max],
      // @property infinite: Boolean
      // If true, the coordinate space will be unbounded (infinite in both axes)
      infinite: !1,
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where lat and lng has been wrapped according to the
      // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
      wrapLatLng: function(t) {
        var e = this.wrapLng ? v(t.lng, this.wrapLng, !0) : t.lng, n = this.wrapLat ? v(t.lat, this.wrapLat, !0) : t.lat, l = t.alt;
        return new q(n, e, l);
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring
      // that its center is within the CRS's bounds.
      // Only accepts actual `L.LatLngBounds` instances, not arrays.
      wrapLatLngBounds: function(t) {
        var e = t.getCenter(), n = this.wrapLatLng(e), l = e.lat - n.lat, d = e.lng - n.lng;
        if (l === 0 && d === 0)
          return t;
        var m = t.getSouthWest(), x = t.getNorthEast(), O = new q(m.lat - l, m.lng - d), I = new q(x.lat - l, x.lng - d);
        return new X(O, I);
      }
    }, nt = u({}, tt, {
      wrapLng: [-180, 180],
      // Mean Earth Radius, as recommended for use by
      // the International Union of Geodesy and Geophysics,
      // see https://rosettacode.org/wiki/Haversine_formula
      R: 6371e3,
      // distance between two geographical points using spherical law of cosines approximation
      distance: function(t, e) {
        var n = Math.PI / 180, l = t.lat * n, d = e.lat * n, m = Math.sin((e.lat - t.lat) * n / 2), x = Math.sin((e.lng - t.lng) * n / 2), O = m * m + Math.cos(l) * Math.cos(d) * x * x, I = 2 * Math.atan2(Math.sqrt(O), Math.sqrt(1 - O));
        return this.R * I;
      }
    }), ct = 6378137, ht = {
      R: ct,
      MAX_LATITUDE: 85.0511287798,
      project: function(t) {
        var e = Math.PI / 180, n = this.MAX_LATITUDE, l = Math.max(Math.min(n, t.lat), -n), d = Math.sin(l * e);
        return new D(
          this.R * t.lng * e,
          this.R * Math.log((1 + d) / (1 - d)) / 2
        );
      },
      unproject: function(t) {
        var e = 180 / Math.PI;
        return new q(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
          t.x * e / this.R
        );
      },
      bounds: function() {
        var t = ct * Math.PI;
        return new F([-t, -t], [t, t]);
      }()
    };
    function Tt(t, e, n, l) {
      if (T(t)) {
        this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
        return;
      }
      this._a = t, this._b = e, this._c = n, this._d = l;
    }
    Tt.prototype = {
      // @method transform(point: Point, scale?: Number): Point
      // Returns a transformed point, optionally multiplied by the given scale.
      // Only accepts actual `L.Point` instances, not arrays.
      transform: function(t, e) {
        return this._transform(t.clone(), e);
      },
      // destructive transform (faster)
      _transform: function(t, e) {
        return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
      },
      // @method untransform(point: Point, scale?: Number): Point
      // Returns the reverse transformation of the given point, optionally divided
      // by the given scale. Only accepts actual `L.Point` instances, not arrays.
      untransform: function(t, e) {
        return e = e || 1, new D(
          (t.x / e - this._b) / this._a,
          (t.y / e - this._d) / this._c
        );
      }
    };
    function H(t, e, n, l) {
      return new Tt(t, e, n, l);
    }
    var Ot = u({}, nt, {
      code: "EPSG:3857",
      projection: ht,
      transformation: function() {
        var t = 0.5 / (Math.PI * ht.R);
        return H(t, 0.5, -t, 0.5);
      }()
    }), be = u({}, Ot, {
      code: "EPSG:900913"
    });
    function De(t) {
      return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function Fn(t, e) {
      var n = "", l, d, m, x, O, I;
      for (l = 0, m = t.length; l < m; l++) {
        for (O = t[l], d = 0, x = O.length; d < x; d++)
          I = O[d], n += (d ? "L" : "M") + I.x + " " + I.y;
        n += e ? K.svg ? "z" : "x" : "";
      }
      return n || "M0 0";
    }
    var Ri = document.documentElement.style, ci = "ActiveXObject" in window, ms = ci && !document.addEventListener, Nn = "msLaunchUri" in navigator && !("documentMode" in document), Di = Kt("webkit"), Un = Kt("android"), Vn = Kt("android 2") || Kt("android 3"), ps = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), gs = Un && Kt("Google") && ps < 537 && !("AudioNode" in window), ji = !!window.opera, Hn = !Nn && Kt("chrome"), Wn = Kt("gecko") && !Di && !ji && !ci, vs = !Hn && Kt("safari"), Yn = Kt("phantom"), Gn = "OTransition" in Ri, ys = navigator.platform.indexOf("Win") === 0, qn = ci && "transition" in Ri, Fi = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !Vn, Xn = "MozPerspective" in Ri, bs = !window.L_DISABLE_3D && (qn || Fi || Xn) && !Gn && !Yn, je = typeof orientation < "u" || Kt("mobile"), ws = je && Di, xs = je && Fi, $n = !window.PointerEvent && window.MSPointerEvent, Kn = !!(window.PointerEvent || $n), Jn = "ontouchstart" in window || !!window.TouchEvent, Ls = !window.L_NO_TOUCH && (Jn || Kn), Ps = je && ji, Ts = je && Wn, ks = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Cs = function() {
      var t = !1;
      try {
        var e = Object.defineProperty({}, "passive", {
          get: function() {
            t = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", p, e), window.removeEventListener("testPassiveEventSupport", p, e);
      } catch {
      }
      return t;
    }(), Ms = function() {
      return !!document.createElement("canvas").getContext;
    }(), Ni = !!(document.createElementNS && De("svg").createSVGRect), Ss = !!Ni && function() {
      var t = document.createElement("div");
      return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }(), zs = !Ni && function() {
      try {
        var t = document.createElement("div");
        t.innerHTML = '<v:shape adj="1"/>';
        var e = t.firstChild;
        return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
      } catch {
        return !1;
      }
    }(), Es = navigator.platform.indexOf("Mac") === 0, Os = navigator.platform.indexOf("Linux") === 0;
    function Kt(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var K = {
      ie: ci,
      ielt9: ms,
      edge: Nn,
      webkit: Di,
      android: Un,
      android23: Vn,
      androidStock: gs,
      opera: ji,
      chrome: Hn,
      gecko: Wn,
      safari: vs,
      phantom: Yn,
      opera12: Gn,
      win: ys,
      ie3d: qn,
      webkit3d: Fi,
      gecko3d: Xn,
      any3d: bs,
      mobile: je,
      mobileWebkit: ws,
      mobileWebkit3d: xs,
      msPointer: $n,
      pointer: Kn,
      touch: Ls,
      touchNative: Jn,
      mobileOpera: Ps,
      mobileGecko: Ts,
      retina: ks,
      passiveEvents: Cs,
      canvas: Ms,
      svg: Ni,
      vml: zs,
      inlineSvg: Ss,
      mac: Es,
      linux: Os
    }, Qn = K.msPointer ? "MSPointerDown" : "pointerdown", tr = K.msPointer ? "MSPointerMove" : "pointermove", er = K.msPointer ? "MSPointerUp" : "pointerup", ir = K.msPointer ? "MSPointerCancel" : "pointercancel", Ui = {
      touchstart: Qn,
      touchmove: tr,
      touchend: er,
      touchcancel: ir
    }, nr = {
      touchstart: Ds,
      touchmove: fi,
      touchend: fi,
      touchcancel: fi
    }, we = {}, rr = !1;
    function Is(t, e, n) {
      return e === "touchstart" && Rs(), nr[e] ? (n = nr[e].bind(this, n), t.addEventListener(Ui[e], n, !1), n) : (console.warn("wrong event specified:", e), p);
    }
    function Bs(t, e, n) {
      if (!Ui[e]) {
        console.warn("wrong event specified:", e);
        return;
      }
      t.removeEventListener(Ui[e], n, !1);
    }
    function As(t) {
      we[t.pointerId] = t;
    }
    function Zs(t) {
      we[t.pointerId] && (we[t.pointerId] = t);
    }
    function or(t) {
      delete we[t.pointerId];
    }
    function Rs() {
      rr || (document.addEventListener(Qn, As, !0), document.addEventListener(tr, Zs, !0), document.addEventListener(er, or, !0), document.addEventListener(ir, or, !0), rr = !0);
    }
    function fi(t, e) {
      if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
        e.touches = [];
        for (var n in we)
          e.touches.push(we[n]);
        e.changedTouches = [e], t(e);
      }
    }
    function Ds(t, e) {
      e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && Ct(e), fi(t, e);
    }
    function js(t) {
      var e = {}, n, l;
      for (l in t)
        n = t[l], e[l] = n && n.bind ? n.bind(t) : n;
      return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
    }
    var Fs = 200;
    function Ns(t, e) {
      t.addEventListener("dblclick", e);
      var n = 0, l;
      function d(m) {
        if (m.detail !== 1) {
          l = m.detail;
          return;
        }
        if (!(m.pointerType === "mouse" || m.sourceCapabilities && !m.sourceCapabilities.firesTouchEvents)) {
          var x = ur(m);
          if (!(x.some(function(I) {
            return I instanceof HTMLLabelElement && I.attributes.for;
          }) && !x.some(function(I) {
            return I instanceof HTMLInputElement || I instanceof HTMLSelectElement;
          }))) {
            var O = Date.now();
            O - n <= Fs ? (l++, l === 2 && e(js(m))) : l = 1, n = O;
          }
        }
      }
      return t.addEventListener("click", d), {
        dblclick: e,
        simDblclick: d
      };
    }
    function Us(t, e) {
      t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
    }
    var Vi = mi(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), Fe = mi(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), sr = Fe === "webkitTransition" || Fe === "OTransition" ? Fe + "End" : "transitionend";
    function ar(t) {
      return typeof t == "string" ? document.getElementById(t) : t;
    }
    function Ne(t, e) {
      var n = t.style[e] || t.currentStyle && t.currentStyle[e];
      if ((!n || n === "auto") && document.defaultView) {
        var l = document.defaultView.getComputedStyle(t, null);
        n = l ? l[e] : null;
      }
      return n === "auto" ? null : n;
    }
    function ft(t, e, n) {
      var l = document.createElement(t);
      return l.className = e || "", n && n.appendChild(l), l;
    }
    function yt(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function di(t) {
      for (; t.firstChild; )
        t.removeChild(t.firstChild);
    }
    function xe(t) {
      var e = t.parentNode;
      e && e.lastChild !== t && e.appendChild(t);
    }
    function Le(t) {
      var e = t.parentNode;
      e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
    }
    function Hi(t, e) {
      if (t.classList !== void 0)
        return t.classList.contains(e);
      var n = _i(t);
      return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n);
    }
    function at(t, e) {
      if (t.classList !== void 0)
        for (var n = k(e), l = 0, d = n.length; l < d; l++)
          t.classList.add(n[l]);
      else if (!Hi(t, e)) {
        var m = _i(t);
        Wi(t, (m ? m + " " : "") + e);
      }
    }
    function bt(t, e) {
      t.classList !== void 0 ? t.classList.remove(e) : Wi(t, b((" " + _i(t) + " ").replace(" " + e + " ", " ")));
    }
    function Wi(t, e) {
      t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
    }
    function _i(t) {
      return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
    }
    function jt(t, e) {
      "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && Vs(t, e);
    }
    function Vs(t, e) {
      var n = !1, l = "DXImageTransform.Microsoft.Alpha";
      try {
        n = t.filters.item(l);
      } catch {
        if (e === 1)
          return;
      }
      e = Math.round(e * 100), n ? (n.Enabled = e !== 100, n.Opacity = e) : t.style.filter += " progid:" + l + "(opacity=" + e + ")";
    }
    function mi(t) {
      for (var e = document.documentElement.style, n = 0; n < t.length; n++)
        if (t[n] in e)
          return t[n];
      return !1;
    }
    function de(t, e, n) {
      var l = e || new D(0, 0);
      t.style[Vi] = (K.ie3d ? "translate(" + l.x + "px," + l.y + "px)" : "translate3d(" + l.x + "px," + l.y + "px,0)") + (n ? " scale(" + n + ")" : "");
    }
    function wt(t, e) {
      t._leaflet_pos = e, K.any3d ? de(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
    }
    function _e(t) {
      return t._leaflet_pos || new D(0, 0);
    }
    var Ue, Ve, Yi;
    if ("onselectstart" in document)
      Ue = function() {
        st(window, "selectstart", Ct);
      }, Ve = function() {
        vt(window, "selectstart", Ct);
      };
    else {
      var He = mi(
        ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
      );
      Ue = function() {
        if (He) {
          var t = document.documentElement.style;
          Yi = t[He], t[He] = "none";
        }
      }, Ve = function() {
        He && (document.documentElement.style[He] = Yi, Yi = void 0);
      };
    }
    function Gi() {
      st(window, "dragstart", Ct);
    }
    function qi() {
      vt(window, "dragstart", Ct);
    }
    var pi, Xi;
    function $i(t) {
      for (; t.tabIndex === -1; )
        t = t.parentNode;
      t.style && (gi(), pi = t, Xi = t.style.outlineStyle, t.style.outlineStyle = "none", st(window, "keydown", gi));
    }
    function gi() {
      pi && (pi.style.outlineStyle = Xi, pi = void 0, Xi = void 0, vt(window, "keydown", gi));
    }
    function lr(t) {
      do
        t = t.parentNode;
      while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
      return t;
    }
    function Ki(t) {
      var e = t.getBoundingClientRect();
      return {
        x: e.width / t.offsetWidth || 1,
        y: e.height / t.offsetHeight || 1,
        boundingClientRect: e
      };
    }
    var Hs = {
      __proto__: null,
      TRANSFORM: Vi,
      TRANSITION: Fe,
      TRANSITION_END: sr,
      get: ar,
      getStyle: Ne,
      create: ft,
      remove: yt,
      empty: di,
      toFront: xe,
      toBack: Le,
      hasClass: Hi,
      addClass: at,
      removeClass: bt,
      setClass: Wi,
      getClass: _i,
      setOpacity: jt,
      testProp: mi,
      setTransform: de,
      setPosition: wt,
      getPosition: _e,
      get disableTextSelection() {
        return Ue;
      },
      get enableTextSelection() {
        return Ve;
      },
      disableImageDrag: Gi,
      enableImageDrag: qi,
      preventOutline: $i,
      restoreOutline: gi,
      getSizedParentNode: lr,
      getScale: Ki
    };
    function st(t, e, n, l) {
      if (e && typeof e == "object")
        for (var d in e)
          Qi(t, d, e[d], n);
      else {
        e = k(e);
        for (var m = 0, x = e.length; m < x; m++)
          Qi(t, e[m], n, l);
      }
      return this;
    }
    var Jt = "_leaflet_events";
    function vt(t, e, n, l) {
      if (arguments.length === 1)
        hr(t), delete t[Jt];
      else if (e && typeof e == "object")
        for (var d in e)
          tn(t, d, e[d], n);
      else if (e = k(e), arguments.length === 2)
        hr(t, function(O) {
          return C(e, O) !== -1;
        });
      else
        for (var m = 0, x = e.length; m < x; m++)
          tn(t, e[m], n, l);
      return this;
    }
    function hr(t, e) {
      for (var n in t[Jt]) {
        var l = n.split(/\d/)[0];
        (!e || e(l)) && tn(t, l, null, null, n);
      }
    }
    var Ji = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function Qi(t, e, n, l) {
      var d = e + f(n) + (l ? "_" + f(l) : "");
      if (t[Jt] && t[Jt][d])
        return this;
      var m = function(O) {
        return n.call(l || t, O || window.event);
      }, x = m;
      !K.touchNative && K.pointer && e.indexOf("touch") === 0 ? m = Is(t, e, m) : K.touch && e === "dblclick" ? m = Ns(t, m) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(Ji[e] || e, m, K.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (m = function(O) {
        O = O || window.event, nn(t, O) && x(O);
      }, t.addEventListener(Ji[e], m, !1)) : t.addEventListener(e, x, !1) : t.attachEvent("on" + e, m), t[Jt] = t[Jt] || {}, t[Jt][d] = m;
    }
    function tn(t, e, n, l, d) {
      d = d || e + f(n) + (l ? "_" + f(l) : "");
      var m = t[Jt] && t[Jt][d];
      if (!m)
        return this;
      !K.touchNative && K.pointer && e.indexOf("touch") === 0 ? Bs(t, e, m) : K.touch && e === "dblclick" ? Us(t, m) : "removeEventListener" in t ? t.removeEventListener(Ji[e] || e, m, !1) : t.detachEvent("on" + e, m), t[Jt][d] = null;
    }
    function me(t) {
      return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
    }
    function en(t) {
      return Qi(t, "wheel", me), this;
    }
    function We(t) {
      return st(t, "mousedown touchstart dblclick contextmenu", me), t._leaflet_disable_click = !0, this;
    }
    function Ct(t) {
      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
    }
    function pe(t) {
      return Ct(t), me(t), this;
    }
    function ur(t) {
      if (t.composedPath)
        return t.composedPath();
      for (var e = [], n = t.target; n; )
        e.push(n), n = n.parentNode;
      return e;
    }
    function cr(t, e) {
      if (!e)
        return new D(t.clientX, t.clientY);
      var n = Ki(e), l = n.boundingClientRect;
      return new D(
        // offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (t.clientX - l.left) / n.x - e.clientLeft,
        (t.clientY - l.top) / n.y - e.clientTop
      );
    }
    var Ws = K.linux && K.chrome ? window.devicePixelRatio : K.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function fr(t) {
      return K.edge ? t.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        t.deltaY && t.deltaMode === 0 ? -t.deltaY / Ws : (
          // Pixels
          t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : (
            // Lines
            t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : (
              // Pages
              t.deltaX || t.deltaZ ? 0 : (
                // Skip horizontal/depth wheel events
                t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : (
                  // Legacy IE pixels
                  t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : (
                    // Legacy Moz lines
                    t.detail ? t.detail / -32765 * 60 : (
                      // Legacy Moz pages
                      0
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    function nn(t, e) {
      var n = e.relatedTarget;
      if (!n)
        return !0;
      try {
        for (; n && n !== t; )
          n = n.parentNode;
      } catch {
        return !1;
      }
      return n !== t;
    }
    var Ys = {
      __proto__: null,
      on: st,
      off: vt,
      stopPropagation: me,
      disableScrollPropagation: en,
      disableClickPropagation: We,
      preventDefault: Ct,
      stop: pe,
      getPropagationPath: ur,
      getMousePosition: cr,
      getWheelDelta: fr,
      isExternalTarget: nn,
      addListener: st,
      removeListener: vt
    }, dr = W.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(t, e, n, l) {
        this.stop(), this._el = t, this._inProgress = !0, this._duration = n || 0.25, this._easeOutPower = 1 / Math.max(l || 0.5, 0.2), this._startPos = _e(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      },
      // @method stop()
      // Stops the animation (if currently running).
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = J(this._animate, this), this._step();
      },
      _step: function(t) {
        var e = +/* @__PURE__ */ new Date() - this._startTime, n = this._duration * 1e3;
        e < n ? this._runFrame(this._easeOut(e / n), t) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(t, e) {
        var n = this._startPos.add(this._offset.multiplyBy(t));
        e && n._round(), wt(this._el, n), this.fire("step");
      },
      _complete: function() {
        rt(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    }), ut = W.extend({
      options: {
        // @section Map State Options
        // @option crs: CRS = L.CRS.EPSG3857
        // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
        // sure what it means.
        crs: Ot,
        // @option center: LatLng = undefined
        // Initial geographic center of the map
        center: void 0,
        // @option zoom: Number = undefined
        // Initial map zoom level
        zoom: void 0,
        // @option minZoom: Number = *
        // Minimum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the lowest of their `minZoom` options will be used instead.
        minZoom: void 0,
        // @option maxZoom: Number = *
        // Maximum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the highest of their `maxZoom` options will be used instead.
        maxZoom: void 0,
        // @option layers: Layer[] = []
        // Array of layers that will be added to the map initially
        layers: [],
        // @option maxBounds: LatLngBounds = null
        // When this option is set, the map restricts the view to the given
        // geographical bounds, bouncing the user back if the user tries to pan
        // outside the view. To set the restriction dynamically, use
        // [`setMaxBounds`](#map-setmaxbounds) method.
        maxBounds: void 0,
        // @option renderer: Renderer = *
        // The default method for drawing vector layers on the map. `L.SVG`
        // or `L.Canvas` by default depending on browser support.
        renderer: void 0,
        // @section Animation Options
        // @option zoomAnimation: Boolean = true
        // Whether the map zoom animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        zoomAnimation: !0,
        // @option zoomAnimationThreshold: Number = 4
        // Won't animate zoom if the zoom difference exceeds this value.
        zoomAnimationThreshold: 4,
        // @option fadeAnimation: Boolean = true
        // Whether the tile fade animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        fadeAnimation: !0,
        // @option markerZoomAnimation: Boolean = true
        // Whether markers animate their zoom with the zoom animation, if disabled
        // they will disappear for the length of the animation. By default it's
        // enabled in all browsers that support CSS3 Transitions except Android.
        markerZoomAnimation: !0,
        // @option transform3DLimit: Number = 2^23
        // Defines the maximum size of a CSS translation transform. The default
        // value should not be changed unless a web browser positions layers in
        // the wrong place after doing a large `panBy`.
        transform3DLimit: 8388608,
        // Precision limit of a 32-bit float
        // @section Interaction Options
        // @option zoomSnap: Number = 1
        // Forces the map's zoom level to always be a multiple of this, particularly
        // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
        // By default, the zoom level snaps to the nearest integer; lower values
        // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
        // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
        zoomSnap: 1,
        // @option zoomDelta: Number = 1
        // Controls how much the map's zoom level will change after a
        // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
        // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
        // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
        zoomDelta: 1,
        // @option trackResize: Boolean = true
        // Whether the map automatically handles browser window resize to update itself.
        trackResize: !0
      },
      initialize: function(t, e) {
        e = S(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = h(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(V(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Fe && K.any3d && !K.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), st(this._proxy, sr, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      // @section Methods for modifying map state
      // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) with the given
      // animation options.
      setView: function(t, e, n) {
        if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(V(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && n !== !0) {
          n.animate !== void 0 && (n.zoom = u({ animate: n.animate }, n.zoom), n.pan = u({ animate: n.animate, duration: n.duration }, n.pan));
          var l = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan);
          if (l)
            return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(t, e, n.pan && n.pan.noMoveStart), this;
      },
      // @method setZoom(zoom: Number, options?: Zoom/pan options): this
      // Sets the zoom of the map.
      setZoom: function(t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
      },
      // @method zoomIn(delta?: Number, options?: Zoom options): this
      // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomIn: function(t, e) {
        return t = t || (K.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
      },
      // @method zoomOut(delta?: Number, options?: Zoom options): this
      // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomOut: function(t, e) {
        return t = t || (K.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
      },
      // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified geographical point on the map
      // stationary (e.g. used internally for scroll zoom and double-click zoom).
      // @alternative
      // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
      setZoomAround: function(t, e, n) {
        var l = this.getZoomScale(e), d = this.getSize().divideBy(2), m = t instanceof D ? t : this.latLngToContainerPoint(t), x = m.subtract(d).multiplyBy(1 - 1 / l), O = this.containerPointToLatLng(d.add(x));
        return this.setView(O, e, { zoom: n });
      },
      _getBoundsCenterZoom: function(t, e) {
        e = e || {}, t = t.getBounds ? t.getBounds() : G(t);
        var n = E(e.paddingTopLeft || e.padding || [0, 0]), l = E(e.paddingBottomRight || e.padding || [0, 0]), d = this.getBoundsZoom(t, !1, n.add(l));
        if (d = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, d) : d, d === 1 / 0)
          return {
            center: t.getCenter(),
            zoom: d
          };
        var m = l.subtract(n).divideBy(2), x = this.project(t.getSouthWest(), d), O = this.project(t.getNorthEast(), d), I = this.unproject(x.add(O).divideBy(2).add(m), d);
        return {
          center: I,
          zoom: d
        };
      },
      // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets a map view that contains the given geographical bounds with the
      // maximum zoom level possible.
      fitBounds: function(t, e) {
        if (t = G(t), !t.isValid())
          throw new Error("Bounds are not valid.");
        var n = this._getBoundsCenterZoom(t, e);
        return this.setView(n.center, n.zoom, e);
      },
      // @method fitWorld(options?: fitBounds options): this
      // Sets a map view that mostly contains the whole world with the maximum
      // zoom level possible.
      fitWorld: function(t) {
        return this.fitBounds([[-90, -180], [90, 180]], t);
      },
      // @method panTo(latlng: LatLng, options?: Pan options): this
      // Pans the map to a given center.
      panTo: function(t, e) {
        return this.setView(t, this._zoom, { pan: e });
      },
      // @method panBy(offset: Point, options?: Pan options): this
      // Pans the map by a given number of pixels (animated).
      panBy: function(t, e) {
        if (t = E(t).round(), e = e || {}, !t.x && !t.y)
          return this.fire("moveend");
        if (e.animate !== !0 && !this.getSize().contains(t))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new dr(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
          at(this._mapPane, "leaflet-pan-anim");
          var n = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(this._mapPane, n, e.duration || 0.25, e.easeLinearity);
        } else
          this._rawPanBy(t), this.fire("move").fire("moveend");
        return this;
      },
      // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) performing a smooth
      // pan-zoom animation.
      flyTo: function(t, e, n) {
        if (n = n || {}, n.animate === !1 || !K.any3d)
          return this.setView(t, e, n);
        this._stop();
        var l = this.project(this.getCenter()), d = this.project(t), m = this.getSize(), x = this._zoom;
        t = V(t), e = e === void 0 ? x : e;
        var O = Math.max(m.x, m.y), I = O * this.getZoomScale(x, e), j = d.distanceTo(l) || 1, Y = 1.42, et = Y * Y;
        function lt(xt) {
          var Si = xt ? -1 : 1, Ba = xt ? I : O, Aa = I * I - O * O + Si * et * et * j * j, Za = 2 * Ba * et * j, _n = Aa / Za, Gr = Math.sqrt(_n * _n + 1) - _n, Ra = Gr < 1e-9 ? -18 : Math.log(Gr);
          return Ra;
        }
        function St(xt) {
          return (Math.exp(xt) - Math.exp(-xt)) / 2;
        }
        function kt(xt) {
          return (Math.exp(xt) + Math.exp(-xt)) / 2;
        }
        function Nt(xt) {
          return St(xt) / kt(xt);
        }
        var It = lt(0);
        function Se(xt) {
          return O * (kt(It) / kt(It + Y * xt));
        }
        function za(xt) {
          return O * (kt(It) * Nt(It + Y * xt) - St(It)) / et;
        }
        function Ea(xt) {
          return 1 - Math.pow(1 - xt, 1.5);
        }
        var Oa = Date.now(), Wr = (lt(1) - It) / Y, Ia = n.duration ? 1e3 * n.duration : 1e3 * Wr * 0.8;
        function Yr() {
          var xt = (Date.now() - Oa) / Ia, Si = Ea(xt) * Wr;
          xt <= 1 ? (this._flyToFrame = J(Yr, this), this._move(
            this.unproject(l.add(d.subtract(l).multiplyBy(za(Si) / j)), x),
            this.getScaleZoom(O / Se(Si), x),
            { flyTo: !0 }
          )) : this._move(t, e)._moveEnd(!0);
        }
        return this._moveStart(!0, n.noMoveStart), Yr.call(this), this;
      },
      // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
      // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
      flyToBounds: function(t, e) {
        var n = this._getBoundsCenterZoom(t, e);
        return this.flyTo(n.center, n.zoom, e);
      },
      // @method setMaxBounds(bounds: LatLngBounds): this
      // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
      setMaxBounds: function(t) {
        return t = G(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      // @method setMinZoom(zoom: Number): this
      // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
      setMinZoom: function(t) {
        var e = this.options.minZoom;
        return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
      },
      // @method setMaxZoom(zoom: Number): this
      // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
      setMaxZoom: function(t) {
        var e = this.options.maxZoom;
        return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
      },
      // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
      // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
      panInsideBounds: function(t, e) {
        this._enforcingBounds = !0;
        var n = this.getCenter(), l = this._limitCenter(n, this._zoom, G(t));
        return n.equals(l) || this.panTo(l, e), this._enforcingBounds = !1, this;
      },
      // @method panInside(latlng: LatLng, options?: padding options): this
      // Pans the map the minimum amount to make the `latlng` visible. Use
      // padding options to fit the display to more restricted bounds.
      // If `latlng` is already within the (optionally padded) display bounds,
      // the map will not be panned.
      panInside: function(t, e) {
        e = e || {};
        var n = E(e.paddingTopLeft || e.padding || [0, 0]), l = E(e.paddingBottomRight || e.padding || [0, 0]), d = this.project(this.getCenter()), m = this.project(t), x = this.getPixelBounds(), O = U([x.min.add(n), x.max.subtract(l)]), I = O.getSize();
        if (!O.contains(m)) {
          this._enforcingBounds = !0;
          var j = m.subtract(O.getCenter()), Y = O.extend(m).getSize().subtract(I);
          d.x += j.x < 0 ? -Y.x : Y.x, d.y += j.y < 0 ? -Y.y : Y.y, this.panTo(this.unproject(d), e), this._enforcingBounds = !1;
        }
        return this;
      },
      // @method invalidateSize(options: Zoom/pan options): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default. If `options.pan` is `false`, panning will not occur.
      // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
      // that it doesn't happen often even if the method is called many
      // times in a row.
      // @alternative
      // @method invalidateSize(animate: Boolean): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default.
      invalidateSize: function(t) {
        if (!this._loaded)
          return this;
        t = u({
          animate: !1,
          pan: !0
        }, t === !0 ? { animate: !0 } : t);
        var e = this.getSize();
        this._sizeChanged = !0, this._lastCenter = null;
        var n = this.getSize(), l = e.divideBy(2).round(), d = n.divideBy(2).round(), m = l.subtract(d);
        return !m.x && !m.y ? this : (t.animate && t.pan ? this.panBy(m) : (t.pan && this._rawPanBy(m), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(h(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: e,
          newSize: n
        }));
      },
      // @section Methods for modifying map state
      // @method stop(): this
      // Stops the currently running `panTo` or `flyTo` animation, if any.
      stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      },
      // @section Geolocation methods
      // @method locate(options?: Locate options): this
      // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
      // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
      // and optionally sets the map view to the user's location with respect to
      // detection accuracy (or to the world view if geolocation failed).
      // Note that, if your page doesn't use HTTPS, this method will fail in
      // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
      // See `Locate options` for more details.
      locate: function(t) {
        if (t = this._locateOptions = u({
          timeout: 1e4,
          watch: !1
          // setView: false
          // maxZoom: <Number>
          // maximumAge: 0
          // enableHighAccuracy: false
        }, t), !("geolocation" in navigator))
          return this._handleGeolocationError({
            code: 0,
            message: "Geolocation not supported."
          }), this;
        var e = h(this._handleGeolocationResponse, this), n = h(this._handleGeolocationError, this);
        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, n, t) : navigator.geolocation.getCurrentPosition(e, n, t), this;
      },
      // @method stopLocate(): this
      // Stops watching location previously initiated by `map.locate({watch: true})`
      // and aborts resetting the map view if map.locate was called with
      // `{setView: true}`.
      stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      },
      _handleGeolocationError: function(t) {
        if (this._container._leaflet_id) {
          var e = t.code, n = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: e,
            message: "Geolocation error: " + n + "."
          });
        }
      },
      _handleGeolocationResponse: function(t) {
        if (this._container._leaflet_id) {
          var e = t.coords.latitude, n = t.coords.longitude, l = new q(e, n), d = l.toBounds(t.coords.accuracy * 2), m = this._locateOptions;
          if (m.setView) {
            var x = this.getBoundsZoom(d);
            this.setView(l, m.maxZoom ? Math.min(x, m.maxZoom) : x);
          }
          var O = {
            latlng: l,
            bounds: d,
            timestamp: t.timestamp
          };
          for (var I in t.coords)
            typeof t.coords[I] == "number" && (O[I] = t.coords[I]);
          this.fire("locationfound", O);
        }
      },
      // TODO Appropriate docs section?
      // @section Other Methods
      // @method addHandler(name: String, HandlerClass: Function): this
      // Adds a new `Handler` to the map, given its name and constructor function.
      addHandler: function(t, e) {
        if (!e)
          return this;
        var n = this[t] = new e(this);
        return this._handlers.push(n), this.options[t] && n.enable(), this;
      },
      // @method remove(): this
      // Destroys the map and clears all related event listeners.
      remove: function() {
        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), yt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (rt(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var t;
        for (t in this._layers)
          this._layers[t].remove();
        for (t in this._panes)
          yt(this._panes[t]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      // @section Other Methods
      // @method createPane(name: String, container?: HTMLElement): HTMLElement
      // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
      // then returns it. The pane is created as a child of `container`, or
      // as a child of the main map pane if not set.
      createPane: function(t, e) {
        var n = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), l = ft("div", n, e || this._mapPane);
        return t && (this._panes[t] = l), l;
      },
      // @section Methods for Getting Map State
      // @method getCenter(): LatLng
      // Returns the geographical center of the map view
      getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      // @method getZoom(): Number
      // Returns the current zoom level of the map view
      getZoom: function() {
        return this._zoom;
      },
      // @method getBounds(): LatLngBounds
      // Returns the geographical bounds visible in the current map view
      getBounds: function() {
        var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), n = this.unproject(t.getTopRight());
        return new X(e, n);
      },
      // @method getMinZoom(): Number
      // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
      getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      },
      // @method getMaxZoom(): Number
      // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
      getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      },
      // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
      // Returns the maximum zoom level on which the given bounds fit to the map
      // view in its entirety. If `inside` (optional) is set to `true`, the method
      // instead returns the minimum zoom level on which the map view fits into
      // the given bounds in its entirety.
      getBoundsZoom: function(t, e, n) {
        t = G(t), n = E(n || [0, 0]);
        var l = this.getZoom() || 0, d = this.getMinZoom(), m = this.getMaxZoom(), x = t.getNorthWest(), O = t.getSouthEast(), I = this.getSize().subtract(n), j = U(this.project(O, l), this.project(x, l)).getSize(), Y = K.any3d ? this.options.zoomSnap : 1, et = I.x / j.x, lt = I.y / j.y, St = e ? Math.max(et, lt) : Math.min(et, lt);
        return l = this.getScaleZoom(St, l), Y && (l = Math.round(l / (Y / 100)) * (Y / 100), l = e ? Math.ceil(l / Y) * Y : Math.floor(l / Y) * Y), Math.max(d, Math.min(m, l));
      },
      // @method getSize(): Point
      // Returns the current size of the map container (in pixels).
      getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new D(
          this._container.clientWidth || 0,
          this._container.clientHeight || 0
        ), this._sizeChanged = !1), this._size.clone();
      },
      // @method getPixelBounds(): Bounds
      // Returns the bounds of the current map view in projected pixel
      // coordinates (sometimes useful in layer and overlay implementations).
      getPixelBounds: function(t, e) {
        var n = this._getTopLeftPoint(t, e);
        return new F(n, n.add(this.getSize()));
      },
      // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
      // the map pane? "left point of the map layer" can be confusing, specially
      // since there can be negative offsets.
      // @method getPixelOrigin(): Point
      // Returns the projected pixel coordinates of the top left point of
      // the map layer (useful in custom layer and overlay implementations).
      getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      // @method getPixelWorldBounds(zoom?: Number): Bounds
      // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
      // If `zoom` is omitted, the map's current zoom level is used.
      getPixelWorldBounds: function(t) {
        return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
      },
      // @section Other Methods
      // @method getPane(pane: String|HTMLElement): HTMLElement
      // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
      getPane: function(t) {
        return typeof t == "string" ? this._panes[t] : t;
      },
      // @method getPanes(): Object
      // Returns a plain object containing the names of all [panes](#map-pane) as keys and
      // the panes as values.
      getPanes: function() {
        return this._panes;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the map.
      getContainer: function() {
        return this._container;
      },
      // @section Conversion Methods
      // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
      // Returns the scale factor to be applied to a map transition from zoom level
      // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
      getZoomScale: function(t, e) {
        var n = this.options.crs;
        return e = e === void 0 ? this._zoom : e, n.scale(t) / n.scale(e);
      },
      // @method getScaleZoom(scale: Number, fromZoom: Number): Number
      // Returns the zoom level that the map would end up at, if it is at `fromZoom`
      // level and everything is scaled by a factor of `scale`. Inverse of
      // [`getZoomScale`](#map-getZoomScale).
      getScaleZoom: function(t, e) {
        var n = this.options.crs;
        e = e === void 0 ? this._zoom : e;
        var l = n.zoom(t * n.scale(e));
        return isNaN(l) ? 1 / 0 : l;
      },
      // @method project(latlng: LatLng, zoom: Number): Point
      // Projects a geographical coordinate `LatLng` according to the projection
      // of the map's CRS, then scales it according to `zoom` and the CRS's
      // `Transformation`. The result is pixel coordinate relative to
      // the CRS origin.
      project: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(V(t), e);
      },
      // @method unproject(point: Point, zoom: Number): LatLng
      // Inverse of [`project`](#map-project).
      unproject: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(E(t), e);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(t) {
        var e = E(t).add(this.getPixelOrigin());
        return this.unproject(e);
      },
      // @method latLngToLayerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the [origin pixel](#map-getpixelorigin).
      latLngToLayerPoint: function(t) {
        var e = this.project(V(t))._round();
        return e._subtract(this.getPixelOrigin());
      },
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
      // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
      // CRS's bounds.
      // By default this means longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees.
      wrapLatLng: function(t) {
        return this.options.crs.wrapLatLng(V(t));
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring that
      // its center is within the CRS's bounds.
      // By default this means the center longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees, and the majority of the bounds
      // overlaps the CRS's bounds.
      wrapLatLngBounds: function(t) {
        return this.options.crs.wrapLatLngBounds(G(t));
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates according to
      // the map's CRS. By default this measures distance in meters.
      distance: function(t, e) {
        return this.options.crs.distance(V(t), V(e));
      },
      // @method containerPointToLayerPoint(point: Point): Point
      // Given a pixel coordinate relative to the map container, returns the corresponding
      // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
      containerPointToLayerPoint: function(t) {
        return E(t).subtract(this._getMapPanePos());
      },
      // @method layerPointToContainerPoint(point: Point): Point
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding pixel coordinate relative to the map container.
      layerPointToContainerPoint: function(t) {
        return E(t).add(this._getMapPanePos());
      },
      // @method containerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the map container, returns
      // the corresponding geographical coordinate (for the current zoom level).
      containerPointToLatLng: function(t) {
        var e = this.containerPointToLayerPoint(E(t));
        return this.layerPointToLatLng(e);
      },
      // @method latLngToContainerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the map container.
      latLngToContainerPoint: function(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(V(t)));
      },
      // @method mouseEventToContainerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to the
      // map container where the event took place.
      mouseEventToContainerPoint: function(t) {
        return cr(t, this._container);
      },
      // @method mouseEventToLayerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to
      // the [origin pixel](#map-getpixelorigin) where the event took place.
      mouseEventToLayerPoint: function(t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
      },
      // @method mouseEventToLatLng(ev: MouseEvent): LatLng
      // Given a MouseEvent object, returns geographical coordinate where the
      // event took place.
      mouseEventToLatLng: function(t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      // map initialization methods
      _initContainer: function(t) {
        var e = this._container = ar(t);
        if (e) {
          if (e._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        st(e, "scroll", this._onScroll, this), this._containerId = f(e);
      },
      _initLayout: function() {
        var t = this._container;
        this._fadeAnimated = this.options.fadeAnimation && K.any3d, at(t, "leaflet-container" + (K.touch ? " leaflet-touch" : "") + (K.retina ? " leaflet-retina" : "") + (K.ielt9 ? " leaflet-oldie" : "") + (K.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var e = Ne(t, "position");
        e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var t = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), wt(this._mapPane, new D(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (at(t.markerPane, "leaflet-zoom-hide"), at(t.shadowPane, "leaflet-zoom-hide"));
      },
      // private methods that modify map state
      // @section Map state change events
      _resetView: function(t, e, n) {
        wt(this._mapPane, new D(0, 0));
        var l = !this._loaded;
        this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
        var d = this._zoom !== e;
        this._moveStart(d, n)._move(t, e)._moveEnd(d), this.fire("viewreset"), l && this.fire("load");
      },
      _moveStart: function(t, e) {
        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
      },
      _move: function(t, e, n, l) {
        e === void 0 && (e = this._zoom);
        var d = this._zoom !== e;
        return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), l ? n && n.pinch && this.fire("zoom", n) : ((d || n && n.pinch) && this.fire("zoom", n), this.fire("move", n)), this;
      },
      _moveEnd: function(t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return rt(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(t) {
        wt(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function() {
        if (!this._loaded)
          throw new Error("Set map center and zoom first.");
      },
      // DOM event handling
      // @section Interaction events
      _initEvents: function(t) {
        this._targets = {}, this._targets[f(this._container)] = this;
        var e = t ? vt : st;
        e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), K.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        rt(this._resizeRequest), this._resizeRequest = J(
          function() {
            this.invalidateSize({ debounceMoveend: !0 });
          },
          this
        );
      },
      _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      },
      _onMoveEnd: function() {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function(t, e) {
        for (var n = [], l, d = e === "mouseout" || e === "mouseover", m = t.target || t.srcElement, x = !1; m; ) {
          if (l = this._targets[f(m)], l && (e === "click" || e === "preclick") && this._draggableMoved(l)) {
            x = !0;
            break;
          }
          if (l && l.listens(e, !0) && (d && !nn(m, t) || (n.push(l), d)) || m === this._container)
            break;
          m = m.parentNode;
        }
        return !n.length && !x && !d && this.listens(e, !0) && (n = [this]), n;
      },
      _isClickDisabled: function(t) {
        for (; t && t !== this._container; ) {
          if (t._leaflet_disable_click)
            return !0;
          t = t.parentNode;
        }
      },
      _handleDOMEvent: function(t) {
        var e = t.target || t.srcElement;
        if (!(!this._loaded || e._leaflet_disable_events || t.type === "click" && this._isClickDisabled(e))) {
          var n = t.type;
          n === "mousedown" && $i(e), this._fireDOMEvent(t, n);
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function(t, e, n) {
        if (t.type === "click") {
          var l = u({}, t);
          l.type = "preclick", this._fireDOMEvent(l, l.type, n);
        }
        var d = this._findEventTargets(t, e);
        if (n) {
          for (var m = [], x = 0; x < n.length; x++)
            n[x].listens(e, !0) && m.push(n[x]);
          d = m.concat(d);
        }
        if (d.length) {
          e === "contextmenu" && Ct(t);
          var O = d[0], I = {
            originalEvent: t
          };
          if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
            var j = O.getLatLng && (!O._radius || O._radius <= 10);
            I.containerPoint = j ? this.latLngToContainerPoint(O.getLatLng()) : this.mouseEventToContainerPoint(t), I.layerPoint = this.containerPointToLayerPoint(I.containerPoint), I.latlng = j ? O.getLatLng() : this.layerPointToLatLng(I.layerPoint);
          }
          for (x = 0; x < d.length; x++)
            if (d[x].fire(e, I, !0), I.originalEvent._stopped || d[x].options.bubblingMouseEvents === !1 && C(this._mouseEvents, e) !== -1)
              return;
        }
      },
      _draggableMoved: function(t) {
        return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function() {
        for (var t = 0, e = this._handlers.length; t < e; t++)
          this._handlers[t].disable();
      },
      // @section Other Methods
      // @method whenReady(fn: Function, context?: Object): this
      // Runs the given function `fn` when the map gets initialized with
      // a view (center and zoom) and at least one layer, or immediately
      // if it's already initialized, optionally passing a function context.
      whenReady: function(t, e) {
        return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
      },
      // private methods for getting map state
      _getMapPanePos: function() {
        return _e(this._mapPane) || new D(0, 0);
      },
      _moved: function() {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function(t, e) {
        var n = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
        return n.subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function(t, e) {
        var n = this.getSize()._divideBy(2);
        return this.project(t, e)._subtract(n)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function(t, e, n) {
        var l = this._getNewPixelOrigin(n, e);
        return this.project(t, e)._subtract(l);
      },
      _latLngBoundsToNewLayerBounds: function(t, e, n) {
        var l = this._getNewPixelOrigin(n, e);
        return U([
          this.project(t.getSouthWest(), e)._subtract(l),
          this.project(t.getNorthWest(), e)._subtract(l),
          this.project(t.getSouthEast(), e)._subtract(l),
          this.project(t.getNorthEast(), e)._subtract(l)
        ]);
      },
      // layer point of the current center
      _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      // offset of the specified place to the current center in pixels
      _getCenterOffset: function(t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      // adjust center for view to get inside bounds
      _limitCenter: function(t, e, n) {
        if (!n)
          return t;
        var l = this.project(t, e), d = this.getSize().divideBy(2), m = new F(l.subtract(d), l.add(d)), x = this._getBoundsOffset(m, n, e);
        return Math.abs(x.x) <= 1 && Math.abs(x.y) <= 1 ? t : this.unproject(l.add(x), e);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(t, e) {
        if (!e)
          return t;
        var n = this.getPixelBounds(), l = new F(n.min.add(t), n.max.add(t));
        return t.add(this._getBoundsOffset(l, e));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function(t, e, n) {
        var l = U(
          this.project(e.getNorthEast(), n),
          this.project(e.getSouthWest(), n)
        ), d = l.min.subtract(t.min), m = l.max.subtract(t.max), x = this._rebound(d.x, -m.x), O = this._rebound(d.y, -m.y);
        return new D(x, O);
      },
      _rebound: function(t, e) {
        return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      },
      _limitZoom: function(t) {
        var e = this.getMinZoom(), n = this.getMaxZoom(), l = K.any3d ? this.options.zoomSnap : 1;
        return l && (t = Math.round(t / l) * l), Math.max(e, Math.min(n, t));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        bt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(t, e) {
        var n = this._getCenterOffset(t)._trunc();
        return (e && e.animate) !== !0 && !this.getSize().contains(n) ? !1 : (this.panBy(n, e), !0);
      },
      _createAnimProxy: function() {
        var t = this._proxy = ft("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
          var n = Vi, l = this._proxy.style[n];
          de(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), l === this._proxy.style[n] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        yt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var t = this.getCenter(), e = this.getZoom();
        de(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
      },
      _catchTransitionEnd: function(t) {
        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function(t, e, n) {
        if (this._animatingZoom)
          return !0;
        if (n = n || {}, !this._zoomAnimated || n.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
          return !1;
        var l = this.getZoomScale(e), d = this._getCenterOffset(t)._divideBy(1 - 1 / l);
        return n.animate !== !0 && !this.getSize().contains(d) ? !1 : (J(function() {
          this._moveStart(!0, n.noMoveStart || !1)._animateZoom(t, e, !0);
        }, this), !0);
      },
      _animateZoom: function(t, e, n, l) {
        this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, at(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: t,
          zoom: e,
          noUpdate: l
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(h(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && bt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function Gs(t, e) {
      return new ut(t, e);
    }
    var Wt = g.extend({
      // @section
      // @aka Control Options
      options: {
        // @option position: String = 'topright'
        // The position of the control (one of the map corners). Possible values are `'topleft'`,
        // `'topright'`, `'bottomleft'` or `'bottomright'`
        position: "topright"
      },
      initialize: function(t) {
        S(this, t);
      },
      /* @section
       * Classes extending L.Control will inherit the following methods:
       *
       * @method getPosition: string
       * Returns the position of the control.
       */
      getPosition: function() {
        return this.options.position;
      },
      // @method setPosition(position: string): this
      // Sets the position of the control.
      setPosition: function(t) {
        var e = this._map;
        return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTMLElement that contains the control.
      getContainer: function() {
        return this._container;
      },
      // @method addTo(map: Map): this
      // Adds the control to the given map.
      addTo: function(t) {
        this.remove(), this._map = t;
        var e = this._container = this.onAdd(t), n = this.getPosition(), l = t._controlCorners[n];
        return at(e, "leaflet-control"), n.indexOf("bottom") !== -1 ? l.insertBefore(e, l.firstChild) : l.appendChild(e), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (yt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(t) {
        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
      }
    }), Ye = function(t) {
      return new Wt(t);
    };
    ut.include({
      // @method addControl(control: Control): this
      // Adds the given control to the map
      addControl: function(t) {
        return t.addTo(this), this;
      },
      // @method removeControl(control: Control): this
      // Removes the given control from the map
      removeControl: function(t) {
        return t.remove(), this;
      },
      _initControlPos: function() {
        var t = this._controlCorners = {}, e = "leaflet-", n = this._controlContainer = ft("div", e + "control-container", this._container);
        function l(d, m) {
          var x = e + d + " " + e + m;
          t[d + m] = ft("div", x, n);
        }
        l("top", "left"), l("top", "right"), l("bottom", "left"), l("bottom", "right");
      },
      _clearControlPos: function() {
        for (var t in this._controlCorners)
          yt(this._controlCorners[t]);
        yt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var _r = Wt.extend({
      // @section
      // @aka Control.Layers options
      options: {
        // @option collapsed: Boolean = true
        // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
        collapsed: !0,
        position: "topright",
        // @option autoZIndex: Boolean = true
        // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
        autoZIndex: !0,
        // @option hideSingleBase: Boolean = false
        // If `true`, the base layers in the control will be hidden when there is only one.
        hideSingleBase: !1,
        // @option sortLayers: Boolean = false
        // Whether to sort the layers. When `false`, layers will keep the order
        // in which they were added to the control.
        sortLayers: !1,
        // @option sortFunction: Function = *
        // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
        // that will be used for sorting the layers, when `sortLayers` is `true`.
        // The function receives both the `L.Layer` instances and their names, as in
        // `sortFunction(layerA, layerB, nameA, nameB)`.
        // By default, it sorts layers alphabetically by their name.
        sortFunction: function(t, e, n, l) {
          return n < l ? -1 : l < n ? 1 : 0;
        }
      },
      initialize: function(t, e, n) {
        S(this, n), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
        for (var l in t)
          this._addLayer(t[l], l);
        for (l in e)
          this._addLayer(e[l], l, !0);
      },
      onAdd: function(t) {
        this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++)
          this._layers[e].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function(t) {
        return Wt.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      // @method addBaseLayer(layer: Layer, name: String): this
      // Adds a base layer (radio button entry) with the given name to the control.
      addBaseLayer: function(t, e) {
        return this._addLayer(t, e), this._map ? this._update() : this;
      },
      // @method addOverlay(layer: Layer, name: String): this
      // Adds an overlay (checkbox entry) with the given name to the control.
      addOverlay: function(t, e) {
        return this._addLayer(t, e, !0), this._map ? this._update() : this;
      },
      // @method removeLayer(layer: Layer): this
      // Remove the given layer from the control.
      removeLayer: function(t) {
        t.off("add remove", this._onLayerChange, this);
        var e = this._getLayer(f(t));
        return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
      },
      // @method expand(): this
      // Expand the control container if collapsed.
      expand: function() {
        at(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return t < this._section.clientHeight ? (at(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : bt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      // @method collapse(): this
      // Collapse the control container if expanded.
      collapse: function() {
        return bt(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var t = "leaflet-control-layers", e = this._container = ft("div", t), n = this.options.collapsed;
        e.setAttribute("aria-haspopup", !0), We(e), en(e);
        var l = this._section = ft("section", t + "-list");
        n && (this._map.on("click", this.collapse, this), st(e, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var d = this._layersLink = ft("a", t + "-toggle", e);
        d.href = "#", d.title = "Layers", d.setAttribute("role", "button"), st(d, {
          keydown: function(m) {
            m.keyCode === 13 && this._expandSafely();
          },
          // Certain screen readers intercept the key event and instead send a click event
          click: function(m) {
            Ct(m), this._expandSafely();
          }
        }, this), n || this.expand(), this._baseLayersList = ft("div", t + "-base", l), this._separator = ft("div", t + "-separator", l), this._overlaysList = ft("div", t + "-overlays", l), e.appendChild(l);
      },
      _getLayer: function(t) {
        for (var e = 0; e < this._layers.length; e++)
          if (this._layers[e] && f(this._layers[e].layer) === t)
            return this._layers[e];
      },
      _addLayer: function(t, e, n) {
        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: t,
          name: e,
          overlay: n
        }), this.options.sortLayers && this._layers.sort(h(function(l, d) {
          return this.options.sortFunction(l.layer, d.layer, l.name, d.name);
        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container)
          return this;
        di(this._baseLayersList), di(this._overlaysList), this._layerControlInputs = [];
        var t, e, n, l, d = 0;
        for (n = 0; n < this._layers.length; n++)
          l = this._layers[n], this._addItem(l), e = e || l.overlay, t = t || !l.overlay, d += l.overlay ? 0 : 1;
        return this.options.hideSingleBase && (t = t && d > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
      },
      _onLayerChange: function(t) {
        this._handlingClick || this._update();
        var e = this._getLayer(f(t.target)), n = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
        n && this._map.fire(n, e);
      },
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
      _createRadioElement: function(t, e) {
        var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", l = document.createElement("div");
        return l.innerHTML = n, l.firstChild;
      },
      _addItem: function(t) {
        var e = document.createElement("label"), n = this._map.hasLayer(t.layer), l;
        t.overlay ? (l = document.createElement("input"), l.type = "checkbox", l.className = "leaflet-control-layers-selector", l.defaultChecked = n) : l = this._createRadioElement("leaflet-base-layers_" + f(this), n), this._layerControlInputs.push(l), l.layerId = f(t.layer), st(l, "click", this._onInputClick, this);
        var d = document.createElement("span");
        d.innerHTML = " " + t.name;
        var m = document.createElement("span");
        e.appendChild(m), m.appendChild(l), m.appendChild(d);
        var x = t.overlay ? this._overlaysList : this._baseLayersList;
        return x.appendChild(e), this._checkDisabledLayers(), e;
      },
      _onInputClick: function() {
        if (!this._preventClick) {
          var t = this._layerControlInputs, e, n, l = [], d = [];
          this._handlingClick = !0;
          for (var m = t.length - 1; m >= 0; m--)
            e = t[m], n = this._getLayer(e.layerId).layer, e.checked ? l.push(n) : e.checked || d.push(n);
          for (m = 0; m < d.length; m++)
            this._map.hasLayer(d[m]) && this._map.removeLayer(d[m]);
          for (m = 0; m < l.length; m++)
            this._map.hasLayer(l[m]) || this._map.addLayer(l[m]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function() {
        for (var t = this._layerControlInputs, e, n, l = this._map.getZoom(), d = t.length - 1; d >= 0; d--)
          e = t[d], n = this._getLayer(e.layerId).layer, e.disabled = n.options.minZoom !== void 0 && l < n.options.minZoom || n.options.maxZoom !== void 0 && l > n.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function() {
        var t = this._section;
        this._preventClick = !0, st(t, "click", Ct), this.expand();
        var e = this;
        setTimeout(function() {
          vt(t, "click", Ct), e._preventClick = !1;
        });
      }
    }), qs = function(t, e, n) {
      return new _r(t, e, n);
    }, rn = Wt.extend({
      // @section
      // @aka Control.Zoom options
      options: {
        position: "topleft",
        // @option zoomInText: String = '<span aria-hidden="true">+</span>'
        // The text set on the 'zoom in' button.
        zoomInText: '<span aria-hidden="true">+</span>',
        // @option zoomInTitle: String = 'Zoom in'
        // The title set on the 'zoom in' button.
        zoomInTitle: "Zoom in",
        // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
        // The text set on the 'zoom out' button.
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        // @option zoomOutTitle: String = 'Zoom out'
        // The title set on the 'zoom out' button.
        zoomOutTitle: "Zoom out"
      },
      onAdd: function(t) {
        var e = "leaflet-control-zoom", n = ft("div", e + " leaflet-bar"), l = this.options;
        return this._zoomInButton = this._createButton(
          l.zoomInText,
          l.zoomInTitle,
          e + "-in",
          n,
          this._zoomIn
        ), this._zoomOutButton = this._createButton(
          l.zoomOutText,
          l.zoomOutTitle,
          e + "-out",
          n,
          this._zoomOut
        ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), n;
      },
      onRemove: function(t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function() {
        return this._disabled = !0, this._updateDisabled(), this;
      },
      enable: function() {
        return this._disabled = !1, this._updateDisabled(), this;
      },
      _zoomIn: function(t) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function(t) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function(t, e, n, l, d) {
        var m = ft("a", n, l);
        return m.innerHTML = t, m.href = "#", m.title = e, m.setAttribute("role", "button"), m.setAttribute("aria-label", e), We(m), st(m, "click", pe), st(m, "click", d, this), st(m, "click", this._refocusOnMap, this), m;
      },
      _updateDisabled: function() {
        var t = this._map, e = "leaflet-disabled";
        bt(this._zoomInButton, e), bt(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (at(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (at(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    ut.mergeOptions({
      zoomControl: !0
    }), ut.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new rn(), this.addControl(this.zoomControl));
    });
    var Xs = function(t) {
      return new rn(t);
    }, mr = Wt.extend({
      // @section
      // @aka Control.Scale options
      options: {
        position: "bottomleft",
        // @option maxWidth: Number = 100
        // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
        maxWidth: 100,
        // @option metric: Boolean = True
        // Whether to show the metric scale line (m/km).
        metric: !0,
        // @option imperial: Boolean = True
        // Whether to show the imperial scale line (mi/ft).
        imperial: !0
        // @option updateWhenIdle: Boolean = false
        // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
      },
      onAdd: function(t) {
        var e = "leaflet-control-scale", n = ft("div", e), l = this.options;
        return this._addScales(l, e + "-line", n), t.on(l.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), n;
      },
      onRemove: function(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(t, e, n) {
        t.metric && (this._mScale = ft("div", e, n)), t.imperial && (this._iScale = ft("div", e, n));
      },
      _update: function() {
        var t = this._map, e = t.getSize().y / 2, n = t.distance(
          t.containerPointToLatLng([0, e]),
          t.containerPointToLatLng([this.options.maxWidth, e])
        );
        this._updateScales(n);
      },
      _updateScales: function(t) {
        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function(t) {
        var e = this._getRoundNum(t), n = e < 1e3 ? e + " m" : e / 1e3 + " km";
        this._updateScale(this._mScale, n, e / t);
      },
      _updateImperial: function(t) {
        var e = t * 3.2808399, n, l, d;
        e > 5280 ? (n = e / 5280, l = this._getRoundNum(n), this._updateScale(this._iScale, l + " mi", l / n)) : (d = this._getRoundNum(e), this._updateScale(this._iScale, d + " ft", d / e));
      },
      _updateScale: function(t, e, n) {
        t.style.width = Math.round(this.options.maxWidth * n) + "px", t.innerHTML = e;
      },
      _getRoundNum: function(t) {
        var e = Math.pow(10, (Math.floor(t) + "").length - 1), n = t / e;
        return n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1, e * n;
      }
    }), $s = function(t) {
      return new mr(t);
    }, Ks = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', on = Wt.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String|false = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (K.inlineSvg ? Ks + " " : "") + "Leaflet</a>"
      },
      initialize: function(t) {
        S(this, t), this._attributions = {};
      },
      onAdd: function(t) {
        t.attributionControl = this, this._container = ft("div", "leaflet-control-attribution"), We(this._container);
        for (var e in t._layers)
          t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
      },
      onRemove: function(t) {
        t.off("layeradd", this._addAttribution, this);
      },
      _addAttribution: function(t) {
        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
          this.removeAttribution(t.layer.getAttribution());
        }, this));
      },
      // @method setPrefix(prefix: String|false): this
      // The HTML text shown before the attributions. Pass `false` to disable.
      setPrefix: function(t) {
        return this.options.prefix = t, this._update(), this;
      },
      // @method addAttribution(text: String): this
      // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
      addAttribution: function(t) {
        return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
      },
      // @method removeAttribution(text: String): this
      // Removes an attribution text.
      removeAttribution: function(t) {
        return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
      },
      _update: function() {
        if (this._map) {
          var t = [];
          for (var e in this._attributions)
            this._attributions[e] && t.push(e);
          var n = [];
          this.options.prefix && n.push(this.options.prefix), t.length && n.push(t.join(", ")), this._container.innerHTML = n.join(' <span aria-hidden="true">|</span> ');
        }
      }
    });
    ut.mergeOptions({
      attributionControl: !0
    }), ut.addInitHook(function() {
      this.options.attributionControl && new on().addTo(this);
    });
    var Js = function(t) {
      return new on(t);
    };
    Wt.Layers = _r, Wt.Zoom = rn, Wt.Scale = mr, Wt.Attribution = on, Ye.layers = qs, Ye.zoom = Xs, Ye.scale = $s, Ye.attribution = Js;
    var Qt = g.extend({
      initialize: function(t) {
        this._map = t;
      },
      // @method enable(): this
      // Enables the handler
      enable: function() {
        return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
      },
      // @method disable(): this
      // Disables the handler
      disable: function() {
        return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
      },
      // @method enabled(): Boolean
      // Returns `true` if the handler is enabled
      enabled: function() {
        return !!this._enabled;
      }
      // @section Extension methods
      // Classes inheriting from `Handler` must implement the two following methods:
      // @method addHooks()
      // Called when the handler is enabled, should add event hooks.
      // @method removeHooks()
      // Called when the handler is disabled, should remove the event hooks added previously.
    });
    Qt.addTo = function(t, e) {
      return t.addHandler(e, this), this;
    };
    var Qs = { Events: M }, pr = K.touch ? "touchstart mousedown" : "mousedown", he = W.extend({
      options: {
        // @section
        // @aka Draggable options
        // @option clickTolerance: Number = 3
        // The max number of pixels a user can shift the mouse pointer during a click
        // for it to be considered a valid click (as opposed to a mouse drag).
        clickTolerance: 3
      },
      // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
      // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
      initialize: function(t, e, n, l) {
        S(this, l), this._element = t, this._dragStartTarget = e || t, this._preventOutline = n;
      },
      // @method enable()
      // Enables the dragging ability
      enable: function() {
        this._enabled || (st(this._dragStartTarget, pr, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (he._dragging === this && this.finishDrag(!0), vt(this._dragStartTarget, pr, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(t) {
        if (this._enabled && (this._moved = !1, !Hi(this._element, "leaflet-zoom-anim"))) {
          if (t.touches && t.touches.length !== 1) {
            he._dragging === this && this.finishDrag();
            return;
          }
          if (!(he._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (he._dragging = this, this._preventOutline && $i(this._element), Gi(), Ue(), !this._moving)) {
            this.fire("down");
            var e = t.touches ? t.touches[0] : t, n = lr(this._element);
            this._startPoint = new D(e.clientX, e.clientY), this._startPos = _e(this._element), this._parentScale = Ki(n);
            var l = t.type === "mousedown";
            st(document, l ? "mousemove" : "touchmove", this._onMove, this), st(document, l ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      },
      _onMove: function(t) {
        if (this._enabled) {
          if (t.touches && t.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, n = new D(e.clientX, e.clientY)._subtract(this._startPoint);
          !n.x && !n.y || Math.abs(n.x) + Math.abs(n.y) < this.options.clickTolerance || (n.x /= this._parentScale.x, n.y /= this._parentScale.y, Ct(t), this._moved || (this.fire("dragstart"), this._moved = !0, at(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), at(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(n), this._moving = !0, this._lastEvent = t, this._updatePosition());
        }
      },
      _updatePosition: function() {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t), wt(this._element, this._newPos), this.fire("drag", t);
      },
      _onUp: function() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function(t) {
        bt(document.body, "leaflet-dragging"), this._lastTarget && (bt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), vt(document, "mousemove touchmove", this._onMove, this), vt(document, "mouseup touchend touchcancel", this._onUp, this), qi(), Ve();
        var e = this._moved && this._moving;
        this._moving = !1, he._dragging = !1, e && this.fire("dragend", {
          noInertia: t,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
    function gr(t, e, n) {
      var l, d = [1, 4, 2, 8], m, x, O, I, j, Y, et, lt;
      for (m = 0, Y = t.length; m < Y; m++)
        t[m]._code = ge(t[m], e);
      for (O = 0; O < 4; O++) {
        for (et = d[O], l = [], m = 0, Y = t.length, x = Y - 1; m < Y; x = m++)
          I = t[m], j = t[x], I._code & et ? j._code & et || (lt = vi(j, I, et, e, n), lt._code = ge(lt, e), l.push(lt)) : (j._code & et && (lt = vi(j, I, et, e, n), lt._code = ge(lt, e), l.push(lt)), l.push(I));
        t = l;
      }
      return t;
    }
    function vr(t, e) {
      var n, l, d, m, x, O, I, j, Y;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      Ft(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var et = V([0, 0]), lt = G(t), St = lt.getNorthWest().distanceTo(lt.getSouthWest()) * lt.getNorthEast().distanceTo(lt.getNorthWest());
      St < 1700 && (et = sn(t));
      var kt = t.length, Nt = [];
      for (n = 0; n < kt; n++) {
        var It = V(t[n]);
        Nt.push(e.project(V([It.lat - et.lat, It.lng - et.lng])));
      }
      for (O = I = j = 0, n = 0, l = kt - 1; n < kt; l = n++)
        d = Nt[n], m = Nt[l], x = d.y * m.x - m.y * d.x, I += (d.x + m.x) * x, j += (d.y + m.y) * x, O += x * 3;
      O === 0 ? Y = Nt[0] : Y = [I / O, j / O];
      var Se = e.unproject(E(Y));
      return V([Se.lat + et.lat, Se.lng + et.lng]);
    }
    function sn(t) {
      for (var e = 0, n = 0, l = 0, d = 0; d < t.length; d++) {
        var m = V(t[d]);
        e += m.lat, n += m.lng, l++;
      }
      return V([e / l, n / l]);
    }
    var ta = {
      __proto__: null,
      clipPolygon: gr,
      polygonCenter: vr,
      centroid: sn
    };
    function yr(t, e) {
      if (!e || !t.length)
        return t.slice();
      var n = e * e;
      return t = na(t, n), t = ia(t, n), t;
    }
    function br(t, e, n) {
      return Math.sqrt(Ge(t, e, n, !0));
    }
    function ea(t, e, n) {
      return Ge(t, e, n);
    }
    function ia(t, e) {
      var n = t.length, l = typeof Uint8Array < "u" ? Uint8Array : Array, d = new l(n);
      d[0] = d[n - 1] = 1, an(t, d, e, 0, n - 1);
      var m, x = [];
      for (m = 0; m < n; m++)
        d[m] && x.push(t[m]);
      return x;
    }
    function an(t, e, n, l, d) {
      var m = 0, x, O, I;
      for (O = l + 1; O <= d - 1; O++)
        I = Ge(t[O], t[l], t[d], !0), I > m && (x = O, m = I);
      m > n && (e[x] = 1, an(t, e, n, l, x), an(t, e, n, x, d));
    }
    function na(t, e) {
      for (var n = [t[0]], l = 1, d = 0, m = t.length; l < m; l++)
        ra(t[l], t[d]) > e && (n.push(t[l]), d = l);
      return d < m - 1 && n.push(t[m - 1]), n;
    }
    var wr;
    function xr(t, e, n, l, d) {
      var m = l ? wr : ge(t, n), x = ge(e, n), O, I, j;
      for (wr = x; ; ) {
        if (!(m | x))
          return [t, e];
        if (m & x)
          return !1;
        O = m || x, I = vi(t, e, O, n, d), j = ge(I, n), O === m ? (t = I, m = j) : (e = I, x = j);
      }
    }
    function vi(t, e, n, l, d) {
      var m = e.x - t.x, x = e.y - t.y, O = l.min, I = l.max, j, Y;
      return n & 8 ? (j = t.x + m * (I.y - t.y) / x, Y = I.y) : n & 4 ? (j = t.x + m * (O.y - t.y) / x, Y = O.y) : n & 2 ? (j = I.x, Y = t.y + x * (I.x - t.x) / m) : n & 1 && (j = O.x, Y = t.y + x * (O.x - t.x) / m), new D(j, Y, d);
    }
    function ge(t, e) {
      var n = 0;
      return t.x < e.min.x ? n |= 1 : t.x > e.max.x && (n |= 2), t.y < e.min.y ? n |= 4 : t.y > e.max.y && (n |= 8), n;
    }
    function ra(t, e) {
      var n = e.x - t.x, l = e.y - t.y;
      return n * n + l * l;
    }
    function Ge(t, e, n, l) {
      var d = e.x, m = e.y, x = n.x - d, O = n.y - m, I = x * x + O * O, j;
      return I > 0 && (j = ((t.x - d) * x + (t.y - m) * O) / I, j > 1 ? (d = n.x, m = n.y) : j > 0 && (d += x * j, m += O * j)), x = t.x - d, O = t.y - m, l ? x * x + O * O : new D(d, m);
    }
    function Ft(t) {
      return !T(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
    }
    function Lr(t) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Ft(t);
    }
    function Pr(t, e) {
      var n, l, d, m, x, O, I, j;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      Ft(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var Y = V([0, 0]), et = G(t), lt = et.getNorthWest().distanceTo(et.getSouthWest()) * et.getNorthEast().distanceTo(et.getNorthWest());
      lt < 1700 && (Y = sn(t));
      var St = t.length, kt = [];
      for (n = 0; n < St; n++) {
        var Nt = V(t[n]);
        kt.push(e.project(V([Nt.lat - Y.lat, Nt.lng - Y.lng])));
      }
      for (n = 0, l = 0; n < St - 1; n++)
        l += kt[n].distanceTo(kt[n + 1]) / 2;
      if (l === 0)
        j = kt[0];
      else
        for (n = 0, m = 0; n < St - 1; n++)
          if (x = kt[n], O = kt[n + 1], d = x.distanceTo(O), m += d, m > l) {
            I = (m - l) / d, j = [
              O.x - I * (O.x - x.x),
              O.y - I * (O.y - x.y)
            ];
            break;
          }
      var It = e.unproject(E(j));
      return V([It.lat + Y.lat, It.lng + Y.lng]);
    }
    var oa = {
      __proto__: null,
      simplify: yr,
      pointToSegmentDistance: br,
      closestPointOnSegment: ea,
      clipSegment: xr,
      _getEdgeIntersection: vi,
      _getBitCode: ge,
      _sqClosestPointOnSegment: Ge,
      isFlat: Ft,
      _flat: Lr,
      polylineCenter: Pr
    }, ln = {
      project: function(t) {
        return new D(t.lng, t.lat);
      },
      unproject: function(t) {
        return new q(t.y, t.x);
      },
      bounds: new F([-180, -90], [180, 90])
    }, hn = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new F([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(t) {
        var e = Math.PI / 180, n = this.R, l = t.lat * e, d = this.R_MINOR / n, m = Math.sqrt(1 - d * d), x = m * Math.sin(l), O = Math.tan(Math.PI / 4 - l / 2) / Math.pow((1 - x) / (1 + x), m / 2);
        return l = -n * Math.log(Math.max(O, 1e-10)), new D(t.lng * e * n, l);
      },
      unproject: function(t) {
        for (var e = 180 / Math.PI, n = this.R, l = this.R_MINOR / n, d = Math.sqrt(1 - l * l), m = Math.exp(-t.y / n), x = Math.PI / 2 - 2 * Math.atan(m), O = 0, I = 0.1, j; O < 15 && Math.abs(I) > 1e-7; O++)
          j = d * Math.sin(x), j = Math.pow((1 - j) / (1 + j), d / 2), I = Math.PI / 2 - 2 * Math.atan(m * j) - x, x += I;
        return new q(x * e, t.x * e / n);
      }
    }, sa = {
      __proto__: null,
      LonLat: ln,
      Mercator: hn,
      SphericalMercator: ht
    }, aa = u({}, nt, {
      code: "EPSG:3395",
      projection: hn,
      transformation: function() {
        var t = 0.5 / (Math.PI * hn.R);
        return H(t, 0.5, -t, 0.5);
      }()
    }), Tr = u({}, nt, {
      code: "EPSG:4326",
      projection: ln,
      transformation: H(1 / 180, 1, -1 / 180, 0.5)
    }), la = u({}, tt, {
      projection: ln,
      transformation: H(1, 0, -1, 0),
      scale: function(t) {
        return Math.pow(2, t);
      },
      zoom: function(t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function(t, e) {
        var n = e.lng - t.lng, l = e.lat - t.lat;
        return Math.sqrt(n * n + l * l);
      },
      infinite: !0
    });
    tt.Earth = nt, tt.EPSG3395 = aa, tt.EPSG3857 = Ot, tt.EPSG900913 = be, tt.EPSG4326 = Tr, tt.Simple = la;
    var Yt = W.extend({
      // Classes extending `L.Layer` will inherit the following options:
      options: {
        // @option pane: String = 'overlayPane'
        // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
        pane: "overlayPane",
        // @option attribution: String = null
        // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
        attribution: null,
        bubblingMouseEvents: !0
      },
      /* @section
       * Classes extending `L.Layer` will inherit the following methods:
       *
       * @method addTo(map: Map|LayerGroup): this
       * Adds the layer to the given map or layer group.
       */
      addTo: function(t) {
        return t.addLayer(this), this;
      },
      // @method remove: this
      // Removes the layer from the map it is currently active on.
      remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      // @method removeFrom(map: Map): this
      // Removes the layer from the given map
      //
      // @alternative
      // @method removeFrom(group: LayerGroup): this
      // Removes the layer from the given `LayerGroup`
      removeFrom: function(t) {
        return t && t.removeLayer(this), this;
      },
      // @method getPane(name? : String): HTMLElement
      // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
      getPane: function(t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function(t) {
        return this._map._targets[f(t)] = this, this;
      },
      removeInteractiveTarget: function(t) {
        return delete this._map._targets[f(t)], this;
      },
      // @method getAttribution: String
      // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
      getAttribution: function() {
        return this.options.attribution;
      },
      _layerAdd: function(t) {
        var e = t.target;
        if (e.hasLayer(this)) {
          if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
            var n = this.getEvents();
            e.on(n, this), this.once("remove", function() {
              e.off(n, this);
            }, this);
          }
          this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
        }
      }
    });
    ut.include({
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the map
      addLayer: function(t) {
        if (!t._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var e = f(t);
        return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the map.
      removeLayer: function(t) {
        var e = f(t);
        return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the map
      hasLayer: function(t) {
        return f(t) in this._layers;
      },
      /* @method eachLayer(fn: Function, context?: Object): this
       * Iterates over the layers of the map, optionally specifying context of the iterator function.
       * ```
       * map.eachLayer(function(layer){
       *     layer.bindPopup('Hello');
       * });
       * ```
       */
      eachLayer: function(t, e) {
        for (var n in this._layers)
          t.call(e, this._layers[n]);
        return this;
      },
      _addLayers: function(t) {
        t = t ? T(t) ? t : [t] : [];
        for (var e = 0, n = t.length; e < n; e++)
          this.addLayer(t[e]);
      },
      _addZoomLimit: function(t) {
        (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[f(t)] = t, this._updateZoomLevels());
      },
      _removeZoomLimit: function(t) {
        var e = f(t);
        this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
      },
      _updateZoomLevels: function() {
        var t = 1 / 0, e = -1 / 0, n = this._getZoomSpan();
        for (var l in this._zoomBoundLayers) {
          var d = this._zoomBoundLayers[l].options;
          t = d.minZoom === void 0 ? t : Math.min(t, d.minZoom), e = d.maxZoom === void 0 ? e : Math.max(e, d.maxZoom);
        }
        this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    });
    var Pe = Yt.extend({
      initialize: function(t, e) {
        S(this, e), this._layers = {};
        var n, l;
        if (t)
          for (n = 0, l = t.length; n < l; n++)
            this.addLayer(t[n]);
      },
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the group.
      addLayer: function(t) {
        var e = this.getLayerId(t);
        return this._layers[e] = t, this._map && this._map.addLayer(t), this;
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the group.
      // @alternative
      // @method removeLayer(id: Number): this
      // Removes the layer with the given internal ID from the group.
      removeLayer: function(t) {
        var e = t in this._layers ? t : this.getLayerId(t);
        return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the group.
      // @alternative
      // @method hasLayer(id: Number): Boolean
      // Returns `true` if the given internal ID is currently added to the group.
      hasLayer: function(t) {
        var e = typeof t == "number" ? t : this.getLayerId(t);
        return e in this._layers;
      },
      // @method clearLayers(): this
      // Removes all the layers from the group.
      clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      },
      // @method invoke(methodName: String, …): this
      // Calls `methodName` on every layer contained in this group, passing any
      // additional parameters. Has no effect if the layers contained do not
      // implement `methodName`.
      invoke: function(t) {
        var e = Array.prototype.slice.call(arguments, 1), n, l;
        for (n in this._layers)
          l = this._layers[n], l[t] && l[t].apply(l, e);
        return this;
      },
      onAdd: function(t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function(t) {
        this.eachLayer(t.removeLayer, t);
      },
      // @method eachLayer(fn: Function, context?: Object): this
      // Iterates over the layers of the group, optionally specifying context of the iterator function.
      // ```js
      // group.eachLayer(function (layer) {
      // 	layer.bindPopup('Hello');
      // });
      // ```
      eachLayer: function(t, e) {
        for (var n in this._layers)
          t.call(e, this._layers[n]);
        return this;
      },
      // @method getLayer(id: Number): Layer
      // Returns the layer with the given internal ID.
      getLayer: function(t) {
        return this._layers[t];
      },
      // @method getLayers(): Layer[]
      // Returns an array of all the layers added to the group.
      getLayers: function() {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      // @method setZIndex(zIndex: Number): this
      // Calls `setZIndex` on every layer contained in this group, passing the z-index.
      setZIndex: function(t) {
        return this.invoke("setZIndex", t);
      },
      // @method getLayerId(layer: Layer): Number
      // Returns the internal ID for a layer
      getLayerId: function(t) {
        return f(t);
      }
    }), ha = function(t, e) {
      return new Pe(t, e);
    }, ee = Pe.extend({
      addLayer: function(t) {
        return this.hasLayer(t) ? this : (t.addEventParent(this), Pe.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
      },
      removeLayer: function(t) {
        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Pe.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
      },
      // @method setStyle(style: Path options): this
      // Sets the given path options to each layer of the group that has a `setStyle` method.
      setStyle: function(t) {
        return this.invoke("setStyle", t);
      },
      // @method bringToFront(): this
      // Brings the layer group to the top of all other layers
      bringToFront: function() {
        return this.invoke("bringToFront");
      },
      // @method bringToBack(): this
      // Brings the layer group to the back of all other layers
      bringToBack: function() {
        return this.invoke("bringToBack");
      },
      // @method getBounds(): LatLngBounds
      // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
      getBounds: function() {
        var t = new X();
        for (var e in this._layers) {
          var n = this._layers[e];
          t.extend(n.getBounds ? n.getBounds() : n.getLatLng());
        }
        return t;
      }
    }), ua = function(t, e) {
      return new ee(t, e);
    }, Te = g.extend({
      /* @section
       * @aka Icon options
       *
       * @option iconUrl: String = null
       * **(required)** The URL to the icon image (absolute or relative to your script path).
       *
       * @option iconRetinaUrl: String = null
       * The URL to a retina sized version of the icon image (absolute or relative to your
       * script path). Used for Retina screen devices.
       *
       * @option iconSize: Point = null
       * Size of the icon image in pixels.
       *
       * @option iconAnchor: Point = null
       * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
       * will be aligned so that this point is at the marker's geographical location. Centered
       * by default if size is specified, also can be set in CSS with negative margins.
       *
       * @option popupAnchor: Point = [0, 0]
       * The coordinates of the point from which popups will "open", relative to the icon anchor.
       *
       * @option tooltipAnchor: Point = [0, 0]
       * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
       *
       * @option shadowUrl: String = null
       * The URL to the icon shadow image. If not specified, no shadow image will be created.
       *
       * @option shadowRetinaUrl: String = null
       *
       * @option shadowSize: Point = null
       * Size of the shadow image in pixels.
       *
       * @option shadowAnchor: Point = null
       * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
       * as iconAnchor if not specified).
       *
       * @option className: String = ''
       * A custom class name to assign to both icon and shadow images. Empty by default.
       */
      options: {
        popupAnchor: [0, 0],
        tooltipAnchor: [0, 0],
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1
      },
      initialize: function(t) {
        S(this, t);
      },
      // @method createIcon(oldIcon?: HTMLElement): HTMLElement
      // Called internally when the icon has to be shown, returns a `<img>` HTML element
      // styled according to the options.
      createIcon: function(t) {
        return this._createIcon("icon", t);
      },
      // @method createShadow(oldIcon?: HTMLElement): HTMLElement
      // As `createIcon`, but for the shadow beneath it.
      createShadow: function(t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function(t, e) {
        var n = this._getIconUrl(t);
        if (!n) {
          if (t === "icon")
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var l = this._createImg(n, e && e.tagName === "IMG" ? e : null);
        return this._setIconStyles(l, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (l.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), l;
      },
      _setIconStyles: function(t, e) {
        var n = this.options, l = n[e + "Size"];
        typeof l == "number" && (l = [l, l]);
        var d = E(l), m = E(e === "shadow" && n.shadowAnchor || n.iconAnchor || d && d.divideBy(2, !0));
        t.className = "leaflet-marker-" + e + " " + (n.className || ""), m && (t.style.marginLeft = -m.x + "px", t.style.marginTop = -m.y + "px"), d && (t.style.width = d.x + "px", t.style.height = d.y + "px");
      },
      _createImg: function(t, e) {
        return e = e || document.createElement("img"), e.src = t, e;
      },
      _getIconUrl: function(t) {
        return K.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
      }
    });
    function ca(t) {
      return new Te(t);
    }
    var qe = Te.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      },
      _getIconUrl: function(t) {
        return typeof qe.imagePath != "string" && (qe.imagePath = this._detectIconPath()), (this.options.imagePath || qe.imagePath) + Te.prototype._getIconUrl.call(this, t);
      },
      _stripUrl: function(t) {
        var e = function(n, l, d) {
          var m = l.exec(n);
          return m && m[d];
        };
        return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function() {
        var t = ft("div", "leaflet-default-icon-path", document.body), e = Ne(t, "background-image") || Ne(t, "backgroundImage");
        if (document.body.removeChild(t), e = this._stripUrl(e), e)
          return e;
        var n = document.querySelector('link[href$="leaflet.css"]');
        return n ? n.href.substring(0, n.href.length - 11 - 1) : "";
      }
    }), kr = Qt.extend({
      initialize: function(t) {
        this._marker = t;
      },
      addHooks: function() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new he(t, t, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), at(t, "leaflet-marker-draggable");
      },
      removeHooks: function() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && bt(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(t) {
        var e = this._marker, n = e._map, l = this._marker.options.autoPanSpeed, d = this._marker.options.autoPanPadding, m = _e(e._icon), x = n.getPixelBounds(), O = n.getPixelOrigin(), I = U(
          x.min._subtract(O).add(d),
          x.max._subtract(O).subtract(d)
        );
        if (!I.contains(m)) {
          var j = E(
            (Math.max(I.max.x, m.x) - I.max.x) / (x.max.x - I.max.x) - (Math.min(I.min.x, m.x) - I.min.x) / (x.min.x - I.min.x),
            (Math.max(I.max.y, m.y) - I.max.y) / (x.max.y - I.max.y) - (Math.min(I.min.y, m.y) - I.min.y) / (x.min.y - I.min.y)
          ).multiplyBy(l);
          n.panBy(j, { animate: !1 }), this._draggable._newPos._add(j), this._draggable._startPos._add(j), wt(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = J(this._adjustPan.bind(this, t));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(t) {
        this._marker.options.autoPan && (rt(this._panRequest), this._panRequest = J(this._adjustPan.bind(this, t)));
      },
      _onDrag: function(t) {
        var e = this._marker, n = e._shadow, l = _e(e._icon), d = e._map.layerPointToLatLng(l);
        n && wt(n, l), e._latlng = d, t.latlng = d, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function(t) {
        rt(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      }
    }), yi = Yt.extend({
      // @section
      // @aka Marker options
      options: {
        // @option icon: Icon = *
        // Icon instance to use for rendering the marker.
        // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
        // If not specified, a common instance of `L.Icon.Default` is used.
        icon: new qe(),
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option keyboard: Boolean = true
        // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
        keyboard: !0,
        // @option title: String = ''
        // Text for the browser tooltip that appear on marker hover (no tooltip by default).
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        title: "",
        // @option alt: String = 'Marker'
        // Text for the `alt` attribute of the icon image.
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        alt: "Marker",
        // @option zIndexOffset: Number = 0
        // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
        zIndexOffset: 0,
        // @option opacity: Number = 1.0
        // The opacity of the marker.
        opacity: 1,
        // @option riseOnHover: Boolean = false
        // If `true`, the marker will get on top of others when you hover the mouse over it.
        riseOnHover: !1,
        // @option riseOffset: Number = 250
        // The z-index offset used for the `riseOnHover` feature.
        riseOffset: 250,
        // @option pane: String = 'markerPane'
        // `Map pane` where the markers icon will be added.
        pane: "markerPane",
        // @option shadowPane: String = 'shadowPane'
        // `Map pane` where the markers shadow will be added.
        shadowPane: "shadowPane",
        // @option bubblingMouseEvents: Boolean = false
        // When `true`, a mouse event on this marker will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !1,
        // @option autoPanOnFocus: Boolean = true
        // When `true`, the map will pan whenever the marker is focused (via
        // e.g. pressing `tab` on the keyboard) to ensure the marker is
        // visible within the map's bounds
        autoPanOnFocus: !0,
        // @section Draggable marker options
        // @option draggable: Boolean = false
        // Whether the marker is draggable with mouse/touch or not.
        draggable: !1,
        // @option autoPan: Boolean = false
        // Whether to pan the map when dragging this marker near its edge or not.
        autoPan: !1,
        // @option autoPanPadding: Point = Point(50, 50)
        // Distance (in pixels to the left/right and to the top/bottom) of the
        // map edge to start panning the map.
        autoPanPadding: [50, 50],
        // @option autoPanSpeed: Number = 10
        // Number of pixels the map should pan by.
        autoPanSpeed: 10
      },
      /* @section
       *
       * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
       */
      initialize: function(t, e) {
        S(this, e), this._latlng = V(t);
      },
      onAdd: function(t) {
        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      },
      onRemove: function(t) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      },
      getEvents: function() {
        return {
          zoom: this.update,
          viewreset: this.update
        };
      },
      // @method getLatLng: LatLng
      // Returns the current geographical position of the marker.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Changes the marker position to the given point.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = V(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      },
      // @method setZIndexOffset(offset: Number): this
      // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
      setZIndexOffset: function(t) {
        return this.options.zIndexOffset = t, this.update();
      },
      // @method getIcon: Icon
      // Returns the current icon used by the marker
      getIcon: function() {
        return this.options.icon;
      },
      // @method setIcon(icon: Icon): this
      // Changes the marker icon.
      setIcon: function(t) {
        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      },
      getElement: function() {
        return this._icon;
      },
      update: function() {
        if (this._icon && this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t);
        }
        return this;
      },
      _initIcon: function() {
        var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), n = t.icon.createIcon(this._icon), l = !1;
        n !== this._icon && (this._icon && this._removeIcon(), l = !0, t.title && (n.title = t.title), n.tagName === "IMG" && (n.alt = t.alt || "")), at(n, e), t.keyboard && (n.tabIndex = "0", n.setAttribute("role", "button")), this._icon = n, t.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && st(n, "focus", this._panOnFocus, this);
        var d = t.icon.createShadow(this._shadow), m = !1;
        d !== this._shadow && (this._removeShadow(), m = !0), d && (at(d, e), d.alt = ""), this._shadow = d, t.opacity < 1 && this._updateOpacity(), l && this.getPane().appendChild(this._icon), this._initInteraction(), d && m && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && vt(this._icon, "focus", this._panOnFocus, this), yt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && yt(this._shadow), this._shadow = null;
      },
      _setPos: function(t) {
        this._icon && wt(this._icon, t), this._shadow && wt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(e);
      },
      _initInteraction: function() {
        if (this.options.interactive && (at(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), kr)) {
          var t = this.options.draggable;
          this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new kr(this), t && this.dragging.enable();
        }
      },
      // @method setOpacity(opacity: Number): this
      // Changes the opacity of the marker.
      setOpacity: function(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var t = this.options.opacity;
        this._icon && jt(this._icon, t), this._shadow && jt(this._shadow, t);
      },
      _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function() {
        this._updateZIndex(0);
      },
      _panOnFocus: function() {
        var t = this._map;
        if (t) {
          var e = this.options.icon.options, n = e.iconSize ? E(e.iconSize) : E(0, 0), l = e.iconAnchor ? E(e.iconAnchor) : E(0, 0);
          t.panInside(this._latlng, {
            paddingTopLeft: l,
            paddingBottomRight: n.subtract(l)
          });
        }
      },
      _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      }
    });
    function fa(t, e) {
      return new yi(t, e);
    }
    var ue = Yt.extend({
      // @section
      // @aka Path options
      options: {
        // @option stroke: Boolean = true
        // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
        stroke: !0,
        // @option color: String = '#3388ff'
        // Stroke color
        color: "#3388ff",
        // @option weight: Number = 3
        // Stroke width in pixels
        weight: 3,
        // @option opacity: Number = 1.0
        // Stroke opacity
        opacity: 1,
        // @option lineCap: String= 'round'
        // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
        lineCap: "round",
        // @option lineJoin: String = 'round'
        // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
        lineJoin: "round",
        // @option dashArray: String = null
        // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashArray: null,
        // @option dashOffset: String = null
        // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashOffset: null,
        // @option fill: Boolean = depends
        // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
        fill: !1,
        // @option fillColor: String = *
        // Fill color. Defaults to the value of the [`color`](#path-color) option
        fillColor: null,
        // @option fillOpacity: Number = 0.2
        // Fill opacity.
        fillOpacity: 0.2,
        // @option fillRule: String = 'evenodd'
        // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
        fillRule: "evenodd",
        // className: '',
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option bubblingMouseEvents: Boolean = true
        // When `true`, a mouse event on this path will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !0
      },
      beforeAdd: function(t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      },
      onRemove: function() {
        this._renderer._removePath(this);
      },
      // @method redraw(): this
      // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
      redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      },
      // @method setStyle(style: Path options): this
      // Changes the appearance of a Path based on the options in the `Path options` object.
      setStyle: function(t) {
        return S(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all path layers.
      bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all path layers.
      bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function() {
        return this._path;
      },
      _reset: function() {
        this._project(), this._update();
      },
      _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      }
    }), bi = ue.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(t, e) {
        S(this, e), this._latlng = V(t), this._radius = this.options.radius;
      },
      // @method setLatLng(latLng: LatLng): this
      // Sets the position of a circle marker to a new location.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = V(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      },
      // @method getLatLng(): LatLng
      // Returns the current geographical position of the circle marker
      getLatLng: function() {
        return this._latlng;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle marker. Units are in pixels.
      setRadius: function(t) {
        return this.options.radius = this._radius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of the circle
      getRadius: function() {
        return this._radius;
      },
      setStyle: function(t) {
        var e = t && t.radius || this._radius;
        return ue.prototype.setStyle.call(this, t), this.setRadius(e), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var t = this._radius, e = this._radiusY || t, n = this._clickTolerance(), l = [t + n, e + n];
        this._pxBounds = new F(this._point.subtract(l), this._point.add(l));
      },
      _update: function() {
        this._map && this._updatePath();
      },
      _updatePath: function() {
        this._renderer._updateCircle(this);
      },
      _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
      }
    });
    function da(t, e) {
      return new bi(t, e);
    }
    var un = bi.extend({
      initialize: function(t, e, n) {
        if (typeof e == "number" && (e = u({}, n, { radius: e })), S(this, e), this._latlng = V(t), isNaN(this.options.radius))
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle. Units are in meters.
      setRadius: function(t) {
        return this._mRadius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of a circle. Units are in meters.
      getRadius: function() {
        return this._mRadius;
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        var t = [this._radius, this._radiusY || this._radius];
        return new X(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: ue.prototype.setStyle,
      _project: function() {
        var t = this._latlng.lng, e = this._latlng.lat, n = this._map, l = n.options.crs;
        if (l.distance === nt.distance) {
          var d = Math.PI / 180, m = this._mRadius / nt.R / d, x = n.project([e + m, t]), O = n.project([e - m, t]), I = x.add(O).divideBy(2), j = n.unproject(I).lat, Y = Math.acos((Math.cos(m * d) - Math.sin(e * d) * Math.sin(j * d)) / (Math.cos(e * d) * Math.cos(j * d))) / d;
          (isNaN(Y) || Y === 0) && (Y = m / Math.cos(Math.PI / 180 * e)), this._point = I.subtract(n.getPixelOrigin()), this._radius = isNaN(Y) ? 0 : I.x - n.project([j, t - Y]).x, this._radiusY = I.y - x.y;
        } else {
          var et = l.unproject(l.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = n.latLngToLayerPoint(this._latlng), this._radius = this._point.x - n.latLngToLayerPoint(et).x;
        }
        this._updateBounds();
      }
    });
    function _a(t, e, n) {
      return new un(t, e, n);
    }
    var ie = ue.extend({
      // @section
      // @aka Polyline options
      options: {
        // @option smoothFactor: Number = 1.0
        // How much to simplify the polyline on each zoom level. More means
        // better performance and smoother look, and less means more accurate representation.
        smoothFactor: 1,
        // @option noClip: Boolean = false
        // Disable polyline clipping.
        noClip: !1
      },
      initialize: function(t, e) {
        S(this, e), this._setLatLngs(t);
      },
      // @method getLatLngs(): LatLng[]
      // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
      getLatLngs: function() {
        return this._latlngs;
      },
      // @method setLatLngs(latlngs: LatLng[]): this
      // Replaces all the points in the polyline with the given array of geographical points.
      setLatLngs: function(t) {
        return this._setLatLngs(t), this.redraw();
      },
      // @method isEmpty(): Boolean
      // Returns `true` if the Polyline has no LatLngs.
      isEmpty: function() {
        return !this._latlngs.length;
      },
      // @method closestLayerPoint(p: Point): Point
      // Returns the point closest to `p` on the Polyline.
      closestLayerPoint: function(t) {
        for (var e = 1 / 0, n = null, l = Ge, d, m, x = 0, O = this._parts.length; x < O; x++)
          for (var I = this._parts[x], j = 1, Y = I.length; j < Y; j++) {
            d = I[j - 1], m = I[j];
            var et = l(t, d, m, !0);
            et < e && (e = et, n = l(t, d, m));
          }
        return n && (n.distance = Math.sqrt(e)), n;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Pr(this._defaultShape(), this._map.options.crs);
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        return this._bounds;
      },
      // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
      // Adds a given point to the polyline. By default, adds to the first ring of
      // the polyline in case of a multi-polyline, but can be overridden by passing
      // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
      addLatLng: function(t, e) {
        return e = e || this._defaultShape(), t = V(t), e.push(t), this._bounds.extend(t), this.redraw();
      },
      _setLatLngs: function(t) {
        this._bounds = new X(), this._latlngs = this._convertLatLngs(t);
      },
      _defaultShape: function() {
        return Ft(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
      _convertLatLngs: function(t) {
        for (var e = [], n = Ft(t), l = 0, d = t.length; l < d; l++)
          n ? (e[l] = V(t[l]), this._bounds.extend(e[l])) : e[l] = this._convertLatLngs(t[l]);
        return e;
      },
      _project: function() {
        var t = new F();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
      },
      _updateBounds: function() {
        var t = this._clickTolerance(), e = new D(t, t);
        this._rawPxBounds && (this._pxBounds = new F([
          this._rawPxBounds.min.subtract(e),
          this._rawPxBounds.max.add(e)
        ]));
      },
      // recursively turns latlngs into a set of rings with projected coordinates
      _projectLatlngs: function(t, e, n) {
        var l = t[0] instanceof q, d = t.length, m, x;
        if (l) {
          for (x = [], m = 0; m < d; m++)
            x[m] = this._map.latLngToLayerPoint(t[m]), n.extend(x[m]);
          e.push(x);
        } else
          for (m = 0; m < d; m++)
            this._projectLatlngs(t[m], e, n);
      },
      // clip polyline by renderer bounds so that we have less to render for performance
      _clipPoints: function() {
        var t = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var e = this._parts, n, l, d, m, x, O, I;
          for (n = 0, d = 0, m = this._rings.length; n < m; n++)
            for (I = this._rings[n], l = 0, x = I.length; l < x - 1; l++)
              O = xr(I[l], I[l + 1], t, l, !0), O && (e[d] = e[d] || [], e[d].push(O[0]), (O[1] !== I[l + 1] || l === x - 2) && (e[d].push(O[1]), d++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var t = this._parts, e = this.options.smoothFactor, n = 0, l = t.length; n < l; n++)
          t[n] = yr(t[n], e);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t, e) {
        var n, l, d, m, x, O, I = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (n = 0, m = this._parts.length; n < m; n++)
          for (O = this._parts[n], l = 0, x = O.length, d = x - 1; l < x; d = l++)
            if (!(!e && l === 0) && br(t, O[d], O[l]) <= I)
              return !0;
        return !1;
      }
    });
    function ma(t, e) {
      return new ie(t, e);
    }
    ie._flat = Lr;
    var ke = ie.extend({
      options: {
        fill: !0
      },
      isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return vr(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function(t) {
        var e = ie.prototype._convertLatLngs.call(this, t), n = e.length;
        return n >= 2 && e[0] instanceof q && e[0].equals(e[n - 1]) && e.pop(), e;
      },
      _setLatLngs: function(t) {
        ie.prototype._setLatLngs.call(this, t), Ft(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return Ft(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var t = this._renderer._bounds, e = this.options.weight, n = new D(e, e);
        if (t = new F(t.min.subtract(n), t.max.add(n)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var l = 0, d = this._rings.length, m; l < d; l++)
            m = gr(this._rings[l], t, !0), m.length && this._parts.push(m);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        var e = !1, n, l, d, m, x, O, I, j;
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (m = 0, I = this._parts.length; m < I; m++)
          for (n = this._parts[m], x = 0, j = n.length, O = j - 1; x < j; O = x++)
            l = n[x], d = n[O], l.y > t.y != d.y > t.y && t.x < (d.x - l.x) * (t.y - l.y) / (d.y - l.y) + l.x && (e = !e);
        return e || ie.prototype._containsPoint.call(this, t, !0);
      }
    });
    function pa(t, e) {
      return new ke(t, e);
    }
    var ne = ee.extend({
      /* @section
       * @aka GeoJSON options
       *
       * @option pointToLayer: Function = *
       * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
       * called when data is added, passing the GeoJSON point feature and its `LatLng`.
       * The default is to spawn a default `Marker`:
       * ```js
       * function(geoJsonPoint, latlng) {
       * 	return L.marker(latlng);
       * }
       * ```
       *
       * @option style: Function = *
       * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
       * called internally when data is added.
       * The default value is to not override any defaults:
       * ```js
       * function (geoJsonFeature) {
       * 	return {}
       * }
       * ```
       *
       * @option onEachFeature: Function = *
       * A `Function` that will be called once for each created `Feature`, after it has
       * been created and styled. Useful for attaching events and popups to features.
       * The default is to do nothing with the newly created layers:
       * ```js
       * function (feature, layer) {}
       * ```
       *
       * @option filter: Function = *
       * A `Function` that will be used to decide whether to include a feature or not.
       * The default is to include all features:
       * ```js
       * function (geoJsonFeature) {
       * 	return true;
       * }
       * ```
       * Note: dynamically changing the `filter` option will have effect only on newly
       * added data. It will _not_ re-evaluate already included features.
       *
       * @option coordsToLatLng: Function = *
       * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
       * The default is the `coordsToLatLng` static method.
       *
       * @option markersInheritOptions: Boolean = false
       * Whether default Markers for "Point" type Features inherit from group options.
       */
      initialize: function(t, e) {
        S(this, e), this._layers = {}, t && this.addData(t);
      },
      // @method addData( <GeoJSON> data ): this
      // Adds a GeoJSON object to the layer.
      addData: function(t) {
        var e = T(t) ? t : t.features, n, l, d;
        if (e) {
          for (n = 0, l = e.length; n < l; n++)
            d = e[n], (d.geometries || d.geometry || d.features || d.coordinates) && this.addData(d);
          return this;
        }
        var m = this.options;
        if (m.filter && !m.filter(t))
          return this;
        var x = wi(t, m);
        return x ? (x.feature = Pi(t), x.defaultOptions = x.options, this.resetStyle(x), m.onEachFeature && m.onEachFeature(t, x), this.addLayer(x)) : this;
      },
      // @method resetStyle( <Path> layer? ): this
      // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
      // If `layer` is omitted, the style of all features in the current layer is reset.
      resetStyle: function(t) {
        return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = u({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
      },
      // @method setStyle( <Function> style ): this
      // Changes styles of GeoJSON vector layers with the given style function.
      setStyle: function(t) {
        return this.eachLayer(function(e) {
          this._setLayerStyle(e, t);
        }, this);
      },
      _setLayerStyle: function(t, e) {
        t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
      }
    });
    function wi(t, e) {
      var n = t.type === "Feature" ? t.geometry : t, l = n ? n.coordinates : null, d = [], m = e && e.pointToLayer, x = e && e.coordsToLatLng || cn, O, I, j, Y;
      if (!l && !n)
        return null;
      switch (n.type) {
        case "Point":
          return O = x(l), Cr(m, t, O, e);
        case "MultiPoint":
          for (j = 0, Y = l.length; j < Y; j++)
            O = x(l[j]), d.push(Cr(m, t, O, e));
          return new ee(d);
        case "LineString":
        case "MultiLineString":
          return I = xi(l, n.type === "LineString" ? 0 : 1, x), new ie(I, e);
        case "Polygon":
        case "MultiPolygon":
          return I = xi(l, n.type === "Polygon" ? 1 : 2, x), new ke(I, e);
        case "GeometryCollection":
          for (j = 0, Y = n.geometries.length; j < Y; j++) {
            var et = wi({
              geometry: n.geometries[j],
              type: "Feature",
              properties: t.properties
            }, e);
            et && d.push(et);
          }
          return new ee(d);
        case "FeatureCollection":
          for (j = 0, Y = n.features.length; j < Y; j++) {
            var lt = wi(n.features[j], e);
            lt && d.push(lt);
          }
          return new ee(d);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function Cr(t, e, n, l) {
      return t ? t(e, n) : new yi(n, l && l.markersInheritOptions && l);
    }
    function cn(t) {
      return new q(t[1], t[0], t[2]);
    }
    function xi(t, e, n) {
      for (var l = [], d = 0, m = t.length, x; d < m; d++)
        x = e ? xi(t[d], e - 1, n) : (n || cn)(t[d]), l.push(x);
      return l;
    }
    function fn(t, e) {
      return t = V(t), t.alt !== void 0 ? [y(t.lng, e), y(t.lat, e), y(t.alt, e)] : [y(t.lng, e), y(t.lat, e)];
    }
    function Li(t, e, n, l) {
      for (var d = [], m = 0, x = t.length; m < x; m++)
        d.push(e ? Li(t[m], Ft(t[m]) ? 0 : e - 1, n, l) : fn(t[m], l));
      return !e && n && d.length > 0 && d.push(d[0].slice()), d;
    }
    function Ce(t, e) {
      return t.feature ? u({}, t.feature, { geometry: e }) : Pi(e);
    }
    function Pi(t) {
      return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
        type: "Feature",
        properties: {},
        geometry: t
      };
    }
    var dn = {
      toGeoJSON: function(t) {
        return Ce(this, {
          type: "Point",
          coordinates: fn(this.getLatLng(), t)
        });
      }
    };
    yi.include(dn), un.include(dn), bi.include(dn), ie.include({
      toGeoJSON: function(t) {
        var e = !Ft(this._latlngs), n = Li(this._latlngs, e ? 1 : 0, !1, t);
        return Ce(this, {
          type: (e ? "Multi" : "") + "LineString",
          coordinates: n
        });
      }
    }), ke.include({
      toGeoJSON: function(t) {
        var e = !Ft(this._latlngs), n = e && !Ft(this._latlngs[0]), l = Li(this._latlngs, n ? 2 : e ? 1 : 0, !0, t);
        return e || (l = [l]), Ce(this, {
          type: (n ? "Multi" : "") + "Polygon",
          coordinates: l
        });
      }
    }), Pe.include({
      toMultiPoint: function(t) {
        var e = [];
        return this.eachLayer(function(n) {
          e.push(n.toGeoJSON(t).geometry.coordinates);
        }), Ce(this, {
          type: "MultiPoint",
          coordinates: e
        });
      },
      // @method toGeoJSON(precision?: Number|false): Object
      // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
      // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
      toGeoJSON: function(t) {
        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (e === "MultiPoint")
          return this.toMultiPoint(t);
        var n = e === "GeometryCollection", l = [];
        return this.eachLayer(function(d) {
          if (d.toGeoJSON) {
            var m = d.toGeoJSON(t);
            if (n)
              l.push(m.geometry);
            else {
              var x = Pi(m);
              x.type === "FeatureCollection" ? l.push.apply(l, x.features) : l.push(x);
            }
          }
        }), n ? Ce(this, {
          geometries: l,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: l
        };
      }
    });
    function Mr(t, e) {
      return new ne(t, e);
    }
    var ga = Mr, Ti = Yt.extend({
      // @section
      // @aka ImageOverlay options
      options: {
        // @option opacity: Number = 1.0
        // The opacity of the image overlay.
        opacity: 1,
        // @option alt: String = ''
        // Text for the `alt` attribute of the image (useful for accessibility).
        alt: "",
        // @option interactive: Boolean = false
        // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
        interactive: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the image.
        // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option errorOverlayUrl: String = ''
        // URL to the overlay image to show in place of the overlay that failed to load.
        errorOverlayUrl: "",
        // @option zIndex: Number = 1
        // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
        zIndex: 1,
        // @option className: String = ''
        // A custom class name to assign to the image. Empty by default.
        className: ""
      },
      initialize: function(t, e, n) {
        this._url = t, this._bounds = G(e), S(this, n);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (at(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        yt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      // @method setOpacity(opacity: Number): this
      // Sets the opacity of the overlay.
      setOpacity: function(t) {
        return this.options.opacity = t, this._image && this._updateOpacity(), this;
      },
      setStyle: function(t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all overlays.
      bringToFront: function() {
        return this._map && xe(this._image), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all overlays.
      bringToBack: function() {
        return this._map && Le(this._image), this;
      },
      // @method setUrl(url: String): this
      // Changes the URL of the image.
      setUrl: function(t) {
        return this._url = t, this._image && (this._image.src = t), this;
      },
      // @method setBounds(bounds: LatLngBounds): this
      // Update the bounds that this ImageOverlay covers
      setBounds: function(t) {
        return this._bounds = G(t), this._map && this._reset(), this;
      },
      getEvents: function() {
        var t = {
          zoom: this._reset,
          viewreset: this._reset
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method setZIndex(value: Number): this
      // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method getBounds(): LatLngBounds
      // Get the bounds that this ImageOverlay covers
      getBounds: function() {
        return this._bounds;
      },
      // @method getElement(): HTMLElement
      // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
      // used by this overlay.
      getElement: function() {
        return this._image;
      },
      _initImage: function() {
        var t = this._url.tagName === "IMG", e = this._image = t ? this._url : ft("img");
        if (at(e, "leaflet-image-layer"), this._zoomAnimated && at(e, "leaflet-zoom-animated"), this.options.className && at(e, this.options.className), e.onselectstart = p, e.onmousemove = p, e.onload = h(this.fire, this, "load"), e.onerror = h(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
          this._url = e.src;
          return;
        }
        e.src = this._url, e.alt = this.options.alt;
      },
      _animateZoom: function(t) {
        var e = this._map.getZoomScale(t.zoom), n = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        de(this._image, n, e);
      },
      _reset: function() {
        var t = this._image, e = new F(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), n = e.getSize();
        wt(t, e.min), t.style.width = n.x + "px", t.style.height = n.y + "px";
      },
      _updateOpacity: function() {
        jt(this._image, this.options.opacity);
      },
      _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function() {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && (this._url = t, this._image.src = t);
      },
      // @method getCenter(): LatLng
      // Returns the center of the ImageOverlay.
      getCenter: function() {
        return this._bounds.getCenter();
      }
    }), va = function(t, e, n) {
      return new Ti(t, e, n);
    }, Sr = Ti.extend({
      // @section
      // @aka VideoOverlay options
      options: {
        // @option autoplay: Boolean = true
        // Whether the video starts playing automatically when loaded.
        // On some browsers autoplay will only work with `muted: true`
        autoplay: !0,
        // @option loop: Boolean = true
        // Whether the video will loop back to the beginning when played.
        loop: !0,
        // @option keepAspectRatio: Boolean = true
        // Whether the video will save aspect ratio after the projection.
        // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
        keepAspectRatio: !0,
        // @option muted: Boolean = false
        // Whether the video starts on mute when loaded.
        muted: !1,
        // @option playsInline: Boolean = true
        // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
        playsInline: !0
      },
      _initImage: function() {
        var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : ft("video");
        if (at(e, "leaflet-image-layer"), this._zoomAnimated && at(e, "leaflet-zoom-animated"), this.options.className && at(e, this.options.className), e.onselectstart = p, e.onmousemove = p, e.onloadeddata = h(this.fire, this, "load"), t) {
          for (var n = e.getElementsByTagName("source"), l = [], d = 0; d < n.length; d++)
            l.push(n[d].src);
          this._url = n.length > 0 ? l : [e.src];
          return;
        }
        T(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
        for (var m = 0; m < this._url.length; m++) {
          var x = ft("source");
          x.src = this._url[m], e.appendChild(x);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function ya(t, e, n) {
      return new Sr(t, e, n);
    }
    var zr = Ti.extend({
      _initImage: function() {
        var t = this._image = this._url;
        at(t, "leaflet-image-layer"), this._zoomAnimated && at(t, "leaflet-zoom-animated"), this.options.className && at(t, this.options.className), t.onselectstart = p, t.onmousemove = p;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function ba(t, e, n) {
      return new zr(t, e, n);
    }
    var te = Yt.extend({
      // @section
      // @aka DivOverlay options
      options: {
        // @option interactive: Boolean = false
        // If true, the popup/tooltip will listen to the mouse events.
        interactive: !1,
        // @option offset: Point = Point(0, 0)
        // The offset of the overlay position.
        offset: [0, 0],
        // @option className: String = ''
        // A custom CSS class name to assign to the overlay.
        className: "",
        // @option pane: String = undefined
        // `Map pane` where the overlay will be added.
        pane: void 0,
        // @option content: String|HTMLElement|Function = ''
        // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
        // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
        content: ""
      },
      initialize: function(t, e) {
        t && (t instanceof q || T(t)) ? (this._latlng = V(t), S(this, e)) : (S(this, t), this._source = e), this.options.content && (this._content = this.options.content);
      },
      // @method openOn(map: Map): this
      // Adds the overlay to the map.
      // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
      },
      // @method close(): this
      // Closes the overlay.
      // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
      // and `layer.closePopup()`/`.closeTooltip()`.
      close: function() {
        return this._map && this._map.removeLayer(this), this;
      },
      // @method toggle(layer?: Layer): this
      // Opens or closes the overlay bound to layer depending on its current state.
      // Argument may be omitted only for overlay bound to layer.
      // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
      toggle: function(t) {
        return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
      },
      onAdd: function(t) {
        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && jt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && jt(this._container, 1), this.bringToFront(), this.options.interactive && (at(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function(t) {
        t._fadeAnimated ? (jt(this._container, 0), this._removeTimeout = setTimeout(h(yt, void 0, this._container), 200)) : yt(this._container), this.options.interactive && (bt(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      },
      // @namespace DivOverlay
      // @method getLatLng: LatLng
      // Returns the geographical point of the overlay.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Sets the geographical point where the overlay will open.
      setLatLng: function(t) {
        return this._latlng = V(t), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      // @method getContent: String|HTMLElement
      // Returns the content of the overlay.
      getContent: function() {
        return this._content;
      },
      // @method setContent(htmlContent: String|HTMLElement|Function): this
      // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
      // The function should return a `String` or `HTMLElement` to be used in the overlay.
      setContent: function(t) {
        return this._content = t, this.update(), this;
      },
      // @method getElement: String|HTMLElement
      // Returns the HTML container of the overlay.
      getElement: function() {
        return this._container;
      },
      // @method update: null
      // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
      update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      },
      getEvents: function() {
        var t = {
          zoom: this._updatePosition,
          viewreset: this._updatePosition
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method isOpen: Boolean
      // Returns `true` when the overlay is visible on the map.
      isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      },
      // @method bringToFront: this
      // Brings this overlay in front of other overlays (in the same map pane).
      bringToFront: function() {
        return this._map && xe(this._container), this;
      },
      // @method bringToBack: this
      // Brings this overlay to the back of other overlays (in the same map pane).
      bringToBack: function() {
        return this._map && Le(this._container), this;
      },
      // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
      _prepareOpen: function(t) {
        var e = this._source;
        if (!e._map)
          return !1;
        if (e instanceof ee) {
          e = null;
          var n = this._source._layers;
          for (var l in n)
            if (n[l]._map) {
              e = n[l];
              break;
            }
          if (!e)
            return !1;
          this._source = e;
        }
        if (!t)
          if (e.getCenter)
            t = e.getCenter();
          else if (e.getLatLng)
            t = e.getLatLng();
          else if (e.getBounds)
            t = e.getBounds().getCenter();
          else
            throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function() {
        if (this._content) {
          var t = this._contentNode, e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof e == "string")
            t.innerHTML = e;
          else {
            for (; t.hasChildNodes(); )
              t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function() {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng), e = E(this.options.offset), n = this._getAnchor();
          this._zoomAnimated ? wt(this._container, t.add(n)) : e = e.add(t).add(n);
          var l = this._containerBottom = -e.y, d = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
          this._container.style.bottom = l + "px", this._container.style.left = d + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    });
    ut.include({
      _initOverlay: function(t, e, n, l) {
        var d = e;
        return d instanceof t || (d = new t(l).setContent(e)), n && d.setLatLng(n), d;
      }
    }), Yt.include({
      _initOverlay: function(t, e, n, l) {
        var d = n;
        return d instanceof t ? (S(d, l), d._source = this) : (d = e && !l ? e : new t(l, this), d.setContent(n)), d;
      }
    });
    var ki = te.extend({
      // @section
      // @aka Popup options
      options: {
        // @option pane: String = 'popupPane'
        // `Map pane` where the popup will be added.
        pane: "popupPane",
        // @option offset: Point = Point(0, 7)
        // The offset of the popup position.
        offset: [0, 7],
        // @option maxWidth: Number = 300
        // Max width of the popup, in pixels.
        maxWidth: 300,
        // @option minWidth: Number = 50
        // Min width of the popup, in pixels.
        minWidth: 50,
        // @option maxHeight: Number = null
        // If set, creates a scrollable container of the given height
        // inside a popup if its content exceeds it.
        // The scrollable container can be styled using the
        // `leaflet-popup-scrolled` CSS class selector.
        maxHeight: null,
        // @option autoPan: Boolean = true
        // Set it to `false` if you don't want the map to do panning animation
        // to fit the opened popup.
        autoPan: !0,
        // @option autoPanPaddingTopLeft: Point = null
        // The margin between the popup and the top left corner of the map
        // view after autopanning was performed.
        autoPanPaddingTopLeft: null,
        // @option autoPanPaddingBottomRight: Point = null
        // The margin between the popup and the bottom right corner of the map
        // view after autopanning was performed.
        autoPanPaddingBottomRight: null,
        // @option autoPanPadding: Point = Point(5, 5)
        // Equivalent of setting both top left and bottom right autopan padding to the same value.
        autoPanPadding: [5, 5],
        // @option keepInView: Boolean = false
        // Set it to `true` if you want to prevent users from panning the popup
        // off of the screen while it is open.
        keepInView: !1,
        // @option closeButton: Boolean = true
        // Controls the presence of a close button in the popup.
        closeButton: !0,
        // @option autoClose: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the popup closing when another popup is opened.
        autoClose: !0,
        // @option closeOnEscapeKey: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the ESC key for closing of the popup.
        closeOnEscapeKey: !0,
        // @option closeOnClick: Boolean = *
        // Set it if you want to override the default behavior of the popup closing when user clicks
        // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
        // @option className: String = ''
        // A custom CSS class name to assign to the popup.
        className: ""
      },
      // @namespace Popup
      // @method openOn(map: Map): this
      // Alternative to `map.openPopup(popup)`.
      // Adds the popup to the map and closes the previous one.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, te.prototype.openOn.call(this, t);
      },
      onAdd: function(t) {
        te.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof ue || this._source.on("preclick", me));
      },
      onRemove: function(t) {
        te.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof ue || this._source.off("preclick", me));
      },
      getEvents: function() {
        var t = te.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      },
      _initLayout: function() {
        var t = "leaflet-popup", e = this._container = ft(
          "div",
          t + " " + (this.options.className || "") + " leaflet-zoom-animated"
        ), n = this._wrapper = ft("div", t + "-content-wrapper", e);
        if (this._contentNode = ft("div", t + "-content", n), We(e), en(this._contentNode), st(e, "contextmenu", me), this._tipContainer = ft("div", t + "-tip-container", e), this._tip = ft("div", t + "-tip", this._tipContainer), this.options.closeButton) {
          var l = this._closeButton = ft("a", t + "-close-button", e);
          l.setAttribute("role", "button"), l.setAttribute("aria-label", "Close popup"), l.href = "#close", l.innerHTML = '<span aria-hidden="true">&#215;</span>', st(l, "click", function(d) {
            Ct(d), this.close();
          }, this);
        }
      },
      _updateLayout: function() {
        var t = this._contentNode, e = t.style;
        e.width = "", e.whiteSpace = "nowrap";
        var n = t.offsetWidth;
        n = Math.min(n, this.options.maxWidth), n = Math.max(n, this.options.minWidth), e.width = n + 1 + "px", e.whiteSpace = "", e.height = "";
        var l = t.offsetHeight, d = this.options.maxHeight, m = "leaflet-popup-scrolled";
        d && l > d ? (e.height = d + "px", at(t, m)) : bt(t, m), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), n = this._getAnchor();
        wt(this._container, e.add(n));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = !1;
            return;
          }
          var t = this._map, e = parseInt(Ne(this._container, "marginBottom"), 10) || 0, n = this._container.offsetHeight + e, l = this._containerWidth, d = new D(this._containerLeft, -n - this._containerBottom);
          d._add(_e(this._container));
          var m = t.layerPointToContainerPoint(d), x = E(this.options.autoPanPadding), O = E(this.options.autoPanPaddingTopLeft || x), I = E(this.options.autoPanPaddingBottomRight || x), j = t.getSize(), Y = 0, et = 0;
          m.x + l + I.x > j.x && (Y = m.x + l - j.x + I.x), m.x - Y - O.x < 0 && (Y = m.x - O.x), m.y + n + I.y > j.y && (et = m.y + n - j.y + I.y), m.y - et - O.y < 0 && (et = m.y - O.y), (Y || et) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([Y, et]));
        }
      },
      _getAnchor: function() {
        return E(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), wa = function(t, e) {
      return new ki(t, e);
    };
    ut.mergeOptions({
      closePopupOnClick: !0
    }), ut.include({
      // @method openPopup(popup: Popup): this
      // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
      // @alternative
      // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
      // Creates a popup with the specified content and options and opens it in the given point on a map.
      openPopup: function(t, e, n) {
        return this._initOverlay(ki, t, e, n).openOn(this), this;
      },
      // @method closePopup(popup?: Popup): this
      // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
      closePopup: function(t) {
        return t = arguments.length ? t : this._popup, t && t.close(), this;
      }
    }), Yt.include({
      // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
      // Binds a popup to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindPopup: function(t, e) {
        return this._popup = this._initOverlay(ki, this._popup, t, e), this._popupHandlersAdded || (this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !0), this;
      },
      // @method unbindPopup(): this
      // Removes the popup previously bound with `bindPopup`.
      unbindPopup: function() {
        return this._popup && (this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !1, this._popup = null), this;
      },
      // @method openPopup(latlng?: LatLng): this
      // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
      openPopup: function(t) {
        return this._popup && (this instanceof ee || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
      },
      // @method closePopup(): this
      // Closes the popup bound to this layer if it is open.
      closePopup: function() {
        return this._popup && this._popup.close(), this;
      },
      // @method togglePopup(): this
      // Opens or closes the popup bound to this layer depending on its current state.
      togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      },
      // @method isPopupOpen(): boolean
      // Returns `true` if the popup bound to this layer is currently open.
      isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : !1;
      },
      // @method setPopupContent(content: String|HTMLElement|Popup): this
      // Sets the content of the popup bound to this layer.
      setPopupContent: function(t) {
        return this._popup && this._popup.setContent(t), this;
      },
      // @method getPopup(): Popup
      // Returns the popup bound to this layer.
      getPopup: function() {
        return this._popup;
      },
      _openPopup: function(t) {
        if (!(!this._popup || !this._map)) {
          pe(t);
          var e = t.layer || t.target;
          if (this._popup._source === e && !(e instanceof ue)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
            return;
          }
          this._popup._source = e, this.openPopup(t.latlng);
        }
      },
      _movePopup: function(t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function(t) {
        t.originalEvent.keyCode === 13 && this._openPopup(t);
      }
    });
    var Ci = te.extend({
      // @section
      // @aka Tooltip options
      options: {
        // @option pane: String = 'tooltipPane'
        // `Map pane` where the tooltip will be added.
        pane: "tooltipPane",
        // @option offset: Point = Point(0, 0)
        // Optional offset of the tooltip position.
        offset: [0, 0],
        // @option direction: String = 'auto'
        // Direction where to open the tooltip. Possible values are: `right`, `left`,
        // `top`, `bottom`, `center`, `auto`.
        // `auto` will dynamically switch between `right` and `left` according to the tooltip
        // position on the map.
        direction: "auto",
        // @option permanent: Boolean = false
        // Whether to open the tooltip permanently or only on mouseover.
        permanent: !1,
        // @option sticky: Boolean = false
        // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
        sticky: !1,
        // @option opacity: Number = 0.9
        // Tooltip container opacity.
        opacity: 0.9
      },
      onAdd: function(t) {
        te.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      },
      onRemove: function(t) {
        te.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      },
      getEvents: function() {
        var t = te.prototype.getEvents.call(this);
        return this.options.permanent || (t.preclick = this.close), t;
      },
      _initLayout: function() {
        var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = ft("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + f(this));
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(t) {
        var e, n, l = this._map, d = this._container, m = l.latLngToContainerPoint(l.getCenter()), x = l.layerPointToContainerPoint(t), O = this.options.direction, I = d.offsetWidth, j = d.offsetHeight, Y = E(this.options.offset), et = this._getAnchor();
        O === "top" ? (e = I / 2, n = j) : O === "bottom" ? (e = I / 2, n = 0) : O === "center" ? (e = I / 2, n = j / 2) : O === "right" ? (e = 0, n = j / 2) : O === "left" ? (e = I, n = j / 2) : x.x < m.x ? (O = "right", e = 0, n = j / 2) : (O = "left", e = I + (Y.x + et.x) * 2, n = j / 2), t = t.subtract(E(e, n, !0)).add(Y).add(et), bt(d, "leaflet-tooltip-right"), bt(d, "leaflet-tooltip-left"), bt(d, "leaflet-tooltip-top"), bt(d, "leaflet-tooltip-bottom"), at(d, "leaflet-tooltip-" + O), wt(d, t);
      },
      _updatePosition: function() {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      },
      setOpacity: function(t) {
        this.options.opacity = t, this._container && jt(this._container, t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
        this._setPosition(e);
      },
      _getAnchor: function() {
        return E(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), xa = function(t, e) {
      return new Ci(t, e);
    };
    ut.include({
      // @method openTooltip(tooltip: Tooltip): this
      // Opens the specified tooltip.
      // @alternative
      // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
      // Creates a tooltip with the specified content and options and open it.
      openTooltip: function(t, e, n) {
        return this._initOverlay(Ci, t, e, n).openOn(this), this;
      },
      // @method closeTooltip(tooltip: Tooltip): this
      // Closes the tooltip given as parameter.
      closeTooltip: function(t) {
        return t.close(), this;
      }
    }), Yt.include({
      // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
      // Binds a tooltip to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindTooltip: function(t, e) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ci, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      // @method unbindTooltip(): this
      // Removes the tooltip previously bound with `bindTooltip`.
      unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function(t) {
        if (!(!t && this._tooltipHandlersAdded)) {
          var e = t ? "off" : "on", n = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
          this._tooltip.options.permanent ? n.add = this._openTooltip : (n.mouseover = this._openTooltip, n.mouseout = this.closeTooltip, n.click = this._openTooltip, this._map ? this._addFocusListeners() : n.add = this._addFocusListeners), this._tooltip.options.sticky && (n.mousemove = this._moveTooltip), this[e](n), this._tooltipHandlersAdded = !t;
        }
      },
      // @method openTooltip(latlng?: LatLng): this
      // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
      openTooltip: function(t) {
        return this._tooltip && (this instanceof ee || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      },
      // @method closeTooltip(): this
      // Closes the tooltip bound to this layer if it is open.
      closeTooltip: function() {
        if (this._tooltip)
          return this._tooltip.close();
      },
      // @method toggleTooltip(): this
      // Opens or closes the tooltip bound to this layer depending on its current state.
      toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      // @method isTooltipOpen(): boolean
      // Returns `true` if the tooltip bound to this layer is currently open.
      isTooltipOpen: function() {
        return this._tooltip.isOpen();
      },
      // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
      // Sets the content of the tooltip bound to this layer.
      setTooltipContent: function(t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      // @method getTooltip(): Tooltip
      // Returns the tooltip bound to this layer.
      getTooltip: function() {
        return this._tooltip;
      },
      _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && (st(e, "focus", function() {
          this._tooltip._source = t, this.openTooltip();
        }, this), st(e, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && e.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function(t) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = !0;
            var e = this;
            this._map.once("moveend", function() {
              e._openOnceFlag = !1, e._openTooltip(t);
            });
            return;
          }
          this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
        }
      },
      _moveTooltip: function(t) {
        var e = t.latlng, n, l;
        this._tooltip.options.sticky && t.originalEvent && (n = this._map.mouseEventToContainerPoint(t.originalEvent), l = this._map.containerPointToLayerPoint(n), e = this._map.layerPointToLatLng(l)), this._tooltip.setLatLng(e);
      }
    });
    var Er = Te.extend({
      options: {
        // @section
        // @aka DivIcon options
        iconSize: [12, 12],
        // also can be set through CSS
        // iconAnchor: (Point),
        // popupAnchor: (Point),
        // @option html: String|HTMLElement = ''
        // Custom HTML code to put inside the div element, empty by default. Alternatively,
        // an instance of `HTMLElement`.
        html: !1,
        // @option bgPos: Point = [0, 0]
        // Optional relative position of the background, in pixels
        bgPos: null,
        className: "leaflet-div-icon"
      },
      createIcon: function(t) {
        var e = t && t.tagName === "DIV" ? t : document.createElement("div"), n = this.options;
        if (n.html instanceof Element ? (di(e), e.appendChild(n.html)) : e.innerHTML = n.html !== !1 ? n.html : "", n.bgPos) {
          var l = E(n.bgPos);
          e.style.backgroundPosition = -l.x + "px " + -l.y + "px";
        }
        return this._setIconStyles(e, "icon"), e;
      },
      createShadow: function() {
        return null;
      }
    });
    function La(t) {
      return new Er(t);
    }
    Te.Default = qe;
    var Xe = Yt.extend({
      // @section
      // @aka GridLayer options
      options: {
        // @option tileSize: Number|Point = 256
        // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
        tileSize: 256,
        // @option opacity: Number = 1.0
        // Opacity of the tiles. Can be used in the `createTile()` function.
        opacity: 1,
        // @option updateWhenIdle: Boolean = (depends)
        // Load new tiles only when panning ends.
        // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
        // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
        // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
        updateWhenIdle: K.mobile,
        // @option updateWhenZooming: Boolean = true
        // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
        updateWhenZooming: !0,
        // @option updateInterval: Number = 200
        // Tiles will not update more than once every `updateInterval` milliseconds when panning.
        updateInterval: 200,
        // @option zIndex: Number = 1
        // The explicit zIndex of the tile layer.
        zIndex: 1,
        // @option bounds: LatLngBounds = undefined
        // If set, tiles will only be loaded inside the set `LatLngBounds`.
        bounds: null,
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = undefined
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: void 0,
        // @option maxNativeZoom: Number = undefined
        // Maximum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
        // from `maxNativeZoom` level and auto-scaled.
        maxNativeZoom: void 0,
        // @option minNativeZoom: Number = undefined
        // Minimum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
        // from `minNativeZoom` level and auto-scaled.
        minNativeZoom: void 0,
        // @option noWrap: Boolean = false
        // Whether the layer is wrapped around the antimeridian. If `true`, the
        // GridLayer will only be displayed once at low zoom levels. Has no
        // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
        // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
        // tiles outside the CRS limits.
        noWrap: !1,
        // @option pane: String = 'tilePane'
        // `Map pane` where the grid layer will be added.
        pane: "tilePane",
        // @option className: String = ''
        // A custom class name to assign to the tile layer. Empty by default.
        className: "",
        // @option keepBuffer: Number = 2
        // When panning the map, keep this many rows and columns of tiles before unloading them.
        keepBuffer: 2
      },
      initialize: function(t) {
        S(this, t);
      },
      onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      },
      beforeAdd: function(t) {
        t._addZoomLimit(this);
      },
      onRemove: function(t) {
        this._removeAllTiles(), yt(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      // @method bringToFront: this
      // Brings the tile layer to the top of all tile layers.
      bringToFront: function() {
        return this._map && (xe(this._container), this._setAutoZIndex(Math.max)), this;
      },
      // @method bringToBack: this
      // Brings the tile layer to the bottom of all tile layers.
      bringToBack: function() {
        return this._map && (Le(this._container), this._setAutoZIndex(Math.min)), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the tiles for this layer.
      getContainer: function() {
        return this._container;
      },
      // @method setOpacity(opacity: Number): this
      // Changes the [opacity](#gridlayer-opacity) of the grid layer.
      setOpacity: function(t) {
        return this.options.opacity = t, this._updateOpacity(), this;
      },
      // @method setZIndex(zIndex: Number): this
      // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method isLoading: Boolean
      // Returns `true` if any tile in the grid layer has not finished loading.
      isLoading: function() {
        return this._loading;
      },
      // @method redraw: this
      // Causes the layer to clear all the tiles and request them again.
      redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var t = this._clampZoom(this._map.getZoom());
          t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
        }
        return this;
      },
      getEvents: function() {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd
        };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = _(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @section Extension methods
      // Layers extending `GridLayer` shall reimplement the following method.
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, must be overridden by classes extending `GridLayer`.
      // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
      // is specified, it must be called when the tile has finished loading and drawing.
      createTile: function() {
        return document.createElement("div");
      },
      // @section
      // @method getTileSize: Point
      // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
      getTileSize: function() {
        var t = this.options.tileSize;
        return t instanceof D ? t : new D(t, t);
      },
      _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(t) {
        for (var e = this.getPane().children, n = -t(-1 / 0, 1 / 0), l = 0, d = e.length, m; l < d; l++)
          m = e[l].style.zIndex, e[l] !== this._container && m && (n = t(n, +m));
        isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !K.ielt9) {
          jt(this._container, this.options.opacity);
          var t = +/* @__PURE__ */ new Date(), e = !1, n = !1;
          for (var l in this._tiles) {
            var d = this._tiles[l];
            if (!(!d.current || !d.loaded)) {
              var m = Math.min(1, (t - d.loaded) / 200);
              jt(d.el, m), m < 1 ? e = !0 : (d.active ? n = !0 : this._onOpaqueTile(d), d.active = !0);
            }
          }
          n && !this._noPrune && this._pruneTiles(), e && (rt(this._fadeFrame), this._fadeFrame = J(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: p,
      _initContainer: function() {
        this._container || (this._container = ft("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var t = this._tileZoom, e = this.options.maxZoom;
        if (t !== void 0) {
          for (var n in this._levels)
            n = Number(n), this._levels[n].el.children.length || n === t ? (this._levels[n].el.style.zIndex = e - Math.abs(t - n), this._onUpdateLevel(n)) : (yt(this._levels[n].el), this._removeTilesAtZoom(n), this._onRemoveLevel(n), delete this._levels[n]);
          var l = this._levels[t], d = this._map;
          return l || (l = this._levels[t] = {}, l.el = ft("div", "leaflet-tile-container leaflet-zoom-animated", this._container), l.el.style.zIndex = e, l.origin = d.project(d.unproject(d.getPixelOrigin()), t).round(), l.zoom = t, this._setZoomTransform(l, d.getCenter(), d.getZoom()), p(l.el.offsetWidth), this._onCreateLevel(l)), this._level = l, l;
        }
      },
      _onUpdateLevel: p,
      _onRemoveLevel: p,
      _onCreateLevel: p,
      _pruneTiles: function() {
        if (this._map) {
          var t, e, n = this._map.getZoom();
          if (n > this.options.maxZoom || n < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (t in this._tiles)
            e = this._tiles[t], e.retain = e.current;
          for (t in this._tiles)
            if (e = this._tiles[t], e.current && !e.active) {
              var l = e.coords;
              this._retainParent(l.x, l.y, l.z, l.z - 5) || this._retainChildren(l.x, l.y, l.z, l.z + 2);
            }
          for (t in this._tiles)
            this._tiles[t].retain || this._removeTile(t);
        }
      },
      _removeTilesAtZoom: function(t) {
        for (var e in this._tiles)
          this._tiles[e].coords.z === t && this._removeTile(e);
      },
      _removeAllTiles: function() {
        for (var t in this._tiles)
          this._removeTile(t);
      },
      _invalidateAll: function() {
        for (var t in this._levels)
          yt(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
        this._removeAllTiles(), this._tileZoom = void 0;
      },
      _retainParent: function(t, e, n, l) {
        var d = Math.floor(t / 2), m = Math.floor(e / 2), x = n - 1, O = new D(+d, +m);
        O.z = +x;
        var I = this._tileCoordsToKey(O), j = this._tiles[I];
        return j && j.active ? (j.retain = !0, !0) : (j && j.loaded && (j.retain = !0), x > l ? this._retainParent(d, m, x, l) : !1);
      },
      _retainChildren: function(t, e, n, l) {
        for (var d = 2 * t; d < 2 * t + 2; d++)
          for (var m = 2 * e; m < 2 * e + 2; m++) {
            var x = new D(d, m);
            x.z = n + 1;
            var O = this._tileCoordsToKey(x), I = this._tiles[O];
            if (I && I.active) {
              I.retain = !0;
              continue;
            } else I && I.loaded && (I.retain = !0);
            n + 1 < l && this._retainChildren(d, m, n + 1, l);
          }
      },
      _resetView: function(t) {
        var e = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
      },
      _animateZoom: function(t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function(t) {
        var e = this.options;
        return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t;
      },
      _setView: function(t, e, n, l) {
        var d = Math.round(e);
        this.options.maxZoom !== void 0 && d > this.options.maxZoom || this.options.minZoom !== void 0 && d < this.options.minZoom ? d = void 0 : d = this._clampZoom(d);
        var m = this.options.updateWhenZooming && d !== this._tileZoom;
        (!l || m) && (this._tileZoom = d, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), d !== void 0 && this._update(t), n || this._pruneTiles(), this._noPrune = !!n), this._setZoomTransforms(t, e);
      },
      _setZoomTransforms: function(t, e) {
        for (var n in this._levels)
          this._setZoomTransform(this._levels[n], t, e);
      },
      _setZoomTransform: function(t, e, n) {
        var l = this._map.getZoomScale(n, t.zoom), d = t.origin.multiplyBy(l).subtract(this._map._getNewPixelOrigin(e, n)).round();
        K.any3d ? de(t.el, d, l) : wt(t.el, d);
      },
      _resetGrid: function() {
        var t = this._map, e = t.options.crs, n = this._tileSize = this.getTileSize(), l = this._tileZoom, d = this._map.getPixelWorldBounds(this._tileZoom);
        d && (this._globalTileRange = this._pxBoundsToTileRange(d)), this._wrapX = e.wrapLng && !this.options.noWrap && [
          Math.floor(t.project([0, e.wrapLng[0]], l).x / n.x),
          Math.ceil(t.project([0, e.wrapLng[1]], l).x / n.y)
        ], this._wrapY = e.wrapLat && !this.options.noWrap && [
          Math.floor(t.project([e.wrapLat[0], 0], l).y / n.x),
          Math.ceil(t.project([e.wrapLat[1], 0], l).y / n.y)
        ];
      },
      _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function(t) {
        var e = this._map, n = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), l = e.getZoomScale(n, this._tileZoom), d = e.project(t, this._tileZoom).floor(), m = e.getSize().divideBy(l * 2);
        return new F(d.subtract(m), d.add(m));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(t) {
        var e = this._map;
        if (e) {
          var n = this._clampZoom(e.getZoom());
          if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
            var l = this._getTiledPixelBounds(t), d = this._pxBoundsToTileRange(l), m = d.getCenter(), x = [], O = this.options.keepBuffer, I = new F(
              d.getBottomLeft().subtract([O, -O]),
              d.getTopRight().add([O, -O])
            );
            if (!(isFinite(d.min.x) && isFinite(d.min.y) && isFinite(d.max.x) && isFinite(d.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var j in this._tiles) {
              var Y = this._tiles[j].coords;
              (Y.z !== this._tileZoom || !I.contains(new D(Y.x, Y.y))) && (this._tiles[j].current = !1);
            }
            if (Math.abs(n - this._tileZoom) > 1) {
              this._setView(t, n);
              return;
            }
            for (var et = d.min.y; et <= d.max.y; et++)
              for (var lt = d.min.x; lt <= d.max.x; lt++) {
                var St = new D(lt, et);
                if (St.z = this._tileZoom, !!this._isValidTile(St)) {
                  var kt = this._tiles[this._tileCoordsToKey(St)];
                  kt ? kt.current = !0 : x.push(St);
                }
              }
            if (x.sort(function(It, Se) {
              return It.distanceTo(m) - Se.distanceTo(m);
            }), x.length !== 0) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var Nt = document.createDocumentFragment();
              for (lt = 0; lt < x.length; lt++)
                this._addTile(x[lt], Nt);
              this._level.el.appendChild(Nt);
            }
          }
        }
      },
      _isValidTile: function(t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var n = this._globalTileRange;
          if (!e.wrapLng && (t.x < n.min.x || t.x > n.max.x) || !e.wrapLat && (t.y < n.min.y || t.y > n.max.y))
            return !1;
        }
        if (!this.options.bounds)
          return !0;
        var l = this._tileCoordsToBounds(t);
        return G(this.options.bounds).overlaps(l);
      },
      _keyToBounds: function(t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function(t) {
        var e = this._map, n = this.getTileSize(), l = t.scaleBy(n), d = l.add(n), m = e.unproject(l, t.z), x = e.unproject(d, t.z);
        return [m, x];
      },
      // converts tile coordinates to its geographical bounds
      _tileCoordsToBounds: function(t) {
        var e = this._tileCoordsToNwSe(t), n = new X(e[0], e[1]);
        return this.options.noWrap || (n = this._map.wrapLatLngBounds(n)), n;
      },
      // converts tile coordinates to key for the tile cache
      _tileCoordsToKey: function(t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      // converts tile cache key to coordinates
      _keyToTileCoords: function(t) {
        var e = t.split(":"), n = new D(+e[0], +e[1]);
        return n.z = +e[2], n;
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        e && (yt(e.el), delete this._tiles[t], this.fire("tileunload", {
          tile: e.el,
          coords: this._keyToTileCoords(t)
        }));
      },
      _initTile: function(t) {
        at(t, "leaflet-tile");
        var e = this.getTileSize();
        t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = p, t.onmousemove = p, K.ielt9 && this.options.opacity < 1 && jt(t, this.options.opacity);
      },
      _addTile: function(t, e) {
        var n = this._getTilePos(t), l = this._tileCoordsToKey(t), d = this.createTile(this._wrapCoords(t), h(this._tileReady, this, t));
        this._initTile(d), this.createTile.length < 2 && J(h(this._tileReady, this, t, null, d)), wt(d, n), this._tiles[l] = {
          el: d,
          coords: t,
          current: !0
        }, e.appendChild(d), this.fire("tileloadstart", {
          tile: d,
          coords: t
        });
      },
      _tileReady: function(t, e, n) {
        e && this.fire("tileerror", {
          error: e,
          tile: n,
          coords: t
        });
        var l = this._tileCoordsToKey(t);
        n = this._tiles[l], n && (n.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (jt(n.el, 0), rt(this._fadeFrame), this._fadeFrame = J(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), e || (at(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: n.el,
          coords: t
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), K.ielt9 || !this._map._fadeAnimated ? J(this._pruneTiles, this) : setTimeout(h(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(t) {
        var e = new D(
          this._wrapX ? v(t.x, this._wrapX) : t.x,
          this._wrapY ? v(t.y, this._wrapY) : t.y
        );
        return e.z = t.z, e;
      },
      _pxBoundsToTileRange: function(t) {
        var e = this.getTileSize();
        return new F(
          t.min.unscaleBy(e).floor(),
          t.max.unscaleBy(e).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function() {
        for (var t in this._tiles)
          if (!this._tiles[t].loaded)
            return !1;
        return !0;
      }
    });
    function Pa(t) {
      return new Xe(t);
    }
    var Me = Xe.extend({
      // @section
      // @aka TileLayer options
      options: {
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = 18
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: 18,
        // @option subdomains: String|String[] = 'abc'
        // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
        subdomains: "abc",
        // @option errorTileUrl: String = ''
        // URL to the tile image to show in place of the tile that failed to load.
        errorTileUrl: "",
        // @option zoomOffset: Number = 0
        // The zoom number used in tile URLs will be offset with this value.
        zoomOffset: 0,
        // @option tms: Boolean = false
        // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
        tms: !1,
        // @option zoomReverse: Boolean = false
        // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
        zoomReverse: !1,
        // @option detectRetina: Boolean = false
        // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
        detectRetina: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option referrerPolicy: Boolean|String = false
        // Whether the referrerPolicy attribute will be added to the tiles.
        // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
        // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
        // (e.g. to validate an API token).
        // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
        referrerPolicy: !1
      },
      initialize: function(t, e) {
        this._url = t, e = S(this, e), e.detectRetina && K.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      },
      // @method setUrl(url: String, noRedraw?: Boolean): this
      // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
      // If the URL does not change, the layer will not be redrawn unless
      // the noRedraw parameter is set to false.
      setUrl: function(t, e) {
        return this._url === t && e === void 0 && (e = !0), this._url = t, e || this.redraw(), this;
      },
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
      // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
      // callback is called when the tile has been loaded.
      createTile: function(t, e) {
        var n = document.createElement("img");
        return st(n, "load", h(this._tileOnLoad, this, e, n)), st(n, "error", h(this._tileOnError, this, e, n)), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (n.referrerPolicy = this.options.referrerPolicy), n.alt = "", n.src = this.getTileUrl(t), n;
      },
      // @section Extension methods
      // @uninheritable
      // Layers extending `TileLayer` might reimplement the following method.
      // @method getTileUrl(coords: Object): String
      // Called only internally, returns the URL for a tile given its coordinates.
      // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
      getTileUrl: function(t) {
        var e = {
          r: K.retina ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var n = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = n), e["-y"] = n;
        }
        return w(this._url, u(e, this.options));
      },
      _tileOnLoad: function(t, e) {
        K.ielt9 ? setTimeout(h(t, this, null, e), 0) : t(null, e);
      },
      _tileOnError: function(t, e, n) {
        var l = this.options.errorTileUrl;
        l && e.getAttribute("src") !== l && (e.src = l), t(n, e);
      },
      _onTileRemove: function(t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var t = this._tileZoom, e = this.options.maxZoom, n = this.options.zoomReverse, l = this.options.zoomOffset;
        return n && (t = e - t), t + l;
      },
      _getSubdomain: function(t) {
        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[e];
      },
      // stops loading all tiles in the background layer
      _abortLoading: function() {
        var t, e;
        for (t in this._tiles)
          if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = p, e.onerror = p, !e.complete)) {
            e.src = z;
            var n = this._tiles[t].coords;
            yt(e), delete this._tiles[t], this.fire("tileabort", {
              tile: e,
              coords: n
            });
          }
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        if (e)
          return e.el.setAttribute("src", z), Xe.prototype._removeTile.call(this, t);
      },
      _tileReady: function(t, e, n) {
        if (!(!this._map || n && n.getAttribute("src") === z))
          return Xe.prototype._tileReady.call(this, t, e, n);
      }
    });
    function Or(t, e) {
      return new Me(t, e);
    }
    var Ir = Me.extend({
      // @section
      // @aka TileLayer.WMS options
      // If any custom options not documented here are used, they will be sent to the
      // WMS server as extra parameters in each request URL. This can be useful for
      // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        // @option layers: String = ''
        // **(required)** Comma-separated list of WMS layers to show.
        layers: "",
        // @option styles: String = ''
        // Comma-separated list of WMS styles.
        styles: "",
        // @option format: String = 'image/jpeg'
        // WMS image format (use `'image/png'` for layers with transparency).
        format: "image/jpeg",
        // @option transparent: Boolean = false
        // If `true`, the WMS service will return images with transparency.
        transparent: !1,
        // @option version: String = '1.1.1'
        // Version of the WMS service to use
        version: "1.1.1"
      },
      options: {
        // @option crs: CRS = null
        // Coordinate Reference System to use for the WMS requests, defaults to
        // map CRS. Don't change this if you're not sure what it means.
        crs: null,
        // @option uppercase: Boolean = false
        // If `true`, WMS request parameter keys will be uppercase.
        uppercase: !1
      },
      initialize: function(t, e) {
        this._url = t;
        var n = u({}, this.defaultWmsParams);
        for (var l in e)
          l in this.options || (n[l] = e[l]);
        e = S(this, e);
        var d = e.detectRetina && K.retina ? 2 : 1, m = this.getTileSize();
        n.width = m.x * d, n.height = m.y * d, this.wmsParams = n;
      },
      onAdd: function(t) {
        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[e] = this._crs.code, Me.prototype.onAdd.call(this, t);
      },
      getTileUrl: function(t) {
        var e = this._tileCoordsToNwSe(t), n = this._crs, l = U(n.project(e[0]), n.project(e[1])), d = l.min, m = l.max, x = (this._wmsVersion >= 1.3 && this._crs === Tr ? [d.y, d.x, m.y, m.x] : [d.x, d.y, m.x, m.y]).join(","), O = Me.prototype.getTileUrl.call(this, t);
        return O + B(this.wmsParams, O, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + x;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(t, e) {
        return u(this.wmsParams, t), e || this.redraw(), this;
      }
    });
    function Ta(t, e) {
      return new Ir(t, e);
    }
    Me.WMS = Ir, Or.wms = Ta;
    var re = Yt.extend({
      // @section
      // @aka Renderer options
      options: {
        // @option padding: Number = 0.1
        // How much to extend the clip area around the map view (relative to its size)
        // e.g. 0.1 would be 10% of map view in each direction
        padding: 0.1
      },
      initialize: function(t) {
        S(this, t), f(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), at(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      },
      onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function() {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function(t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function(t, e) {
        var n = this._map.getZoomScale(e, this._zoom), l = this._map.getSize().multiplyBy(0.5 + this.options.padding), d = this._map.project(this._center, e), m = l.multiplyBy(-n).add(d).subtract(this._map._getNewPixelOrigin(t, e));
        K.any3d ? de(this._container, m, n) : wt(this._container, m);
      },
      _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var t in this._layers)
          this._layers[t]._reset();
      },
      _onZoomEnd: function() {
        for (var t in this._layers)
          this._layers[t]._project();
      },
      _updatePaths: function() {
        for (var t in this._layers)
          this._layers[t]._update();
      },
      _update: function() {
        var t = this.options.padding, e = this._map.getSize(), n = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
        this._bounds = new F(n, n.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), Br = re.extend({
      // @section
      // @aka Canvas options
      options: {
        // @option tolerance: Number = 0
        // How much to extend the click tolerance around a path/object on the map.
        tolerance: 0
      },
      getEvents: function() {
        var t = re.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset, t;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        re.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var t = this._container = document.createElement("canvas");
        st(t, "mousemove", this._onMouseMove, this), st(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), st(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
      },
      _destroyContainer: function() {
        rt(this._redrawRequest), delete this._ctx, yt(this._container), vt(this._container), delete this._container;
      },
      _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var t;
          this._redrawBounds = null;
          for (var e in this._layers)
            t = this._layers[e], t._update();
          this._redraw();
        }
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          re.prototype._update.call(this);
          var t = this._bounds, e = this._container, n = t.getSize(), l = K.retina ? 2 : 1;
          wt(e, t.min), e.width = l * n.x, e.height = l * n.y, e.style.width = n.x + "px", e.style.height = n.y + "px", K.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
        }
      },
      _reset: function() {
        re.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function(t) {
        this._updateDashArray(t), this._layers[f(t)] = t;
        var e = t._order = {
          layer: t,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function(t) {
        this._requestRedraw(t);
      },
      _removePath: function(t) {
        var e = t._order, n = e.next, l = e.prev;
        n ? n.prev = l : this._drawLast = l, l ? l.next = n : this._drawFirst = n, delete t._order, delete this._layers[f(t)], this._requestRedraw(t);
      },
      _updatePath: function(t) {
        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
      },
      _updateStyle: function(t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function(t) {
        if (typeof t.options.dashArray == "string") {
          var e = t.options.dashArray.split(/[, ]+/), n = [], l, d;
          for (d = 0; d < e.length; d++) {
            if (l = Number(e[d]), isNaN(l))
              return;
            n.push(l);
          }
          t.options._dashArray = n;
        } else
          t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function(t) {
        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || J(this._redraw, this));
      },
      _extendRedrawBounds: function(t) {
        if (t._pxBounds) {
          var e = (t.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new F(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
        }
      },
      _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function() {
        var t = this._redrawBounds;
        if (t) {
          var e = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
        } else
          this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      },
      _draw: function() {
        var t, e = this._redrawBounds;
        if (this._ctx.save(), e) {
          var n = e.getSize();
          this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, n.x, n.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var l = this._drawFirst; l; l = l.next)
          t = l.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function(t, e) {
        if (this._drawing) {
          var n, l, d, m, x = t._parts, O = x.length, I = this._ctx;
          if (O) {
            for (I.beginPath(), n = 0; n < O; n++) {
              for (l = 0, d = x[n].length; l < d; l++)
                m = x[n][l], I[l ? "lineTo" : "moveTo"](m.x, m.y);
              e && I.closePath();
            }
            this._fillStroke(I, t);
          }
        }
      },
      _updateCircle: function(t) {
        if (!(!this._drawing || t._empty())) {
          var e = t._point, n = this._ctx, l = Math.max(Math.round(t._radius), 1), d = (Math.max(Math.round(t._radiusY), 1) || l) / l;
          d !== 1 && (n.save(), n.scale(1, d)), n.beginPath(), n.arc(e.x, e.y / d, l, 0, Math.PI * 2, !1), d !== 1 && n.restore(), this._fillStroke(n, t);
        }
      },
      _fillStroke: function(t, e) {
        var n = e.options;
        n.fill && (t.globalAlpha = n.fillOpacity, t.fillStyle = n.fillColor || n.color, t.fill(n.fillRule || "evenodd")), n.stroke && n.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = n.opacity, t.lineWidth = n.weight, t.strokeStyle = n.color, t.lineCap = n.lineCap, t.lineJoin = n.lineJoin, t.stroke());
      },
      // Canvas obviously doesn't have mouse events for individual drawn objects,
      // so we emulate that by calculating what's under the mouse on mousemove/click manually
      _onClick: function(t) {
        for (var e = this._map.mouseEventToLayerPoint(t), n, l, d = this._drawFirst; d; d = d.next)
          n = d.layer, n.options.interactive && n._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(n)) && (l = n);
        this._fireEvent(l ? [l] : !1, t);
      },
      _onMouseMove: function(t) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var e = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, e);
        }
      },
      _handleMouseOut: function(t) {
        var e = this._hoveredLayer;
        e && (bt(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(t, e) {
        if (!this._mouseHoverThrottled) {
          for (var n, l, d = this._drawFirst; d; d = d.next)
            n = d.layer, n.options.interactive && n._containsPoint(e) && (l = n);
          l !== this._hoveredLayer && (this._handleMouseOut(t), l && (at(this._container, "leaflet-interactive"), this._fireEvent([l], t, "mouseover"), this._hoveredLayer = l)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(h(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function(t, e, n) {
        this._map._fireDOMEvent(e, n || e.type, t);
      },
      _bringToFront: function(t) {
        var e = t._order;
        if (e) {
          var n = e.next, l = e.prev;
          if (n)
            n.prev = l;
          else
            return;
          l ? l.next = n : n && (this._drawFirst = n), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t);
        }
      },
      _bringToBack: function(t) {
        var e = t._order;
        if (e) {
          var n = e.next, l = e.prev;
          if (l)
            l.next = n;
          else
            return;
          n ? n.prev = l : l && (this._drawLast = l), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t);
        }
      }
    });
    function Ar(t) {
      return K.canvas ? new Br(t) : null;
    }
    var $e = function() {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
          return document.createElement("<lvml:" + t + ' class="lvml">');
        };
      } catch {
      }
      return function(t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }(), ka = {
      _initContainer: function() {
        this._container = ft("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (re.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(t) {
        var e = t._container = $e("shape");
        at(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = $e("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[f(t)] = t;
      },
      _addPath: function(t) {
        var e = t._container;
        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
      },
      _removePath: function(t) {
        var e = t._container;
        yt(e), t.removeInteractiveTarget(e), delete this._layers[f(t)];
      },
      _updateStyle: function(t) {
        var e = t._stroke, n = t._fill, l = t.options, d = t._container;
        d.stroked = !!l.stroke, d.filled = !!l.fill, l.stroke ? (e || (e = t._stroke = $e("stroke")), d.appendChild(e), e.weight = l.weight + "px", e.color = l.color, e.opacity = l.opacity, l.dashArray ? e.dashStyle = T(l.dashArray) ? l.dashArray.join(" ") : l.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = l.lineCap.replace("butt", "flat"), e.joinstyle = l.lineJoin) : e && (d.removeChild(e), t._stroke = null), l.fill ? (n || (n = t._fill = $e("fill")), d.appendChild(n), n.color = l.fillColor || l.color, n.opacity = l.fillOpacity) : n && (d.removeChild(n), t._fill = null);
      },
      _updateCircle: function(t) {
        var e = t._point.round(), n = Math.round(t._radius), l = Math.round(t._radiusY || n);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + n + "," + l + " 0," + 65535 * 360);
      },
      _setPath: function(t, e) {
        t._path.v = e;
      },
      _bringToFront: function(t) {
        xe(t._container);
      },
      _bringToBack: function(t) {
        Le(t._container);
      }
    }, Mi = K.vml ? $e : De, Ke = re.extend({
      _initContainer: function() {
        this._container = Mi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Mi("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        yt(this._container), vt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          re.prototype._update.call(this);
          var t = this._bounds, e = t.getSize(), n = this._container;
          (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, n.setAttribute("width", e.x), n.setAttribute("height", e.y)), wt(n, t.min), n.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
        }
      },
      // methods below are called by vector layers implementations
      _initPath: function(t) {
        var e = t._path = Mi("path");
        t.options.className && at(e, t.options.className), t.options.interactive && at(e, "leaflet-interactive"), this._updateStyle(t), this._layers[f(t)] = t;
      },
      _addPath: function(t) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
      },
      _removePath: function(t) {
        yt(t._path), t.removeInteractiveTarget(t._path), delete this._layers[f(t)];
      },
      _updatePath: function(t) {
        t._project(), t._update();
      },
      _updateStyle: function(t) {
        var e = t._path, n = t.options;
        e && (n.stroke ? (e.setAttribute("stroke", n.color), e.setAttribute("stroke-opacity", n.opacity), e.setAttribute("stroke-width", n.weight), e.setAttribute("stroke-linecap", n.lineCap), e.setAttribute("stroke-linejoin", n.lineJoin), n.dashArray ? e.setAttribute("stroke-dasharray", n.dashArray) : e.removeAttribute("stroke-dasharray"), n.dashOffset ? e.setAttribute("stroke-dashoffset", n.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), n.fill ? (e.setAttribute("fill", n.fillColor || n.color), e.setAttribute("fill-opacity", n.fillOpacity), e.setAttribute("fill-rule", n.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
      },
      _updatePoly: function(t, e) {
        this._setPath(t, Fn(t._parts, e));
      },
      _updateCircle: function(t) {
        var e = t._point, n = Math.max(Math.round(t._radius), 1), l = Math.max(Math.round(t._radiusY), 1) || n, d = "a" + n + "," + l + " 0 1,0 ", m = t._empty() ? "M0 0" : "M" + (e.x - n) + "," + e.y + d + n * 2 + ",0 " + d + -n * 2 + ",0 ";
        this._setPath(t, m);
      },
      _setPath: function(t, e) {
        t._path.setAttribute("d", e);
      },
      // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
      _bringToFront: function(t) {
        xe(t._path);
      },
      _bringToBack: function(t) {
        Le(t._path);
      }
    });
    K.vml && Ke.include(ka);
    function Zr(t) {
      return K.svg || K.vml ? new Ke(t) : null;
    }
    ut.include({
      // @namespace Map; @method getRenderer(layer: Path): Renderer
      // Returns the instance of `Renderer` that should be used to render the given
      // `Path`. It will ensure that the `renderer` options of the map and paths
      // are respected, and that the renderers do exist on the map.
      getRenderer: function(t) {
        var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
        return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
      },
      _getPaneRenderer: function(t) {
        if (t === "overlayPane" || t === void 0)
          return !1;
        var e = this._paneRenderers[t];
        return e === void 0 && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e;
      },
      _createRenderer: function(t) {
        return this.options.preferCanvas && Ar(t) || Zr(t);
      }
    });
    var Rr = ke.extend({
      initialize: function(t, e) {
        ke.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      },
      // @method setBounds(latLngBounds: LatLngBounds): this
      // Redraws the rectangle with the passed bounds.
      setBounds: function(t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function(t) {
        return t = G(t), [
          t.getSouthWest(),
          t.getNorthWest(),
          t.getNorthEast(),
          t.getSouthEast()
        ];
      }
    });
    function Ca(t, e) {
      return new Rr(t, e);
    }
    Ke.create = Mi, Ke.pointsToPath = Fn, ne.geometryToLayer = wi, ne.coordsToLatLng = cn, ne.coordsToLatLngs = xi, ne.latLngToCoords = fn, ne.latLngsToCoords = Li, ne.getFeature = Ce, ne.asFeature = Pi, ut.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var Dr = Qt.extend({
      initialize: function(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
      },
      addHooks: function() {
        st(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        vt(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        yt(this._pane), delete this._pane;
      },
      _resetState: function() {
        this._resetStateTimeout = 0, this._moved = !1;
      },
      _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      },
      _onMouseDown: function(t) {
        if (!t.shiftKey || t.which !== 1 && t.button !== 1)
          return !1;
        this._clearDeferredResetState(), this._resetState(), Ue(), Gi(), this._startPoint = this._map.mouseEventToContainerPoint(t), st(document, {
          contextmenu: pe,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(t) {
        this._moved || (this._moved = !0, this._box = ft("div", "leaflet-zoom-box", this._container), at(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
        var e = new F(this._point, this._startPoint), n = e.getSize();
        wt(this._box, e.min), this._box.style.width = n.x + "px", this._box.style.height = n.y + "px";
      },
      _finish: function() {
        this._moved && (yt(this._box), bt(this._container, "leaflet-crosshair")), Ve(), qi(), vt(document, {
          contextmenu: pe,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(t) {
        if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(h(this._resetState, this), 0);
          var e = new X(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
        }
      },
      _onKeyDown: function(t) {
        t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    });
    ut.addInitHook("addHandler", "boxZoom", Dr), ut.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var jr = Qt.extend({
      addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function(t) {
        var e = this._map, n = e.getZoom(), l = e.options.zoomDelta, d = t.originalEvent.shiftKey ? n - l : n + l;
        e.options.doubleClickZoom === "center" ? e.setZoom(d) : e.setZoomAround(t.containerPoint, d);
      }
    });
    ut.addInitHook("addHandler", "doubleClickZoom", jr), ut.mergeOptions({
      // @option dragging: Boolean = true
      // Whether the map is draggable with mouse/touch or not.
      dragging: !0,
      // @section Panning Inertia Options
      // @option inertia: Boolean = *
      // If enabled, panning of the map will have an inertia effect where
      // the map builds momentum while dragging and continues moving in
      // the same direction for some time. Feels especially nice on touch
      // devices. Enabled by default.
      inertia: !0,
      // @option inertiaDeceleration: Number = 3000
      // The rate with which the inertial movement slows down, in pixels/second².
      inertiaDeceleration: 3400,
      // px/s^2
      // @option inertiaMaxSpeed: Number = Infinity
      // Max speed of the inertial movement, in pixels/second.
      inertiaMaxSpeed: 1 / 0,
      // px/s
      // @option easeLinearity: Number = 0.2
      easeLinearity: 0.2,
      // TODO refactor, move to CRS
      // @option worldCopyJump: Boolean = false
      // With this option enabled, the map tracks when you pan to another "copy"
      // of the world and seamlessly jumps to the original one so that all overlays
      // like markers and vector layers are still visible.
      worldCopyJump: !1,
      // @option maxBoundsViscosity: Number = 0.0
      // If `maxBounds` is set, this option will control how solid the bounds
      // are when dragging the map around. The default value of `0.0` allows the
      // user to drag outside the bounds at normal speed, higher values will
      // slow down map dragging outside bounds, and `1.0` makes the bounds fully
      // solid, preventing the user from dragging outside the bounds.
      maxBoundsViscosity: 0
    });
    var Fr = Qt.extend({
      addHooks: function() {
        if (!this._draggable) {
          var t = this._map;
          this._draggable = new he(t._mapPane, t._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
        }
        at(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        bt(this._map._container, "leaflet-grab"), bt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      moving: function() {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function() {
        var t = this._map;
        if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var e = G(this._map.options.maxBounds);
          this._offsetLimit = U(
            this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
            this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
          ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else
          this._offsetLimit = null;
        t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function(t) {
        if (this._map.options.inertia) {
          var e = this._lastTime = +/* @__PURE__ */ new Date(), n = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(n), this._times.push(e), this._prunePositions(e);
        }
        this._map.fire("move", t).fire("drag", t);
      },
      _prunePositions: function(t) {
        for (; this._positions.length > 1 && t - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function() {
        var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function(t, e) {
        return t - (t - e) * this._viscosity;
      },
      _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit;
          t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
        }
      },
      _onPreDragWrap: function() {
        var t = this._worldWidth, e = Math.round(t / 2), n = this._initialWorldOffset, l = this._draggable._newPos.x, d = (l - e + n) % t + e - n, m = (l + e + n) % t - e - n, x = Math.abs(d + n) < Math.abs(m + n) ? d : m;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = x;
      },
      _onDragEnd: function(t) {
        var e = this._map, n = e.options, l = !n.inertia || t.noInertia || this._times.length < 2;
        if (e.fire("dragend", t), l)
          e.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var d = this._lastPos.subtract(this._positions[0]), m = (this._lastTime - this._times[0]) / 1e3, x = n.easeLinearity, O = d.multiplyBy(x / m), I = O.distanceTo([0, 0]), j = Math.min(n.inertiaMaxSpeed, I), Y = O.multiplyBy(j / I), et = j / (n.inertiaDeceleration * x), lt = Y.multiplyBy(-et / 2).round();
          !lt.x && !lt.y ? e.fire("moveend") : (lt = e._limitOffset(lt, e.options.maxBounds), J(function() {
            e.panBy(lt, {
              duration: et,
              easeLinearity: x,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    ut.addInitHook("addHandler", "dragging", Fr), ut.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var Nr = Qt.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function(t) {
        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function() {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = "0"), st(t, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      removeHooks: function() {
        this._removeHooks(), vt(this._map._container, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.off({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      _onMouseDown: function() {
        if (!this._focused) {
          var t = document.body, e = document.documentElement, n = t.scrollTop || e.scrollTop, l = t.scrollLeft || e.scrollLeft;
          this._map._container.focus(), window.scrollTo(l, n);
        }
      },
      _onFocus: function() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function(t) {
        var e = this._panKeys = {}, n = this.keyCodes, l, d;
        for (l = 0, d = n.left.length; l < d; l++)
          e[n.left[l]] = [-1 * t, 0];
        for (l = 0, d = n.right.length; l < d; l++)
          e[n.right[l]] = [t, 0];
        for (l = 0, d = n.down.length; l < d; l++)
          e[n.down[l]] = [0, t];
        for (l = 0, d = n.up.length; l < d; l++)
          e[n.up[l]] = [0, -1 * t];
      },
      _setZoomDelta: function(t) {
        var e = this._zoomKeys = {}, n = this.keyCodes, l, d;
        for (l = 0, d = n.zoomIn.length; l < d; l++)
          e[n.zoomIn[l]] = t;
        for (l = 0, d = n.zoomOut.length; l < d; l++)
          e[n.zoomOut[l]] = -t;
      },
      _addHooks: function() {
        st(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        vt(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e = t.keyCode, n = this._map, l;
          if (e in this._panKeys) {
            if (!n._panAnim || !n._panAnim._inProgress)
              if (l = this._panKeys[e], t.shiftKey && (l = E(l).multiplyBy(3)), n.options.maxBounds && (l = n._limitOffset(E(l), n.options.maxBounds)), n.options.worldCopyJump) {
                var d = n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(l)));
                n.panTo(d);
              } else
                n.panBy(l);
          } else if (e in this._zoomKeys)
            n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
          else if (e === 27 && n._popup && n._popup.options.closeOnEscapeKey)
            n.closePopup();
          else
            return;
          pe(t);
        }
      }
    });
    ut.addInitHook("addHandler", "keyboard", Nr), ut.mergeOptions({
      // @section Mouse wheel options
      // @option scrollWheelZoom: Boolean|String = true
      // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
      // it will zoom to the center of the view regardless of where the mouse was.
      scrollWheelZoom: !0,
      // @option wheelDebounceTime: Number = 40
      // Limits the rate at which a wheel can fire (in milliseconds). By default
      // user can't zoom via wheel more often than once per 40 ms.
      wheelDebounceTime: 40,
      // @option wheelPxPerZoomLevel: Number = 60
      // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
      // mean a change of one full zoom level. Smaller values will make wheel-zooming
      // faster (and vice versa).
      wheelPxPerZoomLevel: 60
    });
    var Ur = Qt.extend({
      addHooks: function() {
        st(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        vt(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(t) {
        var e = fr(t), n = this._map.options.wheelDebounceTime;
        this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var l = Math.max(n - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(h(this._performZoom, this), l), pe(t);
      },
      _performZoom: function() {
        var t = this._map, e = t.getZoom(), n = this._map.options.zoomSnap || 0;
        t._stop();
        var l = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(l)))) / Math.LN2, m = n ? Math.ceil(d / n) * n : d, x = t._limitZoom(e + (this._delta > 0 ? m : -m)) - e;
        this._delta = 0, this._startTime = null, x && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + x) : t.setZoomAround(this._lastMousePos, e + x));
      }
    });
    ut.addInitHook("addHandler", "scrollWheelZoom", Ur);
    var Ma = 600;
    ut.mergeOptions({
      // @section Touch interaction options
      // @option tapHold: Boolean
      // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
      tapHold: K.touchNative && K.safari && K.mobile,
      // @option tapTolerance: Number = 15
      // The max number of pixels a user can shift his finger during touch
      // for it to be considered a valid tap.
      tapTolerance: 15
    });
    var Vr = Qt.extend({
      addHooks: function() {
        st(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        vt(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(t) {
        if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
          var e = t.touches[0];
          this._startPos = this._newPos = new D(e.clientX, e.clientY), this._holdTimeout = setTimeout(h(function() {
            this._cancel(), this._isTapValid() && (st(document, "touchend", Ct), st(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
          }, this), Ma), st(document, "touchend touchcancel contextmenu", this._cancel, this), st(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function t() {
        vt(document, "touchend", Ct), vt(document, "touchend touchcancel", t);
      },
      _cancel: function() {
        clearTimeout(this._holdTimeout), vt(document, "touchend touchcancel contextmenu", this._cancel, this), vt(document, "touchmove", this._onMove, this);
      },
      _onMove: function(t) {
        var e = t.touches[0];
        this._newPos = new D(e.clientX, e.clientY);
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function(t, e) {
        var n = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          // detail: 1,
          screenX: e.screenX,
          screenY: e.screenY,
          clientX: e.clientX,
          clientY: e.clientY
          // button: 2,
          // buttons: 2
        });
        n._simulated = !0, e.target.dispatchEvent(n);
      }
    });
    ut.addInitHook("addHandler", "tapHold", Vr), ut.mergeOptions({
      // @section Touch interaction options
      // @option touchZoom: Boolean|String = *
      // Whether the map can be zoomed by touch-dragging with two fingers. If
      // passed `'center'`, it will zoom to the center of the view regardless of
      // where the touch events (fingers) were. Enabled for touch-capable web
      // browsers.
      touchZoom: K.touch,
      // @option bounceAtZoomLimits: Boolean = true
      // Set it to false if you don't want the map to zoom beyond min/max zoom
      // and then bounce back when pinch-zooming.
      bounceAtZoomLimits: !0
    });
    var Hr = Qt.extend({
      addHooks: function() {
        at(this._map._container, "leaflet-touch-zoom"), st(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        bt(this._map._container, "leaflet-touch-zoom"), vt(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(t) {
        var e = this._map;
        if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
          var n = e.mouseEventToContainerPoint(t.touches[0]), l = e.mouseEventToContainerPoint(t.touches[1]);
          this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(n.add(l)._divideBy(2))), this._startDist = n.distanceTo(l), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), st(document, "touchmove", this._onTouchMove, this), st(document, "touchend touchcancel", this._onTouchEnd, this), Ct(t);
        }
      },
      _onTouchMove: function(t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var e = this._map, n = e.mouseEventToContainerPoint(t.touches[0]), l = e.mouseEventToContainerPoint(t.touches[1]), d = n.distanceTo(l) / this._startDist;
          if (this._zoom = e.getScaleZoom(d, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && d < 1 || this._zoom > e.getMaxZoom() && d > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
            if (this._center = this._startLatLng, d === 1)
              return;
          } else {
            var m = n._add(l)._divideBy(2)._subtract(this._centerPoint);
            if (d === 1 && m.x === 0 && m.y === 0)
              return;
            this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(m), this._zoom);
          }
          this._moved || (e._moveStart(!0, !1), this._moved = !0), rt(this._animRequest);
          var x = h(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
          this._animRequest = J(x, this, !0), Ct(t);
        }
      },
      _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        this._zooming = !1, rt(this._animRequest), vt(document, "touchmove", this._onTouchMove, this), vt(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    ut.addInitHook("addHandler", "touchZoom", Hr), ut.BoxZoom = Dr, ut.DoubleClickZoom = jr, ut.Drag = Fr, ut.Keyboard = Nr, ut.ScrollWheelZoom = Ur, ut.TapHold = Vr, ut.TouchZoom = Hr, r.Bounds = F, r.Browser = K, r.CRS = tt, r.Canvas = Br, r.Circle = un, r.CircleMarker = bi, r.Class = g, r.Control = Wt, r.DivIcon = Er, r.DivOverlay = te, r.DomEvent = Ys, r.DomUtil = Hs, r.Draggable = he, r.Evented = W, r.FeatureGroup = ee, r.GeoJSON = ne, r.GridLayer = Xe, r.Handler = Qt, r.Icon = Te, r.ImageOverlay = Ti, r.LatLng = q, r.LatLngBounds = X, r.Layer = Yt, r.LayerGroup = Pe, r.LineUtil = oa, r.Map = ut, r.Marker = yi, r.Mixin = Qs, r.Path = ue, r.Point = D, r.PolyUtil = ta, r.Polygon = ke, r.Polyline = ie, r.Popup = ki, r.PosAnimation = dr, r.Projection = sa, r.Rectangle = Rr, r.Renderer = re, r.SVG = Ke, r.SVGOverlay = zr, r.TileLayer = Me, r.Tooltip = Ci, r.Transformation = Tt, r.Util = ot, r.VideoOverlay = Sr, r.bind = h, r.bounds = U, r.canvas = Ar, r.circle = _a, r.circleMarker = da, r.control = Ye, r.divIcon = La, r.extend = u, r.featureGroup = ua, r.geoJSON = Mr, r.geoJson = ga, r.gridLayer = Pa, r.icon = ca, r.imageOverlay = va, r.latLng = V, r.latLngBounds = G, r.layerGroup = ha, r.map = Gs, r.marker = fa, r.point = E, r.polygon = pa, r.polyline = ma, r.popup = wa, r.rectangle = Ca, r.setOptions = S, r.stamp = f, r.svg = Zr, r.svgOverlay = ba, r.tileLayer = Or, r.tooltip = xa, r.transformation = H, r.version = a, r.videoOverlay = ya;
    var Sa = window.L;
    r.noConflict = function() {
      return window.L = Sa, this;
    }, window.L = r;
  });
})(Mn, Mn.exports);
var Re = Mn.exports;
const Zi = /* @__PURE__ */ wo(Re);
function li(i, s) {
  return s == null ? function(a, u) {
    return se(i(a, u));
  } : function(a, u) {
    const o = se(i(a, u)), h = se(a), {
      instance: c
    } = o.current;
    return Bt(function() {
      h.current !== a && (s(c, a, h.current), h.current = a);
    }, [c, a, u]), o;
  };
}
function Eo(i, s) {
  Bt(function() {
    return (s.layerContainer ?? s.map).addLayer(i.instance), function() {
      var o;
      (o = s.layerContainer) == null || o.removeLayer(i.instance), s.map.removeLayer(i.instance);
    };
  }, [s, i]);
}
function Oo(i) {
  return function(r) {
    const a = ai(), u = i(Ai(r, a), a);
    return ko(a.map, r.attribution), Dn(u.current, r.eventHandlers), Eo(u.current, a), u;
  };
}
function nl(i, s) {
  const r = se();
  Bt(function() {
    if (s.pathOptions !== r.current) {
      const u = s.pathOptions ?? {};
      i.instance.setStyle(u), r.current = u;
    }
  }, [i, s]);
}
function rl(i) {
  return function(r) {
    const a = ai(), u = i(Ai(r, a), a);
    return Dn(u.current, r.eventHandlers), Eo(u.current, a), nl(u.current, r), u;
  };
}
function ol(i) {
  function s(u, o) {
    return {
      instance: i(u),
      context: o
    };
  }
  const r = li(s), a = el(r);
  return zo(a);
}
function sl(i, s) {
  const r = li(i, s), a = Oo(r);
  return So(a);
}
function al(i, s) {
  const r = li(i), a = il(r, s);
  return tl(a);
}
function ll(i, s) {
  const r = li(i, s), a = rl(r);
  return So(a);
}
function Io(i, s) {
  const r = li(i, s), a = Oo(r);
  return zo(a);
}
function Bo(i, s, r) {
  const {
    opacity: a,
    zIndex: u
  } = s;
  a != null && a !== r.opacity && i.setOpacity(a), u != null && u !== r.zIndex && i.setZIndex(u);
}
function hl() {
  return ai().map;
}
const ul = ol(function(s) {
  return new Re.Control.Attribution(s);
});
function Sn() {
  return Sn = Object.assign || function(i) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, Sn.apply(this, arguments);
}
function cl(i, s) {
  const [r, a] = Zn(null);
  return Bt(() => {
    if (i.current !== null && r === null) {
      const u = new Re.Map(i.current, s);
      s.center != null && s.zoom != null ? u.setView(s.center, s.zoom) : s.bounds != null && u.fitBounds(s.bounds, s.boundsOptions), s.whenReady != null && u.whenReady(s.whenReady), a(u);
    }
  }, [i, r, s]), r;
}
function fl(i) {
  let {
    children: s,
    className: r,
    id: a,
    placeholder: u,
    style: o,
    whenCreated: h,
    ...c
  } = i;
  const f = se(null), _ = cl(f, c), v = se(!1);
  Bt(() => {
    _ != null && v.current === !1 && h != null && (v.current = !0, h(_));
  }, [_, h]), Bt(() => () => {
    _ == null || _.remove();
  }, [_]);
  const [p] = Zn({
    className: r,
    id: a,
    style: o
  }), y = ja(() => _ ? {
    __version: Qa,
    map: _
  } : null, [_]), b = y ? /* @__PURE__ */ Et.createElement(Mo, {
    value: y
  }, s) : u ?? null;
  return /* @__PURE__ */ Et.createElement("div", Sn({}, p, {
    ref: f
  }), b);
}
const dl = sl(function(s, r) {
  let {
    position: a,
    ...u
  } = s;
  const o = new Re.Marker(a, u);
  return {
    instance: o,
    context: {
      ...r,
      overlayContainer: o
    }
  };
}, function(s, r, a) {
  r.position !== a.position && s.setLatLng(r.position), r.icon != null && r.icon !== a.icon && s.setIcon(r.icon), r.zIndexOffset != null && r.zIndexOffset !== a.zIndexOffset && s.setZIndexOffset(r.zIndexOffset), r.opacity != null && r.opacity !== a.opacity && s.setOpacity(r.opacity), s.dragging != null && r.draggable !== a.draggable && (r.draggable === !0 ? s.dragging.enable() : s.dragging.disable());
}), _l = al(function(s, r) {
  return {
    instance: new Re.Popup(s, r.overlayContainer),
    context: r
  };
}, function(s, r, a, u) {
  const {
    onClose: o,
    onOpen: h,
    position: c
  } = a;
  Bt(function() {
    const {
      instance: _
    } = s;
    function v(y) {
      y.popup === _ && (_.update(), u(!0), h == null || h());
    }
    function p(y) {
      y.popup === _ && (u(!1), o == null || o());
    }
    return r.map.on({
      popupopen: v,
      popupclose: p
    }), r.overlayContainer == null ? (c != null && _.setLatLng(c), _.openOn(r.map)) : r.overlayContainer.bindPopup(_), function() {
      var b;
      r.map.off({
        popupopen: v,
        popupclose: p
      }), (b = r.overlayContainer) == null || b.unbindPopup(), r.map.removeLayer(_);
    };
  }, [s, r, u, o, h, c]);
}), ml = Io(function(s, r) {
  let {
    url: a,
    ...u
  } = s;
  return {
    instance: new Re.TileLayer(a, Ai(u, r)),
    context: r
  };
}, Bo);
var ii = function(s) {
  return s === void 0 && (s = ""), parseFloat(s.match(/\d+(\.\d+)?/), 10);
};
function pl(i) {
  var s, r = ce(Dt), a = i.size, u = {};
  if (r != null && (s = r.icon) != null && s.disableScaleDown) {
    var o = ii(r.icon.size[a] || a);
    o < 24 && (u.vectorEffect = "non-scaling-stroke");
  }
  return u;
}
var ro = function(s, r) {
  return (s - r) / 2 + "px";
};
function gl(i) {
  var s, r, a, u = i.height, o = i.size, h = o === void 0 ? "medium" : o, c = i.width, f = ce(Dt), _ = ii((f == null || (s = f.icon) == null || (s = s.size) == null ? void 0 : s[h]) || h), v = "";
  if (u && f != null && (r = f.text) != null && (r = r[u]) != null && r.height) {
    var p = ii(f.text[u].height);
    if (p > _) {
      var y = ro(p, _);
      v += "padding-top: " + y + "; padding-bottom: " + y + ";";
    }
  }
  if (c && f != null && (a = f.text) != null && (a = a[c]) != null && a.height) {
    var b = ii(f.text[c].height);
    if (b > _) {
      var k = ro(b, _);
      v += "padding-left: " + k + "; padding-right: " + k + ";";
    }
  }
  return v;
}
var vl = {
  global: {
    colors: {
      icon: "#666666"
    }
  },
  icon: {
    size: {
      small: "12px",
      medium: "24px",
      large: "48px",
      xlarge: "96px"
    }
  }
}, yl = {
  theme: vl
}, bl = ["a11yTitle", "color", "size", "theme"];
function zn() {
  return zn = Object.assign ? Object.assign.bind() : function(i) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, zn.apply(this, arguments);
}
function wl(i, s) {
  if (i == null) return {};
  var r = {}, a = Object.keys(i), u, o;
  for (o = 0; o < a.length; o++)
    u = a[o], !(s.indexOf(u) >= 0) && (r[u] = i[u]);
  return r;
}
var xl = function i(s, r, a) {
  var u = r.global && r.global.colors[s] !== void 0 ? r.global.colors[s] : s, o = u;
  return u && (r.dark && u.dark !== void 0 ? o = u.dark : !r.dark && u.light !== void 0 && (o = u.light)), o && r.global && r.global.colors[o] !== void 0 && (o = i(o, r)), o;
}, oo = function(s, r, a, u) {
  return yo(["", ":", ";"], s, xl(r, a));
}, Ll = yo(["", " ", " g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill='none']{stroke-width:0;}}*[stroke*='#'],*[STROKE*='#']{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*='#'],*[FILL*='#']{fill:inherit;stroke:none;}"], function(i) {
  return oo("fill", i.color || i.theme.global.colors.icon, i.theme);
}, function(i) {
  return oo("stroke", i.color || i.theme.global.colors.icon, i.theme);
}), Ao = /* @__PURE__ */ fe(function(i, s) {
  var r = i.a11yTitle;
  i.color, i.size, i.theme;
  var a = wl(i, bl);
  return /* @__PURE__ */ Et.createElement("svg", zn({
    ref: s,
    "aria-label": r
  }, a));
});
Ao.displayName = "Icon";
var hi = si(Ao).withConfig({
  // don't let height attribute leak to DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function(s) {
    return !["height", "width"].includes(s);
  }
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-ofa7kd-0"
})(["display:inline-block;flex:0 0 auto;", " ", " ", " ", ""], function(i) {
  var s, r = i.size, a = r === void 0 ? "medium" : r, u = i.theme, o = i.viewBox, h = (o || "0 0 24 24").split(" "), c = h[2], f = h[3], _ = c / f, v = u.icon.size[a] || a, p = ii(v), y = ((s = v.match(/[a-z]+$/)) == null ? void 0 : s[0]) || "px";
  return c < f ? `
      width: ` + p + y + `;
      height: ` + p / _ + y + `;
    ` : f < c ? `
      width: ` + p * _ + y + `;
      height: ` + p + y + `;
    ` : `
      width: ` + p + y + `;
      height: ` + p + y + `;
    `;
}, function(i) {
  var s = i.color;
  return s !== "plain" && Ll;
}, function(i) {
  return (i.height || i.width) && gl(i);
}, function(i) {
  var s = i.theme;
  return s && s.icon.extend;
});
hi.defaultProps = {};
Object.setPrototypeOf(hi.defaultProps, yl);
function Ii() {
  return Ii = Object.assign ? Object.assign.bind() : function(i) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, Ii.apply(this, arguments);
}
var Zo = /* @__PURE__ */ fe(function(i, s) {
  var r = pl(i);
  return /* @__PURE__ */ Et.createElement(hi, Ii({
    ref: s,
    viewBox: "0 0 24 24",
    a11yTitle: "Add"
  }, i), /* @__PURE__ */ Et.createElement("path", Ii({
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22V2M2 12h20"
  }, r)));
});
Zo.displayName = "Add";
function En() {
  return En = Object.assign ? Object.assign.bind() : function(i) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, En.apply(this, arguments);
}
var Ro = /* @__PURE__ */ fe(function(i, s) {
  return /* @__PURE__ */ Et.createElement(hi, En({
    ref: s,
    viewBox: "0 0 24 24",
    a11yTitle: "Globe"
  }, i), /* @__PURE__ */ Et.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 8s3.5 1 5 2 .564 2.42 1 3c.436.58 2-1 2 2s3 1 3 4 2.5 2.5 3 1 2.233-3.134 2-5c-.233-1.866-1-3-3-3s-3.5-.5-4-2 3-2 2-5 0-4 0-4m10 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z"
  }));
});
Ro.displayName = "Globe";
function On() {
  return On = Object.assign ? Object.assign.bind() : function(i) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, On.apply(this, arguments);
}
var Do = /* @__PURE__ */ fe(function(i, s) {
  return /* @__PURE__ */ Et.createElement(hi, On({
    ref: s,
    viewBox: "0 0 24 24",
    a11yTitle: "Subtract"
  }, i), /* @__PURE__ */ Et.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 12h20"
  }));
});
Do.displayName = "Subtract";
const Pl = ({ locations: i }) => {
  const s = Zi.latLngBounds();
  return i.features ? i.features.forEach((r) => {
    var a, u;
    s.extend([
      (a = r.geometry) == null ? void 0 : a.coordinates[0],
      (u = r.geometry) == null ? void 0 : u.coordinates[1]
    ]);
  }) : i.forEach((r) => {
    s.extend([r == null ? void 0 : r[0], r == null ? void 0 : r[1]]);
  }), s;
}, Tl = 1.5, kl = ({ locations: i }) => {
  const s = hl(), r = i && Pl({ locations: i }), [a, u] = Et.useState(!1);
  return Bt(() => {
    r && !a && (JSON.stringify(r._northEast) === JSON.stringify(r._southWest) || s.flyToBounds(r, { duration: Tl }));
  }, [r, s, a]), Bt(() => {
    u(!0);
  }, []), // css classes are coming from https://github.com/Leaflet/Leaflet/blob/main/dist/leaflet.css
  /* @__PURE__ */ gt(ve, { className: "leaflet-bottom leaflet-right", children: /* @__PURE__ */ gt(ve, { className: "leaflet-control", children: /* @__PURE__ */ Bn(ve, { elevation: "large", round: "medium", background: "background", children: [
    /* @__PURE__ */ gt(
      mn,
      {
        a11yTitle: "Zoom in",
        icon: /* @__PURE__ */ gt(Zo, {}),
        onClick: (o) => {
          o.preventDefault(), s.zoomIn();
        }
      }
    ),
    /* @__PURE__ */ gt(
      mn,
      {
        a11yTitle: "Zoom out",
        icon: /* @__PURE__ */ gt(Do, {}),
        onClick: (o) => {
          o.preventDefault(), s.zoomOut();
        }
      }
    ),
    /* @__PURE__ */ gt(
      ve,
      {
        border: {
          color: "border-weak",
          side: "top"
        },
        children: r && /* @__PURE__ */ gt(
          mn,
          {
            a11yTitle: "Zoom to data",
            icon: /* @__PURE__ */ gt(Ro, {}),
            onClick: (o) => {
              o.preventDefault(), s.flyToBounds(r, { duration: 1.5 });
            }
          }
        )
      }
    )
  ] }) }) });
};
kl.propTypes = {
  locations: pt.oneOfType([pt.array, pt.object])
};
const jo = {
  default: {
    container: {
      // any box props
      align: "center",
      justify: "center",
      background: "background-front",
      border: {
        color: "border",
        size: "small"
      },
      elevation: "medium",
      flex: !1,
      round: "full"
    }
    // icon: undefined,
  }
}, Cl = ri(jo, {
  default: {
    container: {
      height: { min: "25px", max: "25px" },
      width: { min: "25px", max: "25px" }
    }
  }
}), Ml = {
  pin: {
    ...Cl
  },
  cluster: {
    ...jo,
    size: {
      small: {
        container: {
          height: { min: "36px", max: "36px" },
          width: { min: "36px", max: "36px" }
        },
        label: {
          // any text props
          size: "small"
        }
      },
      medium: {
        container: {
          direction: "row-reverse",
          gap: "xxsmall",
          height: { min: "48px", max: "48px" },
          width: { min: "48px", max: "48px" }
        },
        label: {
          color: "text-strong",
          size: "medium",
          weight: 500
        }
      },
      large: {
        container: {
          direction: "row-reverse",
          gap: "xxsmall",
          height: { min: "54px", max: "54px" },
          width: { min: "54px", max: "54px" }
        },
        label: {
          size: "medium"
        }
      }
    }
  },
  popup: {
    background: "background-front",
    border: { color: "border-weak", size: "xsmall" },
    gap: "xsmall",
    margin: "none",
    pad: "small",
    round: "xsmall"
  },
  tiles: {
    // water: 'purple',
    // majorRoad: 'transparent',
    // buildings: 'darkgray',
    // park: 'gray',
    // mediumRoad: '#FFF2C8',
    // minorRoad: '#ffffff',
    // boundaries: '#9e9e9e',
  }
  // TODO: define tile API, considering dark/light with flexible theming
  // tiles: {
  // Colors and feature mapping from Protomaps [basemap layers]
  // (https://docs.protomaps.com/basemaps/layers#basemap-layers) derived from OpenStreetMap.
  // earth: '#FFFBF6',
  // glacier: '#ffffff',
  // residential: '#F4F4F8',
  // hospital: '#FFF6F6',
  // cemetery: '#EFF2EE',
  // school: '#F7F6FF',
  // industrial: '#FFF9EF',
  // wood: '#F4F9EF',
  // grass: '#EBF9E3',
  // park: '#E5F9D5',
  // water: '#B7DFF2',
  // sand: '#ebebeb',
  // buildings: '#F2EDE8',
  // highwayCasing: '#FFC3C3',
  // majorRoadCasing: '#FFB9B9',
  // mediumRoadCasing: '#FFCE8E',
  // minorRoadCasing: '#cccccc',
  // highway: '#FFCEBB',
  // majorRoad: '#FFE4B3',
  // mediumRoad: '#FFF2C8',
  // minorRoad: '#ffffff',
  // boundaries: '#9e9e9e',
  // mask: '#dddddd',
  // countryLabel: '#aaaaaa',
  // cityLabel: '#6C6C6C',
  // stateLabel: '#999999',
  // neighbourhoodLabel: '#888888',
  // landuseLabel: '#898989',
  // waterLabel: '#41ABDC',
  // naturalLabel: '#4B8F14',
  // roadsLabel: '#888888',
  // poisLabel: '#606060',
  // },
};
var Sl = Object.create, Fo = Object.defineProperty, zl = Object.getOwnPropertyDescriptor, No = Object.getOwnPropertyNames, El = Object.getPrototypeOf, Ol = Object.prototype.hasOwnProperty, Ut = Math.pow, ae = (i, s) => function() {
  return s || (0, i[No(i)[0]])((s = { exports: {} }).exports, s), s.exports;
}, Il = (i, s, r, a) => {
  if (s && typeof s == "object" || typeof s == "function")
    for (let u of No(s))
      !Ol.call(i, u) && u !== r && Fo(i, u, { get: () => s[u], enumerable: !(a = zl(s, u)) || a.enumerable });
  return i;
}, Ht = (i, s, r) => (r = i != null ? Sl(El(i)) : {}, Il(
  !i || !i.__esModule ? Fo(r, "default", { value: i, enumerable: !0 }) : r,
  i
)), Ze = (i, s, r) => new Promise((a, u) => {
  var o = (f) => {
    try {
      c(r.next(f));
    } catch (_) {
      u(_);
    }
  }, h = (f) => {
    try {
      c(r.throw(f));
    } catch (_) {
      u(_);
    }
  }, c = (f) => f.done ? a(f.value) : Promise.resolve(f.value).then(o, h);
  c((r = r.apply(i, s)).next());
}), le = ae({
  "node_modules/@mapbox/point-geometry/index.js"(i, s) {
    s.exports = r;
    function r(a, u) {
      this.x = a, this.y = u;
    }
    r.prototype = {
      clone: function() {
        return new r(this.x, this.y);
      },
      add: function(a) {
        return this.clone()._add(a);
      },
      sub: function(a) {
        return this.clone()._sub(a);
      },
      multByPoint: function(a) {
        return this.clone()._multByPoint(a);
      },
      divByPoint: function(a) {
        return this.clone()._divByPoint(a);
      },
      mult: function(a) {
        return this.clone()._mult(a);
      },
      div: function(a) {
        return this.clone()._div(a);
      },
      rotate: function(a) {
        return this.clone()._rotate(a);
      },
      rotateAround: function(a, u) {
        return this.clone()._rotateAround(a, u);
      },
      matMult: function(a) {
        return this.clone()._matMult(a);
      },
      unit: function() {
        return this.clone()._unit();
      },
      perp: function() {
        return this.clone()._perp();
      },
      round: function() {
        return this.clone()._round();
      },
      mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      },
      equals: function(a) {
        return this.x === a.x && this.y === a.y;
      },
      dist: function(a) {
        return Math.sqrt(this.distSqr(a));
      },
      distSqr: function(a) {
        var u = a.x - this.x, o = a.y - this.y;
        return u * u + o * o;
      },
      angle: function() {
        return Math.atan2(this.y, this.x);
      },
      angleTo: function(a) {
        return Math.atan2(this.y - a.y, this.x - a.x);
      },
      angleWith: function(a) {
        return this.angleWithSep(a.x, a.y);
      },
      angleWithSep: function(a, u) {
        return Math.atan2(
          this.x * u - this.y * a,
          this.x * a + this.y * u
        );
      },
      _matMult: function(a) {
        var u = a[0] * this.x + a[1] * this.y, o = a[2] * this.x + a[3] * this.y;
        return this.x = u, this.y = o, this;
      },
      _add: function(a) {
        return this.x += a.x, this.y += a.y, this;
      },
      _sub: function(a) {
        return this.x -= a.x, this.y -= a.y, this;
      },
      _mult: function(a) {
        return this.x *= a, this.y *= a, this;
      },
      _div: function(a) {
        return this.x /= a, this.y /= a, this;
      },
      _multByPoint: function(a) {
        return this.x *= a.x, this.y *= a.y, this;
      },
      _divByPoint: function(a) {
        return this.x /= a.x, this.y /= a.y, this;
      },
      _unit: function() {
        return this._div(this.mag()), this;
      },
      _perp: function() {
        var a = this.y;
        return this.y = this.x, this.x = -a, this;
      },
      _rotate: function(a) {
        var u = Math.cos(a), o = Math.sin(a), h = u * this.x - o * this.y, c = o * this.x + u * this.y;
        return this.x = h, this.y = c, this;
      },
      _rotateAround: function(a, u) {
        var o = Math.cos(a), h = Math.sin(a), c = u.x + o * (this.x - u.x) - h * (this.y - u.y), f = u.y + h * (this.x - u.x) + o * (this.y - u.y);
        return this.x = c, this.y = f, this;
      },
      _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      }
    }, r.convert = function(a) {
      return a instanceof r ? a : Array.isArray(a) ? new r(a[0], a[1]) : a;
    };
  }
}), Bl = ae({
  "node_modules/@mapbox/unitbezier/index.js"(i, s) {
    s.exports = r;
    function r(a, u, o, h) {
      this.cx = 3 * a, this.bx = 3 * (o - a) - this.cx, this.ax = 1 - this.cx - this.bx, this.cy = 3 * u, this.by = 3 * (h - u) - this.cy, this.ay = 1 - this.cy - this.by, this.p1x = a, this.p1y = h, this.p2x = o, this.p2y = h;
    }
    r.prototype.sampleCurveX = function(a) {
      return ((this.ax * a + this.bx) * a + this.cx) * a;
    }, r.prototype.sampleCurveY = function(a) {
      return ((this.ay * a + this.by) * a + this.cy) * a;
    }, r.prototype.sampleCurveDerivativeX = function(a) {
      return (3 * this.ax * a + 2 * this.bx) * a + this.cx;
    }, r.prototype.solveCurveX = function(a, u) {
      typeof u > "u" && (u = 1e-6);
      var o, h, c, f, _;
      for (c = a, _ = 0; _ < 8; _++) {
        if (f = this.sampleCurveX(c) - a, Math.abs(f) < u)
          return c;
        var v = this.sampleCurveDerivativeX(c);
        if (Math.abs(v) < 1e-6)
          break;
        c = c - f / v;
      }
      if (o = 0, h = 1, c = a, c < o)
        return o;
      if (c > h)
        return h;
      for (; o < h; ) {
        if (f = this.sampleCurveX(c), Math.abs(f - a) < u)
          return c;
        a > f ? o = c : h = c, c = (h - o) * 0.5 + o;
      }
      return c;
    }, r.prototype.solve = function(a, u) {
      return this.sampleCurveY(this.solveCurveX(a, u));
    };
  }
}), Uo = ae({
  "node_modules/@mapbox/vector-tile/lib/vectortilefeature.js"(i, s) {
    var r = le();
    s.exports = a;
    function a(f, _, v, p, y) {
      this.properties = {}, this.extent = v, this.type = 0, this._pbf = f, this._geometry = -1, this._keys = p, this._values = y, f.readFields(u, this, _);
    }
    function u(f, _, v) {
      f == 1 ? _.id = v.readVarint() : f == 2 ? o(v, _) : f == 3 ? _.type = v.readVarint() : f == 4 && (_._geometry = v.pos);
    }
    function o(f, _) {
      for (var v = f.readVarint() + f.pos; f.pos < v; ) {
        var p = _._keys[f.readVarint()], y = _._values[f.readVarint()];
        _.properties[p] = y;
      }
    }
    a.types = ["Unknown", "Point", "LineString", "Polygon"], a.prototype.loadGeometry = function() {
      var f = this._pbf;
      f.pos = this._geometry;
      for (var _ = f.readVarint() + f.pos, v = 1, p = 0, y = 0, b = 0, k = [], S; f.pos < _; ) {
        if (p <= 0) {
          var B = f.readVarint();
          v = B & 7, p = B >> 3;
        }
        if (p--, v === 1 || v === 2)
          y += f.readSVarint(), b += f.readSVarint(), v === 1 && (S && k.push(S), S = []), S.push(new r(y, b));
        else if (v === 7)
          S && S.push(S[0].clone());
        else
          throw new Error("unknown command " + v);
      }
      return S && k.push(S), k;
    }, a.prototype.bbox = function() {
      var f = this._pbf;
      f.pos = this._geometry;
      for (var _ = f.readVarint() + f.pos, v = 1, p = 0, y = 0, b = 0, k = 1 / 0, S = -1 / 0, B = 1 / 0, A = -1 / 0; f.pos < _; ) {
        if (p <= 0) {
          var w = f.readVarint();
          v = w & 7, p = w >> 3;
        }
        if (p--, v === 1 || v === 2)
          y += f.readSVarint(), b += f.readSVarint(), y < k && (k = y), y > S && (S = y), b < B && (B = b), b > A && (A = b);
        else if (v !== 7)
          throw new Error("unknown command " + v);
      }
      return [k, B, S, A];
    }, a.prototype.toGeoJSON = function(f, _, v) {
      var p = this.extent * Math.pow(2, v), y = this.extent * f, b = this.extent * _, k = this.loadGeometry(), S = a.types[this.type], B, A;
      function w(z) {
        for (var Z = 0; Z < z.length; Z++) {
          var R = z[Z], N = 180 - (R.y + b) * 360 / p;
          z[Z] = [
            (R.x + y) * 360 / p - 180,
            360 / Math.PI * Math.atan(Math.exp(N * Math.PI / 180)) - 90
          ];
        }
      }
      switch (this.type) {
        case 1:
          var T = [];
          for (B = 0; B < k.length; B++)
            T[B] = k[B][0];
          k = T, w(k);
          break;
        case 2:
          for (B = 0; B < k.length; B++)
            w(k[B]);
          break;
        case 3:
          for (k = h(k), B = 0; B < k.length; B++)
            for (A = 0; A < k[B].length; A++)
              w(k[B][A]);
          break;
      }
      k.length === 1 ? k = k[0] : S = "Multi" + S;
      var C = {
        type: "Feature",
        geometry: {
          type: S,
          coordinates: k
        },
        properties: this.properties
      };
      return "id" in this && (C.id = this.id), C;
    };
    function h(f) {
      var _ = f.length;
      if (_ <= 1)
        return [f];
      for (var v = [], p, y, b = 0; b < _; b++) {
        var k = c(f[b]);
        k !== 0 && (y === void 0 && (y = k < 0), y === k < 0 ? (p && v.push(p), p = [f[b]]) : p.push(f[b]));
      }
      return p && v.push(p), v;
    }
    function c(f) {
      for (var _ = 0, v = 0, p = f.length, y = p - 1, b, k; v < p; y = v++)
        b = f[v], k = f[y], _ += (k.x - b.x) * (b.y + k.y);
      return _;
    }
  }
}), Vo = ae({
  "node_modules/@mapbox/vector-tile/lib/vectortilelayer.js"(i, s) {
    var r = Uo();
    s.exports = a;
    function a(h, c) {
      this.version = 1, this.name = null, this.extent = 4096, this.length = 0, this._pbf = h, this._keys = [], this._values = [], this._features = [], h.readFields(u, this, c), this.length = this._features.length;
    }
    function u(h, c, f) {
      h === 15 ? c.version = f.readVarint() : h === 1 ? c.name = f.readString() : h === 5 ? c.extent = f.readVarint() : h === 2 ? c._features.push(f.pos) : h === 3 ? c._keys.push(f.readString()) : h === 4 && c._values.push(o(f));
    }
    function o(h) {
      for (var c = null, f = h.readVarint() + h.pos; h.pos < f; ) {
        var _ = h.readVarint() >> 3;
        c = _ === 1 ? h.readString() : _ === 2 ? h.readFloat() : _ === 3 ? h.readDouble() : _ === 4 ? h.readVarint64() : _ === 5 ? h.readVarint() : _ === 6 ? h.readSVarint() : _ === 7 ? h.readBoolean() : null;
      }
      return c;
    }
    a.prototype.feature = function(h) {
      if (h < 0 || h >= this._features.length)
        throw new Error("feature index out of bounds");
      this._pbf.pos = this._features[h];
      var c = this._pbf.readVarint() + this._pbf.pos;
      return new r(this._pbf, c, this.extent, this._keys, this._values);
    };
  }
}), Al = ae({
  "node_modules/@mapbox/vector-tile/lib/vectortile.js"(i, s) {
    var r = Vo();
    s.exports = a;
    function a(o, h) {
      this.layers = o.readFields(u, {}, h);
    }
    function u(o, h, c) {
      if (o === 3) {
        var f = new r(c, c.readVarint() + c.pos);
        f.length && (h[f.name] = f);
      }
    }
  }
}), Zl = ae({
  "node_modules/@mapbox/vector-tile/index.js"(i, s) {
    s.exports.VectorTile = Al(), s.exports.VectorTileFeature = Uo(), s.exports.VectorTileLayer = Vo();
  }
}), Rl = ae({
  "node_modules/ieee754/index.js"(i) {
    i.read = function(s, r, a, u, o) {
      var h, c, f = o * 8 - u - 1, _ = (1 << f) - 1, v = _ >> 1, p = -7, y = a ? o - 1 : 0, b = a ? -1 : 1, k = s[r + y];
      for (y += b, h = k & (1 << -p) - 1, k >>= -p, p += f; p > 0; h = h * 256 + s[r + y], y += b, p -= 8)
        ;
      for (c = h & (1 << -p) - 1, h >>= -p, p += u; p > 0; c = c * 256 + s[r + y], y += b, p -= 8)
        ;
      if (h === 0)
        h = 1 - v;
      else {
        if (h === _)
          return c ? NaN : (k ? -1 : 1) * (1 / 0);
        c = c + Math.pow(2, u), h = h - v;
      }
      return (k ? -1 : 1) * c * Math.pow(2, h - u);
    }, i.write = function(s, r, a, u, o, h) {
      var c, f, _, v = h * 8 - o - 1, p = (1 << v) - 1, y = p >> 1, b = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, k = u ? 0 : h - 1, S = u ? 1 : -1, B = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
      for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (f = isNaN(r) ? 1 : 0, c = p) : (c = Math.floor(Math.log(r) / Math.LN2), r * (_ = Math.pow(2, -c)) < 1 && (c--, _ *= 2), c + y >= 1 ? r += b / _ : r += b * Math.pow(2, 1 - y), r * _ >= 2 && (c++, _ /= 2), c + y >= p ? (f = 0, c = p) : c + y >= 1 ? (f = (r * _ - 1) * Math.pow(2, o), c = c + y) : (f = r * Math.pow(2, y - 1) * Math.pow(2, o), c = 0)); o >= 8; s[a + k] = f & 255, k += S, f /= 256, o -= 8)
        ;
      for (c = c << o | f, v += o; v > 0; s[a + k] = c & 255, k += S, c /= 256, v -= 8)
        ;
      s[a + k - S] |= B * 128;
    };
  }
}), Dl = ae({
  "node_modules/pbf/index.js"(i, s) {
    s.exports = a;
    var r = Rl();
    function a(g) {
      this.buf = ArrayBuffer.isView && ArrayBuffer.isView(g) ? g : new Uint8Array(g || 0), this.pos = 0, this.type = 0, this.length = this.buf.length;
    }
    a.Varint = 0, a.Fixed64 = 1, a.Bytes = 2, a.Fixed32 = 5;
    var u = 65536 * 65536, o = 1 / u, h = 12, c = typeof TextDecoder > "u" ? null : new TextDecoder("utf8");
    a.prototype = {
      destroy: function() {
        this.buf = null;
      },
      readFields: function(g, P, M) {
        for (M = M || this.length; this.pos < M; ) {
          var W = this.readVarint(), D = W >> 3, Q = this.pos;
          this.type = W & 7, g(D, P, this), this.pos === Q && this.skip(W);
        }
        return P;
      },
      readMessage: function(g, P) {
        return this.readFields(g, P, this.readVarint() + this.pos);
      },
      readFixed32: function() {
        var g = N(this.buf, this.pos);
        return this.pos += 4, g;
      },
      readSFixed32: function() {
        var g = it(this.buf, this.pos);
        return this.pos += 4, g;
      },
      readFixed64: function() {
        var g = N(this.buf, this.pos) + N(this.buf, this.pos + 4) * u;
        return this.pos += 8, g;
      },
      readSFixed64: function() {
        var g = N(this.buf, this.pos) + it(this.buf, this.pos + 4) * u;
        return this.pos += 8, g;
      },
      readFloat: function() {
        var g = r.read(this.buf, this.pos, !0, 23, 4);
        return this.pos += 4, g;
      },
      readDouble: function() {
        var g = r.read(this.buf, this.pos, !0, 52, 8);
        return this.pos += 8, g;
      },
      readVarint: function(g) {
        var P = this.buf, M, W;
        return W = P[this.pos++], M = W & 127, W < 128 || (W = P[this.pos++], M |= (W & 127) << 7, W < 128) || (W = P[this.pos++], M |= (W & 127) << 14, W < 128) || (W = P[this.pos++], M |= (W & 127) << 21, W < 128) ? M : (W = P[this.pos], M |= (W & 15) << 28, f(M, g, this));
      },
      readVarint64: function() {
        return this.readVarint(!0);
      },
      readSVarint: function() {
        var g = this.readVarint();
        return g % 2 === 1 ? (g + 1) / -2 : g / 2;
      },
      readBoolean: function() {
        return !!this.readVarint();
      },
      readString: function() {
        var g = this.readVarint() + this.pos, P = this.pos;
        return this.pos = g, g - P >= h && c ? rt(this.buf, P, g) : J(this.buf, P, g);
      },
      readBytes: function() {
        var g = this.readVarint() + this.pos, P = this.buf.subarray(this.pos, g);
        return this.pos = g, P;
      },
      readPackedVarint: function(g, P) {
        if (this.type !== a.Bytes)
          return g.push(this.readVarint(P));
        var M = _(this);
        for (g = g || []; this.pos < M; )
          g.push(this.readVarint(P));
        return g;
      },
      readPackedSVarint: function(g) {
        if (this.type !== a.Bytes)
          return g.push(this.readSVarint());
        var P = _(this);
        for (g = g || []; this.pos < P; )
          g.push(this.readSVarint());
        return g;
      },
      readPackedBoolean: function(g) {
        if (this.type !== a.Bytes)
          return g.push(this.readBoolean());
        var P = _(this);
        for (g = g || []; this.pos < P; )
          g.push(this.readBoolean());
        return g;
      },
      readPackedFloat: function(g) {
        if (this.type !== a.Bytes)
          return g.push(this.readFloat());
        var P = _(this);
        for (g = g || []; this.pos < P; )
          g.push(this.readFloat());
        return g;
      },
      readPackedDouble: function(g) {
        if (this.type !== a.Bytes)
          return g.push(this.readDouble());
        var P = _(this);
        for (g = g || []; this.pos < P; )
          g.push(this.readDouble());
        return g;
      },
      readPackedFixed32: function(g) {
        if (this.type !== a.Bytes)
          return g.push(this.readFixed32());
        var P = _(this);
        for (g = g || []; this.pos < P; )
          g.push(this.readFixed32());
        return g;
      },
      readPackedSFixed32: function(g) {
        if (this.type !== a.Bytes)
          return g.push(this.readSFixed32());
        var P = _(this);
        for (g = g || []; this.pos < P; )
          g.push(this.readSFixed32());
        return g;
      },
      readPackedFixed64: function(g) {
        if (this.type !== a.Bytes)
          return g.push(this.readFixed64());
        var P = _(this);
        for (g = g || []; this.pos < P; )
          g.push(this.readFixed64());
        return g;
      },
      readPackedSFixed64: function(g) {
        if (this.type !== a.Bytes)
          return g.push(this.readSFixed64());
        var P = _(this);
        for (g = g || []; this.pos < P; )
          g.push(this.readSFixed64());
        return g;
      },
      skip: function(g) {
        var P = g & 7;
        if (P === a.Varint)
          for (; this.buf[this.pos++] > 127; )
            ;
        else if (P === a.Bytes)
          this.pos = this.readVarint() + this.pos;
        else if (P === a.Fixed32)
          this.pos += 4;
        else if (P === a.Fixed64)
          this.pos += 8;
        else
          throw new Error("Unimplemented type: " + P);
      },
      writeTag: function(g, P) {
        this.writeVarint(g << 3 | P);
      },
      realloc: function(g) {
        for (var P = this.length || 16; P < this.pos + g; )
          P *= 2;
        if (P !== this.length) {
          var M = new Uint8Array(P);
          M.set(this.buf), this.buf = M, this.length = P;
        }
      },
      finish: function() {
        return this.length = this.pos, this.pos = 0, this.buf.subarray(0, this.length);
      },
      writeFixed32: function(g) {
        this.realloc(4), $(this.buf, g, this.pos), this.pos += 4;
      },
      writeSFixed32: function(g) {
        this.realloc(4), $(this.buf, g, this.pos), this.pos += 4;
      },
      writeFixed64: function(g) {
        this.realloc(8), $(this.buf, g & -1, this.pos), $(this.buf, Math.floor(g * o), this.pos + 4), this.pos += 8;
      },
      writeSFixed64: function(g) {
        this.realloc(8), $(this.buf, g & -1, this.pos), $(this.buf, Math.floor(g * o), this.pos + 4), this.pos += 8;
      },
      writeVarint: function(g) {
        if (g = +g || 0, g > 268435455 || g < 0) {
          p(g, this);
          return;
        }
        this.realloc(4), this.buf[this.pos++] = g & 127 | (g > 127 ? 128 : 0), !(g <= 127) && (this.buf[this.pos++] = (g >>>= 7) & 127 | (g > 127 ? 128 : 0), !(g <= 127) && (this.buf[this.pos++] = (g >>>= 7) & 127 | (g > 127 ? 128 : 0), !(g <= 127) && (this.buf[this.pos++] = g >>> 7 & 127)));
      },
      writeSVarint: function(g) {
        this.writeVarint(g < 0 ? -g * 2 - 1 : g * 2);
      },
      writeBoolean: function(g) {
        this.writeVarint(!!g);
      },
      writeString: function(g) {
        g = String(g), this.realloc(g.length * 4), this.pos++;
        var P = this.pos;
        this.pos = ot(this.buf, g, this.pos);
        var M = this.pos - P;
        M >= 128 && k(P, M, this), this.pos = P - 1, this.writeVarint(M), this.pos += M;
      },
      writeFloat: function(g) {
        this.realloc(4), r.write(this.buf, g, this.pos, !0, 23, 4), this.pos += 4;
      },
      writeDouble: function(g) {
        this.realloc(8), r.write(this.buf, g, this.pos, !0, 52, 8), this.pos += 8;
      },
      writeBytes: function(g) {
        var P = g.length;
        this.writeVarint(P), this.realloc(P);
        for (var M = 0; M < P; M++)
          this.buf[this.pos++] = g[M];
      },
      writeRawMessage: function(g, P) {
        this.pos++;
        var M = this.pos;
        g(P, this);
        var W = this.pos - M;
        W >= 128 && k(M, W, this), this.pos = M - 1, this.writeVarint(W), this.pos += W;
      },
      writeMessage: function(g, P, M) {
        this.writeTag(g, a.Bytes), this.writeRawMessage(P, M);
      },
      writePackedVarint: function(g, P) {
        P.length && this.writeMessage(g, S, P);
      },
      writePackedSVarint: function(g, P) {
        P.length && this.writeMessage(g, B, P);
      },
      writePackedBoolean: function(g, P) {
        P.length && this.writeMessage(g, T, P);
      },
      writePackedFloat: function(g, P) {
        P.length && this.writeMessage(g, A, P);
      },
      writePackedDouble: function(g, P) {
        P.length && this.writeMessage(g, w, P);
      },
      writePackedFixed32: function(g, P) {
        P.length && this.writeMessage(g, C, P);
      },
      writePackedSFixed32: function(g, P) {
        P.length && this.writeMessage(g, z, P);
      },
      writePackedFixed64: function(g, P) {
        P.length && this.writeMessage(g, Z, P);
      },
      writePackedSFixed64: function(g, P) {
        P.length && this.writeMessage(g, R, P);
      },
      writeBytesField: function(g, P) {
        this.writeTag(g, a.Bytes), this.writeBytes(P);
      },
      writeFixed32Field: function(g, P) {
        this.writeTag(g, a.Fixed32), this.writeFixed32(P);
      },
      writeSFixed32Field: function(g, P) {
        this.writeTag(g, a.Fixed32), this.writeSFixed32(P);
      },
      writeFixed64Field: function(g, P) {
        this.writeTag(g, a.Fixed64), this.writeFixed64(P);
      },
      writeSFixed64Field: function(g, P) {
        this.writeTag(g, a.Fixed64), this.writeSFixed64(P);
      },
      writeVarintField: function(g, P) {
        this.writeTag(g, a.Varint), this.writeVarint(P);
      },
      writeSVarintField: function(g, P) {
        this.writeTag(g, a.Varint), this.writeSVarint(P);
      },
      writeStringField: function(g, P) {
        this.writeTag(g, a.Bytes), this.writeString(P);
      },
      writeFloatField: function(g, P) {
        this.writeTag(g, a.Fixed32), this.writeFloat(P);
      },
      writeDoubleField: function(g, P) {
        this.writeTag(g, a.Fixed64), this.writeDouble(P);
      },
      writeBooleanField: function(g, P) {
        this.writeVarintField(g, !!P);
      }
    };
    function f(g, P, M) {
      var W = M.buf, D, Q;
      if (Q = W[M.pos++], D = (Q & 112) >> 4, Q < 128 || (Q = W[M.pos++], D |= (Q & 127) << 3, Q < 128) || (Q = W[M.pos++], D |= (Q & 127) << 10, Q < 128) || (Q = W[M.pos++], D |= (Q & 127) << 17, Q < 128) || (Q = W[M.pos++], D |= (Q & 127) << 24, Q < 128) || (Q = W[M.pos++], D |= (Q & 1) << 31, Q < 128))
        return v(g, D, P);
      throw new Error("Expected varint not more than 10 bytes");
    }
    function _(g) {
      return g.type === a.Bytes ? g.readVarint() + g.pos : g.pos + 1;
    }
    function v(g, P, M) {
      return M ? P * 4294967296 + (g >>> 0) : (P >>> 0) * 4294967296 + (g >>> 0);
    }
    function p(g, P) {
      var M, W;
      if (g >= 0 ? (M = g % 4294967296 | 0, W = g / 4294967296 | 0) : (M = ~(-g % 4294967296), W = ~(-g / 4294967296), M ^ 4294967295 ? M = M + 1 | 0 : (M = 0, W = W + 1 | 0)), g >= 18446744073709552e3 || g < -18446744073709552e3)
        throw new Error("Given varint doesn't fit into 10 bytes");
      P.realloc(10), y(M, W, P), b(W, P);
    }
    function y(g, P, M) {
      M.buf[M.pos++] = g & 127 | 128, g >>>= 7, M.buf[M.pos++] = g & 127 | 128, g >>>= 7, M.buf[M.pos++] = g & 127 | 128, g >>>= 7, M.buf[M.pos++] = g & 127 | 128, g >>>= 7, M.buf[M.pos] = g & 127;
    }
    function b(g, P) {
      var M = (g & 7) << 4;
      P.buf[P.pos++] |= M | ((g >>>= 3) ? 128 : 0), g && (P.buf[P.pos++] = g & 127 | ((g >>>= 7) ? 128 : 0), g && (P.buf[P.pos++] = g & 127 | ((g >>>= 7) ? 128 : 0), g && (P.buf[P.pos++] = g & 127 | ((g >>>= 7) ? 128 : 0), g && (P.buf[P.pos++] = g & 127 | ((g >>>= 7) ? 128 : 0), g && (P.buf[P.pos++] = g & 127)))));
    }
    function k(g, P, M) {
      var W = P <= 16383 ? 1 : P <= 2097151 ? 2 : P <= 268435455 ? 3 : Math.floor(Math.log(P) / (Math.LN2 * 7));
      M.realloc(W);
      for (var D = M.pos - 1; D >= g; D--)
        M.buf[D + W] = M.buf[D];
    }
    function S(g, P) {
      for (var M = 0; M < g.length; M++)
        P.writeVarint(g[M]);
    }
    function B(g, P) {
      for (var M = 0; M < g.length; M++)
        P.writeSVarint(g[M]);
    }
    function A(g, P) {
      for (var M = 0; M < g.length; M++)
        P.writeFloat(g[M]);
    }
    function w(g, P) {
      for (var M = 0; M < g.length; M++)
        P.writeDouble(g[M]);
    }
    function T(g, P) {
      for (var M = 0; M < g.length; M++)
        P.writeBoolean(g[M]);
    }
    function C(g, P) {
      for (var M = 0; M < g.length; M++)
        P.writeFixed32(g[M]);
    }
    function z(g, P) {
      for (var M = 0; M < g.length; M++)
        P.writeSFixed32(g[M]);
    }
    function Z(g, P) {
      for (var M = 0; M < g.length; M++)
        P.writeFixed64(g[M]);
    }
    function R(g, P) {
      for (var M = 0; M < g.length; M++)
        P.writeSFixed64(g[M]);
    }
    function N(g, P) {
      return (g[P] | g[P + 1] << 8 | g[P + 2] << 16) + g[P + 3] * 16777216;
    }
    function $(g, P, M) {
      g[M] = P, g[M + 1] = P >>> 8, g[M + 2] = P >>> 16, g[M + 3] = P >>> 24;
    }
    function it(g, P) {
      return (g[P] | g[P + 1] << 8 | g[P + 2] << 16) + (g[P + 3] << 24);
    }
    function J(g, P, M) {
      for (var W = "", D = P; D < M; ) {
        var Q = g[D], E = null, F = Q > 239 ? 4 : Q > 223 ? 3 : Q > 191 ? 2 : 1;
        if (D + F > M)
          break;
        var U, X, G;
        F === 1 ? Q < 128 && (E = Q) : F === 2 ? (U = g[D + 1], (U & 192) === 128 && (E = (Q & 31) << 6 | U & 63, E <= 127 && (E = null))) : F === 3 ? (U = g[D + 1], X = g[D + 2], (U & 192) === 128 && (X & 192) === 128 && (E = (Q & 15) << 12 | (U & 63) << 6 | X & 63, (E <= 2047 || E >= 55296 && E <= 57343) && (E = null))) : F === 4 && (U = g[D + 1], X = g[D + 2], G = g[D + 3], (U & 192) === 128 && (X & 192) === 128 && (G & 192) === 128 && (E = (Q & 15) << 18 | (U & 63) << 12 | (X & 63) << 6 | G & 63, (E <= 65535 || E >= 1114112) && (E = null))), E === null ? (E = 65533, F = 1) : E > 65535 && (E -= 65536, W += String.fromCharCode(E >>> 10 & 1023 | 55296), E = 56320 | E & 1023), W += String.fromCharCode(E), D += F;
      }
      return W;
    }
    function rt(g, P, M) {
      return c.decode(g.subarray(P, M));
    }
    function ot(g, P, M) {
      for (var W = 0, D, Q; W < P.length; W++) {
        if (D = P.charCodeAt(W), D > 55295 && D < 57344)
          if (Q)
            if (D < 56320) {
              g[M++] = 239, g[M++] = 191, g[M++] = 189, Q = D;
              continue;
            } else
              D = Q - 55296 << 10 | D - 56320 | 65536, Q = null;
          else {
            D > 56319 || W + 1 === P.length ? (g[M++] = 239, g[M++] = 191, g[M++] = 189) : Q = D;
            continue;
          }
        else Q && (g[M++] = 239, g[M++] = 191, g[M++] = 189, Q = null);
        D < 128 ? g[M++] = D : (D < 2048 ? g[M++] = D >> 6 | 192 : (D < 65536 ? g[M++] = D >> 12 | 224 : (g[M++] = D >> 18 | 240, g[M++] = D >> 12 & 63 | 128), g[M++] = D >> 6 & 63 | 128), g[M++] = D & 63 | 128);
      }
      return M;
    }
  }
}), jl = ae({
  "node_modules/rbush/rbush.min.js"(i, s) {
    (function(r, a) {
      typeof i == "object" && typeof s < "u" ? s.exports = a() : typeof define == "function" && define.amd ? define(a) : (r = r || self).RBush = a();
    })(i, function() {
      function r(w, T, C, z, Z) {
        (function R(N, $, it, J, rt) {
          for (; J > it; ) {
            if (J - it > 600) {
              var ot = J - it + 1, g = $ - it + 1, P = Math.log(ot), M = 0.5 * Math.exp(2 * P / 3), W = 0.5 * Math.sqrt(P * M * (ot - M) / ot) * (g - ot / 2 < 0 ? -1 : 1), D = Math.max(it, Math.floor($ - g * M / ot + W)), Q = Math.min(J, Math.floor($ + (ot - g) * M / ot + W));
              R(N, $, D, Q, rt);
            }
            var E = N[$], F = it, U = J;
            for (a(N, it, $), rt(N[J], E) > 0 && a(N, it, J); F < U; ) {
              for (a(N, F, U), F++, U--; rt(N[F], E) < 0; )
                F++;
              for (; rt(N[U], E) > 0; )
                U--;
            }
            rt(N[it], E) === 0 ? a(N, it, U) : a(N, ++U, J), U <= $ && (it = U + 1), $ <= U && (J = U - 1);
          }
        })(w, T, C || 0, z || w.length - 1, Z || u);
      }
      function a(w, T, C) {
        var z = w[T];
        w[T] = w[C], w[C] = z;
      }
      function u(w, T) {
        return w < T ? -1 : w > T ? 1 : 0;
      }
      var o = function(w) {
        w === void 0 && (w = 9), this._maxEntries = Math.max(4, w), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), this.clear();
      };
      function h(w, T, C) {
        if (!C)
          return T.indexOf(w);
        for (var z = 0; z < T.length; z++)
          if (C(w, T[z]))
            return z;
        return -1;
      }
      function c(w, T) {
        f(w, 0, w.children.length, T, w);
      }
      function f(w, T, C, z, Z) {
        Z || (Z = B(null)), Z.minX = 1 / 0, Z.minY = 1 / 0, Z.maxX = -1 / 0, Z.maxY = -1 / 0;
        for (var R = T; R < C; R++) {
          var N = w.children[R];
          _(Z, w.leaf ? z(N) : N);
        }
        return Z;
      }
      function _(w, T) {
        return w.minX = Math.min(w.minX, T.minX), w.minY = Math.min(w.minY, T.minY), w.maxX = Math.max(w.maxX, T.maxX), w.maxY = Math.max(w.maxY, T.maxY), w;
      }
      function v(w, T) {
        return w.minX - T.minX;
      }
      function p(w, T) {
        return w.minY - T.minY;
      }
      function y(w) {
        return (w.maxX - w.minX) * (w.maxY - w.minY);
      }
      function b(w) {
        return w.maxX - w.minX + (w.maxY - w.minY);
      }
      function k(w, T) {
        return w.minX <= T.minX && w.minY <= T.minY && T.maxX <= w.maxX && T.maxY <= w.maxY;
      }
      function S(w, T) {
        return T.minX <= w.maxX && T.minY <= w.maxY && T.maxX >= w.minX && T.maxY >= w.minY;
      }
      function B(w) {
        return { children: w, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
      }
      function A(w, T, C, z, Z) {
        for (var R = [T, C]; R.length; )
          if (!((C = R.pop()) - (T = R.pop()) <= z)) {
            var N = T + Math.ceil((C - T) / z / 2) * z;
            r(w, N, T, C, Z), R.push(T, N, N, C);
          }
      }
      return o.prototype.all = function() {
        return this._all(this.data, []);
      }, o.prototype.search = function(w) {
        var T = this.data, C = [];
        if (!S(w, T))
          return C;
        for (var z = this.toBBox, Z = []; T; ) {
          for (var R = 0; R < T.children.length; R++) {
            var N = T.children[R], $ = T.leaf ? z(N) : N;
            S(w, $) && (T.leaf ? C.push(N) : k(w, $) ? this._all(N, C) : Z.push(N));
          }
          T = Z.pop();
        }
        return C;
      }, o.prototype.collides = function(w) {
        var T = this.data;
        if (!S(w, T))
          return !1;
        for (var C = []; T; ) {
          for (var z = 0; z < T.children.length; z++) {
            var Z = T.children[z], R = T.leaf ? this.toBBox(Z) : Z;
            if (S(w, R)) {
              if (T.leaf || k(w, R))
                return !0;
              C.push(Z);
            }
          }
          T = C.pop();
        }
        return !1;
      }, o.prototype.load = function(w) {
        if (!w || !w.length)
          return this;
        if (w.length < this._minEntries) {
          for (var T = 0; T < w.length; T++)
            this.insert(w[T]);
          return this;
        }
        var C = this._build(w.slice(), 0, w.length - 1, 0);
        if (this.data.children.length)
          if (this.data.height === C.height)
            this._splitRoot(this.data, C);
          else {
            if (this.data.height < C.height) {
              var z = this.data;
              this.data = C, C = z;
            }
            this._insert(C, this.data.height - C.height - 1, !0);
          }
        else
          this.data = C;
        return this;
      }, o.prototype.insert = function(w) {
        return w && this._insert(w, this.data.height - 1), this;
      }, o.prototype.clear = function() {
        return this.data = B([]), this;
      }, o.prototype.remove = function(w, T) {
        if (!w)
          return this;
        for (var C, z, Z, R = this.data, N = this.toBBox(w), $ = [], it = []; R || $.length; ) {
          if (R || (R = $.pop(), z = $[$.length - 1], C = it.pop(), Z = !0), R.leaf) {
            var J = h(w, R.children, T);
            if (J !== -1)
              return R.children.splice(J, 1), $.push(R), this._condense($), this;
          }
          Z || R.leaf || !k(R, N) ? z ? (C++, R = z.children[C], Z = !1) : R = null : ($.push(R), it.push(C), C = 0, z = R, R = R.children[0]);
        }
        return this;
      }, o.prototype.toBBox = function(w) {
        return w;
      }, o.prototype.compareMinX = function(w, T) {
        return w.minX - T.minX;
      }, o.prototype.compareMinY = function(w, T) {
        return w.minY - T.minY;
      }, o.prototype.toJSON = function() {
        return this.data;
      }, o.prototype.fromJSON = function(w) {
        return this.data = w, this;
      }, o.prototype._all = function(w, T) {
        for (var C = []; w; )
          w.leaf ? T.push.apply(T, w.children) : C.push.apply(C, w.children), w = C.pop();
        return T;
      }, o.prototype._build = function(w, T, C, z) {
        var Z, R = C - T + 1, N = this._maxEntries;
        if (R <= N)
          return c(Z = B(w.slice(T, C + 1)), this.toBBox), Z;
        z || (z = Math.ceil(Math.log(R) / Math.log(N)), N = Math.ceil(R / Math.pow(N, z - 1))), (Z = B([])).leaf = !1, Z.height = z;
        var $ = Math.ceil(R / N), it = $ * Math.ceil(Math.sqrt(N));
        A(w, T, C, it, this.compareMinX);
        for (var J = T; J <= C; J += it) {
          var rt = Math.min(J + it - 1, C);
          A(w, J, rt, $, this.compareMinY);
          for (var ot = J; ot <= rt; ot += $) {
            var g = Math.min(ot + $ - 1, rt);
            Z.children.push(this._build(w, ot, g, z - 1));
          }
        }
        return c(Z, this.toBBox), Z;
      }, o.prototype._chooseSubtree = function(w, T, C, z) {
        for (; z.push(T), !T.leaf && z.length - 1 !== C; ) {
          for (var Z = 1 / 0, R = 1 / 0, N = void 0, $ = 0; $ < T.children.length; $++) {
            var it = T.children[$], J = y(it), rt = (ot = w, g = it, (Math.max(g.maxX, ot.maxX) - Math.min(g.minX, ot.minX)) * (Math.max(g.maxY, ot.maxY) - Math.min(g.minY, ot.minY)) - J);
            rt < R ? (R = rt, Z = J < Z ? J : Z, N = it) : rt === R && J < Z && (Z = J, N = it);
          }
          T = N || T.children[0];
        }
        var ot, g;
        return T;
      }, o.prototype._insert = function(w, T, C) {
        var z = C ? w : this.toBBox(w), Z = [], R = this._chooseSubtree(z, this.data, T, Z);
        for (R.children.push(w), _(R, z); T >= 0 && Z[T].children.length > this._maxEntries; )
          this._split(Z, T), T--;
        this._adjustParentBBoxes(z, Z, T);
      }, o.prototype._split = function(w, T) {
        var C = w[T], z = C.children.length, Z = this._minEntries;
        this._chooseSplitAxis(C, Z, z);
        var R = this._chooseSplitIndex(C, Z, z), N = B(C.children.splice(R, C.children.length - R));
        N.height = C.height, N.leaf = C.leaf, c(C, this.toBBox), c(N, this.toBBox), T ? w[T - 1].children.push(N) : this._splitRoot(C, N);
      }, o.prototype._splitRoot = function(w, T) {
        this.data = B([w, T]), this.data.height = w.height + 1, this.data.leaf = !1, c(this.data, this.toBBox);
      }, o.prototype._chooseSplitIndex = function(w, T, C) {
        for (var z, Z, R, N, $, it, J, rt = 1 / 0, ot = 1 / 0, g = T; g <= C - T; g++) {
          var P = f(w, 0, g, this.toBBox), M = f(w, g, C, this.toBBox), W = (Z = P, R = M, N = void 0, $ = void 0, it = void 0, J = void 0, N = Math.max(Z.minX, R.minX), $ = Math.max(Z.minY, R.minY), it = Math.min(Z.maxX, R.maxX), J = Math.min(Z.maxY, R.maxY), Math.max(0, it - N) * Math.max(0, J - $)), D = y(P) + y(M);
          W < rt ? (rt = W, z = g, ot = D < ot ? D : ot) : W === rt && D < ot && (ot = D, z = g);
        }
        return z || C - T;
      }, o.prototype._chooseSplitAxis = function(w, T, C) {
        var z = w.leaf ? this.compareMinX : v, Z = w.leaf ? this.compareMinY : p;
        this._allDistMargin(w, T, C, z) < this._allDistMargin(w, T, C, Z) && w.children.sort(z);
      }, o.prototype._allDistMargin = function(w, T, C, z) {
        w.children.sort(z);
        for (var Z = this.toBBox, R = f(w, 0, T, Z), N = f(w, C - T, C, Z), $ = b(R) + b(N), it = T; it < C - T; it++) {
          var J = w.children[it];
          _(R, w.leaf ? Z(J) : J), $ += b(R);
        }
        for (var rt = C - T - 1; rt >= T; rt--) {
          var ot = w.children[rt];
          _(N, w.leaf ? Z(ot) : ot), $ += b(N);
        }
        return $;
      }, o.prototype._adjustParentBBoxes = function(w, T, C) {
        for (var z = C; z >= 0; z--)
          _(T[z], w);
      }, o.prototype._condense = function(w) {
        for (var T = w.length - 1, C = void 0; T >= 0; T--)
          w[T].children.length === 0 ? T > 0 ? (C = w[T - 1].children).splice(C.indexOf(w[T]), 1) : this.clear() : c(w[T], this.toBBox);
      }, o;
    });
  }
});
Ht(le());
function Oe(i, s, r) {
  return Math.min(Math.max(i, r), s);
}
var Fl = class extends Error {
  constructor(i) {
    super(`Failed to parse color: "${i}"`);
  }
}, ei = Fl;
function so(i) {
  if (typeof i != "string")
    throw new ei(i);
  if (i.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let s = i.trim();
  s = ql.test(i) ? Vl(i) : i;
  const r = Hl.exec(s);
  if (r) {
    const h = Array.from(r).slice(1);
    return [...h.slice(0, 3).map((c) => parseInt(oi(c, 2), 16)), parseInt(oi(h[3] || "f", 2), 16) / 255];
  }
  const a = Wl.exec(s);
  if (a) {
    const h = Array.from(a).slice(1);
    return [...h.slice(0, 3).map((c) => parseInt(c, 16)), parseInt(h[3] || "ff", 16) / 255];
  }
  const u = Yl.exec(s);
  if (u) {
    const h = Array.from(u).slice(1);
    return [...h.slice(0, 3).map((c) => parseInt(c, 10)), parseFloat(h[3] || "1")];
  }
  const o = Gl.exec(s);
  if (o) {
    const [h, c, f, _] = Array.from(o).slice(1).map(parseFloat);
    if (Oe(0, 100, c) !== c)
      throw new ei(i);
    if (Oe(0, 100, f) !== f)
      throw new ei(i);
    return [...Xl(h, c, f), Number.isNaN(_) ? 1 : _];
  }
  throw new ei(i);
}
function Nl(i) {
  let s = 5381, r = i.length;
  for (; r; )
    s = s * 33 ^ i.charCodeAt(--r);
  return (s >>> 0) % 2341;
}
var ao = (i) => parseInt(i.replace(/_/g, ""), 36), Ul = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((i, s) => {
  const r = ao(s.substring(0, 3)), a = ao(s.substring(3)).toString(16);
  let u = "";
  for (let o = 0; o < 6 - a.length; o++)
    u += "0";
  return i[r] = `${u}${a}`, i;
}, {});
function Vl(i) {
  const s = i.toLowerCase().trim(), r = Ul[Nl(s)];
  if (!r)
    throw new ei(i);
  return `#${r}`;
}
var oi = (i, s) => Array.from(Array(s)).map(() => i).join(""), Hl = new RegExp(`^#${oi("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), Wl = new RegExp(`^#${oi("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), Yl = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${oi(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), Gl = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, ql = /^[a-z]+$/i, lo = (i) => Math.round(i * 255), Xl = (i, s, r) => {
  let a = r / 100;
  if (s === 0)
    return [a, a, a].map(lo);
  const u = (i % 360 + 360) % 360 / 60, o = (1 - Math.abs(2 * a - 1)) * (s / 100), h = o * (1 - Math.abs(u % 2 - 1));
  let c = 0, f = 0, _ = 0;
  u >= 0 && u < 1 ? (c = o, f = h) : u >= 1 && u < 2 ? (c = h, f = o) : u >= 2 && u < 3 ? (f = o, _ = h) : u >= 3 && u < 4 ? (f = h, _ = o) : u >= 4 && u < 5 ? (c = h, _ = o) : u >= 5 && u < 6 && (c = o, _ = h);
  const v = a - o / 2, p = c + v, y = f + v, b = _ + v;
  return [p, y, b].map(lo);
};
function $l(i, s, r, a) {
  return `rgba(${Oe(0, 255, i).toFixed()}, ${Oe(0, 255, s).toFixed()}, ${Oe(0, 255, r).toFixed()}, ${parseFloat(Oe(0, 1, a).toFixed(3))})`;
}
function xn(i, s, r) {
  const a = (z, Z) => Z === 3 ? z : z / 255, [u, o, h, c] = so(i).map(a), [f, _, v, p] = so(s).map(a), y = p - c, b = r * 2 - 1, S = ((b * y === -1 ? b : b + y / (1 + b * y)) + 1) / 2, B = 1 - S, A = (u * B + f * S) * 255, w = (o * B + _ * S) * 255, T = (h * B + v * S) * 255, C = p * r + c * (1 - r);
  return $l(A, w, T, C);
}
var ye = Ht(le());
Ht(Bl());
var Vt = class {
  constructor(i, s) {
    this.str = i ?? s, this.perFeature = typeof this.str == "function" && this.str.length === 2;
  }
  get(i, s) {
    return typeof this.str == "function" ? this.str(i, s) : this.str;
  }
}, Lt = class {
  constructor(i, s = 1) {
    this.value = i ?? s, this.perFeature = typeof this.value == "function" && this.value.length === 2;
  }
  get(i, s) {
    return typeof this.value == "function" ? this.value(i, s) : this.value;
  }
}, Ho = class {
  constructor(i) {
    var s;
    this.labelProps = (s = i == null ? void 0 : i.labelProps) != null ? s : ["name"], this.textTransform = i == null ? void 0 : i.textTransform;
  }
  get(i, s) {
    let r, a;
    typeof this.labelProps == "function" ? a = this.labelProps(i, s) : a = this.labelProps;
    for (const o of a)
      if (Object.prototype.hasOwnProperty.call(s.props, o) && typeof s.props[o] == "string") {
        r = s.props[o];
        break;
      }
    let u;
    return typeof this.textTransform == "function" ? u = this.textTransform(i, s) : u = this.textTransform, r && u === "uppercase" ? r = r.toUpperCase() : r && u === "lowercase" ? r = r.toLowerCase() : r && u === "capitalize" && (r = r.toLowerCase().split(" ").map((c) => c[0].toUpperCase() + c.slice(1)).join(" ")), r;
  }
}, Wo = class {
  constructor(i) {
    var s, r;
    i != null && i.font ? this.font = i.font : (this.family = (s = i == null ? void 0 : i.fontFamily) != null ? s : "sans-serif", this.size = (r = i == null ? void 0 : i.fontSize) != null ? r : 12, this.weight = i == null ? void 0 : i.fontWeight, this.style = i == null ? void 0 : i.fontStyle);
  }
  get(i, s) {
    if (this.font)
      return typeof this.font == "function" ? this.font(i, s) : this.font;
    let r = "";
    this.style && (typeof this.style == "function" ? r = `${this.style(i, s)} ` : r = `${this.style} `);
    let a = "";
    this.weight && (typeof this.weight == "function" ? a = `${this.weight(i, s)} ` : a = `${this.weight} `);
    let u;
    typeof this.size == "function" ? u = this.size(i, s) : u = this.size;
    let o;
    return typeof this.family == "function" ? o = this.family(i, s) : o = this.family, `${r}${a}${u}px ${o}`;
  }
}, Kl = class {
  constructor(i, s = []) {
    this.value = i ?? s, this.perFeature = typeof this.value == "function" && this.value.length === 2;
  }
  get(i, s) {
    return typeof this.value == "function" ? this.value(i, s) : this.value;
  }
}, ho = Ht(le()), Jl = (i, s, r) => {
  const a = [];
  let u, o, h, c = 0, f = 0, _ = 0, v = 0, p = 0, y = 0, b = 0, k = 0, S = 0, B = 0, A = 0, w = 0;
  if (i.length < 2)
    return [];
  if (i.length === 2)
    return _ = Math.sqrt(Ut(i[1].x - i[0].x, 2) + Ut(i[1].y - i[0].y, 2)), [
      {
        length: _,
        beginIndex: 0,
        beginDistance: 0,
        endIndex: 2,
        endDistance: _
      }
    ];
  for (v = Math.sqrt(Ut(i[1].x - i[0].x, 2) + Ut(i[1].y - i[0].y, 2)), c = 1, f = i.length - 1; c < f; c++)
    u = i[c - 1], o = i[c], h = i[c + 1], y = o.x - u.x, b = o.y - u.y, k = h.x - o.x, S = h.y - o.y, p = Math.sqrt(k * k + S * S), _ += v, B = Math.acos((y * k + b * S) / (v * p)), (B > s || _ - w > r) && (a.push({
      length: _ - w,
      beginDistance: w,
      beginIndex: A,
      endIndex: c + 1,
      endDistance: _
    }), A = c, w = _), v = p;
  return c - A > 0 && a.push({
    length: _ - w + p,
    beginIndex: A,
    beginDistance: w,
    endIndex: c + 1,
    endDistance: _ + p
  }), a;
};
function Ql(i, s, r, a) {
  const u = [];
  for (const o of i) {
    const h = Jl(o, Math.PI / 45, s);
    for (const c of h)
      if (c.length >= s + a) {
        const f = new ho.default(
          o[c.beginIndex].x,
          o[c.beginIndex].y
        ), _ = o[c.endIndex - 1], v = new ho.default(
          (_.x - f.x) / c.length,
          (_.y - f.y) / c.length
        );
        for (let p = a; p < c.length - s; p += r)
          u.push({
            start: f.add(v.mult(p)),
            end: f.add(v.mult(p + s))
          });
      }
  }
  return u;
}
function th(i, s, r, a) {
  const u = s.x - i.x, o = s.y - i.y, h = Math.sqrt(Ut(s.x - i.x, 2) + Ut(s.y - i.y, 2)), c = [];
  for (let f = 0; f < r + a; f += 2 * a) {
    const _ = f * 1 / h;
    c.push({ x: i.x + _ * u, y: i.y + _ * o });
  }
  return c;
}
function Yo(i, s) {
  if (i.length <= s)
    return [i];
  const r = s - 1, a = i.lastIndexOf(" ", r), u = i.indexOf(" ", r);
  if (a === -1 && u === -1)
    return [i];
  let o, h;
  return u === -1 || a >= 0 && r - a < u - r ? (o = i.substring(0, a), h = i.substring(a + 1, i.length)) : (o = i.substring(0, u), h = i.substring(u + 1, i.length)), [o, ...Yo(h, s)];
}
var eh = Ht(le()), ih = Ht(Zl()), nh = Ht(Dl()), zt = (i, s, r) => new Promise((a, u) => {
  var o = (f) => {
    try {
      c(r.next(f));
    } catch (_) {
      u(_);
    }
  }, h = (f) => {
    try {
      c(r.throw(f));
    } catch (_) {
      u(_);
    }
  }, c = (f) => f.done ? a(f.value) : Promise.resolve(f.value).then(o, h);
  c((r = r.apply(i, s)).next());
}), Rt = Uint8Array, Be = Uint16Array, Go = Uint32Array, qo = new Rt([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Xo = new Rt([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), rh = new Rt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), $o = function(i, s) {
  for (var r = new Be(31), a = 0; a < 31; ++a)
    r[a] = s += 1 << i[a - 1];
  for (var u = new Go(r[30]), a = 1; a < 30; ++a)
    for (var o = r[a]; o < r[a + 1]; ++o)
      u[o] = o - r[a] << 5 | a;
  return [r, u];
}, Ko = $o(qo, 2), Jo = Ko[0], oh = Ko[1];
Jo[28] = 258, oh[258] = 28;
var sh = $o(Xo, 0), ah = sh[0], Qo = new Be(32768);
for (dt = 0; dt < 32768; ++dt)
  oe = (dt & 43690) >>> 1 | (dt & 21845) << 1, oe = (oe & 52428) >>> 2 | (oe & 13107) << 2, oe = (oe & 61680) >>> 4 | (oe & 3855) << 4, Qo[dt] = ((oe & 65280) >>> 8 | (oe & 255) << 8) >>> 1;
var oe, dt, ni = function(i, s, r) {
  for (var a = i.length, u = 0, o = new Be(s); u < a; ++u)
    i[u] && ++o[i[u] - 1];
  var h = new Be(s);
  for (u = 0; u < s; ++u)
    h[u] = h[u - 1] + o[u - 1] << 1;
  var c;
  {
    c = new Be(1 << s);
    var f = 15 - s;
    for (u = 0; u < a; ++u)
      if (i[u])
        for (var _ = u << 4 | i[u], v = s - i[u], p = h[i[u] - 1]++ << v, y = p | (1 << v) - 1; p <= y; ++p)
          c[Qo[p] >>> f] = _;
  }
  return c;
}, ui = new Rt(288);
for (dt = 0; dt < 144; ++dt)
  ui[dt] = 8;
var dt;
for (dt = 144; dt < 256; ++dt)
  ui[dt] = 9;
var dt;
for (dt = 256; dt < 280; ++dt)
  ui[dt] = 7;
var dt;
for (dt = 280; dt < 288; ++dt)
  ui[dt] = 8;
var dt, ts = new Rt(32);
for (dt = 0; dt < 32; ++dt)
  ts[dt] = 5;
var dt, lh = /* @__PURE__ */ ni(ui, 9), hh = /* @__PURE__ */ ni(ts, 5), Ln = function(i) {
  for (var s = i[0], r = 1; r < i.length; ++r)
    i[r] > s && (s = i[r]);
  return s;
}, Gt = function(i, s, r) {
  var a = s / 8 | 0;
  return (i[a] | i[a + 1] << 8) >> (s & 7) & r;
}, Pn = function(i, s) {
  var r = s / 8 | 0;
  return (i[r] | i[r + 1] << 8 | i[r + 2] << 16) >> (s & 7);
}, uh = function(i) {
  return (i + 7) / 8 | 0;
}, ch = function(i, s, r) {
  (r == null || r > i.length) && (r = i.length);
  var a = new (i.BYTES_PER_ELEMENT == 2 ? Be : i.BYTES_PER_ELEMENT == 4 ? Go : Rt)(r - s);
  return a.set(i.subarray(s, r)), a;
}, fh = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
], $t = function(i, s, r) {
  var a = new Error(s || fh[i]);
  if (a.code = i, Error.captureStackTrace && Error.captureStackTrace(a, $t), !r)
    throw a;
  return a;
}, jn = function(i, s, r) {
  var a = i.length;
  if (!a || r && r.f && !r.l)
    return s || new Rt(0);
  var u = !s || r, o = !r || r.i;
  r || (r = {}), s || (s = new Rt(a * 3));
  var h = function(V) {
    var tt = s.length;
    if (V > tt) {
      var nt = new Rt(Math.max(tt * 2, V));
      nt.set(s), s = nt;
    }
  }, c = r.f || 0, f = r.p || 0, _ = r.b || 0, v = r.l, p = r.d, y = r.m, b = r.n, k = a * 8;
  do {
    if (!v) {
      c = Gt(i, f, 1);
      var S = Gt(i, f + 1, 3);
      if (f += 3, S)
        if (S == 1)
          v = lh, p = hh, y = 9, b = 5;
        else if (S == 2) {
          var T = Gt(i, f, 31) + 257, C = Gt(i, f + 10, 15) + 4, z = T + Gt(i, f + 5, 31) + 1;
          f += 14;
          for (var Z = new Rt(z), R = new Rt(19), N = 0; N < C; ++N)
            R[rh[N]] = Gt(i, f + N * 3, 7);
          f += C * 3;
          for (var $ = Ln(R), it = (1 << $) - 1, J = ni(R, $), N = 0; N < z; ) {
            var rt = J[Gt(i, f, it)];
            f += rt & 15;
            var B = rt >>> 4;
            if (B < 16)
              Z[N++] = B;
            else {
              var ot = 0, g = 0;
              for (B == 16 ? (g = 3 + Gt(i, f, 3), f += 2, ot = Z[N - 1]) : B == 17 ? (g = 3 + Gt(i, f, 7), f += 3) : B == 18 && (g = 11 + Gt(i, f, 127), f += 7); g--; )
                Z[N++] = ot;
            }
          }
          var P = Z.subarray(0, T), M = Z.subarray(T);
          y = Ln(P), b = Ln(M), v = ni(P, y), p = ni(M, b);
        } else
          $t(1);
      else {
        var B = uh(f) + 4, A = i[B - 4] | i[B - 3] << 8, w = B + A;
        if (w > a) {
          o && $t(0);
          break;
        }
        u && h(_ + A), s.set(i.subarray(B, w), _), r.b = _ += A, r.p = f = w * 8, r.f = c;
        continue;
      }
      if (f > k) {
        o && $t(0);
        break;
      }
    }
    u && h(_ + 131072);
    for (var W = (1 << y) - 1, D = (1 << b) - 1, Q = f; ; Q = f) {
      var ot = v[Pn(i, f) & W], E = ot >>> 4;
      if (f += ot & 15, f > k) {
        o && $t(0);
        break;
      }
      if (ot || $t(2), E < 256)
        s[_++] = E;
      else if (E == 256) {
        Q = f, v = null;
        break;
      } else {
        var F = E - 254;
        if (E > 264) {
          var N = E - 257, U = qo[N];
          F = Gt(i, f, (1 << U) - 1) + Jo[N], f += U;
        }
        var X = p[Pn(i, f) & D], G = X >>> 4;
        X || $t(3), f += X & 15;
        var M = ah[G];
        if (G > 3) {
          var U = Xo[G];
          M += Pn(i, f) & (1 << U) - 1, f += U;
        }
        if (f > k) {
          o && $t(0);
          break;
        }
        u && h(_ + 131072);
        for (var q = _ + F; _ < q; _ += 4)
          s[_] = s[_ - M], s[_ + 1] = s[_ + 1 - M], s[_ + 2] = s[_ + 2 - M], s[_ + 3] = s[_ + 3 - M];
        _ = q;
      }
    }
    r.l = v, r.p = Q, r.b = _, r.f = c, v && (c = 1, r.m = y, r.d = p, r.n = b);
  } while (!c);
  return _ == s.length ? s : ch(s, 0, _);
}, dh = /* @__PURE__ */ new Rt(0), _h = function(i) {
  (i[0] != 31 || i[1] != 139 || i[2] != 8) && $t(6, "invalid gzip data");
  var s = i[3], r = 10;
  s & 4 && (r += i[10] | (i[11] << 8) + 2);
  for (var a = (s >> 3 & 1) + (s >> 4 & 1); a > 0; a -= !i[r++])
    ;
  return r + (s & 2);
}, mh = function(i) {
  var s = i.length;
  return (i[s - 4] | i[s - 3] << 8 | i[s - 2] << 16 | i[s - 1] << 24) >>> 0;
}, ph = function(i) {
  ((i[0] & 15) != 8 || i[0] >>> 4 > 7 || (i[0] << 8 | i[1]) % 31) && $t(6, "invalid zlib data"), i[1] & 32 && $t(6, "invalid zlib data: preset dictionaries not supported");
};
function gh(i, s) {
  return jn(i, s);
}
function vh(i, s) {
  return jn(i.subarray(_h(i), -8), new Rt(mh(i)));
}
function yh(i, s) {
  return jn((ph(i), i.subarray(2, -4)), s);
}
function In(i, s) {
  return i[0] == 31 && i[1] == 139 && i[2] == 8 ? vh(i) : (i[0] & 15) != 8 || i[0] >> 4 > 7 || (i[0] << 8 | i[1]) % 31 ? gh(i, s) : yh(i, s);
}
var bh = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), wh = 0;
try {
  bh.decode(dh, { stream: !0 }), wh = 1;
} catch {
}
var es = (i, s) => i * Math.pow(2, s), Je = (i, s) => Math.floor(i / Math.pow(2, s)), Bi = (i, s) => es(i.getUint16(s + 1, !0), 8) + i.getUint8(s), is = (i, s) => es(i.getUint32(s + 2, !0), 16) + i.getUint16(s, !0), xh = (i, s, r, a, u) => {
  if (i != a.getUint8(u))
    return i - a.getUint8(u);
  const o = Bi(a, u + 1);
  if (s != o)
    return s - o;
  const h = Bi(a, u + 4);
  return r != h ? r - h : 0;
}, Lh = (i, s, r, a) => {
  const u = ns(i, s | 128, r, a);
  return u ? {
    z: s,
    x: r,
    y: a,
    offset: u[0],
    length: u[1],
    is_dir: !0
  } : null;
}, uo = (i, s, r, a) => {
  const u = ns(i, s, r, a);
  return u ? {
    z: s,
    x: r,
    y: a,
    offset: u[0],
    length: u[1],
    is_dir: !1
  } : null;
}, ns = (i, s, r, a) => {
  let u = 0, o = i.byteLength / 17 - 1;
  for (; u <= o; ) {
    const h = o + u >> 1, c = xh(s, r, a, i, h * 17);
    if (c > 0)
      u = h + 1;
    else if (c < 0)
      o = h - 1;
    else
      return [is(i, h * 17 + 7), i.getUint32(h * 17 + 13, !0)];
  }
  return null;
}, Ph = (i, s) => i.is_dir && !s.is_dir ? 1 : !i.is_dir && s.is_dir ? -1 : i.z !== s.z ? i.z - s.z : i.x !== s.x ? i.x - s.x : i.y - s.y, rs = (i, s) => {
  const r = i.getUint8(s * 17);
  return {
    z: r & 127,
    x: Bi(i, s * 17 + 1),
    y: Bi(i, s * 17 + 4),
    offset: is(i, s * 17 + 7),
    length: i.getUint32(s * 17 + 13, !0),
    is_dir: r >> 7 === 1
  };
}, co = (i) => {
  const s = [], r = new DataView(i);
  for (let a = 0; a < r.byteLength / 17; a++)
    s.push(rs(r, a));
  return Th(s);
}, Th = (i) => {
  i.sort(Ph);
  const s = new ArrayBuffer(17 * i.length), r = new Uint8Array(s);
  for (let a = 0; a < i.length; a++) {
    const u = i[a];
    let o = u.z;
    u.is_dir && (o = o | 128), r[a * 17] = o, r[a * 17 + 1] = u.x & 255, r[a * 17 + 2] = u.x >> 8 & 255, r[a * 17 + 3] = u.x >> 16 & 255, r[a * 17 + 4] = u.y & 255, r[a * 17 + 5] = u.y >> 8 & 255, r[a * 17 + 6] = u.y >> 16 & 255, r[a * 17 + 7] = u.offset & 255, r[a * 17 + 8] = Je(u.offset, 8) & 255, r[a * 17 + 9] = Je(u.offset, 16) & 255, r[a * 17 + 10] = Je(u.offset, 24) & 255, r[a * 17 + 11] = Je(u.offset, 32) & 255, r[a * 17 + 12] = Je(u.offset, 48) & 255, r[a * 17 + 13] = u.length & 255, r[a * 17 + 14] = u.length >> 8 & 255, r[a * 17 + 15] = u.length >> 16 & 255, r[a * 17 + 16] = u.length >> 24 & 255;
  }
  return s;
}, kh = (i, s) => {
  if (i.byteLength < 17)
    return null;
  const r = i.byteLength / 17, a = rs(i, r - 1);
  if (a.is_dir) {
    const u = a.z, o = s.z - u, h = Math.trunc(s.x / (1 << o)), c = Math.trunc(s.y / (1 << o));
    return { z: u, x: h, y: c };
  }
  return null;
};
function Ch(i) {
  return zt(this, null, function* () {
    const s = yield i.getBytes(0, 512e3), r = new DataView(s.data), a = r.getUint32(4, !0), u = r.getUint16(8, !0), o = new TextDecoder("utf-8"), h = JSON.parse(
      o.decode(new DataView(s.data, 10, a))
    );
    let c = 0;
    h.compression === "gzip" && (c = 2);
    let f = 0;
    "minzoom" in h && (f = +h.minzoom);
    let _ = 0;
    "maxzoom" in h && (_ = +h.maxzoom);
    let v = 0, p = 0, y = 0, b = -180, k = -85, S = 180, B = 85;
    if (h.bounds) {
      const w = h.bounds.split(",");
      b = +w[0], k = +w[1], S = +w[2], B = +w[3];
    }
    if (h.center) {
      const w = h.center.split(",");
      v = +w[0], p = +w[1], y = +w[2];
    }
    return {
      specVersion: r.getUint16(2, !0),
      rootDirectoryOffset: 10 + a,
      rootDirectoryLength: u * 17,
      jsonMetadataOffset: 10,
      jsonMetadataLength: a,
      leafDirectoryOffset: 0,
      leafDirectoryLength: void 0,
      tileDataOffset: 0,
      tileDataLength: void 0,
      numAddressedTiles: 0,
      numTileEntries: 0,
      numTileContents: 0,
      clustered: !1,
      internalCompression: 1,
      tileCompression: c,
      tileType: 1,
      minZoom: f,
      maxZoom: _,
      minLon: b,
      minLat: k,
      maxLon: S,
      maxLat: B,
      centerZoom: y,
      centerLon: v,
      centerLat: p,
      etag: s.etag
    };
  });
}
function Mh(i, s, r, a, u, o, h) {
  return zt(this, null, function* () {
    let c = yield r.getArrayBuffer(
      s,
      i.rootDirectoryOffset,
      i.rootDirectoryLength,
      i
    );
    i.specVersion === 1 && (c = co(c));
    const f = uo(new DataView(c), a, u, o);
    if (f) {
      let p = (yield s.getBytes(f.offset, f.length, h)).data;
      const y = new DataView(p);
      return y.getUint8(0) == 31 && y.getUint8(1) == 139 && (p = In(new Uint8Array(p))), {
        data: p
      };
    }
    const _ = kh(new DataView(c), { z: a, x: u, y: o });
    if (_) {
      const v = Lh(
        new DataView(c),
        _.z,
        _.x,
        _.y
      );
      if (v) {
        let p = yield r.getArrayBuffer(
          s,
          v.offset,
          v.length,
          i
        );
        i.specVersion === 1 && (p = co(p));
        const y = uo(new DataView(p), a, u, o);
        if (y) {
          let k = (yield s.getBytes(
            y.offset,
            y.length,
            h
          )).data;
          const S = new DataView(k);
          return S.getUint8(0) == 31 && S.getUint8(1) == 139 && (k = In(new Uint8Array(k))), {
            data: k
          };
        }
      }
    }
  });
}
var os = {
  getHeader: Ch,
  getZxy: Mh
};
function ze(i, s) {
  return (s >>> 0) * 4294967296 + (i >>> 0);
}
function Sh(i, s) {
  const r = s.buf;
  let a, u;
  if (u = r[s.pos++], a = (u & 112) >> 4, u < 128 || (u = r[s.pos++], a |= (u & 127) << 3, u < 128) || (u = r[s.pos++], a |= (u & 127) << 10, u < 128) || (u = r[s.pos++], a |= (u & 127) << 17, u < 128) || (u = r[s.pos++], a |= (u & 127) << 24, u < 128) || (u = r[s.pos++], a |= (u & 1) << 31, u < 128))
    return ze(i, a);
  throw new Error("Expected varint not more than 10 bytes");
}
function Qe(i) {
  const s = i.buf;
  let r, a;
  return a = s[i.pos++], r = a & 127, a < 128 || (a = s[i.pos++], r |= (a & 127) << 7, a < 128) || (a = s[i.pos++], r |= (a & 127) << 14, a < 128) || (a = s[i.pos++], r |= (a & 127) << 21, a < 128) ? r : (a = s[i.pos], r |= (a & 15) << 28, Sh(r, i));
}
function zh(i, s, r, a) {
  if (a == 0) {
    r == 1 && (s[0] = i - 1 - s[0], s[1] = i - 1 - s[1]);
    const u = s[0];
    s[0] = s[1], s[1] = u;
  }
}
function Eh(i, s, r) {
  if (i > 26)
    throw Error("Tile zoom level exceeds max safe number limit (26)");
  if (s > Math.pow(2, i) - 1 || r > Math.pow(2, i) - 1)
    throw Error("tile x/y outside zoom level bounds");
  let a = 0, u = 0;
  for (; u < i; )
    a += Math.pow(2, u) * Math.pow(2, u), u++;
  const o = Math.pow(2, i);
  let h = 0, c = 0, f = 0;
  const _ = [s, r];
  let v = o / 2;
  for (; v > 0; )
    h = (_[0] & v) > 0 ? 1 : 0, c = (_[1] & v) > 0 ? 1 : 0, f += v * v * (3 * h ^ c), zh(v, _, h, c), v = v / 2;
  return a + f;
}
function ss(i, s) {
  return zt(this, null, function* () {
    if (s === 1 || s === 0)
      return i;
    if (s === 2)
      return In(new Uint8Array(i));
    throw Error("Compression method not supported");
  });
}
var Oh = 127;
function Ih(i, s) {
  let r = 0, a = i.length - 1;
  for (; r <= a; ) {
    const u = a + r >> 1, o = s - i[u].tileId;
    if (o > 0)
      r = u + 1;
    else if (o < 0)
      a = u - 1;
    else
      return i[u];
  }
  return a >= 0 && (i[a].runLength === 0 || s - i[a].tileId < i[a].runLength) ? i[a] : null;
}
var Bh = class {
  constructor(i) {
    this.url = i;
  }
  getKey() {
    return this.url;
  }
  getBytes(i, s, r) {
    return zt(this, null, function* () {
      let a;
      r || (a = new AbortController(), r = a.signal);
      let u = yield fetch(this.url, {
        signal: r,
        headers: { Range: "bytes=" + i + "-" + (i + s - 1) }
      });
      if (u.status === 416 && i === 0) {
        const c = u.headers.get("Content-Range");
        if (!c || !c.startsWith("bytes */"))
          throw Error("Missing content-length on 416 response");
        const f = +c.substr(8);
        u = yield fetch(this.url, {
          signal: r,
          headers: { Range: "bytes=0-" + (f - 1) }
        });
      }
      if (u.status >= 300)
        throw Error("Bad response code: " + u.status);
      const o = u.headers.get("Content-Length");
      if (u.status === 200 && (!o || +o > s))
        throw a && a.abort(), Error(
          "Server returned no content-length header or content-length exceeding request. Check that your storage backend supports HTTP Byte Serving."
        );
      return {
        data: yield u.arrayBuffer(),
        etag: u.headers.get("ETag") || void 0,
        cacheControl: u.headers.get("Cache-Control") || void 0,
        expires: u.headers.get("Expires") || void 0
      };
    });
  }
};
function qt(i, s) {
  const r = i.getUint32(s + 4, !0), a = i.getUint32(s + 0, !0);
  return r * Math.pow(2, 32) + a;
}
function Ah(i, s) {
  const r = new DataView(i), a = r.getUint8(7);
  if (a > 3)
    throw Error(
      `Archive is spec version ${a} but this library supports up to spec version 3`
    );
  return {
    specVersion: a,
    rootDirectoryOffset: qt(r, 8),
    rootDirectoryLength: qt(r, 16),
    jsonMetadataOffset: qt(r, 24),
    jsonMetadataLength: qt(r, 32),
    leafDirectoryOffset: qt(r, 40),
    leafDirectoryLength: qt(r, 48),
    tileDataOffset: qt(r, 56),
    tileDataLength: qt(r, 64),
    numAddressedTiles: qt(r, 72),
    numTileEntries: qt(r, 80),
    numTileContents: qt(r, 88),
    clustered: r.getUint8(96) === 1,
    internalCompression: r.getUint8(97),
    tileCompression: r.getUint8(98),
    tileType: r.getUint8(99),
    minZoom: r.getUint8(100),
    maxZoom: r.getUint8(101),
    minLon: r.getInt32(102, !0) / 1e7,
    minLat: r.getInt32(106, !0) / 1e7,
    maxLon: r.getInt32(110, !0) / 1e7,
    maxLat: r.getInt32(114, !0) / 1e7,
    centerZoom: r.getUint8(118),
    centerLon: r.getInt32(119, !0) / 1e7,
    centerLat: r.getInt32(123, !0) / 1e7,
    etag: s
  };
}
function as(i) {
  const s = { buf: new Uint8Array(i), pos: 0 }, r = Qe(s), a = [];
  let u = 0;
  for (let o = 0; o < r; o++) {
    const h = Qe(s);
    a.push({ tileId: u + h, offset: 0, length: 0, runLength: 1 }), u += h;
  }
  for (let o = 0; o < r; o++)
    a[o].runLength = Qe(s);
  for (let o = 0; o < r; o++)
    a[o].length = Qe(s);
  for (let o = 0; o < r; o++) {
    const h = Qe(s);
    h === 0 && o > 0 ? a[o].offset = a[o - 1].offset + a[o - 1].length : a[o].offset = h - 1;
  }
  return a;
}
function Zh(i) {
  const s = new DataView(i);
  return s.getUint16(2, !0) === 2 ? (console.warn(
    "PMTiles spec version 2 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
  ), 2) : s.getUint16(2, !0) === 1 ? (console.warn(
    "PMTiles spec version 1 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
  ), 1) : 3;
}
var Ie = class extends Error {
};
function Rh(i, s, r, a) {
  return zt(this, null, function* () {
    const u = yield i.getBytes(0, 16384);
    if (new DataView(u.data).getUint16(0, !0) !== 19792)
      throw new Error("Wrong magic number for PMTiles archive");
    if (Zh(u.data) < 3)
      return [yield os.getHeader(i)];
    const h = u.data.slice(0, Oh);
    let c = u.etag;
    a && u.etag != a && (console.warn(
      "ETag conflict detected; your HTTP server might not support content-based ETag headers. ETags disabled for " + i.getKey()
    ), c = void 0);
    const f = Ah(h, c);
    if (r) {
      const _ = u.data.slice(
        f.rootDirectoryOffset,
        f.rootDirectoryOffset + f.rootDirectoryLength
      ), v = i.getKey() + "|" + (f.etag || "") + "|" + f.rootDirectoryOffset + "|" + f.rootDirectoryLength, p = as(
        yield s(_, f.internalCompression)
      );
      return [f, [v, p.length, p]];
    }
    return [f, void 0];
  });
}
function Dh(i, s, r, a, u) {
  return zt(this, null, function* () {
    const o = yield i.getBytes(r, a);
    if (u.etag && u.etag !== o.etag)
      throw new Ie(o.etag);
    const h = yield s(o.data, u.internalCompression), c = as(h);
    if (c.length === 0)
      throw new Error("Empty directory is invalid");
    return c;
  });
}
var jh = class {
  constructor(i = 100, s = !0, r = ss) {
    this.cache = /* @__PURE__ */ new Map(), this.maxCacheEntries = i, this.counter = 1, this.prefetch = s, this.decompress = r;
  }
  getHeader(i, s) {
    return zt(this, null, function* () {
      const r = i.getKey();
      if (this.cache.has(r))
        return this.cache.get(r).lastUsed = this.counter++, yield this.cache.get(r).data;
      const a = new Promise((u, o) => {
        Rh(i, this.decompress, this.prefetch, s).then((h) => {
          h[1] && this.cache.set(h[1][0], {
            lastUsed: this.counter++,
            data: Promise.resolve(h[1][2])
          }), u(h[0]), this.prune();
        }).catch((h) => {
          o(h);
        });
      });
      return this.cache.set(r, { lastUsed: this.counter++, data: a }), a;
    });
  }
  getDirectory(i, s, r, a) {
    return zt(this, null, function* () {
      const u = i.getKey() + "|" + (a.etag || "") + "|" + s + "|" + r;
      if (this.cache.has(u))
        return this.cache.get(u).lastUsed = this.counter++, yield this.cache.get(u).data;
      const o = new Promise((h, c) => {
        Dh(i, this.decompress, s, r, a).then((f) => {
          h(f), this.prune();
        }).catch((f) => {
          c(f);
        });
      });
      return this.cache.set(u, { lastUsed: this.counter++, data: o }), o;
    });
  }
  getArrayBuffer(i, s, r, a) {
    return zt(this, null, function* () {
      const u = i.getKey() + "|" + (a.etag || "") + "|" + s + "|" + r;
      if (this.cache.has(u))
        return this.cache.get(u).lastUsed = this.counter++, yield this.cache.get(u).data;
      const o = new Promise((h, c) => {
        i.getBytes(s, r).then((f) => {
          if (a.etag && a.etag !== f.etag)
            throw new Ie(f.etag);
          h(f.data), this.cache.has(u), this.prune();
        }).catch((f) => {
          c(f);
        });
      });
      return this.cache.set(u, { lastUsed: this.counter++, data: o }), o;
    });
  }
  prune() {
    if (this.cache.size >= this.maxCacheEntries) {
      let i = 1 / 0, s;
      this.cache.forEach(
        (r, a) => {
          r.lastUsed < i && (i = r.lastUsed, s = a);
        }
      ), s && this.cache.delete(s);
    }
  }
  invalidate(i, s) {
    return zt(this, null, function* () {
      this.cache.delete(i.getKey()), yield this.getHeader(i, s);
    });
  }
}, Fh = class {
  constructor(i, s, r) {
    typeof i == "string" ? this.source = new Bh(i) : this.source = i, r ? this.decompress = r : this.decompress = ss, s ? this.cache = s : this.cache = new jh();
  }
  getHeader() {
    return zt(this, null, function* () {
      return yield this.cache.getHeader(this.source);
    });
  }
  getZxyAttempt(i, s, r, a) {
    return zt(this, null, function* () {
      const u = Eh(i, s, r), o = yield this.cache.getHeader(this.source);
      if (o.specVersion < 3)
        return os.getZxy(o, this.source, this.cache, i, s, r, a);
      if (i < o.minZoom || i > o.maxZoom)
        return;
      let h = o.rootDirectoryOffset, c = o.rootDirectoryLength;
      for (let f = 0; f <= 3; f++) {
        const _ = yield this.cache.getDirectory(
          this.source,
          h,
          c,
          o
        ), v = Ih(_, u);
        if (v)
          if (v.runLength > 0) {
            const p = yield this.source.getBytes(
              o.tileDataOffset + v.offset,
              v.length,
              a
            );
            if (o.etag && o.etag !== p.etag)
              throw new Ie(p.etag);
            return {
              data: yield this.decompress(p.data, o.tileCompression),
              cacheControl: p.cacheControl,
              expires: p.expires
            };
          } else
            h = o.leafDirectoryOffset + v.offset, c = v.length;
        else
          return;
      }
      throw Error("Maximum directory depth exceeded");
    });
  }
  getZxy(i, s, r, a) {
    return zt(this, null, function* () {
      try {
        return yield this.getZxyAttempt(i, s, r, a);
      } catch (u) {
        if (u instanceof Ie)
          return this.cache.invalidate(this.source, u.message), yield this.getZxyAttempt(i, s, r, a);
        throw u;
      }
    });
  }
  getMetadataAttempt() {
    return zt(this, null, function* () {
      const i = yield this.cache.getHeader(this.source), s = yield this.source.getBytes(
        i.jsonMetadataOffset,
        i.jsonMetadataLength
      );
      if (i.etag && i.etag !== s.etag)
        throw new Ie(s.etag);
      const r = yield this.decompress(
        s.data,
        i.internalCompression
      ), a = new TextDecoder("utf-8");
      return JSON.parse(a.decode(r));
    });
  }
  getMetadata() {
    return zt(this, null, function* () {
      try {
        return yield this.getMetadataAttempt();
      } catch (i) {
        if (i instanceof Ie)
          return this.cache.invalidate(this.source, i.message), yield this.getMetadataAttempt();
        throw i;
      }
    });
  }
};
function Ae(i) {
  return `${i.x}:${i.y}:${i.z}`;
}
var Nh = (i, s, r) => {
  i.pos = s;
  const a = i.readVarint() + i.pos;
  let u = 1, o = 0, h = 0, c = 0, f = 1 / 0, _ = -1 / 0, v = 1 / 0, p = -1 / 0;
  const y = [];
  let b = [];
  for (; i.pos < a; ) {
    if (o <= 0) {
      const k = i.readVarint();
      u = k & 7, o = k >> 3;
    }
    if (o--, u === 1 || u === 2)
      h += i.readSVarint() * r, c += i.readSVarint() * r, h < f && (f = h), h > _ && (_ = h), c < v && (v = c), c > p && (p = c), u === 1 && (b.length > 0 && y.push(b), b = []), b.push(new eh.default(h, c));
    else if (u === 7)
      b && b.push(b[0].clone());
    else
      throw new Error(`unknown command ${u}`);
  }
  return b && y.push(b), { geom: y, bbox: { minX: f, minY: v, maxX: _, maxY: p } };
};
function ls(i, s) {
  const r = new ih.VectorTile(new nh.default(i)), a = /* @__PURE__ */ new Map();
  for (const [u, o] of Object.entries(r.layers)) {
    const h = [], c = o;
    for (let f = 0; f < c.length; f++) {
      const _ = Nh(
        c.feature(f)._pbf,
        c.feature(f)._geometry,
        s / c.extent
      );
      let v = 0;
      for (const p of _.geom)
        v += p.length;
      h.push({
        id: c.feature(f).id,
        geomType: c.feature(f).type,
        geom: _.geom,
        numVertices: v,
        bbox: _.bbox,
        props: c.feature(f).properties
      });
    }
    a.set(u, h);
  }
  return a;
}
var fo = class {
  constructor(i, s) {
    typeof i == "string" ? this.p = new Fh(i) : this.p = i, this.zoomaborts = [], this.shouldCancelZooms = s;
  }
  get(i, s) {
    return Ze(this, null, function* () {
      this.shouldCancelZooms && (this.zoomaborts = this.zoomaborts.filter((o) => o.z !== i.z ? (o.controller.abort(), !1) : !0));
      const r = new AbortController();
      this.zoomaborts.push({ z: i.z, controller: r });
      const a = r.signal, u = yield this.p.getZxy(i.z, i.x, i.y, a);
      return u ? ls(u.data, s) : /* @__PURE__ */ new Map();
    });
  }
}, Uh = class {
  constructor(i, s) {
    this.url = i, this.zoomaborts = [], this.shouldCancelZooms = s;
  }
  get(i, s) {
    return Ze(this, null, function* () {
      this.shouldCancelZooms && (this.zoomaborts = this.zoomaborts.filter((o) => o.z !== i.z ? (o.controller.abort(), !1) : !0));
      const r = this.url.replace("{z}", i.z.toString()).replace("{x}", i.x.toString()).replace("{y}", i.y.toString()), a = new AbortController();
      this.zoomaborts.push({ z: i.z, controller: a });
      const u = a.signal;
      return new Promise((o, h) => {
        fetch(r, { signal: u }).then((c) => c.arrayBuffer()).then((c) => {
          const f = ls(c, s);
          o(f);
        }).catch((c) => {
          h(c);
        });
      });
    });
  }
}, Vh = class {
  constructor(i, s) {
    this.source = i, this.cache = /* @__PURE__ */ new Map(), this.inflight = /* @__PURE__ */ new Map(), this.tileSize = s;
  }
  get(i) {
    return Ze(this, null, function* () {
      const s = Ae(i);
      return new Promise((r, a) => {
        const u = this.cache.get(s);
        if (u)
          u.used = performance.now(), r(u.data);
        else {
          const o = this.inflight.get(s);
          o ? o.push({ resolve: r, reject: a }) : (this.inflight.set(s, []), this.source.get(i, this.tileSize).then((h) => {
            this.cache.set(s, { used: performance.now(), data: h });
            const c = this.inflight.get(s);
            if (c)
              for (const f of c)
                f.resolve(h);
            if (this.inflight.delete(s), r(h), this.cache.size >= 64) {
              let f = 1 / 0, _;
              this.cache.forEach((v, p) => {
                v.used < f && (f = v.used, _ = p);
              }), _ && this.cache.delete(_);
            }
          }).catch((h) => {
            const c = this.inflight.get(s);
            if (c)
              for (const f of c)
                f.reject(h);
            this.inflight.delete(s), a(h);
          }));
        }
      });
    });
  }
}, Pt = class {
  constructor(i) {
    var s;
    this.pattern = i.pattern, this.fill = new Vt(i.fill, "black"), this.opacity = new Lt(i.opacity, 1), this.stroke = new Vt(i.stroke, "black"), this.width = new Lt(i.width, 0), this.perFeature = (s = this.fill.perFeature || this.opacity.perFeature || this.stroke.perFeature || this.width.perFeature || i.perFeature) != null ? s : !1, this.doStroke = !1;
  }
  before(i, s) {
    if (!this.perFeature) {
      i.globalAlpha = this.opacity.get(s), i.fillStyle = this.fill.get(s), i.strokeStyle = this.stroke.get(s);
      const r = this.width.get(s);
      r > 0 && (this.doStroke = !0), i.lineWidth = r;
    }
    if (this.pattern) {
      const r = i.createPattern(this.pattern, "repeat");
      r && (i.fillStyle = r);
    }
  }
  draw(i, s, r, a) {
    let u = !1;
    if (this.perFeature) {
      i.globalAlpha = this.opacity.get(r, a), i.fillStyle = this.fill.get(r, a);
      const h = this.width.get(r, a);
      h && (u = !0, i.strokeStyle = this.stroke.get(r, a), i.lineWidth = h);
    }
    const o = () => {
      i.fill(), (u || this.doStroke) && i.stroke();
    };
    i.beginPath();
    for (const h of s)
      for (let c = 0; c < h.length; c++) {
        const f = h[c];
        c === 0 ? i.moveTo(f.x, f.y) : i.lineTo(f.x, f.y);
      }
    o();
  }
};
function Hh(i, s) {
  let r = 0;
  for (; s[r + 1][0] < i; )
    r++;
  return r;
}
function Wh(i, s, r) {
  return i * (r - s) + s;
}
function Yh(i, s, r, a) {
  const u = a[s + 1][0] - a[s][0], o = i - a[s][0];
  return u === 0 ? 0 : r === 1 ? o / u : (Ut(r, o) - 1) / (Ut(r, u) - 1);
}
function Xt(i, s) {
  return (r) => {
    if (s.length < 1)
      return 0;
    if (r <= s[0][0])
      return s[0][1];
    if (r >= s[s.length - 1][0])
      return s[s.length - 1][1];
    const a = Hh(r, s), u = Yh(r, a, i, s);
    return Wh(u, s[a][1], s[a + 1][1]);
  };
}
function _o(i) {
  return Xt(1, i);
}
var At = class {
  constructor(i) {
    var s;
    this.color = new Vt(i.color, "black"), this.width = new Lt(i.width), this.opacity = new Lt(i.opacity), this.dash = i.dash ? new Kl(i.dash) : null, this.dashColor = new Vt(i.dashColor, "black"), this.dashWidth = new Lt(i.dashWidth, 1), this.lineCap = new Vt(i.lineCap, "butt"), this.lineJoin = new Vt(i.lineJoin, "miter"), this.skip = !1, this.perFeature = !!((s = this.dash) != null && s.perFeature || this.color.perFeature || this.opacity.perFeature || this.width.perFeature || this.lineCap.perFeature || this.lineJoin.perFeature || i.perFeature);
  }
  before(i, s) {
    this.perFeature || (i.strokeStyle = this.color.get(s), i.lineWidth = this.width.get(s), i.globalAlpha = this.opacity.get(s), i.lineCap = this.lineCap.get(s), i.lineJoin = this.lineJoin.get(s));
  }
  draw(i, s, r, a) {
    if (this.skip)
      return;
    const u = () => {
      this.perFeature && (i.globalAlpha = this.opacity.get(r, a), i.lineCap = this.lineCap.get(r, a), i.lineJoin = this.lineJoin.get(r, a)), this.dash ? (i.save(), this.perFeature ? (i.lineWidth = this.dashWidth.get(r, a), i.strokeStyle = this.dashColor.get(r, a), i.setLineDash(this.dash.get(r, a))) : i.setLineDash(this.dash.get(r)), i.stroke(), i.restore()) : (i.save(), this.perFeature && (i.lineWidth = this.width.get(r, a), i.strokeStyle = this.color.get(r, a)), i.stroke(), i.restore());
    };
    i.beginPath();
    for (const o of s)
      for (let h = 0; h < o.length; h++) {
        const c = o[h];
        h === 0 ? i.moveTo(c.x, c.y) : i.lineTo(c.x, c.y);
      }
    u();
  }
}, Gh = class {
  constructor(i) {
    this.radius = new Lt(i.radius, 3), this.fill = new Vt(i.fill, "black"), this.stroke = new Vt(i.stroke, "white"), this.width = new Lt(i.width, 0), this.opacity = new Lt(i.opacity);
  }
  draw(i, s, r, a) {
    i.globalAlpha = this.opacity.get(r, a);
    const u = this.radius.get(r, a), o = this.width.get(r, a);
    o > 0 && (i.strokeStyle = this.stroke.get(r, a), i.lineWidth = o, i.beginPath(), i.arc(s[0][0].x, s[0][0].y, u + o / 2, 0, 2 * Math.PI), i.stroke()), i.fillStyle = this.fill.get(r, a), i.beginPath(), i.arc(s[0][0].x, s[0][0].y, u, 0, 2 * Math.PI), i.fill();
  }
  place(i, s, r) {
    s[0];
    const a = new ye.default(s[0][0].x, s[0][0].y), u = this.radius.get(i.zoom, r), o = {
      minX: a.x - u,
      minY: a.y - u,
      maxX: a.x + u,
      maxY: a.y + u
    };
    return [{ anchor: a, bboxes: [o], draw: (c) => {
      this.draw(c, [[new ye.default(0, 0)]], i.zoom, r);
    } }];
  }
}, qh = (i, s) => ({
  minX: Math.min(i.minX, s.minX),
  minY: Math.min(i.minY, s.minY),
  maxX: Math.max(i.maxX, s.maxX),
  maxY: Math.max(i.maxY, s.maxY)
}), Xh = class {
  constructor(i) {
    this.list = i;
  }
  place(i, s, r) {
    const a = this.list[0];
    if (!a)
      return;
    let u = a.place(i, s, r);
    if (!u)
      return;
    let o = u[0];
    const h = o.anchor;
    let c = o.bboxes[0];
    const f = [o.draw];
    for (let v = 1; v < this.list.length; v++) {
      if (u = this.list[v].place(i, s, r), !u)
        return;
      o = u[0], c = qh(c, o.bboxes[0]), f.push(o.draw);
    }
    return [{ anchor: h, bboxes: [c], draw: (v) => {
      for (const p of f)
        p(v);
    } }];
  }
}, $h = class {
  constructor(i) {
    this.symbolizer = i;
  }
  place(i, s, r) {
    const a = s[0][0], u = this.symbolizer.place(i, [[new ye.default(0, 0)]], r);
    if (!u || u.length === 0)
      return;
    const o = u[0], h = o.bboxes[0], c = h.maxX - h.minX, f = h.maxY - h.minY, _ = {
      minX: a.x - c / 2,
      maxX: a.x + c / 2,
      minY: a.y - f / 2,
      maxY: a.y + f / 2
    };
    return [{ anchor: a, bboxes: [_], draw: (p) => {
      p.translate(-c / 2, f / 2 - h.maxY), o.draw(p, {
        justify: 2
        /* Center */
      });
    } }];
  }
}, hs = class {
  constructor(i) {
    this.font = new Wo(i), this.text = new Ho(i), this.fill = new Vt(i.fill, "black"), this.stroke = new Vt(i.stroke, "black"), this.width = new Lt(i.width, 0), this.lineHeight = new Lt(i.lineHeight, 1), this.letterSpacing = new Lt(i.letterSpacing, 0), this.maxLineCodeUnits = new Lt(i.maxLineChars, 15), this.justify = i.justify;
  }
  place(i, s, r) {
    const a = this.text.get(i.zoom, r);
    if (!a)
      return;
    const u = this.font.get(i.zoom, r);
    i.scratch.font = u;
    const o = this.letterSpacing.get(i.zoom, r), h = Yo(
      a,
      this.maxLineCodeUnits.get(i.zoom, r)
    );
    let c = "", f = 0;
    for (const A of h)
      A.length > f && (f = A.length, c = A);
    const _ = i.scratch.measureText(c), v = _.width + o * (f - 1), p = _.actualBoundingBoxAscent, y = _.actualBoundingBoxDescent, b = (p + y) * this.lineHeight.get(i.zoom, r), k = new ye.default(s[0][0].x, s[0][0].y), S = {
      minX: k.x,
      minY: k.y - p,
      maxX: k.x + v,
      maxY: k.y + y + (h.length - 1) * b
    };
    return [{ anchor: k, bboxes: [S], draw: (A, w) => {
      A.globalAlpha = 1, A.font = u, A.fillStyle = this.fill.get(i.zoom, r);
      const T = this.width.get(i.zoom, r);
      let C = 0;
      for (const z of h) {
        let Z = 0;
        if (this.justify === 2 || w && w.justify === 2 ? Z = (v - A.measureText(z).width) / 2 : (this.justify === 3 || w && w.justify === 3) && (Z = v - A.measureText(z).width), T)
          if (A.lineWidth = T * 2, A.strokeStyle = this.stroke.get(i.zoom, r), o > 0) {
            let R = Z;
            for (const N of z)
              A.strokeText(N, R, C), R += A.measureText(N).width + o;
          } else
            A.strokeText(z, Z, C);
        if (o > 0) {
          let R = Z;
          for (const N of z)
            A.fillText(N, R, C), R += A.measureText(N).width + o;
        } else
          A.fillText(z, Z, C);
        C += b;
      }
    } }];
  }
}, ti = class {
  constructor(i) {
    this.centered = new $h(new hs(i));
  }
  place(i, s, r) {
    return this.centered.place(i, s, r);
  }
}, Kh = class {
  constructor(i, s) {
    var r, a, u;
    this.symbolizer = i, this.offsetX = new Lt(s.offsetX, 0), this.offsetY = new Lt(s.offsetY, 0), this.justify = (r = s.justify) != null ? r : void 0, this.placements = (a = s.placements) != null ? a : [
      2,
      6,
      8,
      4,
      1,
      3,
      5,
      7
      /* W */
    ], this.ddValues = (u = s.ddValues) != null ? u : () => ({});
  }
  place(i, s, r) {
    if (r.geomType !== 1)
      return;
    const a = s[0][0], u = this.symbolizer.place(i, [[new ye.default(0, 0)]], r);
    if (!u || u.length === 0)
      return;
    const o = u[0], h = o.bboxes[0];
    let c = this.offsetX, f = this.offsetY, _ = this.justify, v = this.placements;
    const {
      offsetX: p,
      offsetY: y,
      justify: b,
      placements: k
    } = this.ddValues(i.zoom, r) || {};
    p && (c = new Lt(p, 0)), y && (f = new Lt(y, 0)), b && (_ = b), k && (v = k);
    const S = c.get(i.zoom, r), B = f.get(i.zoom, r), A = (Z, R) => ({
      minX: Z.x + R.x + h.minX,
      minY: Z.y + R.y + h.minY,
      maxX: Z.x + R.x + h.maxX,
      maxY: Z.y + R.y + h.maxY
    });
    let w = new ye.default(S, B), T;
    const C = (Z) => {
      Z.translate(w.x, w.y), o.draw(Z, { justify: T });
    }, z = (Z, R) => {
      const N = A(Z, R);
      if (!i.index.bboxCollides(N, i.order))
        return [{ anchor: a, bboxes: [N], draw: C }];
    };
    for (const Z of v) {
      const R = this.computeXaxisOffset(S, h, Z), N = this.computeYaxisOffset(B, h, Z);
      return T = this.computeJustify(_, Z), w = new ye.default(R, N), z(a, w);
    }
  }
  computeXaxisOffset(i, s, r) {
    const a = s.maxX, u = a / 2;
    return [
      1,
      5
      /* S */
    ].includes(r) ? i - u : [
      8,
      7,
      6
      /* Sw */
    ].includes(
      r
    ) ? i - a : i;
  }
  computeYaxisOffset(i, s, r) {
    const a = Math.abs(s.minY), u = s.maxY, o = (s.minY + s.maxY) / 2;
    return [
      3,
      7
      /* W */
    ].includes(r) ? i - o : [
      8,
      2,
      1
      /* N */
    ].includes(
      r
    ) ? i - u : [
      6,
      4,
      5
      /* S */
    ].includes(
      r
    ) ? i + a : i;
  }
  computeJustify(i, s) {
    return i || ([
      1,
      5
      /* S */
    ].includes(s) ? 2 : [
      2,
      3,
      4
      /* Se */
    ].includes(
      s
    ) ? 1 : 3);
  }
}, Jh = class {
  constructor(i) {
    this.symbolizer = new Kh(
      new hs(i),
      i
    );
  }
  place(i, s, r) {
    return this.symbolizer.place(i, s, r);
  }
}, Tn = class {
  constructor(i) {
    var s;
    this.font = new Wo(i), this.text = new Ho(i), this.fill = new Vt(i.fill, "black"), this.stroke = new Vt(i.stroke, "black"), this.width = new Lt(i.width, 0), this.offset = new Lt(i.offset, 0), this.position = (s = i.position) != null ? s : 1, this.maxLabelCodeUnits = new Lt(i.maxLabelChars, 40), this.repeatDistance = new Lt(i.repeatDistance, 250);
  }
  place(i, s, r) {
    const a = this.text.get(i.zoom, r);
    if (!a || a.length > this.maxLabelCodeUnits.get(i.zoom, r))
      return;
    const u = 20, o = r.bbox;
    if (o.maxY - o.minY < u && o.maxX - o.minX < u)
      return;
    const h = this.font.get(i.zoom, r);
    i.scratch.font = h;
    const c = i.scratch.measureText(a), f = c.width, _ = c.actualBoundingBoxAscent + c.actualBoundingBoxDescent;
    let v = this.repeatDistance.get(i.zoom, r);
    i.overzoom > 4 && (v *= 1 << i.overzoom - 4);
    const p = _ * 2, y = Ql(s, f, v, p);
    if (y.length === 0)
      return;
    const b = [];
    for (const k of y) {
      const S = k.end.x - k.start.x, B = k.end.y - k.start.y, w = th(
        k.start,
        k.end,
        f,
        p / 2
      ).map((C) => ({
        minX: C.x - p / 2,
        minY: C.y - p / 2,
        maxX: C.x + p / 2,
        maxY: C.y + p / 2
      })), T = (C) => {
        C.globalAlpha = 1, C.rotate(Math.atan2(B, S)), S < 0 && (C.scale(-1, -1), C.translate(-f, 0));
        let z = 0;
        this.position === 3 ? z += _ : this.position === 2 && (z += _ / 2), C.translate(
          0,
          z - this.offset.get(i.zoom, r)
        ), C.font = h;
        const Z = this.width.get(i.zoom, r);
        Z && (C.lineWidth = Z, C.strokeStyle = this.stroke.get(i.zoom, r), C.strokeText(a, 0, 0)), C.fillStyle = this.fill.get(i.zoom, r), C.fillText(a, 0, 0);
      };
      b.push({
        anchor: k.start,
        bboxes: w,
        draw: T,
        deduplicationKey: a,
        deduplicationDistance: v
      });
    }
    return b;
  }
}, Zt = (i, s) => {
  const r = i[s];
  return typeof r == "string" ? r : "";
}, mo = (i, s) => {
  const r = i[s];
  return typeof r == "number" ? r : 0;
}, us = (i) => [
  {
    dataLayer: "earth",
    symbolizer: new Pt({
      fill: i.earth
    })
  },
  {
    dataLayer: "landuse",
    symbolizer: new Pt({
      fill: (s, r) => xn(i.park_a, i.park_b, Math.min(Math.max(s / 12, 12), 0))
    }),
    filter: (s, r) => {
      const a = Zt(r.props, "pmap:kind");
      return ["allotments", "village_green", "playground"].includes(a);
    }
  },
  {
    dataLayer: "landuse",
    symbolizer: new Pt({
      fill: i.park_b,
      opacity: 0.7
    }),
    filter: (s, r) => {
      const a = Zt(r.props, "pmap:kind");
      return [
        "national_park",
        "park",
        "cemetery",
        "protected_area",
        "nature_reserve",
        "forest",
        "golf_course"
      ].includes(a);
    }
  },
  {
    dataLayer: "landuse",
    symbolizer: new Pt({
      fill: i.hospital
    }),
    filter: (s, r) => r.props["pmap:kind"] === "hospital"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Pt({
      fill: i.industrial
    }),
    filter: (s, r) => r.props["pmap:kind"] === "industrial"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Pt({
      fill: i.school
    }),
    filter: (s, r) => {
      const a = Zt(r.props, "pmap:kind");
      return ["school", "university", "college"].includes(a);
    }
  },
  {
    dataLayer: "landuse",
    symbolizer: new Pt({
      fill: i.beach
    }),
    filter: (s, r) => r.props["pmap:kind"] === "beach"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Pt({
      fill: i.zoo
    }),
    filter: (s, r) => r.props["pmap:kind"] === "zoo"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Pt({
      fill: i.zoo
    }),
    filter: (s, r) => {
      const a = Zt(r.props, "pmap:kind");
      return ["military", "naval_base", "airfield"].includes(a);
    }
  },
  {
    dataLayer: "natural",
    symbolizer: new Pt({
      fill: (s, r) => xn(i.wood_a, i.wood_b, Math.min(Math.max(s / 12, 12), 0))
    }),
    filter: (s, r) => {
      const a = Zt(r.props, "pmap:kind");
      return ["wood", "nature_reserve", "forest"].includes(a);
    }
  },
  {
    dataLayer: "natural",
    symbolizer: new Pt({
      fill: (s, r) => xn(i.scrub_a, i.scrub_b, Math.min(Math.max(s / 12, 12), 0))
    }),
    filter: (s, r) => {
      const a = Zt(r.props, "pmap:kind");
      return ["scrub", "grassland", "grass"].includes(a);
    }
  },
  {
    dataLayer: "natural",
    symbolizer: new Pt({
      fill: i.scrub_b
    }),
    filter: (s, r) => {
      const a = Zt(r.props, "pmap:kind");
      return ["scrub", "grassland", "grass"].includes(a);
    }
  },
  {
    dataLayer: "natural",
    symbolizer: new Pt({
      fill: i.glacier
    }),
    filter: (s, r) => r.props["pmap:kind"] === "glacier"
  },
  {
    dataLayer: "natural",
    symbolizer: new Pt({
      fill: i.sand
    }),
    filter: (s, r) => r.props["pmap:kind"] === "sand"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Pt({
      fill: i.aerodrome
    }),
    filter: (s, r) => r.props["pmap:kind"] === "aerodrome"
  },
  {
    dataLayer: "water",
    symbolizer: new Pt({
      fill: i.water
    })
  },
  {
    dataLayer: "transit",
    symbolizer: new At({
      color: i.runway,
      width: (s, r) => Xt(1.6, [
        [11, 0],
        [13, 4],
        [19, 30]
      ])(s)
    }),
    filter: (s, r) => r.props["pmap:kind_detail"] === "runway"
  },
  {
    dataLayer: "transit",
    symbolizer: new At({
      color: i.runway,
      width: (s, r) => Xt(1.6, [
        [14, 0],
        [14.5, 1],
        [16, 6]
      ])(s)
    }),
    filter: (s, r) => r.props["pmap:kind_detail"] === "taxiway"
  },
  {
    dataLayer: "transit",
    symbolizer: new At({
      color: i.pier,
      width: (s, r) => Xt(1.6, [
        [13, 0],
        [13.5, 0, 5],
        [21, 16]
      ])(s)
    }),
    filter: (s, r) => r.props["pmap:kind"] === "pier"
  },
  {
    dataLayer: "physical_line",
    minzoom: 14,
    symbolizer: new At({
      color: i.water,
      width: (s, r) => Xt(1.6, [
        [9, 0],
        [9.5, 1],
        [18, 12]
      ])(s)
    }),
    filter: (s, r) => r.props["pmap:kind"] === "river"
  },
  {
    dataLayer: "physical_line",
    minzoom: 14,
    symbolizer: new At({
      color: i.water,
      width: 0.5
    }),
    filter: (s, r) => r.props["pmap:kind"] === "stream"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Pt({
      fill: i.pedestrian
    }),
    filter: (s, r) => r.props["pmap:kind"] === "pedestrian"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Pt({
      fill: i.pier
    }),
    filter: (s, r) => r.props["pmap:kind"] === "pier"
  },
  {
    dataLayer: "buildings",
    symbolizer: new Pt({
      fill: i.buildings,
      opacity: 0.5
    })
  },
  {
    dataLayer: "roads",
    symbolizer: new At({
      color: i.major,
      width: (s, r) => Xt(1.6, [
        [14, 0],
        [20, 7]
      ])(s)
    }),
    filter: (s, r) => {
      const a = Zt(r.props, "pmap:kind");
      return ["other", "path"].includes(a);
    }
  },
  {
    dataLayer: "roads",
    symbolizer: new At({
      color: i.major,
      width: (s, r) => Xt(1.6, [
        [13, 0],
        [18, 8]
      ])(s)
    }),
    filter: (s, r) => r.props["pmap:kind"] === "minor_road"
  },
  {
    dataLayer: "roads",
    symbolizer: new At({
      color: i.major,
      width: (s, r) => Xt(1.6, [
        [7, 0],
        [12, 1.2],
        [15, 3],
        [18, 13]
      ])(s)
    }),
    filter: (s, r) => r.props["pmap:kind"] === "medium_road"
  },
  {
    dataLayer: "roads",
    symbolizer: new At({
      color: i.major,
      width: (s, r) => Xt(1.6, [
        [6, 0],
        [12, 1.6],
        [15, 3],
        [18, 13]
      ])(s)
    }),
    filter: (s, r) => r.props["pmap:kind"] === "major_road"
  },
  {
    dataLayer: "roads",
    symbolizer: new At({
      color: i.major,
      width: (s, r) => Xt(1.6, [
        [3, 0],
        [6, 1.1],
        [12, 1.6],
        [15, 5],
        [18, 15]
      ])(s)
    }),
    filter: (s, r) => r.props["pmap:kind"] === "highway"
  },
  {
    dataLayer: "boundaries",
    symbolizer: new At({
      dash: [3, 2],
      color: i.boundaries,
      width: 1
    }),
    filter: (s, r) => {
      const a = r.props["pmap:min_admin_level"];
      return typeof a == "number" && a <= 2;
    }
  },
  {
    dataLayer: "transit",
    symbolizer: new At({
      dash: [0.3, 0.75],
      color: i.railway,
      dashWidth: (s, r) => Xt(1.6, [
        [4, 0],
        [7, 0.15],
        [19, 9]
      ])(s),
      opacity: 0.5
    }),
    filter: (s, r) => r.props["pmap:kind"] === "rail"
  },
  {
    dataLayer: "boundaries",
    symbolizer: new At({
      dash: [3, 2],
      color: i.boundaries,
      width: 0.5
    }),
    filter: (s, r) => {
      const a = r.props["pmap:min_admin_level"];
      return typeof a == "number" && a > 2;
    }
  }
], Qh = (i) => {
  const s = ["name"];
  return [
    {
      dataLayer: "roads",
      symbolizer: new Tn({
        labelProps: s,
        fill: i.roads_label_minor,
        font: "400 12px sans-serif",
        width: 2,
        stroke: i.roads_label_minor_halo
      }),
      minzoom: 16,
      filter: (r, a) => {
        const u = Zt(a.props, "pmap:kind");
        return ["minor_road", "other", "path"].includes(u);
      }
    },
    {
      dataLayer: "roads",
      symbolizer: new Tn({
        labelProps: s,
        fill: i.roads_label_major,
        font: "400 12px sans-serif",
        width: 2,
        stroke: i.roads_label_major_halo
      }),
      minzoom: 12,
      filter: (r, a) => {
        const u = Zt(a.props, "pmap:kind");
        return ["highway", "major_road", "medium_road"].includes(u);
      }
    },
    {
      dataLayer: "roads",
      symbolizer: new Tn({
        labelProps: s,
        fill: i.roads_label_major,
        font: "400 12px sans-serif",
        width: 2,
        stroke: i.roads_label_major_halo
      }),
      minzoom: 12,
      filter: (r, a) => {
        const u = Zt(a.props, "pmap:kind");
        return ["highway", "major_road", "medium_road"].includes(u);
      }
    },
    {
      dataLayer: "physical_point",
      symbolizer: new ti({
        labelProps: s,
        fill: i.ocean_label,
        lineHeight: 1.5,
        letterSpacing: 1,
        font: (r, a) => `400 ${_o([
          [3, 10],
          [10, 12]
        ])(r)}px sans-serif`,
        textTransform: "uppercase"
      }),
      filter: (r, a) => {
        const u = Zt(a.props, "pmap:kind");
        return ["ocean", "bay", "strait", "fjord"].includes(u);
      }
    },
    {
      dataLayer: "physical_point",
      symbolizer: new ti({
        labelProps: s,
        fill: i.ocean_label,
        lineHeight: 1.5,
        letterSpacing: 1,
        font: (r, a) => `400 ${_o([
          [3, 0],
          [6, 12],
          [10, 12]
        ])(r)}px sans-serif`
      }),
      filter: (r, a) => {
        const u = Zt(a.props, "pmap:kind");
        return ["sea", "lake", "water"].includes(u);
      }
    },
    {
      dataLayer: "places",
      symbolizer: new ti({
        labelProps: (r, a) => r < 6 ? ["name:short"] : s,
        fill: i.state_label,
        stroke: i.state_label_halo,
        width: 1,
        lineHeight: 1.5,
        font: (r, a) => r < 6 ? "400 16px sans-serif" : "400 12px sans-serif",
        textTransform: "uppercase"
      }),
      filter: (r, a) => a.props["pmap:kind"] === "region"
    },
    {
      dataLayer: "places",
      symbolizer: new ti({
        labelProps: s,
        fill: i.country_label,
        lineHeight: 1.5,
        font: (r, a) => (r < 6, "600 12px sans-serif"),
        textTransform: "uppercase"
      }),
      filter: (r, a) => a.props["pmap:kind"] === "country"
    },
    {
      dataLayer: "places",
      minzoom: 9,
      symbolizer: new ti({
        labelProps: s,
        fill: i.city_label,
        lineHeight: 1.5,
        font: (r, a) => {
          if (!a)
            return "400 12px sans-serif";
          const u = a.props["pmap:min_zoom"];
          let o = 400;
          u && u <= 5 && (o = 600);
          let h = 12;
          const c = a.props["pmap:population_rank"];
          return c && c > 9 && (h = 16), `${o} ${h}px sans-serif`;
        }
      }),
      sort: (r, a) => {
        const u = mo(r, "pmap:population_rank"), o = mo(a, "pmap:population_rank");
        return u - o;
      },
      filter: (r, a) => a.props["pmap:kind"] === "locality"
    },
    {
      dataLayer: "places",
      maxzoom: 8,
      symbolizer: new Xh([
        new Gh({
          radius: 2,
          fill: i.city_circle,
          stroke: i.city_circle_stroke,
          width: 1.5
        }),
        new Jh({
          labelProps: s,
          fill: i.city_label,
          stroke: i.city_label_halo,
          width: 1,
          offsetX: 6,
          offsetY: 4.5,
          font: (r, a) => "400 12px sans-serif"
        })
      ]),
      filter: (r, a) => a.props["pmap:kind"] === "locality"
    }
  ];
}, tu = {
  background: "#cccccc",
  earth: "#e0e0e0",
  park_a: "#cfddd5",
  park_b: "#9cd3b4",
  hospital: "#e4dad9",
  industrial: "#d1dde1",
  school: "#e4ded7",
  wood_a: "#d0ded0",
  wood_b: "#a0d9a0",
  pedestrian: "#e3e0d4",
  scrub_a: "#cedcd7",
  scrub_b: "#99d2bb",
  glacier: "#e7e7e7",
  sand: "#e2e0d7",
  beach: "#e8e4d0",
  aerodrome: "#dadbdf",
  runway: "#e9e9ed",
  water: "#80deea",
  pier: "#e0e0e0",
  zoo: "#c6dcdc",
  military: "#dcdcdc",
  tunnel_other_casing: "#e0e0e0",
  tunnel_minor_casing: "#e0e0e0",
  tunnel_link_casing: "#e0e0e0",
  tunnel_medium_casing: "#e0e0e0",
  tunnel_major_casing: "#e0e0e0",
  tunnel_highway_casing: "#e0e0e0",
  tunnel_other: "#d5d5d5",
  tunnel_minor: "#d5d5d5",
  tunnel_link: "#d5d5d5",
  tunnel_medium: "#d5d5d5",
  tunnel_major: "#d5d5d5",
  tunnel_highway: "#d5d5d5",
  transit_pier: "#e0e0e0",
  buildings: "#cccccc",
  minor_service_casing: "#e0e0e0",
  minor_casing: "#e0e0e0",
  link_casing: "#e0e0e0",
  medium_casing: "#e0e0e0",
  major_casing_late: "#e0e0e0",
  highway_casing_late: "#e0e0e0",
  other: "#ebebeb",
  minor_service: "#ebebeb",
  minor_a: "#ebebeb",
  minor_b: "#ffffff",
  link: "#ffffff",
  medium: "#f5f5f5",
  major_casing_early: "#e0e0e0",
  major: "#ffffff",
  highway_casing_early: "#e0e0e0",
  highway: "#ffffff",
  railway: "#a7b1b3",
  boundaries: "#adadad",
  waterway_label: "#ffffff",
  bridges_other_casing: "#e0e0e0",
  bridges_minor_casing: "#e0e0e0",
  bridges_link_casing: "#e0e0e0",
  bridges_medium_casing: "#e0e0e0",
  bridges_major_casing: "#e0e0e0",
  bridges_highway_casing: "#e0e0e0",
  bridges_other: "#ebebeb",
  bridges_minor: "#ffffff",
  bridges_link: "#ffffff",
  bridges_medium: "#f0eded",
  bridges_major: "#f5f5f5",
  bridges_highway: "#ffffff",
  roads_label_minor: "#91888b",
  roads_label_minor_halo: "#ffffff",
  roads_label_major: "#938a8d",
  roads_label_major_halo: "#ffffff",
  ocean_label: "#ffffff",
  peak_label: "#7e9aa0",
  subplace_label: "#8f8f8f",
  subplace_label_halo: "#e0e0e0",
  city_circle: "#ffffff",
  city_circle_stroke: "#a3a3a3",
  city_label: "#5c5c5c",
  city_label_halo: "#e0e0e0",
  state_label: "#b3b3b3",
  state_label_halo: "#e0e0e0",
  country_label: "#a3a3a3"
}, eu = {
  background: "#34373d",
  earth: "#1f1f1f",
  park_a: "#232325",
  park_b: "#232325",
  hospital: "#252424",
  industrial: "#222222",
  school: "#262323",
  wood_a: "#202121",
  wood_b: "#202121",
  pedestrian: "#1e1e1e",
  scrub_a: "#222323",
  scrub_b: "#222323",
  glacier: "#1c1c1c",
  sand: "#212123",
  beach: "#28282a",
  aerodrome: "#1e1e1e",
  runway: "#333333",
  water: "#34373d",
  pier: "#222222",
  zoo: "#222323",
  military: "#242323",
  tunnel_other_casing: "#141414",
  tunnel_minor_casing: "#141414",
  tunnel_link_casing: "#141414",
  tunnel_medium_casing: "#141414",
  tunnel_major_casing: "#141414",
  tunnel_highway_casing: "#141414",
  tunnel_other: "#292929",
  tunnel_minor: "#292929",
  tunnel_link: "#292929",
  tunnel_medium: "#292929",
  tunnel_major: "#292929",
  tunnel_highway: "#292929",
  transit_pier: "#333333",
  buildings: "#111111",
  minor_service_casing: "#1f1f1f",
  minor_casing: "#1f1f1f",
  link_casing: "#1f1f1f",
  medium_casing: "#1f1f1f",
  major_casing_late: "#1f1f1f",
  highway_casing_late: "#1f1f1f",
  other: "#333333",
  minor_service: "#333333",
  minor_a: "#3d3d3d",
  minor_b: "#333333",
  link: "#3d3d3d",
  medium: "#3d3d3d",
  major_casing_early: "#1f1f1f",
  major: "#3d3d3d",
  highway_casing_early: "#1f1f1f",
  highway: "#474747",
  railway: "#000000",
  boundaries: "#5b6374",
  waterway_label: "#717784",
  bridges_other_casing: "#2b2b2b",
  bridges_minor_casing: "#1f1f1f",
  bridges_link_casing: "#1f1f1f",
  bridges_medium_casing: "#1f1f1f",
  bridges_major_casing: "#1f1f1f",
  bridges_highway_casing: "#1f1f1f",
  bridges_other: "#333333",
  bridges_minor: "#333333",
  bridges_link: "#3d3d3d",
  bridges_medium: "#3d3d3d",
  bridges_major: "#3d3d3d",
  bridges_highway: "#474747",
  roads_label_minor: "#525252",
  roads_label_minor_halo: "#1f1f1f",
  roads_label_major: "#666666",
  roads_label_major_halo: "#1f1f1f",
  ocean_label: "#717784",
  peak_label: "#898080",
  subplace_label: "#525252",
  subplace_label_halo: "#1f1f1f",
  city_circle: "#000000",
  city_circle_stroke: "#7a7a7a",
  city_label: "#7a7a7a",
  city_label_halo: "#212121",
  state_label: "#3d3d3d",
  state_label_halo: "#1f1f1f",
  country_label: "#5c5c5c"
}, iu = {
  background: "#ffffff",
  earth: "#ffffff",
  park_a: "#fcfcfc",
  park_b: "#fcfcfc",
  hospital: "#f8f8f8",
  industrial: "#fcfcfc",
  school: "#f8f8f8",
  wood_a: "#fafafa",
  wood_b: "#fafafa",
  pedestrian: "#fdfdfd",
  scrub_a: "#fafafa",
  scrub_b: "#fafafa",
  glacier: "#fcfcfc",
  sand: "#fafafa",
  beach: "#f6f6f6",
  aerodrome: "#fdfdfd",
  runway: "#efefef",
  water: "#dcdcdc",
  pier: "#f5f5f5",
  zoo: "#f7f7f7",
  military: "#fcfcfc",
  tunnel_other_casing: "#d6d6d6",
  tunnel_minor_casing: "#fcfcfc",
  tunnel_link_casing: "#fcfcfc",
  tunnel_medium_casing: "#fcfcfc",
  tunnel_major_casing: "#fcfcfc",
  tunnel_highway_casing: "#fcfcfc",
  tunnel_other: "#d6d6d6",
  tunnel_minor: "#d6d6d6",
  tunnel_link: "#d6d6d6",
  tunnel_medium: "#d6d6d6",
  tunnel_major: "#d6d6d6",
  tunnel_highway: "#d6d6d6",
  transit_pier: "#efefef",
  buildings: "#efefef",
  minor_service_casing: "#ffffff",
  minor_casing: "#ffffff",
  link_casing: "#ffffff",
  medium_casing: "#ffffff",
  major_casing_late: "#ffffff",
  highway_casing_late: "#ffffff",
  other: "#f5f5f5",
  minor_service: "#f5f5f5",
  minor_a: "#ebebeb",
  minor_b: "#f5f5f5",
  link: "#ebebeb",
  medium: "#ebebeb",
  major_casing_early: "#ffffff",
  major: "#ebebeb",
  highway_casing_early: "#ffffff",
  highway: "#ebebeb",
  railway: "#d6d6d6",
  boundaries: "#adadad",
  waterway_label: "#adadad",
  bridges_other_casing: "#ffffff",
  bridges_minor_casing: "#ffffff",
  bridges_link_casing: "#ffffff",
  bridges_medium_casing: "#ffffff",
  bridges_major_casing: "#ffffff",
  bridges_highway_casing: "#ffffff",
  bridges_other: "#f5f5f5",
  bridges_minor: "#f5f5f5",
  bridges_link: "#ebebeb",
  bridges_medium: "#ebebeb",
  bridges_major: "#ebebeb",
  bridges_highway: "#ebebeb",
  roads_label_minor: "#adadad",
  roads_label_minor_halo: "#ffffff",
  roads_label_major: "#999999",
  roads_label_major_halo: "#ffffff",
  ocean_label: "#adadad",
  peak_label: "#adadad",
  subplace_label: "#8f8f8f",
  subplace_label_halo: "#ffffff",
  city_circle: "#ffffff",
  city_circle_stroke: "#adadad",
  city_label: "#5c5c5c",
  city_label_halo: "#ffffff",
  state_label: "#b3b3b3",
  state_label_halo: "#ffffff",
  country_label: "#b8b8b8"
}, nu = {
  background: "#a3a3a3",
  earth: "#cccccc",
  park_a: "#c2c2c2",
  park_b: "#c2c2c2",
  hospital: "#d0d0d0",
  industrial: "#c6c6c6",
  school: "#d0d0d0",
  wood_a: "#c2c2c2",
  wood_b: "#c2c2c2",
  pedestrian: "#c4c4c4",
  scrub_a: "#c2c2c2",
  scrub_b: "#c2c2c2",
  glacier: "#d2d2d2",
  sand: "#d2d2d2",
  beach: "#d2d2d2",
  aerodrome: "#c9c9c9",
  runway: "#f5f5f5",
  water: "#a3a3a3",
  pier: "#b8b8b8",
  zoo: "#c7c7c7",
  military: "#bfbfbf",
  tunnel_other_casing: "#b8b8b8",
  tunnel_minor_casing: "#b8b8b8",
  tunnel_link_casing: "#b8b8b8",
  tunnel_medium_casing: "#b8b8b8",
  tunnel_major_casing: "#b8b8b8",
  tunnel_highway_casing: "#b8b8b8",
  tunnel_other: "#d6d6d6",
  tunnel_minor: "#d6d6d6",
  tunnel_link: "#d6d6d6",
  tunnel_medium: "#d6d6d6",
  tunnel_major: "#d6d6d6",
  tunnel_highway: "#d6d6d6",
  transit_pier: "#b8b8b8",
  buildings: "#e0e0e0",
  minor_service_casing: "#cccccc",
  minor_casing: "#cccccc",
  link_casing: "#cccccc",
  medium_casing: "#cccccc",
  major_casing_late: "#cccccc",
  highway_casing_late: "#cccccc",
  other: "#e0e0e0",
  minor_service: "#e0e0e0",
  minor_a: "#ebebeb",
  minor_b: "#e0e0e0",
  link: "#ebebeb",
  medium: "#ebebeb",
  major_casing_early: "#cccccc",
  major: "#ebebeb",
  highway_casing_early: "#cccccc",
  highway: "#ebebeb",
  railway: "#f5f5f5",
  boundaries: "#5c5c5c",
  waterway_label: "#7a7a7a",
  bridges_other_casing: "#cccccc",
  bridges_minor_casing: "#cccccc",
  bridges_link_casing: "#cccccc",
  bridges_medium_casing: "#cccccc",
  bridges_major_casing: "#cccccc",
  bridges_highway_casing: "#cccccc",
  bridges_other: "#e0e0e0",
  bridges_minor: "#e0e0e0",
  bridges_link: "#ebebeb",
  bridges_medium: "#ebebeb",
  bridges_major: "#ebebeb",
  bridges_highway: "#ebebeb",
  roads_label_minor: "#999999",
  roads_label_minor_halo: "#e0e0e0",
  roads_label_major: "#8f8f8f",
  roads_label_major_halo: "#ebebeb",
  ocean_label: "#7a7a7a",
  peak_label: "#5c5c5c",
  subplace_label: "#7a7a7a",
  subplace_label_halo: "#cccccc",
  city_circle: "#c2c2c2",
  city_circle_stroke: "#7a7a7a",
  city_label: "#474747",
  city_label_halo: "#cccccc",
  state_label: "#999999",
  state_label_halo: "#cccccc",
  country_label: "#858585"
}, ru = {
  background: "#2b2b2b",
  earth: "#141414",
  park_a: "#181818",
  park_b: "#181818",
  hospital: "#1d1d1d",
  industrial: "#101010",
  school: "#111111",
  wood_a: "#1a1a1a",
  wood_b: "#1a1a1a",
  pedestrian: "#191919",
  scrub_a: "#1c1c1c",
  scrub_b: "#1c1c1c",
  glacier: "#191919",
  sand: "#161616",
  beach: "#1f1f1f",
  aerodrome: "#191919",
  runway: "#323232",
  water: "#333333",
  pier: "#0a0a0a",
  zoo: "#191919",
  military: "#121212",
  tunnel_other_casing: "#101010",
  tunnel_minor_casing: "#101010",
  tunnel_link_casing: "#101010",
  tunnel_medium_casing: "#101010",
  tunnel_major_casing: "#101010",
  tunnel_highway_casing: "#101010",
  tunnel_other: "#292929",
  tunnel_minor: "#292929",
  tunnel_link: "#292929",
  tunnel_medium: "#292929",
  tunnel_major: "#292929",
  tunnel_highway: "#292929",
  transit_pier: "#0a0a0a",
  buildings: "#0a0a0a",
  minor_service_casing: "#141414",
  minor_casing: "#141414",
  link_casing: "#141414",
  medium_casing: "#141414",
  major_casing_late: "#141414",
  highway_casing_late: "#141414",
  other: "#1f1f1f",
  minor_service: "#1f1f1f",
  minor_a: "#292929",
  minor_b: "#1f1f1f",
  link: "#1f1f1f",
  medium: "#292929",
  major_casing_early: "#141414",
  major: "#292929",
  highway_casing_early: "#141414",
  highway: "#292929",
  railway: "#292929",
  boundaries: "#707070",
  waterway_label: "#707070",
  bridges_other_casing: "#141414",
  bridges_minor_casing: "#141414",
  bridges_link_casing: "#141414",
  bridges_medium_casing: "#141414",
  bridges_major_casing: "#141414",
  bridges_highway_casing: "#141414",
  bridges_other: "#1f1f1f",
  bridges_minor: "#1f1f1f",
  bridges_link: "#292929",
  bridges_medium: "#292929",
  bridges_major: "#292929",
  bridges_highway: "#292929",
  roads_label_minor: "#525252",
  roads_label_minor_halo: "#141414",
  roads_label_major: "#5c5c5c",
  roads_label_major_halo: "#141414",
  ocean_label: "#707070",
  peak_label: "#707070",
  subplace_label: "#5c5c5c",
  subplace_label_halo: "#141414",
  city_circle: "#000000",
  city_circle_stroke: "#666666",
  city_label: "#999999",
  city_label_halo: "#141414",
  state_label: "#3d3d3d",
  state_label_halo: "#141414",
  country_label: "#707070"
}, ou = {
  light: tu,
  dark: eu,
  white: iu,
  grayscale: nu,
  black: ru
}, su = ou, au = Ht(le()), lu = Ht(jl()), Ee = Ht(le()), cs = (i, s, r) => {
  const a = [];
  for (const u of i) {
    const o = [];
    for (const h of u)
      o.push(h.clone().mult(s).add(r));
    a.push(o);
  }
  return a;
}, Ei = (i, s) => {
  const r = 1 << s;
  return i < 0 ? r + i : i >= r ? i % r : i;
}, hu = class {
  constructor(i, s, r) {
    this.tileCache = i, this.maxDataLevel = s, this.levelDiff = r;
  }
  dataTilesForBounds(i, s) {
    const r = Ut(2, i) / Ut(2, Math.ceil(i)), a = [];
    let u = 1;
    const o = this.tileCache.tileSize;
    if (i < this.levelDiff)
      u = 1 / (1 << this.levelDiff - i) * r, a.push({
        dataTile: { z: 0, x: 0, y: 0 },
        origin: new Ee.default(0, 0),
        scale: u,
        dim: o * u
      });
    else if (i <= this.levelDiff + this.maxDataLevel) {
      const h = 1 << this.levelDiff, c = 256 * r, f = Math.ceil(i) - this.levelDiff, _ = Math.floor(s.minX / h / c), v = Math.floor(s.minY / h / c), p = Math.floor(s.maxX / h / c), y = Math.floor(s.maxY / h / c);
      for (let b = _; b <= p; b++)
        for (let k = v; k <= y; k++) {
          const S = new Ee.default(
            b * h * c,
            k * h * c
          );
          a.push({
            dataTile: {
              z: f,
              x: Ei(b, f),
              y: Ei(k, f)
            },
            origin: S,
            scale: r,
            dim: o * r
          });
        }
    } else {
      const h = 1 << this.levelDiff;
      u = (1 << Math.ceil(i) - this.maxDataLevel - this.levelDiff) * r;
      const c = Math.floor(s.minX / h / 256 / u), f = Math.floor(s.minY / h / 256 / u), _ = Math.floor(s.maxX / h / 256 / u), v = Math.floor(s.maxY / h / 256 / u);
      for (let p = c; p <= _; p++)
        for (let y = f; y <= v; y++) {
          const b = new Ee.default(p * h * 256 * u, y * h * 256 * u);
          a.push({
            dataTile: {
              z: this.maxDataLevel,
              x: Ei(p, this.maxDataLevel),
              y: Ei(y, this.maxDataLevel)
            },
            origin: b,
            scale: u,
            dim: o * u
          });
        }
    }
    return a;
  }
  dataTileForDisplayTile(i) {
    let s, r = 1, a = this.tileCache.tileSize, u;
    if (i.z < this.levelDiff)
      s = { z: 0, x: 0, y: 0 }, r = 1 / (1 << this.levelDiff - i.z), u = new Ee.default(0, 0), a = a * r;
    else if (i.z <= this.levelDiff + this.maxDataLevel) {
      const o = 1 << this.levelDiff;
      s = {
        z: i.z - this.levelDiff,
        x: Math.floor(i.x / o),
        y: Math.floor(i.y / o)
      }, u = new Ee.default(s.x * o * 256, s.y * o * 256);
    } else {
      r = 1 << i.z - this.maxDataLevel - this.levelDiff;
      const o = 1 << this.levelDiff;
      s = {
        z: this.maxDataLevel,
        x: Math.floor(i.x / o / r),
        y: Math.floor(i.y / o / r)
      }, u = new Ee.default(
        s.x * o * r * 256,
        s.y * o * r * 256
      ), a = a * r;
    }
    return { dataTile: s, scale: r, origin: u, dim: a };
  }
  getBbox(i, s) {
    return Ze(this, null, function* () {
      const r = this.dataTilesForBounds(i, s);
      return (yield Promise.all(
        r.map((u) => this.tileCache.get(u.dataTile))
      )).map((u, o) => {
        const h = r[o];
        return {
          data: u,
          z: i,
          dataTile: h.dataTile,
          scale: h.scale,
          dim: h.dim,
          origin: h.origin
        };
      });
    });
  }
  getDisplayTile(i) {
    return Ze(this, null, function* () {
      const s = this.dataTileForDisplayTile(i);
      return {
        data: yield this.tileCache.get(s.dataTile),
        z: i.z,
        dataTile: s.dataTile,
        scale: s.scale,
        origin: s.origin,
        dim: s.dim
      };
    });
  }
}, uu = (i) => {
  const s = (a) => {
    const u = a.levelDiff === void 0 ? 1 : a.levelDiff, o = a.maxDataZoom || 15;
    let h;
    if (typeof a.url == "string")
      a.url.endsWith(".pmtiles") ? h = new fo(a.url, !0) : h = new Uh(a.url, !0);
    else if (a.url)
      h = new fo(a.url, !0);
    else
      throw new Error(`Invalid source ${a.url}`);
    const c = new Vh(h, 256 * 1 << u);
    return new hu(c, o, u);
  }, r = /* @__PURE__ */ new Map();
  if (i.sources)
    for (const a in i.sources)
      r.set(a, s(i.sources[a]));
  else
    r.set("", s(i));
  return r;
}, cu = (i, s, r) => {
  const u = s / 256, o = Math.floor(r.minX / 256), h = Math.floor(r.minY / 256), c = Math.floor(r.maxX / 256), f = Math.floor(r.maxY / 256), _ = Math.log2(u), v = [];
  for (let p = o; p <= c; p++) {
    const y = p % (1 << i);
    for (let b = h; b <= f; b++)
      v.push({
        display: Ae({ z: i, x: y, y: b }),
        key: Ae({
          z: i - _,
          x: Math.floor(y / u),
          y: Math.floor(b / u)
        })
      });
  }
  return v;
}, fu = class {
  constructor(i, s) {
    this.tree = new lu.default(), this.current = /* @__PURE__ */ new Map(), this.dim = i, this.maxLabeledTiles = s;
  }
  hasPrefix(i) {
    for (const s of this.current.keys())
      if (s.startsWith(i))
        return !0;
    return !1;
  }
  has(i) {
    return this.current.has(i);
  }
  size() {
    return this.current.size;
  }
  keys() {
    return this.current.keys();
  }
  searchBbox(i, s) {
    const r = /* @__PURE__ */ new Set();
    for (const a of this.tree.search(i))
      a.indexedLabel.order <= s && r.add(a.indexedLabel);
    return r;
  }
  searchLabel(i, s) {
    const r = /* @__PURE__ */ new Set();
    for (const a of i.bboxes)
      for (const u of this.tree.search(a))
        u.indexedLabel.order <= s && r.add(u.indexedLabel);
    return r;
  }
  bboxCollides(i, s) {
    for (const r of this.tree.search(i))
      if (r.indexedLabel.order <= s)
        return !0;
    return !1;
  }
  labelCollides(i, s) {
    for (const r of i.bboxes)
      for (const a of this.tree.search(r))
        if (a.indexedLabel.order <= s)
          return !0;
    return !1;
  }
  deduplicationCollides(i) {
    if (!i.deduplicationKey || !i.deduplicationDistance)
      return !1;
    const s = i.deduplicationDistance, r = {
      minX: i.anchor.x - s,
      minY: i.anchor.y - s,
      maxX: i.anchor.x + s,
      maxY: i.anchor.y + s
    };
    for (const a of this.tree.search(r))
      if (a.indexedLabel.deduplicationKey === i.deduplicationKey && a.indexedLabel.anchor.dist(i.anchor) < s)
        return !0;
    return !1;
  }
  makeEntry(i) {
    this.current.get(i) && console.log("consistency error 1");
    const s = /* @__PURE__ */ new Set();
    this.current.set(i, s);
  }
  insert(i, s, r) {
    const a = {
      anchor: i.anchor,
      bboxes: i.bboxes,
      draw: i.draw,
      order: s,
      tileKey: r,
      deduplicationKey: i.deduplicationKey,
      deduplicationDistance: i.deduplicationDistance
    };
    let u = this.current.get(r);
    if (!u) {
      const c = /* @__PURE__ */ new Set();
      this.current.set(r, c), u = c;
    }
    u.add(a);
    let o = !1, h = !1;
    for (const c of i.bboxes)
      this.tree.insert({
        minX: c.minX,
        minY: c.minY,
        maxX: c.maxX,
        maxY: c.maxY,
        indexedLabel: a
      }), c.minX < 0 && (o = !0), c.maxX > this.dim && (h = !0);
    if (o || h) {
      const c = o ? this.dim : -this.dim, f = [];
      for (const p of i.bboxes)
        f.push({
          minX: p.minX + c,
          minY: p.minY,
          maxX: p.maxX + c,
          maxY: p.maxY
        });
      const _ = {
        anchor: new au.default(i.anchor.x + c, i.anchor.y),
        bboxes: f,
        draw: i.draw,
        order: s,
        tileKey: r
      }, v = this.current.get(r);
      v && v.add(_);
      for (const p of f)
        this.tree.insert({
          minX: p.minX,
          minY: p.minY,
          maxX: p.maxX,
          maxY: p.maxY,
          indexedLabel: _
        });
    }
  }
  pruneOrNoop(i) {
    const s = i.split(":");
    let r, a = 0, u = 0;
    for (const o of this.current.keys()) {
      const h = o.split(":");
      if (h[3] === s[3]) {
        u++;
        const c = Math.sqrt(
          Ut(+h[0] - +s[0], 2) + Ut(+h[1] - +s[1], 2)
        );
        c > a && (a = c, r = o);
      }
      r && u > this.maxLabeledTiles && this.pruneKey(r);
    }
  }
  pruneKey(i) {
    const s = this.current.get(i);
    if (!s)
      return;
    const r = [];
    for (const a of this.tree.all())
      s.has(a.indexedLabel) && r.push(a);
    for (const a of r)
      this.tree.remove(a);
    this.current.delete(i);
  }
  removeLabel(i) {
    const s = [];
    for (const a of this.tree.all())
      i === a.indexedLabel && s.push(a);
    for (const a of s)
      this.tree.remove(a);
    const r = this.current.get(i.tileKey);
    r && r.delete(i);
  }
}, du = class {
  constructor(i, s, r, a, u) {
    this.index = new fu(256 * 1 << i, a), this.z = i, this.scratch = s, this.labelRules = r, this.callback = u;
  }
  layout(i) {
    const s = performance.now(), r = /* @__PURE__ */ new Set();
    for (const [u, o] of i)
      for (const h of o) {
        const c = `${Ae(h.dataTile)}:${u}`;
        this.index.has(c) || (this.index.makeEntry(c), r.add(c));
      }
    const a = /* @__PURE__ */ new Set();
    for (const [u, o] of this.labelRules.entries()) {
      if (o.visible === !1 || o.minzoom && this.z < o.minzoom || o.maxzoom && this.z > o.maxzoom)
        continue;
      const h = o.dataSource || "", c = i.get(h);
      if (c)
        for (const f of c) {
          const _ = `${Ae(f.dataTile)}:${h}`;
          if (!r.has(_))
            continue;
          const v = f.data.get(o.dataLayer);
          if (v === void 0)
            continue;
          const p = v;
          o.sort && p.sort((b, k) => o.sort ? o.sort(b.props, k.props) : 0);
          const y = {
            index: this.index,
            zoom: this.z,
            scratch: this.scratch,
            order: u,
            overzoom: this.z - f.dataTile.z
          };
          for (const b of p) {
            if (o.filter && !o.filter(this.z, b))
              continue;
            const k = cs(
              b.geom,
              f.scale,
              f.origin
            ), S = o.symbolizer.place(y, k, b);
            if (S)
              for (const B of S) {
                let A = !1;
                if (!(B.deduplicationKey && this.index.deduplicationCollides(B))) {
                  if (this.index.labelCollides(B, 1 / 0)) {
                    if (!this.index.labelCollides(B, u)) {
                      const w = this.index.searchLabel(B, 1 / 0);
                      for (const T of w) {
                        this.index.removeLabel(T);
                        for (const C of T.bboxes)
                          this.findInvalidatedTiles(
                            a,
                            f.dim,
                            C,
                            _
                          );
                      }
                      this.index.insert(B, u, _), A = !0;
                    }
                  } else
                    this.index.insert(B, u, _), A = !0;
                  if (A)
                    for (const w of B.bboxes)
                      (w.maxX > f.origin.x + f.dim || w.minX < f.origin.x || w.minY < f.origin.y || w.maxY > f.origin.y + f.dim) && this.findInvalidatedTiles(
                        a,
                        f.dim,
                        w,
                        _
                      );
                }
              }
          }
        }
    }
    for (const u of r)
      this.index.pruneOrNoop(u);
    return a.size > 0 && this.callback && this.callback(a), performance.now() - s;
  }
  findInvalidatedTiles(i, s, r, a) {
    const u = cu(this.z, s, r);
    for (const o of u)
      o.key !== a && this.index.hasPrefix(o.key) && i.add(o.display);
  }
  add(i) {
    let s = !0;
    for (const [a, u] of i)
      for (const o of u)
        this.index.has(`${Ae(o.dataTile)}:${a}`) || (s = !1);
    return s ? 0 : this.layout(i);
  }
}, po = class {
  constructor(i, s, r, a) {
    this.labelers = /* @__PURE__ */ new Map(), this.scratch = i, this.labelRules = s, this.maxLabeledTiles = r, this.callback = a;
  }
  add(i, s) {
    let r = this.labelers.get(i);
    return r || (r = new du(
      i,
      this.scratch,
      this.labelRules,
      this.maxLabeledTiles,
      this.callback
    ), this.labelers.set(i, r)), r.add(s);
  }
  getIndex(i) {
    const s = this.labelers.get(i);
    if (s)
      return s.index;
  }
}, _u = Ht(le());
function mu(i, s, r, a, u, o, h, c, f) {
  const _ = performance.now();
  i.save(), i.miterLimit = 2;
  for (const v of u) {
    if (v.minzoom && s < v.minzoom || v.maxzoom && s > v.maxzoom)
      continue;
    const p = r.get(v.dataSource || "");
    if (p)
      for (const y of p) {
        const b = y.data.get(v.dataLayer);
        if (b === void 0)
          continue;
        v.symbolizer.before && v.symbolizer.before(i, y.z);
        const k = y.origin;
        y.dim;
        const S = y.scale;
        i.save(), i.translate(k.x - h.x, k.y - h.y);
        for (const B of b) {
          let A = B.geom;
          const w = B.bbox;
          w.maxX * S + k.x < o.minX || w.minX * S + k.x > o.maxX || w.minY * S + k.y > o.maxY || w.maxY * S + k.y < o.minY || v.filter && !v.filter(y.z, B) || (S !== 1 && (A = cs(A, S, new _u.default(0, 0))), v.symbolizer.draw(i, A, y.z, B));
        }
        i.restore();
      }
  }
  if (a) {
    const v = a.searchBbox(o, 1 / 0);
    for (const p of v)
      if (i.save(), i.translate(p.anchor.x - h.x, p.anchor.y - h.y), p.draw(i), i.restore(), f) {
        i.lineWidth = 0.5, i.strokeStyle = f, i.fillStyle = f, i.globalAlpha = 1, i.fillRect(
          p.anchor.x - h.x - 2,
          p.anchor.y - h.y - 2,
          4,
          4
        );
        for (const y of p.bboxes)
          i.strokeRect(
            y.minX - h.x,
            y.minY - h.y,
            y.maxX - y.minX,
            y.maxY - y.minY
          );
      }
  }
  return i.restore(), performance.now() - _;
}
var pu = Ht(le()), gu = (i) => new Promise((s) => {
  setTimeout(() => {
    s();
  }, i);
}), vu = (i) => i.then(
  (s) => ({ status: "fulfilled", value: s }),
  (s) => ({ status: "rejected", reason: s })
), yu = (i = {}) => {
  class s extends L.GridLayer {
    constructor(a = {}) {
      if (a.noWrap && !a.bounds && (a.bounds = [
        [-90, -180],
        [90, 180]
      ]), a.attribution == null && (a.attribution = '<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'), super(a), a.theme) {
        const o = su[a.theme];
        this.paintRules = us(o), this.labelRules = Qh(o), this.backgroundColor = o.background;
      } else
        this.paintRules = a.paintRules || [], this.labelRules = a.labelRules || [], this.backgroundColor = a.backgroundColor;
      this.lastRequestedZ = void 0, this.tasks = a.tasks || [], this.views = uu(a), this.debug = a.debug;
      const u = document.createElement("canvas").getContext("2d");
      this.scratch = u, this.onTilesInvalidated = (o) => {
        for (const h of o)
          this.rerenderTile(h);
      }, this.labelers = new po(
        this.scratch,
        this.labelRules,
        16,
        this.onTilesInvalidated
      ), this.tileSize = 256 * window.devicePixelRatio, this.tileDelay = a.tileDelay || 3, this.lang = a.lang;
    }
    renderTile(a, u, o, h = () => {
    }) {
      return Ze(this, null, function* () {
        this.lastRequestedZ = a.z;
        const c = [];
        for (const [R, N] of this.views) {
          const $ = N.getDisplayTile(a);
          c.push({ key: R, promise: $ });
        }
        const f = yield Promise.all(
          c.map((R) => R.promise.then(
            (N) => ({ status: "fulfilled", value: N, key: R.key }),
            (N) => ({ status: "rejected", reason: N, key: R.key })
          ))
        ), _ = /* @__PURE__ */ new Map();
        for (const R of f)
          R.status === "fulfilled" ? _.set(R.key, [R.value]) : R.reason.name === "AbortError" || console.error(R.reason);
        if (u.key !== o || this.lastRequestedZ !== a.z || (yield Promise.all(this.tasks.map(vu)), u.key !== o) || this.lastRequestedZ !== a.z)
          return;
        const v = this.labelers.add(a.z, _);
        if (u.key !== o || this.lastRequestedZ !== a.z)
          return;
        const p = this.labelers.getIndex(a.z);
        if (!this._map)
          return;
        const y = this._map.getCenter().wrap(), b = this._getTiledPixelBounds(y), S = this._pxBoundsToTileRange(b).getCenter(), B = a.distanceTo(S) * this.tileDelay;
        if (yield gu(B), u.key !== o || this.lastRequestedZ !== a.z)
          return;
        const A = 16, w = {
          minX: 256 * a.x - A,
          minY: 256 * a.y - A,
          maxX: 256 * (a.x + 1) + A,
          maxY: 256 * (a.y + 1) + A
        }, T = new pu.default(256 * a.x, 256 * a.y);
        u.width = this.tileSize, u.height = this.tileSize;
        const C = u.getContext("2d");
        if (!C) {
          console.error("Failed to get Canvas context");
          return;
        }
        C.setTransform(this.tileSize / 256, 0, 0, this.tileSize / 256, 0, 0), C.clearRect(0, 0, 256, 256), this.backgroundColor && (C.save(), C.fillStyle = this.backgroundColor, C.fillRect(0, 0, 256, 256), C.restore());
        let z = 0;
        const Z = this.paintRules;
        if (z = mu(
          C,
          a.z,
          _,
          this.xray ? null : p,
          Z,
          w,
          T,
          !1,
          this.debug
        ), this.debug) {
          C.save(), C.fillStyle = this.debug, C.font = "600 12px sans-serif", C.fillText(`${a.z} ${a.x} ${a.y}`, 4, 14), C.font = "12px sans-serif";
          let R = 28;
          for (const [N, $] of _) {
            const it = $[0].dataTile;
            C.fillText(`${N + (N ? " " : "") + it.z} ${it.x} ${it.y}`, 4, R), R += 14;
          }
          C.font = "600 10px sans-serif", z > 8 && (C.fillText(`${z.toFixed()} ms paint`, 4, R), R += 14), v > 8 && C.fillText(`${v.toFixed()} ms layout`, 4, R), C.strokeStyle = this.debug, C.lineWidth = 0.5, C.beginPath(), C.moveTo(0, 0), C.lineTo(0, 256), C.stroke(), C.lineWidth = 0.5, C.beginPath(), C.moveTo(0, 0), C.lineTo(256, 0), C.stroke(), C.restore();
        }
        h();
      });
    }
    rerenderTile(a) {
      for (const u in this._tiles) {
        const o = this._wrapCoords(
          this._keyToTileCoords(u)
        );
        a === this._tileCoordsToKey(o) && this.renderTile(o, this._tiles[u].el, a);
      }
    }
    clearLayout() {
      this.labelers = new po(
        this.scratch,
        this.labelRules,
        16,
        this.onTilesInvalidated
      );
    }
    rerenderTiles() {
      for (const a in this._tiles) {
        const u = this._wrapCoords(
          this._keyToTileCoords(a)
        ), o = this._tileCoordsToKey(u);
        this.renderTile(u, this._tiles[a].el, o);
      }
    }
    createTile(a, u) {
      const o = L.DomUtil.create("canvas", "leaflet-tile");
      o.lang = this.lang;
      const h = this._tileCoordsToKey(a);
      return o.key = h, this.renderTile(a, o, h, () => {
        u(void 0, o);
      }), o;
    }
    _removeTile(a) {
      const u = this._tiles[a];
      u && (u.el.removed = !0, u.el.key = void 0, L.DomUtil.removeClass(u.el, "leaflet-tile-loaded"), u.el.width = u.el.height = 0, L.DomUtil.remove(u.el), delete this._tiles[a], this.fire("tileunload", {
        tile: u.el,
        coords: this._keyToTileCoords(a)
      }));
    }
  }
  return new s(i);
};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
const bu = {
  background: "#cccccc",
  earth: "#e0e0e0",
  park_a: "#cfddd5",
  park_b: "#9cd3b4",
  hospital: "#e4dad9",
  industrial: "#d1dde1",
  school: "#e4ded7",
  wood_a: "#d0ded0",
  wood_b: "#a0d9a0",
  pedestrian: "#e3e0d4",
  scrub_a: "#cedcd7",
  scrub_b: "#99d2bb",
  glacier: "#e7e7e7",
  sand: "#e2e0d7",
  beach: "#e8e4d0",
  aerodrome: "#dadbdf",
  runway: "#e9e9ed",
  water: "#80deea",
  pier: "#e0e0e0",
  zoo: "#c6dcdc",
  military: "#dcdcdc",
  tunnel_other_casing: "#e0e0e0",
  tunnel_minor_casing: "#e0e0e0",
  tunnel_link_casing: "#e0e0e0",
  tunnel_medium_casing: "#e0e0e0",
  tunnel_major_casing: "#e0e0e0",
  tunnel_highway_casing: "#e0e0e0",
  tunnel_other: "#d5d5d5",
  tunnel_minor: "#d5d5d5",
  tunnel_link: "#d5d5d5",
  tunnel_medium: "#d5d5d5",
  tunnel_major: "#d5d5d5",
  tunnel_highway: "#d5d5d5",
  transit_pier: "#e0e0e0",
  buildings: "#cccccc",
  minor_service_casing: "#e0e0e0",
  minor_casing: "#e0e0e0",
  link_casing: "#e0e0e0",
  medium_casing: "#e0e0e0",
  major_casing_late: "#e0e0e0",
  highway_casing_late: "#e0e0e0",
  other: "#ebebeb",
  minor_service: "#ebebeb",
  minor_a: "#ebebeb",
  minor_b: "#ffffff",
  link: "#ffffff",
  medium: "#f5f5f5",
  major_casing_early: "#e0e0e0",
  major: "#ffffff",
  highway_casing_early: "#e0e0e0",
  highway: "#ffffff",
  railway: "#a7b1b3",
  boundaries: "#adadad",
  waterway_label: "#ffffff",
  bridges_other_casing: "#e0e0e0",
  bridges_minor_casing: "#e0e0e0",
  bridges_link_casing: "#e0e0e0",
  bridges_medium_casing: "#e0e0e0",
  bridges_major_casing: "#e0e0e0",
  bridges_highway_casing: "#e0e0e0",
  bridges_other: "#ebebeb",
  bridges_minor: "#ffffff",
  bridges_link: "#ffffff",
  bridges_medium: "#f0eded",
  bridges_major: "#f5f5f5",
  bridges_highway: "#ffffff",
  roads_label_minor: "#91888b",
  roads_label_minor_halo: "#ffffff",
  roads_label_major: "#938a8d",
  roads_label_major_halo: "#ffffff",
  ocean_label: "#ffffff",
  peak_label: "#7e9aa0",
  subplace_label: "#8f8f8f",
  subplace_label_halo: "#e0e0e0",
  city_circle: "#ffffff",
  city_circle_stroke: "#a3a3a3",
  city_label: "#5c5c5c",
  city_label_halo: "#e0e0e0",
  state_label: "#b3b3b3",
  state_label_halo: "#e0e0e0",
  country_label: "#a3a3a3"
}, wu = {
  background: "#34373d",
  earth: "#1f1f1f",
  park_a: "#232325",
  park_b: "#232325",
  hospital: "#252424",
  industrial: "#222222",
  school: "#262323",
  wood_a: "#202121",
  wood_b: "#202121",
  pedestrian: "#1e1e1e",
  scrub_a: "#222323",
  scrub_b: "#222323",
  glacier: "#1c1c1c",
  sand: "#212123",
  beach: "#28282a",
  aerodrome: "#1e1e1e",
  runway: "#333333",
  water: "#34373d",
  pier: "#222222",
  zoo: "#222323",
  military: "#242323",
  tunnel_other_casing: "#141414",
  tunnel_minor_casing: "#141414",
  tunnel_link_casing: "#141414",
  tunnel_medium_casing: "#141414",
  tunnel_major_casing: "#141414",
  tunnel_highway_casing: "#141414",
  tunnel_other: "#292929",
  tunnel_minor: "#292929",
  tunnel_link: "#292929",
  tunnel_medium: "#292929",
  tunnel_major: "#292929",
  tunnel_highway: "#292929",
  transit_pier: "#333333",
  buildings: "#111111",
  minor_service_casing: "#1f1f1f",
  minor_casing: "#1f1f1f",
  link_casing: "#1f1f1f",
  medium_casing: "#1f1f1f",
  major_casing_late: "#1f1f1f",
  highway_casing_late: "#1f1f1f",
  other: "#333333",
  minor_service: "#333333",
  minor_a: "#3d3d3d",
  minor_b: "#333333",
  link: "#3d3d3d",
  medium: "#3d3d3d",
  major_casing_early: "#1f1f1f",
  major: "#3d3d3d",
  highway_casing_early: "#1f1f1f",
  highway: "#474747",
  railway: "#000000",
  boundaries: "#5b6374",
  waterway_label: "#717784",
  bridges_other_casing: "#2b2b2b",
  bridges_minor_casing: "#1f1f1f",
  bridges_link_casing: "#1f1f1f",
  bridges_medium_casing: "#1f1f1f",
  bridges_major_casing: "#1f1f1f",
  bridges_highway_casing: "#1f1f1f",
  bridges_other: "#333333",
  bridges_minor: "#333333",
  bridges_link: "#3d3d3d",
  bridges_medium: "#3d3d3d",
  bridges_major: "#3d3d3d",
  bridges_highway: "#474747",
  roads_label_minor: "#525252",
  roads_label_minor_halo: "#1f1f1f",
  roads_label_major: "#666666",
  roads_label_major_halo: "#1f1f1f",
  ocean_label: "#717784",
  peak_label: "#898080",
  subplace_label: "#525252",
  subplace_label_halo: "#1f1f1f",
  city_circle: "#000000",
  city_circle_stroke: "#7a7a7a",
  city_label: "#7a7a7a",
  city_label_halo: "#212121",
  state_label: "#3d3d3d",
  state_label_halo: "#1f1f1f",
  country_label: "#5c5c5c"
}, xu = {
  background: "#ffffff",
  earth: "#ffffff",
  park_a: "#fcfcfc",
  park_b: "#fcfcfc",
  hospital: "#f8f8f8",
  industrial: "#fcfcfc",
  school: "#f8f8f8",
  wood_a: "#fafafa",
  wood_b: "#fafafa",
  pedestrian: "#fdfdfd",
  scrub_a: "#fafafa",
  scrub_b: "#fafafa",
  glacier: "#fcfcfc",
  sand: "#fafafa",
  beach: "#f6f6f6",
  aerodrome: "#fdfdfd",
  runway: "#efefef",
  water: "#dcdcdc",
  pier: "#f5f5f5",
  zoo: "#f7f7f7",
  military: "#fcfcfc",
  tunnel_other_casing: "#d6d6d6",
  tunnel_minor_casing: "#fcfcfc",
  tunnel_link_casing: "#fcfcfc",
  tunnel_medium_casing: "#fcfcfc",
  tunnel_major_casing: "#fcfcfc",
  tunnel_highway_casing: "#fcfcfc",
  tunnel_other: "#d6d6d6",
  tunnel_minor: "#d6d6d6",
  tunnel_link: "#d6d6d6",
  tunnel_medium: "#d6d6d6",
  tunnel_major: "#d6d6d6",
  tunnel_highway: "#d6d6d6",
  transit_pier: "#efefef",
  buildings: "#efefef",
  minor_service_casing: "#ffffff",
  minor_casing: "#ffffff",
  link_casing: "#ffffff",
  medium_casing: "#ffffff",
  major_casing_late: "#ffffff",
  highway_casing_late: "#ffffff",
  other: "#f5f5f5",
  minor_service: "#f5f5f5",
  minor_a: "#ebebeb",
  minor_b: "#f5f5f5",
  link: "#ebebeb",
  medium: "#ebebeb",
  major_casing_early: "#ffffff",
  major: "#ebebeb",
  highway_casing_early: "#ffffff",
  highway: "#ebebeb",
  railway: "#d6d6d6",
  boundaries: "#adadad",
  waterway_label: "#adadad",
  bridges_other_casing: "#ffffff",
  bridges_minor_casing: "#ffffff",
  bridges_link_casing: "#ffffff",
  bridges_medium_casing: "#ffffff",
  bridges_major_casing: "#ffffff",
  bridges_highway_casing: "#ffffff",
  bridges_other: "#f5f5f5",
  bridges_minor: "#f5f5f5",
  bridges_link: "#ebebeb",
  bridges_medium: "#ebebeb",
  bridges_major: "#ebebeb",
  bridges_highway: "#ebebeb",
  roads_label_minor: "#adadad",
  roads_label_minor_halo: "#ffffff",
  roads_label_major: "#999999",
  roads_label_major_halo: "#ffffff",
  ocean_label: "#adadad",
  peak_label: "#adadad",
  subplace_label: "#8f8f8f",
  subplace_label_halo: "#ffffff",
  city_circle: "#ffffff",
  city_circle_stroke: "#adadad",
  city_label: "#5c5c5c",
  city_label_halo: "#ffffff",
  state_label: "#b3b3b3",
  state_label_halo: "#ffffff",
  country_label: "#b8b8b8"
}, Lu = {
  background: "#a3a3a3",
  earth: "#cccccc",
  park_a: "#c2c2c2",
  park_b: "#c2c2c2",
  hospital: "#d0d0d0",
  industrial: "#c6c6c6",
  school: "#d0d0d0",
  wood_a: "#c2c2c2",
  wood_b: "#c2c2c2",
  pedestrian: "#c4c4c4",
  scrub_a: "#c2c2c2",
  scrub_b: "#c2c2c2",
  glacier: "#d2d2d2",
  sand: "#d2d2d2",
  beach: "#d2d2d2",
  aerodrome: "#c9c9c9",
  runway: "#f5f5f5",
  water: "#a3a3a3",
  pier: "#b8b8b8",
  zoo: "#c7c7c7",
  military: "#bfbfbf",
  tunnel_other_casing: "#b8b8b8",
  tunnel_minor_casing: "#b8b8b8",
  tunnel_link_casing: "#b8b8b8",
  tunnel_medium_casing: "#b8b8b8",
  tunnel_major_casing: "#b8b8b8",
  tunnel_highway_casing: "#b8b8b8",
  tunnel_other: "#d6d6d6",
  tunnel_minor: "#d6d6d6",
  tunnel_link: "#d6d6d6",
  tunnel_medium: "#d6d6d6",
  tunnel_major: "#d6d6d6",
  tunnel_highway: "#d6d6d6",
  transit_pier: "#b8b8b8",
  buildings: "#e0e0e0",
  minor_service_casing: "#cccccc",
  minor_casing: "#cccccc",
  link_casing: "#cccccc",
  medium_casing: "#cccccc",
  major_casing_late: "#cccccc",
  highway_casing_late: "#cccccc",
  other: "#e0e0e0",
  minor_service: "#e0e0e0",
  minor_a: "#ebebeb",
  minor_b: "#e0e0e0",
  link: "#ebebeb",
  medium: "#ebebeb",
  major_casing_early: "#cccccc",
  major: "#ebebeb",
  highway_casing_early: "#cccccc",
  highway: "#ebebeb",
  railway: "#f5f5f5",
  boundaries: "#5c5c5c",
  waterway_label: "#7a7a7a",
  bridges_other_casing: "#cccccc",
  bridges_minor_casing: "#cccccc",
  bridges_link_casing: "#cccccc",
  bridges_medium_casing: "#cccccc",
  bridges_major_casing: "#cccccc",
  bridges_highway_casing: "#cccccc",
  bridges_other: "#e0e0e0",
  bridges_minor: "#e0e0e0",
  bridges_link: "#ebebeb",
  bridges_medium: "#ebebeb",
  bridges_major: "#ebebeb",
  bridges_highway: "#ebebeb",
  roads_label_minor: "#999999",
  roads_label_minor_halo: "#e0e0e0",
  roads_label_major: "#8f8f8f",
  roads_label_major_halo: "#ebebeb",
  ocean_label: "#7a7a7a",
  peak_label: "#5c5c5c",
  subplace_label: "#7a7a7a",
  subplace_label_halo: "#cccccc",
  city_circle: "#c2c2c2",
  city_circle_stroke: "#7a7a7a",
  city_label: "#474747",
  city_label_halo: "#cccccc",
  state_label: "#999999",
  state_label_halo: "#cccccc",
  country_label: "#858585"
}, Pu = {
  background: "#2b2b2b",
  earth: "#141414",
  park_a: "#181818",
  park_b: "#181818",
  hospital: "#1d1d1d",
  industrial: "#101010",
  school: "#111111",
  wood_a: "#1a1a1a",
  wood_b: "#1a1a1a",
  pedestrian: "#191919",
  scrub_a: "#1c1c1c",
  scrub_b: "#1c1c1c",
  glacier: "#191919",
  sand: "#161616",
  beach: "#1f1f1f",
  aerodrome: "#191919",
  runway: "#323232",
  water: "#333333",
  pier: "#0a0a0a",
  zoo: "#191919",
  military: "#121212",
  tunnel_other_casing: "#101010",
  tunnel_minor_casing: "#101010",
  tunnel_link_casing: "#101010",
  tunnel_medium_casing: "#101010",
  tunnel_major_casing: "#101010",
  tunnel_highway_casing: "#101010",
  tunnel_other: "#292929",
  tunnel_minor: "#292929",
  tunnel_link: "#292929",
  tunnel_medium: "#292929",
  tunnel_major: "#292929",
  tunnel_highway: "#292929",
  transit_pier: "#0a0a0a",
  buildings: "#0a0a0a",
  minor_service_casing: "#141414",
  minor_casing: "#141414",
  link_casing: "#141414",
  medium_casing: "#141414",
  major_casing_late: "#141414",
  highway_casing_late: "#141414",
  other: "#1f1f1f",
  minor_service: "#1f1f1f",
  minor_a: "#292929",
  minor_b: "#1f1f1f",
  link: "#1f1f1f",
  medium: "#292929",
  major_casing_early: "#141414",
  major: "#292929",
  highway_casing_early: "#141414",
  highway: "#292929",
  railway: "#292929",
  boundaries: "#707070",
  waterway_label: "#707070",
  bridges_other_casing: "#141414",
  bridges_minor_casing: "#141414",
  bridges_link_casing: "#141414",
  bridges_medium_casing: "#141414",
  bridges_major_casing: "#141414",
  bridges_highway_casing: "#141414",
  bridges_other: "#1f1f1f",
  bridges_minor: "#1f1f1f",
  bridges_link: "#292929",
  bridges_medium: "#292929",
  bridges_major: "#292929",
  bridges_highway: "#292929",
  roads_label_minor: "#525252",
  roads_label_minor_halo: "#141414",
  roads_label_major: "#5c5c5c",
  roads_label_major_halo: "#141414",
  ocean_label: "#707070",
  peak_label: "#707070",
  subplace_label: "#5c5c5c",
  subplace_label_halo: "#141414",
  city_circle: "#000000",
  city_circle_stroke: "#666666",
  city_label: "#999999",
  city_label_halo: "#141414",
  state_label: "#3d3d3d",
  state_label_halo: "#141414",
  country_label: "#707070"
}, Tu = {
  light: bu,
  dark: wu,
  white: xu,
  grayscale: Lu,
  black: Pu
}, { light: ku } = Tu, Cu = (i, s, r) => Object.freeze({ instance: i, context: s, container: r }), Mu = ({ ...i }, s) => {
  const r = yu({ paint_rules: i.paintRules, ...i });
  return Cu(r, s);
}, Su = Io(
  Mu,
  Bo
), fs = ({ attribution: i, url: s, format: r, ...a }) => {
  var h;
  const u = ce(Dt);
  let o = /* @__PURE__ */ gt(ml, { attribution: i, url: s, ...a });
  return r === "pmtiles" && (o = /* @__PURE__ */ gt(
    Su,
    {
      attribution: i,
      url: s,
      paintRules: ((h = u.map) == null ? void 0 : h.tiles) && us({ ...ku, ...u.map.tiles }),
      ...a
    }
  )), o;
};
fs.propTypes = {
  attribution: pt.string,
  url: pt.string.isRequired,
  format: pt.oneOf(["pmtiles"])
};
const zu = si(fl)`
  ${({ theme: i }) => {
  var s, r;
  return `
      ${(r = (s = i == null ? void 0 : i.global) == null ? void 0 : s.font) != null && r.family ? `font-family: ${i.global.font.family};` : ""}
      height: 100%;
    `;
}}
`, Eu = fe(
  ({
    center: i = [0, 0],
    children: s,
    // level 20 is the highest zoom level per OpenStreetMap docs
    // (https://wiki.openstreetmap.org/wiki/Zoom_levels)
    maxZoom: r = 20,
    minZoom: a = 3,
    scrollWheelZoom: u = !0,
    tileLayer: o,
    theme: h,
    zoom: c = 1,
    zoomControl: f = !1,
    ..._
  }, v) => {
    const p = ce(Dt), y = ri(p, { map: ri(Ml, h) });
    return /* @__PURE__ */ gt(Dt.Provider, { value: y, children: /* @__PURE__ */ Bn(
      zu,
      {
        attributionControl: !1,
        center: i,
        ref: v,
        scrollWheelZoom: u,
        maxZoom: r,
        minZoom: a,
        zoom: c,
        zoomControl: f,
        ..._,
        children: [
          /* @__PURE__ */ gt(ul, { position: "bottomright", prefix: !1 }),
          /* @__PURE__ */ gt(
            fs,
            {
              attribution: o.attribution,
              url: o.url,
              format: o.format,
              ...o
            }
          ),
          s
        ]
      }
    ) });
  }
);
Eu.propTypes = {
  center: pt.array,
  children: pt.any,
  scrollWheelZoom: pt.string || pt.bool,
  maxZoom: pt.number,
  minZoom: pt.number,
  tileLayer: pt.shape({
    attribution: pt.string,
    url: pt.string.isRequired,
    format: pt.oneOf(["pmtiles"])
  }).isRequired,
  theme: pt.object,
  zoom: pt.number,
  zoomControl: pt.bool
};
let Oi;
const Ou = new Uint8Array(16);
function Iu() {
  if (!Oi && (Oi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Oi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Oi(Ou);
}
const Mt = [];
for (let i = 0; i < 256; ++i)
  Mt.push((i + 256).toString(16).slice(1));
function Bu(i, s = 0) {
  return Mt[i[s + 0]] + Mt[i[s + 1]] + Mt[i[s + 2]] + Mt[i[s + 3]] + "-" + Mt[i[s + 4]] + Mt[i[s + 5]] + "-" + Mt[i[s + 6]] + Mt[i[s + 7]] + "-" + Mt[i[s + 8]] + Mt[i[s + 9]] + "-" + Mt[i[s + 10]] + Mt[i[s + 11]] + Mt[i[s + 12]] + Mt[i[s + 13]] + Mt[i[s + 14]] + Mt[i[s + 15]];
}
const Au = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), go = {
  randomUUID: Au
};
function Zu(i, s, r) {
  if (go.randomUUID && !s && !i)
    return go.randomUUID();
  i = i || {};
  const a = i.random || (i.rng || Iu)();
  return a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, Bu(a);
}
const Ru = ({ icon: i, popup: s, ...r }) => {
  var h;
  const a = ce(Dt), u = (h = i == null ? void 0 : i.props) == null ? void 0 : h.kind, o = s ? /* @__PURE__ */ gt(_l, { children: /* @__PURE__ */ gt(_s, { children: s }) }) : void 0;
  return /* @__PURE__ */ gt(
    dl,
    {
      icon: Zi.divIcon({
        // 'grommet-marker' class prevents leaflet default divIcon styles
        className: "grommet-marker",
        html: kn.renderToString(
          /* @__PURE__ */ gt(Dt.Provider, { value: a, children: i || /* @__PURE__ */ gt(ds, {}) })
        )
      }),
      kind: u,
      ...r,
      children: o
    },
    Zu()
  );
};
Ru.propTypes = {
  icon: pt.node,
  popup: pt.node
};
var vo = { exports: {} };
(function(i, s) {
  (function(r, a) {
    a(s);
  })(bo, function(r) {
    var a = L.MarkerClusterGroup = L.FeatureGroup.extend({
      options: {
        maxClusterRadius: 80,
        //A cluster will cover at most this many pixels from its center
        iconCreateFunction: null,
        clusterPane: L.Marker.prototype.options.pane,
        spiderfyOnEveryZoom: !1,
        spiderfyOnMaxZoom: !0,
        showCoverageOnHover: !0,
        zoomToBoundsOnClick: !0,
        singleMarkerMode: !1,
        disableClusteringAtZoom: null,
        // Setting this to false prevents the removal of any clusters outside of the viewpoint, which
        // is the default behaviour for performance reasons.
        removeOutsideVisibleBounds: !0,
        // Set to false to disable all animations (zoom and spiderfy).
        // If false, option animateAddingMarkers below has no effect.
        // If L.DomUtil.TRANSITION is falsy, this option has no effect.
        animate: !0,
        //Whether to animate adding markers after adding the MarkerClusterGroup to the map
        // If you are adding individual markers set to true, if adding bulk markers leave false for massive performance gains.
        animateAddingMarkers: !1,
        // Make it possible to provide custom function to calculate spiderfy shape positions
        spiderfyShapePositions: null,
        //Increase to increase the distance away that spiderfied markers appear from the center
        spiderfyDistanceMultiplier: 1,
        // Make it possible to specify a polyline options on a spider leg
        spiderLegPolylineOptions: { weight: 1.5, color: "#222", opacity: 0.5 },
        // When bulk adding layers, adds markers in chunks. Means addLayers may not add all the layers in the call, others will be loaded during setTimeouts
        chunkedLoading: !1,
        chunkInterval: 200,
        // process markers for a maximum of ~ n milliseconds (then trigger the chunkProgress callback)
        chunkDelay: 50,
        // at the end of each interval, give n milliseconds back to system/browser
        chunkProgress: null,
        // progress callback: function(processed, total, elapsed) (e.g. for a progress indicator)
        //Options to pass to the L.Polygon constructor
        polygonOptions: {}
      },
      initialize: function(o) {
        L.Util.setOptions(this, o), this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction), this._featureGroup = L.featureGroup(), this._featureGroup.addEventParent(this), this._nonPointGroup = L.featureGroup(), this._nonPointGroup.addEventParent(this), this._inZoomAnimation = 0, this._needsClustering = [], this._needsRemoving = [], this._currentShownBounds = null, this._queue = [], this._childMarkerEventHandlers = {
          dragstart: this._childMarkerDragStart,
          move: this._childMarkerMoved,
          dragend: this._childMarkerDragEnd
        };
        var h = L.DomUtil.TRANSITION && this.options.animate;
        L.extend(this, h ? this._withAnimation : this._noAnimation), this._markerCluster = h ? L.MarkerCluster : L.MarkerClusterNonAnimated;
      },
      addLayer: function(o) {
        if (o instanceof L.LayerGroup)
          return this.addLayers([o]);
        if (!o.getLatLng)
          return this._nonPointGroup.addLayer(o), this.fire("layeradd", { layer: o }), this;
        if (!this._map)
          return this._needsClustering.push(o), this.fire("layeradd", { layer: o }), this;
        if (this.hasLayer(o))
          return this;
        this._unspiderfy && this._unspiderfy(), this._addLayer(o, this._maxZoom), this.fire("layeradd", { layer: o }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons();
        var h = o, c = this._zoom;
        if (o.__parent)
          for (; h.__parent._zoom >= c; )
            h = h.__parent;
        return this._currentShownBounds.contains(h.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(o, h) : this._animationAddLayerNonAnimated(o, h)), this;
      },
      removeLayer: function(o) {
        return o instanceof L.LayerGroup ? this.removeLayers([o]) : o.getLatLng ? this._map ? o.__parent ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(o)), this._removeLayer(o, !0), this.fire("layerremove", { layer: o }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), o.off(this._childMarkerEventHandlers, this), this._featureGroup.hasLayer(o) && (this._featureGroup.removeLayer(o), o.clusterShow && o.clusterShow()), this) : this : (!this._arraySplice(this._needsClustering, o) && this.hasLayer(o) && this._needsRemoving.push({ layer: o, latlng: o._latlng }), this.fire("layerremove", { layer: o }), this) : (this._nonPointGroup.removeLayer(o), this.fire("layerremove", { layer: o }), this);
      },
      //Takes an array of markers and adds them in bulk
      addLayers: function(o, h) {
        if (!L.Util.isArray(o))
          return this.addLayer(o);
        var c = this._featureGroup, f = this._nonPointGroup, _ = this.options.chunkedLoading, v = this.options.chunkInterval, p = this.options.chunkProgress, y = o.length, b = 0, k = !0, S;
        if (this._map) {
          var B = (/* @__PURE__ */ new Date()).getTime(), A = L.bind(function() {
            var T = (/* @__PURE__ */ new Date()).getTime();
            for (this._map && this._unspiderfy && this._unspiderfy(); b < y; b++) {
              if (_ && b % 200 === 0) {
                var C = (/* @__PURE__ */ new Date()).getTime() - T;
                if (C > v)
                  break;
              }
              if (S = o[b], S instanceof L.LayerGroup) {
                k && (o = o.slice(), k = !1), this._extractNonGroupLayers(S, o), y = o.length;
                continue;
              }
              if (!S.getLatLng) {
                f.addLayer(S), h || this.fire("layeradd", { layer: S });
                continue;
              }
              if (!this.hasLayer(S) && (this._addLayer(S, this._maxZoom), h || this.fire("layeradd", { layer: S }), S.__parent && S.__parent.getChildCount() === 2)) {
                var z = S.__parent.getAllChildMarkers(), Z = z[0] === S ? z[1] : z[0];
                c.removeLayer(Z);
              }
            }
            p && p(b, y, (/* @__PURE__ */ new Date()).getTime() - B), b === y ? (this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(A, this.options.chunkDelay);
          }, this);
          A();
        } else
          for (var w = this._needsClustering; b < y; b++) {
            if (S = o[b], S instanceof L.LayerGroup) {
              k && (o = o.slice(), k = !1), this._extractNonGroupLayers(S, o), y = o.length;
              continue;
            }
            if (!S.getLatLng) {
              f.addLayer(S);
              continue;
            }
            this.hasLayer(S) || w.push(S);
          }
        return this;
      },
      //Takes an array of markers and removes them in bulk
      removeLayers: function(o) {
        var h, c, f = o.length, _ = this._featureGroup, v = this._nonPointGroup, p = !0;
        if (!this._map) {
          for (h = 0; h < f; h++) {
            if (c = o[h], c instanceof L.LayerGroup) {
              p && (o = o.slice(), p = !1), this._extractNonGroupLayers(c, o), f = o.length;
              continue;
            }
            this._arraySplice(this._needsClustering, c), v.removeLayer(c), this.hasLayer(c) && this._needsRemoving.push({ layer: c, latlng: c._latlng }), this.fire("layerremove", { layer: c });
          }
          return this;
        }
        if (this._unspiderfy) {
          this._unspiderfy();
          var y = o.slice(), b = f;
          for (h = 0; h < b; h++) {
            if (c = y[h], c instanceof L.LayerGroup) {
              this._extractNonGroupLayers(c, y), b = y.length;
              continue;
            }
            this._unspiderfyLayer(c);
          }
        }
        for (h = 0; h < f; h++) {
          if (c = o[h], c instanceof L.LayerGroup) {
            p && (o = o.slice(), p = !1), this._extractNonGroupLayers(c, o), f = o.length;
            continue;
          }
          if (!c.__parent) {
            v.removeLayer(c), this.fire("layerremove", { layer: c });
            continue;
          }
          this._removeLayer(c, !0, !0), this.fire("layerremove", { layer: c }), _.hasLayer(c) && (_.removeLayer(c), c.clusterShow && c.clusterShow());
        }
        return this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), this;
      },
      //Removes all layers from the MarkerClusterGroup
      clearLayers: function() {
        return this._map || (this._needsClustering = [], this._needsRemoving = [], delete this._gridClusters, delete this._gridUnclustered), this._noanimationUnspiderfy && this._noanimationUnspiderfy(), this._featureGroup.clearLayers(), this._nonPointGroup.clearLayers(), this.eachLayer(function(o) {
          o.off(this._childMarkerEventHandlers, this), delete o.__parent;
        }, this), this._map && this._generateInitialClusters(), this;
      },
      //Override FeatureGroup.getBounds as it doesn't work
      getBounds: function() {
        var o = new L.LatLngBounds();
        this._topClusterLevel && o.extend(this._topClusterLevel._bounds);
        for (var h = this._needsClustering.length - 1; h >= 0; h--)
          o.extend(this._needsClustering[h].getLatLng());
        return o.extend(this._nonPointGroup.getBounds()), o;
      },
      //Overrides LayerGroup.eachLayer
      eachLayer: function(o, h) {
        var c = this._needsClustering.slice(), f = this._needsRemoving, _, v, p;
        for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(c), v = c.length - 1; v >= 0; v--) {
          for (_ = !0, p = f.length - 1; p >= 0; p--)
            if (f[p].layer === c[v]) {
              _ = !1;
              break;
            }
          _ && o.call(h, c[v]);
        }
        this._nonPointGroup.eachLayer(o, h);
      },
      //Overrides LayerGroup.getLayers
      getLayers: function() {
        var o = [];
        return this.eachLayer(function(h) {
          o.push(h);
        }), o;
      },
      //Overrides LayerGroup.getLayer, WARNING: Really bad performance
      getLayer: function(o) {
        var h = null;
        return o = parseInt(o, 10), this.eachLayer(function(c) {
          L.stamp(c) === o && (h = c);
        }), h;
      },
      //Returns true if the given layer is in this MarkerClusterGroup
      hasLayer: function(o) {
        if (!o)
          return !1;
        var h, c = this._needsClustering;
        for (h = c.length - 1; h >= 0; h--)
          if (c[h] === o)
            return !0;
        for (c = this._needsRemoving, h = c.length - 1; h >= 0; h--)
          if (c[h].layer === o)
            return !1;
        return !!(o.__parent && o.__parent._group === this) || this._nonPointGroup.hasLayer(o);
      },
      //Zoom down to show the given layer (spiderfying if necessary) then calls the callback
      zoomToShowLayer: function(o, h) {
        var c = this._map;
        typeof h != "function" && (h = function() {
        });
        var f = function() {
          (c.hasLayer(o) || c.hasLayer(o.__parent)) && !this._inZoomAnimation && (this._map.off("moveend", f, this), this.off("animationend", f, this), c.hasLayer(o) ? h() : o.__parent._icon && (this.once("spiderfied", h, this), o.__parent.spiderfy()));
        };
        o._icon && this._map.getBounds().contains(o.getLatLng()) ? h() : o.__parent._zoom < Math.round(this._map._zoom) ? (this._map.on("moveend", f, this), this._map.panTo(o.getLatLng())) : (this._map.on("moveend", f, this), this.on("animationend", f, this), o.__parent.zoomToBounds());
      },
      //Overrides FeatureGroup.onAdd
      onAdd: function(o) {
        this._map = o;
        var h, c, f;
        if (!isFinite(this._map.getMaxZoom()))
          throw "Map has no maxZoom specified";
        for (this._featureGroup.addTo(o), this._nonPointGroup.addTo(o), this._gridClusters || this._generateInitialClusters(), this._maxLat = o.options.crs.projection.MAX_LATITUDE, h = 0, c = this._needsRemoving.length; h < c; h++)
          f = this._needsRemoving[h], f.newlatlng = f.layer._latlng, f.layer._latlng = f.latlng;
        for (h = 0, c = this._needsRemoving.length; h < c; h++)
          f = this._needsRemoving[h], this._removeLayer(f.layer, !0), f.layer._latlng = f.newlatlng;
        this._needsRemoving = [], this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds(), this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), c = this._needsClustering, this._needsClustering = [], this.addLayers(c, !0);
      },
      //Overrides FeatureGroup.onRemove
      onRemove: function(o) {
        o.off("zoomend", this._zoomEnd, this), o.off("moveend", this._moveEnd, this), this._unbindEvents(), this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""), this._spiderfierOnRemove && this._spiderfierOnRemove(), delete this._maxLat, this._hideCoverage(), this._featureGroup.remove(), this._nonPointGroup.remove(), this._featureGroup.clearLayers(), this._map = null;
      },
      getVisibleParent: function(o) {
        for (var h = o; h && !h._icon; )
          h = h.__parent;
        return h || null;
      },
      //Remove the given object from the given array
      _arraySplice: function(o, h) {
        for (var c = o.length - 1; c >= 0; c--)
          if (o[c] === h)
            return o.splice(c, 1), !0;
      },
      /**
       * Removes a marker from all _gridUnclustered zoom levels, starting at the supplied zoom.
       * @param marker to be removed from _gridUnclustered.
       * @param z integer bottom start zoom level (included)
       * @private
       */
      _removeFromGridUnclustered: function(o, h) {
        for (var c = this._map, f = this._gridUnclustered, _ = Math.floor(this._map.getMinZoom()); h >= _ && f[h].removeObject(o, c.project(o.getLatLng(), h)); h--)
          ;
      },
      _childMarkerDragStart: function(o) {
        o.target.__dragStart = o.target._latlng;
      },
      _childMarkerMoved: function(o) {
        if (!this._ignoreMove && !o.target.__dragStart) {
          var h = o.target._popup && o.target._popup.isOpen();
          this._moveChild(o.target, o.oldLatLng, o.latlng), h && o.target.openPopup();
        }
      },
      _moveChild: function(o, h, c) {
        o._latlng = h, this.removeLayer(o), o._latlng = c, this.addLayer(o);
      },
      _childMarkerDragEnd: function(o) {
        var h = o.target.__dragStart;
        delete o.target.__dragStart, h && this._moveChild(o.target, h, o.target._latlng);
      },
      //Internal function for removing a marker from everything.
      //dontUpdateMap: set to true if you will handle updating the map manually (for bulk functions)
      _removeLayer: function(o, h, c) {
        var f = this._gridClusters, _ = this._gridUnclustered, v = this._featureGroup, p = this._map, y = Math.floor(this._map.getMinZoom());
        h && this._removeFromGridUnclustered(o, this._maxZoom);
        var b = o.__parent, k = b._markers, S;
        for (this._arraySplice(k, o); b && (b._childCount--, b._boundsNeedUpdate = !0, !(b._zoom < y)); )
          h && b._childCount <= 1 ? (S = b._markers[0] === o ? b._markers[1] : b._markers[0], f[b._zoom].removeObject(b, p.project(b._cLatLng, b._zoom)), _[b._zoom].addObject(S, p.project(S.getLatLng(), b._zoom)), this._arraySplice(b.__parent._childClusters, b), b.__parent._markers.push(S), S.__parent = b.__parent, b._icon && (v.removeLayer(b), c || v.addLayer(S))) : b._iconNeedsUpdate = !0, b = b.__parent;
        delete o.__parent;
      },
      _isOrIsParent: function(o, h) {
        for (; h; ) {
          if (o === h)
            return !0;
          h = h.parentNode;
        }
        return !1;
      },
      //Override L.Evented.fire
      fire: function(o, h, c) {
        if (h && h.layer instanceof L.MarkerCluster) {
          if (h.originalEvent && this._isOrIsParent(h.layer._icon, h.originalEvent.relatedTarget))
            return;
          o = "cluster" + o;
        }
        L.FeatureGroup.prototype.fire.call(this, o, h, c);
      },
      //Override L.Evented.listens
      listens: function(o, h) {
        return L.FeatureGroup.prototype.listens.call(this, o, h) || L.FeatureGroup.prototype.listens.call(this, "cluster" + o, h);
      },
      //Default functionality
      _defaultIconCreateFunction: function(o) {
        var h = o.getChildCount(), c = " marker-cluster-";
        return h < 10 ? c += "small" : h < 100 ? c += "medium" : c += "large", new L.DivIcon({ html: "<div><span>" + h + "</span></div>", className: "marker-cluster" + c, iconSize: new L.Point(40, 40) });
      },
      _bindEvents: function() {
        var o = this._map, h = this.options.spiderfyOnMaxZoom, c = this.options.showCoverageOnHover, f = this.options.zoomToBoundsOnClick, _ = this.options.spiderfyOnEveryZoom;
        (h || f || _) && this.on("clusterclick clusterkeypress", this._zoomOrSpiderfy, this), c && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), o.on("zoomend", this._hideCoverage, this));
      },
      _zoomOrSpiderfy: function(o) {
        var h = o.layer, c = h;
        if (!(o.type === "clusterkeypress" && o.originalEvent && o.originalEvent.keyCode !== 13)) {
          for (; c._childClusters.length === 1; )
            c = c._childClusters[0];
          c._zoom === this._maxZoom && c._childCount === h._childCount && this.options.spiderfyOnMaxZoom ? h.spiderfy() : this.options.zoomToBoundsOnClick && h.zoomToBounds(), this.options.spiderfyOnEveryZoom && h.spiderfy(), o.originalEvent && o.originalEvent.keyCode === 13 && this._map._container.focus();
        }
      },
      _showCoverage: function(o) {
        var h = this._map;
        this._inZoomAnimation || (this._shownPolygon && h.removeLayer(this._shownPolygon), o.layer.getChildCount() > 2 && o.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(o.layer.getConvexHull(), this.options.polygonOptions), h.addLayer(this._shownPolygon)));
      },
      _hideCoverage: function() {
        this._shownPolygon && (this._map.removeLayer(this._shownPolygon), this._shownPolygon = null);
      },
      _unbindEvents: function() {
        var o = this.options.spiderfyOnMaxZoom, h = this.options.showCoverageOnHover, c = this.options.zoomToBoundsOnClick, f = this.options.spiderfyOnEveryZoom, _ = this._map;
        (o || c || f) && this.off("clusterclick clusterkeypress", this._zoomOrSpiderfy, this), h && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), _.off("zoomend", this._hideCoverage, this));
      },
      _zoomEnd: function() {
        this._map && (this._mergeSplitClusters(), this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds());
      },
      _moveEnd: function() {
        if (!this._inZoomAnimation) {
          var o = this._getExpandedVisibleBounds();
          this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, o), this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), o), this._currentShownBounds = o;
        }
      },
      _generateInitialClusters: function() {
        var o = Math.ceil(this._map.getMaxZoom()), h = Math.floor(this._map.getMinZoom()), c = this.options.maxClusterRadius, f = c;
        typeof c != "function" && (f = function() {
          return c;
        }), this.options.disableClusteringAtZoom !== null && (o = this.options.disableClusteringAtZoom - 1), this._maxZoom = o, this._gridClusters = {}, this._gridUnclustered = {};
        for (var _ = o; _ >= h; _--)
          this._gridClusters[_] = new L.DistanceGrid(f(_)), this._gridUnclustered[_] = new L.DistanceGrid(f(_));
        this._topClusterLevel = new this._markerCluster(this, h - 1);
      },
      //Zoom: Zoom to start adding at (Pass this._maxZoom to start at the bottom)
      _addLayer: function(o, h) {
        var c = this._gridClusters, f = this._gridUnclustered, _ = Math.floor(this._map.getMinZoom()), v, p;
        for (this.options.singleMarkerMode && this._overrideMarkerIcon(o), o.on(this._childMarkerEventHandlers, this); h >= _; h--) {
          v = this._map.project(o.getLatLng(), h);
          var y = c[h].getNearObject(v);
          if (y) {
            y._addChild(o), o.__parent = y;
            return;
          }
          if (y = f[h].getNearObject(v), y) {
            var b = y.__parent;
            b && this._removeLayer(y, !1);
            var k = new this._markerCluster(this, h, y, o);
            c[h].addObject(k, this._map.project(k._cLatLng, h)), y.__parent = k, o.__parent = k;
            var S = k;
            for (p = h - 1; p > b._zoom; p--)
              S = new this._markerCluster(this, p, S), c[p].addObject(S, this._map.project(y.getLatLng(), p));
            b._addChild(S), this._removeFromGridUnclustered(y, h);
            return;
          }
          f[h].addObject(o, v);
        }
        this._topClusterLevel._addChild(o), o.__parent = this._topClusterLevel;
      },
      /**
       * Refreshes the icon of all "dirty" visible clusters.
       * Non-visible "dirty" clusters will be updated when they are added to the map.
       * @private
       */
      _refreshClustersIcons: function() {
        this._featureGroup.eachLayer(function(o) {
          o instanceof L.MarkerCluster && o._iconNeedsUpdate && o._updateIcon();
        });
      },
      //Enqueue code to fire after the marker expand/contract has happened
      _enqueue: function(o) {
        this._queue.push(o), this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300));
      },
      _processQueue: function() {
        for (var o = 0; o < this._queue.length; o++)
          this._queue[o].call(this);
        this._queue.length = 0, clearTimeout(this._queueTimeout), this._queueTimeout = null;
      },
      //Merge and split any existing clusters that are too big or small
      _mergeSplitClusters: function() {
        var o = Math.round(this._map._zoom);
        this._processQueue(), this._zoom < o && this._currentShownBounds.intersects(this._getExpandedVisibleBounds()) ? (this._animationStart(), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds()), this._animationZoomIn(this._zoom, o)) : this._zoom > o ? (this._animationStart(), this._animationZoomOut(this._zoom, o)) : this._moveEnd();
      },
      //Gets the maps visible bounds expanded in each direction by the size of the screen (so the user cannot see an area we do not cover in one pan)
      _getExpandedVisibleBounds: function() {
        if (this.options.removeOutsideVisibleBounds) {
          if (L.Browser.mobile)
            return this._checkBoundsMaxLat(this._map.getBounds());
        } else return this._mapBoundsInfinite;
        return this._checkBoundsMaxLat(this._map.getBounds().pad(1));
      },
      /**
       * Expands the latitude to Infinity (or -Infinity) if the input bounds reach the map projection maximum defined latitude
       * (in the case of Web/Spherical Mercator, it is 85.0511287798 / see https://en.wikipedia.org/wiki/Web_Mercator#Formulas).
       * Otherwise, the removeOutsideVisibleBounds option will remove markers beyond that limit, whereas the same markers without
       * this option (or outside MCG) will have their position floored (ceiled) by the projection and rendered at that limit,
       * making the user think that MCG "eats" them and never displays them again.
       * @param bounds L.LatLngBounds
       * @returns {L.LatLngBounds}
       * @private
       */
      _checkBoundsMaxLat: function(o) {
        var h = this._maxLat;
        return h !== void 0 && (o.getNorth() >= h && (o._northEast.lat = 1 / 0), o.getSouth() <= -h && (o._southWest.lat = -1 / 0)), o;
      },
      //Shared animation code
      _animationAddLayerNonAnimated: function(o, h) {
        if (h === o)
          this._featureGroup.addLayer(o);
        else if (h._childCount === 2) {
          h._addToMap();
          var c = h.getAllChildMarkers();
          this._featureGroup.removeLayer(c[0]), this._featureGroup.removeLayer(c[1]);
        } else
          h._updateIcon();
      },
      /**
       * Extracts individual (i.e. non-group) layers from a Layer Group.
       * @param group to extract layers from.
       * @param output {Array} in which to store the extracted layers.
       * @returns {*|Array}
       * @private
       */
      _extractNonGroupLayers: function(o, h) {
        var c = o.getLayers(), f = 0, _;
        for (h = h || []; f < c.length; f++) {
          if (_ = c[f], _ instanceof L.LayerGroup) {
            this._extractNonGroupLayers(_, h);
            continue;
          }
          h.push(_);
        }
        return h;
      },
      /**
       * Implements the singleMarkerMode option.
       * @param layer Marker to re-style using the Clusters iconCreateFunction.
       * @returns {L.Icon} The newly created icon.
       * @private
       */
      _overrideMarkerIcon: function(o) {
        var h = o.options.icon = this.options.iconCreateFunction({
          getChildCount: function() {
            return 1;
          },
          getAllChildMarkers: function() {
            return [o];
          }
        });
        return h;
      }
    });
    L.MarkerClusterGroup.include({
      _mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-1 / 0, -1 / 0), new L.LatLng(1 / 0, 1 / 0))
    }), L.MarkerClusterGroup.include({
      _noAnimation: {
        //Non Animated versions of everything
        _animationStart: function() {
        },
        _animationZoomIn: function(o, h) {
          this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), o), this._topClusterLevel._recursivelyAddChildrenToMap(null, h, this._getExpandedVisibleBounds()), this.fire("animationend");
        },
        _animationZoomOut: function(o, h) {
          this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), o), this._topClusterLevel._recursivelyAddChildrenToMap(null, h, this._getExpandedVisibleBounds()), this.fire("animationend");
        },
        _animationAddLayer: function(o, h) {
          this._animationAddLayerNonAnimated(o, h);
        }
      },
      _withAnimation: {
        //Animated versions here
        _animationStart: function() {
          this._map._mapPane.className += " leaflet-cluster-anim", this._inZoomAnimation++;
        },
        _animationZoomIn: function(o, h) {
          var c = this._getExpandedVisibleBounds(), f = this._featureGroup, _ = Math.floor(this._map.getMinZoom()), v;
          this._ignoreMove = !0, this._topClusterLevel._recursively(c, o, _, function(p) {
            var y = p._latlng, b = p._markers, k;
            for (c.contains(y) || (y = null), p._isSingleParent() && o + 1 === h ? (f.removeLayer(p), p._recursivelyAddChildrenToMap(null, h, c)) : (p.clusterHide(), p._recursivelyAddChildrenToMap(y, h, c)), v = b.length - 1; v >= 0; v--)
              k = b[v], c.contains(k._latlng) || f.removeLayer(k);
          }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(c, h), f.eachLayer(function(p) {
            !(p instanceof L.MarkerCluster) && p._icon && p.clusterShow();
          }), this._topClusterLevel._recursively(c, o, h, function(p) {
            p._recursivelyRestoreChildPositions(h);
          }), this._ignoreMove = !1, this._enqueue(function() {
            this._topClusterLevel._recursively(c, o, _, function(p) {
              f.removeLayer(p), p.clusterShow();
            }), this._animationEnd();
          });
        },
        _animationZoomOut: function(o, h) {
          this._animationZoomOutSingle(this._topClusterLevel, o - 1, h), this._topClusterLevel._recursivelyAddChildrenToMap(null, h, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), o, this._getExpandedVisibleBounds());
        },
        _animationAddLayer: function(o, h) {
          var c = this, f = this._featureGroup;
          f.addLayer(o), h !== o && (h._childCount > 2 ? (h._updateIcon(), this._forceLayout(), this._animationStart(), o._setPos(this._map.latLngToLayerPoint(h.getLatLng())), o.clusterHide(), this._enqueue(function() {
            f.removeLayer(o), o.clusterShow(), c._animationEnd();
          })) : (this._forceLayout(), c._animationStart(), c._animationZoomOutSingle(h, this._map.getMaxZoom(), this._zoom)));
        }
      },
      // Private methods for animated versions.
      _animationZoomOutSingle: function(o, h, c) {
        var f = this._getExpandedVisibleBounds(), _ = Math.floor(this._map.getMinZoom());
        o._recursivelyAnimateChildrenInAndAddSelfToMap(f, _, h + 1, c);
        var v = this;
        this._forceLayout(), o._recursivelyBecomeVisible(f, c), this._enqueue(function() {
          if (o._childCount === 1) {
            var p = o._markers[0];
            this._ignoreMove = !0, p.setLatLng(p.getLatLng()), this._ignoreMove = !1, p.clusterShow && p.clusterShow();
          } else
            o._recursively(f, c, _, function(y) {
              y._recursivelyRemoveChildrenFromMap(f, _, h + 1);
            });
          v._animationEnd();
        });
      },
      _animationEnd: function() {
        this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend");
      },
      //Force a browser layout of stuff in the map
      // Should apply the current opacity and location to all elements so we can update them again for an animation
      _forceLayout: function() {
        L.Util.falseFn(document.body.offsetWidth);
      }
    }), L.markerClusterGroup = function(o) {
      return new L.MarkerClusterGroup(o);
    };
    var u = L.MarkerCluster = L.Marker.extend({
      options: L.Icon.prototype.options,
      initialize: function(o, h, c, f) {
        L.Marker.prototype.initialize.call(
          this,
          c ? c._cLatLng || c.getLatLng() : new L.LatLng(0, 0),
          { icon: this, pane: o.options.clusterPane }
        ), this._group = o, this._zoom = h, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._bounds = new L.LatLngBounds(), c && this._addChild(c), f && this._addChild(f);
      },
      //Recursively retrieve all child markers of this cluster
      getAllChildMarkers: function(o, h) {
        o = o || [];
        for (var c = this._childClusters.length - 1; c >= 0; c--)
          this._childClusters[c].getAllChildMarkers(o, h);
        for (var f = this._markers.length - 1; f >= 0; f--)
          h && this._markers[f].__dragStart || o.push(this._markers[f]);
        return o;
      },
      //Returns the count of how many child markers we have
      getChildCount: function() {
        return this._childCount;
      },
      //Zoom to the minimum of showing all of the child markers, or the extents of this cluster
      zoomToBounds: function(o) {
        for (var h = this._childClusters.slice(), c = this._group._map, f = c.getBoundsZoom(this._bounds), _ = this._zoom + 1, v = c.getZoom(), p; h.length > 0 && f > _; ) {
          _++;
          var y = [];
          for (p = 0; p < h.length; p++)
            y = y.concat(h[p]._childClusters);
          h = y;
        }
        f > _ ? this._group._map.setView(this._latlng, _) : f <= v ? this._group._map.setView(this._latlng, v + 1) : this._group._map.fitBounds(this._bounds, o);
      },
      getBounds: function() {
        var o = new L.LatLngBounds();
        return o.extend(this._bounds), o;
      },
      _updateIcon: function() {
        this._iconNeedsUpdate = !0, this._icon && this.setIcon(this);
      },
      //Cludge for Icon, we pretend to be an icon for performance
      createIcon: function() {
        return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this), this._iconNeedsUpdate = !1), this._iconObj.createIcon();
      },
      createShadow: function() {
        return this._iconObj.createShadow();
      },
      _addChild: function(o, h) {
        this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._setClusterCenter(o), o instanceof L.MarkerCluster ? (h || (this._childClusters.push(o), o.__parent = this), this._childCount += o._childCount) : (h || this._markers.push(o), this._childCount++), this.__parent && this.__parent._addChild(o, !0);
      },
      /**
       * Makes sure the cluster center is set. If not, uses the child center if it is a cluster, or the marker position.
       * @param child L.MarkerCluster|L.Marker that will be used as cluster center if not defined yet.
       * @private
       */
      _setClusterCenter: function(o) {
        this._cLatLng || (this._cLatLng = o._cLatLng || o._latlng);
      },
      /**
       * Assigns impossible bounding values so that the next extend entirely determines the new bounds.
       * This method avoids having to trash the previous L.LatLngBounds object and to create a new one, which is much slower for this class.
       * As long as the bounds are not extended, most other methods would probably fail, as they would with bounds initialized but not extended.
       * @private
       */
      _resetBounds: function() {
        var o = this._bounds;
        o._southWest && (o._southWest.lat = 1 / 0, o._southWest.lng = 1 / 0), o._northEast && (o._northEast.lat = -1 / 0, o._northEast.lng = -1 / 0);
      },
      _recalculateBounds: function() {
        var o = this._markers, h = this._childClusters, c = 0, f = 0, _ = this._childCount, v, p, y, b;
        if (_ !== 0) {
          for (this._resetBounds(), v = 0; v < o.length; v++)
            y = o[v]._latlng, this._bounds.extend(y), c += y.lat, f += y.lng;
          for (v = 0; v < h.length; v++)
            p = h[v], p._boundsNeedUpdate && p._recalculateBounds(), this._bounds.extend(p._bounds), y = p._wLatLng, b = p._childCount, c += y.lat * b, f += y.lng * b;
          this._latlng = this._wLatLng = new L.LatLng(c / _, f / _), this._boundsNeedUpdate = !1;
        }
      },
      //Set our markers position as given and add it to the map
      _addToMap: function(o) {
        o && (this._backupLatlng = this._latlng, this.setLatLng(o)), this._group._featureGroup.addLayer(this);
      },
      _recursivelyAnimateChildrenIn: function(o, h, c) {
        this._recursively(
          o,
          this._group._map.getMinZoom(),
          c - 1,
          function(f) {
            var _ = f._markers, v, p;
            for (v = _.length - 1; v >= 0; v--)
              p = _[v], p._icon && (p._setPos(h), p.clusterHide());
          },
          function(f) {
            var _ = f._childClusters, v, p;
            for (v = _.length - 1; v >= 0; v--)
              p = _[v], p._icon && (p._setPos(h), p.clusterHide());
          }
        );
      },
      _recursivelyAnimateChildrenInAndAddSelfToMap: function(o, h, c, f) {
        this._recursively(
          o,
          f,
          h,
          function(_) {
            _._recursivelyAnimateChildrenIn(o, _._group._map.latLngToLayerPoint(_.getLatLng()).round(), c), _._isSingleParent() && c - 1 === f ? (_.clusterShow(), _._recursivelyRemoveChildrenFromMap(o, h, c)) : _.clusterHide(), _._addToMap();
          }
        );
      },
      _recursivelyBecomeVisible: function(o, h) {
        this._recursively(o, this._group._map.getMinZoom(), h, null, function(c) {
          c.clusterShow();
        });
      },
      _recursivelyAddChildrenToMap: function(o, h, c) {
        this._recursively(
          c,
          this._group._map.getMinZoom() - 1,
          h,
          function(f) {
            if (h !== f._zoom)
              for (var _ = f._markers.length - 1; _ >= 0; _--) {
                var v = f._markers[_];
                c.contains(v._latlng) && (o && (v._backupLatlng = v.getLatLng(), v.setLatLng(o), v.clusterHide && v.clusterHide()), f._group._featureGroup.addLayer(v));
              }
          },
          function(f) {
            f._addToMap(o);
          }
        );
      },
      _recursivelyRestoreChildPositions: function(o) {
        for (var h = this._markers.length - 1; h >= 0; h--) {
          var c = this._markers[h];
          c._backupLatlng && (c.setLatLng(c._backupLatlng), delete c._backupLatlng);
        }
        if (o - 1 === this._zoom)
          for (var f = this._childClusters.length - 1; f >= 0; f--)
            this._childClusters[f]._restorePosition();
        else
          for (var _ = this._childClusters.length - 1; _ >= 0; _--)
            this._childClusters[_]._recursivelyRestoreChildPositions(o);
      },
      _restorePosition: function() {
        this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng);
      },
      //exceptBounds: If set, don't remove any markers/clusters in it
      _recursivelyRemoveChildrenFromMap: function(o, h, c, f) {
        var _, v;
        this._recursively(
          o,
          h - 1,
          c - 1,
          function(p) {
            for (v = p._markers.length - 1; v >= 0; v--)
              _ = p._markers[v], (!f || !f.contains(_._latlng)) && (p._group._featureGroup.removeLayer(_), _.clusterShow && _.clusterShow());
          },
          function(p) {
            for (v = p._childClusters.length - 1; v >= 0; v--)
              _ = p._childClusters[v], (!f || !f.contains(_._latlng)) && (p._group._featureGroup.removeLayer(_), _.clusterShow && _.clusterShow());
          }
        );
      },
      //Run the given functions recursively to this and child clusters
      // boundsToApplyTo: a L.LatLngBounds representing the bounds of what clusters to recurse in to
      // zoomLevelToStart: zoom level to start running functions (inclusive)
      // zoomLevelToStop: zoom level to stop running functions (inclusive)
      // runAtEveryLevel: function that takes an L.MarkerCluster as an argument that should be applied on every level
      // runAtBottomLevel: function that takes an L.MarkerCluster as an argument that should be applied at only the bottom level
      _recursively: function(o, h, c, f, _) {
        var v = this._childClusters, p = this._zoom, y, b;
        if (h <= p && (f && f(this), _ && p === c && _(this)), p < h || p < c)
          for (y = v.length - 1; y >= 0; y--)
            b = v[y], b._boundsNeedUpdate && b._recalculateBounds(), o.intersects(b._bounds) && b._recursively(o, h, c, f, _);
      },
      //Returns true if we are the parent of only one cluster and that cluster is the same as us
      _isSingleParent: function() {
        return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
      }
    });
    L.Marker.include({
      clusterHide: function() {
        var o = this.options.opacity;
        return this.setOpacity(0), this.options.opacity = o, this;
      },
      clusterShow: function() {
        return this.setOpacity(this.options.opacity);
      }
    }), L.DistanceGrid = function(o) {
      this._cellSize = o, this._sqCellSize = o * o, this._grid = {}, this._objectPoint = {};
    }, L.DistanceGrid.prototype = {
      addObject: function(o, h) {
        var c = this._getCoord(h.x), f = this._getCoord(h.y), _ = this._grid, v = _[f] = _[f] || {}, p = v[c] = v[c] || [], y = L.Util.stamp(o);
        this._objectPoint[y] = h, p.push(o);
      },
      updateObject: function(o, h) {
        this.removeObject(o), this.addObject(o, h);
      },
      //Returns true if the object was found
      removeObject: function(o, h) {
        var c = this._getCoord(h.x), f = this._getCoord(h.y), _ = this._grid, v = _[f] = _[f] || {}, p = v[c] = v[c] || [], y, b;
        for (delete this._objectPoint[L.Util.stamp(o)], y = 0, b = p.length; y < b; y++)
          if (p[y] === o)
            return p.splice(y, 1), b === 1 && delete v[c], !0;
      },
      eachObject: function(o, h) {
        var c, f, _, v, p, y, b, k = this._grid;
        for (c in k) {
          p = k[c];
          for (f in p)
            for (y = p[f], _ = 0, v = y.length; _ < v; _++)
              b = o.call(h, y[_]), b && (_--, v--);
        }
      },
      getNearObject: function(o) {
        var h = this._getCoord(o.x), c = this._getCoord(o.y), f, _, v, p, y, b, k, S, B = this._objectPoint, A = this._sqCellSize, w = null;
        for (f = c - 1; f <= c + 1; f++)
          if (p = this._grid[f], p) {
            for (_ = h - 1; _ <= h + 1; _++)
              if (y = p[_], y)
                for (v = 0, b = y.length; v < b; v++)
                  k = y[v], S = this._sqDist(B[L.Util.stamp(k)], o), (S < A || S <= A && w === null) && (A = S, w = k);
          }
        return w;
      },
      _getCoord: function(o) {
        var h = Math.floor(o / this._cellSize);
        return isFinite(h) ? h : o;
      },
      _sqDist: function(o, h) {
        var c = h.x - o.x, f = h.y - o.y;
        return c * c + f * f;
      }
    }, function() {
      L.QuickHull = {
        /*
         * @param {Object} cpt a point to be measured from the baseline
         * @param {Array} bl the baseline, as represented by a two-element
         *   array of latlng objects.
         * @returns {Number} an approximate distance measure
         */
        getDistant: function(o, h) {
          var c = h[1].lat - h[0].lat, f = h[0].lng - h[1].lng;
          return f * (o.lat - h[0].lat) + c * (o.lng - h[0].lng);
        },
        /*
         * @param {Array} baseLine a two-element array of latlng objects
         *   representing the baseline to project from
         * @param {Array} latLngs an array of latlng objects
         * @returns {Object} the maximum point and all new points to stay
         *   in consideration for the hull.
         */
        findMostDistantPointFromBaseLine: function(o, h) {
          var c = 0, f = null, _ = [], v, p, y;
          for (v = h.length - 1; v >= 0; v--) {
            if (p = h[v], y = this.getDistant(p, o), y > 0)
              _.push(p);
            else
              continue;
            y > c && (c = y, f = p);
          }
          return { maxPoint: f, newPoints: _ };
        },
        /*
         * Given a baseline, compute the convex hull of latLngs as an array
         * of latLngs.
         *
         * @param {Array} latLngs
         * @returns {Array}
         */
        buildConvexHull: function(o, h) {
          var c = [], f = this.findMostDistantPointFromBaseLine(o, h);
          return f.maxPoint ? (c = c.concat(
            this.buildConvexHull([o[0], f.maxPoint], f.newPoints)
          ), c = c.concat(
            this.buildConvexHull([f.maxPoint, o[1]], f.newPoints)
          ), c) : [o[0]];
        },
        /*
         * Given an array of latlngs, compute a convex hull as an array
         * of latlngs
         *
         * @param {Array} latLngs
         * @returns {Array}
         */
        getConvexHull: function(o) {
          var h = !1, c = !1, f = !1, _ = !1, v = null, p = null, y = null, b = null, k = null, S = null, B;
          for (B = o.length - 1; B >= 0; B--) {
            var A = o[B];
            (h === !1 || A.lat > h) && (v = A, h = A.lat), (c === !1 || A.lat < c) && (p = A, c = A.lat), (f === !1 || A.lng > f) && (y = A, f = A.lng), (_ === !1 || A.lng < _) && (b = A, _ = A.lng);
          }
          c !== h ? (S = p, k = v) : (S = b, k = y);
          var w = [].concat(
            this.buildConvexHull([S, k], o),
            this.buildConvexHull([k, S], o)
          );
          return w;
        }
      };
    }(), L.MarkerCluster.include({
      getConvexHull: function() {
        var o = this.getAllChildMarkers(), h = [], c, f;
        for (f = o.length - 1; f >= 0; f--)
          c = o[f].getLatLng(), h.push(c);
        return L.QuickHull.getConvexHull(h);
      }
    }), L.MarkerCluster.include({
      _2PI: Math.PI * 2,
      _circleFootSeparation: 25,
      //related to circumference of circle
      _circleStartAngle: 0,
      _spiralFootSeparation: 28,
      //related to size of spiral (experiment!)
      _spiralLengthStart: 11,
      _spiralLengthFactor: 5,
      _circleSpiralSwitchover: 9,
      //show spiral instead of circle from this marker count upwards.
      // 0 -> always spiral; Infinity -> always circle
      spiderfy: function() {
        if (!(this._group._spiderfied === this || this._group._inZoomAnimation)) {
          var o = this.getAllChildMarkers(null, !0), h = this._group, c = h._map, f = c.latLngToLayerPoint(this._latlng), _;
          this._group._unspiderfy(), this._group._spiderfied = this, this._group.options.spiderfyShapePositions ? _ = this._group.options.spiderfyShapePositions(o.length, f) : o.length >= this._circleSpiralSwitchover ? _ = this._generatePointsSpiral(o.length, f) : (f.y += 10, _ = this._generatePointsCircle(o.length, f)), this._animationSpiderfy(o, _);
        }
      },
      unspiderfy: function(o) {
        this._group._inZoomAnimation || (this._animationUnspiderfy(o), this._group._spiderfied = null);
      },
      _generatePointsCircle: function(o, h) {
        var c = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + o), f = c / this._2PI, _ = this._2PI / o, v = [], p, y;
        for (f = Math.max(f, 35), v.length = o, p = 0; p < o; p++)
          y = this._circleStartAngle + p * _, v[p] = new L.Point(h.x + f * Math.cos(y), h.y + f * Math.sin(y))._round();
        return v;
      },
      _generatePointsSpiral: function(o, h) {
        var c = this._group.options.spiderfyDistanceMultiplier, f = c * this._spiralLengthStart, _ = c * this._spiralFootSeparation, v = c * this._spiralLengthFactor * this._2PI, p = 0, y = [], b;
        for (y.length = o, b = o; b >= 0; b--)
          b < o && (y[b] = new L.Point(h.x + f * Math.cos(p), h.y + f * Math.sin(p))._round()), p += _ / f + b * 5e-4, f += v / p;
        return y;
      },
      _noanimationUnspiderfy: function() {
        var o = this._group, h = o._map, c = o._featureGroup, f = this.getAllChildMarkers(null, !0), _, v;
        for (o._ignoreMove = !0, this.setOpacity(1), v = f.length - 1; v >= 0; v--)
          _ = f[v], c.removeLayer(_), _._preSpiderfyLatlng && (_.setLatLng(_._preSpiderfyLatlng), delete _._preSpiderfyLatlng), _.setZIndexOffset && _.setZIndexOffset(0), _._spiderLeg && (h.removeLayer(_._spiderLeg), delete _._spiderLeg);
        o.fire("unspiderfied", {
          cluster: this,
          markers: f
        }), o._ignoreMove = !1, o._spiderfied = null;
      }
    }), L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
      _animationSpiderfy: function(o, h) {
        var c = this._group, f = c._map, _ = c._featureGroup, v = this._group.options.spiderLegPolylineOptions, p, y, b, k;
        for (c._ignoreMove = !0, p = 0; p < o.length; p++)
          k = f.layerPointToLatLng(h[p]), y = o[p], b = new L.Polyline([this._latlng, k], v), f.addLayer(b), y._spiderLeg = b, y._preSpiderfyLatlng = y._latlng, y.setLatLng(k), y.setZIndexOffset && y.setZIndexOffset(1e6), _.addLayer(y);
        this.setOpacity(0.3), c._ignoreMove = !1, c.fire("spiderfied", {
          cluster: this,
          markers: o
        });
      },
      _animationUnspiderfy: function() {
        this._noanimationUnspiderfy();
      }
    }), L.MarkerCluster.include({
      _animationSpiderfy: function(o, h) {
        var c = this, f = this._group, _ = f._map, v = f._featureGroup, p = this._latlng, y = _.latLngToLayerPoint(p), b = L.Path.SVG, k = L.extend({}, this._group.options.spiderLegPolylineOptions), S = k.opacity, B, A, w, T, C, z;
        for (S === void 0 && (S = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity), b ? (k.opacity = 0, k.className = (k.className || "") + " leaflet-cluster-spider-leg") : k.opacity = S, f._ignoreMove = !0, B = 0; B < o.length; B++)
          A = o[B], z = _.layerPointToLatLng(h[B]), w = new L.Polyline([p, z], k), _.addLayer(w), A._spiderLeg = w, b && (T = w._path, C = T.getTotalLength() + 0.1, T.style.strokeDasharray = C, T.style.strokeDashoffset = C), A.setZIndexOffset && A.setZIndexOffset(1e6), A.clusterHide && A.clusterHide(), v.addLayer(A), A._setPos && A._setPos(y);
        for (f._forceLayout(), f._animationStart(), B = o.length - 1; B >= 0; B--)
          z = _.layerPointToLatLng(h[B]), A = o[B], A._preSpiderfyLatlng = A._latlng, A.setLatLng(z), A.clusterShow && A.clusterShow(), b && (w = A._spiderLeg, T = w._path, T.style.strokeDashoffset = 0, w.setStyle({ opacity: S }));
        this.setOpacity(0.3), f._ignoreMove = !1, setTimeout(function() {
          f._animationEnd(), f.fire("spiderfied", {
            cluster: c,
            markers: o
          });
        }, 200);
      },
      _animationUnspiderfy: function(o) {
        var h = this, c = this._group, f = c._map, _ = c._featureGroup, v = o ? f._latLngToNewLayerPoint(this._latlng, o.zoom, o.center) : f.latLngToLayerPoint(this._latlng), p = this.getAllChildMarkers(null, !0), y = L.Path.SVG, b, k, S, B, A, w;
        for (c._ignoreMove = !0, c._animationStart(), this.setOpacity(1), k = p.length - 1; k >= 0; k--)
          b = p[k], b._preSpiderfyLatlng && (b.closePopup(), b.setLatLng(b._preSpiderfyLatlng), delete b._preSpiderfyLatlng, w = !0, b._setPos && (b._setPos(v), w = !1), b.clusterHide && (b.clusterHide(), w = !1), w && _.removeLayer(b), y && (S = b._spiderLeg, B = S._path, A = B.getTotalLength() + 0.1, B.style.strokeDashoffset = A, S.setStyle({ opacity: 0 })));
        c._ignoreMove = !1, setTimeout(function() {
          var T = 0;
          for (k = p.length - 1; k >= 0; k--)
            b = p[k], b._spiderLeg && T++;
          for (k = p.length - 1; k >= 0; k--)
            b = p[k], b._spiderLeg && (b.clusterShow && b.clusterShow(), b.setZIndexOffset && b.setZIndexOffset(0), T > 1 && _.removeLayer(b), f.removeLayer(b._spiderLeg), delete b._spiderLeg);
          c._animationEnd(), c.fire("unspiderfied", {
            cluster: h,
            markers: p
          });
        }, 200);
      }
    }), L.MarkerClusterGroup.include({
      //The MarkerCluster currently spiderfied (if any)
      _spiderfied: null,
      unspiderfy: function() {
        this._unspiderfy.apply(this, arguments);
      },
      _spiderfierOnAdd: function() {
        this._map.on("click", this._unspiderfyWrapper, this), this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this), this._map.on("zoomend", this._noanimationUnspiderfy, this), L.Browser.touch || this._map.getRenderer(this);
      },
      _spiderfierOnRemove: function() {
        this._map.off("click", this._unspiderfyWrapper, this), this._map.off("zoomstart", this._unspiderfyZoomStart, this), this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._map.off("zoomend", this._noanimationUnspiderfy, this), this._noanimationUnspiderfy();
      },
      //On zoom start we add a zoomanim handler so that we are guaranteed to be last (after markers are animated)
      //This means we can define the animation they do rather than Markers doing an animation to their actual location
      _unspiderfyZoomStart: function() {
        this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this);
      },
      _unspiderfyZoomAnim: function(o) {
        L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(o));
      },
      _unspiderfyWrapper: function() {
        this._unspiderfy();
      },
      _unspiderfy: function(o) {
        this._spiderfied && this._spiderfied.unspiderfy(o);
      },
      _noanimationUnspiderfy: function() {
        this._spiderfied && this._spiderfied._noanimationUnspiderfy();
      },
      //If the given layer is currently being spiderfied then we unspiderfy it so it isn't on the map anymore etc
      _unspiderfyLayer: function(o) {
        o._spiderLeg && (this._featureGroup.removeLayer(o), o.clusterShow && o.clusterShow(), o.setZIndexOffset && o.setZIndexOffset(0), this._map.removeLayer(o._spiderLeg), delete o._spiderLeg);
      }
    }), L.MarkerClusterGroup.include({
      /**
       * Updates the icon of all clusters which are parents of the given marker(s).
       * In singleMarkerMode, also updates the given marker(s) icon.
       * @param layers L.MarkerClusterGroup|L.LayerGroup|Array(L.Marker)|Map(L.Marker)|
       * L.MarkerCluster|L.Marker (optional) list of markers (or single marker) whose parent
       * clusters need to be updated. If not provided, retrieves all child markers of this.
       * @returns {L.MarkerClusterGroup}
       */
      refreshClusters: function(o) {
        return o ? o instanceof L.MarkerClusterGroup ? o = o._topClusterLevel.getAllChildMarkers() : o instanceof L.LayerGroup ? o = o._layers : o instanceof L.MarkerCluster ? o = o.getAllChildMarkers() : o instanceof L.Marker && (o = [o]) : o = this._topClusterLevel.getAllChildMarkers(), this._flagParentsIconsNeedUpdate(o), this._refreshClustersIcons(), this.options.singleMarkerMode && this._refreshSingleMarkerModeMarkers(o), this;
      },
      /**
       * Simply flags all parent clusters of the given markers as having a "dirty" icon.
       * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
       * @private
       */
      _flagParentsIconsNeedUpdate: function(o) {
        var h, c;
        for (h in o)
          for (c = o[h].__parent; c; )
            c._iconNeedsUpdate = !0, c = c.__parent;
      },
      /**
       * Re-draws the icon of the supplied markers.
       * To be used in singleMarkerMode only.
       * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
       * @private
       */
      _refreshSingleMarkerModeMarkers: function(o) {
        var h, c;
        for (h in o)
          c = o[h], this.hasLayer(c) && c.setIcon(this._overrideMarkerIcon(c));
      }
    }), L.Marker.include({
      /**
       * Updates the given options in the marker's icon and refreshes the marker.
       * @param options map object of icon options.
       * @param directlyRefreshClusters boolean (optional) true to trigger
       * MCG.refreshClustersOf() right away with this single marker.
       * @returns {L.Marker}
       */
      refreshIconOptions: function(o, h) {
        var c = this.options.icon;
        return L.setOptions(c, o), this.setIcon(c), h && this.__parent && this.__parent._group.refreshClusters(this), this;
      }
    }), r.MarkerClusterGroup = a, r.MarkerCluster = u, Object.defineProperty(r, "__esModule", { value: !0 });
  });
})(vo, vo.exports);
const Du = (i, s, r) => Object.freeze({ instance: i, context: s, container: r }), ju = (i, s) => Object.freeze({ ...i, ...s }), Fu = ({ ...i }, s) => {
  const r = new Zi.MarkerClusterGroup({
    showCoverageOnHover: !1,
    zoomToBoundsOnClick: !1,
    ...i
  });
  return Du(
    r,
    ju(s, { layerContainer: r })
  );
}, Nu = ll(Fu), Uu = ({ icon: i, popup: s, ...r }) => {
  const a = ce(Dt);
  return /* @__PURE__ */ gt(
    Nu,
    {
      iconCreateFunction: (u) => {
        if (s) {
          const o = u.bindPopup(
            kn.renderToString(
              /* @__PURE__ */ gt(Dt.Provider, { value: a, children: /* @__PURE__ */ gt(_s, { children: s({ cluster: u }) }) })
            )
          );
          u.on("click", () => {
            o.openPopup();
          });
        }
        return Zi.divIcon({
          // 'grommet-cluster-group' class prevents
          // leaflet default divIcon styles
          className: "grommet-cluster-group",
          html: kn.renderToString(
            /* @__PURE__ */ gt(Dt.Provider, { value: a, children: i ? Et.cloneElement(i({ cluster: u }), {
              cluster: u
            }) : /* @__PURE__ */ gt(To, { cluster: u }) })
          )
        });
      },
      ...r
    }
  );
};
Uu.propTypes = {
  icon: pt.func,
  popup: pt.func
};
const Vu = si(ve)`
  // to create the pin shape
  border-bottom-right-radius: 0;
  // translate to re-align with leaflet div
  transform: rotate(45deg) translateX(-35%);
  &:hover {
    transform: rotate(45deg) translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`, ds = ({ kind: i = "default" }) => {
  var u, o, h, c, f, _, v, p, y;
  const s = Et.useContext(Dt), r = Po([
    (h = (o = (u = s == null ? void 0 : s.map) == null ? void 0 : u.pin) == null ? void 0 : o.default) == null ? void 0 : h.container,
    (_ = (f = (c = s == null ? void 0 : s.map) == null ? void 0 : c.pin) == null ? void 0 : f[i]) == null ? void 0 : _.container
  ]);
  let a = (y = (p = (v = s == null ? void 0 : s.map) == null ? void 0 : v.pin) == null ? void 0 : p[i]) == null ? void 0 : y.icon;
  return a && (a = Et.cloneElement(a, {
    // style needed to offset for rotation of location pin so
    // icon is vertical
    style: { transform: "rotate(-45deg)" }
  })), /* @__PURE__ */ gt(Vu, { ...r, children: a });
};
ds.propTypes = {
  kind: pt.string
};
const _s = ({ ...i }) => {
  var r;
  const s = ce(Dt);
  return /* @__PURE__ */ gt(ve, { ...(r = s == null ? void 0 : s.map) == null ? void 0 : r.popup, ...i });
};
window.console = console;
const Hu = console.error, Wu = [
  "useLayoutEffect does nothing on the server, because its effect cannot"
];
console.error = function(s, ...r) {
  Wu.some((a) => s.includes(a)) || Hu(s, ...r);
};
export {
  To as Cluster,
  kl as Controls,
  Pl as LocationBounds,
  Eu as Map,
  Ru as Marker,
  Uu as MarkerCluster,
  ds as Pin,
  _s as Popup,
  Ml as base,
  ri as deepMerge,
  no as isObject,
  Po as normalizeTheme
};
