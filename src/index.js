import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import store from './state'

const reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(store.getState())

store.subscribe(reRender)


