import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import state from './state'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App state={state} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

