'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const isPair = (arg) => /^\-[a-z-]+=/.test(arg);
const isKey = (arg) => /^\-[a-z-]+$/.test(arg);
const parseArgv = (argv) => {
    const argm = {};
    let key = '';
    argv.forEach(arg => {
        if (isPair(arg)) {
            if (key) {
                argm[key] = '';
                key = '';
            }
            const parts = arg.split('=');
            argm[parts[0].substr(arg.startsWith('--') ? 2 : 1)] = parts[1];
        }
        else if (isKey(arg)) {
            if (key) {
                argm[key] = '';
            }
            key = arg.substr(arg.startsWith('--') ? 2 : 1);
        }
        else {
            if (key) {
                argm[key] = arg;
                key = '';
            }
        }
    });
    return argm;
};
exports.default = parseArgv;
