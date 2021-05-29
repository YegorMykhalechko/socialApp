import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import store from './redux/reduxStore'
import StoreContext from './StoreContext'

const reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(store.getState())

store.subscribe(() => {
    const state = store.getState();
    reRender(state)
})


