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
            <h3 className="pb-4">{gameQuiz[step].question}</h3>

            <div>
                {gameQuiz && gameQuiz[step].alternatives.map((item: string, index: number) =>
                    <div data-testid='alternative-item' className={`text-center flex items-center justify-center mt-4 w-full ${!answer ? 'idle' : index === gameQuiz[step].answer ? 'correct' : 'wrong'}`} key={index}>
                        <button className="w-full p-4" disabled={answer} onClick={() => onClick(index)}>{item}</button>
                    </div>
                )}
            </div>

        </div>
    )
}


export default QuizArea;