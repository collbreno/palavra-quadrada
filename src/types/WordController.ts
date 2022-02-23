import GuessData from "./GuessData";
import LetterResult from "./LetterResult";

class WordController {
    _guesses: GuessData[];
    readonly correctWord: string;

    constructor(correctWord: string) {
        this.correctWord = correctWord;
        this._guesses = [];
        for (let i = 0; i < 9; i++) {
            this._guesses.push(
                new GuessData()
            )
        }
        this._guesses[0].setResult(LetterResult.Typing)
    }

    get guesses(): GuessData[] {
        return this._guesses;
    }

    get current(): GuessData | null {
        return this.isFinished 
            ? null 
            : this._guesses.filter(x => !x.isValidated)[0] ?? null;
    }

    get isFinished(): boolean {
        return this._guesses[4].isValidated 
            || this._guesses.filter(x => x.isCorrect).length != 0;
    }

    addLetter(letter: string): void {
        if (!this.isFinished)
            this.current?.addLetter(letter);
    }

    removeLetter(): void {
        if (!this.isFinished)
            this.current?.removeLetter();
    }

    submit(): void {
        if (!this.isFinished){
            this.current?.submit(this.correctWord);
            this.current?.setResult(LetterResult.Typing)
        }
    }
}

export default WordController;