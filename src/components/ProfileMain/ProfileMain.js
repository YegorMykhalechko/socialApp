import React from 'react'

import './ProfileMain.css'

import PostFormContainer from './PostForm'
import PostList from './PostList'
import ProfileDescr from './ProfileDescr'

const ProfileMain = (props) => {

    return (
        <main className="page__main">
            <div className="profile__wrapper">
                <ProfileDescr />
                <PostFormContainer dispatch={props.dispatch} newTextPost={props.profileState.newTextPost} />
                <PostList profileState={props.profileState} />
            </div>
        </main>
    )
}

export default ProfileMain