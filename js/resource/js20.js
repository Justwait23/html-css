const pushBtn = document.querySelector('#pushBtn');
const out = document.querySelector('#out');
const shiftBtn = document.querySelector('#shiftBtn');
const unShiftBtn = document.querySelector('#unShiftBtn');

let count = 0;


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

    const countText = document.createTextNode(++count);
    const numDiv = document.createElement('div');
    numDiv.classList.add('count');
    numDiv.appendChild(countText);
    newDiv.appendChild(numDiv);
    // 5. Element node에 Text node를 부착한다
    newDiv.appendChild(newText);
    // 6. 새 Element node를 out에 추가한다
    out.appendChild(newDiv);
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


unShiftBtn.addEventListener('click', (e) => {
    const newDiv = document.createElement('div');
    const newText = document.createTextNode('Grade');
    newDiv.classList.add('material-symbols-outlined');
    newDiv.style.fontSize = '30px';
    newDiv.style.color = 'red';
    const countText = document.createTextNode(++count);
    const numDiv = document.createElement('div');
    numDiv.classList.add('count');
    numDiv.appendChild(countText);
    newDiv.appendChild(numDiv);
    newDiv.appendChild(newText);
    out.insertBefore(newDiv, out.firstChild);
});