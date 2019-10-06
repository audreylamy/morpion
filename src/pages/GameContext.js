import React, { createContext, useState } from "react";
import { Grid } from "../Class/grid"

const initialContext = {
    grid: Grid.generateGrid()
};

const useStateCellsGrid = (initGrid) => {
    const [grid, setGrid] = useState(initGrid)

    return [grid, 
            (index, player, numCross, numRound) => {
                var newGrid = grid.sendActionCell(index, player);
                if (numCross === 3 || numRound === 3)
                    grid.checkWinner(index, player, numCross, numRound)
                console.log(newGrid)
                setGrid(newGrid)
            }, setGrid]
}

export const GameContext = createContext({
    initialContext
});

export const GameContextProvider = (props) => {

    const   [grid, updateCellStatus] = useStateCellsGrid(initialContext.grid),
            [player, setPlayer] = useState(1),
            [cross, setCross] = useState(0),
            [round, setRound] = useState(0)
    console.log(cross)

    return (
        <GameContext.Provider value={{grid, updateCellStatus, player, setPlayer, cross, setCross, round, setRound}}>
            {props.children}
        </GameContext.Provider>
    )
}