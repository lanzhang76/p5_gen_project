import { drawSymbol } from './drawSymbol';

export function symbol_random(p5, data, symbolFont) {
    p5.noStroke();

    //circle background
    let num = 8;
    let s1 = p5.random([200, 250, 300, 330, 360]);
    let s2 = p5.random([140, 160]);
    let p = 30;
    for (let i = 0; i < num; i++) {
        let trans = p5.map(i, 0, num, 150, 255);
        let c = p5.color(p5.random(255), p5.random(255), p5.random(255), trans);
        p5.push();
        p5.translate(p5.random(p, p5.width - p), p5.random(p, p5.height - p) - p);
        p5.rotate(p5.random(-p5.PI / 2, p5.PI / 2));
        if (i < num / 2) {
            drawSymbol(p5, data, data.params.symbol.index - 1, 0, 0, symbolFont, s1, c);
        } else {
            drawSymbol(p5, data, data.params.symbol.index - 1, 0, 0, symbolFont, s2, c);
        }

        p5.pop();
    }
}
