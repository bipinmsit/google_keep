import React from 'react'
import logo from './images/logo.png'

const Header = () => {
    return(
        <>
        <div className="header">
            <img src={logo} 
            alt="logo" 
            width='70' 
            height='50'
            style={{marginTop:5}} />
            <h1 style={{marginBlockStart:20}}>Welcome to creating your note</h1>

        </div>
        </>
    )
}

export default Header