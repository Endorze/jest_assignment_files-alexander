'use client'
import { useState } from "react";
import CreatePlayer from "./components/CreatePlayer/createPlayer";
import GameBoard from "./components/GameBoard/gameBoard";

 const Home = () =>  {
  const [playerName, setPlayerName] = useState<string>('')

  const handleSetPName = (inputValue: string) => setPlayerName(inputValue);

  return (
    <div className="flex flex-col h-screen">
      {!playerName ? <CreatePlayer setPlayer={handleSetPName} /> : <GameBoard player={playerName} />}
    </div>
  );
}

export default Home;