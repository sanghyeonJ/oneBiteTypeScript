// any
// 특정 변수의 타입을 확실히 모를때
let anyVar: any = 10;
anyVar = 'hello';

let num: number = 10;
num = anyVar;



// unknown
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;

let num2: number = 10;
// num2 = unknownVar; // unknown타입은 any타입과 다르게 다른변수에 할당할 수 없다
