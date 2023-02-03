import React from 'react';
import { post } from '../17';
import PostCard from '../17/PostCard';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { AiOutlineBell } from 'react-icons/ai';

const Card = () => {
  return (
    <section className="flex w-1/2 border-2 rounded-md hover:border-slate-400 overflow-hidden relative">
      <div className="w-20 bg-gray-100 text-gray-500 flex flex-col items-center py-5 gap-3">
        <FiThumbsUp />
        24K
        <FiThumbsDown />
      </div>
      <PostCard {...post} />
      <div className="absolute right-3 top-2">
        <AiOutlineBell className="text-gray-400 w-6 h-8" />
      </div>
    </section>
  );
};

export default Card;
