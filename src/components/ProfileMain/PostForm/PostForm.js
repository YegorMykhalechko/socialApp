import React from 'react'

import './PostForm.css'

const PostForm = (props) => {

    const addPost = (e) => {
        e.preventDefault()
        props.addPost()
    }

    const changePost = (e) => {
        e.preventDefault()
        const text = e.target.value
        props.changePost(text)
    }
    return (
        <form className="profile__form">
            <input onChange={changePost} className="form__input" type="text" value={props.newTextPost} placeholder='it`s you new post'></input>
            <button onClick={addPost} className="form__btn" type="submit__btn">Send</button>
        </form>
    )
}

export default PostForm