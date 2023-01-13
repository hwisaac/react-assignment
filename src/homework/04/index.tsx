import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

const Fruit = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 5px;
`;

interface IFruit {
  title: string;
  price: number;
  isSoldOut: boolean;
}
type Data = IFruit[];

const Homework = () => {
  const data: Data = [
    { title: '사과', price: 1000, isSoldOut: false },
    { title: '오렌지', price: 1500, isSoldOut: false },
    { title: '수박', price: 10000, isSoldOut: true },
    { title: '포도', price: 20000, isSoldOut: false },
    { title: '바나나', price: 5000, isSoldOut: false },
    { title: '블루베리', price: 10000, isSoldOut: true },
  ];

  return (
    <>
      {data.map((fruit) =>
        !fruit.isSoldOut ? (
          <Fruit>
            과일이름: {fruit.title}, 과일가격: {fruit.price}
          </Fruit>
        ) : null
      )}
    </>
  );
};

export default Homework;
