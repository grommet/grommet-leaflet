const { spawn } = require('child_process');

const tileServer = spawn('yarn', ['--cwd', '../tile-server', 'dev']);
const clientApp = spawn('npm', ['run', 'dev']);

tileServer.stdout.on('data', output => {
  console.log(output.toString());
});

clientApp.stdout.on('data', output => {
  console.log(output.toString());
});
