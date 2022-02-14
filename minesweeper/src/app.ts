import { createBoard, flagTile, TILE_STATUSES } from './minesweeper.js';

const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 10;

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElem = document.querySelector('.board') as HTMLDivElement;
const minesLeftText = document.querySelector('[data-mine-count]') as HTMLSpanElement;

console.log(board)

board.forEach(row => {
    row.forEach(tile => {
        boardElem.append(tile.elem);
        tile.elem.addEventListener('click', () => {})
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
