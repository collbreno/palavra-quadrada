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

    submitGuess(guess: string) {
        let aux = this.correctWord;
        for (let i = 0; i < 5; i++) {
            if (aux[i] == guess[i]) {
                setCharAt(aux, '*', i);
            }
        }

        let newYellowLetters: string[] = [];
        for (let letter in [...this._yellowLetters, ...guess.split('')]) {
            if (!newYellowLetters.includes(letter) && aux.includes(letter)) {
                newYellowLetters.push(letter)
            }
        }
    }
}