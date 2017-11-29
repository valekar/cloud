export class OpenSourceCode{
    data:{
        neg:number;
        neu:number;
        pos:number;
    }
}

export class Sentence {
    sentence:string
}

export class Azure{
    data:Document
}


export class Document{
    documents:Array<Score>;
}

export class Score{
    id:number;
    score:number;
}