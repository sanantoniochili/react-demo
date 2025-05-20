import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

export default function MovieGrid() {

    // Call useState to create a "movies" state
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        // Fetch data from "movies.json" 
        fetch("movies.json")
        .then(response => response.json())
        // Use the data to set the "movies" state
        .then(data => setMovies(data));
        // check DevTools

    })

    return (
        <div className="movies-grid">

            {
                // Map movie info to MovieCards
                movies.map(movie => (
                    <MovieCard movie={ movie } key={ movie.id } />
                ))
            }

        </div>
    );
}