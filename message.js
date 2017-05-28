const config = require('./config')

module.exports = new Map([
    ['AuthFail', { code: 10001, msg: `request auth fail:${config.APP_NAME}` }],
    ['NotFound', { code: 10002, msg: 'api or file does not exist:@param' }],
    ['CommonErr', { code: 11000 }], // scenes which have no specific action plz use this code
    ['AuthAlreadyDone', { code: 11001, msg: 'request auth already done' }],
])