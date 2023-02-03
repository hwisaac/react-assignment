import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import "./tailwind.css";
import ModalPost from "./ModalPost";
import PostItem from "./PostItem";

const Homework = () => {
  const [modal, setModal] = useState(false);

  const onClick = () => {
    setModal((prev) => !prev);
  };

  const items = new Array<number>();

  for (let i = 1; i <= 4; i++) {
    items.push(i);
  }

  return (
    <>
      <ul className="flex flex-col items-center p-5">
        {items.map((i) => (
          <PostItem key={i} />
        ))}
      </ul>
      <button onClick={onClick} className="fixed bottom-10 right-10">
        <AiFillPlusCircle size={35} color="#b41bf0" />
      </button>
      {modal ? <ModalPost setModal={setModal} /> : null}
    </>
  );
};

export default Homework;
