let isEraserOn = false;
let isRainbowModeOn = false;
let isColorModeOn = false;

function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const containerSize = container.clientWidth;
    const squareSize = containerSize / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }

    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('mouseover', changeColor);
    });
}

function changeColor(e) {
    if (isEraserOn) {
        e.target.style.backgroundColor = 'white';
        e.target.style.opacity = 1;
    } else if (isRainbowModeOn) {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        e.target.style.backgroundColor = randomColor;
        e.target.style.opacity = 1;
    } else if (isColorModeOn) {
        const colorPicker = document.getElementById('colorPicker');
        const selectedColor = colorPicker.value;
        e.target.style.backgroundColor = selectedColor;
        e.target.style.opacity = 1;
    } else {
        e.target.style.backgroundColor = 'black';
        e.target.style.opacity = 1;
    }
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
        square.style.opacity = 1;
    });
}

function toggleEraser() {
    isEraserOn = !isEraserOn;
    const eraserButton = document.getElementById('eraserButton');
    const rainbowButton = document.getElementById('rainbowButton');
    const colorButton = document.getElementById('colorButton');

    isRainbowModeOn = false;
    isColorModeOn = false;

    if (isEraserOn) {
        eraserButton.textContent = 'Eraser On';
        rainbowButton.textContent = 'Rainbow Mode Off';
        colorButton.textContent = 'Color Mode Off';
        rainbowButton.disabled = true;
        colorButton.disabled = true;
    } else {
        eraserButton.textContent = 'Eraser';
        rainbowButton.disabled = false;
        colorButton.disabled = false;
    }
}

function toggleRainbowMode() {
    isRainbowModeOn = !isRainbowModeOn;
    const rainbowButton = document.getElementById('rainbowButton');
    const colorButton = document.getElementById('colorButton');
    const eraserButton = document.getElementById('eraserButton');

    isColorModeOn = false;
    isEraserOn = false;

    if (isRainbowModeOn) {
        rainbowButton.textContent = 'Rainbow Mode On';
        colorButton.textContent = 'Color Mode Off';
        eraserButton.textContent = 'Eraser Off';
        colorButton.disabled = true;
        eraserButton.disabled = true;
    } else {
        rainbowButton.textContent = 'Rainbow Mode Off';
        colorButton.disabled = false;
        eraserButton.disabled = false;
    }
}

function toggleColorMode() {
    isColorModeOn = !isColorModeOn;
    const colorButton = document.getElementById('colorButton');
    const rainbowButton = document.getElementById('rainbowButton');
    const eraserButton = document.getElementById('eraserButton');
    const colorPicker = document.getElementById('colorPicker');

    isRainbowModeOn = false;
    isEraserOn = false;

    if (isColorModeOn) {
        colorButton.textContent = 'Color Mode On';
        rainbowButton.textContent = 'Rainbow Mode Off';
        eraserButton.textContent = 'Eraser Off';
        rainbowButton.disabled = true;
        eraserButton.disabled = true;
        colorPicker.style.display = 'inline';
    } else {
        colorButton.textContent = 'Color Mode Off';
        rainbowButton.disabled = false;
        eraserButton.disabled = false;
        colorPicker.style.display = 'none';
    }
}

function updateGridSize() {
    const size = document.getElementById('gridSize').value;
    document.getElementById('gridSizeValue').textContent = size;
    document.getElementById('gridSizeValue2').textContent = size;
    createGrid(size);
}

createGrid(16);

document.getElementById('gridSize').addEventListener('input', updateGridSize);
document.getElementById('clearButton').addEventListener('click', clearGrid);
document.getElementById('eraserButton').addEventListener('click', toggleEraser);
document.getElementById('rainbowButton').addEventListener('click', toggleRainbowMode);
document.getElementById('colorButton').addEventListener('click', toggleColorMode);
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', changeColor);
});
