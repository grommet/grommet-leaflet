import { deepMerge } from 'grommet';

export const normalizeTheme = themeObjects => {
  let result = {};
  themeObjects.forEach(themeObject => {
    result = deepMerge(result, themeObject);
  });
  return result;
};
