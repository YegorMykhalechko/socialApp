import React from 'react'

import './ProfileMain.css'

import PostForm from './PostForm'
import PostList from './PostList'
import ProfileDescr from './ProfileDescr'

const ProfileMain = () => {
    return (
        <main className="page__main">
            <div className="main__background"></div>
            <div className="profile__wrapper">
                <ProfileDescr />
                <PostForm />
                <PostList />
            </div>
        </main>
    )
}

export default ProfileMain