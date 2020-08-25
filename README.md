# parseArgv

_Parse process arguments_

## Installation

````bash
$ yarn install @dkh-dev/parse-argv
````

## Examples

`parse-process-argv.ts`

````typescript
import parseArgv from '@dkh-dev/parse-argv';

console.log(parseArgv(process.argv));

// $ node test --a=b -b -c d e --e --f="g h" -i=123 -j=/k l/ -k
// => { a: 'b', b: true, c: 'd', e: true, f: 'g h', i: 123, j: '/k', k: true }
````
