import React, { useEffect } from 'react'
import { Jumbotron, Button, Container } from 'reactstrap'

const EventCard = ({ event }) => {

    useEffect(() => console.log(event))
    return (
        <div>
            <Jumbotron>

                <h1 className="display-3">{event.title}</h1>
                <p className="lead">Created: {event.datecreated} Due:{event.dateToComplete}</p>
                <hr className="my-2"></hr>
                <h2 className="display-5">Notes</h2>
                <p className="lead">{event.body}</p>
                <Button onClick={() => { }}>Completed?</Button>
            </Jumbotron>
        </div>
    )
}

export default EventCard;