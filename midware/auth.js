const { hash } = require('../util')
const config = require('../config')
const HASHED_TOKEN = hash(config.REQUEST_TOKEN)

module.exports = (req, res, next) => {
    if (isNoAuthPath(req.url)) {
        return next()
    }

    const token = req.header('token')
    const stamp = req.header('ts')

    if (!token || !stamp ||
        !checkToken(token, stamp) ||
        !checkStamp(stamp)) {
        return next(global.MessageErr('AuthFail'))
    }

    next()
}

/**
 * no auth files or paths
 * @param   {string} url - req url
 * @returns {boolean}
 */
function isNoAuthPath(url) {
    const queryIndex = url.indexOf('?')
    return config.NO_AUTH_PATHS.includes(url.substring(0, queryIndex)) || config.NO_AUTH_REG.test(url)
}

/**
 * check if the token hashed on server side matches the token from client
 * @param   {string} token - token from client
 * @param   {string} stamp - ts from client
 * @returns {boolean}
 */
function checkToken(token, stamp) {
    return hash(HASHED_TOKEN + stamp) === token
}

/**
 * check if the req is within 5m
 * @param   {string} stamp - ts from client
 * @returns {boolean}
 */
function checkStamp(stamp) {
    const current = new Date().getTime()
    const diffSecs = current - stamp
    return Math.abs(diffSecs) < 300000
}