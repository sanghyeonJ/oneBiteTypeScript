// void
// 아무것도 없음을 의미하는 타입

function func1(): string{
    return 'hello'
}
function func2(): void{ // 리턴값이 없음을 의미
    console.log('hello')
}


let a: void;
// a = 1;
// a = "";
// a = {};
a = undefined;
// undefined만 할당가능




// never
// 존재하지 않는 불가능한 타입, 반환값이 있는 자체가 모순 ex) 무한루프
function func3(): never{
    while(true){

    }
}
function func4(): never{
    throw new Error(); // 실행시 프로그램이 바로 중지되기 때문에 never타입
}
// 변수의 타입으로 정의 시 그 어떠한 값도 할당불가능