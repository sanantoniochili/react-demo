// Hooks are functions that let you “hook into” React state 
// and lifecycle features from function components. 
// Hooks don’t work inside classes — they let you use React without classes.

import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

// Check dev tools!!

export default function Board() {
    return (
      <>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </>
    );
  }

// Need to check for winner -- moving state up!