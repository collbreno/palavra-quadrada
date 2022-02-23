import validWords from "@/assets/validWords";
import LetterData from "@/types/LetterData";
import LetterResult from "@/types/LetterResult";
import { InvalidWordLength, WordNotInList } from "@/utils/Exceptions";

export default function validateWord(guess: string, correctWord: string): LetterData[] {
    if (guess.length != 5) {
        throw new InvalidWordLength();
    }
    else if (!validWords.includes(guess)) {
        throw new WordNotInList();
    }
    else if (guess == correctWord) {
        const array: LetterData[] = [];
        for (let i = 0; i < 5; i++) 
            array.push(new LetterData(guess[i], LetterResult.CorrectSpot));
        return array;
    }

    const array: LetterData[] = [];
    let aux = correctWord;

    // fill greens
    for (let i = 0; i < 5; i++) {
        if (guess[i] == aux[i]) {
            aux = _setCharAt(aux, '*', i);
            array[i] = new LetterData(guess[i], LetterResult.CorrectSpot);
          }
    }

    // fill yellow and black letters
    for (let i = 0; i < 5; i++) {
        if (!array[i]) {
            const indexOf = aux.indexOf(guess[i]);
            if (indexOf > -1) {
            aux = _setCharAt(aux, '*', indexOf);
            array[i] = new LetterData(guess[i], LetterResult.WrongSpot);
            } else {
            array[i] = new LetterData(guess[i], LetterResult.NotInWord);
            }
        }
    }

    return array;

}

function _setCharAt(str: string, chr: string, index: number): string {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}