import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {genre, Movies} from "../models";
import axios from "axios";


const initialState: Movies = {
    isFetching: true,
    error: '',
    movies: [],
    genres: [],
    movieDetails: {},
    currentLocation: "Popular",
    detailsDisplay: false
};

export const getMoviesByGenre = createAsyncThunk(
    'movies/getMoviesByGenre',
    async ({id, name}: genre, thunkAPI) => {
        try {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=e90e5900c785cc9c251518d316e79f31&with_genres=${id}`)
        if (res.status === 200) return {data: res, location: name}
        }catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)

        }
    }
)

export const getMovieDetails = createAsyncThunk(
    'movies/getMovieDetails',
    async ({id, name}: genre, thunkAPI) => {
        try {
        const res = await axios.get(`http://api.themoviedb.org/3/movie/${id}?api_key=e90e5900c785cc9c251518d316e79f31&append_to_response=videos`)
        if (res.status === 200) return res
        }catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)

        }
    }
)

export const searchMovies = createAsyncThunk(
    'movies/searchMovies',
    async ({name}: { name: string }, thunkAPI) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e90e5900c785cc9c251518d316e79f31&language=en-US&query=${name}&page=1`)
            if (res.status === 200) return res
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

export const getMoviesPopular = createAsyncThunk(
    'movies/getMoviesPopular',
    async (arg: void, thunkAPI) => {
        try {
            const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e90e5900c785cc9c251518d316e79f31")
            if (res.status === 200) return res
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }


    }
)

export const getGenres = createAsyncThunk(
    'movies/getGenres',
    async (arg: void, thunkAPI) => {
        try {
            const res = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=e90e5900c785cc9c251518d316e79f31")
            if (res.status === 200) return res
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
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
            state.currentLocation = "Popular"
            state.detailsDisplay = false
        },
        [getMoviesPopular.rejected.type]: (state, {payload}) => {
            state.isFetching = true
            state.error = payload.status_message
        },
        [getMoviesPopular.pending.type]: (state) => {
            state.isFetching = true
        },
        [getGenres.pending.type]: (state) => {
            state.isFetching = true
        },
        [getGenres.fulfilled.type]: (state, {payload}) => {
            state.isFetching = false
            state.genres = payload.data.genres
            state.error = ''
        },
        [getGenres.rejected.type]: (state, {payload}) => {
            state.isFetching = true
            state.error = payload.status_message
        },
        [getMoviesByGenre.pending.type]: (state) => {
            state.isFetching = true
        },
        [getMoviesByGenre.rejected.type]: (state, {payload}) => {
            state.error = payload.status_message
        },
        [getMoviesByGenre.fulfilled.type]: (state, {payload}) => {
            state.currentLocation = payload.location
            state.isFetching = false
            state.movies = payload.data.data.results
            state.detailsDisplay = false
        },
        [getMovieDetails.rejected.type]: (state, {payload}) => {
            state.error = payload.status_message
        },
        [getMovieDetails.fulfilled.type]: (state, {payload}) => {
            state.isFetching = false
            state.movieDetails = payload.data
            state.detailsDisplay = true
        },
        [searchMovies.fulfilled.type]: (state, {payload}) => {
            state.isFetching = false
            state.movies = payload.data.results
            state.detailsDisplay = false
            state.currentLocation = ""
        },
        [searchMovies.rejected.type]: (state, {payload}) => {
            state.isFetching = true
            state.error = payload.status_message
        },
        [searchMovies.pending.type]: (state) => {
            state.isFetching = true
        },
    }
})

export const MoviesReducer = moviesSlice.reducer