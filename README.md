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
// ts-node index.ts --a=b -c d e -f "g h" -i=j --k l -m 0
// => { a: 'b', c: 'd', f: 'g h', m: '0' }
````
