import { IQuizSet } from "@/interfaces/interfaces";
import { ReactElement } from "react";

interface INextBtn {
    answer: boolean,
    step: number,
    gameQuiz: IQuizSet[],
    onClick: () => void
}

const NextBtn = ({ answer, step, gameQuiz, onClick }: INextBtn): ReactElement => {
    return (
        <button className="disabled:cursor-not-allowed cursor-pointer disabled:bg-white disabled:text-black bg-gray-400 text-black p-3 px-5 justify-self-end" disabled={!answer} onClick={onClick}>{step === gameQuiz.length - 1 ? 'See result' : 'Next'}</button>
    )
}

export default NextBtn;