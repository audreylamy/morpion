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
}
