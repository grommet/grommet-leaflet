import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { GlobalHeader } from './components';

const pages = import.meta.glob('./pages/**/*.jsx', { eager: true });

const routes = [];
// eslint-disable-next-line no-restricted-syntax
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) {
    // eslint-disable-next-line no-continue
    continue;
  }

  const normalizedPathName = fileName.includes('$')
    ? fileName.replace('$', ':')
    : fileName.replace(/\/index/, '');

  // Only include files named as index as routes
  if (fileName.includes('index')) {
    routes.push({
      path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
      Element: pages[path].default,
      loader: pages[path]?.loader,
      action: pages[path]?.action,
      ErrorBoundary: pages[path]?.ErrorBoundary,
    });
  }
}

const router = routes.map(({ Element, ErrorBoundary, ...rest }) => ({
  ...rest,
  element: Element && <Element />,
  ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
}));

const App = () => {
  return (
    <Grommet theme={hpe} background="background-back" full>
      <GlobalHeader />
      <Routes>
        {router.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Routes>
    </Grommet>
  );
};

export default App;
