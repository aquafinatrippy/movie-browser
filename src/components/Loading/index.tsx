import React, {FC} from 'react'
import loadingSvg from '../../assets/Circle-Loading.svg'

export const Loading: FC = () => {
    return(
        <div>
            <img src={loadingSvg} alt="Loading svg"/>
        </div>
    )
}