import React, { useEffect, useState } from 'react'

function Loader() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer)
    }, []);

    if (loading) {
        return (
            <div className="fixed z-[100] bg-[--highlight-hover-color] w-full h-screen flex justify-center items-center">
                <div className="h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-full border-b-2 border-b-[--shadow-color-offset] animate-spin"></div>
            </div>
        );
    }
}

export default Loader