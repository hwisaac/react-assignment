import React, { useEffect, useState } from 'react';

interface ISubCheckboxProps {
  id: string;
  text: string;
  checkedItems: string[];
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const SubCheckbox = ({
  id,
  text,
  checkedItems,
  setCheckedItems,
}: ISubCheckboxProps) => {
  const handleOneCheck = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    console.log(target);
    if (target.checked) {
      setCheckedItems([...checkedItems, target.id]);
    } else {
      setCheckedItems(checkedItems.filter((value) => value !== target.id));
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={checkedItems.includes(id) ? true : false}
        onChange={handleOneCheck}
      />
      {text}
    </li>
  );
};

export default SubCheckbox;
