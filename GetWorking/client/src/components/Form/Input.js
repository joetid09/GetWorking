import React from "react"

import classes from "./Input.module.css";

const Input = ({ text,
    type,
    placeholder = text,
    handleChange,
    name,
    id = name,
    required = false
}) => {
    return (
        <>
            <label htmlFor={id}>{text}</label>
            <input
                className={classes.input}>
                required={required}
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
            </input>
        </>
    )
}

export default Input;