import React from 'react'
import GoggleSignIn from './GoggleSignIn'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <h1>DigitalLibrary</h1>
            <nav>
                <Link to='/'>Home</Link>
                <GoggleSignIn />
            </nav>
        </header>
    )
}

export default Navbar