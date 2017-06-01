import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LeftMenu from './Menu'
import '../asset/style/com/Main.css'

class Main extends Component {

    componentDidMount() {
        this.props.history.push('/timeline')
    }

    render() {
        return (
            <div className="main">
                <LeftMenu/>
                {this.props.children}
            </div>
        )
    }
}

Main.propTypes = {
    history: PropTypes.object
}

export default Main