export function splash(p5, data, str) {
    let sizes = [120];

    let string = `${str} `;
    let repeat = 10;
    let size = p5.random(sizes);

    let colors = data.colors['splash'];

    p5.noLoop();
    p5.textFont(p5.random(data.fonts));

    p5.textSize(size);
    p5.textSize((350 / p5.textWidth(string)) * 60);
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);
    p5.push();
    p5.shearY(p5.radians(8));
    p5.fill(0);

    for (let i = 0; i < repeat; i++) {
        if (i == repeat - 1) p5.fill(`#${ind[1]}`);
        p5.text(
            string,
            p5.width / 2 - p5.textWidth(string) / 2 + i,
            p5.height / 2 - i
        );
    }

    p5.pop();
}
