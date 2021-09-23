import React, {FC} from 'react'
import {Category} from "../Category";
import './header.scss'


export const Header: FC = () => {
    return(
        <div className="header">
            <div className="header--top">
                <div className="header--title">
                    Movie browser
                </div>
                <div className="header--search">
                    search bar comes here
                </div>
            </div>
            <Category/>
        </div>
    )
}