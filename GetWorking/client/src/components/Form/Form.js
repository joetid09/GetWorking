import React from "react";

import Input from "./Input"
import Button from "./Button"
import classes from "../Form.module.css"

const Form = ({
    FormStructure,
    formData,
    setFormData,
    formTitle,
    buttonText,
    onSubmit
}) => {
    const handleChange = event => {
        const formDataCopy = { ...formData };
        formDataCopy[event.target.name] = event.target.value;
        setFormData(formDataCopy);
    }

    return (
        <form className={classes.form} onSubmit={onSubmit}>
            <h2>{formTitle}</h2>
            {FormStructure.map(f => (
                <Input
                    key={f.name}
                    type={f.type}
                    name={f.name}
                    id={f.id}
                    text={f.text}
                    handleChange={handleChange}
                    placeholder={f.placeholder}
                    required={f.required}
                />
            ))}
            <Button buttonType='primary' text={buttonText} />
        </form>
    )
};

export default Form;