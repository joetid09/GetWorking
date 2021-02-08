import React from 'react'
import { ModalHeader, Button } from 'reactstrap'
import EventCreate from '../Form/EventCreate'

const EventCreateModal = ({ setEventModal, events, setEvent, application, singleEvent }) => {
    console.log(singleEvent)
    return (
        <div>
            <ModalHeader>Create a a event</ModalHeader>
            <EventCreate events={events} setEventModal={setEventModal} application={application} singleEvent={singleEvent} setEvent={setEvent} />
            <Button
                onClick={() => {
                    setEventModal(false)
                }}>Cancel</Button>
        </div>
    )
}

export default EventCreateModal