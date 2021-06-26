import React from 'react'
import { NavLink } from 'react-router-dom'

import './LastDialog.css'

const LastDialog = () => {
    return (
        <div>
            <h2 className="last-dialog__title">Last Dialogs</h2>

            <ul className="nav__list-dialogs">
                <li className="nav__list-item">
                    <NavLink to="/dialogs/1">
                        <img className="post__item-img" alt="icon" src="https://image.freepik.com/darmowe-wektory/profil-czlowieka-avatar-na-rundy-ikona_24640-14044.jpg"></img>
                    </NavLink>
                </li>
                <li className="nav__list-item">
                    <NavLink to="/dialogs/2">
                        <img className="post__item-img" alt="icon" src="https://image.freepik.com/darmowe-wektory/profil-czlowieka-avatar-na-rundy-ikona_24640-14044.jpg"></img>
                    </NavLink>
                </li>
                <li className="nav__list-item">
                    <NavLink to="/dialogs/3">
                        <img className="post__item-img" alt="icon" src="https://image.freepik.com/darmowe-wektory/profil-czlowieka-avatar-na-rundy-ikona_24640-14044.jpg"></img>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default LastDialog