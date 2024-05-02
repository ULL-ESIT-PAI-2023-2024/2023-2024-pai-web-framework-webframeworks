import { useState } from 'react'
import './App.css'

/**
 * @brief constantes para los turnos
 */
const TURNS = {
  X: 'x',
  O: 'o'
}

/**
 * @brief Componente Square
 * @param {*} children parametro usado para rellenar el objeto
 * @param {*} isSelected opción usada para saber el turno de cada jugador
 * @param {*} updateBoard llamada a función para actualizar el tablero
 * @param {*} index posición del cuadrado en el tablero
 * @returns 
 */
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

/**
 * @brief Función principal del programa la cual despliega todo el HTML
 */
export default function App() {
  {// un estado es un valor que cada vez que cambie, renderiza de nuevo el tablero
   // useState crea automaticamente el setBoard para llamarlo y actualizar su valor
  }
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    // no actualizar si ya hay un valor en la casilla
    if (board[index]) return

    // Si se trabaja sobre board en vez de newBoard, se muta el estado y no se renderiza
    // el tablero. Es por eso que se crea un nuevo array con 
    // los valores de board y se trata board como inmutable
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            {
              // Al objeto Square se le pasa la función sin ejecutar ya que lo que queremos
              // es que se renderice cuando el usuario interactue con el tablero
            }
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
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
    </main>
  )
}
