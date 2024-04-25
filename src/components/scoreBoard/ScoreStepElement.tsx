import { useState } from "react";
import { ScoreStep } from "../../models/ScoreStep";

export const ScoreStepElement = (props: ScoreStep) => {
    let [isActive, setIsActive] = useState(false);

    return(
        <div key={crypto.randomUUID()} className={isActive ? "active" : ""}>
            {props.text}    
        </div>
    );

    function test(): void{
        setIsActive(true)
    }
}