import { drawSymbol } from './drawSymbol';

export function symbol_random(p5, data, symbolFont) {
    p5.noStroke();

    let colors = data.colors['symbolRandom'];
    console.log(colors);

    //circle background
    let num = 12;

    let s1 = p5.random([(p5.width * 2) / 3]);
    // let s2 = p5.random([140, 160]);
    let p = 30;

    let areas = [
        [0, p5.width / 2, 0, p5.height / 3],
        [p5.width / 2, p5.width, 0, p5.height / 3],
        [0, p5.width / 2, p5.height / 2, p5.height],
        [p5.width / 2, p5.width, p5.height / 2, p5.height],
    ];

    for (let i = 0; i < num; i++) {
        let trans;
        if (i > 2 && i <= 7) {
            trans = 0.7;
        } else if (i > 7) {
            trans = 1;
        } else {
            trans = 0.3;
        }
        let c = p5.color(`#${colors[i % colors.length]}`);
        c.setAlpha(trans * 255);
        p5.push();
        p5.translate(p5.random(areas[i % 4][0], areas[i % 4][1]), p5.random(areas[i % 4][2], areas[i % 4][3]));
        p5.rotate(p5.random(-p5.PI / 2, p5.PI / 2));
        if (i < num / 2) {
            drawSymbol(p5, data, data.params.symbol.index - 1, 0, 0, symbolFont, s1, c);
        } else {
            drawSymbol(p5, data, data.params.symbol.index - 1, 0, 0, symbolFont, s1, c);
        }

        p5.pop();
    }
}
