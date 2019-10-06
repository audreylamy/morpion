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
                var winner = 0
                if (numCross === 3 || numRound === 3)
                    winner = grid.checkWinner(grid.cell, index, player)
                console.log("Winner", winner)
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

    return (
        <GameContext.Provider value={{grid, updateCellStatus, player, setPlayer, cross, setCross, round, setRound}}>
            {props.children}
        </GameContext.Provider>
    )
}