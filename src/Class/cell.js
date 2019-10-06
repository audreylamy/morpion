export class Cell {
    
    constructor(clic, form, player) {
        this.clic = clic// true or false
        this.form = form// cross or round or null
        this.player = player// one or two or null
    }

    static emptyCell() {
        return new Cell(false, null, null);
    }

    static withCross(){
        return new Cell(true, 'cross', 1);
    }

    static withRound() {
        return new Cell(true, 'round', 2);
    }

    get _clic() {
        return this.clic
    }

    get status() {
        if (this._clic) {
            return 'touched';
        }
        return 'untouched';
    }
}