import React from 'react';
import { TPost } from '.';
import './tailwind.css';
import {
  AiOutlineComment,
  AiOutlineShareAlt,
  AiOutlineDelete,
} from 'react-icons/ai';
import { BsArrowReturnLeft } from 'react-icons/bs';

const PostCard = ({ nickname, title, description }: TPost) => {
  return (
    <main className="flex flex-col p-4 gap-3 justify-between w-full">
      <p className="text-slate-400 text-sm ">Posted by {nickname}</p>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="font-medium">{description}</p>
      <div className="flex items-center gap-5 text-gray-500">
        <p className="flex items-center gap-1">
          <AiOutlineComment />
          Comments 4
        </p>
        <p className="flex items-center gap-1">
          <AiOutlineShareAlt />
          Share
        </p>
        <p className="flex items-center gap-1">
          <AiOutlineDelete />
          Delete
        </p>
      </div>
      <div className="flex w-full item-center gap-3">
        <p className="w-8 h-8 bg-gray-200 rounded-full"></p>
        <div className="flex w-full">
          <input
            type="text"
            id="comment"
            className="rounded-l-md h-8 w-full border-2 border-r-0 border-gray-200 px-3 text-gray-500"
          />
          <button className="flex items-center rounded-r-md h-8 border-2  border-gray-200 bg-gray-50 px-3 text-gray-500">
            <BsArrowReturnLeft />
          </button>
        </div>
      </div>
    </main>
  );
};

export default PostCard;
