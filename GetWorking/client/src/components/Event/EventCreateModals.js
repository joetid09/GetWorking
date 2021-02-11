import React from 'react'
import { ModalHeader, Button } from 'reactstrap'
import EventCreate from '../Form/EventCreate'

const EventCreateModal = ({ setEventModal, events, setEvent, application, getEvent, getApplication }) => {
    return (
        <div>
            <ModalHeader>Create a a event</ModalHeader>
            <EventCreate getApplication={getApplication} getEvent={getEvent} events={events} setEventModal={setEventModal} setEventModal={setEventModal} application={application} />
            <Button
                onClick={() => {
                    setEventModal(false)
                    setEvent(null)
                }}>Cancel</Button>
        </div>
    )
}

export default EventCreateModal