/* eslint-disable react/no-unescaped-entities */
import NavBar from "../components/NavBar";
import HeroImg from "../assets/images/hero.jpg";
import AboutImg from "../assets/images/abt-1.jpg";
import MissionImg from "../assets/images/mssn-1.jpg";
import OfferImg from "../assets/images/offr-1.jpg";
import WhyChooseUSImg from "../assets/images/wcUS-1.jpg";

export default function About() {
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
                            <h1 className="text-white text-[20px] tracking-normal -mb-6">Home / About</h1>
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
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <img src={AboutImg} alt="Infinity Shadow" className="w-fit p-4" />
                    </div>
                </section>
                {/* Our Mission Section  */}
                <section className="w-screen h-screen px-5 py-7 flex flex-row gap-5 items-center bg-green-100">
                    <div className="flex-1 flex justify-center items-center">
                        <img src={MissionImg} alt="Infinity Shadow" className="w-fit p-4" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-green-900 font-bold text-4xl mb-5">Our Mission</h1>
                        <p>Our mission is not just about revolutionizing pharmacy operations, it's about empowering pharmacies to
                            thrive in a world where patient care is paramount. We're dedicated to harnessing the latest technology
                            to streamline every aspect of pharmacy management, freeing up your time and energy to focus on what
                            truly matters – your patients. Accuracy is at the heart of everything we do, from inventory management
                            to prescription processing, because we understand that every detail counts when it comes to patient
                            health.
                            <br></br>
                            <br></br>
                            Moreover, compliance is non-negotiable. We're committed to helping you navigate the complex landscape of
                            regulatory requirements seamlessly, so you can rest assured knowing your pharmacy is always on the right
                            side of the law. But it's not just about meeting standards; it's about setting new benchmarks in patient
                            care. Our system empowers you to maintain meticulous patient records, fostering personalized care that
                            builds trust and loyalty. Because when patients feel cared for, outcomes improve, and communities thrive.
                            Together, we can redefine what it means to run a pharmacy in the digital age, ensuring that every patient who
                            walks through your doors receives the best care possible.</p>
                    </div>
                </section>
                {/* What We Offer Section  */}
                <section className="w-screen h-screen px-5 py-7 flex flex-row gap-5 items-center">
                    <div className="flex-1">
                        <h1 className="text-green-900 font-bold text-4xl mb-5">What We Offer?</h1>
                        <ul className="marker:text-green-500 list-outside list-disc ml-6">
                            <li className="mb-2">Keep track of all medications and supplies with ease. Our system provides real time updates, automated
                                restocking alerts, and detailed reports to ensure you never run out of essential items.</li>
                            <li className="mb-2">Simplify the prescription management process with our intuitive interface. From receiving prescriptions
                                to dispensing medications, our system ensures accuracy and reduces the chances of errors.</li>
                            <li className="mb-2">Maintain detailed patient records, including medication history, allergies, and other critical information.
                                This allows for personalized care and better patient outcomes.</li>
                            <li className="mb-2">Protect sensitive patient and pharmacy data with our advanced security measures. Our system ensures that all
                                data is encrypted and securely stored.</li>
                            <li className="mb-2">Gain valuable insights into your pharmacy's operations with our robust reporting tools. Monitor sales, track
                                inventory levels, and analyze trends to make informed decisions.</li>
                            <li className="mb-2">Stay compliant with all regulatory requirements with our built-in features that ensure adherence to industry
                                standards and guidelines.</li>
                        </ul>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <img src={OfferImg} alt="Infinity Shadow" className="w-fit p-4" />
                    </div>
                </section>
                {/* Why Choose Us Section */}
                <section className="w-screen h-screen px-5 py-7 flex flex-row gap-5 items-center bg-green-100">
                    <div className="flex-1 flex justify-center items-center">
                        <img src={WhyChooseUSImg} alt="Infinity Shadow" className="w-fit p-4" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-green-900 font-bold text-4xl mb-5">Why Choose Us?</h1>
                        <ul className="marker:text-green-500 list-outside list-disc ml-6">
                            <li className="mb-2">Our system is designed with the user in mind, offering an intuitive and easy to navigate interface that
                                requires minimal training.</li>
                            <li className="mb-2">Whether you are a small independent pharmacy or a large chain, our system can scale to meet your needs.</li>
                            <li className="mb-2">Our dedicated support team is always ready to assist you with any issues or questions you may have, ensuring
                                that your pharmacy operations run smoothly.</li>
                            <li className="mb-2">We are committed to continuous improvement and regularly update our system with new features and enhancements
                                based on user feedback and industry advancements.</li>
                            <li className="mb-2">We understand that each pharmacy has unique needs. Our system offers customizable features that allow you to
                                tailor the software to fit your specific requirements, ensuring a perfect match for your operational needs.</li>
                            <li className="mb-2">Our solution offers exceptional value by reducing operational costs. With our system,
                                you get a high return on investment, saving both time and money.</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}