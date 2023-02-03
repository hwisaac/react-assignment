import React from "react";
import Item from './Item';

export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

const addItemBtn = [
  'w-10', 
  'h-10', 
  'bg-orange-500',
  'fixed',
  'bottom-6',
  'right-6',
  'rounded-full', 
  'flex', 
  'items-center', 
  'justify-center',
]

export type Iphone = {
  title: string;
  color: string;
  price: string;
}

const iphones: Iphone[] = [
  {title: 'New iPhone 14' , color: 'Black', price: '$95'},
  {title: 'New iPhone 14' , color: 'Black', price: '$95'},
  {title: 'New iPhone 14' , color: 'Black', price: '$95'},
  {title: 'New iPhone 14' , color: 'Black', price: '$95'},
  {title: 'New iPhone 14' , color: 'Black', price: '$95'},
  {title: 'New iPhone 14' , color: 'Black', price: '$95'},
  {title: 'New iPhone 14' , color: 'Black', price: '$95'},
  {title: 'New iPhone 14' , color: 'Black', price: '$95'},
  {title: 'New iPhone 14' , color: 'Black', price: '$95'},
]

const Homework = () => {
  return (
    <div className='flex flex-col p-10'>
      {iphones.map((iphone, index) => {
        return <Item key={index} {...iphone}/>
      })}
      <div className={cls(...addItemBtn)}>
        <p className='text-2xl text-white'>+</p>
      </div>
    </div>
  );
};

export default Homework;

