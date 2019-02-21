export interface ArgumentMap {
    [key: string]: string;
}
declare const parseArgv: (argv: string[]) => ArgumentMap;
export default parseArgv;
