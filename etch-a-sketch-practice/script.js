function createGrid(size) {
    let board = document.querySelector('.board');
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

function changeColor(choice) {
    this.style.backgroundColor = "black"
}




function changeSize(input) {

}