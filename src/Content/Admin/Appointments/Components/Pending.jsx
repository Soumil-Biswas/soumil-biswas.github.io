import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ApplicationCard from '../Components/ApplicationCard'

function Pending() {
    const data = useLoaderData() || []

    // const data = [
    //     {
    //         "user": {
    //             "fullName": "Abhay Narware",
    //             "email": "abhaynrware@gmail.com",
    //             "mobileNumber": "6265613484"
    //         },
    //         "appointment": {
    //             "visaType": "L1",
    //             "appointmentType": "FRESH",
    //             "totalApplicants": 1,
    //             "preferredOFC": "KOLKATA VAC",
    //             "preferredConsolar": "KOLKATA CONSOLAR",
    //             "startDate": "2025-02-28T00:00:00.000Z",
    //             "endDate": "2025-03-08T00:00:00.000Z",
    //             "duration": "3-5 DAYS",
    //             "description": "",
    //             "fee": 12000
    //         },
    //         "_id": "67bff1498dcbd1a808fdbe7f",
    //         "status": "PENDING",
    //         "expiresAt": "2025-03-14T04:59:53.396Z",
    //         "__v": 0
    //     },
    //     {
    //         "user": {
    //             "fullName": "Abhay Narware",
    //             "email": "abhaynrware@gmail.com",
    //             "mobileNumber": "6265613484"
    //         },
    //         "appointment": {
    //             "visaType": "L1",
    //             "appointmentType": "FRESH",
    //             "totalApplicants": 1,
    //             "preferredOFC": "KOLKATA VAC",
    //             "preferredConsolar": "KOLKATA CONSOLAR",
    //             "startDate": "2025-02-28T00:00:00.000Z",
    //             "endDate": "2025-03-08T00:00:00.000Z",
    //             "duration": "3-5 DAYS",
    //             "description": "",
    //             "fee": 12000
    //         },
    //         "_id": "67bff18a8dcbd1a808fdbe81",
    //         "status": "PENDING",
    //         "expiresAt": "2025-03-14T05:00:58.615Z",
    //         "__v": 0
    //     },
    //     {
    //         "user": {
    //             "fullName": "Abhay Narware",
    //             "email": "abhaynrware@gmail.com",
    //             "mobileNumber": "6265613484"
    //         },
    //         "appointment": {
    //             "visaType": "L1",
    //             "appointmentType": "FRESH",
    //             "totalApplicants": 1,
    //             "preferredOFC": "KOLKATA VAC",
    //             "preferredConsolar": "KOLKATA CONSOLAR",
    //             "startDate": "2025-03-01T00:00:00.000Z",
    //             "endDate": "2025-03-05T00:00:00.000Z",
    //             "duration": "3-5 DAYS",
    //             "description": "",
    //             "fee": 12000
    //         },
    //         "_id": "67bff1a38dcbd1a808fdbe85",
    //         "status": "PENDING",
    //         "expiresAt": "2025-03-14T05:01:23.676Z",
    //         "__v": 0
    //     }
    // ]

    return (
        <div>
            {
                data.length > 0 ?
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {data.map((application, index) => <ApplicationCard key={index} card={application} selectState={0} />)}
                    </div>
                    :
                    <div className="flex justify-center">
                        <h1 className='p-semibold text-2xl text-zinc-400 mt-40'>No Applications here !!!</h1>
                    </div>
            }
        </div>
    )
}

Pending.loader = async () => {
    try {
        const { data } = await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/admin/get-pending-appointments`, { token: localStorage.getItem('token') })
        return data
    } catch (e) {
        console.error(e)
        flash("Unable to Find Appointments", "Error")
    }
}

export default Pending