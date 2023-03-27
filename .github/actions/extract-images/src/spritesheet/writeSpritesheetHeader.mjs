import { writeFileSync } from 'fs';

export function writeSpritesheetHeader(cssFile) {
    writeFileSync(
        cssFile,
`.sprite {
    position: absolute;
    background-repeat: no-repeat;
    display: block;
    width: 84px;
    height: 120px;
}
.portrait {
    position: absolute;
    background-repeat: no-repeat;
    background-color: white;
    display: block;
    width: 84px;
    height: 100px;
}\n`
    );
}
