import { Search } from "lucide-react";
import Jobdata from "../../api/DummyData";
import Card from "../card/Card";

const Body = () => {
    return (
        <>
            <p className="p-2.5 font-['Assistant'] text-[#282c3f] text-sm mt-20">Home / Clothing / Shirts / <span className="font-bold">Men's Casual Shirts</span></p>
            <p className="p-2 font-['Assistant'] text-[#282c3f] font-bold text-base">Men's Casual Wear</p>

            <div className="grid grid-cols-1">


                <div className="flex flex-row gap-4 ">
                    <p className="p-3 text-[#000000] font-['Assistant'] font-bold text-base mr-52">FILTERS</p>
                    <div className="flex  justify-center items-center mr-96">
                        <p className="text-sm p-4">Add On</p>
                        <p className="text-sm p-4">Bundles</p>
                        <p className="text-sm p-4">Collar</p>
                        <p className="text-sm p-4">Country of Origin</p>
                        <p className="text-sm p-4">Fabric</p>
                        <p className="text-sm p-4">Fabric 2</p>
                        <p className="text-sm p-4">Features</p>

                    </div>
                    <button className=" border border-gray-300 flex justify-end items-end p-3 m-3 rounded-sm">Sort by : <span className="font-semibold text-sm ">Recommended</span></button>
                </div>


            </div>


            <div className="2xl:container mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-5 ">
                    {/* Sidebar */}
                    <div className=" lg:col-1">
                        {/* <p className="p-4">FILTER</p> */}


                        {/* <div className="p-4 border border-gray-200 mx-5 ">
                
                            <ul>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox"  /> Men</li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox"  /> Women</li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox"  /> Boys</li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox"  /> Girls</li>
                            </ul>
                        </div>

                        <div className="p-4 border border-gray-200 m-5 my-0">
                            <p className="font-semibold py-3 text-sm text-[#282c3f] font-['Assistant']">CATEGORIES</p>
                        
                            <ul>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox"  /> Sports Shoes</li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox"  /> Tshirts</li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox"  /> Track Pants</li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox"  /> Shorts</li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox"  /> Tights</li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox"  /> Tracksuits</li>
                            </ul>
                        </div> */}

                        <div className="p-4 border border-gray-200 m-5 my-0">
                            
                            <div className="flex justify-between">
                                <p className="font-semibold font-['Assistant'] text-sm text-[#282c3f] py-3 ">BRAND</p>
                                <div className="text-gray-400"><Search size={20} strokeWidth={1.25} /></div>
                            </div>


                            <ul>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Puma</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">HRX by Hrithick roshan</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Addidas</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Reebok</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Campus</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Nike</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Sparx</span></li>
                            </ul>
                        </div>

                        <div className="p-4 border border-gray-200 m-5 my-0">
                            <p className="font-semibold text-sm text-[#282c3f] py-3 font-['Assistant']">PRICE</p>

                            <ul>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Rs.99 to Rs.16325</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Rs.16325 to Rs.32551</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Rs.48777 to Rs.65003</span></li>
                            </ul>
                        </div>

                        <div className="p-4 border border-gray-200 m-5 my-0">
                           
                            <div className="flex justify-between">
                                <p className="font-semibold font-['Assistant'] text-sm text-[#282c3f] py-3 ">COLOUR</p>
                                <div className="text-gray-400"><Search size={20} strokeWidth={1.25} /></div>
                            </div>

                            <ul>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Black</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Grey</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Blue</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Navy Blue</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">White</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Green</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" /> <span className="p-2">Pink</span></li>
                            </ul>
                        </div>

                        <div className="p-4 border border-gray-200 mx-5 my-0">
                            <p className="font-semibold font-['Assistant'] text-sm text-[#282c3f] py-3">DISCOUNT</p>

                            <ul>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" className="font-['Assistant']" /> <span className="p-2">10% Discount</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" className="font-['Assistant']" /> <span className="p-2">20% Discount</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" className="font-['Assistant']" /> <span className="p-2">30% Discount</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" className="font-['Assistant']" /> <span className="p-2">40% Discount</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" className="font-['Assistant']" /> <span className="p-2">50% Discount</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" className="font-['Assistant']" /> <span className="p-2">60% Discount</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" className="font-['Assistant']" /> <span className="p-2">70% Discount</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" className="font-['Assistant']" /> <span className="p-2">80% Discount</span></li>
                                <li className="font-['Assistant'] text-sm"><input type="checkbox" className="font-['Assistant']" /> <span className="p-2">90% Discount</span></li>
                            </ul>
                        </div>

                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-4 border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
                            {
                                Jobdata.map((e) => {
                                    return (
                                        <Card
                                            Image={e.Image}
                                            CompanyName={e.CompanyName}
                                            ProductName={e.ProductName}
                                            Price={e.Price}
                                            key={e.id}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* Next Page  */}

                    <div className="ml-72 text-gray-200">__________________________________________________________________________________________________________________________________________________________________________________________</div>

                </div>
                <div className="2xl:container">
                    <div className="w-[90%] mx-auto">
                        <div className="flex justify-between items-center p-4 m-5 px-64 ">
                            <p> page 1</p>
                            <button className="border border-gray-200 py-2 px-6 rounded-md"> Previous </button>
                            <p>Page 1 of 2456</p>
                            <button className="border border-gray-200 py-2 px-6 rounded-md">Next </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Body;

