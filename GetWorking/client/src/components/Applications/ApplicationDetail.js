import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserProfileContext } from '../../providers/UserProfileProvider'

const ApplicationDetail = () => {
    const [application, setApplication] = useState({})
    const { getToken } = useContext(UserProfileContext)
    const { appId } = useParams();
    const token = getToken()

    useEffect(() => {
        getApplication(appId)
    }, [])

    const getApplication = (id) => {
        fetch(`/api/application/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        },
        )
            .then((res) => res.json())
            .then((apps) => setApplication(apps))
    }
    return (
        <div>
            <h2>{application.jobTitle}</h2>
            <h1>something here</h1>
        </div>
    )
}

export default ApplicationDetail;