// 객체 타입간의 호환성
type Animal = {
    name: string;
    color: string;
}
type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: '기린',
    color: 'yellow'
};
let dog: Dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도'
}

animal = dog;
// dog = animal;


// 슈퍼타입
type Book = {
    name: string;
    price: number;
}
// 서브타입
type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
    name: '한입',
    price: 33000,
    skill: 'react'
}
book = programmingBook;
// programmingBook = book;


// 초과프로퍼티 검사 ///////////
let book2: Book = {
    name: '한입',
    price: 33000,
    // skill: 'react'
}
let book3: Book = programmingBook;  // 객체리터럴로 전달하지말고 변수에 저장해서 사용

function func(book: Book){}
func({
    name: '한입',
    price: 33000,
    // skill: 'react'
}); // X
func(programmingBook); // O

