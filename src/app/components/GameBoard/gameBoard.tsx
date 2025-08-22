import { gameQuiz } from "@/data/data";
import { ReactElement, useState } from "react";

import ProgressBar from "../ProgressBar/progressBar";
import QuizArea from "../QuizArea/quizArea";
import NextBtn from "../NextBtn/nextBtn";
import Result from "../Result/result";
import GameHeader from "../GameHeader/gameHeader";


const GameBoard = ({ player }: { player: string }): ReactElement => {

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
        <div role="main" className="flex flex-col bg-[var(--color-bg-main)] p-6 text-white max-w-[400px]">
            <GameHeader player={player} />
            {gameQuiz.length === step ?
                <Result rightAnswers={rightAnswers} amountOfAnswers={gameQuiz.length} onClick={playAgain} />
                :
                <div className="flex flex-col gap-6">
                    <ProgressBar step={step} gameQuiz={gameQuiz} />
                    <QuizArea answer={answer} step={step} onClick={saveAnswer} gameQuiz={gameQuiz} />
                    <NextBtn answer={answer} step={step} onClick={increaseStage} gameQuiz={gameQuiz} />
                </div>

            }
        </div>

    )
}

export default GameBoard;
