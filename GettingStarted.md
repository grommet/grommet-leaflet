# Getting Started with `grommet-leaflet`

## Add dependencies

In case you haven't already, install `grommet-leaflet` and its peer dependencies:

```bash
npm install grommet-leaflet
```

First, prepare your application by adding the following Leaflet stylesheets and scripts to the `<head>` of our `index.html` file.

```html
<link
   rel="stylesheet"
   href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
   integrity="sha384-sHL9NAb7lN7rfvG5lfHpm643Xkcjzp4jFvuavGOndn6pjVqS6ny56CAt3nsEVT4H"
   crossorigin=""
/>
<link
   rel="stylesheet"
   href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"
   integrity="sha384-aZZ3XEvSJ6DSmCzhn7tubw8CmLzlUxkcHLNt7F1tf+VldXegJEm7mGmoq6fLfiez"
   crossorigin=""
/>
```

Next, include the Leaflet JavaScript file **after** Leaflet's CSS.

```html
<script
   src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
   integrity="sha384-cxOPjt7s7Iz04uaHJceBmS+qpjv2JkIHNVcuOrM+YHwZOmJGBXI00mdUXEq65HTH"
   crossorigin=""
></script>
```

## Add Map to your application

Give your map a place to live by adding a Grommet `Box` with some initial dimensions.

```diff
// App.js - or any child of Grommet's <Grommet /> component

- import { Grommet } from 'grommet';
+ import { Grommet, Box } from 'grommet';

const App = () => {
   return (
      <Grommet>
+         <Box height="medium" width="large" background="background-contrast">
+        </Box>
      </Grommet>
   );
}

export default App;
```

Now, add the `Map` component to your application. The map will fill the dimensions of its parent container.

```diff
import { Grommet, Box } from 'grommet';
import { Map } from 'grommet-leaflet';

const App = () => {
   return (
      <Grommet>
         <Box height="medium" width="large" background="background-contrast">
+            <Map>
+            </Map>
         </Box>
      </Grommet>
   );
}
```

Next, add some location `Marker`s to your map.

```diff
import { Grommet, Box } from 'grommet';
- import { Map } from 'grommet-leaflet';
+ import { Map, Marker } from 'grommet-leaflet';

const App = () => {
   return (
      <Grommet>
         <Box height="medium" width="large" background="background-contrast">
            <Map>
+               <Marker position={[0, 0]} />
+               <Marker position={[10, -10]} />
+               <Marker position={[-10, -10]} />
            </Map>
         </Box>
      </Grommet>
   );
}
```

Let's refactor our code a bit to make it easier to add more locations in the future. We'll create an array of locations and map over them to create our `Marker`s.

```diff
import { Grommet, Box } from 'grommet';
import { Map, Marker } from 'grommet-leaflet';

+ const locations = [
+   [0, 0],
+   [10, -10],
+   [-10, -10],
+ ];

const App = () => {
   return (
      <Grommet>
         <Box height="medium" width="large" background="background-contrast">
            <Map>
-               <Marker position={[0, 0]} />
-               <Marker position={[10, -10]} />
-               <Marker position={[-10, -10]} />
+               {locations.map((location, index) => (
+                 <Marker key={index} position={location} />
+               ))}
            </Map>
         </Box>
      </Grommet>
   );
}
```


Now, let's enable the user to zoom in and out.

```diff
import { Grommet, Box } from 'grommet';
- import { Map, Marker } from 'grommet-leaflet';
+ import { Controls, Map, Marker } from 'grommet-leaflet';

const locations = [
  [0, 0],
  [10, -10],
  [-10, -10],
];

const App = () => {
   return (
      <Grommet>
         <Box height="medium" width="large" background="background-contrast">
            <Map>
+              <Controls />
               {locations.map((location, index) => (
                 <Marker key={index} position={location} />
               ))}
            </Map>
         </Box>
      </Grommet>
   );
}
```

And, the ability to center the map and fit it to the data.

```diff
import { Grommet, Box } from 'grommet';
import { Controls, Map, Marker } from 'grommet-leaflet';

const locations = [
  [0, 0],
  [10, -10],
  [-10, -10],
];

const App = () => {
   return (
      <Grommet>
         <Box height="medium" width="large" background="background-contrast">
            <Map>
-               <Controls />
+               <Controls locations={locations} />
               {locations.map((location, index) => (
                 <Marker key={index} position={location} />
               ))}
            </Map>
         </Box>
      </Grommet>
   );
}
```

Notice the world icon is added to the map's zoom controls. This allows users easily reset the zoom and center to fit the data after they have scrolled or zoomed.

Lastly, let's add the ability to cluster our locations. This helps visualize dense areas of data.

```diff
import { Grommet, Box } from 'grommet';
- import { Controls, Map, Marker } from 'grommet-leaflet';
+ import { Controls, Map, Marker, MarkerCluster } from 'grommet-leaflet';

const locations = [
  [0, 0],
  [10, -10],
  [-10, -10],
];

const App = () => {
   return (
      <Grommet>
         <Box height="medium" width="large" background="background-contrast">
            <Map>
               <Controls locations={locations} />
+              <MarkerCluster>
                  {locations.map((location, index) => (
                     <Marker key={index} position={location} />
                  ))}
+              </MarkerCluster>
            </Map>
         </Box>
      </Grommet>
   );
}
```

Try zooming out to see the cluster in action.

## Flexible map dimensions

The `Map` component will fill the dimensions of its parent container.

Let's alter our `Box` dimensions to take advantage of the screen's real estate.

```diff
import { Grommet, Box } from 'grommet';
import { Controls, Map, Marker, MarkerCluster } from 'grommet-leaflet';

const locations = [
  [0, 0],
  [10, -10],
  [-10, -10],
];

const App = () => {
   return (
-     <Grommet>
+     <Grommet full>
        <Box fill pad="large">
-         <Box height="medium" width="large" background="background-contrast">
+         <Box fill background="background-contrast">
            <Map>
               <Controls locations={locations} />
               <MarkerCluster>
                  {locations.map((location, index) => (
                     <Marker key={index} position={location} />
                  ))}
               </MarkerCluster>
            </Map>
          </Box>
+       </Box>
      </Grommet>
   );
}
```
