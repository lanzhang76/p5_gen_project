export function irregularGrid(p5, data, c) {
    let w, r, padding, gridDivsX, gridDivsY, gridSpacingX, gridSpacingY;
    let grid = [];
    let range = [10];
    let rRange = [12, 10, 8, 6];

    let ind = c;
    console.log(ind[0]);

    w = p5.min(p5.width, p5.height);
    r = [-p5.random(rRange), p5.random(rRange)];
    padding = w / 15;
    gridDivsX = p5.random(range);
    gridDivsY = gridDivsX;
    gridSpacingX = (w - padding * 2) / gridDivsX;
    gridSpacingY = (w - padding * 2) / gridDivsY;

    for (let i = 0; i <= gridDivsX; i++) {
        let col = [];
        for (let j = 0; j <= gridDivsY; j++) {
            var x = p5.map(i, 0, gridDivsX, padding, w - padding);
            var y = p5.map(j, 0, gridDivsY, padding, w - padding);

            col.push([x + p5.random(r[0], r[1]), y + p5.random(r[0], r[1])]);
        }
        grid.push(col);
    }

    p5.background(60);
    p5.strokeWeight(3);
    p5.stroke(255);
    for (let i = 0; i <= gridDivsX; i++) {
        for (let j = 0; j <= gridDivsY; j++) {
            p5.stroke(`#${p5.random(ind[0])}`);
            var x = grid[i][j][0];
            var y = grid[i][j][1];

            if (i < gridDivsX) {
                var x1 = grid[i + 1][j][0];
                var y1 = grid[i + 1][j][1];
                p5.line(x, y, x1, y1);
            }

            p5.stroke(`#${p5.random(ind[0])}`);

            if (j < gridDivsY) {
                // console.log(i,grid[i]);
                var x2 = grid[i][j + 1][0];
                var y2 = grid[i][j + 1][1];
                p5.line(x, y, x2, y2);
            }
        }
    }
}
