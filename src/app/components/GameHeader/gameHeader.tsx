import { ReactElement } from "react";

const GameHeader = ({ player }: { player: string }): ReactElement => {

    return (
        <header className="flex justify-between bg-white text-black p-2 font-bold">
            <h3>☕Coffee Quiz</h3>
            <p>Player: <span>{player}</span></p>
        </header>
    )
}

export default GameHeader;