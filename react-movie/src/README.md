# Practical examples 
You can use https://nextleap.app/online-compiler/reactjs-programming for quick online testing.

## Example 1

### [App.js](examples/Example1.js)
Create your first React.js application showing a webpage with a header and a footer. The header should contain a logo and a link.
```
export default function App() {
    return (
        // Create a parent object
        // Create a header object that will contain a logo and a link
                // Add an image with an alternate text
                // Hyperlink goes here
                    Learn React
       // Create a footer object 
    )
}
```
<br />

## Example 2
Create your first external component *Header* to import to the application.

### [App.js](examples/Example2.js)
```
import React from 'react';

// Import your first component

export default function App() {
    
  return(
      <h1>This tag here should be a component instead</h1>
  );
  
}
```

### [Header.js](examples/Header.js)
```
// Create your header component here

// Components are written using the PascalCase e.g "MyFirstComponent"
// Make sure you are exporting the component

// The content of the component should render:
<h1>I am a component</h1>
```
<br />


## Example 3
Create a component with a state and initialise the latter. 

### [App.js](examples/Example3.js)
```
import React from 'react';
import Books from '../src/Books.js'

// Render a book list component with memory

export default function App() {
  return (
    ...
  );
}
```

### [Books.js](examples/Books.js)
```
import React, { useState } from 'react';

// Remember to use the useState hook to create your state.
// Initialize your state with a list of 3(!) book titles as strings.

export default function Books() {

  // Define your state here using useState.
  return (
    <div>
      {/* Use the map function to render your list of books within a <ul>. */}
      <h1>Books list goes here</h1>
    </div>
  );
}
```
<br />

## Example 4
Import two components:
- A simple list of movies 
- The number of movies fetched from a file; fetching the information should be executed as a React.js side effect.

### [App.js](examples/Example4.js)
```
import React, { useState, useEffect } from 'react';
import '../App.css'
import MovieInfo from './MovieSimple';

export default function App() {

    return ( 
        // Display a list of a few movies
        // Display the number of movies in the "movies.json" file
    );
}
```


### [MovieSimple.js](examples/MovieSimple.js)
```
import React, { useState, useEffect } from 'react';

export default function MovieInfo() {
    return (
        <div>
            // Create a "SimpleList" component with title "Movie List"
            // Get the number of movies in "movies.json"
        </div>
    );
}

function SimpleList(...) {
    
    // Call useState to create a "movies" state
    // Call useEffect to set the "movies" state

    return (
        <div>
            // Add a title
            // Add a list of movies
        </div>
    );
}

function LoadMovies() {
    
    // Call useState to create a "movies" state
    // Fetch data from "movies.json" 
    // Use the data to set the "movies" state

}
```
<br />

## Example 5
Create a page displaying a grid of movie cards. The movie cards should be buttins that show the movie's information when clicked (appearance depends largely on the CSS file imported).

### [App.js](examples/Example5.js)
```
import React, { useState, useEffect } from 'react';
import '../App.css'
import MovieGrid from './MovieGrid';

export default function App() {

    return ( 
        // Create a grid of buttons that 
        // display a movie's name when clicked
    );
}
```

### [MovieGrid.js](examples/MovieGrid.js)
```
import React, { useState, useEffect } from 'react';

export default function MovieGrid() {
    
    // Call useState to create a "movies" state
    // Fetch data from "movies.json" 
    // Use the data to set the "movies" state

    return (
      // Map movie info to MovieCards
    );
}
```

### [MovieCard.js](examples/MovieCard.js)
```
import React from 'react';

export default function MovieCard(...) {
    return (
        // Create buttons with every movie's image which display the movie info (title, genre and rating) when clicked
    );
}
```
<br />


# CREATE-REACT-APP limitations
The *create-react-app* build setup is [getting deprecated](https://react.dev/blog/2025/02/14/sunsetting-create-react-app). Some of the reasons are listed below:

## Routing
```
import {useState} from 'react';

import Home from './Home';
import Dashboard from './Dashboard';

export default function App() {
  // ❌ Routing in state does not create URLs
  const [route, setRoute] = useState('home');
  return (
    <div>
      {route === 'home' && <Home />}
      {route === 'dashboard' && <Dashboard />}
    </div>
  )
}
```

## Data fetching
```
export default function Dashboard() {
  const [data, setData] = useState(null);

  // ❌ Fetching data in a component causes network waterfalls
  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  )
}
```

## Code splitting

Your app is shipped as a single bundle:

```
- bundle.js    75kb
```

But for ideal performance, you should “split” your code into separate bundles so the user only needs to download what they need. This decreases the time the user needs to wait to load your app, by only downloading the code they need to see the page they are on.

```
- core.js      25kb
- home.js      25kb
- dashboard.js 25kb
```