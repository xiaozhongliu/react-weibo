import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Timeline from './com/Timeline'
import './asset/style/index.css'

ReactDOM.render((
    <BrowserRouter>
        <Route path="/" component={Timeline}/>
    </BrowserRouter>
), document.getElementById('root'))