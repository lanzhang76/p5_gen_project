export function text_quad(p5, data, str) {
    let string = str;

    let colors = data.colors['shapeQuad'];
    let ind = p5.random(colors);

    p5.background(`#${ind[0]}`);

    //variables
    let stepX = p5.random(70, p5.width / 2 - 10);
    let stepY = stepX * 0.6;
    let offset = 40;
    let x = p5.width / 2;
    let y = p5.height / 2 - offset;

    //pillars
    p5.noStroke();
    p5.fill(`#${ind[1]}`);
    p5.rect(x - stepX, y, stepX, y + offset * 2);
    p5.fill(`#${ind[2]}`);
    p5.rect(x, y, stepX, y + offset * 2);

    //quad
    p5.beginShape(p5.QUADS);
    p5.fill(`#${ind[3]}`);
    p5.vertex(x, y - stepY);
    p5.vertex(x - stepX, y);
    p5.vertex(x, y + stepY);
    p5.vertex(x + stepX, y);
    p5.endShape();

    //text
    p5.fill(`#${ind[0]}`);
    let l = string.length;
    if (string.length > 6) l = 6;
    let scaler = p5.map(l, 0, 6, 0.7, 0.3);
    console.log(scaler);
    let size = stepX * scaler;
    p5.textSize(size);
    p5.text(string, x - p5.textWidth(string) / 2, y + size / 4);
}
