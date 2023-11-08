import React from 'react';
import Header from '../../components/Navbar/Header';
import MainFooter from '../../components/Footer/MainFooter';
import ImageBanner from '../../components/ImageBanner/ImageBanner';
import { Link } from 'react-router-dom';

const CarrerPage = () => {
    return (
        <div>
            {/* <Header></Header> */}
            {/* <div>
            <h1 className='text-4xl my-32 text-center'>This is Carrer page</h1>
            </div>
            <ImageBanner></ImageBanner> */}

            <div className="bg-gray-100  py-8">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold text-center  mb-8">Join Our Team</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 mx-8 gap-8">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Job Opening 1</h2>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                                Apply Now
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Job Opening 2</h2>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                                Apply Now
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Job Opening 3</h2>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                                Apply Now
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Job Opening 4</h2>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                                Apply Now
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Job Opening 5</h2>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                                Apply Now
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Job Opening 6</h2>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <Link to="/apply">
                            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                                Apply Now
                            </button>
                            </Link>
                        </div>
                        {/* Add more job openings as needed */}
                    </div>
                </div>
            </div>

            {/* <MainFooter></MainFooter> */}
        </div>
    );
};

export default CarrerPage;