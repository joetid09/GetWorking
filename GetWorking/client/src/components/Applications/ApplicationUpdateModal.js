import React from 'react'
import { ModalHeader, Button } from 'reactstrap'
import ApplicationCreate from '../Form/ApplicationCreate'

const ApplicationUpdateModal = ({ setDetailModal, application, setApplication, getApplication }) => {
    return (
        <div>
            <ApplicationCreate application={application} setApplication={setApplication} getApplication={getApplication} setDetailModal={setDetailModal} />
        </div>
    )
}

export default ApplicationUpdateModal