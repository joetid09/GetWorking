import React, { useEffect } from 'react'
import { Jumbotron, Button, Container } from 'reactstrap'
import dayjs from 'dayjs'

const EventCard = ({ event }) => {
    var dayjs = require('dayjs')

    useEffect(() => console.log(event))
    return (
        <div>
            <Jumbotron>

                <h1 className="display-3">{event.title}</h1>
                <p className="lead">Created: {dayjs(event.datecreated).format('YYYY/DD/MM')}</p>
                <p className="lead">Due:{dayjs(event.dateToComplete).format('YYYY/DD/MM')}</p>
                <hr className="my-2"></hr>
                <h2 className="display-5">Notes</h2>
                <p className="lead">{event.body}</p>
                <Button onClick={() => { }}>Completed?</Button>
            </Jumbotron>
        </div>
    )
}

export default EventCard;