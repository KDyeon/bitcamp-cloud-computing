// 자주 사용할 함수를 라이브러리 화 시킴.
let bit = {};

bit.parseQuery =  function url;
    var paramMap = {};

    var qs = url.split('?');
    if (qs.length > 1) {
        var params = qs[1].split('&');
        for (var param of params) {
            var kv = param.split('=')
            paramMap[kv[0]] = kv[1];
        }
    }
    return paramMap;
}