import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import default styles
import React, { useEffect, useRef } from 'react';

const LocoMotive = ({ children }) => {
    const scrollRef = useRef(null);  // Create a ref for the scroll container

    useEffect(() => {
        // Initialize LocomotiveScroll
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,    // The container that will be scrollable
            smooth: true,              // Enable smooth scrolling
        });

        // Cleanup function to destroy the Locomotive Scroll instance when the component is unmounted
        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);  // The empty array means this effect runs only once when the component mounts

    return (
        <div ref={scrollRef} data-scroll-container>
            {children}  {/* Render the child elements inside the scroll container */}
        </div>
    );
};

export default LocoMotive;
