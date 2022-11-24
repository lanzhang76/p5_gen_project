import { drawSymbol } from './drawSymbol';

export function shape_symbol_line(p5, data, symbolFont) {
    let colors = data.colors['symbolLine'];
    let ind = p5.random(colors);
    let fontSize = 200;

    p5.strokeWeight(5);

    p5.background(`#${ind[0]}`);

    p5.stroke(`#${ind[1]}`);
    p5.line(0, p5.height / 2, p5.width, p5.height / 2);

    //symbols
    p5.noStroke();
    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2 - 5, p5.height / 2, symbolFont, fontSize, `#${ind[3]}`);
    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2 - 5, p5.height / 2, symbolFont, fontSize, `#${ind[2]}`);

    //draw line 1 and 3
    p5.strokeWeight(5);
    p5.stroke(`#${ind[1]}`);
    p5.line(0, p5.height / 4, p5.width, p5.height / 4);

    p5.stroke(`#${ind[1]}`);
    p5.line(0, (p5.height * 3) / 4, p5.width, (p5.height * 3) / 4);
    console.log('here drawing line');
}
