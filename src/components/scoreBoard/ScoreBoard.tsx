import { ScoreStepElement } from "./ScoreStepElement";

const scoreSteps: string[] = [
    "500",
    "1000",
    "2000",
    "5000",
    "10 000",
    "20 000",
    "40 000",
    "75 000",
    "125 000",
    "250 000",
    "500 000",
    "1 000 000"
]

const scoreBoardElements = scoreSteps.reverse().map((scoreStep) => {
    return (
        <ScoreStepElement key={crypto.randomUUID()} text={scoreStep}/>
    );
});

export const ScoreBoard = () => {
    

    return(
        <div>
            {scoreBoardElements}
        </div>
    );
}



