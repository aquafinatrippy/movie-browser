import React, {FC} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import './category.scss'
import {getMoviesByGenre} from "../../features/movies/MoviesSlice";


export const Category: FC = () => {
    const dispatch = useDispatch()
    const genres = useSelector((state: RootState) => {
        return state?.movies?.genres
    })

    const changeCategory = (genre: number) => (e: any) => {
        e.preventDefault()
        dispatch(getMoviesByGenre({id: genre}))
    }


    return(
        <div className="category">
            <div className="category--list">
                <div className="category--list--item">
                    <div>All genres</div>
                </div>
                {
                    genres?.slice(0, 4).map(genre => (
                        <div key={genre.id} className="category--list--item" onClick={changeCategory(genre.id)}>
                            <div>{genre.name}</div>
                        </div>
                    ))
                }
                <div className="dropdown">
                    <div className="category--list--item">More</div>
                    <div className="dropdown-content">
                        {
                            genres?.slice(4).map(genre => (
                                    <a key={genre.id} onClick={changeCategory(genre.id)} href="/#">{genre.name}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}