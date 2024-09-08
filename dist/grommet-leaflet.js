import { jsxs as nr, jsx as ut } from "react/jsx-runtime";
import Mt, { useRef as Ae, useEffect as jt, createContext as Kl, useContext as ye, forwardRef as ae, useImperativeHandle as Yi, useState as Un, useCallback as Jl } from "react";
import di, { ThemeContext as Ft, css as es } from "styled-components";
import { Box as ve, Text as Ql, Button as Mn } from "grommet";
import { createPortal as th, render as eh } from "react-dom";
import Vn from "react-dom/server";
function is(r, i) {
  const n = Ae(i);
  jt(function() {
    i !== n.current && r.attributionControl != null && (n.current != null && r.attributionControl.removeAttribution(n.current), i != null && r.attributionControl.addAttribution(i)), n.current = i;
  }, [
    r,
    i
  ]);
}
const ih = 1;
function nh(r) {
  return Object.freeze({
    __version: ih,
    map: r
  });
}
function ns(r, i) {
  return Object.freeze({
    ...r,
    ...i
  });
}
const rs = Kl(null), os = rs.Provider;
function Gi() {
  const r = ye(rs);
  if (r == null)
    throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return r;
}
function rh(r) {
  function i(n, a) {
    const { instance: l, context: o } = r(n).current;
    return Yi(a, () => l), n.children == null ? null : /* @__PURE__ */ Mt.createElement(os, {
      value: o
    }, n.children);
  }
  return /* @__PURE__ */ ae(i);
}
function oh(r) {
  function i(n, a) {
    const [l, o] = Un(!1), { instance: h } = r(n, o).current;
    Yi(a, () => h), jt(function() {
      l && h.update();
    }, [
      h,
      l,
      n.children
    ]);
    const c = h._contentNode;
    return c ? /* @__PURE__ */ th(n.children, c) : null;
  }
  return /* @__PURE__ */ ae(i);
}
function ss(r) {
  function i(n, a) {
    const { instance: l } = r(n).current;
    return Yi(a, () => l), null;
  }
  return /* @__PURE__ */ ae(i);
}
function sh(r) {
  return function(n) {
    const a = Gi(), l = r(n, a), { instance: o } = l.current, h = Ae(n.position), { position: c } = n;
    return jt(function() {
      return o.addTo(a.map), function() {
        o.remove();
      };
    }, [
      a.map,
      o
    ]), jt(function() {
      c != null && c !== h.current && (o.setPosition(c), h.current = c);
    }, [
      o,
      c
    ]), l;
  };
}
function as(r, i) {
  const n = Ae();
  jt(function() {
    return i != null && r.instance.on(i), n.current = i, function() {
      n.current != null && r.instance.off(n.current), n.current = null;
    };
  }, [
    r,
    i
  ]);
}
function rr(r, i) {
  const n = r.pane ?? i.pane;
  return n ? {
    ...r,
    pane: n
  } : r;
}
function ah(r, i) {
  return function(a, l) {
    const o = Gi(), h = r(rr(a, o), o);
    return is(o.map, a.attribution), as(h.current, a.eventHandlers), i(h.current, o, a, l), h;
  };
}
var ls = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hs(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Hn = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(r, i) {
  (function(n, a) {
    a(i);
  })(ls, function(n) {
    var a = "1.9.4";
    function l(t) {
      var e, s, u, d;
      for (s = 1, u = arguments.length; s < u; s++) {
        d = arguments[s];
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
      var s = Array.prototype.slice;
      if (t.bind)
        return t.bind.apply(t, s.call(arguments, 1));
      var u = s.call(arguments, 2);
      return function() {
        return t.apply(e, u.length ? u.concat(s.call(arguments)) : arguments);
      };
    }
    var c = 0;
    function f(t) {
      return "_leaflet_id" in t || (t._leaflet_id = ++c), t._leaflet_id;
    }
    function _(t, e, s) {
      var u, d, g, b;
      return b = function() {
        u = !1, d && (g.apply(s, d), d = !1);
      }, g = function() {
        u ? d = arguments : (t.apply(s, arguments), setTimeout(b, e), u = !0);
      }, g;
    }
    function m(t, e, s) {
      var u = e[1], d = e[0], g = u - d;
      return t === u && s ? t : ((t - d) % g + g) % g + d;
    }
    function p() {
      return !1;
    }
    function v(t, e) {
      if (e === !1)
        return t;
      var s = Math.pow(10, e === void 0 ? 6 : e);
      return Math.round(t * s) / s;
    }
    function y(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }
    function w(t) {
      return y(t).split(/\s+/);
    }
    function x(t, e) {
      Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? o(t.options) : {});
      for (var s in e)
        t.options[s] = e[s];
      return t.options;
    }
    function E(t, e, s) {
      var u = [];
      for (var d in t)
        u.push(encodeURIComponent(s ? d.toUpperCase() : d) + "=" + encodeURIComponent(t[d]));
      return (!e || e.indexOf("?") === -1 ? "?" : "&") + u.join("&");
    }
    var M = /\{ *([\w_ -]+) *\}/g;
    function I(t, e) {
      return t.replace(M, function(s, u) {
        var d = e[u];
        if (d === void 0)
          throw new Error("No value provided for variable " + s);
        return typeof d == "function" && (d = d(e)), d;
      });
    }
    var A = Array.isArray || function(t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    };
    function O(t, e) {
      for (var s = 0; s < t.length; s++)
        if (t[s] === e)
          return s;
      return -1;
    }
    var S = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function rt(t) {
      return window["webkit" + t] || window["moz" + t] || window["ms" + t];
    }
    var G = 0;
    function tt(t) {
      var e = +/* @__PURE__ */ new Date(), s = Math.max(0, 16 - (e - G));
      return G = e + s, window.setTimeout(t, s);
    }
    var vt = window.requestAnimationFrame || rt("RequestAnimationFrame") || tt, ft = window.cancelAnimationFrame || rt("CancelAnimationFrame") || rt("CancelRequestAnimationFrame") || function(t) {
      window.clearTimeout(t);
    };
    function _t(t, e, s) {
      if (s && vt === tt)
        t.call(e);
      else
        return vt.call(window, h(t, e));
    }
    function Lt(t) {
      t && ft.call(window, t);
    }
    var fe = {
      __proto__: null,
      extend: l,
      create: o,
      bind: h,
      get lastId() {
        return c;
      },
      stamp: f,
      throttle: _,
      wrapNum: m,
      falseFn: p,
      formatNum: v,
      trim: y,
      splitWords: w,
      setOptions: x,
      getParamString: E,
      template: I,
      isArray: A,
      indexOf: O,
      emptyImageUrl: S,
      requestFn: vt,
      cancelFn: ft,
      requestAnimFrame: _t,
      cancelAnimFrame: Lt
    };
    function xt() {
    }
    xt.extend = function(t) {
      var e = function() {
        x(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, s = e.__super__ = this.prototype, u = o(s);
      u.constructor = e, e.prototype = u;
      for (var d in this)
        Object.prototype.hasOwnProperty.call(this, d) && d !== "prototype" && d !== "__super__" && (e[d] = this[d]);
      return t.statics && l(e, t.statics), t.includes && (Nt(t.includes), l.apply(null, [u].concat(t.includes))), l(u, t), delete u.statics, delete u.includes, u.options && (u.options = s.options ? o(s.options) : {}, l(u.options, t.options)), u._initHooks = [], u.callInitHooks = function() {
        if (!this._initHooksCalled) {
          s.callInitHooks && s.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var g = 0, b = u._initHooks.length; g < b; g++)
            u._initHooks[g].call(this);
        }
      }, e;
    }, xt.include = function(t) {
      var e = this.prototype.options;
      return l(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
    }, xt.mergeOptions = function(t) {
      return l(this.prototype.options, t), this;
    }, xt.addInitHook = function(t) {
      var e = Array.prototype.slice.call(arguments, 1), s = typeof t == "function" ? t : function() {
        this[t].apply(this, e);
      };
      return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(s), this;
    };
    function Nt(t) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        t = A(t) ? t : [t];
        for (var e = 0; e < t.length; e++)
          t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }
    var ht = {
      /* @method on(type: String, fn: Function, context?: Object): this
       * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
       *
       * @alternative
       * @method on(eventMap: Object): this
       * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
       */
      on: function(t, e, s) {
        if (typeof t == "object")
          for (var u in t)
            this._on(u, t[u], e);
        else {
          t = w(t);
          for (var d = 0, g = t.length; d < g; d++)
            this._on(t[d], e, s);
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
      off: function(t, e, s) {
        if (!arguments.length)
          delete this._events;
        else if (typeof t == "object")
          for (var u in t)
            this._off(u, t[u], e);
        else {
          t = w(t);
          for (var d = arguments.length === 1, g = 0, b = t.length; g < b; g++)
            d ? this._off(t[g]) : this._off(t[g], e, s);
        }
        return this;
      },
      // attach listener (without syntactic sugar now)
      _on: function(t, e, s, u) {
        if (typeof e != "function") {
          console.warn("wrong listener type: " + typeof e);
          return;
        }
        if (this._listens(t, e, s) === !1) {
          s === this && (s = void 0);
          var d = { fn: e, ctx: s };
          u && (d.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(d);
        }
      },
      _off: function(t, e, s) {
        var u, d, g;
        if (this._events && (u = this._events[t], !!u)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (d = 0, g = u.length; d < g; d++)
                u[d].fn = p;
            delete this._events[t];
            return;
          }
          if (typeof e != "function") {
            console.warn("wrong listener type: " + typeof e);
            return;
          }
          var b = this._listens(t, e, s);
          if (b !== !1) {
            var P = u[b];
            this._firingCount && (P.fn = p, this._events[t] = u = u.slice()), u.splice(b, 1);
          }
        }
      },
      // @method fire(type: String, data?: Object, propagate?: Boolean): this
      // Fires an event of the specified type. You can optionally provide a data
      // object — the first argument of the listener function will contain its
      // properties. The event can optionally be propagated to event parents.
      fire: function(t, e, s) {
        if (!this.listens(t, s))
          return this;
        var u = l({}, e, {
          type: t,
          target: this,
          sourceTarget: e && e.sourceTarget || this
        });
        if (this._events) {
          var d = this._events[t];
          if (d) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var g = 0, b = d.length; g < b; g++) {
              var P = d[g], C = P.fn;
              P.once && this.off(t, C, P.ctx), C.call(P.ctx || this, u);
            }
            this._firingCount--;
          }
        }
        return s && this._propagateEvent(u), this;
      },
      // @method listens(type: String, propagate?: Boolean): Boolean
      // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
      // Returns `true` if a particular event type has any listeners attached to it.
      // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
      listens: function(t, e, s, u) {
        typeof t != "string" && console.warn('"string" type argument expected');
        var d = e;
        typeof e != "function" && (u = !!e, d = void 0, s = void 0);
        var g = this._events && this._events[t];
        if (g && g.length && this._listens(t, d, s) !== !1)
          return !0;
        if (u) {
          for (var b in this._eventParents)
            if (this._eventParents[b].listens(t, e, s, u))
              return !0;
        }
        return !1;
      },
      // returns the index (number) or false
      _listens: function(t, e, s) {
        if (!this._events)
          return !1;
        var u = this._events[t] || [];
        if (!e)
          return !!u.length;
        s === this && (s = void 0);
        for (var d = 0, g = u.length; d < g; d++)
          if (u[d].fn === e && u[d].ctx === s)
            return d;
        return !1;
      },
      // @method once(…): this
      // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
      once: function(t, e, s) {
        if (typeof t == "object")
          for (var u in t)
            this._on(u, t[u], e, !0);
        else {
          t = w(t);
          for (var d = 0, g = t.length; d < g; d++)
            this._on(t[d], e, s, !0);
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
          this._eventParents[e].fire(t.type, l({
            layer: t.target,
            propagatedFrom: t.target
          }, t), !0);
      }
    };
    ht.addEventListener = ht.on, ht.removeEventListener = ht.clearAllEventListeners = ht.off, ht.addOneTimeEventListener = ht.once, ht.fireEvent = ht.fire, ht.hasEventListeners = ht.listens;
    var kt = xt.extend(ht);
    function N(t, e, s) {
      this.x = s ? Math.round(t) : t, this.y = s ? Math.round(e) : e;
    }
    var le = Math.trunc || function(t) {
      return t > 0 ? Math.floor(t) : Math.ceil(t);
    };
    N.prototype = {
      // @method clone(): Point
      // Returns a copy of the current point.
      clone: function() {
        return new N(this.x, this.y);
      },
      // @method add(otherPoint: Point): Point
      // Returns the result of addition of the current and the given points.
      add: function(t) {
        return this.clone()._add(k(t));
      },
      _add: function(t) {
        return this.x += t.x, this.y += t.y, this;
      },
      // @method subtract(otherPoint: Point): Point
      // Returns the result of subtraction of the given point from the current.
      subtract: function(t) {
        return this.clone()._subtract(k(t));
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
        return new N(this.x * t.x, this.y * t.y);
      },
      // @method unscaleBy(scale: Point): Point
      // Inverse of `scaleBy`. Divide each coordinate of the current point by
      // each coordinate of `scale`.
      unscaleBy: function(t) {
        return new N(this.x / t.x, this.y / t.y);
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
        return this.x = le(this.x), this.y = le(this.y), this;
      },
      // @method distanceTo(otherPoint: Point): Number
      // Returns the cartesian distance between the current and the given points.
      distanceTo: function(t) {
        t = k(t);
        var e = t.x - this.x, s = t.y - this.y;
        return Math.sqrt(e * e + s * s);
      },
      // @method equals(otherPoint: Point): Boolean
      // Returns `true` if the given point has the same coordinates.
      equals: function(t) {
        return t = k(t), t.x === this.x && t.y === this.y;
      },
      // @method contains(otherPoint: Point): Boolean
      // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
      contains: function(t) {
        return t = k(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      },
      // @method toString(): String
      // Returns a string representation of the point for debugging purposes.
      toString: function() {
        return "Point(" + v(this.x) + ", " + v(this.y) + ")";
      }
    };
    function k(t, e, s) {
      return t instanceof N ? t : A(t) ? new N(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new N(t.x, t.y) : new N(t, e, s);
    }
    function B(t, e) {
      if (t)
        for (var s = e ? [t, e] : t, u = 0, d = s.length; u < d; u++)
          this.extend(s[u]);
    }
    B.prototype = {
      // @method extend(point: Point): this
      // Extends the bounds to contain the given point.
      // @alternative
      // @method extend(otherBounds: Bounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e, s;
        if (!t)
          return this;
        if (t instanceof N || typeof t[0] == "number" || "x" in t)
          e = s = k(t);
        else if (t = U(t), e = t.min, s = t.max, !e || !s)
          return this;
        return !this.min && !this.max ? (this.min = e.clone(), this.max = s.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(s.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(s.y, this.max.y)), this;
      },
      // @method getCenter(round?: Boolean): Point
      // Returns the center point of the bounds.
      getCenter: function(t) {
        return k(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      // @method getBottomLeft(): Point
      // Returns the bottom-left point of the bounds.
      getBottomLeft: function() {
        return k(this.min.x, this.max.y);
      },
      // @method getTopRight(): Point
      // Returns the top-right point of the bounds.
      getTopRight: function() {
        return k(this.max.x, this.min.y);
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
        var e, s;
        return typeof t[0] == "number" || t instanceof N ? t = k(t) : t = U(t), t instanceof B ? (e = t.min, s = t.max) : e = s = t, e.x >= this.min.x && s.x <= this.max.x && e.y >= this.min.y && s.y <= this.max.y;
      },
      // @method intersects(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds
      // intersect if they have at least one point in common.
      intersects: function(t) {
        t = U(t);
        var e = this.min, s = this.max, u = t.min, d = t.max, g = d.x >= e.x && u.x <= s.x, b = d.y >= e.y && u.y <= s.y;
        return g && b;
      },
      // @method overlaps(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds
      // overlap if their intersection is an area.
      overlaps: function(t) {
        t = U(t);
        var e = this.min, s = this.max, u = t.min, d = t.max, g = d.x > e.x && u.x < s.x, b = d.y > e.y && u.y < s.y;
        return g && b;
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
        var e = this.min, s = this.max, u = Math.abs(e.x - s.x) * t, d = Math.abs(e.y - s.y) * t;
        return U(
          k(e.x - u, e.y - d),
          k(s.x + u, s.y + d)
        );
      },
      // @method equals(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle is equivalent to the given bounds.
      equals: function(t) {
        return t ? (t = U(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
      }
    };
    function U(t, e) {
      return !t || t instanceof B ? t : new B(t, e);
    }
    function H(t, e) {
      if (t)
        for (var s = e ? [t, e] : t, u = 0, d = s.length; u < d; u++)
          this.extend(s[u]);
    }
    H.prototype = {
      // @method extend(latlng: LatLng): this
      // Extend the bounds to contain the given point
      // @alternative
      // @method extend(otherBounds: LatLngBounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e = this._southWest, s = this._northEast, u, d;
        if (t instanceof j)
          u = t, d = t;
        else if (t instanceof H) {
          if (u = t._southWest, d = t._northEast, !u || !d)
            return this;
        } else
          return t ? this.extend(D(t) || F(t)) : this;
        return !e && !s ? (this._southWest = new j(u.lat, u.lng), this._northEast = new j(d.lat, d.lng)) : (e.lat = Math.min(u.lat, e.lat), e.lng = Math.min(u.lng, e.lng), s.lat = Math.max(d.lat, s.lat), s.lng = Math.max(d.lng, s.lng)), this;
      },
      // @method pad(bufferRatio: Number): LatLngBounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this._southWest, s = this._northEast, u = Math.abs(e.lat - s.lat) * t, d = Math.abs(e.lng - s.lng) * t;
        return new H(
          new j(e.lat - u, e.lng - d),
          new j(s.lat + u, s.lng + d)
        );
      },
      // @method getCenter(): LatLng
      // Returns the center point of the bounds.
      getCenter: function() {
        return new j(
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
        return new j(this.getNorth(), this.getWest());
      },
      // @method getSouthEast(): LatLng
      // Returns the south-east point of the bounds.
      getSouthEast: function() {
        return new j(this.getSouth(), this.getEast());
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
        typeof t[0] == "number" || t instanceof j || "lat" in t ? t = D(t) : t = F(t);
        var e = this._southWest, s = this._northEast, u, d;
        return t instanceof H ? (u = t.getSouthWest(), d = t.getNorthEast()) : u = d = t, u.lat >= e.lat && d.lat <= s.lat && u.lng >= e.lng && d.lng <= s.lng;
      },
      // @method intersects(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
      intersects: function(t) {
        t = F(t);
        var e = this._southWest, s = this._northEast, u = t.getSouthWest(), d = t.getNorthEast(), g = d.lat >= e.lat && u.lat <= s.lat, b = d.lng >= e.lng && u.lng <= s.lng;
        return g && b;
      },
      // @method overlaps(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
      overlaps: function(t) {
        t = F(t);
        var e = this._southWest, s = this._northEast, u = t.getSouthWest(), d = t.getNorthEast(), g = d.lat > e.lat && u.lat < s.lat, b = d.lng > e.lng && u.lng < s.lng;
        return g && b;
      },
      // @method toBBoxString(): String
      // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
      // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        return t ? (t = F(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function F(t, e) {
      return t instanceof H ? t : new H(t, e);
    }
    function j(t, e, s) {
      if (isNaN(t) || isNaN(e))
        throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
      this.lat = +t, this.lng = +e, s !== void 0 && (this.alt = +s);
    }
    j.prototype = {
      // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
      // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        if (!t)
          return !1;
        t = D(t);
        var s = Math.max(
          Math.abs(this.lat - t.lat),
          Math.abs(this.lng - t.lng)
        );
        return s <= (e === void 0 ? 1e-9 : e);
      },
      // @method toString(): String
      // Returns a string representation of the point (for debugging purposes).
      toString: function(t) {
        return "LatLng(" + v(this.lat, t) + ", " + v(this.lng, t) + ")";
      },
      // @method distanceTo(otherLatLng: LatLng): Number
      // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
      distanceTo: function(t) {
        return q.distance(this, D(t));
      },
      // @method wrap(): LatLng
      // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
      wrap: function() {
        return q.wrapLatLng(this);
      },
      // @method toBounds(sizeInMeters: Number): LatLngBounds
      // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
      toBounds: function(t) {
        var e = 180 * t / 40075017, s = e / Math.cos(Math.PI / 180 * this.lat);
        return F(
          [this.lat - e, this.lng - s],
          [this.lat + e, this.lng + s]
        );
      },
      clone: function() {
        return new j(this.lat, this.lng, this.alt);
      }
    };
    function D(t, e, s) {
      return t instanceof j ? t : A(t) && typeof t[0] != "object" ? t.length === 3 ? new j(t[0], t[1], t[2]) : t.length === 2 ? new j(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new j(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new j(t, e, s);
    }
    var W = {
      // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
      // Projects geographical coordinates into pixel coordinates for a given zoom.
      latLngToPoint: function(t, e) {
        var s = this.projection.project(t), u = this.scale(e);
        return this.transformation._transform(s, u);
      },
      // @method pointToLatLng(point: Point, zoom: Number): LatLng
      // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
      // zoom into geographical coordinates.
      pointToLatLng: function(t, e) {
        var s = this.scale(e), u = this.transformation.untransform(t, s);
        return this.projection.unproject(u);
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
        var e = this.projection.bounds, s = this.scale(t), u = this.transformation.transform(e.min, s), d = this.transformation.transform(e.max, s);
        return new B(u, d);
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
        var e = this.wrapLng ? m(t.lng, this.wrapLng, !0) : t.lng, s = this.wrapLat ? m(t.lat, this.wrapLat, !0) : t.lat, u = t.alt;
        return new j(s, e, u);
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring
      // that its center is within the CRS's bounds.
      // Only accepts actual `L.LatLngBounds` instances, not arrays.
      wrapLatLngBounds: function(t) {
        var e = t.getCenter(), s = this.wrapLatLng(e), u = e.lat - s.lat, d = e.lng - s.lng;
        if (u === 0 && d === 0)
          return t;
        var g = t.getSouthWest(), b = t.getNorthEast(), P = new j(g.lat - u, g.lng - d), C = new j(b.lat - u, b.lng - d);
        return new H(P, C);
      }
    }, q = l({}, W, {
      wrapLng: [-180, 180],
      // Mean Earth Radius, as recommended for use by
      // the International Union of Geodesy and Geophysics,
      // see https://rosettacode.org/wiki/Haversine_formula
      R: 6371e3,
      // distance between two geographical points using spherical law of cosines approximation
      distance: function(t, e) {
        var s = Math.PI / 180, u = t.lat * s, d = e.lat * s, g = Math.sin((e.lat - t.lat) * s / 2), b = Math.sin((e.lng - t.lng) * s / 2), P = g * g + Math.cos(u) * Math.cos(d) * b * b, C = 2 * Math.atan2(Math.sqrt(P), Math.sqrt(1 - P));
        return this.R * C;
      }
    }), et = 6378137, J = {
      R: et,
      MAX_LATITUDE: 85.0511287798,
      project: function(t) {
        var e = Math.PI / 180, s = this.MAX_LATITUDE, u = Math.max(Math.min(s, t.lat), -s), d = Math.sin(u * e);
        return new N(
          this.R * t.lng * e,
          this.R * Math.log((1 + d) / (1 - d)) / 2
        );
      },
      unproject: function(t) {
        var e = 180 / Math.PI;
        return new j(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
          t.x * e / this.R
        );
      },
      bounds: function() {
        var t = et * Math.PI;
        return new B([-t, -t], [t, t]);
      }()
    };
    function pt(t, e, s, u) {
      if (A(t)) {
        this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
        return;
      }
      this._a = t, this._b = e, this._c = s, this._d = u;
    }
    pt.prototype = {
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
        return e = e || 1, new N(
          (t.x / e - this._b) / this._a,
          (t.y / e - this._d) / this._c
        );
      }
    };
    function Z(t, e, s, u) {
      return new pt(t, e, s, u);
    }
    var Et = l({}, q, {
      code: "EPSG:3857",
      projection: J,
      transformation: function() {
        var t = 0.5 / (Math.PI * J.R);
        return Z(t, 0.5, -t, 0.5);
      }()
    }), be = l({}, Et, {
      code: "EPSG:900913"
    });
    function Re(t) {
      return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function mr(t, e) {
      var s = "", u, d, g, b, P, C;
      for (u = 0, g = t.length; u < g; u++) {
        for (P = t[u], d = 0, b = P.length; d < b; d++)
          C = P[d], s += (d ? "L" : "M") + C.x + " " + C.y;
        s += e ? V.svg ? "z" : "x" : "";
      }
      return s || "M0 0";
    }
    var $i = document.documentElement.style, gi = "ActiveXObject" in window, Ma = gi && !document.addEventListener, pr = "msLaunchUri" in navigator && !("documentMode" in document), Ki = Jt("webkit"), gr = Jt("android"), vr = Jt("android 2") || Jt("android 3"), Sa = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), za = gr && Jt("Google") && Sa < 537 && !("AudioNode" in window), Ji = !!window.opera, yr = !pr && Jt("chrome"), br = Jt("gecko") && !Ki && !Ji && !gi, Ea = !yr && Jt("safari"), xr = Jt("phantom"), wr = "OTransition" in $i, Oa = navigator.platform.indexOf("Win") === 0, Lr = gi && "transition" in $i, Qi = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !vr, Pr = "MozPerspective" in $i, Ia = !window.L_DISABLE_3D && (Lr || Qi || Pr) && !wr && !xr, Fe = typeof orientation < "u" || Jt("mobile"), Ba = Fe && Ki, Aa = Fe && Qi, Tr = !window.PointerEvent && window.MSPointerEvent, Cr = !!(window.PointerEvent || Tr), kr = "ontouchstart" in window || !!window.TouchEvent, Za = !window.L_NO_TOUCH && (kr || Cr), Da = Fe && Ji, Ra = Fe && br, Fa = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, ja = function() {
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
    }(), Na = function() {
      return !!document.createElement("canvas").getContext;
    }(), tn = !!(document.createElementNS && Re("svg").createSVGRect), Ua = !!tn && function() {
      var t = document.createElement("div");
      return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }(), Va = !tn && function() {
      try {
        var t = document.createElement("div");
        t.innerHTML = '<v:shape adj="1"/>';
        var e = t.firstChild;
        return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
      } catch {
        return !1;
      }
    }(), Ha = navigator.platform.indexOf("Mac") === 0, Wa = navigator.platform.indexOf("Linux") === 0;
    function Jt(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var V = {
      ie: gi,
      ielt9: Ma,
      edge: pr,
      webkit: Ki,
      android: gr,
      android23: vr,
      androidStock: za,
      opera: Ji,
      chrome: yr,
      gecko: br,
      safari: Ea,
      phantom: xr,
      opera12: wr,
      win: Oa,
      ie3d: Lr,
      webkit3d: Qi,
      gecko3d: Pr,
      any3d: Ia,
      mobile: Fe,
      mobileWebkit: Ba,
      mobileWebkit3d: Aa,
      msPointer: Tr,
      pointer: Cr,
      touch: Za,
      touchNative: kr,
      mobileOpera: Da,
      mobileGecko: Ra,
      retina: Fa,
      passiveEvents: ja,
      canvas: Na,
      svg: tn,
      vml: Va,
      inlineSvg: Ua,
      mac: Ha,
      linux: Wa
    }, Mr = V.msPointer ? "MSPointerDown" : "pointerdown", Sr = V.msPointer ? "MSPointerMove" : "pointermove", zr = V.msPointer ? "MSPointerUp" : "pointerup", Er = V.msPointer ? "MSPointerCancel" : "pointercancel", en = {
      touchstart: Mr,
      touchmove: Sr,
      touchend: zr,
      touchcancel: Er
    }, Or = {
      touchstart: Ka,
      touchmove: vi,
      touchend: vi,
      touchcancel: vi
    }, xe = {}, Ir = !1;
    function Ya(t, e, s) {
      return e === "touchstart" && $a(), Or[e] ? (s = Or[e].bind(this, s), t.addEventListener(en[e], s, !1), s) : (console.warn("wrong event specified:", e), p);
    }
    function Ga(t, e, s) {
      if (!en[e]) {
        console.warn("wrong event specified:", e);
        return;
      }
      t.removeEventListener(en[e], s, !1);
    }
    function qa(t) {
      xe[t.pointerId] = t;
    }
    function Xa(t) {
      xe[t.pointerId] && (xe[t.pointerId] = t);
    }
    function Br(t) {
      delete xe[t.pointerId];
    }
    function $a() {
      Ir || (document.addEventListener(Mr, qa, !0), document.addEventListener(Sr, Xa, !0), document.addEventListener(zr, Br, !0), document.addEventListener(Er, Br, !0), Ir = !0);
    }
    function vi(t, e) {
      if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
        e.touches = [];
        for (var s in xe)
          e.touches.push(xe[s]);
        e.changedTouches = [e], t(e);
      }
    }
    function Ka(t, e) {
      e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && Tt(e), vi(t, e);
    }
    function Ja(t) {
      var e = {}, s, u;
      for (u in t)
        s = t[u], e[u] = s && s.bind ? s.bind(t) : s;
      return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
    }
    var Qa = 200;
    function tl(t, e) {
      t.addEventListener("dblclick", e);
      var s = 0, u;
      function d(g) {
        if (g.detail !== 1) {
          u = g.detail;
          return;
        }
        if (!(g.pointerType === "mouse" || g.sourceCapabilities && !g.sourceCapabilities.firesTouchEvents)) {
          var b = Fr(g);
          if (!(b.some(function(C) {
            return C instanceof HTMLLabelElement && C.attributes.for;
          }) && !b.some(function(C) {
            return C instanceof HTMLInputElement || C instanceof HTMLSelectElement;
          }))) {
            var P = Date.now();
            P - s <= Qa ? (u++, u === 2 && e(Ja(g))) : u = 1, s = P;
          }
        }
      }
      return t.addEventListener("click", d), {
        dblclick: e,
        simDblclick: d
      };
    }
    function el(t, e) {
      t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
    }
    var nn = xi(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), je = xi(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), Ar = je === "webkitTransition" || je === "OTransition" ? je + "End" : "transitionend";
    function Zr(t) {
      return typeof t == "string" ? document.getElementById(t) : t;
    }
    function Ne(t, e) {
      var s = t.style[e] || t.currentStyle && t.currentStyle[e];
      if ((!s || s === "auto") && document.defaultView) {
        var u = document.defaultView.getComputedStyle(t, null);
        s = u ? u[e] : null;
      }
      return s === "auto" ? null : s;
    }
    function ot(t, e, s) {
      var u = document.createElement(t);
      return u.className = e || "", s && s.appendChild(u), u;
    }
    function dt(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function yi(t) {
      for (; t.firstChild; )
        t.removeChild(t.firstChild);
    }
    function we(t) {
      var e = t.parentNode;
      e && e.lastChild !== t && e.appendChild(t);
    }
    function Le(t) {
      var e = t.parentNode;
      e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
    }
    function rn(t, e) {
      if (t.classList !== void 0)
        return t.classList.contains(e);
      var s = bi(t);
      return s.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(s);
    }
    function K(t, e) {
      if (t.classList !== void 0)
        for (var s = w(e), u = 0, d = s.length; u < d; u++)
          t.classList.add(s[u]);
      else if (!rn(t, e)) {
        var g = bi(t);
        on(t, (g ? g + " " : "") + e);
      }
    }
    function gt(t, e) {
      t.classList !== void 0 ? t.classList.remove(e) : on(t, y((" " + bi(t) + " ").replace(" " + e + " ", " ")));
    }
    function on(t, e) {
      t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
    }
    function bi(t) {
      return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
    }
    function Ut(t, e) {
      "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && il(t, e);
    }
    function il(t, e) {
      var s = !1, u = "DXImageTransform.Microsoft.Alpha";
      try {
        s = t.filters.item(u);
      } catch {
        if (e === 1)
          return;
      }
      e = Math.round(e * 100), s ? (s.Enabled = e !== 100, s.Opacity = e) : t.style.filter += " progid:" + u + "(opacity=" + e + ")";
    }
    function xi(t) {
      for (var e = document.documentElement.style, s = 0; s < t.length; s++)
        if (t[s] in e)
          return t[s];
      return !1;
    }
    function de(t, e, s) {
      var u = e || new N(0, 0);
      t.style[nn] = (V.ie3d ? "translate(" + u.x + "px," + u.y + "px)" : "translate3d(" + u.x + "px," + u.y + "px,0)") + (s ? " scale(" + s + ")" : "");
    }
    function yt(t, e) {
      t._leaflet_pos = e, V.any3d ? de(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
    }
    function _e(t) {
      return t._leaflet_pos || new N(0, 0);
    }
    var Ue, Ve, sn;
    if ("onselectstart" in document)
      Ue = function() {
        X(window, "selectstart", Tt);
      }, Ve = function() {
        ct(window, "selectstart", Tt);
      };
    else {
      var He = xi(
        ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
      );
      Ue = function() {
        if (He) {
          var t = document.documentElement.style;
          sn = t[He], t[He] = "none";
        }
      }, Ve = function() {
        He && (document.documentElement.style[He] = sn, sn = void 0);
      };
    }
    function an() {
      X(window, "dragstart", Tt);
    }
    function ln() {
      ct(window, "dragstart", Tt);
    }
    var wi, hn;
    function un(t) {
      for (; t.tabIndex === -1; )
        t = t.parentNode;
      t.style && (Li(), wi = t, hn = t.style.outlineStyle, t.style.outlineStyle = "none", X(window, "keydown", Li));
    }
    function Li() {
      wi && (wi.style.outlineStyle = hn, wi = void 0, hn = void 0, ct(window, "keydown", Li));
    }
    function Dr(t) {
      do
        t = t.parentNode;
      while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
      return t;
    }
    function cn(t) {
      var e = t.getBoundingClientRect();
      return {
        x: e.width / t.offsetWidth || 1,
        y: e.height / t.offsetHeight || 1,
        boundingClientRect: e
      };
    }
    var nl = {
      __proto__: null,
      TRANSFORM: nn,
      TRANSITION: je,
      TRANSITION_END: Ar,
      get: Zr,
      getStyle: Ne,
      create: ot,
      remove: dt,
      empty: yi,
      toFront: we,
      toBack: Le,
      hasClass: rn,
      addClass: K,
      removeClass: gt,
      setClass: on,
      getClass: bi,
      setOpacity: Ut,
      testProp: xi,
      setTransform: de,
      setPosition: yt,
      getPosition: _e,
      get disableTextSelection() {
        return Ue;
      },
      get enableTextSelection() {
        return Ve;
      },
      disableImageDrag: an,
      enableImageDrag: ln,
      preventOutline: un,
      restoreOutline: Li,
      getSizedParentNode: Dr,
      getScale: cn
    };
    function X(t, e, s, u) {
      if (e && typeof e == "object")
        for (var d in e)
          dn(t, d, e[d], s);
      else {
        e = w(e);
        for (var g = 0, b = e.length; g < b; g++)
          dn(t, e[g], s, u);
      }
      return this;
    }
    var Qt = "_leaflet_events";
    function ct(t, e, s, u) {
      if (arguments.length === 1)
        Rr(t), delete t[Qt];
      else if (e && typeof e == "object")
        for (var d in e)
          _n(t, d, e[d], s);
      else if (e = w(e), arguments.length === 2)
        Rr(t, function(P) {
          return O(e, P) !== -1;
        });
      else
        for (var g = 0, b = e.length; g < b; g++)
          _n(t, e[g], s, u);
      return this;
    }
    function Rr(t, e) {
      for (var s in t[Qt]) {
        var u = s.split(/\d/)[0];
        (!e || e(u)) && _n(t, u, null, null, s);
      }
    }
    var fn = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function dn(t, e, s, u) {
      var d = e + f(s) + (u ? "_" + f(u) : "");
      if (t[Qt] && t[Qt][d])
        return this;
      var g = function(P) {
        return s.call(u || t, P || window.event);
      }, b = g;
      !V.touchNative && V.pointer && e.indexOf("touch") === 0 ? g = Ya(t, e, g) : V.touch && e === "dblclick" ? g = tl(t, g) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(fn[e] || e, g, V.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (g = function(P) {
        P = P || window.event, pn(t, P) && b(P);
      }, t.addEventListener(fn[e], g, !1)) : t.addEventListener(e, b, !1) : t.attachEvent("on" + e, g), t[Qt] = t[Qt] || {}, t[Qt][d] = g;
    }
    function _n(t, e, s, u, d) {
      d = d || e + f(s) + (u ? "_" + f(u) : "");
      var g = t[Qt] && t[Qt][d];
      if (!g)
        return this;
      !V.touchNative && V.pointer && e.indexOf("touch") === 0 ? Ga(t, e, g) : V.touch && e === "dblclick" ? el(t, g) : "removeEventListener" in t ? t.removeEventListener(fn[e] || e, g, !1) : t.detachEvent("on" + e, g), t[Qt][d] = null;
    }
    function me(t) {
      return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
    }
    function mn(t) {
      return dn(t, "wheel", me), this;
    }
    function We(t) {
      return X(t, "mousedown touchstart dblclick contextmenu", me), t._leaflet_disable_click = !0, this;
    }
    function Tt(t) {
      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
    }
    function pe(t) {
      return Tt(t), me(t), this;
    }
    function Fr(t) {
      if (t.composedPath)
        return t.composedPath();
      for (var e = [], s = t.target; s; )
        e.push(s), s = s.parentNode;
      return e;
    }
    function jr(t, e) {
      if (!e)
        return new N(t.clientX, t.clientY);
      var s = cn(e), u = s.boundingClientRect;
      return new N(
        // offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (t.clientX - u.left) / s.x - e.clientLeft,
        (t.clientY - u.top) / s.y - e.clientTop
      );
    }
    var rl = V.linux && V.chrome ? window.devicePixelRatio : V.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function Nr(t) {
      return V.edge ? t.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        t.deltaY && t.deltaMode === 0 ? -t.deltaY / rl : (
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
    function pn(t, e) {
      var s = e.relatedTarget;
      if (!s)
        return !0;
      try {
        for (; s && s !== t; )
          s = s.parentNode;
      } catch {
        return !1;
      }
      return s !== t;
    }
    var ol = {
      __proto__: null,
      on: X,
      off: ct,
      stopPropagation: me,
      disableScrollPropagation: mn,
      disableClickPropagation: We,
      preventDefault: Tt,
      stop: pe,
      getPropagationPath: Fr,
      getMousePosition: jr,
      getWheelDelta: Nr,
      isExternalTarget: pn,
      addListener: X,
      removeListener: ct
    }, Ur = kt.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(t, e, s, u) {
        this.stop(), this._el = t, this._inProgress = !0, this._duration = s || 0.25, this._easeOutPower = 1 / Math.max(u || 0.5, 0.2), this._startPos = _e(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      },
      // @method stop()
      // Stops the animation (if currently running).
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = _t(this._animate, this), this._step();
      },
      _step: function(t) {
        var e = +/* @__PURE__ */ new Date() - this._startTime, s = this._duration * 1e3;
        e < s ? this._runFrame(this._easeOut(e / s), t) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(t, e) {
        var s = this._startPos.add(this._offset.multiplyBy(t));
        e && s._round(), yt(this._el, s), this.fire("step");
      },
      _complete: function() {
        Lt(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    }), it = kt.extend({
      options: {
        // @section Map State Options
        // @option crs: CRS = L.CRS.EPSG3857
        // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
        // sure what it means.
        crs: Et,
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
        e = x(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = h(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(D(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = je && V.any3d && !V.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), X(this._proxy, Ar, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      // @section Methods for modifying map state
      // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) with the given
      // animation options.
      setView: function(t, e, s) {
        if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(D(t), e, this.options.maxBounds), s = s || {}, this._stop(), this._loaded && !s.reset && s !== !0) {
          s.animate !== void 0 && (s.zoom = l({ animate: s.animate }, s.zoom), s.pan = l({ animate: s.animate, duration: s.duration }, s.pan));
          var u = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, s.zoom) : this._tryAnimatedPan(t, s.pan);
          if (u)
            return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(t, e, s.pan && s.pan.noMoveStart), this;
      },
      // @method setZoom(zoom: Number, options?: Zoom/pan options): this
      // Sets the zoom of the map.
      setZoom: function(t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
      },
      // @method zoomIn(delta?: Number, options?: Zoom options): this
      // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomIn: function(t, e) {
        return t = t || (V.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
      },
      // @method zoomOut(delta?: Number, options?: Zoom options): this
      // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomOut: function(t, e) {
        return t = t || (V.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
      },
      // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified geographical point on the map
      // stationary (e.g. used internally for scroll zoom and double-click zoom).
      // @alternative
      // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
      setZoomAround: function(t, e, s) {
        var u = this.getZoomScale(e), d = this.getSize().divideBy(2), g = t instanceof N ? t : this.latLngToContainerPoint(t), b = g.subtract(d).multiplyBy(1 - 1 / u), P = this.containerPointToLatLng(d.add(b));
        return this.setView(P, e, { zoom: s });
      },
      _getBoundsCenterZoom: function(t, e) {
        e = e || {}, t = t.getBounds ? t.getBounds() : F(t);
        var s = k(e.paddingTopLeft || e.padding || [0, 0]), u = k(e.paddingBottomRight || e.padding || [0, 0]), d = this.getBoundsZoom(t, !1, s.add(u));
        if (d = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, d) : d, d === 1 / 0)
          return {
            center: t.getCenter(),
            zoom: d
          };
        var g = u.subtract(s).divideBy(2), b = this.project(t.getSouthWest(), d), P = this.project(t.getNorthEast(), d), C = this.unproject(b.add(P).divideBy(2).add(g), d);
        return {
          center: C,
          zoom: d
        };
      },
      // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets a map view that contains the given geographical bounds with the
      // maximum zoom level possible.
      fitBounds: function(t, e) {
        if (t = F(t), !t.isValid())
          throw new Error("Bounds are not valid.");
        var s = this._getBoundsCenterZoom(t, e);
        return this.setView(s.center, s.zoom, e);
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
        if (t = k(t).round(), e = e || {}, !t.x && !t.y)
          return this.fire("moveend");
        if (e.animate !== !0 && !this.getSize().contains(t))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new Ur(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
          K(this._mapPane, "leaflet-pan-anim");
          var s = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(this._mapPane, s, e.duration || 0.25, e.easeLinearity);
        } else
          this._rawPanBy(t), this.fire("move").fire("moveend");
        return this;
      },
      // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) performing a smooth
      // pan-zoom animation.
      flyTo: function(t, e, s) {
        if (s = s || {}, s.animate === !1 || !V.any3d)
          return this.setView(t, e, s);
        this._stop();
        var u = this.project(this.getCenter()), d = this.project(t), g = this.getSize(), b = this._zoom;
        t = D(t), e = e === void 0 ? b : e;
        var P = Math.max(g.x, g.y), C = P * this.getZoomScale(b, e), z = d.distanceTo(u) || 1, R = 1.42, Y = R * R;
        function Q(bt) {
          var Ai = bt ? -1 : 1, Gl = bt ? C : P, ql = C * C - P * P + Ai * Y * Y * z * z, Xl = 2 * Gl * Y * z, kn = ql / Xl, Lo = Math.sqrt(kn * kn + 1) - kn, $l = Lo < 1e-9 ? -18 : Math.log(Lo);
          return $l;
        }
        function St(bt) {
          return (Math.exp(bt) - Math.exp(-bt)) / 2;
        }
        function Pt(bt) {
          return (Math.exp(bt) + Math.exp(-bt)) / 2;
        }
        function Ht(bt) {
          return St(bt) / Pt(bt);
        }
        var Ot = Q(0);
        function Se(bt) {
          return P * (Pt(Ot) / Pt(Ot + R * bt));
        }
        function Vl(bt) {
          return P * (Pt(Ot) * Ht(Ot + R * bt) - St(Ot)) / Y;
        }
        function Hl(bt) {
          return 1 - Math.pow(1 - bt, 1.5);
        }
        var Wl = Date.now(), xo = (Q(1) - Ot) / R, Yl = s.duration ? 1e3 * s.duration : 1e3 * xo * 0.8;
        function wo() {
          var bt = (Date.now() - Wl) / Yl, Ai = Hl(bt) * xo;
          bt <= 1 ? (this._flyToFrame = _t(wo, this), this._move(
            this.unproject(u.add(d.subtract(u).multiplyBy(Vl(Ai) / z)), b),
            this.getScaleZoom(P / Se(Ai), b),
            { flyTo: !0 }
          )) : this._move(t, e)._moveEnd(!0);
        }
        return this._moveStart(!0, s.noMoveStart), wo.call(this), this;
      },
      // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
      // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
      flyToBounds: function(t, e) {
        var s = this._getBoundsCenterZoom(t, e);
        return this.flyTo(s.center, s.zoom, e);
      },
      // @method setMaxBounds(bounds: LatLngBounds): this
      // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
      setMaxBounds: function(t) {
        return t = F(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
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
        var s = this.getCenter(), u = this._limitCenter(s, this._zoom, F(t));
        return s.equals(u) || this.panTo(u, e), this._enforcingBounds = !1, this;
      },
      // @method panInside(latlng: LatLng, options?: padding options): this
      // Pans the map the minimum amount to make the `latlng` visible. Use
      // padding options to fit the display to more restricted bounds.
      // If `latlng` is already within the (optionally padded) display bounds,
      // the map will not be panned.
      panInside: function(t, e) {
        e = e || {};
        var s = k(e.paddingTopLeft || e.padding || [0, 0]), u = k(e.paddingBottomRight || e.padding || [0, 0]), d = this.project(this.getCenter()), g = this.project(t), b = this.getPixelBounds(), P = U([b.min.add(s), b.max.subtract(u)]), C = P.getSize();
        if (!P.contains(g)) {
          this._enforcingBounds = !0;
          var z = g.subtract(P.getCenter()), R = P.extend(g).getSize().subtract(C);
          d.x += z.x < 0 ? -R.x : R.x, d.y += z.y < 0 ? -R.y : R.y, this.panTo(this.unproject(d), e), this._enforcingBounds = !1;
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
        t = l({
          animate: !1,
          pan: !0
        }, t === !0 ? { animate: !0 } : t);
        var e = this.getSize();
        this._sizeChanged = !0, this._lastCenter = null;
        var s = this.getSize(), u = e.divideBy(2).round(), d = s.divideBy(2).round(), g = u.subtract(d);
        return !g.x && !g.y ? this : (t.animate && t.pan ? this.panBy(g) : (t.pan && this._rawPanBy(g), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(h(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: e,
          newSize: s
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
        if (t = this._locateOptions = l({
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
        var e = h(this._handleGeolocationResponse, this), s = h(this._handleGeolocationError, this);
        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, s, t) : navigator.geolocation.getCurrentPosition(e, s, t), this;
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
          var e = t.code, s = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: e,
            message: "Geolocation error: " + s + "."
          });
        }
      },
      _handleGeolocationResponse: function(t) {
        if (this._container._leaflet_id) {
          var e = t.coords.latitude, s = t.coords.longitude, u = new j(e, s), d = u.toBounds(t.coords.accuracy * 2), g = this._locateOptions;
          if (g.setView) {
            var b = this.getBoundsZoom(d);
            this.setView(u, g.maxZoom ? Math.min(b, g.maxZoom) : b);
          }
          var P = {
            latlng: u,
            bounds: d,
            timestamp: t.timestamp
          };
          for (var C in t.coords)
            typeof t.coords[C] == "number" && (P[C] = t.coords[C]);
          this.fire("locationfound", P);
        }
      },
      // TODO Appropriate docs section?
      // @section Other Methods
      // @method addHandler(name: String, HandlerClass: Function): this
      // Adds a new `Handler` to the map, given its name and constructor function.
      addHandler: function(t, e) {
        if (!e)
          return this;
        var s = this[t] = new e(this);
        return this._handlers.push(s), this.options[t] && s.enable(), this;
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
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), dt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (Lt(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var t;
        for (t in this._layers)
          this._layers[t].remove();
        for (t in this._panes)
          dt(this._panes[t]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      // @section Other Methods
      // @method createPane(name: String, container?: HTMLElement): HTMLElement
      // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
      // then returns it. The pane is created as a child of `container`, or
      // as a child of the main map pane if not set.
      createPane: function(t, e) {
        var s = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), u = ot("div", s, e || this._mapPane);
        return t && (this._panes[t] = u), u;
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
        var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), s = this.unproject(t.getTopRight());
        return new H(e, s);
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
      getBoundsZoom: function(t, e, s) {
        t = F(t), s = k(s || [0, 0]);
        var u = this.getZoom() || 0, d = this.getMinZoom(), g = this.getMaxZoom(), b = t.getNorthWest(), P = t.getSouthEast(), C = this.getSize().subtract(s), z = U(this.project(P, u), this.project(b, u)).getSize(), R = V.any3d ? this.options.zoomSnap : 1, Y = C.x / z.x, Q = C.y / z.y, St = e ? Math.max(Y, Q) : Math.min(Y, Q);
        return u = this.getScaleZoom(St, u), R && (u = Math.round(u / (R / 100)) * (R / 100), u = e ? Math.ceil(u / R) * R : Math.floor(u / R) * R), Math.max(d, Math.min(g, u));
      },
      // @method getSize(): Point
      // Returns the current size of the map container (in pixels).
      getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new N(
          this._container.clientWidth || 0,
          this._container.clientHeight || 0
        ), this._sizeChanged = !1), this._size.clone();
      },
      // @method getPixelBounds(): Bounds
      // Returns the bounds of the current map view in projected pixel
      // coordinates (sometimes useful in layer and overlay implementations).
      getPixelBounds: function(t, e) {
        var s = this._getTopLeftPoint(t, e);
        return new B(s, s.add(this.getSize()));
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
        var s = this.options.crs;
        return e = e === void 0 ? this._zoom : e, s.scale(t) / s.scale(e);
      },
      // @method getScaleZoom(scale: Number, fromZoom: Number): Number
      // Returns the zoom level that the map would end up at, if it is at `fromZoom`
      // level and everything is scaled by a factor of `scale`. Inverse of
      // [`getZoomScale`](#map-getZoomScale).
      getScaleZoom: function(t, e) {
        var s = this.options.crs;
        e = e === void 0 ? this._zoom : e;
        var u = s.zoom(t * s.scale(e));
        return isNaN(u) ? 1 / 0 : u;
      },
      // @method project(latlng: LatLng, zoom: Number): Point
      // Projects a geographical coordinate `LatLng` according to the projection
      // of the map's CRS, then scales it according to `zoom` and the CRS's
      // `Transformation`. The result is pixel coordinate relative to
      // the CRS origin.
      project: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(D(t), e);
      },
      // @method unproject(point: Point, zoom: Number): LatLng
      // Inverse of [`project`](#map-project).
      unproject: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(k(t), e);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(t) {
        var e = k(t).add(this.getPixelOrigin());
        return this.unproject(e);
      },
      // @method latLngToLayerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the [origin pixel](#map-getpixelorigin).
      latLngToLayerPoint: function(t) {
        var e = this.project(D(t))._round();
        return e._subtract(this.getPixelOrigin());
      },
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
      // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
      // CRS's bounds.
      // By default this means longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees.
      wrapLatLng: function(t) {
        return this.options.crs.wrapLatLng(D(t));
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring that
      // its center is within the CRS's bounds.
      // By default this means the center longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees, and the majority of the bounds
      // overlaps the CRS's bounds.
      wrapLatLngBounds: function(t) {
        return this.options.crs.wrapLatLngBounds(F(t));
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates according to
      // the map's CRS. By default this measures distance in meters.
      distance: function(t, e) {
        return this.options.crs.distance(D(t), D(e));
      },
      // @method containerPointToLayerPoint(point: Point): Point
      // Given a pixel coordinate relative to the map container, returns the corresponding
      // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
      containerPointToLayerPoint: function(t) {
        return k(t).subtract(this._getMapPanePos());
      },
      // @method layerPointToContainerPoint(point: Point): Point
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding pixel coordinate relative to the map container.
      layerPointToContainerPoint: function(t) {
        return k(t).add(this._getMapPanePos());
      },
      // @method containerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the map container, returns
      // the corresponding geographical coordinate (for the current zoom level).
      containerPointToLatLng: function(t) {
        var e = this.containerPointToLayerPoint(k(t));
        return this.layerPointToLatLng(e);
      },
      // @method latLngToContainerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the map container.
      latLngToContainerPoint: function(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(D(t)));
      },
      // @method mouseEventToContainerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to the
      // map container where the event took place.
      mouseEventToContainerPoint: function(t) {
        return jr(t, this._container);
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
        var e = this._container = Zr(t);
        if (e) {
          if (e._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        X(e, "scroll", this._onScroll, this), this._containerId = f(e);
      },
      _initLayout: function() {
        var t = this._container;
        this._fadeAnimated = this.options.fadeAnimation && V.any3d, K(t, "leaflet-container" + (V.touch ? " leaflet-touch" : "") + (V.retina ? " leaflet-retina" : "") + (V.ielt9 ? " leaflet-oldie" : "") + (V.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var e = Ne(t, "position");
        e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var t = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), yt(this._mapPane, new N(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (K(t.markerPane, "leaflet-zoom-hide"), K(t.shadowPane, "leaflet-zoom-hide"));
      },
      // private methods that modify map state
      // @section Map state change events
      _resetView: function(t, e, s) {
        yt(this._mapPane, new N(0, 0));
        var u = !this._loaded;
        this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
        var d = this._zoom !== e;
        this._moveStart(d, s)._move(t, e)._moveEnd(d), this.fire("viewreset"), u && this.fire("load");
      },
      _moveStart: function(t, e) {
        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
      },
      _move: function(t, e, s, u) {
        e === void 0 && (e = this._zoom);
        var d = this._zoom !== e;
        return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), u ? s && s.pinch && this.fire("zoom", s) : ((d || s && s.pinch) && this.fire("zoom", s), this.fire("move", s)), this;
      },
      _moveEnd: function(t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return Lt(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(t) {
        yt(this._mapPane, this._getMapPanePos().subtract(t));
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
        var e = t ? ct : X;
        e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), V.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        Lt(this._resizeRequest), this._resizeRequest = _t(
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
        for (var s = [], u, d = e === "mouseout" || e === "mouseover", g = t.target || t.srcElement, b = !1; g; ) {
          if (u = this._targets[f(g)], u && (e === "click" || e === "preclick") && this._draggableMoved(u)) {
            b = !0;
            break;
          }
          if (u && u.listens(e, !0) && (d && !pn(g, t) || (s.push(u), d)) || g === this._container)
            break;
          g = g.parentNode;
        }
        return !s.length && !b && !d && this.listens(e, !0) && (s = [this]), s;
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
          var s = t.type;
          s === "mousedown" && un(e), this._fireDOMEvent(t, s);
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function(t, e, s) {
        if (t.type === "click") {
          var u = l({}, t);
          u.type = "preclick", this._fireDOMEvent(u, u.type, s);
        }
        var d = this._findEventTargets(t, e);
        if (s) {
          for (var g = [], b = 0; b < s.length; b++)
            s[b].listens(e, !0) && g.push(s[b]);
          d = g.concat(d);
        }
        if (d.length) {
          e === "contextmenu" && Tt(t);
          var P = d[0], C = {
            originalEvent: t
          };
          if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
            var z = P.getLatLng && (!P._radius || P._radius <= 10);
            C.containerPoint = z ? this.latLngToContainerPoint(P.getLatLng()) : this.mouseEventToContainerPoint(t), C.layerPoint = this.containerPointToLayerPoint(C.containerPoint), C.latlng = z ? P.getLatLng() : this.layerPointToLatLng(C.layerPoint);
          }
          for (b = 0; b < d.length; b++)
            if (d[b].fire(e, C, !0), C.originalEvent._stopped || d[b].options.bubblingMouseEvents === !1 && O(this._mouseEvents, e) !== -1)
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
        return _e(this._mapPane) || new N(0, 0);
      },
      _moved: function() {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function(t, e) {
        var s = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
        return s.subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function(t, e) {
        var s = this.getSize()._divideBy(2);
        return this.project(t, e)._subtract(s)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function(t, e, s) {
        var u = this._getNewPixelOrigin(s, e);
        return this.project(t, e)._subtract(u);
      },
      _latLngBoundsToNewLayerBounds: function(t, e, s) {
        var u = this._getNewPixelOrigin(s, e);
        return U([
          this.project(t.getSouthWest(), e)._subtract(u),
          this.project(t.getNorthWest(), e)._subtract(u),
          this.project(t.getSouthEast(), e)._subtract(u),
          this.project(t.getNorthEast(), e)._subtract(u)
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
      _limitCenter: function(t, e, s) {
        if (!s)
          return t;
        var u = this.project(t, e), d = this.getSize().divideBy(2), g = new B(u.subtract(d), u.add(d)), b = this._getBoundsOffset(g, s, e);
        return Math.abs(b.x) <= 1 && Math.abs(b.y) <= 1 ? t : this.unproject(u.add(b), e);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(t, e) {
        if (!e)
          return t;
        var s = this.getPixelBounds(), u = new B(s.min.add(t), s.max.add(t));
        return t.add(this._getBoundsOffset(u, e));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function(t, e, s) {
        var u = U(
          this.project(e.getNorthEast(), s),
          this.project(e.getSouthWest(), s)
        ), d = u.min.subtract(t.min), g = u.max.subtract(t.max), b = this._rebound(d.x, -g.x), P = this._rebound(d.y, -g.y);
        return new N(b, P);
      },
      _rebound: function(t, e) {
        return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      },
      _limitZoom: function(t) {
        var e = this.getMinZoom(), s = this.getMaxZoom(), u = V.any3d ? this.options.zoomSnap : 1;
        return u && (t = Math.round(t / u) * u), Math.max(e, Math.min(s, t));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        gt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(t, e) {
        var s = this._getCenterOffset(t)._trunc();
        return (e && e.animate) !== !0 && !this.getSize().contains(s) ? !1 : (this.panBy(s, e), !0);
      },
      _createAnimProxy: function() {
        var t = this._proxy = ot("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
          var s = nn, u = this._proxy.style[s];
          de(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), u === this._proxy.style[s] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        dt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
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
      _tryAnimatedZoom: function(t, e, s) {
        if (this._animatingZoom)
          return !0;
        if (s = s || {}, !this._zoomAnimated || s.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
          return !1;
        var u = this.getZoomScale(e), d = this._getCenterOffset(t)._divideBy(1 - 1 / u);
        return s.animate !== !0 && !this.getSize().contains(d) ? !1 : (_t(function() {
          this._moveStart(!0, s.noMoveStart || !1)._animateZoom(t, e, !0);
        }, this), !0);
      },
      _animateZoom: function(t, e, s, u) {
        this._mapPane && (s && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, K(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: t,
          zoom: e,
          noUpdate: u
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(h(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && gt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function sl(t, e) {
      return new it(t, e);
    }
    var qt = xt.extend({
      // @section
      // @aka Control Options
      options: {
        // @option position: String = 'topright'
        // The position of the control (one of the map corners). Possible values are `'topleft'`,
        // `'topright'`, `'bottomleft'` or `'bottomright'`
        position: "topright"
      },
      initialize: function(t) {
        x(this, t);
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
        var e = this._container = this.onAdd(t), s = this.getPosition(), u = t._controlCorners[s];
        return K(e, "leaflet-control"), s.indexOf("bottom") !== -1 ? u.insertBefore(e, u.firstChild) : u.appendChild(e), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (dt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(t) {
        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
      }
    }), Ye = function(t) {
      return new qt(t);
    };
    it.include({
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
        var t = this._controlCorners = {}, e = "leaflet-", s = this._controlContainer = ot("div", e + "control-container", this._container);
        function u(d, g) {
          var b = e + d + " " + e + g;
          t[d + g] = ot("div", b, s);
        }
        u("top", "left"), u("top", "right"), u("bottom", "left"), u("bottom", "right");
      },
      _clearControlPos: function() {
        for (var t in this._controlCorners)
          dt(this._controlCorners[t]);
        dt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var Vr = qt.extend({
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
        sortFunction: function(t, e, s, u) {
          return s < u ? -1 : u < s ? 1 : 0;
        }
      },
      initialize: function(t, e, s) {
        x(this, s), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
        for (var u in t)
          this._addLayer(t[u], u);
        for (u in e)
          this._addLayer(e[u], u, !0);
      },
      onAdd: function(t) {
        this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++)
          this._layers[e].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function(t) {
        return qt.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
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
        K(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return t < this._section.clientHeight ? (K(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : gt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      // @method collapse(): this
      // Collapse the control container if expanded.
      collapse: function() {
        return gt(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var t = "leaflet-control-layers", e = this._container = ot("div", t), s = this.options.collapsed;
        e.setAttribute("aria-haspopup", !0), We(e), mn(e);
        var u = this._section = ot("section", t + "-list");
        s && (this._map.on("click", this.collapse, this), X(e, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var d = this._layersLink = ot("a", t + "-toggle", e);
        d.href = "#", d.title = "Layers", d.setAttribute("role", "button"), X(d, {
          keydown: function(g) {
            g.keyCode === 13 && this._expandSafely();
          },
          // Certain screen readers intercept the key event and instead send a click event
          click: function(g) {
            Tt(g), this._expandSafely();
          }
        }, this), s || this.expand(), this._baseLayersList = ot("div", t + "-base", u), this._separator = ot("div", t + "-separator", u), this._overlaysList = ot("div", t + "-overlays", u), e.appendChild(u);
      },
      _getLayer: function(t) {
        for (var e = 0; e < this._layers.length; e++)
          if (this._layers[e] && f(this._layers[e].layer) === t)
            return this._layers[e];
      },
      _addLayer: function(t, e, s) {
        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: t,
          name: e,
          overlay: s
        }), this.options.sortLayers && this._layers.sort(h(function(u, d) {
          return this.options.sortFunction(u.layer, d.layer, u.name, d.name);
        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container)
          return this;
        yi(this._baseLayersList), yi(this._overlaysList), this._layerControlInputs = [];
        var t, e, s, u, d = 0;
        for (s = 0; s < this._layers.length; s++)
          u = this._layers[s], this._addItem(u), e = e || u.overlay, t = t || !u.overlay, d += u.overlay ? 0 : 1;
        return this.options.hideSingleBase && (t = t && d > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
      },
      _onLayerChange: function(t) {
        this._handlingClick || this._update();
        var e = this._getLayer(f(t.target)), s = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
        s && this._map.fire(s, e);
      },
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
      _createRadioElement: function(t, e) {
        var s = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", u = document.createElement("div");
        return u.innerHTML = s, u.firstChild;
      },
      _addItem: function(t) {
        var e = document.createElement("label"), s = this._map.hasLayer(t.layer), u;
        t.overlay ? (u = document.createElement("input"), u.type = "checkbox", u.className = "leaflet-control-layers-selector", u.defaultChecked = s) : u = this._createRadioElement("leaflet-base-layers_" + f(this), s), this._layerControlInputs.push(u), u.layerId = f(t.layer), X(u, "click", this._onInputClick, this);
        var d = document.createElement("span");
        d.innerHTML = " " + t.name;
        var g = document.createElement("span");
        e.appendChild(g), g.appendChild(u), g.appendChild(d);
        var b = t.overlay ? this._overlaysList : this._baseLayersList;
        return b.appendChild(e), this._checkDisabledLayers(), e;
      },
      _onInputClick: function() {
        if (!this._preventClick) {
          var t = this._layerControlInputs, e, s, u = [], d = [];
          this._handlingClick = !0;
          for (var g = t.length - 1; g >= 0; g--)
            e = t[g], s = this._getLayer(e.layerId).layer, e.checked ? u.push(s) : e.checked || d.push(s);
          for (g = 0; g < d.length; g++)
            this._map.hasLayer(d[g]) && this._map.removeLayer(d[g]);
          for (g = 0; g < u.length; g++)
            this._map.hasLayer(u[g]) || this._map.addLayer(u[g]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function() {
        for (var t = this._layerControlInputs, e, s, u = this._map.getZoom(), d = t.length - 1; d >= 0; d--)
          e = t[d], s = this._getLayer(e.layerId).layer, e.disabled = s.options.minZoom !== void 0 && u < s.options.minZoom || s.options.maxZoom !== void 0 && u > s.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function() {
        var t = this._section;
        this._preventClick = !0, X(t, "click", Tt), this.expand();
        var e = this;
        setTimeout(function() {
          ct(t, "click", Tt), e._preventClick = !1;
        });
      }
    }), al = function(t, e, s) {
      return new Vr(t, e, s);
    }, gn = qt.extend({
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
        var e = "leaflet-control-zoom", s = ot("div", e + " leaflet-bar"), u = this.options;
        return this._zoomInButton = this._createButton(
          u.zoomInText,
          u.zoomInTitle,
          e + "-in",
          s,
          this._zoomIn
        ), this._zoomOutButton = this._createButton(
          u.zoomOutText,
          u.zoomOutTitle,
          e + "-out",
          s,
          this._zoomOut
        ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), s;
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
      _createButton: function(t, e, s, u, d) {
        var g = ot("a", s, u);
        return g.innerHTML = t, g.href = "#", g.title = e, g.setAttribute("role", "button"), g.setAttribute("aria-label", e), We(g), X(g, "click", pe), X(g, "click", d, this), X(g, "click", this._refocusOnMap, this), g;
      },
      _updateDisabled: function() {
        var t = this._map, e = "leaflet-disabled";
        gt(this._zoomInButton, e), gt(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (K(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (K(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    it.mergeOptions({
      zoomControl: !0
    }), it.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new gn(), this.addControl(this.zoomControl));
    });
    var ll = function(t) {
      return new gn(t);
    }, Hr = qt.extend({
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
        var e = "leaflet-control-scale", s = ot("div", e), u = this.options;
        return this._addScales(u, e + "-line", s), t.on(u.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), s;
      },
      onRemove: function(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(t, e, s) {
        t.metric && (this._mScale = ot("div", e, s)), t.imperial && (this._iScale = ot("div", e, s));
      },
      _update: function() {
        var t = this._map, e = t.getSize().y / 2, s = t.distance(
          t.containerPointToLatLng([0, e]),
          t.containerPointToLatLng([this.options.maxWidth, e])
        );
        this._updateScales(s);
      },
      _updateScales: function(t) {
        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function(t) {
        var e = this._getRoundNum(t), s = e < 1e3 ? e + " m" : e / 1e3 + " km";
        this._updateScale(this._mScale, s, e / t);
      },
      _updateImperial: function(t) {
        var e = t * 3.2808399, s, u, d;
        e > 5280 ? (s = e / 5280, u = this._getRoundNum(s), this._updateScale(this._iScale, u + " mi", u / s)) : (d = this._getRoundNum(e), this._updateScale(this._iScale, d + " ft", d / e));
      },
      _updateScale: function(t, e, s) {
        t.style.width = Math.round(this.options.maxWidth * s) + "px", t.innerHTML = e;
      },
      _getRoundNum: function(t) {
        var e = Math.pow(10, (Math.floor(t) + "").length - 1), s = t / e;
        return s = s >= 10 ? 10 : s >= 5 ? 5 : s >= 3 ? 3 : s >= 2 ? 2 : 1, e * s;
      }
    }), hl = function(t) {
      return new Hr(t);
    }, ul = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', vn = qt.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String|false = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (V.inlineSvg ? ul + " " : "") + "Leaflet</a>"
      },
      initialize: function(t) {
        x(this, t), this._attributions = {};
      },
      onAdd: function(t) {
        t.attributionControl = this, this._container = ot("div", "leaflet-control-attribution"), We(this._container);
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
          var s = [];
          this.options.prefix && s.push(this.options.prefix), t.length && s.push(t.join(", ")), this._container.innerHTML = s.join(' <span aria-hidden="true">|</span> ');
        }
      }
    });
    it.mergeOptions({
      attributionControl: !0
    }), it.addInitHook(function() {
      this.options.attributionControl && new vn().addTo(this);
    });
    var cl = function(t) {
      return new vn(t);
    };
    qt.Layers = Vr, qt.Zoom = gn, qt.Scale = Hr, qt.Attribution = vn, Ye.layers = al, Ye.zoom = ll, Ye.scale = hl, Ye.attribution = cl;
    var te = xt.extend({
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
    te.addTo = function(t, e) {
      return t.addHandler(e, this), this;
    };
    var fl = { Events: ht }, Wr = V.touch ? "touchstart mousedown" : "mousedown", he = kt.extend({
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
      initialize: function(t, e, s, u) {
        x(this, u), this._element = t, this._dragStartTarget = e || t, this._preventOutline = s;
      },
      // @method enable()
      // Enables the dragging ability
      enable: function() {
        this._enabled || (X(this._dragStartTarget, Wr, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (he._dragging === this && this.finishDrag(!0), ct(this._dragStartTarget, Wr, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(t) {
        if (this._enabled && (this._moved = !1, !rn(this._element, "leaflet-zoom-anim"))) {
          if (t.touches && t.touches.length !== 1) {
            he._dragging === this && this.finishDrag();
            return;
          }
          if (!(he._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (he._dragging = this, this._preventOutline && un(this._element), an(), Ue(), !this._moving)) {
            this.fire("down");
            var e = t.touches ? t.touches[0] : t, s = Dr(this._element);
            this._startPoint = new N(e.clientX, e.clientY), this._startPos = _e(this._element), this._parentScale = cn(s);
            var u = t.type === "mousedown";
            X(document, u ? "mousemove" : "touchmove", this._onMove, this), X(document, u ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      },
      _onMove: function(t) {
        if (this._enabled) {
          if (t.touches && t.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, s = new N(e.clientX, e.clientY)._subtract(this._startPoint);
          !s.x && !s.y || Math.abs(s.x) + Math.abs(s.y) < this.options.clickTolerance || (s.x /= this._parentScale.x, s.y /= this._parentScale.y, Tt(t), this._moved || (this.fire("dragstart"), this._moved = !0, K(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), K(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(s), this._moving = !0, this._lastEvent = t, this._updatePosition());
        }
      },
      _updatePosition: function() {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t), yt(this._element, this._newPos), this.fire("drag", t);
      },
      _onUp: function() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function(t) {
        gt(document.body, "leaflet-dragging"), this._lastTarget && (gt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ct(document, "mousemove touchmove", this._onMove, this), ct(document, "mouseup touchend touchcancel", this._onUp, this), ln(), Ve();
        var e = this._moved && this._moving;
        this._moving = !1, he._dragging = !1, e && this.fire("dragend", {
          noInertia: t,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
    function Yr(t, e, s) {
      var u, d = [1, 4, 2, 8], g, b, P, C, z, R, Y, Q;
      for (g = 0, R = t.length; g < R; g++)
        t[g]._code = ge(t[g], e);
      for (P = 0; P < 4; P++) {
        for (Y = d[P], u = [], g = 0, R = t.length, b = R - 1; g < R; b = g++)
          C = t[g], z = t[b], C._code & Y ? z._code & Y || (Q = Pi(z, C, Y, e, s), Q._code = ge(Q, e), u.push(Q)) : (z._code & Y && (Q = Pi(z, C, Y, e, s), Q._code = ge(Q, e), u.push(Q)), u.push(C));
        t = u;
      }
      return t;
    }
    function Gr(t, e) {
      var s, u, d, g, b, P, C, z, R;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      Vt(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var Y = D([0, 0]), Q = F(t), St = Q.getNorthWest().distanceTo(Q.getSouthWest()) * Q.getNorthEast().distanceTo(Q.getNorthWest());
      St < 1700 && (Y = yn(t));
      var Pt = t.length, Ht = [];
      for (s = 0; s < Pt; s++) {
        var Ot = D(t[s]);
        Ht.push(e.project(D([Ot.lat - Y.lat, Ot.lng - Y.lng])));
      }
      for (P = C = z = 0, s = 0, u = Pt - 1; s < Pt; u = s++)
        d = Ht[s], g = Ht[u], b = d.y * g.x - g.y * d.x, C += (d.x + g.x) * b, z += (d.y + g.y) * b, P += b * 3;
      P === 0 ? R = Ht[0] : R = [C / P, z / P];
      var Se = e.unproject(k(R));
      return D([Se.lat + Y.lat, Se.lng + Y.lng]);
    }
    function yn(t) {
      for (var e = 0, s = 0, u = 0, d = 0; d < t.length; d++) {
        var g = D(t[d]);
        e += g.lat, s += g.lng, u++;
      }
      return D([e / u, s / u]);
    }
    var dl = {
      __proto__: null,
      clipPolygon: Yr,
      polygonCenter: Gr,
      centroid: yn
    };
    function qr(t, e) {
      if (!e || !t.length)
        return t.slice();
      var s = e * e;
      return t = pl(t, s), t = ml(t, s), t;
    }
    function Xr(t, e, s) {
      return Math.sqrt(Ge(t, e, s, !0));
    }
    function _l(t, e, s) {
      return Ge(t, e, s);
    }
    function ml(t, e) {
      var s = t.length, u = typeof Uint8Array < "u" ? Uint8Array : Array, d = new u(s);
      d[0] = d[s - 1] = 1, bn(t, d, e, 0, s - 1);
      var g, b = [];
      for (g = 0; g < s; g++)
        d[g] && b.push(t[g]);
      return b;
    }
    function bn(t, e, s, u, d) {
      var g = 0, b, P, C;
      for (P = u + 1; P <= d - 1; P++)
        C = Ge(t[P], t[u], t[d], !0), C > g && (b = P, g = C);
      g > s && (e[b] = 1, bn(t, e, s, u, b), bn(t, e, s, b, d));
    }
    function pl(t, e) {
      for (var s = [t[0]], u = 1, d = 0, g = t.length; u < g; u++)
        gl(t[u], t[d]) > e && (s.push(t[u]), d = u);
      return d < g - 1 && s.push(t[g - 1]), s;
    }
    var $r;
    function Kr(t, e, s, u, d) {
      var g = u ? $r : ge(t, s), b = ge(e, s), P, C, z;
      for ($r = b; ; ) {
        if (!(g | b))
          return [t, e];
        if (g & b)
          return !1;
        P = g || b, C = Pi(t, e, P, s, d), z = ge(C, s), P === g ? (t = C, g = z) : (e = C, b = z);
      }
    }
    function Pi(t, e, s, u, d) {
      var g = e.x - t.x, b = e.y - t.y, P = u.min, C = u.max, z, R;
      return s & 8 ? (z = t.x + g * (C.y - t.y) / b, R = C.y) : s & 4 ? (z = t.x + g * (P.y - t.y) / b, R = P.y) : s & 2 ? (z = C.x, R = t.y + b * (C.x - t.x) / g) : s & 1 && (z = P.x, R = t.y + b * (P.x - t.x) / g), new N(z, R, d);
    }
    function ge(t, e) {
      var s = 0;
      return t.x < e.min.x ? s |= 1 : t.x > e.max.x && (s |= 2), t.y < e.min.y ? s |= 4 : t.y > e.max.y && (s |= 8), s;
    }
    function gl(t, e) {
      var s = e.x - t.x, u = e.y - t.y;
      return s * s + u * u;
    }
    function Ge(t, e, s, u) {
      var d = e.x, g = e.y, b = s.x - d, P = s.y - g, C = b * b + P * P, z;
      return C > 0 && (z = ((t.x - d) * b + (t.y - g) * P) / C, z > 1 ? (d = s.x, g = s.y) : z > 0 && (d += b * z, g += P * z)), b = t.x - d, P = t.y - g, u ? b * b + P * P : new N(d, g);
    }
    function Vt(t) {
      return !A(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
    }
    function Jr(t) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Vt(t);
    }
    function Qr(t, e) {
      var s, u, d, g, b, P, C, z;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      Vt(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var R = D([0, 0]), Y = F(t), Q = Y.getNorthWest().distanceTo(Y.getSouthWest()) * Y.getNorthEast().distanceTo(Y.getNorthWest());
      Q < 1700 && (R = yn(t));
      var St = t.length, Pt = [];
      for (s = 0; s < St; s++) {
        var Ht = D(t[s]);
        Pt.push(e.project(D([Ht.lat - R.lat, Ht.lng - R.lng])));
      }
      for (s = 0, u = 0; s < St - 1; s++)
        u += Pt[s].distanceTo(Pt[s + 1]) / 2;
      if (u === 0)
        z = Pt[0];
      else
        for (s = 0, g = 0; s < St - 1; s++)
          if (b = Pt[s], P = Pt[s + 1], d = b.distanceTo(P), g += d, g > u) {
            C = (g - u) / d, z = [
              P.x - C * (P.x - b.x),
              P.y - C * (P.y - b.y)
            ];
            break;
          }
      var Ot = e.unproject(k(z));
      return D([Ot.lat + R.lat, Ot.lng + R.lng]);
    }
    var vl = {
      __proto__: null,
      simplify: qr,
      pointToSegmentDistance: Xr,
      closestPointOnSegment: _l,
      clipSegment: Kr,
      _getEdgeIntersection: Pi,
      _getBitCode: ge,
      _sqClosestPointOnSegment: Ge,
      isFlat: Vt,
      _flat: Jr,
      polylineCenter: Qr
    }, xn = {
      project: function(t) {
        return new N(t.lng, t.lat);
      },
      unproject: function(t) {
        return new j(t.y, t.x);
      },
      bounds: new B([-180, -90], [180, 90])
    }, wn = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new B([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(t) {
        var e = Math.PI / 180, s = this.R, u = t.lat * e, d = this.R_MINOR / s, g = Math.sqrt(1 - d * d), b = g * Math.sin(u), P = Math.tan(Math.PI / 4 - u / 2) / Math.pow((1 - b) / (1 + b), g / 2);
        return u = -s * Math.log(Math.max(P, 1e-10)), new N(t.lng * e * s, u);
      },
      unproject: function(t) {
        for (var e = 180 / Math.PI, s = this.R, u = this.R_MINOR / s, d = Math.sqrt(1 - u * u), g = Math.exp(-t.y / s), b = Math.PI / 2 - 2 * Math.atan(g), P = 0, C = 0.1, z; P < 15 && Math.abs(C) > 1e-7; P++)
          z = d * Math.sin(b), z = Math.pow((1 - z) / (1 + z), d / 2), C = Math.PI / 2 - 2 * Math.atan(g * z) - b, b += C;
        return new j(b * e, t.x * e / s);
      }
    }, yl = {
      __proto__: null,
      LonLat: xn,
      Mercator: wn,
      SphericalMercator: J
    }, bl = l({}, q, {
      code: "EPSG:3395",
      projection: wn,
      transformation: function() {
        var t = 0.5 / (Math.PI * wn.R);
        return Z(t, 0.5, -t, 0.5);
      }()
    }), to = l({}, q, {
      code: "EPSG:4326",
      projection: xn,
      transformation: Z(1 / 180, 1, -1 / 180, 0.5)
    }), xl = l({}, W, {
      projection: xn,
      transformation: Z(1, 0, -1, 0),
      scale: function(t) {
        return Math.pow(2, t);
      },
      zoom: function(t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function(t, e) {
        var s = e.lng - t.lng, u = e.lat - t.lat;
        return Math.sqrt(s * s + u * u);
      },
      infinite: !0
    });
    W.Earth = q, W.EPSG3395 = bl, W.EPSG3857 = Et, W.EPSG900913 = be, W.EPSG4326 = to, W.Simple = xl;
    var Xt = kt.extend({
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
            var s = this.getEvents();
            e.on(s, this), this.once("remove", function() {
              e.off(s, this);
            }, this);
          }
          this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
        }
      }
    });
    it.include({
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
        for (var s in this._layers)
          t.call(e, this._layers[s]);
        return this;
      },
      _addLayers: function(t) {
        t = t ? A(t) ? t : [t] : [];
        for (var e = 0, s = t.length; e < s; e++)
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
        var t = 1 / 0, e = -1 / 0, s = this._getZoomSpan();
        for (var u in this._zoomBoundLayers) {
          var d = this._zoomBoundLayers[u].options;
          t = d.minZoom === void 0 ? t : Math.min(t, d.minZoom), e = d.maxZoom === void 0 ? e : Math.max(e, d.maxZoom);
        }
        this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, s !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    });
    var Pe = Xt.extend({
      initialize: function(t, e) {
        x(this, e), this._layers = {};
        var s, u;
        if (t)
          for (s = 0, u = t.length; s < u; s++)
            this.addLayer(t[s]);
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
        var e = Array.prototype.slice.call(arguments, 1), s, u;
        for (s in this._layers)
          u = this._layers[s], u[t] && u[t].apply(u, e);
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
        for (var s in this._layers)
          t.call(e, this._layers[s]);
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
    }), wl = function(t, e) {
      return new Pe(t, e);
    }, ie = Pe.extend({
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
        var t = new H();
        for (var e in this._layers) {
          var s = this._layers[e];
          t.extend(s.getBounds ? s.getBounds() : s.getLatLng());
        }
        return t;
      }
    }), Ll = function(t, e) {
      return new ie(t, e);
    }, Te = xt.extend({
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
        x(this, t);
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
        var s = this._getIconUrl(t);
        if (!s) {
          if (t === "icon")
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var u = this._createImg(s, e && e.tagName === "IMG" ? e : null);
        return this._setIconStyles(u, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (u.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), u;
      },
      _setIconStyles: function(t, e) {
        var s = this.options, u = s[e + "Size"];
        typeof u == "number" && (u = [u, u]);
        var d = k(u), g = k(e === "shadow" && s.shadowAnchor || s.iconAnchor || d && d.divideBy(2, !0));
        t.className = "leaflet-marker-" + e + " " + (s.className || ""), g && (t.style.marginLeft = -g.x + "px", t.style.marginTop = -g.y + "px"), d && (t.style.width = d.x + "px", t.style.height = d.y + "px");
      },
      _createImg: function(t, e) {
        return e = e || document.createElement("img"), e.src = t, e;
      },
      _getIconUrl: function(t) {
        return V.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
      }
    });
    function Pl(t) {
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
        var e = function(s, u, d) {
          var g = u.exec(s);
          return g && g[d];
        };
        return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function() {
        var t = ot("div", "leaflet-default-icon-path", document.body), e = Ne(t, "background-image") || Ne(t, "backgroundImage");
        if (document.body.removeChild(t), e = this._stripUrl(e), e)
          return e;
        var s = document.querySelector('link[href$="leaflet.css"]');
        return s ? s.href.substring(0, s.href.length - 11 - 1) : "";
      }
    }), eo = te.extend({
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
        }, this).enable(), K(t, "leaflet-marker-draggable");
      },
      removeHooks: function() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && gt(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(t) {
        var e = this._marker, s = e._map, u = this._marker.options.autoPanSpeed, d = this._marker.options.autoPanPadding, g = _e(e._icon), b = s.getPixelBounds(), P = s.getPixelOrigin(), C = U(
          b.min._subtract(P).add(d),
          b.max._subtract(P).subtract(d)
        );
        if (!C.contains(g)) {
          var z = k(
            (Math.max(C.max.x, g.x) - C.max.x) / (b.max.x - C.max.x) - (Math.min(C.min.x, g.x) - C.min.x) / (b.min.x - C.min.x),
            (Math.max(C.max.y, g.y) - C.max.y) / (b.max.y - C.max.y) - (Math.min(C.min.y, g.y) - C.min.y) / (b.min.y - C.min.y)
          ).multiplyBy(u);
          s.panBy(z, { animate: !1 }), this._draggable._newPos._add(z), this._draggable._startPos._add(z), yt(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = _t(this._adjustPan.bind(this, t));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(t) {
        this._marker.options.autoPan && (Lt(this._panRequest), this._panRequest = _t(this._adjustPan.bind(this, t)));
      },
      _onDrag: function(t) {
        var e = this._marker, s = e._shadow, u = _e(e._icon), d = e._map.layerPointToLatLng(u);
        s && yt(s, u), e._latlng = d, t.latlng = d, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function(t) {
        Lt(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      }
    }), Ti = Xt.extend({
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
        x(this, e), this._latlng = D(t);
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
        return this._latlng = D(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
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
        var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), s = t.icon.createIcon(this._icon), u = !1;
        s !== this._icon && (this._icon && this._removeIcon(), u = !0, t.title && (s.title = t.title), s.tagName === "IMG" && (s.alt = t.alt || "")), K(s, e), t.keyboard && (s.tabIndex = "0", s.setAttribute("role", "button")), this._icon = s, t.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && X(s, "focus", this._panOnFocus, this);
        var d = t.icon.createShadow(this._shadow), g = !1;
        d !== this._shadow && (this._removeShadow(), g = !0), d && (K(d, e), d.alt = ""), this._shadow = d, t.opacity < 1 && this._updateOpacity(), u && this.getPane().appendChild(this._icon), this._initInteraction(), d && g && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && ct(this._icon, "focus", this._panOnFocus, this), dt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && dt(this._shadow), this._shadow = null;
      },
      _setPos: function(t) {
        this._icon && yt(this._icon, t), this._shadow && yt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(e);
      },
      _initInteraction: function() {
        if (this.options.interactive && (K(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), eo)) {
          var t = this.options.draggable;
          this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new eo(this), t && this.dragging.enable();
        }
      },
      // @method setOpacity(opacity: Number): this
      // Changes the opacity of the marker.
      setOpacity: function(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var t = this.options.opacity;
        this._icon && Ut(this._icon, t), this._shadow && Ut(this._shadow, t);
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
          var e = this.options.icon.options, s = e.iconSize ? k(e.iconSize) : k(0, 0), u = e.iconAnchor ? k(e.iconAnchor) : k(0, 0);
          t.panInside(this._latlng, {
            paddingTopLeft: u,
            paddingBottomRight: s.subtract(u)
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
    function Tl(t, e) {
      return new Ti(t, e);
    }
    var ue = Xt.extend({
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
        return x(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
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
    }), Ci = ue.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(t, e) {
        x(this, e), this._latlng = D(t), this._radius = this.options.radius;
      },
      // @method setLatLng(latLng: LatLng): this
      // Sets the position of a circle marker to a new location.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = D(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
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
        var t = this._radius, e = this._radiusY || t, s = this._clickTolerance(), u = [t + s, e + s];
        this._pxBounds = new B(this._point.subtract(u), this._point.add(u));
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
    function Cl(t, e) {
      return new Ci(t, e);
    }
    var Ln = Ci.extend({
      initialize: function(t, e, s) {
        if (typeof e == "number" && (e = l({}, s, { radius: e })), x(this, e), this._latlng = D(t), isNaN(this.options.radius))
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
        return new H(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: ue.prototype.setStyle,
      _project: function() {
        var t = this._latlng.lng, e = this._latlng.lat, s = this._map, u = s.options.crs;
        if (u.distance === q.distance) {
          var d = Math.PI / 180, g = this._mRadius / q.R / d, b = s.project([e + g, t]), P = s.project([e - g, t]), C = b.add(P).divideBy(2), z = s.unproject(C).lat, R = Math.acos((Math.cos(g * d) - Math.sin(e * d) * Math.sin(z * d)) / (Math.cos(e * d) * Math.cos(z * d))) / d;
          (isNaN(R) || R === 0) && (R = g / Math.cos(Math.PI / 180 * e)), this._point = C.subtract(s.getPixelOrigin()), this._radius = isNaN(R) ? 0 : C.x - s.project([z, t - R]).x, this._radiusY = C.y - b.y;
        } else {
          var Y = u.unproject(u.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = s.latLngToLayerPoint(this._latlng), this._radius = this._point.x - s.latLngToLayerPoint(Y).x;
        }
        this._updateBounds();
      }
    });
    function kl(t, e, s) {
      return new Ln(t, e, s);
    }
    var ne = ue.extend({
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
        x(this, e), this._setLatLngs(t);
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
        for (var e = 1 / 0, s = null, u = Ge, d, g, b = 0, P = this._parts.length; b < P; b++)
          for (var C = this._parts[b], z = 1, R = C.length; z < R; z++) {
            d = C[z - 1], g = C[z];
            var Y = u(t, d, g, !0);
            Y < e && (e = Y, s = u(t, d, g));
          }
        return s && (s.distance = Math.sqrt(e)), s;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Qr(this._defaultShape(), this._map.options.crs);
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
        return e = e || this._defaultShape(), t = D(t), e.push(t), this._bounds.extend(t), this.redraw();
      },
      _setLatLngs: function(t) {
        this._bounds = new H(), this._latlngs = this._convertLatLngs(t);
      },
      _defaultShape: function() {
        return Vt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
      _convertLatLngs: function(t) {
        for (var e = [], s = Vt(t), u = 0, d = t.length; u < d; u++)
          s ? (e[u] = D(t[u]), this._bounds.extend(e[u])) : e[u] = this._convertLatLngs(t[u]);
        return e;
      },
      _project: function() {
        var t = new B();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
      },
      _updateBounds: function() {
        var t = this._clickTolerance(), e = new N(t, t);
        this._rawPxBounds && (this._pxBounds = new B([
          this._rawPxBounds.min.subtract(e),
          this._rawPxBounds.max.add(e)
        ]));
      },
      // recursively turns latlngs into a set of rings with projected coordinates
      _projectLatlngs: function(t, e, s) {
        var u = t[0] instanceof j, d = t.length, g, b;
        if (u) {
          for (b = [], g = 0; g < d; g++)
            b[g] = this._map.latLngToLayerPoint(t[g]), s.extend(b[g]);
          e.push(b);
        } else
          for (g = 0; g < d; g++)
            this._projectLatlngs(t[g], e, s);
      },
      // clip polyline by renderer bounds so that we have less to render for performance
      _clipPoints: function() {
        var t = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var e = this._parts, s, u, d, g, b, P, C;
          for (s = 0, d = 0, g = this._rings.length; s < g; s++)
            for (C = this._rings[s], u = 0, b = C.length; u < b - 1; u++)
              P = Kr(C[u], C[u + 1], t, u, !0), P && (e[d] = e[d] || [], e[d].push(P[0]), (P[1] !== C[u + 1] || u === b - 2) && (e[d].push(P[1]), d++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var t = this._parts, e = this.options.smoothFactor, s = 0, u = t.length; s < u; s++)
          t[s] = qr(t[s], e);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t, e) {
        var s, u, d, g, b, P, C = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (s = 0, g = this._parts.length; s < g; s++)
          for (P = this._parts[s], u = 0, b = P.length, d = b - 1; u < b; d = u++)
            if (!(!e && u === 0) && Xr(t, P[d], P[u]) <= C)
              return !0;
        return !1;
      }
    });
    function Ml(t, e) {
      return new ne(t, e);
    }
    ne._flat = Jr;
    var Ce = ne.extend({
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
        return Gr(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function(t) {
        var e = ne.prototype._convertLatLngs.call(this, t), s = e.length;
        return s >= 2 && e[0] instanceof j && e[0].equals(e[s - 1]) && e.pop(), e;
      },
      _setLatLngs: function(t) {
        ne.prototype._setLatLngs.call(this, t), Vt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return Vt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var t = this._renderer._bounds, e = this.options.weight, s = new N(e, e);
        if (t = new B(t.min.subtract(s), t.max.add(s)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var u = 0, d = this._rings.length, g; u < d; u++)
            g = Yr(this._rings[u], t, !0), g.length && this._parts.push(g);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        var e = !1, s, u, d, g, b, P, C, z;
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (g = 0, C = this._parts.length; g < C; g++)
          for (s = this._parts[g], b = 0, z = s.length, P = z - 1; b < z; P = b++)
            u = s[b], d = s[P], u.y > t.y != d.y > t.y && t.x < (d.x - u.x) * (t.y - u.y) / (d.y - u.y) + u.x && (e = !e);
        return e || ne.prototype._containsPoint.call(this, t, !0);
      }
    });
    function Sl(t, e) {
      return new Ce(t, e);
    }
    var re = ie.extend({
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
        x(this, e), this._layers = {}, t && this.addData(t);
      },
      // @method addData( <GeoJSON> data ): this
      // Adds a GeoJSON object to the layer.
      addData: function(t) {
        var e = A(t) ? t : t.features, s, u, d;
        if (e) {
          for (s = 0, u = e.length; s < u; s++)
            d = e[s], (d.geometries || d.geometry || d.features || d.coordinates) && this.addData(d);
          return this;
        }
        var g = this.options;
        if (g.filter && !g.filter(t))
          return this;
        var b = ki(t, g);
        return b ? (b.feature = zi(t), b.defaultOptions = b.options, this.resetStyle(b), g.onEachFeature && g.onEachFeature(t, b), this.addLayer(b)) : this;
      },
      // @method resetStyle( <Path> layer? ): this
      // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
      // If `layer` is omitted, the style of all features in the current layer is reset.
      resetStyle: function(t) {
        return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = l({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
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
    function ki(t, e) {
      var s = t.type === "Feature" ? t.geometry : t, u = s ? s.coordinates : null, d = [], g = e && e.pointToLayer, b = e && e.coordsToLatLng || Pn, P, C, z, R;
      if (!u && !s)
        return null;
      switch (s.type) {
        case "Point":
          return P = b(u), io(g, t, P, e);
        case "MultiPoint":
          for (z = 0, R = u.length; z < R; z++)
            P = b(u[z]), d.push(io(g, t, P, e));
          return new ie(d);
        case "LineString":
        case "MultiLineString":
          return C = Mi(u, s.type === "LineString" ? 0 : 1, b), new ne(C, e);
        case "Polygon":
        case "MultiPolygon":
          return C = Mi(u, s.type === "Polygon" ? 1 : 2, b), new Ce(C, e);
        case "GeometryCollection":
          for (z = 0, R = s.geometries.length; z < R; z++) {
            var Y = ki({
              geometry: s.geometries[z],
              type: "Feature",
              properties: t.properties
            }, e);
            Y && d.push(Y);
          }
          return new ie(d);
        case "FeatureCollection":
          for (z = 0, R = s.features.length; z < R; z++) {
            var Q = ki(s.features[z], e);
            Q && d.push(Q);
          }
          return new ie(d);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function io(t, e, s, u) {
      return t ? t(e, s) : new Ti(s, u && u.markersInheritOptions && u);
    }
    function Pn(t) {
      return new j(t[1], t[0], t[2]);
    }
    function Mi(t, e, s) {
      for (var u = [], d = 0, g = t.length, b; d < g; d++)
        b = e ? Mi(t[d], e - 1, s) : (s || Pn)(t[d]), u.push(b);
      return u;
    }
    function Tn(t, e) {
      return t = D(t), t.alt !== void 0 ? [v(t.lng, e), v(t.lat, e), v(t.alt, e)] : [v(t.lng, e), v(t.lat, e)];
    }
    function Si(t, e, s, u) {
      for (var d = [], g = 0, b = t.length; g < b; g++)
        d.push(e ? Si(t[g], Vt(t[g]) ? 0 : e - 1, s, u) : Tn(t[g], u));
      return !e && s && d.length > 0 && d.push(d[0].slice()), d;
    }
    function ke(t, e) {
      return t.feature ? l({}, t.feature, { geometry: e }) : zi(e);
    }
    function zi(t) {
      return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
        type: "Feature",
        properties: {},
        geometry: t
      };
    }
    var Cn = {
      toGeoJSON: function(t) {
        return ke(this, {
          type: "Point",
          coordinates: Tn(this.getLatLng(), t)
        });
      }
    };
    Ti.include(Cn), Ln.include(Cn), Ci.include(Cn), ne.include({
      toGeoJSON: function(t) {
        var e = !Vt(this._latlngs), s = Si(this._latlngs, e ? 1 : 0, !1, t);
        return ke(this, {
          type: (e ? "Multi" : "") + "LineString",
          coordinates: s
        });
      }
    }), Ce.include({
      toGeoJSON: function(t) {
        var e = !Vt(this._latlngs), s = e && !Vt(this._latlngs[0]), u = Si(this._latlngs, s ? 2 : e ? 1 : 0, !0, t);
        return e || (u = [u]), ke(this, {
          type: (s ? "Multi" : "") + "Polygon",
          coordinates: u
        });
      }
    }), Pe.include({
      toMultiPoint: function(t) {
        var e = [];
        return this.eachLayer(function(s) {
          e.push(s.toGeoJSON(t).geometry.coordinates);
        }), ke(this, {
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
        var s = e === "GeometryCollection", u = [];
        return this.eachLayer(function(d) {
          if (d.toGeoJSON) {
            var g = d.toGeoJSON(t);
            if (s)
              u.push(g.geometry);
            else {
              var b = zi(g);
              b.type === "FeatureCollection" ? u.push.apply(u, b.features) : u.push(b);
            }
          }
        }), s ? ke(this, {
          geometries: u,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: u
        };
      }
    });
    function no(t, e) {
      return new re(t, e);
    }
    var zl = no, Ei = Xt.extend({
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
      initialize: function(t, e, s) {
        this._url = t, this._bounds = F(e), x(this, s);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (K(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        dt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
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
        return this._map && we(this._image), this;
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
        return this._bounds = F(t), this._map && this._reset(), this;
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
        var t = this._url.tagName === "IMG", e = this._image = t ? this._url : ot("img");
        if (K(e, "leaflet-image-layer"), this._zoomAnimated && K(e, "leaflet-zoom-animated"), this.options.className && K(e, this.options.className), e.onselectstart = p, e.onmousemove = p, e.onload = h(this.fire, this, "load"), e.onerror = h(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
          this._url = e.src;
          return;
        }
        e.src = this._url, e.alt = this.options.alt;
      },
      _animateZoom: function(t) {
        var e = this._map.getZoomScale(t.zoom), s = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        de(this._image, s, e);
      },
      _reset: function() {
        var t = this._image, e = new B(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), s = e.getSize();
        yt(t, e.min), t.style.width = s.x + "px", t.style.height = s.y + "px";
      },
      _updateOpacity: function() {
        Ut(this._image, this.options.opacity);
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
    }), El = function(t, e, s) {
      return new Ei(t, e, s);
    }, ro = Ei.extend({
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
        var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : ot("video");
        if (K(e, "leaflet-image-layer"), this._zoomAnimated && K(e, "leaflet-zoom-animated"), this.options.className && K(e, this.options.className), e.onselectstart = p, e.onmousemove = p, e.onloadeddata = h(this.fire, this, "load"), t) {
          for (var s = e.getElementsByTagName("source"), u = [], d = 0; d < s.length; d++)
            u.push(s[d].src);
          this._url = s.length > 0 ? u : [e.src];
          return;
        }
        A(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
        for (var g = 0; g < this._url.length; g++) {
          var b = ot("source");
          b.src = this._url[g], e.appendChild(b);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function Ol(t, e, s) {
      return new ro(t, e, s);
    }
    var oo = Ei.extend({
      _initImage: function() {
        var t = this._image = this._url;
        K(t, "leaflet-image-layer"), this._zoomAnimated && K(t, "leaflet-zoom-animated"), this.options.className && K(t, this.options.className), t.onselectstart = p, t.onmousemove = p;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function Il(t, e, s) {
      return new oo(t, e, s);
    }
    var ee = Xt.extend({
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
        t && (t instanceof j || A(t)) ? (this._latlng = D(t), x(this, e)) : (x(this, t), this._source = e), this.options.content && (this._content = this.options.content);
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
        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && Ut(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && Ut(this._container, 1), this.bringToFront(), this.options.interactive && (K(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function(t) {
        t._fadeAnimated ? (Ut(this._container, 0), this._removeTimeout = setTimeout(h(dt, void 0, this._container), 200)) : dt(this._container), this.options.interactive && (gt(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
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
        return this._latlng = D(t), this._map && (this._updatePosition(), this._adjustPan()), this;
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
        return this._map && we(this._container), this;
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
        if (e instanceof ie) {
          e = null;
          var s = this._source._layers;
          for (var u in s)
            if (s[u]._map) {
              e = s[u];
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
          var t = this._map.latLngToLayerPoint(this._latlng), e = k(this.options.offset), s = this._getAnchor();
          this._zoomAnimated ? yt(this._container, t.add(s)) : e = e.add(t).add(s);
          var u = this._containerBottom = -e.y, d = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
          this._container.style.bottom = u + "px", this._container.style.left = d + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    });
    it.include({
      _initOverlay: function(t, e, s, u) {
        var d = e;
        return d instanceof t || (d = new t(u).setContent(e)), s && d.setLatLng(s), d;
      }
    }), Xt.include({
      _initOverlay: function(t, e, s, u) {
        var d = s;
        return d instanceof t ? (x(d, u), d._source = this) : (d = e && !u ? e : new t(u, this), d.setContent(s)), d;
      }
    });
    var Oi = ee.extend({
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
        return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, ee.prototype.openOn.call(this, t);
      },
      onAdd: function(t) {
        ee.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof ue || this._source.on("preclick", me));
      },
      onRemove: function(t) {
        ee.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof ue || this._source.off("preclick", me));
      },
      getEvents: function() {
        var t = ee.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      },
      _initLayout: function() {
        var t = "leaflet-popup", e = this._container = ot(
          "div",
          t + " " + (this.options.className || "") + " leaflet-zoom-animated"
        ), s = this._wrapper = ot("div", t + "-content-wrapper", e);
        if (this._contentNode = ot("div", t + "-content", s), We(e), mn(this._contentNode), X(e, "contextmenu", me), this._tipContainer = ot("div", t + "-tip-container", e), this._tip = ot("div", t + "-tip", this._tipContainer), this.options.closeButton) {
          var u = this._closeButton = ot("a", t + "-close-button", e);
          u.setAttribute("role", "button"), u.setAttribute("aria-label", "Close popup"), u.href = "#close", u.innerHTML = '<span aria-hidden="true">&#215;</span>', X(u, "click", function(d) {
            Tt(d), this.close();
          }, this);
        }
      },
      _updateLayout: function() {
        var t = this._contentNode, e = t.style;
        e.width = "", e.whiteSpace = "nowrap";
        var s = t.offsetWidth;
        s = Math.min(s, this.options.maxWidth), s = Math.max(s, this.options.minWidth), e.width = s + 1 + "px", e.whiteSpace = "", e.height = "";
        var u = t.offsetHeight, d = this.options.maxHeight, g = "leaflet-popup-scrolled";
        d && u > d ? (e.height = d + "px", K(t, g)) : gt(t, g), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), s = this._getAnchor();
        yt(this._container, e.add(s));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = !1;
            return;
          }
          var t = this._map, e = parseInt(Ne(this._container, "marginBottom"), 10) || 0, s = this._container.offsetHeight + e, u = this._containerWidth, d = new N(this._containerLeft, -s - this._containerBottom);
          d._add(_e(this._container));
          var g = t.layerPointToContainerPoint(d), b = k(this.options.autoPanPadding), P = k(this.options.autoPanPaddingTopLeft || b), C = k(this.options.autoPanPaddingBottomRight || b), z = t.getSize(), R = 0, Y = 0;
          g.x + u + C.x > z.x && (R = g.x + u - z.x + C.x), g.x - R - P.x < 0 && (R = g.x - P.x), g.y + s + C.y > z.y && (Y = g.y + s - z.y + C.y), g.y - Y - P.y < 0 && (Y = g.y - P.y), (R || Y) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([R, Y]));
        }
      },
      _getAnchor: function() {
        return k(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), Bl = function(t, e) {
      return new Oi(t, e);
    };
    it.mergeOptions({
      closePopupOnClick: !0
    }), it.include({
      // @method openPopup(popup: Popup): this
      // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
      // @alternative
      // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
      // Creates a popup with the specified content and options and opens it in the given point on a map.
      openPopup: function(t, e, s) {
        return this._initOverlay(Oi, t, e, s).openOn(this), this;
      },
      // @method closePopup(popup?: Popup): this
      // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
      closePopup: function(t) {
        return t = arguments.length ? t : this._popup, t && t.close(), this;
      }
    }), Xt.include({
      // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
      // Binds a popup to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindPopup: function(t, e) {
        return this._popup = this._initOverlay(Oi, this._popup, t, e), this._popupHandlersAdded || (this.on({
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
        return this._popup && (this instanceof ie || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
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
    var Ii = ee.extend({
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
        ee.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      },
      onRemove: function(t) {
        ee.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      },
      getEvents: function() {
        var t = ee.prototype.getEvents.call(this);
        return this.options.permanent || (t.preclick = this.close), t;
      },
      _initLayout: function() {
        var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = ot("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + f(this));
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(t) {
        var e, s, u = this._map, d = this._container, g = u.latLngToContainerPoint(u.getCenter()), b = u.layerPointToContainerPoint(t), P = this.options.direction, C = d.offsetWidth, z = d.offsetHeight, R = k(this.options.offset), Y = this._getAnchor();
        P === "top" ? (e = C / 2, s = z) : P === "bottom" ? (e = C / 2, s = 0) : P === "center" ? (e = C / 2, s = z / 2) : P === "right" ? (e = 0, s = z / 2) : P === "left" ? (e = C, s = z / 2) : b.x < g.x ? (P = "right", e = 0, s = z / 2) : (P = "left", e = C + (R.x + Y.x) * 2, s = z / 2), t = t.subtract(k(e, s, !0)).add(R).add(Y), gt(d, "leaflet-tooltip-right"), gt(d, "leaflet-tooltip-left"), gt(d, "leaflet-tooltip-top"), gt(d, "leaflet-tooltip-bottom"), K(d, "leaflet-tooltip-" + P), yt(d, t);
      },
      _updatePosition: function() {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      },
      setOpacity: function(t) {
        this.options.opacity = t, this._container && Ut(this._container, t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
        this._setPosition(e);
      },
      _getAnchor: function() {
        return k(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), Al = function(t, e) {
      return new Ii(t, e);
    };
    it.include({
      // @method openTooltip(tooltip: Tooltip): this
      // Opens the specified tooltip.
      // @alternative
      // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
      // Creates a tooltip with the specified content and options and open it.
      openTooltip: function(t, e, s) {
        return this._initOverlay(Ii, t, e, s).openOn(this), this;
      },
      // @method closeTooltip(tooltip: Tooltip): this
      // Closes the tooltip given as parameter.
      closeTooltip: function(t) {
        return t.close(), this;
      }
    }), Xt.include({
      // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
      // Binds a tooltip to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindTooltip: function(t, e) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ii, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      // @method unbindTooltip(): this
      // Removes the tooltip previously bound with `bindTooltip`.
      unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function(t) {
        if (!(!t && this._tooltipHandlersAdded)) {
          var e = t ? "off" : "on", s = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
          this._tooltip.options.permanent ? s.add = this._openTooltip : (s.mouseover = this._openTooltip, s.mouseout = this.closeTooltip, s.click = this._openTooltip, this._map ? this._addFocusListeners() : s.add = this._addFocusListeners), this._tooltip.options.sticky && (s.mousemove = this._moveTooltip), this[e](s), this._tooltipHandlersAdded = !t;
        }
      },
      // @method openTooltip(latlng?: LatLng): this
      // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
      openTooltip: function(t) {
        return this._tooltip && (this instanceof ie || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
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
        e && (X(e, "focus", function() {
          this._tooltip._source = t, this.openTooltip();
        }, this), X(e, "blur", this.closeTooltip, this));
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
        var e = t.latlng, s, u;
        this._tooltip.options.sticky && t.originalEvent && (s = this._map.mouseEventToContainerPoint(t.originalEvent), u = this._map.containerPointToLayerPoint(s), e = this._map.layerPointToLatLng(u)), this._tooltip.setLatLng(e);
      }
    });
    var so = Te.extend({
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
        var e = t && t.tagName === "DIV" ? t : document.createElement("div"), s = this.options;
        if (s.html instanceof Element ? (yi(e), e.appendChild(s.html)) : e.innerHTML = s.html !== !1 ? s.html : "", s.bgPos) {
          var u = k(s.bgPos);
          e.style.backgroundPosition = -u.x + "px " + -u.y + "px";
        }
        return this._setIconStyles(e, "icon"), e;
      },
      createShadow: function() {
        return null;
      }
    });
    function Zl(t) {
      return new so(t);
    }
    Te.Default = qe;
    var Xe = Xt.extend({
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
        updateWhenIdle: V.mobile,
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
        x(this, t);
      },
      onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      },
      beforeAdd: function(t) {
        t._addZoomLimit(this);
      },
      onRemove: function(t) {
        this._removeAllTiles(), dt(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      // @method bringToFront: this
      // Brings the tile layer to the top of all tile layers.
      bringToFront: function() {
        return this._map && (we(this._container), this._setAutoZIndex(Math.max)), this;
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
        return t instanceof N ? t : new N(t, t);
      },
      _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(t) {
        for (var e = this.getPane().children, s = -t(-1 / 0, 1 / 0), u = 0, d = e.length, g; u < d; u++)
          g = e[u].style.zIndex, e[u] !== this._container && g && (s = t(s, +g));
        isFinite(s) && (this.options.zIndex = s + t(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !V.ielt9) {
          Ut(this._container, this.options.opacity);
          var t = +/* @__PURE__ */ new Date(), e = !1, s = !1;
          for (var u in this._tiles) {
            var d = this._tiles[u];
            if (!(!d.current || !d.loaded)) {
              var g = Math.min(1, (t - d.loaded) / 200);
              Ut(d.el, g), g < 1 ? e = !0 : (d.active ? s = !0 : this._onOpaqueTile(d), d.active = !0);
            }
          }
          s && !this._noPrune && this._pruneTiles(), e && (Lt(this._fadeFrame), this._fadeFrame = _t(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: p,
      _initContainer: function() {
        this._container || (this._container = ot("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var t = this._tileZoom, e = this.options.maxZoom;
        if (t !== void 0) {
          for (var s in this._levels)
            s = Number(s), this._levels[s].el.children.length || s === t ? (this._levels[s].el.style.zIndex = e - Math.abs(t - s), this._onUpdateLevel(s)) : (dt(this._levels[s].el), this._removeTilesAtZoom(s), this._onRemoveLevel(s), delete this._levels[s]);
          var u = this._levels[t], d = this._map;
          return u || (u = this._levels[t] = {}, u.el = ot("div", "leaflet-tile-container leaflet-zoom-animated", this._container), u.el.style.zIndex = e, u.origin = d.project(d.unproject(d.getPixelOrigin()), t).round(), u.zoom = t, this._setZoomTransform(u, d.getCenter(), d.getZoom()), p(u.el.offsetWidth), this._onCreateLevel(u)), this._level = u, u;
        }
      },
      _onUpdateLevel: p,
      _onRemoveLevel: p,
      _onCreateLevel: p,
      _pruneTiles: function() {
        if (this._map) {
          var t, e, s = this._map.getZoom();
          if (s > this.options.maxZoom || s < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (t in this._tiles)
            e = this._tiles[t], e.retain = e.current;
          for (t in this._tiles)
            if (e = this._tiles[t], e.current && !e.active) {
              var u = e.coords;
              this._retainParent(u.x, u.y, u.z, u.z - 5) || this._retainChildren(u.x, u.y, u.z, u.z + 2);
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
          dt(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
        this._removeAllTiles(), this._tileZoom = void 0;
      },
      _retainParent: function(t, e, s, u) {
        var d = Math.floor(t / 2), g = Math.floor(e / 2), b = s - 1, P = new N(+d, +g);
        P.z = +b;
        var C = this._tileCoordsToKey(P), z = this._tiles[C];
        return z && z.active ? (z.retain = !0, !0) : (z && z.loaded && (z.retain = !0), b > u ? this._retainParent(d, g, b, u) : !1);
      },
      _retainChildren: function(t, e, s, u) {
        for (var d = 2 * t; d < 2 * t + 2; d++)
          for (var g = 2 * e; g < 2 * e + 2; g++) {
            var b = new N(d, g);
            b.z = s + 1;
            var P = this._tileCoordsToKey(b), C = this._tiles[P];
            if (C && C.active) {
              C.retain = !0;
              continue;
            } else C && C.loaded && (C.retain = !0);
            s + 1 < u && this._retainChildren(d, g, s + 1, u);
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
      _setView: function(t, e, s, u) {
        var d = Math.round(e);
        this.options.maxZoom !== void 0 && d > this.options.maxZoom || this.options.minZoom !== void 0 && d < this.options.minZoom ? d = void 0 : d = this._clampZoom(d);
        var g = this.options.updateWhenZooming && d !== this._tileZoom;
        (!u || g) && (this._tileZoom = d, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), d !== void 0 && this._update(t), s || this._pruneTiles(), this._noPrune = !!s), this._setZoomTransforms(t, e);
      },
      _setZoomTransforms: function(t, e) {
        for (var s in this._levels)
          this._setZoomTransform(this._levels[s], t, e);
      },
      _setZoomTransform: function(t, e, s) {
        var u = this._map.getZoomScale(s, t.zoom), d = t.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(e, s)).round();
        V.any3d ? de(t.el, d, u) : yt(t.el, d);
      },
      _resetGrid: function() {
        var t = this._map, e = t.options.crs, s = this._tileSize = this.getTileSize(), u = this._tileZoom, d = this._map.getPixelWorldBounds(this._tileZoom);
        d && (this._globalTileRange = this._pxBoundsToTileRange(d)), this._wrapX = e.wrapLng && !this.options.noWrap && [
          Math.floor(t.project([0, e.wrapLng[0]], u).x / s.x),
          Math.ceil(t.project([0, e.wrapLng[1]], u).x / s.y)
        ], this._wrapY = e.wrapLat && !this.options.noWrap && [
          Math.floor(t.project([e.wrapLat[0], 0], u).y / s.x),
          Math.ceil(t.project([e.wrapLat[1], 0], u).y / s.y)
        ];
      },
      _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function(t) {
        var e = this._map, s = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), u = e.getZoomScale(s, this._tileZoom), d = e.project(t, this._tileZoom).floor(), g = e.getSize().divideBy(u * 2);
        return new B(d.subtract(g), d.add(g));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(t) {
        var e = this._map;
        if (e) {
          var s = this._clampZoom(e.getZoom());
          if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
            var u = this._getTiledPixelBounds(t), d = this._pxBoundsToTileRange(u), g = d.getCenter(), b = [], P = this.options.keepBuffer, C = new B(
              d.getBottomLeft().subtract([P, -P]),
              d.getTopRight().add([P, -P])
            );
            if (!(isFinite(d.min.x) && isFinite(d.min.y) && isFinite(d.max.x) && isFinite(d.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var z in this._tiles) {
              var R = this._tiles[z].coords;
              (R.z !== this._tileZoom || !C.contains(new N(R.x, R.y))) && (this._tiles[z].current = !1);
            }
            if (Math.abs(s - this._tileZoom) > 1) {
              this._setView(t, s);
              return;
            }
            for (var Y = d.min.y; Y <= d.max.y; Y++)
              for (var Q = d.min.x; Q <= d.max.x; Q++) {
                var St = new N(Q, Y);
                if (St.z = this._tileZoom, !!this._isValidTile(St)) {
                  var Pt = this._tiles[this._tileCoordsToKey(St)];
                  Pt ? Pt.current = !0 : b.push(St);
                }
              }
            if (b.sort(function(Ot, Se) {
              return Ot.distanceTo(g) - Se.distanceTo(g);
            }), b.length !== 0) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var Ht = document.createDocumentFragment();
              for (Q = 0; Q < b.length; Q++)
                this._addTile(b[Q], Ht);
              this._level.el.appendChild(Ht);
            }
          }
        }
      },
      _isValidTile: function(t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var s = this._globalTileRange;
          if (!e.wrapLng && (t.x < s.min.x || t.x > s.max.x) || !e.wrapLat && (t.y < s.min.y || t.y > s.max.y))
            return !1;
        }
        if (!this.options.bounds)
          return !0;
        var u = this._tileCoordsToBounds(t);
        return F(this.options.bounds).overlaps(u);
      },
      _keyToBounds: function(t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function(t) {
        var e = this._map, s = this.getTileSize(), u = t.scaleBy(s), d = u.add(s), g = e.unproject(u, t.z), b = e.unproject(d, t.z);
        return [g, b];
      },
      // converts tile coordinates to its geographical bounds
      _tileCoordsToBounds: function(t) {
        var e = this._tileCoordsToNwSe(t), s = new H(e[0], e[1]);
        return this.options.noWrap || (s = this._map.wrapLatLngBounds(s)), s;
      },
      // converts tile coordinates to key for the tile cache
      _tileCoordsToKey: function(t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      // converts tile cache key to coordinates
      _keyToTileCoords: function(t) {
        var e = t.split(":"), s = new N(+e[0], +e[1]);
        return s.z = +e[2], s;
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        e && (dt(e.el), delete this._tiles[t], this.fire("tileunload", {
          tile: e.el,
          coords: this._keyToTileCoords(t)
        }));
      },
      _initTile: function(t) {
        K(t, "leaflet-tile");
        var e = this.getTileSize();
        t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = p, t.onmousemove = p, V.ielt9 && this.options.opacity < 1 && Ut(t, this.options.opacity);
      },
      _addTile: function(t, e) {
        var s = this._getTilePos(t), u = this._tileCoordsToKey(t), d = this.createTile(this._wrapCoords(t), h(this._tileReady, this, t));
        this._initTile(d), this.createTile.length < 2 && _t(h(this._tileReady, this, t, null, d)), yt(d, s), this._tiles[u] = {
          el: d,
          coords: t,
          current: !0
        }, e.appendChild(d), this.fire("tileloadstart", {
          tile: d,
          coords: t
        });
      },
      _tileReady: function(t, e, s) {
        e && this.fire("tileerror", {
          error: e,
          tile: s,
          coords: t
        });
        var u = this._tileCoordsToKey(t);
        s = this._tiles[u], s && (s.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Ut(s.el, 0), Lt(this._fadeFrame), this._fadeFrame = _t(this._updateOpacity, this)) : (s.active = !0, this._pruneTiles()), e || (K(s.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: s.el,
          coords: t
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), V.ielt9 || !this._map._fadeAnimated ? _t(this._pruneTiles, this) : setTimeout(h(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(t) {
        var e = new N(
          this._wrapX ? m(t.x, this._wrapX) : t.x,
          this._wrapY ? m(t.y, this._wrapY) : t.y
        );
        return e.z = t.z, e;
      },
      _pxBoundsToTileRange: function(t) {
        var e = this.getTileSize();
        return new B(
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
    function Dl(t) {
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
        this._url = t, e = x(this, e), e.detectRetina && V.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
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
        var s = document.createElement("img");
        return X(s, "load", h(this._tileOnLoad, this, e, s)), X(s, "error", h(this._tileOnError, this, e, s)), (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (s.referrerPolicy = this.options.referrerPolicy), s.alt = "", s.src = this.getTileUrl(t), s;
      },
      // @section Extension methods
      // @uninheritable
      // Layers extending `TileLayer` might reimplement the following method.
      // @method getTileUrl(coords: Object): String
      // Called only internally, returns the URL for a tile given its coordinates.
      // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
      getTileUrl: function(t) {
        var e = {
          r: V.retina ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var s = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = s), e["-y"] = s;
        }
        return I(this._url, l(e, this.options));
      },
      _tileOnLoad: function(t, e) {
        V.ielt9 ? setTimeout(h(t, this, null, e), 0) : t(null, e);
      },
      _tileOnError: function(t, e, s) {
        var u = this.options.errorTileUrl;
        u && e.getAttribute("src") !== u && (e.src = u), t(s, e);
      },
      _onTileRemove: function(t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var t = this._tileZoom, e = this.options.maxZoom, s = this.options.zoomReverse, u = this.options.zoomOffset;
        return s && (t = e - t), t + u;
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
            e.src = S;
            var s = this._tiles[t].coords;
            dt(e), delete this._tiles[t], this.fire("tileabort", {
              tile: e,
              coords: s
            });
          }
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        if (e)
          return e.el.setAttribute("src", S), Xe.prototype._removeTile.call(this, t);
      },
      _tileReady: function(t, e, s) {
        if (!(!this._map || s && s.getAttribute("src") === S))
          return Xe.prototype._tileReady.call(this, t, e, s);
      }
    });
    function ao(t, e) {
      return new Me(t, e);
    }
    var lo = Me.extend({
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
        var s = l({}, this.defaultWmsParams);
        for (var u in e)
          u in this.options || (s[u] = e[u]);
        e = x(this, e);
        var d = e.detectRetina && V.retina ? 2 : 1, g = this.getTileSize();
        s.width = g.x * d, s.height = g.y * d, this.wmsParams = s;
      },
      onAdd: function(t) {
        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[e] = this._crs.code, Me.prototype.onAdd.call(this, t);
      },
      getTileUrl: function(t) {
        var e = this._tileCoordsToNwSe(t), s = this._crs, u = U(s.project(e[0]), s.project(e[1])), d = u.min, g = u.max, b = (this._wmsVersion >= 1.3 && this._crs === to ? [d.y, d.x, g.y, g.x] : [d.x, d.y, g.x, g.y]).join(","), P = Me.prototype.getTileUrl.call(this, t);
        return P + E(this.wmsParams, P, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + b;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(t, e) {
        return l(this.wmsParams, t), e || this.redraw(), this;
      }
    });
    function Rl(t, e) {
      return new lo(t, e);
    }
    Me.WMS = lo, ao.wms = Rl;
    var oe = Xt.extend({
      // @section
      // @aka Renderer options
      options: {
        // @option padding: Number = 0.1
        // How much to extend the clip area around the map view (relative to its size)
        // e.g. 0.1 would be 10% of map view in each direction
        padding: 0.1
      },
      initialize: function(t) {
        x(this, t), f(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), K(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
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
        var s = this._map.getZoomScale(e, this._zoom), u = this._map.getSize().multiplyBy(0.5 + this.options.padding), d = this._map.project(this._center, e), g = u.multiplyBy(-s).add(d).subtract(this._map._getNewPixelOrigin(t, e));
        V.any3d ? de(this._container, g, s) : yt(this._container, g);
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
        var t = this.options.padding, e = this._map.getSize(), s = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
        this._bounds = new B(s, s.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), ho = oe.extend({
      // @section
      // @aka Canvas options
      options: {
        // @option tolerance: Number = 0
        // How much to extend the click tolerance around a path/object on the map.
        tolerance: 0
      },
      getEvents: function() {
        var t = oe.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset, t;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        oe.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var t = this._container = document.createElement("canvas");
        X(t, "mousemove", this._onMouseMove, this), X(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), X(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
      },
      _destroyContainer: function() {
        Lt(this._redrawRequest), delete this._ctx, dt(this._container), ct(this._container), delete this._container;
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
          oe.prototype._update.call(this);
          var t = this._bounds, e = this._container, s = t.getSize(), u = V.retina ? 2 : 1;
          yt(e, t.min), e.width = u * s.x, e.height = u * s.y, e.style.width = s.x + "px", e.style.height = s.y + "px", V.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
        }
      },
      _reset: function() {
        oe.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
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
        var e = t._order, s = e.next, u = e.prev;
        s ? s.prev = u : this._drawLast = u, u ? u.next = s : this._drawFirst = s, delete t._order, delete this._layers[f(t)], this._requestRedraw(t);
      },
      _updatePath: function(t) {
        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
      },
      _updateStyle: function(t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function(t) {
        if (typeof t.options.dashArray == "string") {
          var e = t.options.dashArray.split(/[, ]+/), s = [], u, d;
          for (d = 0; d < e.length; d++) {
            if (u = Number(e[d]), isNaN(u))
              return;
            s.push(u);
          }
          t.options._dashArray = s;
        } else
          t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function(t) {
        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || _t(this._redraw, this));
      },
      _extendRedrawBounds: function(t) {
        if (t._pxBounds) {
          var e = (t.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new B(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
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
          var s = e.getSize();
          this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, s.x, s.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var u = this._drawFirst; u; u = u.next)
          t = u.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function(t, e) {
        if (this._drawing) {
          var s, u, d, g, b = t._parts, P = b.length, C = this._ctx;
          if (P) {
            for (C.beginPath(), s = 0; s < P; s++) {
              for (u = 0, d = b[s].length; u < d; u++)
                g = b[s][u], C[u ? "lineTo" : "moveTo"](g.x, g.y);
              e && C.closePath();
            }
            this._fillStroke(C, t);
          }
        }
      },
      _updateCircle: function(t) {
        if (!(!this._drawing || t._empty())) {
          var e = t._point, s = this._ctx, u = Math.max(Math.round(t._radius), 1), d = (Math.max(Math.round(t._radiusY), 1) || u) / u;
          d !== 1 && (s.save(), s.scale(1, d)), s.beginPath(), s.arc(e.x, e.y / d, u, 0, Math.PI * 2, !1), d !== 1 && s.restore(), this._fillStroke(s, t);
        }
      },
      _fillStroke: function(t, e) {
        var s = e.options;
        s.fill && (t.globalAlpha = s.fillOpacity, t.fillStyle = s.fillColor || s.color, t.fill(s.fillRule || "evenodd")), s.stroke && s.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = s.opacity, t.lineWidth = s.weight, t.strokeStyle = s.color, t.lineCap = s.lineCap, t.lineJoin = s.lineJoin, t.stroke());
      },
      // Canvas obviously doesn't have mouse events for individual drawn objects,
      // so we emulate that by calculating what's under the mouse on mousemove/click manually
      _onClick: function(t) {
        for (var e = this._map.mouseEventToLayerPoint(t), s, u, d = this._drawFirst; d; d = d.next)
          s = d.layer, s.options.interactive && s._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(s)) && (u = s);
        this._fireEvent(u ? [u] : !1, t);
      },
      _onMouseMove: function(t) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var e = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, e);
        }
      },
      _handleMouseOut: function(t) {
        var e = this._hoveredLayer;
        e && (gt(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(t, e) {
        if (!this._mouseHoverThrottled) {
          for (var s, u, d = this._drawFirst; d; d = d.next)
            s = d.layer, s.options.interactive && s._containsPoint(e) && (u = s);
          u !== this._hoveredLayer && (this._handleMouseOut(t), u && (K(this._container, "leaflet-interactive"), this._fireEvent([u], t, "mouseover"), this._hoveredLayer = u)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(h(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function(t, e, s) {
        this._map._fireDOMEvent(e, s || e.type, t);
      },
      _bringToFront: function(t) {
        var e = t._order;
        if (e) {
          var s = e.next, u = e.prev;
          if (s)
            s.prev = u;
          else
            return;
          u ? u.next = s : s && (this._drawFirst = s), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t);
        }
      },
      _bringToBack: function(t) {
        var e = t._order;
        if (e) {
          var s = e.next, u = e.prev;
          if (u)
            u.next = s;
          else
            return;
          s ? s.prev = u : u && (this._drawLast = u), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t);
        }
      }
    });
    function uo(t) {
      return V.canvas ? new ho(t) : null;
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
    }(), Fl = {
      _initContainer: function() {
        this._container = ot("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (oe.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(t) {
        var e = t._container = $e("shape");
        K(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = $e("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[f(t)] = t;
      },
      _addPath: function(t) {
        var e = t._container;
        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
      },
      _removePath: function(t) {
        var e = t._container;
        dt(e), t.removeInteractiveTarget(e), delete this._layers[f(t)];
      },
      _updateStyle: function(t) {
        var e = t._stroke, s = t._fill, u = t.options, d = t._container;
        d.stroked = !!u.stroke, d.filled = !!u.fill, u.stroke ? (e || (e = t._stroke = $e("stroke")), d.appendChild(e), e.weight = u.weight + "px", e.color = u.color, e.opacity = u.opacity, u.dashArray ? e.dashStyle = A(u.dashArray) ? u.dashArray.join(" ") : u.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = u.lineCap.replace("butt", "flat"), e.joinstyle = u.lineJoin) : e && (d.removeChild(e), t._stroke = null), u.fill ? (s || (s = t._fill = $e("fill")), d.appendChild(s), s.color = u.fillColor || u.color, s.opacity = u.fillOpacity) : s && (d.removeChild(s), t._fill = null);
      },
      _updateCircle: function(t) {
        var e = t._point.round(), s = Math.round(t._radius), u = Math.round(t._radiusY || s);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + s + "," + u + " 0," + 65535 * 360);
      },
      _setPath: function(t, e) {
        t._path.v = e;
      },
      _bringToFront: function(t) {
        we(t._container);
      },
      _bringToBack: function(t) {
        Le(t._container);
      }
    }, Bi = V.vml ? $e : Re, Ke = oe.extend({
      _initContainer: function() {
        this._container = Bi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Bi("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        dt(this._container), ct(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          oe.prototype._update.call(this);
          var t = this._bounds, e = t.getSize(), s = this._container;
          (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, s.setAttribute("width", e.x), s.setAttribute("height", e.y)), yt(s, t.min), s.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
        }
      },
      // methods below are called by vector layers implementations
      _initPath: function(t) {
        var e = t._path = Bi("path");
        t.options.className && K(e, t.options.className), t.options.interactive && K(e, "leaflet-interactive"), this._updateStyle(t), this._layers[f(t)] = t;
      },
      _addPath: function(t) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
      },
      _removePath: function(t) {
        dt(t._path), t.removeInteractiveTarget(t._path), delete this._layers[f(t)];
      },
      _updatePath: function(t) {
        t._project(), t._update();
      },
      _updateStyle: function(t) {
        var e = t._path, s = t.options;
        e && (s.stroke ? (e.setAttribute("stroke", s.color), e.setAttribute("stroke-opacity", s.opacity), e.setAttribute("stroke-width", s.weight), e.setAttribute("stroke-linecap", s.lineCap), e.setAttribute("stroke-linejoin", s.lineJoin), s.dashArray ? e.setAttribute("stroke-dasharray", s.dashArray) : e.removeAttribute("stroke-dasharray"), s.dashOffset ? e.setAttribute("stroke-dashoffset", s.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), s.fill ? (e.setAttribute("fill", s.fillColor || s.color), e.setAttribute("fill-opacity", s.fillOpacity), e.setAttribute("fill-rule", s.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
      },
      _updatePoly: function(t, e) {
        this._setPath(t, mr(t._parts, e));
      },
      _updateCircle: function(t) {
        var e = t._point, s = Math.max(Math.round(t._radius), 1), u = Math.max(Math.round(t._radiusY), 1) || s, d = "a" + s + "," + u + " 0 1,0 ", g = t._empty() ? "M0 0" : "M" + (e.x - s) + "," + e.y + d + s * 2 + ",0 " + d + -s * 2 + ",0 ";
        this._setPath(t, g);
      },
      _setPath: function(t, e) {
        t._path.setAttribute("d", e);
      },
      // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
      _bringToFront: function(t) {
        we(t._path);
      },
      _bringToBack: function(t) {
        Le(t._path);
      }
    });
    V.vml && Ke.include(Fl);
    function co(t) {
      return V.svg || V.vml ? new Ke(t) : null;
    }
    it.include({
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
        return this.options.preferCanvas && uo(t) || co(t);
      }
    });
    var fo = Ce.extend({
      initialize: function(t, e) {
        Ce.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      },
      // @method setBounds(latLngBounds: LatLngBounds): this
      // Redraws the rectangle with the passed bounds.
      setBounds: function(t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function(t) {
        return t = F(t), [
          t.getSouthWest(),
          t.getNorthWest(),
          t.getNorthEast(),
          t.getSouthEast()
        ];
      }
    });
    function jl(t, e) {
      return new fo(t, e);
    }
    Ke.create = Bi, Ke.pointsToPath = mr, re.geometryToLayer = ki, re.coordsToLatLng = Pn, re.coordsToLatLngs = Mi, re.latLngToCoords = Tn, re.latLngsToCoords = Si, re.getFeature = ke, re.asFeature = zi, it.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var _o = te.extend({
      initialize: function(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
      },
      addHooks: function() {
        X(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        ct(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        dt(this._pane), delete this._pane;
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
        this._clearDeferredResetState(), this._resetState(), Ue(), an(), this._startPoint = this._map.mouseEventToContainerPoint(t), X(document, {
          contextmenu: pe,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(t) {
        this._moved || (this._moved = !0, this._box = ot("div", "leaflet-zoom-box", this._container), K(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
        var e = new B(this._point, this._startPoint), s = e.getSize();
        yt(this._box, e.min), this._box.style.width = s.x + "px", this._box.style.height = s.y + "px";
      },
      _finish: function() {
        this._moved && (dt(this._box), gt(this._container, "leaflet-crosshair")), Ve(), ln(), ct(document, {
          contextmenu: pe,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(t) {
        if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(h(this._resetState, this), 0);
          var e = new H(
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
    it.addInitHook("addHandler", "boxZoom", _o), it.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var mo = te.extend({
      addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function(t) {
        var e = this._map, s = e.getZoom(), u = e.options.zoomDelta, d = t.originalEvent.shiftKey ? s - u : s + u;
        e.options.doubleClickZoom === "center" ? e.setZoom(d) : e.setZoomAround(t.containerPoint, d);
      }
    });
    it.addInitHook("addHandler", "doubleClickZoom", mo), it.mergeOptions({
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
    var po = te.extend({
      addHooks: function() {
        if (!this._draggable) {
          var t = this._map;
          this._draggable = new he(t._mapPane, t._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
        }
        K(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        gt(this._map._container, "leaflet-grab"), gt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
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
          var e = F(this._map.options.maxBounds);
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
          var e = this._lastTime = +/* @__PURE__ */ new Date(), s = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(s), this._times.push(e), this._prunePositions(e);
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
        var t = this._worldWidth, e = Math.round(t / 2), s = this._initialWorldOffset, u = this._draggable._newPos.x, d = (u - e + s) % t + e - s, g = (u + e + s) % t - e - s, b = Math.abs(d + s) < Math.abs(g + s) ? d : g;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = b;
      },
      _onDragEnd: function(t) {
        var e = this._map, s = e.options, u = !s.inertia || t.noInertia || this._times.length < 2;
        if (e.fire("dragend", t), u)
          e.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var d = this._lastPos.subtract(this._positions[0]), g = (this._lastTime - this._times[0]) / 1e3, b = s.easeLinearity, P = d.multiplyBy(b / g), C = P.distanceTo([0, 0]), z = Math.min(s.inertiaMaxSpeed, C), R = P.multiplyBy(z / C), Y = z / (s.inertiaDeceleration * b), Q = R.multiplyBy(-Y / 2).round();
          !Q.x && !Q.y ? e.fire("moveend") : (Q = e._limitOffset(Q, e.options.maxBounds), _t(function() {
            e.panBy(Q, {
              duration: Y,
              easeLinearity: b,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    it.addInitHook("addHandler", "dragging", po), it.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var go = te.extend({
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
        t.tabIndex <= 0 && (t.tabIndex = "0"), X(t, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      removeHooks: function() {
        this._removeHooks(), ct(this._map._container, {
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
          var t = document.body, e = document.documentElement, s = t.scrollTop || e.scrollTop, u = t.scrollLeft || e.scrollLeft;
          this._map._container.focus(), window.scrollTo(u, s);
        }
      },
      _onFocus: function() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function(t) {
        var e = this._panKeys = {}, s = this.keyCodes, u, d;
        for (u = 0, d = s.left.length; u < d; u++)
          e[s.left[u]] = [-1 * t, 0];
        for (u = 0, d = s.right.length; u < d; u++)
          e[s.right[u]] = [t, 0];
        for (u = 0, d = s.down.length; u < d; u++)
          e[s.down[u]] = [0, t];
        for (u = 0, d = s.up.length; u < d; u++)
          e[s.up[u]] = [0, -1 * t];
      },
      _setZoomDelta: function(t) {
        var e = this._zoomKeys = {}, s = this.keyCodes, u, d;
        for (u = 0, d = s.zoomIn.length; u < d; u++)
          e[s.zoomIn[u]] = t;
        for (u = 0, d = s.zoomOut.length; u < d; u++)
          e[s.zoomOut[u]] = -t;
      },
      _addHooks: function() {
        X(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        ct(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e = t.keyCode, s = this._map, u;
          if (e in this._panKeys) {
            if (!s._panAnim || !s._panAnim._inProgress)
              if (u = this._panKeys[e], t.shiftKey && (u = k(u).multiplyBy(3)), s.options.maxBounds && (u = s._limitOffset(k(u), s.options.maxBounds)), s.options.worldCopyJump) {
                var d = s.wrapLatLng(s.unproject(s.project(s.getCenter()).add(u)));
                s.panTo(d);
              } else
                s.panBy(u);
          } else if (e in this._zoomKeys)
            s.setZoom(s.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
          else if (e === 27 && s._popup && s._popup.options.closeOnEscapeKey)
            s.closePopup();
          else
            return;
          pe(t);
        }
      }
    });
    it.addInitHook("addHandler", "keyboard", go), it.mergeOptions({
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
    var vo = te.extend({
      addHooks: function() {
        X(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        ct(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(t) {
        var e = Nr(t), s = this._map.options.wheelDebounceTime;
        this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var u = Math.max(s - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(h(this._performZoom, this), u), pe(t);
      },
      _performZoom: function() {
        var t = this._map, e = t.getZoom(), s = this._map.options.zoomSnap || 0;
        t._stop();
        var u = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(u)))) / Math.LN2, g = s ? Math.ceil(d / s) * s : d, b = t._limitZoom(e + (this._delta > 0 ? g : -g)) - e;
        this._delta = 0, this._startTime = null, b && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + b) : t.setZoomAround(this._lastMousePos, e + b));
      }
    });
    it.addInitHook("addHandler", "scrollWheelZoom", vo);
    var Nl = 600;
    it.mergeOptions({
      // @section Touch interaction options
      // @option tapHold: Boolean
      // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
      tapHold: V.touchNative && V.safari && V.mobile,
      // @option tapTolerance: Number = 15
      // The max number of pixels a user can shift his finger during touch
      // for it to be considered a valid tap.
      tapTolerance: 15
    });
    var yo = te.extend({
      addHooks: function() {
        X(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        ct(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(t) {
        if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
          var e = t.touches[0];
          this._startPos = this._newPos = new N(e.clientX, e.clientY), this._holdTimeout = setTimeout(h(function() {
            this._cancel(), this._isTapValid() && (X(document, "touchend", Tt), X(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
          }, this), Nl), X(document, "touchend touchcancel contextmenu", this._cancel, this), X(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function t() {
        ct(document, "touchend", Tt), ct(document, "touchend touchcancel", t);
      },
      _cancel: function() {
        clearTimeout(this._holdTimeout), ct(document, "touchend touchcancel contextmenu", this._cancel, this), ct(document, "touchmove", this._onMove, this);
      },
      _onMove: function(t) {
        var e = t.touches[0];
        this._newPos = new N(e.clientX, e.clientY);
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function(t, e) {
        var s = new MouseEvent(t, {
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
        s._simulated = !0, e.target.dispatchEvent(s);
      }
    });
    it.addInitHook("addHandler", "tapHold", yo), it.mergeOptions({
      // @section Touch interaction options
      // @option touchZoom: Boolean|String = *
      // Whether the map can be zoomed by touch-dragging with two fingers. If
      // passed `'center'`, it will zoom to the center of the view regardless of
      // where the touch events (fingers) were. Enabled for touch-capable web
      // browsers.
      touchZoom: V.touch,
      // @option bounceAtZoomLimits: Boolean = true
      // Set it to false if you don't want the map to zoom beyond min/max zoom
      // and then bounce back when pinch-zooming.
      bounceAtZoomLimits: !0
    });
    var bo = te.extend({
      addHooks: function() {
        K(this._map._container, "leaflet-touch-zoom"), X(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        gt(this._map._container, "leaflet-touch-zoom"), ct(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(t) {
        var e = this._map;
        if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
          var s = e.mouseEventToContainerPoint(t.touches[0]), u = e.mouseEventToContainerPoint(t.touches[1]);
          this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(s.add(u)._divideBy(2))), this._startDist = s.distanceTo(u), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), X(document, "touchmove", this._onTouchMove, this), X(document, "touchend touchcancel", this._onTouchEnd, this), Tt(t);
        }
      },
      _onTouchMove: function(t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var e = this._map, s = e.mouseEventToContainerPoint(t.touches[0]), u = e.mouseEventToContainerPoint(t.touches[1]), d = s.distanceTo(u) / this._startDist;
          if (this._zoom = e.getScaleZoom(d, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && d < 1 || this._zoom > e.getMaxZoom() && d > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
            if (this._center = this._startLatLng, d === 1)
              return;
          } else {
            var g = s._add(u)._divideBy(2)._subtract(this._centerPoint);
            if (d === 1 && g.x === 0 && g.y === 0)
              return;
            this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(g), this._zoom);
          }
          this._moved || (e._moveStart(!0, !1), this._moved = !0), Lt(this._animRequest);
          var b = h(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
          this._animRequest = _t(b, this, !0), Tt(t);
        }
      },
      _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        this._zooming = !1, Lt(this._animRequest), ct(document, "touchmove", this._onTouchMove, this), ct(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    it.addInitHook("addHandler", "touchZoom", bo), it.BoxZoom = _o, it.DoubleClickZoom = mo, it.Drag = po, it.Keyboard = go, it.ScrollWheelZoom = vo, it.TapHold = yo, it.TouchZoom = bo, n.Bounds = B, n.Browser = V, n.CRS = W, n.Canvas = ho, n.Circle = Ln, n.CircleMarker = Ci, n.Class = xt, n.Control = qt, n.DivIcon = so, n.DivOverlay = ee, n.DomEvent = ol, n.DomUtil = nl, n.Draggable = he, n.Evented = kt, n.FeatureGroup = ie, n.GeoJSON = re, n.GridLayer = Xe, n.Handler = te, n.Icon = Te, n.ImageOverlay = Ei, n.LatLng = j, n.LatLngBounds = H, n.Layer = Xt, n.LayerGroup = Pe, n.LineUtil = vl, n.Map = it, n.Marker = Ti, n.Mixin = fl, n.Path = ue, n.Point = N, n.PolyUtil = dl, n.Polygon = Ce, n.Polyline = ne, n.Popup = Oi, n.PosAnimation = Ur, n.Projection = yl, n.Rectangle = fo, n.Renderer = oe, n.SVG = Ke, n.SVGOverlay = oo, n.TileLayer = Me, n.Tooltip = Ii, n.Transformation = pt, n.Util = fe, n.VideoOverlay = ro, n.bind = h, n.bounds = U, n.canvas = uo, n.circle = kl, n.circleMarker = Cl, n.control = Ye, n.divIcon = Zl, n.extend = l, n.featureGroup = Ll, n.geoJSON = no, n.geoJson = zl, n.gridLayer = Dl, n.icon = Pl, n.imageOverlay = El, n.latLng = D, n.latLngBounds = F, n.layerGroup = wl, n.map = sl, n.marker = Tl, n.point = k, n.polygon = Sl, n.polyline = Ml, n.popup = Bl, n.rectangle = jl, n.setOptions = x, n.stamp = f, n.svg = co, n.svgOverlay = Il, n.tileLayer = ao, n.tooltip = Al, n.transformation = Z, n.version = a, n.videoOverlay = Ol;
    var Ul = window.L;
    n.noConflict = function() {
      return window.L = Ul, this;
    }, window.L = n;
  });
})(Hn, Hn.exports);
var De = Hn.exports;
const qi = /* @__PURE__ */ hs(De);
function _i(r, i, n) {
  return Object.freeze({
    instance: r,
    context: i,
    container: n
  });
}
function Xi(r, i) {
  return i == null ? function(a, l) {
    const o = Ae();
    return o.current || (o.current = r(a, l)), o;
  } : function(a, l) {
    const o = Ae();
    o.current || (o.current = r(a, l));
    const h = Ae(a), { instance: c } = o.current;
    return jt(function() {
      h.current !== a && (i(c, a, h.current), h.current = a);
    }, [
      c,
      a,
      l
    ]), o;
  };
}
function lh(r, i) {
  jt(function() {
    return (i.layerContainer ?? i.map).addLayer(r.instance), function() {
      var o;
      (o = i.layerContainer) == null || o.removeLayer(r.instance), i.map.removeLayer(r.instance);
    };
  }, [
    i,
    r
  ]);
}
function us(r) {
  return function(n) {
    const a = Gi(), l = r(rr(n, a), a);
    return is(a.map, n.attribution), as(l.current, n.eventHandlers), lh(l.current, a), l;
  };
}
function hh(r) {
  function i(l, o) {
    return _i(r(l), o);
  }
  const n = Xi(i), a = sh(n);
  return ss(a);
}
function cs(r, i) {
  const n = Xi(r, i), a = us(n);
  return rh(a);
}
function uh(r, i) {
  const n = Xi(r), a = ah(n, i);
  return oh(a);
}
function fs(r, i) {
  const n = Xi(r, i), a = us(n);
  return ss(a);
}
function ds(r, i, n) {
  const { opacity: a, zIndex: l } = i;
  a != null && a !== n.opacity && r.setOpacity(a), l != null && l !== n.zIndex && r.setZIndex(l);
}
function or() {
  return Gi().map;
}
function Of(r, i) {
  const n = or();
  return jt(function() {
    return n.on(r, i), function() {
      n.off(r, i);
    };
  }, [
    n,
    r,
    i
  ]), n;
}
function If(r) {
  const i = or();
  return jt(function() {
    return i.on(r), function() {
      i.off(r);
    };
  }, [
    i,
    r
  ]), i;
}
const ch = hh(function(i) {
  return new De.Control.Attribution(i);
});
function Wn() {
  return Wn = Object.assign || function(r) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
    }
    return r;
  }, Wn.apply(this, arguments);
}
function fh({ bounds: r, boundsOptions: i, center: n, children: a, className: l, id: o, placeholder: h, style: c, whenReady: f, zoom: _, ...m }, p) {
  const [v] = Un({
    className: l,
    id: o,
    style: c
  }), [y, w] = Un(null);
  Yi(p, () => (y == null ? void 0 : y.map) ?? null, [
    y
  ]);
  const x = Jl((M) => {
    if (M !== null && y === null) {
      const I = new De.Map(M, m);
      n != null && _ != null ? I.setView(n, _) : r != null && I.fitBounds(r, i), f != null && I.whenReady(f), w(nh(I));
    }
  }, []);
  jt(() => () => {
    y == null || y.map.remove();
  }, [
    y
  ]);
  const E = y ? /* @__PURE__ */ Mt.createElement(os, {
    value: y
  }, a) : h ?? null;
  return /* @__PURE__ */ Mt.createElement("div", Wn({}, v, {
    ref: x
  }), E);
}
const dh = /* @__PURE__ */ ae(fh), _h = cs(function({ position: i, ...n }, a) {
  const l = new De.Marker(i, n);
  return _i(l, ns(a, {
    overlayContainer: l
  }));
}, function(i, n, a) {
  n.position !== a.position && i.setLatLng(n.position), n.icon != null && n.icon !== a.icon && i.setIcon(n.icon), n.zIndexOffset != null && n.zIndexOffset !== a.zIndexOffset && i.setZIndexOffset(n.zIndexOffset), n.opacity != null && n.opacity !== a.opacity && i.setOpacity(n.opacity), i.dragging != null && n.draggable !== a.draggable && (n.draggable === !0 ? i.dragging.enable() : i.dragging.disable());
}), mh = uh(function(i, n) {
  const a = new De.Popup(i, n.overlayContainer);
  return _i(a, n);
}, function(i, n, { position: a }, l) {
  jt(function() {
    const { instance: h } = i;
    function c(_) {
      _.popup === h && (h.update(), l(!0));
    }
    function f(_) {
      _.popup === h && l(!1);
    }
    return n.map.on({
      popupopen: c,
      popupclose: f
    }), n.overlayContainer == null ? (a != null && h.setLatLng(a), h.openOn(n.map)) : n.overlayContainer.bindPopup(h), function() {
      var m;
      n.map.off({
        popupopen: c,
        popupclose: f
      }), (m = n.overlayContainer) == null || m.unbindPopup(), n.map.removeLayer(h);
    };
  }, [
    i,
    n,
    l,
    a
  ]);
}), ph = fs(function({ url: i, ...n }, a) {
  const l = new De.TileLayer(i, rr(n, a));
  return _i(l, a);
}, function(i, n, a) {
  ds(i, n, a);
  const { url: l } = n;
  l != null && l !== a.url && i.setUrl(l);
});
var Yn = { exports: {} }, Zi = { exports: {} }, at = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Po;
function gh() {
  if (Po) return at;
  Po = 1;
  var r = typeof Symbol == "function" && Symbol.for, i = r ? Symbol.for("react.element") : 60103, n = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107, l = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, h = r ? Symbol.for("react.provider") : 60109, c = r ? Symbol.for("react.context") : 60110, f = r ? Symbol.for("react.async_mode") : 60111, _ = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, p = r ? Symbol.for("react.suspense") : 60113, v = r ? Symbol.for("react.suspense_list") : 60120, y = r ? Symbol.for("react.memo") : 60115, w = r ? Symbol.for("react.lazy") : 60116, x = r ? Symbol.for("react.block") : 60121, E = r ? Symbol.for("react.fundamental") : 60117, M = r ? Symbol.for("react.responder") : 60118, I = r ? Symbol.for("react.scope") : 60119;
  function A(S) {
    if (typeof S == "object" && S !== null) {
      var rt = S.$$typeof;
      switch (rt) {
        case i:
          switch (S = S.type, S) {
            case f:
            case _:
            case a:
            case o:
            case l:
            case p:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case c:
                case m:
                case w:
                case y:
                case h:
                  return S;
                default:
                  return rt;
              }
          }
        case n:
          return rt;
      }
    }
  }
  function O(S) {
    return A(S) === _;
  }
  return at.AsyncMode = f, at.ConcurrentMode = _, at.ContextConsumer = c, at.ContextProvider = h, at.Element = i, at.ForwardRef = m, at.Fragment = a, at.Lazy = w, at.Memo = y, at.Portal = n, at.Profiler = o, at.StrictMode = l, at.Suspense = p, at.isAsyncMode = function(S) {
    return O(S) || A(S) === f;
  }, at.isConcurrentMode = O, at.isContextConsumer = function(S) {
    return A(S) === c;
  }, at.isContextProvider = function(S) {
    return A(S) === h;
  }, at.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === i;
  }, at.isForwardRef = function(S) {
    return A(S) === m;
  }, at.isFragment = function(S) {
    return A(S) === a;
  }, at.isLazy = function(S) {
    return A(S) === w;
  }, at.isMemo = function(S) {
    return A(S) === y;
  }, at.isPortal = function(S) {
    return A(S) === n;
  }, at.isProfiler = function(S) {
    return A(S) === o;
  }, at.isStrictMode = function(S) {
    return A(S) === l;
  }, at.isSuspense = function(S) {
    return A(S) === p;
  }, at.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === a || S === _ || S === o || S === l || S === p || S === v || typeof S == "object" && S !== null && (S.$$typeof === w || S.$$typeof === y || S.$$typeof === h || S.$$typeof === c || S.$$typeof === m || S.$$typeof === E || S.$$typeof === M || S.$$typeof === I || S.$$typeof === x);
  }, at.typeOf = A, at;
}
var lt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function vh() {
  return To || (To = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, i = r ? Symbol.for("react.element") : 60103, n = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107, l = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, h = r ? Symbol.for("react.provider") : 60109, c = r ? Symbol.for("react.context") : 60110, f = r ? Symbol.for("react.async_mode") : 60111, _ = r ? Symbol.for("react.concurrent_mode") : 60111, m = r ? Symbol.for("react.forward_ref") : 60112, p = r ? Symbol.for("react.suspense") : 60113, v = r ? Symbol.for("react.suspense_list") : 60120, y = r ? Symbol.for("react.memo") : 60115, w = r ? Symbol.for("react.lazy") : 60116, x = r ? Symbol.for("react.block") : 60121, E = r ? Symbol.for("react.fundamental") : 60117, M = r ? Symbol.for("react.responder") : 60118, I = r ? Symbol.for("react.scope") : 60119;
    function A(Z) {
      return typeof Z == "string" || typeof Z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Z === a || Z === _ || Z === o || Z === l || Z === p || Z === v || typeof Z == "object" && Z !== null && (Z.$$typeof === w || Z.$$typeof === y || Z.$$typeof === h || Z.$$typeof === c || Z.$$typeof === m || Z.$$typeof === E || Z.$$typeof === M || Z.$$typeof === I || Z.$$typeof === x);
    }
    function O(Z) {
      if (typeof Z == "object" && Z !== null) {
        var Et = Z.$$typeof;
        switch (Et) {
          case i:
            var be = Z.type;
            switch (be) {
              case f:
              case _:
              case a:
              case o:
              case l:
              case p:
                return be;
              default:
                var Re = be && be.$$typeof;
                switch (Re) {
                  case c:
                  case m:
                  case w:
                  case y:
                  case h:
                    return Re;
                  default:
                    return Et;
                }
            }
          case n:
            return Et;
        }
      }
    }
    var S = f, rt = _, G = c, tt = h, vt = i, ft = m, _t = a, Lt = w, fe = y, xt = n, Nt = o, ht = l, kt = p, N = !1;
    function le(Z) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(Z) || O(Z) === f;
    }
    function k(Z) {
      return O(Z) === _;
    }
    function B(Z) {
      return O(Z) === c;
    }
    function U(Z) {
      return O(Z) === h;
    }
    function H(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === i;
    }
    function F(Z) {
      return O(Z) === m;
    }
    function j(Z) {
      return O(Z) === a;
    }
    function D(Z) {
      return O(Z) === w;
    }
    function W(Z) {
      return O(Z) === y;
    }
    function q(Z) {
      return O(Z) === n;
    }
    function et(Z) {
      return O(Z) === o;
    }
    function J(Z) {
      return O(Z) === l;
    }
    function pt(Z) {
      return O(Z) === p;
    }
    lt.AsyncMode = S, lt.ConcurrentMode = rt, lt.ContextConsumer = G, lt.ContextProvider = tt, lt.Element = vt, lt.ForwardRef = ft, lt.Fragment = _t, lt.Lazy = Lt, lt.Memo = fe, lt.Portal = xt, lt.Profiler = Nt, lt.StrictMode = ht, lt.Suspense = kt, lt.isAsyncMode = le, lt.isConcurrentMode = k, lt.isContextConsumer = B, lt.isContextProvider = U, lt.isElement = H, lt.isForwardRef = F, lt.isFragment = j, lt.isLazy = D, lt.isMemo = W, lt.isPortal = q, lt.isProfiler = et, lt.isStrictMode = J, lt.isSuspense = pt, lt.isValidElementType = A, lt.typeOf = O;
  }()), lt;
}
var Co;
function _s() {
  return Co || (Co = 1, process.env.NODE_ENV === "production" ? Zi.exports = gh() : Zi.exports = vh()), Zi.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Sn, ko;
function yh() {
  if (ko) return Sn;
  ko = 1;
  var r = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function a(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function l() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var h = {}, c = 0; c < 10; c++)
        h["_" + String.fromCharCode(c)] = c;
      var f = Object.getOwnPropertyNames(h).map(function(m) {
        return h[m];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var _ = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        _[m] = m;
      }), Object.keys(Object.assign({}, _)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Sn = l() ? Object.assign : function(o, h) {
    for (var c, f = a(o), _, m = 1; m < arguments.length; m++) {
      c = Object(arguments[m]);
      for (var p in c)
        i.call(c, p) && (f[p] = c[p]);
      if (r) {
        _ = r(c);
        for (var v = 0; v < _.length; v++)
          n.call(c, _[v]) && (f[_[v]] = c[_[v]]);
      }
    }
    return f;
  }, Sn;
}
var zn, Mo;
function sr() {
  if (Mo) return zn;
  Mo = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return zn = r, zn;
}
var En, So;
function ms() {
  return So || (So = 1, En = Function.call.bind(Object.prototype.hasOwnProperty)), En;
}
var On, zo;
function bh() {
  if (zo) return On;
  zo = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var i = sr(), n = {}, a = ms();
    r = function(o) {
      var h = "Warning: " + o;
      typeof console < "u" && console.error(h);
      try {
        throw new Error(h);
      } catch {
      }
    };
  }
  function l(o, h, c, f, _) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in o)
        if (a(o, m)) {
          var p;
          try {
            if (typeof o[m] != "function") {
              var v = Error(
                (f || "React class") + ": " + c + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            p = o[m](h, m, f, c, null, i);
          } catch (w) {
            p = w;
          }
          if (p && !(p instanceof Error) && r(
            (f || "React class") + ": type specification of " + c + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var y = _ ? _() : "";
            r(
              "Failed " + c + " type: " + p.message + (y ?? "")
            );
          }
        }
    }
  }
  return l.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, On = l, On;
}
var In, Eo;
function xh() {
  if (Eo) return In;
  Eo = 1;
  var r = _s(), i = yh(), n = sr(), a = ms(), l = bh(), o = function() {
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
  return In = function(c, f) {
    var _ = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(k) {
      var B = k && (_ && k[_] || k[m]);
      if (typeof B == "function")
        return B;
    }
    var v = "<<anonymous>>", y = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: I(),
      arrayOf: A,
      element: O(),
      elementType: S(),
      instanceOf: rt,
      node: ft(),
      objectOf: tt,
      oneOf: G,
      oneOfType: vt,
      shape: Lt,
      exact: fe
    };
    function w(k, B) {
      return k === B ? k !== 0 || 1 / k === 1 / B : k !== k && B !== B;
    }
    function x(k, B) {
      this.message = k, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function E(k) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, U = 0;
      function H(j, D, W, q, et, J, pt) {
        if (q = q || v, J = J || W, pt !== n) {
          if (f) {
            var Z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Z.name = "Invariant Violation", Z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Et = q + ":" + W;
            !B[Et] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[Et] = !0, U++);
          }
        }
        return D[W] == null ? j ? D[W] === null ? new x("The " + et + " `" + J + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new x("The " + et + " `" + J + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : k(D, W, q, et, J);
      }
      var F = H.bind(null, !1);
      return F.isRequired = H.bind(null, !0), F;
    }
    function M(k) {
      function B(U, H, F, j, D, W) {
        var q = U[H], et = ht(q);
        if (et !== k) {
          var J = kt(q);
          return new x(
            "Invalid " + j + " `" + D + "` of type " + ("`" + J + "` supplied to `" + F + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return E(B);
    }
    function I() {
      return E(h);
    }
    function A(k) {
      function B(U, H, F, j, D) {
        if (typeof k != "function")
          return new x("Property `" + D + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var W = U[H];
        if (!Array.isArray(W)) {
          var q = ht(W);
          return new x("Invalid " + j + " `" + D + "` of type " + ("`" + q + "` supplied to `" + F + "`, expected an array."));
        }
        for (var et = 0; et < W.length; et++) {
          var J = k(W, et, F, j, D + "[" + et + "]", n);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return E(B);
    }
    function O() {
      function k(B, U, H, F, j) {
        var D = B[U];
        if (!c(D)) {
          var W = ht(D);
          return new x("Invalid " + F + " `" + j + "` of type " + ("`" + W + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(k);
    }
    function S() {
      function k(B, U, H, F, j) {
        var D = B[U];
        if (!r.isValidElementType(D)) {
          var W = ht(D);
          return new x("Invalid " + F + " `" + j + "` of type " + ("`" + W + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(k);
    }
    function rt(k) {
      function B(U, H, F, j, D) {
        if (!(U[H] instanceof k)) {
          var W = k.name || v, q = le(U[H]);
          return new x("Invalid " + j + " `" + D + "` of type " + ("`" + q + "` supplied to `" + F + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return E(B);
    }
    function G(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), h;
      function B(U, H, F, j, D) {
        for (var W = U[H], q = 0; q < k.length; q++)
          if (w(W, k[q]))
            return null;
        var et = JSON.stringify(k, function(pt, Z) {
          var Et = kt(Z);
          return Et === "symbol" ? String(Z) : Z;
        });
        return new x("Invalid " + j + " `" + D + "` of value `" + String(W) + "` " + ("supplied to `" + F + "`, expected one of " + et + "."));
      }
      return E(B);
    }
    function tt(k) {
      function B(U, H, F, j, D) {
        if (typeof k != "function")
          return new x("Property `" + D + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var W = U[H], q = ht(W);
        if (q !== "object")
          return new x("Invalid " + j + " `" + D + "` of type " + ("`" + q + "` supplied to `" + F + "`, expected an object."));
        for (var et in W)
          if (a(W, et)) {
            var J = k(W, et, F, j, D + "." + et, n);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return E(B);
    }
    function vt(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), h;
      for (var B = 0; B < k.length; B++) {
        var U = k[B];
        if (typeof U != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + N(U) + " at index " + B + "."
          ), h;
      }
      function H(F, j, D, W, q) {
        for (var et = [], J = 0; J < k.length; J++) {
          var pt = k[J], Z = pt(F, j, D, W, q, n);
          if (Z == null)
            return null;
          Z.data && a(Z.data, "expectedType") && et.push(Z.data.expectedType);
        }
        var Et = et.length > 0 ? ", expected one of type [" + et.join(", ") + "]" : "";
        return new x("Invalid " + W + " `" + q + "` supplied to " + ("`" + D + "`" + Et + "."));
      }
      return E(H);
    }
    function ft() {
      function k(B, U, H, F, j) {
        return xt(B[U]) ? null : new x("Invalid " + F + " `" + j + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return E(k);
    }
    function _t(k, B, U, H, F) {
      return new x(
        (k || "React class") + ": " + B + " type `" + U + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function Lt(k) {
      function B(U, H, F, j, D) {
        var W = U[H], q = ht(W);
        if (q !== "object")
          return new x("Invalid " + j + " `" + D + "` of type `" + q + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var et in k) {
          var J = k[et];
          if (typeof J != "function")
            return _t(F, j, D, et, kt(J));
          var pt = J(W, et, F, j, D + "." + et, n);
          if (pt)
            return pt;
        }
        return null;
      }
      return E(B);
    }
    function fe(k) {
      function B(U, H, F, j, D) {
        var W = U[H], q = ht(W);
        if (q !== "object")
          return new x("Invalid " + j + " `" + D + "` of type `" + q + "` " + ("supplied to `" + F + "`, expected `object`."));
        var et = i({}, U[H], k);
        for (var J in et) {
          var pt = k[J];
          if (a(k, J) && typeof pt != "function")
            return _t(F, j, D, J, kt(pt));
          if (!pt)
            return new x(
              "Invalid " + j + " `" + D + "` key `" + J + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(U[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var Z = pt(W, J, F, j, D + "." + J, n);
          if (Z)
            return Z;
        }
        return null;
      }
      return E(B);
    }
    function xt(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(xt);
          if (k === null || c(k))
            return !0;
          var B = p(k);
          if (B) {
            var U = B.call(k), H;
            if (B !== k.entries) {
              for (; !(H = U.next()).done; )
                if (!xt(H.value))
                  return !1;
            } else
              for (; !(H = U.next()).done; ) {
                var F = H.value;
                if (F && !xt(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Nt(k, B) {
      return k === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function ht(k) {
      var B = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : Nt(B, k) ? "symbol" : B;
    }
    function kt(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var B = ht(k);
      if (B === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function N(k) {
      var B = kt(k);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function le(k) {
      return !k.constructor || !k.constructor.name ? v : k.constructor.name;
    }
    return y.checkPropTypes = l, y.resetWarningCache = l.resetWarningCache, y.PropTypes = y, y;
  }, In;
}
var Bn, Oo;
function wh() {
  if (Oo) return Bn;
  Oo = 1;
  var r = sr();
  function i() {
  }
  function n() {
  }
  return n.resetWarningCache = i, Bn = function() {
    function a(h, c, f, _, m, p) {
      if (p !== r) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    a.isRequired = a;
    function l() {
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
      arrayOf: l,
      element: a,
      elementType: a,
      instanceOf: l,
      node: a,
      objectOf: l,
      oneOf: l,
      oneOfType: l,
      shape: l,
      exact: l,
      checkPropTypes: n,
      resetWarningCache: i
    };
    return o.PropTypes = o, o;
  }, Bn;
}
if (process.env.NODE_ENV !== "production") {
  var Lh = _s(), Ph = !0;
  Yn.exports = xh()(Lh.isElement, Ph);
} else
  Yn.exports = wh()();
var Th = Yn.exports;
const nt = /* @__PURE__ */ hs(Th), Io = (r) => r && typeof r == "object" && !Array.isArray(r), ui = (r, ...i) => {
  if (!i.length)
    return r;
  const n = { ...r };
  return i.forEach((a) => {
    Io(a) && Object.keys(a).forEach((l) => {
      Io(a[l]) ? n[l] ? n[l] = ui(n[l], a[l]) : n[l] = { ...a[l] } : n[l] = a[l];
    });
  }), n;
}, ps = (r) => {
  let i = {};
  return r.forEach((n) => {
    i = ui(i, n);
  }), i;
}, Ch = di(ve)`
  // translate to re-align with leaflet div
  transform: translateX(-35%);
  &:hover {
    transform: translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`, kh = di(Ql)`
  // multiplier of font-size, for tighter alignment
  line-height: 1rem;
`, gs = ({ cluster: r, kind: i = "default", size: n = "medium", ...a }) => {
  var _, m, p, v, y, w, x, E, M, I, A, O, S;
  const l = Mt.useContext(Ft), o = ps([
    (p = (m = (_ = l == null ? void 0 : l.map) == null ? void 0 : _.cluster) == null ? void 0 : m.size) == null ? void 0 : p.medium,
    (w = (y = (v = l == null ? void 0 : l.map) == null ? void 0 : v.cluster) == null ? void 0 : y.size) == null ? void 0 : w[n],
    (E = (x = l == null ? void 0 : l.map) == null ? void 0 : x.cluster) == null ? void 0 : E.default,
    (I = (M = l == null ? void 0 : l.map) == null ? void 0 : M.cluster) == null ? void 0 : I[i]
  ]), h = r.getChildCount(), c = (S = (O = (A = l == null ? void 0 : l.map) == null ? void 0 : A.cluster) == null ? void 0 : O[i]) == null ? void 0 : S.icon, f = h;
  return /* @__PURE__ */ nr(Ch, { ...o == null ? void 0 : o.container, ...a, children: [
    c,
    /* @__PURE__ */ ut(kh, { ...o == null ? void 0 : o.label, children: f })
  ] });
};
gs.propTypes = {
  cluster: nt.object,
  kind: nt.string,
  size: nt.string
};
var si = function(i) {
  return i === void 0 && (i = ""), parseFloat(i.match(/\d+(\.\d+)?/), 10);
};
function Mh(r) {
  var i, n = ye(Ft), a = r.size, l = {};
  if (n != null && (i = n.icon) != null && i.disableScaleDown) {
    var o = si(n.icon.size[a] || a);
    o < 24 && (l.vectorEffect = "non-scaling-stroke");
  }
  return l;
}
var Bo = function(i, n) {
  return (i - n) / 2 + "px";
};
function Sh(r) {
  var i, n, a, l = r.height, o = r.size, h = o === void 0 ? "medium" : o, c = r.width, f = ye(Ft), _ = si((f == null || (i = f.icon) == null || (i = i.size) == null ? void 0 : i[h]) || h), m = "";
  if (l && f != null && (n = f.text) != null && (n = n[l]) != null && n.height) {
    var p = si(f.text[l].height);
    if (p > _) {
      var v = Bo(p, _);
      m += "padding-top: " + v + "; padding-bottom: " + v + ";";
    }
  }
  if (c && f != null && (a = f.text) != null && (a = a[c]) != null && a.height) {
    var y = si(f.text[c].height);
    if (y > _) {
      var w = Bo(y, _);
      m += "padding-left: " + w + "; padding-right: " + w + ";";
    }
  }
  return m;
}
var zh = {
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
}, Eh = {
  theme: zh
}, Oh = ["a11yTitle", "color", "size", "theme"];
function Gn() {
  return Gn = Object.assign ? Object.assign.bind() : function(r) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
    }
    return r;
  }, Gn.apply(this, arguments);
}
function Ih(r, i) {
  if (r == null) return {};
  var n = {}, a = Object.keys(r), l, o;
  for (o = 0; o < a.length; o++)
    l = a[o], !(i.indexOf(l) >= 0) && (n[l] = r[l]);
  return n;
}
var Bh = function r(i, n, a) {
  var l = n.global && n.global.colors[i] !== void 0 ? n.global.colors[i] : i, o = l;
  return l && (n.dark && l.dark !== void 0 ? o = l.dark : !n.dark && l.light !== void 0 && (o = l.light)), o && n.global && n.global.colors[o] !== void 0 && (o = r(o, n)), o;
}, Ao = function(i, n, a, l) {
  return es(["", ":", ";"], i, Bh(n, a));
}, Ah = es(["", " ", " g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill='none']{stroke-width:0;}}*[stroke*='#'],*[STROKE*='#']{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*='#'],*[FILL*='#']{fill:inherit;stroke:none;}"], function(r) {
  return Ao("fill", r.color || r.theme.global.colors.icon, r.theme);
}, function(r) {
  return Ao("stroke", r.color || r.theme.global.colors.icon, r.theme);
}), vs = /* @__PURE__ */ ae(function(r, i) {
  var n = r.a11yTitle;
  r.color, r.size, r.theme;
  var a = Ih(r, Oh);
  return /* @__PURE__ */ Mt.createElement("svg", Gn({
    ref: i,
    "aria-label": n
  }, a));
});
vs.displayName = "Icon";
var mi = di(vs).withConfig({
  // don't let height attribute leak to DOM
  // https://styled-components.com/docs/api#shouldforwardprop
  shouldForwardProp: function(i) {
    return !["height", "width"].includes(i);
  }
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-ofa7kd-0"
})(["display:inline-block;flex:0 0 auto;", " ", " ", " ", ""], function(r) {
  var i, n = r.size, a = n === void 0 ? "medium" : n, l = r.theme, o = r.viewBox, h = (o || "0 0 24 24").split(" "), c = h[2], f = h[3], _ = c / f, m = l.icon.size[a] || a, p = si(m), v = ((i = m.match(/[a-z]+$/)) == null ? void 0 : i[0]) || "px";
  return c < f ? `
      width: ` + p + v + `;
      height: ` + p / _ + v + `;
    ` : f < c ? `
      width: ` + p * _ + v + `;
      height: ` + p + v + `;
    ` : `
      width: ` + p + v + `;
      height: ` + p + v + `;
    `;
}, function(r) {
  var i = r.color;
  return i !== "plain" && Ah;
}, function(r) {
  return (r.height || r.width) && Sh(r);
}, function(r) {
  var i = r.theme;
  return i && i.icon.extend;
});
mi.defaultProps = {};
Object.setPrototypeOf(mi.defaultProps, Eh);
function Hi() {
  return Hi = Object.assign ? Object.assign.bind() : function(r) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
    }
    return r;
  }, Hi.apply(this, arguments);
}
var ys = /* @__PURE__ */ ae(function(r, i) {
  var n = Mh(r);
  return /* @__PURE__ */ Mt.createElement(mi, Hi({
    ref: i,
    viewBox: "0 0 24 24",
    a11yTitle: "Add"
  }, r), /* @__PURE__ */ Mt.createElement("path", Hi({
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 22V2M2 12h20"
  }, n)));
});
ys.displayName = "Add";
function qn() {
  return qn = Object.assign ? Object.assign.bind() : function(r) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
    }
    return r;
  }, qn.apply(this, arguments);
}
var bs = /* @__PURE__ */ ae(function(r, i) {
  return /* @__PURE__ */ Mt.createElement(mi, qn({
    ref: i,
    viewBox: "0 0 24 24",
    a11yTitle: "Globe"
  }, r), /* @__PURE__ */ Mt.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 8s3.5 1 5 2 .564 2.42 1 3c.436.58 2-1 2 2s3 1 3 4 2.5 2.5 3 1 2.233-3.134 2-5c-.233-1.866-1-3-3-3s-3.5-.5-4-2 3-2 2-5 0-4 0-4m10 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z"
  }));
});
bs.displayName = "Globe";
function Xn() {
  return Xn = Object.assign ? Object.assign.bind() : function(r) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
    }
    return r;
  }, Xn.apply(this, arguments);
}
var xs = /* @__PURE__ */ ae(function(r, i) {
  return /* @__PURE__ */ Mt.createElement(mi, Xn({
    ref: i,
    viewBox: "0 0 24 24",
    a11yTitle: "Subtract"
  }, r), /* @__PURE__ */ Mt.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2 12h20"
  }));
});
xs.displayName = "Subtract";
const Zh = ({ locations: r }) => {
  const i = qi.latLngBounds();
  return r.features ? r.features.forEach((n) => {
    var a, l;
    i.extend([
      (a = n.geometry) == null ? void 0 : a.coordinates[0],
      (l = n.geometry) == null ? void 0 : l.coordinates[1]
    ]);
  }) : Array.isArray(r[0]) ? r.forEach((n) => {
    i.extend([n == null ? void 0 : n[0], n == null ? void 0 : n[1]]);
  }) : r.forEach((n) => {
    i.extend([n == null ? void 0 : n.lat, n == null ? void 0 : n.lng]);
  }), i;
}, Dh = 1.5, Rh = ({ locations: r }) => {
  const i = or(), n = r && Zh({ locations: r }), [a, l] = Mt.useState(!1);
  return jt(() => {
    n && !a && // eslint-disable-next-line no-underscore-dangle
    (JSON.stringify(n._northEast) === JSON.stringify(n._southWest) || i.flyToBounds(n, { duration: Dh }));
  }, [n, i, a]), jt(() => {
    l(!0);
  }, []), // css classes are coming from https://github.com/Leaflet/Leaflet/blob/main/dist/leaflet.css
  /* @__PURE__ */ ut(ve, { className: "leaflet-bottom leaflet-right", children: /* @__PURE__ */ ut(ve, { className: "leaflet-control", children: /* @__PURE__ */ nr(ve, { elevation: "large", round: "medium", background: "background", children: [
    /* @__PURE__ */ ut(
      Mn,
      {
        a11yTitle: "Zoom in",
        icon: /* @__PURE__ */ ut(ys, {}),
        onClick: (o) => {
          o.preventDefault(), i.zoomIn();
        }
      }
    ),
    /* @__PURE__ */ ut(
      Mn,
      {
        a11yTitle: "Zoom out",
        icon: /* @__PURE__ */ ut(xs, {}),
        onClick: (o) => {
          o.preventDefault(), i.zoomOut();
        }
      }
    ),
    /* @__PURE__ */ ut(
      ve,
      {
        border: {
          color: "border-weak",
          side: "top"
        },
        children: n && /* @__PURE__ */ ut(
          Mn,
          {
            a11yTitle: "Zoom to data",
            icon: /* @__PURE__ */ ut(bs, {}),
            onClick: (o) => {
              o.preventDefault(), i.flyToBounds(n, { duration: 1.5 });
            }
          }
        )
      }
    )
  ] }) }) });
};
Rh.propTypes = {
  locations: nt.oneOfType([
    nt.arrayOf(
      nt.oneOfType([
        nt.arrayOf(nt.number),
        nt.shape({
          lat: nt.number,
          lng: nt.number
        })
      ])
    ),
    nt.object
  ])
};
const ws = {
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
}, Fh = ui(ws, {
  default: {
    container: {
      height: { min: "25px", max: "25px" },
      width: { min: "25px", max: "25px" }
    }
  }
}), jh = {
  pin: {
    ...Fh
  },
  cluster: {
    ...ws,
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
function $(r, i) {
  this.x = r, this.y = i;
}
$.prototype = {
  /**
   * Clone this point, returning a new point that can be modified
   * without affecting the old one.
   * @return {Point} the clone
   */
  clone() {
    return new $(this.x, this.y);
  },
  /**
   * Add this point's x & y coordinates to another point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  add(r) {
    return this.clone()._add(r);
  },
  /**
   * Subtract this point's x & y coordinates to from point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  sub(r) {
    return this.clone()._sub(r);
  },
  /**
   * Multiply this point's x & y coordinates by point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  multByPoint(r) {
    return this.clone()._multByPoint(r);
  },
  /**
   * Divide this point's x & y coordinates by point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  divByPoint(r) {
    return this.clone()._divByPoint(r);
  },
  /**
   * Multiply this point's x & y coordinates by a factor,
   * yielding a new point.
   * @param {number} k factor
   * @return {Point} output point
   */
  mult(r) {
    return this.clone()._mult(r);
  },
  /**
   * Divide this point's x & y coordinates by a factor,
   * yielding a new point.
   * @param {number} k factor
   * @return {Point} output point
   */
  div(r) {
    return this.clone()._div(r);
  },
  /**
   * Rotate this point around the 0, 0 origin by an angle a,
   * given in radians
   * @param {number} a angle to rotate around, in radians
   * @return {Point} output point
   */
  rotate(r) {
    return this.clone()._rotate(r);
  },
  /**
   * Rotate this point around p point by an angle a,
   * given in radians
   * @param {number} a angle to rotate around, in radians
   * @param {Point} p Point to rotate around
   * @return {Point} output point
   */
  rotateAround(r, i) {
    return this.clone()._rotateAround(r, i);
  },
  /**
   * Multiply this point by a 4x1 transformation matrix
   * @param {[number, number, number, number]} m transformation matrix
   * @return {Point} output point
   */
  matMult(r) {
    return this.clone()._matMult(r);
  },
  /**
   * Calculate this point but as a unit vector from 0, 0, meaning
   * that the distance from the resulting point to the 0, 0
   * coordinate will be equal to 1 and the angle from the resulting
   * point to the 0, 0 coordinate will be the same as before.
   * @return {Point} unit vector point
   */
  unit() {
    return this.clone()._unit();
  },
  /**
   * Compute a perpendicular point, where the new y coordinate
   * is the old x coordinate and the new x coordinate is the old y
   * coordinate multiplied by -1
   * @return {Point} perpendicular point
   */
  perp() {
    return this.clone()._perp();
  },
  /**
   * Return a version of this point with the x & y coordinates
   * rounded to integers.
   * @return {Point} rounded point
   */
  round() {
    return this.clone()._round();
  },
  /**
   * Return the magnitude of this point: this is the Euclidean
   * distance from the 0, 0 coordinate to this point's x and y
   * coordinates.
   * @return {number} magnitude
   */
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  /**
   * Judge whether this point is equal to another point, returning
   * true or false.
   * @param {Point} other the other point
   * @return {boolean} whether the points are equal
   */
  equals(r) {
    return this.x === r.x && this.y === r.y;
  },
  /**
   * Calculate the distance from this point to another point
   * @param {Point} p the other point
   * @return {number} distance
   */
  dist(r) {
    return Math.sqrt(this.distSqr(r));
  },
  /**
   * Calculate the distance from this point to another point,
   * without the square root step. Useful if you're comparing
   * relative distances.
   * @param {Point} p the other point
   * @return {number} distance
   */
  distSqr(r) {
    const i = r.x - this.x, n = r.y - this.y;
    return i * i + n * n;
  },
  /**
   * Get the angle from the 0, 0 coordinate to this point, in radians
   * coordinates.
   * @return {number} angle
   */
  angle() {
    return Math.atan2(this.y, this.x);
  },
  /**
   * Get the angle from this point to another point, in radians
   * @param {Point} b the other point
   * @return {number} angle
   */
  angleTo(r) {
    return Math.atan2(this.y - r.y, this.x - r.x);
  },
  /**
   * Get the angle between this point and another point, in radians
   * @param {Point} b the other point
   * @return {number} angle
   */
  angleWith(r) {
    return this.angleWithSep(r.x, r.y);
  },
  /**
   * Find the angle of the two vectors, solving the formula for
   * the cross product a x b = |a||b|sin(θ) for θ.
   * @param {number} x the x-coordinate
   * @param {number} y the y-coordinate
   * @return {number} the angle in radians
   */
  angleWithSep(r, i) {
    return Math.atan2(
      this.x * i - this.y * r,
      this.x * r + this.y * i
    );
  },
  /** @param {[number, number, number, number]} m */
  _matMult(r) {
    const i = r[0] * this.x + r[1] * this.y, n = r[2] * this.x + r[3] * this.y;
    return this.x = i, this.y = n, this;
  },
  /** @param {Point} p */
  _add(r) {
    return this.x += r.x, this.y += r.y, this;
  },
  /** @param {Point} p */
  _sub(r) {
    return this.x -= r.x, this.y -= r.y, this;
  },
  /** @param {number} k */
  _mult(r) {
    return this.x *= r, this.y *= r, this;
  },
  /** @param {number} k */
  _div(r) {
    return this.x /= r, this.y /= r, this;
  },
  /** @param {Point} p */
  _multByPoint(r) {
    return this.x *= r.x, this.y *= r.y, this;
  },
  /** @param {Point} p */
  _divByPoint(r) {
    return this.x /= r.x, this.y /= r.y, this;
  },
  _unit() {
    return this._div(this.mag()), this;
  },
  _perp() {
    const r = this.y;
    return this.y = this.x, this.x = -r, this;
  },
  /** @param {number} angle */
  _rotate(r) {
    const i = Math.cos(r), n = Math.sin(r), a = i * this.x - n * this.y, l = n * this.x + i * this.y;
    return this.x = a, this.y = l, this;
  },
  /**
   * @param {number} angle
   * @param {Point} p
   */
  _rotateAround(r, i) {
    const n = Math.cos(r), a = Math.sin(r), l = i.x + n * (this.x - i.x) - a * (this.y - i.y), o = i.y + a * (this.x - i.x) + n * (this.y - i.y);
    return this.x = l, this.y = o, this;
  },
  _round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  },
  constructor: $
};
$.convert = function(r) {
  if (r instanceof $)
    return (
      /** @type {Point} */
      r
    );
  if (Array.isArray(r))
    return new $(+r[0], +r[1]);
  if (r.x !== void 0 && r.y !== void 0)
    return new $(+r.x, +r.y);
  throw new Error("Expected [x, y] or {x, y} point format");
};
function Be(r, i, n) {
  return Math.min(Math.max(r, n), i);
}
class Nh extends Error {
  constructor(i) {
    super(`Failed to parse color: "${i}"`);
  }
}
var ni = Nh;
function Zo(r) {
  if (typeof r != "string") throw new ni(r);
  if (r.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let i = r.trim();
  i = Xh.test(r) ? Hh(r) : r;
  const n = Wh.exec(i);
  if (n) {
    const h = Array.from(n).slice(1);
    return [...h.slice(0, 3).map((c) => parseInt(ci(c, 2), 16)), parseInt(ci(h[3] || "f", 2), 16) / 255];
  }
  const a = Yh.exec(i);
  if (a) {
    const h = Array.from(a).slice(1);
    return [...h.slice(0, 3).map((c) => parseInt(c, 16)), parseInt(h[3] || "ff", 16) / 255];
  }
  const l = Gh.exec(i);
  if (l) {
    const h = Array.from(l).slice(1);
    return [...h.slice(0, 3).map((c) => parseInt(c, 10)), parseFloat(h[3] || "1")];
  }
  const o = qh.exec(i);
  if (o) {
    const [h, c, f, _] = Array.from(o).slice(1).map(parseFloat);
    if (Be(0, 100, c) !== c) throw new ni(r);
    if (Be(0, 100, f) !== f) throw new ni(r);
    return [...$h(h, c, f), Number.isNaN(_) ? 1 : _];
  }
  throw new ni(r);
}
function Uh(r) {
  let i = 5381, n = r.length;
  for (; n; )
    i = i * 33 ^ r.charCodeAt(--n);
  return (i >>> 0) % 2341;
}
const Do = (r) => parseInt(r.replace(/_/g, ""), 36), Vh = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((r, i) => {
  const n = Do(i.substring(0, 3)), a = Do(i.substring(3)).toString(16);
  let l = "";
  for (let o = 0; o < 6 - a.length; o++)
    l += "0";
  return r[n] = `${l}${a}`, r;
}, {});
function Hh(r) {
  const i = r.toLowerCase().trim(), n = Vh[Uh(i)];
  if (!n) throw new ni(r);
  return `#${n}`;
}
const ci = (r, i) => Array.from(Array(i)).map(() => r).join(""), Wh = new RegExp(`^#${ci("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), Yh = new RegExp(`^#${ci("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), Gh = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${ci(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), qh = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, Xh = /^[a-z]+$/i, Ro = (r) => Math.round(r * 255), $h = (r, i, n) => {
  let a = n / 100;
  if (i === 0)
    return [a, a, a].map(Ro);
  const l = (r % 360 + 360) % 360 / 60, o = (1 - Math.abs(2 * a - 1)) * (i / 100), h = o * (1 - Math.abs(l % 2 - 1));
  let c = 0, f = 0, _ = 0;
  l >= 0 && l < 1 ? (c = o, f = h) : l >= 1 && l < 2 ? (c = h, f = o) : l >= 2 && l < 3 ? (f = o, _ = h) : l >= 3 && l < 4 ? (f = h, _ = o) : l >= 4 && l < 5 ? (c = h, _ = o) : l >= 5 && l < 6 && (c = o, _ = h);
  const m = a - o / 2, p = c + m, v = f + m, y = _ + m;
  return [p, v, y].map(Ro);
};
function Kh(r, i, n, a) {
  return `rgba(${Be(0, 255, r).toFixed()}, ${Be(0, 255, i).toFixed()}, ${Be(0, 255, n).toFixed()}, ${parseFloat(Be(0, 1, a).toFixed(3))})`;
}
function An(r, i, n) {
  const a = (S, rt) => (
    // 3rd index is alpha channel which is already normalized
    rt === 3 ? S : S / 255
  ), [l, o, h, c] = Zo(r).map(a), [f, _, m, p] = Zo(i).map(a), v = p - c, y = n * 2 - 1, x = ((y * v === -1 ? y : y + v / (1 + y * v)) + 1) / 2, E = 1 - x, M = (l * E + f * x) * 255, I = (o * E + _ * x) * 255, A = (h * E + m * x) * 255, O = p * n + c * (1 - n);
  return Kh(M, I, A, O);
}
class Ls {
  /**
   * @param {Pbf} pbf
   * @param {number} end
   * @param {number} extent
   * @param {string[]} keys
   * @param {unknown[]} values
   */
  constructor(i, n, a, l, o) {
    this.properties = {}, this.extent = a, this.type = 0, this.id = void 0, this._pbf = i, this._geometry = -1, this._keys = l, this._values = o, i.readFields(Jh, this, n);
  }
  loadGeometry() {
    const i = this._pbf;
    i.pos = this._geometry;
    const n = i.readVarint() + i.pos, a = [];
    let l, o = 1, h = 0, c = 0, f = 0;
    for (; i.pos < n; ) {
      if (h <= 0) {
        const _ = i.readVarint();
        o = _ & 7, h = _ >> 3;
      }
      if (h--, o === 1 || o === 2)
        c += i.readSVarint(), f += i.readSVarint(), o === 1 && (l && a.push(l), l = []), l && l.push(new $(c, f));
      else if (o === 7)
        l && l.push(l[0].clone());
      else
        throw new Error(`unknown command ${o}`);
    }
    return l && a.push(l), a;
  }
  bbox() {
    const i = this._pbf;
    i.pos = this._geometry;
    const n = i.readVarint() + i.pos;
    let a = 1, l = 0, o = 0, h = 0, c = 1 / 0, f = -1 / 0, _ = 1 / 0, m = -1 / 0;
    for (; i.pos < n; ) {
      if (l <= 0) {
        const p = i.readVarint();
        a = p & 7, l = p >> 3;
      }
      if (l--, a === 1 || a === 2)
        o += i.readSVarint(), h += i.readSVarint(), o < c && (c = o), o > f && (f = o), h < _ && (_ = h), h > m && (m = h);
      else if (a !== 7)
        throw new Error(`unknown command ${a}`);
    }
    return [c, _, f, m];
  }
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @return {Feature}
   */
  toGeoJSON(i, n, a) {
    const l = this.extent * Math.pow(2, a), o = this.extent * i, h = this.extent * n, c = this.loadGeometry();
    function f(v) {
      return [
        (v.x + o) * 360 / l - 180,
        360 / Math.PI * Math.atan(Math.exp((1 - (v.y + h) * 2 / l) * Math.PI)) - 90
      ];
    }
    function _(v) {
      return v.map(f);
    }
    let m;
    if (this.type === 1) {
      const v = [];
      for (const w of c)
        v.push(w[0]);
      const y = _(v);
      m = v.length === 1 ? { type: "Point", coordinates: y[0] } : { type: "MultiPoint", coordinates: y };
    } else if (this.type === 2) {
      const v = c.map(_);
      m = v.length === 1 ? { type: "LineString", coordinates: v[0] } : { type: "MultiLineString", coordinates: v };
    } else if (this.type === 3) {
      const v = tu(c), y = [];
      for (const w of v)
        y.push(w.map(_));
      m = y.length === 1 ? { type: "Polygon", coordinates: y[0] } : { type: "MultiPolygon", coordinates: y };
    } else
      throw new Error("unknown feature type");
    const p = {
      type: "Feature",
      geometry: m,
      properties: this.properties
    };
    return this.id != null && (p.id = this.id), p;
  }
}
Ls.types = ["Unknown", "Point", "LineString", "Polygon"];
function Jh(r, i, n) {
  r === 1 ? i.id = n.readVarint() : r === 2 ? Qh(n, i) : r === 3 ? i.type = /** @type {0 | 1 | 2 | 3} */
  n.readVarint() : r === 4 && (i._geometry = n.pos);
}
function Qh(r, i) {
  const n = r.readVarint() + r.pos;
  for (; r.pos < n; ) {
    const a = i._keys[r.readVarint()], l = i._values[r.readVarint()];
    i.properties[a] = l;
  }
}
function tu(r) {
  const i = r.length;
  if (i <= 1) return [r];
  const n = [];
  let a, l;
  for (let o = 0; o < i; o++) {
    const h = eu(r[o]);
    h !== 0 && (l === void 0 && (l = h < 0), l === h < 0 ? (a && n.push(a), a = [r[o]]) : a && a.push(r[o]));
  }
  return a && n.push(a), n;
}
function eu(r) {
  let i = 0;
  for (let n = 0, a = r.length, l = a - 1, o, h; n < a; l = n++)
    o = r[n], h = r[l], i += (h.x - o.x) * (o.y + h.y);
  return i;
}
class iu {
  /**
   * @param {Pbf} pbf
   * @param {number} [end]
   */
  constructor(i, n) {
    this.version = 1, this.name = "", this.extent = 4096, this.length = 0, this._pbf = i, this._keys = [], this._values = [], this._features = [], i.readFields(nu, this, n), this.length = this._features.length;
  }
  /** return feature `i` from this layer as a `VectorTileFeature`
   * @param {number} i
   */
  feature(i) {
    if (i < 0 || i >= this._features.length) throw new Error("feature index out of bounds");
    this._pbf.pos = this._features[i];
    const n = this._pbf.readVarint() + this._pbf.pos;
    return new Ls(this._pbf, n, this.extent, this._keys, this._values);
  }
}
function nu(r, i, n) {
  r === 15 ? i.version = n.readVarint() : r === 1 ? i.name = n.readString() : r === 5 ? i.extent = n.readVarint() : r === 2 ? i._features.push(n.pos) : r === 3 ? i._keys.push(n.readString()) : r === 4 && i._values.push(ru(n));
}
function ru(r) {
  let i = null;
  const n = r.readVarint() + r.pos;
  for (; r.pos < n; ) {
    const a = r.readVarint() >> 3;
    i = a === 1 ? r.readString() : a === 2 ? r.readFloat() : a === 3 ? r.readDouble() : a === 4 ? r.readVarint64() : a === 5 ? r.readVarint() : a === 6 ? r.readSVarint() : a === 7 ? r.readBoolean() : null;
  }
  return i;
}
class ou {
  /**
   * @param {Pbf} pbf
   * @param {number} [end]
   */
  constructor(i, n) {
    this.layers = i.readFields(su, {}, n);
  }
}
function su(r, i, n) {
  if (r === 3) {
    const a = new iu(n, n.readVarint() + n.pos);
    a.length && (i[a.name] = a);
  }
}
const $n = 65536 * 65536, Fo = 1 / $n, au = 12, jo = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8"), Zn = 0, Di = 1, Je = 2, Ri = 5;
class lu {
  /**
   * @param {Uint8Array | ArrayBuffer} [buf]
   */
  constructor(i = new Uint8Array(16)) {
    this.buf = ArrayBuffer.isView(i) ? i : new Uint8Array(i), this.dataView = new DataView(this.buf.buffer), this.pos = 0, this.type = 0, this.length = this.buf.length;
  }
  // === READING =================================================================
  /**
   * @template T
   * @param {(tag: number, result: T, pbf: Pbf) => void} readField
   * @param {T} result
   * @param {number} [end]
   */
  readFields(i, n, a = this.length) {
    for (; this.pos < a; ) {
      const l = this.readVarint(), o = l >> 3, h = this.pos;
      this.type = l & 7, i(o, n, this), this.pos === h && this.skip(l);
    }
    return n;
  }
  /**
   * @template T
   * @param {(tag: number, result: T, pbf: Pbf) => void} readField
   * @param {T} result
   */
  readMessage(i, n) {
    return this.readFields(i, n, this.readVarint() + this.pos);
  }
  readFixed32() {
    const i = this.dataView.getUint32(this.pos, !0);
    return this.pos += 4, i;
  }
  readSFixed32() {
    const i = this.dataView.getInt32(this.pos, !0);
    return this.pos += 4, i;
  }
  // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)
  readFixed64() {
    const i = this.dataView.getUint32(this.pos, !0) + this.dataView.getUint32(this.pos + 4, !0) * $n;
    return this.pos += 8, i;
  }
  readSFixed64() {
    const i = this.dataView.getUint32(this.pos, !0) + this.dataView.getInt32(this.pos + 4, !0) * $n;
    return this.pos += 8, i;
  }
  readFloat() {
    const i = this.dataView.getFloat32(this.pos, !0);
    return this.pos += 4, i;
  }
  readDouble() {
    const i = this.dataView.getFloat64(this.pos, !0);
    return this.pos += 8, i;
  }
  /**
   * @param {boolean} [isSigned]
   */
  readVarint(i) {
    const n = this.buf;
    let a, l;
    return l = n[this.pos++], a = l & 127, l < 128 || (l = n[this.pos++], a |= (l & 127) << 7, l < 128) || (l = n[this.pos++], a |= (l & 127) << 14, l < 128) || (l = n[this.pos++], a |= (l & 127) << 21, l < 128) ? a : (l = n[this.pos], a |= (l & 15) << 28, hu(a, i, this));
  }
  readVarint64() {
    return this.readVarint(!0);
  }
  readSVarint() {
    const i = this.readVarint();
    return i % 2 === 1 ? (i + 1) / -2 : i / 2;
  }
  readBoolean() {
    return !!this.readVarint();
  }
  readString() {
    const i = this.readVarint() + this.pos, n = this.pos;
    return this.pos = i, i - n >= au && jo ? jo.decode(this.buf.subarray(n, i)) : wu(this.buf, n, i);
  }
  readBytes() {
    const i = this.readVarint() + this.pos, n = this.buf.subarray(this.pos, i);
    return this.pos = i, n;
  }
  // verbose for performance reasons; doesn't affect gzipped size
  /**
   * @param {number[]} [arr]
   * @param {boolean} [isSigned]
   */
  readPackedVarint(i = [], n) {
    const a = this.readPackedEnd();
    for (; this.pos < a; ) i.push(this.readVarint(n));
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedSVarint(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readSVarint());
    return i;
  }
  /** @param {boolean[]} [arr] */
  readPackedBoolean(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readBoolean());
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedFloat(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readFloat());
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedDouble(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readDouble());
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedFixed32(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readFixed32());
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedSFixed32(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readSFixed32());
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedFixed64(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readFixed64());
    return i;
  }
  /** @param {number[]} [arr] */
  readPackedSFixed64(i = []) {
    const n = this.readPackedEnd();
    for (; this.pos < n; ) i.push(this.readSFixed64());
    return i;
  }
  readPackedEnd() {
    return this.type === Je ? this.readVarint() + this.pos : this.pos + 1;
  }
  /** @param {number} val */
  skip(i) {
    const n = i & 7;
    if (n === Zn) for (; this.buf[this.pos++] > 127; )
      ;
    else if (n === Je) this.pos = this.readVarint() + this.pos;
    else if (n === Ri) this.pos += 4;
    else if (n === Di) this.pos += 8;
    else throw new Error(`Unimplemented type: ${n}`);
  }
  // === WRITING =================================================================
  /**
   * @param {number} tag
   * @param {number} type
   */
  writeTag(i, n) {
    this.writeVarint(i << 3 | n);
  }
  /** @param {number} min */
  realloc(i) {
    let n = this.length || 16;
    for (; n < this.pos + i; ) n *= 2;
    if (n !== this.length) {
      const a = new Uint8Array(n);
      a.set(this.buf), this.buf = a, this.dataView = new DataView(a.buffer), this.length = n;
    }
  }
  finish() {
    return this.length = this.pos, this.pos = 0, this.buf.subarray(0, this.length);
  }
  /** @param {number} val */
  writeFixed32(i) {
    this.realloc(4), this.dataView.setInt32(this.pos, i, !0), this.pos += 4;
  }
  /** @param {number} val */
  writeSFixed32(i) {
    this.realloc(4), this.dataView.setInt32(this.pos, i, !0), this.pos += 4;
  }
  /** @param {number} val */
  writeFixed64(i) {
    this.realloc(8), this.dataView.setInt32(this.pos, i & -1, !0), this.dataView.setInt32(this.pos + 4, Math.floor(i * Fo), !0), this.pos += 8;
  }
  /** @param {number} val */
  writeSFixed64(i) {
    this.realloc(8), this.dataView.setInt32(this.pos, i & -1, !0), this.dataView.setInt32(this.pos + 4, Math.floor(i * Fo), !0), this.pos += 8;
  }
  /** @param {number} val */
  writeVarint(i) {
    if (i = +i || 0, i > 268435455 || i < 0) {
      uu(i, this);
      return;
    }
    this.realloc(4), this.buf[this.pos++] = i & 127 | (i > 127 ? 128 : 0), !(i <= 127) && (this.buf[this.pos++] = (i >>>= 7) & 127 | (i > 127 ? 128 : 0), !(i <= 127) && (this.buf[this.pos++] = (i >>>= 7) & 127 | (i > 127 ? 128 : 0), !(i <= 127) && (this.buf[this.pos++] = i >>> 7 & 127)));
  }
  /** @param {number} val */
  writeSVarint(i) {
    this.writeVarint(i < 0 ? -i * 2 - 1 : i * 2);
  }
  /** @param {boolean} val */
  writeBoolean(i) {
    this.writeVarint(+i);
  }
  /** @param {string} str */
  writeString(i) {
    i = String(i), this.realloc(i.length * 4), this.pos++;
    const n = this.pos;
    this.pos = Lu(this.buf, i, this.pos);
    const a = this.pos - n;
    a >= 128 && No(n, a, this), this.pos = n - 1, this.writeVarint(a), this.pos += a;
  }
  /** @param {number} val */
  writeFloat(i) {
    this.realloc(4), this.dataView.setFloat32(this.pos, i, !0), this.pos += 4;
  }
  /** @param {number} val */
  writeDouble(i) {
    this.realloc(8), this.dataView.setFloat64(this.pos, i, !0), this.pos += 8;
  }
  /** @param {Uint8Array} buffer */
  writeBytes(i) {
    const n = i.length;
    this.writeVarint(n), this.realloc(n);
    for (let a = 0; a < n; a++) this.buf[this.pos++] = i[a];
  }
  /**
   * @template T
   * @param {(obj: T, pbf: Pbf) => void} fn
   * @param {T} obj
   */
  writeRawMessage(i, n) {
    this.pos++;
    const a = this.pos;
    i(n, this);
    const l = this.pos - a;
    l >= 128 && No(a, l, this), this.pos = a - 1, this.writeVarint(l), this.pos += l;
  }
  /**
   * @template T
   * @param {number} tag
   * @param {(obj: T, pbf: Pbf) => void} fn
   * @param {T} obj
   */
  writeMessage(i, n, a) {
    this.writeTag(i, Je), this.writeRawMessage(n, a);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedVarint(i, n) {
    n.length && this.writeMessage(i, du, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedSVarint(i, n) {
    n.length && this.writeMessage(i, _u, n);
  }
  /**
   * @param {number} tag
   * @param {boolean[]} arr
   */
  writePackedBoolean(i, n) {
    n.length && this.writeMessage(i, gu, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedFloat(i, n) {
    n.length && this.writeMessage(i, mu, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedDouble(i, n) {
    n.length && this.writeMessage(i, pu, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedFixed32(i, n) {
    n.length && this.writeMessage(i, vu, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedSFixed32(i, n) {
    n.length && this.writeMessage(i, yu, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedFixed64(i, n) {
    n.length && this.writeMessage(i, bu, n);
  }
  /**
   * @param {number} tag
   * @param {number[]} arr
   */
  writePackedSFixed64(i, n) {
    n.length && this.writeMessage(i, xu, n);
  }
  /**
   * @param {number} tag
   * @param {Uint8Array} buffer
   */
  writeBytesField(i, n) {
    this.writeTag(i, Je), this.writeBytes(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeFixed32Field(i, n) {
    this.writeTag(i, Ri), this.writeFixed32(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeSFixed32Field(i, n) {
    this.writeTag(i, Ri), this.writeSFixed32(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeFixed64Field(i, n) {
    this.writeTag(i, Di), this.writeFixed64(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeSFixed64Field(i, n) {
    this.writeTag(i, Di), this.writeSFixed64(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeVarintField(i, n) {
    this.writeTag(i, Zn), this.writeVarint(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeSVarintField(i, n) {
    this.writeTag(i, Zn), this.writeSVarint(n);
  }
  /**
   * @param {number} tag
   * @param {string} str
   */
  writeStringField(i, n) {
    this.writeTag(i, Je), this.writeString(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeFloatField(i, n) {
    this.writeTag(i, Ri), this.writeFloat(n);
  }
  /**
   * @param {number} tag
   * @param {number} val
   */
  writeDoubleField(i, n) {
    this.writeTag(i, Di), this.writeDouble(n);
  }
  /**
   * @param {number} tag
   * @param {boolean} val
   */
  writeBooleanField(i, n) {
    this.writeVarintField(i, +n);
  }
}
function hu(r, i, n) {
  const a = n.buf;
  let l, o;
  if (o = a[n.pos++], l = (o & 112) >> 4, o < 128 || (o = a[n.pos++], l |= (o & 127) << 3, o < 128) || (o = a[n.pos++], l |= (o & 127) << 10, o < 128) || (o = a[n.pos++], l |= (o & 127) << 17, o < 128) || (o = a[n.pos++], l |= (o & 127) << 24, o < 128) || (o = a[n.pos++], l |= (o & 1) << 31, o < 128)) return ze(r, l, i);
  throw new Error("Expected varint not more than 10 bytes");
}
function ze(r, i, n) {
  return n ? i * 4294967296 + (r >>> 0) : (i >>> 0) * 4294967296 + (r >>> 0);
}
function uu(r, i) {
  let n, a;
  if (r >= 0 ? (n = r % 4294967296 | 0, a = r / 4294967296 | 0) : (n = ~(-r % 4294967296), a = ~(-r / 4294967296), n ^ 4294967295 ? n = n + 1 | 0 : (n = 0, a = a + 1 | 0)), r >= 18446744073709552e3 || r < -18446744073709552e3)
    throw new Error("Given varint doesn't fit into 10 bytes");
  i.realloc(10), cu(n, a, i), fu(a, i);
}
function cu(r, i, n) {
  n.buf[n.pos++] = r & 127 | 128, r >>>= 7, n.buf[n.pos++] = r & 127 | 128, r >>>= 7, n.buf[n.pos++] = r & 127 | 128, r >>>= 7, n.buf[n.pos++] = r & 127 | 128, r >>>= 7, n.buf[n.pos] = r & 127;
}
function fu(r, i) {
  const n = (r & 7) << 4;
  i.buf[i.pos++] |= n | ((r >>>= 3) ? 128 : 0), r && (i.buf[i.pos++] = r & 127 | ((r >>>= 7) ? 128 : 0), r && (i.buf[i.pos++] = r & 127 | ((r >>>= 7) ? 128 : 0), r && (i.buf[i.pos++] = r & 127 | ((r >>>= 7) ? 128 : 0), r && (i.buf[i.pos++] = r & 127 | ((r >>>= 7) ? 128 : 0), r && (i.buf[i.pos++] = r & 127)))));
}
function No(r, i, n) {
  const a = i <= 16383 ? 1 : i <= 2097151 ? 2 : i <= 268435455 ? 3 : Math.floor(Math.log(i) / (Math.LN2 * 7));
  n.realloc(a);
  for (let l = n.pos - 1; l >= r; l--) n.buf[l + a] = n.buf[l];
}
function du(r, i) {
  for (let n = 0; n < r.length; n++) i.writeVarint(r[n]);
}
function _u(r, i) {
  for (let n = 0; n < r.length; n++) i.writeSVarint(r[n]);
}
function mu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeFloat(r[n]);
}
function pu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeDouble(r[n]);
}
function gu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeBoolean(r[n]);
}
function vu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeFixed32(r[n]);
}
function yu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeSFixed32(r[n]);
}
function bu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeFixed64(r[n]);
}
function xu(r, i) {
  for (let n = 0; n < r.length; n++) i.writeSFixed64(r[n]);
}
function wu(r, i, n) {
  let a = "", l = i;
  for (; l < n; ) {
    const o = r[l];
    let h = null, c = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
    if (l + c > n) break;
    let f, _, m;
    c === 1 ? o < 128 && (h = o) : c === 2 ? (f = r[l + 1], (f & 192) === 128 && (h = (o & 31) << 6 | f & 63, h <= 127 && (h = null))) : c === 3 ? (f = r[l + 1], _ = r[l + 2], (f & 192) === 128 && (_ & 192) === 128 && (h = (o & 15) << 12 | (f & 63) << 6 | _ & 63, (h <= 2047 || h >= 55296 && h <= 57343) && (h = null))) : c === 4 && (f = r[l + 1], _ = r[l + 2], m = r[l + 3], (f & 192) === 128 && (_ & 192) === 128 && (m & 192) === 128 && (h = (o & 15) << 18 | (f & 63) << 12 | (_ & 63) << 6 | m & 63, (h <= 65535 || h >= 1114112) && (h = null))), h === null ? (h = 65533, c = 1) : h > 65535 && (h -= 65536, a += String.fromCharCode(h >>> 10 & 1023 | 55296), h = 56320 | h & 1023), a += String.fromCharCode(h), l += c;
  }
  return a;
}
function Lu(r, i, n) {
  for (let a = 0, l, o; a < i.length; a++) {
    if (l = i.charCodeAt(a), l > 55295 && l < 57344)
      if (o)
        if (l < 56320) {
          r[n++] = 239, r[n++] = 191, r[n++] = 189, o = l;
          continue;
        } else
          l = o - 55296 << 10 | l - 56320 | 65536, o = null;
      else {
        l > 56319 || a + 1 === i.length ? (r[n++] = 239, r[n++] = 191, r[n++] = 189) : o = l;
        continue;
      }
    else o && (r[n++] = 239, r[n++] = 191, r[n++] = 189, o = null);
    l < 128 ? r[n++] = l : (l < 2048 ? r[n++] = l >> 6 | 192 : (l < 65536 ? r[n++] = l >> 12 | 224 : (r[n++] = l >> 18 | 240, r[n++] = l >> 12 & 63 | 128), r[n++] = l >> 6 & 63 | 128), r[n++] = l & 63 | 128);
  }
  return n;
}
var Ze = Math.pow, zt = (r, i, n) => new Promise((a, l) => {
  var o = (f) => {
    try {
      c(n.next(f));
    } catch (_) {
      l(_);
    }
  }, h = (f) => {
    try {
      c(n.throw(f));
    } catch (_) {
      l(_);
    }
  }, c = (f) => f.done ? a(f.value) : Promise.resolve(f.value).then(o, h);
  c((n = n.apply(r, i)).next());
}), Dt = Uint8Array, ai = Uint16Array, Pu = Int32Array, Ps = new Dt([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), Ts = new Dt([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Tu = new Dt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Cs = function(r, i) {
  for (var n = new ai(31), a = 0; a < 31; ++a)
    n[a] = i += 1 << r[a - 1];
  for (var l = new Pu(n[30]), a = 1; a < 30; ++a)
    for (var o = n[a]; o < n[a + 1]; ++o)
      l[o] = o - n[a] << 5 | a;
  return { b: n, r: l };
}, ks = Cs(Ps, 2), Ms = ks.b, Cu = ks.r;
Ms[28] = 258, Cu[258] = 28;
var ku = Cs(Ts, 0), Mu = ku.b, Ss = new ai(32768);
for (st = 0; st < 32768; ++st)
  se = (st & 43690) >> 1 | (st & 21845) << 1, se = (se & 52428) >> 2 | (se & 13107) << 2, se = (se & 61680) >> 4 | (se & 3855) << 4, Ss[st] = ((se & 65280) >> 8 | (se & 255) << 8) >> 1;
var se, st, li = function(r, i, n) {
  for (var a = r.length, l = 0, o = new ai(i); l < a; ++l)
    r[l] && ++o[r[l] - 1];
  var h = new ai(i);
  for (l = 1; l < i; ++l)
    h[l] = h[l - 1] + o[l - 1] << 1;
  var c;
  {
    c = new ai(1 << i);
    var f = 15 - i;
    for (l = 0; l < a; ++l)
      if (r[l])
        for (var _ = l << 4 | r[l], m = i - r[l], p = h[r[l] - 1]++ << m, v = p | (1 << m) - 1; p <= v; ++p)
          c[Ss[p] >> f] = _;
  }
  return c;
}, pi = new Dt(288);
for (st = 0; st < 144; ++st)
  pi[st] = 8;
var st;
for (st = 144; st < 256; ++st)
  pi[st] = 9;
var st;
for (st = 256; st < 280; ++st)
  pi[st] = 7;
var st;
for (st = 280; st < 288; ++st)
  pi[st] = 8;
var st, zs = new Dt(32);
for (st = 0; st < 32; ++st)
  zs[st] = 5;
var st, Su = /* @__PURE__ */ li(pi, 9), zu = /* @__PURE__ */ li(zs, 5), Dn = function(r) {
  for (var i = r[0], n = 1; n < r.length; ++n)
    r[n] > i && (i = r[n]);
  return i;
}, $t = function(r, i, n) {
  var a = i / 8 | 0;
  return (r[a] | r[a + 1] << 8) >> (i & 7) & n;
}, Rn = function(r, i) {
  var n = i / 8 | 0;
  return (r[n] | r[n + 1] << 8 | r[n + 2] << 16) >> (i & 7);
}, Eu = function(r) {
  return (r + 7) / 8 | 0;
}, Ou = function(r, i, n) {
  (n == null || n > r.length) && (n = r.length);
  var a = new Dt(n - i);
  return a.set(r.subarray(i, n)), a;
}, Iu = [
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
  // determined by unknown compression method
], At = function(r, i, n) {
  var a = new Error(i || Iu[r]);
  if (a.code = r, Error.captureStackTrace && Error.captureStackTrace(a, At), !n)
    throw a;
  return a;
}, ar = function(r, i, n, a) {
  var l = r.length, o = 0;
  if (!l || i.f && !i.l)
    return n || new Dt(0);
  var h = !n || i.i != 2, c = i.i;
  n || (n = new Dt(l * 3));
  var f = function(J) {
    var pt = n.length;
    if (J > pt) {
      var Z = new Dt(Math.max(pt * 2, J));
      Z.set(n), n = Z;
    }
  }, _ = i.f || 0, m = i.p || 0, p = i.b || 0, v = i.l, y = i.d, w = i.m, x = i.n, E = l * 8;
  do {
    if (!v) {
      _ = $t(r, m, 1);
      var M = $t(r, m + 1, 3);
      if (m += 3, M)
        if (M == 1)
          v = Su, y = zu, w = 9, x = 5;
        else if (M == 2) {
          var S = $t(r, m, 31) + 257, rt = $t(r, m + 10, 15) + 4, G = S + $t(r, m + 5, 31) + 1;
          m += 14;
          for (var tt = new Dt(G), vt = new Dt(19), ft = 0; ft < rt; ++ft)
            vt[Tu[ft]] = $t(r, m + ft * 3, 7);
          m += rt * 3;
          for (var _t = Dn(vt), Lt = (1 << _t) - 1, fe = li(vt, _t), ft = 0; ft < G; ) {
            var xt = fe[$t(r, m, Lt)];
            m += xt & 15;
            var I = xt >> 4;
            if (I < 16)
              tt[ft++] = I;
            else {
              var Nt = 0, ht = 0;
              for (I == 16 ? (ht = 3 + $t(r, m, 3), m += 2, Nt = tt[ft - 1]) : I == 17 ? (ht = 3 + $t(r, m, 7), m += 3) : I == 18 && (ht = 11 + $t(r, m, 127), m += 7); ht--; )
                tt[ft++] = Nt;
            }
          }
          var kt = tt.subarray(0, S), N = tt.subarray(S);
          w = Dn(kt), x = Dn(N), v = li(kt, w), y = li(N, x);
        } else
          At(1);
      else {
        var I = Eu(m) + 4, A = r[I - 4] | r[I - 3] << 8, O = I + A;
        if (O > l) {
          c && At(0);
          break;
        }
        h && f(p + A), n.set(r.subarray(I, O), p), i.b = p += A, i.p = m = O * 8, i.f = _;
        continue;
      }
      if (m > E) {
        c && At(0);
        break;
      }
    }
    h && f(p + 131072);
    for (var le = (1 << w) - 1, k = (1 << x) - 1, B = m; ; B = m) {
      var Nt = v[Rn(r, m) & le], U = Nt >> 4;
      if (m += Nt & 15, m > E) {
        c && At(0);
        break;
      }
      if (Nt || At(2), U < 256)
        n[p++] = U;
      else if (U == 256) {
        B = m, v = null;
        break;
      } else {
        var H = U - 254;
        if (U > 264) {
          var ft = U - 257, F = Ps[ft];
          H = $t(r, m, (1 << F) - 1) + Ms[ft], m += F;
        }
        var j = y[Rn(r, m) & k], D = j >> 4;
        j || At(3), m += j & 15;
        var N = Mu[D];
        if (D > 3) {
          var F = Ts[D];
          N += Rn(r, m) & (1 << F) - 1, m += F;
        }
        if (m > E) {
          c && At(0);
          break;
        }
        h && f(p + 131072);
        var W = p + H;
        if (p < N) {
          var q = o - N, et = Math.min(N, W);
          for (q + p < 0 && At(3); p < et; ++p)
            n[p] = a[q + p];
        }
        for (; p < W; p += 4)
          n[p] = n[p - N], n[p + 1] = n[p + 1 - N], n[p + 2] = n[p + 2 - N], n[p + 3] = n[p + 3 - N];
        p = W;
      }
    }
    i.l = v, i.p = B, i.b = p, i.f = _, v && (_ = 1, i.m = w, i.d = y, i.n = x);
  } while (!_);
  return p == n.length ? n : Ou(n, 0, p);
}, Bu = /* @__PURE__ */ new Dt(0), Au = function(r) {
  (r[0] != 31 || r[1] != 139 || r[2] != 8) && At(6, "invalid gzip data");
  var i = r[3], n = 10;
  i & 4 && (n += (r[10] | r[11] << 8) + 2);
  for (var a = (i >> 3 & 1) + (i >> 4 & 1); a > 0; a -= !r[n++])
    ;
  return n + (i & 2);
}, Zu = function(r) {
  var i = r.length;
  return (r[i - 4] | r[i - 3] << 8 | r[i - 2] << 16 | r[i - 1] << 24) >>> 0;
}, Du = function(r, i) {
  return ((r[0] & 15) != 8 || r[0] >> 4 > 7 || (r[0] << 8 | r[1]) % 31) && At(6, "invalid zlib data"), (r[1] >> 5 & 1) == +!i && At(6, "invalid zlib data: " + (r[1] & 32 ? "need" : "unexpected") + " dictionary"), (r[1] >> 3 & 4) + 2;
};
function Ru(r, i) {
  return ar(r, { i: 2 }, i, i);
}
function Fu(r, i) {
  var n = Au(r);
  return n + 8 > r.length && At(6, "invalid gzip data"), ar(r.subarray(n, -8), { i: 2 }, new Dt(Zu(r)), i);
}
function ju(r, i) {
  return ar(r.subarray(Du(r, i), -4), { i: 2 }, i, i);
}
function Kn(r, i) {
  return r[0] == 31 && r[1] == 139 && r[2] == 8 ? Fu(r, i) : (r[0] & 15) != 8 || r[0] >> 4 > 7 || (r[0] << 8 | r[1]) % 31 ? Ru(r, i) : ju(r, i);
}
var Nu = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Uu = 0;
try {
  Nu.decode(Bu, { stream: !0 }), Uu = 1;
} catch {
}
var Es = (r, i) => r * Ze(2, i), Qe = (r, i) => Math.floor(r / Ze(2, i)), Wi = (r, i) => Es(r.getUint16(i + 1, !0), 8) + r.getUint8(i), Os = (r, i) => Es(r.getUint32(i + 2, !0), 16) + r.getUint16(i, !0), Vu = (r, i, n, a, l) => {
  if (r !== a.getUint8(l))
    return r - a.getUint8(l);
  const o = Wi(a, l + 1);
  if (i !== o)
    return i - o;
  const h = Wi(a, l + 4);
  return n !== h ? n - h : 0;
}, Hu = (r, i, n, a) => {
  const l = Is(r, i | 128, n, a);
  return l ? {
    z: i,
    x: n,
    y: a,
    offset: l[0],
    length: l[1],
    isDir: !0
  } : null;
}, Uo = (r, i, n, a) => {
  const l = Is(r, i, n, a);
  return l ? {
    z: i,
    x: n,
    y: a,
    offset: l[0],
    length: l[1],
    isDir: !1
  } : null;
}, Is = (r, i, n, a) => {
  let l = 0, o = r.byteLength / 17 - 1;
  for (; l <= o; ) {
    const h = o + l >> 1, c = Vu(i, n, a, r, h * 17);
    if (c > 0)
      l = h + 1;
    else if (c < 0)
      o = h - 1;
    else
      return [Os(r, h * 17 + 7), r.getUint32(h * 17 + 13, !0)];
  }
  return null;
}, Wu = (r, i) => r.isDir && !i.isDir ? 1 : !r.isDir && i.isDir ? -1 : r.z !== i.z ? r.z - i.z : r.x !== i.x ? r.x - i.x : r.y - i.y, Bs = (r, i) => {
  const n = r.getUint8(i * 17);
  return {
    z: n & 127,
    x: Wi(r, i * 17 + 1),
    y: Wi(r, i * 17 + 4),
    offset: Os(r, i * 17 + 7),
    length: r.getUint32(i * 17 + 13, !0),
    isDir: n >> 7 === 1
  };
}, Vo = (r) => {
  const i = [], n = new DataView(r);
  for (let a = 0; a < n.byteLength / 17; a++)
    i.push(Bs(n, a));
  return Yu(i);
}, Yu = (r) => {
  r.sort(Wu);
  const i = new ArrayBuffer(17 * r.length), n = new Uint8Array(i);
  for (let a = 0; a < r.length; a++) {
    const l = r[a];
    let o = l.z;
    l.isDir && (o = o | 128), n[a * 17] = o, n[a * 17 + 1] = l.x & 255, n[a * 17 + 2] = l.x >> 8 & 255, n[a * 17 + 3] = l.x >> 16 & 255, n[a * 17 + 4] = l.y & 255, n[a * 17 + 5] = l.y >> 8 & 255, n[a * 17 + 6] = l.y >> 16 & 255, n[a * 17 + 7] = l.offset & 255, n[a * 17 + 8] = Qe(l.offset, 8) & 255, n[a * 17 + 9] = Qe(l.offset, 16) & 255, n[a * 17 + 10] = Qe(l.offset, 24) & 255, n[a * 17 + 11] = Qe(l.offset, 32) & 255, n[a * 17 + 12] = Qe(l.offset, 48) & 255, n[a * 17 + 13] = l.length & 255, n[a * 17 + 14] = l.length >> 8 & 255, n[a * 17 + 15] = l.length >> 16 & 255, n[a * 17 + 16] = l.length >> 24 & 255;
  }
  return i;
}, Gu = (r, i) => {
  if (r.byteLength < 17)
    return null;
  const n = r.byteLength / 17, a = Bs(r, n - 1);
  if (a.isDir) {
    const l = a.z, o = i.z - l, h = Math.trunc(i.x / (1 << o)), c = Math.trunc(i.y / (1 << o));
    return { z: l, x: h, y: c };
  }
  return null;
};
function qu(r) {
  return zt(this, null, function* () {
    const i = yield r.getBytes(0, 512e3), n = new DataView(i.data), a = n.getUint32(4, !0), l = n.getUint16(8, !0), o = new TextDecoder("utf-8"), h = JSON.parse(
      o.decode(new DataView(i.data, 10, a))
    );
    let c = 0;
    h.compression === "gzip" && (c = 2);
    let f = 0;
    "minzoom" in h && (f = +h.minzoom);
    let _ = 0;
    "maxzoom" in h && (_ = +h.maxzoom);
    let m = 0, p = 0, v = 0, y = -180, w = -85, x = 180, E = 85;
    if (h.bounds) {
      const I = h.bounds.split(",");
      y = +I[0], w = +I[1], x = +I[2], E = +I[3];
    }
    if (h.center) {
      const I = h.center.split(",");
      m = +I[0], p = +I[1], v = +I[2];
    }
    return {
      specVersion: n.getUint16(2, !0),
      rootDirectoryOffset: 10 + a,
      rootDirectoryLength: l * 17,
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
      minLon: y,
      minLat: w,
      maxLon: x,
      maxLat: E,
      centerZoom: v,
      centerLon: m,
      centerLat: p,
      etag: i.etag
    };
  });
}
function Xu(r, i, n, a, l, o, h) {
  return zt(this, null, function* () {
    let c = yield n.getArrayBuffer(
      i,
      r.rootDirectoryOffset,
      r.rootDirectoryLength,
      r
    );
    r.specVersion === 1 && (c = Vo(c));
    const f = Uo(new DataView(c), a, l, o);
    if (f) {
      let p = (yield i.getBytes(f.offset, f.length, h)).data;
      const v = new DataView(p);
      return v.getUint8(0) === 31 && v.getUint8(1) === 139 && (p = Kn(new Uint8Array(p))), {
        data: p
      };
    }
    const _ = Gu(new DataView(c), { z: a, x: l, y: o });
    if (_) {
      const m = Hu(
        new DataView(c),
        _.z,
        _.x,
        _.y
      );
      if (m) {
        let p = yield n.getArrayBuffer(
          i,
          m.offset,
          m.length,
          r
        );
        r.specVersion === 1 && (p = Vo(p));
        const v = Uo(new DataView(p), a, l, o);
        if (v) {
          let w = (yield i.getBytes(
            v.offset,
            v.length,
            h
          )).data;
          const x = new DataView(w);
          return x.getUint8(0) === 31 && x.getUint8(1) === 139 && (w = Kn(new Uint8Array(w))), {
            data: w
          };
        }
      }
    }
  });
}
var As = {
  getHeader: qu,
  getZxy: Xu
};
function Ee(r, i) {
  return (i >>> 0) * 4294967296 + (r >>> 0);
}
function $u(r, i) {
  const n = i.buf;
  let a = n[i.pos++], l = (a & 112) >> 4;
  if (a < 128 || (a = n[i.pos++], l |= (a & 127) << 3, a < 128) || (a = n[i.pos++], l |= (a & 127) << 10, a < 128) || (a = n[i.pos++], l |= (a & 127) << 17, a < 128) || (a = n[i.pos++], l |= (a & 127) << 24, a < 128) || (a = n[i.pos++], l |= (a & 1) << 31, a < 128))
    return Ee(r, l);
  throw new Error("Expected varint not more than 10 bytes");
}
function ti(r) {
  const i = r.buf;
  let n = i[r.pos++], a = n & 127;
  return n < 128 || (n = i[r.pos++], a |= (n & 127) << 7, n < 128) || (n = i[r.pos++], a |= (n & 127) << 14, n < 128) || (n = i[r.pos++], a |= (n & 127) << 21, n < 128) ? a : (n = i[r.pos], a |= (n & 15) << 28, $u(a, r));
}
function Ku(r, i, n, a) {
  if (a === 0) {
    n === 1 && (i[0] = r - 1 - i[0], i[1] = r - 1 - i[1]);
    const l = i[0];
    i[0] = i[1], i[1] = l;
  }
}
var Ju = [
  0,
  1,
  5,
  21,
  85,
  341,
  1365,
  5461,
  21845,
  87381,
  349525,
  1398101,
  5592405,
  22369621,
  89478485,
  357913941,
  1431655765,
  5726623061,
  22906492245,
  91625968981,
  366503875925,
  1466015503701,
  5864062014805,
  23456248059221,
  93824992236885,
  375299968947541,
  1501199875790165
];
function Qu(r, i, n) {
  if (r > 26)
    throw Error("Tile zoom level exceeds max safe number limit (26)");
  if (i > Ze(2, r) - 1 || n > Ze(2, r) - 1)
    throw Error("tile x/y outside zoom level bounds");
  const a = Ju[r], l = Ze(2, r);
  let o = 0, h = 0, c = 0;
  const f = [i, n];
  let _ = l / 2;
  for (; _ > 0; )
    o = (f[0] & _) > 0 ? 1 : 0, h = (f[1] & _) > 0 ? 1 : 0, c += _ * _ * (3 * o ^ h), Ku(_, f, o, h), _ = _ / 2;
  return a + c;
}
function Zs(r, i) {
  return zt(this, null, function* () {
    if (i === 1 || i === 0)
      return r;
    if (i === 2) {
      if (typeof globalThis.DecompressionStream > "u")
        return Kn(new Uint8Array(r));
      const n = new Response(r).body;
      if (!n)
        throw Error("Failed to read response stream");
      const a = n.pipeThrough(
        // biome-ignore lint: needed to detect DecompressionStream in browser+node+cloudflare workers
        new globalThis.DecompressionStream("gzip")
      );
      return new Response(a).arrayBuffer();
    }
    throw Error("Compression method not supported");
  });
}
var tc = 127;
function ec(r, i) {
  let n = 0, a = r.length - 1;
  for (; n <= a; ) {
    const l = a + n >> 1, o = i - r[l].tileId;
    if (o > 0)
      n = l + 1;
    else if (o < 0)
      a = l - 1;
    else
      return r[l];
  }
  return a >= 0 && (r[a].runLength === 0 || i - r[a].tileId < r[a].runLength) ? r[a] : null;
}
var ic = class {
  constructor(r, i = new Headers()) {
    this.url = r, this.customHeaders = i, this.mustReload = !1;
  }
  getKey() {
    return this.url;
  }
  setHeaders(r) {
    this.customHeaders = r;
  }
  getBytes(r, i, n, a) {
    return zt(this, null, function* () {
      let l, o;
      n ? o = n : (l = new AbortController(), o = l.signal);
      const h = new Headers(this.customHeaders);
      h.set("range", `bytes=${r}-${r + i - 1}`);
      let c;
      this.mustReload && (c = "reload");
      let f = yield fetch(this.url, {
        signal: o,
        cache: c,
        headers: h
        //biome-ignore lint: "cache" is incompatible between cloudflare workers and browser
      });
      if (r === 0 && f.status === 416) {
        const v = f.headers.get("Content-Range");
        if (!v || !v.startsWith("bytes */"))
          throw Error("Missing content-length on 416 response");
        const y = +v.substr(8);
        f = yield fetch(this.url, {
          signal: o,
          cache: "reload",
          headers: { range: `bytes=0-${y - 1}` }
          //biome-ignore lint: "cache" is incompatible between cloudflare workers and browser
        });
      }
      let _ = f.headers.get("Etag");
      if (_ != null && _.startsWith("W/") && (_ = null), f.status === 416 || a && _ && _ !== a)
        throw this.mustReload = !0, new Jn(
          `Server returned non-matching ETag ${a} after one retry. Check browser extensions and servers for issues that may affect correct ETag headers.`
        );
      if (f.status >= 300)
        throw Error(`Bad response code: ${f.status}`);
      const m = f.headers.get("Content-Length");
      if (f.status === 200 && (!m || +m > i))
        throw l && l.abort(), Error(
          "Server returned no content-length header or content-length exceeding request. Check that your storage backend supports HTTP Byte Serving."
        );
      return {
        data: yield f.arrayBuffer(),
        etag: _ || void 0,
        cacheControl: f.headers.get("Cache-Control") || void 0,
        expires: f.headers.get("Expires") || void 0
      };
    });
  }
};
function Kt(r, i) {
  const n = r.getUint32(i + 4, !0), a = r.getUint32(i + 0, !0);
  return n * Ze(2, 32) + a;
}
function nc(r, i) {
  const n = new DataView(r), a = n.getUint8(7);
  if (a > 3)
    throw Error(
      `Archive is spec version ${a} but this library supports up to spec version 3`
    );
  return {
    specVersion: a,
    rootDirectoryOffset: Kt(n, 8),
    rootDirectoryLength: Kt(n, 16),
    jsonMetadataOffset: Kt(n, 24),
    jsonMetadataLength: Kt(n, 32),
    leafDirectoryOffset: Kt(n, 40),
    leafDirectoryLength: Kt(n, 48),
    tileDataOffset: Kt(n, 56),
    tileDataLength: Kt(n, 64),
    numAddressedTiles: Kt(n, 72),
    numTileEntries: Kt(n, 80),
    numTileContents: Kt(n, 88),
    clustered: n.getUint8(96) === 1,
    internalCompression: n.getUint8(97),
    tileCompression: n.getUint8(98),
    tileType: n.getUint8(99),
    minZoom: n.getUint8(100),
    maxZoom: n.getUint8(101),
    minLon: n.getInt32(102, !0) / 1e7,
    minLat: n.getInt32(106, !0) / 1e7,
    maxLon: n.getInt32(110, !0) / 1e7,
    maxLat: n.getInt32(114, !0) / 1e7,
    centerZoom: n.getUint8(118),
    centerLon: n.getInt32(119, !0) / 1e7,
    centerLat: n.getInt32(123, !0) / 1e7,
    etag: i
  };
}
function Ds(r) {
  const i = { buf: new Uint8Array(r), pos: 0 }, n = ti(i), a = [];
  let l = 0;
  for (let o = 0; o < n; o++) {
    const h = ti(i);
    a.push({ tileId: l + h, offset: 0, length: 0, runLength: 1 }), l += h;
  }
  for (let o = 0; o < n; o++)
    a[o].runLength = ti(i);
  for (let o = 0; o < n; o++)
    a[o].length = ti(i);
  for (let o = 0; o < n; o++) {
    const h = ti(i);
    h === 0 && o > 0 ? a[o].offset = a[o - 1].offset + a[o - 1].length : a[o].offset = h - 1;
  }
  return a;
}
function rc(r) {
  const i = new DataView(r);
  return i.getUint16(2, !0) === 2 ? (console.warn(
    "PMTiles spec version 2 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
  ), 2) : i.getUint16(2, !0) === 1 ? (console.warn(
    "PMTiles spec version 1 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
  ), 1) : 3;
}
var Jn = class extends Error {
};
function oc(r, i) {
  return zt(this, null, function* () {
    const n = yield r.getBytes(0, 16384);
    if (new DataView(n.data).getUint16(0, !0) !== 19792)
      throw new Error("Wrong magic number for PMTiles archive");
    if (rc(n.data) < 3)
      return [yield As.getHeader(r)];
    const l = n.data.slice(0, tc), o = nc(l, n.etag), h = n.data.slice(
      o.rootDirectoryOffset,
      o.rootDirectoryOffset + o.rootDirectoryLength
    ), c = `${r.getKey()}|${o.etag || ""}|${o.rootDirectoryOffset}|${o.rootDirectoryLength}`, f = Ds(
      yield i(h, o.internalCompression)
    );
    return [o, [c, f.length, f]];
  });
}
function sc(r, i, n, a, l) {
  return zt(this, null, function* () {
    const o = yield r.getBytes(n, a, void 0, l.etag), h = yield i(o.data, l.internalCompression), c = Ds(h);
    if (c.length === 0)
      throw new Error("Empty directory is invalid");
    return c;
  });
}
var ac = class {
  constructor(r = 100, i = !0, n = Zs) {
    this.cache = /* @__PURE__ */ new Map(), this.invalidations = /* @__PURE__ */ new Map(), this.maxCacheEntries = r, this.counter = 1, this.decompress = n;
  }
  getHeader(r) {
    return zt(this, null, function* () {
      const i = r.getKey(), n = this.cache.get(i);
      if (n)
        return n.lastUsed = this.counter++, yield n.data;
      const a = new Promise((l, o) => {
        oc(r, this.decompress).then((h) => {
          h[1] && this.cache.set(h[1][0], {
            lastUsed: this.counter++,
            data: Promise.resolve(h[1][2])
          }), l(h[0]), this.prune();
        }).catch((h) => {
          o(h);
        });
      });
      return this.cache.set(i, { lastUsed: this.counter++, data: a }), a;
    });
  }
  getDirectory(r, i, n, a) {
    return zt(this, null, function* () {
      const l = `${r.getKey()}|${a.etag || ""}|${i}|${n}`, o = this.cache.get(l);
      if (o)
        return o.lastUsed = this.counter++, yield o.data;
      const h = new Promise((c, f) => {
        sc(r, this.decompress, i, n, a).then((_) => {
          c(_), this.prune();
        }).catch((_) => {
          f(_);
        });
      });
      return this.cache.set(l, { lastUsed: this.counter++, data: h }), h;
    });
  }
  // for v2 backwards compatibility
  getArrayBuffer(r, i, n, a) {
    return zt(this, null, function* () {
      const l = `${r.getKey()}|${a.etag || ""}|${i}|${n}`, o = this.cache.get(l);
      if (o)
        return o.lastUsed = this.counter++, yield o.data;
      const h = new Promise((c, f) => {
        r.getBytes(i, n, void 0, a.etag).then((_) => {
          c(_.data), this.cache.has(l), this.prune();
        }).catch((_) => {
          f(_);
        });
      });
      return this.cache.set(l, { lastUsed: this.counter++, data: h }), h;
    });
  }
  prune() {
    if (this.cache.size >= this.maxCacheEntries) {
      let r = 1 / 0, i;
      this.cache.forEach((n, a) => {
        n.lastUsed < r && (r = n.lastUsed, i = a);
      }), i && this.cache.delete(i);
    }
  }
  invalidate(r) {
    return zt(this, null, function* () {
      const i = r.getKey();
      if (this.invalidations.get(i))
        return yield this.invalidations.get(i);
      this.cache.delete(r.getKey());
      const n = new Promise((a, l) => {
        this.getHeader(r).then((o) => {
          a(), this.invalidations.delete(i);
        }).catch((o) => {
          l(o);
        });
      });
      this.invalidations.set(i, n);
    });
  }
}, lc = class {
  constructor(r, i, n) {
    typeof r == "string" ? this.source = new ic(r) : this.source = r, n ? this.decompress = n : this.decompress = Zs, i ? this.cache = i : this.cache = new ac();
  }
  /**
   * Return the header of the archive,
   * including information such as tile type, min/max zoom, bounds, and summary statistics.
   */
  getHeader() {
    return zt(this, null, function* () {
      return yield this.cache.getHeader(this.source);
    });
  }
  /** @hidden */
  getZxyAttempt(r, i, n, a) {
    return zt(this, null, function* () {
      const l = Qu(r, i, n), o = yield this.cache.getHeader(this.source);
      if (o.specVersion < 3)
        return As.getZxy(o, this.source, this.cache, r, i, n, a);
      if (r < o.minZoom || r > o.maxZoom)
        return;
      let h = o.rootDirectoryOffset, c = o.rootDirectoryLength;
      for (let f = 0; f <= 3; f++) {
        const _ = yield this.cache.getDirectory(
          this.source,
          h,
          c,
          o
        ), m = ec(_, l);
        if (m) {
          if (m.runLength > 0) {
            const p = yield this.source.getBytes(
              o.tileDataOffset + m.offset,
              m.length,
              a,
              o.etag
            );
            return {
              data: yield this.decompress(p.data, o.tileCompression),
              cacheControl: p.cacheControl,
              expires: p.expires
            };
          }
          h = o.leafDirectoryOffset + m.offset, c = m.length;
        } else
          return;
      }
      throw Error("Maximum directory depth exceeded");
    });
  }
  /**
   * Primary method to get a single tile bytes from an archive.
   *
   * Returns undefined if the tile does not exist in the archive.
   */
  getZxy(r, i, n, a) {
    return zt(this, null, function* () {
      try {
        return yield this.getZxyAttempt(r, i, n, a);
      } catch (l) {
        if (l instanceof Jn)
          return this.cache.invalidate(this.source), yield this.getZxyAttempt(r, i, n, a);
        throw l;
      }
    });
  }
  /** @hidden */
  getMetadataAttempt() {
    return zt(this, null, function* () {
      const r = yield this.cache.getHeader(this.source), i = yield this.source.getBytes(
        r.jsonMetadataOffset,
        r.jsonMetadataLength,
        void 0,
        r.etag
      ), n = yield this.decompress(
        i.data,
        r.internalCompression
      ), a = new TextDecoder("utf-8");
      return JSON.parse(a.decode(n));
    });
  }
  /**
   * Return the arbitrary JSON metadata of the archive.
   */
  getMetadata() {
    return zt(this, null, function* () {
      try {
        return yield this.getMetadataAttempt();
      } catch (r) {
        if (r instanceof Jn)
          return this.cache.invalidate(this.source), yield this.getMetadataAttempt();
        throw r;
      }
    });
  }
};
function hc(r, i, n, a, l) {
  Rs(r, i, n || 0, a || r.length - 1, l || uc);
}
function Rs(r, i, n, a, l) {
  for (; a > n; ) {
    if (a - n > 600) {
      var o = a - n + 1, h = i - n + 1, c = Math.log(o), f = 0.5 * Math.exp(2 * c / 3), _ = 0.5 * Math.sqrt(c * f * (o - f) / o) * (h - o / 2 < 0 ? -1 : 1), m = Math.max(n, Math.floor(i - h * f / o + _)), p = Math.min(a, Math.floor(i + (o - h) * f / o + _));
      Rs(r, i, m, p, l);
    }
    var v = r[i], y = n, w = a;
    for (ei(r, n, i), l(r[a], v) > 0 && ei(r, n, a); y < w; ) {
      for (ei(r, y, w), y++, w--; l(r[y], v) < 0; ) y++;
      for (; l(r[w], v) > 0; ) w--;
    }
    l(r[n], v) === 0 ? ei(r, n, w) : (w++, ei(r, w, a)), w <= i && (n = w + 1), i <= w && (a = w - 1);
  }
}
function ei(r, i, n) {
  var a = r[i];
  r[i] = r[n], r[n] = a;
}
function uc(r, i) {
  return r < i ? -1 : r > i ? 1 : 0;
}
class cc {
  constructor(i = 9) {
    this._maxEntries = Math.max(4, i), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(i) {
    let n = this.data;
    const a = [];
    if (!ji(i, n)) return a;
    const l = this.toBBox, o = [];
    for (; n; ) {
      for (let h = 0; h < n.children.length; h++) {
        const c = n.children[h], f = n.leaf ? l(c) : c;
        ji(i, f) && (n.leaf ? a.push(c) : jn(i, f) ? this._all(c, a) : o.push(c));
      }
      n = o.pop();
    }
    return a;
  }
  collides(i) {
    let n = this.data;
    if (!ji(i, n)) return !1;
    const a = [];
    for (; n; ) {
      for (let l = 0; l < n.children.length; l++) {
        const o = n.children[l], h = n.leaf ? this.toBBox(o) : o;
        if (ji(i, h)) {
          if (n.leaf || jn(i, h)) return !0;
          a.push(o);
        }
      }
      n = a.pop();
    }
    return !1;
  }
  load(i) {
    if (!(i && i.length)) return this;
    if (i.length < this._minEntries) {
      for (let a = 0; a < i.length; a++)
        this.insert(i[a]);
      return this;
    }
    let n = this._build(i.slice(), 0, i.length - 1, 0);
    if (!this.data.children.length)
      this.data = n;
    else if (this.data.height === n.height)
      this._splitRoot(this.data, n);
    else {
      if (this.data.height < n.height) {
        const a = this.data;
        this.data = n, n = a;
      }
      this._insert(n, this.data.height - n.height - 1, !0);
    }
    return this;
  }
  insert(i) {
    return i && this._insert(i, this.data.height - 1), this;
  }
  clear() {
    return this.data = Ie([]), this;
  }
  remove(i, n) {
    if (!i) return this;
    let a = this.data;
    const l = this.toBBox(i), o = [], h = [];
    let c, f, _;
    for (; a || o.length; ) {
      if (a || (a = o.pop(), f = o[o.length - 1], c = h.pop(), _ = !0), a.leaf) {
        const m = fc(i, a.children, n);
        if (m !== -1)
          return a.children.splice(m, 1), o.push(a), this._condense(o), this;
      }
      !_ && !a.leaf && jn(a, l) ? (o.push(a), h.push(c), c = 0, f = a, a = a.children[0]) : f ? (c++, a = f.children[c], _ = !1) : a = null;
    }
    return this;
  }
  toBBox(i) {
    return i;
  }
  compareMinX(i, n) {
    return i.minX - n.minX;
  }
  compareMinY(i, n) {
    return i.minY - n.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(i) {
    return this.data = i, this;
  }
  _all(i, n) {
    const a = [];
    for (; i; )
      i.leaf ? n.push(...i.children) : a.push(...i.children), i = a.pop();
    return n;
  }
  _build(i, n, a, l) {
    const o = a - n + 1;
    let h = this._maxEntries, c;
    if (o <= h)
      return c = Ie(i.slice(n, a + 1)), Oe(c, this.toBBox), c;
    l || (l = Math.ceil(Math.log(o) / Math.log(h)), h = Math.ceil(o / Math.pow(h, l - 1))), c = Ie([]), c.leaf = !1, c.height = l;
    const f = Math.ceil(o / h), _ = f * Math.ceil(Math.sqrt(h));
    Ho(i, n, a, _, this.compareMinX);
    for (let m = n; m <= a; m += _) {
      const p = Math.min(m + _ - 1, a);
      Ho(i, m, p, f, this.compareMinY);
      for (let v = m; v <= p; v += f) {
        const y = Math.min(v + f - 1, p);
        c.children.push(this._build(i, v, y, l - 1));
      }
    }
    return Oe(c, this.toBBox), c;
  }
  _chooseSubtree(i, n, a, l) {
    for (; l.push(n), !(n.leaf || l.length - 1 === a); ) {
      let o = 1 / 0, h = 1 / 0, c;
      for (let f = 0; f < n.children.length; f++) {
        const _ = n.children[f], m = Fn(_), p = mc(i, _) - m;
        p < h ? (h = p, o = m < o ? m : o, c = _) : p === h && m < o && (o = m, c = _);
      }
      n = c || n.children[0];
    }
    return n;
  }
  _insert(i, n, a) {
    const l = a ? i : this.toBBox(i), o = [], h = this._chooseSubtree(l, this.data, n, o);
    for (h.children.push(i), oi(h, l); n >= 0 && o[n].children.length > this._maxEntries; )
      this._split(o, n), n--;
    this._adjustParentBBoxes(l, o, n);
  }
  // split overflowed node into two
  _split(i, n) {
    const a = i[n], l = a.children.length, o = this._minEntries;
    this._chooseSplitAxis(a, o, l);
    const h = this._chooseSplitIndex(a, o, l), c = Ie(a.children.splice(h, a.children.length - h));
    c.height = a.height, c.leaf = a.leaf, Oe(a, this.toBBox), Oe(c, this.toBBox), n ? i[n - 1].children.push(c) : this._splitRoot(a, c);
  }
  _splitRoot(i, n) {
    this.data = Ie([i, n]), this.data.height = i.height + 1, this.data.leaf = !1, Oe(this.data, this.toBBox);
  }
  _chooseSplitIndex(i, n, a) {
    let l, o = 1 / 0, h = 1 / 0;
    for (let c = n; c <= a - n; c++) {
      const f = ri(i, 0, c, this.toBBox), _ = ri(i, c, a, this.toBBox), m = pc(f, _), p = Fn(f) + Fn(_);
      m < o ? (o = m, l = c, h = p < h ? p : h) : m === o && p < h && (h = p, l = c);
    }
    return l || a - n;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(i, n, a) {
    const l = i.leaf ? this.compareMinX : dc, o = i.leaf ? this.compareMinY : _c, h = this._allDistMargin(i, n, a, l), c = this._allDistMargin(i, n, a, o);
    h < c && i.children.sort(l);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(i, n, a, l) {
    i.children.sort(l);
    const o = this.toBBox, h = ri(i, 0, n, o), c = ri(i, a - n, a, o);
    let f = Fi(h) + Fi(c);
    for (let _ = n; _ < a - n; _++) {
      const m = i.children[_];
      oi(h, i.leaf ? o(m) : m), f += Fi(h);
    }
    for (let _ = a - n - 1; _ >= n; _--) {
      const m = i.children[_];
      oi(c, i.leaf ? o(m) : m), f += Fi(c);
    }
    return f;
  }
  _adjustParentBBoxes(i, n, a) {
    for (let l = a; l >= 0; l--)
      oi(n[l], i);
  }
  _condense(i) {
    for (let n = i.length - 1, a; n >= 0; n--)
      i[n].children.length === 0 ? n > 0 ? (a = i[n - 1].children, a.splice(a.indexOf(i[n]), 1)) : this.clear() : Oe(i[n], this.toBBox);
  }
}
function fc(r, i, n) {
  if (!n) return i.indexOf(r);
  for (let a = 0; a < i.length; a++)
    if (n(r, i[a])) return a;
  return -1;
}
function Oe(r, i) {
  ri(r, 0, r.children.length, i, r);
}
function ri(r, i, n, a, l) {
  l || (l = Ie(null)), l.minX = 1 / 0, l.minY = 1 / 0, l.maxX = -1 / 0, l.maxY = -1 / 0;
  for (let o = i; o < n; o++) {
    const h = r.children[o];
    oi(l, r.leaf ? a(h) : h);
  }
  return l;
}
function oi(r, i) {
  return r.minX = Math.min(r.minX, i.minX), r.minY = Math.min(r.minY, i.minY), r.maxX = Math.max(r.maxX, i.maxX), r.maxY = Math.max(r.maxY, i.maxY), r;
}
function dc(r, i) {
  return r.minX - i.minX;
}
function _c(r, i) {
  return r.minY - i.minY;
}
function Fn(r) {
  return (r.maxX - r.minX) * (r.maxY - r.minY);
}
function Fi(r) {
  return r.maxX - r.minX + (r.maxY - r.minY);
}
function mc(r, i) {
  return (Math.max(i.maxX, r.maxX) - Math.min(i.minX, r.minX)) * (Math.max(i.maxY, r.maxY) - Math.min(i.minY, r.minY));
}
function pc(r, i) {
  const n = Math.max(r.minX, i.minX), a = Math.max(r.minY, i.minY), l = Math.min(r.maxX, i.maxX), o = Math.min(r.maxY, i.maxY);
  return Math.max(0, l - n) * Math.max(0, o - a);
}
function jn(r, i) {
  return r.minX <= i.minX && r.minY <= i.minY && i.maxX <= r.maxX && i.maxY <= r.maxY;
}
function ji(r, i) {
  return i.minX <= r.maxX && i.minY <= r.maxY && i.maxX >= r.minX && i.maxY >= r.minY;
}
function Ie(r) {
  return {
    children: r,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0
  };
}
function Ho(r, i, n, a, l) {
  const o = [i, n];
  for (; o.length; ) {
    if (n = o.pop(), i = o.pop(), n - i <= a) continue;
    const h = i + Math.ceil((n - i) / a / 2) * a;
    hc(r, h, i, n, l), o.push(i, h, h, n);
  }
}
function gc(r) {
  let i = 0, n = 0;
  for (const c of r)
    i += c.w * c.h, n = Math.max(n, c.w);
  r.sort((c, f) => f.h - c.h);
  const l = [{ x: 0, y: 0, w: Math.max(Math.ceil(Math.sqrt(i / 0.95)), n), h: 1 / 0 }];
  let o = 0, h = 0;
  for (const c of r)
    for (let f = l.length - 1; f >= 0; f--) {
      const _ = l[f];
      if (!(c.w > _.w || c.h > _.h)) {
        if (c.x = _.x, c.y = _.y, h = Math.max(h, c.y + c.h), o = Math.max(o, c.x + c.w), c.w === _.w && c.h === _.h) {
          const m = l.pop();
          f < l.length && (l[f] = m);
        } else c.h === _.h ? (_.x += c.w, _.w -= c.w) : c.w === _.w ? (_.y += c.h, _.h -= c.h) : (l.push({
          x: _.x + c.w,
          y: _.y,
          w: _.w - c.w,
          h: c.h
        }), _.y += c.h, _.h -= c.h);
        break;
      }
    }
  return {
    w: o,
    // container width
    h,
    // container height
    fill: i / (o * h) || 0
    // space utilization
  };
}
var vc = Object.defineProperty, Rt = Math.pow, T = (r, i) => vc(r, "name", { value: i, configurable: !0 }), Yt = (r, i, n) => new Promise((a, l) => {
  var o = (f) => {
    try {
      c(n.next(f));
    } catch (_) {
      l(_);
    }
  }, h = (f) => {
    try {
      c(n.throw(f));
    } catch (_) {
      l(_);
    }
  }, c = (f) => f.done ? a(f.value) : Promise.resolve(f.value).then(o, h);
  c((n = n.apply(r, i)).next());
}), Fs = class {
  constructor(i, n) {
    this.str = i ?? n, this.perFeature = typeof this.str == "function" && this.str.length === 2;
  }
  get(i, n) {
    return typeof this.str == "function" ? this.str(i, n) : this.str;
  }
};
T(Fs, "StringAttr");
var It = Fs, js = class {
  constructor(i, n = 1) {
    this.value = i ?? n, this.perFeature = typeof this.value == "function" && this.value.length === 2;
  }
  get(i, n) {
    return typeof this.value == "function" ? this.value(i, n) : this.value;
  }
};
T(js, "NumberAttr");
var mt = js, Ns = class {
  constructor(i) {
    var n;
    this.labelProps = (n = i == null ? void 0 : i.labelProps) != null ? n : ["name"], this.textTransform = i == null ? void 0 : i.textTransform;
  }
  get(i, n) {
    let a, l;
    typeof this.labelProps == "function" ? l = this.labelProps(i, n) : l = this.labelProps;
    for (let h of l) if (Object.prototype.hasOwnProperty.call(n.props, h) && typeof n.props[h] == "string") {
      a = n.props[h];
      break;
    }
    let o;
    return typeof this.textTransform == "function" ? o = this.textTransform(i, n) : o = this.textTransform, a && o === "uppercase" ? a = a.toUpperCase() : a && o === "lowercase" ? a = a.toLowerCase() : a && o === "capitalize" && (a = a.toLowerCase().split(" ").map((h) => h[0].toUpperCase() + h.slice(1)).join(" ")), a;
  }
};
T(Ns, "TextAttr");
var lr = Ns, Us = class {
  constructor(i) {
    var n, a;
    i != null && i.font ? this.font = i.font : (this.family = (n = i == null ? void 0 : i.fontFamily) != null ? n : "sans-serif", this.size = (a = i == null ? void 0 : i.fontSize) != null ? a : 12, this.weight = i == null ? void 0 : i.fontWeight, this.style = i == null ? void 0 : i.fontStyle);
  }
  get(i, n) {
    if (this.font) return typeof this.font == "function" ? this.font(i, n) : this.font;
    let a = "";
    this.style && (typeof this.style == "function" ? a = `${this.style(i, n)} ` : a = `${this.style} `);
    let l = "";
    this.weight && (typeof this.weight == "function" ? l = `${this.weight(i, n)} ` : l = `${this.weight} `);
    let o;
    typeof this.size == "function" ? o = this.size(i, n) : o = this.size;
    let h;
    return typeof this.family == "function" ? h = this.family(i, n) : h = this.family, `${a}${l}${o}px ${h}`;
  }
};
T(Us, "FontAttr");
var hr = Us, Vs = class {
  constructor(i, n = []) {
    this.value = i ?? n, this.perFeature = typeof this.value == "function" && this.value.length === 2;
  }
  get(i, n) {
    return typeof this.value == "function" ? this.value(i, n) : this.value;
  }
};
T(Vs, "ArrayAttr");
var yc = Vs, bc = T((r, i, n) => {
  let a = [], l, o, h, c = 0, f = 0, _ = 0, m = 0, p = 0, v = 0, y = 0, w = 0, x = 0, E = 0, M = 0, I = 0;
  if (r.length < 2) return [];
  if (r.length === 2) return _ = Math.sqrt(Rt(r[1].x - r[0].x, 2) + Rt(r[1].y - r[0].y, 2)), [{ length: _, beginIndex: 0, beginDistance: 0, endIndex: 2, endDistance: _ }];
  for (m = Math.sqrt(Rt(r[1].x - r[0].x, 2) + Rt(r[1].y - r[0].y, 2)), c = 1, f = r.length - 1; c < f; c++) l = r[c - 1], o = r[c], h = r[c + 1], v = o.x - l.x, y = o.y - l.y, w = h.x - o.x, x = h.y - o.y, p = Math.sqrt(w * w + x * x), _ += m, E = Math.acos((v * w + y * x) / (m * p)), (E > i || _ - I > n) && (a.push({ length: _ - I, beginDistance: I, beginIndex: M, endIndex: c + 1, endDistance: _ }), M = c, I = _), m = p;
  return c - M > 0 && a.push({ length: _ - I + p, beginIndex: M, beginDistance: I, endIndex: c + 1, endDistance: _ + p }), a;
}, "linelabel");
function Hs(r, i, n, a) {
  let l = [];
  for (let o of r) {
    let h = bc(o, Math.PI / 45, i);
    for (let c of h) if (c.length >= i + a) {
      let f = new $(o[c.beginIndex].x, o[c.beginIndex].y), _ = o[c.endIndex - 1], m = new $((_.x - f.x) / c.length, (_.y - f.y) / c.length);
      for (let p = a; p < c.length - i; p += n) l.push({ start: f.add(m.mult(p)), end: f.add(m.mult(p + i)) });
    }
  }
  return l;
}
T(Hs, "simpleLabel");
function Ws(r, i, n, a) {
  let l = i.x - r.x, o = i.y - r.y, h = Math.sqrt(Rt(i.x - r.x, 2) + Rt(i.y - r.y, 2)), c = [];
  for (let f = 0; f < n + a; f += 2 * a) {
    let _ = f * 1 / h;
    c.push({ x: r.x + _ * l, y: r.y + _ * o });
  }
  return c;
}
T(Ws, "lineCells");
function ur(r, i) {
  if (r.length <= i) return [r];
  let n = i - 1, a = r.lastIndexOf(" ", n), l = r.indexOf(" ", n);
  if (a === -1 && l === -1) return [r];
  let o, h;
  return l === -1 || a >= 0 && n - a < l - n ? (o = r.substring(0, a), h = r.substring(a + 1, r.length)) : (o = r.substring(0, l), h = r.substring(l + 1, r.length)), [o, ...ur(h, i)];
}
T(ur, "linebreak");
var xc = ((r) => (r[r.Point = 1] = "Point", r[r.Line = 2] = "Line", r[r.Polygon = 3] = "Polygon", r))(xc || {});
function ce(r) {
  return `${r.x}:${r.y}:${r.z}`;
}
T(ce, "toIndex");
var wc = T((r, i, n) => {
  r.pos = i;
  let a = r.readVarint() + r.pos, l = 1, o = 0, h = 0, c = 0, f = 1 / 0, _ = -1 / 0, m = 1 / 0, p = -1 / 0, v = [], y = [];
  for (; r.pos < a; ) {
    if (o <= 0) {
      let w = r.readVarint();
      l = w & 7, o = w >> 3;
    }
    if (o--, l === 1 || l === 2) h += r.readSVarint() * n, c += r.readSVarint() * n, h < f && (f = h), h > _ && (_ = h), c < m && (m = c), c > p && (p = c), l === 1 && (y.length > 0 && v.push(y), y = []), y.push(new $(h, c));
    else if (l === 7) y && y.push(y[0].clone());
    else throw new Error(`unknown command ${l}`);
  }
  return y && v.push(y), { geom: v, bbox: { minX: f, minY: m, maxX: _, maxY: p } };
}, "loadGeomAndBbox");
function cr(r, i) {
  let n = new ou(new lu(r)), a = /* @__PURE__ */ new Map();
  for (let [l, o] of Object.entries(n.layers)) {
    let h = [], c = o;
    for (let f = 0; f < c.length; f++) {
      let _ = wc(c.feature(f)._pbf, c.feature(f)._geometry, i / c.extent), m = 0;
      for (let p of _.geom) m += p.length;
      h.push({ id: c.feature(f).id, geomType: c.feature(f).type, geom: _.geom, numVertices: m, bbox: _.bbox, props: c.feature(f).properties });
    }
    a.set(l, h);
  }
  return a;
}
T(cr, "parseTile");
var Ys = class {
  constructor(i, n) {
    typeof i == "string" ? this.p = new lc(i) : this.p = i, this.zoomaborts = [], this.shouldCancelZooms = n;
  }
  get(i, n) {
    return Yt(this, null, function* () {
      this.shouldCancelZooms && (this.zoomaborts = this.zoomaborts.filter((h) => h.z !== i.z ? (h.controller.abort(), !1) : !0));
      let a = new AbortController();
      this.zoomaborts.push({ z: i.z, controller: a });
      let l = a.signal, o = yield this.p.getZxy(i.z, i.x, i.y, l);
      return o ? cr(o.data, n) : /* @__PURE__ */ new Map();
    });
  }
};
T(Ys, "PmtilesSource");
var Wo = Ys, Gs = class {
  constructor(i, n) {
    this.url = i, this.zoomaborts = [], this.shouldCancelZooms = n;
  }
  get(i, n) {
    return Yt(this, null, function* () {
      this.shouldCancelZooms && (this.zoomaborts = this.zoomaborts.filter((h) => h.z !== i.z ? (h.controller.abort(), !1) : !0));
      let a = this.url.replace("{z}", i.z.toString()).replace("{x}", i.x.toString()).replace("{y}", i.y.toString()), l = new AbortController();
      this.zoomaborts.push({ z: i.z, controller: l });
      let o = l.signal;
      return new Promise((h, c) => {
        fetch(a, { signal: o }).then((f) => f.arrayBuffer()).then((f) => {
          let _ = cr(f, n);
          h(_);
        }).catch((f) => {
          c(f);
        });
      });
    });
  }
};
T(Gs, "ZxySource");
var Lc = Gs, Qn = 6378137, Yo = 85.0511287798, Ni = Qn * Math.PI, Pc = T((r) => {
  let i = Math.PI / 180, n = Math.max(Math.min(Yo, r[0]), -Yo), a = Math.sin(n * i);
  return new $(Qn * r[1] * i, Qn * Math.log((1 + a) / (1 - a)) / 2);
}, "project");
function tr(r) {
  return r * r;
}
T(tr, "sqr");
function hi(r, i) {
  return tr(r.x - i.x) + tr(r.y - i.y);
}
T(hi, "dist2");
function qs(r, i, n) {
  let a = hi(i, n);
  if (a === 0) return hi(r, i);
  let l = ((r.x - i.x) * (n.x - i.x) + (r.y - i.y) * (n.y - i.y)) / a;
  return l = Math.max(0, Math.min(1, l)), hi(r, new $(i.x + l * (n.x - i.x), i.y + l * (n.y - i.y)));
}
T(qs, "distToSegmentSquared");
function er(r, i) {
  let n = !1;
  for (let a = 0, l = i.length - 1; a < i.length; l = a++) {
    let o = i[a].x, h = i[a].y, c = i[l].x, f = i[l].y;
    h > r.y != f > r.y && r.x < (c - o) * (r.y - h) / (f - h) + o && (n = !n);
  }
  return n;
}
T(er, "isInRing");
function Xs(r) {
  let i = 0;
  for (let n = 0; n < r.length; n++) {
    let a = (n + 1) % r.length;
    i += r[n].x * r[a].y, i -= r[a].x * r[n].y;
  }
  return i < 0;
}
T(Xs, "isCcw");
function $s(r, i) {
  let n = !1;
  for (let a of i) if (Xs(a)) er(r, a) && (n = !1);
  else {
    if (n) return !0;
    er(r, a) && (n = !0);
  }
  return n;
}
T($s, "pointInPolygon");
function Ks(r, i) {
  let n = 1 / 0;
  for (let a of i) {
    let l = Math.sqrt(hi(r, a[0]));
    l < n && (n = l);
  }
  return n;
}
T(Ks, "pointMinDistToPoints");
function Js(r, i) {
  let n = 1 / 0;
  for (let a of i) for (let l = 0; l < a.length - 1; l++) {
    let o = Math.sqrt(qs(r, a[l], a[l + 1]));
    o < n && (n = o);
  }
  return n;
}
T(Js, "pointMinDistToLines");
var Qs = class {
  constructor(i, n) {
    this.source = i, this.cache = /* @__PURE__ */ new Map(), this.inflight = /* @__PURE__ */ new Map(), this.tileSize = n;
  }
  get(i) {
    return Yt(this, null, function* () {
      let n = ce(i);
      return new Promise((a, l) => {
        let o = this.cache.get(n);
        if (o) o.used = performance.now(), a(o.data);
        else {
          let h = this.inflight.get(n);
          h ? h.push({ resolve: a, reject: l }) : (this.inflight.set(n, []), this.source.get(i, this.tileSize).then((c) => {
            this.cache.set(n, { used: performance.now(), data: c });
            let f = this.inflight.get(n);
            if (f) for (let _ of f) _.resolve(c);
            if (this.inflight.delete(n), a(c), this.cache.size >= 64) {
              let _ = 1 / 0, m;
              this.cache.forEach((p, v) => {
                p.used < _ && (_ = p.used, m = v);
              }), m && this.cache.delete(m);
            }
          }).catch((c) => {
            let f = this.inflight.get(n);
            if (f) for (let _ of f) _.reject(c);
            this.inflight.delete(n), l(c);
          }));
        }
      });
    });
  }
  queryFeatures(i, n, a, l) {
    let o = Pc([n, i]), h = new $((o.x + Ni) / (Ni * 2), 1 - (o.y + Ni) / (Ni * 2));
    h.x > 1 && (h.x = h.x - Math.floor(h.x));
    let c = h.mult(1 << a), f = Math.floor(c.x), _ = Math.floor(c.y), m = ce({ z: a, x: f, y: _ }), p = [], v = this.cache.get(m);
    if (v) {
      let y = new $((c.x - f) * this.tileSize, (c.y - _) * this.tileSize);
      for (let [w, x] of v.data.entries()) for (let E of x) E.geomType === 1 ? Ks(y, E.geom) < l && p.push({ feature: E, layerName: w }) : E.geomType === 2 ? Js(y, E.geom) < l && p.push({ feature: E, layerName: w }) : $s(y, E.geom) && p.push({ feature: E, layerName: w });
    }
    return p;
  }
};
T(Qs, "TileCache");
var Tc = Qs, Cc = ((r) => (r[r.Left = 1] = "Left", r[r.Center = 2] = "Center", r[r.Right = 3] = "Right", r))(Cc || {}), kc = ((r) => (r[r.N = 1] = "N", r[r.Ne = 2] = "Ne", r[r.E = 3] = "E", r[r.Se = 4] = "Se", r[r.S = 5] = "S", r[r.Sw = 6] = "Sw", r[r.W = 7] = "W", r[r.Nw = 8] = "Nw", r))(kc || {});
T((r, i, n) => {
  let a = document.createElement("canvas"), l = a.getContext("2d");
  return a.width = r, a.height = i, l !== null && n(a, l), a;
}, "createPattern");
var ta = class {
  constructor(i) {
    var n;
    this.pattern = i.pattern, this.fill = new It(i.fill, "black"), this.opacity = new mt(i.opacity, 1), this.stroke = new It(i.stroke, "black"), this.width = new mt(i.width, 0), this.perFeature = (n = this.fill.perFeature || this.opacity.perFeature || this.stroke.perFeature || this.width.perFeature || i.perFeature) != null ? n : !1, this.doStroke = !1;
  }
  before(i, n) {
    if (!this.perFeature) {
      i.globalAlpha = this.opacity.get(n), i.fillStyle = this.fill.get(n), i.strokeStyle = this.stroke.get(n);
      let a = this.width.get(n);
      a > 0 && (this.doStroke = !0), i.lineWidth = a;
    }
    if (this.pattern) {
      let a = i.createPattern(this.pattern, "repeat");
      a && (i.fillStyle = a);
    }
  }
  draw(i, n, a, l) {
    let o = !1;
    if (this.perFeature) {
      i.globalAlpha = this.opacity.get(a, l), i.fillStyle = this.fill.get(a, l);
      let c = this.width.get(a, l);
      c && (o = !0, i.strokeStyle = this.stroke.get(a, l), i.lineWidth = c);
    }
    let h = T(() => {
      i.fill(), (o || this.doStroke) && i.stroke();
    }, "drawPath");
    i.beginPath();
    for (let c of n) for (let f = 0; f < c.length; f++) {
      let _ = c[f];
      f === 0 ? i.moveTo(_.x, _.y) : i.lineTo(_.x, _.y);
    }
    h();
  }
};
T(ta, "PolygonSymbolizer");
var wt = ta;
function Mc(r, i) {
  return (n) => {
    let a = n - r;
    return a >= 0 && a < i.length ? i[a] : 0;
  };
}
T(Mc, "arr");
function ea(r, i) {
  let n = 0;
  for (; i[n + 1][0] < r; ) n++;
  return n;
}
T(ea, "getStopIndex");
function ia(r, i, n) {
  return r * (n - i) + i;
}
T(ia, "interpolate");
function na(r, i, n, a) {
  let l = a[i + 1][0] - a[i][0], o = r - a[i][0];
  return l === 0 ? 0 : n === 1 ? o / l : (Rt(n, o) - 1) / (Rt(n, l) - 1);
}
T(na, "computeInterpolationFactor");
function Wt(r, i) {
  return (n) => {
    if (i.length < 1) return 0;
    if (n <= i[0][0]) return i[0][1];
    if (n >= i[i.length - 1][0]) return i[i.length - 1][1];
    let a = ea(n, i), l = na(n, a, r, i);
    return ia(l, i[a][1], i[a + 1][1]);
  };
}
T(Wt, "exp");
function Sc(r, i) {
  return (n) => {
    if (i.length < 1) return 0;
    let a = r;
    for (let l = 0; l < i.length; l++) n >= i[l][0] && (a = i[l][1]);
    return a;
  };
}
T(Sc, "step");
function ir(r) {
  return Wt(1, r);
}
T(ir, "linear");
var ra = class {
  constructor(i) {
    var n;
    this.color = new It(i.color, "black"), this.width = new mt(i.width), this.opacity = new mt(i.opacity), this.dash = i.dash ? new yc(i.dash) : null, this.dashColor = new It(i.dashColor, "black"), this.dashWidth = new mt(i.dashWidth, 1), this.lineCap = new It(i.lineCap, "butt"), this.lineJoin = new It(i.lineJoin, "miter"), this.skip = !1, this.perFeature = !!((n = this.dash) != null && n.perFeature || this.color.perFeature || this.opacity.perFeature || this.width.perFeature || this.lineCap.perFeature || this.lineJoin.perFeature || i.perFeature);
  }
  before(i, n) {
    this.perFeature || (i.strokeStyle = this.color.get(n), i.lineWidth = this.width.get(n), i.globalAlpha = this.opacity.get(n), i.lineCap = this.lineCap.get(n), i.lineJoin = this.lineJoin.get(n));
  }
  draw(i, n, a, l) {
    if (this.skip) return;
    let o = T(() => {
      this.perFeature && (i.globalAlpha = this.opacity.get(a, l), i.lineCap = this.lineCap.get(a, l), i.lineJoin = this.lineJoin.get(a, l)), this.dash ? (i.save(), this.perFeature ? (i.lineWidth = this.dashWidth.get(a, l), i.strokeStyle = this.dashColor.get(a, l), i.setLineDash(this.dash.get(a, l))) : i.setLineDash(this.dash.get(a)), i.stroke(), i.restore()) : (i.save(), this.perFeature && (i.lineWidth = this.width.get(a, l), i.strokeStyle = this.color.get(a, l)), i.stroke(), i.restore());
    }, "strokePath");
    i.beginPath();
    for (let h of n) for (let c = 0; c < h.length; c++) {
      let f = h[c];
      c === 0 ? i.moveTo(f.x, f.y) : i.lineTo(f.x, f.y);
    }
    o();
  }
};
T(ra, "LineSymbolizer");
var Bt = ra, zc = class {
  constructor(i) {
    this.name = i.name, this.sheet = i.sheet, this.dpr = window.devicePixelRatio;
  }
  place(i, n, a) {
    n[0];
    let l = new $(n[0][0].x, n[0][0].y), o = this.sheet.get(this.name), h = o.w / this.dpr, c = o.h / this.dpr, f = { minX: l.x - h / 2, minY: l.y - c / 2, maxX: l.x + h / 2, maxY: l.y + c / 2 };
    return [{ anchor: l, bboxes: [f], draw: T((_) => {
      _.globalAlpha = 1, _.drawImage(this.sheet.canvas, o.x, o.y, o.w, o.h, -o.w / 2 / this.dpr, -o.h / 2 / this.dpr, o.w / 2, o.h / 2);
    }, "draw") }];
  }
};
T(zc, "IconSymbolizer");
var oa = class {
  constructor(i) {
    this.radius = new mt(i.radius, 3), this.fill = new It(i.fill, "black"), this.stroke = new It(i.stroke, "white"), this.width = new mt(i.width, 0), this.opacity = new mt(i.opacity);
  }
  draw(i, n, a, l) {
    i.globalAlpha = this.opacity.get(a, l);
    let o = this.radius.get(a, l), h = this.width.get(a, l);
    h > 0 && (i.strokeStyle = this.stroke.get(a, l), i.lineWidth = h, i.beginPath(), i.arc(n[0][0].x, n[0][0].y, o + h / 2, 0, 2 * Math.PI), i.stroke()), i.fillStyle = this.fill.get(a, l), i.beginPath(), i.arc(n[0][0].x, n[0][0].y, o, 0, 2 * Math.PI), i.fill();
  }
  place(i, n, a) {
    n[0];
    let l = new $(n[0][0].x, n[0][0].y), o = this.radius.get(i.zoom, a), h = { minX: l.x - o, minY: l.y - o, maxX: l.x + o, maxY: l.y + o };
    return [{ anchor: l, bboxes: [h], draw: T((c) => {
      this.draw(c, [[new $(0, 0)]], i.zoom, a);
    }, "draw") }];
  }
};
T(oa, "CircleSymbolizer");
var Ec = oa, Oc = class {
  constructor(i) {
    this.font = new hr(i), this.text = new lr(i), this.fill = new It(i.fill, "black"), this.background = new It(i.background, "white"), this.padding = new mt(i.padding, 0);
  }
  place(i, n, a) {
    let l = this.text.get(i.zoom, a);
    if (!l) return;
    let o = this.font.get(i.zoom, a);
    i.scratch.font = o;
    let h = i.scratch.measureText(l), c = h.width, f = h.actualBoundingBoxAscent, _ = h.actualBoundingBoxDescent;
    n[0];
    let m = new $(n[0][0].x, n[0][0].y), p = this.padding.get(i.zoom, a), v = { minX: m.x - c / 2 - p, minY: m.y - f - p, maxX: m.x + c / 2 + p, maxY: m.y + _ + p };
    return [{ anchor: m, bboxes: [v], draw: T((y) => {
      y.globalAlpha = 1, y.fillStyle = this.background.get(i.zoom, a), y.fillRect(-c / 2 - p, -f - p, c + 2 * p, f + _ + 2 * p), y.fillStyle = this.fill.get(i.zoom, a), y.font = o, y.fillText(l, -c / 2, 0);
    }, "draw") }];
  }
};
T(Oc, "ShieldSymbolizer");
var Ic = class {
  constructor(i) {
    this.list = i;
  }
  place(i, n, a) {
    let l = this.list[0].place(i, n, a);
    if (!l) return;
    let o = l[0], h = o.anchor, c = o.bboxes[0], f = c.maxY - c.minY, _ = [{ draw: o.draw, translate: { x: 0, y: 0 } }], m = [[new $(n[0][0].x, n[0][0].y + f)]];
    for (let p = 1; p < this.list.length; p++) l = this.list[p].place(i, m, a), l && (o = l[0], c = sa(c, o.bboxes[0]), _.push({ draw: o.draw, translate: { x: 0, y: f } }));
    return [{ anchor: h, bboxes: [c], draw: T((p) => {
      for (let v of _) p.save(), p.translate(v.translate.x, v.translate.y), v.draw(p), p.restore();
    }, "draw") }];
  }
};
T(Ic, "FlexSymbolizer");
var sa = T((r, i) => ({ minX: Math.min(r.minX, i.minX), minY: Math.min(r.minY, i.minY), maxX: Math.max(r.maxX, i.maxX), maxY: Math.max(r.maxY, i.maxY) }), "mergeBbox"), aa = class {
  constructor(i) {
    this.list = i;
  }
  place(i, n, a) {
    let l = this.list[0];
    if (!l) return;
    let o = l.place(i, n, a);
    if (!o) return;
    let h = o[0], c = h.anchor, f = h.bboxes[0], _ = [h.draw];
    for (let m = 1; m < this.list.length; m++) {
      if (o = this.list[m].place(i, n, a), !o) return;
      h = o[0], f = sa(f, h.bboxes[0]), _.push(h.draw);
    }
    return [{ anchor: c, bboxes: [f], draw: T((m) => {
      for (let p of _) p(m);
    }, "draw") }];
  }
};
T(aa, "GroupSymbolizer");
var Bc = aa, la = class {
  constructor(i) {
    this.symbolizer = i;
  }
  place(i, n, a) {
    let l = n[0][0], o = this.symbolizer.place(i, [[new $(0, 0)]], a);
    if (!o || o.length === 0) return;
    let h = o[0], c = h.bboxes[0], f = c.maxX - c.minX, _ = c.maxY - c.minY, m = { minX: l.x - f / 2, maxX: l.x + f / 2, minY: l.y - _ / 2, maxY: l.y + _ / 2 };
    return [{ anchor: l, bboxes: [m], draw: T((p) => {
      p.translate(-f / 2, _ / 2 - c.maxY), h.draw(p, { justify: 2 });
    }, "draw") }];
  }
};
T(la, "CenteredSymbolizer");
var Ac = la, Zc = class {
  constructor(i, n) {
    this.padding = new mt(i, 0), this.symbolizer = n;
  }
  place(i, n, a) {
    let l = this.symbolizer.place(i, n, a);
    if (!l || l.length === 0) return;
    let o = this.padding.get(i.zoom, a);
    for (let h of l) for (let c of h.bboxes) c.minX -= o, c.minY -= o, c.maxX += o, c.maxY += o;
    return l;
  }
};
T(Zc, "Padding");
var ha = class {
  constructor(i) {
    this.font = new hr(i), this.text = new lr(i), this.fill = new It(i.fill, "black"), this.stroke = new It(i.stroke, "black"), this.width = new mt(i.width, 0), this.lineHeight = new mt(i.lineHeight, 1), this.letterSpacing = new mt(i.letterSpacing, 0), this.maxLineCodeUnits = new mt(i.maxLineChars, 15), this.justify = i.justify;
  }
  place(i, n, a) {
    let l = this.text.get(i.zoom, a);
    if (!l) return;
    let o = this.font.get(i.zoom, a);
    i.scratch.font = o;
    let h = this.letterSpacing.get(i.zoom, a), c = ur(l, this.maxLineCodeUnits.get(i.zoom, a)), f = "", _ = 0;
    for (let M of c) M.length > _ && (_ = M.length, f = M);
    let m = i.scratch.measureText(f), p = m.width + h * (_ - 1), v = m.actualBoundingBoxAscent, y = m.actualBoundingBoxDescent, w = (v + y) * this.lineHeight.get(i.zoom, a), x = new $(n[0][0].x, n[0][0].y), E = { minX: x.x, minY: x.y - v, maxX: x.x + p, maxY: x.y + y + (c.length - 1) * w };
    return [{ anchor: x, bboxes: [E], draw: T((M, I) => {
      M.globalAlpha = 1, M.font = o, M.fillStyle = this.fill.get(i.zoom, a);
      let A = this.width.get(i.zoom, a), O = 0;
      for (let S of c) {
        let rt = 0;
        if (this.justify === 2 || I && I.justify === 2 ? rt = (p - M.measureText(S).width) / 2 : (this.justify === 3 || I && I.justify === 3) && (rt = p - M.measureText(S).width), A) if (M.lineWidth = A * 2, M.strokeStyle = this.stroke.get(i.zoom, a), h > 0) {
          let G = rt;
          for (let tt of S) M.strokeText(tt, G, O), G += M.measureText(tt).width + h;
        } else M.strokeText(S, rt, O);
        if (h > 0) {
          let G = rt;
          for (let tt of S) M.fillText(tt, G, O), G += M.measureText(tt).width + h;
        } else M.fillText(S, rt, O);
        O += w;
      }
    }, "draw") }];
  }
};
T(ha, "TextSymbolizer");
var ua = ha, ca = class {
  constructor(i) {
    this.centered = new Ac(new ua(i));
  }
  place(i, n, a) {
    return this.centered.place(i, n, a);
  }
};
T(ca, "CenteredTextSymbolizer");
var ii = ca, fa = class {
  constructor(i, n) {
    var a, l, o;
    this.symbolizer = i, this.offsetX = new mt(n.offsetX, 0), this.offsetY = new mt(n.offsetY, 0), this.justify = (a = n.justify) != null ? a : void 0, this.placements = (l = n.placements) != null ? l : [2, 6, 8, 4, 1, 3, 5, 7], this.ddValues = (o = n.ddValues) != null ? o : () => ({});
  }
  place(i, n, a) {
    if (a.geomType !== 1) return;
    let l = n[0][0], o = this.symbolizer.place(i, [[new $(0, 0)]], a);
    if (!o || o.length === 0) return;
    let h = o[0], c = h.bboxes[0], f = this.offsetX, _ = this.offsetY, m = this.justify, p = this.placements, { offsetX: v, offsetY: y, justify: w, placements: x } = this.ddValues(i.zoom, a) || {};
    v && (f = new mt(v, 0)), y && (_ = new mt(y, 0)), w && (m = w), x && (p = x);
    let E = f.get(i.zoom, a), M = _.get(i.zoom, a), I = T((G, tt) => ({ minX: G.x + tt.x + c.minX, minY: G.y + tt.y + c.minY, maxX: G.x + tt.x + c.maxX, maxY: G.y + tt.y + c.maxY }), "getBbox"), A = new $(E, M), O, S = T((G) => {
      G.translate(A.x, A.y), h.draw(G, { justify: O });
    }, "draw"), rt = T((G, tt) => {
      let vt = I(G, tt);
      if (!i.index.bboxCollides(vt, i.order)) return [{ anchor: l, bboxes: [vt], draw: S }];
    }, "placeLabelInPoint");
    for (let G of p) {
      let tt = this.computeXaxisOffset(E, c, G), vt = this.computeYaxisOffset(M, c, G);
      return O = this.computeJustify(m, G), A = new $(tt, vt), rt(l, A);
    }
  }
  computeXaxisOffset(i, n, a) {
    let l = n.maxX, o = l / 2;
    return [1, 5].includes(a) ? i - o : [8, 7, 6].includes(a) ? i - l : i;
  }
  computeYaxisOffset(i, n, a) {
    let l = Math.abs(n.minY), o = n.maxY, h = (n.minY + n.maxY) / 2;
    return [3, 7].includes(a) ? i - h : [8, 2, 1].includes(a) ? i - o : [6, 4, 5].includes(a) ? i + l : i;
  }
  computeJustify(i, n) {
    return i || ([1, 5].includes(n) ? 2 : [2, 3, 4].includes(n) ? 1 : 3);
  }
};
T(fa, "OffsetSymbolizer");
var Dc = fa, da = class {
  constructor(i) {
    this.symbolizer = new Dc(new ua(i), i);
  }
  place(i, n, a) {
    return this.symbolizer.place(i, n, a);
  }
};
T(da, "OffsetTextSymbolizer");
var Rc = da, Fc = ((r) => (r[r.Above = 1] = "Above", r[r.Center = 2] = "Center", r[r.Below = 3] = "Below", r))(Fc || {}), _a = class {
  constructor(i) {
    var n;
    this.font = new hr(i), this.text = new lr(i), this.fill = new It(i.fill, "black"), this.stroke = new It(i.stroke, "black"), this.width = new mt(i.width, 0), this.offset = new mt(i.offset, 0), this.position = (n = i.position) != null ? n : 1, this.maxLabelCodeUnits = new mt(i.maxLabelChars, 40), this.repeatDistance = new mt(i.repeatDistance, 250);
  }
  place(i, n, a) {
    let l = this.text.get(i.zoom, a);
    if (!l || l.length > this.maxLabelCodeUnits.get(i.zoom, a)) return;
    let o = 20, h = a.bbox;
    if (h.maxY - h.minY < o && h.maxX - h.minX < o) return;
    let c = this.font.get(i.zoom, a);
    i.scratch.font = c;
    let f = i.scratch.measureText(l), _ = f.width, m = f.actualBoundingBoxAscent + f.actualBoundingBoxDescent, p = this.repeatDistance.get(i.zoom, a);
    i.overzoom > 4 && (p *= 1 << i.overzoom - 4);
    let v = m * 2, y = Hs(n, _, p, v);
    if (y.length === 0) return;
    let w = [];
    for (let x of y) {
      let E = x.end.x - x.start.x, M = x.end.y - x.start.y, I = Ws(x.start, x.end, _, v / 2).map((O) => ({ minX: O.x - v / 2, minY: O.y - v / 2, maxX: O.x + v / 2, maxY: O.y + v / 2 })), A = T((O) => {
        O.globalAlpha = 1, O.rotate(Math.atan2(M, E)), E < 0 && (O.scale(-1, -1), O.translate(-_, 0));
        let S = 0;
        this.position === 3 ? S += m : this.position === 2 && (S += m / 2), O.translate(0, S - this.offset.get(i.zoom, a)), O.font = c;
        let rt = this.width.get(i.zoom, a);
        rt && (O.lineWidth = rt, O.strokeStyle = this.stroke.get(i.zoom, a), O.strokeText(l, 0, 0)), O.fillStyle = this.fill.get(i.zoom, a), O.fillText(l, 0, 0);
      }, "draw");
      w.push({ anchor: x.start, bboxes: I, draw: A, deduplicationKey: l, deduplicationDistance: p });
    }
    return w;
  }
};
T(_a, "LineLabelSymbolizer");
var Nn = _a, Zt = T((r, i) => {
  let n = r[i];
  return typeof n == "string" ? n : "";
}, "getString"), Go = T((r, i) => {
  let n = r[i];
  return typeof n == "number" ? n : 0;
}, "getNumber"), fr = T((r) => [{ dataLayer: "earth", symbolizer: new wt({ fill: r.earth }) }, { dataLayer: "landuse", symbolizer: new wt({ fill: T((i, n) => An(r.park_a, r.park_b, Math.min(Math.max(i / 12, 12), 0)), "fill") }), filter: T((i, n) => {
  let a = Zt(n.props, "pmap:kind");
  return ["allotments", "village_green", "playground"].includes(a);
}, "filter") }, { dataLayer: "landuse", symbolizer: new wt({ fill: r.park_b, opacity: 0.7 }), filter: T((i, n) => {
  let a = Zt(n.props, "pmap:kind");
  return ["national_park", "park", "cemetery", "protected_area", "nature_reserve", "forest", "golf_course"].includes(a);
}, "filter") }, { dataLayer: "landuse", symbolizer: new wt({ fill: r.hospital }), filter: T((i, n) => n.props["pmap:kind"] === "hospital", "filter") }, { dataLayer: "landuse", symbolizer: new wt({ fill: r.industrial }), filter: T((i, n) => n.props["pmap:kind"] === "industrial", "filter") }, { dataLayer: "landuse", symbolizer: new wt({ fill: r.school }), filter: T((i, n) => {
  let a = Zt(n.props, "pmap:kind");
  return ["school", "university", "college"].includes(a);
}, "filter") }, { dataLayer: "landuse", symbolizer: new wt({ fill: r.beach }), filter: T((i, n) => n.props["pmap:kind"] === "beach", "filter") }, { dataLayer: "landuse", symbolizer: new wt({ fill: r.zoo }), filter: T((i, n) => n.props["pmap:kind"] === "zoo", "filter") }, { dataLayer: "landuse", symbolizer: new wt({ fill: r.zoo }), filter: T((i, n) => {
  let a = Zt(n.props, "pmap:kind");
  return ["military", "naval_base", "airfield"].includes(a);
}, "filter") }, { dataLayer: "natural", symbolizer: new wt({ fill: T((i, n) => An(r.wood_a, r.wood_b, Math.min(Math.max(i / 12, 12), 0)), "fill") }), filter: T((i, n) => {
  let a = Zt(n.props, "pmap:kind");
  return ["wood", "nature_reserve", "forest"].includes(a);
}, "filter") }, { dataLayer: "natural", symbolizer: new wt({ fill: T((i, n) => An(r.scrub_a, r.scrub_b, Math.min(Math.max(i / 12, 12), 0)), "fill") }), filter: T((i, n) => {
  let a = Zt(n.props, "pmap:kind");
  return ["scrub", "grassland", "grass"].includes(a);
}, "filter") }, { dataLayer: "natural", symbolizer: new wt({ fill: r.scrub_b }), filter: T((i, n) => {
  let a = Zt(n.props, "pmap:kind");
  return ["scrub", "grassland", "grass"].includes(a);
}, "filter") }, { dataLayer: "natural", symbolizer: new wt({ fill: r.glacier }), filter: T((i, n) => n.props["pmap:kind"] === "glacier", "filter") }, { dataLayer: "natural", symbolizer: new wt({ fill: r.sand }), filter: T((i, n) => n.props["pmap:kind"] === "sand", "filter") }, { dataLayer: "landuse", symbolizer: new wt({ fill: r.aerodrome }), filter: T((i, n) => n.props["pmap:kind"] === "aerodrome", "filter") }, { dataLayer: "water", symbolizer: new wt({ fill: r.water }) }, { dataLayer: "transit", symbolizer: new Bt({ color: r.runway, width: T((i, n) => Wt(1.6, [[11, 0], [13, 4], [19, 30]])(i), "width") }), filter: T((i, n) => n.props["pmap:kind_detail"] === "runway", "filter") }, { dataLayer: "transit", symbolizer: new Bt({ color: r.runway, width: T((i, n) => Wt(1.6, [[14, 0], [14.5, 1], [16, 6]])(i), "width") }), filter: T((i, n) => n.props["pmap:kind_detail"] === "taxiway", "filter") }, { dataLayer: "transit", symbolizer: new Bt({ color: r.pier, width: T((i, n) => Wt(1.6, [[13, 0], [13.5, 0, 5], [21, 16]])(i), "width") }), filter: T((i, n) => n.props["pmap:kind"] === "pier", "filter") }, { dataLayer: "physical_line", minzoom: 14, symbolizer: new Bt({ color: r.water, width: T((i, n) => Wt(1.6, [[9, 0], [9.5, 1], [18, 12]])(i), "width") }), filter: T((i, n) => n.props["pmap:kind"] === "river", "filter") }, { dataLayer: "physical_line", minzoom: 14, symbolizer: new Bt({ color: r.water, width: 0.5 }), filter: T((i, n) => n.props["pmap:kind"] === "stream", "filter") }, { dataLayer: "landuse", symbolizer: new wt({ fill: r.pedestrian }), filter: T((i, n) => n.props["pmap:kind"] === "pedestrian", "filter") }, { dataLayer: "landuse", symbolizer: new wt({ fill: r.pier }), filter: T((i, n) => n.props["pmap:kind"] === "pier", "filter") }, { dataLayer: "buildings", symbolizer: new wt({ fill: r.buildings, opacity: 0.5 }) }, { dataLayer: "roads", symbolizer: new Bt({ color: r.major, width: T((i, n) => Wt(1.6, [[14, 0], [20, 7]])(i), "width") }), filter: T((i, n) => {
  let a = Zt(n.props, "pmap:kind");
  return ["other", "path"].includes(a);
}, "filter") }, { dataLayer: "roads", symbolizer: new Bt({ color: r.major, width: T((i, n) => Wt(1.6, [[13, 0], [18, 8]])(i), "width") }), filter: T((i, n) => n.props["pmap:kind"] === "minor_road", "filter") }, { dataLayer: "roads", symbolizer: new Bt({ color: r.major, width: T((i, n) => Wt(1.6, [[7, 0], [12, 1.2], [15, 3], [18, 13]])(i), "width") }), filter: T((i, n) => n.props["pmap:kind"] === "medium_road", "filter") }, { dataLayer: "roads", symbolizer: new Bt({ color: r.major, width: T((i, n) => Wt(1.6, [[6, 0], [12, 1.6], [15, 3], [18, 13]])(i), "width") }), filter: T((i, n) => n.props["pmap:kind"] === "major_road", "filter") }, { dataLayer: "roads", symbolizer: new Bt({ color: r.major, width: T((i, n) => Wt(1.6, [[3, 0], [6, 1.1], [12, 1.6], [15, 5], [18, 15]])(i), "width") }), filter: T((i, n) => n.props["pmap:kind"] === "highway", "filter") }, { dataLayer: "boundaries", symbolizer: new Bt({ dash: [3, 2], color: r.boundaries, width: 1 }), filter: T((i, n) => {
  let a = n.props["pmap:min_admin_level"];
  return typeof a == "number" && a <= 2;
}, "filter") }, { dataLayer: "transit", symbolizer: new Bt({ dash: [0.3, 0.75], color: r.railway, dashWidth: T((i, n) => Wt(1.6, [[4, 0], [7, 0.15], [19, 9]])(i), "dashWidth"), opacity: 0.5 }), filter: T((i, n) => n.props["pmap:kind"] === "rail", "filter") }, { dataLayer: "boundaries", symbolizer: new Bt({ dash: [3, 2], color: r.boundaries, width: 0.5 }), filter: T((i, n) => {
  let a = n.props["pmap:min_admin_level"];
  return typeof a == "number" && a > 2;
}, "filter") }], "paintRules"), dr = T((r) => {
  let i = ["name"];
  return [{ dataLayer: "roads", symbolizer: new Nn({ labelProps: i, fill: r.roads_label_minor, font: "400 12px sans-serif", width: 2, stroke: r.roads_label_minor_halo }), minzoom: 16, filter: T((n, a) => {
    let l = Zt(a.props, "pmap:kind");
    return ["minor_road", "other", "path"].includes(l);
  }, "filter") }, { dataLayer: "roads", symbolizer: new Nn({ labelProps: i, fill: r.roads_label_major, font: "400 12px sans-serif", width: 2, stroke: r.roads_label_major_halo }), minzoom: 12, filter: T((n, a) => {
    let l = Zt(a.props, "pmap:kind");
    return ["highway", "major_road", "medium_road"].includes(l);
  }, "filter") }, { dataLayer: "roads", symbolizer: new Nn({ labelProps: i, fill: r.roads_label_major, font: "400 12px sans-serif", width: 2, stroke: r.roads_label_major_halo }), minzoom: 12, filter: T((n, a) => {
    let l = Zt(a.props, "pmap:kind");
    return ["highway", "major_road", "medium_road"].includes(l);
  }, "filter") }, { dataLayer: "physical_point", symbolizer: new ii({ labelProps: i, fill: r.ocean_label, lineHeight: 1.5, letterSpacing: 1, font: T((n, a) => `400 ${ir([[3, 10], [10, 12]])(n)}px sans-serif`, "font"), textTransform: "uppercase" }), filter: T((n, a) => {
    let l = Zt(a.props, "pmap:kind");
    return ["ocean", "bay", "strait", "fjord"].includes(l);
  }, "filter") }, { dataLayer: "physical_point", symbolizer: new ii({ labelProps: i, fill: r.ocean_label, lineHeight: 1.5, letterSpacing: 1, font: T((n, a) => `400 ${ir([[3, 0], [6, 12], [10, 12]])(n)}px sans-serif`, "font") }), filter: T((n, a) => {
    let l = Zt(a.props, "pmap:kind");
    return ["sea", "lake", "water"].includes(l);
  }, "filter") }, { dataLayer: "places", symbolizer: new ii({ labelProps: T((n, a) => n < 6 ? ["name:short"] : i, "labelProps"), fill: r.state_label, stroke: r.state_label_halo, width: 1, lineHeight: 1.5, font: T((n, a) => n < 6 ? "400 16px sans-serif" : "400 12px sans-serif", "font"), textTransform: "uppercase" }), filter: T((n, a) => a.props["pmap:kind"] === "region", "filter") }, { dataLayer: "places", symbolizer: new ii({ labelProps: i, fill: r.country_label, lineHeight: 1.5, font: T((n, a) => "600 12px sans-serif", "font"), textTransform: "uppercase" }), filter: T((n, a) => a.props["pmap:kind"] === "country", "filter") }, { dataLayer: "places", minzoom: 9, symbolizer: new ii({ labelProps: i, fill: r.city_label, lineHeight: 1.5, font: T((n, a) => {
    if (!a) return "400 12px sans-serif";
    let l = a.props["pmap:min_zoom"], o = 400;
    l && l <= 5 && (o = 600);
    let h = 12, c = a.props["pmap:population_rank"];
    return c && c > 9 && (h = 16), `${o} ${h}px sans-serif`;
  }, "font") }), sort: T((n, a) => {
    let l = Go(n, "pmap:population_rank"), o = Go(a, "pmap:population_rank");
    return l - o;
  }, "sort"), filter: T((n, a) => a.props["pmap:kind"] === "locality", "filter") }, { dataLayer: "places", maxzoom: 8, symbolizer: new Bc([new Ec({ radius: 2, fill: r.city_circle, stroke: r.city_circle_stroke, width: 1.5 }), new Rc({ labelProps: i, fill: r.city_label, stroke: r.city_label_halo, width: 1, offsetX: 6, offsetY: 4.5, font: T((n, a) => "400 12px sans-serif", "font") })]), filter: T((n, a) => a.props["pmap:kind"] === "locality", "filter") }];
}, "labelRules"), jc = { background: "#cccccc", earth: "#e0e0e0", park_a: "#cfddd5", park_b: "#9cd3b4", hospital: "#e4dad9", industrial: "#d1dde1", school: "#e4ded7", wood_a: "#d0ded0", wood_b: "#a0d9a0", pedestrian: "#e3e0d4", scrub_a: "#cedcd7", scrub_b: "#99d2bb", glacier: "#e7e7e7", sand: "#e2e0d7", beach: "#e8e4d0", aerodrome: "#dadbdf", runway: "#e9e9ed", water: "#80deea", pier: "#e0e0e0", zoo: "#c6dcdc", military: "#dcdcdc", tunnel_other_casing: "#e0e0e0", tunnel_minor_casing: "#e0e0e0", tunnel_link_casing: "#e0e0e0", tunnel_medium_casing: "#e0e0e0", tunnel_major_casing: "#e0e0e0", tunnel_highway_casing: "#e0e0e0", tunnel_other: "#d5d5d5", tunnel_minor: "#d5d5d5", tunnel_link: "#d5d5d5", tunnel_medium: "#d5d5d5", tunnel_major: "#d5d5d5", tunnel_highway: "#d5d5d5", transit_pier: "#e0e0e0", buildings: "#cccccc", minor_service_casing: "#e0e0e0", minor_casing: "#e0e0e0", link_casing: "#e0e0e0", medium_casing: "#e0e0e0", major_casing_late: "#e0e0e0", highway_casing_late: "#e0e0e0", other: "#ebebeb", minor_service: "#ebebeb", minor_a: "#ebebeb", minor_b: "#ffffff", link: "#ffffff", medium: "#f5f5f5", major_casing_early: "#e0e0e0", major: "#ffffff", highway_casing_early: "#e0e0e0", highway: "#ffffff", railway: "#a7b1b3", boundaries: "#adadad", waterway_label: "#ffffff", bridges_other_casing: "#e0e0e0", bridges_minor_casing: "#e0e0e0", bridges_link_casing: "#e0e0e0", bridges_medium_casing: "#e0e0e0", bridges_major_casing: "#e0e0e0", bridges_highway_casing: "#e0e0e0", bridges_other: "#ebebeb", bridges_minor: "#ffffff", bridges_link: "#ffffff", bridges_medium: "#f0eded", bridges_major: "#f5f5f5", bridges_highway: "#ffffff", roads_label_minor: "#91888b", roads_label_minor_halo: "#ffffff", roads_label_major: "#938a8d", roads_label_major_halo: "#ffffff", ocean_label: "#ffffff", peak_label: "#7e9aa0", subplace_label: "#8f8f8f", subplace_label_halo: "#e0e0e0", city_circle: "#ffffff", city_circle_stroke: "#a3a3a3", city_label: "#5c5c5c", city_label_halo: "#e0e0e0", state_label: "#b3b3b3", state_label_halo: "#e0e0e0", country_label: "#a3a3a3" }, Nc = { background: "#34373d", earth: "#1f1f1f", park_a: "#232325", park_b: "#232325", hospital: "#252424", industrial: "#222222", school: "#262323", wood_a: "#202121", wood_b: "#202121", pedestrian: "#1e1e1e", scrub_a: "#222323", scrub_b: "#222323", glacier: "#1c1c1c", sand: "#212123", beach: "#28282a", aerodrome: "#1e1e1e", runway: "#333333", water: "#34373d", pier: "#222222", zoo: "#222323", military: "#242323", tunnel_other_casing: "#141414", tunnel_minor_casing: "#141414", tunnel_link_casing: "#141414", tunnel_medium_casing: "#141414", tunnel_major_casing: "#141414", tunnel_highway_casing: "#141414", tunnel_other: "#292929", tunnel_minor: "#292929", tunnel_link: "#292929", tunnel_medium: "#292929", tunnel_major: "#292929", tunnel_highway: "#292929", transit_pier: "#333333", buildings: "#111111", minor_service_casing: "#1f1f1f", minor_casing: "#1f1f1f", link_casing: "#1f1f1f", medium_casing: "#1f1f1f", major_casing_late: "#1f1f1f", highway_casing_late: "#1f1f1f", other: "#333333", minor_service: "#333333", minor_a: "#3d3d3d", minor_b: "#333333", link: "#3d3d3d", medium: "#3d3d3d", major_casing_early: "#1f1f1f", major: "#3d3d3d", highway_casing_early: "#1f1f1f", highway: "#474747", railway: "#000000", boundaries: "#5b6374", waterway_label: "#717784", bridges_other_casing: "#2b2b2b", bridges_minor_casing: "#1f1f1f", bridges_link_casing: "#1f1f1f", bridges_medium_casing: "#1f1f1f", bridges_major_casing: "#1f1f1f", bridges_highway_casing: "#1f1f1f", bridges_other: "#333333", bridges_minor: "#333333", bridges_link: "#3d3d3d", bridges_medium: "#3d3d3d", bridges_major: "#3d3d3d", bridges_highway: "#474747", roads_label_minor: "#525252", roads_label_minor_halo: "#1f1f1f", roads_label_major: "#666666", roads_label_major_halo: "#1f1f1f", ocean_label: "#717784", peak_label: "#898080", subplace_label: "#525252", subplace_label_halo: "#1f1f1f", city_circle: "#000000", city_circle_stroke: "#7a7a7a", city_label: "#7a7a7a", city_label_halo: "#212121", state_label: "#3d3d3d", state_label_halo: "#1f1f1f", country_label: "#5c5c5c" }, Uc = { background: "#ffffff", earth: "#ffffff", park_a: "#fcfcfc", park_b: "#fcfcfc", hospital: "#f8f8f8", industrial: "#fcfcfc", school: "#f8f8f8", wood_a: "#fafafa", wood_b: "#fafafa", pedestrian: "#fdfdfd", scrub_a: "#fafafa", scrub_b: "#fafafa", glacier: "#fcfcfc", sand: "#fafafa", beach: "#f6f6f6", aerodrome: "#fdfdfd", runway: "#efefef", water: "#dcdcdc", pier: "#f5f5f5", zoo: "#f7f7f7", military: "#fcfcfc", tunnel_other_casing: "#d6d6d6", tunnel_minor_casing: "#fcfcfc", tunnel_link_casing: "#fcfcfc", tunnel_medium_casing: "#fcfcfc", tunnel_major_casing: "#fcfcfc", tunnel_highway_casing: "#fcfcfc", tunnel_other: "#d6d6d6", tunnel_minor: "#d6d6d6", tunnel_link: "#d6d6d6", tunnel_medium: "#d6d6d6", tunnel_major: "#d6d6d6", tunnel_highway: "#d6d6d6", transit_pier: "#efefef", buildings: "#efefef", minor_service_casing: "#ffffff", minor_casing: "#ffffff", link_casing: "#ffffff", medium_casing: "#ffffff", major_casing_late: "#ffffff", highway_casing_late: "#ffffff", other: "#f5f5f5", minor_service: "#f5f5f5", minor_a: "#ebebeb", minor_b: "#f5f5f5", link: "#ebebeb", medium: "#ebebeb", major_casing_early: "#ffffff", major: "#ebebeb", highway_casing_early: "#ffffff", highway: "#ebebeb", railway: "#d6d6d6", boundaries: "#adadad", waterway_label: "#adadad", bridges_other_casing: "#ffffff", bridges_minor_casing: "#ffffff", bridges_link_casing: "#ffffff", bridges_medium_casing: "#ffffff", bridges_major_casing: "#ffffff", bridges_highway_casing: "#ffffff", bridges_other: "#f5f5f5", bridges_minor: "#f5f5f5", bridges_link: "#ebebeb", bridges_medium: "#ebebeb", bridges_major: "#ebebeb", bridges_highway: "#ebebeb", roads_label_minor: "#adadad", roads_label_minor_halo: "#ffffff", roads_label_major: "#999999", roads_label_major_halo: "#ffffff", ocean_label: "#adadad", peak_label: "#adadad", subplace_label: "#8f8f8f", subplace_label_halo: "#ffffff", city_circle: "#ffffff", city_circle_stroke: "#adadad", city_label: "#5c5c5c", city_label_halo: "#ffffff", state_label: "#b3b3b3", state_label_halo: "#ffffff", country_label: "#b8b8b8" }, Vc = { background: "#a3a3a3", earth: "#cccccc", park_a: "#c2c2c2", park_b: "#c2c2c2", hospital: "#d0d0d0", industrial: "#c6c6c6", school: "#d0d0d0", wood_a: "#c2c2c2", wood_b: "#c2c2c2", pedestrian: "#c4c4c4", scrub_a: "#c2c2c2", scrub_b: "#c2c2c2", glacier: "#d2d2d2", sand: "#d2d2d2", beach: "#d2d2d2", aerodrome: "#c9c9c9", runway: "#f5f5f5", water: "#a3a3a3", pier: "#b8b8b8", zoo: "#c7c7c7", military: "#bfbfbf", tunnel_other_casing: "#b8b8b8", tunnel_minor_casing: "#b8b8b8", tunnel_link_casing: "#b8b8b8", tunnel_medium_casing: "#b8b8b8", tunnel_major_casing: "#b8b8b8", tunnel_highway_casing: "#b8b8b8", tunnel_other: "#d6d6d6", tunnel_minor: "#d6d6d6", tunnel_link: "#d6d6d6", tunnel_medium: "#d6d6d6", tunnel_major: "#d6d6d6", tunnel_highway: "#d6d6d6", transit_pier: "#b8b8b8", buildings: "#e0e0e0", minor_service_casing: "#cccccc", minor_casing: "#cccccc", link_casing: "#cccccc", medium_casing: "#cccccc", major_casing_late: "#cccccc", highway_casing_late: "#cccccc", other: "#e0e0e0", minor_service: "#e0e0e0", minor_a: "#ebebeb", minor_b: "#e0e0e0", link: "#ebebeb", medium: "#ebebeb", major_casing_early: "#cccccc", major: "#ebebeb", highway_casing_early: "#cccccc", highway: "#ebebeb", railway: "#f5f5f5", boundaries: "#5c5c5c", waterway_label: "#7a7a7a", bridges_other_casing: "#cccccc", bridges_minor_casing: "#cccccc", bridges_link_casing: "#cccccc", bridges_medium_casing: "#cccccc", bridges_major_casing: "#cccccc", bridges_highway_casing: "#cccccc", bridges_other: "#e0e0e0", bridges_minor: "#e0e0e0", bridges_link: "#ebebeb", bridges_medium: "#ebebeb", bridges_major: "#ebebeb", bridges_highway: "#ebebeb", roads_label_minor: "#999999", roads_label_minor_halo: "#e0e0e0", roads_label_major: "#8f8f8f", roads_label_major_halo: "#ebebeb", ocean_label: "#7a7a7a", peak_label: "#5c5c5c", subplace_label: "#7a7a7a", subplace_label_halo: "#cccccc", city_circle: "#c2c2c2", city_circle_stroke: "#7a7a7a", city_label: "#474747", city_label_halo: "#cccccc", state_label: "#999999", state_label_halo: "#cccccc", country_label: "#858585" }, Hc = { background: "#2b2b2b", earth: "#141414", park_a: "#181818", park_b: "#181818", hospital: "#1d1d1d", industrial: "#101010", school: "#111111", wood_a: "#1a1a1a", wood_b: "#1a1a1a", pedestrian: "#191919", scrub_a: "#1c1c1c", scrub_b: "#1c1c1c", glacier: "#191919", sand: "#161616", beach: "#1f1f1f", aerodrome: "#191919", runway: "#323232", water: "#333333", pier: "#0a0a0a", zoo: "#191919", military: "#121212", tunnel_other_casing: "#101010", tunnel_minor_casing: "#101010", tunnel_link_casing: "#101010", tunnel_medium_casing: "#101010", tunnel_major_casing: "#101010", tunnel_highway_casing: "#101010", tunnel_other: "#292929", tunnel_minor: "#292929", tunnel_link: "#292929", tunnel_medium: "#292929", tunnel_major: "#292929", tunnel_highway: "#292929", transit_pier: "#0a0a0a", buildings: "#0a0a0a", minor_service_casing: "#141414", minor_casing: "#141414", link_casing: "#141414", medium_casing: "#141414", major_casing_late: "#141414", highway_casing_late: "#141414", other: "#1f1f1f", minor_service: "#1f1f1f", minor_a: "#292929", minor_b: "#1f1f1f", link: "#1f1f1f", medium: "#292929", major_casing_early: "#141414", major: "#292929", highway_casing_early: "#141414", highway: "#292929", railway: "#292929", boundaries: "#707070", waterway_label: "#707070", bridges_other_casing: "#141414", bridges_minor_casing: "#141414", bridges_link_casing: "#141414", bridges_medium_casing: "#141414", bridges_major_casing: "#141414", bridges_highway_casing: "#141414", bridges_other: "#1f1f1f", bridges_minor: "#1f1f1f", bridges_link: "#292929", bridges_medium: "#292929", bridges_major: "#292929", bridges_highway: "#292929", roads_label_minor: "#525252", roads_label_minor_halo: "#141414", roads_label_major: "#5c5c5c", roads_label_major_halo: "#141414", ocean_label: "#707070", peak_label: "#707070", subplace_label: "#5c5c5c", subplace_label_halo: "#141414", city_circle: "#000000", city_circle_stroke: "#666666", city_label: "#999999", city_label_halo: "#141414", state_label: "#3d3d3d", state_label_halo: "#141414", country_label: "#707070" }, ma = { light: jc, dark: Nc, white: Uc, grayscale: Vc, black: Hc }, pa = T((r, i, n) => {
  let a = [];
  for (let l of r) {
    let o = [];
    for (let h of l) o.push(h.clone().mult(i).add(n));
    a.push(o);
  }
  return a;
}, "transformGeom"), Ui = T((r, i) => {
  let n = 1 << i;
  return r < 0 ? n + r : r >= n ? r % n : r;
}, "wrap"), ga = class {
  constructor(i, n, a) {
    this.tileCache = i, this.maxDataLevel = n, this.levelDiff = a;
  }
  dataTilesForBounds(i, n) {
    let a = Rt(2, i) / Rt(2, Math.ceil(i)), l = [], o = 1, h = this.tileCache.tileSize;
    if (i < this.levelDiff) o = 1 / (1 << this.levelDiff - i) * a, l.push({ dataTile: { z: 0, x: 0, y: 0 }, origin: new $(0, 0), scale: o, dim: h * o });
    else if (i <= this.levelDiff + this.maxDataLevel) {
      let c = 1 << this.levelDiff, f = 256 * a, _ = Math.ceil(i) - this.levelDiff, m = Math.floor(n.minX / c / f), p = Math.floor(n.minY / c / f), v = Math.floor(n.maxX / c / f), y = Math.floor(n.maxY / c / f);
      for (let w = m; w <= v; w++) for (let x = p; x <= y; x++) {
        let E = new $(w * c * f, x * c * f);
        l.push({ dataTile: { z: _, x: Ui(w, _), y: Ui(x, _) }, origin: E, scale: a, dim: h * a });
      }
    } else {
      let c = 1 << this.levelDiff;
      o = (1 << Math.ceil(i) - this.maxDataLevel - this.levelDiff) * a;
      let f = Math.floor(n.minX / c / 256 / o), _ = Math.floor(n.minY / c / 256 / o), m = Math.floor(n.maxX / c / 256 / o), p = Math.floor(n.maxY / c / 256 / o);
      for (let v = f; v <= m; v++) for (let y = _; y <= p; y++) {
        let w = new $(v * c * 256 * o, y * c * 256 * o);
        l.push({ dataTile: { z: this.maxDataLevel, x: Ui(v, this.maxDataLevel), y: Ui(y, this.maxDataLevel) }, origin: w, scale: o, dim: h * o });
      }
    }
    return l;
  }
  dataTileForDisplayTile(i) {
    let n, a = 1, l = this.tileCache.tileSize, o;
    if (i.z < this.levelDiff) n = { z: 0, x: 0, y: 0 }, a = 1 / (1 << this.levelDiff - i.z), o = new $(0, 0), l = l * a;
    else if (i.z <= this.levelDiff + this.maxDataLevel) {
      let h = 1 << this.levelDiff;
      n = { z: i.z - this.levelDiff, x: Math.floor(i.x / h), y: Math.floor(i.y / h) }, o = new $(n.x * h * 256, n.y * h * 256);
    } else {
      a = 1 << i.z - this.maxDataLevel - this.levelDiff;
      let h = 1 << this.levelDiff;
      n = { z: this.maxDataLevel, x: Math.floor(i.x / h / a), y: Math.floor(i.y / h / a) }, o = new $(n.x * h * a * 256, n.y * h * a * 256), l = l * a;
    }
    return { dataTile: n, scale: a, origin: o, dim: l };
  }
  getBbox(i, n) {
    return Yt(this, null, function* () {
      let a = this.dataTilesForBounds(i, n);
      return (yield Promise.all(a.map((l) => this.tileCache.get(l.dataTile)))).map((l, o) => {
        let h = a[o];
        return { data: l, z: i, dataTile: h.dataTile, scale: h.scale, dim: h.dim, origin: h.origin };
      });
    });
  }
  getDisplayTile(i) {
    return Yt(this, null, function* () {
      let n = this.dataTileForDisplayTile(i);
      return { data: yield this.tileCache.get(n.dataTile), z: i.z, dataTile: n.dataTile, scale: n.scale, origin: n.origin, dim: n.dim };
    });
  }
  queryFeatures(i, n, a, l) {
    let o = Math.round(a), h = Math.min(o - this.levelDiff, this.maxDataLevel), c = l / (1 << o - h);
    return this.tileCache.queryFeatures(i, n, h, c);
  }
};
T(ga, "View");
var Wc = ga, va = T((r) => {
  let i = T((a) => {
    let l = a.levelDiff === void 0 ? 1 : a.levelDiff, o = a.maxDataZoom || 15, h;
    if (typeof a.url == "string") new URL(a.url, "http://example.com").pathname.endsWith(".pmtiles") ? h = new Wo(a.url, !0) : h = new Lc(a.url, !0);
    else if (a.url) h = new Wo(a.url, !0);
    else throw new Error(`Invalid source ${a.url}`);
    let c = new Tc(h, 256 * 1 << l);
    return new Wc(c, o, l);
  }, "sourceToViews"), n = /* @__PURE__ */ new Map();
  if (r.sources) for (let a in r.sources) n.set(a, i(r.sources[a]));
  else n.set("", i(r));
  return n;
}, "sourcesToViews"), Yc = T((r, i, n) => {
  let a = i / 256, l = Math.floor(n.minX / 256), o = Math.floor(n.minY / 256), h = Math.floor(n.maxX / 256), c = Math.floor(n.maxY / 256), f = Math.log2(a), _ = [];
  for (let m = l; m <= h; m++) {
    let p = m % (1 << r);
    for (let v = o; v <= c; v++) _.push({ display: ce({ z: r, x: p, y: v }), key: ce({ z: r - f, x: Math.floor(p / a), y: Math.floor(v / a) }) });
  }
  return _;
}, "covering"), ya = class {
  constructor(i, n) {
    this.tree = new cc(), this.current = /* @__PURE__ */ new Map(), this.dim = i, this.maxLabeledTiles = n;
  }
  hasPrefix(i) {
    for (let n of this.current.keys()) if (n.startsWith(i)) return !0;
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
  searchBbox(i, n) {
    let a = /* @__PURE__ */ new Set();
    for (let l of this.tree.search(i)) l.indexedLabel.order <= n && a.add(l.indexedLabel);
    return a;
  }
  searchLabel(i, n) {
    let a = /* @__PURE__ */ new Set();
    for (let l of i.bboxes) for (let o of this.tree.search(l)) o.indexedLabel.order <= n && a.add(o.indexedLabel);
    return a;
  }
  bboxCollides(i, n) {
    for (let a of this.tree.search(i)) if (a.indexedLabel.order <= n) return !0;
    return !1;
  }
  labelCollides(i, n) {
    for (let a of i.bboxes) for (let l of this.tree.search(a)) if (l.indexedLabel.order <= n) return !0;
    return !1;
  }
  deduplicationCollides(i) {
    if (!i.deduplicationKey || !i.deduplicationDistance) return !1;
    let n = i.deduplicationDistance, a = { minX: i.anchor.x - n, minY: i.anchor.y - n, maxX: i.anchor.x + n, maxY: i.anchor.y + n };
    for (let l of this.tree.search(a)) if (l.indexedLabel.deduplicationKey === i.deduplicationKey && l.indexedLabel.anchor.dist(i.anchor) < n) return !0;
    return !1;
  }
  makeEntry(i) {
    this.current.get(i) && console.log("consistency error 1");
    let n = /* @__PURE__ */ new Set();
    this.current.set(i, n);
  }
  insert(i, n, a) {
    let l = { anchor: i.anchor, bboxes: i.bboxes, draw: i.draw, order: n, tileKey: a, deduplicationKey: i.deduplicationKey, deduplicationDistance: i.deduplicationDistance }, o = this.current.get(a);
    if (!o) {
      let f = /* @__PURE__ */ new Set();
      this.current.set(a, f), o = f;
    }
    o.add(l);
    let h = !1, c = !1;
    for (let f of i.bboxes) this.tree.insert({ minX: f.minX, minY: f.minY, maxX: f.maxX, maxY: f.maxY, indexedLabel: l }), f.minX < 0 && (h = !0), f.maxX > this.dim && (c = !0);
    if (h || c) {
      let f = h ? this.dim : -this.dim, _ = [];
      for (let v of i.bboxes) _.push({ minX: v.minX + f, minY: v.minY, maxX: v.maxX + f, maxY: v.maxY });
      let m = { anchor: new $(i.anchor.x + f, i.anchor.y), bboxes: _, draw: i.draw, order: n, tileKey: a }, p = this.current.get(a);
      p && p.add(m);
      for (let v of _) this.tree.insert({ minX: v.minX, minY: v.minY, maxX: v.maxX, maxY: v.maxY, indexedLabel: m });
    }
  }
  pruneOrNoop(i) {
    let n = i.split(":"), a, l = 0, o = 0;
    for (let h of this.current.keys()) {
      let c = h.split(":");
      if (c[3] === n[3]) {
        o++;
        let f = Math.sqrt(Rt(+c[0] - +n[0], 2) + Rt(+c[1] - +n[1], 2));
        f > l && (l = f, a = h);
      }
      a && o > this.maxLabeledTiles && this.pruneKey(a);
    }
  }
  pruneKey(i) {
    let n = this.current.get(i);
    if (!n) return;
    let a = [];
    for (let l of this.tree.all()) n.has(l.indexedLabel) && a.push(l);
    for (let l of a) this.tree.remove(l);
    this.current.delete(i);
  }
  removeLabel(i) {
    let n = [];
    for (let l of this.tree.all()) i === l.indexedLabel && n.push(l);
    for (let l of n) this.tree.remove(l);
    let a = this.current.get(i.tileKey);
    a && a.delete(i);
  }
};
T(ya, "Index");
var Gc = ya, ba = class {
  constructor(i, n, a, l, o) {
    this.index = new Gc(256 * 1 << i, l), this.z = i, this.scratch = n, this.labelRules = a, this.callback = o;
  }
  layout(i) {
    let n = performance.now(), a = /* @__PURE__ */ new Set();
    for (let [o, h] of i) for (let c of h) {
      let f = `${ce(c.dataTile)}:${o}`;
      this.index.has(f) || (this.index.makeEntry(f), a.add(f));
    }
    let l = /* @__PURE__ */ new Set();
    for (let [o, h] of this.labelRules.entries()) {
      if (h.visible === !1 || h.minzoom && this.z < h.minzoom || h.maxzoom && this.z > h.maxzoom) continue;
      let c = h.dataSource || "", f = i.get(c);
      if (f) for (let _ of f) {
        let m = `${ce(_.dataTile)}:${c}`;
        if (!a.has(m)) continue;
        let p = _.data.get(h.dataLayer);
        if (p === void 0) continue;
        let v = p;
        h.sort && v.sort((w, x) => h.sort ? h.sort(w.props, x.props) : 0);
        let y = { index: this.index, zoom: this.z, scratch: this.scratch, order: o, overzoom: this.z - _.dataTile.z };
        for (let w of v) {
          if (h.filter && !h.filter(this.z, w)) continue;
          let x = pa(w.geom, _.scale, _.origin), E = h.symbolizer.place(y, x, w);
          if (E) for (let M of E) {
            let I = !1;
            if (!(M.deduplicationKey && this.index.deduplicationCollides(M))) {
              if (this.index.labelCollides(M, 1 / 0)) {
                if (!this.index.labelCollides(M, o)) {
                  let A = this.index.searchLabel(M, 1 / 0);
                  for (let O of A) {
                    this.index.removeLabel(O);
                    for (let S of O.bboxes) this.findInvalidatedTiles(l, _.dim, S, m);
                  }
                  this.index.insert(M, o, m), I = !0;
                }
              } else this.index.insert(M, o, m), I = !0;
              if (I) for (let A of M.bboxes) (A.maxX > _.origin.x + _.dim || A.minX < _.origin.x || A.minY < _.origin.y || A.maxY > _.origin.y + _.dim) && this.findInvalidatedTiles(l, _.dim, A, m);
            }
          }
        }
      }
    }
    for (let o of a) this.index.pruneOrNoop(o);
    return l.size > 0 && this.callback && this.callback(l), performance.now() - n;
  }
  findInvalidatedTiles(i, n, a, l) {
    let o = Yc(this.z, n, a);
    for (let h of o) h.key !== l && this.index.hasPrefix(h.key) && i.add(h.display);
  }
  add(i) {
    let n = !0;
    for (let [a, l] of i) for (let o of l) this.index.has(`${ce(o.dataTile)}:${a}`) || (n = !1);
    return n ? 0 : this.layout(i);
  }
};
T(ba, "Labeler");
var xa = ba, wa = class {
  constructor(i, n, a, l) {
    this.labelers = /* @__PURE__ */ new Map(), this.scratch = i, this.labelRules = n, this.maxLabeledTiles = a, this.callback = l;
  }
  add(i, n) {
    let a = this.labelers.get(i);
    return a || (a = new xa(i, this.scratch, this.labelRules, this.maxLabeledTiles, this.callback), this.labelers.set(i, a)), a.add(n);
  }
  getIndex(i) {
    let n = this.labelers.get(i);
    if (n) return n.index;
  }
};
T(wa, "Labelers");
var qo = wa;
function _r(r, i, n, a, l, o, h, c, f) {
  let _ = performance.now();
  r.save(), r.miterLimit = 2;
  for (let m of l) {
    if (m.minzoom && i < m.minzoom || m.maxzoom && i > m.maxzoom) continue;
    let p = n.get(m.dataSource || "");
    if (p) for (let v of p) {
      let y = v.data.get(m.dataLayer);
      if (y === void 0) continue;
      m.symbolizer.before && m.symbolizer.before(r, v.z);
      let w = v.origin, x = v.dim, E = v.scale;
      if (r.save(), c) {
        r.beginPath();
        let M = Math.max(w.x - h.x, o.minX - h.x), I = Math.max(w.y - h.y, o.minY - h.y), A = Math.min(w.x - h.x + x, o.maxX - h.x), O = Math.min(w.y - h.y + x, o.maxY - h.y);
        r.rect(M, I, A - M, O - I), r.clip();
      }
      r.translate(w.x - h.x, w.y - h.y);
      for (let M of y) {
        let I = M.geom, A = M.bbox;
        A.maxX * E + w.x < o.minX || A.minX * E + w.x > o.maxX || A.minY * E + w.y > o.maxY || A.maxY * E + w.y < o.minY || m.filter && !m.filter(v.z, M) || (E !== 1 && (I = pa(I, E, new $(0, 0))), m.symbolizer.draw(r, I, v.z, M));
      }
      r.restore();
    }
  }
  if (c && (r.beginPath(), r.rect(o.minX - h.x, o.minY - h.y, o.maxX - o.minX, o.maxY - o.minY), r.clip()), a) {
    let m = a.searchBbox(o, 1 / 0);
    for (let p of m) if (r.save(), r.translate(p.anchor.x - h.x, p.anchor.y - h.y), p.draw(r), r.restore(), f) {
      r.lineWidth = 0.5, r.strokeStyle = f, r.fillStyle = f, r.globalAlpha = 1, r.fillRect(p.anchor.x - h.x - 2, p.anchor.y - h.y - 2, 4, 4);
      for (let v of p.bboxes) r.strokeRect(v.minX - h.x, v.minY - h.y, v.maxX - v.minX, v.maxY - v.minY);
    }
  }
  return r.restore(), performance.now() - _;
}
T(_r, "paint");
var fi = 6378137, Xo = 85.0511287798, Gt = fi * Math.PI, La = T((r) => {
  let i = Math.PI / 180, n = Math.max(Math.min(Xo, r.y), -Xo), a = Math.sin(n * i);
  return new $(fi * r.x * i, fi * Math.log((1 + a) / (1 - a)) / 2);
}, "project"), qc = T((r) => {
  let i = 180 / Math.PI;
  return { lat: (2 * Math.atan(Math.exp(r.y / fi)) - Math.PI / 2) * i, lng: r.x * i / fi };
}, "unproject"), Xc = T((r, i) => (n) => {
  let a = La(n);
  return new $((a.x + Gt) / (Gt * 2), 1 - (a.y + Gt) / (Gt * 2)).mult((1 << i) * 256).sub(r);
}, "instancedProject"), $c = T((r, i) => (n) => {
  let a = new $(n.x, n.y).add(r).div((1 << i) * 256), l = new $(a.x * (Gt * 2) - Gt, (1 - a.y) * (Gt * 2) - Gt);
  return qc(l);
}, "instancedUnproject"), $o = T((r, i) => {
  let n = i * (360 / r);
  return Math.log2(n / 256);
}, "getZoom"), Kc = class {
  constructor(i) {
    if (i.theme) {
      let n = ma[i.theme];
      this.paintRules = fr(n), this.labelRules = dr(n), this.backgroundColor = n.background;
    } else this.paintRules = i.paintRules || [], this.labelRules = i.labelRules || [], this.backgroundColor = i.backgroundColor;
    this.views = va(i), this.debug = i.debug || "";
  }
  drawContext(i, n, a, l, o) {
    return Yt(this, null, function* () {
      let h = La(l), c = new $((h.x + Gt) / (Gt * 2), 1 - (h.y + Gt) / (Gt * 2)).clone().mult(Rt(2, o) * 256).sub(new $(n / 2, a / 2)), f = { minX: c.x, minY: c.y, maxX: c.x + n, maxY: c.y + a }, _ = [];
      for (let [x, E] of this.views) {
        let M = E.getBbox(o, f);
        _.push({ key: x, promise: M });
      }
      let m = yield Promise.all(_.map((x) => x.promise.then((E) => ({ status: "fulfilled", value: E, key: x.key }), (E) => ({ status: "rejected", value: [], reason: E, key: x.key })))), p = /* @__PURE__ */ new Map();
      for (let x of m) x.status === "fulfilled" && p.set(x.key, x.value);
      let v = performance.now(), y = new xa(o, i, this.labelRules, 16, void 0);
      y.add(p), this.backgroundColor && (i.save(), i.fillStyle = this.backgroundColor, i.fillRect(0, 0, n, a), i.restore());
      let w = this.paintRules;
      if (_r(i, o, p, y.index, w, f, c, !0, this.debug), this.debug) {
        i.save(), i.translate(-c.x, -c.y), i.strokeStyle = this.debug, i.fillStyle = this.debug, i.font = "12px sans-serif";
        let x = 0;
        for (let [E, M] of p) {
          for (let I of M) {
            i.strokeRect(I.origin.x, I.origin.y, I.dim, I.dim);
            let A = I.dataTile;
            i.fillText(`${E + (E ? " " : "") + A.z} ${A.x} ${A.y}`, I.origin.x + 4, I.origin.y + 14 * (1 + x));
          }
          x++;
        }
        i.restore();
      }
      return { elapsed: performance.now() - v, project: Xc(c, o), unproject: $c(c, o) };
    });
  }
  drawCanvas(i, n, a) {
    return Yt(this, arguments, function* (l, o, h, c = {}) {
      let f = window.devicePixelRatio, _ = l.clientWidth, m = l.clientHeight;
      l.width === _ * f && l.height === m * f || (l.width = _ * f, l.height = m * f), c.lang && (l.lang = c.lang);
      let p = l.getContext("2d");
      if (!p) {
        console.error("Failed to initialize canvas2d context.");
        return;
      }
      return p.setTransform(f, 0, 0, f, 0, 0), this.drawContext(p, _, m, o, h);
    });
  }
  drawContextBounds(i, n, a, l, o) {
    return Yt(this, null, function* () {
      let h = a.x - n.x, c = new $((n.x + a.x) / 2, (n.y + a.y) / 2);
      return this.drawContext(i, l, o, c, $o(h, l));
    });
  }
  drawCanvasBounds(i, n, a, l) {
    return Yt(this, arguments, function* (o, h, c, f, _ = {}) {
      let m = c.x - h.x, p = new $((h.x + c.x) / 2, (h.y + c.y) / 2);
      return this.drawCanvas(o, p, $o(m, f), _);
    });
  }
};
T(Kc, "Static");
var Jc = T((r) => new Promise((i) => {
  setTimeout(() => {
    i();
  }, r);
}), "timer"), Qc = T((r) => r.then((i) => ({ status: "fulfilled", value: i }), (i) => ({ status: "rejected", reason: i })), "reflect"), tf = T((r = {}) => {
  let i = class extends L.GridLayer {
    constructor(l = {}) {
      if (l.noWrap && !l.bounds && (l.bounds = [[-90, -180], [90, 180]]), l.attribution == null && (l.attribution = '<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'), super(l), l.theme) {
        let h = ma[l.theme];
        this.paintRules = fr(h), this.labelRules = dr(h), this.backgroundColor = h.background;
      } else this.paintRules = l.paintRules || [], this.labelRules = l.labelRules || [], this.backgroundColor = l.backgroundColor;
      this.lastRequestedZ = void 0, this.tasks = l.tasks || [], this.views = va(l), this.debug = l.debug;
      let o = document.createElement("canvas").getContext("2d");
      this.scratch = o, this.onTilesInvalidated = (h) => {
        for (let c of h) this.rerenderTile(c);
      }, this.labelers = new qo(this.scratch, this.labelRules, 16, this.onTilesInvalidated), this.tileSize = 256 * window.devicePixelRatio, this.tileDelay = l.tileDelay || 3, this.lang = l.lang;
    }
    renderTile(l, o, h, c = () => {
    }) {
      return Yt(this, null, function* () {
        this.lastRequestedZ = l.z;
        let f = [];
        for (let [G, tt] of this.views) {
          let vt = tt.getDisplayTile(l);
          f.push({ key: G, promise: vt });
        }
        let _ = yield Promise.all(f.map((G) => G.promise.then((tt) => ({ status: "fulfilled", value: tt, key: G.key }), (tt) => ({ status: "rejected", reason: tt, key: G.key })))), m = /* @__PURE__ */ new Map();
        for (let G of _) G.status === "fulfilled" ? m.set(G.key, [G.value]) : G.reason.name === "AbortError" || console.error(G.reason);
        if (o.key !== h || this.lastRequestedZ !== l.z || (yield Promise.all(this.tasks.map(Qc)), o.key !== h) || this.lastRequestedZ !== l.z) return;
        let p = this.labelers.add(l.z, m);
        if (o.key !== h || this.lastRequestedZ !== l.z) return;
        let v = this.labelers.getIndex(l.z);
        if (!this._map) return;
        let y = this._map.getCenter().wrap(), w = this._getTiledPixelBounds(y), x = this._pxBoundsToTileRange(w).getCenter(), E = l.distanceTo(x) * this.tileDelay;
        if (yield Jc(E), o.key !== h || this.lastRequestedZ !== l.z) return;
        let M = 16, I = { minX: 256 * l.x - M, minY: 256 * l.y - M, maxX: 256 * (l.x + 1) + M, maxY: 256 * (l.y + 1) + M }, A = new $(256 * l.x, 256 * l.y);
        o.width = this.tileSize, o.height = this.tileSize;
        let O = o.getContext("2d");
        if (!O) {
          console.error("Failed to get Canvas context");
          return;
        }
        O.setTransform(this.tileSize / 256, 0, 0, this.tileSize / 256, 0, 0), O.clearRect(0, 0, 256, 256), this.backgroundColor && (O.save(), O.fillStyle = this.backgroundColor, O.fillRect(0, 0, 256, 256), O.restore());
        let S = 0, rt = this.paintRules;
        if (S = _r(O, l.z, m, this.xray ? null : v, rt, I, A, !1, this.debug), this.debug) {
          O.save(), O.fillStyle = this.debug, O.font = "600 12px sans-serif", O.fillText(`${l.z} ${l.x} ${l.y}`, 4, 14), O.font = "12px sans-serif";
          let G = 28;
          for (let [tt, vt] of m) {
            let ft = vt[0].dataTile;
            O.fillText(`${tt + (tt ? " " : "") + ft.z} ${ft.x} ${ft.y}`, 4, G), G += 14;
          }
          O.font = "600 10px sans-serif", S > 8 && (O.fillText(`${S.toFixed()} ms paint`, 4, G), G += 14), p > 8 && O.fillText(`${p.toFixed()} ms layout`, 4, G), O.strokeStyle = this.debug, O.lineWidth = 0.5, O.beginPath(), O.moveTo(0, 0), O.lineTo(0, 256), O.stroke(), O.lineWidth = 0.5, O.beginPath(), O.moveTo(0, 0), O.lineTo(256, 0), O.stroke(), O.restore();
        }
        c();
      });
    }
    rerenderTile(l) {
      for (let o in this._tiles) {
        let h = this._wrapCoords(this._keyToTileCoords(o));
        l === this._tileCoordsToKey(h) && this.renderTile(h, this._tiles[o].el, l);
      }
    }
    queryTileFeaturesDebug(l, o, h = 16) {
      let c = /* @__PURE__ */ new Map();
      for (let [f, _] of this.views) c.set(f, _.queryFeatures(l, o, this._map.getZoom(), h));
      return c;
    }
    clearLayout() {
      this.labelers = new qo(this.scratch, this.labelRules, 16, this.onTilesInvalidated);
    }
    rerenderTiles() {
      for (let l in this._tiles) {
        let o = this._wrapCoords(this._keyToTileCoords(l)), h = this._tileCoordsToKey(o);
        this.renderTile(o, this._tiles[l].el, h);
      }
    }
    createTile(l, o) {
      let h = L.DomUtil.create("canvas", "leaflet-tile");
      h.lang = this.lang;
      let c = this._tileCoordsToKey(l);
      return h.key = c, this.renderTile(l, h, c, () => {
        o(void 0, h);
      }), h;
    }
    _removeTile(l) {
      let o = this._tiles[l];
      o && (o.el.removed = !0, o.el.key = void 0, L.DomUtil.removeClass(o.el, "leaflet-tile-loaded"), o.el.width = o.el.height = 0, L.DomUtil.remove(o.el), delete this._tiles[l], this.fire("tileunload", { tile: o.el, coords: this._keyToTileCoords(l) }));
    }
  };
  T(i, "LeafletLayer");
  let n = i;
  return new n(r);
}, "leafletLayer");
T((r, i, n) => {
  let a = new FontFace(r, `url(${i})`, { weight: n });
  return document.fonts.add(a), a.load();
}, "Font");
var Ko = T((r) => Yt(void 0, null, function* () {
  return new Promise((i, n) => {
    let a = new Image();
    a.onload = () => i(a), a.onerror = () => n("Invalid SVG"), a.src = r;
  });
}), "mkimg"), ef = `
<svg width="20px" height="20px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" fill="#cccccc"/>
    <g transform="translate(5,5)">
        <path fill="none" stroke="#666666" stroke-width="7" d="m11,12a8.5,8 0 1,1 17,0q0,4-4,6t-4.5,4.5-.4,4v.2m0,3v7"/>
    </g>
</svg>
`, nf = class {
  constructor(i) {
    this.src = i, this.canvas = document.createElement("canvas"), this.mapping = /* @__PURE__ */ new Map(), this.missingBox = { x: 0, y: 0, w: 0, h: 0 };
  }
  load() {
    return Yt(this, null, function* () {
      let i = this.src, n = window.devicePixelRatio;
      i.endsWith(".html") && (i = yield (yield fetch(i)).text());
      let a = new window.DOMParser().parseFromString(i, "text/html"), l = Array.from(a.body.children), o = yield Ko(`data:image/svg+xml;base64,${btoa(ef)}`), h = [{ w: o.width * n, h: o.height * n, img: o, id: "" }], c = new XMLSerializer();
      for (let m of l) {
        let p = `data:image/svg+xml;base64,${btoa(c.serializeToString(m))}`, v = yield Ko(p);
        h.push({ w: v.width * n, h: v.height * n, img: v, id: m.id });
      }
      let f = gc(h);
      this.canvas.width = f.w, this.canvas.height = f.h;
      let _ = this.canvas.getContext("2d");
      if (_) for (let m of h) m.x !== void 0 && m.y !== void 0 && (_.drawImage(m.img, m.x, m.y, m.w, m.h), m.id ? this.mapping.set(m.id, { x: m.x, y: m.y, w: m.w, h: m.h }) : this.missingBox = { x: m.x, y: m.y, w: m.w, h: m.h });
      return this;
    });
  }
  get(i) {
    let n = this.mapping.get(i);
    return n || (n = this.missingBox), n;
  }
};
T(nf, "Sheet");
const rf = {
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
}, of = {
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
}, sf = {
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
}, af = {
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
}, lf = {
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
}, hf = {
  light: rf,
  dark: of,
  white: sf,
  grayscale: af,
  black: lf
}, Jo = { ...hf.light }, uf = (r, i, n) => Object.freeze({ instance: r, context: i, container: n }), cf = ({ ...r }, i) => {
  const n = tf({
    paint_rules: r.paintRules,
    label_rules: r.labelRules,
    ...r
  });
  return uf(n, i);
}, ff = fs(
  cf,
  ds
), Pa = ({ attribution: r, url: i, format: n, ...a }) => {
  var h, c;
  const l = ye(Ft);
  let o = /* @__PURE__ */ ut(ph, { attribution: r, url: i, ...a });
  return n === "pmtiles" && (o = /* @__PURE__ */ ut(
    ff,
    {
      attribution: r,
      url: i,
      paintRules: ((h = l.map) == null ? void 0 : h.tiles) && fr({ ...Jo, ...l.map.tiles }),
      labelRules: ((c = l.map) == null ? void 0 : c.tiles) && dr({ ...Jo, ...l.map.tiles }),
      ...a
    }
  )), o;
};
Pa.propTypes = {
  attribution: nt.string,
  url: nt.string.isRequired,
  format: nt.oneOf(["pmtiles"])
};
const df = di(dh)`
  ${({ theme: r }) => {
  var i, n;
  return `
      ${(n = (i = r == null ? void 0 : r.global) == null ? void 0 : i.font) != null && n.family ? `font-family: ${r.global.font.family};` : ""}
      height: 100%;
    `;
}}
`, _f = ae(
  ({
    center: r = [0, 0],
    children: i,
    // level 20 is the highest zoom level per OpenStreetMap docs
    // (https://wiki.openstreetmap.org/wiki/Zoom_levels)
    maxZoom: n = 20,
    minZoom: a = 3,
    scrollWheelZoom: l = !0,
    tileLayer: o,
    theme: h,
    zoom: c = 1,
    zoomControl: f = !1,
    ..._
  }, m) => {
    const p = ye(Ft), v = ui(p, { map: ui(jh, h) });
    return /* @__PURE__ */ ut(Ft.Provider, { value: v, children: /* @__PURE__ */ nr(
      df,
      {
        attributionControl: !1,
        center: r,
        ref: m,
        scrollWheelZoom: l,
        maxZoom: n,
        minZoom: a,
        zoom: c,
        zoomControl: f,
        ..._,
        children: [
          /* @__PURE__ */ ut(ch, { position: "bottomright", prefix: !1 }),
          /* @__PURE__ */ ut(
            Pa,
            {
              attribution: o.attribution,
              url: o.url,
              format: o.format,
              ...o
            }
          ),
          i
        ]
      }
    ) });
  }
);
_f.propTypes = {
  center: nt.array,
  children: nt.any,
  scrollWheelZoom: nt.string || nt.bool,
  maxZoom: nt.number,
  minZoom: nt.number,
  tileLayer: nt.shape({
    attribution: nt.string,
    url: nt.string.isRequired,
    format: nt.oneOf(["pmtiles"])
  }).isRequired,
  theme: nt.object,
  zoom: nt.number,
  zoomControl: nt.bool
};
let Vi;
const mf = new Uint8Array(16);
function pf() {
  if (!Vi && (Vi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Vi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Vi(mf);
}
const Ct = [];
for (let r = 0; r < 256; ++r)
  Ct.push((r + 256).toString(16).slice(1));
function gf(r, i = 0) {
  return Ct[r[i + 0]] + Ct[r[i + 1]] + Ct[r[i + 2]] + Ct[r[i + 3]] + "-" + Ct[r[i + 4]] + Ct[r[i + 5]] + "-" + Ct[r[i + 6]] + Ct[r[i + 7]] + "-" + Ct[r[i + 8]] + Ct[r[i + 9]] + "-" + Ct[r[i + 10]] + Ct[r[i + 11]] + Ct[r[i + 12]] + Ct[r[i + 13]] + Ct[r[i + 14]] + Ct[r[i + 15]];
}
const vf = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Qo = {
  randomUUID: vf
};
function Ta(r, i, n) {
  if (Qo.randomUUID && !i && !r)
    return Qo.randomUUID();
  r = r || {};
  const a = r.random || (r.rng || pf)();
  return a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, gf(a);
}
const yf = ({ icon: r, popup: i, ...n }) => {
  var h;
  const a = ye(Ft), l = (h = r == null ? void 0 : r.props) == null ? void 0 : h.kind, o = i ? /* @__PURE__ */ ut(mh, { children: /* @__PURE__ */ ut(ka, { children: i }) }) : void 0;
  return /* @__PURE__ */ ut(
    _h,
    {
      icon: qi.divIcon({
        // 'grommet-marker' class prevents leaflet default divIcon styles
        className: "grommet-marker",
        html: Vn.renderToString(
          /* @__PURE__ */ ut(Ft.Provider, { value: a, children: r || /* @__PURE__ */ ut(Ca, {}) })
        )
      }),
      kind: l,
      ...n,
      children: o
    },
    Ta()
  );
};
yf.propTypes = {
  icon: nt.node,
  popup: nt.node
};
var ts = { exports: {} };
(function(r, i) {
  (function(n, a) {
    a(i);
  })(ls, function(n) {
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
        var c = this._featureGroup, f = this._nonPointGroup, _ = this.options.chunkedLoading, m = this.options.chunkInterval, p = this.options.chunkProgress, v = o.length, y = 0, w = !0, x;
        if (this._map) {
          var E = (/* @__PURE__ */ new Date()).getTime(), M = L.bind(function() {
            var A = (/* @__PURE__ */ new Date()).getTime();
            for (this._map && this._unspiderfy && this._unspiderfy(); y < v; y++) {
              if (_ && y % 200 === 0) {
                var O = (/* @__PURE__ */ new Date()).getTime() - A;
                if (O > m)
                  break;
              }
              if (x = o[y], x instanceof L.LayerGroup) {
                w && (o = o.slice(), w = !1), this._extractNonGroupLayers(x, o), v = o.length;
                continue;
              }
              if (!x.getLatLng) {
                f.addLayer(x), h || this.fire("layeradd", { layer: x });
                continue;
              }
              if (!this.hasLayer(x) && (this._addLayer(x, this._maxZoom), h || this.fire("layeradd", { layer: x }), x.__parent && x.__parent.getChildCount() === 2)) {
                var S = x.__parent.getAllChildMarkers(), rt = S[0] === x ? S[1] : S[0];
                c.removeLayer(rt);
              }
            }
            p && p(y, v, (/* @__PURE__ */ new Date()).getTime() - E), y === v ? (this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(M, this.options.chunkDelay);
          }, this);
          M();
        } else
          for (var I = this._needsClustering; y < v; y++) {
            if (x = o[y], x instanceof L.LayerGroup) {
              w && (o = o.slice(), w = !1), this._extractNonGroupLayers(x, o), v = o.length;
              continue;
            }
            if (!x.getLatLng) {
              f.addLayer(x);
              continue;
            }
            this.hasLayer(x) || I.push(x);
          }
        return this;
      },
      //Takes an array of markers and removes them in bulk
      removeLayers: function(o) {
        var h, c, f = o.length, _ = this._featureGroup, m = this._nonPointGroup, p = !0;
        if (!this._map) {
          for (h = 0; h < f; h++) {
            if (c = o[h], c instanceof L.LayerGroup) {
              p && (o = o.slice(), p = !1), this._extractNonGroupLayers(c, o), f = o.length;
              continue;
            }
            this._arraySplice(this._needsClustering, c), m.removeLayer(c), this.hasLayer(c) && this._needsRemoving.push({ layer: c, latlng: c._latlng }), this.fire("layerremove", { layer: c });
          }
          return this;
        }
        if (this._unspiderfy) {
          this._unspiderfy();
          var v = o.slice(), y = f;
          for (h = 0; h < y; h++) {
            if (c = v[h], c instanceof L.LayerGroup) {
              this._extractNonGroupLayers(c, v), y = v.length;
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
            m.removeLayer(c), this.fire("layerremove", { layer: c });
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
        var c = this._needsClustering.slice(), f = this._needsRemoving, _, m, p;
        for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(c), m = c.length - 1; m >= 0; m--) {
          for (_ = !0, p = f.length - 1; p >= 0; p--)
            if (f[p].layer === c[m]) {
              _ = !1;
              break;
            }
          _ && o.call(h, c[m]);
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
        var f = this._gridClusters, _ = this._gridUnclustered, m = this._featureGroup, p = this._map, v = Math.floor(this._map.getMinZoom());
        h && this._removeFromGridUnclustered(o, this._maxZoom);
        var y = o.__parent, w = y._markers, x;
        for (this._arraySplice(w, o); y && (y._childCount--, y._boundsNeedUpdate = !0, !(y._zoom < v)); )
          h && y._childCount <= 1 ? (x = y._markers[0] === o ? y._markers[1] : y._markers[0], f[y._zoom].removeObject(y, p.project(y._cLatLng, y._zoom)), _[y._zoom].addObject(x, p.project(x.getLatLng(), y._zoom)), this._arraySplice(y.__parent._childClusters, y), y.__parent._markers.push(x), x.__parent = y.__parent, y._icon && (m.removeLayer(y), c || m.addLayer(x))) : y._iconNeedsUpdate = !0, y = y.__parent;
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
        var c = this._gridClusters, f = this._gridUnclustered, _ = Math.floor(this._map.getMinZoom()), m, p;
        for (this.options.singleMarkerMode && this._overrideMarkerIcon(o), o.on(this._childMarkerEventHandlers, this); h >= _; h--) {
          m = this._map.project(o.getLatLng(), h);
          var v = c[h].getNearObject(m);
          if (v) {
            v._addChild(o), o.__parent = v;
            return;
          }
          if (v = f[h].getNearObject(m), v) {
            var y = v.__parent;
            y && this._removeLayer(v, !1);
            var w = new this._markerCluster(this, h, v, o);
            c[h].addObject(w, this._map.project(w._cLatLng, h)), v.__parent = w, o.__parent = w;
            var x = w;
            for (p = h - 1; p > y._zoom; p--)
              x = new this._markerCluster(this, p, x), c[p].addObject(x, this._map.project(v.getLatLng(), p));
            y._addChild(x), this._removeFromGridUnclustered(v, h);
            return;
          }
          f[h].addObject(o, m);
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
          var c = this._getExpandedVisibleBounds(), f = this._featureGroup, _ = Math.floor(this._map.getMinZoom()), m;
          this._ignoreMove = !0, this._topClusterLevel._recursively(c, o, _, function(p) {
            var v = p._latlng, y = p._markers, w;
            for (c.contains(v) || (v = null), p._isSingleParent() && o + 1 === h ? (f.removeLayer(p), p._recursivelyAddChildrenToMap(null, h, c)) : (p.clusterHide(), p._recursivelyAddChildrenToMap(v, h, c)), m = y.length - 1; m >= 0; m--)
              w = y[m], c.contains(w._latlng) || f.removeLayer(w);
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
        var m = this;
        this._forceLayout(), o._recursivelyBecomeVisible(f, c), this._enqueue(function() {
          if (o._childCount === 1) {
            var p = o._markers[0];
            this._ignoreMove = !0, p.setLatLng(p.getLatLng()), this._ignoreMove = !1, p.clusterShow && p.clusterShow();
          } else
            o._recursively(f, c, _, function(v) {
              v._recursivelyRemoveChildrenFromMap(f, _, h + 1);
            });
          m._animationEnd();
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
    var l = L.MarkerCluster = L.Marker.extend({
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
        for (var h = this._childClusters.slice(), c = this._group._map, f = c.getBoundsZoom(this._bounds), _ = this._zoom + 1, m = c.getZoom(), p; h.length > 0 && f > _; ) {
          _++;
          var v = [];
          for (p = 0; p < h.length; p++)
            v = v.concat(h[p]._childClusters);
          h = v;
        }
        f > _ ? this._group._map.setView(this._latlng, _) : f <= m ? this._group._map.setView(this._latlng, m + 1) : this._group._map.fitBounds(this._bounds, o);
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
        var o = this._markers, h = this._childClusters, c = 0, f = 0, _ = this._childCount, m, p, v, y;
        if (_ !== 0) {
          for (this._resetBounds(), m = 0; m < o.length; m++)
            v = o[m]._latlng, this._bounds.extend(v), c += v.lat, f += v.lng;
          for (m = 0; m < h.length; m++)
            p = h[m], p._boundsNeedUpdate && p._recalculateBounds(), this._bounds.extend(p._bounds), v = p._wLatLng, y = p._childCount, c += v.lat * y, f += v.lng * y;
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
            var _ = f._markers, m, p;
            for (m = _.length - 1; m >= 0; m--)
              p = _[m], p._icon && (p._setPos(h), p.clusterHide());
          },
          function(f) {
            var _ = f._childClusters, m, p;
            for (m = _.length - 1; m >= 0; m--)
              p = _[m], p._icon && (p._setPos(h), p.clusterHide());
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
                var m = f._markers[_];
                c.contains(m._latlng) && (o && (m._backupLatlng = m.getLatLng(), m.setLatLng(o), m.clusterHide && m.clusterHide()), f._group._featureGroup.addLayer(m));
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
        var _, m;
        this._recursively(
          o,
          h - 1,
          c - 1,
          function(p) {
            for (m = p._markers.length - 1; m >= 0; m--)
              _ = p._markers[m], (!f || !f.contains(_._latlng)) && (p._group._featureGroup.removeLayer(_), _.clusterShow && _.clusterShow());
          },
          function(p) {
            for (m = p._childClusters.length - 1; m >= 0; m--)
              _ = p._childClusters[m], (!f || !f.contains(_._latlng)) && (p._group._featureGroup.removeLayer(_), _.clusterShow && _.clusterShow());
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
        var m = this._childClusters, p = this._zoom, v, y;
        if (h <= p && (f && f(this), _ && p === c && _(this)), p < h || p < c)
          for (v = m.length - 1; v >= 0; v--)
            y = m[v], y._boundsNeedUpdate && y._recalculateBounds(), o.intersects(y._bounds) && y._recursively(o, h, c, f, _);
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
        var c = this._getCoord(h.x), f = this._getCoord(h.y), _ = this._grid, m = _[f] = _[f] || {}, p = m[c] = m[c] || [], v = L.Util.stamp(o);
        this._objectPoint[v] = h, p.push(o);
      },
      updateObject: function(o, h) {
        this.removeObject(o), this.addObject(o, h);
      },
      //Returns true if the object was found
      removeObject: function(o, h) {
        var c = this._getCoord(h.x), f = this._getCoord(h.y), _ = this._grid, m = _[f] = _[f] || {}, p = m[c] = m[c] || [], v, y;
        for (delete this._objectPoint[L.Util.stamp(o)], v = 0, y = p.length; v < y; v++)
          if (p[v] === o)
            return p.splice(v, 1), y === 1 && delete m[c], !0;
      },
      eachObject: function(o, h) {
        var c, f, _, m, p, v, y, w = this._grid;
        for (c in w) {
          p = w[c];
          for (f in p)
            for (v = p[f], _ = 0, m = v.length; _ < m; _++)
              y = o.call(h, v[_]), y && (_--, m--);
        }
      },
      getNearObject: function(o) {
        var h = this._getCoord(o.x), c = this._getCoord(o.y), f, _, m, p, v, y, w, x, E = this._objectPoint, M = this._sqCellSize, I = null;
        for (f = c - 1; f <= c + 1; f++)
          if (p = this._grid[f], p) {
            for (_ = h - 1; _ <= h + 1; _++)
              if (v = p[_], v)
                for (m = 0, y = v.length; m < y; m++)
                  w = v[m], x = this._sqDist(E[L.Util.stamp(w)], o), (x < M || x <= M && I === null) && (M = x, I = w);
          }
        return I;
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
          var c = 0, f = null, _ = [], m, p, v;
          for (m = h.length - 1; m >= 0; m--) {
            if (p = h[m], v = this.getDistant(p, o), v > 0)
              _.push(p);
            else
              continue;
            v > c && (c = v, f = p);
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
          var h = !1, c = !1, f = !1, _ = !1, m = null, p = null, v = null, y = null, w = null, x = null, E;
          for (E = o.length - 1; E >= 0; E--) {
            var M = o[E];
            (h === !1 || M.lat > h) && (m = M, h = M.lat), (c === !1 || M.lat < c) && (p = M, c = M.lat), (f === !1 || M.lng > f) && (v = M, f = M.lng), (_ === !1 || M.lng < _) && (y = M, _ = M.lng);
          }
          c !== h ? (x = p, w = m) : (x = y, w = v);
          var I = [].concat(
            this.buildConvexHull([x, w], o),
            this.buildConvexHull([w, x], o)
          );
          return I;
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
        var c = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + o), f = c / this._2PI, _ = this._2PI / o, m = [], p, v;
        for (f = Math.max(f, 35), m.length = o, p = 0; p < o; p++)
          v = this._circleStartAngle + p * _, m[p] = new L.Point(h.x + f * Math.cos(v), h.y + f * Math.sin(v))._round();
        return m;
      },
      _generatePointsSpiral: function(o, h) {
        var c = this._group.options.spiderfyDistanceMultiplier, f = c * this._spiralLengthStart, _ = c * this._spiralFootSeparation, m = c * this._spiralLengthFactor * this._2PI, p = 0, v = [], y;
        for (v.length = o, y = o; y >= 0; y--)
          y < o && (v[y] = new L.Point(h.x + f * Math.cos(p), h.y + f * Math.sin(p))._round()), p += _ / f + y * 5e-4, f += m / p;
        return v;
      },
      _noanimationUnspiderfy: function() {
        var o = this._group, h = o._map, c = o._featureGroup, f = this.getAllChildMarkers(null, !0), _, m;
        for (o._ignoreMove = !0, this.setOpacity(1), m = f.length - 1; m >= 0; m--)
          _ = f[m], c.removeLayer(_), _._preSpiderfyLatlng && (_.setLatLng(_._preSpiderfyLatlng), delete _._preSpiderfyLatlng), _.setZIndexOffset && _.setZIndexOffset(0), _._spiderLeg && (h.removeLayer(_._spiderLeg), delete _._spiderLeg);
        o.fire("unspiderfied", {
          cluster: this,
          markers: f
        }), o._ignoreMove = !1, o._spiderfied = null;
      }
    }), L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
      _animationSpiderfy: function(o, h) {
        var c = this._group, f = c._map, _ = c._featureGroup, m = this._group.options.spiderLegPolylineOptions, p, v, y, w;
        for (c._ignoreMove = !0, p = 0; p < o.length; p++)
          w = f.layerPointToLatLng(h[p]), v = o[p], y = new L.Polyline([this._latlng, w], m), f.addLayer(y), v._spiderLeg = y, v._preSpiderfyLatlng = v._latlng, v.setLatLng(w), v.setZIndexOffset && v.setZIndexOffset(1e6), _.addLayer(v);
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
        var c = this, f = this._group, _ = f._map, m = f._featureGroup, p = this._latlng, v = _.latLngToLayerPoint(p), y = L.Path.SVG, w = L.extend({}, this._group.options.spiderLegPolylineOptions), x = w.opacity, E, M, I, A, O, S;
        for (x === void 0 && (x = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity), y ? (w.opacity = 0, w.className = (w.className || "") + " leaflet-cluster-spider-leg") : w.opacity = x, f._ignoreMove = !0, E = 0; E < o.length; E++)
          M = o[E], S = _.layerPointToLatLng(h[E]), I = new L.Polyline([p, S], w), _.addLayer(I), M._spiderLeg = I, y && (A = I._path, O = A.getTotalLength() + 0.1, A.style.strokeDasharray = O, A.style.strokeDashoffset = O), M.setZIndexOffset && M.setZIndexOffset(1e6), M.clusterHide && M.clusterHide(), m.addLayer(M), M._setPos && M._setPos(v);
        for (f._forceLayout(), f._animationStart(), E = o.length - 1; E >= 0; E--)
          S = _.layerPointToLatLng(h[E]), M = o[E], M._preSpiderfyLatlng = M._latlng, M.setLatLng(S), M.clusterShow && M.clusterShow(), y && (I = M._spiderLeg, A = I._path, A.style.strokeDashoffset = 0, I.setStyle({ opacity: x }));
        this.setOpacity(0.3), f._ignoreMove = !1, setTimeout(function() {
          f._animationEnd(), f.fire("spiderfied", {
            cluster: c,
            markers: o
          });
        }, 200);
      },
      _animationUnspiderfy: function(o) {
        var h = this, c = this._group, f = c._map, _ = c._featureGroup, m = o ? f._latLngToNewLayerPoint(this._latlng, o.zoom, o.center) : f.latLngToLayerPoint(this._latlng), p = this.getAllChildMarkers(null, !0), v = L.Path.SVG, y, w, x, E, M, I;
        for (c._ignoreMove = !0, c._animationStart(), this.setOpacity(1), w = p.length - 1; w >= 0; w--)
          y = p[w], y._preSpiderfyLatlng && (y.closePopup(), y.setLatLng(y._preSpiderfyLatlng), delete y._preSpiderfyLatlng, I = !0, y._setPos && (y._setPos(m), I = !1), y.clusterHide && (y.clusterHide(), I = !1), I && _.removeLayer(y), v && (x = y._spiderLeg, E = x._path, M = E.getTotalLength() + 0.1, E.style.strokeDashoffset = M, x.setStyle({ opacity: 0 })));
        c._ignoreMove = !1, setTimeout(function() {
          var A = 0;
          for (w = p.length - 1; w >= 0; w--)
            y = p[w], y._spiderLeg && A++;
          for (w = p.length - 1; w >= 0; w--)
            y = p[w], y._spiderLeg && (y.clusterShow && y.clusterShow(), y.setZIndexOffset && y.setZIndexOffset(0), A > 1 && _.removeLayer(y), f.removeLayer(y._spiderLeg), delete y._spiderLeg);
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
    }), n.MarkerClusterGroup = a, n.MarkerCluster = l, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(ts, ts.exports);
function bf(r, i) {
  const n = {}, a = {};
  Object.entries(r).forEach(([o, h]) => {
    o.startsWith("on") ? a[o] = h : n[o] = h;
  });
  const l = new qi.MarkerClusterGroup({
    showCoverageOnHover: !1,
    zoomToBoundsOnClick: !1,
    ...n
  });
  return Object.entries(a).forEach(([o, h]) => {
    const c = `cluster${o.substring(2).toLowerCase()}`;
    l.on(c, h);
  }), _i(
    l,
    ns(i, {
      layerContainer: l
    })
  );
}
const xf = cs(bf), wf = (r) => {
  const { children: i, icon: n, popup: a, ...l } = r, o = Mt.useContext(Ft);
  return /* @__PURE__ */ ut(xf, { iconCreateFunction: (c) => {
    if (a && typeof a == "function") {
      const f = `grommet-leaflet-popup-${Ta()}`, _ = /* @__PURE__ */ ut(Ft.Provider, { value: o, children: /* @__PURE__ */ ut(ka, { children: a({ cluster: c }) }) }), m = c.bindPopup(
        Vn.renderToString(/* @__PURE__ */ ut("div", { id: f, children: _ }))
      );
      c.on("click keypress", () => {
        m.openPopup();
        const p = document.getElementById(f);
        eh(_, p);
      });
    }
    return qi.divIcon({
      // 'grommet-cluster-group' class prevents
      // leaflet default divIcon styles
      className: "grommet-cluster-group",
      html: Vn.renderToString(
        /* @__PURE__ */ ut(Ft.Provider, { value: o, children: n ? Mt.cloneElement(n({ cluster: c }), {
          cluster: c
        }) : /* @__PURE__ */ ut(gs, { cluster: c }) })
      )
    });
  }, ...l, children: i });
};
wf.propTypes = {
  children: nt.node,
  icon: nt.func,
  popup: nt.func
};
const Lf = di(ve)`
  // to create the pin shape
  border-bottom-right-radius: 0;
  // translate to re-align with leaflet div
  transform: rotate(45deg) translateX(-35%);
  &:hover {
    transform: rotate(45deg) translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`, Ca = ({ kind: r = "default" }) => {
  var l, o, h, c, f, _, m, p, v;
  const i = Mt.useContext(Ft), n = ps([
    (h = (o = (l = i == null ? void 0 : i.map) == null ? void 0 : l.pin) == null ? void 0 : o.default) == null ? void 0 : h.container,
    (_ = (f = (c = i == null ? void 0 : i.map) == null ? void 0 : c.pin) == null ? void 0 : f[r]) == null ? void 0 : _.container
  ]);
  let a = (v = (p = (m = i == null ? void 0 : i.map) == null ? void 0 : m.pin) == null ? void 0 : p[r]) == null ? void 0 : v.icon;
  return a && (a = Mt.cloneElement(a, {
    // style needed to offset for rotation of location pin so
    // icon is vertical
    style: { transform: "rotate(-45deg)" }
  })), /* @__PURE__ */ ut(Lf, { ...n, children: a });
};
Ca.propTypes = {
  kind: nt.string
};
const ka = ({ ...r }) => {
  var n;
  const i = ye(Ft);
  return /* @__PURE__ */ ut(ve, { ...(n = i == null ? void 0 : i.map) == null ? void 0 : n.popup, ...r });
};
window.console = console;
const Pf = console.error, Tf = [
  "useLayoutEffect does nothing on the server, because its effect cannot"
];
console.error = function(i, ...n) {
  Array.isArray(i) && !Tf.some((a) => i.includes(a)) && Pf(i, ...n);
};
export {
  gs as Cluster,
  Rh as Controls,
  Zh as LocationBounds,
  _f as Map,
  yf as Marker,
  wf as MarkerCluster,
  Ca as Pin,
  ka as Popup,
  Pa as TileLayer,
  jh as base,
  ui as deepMerge,
  Io as isObject,
  ps as normalizeTheme,
  or as useMap,
  Of as useMapEvent,
  If as useMapEvents
};
//# sourceMappingURL=grommet-leaflet.js.map
