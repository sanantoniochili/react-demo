function Square({ value }) {

  // We declare an event handler
  function handleClick() {
    console.log('clicked!');
  }

  return (
    <button
      className="square"
      // The event is the button click
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

// Other event handler examples:
// onClick: Triggers when an element is clicked.
// onChange: Triggers when the value of an input field changes.
// onSubmit: Triggers when a form is submitted.
// onKeyDown: Triggers when a key is pressed down.

// Custom event handler:
// useEffect(() => {
//   function handleScroll(e) {
//     console.log(window.scrollX, window.scrollY);
//   }
//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);

export default function Board() {
    return (
      <>
        <div className="board-row">
          <Square value="1" />
          <Square value="2" />
          <Square value="3" />
        </div>
        <div className="board-row">
          <Square value="4" />
          <Square value="5" />
          <Square value="6" />
        </div>
        <div className="board-row">
          <Square value="7" />
          <Square value="8" />
          <Square value="9" />
        </div>
      </>
    );
  }

// Need to remember actions