import React, { useState, useContext } from "react"
import Form from "./Form"
import { EventCreateForm } from "./FormElements"
import EventForm from './EventForm.js'
import { UserProfileContext } from '../../providers/UserProfileProvider'

const EventCreate = ({ event, setEvent, application }) => {
    const [formData, setFormData] = useState({})
    const { getToken } = useContext(UserProfileContext)

    const token = getToken();


    const CreateEvent = (formData, token) => {
        debugger;
        //currently calling token.i due to there being 5 fields on token and "i" having the actual token
        fetch("/api/event", {
            method: "POST",
            headers: {
                Authorization:
                    `Bearer ${token.i}`,
                "Content-Type": "application/JSON"

            },
            body:
                JSON.stringify(formData)
        })
    }
    const UpdateEvent = (event, token) => {
        //currently calling token.i due to there being 5 fields on token and "i" having the actual token
        fetch(`/api/event/${event.id}`, {
            method: "PUT",
            headers: {
                Authorization:
                    `Bearer ${token.i}`,
                "Content-Type": "application/JSON"

            },
            body: JSON.stringify(event)
        })
    }

    const onSubmit = (e) => {
        debugger;
        event ? UpdateEvent(event, token) :
            formData.applicationId = application.id
        CreateEvent(formData, token)
    }

    return (

        <EventForm
            setFormData={setFormData}
            formStructure={EventCreateForm}
            formData={formData}
            buttonText="Save"
            onSubmit={onSubmit}
            application={application}
            setEvent={setEvent}
        />
    )
}

export default EventCreate;