const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end('안녕하세요 Node.js 서버입니다!');
});

server.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다');
});