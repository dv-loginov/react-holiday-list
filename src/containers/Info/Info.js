import React from 'react'
import './Info.scss'

const Info=(props)=>{
    return(
        <div className='Info'>
            { props.children }
        </div>
    )
};

export default Info