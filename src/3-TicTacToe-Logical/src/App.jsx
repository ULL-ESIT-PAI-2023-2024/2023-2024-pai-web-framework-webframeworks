import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
  [0, 4, 8], [2, 4, 6]             // diagonal
]

export default function App() {
  {// un estado es un valor que cada vez que cambie, renderiza de nuevo el tablero
   // useState crea automaticamente el setBoard para llamarlo y actualizar su valor
  }
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  // establecer el orden de los turnos
  const [turn, setTurn] = useState(TURNS.X)

  // null no hay ganador y false hay un empate
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [index1, index2, index3] = combo
      if (boardToCheck[index1] &&   // 0 -> x u o
          boardToCheck[index1] === boardToCheck[index2] &&  // 0 === 1
          boardToCheck[index1] === boardToCheck[index3]
        ) {  // 0 === 2
        return boardToCheck[index1] // x u o
      }
    }
    return null
  }

  // revisa si el tablero está lleno
  // si no hay ganador y el tablero está lleno, hay un empate
  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

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
                { winner === false ? 'Empate' : 'Ganó:' }
              </h2>

              <header className='win'>
                { winner && <Square>{winner}</Square> }
              </header>
            </div>
          </section>
          )
      }
    </main>
  )
}
