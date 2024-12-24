// 타입 추론 ////////////////////
// 점진적 타입 시스템
let a = 1; // 자동으로 타입추론때문에 number타입으로 정의됨
let b = 'hello';


function func(message = 'hello') {
    return 'hello'
}


// 초기값을 지정하지 않으면 암묵적 any타입으로 지정
// any타입의 진화.
// 대입하는 값에 따라 타입이 변경된다.
let d;
d = 10;
d.toFixed();
d = 'string'
d.toUpperCase();

// const로 선언 시 리터럴타입
const num = 10;


let arr = [1, 'string'];