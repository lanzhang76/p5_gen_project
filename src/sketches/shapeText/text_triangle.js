export function text_triangle(p5, data, str, mons) {
    let points = [];
    let modes;

    let string = str;

    let colors = [
        '#1e7b4e', // background color 1
        '#34358f', // background color 2
        '#46a0fc', // shadow color
        '#ffae27',
    ]; // font color
    let bgColor = 100; // greyScale bg color 0 or 255

    let s;
    s = 135;
    p5.textSize(s);
    // s = (p5.width / string.length) * 0.8; // font size
    let w = p5.textWidth(string);
    s = (p5.width / w) * 120; // font size

    if (/^[a-zA-Z0-9_.-]*$/.test(string)) {
        console.log('en', s);
        p5.textFont(mons, s * 0.8);
    } else {
        p5.textFont(p5.random(data.fonts), s);
    }

    // console.log(p5.textWidth(string));
    let modeNum = 11; // blendMode choice

    points = [
        [0, 0],
        [p5.width, 0],
        [p5.width, p5.height],
        [0, p5.height],
    ];

    modes = [
        p5.BLEND,
        p5.ADD,
        p5.DARKEST,
        p5.LIGHTEST,
        p5.DIFFERENCE,
        p5.EXCLUSION,
        p5.MULTIPLY,
        p5.SCREEN,
        p5.REPLACE,
        p5.REMOVE,
        p5.OVERLAY,
        p5.HARD_LIGHT,
        p5.SOFT_LIGHT,
        p5.DODGE,
        p5.BURN,
        p5.SUBTRACT,
    ];

    p5.blendMode(modes[modeNum]);

    p5.background(bgColor);
    p5.noLoop();
    p5.noStroke();

    let r = p5.int(p5.random(4));

    p5.fill(colors[0]);
    p5.triangle(points[r % 4][0], points[r % 4][1], points[(r + 1) % 4][0], points[(r + 1) % 4][1], points[(r + 2) % 4][0], points[(r + 2) % 4][1]);

    p5.fill(colors[1]);
    p5.triangle(
        points[(r + 2) % 4][0],
        points[(r + 2) % 4][1],
        points[(r + 3) % 4][0],
        points[(r + 3) % 4][1],
        points[(r + 4) % 4][0],
        points[(r + 4) % 4][1]
    );

    p5.fill(colors[2]);
    p5.text(string, p5.width / 2 - p5.textWidth(string) / 2 - 5, p5.height / 2 + s / 3);
    p5.fill(colors[3]);
    p5.text(string, p5.width / 2 - p5.textWidth(string) / 2, p5.height / 2 + s / 3);
}
