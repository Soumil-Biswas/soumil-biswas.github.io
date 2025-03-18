import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Slideshow = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    // Duplicate first card at the end for a seamless transition
    const extendedCards = [...cards, cards[0]];

    useEffect(() => {
        if (!cards || cards.length === 0) return;

        const interval = setInterval(() => {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 50000); // Auto-slide every 5 seconds

        return () => clearInterval(interval);
    }, [cards]);

    // Quitely go back to first sldie
    useEffect(() => {
        if (currentIndex === cards.length) {
            setTimeout(() => {
                setIsAnimating(false);
                setCurrentIndex(0);
            }, 700); // Delay should match animation duration
        }
    }, [currentIndex, cards.length]);

    // Manually go to a specific card
    const goToCard = (index) => {
        if (index < 0) index = cards.length-1
        if (index > cards.length) index = 0
        setIsAnimating(true);
        setCurrentIndex(index);
    };

    return (
        <div className="flex items-center">
            <button className="text-[100px] font-bold text-[--contrast-color] hover:text-black opacity-70 duration-200"
            onClick={() => {goToCard(currentIndex-1)}}>❮</button>
            <div className="relative w-full overflow-hidden my-10">
                {/* Motion Container */}
                <motion.div
                    className="flex gap-1 "
                    style={{ width: `${extendedCards.length * 100}%` }} // Make sure container fits all slides
                    animate={{ x: `-${(currentIndex * 100) / extendedCards.length}%` }}
                    transition={isAnimating ? { type: "tween", duration: 0.7, ease: "easeInOut" } : { duration: 0 }}
                >
                    {extendedCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="flex-shrink-0  flex md:flex-row flex-col-reverse items-center gap-5 rounded-2xl shadow-lg mx-auto overflow-hidden"
                            style={{ width: `${95/ extendedCards.length}%`  }} // Each card takes equal space
                        >
                            {/* Left Section */}
                            <img className="object-cover h-full" src={card} alt="" />

                        </motion.div>
                    ))}
                </motion.div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-1 mt-4 absolute bottom-3 right-0 left-0">
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToCard(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                index === currentIndex ? "bg-gray-700 scale-105" : "bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
            <button className="text-[100px] font-bold text-[--contrast-color] hover:text-black opacity-70 duration-200"
            onClick={() => {goToCard(currentIndex+1)}}>❯</button>            
        </div>
    );
};

export default Slideshow;
