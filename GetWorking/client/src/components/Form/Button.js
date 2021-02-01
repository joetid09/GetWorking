import React from "react";

import classes from ".Button.module.css";

const Button = ({ text, clicked, buttonType }) => {
    return (
        <>
            <button onClick={clicked} className={`${classes.button} ${classes[buttonType]}`}>
                {text}
            </button>
        </>
    );
};