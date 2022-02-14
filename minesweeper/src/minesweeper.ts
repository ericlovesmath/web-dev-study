// TODO: Make this an enum(?)
export const TILE_STATUSES = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMBER: 'number',
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

export function revealTile(board: tile[][], tile: tile) {
    console.log(tile);
    if (tile.status !== TILE_STATUSES.HIDDEN) {
        return;
    }

    if (tile.mine) {
        tile.status = TILE_STATUSES.MINE;
        return;
    }

    tile.status = TILE_STATUSES.NUMBER;
    const adjTiles = neighboringTiles(board, tile);
    const mines = adjTiles.filter(t => t.mine);
    if (mines.length === 0) {
        adjTiles.forEach(revealTile.bind(null, board));
    } else {
        tile.elem.textContent = mines.length.toString();
    }
}

export function checkWin(board: tile[][]): boolean {
    return board.every(row => {
        return row.every(tile => {
            return tile.status === TILE_STATUSES.NUMBER || (
                tile.mine && (
                    tile.status === TILE_STATUSES.HIDDEN || tile.status === TILE_STATUSES.FLAGGED
                )
            )
        })
    })
}

export function checkLose(board: tile[][]): boolean {
    return board.some(row => {
        return row.some(tile => {
            return tile.status === TILE_STATUSES.MINE;
        })
    })
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

function neighboringTiles(board: tile[][], { x, y }: pos): tile[] {
    const tiles: tile[] = [];

    for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let yOffset = -1; yOffset <= 1; yOffset++) {
            const tile = board[x + xOffset]?.[y + yOffset];
            if (tile) tiles.push(tile);
        }
    }

    return tiles

}

