import { drawSymbol } from './drawSymbol';
export function shape_symbol_square(p5, data, symbolFont) {
    let colors = data.colors['symbolSquare'];
    let ind = p5.random(colors);
    let size = 100;

    p5.background(`#${ind[0]}`);
    p5.rectMode(p5.CENTER);

    p5.noStroke();
    p5.textSize(size);

    //draw square
    p5.fill(`#${ind[1]}`);
    p5.rect(p5.width / 2, p5.height / 2, p5.width * 0.9, p5.height * 0.8);

    p5.fill(`#${ind[2]}`);
    let w2 = p5.width * 0.8;
    let h2 = p5.height * 0.7;
    p5.rect(p5.width / 2, p5.height / 2, w2, h2);

    p5.fill(`#${ind[3]}`);
    p5.rect(p5.width / 2, p5.height / 2, p5.width * 0.2, p5.height * 0.2);

    //symbols
    p5.rectMode(p5.CORNER);
    size = h2 / 3;
    p5.textSize(size);
    for (let i = 0; i < 3; i++) {
        drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2 - size * 1.1, p5.height / 2 + (i - 1) * size, symbolFont, size, `#${ind[4]}`);
        drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2 + size * 1.1, p5.height / 2 + (i - 1) * size, symbolFont, size, `#${ind[4]}`);
    }
}
