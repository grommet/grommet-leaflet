# Build & Bundle Configuration Review

## Summary
Your package build configuration has been updated to ensure maximum compatibility with library consumers.

---

## ✅ Changes Applied

### 1. **TypeScript Declarations Fixed**
**Before:** Type definitions were pointing to source files and not being properly generated.
**After:** 
- Configured `vite-plugin-dts` to generate complete type definitions in `dist/`
- Updated `package.json` to point to `./dist/index.d.ts`
- Added proper `exclude` patterns to prevent test files from being included
- Set `entryRoot: 'src'` to maintain correct import paths

### 2. **Package Exports Enhanced**
**Added:**
- CSS export path: `"./style.css": "./dist/style.css"`
- Consistent type paths in both CommonJS and ESM exports

### 3. **Peer Dependencies Aligned**
**Before:** Mismatch between peer deps (React 19) and dev deps (React 16-18)
**After:** 
- Updated peer dependencies to support React 18 & 19: `"^18.0.0 || ^19.0.0"`
- Updated dev dependencies to match: `"^19.1.0"`
- Added `grommet` to dev dependencies for testing

### 4. **Tree-Shaking Optimization**
**Added:** `"sideEffects": ["*.css"]` to help bundlers optimize imports

---

## 📦 Current Package Structure

```
dist/
├── grommet-leaflet.js          # ESM bundle
├── grommet-leaflet.cjs         # CommonJS bundle
├── grommet-leaflet.js.map      # Source maps
├── grommet-leaflet.cjs.map
├── style.css                    # Bundled styles
├── index.d.ts                   # Main type definitions
├── layers/                      # Component type definitions
│   ├── Cluster/index.d.ts
│   ├── Controls/index.d.ts
│   ├── Map/index.d.ts
│   ├── Marker/index.d.ts
│   ├── MarkerCluster/index.d.ts
│   ├── Pin/index.d.ts
│   ├── Popup/index.d.ts
│   └── TileLayer/index.d.ts
├── hooks/index.d.ts
└── themes/
    ├── base.d.ts
    ├── index.d.ts
    └── protomaps/themes.d.ts
```

---

## 🎯 Package.json Configuration

### Entry Points
```json
{
  "main": "./dist/grommet-leaflet.cjs",      // CommonJS entry
  "module": "./dist/grommet-leaflet.js",     // ESM entry
  "types": "./dist/index.d.ts",              // TypeScript definitions
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/grommet-leaflet.js"
      },
      "require": {
        "types": "./dist/index.d.ts",
        "default": "./dist/grommet-leaflet.cjs"
      }
    },
    "./style.css": "./dist/style.css"
  }
}
```

### Dependencies
```json
{
  "peerDependencies": {
    "grommet": "^2.48.0",
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0",
    "styled-components": "^5.1.0"
  }
}
```

---

## 📋 Consumer Usage

### TypeScript Projects
```typescript
import { Map, Marker, Popup } from 'grommet-leaflet';
import 'grommet-leaflet/style.css';

// Full type support available
const MyMap = () => (
  <Map center={[51.505, -0.09]} zoom={13}>
    <Marker position={[51.505, -0.09]}>
      <Popup>Hello World</Popup>
    </Marker>
  </Map>
);
```

### JavaScript Projects (ESM)
```javascript
import { Map, Marker } from 'grommet-leaflet';
import 'grommet-leaflet/style.css';
```

### CommonJS Projects
```javascript
const { Map, Marker } = require('grommet-leaflet');
require('grommet-leaflet/style.css');
```

---

## ✅ Compatibility Checklist

- [x] **ESM Support** - Modern bundlers (Vite, Webpack 5, Rollup)
- [x] **CommonJS Support** - Node.js, older bundlers
- [x] **TypeScript Support** - Full type definitions included
- [x] **React 18 & 19** - Dual version support
- [x] **Tree Shaking** - Optimized with `sideEffects`
- [x] **Source Maps** - Included for debugging
- [x] **CSS Export** - Explicit export path for styles
- [x] **Peer Dependencies** - Properly declared, not bundled

---

## 🔍 Build Verification

Run these commands to verify the build:

```bash
# Build the library
yarn build

# Check what will be published
npm pack --dry-run

# Verify type definitions
ls -la dist/*.d.ts

# Check bundle sizes
ls -lh dist/*.js dist/*.cjs
```

---

## 🚀 Publishing Checklist

Before publishing:
1. ✅ Run `yarn build` - ensure clean build
2. ✅ Run `yarn test` - all tests pass
3. ✅ Run `npm pack --dry-run` - verify package contents
4. ✅ Check `dist/index.d.ts` - types are complete
5. ✅ Verify version in `package.json`
6. ✅ Update CHANGELOG.md
7. Run `npm publish` or `yarn publish`

---

## 📊 Bundle Analysis

**ESM Bundle:** 541.36 KB (136.83 KB gzipped)
**CJS Bundle:** 319.55 KB (96.11 KB gzipped)
**CSS:** 0.52 KB (0.24 KB gzipped)

These sizes are reasonable for a mapping library with all dependencies properly externalized.

---

## 🔄 Integration with Demo Apps

Your demo apps should:

1. **List `grommet-leaflet` as a dependency:**
   ```json
   "dependencies": {
     "grommet-leaflet": "^0.5.1"
   }
   ```

2. **Import the library:**
   ```javascript
   import { Map, Marker } from 'grommet-leaflet';
   import 'grommet-leaflet/style.css';
   ```

3. **Ensure peer dependencies are installed:**
   - grommet ^2.48.0
   - react ^18.0.0 || ^19.0.0
   - react-dom ^18.0.0 || ^19.0.0
   - styled-components ^5.1.0

---

## 💡 Recommendations

### Immediate
- ✅ All critical issues fixed

### Future Enhancements
1. **Add JSDoc Comments** - Improve IntelliSense experience
2. **Bundle Size Optimization** - Consider code splitting for optional features
3. **Add `repository`, `bugs`, and `homepage` fields** to package.json
4. **Create .npmignore** - Explicitly control what gets published
5. **Add `peerDependenciesMeta`** - Mark optional peer dependencies if any
6. **Consider Styled Components v6** - When stable, for React 19 optimization

### Optional
1. **Dual Publishing** - Consider publishing both transformed (ES5) and modern (ESNext) builds
2. **Size Limit** - Add `size-limit` package to prevent bundle bloat
3. **Bundlephobia Badge** - Add to README to show install size

---

## 🐛 Known Issues Resolved

1. ✅ TypeScript couldn't find 'grommet' module in tests
2. ✅ Type definitions not properly exported
3. ✅ React version mismatch between peer and dev dependencies
4. ✅ CSS not explicitly exported in package.json

---

## 📚 Additional Resources

- [Node.js Package Entry Points](https://nodejs.org/api/packages.html#package-entry-points)
- [TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
- [Vite Library Mode](https://vitejs.dev/guide/build.html#library-mode)
- [Peer Dependencies Best Practices](https://nodejs.org/en/blog/npm/peer-dependencies)
