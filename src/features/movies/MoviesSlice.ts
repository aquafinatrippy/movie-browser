import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {genre, Movies} from "../models";
import axios from "axios";


const initialState: Movies = {
    isFetching: true,
    error:  '',
    movies: [],
    genres: [],
    movieDetails: {}
};

export const getMoviesByGenre = createAsyncThunk(
    'movies/getMoviesByGenre',
    async ({id}: genre, thunkAPI) => {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=e90e5900c785cc9c251518d316e79f31&with_genres=${id}`)
        if(res.status === 200) return res
        return thunkAPI.rejectWithValue(res)
    }
)

export const getMovieDetails = createAsyncThunk(
    'movies/getMovieDetails',
    async ({id}: genre, thunkAPI) => {
        const res = await axios.get(`http://api.themoviedb.org/3/movie/${id}?api_key=e90e5900c785cc9c251518d316e79f31&append_to_response=videos`)
        if(res.status === 200) return res
        return thunkAPI.rejectWithValue(res)
    }
)

export const getMoviesPopular = createAsyncThunk(
    'movies/getMoviesPopular',
    async (arg: void, thunkAPI) => {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e90e5900c785cc9c251518d316e79f31")
        if (res.status === 200) return res
        return thunkAPI.rejectWithValue(res)
    }
)

export const getGenres = createAsyncThunk(
    'movies/getGenres',
    async (arg: void, thunkAPI) => {
        const res = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=e90e5900c785cc9c251518d316e79f31")
        if (res.status === 200) return res
        return thunkAPI.rejectWithValue(res)
    }
)


export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: {
        [getMoviesPopular.fulfilled.type]: (state, {payload}) => {
            state.isFetching = false
            state.movies = payload.data.results
        },
        [getMoviesPopular.rejected.type]: (state) => {
            state.isFetching = true
            state.error = "Error "
        },
        [getMoviesPopular.pending.type]: (state) => {
            state.isFetching = true
        },
        [getGenres.pending.type]: (state) =>{
          state.isFetching = true
        },
        [getGenres.fulfilled.type]: (state, {payload}) => {
            state.isFetching = false
            state.genres = payload.data.genres
        },
        [getGenres.rejected.type]: (state) => {
            state.isFetching = true
            state.error = "Error "
        },
        [getMoviesByGenre.pending.type]: (state) => {
            state.isFetching = true
        },
        [getMoviesByGenre.rejected.type]: (state) => {
            state.error = "error occured"
        },
        [getMoviesByGenre.fulfilled.type]: (state, {payload}) => {
            state.isFetching = false
            state.movies = payload.data.results
        },
        [getMovieDetails.rejected.type]: (state) => {
            state.error = "error occured"
        },
        [getMovieDetails.fulfilled.type]: (state, {payload}) => {
            state.isFetching = false
            state.movieDetails = payload.data
        }
    }
})

export const MoviesReducer = moviesSlice.reducer