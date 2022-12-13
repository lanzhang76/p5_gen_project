// import { drawSymbol } from '../symbol/drawSymbol';
import { symbol_grid } from '../symbol/symbol_grid';
export function gridSymbol_oneText(p5, data, symbolFont, mons) {
    let str = data.params.string.value;
    let s = 35;
    let colors = [0, 200];

    p5.background(220);

    symbol_grid(p5, data, symbolFont);

    p5.textSize(s);
    p5.textFont(mons);
    let step = p5.height / s;
    // for (let i = 0; i < step; i++) {
    //     p5.fill(colors[i % 2]);
    //     for (let x = 0; x < 15; x++) {
    //         p5.text(str, x * p5.textWidth(str), i * s + (s * 2) / 3);
    //     }
    // }

    let ss = 70;
    p5.textFont(p5.random(data.fonts), ss);
    let r = p5.random;
    let offset = 2;
    p5.fill(90);
    p5.text(str, p5.width / 2 - p5.textWidth(str) / 2 - offset, p5.height / 2 + ss / 3 - offset);
    p5.fill(255);
    p5.text(str, p5.width / 2 - p5.textWidth(str) / 2, p5.height / 2 + ss / 3);
}
