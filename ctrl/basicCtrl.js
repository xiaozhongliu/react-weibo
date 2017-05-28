const co = require('co')
const config = require('../config')
const { hash } = require('../util')

module.exports = {

    /**
     * 登陆接口
     */
    async login(req, res) {
        res.json({
            code: 1,
            data: {},
            msg: '登陆成功'
        })
    },
}