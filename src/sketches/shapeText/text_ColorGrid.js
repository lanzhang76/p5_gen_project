export function text_ColorGrid(p5, data, str) {
    let sizes = [4, 5, 6, 8];
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
    p5.background(240);
    p5.fill(30);

    let offset = 0.8;
    for (let i = 0; i < nums; i++) {
        let posX = i % 2 == 0 ? 0 : p5.width - p5.textWidth(string);
        p5.text(string, posX, (i + offset) * size);
    }

    // shape
    // let step = p5.random([20, 30, 40, 50]);
    console.log(size);
    let step = size * 1;
    for (let x = 0; x < p5.width; x += step) {
        for (let y = 0; y < p5.height; y += step) {
            p5.noStroke();
            let range = [100, 255];
            let r = p5.random();
            let c;
            if (r > 0.65) {
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
