import React, {FC} from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import './category.scss'


export const Category: FC = () => {

    const genres = useSelector((state: RootState) => {
        return state?.movies?.genres
    })


    return(
        <div className="category">
            <div className="category--list">
                <div className="category--list--item">
                    <div>All genres</div>
                </div>
                {
                    genres?.slice(0, 4).map(genre => (
                        <div key={genre.id} className="category--list--item">
                            <div>{genre.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}