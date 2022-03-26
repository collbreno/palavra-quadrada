import { letterScaleAnimDuration } from "@/assets/constants";
import { sleep } from "@/utils/Sleep";
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
    gameNumber: string;

    constructor(correctWords: string[], gameNumber: string) {
        this.guesses = [];
        this.gameNumber = gameNumber;
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

    private setLettersScaleInRow(rowIndex: number, scale: number) {
        for (let i = 0; i < 6; i++) {
            this.lettersScale[rowIndex][i] = scale;
        }
    }

    async submit(): Promise<string | undefined> {
        if (this.isFinished) return;
        const guess = this.guessData.submit();
        for (let i = 0; i < 5; i++) {
            this.setLettersScaleInRow(i, 1.05);
            await sleep(letterScaleAnimDuration);
            this.words[i].submitGuess(guess);
            this.setLettersScaleInRow(i, 1)
            await sleep(letterScaleAnimDuration);
        }
        this.onGuessSubmitted(guess);
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
        this.updateTriedNeeded();
    }

    private updateTriedNeeded() {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (!this.triesNeeded[i][j] && this.words[i].greenLetters[j] != '') {
                    this.triesNeeded[i][j] = this.guesses.length;
                }
            }
        }
    }

    batchSubmit(guesses: string[]) {
        for (const guess of guesses) {
            for (const wordData of this.words) {
                wordData.submitGuess(guess);
            }
            this.guesses.push(guess);
            this.updateTriedNeeded();
        }
        
        this.keyboardData.update({
            guess: guesses.reduce((acc, cur) => acc+cur, ''),
            greenLetters: this.words.flatMap(x => x.greenLetters),
            yellowLetters: this.words.flatMap(x => x.yellowLetters),
        });
    }
}

export default SquareController;