import { drawSymbol } from './drawSymbol';
import { irregularGrid } from '../shape/irregularGrid';

export function shape_symbol_quad(p5, data, symbolFont) {
    let colors = data.colors['symbolQuad'];
    let ind = p5.random(colors);

    irregularGrid(p5, data, ind);
    let s = 170;
    p5.noStroke();

    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2, p5.height / 2, symbolFont, s, `#${ind[1]}`);

    p5.pop();
}
