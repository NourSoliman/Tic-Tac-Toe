let marker
let gameBoard = [];
let restartBu = document.getElementById(`restart`)
let winnerDec = document.getElementById(`winner`)
let selectMark = document.getElementById(`select`)
let firstNameInput = document.getElementById(`p1-name-input`);
let secNameInput = document.getElementById(`p2-name-input`);
let firstPlayer = document.getElementById(`p1-name-div`)
let secPlayer = document.getElementById(`p2-name-div`)
let button = document.getElementById(`button`)
button.addEventListener(`click` , startGame)
let gameOver = false;
selectMark.addEventListener(`click`, mark)
restartBu.addEventListener(`click`, restartGame)

function startGame() {
    firstPlayer.innerHTML = `First-Player ${firstNameInput.value}`;
    secPlayer.innerHTML = ` 2nd-Player  ${secNameInput.value}`;
}
function theEnd(num1, num2, num3) {
    winnerDec.innerHTML = `the winner is ${gameBoard[num1]}`
    document.getElementById(`item` + num1).style.background = `#E879F9`
    document.getElementById(`item` + num2).style.background = `#9333EA`
    document.getElementById(`item` + num3).style.background = `#7C3AED`
    gameOver = true;
    return
}
// market function
function game(id) {

    let cell = document.getElementById(id)
    if (marker === `x` && cell.innerHTML == `` && gameOver == false) {
        cell.innerHTML = `X`
        marker = `o`
    } else if (marker === `o` && cell.innerHTML == `` && gameOver == false) {
        cell.innerHTML = `o`
        marker = `x`
    }

    winner();

}
// winner function
function winner() {    
    for (let i = 1; i < 10; i++) {
        gameBoard[i] = document.getElementById(`item` + i).innerHTML;
    }
    if (gameBoard[1] == gameBoard[2] && gameBoard[2] == gameBoard[3] && gameBoard[1] != ``) {
        theEnd(1, 2, 3)

    } else if (gameBoard[4] == gameBoard[5] && gameBoard[5] == gameBoard[6] && gameBoard[4] != ``) {
        theEnd(4, 5, 6)

    } else if (gameBoard[7] == gameBoard[8] && gameBoard[8] == gameBoard[9] && gameBoard[7] != ``) {
        theEnd(7, 8, 9)

    } else if (gameBoard[1] == gameBoard[4] && gameBoard[4] == gameBoard[7] && gameBoard[1] != ``) {
        theEnd(1, 4, 7)

    } else if (gameBoard[2] == gameBoard[5] && gameBoard[5] == gameBoard[8] && gameBoard[2] != ``) {
        theEnd(2, 5, 8)

    } else if (gameBoard[3] == gameBoard[6] && gameBoard[6] == gameBoard[9] && gameBoard[3] != ``) {
        theEnd(3, 6, 9)

    } else if (gameBoard[1] == gameBoard[5] && gameBoard[5] == gameBoard[9] && gameBoard[1] != ``) {
        theEnd(1, 5, 9)

    } else if (gameBoard[3] == gameBoard[5] && gameBoard[5] == gameBoard[7] && gameBoard[3] != ``) {
        theEnd(3, 5, 7)

    }
    
}


function restartGame() {
    
    const cells = (document.querySelectorAll(".cell"));
    for (let i = 0 ; i < 9; i++) {
        cells[i].innerHTML = ""
    }
    gameBoard = [];
    gameOver = false;
    firstPlayer.innerHTML = "";
    secPlayer.innerHTML = "";
    button.style.display = `none`


}
function mark() {

    if (selectMark.value == `1`) {
        marker = `x`
    } else {
        marker = `o`
    }

}
