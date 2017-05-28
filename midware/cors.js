module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Methods', 'PUT,DELETE')
    res.header('Access-Control-Allow-Headers', 'ts,token,platform,content-type')
    next()
}