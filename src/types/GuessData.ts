import validWords from "@/assets/validWords";
import { InvalidWordLength, WordNotInList } from "@/utils/Exceptions";
import { removeAccents } from "@/utils/RemoveAccents";

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
        const index = validWords.map(x => removeAccents(x)).indexOf(this.typedWord)
        if (index < 0) {
            throw new WordNotInList();
        }
        const validWord = validWords[index];
        this.setTypedWord(validWord);
        return validWord;
    }

    
    clear() {
        for (let i = 0; i < 5; i++) {
            this._typedLetters[i] = '';
        }
    }

    private setTypedWord(word: string) {
        const list = word.split('');
        for (let i = 0; i < 5; i++) {
            this._typedLetters[i] = list[i];
        }
    }

}

export default GuessData