const pixelBoard = document.getElementById('pixel-board');
const blackSelector = document.getElementById('black-selector');
const redSelector = document.getElementById('red-selector');
const blueSelector = document.getElementById('blue-selector');
const greenSelector = document.getElementById('green-selector');
const clearButton = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');

function selectColor(event) {
    const colorSelectors = document.getElementsByClassName('color');
    for (let i = 0; i < colorSelectors.length; i += 1) {
        if (colorSelectors[i].classList.contains('selected')) {
            colorSelectors[i].classList.remove('selected');
        }
   }
   event.target.classList.add('selected');
}

function paint(event) {
    const selector = document.querySelector('.selected');
    console.log(selector.style.backgroundColor);
    let color = selector.style.backgroundColor;
    if (event.target.style.backgroundColor !== 'white') {
        event.target.style.backgroundColor = 'white';
    } else {
        event.target.style.backgroundColor = color;
    }
}

function clearBoard() {
    for (let i = 0; i < pixels.length; i += 1) {
        let pixel = pixels[i];
        pixel.style.backgroundColor = 'white';
    }
}

for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        pixelBoard.appendChild(pixel);
    }
}

window.onload = function () {
    blackSelector.classList.add('selected');
    blackSelector.style.backgroundColor = 'black';
    redSelector.style.backgroundColor = 'red';
    blueSelector.style.backgroundColor = 'blue';
    greenSelector.style.backgroundColor = 'green';
}

for (let i = 0; i < pixels.length; i += 1) {
    const pixel = pixels[i];
    pixel.addEventListener('click', paint);
}

blackSelector.addEventListener('click', selectColor);
redSelector.addEventListener('click', selectColor);
blueSelector.addEventListener('click', selectColor);
greenSelector.addEventListener('click', selectColor);
clearButton.addEventListener('click', clearBoard);