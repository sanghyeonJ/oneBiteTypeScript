// 함수 타입 정의 //////////
// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a, b) {
    return a + b;
}
// 화살표 함수의 타입을 정의하는 방법 //////////
const add = (a, b) => a + b;
// 함수의 매개변수
function introduce(name = "sh", tall) {
    console.log(`name: ${name}`);
    console.log(`tall: ${tall}`);
}
introduce("sh", 170);
introduce("sh");
// 매개변수의 개수를 정확하게 모르는 경우
function getSum(...rest) {
    let sum = 0;
    rest.forEach((it) => { sum += it; });
    return sum;
}
getSum(1, 3, 4);
export {};
