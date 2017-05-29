import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../asset/logo.svg'
import '../asset/style/Login.css'

class Login extends Component {

    login() {
        this.props.history.push('/')
        window.location.href = `${window.config.API_HOST}/weiboAuth`
    }

    render() {
        return (
            <div className="login">
                <img src={logo} className="login-logo" alt="logo"/>
                <span>React Weibo</span>
                <button className="login-btn" onClick={this.login.bind(this)}>Login</button>
            </div>
        )
    }
}

Login.propTypes = {
    history: PropTypes.object
}

export default Login