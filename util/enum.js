/**
 * enums for both server and client
 */
if (!global) global = window

global.Enum = {

    LogType: {
        Info: { value: 1, text: 'info' },
        Error: { value: 2, text: 'error' },
        Launch: { value: 3, text: 'launch' },
        Invoke: { value: 4, text: 'invoke' },
    },

    getEnumByValue(enumObj, value) {
        let target
        value = Number(value)

        Object.keys(enumObj).some(key => {
            const current = enumObj[key]
            if (current.value === value) {
                target = current
                return true
            }
        })
        return target
    },

    getNameByValue(enumObj, value) {
        let target
        value = Number(value)

        Object.keys(enumObj).some(key => {
            if (enumObj[key].value === value) {
                target = key
                return true
            }
        })
        return target
    },

    getEnumTexts(enumObj) {
        return Object.keys(enumObj).map(key => {
            return enumObj[key].text
        })
    },
}