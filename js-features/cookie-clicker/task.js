const cookie = document.getElementById('cookie');
let counter = +document.getElementById('clicker__counter').textContent;

function countClicks() {
    cookie.width = 250;
    counter += 1;
    clicker__counter.textContent = counter;
    setTimeout(returnSize, 100);
}

returnSize = () => { cookie.width = 200 };

cookie.onclick = countClicks;