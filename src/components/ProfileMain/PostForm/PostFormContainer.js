import React from 'react'

import { addPostActionCreator, changePostActionCreator } from '../../../redux/profileReducer'

import PostForm from './PostForm'
import StoreContext from '../../../StoreContext'

const PostFormContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    const changePost = (text) => {
                        store.dispatch(changePostActionCreator(text))
                    }
                    return (
                        <PostForm changePost={changePost} addPost={addPost} newTextPost={store.getState().profile.newTextPost} />
                    )

                }
            }
        </StoreContext.Consumer>
    )
}

export default PostFormContainer