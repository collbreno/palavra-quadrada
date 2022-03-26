import { LSKeys } from "@/assets/constants";
import LocalStats from "@/types/LocalStats";
import SquareController from "@/types/SquareController";
import { formatDate, isSameDate } from "@/utils/DateUtils";
import { getCorrectWordsFromServer, sendGuessesToFirestore } from "@/utils/Firebase";
import { v4 } from 'uuid'

class GameData {
    private _square: SquareController | undefined;
    localStats: LocalStats;

    constructor() {
        this.localStats = new LocalStats(localStorage, new Date());
    }

    get square(): SquareController {
        if (this._square)
            return this._square;
        else
            throw Error('Square was not initiated');
    }

    get isInitiated(): boolean {
        return this._square != undefined;
    }

    async initSquare() {
        if (this.isLocalStorageUpToDate(this.localStats.today)) {
            const correctWords = this.getCorrectWordsFromLS();
            const guesses = this.getGuessesFromLS();
            const gameNumber = this.getGameNumberFromLS();
            this._square = new SquareController(correctWords, gameNumber);
            if (guesses.length != 0) {
               this._square.batchSubmit(guesses);
            }
        }
        else {
            this.sendLastDayGuessesToServer();
            const document = await getCorrectWordsFromServer(this.localStats.today);
            if (document) {
                this.updateLocalStorage(this.localStats.today, document.correctWords, document.gameNumber);
                this._square = new SquareController(document.correctWords, document.gameNumber);
            }
            else {
                throw Error('Firebase returned undefined.');
            }
        }
    }

    private sendLastDayGuessesToServer() {
        const day = localStorage.getItem(LSKeys.day);
        const guesses = localStorage.getItem(LSKeys.guesses);
        const uid = localStorage.getItem(LSKeys.uid);
        if (day && guesses && uid) {
            sendGuessesToFirestore({
                date: new Date(day),
                guesses: JSON.parse(guesses),
                uid: uid,
            });
        }
    }

    private isLocalStorageUpToDate(today: Date) {
        const dayFromLS = localStorage.getItem(LSKeys.day);
        return dayFromLS 
            && isSameDate(new Date(dayFromLS), today)
            && localStorage.getItem(LSKeys.correctWords)
            && localStorage.getItem(LSKeys.gameNumber);
    }

    private updateLocalStorage(today: Date, correctWords: string[], gameNumber: string) {
        localStorage.setItem(LSKeys.day, formatDate(today));
        localStorage.setItem(LSKeys.correctWords, JSON.stringify(correctWords));
        localStorage.setItem(LSKeys.gameNumber, JSON.stringify(gameNumber));
        localStorage.removeItem(LSKeys.guesses);
        if (!localStorage.getItem(LSKeys.uid)){
            localStorage.setItem(LSKeys.uid, v4());
        }
    }

    private getCorrectWordsFromLS(): string[] {
        const str = localStorage.getItem(LSKeys.correctWords);
        if (str) {
            return JSON.parse(str);
        }
        else {
            throw Error('Local Storage does not have correct words.');
        }
    }

    private getGameNumberFromLS(): string {
        const str = localStorage.getItem(LSKeys.gameNumber);
        if (str) {
            return JSON.parse(str);
        }
        else {
            throw Error('Local Storage does not have correct words.');
        }
    }

    private getGuessesFromLS(): string[] {
        const str = localStorage.getItem(LSKeys.guesses);
        if (str) {
            return JSON.parse(str)
        }
        else {
            return [];
        }
    }

    private getUidFromLS(): string {
        const str = localStorage.getItem(LSKeys.uid);
        if (str) {
            return str;
        }
        else {
            throw Error('Local Storage does not have uid.');
        }
    }

    addLetter(letter: string) {
        this.square.addLetter(letter);
    }

    removeLetter() {
        this.square.removeLetter();
    }

    async submit() {
        const lastGuess = await this.square.submit();
        if (lastGuess) {
            localStorage.setItem(
                LSKeys.guesses,
                JSON.stringify(this.square.guesses)
            );
        }
        if (this.square.isFinished) {
            sendGuessesToFirestore({
                date: new Date(this.localStats.today),
                guesses: this.square.guesses,
                uid: this.getUidFromLS(),
            });
            if (this.square.isCorrect) {
                this.localStats.won(this.square.guesses.length);
            } else {
                this.localStats.lost();
            }
        }
    }
}

export default GameData