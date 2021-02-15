import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup } from 'reactstrap'
import "./Buttons.css"
import NewApplication from '../components/Applications/NewApplication'

const HomePage = () => {
    const [user, setUser] = useState();

    const history = useHistory();
    return (
        <div className="button-group-container">
            <ButtonGroup vertical >
                <Button className="btn-xlarge" size="lg" onClick={e => history.push("/newApplication")}> Add New App</Button >
                <Button className="btn-xlarge" size="lg" onClick={e => history.push("/applications")}>View All Apps</Button>
            </ButtonGroup>
        </div >
    )
}

export default HomePage;