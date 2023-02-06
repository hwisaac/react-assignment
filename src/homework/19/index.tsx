import React, { useEffect, useState } from 'react';
import LiSubCheckbox from './LiSubCheckbox';

const myData = [
  {
    id: 'list1',
    text: 'item1',
  },
  {
    id: 'list2',
    text: 'item2',
  },
  {
    id: 'list3',
    text: 'item3',
  },
];

const Homework = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleAllChecks = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      const tempArray: string[] = [];
      myData.map((value) => tempArray.push(value.id));
      setCheckedItems(tempArray);
    } else {
      setCheckedItems([]);
    }
  };

  return (
    <>
      <header>
        <input
          type="checkbox"
          checked={checkedItems.length === myData.length ? true : false}
          onChange={handleAllChecks}
        />
        전체선택
      </header>
      <main>
        <ul>
          {myData.map((item) => (
            <LiSubCheckbox
              key={item.id}
              id={item.id}
              text={item.text}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
            />
          ))}
        </ul>
      </main>
    </>
  );
};

export default Homework;
