let num = document.getElementById('num');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');

let count = 0;

plus.addEventListener('click', () => {
    count++;
    num.innerText = count;
});

minus.addEventListener('click', () => {
    if (count > 0) {
        count--;
        num.innerText = count;
    }
});

