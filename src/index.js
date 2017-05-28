import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './util/registerServiceWorker'
import './asset/style/index.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()