import { drawSymbol } from '../symbol/drawSymbol';
export function allLines(p5, data, symbolFont, mons) {
    let standardStr;
    let padding = 10;
    let standardSize;
    let standardLength;
    let s;

    //bg setup
    let colors = data.colors['symbolText_allLines'];
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
    if (str.length === 3) {
        str = `${str} ${str}`;
    }

    standardSize = p5.width / 5;
    p5.textFont(mons);
    // p5.textFont(p5.random(data.fonts));
    s = standardSize;
    p5.textSize(s);
    let num = p5.int(p5.height / s);

    for (let i = 0; i < num; i++) {
        p5.fill(`#${ind[4]}`);
        p5.text(str, p5.width / 2 - p5.textWidth(str) / 2, s * 0.7 + i * s + 5);
        p5.fill(`#${ind[3]}`);
        p5.text(str, p5.width / 2 - p5.textWidth(str) / 2, s * 0.7 + i * s);
    }

    //draw symbol
    let size1 = 200;
    drawSymbol(p5, data, data.params.symbol.index - 1, (p5.width * 1.2) / 3, size1 / 4, symbolFont, size1, `#${ind[1]}`);
    let size2 = 160;
    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2 + size2 / 3, p5.height - size2 / 5, symbolFont, size2, `#${ind[2]}`);
}
