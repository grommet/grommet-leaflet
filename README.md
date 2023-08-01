[Netlify deploy](https://whimsical-moxie-6e43a0.netlify.app/)

## grommet-leaflet-core

Docs for `grommet-leaflet-core` components.

### Map

Map supports all [Leaflet Map properties](https://leafletjs.com/reference.html#map). In addition, it also supports the following props:

| Prop    | Type | Notes |
| -------- | ------- |---|
| `theme`  | `object` | See [theme structure]() |

### Marker

A custom Leaflet marker for an individual location. Marker supports all [Leaflet Marker properties](https://leafletjs.com/reference.html#marker).

In addition, it also supports the following props:

| Prop    | Type | Default value |
| -------- | ------- | --- |
| `popup`  | `Element` | `undefined` |

#### Customizing the marker

Marker will render whatever is passed to its `icon` prop. By default, `grommet-leaflet-core` will render this as `<Pin />`. However, this can be customized by passing a `Pin` with a specific `kind` defined by the theme (see [Pin]() for details) or a custom element all together.

```
<Marker icon={<Pin kind="critical" />} />
```
OR

```
<Marker icon={<MyCustomPin />} />
```

### MarkerCluster

A custom Leaflet marker cluster for a cluster of multiple locations. MarkerCluster supports all [Leaflet.markercluster properties](https://github.com/Leaflet/Leaflet.markercluster).

In addition, it also supports the following props: 

| Prop    | Type | Default value |
| -------- | ------- | --- |
| `icon`  | `(cluster) => Element` | `(cluster) => <Cluster cluster={cluster} />` |
| `popup`  | `(cluster) => Element` | `undefined` |

#### Customizing the cluster

MarkerCluster will render whatever is passed to its `icon` prop. By default, `grommet-leaflet-core` will render this as `<Cluster />`. However, this can be customized by passing a `Cluster` with property overrides (see [Cluster]() for details) or a custom element all together.

```
<MarkerCluster
   icon={(cluster) => {
      const kind = myKindLogic(cluster);
      const size = mySizeLogic(cluster);
      return <Cluster kind={kind} size={size} />
   }}
/>
```
OR

```
<MarkerCluster
   icon={(cluster) => <MyCluster cluster={cluster} />}
/>
```

### Pin

Pin is used to render an individual location and is passed to the `icon` prop on [Marker](#marker).

Pin supports the following props:

| Prop    | Type | Default value | Notes | 
| -------- | ------- | --- | --- |
| `kind`  | `string` | `default` | `kind` can be any key in `marker`. See [theme structure]() for details. |

#### Pin theming

Pin styles can be customized in a Map `theme` in `theme.pin`.

### Cluster

Cluster is used to render a cluster of locations and is passed to the `icon` prop on [MarkerCluster](#markercluster).

Cluster supports the following props:

| Prop    | Type | Default value | Notes | 
| -------- | ------- | --- | --- |
| `kind`  | `string` | `default` | `kind` can be any key in `cluster`. See [theme structure]() for details. |
| `size`  | `string` | `medium` | `size` can be any key in `cluster.size`. See [theme structure]() for details. |


#### Cluster theming

Cluster styles can be customized in a Map `theme` in `theme.cluster`.

### Popup

Popup provides additional details about a cluster of locations or an individual location. It appears when Marker or MarkerCluster has `popup` defined and is clicked.

Popup servers as a [Box](https://v2.grommet.io/box) that wraps around whatever is passed to `popup` prop on Marker or MarkerCluster.

The default styling for Popup is defined in [`base.js`]().

#### Popup theming

Popup styles can be customized in a Map `theme` in `theme.popup`.

| Theme object    | Type | Notes |
| -------- | ------- | --- |
| `popup`  | `object` | Any [Box](https://v2.grommet.io/box) props |

### Theme structure

To be filled in.
