import path from 'path';

let _rootDir = ''

export function setRootDir(rootDir) {
    _rootDir = rootDir;
}

export function getRootDir() {
    return _rootDir;
}

export function pathFromRoot(...pathParts) {
    return path.join(_rootDir, ...pathParts);
}