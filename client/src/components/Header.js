import React from 'react';
import {
  RiDashboardFill,
  RiChat4Fill,
  RiNotification4Fill,
  RiSearchLine,
  RiSettings5Fill,
} from 'react-icons/ri';

import logo from '../assets/logo-300px.png';
let userImg =
  'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

function Header() {
  return (
    <div className="items-center justify-between flex w-full spac-x-4 pb-3 pt-4 px-3 bg-primary sticky top-0 z-40">
      {/* logo */}
      <div className="w-[40%] flex md:space-x-2 pb-2 items-center justfy-center md:justify-start">
        <RiDashboardFill size={24} color="white" />
        <img className="md:w-30 w-100 h-10" src={logo} alt="logo" />
      </div>
      {/* navlink */}
      <div className="w-[140%] flex items-end justify-end flex space-x-2">
        <div className="w-[50%] relative items-start justify-start flex bg-gray-200 rounded">
          <div className="w-full flex px-2 items-center">
            <RiSearchLine />
            <input name="search" className="w-full bg-inherit" />
          </div>
        </div>
      </div>
      {/* login board */}
      <div className="pb-2 hidden md:flex items-center justify-center px-3 space-x-8 w-[50%]">
        <div>
          <RiNotification4Fill color="white" />
        </div>
        <div>
          <RiChat4Fill color="white" />
        </div>
        <div>
          <RiSettings5Fill color="white" />
        </div>
        <img
          src={userImg}
          alt="userimage"
          className="w-8 h-8 rounded-full object-center object-cover"
        />
      </div>
    </div>
  );
}

export default Header;
