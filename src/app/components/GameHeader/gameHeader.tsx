import { ReactElement } from "react";

const GameHeader = ({ player }: { player: string }): ReactElement => {
    
    return (
        <header>
            <h3>☕Coffee Quiz</h3>
            <p>Player: <span>{player}</span></p>
        </header>
    )
}

export default GameHeader;