import React from 'react';
import './tailwind.css';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-14 px-4 bg-slate-700 text-white ">
      <h1 className="font-bold text-lg font-serif">WILL</h1>
      <div className="flex gap-5">
        <div className="flex gap-2 items-center">
          <AiOutlineHome className="text-xl" />
          Home
        </div>
        <div className="flex gap-2 items-center">
          <AiOutlineSearch className="text-xl" />
          Search
        </div>
        <div className="flex gap-2 items-center">
          <BsPencilSquare className="text-xl" />
          Write
        </div>
      </div>
    </header>
  );
};

export default Header;
