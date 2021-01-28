function init(){
    createBoard()
    manageSquareSize()
}

function createBoard(){
    document.getElementById("board").innerHTML = `<div class="flex">
                                                    <div onclick = "selectSquare(0, 0)" class="right bottom square"></div>
                                                    <div onclick = "selectSquare(0, 1)" class="left bottom right square"></div>
                                                    <div onclick = "selectSquare(0, 2)" class="left bottom square"></div>
                                                </div>
                                                <div class="flex">
                                                    <div onclick = "selectSquare(1, 0)" class="top right bottom square"></div>
                                                    <div onclick = "selectSquare(1, 1)" class="left top right bottom square"></div>
                                                    <div onclick = "selectSquare(1, 2)" class="top left bottom square"></div>
                                                </div>
                                                <div class="flex">
                                                    <div onclick = "selectSquare(2, 0)" class="top right square"></div>
                                                    <div onclick = "selectSquare(2, 1)" class="left top right square"></div>
                                                    <div onclick = "selectSquare(2, 2)" class="left top square"></div>
                                                </div>`
}

function manageSquareSize(){
    const squares = document.getElementsByClassName('square');
    const size = Math.min(window.innerWidth, 800) * 0.30;
 
    Array.from(squares).forEach(square => {
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    })
}

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', manageSquareSize);