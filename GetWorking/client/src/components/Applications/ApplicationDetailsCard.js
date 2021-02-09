import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'reactstrap'
import dayjs from 'dayjs'

const ApplicationDetailCard = ({ application, setDetailModal, setEventModal, getApplication }) => {

    var dayjs = require('dayjs')
    { dayjs(application.dateApplied).format('YYYY/DD/MM') }

    const Delete = (application) => {

        return fetch(`/api/application/${application.id}`, {
            method: "DELETE",
        })
            .then(getApplication(application.id))
    }

    return (
        <div>
            <h2>{application.jobTitle}</h2>
            <p>applied on   {dayjs(application.dateApplied).format('YYYY/DD/MM')}</p>
            <Button onClick={(() => setEventModal(true))}> Create new event</Button>
            <Button onClick={(() => setDetailModal(true))}>Edit</Button>
            <Button onClick={(() => { Delete(application) })}>delete</Button>
            {/* <Button onClick={(() => setDeleteModal(true))}> Delete</Button> */}
        </div >
    )
}

export default ApplicationDetailCard;