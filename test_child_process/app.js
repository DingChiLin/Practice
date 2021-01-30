const { spawn, exec } = require('child_process');
const grep = spawn('node', ['while.js']);

grep.on('close', (code, signal) => {
  console.log(
    `child process terminated due to receipt of signal ${signal}`);
});

grep.on('exit', function (code) {
  console.log(
    `child process exit with code: ${code}`);
});

let output = "";
grep.stdout.on('data', (data) => {
  output+=data;
});

grep.stdout.on('end', (data) => {
  console.log(output.length);
});

setTimeout(() => {
  grep.kill(9);
}, 500);

