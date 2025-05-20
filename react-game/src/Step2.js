// React components need to return a single JSX element 
// so placing one button next to another doesn't work.

// We can wrap them using *Fragments* (<> and </>)

export default function Board() {
    return (
      <>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
        </div>
        <div className="board-row">
          <button className="square">4</button>
          <button className="square">5</button>
          <button className="square">6</button>
        </div>
        <div className="board-row">
          <button className="square">7</button>
          <button className="square">8</button>
          <button className="square">9</button>
        </div>
      </>
    );
  }

// Each square needs to have its own properties (e.g. memory, value).
// Let's declare each square as a component.