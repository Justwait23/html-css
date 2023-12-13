
const out = document.getElementById('out');

function println(value) {
    out.innerHTML += value + '<br>';
}

// Number
let num1 = 1234;
let num2 = 123.1234;

println(num1);
println(num2)

// typeof로 해당 값이 어떤 타입인지 알아낼 수 있다
println(typeof num1);
println(typeof num2);
println(typeof typeof num2);

// Number타입의 신기한 값 : infinity (무한), NaN(Not a Number)
println(10/0);
println(3 * 'abc');
println(typeof Infinity)
println(typeof NaN)

// Number타입의 다양한 진법 리터럴
println(10);    // 10진수
println(0b10);  // 2진수
println(0o10);  // 8진수
println(0x10);  // 10진수

println(16 == 0x10);

// String
let str1 = '김철수';
let str2 = "123.1234";
let str3 = '<div id="div1"></div>';
// ''를 쓴다면 내부 '에 Escape가 필요하고
// ""를 쓴다면 내부 "에 Escape가 필요하다

str1 = '김\'철수\''
str2 = "김'철수'"

println(typeof str1);
println(typeof str2);

// Boolean
let isPrime = true;
isPrime = false;

println(typeof isPrime);

// undefined
let abc;

println(abc); // 값 undefined
println(typeof abc); // undefined의 타입도 undefined

// null
let minsu = null;

println(minsu); // null 현재 가리키는 인스턴스가 없다
println(typeof minsu) // Object 타입이다

// Array

let colors = ['red,', 'tomato', 'oragne', 'skyblue'];
let arr1 = ['str', 13, 17, 12.12, 'abc'];

console.log(colors);
console.log(arr1);

println(colors);
println(arr1);

// Javascript Object (Java의 Map과 유사한 타입, key와 Value를 가지고 있음)
let minwoo = {
    name: '민우',
    age: 20,
    math: 99,
    0: 'red',
    1: 'orange'
};

console.log(minwoo)

// 접근 방식 2가지
console.log(minwoo['name']);
console.log(minwoo['age']);
console.log(minwoo['math']);
// 배열처럼 보이는데 안씀, 누가 key값에 숫자를 넣냐?
console.log(minwoo[0]);
console.log(minwoo[1]);
console.log(minwoo[2]);

console.log(minwoo.name);
console.log(minwoo.age);
console.log(minwoo.math);