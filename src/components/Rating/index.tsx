import React,{FC} from 'react'
import {FaStar} from "react-icons/fa";
import {FaStarHalf} from "react-icons/fa";
import {FaRegStar} from "react-icons/fa";
import './rating.scss'

type RatingProps = {
    rating: string | undefined | number
}

export const Rating: FC<RatingProps> = ({rating}) => {

    const calculateStar=(RatingNr: number, indexNr: number) =>{
        if(RatingNr){
            const fixedIndex = parseInt(indexNr.toFixed(1)) - 0.1
            const correctIndex = parseInt(indexNr.toFixed(1)) + 0.5
            const calculatedRating = RatingNr / 2
            if(correctIndex === calculatedRating){
                return <FaStarHalf/>
            }
            if(indexNr < calculatedRating){
                return <FaStar/>
            }
            if (calculatedRating < fixedIndex && calculatedRating < fixedIndex + 1.0){
                return <FaRegStar/>
            }
            return <FaRegStar/>
        }

    }

    return(<div>
        <div className="star-rating">
            {[...Array(5)].map((nr, index) =>(
                <div key={index} className="star-svg">
                    {calculateStar(parseInt(rating as string), index )}
                </div>)
            )}

        </div>
    </div>)
}