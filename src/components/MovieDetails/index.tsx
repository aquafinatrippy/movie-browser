import React, {FC} from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import './moviedetails.scss'
import {Loading} from "../Loading";
import {Rating} from "../Rating";
import {FaPlayCircle} from "react-icons/fa";

export const MovieDetails: FC = () => {
    const movieDetails = useSelector((state: RootState) => {
        return state?.movies?.movieDetails
    })

    const calculateRating = (rating: number | undefined) => {
        if (rating) {
            const fixed = parseInt(rating.toFixed());
            return fixed.toString()
        }
    }


    return (
        <div className="movie--details">
            <div className="movie--content">
                {Object.keys(movieDetails).length === 0 ? (<Loading/> ) : (
                    <>
                        <div className="move--info">
                            <h1>{movieDetails?.title}</h1>
                            <Rating rating={calculateRating(movieDetails?.vote_average)}/>

                            <p>{movieDetails?.overview}</p>
                            <div className="movie--genres">
                                {movieDetails?.genres?.map(genre => (
                                    <span key={genre.id}> #{genre.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className="movie--trailer" onClick={() => window.open(`https://www.youtube.com/watch?v=${movieDetails?.videos?.results[0]?.key}`, '_blank')}>

                            <img alt={movieDetails?.title}
                                 src={`https://image.tmdb.org/t/p/w500/${movieDetails?.backdrop_path}`}/>
                                 <div className="fade"/>
                            <div className="hover--play-btn">
                                <FaPlayCircle/>
                            </div>
                        </div>
                    </>
                )}
            </div>


        </div>
    )
}