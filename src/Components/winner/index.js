import React from "react"
import { WrapperWinner } from "./style"

const Winner = ({grid}) => {

	if (grid.winner === null)
		return <WrapperWinner></WrapperWinner>
	if (grid.winner === 1) {
		return (
			<WrapperWinner>
				PLAYER 1 WINNER
				PLAYER 2 DEFEAT
			</WrapperWinner>
		)
	}
	if (grid.winner === 2) {
		return (
			<WrapperWinner>
				PLAYER 2 WINNER
				PLAYER 1 DEFEAT
			</WrapperWinner>
		)
	}
}

export default Winner