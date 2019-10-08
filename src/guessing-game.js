class GuessingGame {
    constructor() {
        this.list = [];
    }

    setRange(min, max) {
        for (min; min <= max; min++) {
            this.list.push(min);
        }
    }

    guess() {
        return this.list[Math.floor(this.list.length/2)];
    }

    lower() {
        this.list = this.list.slice(0, Math.floor(this.list.length/2 + 1));
    }

    greater() {
        this.list = this.list.slice(Math.floor(this.list.length/2));
    }
}

module.exports = GuessingGame;
