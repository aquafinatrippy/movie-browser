import React, {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import './list.scss'
import {MovieDetails} from "../MovieDetails";
import {getMovieDetails} from "../../features/movies/MoviesSlice";

export const MoviesList: FC = () => {
    const dispatch = useDispatch()
    const [showInfo, setShowInfo] = useState(false)
    const movies = useSelector((state: RootState) => {
        return state.movies.movies || []
    })
    const loading = useSelector((state: RootState) => {
        return state?.movies?.isFetching
    })

    const handleActivating = (nr: number) => {
        setShowInfo(true)
        dispatch(getMovieDetails({id: nr}))
    }


    return (
        <div className="movies">
            {showInfo ? <MovieDetails/>
                : (<></>)}
            <div className="movies--container">
                <div className="movies--list">
                    {
                        loading ? (
                            <div>Loading...</div>
                        ) : (
                            movies?.map(movie =>
                                (
                                    <>
                                        <div className="movies--item" key={movie.id}
                                             onClick={() => handleActivating(movie.id)}>
                                            <img alt={movie.title} src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`}/>
                                        </div>
                                    </>
                                )
                            )
                        )
                    }
                </div>
            </div>

        </div>
    )
}