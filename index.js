'use strict'

const isKey = arg => /^-[a-z-]+$/.test(arg)
const isPair = arg => /^-[a-z-]+=/.test(arg)

const sanitize = key => key.substr(key.startsWith('--') ? 2 : 1)
const split = arg => {
    const index = arg.indexOf('=')
    const key = sanitize(arg.substr(0, index))
    const value = arg.substr(index + 1)

    return [ key, value ]
}

const parseArgv = argv => {
    const argm = {}
    let currentKey

    const pair = (value = true, key = currentKey) => {
        if (key) {
            let convertedValue

            if (typeof value === 'string') {
                if (value.startsWith("'") && value.endsWith("'")) {
                    convertedValue = value.substr(1, value.length - 2)
                } else {
                    const num = Number(value)

                    convertedValue = num.toString() === value ? num : value
                }
            } else {
                convertedValue = value
            }

            argm[ key ] = convertedValue
            currentKey = null
        }
    }

    argv.forEach(arg => {
        if (isPair(arg)) {
            pair()

            const [ key, value ] = split(arg)

            pair(value, key)
        } else if (isKey(arg)) {
            pair()

            currentKey = sanitize(arg)
        } else {
            pair(arg)
        }
    })

    pair()

    return argm
}

module.exports = parseArgv
