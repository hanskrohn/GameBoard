let gameBoard = [
    ['','',''],
    ['','',''],
    ['','','']
];

const SQUARE_IDS = ['00', '01', '02', '10', '11', '12', '20', '21', '22'];

let player1sTurn = true; // x goes first
const winnerDiv = document.getElementById('winner');

function checkWinner(){
    // if player 1 wins return 1
    // if player 2 wins return -1
    // if tie return 0
    // if no winner return null

    //check horizontal
    let winner = null;
    for(let i = 0; i < 3; i++){
        if(check3Positions(gameBoard[i][0], gameBoard[i][1], gameBoard[i][2])){
            winner = gameBoard[i][0];
        }
    }
    //check vertical
    for(let i = 0; i < 3; i++){
        if(check3Positions(gameBoard[0][i], gameBoard[1][i], gameBoard[2][i])){
            winner = gameBoard[0][i];
        }
    }
    //check diagonal
    if(check3Positions(gameBoard[0][0], gameBoard[1][1], gameBoard[2][2])){
        winner = gameBoard[0][0];
    }
    
    if(check3Positions(gameBoard[0][2], gameBoard[1][1], gameBoard[2][0])){
        winner = gameBoard[0][2];
    }
    
    let openSpots = findAvailableSlots();

    if (winner == null && openSpots == 0) {
        return 0;
    } else {
        return winner;
    }
}

function findAvailableSlots(){
    let counter = 0;

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(gameBoard[i][j] === ''){
                counter++;
            }
        }
    }
    return counter;
}

function check3Positions(a, b, c){
    return a === b && b === c && a === c && a !== '';
}

function nextTurn(){
    if(findAvailableSlots() === 0){
        return;
    }
    if(PLAYING_VS_AI){
        setTimeout(() => {
            const id = findBestMove(gameBoard, checkWinner);
            draw(id, ai);
        },1000)
        return
    }
    player1sTurn = !player1sTurn;
}

function selectSquare(i , j){
    const winner = checkWinner();

    if(winner !== null){
        return;
    }
    
    if(gameBoard[i][j] !== ''){
        return; //spot taken
    }
    
    if(player1IsHuman !== null){
        console.log('here')
        if(!player1IsHuman){
            return
        }
        player1IsHuman = !player1IsHuman
    }

    let player;
    if(!PLAYING_VS_AI){
        player = player1sTurn ? PLAYER_1_VALUE : PLAYER_2_VALUE; //player 1 = 1, player 2 = -1
    }else{
        player = human
    }

    gameBoard[i][j] = player;
    draw(`${i}${j}`, player);
    nextTurn()
}

function draw(id, player){
    const div = document.getElementById(id);
    if(player === 1){
        div.innerHTML = '<h4>X</h4>';
    }else{
        div.innerHTML = '<h4>O</h4>';
    }

    const winner = checkWinner();

    if(winner !== null){
        printWinner(winner)
    }

}

function init(){
    if(ai === 1){
        nextTurn()
    }
}

function printWinner(winner){
    let text;

    if(winner === 1){
        text = "X's won!"
    }else if(winner === -1){
        text = "O's won!"
    }else{
        text = "Tie!"
    }

    winnerDiv.innerHTML = `<div class = "centerText">
                                <h1>${text}</h1>
                            </div>
                            <div class = "width80 center"><button onclick="resetGame()">Play Again</button></div> `
}

function resetGame(){
    winnerDiv.innerHTML = ''
    gameBoard = [
        ['','',''],
        ['','',''],
        ['','','']
    ];

    SQUARE_IDS.forEach(id => {
        const div = document.getElementById(id);
        div.innerHTML = ''
    })

    player1sTurn = true;
    if(aiGoFirst !== null){
        player1IsHuman = !aiGoFirst
        if(!player1IsHuman){
            init()
        }
    }
}

document.addEventListener('DOMContentLoaded', init);
