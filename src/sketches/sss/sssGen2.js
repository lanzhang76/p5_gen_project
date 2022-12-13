import { drawSymbol } from '../symbol/drawSymbol';
export function sssGen2(p5, data, symbolFont, mons, shape) {
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

    if (shape == 'triangle') {
        drawTriangles(p5, ind);
    }

    if (shape == 'circle') {
        drawCircles(p5, ind);
    }

    if (shape == 'square') {
        drawSquares(p5, ind);
    }

    if (shape == 'quad') {
        drawQuads(p5, ind);
    }

    let x = p5.width / 2;
    let y = p5.height / 2;
    let si = p5.width / 4;
    drawSymbol(p5, data, data.params.symbol.index - 1, x, y, symbolFont, si, `#${ind[3]}`);
    // drawSymbol(p5, data, data.params.symbol.index - 1, x, y, symbolFont, si, `#${ind[1]}`);
}
function drawTriangles(p5, ind) {
    p5.noStroke();
    let offsetX = p5.random(10, 20);
    let offsetY = p5.random(5, 20);
    let scaler = 0.9;

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
    let offsetX2 = p5.random(-5, -20);
    let offsetY2 = p5.random(-30, -45);
    p5.triangle(
        p5.width / 2 + offsetX2,
        p5.height / 2 - 90 * scaler - offsetY2,
        p5.width / 2 + 80 * scaler + offsetX2,
        p5.height / 2 + 40 * scaler - offsetY2,
        p5.width / 2 - 80 * scaler + offsetX2,
        p5.height / 2 + 40 * scaler - offsetY2
    );
}

function drawQuads(p5, ind) {
    p5.noStroke();
    let offsetX = p5.random(10, 20);
    let offsetY = p5.random(-20, -35);
    let scaler = 0.6;

    p5.fill(`#${ind[1]}`);
    p5.quad(
        p5.width / 2 + offsetX,
        p5.height / 2 - 90 * scaler + offsetY,
        p5.width / 2 + 80 * scaler + offsetX,
        p5.height / 2 + 40 * scaler + offsetY,
        p5.width / 2 + offsetX,
        p5.height / 2 + 180 * scaler + offsetY,
        p5.width / 2 - 80 * scaler + offsetX,
        p5.height / 2 + 40 * scaler + offsetY
    );

    p5.fill(`#${ind[2]}`);
    let offsetX2 = p5.random(-10, -30);
    let offsetY2 = p5.random(5, 10);
    p5.quad(
        p5.width / 2 + offsetX2,
        p5.height / 2 - 90 * scaler - offsetY2,
        p5.width / 2 + 80 * scaler + offsetX2,
        p5.height / 2 + 40 * scaler - offsetY2,
        p5.width / 2 + offsetX2,
        p5.height / 2 + 180 * scaler - offsetY2,
        p5.width / 2 - 80 * scaler + offsetX2,
        p5.height / 2 + 40 * scaler - offsetY2
    );
}

function drawCircles(p5, ind) {
    p5.noStroke();
    let offsetX = p5.random(2, 30);
    let offsetY = p5.random(-20, 20);
    let scaler = 0.8;

    p5.fill(`#${ind[1]}`);
    p5.circle(p5.width / 2 + offsetX, p5.height / 2 + offsetY, 150 * scaler);

    p5.fill(`#${ind[2]}`);
    let offsetX2 = p5.random(-35, -10);
    let offsetY2 = p5.random(20, 40);
    p5.circle(p5.width / 2 + offsetX2, p5.height / 2 + offsetY2, 150 * scaler);
}

function drawSquares(p5, ind) {
    p5.noStroke();
    let offsetX = p5.random(2, 35);
    let offsetY = p5.random(-30, -20);
    let scaler = 0.8;

    p5.fill(`#${ind[1]}`);
    p5.square(p5.width / 2 + offsetX, p5.height / 2 + offsetY, 130 * scaler);

    p5.fill(`#${ind[2]}`);
    let offsetX2 = p5.random(-25, -10);
    let offsetY2 = p5.random(10, 40);
    p5.square(p5.width / 2 + offsetX2, p5.height / 2 + offsetY2, 130 * scaler);
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
