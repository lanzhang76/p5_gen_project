export function drawSymbol(p5, data, num, posX, posY, symbols, size, c) {
    let symbolGroup = ['J', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'];
    p5.textFont(symbols, size);
    let symbol = symbolGroup[num];
    p5.fill(c);
    p5.text(symbol, posX - p5.textWidth(symbol) / 2 - 5, posY + size / 2);
}
