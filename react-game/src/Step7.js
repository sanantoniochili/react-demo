
// To collect data from multiple children, or to have two child 
// components communicate with each other, declare the shared state 
// in their parent component instead. The parent component can 
// pass that state back down to the children via props. 
// This keeps the child components in sync with each other and with their parent.

import { useState } from 'react';

function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {

    // Pass a copy, do not mutate the original
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  // We pass the event handler as a prop.
  // What if the handler accepts arguments?

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
