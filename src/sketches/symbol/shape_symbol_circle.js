import { drawSymbol } from './drawSymbol';

export function shape_symbol_circle(p5, data, symbolFont) {
    let colors = data.colors['symbolCircle'];
    let ind = p5.random(colors);

    p5.background(`#${ind[6]}`);

    p5.noStroke();

    p5.fill(`#${ind[0]}`);
    //circle background
    p5.circle(p5.width / 4, (p5.height * 3) / 4, p5.random(p5.width / 2, (p5.width * 4) / 4));
    p5.fill(`#${ind[1]}`);
    p5.circle((p5.width * 3) / 4, p5.height / 4, p5.random(p5.width / 2, (p5.width * 4) / 4));

    let diam = p5.random(p5.width / 2, (p5.width * 4) / 4);
    p5.fill(`#${ind[2]}`);
    p5.circle(0, 0, diam);
    p5.fill(`#${ind[3]}`);
    p5.circle(p5.width, p5.height, diam);

    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2 - 5, p5.height / 2, symbolFont, 160, `#${ind[5]}`);

    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2, p5.height / 2, symbolFont, 160, `#${ind[4]}`);
}
