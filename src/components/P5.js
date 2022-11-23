import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
});
import { data, preloadData } from '../data/canvas_data';
import * as shapeFunc from '../sketches/shape/_shape';
import * as symbolFunc from '../sketches/symbol/_symbol';
import * as stringFunc from '../sketches/text/_text';
import * as shapeStringFunc from '../sketches/shapeText/_shapeText';

let button;
let assetCount = 0;
let mons;
let symbols;

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
                        // console.log(assetCount);
                    })
                );
            }
            group.push({ imgGroup, imgs });
        }
        data.params.symbol.value = group;
        // console.log(assetCount);

        //preload fonts
        data.fonts.push(p5.loadFont('./fonts/bear.ttf'));
        // data.fonts.push(p5.loadFont('./fonts/unicorn.ttf'));
        data.fonts.push(p5.loadFont('./fonts/peach.ttf'));
        // data.fonts.push(p5.loadFont('./fonts/animal.ttf'));
        data.fonts.push(p5.loadFont('./fonts/guangnian.ttf'));
        // data.fonts.push(p5.loadFont('./fonts/streetfighter.ttf'));

        mons = p5.loadFont('./fonts/Montserrat-Black.ttf');
        symbols = p5.loadFont('./fonts/symbolFont.woff');
    };

    const setup = (p5, canvasParentRef) => {
        // set up canvas
        data.canvas = p5
            .createCanvas(p5.windowWidth * 0.8, p5.windowWidth * 0.8)
            .parent(canvasParentRef);

        //set up generate button
        button = p5.createButton('generate');
        button.addClass('generateBtn');
        button.parent('generateButton');
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
        // reset things:
        p5.noStroke();
        p5.blendMode(p5.BLEND);

        //
        // LAYER 1: string
        //

        if (
            data.params.string.value != null &&
            data.params.symbol.selected == false &&
            data.params.shape.selected == false
        ) {
            let options = 4;
            let stringFuncNum = Math.floor(Math.random() * options);
            switch (stringFuncNum) {
                case 0:
                    stringFunc.tiltGrid(p5, data, data.params.string.value);
                    break;

                case 1:
                    stringFunc.row(p5, data, data.params.string.value);
                    break;

                case 2:
                    stringFunc.upsideDown(p5, data, data.params.string.value);
                    break;

                case 3:
                    stringFunc.splash(p5, data, data.params.string.value);
                    break;

                default:
                    stringFunc.upsideDown(p5, data, data.params.string.value);
                    break;
            }
        }

        //
        // LAYER 1 + LAYER 1
        //
        if (
            data.params.string.value != null &&
            data.params.shape.selected != false &&
            data.params.symbol.selected == false
        ) {
            switch (data.params.shape.index) {
                case 1:
                    // text circle Grid
                    shapeStringFunc.text_circleGrid(
                        p5,
                        data,
                        data.params.string.value
                    );
                    break;

                case 2:
                    // text color Grid
                    shapeStringFunc.text_ColorGrid(
                        p5,
                        data,
                        data.params.string.value
                    );
                    break;

                case 3:
                    // text quad
                    shapeStringFunc.text_quad(
                        p5,
                        data,
                        data.params.string.value
                    );
                    break;

                case 4:
                    // text strokes
                    shapeStringFunc.text_stroke(
                        p5,
                        data,
                        data.params.string.value
                    );
                    break;

                case 5:
                    // text strokes
                    shapeStringFunc.text_triangle(
                        p5,
                        data,
                        data.params.string.value,
                        mons
                    );
                    break;
            }
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
            switch (data.params.shape.index) {
                case 1:
                    // circle
                    shapeFunc.simpleCircle(p5, data);
                    break;

                case 2:
                    // square
                    let squareR = Math.random();
                    squareR > 0.5
                        ? shapeFunc.simpleSquare(p5, data)
                        : shapeFunc.colorBlock(p5, data);
                    break;

                case 3:
                    // quad
                    shapeFunc.quads(p5, data);
                    break;

                case 4:
                    // line
                    shapeFunc.lineGrid(p5, data);
                    break;

                case 5:
                    // triangle
                    shapeFunc.triangleGrid(p5, data);
                    break;

                default:
                    break;
            }
        }

        // if (
        //     data.params.string.selected == false &&
        //     data.params.symbol.selected == false &&
        //     data.params.shape.selected
        // ) {
        //     p5.background(p5.random(255), p5.random(255), p5.random(255));
        // }

        // if (data.params.shape.selected != false) {
        //     console.log(data.params.shape.index);
        //     switch (data.params.shape.index) {
        //         case 1:
        //             shapeFunc.colorGrid(p5, data);
        //             break;

        //         case 2:
        //             shapeFunc.simpleCircle(p5, data);
        //             break;

        //         case 3:
        //             shapeFunc.quads(p5, data);
        //             break;

        //         case 4:
        //             shapeFunc.circleGrid(p5, data);
        //             break;

        //         case 5:
        //             shapeFunc.stack(p5, data);
        //             break;
        //     }
        // }

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

        granulate(p5, 15);
        // granulateFuzzify(p5, 15);
    };

    const windowResized = (p5, event) => {
        p5.resizeCanvas(p5.windowWidth * 0.8, p5.windowWidth * 0.8);
    };

    function granulate(p5, amount) {
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

    function granulateFuzzify(p5, _amount) {
        p5.loadPixels();
        const d = p5.pixelDensity();
        const fuzzyPixels = 2; // pixels
        const modC = 4 * fuzzyPixels; // channels * pixels
        const modW = 4 * p5.width * d;
        const pixelsCount = modW * (p5.height * d);
        for (let i = 0; i < pixelsCount; i += 4) {
            const f = modC + modW;
            // fuzzify
            if (p5.pixels[i + f]) {
                p5.pixels[i] = p5.round((p5.pixels[i] + p5.pixels[i + f]) / 2);
                p5.pixels[i + 1] = p5.round(
                    (p5.pixels[i + 1] + p5.pixels[i + f + 1]) / 2
                );
                p5.pixels[i + 2] = p5.round(
                    (p5.pixels[i + 2] + p5.pixels[i + f + 2]) / 2
                );
                // comment in, if you want to granulate the alpha value
                // pixels[i+3] = round((pixels[i+3] + pixels[i+f+3])/2);
            }
            // granulate
            p5.pixels[i] = p5.pixels[i] + p5.random(-_amount, _amount);
            p5.pixels[i + 1] = p5.pixels[i + 1] + p5.random(-_amount, _amount);
            p5.pixels[i + 2] = p5.pixels[i + 2] + p5.random(-_amount, _amount);
            // comment in, if you want to granulate the alpha value
            // pixels[i+3] = pixels[i+3] + random(-_amount, _amount);
        }
        p5.updatePixels();
    }

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
