function findBestMove(gameBoard, checkWinner){
    let bestScore = -Infinity
    let move = {}
    let id;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(gameBoard[i][j] === ''){
                gameBoard[i][j] = -1
                    
                let score = minimax(gameBoard, checkWinner, true)
                gameBoard[i][j] = ''
                
                if(score > bestScore){
                    bestScore = score
                    move = {i, j}
                    id = `${i}${j}`
                }
            }
        }
    }

    gameBoard[move.i][move.j] = -1
    console.log(gameBoard)
    return id
}

function minimax(gameBoard, checkWinner, isMaximizing){
    let winner = checkWinner();
    if(winner !== null){
        return winner;
    }
    
    if(isMaximizing){
        let bestScore = -Infinity;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(gameBoard[i][j] === ''){
                    gameBoard[i][j] = -1
                    
                    let score = minimax(gameBoard, checkWinner, false)
                    gameBoard[i][j] = ''
                    bestScore = Math.max(score, bestScore)
                }
            }
        }
        return bestScore
    }else{
        let bestScore = Infinity
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(gameBoard[i][j] === ''){
                    gameBoard[i][j] = 1
                    let score = minimax(gameBoard, checkWinner, true)
                    gameBoard[i][j] = ''
                    
                    bestScore = Math.min(score, bestScore)
                }
            }
        }
        return bestScore
    }
}