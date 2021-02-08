import React from 'react'
import { ModalHeader, Button } from 'reactstrap'
import EventCreate from '../Form/EventCreate'

const EventCreateModal = ({ setEventModal, events, setEvents, application }) => {
    return (
        <div>
            <ModalHeader>Create a a event</ModalHeader>
            <EventCreate events={events} setEventModal={setEventModal} application={application} />
            <Button
                onClick={() => {
                    setEventModal(false)
                }}>Cancel</Button>
        </div>
    )
}

export default EventCreateModal