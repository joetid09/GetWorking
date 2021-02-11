import React, { useEffect } from "react";
import { Button } from "reactstrap"
import Input from "./Input"
import dayjs from 'dayjs'
// import Button from "./Button"
// import classes from "../Form.module.css"


const EventForm = ({
    formStructure,
    formData,
    setFormData,
    formTitle,
    buttonText,
    onSubmit,
    events,
    setEvent,
    singleEvent
}) => {

    const handleChange = event => {
        let eventCopy = { ...singleEvent }
        if (singleEvent) eventCopy[event.target.name] = event.target.value
        const formDataCopy = { ...formData };
        formDataCopy[event.target.name] = event.target.value;


        setFormData(formDataCopy);
        if (singleEvent) {
            setEvent(eventCopy)
        }
    }

    return (

        <form onSubmit={onSubmit}>
            {singleEvent ? (
                <h1>update card</h1>,
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
                            value={singleEvent[`${f.name}`]}
                            required={f.required}
                            maxLength={f.maxLength}
                        />
                    </div>
                )))
                :

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
                            maxLength={f.maxLength}
                        />
                    </div>
                ))
            }
            <Button type='submit'>{buttonText}</Button>
        </form>
    )
};

export default EventForm;