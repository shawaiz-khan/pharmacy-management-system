import HeroImg from "../assets/images/hero.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

export default function Contact() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Example form data
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
        const copy = event.target.copy.checked;

        try {
            const response = await fetch('http://localhost:3000/api/contact/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    copy
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.text();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <main>
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
                        <h1 className="text-white text-[20px] tracking-normal -mb-6">Home / Contact</h1>
                        <p className="text-white font-bold text-6xl tracking-wide mt-6">Get in Touch</p>
                        <div className="flex justify-center mt-8 p-5">
                            <button className="bg-green-600 border-2 border-green-600 tracking-wider text-white text-xl font-workSans rounded w-fit flex items-center justify-center py-2 px-5 hover:bg-transparent hover:border-2 hover:border-green-600 transition-all ease-in btn-info font-normal">Get Started</button>
                            <p className="tracking-wider text-white font-workSans text-base w-fit flex items-center justify-center py-4 px-5 btn-info ml-4 cursor-pointer font-medium font-workSans">Learn More</p>
                        </div>
                    </div>
                </section>
            </div>
            {/* Contact Us Section  */}
            <section className="-mb-10">
                <div className="px-6 pt-6 md:px-12 h-full justify-center text-center mt-[200px] mb-[170px]">
                    <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
                        <div className="flex flex-wrap">
                            <div className="mb-12 w-full md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="relative mb-6">
                                        <input
                                            type="text"
                                            name="name"
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                                            id="nameInput"
                                            required
                                        />
                                        <label
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                                            htmlFor="nameInput"
                                        >
                                            Name
                                        </label>
                                    </div>
                                    <div className="relative mb-6">
                                        <input
                                            type="email"
                                            name="email"
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                                            id="emailInput"
                                            required
                                        />
                                        <label
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                                            htmlFor="emailInput"
                                        >
                                            Email address
                                        </label>
                                    </div>
                                    <div className="relative mb-6">
                                        <textarea
                                            name="message"
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                                            id="messageInput"
                                            rows="3"
                                            required
                                        ></textarea>
                                        <label
                                            htmlFor="messageInput"
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                                        >
                                            Message
                                        </label>
                                    </div>
                                    <div className="relative mb-6 flex items-center text-center ml-14">
                                        <input
                                            type="checkbox"
                                            name="copy"
                                            className="peer relative appearance-none h-6 w-6 border-2 border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent transition-all duration-300 cursor-pointer"
                                            id="copyCheck"
                                        />
                                        <label
                                            className="inline-block pl-2 cursor-pointer text-gray-700"
                                            htmlFor="copyCheck"
                                        >
                                            Send me a copy of this message
                                        </label>
                                        <style>
                                            {`
                input[type='checkbox'] {
                    position: relative;
                }
                input[type='checkbox']::after {
                    content: '';
                    display: block;
                    width: 0.875rem;
                    height: 0.875rem;
                    border: 2px solid white;
                    border-left: 0;
                    border-top: 0;
                    transform: rotate(45deg);
                    position: absolute;
                    top: 0.125rem;
                    left: 0.25rem;
                    opacity: 0;
                    transition: opacity 0.3s ease-in-out;
                }
                input[type='checkbox']:checked::after {
                    opacity: 1;
                }
            `}
                                        </style>
                                    </div>
                                    <button
                                        type="submit"
                                        className="mb-6 w-full rounded bg-green-500 hover:bg-green-600 transition-all 0.3s ease text-white px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal lg:mb-0"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                            <div className="flex flex-wrap w-full lg:w-7/12">
                                <div className="flex flex-wrap">
                                    <div className="mb-12 w-full md:w-1/2 md:px-3 lg:w-1/2 lg:px-6 xl:w-1/2">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-green-200 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow text-left">
                                                <p className="mb-2 font-bold">Technical support</p>
                                                <p className="text-sm text-neutral-500">example@gmail.com</p>
                                                <p className="text-sm text-neutral-500">1-600-890-4567</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full md:w-1/2 md:px-3 lg:w-1/2 lg:px-6 xl:w-1/2">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-green-200 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm0 5.25a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow text-left">
                                                <p className="mb-2 font-bold">Sales inquiries</p>
                                                <p className="text-sm text-neutral-500">example@gmail.com</p>
                                                <p className="text-sm text-neutral-500">1-600-890-4567</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full md:w-1/2 md:px-3 lg:w-1/2 lg:px-6 xl:w-1/2">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-green-200 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m5.25 0A9.75 9.75 0 1112 2.25a9.75 9.75 0 019.75 9.75z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow text-left">
                                                <p className="mb-2 font-bold">Office Hours</p>
                                                <p className="text-sm text-neutral-500">Mon - Fri 8:00 - 16:00</p>
                                                <p className="text-sm text-neutral-500">Sat - Sun 9:00 - 17:00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full md:w-1/2 md:px-3 lg:w-1/2 lg:px-6 xl:w-1/2">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-green-200 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0-3.866-3.582-7-8-7-4.418 0-8 3.134-8 7 0 3.138 1.93 5.823 4.75 6.741V22l2.25-2 2.25 2v-3.259c2.82-.918 4.75-3.603 4.75-6.741z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow text-left">
                                                <p className="mb-2 font-bold">Press</p>
                                                <p className="text-sm text-neutral-500">example@gmail.com</p>
                                                <p className="text-sm text-neutral-500">1-600-890-4567</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            {/* Go To Top Component  */}
            <GoToTop />
        </main>
    )
}
