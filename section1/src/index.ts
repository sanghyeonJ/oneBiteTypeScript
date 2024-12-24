/*
npm init
node js 패키지를 초기화

npm i @types/node
node 환경에서 typescript를 컴파일할수있게 하는 패키지

npm i typescript -g
글로벌속성으로 타입스크립트를 설치
타입스크립트 컴파일러 사용가능


tsc src/index.ts
index.ts파일을 js파일로 컴파일
node src/index.js
컴파일한 js 파일을 실행

npm i tsx -g
바로 ts 파일을 실행시킬수있는 패키지


*/

// export {};
// 모든 ts파일은 글로벌 모듈로 취급해서 다른 파일이라도 같은 변수명은 사용불가능
// export 혹은 import 입력하면 독립된 모듈로 인식해서 같은 변수명 사용가능
// 이런동작을 자동으로 처리해주는것이 tsconfig.json의 compilerOptions -> "moduleDetection": "force" 옵션


const a = 1;