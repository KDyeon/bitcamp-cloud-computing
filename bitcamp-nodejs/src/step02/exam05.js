/*
 * DataBase programmig
	>> select하기2. 
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
 
 //연결 성공시에만 sql 실행하라고 예약함
 con.query('select * from pms2_member', function(err, results) {
	 if(err) throw err;

	 // result파라미터에 결과가 들어있음
	 for(var row of results){
		 
		 //row객체에 값을 꺼낼때눈 sql에서 지정한 칼럼명 또는 별명 사용.
		 console.log(row.email, row.mid, row.pwd);	
	 }
 });
});

con.end(function(err) {
 if (err) throw err; 
 console.log('연결을 끊었습니다!')
}); 
console.log('select실행!!');
console.log('------------------------------');
// end 는 연결을 끊는 것이 아닌 연결 예약. 
