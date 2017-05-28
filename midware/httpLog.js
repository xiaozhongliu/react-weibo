const { logger } = require('../util')
const config = require('../config')
const LogType = global.Enum.LogType

logger.log(LogType.Launch.text, {
    message: `service starts on http://localhost:${config.API_PORT}`
})

module.exports = (req, res, next) => {
    if (isNoLogFile(req.url)) return next()

    const start = new Date()
    res.log = {
        url: req.entireUrl,
        method: req.method,
        '@clientip': req.headers['x-forwarded-for'],
        '@reqstart': start.toISOString(),
    }

    if (req.method !== 'GET') {
        res.log.data = JSON.stringify(req.body)
    }

    // add a logging aspect to the primary res.json function
    const original = res.json
    res.json = function (json) {
        res.log.resp = JSON.stringify(json)
        return original.call(this, json)
    }

    res.on('finish', () => {
        const end = new Date()
        Object.assign(res.log, {
            status: res.statusCode,
            '@reqend': end.toISOString(),
            '@duration': end - start,
        })
        logger.log(LogType.Invoke.text, res.log)
    })

    next()
}

/**
 * no auth files or paths
 * @param   {string} url - req url
 * @returns {boolean}
 */
function isNoLogFile(url) {
    return config.NO_AUTH_REG.test(url)
}