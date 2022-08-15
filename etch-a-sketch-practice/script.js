let color = "black";
let click = true;

function createGrid(size) {
    let board = document.querySelector('.board');

    let oldSquares = board.querySelectorAll('div');
    oldSquares.forEach((square) => square.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    

    let amount = size * size
    
    for (let i = 0; i < amount; i++){
        let squares = document.createElement('div');
        squares.addEventListener('mouseenter', changeColor);
        squares.style.backgroundColor = "white";
        squares.classList.add('cells');
        board.appendChild(squares);
    }
}
createGrid(16)

function selectColor(choice) {
    color = choice;
}

function changeColor() {
    if (click){
    if (color === "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else this.style.backgroundColor = color;
}
}

function changeSize(input) {
    if (input >= 2 && input <= 100){
        createGrid(input)
    } else alert("not enough or too many pixels")
}

function resetGrid() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((square) => square.style.backgroundColor = "white");
}

document.querySelector('body').addEventListener('click', () => {
click = !click;
if (click) {
    document.querySelector('.color-mode').textContent = "Coloring: ON"
} else 
    document.querySelector('.color-mode').textContent = "Coloring: OFF"
});


