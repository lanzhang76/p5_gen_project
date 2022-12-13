import { drawSymbol } from './drawSymbol';
export function shape_symbol_square(p5, data, symbolFont) {
    let colors = data.colors['symbolSquare'];
    let ind = p5.random(colors);
    let size = 90;

    p5.background(`#${ind[0]}`);
    p5.rectMode(p5.CENTER);

    p5.noStroke();
    p5.textSize(size);

    //draw square
    let steps = (steps = [4, 5, 6, 8]);
    let step = p5.height / p5.random(steps);

    // p5.background(20, 20, 230);
    p5.noLoop();
    p5.noStroke();

    for (let x = 0; x < step; x++) {
        for (let y = 0; y < step; y++) {
            p5.fill(`#${ind[(x + y) % 2]}`);
            p5.square(x * step, y * step, step);
        }
    }

    //symbols
    p5.rectMode(p5.CORNER);
    p5.textSize(size);
    let padding = 10;
    let c = ind[2] == '' ? p5.color(p5.random(255), p5.random(255), p5.random(255)) : `#${ind[2]}`;
    let poss = [
        [size / 2 + padding, p5.width / 4, size / 2 + padding, p5.height / 4],
        [(p5.width * 3) / 4, p5.width - size / 2 - padding, size / 2 + padding, p5.height / 4],
        [size / 2 + padding, p5.width / 4, (p5.height * 3) / 4, p5.height - size / 2 - padding],
        [(p5.width * 3) / 4, p5.width - size / 2 - padding, (p5.height * 3) / 4, p5.height - size / 2 - padding],
    ];
    let pos = p5.random(poss);
    drawSymbol(p5, data, data.params.symbol.index - 1, p5.random(pos[0], pos[1]), p5.random(pos[2], pos[3]), symbolFont, size, c);
}
