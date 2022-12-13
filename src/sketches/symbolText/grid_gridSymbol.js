import { drawSymbol } from '../symbol/drawSymbol';
export function grid_gridSymbol(p5, data, symbolFont, mons) {
    let str = data.params.string.value;
    let s = 35;
    let colors = data.colors['grid_symbol'];
    let ind = p5.random(colors);
    let padding = 20;

    p5.background(ind[0]);
    p5.textSize(s);
    p5.textFont(mons);
    let step = p5.height - (padding * s) / s;
    for (let i = 0; i < step; i++) {
        p5.fill(i % 2 == 0 ? ind[1] : ind[2]);
        for (let x = 0; x < 15; x++) {
            p5.text(str, x * p5.textWidth(str), i * s + (s * 2) / 3);
        }
    }

    p5.fill(255, 255, 255, 50);
    p5.rect(0, 0, p5.width, p5.height);

    let symbolS = (p5.width - padding * 2) / 3;
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
            let cc = (j + k) % 2 == 0 ? ind[3] : ind[4];
            drawSymbol(
                p5,
                data,
                data.params.symbol.index - 1,
                j * symbolS + symbolS / 1.8 - 5 + padding,
                k * symbolS + symbolS / 2 + padding,
                symbolFont,
                symbolS,
                ind[5]
            );
            drawSymbol(
                p5,
                data,
                data.params.symbol.index - 1,
                j * symbolS + symbolS / 1.8 + padding,
                k * symbolS + symbolS / 2 + padding,
                symbolFont,
                symbolS,
                cc
            );
        }
    }
}
