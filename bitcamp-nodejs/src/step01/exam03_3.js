/*
 *모듈을 정의하고 사용하기 .  
 */

/*
 * destructuring 변수 바꾸기.
 * >> {원래프로퍼티명 : 변수명 , 원래프로퍼티명 : 변수명 ...}
 */
var {plus : p, minus : m} = require('./exam03_m.js');
console.log(p(10,20));
console.log(m(10,20));