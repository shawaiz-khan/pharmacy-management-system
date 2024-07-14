import NavBar from "../components/NavBar";
import HeroImg from "../assets/images/hero.jpg";
import AboutImg from "../assets/images/abt-1.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faKitMedical } from "@fortawesome/free-solid-svg-icons";
import MedicineCategory from "../components/MedicineCategory";
import { medicines } from "../assets/data/medicinesData";
import MedicinesSlider from "../components/MedicinesSlider";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

export default function Home() {
    return (
        <div>
            <main className='w-full h-full'>
                <div
                    style={{
                        backgroundImage: `url(${HeroImg})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "100vh",
                        width: "100%",
                    }}
                    className="w-full h-screen font-workSans relative flex flex-col justify-center items-center"
                >
                    <div className="absolute text-white z-0 opacity-65 bg-black w-full h-screen top-0 left-0"></div>
                    <NavBar />
                    {/* Hero Section  */}
                    <section className="w-full text-center flex flex-col justify-center items-center h-full relative z-10">
                        <div className="w-[690px] mx-auto">
                            <h1 className="text-white text-[20px] tracking-normal -mb-6">Welcome To</h1>
                            <p className="text-white font-bold text-6xl tracking-wide mt-6">Pharmacy Management System</p>
                            <div className="flex justify-center mt-8 p-5">
                                <button className="bg-green-600 border-2 border-green-600 tracking-wider text-white text-xl font-workSans rounded w-fit flex items-center justify-center py-2 px-5 hover:bg-transparent hover:border-2 hover:border-green-600 transition-all ease-in btn-info font-normal">Get Started</button>
                                <p className="tracking-wider text-white font-workSans text-base w-fit flex items-center justify-center py-4 px-5 btn-info ml-4 cursor-pointer font-medium font-workSans">Learn More</p>
                            </div>
                        </div>
                    </section>
                </div>
                {/* About Section  */}
                <section className="w-screen h-screen px-5 py-7 flex flex-row gap-5 items-center">
                    <div className="flex-1">
                        <h1 className="text-green-900 font-bold text-4xl mb-5">Get To Know Us</h1>
                        <p>Welcome to our Pharmacy Management System! We’re here to make running your pharmacy easier
                            and more efficient. Our goal is to give you tools that simplify your work, so you can spend
                            more time caring for your patients. We know how challenging it can be to manage a pharmacy.
                            That’s why we’ve created a system that handles all the complex stuff behind the scenes. With
                            our advanced inventory management, you can keep track of medications easily and avoid running
                            out, making sure your shelves are always stocked with essential drugs.
                            <br></br>
                            <br></br>
                            Our system is designed to be user-friendly, with an intuitive interface that requires little training.
                            Whether you’re processing prescriptions or managing patient information, our features save you time and
                            reduce errors. Imagine a pharmacy where you can manage prescriptions, track patient history, and create
                            reports quickly and effortlessly. We’re committed to helping you run your pharmacy smoothly and
                            efficiently, so you can focus on what you do best – providing exceptional care to your patients.</p>
                        <div className="w-full justify-start flex text-start mt-5">
                            <h1 className="font-medium  bg-green-600 border-2 border-green-600 w-fit p-2 rounded text-white hover:bg-transparent hover:border-2 hover:border-green-700 hover:text-green-800 transition-all 0.3s ease-in"><Link to="/about">Read More<FontAwesomeIcon icon={faBook} className="ml-2" /></Link></h1>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <img src={AboutImg} alt="Infinity Shadow" className="w-fit p-4" />
                    </div>
                </section>
                {/* Medicines Slider Section  */}
                <section className="w-screen h-screen px-5 py-7 flex flex-col gap-5 items-center justify-center bg-green-100">
                    <div className="w-full h-screen flex flex-col items-center justify-center">
                        <h1 className="text-green-900 font-bold text-4xl mb-5 text-center">In-Stock Medicines</h1>
                        <div className="w-full">
                            <MedicinesSlider medicinesData={medicines} />
                        </div>
                        <div className="w-full justify-center flex text-center mt-5">
                            <h1 className="font-medium bg-green-600 border-2 border-green-600 p-2 rounded text-white hover:bg-transparent hover:border-2 hover:border-green-700 hover:text-green-800 transition-all 0.3s ease-in pl-10 pr-10"><Link to="/about">Explore Medicines<FontAwesomeIcon icon={faKitMedical} className="ml-2" /></Link></h1>
                        </div>
                    </div>
                </section>
                {/* Medicines Categories Section  */}
                <section className="w-screen h-full px-5 py-7 flex flex-col gap-5 items-center bg-white">
                    <div>
                        <h1 className="text-green-900 font-bold text-4xl mb-5 mt-5 justify-center items-center text-center">Medicine Categories</h1>
                        <div className="w-full">
                            <MedicineCategory medicinesData={medicines} />
                        </div>
                    </div>
                </section>
                {/* Footer Section  */}
                <section className="w-screen h-full px-5 py-0 flex flex-col gap-5 items-center bg-white">
                    <div>
                        <div className="w-screen">
                            <Footer />
                        </div>
                    </div>
                </section>
            </main>
            {/* Go To Top Component  */}
            <GoToTop />
        </div>
    );
}