import React, { useContext } from "react"
import Cell from "../cell/index"
import { GameContext } from "../../pages/GameContext"
import { WrapperGrid } from "./style"

const Grid = () => {

    const { grid, updateCellStatus, player, setPlayer } = useContext(GameContext);

    const onClickCell = (index) => {
        updateCellStatus(index, player)
        setPlayer(player === 1 ? 2 : 1)
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
