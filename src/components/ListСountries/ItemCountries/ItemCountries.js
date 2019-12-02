import React from 'react'
import './ItemCountries.scss'

const ItemCountries=(props)=>{
    return(<li
        className='ItemCountries'
        onClick={()=>props.onClick(props.id)}
    >
        { props.value }
    </li>)
};

export default ItemCountries