const cp = require('child_process');

function spawn(name, colorcode, script, args) {
  const log = (content) => {
    process.stdout.write(colorcode + name + '> \x1b[0m' + content.toString().replace(/\n$/,'').split('\n').join('\n' + ' '.repeat(name.length+2)) + '\n');
  };
  log('Starting process\n');
  log(script + ' ' + args.join(' ') + '\n');
  const child = cp.spawn(script, args, {
  });
  child.stdout.on('data', function(data) {
    log(data);
  });
  child.stderr.on('data', function(data) {
    log(data);
  });
  child.on('close', function(code) {
    log('Closed with code ' + code + '\n');
  });
  process.on('exit', () => {
    log('Quitting process\n');
    child.kill('SIGTERM');
  });
  process.stdin.on('data', function(data) {
    child.stdin.write(data);
  });
}

// spawn('Express Server   ', '\x1b[35m', './node_modules/.bin/nodemon', ['--exec', 'node --harmony', '--watch', `build/server`, '--watch', 'src/', './src/index.js']);
spawn('WebpackDevServer ', '\x1b[34m', './node_modules/.bin/webpack-dev-server', ['--port', '4000', '--inline', '--hot', '--history-api-fallback', '--config', `webpack.config.js`]);