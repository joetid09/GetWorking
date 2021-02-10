import React from 'react'
import {
    Card, Col, Row,
    CardTitle, CardSubtitle,
    CardText, Container
} from 'reactstrap'
import { Link } from 'react-router-dom'
import "./ApplicationCard.css"

const ApplicationCard = ({ application }) => {

    return (
        <Container className="application-list-container">
            <div className="application-list-container">
                <Row className="application-card-row">
                    <Col xs="5">
                        <Link to={`/application/details/${application.id}`}>
                            <CardTitle><strong>Job Title: {application.jobTitle}</strong></CardTitle>
                        </Link>
                    </Col>
                    <Col xs="5">
                        <CardSubtitle>Company: {application.company}</CardSubtitle>
                        <CardText>Date Applied {application.dateApplied}</CardText>
                    </Col>
                </Row>

            </div>
        </Container>
    )
}

export default ApplicationCard;