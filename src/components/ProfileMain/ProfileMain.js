import React from 'react'

import './ProfileMain.css'

import PostFormContainer from './PostForm'
import PostListContainer from './PostList'
import ProfileDescr from './ProfileDescr'

const ProfileMain = (props) => {

    return (
        <main className="page__main">
            <div className="profile__wrapper">
                <ProfileDescr />
                <PostFormContainer />
                <PostListContainer />
            </div>
        </main>
    )
}

export default ProfileMain