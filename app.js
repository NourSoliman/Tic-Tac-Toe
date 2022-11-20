// let marker
let marker
let gameBoard = [];
let restartBu = document.getElementById(`restart`)
let winnerDec = document.getElementById(`winner`)
let selectMark = document.getElementById(`select`)
let cells = document.querySelectorAll(`.cell`)
let button = document.getElementById(`button`)
let first = document.querySelector(`.first`)
let second = document.querySelector(`.second`)
let firstName= document.querySelector(`.name-one`)
let secName= document.querySelector(`.name-two`)
let inputs = document.querySelectorAll(`.name-one , .name-two`)
let start = document.querySelector(`.start`)
let submit = document.querySelector(`.submit`)
let submitbu = document.querySelector(`.submit`)
let form = document.querySelector(`.names`)
let hide = document.querySelector(`.hide`)
let gameOver = false;
start.addEventListener(`click` , startGame)
restartBu.addEventListener(`click`, restartGame)
form.addEventListener(`submit`, names)
selectMark.style.display = `none`
restartBu.style.display = `none`
winnerDec.style.display = `none`
start.style.display = `none`
hide.style.display = `none`
// function to handle name inputs
function names(e) {
    e.preventDefault()
    let one = first.value
    let two = second.value
    firstName.innerHTML = `First Player Name:  ${one}`
    secName.innerHTML = `Second Player Name:  ${two}`
    first.style.display = `none`
    second.style.display = `none`
    submit.style.display = `none`
    firstName.style.display = `block`
    secName.style.display = `block`
    form.reset()
    start.style.display = `block`
}
//function to declare the winner
function theEnd(num1, num2, num3) {
    // winnerDec.style.display = `block`
    winnerDec.style.display = `flex`
    winnerDec.innerHTML = `The Winner Is ${gameBoard[num1].toUpperCase()}`
    document.getElementById(`item` + num1).style.background = `#E879F9`
    document.getElementById(`item` + num2).style.background = `#9333EA`
    document.getElementById(`item` + num3).style.background = `#7C3AED`
    gameOver = true;
    restartBu.style.display = `flex`
    return
}
// marker function
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

    } else if(gameBoard[1] && gameBoard[2] && gameBoard[3] && gameBoard[4] && gameBoard[5] && gameBoard[6] && gameBoard[7] && gameBoard[8] && gameBoard[9] !== ``){
        restartBu.style.display = `flex`
        winnerDec.innerHTML = `Its Draw!`
    }
    
}
function restartGame() {
    const cells = (document.querySelectorAll(".cell"));
    for (let i = 0 ; i < 9; i++) {
        cells[i].innerHTML = ""
        cells[i].style.background = `gainsboro`
    }
    gameBoard = [];
    gameOver = false;
    console.log(`restarted`);
    restartBu.style.display = `none`
    winnerDec.textContent = ``
    first.style.display = `block`
    second.style.display = `block`
    submit.style.display = `block`
    selectMark.value == `0`;
    firstName.style.display = `none`
    secName.style.display = `none`
    start.style.display = `none`
    selectMark.style.display = `none`
    hide.style.display = `none`
}
function switchMark() {
    if (selectMark.value == `1`) {
        marker = `x`
    } 
    else {
        marker = `o`
    }
}

function startGame() {
    let selectMark = document.getElementById(`select`)
    start.style.display = `none`
    winnerDec.style.display = `none`
    selectMark.style.display =`block`
    hide.style.display = `flex`
    selectMark.addEventListener(`click`, switchMark)
    selectMark.addEventListener(`click`, switchMark)
}