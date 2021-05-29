import React from 'react'
import { Route } from 'react-router-dom'

import Header from '../Header'
import NavBar from '../NavBar'
import ProfileMain from '../ProfileMain'
import DialogMainContainer from '../DialogMain'

import './App.css'

const App = (props) => {

    return (
        <div className="wrapper">
            <Header />
            <NavBar />
            <Route path="/profile" render={() => <ProfileMain />} />
            <Route path="/dialogs" render={() => <DialogMainContainer />} />
        </div>
    )
}

export default App