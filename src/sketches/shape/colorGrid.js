export function colorGrid(p5, data) {
    console.log('hi there');
    let step = p5.random([20, 40, 50, 600]);
    for (let x = 0; x < p5.width; x += step) {
        for (let y = 0; y < p5.height; y += step) {
            p5.noStroke();
            let range = [100, 255];
            let r = p5.random();
            if (r > 0.65) {
                p5.fill(
                    p5.random(range),
                    p5.random(range),
                    p5.random(range),
                    p5.random([0, 255])
                );
                p5.square(x, y, step);
            } else {
                p5.noFill();
                p5.square(x, y, step);
            }
        }
    }
}
