import React,{FC} from 'react'
import {FaStar} from "react-icons/fa";
import {FaStarHalf} from "react-icons/fa";
import {FaRegStar} from "react-icons/fa";
import './rating.scss'

type RatingProps = {
    rating: string | undefined | number
}

export const Rating: FC<RatingProps> = ({rating}) => {
    console.log(rating)

    const calculateStar=(RatingNr: number, indexNr: number) =>{
        if(RatingNr){
            const fixedIndex = parseInt(indexNr.toFixed(1)) - 0.1
            const correctIndex = parseInt(indexNr.toFixed(1)) + 0.5 -1.0
            if(correctIndex === rating){
                return <FaStarHalf/>
            }
            if(indexNr < RatingNr){
                return <FaStar/>
            }

            if (RatingNr < fixedIndex && RatingNr < fixedIndex + 1.0){
                return <FaRegStar/>
            }


            return <FaRegStar/>
        }

    }

    return(<div>
        <div className="star-rating">
            {[...Array(5)].map((nr, index) =>(
                <div key={nr} className="star-svg">
                    {calculateStar(parseInt(rating as string), index )}
                </div>)
            )}

        </div>
    </div>)
}