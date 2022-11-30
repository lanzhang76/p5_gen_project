import { drawSymbol } from '../symbol/drawSymbol';
export function line(p5, data, symbolFont, mons) {
    let standardStr;
    let padding = 10;
    let standardSize;
    let standardLength;
    let s;
    let ogstr;

    //bg setup
    let colors = data.colors['sss_line'];
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);

    // standardizing text
    let str = data.params.string.value;
    ogstr = str;
    str.length >= 5 ? (str = `${str} ${str} ${str} ${str}`) : (str = str);
    switch (str.length) {
        case 1:
            str = `${str} ${str} ${str} ${str} ${str} ${str} ${str} ${str} ${str}`;
            break;
        case 2:
            str = `${str} ${str} ${str} ${str} ${str} ${str} ${str}`;
            break;
        case 3:
            str = `${str} ${str} ${str} ${str} ${str} ${str}`;
            break;
        case 4:
            str = `${str} ${str} ${str} ${str} ${str}`;
            break;
    }

    standardSize = p5.width / 8;
    // p5.textSize(standardSize);
    p5.textFont(mons);
    // standardStr = 'WWWWWWWW';
    // standardLength = p5.textWidth(standardStr);
    // s = (standardSize * standardLength) / p5.textWidth(str);
    s = standardSize;
    p5.textSize(s);
    p5.fill(`#${ind[1]}`);
    // p5.textSize(standardSize);
    // p5.text(standardStr, padding, p5.height / 2);

    //draw text

    // horizontal
    p5.push();
    p5.translate(-padding, s - padding);
    p5.rotate(-p5.QUARTER_PI / 5);
    p5.text(str, 0, s);
    p5.text(str, -s / 2, p5.height - s / 2);
    p5.pop();

    //draw shapes
    drawLines(p5, ind);

    // let x = p5.width / 2;
    // let y = p5.height / 2;
    p5.noStroke();
    p5.push();
    p5.translate((p5.width * 3.5) / 5, p5.height / 2.7);
    p5.rotate(p5.QUARTER_PI / 3);
    drawSymbol(p5, data, data.params.symbol.index - 1, 0, 0, symbolFont, p5.width / 6, `#${ind[1]}`);
    p5.pop();

    p5.push();
    p5.translate(p5.width / 4, (p5.height * 2.4) / 4);
    p5.rotate(-p5.QUARTER_PI / 1.7);
    drawSymbol(p5, data, data.params.symbol.index - 1, 0, 0, symbolFont, p5.width / 4, `#${ind[1]}`);
    p5.pop();

    p5.noStroke();
    p5.push();
    p5.translate((p5.width * 4) / 5, (p5.height * 2.7) / 4);
    p5.rotate(p5.QUARTER_PI / 3);
    drawSymbol(p5, data, data.params.symbol.index - 1, 0, 0, symbolFont, p5.width / 12, `#${ind[1]}`);
    p5.pop();
}
function drawLines(p5, ind) {
    p5.noStroke();
    let offset = 12;

    //g1
    p5.stroke(`#${ind[3]}`);
    p5.strokeWeight(20);
    p5.line(0, p5.height / 2, p5.width, (p5.height * 3) / 4);

    //g2
    p5.stroke(`#${ind[4]}`);
    p5.strokeWeight(70);
    p5.line(0, (p5.height * 3) / 4, p5.width, p5.height / 4);
    p5.stroke(`#${ind[0]}`);
    p5.strokeWeight(40);
    p5.line(0, (p5.height * 3) / 4, p5.width, p5.height / 4);
    p5.stroke(`#${ind[3]}`);
    p5.strokeWeight(20);
    p5.line(0, (p5.height * 3) / 4 + offset, p5.width, p5.height / 4 + offset);

    //g3
    p5.stroke(`#${ind[2]}`);
    p5.strokeWeight(40);
    p5.line(0, p5.height / 4, p5.width, p5.height / 2);
}
