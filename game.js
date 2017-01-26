var prompt = require('prompt');

let p1 = null;
let p2 = null;
let p1turn = true;

let board = [ [ " " , " " , " " ],[ " " , " " , " " ],[ " " , " " , " " ] ];

function getPlayer1(){
    prompt.start();
    console.log('Player 1, what is your name?');
    prompt.get(['p1name'], (err, res)=> {
        p1 = res.p1name;
        console.log('Welcome aboard ' + p1 + '!');
        getPlayer2();
    });
}

function getPlayer2(){
    prompt.start();
    console.log('Player 2, what is your name?');
    prompt.get(['p2name'], (err, res)=> {
        p2 = res.p2name;
        console.log('Welcome aboard ' + p2 + '!');
        move();
    });
}

function move(){
    console.log('-------------------');
    console.log('TIC TAC TOE LETS GO!');
    console.log('-------------------');
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
    console.log('-------------------');
    prompt.start();
    console.log('Enter coordinate (Row, Column) for your move. (Here is an example: 1, 2)');
    console.log('-------------------');
    prompt.get(['move'], (err, res)=> {
        let move = res.move.split(',');
        if (board[move[0]][move[1] !== "" || move[0] > 2 || move[1] > 2){
            console.log('This choice is invalid, try again!');
        }
        p1turn ? board[move[0]][move[1]] = 'X' : board[move[0]][move[1]] = 'O';
        p1turn = !p1turn;
        p1turn ? console.log('Now, Player 1 it is your turn!') : console.log('Now, Player 2 it is your turn!');
        // validate() // run this to check if there is a winning row, column, diagonal on the board
        next();
    });
}

function next(){
    return move();
}

var results = {
    r1 : [],
    r2 : [],
    r3 : [],
    c1 : [],
    c2 : [],
    c3 : [],
    d1 : [],
    d2 : []
}

function validate(){ // after each move, run validate function
    for(var i = 0; i < board,length; i++){
        for(var j = 0; j < board[i].length; j++){
            let col = board[i][j];
            // loop through each spot and insert corresponding move into specific results obj
                // check if any results array's length is 3 and if they are all X's or O's
                    // display winner!
            // reset game
            if (i === 0) {
                results.r1[0] = col;
                results.d1[0] = col;
            if (j === 0) {
                results.c1[0] = col;
            } else if (j === 1) {
                results.c2[1] = col;
            } else if (j === 2) {
                results.c3[2] = col;
                results.d2[0] = col;
            }
        } else if (i === 1) {
                results.r2[1] = col;
            if (j === 0) {
                results.c1[0] = col;
            } else if (j === 1) {
                results.c2[1] = col;
                results.d1[1] = col;
                results.d2[1] = col;
            } else if (j === 2) {
                results.c3[2] = col;
            }
        } else if (i === 2) {
                results.r3[2] = col;
            if (j === 0) {
                results.c1[0] = col;
                results.d2[2] = col;
            } else if (j === 1) {
                results.c2[1] = col;
            } else if (j === 2) {
                results.c3[2] = col;
                results.d1[2] = col;
            }
    }
}

function getWinner(){
    // loop through results object to display winner
}

getPlayer1();