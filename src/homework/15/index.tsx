import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import "./tailwind.css"; 

export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

const Homework = () => {
  const [section, setSection] = useState('email')

  const activeList = [
    'py-3',
    'border-b-4',
    'w-full',
    'border-orange-400'
  ]

  const inactiveList = [
    'py-3',
    'border-b-4',
    'w-full'
  ]

  const orangeBtn = [
    'text-white',
    'w-full',
    'my-2',
    'py-2',
    'bg-orange-400',
    'hover:bg-orange-300',
    'rounded-md',
    'focus:outline',
    'focus:outline-2',
    'focus:outline-orange-500'
  ]

  const iconBtn = [
    'w-full',
    'flex',
    'justify-center',
    'py-2',
    'text-slate-400',
    'border' ,
    'border-solid',
    'border-slate-300',
    'rounded-md',
    'hover:bg-slate-300',
  ]

  return (
    <div className='flex flex-col items-center p-10 gap-5'>
      <h1 className='text-2xl font-bold'>Enter Page</h1>
      <p className='text-slate-500'>Enter using:</p>
      <ul className='flex text-center w-full'>
        <li className={
          section === 'email' 
            ? cls(...activeList) 
            : cls(...inactiveList)
            }
            onClick={() => {setSection('email')}}
            >
            Email
        </li>
        <li className={
          section === 'email' 
          ? cls(...inactiveList)
          : cls(...activeList)
          }
          onClick={() => {setSection('phone')}}
          >
          Phone
        </li>
      </ul>
      {section === 'email' 
        ? (
          <div className='w-full'>
            <p>Email address</p>
            <input className='outline-orange-400 p-1 my-2 w-full border border-solid border-slate-400 rounded-md' type='email'/>
            <button className={cls(...orangeBtn)}>Get login link</button>
          </div>
        )
      : (
          <div className='w-full'>
            <p>Phone number</p>
            <div className='flex my-2 w-full'>
              <p className='bg-slate-200 rounded-l-md py-1 px-2'>+82</p>
              <input className='border border-solid border-slate-400 outline-orange-400 rounded-r-md w-full p-1' type='number'/>
            </div>
            <button className={cls(...orangeBtn)}>Get one-time password</button>
          </div>
        )
      }
        <div className="w-full flex flex-col relative">
          <hr className="w-full color-slate-500" />
          <span className="absolute bottom-[-10px] left-[45%]  text-gray-500 bg-white px-2 z-10">
            Or enter with
          </span>
        </div>
        <div className='w-full flex gap-2 my-2'>
          <p className={cls(...iconBtn)}><AiFillGithub/></p>
          <p className={cls(...iconBtn)}><AiFillFacebook/></p>
        </div>
      </div>
    )
  };

export default Homework;
