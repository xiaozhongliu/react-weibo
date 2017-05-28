require('./util/enum')
require('./globalHelper')
const express = require('express')
const compress = require('compression')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const router = require('./router')
const {
    httpAuth,
    prop,
    httpLog,
    cors,
    auth,
    validate,
} = require('./midware')
const { customValidators } = require('./util')
const config = require('./config')

const app = express()

app.use(compress())
app.use(express.static('./build'))
app.get('/', (req, res) => {
    res.sendFile('./build/index.html')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator({ customValidators }))

app.get(config.HTTP_AUTH.ITEMS_REG, httpAuth)
app.use(prop)
app.use(httpLog)
app.use(cors)
app.use(auth)
app.use(validate.common)
app.use(router)

app.use((req, res, next) => {
    next(global.MessageErr('NotFound', req.entireUrl))
})

app.use(({ code = -1, message, stack }, req, res, next) => {
    res.json({ code, msg: message })
    // output stack of unexpected error to console, for trouble shooting
    code > 1 || console.log(stack)
})

app.listen(config.APP_PORT)