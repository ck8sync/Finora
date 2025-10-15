const http = require('http');

function checkEndpoint(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 5000,
      path: path,
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log(`\n[${path}] Status: ${res.statusCode}`);
        try {
          const json = JSON.parse(data);
          console.log('Response:', JSON.stringify(json, null, 2));
          resolve(json);
        } catch (e) {
          console.log('Raw response:', data);
          resolve(data);
        }
      });
    });

    req.on('error', (error) => {
      console.error(`Error checking ${path}:`, error.message);
      reject(error);
    });

    req.end();
  });
}

async function main() {
  try {
    console.log('Checking server endpoints...');
    await checkEndpoint('/');
    await checkEndpoint('/api/health');
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

main();