import React from 'react'
import './Sidebar.scss'

function Sidebar(props){
    return (
        <div className='Sidebar'>
            { props.children }
        </div>
    )
}

export default Sidebar