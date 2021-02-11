import React, { useEffect } from "react";
import { Button } from "reactstrap"
import Input from "./Input"
import "./Form.css";
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
        <div className="app-form">
            <form onSubmit={onSubmit}>
                {
                    application ? <h2>Update Application</h2>
                        :
                        <h2>New Application</h2>
                }

                {application ? (
                    (<h2>{formTitle}</h2>,
                        formStructure.map(f => (
                            <div classname="form-group">
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
                            </div>)
                        )))
                    : (<h2>anything</h2>,
                        formStructure.map(f => (
                            <div classname="form-group">
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
                            </div>
                        ))
                    )
                }
                <Button type='submit'>{buttonText}</Button>
            </form>
        </div>
    )
};

export default Form;