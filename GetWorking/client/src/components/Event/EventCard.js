import React, { useState } from 'react'
import {
    Button,
    Modal, ModalHeader,
    ModalBody, ModalFooter,
    Jumbotron
} from "reactstrap";
import dayjs from 'dayjs'

const EventCard = ({ e, setEvent, setUpdateEventModal, getEvent, getApplication }) => {
    const [pendingDelete, setPendingDelete] = useState(false)
    var dayjs = require('dayjs')
    const UpdateStatus = (e) => {
        fetch(`/api/event/updateStatus/${e.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(e),
        })
            .then(getEvent(e.applicationId))
    }
    const Delete = (e) => {

        return fetch(`/api/event/${e.id}`, {
            method: "DELETE",
        })
            .then(getEvent(e.id))
            .then(setPendingDelete(false))
    }


    return (
        <div>
            {
                pendingDelete ? <div>
                    <Modal isOpen={pendingDelete}>
                        <ModalHeader>Delete {e.title}</ModalHeader>
                        <ModalBody>
                            Are you sure you want to delete this event? This action cannot be
                            undone.
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={(e) => setPendingDelete(false)}>No, Cancel</Button>
                            <Button
                                className="btn btn-outline-danger"
                                onClick={() => {
                                    Delete(e)
                                }}
                            >
                                Yes, Delete
                    </Button>
                        </ModalFooter>
                    </Modal>
                </div>
                    :
                    <div>
                        <Jumbotron>

                            <h1 className="display-3">{e.title}</h1>
                            {e.status == 0 ? <div>
                                <Button onClick={() => { UpdateStatus(e) }}>Completed?</Button>
                            </div> : <h4 classname="display-5">
                                    Completed! ✔️
                    </h4>
                            }
                            <Button onClick={() => setPendingDelete(true)}>delete</Button>
                            <p className="lead">Due:{dayjs(e.dateToComplete).format('YYYY/DD/MM')}</p>
                            <hr className="my-2"></hr>
                            <h2 className="display-5">Notes</h2>
                            <p className="lead">{e.body}</p>
                            <Button onClick={(() => {
                                setEvent(e)
                                setUpdateEventModal(true)
                            }
                            )}> edit</Button>

                        </Jumbotron>
                    </div>
            }
        </div >
    )
}

export default EventCard;