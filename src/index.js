import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import './asset/style/index.css'
import registerServiceWorker from './util/registerServiceWorker'

ReactDOM.render((
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker()