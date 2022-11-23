import { drawSymbol } from './drawSymbol';

export function shape_symbol_triangle(p5, data, symbolFont) {
    let colors = data.colors['symbolTriangle'];
    let ind = p5.random(colors);

    let rangeX = [-100, -50, 50, 100];
    let rangeY = [-100, -50, 50, 100];
    let scaler = 1;
    let num = p5.random([15, 20, 10]);

    p5.background(20);
    p5.noStroke();

    // p5.blendMode(p5.LIGHTEST);
    for (let i = 0; i < num; i++) {
        let x1 = p5.random(0, (p5.width * 3) / 4);
        let y1 = p5.random(0, p5.height);
        let x2 = x1 + p5.random(rangeX);
        let y2 = y1 + p5.random(rangeY);
        let x3 = x2 + p5.random(rangeX);
        let y3 = y2 + p5.random(rangeY);

        p5.fill(`#${ind[p5.int(p5.random(4))]}`);
        p5.triangle(x1, y1, x2 * scaler, y2 * scaler, x3 * scaler, y3 * scaler);
    }

    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2 - 5, p5.height / 2, symbolFont, 160, `#${ind[5]}`);
    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2, p5.height / 2, symbolFont, 160, `#${ind[4]}`);
}
