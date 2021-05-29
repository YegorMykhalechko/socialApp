import React from 'react'

import './PostList.css'

import Post from './Post'

const PostList = (props) => {

    const newPostData = props.state.map((post) => <Post message={post.message} count={post.count} />)

    return (
        <div className="profile__post">
            <ul className="post__list">
                {newPostData}
            </ul>
        </div>
    )
}

export default PostList