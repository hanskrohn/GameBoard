function findBestMove() {
    // AI to make its turn
    let bestScore = Infinity * ai * -1;
    let move;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
        // Is the spot available?
            if (gameBoard[i][j] == '') {
                gameBoard[i][j] = ai;
                let score = minimax(gameBoard, !aiGoFirst);
                gameBoard[i][j] = '';
                if (compare(score, bestScore)) {
                    bestScore = score;
                    move = { i, j };
                }
            }
        }
    }
    gameBoard[move.i][move.j] = ai;
    return `${move.i}${move.j}`
}

function compare(score, bestScore){
    if(ai === -1){
        return score < bestScore
    }else{
        return score > bestScore
    }
}

function minimax(gameBoard, isMaximizing) {
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
                    let score = minimax(gameBoard, false);
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
                    let score = minimax(gameBoard, true);
                    gameBoard[i][j] = '';

                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}

