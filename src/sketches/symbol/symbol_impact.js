import { drawSymbol } from './drawSymbol';

export function symbol_impact(p5, data, symbolFont) {
    p5.noStroke();
    p5.colorMode(p5.HSB, 255);

    //draw
    let c;
    let num = 10;
    let s;
    let sat = p5.random(200, 255);
    let hue = p5.random(0, 255);
    let step = sat / num;
    for (let i = 0; i < num; i++) {
        s = p5.random([120, 210, 230]);
        let p = 30;
        let trans = p5.map(i, 0, num, 30, 255);

        c = p5.color(hue, sat, trans);
        sat -= step;

        s = p5.map(i, 0, num, p5.width, 50);

        drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2, p5.height / 2, symbolFont, s, c);
    }
    drawSymbol(p5, data, data.params.symbol.index - 1, p5.width / 2, p5.height / 2, symbolFont, s, c);
}
