import HeroImg from "../assets/images/hero.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

export default function Contact() {
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
                                <form>
                                    <div className="relative mb-6">
                                        <input type="text" className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary" id="nameInput" />
                                        <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary" htmlFor="nameInput" >Name</label>
                                    </div>
                                    <div className="relative mb-6">
                                        <input type="email" className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary" id="emailInput" />
                                        <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary" htmlFor="emailInput" >Email address</label>
                                    </div>
                                    <div className="relative mb-6">
                                        <textarea className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100" id="messageInput" rows="3"></textarea>
                                        <label htmlFor="messageInput" className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary">Message</label>
                                    </div>
                                    <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                                        <input className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none checked:border-green-900 checked:bg-green-300 transition-all 0.3s ease-in hover:cursor-pointer" type="checkbox" id="copyCheck" defaultChecked />
                                        <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="copyCheck">Send me a copy of this message</label>
                                    </div>
                                    <button type="button" className="mb-6 w-full rounded bg-green-500 hover:bg-green-600 transition-all 0.3s ease text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0">Send</button>
                                </form>
                            </div>
                            <div className="flex items-start w-full lg:w-7/12">
                                <div className="flex flex-wrap">
                                    <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
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
                                    <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
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
                                    <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-green-200 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15V5a2 2 0 00-2-2h-5.586a2 2 0 00-1.414.586l-7.828 7.828a2 2 0 000 2.828l5.586 5.586a2 2 0 002.828 0l7.828-7.828A2 2 0 0021 10.586V9" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow text-left">
                                                <p className="mb-2 font-bold">Media inquiries</p>
                                                <p className="text-sm text-neutral-500">example@gmail.com</p>
                                                <p className="text-sm text-neutral-500">1-600-890-4567</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-green-200 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 .728.195 1.41.532 2H7.24c-.623 0-1.156.44-1.253 1.055A6.002 6.002 0 0012 21a6 6 0 005.878-5h-.828a5.987 5.987 0 01-1.205 2.204A1.25 1.25 0 0115.5 20.5a2.25 2.25 0 001.225-.349c.002.027.003.053.003.079a2.5 2.5 0 01-2.494 2.497l-6.5.003a2.5 2.5 0 01-2.497-2.494l-.003-6.5a2.5 2.5 0 012.497-2.497l6.5-.003a2.5 2.5 0 012.494 2.497v.076A2.25 2.25 0 0015.5 13.5a1.25 1.25 0 01-.204-.016A5.987 5.987 0 0112 11zM4.75 12a.75.75 0 010 1.5h-.5a.75.75 0 010-1.5h.5zM19 11.25a.75.75 0 010 1.5h-.5a.75.75 0 010-1.5h.5zM12 2a6 6 0 015.878 5h-.828a5.987 5.987 0 01-1.205 2.204A1.25 1.25 0 0115.5 8.5a2.25 2.25 0 001.225-.349c.002.027.003.053.003.079a2.5 2.5 0 01-2.494 2.497l-6.5.003a2.5 2.5 0 01-2.497-2.494l-.003-6.5a2.5 2.5 0 012.497-2.497l6.5-.003a2.5 2.5 0 012.494 2.497v.076A2.25 2.25 0 0015.5 5.5a1.25 1.25 0 01-.204-.016A5.987 5.987 0 0112 2zM4.75 3a.75.75 0 010 1.5h-.5a.75.75 0 010-1.5h.5zM19 2.25a.75.75 0 010 1.5h-.5a.75.75 0 010-1.5h.5z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow text-left">
                                                <p className="mb-2 font-bold">Bug report</p>
                                                <p className="text-sm text-neutral-500">example@gmail.com</p>
                                                <p className="text-sm text-neutral-500">1-600-890-4567</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-green-200 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm0 5.25a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow text-left">
                                                <p className="mb-2 font-bold">Billing questions</p>
                                                <p className="text-sm text-neutral-500">example@gmail.com</p>
                                                <p className="text-sm text-neutral-500">1-600-890-4567</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-green-200 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v-4.5m0 4.5H7.5m4.5 0l-6-6m0 3A8.25 8.25 0 0116.5 18.75a8.25 8.25 0 01-6-2.25A8.25 8.25 0 013.75 7.5a8.25 8.25 0 013.75-6 8.25 8.25 0 016 2.25m6 0a8.25 8.25 0 016-2.25 8.25 8.25 0 01-2.25 6 8.25 8.25 0 01-6 2.25" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow text-left">
                                                <p className="mb-2 font-bold">General inquiries</p>
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
