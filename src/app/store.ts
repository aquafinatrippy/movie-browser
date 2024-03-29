import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {MoviesReducer} from "../features/movies/MoviesSlice";


export const store = configureStore({
    reducer: {
        movies: MoviesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
