import LetterResult from './LetterResult';

class LetterData {
    _letter: string;
    _result: LetterResult;

    constructor(letter: string, result: LetterResult) {
        this._letter = letter;
        this._result = result;
    }

    get letter() {
        return this._letter;
    } 

    get result() {
        return this._result;
    }



}

export default LetterData