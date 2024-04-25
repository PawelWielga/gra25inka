import { Question } from "../../models/Question";
import { AnswerButton } from "../answerButton/AnswerButton";

export const QuestionContainer = (props: Question) => {
    let shuffled = shuffleNumbers([0, 1, 2, 3]);

    return(
        <div>
            {props.author}
            {props.text}
            <div>
                <AnswerButton id={props.answers[shuffled[0]].id} text={props.answers[shuffled[0]].text} />
                <AnswerButton id={props.answers[shuffled[1]].id} text={props.answers[shuffled[1]].text} />
                <AnswerButton id={props.answers[shuffled[2]].id} text={props.answers[shuffled[2]].text} />
                <AnswerButton id={props.answers[shuffled[3]].id} text={props.answers[shuffled[3]].text} />
            </div>
        </div>
    );
}

function shuffleNumbers(array: number[]): number[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}