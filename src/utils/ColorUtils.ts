import LetterResult from "@/types/LetterResult";

export default function getColor(result: LetterResult) {
    switch (result) {
        case LetterResult.CorrectSpot:
            return '#388E3C';
        case LetterResult.WrongSpot:
            return '#FFAB00';
        case LetterResult.NotInWord:
            return '#000000';
        case LetterResult.Typing:
            return '#616161';
        case LetterResult.None:
            return '#212121';
    }
}