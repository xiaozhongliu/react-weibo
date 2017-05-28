const router = require('express').Router()
const { timelineCtrl } = require('./ctrl')

// timeline ctrl
router.get('/', co(timelineCtrl.default))
router.get('/weiboAuth', co(timelineCtrl.weiboAuth))
router.get('/timeline', co(timelineCtrl.timeline))

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