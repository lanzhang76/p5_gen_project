export function foursideTriangle(p5, data) {
    let points = [];
    // let colors = ["#E4933C", "#BC8F5E", "#857842", "#A1552E"];
    let colors = data.colors['shapeQuad'];
    let ind = p5.random(colors);
    console.log(ind);
    let steps = [1, 2, 3, 4];

    let step = p5.width / p5.random(steps);

    for (let x = 0; x < p5.width; x += step) {
        for (let y = 0; y < p5.height; y += step) {
            let pointX = p5.random(x, x + step);
            let pointY = p5.random(y, y + step);

            points = [
                [x, y],
                [x + step, y],
                [x + step, y + step],
                [x, y + step],
            ];

            for (let i = 0; i < 4; i++) {
                p5.fill(`#${ind[i % 4]}`);
                p5.triangle(points[i % 4][0], points[i % 4][1], points[(i + 1) % 4][0], points[(i + 1) % 4][1], pointX, pointY);
            }
        }
    }
}
