export function simpleCircle(p5, data) {
    let steps = [40, 80, 100, 20, 200];
    let step = p5.random(steps);
    p5.noLoop();
    let targetX = p5.random(p5.width);
    let targetY = p5.random(p5.height);
    for (let x = step / 2; x < p5.width; x += step) {
        for (let y = step / 2; y < p5.height; y += step) {
            p5.noStroke();
            p5.fill(p5.random(230, 250), p5.random(50, 90), 50);

            let d = p5.dist(targetX, targetY, x, y);

            let offset = p5.map(d, 0, 400, -step * 0.2, step * 0.2);
            p5.circle(x, y, step + offset);
        }
    }
}
