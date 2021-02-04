import React from "react"

// import classes from "./Input.module.css";

const Input = ({ text,
    type,
    placeholder = text,
    handleChange,
    name,
    id = name,
    required = false,
    value
}) => {

    console.log("values", value)
    return (
        <>
            <label htmlFor={id}>{text}</label>
            <input
                className="{classes.input}"
                required={required}
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}

            />

        </>
    )
}

export default Input;