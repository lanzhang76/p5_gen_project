import { drawSymbol } from './drawSymbol';

export function shape_symbol_quad(p5, data, symbolFont) {
    let colors = data.colors['symbolQuad'];
    let ind = p5.random(colors);
    console.log(ind);

    p5.noStroke();

    p5.fill(`#${ind[0]}`);
    p5.rect(0, 0, p5.width, p5.height / 2);

    p5.fill(`#${ind[3]}`);
    p5.rect(0, p5.height / 2, p5.width, p5.height);

    let point1Y = p5.height / 2 - p5.random(50, 100);
    let point2Y = point1Y + p5.random(100, 180);

    let range = [20, 30, 40];
    let r = p5.random(range);
    console.log(r);
    p5.fill(`#${ind[1]}`);
    p5.beginShape(p5.QUADS);
    p5.vertex(0, r);
    p5.vertex(p5.width / 2, point1Y);
    p5.vertex(p5.width / 2, point2Y);
    p5.vertex(0, p5.height - r);
    p5.endShape();

    p5.fill(`#${ind[2]}`);
    p5.beginShape(p5.QUADS);
    p5.vertex(p5.width, r);
    p5.vertex(p5.width / 2, point1Y);
    p5.vertex(p5.width / 2, point2Y);
    p5.vertex(p5.width, p5.height - r);
    p5.endShape();

    let s = 100;

    p5.push();
    p5.fill(255);
    let scaler = p5.random() > 0.5 ? s : -s;
    let t = 'H';
    let posX = p5.width / 2 - p5.textWidth(t) / 3 - scaler * 0.8;
    let side = posX < p5.width / 2 ? 1 : -1;
    switch (r) {
        case 20:
            p5.shearY(-p5.radians(r * 0.5) * side);
            break;

        case 30:
            p5.shearY(-p5.radians(r * 0.3) * side);
            break;

        case 40:
            p5.shearY(-p5.radians(r * 0.1) * side);
            break;
    }
    // if (posX < p5.width / 2) {
    //     p5.shearY(-p5.radians(r * 0.5));
    // } else {
    //     p5.shearY(p5.radians(r * 0.5));
    // }

    drawSymbol(p5, data, data.params.symbol.index - 1, posX, p5.height / 2, symbolFont, s, `#${ind[4]}`);
    // p5.text(t, );
    p5.pop();
}
