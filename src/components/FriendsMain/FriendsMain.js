import React from 'react';
import * as axios from 'axios';

import './FriendsMain.css';

const FriendsMain = (props) => {


    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").
        then(res=>{
            props.setUser(res.data.items)
        })
    }

    return <div className="friends">
        {
            props.users.map(u => <div key={u.id}>
                <div className="friends__wrapper">
                    <div className="friends__main">
                        <div>
                            <img className="friends__avatar" src={u.photos.small != null ? u.photos.small: "https://image.freepik.com/darmowe-wektory/profil-czlowieka-avatar-na-rundy-ikona_24640-14044.jpg"}/>
                        </div>
                        <div className="friends__btn">
                            {u.followed ? <button onClick={() => { props.follow(u.id) }}>Follow</button> : <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>}
                        </div>
                    </div>
                    <div className="friends__descr">
                        <div className="friends__info">
                            <div className="friends__name">{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className="friends__location">
                            <div>{"'u.location.city'"}</div>
                            <div>{'"u.location.country"'}</div>
                        </div>
                    </div>
                </div>

            </div>)
        }
    </div>
}

export default FriendsMain;