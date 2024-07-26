import { jsxs as nr, jsx as pt } from "react/jsx-runtime";
import Ct, { useRef as oe, useEffect as St, createContext as Ia, useContext as de, forwardRef as _e, useImperativeHandle as rr, useState as or, useMemo as Ba } from "react";
import mi, { ThemeContext as It, css as zo } from "styled-components";
import { Box as be, Text as Aa, Button as Dn } from "grommet";
import { createPortal as Za } from "react-dom";
import Xn from "react-dom/server";
var Eo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oo(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var $n = { exports: {} }, Hi = { exports: {} }, dt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo;
function Ra() {
  if (oo) return dt;
  oo = 1;
  var i = typeof Symbol == "function" && Symbol.for, s = i ? Symbol.for("react.element") : 60103, r = i ? Symbol.for("react.portal") : 60106, a = i ? Symbol.for("react.fragment") : 60107, u = i ? Symbol.for("react.strict_mode") : 60108, o = i ? Symbol.for("react.profiler") : 60114, h = i ? Symbol.for("react.provider") : 60109, c = i ? Symbol.for("react.context") : 60110, f = i ? Symbol.for("react.async_mode") : 60111, _ = i ? Symbol.for("react.concurrent_mode") : 60111, v = i ? Symbol.for("react.forward_ref") : 60112, m = i ? Symbol.for("react.suspense") : 60113, y = i ? Symbol.for("react.suspense_list") : 60120, b = i ? Symbol.for("react.memo") : 60115, k = i ? Symbol.for("react.lazy") : 60116, S = i ? Symbol.for("react.block") : 60121, B = i ? Symbol.for("react.fundamental") : 60117, A = i ? Symbol.for("react.responder") : 60118, w = i ? Symbol.for("react.scope") : 60119;
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
            case m:
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
  return dt.AsyncMode = f, dt.ConcurrentMode = _, dt.ContextConsumer = c, dt.ContextProvider = h, dt.Element = s, dt.ForwardRef = v, dt.Fragment = a, dt.Lazy = k, dt.Memo = b, dt.Portal = r, dt.Profiler = o, dt.StrictMode = u, dt.Suspense = m, dt.isAsyncMode = function(z) {
    return C(z) || T(z) === f;
  }, dt.isConcurrentMode = C, dt.isContextConsumer = function(z) {
    return T(z) === c;
  }, dt.isContextProvider = function(z) {
    return T(z) === h;
  }, dt.isElement = function(z) {
    return typeof z == "object" && z !== null && z.$$typeof === s;
  }, dt.isForwardRef = function(z) {
    return T(z) === v;
  }, dt.isFragment = function(z) {
    return T(z) === a;
  }, dt.isLazy = function(z) {
    return T(z) === k;
  }, dt.isMemo = function(z) {
    return T(z) === b;
  }, dt.isPortal = function(z) {
    return T(z) === r;
  }, dt.isProfiler = function(z) {
    return T(z) === o;
  }, dt.isStrictMode = function(z) {
    return T(z) === u;
  }, dt.isSuspense = function(z) {
    return T(z) === m;
  }, dt.isValidElementType = function(z) {
    return typeof z == "string" || typeof z == "function" || z === a || z === _ || z === o || z === u || z === m || z === y || typeof z == "object" && z !== null && (z.$$typeof === k || z.$$typeof === b || z.$$typeof === h || z.$$typeof === c || z.$$typeof === v || z.$$typeof === B || z.$$typeof === A || z.$$typeof === w || z.$$typeof === S);
  }, dt.typeOf = T, dt;
}
var _t = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so;
function Da() {
  return so || (so = 1, process.env.NODE_ENV !== "production" && function() {
    var i = typeof Symbol == "function" && Symbol.for, s = i ? Symbol.for("react.element") : 60103, r = i ? Symbol.for("react.portal") : 60106, a = i ? Symbol.for("react.fragment") : 60107, u = i ? Symbol.for("react.strict_mode") : 60108, o = i ? Symbol.for("react.profiler") : 60114, h = i ? Symbol.for("react.provider") : 60109, c = i ? Symbol.for("react.context") : 60110, f = i ? Symbol.for("react.async_mode") : 60111, _ = i ? Symbol.for("react.concurrent_mode") : 60111, v = i ? Symbol.for("react.forward_ref") : 60112, m = i ? Symbol.for("react.suspense") : 60113, y = i ? Symbol.for("react.suspense_list") : 60120, b = i ? Symbol.for("react.memo") : 60115, k = i ? Symbol.for("react.lazy") : 60116, S = i ? Symbol.for("react.block") : 60121, B = i ? Symbol.for("react.fundamental") : 60117, A = i ? Symbol.for("react.responder") : 60118, w = i ? Symbol.for("react.scope") : 60119;
    function T(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === a || V === _ || V === o || V === u || V === m || V === y || typeof V == "object" && V !== null && (V.$$typeof === k || V.$$typeof === b || V.$$typeof === h || V.$$typeof === c || V.$$typeof === v || V.$$typeof === B || V.$$typeof === A || V.$$typeof === w || V.$$typeof === S);
    }
    function C(V) {
      if (typeof V == "object" && V !== null) {
        var Mt = V.$$typeof;
        switch (Mt) {
          case s:
            var xe = V.type;
            switch (xe) {
              case f:
              case _:
              case a:
              case o:
              case u:
              case m:
                return xe;
              default:
                var Ye = xe && xe.$$typeof;
                switch (Ye) {
                  case c:
                  case v:
                  case k:
                  case b:
                  case h:
                    return Ye;
                  default:
                    return Mt;
                }
            }
          case r:
            return Mt;
        }
      }
    }
    var z = f, Z = _, D = c, F = h, $ = s, et = v, K = a, it = k, rt = b, g = r, P = o, M = u, H = m, R = !1;
    function Q(V) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(V) || C(V) === f;
    }
    function O(V) {
      return C(V) === _;
    }
    function N(V) {
      return C(V) === c;
    }
    function U(V) {
      return C(V) === h;
    }
    function X(V) {
      return typeof V == "object" && V !== null && V.$$typeof === s;
    }
    function Y(V) {
      return C(V) === v;
    }
    function G(V) {
      return C(V) === a;
    }
    function q(V) {
      return C(V) === k;
    }
    function tt(V) {
      return C(V) === b;
    }
    function nt(V) {
      return C(V) === r;
    }
    function ht(V) {
      return C(V) === o;
    }
    function at(V) {
      return C(V) === u;
    }
    function Pt(V) {
      return C(V) === m;
    }
    _t.AsyncMode = z, _t.ConcurrentMode = Z, _t.ContextConsumer = D, _t.ContextProvider = F, _t.Element = $, _t.ForwardRef = et, _t.Fragment = K, _t.Lazy = it, _t.Memo = rt, _t.Portal = g, _t.Profiler = P, _t.StrictMode = M, _t.Suspense = H, _t.isAsyncMode = Q, _t.isConcurrentMode = O, _t.isContextConsumer = N, _t.isContextProvider = U, _t.isElement = X, _t.isForwardRef = Y, _t.isFragment = G, _t.isLazy = q, _t.isMemo = tt, _t.isPortal = nt, _t.isProfiler = ht, _t.isStrictMode = at, _t.isSuspense = Pt, _t.isValidElementType = T, _t.typeOf = C;
  }()), _t;
}
var ao;
function Io() {
  return ao || (ao = 1, process.env.NODE_ENV === "production" ? Hi.exports = Ra() : Hi.exports = Da()), Hi.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var jn, lo;
function ja() {
  if (lo) return jn;
  lo = 1;
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
  return jn = u() ? Object.assign : function(o, h) {
    for (var c, f = a(o), _, v = 1; v < arguments.length; v++) {
      c = Object(arguments[v]);
      for (var m in c)
        s.call(c, m) && (f[m] = c[m]);
      if (i) {
        _ = i(c);
        for (var y = 0; y < _.length; y++)
          r.call(c, _[y]) && (f[_[y]] = c[_[y]]);
      }
    }
    return f;
  }, jn;
}
var Nn, ho;
function sr() {
  if (ho) return Nn;
  ho = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Nn = i, Nn;
}
var Fn, uo;
function Bo() {
  return uo || (uo = 1, Fn = Function.call.bind(Object.prototype.hasOwnProperty)), Fn;
}
var Un, co;
function Na() {
  if (co) return Un;
  co = 1;
  var i = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = sr(), r = {}, a = Bo();
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
          var m;
          try {
            if (typeof o[v] != "function") {
              var y = Error(
                (f || "React class") + ": " + c + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            m = o[v](h, v, f, c, null, s);
          } catch (k) {
            m = k;
          }
          if (m && !(m instanceof Error) && i(
            (f || "React class") + ": type specification of " + c + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var b = _ ? _() : "";
            i(
              "Failed " + c + " type: " + m.message + (b ?? "")
            );
          }
        }
    }
  }
  return u.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Un = u, Un;
}
var Vn, fo;
function Fa() {
  if (fo) return Vn;
  fo = 1;
  var i = Io(), s = ja(), r = sr(), a = Bo(), u = Na(), o = function() {
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
  return Vn = function(c, f) {
    var _ = typeof Symbol == "function" && Symbol.iterator, v = "@@iterator";
    function m(O) {
      var N = O && (_ && O[_] || O[v]);
      if (typeof N == "function")
        return N;
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
      node: et(),
      objectOf: F,
      oneOf: D,
      oneOfType: $,
      shape: it,
      exact: rt
    };
    function k(O, N) {
      return O === N ? O !== 0 || 1 / O === 1 / N : O !== O && N !== N;
    }
    function S(O, N) {
      this.message = O, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    S.prototype = Error.prototype;
    function B(O) {
      if (process.env.NODE_ENV !== "production")
        var N = {}, U = 0;
      function X(G, q, tt, nt, ht, at, Pt) {
        if (nt = nt || y, at = at || tt, Pt !== r) {
          if (f) {
            var V = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw V.name = "Invariant Violation", V;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Mt = nt + ":" + tt;
            !N[Mt] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + at + "` prop on `" + nt + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[Mt] = !0, U++);
          }
        }
        return q[tt] == null ? G ? q[tt] === null ? new S("The " + ht + " `" + at + "` is marked as required " + ("in `" + nt + "`, but its value is `null`.")) : new S("The " + ht + " `" + at + "` is marked as required in " + ("`" + nt + "`, but its value is `undefined`.")) : null : O(q, tt, nt, ht, at);
      }
      var Y = X.bind(null, !1);
      return Y.isRequired = X.bind(null, !0), Y;
    }
    function A(O) {
      function N(U, X, Y, G, q, tt) {
        var nt = U[X], ht = M(nt);
        if (ht !== O) {
          var at = H(nt);
          return new S(
            "Invalid " + G + " `" + q + "` of type " + ("`" + at + "` supplied to `" + Y + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return B(N);
    }
    function w() {
      return B(h);
    }
    function T(O) {
      function N(U, X, Y, G, q) {
        if (typeof O != "function")
          return new S("Property `" + q + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var tt = U[X];
        if (!Array.isArray(tt)) {
          var nt = M(tt);
          return new S("Invalid " + G + " `" + q + "` of type " + ("`" + nt + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var ht = 0; ht < tt.length; ht++) {
          var at = O(tt, ht, Y, G, q + "[" + ht + "]", r);
          if (at instanceof Error)
            return at;
        }
        return null;
      }
      return B(N);
    }
    function C() {
      function O(N, U, X, Y, G) {
        var q = N[U];
        if (!c(q)) {
          var tt = M(q);
          return new S("Invalid " + Y + " `" + G + "` of type " + ("`" + tt + "` supplied to `" + X + "`, expected a single ReactElement."));
        }
        return null;
      }
      return B(O);
    }
    function z() {
      function O(N, U, X, Y, G) {
        var q = N[U];
        if (!i.isValidElementType(q)) {
          var tt = M(q);
          return new S("Invalid " + Y + " `" + G + "` of type " + ("`" + tt + "` supplied to `" + X + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return B(O);
    }
    function Z(O) {
      function N(U, X, Y, G, q) {
        if (!(U[X] instanceof O)) {
          var tt = O.name || y, nt = Q(U[X]);
          return new S("Invalid " + G + " `" + q + "` of type " + ("`" + nt + "` supplied to `" + Y + "`, expected ") + ("instance of `" + tt + "`."));
        }
        return null;
      }
      return B(N);
    }
    function D(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), h;
      function N(U, X, Y, G, q) {
        for (var tt = U[X], nt = 0; nt < O.length; nt++)
          if (k(tt, O[nt]))
            return null;
        var ht = JSON.stringify(O, function(Pt, V) {
          var Mt = H(V);
          return Mt === "symbol" ? String(V) : V;
        });
        return new S("Invalid " + G + " `" + q + "` of value `" + String(tt) + "` " + ("supplied to `" + Y + "`, expected one of " + ht + "."));
      }
      return B(N);
    }
    function F(O) {
      function N(U, X, Y, G, q) {
        if (typeof O != "function")
          return new S("Property `" + q + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var tt = U[X], nt = M(tt);
        if (nt !== "object")
          return new S("Invalid " + G + " `" + q + "` of type " + ("`" + nt + "` supplied to `" + Y + "`, expected an object."));
        for (var ht in tt)
          if (a(tt, ht)) {
            var at = O(tt, ht, Y, G, q + "." + ht, r);
            if (at instanceof Error)
              return at;
          }
        return null;
      }
      return B(N);
    }
    function $(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), h;
      for (var N = 0; N < O.length; N++) {
        var U = O[N];
        if (typeof U != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + R(U) + " at index " + N + "."
          ), h;
      }
      function X(Y, G, q, tt, nt) {
        for (var ht = [], at = 0; at < O.length; at++) {
          var Pt = O[at], V = Pt(Y, G, q, tt, nt, r);
          if (V == null)
            return null;
          V.data && a(V.data, "expectedType") && ht.push(V.data.expectedType);
        }
        var Mt = ht.length > 0 ? ", expected one of type [" + ht.join(", ") + "]" : "";
        return new S("Invalid " + tt + " `" + nt + "` supplied to " + ("`" + q + "`" + Mt + "."));
      }
      return B(X);
    }
    function et() {
      function O(N, U, X, Y, G) {
        return g(N[U]) ? null : new S("Invalid " + Y + " `" + G + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return B(O);
    }
    function K(O, N, U, X, Y) {
      return new S(
        (O || "React class") + ": " + N + " type `" + U + "." + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function it(O) {
      function N(U, X, Y, G, q) {
        var tt = U[X], nt = M(tt);
        if (nt !== "object")
          return new S("Invalid " + G + " `" + q + "` of type `" + nt + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var ht in O) {
          var at = O[ht];
          if (typeof at != "function")
            return K(Y, G, q, ht, H(at));
          var Pt = at(tt, ht, Y, G, q + "." + ht, r);
          if (Pt)
            return Pt;
        }
        return null;
      }
      return B(N);
    }
    function rt(O) {
      function N(U, X, Y, G, q) {
        var tt = U[X], nt = M(tt);
        if (nt !== "object")
          return new S("Invalid " + G + " `" + q + "` of type `" + nt + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var ht = s({}, U[X], O);
        for (var at in ht) {
          var Pt = O[at];
          if (a(O, at) && typeof Pt != "function")
            return K(Y, G, q, at, H(Pt));
          if (!Pt)
            return new S(
              "Invalid " + G + " `" + q + "` key `" + at + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(U[X], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var V = Pt(tt, at, Y, G, q + "." + at, r);
          if (V)
            return V;
        }
        return null;
      }
      return B(N);
    }
    function g(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(g);
          if (O === null || c(O))
            return !0;
          var N = m(O);
          if (N) {
            var U = N.call(O), X;
            if (N !== O.entries) {
              for (; !(X = U.next()).done; )
                if (!g(X.value))
                  return !1;
            } else
              for (; !(X = U.next()).done; ) {
                var Y = X.value;
                if (Y && !g(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function P(O, N) {
      return O === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function M(O) {
      var N = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : P(N, O) ? "symbol" : N;
    }
    function H(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var N = M(O);
      if (N === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function R(O) {
      var N = H(O);
      switch (N) {
        case "array":
        case "object":
          return "an " + N;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + N;
        default:
          return N;
      }
    }
    function Q(O) {
      return !O.constructor || !O.constructor.name ? y : O.constructor.name;
    }
    return b.checkPropTypes = u, b.resetWarningCache = u.resetWarningCache, b.PropTypes = b, b;
  }, Vn;
}
var Hn, _o;
function Ua() {
  if (_o) return Hn;
  _o = 1;
  var i = sr();
  function s() {
  }
  function r() {
  }
  return r.resetWarningCache = s, Hn = function() {
    function a(h, c, f, _, v, m) {
      if (m !== i) {
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
  }, Hn;
}
if (process.env.NODE_ENV !== "production") {
  var Va = Io(), Ha = !0;
  $n.exports = Fa()(Va.isElement, Ha);
} else
  $n.exports = Ua()();
var Wa = $n.exports;
const mt = /* @__PURE__ */ Oo(Wa), mo = (i) => i && typeof i == "object" && !Array.isArray(i), di = (i, ...s) => {
  if (!s.length)
    return i;
  const r = { ...i };
  return s.forEach((a) => {
    mo(a) && Object.keys(a).forEach((u) => {
      mo(a[u]) ? r[u] ? r[u] = di(r[u], a[u]) : r[u] = { ...a[u] } : r[u] = a[u];
    });
  }), r;
}, Ao = (i) => {
  let s = {};
  return i.forEach((r) => {
    s = di(s, r);
  }), s;
}, Ya = mi(be)`
  // translate to re-align with leaflet div
  transform: translateX(-35%);
  &:hover {
    transform: translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`, Ga = mi(Aa)`
  // multiplier of font-size, for tighter alignment
  line-height: 1rem;
`, Zo = ({ cluster: i, kind: s = "default", size: r = "medium", ...a }) => {
  var _, v, m, y, b, k, S, B, A, w, T, C, z;
  const u = Ct.useContext(It), o = Ao([
    (m = (v = (_ = u == null ? void 0 : u.map) == null ? void 0 : _.cluster) == null ? void 0 : v.size) == null ? void 0 : m.medium,
    (k = (b = (y = u == null ? void 0 : u.map) == null ? void 0 : y.cluster) == null ? void 0 : b.size) == null ? void 0 : k[r],
    (B = (S = u == null ? void 0 : u.map) == null ? void 0 : S.cluster) == null ? void 0 : B.default,
    (w = (A = u == null ? void 0 : u.map) == null ? void 0 : A.cluster) == null ? void 0 : w[s]
  ]), h = i.getChildCount(), c = (z = (C = (T = u == null ? void 0 : u.map) == null ? void 0 : T.cluster) == null ? void 0 : C[s]) == null ? void 0 : z.icon, f = h;
  return /* @__PURE__ */ nr(Ya, { ...o == null ? void 0 : o.container, ...a, children: [
    c,
    /* @__PURE__ */ pt(Ga, { ...o == null ? void 0 : o.label, children: f })
  ] });
};
Zo.propTypes = {
  cluster: mt.object,
  kind: mt.string,
  size: mt.string
};
function Ro(i, s) {
  const r = oe(s);
  St(function() {
    s !== r.current && i.attributionControl != null && (r.current != null && i.attributionControl.removeAttribution(r.current), s != null && i.attributionControl.addAttribution(s)), r.current = s;
  }, [i, s]);
}
const qa = 1, Do = /* @__PURE__ */ Ia(null), jo = Do.Provider;
function pi() {
  const i = de(Do);
  if (i == null)
    throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return i;
}
function No(i) {
  function s(r, a) {
    const {
      instance: u,
      context: o
    } = i(r).current;
    return rr(a, () => u), r.children == null ? null : /* @__PURE__ */ Ct.createElement(jo, {
      value: o
    }, r.children);
  }
  return /* @__PURE__ */ _e(s);
}
function Xa(i) {
  function s(r, a) {
    const [u, o] = or(!1), {
      instance: h
    } = i(r, o).current;
    rr(a, () => h), St(function() {
      u && h.update();
    }, [h, u, r.children]);
    const c = h._contentNode;
    return c ? /* @__PURE__ */ Za(r.children, c) : null;
  }
  return /* @__PURE__ */ _e(s);
}
function Fo(i) {
  function s(r, a) {
    const {
      instance: u
    } = i(r).current;
    return rr(a, () => u), null;
  }
  return /* @__PURE__ */ _e(s);
}
function $a(i) {
  return function(r) {
    const a = pi(), u = i(r, a), {
      instance: o
    } = u.current, h = oe(r.position), {
      position: c
    } = r;
    return St(function() {
      return o.addTo(a.map), function() {
        o.remove();
      };
    }, [a.map, o]), St(function() {
      c != null && c !== h.current && (o.setPosition(c), h.current = c);
    }, [o, c]), u;
  };
}
function ar(i, s) {
  const r = oe();
  St(function() {
    return s != null && i.instance.on(s), r.current = s, function() {
      r.current != null && i.instance.off(r.current), r.current = null;
    };
  }, [i, s]);
}
function Xi(i, s) {
  const r = i.pane ?? s.pane;
  return r ? {
    ...i,
    pane: r
  } : i;
}
function Ka(i, s) {
  return function(a, u) {
    const o = pi(), h = i(Xi(a, o), o);
    return Ro(o.map, a.attribution), ar(h.current, a.eventHandlers), s(h.current, o, a, u), h;
  };
}
var Kn = { exports: {} };
/* @preserve
 * Leaflet 1.7.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(i, s) {
  (function(r, a) {
    a(s);
  })(Eo, function(r) {
    var a = "1.7.1";
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
      return t._leaflet_id = t._leaflet_id || ++c, t._leaflet_id;
    }
    function _(t, e, n) {
      var l, d, p, x;
      return x = function() {
        l = !1, d && (p.apply(n, d), d = !1);
      }, p = function() {
        l ? d = arguments : (t.apply(n, arguments), setTimeout(x, e), l = !0);
      }, p;
    }
    function v(t, e, n) {
      var l = e[1], d = e[0], p = l - d;
      return t === l && n ? t : ((t - d) % p + p) % p + d;
    }
    function m() {
      return !1;
    }
    function y(t, e) {
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
    var A = /\{ *([\w_-]+) *\}/g;
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
    var D = 0;
    function F(t) {
      var e = +/* @__PURE__ */ new Date(), n = Math.max(0, 16 - (e - D));
      return D = e + n, window.setTimeout(t, n);
    }
    var $ = window.requestAnimationFrame || Z("RequestAnimationFrame") || F, et = window.cancelAnimationFrame || Z("CancelAnimationFrame") || Z("CancelRequestAnimationFrame") || function(t) {
      window.clearTimeout(t);
    };
    function K(t, e, n) {
      if (n && $ === F)
        t.call(e);
      else
        return $.call(window, h(t, e));
    }
    function it(t) {
      t && et.call(window, t);
    }
    var rt = {
      extend: u,
      create: o,
      bind: h,
      lastId: c,
      stamp: f,
      throttle: _,
      wrapNum: v,
      falseFn: m,
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
      cancelFn: et,
      requestAnimFrame: K,
      cancelAnimFrame: it
    };
    function g() {
    }
    g.extend = function(t) {
      var e = function() {
        this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, n = e.__super__ = this.prototype, l = o(n);
      l.constructor = e, e.prototype = l;
      for (var d in this)
        Object.prototype.hasOwnProperty.call(this, d) && d !== "prototype" && d !== "__super__" && (e[d] = this[d]);
      return t.statics && (u(e, t.statics), delete t.statics), t.includes && (P(t.includes), u.apply(null, [l].concat(t.includes)), delete t.includes), l.options && (t.options = u(o(l.options), t.options)), u(l, t), l._initHooks = [], l.callInitHooks = function() {
        if (!this._initHooksCalled) {
          n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var p = 0, x = l._initHooks.length; p < x; p++)
            l._initHooks[p].call(this);
        }
      }, e;
    }, g.include = function(t) {
      return u(this.prototype, t), this;
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
          for (var d = 0, p = t.length; d < p; d++)
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
        if (!t)
          delete this._events;
        else if (typeof t == "object")
          for (var l in t)
            this._off(l, t[l], e);
        else {
          t = k(t);
          for (var d = 0, p = t.length; d < p; d++)
            this._off(t[d], e, n);
        }
        return this;
      },
      // attach listener (without syntactic sugar now)
      _on: function(t, e, n) {
        this._events = this._events || {};
        var l = this._events[t];
        l || (l = [], this._events[t] = l), n === this && (n = void 0);
        for (var d = { fn: e, ctx: n }, p = l, x = 0, E = p.length; x < E; x++)
          if (p[x].fn === e && p[x].ctx === n)
            return;
        p.push(d);
      },
      _off: function(t, e, n) {
        var l, d, p;
        if (this._events && (l = this._events[t], !!l)) {
          if (!e) {
            for (d = 0, p = l.length; d < p; d++)
              l[d].fn = m;
            delete this._events[t];
            return;
          }
          if (n === this && (n = void 0), l)
            for (d = 0, p = l.length; d < p; d++) {
              var x = l[d];
              if (x.ctx === n && x.fn === e) {
                x.fn = m, this._firingCount && (this._events[t] = l = l.slice()), l.splice(d, 1);
                return;
              }
            }
        }
      },
      // @method fire(type: String, data?: Object, propagate?: Boolean): this
      // Fires an event of the specified type. You can optionally provide an data
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
            for (var p = 0, x = d.length; p < x; p++) {
              var E = d[p];
              E.fn.call(E.ctx || this, l);
            }
            this._firingCount--;
          }
        }
        return n && this._propagateEvent(l), this;
      },
      // @method listens(type: String): Boolean
      // Returns `true` if a particular event type has any listeners attached to it.
      listens: function(t, e) {
        var n = this._events && this._events[t];
        if (n && n.length)
          return !0;
        if (e) {
          for (var l in this._eventParents)
            if (this._eventParents[l].listens(t, e))
              return !0;
        }
        return !1;
      },
      // @method once(…): this
      // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
      once: function(t, e, n) {
        if (typeof t == "object") {
          for (var l in t)
            this.once(l, t[l], e);
          return this;
        }
        var d = h(function() {
          this.off(t, e, n).off(t, d, n);
        }, this);
        return this.on(t, e, n).on(t, d, n);
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
    var H = g.extend(M);
    function R(t, e, n) {
      this.x = n ? Math.round(t) : t, this.y = n ? Math.round(e) : e;
    }
    var Q = Math.trunc || function(t) {
      return t > 0 ? Math.floor(t) : Math.ceil(t);
    };
    R.prototype = {
      // @method clone(): Point
      // Returns a copy of the current point.
      clone: function() {
        return new R(this.x, this.y);
      },
      // @method add(otherPoint: Point): Point
      // Returns the result of addition of the current and the given points.
      add: function(t) {
        return this.clone()._add(O(t));
      },
      _add: function(t) {
        return this.x += t.x, this.y += t.y, this;
      },
      // @method subtract(otherPoint: Point): Point
      // Returns the result of subtraction of the given point from the current.
      subtract: function(t) {
        return this.clone()._subtract(O(t));
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
        return new R(this.x * t.x, this.y * t.y);
      },
      // @method unscaleBy(scale: Point): Point
      // Inverse of `scaleBy`. Divide each coordinate of the current point by
      // each coordinate of `scale`.
      unscaleBy: function(t) {
        return new R(this.x / t.x, this.y / t.y);
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
        t = O(t);
        var e = t.x - this.x, n = t.y - this.y;
        return Math.sqrt(e * e + n * n);
      },
      // @method equals(otherPoint: Point): Boolean
      // Returns `true` if the given point has the same coordinates.
      equals: function(t) {
        return t = O(t), t.x === this.x && t.y === this.y;
      },
      // @method contains(otherPoint: Point): Boolean
      // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
      contains: function(t) {
        return t = O(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      },
      // @method toString(): String
      // Returns a string representation of the point for debugging purposes.
      toString: function() {
        return "Point(" + y(this.x) + ", " + y(this.y) + ")";
      }
    };
    function O(t, e, n) {
      return t instanceof R ? t : T(t) ? new R(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new R(t.x, t.y) : new R(t, e, n);
    }
    function N(t, e) {
      if (t)
        for (var n = e ? [t, e] : t, l = 0, d = n.length; l < d; l++)
          this.extend(n[l]);
    }
    N.prototype = {
      // @method extend(point: Point): this
      // Extends the bounds to contain the given point.
      extend: function(t) {
        return t = O(t), !this.min && !this.max ? (this.min = t.clone(), this.max = t.clone()) : (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)), this;
      },
      // @method getCenter(round?: Boolean): Point
      // Returns the center point of the bounds.
      getCenter: function(t) {
        return new R(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      // @method getBottomLeft(): Point
      // Returns the bottom-left point of the bounds.
      getBottomLeft: function() {
        return new R(this.min.x, this.max.y);
      },
      // @method getTopRight(): Point
      // Returns the top-right point of the bounds.
      getTopRight: function() {
        return new R(this.max.x, this.min.y);
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
        return typeof t[0] == "number" || t instanceof R ? t = O(t) : t = U(t), t instanceof N ? (e = t.min, n = t.max) : e = n = t, e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y;
      },
      // @method intersects(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds
      // intersect if they have at least one point in common.
      intersects: function(t) {
        t = U(t);
        var e = this.min, n = this.max, l = t.min, d = t.max, p = d.x >= e.x && l.x <= n.x, x = d.y >= e.y && l.y <= n.y;
        return p && x;
      },
      // @method overlaps(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds
      // overlap if their intersection is an area.
      overlaps: function(t) {
        t = U(t);
        var e = this.min, n = this.max, l = t.min, d = t.max, p = d.x > e.x && l.x < n.x, x = d.y > e.y && l.y < n.y;
        return p && x;
      },
      isValid: function() {
        return !!(this.min && this.max);
      }
    };
    function U(t, e) {
      return !t || t instanceof N ? t : new N(t, e);
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
        if (t instanceof G)
          l = t, d = t;
        else if (t instanceof X) {
          if (l = t._southWest, d = t._northEast, !l || !d)
            return this;
        } else
          return t ? this.extend(q(t) || Y(t)) : this;
        return !e && !n ? (this._southWest = new G(l.lat, l.lng), this._northEast = new G(d.lat, d.lng)) : (e.lat = Math.min(l.lat, e.lat), e.lng = Math.min(l.lng, e.lng), n.lat = Math.max(d.lat, n.lat), n.lng = Math.max(d.lng, n.lng)), this;
      },
      // @method pad(bufferRatio: Number): LatLngBounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this._southWest, n = this._northEast, l = Math.abs(e.lat - n.lat) * t, d = Math.abs(e.lng - n.lng) * t;
        return new X(
          new G(e.lat - l, e.lng - d),
          new G(n.lat + l, n.lng + d)
        );
      },
      // @method getCenter(): LatLng
      // Returns the center point of the bounds.
      getCenter: function() {
        return new G(
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
        return new G(this.getNorth(), this.getWest());
      },
      // @method getSouthEast(): LatLng
      // Returns the south-east point of the bounds.
      getSouthEast: function() {
        return new G(this.getSouth(), this.getEast());
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
        typeof t[0] == "number" || t instanceof G || "lat" in t ? t = q(t) : t = Y(t);
        var e = this._southWest, n = this._northEast, l, d;
        return t instanceof X ? (l = t.getSouthWest(), d = t.getNorthEast()) : l = d = t, l.lat >= e.lat && d.lat <= n.lat && l.lng >= e.lng && d.lng <= n.lng;
      },
      // @method intersects(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
      intersects: function(t) {
        t = Y(t);
        var e = this._southWest, n = this._northEast, l = t.getSouthWest(), d = t.getNorthEast(), p = d.lat >= e.lat && l.lat <= n.lat, x = d.lng >= e.lng && l.lng <= n.lng;
        return p && x;
      },
      // @method overlaps(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
      overlaps: function(t) {
        t = Y(t);
        var e = this._southWest, n = this._northEast, l = t.getSouthWest(), d = t.getNorthEast(), p = d.lat > e.lat && l.lat < n.lat, x = d.lng > e.lng && l.lng < n.lng;
        return p && x;
      },
      // @method toBBoxString(): String
      // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
      // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        return t ? (t = Y(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function Y(t, e) {
      return t instanceof X ? t : new X(t, e);
    }
    function G(t, e, n) {
      if (isNaN(t) || isNaN(e))
        throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
      this.lat = +t, this.lng = +e, n !== void 0 && (this.alt = +n);
    }
    G.prototype = {
      // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
      // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        if (!t)
          return !1;
        t = q(t);
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
        return nt.distance(this, q(t));
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
        return Y(
          [this.lat - e, this.lng - n],
          [this.lat + e, this.lng + n]
        );
      },
      clone: function() {
        return new G(this.lat, this.lng, this.alt);
      }
    };
    function q(t, e, n) {
      return t instanceof G ? t : T(t) && typeof t[0] != "object" ? t.length === 3 ? new G(t[0], t[1], t[2]) : t.length === 2 ? new G(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new G(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new G(t, e, n);
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
        return new N(l, d);
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
        return new G(n, e, l);
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring
      // that its center is within the CRS's bounds.
      // Only accepts actual `L.LatLngBounds` instances, not arrays.
      wrapLatLngBounds: function(t) {
        var e = t.getCenter(), n = this.wrapLatLng(e), l = e.lat - n.lat, d = e.lng - n.lng;
        if (l === 0 && d === 0)
          return t;
        var p = t.getSouthWest(), x = t.getNorthEast(), E = new G(p.lat - l, p.lng - d), I = new G(x.lat - l, x.lng - d);
        return new X(E, I);
      }
    }, nt = u({}, tt, {
      wrapLng: [-180, 180],
      // Mean Earth Radius, as recommended for use by
      // the International Union of Geodesy and Geophysics,
      // see http://rosettacode.org/wiki/Haversine_formula
      R: 6371e3,
      // distance between two geographical points using spherical law of cosines approximation
      distance: function(t, e) {
        var n = Math.PI / 180, l = t.lat * n, d = e.lat * n, p = Math.sin((e.lat - t.lat) * n / 2), x = Math.sin((e.lng - t.lng) * n / 2), E = p * p + Math.cos(l) * Math.cos(d) * x * x, I = 2 * Math.atan2(Math.sqrt(E), Math.sqrt(1 - E));
        return this.R * I;
      }
    }), ht = 6378137, at = {
      R: ht,
      MAX_LATITUDE: 85.0511287798,
      project: function(t) {
        var e = Math.PI / 180, n = this.MAX_LATITUDE, l = Math.max(Math.min(n, t.lat), -n), d = Math.sin(l * e);
        return new R(
          this.R * t.lng * e,
          this.R * Math.log((1 + d) / (1 - d)) / 2
        );
      },
      unproject: function(t) {
        var e = 180 / Math.PI;
        return new G(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
          t.x * e / this.R
        );
      },
      bounds: function() {
        var t = ht * Math.PI;
        return new N([-t, -t], [t, t]);
      }()
    };
    function Pt(t, e, n, l) {
      if (T(t)) {
        this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
        return;
      }
      this._a = t, this._b = e, this._c = n, this._d = l;
    }
    Pt.prototype = {
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
        return e = e || 1, new R(
          (t.x / e - this._b) / this._a,
          (t.y / e - this._d) / this._c
        );
      }
    };
    function V(t, e, n, l) {
      return new Pt(t, e, n, l);
    }
    var Mt = u({}, nt, {
      code: "EPSG:3857",
      projection: at,
      transformation: function() {
        var t = 0.5 / (Math.PI * at.R);
        return V(t, 0.5, -t, 0.5);
      }()
    }), xe = u({}, Mt, {
      code: "EPSG:900913"
    });
    function Ye(t) {
      return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function hr(t, e) {
      var n = "", l, d, p, x, E, I;
      for (l = 0, p = t.length; l < p; l++) {
        for (E = t[l], d = 0, x = E.length; d < x; d++)
          I = E[d], n += (d ? "L" : "M") + I.x + " " + I.y;
        n += e ? Li ? "z" : "x" : "";
      }
      return n || "M0 0";
    }
    var Ki = document.documentElement.style, bi = "ActiveXObject" in window, Le = bi && !document.addEventListener, wi = "msLaunchUri" in navigator && !("documentMode" in document), Ji = Xt("webkit"), Ge = Xt("android"), qe = Xt("android 2") || Xt("android 3"), ks = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), ur = Ge && Xt("Google") && ks < 537 && !("AudioNode" in window), Qi = !!window.opera, tn = !wi && Xt("chrome"), en = Xt("gecko") && !Ji && !Qi && !bi, xi = !tn && Xt("safari"), cr = Xt("phantom"), fr = "OTransition" in Ki, dr = navigator.platform.indexOf("Win") === 0, nn = bi && "transition" in Ki, rn = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !qe, _r = "MozPerspective" in Ki, Bt = !window.L_DISABLE_3D && (nn || rn || _r) && !fr && !cr, Pe = typeof orientation < "u" || Xt("mobile"), Cs = Pe && Ji, Ms = Pe && rn, le = !window.PointerEvent && window.MSPointerEvent, Gt = !!(window.PointerEvent || le), qt = !window.L_NO_TOUCH && (Gt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), mr = Pe && Qi, Ss = Pe && en, he = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Te = function() {
      var t = !1;
      try {
        var e = Object.defineProperty({}, "passive", {
          get: function() {
            t = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", m, e), window.removeEventListener("testPassiveEventSupport", m, e);
      } catch {
      }
      return t;
    }(), pr = function() {
      return !!document.createElement("canvas").getContext;
    }(), Li = !!(document.createElementNS && Ye("svg").createSVGRect), Pi = !Li && function() {
      try {
        var t = document.createElement("div");
        t.innerHTML = '<v:shape adj="1"/>';
        var e = t.firstChild;
        return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
      } catch {
        return !1;
      }
    }();
    function Xt(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var zs = {
      ie: bi,
      ielt9: Le,
      edge: wi,
      webkit: Ji,
      android: Ge,
      android23: qe,
      androidStock: ur,
      opera: Qi,
      chrome: tn,
      gecko: en,
      safari: xi,
      phantom: cr,
      opera12: fr,
      win: dr,
      ie3d: nn,
      webkit3d: rn,
      gecko3d: _r,
      any3d: Bt,
      mobile: Pe,
      mobileWebkit: Cs,
      mobileWebkit3d: Ms,
      msPointer: le,
      pointer: Gt,
      touch: qt,
      mobileOpera: mr,
      mobileGecko: Ss,
      retina: he,
      passiveEvents: Te,
      canvas: pr,
      svg: Li,
      vml: Pi
    }, on = le ? "MSPointerDown" : "pointerdown", sn = le ? "MSPointerMove" : "pointermove", an = le ? "MSPointerUp" : "pointerup", ln = le ? "MSPointerCancel" : "pointercancel", ke = {}, gr = !1;
    function Es(t, e, n, l) {
      return e === "touchstart" ? Is(t, n, l) : e === "touchmove" ? Zs(t, n, l) : e === "touchend" && Rs(t, n, l), this;
    }
    function Os(t, e, n) {
      var l = t["_leaflet_" + e + n];
      return e === "touchstart" ? t.removeEventListener(on, l, !1) : e === "touchmove" ? t.removeEventListener(sn, l, !1) : e === "touchend" && (t.removeEventListener(an, l, !1), t.removeEventListener(ln, l, !1)), this;
    }
    function Is(t, e, n) {
      var l = h(function(d) {
        d.MSPOINTER_TYPE_TOUCH && d.pointerType === d.MSPOINTER_TYPE_TOUCH && Zt(d), hn(d, e);
      });
      t["_leaflet_touchstart" + n] = l, t.addEventListener(on, l, !1), gr || (document.addEventListener(on, Bs, !0), document.addEventListener(sn, As, !0), document.addEventListener(an, vr, !0), document.addEventListener(ln, vr, !0), gr = !0);
    }
    function Bs(t) {
      ke[t.pointerId] = t;
    }
    function As(t) {
      ke[t.pointerId] && (ke[t.pointerId] = t);
    }
    function vr(t) {
      delete ke[t.pointerId];
    }
    function hn(t, e) {
      t.touches = [];
      for (var n in ke)
        t.touches.push(ke[n]);
      t.changedTouches = [t], e(t);
    }
    function Zs(t, e, n) {
      var l = function(d) {
        d.pointerType === (d.MSPOINTER_TYPE_MOUSE || "mouse") && d.buttons === 0 || hn(d, e);
      };
      t["_leaflet_touchmove" + n] = l, t.addEventListener(sn, l, !1);
    }
    function Rs(t, e, n) {
      var l = function(d) {
        hn(d, e);
      };
      t["_leaflet_touchend" + n] = l, t.addEventListener(an, l, !1), t.addEventListener(ln, l, !1);
    }
    var Ti = le ? "MSPointerDown" : Gt ? "pointerdown" : "touchstart", ki = le ? "MSPointerUp" : Gt ? "pointerup" : "touchend", Ce = "_leaflet_";
    function Ds(t, e, n) {
      var l, d, p = !1, x = 250;
      function E(j) {
        if (Gt) {
          if (!j.isPrimary || j.pointerType === "mouse")
            return;
        } else if (j.touches.length > 1)
          return;
        var W = Date.now(), J = W - (l || W);
        d = j.touches ? j.touches[0] : j, p = J > 0 && J <= x, l = W;
      }
      function I(j) {
        if (p && !d.cancelBubble) {
          if (Gt) {
            if (j.pointerType === "mouse")
              return;
            var W = {}, J, ct;
            for (ct in d)
              J = d[ct], W[ct] = J && J.bind ? J.bind(d) : J;
            d = W;
          }
          d.type = "dblclick", d.button = 0, e(d), l = null;
        }
      }
      return t[Ce + Ti + n] = E, t[Ce + ki + n] = I, t[Ce + "dblclick" + n] = e, t.addEventListener(Ti, E, Te ? { passive: !1 } : !1), t.addEventListener(ki, I, Te ? { passive: !1 } : !1), t.addEventListener("dblclick", e, !1), this;
    }
    function js(t, e) {
      var n = t[Ce + Ti + e], l = t[Ce + ki + e], d = t[Ce + "dblclick" + e];
      return t.removeEventListener(Ti, n, Te ? { passive: !1 } : !1), t.removeEventListener(ki, l, Te ? { passive: !1 } : !1), t.removeEventListener("dblclick", d, !1), this;
    }
    var un = Si(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), Xe = Si(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), yr = Xe === "webkitTransition" || Xe === "OTransition" ? Xe + "End" : "transitionend";
    function br(t) {
      return typeof t == "string" ? document.getElementById(t) : t;
    }
    function $e(t, e) {
      var n = t.style[e] || t.currentStyle && t.currentStyle[e];
      if ((!n || n === "auto") && document.defaultView) {
        var l = document.defaultView.getComputedStyle(t, null);
        n = l ? l[e] : null;
      }
      return n === "auto" ? null : n;
    }
    function ut(t, e, n) {
      var l = document.createElement(t);
      return l.className = e || "", n && n.appendChild(l), l;
    }
    function gt(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function Ci(t) {
      for (; t.firstChild; )
        t.removeChild(t.firstChild);
    }
    function Me(t) {
      var e = t.parentNode;
      e && e.lastChild !== t && e.appendChild(t);
    }
    function Se(t) {
      var e = t.parentNode;
      e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
    }
    function cn(t, e) {
      if (t.classList !== void 0)
        return t.classList.contains(e);
      var n = Mi(t);
      return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n);
    }
    function ot(t, e) {
      if (t.classList !== void 0)
        for (var n = k(e), l = 0, d = n.length; l < d; l++)
          t.classList.add(n[l]);
      else if (!cn(t, e)) {
        var p = Mi(t);
        fn(t, (p ? p + " " : "") + e);
      }
    }
    function vt(t, e) {
      t.classList !== void 0 ? t.classList.remove(e) : fn(t, b((" " + Mi(t) + " ").replace(" " + e + " ", " ")));
    }
    function fn(t, e) {
      t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
    }
    function Mi(t) {
      return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
    }
    function At(t, e) {
      "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && Ns(t, e);
    }
    function Ns(t, e) {
      var n = !1, l = "DXImageTransform.Microsoft.Alpha";
      try {
        n = t.filters.item(l);
      } catch {
        if (e === 1)
          return;
      }
      e = Math.round(e * 100), n ? (n.Enabled = e !== 100, n.Opacity = e) : t.style.filter += " progid:" + l + "(opacity=" + e + ")";
    }
    function Si(t) {
      for (var e = document.documentElement.style, n = 0; n < t.length; n++)
        if (t[n] in e)
          return t[n];
      return !1;
    }
    function me(t, e, n) {
      var l = e || new R(0, 0);
      t.style[un] = (nn ? "translate(" + l.x + "px," + l.y + "px)" : "translate3d(" + l.x + "px," + l.y + "px,0)") + (n ? " scale(" + n + ")" : "");
    }
    function bt(t, e) {
      t._leaflet_pos = e, Bt ? me(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
    }
    function ue(t) {
      return t._leaflet_pos || new R(0, 0);
    }
    var Ke, Je, dn;
    if ("onselectstart" in document)
      Ke = function() {
        st(window, "selectstart", Zt);
      }, Je = function() {
        yt(window, "selectstart", Zt);
      };
    else {
      var Qe = Si(
        ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
      );
      Ke = function() {
        if (Qe) {
          var t = document.documentElement.style;
          dn = t[Qe], t[Qe] = "none";
        }
      }, Je = function() {
        Qe && (document.documentElement.style[Qe] = dn, dn = void 0);
      };
    }
    function _n() {
      st(window, "dragstart", Zt);
    }
    function mn() {
      yt(window, "dragstart", Zt);
    }
    var zi, pn;
    function gn(t) {
      for (; t.tabIndex === -1; )
        t = t.parentNode;
      t.style && (Ei(), zi = t, pn = t.style.outline, t.style.outline = "none", st(window, "keydown", Ei));
    }
    function Ei() {
      zi && (zi.style.outline = pn, zi = void 0, pn = void 0, yt(window, "keydown", Ei));
    }
    function wr(t) {
      do
        t = t.parentNode;
      while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
      return t;
    }
    function vn(t) {
      var e = t.getBoundingClientRect();
      return {
        x: e.width / t.offsetWidth || 1,
        y: e.height / t.offsetHeight || 1,
        boundingClientRect: e
      };
    }
    var Fs = {
      TRANSFORM: un,
      TRANSITION: Xe,
      TRANSITION_END: yr,
      get: br,
      getStyle: $e,
      create: ut,
      remove: gt,
      empty: Ci,
      toFront: Me,
      toBack: Se,
      hasClass: cn,
      addClass: ot,
      removeClass: vt,
      setClass: fn,
      getClass: Mi,
      setOpacity: At,
      testProp: Si,
      setTransform: me,
      setPosition: bt,
      getPosition: ue,
      disableTextSelection: Ke,
      enableTextSelection: Je,
      disableImageDrag: _n,
      enableImageDrag: mn,
      preventOutline: gn,
      restoreOutline: Ei,
      getSizedParentNode: wr,
      getScale: vn
    };
    function st(t, e, n, l) {
      if (typeof e == "object")
        for (var d in e)
          Oi(t, d, e[d], n);
      else {
        e = k(e);
        for (var p = 0, x = e.length; p < x; p++)
          Oi(t, e[p], n, l);
      }
      return this;
    }
    var Nt = "_leaflet_events";
    function yt(t, e, n, l) {
      if (typeof e == "object")
        for (var d in e)
          bn(t, d, e[d], n);
      else if (e) {
        e = k(e);
        for (var p = 0, x = e.length; p < x; p++)
          bn(t, e[p], n, l);
      } else {
        for (var E in t[Nt])
          bn(t, E, t[Nt][E]);
        delete t[Nt];
      }
      return this;
    }
    function xr() {
      if (Gt)
        return !(wi || xi);
    }
    var yn = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function Oi(t, e, n, l) {
      var d = e + f(n) + (l ? "_" + f(l) : "");
      if (t[Nt] && t[Nt][d])
        return this;
      var p = function(E) {
        return n.call(l || t, E || window.event);
      }, x = p;
      Gt && e.indexOf("touch") === 0 ? Es(t, e, p, d) : qt && e === "dblclick" && !xr() ? Ds(t, p, d) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(yn[e] || e, p, Te ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (p = function(E) {
        E = E || window.event, Ii(t, E) && x(E);
      }, t.addEventListener(yn[e], p, !1)) : t.addEventListener(e, x, !1) : "attachEvent" in t && t.attachEvent("on" + e, p), t[Nt] = t[Nt] || {}, t[Nt][d] = p;
    }
    function bn(t, e, n, l) {
      var d = e + f(n) + (l ? "_" + f(l) : ""), p = t[Nt] && t[Nt][d];
      if (!p)
        return this;
      Gt && e.indexOf("touch") === 0 ? Os(t, e, d) : qt && e === "dblclick" && !xr() ? js(t, d) : "removeEventListener" in t ? t.removeEventListener(yn[e] || e, p, !1) : "detachEvent" in t && t.detachEvent("on" + e, p), t[Nt][d] = null;
    }
    function pe(t) {
      return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Pn(t), this;
    }
    function wn(t) {
      return Oi(t, "wheel", pe), this;
    }
    function ti(t) {
      return st(t, "mousedown touchstart dblclick", pe), Oi(t, "click", Ln), this;
    }
    function Zt(t) {
      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
    }
    function Jt(t) {
      return Zt(t), pe(t), this;
    }
    function Lr(t, e) {
      if (!e)
        return new R(t.clientX, t.clientY);
      var n = vn(e), l = n.boundingClientRect;
      return new R(
        // offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (t.clientX - l.left) / n.x - e.clientLeft,
        (t.clientY - l.top) / n.y - e.clientTop
      );
    }
    var Us = dr && tn ? 2 * window.devicePixelRatio : en ? window.devicePixelRatio : 1;
    function Pr(t) {
      return wi ? t.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        t.deltaY && t.deltaMode === 0 ? -t.deltaY / Us : (
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
    var xn = {};
    function Ln(t) {
      xn[t.type] = !0;
    }
    function Pn(t) {
      var e = xn[t.type];
      return xn[t.type] = !1, e;
    }
    function Ii(t, e) {
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
    var Vs = {
      on: st,
      off: yt,
      stopPropagation: pe,
      disableScrollPropagation: wn,
      disableClickPropagation: ti,
      preventDefault: Zt,
      stop: Jt,
      getMousePosition: Lr,
      getWheelDelta: Pr,
      fakeStop: Ln,
      skipped: Pn,
      isExternalTarget: Ii,
      addListener: st,
      removeListener: yt
    }, Tr = H.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(t, e, n, l) {
        this.stop(), this._el = t, this._inProgress = !0, this._duration = n || 0.25, this._easeOutPower = 1 / Math.max(l || 0.5, 0.2), this._startPos = ue(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      },
      // @method stop()
      // Stops the animation (if currently running).
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = K(this._animate, this), this._step();
      },
      _step: function(t) {
        var e = +/* @__PURE__ */ new Date() - this._startTime, n = this._duration * 1e3;
        e < n ? this._runFrame(this._easeOut(e / n), t) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(t, e) {
        var n = this._startPos.add(this._offset.multiplyBy(t));
        e && n._round(), bt(this._el, n), this.fire("step");
      },
      _complete: function() {
        it(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    }), lt = H.extend({
      options: {
        // @section Map State Options
        // @option crs: CRS = L.CRS.EPSG3857
        // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
        // sure what it means.
        crs: Mt,
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
        e = S(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = h(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(q(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Xe && Bt && !mr && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), st(this._proxy, yr, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      // @section Methods for modifying map state
      // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) with the given
      // animation options.
      setView: function(t, e, n) {
        if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(q(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && n !== !0) {
          n.animate !== void 0 && (n.zoom = u({ animate: n.animate }, n.zoom), n.pan = u({ animate: n.animate, duration: n.duration }, n.pan));
          var l = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan);
          if (l)
            return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(t, e), this;
      },
      // @method setZoom(zoom: Number, options?: Zoom/pan options): this
      // Sets the zoom of the map.
      setZoom: function(t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
      },
      // @method zoomIn(delta?: Number, options?: Zoom options): this
      // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomIn: function(t, e) {
        return t = t || (Bt ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
      },
      // @method zoomOut(delta?: Number, options?: Zoom options): this
      // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomOut: function(t, e) {
        return t = t || (Bt ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
      },
      // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified geographical point on the map
      // stationary (e.g. used internally for scroll zoom and double-click zoom).
      // @alternative
      // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
      setZoomAround: function(t, e, n) {
        var l = this.getZoomScale(e), d = this.getSize().divideBy(2), p = t instanceof R ? t : this.latLngToContainerPoint(t), x = p.subtract(d).multiplyBy(1 - 1 / l), E = this.containerPointToLatLng(d.add(x));
        return this.setView(E, e, { zoom: n });
      },
      _getBoundsCenterZoom: function(t, e) {
        e = e || {}, t = t.getBounds ? t.getBounds() : Y(t);
        var n = O(e.paddingTopLeft || e.padding || [0, 0]), l = O(e.paddingBottomRight || e.padding || [0, 0]), d = this.getBoundsZoom(t, !1, n.add(l));
        if (d = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, d) : d, d === 1 / 0)
          return {
            center: t.getCenter(),
            zoom: d
          };
        var p = l.subtract(n).divideBy(2), x = this.project(t.getSouthWest(), d), E = this.project(t.getNorthEast(), d), I = this.unproject(x.add(E).divideBy(2).add(p), d);
        return {
          center: I,
          zoom: d
        };
      },
      // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets a map view that contains the given geographical bounds with the
      // maximum zoom level possible.
      fitBounds: function(t, e) {
        if (t = Y(t), !t.isValid())
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
        if (t = O(t).round(), e = e || {}, !t.x && !t.y)
          return this.fire("moveend");
        if (e.animate !== !0 && !this.getSize().contains(t))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new Tr(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
          ot(this._mapPane, "leaflet-pan-anim");
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
        if (n = n || {}, n.animate === !1 || !Bt)
          return this.setView(t, e, n);
        this._stop();
        var l = this.project(this.getCenter()), d = this.project(t), p = this.getSize(), x = this._zoom;
        t = q(t), e = e === void 0 ? x : e;
        var E = Math.max(p.x, p.y), I = E * this.getZoomScale(x, e), j = d.distanceTo(l) || 1, W = 1.42, J = W * W;
        function ct(wt) {
          var Vi = wt ? -1 : 1, Sa = wt ? I : E, za = I * I - E * E + Vi * J * J * j * j, Ea = 2 * Sa * J * j, Rn = za / Ea, ro = Math.sqrt(Rn * Rn + 1) - Rn, Oa = ro < 1e-9 ? -18 : Math.log(ro);
          return Oa;
        }
        function ne(wt) {
          return (Math.exp(wt) - Math.exp(-wt)) / 2;
        }
        function ye(wt) {
          return (Math.exp(wt) + Math.exp(-wt)) / 2;
        }
        function Ui(wt) {
          return ne(wt) / ye(wt);
        }
        var fe = ct(0);
        function Zn(wt) {
          return E * (ye(fe) / ye(fe + W * wt));
        }
        function Ta(wt) {
          return E * (ye(fe) * Ui(fe + W * wt) - ne(fe)) / J;
        }
        function ka(wt) {
          return 1 - Math.pow(1 - wt, 1.5);
        }
        var Ca = Date.now(), io = (ct(1) - fe) / W, Ma = n.duration ? 1e3 * n.duration : 1e3 * io * 0.8;
        function no() {
          var wt = (Date.now() - Ca) / Ma, Vi = ka(wt) * io;
          wt <= 1 ? (this._flyToFrame = K(no, this), this._move(
            this.unproject(l.add(d.subtract(l).multiplyBy(Ta(Vi) / j)), x),
            this.getScaleZoom(E / Zn(Vi), x),
            { flyTo: !0 }
          )) : this._move(t, e)._moveEnd(!0);
        }
        return this._moveStart(!0, n.noMoveStart), no.call(this), this;
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
        if (t = Y(t), t.isValid())
          this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds);
        else return this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds);
        return this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds);
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
        var n = this.getCenter(), l = this._limitCenter(n, this._zoom, Y(t));
        return n.equals(l) || this.panTo(l, e), this._enforcingBounds = !1, this;
      },
      // @method panInside(latlng: LatLng, options?: options): this
      // Pans the map the minimum amount to make the `latlng` visible. Use
      // `padding`, `paddingTopLeft` and `paddingTopRight` options to fit
      // the display to more restricted bounds, like [`fitBounds`](#map-fitbounds).
      // If `latlng` is already within the (optionally padded) display bounds,
      // the map will not be panned.
      panInside: function(t, e) {
        e = e || {};
        var n = O(e.paddingTopLeft || e.padding || [0, 0]), l = O(e.paddingBottomRight || e.padding || [0, 0]), d = this.getCenter(), p = this.project(d), x = this.project(t), E = this.getPixelBounds(), I = E.getSize().divideBy(2), j = U([E.min.add(n), E.max.subtract(l)]);
        if (!j.contains(x)) {
          this._enforcingBounds = !0;
          var W = p.subtract(x), J = O(x.x + W.x, x.y + W.y);
          (x.x < j.min.x || x.x > j.max.x) && (J.x = p.x - W.x, W.x > 0 ? J.x += I.x - n.x : J.x -= I.x - l.x), (x.y < j.min.y || x.y > j.max.y) && (J.y = p.y - W.y, W.y > 0 ? J.y += I.y - n.y : J.y -= I.y - l.y), this.panTo(this.unproject(J), e), this._enforcingBounds = !1;
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
        var n = this.getSize(), l = e.divideBy(2).round(), d = n.divideBy(2).round(), p = l.subtract(d);
        return !p.x && !p.y ? this : (t.animate && t.pan ? this.panBy(p) : (t.pan && this._rawPanBy(p), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(h(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
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
        var e = t.code, n = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
        this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
          code: e,
          message: "Geolocation error: " + n + "."
        });
      },
      _handleGeolocationResponse: function(t) {
        var e = t.coords.latitude, n = t.coords.longitude, l = new G(e, n), d = l.toBounds(t.coords.accuracy * 2), p = this._locateOptions;
        if (p.setView) {
          var x = this.getBoundsZoom(d);
          this.setView(l, p.maxZoom ? Math.min(x, p.maxZoom) : x);
        }
        var E = {
          latlng: l,
          bounds: d,
          timestamp: t.timestamp
        };
        for (var I in t.coords)
          typeof t.coords[I] == "number" && (E[I] = t.coords[I]);
        this.fire("locationfound", E);
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
        if (this._initEvents(!0), this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), gt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (it(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var t;
        for (t in this._layers)
          this._layers[t].remove();
        for (t in this._panes)
          gt(this._panes[t]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      // @section Other Methods
      // @method createPane(name: String, container?: HTMLElement): HTMLElement
      // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
      // then returns it. The pane is created as a child of `container`, or
      // as a child of the main map pane if not set.
      createPane: function(t, e) {
        var n = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), l = ut("div", n, e || this._mapPane);
        return t && (this._panes[t] = l), l;
      },
      // @section Methods for Getting Map State
      // @method getCenter(): LatLng
      // Returns the geographical center of the map view
      getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
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
        t = Y(t), n = O(n || [0, 0]);
        var l = this.getZoom() || 0, d = this.getMinZoom(), p = this.getMaxZoom(), x = t.getNorthWest(), E = t.getSouthEast(), I = this.getSize().subtract(n), j = U(this.project(E, l), this.project(x, l)).getSize(), W = Bt ? this.options.zoomSnap : 1, J = I.x / j.x, ct = I.y / j.y, ne = e ? Math.max(J, ct) : Math.min(J, ct);
        return l = this.getScaleZoom(ne, l), W && (l = Math.round(l / (W / 100)) * (W / 100), l = e ? Math.ceil(l / W) * W : Math.floor(l / W) * W), Math.max(d, Math.min(p, l));
      },
      // @method getSize(): Point
      // Returns the current size of the map container (in pixels).
      getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new R(
          this._container.clientWidth || 0,
          this._container.clientHeight || 0
        ), this._sizeChanged = !1), this._size.clone();
      },
      // @method getPixelBounds(): Bounds
      // Returns the bounds of the current map view in projected pixel
      // coordinates (sometimes useful in layer and overlay implementations).
      getPixelBounds: function(t, e) {
        var n = this._getTopLeftPoint(t, e);
        return new N(n, n.add(this.getSize()));
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
        return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(q(t), e);
      },
      // @method unproject(point: Point, zoom: Number): LatLng
      // Inverse of [`project`](#map-project).
      unproject: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(O(t), e);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(t) {
        var e = O(t).add(this.getPixelOrigin());
        return this.unproject(e);
      },
      // @method latLngToLayerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the [origin pixel](#map-getpixelorigin).
      latLngToLayerPoint: function(t) {
        var e = this.project(q(t))._round();
        return e._subtract(this.getPixelOrigin());
      },
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
      // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
      // CRS's bounds.
      // By default this means longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees.
      wrapLatLng: function(t) {
        return this.options.crs.wrapLatLng(q(t));
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring that
      // its center is within the CRS's bounds.
      // By default this means the center longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees, and the majority of the bounds
      // overlaps the CRS's bounds.
      wrapLatLngBounds: function(t) {
        return this.options.crs.wrapLatLngBounds(Y(t));
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates according to
      // the map's CRS. By default this measures distance in meters.
      distance: function(t, e) {
        return this.options.crs.distance(q(t), q(e));
      },
      // @method containerPointToLayerPoint(point: Point): Point
      // Given a pixel coordinate relative to the map container, returns the corresponding
      // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
      containerPointToLayerPoint: function(t) {
        return O(t).subtract(this._getMapPanePos());
      },
      // @method layerPointToContainerPoint(point: Point): Point
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding pixel coordinate relative to the map container.
      layerPointToContainerPoint: function(t) {
        return O(t).add(this._getMapPanePos());
      },
      // @method containerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the map container, returns
      // the corresponding geographical coordinate (for the current zoom level).
      containerPointToLatLng: function(t) {
        var e = this.containerPointToLayerPoint(O(t));
        return this.layerPointToLatLng(e);
      },
      // @method latLngToContainerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the map container.
      latLngToContainerPoint: function(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(q(t)));
      },
      // @method mouseEventToContainerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to the
      // map container where the event took place.
      mouseEventToContainerPoint: function(t) {
        return Lr(t, this._container);
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
        var e = this._container = br(t);
        if (e) {
          if (e._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        st(e, "scroll", this._onScroll, this), this._containerId = f(e);
      },
      _initLayout: function() {
        var t = this._container;
        this._fadeAnimated = this.options.fadeAnimation && Bt, ot(t, "leaflet-container" + (qt ? " leaflet-touch" : "") + (he ? " leaflet-retina" : "") + (Le ? " leaflet-oldie" : "") + (xi ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var e = $e(t, "position");
        e !== "absolute" && e !== "relative" && e !== "fixed" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var t = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), bt(this._mapPane, new R(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (ot(t.markerPane, "leaflet-zoom-hide"), ot(t.shadowPane, "leaflet-zoom-hide"));
      },
      // private methods that modify map state
      // @section Map state change events
      _resetView: function(t, e) {
        bt(this._mapPane, new R(0, 0));
        var n = !this._loaded;
        this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
        var l = this._zoom !== e;
        this._moveStart(l, !1)._move(t, e)._moveEnd(l), this.fire("viewreset"), n && this.fire("load");
      },
      _moveStart: function(t, e) {
        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
      },
      _move: function(t, e, n) {
        e === void 0 && (e = this._zoom);
        var l = this._zoom !== e;
        return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (l || n && n.pinch) && this.fire("zoom", n), this.fire("move", n);
      },
      _moveEnd: function(t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return it(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(t) {
        bt(this._mapPane, this._getMapPanePos().subtract(t));
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
        var e = t ? yt : st;
        e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), Bt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        it(this._resizeRequest), this._resizeRequest = K(
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
        for (var n = [], l, d = e === "mouseout" || e === "mouseover", p = t.target || t.srcElement, x = !1; p; ) {
          if (l = this._targets[f(p)], l && (e === "click" || e === "preclick") && !t._simulated && this._draggableMoved(l)) {
            x = !0;
            break;
          }
          if (l && l.listens(e, !0) && (d && !Ii(p, t) || (n.push(l), d)) || p === this._container)
            break;
          p = p.parentNode;
        }
        return !n.length && !x && !d && Ii(p, t) && (n = [this]), n;
      },
      _handleDOMEvent: function(t) {
        if (!(!this._loaded || Pn(t))) {
          var e = t.type;
          (e === "mousedown" || e === "keypress" || e === "keyup" || e === "keydown") && gn(t.target || t.srcElement), this._fireDOMEvent(t, e);
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function(t, e, n) {
        if (t.type === "click") {
          var l = u({}, t);
          l.type = "preclick", this._fireDOMEvent(l, l.type, n);
        }
        if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e)), !!n.length)) {
          var d = n[0];
          e === "contextmenu" && d.listens(e, !0) && Zt(t);
          var p = {
            originalEvent: t
          };
          if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
            var x = d.getLatLng && (!d._radius || d._radius <= 10);
            p.containerPoint = x ? this.latLngToContainerPoint(d.getLatLng()) : this.mouseEventToContainerPoint(t), p.layerPoint = this.containerPointToLayerPoint(p.containerPoint), p.latlng = x ? d.getLatLng() : this.layerPointToLatLng(p.layerPoint);
          }
          for (var E = 0; E < n.length; E++)
            if (n[E].fire(e, p, !0), p.originalEvent._stopped || n[E].options.bubblingMouseEvents === !1 && C(this._mouseEvents, e) !== -1)
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
        return ue(this._mapPane) || new R(0, 0);
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
        var l = this.project(t, e), d = this.getSize().divideBy(2), p = new N(l.subtract(d), l.add(d)), x = this._getBoundsOffset(p, n, e);
        return x.round().equals([0, 0]) ? t : this.unproject(l.add(x), e);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(t, e) {
        if (!e)
          return t;
        var n = this.getPixelBounds(), l = new N(n.min.add(t), n.max.add(t));
        return t.add(this._getBoundsOffset(l, e));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function(t, e, n) {
        var l = U(
          this.project(e.getNorthEast(), n),
          this.project(e.getSouthWest(), n)
        ), d = l.min.subtract(t.min), p = l.max.subtract(t.max), x = this._rebound(d.x, -p.x), E = this._rebound(d.y, -p.y);
        return new R(x, E);
      },
      _rebound: function(t, e) {
        return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      },
      _limitZoom: function(t) {
        var e = this.getMinZoom(), n = this.getMaxZoom(), l = Bt ? this.options.zoomSnap : 1;
        return l && (t = Math.round(t / l) * l), Math.max(e, Math.min(n, t));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        vt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(t, e) {
        var n = this._getCenterOffset(t)._trunc();
        return (e && e.animate) !== !0 && !this.getSize().contains(n) ? !1 : (this.panBy(n, e), !0);
      },
      _createAnimProxy: function() {
        var t = this._proxy = ut("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
          var n = un, l = this._proxy.style[n];
          me(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), l === this._proxy.style[n] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        gt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var t = this.getCenter(), e = this.getZoom();
        me(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
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
        return n.animate !== !0 && !this.getSize().contains(d) ? !1 : (K(function() {
          this._moveStart(!0, !1)._animateZoom(t, e, !0);
        }, this), !0);
      },
      _animateZoom: function(t, e, n, l) {
        this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, ot(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: t,
          zoom: e,
          noUpdate: l
        }), setTimeout(h(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && vt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), K(function() {
          this._moveEnd(!0);
        }, this));
      }
    });
    function Hs(t, e) {
      return new lt(t, e);
    }
    var Ft = g.extend({
      // @section
      // @aka Control options
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
        return ot(e, "leaflet-control"), n.indexOf("bottom") !== -1 ? l.insertBefore(e, l.firstChild) : l.appendChild(e), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (gt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(t) {
        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
      }
    }), ei = function(t) {
      return new Ft(t);
    };
    lt.include({
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
        var t = this._controlCorners = {}, e = "leaflet-", n = this._controlContainer = ut("div", e + "control-container", this._container);
        function l(d, p) {
          var x = e + d + " " + e + p;
          t[d + p] = ut("div", x, n);
        }
        l("top", "left"), l("top", "right"), l("bottom", "left"), l("bottom", "right");
      },
      _clearControlPos: function() {
        for (var t in this._controlCorners)
          gt(this._controlCorners[t]);
        gt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var kr = Ft.extend({
      // @section
      // @aka Control.Layers options
      options: {
        // @option collapsed: Boolean = true
        // If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
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
        S(this, n), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;
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
        return Ft.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
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
        ot(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return t < this._section.clientHeight ? (ot(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : vt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      // @method collapse(): this
      // Collapse the control container if expanded.
      collapse: function() {
        return vt(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var t = "leaflet-control-layers", e = this._container = ut("div", t), n = this.options.collapsed;
        e.setAttribute("aria-haspopup", !0), ti(e), wn(e);
        var l = this._section = ut("section", t + "-list");
        n && (this._map.on("click", this.collapse, this), Ge || st(e, {
          mouseenter: this.expand,
          mouseleave: this.collapse
        }, this));
        var d = this._layersLink = ut("a", t + "-toggle", e);
        d.href = "#", d.title = "Layers", qt ? (st(d, "click", Jt), st(d, "click", this.expand, this)) : st(d, "focus", this.expand, this), n || this.expand(), this._baseLayersList = ut("div", t + "-base", l), this._separator = ut("div", t + "-separator", l), this._overlaysList = ut("div", t + "-overlays", l), e.appendChild(l);
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
        Ci(this._baseLayersList), Ci(this._overlaysList), this._layerControlInputs = [];
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
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
      _createRadioElement: function(t, e) {
        var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", l = document.createElement("div");
        return l.innerHTML = n, l.firstChild;
      },
      _addItem: function(t) {
        var e = document.createElement("label"), n = this._map.hasLayer(t.layer), l;
        t.overlay ? (l = document.createElement("input"), l.type = "checkbox", l.className = "leaflet-control-layers-selector", l.defaultChecked = n) : l = this._createRadioElement("leaflet-base-layers_" + f(this), n), this._layerControlInputs.push(l), l.layerId = f(t.layer), st(l, "click", this._onInputClick, this);
        var d = document.createElement("span");
        d.innerHTML = " " + t.name;
        var p = document.createElement("div");
        e.appendChild(p), p.appendChild(l), p.appendChild(d);
        var x = t.overlay ? this._overlaysList : this._baseLayersList;
        return x.appendChild(e), this._checkDisabledLayers(), e;
      },
      _onInputClick: function() {
        var t = this._layerControlInputs, e, n, l = [], d = [];
        this._handlingClick = !0;
        for (var p = t.length - 1; p >= 0; p--)
          e = t[p], n = this._getLayer(e.layerId).layer, e.checked ? l.push(n) : e.checked || d.push(n);
        for (p = 0; p < d.length; p++)
          this._map.hasLayer(d[p]) && this._map.removeLayer(d[p]);
        for (p = 0; p < l.length; p++)
          this._map.hasLayer(l[p]) || this._map.addLayer(l[p]);
        this._handlingClick = !1, this._refocusOnMap();
      },
      _checkDisabledLayers: function() {
        for (var t = this._layerControlInputs, e, n, l = this._map.getZoom(), d = t.length - 1; d >= 0; d--)
          e = t[d], n = this._getLayer(e.layerId).layer, e.disabled = n.options.minZoom !== void 0 && l < n.options.minZoom || n.options.maxZoom !== void 0 && l > n.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expand: function() {
        return this.expand();
      },
      _collapse: function() {
        return this.collapse();
      }
    }), Ws = function(t, e, n) {
      return new kr(t, e, n);
    }, Tn = Ft.extend({
      // @section
      // @aka Control.Zoom options
      options: {
        position: "topleft",
        // @option zoomInText: String = '+'
        // The text set on the 'zoom in' button.
        zoomInText: "+",
        // @option zoomInTitle: String = 'Zoom in'
        // The title set on the 'zoom in' button.
        zoomInTitle: "Zoom in",
        // @option zoomOutText: String = '&#x2212;'
        // The text set on the 'zoom out' button.
        zoomOutText: "&#x2212;",
        // @option zoomOutTitle: String = 'Zoom out'
        // The title set on the 'zoom out' button.
        zoomOutTitle: "Zoom out"
      },
      onAdd: function(t) {
        var e = "leaflet-control-zoom", n = ut("div", e + " leaflet-bar"), l = this.options;
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
        var p = ut("a", n, l);
        return p.innerHTML = t, p.href = "#", p.title = e, p.setAttribute("role", "button"), p.setAttribute("aria-label", e), ti(p), st(p, "click", Jt), st(p, "click", d, this), st(p, "click", this._refocusOnMap, this), p;
      },
      _updateDisabled: function() {
        var t = this._map, e = "leaflet-disabled";
        vt(this._zoomInButton, e), vt(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && ot(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && ot(this._zoomInButton, e);
      }
    });
    lt.mergeOptions({
      zoomControl: !0
    }), lt.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new Tn(), this.addControl(this.zoomControl));
    });
    var Ys = function(t) {
      return new Tn(t);
    }, Cr = Ft.extend({
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
        var e = "leaflet-control-scale", n = ut("div", e), l = this.options;
        return this._addScales(l, e + "-line", n), t.on(l.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), n;
      },
      onRemove: function(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(t, e, n) {
        t.metric && (this._mScale = ut("div", e, n)), t.imperial && (this._iScale = ut("div", e, n));
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
    }), Gs = function(t) {
      return new Cr(t);
    }, kn = Ft.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
      },
      initialize: function(t) {
        S(this, t), this._attributions = {};
      },
      onAdd: function(t) {
        t.attributionControl = this, this._container = ut("div", "leaflet-control-attribution"), ti(this._container);
        for (var e in t._layers)
          t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        return this._update(), this._container;
      },
      // @method setPrefix(prefix: String): this
      // Sets the text before the attributions.
      setPrefix: function(t) {
        return this.options.prefix = t, this._update(), this;
      },
      // @method addAttribution(text: String): this
      // Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
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
          this.options.prefix && n.push(this.options.prefix), t.length && n.push(t.join(", ")), this._container.innerHTML = n.join(" | ");
        }
      }
    });
    lt.mergeOptions({
      attributionControl: !0
    }), lt.addInitHook(function() {
      this.options.attributionControl && new kn().addTo(this);
    });
    var qs = function(t) {
      return new kn(t);
    };
    Ft.Layers = kr, Ft.Zoom = Tn, Ft.Scale = Cr, Ft.Attribution = kn, ei.layers = Ws, ei.zoom = Ys, ei.scale = Gs, ei.attribution = qs;
    var $t = g.extend({
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
    $t.addTo = function(t, e) {
      return t.addHandler(e, this), this;
    };
    var Xs = { Events: M }, Mr = qt ? "touchstart mousedown" : "mousedown", Sr = {
      mousedown: "mouseup",
      touchstart: "touchend",
      pointerdown: "touchend",
      MSPointerDown: "touchend"
    }, Cn = {
      mousedown: "mousemove",
      touchstart: "touchmove",
      pointerdown: "touchmove",
      MSPointerDown: "touchmove"
    }, ge = H.extend({
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
        this._enabled || (st(this._dragStartTarget, Mr, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (ge._dragging === this && this.finishDrag(), yt(this._dragStartTarget, Mr, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(t) {
        if (!(t._simulated || !this._enabled) && (this._moved = !1, !cn(this._element, "leaflet-zoom-anim") && !(ge._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (ge._dragging = this, this._preventOutline && gn(this._element), _n(), Ke(), !this._moving))) {
          this.fire("down");
          var e = t.touches ? t.touches[0] : t, n = wr(this._element);
          this._startPoint = new R(e.clientX, e.clientY), this._parentScale = vn(n), st(document, Cn[t.type], this._onMove, this), st(document, Sr[t.type], this._onUp, this);
        }
      },
      _onMove: function(t) {
        if (!(t._simulated || !this._enabled)) {
          if (t.touches && t.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, n = new R(e.clientX, e.clientY)._subtract(this._startPoint);
          !n.x && !n.y || Math.abs(n.x) + Math.abs(n.y) < this.options.clickTolerance || (n.x /= this._parentScale.x, n.y /= this._parentScale.y, Zt(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = ue(this._element).subtract(n), ot(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ot(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(n), this._moving = !0, it(this._animRequest), this._lastEvent = t, this._animRequest = K(this._updatePosition, this, !0));
        }
      },
      _updatePosition: function() {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t), bt(this._element, this._newPos), this.fire("drag", t);
      },
      _onUp: function(t) {
        t._simulated || !this._enabled || this.finishDrag();
      },
      finishDrag: function() {
        vt(document.body, "leaflet-dragging"), this._lastTarget && (vt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
        for (var t in Cn)
          yt(document, Cn[t], this._onMove, this), yt(document, Sr[t], this._onUp, this);
        mn(), Je(), this._moved && this._moving && (it(this._animRequest), this.fire("dragend", {
          distance: this._newPos.distanceTo(this._startPos)
        })), this._moving = !1, ge._dragging = !1;
      }
    });
    function zr(t, e) {
      if (!e || !t.length)
        return t.slice();
      var n = e * e;
      return t = Js(t, n), t = Ks(t, n), t;
    }
    function Er(t, e, n) {
      return Math.sqrt(ii(t, e, n, !0));
    }
    function $s(t, e, n) {
      return ii(t, e, n);
    }
    function Ks(t, e) {
      var n = t.length, l = typeof Uint8Array < "u" ? Uint8Array : Array, d = new l(n);
      d[0] = d[n - 1] = 1, Mn(t, d, e, 0, n - 1);
      var p, x = [];
      for (p = 0; p < n; p++)
        d[p] && x.push(t[p]);
      return x;
    }
    function Mn(t, e, n, l, d) {
      var p = 0, x, E, I;
      for (E = l + 1; E <= d - 1; E++)
        I = ii(t[E], t[l], t[d], !0), I > p && (x = E, p = I);
      p > n && (e[x] = 1, Mn(t, e, n, l, x), Mn(t, e, n, x, d));
    }
    function Js(t, e) {
      for (var n = [t[0]], l = 1, d = 0, p = t.length; l < p; l++)
        Qs(t[l], t[d]) > e && (n.push(t[l]), d = l);
      return d < p - 1 && n.push(t[p - 1]), n;
    }
    var Or;
    function Ir(t, e, n, l, d) {
      var p = l ? Or : ve(t, n), x = ve(e, n), E, I, j;
      for (Or = x; ; ) {
        if (!(p | x))
          return [t, e];
        if (p & x)
          return !1;
        E = p || x, I = Bi(t, e, E, n, d), j = ve(I, n), E === p ? (t = I, p = j) : (e = I, x = j);
      }
    }
    function Bi(t, e, n, l, d) {
      var p = e.x - t.x, x = e.y - t.y, E = l.min, I = l.max, j, W;
      return n & 8 ? (j = t.x + p * (I.y - t.y) / x, W = I.y) : n & 4 ? (j = t.x + p * (E.y - t.y) / x, W = E.y) : n & 2 ? (j = I.x, W = t.y + x * (I.x - t.x) / p) : n & 1 && (j = E.x, W = t.y + x * (E.x - t.x) / p), new R(j, W, d);
    }
    function ve(t, e) {
      var n = 0;
      return t.x < e.min.x ? n |= 1 : t.x > e.max.x && (n |= 2), t.y < e.min.y ? n |= 4 : t.y > e.max.y && (n |= 8), n;
    }
    function Qs(t, e) {
      var n = e.x - t.x, l = e.y - t.y;
      return n * n + l * l;
    }
    function ii(t, e, n, l) {
      var d = e.x, p = e.y, x = n.x - d, E = n.y - p, I = x * x + E * E, j;
      return I > 0 && (j = ((t.x - d) * x + (t.y - p) * E) / I, j > 1 ? (d = n.x, p = n.y) : j > 0 && (d += x * j, p += E * j)), x = t.x - d, E = t.y - p, l ? x * x + E * E : new R(d, p);
    }
    function Qt(t) {
      return !T(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
    }
    function Br(t) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Qt(t);
    }
    var ta = {
      simplify: zr,
      pointToSegmentDistance: Er,
      closestPointOnSegment: $s,
      clipSegment: Ir,
      _getEdgeIntersection: Bi,
      _getBitCode: ve,
      _sqClosestPointOnSegment: ii,
      isFlat: Qt,
      _flat: Br
    };
    function Ar(t, e, n) {
      var l, d = [1, 4, 2, 8], p, x, E, I, j, W, J, ct;
      for (p = 0, W = t.length; p < W; p++)
        t[p]._code = ve(t[p], e);
      for (E = 0; E < 4; E++) {
        for (J = d[E], l = [], p = 0, W = t.length, x = W - 1; p < W; x = p++)
          I = t[p], j = t[x], I._code & J ? j._code & J || (ct = Bi(j, I, J, e, n), ct._code = ve(ct, e), l.push(ct)) : (j._code & J && (ct = Bi(j, I, J, e, n), ct._code = ve(ct, e), l.push(ct)), l.push(I));
        t = l;
      }
      return t;
    }
    var ea = {
      clipPolygon: Ar
    }, Sn = {
      project: function(t) {
        return new R(t.lng, t.lat);
      },
      unproject: function(t) {
        return new G(t.y, t.x);
      },
      bounds: new N([-180, -90], [180, 90])
    }, zn = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new N([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(t) {
        var e = Math.PI / 180, n = this.R, l = t.lat * e, d = this.R_MINOR / n, p = Math.sqrt(1 - d * d), x = p * Math.sin(l), E = Math.tan(Math.PI / 4 - l / 2) / Math.pow((1 - x) / (1 + x), p / 2);
        return l = -n * Math.log(Math.max(E, 1e-10)), new R(t.lng * e * n, l);
      },
      unproject: function(t) {
        for (var e = 180 / Math.PI, n = this.R, l = this.R_MINOR / n, d = Math.sqrt(1 - l * l), p = Math.exp(-t.y / n), x = Math.PI / 2 - 2 * Math.atan(p), E = 0, I = 0.1, j; E < 15 && Math.abs(I) > 1e-7; E++)
          j = d * Math.sin(x), j = Math.pow((1 - j) / (1 + j), d / 2), I = Math.PI / 2 - 2 * Math.atan(p * j) - x, x += I;
        return new G(x * e, t.x * e / n);
      }
    }, ia = {
      LonLat: Sn,
      Mercator: zn,
      SphericalMercator: at
    }, na = u({}, nt, {
      code: "EPSG:3395",
      projection: zn,
      transformation: function() {
        var t = 0.5 / (Math.PI * zn.R);
        return V(t, 0.5, -t, 0.5);
      }()
    }), Zr = u({}, nt, {
      code: "EPSG:4326",
      projection: Sn,
      transformation: V(1 / 180, 1, -1 / 180, 0.5)
    }), ra = u({}, tt, {
      projection: Sn,
      transformation: V(1, 0, -1, 0),
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
    tt.Earth = nt, tt.EPSG3395 = na, tt.EPSG3857 = Mt, tt.EPSG900913 = xe, tt.EPSG4326 = Zr, tt.Simple = ra;
    var Ut = H.extend({
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
          this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", { layer: this });
        }
      }
    });
    lt.include({
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
        return this._layers[e] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the map
      hasLayer: function(t) {
        return !!t && f(t) in this._layers;
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
        (isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[f(t)] = t, this._updateZoomLevels());
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
    var ze = Ut.extend({
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
        if (!t)
          return !1;
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
    }), oa = function(t, e) {
      return new ze(t, e);
    }, Ee = ze.extend({
      addLayer: function(t) {
        return this.hasLayer(t) ? this : (t.addEventParent(this), ze.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
      },
      removeLayer: function(t) {
        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), ze.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
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
    }), sa = function(t, e) {
      return new Ee(t, e);
    }, Oe = g.extend({
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
        tooltipAnchor: [0, 0]
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
        return this._setIconStyles(l, t), l;
      },
      _setIconStyles: function(t, e) {
        var n = this.options, l = n[e + "Size"];
        typeof l == "number" && (l = [l, l]);
        var d = O(l), p = O(e === "shadow" && n.shadowAnchor || n.iconAnchor || d && d.divideBy(2, !0));
        t.className = "leaflet-marker-" + e + " " + (n.className || ""), p && (t.style.marginLeft = -p.x + "px", t.style.marginTop = -p.y + "px"), d && (t.style.width = d.x + "px", t.style.height = d.y + "px");
      },
      _createImg: function(t, e) {
        return e = e || document.createElement("img"), e.src = t, e;
      },
      _getIconUrl: function(t) {
        return he && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
      }
    });
    function aa(t) {
      return new Oe(t);
    }
    var ni = Oe.extend({
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
        return ni.imagePath || (ni.imagePath = this._detectIconPath()), (this.options.imagePath || ni.imagePath) + Oe.prototype._getIconUrl.call(this, t);
      },
      _detectIconPath: function() {
        var t = ut("div", "leaflet-default-icon-path", document.body), e = $e(t, "background-image") || $e(t, "backgroundImage");
        return document.body.removeChild(t), e === null || e.indexOf("url") !== 0 ? e = "" : e = e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, ""), e;
      }
    }), Rr = $t.extend({
      initialize: function(t) {
        this._marker = t;
      },
      addHooks: function() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new ge(t, t, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), ot(t, "leaflet-marker-draggable");
      },
      removeHooks: function() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && vt(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(t) {
        var e = this._marker, n = e._map, l = this._marker.options.autoPanSpeed, d = this._marker.options.autoPanPadding, p = ue(e._icon), x = n.getPixelBounds(), E = n.getPixelOrigin(), I = U(
          x.min._subtract(E).add(d),
          x.max._subtract(E).subtract(d)
        );
        if (!I.contains(p)) {
          var j = O(
            (Math.max(I.max.x, p.x) - I.max.x) / (x.max.x - I.max.x) - (Math.min(I.min.x, p.x) - I.min.x) / (x.min.x - I.min.x),
            (Math.max(I.max.y, p.y) - I.max.y) / (x.max.y - I.max.y) - (Math.min(I.min.y, p.y) - I.min.y) / (x.min.y - I.min.y)
          ).multiplyBy(l);
          n.panBy(j, { animate: !1 }), this._draggable._newPos._add(j), this._draggable._startPos._add(j), bt(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = K(this._adjustPan.bind(this, t));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(t) {
        this._marker.options.autoPan && (it(this._panRequest), this._panRequest = K(this._adjustPan.bind(this, t)));
      },
      _onDrag: function(t) {
        var e = this._marker, n = e._shadow, l = ue(e._icon), d = e._map.layerPointToLatLng(l);
        n && bt(n, l), e._latlng = d, t.latlng = d, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function(t) {
        it(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      }
    }), Ai = Ut.extend({
      // @section
      // @aka Marker options
      options: {
        // @option icon: Icon = *
        // Icon instance to use for rendering the marker.
        // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
        // If not specified, a common instance of `L.Icon.Default` is used.
        icon: new ni(),
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option keyboard: Boolean = true
        // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
        keyboard: !0,
        // @option title: String = ''
        // Text for the browser tooltip that appear on marker hover (no tooltip by default).
        title: "",
        // @option alt: String = ''
        // Text for the `alt` attribute of the icon image (useful for accessibility).
        alt: "",
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
        S(this, e), this._latlng = q(t);
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
        return this._latlng = q(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
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
        n !== this._icon && (this._icon && this._removeIcon(), l = !0, t.title && (n.title = t.title), n.tagName === "IMG" && (n.alt = t.alt || "")), ot(n, e), t.keyboard && (n.tabIndex = "0"), this._icon = n, t.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        });
        var d = t.icon.createShadow(this._shadow), p = !1;
        d !== this._shadow && (this._removeShadow(), p = !0), d && (ot(d, e), d.alt = ""), this._shadow = d, t.opacity < 1 && this._updateOpacity(), l && this.getPane().appendChild(this._icon), this._initInteraction(), d && p && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), gt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && gt(this._shadow), this._shadow = null;
      },
      _setPos: function(t) {
        this._icon && bt(this._icon, t), this._shadow && bt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(e);
      },
      _initInteraction: function() {
        if (this.options.interactive && (ot(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Rr)) {
          var t = this.options.draggable;
          this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Rr(this), t && this.dragging.enable();
        }
      },
      // @method setOpacity(opacity: Number): this
      // Changes the opacity of the marker.
      setOpacity: function(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var t = this.options.opacity;
        this._icon && At(this._icon, t), this._shadow && At(this._shadow, t);
      },
      _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function() {
        this._updateZIndex(0);
      },
      _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      }
    });
    function la(t, e) {
      return new Ai(t, e);
    }
    var ce = Ut.extend({
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
        return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
      }
    }), Zi = ce.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(t, e) {
        S(this, e), this._latlng = q(t), this._radius = this.options.radius;
      },
      // @method setLatLng(latLng: LatLng): this
      // Sets the position of a circle marker to a new location.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = q(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
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
        return ce.prototype.setStyle.call(this, t), this.setRadius(e), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var t = this._radius, e = this._radiusY || t, n = this._clickTolerance(), l = [t + n, e + n];
        this._pxBounds = new N(this._point.subtract(l), this._point.add(l));
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
    function ha(t, e) {
      return new Zi(t, e);
    }
    var En = Zi.extend({
      initialize: function(t, e, n) {
        if (typeof e == "number" && (e = u({}, n, { radius: e })), S(this, e), this._latlng = q(t), isNaN(this.options.radius))
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
      setStyle: ce.prototype.setStyle,
      _project: function() {
        var t = this._latlng.lng, e = this._latlng.lat, n = this._map, l = n.options.crs;
        if (l.distance === nt.distance) {
          var d = Math.PI / 180, p = this._mRadius / nt.R / d, x = n.project([e + p, t]), E = n.project([e - p, t]), I = x.add(E).divideBy(2), j = n.unproject(I).lat, W = Math.acos((Math.cos(p * d) - Math.sin(e * d) * Math.sin(j * d)) / (Math.cos(e * d) * Math.cos(j * d))) / d;
          (isNaN(W) || W === 0) && (W = p / Math.cos(Math.PI / 180 * e)), this._point = I.subtract(n.getPixelOrigin()), this._radius = isNaN(W) ? 0 : I.x - n.project([j, t - W]).x, this._radiusY = I.y - x.y;
        } else {
          var J = l.unproject(l.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = n.latLngToLayerPoint(this._latlng), this._radius = this._point.x - n.latLngToLayerPoint(J).x;
        }
        this._updateBounds();
      }
    });
    function ua(t, e, n) {
      return new En(t, e, n);
    }
    var te = ce.extend({
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
        for (var e = 1 / 0, n = null, l = ii, d, p, x = 0, E = this._parts.length; x < E; x++)
          for (var I = this._parts[x], j = 1, W = I.length; j < W; j++) {
            d = I[j - 1], p = I[j];
            var J = l(t, d, p, !0);
            J < e && (e = J, n = l(t, d, p));
          }
        return n && (n.distance = Math.sqrt(e)), n;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        var t, e, n, l, d, p, x, E = this._rings[0], I = E.length;
        if (!I)
          return null;
        for (t = 0, e = 0; t < I - 1; t++)
          e += E[t].distanceTo(E[t + 1]) / 2;
        if (e === 0)
          return this._map.layerPointToLatLng(E[0]);
        for (t = 0, l = 0; t < I - 1; t++)
          if (d = E[t], p = E[t + 1], n = d.distanceTo(p), l += n, l > e)
            return x = (l - e) / n, this._map.layerPointToLatLng([
              p.x - x * (p.x - d.x),
              p.y - x * (p.y - d.y)
            ]);
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
        return e = e || this._defaultShape(), t = q(t), e.push(t), this._bounds.extend(t), this.redraw();
      },
      _setLatLngs: function(t) {
        this._bounds = new X(), this._latlngs = this._convertLatLngs(t);
      },
      _defaultShape: function() {
        return Qt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
      _convertLatLngs: function(t) {
        for (var e = [], n = Qt(t), l = 0, d = t.length; l < d; l++)
          n ? (e[l] = q(t[l]), this._bounds.extend(e[l])) : e[l] = this._convertLatLngs(t[l]);
        return e;
      },
      _project: function() {
        var t = new N();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
      },
      _updateBounds: function() {
        var t = this._clickTolerance(), e = new R(t, t);
        this._pxBounds = new N([
          this._rawPxBounds.min.subtract(e),
          this._rawPxBounds.max.add(e)
        ]);
      },
      // recursively turns latlngs into a set of rings with projected coordinates
      _projectLatlngs: function(t, e, n) {
        var l = t[0] instanceof G, d = t.length, p, x;
        if (l) {
          for (x = [], p = 0; p < d; p++)
            x[p] = this._map.latLngToLayerPoint(t[p]), n.extend(x[p]);
          e.push(x);
        } else
          for (p = 0; p < d; p++)
            this._projectLatlngs(t[p], e, n);
      },
      // clip polyline by renderer bounds so that we have less to render for performance
      _clipPoints: function() {
        var t = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var e = this._parts, n, l, d, p, x, E, I;
          for (n = 0, d = 0, p = this._rings.length; n < p; n++)
            for (I = this._rings[n], l = 0, x = I.length; l < x - 1; l++)
              E = Ir(I[l], I[l + 1], t, l, !0), E && (e[d] = e[d] || [], e[d].push(E[0]), (E[1] !== I[l + 1] || l === x - 2) && (e[d].push(E[1]), d++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var t = this._parts, e = this.options.smoothFactor, n = 0, l = t.length; n < l; n++)
          t[n] = zr(t[n], e);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t, e) {
        var n, l, d, p, x, E, I = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (n = 0, p = this._parts.length; n < p; n++)
          for (E = this._parts[n], l = 0, x = E.length, d = x - 1; l < x; d = l++)
            if (!(!e && l === 0) && Er(t, E[d], E[l]) <= I)
              return !0;
        return !1;
      }
    });
    function ca(t, e) {
      return new te(t, e);
    }
    te._flat = Br;
    var Ie = te.extend({
      options: {
        fill: !0
      },
      isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        var t, e, n, l, d, p, x, E, I, j = this._rings[0], W = j.length;
        if (!W)
          return null;
        for (p = x = E = 0, t = 0, e = W - 1; t < W; e = t++)
          n = j[t], l = j[e], d = n.y * l.x - l.y * n.x, x += (n.x + l.x) * d, E += (n.y + l.y) * d, p += d * 3;
        return p === 0 ? I = j[0] : I = [x / p, E / p], this._map.layerPointToLatLng(I);
      },
      _convertLatLngs: function(t) {
        var e = te.prototype._convertLatLngs.call(this, t), n = e.length;
        return n >= 2 && e[0] instanceof G && e[0].equals(e[n - 1]) && e.pop(), e;
      },
      _setLatLngs: function(t) {
        te.prototype._setLatLngs.call(this, t), Qt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return Qt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var t = this._renderer._bounds, e = this.options.weight, n = new R(e, e);
        if (t = new N(t.min.subtract(n), t.max.add(n)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var l = 0, d = this._rings.length, p; l < d; l++)
            p = Ar(this._rings[l], t, !0), p.length && this._parts.push(p);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        var e = !1, n, l, d, p, x, E, I, j;
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (p = 0, I = this._parts.length; p < I; p++)
          for (n = this._parts[p], x = 0, j = n.length, E = j - 1; x < j; E = x++)
            l = n[x], d = n[E], l.y > t.y != d.y > t.y && t.x < (d.x - l.x) * (t.y - l.y) / (d.y - l.y) + l.x && (e = !e);
        return e || te.prototype._containsPoint.call(this, t, !0);
      }
    });
    function fa(t, e) {
      return new Ie(t, e);
    }
    var ee = Ee.extend({
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
        var p = this.options;
        if (p.filter && !p.filter(t))
          return this;
        var x = On(t, p);
        return x ? (x.feature = ji(t), x.defaultOptions = x.options, this.resetStyle(x), p.onEachFeature && p.onEachFeature(t, x), this.addLayer(x)) : this;
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
    function On(t, e) {
      var n = t.type === "Feature" ? t.geometry : t, l = n ? n.coordinates : null, d = [], p = e && e.pointToLayer, x = e && e.coordsToLatLng || In, E, I, j, W;
      if (!l && !n)
        return null;
      switch (n.type) {
        case "Point":
          return E = x(l), Dr(p, t, E, e);
        case "MultiPoint":
          for (j = 0, W = l.length; j < W; j++)
            E = x(l[j]), d.push(Dr(p, t, E, e));
          return new Ee(d);
        case "LineString":
        case "MultiLineString":
          return I = Ri(l, n.type === "LineString" ? 0 : 1, x), new te(I, e);
        case "Polygon":
        case "MultiPolygon":
          return I = Ri(l, n.type === "Polygon" ? 1 : 2, x), new Ie(I, e);
        case "GeometryCollection":
          for (j = 0, W = n.geometries.length; j < W; j++) {
            var J = On({
              geometry: n.geometries[j],
              type: "Feature",
              properties: t.properties
            }, e);
            J && d.push(J);
          }
          return new Ee(d);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function Dr(t, e, n, l) {
      return t ? t(e, n) : new Ai(n, l && l.markersInheritOptions && l);
    }
    function In(t) {
      return new G(t[1], t[0], t[2]);
    }
    function Ri(t, e, n) {
      for (var l = [], d = 0, p = t.length, x; d < p; d++)
        x = e ? Ri(t[d], e - 1, n) : (n || In)(t[d]), l.push(x);
      return l;
    }
    function Bn(t, e) {
      return e = typeof e == "number" ? e : 6, t.alt !== void 0 ? [y(t.lng, e), y(t.lat, e), y(t.alt, e)] : [y(t.lng, e), y(t.lat, e)];
    }
    function Di(t, e, n, l) {
      for (var d = [], p = 0, x = t.length; p < x; p++)
        d.push(e ? Di(t[p], e - 1, n, l) : Bn(t[p], l));
      return !e && n && d.push(d[0]), d;
    }
    function Be(t, e) {
      return t.feature ? u({}, t.feature, { geometry: e }) : ji(e);
    }
    function ji(t) {
      return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
        type: "Feature",
        properties: {},
        geometry: t
      };
    }
    var An = {
      toGeoJSON: function(t) {
        return Be(this, {
          type: "Point",
          coordinates: Bn(this.getLatLng(), t)
        });
      }
    };
    Ai.include(An), En.include(An), Zi.include(An), te.include({
      toGeoJSON: function(t) {
        var e = !Qt(this._latlngs), n = Di(this._latlngs, e ? 1 : 0, !1, t);
        return Be(this, {
          type: (e ? "Multi" : "") + "LineString",
          coordinates: n
        });
      }
    }), Ie.include({
      toGeoJSON: function(t) {
        var e = !Qt(this._latlngs), n = e && !Qt(this._latlngs[0]), l = Di(this._latlngs, n ? 2 : e ? 1 : 0, !0, t);
        return e || (l = [l]), Be(this, {
          type: (n ? "Multi" : "") + "Polygon",
          coordinates: l
        });
      }
    }), ze.include({
      toMultiPoint: function(t) {
        var e = [];
        return this.eachLayer(function(n) {
          e.push(n.toGeoJSON(t).geometry.coordinates);
        }), Be(this, {
          type: "MultiPoint",
          coordinates: e
        });
      },
      // @method toGeoJSON(precision?: Number): Object
      // `precision` is the number of decimal places for coordinates.
      // The default value is 6 places.
      // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
      toGeoJSON: function(t) {
        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (e === "MultiPoint")
          return this.toMultiPoint(t);
        var n = e === "GeometryCollection", l = [];
        return this.eachLayer(function(d) {
          if (d.toGeoJSON) {
            var p = d.toGeoJSON(t);
            if (n)
              l.push(p.geometry);
            else {
              var x = ji(p);
              x.type === "FeatureCollection" ? l.push.apply(l, x.features) : l.push(x);
            }
          }
        }), n ? Be(this, {
          geometries: l,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: l
        };
      }
    });
    function jr(t, e) {
      return new ee(t, e);
    }
    var da = jr, Ni = Ut.extend({
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
        this._url = t, this._bounds = Y(e), S(this, n);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (ot(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        gt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
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
        return this._map && Me(this._image), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all overlays.
      bringToBack: function() {
        return this._map && Se(this._image), this;
      },
      // @method setUrl(url: String): this
      // Changes the URL of the image.
      setUrl: function(t) {
        return this._url = t, this._image && (this._image.src = t), this;
      },
      // @method setBounds(bounds: LatLngBounds): this
      // Update the bounds that this ImageOverlay covers
      setBounds: function(t) {
        return this._bounds = Y(t), this._map && this._reset(), this;
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
        var t = this._url.tagName === "IMG", e = this._image = t ? this._url : ut("img");
        if (ot(e, "leaflet-image-layer"), this._zoomAnimated && ot(e, "leaflet-zoom-animated"), this.options.className && ot(e, this.options.className), e.onselectstart = m, e.onmousemove = m, e.onload = h(this.fire, this, "load"), e.onerror = h(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
          this._url = e.src;
          return;
        }
        e.src = this._url, e.alt = this.options.alt;
      },
      _animateZoom: function(t) {
        var e = this._map.getZoomScale(t.zoom), n = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        me(this._image, n, e);
      },
      _reset: function() {
        var t = this._image, e = new N(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), n = e.getSize();
        bt(t, e.min), t.style.width = n.x + "px", t.style.height = n.y + "px";
      },
      _updateOpacity: function() {
        At(this._image, this.options.opacity);
      },
      _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function() {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && (this._url = t, this._image.src = t);
      }
    }), _a = function(t, e, n) {
      return new Ni(t, e, n);
    }, Nr = Ni.extend({
      // @section
      // @aka VideoOverlay options
      options: {
        // @option autoplay: Boolean = true
        // Whether the video starts playing automatically when loaded.
        autoplay: !0,
        // @option loop: Boolean = true
        // Whether the video will loop back to the beginning when played.
        loop: !0,
        // @option keepAspectRatio: Boolean = true
        // Whether the video will save aspect ratio after the projection.
        // Relevant for supported browsers. Browser compatibility- https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
        keepAspectRatio: !0,
        // @option muted: Boolean = false
        // Whether the video starts on mute when loaded.
        muted: !1
      },
      _initImage: function() {
        var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : ut("video");
        if (ot(e, "leaflet-image-layer"), this._zoomAnimated && ot(e, "leaflet-zoom-animated"), this.options.className && ot(e, this.options.className), e.onselectstart = m, e.onmousemove = m, e.onloadeddata = h(this.fire, this, "load"), t) {
          for (var n = e.getElementsByTagName("source"), l = [], d = 0; d < n.length; d++)
            l.push(n[d].src);
          this._url = n.length > 0 ? l : [e.src];
          return;
        }
        T(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted;
        for (var p = 0; p < this._url.length; p++) {
          var x = ut("source");
          x.src = this._url[p], e.appendChild(x);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function ma(t, e, n) {
      return new Nr(t, e, n);
    }
    var Fr = Ni.extend({
      _initImage: function() {
        var t = this._image = this._url;
        ot(t, "leaflet-image-layer"), this._zoomAnimated && ot(t, "leaflet-zoom-animated"), this.options.className && ot(t, this.options.className), t.onselectstart = m, t.onmousemove = m;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function pa(t, e, n) {
      return new Fr(t, e, n);
    }
    var ie = Ut.extend({
      // @section
      // @aka DivOverlay options
      options: {
        // @option offset: Point = Point(0, 7)
        // The offset of the popup position. Useful to control the anchor
        // of the popup when opening it on some overlays.
        offset: [0, 7],
        // @option className: String = ''
        // A custom CSS class name to assign to the popup.
        className: "",
        // @option pane: String = 'popupPane'
        // `Map pane` where the popup will be added.
        pane: "popupPane"
      },
      initialize: function(t, e) {
        S(this, t), this._source = e;
      },
      onAdd: function(t) {
        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && At(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && At(this._container, 1), this.bringToFront();
      },
      onRemove: function(t) {
        t._fadeAnimated ? (At(this._container, 0), this._removeTimeout = setTimeout(h(gt, void 0, this._container), 200)) : gt(this._container);
      },
      // @namespace Popup
      // @method getLatLng: LatLng
      // Returns the geographical point of popup.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Sets the geographical point where the popup will open.
      setLatLng: function(t) {
        return this._latlng = q(t), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      // @method getContent: String|HTMLElement
      // Returns the content of the popup.
      getContent: function() {
        return this._content;
      },
      // @method setContent(htmlContent: String|HTMLElement|Function): this
      // Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
      setContent: function(t) {
        return this._content = t, this.update(), this;
      },
      // @method getElement: String|HTMLElement
      // Returns the HTML container of the popup.
      getElement: function() {
        return this._container;
      },
      // @method update: null
      // Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
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
      // Returns `true` when the popup is visible on the map.
      isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      },
      // @method bringToFront: this
      // Brings this popup in front of other popups (in the same map pane).
      bringToFront: function() {
        return this._map && Me(this._container), this;
      },
      // @method bringToBack: this
      // Brings this popup to the back of other popups (in the same map pane).
      bringToBack: function() {
        return this._map && Se(this._container), this;
      },
      _prepareOpen: function(t, e, n) {
        if (e instanceof Ut || (n = e, e = t), e instanceof Ee)
          for (var l in t._layers) {
            e = t._layers[l];
            break;
          }
        if (!n)
          if (e.getCenter)
            n = e.getCenter();
          else if (e.getLatLng)
            n = e.getLatLng();
          else
            throw new Error("Unable to get source layer LatLng.");
        return this._source = e, this.update(), n;
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
          var t = this._map.latLngToLayerPoint(this._latlng), e = O(this.options.offset), n = this._getAnchor();
          this._zoomAnimated ? bt(this._container, t.add(n)) : e = e.add(t).add(n);
          var l = this._containerBottom = -e.y, d = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
          this._container.style.bottom = l + "px", this._container.style.left = d + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    }), Ae = ie.extend({
      // @section
      // @aka Popup options
      options: {
        // @option maxWidth: Number = 300
        // Max width of the popup, in pixels.
        maxWidth: 300,
        // @option minWidth: Number = 50
        // Min width of the popup, in pixels.
        minWidth: 50,
        // @option maxHeight: Number = null
        // If set, creates a scrollable container of the given height
        // inside a popup if its content exceeds it.
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
      // Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
      openOn: function(t) {
        return t.openPopup(this), this;
      },
      onAdd: function(t) {
        ie.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof ce || this._source.on("preclick", pe));
      },
      onRemove: function(t) {
        ie.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof ce || this._source.off("preclick", pe));
      },
      getEvents: function() {
        var t = ie.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      },
      _close: function() {
        this._map && this._map.closePopup(this);
      },
      _initLayout: function() {
        var t = "leaflet-popup", e = this._container = ut(
          "div",
          t + " " + (this.options.className || "") + " leaflet-zoom-animated"
        ), n = this._wrapper = ut("div", t + "-content-wrapper", e);
        if (this._contentNode = ut("div", t + "-content", n), ti(e), wn(this._contentNode), st(e, "contextmenu", pe), this._tipContainer = ut("div", t + "-tip-container", e), this._tip = ut("div", t + "-tip", this._tipContainer), this.options.closeButton) {
          var l = this._closeButton = ut("a", t + "-close-button", e);
          l.href = "#close", l.innerHTML = "&#215;", st(l, "click", this._onCloseButtonClick, this);
        }
      },
      _updateLayout: function() {
        var t = this._contentNode, e = t.style;
        e.width = "", e.whiteSpace = "nowrap";
        var n = t.offsetWidth;
        n = Math.min(n, this.options.maxWidth), n = Math.max(n, this.options.minWidth), e.width = n + 1 + "px", e.whiteSpace = "", e.height = "";
        var l = t.offsetHeight, d = this.options.maxHeight, p = "leaflet-popup-scrolled";
        d && l > d ? (e.height = d + "px", ot(t, p)) : vt(t, p), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), n = this._getAnchor();
        bt(this._container, e.add(n));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          this._map._panAnim && this._map._panAnim.stop();
          var t = this._map, e = parseInt($e(this._container, "marginBottom"), 10) || 0, n = this._container.offsetHeight + e, l = this._containerWidth, d = new R(this._containerLeft, -n - this._containerBottom);
          d._add(ue(this._container));
          var p = t.layerPointToContainerPoint(d), x = O(this.options.autoPanPadding), E = O(this.options.autoPanPaddingTopLeft || x), I = O(this.options.autoPanPaddingBottomRight || x), j = t.getSize(), W = 0, J = 0;
          p.x + l + I.x > j.x && (W = p.x + l - j.x + I.x), p.x - W - E.x < 0 && (W = p.x - E.x), p.y + n + I.y > j.y && (J = p.y + n - j.y + I.y), p.y - J - E.y < 0 && (J = p.y - E.y), (W || J) && t.fire("autopanstart").panBy([W, J]);
        }
      },
      _onCloseButtonClick: function(t) {
        this._close(), Jt(t);
      },
      _getAnchor: function() {
        return O(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), ga = function(t, e) {
      return new Ae(t, e);
    };
    lt.mergeOptions({
      closePopupOnClick: !0
    }), lt.include({
      // @method openPopup(popup: Popup): this
      // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
      // @alternative
      // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
      // Creates a popup with the specified content and options and opens it in the given point on a map.
      openPopup: function(t, e, n) {
        return t instanceof Ae || (t = new Ae(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t));
      },
      // @method closePopup(popup?: Popup): this
      // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
      closePopup: function(t) {
        return (!t || t === this._popup) && (t = this._popup, this._popup = null), t && this.removeLayer(t), this;
      }
    }), Ut.include({
      // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
      // Binds a popup to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindPopup: function(t, e) {
        return t instanceof Ae ? (S(t, e), this._popup = t, t._source = this) : ((!this._popup || e) && (this._popup = new Ae(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
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
      openPopup: function(t, e) {
        return this._popup && this._map && (e = this._popup._prepareOpen(this, t, e), this._map.openPopup(this._popup, e)), this;
      },
      // @method closePopup(): this
      // Closes the popup bound to this layer if it is open.
      closePopup: function() {
        return this._popup && this._popup._close(), this;
      },
      // @method togglePopup(): this
      // Opens or closes the popup bound to this layer depending on its current state.
      togglePopup: function(t) {
        return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
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
        var e = t.layer || t.target;
        if (this._popup && this._map) {
          if (Jt(t), e instanceof ce) {
            this.openPopup(t.layer || t.target, t.latlng);
            return;
          }
          this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng);
        }
      },
      _movePopup: function(t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function(t) {
        t.originalEvent.keyCode === 13 && this._openPopup(t);
      }
    });
    var Ze = ie.extend({
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
        // @option interactive: Boolean = false
        // If true, the tooltip will listen to the feature events.
        interactive: !1,
        // @option opacity: Number = 0.9
        // Tooltip container opacity.
        opacity: 0.9
      },
      onAdd: function(t) {
        ie.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && this._source.fire("tooltipopen", { tooltip: this }, !0);
      },
      onRemove: function(t) {
        ie.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && this._source.fire("tooltipclose", { tooltip: this }, !0);
      },
      getEvents: function() {
        var t = ie.prototype.getEvents.call(this);
        return qt && !this.options.permanent && (t.preclick = this._close), t;
      },
      _close: function() {
        this._map && this._map.closeTooltip(this);
      },
      _initLayout: function() {
        var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = ut("div", e);
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(t) {
        var e, n, l = this._map, d = this._container, p = l.latLngToContainerPoint(l.getCenter()), x = l.layerPointToContainerPoint(t), E = this.options.direction, I = d.offsetWidth, j = d.offsetHeight, W = O(this.options.offset), J = this._getAnchor();
        E === "top" ? (e = I / 2, n = j) : E === "bottom" ? (e = I / 2, n = 0) : E === "center" ? (e = I / 2, n = j / 2) : E === "right" ? (e = 0, n = j / 2) : E === "left" ? (e = I, n = j / 2) : x.x < p.x ? (E = "right", e = 0, n = j / 2) : (E = "left", e = I + (W.x + J.x) * 2, n = j / 2), t = t.subtract(O(e, n, !0)).add(W).add(J), vt(d, "leaflet-tooltip-right"), vt(d, "leaflet-tooltip-left"), vt(d, "leaflet-tooltip-top"), vt(d, "leaflet-tooltip-bottom"), ot(d, "leaflet-tooltip-" + E), bt(d, t);
      },
      _updatePosition: function() {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      },
      setOpacity: function(t) {
        this.options.opacity = t, this._container && At(this._container, t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
        this._setPosition(e);
      },
      _getAnchor: function() {
        return O(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), va = function(t, e) {
      return new Ze(t, e);
    };
    lt.include({
      // @method openTooltip(tooltip: Tooltip): this
      // Opens the specified tooltip.
      // @alternative
      // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
      // Creates a tooltip with the specified content and options and open it.
      openTooltip: function(t, e, n) {
        return t instanceof Ze || (t = new Ze(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t);
      },
      // @method closeTooltip(tooltip?: Tooltip): this
      // Closes the tooltip given as parameter.
      closeTooltip: function(t) {
        return t && this.removeLayer(t), this;
      }
    }), Ut.include({
      // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
      // Binds a tooltip to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindTooltip: function(t, e) {
        return t instanceof Ze ? (S(t, e), this._tooltip = t, t._source = this) : ((!this._tooltip || e) && (this._tooltip = new Ze(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
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
          this._tooltip.options.permanent ? n.add = this._openTooltip : (n.mouseover = this._openTooltip, n.mouseout = this.closeTooltip, this._tooltip.options.sticky && (n.mousemove = this._moveTooltip), qt && (n.click = this._openTooltip)), this[e](n), this._tooltipHandlersAdded = !t;
        }
      },
      // @method openTooltip(latlng?: LatLng): this
      // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
      openTooltip: function(t, e) {
        return this._tooltip && this._map && (e = this._tooltip._prepareOpen(this, t, e), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (ot(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this;
      },
      // @method closeTooltip(): this
      // Closes the tooltip bound to this layer if it is open.
      closeTooltip: function() {
        return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (vt(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this;
      },
      // @method toggleTooltip(): this
      // Opens or closes the tooltip bound to this layer depending on its current state.
      toggleTooltip: function(t) {
        return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this;
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
      _openTooltip: function(t) {
        var e = t.layer || t.target;
        !this._tooltip || !this._map || this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0);
      },
      _moveTooltip: function(t) {
        var e = t.latlng, n, l;
        this._tooltip.options.sticky && t.originalEvent && (n = this._map.mouseEventToContainerPoint(t.originalEvent), l = this._map.containerPointToLayerPoint(n), e = this._map.layerPointToLatLng(l)), this._tooltip.setLatLng(e);
      }
    });
    var Ur = Oe.extend({
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
        if (n.html instanceof Element ? (Ci(e), e.appendChild(n.html)) : e.innerHTML = n.html !== !1 ? n.html : "", n.bgPos) {
          var l = O(n.bgPos);
          e.style.backgroundPosition = -l.x + "px " + -l.y + "px";
        }
        return this._setIconStyles(e, "icon"), e;
      },
      createShadow: function() {
        return null;
      }
    });
    function ya(t) {
      return new Ur(t);
    }
    Oe.Default = ni;
    var ri = Ut.extend({
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
        updateWhenIdle: Pe,
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
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update();
      },
      beforeAdd: function(t) {
        t._addZoomLimit(this);
      },
      onRemove: function(t) {
        this._removeAllTiles(), gt(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      // @method bringToFront: this
      // Brings the tile layer to the top of all tile layers.
      bringToFront: function() {
        return this._map && (Me(this._container), this._setAutoZIndex(Math.max)), this;
      },
      // @method bringToBack: this
      // Brings the tile layer to the bottom of all tile layers.
      bringToBack: function() {
        return this._map && (Se(this._container), this._setAutoZIndex(Math.min)), this;
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
        return this._map && (this._removeAllTiles(), this._update()), this;
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
        return t instanceof R ? t : new R(t, t);
      },
      _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(t) {
        for (var e = this.getPane().children, n = -t(-1 / 0, 1 / 0), l = 0, d = e.length, p; l < d; l++)
          p = e[l].style.zIndex, e[l] !== this._container && p && (n = t(n, +p));
        isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !Le) {
          At(this._container, this.options.opacity);
          var t = +/* @__PURE__ */ new Date(), e = !1, n = !1;
          for (var l in this._tiles) {
            var d = this._tiles[l];
            if (!(!d.current || !d.loaded)) {
              var p = Math.min(1, (t - d.loaded) / 200);
              At(d.el, p), p < 1 ? e = !0 : (d.active ? n = !0 : this._onOpaqueTile(d), d.active = !0);
            }
          }
          n && !this._noPrune && this._pruneTiles(), e && (it(this._fadeFrame), this._fadeFrame = K(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: m,
      _initContainer: function() {
        this._container || (this._container = ut("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var t = this._tileZoom, e = this.options.maxZoom;
        if (t !== void 0) {
          for (var n in this._levels)
            n = Number(n), this._levels[n].el.children.length || n === t ? (this._levels[n].el.style.zIndex = e - Math.abs(t - n), this._onUpdateLevel(n)) : (gt(this._levels[n].el), this._removeTilesAtZoom(n), this._onRemoveLevel(n), delete this._levels[n]);
          var l = this._levels[t], d = this._map;
          return l || (l = this._levels[t] = {}, l.el = ut("div", "leaflet-tile-container leaflet-zoom-animated", this._container), l.el.style.zIndex = e, l.origin = d.project(d.unproject(d.getPixelOrigin()), t).round(), l.zoom = t, this._setZoomTransform(l, d.getCenter(), d.getZoom()), m(l.el.offsetWidth), this._onCreateLevel(l)), this._level = l, l;
        }
      },
      _onUpdateLevel: m,
      _onRemoveLevel: m,
      _onCreateLevel: m,
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
          gt(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
        this._removeAllTiles(), this._tileZoom = void 0;
      },
      _retainParent: function(t, e, n, l) {
        var d = Math.floor(t / 2), p = Math.floor(e / 2), x = n - 1, E = new R(+d, +p);
        E.z = +x;
        var I = this._tileCoordsToKey(E), j = this._tiles[I];
        return j && j.active ? (j.retain = !0, !0) : (j && j.loaded && (j.retain = !0), x > l ? this._retainParent(d, p, x, l) : !1);
      },
      _retainChildren: function(t, e, n, l) {
        for (var d = 2 * t; d < 2 * t + 2; d++)
          for (var p = 2 * e; p < 2 * e + 2; p++) {
            var x = new R(d, p);
            x.z = n + 1;
            var E = this._tileCoordsToKey(x), I = this._tiles[E];
            if (I && I.active) {
              I.retain = !0;
              continue;
            } else I && I.loaded && (I.retain = !0);
            n + 1 < l && this._retainChildren(d, p, n + 1, l);
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
        var p = this.options.updateWhenZooming && d !== this._tileZoom;
        (!l || p) && (this._tileZoom = d, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), d !== void 0 && this._update(t), n || this._pruneTiles(), this._noPrune = !!n), this._setZoomTransforms(t, e);
      },
      _setZoomTransforms: function(t, e) {
        for (var n in this._levels)
          this._setZoomTransform(this._levels[n], t, e);
      },
      _setZoomTransform: function(t, e, n) {
        var l = this._map.getZoomScale(n, t.zoom), d = t.origin.multiplyBy(l).subtract(this._map._getNewPixelOrigin(e, n)).round();
        Bt ? me(t.el, d, l) : bt(t.el, d);
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
        var e = this._map, n = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), l = e.getZoomScale(n, this._tileZoom), d = e.project(t, this._tileZoom).floor(), p = e.getSize().divideBy(l * 2);
        return new N(d.subtract(p), d.add(p));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(t) {
        var e = this._map;
        if (e) {
          var n = this._clampZoom(e.getZoom());
          if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
            var l = this._getTiledPixelBounds(t), d = this._pxBoundsToTileRange(l), p = d.getCenter(), x = [], E = this.options.keepBuffer, I = new N(
              d.getBottomLeft().subtract([E, -E]),
              d.getTopRight().add([E, -E])
            );
            if (!(isFinite(d.min.x) && isFinite(d.min.y) && isFinite(d.max.x) && isFinite(d.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var j in this._tiles) {
              var W = this._tiles[j].coords;
              (W.z !== this._tileZoom || !I.contains(new R(W.x, W.y))) && (this._tiles[j].current = !1);
            }
            if (Math.abs(n - this._tileZoom) > 1) {
              this._setView(t, n);
              return;
            }
            for (var J = d.min.y; J <= d.max.y; J++)
              for (var ct = d.min.x; ct <= d.max.x; ct++) {
                var ne = new R(ct, J);
                if (ne.z = this._tileZoom, !!this._isValidTile(ne)) {
                  var ye = this._tiles[this._tileCoordsToKey(ne)];
                  ye ? ye.current = !0 : x.push(ne);
                }
              }
            if (x.sort(function(fe, Zn) {
              return fe.distanceTo(p) - Zn.distanceTo(p);
            }), x.length !== 0) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var Ui = document.createDocumentFragment();
              for (ct = 0; ct < x.length; ct++)
                this._addTile(x[ct], Ui);
              this._level.el.appendChild(Ui);
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
        return Y(this.options.bounds).overlaps(l);
      },
      _keyToBounds: function(t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function(t) {
        var e = this._map, n = this.getTileSize(), l = t.scaleBy(n), d = l.add(n), p = e.unproject(l, t.z), x = e.unproject(d, t.z);
        return [p, x];
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
        var e = t.split(":"), n = new R(+e[0], +e[1]);
        return n.z = +e[2], n;
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        e && (gt(e.el), delete this._tiles[t], this.fire("tileunload", {
          tile: e.el,
          coords: this._keyToTileCoords(t)
        }));
      },
      _initTile: function(t) {
        ot(t, "leaflet-tile");
        var e = this.getTileSize();
        t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = m, t.onmousemove = m, Le && this.options.opacity < 1 && At(t, this.options.opacity), Ge && !qe && (t.style.WebkitBackfaceVisibility = "hidden");
      },
      _addTile: function(t, e) {
        var n = this._getTilePos(t), l = this._tileCoordsToKey(t), d = this.createTile(this._wrapCoords(t), h(this._tileReady, this, t));
        this._initTile(d), this.createTile.length < 2 && K(h(this._tileReady, this, t, null, d)), bt(d, n), this._tiles[l] = {
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
        n = this._tiles[l], n && (n.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (At(n.el, 0), it(this._fadeFrame), this._fadeFrame = K(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), e || (ot(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: n.el,
          coords: t
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Le || !this._map._fadeAnimated ? K(this._pruneTiles, this) : setTimeout(h(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(t) {
        var e = new R(
          this._wrapX ? v(t.x, this._wrapX) : t.x,
          this._wrapY ? v(t.y, this._wrapY) : t.y
        );
        return e.z = t.z, e;
      },
      _pxBoundsToTileRange: function(t) {
        var e = this.getTileSize();
        return new N(
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
    function ba(t) {
      return new ri(t);
    }
    var Re = ri.extend({
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
        crossOrigin: !1
      },
      initialize: function(t, e) {
        this._url = t, e = S(this, e), e.detectRetina && he && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), Ge || this.on("tileunload", this._onTileRemove);
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
        return st(n, "load", h(this._tileOnLoad, this, e, n)), st(n, "error", h(this._tileOnError, this, e, n)), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n;
      },
      // @section Extension methods
      // @uninheritable
      // Layers extending `TileLayer` might reimplement the following method.
      // @method getTileUrl(coords: Object): String
      // Called only internally, returns the URL for a tile given its coordinates.
      // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
      getTileUrl: function(t) {
        var e = {
          r: he ? "@2x" : "",
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
        Le ? setTimeout(h(t, this, null, e), 0) : t(null, e);
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
          this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = m, e.onerror = m, e.complete || (e.src = z, gt(e), delete this._tiles[t]));
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        if (e)
          return ur || e.el.setAttribute("src", z), ri.prototype._removeTile.call(this, t);
      },
      _tileReady: function(t, e, n) {
        if (!(!this._map || n && n.getAttribute("src") === z))
          return ri.prototype._tileReady.call(this, t, e, n);
      }
    });
    function Vr(t, e) {
      return new Re(t, e);
    }
    var Hr = Re.extend({
      // @section
      // @aka TileLayer.WMS options
      // If any custom options not documented here are used, they will be sent to the
      // WMS server as extra parameters in each request URL. This can be useful for
      // [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
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
        var d = e.detectRetina && he ? 2 : 1, p = this.getTileSize();
        n.width = p.x * d, n.height = p.y * d, this.wmsParams = n;
      },
      onAdd: function(t) {
        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[e] = this._crs.code, Re.prototype.onAdd.call(this, t);
      },
      getTileUrl: function(t) {
        var e = this._tileCoordsToNwSe(t), n = this._crs, l = U(n.project(e[0]), n.project(e[1])), d = l.min, p = l.max, x = (this._wmsVersion >= 1.3 && this._crs === Zr ? [d.y, d.x, p.y, p.x] : [d.x, d.y, p.x, p.y]).join(","), E = Re.prototype.getTileUrl.call(this, t);
        return E + B(this.wmsParams, E, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + x;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(t, e) {
        return u(this.wmsParams, t), e || this.redraw(), this;
      }
    });
    function wa(t, e) {
      return new Hr(t, e);
    }
    Re.WMS = Hr, Vr.wms = wa;
    var Kt = Ut.extend({
      // @section
      // @aka Renderer options
      options: {
        // @option padding: Number = 0.1
        // How much to extend the clip area around the map view (relative to its size)
        // e.g. 0.1 would be 10% of map view in each direction
        padding: 0.1,
        // @option tolerance: Number = 0
        // How much to extend click tolerance round a path/object on the map
        tolerance: 0
      },
      initialize: function(t) {
        S(this, t), f(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), this._zoomAnimated && ot(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
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
        var n = this._map.getZoomScale(e, this._zoom), l = ue(this._container), d = this._map.getSize().multiplyBy(0.5 + this.options.padding), p = this._map.project(this._center, e), x = this._map.project(t, e), E = x.subtract(p), I = d.multiplyBy(-n).add(l).add(d).subtract(E);
        Bt ? me(this._container, I, n) : bt(this._container, I);
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
        this._bounds = new N(n, n.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), Wr = Kt.extend({
      getEvents: function() {
        var t = Kt.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset, t;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        Kt.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var t = this._container = document.createElement("canvas");
        st(t, "mousemove", this._onMouseMove, this), st(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), st(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d");
      },
      _destroyContainer: function() {
        it(this._redrawRequest), delete this._ctx, gt(this._container), yt(this._container), delete this._container;
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
          Kt.prototype._update.call(this);
          var t = this._bounds, e = this._container, n = t.getSize(), l = he ? 2 : 1;
          bt(e, t.min), e.width = l * n.x, e.height = l * n.y, e.style.width = n.x + "px", e.style.height = n.y + "px", he && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
        }
      },
      _reset: function() {
        Kt.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
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
        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || K(this._redraw, this));
      },
      _extendRedrawBounds: function(t) {
        if (t._pxBounds) {
          var e = (t.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new N(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
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
          var n, l, d, p, x = t._parts, E = x.length, I = this._ctx;
          if (E) {
            for (I.beginPath(), n = 0; n < E; n++) {
              for (l = 0, d = x[n].length; l < d; l++)
                p = x[n][l], I[l ? "lineTo" : "moveTo"](p.x, p.y);
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
          n = d.layer, n.options.interactive && n._containsPoint(e) && (!(t.type === "click" || t.type !== "preclick") || !this._map._draggableMoved(n)) && (l = n);
        l && (Ln(t), this._fireEvent([l], t));
      },
      _onMouseMove: function(t) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var e = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, e);
        }
      },
      _handleMouseOut: function(t) {
        var e = this._hoveredLayer;
        e && (vt(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(t, e) {
        if (!this._mouseHoverThrottled) {
          for (var n, l, d = this._drawFirst; d; d = d.next)
            n = d.layer, n.options.interactive && n._containsPoint(e) && (l = n);
          l !== this._hoveredLayer && (this._handleMouseOut(t), l && (ot(this._container, "leaflet-interactive"), this._fireEvent([l], t, "mouseover"), this._hoveredLayer = l)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(h(function() {
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
    function Yr(t) {
      return pr ? new Wr(t) : null;
    }
    var oi = function() {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
          return document.createElement("<lvml:" + t + ' class="lvml">');
        };
      } catch {
        return function(e) {
          return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }
    }(), xa = {
      _initContainer: function() {
        this._container = ut("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (Kt.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(t) {
        var e = t._container = oi("shape");
        ot(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = oi("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[f(t)] = t;
      },
      _addPath: function(t) {
        var e = t._container;
        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
      },
      _removePath: function(t) {
        var e = t._container;
        gt(e), t.removeInteractiveTarget(e), delete this._layers[f(t)];
      },
      _updateStyle: function(t) {
        var e = t._stroke, n = t._fill, l = t.options, d = t._container;
        d.stroked = !!l.stroke, d.filled = !!l.fill, l.stroke ? (e || (e = t._stroke = oi("stroke")), d.appendChild(e), e.weight = l.weight + "px", e.color = l.color, e.opacity = l.opacity, l.dashArray ? e.dashStyle = T(l.dashArray) ? l.dashArray.join(" ") : l.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = l.lineCap.replace("butt", "flat"), e.joinstyle = l.lineJoin) : e && (d.removeChild(e), t._stroke = null), l.fill ? (n || (n = t._fill = oi("fill")), d.appendChild(n), n.color = l.fillColor || l.color, n.opacity = l.fillOpacity) : n && (d.removeChild(n), t._fill = null);
      },
      _updateCircle: function(t) {
        var e = t._point.round(), n = Math.round(t._radius), l = Math.round(t._radiusY || n);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + n + "," + l + " 0," + 65535 * 360);
      },
      _setPath: function(t, e) {
        t._path.v = e;
      },
      _bringToFront: function(t) {
        Me(t._container);
      },
      _bringToBack: function(t) {
        Se(t._container);
      }
    }, Fi = Pi ? oi : Ye, si = Kt.extend({
      getEvents: function() {
        var t = Kt.prototype.getEvents.call(this);
        return t.zoomstart = this._onZoomStart, t;
      },
      _initContainer: function() {
        this._container = Fi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Fi("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        gt(this._container), yt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _onZoomStart: function() {
        this._update();
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          Kt.prototype._update.call(this);
          var t = this._bounds, e = t.getSize(), n = this._container;
          (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, n.setAttribute("width", e.x), n.setAttribute("height", e.y)), bt(n, t.min), n.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
        }
      },
      // methods below are called by vector layers implementations
      _initPath: function(t) {
        var e = t._path = Fi("path");
        t.options.className && ot(e, t.options.className), t.options.interactive && ot(e, "leaflet-interactive"), this._updateStyle(t), this._layers[f(t)] = t;
      },
      _addPath: function(t) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
      },
      _removePath: function(t) {
        gt(t._path), t.removeInteractiveTarget(t._path), delete this._layers[f(t)];
      },
      _updatePath: function(t) {
        t._project(), t._update();
      },
      _updateStyle: function(t) {
        var e = t._path, n = t.options;
        e && (n.stroke ? (e.setAttribute("stroke", n.color), e.setAttribute("stroke-opacity", n.opacity), e.setAttribute("stroke-width", n.weight), e.setAttribute("stroke-linecap", n.lineCap), e.setAttribute("stroke-linejoin", n.lineJoin), n.dashArray ? e.setAttribute("stroke-dasharray", n.dashArray) : e.removeAttribute("stroke-dasharray"), n.dashOffset ? e.setAttribute("stroke-dashoffset", n.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), n.fill ? (e.setAttribute("fill", n.fillColor || n.color), e.setAttribute("fill-opacity", n.fillOpacity), e.setAttribute("fill-rule", n.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
      },
      _updatePoly: function(t, e) {
        this._setPath(t, hr(t._parts, e));
      },
      _updateCircle: function(t) {
        var e = t._point, n = Math.max(Math.round(t._radius), 1), l = Math.max(Math.round(t._radiusY), 1) || n, d = "a" + n + "," + l + " 0 1,0 ", p = t._empty() ? "M0 0" : "M" + (e.x - n) + "," + e.y + d + n * 2 + ",0 " + d + -n * 2 + ",0 ";
        this._setPath(t, p);
      },
      _setPath: function(t, e) {
        t._path.setAttribute("d", e);
      },
      // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
      _bringToFront: function(t) {
        Me(t._path);
      },
      _bringToBack: function(t) {
        Se(t._path);
      }
    });
    Pi && si.include(xa);
    function Gr(t) {
      return Li || Pi ? new si(t) : null;
    }
    lt.include({
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
        return this.options.preferCanvas && Yr(t) || Gr(t);
      }
    });
    var qr = Ie.extend({
      initialize: function(t, e) {
        Ie.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      },
      // @method setBounds(latLngBounds: LatLngBounds): this
      // Redraws the rectangle with the passed bounds.
      setBounds: function(t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function(t) {
        return t = Y(t), [
          t.getSouthWest(),
          t.getNorthWest(),
          t.getNorthEast(),
          t.getSouthEast()
        ];
      }
    });
    function La(t, e) {
      return new qr(t, e);
    }
    si.create = Fi, si.pointsToPath = hr, ee.geometryToLayer = On, ee.coordsToLatLng = In, ee.coordsToLatLngs = Ri, ee.latLngToCoords = Bn, ee.latLngsToCoords = Di, ee.getFeature = Be, ee.asFeature = ji, lt.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var Xr = $t.extend({
      initialize: function(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
      },
      addHooks: function() {
        st(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        yt(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        gt(this._pane), delete this._pane;
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
        this._clearDeferredResetState(), this._resetState(), Ke(), _n(), this._startPoint = this._map.mouseEventToContainerPoint(t), st(document, {
          contextmenu: Jt,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(t) {
        this._moved || (this._moved = !0, this._box = ut("div", "leaflet-zoom-box", this._container), ot(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
        var e = new N(this._point, this._startPoint), n = e.getSize();
        bt(this._box, e.min), this._box.style.width = n.x + "px", this._box.style.height = n.y + "px";
      },
      _finish: function() {
        this._moved && (gt(this._box), vt(this._container, "leaflet-crosshair")), Je(), mn(), yt(document, {
          contextmenu: Jt,
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
        t.keyCode === 27 && this._finish();
      }
    });
    lt.addInitHook("addHandler", "boxZoom", Xr), lt.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var $r = $t.extend({
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
    lt.addInitHook("addHandler", "doubleClickZoom", $r), lt.mergeOptions({
      // @option dragging: Boolean = true
      // Whether the map be draggable with mouse/touch or not.
      dragging: !0,
      // @section Panning Inertia Options
      // @option inertia: Boolean = *
      // If enabled, panning of the map will have an inertia effect where
      // the map builds momentum while dragging and continues moving in
      // the same direction for some time. Feels especially nice on touch
      // devices. Enabled by default unless running on old Android devices.
      inertia: !qe,
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
    var Kr = $t.extend({
      addHooks: function() {
        if (!this._draggable) {
          var t = this._map;
          this._draggable = new ge(t._mapPane, t._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
        }
        ot(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        vt(this._map._container, "leaflet-grab"), vt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
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
          var e = Y(this._map.options.maxBounds);
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
        var t = this._worldWidth, e = Math.round(t / 2), n = this._initialWorldOffset, l = this._draggable._newPos.x, d = (l - e + n) % t + e - n, p = (l + e + n) % t - e - n, x = Math.abs(d + n) < Math.abs(p + n) ? d : p;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = x;
      },
      _onDragEnd: function(t) {
        var e = this._map, n = e.options, l = !n.inertia || this._times.length < 2;
        if (e.fire("dragend", t), l)
          e.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var d = this._lastPos.subtract(this._positions[0]), p = (this._lastTime - this._times[0]) / 1e3, x = n.easeLinearity, E = d.multiplyBy(x / p), I = E.distanceTo([0, 0]), j = Math.min(n.inertiaMaxSpeed, I), W = E.multiplyBy(j / I), J = j / (n.inertiaDeceleration * x), ct = W.multiplyBy(-J / 2).round();
          !ct.x && !ct.y ? e.fire("moveend") : (ct = e._limitOffset(ct, e.options.maxBounds), K(function() {
            e.panBy(ct, {
              duration: J,
              easeLinearity: x,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    lt.addInitHook("addHandler", "dragging", Kr), lt.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var Jr = $t.extend({
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
        this._removeHooks(), yt(this._map._container, {
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
        yt(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e = t.keyCode, n = this._map, l;
          if (e in this._panKeys)
            (!n._panAnim || !n._panAnim._inProgress) && (l = this._panKeys[e], t.shiftKey && (l = O(l).multiplyBy(3)), n.panBy(l), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
          else if (e in this._zoomKeys)
            n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
          else if (e === 27 && n._popup && n._popup.options.closeOnEscapeKey)
            n.closePopup();
          else
            return;
          Jt(t);
        }
      }
    });
    lt.addInitHook("addHandler", "keyboard", Jr), lt.mergeOptions({
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
    var Qr = $t.extend({
      addHooks: function() {
        st(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        yt(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(t) {
        var e = Pr(t), n = this._map.options.wheelDebounceTime;
        this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var l = Math.max(n - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(h(this._performZoom, this), l), Jt(t);
      },
      _performZoom: function() {
        var t = this._map, e = t.getZoom(), n = this._map.options.zoomSnap || 0;
        t._stop();
        var l = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(l)))) / Math.LN2, p = n ? Math.ceil(d / n) * n : d, x = t._limitZoom(e + (this._delta > 0 ? p : -p)) - e;
        this._delta = 0, this._startTime = null, x && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + x) : t.setZoomAround(this._lastMousePos, e + x));
      }
    });
    lt.addInitHook("addHandler", "scrollWheelZoom", Qr), lt.mergeOptions({
      // @section Touch interaction options
      // @option tap: Boolean = true
      // Enables mobile hacks for supporting instant taps (fixing 200ms click
      // delay on iOS/Android) and touch holds (fired as `contextmenu` events).
      tap: !0,
      // @option tapTolerance: Number = 15
      // The max number of pixels a user can shift his finger during touch
      // for it to be considered a valid tap.
      tapTolerance: 15
    });
    var to = $t.extend({
      addHooks: function() {
        st(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        yt(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(t) {
        if (t.touches) {
          if (Zt(t), this._fireClick = !0, t.touches.length > 1) {
            this._fireClick = !1, clearTimeout(this._holdTimeout);
            return;
          }
          var e = t.touches[0], n = e.target;
          this._startPos = this._newPos = new R(e.clientX, e.clientY), n.tagName && n.tagName.toLowerCase() === "a" && ot(n, "leaflet-active"), this._holdTimeout = setTimeout(h(function() {
            this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e));
          }, this), 1e3), this._simulateEvent("mousedown", e), st(document, {
            touchmove: this._onMove,
            touchend: this._onUp
          }, this);
        }
      },
      _onUp: function(t) {
        if (clearTimeout(this._holdTimeout), yt(document, {
          touchmove: this._onMove,
          touchend: this._onUp
        }, this), this._fireClick && t && t.changedTouches) {
          var e = t.changedTouches[0], n = e.target;
          n && n.tagName && n.tagName.toLowerCase() === "a" && vt(n, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e);
        }
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _onMove: function(t) {
        var e = t.touches[0];
        this._newPos = new R(e.clientX, e.clientY), this._simulateEvent("mousemove", e);
      },
      _simulateEvent: function(t, e) {
        var n = document.createEvent("MouseEvents");
        n._simulated = !0, e.target._simulatedClick = !0, n.initMouseEvent(
          t,
          !0,
          !0,
          window,
          1,
          e.screenX,
          e.screenY,
          e.clientX,
          e.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ), e.target.dispatchEvent(n);
      }
    });
    qt && (!Gt || xi) && lt.addInitHook("addHandler", "tap", to), lt.mergeOptions({
      // @section Touch interaction options
      // @option touchZoom: Boolean|String = *
      // Whether the map can be zoomed by touch-dragging with two fingers. If
      // passed `'center'`, it will zoom to the center of the view regardless of
      // where the touch events (fingers) were. Enabled for touch-capable web
      // browsers except for old Androids.
      touchZoom: qt && !qe,
      // @option bounceAtZoomLimits: Boolean = true
      // Set it to false if you don't want the map to zoom beyond min/max zoom
      // and then bounce back when pinch-zooming.
      bounceAtZoomLimits: !0
    });
    var eo = $t.extend({
      addHooks: function() {
        ot(this._map._container, "leaflet-touch-zoom"), st(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        vt(this._map._container, "leaflet-touch-zoom"), yt(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(t) {
        var e = this._map;
        if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
          var n = e.mouseEventToContainerPoint(t.touches[0]), l = e.mouseEventToContainerPoint(t.touches[1]);
          this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(n.add(l)._divideBy(2))), this._startDist = n.distanceTo(l), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), st(document, "touchmove", this._onTouchMove, this), st(document, "touchend", this._onTouchEnd, this), Zt(t);
        }
      },
      _onTouchMove: function(t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var e = this._map, n = e.mouseEventToContainerPoint(t.touches[0]), l = e.mouseEventToContainerPoint(t.touches[1]), d = n.distanceTo(l) / this._startDist;
          if (this._zoom = e.getScaleZoom(d, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && d < 1 || this._zoom > e.getMaxZoom() && d > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
            if (this._center = this._startLatLng, d === 1)
              return;
          } else {
            var p = n._add(l)._divideBy(2)._subtract(this._centerPoint);
            if (d === 1 && p.x === 0 && p.y === 0)
              return;
            this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(p), this._zoom);
          }
          this._moved || (e._moveStart(!0, !1), this._moved = !0), it(this._animRequest);
          var x = h(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 });
          this._animRequest = K(x, this, !0), Zt(t);
        }
      },
      _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        this._zooming = !1, it(this._animRequest), yt(document, "touchmove", this._onTouchMove, this), yt(document, "touchend", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    lt.addInitHook("addHandler", "touchZoom", eo), lt.BoxZoom = Xr, lt.DoubleClickZoom = $r, lt.Drag = Kr, lt.Keyboard = Jr, lt.ScrollWheelZoom = Qr, lt.Tap = to, lt.TouchZoom = eo, r.version = a, r.Control = Ft, r.control = ei, r.Browser = zs, r.Evented = H, r.Mixin = Xs, r.Util = rt, r.Class = g, r.Handler = $t, r.extend = u, r.bind = h, r.stamp = f, r.setOptions = S, r.DomEvent = Vs, r.DomUtil = Fs, r.PosAnimation = Tr, r.Draggable = ge, r.LineUtil = ta, r.PolyUtil = ea, r.Point = R, r.point = O, r.Bounds = N, r.bounds = U, r.Transformation = Pt, r.transformation = V, r.Projection = ia, r.LatLng = G, r.latLng = q, r.LatLngBounds = X, r.latLngBounds = Y, r.CRS = tt, r.GeoJSON = ee, r.geoJSON = jr, r.geoJson = da, r.Layer = Ut, r.LayerGroup = ze, r.layerGroup = oa, r.FeatureGroup = Ee, r.featureGroup = sa, r.ImageOverlay = Ni, r.imageOverlay = _a, r.VideoOverlay = Nr, r.videoOverlay = ma, r.SVGOverlay = Fr, r.svgOverlay = pa, r.DivOverlay = ie, r.Popup = Ae, r.popup = ga, r.Tooltip = Ze, r.tooltip = va, r.Icon = Oe, r.icon = aa, r.DivIcon = Ur, r.divIcon = ya, r.Marker = Ai, r.marker = la, r.TileLayer = Re, r.tileLayer = Vr, r.GridLayer = ri, r.gridLayer = ba, r.SVG = si, r.svg = Gr, r.Renderer = Kt, r.Canvas = Wr, r.canvas = Yr, r.Path = ce, r.CircleMarker = Zi, r.circleMarker = ha, r.Circle = En, r.circle = ua, r.Polyline = te, r.polyline = ca, r.Polygon = Ie, r.polygon = fa, r.Rectangle = qr, r.rectangle = La, r.Map = lt, r.map = Hs;
    var Pa = window.L;
    r.noConflict = function() {
      return window.L = Pa, this;
    }, window.L = r;
  });
})(Kn, Kn.exports);
var We = Kn.exports;
const $i = /* @__PURE__ */ Oo(We);
function gi(i, s) {
  return s == null ? function(a, u) {
    return oe(i(a, u));
  } : function(a, u) {
    const o = oe(i(a, u)), h = oe(a), {
      instance: c
    } = o.current;
    return St(function() {
      h.current !== a && (s(c, a, h.current), h.current = a);
    }, [c, a, u]), o;
  };
}
function Uo(i, s) {
  St(function() {
    return (s.layerContainer ?? s.map).addLayer(i.instance), function() {
      var o;
      (o = s.layerContainer) == null || o.removeLayer(i.instance), s.map.removeLayer(i.instance);
    };
  }, [s, i]);
}
function Vo(i) {
  return function(r) {
    const a = pi(), u = i(Xi(r, a), a);
    return Ro(a.map, r.attribution), ar(u.current, r.eventHandlers), Uo(u.current, a), u;
  };
}
function Ja(i, s) {
  const r = oe();
  St(function() {
    if (s.pathOptions !== r.current) {
      const u = s.pathOptions ?? {};
      i.instance.setStyle(u), r.current = u;
    }
  }, [i, s]);
}
function Qa(i) {
  return function(r) {
    const a = pi(), u = i(Xi(r, a), a);
    return ar(u.current, r.eventHandlers), Uo(u.current, a), Ja(u.current, r), u;
  };
}
function tl(i) {
  function s(u, o) {
    return {
      instance: i(u),
      context: o
    };
  }
  const r = gi(s), a = $a(r);
  return Fo(a);
}
function el(i, s) {
  const r = gi(i, s), a = Vo(r);
  return No(a);
}
function il(i, s) {
  const r = gi(i), a = Ka(r, s);
  return Xa(a);
}
function nl(i, s) {
  const r = gi(i, s), a = Qa(r);
  return No(a);
}
function Ho(i, s) {
  const r = gi(i, s), a = Vo(r);
  return Fo(a);
}
function Wo(i, s, r) {
  const {
    opacity: a,
    zIndex: u
  } = s;
  a != null && a !== r.opacity && i.setOpacity(a), u != null && u !== r.zIndex && i.setZIndex(u);
}
function rl() {
  return pi().map;
}
const ol = tl(function(s) {
  return new We.Control.Attribution(s);
});
function Jn() {
  return Jn = Object.assign || function(i) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, Jn.apply(this, arguments);
}
function sl(i, s) {
  const [r, a] = or(null);
  return St(() => {
    if (i.current !== null && r === null) {
      const u = new We.Map(i.current, s);
      s.center != null && s.zoom != null ? u.setView(s.center, s.zoom) : s.bounds != null && u.fitBounds(s.bounds, s.boundsOptions), s.whenReady != null && u.whenReady(s.whenReady), a(u);
    }
  }, [i, r, s]), r;
}
function al(i) {
  let {
    children: s,
    className: r,
    id: a,
    placeholder: u,
    style: o,
    whenCreated: h,
    ...c
  } = i;
  const f = oe(null), _ = sl(f, c), v = oe(!1);
  St(() => {
    _ != null && v.current === !1 && h != null && (v.current = !0, h(_));
  }, [_, h]), St(() => () => {
    _ == null || _.remove();
  }, [_]);
  const [m] = or({
    className: r,
    id: a,
    style: o
  }), y = Ba(() => _ ? {
    __version: qa,
    map: _
  } : null, [_]), b = y ? /* @__PURE__ */ Ct.createElement(jo, {
    value: y
  }, s) : u ?? null;
  return /* @__PURE__ */ Ct.createElement("div", Jn({}, m, {
    ref: f
  }), b);
}
const ll = el(function(s, r) {
  let {
    position: a,
    ...u
  } = s;
  const o = new We.Marker(a, u);
  return {
    instance: o,
    context: {
      ...r,
      overlayContainer: o
    }
  };
}, function(s, r, a) {
  r.position !== a.position && s.setLatLng(r.position), r.icon != null && r.icon !== a.icon && s.setIcon(r.icon), r.zIndexOffset != null && r.zIndexOffset !== a.zIndexOffset && s.setZIndexOffset(r.zIndexOffset), r.opacity != null && r.opacity !== a.opacity && s.setOpacity(r.opacity), s.dragging != null && r.draggable !== a.draggable && (r.draggable === !0 ? s.dragging.enable() : s.dragging.disable());
}), hl = il(function(s, r) {
  return {
    instance: new We.Popup(s, r.overlayContainer),
    context: r
  };
}, function(s, r, a, u) {
  const {
    onClose: o,
    onOpen: h,
    position: c
  } = a;
  St(function() {
    const {
      instance: _
    } = s;
    function v(y) {
      y.popup === _ && (_.update(), u(!0), h == null || h());
    }
    function m(y) {
      y.popup === _ && (u(!1), o == null || o());
    }
    return r.map.on({
      popupopen: v,
      popupclose: m
    }), r.overlayContainer == null ? (c != null && _.setLatLng(c), _.openOn(r.map)) : r.overlayContainer.bindPopup(_), function() {
      var b;
      r.map.off({
        popupopen: v,
        popupclose: m
      }), (b = r.overlayContainer) == null || b.unbindPopup(), r.map.removeLayer(_);
    };
  }, [s, r, u, o, h, c]);
}), ul = Ho(function(s, r) {
  let {
    url: a,
    ...u
  } = s;
  return {
    instance: new We.TileLayer(a, Xi(u, r)),
    context: r
  };
}, Wo);
var ci = function(s) {
  return s === void 0 && (s = ""), parseFloat(s.match(/\d+(\.\d+)?/), 10);
};
function cl(i) {
  var s, r = de(It), a = i.size, u = {};
  if (r != null && (s = r.icon) != null && s.disableScaleDown) {
    var o = ci(r.icon.size[a] || a);
    o < 24 && (u.vectorEffect = "non-scaling-stroke");
  }
  return u;
}
var po = function(s, r) {
  return (s - r) / 2 + "px";
};
function fl(i) {
  var s, r, a, u = i.height, o = i.size, h = o === void 0 ? "medium" : o, c = i.width, f = de(It), _ = ci((f == null || (s = f.icon) == null || (s = s.size) == null ? void 0 : s[h]) || h), v = "";
  if (u && f != null && (r = f.text) != null && (r = r[u]) != null && r.height) {
    var m = ci(f.text[u].height);
    if (m > _) {
      var y = po(m, _);
      v += "padding-top: " + y + "; padding-bottom: " + y + ";";
    }
  }
  if (c && f != null && (a = f.text) != null && (a = a[c]) != null && a.height) {
    var b = ci(f.text[c].height);
    if (b > _) {
      var k = po(b, _);
      v += "padding-left: " + k + "; padding-right: " + k + ";";
    }
  }
  return v;
}
var dl = {
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
}, _l = {
  theme: dl
}, ml = ["a11yTitle", "color", "size", "theme"];
function Qn() {
  return Qn = Object.assign ? Object.assign.bind() : function(i) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, Qn.apply(this, arguments);
}
function pl(i, s) {
  if (i == null) return {};
  var r = {}, a = Object.keys(i), u, o;
  for (o = 0; o < a.length; o++)
    u = a[o], !(s.indexOf(u) >= 0) && (r[u] = i[u]);
  return r;
}
var gl = function i(s, r, a) {
  var u = r.global && r.global.colors[s] !== void 0 ? r.global.colors[s] : s, o = u;
  return u && (r.dark && u.dark !== void 0 ? o = u.dark : !r.dark && u.light !== void 0 && (o = u.light)), o && r.global && r.global.colors[o] !== void 0 && (o = i(o, r)), o;
}, go = function(s, r, a, u) {
  return zo(["", ":", ";"], s, gl(r, a));
}, vl = zo(["", " ", " g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill='none']{stroke-width:0;}}*[stroke*='#'],*[STROKE*='#']{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*='#'],*[FILL*='#']{fill:inherit;stroke:none;}"], function(i) {
  return go("fill", i.color || i.theme.global.colors.icon, i.theme);
}, function(i) {
  return go("stroke", i.color || i.theme.global.colors.icon, i.theme);
}), Yo = /* @__PURE__ */ _e(function(i, s) {
  var r = i.a11yTitle;
  i.color, i.size, i.theme;
  var a = pl(i, ml);
  return /* @__PURE__ */ Ct.createElement("svg", Qn({
    ref: s,
    "aria-label": r
  }, a));
});
Yo.displayName = "Icon";
var vi = mi(Yo).withConfig({
  // don't let height attribute leak to DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function(s) {
    return !["height", "width"].includes(s);
  }
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-ofa7kd-0"
})(["display:inline-block;flex:0 0 auto;", " ", " ", " ", ""], function(i) {
  var s, r = i.size, a = r === void 0 ? "medium" : r, u = i.theme, o = i.viewBox, h = (o || "0 0 24 24").split(" "), c = h[2], f = h[3], _ = c / f, v = u.icon.size[a] || a, m = ci(v), y = ((s = v.match(/[a-z]+$/)) == null ? void 0 : s[0]) || "px";
  return c < f ? `
      width: ` + m + y + `;
      height: ` + m / _ + y + `;
    ` : f < c ? `
      width: ` + m * _ + y + `;
      height: ` + m + y + `;
    ` : `
      width: ` + m + y + `;
      height: ` + m + y + `;
    `;
}, function(i) {
  var s = i.color;
  return s !== "plain" && vl;
}, function(i) {
  return (i.height || i.width) && fl(i);
}, function(i) {
  var s = i.theme;
  return s && s.icon.extend;
});
vi.defaultProps = {};
Object.setPrototypeOf(vi.defaultProps, _l);
function Gi() {
  return Gi = Object.assign ? Object.assign.bind() : function(i) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, Gi.apply(this, arguments);
}
var Go = /* @__PURE__ */ _e(function(i, s) {
  var r = cl(i);
  return /* @__PURE__ */ Ct.createElement(vi, Gi({
    ref: s,
    viewBox: "0 0 24 24",
    a11yTitle: "Add"
  }, i), /* @__PURE__ */ Ct.createElement("path", Gi({
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22V2M2 12h20"
  }, r)));
});
Go.displayName = "Add";
function tr() {
  return tr = Object.assign ? Object.assign.bind() : function(i) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, tr.apply(this, arguments);
}
var qo = /* @__PURE__ */ _e(function(i, s) {
  return /* @__PURE__ */ Ct.createElement(vi, tr({
    ref: s,
    viewBox: "0 0 24 24",
    a11yTitle: "Globe"
  }, i), /* @__PURE__ */ Ct.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 8s3.5 1 5 2 .564 2.42 1 3c.436.58 2-1 2 2s3 1 3 4 2.5 2.5 3 1 2.233-3.134 2-5c-.233-1.866-1-3-3-3s-3.5-.5-4-2 3-2 2-5 0-4 0-4m10 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z"
  }));
});
qo.displayName = "Globe";
function er() {
  return er = Object.assign ? Object.assign.bind() : function(i) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
    }
    return i;
  }, er.apply(this, arguments);
}
var Xo = /* @__PURE__ */ _e(function(i, s) {
  return /* @__PURE__ */ Ct.createElement(vi, er({
    ref: s,
    viewBox: "0 0 24 24",
    a11yTitle: "Subtract"
  }, i), /* @__PURE__ */ Ct.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 12h20"
  }));
});
Xo.displayName = "Subtract";
const yl = ({ locations: i }) => {
  const s = $i.latLngBounds();
  return i.features ? i.features.forEach((r) => {
    var a, u;
    s.extend([
      (a = r.geometry) == null ? void 0 : a.coordinates[0],
      (u = r.geometry) == null ? void 0 : u.coordinates[1]
    ]);
  }) : i.forEach((r) => {
    s.extend([r == null ? void 0 : r[0], r == null ? void 0 : r[1]]);
  }), s;
}, bl = 1.5, wl = ({ locations: i }) => {
  const s = rl(), r = i && yl({ locations: i }), [a, u] = Ct.useState(!1);
  return St(() => {
    r && !a && (JSON.stringify(r._northEast) === JSON.stringify(r._southWest) || s.flyToBounds(r, { duration: bl }));
  }, [r, s, a]), St(() => {
    u(!0);
  }, []), // css classes are coming from https://github.com/Leaflet/Leaflet/blob/main/dist/leaflet.css
  /* @__PURE__ */ pt(be, { className: "leaflet-bottom leaflet-right", children: /* @__PURE__ */ pt(be, { className: "leaflet-control", children: /* @__PURE__ */ nr(be, { elevation: "large", round: "medium", background: "background", children: [
    /* @__PURE__ */ pt(
      Dn,
      {
        a11yTitle: "Zoom in",
        icon: /* @__PURE__ */ pt(Go, {}),
        onClick: (o) => {
          o.preventDefault(), s.zoomIn();
        }
      }
    ),
    /* @__PURE__ */ pt(
      Dn,
      {
        a11yTitle: "Zoom out",
        icon: /* @__PURE__ */ pt(Xo, {}),
        onClick: (o) => {
          o.preventDefault(), s.zoomOut();
        }
      }
    ),
    /* @__PURE__ */ pt(
      be,
      {
        border: {
          color: "border-weak",
          side: "top"
        },
        children: r && /* @__PURE__ */ pt(
          Dn,
          {
            a11yTitle: "Zoom to data",
            icon: /* @__PURE__ */ pt(qo, {}),
            onClick: (o) => {
              o.preventDefault(), s.flyToBounds(r, { duration: 1.5 });
            }
          }
        )
      }
    )
  ] }) }) });
};
wl.propTypes = {
  locations: mt.oneOfType([mt.array, mt.object])
};
const $o = {
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
}, xl = di($o, {
  default: {
    container: {
      height: { min: "25px", max: "25px" },
      width: { min: "25px", max: "25px" }
    }
  }
}), Ll = {
  pin: {
    ...xl
  },
  cluster: {
    ...$o,
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
var Pl = Object.create, Ko = Object.defineProperty, Tl = Object.getOwnPropertyDescriptor, Jo = Object.getOwnPropertyNames, kl = Object.getPrototypeOf, Cl = Object.prototype.hasOwnProperty, Rt = Math.pow, se = (i, s) => function() {
  return s || (0, i[Jo(i)[0]])((s = { exports: {} }).exports, s), s.exports;
}, Ml = (i, s, r, a) => {
  if (s && typeof s == "object" || typeof s == "function")
    for (let u of Jo(s))
      !Cl.call(i, u) && u !== r && Ko(i, u, { get: () => s[u], enumerable: !(a = Tl(s, u)) || a.enumerable });
  return i;
}, jt = (i, s, r) => (r = i != null ? Pl(kl(i)) : {}, Ml(
  !i || !i.__esModule ? Ko(r, "default", { value: i, enumerable: !0 }) : r,
  i
)), He = (i, s, r) => new Promise((a, u) => {
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
}), ae = se({
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
}), Sl = se({
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
}), Qo = se({
  "node_modules/@mapbox/vector-tile/lib/vectortilefeature.js"(i, s) {
    var r = ae();
    s.exports = a;
    function a(f, _, v, m, y) {
      this.properties = {}, this.extent = v, this.type = 0, this._pbf = f, this._geometry = -1, this._keys = m, this._values = y, f.readFields(u, this, _);
    }
    function u(f, _, v) {
      f == 1 ? _.id = v.readVarint() : f == 2 ? o(v, _) : f == 3 ? _.type = v.readVarint() : f == 4 && (_._geometry = v.pos);
    }
    function o(f, _) {
      for (var v = f.readVarint() + f.pos; f.pos < v; ) {
        var m = _._keys[f.readVarint()], y = _._values[f.readVarint()];
        _.properties[m] = y;
      }
    }
    a.types = ["Unknown", "Point", "LineString", "Polygon"], a.prototype.loadGeometry = function() {
      var f = this._pbf;
      f.pos = this._geometry;
      for (var _ = f.readVarint() + f.pos, v = 1, m = 0, y = 0, b = 0, k = [], S; f.pos < _; ) {
        if (m <= 0) {
          var B = f.readVarint();
          v = B & 7, m = B >> 3;
        }
        if (m--, v === 1 || v === 2)
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
      for (var _ = f.readVarint() + f.pos, v = 1, m = 0, y = 0, b = 0, k = 1 / 0, S = -1 / 0, B = 1 / 0, A = -1 / 0; f.pos < _; ) {
        if (m <= 0) {
          var w = f.readVarint();
          v = w & 7, m = w >> 3;
        }
        if (m--, v === 1 || v === 2)
          y += f.readSVarint(), b += f.readSVarint(), y < k && (k = y), y > S && (S = y), b < B && (B = b), b > A && (A = b);
        else if (v !== 7)
          throw new Error("unknown command " + v);
      }
      return [k, B, S, A];
    }, a.prototype.toGeoJSON = function(f, _, v) {
      var m = this.extent * Math.pow(2, v), y = this.extent * f, b = this.extent * _, k = this.loadGeometry(), S = a.types[this.type], B, A;
      function w(z) {
        for (var Z = 0; Z < z.length; Z++) {
          var D = z[Z], F = 180 - (D.y + b) * 360 / m;
          z[Z] = [
            (D.x + y) * 360 / m - 180,
            360 / Math.PI * Math.atan(Math.exp(F * Math.PI / 180)) - 90
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
      for (var v = [], m, y, b = 0; b < _; b++) {
        var k = c(f[b]);
        k !== 0 && (y === void 0 && (y = k < 0), y === k < 0 ? (m && v.push(m), m = [f[b]]) : m.push(f[b]));
      }
      return m && v.push(m), v;
    }
    function c(f) {
      for (var _ = 0, v = 0, m = f.length, y = m - 1, b, k; v < m; y = v++)
        b = f[v], k = f[y], _ += (k.x - b.x) * (b.y + k.y);
      return _;
    }
  }
}), ts = se({
  "node_modules/@mapbox/vector-tile/lib/vectortilelayer.js"(i, s) {
    var r = Qo();
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
}), zl = se({
  "node_modules/@mapbox/vector-tile/lib/vectortile.js"(i, s) {
    var r = ts();
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
}), El = se({
  "node_modules/@mapbox/vector-tile/index.js"(i, s) {
    s.exports.VectorTile = zl(), s.exports.VectorTileFeature = Qo(), s.exports.VectorTileLayer = ts();
  }
}), Ol = se({
  "node_modules/ieee754/index.js"(i) {
    i.read = function(s, r, a, u, o) {
      var h, c, f = o * 8 - u - 1, _ = (1 << f) - 1, v = _ >> 1, m = -7, y = a ? o - 1 : 0, b = a ? -1 : 1, k = s[r + y];
      for (y += b, h = k & (1 << -m) - 1, k >>= -m, m += f; m > 0; h = h * 256 + s[r + y], y += b, m -= 8)
        ;
      for (c = h & (1 << -m) - 1, h >>= -m, m += u; m > 0; c = c * 256 + s[r + y], y += b, m -= 8)
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
      var c, f, _, v = h * 8 - o - 1, m = (1 << v) - 1, y = m >> 1, b = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, k = u ? 0 : h - 1, S = u ? 1 : -1, B = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
      for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (f = isNaN(r) ? 1 : 0, c = m) : (c = Math.floor(Math.log(r) / Math.LN2), r * (_ = Math.pow(2, -c)) < 1 && (c--, _ *= 2), c + y >= 1 ? r += b / _ : r += b * Math.pow(2, 1 - y), r * _ >= 2 && (c++, _ /= 2), c + y >= m ? (f = 0, c = m) : c + y >= 1 ? (f = (r * _ - 1) * Math.pow(2, o), c = c + y) : (f = r * Math.pow(2, y - 1) * Math.pow(2, o), c = 0)); o >= 8; s[a + k] = f & 255, k += S, f /= 256, o -= 8)
        ;
      for (c = c << o | f, v += o; v > 0; s[a + k] = c & 255, k += S, c /= 256, v -= 8)
        ;
      s[a + k - S] |= B * 128;
    };
  }
}), Il = se({
  "node_modules/pbf/index.js"(i, s) {
    s.exports = a;
    var r = Ol();
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
          var H = this.readVarint(), R = H >> 3, Q = this.pos;
          this.type = H & 7, g(R, P, this), this.pos === Q && this.skip(H);
        }
        return P;
      },
      readMessage: function(g, P) {
        return this.readFields(g, P, this.readVarint() + this.pos);
      },
      readFixed32: function() {
        var g = F(this.buf, this.pos);
        return this.pos += 4, g;
      },
      readSFixed32: function() {
        var g = et(this.buf, this.pos);
        return this.pos += 4, g;
      },
      readFixed64: function() {
        var g = F(this.buf, this.pos) + F(this.buf, this.pos + 4) * u;
        return this.pos += 8, g;
      },
      readSFixed64: function() {
        var g = F(this.buf, this.pos) + et(this.buf, this.pos + 4) * u;
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
        var P = this.buf, M, H;
        return H = P[this.pos++], M = H & 127, H < 128 || (H = P[this.pos++], M |= (H & 127) << 7, H < 128) || (H = P[this.pos++], M |= (H & 127) << 14, H < 128) || (H = P[this.pos++], M |= (H & 127) << 21, H < 128) ? M : (H = P[this.pos], M |= (H & 15) << 28, f(M, g, this));
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
        return this.pos = g, g - P >= h && c ? it(this.buf, P, g) : K(this.buf, P, g);
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
          m(g, this);
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
        this.pos = rt(this.buf, g, this.pos);
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
        var H = this.pos - M;
        H >= 128 && k(M, H, this), this.pos = M - 1, this.writeVarint(H), this.pos += H;
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
        P.length && this.writeMessage(g, D, P);
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
      var H = M.buf, R, Q;
      if (Q = H[M.pos++], R = (Q & 112) >> 4, Q < 128 || (Q = H[M.pos++], R |= (Q & 127) << 3, Q < 128) || (Q = H[M.pos++], R |= (Q & 127) << 10, Q < 128) || (Q = H[M.pos++], R |= (Q & 127) << 17, Q < 128) || (Q = H[M.pos++], R |= (Q & 127) << 24, Q < 128) || (Q = H[M.pos++], R |= (Q & 1) << 31, Q < 128))
        return v(g, R, P);
      throw new Error("Expected varint not more than 10 bytes");
    }
    function _(g) {
      return g.type === a.Bytes ? g.readVarint() + g.pos : g.pos + 1;
    }
    function v(g, P, M) {
      return M ? P * 4294967296 + (g >>> 0) : (P >>> 0) * 4294967296 + (g >>> 0);
    }
    function m(g, P) {
      var M, H;
      if (g >= 0 ? (M = g % 4294967296 | 0, H = g / 4294967296 | 0) : (M = ~(-g % 4294967296), H = ~(-g / 4294967296), M ^ 4294967295 ? M = M + 1 | 0 : (M = 0, H = H + 1 | 0)), g >= 18446744073709552e3 || g < -18446744073709552e3)
        throw new Error("Given varint doesn't fit into 10 bytes");
      P.realloc(10), y(M, H, P), b(H, P);
    }
    function y(g, P, M) {
      M.buf[M.pos++] = g & 127 | 128, g >>>= 7, M.buf[M.pos++] = g & 127 | 128, g >>>= 7, M.buf[M.pos++] = g & 127 | 128, g >>>= 7, M.buf[M.pos++] = g & 127 | 128, g >>>= 7, M.buf[M.pos] = g & 127;
    }
    function b(g, P) {
      var M = (g & 7) << 4;
      P.buf[P.pos++] |= M | ((g >>>= 3) ? 128 : 0), g && (P.buf[P.pos++] = g & 127 | ((g >>>= 7) ? 128 : 0), g && (P.buf[P.pos++] = g & 127 | ((g >>>= 7) ? 128 : 0), g && (P.buf[P.pos++] = g & 127 | ((g >>>= 7) ? 128 : 0), g && (P.buf[P.pos++] = g & 127 | ((g >>>= 7) ? 128 : 0), g && (P.buf[P.pos++] = g & 127)))));
    }
    function k(g, P, M) {
      var H = P <= 16383 ? 1 : P <= 2097151 ? 2 : P <= 268435455 ? 3 : Math.floor(Math.log(P) / (Math.LN2 * 7));
      M.realloc(H);
      for (var R = M.pos - 1; R >= g; R--)
        M.buf[R + H] = M.buf[R];
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
    function D(g, P) {
      for (var M = 0; M < g.length; M++)
        P.writeSFixed64(g[M]);
    }
    function F(g, P) {
      return (g[P] | g[P + 1] << 8 | g[P + 2] << 16) + g[P + 3] * 16777216;
    }
    function $(g, P, M) {
      g[M] = P, g[M + 1] = P >>> 8, g[M + 2] = P >>> 16, g[M + 3] = P >>> 24;
    }
    function et(g, P) {
      return (g[P] | g[P + 1] << 8 | g[P + 2] << 16) + (g[P + 3] << 24);
    }
    function K(g, P, M) {
      for (var H = "", R = P; R < M; ) {
        var Q = g[R], O = null, N = Q > 239 ? 4 : Q > 223 ? 3 : Q > 191 ? 2 : 1;
        if (R + N > M)
          break;
        var U, X, Y;
        N === 1 ? Q < 128 && (O = Q) : N === 2 ? (U = g[R + 1], (U & 192) === 128 && (O = (Q & 31) << 6 | U & 63, O <= 127 && (O = null))) : N === 3 ? (U = g[R + 1], X = g[R + 2], (U & 192) === 128 && (X & 192) === 128 && (O = (Q & 15) << 12 | (U & 63) << 6 | X & 63, (O <= 2047 || O >= 55296 && O <= 57343) && (O = null))) : N === 4 && (U = g[R + 1], X = g[R + 2], Y = g[R + 3], (U & 192) === 128 && (X & 192) === 128 && (Y & 192) === 128 && (O = (Q & 15) << 18 | (U & 63) << 12 | (X & 63) << 6 | Y & 63, (O <= 65535 || O >= 1114112) && (O = null))), O === null ? (O = 65533, N = 1) : O > 65535 && (O -= 65536, H += String.fromCharCode(O >>> 10 & 1023 | 55296), O = 56320 | O & 1023), H += String.fromCharCode(O), R += N;
      }
      return H;
    }
    function it(g, P, M) {
      return c.decode(g.subarray(P, M));
    }
    function rt(g, P, M) {
      for (var H = 0, R, Q; H < P.length; H++) {
        if (R = P.charCodeAt(H), R > 55295 && R < 57344)
          if (Q)
            if (R < 56320) {
              g[M++] = 239, g[M++] = 191, g[M++] = 189, Q = R;
              continue;
            } else
              R = Q - 55296 << 10 | R - 56320 | 65536, Q = null;
          else {
            R > 56319 || H + 1 === P.length ? (g[M++] = 239, g[M++] = 191, g[M++] = 189) : Q = R;
            continue;
          }
        else Q && (g[M++] = 239, g[M++] = 191, g[M++] = 189, Q = null);
        R < 128 ? g[M++] = R : (R < 2048 ? g[M++] = R >> 6 | 192 : (R < 65536 ? g[M++] = R >> 12 | 224 : (g[M++] = R >> 18 | 240, g[M++] = R >> 12 & 63 | 128), g[M++] = R >> 6 & 63 | 128), g[M++] = R & 63 | 128);
      }
      return M;
    }
  }
}), Bl = se({
  "node_modules/rbush/rbush.min.js"(i, s) {
    (function(r, a) {
      typeof i == "object" && typeof s < "u" ? s.exports = a() : typeof define == "function" && define.amd ? define(a) : (r = r || self).RBush = a();
    })(i, function() {
      function r(w, T, C, z, Z) {
        (function D(F, $, et, K, it) {
          for (; K > et; ) {
            if (K - et > 600) {
              var rt = K - et + 1, g = $ - et + 1, P = Math.log(rt), M = 0.5 * Math.exp(2 * P / 3), H = 0.5 * Math.sqrt(P * M * (rt - M) / rt) * (g - rt / 2 < 0 ? -1 : 1), R = Math.max(et, Math.floor($ - g * M / rt + H)), Q = Math.min(K, Math.floor($ + (rt - g) * M / rt + H));
              D(F, $, R, Q, it);
            }
            var O = F[$], N = et, U = K;
            for (a(F, et, $), it(F[K], O) > 0 && a(F, et, K); N < U; ) {
              for (a(F, N, U), N++, U--; it(F[N], O) < 0; )
                N++;
              for (; it(F[U], O) > 0; )
                U--;
            }
            it(F[et], O) === 0 ? a(F, et, U) : a(F, ++U, K), U <= $ && (et = U + 1), $ <= U && (K = U - 1);
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
        for (var D = T; D < C; D++) {
          var F = w.children[D];
          _(Z, w.leaf ? z(F) : F);
        }
        return Z;
      }
      function _(w, T) {
        return w.minX = Math.min(w.minX, T.minX), w.minY = Math.min(w.minY, T.minY), w.maxX = Math.max(w.maxX, T.maxX), w.maxY = Math.max(w.maxY, T.maxY), w;
      }
      function v(w, T) {
        return w.minX - T.minX;
      }
      function m(w, T) {
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
        for (var D = [T, C]; D.length; )
          if (!((C = D.pop()) - (T = D.pop()) <= z)) {
            var F = T + Math.ceil((C - T) / z / 2) * z;
            r(w, F, T, C, Z), D.push(T, F, F, C);
          }
      }
      return o.prototype.all = function() {
        return this._all(this.data, []);
      }, o.prototype.search = function(w) {
        var T = this.data, C = [];
        if (!S(w, T))
          return C;
        for (var z = this.toBBox, Z = []; T; ) {
          for (var D = 0; D < T.children.length; D++) {
            var F = T.children[D], $ = T.leaf ? z(F) : F;
            S(w, $) && (T.leaf ? C.push(F) : k(w, $) ? this._all(F, C) : Z.push(F));
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
            var Z = T.children[z], D = T.leaf ? this.toBBox(Z) : Z;
            if (S(w, D)) {
              if (T.leaf || k(w, D))
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
        for (var C, z, Z, D = this.data, F = this.toBBox(w), $ = [], et = []; D || $.length; ) {
          if (D || (D = $.pop(), z = $[$.length - 1], C = et.pop(), Z = !0), D.leaf) {
            var K = h(w, D.children, T);
            if (K !== -1)
              return D.children.splice(K, 1), $.push(D), this._condense($), this;
          }
          Z || D.leaf || !k(D, F) ? z ? (C++, D = z.children[C], Z = !1) : D = null : ($.push(D), et.push(C), C = 0, z = D, D = D.children[0]);
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
        var Z, D = C - T + 1, F = this._maxEntries;
        if (D <= F)
          return c(Z = B(w.slice(T, C + 1)), this.toBBox), Z;
        z || (z = Math.ceil(Math.log(D) / Math.log(F)), F = Math.ceil(D / Math.pow(F, z - 1))), (Z = B([])).leaf = !1, Z.height = z;
        var $ = Math.ceil(D / F), et = $ * Math.ceil(Math.sqrt(F));
        A(w, T, C, et, this.compareMinX);
        for (var K = T; K <= C; K += et) {
          var it = Math.min(K + et - 1, C);
          A(w, K, it, $, this.compareMinY);
          for (var rt = K; rt <= it; rt += $) {
            var g = Math.min(rt + $ - 1, it);
            Z.children.push(this._build(w, rt, g, z - 1));
          }
        }
        return c(Z, this.toBBox), Z;
      }, o.prototype._chooseSubtree = function(w, T, C, z) {
        for (; z.push(T), !T.leaf && z.length - 1 !== C; ) {
          for (var Z = 1 / 0, D = 1 / 0, F = void 0, $ = 0; $ < T.children.length; $++) {
            var et = T.children[$], K = y(et), it = (rt = w, g = et, (Math.max(g.maxX, rt.maxX) - Math.min(g.minX, rt.minX)) * (Math.max(g.maxY, rt.maxY) - Math.min(g.minY, rt.minY)) - K);
            it < D ? (D = it, Z = K < Z ? K : Z, F = et) : it === D && K < Z && (Z = K, F = et);
          }
          T = F || T.children[0];
        }
        var rt, g;
        return T;
      }, o.prototype._insert = function(w, T, C) {
        var z = C ? w : this.toBBox(w), Z = [], D = this._chooseSubtree(z, this.data, T, Z);
        for (D.children.push(w), _(D, z); T >= 0 && Z[T].children.length > this._maxEntries; )
          this._split(Z, T), T--;
        this._adjustParentBBoxes(z, Z, T);
      }, o.prototype._split = function(w, T) {
        var C = w[T], z = C.children.length, Z = this._minEntries;
        this._chooseSplitAxis(C, Z, z);
        var D = this._chooseSplitIndex(C, Z, z), F = B(C.children.splice(D, C.children.length - D));
        F.height = C.height, F.leaf = C.leaf, c(C, this.toBBox), c(F, this.toBBox), T ? w[T - 1].children.push(F) : this._splitRoot(C, F);
      }, o.prototype._splitRoot = function(w, T) {
        this.data = B([w, T]), this.data.height = w.height + 1, this.data.leaf = !1, c(this.data, this.toBBox);
      }, o.prototype._chooseSplitIndex = function(w, T, C) {
        for (var z, Z, D, F, $, et, K, it = 1 / 0, rt = 1 / 0, g = T; g <= C - T; g++) {
          var P = f(w, 0, g, this.toBBox), M = f(w, g, C, this.toBBox), H = (Z = P, D = M, F = void 0, $ = void 0, et = void 0, K = void 0, F = Math.max(Z.minX, D.minX), $ = Math.max(Z.minY, D.minY), et = Math.min(Z.maxX, D.maxX), K = Math.min(Z.maxY, D.maxY), Math.max(0, et - F) * Math.max(0, K - $)), R = y(P) + y(M);
          H < it ? (it = H, z = g, rt = R < rt ? R : rt) : H === it && R < rt && (rt = R, z = g);
        }
        return z || C - T;
      }, o.prototype._chooseSplitAxis = function(w, T, C) {
        var z = w.leaf ? this.compareMinX : v, Z = w.leaf ? this.compareMinY : m;
        this._allDistMargin(w, T, C, z) < this._allDistMargin(w, T, C, Z) && w.children.sort(z);
      }, o.prototype._allDistMargin = function(w, T, C, z) {
        w.children.sort(z);
        for (var Z = this.toBBox, D = f(w, 0, T, Z), F = f(w, C - T, C, Z), $ = b(D) + b(F), et = T; et < C - T; et++) {
          var K = w.children[et];
          _(D, w.leaf ? Z(K) : K), $ += b(D);
        }
        for (var it = C - T - 1; it >= T; it--) {
          var rt = w.children[it];
          _(F, w.leaf ? Z(rt) : rt), $ += b(F);
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
jt(ae());
function Ne(i, s, r) {
  return Math.min(Math.max(i, r), s);
}
var Al = class extends Error {
  constructor(i) {
    super(`Failed to parse color: "${i}"`);
  }
}, ui = Al;
function vo(i) {
  if (typeof i != "string")
    throw new ui(i);
  if (i.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let s = i.trim();
  s = Vl.test(i) ? Dl(i) : i;
  const r = jl.exec(s);
  if (r) {
    const h = Array.from(r).slice(1);
    return [...h.slice(0, 3).map((c) => parseInt(_i(c, 2), 16)), parseInt(_i(h[3] || "f", 2), 16) / 255];
  }
  const a = Nl.exec(s);
  if (a) {
    const h = Array.from(a).slice(1);
    return [...h.slice(0, 3).map((c) => parseInt(c, 16)), parseInt(h[3] || "ff", 16) / 255];
  }
  const u = Fl.exec(s);
  if (u) {
    const h = Array.from(u).slice(1);
    return [...h.slice(0, 3).map((c) => parseInt(c, 10)), parseFloat(h[3] || "1")];
  }
  const o = Ul.exec(s);
  if (o) {
    const [h, c, f, _] = Array.from(o).slice(1).map(parseFloat);
    if (Ne(0, 100, c) !== c)
      throw new ui(i);
    if (Ne(0, 100, f) !== f)
      throw new ui(i);
    return [...Hl(h, c, f), Number.isNaN(_) ? 1 : _];
  }
  throw new ui(i);
}
function Zl(i) {
  let s = 5381, r = i.length;
  for (; r; )
    s = s * 33 ^ i.charCodeAt(--r);
  return (s >>> 0) % 2341;
}
var yo = (i) => parseInt(i.replace(/_/g, ""), 36), Rl = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((i, s) => {
  const r = yo(s.substring(0, 3)), a = yo(s.substring(3)).toString(16);
  let u = "";
  for (let o = 0; o < 6 - a.length; o++)
    u += "0";
  return i[r] = `${u}${a}`, i;
}, {});
function Dl(i) {
  const s = i.toLowerCase().trim(), r = Rl[Zl(s)];
  if (!r)
    throw new ui(i);
  return `#${r}`;
}
var _i = (i, s) => Array.from(Array(s)).map(() => i).join(""), jl = new RegExp(`^#${_i("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), Nl = new RegExp(`^#${_i("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), Fl = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${_i(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), Ul = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, Vl = /^[a-z]+$/i, bo = (i) => Math.round(i * 255), Hl = (i, s, r) => {
  let a = r / 100;
  if (s === 0)
    return [a, a, a].map(bo);
  const u = (i % 360 + 360) % 360 / 60, o = (1 - Math.abs(2 * a - 1)) * (s / 100), h = o * (1 - Math.abs(u % 2 - 1));
  let c = 0, f = 0, _ = 0;
  u >= 0 && u < 1 ? (c = o, f = h) : u >= 1 && u < 2 ? (c = h, f = o) : u >= 2 && u < 3 ? (f = o, _ = h) : u >= 3 && u < 4 ? (f = h, _ = o) : u >= 4 && u < 5 ? (c = h, _ = o) : u >= 5 && u < 6 && (c = o, _ = h);
  const v = a - o / 2, m = c + v, y = f + v, b = _ + v;
  return [m, y, b].map(bo);
};
function Wl(i, s, r, a) {
  return `rgba(${Ne(0, 255, i).toFixed()}, ${Ne(0, 255, s).toFixed()}, ${Ne(0, 255, r).toFixed()}, ${parseFloat(Ne(0, 1, a).toFixed(3))})`;
}
function Wn(i, s, r) {
  const a = (z, Z) => Z === 3 ? z : z / 255, [u, o, h, c] = vo(i).map(a), [f, _, v, m] = vo(s).map(a), y = m - c, b = r * 2 - 1, S = ((b * y === -1 ? b : b + y / (1 + b * y)) + 1) / 2, B = 1 - S, A = (u * B + f * S) * 255, w = (o * B + _ * S) * 255, T = (h * B + v * S) * 255, C = m * r + c * (1 - r);
  return Wl(A, w, T, C);
}
var we = jt(ae());
jt(Sl());
var Dt = class {
  constructor(i, s) {
    this.str = i ?? s, this.perFeature = typeof this.str == "function" && this.str.length === 2;
  }
  get(i, s) {
    return typeof this.str == "function" ? this.str(i, s) : this.str;
  }
}, xt = class {
  constructor(i, s = 1) {
    this.value = i ?? s, this.perFeature = typeof this.value == "function" && this.value.length === 2;
  }
  get(i, s) {
    return typeof this.value == "function" ? this.value(i, s) : this.value;
  }
}, es = class {
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
}, is = class {
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
}, Yl = class {
  constructor(i, s = []) {
    this.value = i ?? s, this.perFeature = typeof this.value == "function" && this.value.length === 2;
  }
  get(i, s) {
    return typeof this.value == "function" ? this.value(i, s) : this.value;
  }
}, wo = jt(ae()), Gl = (i, s, r) => {
  const a = [];
  let u, o, h, c = 0, f = 0, _ = 0, v = 0, m = 0, y = 0, b = 0, k = 0, S = 0, B = 0, A = 0, w = 0;
  if (i.length < 2)
    return [];
  if (i.length === 2)
    return _ = Math.sqrt(Rt(i[1].x - i[0].x, 2) + Rt(i[1].y - i[0].y, 2)), [
      {
        length: _,
        beginIndex: 0,
        beginDistance: 0,
        endIndex: 2,
        endDistance: _
      }
    ];
  for (v = Math.sqrt(Rt(i[1].x - i[0].x, 2) + Rt(i[1].y - i[0].y, 2)), c = 1, f = i.length - 1; c < f; c++)
    u = i[c - 1], o = i[c], h = i[c + 1], y = o.x - u.x, b = o.y - u.y, k = h.x - o.x, S = h.y - o.y, m = Math.sqrt(k * k + S * S), _ += v, B = Math.acos((y * k + b * S) / (v * m)), (B > s || _ - w > r) && (a.push({
      length: _ - w,
      beginDistance: w,
      beginIndex: A,
      endIndex: c + 1,
      endDistance: _
    }), A = c, w = _), v = m;
  return c - A > 0 && a.push({
    length: _ - w + m,
    beginIndex: A,
    beginDistance: w,
    endIndex: c + 1,
    endDistance: _ + m
  }), a;
};
function ql(i, s, r, a) {
  const u = [];
  for (const o of i) {
    const h = Gl(o, Math.PI / 45, s);
    for (const c of h)
      if (c.length >= s + a) {
        const f = new wo.default(
          o[c.beginIndex].x,
          o[c.beginIndex].y
        ), _ = o[c.endIndex - 1], v = new wo.default(
          (_.x - f.x) / c.length,
          (_.y - f.y) / c.length
        );
        for (let m = a; m < c.length - s; m += r)
          u.push({
            start: f.add(v.mult(m)),
            end: f.add(v.mult(m + s))
          });
      }
  }
  return u;
}
function Xl(i, s, r, a) {
  const u = s.x - i.x, o = s.y - i.y, h = Math.sqrt(Rt(s.x - i.x, 2) + Rt(s.y - i.y, 2)), c = [];
  for (let f = 0; f < r + a; f += 2 * a) {
    const _ = f * 1 / h;
    c.push({ x: i.x + _ * u, y: i.y + _ * o });
  }
  return c;
}
function ns(i, s) {
  if (i.length <= s)
    return [i];
  const r = s - 1, a = i.lastIndexOf(" ", r), u = i.indexOf(" ", r);
  if (a === -1 && u === -1)
    return [i];
  let o, h;
  return u === -1 || a >= 0 && r - a < u - r ? (o = i.substring(0, a), h = i.substring(a + 1, i.length)) : (o = i.substring(0, u), h = i.substring(u + 1, i.length)), [o, ...ns(h, s)];
}
var $l = jt(ae()), Kl = jt(El()), Jl = jt(Il()), kt = (i, s, r) => new Promise((a, u) => {
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
}), Ot = Uint8Array, Ue = Uint16Array, rs = Uint32Array, os = new Ot([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), ss = new Ot([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Ql = new Ot([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), as = function(i, s) {
  for (var r = new Ue(31), a = 0; a < 31; ++a)
    r[a] = s += 1 << i[a - 1];
  for (var u = new rs(r[30]), a = 1; a < 30; ++a)
    for (var o = r[a]; o < r[a + 1]; ++o)
      u[o] = o - r[a] << 5 | a;
  return [r, u];
}, ls = as(os, 2), hs = ls[0], th = ls[1];
hs[28] = 258, th[258] = 28;
var eh = as(ss, 0), ih = eh[0], us = new Ue(32768);
for (ft = 0; ft < 32768; ++ft)
  re = (ft & 43690) >>> 1 | (ft & 21845) << 1, re = (re & 52428) >>> 2 | (re & 13107) << 2, re = (re & 61680) >>> 4 | (re & 3855) << 4, us[ft] = ((re & 65280) >>> 8 | (re & 255) << 8) >>> 1;
var re, ft, fi = function(i, s, r) {
  for (var a = i.length, u = 0, o = new Ue(s); u < a; ++u)
    i[u] && ++o[i[u] - 1];
  var h = new Ue(s);
  for (u = 0; u < s; ++u)
    h[u] = h[u - 1] + o[u - 1] << 1;
  var c;
  {
    c = new Ue(1 << s);
    var f = 15 - s;
    for (u = 0; u < a; ++u)
      if (i[u])
        for (var _ = u << 4 | i[u], v = s - i[u], m = h[i[u] - 1]++ << v, y = m | (1 << v) - 1; m <= y; ++m)
          c[us[m] >>> f] = _;
  }
  return c;
}, yi = new Ot(288);
for (ft = 0; ft < 144; ++ft)
  yi[ft] = 8;
var ft;
for (ft = 144; ft < 256; ++ft)
  yi[ft] = 9;
var ft;
for (ft = 256; ft < 280; ++ft)
  yi[ft] = 7;
var ft;
for (ft = 280; ft < 288; ++ft)
  yi[ft] = 8;
var ft, cs = new Ot(32);
for (ft = 0; ft < 32; ++ft)
  cs[ft] = 5;
var ft, nh = /* @__PURE__ */ fi(yi, 9), rh = /* @__PURE__ */ fi(cs, 5), Yn = function(i) {
  for (var s = i[0], r = 1; r < i.length; ++r)
    i[r] > s && (s = i[r]);
  return s;
}, Vt = function(i, s, r) {
  var a = s / 8 | 0;
  return (i[a] | i[a + 1] << 8) >> (s & 7) & r;
}, Gn = function(i, s) {
  var r = s / 8 | 0;
  return (i[r] | i[r + 1] << 8 | i[r + 2] << 16) >> (s & 7);
}, oh = function(i) {
  return (i + 7) / 8 | 0;
}, sh = function(i, s, r) {
  (r == null || r > i.length) && (r = i.length);
  var a = new (i.BYTES_PER_ELEMENT == 2 ? Ue : i.BYTES_PER_ELEMENT == 4 ? rs : Ot)(r - s);
  return a.set(i.subarray(s, r)), a;
}, ah = [
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
], Yt = function(i, s, r) {
  var a = new Error(s || ah[i]);
  if (a.code = i, Error.captureStackTrace && Error.captureStackTrace(a, Yt), !r)
    throw a;
  return a;
}, lr = function(i, s, r) {
  var a = i.length;
  if (!a || r && r.f && !r.l)
    return s || new Ot(0);
  var u = !s || r, o = !r || r.i;
  r || (r = {}), s || (s = new Ot(a * 3));
  var h = function(q) {
    var tt = s.length;
    if (q > tt) {
      var nt = new Ot(Math.max(tt * 2, q));
      nt.set(s), s = nt;
    }
  }, c = r.f || 0, f = r.p || 0, _ = r.b || 0, v = r.l, m = r.d, y = r.m, b = r.n, k = a * 8;
  do {
    if (!v) {
      c = Vt(i, f, 1);
      var S = Vt(i, f + 1, 3);
      if (f += 3, S)
        if (S == 1)
          v = nh, m = rh, y = 9, b = 5;
        else if (S == 2) {
          var T = Vt(i, f, 31) + 257, C = Vt(i, f + 10, 15) + 4, z = T + Vt(i, f + 5, 31) + 1;
          f += 14;
          for (var Z = new Ot(z), D = new Ot(19), F = 0; F < C; ++F)
            D[Ql[F]] = Vt(i, f + F * 3, 7);
          f += C * 3;
          for (var $ = Yn(D), et = (1 << $) - 1, K = fi(D, $), F = 0; F < z; ) {
            var it = K[Vt(i, f, et)];
            f += it & 15;
            var B = it >>> 4;
            if (B < 16)
              Z[F++] = B;
            else {
              var rt = 0, g = 0;
              for (B == 16 ? (g = 3 + Vt(i, f, 3), f += 2, rt = Z[F - 1]) : B == 17 ? (g = 3 + Vt(i, f, 7), f += 3) : B == 18 && (g = 11 + Vt(i, f, 127), f += 7); g--; )
                Z[F++] = rt;
            }
          }
          var P = Z.subarray(0, T), M = Z.subarray(T);
          y = Yn(P), b = Yn(M), v = fi(P, y), m = fi(M, b);
        } else
          Yt(1);
      else {
        var B = oh(f) + 4, A = i[B - 4] | i[B - 3] << 8, w = B + A;
        if (w > a) {
          o && Yt(0);
          break;
        }
        u && h(_ + A), s.set(i.subarray(B, w), _), r.b = _ += A, r.p = f = w * 8, r.f = c;
        continue;
      }
      if (f > k) {
        o && Yt(0);
        break;
      }
    }
    u && h(_ + 131072);
    for (var H = (1 << y) - 1, R = (1 << b) - 1, Q = f; ; Q = f) {
      var rt = v[Gn(i, f) & H], O = rt >>> 4;
      if (f += rt & 15, f > k) {
        o && Yt(0);
        break;
      }
      if (rt || Yt(2), O < 256)
        s[_++] = O;
      else if (O == 256) {
        Q = f, v = null;
        break;
      } else {
        var N = O - 254;
        if (O > 264) {
          var F = O - 257, U = os[F];
          N = Vt(i, f, (1 << U) - 1) + hs[F], f += U;
        }
        var X = m[Gn(i, f) & R], Y = X >>> 4;
        X || Yt(3), f += X & 15;
        var M = ih[Y];
        if (Y > 3) {
          var U = ss[Y];
          M += Gn(i, f) & (1 << U) - 1, f += U;
        }
        if (f > k) {
          o && Yt(0);
          break;
        }
        u && h(_ + 131072);
        for (var G = _ + N; _ < G; _ += 4)
          s[_] = s[_ - M], s[_ + 1] = s[_ + 1 - M], s[_ + 2] = s[_ + 2 - M], s[_ + 3] = s[_ + 3 - M];
        _ = G;
      }
    }
    r.l = v, r.p = Q, r.b = _, r.f = c, v && (c = 1, r.m = y, r.d = m, r.n = b);
  } while (!c);
  return _ == s.length ? s : sh(s, 0, _);
}, lh = /* @__PURE__ */ new Ot(0), hh = function(i) {
  (i[0] != 31 || i[1] != 139 || i[2] != 8) && Yt(6, "invalid gzip data");
  var s = i[3], r = 10;
  s & 4 && (r += i[10] | (i[11] << 8) + 2);
  for (var a = (s >> 3 & 1) + (s >> 4 & 1); a > 0; a -= !i[r++])
    ;
  return r + (s & 2);
}, uh = function(i) {
  var s = i.length;
  return (i[s - 4] | i[s - 3] << 8 | i[s - 2] << 16 | i[s - 1] << 24) >>> 0;
}, ch = function(i) {
  ((i[0] & 15) != 8 || i[0] >>> 4 > 7 || (i[0] << 8 | i[1]) % 31) && Yt(6, "invalid zlib data"), i[1] & 32 && Yt(6, "invalid zlib data: preset dictionaries not supported");
};
function fh(i, s) {
  return lr(i, s);
}
function dh(i, s) {
  return lr(i.subarray(hh(i), -8), new Ot(uh(i)));
}
function _h(i, s) {
  return lr((ch(i), i.subarray(2, -4)), s);
}
function ir(i, s) {
  return i[0] == 31 && i[1] == 139 && i[2] == 8 ? dh(i) : (i[0] & 15) != 8 || i[0] >> 4 > 7 || (i[0] << 8 | i[1]) % 31 ? fh(i, s) : _h(i, s);
}
var mh = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), ph = 0;
try {
  mh.decode(lh, { stream: !0 }), ph = 1;
} catch {
}
var fs = (i, s) => i * Math.pow(2, s), ai = (i, s) => Math.floor(i / Math.pow(2, s)), qi = (i, s) => fs(i.getUint16(s + 1, !0), 8) + i.getUint8(s), ds = (i, s) => fs(i.getUint32(s + 2, !0), 16) + i.getUint16(s, !0), gh = (i, s, r, a, u) => {
  if (i != a.getUint8(u))
    return i - a.getUint8(u);
  const o = qi(a, u + 1);
  if (s != o)
    return s - o;
  const h = qi(a, u + 4);
  return r != h ? r - h : 0;
}, vh = (i, s, r, a) => {
  const u = _s(i, s | 128, r, a);
  return u ? {
    z: s,
    x: r,
    y: a,
    offset: u[0],
    length: u[1],
    is_dir: !0
  } : null;
}, xo = (i, s, r, a) => {
  const u = _s(i, s, r, a);
  return u ? {
    z: s,
    x: r,
    y: a,
    offset: u[0],
    length: u[1],
    is_dir: !1
  } : null;
}, _s = (i, s, r, a) => {
  let u = 0, o = i.byteLength / 17 - 1;
  for (; u <= o; ) {
    const h = o + u >> 1, c = gh(s, r, a, i, h * 17);
    if (c > 0)
      u = h + 1;
    else if (c < 0)
      o = h - 1;
    else
      return [ds(i, h * 17 + 7), i.getUint32(h * 17 + 13, !0)];
  }
  return null;
}, yh = (i, s) => i.is_dir && !s.is_dir ? 1 : !i.is_dir && s.is_dir ? -1 : i.z !== s.z ? i.z - s.z : i.x !== s.x ? i.x - s.x : i.y - s.y, ms = (i, s) => {
  const r = i.getUint8(s * 17);
  return {
    z: r & 127,
    x: qi(i, s * 17 + 1),
    y: qi(i, s * 17 + 4),
    offset: ds(i, s * 17 + 7),
    length: i.getUint32(s * 17 + 13, !0),
    is_dir: r >> 7 === 1
  };
}, Lo = (i) => {
  const s = [], r = new DataView(i);
  for (let a = 0; a < r.byteLength / 17; a++)
    s.push(ms(r, a));
  return bh(s);
}, bh = (i) => {
  i.sort(yh);
  const s = new ArrayBuffer(17 * i.length), r = new Uint8Array(s);
  for (let a = 0; a < i.length; a++) {
    const u = i[a];
    let o = u.z;
    u.is_dir && (o = o | 128), r[a * 17] = o, r[a * 17 + 1] = u.x & 255, r[a * 17 + 2] = u.x >> 8 & 255, r[a * 17 + 3] = u.x >> 16 & 255, r[a * 17 + 4] = u.y & 255, r[a * 17 + 5] = u.y >> 8 & 255, r[a * 17 + 6] = u.y >> 16 & 255, r[a * 17 + 7] = u.offset & 255, r[a * 17 + 8] = ai(u.offset, 8) & 255, r[a * 17 + 9] = ai(u.offset, 16) & 255, r[a * 17 + 10] = ai(u.offset, 24) & 255, r[a * 17 + 11] = ai(u.offset, 32) & 255, r[a * 17 + 12] = ai(u.offset, 48) & 255, r[a * 17 + 13] = u.length & 255, r[a * 17 + 14] = u.length >> 8 & 255, r[a * 17 + 15] = u.length >> 16 & 255, r[a * 17 + 16] = u.length >> 24 & 255;
  }
  return s;
}, wh = (i, s) => {
  if (i.byteLength < 17)
    return null;
  const r = i.byteLength / 17, a = ms(i, r - 1);
  if (a.is_dir) {
    const u = a.z, o = s.z - u, h = Math.trunc(s.x / (1 << o)), c = Math.trunc(s.y / (1 << o));
    return { z: u, x: h, y: c };
  }
  return null;
};
function xh(i) {
  return kt(this, null, function* () {
    const s = yield i.getBytes(0, 512e3), r = new DataView(s.data), a = r.getUint32(4, !0), u = r.getUint16(8, !0), o = new TextDecoder("utf-8"), h = JSON.parse(
      o.decode(new DataView(s.data, 10, a))
    );
    let c = 0;
    h.compression === "gzip" && (c = 2);
    let f = 0;
    "minzoom" in h && (f = +h.minzoom);
    let _ = 0;
    "maxzoom" in h && (_ = +h.maxzoom);
    let v = 0, m = 0, y = 0, b = -180, k = -85, S = 180, B = 85;
    if (h.bounds) {
      const w = h.bounds.split(",");
      b = +w[0], k = +w[1], S = +w[2], B = +w[3];
    }
    if (h.center) {
      const w = h.center.split(",");
      v = +w[0], m = +w[1], y = +w[2];
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
      centerLat: m,
      etag: s.etag
    };
  });
}
function Lh(i, s, r, a, u, o, h) {
  return kt(this, null, function* () {
    let c = yield r.getArrayBuffer(
      s,
      i.rootDirectoryOffset,
      i.rootDirectoryLength,
      i
    );
    i.specVersion === 1 && (c = Lo(c));
    const f = xo(new DataView(c), a, u, o);
    if (f) {
      let m = (yield s.getBytes(f.offset, f.length, h)).data;
      const y = new DataView(m);
      return y.getUint8(0) == 31 && y.getUint8(1) == 139 && (m = ir(new Uint8Array(m))), {
        data: m
      };
    }
    const _ = wh(new DataView(c), { z: a, x: u, y: o });
    if (_) {
      const v = vh(
        new DataView(c),
        _.z,
        _.x,
        _.y
      );
      if (v) {
        let m = yield r.getArrayBuffer(
          s,
          v.offset,
          v.length,
          i
        );
        i.specVersion === 1 && (m = Lo(m));
        const y = xo(new DataView(m), a, u, o);
        if (y) {
          let k = (yield s.getBytes(
            y.offset,
            y.length,
            h
          )).data;
          const S = new DataView(k);
          return S.getUint8(0) == 31 && S.getUint8(1) == 139 && (k = ir(new Uint8Array(k))), {
            data: k
          };
        }
      }
    }
  });
}
var ps = {
  getHeader: xh,
  getZxy: Lh
};
function De(i, s) {
  return (s >>> 0) * 4294967296 + (i >>> 0);
}
function Ph(i, s) {
  const r = s.buf;
  let a, u;
  if (u = r[s.pos++], a = (u & 112) >> 4, u < 128 || (u = r[s.pos++], a |= (u & 127) << 3, u < 128) || (u = r[s.pos++], a |= (u & 127) << 10, u < 128) || (u = r[s.pos++], a |= (u & 127) << 17, u < 128) || (u = r[s.pos++], a |= (u & 127) << 24, u < 128) || (u = r[s.pos++], a |= (u & 1) << 31, u < 128))
    return De(i, a);
  throw new Error("Expected varint not more than 10 bytes");
}
function li(i) {
  const s = i.buf;
  let r, a;
  return a = s[i.pos++], r = a & 127, a < 128 || (a = s[i.pos++], r |= (a & 127) << 7, a < 128) || (a = s[i.pos++], r |= (a & 127) << 14, a < 128) || (a = s[i.pos++], r |= (a & 127) << 21, a < 128) ? r : (a = s[i.pos], r |= (a & 15) << 28, Ph(r, i));
}
function Th(i, s, r, a) {
  if (a == 0) {
    r == 1 && (s[0] = i - 1 - s[0], s[1] = i - 1 - s[1]);
    const u = s[0];
    s[0] = s[1], s[1] = u;
  }
}
function kh(i, s, r) {
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
    h = (_[0] & v) > 0 ? 1 : 0, c = (_[1] & v) > 0 ? 1 : 0, f += v * v * (3 * h ^ c), Th(v, _, h, c), v = v / 2;
  return a + f;
}
function gs(i, s) {
  return kt(this, null, function* () {
    if (s === 1 || s === 0)
      return i;
    if (s === 2)
      return ir(new Uint8Array(i));
    throw Error("Compression method not supported");
  });
}
var Ch = 127;
function Mh(i, s) {
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
var Sh = class {
  constructor(i) {
    this.url = i;
  }
  getKey() {
    return this.url;
  }
  getBytes(i, s, r) {
    return kt(this, null, function* () {
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
function Ht(i, s) {
  const r = i.getUint32(s + 4, !0), a = i.getUint32(s + 0, !0);
  return r * Math.pow(2, 32) + a;
}
function zh(i, s) {
  const r = new DataView(i), a = r.getUint8(7);
  if (a > 3)
    throw Error(
      `Archive is spec version ${a} but this library supports up to spec version 3`
    );
  return {
    specVersion: a,
    rootDirectoryOffset: Ht(r, 8),
    rootDirectoryLength: Ht(r, 16),
    jsonMetadataOffset: Ht(r, 24),
    jsonMetadataLength: Ht(r, 32),
    leafDirectoryOffset: Ht(r, 40),
    leafDirectoryLength: Ht(r, 48),
    tileDataOffset: Ht(r, 56),
    tileDataLength: Ht(r, 64),
    numAddressedTiles: Ht(r, 72),
    numTileEntries: Ht(r, 80),
    numTileContents: Ht(r, 88),
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
function vs(i) {
  const s = { buf: new Uint8Array(i), pos: 0 }, r = li(s), a = [];
  let u = 0;
  for (let o = 0; o < r; o++) {
    const h = li(s);
    a.push({ tileId: u + h, offset: 0, length: 0, runLength: 1 }), u += h;
  }
  for (let o = 0; o < r; o++)
    a[o].runLength = li(s);
  for (let o = 0; o < r; o++)
    a[o].length = li(s);
  for (let o = 0; o < r; o++) {
    const h = li(s);
    h === 0 && o > 0 ? a[o].offset = a[o - 1].offset + a[o - 1].length : a[o].offset = h - 1;
  }
  return a;
}
function Eh(i) {
  const s = new DataView(i);
  return s.getUint16(2, !0) === 2 ? (console.warn(
    "PMTiles spec version 2 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
  ), 2) : s.getUint16(2, !0) === 1 ? (console.warn(
    "PMTiles spec version 1 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
  ), 1) : 3;
}
var Fe = class extends Error {
};
function Oh(i, s, r, a) {
  return kt(this, null, function* () {
    const u = yield i.getBytes(0, 16384);
    if (new DataView(u.data).getUint16(0, !0) !== 19792)
      throw new Error("Wrong magic number for PMTiles archive");
    if (Eh(u.data) < 3)
      return [yield ps.getHeader(i)];
    const h = u.data.slice(0, Ch);
    let c = u.etag;
    a && u.etag != a && (console.warn(
      "ETag conflict detected; your HTTP server might not support content-based ETag headers. ETags disabled for " + i.getKey()
    ), c = void 0);
    const f = zh(h, c);
    if (r) {
      const _ = u.data.slice(
        f.rootDirectoryOffset,
        f.rootDirectoryOffset + f.rootDirectoryLength
      ), v = i.getKey() + "|" + (f.etag || "") + "|" + f.rootDirectoryOffset + "|" + f.rootDirectoryLength, m = vs(
        yield s(_, f.internalCompression)
      );
      return [f, [v, m.length, m]];
    }
    return [f, void 0];
  });
}
function Ih(i, s, r, a, u) {
  return kt(this, null, function* () {
    const o = yield i.getBytes(r, a);
    if (u.etag && u.etag !== o.etag)
      throw new Fe(o.etag);
    const h = yield s(o.data, u.internalCompression), c = vs(h);
    if (c.length === 0)
      throw new Error("Empty directory is invalid");
    return c;
  });
}
var Bh = class {
  constructor(i = 100, s = !0, r = gs) {
    this.cache = /* @__PURE__ */ new Map(), this.maxCacheEntries = i, this.counter = 1, this.prefetch = s, this.decompress = r;
  }
  getHeader(i, s) {
    return kt(this, null, function* () {
      const r = i.getKey();
      if (this.cache.has(r))
        return this.cache.get(r).lastUsed = this.counter++, yield this.cache.get(r).data;
      const a = new Promise((u, o) => {
        Oh(i, this.decompress, this.prefetch, s).then((h) => {
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
    return kt(this, null, function* () {
      const u = i.getKey() + "|" + (a.etag || "") + "|" + s + "|" + r;
      if (this.cache.has(u))
        return this.cache.get(u).lastUsed = this.counter++, yield this.cache.get(u).data;
      const o = new Promise((h, c) => {
        Ih(i, this.decompress, s, r, a).then((f) => {
          h(f), this.prune();
        }).catch((f) => {
          c(f);
        });
      });
      return this.cache.set(u, { lastUsed: this.counter++, data: o }), o;
    });
  }
  getArrayBuffer(i, s, r, a) {
    return kt(this, null, function* () {
      const u = i.getKey() + "|" + (a.etag || "") + "|" + s + "|" + r;
      if (this.cache.has(u))
        return this.cache.get(u).lastUsed = this.counter++, yield this.cache.get(u).data;
      const o = new Promise((h, c) => {
        i.getBytes(s, r).then((f) => {
          if (a.etag && a.etag !== f.etag)
            throw new Fe(f.etag);
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
    return kt(this, null, function* () {
      this.cache.delete(i.getKey()), yield this.getHeader(i, s);
    });
  }
}, Ah = class {
  constructor(i, s, r) {
    typeof i == "string" ? this.source = new Sh(i) : this.source = i, r ? this.decompress = r : this.decompress = gs, s ? this.cache = s : this.cache = new Bh();
  }
  getHeader() {
    return kt(this, null, function* () {
      return yield this.cache.getHeader(this.source);
    });
  }
  getZxyAttempt(i, s, r, a) {
    return kt(this, null, function* () {
      const u = kh(i, s, r), o = yield this.cache.getHeader(this.source);
      if (o.specVersion < 3)
        return ps.getZxy(o, this.source, this.cache, i, s, r, a);
      if (i < o.minZoom || i > o.maxZoom)
        return;
      let h = o.rootDirectoryOffset, c = o.rootDirectoryLength;
      for (let f = 0; f <= 3; f++) {
        const _ = yield this.cache.getDirectory(
          this.source,
          h,
          c,
          o
        ), v = Mh(_, u);
        if (v)
          if (v.runLength > 0) {
            const m = yield this.source.getBytes(
              o.tileDataOffset + v.offset,
              v.length,
              a
            );
            if (o.etag && o.etag !== m.etag)
              throw new Fe(m.etag);
            return {
              data: yield this.decompress(m.data, o.tileCompression),
              cacheControl: m.cacheControl,
              expires: m.expires
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
    return kt(this, null, function* () {
      try {
        return yield this.getZxyAttempt(i, s, r, a);
      } catch (u) {
        if (u instanceof Fe)
          return this.cache.invalidate(this.source, u.message), yield this.getZxyAttempt(i, s, r, a);
        throw u;
      }
    });
  }
  getMetadataAttempt() {
    return kt(this, null, function* () {
      const i = yield this.cache.getHeader(this.source), s = yield this.source.getBytes(
        i.jsonMetadataOffset,
        i.jsonMetadataLength
      );
      if (i.etag && i.etag !== s.etag)
        throw new Fe(s.etag);
      const r = yield this.decompress(
        s.data,
        i.internalCompression
      ), a = new TextDecoder("utf-8");
      return JSON.parse(a.decode(r));
    });
  }
  getMetadata() {
    return kt(this, null, function* () {
      try {
        return yield this.getMetadataAttempt();
      } catch (i) {
        if (i instanceof Fe)
          return this.cache.invalidate(this.source, i.message), yield this.getMetadataAttempt();
        throw i;
      }
    });
  }
};
function Ve(i) {
  return `${i.x}:${i.y}:${i.z}`;
}
var Zh = (i, s, r) => {
  i.pos = s;
  const a = i.readVarint() + i.pos;
  let u = 1, o = 0, h = 0, c = 0, f = 1 / 0, _ = -1 / 0, v = 1 / 0, m = -1 / 0;
  const y = [];
  let b = [];
  for (; i.pos < a; ) {
    if (o <= 0) {
      const k = i.readVarint();
      u = k & 7, o = k >> 3;
    }
    if (o--, u === 1 || u === 2)
      h += i.readSVarint() * r, c += i.readSVarint() * r, h < f && (f = h), h > _ && (_ = h), c < v && (v = c), c > m && (m = c), u === 1 && (b.length > 0 && y.push(b), b = []), b.push(new $l.default(h, c));
    else if (u === 7)
      b && b.push(b[0].clone());
    else
      throw new Error(`unknown command ${u}`);
  }
  return b && y.push(b), { geom: y, bbox: { minX: f, minY: v, maxX: _, maxY: m } };
};
function ys(i, s) {
  const r = new Kl.VectorTile(new Jl.default(i)), a = /* @__PURE__ */ new Map();
  for (const [u, o] of Object.entries(r.layers)) {
    const h = [], c = o;
    for (let f = 0; f < c.length; f++) {
      const _ = Zh(
        c.feature(f)._pbf,
        c.feature(f)._geometry,
        s / c.extent
      );
      let v = 0;
      for (const m of _.geom)
        v += m.length;
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
var Po = class {
  constructor(i, s) {
    typeof i == "string" ? this.p = new Ah(i) : this.p = i, this.zoomaborts = [], this.shouldCancelZooms = s;
  }
  get(i, s) {
    return He(this, null, function* () {
      this.shouldCancelZooms && (this.zoomaborts = this.zoomaborts.filter((o) => o.z !== i.z ? (o.controller.abort(), !1) : !0));
      const r = new AbortController();
      this.zoomaborts.push({ z: i.z, controller: r });
      const a = r.signal, u = yield this.p.getZxy(i.z, i.x, i.y, a);
      return u ? ys(u.data, s) : /* @__PURE__ */ new Map();
    });
  }
}, Rh = class {
  constructor(i, s) {
    this.url = i, this.zoomaborts = [], this.shouldCancelZooms = s;
  }
  get(i, s) {
    return He(this, null, function* () {
      this.shouldCancelZooms && (this.zoomaborts = this.zoomaborts.filter((o) => o.z !== i.z ? (o.controller.abort(), !1) : !0));
      const r = this.url.replace("{z}", i.z.toString()).replace("{x}", i.x.toString()).replace("{y}", i.y.toString()), a = new AbortController();
      this.zoomaborts.push({ z: i.z, controller: a });
      const u = a.signal;
      return new Promise((o, h) => {
        fetch(r, { signal: u }).then((c) => c.arrayBuffer()).then((c) => {
          const f = ys(c, s);
          o(f);
        }).catch((c) => {
          h(c);
        });
      });
    });
  }
}, Dh = class {
  constructor(i, s) {
    this.source = i, this.cache = /* @__PURE__ */ new Map(), this.inflight = /* @__PURE__ */ new Map(), this.tileSize = s;
  }
  get(i) {
    return He(this, null, function* () {
      const s = Ve(i);
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
              this.cache.forEach((v, m) => {
                v.used < f && (f = v.used, _ = m);
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
}, Lt = class {
  constructor(i) {
    var s;
    this.pattern = i.pattern, this.fill = new Dt(i.fill, "black"), this.opacity = new xt(i.opacity, 1), this.stroke = new Dt(i.stroke, "black"), this.width = new xt(i.width, 0), this.perFeature = (s = this.fill.perFeature || this.opacity.perFeature || this.stroke.perFeature || this.width.perFeature || i.perFeature) != null ? s : !1, this.doStroke = !1;
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
function jh(i, s) {
  let r = 0;
  for (; s[r + 1][0] < i; )
    r++;
  return r;
}
function Nh(i, s, r) {
  return i * (r - s) + s;
}
function Fh(i, s, r, a) {
  const u = a[s + 1][0] - a[s][0], o = i - a[s][0];
  return u === 0 ? 0 : r === 1 ? o / u : (Rt(r, o) - 1) / (Rt(r, u) - 1);
}
function Wt(i, s) {
  return (r) => {
    if (s.length < 1)
      return 0;
    if (r <= s[0][0])
      return s[0][1];
    if (r >= s[s.length - 1][0])
      return s[s.length - 1][1];
    const a = jh(r, s), u = Fh(r, a, i, s);
    return Nh(u, s[a][1], s[a + 1][1]);
  };
}
function To(i) {
  return Wt(1, i);
}
var zt = class {
  constructor(i) {
    var s;
    this.color = new Dt(i.color, "black"), this.width = new xt(i.width), this.opacity = new xt(i.opacity), this.dash = i.dash ? new Yl(i.dash) : null, this.dashColor = new Dt(i.dashColor, "black"), this.dashWidth = new xt(i.dashWidth, 1), this.lineCap = new Dt(i.lineCap, "butt"), this.lineJoin = new Dt(i.lineJoin, "miter"), this.skip = !1, this.perFeature = !!((s = this.dash) != null && s.perFeature || this.color.perFeature || this.opacity.perFeature || this.width.perFeature || this.lineCap.perFeature || this.lineJoin.perFeature || i.perFeature);
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
}, Uh = class {
  constructor(i) {
    this.radius = new xt(i.radius, 3), this.fill = new Dt(i.fill, "black"), this.stroke = new Dt(i.stroke, "white"), this.width = new xt(i.width, 0), this.opacity = new xt(i.opacity);
  }
  draw(i, s, r, a) {
    i.globalAlpha = this.opacity.get(r, a);
    const u = this.radius.get(r, a), o = this.width.get(r, a);
    o > 0 && (i.strokeStyle = this.stroke.get(r, a), i.lineWidth = o, i.beginPath(), i.arc(s[0][0].x, s[0][0].y, u + o / 2, 0, 2 * Math.PI), i.stroke()), i.fillStyle = this.fill.get(r, a), i.beginPath(), i.arc(s[0][0].x, s[0][0].y, u, 0, 2 * Math.PI), i.fill();
  }
  place(i, s, r) {
    s[0];
    const a = new we.default(s[0][0].x, s[0][0].y), u = this.radius.get(i.zoom, r), o = {
      minX: a.x - u,
      minY: a.y - u,
      maxX: a.x + u,
      maxY: a.y + u
    };
    return [{ anchor: a, bboxes: [o], draw: (c) => {
      this.draw(c, [[new we.default(0, 0)]], i.zoom, r);
    } }];
  }
}, Vh = (i, s) => ({
  minX: Math.min(i.minX, s.minX),
  minY: Math.min(i.minY, s.minY),
  maxX: Math.max(i.maxX, s.maxX),
  maxY: Math.max(i.maxY, s.maxY)
}), Hh = class {
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
      o = u[0], c = Vh(c, o.bboxes[0]), f.push(o.draw);
    }
    return [{ anchor: h, bboxes: [c], draw: (v) => {
      for (const m of f)
        m(v);
    } }];
  }
}, Wh = class {
  constructor(i) {
    this.symbolizer = i;
  }
  place(i, s, r) {
    const a = s[0][0], u = this.symbolizer.place(i, [[new we.default(0, 0)]], r);
    if (!u || u.length === 0)
      return;
    const o = u[0], h = o.bboxes[0], c = h.maxX - h.minX, f = h.maxY - h.minY, _ = {
      minX: a.x - c / 2,
      maxX: a.x + c / 2,
      minY: a.y - f / 2,
      maxY: a.y + f / 2
    };
    return [{ anchor: a, bboxes: [_], draw: (m) => {
      m.translate(-c / 2, f / 2 - h.maxY), o.draw(m, {
        justify: 2
        /* Center */
      });
    } }];
  }
}, bs = class {
  constructor(i) {
    this.font = new is(i), this.text = new es(i), this.fill = new Dt(i.fill, "black"), this.stroke = new Dt(i.stroke, "black"), this.width = new xt(i.width, 0), this.lineHeight = new xt(i.lineHeight, 1), this.letterSpacing = new xt(i.letterSpacing, 0), this.maxLineCodeUnits = new xt(i.maxLineChars, 15), this.justify = i.justify;
  }
  place(i, s, r) {
    const a = this.text.get(i.zoom, r);
    if (!a)
      return;
    const u = this.font.get(i.zoom, r);
    i.scratch.font = u;
    const o = this.letterSpacing.get(i.zoom, r), h = ns(
      a,
      this.maxLineCodeUnits.get(i.zoom, r)
    );
    let c = "", f = 0;
    for (const A of h)
      A.length > f && (f = A.length, c = A);
    const _ = i.scratch.measureText(c), v = _.width + o * (f - 1), m = _.actualBoundingBoxAscent, y = _.actualBoundingBoxDescent, b = (m + y) * this.lineHeight.get(i.zoom, r), k = new we.default(s[0][0].x, s[0][0].y), S = {
      minX: k.x,
      minY: k.y - m,
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
            let D = Z;
            for (const F of z)
              A.strokeText(F, D, C), D += A.measureText(F).width + o;
          } else
            A.strokeText(z, Z, C);
        if (o > 0) {
          let D = Z;
          for (const F of z)
            A.fillText(F, D, C), D += A.measureText(F).width + o;
        } else
          A.fillText(z, Z, C);
        C += b;
      }
    } }];
  }
}, hi = class {
  constructor(i) {
    this.centered = new Wh(new bs(i));
  }
  place(i, s, r) {
    return this.centered.place(i, s, r);
  }
}, Yh = class {
  constructor(i, s) {
    var r, a, u;
    this.symbolizer = i, this.offsetX = new xt(s.offsetX, 0), this.offsetY = new xt(s.offsetY, 0), this.justify = (r = s.justify) != null ? r : void 0, this.placements = (a = s.placements) != null ? a : [
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
    const a = s[0][0], u = this.symbolizer.place(i, [[new we.default(0, 0)]], r);
    if (!u || u.length === 0)
      return;
    const o = u[0], h = o.bboxes[0];
    let c = this.offsetX, f = this.offsetY, _ = this.justify, v = this.placements;
    const {
      offsetX: m,
      offsetY: y,
      justify: b,
      placements: k
    } = this.ddValues(i.zoom, r) || {};
    m && (c = new xt(m, 0)), y && (f = new xt(y, 0)), b && (_ = b), k && (v = k);
    const S = c.get(i.zoom, r), B = f.get(i.zoom, r), A = (Z, D) => ({
      minX: Z.x + D.x + h.minX,
      minY: Z.y + D.y + h.minY,
      maxX: Z.x + D.x + h.maxX,
      maxY: Z.y + D.y + h.maxY
    });
    let w = new we.default(S, B), T;
    const C = (Z) => {
      Z.translate(w.x, w.y), o.draw(Z, { justify: T });
    }, z = (Z, D) => {
      const F = A(Z, D);
      if (!i.index.bboxCollides(F, i.order))
        return [{ anchor: a, bboxes: [F], draw: C }];
    };
    for (const Z of v) {
      const D = this.computeXaxisOffset(S, h, Z), F = this.computeYaxisOffset(B, h, Z);
      return T = this.computeJustify(_, Z), w = new we.default(D, F), z(a, w);
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
}, Gh = class {
  constructor(i) {
    this.symbolizer = new Yh(
      new bs(i),
      i
    );
  }
  place(i, s, r) {
    return this.symbolizer.place(i, s, r);
  }
}, qn = class {
  constructor(i) {
    var s;
    this.font = new is(i), this.text = new es(i), this.fill = new Dt(i.fill, "black"), this.stroke = new Dt(i.stroke, "black"), this.width = new xt(i.width, 0), this.offset = new xt(i.offset, 0), this.position = (s = i.position) != null ? s : 1, this.maxLabelCodeUnits = new xt(i.maxLabelChars, 40), this.repeatDistance = new xt(i.repeatDistance, 250);
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
    const m = _ * 2, y = ql(s, f, v, m);
    if (y.length === 0)
      return;
    const b = [];
    for (const k of y) {
      const S = k.end.x - k.start.x, B = k.end.y - k.start.y, w = Xl(
        k.start,
        k.end,
        f,
        m / 2
      ).map((C) => ({
        minX: C.x - m / 2,
        minY: C.y - m / 2,
        maxX: C.x + m / 2,
        maxY: C.y + m / 2
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
}, Et = (i, s) => {
  const r = i[s];
  return typeof r == "string" ? r : "";
}, ko = (i, s) => {
  const r = i[s];
  return typeof r == "number" ? r : 0;
}, ws = (i) => [
  {
    dataLayer: "earth",
    symbolizer: new Lt({
      fill: i.earth
    })
  },
  {
    dataLayer: "landuse",
    symbolizer: new Lt({
      fill: (s, r) => Wn(i.park_a, i.park_b, Math.min(Math.max(s / 12, 12), 0))
    }),
    filter: (s, r) => {
      const a = Et(r.props, "pmap:kind");
      return ["allotments", "village_green", "playground"].includes(a);
    }
  },
  {
    dataLayer: "landuse",
    symbolizer: new Lt({
      fill: i.park_b,
      opacity: 0.7
    }),
    filter: (s, r) => {
      const a = Et(r.props, "pmap:kind");
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
    symbolizer: new Lt({
      fill: i.hospital
    }),
    filter: (s, r) => r.props["pmap:kind"] === "hospital"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Lt({
      fill: i.industrial
    }),
    filter: (s, r) => r.props["pmap:kind"] === "industrial"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Lt({
      fill: i.school
    }),
    filter: (s, r) => {
      const a = Et(r.props, "pmap:kind");
      return ["school", "university", "college"].includes(a);
    }
  },
  {
    dataLayer: "landuse",
    symbolizer: new Lt({
      fill: i.beach
    }),
    filter: (s, r) => r.props["pmap:kind"] === "beach"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Lt({
      fill: i.zoo
    }),
    filter: (s, r) => r.props["pmap:kind"] === "zoo"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Lt({
      fill: i.zoo
    }),
    filter: (s, r) => {
      const a = Et(r.props, "pmap:kind");
      return ["military", "naval_base", "airfield"].includes(a);
    }
  },
  {
    dataLayer: "natural",
    symbolizer: new Lt({
      fill: (s, r) => Wn(i.wood_a, i.wood_b, Math.min(Math.max(s / 12, 12), 0))
    }),
    filter: (s, r) => {
      const a = Et(r.props, "pmap:kind");
      return ["wood", "nature_reserve", "forest"].includes(a);
    }
  },
  {
    dataLayer: "natural",
    symbolizer: new Lt({
      fill: (s, r) => Wn(i.scrub_a, i.scrub_b, Math.min(Math.max(s / 12, 12), 0))
    }),
    filter: (s, r) => {
      const a = Et(r.props, "pmap:kind");
      return ["scrub", "grassland", "grass"].includes(a);
    }
  },
  {
    dataLayer: "natural",
    symbolizer: new Lt({
      fill: i.scrub_b
    }),
    filter: (s, r) => {
      const a = Et(r.props, "pmap:kind");
      return ["scrub", "grassland", "grass"].includes(a);
    }
  },
  {
    dataLayer: "natural",
    symbolizer: new Lt({
      fill: i.glacier
    }),
    filter: (s, r) => r.props["pmap:kind"] === "glacier"
  },
  {
    dataLayer: "natural",
    symbolizer: new Lt({
      fill: i.sand
    }),
    filter: (s, r) => r.props["pmap:kind"] === "sand"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Lt({
      fill: i.aerodrome
    }),
    filter: (s, r) => r.props["pmap:kind"] === "aerodrome"
  },
  {
    dataLayer: "water",
    symbolizer: new Lt({
      fill: i.water
    })
  },
  {
    dataLayer: "transit",
    symbolizer: new zt({
      color: i.runway,
      width: (s, r) => Wt(1.6, [
        [11, 0],
        [13, 4],
        [19, 30]
      ])(s)
    }),
    filter: (s, r) => r.props["pmap:kind_detail"] === "runway"
  },
  {
    dataLayer: "transit",
    symbolizer: new zt({
      color: i.runway,
      width: (s, r) => Wt(1.6, [
        [14, 0],
        [14.5, 1],
        [16, 6]
      ])(s)
    }),
    filter: (s, r) => r.props["pmap:kind_detail"] === "taxiway"
  },
  {
    dataLayer: "transit",
    symbolizer: new zt({
      color: i.pier,
      width: (s, r) => Wt(1.6, [
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
    symbolizer: new zt({
      color: i.water,
      width: (s, r) => Wt(1.6, [
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
    symbolizer: new zt({
      color: i.water,
      width: 0.5
    }),
    filter: (s, r) => r.props["pmap:kind"] === "stream"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Lt({
      fill: i.pedestrian
    }),
    filter: (s, r) => r.props["pmap:kind"] === "pedestrian"
  },
  {
    dataLayer: "landuse",
    symbolizer: new Lt({
      fill: i.pier
    }),
    filter: (s, r) => r.props["pmap:kind"] === "pier"
  },
  {
    dataLayer: "buildings",
    symbolizer: new Lt({
      fill: i.buildings,
      opacity: 0.5
    })
  },
  {
    dataLayer: "roads",
    symbolizer: new zt({
      color: i.major,
      width: (s, r) => Wt(1.6, [
        [14, 0],
        [20, 7]
      ])(s)
    }),
    filter: (s, r) => {
      const a = Et(r.props, "pmap:kind");
      return ["other", "path"].includes(a);
    }
  },
  {
    dataLayer: "roads",
    symbolizer: new zt({
      color: i.major,
      width: (s, r) => Wt(1.6, [
        [13, 0],
        [18, 8]
      ])(s)
    }),
    filter: (s, r) => r.props["pmap:kind"] === "minor_road"
  },
  {
    dataLayer: "roads",
    symbolizer: new zt({
      color: i.major,
      width: (s, r) => Wt(1.6, [
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
    symbolizer: new zt({
      color: i.major,
      width: (s, r) => Wt(1.6, [
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
    symbolizer: new zt({
      color: i.major,
      width: (s, r) => Wt(1.6, [
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
    symbolizer: new zt({
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
    symbolizer: new zt({
      dash: [0.3, 0.75],
      color: i.railway,
      dashWidth: (s, r) => Wt(1.6, [
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
    symbolizer: new zt({
      dash: [3, 2],
      color: i.boundaries,
      width: 0.5
    }),
    filter: (s, r) => {
      const a = r.props["pmap:min_admin_level"];
      return typeof a == "number" && a > 2;
    }
  }
], qh = (i) => {
  const s = ["name"];
  return [
    {
      dataLayer: "roads",
      symbolizer: new qn({
        labelProps: s,
        fill: i.roads_label_minor,
        font: "400 12px sans-serif",
        width: 2,
        stroke: i.roads_label_minor_halo
      }),
      minzoom: 16,
      filter: (r, a) => {
        const u = Et(a.props, "pmap:kind");
        return ["minor_road", "other", "path"].includes(u);
      }
    },
    {
      dataLayer: "roads",
      symbolizer: new qn({
        labelProps: s,
        fill: i.roads_label_major,
        font: "400 12px sans-serif",
        width: 2,
        stroke: i.roads_label_major_halo
      }),
      minzoom: 12,
      filter: (r, a) => {
        const u = Et(a.props, "pmap:kind");
        return ["highway", "major_road", "medium_road"].includes(u);
      }
    },
    {
      dataLayer: "roads",
      symbolizer: new qn({
        labelProps: s,
        fill: i.roads_label_major,
        font: "400 12px sans-serif",
        width: 2,
        stroke: i.roads_label_major_halo
      }),
      minzoom: 12,
      filter: (r, a) => {
        const u = Et(a.props, "pmap:kind");
        return ["highway", "major_road", "medium_road"].includes(u);
      }
    },
    {
      dataLayer: "physical_point",
      symbolizer: new hi({
        labelProps: s,
        fill: i.ocean_label,
        lineHeight: 1.5,
        letterSpacing: 1,
        font: (r, a) => `400 ${To([
          [3, 10],
          [10, 12]
        ])(r)}px sans-serif`,
        textTransform: "uppercase"
      }),
      filter: (r, a) => {
        const u = Et(a.props, "pmap:kind");
        return ["ocean", "bay", "strait", "fjord"].includes(u);
      }
    },
    {
      dataLayer: "physical_point",
      symbolizer: new hi({
        labelProps: s,
        fill: i.ocean_label,
        lineHeight: 1.5,
        letterSpacing: 1,
        font: (r, a) => `400 ${To([
          [3, 0],
          [6, 12],
          [10, 12]
        ])(r)}px sans-serif`
      }),
      filter: (r, a) => {
        const u = Et(a.props, "pmap:kind");
        return ["sea", "lake", "water"].includes(u);
      }
    },
    {
      dataLayer: "places",
      symbolizer: new hi({
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
      symbolizer: new hi({
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
      symbolizer: new hi({
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
        const u = ko(r, "pmap:population_rank"), o = ko(a, "pmap:population_rank");
        return u - o;
      },
      filter: (r, a) => a.props["pmap:kind"] === "locality"
    },
    {
      dataLayer: "places",
      maxzoom: 8,
      symbolizer: new Hh([
        new Uh({
          radius: 2,
          fill: i.city_circle,
          stroke: i.city_circle_stroke,
          width: 1.5
        }),
        new Gh({
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
}, Xh = {
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
}, $h = {
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
}, Kh = {
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
}, Jh = {
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
}, Qh = {
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
}, tu = {
  light: Xh,
  dark: $h,
  white: Kh,
  grayscale: Jh,
  black: Qh
}, eu = tu, iu = jt(ae()), nu = jt(Bl()), je = jt(ae()), xs = (i, s, r) => {
  const a = [];
  for (const u of i) {
    const o = [];
    for (const h of u)
      o.push(h.clone().mult(s).add(r));
    a.push(o);
  }
  return a;
}, Wi = (i, s) => {
  const r = 1 << s;
  return i < 0 ? r + i : i >= r ? i % r : i;
}, ru = class {
  constructor(i, s, r) {
    this.tileCache = i, this.maxDataLevel = s, this.levelDiff = r;
  }
  dataTilesForBounds(i, s) {
    const r = Rt(2, i) / Rt(2, Math.ceil(i)), a = [];
    let u = 1;
    const o = this.tileCache.tileSize;
    if (i < this.levelDiff)
      u = 1 / (1 << this.levelDiff - i) * r, a.push({
        dataTile: { z: 0, x: 0, y: 0 },
        origin: new je.default(0, 0),
        scale: u,
        dim: o * u
      });
    else if (i <= this.levelDiff + this.maxDataLevel) {
      const h = 1 << this.levelDiff, c = 256 * r, f = Math.ceil(i) - this.levelDiff, _ = Math.floor(s.minX / h / c), v = Math.floor(s.minY / h / c), m = Math.floor(s.maxX / h / c), y = Math.floor(s.maxY / h / c);
      for (let b = _; b <= m; b++)
        for (let k = v; k <= y; k++) {
          const S = new je.default(
            b * h * c,
            k * h * c
          );
          a.push({
            dataTile: {
              z: f,
              x: Wi(b, f),
              y: Wi(k, f)
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
      for (let m = c; m <= _; m++)
        for (let y = f; y <= v; y++) {
          const b = new je.default(m * h * 256 * u, y * h * 256 * u);
          a.push({
            dataTile: {
              z: this.maxDataLevel,
              x: Wi(m, this.maxDataLevel),
              y: Wi(y, this.maxDataLevel)
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
      s = { z: 0, x: 0, y: 0 }, r = 1 / (1 << this.levelDiff - i.z), u = new je.default(0, 0), a = a * r;
    else if (i.z <= this.levelDiff + this.maxDataLevel) {
      const o = 1 << this.levelDiff;
      s = {
        z: i.z - this.levelDiff,
        x: Math.floor(i.x / o),
        y: Math.floor(i.y / o)
      }, u = new je.default(s.x * o * 256, s.y * o * 256);
    } else {
      r = 1 << i.z - this.maxDataLevel - this.levelDiff;
      const o = 1 << this.levelDiff;
      s = {
        z: this.maxDataLevel,
        x: Math.floor(i.x / o / r),
        y: Math.floor(i.y / o / r)
      }, u = new je.default(
        s.x * o * r * 256,
        s.y * o * r * 256
      ), a = a * r;
    }
    return { dataTile: s, scale: r, origin: u, dim: a };
  }
  getBbox(i, s) {
    return He(this, null, function* () {
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
    return He(this, null, function* () {
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
}, ou = (i) => {
  const s = (a) => {
    const u = a.levelDiff === void 0 ? 1 : a.levelDiff, o = a.maxDataZoom || 15;
    let h;
    if (typeof a.url == "string")
      a.url.endsWith(".pmtiles") ? h = new Po(a.url, !0) : h = new Rh(a.url, !0);
    else if (a.url)
      h = new Po(a.url, !0);
    else
      throw new Error(`Invalid source ${a.url}`);
    const c = new Dh(h, 256 * 1 << u);
    return new ru(c, o, u);
  }, r = /* @__PURE__ */ new Map();
  if (i.sources)
    for (const a in i.sources)
      r.set(a, s(i.sources[a]));
  else
    r.set("", s(i));
  return r;
}, su = (i, s, r) => {
  const u = s / 256, o = Math.floor(r.minX / 256), h = Math.floor(r.minY / 256), c = Math.floor(r.maxX / 256), f = Math.floor(r.maxY / 256), _ = Math.log2(u), v = [];
  for (let m = o; m <= c; m++) {
    const y = m % (1 << i);
    for (let b = h; b <= f; b++)
      v.push({
        display: Ve({ z: i, x: y, y: b }),
        key: Ve({
          z: i - _,
          x: Math.floor(y / u),
          y: Math.floor(b / u)
        })
      });
  }
  return v;
}, au = class {
  constructor(i, s) {
    this.tree = new nu.default(), this.current = /* @__PURE__ */ new Map(), this.dim = i, this.maxLabeledTiles = s;
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
      for (const m of i.bboxes)
        f.push({
          minX: m.minX + c,
          minY: m.minY,
          maxX: m.maxX + c,
          maxY: m.maxY
        });
      const _ = {
        anchor: new iu.default(i.anchor.x + c, i.anchor.y),
        bboxes: f,
        draw: i.draw,
        order: s,
        tileKey: r
      }, v = this.current.get(r);
      v && v.add(_);
      for (const m of f)
        this.tree.insert({
          minX: m.minX,
          minY: m.minY,
          maxX: m.maxX,
          maxY: m.maxY,
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
          Rt(+h[0] - +s[0], 2) + Rt(+h[1] - +s[1], 2)
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
}, lu = class {
  constructor(i, s, r, a, u) {
    this.index = new au(256 * 1 << i, a), this.z = i, this.scratch = s, this.labelRules = r, this.callback = u;
  }
  layout(i) {
    const s = performance.now(), r = /* @__PURE__ */ new Set();
    for (const [u, o] of i)
      for (const h of o) {
        const c = `${Ve(h.dataTile)}:${u}`;
        this.index.has(c) || (this.index.makeEntry(c), r.add(c));
      }
    const a = /* @__PURE__ */ new Set();
    for (const [u, o] of this.labelRules.entries()) {
      if (o.visible === !1 || o.minzoom && this.z < o.minzoom || o.maxzoom && this.z > o.maxzoom)
        continue;
      const h = o.dataSource || "", c = i.get(h);
      if (c)
        for (const f of c) {
          const _ = `${Ve(f.dataTile)}:${h}`;
          if (!r.has(_))
            continue;
          const v = f.data.get(o.dataLayer);
          if (v === void 0)
            continue;
          const m = v;
          o.sort && m.sort((b, k) => o.sort ? o.sort(b.props, k.props) : 0);
          const y = {
            index: this.index,
            zoom: this.z,
            scratch: this.scratch,
            order: u,
            overzoom: this.z - f.dataTile.z
          };
          for (const b of m) {
            if (o.filter && !o.filter(this.z, b))
              continue;
            const k = xs(
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
    const u = su(this.z, s, r);
    for (const o of u)
      o.key !== a && this.index.hasPrefix(o.key) && i.add(o.display);
  }
  add(i) {
    let s = !0;
    for (const [a, u] of i)
      for (const o of u)
        this.index.has(`${Ve(o.dataTile)}:${a}`) || (s = !1);
    return s ? 0 : this.layout(i);
  }
}, Co = class {
  constructor(i, s, r, a) {
    this.labelers = /* @__PURE__ */ new Map(), this.scratch = i, this.labelRules = s, this.maxLabeledTiles = r, this.callback = a;
  }
  add(i, s) {
    let r = this.labelers.get(i);
    return r || (r = new lu(
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
}, hu = jt(ae());
function uu(i, s, r, a, u, o, h, c, f) {
  const _ = performance.now();
  i.save(), i.miterLimit = 2;
  for (const v of u) {
    if (v.minzoom && s < v.minzoom || v.maxzoom && s > v.maxzoom)
      continue;
    const m = r.get(v.dataSource || "");
    if (m)
      for (const y of m) {
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
          w.maxX * S + k.x < o.minX || w.minX * S + k.x > o.maxX || w.minY * S + k.y > o.maxY || w.maxY * S + k.y < o.minY || v.filter && !v.filter(y.z, B) || (S !== 1 && (A = xs(A, S, new hu.default(0, 0))), v.symbolizer.draw(i, A, y.z, B));
        }
        i.restore();
      }
  }
  if (a) {
    const v = a.searchBbox(o, 1 / 0);
    for (const m of v)
      if (i.save(), i.translate(m.anchor.x - h.x, m.anchor.y - h.y), m.draw(i), i.restore(), f) {
        i.lineWidth = 0.5, i.strokeStyle = f, i.fillStyle = f, i.globalAlpha = 1, i.fillRect(
          m.anchor.x - h.x - 2,
          m.anchor.y - h.y - 2,
          4,
          4
        );
        for (const y of m.bboxes)
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
var cu = jt(ae()), fu = (i) => new Promise((s) => {
  setTimeout(() => {
    s();
  }, i);
}), du = (i) => i.then(
  (s) => ({ status: "fulfilled", value: s }),
  (s) => ({ status: "rejected", reason: s })
), _u = (i = {}) => {
  class s extends L.GridLayer {
    constructor(a = {}) {
      if (a.noWrap && !a.bounds && (a.bounds = [
        [-90, -180],
        [90, 180]
      ]), a.attribution == null && (a.attribution = '<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'), super(a), a.theme) {
        const o = eu[a.theme];
        this.paintRules = ws(o), this.labelRules = qh(o), this.backgroundColor = o.background;
      } else
        this.paintRules = a.paintRules || [], this.labelRules = a.labelRules || [], this.backgroundColor = a.backgroundColor;
      this.lastRequestedZ = void 0, this.tasks = a.tasks || [], this.views = ou(a), this.debug = a.debug;
      const u = document.createElement("canvas").getContext("2d");
      this.scratch = u, this.onTilesInvalidated = (o) => {
        for (const h of o)
          this.rerenderTile(h);
      }, this.labelers = new Co(
        this.scratch,
        this.labelRules,
        16,
        this.onTilesInvalidated
      ), this.tileSize = 256 * window.devicePixelRatio, this.tileDelay = a.tileDelay || 3, this.lang = a.lang;
    }
    renderTile(a, u, o, h = () => {
    }) {
      return He(this, null, function* () {
        this.lastRequestedZ = a.z;
        const c = [];
        for (const [D, F] of this.views) {
          const $ = F.getDisplayTile(a);
          c.push({ key: D, promise: $ });
        }
        const f = yield Promise.all(
          c.map((D) => D.promise.then(
            (F) => ({ status: "fulfilled", value: F, key: D.key }),
            (F) => ({ status: "rejected", reason: F, key: D.key })
          ))
        ), _ = /* @__PURE__ */ new Map();
        for (const D of f)
          D.status === "fulfilled" ? _.set(D.key, [D.value]) : D.reason.name === "AbortError" || console.error(D.reason);
        if (u.key !== o || this.lastRequestedZ !== a.z || (yield Promise.all(this.tasks.map(du)), u.key !== o) || this.lastRequestedZ !== a.z)
          return;
        const v = this.labelers.add(a.z, _);
        if (u.key !== o || this.lastRequestedZ !== a.z)
          return;
        const m = this.labelers.getIndex(a.z);
        if (!this._map)
          return;
        const y = this._map.getCenter().wrap(), b = this._getTiledPixelBounds(y), S = this._pxBoundsToTileRange(b).getCenter(), B = a.distanceTo(S) * this.tileDelay;
        if (yield fu(B), u.key !== o || this.lastRequestedZ !== a.z)
          return;
        const A = 16, w = {
          minX: 256 * a.x - A,
          minY: 256 * a.y - A,
          maxX: 256 * (a.x + 1) + A,
          maxY: 256 * (a.y + 1) + A
        }, T = new cu.default(256 * a.x, 256 * a.y);
        u.width = this.tileSize, u.height = this.tileSize;
        const C = u.getContext("2d");
        if (!C) {
          console.error("Failed to get Canvas context");
          return;
        }
        C.setTransform(this.tileSize / 256, 0, 0, this.tileSize / 256, 0, 0), C.clearRect(0, 0, 256, 256), this.backgroundColor && (C.save(), C.fillStyle = this.backgroundColor, C.fillRect(0, 0, 256, 256), C.restore());
        let z = 0;
        const Z = this.paintRules;
        if (z = uu(
          C,
          a.z,
          _,
          this.xray ? null : m,
          Z,
          w,
          T,
          !1,
          this.debug
        ), this.debug) {
          C.save(), C.fillStyle = this.debug, C.font = "600 12px sans-serif", C.fillText(`${a.z} ${a.x} ${a.y}`, 4, 14), C.font = "12px sans-serif";
          let D = 28;
          for (const [F, $] of _) {
            const et = $[0].dataTile;
            C.fillText(`${F + (F ? " " : "") + et.z} ${et.x} ${et.y}`, 4, D), D += 14;
          }
          C.font = "600 10px sans-serif", z > 8 && (C.fillText(`${z.toFixed()} ms paint`, 4, D), D += 14), v > 8 && C.fillText(`${v.toFixed()} ms layout`, 4, D), C.strokeStyle = this.debug, C.lineWidth = 0.5, C.beginPath(), C.moveTo(0, 0), C.lineTo(0, 256), C.stroke(), C.lineWidth = 0.5, C.beginPath(), C.moveTo(0, 0), C.lineTo(256, 0), C.stroke(), C.restore();
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
      this.labelers = new Co(
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
const mu = {
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
}, pu = {
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
}, gu = {
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
}, vu = {
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
}, yu = {
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
}, bu = {
  light: mu,
  dark: pu,
  white: gu,
  grayscale: vu,
  black: yu
}, { light: wu } = bu, xu = (i, s, r) => Object.freeze({ instance: i, context: s, container: r }), Lu = ({ ...i }, s) => {
  const r = _u({ paint_rules: i.paintRules, ...i });
  return xu(r, s);
}, Pu = Ho(
  Lu,
  Wo
), Ls = ({ attribution: i, url: s, format: r, ...a }) => {
  var h;
  const u = de(It);
  let o = /* @__PURE__ */ pt(ul, { attribution: i, url: s, ...a });
  return r === "pmtiles" && (o = /* @__PURE__ */ pt(
    Pu,
    {
      attribution: i,
      url: s,
      paintRules: ((h = u.map) == null ? void 0 : h.tiles) && ws({ ...wu, ...u.map.tiles }),
      ...a
    }
  )), o;
};
Ls.propTypes = {
  attribution: mt.string,
  url: mt.string.isRequired,
  format: mt.oneOf(["pmtiles"])
};
const Tu = mi(al)`
  ${({ theme: i }) => {
  var s, r;
  return `
      ${(r = (s = i == null ? void 0 : i.global) == null ? void 0 : s.font) != null && r.family ? `font-family: ${i.global.font.family};` : ""}
      height: 100%;
    `;
}}
`, ku = _e(
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
    const m = de(It), y = di(m, { map: di(Ll, h) });
    return /* @__PURE__ */ pt(It.Provider, { value: y, children: /* @__PURE__ */ nr(
      Tu,
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
          /* @__PURE__ */ pt(ol, { position: "bottomright", prefix: !1 }),
          /* @__PURE__ */ pt(
            Ls,
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
ku.propTypes = {
  center: mt.array,
  children: mt.any,
  scrollWheelZoom: mt.string || mt.bool,
  maxZoom: mt.number,
  minZoom: mt.number,
  tileLayer: mt.shape({
    attribution: mt.string,
    url: mt.string.isRequired,
    format: mt.oneOf(["pmtiles"])
  }).isRequired,
  theme: mt.object,
  zoom: mt.number,
  zoomControl: mt.bool
};
let Yi;
const Cu = new Uint8Array(16);
function Mu() {
  if (!Yi && (Yi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Yi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Yi(Cu);
}
const Tt = [];
for (let i = 0; i < 256; ++i)
  Tt.push((i + 256).toString(16).slice(1));
function Su(i, s = 0) {
  return Tt[i[s + 0]] + Tt[i[s + 1]] + Tt[i[s + 2]] + Tt[i[s + 3]] + "-" + Tt[i[s + 4]] + Tt[i[s + 5]] + "-" + Tt[i[s + 6]] + Tt[i[s + 7]] + "-" + Tt[i[s + 8]] + Tt[i[s + 9]] + "-" + Tt[i[s + 10]] + Tt[i[s + 11]] + Tt[i[s + 12]] + Tt[i[s + 13]] + Tt[i[s + 14]] + Tt[i[s + 15]];
}
const zu = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Mo = {
  randomUUID: zu
};
function Eu(i, s, r) {
  if (Mo.randomUUID && !s && !i)
    return Mo.randomUUID();
  i = i || {};
  const a = i.random || (i.rng || Mu)();
  return a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, Su(a);
}
const Ou = ({ icon: i, popup: s, ...r }) => {
  var h;
  const a = de(It), u = (h = i == null ? void 0 : i.props) == null ? void 0 : h.kind, o = s ? /* @__PURE__ */ pt(hl, { children: /* @__PURE__ */ pt(Ts, { children: s }) }) : void 0;
  return /* @__PURE__ */ pt(
    ll,
    {
      icon: $i.divIcon({
        // 'grommet-marker' class prevents leaflet default divIcon styles
        className: "grommet-marker",
        html: Xn.renderToString(
          /* @__PURE__ */ pt(It.Provider, { value: a, children: i || /* @__PURE__ */ pt(Ps, {}) })
        )
      }),
      kind: u,
      ...r,
      children: o
    },
    Eu()
  );
};
Ou.propTypes = {
  icon: mt.node,
  popup: mt.node
};
var So = { exports: {} };
(function(i, s) {
  (function(r, a) {
    a(s);
  })(Eo, function(r) {
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
        var c = this._featureGroup, f = this._nonPointGroup, _ = this.options.chunkedLoading, v = this.options.chunkInterval, m = this.options.chunkProgress, y = o.length, b = 0, k = !0, S;
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
            m && m(b, y, (/* @__PURE__ */ new Date()).getTime() - B), b === y ? (this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(A, this.options.chunkDelay);
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
        var h, c, f = o.length, _ = this._featureGroup, v = this._nonPointGroup, m = !0;
        if (!this._map) {
          for (h = 0; h < f; h++) {
            if (c = o[h], c instanceof L.LayerGroup) {
              m && (o = o.slice(), m = !1), this._extractNonGroupLayers(c, o), f = o.length;
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
            m && (o = o.slice(), m = !1), this._extractNonGroupLayers(c, o), f = o.length;
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
        var c = this._needsClustering.slice(), f = this._needsRemoving, _, v, m;
        for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(c), v = c.length - 1; v >= 0; v--) {
          for (_ = !0, m = f.length - 1; m >= 0; m--)
            if (f[m].layer === c[v]) {
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
        var f = this._gridClusters, _ = this._gridUnclustered, v = this._featureGroup, m = this._map, y = Math.floor(this._map.getMinZoom());
        h && this._removeFromGridUnclustered(o, this._maxZoom);
        var b = o.__parent, k = b._markers, S;
        for (this._arraySplice(k, o); b && (b._childCount--, b._boundsNeedUpdate = !0, !(b._zoom < y)); )
          h && b._childCount <= 1 ? (S = b._markers[0] === o ? b._markers[1] : b._markers[0], f[b._zoom].removeObject(b, m.project(b._cLatLng, b._zoom)), _[b._zoom].addObject(S, m.project(S.getLatLng(), b._zoom)), this._arraySplice(b.__parent._childClusters, b), b.__parent._markers.push(S), S.__parent = b.__parent, b._icon && (v.removeLayer(b), c || v.addLayer(S))) : b._iconNeedsUpdate = !0, b = b.__parent;
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
        var c = this._gridClusters, f = this._gridUnclustered, _ = Math.floor(this._map.getMinZoom()), v, m;
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
            for (m = h - 1; m > b._zoom; m--)
              S = new this._markerCluster(this, m, S), c[m].addObject(S, this._map.project(y.getLatLng(), m));
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
          this._ignoreMove = !0, this._topClusterLevel._recursively(c, o, _, function(m) {
            var y = m._latlng, b = m._markers, k;
            for (c.contains(y) || (y = null), m._isSingleParent() && o + 1 === h ? (f.removeLayer(m), m._recursivelyAddChildrenToMap(null, h, c)) : (m.clusterHide(), m._recursivelyAddChildrenToMap(y, h, c)), v = b.length - 1; v >= 0; v--)
              k = b[v], c.contains(k._latlng) || f.removeLayer(k);
          }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(c, h), f.eachLayer(function(m) {
            !(m instanceof L.MarkerCluster) && m._icon && m.clusterShow();
          }), this._topClusterLevel._recursively(c, o, h, function(m) {
            m._recursivelyRestoreChildPositions(h);
          }), this._ignoreMove = !1, this._enqueue(function() {
            this._topClusterLevel._recursively(c, o, _, function(m) {
              f.removeLayer(m), m.clusterShow();
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
            var m = o._markers[0];
            this._ignoreMove = !0, m.setLatLng(m.getLatLng()), this._ignoreMove = !1, m.clusterShow && m.clusterShow();
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
        for (var h = this._childClusters.slice(), c = this._group._map, f = c.getBoundsZoom(this._bounds), _ = this._zoom + 1, v = c.getZoom(), m; h.length > 0 && f > _; ) {
          _++;
          var y = [];
          for (m = 0; m < h.length; m++)
            y = y.concat(h[m]._childClusters);
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
        var o = this._markers, h = this._childClusters, c = 0, f = 0, _ = this._childCount, v, m, y, b;
        if (_ !== 0) {
          for (this._resetBounds(), v = 0; v < o.length; v++)
            y = o[v]._latlng, this._bounds.extend(y), c += y.lat, f += y.lng;
          for (v = 0; v < h.length; v++)
            m = h[v], m._boundsNeedUpdate && m._recalculateBounds(), this._bounds.extend(m._bounds), y = m._wLatLng, b = m._childCount, c += y.lat * b, f += y.lng * b;
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
            var _ = f._markers, v, m;
            for (v = _.length - 1; v >= 0; v--)
              m = _[v], m._icon && (m._setPos(h), m.clusterHide());
          },
          function(f) {
            var _ = f._childClusters, v, m;
            for (v = _.length - 1; v >= 0; v--)
              m = _[v], m._icon && (m._setPos(h), m.clusterHide());
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
          function(m) {
            for (v = m._markers.length - 1; v >= 0; v--)
              _ = m._markers[v], (!f || !f.contains(_._latlng)) && (m._group._featureGroup.removeLayer(_), _.clusterShow && _.clusterShow());
          },
          function(m) {
            for (v = m._childClusters.length - 1; v >= 0; v--)
              _ = m._childClusters[v], (!f || !f.contains(_._latlng)) && (m._group._featureGroup.removeLayer(_), _.clusterShow && _.clusterShow());
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
        var v = this._childClusters, m = this._zoom, y, b;
        if (h <= m && (f && f(this), _ && m === c && _(this)), m < h || m < c)
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
        var c = this._getCoord(h.x), f = this._getCoord(h.y), _ = this._grid, v = _[f] = _[f] || {}, m = v[c] = v[c] || [], y = L.Util.stamp(o);
        this._objectPoint[y] = h, m.push(o);
      },
      updateObject: function(o, h) {
        this.removeObject(o), this.addObject(o, h);
      },
      //Returns true if the object was found
      removeObject: function(o, h) {
        var c = this._getCoord(h.x), f = this._getCoord(h.y), _ = this._grid, v = _[f] = _[f] || {}, m = v[c] = v[c] || [], y, b;
        for (delete this._objectPoint[L.Util.stamp(o)], y = 0, b = m.length; y < b; y++)
          if (m[y] === o)
            return m.splice(y, 1), b === 1 && delete v[c], !0;
      },
      eachObject: function(o, h) {
        var c, f, _, v, m, y, b, k = this._grid;
        for (c in k) {
          m = k[c];
          for (f in m)
            for (y = m[f], _ = 0, v = y.length; _ < v; _++)
              b = o.call(h, y[_]), b && (_--, v--);
        }
      },
      getNearObject: function(o) {
        var h = this._getCoord(o.x), c = this._getCoord(o.y), f, _, v, m, y, b, k, S, B = this._objectPoint, A = this._sqCellSize, w = null;
        for (f = c - 1; f <= c + 1; f++)
          if (m = this._grid[f], m) {
            for (_ = h - 1; _ <= h + 1; _++)
              if (y = m[_], y)
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
          var c = 0, f = null, _ = [], v, m, y;
          for (v = h.length - 1; v >= 0; v--) {
            if (m = h[v], y = this.getDistant(m, o), y > 0)
              _.push(m);
            else
              continue;
            y > c && (c = y, f = m);
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
          var h = !1, c = !1, f = !1, _ = !1, v = null, m = null, y = null, b = null, k = null, S = null, B;
          for (B = o.length - 1; B >= 0; B--) {
            var A = o[B];
            (h === !1 || A.lat > h) && (v = A, h = A.lat), (c === !1 || A.lat < c) && (m = A, c = A.lat), (f === !1 || A.lng > f) && (y = A, f = A.lng), (_ === !1 || A.lng < _) && (b = A, _ = A.lng);
          }
          c !== h ? (S = m, k = v) : (S = b, k = y);
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
        var c = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + o), f = c / this._2PI, _ = this._2PI / o, v = [], m, y;
        for (f = Math.max(f, 35), v.length = o, m = 0; m < o; m++)
          y = this._circleStartAngle + m * _, v[m] = new L.Point(h.x + f * Math.cos(y), h.y + f * Math.sin(y))._round();
        return v;
      },
      _generatePointsSpiral: function(o, h) {
        var c = this._group.options.spiderfyDistanceMultiplier, f = c * this._spiralLengthStart, _ = c * this._spiralFootSeparation, v = c * this._spiralLengthFactor * this._2PI, m = 0, y = [], b;
        for (y.length = o, b = o; b >= 0; b--)
          b < o && (y[b] = new L.Point(h.x + f * Math.cos(m), h.y + f * Math.sin(m))._round()), m += _ / f + b * 5e-4, f += v / m;
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
        var c = this._group, f = c._map, _ = c._featureGroup, v = this._group.options.spiderLegPolylineOptions, m, y, b, k;
        for (c._ignoreMove = !0, m = 0; m < o.length; m++)
          k = f.layerPointToLatLng(h[m]), y = o[m], b = new L.Polyline([this._latlng, k], v), f.addLayer(b), y._spiderLeg = b, y._preSpiderfyLatlng = y._latlng, y.setLatLng(k), y.setZIndexOffset && y.setZIndexOffset(1e6), _.addLayer(y);
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
        var c = this, f = this._group, _ = f._map, v = f._featureGroup, m = this._latlng, y = _.latLngToLayerPoint(m), b = L.Path.SVG, k = L.extend({}, this._group.options.spiderLegPolylineOptions), S = k.opacity, B, A, w, T, C, z;
        for (S === void 0 && (S = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity), b ? (k.opacity = 0, k.className = (k.className || "") + " leaflet-cluster-spider-leg") : k.opacity = S, f._ignoreMove = !0, B = 0; B < o.length; B++)
          A = o[B], z = _.layerPointToLatLng(h[B]), w = new L.Polyline([m, z], k), _.addLayer(w), A._spiderLeg = w, b && (T = w._path, C = T.getTotalLength() + 0.1, T.style.strokeDasharray = C, T.style.strokeDashoffset = C), A.setZIndexOffset && A.setZIndexOffset(1e6), A.clusterHide && A.clusterHide(), v.addLayer(A), A._setPos && A._setPos(y);
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
        var h = this, c = this._group, f = c._map, _ = c._featureGroup, v = o ? f._latLngToNewLayerPoint(this._latlng, o.zoom, o.center) : f.latLngToLayerPoint(this._latlng), m = this.getAllChildMarkers(null, !0), y = L.Path.SVG, b, k, S, B, A, w;
        for (c._ignoreMove = !0, c._animationStart(), this.setOpacity(1), k = m.length - 1; k >= 0; k--)
          b = m[k], b._preSpiderfyLatlng && (b.closePopup(), b.setLatLng(b._preSpiderfyLatlng), delete b._preSpiderfyLatlng, w = !0, b._setPos && (b._setPos(v), w = !1), b.clusterHide && (b.clusterHide(), w = !1), w && _.removeLayer(b), y && (S = b._spiderLeg, B = S._path, A = B.getTotalLength() + 0.1, B.style.strokeDashoffset = A, S.setStyle({ opacity: 0 })));
        c._ignoreMove = !1, setTimeout(function() {
          var T = 0;
          for (k = m.length - 1; k >= 0; k--)
            b = m[k], b._spiderLeg && T++;
          for (k = m.length - 1; k >= 0; k--)
            b = m[k], b._spiderLeg && (b.clusterShow && b.clusterShow(), b.setZIndexOffset && b.setZIndexOffset(0), T > 1 && _.removeLayer(b), f.removeLayer(b._spiderLeg), delete b._spiderLeg);
          c._animationEnd(), c.fire("unspiderfied", {
            cluster: h,
            markers: m
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
})(So, So.exports);
const Iu = (i, s, r) => Object.freeze({ instance: i, context: s, container: r }), Bu = (i, s) => Object.freeze({ ...i, ...s }), Au = ({ ...i }, s) => {
  const r = new $i.MarkerClusterGroup({
    showCoverageOnHover: !1,
    zoomToBoundsOnClick: !1,
    ...i
  });
  return Iu(
    r,
    Bu(s, { layerContainer: r })
  );
}, Zu = nl(Au), Ru = ({ icon: i, popup: s, ...r }) => {
  const a = de(It);
  return /* @__PURE__ */ pt(
    Zu,
    {
      iconCreateFunction: (u) => {
        if (s) {
          const o = u.bindPopup(
            Xn.renderToString(
              /* @__PURE__ */ pt(It.Provider, { value: a, children: /* @__PURE__ */ pt(Ts, { children: s({ cluster: u }) }) })
            )
          );
          u.on("click", () => {
            o.openPopup();
          });
        }
        return $i.divIcon({
          // 'grommet-cluster-group' class prevents
          // leaflet default divIcon styles
          className: "grommet-cluster-group",
          html: Xn.renderToString(
            /* @__PURE__ */ pt(It.Provider, { value: a, children: i ? Ct.cloneElement(i({ cluster: u }), {
              cluster: u
            }) : /* @__PURE__ */ pt(Zo, { cluster: u }) })
          )
        });
      },
      ...r
    }
  );
};
Ru.propTypes = {
  icon: mt.func,
  popup: mt.func
};
const Du = mi(be)`
  // to create the pin shape
  border-bottom-right-radius: 0;
  // translate to re-align with leaflet div
  transform: rotate(45deg) translateX(-35%);
  &:hover {
    transform: rotate(45deg) translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`, Ps = ({ kind: i = "default" }) => {
  var u, o, h, c, f, _, v, m, y;
  const s = Ct.useContext(It), r = Ao([
    (h = (o = (u = s == null ? void 0 : s.map) == null ? void 0 : u.pin) == null ? void 0 : o.default) == null ? void 0 : h.container,
    (_ = (f = (c = s == null ? void 0 : s.map) == null ? void 0 : c.pin) == null ? void 0 : f[i]) == null ? void 0 : _.container
  ]);
  let a = (y = (m = (v = s == null ? void 0 : s.map) == null ? void 0 : v.pin) == null ? void 0 : m[i]) == null ? void 0 : y.icon;
  return a && (a = Ct.cloneElement(a, {
    // style needed to offset for rotation of location pin so
    // icon is vertical
    style: { transform: "rotate(-45deg)" }
  })), /* @__PURE__ */ pt(Du, { ...r, children: a });
};
Ps.propTypes = {
  kind: mt.string
};
const Ts = ({ ...i }) => {
  var r;
  const s = de(It);
  return /* @__PURE__ */ pt(be, { ...(r = s == null ? void 0 : s.map) == null ? void 0 : r.popup, ...i });
};
window.console = console;
const ju = console.error, Nu = [
  "useLayoutEffect does nothing on the server, because its effect cannot"
];
console.error = function(s, ...r) {
  Nu.some((a) => s.includes(a)) || ju(s, ...r);
};
export {
  Zo as Cluster,
  wl as Controls,
  yl as LocationBounds,
  ku as Map,
  Ou as Marker,
  Ru as MarkerCluster,
  Ps as Pin,
  Ts as Popup,
  Ll as base,
  di as deepMerge,
  mo as isObject,
  Ao as normalizeTheme
};
