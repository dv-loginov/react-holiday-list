import React from 'react'
import './Content.scss'

function Content(props){
    return (
        <div className='Content'>
            { props.children }
        </div>
    )
}

export default Content