// src/component/body/Question.js
import { Link } from 'lucide-react';
import Jobdata1 from '../api/HomeData';
import HomeCard from '../homeCard/HomeCard';

const Home = () => {
    return (
        <div className="2xl:container">
            <div className="w-[90%] mx-auto">
                <div className="bg-yellow-300 text-black p-4 text-center">
                    FLAT ₹400 OFF
                </div>
                <div className="bg-blue-500 text-white p-4 text-center">
                    <p>On Your 1<sup>st</sup> Purchase Via Myntra App!</p>
                </div>
                <div className="relative">
                    <img
                        src="https://www.shutterstock.com/image-vector/online-shopping-offers-sale-deals-260nw-1464820316.jpg"
                        alt="Super Saver Sale"
                        className="w-full"
                    />
                    {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-3xl font-bold">SUPER SAVER SALE</h1>
                    <p className="text-xl">JUL 13-21</p>
                    <p className="text-4xl font-bold">50-80% OFF</p>
                    <p className="text-xl">Deals Too Good To Miss</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <button className="bg-yellow-500 text-black py-2 px-4 rounded">
                            Her
                        </button>
                        <button className="bg-yellow-500 text-black py-2 px-4 rounded">
                            Him
                        </button>
                    </div>
                </div> */}
                </div>
                <div className="bg-blue-100 text-black p-4 text-center">
                    <p>100% ORIGINAL PRODUCTS</p>
                    <p>EASY RETURNS & REFUNDS</p>
                    <p>100% SECURE PAYMENTS</p>
                </div>

                <h6 className='flex items-center justify-center p-7 text-5xl font-[Assistant]'>SHOP BY CATEGORY</h6>


                <div className="lg:col-span-4 border border-gray-200">
                    <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-3">
                        {
                            Jobdata1.map((e) => {
                                return (
                                    <HomeCard
                                        Image1={e.Image1}
                                        Name={e.Name}
                                        Offer={e.Offer}
                                        Comment={e.Comment}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;


