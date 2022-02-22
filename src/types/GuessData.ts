import validateWord from "@/utils/WordValidator";
import LetterData from "./LetterData";
import LetterResult from "./LetterResult";

class GuessData {
    _letters: LetterData[];

    constructor() {
        this._letters = [];
        for (let i = 0; i < 5; i++) {
            this._letters.push(
                new LetterData('', LetterResult.None)
            )
        }
    }

    get letters(): LetterData[] {
        return this._letters;
    }

    get word(): string {
        return this._letters.reduce((acc, cur) => acc+cur.letter, '');
    }

    get typedWordLength(): number {
        return this.word.length;
    }

    get isCorrect(): boolean {
        return this._letters
            .every(x => x.result == LetterResult.CorrectSpot);
    }

    get isValidated(): boolean {
        return this._letters
            .every(x => x.result != LetterResult.None 
                && x.result != LetterResult.Typing);
    }

    removeLetter(): void {
        if (this.typedWordLength > 0) {
            this._letters[this.typedWordLength-1] = new LetterData('', LetterResult.Typing);
        }
    }

    addLetter(letter: string): void {
        if (this.typedWordLength < 5) {
            this._letters[this.typedWordLength] = new LetterData(letter, LetterResult.Typing);
        }
    }

    submit(correctWord: string) {
        this._letters = validateWord(this.word, correctWord);
    }

}

export default GuessData