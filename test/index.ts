'use strict';

import test from 'tape';
import parseArgv from '..';

// ts-node test --a=b -c d e -f \"g h\" -i=j --k l -m 0

// console.log(parseArgv(process.argv));
// => { a: 'b', c: 'd', f: 'g h', m: '0' }

test('Test with process.argv', t => {
    const argv = parseArgv(process.argv);

    t.plan(5);

    t.equal(Object.keys(argv).length, 4, 'argv should have four keys');

    t.equal(argv.a, 'b', 'argv.a should be "b"');
    t.equal(argv.c, 'd', 'argv.c should be "d"');
    t.equal(argv.f, 'g h', 'argv.f should be "g h"');
    t.equal(argv.m, '0', 'argv.m should be "0"');
});
