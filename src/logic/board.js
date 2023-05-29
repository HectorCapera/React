import { WINNER_COMBOS } from '../components/constantes.js'

export const checkWinner = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras
    //Para ver si x u O ganó

    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
        // si no hay ganador 

    }
    return null
}

export const checkEndGame = (newBoard) => {
    // revisamos si hay un empate
    // si no hay más espacios vacíos
    // en el tablero
    return newBoard.every((square) => square !== null)
}