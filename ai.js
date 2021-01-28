function findBestMove(gameBoard, checkWinner){
    let bestScore = Infinity
    console.log('calling find best move')
    let move = {}
    let id;

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(gameBoard[i][j] === ''){
                //board wants to minimize
                gameBoard[i][j] = -1
                    
                let score = minimax(gameBoard, checkWinner, true) //therefore next move is maximize
                gameBoard[i][j] = ''
                console.log('game score', score)
                if(score === Infinity){
                    bestScore = score
                    move = {i, j}
                    id = `${i}${j}`
                    break
                }
                if(score < bestScore){
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

function minimax(gameBoard, checkWinner, isMaximizing, depth = 0){
    let winner = checkWinner();

    if(winner !== null){
        //someone won return winner score
        return (winner * 100) - depth
    }

    if(!isMaximizing){
        //this is ai's goal to minimize the score
        let bestScore = Infinity
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(gameBoard[i][j] === ''){
                    //if a spot is available
                    gameBoard[i][j] = -1
                    let score = minimax(gameBoard, checkWinner, !isMaximizing, depth + 1)
                    gameBoard[i][j] = ''

                    bestScore = Math.min(bestScore, score)
                }
            }
        }
        return bestScore
    }else{
        let bestScore = -Infinity
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(gameBoard[i][j] === ''){
                    //if a spot is available
                    gameBoard[i][j] = 1
                    let score = minimax(gameBoard, checkWinner, !isMaximizing, depth + 1)
                    gameBoard[i][j] = ''

                    bestScore = Math.max(bestScore, score)
                }
            }
        }
        return bestScore
    }
}


function findAvailableSlots(gameBoard){
    let count = 1;

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(gameBoard[i][j] === ''){
                count++;
            }
        }
    }
    // console.log(count, gameBoard)
    return count;
}