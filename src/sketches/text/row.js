export function row(p5, data, str) {
    let sizes = [5, 6, 8];
    let nums = p5.random(sizes);

    let string = str;
    let size = p5.height / nums;
    p5.textSize(size);

    let colors = data.colors['row'];

    p5.noLoop();
    p5.textFont(p5.random(data.fonts));

    p5.textSize(size);
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);
    p5.fill(`#${ind[1]}`);

    let offset = 0.8;

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
}
