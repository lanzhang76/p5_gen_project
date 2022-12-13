export function text_circleGrid(p5, data, str) {
    let string = str;
    let fontS = p5.width / 6;
    let colors;
    let choice = p5.random();

    p5.noStroke();
    let s = p5.random([120, 100, 80]);
    let step = p5.width + s / s;

    if (choice < 0.33) {
        let sGrid = p5.random([100, 80, 50]);
        let stepGrid = p5.width + s / s;
        colors = data.colors['text_Circle3'];
        let indGrid = p5.random(colors);
        p5.background(indGrid[0]);
        let colorArr = indGrid.slice(1);
        for (let i = 0; i < stepGrid; i++) {
            for (let j = 0; j < stepGrid; j++) {
                p5.fill(p5.random(colorArr));
                p5.circle(i * sGrid, j * sGrid, sGrid * 0.8);
            }
        }
    } else {
        let pattern = p5.random();

        if (pattern < 0.5) {
            colors = data.colors['text_Circle2'];
        } else {
            colors = data.colors['text_Circle2'];
        }

        let ind = p5.random(colors);
        p5.background(ind[0]);

        for (let y = 0; y < step; y++) {
            for (let x = 0; x < step; x++) {
                let w = pattern > 0.5 ? (x % 2 == 0 ? (s * 3) / 4 : (s * 2) / 5) : (s * 3) / 4;
                if (pattern > 0.5) {
                    if (x % 2 == 0) {
                        p5.fill(ind[1]);
                    } else {
                        p5.fill(ind[2]);
                    }
                } else {
                    p5.fill(ind[1]);
                }

                p5.circle(y % 2 == 0 ? x * s : x * s + s / 2, y * s, w);
            }
        }
    }

    //text
    p5.textFont(p5.random(data.fonts));
    p5.textSize(fontS);
    p5.fill('#181818');
    p5.text(str, p5.width / 2 - p5.textWidth(str) / 2 - 3, p5.height / 2 + fontS / 3);
    p5.fill(255);
    p5.text(str, p5.width / 2 - p5.textWidth(str) / 2, p5.height / 2 + fontS / 3);
}
