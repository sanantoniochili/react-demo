// Let's create a React.js component yielding a button.

// A React.js component is defined as a function 
// (capital first letter) returning HTML script.

// To access the component from another script we need to 
// export is as default or named.

export default function Square() {
  return <button className="square">X</button>;
}

// Tic tac toe is played on a 3x3 table ==> we need more buttons!