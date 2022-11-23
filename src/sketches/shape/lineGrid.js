export function lineGrid(p5, data) {
    let steps = [50, 100, 120, 200];
    let step = p5.random(steps);

    let colors = data.colors['shapeDUAL'];
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);
    p5.strokeCap(p5.ROUND);

    p5.push();
    p5.stroke(`#${ind[1]}`);
    p5.strokeWeight(20);

    for (let x = 0; x < p5.width; x += step) {
        for (let y = 0; y < p5.height; y += step) {
            let r = p5.random();
            if (r > 0.5) {
                p5.line(x, y, x + step, y + step);
            } else {
                p5.line(x + step, y, x, y + step);
            }
        }
    }

    p5.pop();
}
