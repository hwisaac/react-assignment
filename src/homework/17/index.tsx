import React, { useState } from "react";
import "./tailwind.css";
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsPencilSquare} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineComment} from 'react-icons/ai'
import {AiOutlineShareAlt} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'
import {AiOutlineEnter} from 'react-icons/ai'
import Comment from './Comment';
import { post, comments } from './content';

export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export const liStyle = ['flex', 'items-center', 'gap-1']

const Homework = () => {
  const {nickname, title, content} = post

  return (
    <div>
      <div className='p-4 flex items-center justify-between bg-blue-800'>
        <div className='text-white font-bold text-xl'>WILL</div>
        <ul className='flex gap-2 text-white'>
          <li className={cls(...liStyle)}>
            <AiOutlineHome/> 
            <span>Home</span>
          </li>
          <li className={cls(...liStyle)}>
            <AiOutlineSearch/>
            <span>Search</span>
          </li>
          <li className={cls(...liStyle)}>
            <BsPencilSquare/>
            <span>Write</span>
          </li>
        </ul>
      </div>
      <section className='p-6 flex flex-col gap-2'>
        <p className='text-zinc-400 text-sm'>Posted by {nickname} just now</p>
        <h1 className='font-bold text-xl'>{title}</h1>
        <div className='leading-8 my-4'>{content}</div>
        <div className='m-auto border border-1 w-20 h-20 flex items-center justify-center'>
          <AiFillHeart className='text-[50px] text-red-200'/>
        </div>
        <ul className='flex gap-2 text-slate-400'>
          <li className={cls(...liStyle)}>
            <AiOutlineComment/> 
            <span>Comments 4</span>
          </li>
          <li className={cls(...liStyle)}>
            <AiOutlineShareAlt/> 
            <span>share</span>
          </li>
          <li className={cls(...liStyle)}>
            <AiOutlineDelete/> 
            <span>Delete</span>
          </li>
        </ul>
        <div className='my-5 flex gap-2 items-center'>
          <div className='w-10 h-10 rounded-full bg-slate-400 border border-2 border-sky-400'/>
          <form className='flex w-full'>
            <input type="text" className='w-full p-2 border border-1 border-slate-300 rounded-l-lg'/>
            <button className='bg-slate-300 text-slate-500 py-2 px-3 font-bold text-lg rounded-r-lg'><AiOutlineEnter/></button>
          </form>
        </div>
        <div>
          {
            comments.map((comment, index) => 
              <Comment comment={comment} key={index}/>)
          }
        </div>
      </section>
    </div>
  );
};

export default Homework;
