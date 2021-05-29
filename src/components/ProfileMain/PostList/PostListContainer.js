import React from 'react'

import PostList from './PostList'

const PostListContainer = (props) => {

    return (
        <PostList state={props.store.getState().profile.postData}/>
    )
}

export default PostListContainer