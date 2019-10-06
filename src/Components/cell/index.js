import React from "react"
import { WrapperCell, WrapperSign } from "./style"

const Cell = ({index, cell, onclick}) => {

    const [mouseEnter, setMouseEnter] = React.useState(false)

    const handleClick = (index) => {
        onclick(index)
    }

    if (cell.form === null){
        return  <WrapperCell 
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => setMouseEnter(true)}
                    onMouseLeave={() => setMouseEnter(false)}
                    mouseEnter={mouseEnter}
                ></WrapperCell>
    }
    else if (cell.clic === false) {
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
    } else {
        return (
            <WrapperCell>
                <WrapperSign>
                    { cell.form === "cross" ? "x" : "o" }
                </WrapperSign>
            </WrapperCell>
        )
    }
}

export default Cell
