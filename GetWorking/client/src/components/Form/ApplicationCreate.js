import React, { useState, useContext } from "react"
import Form from "./Form"
import { ApplicationForm } from "./FormElements"
import { UserProfileContext } from '../../providers/UserProfileProvider'

const ApplicationCreate = () => {
    const [formData, setFormData] = useState({})
    const { getToken } = useContext(UserProfileContext)

    const formTitle = "Log a new Application"
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
    }

    const onSubmit = (e) => {
        CreateApplication(formData, token)
    }
    return (
        <Form
            formTitle={formTitle}
            setFormData={setFormData}
            formStructure={ApplicationForm}
            formData={formData}
            buttonText="add application"
            onSubmit={onSubmit}
        />
    )
}

export default ApplicationCreate;