'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const isPair = (arg) => /^\-[a-z-]+=/.test(arg);
const isKey = (arg) => /^\-[a-z-]+$/.test(arg);
const parseArgv = (argv) => {
    const argm = {};
    let key = '';
    const closeCurrentPair = () => {
        if (key) {
            argm[key] = '';
            key = '';
        }
    };
    argv.forEach(arg => {
        if (isPair(arg)) {
            closeCurrentPair();
            const parts = arg.split('=');
            argm[parts[0].substr(arg.startsWith('--') ? 2 : 1)] = parts[1];
        }
        else if (isKey(arg)) {
            closeCurrentPair();
            key = arg.substr(arg.startsWith('--') ? 2 : 1);
        }
        else {
            if (key) {
                argm[key] = arg;
                key = '';
            }
        }
    });
    closeCurrentPair();
    return argm;
};
exports.default = parseArgv;
