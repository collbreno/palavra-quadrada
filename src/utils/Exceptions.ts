export class WordNotInList extends Error {
    constructor() {
        super('Palavra não reconhecida')
        Object.setPrototypeOf(this, WordNotInList.prototype)
    }
}

export class InvalidWordLength extends Error {
    constructor() {
        super('Somente palavras de 5 letras')
        Object.setPrototypeOf(this, InvalidWordLength.prototype)
    }
}