import React from 'react'

import './Post.css'

const Post = (props) => {
    const {message, count} = props
    return(
        <li className="post__item">
                    <img className="post__item-img" alt="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bullet_%28typography%29.svg/1200px-Bullet_%28typography%29.svg.png"></img>
                    <span className="post__item-text">{message}</span>
                    <div className="post__like-count">Like:{count}</div>
                </li>
    )
}

export default Post