import { createBoard } from './minesweeper.js';
const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 10;
const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElem = document.querySelector('.board');
console.log(board);
board.forEach(row => {
    row.forEach(tile => {
        boardElem.append(tile.elem);
    });
});
boardElem.style.setProperty("--size", BOARD_SIZE.toString());
