function init(){
    createBoard()
    manageSquareSize()
}

function createBoard(){
    document.getElementById("board").innerHTML = `<div class="flex">
                                                    <div class="right bottom square"></div>
                                                    <div class="left bottom right square"></div>
                                                    <div class="left bottom square"></div>
                                                </div>
                                                <div class="flex">
                                                    <div class="top right bottom square"></div>
                                                    <div class="left top right bottom square"></div>
                                                    <div class="top left bottom square"></div>
                                                </div>
                                                <div class="flex">
                                                    <div class="top right square"></div>
                                                    <div class="left top right square"></div>
                                                    <div class="left top square"></div>
                                                </div>`
}

function manageSquareSize(){
    const squares = document.getElementsByClassName('square');
    const size = Math.min(window.innerWidth, 800) * 0.30;
 
    Array.from(squares).forEach(square => {
        console.log(square)
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    })
}

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', manageSquareSize);