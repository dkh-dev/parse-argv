'use strict';

/// reference path="../index.ts"

import test from 'tape';
import parseArgv from '..';

// ts-node test --a=b -b -c d e --e -f \"g h\" -i=j --k l -m 0

// console.log(parseArgv(process.argv));
// => { a: 'b', b: '', c: 'd', e: '', f: 'g h', i: 'j', k: 'l', m: '0' }

test('Test with process.argv', t => {
    const argv = parseArgv(process.argv);

    t.plan(9);

    const { a, b, c, e, f, i, k, m } = argv

    t.comment(JSON.stringify(argv));

    t.equal(Object.keys(argv).length, 8);

    t.equal(a, 'b');
    t.equal(b, '');
    t.equal(c, 'd');
    t.equal(e, '');
    t.equal(f, 'g h');
    t.equal(i, 'j');
    t.equal(k, 'l');
    t.equal(m, '0');
});
