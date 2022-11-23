export function addGrain(p5, amount) {
    p5.loadPixels();
    const d = p5.pixelDensity();

    const pixelsCount = 4 * (p5.width * d) * (p5.height * d);
    //
    for (let i = 0; i < pixelsCount; i += 4) {
        const grainAmount = p5.random(-amount, amount);
        p5.pixels[i] = p5.pixels[i] + grainAmount;
        p5.pixels[i + 1] = p5.pixels[i + 1] + p5.random(-amount, amount);
        p5.pixels[i + 2] =
            p5.pixels[i + 2] + p5.random(-amount * 2, amount * 2);
        // p5.pixels[i + 1] = p5.pixels[i + 1] + grainAmount;
        // p5.pixels[i + 2] = p5.pixels[i + 2] + grainAmount;
        // comment in, if you want to granulate the alpha value
        p5.pixels[i + 3] = p5.pixels[i + 3] + grainAmount;
    }
    p5.updatePixels();
}
