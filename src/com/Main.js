import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LeftMenu from './Menu'
import '../asset/style/com/Main.css'

class Main extends Component {

    constructor(props) {
        super(props)
        this.history = PropTypes.object
    }

    componentDidMount() {
        this.props.history.push('timeline')
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