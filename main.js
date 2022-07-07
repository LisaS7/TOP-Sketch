const sketchpadBody = document.getElementById('pad-body');

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
        const newCell = document.createElement('div');
        newCell.addEventListener('mouseover', () => {mouseCell(newCell)});
        newCell.textContent = i;
        sketchpadBody.appendChild(newCell).classList.add('grid-cell');
    }
}


function setGridSize() {
    const gridSize = document.getElementById('grid-size').value;
    let gridWidth = sketchpadBody.offsetWidth / gridSize;
    if (gridSize < 101 && gridSize > 0) {
        sketchpadBody.style.gridTemplateRows = `repeat(${gridSize}, ${gridWidth}px, 1fr)`;
        sketchpadBody.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        return gridSize;
    } else {
        alert('Please enter a number between 1 and 100');
    }
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

