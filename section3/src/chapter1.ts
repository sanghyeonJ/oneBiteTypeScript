// Unknown 타입 ////////////////
function unknownExam(){
    // up-casting이 가능하므로 어떠한 값도 대입 가능
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;


    let unknownVar: unknown;
    // down-casting은 불가하기에 다른 변수에 대입 불가능
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}


// never 타입 //////////////////
// 공집합
function neverExam(){
    function neverFunc(): never{
        while(true) {  }
    }
    // up-casting
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // down-casting
    // let never1: never = 10;
    // let never2: never = 'string';
    // let never3: never = true;
}



// void 타입 //////////////////
function voidExam(){
    function voidFunc(): void{
        console.log('hi');
    }

    let voidVar: void = undefined;
}



// any 타입 /////////////////////
function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    // any타입 한정 down-casting이 가능하다 (따라서 사용 지양)
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // any타입이라도 never타입에는 down-casting불가능
    // neverVar = anyVar;
}