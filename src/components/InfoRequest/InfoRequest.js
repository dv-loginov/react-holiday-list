import React from 'react'
import "./InfoRequest.scss"

const InfoRequest=(props)=>{
    return(
        <div className='InfoRequest'>
                <span>Год: {props.year}</span>
                <span>Страна: {props.countryCode}</span>
        </div>
    )
};
export default InfoRequest