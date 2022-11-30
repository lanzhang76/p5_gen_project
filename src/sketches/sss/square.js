import { drawSymbol } from '../symbol/drawSymbol';
export function square(p5, data, symbolFont, mons) {
    let standardStr;
    let padding = 10;
    let standardSize;
    let standardLength;
    let s;

    //bg setup
    let colors = data.colors['sss_square'];
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);

    // standardizing text
    let str = data.params.string.value;

    if (str.length == 1) {
        str = `${str} ${str} ${str} ${str} ${str}`;
    }
    if (str.length == 2) {
        str = `${str} ${str} ${str}`;
    }
    if (str.length > 2 && str.length <= 4) {
        str = `${str} ${str}`;
    }

    standardSize = p5.width / 10.5;
    p5.textSize(standardSize);
    p5.textFont(mons);
    // p5.textFont(p5.random(data.fonts));
    standardStr = 'WWWWWWWW';
    standardLength = p5.textWidth(standardStr);
    s = (standardSize * standardLength) / p5.textWidth(str);
    p5.textSize(s);
    // p5.textSize(standardSize);
    // p5.text(standardStr, padding, p5.height / 2);

    //draw text

    let num = p5.int(p5.height / s);
    for (let i = 0; i < num; i++) {
        p5.fill(`#${ind[2]}`);
        p5.text(str, padding, s + i * s + 5);
        p5.fill(`#${ind[1]}`);
        p5.text(str, padding, s + i * s);
    }

    drawSquares(p5, ind);

    let x = p5.width / 3 + 20;
    let y = (p5.height * 2) / 3;
    let si = p5.width / 4.5;
    drawSymbol(p5, data, data.params.symbol.index - 1, x - 2, y - 2, symbolFont, si, `#${ind[2]}`);
    drawSymbol(p5, data, data.params.symbol.index - 1, x, y, symbolFont, si, `#${ind[1]}`);
}
function drawSquares(p5, ind) {
    p5.noStroke();
    let offset = 20;
    p5.fill(`#${ind[4]}`);
    p5.square(p5.width / 5 + offset, (p5.height * 1.8) / 3 - offset, p5.width / 3.5);
    p5.square((p5.width * 3) / 5 + offset, p5.height / 4 - offset, p5.width / 7);

    p5.fill(`#${ind[3]}`);
    p5.square(p5.width / 5, (p5.height * 1.8) / 3, p5.width / 3.5);
    p5.square((p5.width * 3) / 5, p5.height / 4, p5.width / 7);
}
