export default function simpleText(p5, data) {
  p5.background(data.specs.backgroundColor);
  for (let i = 1; i < 10; i++) {
    let r = p5.random(50);
    p5.textSize(32);
    p5.text(data.text, i * 10, i * 30);
    p5.fill(0, 102, 153);
    p5.text(data.text, i * 10, i * 60);
    p5.fill(0, 102, 153, 51);
    p5.text(data.text, i * 10, i * 90);
  }
}
