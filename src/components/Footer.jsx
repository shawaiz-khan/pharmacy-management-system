import Logo from '../assets/logos/logo-5.png';
import SnapIcon from '../assets/images/snap.svg';
import GitIcon from '../assets/images/git.svg';
import InstaIcon from '../assets/images/insta.svg';
import WebIcon from '../assets/images/webs.svg';
import LinkedIcon from '../assets/images/linked.svg';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex flex-col justify-center items-center">
            {/* CTA Section */}
            <div className="py-10 px-16 flex items-center justify-between bg-[#002929] w-[900px] rounded-lg -mb-[80px] z-50">
                <h2 className="text-3xl text-white sm:text-4xl">
                    <span className="block font-bold tracking-tight text-4xl">Looking for a Medicine?</span>
                    <span className="block pt-4 tracking-tight text-lg">Find the Medicine you are Looking for.</span>
                </h2>
                <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="#" className="bg-green-600 border-2 border-transparent rounded-md py-4 px-6 inline-flex items-center justify-center text-lg font-medium text-white hover:bg-transparent hover:border-2 hover:border-green-600 transition-all 0.3s ease-in focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Search Medicine
                        </a>
                    </div>
                </div>
            </div>
            {/* Footer Section */}
            <footer className="w-full bg-green-100 border-green-600 border-t-2">
                <div className="container px-20 py-12 mx-auto">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 pt-16">
                        <div className="sm:col-span-2">
                            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-black xl:text-2xl">Subscribe to Our Newsletter</h1>
                            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                                <input id="email" type="text" className="px-4 py-2 text-green-700 font-normal bg-white border border-green-600 rounded-md focus:border-green-400 focus:outline-none focus:ring focus:ring-opacity-60 focus:ring-green-300" placeholder="Email Address" />
                                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 border-2 border-green-600 focus:outline-none bg-green-600 rounded-lg hover:bg-transparent hover:border-2 hover:border-green-600 hover:text-green-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">Subscribe</button>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-black">Quick Links</p>
                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" className="text-black transition-colors duration-300 hover:underline">Home</a>
                                <a href="#" className="text-black transition-colors duration-300 hover:underline">Dashboard</a>
                                <a href="#" className="text-black transition-colors duration-300 hover:underline">Stats</a>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-black">Info Links</p>
                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a href="#" className="text-black transition-colors duration-300 hover:underline">Retail & E-Commerce</a>
                                <a href="#" className="text-black transition-colors duration-300 hover:underline">Information Technology</a>
                                <a href="#" className="text-black transition-colors duration-300 hover:underline">Finance & Insurance</a>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

                    <div className="flex items-center justify-between">
                        <a href="#">
                            <img className="w-60 h-fit" src={Logo} alt="Company Logo" />
                        </a>
                        {/* Footer Icons  */}
                        <div className="flex -mx-2">
                            <a href="#" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="GitHub">
                                <img src={GitIcon} alt="GitHub Icon" className='object-contain w-full h-full hover:scale-110 transition-all 0.3s ease-in' />
                            </a>
                            <a href="https://devdigitals.org/" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="Portfolio">
                                <img src={WebIcon} alt="Portfolio Icon" className='object-contain w-full h-full hover:scale-110 transition-all 0.3s ease-in' />
                            </a>
                            <a href="#" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="LinkedIn">
                                <img src={LinkedIcon} alt="LinkedIn Icon" className='object-contain w-full h-full hover:scale-110 transition-all 0.3s ease-in' />
                            </a>
                            <a href="#" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="Snapchat">
                                <img src={SnapIcon} alt="Snapchat Icon" className='object-contain w-full h-full hover:scale-110 transition-all 0.3s ease-in' />
                            </a>
                            <a href="#" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="Instagram">
                                <img src={InstaIcon} alt="Instagram Icon" className='object-contain w-full h-full hover:scale-110 transition-all 0.3s ease-in' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#002929] p-4 text-center text-white">Copyright © {currentYear}<a href="https://devdigitals.org/"> | Shawaiz Khan</a></div>
            </footer>
        </div>
    );
}