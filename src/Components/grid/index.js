import React, { useContext } from "react"
import Cell from "../cell/index"
import { GameContext } from "../../pages/GameContext"
import { WrapperGrid } from "./style"

const Grid = () => {

    const { grid, updateCellStatus, player, setPlayer, cross, setCross, round, setRound } = useContext(GameContext);

    const onClickCell = (index) => {
        console.log(grid.cell[index])
        var numCross = cross
        var numRound = round
        player === 1 ? numCross = cross + 1 : numRound = round + 1
        updateCellStatus(index, player, numCross, numRound)
        setPlayer(player === 1 ? 2 : 1)
        player === 1 ? setCross(cross + 1) : setRound(round + 1)
        
    }

    return (
        <React.Fragment>
            <WrapperGrid column={grid.column}>
                {
                    grid.cell.map((c, i) => {
                        return (
                            <Cell 
                                key={i}
                                index={i}
                                cell={c}
                                onclick={(ev) => onClickCell(ev)}
                            />
                        )
                    })
                }
            </WrapperGrid>
        </React.Fragment>
        
    )
}

export default Grid
