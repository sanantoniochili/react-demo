import React, { useState, useEffect } from 'react';

export default function MovieInfo() {
    return (
        <div>
            {/* Create a "SimpleList" component with title "Movie List" */}
            <SimpleList title="Movie List" />
            
            {/* Get the number of movies in "movies.json" */}
            <LoadMovies />
        </div>
    );
}

function SimpleList({ title }) {

    // Call useState to create a "movies" state
    const [movies, setMovies] = useState([]);

    // Call useEffect to set the "movies" state
    useEffect(() => {
        const movieNames = ["movie1", "movie2", "movie3"];
        setMovies(movieNames);
    }, []);

    return (
        <div>
            {/* Add a title */}
            <h3>
                { title } info ({ movies.length }):
            </h3>
            {/* Add a list of movies */}
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </div>
    );
}

function LoadMovies() {

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
        <div>
            <h3>Large movie database: </h3>{movies.length}
        </div>
    );
}