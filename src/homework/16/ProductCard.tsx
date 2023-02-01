import React from 'react';
import { cls, TProduct } from '.';
import './tailwind.css';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';

const commentBox = [
  'flex',
  'items-center',
  'justify-center',
  'gap-1',
  'w-20',
  'h-6',
  'absolute',
  'right-0',
  'bottom-[-15px]',
  'pr-3',
  'text-slate-500',
];

const ProductCard = ({ title, color, price }: TProduct) => {
  return (
    <div>
      <div className="flex items-center gap-4 relative">
        <div className="h-16 w-16 bg-slate-500 rounded-md"></div>
        <div>
          <h5 className="text-lg font-bold">{title}</h5>
          <p className="text-sm from-neutral-500">{color}</p>
          <p className="text-base font-semibold">$ {price}</p>
        </div>
        <div className={cls(...commentBox)}>
          <AiOutlineHeart />
          <p>15</p>
          <AiOutlineComment />
          <p>3</p>
        </div>
      </div>
      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default ProductCard;
