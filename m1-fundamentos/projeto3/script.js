const pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        pixelBoard.appendChild(pixel);
    }
}