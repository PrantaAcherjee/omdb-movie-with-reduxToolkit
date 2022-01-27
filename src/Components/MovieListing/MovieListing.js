import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from './../MovieCard/MovieCard';
import { getAllShows } from './../../features/movies/movieSlice';

const MovieListing = () => {
    const movies=useSelector(getAllMovies);
    const shows=useSelector(getAllShows);
    // console.log(movies)
    let renderMovies,renderShows='';
    
    renderMovies=movies.Response ==='True'?( 
        movies.Search.map((movie,index)=>(
            <MovieCard key={index} movie={movie}></MovieCard>
        ))
     ):(<div>
        {movies.Error}
        </div>);
    renderShows=shows.Response ==='True'?( 
        shows.Search.map((movie,index)=>(
            <MovieCard key={index} movie={movie}></MovieCard>
        ))
     ):(<div>
        {shows.Error}
        </div>);
    return (
        <div> 
            <div>
            {renderMovies}
            </div>          
            <div>
            {renderShows}
            </div>          
        </div>
    );
};

export default MovieListing;