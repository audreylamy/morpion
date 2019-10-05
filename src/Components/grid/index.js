import React, { useContext } from "react"
import Cell from "../cell/index"
import { GameContext } from "../../pages/GameContext"
import { WrapperGrid } from "./style"

const Grid = () => {

    const { grid } = useContext(GameContext);
    console.log(grid)

    return (
        <React.Fragment>
            <WrapperGrid column={grid.column}>
                {
                    grid.cell.map((c, i) => {
                        return (
                            <Cell 
                                key={i}
                                cell={c}
                                column={grid.column}
                            />
                        )
                    })
                }
            </WrapperGrid>
        </React.Fragment>
        
    )
}

export default Grid
