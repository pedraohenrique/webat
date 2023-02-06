import React from 'react';
import {
  FaDollarSign,
  FaFile,
  FaHome,
  FaListAlt,
  FaPaperPlane,
} from 'react-icons/fa';
import { DiGoogleAnalytics } from 'react-icons/di';
import { MdPeople, MdSettings } from 'react-icons/md';
import { HiSupport } from 'react-icons/hi';

const navbarItemsGroup1 = [
  { title: 'Home', icon: <FaHome />, target: '/' },
  { title: 'Quotes', icon: <FaDollarSign />, target: '/quotes' },
  { title: 'Leads', icon: <FaListAlt />, target: '#' },
  { title: 'Tours', icon: <FaPaperPlane />, target: '#' },
];
const navbarItemsGroup2 = [
  { title: 'Invoices', icon: <FaFile />, target: '#' },
  { title: 'Analytics', icon: <DiGoogleAnalytics />, target: '#' },
  { title: 'Team', icon: <MdPeople />, target: '#' },
  { title: 'Admin', icon: <MdSettings />, target: '#' },
  { title: 'Suport  ', icon: <HiSupport />, target: '#' },
];

function Navbar() {
  const renderedSideBarItems = (list) =>
    list.map((item, index) => (
      <div key={index} className="w-full py-4 px-8 hover:bg-gray-300">
        <a href={item.target}>
          <div className="flex space-x-2 items-center justify-start w-full">
            <div>{item.icon} </div>
            <div>{item.title}</div>
          </div>
        </a>
      </div>
    ));

  return (
    <div className="md:w-[150px] h-[92vh] hidden overflow-hidden md:flex flex-col items-center justify-between bg-gray-200 text-primary">
      <div className="flex flex-col items-start justify-between w-full">
        {renderedSideBarItems(navbarItemsGroup1)}
        <div className="border-b border-gray-300 w-full h-1">&nbsp;</div>
        {renderedSideBarItems(navbarItemsGroup2)}
      </div>
    </div>
  );
}

export default Navbar;
