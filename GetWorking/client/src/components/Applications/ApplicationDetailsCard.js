import React from 'react'
import { useHistory, useState } from 'react-router-dom'
import { Button } from 'reactstrap'

const ApplicationDetailCard = ({ application, setDetailModal }) => {
    return (
        <div>
            <h2>{application.jobTitle}</h2>
            <h1>something here</h1>
            <Button onClick={(() => setDetailModal(true))}>details</Button>
        </div>
    )
}

export default ApplicationDetailCard;