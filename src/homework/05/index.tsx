import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Fruit from "./../04/Fruit";

interface IFruit {
  // 작성
  name: string;
  price: number;
}

class Fruits {
  // 작성
  fruits;
  constructor(fruits: IFruit[]) {
    this.fruits = fruits;
  }

  get() {
    return this.fruits;
  }

  set(fruits: IFruit[]) {
    this.fruits = fruits;
  }
}

// 정답 코드
// class Fruits {
//   fruits: IFruit[];
//   constructor(private inputFruits: IFruit[]) {
//     this.fruits = inputFruits;
//   }
//   get(): IFruit[] {
//     return this.fruits;
//   }
//   set(newFruits: IFruit[]): void {
//     this.fruits = newFruits;
//   }
// }

const oldFruits: IFruit[] = [
  { name: "apple", price: 1000 },
  { name: "orange", price: 2000 },
  { name: "banana", price: 3000 },
  { name: "melon", price: 4000 },
];
const newFruits: IFruit[] = [
  { name: "mango", price: 5000 },
  { name: "kiwi", price: 6000 },
  { name: "grape", price: 7000 },
  { name: "water melon", price: 8000 },
];

const Homework = () => {
  const myFruits = new Fruits(oldFruits);
  const oldOne = myFruits.get();
  myFruits.set(newFruits);
  const newOne = myFruits.get();

  return (
    <>
      <h2>old one</h2>
      {/* 작성하세요 */}
      <ul>
        {oldOne.map((fruit, index) => (
          <li key={index}>
            {fruit.name} / {fruit.price}
          </li>
        ))}
      </ul>
      <h2>new one</h2>
      {/* 작성하세요 */}
      <ul>
        {newOne.map((fruit, index) => (
          <li key={index}>
            {fruit.name} / {fruit.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Homework;
