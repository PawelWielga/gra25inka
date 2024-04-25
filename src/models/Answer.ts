
export class Answer {
  id: number;
  text: string;

  constructor(id = 0, text = "Odpowiedź") {
    this.id = id;
    this.text = text;
  }
}
