import React from 'react'

import { addPostActionCreator, changePostActionCreator } from '../../../action'

import './PostForm.css'

const PostForm = (props) => {

    const newPostEl = React.createRef()

    const addPost = (e) => {
        e.preventDefault()
        props.dispatch(addPostActionCreator())
    }

    const changePost = (e) => {
        e.preventDefault()
        const text = newPostEl.current.value
        props.dispatch(changePostActionCreator(text))
    }
    return (
        <form className="profile__form">
            <input onChange={changePost} ref={newPostEl} className="form__input" type="text" value={props.newTextPost} placeholder='it`s you new post'></input>
            <button onClick={addPost} className="form__btn" type="submit__btn">Send</button>
        </form>
    )
}

export default PostForm