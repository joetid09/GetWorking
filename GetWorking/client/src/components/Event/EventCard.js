import React, { useEffect } from 'react'
import { Jumbotron, Button, Container } from 'reactstrap'
import dayjs from 'dayjs'

const EventCard = ({ e, setEventModal, setEvent }) => {
    var dayjs = require('dayjs')

    return (
        <div>
            <Jumbotron>

                <h1 className="display-3">{e.title}</h1>
                <p className="lead">Created: {dayjs(e.datecreated).format('YYYY/DD/MM')}</p>
                <p className="lead">Due:{dayjs(e.dateToComplete).format('YYYY/DD/MM')}</p>
                <hr className="my-2"></hr>
                <h2 className="display-5">Notes</h2>
                <p className="lead">{e.body}</p>
                <Button onClick={(() => {
                    setEvent(e)
                    setEventModal(true)
                }
                )}> edit</Button>
                <Button onClick={() => { }}>Completed?</Button>
            </Jumbotron>
        </div >
    )
}

export default EventCard;