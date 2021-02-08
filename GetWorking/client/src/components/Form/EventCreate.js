import React, { useState, useContext } from "react"
import Form from "./Form"
import { EventCreateForm } from "./FormElements"
import EventForm from './EventForm.js'
import { UserProfileContext } from '../../providers/UserProfileProvider'

const EventCreate = ({ events, setEvent, application, singleEvent }) => {
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
    const UpdateEvent = (singleEvent, token) => {
        //currently calling token.i due to there being 5 fields on token and "i" having the actual token
        fetch(`/api/event/${singleEvent.id}`, {
            method: "PUT",
            headers: {
                Authorization:
                    `Bearer ${token.i}`,
                "Content-Type": "application/JSON"

            },
            body: JSON.stringify(singleEvent)
        })
    }

    const onSubmit = (e) => {
        formData.applicationId = application.id
        singleEvent ? UpdateEvent(singleEvent, token)
            : CreateEvent(formData, token)

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
            singleEvent={singleEvent}
        />
    )
}

export default EventCreate;