import React, { Component } from 'react'
import { connect } from 'dva'
import { object as history } from 'prop-types'
import '../asset/style/com/Timeline.css'

class Timeline extends Component {

    constructor(props) {
        super(props)
        this.history = history
        this.list = props.timeline.list
    }

    componentDidMount() {
        const {
            type = 'public',
            page = 1
        } = this.props.location.query

        this.props.dispatch({
            type: 'timeline/fetch',
            payload: { type, page },
        })
    }

    render() {
        return (
            <div className="timelines">
                {
                    this.list.map((item, index) => {
                        return (
                            <div className="timeline" key={index}>
                                <img className="head" alt="" src={item.user.profile_image_url} />
                                <span className="name">{item.user.name}</span>:
                                <span className="text">{item.text}</span>
                                {item.bmiddle_pic &&
                                    <img className="pic" alt="" src={item.bmiddle_pic} />
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(store => ({ ...store }))(Timeline)