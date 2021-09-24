import React, {FC, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import './list.scss'

export const MoviesList: FC = () => {
    const [showInfo, setShowInfo] = useState(false)
    const [active, setActive] = useState(0)
    const movies = useSelector((state: RootState) => {
        return state.movies.movies || []
    })
    const loading = useSelector((state: RootState) => {
        return state?.movies?.isFetching
    })

    const handleActivating = (nr: number) => {
        setShowInfo(true)
        setActive(nr)
    }


    return (
        <div className="movies">
            <div className="movies--container">
                <div className="movies--list">
                    {
                        loading ? (
                            <div>Loading...</div>
                        ) : (
                            movies?.map(movie =>
                                (
                                    <>

                                    <div className="movies--item" key={movie.id} onClick={() => handleActivating(movie.id)}>
                                        <img src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`}/>
                                    </div>
                                        {showInfo && movie.id === active ? (<div className="movies--active">x</div>): (<></>)}
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