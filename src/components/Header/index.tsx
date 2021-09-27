import React, {FC, useState} from 'react'
import {Category} from "../Category";
import './header.scss'
import { FaSistrix } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {searchMovies} from "../../features/movies/MoviesSlice";


export const Header: FC = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState("")
    const location = useSelector((state: RootState) => {
        return state?.movies?.currentLocation
    })

    const handleSearch = () => {
        dispatch(searchMovies({name: query}))
    }

    return(
        <div className="header">
            <div className="header--top">
                <div className="header--title">
                    <h1>
                        {location} movies
                    </h1>
                </div>
                <div className="header--search">
                    <div className="header--search-container">
                        <input type="text" placeholder="Search.." name="search" onChange={(e) => setQuery(e.target.value)} />
                            <button onClick={() => handleSearch()} ><FaSistrix/></button>

                    </div>
                </div>
            </div>
            <Category/>
        </div>
    )
}