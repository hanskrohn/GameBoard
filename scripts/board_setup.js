const PLAYER_1_VALUE = 1;
const PLAYER_2_VALUE = -1;
let PLAYING_VS_AI = false;
let ai = null;
let human = null;
let aiGoFirst = false;

function init(){
    PLAYING_VS_AI = window.location.pathname.split('/').includes('ai');

    if(PLAYING_VS_AI){
        const player1IsHuman = window.location.pathname.includes('1')
        player1IsHuman ? ai = PLAYER_2_VALUE : ai = PLAYER_1_VALUE;
        player1IsHuman ? human = PLAYER_1_VALUE : human = PLAYER_2_VALUE;
        aiGoFirst = !player1IsHuman
    }

    createBoard();
    manageSquareSize();
}

function createBoard(){
    document.getElementById("board").innerHTML = `<div class="flex">
                                                    <div id = "00" onclick = "selectSquare(0, 0)" class="right bottom square flex justifyContentCenter alignItemsCenter"></div>
                                                    <div id = "01" onclick = "selectSquare(0, 1)" class="left bottom right square flex justifyContentCenter alignItemsCenter"></div>
                                                    <div id = "02" onclick = "selectSquare(0, 2)" class="left bottom square flex justifyContentCenter alignItemsCenter"></div>
                                                </div>
                                                <div class="flex">
                                                    <div id = "10" onclick = "selectSquare(1, 0)" class="top right bottom square flex justifyContentCenter alignItemsCenter"></div>
                                                    <div id = "11" onclick = "selectSquare(1, 1)" class="left top right bottom square flex justifyContentCenter alignItemsCenter"></div>
                                                    <div id = "12" onclick = "selectSquare(1, 2)" class="top left bottom square flex justifyContentCenter alignItemsCenter"></div>
                                                </div>
                                                <div class="flex">
                                                    <div id = "20" onclick = "selectSquare(2, 0)" class="top right square flex justifyContentCenter alignItemsCenter"></div>
                                                    <div id = "21" onclick = "selectSquare(2, 1)" class="left top right square flex justifyContentCenter alignItemsCenter"></div>
                                                    <div id = "22" onclick = "selectSquare(2, 2)" class="left top square flex justifyContentCenter alignItemsCenter"></div>
                                                </div>`;
}

function manageSquareSize(){
    const squares = document.getElementsByClassName('square');
    const size = getSquareSize();
 
    Array.from(squares).forEach(square => {
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    })
}

function getSquareSize(){
    return Math.min(window.innerWidth, 800) * 0.25;
}

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', manageSquareSize);