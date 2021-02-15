import React from 'react'
import { ModalHeader, Button } from 'reactstrap'
import EventCreate from '../Form/EventCreate'

const EventUpdateModal = ({ events, setEvent, application, singleEvent, setUpdateEventModal, getApplication, getEvent }) => {
    return (
        <div>
            <EventCreate getApplication={getApplication} setUpdateEventModal={setUpdateEventModal} getEvent={getEvent} events={events} application={application} singleEvent={singleEvent} setEvent={setEvent} />
        </div>
    )
}

export default EventUpdateModal