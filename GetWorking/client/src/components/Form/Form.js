import React from "react";
import { Button } from "reactstrap"
import Input from "./Input"
// import Button from "./Button"
// import classes from "../Form.module.css"

const Form = ({
    formStructure,
    formData,
    setFormData,
    formTitle,
    buttonText,
    onSubmit,
    application
}) => {
    const handleChange = event => {
        console.log(formStructure)
        const formDataCopy = { ...formData };
        formDataCopy[event.target.name] = event.target.value;
        setFormData(formDataCopy);
    }

    return (

        <form onSubmit={onSubmit}>

            <h2>{formTitle}</h2>
            {formStructure.map(f => (
                <Input
                    key={f.name}
                    type={f.type}
                    name={f.name}
                    id={f.id}
                    text={f.text}
                    handleChange={handleChange}
                    placeholder={f.placeholder}
                    value={application[`${f.name}`]}
                    required={f.required}

                />
            ))}
            <Button type='submit'>{buttonText}</Button>
        </form>
    )
};

export default Form;