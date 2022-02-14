import { checkWin, checkLose, createBoard, flagTile, revealTile, TILE_STATUSES } from './minesweeper.js';

const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 10;

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElem = document.querySelector('.board') as HTMLDivElement;
const minesLeftText = document.querySelector('[data-mine-count]') as HTMLSpanElement;
const messageText = document.querySelector('.subtext') as HTMLDivElement;

console.log(board)

board.forEach(row => {
    row.forEach(tile => {
        boardElem.append(tile.elem);
        tile.elem.addEventListener('click', () => {
            revealTile(board, tile);
            checkGameEnd();
        })
        tile.elem.addEventListener('contextmenu', (e: Event) => {
            e.preventDefault();
            flagTile(tile);
            listMinesLeft();
        })
    })
})

boardElem.style.setProperty("--size", BOARD_SIZE.toString());
minesLeftText.textContent = NUMBER_OF_MINES.toString();

function listMinesLeft() {
    const flaggedTilesCount = board.reduce((count, row) => {
        return count + row.filter(tile => tile.status == TILE_STATUSES.FLAGGED).length
    }, 0)
    minesLeftText.textContent = (NUMBER_OF_MINES - flaggedTilesCount).toString();
}

function checkGameEnd() {
    const win = checkWin(board);
    const lose = checkLose(board);

    if (win || lose) {
        boardElem.addEventListener('click', (e: Event) => { e.stopImmediatePropagation(); }, { capture: true });
        boardElem.addEventListener('contextmenu', (e: Event) => { e.stopImmediatePropagation(); }, { capture: true });
    }
    if (win) {
        messageText.textContent = "You Win!";
    }
    if (lose) {
        messageText.textContent = "You Lose!";
        board.forEach(row => {
            row.forEach(tile => {
                if (tile.status === TILE_STATUSES.FLAGGED) flagTile(tile);
                if (tile.mine) revealTile(board, tile);
            })
        })
    }
}
