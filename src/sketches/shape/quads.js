export function quads(p5, data) {
    p5.noStroke();
    let steps = [2, 4, 6, 8];
    let colors = data.colors['shapeDUAL'];
    let ind = p5.random(colors);

    p5.background(`#${ind[0]}`);
    p5.fill(`#${ind[1]}`);

    let step = p5.width / p5.random(steps);
    for (let x = 0; x < p5.width; x = x + (step * 2) / 3) {
        for (let y = 0; y < p5.height; y += step) {
            p5.beginShape(p5.QUADS);
            p5.vertex(x + step / 2 - step / 6, y);
            p5.vertex(x, y + step / 2);
            p5.vertex(x + step / 2 - step / 6, y + step);
            p5.vertex(x + step - step / 3, y + step / 2);
            p5.endShape();
        }
    }
}
