export function colorBlock(p5, data) {
    p5.noLoop();
    p5.rectMode(p5.CENTER);

    let colors = data.colors['shapeTri'];
    let ind = p5.random(colors);
    p5.background(240);

    p5.noLoop();
    p5.noStroke();

    let bigW = p5.random(p5.width * 0.6, p5.width * 0.8);
    p5.fill(`#${ind[0]}`);
    p5.rect(p5.width / 2, p5.height / 2, bigW, bigW * 1.2);

    let color1 = p5.color(`#${ind[1]}`);
    color1.setAlpha(180);
    p5.fill(color1);
    p5.rect(
        p5.width / 2,
        p5.height / 2 + p5.random(20, 40),
        bigW * 0.5,
        bigW * 0.8
    );

    let color2 = p5.color(`#${ind[2]}`);
    color2.setAlpha(180);
    p5.fill(color2);
    p5.rect(
        p5.width / 2,
        p5.height / 2 - p5.random(20, 40),
        bigW * 0.7,
        bigW * 0.7
    );
}
