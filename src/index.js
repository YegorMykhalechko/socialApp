import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import state, { addPost, changePostText, addMessage, changeMessage, subscribe } from './state'

const reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App state={state} addPost={addPost} changePostText={changePostText} addMessage={addMessage} changeMessage={changeMessage} />
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(state)

subscribe(reRender)


