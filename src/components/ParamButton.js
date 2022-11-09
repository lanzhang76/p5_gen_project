import React, { useState, useRef, useEffect } from "react";
import styles from "./ParamButton.module.scss";

export default function ParamButton(props) {
    const [buttonActive, setButtonActive] = useState();
    const btn = useRef();

    const handleClick = (e) => {
        buttonActive ? setButtonActive(false) : setButtonActive(true);
        props.shapeButtonClick(parseInt(btn.current.innerText));
    };

    useEffect(() => {
        props.selected == props.el
            ? setButtonActive(true)
            : setButtonActive(false);
    }, [props.selected]);

    return (
        <>
            <button
                className={`${buttonActive && styles.active} ${
                    styles.buttonStyle
                }`}
                onClick={handleClick}
                ref={btn}
            >
                {props.el}
            </button>
        </>
    );
}
