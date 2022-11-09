export function textLayout(p5, data, str) {
    data.textLayout.repeat = 3;
    data.textLayout.sizes = [20, 40, 50, 80, 120];
    data.textLayout.size = p5.random(data.textLayout.sizes);
    data.textLayout.layout = p5.int(p5.random(3));
    let step = data.textLayout.size;
    let string = str;
    p5.background(p5.random(255), p5.random(255), p5.random(255));

    p5.fill(0).strokeWeight(0).textSize(data.textLayout.size);
    p5.textFont(p5.random(data.fonts));

    p5.push();
    switch (data.textLayout.layout) {
        case 0:
            p5.translate(p5.width / 2, -p5.height / 4);
            p5.rotate(-p5.QUARTER_PI);

        case 1: {
            p5.translate(p5.width, 0);
            p5.rotate(p5.HALF_PI);
        }

        default:
            p5.translate(0, 0);
            p5.rotate(0);
    }

    // p5.text("hello", 20, 20);
    for (let x = 0; x < p5.width / step; x++) {
        for (let y = 0; y < p5.height / step + step / 2; y++) {
            let index = (y + p5.width * x) % string.length;
            p5.text(string[index], x + step * x, y + step * y);
        }
    }
    p5.pop();
}
