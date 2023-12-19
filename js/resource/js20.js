const pushBtn = document.querySelector('#pushBtn');
const out = document.querySelector('#out');
const shiftBtn = document.querySelector('#shiftBtn');
const unShiftBtn = document.querySelector('#unShiftBtn');
const popBtn = document.querySelector('#popBtn');

// let count = 0;


// // 새 요소 객체 만들어서 자식으로 추가하기
// pushBtn.addEventListener('click', (e) => {
//     // 1. Element node를 생성한다
//     const newDiv = document.createElement('div');
//     // 2. Text node를 생성한다
//     const newText = document.createTextNode('Grade');
//     // 3. Element node를 설정한다
//     newDiv.classList.add('material-symbols-outlined');
//     newDiv.style.fontSize = '30px';
//     newDiv.style.color = 'red';

//     const countText = document.createTextNode(++count);
//     const numDiv = document.createElement('div');
//     numDiv.classList.add('count');
//     numDiv.appendChild(countText);
//     newDiv.appendChild(numDiv);
//     // 5. Element node에 Text node를 부착한다
//     newDiv.appendChild(newText);
//     // 6. 새 Element node를 out에 추가한다
//     out.appendChild(newDiv);
// });

// popBtn.addEventListener('click', (e) => {
//     const lastChild = out.lastChild;
//     if (lastChild) {
//         out.removeChild(lastChild);
//     }
// });

// shiftBtn.addEventListener('click', (e) => {
//     const firstchild = out.firstChild;
//     if (firstchild) {
//         out.removeChild(firstchild);
//     }
// });


// unShiftBtn.addEventListener('click', (e) => {
//     const newDiv = document.createElement('div');
//     const newText = document.createTextNode('Grade');
//     newDiv.classList.add('material-symbols-outlined');
//     newDiv.style.fontSize = '30px';
//     newDiv.style.color = 'red';
//     const countText = document.createTextNode(++count);
//     const numDiv = document.createElement('div');
//     numDiv.classList.add('count');
//     numDiv.appendChild(countText);
//     newDiv.appendChild(numDiv);
//     newDiv.appendChild(newText);
//     out.insertBefore(newDiv, out.firstChild);
// });

let starCount = 0;

const createStarDiv = () => {
    const starDiv = document.createElement('div');
    const starText = document.createTextNode('Grade');

    starDiv.classList.add('material-symbols-outlined');
    starDiv.classList.add('star');
    starDiv.appendChild(starText);

    const numDiv = document.createElement('div');
    const numText = document.createTextNode(starCount++);

    numDiv.classList.add('starNum');
    numDiv.appendChild(numText);
    starDiv.appendChild(numDiv);

    return starDiv;
}


const getLastChild = () => document.querySelector('#out', 'div:last-child');

const pushChild = () => out.appendChild(createStarDiv());
const popChild = () => out.removeChild(out.lastElementChild);
const shiftChild = () => out.removeChild(out.firstElementChild)
const unShiftChild = () => out.insertBefore(createStarDiv(), out.firstElementChild);

pushBtn.addEventListener('click', (e) => pushChild());
popBtn.addEventListener('click', (e) => popChild());

shiftBtn.addEventListener('click', (e) => shiftChild());
unShiftBtn.addEventListener('click', (e) => unShiftChild());


document.body.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            shiftChild();
            break;
        case 'ArrowUp':
            e.preventDefault();
            pushChild();
            break;
        case 'ArrowDown':
            e.preventDefault();
            popChild();
            break;
        case 'ArrowRight':
            e.preventDefault();
            unShiftChild();
            break;
        default:
            break;
    }
});
