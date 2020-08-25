'use strict'

const test = require('tape')

const parseArgv = require('..')


//                           e -> ignored                 l/ -> ignored
// $ node test --a=b -b -c d e --e --f="g h" -i=123 -j=/k l/ -k

test('parseArgv', t => {
  const argv = parseArgv(process.argv)
  const { length } = Object.keys(argv)
  const { a, b, c, e, f, i, j, k } = argv

  t.equal(length, 8)
  t.equal(a, 'b')
  t.equal(b, true)
  t.equal(c, 'd')
  t.equal(e, true)
  t.equal(f, 'g h')
  t.equal(i, 123)
  t.equal(j, '/k')
  t.equal(k, true)

  t.end()
})
