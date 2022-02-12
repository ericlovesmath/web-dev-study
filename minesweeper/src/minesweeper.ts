// TODO: Make this an enum(?)
const TILE_STATUSES = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMER: 'number',
    FLAGGED: 'flagged'
}

interface pos {
    x: number;
    y: number;
}

export function createBoard(boardSize: number, numberOfMines: number) {
    const board = [];
    const minePositions = getMinePositions(boardSize, numberOfMines);
    console.log(minePositions);
    for (let x = 0; x < boardSize; x++) {
        const row = []
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
                set status(value) { // TODO: Add typing here?
                    this.elem.dataset.status = value;
                }
            });
        }
        board.push(row);
    }
    return board;
}

function getMinePositions(boardSize: number, numberOfMines: number): pos[] {

    const positions: pos[] = [];

    while (positions.length < numberOfMines) {
        const newPosition: pos = {
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

function randomNumber(upper: number): number {
    return Math.floor(Math.random() * upper);
}
