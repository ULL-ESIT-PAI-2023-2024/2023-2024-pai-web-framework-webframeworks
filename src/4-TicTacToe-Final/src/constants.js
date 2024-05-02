/**
 * Turnos que hay en el juego
 */
export const TURNS = {
  X: 'x',
  O: 'o'
}

/**
 * Todas las posibilidades de ganar en el 3 en raya
 */
export const WINNER_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
  [0, 4, 8], [2, 4, 6]             // diagonal
]