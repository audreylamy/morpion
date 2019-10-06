import React, { useContext } from "react"
import Cell from "../cell/index"
import Winner from "../winner/index"
import { GameContext } from "../../pages/GameContext"
import { WrapperGrid, WrapperWinner } from "./style"

const Grid = () => {

    const { grid, updateCellStatus, player, setPlayer, cross, setCross, round, setRound } = useContext(GameContext);

    const onClickCell = (index) => {
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
            <Winner grid={grid}/>
        </React.Fragment>
        
    )
}

export default Grid
