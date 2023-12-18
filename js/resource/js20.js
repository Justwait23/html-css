const pushBtn = document.querySelector('#pushBtn');
const out = document.querySelector('#out');
const popBtn = document.querySelector('#popBtn');

const shiftBtn = document.querySelector('#shiftBtn');
const unShiftBtn = document.querySelector('#unShiftBtn');

let startCount = 0;

// 새 요소 객체 만들어서 자식으로 추가하기
pushBtn.addEventListener('click', (e) => {
    // 1. Element node를 생성한다
    const newDiv = document.createElement('div');
    // 2. Text node를 생성한다
    const newText = document.createTextNode('Grade');

    // 3. Element node를 설정한다
    newDiv.classList.add('material-symbols-outlined');
    newDiv.style.fontSize = '30px';
    newDiv.style.color = 'red';
    
    const numDiv = document.createElement('div');
    numDiv.classList.add('star-number');
    numDiv.style.fontSize = '10px';
    numDiv.style.color = 'red';
    numDiv.textContent = startCount++;

    newDiv.appendChild(newText);
    newDiv.appendChild(numDiv);

    out.appendChild(newDiv);
    // 4. Element node에 Text node를 부착한다
    // newDiv.appendChild(newText);

    // 5. 새 Element node를 out에 추가한다
    // out.appendChild(newDiv);
});

popBtn.addEventListener('click', (e) => {
    const lastChild = out.lastChild;
    if (lastChild) {
        out.removeChild(lastChild);
    }
});

shiftBtn.addEventListener('click', (e) => {
    const firstchild = out.firstChild;
    if (firstchild) {
        out.removeChild(firstchild);
    }
});

// unShiftBtn.addEventListener('click', (e) => {
//     const firstchild = out.firstChild;
//     if (firstchild) {
//         out.insertBefore( ,firstchild);
//     }
// });