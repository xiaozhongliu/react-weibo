const config = require('../config')
const validate = require('../util').validhelper

module.exports = {

    /**
     * validate common params which exist in every api method
     */
    common(req, res, next) {
        // no auth files or paths
        if (config.NO_AUTH_PATHS.includes(req.url) || config.NO_AUTH_REG.test(req.url)) {
            return next()
        }

        validate.assertEmptyFromHeader(req, ['token', 'ts'])
        handleValidationResult(req, next)
    },

    /**
     * validate api: login
     */
    login(req, res, next) {
        validate.assertEmptyOne(req, 'username', global.Message('UsernameEmpty').code)
        validate.assertEmptyOne(req, 'password', global.Message('PasswordEmpty').code)
        handleValidationResult(req, next)
    },

    /**
     * validate api: register
     */
    register(req, res, next) {
        validate.assertEmptyOne(req, 'username', global.Message('UsernameEmpty').code)
        validate.assertEmptyOne(req, 'password', global.Message('PasswordEmpty').code)
        validate.assertPassword(req, 'password', global.Message('PasswordInvalid'))
        handleValidationResult(req, next)
    },

    /**
     * validate api: verify
     */
    verify(req, res, next) {
        validate.assertEmptyOne(req, 'accessToken', global.Message('AccessTokenEmpty').code)
        handleValidationResult(req, next)
    },
}

function handleValidationResult(req, next) {
    req.getValidationResult().then(result => {
        if (!result.isEmpty()) {
            const arr = result.array()[0].msg.split('@@')
            const err = new Error(arr[1])
            err.code = Number(arr[0])
            return next(err)
        }
        next()
    })
}