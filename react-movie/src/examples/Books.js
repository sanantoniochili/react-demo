import React, { useState } from 'react';

// Remember to use the useState hook to create your state.
// Initialize your state with a list of 3(!) book titles as strings.

export default function Books() {
  // Define your state here using useState.
  const [books, setBooks] = useState(
      ['book1','book2','book3'])
  const booklist = books.map(
      (book) => <li>{ book }</li>);

  return (
    <div>
      {/* Use the map function to render your list of books within a <ul>. */}
      <h1>Books list goes here</h1>
      <ul>{ booklist }</ul>
    </div>
  );
}
