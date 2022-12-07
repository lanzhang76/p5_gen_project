import { drawSymbol } from './drawSymbol';

export function symbol_grid(p5, data, symbolFont) {
    p5.noStroke();

    //draw
    let sizes = [p5.width / 7, p5.width / 5];
    let size = p5.random(sizes);
    let spacer = 1.09;
    //symbols
    let steps = p5.height / size + 1;
    for (let i = 0; i < steps; i++) {
        for (let j = 0; j < steps; j++) {
            let c = (i + j) % 2 == 0 ? 255 : 80;
            drawSymbol(p5, data, data.params.symbol.index - 1, i * size * spacer, j * size * spacer, symbolFont, size, c);
        }
    }
}
