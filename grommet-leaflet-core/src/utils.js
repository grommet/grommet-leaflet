import { deepMerge } from 'grommet/utils';

export const normalizeTheme = themeObjects => {
  let result = {};
  themeObjects.forEach(themeObject => {
    result = deepMerge(result, themeObject);
  });
  return result;
};
