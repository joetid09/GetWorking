import React, { useState, useContext } from "react"
import Form from "./Form"
import { EventCreateForm } from "./FormElements"
import EventForm from './EventForm.js'
import { UserProfileContext } from '../../providers/UserProfileProvider'
import { useHistory } from "react-router-dom"

const EventCreate = ({ events, getEvent, setEvent, application, singleEvent, setEventModal, getApplication, setUpdateEventModal }) => {
    const [formData, setFormData] = useState({})
    const { getToken } = useContext(UserProfileContext)
    const history = useHistory();
    const token = getToken();


    const CreateEvent = (formData, token) => {
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
            .then(e => getEvent(formData.applicationId))
            .then(e => getApplication(formData.applicationId))
            .then(e => setEventModal(false))



    }
    const UpdateEvent = (singleEvent, token) => {
        //currently calling token.i due to there being 5 fields on token and "i" having the actual token
        debugger;
        fetch(`/api/event/${singleEvent.id}`, {

            method: "PUT",
            headers: {
                Authorization:
                    `Bearer ${token.i}`,
                "Content-Type": "application/JSON"

            },
            body: JSON.stringify(singleEvent)
        })
            .then(e => getApplication(`${singleEvent.applicationId}`))
            .then(e => getEvent(`${singleEvent.applicationId}`))
            .then(e => setUpdateEventModal(false))

    }

    const onSubmit = (e) => {
        e.preventDefault();
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