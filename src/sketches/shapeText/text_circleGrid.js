export function text_circleGrid(p5, data, str) {
    let string = str;
    let nums = p5.random([4, 5, 6, 8]);
    let size = p5.height / nums;

    let colors = data.colors['shapeTri2'];

    //text
    p5.textFont(p5.random(data.fonts));
    p5.textSize(size);

    p5.textSize(size);
    let ind = p5.random(colors);
    console.log(ind);

    p5.background(`#${ind[0]}`);
    p5.fill(`#${ind[1]}`);

    let offset = 0.8;
    for (let i = 0; i < nums; i++) {
        let posX = p5.random() > 0.5 ? 0 : p5.width - p5.textWidth(string);
        p5.text(string, posX, (i + offset) * size);
    }

    //shape
    p5.push();
    p5.ellipseMode(p5.CORNER);

    p5.noStroke();
    p5.fill(`#${ind[2]}`);
    let range = [50, 70, 100];
    let step = p5.random(range);

    let stopX = p5.random((p5.width * 2) / 3);
    let stopY = p5.random((p5.height * 2) / 3);

    //area 1
    for (let x = 0; x < stopX - step / 2; x += step) {
        for (let y = 0; y < stopY - step / 2; y += step) {
            p5.circle(x, y, step * 0.6);
        }
    }

    //area 2
    let step2 = p5.random(range);
    let r2 = p5.random(0.5, 0.8);
    for (let x = stopX + step2 / 2; x < p5.width; x += step2) {
        for (let y = 0; y < stopY; y += step2) {
            p5.circle(x, y, step2 * 0.5);
        }
    }

    // area3
    let step3 = p5.random(range);
    let r3 = p5.random(0.5, 0.6);
    for (let x = 0; x < stopX - step3 / 2; x += step3) {
        for (let y = stopY; y < p5.height; y += step3) {
            p5.circle(x, y, step3 * p5.random(0.3, 0.5));
        }
    }

    // area4
    let step4 = p5.random(range);
    let r4 = p5.random(0.5, 0.8);
    for (let x = stopX + step3 / 2 + step4 / 2; x < p5.width; x += step4) {
        for (let y = stopY + step3 / 2 + step4 / 2; y < p5.height; y += step4) {
            p5.circle(x, y, step4 * r4);
        }
    }

    p5.pop();
}
