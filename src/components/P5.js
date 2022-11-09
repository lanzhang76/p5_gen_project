import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
    ssr: false,
});
import { data, preloadData } from "../data/canvas_data";
import * as shapeFunc from "../sketches/shape/_shape";
import * as symbolFunc from "../sketches/symbol/_symbol";
import * as stringFunc from "../sketches/text/_text";

let button;
let assetCount = 0;

export default function P5Sketch(props) {
    let canvasParentRef = useRef();

    const preload = (p5, canvasParentRef) => {
        // preload images

        let group = [];

        for (let i = 0; i < Object.keys(preloadData).length; i++) {
            let imgGroup = i;
            let imgs = [];
            for (let j = 0; j < preloadData[imgGroup].files.length; j++) {
                imgs.push(
                    p5.loadImage(preloadData[imgGroup].files[j], (img) => {
                        assetCount++;
                        console.log(assetCount);
                    })
                );
            }
            group.push({ imgGroup, imgs });
        }
        data.params.symbol.value = group;
        // console.log(assetCount);

        //preload fonts
        data.fonts.push(p5.loadFont("./fonts/bear.ttf"));
        data.fonts.push(p5.loadFont("./fonts/unicorn.ttf"));
        // data.fonts.push(p5.loadFont("./fonts/peach.ttf"));
        // data.fonts.push(p5.loadFont("./fonts/animal.ttf"));
        // data.fonts.push(p5.loadFont("./fonts/guangnian.ttf"));
        // data.fonts.push(p5.loadFont("./fonts/streetfighter.ttf"));
    };

    const setup = (p5, canvasParentRef) => {
        // set up canvas
        data.canvas = p5
            .createCanvas(p5.windowWidth * 0.8, p5.windowWidth * 0.8)
            .parent(canvasParentRef);

        //set up generate button
        button = p5.createButton("generate");
        button.addClass("generateBtn");
        button.parent("generateButton");
        button.mousePressed(() => {
            p5.clear();
            p5.redraw();
            console.log(
                data.params.string.value,
                data.params.shape.index,
                data.params.symbol.index
            );
        });
        p5.noLoop();
        p5.background(230);
    };

    const draw = (p5) => {
        //
        // LAYER 1: string
        //

        if (data.params.string.value != null) {
            // console.log(data.params.string.value);
            stringFunc.textLayout(p5, data, data.params.string.value);
        }

        //
        // LAYER 2: shape
        //

        // if layer 1 and 3 are not selected, add background color
        if (
            data.params.string.selected == false &&
            data.params.symbol.selected == false &&
            data.params.shape.selected
        ) {
            p5.background(p5.random(255), p5.random(255), p5.random(255));
        }

        if (data.params.shape.selected != false) {
            console.log(data.params.shape.index);
            switch (data.params.shape.index) {
                case 1:
                    shapeFunc.colorGrid(p5, data);
                    break;

                case 2:
                    shapeFunc.simpleCircle(p5, data);
                    break;

                case 3:
                    shapeFunc.quads(p5, data);
                    break;

                case 4:
                    shapeFunc.circleGrid(p5, data);
                    break;

                case 5:
                    shapeFunc.stack(p5, data);
                    break;
            }
        }

        //
        // LAYER 3:symbol
        //

        // if layer 1 and 2 are not selected, add background color
        if (
            data.params.string.selected == false &&
            data.params.shape.selected == false &&
            data.params.symbol.selected
        ) {
            p5.background(p5.random(255), p5.random(255), p5.random(255));
        }

        if (
            data.params.symbol.selected != false &&
            data.params.symbol.value != null
        ) {
            symbolFunc.drawSymbol(p5, data, preloadData);
        }
    };

    const windowResized = (p5, event) => {
        p5.resizeCanvas(p5.windowWidth * 0.8, p5.windowWidth * 0.8);
    };

    return (
        <>
            <div ref={canvasParentRef} className="p5Parent">
                <Sketch
                    preload={preload}
                    setup={setup}
                    draw={draw}
                    windowResized={windowResized}
                />
            </div>
        </>
    );
}
