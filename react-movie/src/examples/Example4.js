import React, { useState, useEffect } from 'react';
import '../App.css'
import MovieInfo from './MovieSimple';

export default function App() {

    return ( 
        // Display a list of hardcoded movies
        // Display the number of movies in the "movies.json" file
        <MovieInfo />
    );
}