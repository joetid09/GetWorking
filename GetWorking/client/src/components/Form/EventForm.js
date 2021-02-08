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
    setEvents
}) => {

    const handleChange = event => {
        let eventCopy = { ...events }
        if (event) eventCopy[event.target.name] = event.target.value
        const formDataCopy = { ...formData };
        formDataCopy[event.target.name] = event.target.value;


        setFormData(formDataCopy);
        if (event) {
            setEvents(eventCopy)
        }
    }

    return (

        <form onSubmit={onSubmit}>
            {events ? (
                formStructure.map(f => (
                    <Input
                        key={f.name}
                        type={f.type}
                        name={f.name}
                        id={f.id}
                        text={f.text}
                        handleChange={handleChange}
                        placeholder={f.placeholder}
                        value={events[`${f.name}`]}
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

export default EventForm;