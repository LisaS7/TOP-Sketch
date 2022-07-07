const outerDiv = document.getElementById('outer-box');

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
        outerDiv.appendChild(newCell).classList.add('grid-cell');
    }
}


function setGridSize() {
    const gridSize = document.getElementById('grid-size').value;
    if (gridSize < 101 && gridSize > 0) {
        outerDiv.style.gridTemplateRows = `repeat(${gridSize}), 1fr)`;
        outerDiv.style.gridTemplateColumns = `repeat(${gridSize}), 1fr)`;
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

