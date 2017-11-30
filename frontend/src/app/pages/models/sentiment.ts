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


export class Google{
    data:{
        entities: Array<
            {
                name: string;
                type: string;
                metadata: {
                    mid: string;
                    wikipedia_url: string;
                },
                salience: number;
                mentions: Array<
                    {
                        text: {
                            content:string
                            beginOffset: string;
                        },
                        type: string;
                        sentiment: {
                            magnitude: number;
                            score: number;
                        }
                    }
                >;
                sentiment: {
                    magnitude:number;
                    score: number;
                }
            }
        >;
        language: string
    }
}
