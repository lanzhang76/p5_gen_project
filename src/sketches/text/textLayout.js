export function textLayout(p5, data, str) {
    let string = str + " ";
    let smallSizes = [25, 40];
    let largeSizes = [60, 80, 100];
    let size =
        string.length > 3 ? p5.random(smallSizes) : p5.random(largeSizes);
    let step = size;
    let total = 50;

    p5.background(p5.random(255), p5.random(255), p5.random(255));

    p5.fill(0).strokeWeight(0).textSize(size);
    p5.textFont(p5.random(data.fonts));

    p5.push();

    let len = string.length;

    for (let r = 0; r < p5.height + size / 2; r += size) {
        let xpos = 0;
        for (let p = 0; p < total; p++) {
            let word = string[p % len];
            p5.text(word, xpos, r + (size * 3) / 4);
            xpos += p5.textWidth(word);
        }
    }

    p5.pop();
}
