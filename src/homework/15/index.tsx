import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import "./tailwind.css";

export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

const Homework = () => {
  const [select, setSelect] = useState("email");

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* space-y-8 : 각 요소의 위쪽 마진 */}
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Enter Page
        </h1>
        <p className="text-center text-sm text-gray-600">Enter using:</p>
        <div className="">
          <button
            onClick={() => setSelect("email")}
            className={`text-sm w-1/2 py-3 text-${
              select === "email" ? "orange" : "gray"
            }-500 border-b-2 border-${
              select === "email" ? "orange" : "gray"
            }-500`}
          >
            Email
          </button>
          <button
            onClick={() => setSelect("phone")}
            className={`text-sm w-1/2 py-3  text-${
              select === "phone" ? "orange" : "gray"
            }-500 border-b-2 border-${
              select === "phone" ? "orange" : "gray"
            }-500`}
          >
            Phone
          </button>
        </div>
        {/* 클릭시 ui 달라짐 */}
        <div className="">
          <p className="text-sm">
            {select === "email" ? "Email address" : "Phone number"}
          </p>
          {select === "email" ? (
            <input
              className="w-full block py-2 px-2 border rounded-lg mt-1 focus:outline-orange-500"
              type="email"
            />
          ) : (
            <div className="flex items-end">
              <button className="p-2 h-max border rounded-l-lg ">+82</button>
              <input
                className="w-full block p-2 h-max border rounded-r-lg mt-1 focus:outline-orange-500"
                type="number"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 py-2 rounded-lg text-sm mt-5 text-white"
          >
            {select === "email" ? "Get login link" : "Get one-time password"}
          </button>
          <div className="inline-flex items-center justify-center w-full relative">
            <hr className="w-full h-px my-8" />
            <span className="absolute px-3 bg-white left-1/2 -translate-x-1/2 text-sm text-gray-600">
              Or enter with
            </span>
          </div>

          <div className="flex">
            <button className="w-1/2 py-2 mr-3 border rounded-lg flex justify-center">
              <AiFillFacebook size={20} className="text-gray-500" />
            </button>
            <button className="w-1/2 py-2 border rounded-lg flex justify-center">
              <AiFillGithub size={20} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework;
