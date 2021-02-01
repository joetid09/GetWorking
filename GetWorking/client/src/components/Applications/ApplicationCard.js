import React from 'react'
import {
    Card, Col, Row,
    CardTitle, CardSubtitle,
    CardText
} from 'reactstrap'

const ApplicationCard = ({ application }) => {

    return (
        <Row>
            <Col>
                <div>
                    <Card>
                        <Row>
                            <Col xs="5">
                                <CardTitle><strong>jobTitle: {application.jobTitle}</strong></CardTitle>
                                <CardSubtitle>Company: {application.company}</CardSubtitle>
                                <CardText>Date Applied {application.dateApplied}</CardText>
                            </Col>
                            <Col xs="2"></Col>
                            <Col sx="5">
                                <CardTitle><strong>Current Task:</strong></CardTitle>
                                <CardSubtitle>Date Created: {application.company}</CardSubtitle>
                                <CardText>Date to complete:  {application.dateApplied}</CardText>
                            </Col>
                        </Row>
                    </Card>

                </div>
            </Col>

        </Row>
    )
}

export default ApplicationCard;