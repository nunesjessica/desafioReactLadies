let count = 0;
let counterHtml = document.getElementById('counter');
let btnPlus = document.getElementById('plus');
let btnLess = document.getElementById('less');
let btnReset = document.getElementById('reset');
btnPlus.addEventListener('click', add);
btnLess.addEventListener('click', deduct);
btnReset.addEventListener('click', reset);

function add() {
    count += 1;
    counterHtml.innerHTML = count;

}
function deduct() {
    if (count != 0) {
        count -= 1;
        counterHtml.innerHTML = count;

    }
}
function reset() {
    count = 0; 
    counterHtml.innerHTML = count;
}
counterHtml.innerHTML = count;

