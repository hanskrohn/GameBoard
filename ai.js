function findAvailableSlots(gamegameBoard){
    let count = 1;

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(gamegameBoard[i][j] === ''){
                count++;
            }
        }
    }
    // console.log(count, gamegameBoard)
    return count;
}

function findBestMove() {
// AI to make its turn
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
        // Is the spot available?
            if (gameBoard[i][j] == '') {
                gameBoard[i][j] = 1;
                let score = minimax(gameBoard, 0, false);
                gameBoard[i][j] = '';
                if (score > bestScore) {
                    bestScore = score;
                    move = { i, j };
                }
            }
        }
    }
    gameBoard[move.i][move.j] = 1;
    return `${move.i}${move.j}`
}

function minimax(gameBoard, depth, isMaximizing) {
    let result = checkWinner();
    if (result !== null) {
        return result*10;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (gameBoard[i][j] == '') {
                    gameBoard[i][j] = 1;
                    let score = minimax(gameBoard, depth + 1, false);
                    gameBoard[i][j] = '';
                    bestScore = Math.max(score, bestScore);
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (gameBoard[i][j] == '') {
                    gameBoard[i][j] = -1;
                    let score = minimax(gameBoard, depth + 1, true);
                    gameBoard[i][j] = '';
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}

