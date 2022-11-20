export function tiltGrid(p5, data, str) {
    let sizes = [15, 20, 30];
    let size = p5.random(sizes);
    let layout = p5.int(p5.random(4));

    let string = `${str} `;
    let step = size * 2;

    let colors = data.colors['tiltGrid'];

    p5.noLoop();
    p5.textFont(p5.random(data.fonts));

    p5.textSize(size);
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);
    p5.fill(`#${ind[1]}`);
    console.log(ind[1]);
    p5.push();
    switch (layout) {
        case 0:
            p5.translate(-p5.width / 2, -p5.height / 4);
            p5.rotate(-p5.QUARTER_PI / 4);
            break;

        case 1: {
            p5.translate(-p5.width / 2, -p5.height / 4);
            p5.rotate(-p5.QUARTER_PI / 2);
            break;
        }

        case 2:
            p5.translate(p5.width / 2, p5.height / 4);
            p5.rotate(p5.QUARTER_PI / 4);
            break;

        case 3: {
            p5.translate(p5.width / 2, p5.height / 4);
            p5.rotate(p5.QUARTER_PI / 2);
            break;
        }

        default:
            p5.translate(0, 0);
            p5.rotate(0);
    }

    for (let x = -step / 2; x < p5.width / step; x++) {
        for (let y = -step / 2; y < p5.height / step + step / 2; y++) {
            p5.text(
                string,
                x * size * string.length + step * 1 * (y % 2),
                y + step * y
            );
        }
    }

    p5.pop();
}
