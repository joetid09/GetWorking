import React, { useState } from 'react'
import {
    Button,
    Modal, ModalHeader,
    ModalBody, ModalFooter,
    Card, CardBody, CardSubtitle,
    CardText, CardTitle
} from "reactstrap";
import "./EventCard.css"
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
                                color="primary"
                                className="danger"
                                onClick={() => {
                                    Delete(e)
                                }}
                            >
                                Yes, Delete
                    </Button>
                        </ModalFooter>
                    </Modal>
                </div>
                    : <Card className="Event-Card">
                        <CardBody>
                            <CardTitle><h2>{e.title}</h2></CardTitle>
                            <CardSubtitle>Due {dayjs(e.dateToComplete).format('YYYY/DD/MM')}</CardSubtitle>
                            <CardText> {e.status == 0 ? <div>
                                <Button onClick={() => { UpdateStatus(e) }}>Completed?</Button>
                            </div> : <h4 classname="display-5">
                                    Completed! ✔️
                    </h4>
                            }</CardText>
                            <hr></hr>
                            <h4>Notes</h4>
                            <CardText>{e.body}</CardText>
                            <Button onClick={(() => {
                                setEvent(e)
                                setUpdateEventModal(true)
                            }
                            )}> edit</Button>
                            <Button onClick={() => setPendingDelete(true)}>delete</Button>
                        </CardBody>
                    </Card>
                    // <div>
                            /* <Container>
                                <div className="Event-Container">
                                    <Row className="event-card-row">
                                        <Col xs="5">
                                            <h3>{e.title}</h3>
                                            <p className="lead">Due:{dayjs(e.dateToComplete).format('YYYY/DD/MM')}</p>

                                            <Button onClick={() => setPendingDelete(true)}>delete</Button>
                                        </Col><Col xs="5">

                                            <h2 className="display-5">Notes</h2>
                                            <p className="lead">{e.body}</p>
                                            <Button onClick={(() => {
                                                setEvent(e)
                                                setUpdateEventModal(true)
                                            }
                                            )}> edit</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </div> */}

        </div >
    )
}

export default EventCard;