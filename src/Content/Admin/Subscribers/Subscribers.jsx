import React, { useState } from 'react';
import Card from './Components/Card';
import ConfirmModal from '../Components/ConfirmModal';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const Subscribers = () => {
    const data = useLoaderData() || []

    const [subscribers, setSubscribers] = useState(data);

    const [selectedId, setSelectedId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to delete items when the confirmation window is closed
    const handleClose = async () => {
        //Add your Function to delete items here.
        try {
            await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/admin/delete-subscriber`, { id: selectedId, token: localStorage.getItem('token') });
            setSubscribers(subscribers.filter(subscriber => subscriber._id !== selectedId));
            flash('Subscriber Deleted Successfully', 'Success');
        } catch (e) {
            console.error(e)
            flash('Something went wrong !! Please try again later', 'Error');
        }
        setIsModalOpen(false);
    }

    return (
        <div>
            <h2 className="text-4xl as-semibold mb-4">Newsletter Subscribers</h2>
            {
                subscribers.length > 0 ?
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {
                            subscribers.length > 0 && (
                                subscribers.map(subscriber => (
                                    <Card
                                        key={subscriber._id}
                                        userData={subscriber}
                                        onRemove={() => {
                                            setSelectedId(subscriber._id)
                                            setIsModalOpen(true)
                                        }} />)))
                        }
                    </div>
                    :
                    <div className="flex justify-center">
                        <h1 className='p-semibold text-2xl text-zinc-400 mt-40'>No Subscribers here !!!</h1>
                    </div>
            }

            {/* Confirmation Modal */}
            {isModalOpen && (
                <ConfirmModal
                    onRemove={handleClose}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    )
}

Subscribers.loader = async () => {
    try {
        const { data } = await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/admin/get-subscribers`, { token: localStorage.getItem('token') });
        return data;
    } catch (error) {
        console.error(error);
        flash('error', 'Error fetching Subscribers')
    }
}

export default Subscribers