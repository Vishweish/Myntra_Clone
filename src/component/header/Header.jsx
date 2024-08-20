import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="2xl:container mx-auto shadow-md">
      <div className="w-[90%] mx-auto flex items-center">
        {/* logo and menu items */}
        <div className="flex items-center ">
          <div className="flex items-center">
            {/* <img src="" alt="Logo" className="h-8 w-8" /> */}
            <Link to="/">
              <svg className="h-14 w-14 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 818.08 652" id="myntra"><path fill="#f37320" fill-rule="evenodd" d="M415.84 569.9a5.39 5.39 0 0 0-1 .3 2.93 2.93 0 0 0 1-.3M395.94 570.5a.6.6 0 0 1-.4-.1.6.6 0 0 0 .4.1M412.64 570.7c-.7.1-1.6.3-2.2.4.6-.1 1.4-.3 2.2-.4M408.64 571.2a11.48 11.48 0 0 1-1.8.1 3.73 3.73 0 0 0 1.8-.1"></path><path fill="#f15e22" fill-rule="evenodd" d="M410.24 571c-.6 0-1.2.1-1.6.1a9.74 9.74 0 0 0 1.6-.1M395.64 570.5a28 28 0 0 1-2.8-.6c.9.1 1.8.4 2.8.6M414.94 570.1a16.84 16.84 0 0 1-2.4.6 16.84 16.84 0 0 0 2.4-.6M403.44 571.4a37.41 37.41 0 0 1-7.4-.9 30.6 30.6 0 0 0 7.4.9M406.74 571.3c-.7 0-1.6.1-2.5.1a19.29 19.29 0 0 0 2.5-.1M566.24 155.8h-.1a11 11 0 0 0-4.4-.7 21.8 21.8 0 0 1 5.8 1.3 7.54 7.54 0 0 1-1.3-.6"></path><path fill="#ec008b" fill-rule="evenodd" d="M556.24,155.8h-.1a5.21,5.21,0,0,1-1.5.6,21.69,21.69,0,0,1,7.2-1.2,11.3,11.3,0,0,0-5.6.6"></path><path fill="#f15e22" fill-rule="evenodd" d="M613.34,171.9h0a11.77,11.77,0,0,0-4.5-.7,16.09,16.09,0,0,1,5.8,1.3,6.87,6.87,0,0,0-1.3-.6"></path><path fill="#ec008b" fill-rule="evenodd" d="M603.24,171.8h0a4.59,4.59,0,0,1-1.6.7,19.16,19.16,0,0,1,7.1-1.3,12.64,12.64,0,0,0-5.5.6"></path><path fill="#f15e22" fill-rule="evenodd" d="M615.34,172.9h0a11.66,11.66,0,0,0-4.5-.6,16.26,16.26,0,0,1,5.8,1.2c-.5-.2-.8-.4-1.3-.6"></path><path fill="#ec008b" fill-rule="evenodd" d="M605.34,172.8h0c-.5.3-1,.4-1.6.7a18.81,18.81,0,0,1,7.1-1.3,16,16,0,0,0-5.5.6"></path><path fill="#f13ab1" fill-rule="evenodd" d="M238.64,72.3h.1c.4-.1,1-.3,1.5-.4-39.7,6-127.7,147.6-175,277.5-50.3,138.3-38.2,205,1.3,219.5h.1c39.5,14.3,91.6-29,142-167.4,13.6-37.3,25.2-77.7,34.4-116.9-24.5-105.4-29.9-202.7-4.4-212.3"></path><path fill="#fd913c" fill-rule="evenodd" d="M389.74,568.9h0c-39.7-14.6-51.6-81.4-1.3-219.5,5-13.7,10.3-27.6,16.2-41.3-51.7-123.5-131.4-243.2-164.4-236.3a16.31,16.31,0,0,1,7.1.6h.1v.1C273,82,267.54,179.2,243,284.7a978.28,978.28,0,0,0,34.4,116.8c39.7,109,80.5,158.9,115.3,168.2a22.62,22.62,0,0,1-3-.8"></path><path fill="#f05524" fill-rule="evenodd" d="M247.34,72.5h-.1a15.38,15.38,0,0,0-6.8-.6c-.7.1-1,.3-1.6.4h-.1c-25.5,9.6-20.1,106.9,4.3,212.3,24.3-105.4,29.8-202.5,4.3-212.1"></path><path fill="#fd913c" fill-rule="evenodd" d="M558.94,73c-37,13.4-107,122.8-154.2,235,5.8,13.7,11.2,27.6,16.2,41.3,50.3,138.2,38.3,205-1.3,219.4v.1c-1.2.3-2.5.7-3.5,1,34.9-9,76.1-58.8,115.7-168.4a953,953,0,0,0,33.6-113.7c-24.5-104.5-30.7-202-6.5-214.7"></path><path fill="#f05524" fill-rule="evenodd" d="M419.44,568.8h.1c39.5-14.4,51.5-81.4,1.3-219.5-5.2-13.7-10.5-27.6-16.4-41.3-5.8,13.7-11.2,27.6-16.2,41.3-50.3,138.2-38.2,205.1,1.3,219.5,1,.4,2.1.6,3.1.9a14.34,14.34,0,0,0,2.8.7h.4a40.73,40.73,0,0,0,7.5,1h3.2a9.66,9.66,0,0,0,1.8-.3c.7,0,1.2-.1,1.9-.1s1.3-.3,2.1-.4a9.27,9.27,0,0,0,2.4-.4c.4,0,.7-.1,1-.1,1.3-.5,2.5-.8,3.7-1.3"></path><path fill="#f13ab1" fill-rule="evenodd" d="M571.54,72.9c24.5,12.2,18.4,109.8-6.2,215a976.22,976.22,0,0,0,33.5,113.5c50.4,138.3,102.5,181.7,142.2,167.4h.1c39.4-14.6,51.5-81.2,1.2-219.5C696.64,223.8,613,87.5,571.54,72.9"></path><path fill="#f05524" fill-rule="evenodd" d="M571.54,72.9a23.2,23.2,0,0,0-5.8-1.3,22.62,22.62,0,0,0-7.1,1.5c-24,12.7-18,110,6.6,214.8,24.8-105.1,30.8-202.7,6.3-215"></path></svg>
            </Link>
          </div>
          <div className="hidden md:flex items-center ml-8 space-x-4 p-8">
            <p className="font-['Assistant'] font-semibold">MEN</p>
            <p className="font-['Assistant'] font-semibold">WOMEN</p>
            <p className="font-['Assistant'] font-semibold">KIDS</p>
            <p className="font-['Assistant'] font-semibold">HOME & LIVING</p>
            <p className="font-['Assistant'] font-semibold">BEAUTY</p>
            <p className="font-['Assistant'] font-semibold">STUDIO <span className="text-pink-600 text-xs align-text-top">NEW</span></p>
          </div>
        </div>

        {/* search bar */}
        <div className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              className="w-full p-2 rounded-md border border-gray-300 pl-10"
              placeholder="Search for products, brands and more"
            />
            <svg
              className="absolute left-3 top-2 h-5 w-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M10 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm12.707 5.293-6.387-6.387A9.944 9.944 0 0 0 20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10c2.317 0 4.447-.79 6.123-2.107l6.387 6.387c.195.195.451.293.707.293s.512-.098.707-.293a1.004 1.004 0 0 0 0-1.414z"
              />
            </svg>
          </div>
        </div>

        {/* menu items */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span className="font-bold text-xs">Profile</span>
          </Link>
          <Link to="/wishlist" className="flex flex-col items-center">
            {/* <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.758l-1.447-1.342C5.074 15.036 2 12.153 2 8.495 2 5.456 4.486 3 7.563 3c1.656 0 3.156.832 4.093 2.146C12.781 3.832 14.281 3 15.937 3 19.014 3 21.5 5.456 21.5 8.495c0 3.658-3.074 6.541-8.553 11.921L12 21.758z" />
            </svg> */}<Heart />
            <span className="font-bold text-xs">Wishlist</span>
          </Link>
          <Link to="/bag" className="flex flex-col items-center">
            <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 2h4a2 2 0 0 1 2 2v1h5a1 1 0 0 1 1 1v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h5V4a2 2 0 0 1 2-2zm4 3h-4v1h4V5zM3 7v15h18V7H3zm7 3h4v2h-4v-2z" />
            </svg>
            <span className="font-bold text-xs">Bag</span>
          </Link>
        </div>

        {/* mobile menu */}
        <div className="md:hidden flex items-center">
          {show ? (
            <svg
              onClick={toggle}
              className="block"
              viewBox="0 0 21 21"
              fill="currentColor"
              height="1em"
              width="1em"
              aria-label="Close menu">
              <g fill="none" fillRule="evenodd" stroke="currentColor">
                <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
              </g>
            </svg>
          ) : (
            <svg
              onClick={toggle}
              className="block"
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
              aria-label="Open menu">
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
            </svg>
          )}
        </div>
      </div>

      {/* mobile menu content */}
      {show && (
        <div className="md:hidden bg-slate-500">
          <ul className="flex flex-col justify-center items-center gap-4 p-8">
            <li>
              <Link to="/" onClick={toggle}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/wishlist" onClick={toggle}>
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/bag" onClick={toggle}>
                Bag
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

