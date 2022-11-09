export function stack(p5, data) {
    let colors = [[255, 0, 0], [255], [0, 0, 255]];

    let step = 10;

    let x = p5.width / 2;
    let y = p5.height / 2;
    let w = p5.random(200, 300);
    let num = w / step;
    let roundCorner = p5.random(1, 20);
    p5.rectMode(p5.CENTER);

    p5.noStroke();
    let strength = p5.random(-1, 1);
    let rotateStrength = p5.random(-1.5, 1.5);
    for (let i = 0; i < num; i++) {
        if (w - i * 10 > 0) {
            p5.fill(colors[i % 3]);
            p5.rotate((p5.QUARTER_PI / p5.random(20, 40)) * rotateStrength);
            p5.rect(
                x - i * strength,
                y - i * strength,
                w - i * step,
                w - i * step,
                roundCorner
            );
        } else {
            return;
        }
    }
}
