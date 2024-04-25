export const AnswerButton = (props: AnswerButtonProps) => {

    return(
        <button onClick={ButtonClick}>
            {props.text}
        </button>
    );
}

function ButtonClick(){
    console.log("ButtonClick");
}

export class AnswerButtonProps {
    id: number;
    text: string;

    constructor(id = -1, text = "")
    {
        this.id = id;
        this.text = text;
    }
}