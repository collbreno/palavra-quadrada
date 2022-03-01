import { removeAccents } from "@/utils/RemoveAccents";
import { setCharAt } from "@/utils/WordUtils";

class WordData {
    readonly correctWord: string;
    _greenLetters: string[];
    _yellowLetters: string[];

    constructor(correctWord: string) {
        this.correctWord = correctWord;
        this._yellowLetters = [];
        this._greenLetters = [];
        for (let i = 0; i < 5; i++) {
            this._greenLetters.push('')
        }
    }

    get isCorrect(): boolean {
        return this._greenLetters.every(x => x != '')
    }

    get yellowLettersAsString(): string {
        return this._yellowLetters.reduce((acc, cur) => acc+''+cur, '');
    }

    submitGuess(guess: string) {
        let aux = this.correctWord;
        for (let i = 0; i < 5; i++) {
            if (removeAccents(aux[i]) == removeAccents(guess[i]) 
                || removeAccents(this._greenLetters[i]) == removeAccents(aux[i])) {
                this._greenLetters[i] = aux[i];
                aux = setCharAt(aux, '*', i);
            }
        }

        const newYellowLetters: string[] = [];
        const allLeters = [...this._yellowLetters, ...guess.split('')]
        for (let i = 0; i < allLeters.length; i++) {
            const letter = removeAccents(allLeters[i]);
            if (!newYellowLetters.includes(letter) && removeAccents(aux).includes(letter)) {
                newYellowLetters.push(letter)
            }
        }
        this._yellowLetters = newYellowLetters;
    }
}

export default WordData