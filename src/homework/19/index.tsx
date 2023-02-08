import React, { ChangeEvent, useState } from "react";
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

interface IData {
  id: string;
  text: string;
}

const Homework = () => {
  const [select, setSelect] = useState<string[]>([]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const ids: string[] = [];
      myData.forEach((el: IData) => ids.push(el.id));
      setSelect(ids);
    } else {
      setSelect([]);
    }
  };
  console.log(select);

  return (
    <>
      <header>
        <input
          onChange={onChange}
          type="checkbox"
          checked={select.length === myData.length ? true : false}
        />
        전체선택
      </header>
      <main>
        <ul>
          {myData.map((item) => (
            <LiSubCheckbox
              key={item.id}
              id={item.id}
              select={select}
              setSelect={setSelect}
            />
          ))}
        </ul>
      </main>
    </>
  );
};

export default Homework;
