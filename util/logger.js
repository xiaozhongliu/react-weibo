const fs = require('fs')
const os = require('os')
const log4js = require('log4js')
const config = require('../config')
const LogType = global.Enum.LogType

const appenders = [{
    type: 'dateFile',
    category: 'SITE',
    filename: `${config.API_LOG_PATH}`,
    pattern: 'yyyyMMdd.log',
    alwaysIncludePattern: true,
    layout: {
        type: 'pattern',
        pattern: '%m',
    }
}]

// no prod logs also output to onsole
config.DEBUG && appenders.push({ type: 'console' })

// create the log path if it doesn't exist
fs.existsSync(config.API_LOG_PATH) || fs.mkdirSync(config.API_LOG_PATH)

log4js.configure({ appenders })
const logger = log4js.getLogger('SITE')
logger.setLevel('INFO')

// get host ip address
const networksOrigin = os.networkInterfaces()
const networks = networksOrigin.eth1 ||
                networksOrigin.en1 ||
                networksOrigin.本地连接
const address = networks.find(network => network.family === 'IPv4')

module.exports = {

    log(event, fields) {
        logger.info(JSON.stringify(Object.assign({
            '@timestamp': new Date().toISOString(),
            '@servername': os.hostname(),
            '@serverip': address.address,
            '@appname': config.APP_NAME,
            event,
        }, fields)))
    },

    info(fields) {
        this.log(LogType.Info.text, fields)
    },

    err(fields) {
        this.log(LogType.Error.text, fields)
    },
}