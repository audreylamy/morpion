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

    checkTop(index) {
        console.log('INDEX', index)
        if (index - 3 > 0) return true
        return false
    }

    checkBottom(index) {
        if (index + 3 < 9) return true
        return false
    }

    checkLeft(index, rowActual) {
        if (index - 1 > rowActual * 3 )
            return true
        return false
    }

    checkRight(index, rowActual) {
        if (index + 1 <= (rowActual * 3))
            return true
        return false
    }

    checkTopRight(index, rowActual) {
        if (this.checkTop(index) && this.checkRight(index, rowActual))
            return true
        return false
    }

    checkTopLeft(index, rowActual) {
        if (this.checkTop(index) && this.checkLeft(index, rowActual))
            return true
        return false
    }

    checkBottomRight(index, rowActual) {
        if (this.checkBottom(index) && this.checkRight(index, rowActual))
        {
            console.log('TRUE')
            return true
        }
        return false
    }

    checkBottomLeft(index, rowActual) {
        if (this.checkBottom(index) && this.checkLeft(index, rowActual))
            return true
        return false
    }

    findForm(index, form, grid) {
        var countCell = 1
        for (let cell of grid) {
            if (cell['form'] === form && index === countCell)
                return true
            countCell++
        }
        return false
    }

    checkWinner(grid, indexCell, player) {
        var str
        var form = player === 1 ? "cross" : "round"
        var countCell = 1
        var rowActual = 1 // actual line

        for (let cell of grid) {

            if (countCell >= (3 * rowActual)) { rowActual++ }

            if (countCell === indexCell) {
                if (this.checkTop(indexCell + 1) && this.findForm((indexCell + 1) - 3, form, grid)) console.log('OK top')
                if (this.checkBottom(indexCell + 1) && this.findForm((indexCell + 1) + 3, form, grid)) console.log('OK bottom')
                if (this.checkLeft(indexCell + 1, rowActual - 1) && this.findForm((indexCell + 1) - 1, form, grid)) console.log('OK left')
                if (this.checkRight(indexCell + 1, rowActual) && this.findForm((indexCell + 1) + 1, form, grid)) console.log('OK right')
                if (this.checkTopRight(indexCell + 1, rowActual) && this.findForm(((indexCell + 1) - 3) + 1, form, grid)) console.log('OK topright')
                if (this.checkTopLeft(indexCell + 1, rowActual - 1) && this.findForm(((indexCell + 1) - 3) - 1, form, grid)) console.log('OK topleft')
                if (this.checkBottomRight(indexCell + 1, rowActual) && this.findForm((indexCell + 1) + (3 + 1), form, grid)) console.log('OK bottomright')
                if (this.checkBottomLeft(indexCell + 1, rowActual - 1) && this.findForm((indexCell + 1) + (3 - 1), form, grid)) console.log('OK bottomleft')
            }
            countCell++
        // return joueur gagnant
        }
    }
}
