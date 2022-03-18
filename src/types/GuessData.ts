import validWords from "@/assets/validWords";
import { InvalidWordLength, WordNotInList } from "@/utils/Exceptions";
import { removeAccents } from "@/utils/RemoveAccents";

class GuessData {
    letters: string[];

    constructor() {
        this.letters = [];
        for (let i = 0; i < 5; i++) {
            this.letters.push('')
        }
    }

    get typedWord(): string {
        return this.letters.reduce((acc, cur) => acc+cur, '');
    }

    get length(): number {
        return this.typedWord.length;
    }

    removeLetter(): void {
        if (this.length > 0) {
            this.letters[this.length-1] = '';
        }
    }

    addLetter(letter: string): void {
        if (this.length < 5) {
            this.letters[this.length] = letter;
        }
    }

    submit(): string {
        if (this.length < 5) {
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
            this.letters[i] = '';
        }
    }

    private setTypedWord(word: string) {
        const list = word.split('');
        for (let i = 0; i < 5; i++) {
            this.letters[i] = list[i];
        }
    }

}

export default GuessData