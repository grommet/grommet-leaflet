import { jsxs as w, jsx as i } from "/home/runner/work/grommet-leaflet/grommet-leaflet/node_modules/react/jsx-runtime.js";
import b, { useEffect as N, useContext as h, forwardRef as X } from "react";
import a from "prop-types";
import C, { ThemeContext as p } from "styled-components";
import { Box as f, Text as _, Button as T } from "/home/runner/work/grommet-leaflet/grommet-leaflet/node_modules/grommet/es6/index.js";
import { deepMerge as y } from "/home/runner/work/grommet-leaflet/grommet-leaflet/node_modules/grommet/utils/index.js";
import { useMap as q, TileLayer as A, MapContainer as J, AttributionControl as K, Marker as F, Popup as H } from "/home/runner/work/grommet-leaflet/grommet-leaflet/node_modules/react-leaflet/lib/index.js";
import v from "/home/runner/work/grommet-leaflet/grommet-leaflet/node_modules/leaflet/dist/leaflet-src.js";
import { Add as U, Subtract as Q, Globe as V } from "/home/runner/work/grommet-leaflet/grommet-leaflet/node_modules/grommet-icons/es6/index.js";
import { leafletLayer as Y, paintRules as ee, light as re } from "/home/runner/work/grommet-leaflet/grommet-leaflet/node_modules/protomaps/dist/protomaps.module.js";
import { createTileLayerComponent as te, updateGridLayer as oe, createElementObject as j, createPathComponent as ne, extendContext as ae } from "/home/runner/work/grommet-leaflet/grommet-leaflet/node_modules/@react-leaflet/core/lib/index.js";
import k from "/home/runner/work/grommet-leaflet/grommet-leaflet/node_modules/react-dom/server.browser.js";
import { v4 as ie } from "/home/runner/work/grommet-leaflet/grommet-leaflet/node_modules/uuid/dist/esm-browser/index.js";
import "/home/runner/work/grommet-leaflet/grommet-leaflet/node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js";
const D = (t) => {
  let e = {};
  return t.forEach((r) => {
    e = y(e, r);
  }), e;
}, se = C(f)`
  // translate to re-align with leaflet div
  transform: translateX(-35%);
  &:hover {
    transform: translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`, le = C(_)`
  // multiplier of font-size, for tighter alignment
  line-height: 1rem;
`, G = ({ cluster: t, kind: e = "default", size: r = "medium", ...s }) => {
  var c, u, m, d, S, z, M, E, L, P, R, O, B;
  const o = b.useContext(p), n = D([
    (m = (u = (c = o == null ? void 0 : o.map) == null ? void 0 : c.cluster) == null ? void 0 : u.size) == null ? void 0 : m.medium,
    (z = (S = (d = o == null ? void 0 : o.map) == null ? void 0 : d.cluster) == null ? void 0 : S.size) == null ? void 0 : z[r],
    (E = (M = o == null ? void 0 : o.map) == null ? void 0 : M.cluster) == null ? void 0 : E.default,
    (P = (L = o == null ? void 0 : o.map) == null ? void 0 : L.cluster) == null ? void 0 : P[e]
  ]), l = t.getChildCount(), g = (B = (O = (R = o == null ? void 0 : o.map) == null ? void 0 : R.cluster) == null ? void 0 : O[e]) == null ? void 0 : B.icon, x = l;
  return /* @__PURE__ */ w(se, { ...n == null ? void 0 : n.container, ...s, children: [
    g,
    /* @__PURE__ */ i(le, { ...n == null ? void 0 : n.label, children: x })
  ] });
};
G.propTypes = {
  cluster: a.object,
  kind: a.string,
  size: a.string
};
const pe = ({ locations: t }) => {
  const e = v.latLngBounds();
  return t.features ? t.features.forEach((r) => {
    var s, o;
    e.extend([
      (s = r.geometry) == null ? void 0 : s.coordinates[0],
      (o = r.geometry) == null ? void 0 : o.coordinates[1]
    ]);
  }) : t.forEach((r) => {
    e.extend([r == null ? void 0 : r[0], r == null ? void 0 : r[1]]);
  }), e;
}, ce = 1.5, ue = ({ locations: t }) => {
  const e = q(), r = t && pe({ locations: t }), [s, o] = b.useState(!1);
  return N(() => {
    r && !s && (JSON.stringify(r._northEast) === JSON.stringify(r._southWest) || e.flyToBounds(r, { duration: ce }));
  }, [r, e, s]), N(() => {
    o(!0);
  }, []), // css classes are coming from https://github.com/Leaflet/Leaflet/blob/main/dist/leaflet.css
  /* @__PURE__ */ i(f, { className: "leaflet-bottom leaflet-right", children: /* @__PURE__ */ i(f, { className: "leaflet-control", children: /* @__PURE__ */ w(f, { elevation: "large", round: "medium", background: "background", children: [
    /* @__PURE__ */ i(
      T,
      {
        a11yTitle: "Zoom in",
        icon: /* @__PURE__ */ i(U, {}),
        onClick: (n) => {
          n.preventDefault(), e.zoomIn();
        }
      }
    ),
    /* @__PURE__ */ i(
      T,
      {
        a11yTitle: "Zoom out",
        icon: /* @__PURE__ */ i(Q, {}),
        onClick: (n) => {
          n.preventDefault(), e.zoomOut();
        }
      }
    ),
    /* @__PURE__ */ i(
      f,
      {
        border: {
          color: "border-weak",
          side: "top"
        },
        children: r && /* @__PURE__ */ i(
          T,
          {
            a11yTitle: "Zoom to data",
            icon: /* @__PURE__ */ i(V, {}),
            onClick: (n) => {
              n.preventDefault(), e.flyToBounds(r, { duration: 1.5 });
            }
          }
        )
      }
    )
  ] }) }) });
};
ue.propTypes = {
  locations: a.oneOfType([a.array, a.object])
};
const Z = {
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
}, me = y(Z, {
  default: {
    container: {
      height: { min: "25px", max: "25px" },
      width: { min: "25px", max: "25px" }
    }
  }
}), de = {
  pin: {
    ...me
  },
  cluster: {
    ...Z,
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
}, fe = ({ ...t }, e) => {
  const r = Y({ paint_rules: t.paintRules, ...t });
  return j(r, e);
}, ge = te(
  fe,
  oe
), $ = ({ attribution: t, url: e, format: r, ...s }) => {
  var l;
  const o = h(p);
  let n = /* @__PURE__ */ i(A, { attribution: t, url: e, ...s });
  return r === "pmtiles" && (n = /* @__PURE__ */ i(
    ge,
    {
      attribution: t,
      url: e,
      paintRules: ((l = o.map) == null ? void 0 : l.tiles) && ee({ ...re, ...o.map.tiles }),
      ...s
    }
  )), n;
};
$.propTypes = {
  attribution: a.string,
  url: a.string.isRequired,
  format: a.oneOf(["pmtiles"])
};
const xe = C(J)`
  ${({ theme: t }) => {
  var e, r;
  return `
      ${(r = (e = t == null ? void 0 : t.global) == null ? void 0 : e.font) != null && r.family ? `font-family: ${t.global.font.family};` : ""}
      height: 100%;
    `;
}}
`, be = X(
  ({
    center: t = [0, 0],
    children: e,
    // level 20 is the highest zoom level per OpenStreetMap docs
    // (https://wiki.openstreetmap.org/wiki/Zoom_levels)
    maxZoom: r = 20,
    minZoom: s = 3,
    scrollWheelZoom: o = !0,
    tileLayer: n,
    theme: l,
    zoom: g = 1,
    zoomControl: x = !1,
    ...c
  }, u) => {
    const m = h(p), d = y(m, { map: y(de, l) });
    return /* @__PURE__ */ i(p.Provider, { value: d, children: /* @__PURE__ */ w(
      xe,
      {
        attributionControl: !1,
        center: t,
        ref: u,
        scrollWheelZoom: o,
        maxZoom: r,
        minZoom: s,
        zoom: g,
        zoomControl: x,
        ...c,
        children: [
          /* @__PURE__ */ i(K, { position: "bottomright", prefix: !1 }),
          /* @__PURE__ */ i(
            $,
            {
              attribution: n.attribution,
              url: n.url,
              format: n.format,
              ...n
            }
          ),
          e
        ]
      }
    ) });
  }
);
be.propTypes = {
  center: a.array,
  children: a.any,
  scrollWheelZoom: a.string || a.bool,
  maxZoom: a.number,
  minZoom: a.number,
  tileLayer: a.shape({
    attribution: a.string,
    url: a.string.isRequired,
    format: a.oneOf(["pmtiles"])
  }).isRequired,
  theme: a.object,
  zoom: a.number,
  zoomControl: a.bool
};
const he = ({ icon: t, popup: e, ...r }) => {
  var l;
  const s = h(p), o = (l = t == null ? void 0 : t.props) == null ? void 0 : l.kind, n = e ? /* @__PURE__ */ i(H, { children: /* @__PURE__ */ i(W, { children: e }) }) : void 0;
  return /* @__PURE__ */ i(
    F,
    {
      icon: v.divIcon({
        // 'grommet-marker' class prevents leaflet default divIcon styles
        className: "grommet-marker",
        html: k.renderToString(
          /* @__PURE__ */ i(p.Provider, { value: s, children: t || /* @__PURE__ */ i(I, {}) })
        )
      }),
      kind: o,
      ...r,
      children: n
    },
    ie()
  );
};
he.propTypes = {
  icon: a.node,
  popup: a.node
};
const ye = ({ ...t }, e) => {
  const r = new v.MarkerClusterGroup({
    showCoverageOnHover: !1,
    zoomToBoundsOnClick: !1,
    ...t
  });
  return j(
    r,
    ae(e, { layerContainer: r })
  );
}, Ce = ne(ye), ve = ({ icon: t, popup: e, ...r }) => {
  const s = h(p);
  return /* @__PURE__ */ i(
    Ce,
    {
      iconCreateFunction: (o) => {
        if (e) {
          const n = o.bindPopup(
            k.renderToString(
              /* @__PURE__ */ i(p.Provider, { value: s, children: /* @__PURE__ */ i(W, { children: e({ cluster: o }) }) })
            )
          );
          o.on("click", () => {
            n.openPopup();
          });
        }
        return v.divIcon({
          // 'grommet-cluster-group' class prevents
          // leaflet default divIcon styles
          className: "grommet-cluster-group",
          html: k.renderToString(
            /* @__PURE__ */ i(p.Provider, { value: s, children: t ? b.cloneElement(t({ cluster: o }), {
              cluster: o
            }) : /* @__PURE__ */ i(G, { cluster: o }) })
          )
        });
      },
      ...r
    }
  );
};
ve.propTypes = {
  icon: a.func,
  popup: a.func
};
const Te = C(f)`
  // to create the pin shape
  border-bottom-right-radius: 0;
  // translate to re-align with leaflet div
  transform: rotate(45deg) translateX(-35%);
  &:hover {
    transform: rotate(45deg) translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`, I = ({ kind: t = "default" }) => {
  var o, n, l, g, x, c, u, m, d;
  const e = b.useContext(p), r = D([
    (l = (n = (o = e == null ? void 0 : e.map) == null ? void 0 : o.pin) == null ? void 0 : n.default) == null ? void 0 : l.container,
    (c = (x = (g = e == null ? void 0 : e.map) == null ? void 0 : g.pin) == null ? void 0 : x[t]) == null ? void 0 : c.container
  ]);
  let s = (d = (m = (u = e == null ? void 0 : e.map) == null ? void 0 : u.pin) == null ? void 0 : m[t]) == null ? void 0 : d.icon;
  return s && (s = b.cloneElement(s, {
    // style needed to offset for rotation of location pin so
    // icon is vertical
    style: { transform: "rotate(-45deg)" }
  })), /* @__PURE__ */ i(Te, { ...r, children: s });
};
I.propTypes = {
  kind: a.string
};
const W = ({ ...t }) => {
  var r;
  const e = h(p);
  return /* @__PURE__ */ i(f, { ...(r = e == null ? void 0 : e.map) == null ? void 0 : r.popup, ...t });
};
window.console = console;
const ke = console.error, we = [
  "useLayoutEffect does nothing on the server, because its effect cannot"
];
console.error = function(e, ...r) {
  we.some((s) => e.includes(s)) || ke(e, ...r);
};
export {
  G as Cluster,
  ue as Controls,
  pe as LocationBounds,
  be as Map,
  he as Marker,
  ve as MarkerCluster,
  I as Pin,
  W as Popup,
  de as base,
  D as normalizeTheme
};
