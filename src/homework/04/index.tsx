import React from "react";
import styled from 'styled-components';

const Homework = () => {

  interface fruit {
    title:string;
    price: number;
    isSoldOut: boolean;
  }

  
  const data:fruit[] = [
    { title: "사과", price: 1000, isSoldOut: false },
    { title: "오렌지", price: 1500, isSoldOut: false },
    { title: "수박", price: 10000, isSoldOut: true },
    { title: "포도", price: 20000, isSoldOut: false },
    { title: "바나나", price: 5000, isSoldOut: false },
    { title: "블루베리", price: 10000, isSoldOut: true },
  ];

  return (
    <Table>
      {data
        .filter((fruit) => !fruit.isSoldOut)
        .map((fruit) => (
          <Fruit>
            과일이름: {fruit.title}, 과일가격: {fruit.price}
          </Fruit>
        ))}
    </Table>
  );
};

const Table = styled.table`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`

const Fruit = styled.td`
  padding: 10px;
  border-bottom: 1px solid black;
`

export default Homework;
