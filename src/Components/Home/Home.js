import React from 'react';
import { useEffect } from 'react';
import MovieListing from './../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

    const Home = () => {
    const dispatch=useDispatch();

      useEffect(()=>{       
      dispatch(fetchAsyncMovies());   
      dispatch(fetchAsyncShows());   
    },[dispatch])
    return (
        <div>
          <MovieListing>
          </MovieListing> 
        </div>
    );
};

export default Home;