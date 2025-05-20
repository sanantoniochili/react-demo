import React, { useState, useEffect } from 'react';
import '../styles.css' // change to styles!!!
import MovieGrid from './MovieGrid';

export default function App() {

    return ( 
        // Create a grid of buttons that 
        // display a movie's name when clicked
        <MovieGrid />
    );
}