import React, {FC} from 'react'
import loadingSvg from '../../assets/Circle-Loading.svg'
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";

type LoadingProps = {
    height?: string
}

export const Loading: FC<LoadingProps> = ({height}) => {
    const error = useSelector((state: RootState) => {
        return state?.movies?.error
    })

    return (
        <div style={{minHeight: height}} >
            {error ==="" ? (
                <img src={loadingSvg} alt="Loading svg"/>
            ):(
                <h3 style={{color: 'red'}}>{error}</h3>
            )}
        </div>
    )
}