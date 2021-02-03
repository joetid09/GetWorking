import React from 'react'
import { ModalHeader, Button } from 'reactstrap'
import ApplicationCreate from '../Form/ApplicationCreate'

const ApplicationUpdateModal = ({ setDetailModal, application }) => {
    return (
        <div>
            <ModalHeader>Update Application Information</ModalHeader>
            <ApplicationCreate application={application} />
            <Button
                onClick={() => {
                    setDetailModal(false)
                }}>Cancel</Button>
        </div>
    )
}

export default ApplicationUpdateModal