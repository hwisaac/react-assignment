import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AiFillGithub, AiFillFacebook } from 'react-icons/ai';
import './tailwind.css';

export function cls(...classnames: string[]) {
  return classnames.join(' ');
}

const activeSection = [
  'border-b-2',
  'border-b-orange-600',
  'text-orange-600',
  'w-1/2',
  'text-center',
  'p-2',
];
const inactiveSection = [
  'w-1/2',
  'text-center',
  'text-gray-400',
  'border-b-2',
  'border-b-gray-400',
  'p-2',
];
const inputStyle = [
  'block',
  'w-full',

  'h-10',
  'border-solid',
  'border-2 ',
  'border-gray-200',
  'px-2',
  'focus:outline-none',
  'focus:border-orange-600',
];
const orangeBtn = [
  'w-full ',
  'h-10 ',
  'bg-orange-500 ',
  'hover:bg-orange-600 ',
  'rounded-md ',
  'text-white ',
  'mt-2 ',
  'focus:outline ',
  'focus:outline-2 ',
  'focus:outline-offset-2 ',
  'outline-orange-500',
];
const iconBox = [
  'flex',
  'justify-center',
  'items-center',
  'w-1/2',
  'text-center',
  'border-solid',
  'border-2',
  'border-gray-200',
  'p-2',
  'rounded-md',
  'hover:bg-gray-100',
];
const Homework = () => {
  const [section, setSection] = useState('email');

  return (
    <div className="flex flex-col justify-center items-center h-screen w-1/3 m-auto gap-6 px-3">
      <h1 className="text-2xl font-bold">Enter Page</h1>
      <div>Enter using :</div>
      <ul className="flex justify-center items-center w-full h-14">
        <li
          className={
            section === 'email'
              ? cls(...activeSection)
              : cls(...inactiveSection)
          }
          onClick={() => setSection('email')}
        >
          Email
        </li>
        <li
          className={
            section === 'phone'
              ? cls(...activeSection)
              : cls(...inactiveSection)
          }
          onClick={() => setSection('phone')}
        >
          Phone
        </li>
      </ul>
      {section === 'email' ? (
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-sm text-gray-700 font-semibold"
          >
            Email address
          </label>
          <div className="relative mt-1 ">
            <input
              type="text"
              name="email"
              id="email"
              className={[cls(...inputStyle), 'rounded-md'].join(' ')}
            />
          </div>
          <button className={cls(...orangeBtn)}>Get login link</button>
        </div>
      ) : (
        <div className="w-full">
          <label
            htmlFor="phone"
            className="block text-sm text-gray-700 font-semibold"
          >
            Phone number
          </label>
          <div className="flex relative mt-1">
            <span className="flex items-center rounded-l-md h-10  border-2 border-r-0 border-gray-200 bg-gray-50 px-3 text-gray-500">
              +82
            </span>
            <input
              type="number"
              name="phone"
              id="phone"
              className={[cls(...inputStyle), 'rounded-r-md'].join(' ')}
            />
          </div>
          <button className={cls(...orangeBtn)}>Get one-time password</button>
        </div>
      )}
      <div className="inline-flex items-center justify-center w-full relative">
        <hr className="w-full h-px my-4 bg-gray-200" />
        <span className="absolute px-3 font-medium -translate-x-1/2 bg-white left-1/2 text-gray-500">
          Or enter with
        </span>
      </div>
      <div className="flex justify-center items-center w-full h-14 gap-3">
        <button className={cls(...iconBox)}>
          <AiFillFacebook className="text-2xl fill-slate-500" />
        </button>
        <button className={cls(...iconBox)}>
          <AiFillGithub className="text-2xl fill-slate-500" />
        </button>
      </div>
    </div>
  );
};

export default Homework;
