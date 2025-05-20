import React, { useState } from 'react';

export default function MovieCard({ movie }) {
    const [showInfo, setShowInfo] = useState(false);

    const handleClick = () => {
        setShowInfo(prev => !prev); // Toggle info visibility
    };

    return (
        // Create buttons with every movie's image 
        <button key={movie.id} className='movie-card' onClick={handleClick}>
            <img src={`images/${movie.image}`} alt={movie.title} />
            
            {/* which display the movie info (title, genre and rating) when clicked */}
            {
            showInfo && (
                <div className='movie-card-info'>
                    <h3 className='movie-card-title'>{movie.title}</h3>
                    <p className='movie-card-genre'>{movie.genre}</p>
                    <p className='movie-card-rating'>{movie.rating}</p>
                </div>
            )
            }
        </button>
    );
}
