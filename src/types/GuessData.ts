import validWords from "@/assets/validWords";
import { InvalidWordLength, WordNotInList } from "@/utils/Exceptions";

class GuessData {
    _typedLetters: string[];

    constructor() {
        this._typedLetters = [];
        for (let i = 0; i < 5; i++) {
            this._typedLetters.push('')
        }
    }

    get letters(): string[] {
        return this._typedLetters;
    }

    get typedWord(): string {
        return this._typedLetters.reduce((acc, cur) => acc+cur, '');
    }

    get typedWordLength(): number {
        return this.typedWord.length;
    }

    removeLetter(): void {
        if (this.typedWordLength > 0) {
            this._typedLetters[this.typedWordLength-1] = '';
        }
    }

    addLetter(letter: string): void {
        if (this.typedWordLength < 5) {
            this._typedLetters[this.typedWordLength] = letter;
        }
    }

    submit(): string {
        if (this.typedWordLength < 5) {
            throw new InvalidWordLength();
        }
        if (!validWords.includes(this.typedWord)) {
            throw new WordNotInList();
        }
        return this.typedWord;
    }

    clear() {
        for (let i = 0; i < 5; i++) {
            this._typedLetters[i] = '';
        }
    }

}

export default GuessData