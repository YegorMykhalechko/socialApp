import React from 'react'

import './ProfileMain.css'

import PostForm from './PostForm'
import PostList from './PostList'
import ProfileDescr from './ProfileDescr'

const ProfileMain = (props) => {

    return (
        <main className="page__main">
            <div className="profile__wrapper">
                <ProfileDescr />
                <PostForm />
                <PostList profileState={props.profileState} />
            </div>
        </main>
    )
}

export default ProfileMain