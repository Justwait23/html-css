const gugudanDiv = document.getElementById('gugudan');

gugudanDiv.style.display = 'grid';
gugudanDiv.style.gridTemplateColumns = 'repeat(8, 1fr)' 
gugudanDiv.style.gap = '3px 3px';


/*
    gugudanDiv.innerHTML += '<div>2 x 1 = 2</div>';
    gugudanDiv.innerHTML += '<div>2 x 2 = 4</div>';
    gugudanDiv.innerHTML += '<div>2 x 3 = 6</div>';
*/

function makeGugudanDiv(dan, gop) {
    // return '<div>' + dan + 'x' + gop + '=' + dan * gop + '</div>';
    return `<div>${dan}x${gop}=${dan*gop}</div>` // Javascript format string
}

for (let gop = 1; gop <= 9; gop++) {
    for (let dan = 2; dan <= 9; dan++) {
        gugudanDiv.innerHTML += makeGugudanDiv(dan, gop);
    }
}


