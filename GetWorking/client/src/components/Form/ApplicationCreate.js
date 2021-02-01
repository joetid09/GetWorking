import React, { useState } from "react"
import Form from "./Form"
import { ApplicationForm } from "./FormElements"

const ApplicationCreate = props => {
    const [formData, setFormData] = useState({})

    //create onSubmit to submit form to api
    //const onSubmit = e => {}
    return (
        <Form
            //onSubmit={onSubmit}
            formTitle="Log a new application"
            setFormData={setFormData}
            formStructure={ApplicationForm}
            formData={formData}
            buttonText="add application"
        />
    )
}

export default ApplicationForm;