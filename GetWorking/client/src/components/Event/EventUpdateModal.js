import React from 'react'
import { ModalHeader, Button } from 'reactstrap'
import EventCreate from '../Form/EventCreate'

const EventUpdateModal = ({ events, setEvent, application, singleEvent, setUpdateEventModal, getApplication, getEvent }) => {
    return (
        <div>
            <ModalHeader>Edit Event</ModalHeader>
            <EventCreate getApplication={getApplication} setUpdateEventModal={setUpdateEventModal} getEvent={getEvent} events={events} application={application} singleEvent={singleEvent} setEvent={setEvent} />
            <Button
                onClick={() => {
                    setUpdateEventModal(false)
                }}>Cancel</Button>
        </div>
    )
}

export default EventUpdateModal