import React from 'react'
import './ItemHoliday.scss'

const ItemHolioday=(props)=>{
    return(
        <li className='ItemHoliday'>
            <div>{props.date}</div>
            <div>{props.name}</div>
            <div>{props.localName}</div>
            <div>{props.launchYear}</div>
        </li>
    )
};

export default ItemHolioday