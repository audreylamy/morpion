import React, { createContext, useState } from "react";
import { Grid } from "../Domains/grid"

const initialContext = {
    grid: Grid.generateGrid,
};

export const GameContext = createContext({
    initialContext
});

export const GameContextProvider = (props) => {

    const [grid, setGrid] = useState(initialContext.grid.generateGrid)
    console.log(grid)

    return (
        <GameContext.Provider>
            {props.children}
        </GameContext.Provider>
    )
}