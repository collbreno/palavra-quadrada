import '@/assets/colors';
import { correctSpotColor, notGuessedYetColor, notInSquareColor, wrongSpotColor } from '@/assets/colors';

enum LetterRanking {
    NotTriedYet,
    NotInSquare,
    UnplacedLeft,
    AllPlacedCorrectly,
}


class KeyboardData {
    private map: Map<string, LetterRanking>;

    constructor() {
        this.map = new Map();
    }

    getColor(letter: string) {
        if (!this.map.has(letter)) {
            console.log('nao tem letra', letter, this.map)
            return notGuessedYetColor;
        }
        switch (this.map.get(letter)) {
            case LetterRanking.NotTriedYet:
                return notGuessedYetColor;
            case LetterRanking.NotInSquare:
                return notInSquareColor;
            case LetterRanking.AllPlacedCorrectly:
                return correctSpotColor;
            case LetterRanking.UnplacedLeft:
                return wrongSpotColor;
        }
    }

    updateNotInSquareLetters(letters: string[]) {
        for (const letter of letters) {
            if (!this.map.has(letter)) {
                this.map.set(letter, LetterRanking.NotInSquare);
            }
        }
    }

    updateGreenLetters(letters: string[]) {
        for (const letter of letters) {
            if (!this.map.has(letter)
                || this.map.get(letter) == LetterRanking.NotInSquare) {
                this.map.set(letter, LetterRanking.AllPlacedCorrectly);
            }
        }
    }

    updateYellowLetters(letters: string[]) {
        for (const letter of letters) {
            if (!this.map.has(letter)
                || this.map.get(letter) == LetterRanking.NotInSquare
                || this.map.get(letter) == LetterRanking.AllPlacedCorrectly) {
                this.map.set(letter, LetterRanking.UnplacedLeft);
            }
        }
    }
}

export default KeyboardData;