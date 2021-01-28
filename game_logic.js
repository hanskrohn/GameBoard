let gameBoard = [
    ['','',''],
    ['','',''],
    ['','','']
];

let player1sTurn = true; //x goes first
let gameover = false;
let ai = true;
let available = 9; //9 available moves total

function checkWinner(){
    // if player 1 wins return 1
    // if player 2 wins return -1
    // if tie return 0
    // if no winner return null

    //check horizontal
    for(let i = 0; i < 3; i++){
        if(check3Positions(gameBoard[i][0], gameBoard[i][1], gameBoard[i][2])){
            gameover = true;
            return gameBoard[i][0];
        }
    }
    //check vertical
    for(let i = 0; i < 3; i++){
        if(check3Positions(gameBoard[0][i], gameBoard[1][i], gameBoard[2][i])){
            gameover = true;
            return gameBoard[0][i];
        }
    }
    //check diagonal
    if(check3Positions(gameBoard[0][0], gameBoard[1][1], gameBoard[2][2])){
        gameover = true;
        return gameBoard[0][0];
    }
    
    if(check3Positions(gameBoard[0][2], gameBoard[1][1], gameBoard[2][0])){
        gameover = true;
        return gameBoard[0][2];
    }
    
    if(available == 0){
        gameover = true;
        return 0; //tie
    }
    
    //no winner
    return null;
}

function check3Positions(a, b, c){
    return a === b && b === c && a === c && a !== '' && b !== '' && c !== '';
}

function nextTurn(){
    available--;
    if(ai){
        
        const id = findBestMove(gameBoard, checkWinner);
        draw(id, -1);
        return
    }
    player1sTurn = !player1sTurn;
}

function selectSquare(i , j){
    

    if(gameBoard[i][j] !== ''){
        return; //spot taken
    }

    const player = player1sTurn ? 1 : -1; //player 1 = 1, player 2 = -1
    gameBoard[i][j] = player;
    draw(`${i}${j}`, player);
    nextTurn()
    checkWinner();
}

function draw(id, player){
    const div = document.getElementById(id);
    if(player === 1){
        div.innerHTML = '<h4>X</h4>';
    }else{
        div.innerHTML = '<h4>O</h4>';
    }
}
