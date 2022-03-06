import '@/assets/colors';
import { correctSpotColor, keyboardBtnColor, notInSquareColor, wrongSpotColor } from '@/assets/colors';
import { removeAccents } from '@/utils/RemoveAccents';

interface IUpdateParams {
    guess: string,
    greenLetters: string[],
    yellowLetters: string[],
}

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
            return keyboardBtnColor;
        }
        switch (this.map.get(letter)) {
            case LetterRanking.NotTriedYet:
                return keyboardBtnColor;
            case LetterRanking.NotInSquare:
                return notInSquareColor;
            case LetterRanking.AllPlacedCorrectly:
                return correctSpotColor;
            case LetterRanking.UnplacedLeft:
                return wrongSpotColor;
        }
    }

    update(param: IUpdateParams) {
        const guess = removeAccents(param.guess);
        const greenLetters = param.greenLetters.map(x => removeAccents(x));
        const yellowLetters = param.yellowLetters;

        for (const letter of guess) {
            if (!greenLetters.includes(letter) && !yellowLetters.includes(letter)) {
                this.map.set(letter, LetterRanking.NotInSquare);
            }
        }

        for (const letter of greenLetters) {
            if (!yellowLetters.includes(letter)) {
                this.map.set(letter, LetterRanking.AllPlacedCorrectly);
            }
        }

        for (const letter of yellowLetters) {
            this.map.set(letter, LetterRanking.UnplacedLeft);
        }
    }
}

export default KeyboardData;