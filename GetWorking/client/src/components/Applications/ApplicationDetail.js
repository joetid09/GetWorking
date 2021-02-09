import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserProfileContext } from '../../providers/UserProfileProvider'
import ApplicationDetailCard from './ApplicationDetailsCard'
import ApplicationUpdateModal from './ApplicationUpdateModal'
import EventUpdateModal from '../Event/EventUpdateModal'
import { Modal, ModalHeader, Button } from 'reactstrap'
import EventCard from '../Event/EventCard'
import EventCreateModal from '../Event/EventCreateModals'

const ApplicationDetail = () => {
    const [application, setApplication] = useState({})
    const [events, setEvents] = useState([])
    const [singleEvent, setEvent] = useState({})
    const [detailModal, setDetailModal] = useState(false)
    const [eventModal, setEventModal] = useState(false)
    const [updateEventModal, setUpdateEventModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const { getToken } = useContext(UserProfileContext)
    const { appId } = useParams();
    const token = getToken()

    useEffect(() => {
        getEvent(appId)
        getApplication(appId)
    }, [])

    const getApplication = (id) => {
        fetch(`/api/application/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        },
        )
            .then((res) => res.json())
            .then((apps) => setApplication(apps))
    }

    const getEvent = (applicationId) => {
        fetch(`/api/event/${applicationId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        },
        )
            .then((res) => res.json())
            .then((evs) => setEvents(evs))
    }
    return (
        <div>
            {


                eventModal ?
                    <Modal isOpen={eventModal}>
                        <EventCreateModal setEventModal={setEventModal} events={events} setEvent={setEvent} application={application} />
                    </Modal>
                    :
                    detailModal ?
                        <Modal isOpen={detailModal}>
                            <ApplicationUpdateModal setDetailModal={setDetailModal} application={application} setApplication={setApplication} />
                        </Modal>
                        :
                        updateEventModal ? (console.log(singleEvent),
                            <Modal isOpen={updateEventModal}>
                                <EventUpdateModal setDetailModal={setDetailModal} application={application} setApplication={setApplication} setUpdateEventModal={setUpdateEventModal} singleEvent={singleEvent} setEvent={setEvent} />
                            </Modal>
                        )
                            :
                            <div>
                                <div className="detailsHeader"> <ApplicationDetailCard application={application} setEventModal={setEventModal} setDetailModal={setDetailModal} detailModal={detailModal} events={events} getApplication={getApplication} /> </div>
                                <div className="deventList">{events.map(e => <EventCard e={e} setEventModal={setEventModal} setEvent={setEvent} setUpdateEventModal={setUpdateEventModal} getEvent={getEvent} />)}</div>
                            </div>


            }
        </div>
    )
}

export default ApplicationDetail;