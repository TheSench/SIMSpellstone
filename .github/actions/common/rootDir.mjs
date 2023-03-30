import path from 'path';

let _rootDir = path.resolve('.');

export function setRootDir(rootDir) {
    _rootDir = path.resolve(rootDir);
}

export function getRootDir() {
    return _rootDir;
}

export function pathFromRoot(...pathParts) {
    return path.join(_rootDir, ...pathParts);
}