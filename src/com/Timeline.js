import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../asset/style/com/Timeline.css'

class Timeline extends Component {

    async componentDidMount() {
        const type = 'public'

        const res = await (await fetch(
            `${window.config.API_HOST}/timeline?type=${type}`, {
                headers: { "Content-Type": "application/json" },
                credentials: 'include'
            })).json()

        if (res.code === 10001) {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div className="timeline">
            </div>
        )
    }
}

Timeline.propTypes = {
    history: PropTypes.object
}

export default Timeline