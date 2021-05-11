import React from 'react'

import './Header.css'

const Header = () => {
    return (
        <div className="wrapper">
            <header className="page__header">
                <img className="header__logo" alt="logo" src="https://fi-rma.pl/wp-content/uploads/2019/10/LOGO_FI_STUDIO_PUB_MASKA.png"></img>
            </header>
            <nav className="page__nav">
                <ul className="nav__list">
                    <li className="nav__list-item">Profile</li>
                    <li className="nav__list-item">Friends</li>
                    <li className="nav__list-item">Setting</li>
                    <li className="nav__list-item">Log Out</li>
                </ul>
            </nav>
            <main className="page__main">
                <div className="main__content">Main Content</div>
            </main>
        </div>
    )
}

export default Header