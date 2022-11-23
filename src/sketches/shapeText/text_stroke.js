export function text_stroke(p5, data, str) {
    let string = str;
    let nums = p5.max(
        p5.random([3, 4, 5, 6, string.length + 2, string.length + 3]),
        string.length
    );
    let size = p5.height / nums;

    let colors = data.colors['shapeTri2'];
    let ind = p5.random(colors);

    p5.background(`#${ind[0]}`);

    //text
    p5.textFont(p5.random(data.fonts));
    p5.textSize(size);

    p5.textSize(size);

    p5.fill(`#${ind[1]}`);
    p5.noStroke();

    let offset = 0.8;
    for (let i = 0; i < nums; i++) {
        let posX = p5.random() > 0.5 ? 0 : p5.width - p5.textWidth(string);
        p5.text(string, posX, (i + offset) * size);
    }

    //shape
    let strokeNum = p5.random([3, 4, 5, 6]);
    let step = p5.height / strokeNum;
    let startY = 30;
    let startX = 20;
    p5.strokeWeight(40);
    p5.strokeCap(p5.SQUARE);
    p5.stroke(hexToRgb(`#${ind[2]}`));
    for (let y = startY; y < p5.height; y += step) {
        p5.line(
            startX + p5.random(-10, 30),
            y + p5.random(-45, 45),
            p5.width - startX + p5.random(-50, 10),
            y + p5.random(-45, 45)
        );
    }

    function hexToRgb(hex) {
        hex = hex.replace('#', '');

        var bigint = parseInt(hex, 16);

        var r = (bigint >> 16) & 100;
        var g = (bigint >> 8) & 100;
        var b = bigint & 100;

        return `rgba(${r},${g},${b},0.8)`;
    }
}
