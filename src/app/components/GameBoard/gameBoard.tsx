import { gameQuiz } from "@/data/data";
import { ReactElement, useState } from "react";
import ProgressBar from "../ProgressBar/progressBar";

//För att testerna inte ska crasha så måste dessa importeras just nu
import QuizArea from "../QuizArea";
import NextBtn from "../NextBtn";
import Result from "../Result";
import GameHeader from "../GameHeader";


export const GameBoard = ({ player }: { player: string }): ReactElement => {
    const [step, setStep] = useState<number>(0);
    const [answer, setAnswer] = useState<boolean>(false);

    const [rightAnswers, setRightAnswers] = useState<number>(0);

    const saveAnswer = (answerOption: number): void => {
        if (answerOption === gameQuiz[step].answer) {
            setRightAnswers(rightAnswers + 1);
        }
        setAnswer(true);
    }
    const increaseStage = (): void => {
        setStep(step + 1);
        setAnswer(false);
    }
    const playAgain = (): void => {
        setStep(0);
        setAnswer(false);
        setRightAnswers(0);
    }

    return (
        <div>
            <GameHeader player={player} />
            {gameQuiz.length === step ?
                <Result rightAnswers={rightAnswers} amountOfAnswers={gameQuiz.length} onClick={playAgain} />
                :
                <>
                    <ProgressBar step={step} gameQuiz={gameQuiz} />
                    <QuizArea answer={answer} step={step} onClick={saveAnswer} gameQuiz={gameQuiz} />
                    <NextBtn answer={answer} step={step} onClick={increaseStage} gameQuiz={gameQuiz} />
                </>
            }
        </div>
    )
}
