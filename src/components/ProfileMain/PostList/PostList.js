import React from 'react'

import './PostList.css'

import Post from './Post'

const PostList = () => {

    let postData = [
        { id: 1, message: 'It`s first post', count: 10 },
        { id: 2, message: 'It`s second post', count: 20 },
    ]
    const newPostData = postData.map((post) => <Post message={post.message} count={post.count} />)

    return (
        <div className="profile__post">
            <ul className="post__list">
                {newPostData}
            </ul>
        </div>
    )
}

export default PostList