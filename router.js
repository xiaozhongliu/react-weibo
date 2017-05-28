const router = require('express').Router()
const { validate } = require('./midware')
const { basicCtrl } = require('./ctrl')

// basic ctrl
router.post('/api/login', co(basicCtrl.login))

// check health
router.get('/monitor', (req, res) => {
    res.json({ code: 1, msg: 'service works well' })
})

// co method
function co(asyncFunc) {
    return async function (req, res, next) {
        try {
            await asyncFunc(req, res, next)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = router