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
                <Card>
                    <Col>
                        <CardTitle><strong>jobTitle: {application.jobTitle}</strong></CardTitle>
                        <CardSubtitle>Company: {application.company}</CardSubtitle>
                        <CardText>Date Applied {application.dateApplied}</CardText>
                    </Col>
                </Card>
            </Col>

        </Row>
    )
}

export default ApplicationCard;