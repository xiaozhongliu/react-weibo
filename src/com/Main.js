import React, { Component } from 'react'
import LeftMenu from './Menu'
import '../asset/style/com/Main.css'

class Main extends Component {

    render() {
        return (
            <div className="main">
                <LeftMenu/>
                <div id="content"/>
            </div>
        )
    }
}

export default Main