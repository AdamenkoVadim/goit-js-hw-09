const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
btnStop.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function onClickStart() {
    
    btnStart.disabled = true;
    btnStop.disabled = false;
    setColor = setInterval(() =>{
        bodyEl.style.backgroundColor = getRandomHexColor();},1000)
}

function onClickStop() {
    clearInterval(setColor)
    btnStart.disabled = false;
    btnStop.disabled = true;
}

btnStart.addEventListener('click',onClickStart)
btnStop.addEventListener('click',onClickStop)
console.log('asdf');