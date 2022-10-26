import React, { useState, useRef } from "react";
import styles from "./ExperienceWrapper.module.scss";
import P5Sketch from "./P5";
import { data } from "../data/canvas_data";

export default function ExperienceWrapper(props) {
  const inputBox = useRef();
  const [sketchChoice, setSketchChoice] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);

  const bgButtonClick = (e) => {
    setSketchChoice(parseInt(e.target.value));
    data.sketchChoice = parseInt(e.target.value);
  };

  const generateSketch = (e) => {
    console.log(inputBox.current.value);
    data.text = inputBox.current.value;
  };

  const changeBGColor = (e) => {
    data.specs.backgroundColor = parseInt(e.target.value);
    console.log(data.specs.backgroundColor);
    setSliderValue(e.target.value);
  };

  return (
    <>
      <div className={styles.experienceWrapper}>
        {/* Buttons */}
        <div className={styles.buttonGroup}>
          <span>sketch: </span>
          <button onClick={bgButtonClick} value="0">
            ball
          </button>
          <button onClick={bgButtonClick} value="1">
            text
          </button>
        </div>
        {/* Sliders */}
        <div className={styles.backgroundGroup}>
          <span>background grayscale: </span>
          <input
            type="range"
            min="0"
            max="255"
            value={sliderValue}
            step="1"
            onChange={changeBGColor}
          ></input>
        </div>

        {/* Generate */}
        {sketchChoice === 1 && (
          <div className={styles.generateButton}>
            <label>text:</label> <input ref={inputBox}></input>
            <button onClick={generateSketch}>
              <span>Generate</span>
            </button>
          </div>
        )}
        {/*
         ***
         **
         */}
        <P5Sketch />
        {/*
         ***
         **
         */}

        {/* <div className={styles.saveButton}>
          <button>save</button>
        </div> */}
      </div>
    </>
  );
}
