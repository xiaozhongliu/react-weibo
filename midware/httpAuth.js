const fs = require('fs')
const auth = require('http-auth')
const config = require('../config')

const basic = auth.basic({
    realm: 'Http Auth Realm'
}, (username, password, cb) => {
    cb(username === config.HTTP_AUTH.USERNAME && password === config.HTTP_AUTH.PASSWORD)
})

module.exports = (req, res, next) => {
    basic.check(req, res, (req, res, err) => {
        if (err) {
            return next(err)
        }

        // apply http auth to log accessing
        if (/\.log$/.test(req.url)) {
            res.end(fs.readFileSync(config.API_LOG_PATH + req.url.substr(1)))
        }
    })
}