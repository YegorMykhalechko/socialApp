import React from 'react'

import './ProfileDescr.css'

const ProfileDescr = () => {
    return (
        <div>
            <div className="profile__background"></div>
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
        </div>
    )
}

export default ProfileDescr