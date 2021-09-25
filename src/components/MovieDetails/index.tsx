import React, {FC} from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import './moviedetails.scss'

export const MovieDetails: FC = () => {
    const movieDetails = useSelector((state: RootState) => {
        return state?.movies?.movieDetails
    })


    if (movieDetails) {
        console.log(movieDetails)
    }


    return (
        <div className="movie--details">
            <div className="move--info">
                <h1>{movieDetails?.title}</h1>
                <p>{movieDetails?.vote_average}</p>
              <p>{movieDetails?.overview}</p>
                <div className="movie--genres">
                    {movieDetails?.genres?.map(genre => (
                        <span>#{genre.name}</span>
                    ))}
                </div>
            </div>
            <div className="movie--trailer">
                <img alt={movieDetails?.title} src={`https://image.tmdb.org/t/p/w200/${movieDetails?.poster_path}`}/>
            </div>
        </div>
    )
}