import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncShowsDeitals, getAllDetails, removeSelectedDetails } from './../../features/movies/movieSlice';
import { Link } from 'react-router-dom';

const Moviedetails = () => {
const data=useSelector(getAllDetails)
const {imdbID}=useParams();
const dispatch=useDispatch();
useEffect(()=>{
dispatch(fetchAsyncShowsDeitals(imdbID))
return ()=>{
    dispatch(removeSelectedDetails())
}
},[dispatch,imdbID])

    return (
       
         <div> 
             {Object.keys(data).length===0?(
                 <div>Loading..........</div>
             ):(
                <>
                <h5>Title: {data.Title}</h5>
                <img src={data.Poster} alt="" />
                <p>Ratings: {data.imdbRating}</p>
                <p>imDB Votes: {data.imdbVotes}</p>
                <p>Runtime: {data.Runtime}</p>
                <p>Year: <small>{data.Year}</small></p>
                <Link to='/'>Go To Home</Link>
                </>
             )}
           
        </div>
       
       
    );
};

export default Moviedetails;