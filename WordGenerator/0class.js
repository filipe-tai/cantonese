let randomClass = class randomNumber {
    constructor(iLength = 0) {
        this.length = iLength
    }

    calculateValue() {
        let value = Math.round(Math.random() * (this.length - 1))
        return value
    }
}

module.exports = { randomClass }