import { title } from 'process';
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { AiOutlinePlus } from 'react-icons/ai';
import './tailwind.css';

export function cls(...classnames: string[]) {
  return classnames.join(' ');
}
export type TProduct = { title: string; color: string; price: number };
const products: TProduct[] = [
  { title: 'New IPhone 14', color: 'black', price: 15 },
  { title: 'New IPhone 14', color: 'black', price: 15 },
  { title: 'New IPhone 14', color: 'black', price: 15 },
  { title: 'New IPhone 14', color: 'black', price: 15 },
  { title: 'New IPhone 14', color: 'black', price: 15 },
  { title: 'New IPhone 14', color: 'black', price: 15 },
  { title: 'New IPhone 14', color: 'black', price: 15 },
  { title: 'New IPhone 14', color: 'black', price: 15 },
];

const fixedCircle = [
  'bg-orange-500',
  'w-12',
  'h-12',
  'rounded-full',
  'fixed',
  'right-12',
  'bottom-12',
  'flex',
  'justify-center',
  'items-center',
];

const Homework = () => {
  return (
    <div className="w-full p-4 m-auto relative">
      {products.map((product, index) => (
        <ProductCard {...product} key={index} />
      ))}
      <div className={cls(...fixedCircle)}>
        <AiOutlinePlus className="fill-white" />
      </div>
    </div>
  );
};

export default Homework;
