//http 통신을 도와주는 모듈 로딩함.
const http = require('http');

//http 서버 설정.
// client에서 요청이 들어왔을때 호출될 함수 등록.
const server = http.createServer((req, res) => {
	console.log("클라이언트가 요청하였음.");
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
//서버 실행시 콘솔창에 서버 실행중이라는 멘트 날려줌.
server.listen(3000, () => {
	console.log("서버 실행중!");
});

/*
 * 노드에서는 library 
 */