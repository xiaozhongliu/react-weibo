import React, { Component } from 'react'
import logo from './asset/logo.svg'
import './asset/style/App.css'

class App extends Component {

    render() {
        return (
            <div className="app">
                <img src={logo} className="app-logo" alt="logo"/>
                <span>React Weibo</span>
                <button className="app-enter">Enter</button>
            </div>
        )
    }
}

export default App