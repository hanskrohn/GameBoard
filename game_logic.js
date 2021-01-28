let gameBoard = [
    ['','',''],
    ['','',''],
    ['','','']
];

let player1sTurn = true; //x goes first
let available = 9; //9 available moves total

function checkWinner(){
    // if player 1 wins return 1
    // if player 2 wins return -1
    // if tie return 0
    // if no winner return null
    let winner = null;

    //check horizontal
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
    
    if(winner == null && available == 0){
        return 0; //tie
    }

    nextTurn();
    return winner;
}

function check3Positions(a, b, c){
    return a === b && b === c && a === c;
}

function nextTurn(){
    player1sTurn = !player1sTurn;
}

function selectSquare(i , j){
    if(gameBoard[i][j] !== ''){
        return; //spot taken
    }

    const player = player1sTurn ? 1 : -1; //player 1 = 1, player 2 = -1
    console.log(player)
    nextTurn()
}