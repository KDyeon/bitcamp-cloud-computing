//모듈 정의 II
//- 
//- module.exports 객체에 담아 리턴한다.
/*
 * 모듈명에서  .js를 생략가능.
 * 단  ./(경로)를 생략하면 모듈명으로 인식함.
 * 모듈 명을 찾을 때는 npm이 설치한 모듈 경로에서 찾기 때문에
 * 소스 경로에서 찾을 수 없다. 
 */
moudule.exports = {
        //{}에서 함수를 정의하는 방법 1
        plus: function plus(a, b) {return a + b},
        minus: function(a, b) {return a - b},
        
        //{}에서 함수를 정의하는 방법2
        multiple: function(a, b) {return a * b},
        divide: function(a, b) {return a / b}
        
};