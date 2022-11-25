export function text_ColorGrid(p5, data, str) {
    let sizes = [3, 4, 5];
    let nums = p5.random(sizes);

    let string = str;
    let size = p5.height / nums;

    let colors = data.colors['shapeQuad'];

    //text
    p5.textFont(p5.random(data.fonts));
    p5.textSize(size);

    p5.rectMode(p5.CORNER);
    let ind = p5.random(colors);
    console.log(ind);
    p5.background(255);

    // draw text
    let offset = 0.8;
    p5.fill(30);
    if (string.length < 4) {
        size = p5.max(size, p5.height / 4);
        for (let i = 0; i < nums; i++) {
            let offsetX = p5.random() > 0.5 ? 20 : -20;
            let posX = p5.width / 2 - p5.textWidth(string) / 2 + offsetX;
            p5.text(string, posX, (i + offset) * size);
        }
    } else {
        for (let i = 0; i < nums; i++) {
            let posX = p5.random() > 0.5 ? 0 : p5.width - p5.textWidth(string);
            p5.text(string, posX, (i + offset) * size);
        }
    }

    // shape
    // let step = p5.random([20, 30, 40, 50]);
    let step = size * p5.random(0.3, 0.6);
    for (let x = 0; x < p5.width; x += step) {
        for (let y = 0; y < p5.height; y += step) {
            p5.noStroke();
            let range = [100, 255];
            let r = p5.random();
            let c;
            if (r > 0.75) {
                c = p5.color(`#${p5.random(ind)}`);
                // c.setAlpha(p5.random(150, 255));
                p5.fill(c);
                p5.square(x, y, step);
            } else {
                p5.noFill();
                p5.square(x, y, step);
            }
        }
    }
}
