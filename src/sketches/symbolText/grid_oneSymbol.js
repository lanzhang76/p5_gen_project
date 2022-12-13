import { drawSymbol } from '../symbol/drawSymbol';
export function grid_oneSymbol(p5, data, symbolFont, mons) {
    let str = data.params.string.value;
    let s = p5.width / 5;
    let colors = data.colors['grid_symbol'];
    let ind = p5.random(colors);

    p5.background(ind[0]);
    p5.textSize(s);
    p5.textFont(mons);
    let step = p5.height / s;
    for (let i = 0; i < step; i++) {
        p5.fill(i % 2 == 0 ? ind[1] : ind[2]);
        for (let x = 0; x < 15; x++) {
            p5.text(str, x * p5.textWidth(str), i * s + (s * 2) / 3);
        }
    }

    p5.fill(255, 255, 255, 30);
    p5.rect(0, 0, p5.width, p5.height);
    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2 - 5, p5.height / 2, symbolFont, p5.width / 2, ind[4]);
    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2, p5.height / 2, symbolFont, p5.width / 2, ind[3]);
}
