import { drawSymbol } from '../symbol/drawSymbol';

export function surround(p5, data, symbolFont) {
    let sizes = [130, 80, 200];
    let size = p5.random(sizes);
    let colors = data.colors['symbolString_surround'];
    let ind = p5.random(colors);

    p5.background(`#${ind[0]}`);

    //write out text
    let standardStr = 'WWWWWWWW';
    let str = data.params.string.value;
    let standardSize = p5.width / 10.5;
    p5.textFont(p5.random(data.fonts), txtSize);
    p5.textSize(standardSize);
    let standardLength = p5.textWidth(standardStr);
    let txtSize = (standardSize * standardLength) / p5.textWidth(str);

    p5.textSize(txtSize);

    let co = p5.color(`#${ind[1]}`);

    for (let i = 0; i < 3; i++) {
        co.setAlpha(150 + i * 50);
        p5.fill(co);
        p5.text(str, p5.width / 2 - p5.textWidth(str) / 2 + 20 - i * 20, p5.height / 2 + txtSize / 2);
    }

    // draw symbol
    p5.textFont(symbolFont, size);
    let c = p5.color(`#${ind[1]}`);
    drawSymbol(p5, data, data.params.symbol.index - 1, p5.random(sizes[0] / 3, p5.width / 4), sizes[0] / 2, symbolFont, sizes[0], c);
    drawSymbol(
        p5,
        data,
        data.params.symbol.index - 1,
        p5.random(p5.width - sizes[1] / 2, p5.width - sizes[1] / 3),
        sizes[1] / 2,
        symbolFont,
        sizes[1],
        c
    );
    drawSymbol(p5, data, data.params.symbol.index - 1, p5.random(p5.width - 100, p5.width - sizes[1] / 2), p5.height, symbolFont, sizes[2], c);
}
