import { Cell } from "./cell"

export class Grid {

    //GRID 3 * 3
    static generateGrid() {
        const length = 3 * 3
        let cells = []
        for (let i = 0; i < length;  i++){
            cells.push(Cell.emptyCell())          
        }
        console.log(cells)
        return new Grid(3, cells)
    }
    
    constructor(column, cell) {
        this.column = column
        this.cell = cell
    }

    sendActionCell(index, player) {
        const cells = this.cell

        if (player === 1)
            cells[index] = Cell.withCross()
        else if (player === 2)
            cells[index] = Cell.withRound()

        return new Grid(3, cells)
    }

    checkWinner(index, player, numCross, numRound) {
        console.log(index)

        // return joueur gagnant
    }
}
