import React from 'react'

import { addPostActionCreator, changePostActionCreator } from '../../../redux/profileReducer'

import PostForm from './PostForm'

const PostFormContainer = (props) => {

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const changePost = (text) => {
        props.store.dispatch(changePostActionCreator(text))
    }
    return (
        <PostForm changePost={changePost} addPost={addPost} newTextPost={props.store.getState().profile.newTextPost} />
    )
}

export default PostFormContainer