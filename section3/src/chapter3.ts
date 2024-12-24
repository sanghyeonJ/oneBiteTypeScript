// 대수 타입 ///////////////
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합타입과 교집합타입이 존재

// 합집합 - Union 타입
let a: string | number;
a = 1;
a = 'hi';

let arr: (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
    name: string;
    color: string;
};
type Person = {
    name: string;
    language: string;
};
type Union1 = Dog | Person;

let union1: Union1 = {
    name: '',
    color: '',
}
let union2: Union1 = {
    name: '',
    language: ''
}
let union3: Union1 = {
    name: '',
    color: '',
    language: '',
}
// let union4: Union1 = {  // img1참고 (어디에도 해당될 수 없음)
//     name: ''
// }


// 교집합 - intersection 타입
let variable: number & string; // 불가능 never타입

type Dog2 = {
    name: string;
    color: string;
}
type Person2 = {
    name: string;
    language: string;
}
type Intersection = Dog2 & Person2;
let intersection1: Intersection = {
    name: '',
    color: '',
    language: ''
}