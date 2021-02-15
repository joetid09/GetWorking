import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
    Button,
    Modal, ModalHeader,
    ModalBody, ModalFooter,
} from "reactstrap";
import dayjs from 'dayjs'

const ApplicationDetailCard = ({ application, setDetailModal, setEventModal, getApplication }) => {
    const [pendingDelete, setPendingDelete] = useState(false)
    const history = useHistory();
    var dayjs = require('dayjs')

    const Delete = (application) => {

        return fetch(`/api/application/${application.id}`, {
            method: "DELETE",
        })
            .then(history.push("/applications"))
    }

    return (
        <div>
            {pendingDelete ? <Modal isOpen={pendingDelete}>
                <ModalHeader>Delete {application.jobTitle}?</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete this Application? This action cannot be
                    undone.
                </ModalBody>
                <ModalFooter>
                    <Button onClick={(e) => setPendingDelete(false)}>No, Cancel</Button>
                    <Button
                        className="btn btn-outline-danger"
                        onClick={(() => { Delete(application) })}>
                        Yes, Delete
                    </Button>
                </ModalFooter>
            </Modal> : (
                    <div>
                        <h2>{application.jobTitle}</h2>
                        <h5>{application.company}</h5>
                        <p>applied on {dayjs(application.dateApplied).format('YYYY/DD/MM')}</p>
                        <Button onClick={(() => setEventModal(true))}> Create new event</Button>
                        <Button onClick={(() => setDetailModal(true))}>Edit</Button>
                        <Button onClick={(() => { setPendingDelete(true) })}>delete</Button>
                    </div>)
            }
        </div >
    )
}

export default ApplicationDetailCard;