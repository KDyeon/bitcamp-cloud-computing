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

/*
 in-parameter 방법을 사용해야한다.
	where mid=?
*/


var mid = "hell0";
//var mid = "hell0' or 1=1 or ''='";

con.query(
		
		`delete from pms2_member where mid =?`,[mid]
		//? (in-parameter) 개수만큼 배열에 값을 담아 놓으면 됨.
		function(err, result){
	if(err) throw err;
	console.log('회원 추가 완료!!');
});
con.end(function(err) {
 if (err) throw err; 
 console.log('연결을 끊었습니다!')
}); 
console.log('select실행!!');
console.log('------------------------------');
// end 는 연결을 끊는 것이 아닌 연결 예약. 
