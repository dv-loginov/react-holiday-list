import React from 'react'
import './ItemHoliday.scss'

const ItemHolioday=(props)=>{
    return(
        <li className='ItemHoliday'>
             <span>Дата: {props.date} {props.launchYear?`   отмечается с ${props.launchYear}`:null }</span>
             {/*{props.launchYear?<span>Отмечается с {props.launchYear}</span>:null}*/}
            <span>Международное название: {props.name}</span>
             <span>Туземное название: {props.localName}</span>
        </li>
    )
};

export default ItemHolioday