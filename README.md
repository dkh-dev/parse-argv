# parseArgv

_Parse process arguments_

## Installation

````bash
$ yarn install @dkh-dev/parse-argv
````

## Examples

Example 1

````typescript
// index.ts

import parseArgv from '@dkh-dev/parse-argv';

console.log(parseArgv(argv));

// $ node test --a=b -b -c d e --e --f="g h" -i=j -j='k l' -l=123
// => { a: 'b', b: true, c: 'd', e: true, f: 'g h', i: 'j', j: "'k", k: 123 }
````
