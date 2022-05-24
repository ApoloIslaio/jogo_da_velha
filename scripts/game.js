//iniciar interface

let board = ['','','','','','','','',''];
let playerTime = 0;
let gameOver = false;
let simbols = ['o', 'x'];
let simbolWinner;
let emojiWinner = '';

let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function handleMove(position){
   
    if(gameOver){
        return;
    }

    if(board[position] == ''){
        board[position] = simbols[playerTime];
        gameOver = isWin();
        
        if(gameOver == false){
            playerTime = (playerTime == 0) ? 1 : 0;  //0 == o | 1 == x
            emojiWinner = (playerTime == 0) ? 'Abóbora' : 'Espadas';
        }
    }

    return gameOver;
}

function isWin(){
    
    for(let i = 0; i < winStates.length; i++){//de 0 a 7
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];


        if(board[pos1] == board[pos2] &&
           board[pos1] == board[pos3] &&
           board[pos1] != '') {

            return true;
           }
    }

    return false;
}

//função empate
function isTie(){
    let boardFull;
    let numBoard = 0;
    for(let i = 0; i < board.length; i++){
        if(board[i] != ''){
             numBoard += 1;
        }
        if (numBoard == 9) {
            boardFull = true;
        }else{
            boardFull = false;
        }
    }
    console.log('numBoard: ', numBoard);

    if( boardFull && isWin() == false ){
        console.log('Deu empate');
        return true;
    }
    return false;
}