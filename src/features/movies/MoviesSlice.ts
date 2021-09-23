import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


const initialState = {
    isFetching: false,
    error:  '',
    movies: [],
    start: null,
    end: null
};

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async (arg: void, thunkAPI) => {
        const res = await fetch("")
        if (res.status === 200) return res
        return thunkAPI.rejectWithValue(res)
    }
)


export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: {
        [getMovies.fulfilled.type]: (state, {payload}) => {
            state.isFetching = false
            state.movies = payload.data
            state.start = payload.start
            state.end = payload.end
        },
        [getMovies.rejected.type]: (state) => {
            state.isFetching = true
            state.error = "Error "
        },
        [getMovies.pending.type]: (state) => {
            state.isFetching = true
        }
    }
})

export const MoviesReducer = moviesSlice.reducer