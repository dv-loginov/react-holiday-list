import React from 'react'
import "./InfoRequest.scss"

const InfoRequest=(props)=>{
    return(
        <div className='InfoRequest'>
            <span>{props.year}</span>
            <span>{props.countryCode}</span>
        </div>
    )
};
export default InfoRequest