export default function bouncyBall(p5, data) {
  p5.background(data.specs.backgroundColor);
  p5.fill(255, 0, 0);
  p5.noStroke();
  p5.circle(data.bouncyBall.x, data.bouncyBall.y, data.draw.circle.size);
  // NOTE: Do not use setState in the draw function or in functions that are executed
  // in the draw function...
  // please use normal variables or class properties for these purposes

  if (
    data.bouncyBall.x > p5.width - data.draw.circle.size / 2 ||
    data.bouncyBall.x < 0 + data.draw.circle.size / 2
  ) {
    data.bouncyBall.speedX *= -1;
  }

  if (
    data.bouncyBall.y > p5.height - data.draw.circle.size / 2 ||
    data.bouncyBall.y < 0 + data.draw.circle.size / 2
  ) {
    data.bouncyBall.speedY *= -1;
  }
  data.bouncyBall.x += data.bouncyBall.speedX;
  data.bouncyBall.y += data.bouncyBall.speedY;
}
