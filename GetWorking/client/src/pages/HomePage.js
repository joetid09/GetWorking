import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'reactstrap'
import NewApplication from '../components/Applications/NewApplication'

const HomePage = () => {
    const [user, setUser] = useState();

    const history = useHistory();
    return (
        <div>
            <h1>Welcome Back!</h1>
            <Button onClick={e => history.push("/newApplication")}> Add New App</Button >
            <Button onClick={e => history.push("/applications")}>View All Apps</Button>
        </div >
    )
}

export default HomePage;