import { drawSymbol } from '../symbol/drawSymbol';
export function twoLines(p5, data, symbolFont, mons) {
    let standardStr;
    let padding = 10;
    let standardSize;
    let standardLength;
    let s;
    let ogstr;

    //bg setup
    let colors = data.colors['symbolText_twoLines'];
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);

    // standardizing text
    let str = data.params.string.value;
    ogstr = str;
    str.length >= 5 ? (str = `${str} ${str}`) : (str = str);
    switch (str.length) {
        case 1:
            str = `${str} ${str} ${str} ${str} ${str} ${str} ${str}`;
            break;
        case 2:
            str = `${str} ${str} ${str} ${str} ${str}`;
            break;
        case 3:
            str = `${str} ${str} ${str} ${str}`;
            break;
        case 4:
            str = `${str} ${str} ${str}`;
            break;
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
    let num = 2;
    for (let i = 0; i < num; i++) {
        p5.fill(`#${ind[5]}`);
        p5.text(str, padding, s + i * s + 5);
        p5.fill(`#${ind[4]}`);
        p5.text(str, padding, s + i * s);
    }

    //draw symbol
    let size1 = 200;
    drawSymbol(p5, data, data.params.symbol.index - 1, size1 / 4, p5.height / 2 + size1 / 2, symbolFont, size1, `#${ind[1]}`);
    let size2 = 100;
    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2 - size2 / 3, p5.height / 2, symbolFont, size2, `#${ind[3]}`);
    let size3 = 250;
    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width - size3 / 3, p5.height / 2 + size3 / 2, symbolFont, size3, `#${ind[2]}`);
    let size4 = 150;
    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width - size4 / 5, p5.height / 2 + size4 / 5, symbolFont, size4, `#${ind[1]}`);
}
