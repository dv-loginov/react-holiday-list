import React from 'react'
import './Header.scss'

function Header(props){
    return(
        <header>
            <div className='Header'>
                <h1>{props.header}</h1>
            </div>
        </header>
    )
}

export default Header