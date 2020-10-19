'use strict'


// removes `--` or `-`
const clean = name => name.substr(name.startsWith('--') ? 2 : 1)

// split arg name and value by the first `=`
const split = arg => {
  const index = arg.indexOf('=')
  const name = arg.substr(0, index)
  const value = arg.substr(index + 1)

  return [ name, value ]
}


const parseArgv = argv => {
  const args = {}

  let index = 0
  let current

  // starts a `--name value` pair
  const start = name => {
    current = name
  }

  // ends the current name-value pair
  const end = (value = null, name = current) => {
    current = null

    if (!name) {
      if (value) {
        args[ index ] = value
        index++
      }

      return
    }

    const number = Number(value)

    args[ clean(name) ] = number.toString() === value ? number : value || true
  }

  argv.forEach(arg => {
    if (!arg.startsWith('-')) {
      // this might be a param value
      return void end(arg)
    }

    end()

    if (!arg.includes('=')) {
      return void start(arg)
    }

    const [ name, value ] = split(arg)

    end(value, name)
  })

  end()

  return args
}

module.exports = parseArgv
