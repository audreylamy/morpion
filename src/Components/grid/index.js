import React, { useContext } from "react"
import { GameContext } from '../../pages/GameContext';

const Grid = () => {

    const { grid } = useContext(GameContext);
    console.log(grid)

    return (
        <React.Fragment>
            "hello"
        </React.Fragment>
        
    )
}

export default Grid
