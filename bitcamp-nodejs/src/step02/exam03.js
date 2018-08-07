/*
 * DataBase programmig
	>> select하기 . 
 */

const mysql = require('mysql');
console.log (mysql);


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
con.query('select * from pms2_member', function(err, results) {
	if(err) throw err;
	console.log('결과를 가져왔씁니다,.');	
});


con.end(function(err) {
 if (err) throw err; 
 console.log('연결을 끊었습니다!')
}); 
console.log('select실행!!');
// end 는 연결을 끊는 것이 아닌 연결 예약. 
