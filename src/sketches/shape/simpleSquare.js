export function simpleSquare(p5, data) {
    let steps = (steps = [4, 5, 6, 8]);
    let step = p5.height / p5.random(steps);

    p5.noLoop();

    let colors = data.colors['shapeDUAL'];
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);

    // p5.background(20, 20, 230);
    p5.noLoop();
    p5.noStroke();

    for (let x = 0; x < step; x++) {
        for (let y = 0; y < step; y++) {
            p5.fill(`#${ind[(x + y) % 2]}`);
            p5.square(x * step, y * step, step);
        }
    }
}
