'use client'
import { ReactElement, useState } from "react";

const CreatePlayer = ({ setPlayer }: { setPlayer: (s: string) => void }): ReactElement => {

    const [currentInput, setCurrentInput] = useState<string>("");

    return (
        <div data-testid='createPlayer' className="flex flex-col gap-4 bg-[var(--color-bg-main)] text-white px-12 py-12  shadow-2xl shadow-gray-500">

            <label htmlFor='name' className="tracking-wide text-2xl mb-3">Pick a name</label>
            <input id='name' className="bg-white text-gray-900 px-2 placeholder:text-gray-500 outline-none" type="text" placeholder="Your name" value={currentInput} onChange={(e) => setCurrentInput(e.target.value)}
                maxLength={15}></input>
                
            <button className="bg-[var(--color-btn-bg)] disabled:text-gray-500 disabled:bg-[var(--color-link)] cursor-pointer disabled:cursor-not-allowed py-4" disabled={currentInput.length < 3} onClick={() => setPlayer(currentInput)}>Start game</button>
        </div>
    )
}

export default CreatePlayer;