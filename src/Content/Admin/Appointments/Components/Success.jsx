import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ApplicationCard from '../Components/ApplicationCard'

function Success() {
    const data = useLoaderData() || []

    // const data = [
    //     {
    //         "_id": "67bff1eb84bba4e3454d3664",
    //         "visaType": "L1",
    //         "appointmentType": "FRESH",
    //         "totalApplicants": 1,
    //         "preferredOFC": "KOLKATA VAC",
    //         "preferredConsolar": "KOLKATA CONSOLAR",
    //         "startDate": "2025-02-28T00:00:00.000Z",
    //         "endDate": "2025-03-06T00:00:00.000Z",
    //         "duration": "3-5 DAYS",
    //         "description": "",
    //         "fee": 12000,
    //         "__v": 0,
    //         "payment": "67bff1eb84bba4e3454d3666",
    //         "user": {
    //             "_id": "67bff1eb84bba4e3454d3662",
    //             "fullName": "Abhay Narware",
    //             "email": "abhaynrware@gmail.com",
    //             "mobileNumber": "6265613484",
    //             "appointments": [
    //                 "67bff1eb84bba4e3454d3664"
    //             ],
    //             "__v": 1
    //         }
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

Success.loader = async () => {
    try {
        const { data } = await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/admin/get-success-appointments`, { token: localStorage.getItem('token') })
        return data
    } catch (e) {
        console.error(e)
        flash("Unable to Find Appointments", "Error")
    }
}

export default Success