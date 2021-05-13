import React from 'react'

import './PostForm.css'

const PostForm = () => {
    return (
        <form className="profile__form">
            <input className="form__input" type="text" placeholder="your news..."></input>
            <button className="form__btn" type="submit__btn">Send</button>
        </form>
    )
}

export default PostForm