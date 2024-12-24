// : number 
// 위와 같은 형태를 타입주석 또는 type annotation이라고 한다.

// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;


// "strictNullChecks": false,
let numA: number = null;


// 리터럴타입
// 리터럴 -> 값
// 값이 고정된 타입
let numB: 10 = 10;
// numB = 12 오류발생