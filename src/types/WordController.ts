import GuessData from "./GuessData";

interface WordController {
    guesses: GuessData[],
    correctWord: string,
}

export default WordController;