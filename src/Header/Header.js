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
                <div className="main__background"></div>
                <div className="profile__wrapper">
                    <div className="main__profile">
                        <img className="profile__avatar" alt="avatar" src="https://image.freepik.com/darmowe-wektory/profil-czlowieka-avatar-na-rundy-ikona_24640-14044.jpg" />
                        <div className="profile__descr">
                            <h3 className="profile__title">Name Surname</h3>
                            <ul className="profile__list">
                                <li className="profile__list-item">Data: text</li>
                                <li className="profile__list-item">City: text</li>
                                <li className="profile__list-item">Education: text</li>
                                <li className="profile__list-item">Social: text</li>
                            </ul>
                        </div>
                    </div>
                    <form className="profile__form">
                        <input className="form__input" type="text" placeholder="your news..."></input>
                        <button className="form__btn"type="submit__btn">Send</button>
                    </form>
                    <div className="profile__post">
                        <ul className="post__list">
                            <li className="post__item">
                                <img className="post__item-img" alt="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bullet_%28typography%29.svg/1200px-Bullet_%28typography%29.svg.png"></img>
                                <span className="post__item-text">Some Post Text</span>
                            </li>
                            <li className="post__item">
                                <img className="post__item-img" alt="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bullet_%28typography%29.svg/1200px-Bullet_%28typography%29.svg.png"></img>
                                <span className="post__item-text">Some Post Text</span>
                            </li>
                            <li className="post__item">
                                <img className="post__item-img" alt="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bullet_%28typography%29.svg/1200px-Bullet_%28typography%29.svg.png"></img>
                                <span className="post__item-text">Some Post Text</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Header