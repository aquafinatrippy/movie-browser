import React, {FC} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import './category.scss'
import {getMoviesByGenre, getMoviesPopular} from "../../features/movies/MoviesSlice";


export const Category: FC = () => {
    const dispatch = useDispatch()
    const genres = useSelector((state: RootState) => {
        return state?.movies?.genres
    })
    const activeLink = useSelector((state:RootState)=> {
        return state.movies.currentLocation
    })

    const changeCategory = (genre: number, name: string | undefined) => (e: any) => {
        e.preventDefault()
        if(genre === 13371998){
            dispatch(getMoviesPopular())
        }else{
            dispatch(getMoviesByGenre({id: genre, name}))
        }

    }


    return(
        <div className="category">
            <div className="category--list">
                <div className={activeLink !== "Popular" ? "category--list--item" : "category--list--item active"} onClick={changeCategory(13371998, "Popular")}>
                    <div>All genres</div>
                </div>
                {
                    genres?.slice(0, 4).map(genre => (
                        <div key={genre.id} className={activeLink !== genre.name ? "category--list--item" : "category--list--item active"} onClick={changeCategory(genre.id, genre.name)}>
                            <div>{genre.name}</div>
                        </div>
                    ))
                }
                <div className="dropdown">
                    <div className="category--list--item">More</div>
                    <div className="dropdown-content">
                        {
                            genres?.slice(4).map(genre => (
                                    <a key={genre.id} className={activeLink !== genre.name ? "" : "dropdown-active"} onClick={changeCategory(genre.id, genre.name)} href="/#">{genre.name}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}