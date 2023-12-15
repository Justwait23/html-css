
// 배열은 []로 만든다
const fruits = ['사과', '배', '귤', '참외', '피망', '포도', '포도'];
console.log(fruits);

// push(item) : 배열에 맨 뒤에 요소를 추가한다. 추가 후 배열의 길이를 반환한다.
console.log(fruits.push('apple'));
console.log(fruits.push('kiwi'));
console.log(fruits);

// pop(item) : 배열의 맨 뒤 요소를 제거한다. 제거 후 제거한 요소를 반환한다.
console.log(fruits.pop());
console.log(fruits);

// shift() : 맨 앞의 갚을 꺼내면서 삭제
console.log(fruits.shift());
console.log(fruits);

// unshift(item) : 맨 앞에 값을 추가, 추가 후 길이를 반환
console.log(fruits.unshift('용과'));
console.log(fruits);

// reverse() : 현재 배열의 순서를 거꾸로 뒤집는다
console.log(fruits.reverse() === fruits);
console.log(fruits);

// sort() : 배열안의 내용들을 정렬한다.
console.log('정렬 후:', fruits.sort());

// sort(compareFn) : 내가 원하는 기준으로 배열안의 내용들을 정렬한다

const numbers1 = [99, 1, 3, -50, 123, 88, 14, 15, 23];

// const myComparator = function (a, b) {
//     if (a < b) {
//         return 1;
//     } else if (a > b) {
//         return -1;
//     } else {
//         return 0;
//     }
// };

// const sorted = numbers.sort(myComparator);

// 내림차순으로 정렬하기...
const sorted = numbers1.sort(function (a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
});
console.log(sorted);

/*
    1. 배열에 랜덤으로 1 ~ 45 사이의 숫자를 1000개 추가한다

    2. 각 숫자들이 나온 횟수를 센다

    3. 가장 많이 나온 숫자 6개를 HTML에 동그란 공 모양으로 출력해준다.

*/

// 내 풀이
// const numbers = [];
// for (let i = 0; i < 1000; i++) {
//     const randomNum = parseInt(Math.random() * 45) + 1;
//     numbers.push(randomNum);
// }
// // 카운트 배열
// const countsArray = [];

// for (const number of numbers) {

//     let found = false;

//     for (const item of countsArray) {
//         if (item.number === number) {
//             // 숫자가 이미 있으면 횟수 증가
//             item.count++;
//             found = true;
//             break;
//         }
//     }
//     // 숫자가 없으면 배열에 추가하고 횟수 1로 만들기
//     if (!found) {
//         countsArray.push({number, count: 1});
//     }
// }
// // 내림차순
// countsArray.sort((a, b) => b.count - a.count);

// console.log(countsArray);

// const topNumbers = countsArray.slice(0, 6);

// console.log(topNumbers);

// const ballsContainer = document.getElementById('result');

// let ballsHTML = '';

// for (let i = 0; i < topNumbers.length; i++) {
//     const number = topNumbers[i].number;
//     const ballClass = `dynamic-ball ball${i + 1}`;
//     ballsHTML += `<div class="${ballClass}">${number}</div>`;
// }

// ballsContainer.innerHTML = ballsHTML;


// 선생님 풀이

const lottoDiv = document.getElementById('lotto');

const lottoNums = [];

for (let i = 0; i < 1000; i++) {
    lottoNums.push(parseInt(Math.random() * 45) + 1);
}

const lottoCnt = [];

function LottoNum(num, cnt) {
    this.num = num;
    this.cnt = cnt;
}

// for (let i = 0; i < 45; i++) {
//     lottoCnt[i] = {
//         num: i + 1,
//         cnt: 0
//     };
// }

for (let i = 0; i < 45; i++) {
    lottoCnt[i] = new LottoNum(i + 1, 0);
}


for (let i = 0; i < 1000; i++) {
    lottoCnt[lottoNums[i] - 1].cnt++;
}


lottoCnt.sort((a, b) => {
    return b.cnt - a.cnt;
});

lottoDiv.innerHTML += `<div>${lottoCnt[0].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[1].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[2].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[3].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[4].num}</div>`;
lottoDiv.innerHTML += `<div>${lottoCnt[5].num}</div>`;

