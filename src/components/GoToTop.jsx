// src/components/GoToTop.jsx

import { useState, useEffect } from 'react';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isVisible && (
                <button onClick={scrollToTop} className="p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300" aria-label="Go to Top">↑</button>
            )}
        </div>
    );
};

export default GoToTop;
