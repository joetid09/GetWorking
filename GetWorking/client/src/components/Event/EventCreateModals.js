import React from 'react'
import { ModalHeader, Button } from 'reactstrap'
import EventCreate from '../Form/EventCreate'

const EventCreateModal = ({ setEventModal, events, setEvent, application, getEvent, getApplication }) => {
    return (
        <div>
            <EventCreate getApplication={getApplication} getEvent={getEvent} events={events} setEventModal={setEventModal} setEventModal={setEventModal} application={application} />
        </div>
    )
}

export default EventCreateModal