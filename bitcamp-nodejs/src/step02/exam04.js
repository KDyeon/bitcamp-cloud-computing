/*
 * DataBase programmig
	>> select하기 . 
 */

const mysql = require('mysql');
console.log('------------------------------');
var con = mysql.createConnection({
	host : '13.125.175.77',
	//port : '3306',
	database : 'studydb',
	user : 'study',
	password : '1111'
});

con.connect(function(err) {

 if (err) throw err; 
 
 console.log('연결 성공입니다!');
});
//query(sql, 실행 후 호출될 함수.);
//sql을 바로 실행하는 것이 아니라 실행을 예약함.
// dbms와 연결되면 예약한 sql문을 실행할 것임.
// 이때 문제는 연결오류에 상관없이 무조건 예약한다는 것임.
// connect()에 등록한 함수
con.query('select * from pms2_member', function(err, results) {
	if(err) throw err;
	
	//result파라미터에 결과가 들어있음.
	for(var row of results){
		
		console.log(row.email, row.mid, row.pwd);	
	}
});
con.end(function(err) {
 if (err) throw err; 
 console.log('연결을 끊었습니다!')
}); 
console.log('select실행!!');
console.log('------------------------------');
// end 는 연결을 끊는 것이 아닌 연결 예약. 
