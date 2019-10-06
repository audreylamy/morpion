import React, { useContext } from "react"
import { WrapperCell, WrapperSign } from "./style"

const Cell = ({index, cell, onclick}) => {

    const [mouseEnter, setMouseEnter] = React.useState(false)

    const handleClick = (index) => {
        onclick(index)
    }

    if (cell.form == null){
        return  <WrapperCell 
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => setMouseEnter(true)}
                    onMouseLeave={() => setMouseEnter(false)}
                    mouseEnter={mouseEnter}
                ></WrapperCell>
    }
    else {
        return (
            <WrapperCell 
                onClick={() => handleClick(index)}
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}
                mouseEnter={mouseEnter}
            >
                <WrapperSign>
                    { cell.form === "cross" ? "x" : "o" }
                </WrapperSign>
            </WrapperCell>
        )
    }
}

export default Cell
