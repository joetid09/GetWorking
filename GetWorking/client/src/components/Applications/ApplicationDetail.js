import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserProfileContext } from '../../providers/UserProfileProvider'
import ApplicationDetailCard from './ApplicationDetailsCard'
import ApplicationUpdateModal from './ApplicationUpdateModal'
import { Modal, ModalHeader, Button } from 'reactstrap'
import EventCard from '../Event/EventCard'

const ApplicationDetail = () => {
    const [application, setApplication] = useState({})
    const [events, setEvents] = useState([])
    const [detailModal, setDetailModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const { getToken } = useContext(UserProfileContext)
    const { appId } = useParams();
    const token = getToken()

    useEffect(() => {
        getEvent(appId)
        getApplication(appId)
        console.log(events, application)
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
            {!detailModal ? (
                <div className="detailsHeader"><ApplicationDetailCard application={application} setDetailModal={setDetailModal} detailModal={detailModal} events={events} /></div>,
                <div className="eventsContainer">{events.map(e => <EventCard event={events} />)}</div>)
                :
                <Modal isOpen={detailModal}>
                    <ApplicationUpdateModal setDetailModal={setDetailModal} application={application} setApplication={setApplication} />
                </Modal>
            }
        </div>
    )
}

export default ApplicationDetail;