import React from "react";

import LOGO from "../../assets/logo.png";
import CONTACT_MAIN_IMG from "../../assets/small.png";

const Contact = () => {
    return (
        <>
            <div className="w-full py-5 pt-14">
                <div className="max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap justify-between items-center -mx-2">
                        <div className="w-full">
                            <h2 className="text-center text-3xl font-bold text-blue-900">
                                Contact Us
                            </h2>
                            <p className="text-center text-gray-600 mt-2">
                                Let us help you with your queries
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-4 sm:py-6">
                <div className="max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full sm:w-4/12 bg-gray-200">
                            <div className="flex items-center flex-col">
                                <img
                                    className="max-w-50"
                                    src={LOGO}
                                    alt="logo"
                                />
                                <img
                                    className="object-cover w-full h-80"
                                    src={CONTACT_MAIN_IMG}
                                    alt="contact us"
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-8/12 bg-gray-100 p-8">
                            <div className="flex justify-between space-x-2 mb-10">
                                <button className="bg-[#654834] text-white px-14 py-2 rounded-3xl">
                                    For General
                                </button>
                                <button className="border border-gray-400 px-10 py-2 rounded-3xl">
                                    Corporate Tie-ups
                                </button>
                            </div>

                            <p className="text-gray-700 mb-4">
                                Got a query?
                                <br />
                                Click on the button below to contact us.
                            </p>
                            <p className="font-bold text-gray-900 mb-5">
                                Fill out this form and we will get in touch.
                            </p>

                            <form className="mt-4">
                                <div className="flex space-x-4 mb-6">
                                    <input
                                        type="text"
                                        placeholder="Full Name*"
                                        className="w-1/2 p-2 border-b border-gray-400 focus:outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Mobile No.*"
                                        className="w-1/2 p-2 border-b border-gray-400 focus:outline-none"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="w-full p-2 mt-4 border-b border-gray-400 focus:outline-none"
                                />
                                <textarea
                                    placeholder="Message"
                                    className="w-full p-2 mt-4 border-b border-gray-400 focus:outline-none"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-[#654834] text-white px-14 py-2 rounded-3xl mt-8"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-4 sm:py-10">
                <div className="max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap justify-between items-center -mx-2">
                        <div className="w-full">
                            <h2 className="text-center text-3xl font-normal">
                                Our Offices
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-4 sm:py-10">
                <div className="max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap justify-between items-center -mx-2">
                        <div className="w-full sm:w-6/12 md:w-4/12 text-center">
                            <h3 className="text-lg font-bold mb-10">
                                REGISTERED OFFICE
                            </h3>
                            <div className="flex flex-col items-center">
                                <div className="bg-[#654834] text-white py-3 px-4 rounded-full mb-5">
                                    <i class="fa-solid fa-location-pin"></i>
                                </div>
                                <div className="border-2 border-blue-900 rounded-3xl w-10"></div>
                            </div>
                            <p className="text-gray-600 mt-7">
                                78 SW 7th St
                                Miami
                                FL
                                33130
                            </p>
                            <a href="#" className="text-blue-600 mt-5 block">
                                View On Google Map
                            </a>
                        </div>

                        <div className="w-full sm:w-6/12 md:w-4/12 text-center">
                            <h3 className="text-lg font-bold mb-10">
                                HEAD OFFICE
                            </h3>
                            <div className="flex flex-col items-center">
                                <div className="bg-[#654834] text-white py-3 px-4 rounded-full mb-5">
                                    <i class="text-xl fa-solid fa-location-dot"></i>
                                </div>
                                <div className="border-2 border-blue-900 rounded-3xl w-10"></div>
                            </div>

                            <p className="text-gray-600 mt-7">
                                155 S Fair Oaks Ave
                                Pasadena
                                CA
                                91105
                            </p>
                            <a href="#" className="text-blue-600 mt-5 block">
                                View On Google Map
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-4 sm:py-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.128610562602!2d-118.15334372449121!3d34.14305161293026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c3708f412267%3A0x1ebfc98a0825e8dc!2s155%20S%20Fair%20Oaks%20Ave%2C%20Pasadena%2C%20CA%2091105%2C%20USA!5e0!3m2!1sen!2s!4v1747091984542!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
};

export default Contact;



