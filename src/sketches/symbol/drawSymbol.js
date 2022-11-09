export function drawSymbol(p5, data, preloadData) {
    let index = data.params.symbol.index - 1;
    let imgChosenGroup = data.params.symbol.value[index];
    let imgChosen = p5.random(imgChosenGroup.imgs);
    console.log(imgChosen);
    let w = preloadData[index].w;
    data.drawSymbol.h = (w * imgChosen.height) / imgChosen.width;
    p5.image(
        imgChosen,
        p5.width / 2 - w / 2,
        p5.height / 2 - data.drawSymbol.h / 2,
        w,
        data.drawSymbol.h
    );
}
