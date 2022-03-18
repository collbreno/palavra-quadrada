import { removeAccents } from "@/utils/RemoveAccents";
import { setCharAt } from "@/utils/WordUtils";

class WordData {
    readonly correctWord: string;
    greenLetters: string[];
    yellowLetters: string[];

    constructor(correctWord: string) {
        this.correctWord = correctWord;
        this.yellowLetters = [];
        this.greenLetters = [];
        for (let i = 0; i < 5; i++) {
            this.greenLetters.push('')
        }
    }

    get isCorrect(): boolean {
        return this.greenLetters.every(x => x != '')
    }

    submitGuess(guess: string) {
        let aux = this.correctWord;
        for (let i = 0; i < 5; i++) {
            if (removeAccents(aux[i]) == removeAccents(guess[i]) 
                || removeAccents(this.greenLetters[i]) == removeAccents(aux[i])) {
                this.greenLetters[i] = aux[i];
                aux = setCharAt(aux, '*', i);
            }
        }

        const newYellowLetters: string[] = [];
        const allLeters = [...this.yellowLetters, ...guess.split('')]
        for (let i = 0; i < allLeters.length; i++) {
            const letter = removeAccents(allLeters[i]);
            if (!newYellowLetters.includes(letter) && removeAccents(aux).includes(letter)) {
                newYellowLetters.push(letter)
            }
        }
        this.yellowLetters = newYellowLetters;
    }
}

export default WordData