import React from 'react';
import { TComment } from '.';
import './tailwind.css';
import { AiOutlineComment } from 'react-icons/ai';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

const Comment = ({ nickname, date, comment }: TComment) => {
  return (
    <div className="flex flex-col p-4 gap-3 justify-between w-full">
      <div className="flex items-center gap-3">
        <p className="w-6 h-6 bg-gray-200 rounded-full"></p>
        <p className="text-sm font-bold">{nickname}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
      <div className="text-sm">{comment}</div>
      <div className="flex items-center gap-8 text-gray-500">
        <div className="flex items-center gap-1">
          <FiThumbsUp />
          <p className="text-xs">23</p>
          <FiThumbsDown />
        </div>
        <div className="flex items-center gap-1">
          <AiOutlineComment />
          <p className="text-xs">Reply</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
