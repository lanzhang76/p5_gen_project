export function triangleGrid(p5, data) {
    let steps = [2, 3, 4, 5];
    let step = p5.width / p5.random(steps);

    p5.noLoop();

    let colors = data.colors['shapeDUAL'];
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);

    // p5.background(20, 20, 230);
    p5.noLoop();

    p5.push();
    // p5.stroke(0);
    p5.fill(`#${ind[1]}`);
    p5.strokeWeight(1);

    for (let x = 0; x < p5.width; x += step) {
        for (let y = 0; y < p5.height; y += step) {
            let points = [
                [x, y],
                [x + step, y],
                [x + step, y + step],
                [x, y + step],
            ];
            let i = p5.int(p5.random(4));

            p5.triangle(
                points[i % 4][0],
                points[i % 4][1],
                points[(i + 1) % 4][0],
                points[(i + 1) % 4][1],
                points[(i + 2) % 4][0],
                points[(i + 2) % 4][1]
            );
        }
    }

    p5.pop();
}
