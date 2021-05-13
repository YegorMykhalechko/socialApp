import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="page__nav">
            <ul className="nav__list">
                <li className="nav__list-item"><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
                <li className="nav__list-item"><NavLink to="/friends" activeClassName="active">Friends</NavLink></li>
                <li className="nav__list-item"><NavLink to="/dialogs" activeClassName="active">Dialogs</NavLink></li>
                <li className="nav__list-item"><NavLink to="/logout" activeClassName="active">Log Out</NavLink></li>
            </ul >
        </nav >
    )
}

export default NavBar