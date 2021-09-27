import React, {FC, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import './list.scss'
import {MovieDetails} from "../MovieDetails";
import {getMovieDetails} from "../../features/movies/MoviesSlice";
import {Loading} from "../Loading";
import {FaPlayCircle} from "react-icons/fa";


const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)
export const MoviesList: FC = () => {
    const dispatch = useDispatch()
    const myRef = useRef(null)
    const info = useSelector((state: RootState) => {
        return state.movies.detailsDisplay
    })
    const movies = useSelector((state: RootState) => {
        return state.movies.movies || []
    })
    const loading = useSelector((state: RootState) => {
        return state?.movies?.isFetching
    })

    const handleActivating = (nr: number) => {
        dispatch(getMovieDetails({id: nr}))
        scrollToRef(myRef)
    }


    return (
        <div className="movies" ref={myRef}>
            {info ? <MovieDetails/>
                : (<></>)}
            <div className="movies--container">
                <div className="movies--list">
                    {
                        loading ? (
                            <Loading/>
                        ) : (
                            movies?.map((movie, index) =>
                                (
                                    <>
                                        <div className="movies--item" key={index}
                                             onClick={() => handleActivating(movie.id)}>
                                            <img alt={movie.title}
                                                 src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`}/>
                                            <div className="hover--play-btn">
                                                <FaPlayCircle/>
                                            </div>
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