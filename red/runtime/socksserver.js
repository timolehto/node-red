const spawn = require('child_process').spawn;

var runSocksServer = function(socksProxyCmd) {
  var args = socksProxyCmd.split(" ")
  cmd = args[0];
  options = args.splice(1);
  const socksserver = spawn( cmd, options )
  socksserver.stdout.on('data', (data) => {
    console.log(`socksserver: ${data}`);
  });

  socksserver.stderr.on('data', (data) => {
    console.log(`socksserver: ${data}`);
  });

  socksserver.on('close', (code) => {
    console.log(`socksserver child process exited with code ${code}`);
    process.exit(-1);
  });
}

module.exports = { run: runSocksServer }