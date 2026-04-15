const http = require('node:http');

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', service: 'CashTagAlert API' }));
});

server.listen(port, () => {
  console.log(`CashTagAlert API running on http://localhost:${port}`);
});
