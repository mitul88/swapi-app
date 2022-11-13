import { createContext, useContext, useState } from "react";


const CharacterContext = createContext()

export const CharacterProvider = ({children}) => {
    const [character, setCharacter] = useState(null)

    const retrieveCharacter = (charachter) => {
        setCharacter(charachter)
    }

    return (
        <CharacterContext.Provider value={{retrieveCharacter, character}}>
            {children}
        </CharacterContext.Provider>
    )
}

export const useCharacter = () => {
    return useContext(CharacterContext)
}