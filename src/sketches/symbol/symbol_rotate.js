import { drawSymbol } from './drawSymbol';

export function symbol_rotate(p5, data, symbolFont) {
    p5.noStroke();
    console.log('hello');
    //draw
    let num = 7;
    let c = p5.color(p5.random(100, 255), p5.random(100, 255), p5.random(100, 255));
    for (let i = 0; i < num; i++) {
        let s = p5.random([160, 180, 210]);
        let trans = p5.map(i, 0, num, 10, 255);
        c.setAlpha(trans);
        p5.push();
        s = p5.map(i, 0, num, 270, 60);
        p5.translate(p5.width / 2, i * 42);
        let rot = p5.map(i, 0, num, -p5.PI, 0);
        p5.rotate(rot);
        drawSymbol(p5, data, data.params.symbol.index - 1, 0, 0, symbolFont, s, c);
        p5.pop();
    }
}
