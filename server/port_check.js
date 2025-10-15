import net from 'net';

function checkPort(host, port, timeout = 3000) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let status = null;

    socket.setTimeout(timeout);
    socket.on('connect', function() {
      status = 'open';
      socket.destroy();
    });
    socket.on('timeout', function() {
      status = 'timeout';
      socket.destroy();
    });
    socket.on('error', function(exception) {
      status = 'closed';
    });
    socket.on('close', function() {
      resolve({ host, port, status });
    });

    socket.connect(port, host);
  });
}

(async () => {
  const result = await checkPort('127.0.0.1', 5000, 3000);
  console.log(JSON.stringify(result, null, 2));
})();
