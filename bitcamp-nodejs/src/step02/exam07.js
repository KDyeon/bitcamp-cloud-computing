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

con.query(`insert into pms2_member(email,mid,pwd) + value('${email}', '${mid}', ${pwd} `+
		function(err, results){
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
