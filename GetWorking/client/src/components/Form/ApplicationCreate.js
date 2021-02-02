import React, { useState, useContext } from "react"
import Form from "./Form"
import { ApplicationForm } from "./FormElements"
import { UserProfileContext } from '../../providers/UserProfileProvider'

const ApplicationCreate = ({ form }) => {
    const [formData, setFormData] = useState({})
    const { getToken } = useContext(UserProfileContext)

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
    const UpdateApplication = (formData, token) => {
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
        form == "editDetails" ? UpdateApplication() :
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
        />
    )
}

export default ApplicationCreate;