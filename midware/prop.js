module.exports = (req, res, next) => {
    /**
     * set some req level variables, for the convenient of subsequent usage
     */
    // the entire req url
    req.entireUrl = `${req.protocol}://${req.get('host')}${req.url}`

    next()
}