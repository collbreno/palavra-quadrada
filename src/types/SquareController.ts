import ColorRanking from "./ColorRanking";
import GuessData from "./GuessData";
import KeyboardData from "./KeyboardData";
import WordData from "./WordData";

class SquareController {
    words: WordData[];
    guesses: string[];
    guessData: GuessData;
    lettersScale: number[][];
    triesNeeded: number[][];
    keyboardData: KeyboardData;
    colorRanking: ColorRanking;

    constructor(correctWords: string[]) {
        this.guesses = [];
        this.guessData = new GuessData();
        this.words = [];
        this.lettersScale = [];
        this.triesNeeded = [];
        this.keyboardData = new KeyboardData();
        this.colorRanking = new ColorRanking();
        for (let i = 0; i < 5; i++) {
            this.words.push(
                new WordData(correctWords[i])
            )
            this.triesNeeded[i] = [];
            this.lettersScale[i] = [];
            for (let j = 0; j < 6; j++) {
                this.lettersScale[i][j] = 1;
            }
        }
    }

    get isFinished(): boolean {
        return this.isCorrect || this.guesses.length >= this.colorRanking.maxAllowed;
    }

    get isCorrect(): boolean {
        return this.words.every(x => x.isCorrect)
    }

    addLetter(letter: string): void {
        if (this.isFinished) return;
            this.guessData.addLetter(letter);
    }

    removeLetter(): void { 
        if (this.isFinished) return;
        this.guessData.removeLetter();
    }

    submit(): string | undefined {
        if (this.isFinished) return;
        const guess = this.guessData.submit();
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                for (let j = 0; j < 6; j++) {
                    this.lettersScale[i][j] = 1.05;
                }
                this.words[i].submitGuess(guess);
                setTimeout(() => {
                    for (let j = 0; j < 6; j++) {
                        this.lettersScale[i][j] = 1.0;
                    }
                }, 100);
            }, 100*i*2);
        }
        setTimeout(() => {
            this.onGuessSubmitted(guess);
        }, 100*2*5);
        return guess;
    }

    private onGuessSubmitted(guess: string) {
        this.guesses.push(guess)
        this.keyboardData.update({
            greenLetters: this.words.flatMap(x => x.greenLetters),
            yellowLetters: this.words.flatMap(x => x.yellowLetters),
            guess: guess,
        });
        this.guessData.clear();
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (!this.triesNeeded[i][j] && this.words[i].greenLetters[j] != '') {
                    this.triesNeeded[i][j] = this.guesses.length;
                }
            }
        }
        console.log(this.triesNeeded);
    }

    batchSubmit(guesses: string[]) {
        this.guesses = this.guesses.concat(guesses);
        for (const guess of guesses) {
            for (const wordData of this.words) {
                wordData.submitGuess(guess);
            }
        }
        
        this.keyboardData.update({
            guess: guesses.reduce((acc, cur) => acc+cur, ''),
            greenLetters: this.words.flatMap(x => x.greenLetters),
            yellowLetters: this.words.flatMap(x => x.yellowLetters),
        });
    }
}

export default SquareController;