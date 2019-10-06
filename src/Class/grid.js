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
        return new Grid(3, cells, null)
    }
    
    constructor(column, cell, winner) {
        this.column = column
        this.cell = cell
        this.winner = winner
    }

    sendActionCell(index, player) {
        const cells = this.cell

        if (player === 1)
            cells[index] = Cell.withCross()
        else if (player === 2)
            cells[index] = Cell.withRound()

        return new Grid(3, cells, null)
    }

    checkTop(index) {
        if (index - 3 > 0) return true
    }

    checkBottom(index) {
        if (index + 3 < 9) return true
    }

    checkLeft(index, rowActual) {
        if (index - 1 > rowActual * 3 ) return true
    }

    checkRight(index, rowActual) {
        if (index + 1 <= (rowActual * 3)) return true
    }

    checkTopRight(index, rowActual) {
        if (this.checkTop(index) && this.checkRight(index, rowActual)) return true
    }

    checkTopLeft(index, rowActual) {
        if (this.checkTop(index) && this.checkLeft(index, rowActual)) return true
    }

    checkBottomRight(index, rowActual) {
        if (this.checkBottom(index) && this.checkRight(index, rowActual)) return true
    }

    checkBottomLeft(index, rowActual) {
        if (this.checkBottom(index) && this.checkLeft(index, rowActual)) return true
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
        const cells = this.cell
        var array = []
        var form = player === 1 ? "cross" : "round"
        var countCell = 1
        var countCell1 = 1
        var rowActual = 1 // actual line

        for (let cell of grid) {

            if (countCell >= (3 * rowActual)) { rowActual++ }

            if (countCell === indexCell) {
                if (this.checkTop(indexCell + 1) && this.findForm((indexCell + 1) - 3, form, grid)) array.push(['top', (indexCell + 1) - 3, -3])
                if (this.checkBottom(indexCell + 1) && this.findForm((indexCell + 1) + 3, form, grid)) array.push(['bottom', (indexCell + 1) + 3, 3])
                if (this.checkLeft(indexCell + 1, rowActual - 1) && this.findForm((indexCell + 1) - 1, form, grid)) array.push(['left', (indexCell + 1) - 1, -1])
                if (this.checkRight(indexCell + 1, rowActual) && this.findForm((indexCell + 1) + 1, form, grid)) array.push(['right', (indexCell + 1) + 1, 1])
                if (this.checkTopRight(indexCell + 1, rowActual) && this.findForm(((indexCell + 1) - 3) + 1, form, grid)) array.push(['topRight', ((indexCell + 1) - 3) + 1, (-3 + 1)])
                if (this.checkTopLeft(indexCell + 1, rowActual - 1) && this.findForm(((indexCell + 1) - 3) - 1, form, grid)) array.push(['topLeft', ((indexCell + 1) - 3) - 1, (-3 - 1)])
                if (this.checkBottomRight(indexCell + 1, rowActual) && this.findForm((indexCell + 1) + (3 + 1), form, grid)) array.push(['bottomRight', (indexCell + 1) + (3 + 1), 3 + 1])
                if (this.checkBottomLeft(indexCell + 1, rowActual - 1) && this.findForm((indexCell + 1) + (3 - 1), form, grid)) array.push(['bottomLeft', (indexCell + 1) + (3 - 1), 3 - 1])
            }
            countCell++
        }
        if (array.length === 2 && ((array[0][0] === 'top' && array[1][0] === 'bottom') || (array[0][0] === 'left' && array[1][0] === 'right') || (array[0][0] === 'topRight' && array[1][0] === 'bottomLeft') || (array[0][0] === 'topLeft' && array[1][0] === 'bottomRight'))) {
            return new Grid(3, cells, player)
        } 
        else if (array.length === 1) {
            for (let cell of grid) {
                if (countCell1 === array[0][1]) {
                    if (this.findForm(array[0][1] + array[0][2], form, grid)) return new Grid(3, cells, player)
                }
                countCell1++
            }
        } else new Grid(3, cells, null)
    }
}
