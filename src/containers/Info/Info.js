import React from 'react'
import './Info.scss'

function Info(props){
    return (
        <div className='Info'>
            { props.children }
        </div>
    )
}

export default Info