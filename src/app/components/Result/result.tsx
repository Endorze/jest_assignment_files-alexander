import { IResult } from "@/interfaces/interfaces";
import { ReactElement } from "react";

const Result = ({ rightAnswers, amountOfAnswers, onClick }: IResult): ReactElement => {
    return (
        <div data-testid='result'>
            <p className="">{rightAnswers} of {amountOfAnswers} right answers!</p>
            <button className="p-3 px-5 cursor-pointer" onClick={onClick}>Play again</button>
        </div>

    )
}

export default Result;