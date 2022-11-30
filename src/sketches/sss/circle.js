import { drawSymbol } from '../symbol/drawSymbol';

export function circle(p5, data, symbolFont, mons) {
    let colors = data.colors['sss_circle'];
    let ind = p5.random(colors);

    p5.background(`#${ind[0]}`);

    // text variables
    let standardStr = 'WWWWWWWW';
    let str = data.params.string.value;
    // str treatment:
    if (str.length == 1) {
        str = `${str} ${str} ${str} ${str} ${str}`;
    }
    if (str.length == 2) {
        str = `${str} ${str} ${str}`;
    }
    if (str.length > 2 && str.length <= 4) {
        str = `${str} ${str}`;
    }

    let padding = 10;

    let standardSize = p5.width / 10.5;
    p5.textFont(mons);
    p5.textSize(standardSize);
    let standardLength = p5.textWidth(standardStr);
    let s = (standardSize * standardLength) / p5.textWidth(str);

    p5.textSize(s);
    // p5.textSize(standardSize);

    // text calc and draw
    for (let i = 0; i < 5; i++) {
        let c = p5.color(`#${ind[2]}`);
        c.setAlpha(30 + i * 60);
        i == 4 ? p5.fill(`#${ind[1]}`) : p5.fill(c);
        p5.text(str, padding, p5.height - padding - s / 2 + i * 5);
    }

    drawSymbolLoop(p5, data, symbolFont, p5.width / 7, p5.height / 4.5, p5.width / 6, ind);
    drawSymbolLoop(p5, data, symbolFont, p5.width / 1.6, p5.height / 17, p5.width / 6, ind);
    drawSymbolLoop(p5, data, symbolFont, p5.width / 1.3, p5.height / 2.9, p5.width / 6, ind);

    drawCircleLoop(p5, data, symbolFont, p5.width / 3.5, p5.height / 20, p5.width / 8, ind);
    drawCircleLoop(p5, data, symbolFont, p5.width / 2.3, p5.height / 2.6, p5.width / 8, ind);
    drawCircleLoop(p5, data, symbolFont, (p5.width * 4.5) / 5, p5.height / 12, p5.width / 8, ind);
}

function drawCircleLoop(p5, data, symbolFont, posX, posY, si, ind) {
    console.log(si);
    for (let j = 0; j < 5; j++) {
        p5.noStroke();
        let c = p5.color(`#${ind[2]}`);
        c.setAlpha(50 + j * 50);
        j == 4 ? p5.fill(`#${ind[1]}`) : p5.fill(c);
        p5.circle(posX, posY + j * 10, si);
    }

    p5.fill(255);
    // p5.circle(200, 100, 100);
}

function drawSymbolLoop(p5, data, symbolFont, posX, posY, si, ind) {
    let y = posY;

    for (let i = 0; i < 5; i++) {
        p5.push();
        p5.translate(posX, posY);
        p5.rotate(-p5.PI / 4);
        let c;
        i == 4 ? (c = p5.color(`#${ind[1]}`)) : (c = p5.color(`#${ind[2]}`));
        c.setAlpha(50 + i * 50);
        drawSymbol(p5, data, data.params.symbol.index - 1, 0 - i * 10, 0 + i * 10, symbolFont, si, c);
        p5.pop();
    }
}
