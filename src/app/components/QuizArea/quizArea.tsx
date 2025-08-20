import { IQuizSet } from "@/interfaces/interfaces";
import { ReactElement } from "react";


interface IQuizArea {
    gameQuiz: IQuizSet[],
    step: number,
    answer: boolean,
    onClick: (s: number) => void
}

const QuizArea = ({ answer, step, gameQuiz, onClick }: IQuizArea): ReactElement => {
    return (
        <div>
            <h3>{gameQuiz[step].question}</h3>

            <ul>
                {gameQuiz && gameQuiz[step].alternatives.map((item: string, index: number) =>
                    <li data-testid='alternative-item' className={`border border-white  text-center flex items-center justify-center ${!answer ? 'idle' : index === gameQuiz[step].answer ? 'correct' : 'wrong'}`} key={index}>
                        <button disabled={answer} onClick={() => onClick(index)}>{item}</button>
                    </li>
                )}
            </ul>

        </div>
    )
}


export default QuizArea;