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

var email='zenoo@user.com';
var mid = 'zeno';
var pwd = '1111';


con.query(
		`update pms2_member set email = 'user01@test.comxxx' where mid = '${mid}'`,
		function(err, result){
	if(err) throw err;
	console.log('회원 변경 완료!!');
});
con.end(function(err) {
 if (err) throw err; 
 console.log('연결을 끊었습니다!')
}); 
console.log('select실행!!');
console.log('------------------------------');
// end 는 연결을 끊는 것이 아닌 연결 예약. 
