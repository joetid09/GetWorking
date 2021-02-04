import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserProfileContext } from '../../providers/UserProfileProvider'
import ApplicationDetailCard from './ApplicationDetailsCard'
import ApplicationUpdateModal from './ApplicationUpdateModal'
import { Modal, ModalHeader, Button } from 'reactstrap'

const ApplicationDetail = () => {
    const [application, setApplication] = useState({})
    const [detailModal, setDetailModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
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
            {!detailModal ?
                <ApplicationDetailCard application={application} setDetailModal={setDetailModal} detailModal={detailModal} />
                :
                <Modal isOpen={detailModal}>
                    <ApplicationUpdateModal setDetailModal={setDetailModal} application={application} setApplication={setApplication} />
                </Modal>
            }
        </div>
    )
}

export default ApplicationDetail;