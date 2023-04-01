const http = require('http');

// 创建HTTP服务器
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // 处理GET请求参数
    const { query } = require('url').parse(req.url, true);
    console.log('GET request params:', query);

    // 返回响应
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(query));
  }
  else if (req.method === 'POST') {
    // 处理POST请求参数
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // 将数据转换为字符串
    });
    req.on('end', () => {
      console.log('POST request params:', body);

      // 返回响应
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify(body));
    });
  }
});

// 监听端口
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
