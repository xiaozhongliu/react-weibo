import React, { Component } from 'react'
import { object as history } from 'prop-types'
import LeftMenu from './Menu'
import '../asset/style/com/Main.css'

class Main extends Component {

    constructor(props) {
        super(props)
        this.history = history
    }

    componentDidMount() {
        this.props.history.push('/list/public')
    }

    render() {
        return (
            <div className="main">
                <LeftMenu />
                <article>
                    {this.props.children}
                </article>
            </div>
        )
    }
}

export default Main