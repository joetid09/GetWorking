import React from 'react'
import { ModalHeader, Button } from 'reactstrap'
import EventCreate from '../Form/EventCreate'

const EventUpdateModal = ({ events, setEvent, application, singleEvent, setUpdateEventModal }) => {
    return (
        <div>
            <ModalHeader>Edit Event</ModalHeader>
            <EventCreate events={events} application={application} singleEvent={singleEvent} setEvent={setEvent} />
            <Button
                onClick={() => {
                    setUpdateEventModal(false)
                }}>Cancel</Button>
        </div>
    )
}

export default EventUpdateModal