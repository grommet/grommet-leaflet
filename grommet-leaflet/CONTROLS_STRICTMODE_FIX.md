# Controls Component - React 19 StrictMode Fix

## Problem

When using the `Controls` component in React 19 with StrictMode enabled, the application would crash with the error:

```
Uncaught TypeError: ai.latLngBounds is not a function
```

This occurred because the `LocationBounds` utility function was being called during component render, before Leaflet was fully initialized.

## Root Cause

In the original implementation:

```jsx
const Controls = ({ locations }) => {
  const map = useMap();
  const bounds = locations && LocationBounds({ locations });
  // ...
```

The `bounds` calculation happened during every render, calling `L.latLngBounds()` immediately. With React 19's StrictMode double-mounting behavior, this could occur before Leaflet's global object was ready, causing the error.

## Solution

The fix uses `useMemo` to defer the bounds calculation until after the map instance is available:

```jsx
const Controls = ({ locations }) => {
  const map = useMap();
  // Use useMemo to ensure bounds are only calculated when map is ready
  const bounds = useMemo(() => {
    if (!locations || !map) return null;
    return LocationBounds({ locations });
  }, [locations, map]);
  // ...
```

### Why This Works

1. **Deferred Execution**: `useMemo` only executes after the component has mounted and the map instance is available
2. **Null Safety**: Returns `null` if either `locations` or `map` is not ready
3. **Memoization**: Only recalculates bounds when `locations` or `map` dependencies change
4. **StrictMode Compatible**: Works correctly with React 19's double-mounting in development

## Benefits

- ✅ Compatible with React 19 StrictMode
- ✅ More efficient (memoized calculation)
- ✅ Safer (null checks before calling Leaflet APIs)
- ✅ No breaking changes to the public API
- ✅ All existing tests pass

## Files Changed

- `grommet-leaflet/src/layers/Controls/Controls.jsx`
  - Added `useMemo` import from React
  - Wrapped bounds calculation in `useMemo` with proper dependencies

## Testing

All existing tests continue to pass:

- ✓ Controls renders
- ✓ displays zoom to data control
- ✓ locations accepts array of lat/lng pairs
- ✓ locations accepts array of lat/lng objects
- ✓ locations accepts GeoJSON

## Related Issues

This is part of the broader React 19 StrictMode compatibility initiative, which also includes:

- Map component cleanup (see REACT_19_STRICTMODE_FIX.md)
- Proper ref forwarding for Leaflet instances
