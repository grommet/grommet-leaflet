[Netlify deploy](https://whimsical-moxie-6e43a0.netlify.app/)

## grommet-leaflet

Docs for `grommet-leaflet` components.

### Map

Map component is responsible for creating the [Leaflet Map](https://leafletjs.com/reference.html#map) instance.

Map supports all [Leaflet Map](https://leafletjs.com/reference.html#map) and [React Leaflet MapContainer](https://react-leaflet.js.org/docs/api-map/#mapcontainer) properties.

In addition, it also supports the following props:

| Prop    | Type     | Notes                                   |
| ------- | -------- | --------------------------------------- |
| `theme` | `object` | See [theme structure](#theme-structure) |

### Marker

A custom Leaflet marker for an individual location. Marker supports all [Leaflet Marker properties](https://leafletjs.com/reference.html#marker).

In addition, it also supports the following props:

| Prop    | Type      | Default value |
| ------- | --------- | ------------- |
| `popup` | `Element` | `undefined`   |

#### Customizing the marker

Marker will render whatever is passed to its `icon` prop. By default, `grommet-leaflet` will render this as `<Pin />`. However, this can be customized by passing a `Pin` with a specific `kind` defined by the theme (see [Pin](#pin) for details) or a custom element all together.

```
<Marker icon={<Pin kind="critical" />} />
```

OR

```
<Marker icon={<MyCustomPin />} />
```

#### Adding a popup to the marker

A popup appears when a marker is clicked. To add a popup, pass an element as a child to the marker. For ease and consistency, Marker will automatically wrap your element in the required Leaflet Popup component and a themed Popup container. The grommet-leaflet Popup styling is defined in `theme.popup`.

```
<Marker>
   <MyCustomPopup />
</Marker>
```

### MarkerCluster

A custom Leaflet marker cluster for a cluster of multiple locations. MarkerCluster supports all [Leaflet.markercluster properties](https://github.com/Leaflet/Leaflet.markercluster).

In addition, it also supports the following props:

| Prop    | Type                       | Default value                                    |
| ------- | -------------------------- | ------------------------------------------------ |
| `icon`  | `({ cluster }) => Element` | `({ cluster }) => <Cluster cluster={cluster} />` |
| `popup` | `({ cluster }) => Element` | `undefined`                                      |


For large datasets, it can be beneficial to apply `chunkedLoading` to MarkerCluster. See [leaflet.markercluster docs](https://github.com/Leaflet/Leaflet.markercluster#chunked-addlayers-options) for additional details.

#### Customizing the cluster

MarkerCluster will render whatever is passed to its `icon` prop. By default, `grommet-leaflet` will render this as `<Cluster />`. However, this can be customized by passing a `Cluster` with property overrides (see [Cluster](#cluster) for details) or a custom element all together.

```
<MarkerCluster
   icon={({ cluster }) => {
      const kind = myKindLogic(cluster);
      const size = mySizeLogic(cluster);
      return <Cluster kind={kind} size={size} />
   }}
/>
```

OR

```
<MarkerCluster
   icon={({ cluster }) => <MyCluster cluster={cluster} />}
/>
```

### Pin

Pin is used to render an individual location and is passed to the `icon` prop on [Marker](#marker).

Pin supports the following props:

| Prop   | Type     | Default value | Notes                                                                                   |
| ------ | -------- | ------------- | --------------------------------------------------------------------------------------- |
| `kind` | `string` | `default`     | `kind` can be any key in `marker`. See [theme structure](#theme-structure) for details. |

#### Pin theming

Pin styles can be customized in a Map `theme` in `theme.pin`.

### Cluster

Cluster is used to render a cluster of locations and is passed to the `icon` prop on [MarkerCluster](#markercluster). Cluster will render the number of markers contained in the cluster and an icon associated with the marker `kind` if an icon for that kind has been specified in the theme. Cluster can accept any [Box](https://v2.grommet.io/box) props.

Cluster supports the following props:

| Prop   | Type     | Default value | Notes                                                                                         |
| ------ | -------- | ------------- | --------------------------------------------------------------------------------------------- |
| `kind` | `string` | `default`     | `kind` can be any key in `cluster`. See [theme structure](#theme-structure) for details.      |
| `size` | `string` | `medium`      | `size` can be any key in `cluster.size`. See [theme structure](#theme-structure) for details. |

#### Cluster theming

Cluster styles can be customized in a Map `theme` in `theme.cluster`.

### Popup

Popup provides additional details about a cluster of locations or an individual location. It appears when Marker or MarkerCluster has `popup` defined and is clicked.

Popup servers as a [Box](https://v2.grommet.io/box) that wraps around whatever is passed to `popup` prop on Marker or MarkerCluster.

The default styling for Popup is defined in [`base.js`](https://github.com/grommet/grommet-leaflet/blob/main/grommet-leaflet/src/themes/base.js).

#### Popup theming

Popup styles can be customized in a Map `theme` in `theme.popup`.

| Theme object | Type     | Notes                                      |
| ------------ | -------- | ------------------------------------------ |
| `popup`      | `object` | Any [Box](https://v2.grommet.io/box) props |

#### Controls

Controls provides zoom in, zoom out, and center on data controls for the map.

Controls supports the following props:

| Prop        | Type                      | Notes                                                                                                                                                                    |
| ----------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `locations` | `array` or geojson object | `array` should be an array of arrays of lat, lng values. If a geojson object is passed it should have coordinates defined within `features[index].geometry.coordinates`. |

### Theme structure

The default styling for `grommet-leaflet` is defined in [`base.js`](https://github.com/grommet/grommet-leaflet/blob/main/grommet-leaflet/src/themes/base.js).

In the theme structure below, `[kind]` can be any string and there can be any number of kinds defined for `pin` or `cluster`. Additionally, `[size]` can be any string and there can be any number of sizes defined in `cluster.size`.

```
{
   cluster: {
      default: {
         container: { // any Grommet Box props },
         icon: Element, commonly an icon from grommet-icons,
      },
      [kind]: {
         container: { // any Grommet Box props },
         icon: Element, commonly an icon from grommet-icons,
      },
      size: {
         small: {
            container: { // any Grommet Box props },
            label: { // any Grommet Text props },
         },
         medium: {
            container: { // any Grommet Box props },
            label: { // any Grommet Text props },
         },
         large: {
            container: { // any Grommet Box props },
            label: { // any Grommet Text props },
         },
         [size]: {
            container: { // any Grommet Box props },
            label: { // any Grommet Text props },
         },
      }
   },
   pin: {
      default: {
         container: { // any Grommet Box props },
         icon: Element, commonly an icon from grommet-icons
      },
      [kind]: {
         container: { // any Grommet Box props },
         icon: Element, commonly an icon from grommet-icons
      },
   },
   popup: { // any Grommet Box props }
}
```

#### Example custom theme

```
const myTheme = {
   cluster: {
      size: {
         large: {
            container: { border: { color: 'blue', size: 'medium' } },
            label: { size: 'xlarge', weight: 'bold' },
         },
      }
   },
   pin: {
      retail: {
         container: { background: 'blue' },
         icon: <Shop />
      },
   },
}
```

To use the `retail` Pin kind, your code could look like:

```
<Map theme={myTheme} ...>
   <Marker icon={<Pin kind="retail" ... />}
</Map>
```

To use the `large` Cluster size, your code could look like:

```
<Map theme={myTheme} ...>
   <MarkerCluster icon={() => <Cluster size="large" ... />}>
      ...
   </MarkerCluster>
</Map>
```
