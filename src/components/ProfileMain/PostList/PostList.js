import React from 'react'

import './PostList.css'

import Post from './Post'

const PostList = () => {
    return (
        <div className="profile__post">
            <ul className="post__list">
                <Post message="It`s first post" count="10" />
                <Post message="It`s second post" count="20" />
            </ul>
        </div>
    )
}

export default PostList