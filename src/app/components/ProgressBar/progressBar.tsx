import { IProgressBar } from "@/interfaces/interfaces";
import { ReactElement } from "react";

const ProgressBar = ({ step, gameQuiz }: IProgressBar): ReactElement => {
    return (
        <div className="flex items-center justify-center gap-2 flex-col pt-4">
            <progress className="w-full" max={gameQuiz.length} value={step}></progress>
            <p>{step} / {gameQuiz.length}</p>
        </div>
    )
}

export default ProgressBar;