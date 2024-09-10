'use client';

/* 
Ignore the useLayoutEffect warning from react. This warning should 
be removed in the next react release and we can remove this code.
React PR to remove error: https://github.com/facebook/react/pull/26395.
This solution came from a Stack overflow suggestion:
https://stackoverflow.com/questions/64158705/ignore-certain-console-errors-warnings-in-react
*/
window.console = console;

const consoleError = console.error;
const SUPPRESSED_WARNINGS = [
  'useLayoutEffect does nothing on the server, because its effect cannot',
];

console.error = function filterWarnings(msg, ...args) {
  const msgString = JSON.stringify(msg);
  if (!SUPPRESSED_WARNINGS.some(entry => msgString.includes(entry))) {
    consoleError(msg, ...args);
  }
};

export * from './hooks';
export * from './layers';
export * from './utils';
export * from './themes';
