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
            <Route path="/profile" component={() => <ProfileMain postData={props.postData}/>} />
            <Route path="/dialogs" component={DialogMain} />
        </div>
    )
}

export default App