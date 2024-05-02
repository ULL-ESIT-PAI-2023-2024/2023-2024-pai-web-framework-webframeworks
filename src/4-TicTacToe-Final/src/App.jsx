import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx' 
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'

/**
 * @brief Función principal de la aplicación
 */
export default function App() {
  {// un estado es un valor que cada vez que cambie, renderiza de nuevo el tablero
   // useState crea automaticamente el setBoard para llamarlo y actualizar su valor
  }
  const [board, setBoard] = useState(Array(9).fill(null))

  // establecer el orden de los turnos
  const [turn, setTurn] = useState(TURNS.X)

  // null no hay ganador y false hay un empate
  const [winner, setWinner] = useState(null)

  /**
   * @brief reinicia el juego
   */
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  /**
   * @brief Función que actualiza el tablero
   * @param {*} index 
   * @returns 
   */
  const updateBoard = (index) => {
    // no actualizar si ya hay un valor en la casilla
    if (board[index] || winner) return

    // Si se trabaja sobre board en vez de newBoard, se muta el estado y no se renderiza
    // el tablero. Es por eso que se crea un nuevo array con 
    // los valores de board y se trata board como inmutable
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // revisamos si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      // actualiza el estado de winner pero de manera asincrona
      // lo que significa que no bloquea la ejecución del código posterior
      setWinner(newWinner)
      //alert(`Ganó ${newWinner}`)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {
          board.map((square, index) => {
            {
              // Al objeto Square se le pasa la función sin ejecutar ya que lo que queremos
              // es que se renderice cuando el usuario interactue con el tablero
            }
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {
        winner !== null && (
          <section className="winner">
            <div className='text'>
              <h2>
                { winner === false ? 'Tie' : 'Win:' }
              </h2>

              <header className='win'>
                { winner && <Square>{winner}</Square> }
              </header>

              <footer>
                <button onClick={resetGame}>Reset Game</button>
              </footer>
            </div>
          </section>
          )
      }
    </main>
  )
}
