export class OpenSourceCode {
    data: {
        neg: number;
        neu: number;
        pos: number;
    }
}

export class Sentence {
    sentence: string
}

export class Azure {
    data: Document
}


export class Document {
    documents: Array<Score>;
}

export class Score {
    id: number;
    score: number;
}

export class Watson {
    data: {
        usage: {
            text_units: number;
            text_characters: number;
            features: number;
        }
        sentiment: {
            document: {
                score: number;
                label: string;
            }
        }
    }
}