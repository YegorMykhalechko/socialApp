import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

let postData = [
  { id: 1, message: 'It`s first post', count: 10 },
  { id: 2, message: 'It`s second post', count: 20 },
]

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App postData={postData}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

