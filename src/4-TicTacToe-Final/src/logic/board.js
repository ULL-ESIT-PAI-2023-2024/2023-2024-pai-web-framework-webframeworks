import { WINNER_COMBOS } from '../constants.js'

/**
 * @brief Revisa todas las combinaciones 
 * ganadoras para ver si X u O ganó
 */
export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [index1, index2, index3] = combo
    if (boardToCheck[index1] &&   // 0 -> x u o
        boardToCheck[index1] === boardToCheck[index2] &&  // 0 === 1
        boardToCheck[index1] === boardToCheck[index3]     // 0 === 2
      ) {  
      return boardToCheck[index1] // x u o
    }
  }
  return null
} 

/**
   * @brief revisa si el tablero está lleno
   * si no hay ganador y el tablero está lleno, hay un empate
   * @param {*} newBoard 
   * @returns 
   */
export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}