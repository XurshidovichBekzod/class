import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <header className='header'>
            <nav className='container navbar'>
                <div>
                    <h1>Logoo</h1>
                </div>
                <ul className='collection'>
                    <li className='item'>
                        <NavLink to={"/"}>
                            <span>Country</span>
                        </NavLink>
                    </li>
                    <li className='item'>
                        <NavLink to={"/movie"}>
                            <span>Movie</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header