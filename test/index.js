'use strict'

const test = require('tape')

const parseArgv = require('..')


// $ node test --a=b -b -c d e --e --f="g h" -i=j -j='k l' -l=123

test('Test with process.argv', t => {
    const { a, b, c, e, f, i, j, k } = parseArgv(process.argv)

    t.equal(a, 'b')
    t.equal(b, true)
    t.equal(c, 'd')
    t.equal(e, true)
    t.equal(f, 'g h')
    t.equal(i, 'j')
    t.equal(j, "'k")
    t.equal(k, 123)

    t.end()
})
