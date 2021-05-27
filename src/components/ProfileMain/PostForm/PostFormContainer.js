import React from 'react'

import { addPostActionCreator, changePostActionCreator } from '../../../redux/profileReducer'

import PostForm from './PostForm'

const PostFormContainer = (props) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const changePost = (text) => {
        props.dispatch(changePostActionCreator(text))
    }
    return (
        <PostForm changePost={changePost} addPost={addPost} newTextPost={props.newTextPost} />
    )
}

export default PostFormContainer