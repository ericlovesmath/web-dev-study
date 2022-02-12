// TODO: Make this an enum(?)
const TILE_STATUSES = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMER: 'number',
    FLAGGED: 'flagged'
};
export function createBoard(boardSize, numberOfMines) {
    const board = [];
    const minePositions = getMinePositions(boardSize, numberOfMines);
    console.log(minePositions);
    for (let x = 0; x < boardSize; x++) {
        const row = [];
        for (let y = 0; y < boardSize; y++) {
            const elem = document.createElement('div');
            elem.dataset.status = TILE_STATUSES.HIDDEN;
            row.push({
                elem,
                x,
                y,
                mine: minePositions.some(position => {
                    return position.x == x && position.y == y;
                }),
                get status() {
                    return elem.dataset.status;
                },
                set status(value) {
                    this.elem.dataset.status = value;
                }
            });
        }
        board.push(row);
    }
    return board;
}
function getMinePositions(boardSize, numberOfMines) {
    const positions = [];
    while (positions.length < numberOfMines) {
        const newPosition = {
            x: randomNumber(boardSize),
            y: randomNumber(boardSize)
        };
        if (!positions.some(position => {
            return position.x == newPosition.x && position.y == newPosition.y;
        })) {
            positions.push(newPosition);
        }
    }
    return positions;
}
function randomNumber(upper) {
    return Math.floor(Math.random() * upper);
}
