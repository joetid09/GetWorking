import React from 'react'
import { ModalHeader, Button } from 'reactstrap'
import ApplicationCreate from '../Form/ApplicationCreate'

const ApplicationUpdateModal = ({ setDetailModal }) => {
    return (
        <div>
            <ModalHeader>Update Application Information</ModalHeader>
            <ApplicationCreate form="editDetails" />
            <Button
                onClick={() => {
                    setDetailModal(false)
                }}>Cancel</Button>
        </div>
    )
}

export default ApplicationUpdateModal