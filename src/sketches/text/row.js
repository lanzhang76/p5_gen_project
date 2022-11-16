export function row(p5, data, str) {
    let sizes = [50, 60, 70, 80];
    let size = p5.random(sizes);

    let string = str;
    let step = size * 1.1;

    let colors = data.colors['row'];

    p5.noLoop();
    p5.textFont(p5.random(data.fonts));

    p5.textSize(size);
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);
    p5.fill(`#${ind[1]}`);
    console.log(ind[1]);

    for (let y = 0; y < p5.height / step + step / 2; y++) {
        let posX = y % 2 == 0 ? 0 : p5.width - p5.textWidth(string);
        p5.text(string, posX, y + step * y - step / 4);
    }
}
