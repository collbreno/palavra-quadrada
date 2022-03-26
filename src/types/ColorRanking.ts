const greenEmoji = '🟩'
const yellowEmoji = '🟨'
const orangeEmoji = '🟧'
const blackEmoji = '⬛'

interface IGetShareTextParam {
    triesNeeded: number[][];
    gameUrl: string;
    gameNumber: string;
}

class ColorRanking {

    get maxAllowed(): number {
        return 15;
    }

    private emojiFromNumber(n: number): string {
        if (n < 6) {
            return greenEmoji;
        } 
        else if (n < 11) {
            return yellowEmoji;
        }
        else if (n < 16) {
            return orangeEmoji;
        }
        else {
            return blackEmoji;
        }
    }

    getBoardRanking(triesNeeded: number[][]): string {
        let text = '';
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                text += this.emojiFromNumber(triesNeeded[i][j]);
            }
            text += '\n';
        }
        return text;
    }

    private getMax(triesNeeded: number[][]): string {
        let max = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                max = Math.max(max, triesNeeded[i][j]);
            }
        }
        return isNaN(max) ? 'X' : max.toString();
    }

    getShareText(param: IGetShareTextParam): string {
        return `${param.gameUrl} #${param.gameNumber}: ${this.getMax(param.triesNeeded)}/${this.maxAllowed}\n`
         + `\n${this.getBoardRanking(param.triesNeeded)}\n`
         + `<6:${greenEmoji}  <11:${yellowEmoji}  <16:${orangeEmoji}`;
    }
}

export default ColorRanking;