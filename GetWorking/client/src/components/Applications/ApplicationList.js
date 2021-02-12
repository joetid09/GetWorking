import React, { useContext, useEffect, useState } from 'react'
import App from '../../App'
import { UserProfileContext } from '../../providers/UserProfileProvider'
import ApplicationCard from "./ApplicationCard"
import "./ApplicationCard.css"

const ApplicationList = () => {

    const { getToken } = useContext(UserProfileContext)
    const [applications, setApplications] = useState([])

    useEffect(() => {
        getApplications()
    }, [])

    const getApplications = () => {
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
    }

    return (
        <div className="application-list-container">
            {applications.map((app) => {
                return <ApplicationCard application={app} getApplications={getApplications} />
            })}
        </div>
    )
}

export default ApplicationList;