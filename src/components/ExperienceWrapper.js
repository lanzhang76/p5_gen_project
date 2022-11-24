import React, { useState, useRef } from 'react';
import styles from './ExperienceWrapper.module.scss';
import P5Sketch from './P5';
import ParamButton from './ParamButton';
import { data } from '../data/canvas_data';

export default function ExperienceWrapper(props) {
    const inputBox = useRef();
    const [selectedString, setSelectedString] = useState(0);
    const [selectedShape, setSelectedShape] = useState(0);
    const [selectedSymbol, setSelectedSymbol] = useState(0);
    const testString = useState(0);

    const handleInput = (e) => {
        setSelectedString(e.target.value);
        if (e.target.value.length > 0) {
            data.params.string.value = e.target.value;
            data.params.string.selected = true;
        } else {
            data.params.string.value = null;
            data.params.string.selected = false;
        }
    };

    const shapeButtonClick = (num, unselect) => {
        setSelectedShape(num);
        data.params.shape.index = num;
        data.params.shape.selected = true;
        if (unselect) {
            setSelectedShape(0);
            data.params.shape.selected = false;
        }
    };

    const symbolButtonClick = (num, unselect) => {
        setSelectedSymbol(num);
        data.params.symbol.index = num;
        data.params.symbol.selected = true;
        if (unselect) {
            setSelectedSymbol(null);
            data.params.symbol.selected = false;
        }
    };

    const generateSketch = (e) => {
        console.log(`text:${selectedString}, shape: ${selectedShape}, symbol: ${selectedSymbol}`);
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
                    <label className={styles.label}>shape:</label>
                    {[...Array(5)].map((el, index) => {
                        return (
                            <ParamButton el={index + 1} shapeButtonClick={shapeButtonClick} selected={selectedShape} key={index + 'g1'}></ParamButton>
                        );
                    })}
                </div>

                <div className={styles.optionGroup}>
                    <label className={styles.label}>symbol:</label>
                    {[...Array(45)].map((el, index) => (
                        <ParamButton
                            el={index + 1}
                            shapeButtonClick={symbolButtonClick}
                            selected={selectedSymbol}
                            key={index + 'g_symbole'}
                        ></ParamButton>
                    ))}
                </div>

                {/*
                 ***
                 **
                 */}
                <P5Sketch />
                {/*
                 ***
                 **
                 */}

                {/* Generate */}

                <div className={styles.generateButton} id="generateButton"></div>

                {/* <div className={styles.saveButton}>
          <button>save</button>
        </div> */}
            </div>
        </>
    );
}
