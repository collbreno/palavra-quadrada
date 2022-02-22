import GuessData from "./GuessData";

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
    }

    get guesses(): GuessData[] {
        return this._guesses;
    }

    get current(): GuessData | null {
        return this._guesses.filter(x => !x.isValidated)[0] ?? null;
    }

    get isFinished(): boolean {
        return this.current == null;
    }

    addLetter(letter: string): void {
        this.current?.addLetter(letter);
    }

    removeLetter(): void {
        this.current?.removeLetter();
    }
}

export default WordController;