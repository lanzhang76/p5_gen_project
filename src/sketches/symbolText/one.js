import { drawSymbol } from '../symbol/drawSymbol';
export function one(p5, data, symbolFont, mons) {
    let padding = 10;
    let s = 40;
    let str = data.params.string.value;

    //bg setup
    let colors = data.colors['symbolText_one'];
    let ind = p5.random(colors);
    p5.background(`#${ind[0]}`);

    p5.textFont(mons);
    // p5.textFont(p5.random(data.fonts));
    p5.textSize(s);

    //draw text
    p5.fill(`#${ind[1]}`);
    p5.text(str, padding, s);

    //draw symbol
    let size1 = 300;
    drawSymbol(p5, data, data.params.symbol.index - 1, (p5.width * 2) / 3, (p5.height * 1.7) / 3, symbolFont, size1, `#${ind[2]}`);
}
