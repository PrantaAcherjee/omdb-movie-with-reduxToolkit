import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
const {movie}=props;   
return (
        <div>
            <Link to={`/movie/${movie.imdbID}`}>
            <div>
            <img src={movie.Poster} alt="" />
            <h5>{movie.Title}</h5>
            <h5>{movie.Year}</h5>
            </div>
            </Link>
        </div>
    );
};

export default MovieCard;