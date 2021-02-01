import React, { useState } from "react"
import Form from "./Form"
import { ApplicationForm } from "./FormElements"

const ApplicationCreate = props => {
    const [formData, setFormData] = useState({})
    const formTitle = "Log a new Applicaiton"
    console.log(ApplicationForm)
    //create onSubmit to submit form to api
    //const onSubmit = e => {}
    return (
        <Form
            //onSubmit={onSubmit}
            formTitle={formTitle}
            setFormData={setFormData}
            formStructure={ApplicationForm}
            formData={formData}
            buttonText="add application"
        />
    )
}

export default ApplicationCreate;