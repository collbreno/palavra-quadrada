import GuessData from "./GuessData";
import WordData from "./WordData";

class SquareController {
    private _words: WordData[];
    private _guesses: string[];
    private _guessData: GuessData;

    constructor(correctWords: string[]) {
        this._guesses = [];
        this._guessData = new GuessData();
        this._words = [];
        for (let i = 0; i < 5; i++) {
            this._words.push(
                new WordData(correctWords[i])
            )
        }
    }

    get words(): WordData[] {
        return this._words;
    }

    get guesses(): string[] {
        return this._guesses;
    }

    get guessData(): GuessData {
        return this._guessData;
    }

    get isCorrect(): boolean {
        return this._words.every(x => x.isCorrect)
    }

    addLetter(letter: string): void {
        this._guessData.addLetter(letter);
    }

    removeLetter(): void {
        this._guessData.removeLetter();
    }

    submit(): void {
        const guess = this._guessData.submit();
        for (let i = 0; i < 5; i++) {
            this._words[i].submitGuess(guess);
        }
        this._guessData.clear();
    }
}

export default SquareController;