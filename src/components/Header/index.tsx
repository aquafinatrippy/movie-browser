import React, {FC} from 'react'
import {Category} from "../Category";
import './header.scss'


export const Header: FC = () => {
    return(
        <div className="header">
            <div className="header--top">
                <div className="header--title">
                    <h1>
                        Movie browser
                    </h1>
                </div>
                <div className="header--search">
                    <form >
                        <input type="text" placeholder="Search.." name="search" />
                            <button type="submit">x</button>

                    </form>
                </div>
            </div>
            <Category/>
        </div>
    )
}