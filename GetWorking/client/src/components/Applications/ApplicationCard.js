import React from 'react'
import {
    Card, Col, Row,
    CardTitle, CardSubtitle,
    CardText, Button
} from 'reactstrap'
import { Link } from 'react-router-dom'
import ApplicationDetail from "./ApplicationDetail"

const ApplicationCard = ({ application }) => {

    return (
        <Row>
            <Col>
                <div>
                    <Card>
                        <Row>

                            <Col xs="5">
                                <Link to={`/application/details/${application.id}`}>
                                    <CardTitle><strong>Job Title: {application.jobTitle}</strong></CardTitle>
                                </Link>
                                <CardSubtitle>Company: {application.company}</CardSubtitle>
                                <CardText>Date Applied {application.dateApplied}</CardText>
                                <Button></Button>
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