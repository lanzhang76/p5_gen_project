export function quads(p5, data) {
    p5.noStroke();
    let steps = [10, 20, 40, 80];
    let colors = [
        [230, 103, 110, 250],
        [80, 230, 118, 250],
        [92, 108, 230, 250],
    ];
    let step = p5.random(steps);
    for (let x = 0; x < p5.width; x += step) {
        for (let y = 0; y < p5.width; y += step) {
            p5.beginShape(p5.QUADS);
            p5.fill(colors[(x * y) % 3]);
            p5.vertex(x + step / 2, y);
            p5.vertex(x, y + step / 2);
            p5.vertex(x + step / 2, y + step);
            p5.vertex(x + step, y + step / 2);
            p5.endShape();
        }
    }
}
