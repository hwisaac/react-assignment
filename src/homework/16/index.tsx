import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import "./tailwind.css";

export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

const Homework = () => {
  const items = new Array<number>();

  for (let i = 1; i <= 15; i++) {
    items.push(i);
  }

  return (
    <div>
      <ul className="w-full flex flex-col justify-center p-10">
        {items.map((i) => (
          <li
            key={i}
            className="px-2 py-5 flex justify-between items-end w-full border-b"
          >
            <div className="flex items-center">
              <div className="w-20 h-20 bg-slate-400 text-[0] rounded-lg mr-5">
                img
              </div>
              <div>
                <h2 className="font-bold text-sm">New iPhone 14</h2>
                <p className="text-xs text-gray-500 mb-1">Black</p>
                <strong>$95</strong>
              </div>
            </div>
            <div className="flex text-gray-600">
              <button className="flex items-center mr-3">
                <AiOutlineHeart size={15} />
                <span className="text-xs ml-1">1</span>
              </button>
              <button className="flex items-center">
                <BsChatDots size={15} />
                <span className="text-xs ml-1">1</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homework;
