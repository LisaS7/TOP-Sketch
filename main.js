// https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

const gridSize = 16;
const outerDiv = document.getElementById('outer-box');

// CLEAR
document.getElementById('btnClear').addEventListener('click', clearCells)

function clearCells() {
    document.querySelectorAll('.grid-cell').forEach(element => {
        element.classList.remove('filled-cell');
    });
}

function makeGrid(gridSize) {
    outerDiv.style.setProperty('--grid-size', gridSize)
    for (i = 1; i <= (gridSize * gridSize); i++) {
        const newCell = document.createElement('div');
        newCell.textContent = i;

        newCell.addEventListener('mouseover', () => {mouseCell(newCell)})

        outerDiv.appendChild(newCell).classList.add('grid-cell');
    }
}

function mouseCell(cell) {
    cell.classList.add('filled-cell');
}

makeGrid(gridSize);

