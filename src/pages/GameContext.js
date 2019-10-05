import React, { createContext, useState } from "react";
import { Grid } from "../Domains/grid"

const initialContext = {
    grid: Grid.generateGrid(),
};

export const GameContext = createContext({
    initialContext
});

export const GameContextProvider = (props) => {

    const [grid, setGrid] = useState(initialContext.grid)
    console.log(grid)

    return (
        <GameContext.Provider value={{grid}}>
            {props.children}
        </GameContext.Provider>
    )
}