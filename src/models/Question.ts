import { Answer } from "./Answer";

export class Question {
    id : number;
    author: string;
    text: string;
    answers: Answer[];

    constructor(id = 0, author ="", text = "pytanie?", goodAnswer="dobra odpowiedź",
     wrongAnswer1= "zła odpowiedź", wrongAnswer2 = "zła odpowiedź", wrongAnswer3 = "zła odpowiedź") 
      {
        this.id = id;
        this.author = author;
        this.text = text;
        this.answers = [
          new Answer(0,goodAnswer),
          new Answer(1,wrongAnswer1),
          new Answer(2,wrongAnswer2),
          new Answer(3,wrongAnswer3),
        ];
      }
}

