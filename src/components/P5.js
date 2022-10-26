import React from "react";
import dynamic from "next/dynamic";
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});
import { data } from "../data/canvas_data";
import bouncyBall from "../sketches/bouncyBall";
import simpleText from "../sketches/simpleText";

export default function P5Sketch(props) {
  // if (props) color = props.backgroundColor;
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    data.canvas = p5
      .createCanvas(p5.windowWidth * 0.8, p5.windowWidth * 0.8)
      .parent(canvasParentRef);
  };

  const draw = (p5) => {
    console.log(data.sketchChoice);
    switch (data.sketchChoice) {
      case 0:
        bouncyBall(p5, data);
        break;
      case 1:
        simpleText(p5, data);
        break;
      // case 3:
      //sketch3(p5,data)
      // break;
      default:
        bouncyBall(p5, data);
    }
  };

  const windowResized = (p5, event) => {
    p5.resizeCanvas(p5.windowWidth * 0.8, p5.windowWidth * 0.8);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
}
