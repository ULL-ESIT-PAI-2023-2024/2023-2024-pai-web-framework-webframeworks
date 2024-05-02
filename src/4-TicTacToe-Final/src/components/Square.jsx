
/**
 * @brief Componente Square
 * @param {*} children parametro usado para rellenar el objeto
 * @param {*} isSelected opción usada para saber el turno de cada jugador
 * @param {*} updateBoard llamada a función para actualizar el tablero
 * @param {*} index posición del cuadrado en el tablero
 * @returns 
 */
export const Square = ({children, isSelected, updateBoard, index}) => {
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