import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'

const HomePage = () => {
    const [user, setUser] = useState();


    return (
        <div>
            <h1>Welcome Back!</h1>
            <Button>Add New App</Button>
            <Button>View All Apps</Button>
        </div>
    )
}

export default HomePage;