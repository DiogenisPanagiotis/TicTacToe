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
        p1turn ? board[move[0]][move[1]] = 'X' : board[move[0]][move[1]] = 'O';
        p1turn = !p1turn;
        p1turn ? console.log('Now, Player 1 it is your turn!') : console.log('Now, Player 2 it is your turn!');
        next();
    });
}

function next(){
    return move();
}

getPlayer1();