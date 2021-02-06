import React, { useEffect } from 'react'

const EventCard = ({ event }) => {

    useEffect(() => console.log("hello"))
    return (
        <h1>{event.title}</h1>
    )
}

export default EventCard;