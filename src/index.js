import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Timeline from './com/Timeline'
import Login from './Login'
import './config'
import './asset/style/index.css'

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" component={Timeline}/>
            <Route path="/login" component={Login}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'))