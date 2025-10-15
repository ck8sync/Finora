import http from 'http';
import https from 'https';

function fetchUrl(url, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', (err) => reject(err));
    req.setTimeout(timeout, () => {
      req.abort();
      reject(new Error('Request timed out'));
    });
  });
}

(async () => {
  try {
    const r1 = await fetchUrl('http://localhost:5000/');
    console.log(`URL: http://localhost:5000/\nStatus: ${r1.status}\nBody:\n${r1.body}\n`);
  } catch (e) {
    console.error('Error fetching root:', e.message);
  }

  try {
    const r2 = await fetchUrl('http://localhost:5000/api/health');
    console.log(`URL: /api/health\nStatus: ${r2.status}\nBody:\n${r2.body}\n`);
  } catch (e) {
    console.error('Error fetching /api/health:', e.message);
  }
})();
