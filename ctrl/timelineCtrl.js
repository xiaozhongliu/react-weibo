const qs = require('querystring')
const request = require('request')
const config = require('../config')

const APP_REDIRECT_URL = `http://${config.APP_DOMAIN}:${config.APP_PORT}`
const EMOTIONS = require('./data/emotion.json')

module.exports = {

    async weiboAuth(req, res, next) {
        if (!req.session.oauthUser) {
            return res.redirect('/oauth?type=weibo')
        }
        res.redirect(APP_REDIRECT_URL)
    },


    async timeline(req, res, next) {

        if (!req.session.oauthUser) {
            return next(global.MessageErr('AuthFail'))
        }

        let {
            type = 'public',
            count = 20,
            page = 1
        } = req.query
        let access_token = req.session.oauthUser.access_token

        let params = qs.stringify({ access_token, count, page })
        let url = `https://api.weibo.com/2/statuses/${type}_timeline.json?${params}`

        request.get(url, (err, response, data) => {
            if (err) {
                return next(err)
            }

            //handle emotions
            data = JSON.parse(data)
            data.statuses.forEach(item => {
                let indexes = []
                let emotions = []
                let current = ''
                item.text.split('').forEach((char, index) => {
                    if (['[', ']'].includes(char)) {
                        if (
                            (current === '' && char === '[') ||
                            (current !== char)
                        ) {
                            current = char
                            return indexes.push(index)
                        }
                        if (current === '[' && current === char) {
                            indexes.pop()
                            return indexes.push(index)
                        }
                    }
                })
                for (let i = 1; i <= indexes.length / 2; i++) {
                    let emotion = item.text.substr(indexes[2 * i - 2], indexes[2 * i - 1] - indexes[2 * i - 2] + 1)
                    emotions.push(emotion)
                }
                emotions.forEach(emotion => {
                    let target = EMOTIONS.find(item => item.phrase === emotion)
                    if (!target) return
                    item.text = item.text.replace(emotion, `<img class=emotion src=${target.url}>`)
                })
            })

            res.json(data)
        })
    },
}