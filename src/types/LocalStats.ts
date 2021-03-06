import { LSKeys } from '@/assets/constants';
import { isOneDayAhead, isSameDate, onlyDate } from '@/utils/DateUtils';

interface LSContent {
    amountOfLosses: number,
    currentStreak: number,
    maxStreak: number,
    lastWon: Date | undefined,
    winDistribution: Array<[number, number]>,
}

class LocalStats {
    private _amountOfLosses: number;
    private _currentStreak: number;
    private _maxStreak: number;
    private _lastWon: Date | undefined;
    private _today: Date;
    winDistribution: Map<number, number>;
    private ls: Storage;

    constructor(localStorage: Storage, today: Date) {
        const fromLS = localStorage.getItem(LSKeys.localStats);
        if (fromLS) {
            const parsed = JSON.parse(fromLS) as LSContent;
            this._amountOfLosses = parsed.amountOfLosses;
            this._maxStreak = parsed.maxStreak;
            this.winDistribution = new Map(parsed.winDistribution);
            this._lastWon = parsed.lastWon;
            this.ls = localStorage;
            this._today = onlyDate(today);

            this._currentStreak = this.hasToResetCurrentStreak ? 0 : parsed.currentStreak;
        } 
        else {
            this._amountOfLosses = 0;
            this._currentStreak = 0;
            this._maxStreak = 0;
            this.winDistribution = new Map();
            this.ls = localStorage;
            this._today = onlyDate(today);
            for (let i = 5; i <= 15; i++) {
                this.winDistribution.set(i, 0);
            }
        }
    }

    get currentStreak() {
        return this._currentStreak;
    }    
    get maxStreak() {
        return this._maxStreak;
    }
    get lastWon() {
        return this._lastWon;
    }    

    get amountOfLosses() {
        return this._amountOfLosses;
    }

    get amountOfGames() {
        return this._amountOfLosses + this.amountOfWins;
    }

    get amountOfWins() {
        return Array.from(this.winDistribution.values()).reduce((acc, cur) => acc+cur, 0);
    }

    get today() {
        return this._today;   
    }

    private get hasToResetCurrentStreak(): boolean {
        return this.lastWon == undefined 
            || (!isSameDate(this.lastWon, this.today) && !isOneDayAhead(this.lastWon, this.today));
    }

    getAmountOfWins(amountOfGuesses: number) {
        return this.winDistribution.get(amountOfGuesses);
    }

    lost() {
        this._amountOfLosses += 1;
        this._currentStreak = 0;
        this.updateLS();
    }

    won(amountOfGuesses: number) {
        this.winDistribution.set(
            amountOfGuesses,
            this.winDistribution.get(amountOfGuesses)! + 1,
        );
        this._lastWon = this._today;
        this._currentStreak += 1;
        this._maxStreak = Math.max(this.currentStreak, this.maxStreak);
        this.updateLS();
    }

    private updateLS() {
        this.ls.setItem(LSKeys.localStats, JSON.stringify({ 
            amountOfLosses: this.amountOfLosses,
            currentStreak: this.currentStreak,
            lastWon: this.lastWon,
            maxStreak: this.maxStreak,
            winDistribution: Array.from(this.winDistribution),
        } as LSContent));
    }
}

export default LocalStats;