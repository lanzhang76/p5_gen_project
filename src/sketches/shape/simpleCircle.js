export function simpleCircle(p5, data) {
    let steps = [2, 3, 4, 5, 6, 8];
    let step = p5.height / p5.random(steps);

    p5.noLoop();

    let colors = data.colors['shapeDUAL'];
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);
    p5.fill(`#${ind[1]}`);

    let targetX = p5.random(p5.width);
    let targetY = p5.random(p5.height);
    for (let x = step / 2; x < p5.width; x += step) {
        for (let y = step / 2; y < p5.height; y += step) {
            p5.noStroke();

            let d = p5.dist(targetX, targetY, x, y);

            let offset = p5.map(d, 0, 400, -step * 0.2, step * 0.2);
            p5.circle(x, y, step);
        }
    }
}
