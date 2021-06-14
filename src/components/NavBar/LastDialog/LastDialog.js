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
                        <img className="post__item-img" alt="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bullet_%28typography%29.svg/1200px-Bullet_%28typography%29.svg.png"></img>
                    </NavLink>
                </li>
                <li className="nav__list-item">
                    <NavLink to="/dialogs/2">
                        <img className="post__item-img" alt="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bullet_%28typography%29.svg/1200px-Bullet_%28typography%29.svg.png"></img>
                    </NavLink>
                </li>
                <li className="nav__list-item">
                    <NavLink to="/dialogs/3">
                        <img className="post__item-img" alt="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bullet_%28typography%29.svg/1200px-Bullet_%28typography%29.svg.png"></img>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default LastDialog