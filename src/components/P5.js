import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
    ssr: false,
});
import { data, preloadData } from "../data/canvas_data";
import simpleText from "../sketches/simpleText";
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
        console.log(assetCount);

        // let randomImg = p5.random(preloadData[imgGroup].files);
        // data.params.symbol.value = p5.loadImage(randomImg);
        // data.params.symbol.w = preloadData[imgGroup].w;

        //preload fonts
        data.fonts.push(p5.loadFont("./fonts/bear.ttf"));
        data.fonts.push(p5.loadFont("./fonts/unicorn.ttf"));
        data.fonts.push(p5.loadFont("./fonts/peach.ttf"));
        data.fonts.push(p5.loadFont("./fonts/animal.ttf"));
        data.fonts.push(p5.loadFont("./fonts/guangnian.ttf"));
        data.fonts.push(p5.loadFont("./fonts/streetfighter.ttf"));
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

        // shapeFunc.colorGrid(p5, data);

        // LAYER 2: shape
        //
        // 1. if LAYER 2 value != null, draw a random pattern with corresponding shape
        // 2. if LAYER 2 value == null, draw nothing
        //
        // if (combinations[1].value != null) {
        //     let shape = combinations[1].value;
        //     console.log(shape);
        // }

        // LAYER 3:symbole
        //
        // 1. if LAYER 3 value != null, display the symbole in a random pattern/size
        // 2. if LAYER 3 value == null, draw nothing
        //
        if (
            data.params.string.value == null &&
            data.params.shape.value == null
        ) {
            p5.background(p5.random(255), p5.random(255), p5.random(255));
        }

        console.log(data.params.symbol.selected, data.params.symbol.value);
        if (
            data.params.symbol.selected != null &&
            data.params.symbol.value != null
        ) {
            console.log("in here");
            symbolFunc.drawSymbol(p5, data, preloadData);
        }
    };

    const windowResized = (p5, event) => {
        p5.resizeCanvas(p5.windowWidth * 0.8, p5.windowWidth * 0.8);
    };

    useEffect(() => {
        return () => {};
    }, []);

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
