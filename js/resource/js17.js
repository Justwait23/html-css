
const numbers = [];

for (let i = 0; i < 10; i++) {
    numbers[i] = i;
}

console.log(numbers);


// numbers.forEach(function (item, index, srcArr) {
//     console.log(item * 10, `${index}번째 실행입니다.}`, '원본:', srcArr);
// });
/*
    # 배열.prototype.forEach

    - 배열의 모든 값을 하나씩 순서대로 꺼내서 전달한 함수를 실행
    - 전달한 함수에 첫 번째 인자로 해당번째 요소를 전달된다
    - 전달한 함수에 두 번째 인자로 인덱스가 전달된다
    - 전달한 함수에 세번 째 인자로 원본 배열이 전달된다
    - 반드시 모든 인자를 다 받을 필요는 없다( 필요한 경우에만 꺼내서 사용)
*/

const myFunction = function (item, index, srcArr) {
    // console.log(item * 10, `${index}번째 실행입니다.}`, '원본:', srcArr);
    console.log(`numbers[${index}]: ${item}`);
}

numbers.forEach(myFunction);

/*
    # 배열.prototype.map

    - 값을 하나씩 순서대로 꺼내면서 해당 값을 사용해 결과를 리턴한다
    - 리턴한 결과들로 구성된 새로운 배열을 리턴한다
    - map에 전달하는 콜백함수는 반두시 결과를 리턴해야한다
*/

const scores = [80, 55, 60, 99, 100, 70, 72, 30];

const resultArr = numbers.map((item, index) => {
    return item + 5;
});

const grades = scores.map((score) => {
    if (score > 100 || score < 0) {
        return 'F';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
});

const getgrade = (score) => {
    if (score > 100 || score < 0) {
        return 'F';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
};



const students = scores.map((score) => ({
        score: score,
        grade: getgrade(score)
}));


console.log(resultArr);
console.log(grades);
console.log(students);

/*
    # 배열.prototype.filter

    - 배열의 모든 값을 순차적으로 하나씩 꺼내면서 전달한 함수의 기준을
      통과하는 것만 남겨놓는 함수
    - filter에 전달하는 콜백함수는 반드시 boolean타입 값을 리턴해야 한다
    - true를 리턴하는 요소는 남게 되고 false를 리턴하는 요소는 걸러지게 된다
*/

// 60점 미만인 점수만 남겨놓고 싶은 경우
const filtered = scores.filter((score) => {
    return score < 60;
});

// 등급이 F인 객체만 남겨놓고 싶은 경우
const fs = students.filter((student) => {
    return student.grade === 'F';
});

console.log(filtered);
console.log(fs);

/*
    # 배열.prototype.reduce

    - 배열의 모든 요소를 하나로 취합한다
    - 전달한 함수의 결과를 다음 반복에 계속해서 사용한다
*/

// 총합 구하기
const sum = scores.reduce((prevSore, currScore, index) => {
    console.log(`${index}번째 반복 ##`);
    console.log(`prev`, prevSore);
    console.log('curr', currScore);

    return prevSore + currScore;
});

console.log('총합:', sum)

const minScore = scores.reduce((minScore, currScore) => {
    return minScore < currScore ? minScore : currScore;
});

const maxScore = scores.reduce((maxScore, currScore) => {
    return maxScore > currScore ? maxScore :currScore;
});

console.log(`총합:`, sum)
console.log(`가장 낮은 점수:`, minScore)
console.log(`가장 높은 점수`, maxScore);

/*
    # 배열.prototype.some

    - 조건을 만족하는 요소가 하나 이상 있는지 검사한다
*/

const fruits =['banana', 'orange', 'melon', 'pineapple'];

// 과일중에 참외가 있는지 검사해보기
const result1 = fruits.some((fruit) => {
    return fruit === '참외';
});

// 과일중에 apple이 있는지 검사해보기
const result2 = fruits.some((fruit) => fruit === 'apple');

// 과일중에 apple이 포함된 과일이 있는지 검사해보기
const result3 = fruits.some(fruit => fruit.includes('apple'));

console.log(result1);
console.log(result2);
console.log(result3);


/*
    1. 100명의 랜덤 학생 정보를 생성한다
       (학생 객체는 학번, 이름, 국어, 영어, 수학을 가지고 있음, 학번은 중복 안됨)

    2. 모든 학생 객체에 평균 점수 속성을 추가해보기

    3. 평균 점수가 60점 미만인 학생들로만 이루어진 배열을 생성해보기

    4. 모든 학생들의 각 과목 평균 점수를 계산해보기

    5. 2번, 3번, 4번의 내용을 HTML에 테이블 형식으로 정리해놓기
*/

// const lastNames = ['김', '이', '박', '최', '한', '정', '서', '강', '윤', '조', '장', '임', '오', '황', '문', '양','류', '손', '홍', '남', '유', '곽', '주'];
// const firstNames = ['영희', '민수', '철수', '춘자', '말자', '덕칠', '덕수', '두팔', '점순', '숙자', '금례', '옥자', '봉식', '춘식', '만수', '덕배'];

// // 1번
// function generateRandomStudent(count) {
//     const students =[];

//     for (let i = 1; i <= count; i++) {
//         const lastName = lastNames[parseInt(Math.random() * lastNames.length)];
//         const firstName = firstNames[parseInt(Math.random() * firstNames.length)];

//         const student = {
//             studentNumber: i,
//             name: lastName + firstName,
//             korean: parseInt(Math.random() * 101),
//             math: parseInt(Math.random() * 101),
//             english: parseInt(Math.random() * 101)
//         };
//         students.push(student);

//     }

//     return students;
// }

// // 평균 점수
// function averageScore(korean, math, english) {
//     return (korean + math + english) / 3;
// }

// // 평균 60점 미만
// function under60 (students1) {
//     return students1.filter(student => student.averageScore < 60);
// }

// // 모든 학생 평균 영어 점수
// function engAverage(scores) {
//     const totalEng = scores.reduce((prev, score) => prev + score);
//     return totalEng / scores.length;
// }

// function calSubjectAverage(students1) {
//     const subjectAverage = {
//         korean: 0,
//         math: 0,
//         english: 0
//     };

//     students1.forEach(student => {
//         subjectAverage.korean += student.korean;
//         subjectAverage.math += student.math;
//         subjectAverage.english += student.english;
//     });

//     const totalStudent = students1.length;

//     subjectAverage.korean /= totalStudent;
//     subjectAverage.math /= totalStudent;
//     subjectAverage.english /= totalStudent;

//     return subjectAverage;
// }

// const students1 = generateRandomStudent(100);

// const studentAverage = students1.forEach(student => {
//     student.averageScore = averageScore(student.korean, student.math, student.english);
// });

// const under60Student = under60(students1);
// const allStudentEngAverage = engAverage(students1.map(student => student.english));

// console.log(students1);
// console.log(under60Student);
// console.log(allStudentEngAverage);


// function generateTable(students1) {
//     let htmlTable = '<table>';
//     htmlTable += '<tr><th>학번</th><th>이름</th><th>국어</th><th>수학</th><th>영어</th><th>평균 점수</th></tr>';
//     students1.forEach(student => {
//         htmlTable += `<tr><td>${student.studentNumber}</td><td>${student.name}</td><td>${student.korean}</td><td>${student.math}</td><td>${student.english}</td><td>${student.averageScore.toFixed(2)}</td></tr>`
//     });
//     htmlTable += '</table>';
//     return htmlTable;
// }


// document.getElementById('allStudents').innerHTML = generateTable(students1);
// document.getElementById('under60').innerHTML = generateTable(under60Student);
// document.getElementById('engAverage').innerHTML = `평균 영어 점수: ${allStudentEngAverage.toFixed(2)}`;

// const subjectAverage = calSubjectAverage(students1);
// const subjectAverageTable = generateTable([
//     { studentNumber: '평균', name: '', korean:subjectAverage.korean, math:subjectAverage.math, english:subjectAverage.english, averageScore:''}
// ]);

// document.getElementById('engAverage').innerHTML = subjectAverageTable;

/*
    1. 100명의 랜덤 학생 정보를 생성한다
       (학생 객체는 학번, 이름, 국어, 영어, 수학을 가지고 있음, 학번은 중복 안됨)

    2. 모든 학생 객체에 평균 점수 속성을 추가해보기

    3. 평균 점수가 60점 미만인 학생들로만 이루어진 배열을 생성해보기

    4. 모든 학생들의 각 과목 평균 점수를 계산해보기

    5. 2번, 3번, 4번의 내용을 HTML에 테이블 형식으로 정리해놓기
*/

const lastNames = ['김', '이', '박', '최', '한', '정', '서', '강', '윤', '조', '장', '임', '오', '황', '문', '양','류', '손', '홍', '남', '유', '곽', '주'];
const firstNames = ['영희', '민수', '철수', '춘자', '말자', '덕칠', '덕수', '두팔', '점순', '숙자', '금례', '옥자', '봉식', '춘식', '만수', '덕배'];

const getFirstName = () =>
    firstNames[parseInt(Math.random() * firstNames.length)];

const getLastName = () =>
    lastNames[parseInt(Math.random() * lastNames.length)];

const getRandomName = () => getLastName() + getFirstName();

const getRandomScore = () => parseInt(Math.random() * 101);


let stuNum = 0;


function Student() {
    this.stuNum = 'STU' + stuNum++;
    this.name = getRandomName();
    this.math = getRandomScore();
    this.eng = getRandomScore();
    this.kor = getRandomScore();
}

const students2 = [];

for (let i = 0; i < 100; i++) {
    students2.push(new Student());
}

// 모든 학생들에게 평균 필드 추가하기
students2.forEach(stu => {
    stu.avg = (stu.kor + stu.eng + stu.math) / 3;
});


console.log(students2);

// 평균 점수 60점 미만 학생 배열 만들기
const fstus = students2.filter(stu => stu.avg < 60);

console.log(fstus);

// 각 과목 평균 점수 계산해보기
// 1. 총점을 구하는 함수
// 2. 총점을 전체 길이로 나눠서 평균을 구하는 함수

// 총합 결과에 .kor을 할 수 없으므로 문제가 생김...
// students2.reduce((stu1, stu2) => stu1.kor + stu2.kor, 0);

// 리듀스에 두 번째 인자값으로 초기값을 전달해주면
// 첫 번째 반복을 초기값으로 진행할 수 있음
const getTotal = (sub) => students2.reduce((total, stu) => total + stu[sub], 0);

console.log('국어 점수 총합:', getTotal('kor'));
console.log('영어 점수 총합:', getTotal('eng'));
console.log('수학 점수 총합:', getTotal('math'));

const getSubjectAvg = (sub) => (getTotal(sub) / students2.length);

console.log(getSubjectAvg('kor'));
console.log(getSubjectAvg('eng'));
console.log(getSubjectAvg('math'));

const allStudentsTable = document.getElementById('all-students');
const badStudentsTable = document.getElementById('bad-students');

const addRow = (table, stu) => {
    table.innerHTML += `<div>${stu.stuNum}</div><div>${stu.name}</div><div>${stu.kor}</div><div>${stu.eng}</div><div>${stu.math}</div><div>${stu.avg}</div>`
}
students2.forEach(stu => addRow(allStudentsTable, stu));
fstus.forEach(stu => addRow(badStudentsTable, stu));