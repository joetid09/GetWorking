import React from 'react'
import { ModalHeader, Button } from 'reactstrap'
import EventCreate from '../Form/EventCreate'

const EventCreateModal = ({ setEventModal, events, setEvents }) => {
    return (
        <div>
            <ModalHeader>Create a a event</ModalHeader>
            <EventCreate events={events} setEventModal={setEventModal} />
            <Button
                onClick={() => {
                    setEventModal(false)
                }}>Cancel</Button>
        </div>
    )
}

export default EventCreateModal