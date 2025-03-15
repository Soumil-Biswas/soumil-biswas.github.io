import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const authContext = createContext();

export const useAuth = () => {
    return useContext(authContext);
}

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const updateUser = async () => {
        try {
            const response = await axios.post(`${import.meta.env.REACT_SERVER_URL}/visa/admin/info`, { token: localStorage.getItem('token') });
            setUser(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        updateUser();
    }, []);

    return (
        <authContext.Provider value={{ user, setUser, updateUser }}>
            {children}
        </authContext.Provider>
    )
}