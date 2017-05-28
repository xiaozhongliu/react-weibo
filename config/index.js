let config

if (!config) {
    try {
        config = require('./base')
        const customConfig = require(`./${process.env.NODE_ENV || 'test'}`)
        config = mergeDeep(config, customConfig)
    } catch (e) {
        console.log('Please make sure if config variable NODE_ENV is set.')
        process.exit()
    }
}

function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item)
}

function mergeDeep(target, source) {
    const output = Object.assign({}, target)
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(output, { [key]: source[key] })
                } else {
                    output[key] = mergeDeep(target[key], source[key])
                }
            } else {
                Object.assign(output, { [key]: source[key] })
            }
        })
    }
    return output
}

module.exports = config