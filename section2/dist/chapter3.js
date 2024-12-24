// object
// 객체 리터릴타입
// 구조적 타입 시스템 property type system
// 뒤에 물음표를 붙이면 있어도 되고 없어도 되는 선택적 프로퍼티
// 앞에 readonly를 붙이면 변경불가능
let user = {
    id: 1,
    name: 'sh'
};
user = {
    name: '홍길동',
};
let config = {
    apiKey: 'my key'
};
//config.apiKey = 'abc'
let dog = {
    name: 'doldol',
    color: 'brown'
};
export {};
