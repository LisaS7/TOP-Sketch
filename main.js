const sketchpadBody = document.getElementById('pad-body');
const maxWidth = 400;

// BUTTONS
document.getElementById('btnDraw').addEventListener('click', refreshGrid);
document.getElementById('btnClear').addEventListener('click', clearCells);


function clearCells() {
    document.querySelectorAll('.grid-cell').forEach(element => {
        element.classList.remove('filled-cell');
    });
}


function makeGrid() {
    const gridSize = setGridSize();  
    for (i = 1; i <= (gridSize * gridSize); i++) {
        const cell = makeCell();
        setCellSize(cell, gridSize);
    }
}

function makeCell() {
    const newCell = document.createElement('div');
    newCell.addEventListener('mouseover', () => {mouseCell(newCell)});
    sketchpadBody.appendChild(newCell).classList.add('grid-cell');
    return newCell;
}


function setGridSize() {
    const gridSize = document.getElementById('grid-size').value;
    if (gridSize < 101 && gridSize > 0) {
        sketchpadBody.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        sketchpadBody.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        return gridSize;
    } else {
        alert('Please enter a number between 1 and 100');
    }
}

function setCellSize(cell, gridSize) {
    cell.style.padding = `${maxWidth/gridSize}px`;
}


function refreshGrid() {
    document.querySelectorAll('.grid-cell').forEach(cell => cell.remove());
    makeGrid()
}


function mouseCell(cell) {
    cell.classList.add('filled-cell');
    cell.style.backgroundColor = randomColour();
}


function randomColour() {
    const options = ["blue", "green", "red", "yellow"];
    return options[Math.floor(Math.random()*options.length)];
}

