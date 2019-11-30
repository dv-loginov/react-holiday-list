import React from 'react'
import './Layout.scss'

function Layout(props){
    return (
        <div className='Layout'>
           { props.children }
        </div>
    )
}

export default Layout