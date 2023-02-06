import React, { Dispatch, SetStateAction } from "react";
import "./tailwind.css";

interface IProp {
  setModal: Dispatch<SetStateAction<boolean>>;
}
const ModalPost = ({ setModal }: IProp) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500/50">
      <div className="w-4/5 h-fit absolute top-0 bottom-0 left-0 right-0 m-auto bg-white">
        <div className="flex justify-between p-3 border-b">
          <button
            className="text-blue-600"
            onClick={() => setModal((prev) => !prev)}
          >
            Cancel
          </button>
          <p className="font-bold">Create a Post</p>
          <button className="text-blue-600">Post</button>
        </div>
        <div>
          <form className="flex flex-col">
            <div className="w-full">
              <input
                className="w-1/2 p-2 border"
                type="text"
                placeholder="닉네임"
              />
              <input
                className="w-1/2 p-2 border"
                type="password"
                placeholder="패스워드"
              />
            </div>
            <input className="p-2 border" type="text" placeholder="제목" />
            <textarea
              className="block p-2 w-full"
              placeholder="내용"
              cols={30}
              rows={25}
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalPost;
