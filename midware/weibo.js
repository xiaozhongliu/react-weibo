const weibo = require('weibo')
const config = require('../config')

/**
 * http://127.0.0.1:8000/oauth?type=weibo
 */

weibo.init('weibo', config.APP_KEY, config.APP_SECRET)

module.exports = weibo.oauth({
    blogtypeField: 'type',
    homeUrl: `http://${config.APP_DOMAIN}${config.DEBUG ? `:${config.API_PORT}` : ''}`,
    afterLogin: function (req, res, callback) {
        console.log(req.session.oauthUser.screen_name, 'login success')
        process.nextTick(callback)
    },
    beforeLogout: function (req, res, callback) {
        console.log(req.session.oauthUser.screen_name, 'loging out')
        process.nextTick(callback)
    }
})