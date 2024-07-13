import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Medicines({ medicinesData }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slidesPerScroll = 4;
    const totalSlides = medicinesData.length;

    const previousSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? totalSlides - slidesPerScroll : currentIndex - slidesPerScroll;
        setCurrentIndex(newIndex < 0 ? 0 : newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex >= totalSlides - slidesPerScroll;
        const newIndex = isLastSlide ? 0 : currentIndex + slidesPerScroll;
        setCurrentIndex(newIndex >= totalSlides ? totalSlides - slidesPerScroll : newIndex);
    };

    return (
        <main className="flex items-center justify-center h-full bg-transparent p-5">
            <div className="relative w-full max-w-7xl flex items-center">
                <button onClick={previousSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full focus:outline-none hover:bg-gray-700 transition duration-300 z-10">‹</button>
                <div className="flex overflow-hidden w-full justify-center space-x-4 px-10">
                    {medicinesData.slice(currentIndex, currentIndex + slidesPerScroll).map((medicine) => (
                        <div key={medicine.id} className="flex-shrink-0 w-60 p-6 bg-white shadow-lg border border-green-400 rounded-lg transform transition-all duration-300 hover:shadow-2xl">
                            <h2 className="text-lg font-bold text-green-700">{medicine.medicine}</h2>
                            <p className="text-gray-700 mt-2">{medicine.description}</p>
                        </div>
                    ))}
                </div>
                <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full focus:outline-none hover:bg-gray-700 transition duration-300 z-10">›</button>
            </div>
        </main>
    );
}
