import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface ISubCheckboxProps {
  id: string;
  select: string[];
  setSelect: Dispatch<SetStateAction<string[]>>;
}

const SubCheckbox = ({ id, setSelect, select }: ISubCheckboxProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelect((prev) => [...prev, id]);
    } else {
      setSelect((prev) => [...prev].filter((i) => i !== id));
    }
  };

  return (
    <li>
      <input
        onChange={onChange}
        type="checkbox"
        checked={select.includes(id) ? true : false}
      />
      자식선택
    </li>
  );
};

export default SubCheckbox;
