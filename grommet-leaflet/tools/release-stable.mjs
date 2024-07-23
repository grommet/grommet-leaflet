import { deleteAsync } from 'del';
import fs from 'fs-extra';
import git from 'simple-git';
import path from 'path';
import 'dotenv/config';

const repoURL = `https://${process.env.GH_TOKEN}@github.com/grommet/grommet-leaflet.git`;
const localFolder = path.resolve('.tmp/grommet-leaflet');
const localDist = path.resolve('dist');
const localLibrary = path.resolve('lib');

const BRANCH = 'grommet-leaflet-stable';

if (process.env.CI) {
  deleteAsync(localFolder).then(() => {
    git()
      .clone(repoURL, localFolder)
      .then(() => git(localFolder).checkout(BRANCH))
      .then(() => fs.move('package.json', `${localLibrary}/package.json`))
      .then(() => deleteAsync([`${localFolder}/**/*`]))
      .then(() => {
        fs.copy(localLibrary, localFolder);
        fs.copy(localDist, `${localFolder}/dist`);
      })
      .then(() => git(localFolder).add(['--all', '.']))
      .then(() => git(localFolder).commit(`${BRANCH} updated`))
      .then(() => git(localFolder).push('origin', BRANCH))
      .catch(err => console.error('failed: ', err));
  });
} else {
  console.warn(
    'Skipping release. release-stable task should be executed by CI only.',
  );
}
