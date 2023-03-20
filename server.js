import http from 'http';
console.dir(http);

const server = http.createServer(function(request, response) {
  let body = "";
  // 비지니스 로직 부분
  body += "<!DOCTYPE html>";
  body += "<html>";
  body += "<head>";
  body += "<title>Node.js</title>";
  body += "</head>";
  body += "<body>";
  body += "<h1>Hello World</h1>";
  body += "</body>";
  body += "</html>";

  // response.xxx -> response는 객체로 반환된다 .으로 연결되는걸 보면 알 수 있다
  response.statusCode = 200;
  response.setHeader('content-Type', 'text/plain');
  response.end('Hello World');
});