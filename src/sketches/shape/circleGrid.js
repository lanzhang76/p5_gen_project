export function circleGrid(p5, data) {
    let step = p5.random(20, 100);
    let baseDiam = p5.random(10, 30);
    let strength = p5.random(10, 50);
    // p5.circleMode(p5.CENTER);

    p5.stroke(p5.random(255), p5.random(255), 0);
    p5.strokeWeight(p5.random(1, 3));
    p5.noFill();
    // p5.circle(
    //     p5.height / 2,
    //     p5.width / 2,
    //     baseDiam + strength * p5.noise(p5.width)
    // );
    for (let i = 0; i < p5.width; i += step) {
        for (let j = 0; j < p5.height; j += step) {
            p5.circle(i, j, baseDiam + strength * p5.noise(i * j));
        }
    }
}
