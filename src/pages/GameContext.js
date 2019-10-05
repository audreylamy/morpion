import React, { createContext, useState } from "react";
import { Grid } from "../Class/grid"

const initialContext = {
    grid: Grid.generateGrid()
};

const useStateCellsGrid = (initGrid) => {
    const [grid, setGrid] = useState(initGrid)

    return [grid, 
            (index, number) => {
                var newGrid = grid.sendActionCell(index, number);
                setGrid(newGrid)
            }, setGrid]
}

export const GameContext = createContext({
    initialContext
});

export const GameContextProvider = (props) => {

    const [grid, updateCellStatus] = useStateCellsGrid(initialContext.grid)
    const [player, setPlayer] = useState(1)

    return (
        <GameContext.Provider value={{grid, updateCellStatus, player, setPlayer}}>
            {props.children}
        </GameContext.Provider>
    )
}