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


//sql문을 만들때 변수의 값을 직접 넣어서 만드는 경우 해커의 공격에 노출될 수 있음 
// 주석을 막은 mid 변수의 값 처럼 외부 사용자가 값을 입력하면 
//조건이 무조건 참이 되기 때문에 전체 데이터가 삭제되는 결과를 초래함.
// sql문에 변수의 값을 직접 삽입하는 방법ㅇ르 써서는 안된다.
// 이를 해결하기 위해 
// in-parameter 방법을 사용해야한다.

//var mid = "hell0' or 1=1 or ''='";

con.query(
		
		`delete from pms2_member where mid = '"hell0' or 1=1 or ''='"`,
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
