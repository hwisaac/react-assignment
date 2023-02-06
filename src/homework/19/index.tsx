import React, { useEffect, useState } from "react";
import LiSubCheckbox from "./LiSubCheckbox";

const myData = [
  {
    id: "list1",
    text: "item1",
  },
  {
    id: "list2",
    text: "item2",
  },
  {
    id: "list3",
    text: "item3",
  },
];

const Homework = () => {
  return (
    <>
      <header>
        <input type='checkbox' />
        전체선택
      </header>
      <main>
        <ul>
          {myData.map((item) => (
            <LiSubCheckbox key={item.id} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default Homework;
