import React from "react";
import "./tailwind.css";
import {
  AiOutlineBell,
  AiOutlineComment,
  AiOutlineDelete,
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineShareAlt,
} from "react-icons/ai";
import "./tailwind.css";

const PostItem = () => {
  return (
    <li className="flex border w-3/5 rounded-md mb-2 hover:border-black">
      <div className="flex flex-col rounded-l-lg bg-gray-200 pt-4 px-4">
        <button className="flex flex-col items-center mb-3">
          <AiOutlineLike size={20} />
          <span className="text-sm">24k</span>
        </button>
        <button className="flex flex-col items-center">
          <AiOutlineDislike size={20} />
          <span>1</span>
        </button>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-400 mb-2">
              Posted by 닉네임 just now
            </p>
            <h2 className="font-bold">Article Title</h2>
          </div>
          <button>
            <AiOutlineBell color="#aaa" size={23} />
          </button>
        </div>
        <p className="my-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
          debitis eveniet vero repellendus necessitatibus sint ipsam veritatis
          facere, consequuntur quis? Quibusdam dolor, ipsum exercitationem
          nostrum mollitia minus deleniti sint dolorem.
        </p>
        <div className="flex text-gray-500">
          <button className="flex items-center mr-3">
            <AiOutlineComment />
            <span className="ml-2">Comments 4</span>
          </button>
          <button className="flex items-center mr-3">
            <AiOutlineShareAlt />
            <span className="ml-2">Share</span>
          </button>
          <button className="flex items-center mr-3">
            <AiOutlineDelete />
            <span className="ml-2">Delete</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default PostItem;
