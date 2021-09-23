import React, {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";

export const MoviesList: FC = () => {
    const movies = useSelector((state: RootState) => {
        return state.movies.movies || []
    })
    const loading = useSelector((state: RootState) => {
        return state?.movies?.isFetching
    })


    return (
        <div className="movies">
            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                     movies?.map(movie =>
                        (
                            <div key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`}/>
                            </div>
                        )
                    )
                )

            }
        </div>
    )
}