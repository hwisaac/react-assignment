import React from "react";

// Q1
function Days(nums:number[]) :number {
  const [L, A, B, C, D] = nums;
  const x = A / C;
  const y = B / D;
  const leftDays = L - Math.max(x, y);

  return Math.floor(leftDays);
}

// Q2
function secsToHMS(working:number) :number[]{
  const s = working % 60;
  const m = parseInt(`${working / 60}`, 10) % 60;
  const h = parseInt(`${parseInt(`${working / 60}`, 10) / 60}`, 10);

  return [h, m, s];
}

// Q3
function newtonWithApple(people:string[]) : number{
  for (let i = 0; i < people.length; i++) {
    if (people[i] === "apple") {
      return i + 1;
    }
  }
  return 0;
}

// Q4
interface Ihuman {
  name: string;
  age: number;
}

function human(name: Ihuman['name'], age: Ihuman['age']) :Ihuman  {
  return {
    name,
    age,
  };
}

// Q5

function handleQuantity(quantity : number) :number | undefined {
  if (quantity < 0) {
    console.log("에러");
    return;
  }
  return quantity - 1;
}

// Q6
function gettingOlder(name : string, age : number) : [string, number] {
  return [name, age + 1];
}

const Homework = () => {
  return <>hello</>;
};

export default Homework;
