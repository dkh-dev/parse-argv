'use strict';

export interface ArgumentMap {
    [key: string]: string;
}

/**
 * Check if an argument is a key-value pair `--key=value`.
 */
const isPair = (arg: string): boolean => /^\-\-[a-z]+=/.test(arg);

/**
 * Check if an argument is a key `-key`.
 */
const isKey = (arg: string): boolean => /^\-[a-z]+$/.test(arg);

/**
 * Parse an argv and map the result to an object.
 */
const parseArgv = (argv: string[]): ArgumentMap => {
    // Actually it's simply an object
    const argm: ArgumentMap = {};

    // The last key found when iterating over argv
    let key = '';

    argv.forEach(arg => {
        if (isPair(arg)) {
            // A key-value pair should start and end a new pair
            //     no matter what

            // If a pair comes after a key,
            // the preceding one forms a pair with an empty value
            if (key) {
                argm[ key ] = '';
                key = '';
            }

            const parts = arg.split('=');

            // map[ `--key` >> `key` ] = value
            argm[ parts[0].substr(2) ] = parts[1];
        } else if (isKey(arg)) {
            // A key should start a new pair no matter what

            // If one key comes after another,
            // the preceding one forms a pair with an empty value
            if (key) {
                argm[ key ] = '';
            }

            // `-key` >> `key`
            key = arg.substr(1);
        } else {
            // A value should end a pair, if there is

            // A value must come after a key or it will get discarded
            if (key) {
                argm[ key ] = arg;
                key = '';
            }
        }
    });

    return argm;
};

export default parseArgv;
