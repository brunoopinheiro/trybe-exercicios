const pixelBoard = document.getElementById('pixel-board');
const blackSelector = document.getElementById('black-selector');
const secondSelector = document.getElementById('second-selector');
const thirdSelector = document.getElementById('third-selector');
const fourthSelector = document.getElementById('fourth-selector');
const clearButton = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');
const generateBoardButton = document.getElementById('generate-board');
const randomColorsButton = document.getElementById('randomize-colors');

function selectColor(event) {
    const colorSelectors = document.getElementsByClassName('color');
    for (let i = 0; i < colorSelectors.length; i += 1) {
        if (colorSelectors[i].classList.contains('selected')) {
            colorSelectors[i].classList.remove('selected');
        }
   }
   event.target.classList.add('selected');
}

function generateRandomColor() {
    let randomSeed = Math.floor(Math.random()*16777215).toString(16);
    let randomColor = "#" + randomSeed;
    return randomColor;
}

function paint(event) {
    const selector = document.querySelector('.selected');
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

function generateGrid(value) {
    pixelBoard.innerHTML = '';
    let gridSize = value;
    if (gridSize < 5) {
        window.alert('Board inválido!');
        gridSize = 5;
    } else if (gridSize > 100) {
        gridSize = 100;
    }
    pixelBoard.style.setProperty('--gridSize', gridSize);
    for (let i = 0; i < gridSize; i += 1) {
        for (let j = 0; j < gridSize; j += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'white';
            pixelBoard.appendChild(pixel);
            pixel.addEventListener('click', paint);
        }
    }
}

window.onload = function () {
    generateGrid(5);
    blackSelector.classList.add('selected');
    blackSelector.style.backgroundColor = 'black';
    secondSelector.style.backgroundColor = generateRandomColor();
    thirdSelector.style.backgroundColor = generateRandomColor();
    fourthSelector.style.backgroundColor = generateRandomColor();
}

blackSelector.addEventListener('click', selectColor);
secondSelector.addEventListener('click', selectColor);
thirdSelector.addEventListener('click', selectColor);
fourthSelector.addEventListener('click', selectColor);
clearButton.addEventListener('click', clearBoard);
generateBoardButton.addEventListener('click', function () {
    const inputBoardSize = document.getElementById('board-size');
    generateGrid(inputBoardSize.value);
})
randomColorsButton.addEventListener('click', function () {
    secondSelector.style.backgroundColor = generateRandomColor();
    thirdSelector.style.backgroundColor = generateRandomColor();
    fourthSelector.style.backgroundColor = generateRandomColor();
})