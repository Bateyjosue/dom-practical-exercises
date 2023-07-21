const screenCounter = document.querySelector(".screen__counter");
const btnFirst = document.querySelector('.actions span:nth-child(1)')
const btnMiddle = document.querySelector('.actions span:nth-child(2)')
const btnLast = document.querySelector('.actions span:nth-child(3)')

btnFirst.addEventListener('click', () => {
    screenCounter.textContent = 5;
})

btnMiddle.addEventListener('click', () => {
    screenCounter.textContent = 10;

})

btnLast.addEventListener('click', () => {
    screenCounter.textContent = 15;

})

let x;

if(screenCounter.textContent > 0) {
    x = setInterval(() => {
        screenCounter.textContent = screenCounter.textContent - 1;
        if(screenCounter.textContent == 0) {
            clearInterval(x)
            // x = null
            screenCounter.textContent = 0
            btnFirst.style['display'] = 'block';
            btnMiddle.style['display'] = 'block';
            btnLast.style['display'] = 'block';
        }else {
            btnFirst.style['display'] = 'none';
            btnMiddle.style['display'] = 'none';
            btnLast.style['display'] = 'none';

        }

    }, 1000)
}
