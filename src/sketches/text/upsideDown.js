export function upsideDown(p5, data, str) {
    let sizes = [40, 50, 60];
    let size = p5.random(sizes);
    let repeat = p5.int(p5.width / size);
    let indPos;

    let string = `${str}`;
    let step = size * 1;

    let colors = data.colors['upsideDown'];

    p5.noLoop();
    p5.textFont(p5.random(data.fonts));

    p5.textSize(size);
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);

    for (let y = 0; y < p5.height / step + step / 2; y++) {
        for (let r = 0; r < repeat; r++) {
            // text(string, r * textWidth(string), y + step * y - step / 4);
            indPos = 0;
            for (let i = 0; i < string.length; i++) {
                p5.fill(`#${colors[0][p5.int(p5.random(2)) + 1]}`);
                let flip = p5.random();
                if (flip > 0.5) {
                    p5.push();
                    p5.translate(
                        r * p5.textWidth(string) +
                            indPos * 1 +
                            p5.textWidth(string[i]),
                        y + step * y - step / 4 - (size * 5.1) / 3
                    );
                    p5.rotate(p5.radians(180));
                    p5.text(string[i], 0, 0);
                    p5.pop();
                } else {
                    p5.push();
                    p5.translate(
                        r * p5.textWidth(string) + indPos * 1,
                        y + step * y - step / 4 - size
                    );
                    p5.text(string[i], 0, 0);
                    p5.pop();
                }

                indPos += p5.int(p5.textWidth(string[i]));
            }
        }
    }

    p5.pop();
}
