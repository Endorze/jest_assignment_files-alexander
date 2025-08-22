import { IResult } from "@/interfaces/interfaces";
import { ReactElement } from "react";

const Result = ({ rightAnswers, amountOfAnswers, onClick }: IResult): ReactElement => {
    return (
        <div data-testid='result' className="flex flex-col gap-6">
            <p className="">{rightAnswers} of {amountOfAnswers} right answers!</p>
            <button className="p-4 cursor-pointer bg-orange-400" onClick={onClick}>Play again</button>
        </div>

    )
}

export default Result;