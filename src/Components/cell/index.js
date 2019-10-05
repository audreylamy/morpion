import React, { useContext } from "react"
import { WrapperCell } from "./style"

const Cell = ({index, cell, onclick}) => {

    const handleClick = (index) => {
        onclick(index)
    }

    return (
        <WrapperCell onClick={() => handleClick(index)}>
        
        </WrapperCell>
    )
}

export default Cell
