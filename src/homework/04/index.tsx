import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Fruit from "./Fruit";

interface IFruit {
  title: string;
  price: number;
  isSoldOut: boolean;
}

const Homework = () => {
  const data: IFruit[] = [
    { title: "사과", price: 1000, isSoldOut: false },
    { title: "오렌지", price: 1500, isSoldOut: false },
    { title: "수박", price: 10000, isSoldOut: true },
    { title: "포도", price: 20000, isSoldOut: false },
    { title: "바나나", price: 5000, isSoldOut: false },
    { title: "블루베리", price: 10000, isSoldOut: true },
  ];

  return (
    <>
      {data
        .filter((fruit) => !fruit.isSoldOut)
        .map((fruit) => (
          <Fruit title={fruit.title} price={fruit.price} />
        ))}
    </>
  );
};

export default Homework;
