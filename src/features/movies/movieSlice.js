import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"; 
import movieApi from "../../Components/apis/movieApi";
import { APIkey } from './../../Components/apis/MovieApiKey';
 

export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async()=>{
    const movieText='Harry';
    const response=await movieApi.get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
    return response.data;
     
})
export const fetchAsyncShows=createAsyncThunk('movies/fetchAsyncShows',async()=>{
    const seriesText='Friends';
    const response=await movieApi.get(`?apikey=${APIkey}&s=${seriesText}&type=series`)
    return response.data;
     
})
export const fetchAsyncShowsDeitals=createAsyncThunk('movies/fetchAsyncShowsDetails',async(id)=>{    
    const response=await movieApi.get(`?apikey=${APIkey}&i=${id}&Plot=full`)
    return response.data;    
})
const initialState={
movies:{},
shows:{},
details:{},
};

const movieSlice=createSlice({
name:'movies',
initialState,
reducers:{
// we do not need it anymore
// addMovies:(state,{payload})=>{
// state.movies=payload 
// },
removeSelectedDetails:
(state)=>{
state.details={}
},
},
extraReducers:{
    [fetchAsyncMovies.pending]:()=>{
        console.log('pending here')
    },
    [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
        console.log('succeed here')
        return{...state,movies:payload}
    },
    [fetchAsyncMovies.rejected]:()=>{
        console.log('rejected')
    },
    [fetchAsyncShows.fulfilled]:(state,{payload})=>{
        console.log('succeed here')
        return{...state,shows:payload}
    },
    [fetchAsyncShowsDeitals.fulfilled]:(state,{payload})=>{
        console.log('succeed here')
        return{...state,details:payload}
    },
}
});
export const {removeSelectedDetails}=movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export const getAllDetails=(state)=>state.movies.details;
export default movieSlice.reducer;