// ELEMENTS
const sketchpadBody = document.getElementById('pad-body');
const sizeSlider = document.getElementById('size-slider');
const sizeSliderLabel = document.getElementById('size-label');
const colorPicker = document.getElementById('pen-color');
const btnRandomColor = document.getElementById('btnRandomColor');

const padWidth = 400; // used to determine cell size
newGrid() // create initial grid when page loads


// CONTROL BUTTONS
function toggle(button){
    if (button.target.value==="ON") {
        button.target.value="OFF";
    } else {
        button.target.value="ON";
    }
}

document.getElementById('btnDraw').addEventListener('click', newGrid);
document.getElementById('btnClear').addEventListener('click', clearCellFill);
colorPicker.addEventListener('change', updateColor);
btnRandomColor.addEventListener('click', toggle);
sizeSlider.oninput = function() {sizeSliderLabel.textContent = `${this.value} x ${this.value}`};


function clearCellFill() {
    document.querySelectorAll('.grid-cell').forEach(element => {
        element.style.backgroundColor = '';
    });
}


// GRID CREATION
function setGridSize() {
    const gridSize = sizeSlider.value;
    if (gridSize < 101 && gridSize > 0) {
        sketchpadBody.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        sketchpadBody.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        return gridSize;
    } else {
        alert('Please enter a number between 1 and 100');
    }
}


function makeCell() {
    const newCell = document.createElement('div');
    newCell.addEventListener('mouseover', () => {mouseCell(newCell)});
    sketchpadBody.appendChild(newCell).classList.add('grid-cell');
    return newCell;
}


function setCellSize(cell, gridSize) {
    cell.style.minHeight = `${padWidth/gridSize}px`;
    cell.style.minWidth = `${padWidth/gridSize}px`;
}


function newGrid() {
    document.querySelectorAll('.grid-cell').forEach(cell => cell.remove());
    const gridSize = setGridSize();  
    for (i = 1; i <= (gridSize * gridSize); i++) {
        const cell = makeCell();
        setCellSize(cell, gridSize);
    }
}


// COLOURING
let penColor = 'slateblue';
const colorOptions = ["blue", "green", "red", "yellow"];

function mouseCell(cell) {
    if (btnRandomColor.value === 'ON') {
        cell.style.backgroundColor = colorOptions[Math.floor(Math.random()*colorOptions.length)]
    } else {
        cell.style.backgroundColor = penColor;
    }
    
}


function updateColor(event) {
    penColor = event.target.value;
    document.getElementById('pen-dot').style.backgroundColor = penColor;
}
