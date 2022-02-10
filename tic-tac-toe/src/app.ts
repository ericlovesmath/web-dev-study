const X_CLASS = 'x';
const O_CLASS = 'o';
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = Array.from(document.querySelectorAll<HTMLDivElement>('[data-cell]'));
const board = document.getElementById("board")! as HTMLDivElement;
const winningMessageElem = document.getElementById('winning-message') as HTMLDivElement;
const winningMessageTextElem = document.querySelector('[data-winning-message-text]') as HTMLDivElement;
const restartButton = document.getElementById('restartButton') as HTMLButtonElement;
let oTurn: boolean;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    oTurn = true;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
        cell.removeEventListener('click', handleClick);
        // { once: true } makes it only trigger once
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass();
    winningMessageElem.classList.remove('show');
}

function handleClick(e: Event) {
    const cell = e.target as HTMLDivElement;
    const currentClass = oTurn ? O_CLASS : X_CLASS;

    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function endGame(draw: boolean) {
    if (draw) {
        winningMessageTextElem.innerText = "Draw!";
    } else {
        winningMessageTextElem.innerText = `${oTurn ? "O's" : "X's"} Wins!`;
    }
    winningMessageElem.classList.add("show");
}

function isDraw() {
    return cellElements.every(cell => {
        return cell.classList.contains(O_CLASS) ||
            cell.classList.contains(X_CLASS)
    })
}

function placeMark(cell: HTMLDivElement, currentClass: string) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    oTurn = !oTurn;
}

function setBoardHoverClass() {
    board.classList.remove(O_CLASS);
    board.classList.remove(X_CLASS);
    if (oTurn) {
        board.classList.add(O_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}

function checkWin(currentClass: string): boolean {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}
