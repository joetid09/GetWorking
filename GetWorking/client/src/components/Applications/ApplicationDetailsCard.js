import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'reactstrap'
import dayjs from 'dayjs'

const ApplicationDetailCard = ({ application, setDetailModal, events }) => {

    var dayjs = require('dayjs')
    { dayjs(application.dateApplied).format('YYYY/DD/MM') }

    return (
        <div>
            <h2>{application.jobTitle}</h2>
            <h1>something here</h1>
            <p>applied on   {dayjs(application.dateApplied).format('YYYY/DD/MM')}</p>
            <Button onClick={(() => setDetailModal(true))}>Edit</Button>
            {/* <Button onClick={(() => setDeleteModal(true))}> Delete</Button> */}
        </div>
    )
}

export default ApplicationDetailCard;