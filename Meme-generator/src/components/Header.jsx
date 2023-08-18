import React from 'react'
import logo from '../images/troll-face.png';

export function Header() {
    

    return (
        <>
            <header className='header'>
                <img src= {logo} alt="meme-face"  className='header--img'/>
                <h1 className='header--title'> MEME GENERATOR</h1>
                <p className='header--project'>React Course - project 3</p>
            </header>
        </>
    )
}

