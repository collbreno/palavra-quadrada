import LetterData from "./LetterData";
import LetterResult from "./LetterResult";

class GuessData {
    _letters: LetterData[];

    constructor() {
        this._letters = [];
        for (var i = 0; i < 9; i++) {
            this._letters.push(
                new LetterData('', LetterResult.None)
            )
        }
    }

    get letters(): LetterData[] {
        return this._letters;
    }

    get typedWordLength(): number {
        return this._letters
            .filter(x => x.letter.length != 0)
            .length;
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
            this._letters[this.typedWordLength] = new LetterData('', LetterResult.Typing);
        }
    }

    addLetter(letter: string): void {
        if (this.typedWordLength < 5) {
            this._letters[this.typedWordLength] = new LetterData(letter, LetterResult.Typing);
        }
    }


}

export default GuessData