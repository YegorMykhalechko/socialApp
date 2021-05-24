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
            <Route path="/profile" render={() => <ProfileMain profileState={props.state.profile} dispatch={props.dispatch} />} />
            <Route path="/dialogs" render={() => <DialogMain dialogState={props.state.dialogs} dispatch={props.dispatch} />} />
        </div>
    )
}

export default App