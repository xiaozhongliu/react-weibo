import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './com/Main'
import Login from './com/Login'
import './config'
import './asset/style/index.css'

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Main}/>
            <Route path="/login" component={Login}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'))