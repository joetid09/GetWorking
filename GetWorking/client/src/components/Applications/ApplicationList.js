import React, { useState, useEffect } from 'react'
import firebase from "firebase/app"

const ApplicationList = () => {
    const getToken = () => firebase.auth().currentUser.getIdToken();
    const [applications, setApplications] = useState([])

    useEffect(() => {
        return getToken().then((token) => {
            fetch('/api/application', {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((apps) => setApplications(apps))
        })
    }, [])


    console.log(applications)
    return (
        <div>
            <h3>Your Applications</h3>
        </div>
    )

}

export default ApplicationList;