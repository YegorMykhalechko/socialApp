import React from 'react'

import PostList from './PostList'
import StoreContext from '../../../StoreContext'

const PostListContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => <PostList state={store.getState().profile.postData} />
            }
        </StoreContext.Consumer>
    )
}

export default PostListContainer