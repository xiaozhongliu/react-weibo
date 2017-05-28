module.exports = {

    /**
     * validate if a field is empty
     * @param   {object} req - req obj
     * @param   {string} field - target field
     * @param   {number} code - validation err code
     */
    assertEmptyOne(req, field, code) {
        const assertMethod = req.method === 'GET' ? req.checkQuery : req.checkBody
        assertMethod(field, `${code}@@请求参数${field}不能为空`).notEmpty()
    },

    /**
     * batch validate if some fields are empty
     * @param   {object} req - req obj
     * @param   {[string]} fields - target fields list
     */
    assertEmpty(req, fields) {
        fields.forEach(field => {
            this.assertEmptyOne(req, field, global.Message('CommonErr').code)
        })
    },

    /**
     * validate if some header fields are empty
     * @param   {object} req - req obj
     * @param   {[string]} fields - target fields list
     */
    assertEmptyFromHeader(req, fields) {
        fields.forEach(field => {
            const { code, msg } = global.Message('AuthFail')
            req.checkHeaders(field, `${code}@@${msg}`).notEmpty()
        })
    },

    /**
     * validate password format
     * @param   {object} req - req obj
     * @param   {string} field - target field
     * @param   {object} message - validation fail message
     */
    assertPassword(req, field, message) {
        const assertMethod = req.method === 'GET' ? req.checkQuery : req.checkBody
        assertMethod(field, `${message.code}@@${message.msg}`).isValidPassword()
    },
}