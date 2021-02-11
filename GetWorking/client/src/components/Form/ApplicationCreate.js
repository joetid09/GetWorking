import React, { useState, useContext } from "react"
import Form from "./Form"
import { ApplicationForm } from "./FormElements"
import { UserProfileContext } from '../../providers/UserProfileProvider'
import { useHistory } from 'react-router-dom'

const ApplicationCreate = ({ application, setApplication, getApplication, setDetailModal }) => {
    const [formData, setFormData] = useState({})
    const { getToken } = useContext(UserProfileContext)
    const history = useHistory()
    const token = getToken();


    const CreateApplication = (formData, token) => {
        //currently calling token.i due to there being 5 fields on token and "i" having the actual token
        fetch("/api/application", {
            method: "POST",
            headers: {
                Authorization:
                    `Bearer ${token.i}`,
                "Content-Type": "application/JSON"

            },
            body: JSON.stringify(formData)
        })
        history.push("/applications")
    }
    const UpdateApplication = (application, token) => {
        //currently calling token.i due to there being 5 fields on token and "i" having the actual token
        fetch(`/api/application/${application.id}`, {
            method: "PUT",
            headers: {
                Authorization:
                    `Bearer ${token.i}`,
                "Content-Type": "application/JSON"

            },
            body: JSON.stringify(application)
        })
            .then(e => getApplication(application.id))
            .then(e => setDetailModal(false))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        application ? UpdateApplication(application, token) :
            CreateApplication(formData, token)
    }

    return (

        <Form
            // formTitle={formTitle}
            setFormData={setFormData}
            formStructure={ApplicationForm}
            formData={formData}
            buttonText="Save"
            onSubmit={onSubmit}
            application={application}
            setApplication={setApplication}
        />
    )
}

export default ApplicationCreate;