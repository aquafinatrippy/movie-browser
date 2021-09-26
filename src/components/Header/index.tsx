import React, {FC} from 'react'
import {Category} from "../Category";
import './header.scss'
import { FaSistrix } from "react-icons/fa";


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
                    <div className="header--search-container">
                        <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><FaSistrix/></button>

                    </div>
                </div>
            </div>
            <Category/>
        </div>
    )
}