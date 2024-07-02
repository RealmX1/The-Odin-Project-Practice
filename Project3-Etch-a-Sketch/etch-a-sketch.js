const canvas = document.querySelector('.sketch-canvas');
const clearButton = document.querySelector('#clear');

var gridNum = 16;

clearButton.addEventListener('click', () => {
    for(let i = 0; i < canvas.children.length; i++) {
        resetCell(canvas.children[i]);
    }
});
const resizeButton = document.querySelector('#resize');
resizeButton.addEventListener('click', () => {
    inputGridNum = prompt('Enter the number of grids per row/column');
    // if not a number, return
    if (isNaN(inputGridNum)) {
        alert('Invalid input. Please enter a number.');
    } else if (inputGridNum <= 2 || inputGridNum % 1 !== 0 || inputGridNum > 100) {
        alert('Invalid input. Please enter a positive integer between 2 and 100.');
    } else {
        gridNum = inputGridNum;
        resetGrid(gridNum);
    }
});

function resetCell(cell) {
    cell.style.backgroundColor = 'white';
}

function resetGrid(gridNum) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    canvas.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;

    for (let i = 0; i < gridNum * gridNum; i++) {
        const grid = document.createElement('div');
        grid.classList.add('cell');
        // grid.addEventListener('mouseover', () => {
        //     grid.style.backgroundColor = 'black';
        // });
        canvas.appendChild(grid);
    }

    // deligate event listener to parent element
    canvas.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('cell')) {
            e.target.style.backgroundColor = 'black';
        }
    });
}

resetGrid(gridNum);