import React from 'react'
import { Router } from 'dva/router'

function RouterConfig({ history, app }) {

    const routes = [
        {
            path: '/',
            getComponent(nextState, cb) {
                require.ensure([], require => { cb(null, require('./com/Main').default) })
            },
            childRoutes: [
                {
                    path: '/timeline',
                    getComponent(nextState, cb) {
                        require.ensure([], require => { cb(null, require('./com/Timeline').default) })
                    },
                },
            ]
        },
        {
            path: '/login',
            getComponent(nextState, cb) {
                require.ensure([], require => { cb(null, require('./com/Login').default) })
            },
        },
    ]

    return <Router history={history} routes={routes} />
}

// const cached = {}
// function registerModel(app, model) {
//     if (!cached[model.namespace]) {
//         app.model(model)
//         cached[model.namespace] = 1
//     }
// }

export default RouterConfig