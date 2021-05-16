import React from 'react'
import { Route } from 'react-router-dom'

import Header from '../Header'
import NavBar from '../NavBar'
import ProfileMain from '../ProfileMain'
import DialogMain from '../DialogMain'

import './App.css'

const App = (props) => {

    return (
        <div className="wrapper">
            <Header />
            <NavBar />
            <Route path="/profile" component={() => <ProfileMain profileState={props.state.profile} />} />
            <Route path="/dialogs" component={() => <DialogMain dialogState={props.state.dialogs}/>} />
        </div>
    )
}

export default App