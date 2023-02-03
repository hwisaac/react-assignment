import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineBell,
  AiOutlineComment,
  AiOutlineDelete,
  AiOutlineDislike,
  AiOutlineEnter,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineLike,
  AiOutlineSearch,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { SlNote } from "react-icons/sl";
import "./tailwind.css";

export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

const Homework = () => {
  const comments = new Array<number>();

  for (let i = 1; i <= 10; i++) {
    comments.push(i);
  }

  return (
    <>
      <header className="w-full flex justify-between bg-sky-900 p-3">
        <h1 className="text-white font-bold text-3xl">WILL</h1>
        <div className="flex">
          <button className="flex items-center ml-5">
            <AiOutlineHome size={25} color="white" />
            <span className="text-xl text-white ml-2">Home</span>
          </button>
          <button className="flex items-center ml-5">
            <AiOutlineSearch size={25} color="white" />
            <span className="text-xl text-white ml-2">Search</span>
          </button>
          <button className="flex items-center ml-5">
            <SlNote size={25} color="white" />
            <span className="text-xl text-white ml-2">Write</span>
          </button>
        </div>
      </header>

      <main className="p-8 w-full">
        <section className="w-full">
          <div className="w-full flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm mb-1">
                Posted by 닉네임 just now
              </p>
              <h2 className="font-bold text-lg">Article Title</h2>
            </div>
            <button>
              <AiOutlineBell size={28} color="#aaa" />
            </button>
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            repudiandae iusto quam! Aperiam, quia ullam quasi necessitatibus
            atque neque iure? Minima laborum deleniti sequi earum accusantium
            assumenda illum accusamus tenetur!
          </p>
          <div className="w-full flex justify-center">
            <button className="mt-8 border p-1">
              <AiFillHeart size={45} color="#da79c1" />
            </button>
          </div>
          <div className="mt-6 flex text-gray-500">
            <button className="flex items-center mr-5">
              <AiOutlineComment size={20} />
              <span className="ml-1">Comments 10</span>
            </button>
            <button className="flex items-center mr-5">
              <AiOutlineShareAlt size={20} />
              <span className="ml-1">Share</span>
            </button>
            <button className="flex items-center mr-5">
              <AiOutlineDelete size={20} />
              <span className="ml-1">Delete</span>
            </button>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-center">
            <div className="w-8 h-8 shrink-0 border rounded-full border-blue-500 bg-slate-300 text-[0]">
              img
            </div>
            <input
              className="border rounded-l-lg py-2 text-sm w-full ml-3"
              type="text"
            />
            <button className="border rounded-r-lg p-2">
              <AiOutlineEnter size={20} color="#646464" />
            </button>
          </div>

          <ul className="mt-10">
            {comments.map((com) => (
              <li key={com} className="mb-10">
                <div className="flex items-center">
                  <div className="w-8 h-8 shrink-0 border rounded-full bg-slate-300 text-[0]">
                    img
                  </div>
                  <span className="ml-3 font-bold">Nickname</span>
                  <span className="ml-3 text-sm text-gray-400">10 hr ago</span>
                </div>

                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit quos at architecto nobis pariatur modi illum,
                  eum, sed ducimus eaque ratione explicabo accusantium officia
                  enim cupiditate rem facere voluptatibus? Deserunt.
                </p>

                <div className="flex text-gray-500">
                  <button className="flex items-center mr-3">
                    <AiOutlineLike size={20} />
                    <span className="text-sm ml-1">23</span>
                  </button>
                  <button className="flex items-center mr-3">
                    <AiOutlineDislike size={20} />
                    <span className="text-sm ml-1">1</span>
                  </button>
                  <button className="flex items-center mr-3">
                    <AiOutlineComment size={20} />
                    <span className="text-sm ml-1">Reply</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Homework;
