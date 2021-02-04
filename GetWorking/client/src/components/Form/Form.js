import React, { useEffect } from "react";
import { Button } from "reactstrap"
import Input from "./Input"
import dayjs from 'dayjs'
// import Button from "./Button"
// import classes from "../Form.module.css"


const Form = ({
    formStructure,
    formData,
    setFormData,
    formTitle,
    buttonText,
    onSubmit,
    application,
    setApplication
}) => {

    const handleChange = event => {
        let applicationCopy = { ...application }
        if (application) applicationCopy[event.target.name] = event.target.value
        const formDataCopy = { ...formData };
        formDataCopy[event.target.name] = event.target.value;


        setFormData(formDataCopy);
        if (application) {
            setApplication(applicationCopy)
        }
    }

    return (

        <form onSubmit={onSubmit}>

            <h2>{formTitle}</h2>
            {application ? (
                formStructure.map(f => (
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
                )))
                :
                formStructure.map(f => (
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
                ))
            }
            <Button type='submit'>{buttonText}</Button>
        </form>
    )
};

export default Form;