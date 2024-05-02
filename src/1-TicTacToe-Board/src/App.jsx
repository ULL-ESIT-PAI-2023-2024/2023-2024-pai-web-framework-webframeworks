import './App.css'

/**
 * @brief constantes para los turnos
 */
const TURNS = {
  X: 'x',
  O: 'o'
}

/**
 * @brief Tablero
 */
const board = Array(9).fill(null)

/**
 * @brief Componente Square
 * @param {*} children parametro usado para rellenar el objeto
 * @param {*} updateBoard llamada a función para actualizar el tablero
 * @param {*} index posición del cuadrado en el tablero
 * @returns 
 */
const Square = ({children, updateBoard, index}) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
}

/**
 * @brief Función principal del programa la cual despliega todo el HTML
 */
export default function App() {
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index}>
                {index}
              </Square>
            )
          })
        }
      </section>
    </main>
  )
}
