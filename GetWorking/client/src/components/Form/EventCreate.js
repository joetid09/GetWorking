import React, { useState, useContext } from "react"
import Form from "./Form"
import { EventForm } from "./FormElements"
import { UserProfileContext } from '../../providers/UserProfileProvider'

const EventCreate = ({ event, setEvent }) => {
    const [formData, setFormData] = useState({})
    const { getToken } = useContext(UserProfileContext)

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
            body: JSON.stringify(formData)
        })
    }
    // const UpdateApplication = (application, token) => {
    //     //currently calling token.i due to there being 5 fields on token and "i" having the actual token
    //     fetch(`/api/application/${application.id}`, {
    //         method: "PUT",
    //         headers: {
    //             Authorization:
    //                 `Bearer ${token.i}`,
    //             "Content-Type": "application/JSON"

    //         },
    //         body: JSON.stringify(application)
    //     })
    // }

    const onSubmit = (e) => {
        // application ? UpdateApplication(application, token) :
        CreateEvent(formData, token)
    }

    return (

        <Form
            // formTitle={formTitle}
            setFormData={setFormData}
            formStructure={EventForm}
            formData={formData}
            buttonText="Save"
            onSubmit={onSubmit}
        // application={application}
        // setApplication={setApplication}
        />
    )
}

export default EventCreate;