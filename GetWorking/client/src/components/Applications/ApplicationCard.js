import React from 'react'
import {
    Card, Col, Row,
    CardTitle, CardSubtitle,
    CardText, Button
} from 'reactstrap'
import { useHistory } from 'react-router-dom'
import ApplicationDetail from "./ApplicationDetail"

const ApplicationCard = ({ application }) => {
    const history = useHistory();

    return (
        <Row>
            <Col>
                <div>
                    <Card>
                        <Row>
                            <Col xs="5">
                                <CardTitle><strong>Job Title: {application.jobTitle}</strong></CardTitle>
                                <CardSubtitle>Company: {application.company}</CardSubtitle>
                                <CardText>Date Applied {application.dateApplied}</CardText>
                                <Button onClick={ }>Details</Button>
                            </Col>
                            <Col xs="2"></Col>
                            <Col sx="5">
                                <CardTitle><strong>Current Task:</strong></CardTitle>
                            </Col>
                        </Row>
                    </Card>

                </div>
            </Col>

        </Row>
    )
}

export default ApplicationCard;