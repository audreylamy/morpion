export class Cell {
    
    constructor(clic, form, player) {
        this.clic = false // true or false
        this.form = null // cross or round or null
        this.player = null // one or two or null
    }

    static withCross(){
        return new Cell(true, 'cross', 1);
    }

    static withoutRound() {
        return new Cell(true, 'round', 2);
    }
}