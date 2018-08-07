/*
모듈 정의
- 모듈로 리턴할 함수난 객체들을 만들고, 
  module.exports 객체에 담아 리턴함.
*/
function plus(a, b) {return a+b}
function minus(a, b) {return a-b}
function multiple(a, b) {return a*b}
function divide(a, b) {return a/b}

/*
 * module 객체에 exports라는 객체가 들어있음.
 *  exports객체에 함수를 담아 놓으면 모듈을 사용하는 코드에서 
 *  require()을 호출하면 이 exports 객체를 리턴함.
*/
module.exports.plus = plus;
module.exports.minus = minus;

exports.multiple = multiple;
exports.divide = divide;
/*
 모듈에서 특정 무엇을 리턴하고 싶으면 exports 객체에 담아 두기!! 
 */
