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

interface tile {
    elem: HTMLDivElement;
    x: number;
    y: number;
    mine: boolean;
    status: string;
}

export function createBoard(boardSize: number, numberOfMines: number) {
    const board: tile[][] = [];
    const minePositions = getMinePositions(boardSize, numberOfMines);

    for (let x = 0; x < boardSize; x++) {
        const row: tile[] = []
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
                    return elem.dataset.status!;
                },
                set status(value: string) {
                    this.elem.dataset.status = value;
                }
            });
        }
        board.push(row);
    }
    return board;
}

export function flagTile(tile: tile) {
    if (tile.status !== TILE_STATUSES.HIDDEN && tile.status !== TILE_STATUSES.FLAGGED) {
        return;
    }

    if (tile.status === TILE_STATUSES.FLAGGED) {
        tile.status = TILE_STATUSES.HIDDEN;
    } else {
        tile.status = TILE_STATUSES.FLAGGED;
    }

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
