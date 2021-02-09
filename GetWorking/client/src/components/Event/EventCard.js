import React, { useEffect } from 'react'
import { Jumbotron, Button, Container } from 'reactstrap'
import dayjs from 'dayjs'

const EventCard = ({ e, setEventModal, setEvent, setUpdateEventModal }) => {
    var dayjs = require('dayjs')

    return (
        <div>
            <Jumbotron>

                <h1 className="display-3">{e.title}</h1>
                {e.status == 1 ? <div>
                    <Button onClick={() => { }}>Completed?</Button>
                </div> : <h4 classname="display-5">
                        Completed! ✔️
                    </h4>
                }
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
        </div >
    )
}

export default EventCard;