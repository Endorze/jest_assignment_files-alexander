'use client'
import { useState } from "react";
import CreatePlayer from "./components/CreatePlayer/createPlayer";

export default function Home() {
  const [player, setPlayer] = useState<string>('')

  const handleSetPlayer = (inputValue: string) => setPlayer(inputValue);

  //här ska en gameboard renderas, tex såhär?
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!player ? <CreatePlayer setPlayer={handleSetPlayer} /> : <GameBoard player={player} />}
    </div>
  );
}
