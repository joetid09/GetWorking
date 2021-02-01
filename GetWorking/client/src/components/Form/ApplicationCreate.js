import React, { useState, useContext } from "react"
import Form from "./Form"
import { ApplicationForm } from "./FormElements"
import { UserProfileContext } from '../../providers/UserProfileProvider'

const ApplicationCreate = () => {
    const [formData, setFormData] = useState({})
    const { getToken } = useContext(UserProfileContext)

    const formTitle = "Log a new Application"
    const token = getToken();
    //create onSubmit to submit form to api

    const CreateApplication = (formData, token) => {
        debugger;
        console.log(` bearer ${token.i}`)
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
        e.preventDefault()
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