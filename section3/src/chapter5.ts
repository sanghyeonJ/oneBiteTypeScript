// 타입 단언 /////////////////
type Person = {
    name: string;
    age: number;
}

let person = {} as Person;  // Person타입으로 추론
person.name = 'j';
person.age = 100;


type Dog = {
    name: string;
    color: string;
};
let dog = {
    name: 'dd',
    color: 'brown',
    breed: '진도'  // 초과프로퍼티 검사로 에러 발생
} as Dog;


// 타입단언의 규칙 ///
// 값 as 단언 
// A as B 라고 했을때
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함

let num1 = 10 as never; // A가 B의 슈퍼타입 (never는 모든 타입의 서브타입)
let num2 = 10 as unknown; // A가 B의 서브타입 (unknown은 모든 타입의 슈퍼타입)
// let num3 = 10 as string; // 불가능


// const 단언 /////////////////////
let num4 = 10 as const; // const로 선언한 것과 동일한 효과
let cat = {
    name: '야옹이',
    color: 'yellow'
} as const;



// Non Null 단언 /////////////////
type Post = {
    title: string;
    author?: string;
};
let post: Post = {
    title: 'title',
    author: 'me'
}
const len: number = post.author!.length;
// author가 undefined일수도 있기 때문에 !를 붙여서 해당값이 null이나 undefined가 아닌것으로 판단하게 만든다