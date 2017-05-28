import React, { Component } from 'react'
import '../asset/style/com/Timeline.css'
import config from '../config'

class Timeline extends Component {

    async componentDidMount() {
        const type = 'public'

        const res = await (await fetch(
            `${config.API_HOST}/timeline?type=${type}`, {
                headers: { "Content-Type": "application/json" },
                credentials: 'include'
            })).json()

        if (res.code === 10001) {
            window.location.href = `${config.API_HOST}/weiboAuth`
        }

        console.log(res)
    }

    render() {
        return (
            <div className="timeline">
            </div>
        )
    }
}

export default Timeline