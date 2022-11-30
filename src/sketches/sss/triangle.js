import { drawSymbol } from '../symbol/drawSymbol';
export function triangle(p5, data, symbolFont, mons) {
    let standardStr;
    let padding = 10;
    let standardSize;
    let standardLength;
    let s;
    let ogstr;

    //bg setup
    let colors = data.colors['sss_triangle'];
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);

    // standardizing text
    let str = data.params.string.value;
    ogstr = str;
    str.length >= 5 ? (str = `${str} ${str}`) : (str = str);
    switch (str.length) {
        case 1:
            str = `${str} ${str} ${str} ${str} ${str} ${str} ${str}`;
            break;
        case 2:
            str = `${str} ${str} ${str} ${str} ${str}`;
            break;
        case 3:
            str = `${str} ${str} ${str} ${str}`;
            break;
        case 4:
            str = `${str} ${str} ${str}`;
            break;
    }

    standardSize = p5.width / 10.5;
    p5.textSize(standardSize);
    p5.textFont(mons);
    standardStr = 'WWWWWWWW';
    standardLength = p5.textWidth(standardStr);
    s = (standardSize * standardLength) / p5.textWidth(str);
    p5.textSize(s);
    // p5.textSize(standardSize);
    // p5.text(standardStr, padding, p5.height / 2);

    //draw text

    // horizontal
    p5.text(str, padding, s);
    p5.text(str, padding, p5.height - padding);

    // vertical
    p5.push();
    p5.translate(s, padding);
    p5.rotate(p5.PI / 2);
    str = verticalLayout(str, ogstr);
    p5.text(str, p5.height / 2 - p5.textWidth(str) / 2 - padding, s - padding);
    p5.pop();

    p5.push();
    p5.translate(p5.width - padding, padding);
    p5.rotate(p5.PI / 2);
    p5.text(str, p5.height / 2 - p5.textWidth(str) / 2 - padding, s - padding);
    p5.pop();

    drawTriangles(p5, ind);

    let x = p5.width / 2;
    let y = p5.height / 2;
    let si = p5.width / 4;
    drawSymbol(p5, data, data.params.symbol.index - 1, x, y, symbolFont, si, `#${ind[3]}`);
    // drawSymbol(p5, data, data.params.symbol.index - 1, x, y, symbolFont, si, `#${ind[1]}`);
}
function drawTriangles(p5, ind) {
    p5.noStroke();
    let offsetX = 10;
    let offsetY = 10;
    let scaler = 1.1;

    p5.fill(`#${ind[1]}`);
    p5.triangle(
        p5.width / 2 + offsetX,
        p5.height / 2 - 90 * scaler + offsetY,
        p5.width / 2 + 80 * scaler + offsetX,
        p5.height / 2 + 40 * scaler + offsetY,
        p5.width / 2 - 80 * scaler + offsetX,
        p5.height / 2 + 40 * scaler + offsetY
    );

    p5.fill(`#${ind[2]}`);
    let offsetX2 = -15;
    let offsetY2 = -40;
    p5.triangle(
        p5.width / 2 + offsetX2,
        p5.height / 2 - 90 * scaler - offsetY2,
        p5.width / 2 + 80 * scaler + offsetX2,
        p5.height / 2 + 40 * scaler - offsetY2,
        p5.width / 2 - 80 * scaler + offsetX2,
        p5.height / 2 + 40 * scaler - offsetY2
    );

    p5.fill(`#${ind[1]}`);
    let scaler2 = 0.5;
    let offset2 = -10;
    let offset2Y = 10;
    p5.triangle(
        p5.width / 2 + offset2,
        p5.height / 2 - 90 * scaler2 + offset2Y,
        p5.width / 2 + 80 * scaler2 + offset2,
        p5.height / 2 + 40 * scaler2 + offset2Y,
        p5.width / 2 - 80 * scaler2 + offset2,
        p5.height / 2 + 40 * scaler2 + offset2Y
    );
}

function verticalLayout(str, ogstr) {
    str = ogstr;
    str.length >= 5 ? (str = `${str}`) : (str = str);
    switch (str.length) {
        case 1:
            str = `${str} ${str} ${str} ${str} ${str}`;
            break;
        case 2:
            str = `${str} ${str} ${str}`;
            break;
        case 3:
            str = `${str} ${str} ${str}`;
            break;
        case 4:
            str = `${str} ${str}`;
            break;
    }
    return str;
}
