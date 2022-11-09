import React, { useState, useRef } from "react";
import styles from "./ExperienceWrapper.module.scss";
import P5Sketch from "./P5";
import ParamButton from "./ParamButton";
import { data } from "../data/canvas_data";

export default function ExperienceWrapper(props) {
    const inputBox = useRef();
    const [selectedString, setSelectedString] = useState(0);
    const [selectedShape, setSelectedShape] = useState(0);
    const [selectedSymbol, setSelectedSymbol] = useState(0);

    const handleInput = (e) => {
        setSelectedString(e.target.value);
        data.params.string.value = e.target.value;
    };

    const shapeButtonClick = (num) => {
        setSelectedShape(num);
        data.params.shape.index = num;
        data.params.shape.selected = true;
    };

    const symbolButtonClick = (num) => {
        setSelectedSymbol(num);
        data.params.symbol.index = num;
        data.params.symbol.selected = true;
    };

    const generateSketch = (e) => {
        console.log(
            `text:${selectedString}, shape: ${selectedShape}, symbol: ${selectedSymbol}`
        );
    };

    return (
        <>
            <div className={styles.experienceWrapper}>
                {/* Buttons */}
                <div className={styles.optionGroup}>
                    {/* <input type="checkbox" id="stringInput" /> */}
                    <label className={styles.label}>string:</label>
                    <input ref={inputBox} onChange={handleInput}></input>
                </div>

                <div className={styles.optionGroup}>
                    {/* <input type="checkbox" id="stringInput" /> */}
                    <label className={styles.label}>shape:</label>
                    {[1, 2, 3, 4, 5, 6].map((el) => (
                        <ParamButton
                            el={el}
                            shapeButtonClick={shapeButtonClick}
                            selected={selectedShape}
                            key={el + "g1"}
                        ></ParamButton>
                    ))}
                </div>

                <div className={styles.optionGroup}>
                    {/* <input type="checkbox" id="stringInput" /> */}
                    <label className={styles.label}>symbol:</label>
                    {[1, 2, 3, 4, 5].map((el) => (
                        <ParamButton
                            el={el}
                            shapeButtonClick={symbolButtonClick}
                            selected={selectedSymbol}
                            key={el + "g_symbole"}
                        ></ParamButton>
                    ))}
                </div>

                {/* Generate */}

                <div
                    className={styles.generateButton}
                    id="generateButton"
                ></div>

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
