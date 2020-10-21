# [@dkh-dev/parse-argv](https://www.npmjs.com/package/@dkh-dev/parse-argv)

_Parse process arguments_

## Installation

````bash
$ yarn install @dkh-dev/parse-argv
````

## Examples

`parse-process-argv.ts`

````typescript
import parseArgv from '@dkh-dev/parse-argv';

console.log(parseArgv(process.argv.slice(2)));

// $ node test parse --a=b -b -c d e --e --f="g h" -i=123 -j=/k l/ -k
/* => {
        '0': 'parse',
        '1': 'e',
        '2': 'l/',
        a: 'b',
        b: true,
        c: 'd',
        e: true,
        f: 'g h',
        i: 123,
        j: '/k',
        k: true
      }
*/
````
