import GuessData from "./GuessData";
import WordData from "./WordData";

class SquareController {
    private _words: WordData[];
    guesses: string[];
    private _guessData: GuessData;
    lettersScale: number[][];

    constructor(correctWords: string[]) {
        this.guesses = [];
        this._guessData = new GuessData();
        this._words = [];
        this.lettersScale = [];
        for (let i = 0; i < 5; i++) {
            this._words.push(
                new WordData(correctWords[i])
            )
            this.lettersScale[i] = [];
            for (let j = 0; j < 6; j++) {
                this.lettersScale[i][j] = 1;
            }
        }
    }

    get words(): WordData[] {
        return this._words;
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
            setTimeout(() => {
                for (let j = 0; j < 6; j++) {
                    this.lettersScale[i][j] = 1.05;
                }
                this._words[i].submitGuess(guess);
                setTimeout(() => {
                    for (let j = 0; j < 6; j++) {
                        this.lettersScale[i][j] = 1.0;
                    }
                }, 100);
            }, 100*i*2);
        }
        setTimeout(() => {
            this.guesses.push(guess)
            this._guessData.clear();
        }, 100*2*5);
    }
}

export default SquareController;