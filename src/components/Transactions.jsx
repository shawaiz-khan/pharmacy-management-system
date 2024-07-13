import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Transactions({ transactionData }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slidesPerScroll = 3;
    const totalSlides = transactionData.length;

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
        <main className="relative">
            <div className="flex w-full h-full justify-center items-center m-5">
                <button onClick={previousSlide} className="absolute left-20 bg-gray-800 text-white p-2 rounded-full focus:outline-none">‹</button>
                <div className="flex overflow-hidden">
                    {transactionData.slice(currentIndex, currentIndex + slidesPerScroll).map((transaction) => (
                        <div key={transaction.id}  className="transactions bg-transparent text-center justify-center w-60 px-5 py-3 ml-5 h-60 content-center border-2 border-blue-500 rounded-lg hover:bg-blue-400 hover:text-white transition-all 0.3s ease-in m-4">
                            <h2>{transaction.date}</h2>
                            <p>{transaction.item}</p>
                        </div>
                    ))}
                </div>
                <button onClick={nextSlide} className="absolute right-20 bg-gray-800 text-white p-2 rounded-full focus:outline-none">›</button>
            </div>
        </main>
    );
}