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

const iterable = (argv, length) => {
  // this creates an iterator to iterate over indexed args
  const iterator = () => {
    let index = 0

    const next = () => {
      const i = index++

      return i < length ? { value: argv[ i ], done: false } : { done: true }
    }

    return { next }
  }

  Object.defineProperty(argv, Symbol.iterator, { value: iterator })
}

const parseArgv = argv => {
  const args = {}

  // named arg
  let current
  // auto-index
  let index = 0

  // start of a `--name value` pair
  const open = name => {
    current = name
  }

  // end of the current name-value pair
  const close = (content = true, name = current) => {
    current = null

    const key = name ? clean(name) : index++

    const number = Number(content)
    const value = number.toString() === content ? number : content

    args[ key ] = value === 'false' ? false : value
  }

  argv.forEach(arg => {
    if (!arg.startsWith('-')) {
      return void close(arg)
    }

    if (current) {
      close()
    }

    if (!arg.includes('=')) {
      return void open(arg)
    }

    const [ name, value ] = split(arg)

    close(value, name)
  })

  if (current) {
    close()
  }

  iterable(args, index)

  return args
}

module.exports = parseArgv
